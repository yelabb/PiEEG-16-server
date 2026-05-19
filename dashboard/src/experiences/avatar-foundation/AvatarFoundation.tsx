// ─────────────────────────────────────────────────────────────────────────────
// Avatar Foundation — EEG-driven facial neurofeedback studio.
//
// What this is:
//   A real-time facial-expression neurofeedback workbench. Every detected EEG
//   electrode is exposed as a feature source; every avatar facial expression
//   (VRM expressionManager preset or glTF morph target) is a controllable sink;
//   the user defines and trains "Links" between them through a Figma-style
//   panel — picking the channel, frequency band, gain, smoothing, inversion.
//
// Scientific pipeline (per ~80 ms tick):
//   1.  256-sample Hanning-windowed FFT on every channel  → per-band PSD (µV²/Hz)
//   2.  log10(power + ε)                                  → approximately Gaussian
//   3.  Two-state contrastive calibration (REST 20 s vs ACTIVE 20 s)
//        → Welford mean/std on log-power for both phases
//        → Cohen's d ranks every (channel × band) pair by within-session
//          separability (descriptive, NOT a generalisation claim)
//   4.  Linear map: (feature − rest.mean) / (active.mean − rest.mean)
//        clipped to [0,1], gained, EMA-smoothed → expression weight ∈ [0,1]
//
// 3D layer (kept from the original Foundation):
//   • GLTFLoader + VRMLoaderPlugin → /avatar.vrm or /avatar.glb
//   • OrbitControls, MToon-friendly lighting, eye look-at target
//   • Procedural body breathing/sway so the avatar stays alive between cues
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useEffect, useState, useCallback } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { VRMLoaderPlugin, VRMUtils, type VRM } from "@pixiv/three-vrm";
import type { ExperienceProps } from "../registry";
import { useChannelBandPowers } from "./neuro/useChannelBandPowers";
import { MappingStudio } from "./neuro/MappingStudio";
import { TrainingOverlay } from "./neuro/TrainingOverlay";
import {
  BAND_NAMES,
  type Link,
  type LinkRuntime,
} from "./neuro/types";
import { evaluateLink, newRuntime } from "./neuro/engine";

// ── 3D scene types (carried over from previous Foundation) ──────────────────

interface MorphTarget {
  mesh: THREE.Mesh;
  index: number;
}

interface SceneState {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;
  vrm: VRM | null;
  morphs: Map<string, MorphTarget[]>;
  clock: THREE.Clock;
  rafId: number;
  bones: Record<string, THREE.Object3D>;
  /** Latest expression weights written this frame, keyed by expression name. */
  expressionWeights: Map<string, number>;
  /** Spontaneous-blink schedule (so avatar stays "alive"). */
  nextBlinkAt: number;
  blinkUntil: number;
}

// ── Configuration ───────────────────────────────────────────────────────────
//
// All scene-level tuning lives here so the body of the component stays focused
// on wiring. Numbers were picked empirically for a roughly 1.7 m humanoid VRM.
//
const AVATAR_CONFIG = {
  /** Default avatar files to try (first hit wins). */
  avatarUrls: ["/avatar.vrm", "/avatar.glb"] as const,
  /** Target avatar height in scene units after auto-scale. */
  targetHeight: 1.7,
  camera: {
    fov: 30,
    near: 0.1,
    far: 20,
    position: [0, 1.35, 2.6] as const,
    target: [0, 1.45, 0] as const,
    minDistance: 0.4,
    maxDistance: 8,
  },
  /** Spontaneous-blink scheduling so the avatar stays "alive". */
  blink: {
    durationMs: 160,
    minIntervalMs: 3000,
    maxIntervalMs: 6000,
  },
  /** Procedural breathing/sway frequencies (radians / s). */
  idle: {
    breathHz: 1.2,
    swayHz: 0.45,
    armRestZLeft: -1.4,
    armRestZRight: 1.4,
    armForward: 0.12,
  },
} as const;

// ── Procedural body animation (idle breathing) ──────────────────────────────

const BONE_NAMES = [
  "hips", "spine", "chest", "upperChest", "neck", "head",
  "leftUpperArm", "leftLowerArm", "leftHand",
  "rightUpperArm", "rightLowerArm", "rightHand",
  "leftUpperLeg", "leftLowerLeg", "leftFoot",
  "rightUpperLeg", "rightLowerLeg", "rightFoot",
] as const;

function applyIdle(bones: Record<string, THREE.Object3D>, t: number): void {
  const { breathHz, swayHz, armRestZLeft, armRestZRight, armForward } = AVATAR_CONFIG.idle;
  const br = Math.sin(t * breathHz);
  const sw = Math.sin(t * swayHz);
  bones.hips?.rotation.set(0, 0, sw * 0.01);
  bones.spine?.rotation.set(br * 0.008, 0, 0);
  bones.chest?.rotation.set(br * 0.006, 0, 0);
  bones.neck?.rotation.set(0, sw * 0.012, 0);
  bones.head?.rotation.set(0, sw * 0.015, sw * 0.008);
  bones.leftUpperArm?.rotation.set(armForward + br * 0.012, 0, armRestZLeft + sw * 0.015);
  bones.rightUpperArm?.rotation.set(armForward + br * 0.012, 0, armRestZRight - sw * 0.015);
  bones.leftLowerArm?.rotation.set(0.22, 0, 0.04);
  bones.rightLowerArm?.rotation.set(0.22, 0, -0.04);
  bones.leftHand?.rotation.set(0.08, 0, 0.05);
  bones.rightHand?.rotation.set(0.08, 0, -0.05);
  bones.leftUpperLeg?.rotation.set(0, 0, -0.02);
  bones.rightUpperLeg?.rotation.set(0, 0, 0.02);
  bones.leftLowerLeg?.rotation.set(0.02, 0, 0);
  bones.rightLowerLeg?.rotation.set(0.02, 0, 0);
  bones.leftFoot?.rotation.set(-0.02, 0, 0);
  bones.rightFoot?.rotation.set(-0.02, 0, 0);
}

// ── localStorage persistence ────────────────────────────────────────────────

const STORAGE_KEY = "avatar-foundation:links:v1";

function loadLinks(): Link[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Link[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveLinks(links: Link[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
  } catch {
    // ignore quota errors
  }
}

// ── Component ───────────────────────────────────────────────────────────────

export default function AvatarFoundation({ eegData, onExit }: ExperienceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasHostRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("Initializing…");
  const [availableExpressions, setAvailableExpressions] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(() => loadLinks());
  const [training, setTraining] = useState<{
    expression: string;
    mode: "discover" | "refine";
    existingLinkId?: string;
  } | null>(null);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  const initializedRef = useRef(false);
  const onExitRef = useRef(onExit);
  const sceneRef = useRef<SceneState | null>(null);

  // Per-channel band power pipeline (always running)
  const frameRef = useChannelBandPowers(eegData);

  // Stable runtime map: linkId → live state. Mutated in RAF.
  const runtimeRef = useRef<Map<string, LinkRuntime>>(new Map());

  // Mirror `links` into a ref so the RAF loop reads the latest without re-binding.
  const linksRef = useRef<Link[]>(links);
  useEffect(() => {
    linksRef.current = links;
    // Sync runtimeRef with the latest set of links: drop runtimes for deleted
    // links, create empty runtimes for new ones.
    const ids = new Set(links.map((l) => l.id));
    for (const id of Array.from(runtimeRef.current.keys())) {
      if (!ids.has(id)) runtimeRef.current.delete(id);
    }
    for (const l of links) {
      if (!runtimeRef.current.has(l.id)) runtimeRef.current.set(l.id, newRuntime());
    }
    saveLinks(links);
  }, [links]);

  useEffect(() => {
    onExitRef.current = onExit;
  }, [onExit]);

  // ── Scene setup (runs ONCE) ───────────────────────────────────────────────
  useEffect(() => {
    if (!canvasRef.current || !canvasHostRef.current || initializedRef.current) return;
    initializedRef.current = true;

    const canvas = canvasRef.current;
    const host = canvasHostRef.current;
    const initW = host.clientWidth || 1;
    const initH = host.clientHeight || 1;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0c12);

    const camera = new THREE.PerspectiveCamera(
      AVATAR_CONFIG.camera.fov,
      initW / initH,
      AVATAR_CONFIG.camera.near,
      AVATAR_CONFIG.camera.far,
    );
    camera.position.set(...AVATAR_CONFIG.camera.position);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // updateStyle=false: don't overwrite our CSS-driven width/height
    renderer.setSize(initW, initH, false);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    const controls = new OrbitControls(camera, canvas);
    controls.screenSpacePanning = true;
    controls.enableDamping = true;
    controls.dampingFactor = 0.07;
    controls.target.set(...AVATAR_CONFIG.camera.target);
    controls.minDistance = AVATAR_CONFIG.camera.minDistance;
    controls.maxDistance = AVATAR_CONFIG.camera.maxDistance;
    controls.update();

    const lookAtTarget = new THREE.Object3D();
    camera.add(lookAtTarget);

    const hemi = new THREE.HemisphereLight(0xffffff, 0x222233, 0.55);
    scene.add(hemi);
    const dirLight = new THREE.DirectionalLight(0xffffff, Math.PI);
    dirLight.position.set(1, 1.5, 1.2).normalize();
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(12, 12),
      new THREE.MeshStandardMaterial({ color: 0x1a1c26, roughness: 0.95 }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    const grid = new THREE.GridHelper(12, 24, 0x3a3a55, 0x252535);
    grid.position.y = 0.002;
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.4;
    scene.add(grid);

    const clock = new THREE.Clock();
    clock.start();

    sceneRef.current = {
      scene,
      camera,
      renderer,
      controls,
      vrm: null,
      morphs: new Map(),
      clock,
      rafId: 0,
      bones: {},
      expressionWeights: new Map(),
      nextBlinkAt: performance.now() + AVATAR_CONFIG.blink.minIntervalMs,
      blinkUntil: 0,
    };

    // ── Avatar loading ──────────────────────────────────────────────────
    const loadAvatar = () => {
      setStatus("Loading avatar…");
      const loader = new GLTFLoader();
      loader.register((parser) => new VRMLoaderPlugin(parser));

      const tryLoad = (url: string, onFail: () => void) => {
        loader.load(
          url,
          (gltf) => handleLoaded(gltf, url),
          (progress) => {
            if (progress.total > 0) {
              const p = ((progress.loaded / progress.total) * 100).toFixed(0);
              setStatus(`Loading avatar… ${p}%`);
            }
          },
          (err) => {
            console.warn(`Could not load ${url}:`, err);
            onFail();
          },
        );
      };

      const handleLoaded = (gltf: any, url: string) => {
        const vrm: VRM | undefined = gltf.userData?.vrm;
        const isVRM = !!vrm;
        const avatar: THREE.Object3D = isVRM ? vrm!.scene : gltf.scene;

        if (isVRM) {
          VRMUtils.rotateVRM0(vrm!);
          VRMUtils.removeUnnecessaryVertices(gltf.scene);
          VRMUtils.combineSkeletons(gltf.scene);
          VRMUtils.combineMorphs(vrm!);
          vrm!.scene.traverse((obj) => {
            obj.frustumCulled = false;
          });
        }

        avatar.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            const mats = Array.isArray(child.material) ? child.material : [child.material];
            for (const mat of mats) {
              if (!mat) continue;
              if (!isVRM) (mat as THREE.Material).side = THREE.FrontSide;
              (mat as any).depthWrite = true;
              (mat as any).depthTest = true;
            }
          }
        });

        scene.add(avatar);
        avatar.updateMatrixWorld(true);

        const box0 = new THREE.Box3().setFromObject(avatar);
        const sz = box0.getSize(new THREE.Vector3());
        const sf = AVATAR_CONFIG.targetHeight / Math.max(sz.y, 0.001);
        avatar.scale.setScalar(sf);
        avatar.updateMatrixWorld(true);

        const box1 = new THREE.Box3().setFromObject(avatar);
        const c = box1.getCenter(new THREE.Vector3());
        avatar.position.x = -c.x;
        avatar.position.z = -c.z;
        avatar.position.y = -box1.min.y;

        if (isVRM && vrm!.expressionManager) {
          const names = vrm!.expressionManager.expressions.map((e) => e.expressionName);
          setAvailableExpressions(names);
          if (sceneRef.current) sceneRef.current.vrm = vrm!;
          if (vrm!.lookAt) vrm!.lookAt.target = lookAtTarget;
          if (sceneRef.current) {
            const cached: Record<string, THREE.Object3D> = {};
            for (const bn of BONE_NAMES) {
              const node = vrm!.humanoid?.getNormalizedBoneNode(bn);
              if (node) cached[bn] = node;
            }
            sceneRef.current.bones = cached;
          }
        } else {
          const morphMap = new Map<string, MorphTarget[]>();
          avatar.traverse((child) => {
            if (
              child instanceof THREE.Mesh &&
              child.morphTargetDictionary &&
              child.morphTargetInfluences
            ) {
              for (const [name, index] of Object.entries(child.morphTargetDictionary)) {
                const list = morphMap.get(name) ?? [];
                list.push({ mesh: child, index });
                morphMap.set(name, list);
              }
            }
          });
          if (sceneRef.current) sceneRef.current.morphs = morphMap;
          setAvailableExpressions(Array.from(morphMap.keys()));
        }

        const exprCount = isVRM
          ? vrm!.expressionManager?.expressions.length ?? 0
          : sceneRef.current?.morphs.size ?? 0;
        const kind = isVRM ? "VRM" : "glTF";
        setStatus(`Ready · ${kind} · ${exprCount} expressions · ${url}`);
      };

      // Walk the fallback chain of avatar URLs until one loads.
      const tryChain = (urls: readonly string[], idx: number) => {
        if (idx >= urls.length) {
          setStatus(`Failed to load avatar (tried: ${urls.join(", ")})`);
          return;
        }
        tryLoad(urls[idx], () => tryChain(urls, idx + 1));
      };
      tryChain(AVATAR_CONFIG.avatarUrls, 0);
    };
    loadAvatar();

    // ── RAF loop: drive expressions from links ──────────────────────────
    function animate() {
      const ref = sceneRef.current;
      if (!ref) return;
      ref.rafId = requestAnimationFrame(animate);

      const delta = ref.clock.getDelta();
      const t = ref.clock.elapsedTime;
      const now = performance.now();

      ref.controls.update();

      // Evaluate every enabled link → aggregate per expression (max).
      const weights = ref.expressionWeights;
      weights.clear();
      const frame = frameRef.current;
      const liveLinks = linksRef.current;
      if (frame.ready && !pausedRef.current) {
        for (const link of liveLinks) {
          if (!link.enabled) continue;
          const snap = frame.channels[link.channel];
          if (!snap) continue;
          const bandIdx = BAND_NAMES.indexOf(link.band);
          if (bandIdx < 0) continue;
          const feature = snap.logBands[bandIdx];
          const prev = runtimeRef.current.get(link.id) ?? newRuntime();
          const next = evaluateLink(link, feature, prev);
          runtimeRef.current.set(link.id, next);
          const cur = weights.get(link.expression) ?? 0;
          if (next.value > cur) weights.set(link.expression, next.value);
        }
      }

      // Spontaneous blink so the avatar feels alive (only if not EEG-driven).
      const { durationMs, minIntervalMs, maxIntervalMs } = AVATAR_CONFIG.blink;
      const isVRM = !!ref.vrm?.expressionManager;
      const blinkName = isVRM ? "blink" : "Wink_Left";
      let blinkW = 0;
      if (now >= ref.nextBlinkAt && ref.blinkUntil === 0) {
        ref.blinkUntil = now + durationMs;
        ref.nextBlinkAt = now + minIntervalMs + Math.random() * (maxIntervalMs - minIntervalMs);
      }
      if (ref.blinkUntil > 0) {
        const remaining = ref.blinkUntil - now;
        if (remaining <= 0) {
          ref.blinkUntil = 0;
        } else {
          const e = (durationMs - remaining) / durationMs;
          blinkW = e < 0.5 ? e * 2 : 2 - e * 2;
        }
      }
      if (blinkW > 0 && !weights.has(blinkName)) {
        weights.set(blinkName, blinkW);
      }

      // Apply weights to the avatar
      if (ref.vrm?.expressionManager) {
        for (const expr of ref.vrm.expressionManager.expressions) {
          ref.vrm.expressionManager.setValue(
            expr.expressionName,
            weights.get(expr.expressionName) ?? 0,
          );
        }
      } else if (ref.morphs.size > 0) {
        for (const [name, bindings] of ref.morphs) {
          const w = weights.get(name) ?? 0;
          for (const { mesh, index } of bindings) {
            if (mesh.morphTargetInfluences) mesh.morphTargetInfluences[index] = w;
          }
        }
      }

      // Procedural breathing
      if (ref.vrm && Object.keys(ref.bones).length > 0) {
        applyIdle(ref.bones, t);
      }
      if (ref.vrm) ref.vrm.update(delta);
      ref.renderer.render(ref.scene, ref.camera);
    }
    animate();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onExitRef.current();
    };
    window.addEventListener("keydown", handleKey);

    const handleResize = () => {
      const ref = sceneRef.current;
      if (!ref || !host) return;
      const w = host.clientWidth || 1;
      const h = host.clientHeight || 1;
      ref.camera.aspect = w / h;
      ref.camera.updateProjectionMatrix();
      ref.renderer.setSize(w, h, false);
    };
    window.addEventListener("resize", handleResize);

    // Observe host box so panels can change layout without window resize.
    const ro = new ResizeObserver(handleResize);
    ro.observe(host);
    // Initial sync after layout
    requestAnimationFrame(handleResize);

    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", handleResize);
      ro.disconnect();
      const ref = sceneRef.current;
      if (ref) {
        cancelAnimationFrame(ref.rafId);
        ref.controls.dispose();
        ref.renderer.dispose();
        ref.scene.traverse((o) => {
          if (o instanceof THREE.Mesh) {
            o.geometry?.dispose();
            if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
            else o.material?.dispose();
          }
        });
        sceneRef.current = null;
      }
      initializedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Training callbacks ────────────────────────────────────────────────────

  const handleStartTraining = useCallback(
    (expression: string, mode: "discover" | "refine", existingLinkId?: string) => {
      setTraining({ expression, mode, existingLinkId });
    },
    [],
  );

  const handleApplyTraining = useCallback(
    (newOrUpdated: Link[], removedIds: string[]) => {
      setLinks((prev) => {
        const removed = new Set(removedIds);
        const kept = prev.filter((l) => !removed.has(l.id));
        const map = new Map(kept.map((l) => [l.id, l] as const));
        for (const l of newOrUpdated) map.set(l.id, l);
        return Array.from(map.values());
      });
      setTraining(null);
    },
    [],
  );

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#08090e",
        overflow: "hidden",
      }}
    >
      <div
        ref={canvasHostRef}
        style={{
          position: "absolute",
          top: 44,
          left: 220,
          right: 240,
          bottom: 230,
          overflow: "hidden",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            touchAction: "none",
          }}
        />
      </div>

      <MappingStudio
        numChannels={eegData.numChannels}
        availableExpressions={availableExpressions}
        links={links}
        setLinks={setLinks}
        runtimeRef={runtimeRef}
        frameRef={frameRef}
        onStartTraining={handleStartTraining}
        trainingActive={!!training}
        paused={paused}
        onTogglePause={() => setPaused((p) => !p)}
        onResetAll={() => {
          setLinks([]);
          runtimeRef.current.clear();
          try {
            localStorage.removeItem(STORAGE_KEY);
          } catch {
            /* ignore */
          }
        }}
        statusText={status}
        onExit={onExit}
      />

      {training && (
        <TrainingOverlay
          expression={training.expression}
          mode={training.mode}
          existingLinkId={training.existingLinkId}
          numChannels={eegData.numChannels}
          frameRef={frameRef}
          onCancel={() => setTraining(null)}
          onApply={handleApplyTraining}
        />
      )}
    </div>
  );
}
