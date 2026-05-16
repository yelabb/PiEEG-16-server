// ─────────────────────────────────────────────────────────────────────────────
// VrmViewer — plain Three.js + @pixiv/three-vrm, no React Three Fiber
// Renders mx-pauline-werker.vrm with Iron Man–style lighting.
// Responds to isBlinking / earState / mentalState without re-mounting.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
  VRM,
  VRMHumanBoneName,
  VRMLoaderPlugin,
  VRMExpressionPresetName,
} from "@pixiv/three-vrm";

export type EarState    = "perked" | "neutral" | "drooped";
export type MentalState = "focus"  | "relax"   | "alert"  | "neutral";

interface Props {
  isBlinking:  boolean;
  earState:    EarState;
  mentalState: MentalState;
}

// ── Ear bone detection (same patterns as VrmAvatar.tsx) ───────────────────

const EAR_PATTERNS_L: RegExp[] = [
  /ear.*l(eft)?$/i, /l(eft)?.*ear/i, /J_Adj_L_EarBase/i, /ear_l$/i, /l_ear$/i,
];
const EAR_PATTERNS_R: RegExp[] = [
  /ear.*r(ight)?$/i, /r(ight)?.*ear/i, /J_Adj_R_EarBase/i, /ear_r$/i, /r_ear$/i,
];

function findEarBones(vrm: VRM): {
  left: THREE.Object3D | null;
  right: THREE.Object3D | null;
} {
  const names: string[] = [];
  vrm.scene.traverse((o) => { if (o.name) names.push(o.name); });

  const find = (pats: RegExp[]): THREE.Object3D | null => {
    for (const p of pats) {
      const n = names.find((name) => p.test(name));
      if (n) {
        let node: THREE.Object3D | null = null;
        vrm.scene.traverse((o) => { if (o.name === n) node = o; });
        return node;
      }
    }
    return null;
  };

  return { left: find(EAR_PATTERNS_L), right: find(EAR_PATTERNS_R) };
}

const EAR_ROT: Record<EarState, { lZ: number; rZ: number }> = {
  perked:  { lZ:  0.18, rZ: -0.18 },
  neutral: { lZ:  0,    rZ:  0    },
  drooped: { lZ: -0.28, rZ:  0.28 },
};
const EAR_LERP = 0.06;

// ── Idle pose: arms relaxed at sides ─────────────────────────────────────

function applyIdlePose(vrm: VRM) {
  const h = vrm.humanoid;
  if (!h) return;
  const set = (name: VRMHumanBoneName, x: number, y: number, z: number) => {
    const node = h.getNormalizedBoneNode(name);
    if (node) node.rotation.set(x, y, z);
  };
  set(VRMHumanBoneName.LeftUpperArm,  0, 0,  1.25);
  set(VRMHumanBoneName.RightUpperArm, 0, 0, -1.25);
  set(VRMHumanBoneName.LeftLowerArm,  0, -0.15, 0);
  set(VRMHumanBoneName.RightLowerArm, 0,  0.15, 0);
}

// ── Mental state → expression mapping ────────────────────────────────────

const MENTAL_EXPR: Record<MentalState, string | null> = {
  focus:   null,                                // keep neutral
  relax:   VRMExpressionPresetName.Relaxed,
  alert:   VRMExpressionPresetName.Surprised,
  neutral: null,
};
const FADEOUT_EXPRS = [
  VRMExpressionPresetName.Relaxed,
  VRMExpressionPresetName.Surprised,
];

// ── Component ─────────────────────────────────────────────────────────────

export default function VrmViewer({ isBlinking, earState, mentalState }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Live props without triggering re-mount
  const propsRef = useRef({ isBlinking, earState, mentalState });
  useEffect(() => { propsRef.current = { isBlinking, earState, mentalState }; });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── Renderer ────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    // ── Scene ────────────────────────────────────────────────────────────
    const scene = new THREE.Scene();

    // ── Camera — head / bust shot ─────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(30, 1, 0.01, 20);
    camera.position.set(0, 1.52, 0.72);
    camera.lookAt(0, 1.44, 0);

    const syncSize = () => {
      const W = canvas.clientWidth;
      const H = canvas.clientHeight;
      if (W === 0 || H === 0) return;
      renderer.setSize(W, H, false);
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
    };
    syncSize();

    // ── Iron Man–style lighting ──────────────────────────────────────────
    // Dim ambient so model isn't washed out
    scene.add(new THREE.AmbientLight(0x0a1a28, 2.5));

    // Cyan rim — left
    const rimCyan = new THREE.DirectionalLight(0x5fe9ff, 2.8);
    rimCyan.position.set(-1.8, 2.2, 0.6);
    scene.add(rimCyan);

    // Orange rim — right
    const rimOrange = new THREE.DirectionalLight(0xff9d2e, 1.8);
    rimOrange.position.set(1.8, 1.6, 0.6);
    scene.add(rimOrange);

    // Cool blue-white fill from front
    const fill = new THREE.DirectionalLight(0x8ab4c8, 1.0);
    fill.position.set(0, 1.2, 2.5);
    scene.add(fill);

    // ── VRM ─────────────────────────────────────────────────────────────
    let vrm: VRM | null        = null;
    let earL: THREE.Object3D | null = null;
    let earR: THREE.Object3D | null = null;
    const earSmooth = { lZ: 0, rZ: 0 };
    let blinkSmooth = 0;

    const loader = new GLTFLoader();
    loader.register((parser) => new VRMLoaderPlugin(parser));
    loader.load(
      "/models/mx-pauline-werker.vrm",
      (gltf) => {
        const v = gltf.userData.vrm as VRM | undefined;
        if (!v) return;
        vrm = v;
        scene.add(vrm.scene);
        applyIdlePose(vrm);
        const bones = findEarBones(vrm);
        earL = bones.left;
        earR = bones.right;
      },
      undefined,
      (err) => console.warn("VRM load error", err),
    );

    // ── Animation loop ───────────────────────────────────────────────────
    const clock = new THREE.Clock();
    let rafId: number;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const delta   = clock.getDelta();
      const elapsed = clock.elapsedTime;
      const { isBlinking, earState, mentalState } = propsRef.current;

      if (vrm) {
        vrm.update(delta);

        // ── Subtle idle breath + head sway ────────────────────────────
        const head = vrm.humanoid?.getNormalizedBoneNode(VRMHumanBoneName.Head);
        if (head) {
          head.rotation.y = Math.sin(elapsed * 0.42)  * 0.025;
          head.rotation.x = Math.sin(elapsed * 0.27)  * 0.015 - 0.04;
          head.rotation.z = Math.sin(elapsed * 0.335) * 0.012;
        }
        const spine = vrm.humanoid?.getNormalizedBoneNode(VRMHumanBoneName.Spine);
        if (spine) {
          spine.rotation.x = Math.sin(elapsed * 0.45) * 0.008 - 0.02;
        }

        // ── Blink ─────────────────────────────────────────────────────
        const blinkTarget = isBlinking ? 1.0 : 0.0;
        blinkSmooth += (blinkTarget - blinkSmooth) * (isBlinking ? 0.35 : 0.14);
        vrm.expressionManager?.setValue(VRMExpressionPresetName.BlinkLeft,  blinkSmooth);
        vrm.expressionManager?.setValue(VRMExpressionPresetName.BlinkRight, blinkSmooth);

        // ── Mental state expression (only when eyes are open) ─────────
        if (blinkSmooth < 0.1) {
          const targetExpr = MENTAL_EXPR[mentalState];
          for (const name of FADEOUT_EXPRS) {
            if (name === targetExpr) continue;
            const cur = vrm.expressionManager?.getValue(name) ?? 0;
            if (cur > 0.005) vrm.expressionManager?.setValue(name, cur * 0.9);
          }
          if (targetExpr) {
            const cur = vrm.expressionManager?.getValue(targetExpr) ?? 0;
            vrm.expressionManager?.setValue(targetExpr, cur + (0.65 - cur) * 0.04);
          }
        }

        // ── Ear bones ─────────────────────────────────────────────────
        const rot = EAR_ROT[earState];
        earSmooth.lZ += (rot.lZ - earSmooth.lZ) * EAR_LERP;
        earSmooth.rZ += (rot.rZ - earSmooth.rZ) * EAR_LERP;
        if (earL) earL.rotation.z = earSmooth.lZ;
        if (earR) earR.rotation.z = earSmooth.rZ;
      }

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize observer ───────────────────────────────────────────────────
    const ro = new ResizeObserver(syncSize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      renderer.dispose();
      if (vrm) scene.remove(vrm.scene);
    };
  }, []); // mount once — props flow through propsRef

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
