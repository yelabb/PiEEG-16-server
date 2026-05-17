import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Easing, Group as TweenGroup, Tween } from "three/examples/jsm/libs/tween.module.js";
import { VRM, VRMLoaderPlugin } from "@pixiv/three-vrm";
import type { ExperienceProps } from "../registry";

interface ExpressionBindings {
  leftBlink: string | null;
  rightBlink: string | null;
  brow: string | null;
  browOptions: string[];
  available: string[];
}

interface PoseState {
  leftBlink: number;
  rightBlink: number;
  brow: number;
}

interface RigBone {
  node: THREE.Object3D;
  neutral: THREE.Quaternion;
}

interface LimbRig {
  leftUpperArm?: RigBone;
  rightUpperArm?: RigBone;
  leftLowerArm?: RigBone;
  rightLowerArm?: RigBone;
  leftHand?: RigBone;
  rightHand?: RigBone;
}

function clamp01(value: number): number {
  return Math.max(0, Math.min(1, value));
}

function damp(current: number, target: number, lambda: number, dtSec: number): number {
  const alpha = 1 - Math.exp(-lambda * dtSec);
  return current + (target - current) * alpha;
}

function chooseName(available: string[], candidates: string[]): string | null {
  for (const candidate of candidates) {
    if (available.includes(candidate)) return candidate;
  }
  return null;
}

function sideMatches(name: string, side: "left" | "right"): boolean {
  const leftTokens = ["left", "_l", ".l", "-l", " l"];
  const rightTokens = ["right", "_r", ".r", "-r", " r"];
  const tokens = side === "left" ? leftTokens : rightTokens;
  return tokens.some((token) => name.includes(token));
}

function findSideBone(
  root: THREE.Object3D,
  side: "left" | "right",
  includeTokens: string[],
  excludeTokens: string[] = [],
): RigBone | undefined {
  let match: THREE.Object3D | undefined;
  root.traverse((obj) => {
    if (match || !(obj as THREE.Bone).isBone) return;
    const n = obj.name.toLowerCase();
    if (!sideMatches(n, side)) return;
    if (!includeTokens.some((token) => n.includes(token))) return;
    if (excludeTokens.some((token) => n.includes(token))) return;
    match = obj;
  });

  if (!match) return undefined;
  return { node: match, neutral: match.quaternion.clone() };
}

function applyOffsetRotation(
  bone: RigBone | undefined,
  xRad: number,
  yRad: number,
  zRad: number,
  scratchQuat: THREE.Quaternion,
): void {
  if (!bone) return;
  scratchQuat.setFromEuler(new THREE.Euler(xRad, yRad, zRad, "XYZ"));
  bone.node.quaternion.copy(bone.neutral).multiply(scratchQuat);
}

function rigFromNode(node: THREE.Object3D | null | undefined): RigBone | undefined {
  if (!node) return undefined;
  return { node, neutral: node.quaternion.clone() };
}

function getHumanoidNode(vrm: VRM, boneName: string): THREE.Object3D | null {
  const humanoid = (vrm as unknown as { humanoid?: unknown }).humanoid as {
    getNormalizedBoneNode?: (name: string) => THREE.Object3D | null;
    getRawBoneNode?: (name: string) => THREE.Object3D | null;
  } | undefined;

  return (
    humanoid?.getNormalizedBoneNode?.(boneName) ??
    humanoid?.getRawBoneNode?.(boneName) ??
    null
  );
}

export default function BrainDude({ onExit }: ExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rafRef = useRef(0);
  const clockRef = useRef(new THREE.Clock());
  const vrmRef = useRef<VRM | null>(null);
  const tweenGroupRef = useRef(new TweenGroup());
  const blinkPulseLeftRef = useRef({ value: 0 });
  const blinkPulseRightRef = useRef({ value: 0 });
  const leftPulseTweenRef = useRef<Tween<{ value: number }> | null>(null);
  const rightPulseTweenRef = useRef<Tween<{ value: number }> | null>(null);
  const demoClockRef = useRef(0);
  const nextDemoBlinkRef = useRef(0);
  const motionClockRef = useRef(0);
  const demoSideRef = useRef<"left" | "right">("left");
  const selectedBrowRef = useRef<string>("none");
  const neutralEyesRef = useRef(true);
  const armRelaxRef = useRef(true);
  const handMotionRef = useRef(0.35);
  const armRuntimeDisabledRef = useRef(false);
  const expressionRuntimeDisabledRef = useRef(false);
  const limbRigRef = useRef<LimbRig>({});
  const rotationQuatRef = useRef(new THREE.Quaternion());
  const bindingsRef = useRef<ExpressionBindings>({
    leftBlink: null,
    rightBlink: null,
    brow: null,
    browOptions: [],
    available: [],
  });

  const manualLeftRef = useRef(0);
  const manualRightRef = useRef(0);
  const manualBrowRef = useRef(0);
  const demoModeRef = useRef(true);

  const smoothedRef = useRef<PoseState>({ leftBlink: 0, rightBlink: 0, brow: 0 });

  const [status, setStatus] = useState("Loading Brain Dude VRM...");
  const [modelReady, setModelReady] = useState(false);
  const [manualLeft, setManualLeft] = useState(0);
  const [manualRight, setManualRight] = useState(0);
  const [manualBrow, setManualBrow] = useState(0);
  const [demoMode, setDemoMode] = useState(true);
  const [selectedBrow, setSelectedBrow] = useState<string>("none");
  const [neutralEyes, setNeutralEyes] = useState(true);
  const [armRelax, setArmRelax] = useState(true);
  const [handMotion, setHandMotion] = useState(0.35);
  const [bindings, setBindings] = useState<ExpressionBindings>({
    leftBlink: null,
    rightBlink: null,
    brow: null,
    browOptions: [],
    available: [],
  });

  useEffect(() => {
    manualLeftRef.current = manualLeft;
  }, [manualLeft]);

  useEffect(() => {
    manualRightRef.current = manualRight;
  }, [manualRight]);

  useEffect(() => {
    manualBrowRef.current = manualBrow;
  }, [manualBrow]);

  useEffect(() => {
    demoModeRef.current = demoMode;
  }, [demoMode]);

  useEffect(() => {
    selectedBrowRef.current = selectedBrow;
  }, [selectedBrow]);

  useEffect(() => {
    neutralEyesRef.current = neutralEyes;
  }, [neutralEyes]);

  useEffect(() => {
    armRelaxRef.current = armRelax;
  }, [armRelax]);

  useEffect(() => {
    handMotionRef.current = handMotion;
  }, [handMotion]);

  const triggerLeftBlink = useCallback(() => {
    if (leftPulseTweenRef.current) leftPulseTweenRef.current.stop();
    blinkPulseLeftRef.current.value = 0;

    const rise = new Tween(blinkPulseLeftRef.current, tweenGroupRef.current)
      .to({ value: 1 }, 70)
      .easing(Easing.Cubic.Out);
    const fall = new Tween(blinkPulseLeftRef.current, tweenGroupRef.current)
      .to({ value: 0 }, 110)
      .easing(Easing.Cubic.In);

    rise.chain(fall);
    leftPulseTweenRef.current = rise;
    rise.start();
  }, []);

  const triggerRightBlink = useCallback(() => {
    if (rightPulseTweenRef.current) rightPulseTweenRef.current.stop();
    blinkPulseRightRef.current.value = 0;

    const rise = new Tween(blinkPulseRightRef.current, tweenGroupRef.current)
      .to({ value: 1 }, 70)
      .easing(Easing.Cubic.Out);
    const fall = new Tween(blinkPulseRightRef.current, tweenGroupRef.current)
      .to({ value: 0 }, 110)
      .easing(Easing.Cubic.In);

    rise.chain(fall);
    rightPulseTweenRef.current = rise;
    rise.start();
  }, []);

  const triggerBothBlink = useCallback(() => {
    triggerLeftBlink();
    triggerRightBlink();
  }, [triggerLeftBlink, triggerRightBlink]);

  const resetPose = useCallback(() => {
    setManualLeft(0);
    setManualRight(0);
    setManualBrow(0);
    if (leftPulseTweenRef.current) leftPulseTweenRef.current.stop();
    if (rightPulseTweenRef.current) rightPulseTweenRef.current.stop();
    blinkPulseLeftRef.current.value = 0;
    blinkPulseRightRef.current.value = 0;
  }, []);

  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") onExit();
      if (ev.key === "q" || ev.key === "Q") triggerLeftBlink();
      if (ev.key === "e" || ev.key === "E") triggerRightBlink();
      if (ev.key === "b" || ev.key === "B") triggerBothBlink();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onExit, triggerBothBlink, triggerLeftBlink, triggerRightBlink]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe8e5df);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(34, 1, 0.05, 100);
    camera.position.set(0, 1.3, 3.1);
    camera.lookAt(0, 1.1, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.domElement.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;";
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const hemi = new THREE.HemisphereLight(0xfff0e5, 0xc3beb7, 1.05);
    scene.add(hemi);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.35);
    keyLight.position.set(2.4, 3.2, 2.6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffd8c8, 0.45);
    fillLight.position.set(-1.8, 1.4, -1.1);
    scene.add(fillLight);

    const floor = new THREE.GridHelper(8, 24, 0xc5c1b8, 0xd5d1ca);
    floor.position.y = 0.02;
    scene.add(floor);

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.65, 1.5, 64),
      new THREE.MeshBasicMaterial({
        color: 0xbbb5ab,
        transparent: true,
        opacity: 0.45,
        side: THREE.DoubleSide,
      }),
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(0, 0.022, 0);
    scene.add(ring);

    const loader = new GLTFLoader();
    loader.register((parser) => new VRMLoaderPlugin(parser));

    loader.load(
      "/BrainDude.vrm",
      (gltf) => {
        const vrm = gltf.userData.vrm as VRM | undefined;
        if (!vrm) {
          setStatus("VRM loaded but avatar data is missing.");
          return;
        }

        vrmRef.current = vrm;
        scene.add(vrm.scene);

        const bounds = new THREE.Box3().setFromObject(vrm.scene);
        const size = bounds.getSize(new THREE.Vector3());
        const center = bounds.getCenter(new THREE.Vector3());
        const scale = 1.75 / Math.max(size.y, 0.001);

        vrm.scene.scale.setScalar(scale);
        vrm.scene.position.set(-center.x * scale, -bounds.min.y * scale, -center.z * scale);
        vrm.scene.rotation.y = Math.PI;

        const fromHumanoid: LimbRig = {
          leftUpperArm: rigFromNode(getHumanoidNode(vrm, "leftUpperArm")),
          rightUpperArm: rigFromNode(getHumanoidNode(vrm, "rightUpperArm")),
          leftLowerArm: rigFromNode(getHumanoidNode(vrm, "leftLowerArm")),
          rightLowerArm: rigFromNode(getHumanoidNode(vrm, "rightLowerArm")),
          leftHand: rigFromNode(getHumanoidNode(vrm, "leftHand")),
          rightHand: rigFromNode(getHumanoidNode(vrm, "rightHand")),
        };

        limbRigRef.current = {
          leftUpperArm: fromHumanoid.leftUpperArm ?? findSideBone(vrm.scene, "left", ["upperarm", "shoulder"]),
          rightUpperArm: fromHumanoid.rightUpperArm ?? findSideBone(vrm.scene, "right", ["upperarm", "shoulder"]),
          leftLowerArm: fromHumanoid.leftLowerArm ?? findSideBone(vrm.scene, "left", ["lowerarm", "forearm", "arm"]),
          rightLowerArm: fromHumanoid.rightLowerArm ?? findSideBone(vrm.scene, "right", ["lowerarm", "forearm", "arm"]),
          leftHand: fromHumanoid.leftHand ?? findSideBone(vrm.scene, "left", ["hand", "wrist"], ["thumb", "index", "middle", "ring", "pinky", "finger"]),
          rightHand: fromHumanoid.rightHand ?? findSideBone(vrm.scene, "right", ["hand", "wrist"], ["thumb", "index", "middle", "ring", "pinky", "finger"]),
        };

        const available = Object.keys(vrm.expressionManager?.expressionMap ?? {});
        const browOptions = [
          "surprised",
          "happy",
          "relaxed",
          "sad",
          "angry",
        ].filter((name) => available.includes(name));

        const initialBrow = chooseName(browOptions, [
          "surprised",
          "happy",
          "relaxed",
          "sad",
          "angry",
        ]);

        const resolved: ExpressionBindings = {
          leftBlink: chooseName(available, ["blinkLeft", "blink_l", "blink"]),
          rightBlink: chooseName(available, ["blinkRight", "blink_r", "blink"]),
          brow: initialBrow,
          browOptions,
          available,
        };

        bindingsRef.current = resolved;
        setBindings(resolved);
        setSelectedBrow(initialBrow ?? "none");

        const missing: string[] = [];
        if (!resolved.leftBlink) missing.push("left blink");
        if (!resolved.rightBlink) missing.push("right blink");
        if (!resolved.brow) missing.push("brow");

        const limbCount = Object.values(limbRigRef.current).filter(Boolean).length;
        if (limbCount === 0) {
          setArmRelax(false);
          armRelaxRef.current = false;
        }

        setModelReady(true);
        if (missing.length === 0) {
          setStatus(`Animation rig ready: left blink, right blink, and brow are mapped. Arm bones: ${limbCount}/6.`);
        } else {
          setStatus(`Partial rig: missing ${missing.join(", ")}. Arm bones: ${limbCount}/6.`);
        }
      },
      undefined,
      (err) => {
        console.error("Brain Dude VRM load failed", err);
        setStatus("Failed to load /BrainDude.vrm.");
      },
    );

    const handleResize = () => {
      const host = containerRef.current;
      const cam = cameraRef.current;
      const rnd = rendererRef.current;
      if (!host || !cam || !rnd) return;
      cam.aspect = host.clientWidth / Math.max(1, host.clientHeight);
      cam.updateProjectionMatrix();
      rnd.setSize(host.clientWidth, host.clientHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const animate = () => {
      const rendererCurrent = rendererRef.current;
      const sceneCurrent = sceneRef.current;
      const cameraCurrent = cameraRef.current;
      if (!rendererCurrent || !sceneCurrent || !cameraCurrent) return;

      const dt = clockRef.current.getDelta();
      motionClockRef.current += dt;
      tweenGroupRef.current.update();

      if (demoModeRef.current) {
        demoClockRef.current += dt;
        if (demoClockRef.current >= nextDemoBlinkRef.current) {
          if (demoSideRef.current === "left") {
            if (leftPulseTweenRef.current) leftPulseTweenRef.current.stop();
            blinkPulseLeftRef.current.value = 0;
            const rise = new Tween(blinkPulseLeftRef.current, tweenGroupRef.current)
              .to({ value: 1 }, 70)
              .easing(Easing.Cubic.Out);
            const fall = new Tween(blinkPulseLeftRef.current, tweenGroupRef.current)
              .to({ value: 0 }, 110)
              .easing(Easing.Cubic.In);
            rise.chain(fall);
            leftPulseTweenRef.current = rise;
            rise.start();
            demoSideRef.current = "right";
          } else {
            if (rightPulseTweenRef.current) rightPulseTweenRef.current.stop();
            blinkPulseRightRef.current.value = 0;
            const rise = new Tween(blinkPulseRightRef.current, tweenGroupRef.current)
              .to({ value: 1 }, 70)
              .easing(Easing.Cubic.Out);
            const fall = new Tween(blinkPulseRightRef.current, tweenGroupRef.current)
              .to({ value: 0 }, 110)
              .easing(Easing.Cubic.In);
            rise.chain(fall);
            rightPulseTweenRef.current = rise;
            rise.start();
            demoSideRef.current = "left";
          }
          nextDemoBlinkRef.current = demoClockRef.current + 1.15;
        }
      }

      const pulseLeft = blinkPulseLeftRef.current.value;
      const pulseRight = blinkPulseRightRef.current.value;

      const demoBrow = demoModeRef.current ? 0.45 + 0.2 * Math.sin(demoClockRef.current * 1.8) : 0;

      const targetLeft = clamp01(Math.max(manualLeftRef.current, pulseLeft));
      const targetRight = clamp01(Math.max(manualRightRef.current, pulseRight));
      const targetBrow = clamp01(Math.max(manualBrowRef.current, demoBrow));

      const smooth = smoothedRef.current;
      smooth.leftBlink = damp(smooth.leftBlink, targetLeft, 38, dt);
      smooth.rightBlink = damp(smooth.rightBlink, targetRight, 38, dt);
      smooth.brow = damp(smooth.brow, targetBrow, 10, dt);

      const vrm = vrmRef.current;
      if (!expressionRuntimeDisabledRef.current && vrm?.expressionManager) {
        try {
          const em = vrm.expressionManager;
          const map = bindingsRef.current;
          const chosenBrow = selectedBrowRef.current === "none" ? null : selectedBrowRef.current;

          if (neutralEyesRef.current) {
            em.setValue("lookUp", 0);
            em.setValue("lookDown", 0);
            em.setValue("lookLeft", 0);
            em.setValue("lookRight", 0);
          }

          em.setValue("blink", Math.min(smooth.leftBlink, smooth.rightBlink));

          if (map.leftBlink && map.rightBlink && map.leftBlink === map.rightBlink) {
            em.setValue(map.leftBlink, Math.max(smooth.leftBlink, smooth.rightBlink));
          } else {
            if (map.leftBlink) em.setValue(map.leftBlink, smooth.leftBlink);
            if (map.rightBlink) em.setValue(map.rightBlink, smooth.rightBlink);
          }

          if (map.browOptions.length > 0) {
            for (const browName of map.browOptions) {
              em.setValue(browName, browName === chosenBrow ? smooth.brow : 0);
            }
          }

          em.update();
        } catch (error) {
          console.error("Expression runtime error", error);
          expressionRuntimeDisabledRef.current = true;
          setStatus("Expression rig error. Blink/brow updates paused; scene still running.");
        }
      }

      if (!armRuntimeDisabledRef.current) {
        try {
          const limbs = limbRigRef.current;
          const relaxAmount = armRelaxRef.current ? 1 : 0;
          const handIdleAmount = handMotionRef.current * relaxAmount;
          const t = motionClockRef.current;

          const shoulderSway = 0.05 * relaxAmount * Math.sin(t * 0.7);
          const forearmPulse = 0.04 * relaxAmount * Math.sin(t * 1.05 + 0.7);
          const wristPulse = 0.08 * handIdleAmount * Math.sin(t * 1.6 + 0.3);
          const wristTwist = 0.09 * handIdleAmount * Math.sin(t * 1.2 + 1.1);

          const scratch = rotationQuatRef.current;

          applyOffsetRotation(
            limbs.leftUpperArm,
            0.2 * relaxAmount,
            0.06 * relaxAmount + shoulderSway,
            1.2 * relaxAmount,
            scratch,
          );
          applyOffsetRotation(
            limbs.rightUpperArm,
            0.2 * relaxAmount,
            -0.06 * relaxAmount - shoulderSway,
            -1.2 * relaxAmount,
            scratch,
          );

          applyOffsetRotation(
            limbs.leftLowerArm,
            0.5 * relaxAmount + forearmPulse,
            0.02 * relaxAmount,
            0.12 * relaxAmount,
            scratch,
          );
          applyOffsetRotation(
            limbs.rightLowerArm,
            0.5 * relaxAmount + forearmPulse,
            -0.02 * relaxAmount,
            -0.12 * relaxAmount,
            scratch,
          );

          applyOffsetRotation(
            limbs.leftHand,
            0.1 * relaxAmount + wristPulse,
            0.04 * relaxAmount + wristTwist,
            0.02 * relaxAmount,
            scratch,
          );
          applyOffsetRotation(
            limbs.rightHand,
            0.1 * relaxAmount - wristPulse,
            -0.04 * relaxAmount - wristTwist,
            -0.02 * relaxAmount,
            scratch,
          );
        } catch (error) {
          console.error("Arm/hand runtime error", error);
          armRuntimeDisabledRef.current = true;
          armRelaxRef.current = false;
          setArmRelax(false);
          setStatus("Arm rig error detected. Arms auto-disabled; face animation continues.");
        }
      }

      if (vrm) vrm.update(dt);

      rendererCurrent.render(sceneCurrent, cameraCurrent);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);

      vrmRef.current = null;
      limbRigRef.current = {};

      renderer.dispose();
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }

      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
    };
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, background: "#ebe8e2", color: "#1e1a17", fontFamily: "'Geist','Inter',sans-serif" }}>
      <div ref={containerRef} style={{ position: "absolute", inset: 0 }} />

      <div style={{ position: "absolute", top: 16, left: 16, display: "flex", gap: 10, alignItems: "center" }}>
        <button className="btn" onClick={onExit}>← Experiences</button>
        <div style={{ background: "rgba(255,255,255,0.9)", border: "1px solid #d0cac2", borderRadius: 10, padding: "8px 12px", fontSize: 13 }}>
          {status}
        </div>
      </div>

      <aside
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          width: "min(420px, calc(100vw - 32px))",
          background: "rgba(255,255,255,0.93)",
          border: "1px solid #d1cbc2",
          borderRadius: 16,
          backdropFilter: "blur(10px)",
          padding: 14,
          display: "grid",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
          <h2 style={{ margin: 0, fontSize: 16, letterSpacing: "0.01em" }}>Brain Dude Animation Lab</h2>
          <button className="btn btn-sm" onClick={() => setDemoMode((v) => !v)}>
            {demoMode ? "Demo Loop: ON" : "Demo Loop: OFF"}
          </button>
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button className="btn btn-sm" onClick={triggerLeftBlink}>Blink Left (Q)</button>
          <button className="btn btn-sm" onClick={triggerRightBlink}>Blink Right (E)</button>
          <button className="btn btn-sm" onClick={triggerBothBlink}>Blink Both (B)</button>
          <button className="btn btn-sm" onClick={resetPose}>Reset</button>
          <button className="btn btn-sm" onClick={() => setNeutralEyes((v) => !v)}>
            {neutralEyes ? "Neutral Eyes: ON" : "Neutral Eyes: OFF"}
          </button>
          <button className="btn btn-sm" onClick={() => setArmRelax((v) => !v)}>
            {armRelax ? "Relax Arms: ON" : "Relax Arms: OFF"}
          </button>
        </div>

        <div style={{ display: "grid", gap: 10 }}>
          <div style={{ display: "grid", gap: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
              <span>Left blink weight</span>
              <span>{Math.round(manualLeft * 100)}%</span>
            </div>
            <input type="range" min={0} max={1} step={0.01} value={manualLeft} onChange={(e) => setManualLeft(Number(e.target.value))} />
          </div>

          <div style={{ display: "grid", gap: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
              <span>Right blink weight</span>
              <span>{Math.round(manualRight * 100)}%</span>
            </div>
            <input type="range" min={0} max={1} step={0.01} value={manualRight} onChange={(e) => setManualRight(Number(e.target.value))} />
          </div>

          <div style={{ display: "grid", gap: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
              <span>Eyebrow weight</span>
              <span>{Math.round(manualBrow * 100)}%</span>
            </div>
            <input type="range" min={0} max={1} step={0.01} value={manualBrow} onChange={(e) => setManualBrow(Number(e.target.value))} />
          </div>

          <div style={{ display: "grid", gap: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
              <span>Eyebrow expression</span>
              <span>{selectedBrow}</span>
            </div>
            <select
              value={selectedBrow}
              onChange={(e) => setSelectedBrow(e.target.value)}
              style={{ height: 32, borderRadius: 8, border: "1px solid #d0cac2", background: "#fff" }}
            >
              <option value="none">none</option>
              {bindings.browOptions.map((name) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </div>

          <div style={{ display: "grid", gap: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12 }}>
              <span>Hand idle animation</span>
              <span>{Math.round(handMotion * 100)}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={handMotion}
              onChange={(e) => setHandMotion(Number(e.target.value))}
            />
          </div>
        </div>

        <div style={{ borderTop: "1px solid #ded8d1", paddingTop: 10, display: "grid", gap: 5, fontSize: 12, color: "#4c443c" }}>
          <strong style={{ color: "#2a251f" }}>Mapped VRM expressions</strong>
          <span>Left blink: {bindings.leftBlink ?? "not found"}</span>
          <span>Right blink: {bindings.rightBlink ?? "not found"}</span>
          <span>Eyebrow default: {bindings.brow ?? "not found"}</span>
          <span style={{ opacity: 0.9 }}>Detected: {bindings.available.length > 0 ? bindings.available.join(", ") : "none"}</span>
        </div>

        {!modelReady && (
          <div style={{ fontSize: 12, color: "#7b2f1f", background: "#fff3ee", border: "1px solid #efc5b8", borderRadius: 10, padding: "8px 10px" }}>
            If load fails, verify the file exists at dashboard/public/BrainDude.vrm.
          </div>
        )}
      </aside>
    </div>
  );
}
