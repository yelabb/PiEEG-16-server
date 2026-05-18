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
import type { ExperienceProps } from "../registry";

// ── Types ────────────────────────────────────────────────────────────────────

interface AnimationState {
  name: string;
  mixer: THREE.AnimationMixer;
  actions: Map<string, THREE.AnimationAction>;
  currentAction: THREE.AnimationAction | null;
  baseStateName: string; // last looping state to return to after one-shots
}

interface SceneState {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  animState: AnimationState | null;
  prevTime: number;
  rafId: number;
}

// ── Constants ────────────────────────────────────────────────────────────────

const CAMERA_DISTANCE = 2.5;
const CAMERA_HEIGHT = 1.5;
const FADE_DURATION = 0.3; // seconds for animation transitions

// Looping "states" (avatar stays in them). Everything else is a one-shot
// action that plays once then returns to the current base state.
const LOOP_STATES = new Set([
  "Idle",
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

// ── Main Component ───────────────────────────────────────────────────────────

export default function AvatarFoundation({ onExit }: ExperienceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState("Initializing...");
  const [currentAnimation, setCurrentAnimation] = useState<string>("idle");
  const [availableAnimations, setAvailableAnimations] = useState<string[]>([]);
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

    // Camera - adjusted near plane to reduce z-fighting
    const camera = new THREE.PerspectiveCamera(
      50,
      canvas.clientWidth / canvas.clientHeight,
      0.25,
      100,
    );
    camera.position.set(0, CAMERA_HEIGHT, CAMERA_DISTANCE);
    camera.lookAt(0, 1, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(2, 3, 2);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.left = -5;
    directionalLight.shadow.camera.right = 5;
    directionalLight.shadow.camera.top = 5;
    directionalLight.shadow.camera.bottom = -5;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 10;
    directionalLight.shadow.bias = -0.0001;
    directionalLight.shadow.normalBias = 0.02;
    scene.add(directionalLight);

    const fillLight = new THREE.DirectionalLight(0x7799ff, 0.4);
    fillLight.position.set(-2, 1, -1);
    scene.add(fillLight);

    // Ground plane with grid pattern (no z-fighting)
    const groundGeometry = new THREE.PlaneGeometry(10, 10);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x2a2a3e,
      roughness: 0.8,
      metalness: 0.2,
      side: THREE.FrontSide,
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Grid helper - raised to prevent z-fighting
    const gridHelper = new THREE.GridHelper(10, 20, 0x444466, 0x333344);
    gridHelper.position.y = 0.005; // Slightly above ground
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.5;
    gridHelper.material.depthWrite = false;
    scene.add(gridHelper);

    sceneRef.current = {
      scene,
      camera,
      renderer,
      animState: null,
      prevTime: performance.now(),
      rafId: 0,
    };

    // ── Avatar Loading (inside useEffect to prevent re-creation) ──────────
    const loadAvatar = () => {
      setStatus("Loading avatar...");

      const loader = new GLTFLoader();
      const avatarUrl = "/avatar.glb";

      loader.load(
        avatarUrl,
        (gltf) => {
          const avatar = gltf.scene;
          avatar.castShadow = true;
          avatar.receiveShadow = true;

          // Enable shadows and fix materials on all meshes
          avatar.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.castShadow = true;
              child.receiveShadow = true;
              
              // Fix material to prevent flickering
              if (child.material) {
                if (Array.isArray(child.material)) {
                  child.material.forEach((mat) => {
                    mat.side = THREE.FrontSide;
                    mat.depthWrite = true;
                    mat.depthTest = true;
                  });
                } else {
                  child.material.side = THREE.FrontSide;
                  child.material.depthWrite = true;
                  child.material.depthTest = true;
                }
              }
            }
          });

          // Center and scale avatar
          const box = new THREE.Box3().setFromObject(avatar);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 1.8 / maxDim;

          avatar.position.x = -center.x * scale;
          avatar.position.y = -box.min.y * scale;
          avatar.position.z = -center.z * scale;
          avatar.scale.setScalar(scale);

          scene.add(avatar);

          // Setup animations
          if (gltf.animations && gltf.animations.length > 0) {
            const mixer = new THREE.AnimationMixer(avatar);
            const actions = new Map<string, THREE.AnimationAction>();

            gltf.animations.forEach((clip) => {
              const action = mixer.clipAction(clip);
              actions.set(clip.name, action);
            });

            const animationNames = Array.from(actions.keys());
            setAvailableAnimations(animationNames);

            // Pick Idle as base looping state (fallback to first loop state, then first anim)
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

            // When a one-shot finishes, crossfade back to the base state
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

            setStatus(`Ready • ${animationNames.length} animations loaded`);
          } else {
            setStatus("Avatar loaded (no animations found)");
          }
        },
        (progress) => {
          const percent = ((progress.loaded / progress.total) * 100).toFixed(0);
          setStatus(`Loading avatar... ${percent}%`);
        },
        (error) => {
          console.error("Avatar load error:", error);
          setStatus(
            "Failed to load avatar. Place avatar.glb in dashboard/public/",
          );
        },
      );
    };

    // Load avatar once
    loadAvatar();

    // Animation loop
    function animate() {
      const ref = sceneRef.current;
      if (!ref) return;

      ref.rafId = requestAnimationFrame(animate);

      const now = performance.now();
      const delta = (now - ref.prevTime) / 1000;
      ref.prevTime = now;

      // Update animation mixer
      if (ref.animState?.mixer) {
        ref.animState.mixer.update(delta);
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
        ref.renderer.dispose();

        // Dispose animation mixer
        if (ref.animState?.mixer) {
          ref.animState.mixer.stopAllAction();
        }

        // Dispose scene resources
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
    if (!ref?.animState) return;

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

      {/* Controls panel — button grid (states + one-shot actions) */}
      {availableAnimations.length > 0 && (() => {
        const states = availableAnimations.filter((n) => LOOP_STATES.has(n));
        const actions = availableAnimations.filter((n) => !LOOP_STATES.has(n));
        const renderBtn = (name: string, isState: boolean) => {
          const active = currentAnimation === name;
          const accent = isState ? "100,100,255" : "255,180,80";
          return (
            <button
              key={name}
              onClick={() => playAnimation(name)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                padding: "8px 10px",
                minWidth: 64,
                background: active
                  ? `rgba(${accent},0.35)`
                  : `rgba(${accent},0.12)`,
                border: `1px solid rgba(${accent},${active ? 0.7 : 0.3})`,
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
                e.currentTarget.style.background = active
                  ? `rgba(${accent},0.35)`
                  : `rgba(${accent},0.12)`;
              }}
            >
              <span style={{ fontSize: 20, lineHeight: 1 }}>
                {ANIM_EMOJI[name] ?? "•"}
              </span>
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
                  {states.map((n) => renderBtn(n, true))}
                </div>
              </div>
            )}
            {actions.length > 0 && (
              <div>
                <div style={{ fontSize: 10, opacity: 0.6, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>
                  Actions (one-shot → return to state)
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {actions.map((n) => renderBtn(n, false))}
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
          To use your own avatar:
          <br />
          1. Export from Ready Player Me
          <br />
          2. Add Mixamo animations
          <br />
          3. Place .glb in public/avatar.glb
        </div>
      </div>
    </div>
  );
}
