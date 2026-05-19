// ─────────────────────────────────────────────────────────────────────────────
// Avatar Foundation — Clean, scalable avatar animation system
//
// A solid foundation for avatar animations without EEG integration.
// Uses GLTFLoader for Ready Player Me avatars with Mixamo animations.
// Easy to duplicate for AR, VR, and other experiences.
//
// Architecture:
//   - AnimationController: manages animation playback and transitions
//   - Simple keyboard controls for testing (1-5 keys for animations)
//   - Performance-optimized with requestAnimationFrame
//   - Ready to extend with EEG, gestures, or any other input
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { VRMLoaderPlugin, VRMUtils, type VRM } from "@pixiv/three-vrm";
import type { ExperienceProps } from "../registry";

// ── Types ────────────────────────────────────────────────────────────────────

interface AnimationState {
  name: string;
  mixer: THREE.AnimationMixer;
  actions: Map<string, THREE.AnimationAction>;
  currentAction: THREE.AnimationAction | null;
  baseStateName: string; // last looping state to return to after one-shots
}

interface MorphTarget {
  mesh: THREE.Mesh;
  index: number;
}

interface SceneState {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;
  animState: AnimationState | null;
  vrm: VRM | null;
  morphs: Map<string, MorphTarget[]>;
  activeExpressions: Map<string, number>; // name → performance.now() start timestamp
  clock: THREE.Clock;
  nextBlinkAt: number; // performance.now() timestamp
  rafId: number;
  procState: 'idle' | 'walk';
  bones: Record<string, THREE.Object3D>;
  mechArmRoots: THREE.Object3D[];
}

// ── Constants ────────────────────────────────────────────────────────────────

const FADE_DURATION = 0.3; // seconds for animation transitions

// Expression envelope: fast attack, hold at peak, fast release (feels natural)
const EXPR_ATTACK_MS = 80;
const EXPR_HOLD_MS = 500;
const EXPR_RELEASE_MS = 80;
const EXPR_TOTAL_MS = EXPR_ATTACK_MS + EXPR_HOLD_MS + EXPR_RELEASE_MS;

function exprWeight(elapsed: number): number {
  if (elapsed < EXPR_ATTACK_MS) return elapsed / EXPR_ATTACK_MS;
  if (elapsed < EXPR_ATTACK_MS + EXPR_HOLD_MS) return 1.0;
  const t = elapsed - EXPR_ATTACK_MS - EXPR_HOLD_MS;
  return Math.max(0, 1.0 - t / EXPR_RELEASE_MS);
}

// ── Procedural animation (arm rest angles in VRM normalized bone space) ──────
// VRM normalized bones: left/right are mirrored. +Z on leftUpperArm = arm UP.
// To hang arms DOWN: leftUpperArm.z = NEGATIVE, rightUpperArm.z = POSITIVE.
const ARM_REST_Z_LEFT = -1.4;  // ~80° below horizontal T-pose, left arm down
const ARM_REST_Z_RIGHT = 1.4;  // ~80° below horizontal T-pose, right arm down
const ARM_FORWARD = 0.12;      // forward angle — slightly more natural hand-in-front-of-hip

const BONE_NAMES = [
  'hips','spine','chest','upperChest','neck','head',
  'leftUpperArm','leftLowerArm','leftHand',
  'rightUpperArm','rightLowerArm','rightHand',
  'leftUpperLeg','leftLowerLeg','leftFoot',
  'rightUpperLeg','rightLowerLeg','rightFoot',
] as const;

function applyProcAnim(
  bones: Record<string, THREE.Object3D>,
  state: 'idle' | 'walk',
  t: number,
): void {
  if (state === 'idle') {
    const br = Math.sin(t * 1.2);   // breathing cycle
    const sw = Math.sin(t * 0.45);  // gentle idle sway
    bones.hips?.rotation.set(0, 0, sw * 0.01);
    bones.spine?.rotation.set(br * 0.008, 0, 0);
    bones.chest?.rotation.set(br * 0.006, 0, 0);
    bones.neck?.rotation.set(0, sw * 0.012, 0);
    bones.head?.rotation.set(0, sw * 0.015, sw * 0.008);
    // Arms hang relaxed — shoulder rises slightly with breathing, elbow gently bent
    bones.leftUpperArm?.rotation.set(ARM_FORWARD + br * 0.012, 0, ARM_REST_Z_LEFT + sw * 0.015);
    bones.rightUpperArm?.rotation.set(ARM_FORWARD + br * 0.012, 0, ARM_REST_Z_RIGHT - sw * 0.015);
    bones.leftLowerArm?.rotation.set(0.22, 0, 0.04);   // natural elbow bend
    bones.rightLowerArm?.rotation.set(0.22, 0, -0.04);
    bones.leftHand?.rotation.set(0.08, 0, 0.05);       // slight wrist droop
    bones.rightHand?.rotation.set(0.08, 0, -0.05);
    bones.leftUpperLeg?.rotation.set(0, 0, -0.02);
    bones.rightUpperLeg?.rotation.set(0, 0, 0.02);
    bones.leftLowerLeg?.rotation.set(0.02, 0, 0);
    bones.rightLowerLeg?.rotation.set(0.02, 0, 0);
    bones.leftFoot?.rotation.set(-0.02, 0, 0);
    bones.rightFoot?.rotation.set(-0.02, 0, 0);
  } else {
    // Walk: full stride cycle
    const p = t * 2.3 * Math.PI * 2;
    const s = Math.sin(p);
    const lg = 0.55; // leg swing amplitude
    const ar = 0.35; // arm swing amplitude
    bones.hips?.rotation.set(0, 0.035 * s, 0);
    bones.spine?.rotation.set(-0.04, -0.02 * s, 0);
    bones.chest?.rotation.set(-0.03, 0.01 * s, 0);
    bones.neck?.rotation.set(0, 0, 0);
    bones.head?.rotation.set(0, 0, 0);
    // Arms swing opposite to legs
    bones.leftUpperArm?.rotation.set(ARM_FORWARD - ar * s, 0, ARM_REST_Z_LEFT);
    bones.rightUpperArm?.rotation.set(ARM_FORWARD + ar * s, 0, ARM_REST_Z_RIGHT);
    bones.leftLowerArm?.rotation.set(0.2 + 0.1 * Math.max(0, s), 0, 0.04);
    bones.rightLowerArm?.rotation.set(0.2 + 0.1 * Math.max(0, -s), 0, -0.04);
    bones.leftUpperLeg?.rotation.set(lg * s, 0, -0.02);
    bones.rightUpperLeg?.rotation.set(-lg * s, 0, 0.02);
    bones.leftLowerLeg?.rotation.set(0.35 * Math.max(0, -s), 0, 0);
    bones.rightLowerLeg?.rotation.set(0.35 * Math.max(0, s), 0, 0);
    bones.leftFoot?.rotation.set(0.1 * s, 0, 0);
    bones.rightFoot?.rotation.set(-0.1 * s, 0, 0);
  }
}

// Looping "states" (avatar stays in them). Everything else is a one-shot
// action that plays once then returns to the current base state.
const LOOP_STATES = new Set([
  "Idle",
  "Walk",
  "Walking",
  "Running",
  "Dance",
]);

const ANIM_EMOJI: Record<string, string> = {
  Idle: "\uD83E\uDDCD",
  Walking: "\uD83D\uDEB6",
  Running: "\uD83C\uDFC3",
  Dance: "\uD83D\uDC83",
  Sitting: "\uD83E\uDA91",
  Standing: "\uD83E\uDDCD\u200D\u2642\uFE0F",
  Jump: "\uD83E\uDD38",
  Yes: "\u2705",
  No: "\u274C",
  Wave: "\uD83D\uDC4B",
  Punch: "\uD83E\uDD1C",
  ThumbsUp: "\uD83D\uDC4D",
  Death: "\uD83D\uDC80",
  WalkJump: "\uD83E\uDD3E",
};

// Emojis for facial expressions. Auto-discovered names mapped to a glyph;
// unknown names get a generic face. Supports VRM expression presets,
// ARKit blendshapes, and simple names.
const MORPH_EMOJI: Record<string, string> = {
  // RobotExpressive
  Angry: "\uD83D\uDE20",
  Surprised: "\uD83D\uDE2E",
  Sad: "\uD83D\uDE22",
  // VRM standard expression presets
  happy: "\uD83D\uDE03",
  angry: "\uD83D\uDE20",
  sad: "\uD83D\uDE22",
  relaxed: "\uD83D\uDE0C",
  surprised: "\uD83D\uDE2E",
  neutral: "\uD83D\uDE10",
  blink: "\uD83D\uDE12",
  blinkLeft: "\uD83D\uDC41\uFE0F\u2B05\uFE0F",
  blinkRight: "\u27A1\uFE0F\uD83D\uDC41\uFE0F",
  lookUp: "\u2B06\uFE0F",
  lookDown: "\u2B07\uFE0F",
  lookLeft: "\u2B05\uFE0F",
  lookRight: "\u27A1\uFE0F",
  aa: "\uD83D\uDDE3\uFE0F",
  ih: "\uD83D\uDDE3\uFE0F",
  ou: "\uD83D\uDDE3\uFE0F",
  ee: "\uD83D\uDDE3\uFE0F",
  oh: "\uD83D\uDDE3\uFE0F",
  // ARKit blendshapes
  eyeBlinkLeft: "\uD83D\uDC41\uFE0F",
  eyeBlinkRight: "\uD83D\uDC41\uFE0F",
  browInnerUp: "\u2B06\uFE0F",
  browDownLeft: "\u2B07\uFE0F",
  browDownRight: "\u2B07\uFE0F",
  browOuterUpLeft: "\u2B06\uFE0F",
  browOuterUpRight: "\u2B06\uFE0F",
  mouthSmile: "\uD83D\uDE42",
  mouthFrown: "\u2639\uFE0F",
  jawOpen: "\uD83D\uDE2E",
};

// ── Main Component ───────────────────────────────────────────────────────────

export default function AvatarFoundation({ onExit }: ExperienceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState("Initializing...");
  const [currentAnimation, setCurrentAnimation] = useState<string>("idle");
  const [availableAnimations, setAvailableAnimations] = useState<string[]>([]);
  const [availableExpressions, setAvailableExpressions] = useState<string[]>([]);
  const initializedRef = useRef(false);
  const onExitRef = useRef(onExit);
  const sceneRef = useRef<SceneState | null>(null);

  // Keep latest onExit without retriggering effect
  useEffect(() => {
    onExitRef.current = onExit;
  }, [onExit]);

  // ── Scene Setup (runs ONCE) ─────────────────────────────────────────────

  useEffect(() => {
    if (!canvasRef.current || initializedRef.current) return;
    initializedRef.current = true;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);

    // FOV 30° matches official three-vrm examples — natural portrait perspective
    const camera = new THREE.PerspectiveCamera(
      30,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      20,
    );
    camera.position.set(0, 1.2, 3.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    // OrbitControls — drag to orbit, scroll to zoom, right-click/two-finger to pan
    const controls = new OrbitControls(camera, canvas);
    controls.screenSpacePanning = true;
    controls.enableDamping = true;
    controls.dampingFactor = 0.07;
    controls.target.set(0, 1.2, 0);
    controls.minDistance = 0.3;
    controls.maxDistance = 10;
    controls.update();

    // LookAt target: empty object parented to camera so VRM eyes track the viewer
    const lookAtTarget = new THREE.Object3D();
    camera.add(lookAtTarget);

    // Lighting — hemisphere (sky/ground) + directional (key light), ideal for MToon
    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
    scene.add(hemi);
    const dirLight = new THREE.DirectionalLight(0xffffff, Math.PI);
    dirLight.position.set(1, 1, 1).normalize();
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    // Ground + grid
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.MeshStandardMaterial({ color: 0x2a2a3e, roughness: 0.9 }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    const gridHelper = new THREE.GridHelper(10, 20, 0x444466, 0x333344);
    gridHelper.position.y = 0.002;
    (gridHelper.material as THREE.Material).transparent = true;
    (gridHelper.material as THREE.Material).opacity = 0.4;
    scene.add(gridHelper);

    const clock = new THREE.Clock();
    clock.start();

    sceneRef.current = {
      scene,
      camera,
      renderer,
      controls,
      animState: null,
      vrm: null,
      morphs: new Map(),
      activeExpressions: new Map(),
      clock,
      nextBlinkAt: performance.now() + 3000,
      rafId: 0,
      procState: 'idle',
      bones: {},
      mechArmRoots: [],
    };

    // ── Avatar Loading ────────────────────────────────────────────────────
    // Tries VRM first (/avatar.vrm), falls back to glTF (/avatar.glb).
    // VRMs give us standard expression presets (blinkLeft, blinkRight, etc.)
    // via expressionManager; glTFs use mesh morphTargetInfluences directly.
    const loadAvatar = () => {
      setStatus("Loading avatar...");

      const loader = new GLTFLoader();
      // Install VRM plugin so a .vrm file is recognized and parsed
      loader.register((parser) => new VRMLoaderPlugin(parser));

      const tryLoad = (url: string, onFail: () => void) => {
        loader.load(
          url,
          (gltf) => handleLoaded(gltf, url),
          (progress) => {
            if (progress.total > 0) {
              const percent = ((progress.loaded / progress.total) * 100).toFixed(0);
              setStatus(`Loading avatar... ${percent}%`);
            }
          },
          (error) => {
            console.warn(`Could not load ${url}:`, error);
            onFail();
          },
        );
      };

      const handleLoaded = (gltf: any, url: string) => {
        const vrm: VRM | undefined = gltf.userData?.vrm;
        const isVRM = !!vrm;
        const avatar: THREE.Object3D = isVRM ? vrm!.scene : gltf.scene;

        // VRM 0.x has +Z facing camera flipped; normalize for both versions
        if (isVRM) {
          VRMUtils.rotateVRM0(vrm!);
          // Performance: merge verts/skeletons/morphs — from official three-vrm examples
          VRMUtils.removeUnnecessaryVertices(gltf.scene);
          VRMUtils.combineSkeletons(gltf.scene);
          VRMUtils.combineMorphs(vrm!);
          // Disable frustum culling to prevent mesh pop-in when using OrbitControls
          vrm!.scene.traverse((obj) => { obj.frustumCulled = false; });
        }

        // Shadows + material defaults
        avatar.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            const mats = Array.isArray(child.material) ? child.material : [child.material];
            for (const mat of mats) {
              if (!mat) continue;
              // Don't force FrontSide on VRM (toon shader handles it); only fix glTF
              if (!isVRM) {
                (mat as THREE.Material).side = THREE.FrontSide;
              }
              (mat as any).depthWrite = true;
              (mat as any).depthTest = true;
            }
          }
        });

        // Add to scene first so matrixWorld is correct for bbox measurement
        scene.add(avatar);
        avatar.updateMatrixWorld(true);

        // Scale to ~1.7m tall, center X/Z, sit on floor
        const box0 = new THREE.Box3().setFromObject(avatar);
        const size0 = box0.getSize(new THREE.Vector3());
        const scaleFactor = 1.7 / Math.max(size0.y, 0.001);
        avatar.scale.setScalar(scaleFactor);
        avatar.updateMatrixWorld(true);

        const box1 = new THREE.Box3().setFromObject(avatar);
        const center1 = box1.getCenter(new THREE.Vector3());
        avatar.position.x = -center1.x;
        avatar.position.z = -center1.z;
        avatar.position.y = -box1.min.y;

        // Expressions — VRM uses expressionManager; glTF uses raw morph targets
        if (isVRM && vrm!.expressionManager) {
          const expressionNames = vrm!.expressionManager.expressions.map((e) => e.expressionName);
          setAvailableExpressions(expressionNames);
          if (sceneRef.current) {
            sceneRef.current.vrm = vrm!;
          }
          // Eyes track toward viewer (camera as lookAt target — official three-vrm pattern)
          if (vrm!.lookAt) {
            vrm!.lookAt.target = lookAtTarget;
          }
          // Cache humanoid bone nodes for procedural animation
          if (sceneRef.current) {
            const cached: Record<string, THREE.Object3D> = {};
            for (const boneName of BONE_NAMES) {
              const node = vrm!.humanoid?.getNormalizedBoneNode(boneName);
              if (node) cached[boneName] = node;
            }
            sceneRef.current.bones = cached;
            sceneRef.current.procState = 'idle';
          }
          // Discover mechanical arm spring bone roots.
          // Strategy: find non-humanoid attachment bones (custom bones that are
          // parents of spring joint chains). Exclude humanoid raw bones to avoid
          // accidentally rotating leftUpperArm, chest, etc.
          // Chain threshold ≥ 5 targets the long rigid mechanical arm, not short
          // hair/accessory chains (which are usually 2–3 joints per strand).
          const rawHumanoidBones = new Set<THREE.Object3D>();
          for (const bn of BONE_NAMES) {
            const raw = vrm!.humanoid?.getRawBoneNode(bn as any);
            if (raw) rawHumanoidBones.add(raw);
          }
          const sbm = (vrm! as any).springBoneManager;
          if (sbm?.joints && sceneRef.current) {
            const allJoints: any[] = [...sbm.joints];
            const jointBones = new Set<THREE.Object3D>(allJoints.map((j: any) => j.bone));
            const seen = new Set<THREE.Object3D>();
            const mechRoots: THREE.Object3D[] = [];
            for (const j of allJoints) {
              const parent = j.bone?.parent as THREE.Object3D | null;
              if (!parent || jointBones.has(parent) || seen.has(parent)) continue;
              if (rawHumanoidBones.has(parent)) continue; // never rotate humanoid bones
              seen.add(parent);
              let chainLen = 0;
              parent.traverse((child) => { if (jointBones.has(child as THREE.Object3D)) chainLen++; });
              if (chainLen >= 5) mechRoots.push(parent); // ≥5 = long mechanical arm chain
            }
            sceneRef.current.mechArmRoots = mechRoots;
          }
          // Show Idle/Walk buttons
          setAvailableAnimations(['Idle', 'Walk']);
          setCurrentAnimation('Idle');
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
          if (sceneRef.current) {
            sceneRef.current.morphs = morphMap;
          }
          setAvailableExpressions(Array.from(morphMap.keys()));
        }

        // Body animations (glTF embedded clips). VRMs typically ship no clips.
        if (gltf.animations && gltf.animations.length > 0) {
          const mixer = new THREE.AnimationMixer(avatar);
          const actions = new Map<string, THREE.AnimationAction>();
          gltf.animations.forEach((clip: THREE.AnimationClip) => {
            actions.set(clip.name, mixer.clipAction(clip));
          });
          const animationNames = Array.from(actions.keys());
          setAvailableAnimations(animationNames);

          const baseName =
            animationNames.find((n) => n === "Idle") ||
            animationNames.find((n) => LOOP_STATES.has(n)) ||
            animationNames[0];
          const baseAction = actions.get(baseName)!;
          baseAction.reset().play();
          setCurrentAnimation(baseName);

          if (sceneRef.current) {
            sceneRef.current.animState = {
              name: baseName,
              mixer,
              actions,
              currentAction: baseAction,
              baseStateName: baseName,
            };
          }

          mixer.addEventListener("finished", () => {
            const ref = sceneRef.current;
            if (!ref?.animState) return;
            const back = ref.animState.actions.get(ref.animState.baseStateName);
            if (!back) return;
            ref.animState.currentAction?.fadeOut(FADE_DURATION);
            back.reset();
            back.setLoop(THREE.LoopRepeat, Infinity);
            back.clampWhenFinished = false;
            back.fadeIn(FADE_DURATION).play();
            ref.animState.currentAction = back;
            ref.animState.name = ref.animState.baseStateName;
            setCurrentAnimation(ref.animState.baseStateName);
          });
        }

        const exprCount = isVRM
          ? vrm!.expressionManager?.expressions.length ?? 0
          : sceneRef.current?.morphs.size ?? 0;
        const animCount = gltf.animations?.length ?? 0;
        const kind = isVRM ? "VRM" : "glTF";
        setStatus(
          `Ready • ${kind} • ${animCount} animations • ${exprCount} expressions (${url})`,
        );
      };

      // Prefer VRM, fall back to GLB
      tryLoad("/avatar.vrm", () => {
        tryLoad("/avatar.glb", () => {
          setStatus("Failed to load avatar (no .vrm or .glb in /public)");
        });
      });
    };

    // Load avatar once
    loadAvatar();

    // Animation loop — following official three-vrm pattern
    function animate() {
      const ref = sceneRef.current;
      if (!ref) return;

      ref.rafId = requestAnimationFrame(animate);

      const delta = ref.clock.getDelta();
      const now = performance.now();

      // Damped OrbitControls (required when enableDamping = true)
      ref.controls.update();

      // Animation mixer
      if (ref.animState?.mixer) {
        ref.animState.mixer.update(delta);
      }

      // Drive facial expressions with attack/hold/release envelope
      for (const [name, startedAt] of ref.activeExpressions) {
        const elapsed = now - startedAt;
        const w = exprWeight(elapsed);

        if (ref.vrm?.expressionManager) {
          ref.vrm.expressionManager.setValue(name, w);
        } else {
          const bindings = ref.morphs.get(name);
          if (bindings) {
            for (const { mesh, index } of bindings) {
              if (mesh.morphTargetInfluences) mesh.morphTargetInfluences[index] = w;
            }
          }
        }

        if (elapsed >= EXPR_TOTAL_MS) ref.activeExpressions.delete(name);
      }

      // Mechanical arm pendulum sweep — yaw (rotation.y) gives left–right arc.
      // Runs before vrm.update() so spring bone physics uses the new anchor position.
      if (ref.mechArmRoots.length > 0) {
        const t = ref.clock.elapsedTime;
        const sweep = Math.sin(t * 0.65) * 0.25; // slow, modest arc ≈±14°
        for (const bone of ref.mechArmRoots) {
          bone.rotation.y = sweep;
        }
      }

      // Procedural body animation — drive bones BEFORE vrm.update() so
      // spring bones (les bras mécaniques) get correct body as their root
      if (ref.vrm && Object.keys(ref.bones).length > 0) {
        applyProcAnim(ref.bones, ref.procState, ref.clock.elapsedTime);
      }

      // VRM per-frame: spring bones, look-at, expression apply
      if (ref.vrm) {
        ref.vrm.update(delta);
      }

      ref.renderer.render(ref.scene, ref.camera);
    }
    animate();

    // Keyboard: ESC to exit
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onExitRef.current();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Resize handler
    const handleResize = () => {
      const ref = sceneRef.current;
      if (!ref || !canvas) return;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ref.camera.aspect = width / height;
      ref.camera.updateProjectionMatrix();
      ref.renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);

      const ref = sceneRef.current;
      if (ref) {
        cancelAnimationFrame(ref.rafId);
        ref.controls.dispose();
        ref.renderer.dispose();

        if (ref.animState?.mixer) {
          ref.animState.mixer.stopAllAction();
        }

        ref.scene.traverse((obj) => {
          if (obj instanceof THREE.Mesh) {
            obj.geometry?.dispose();
            if (Array.isArray(obj.material)) {
              obj.material.forEach((mat) => mat.dispose());
            } else {
              obj.material?.dispose();
            }
          }
        });
        sceneRef.current = null;
      }
      // Allow re-init after StrictMode unmount (deps are [], so only StrictMode triggers a re-run)
      initializedRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Animation Control ──────────────────────────────────────────────────────

  const playAnimation = (name: string) => {
    const ref = sceneRef.current;
    if (!ref) return;

    // VRM has no embedded clips — handle via procedural states
    if (!ref.animState) {
      if (name === 'Idle') {
        ref.procState = 'idle';
        setCurrentAnimation('Idle');
      } else if (name === 'Walk') {
        ref.procState = 'walk';
        setCurrentAnimation('Walk');
      }
      return;
    }

    const { actions, currentAction } = ref.animState;
    const nextAction = actions.get(name);
    if (!nextAction || nextAction === currentAction) return;

    const isLoop = LOOP_STATES.has(name);

    if (isLoop) {
      nextAction.setLoop(THREE.LoopRepeat, Infinity);
      nextAction.clampWhenFinished = false;
      ref.animState.baseStateName = name;
    } else {
      // One-shot: play once then 'finished' listener returns to base state
      nextAction.setLoop(THREE.LoopOnce, 1);
      nextAction.clampWhenFinished = true;
    }

    currentAction?.fadeOut(FADE_DURATION);
    nextAction.reset().fadeIn(FADE_DURATION).play();

    ref.animState.currentAction = nextAction;
    ref.animState.name = name;
    setCurrentAnimation(name);
  };

  const playExpression = (name: string) => {
    const ref = sceneRef.current;
    if (!ref) return;
    // Restart envelope from now (works for VRM expressionManager and raw morphs)
    ref.activeExpressions.set(name, performance.now());
  };

  // ── UI ─────────────────────────────────────────────────────────────────────

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "#0a0a0f",
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

      {/* Status overlay */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          padding: "12px 20px",
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 8,
          color: "#fff",
          fontFamily: "monospace",
          fontSize: 14,
          pointerEvents: "none",
        }}
      >
        {status}
      </div>

      {/* Current animation indicator */}
      {availableAnimations.length > 0 && (
        <div
          style={{
            position: "absolute",
            bottom: 120,
            left: 20,
            padding: "10px 16px",
            background: "rgba(100,100,255,0.15)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(100,100,255,0.3)",
            borderRadius: 6,
            color: "#aaf",
            fontFamily: "monospace",
            fontSize: 13,
            pointerEvents: "none",
          }}
        >
          Playing: <strong>{currentAnimation}</strong>
        </div>
      )}

      {/* Controls panel — button grid (states + one-shot actions + expressions) */}
      {(availableAnimations.length > 0 || availableExpressions.length > 0) && (() => {
        const states = availableAnimations.filter((n) => LOOP_STATES.has(n));
        const actions = availableAnimations.filter((n) => !LOOP_STATES.has(n));
        const renderBtn = (
          name: string,
          variant: "state" | "action" | "expression",
          onClick: () => void,
          isActive: boolean,
        ) => {
          const accent =
            variant === "state"
              ? "100,100,255"
              : variant === "action"
                ? "255,180,80"
                : "180,120,255";
          const emoji =
            variant === "expression"
              ? (MORPH_EMOJI[name] ?? "\uD83D\uDE10")
              : (ANIM_EMOJI[name] ?? "\u2022");
          return (
            <button
              key={`${variant}:${name}`}
              onClick={onClick}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                padding: "8px 10px",
                minWidth: 64,
                background: isActive
                  ? `rgba(${accent},0.35)`
                  : `rgba(${accent},0.12)`,
                border: `1px solid rgba(${accent},${isActive ? 0.7 : 0.3})`,
                borderRadius: 8,
                color: "#fff",
                fontFamily: "monospace",
                fontSize: 11,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `rgba(${accent},0.25)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = isActive
                  ? `rgba(${accent},0.35)`
                  : `rgba(${accent},0.12)`;
              }}
            >
              <span style={{ fontSize: 20, lineHeight: 1 }}>{emoji}</span>
              <span>{name}</span>
            </button>
          );
        };
        return (
          <div
            style={{
              position: "absolute",
              bottom: 20,
              left: "50%",
              transform: "translateX(-50%)",
              padding: "14px 18px",
              background: "rgba(0,0,0,0.7)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              color: "#fff",
              fontFamily: "monospace",
              maxWidth: "90vw",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {states.length > 0 && (
              <div>
                <div style={{ fontSize: 10, opacity: 0.6, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>
                  States (loop)
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {states.map((n) =>
                    renderBtn(n, "state", () => playAnimation(n), currentAnimation === n),
                  )}
                </div>
              </div>
            )}
            {actions.length > 0 && (
              <div>
                <div style={{ fontSize: 10, opacity: 0.6, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>
                  Actions (one-shot → return to state)
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {actions.map((n) =>
                    renderBtn(n, "action", () => playAnimation(n), currentAnimation === n),
                  )}
                </div>
              </div>
            )}
            {availableExpressions.length > 0 && (
              <div>
                <div style={{ fontSize: 10, opacity: 0.6, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>
                  Expressions (facial morphs)
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {availableExpressions.map((n) =>
                    renderBtn(n, "expression", () => playExpression(n), false),
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })()}

      {/* Exit button */}
      <button
        onClick={onExit}
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          padding: "10px 20px",
          background: "rgba(255,60,60,0.2)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,60,60,0.4)",
          borderRadius: 8,
          color: "#fff",
          fontFamily: "monospace",
          fontSize: 14,
          cursor: "pointer",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255,60,60,0.4)";
          e.currentTarget.style.borderColor = "rgba(255,60,60,0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,60,60,0.2)";
          e.currentTarget.style.borderColor = "rgba(255,60,60,0.4)";
        }}
      >
        ✕ Exit
      </button>

      {/* Info panel */}
      <div
        style={{
          position: "absolute",
          top: 80,
          right: 20,
          padding: "16px 20px",
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 8,
          color: "#ccc",
          fontFamily: "monospace",
          fontSize: 11,
          maxWidth: 300,
          lineHeight: 1.6,
        }}
      >
        <div style={{ marginBottom: 8, fontWeight: "bold", color: "#aaf" }}>
          Avatar Foundation
        </div>
        <div>
          Clean, scalable foundation for avatar animations. Easy to extend with EEG, gestures, or any input source.
        </div>
        <div style={{ marginTop: 12, fontSize: 10, color: "#888" }}>
          Drag to orbit · scroll to zoom · right-click to pan
          <br />
          To use your own avatar:
          <br />
          1. Export .vrm from VRoid Studio
          <br />
          2. Place it in public/avatar.vrm
        </div>
      </div>
    </div>
  );
}
