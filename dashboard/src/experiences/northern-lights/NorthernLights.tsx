// ─────────────────────────────────────────────────────────────────────────────
// Northern Lights — Immersive aurora borealis driven by your brainwaves.
//
// VR-first (Meta Quest compatible) with 3D fallback for desktop/mobile.
// Three.js aurora curtains animate via custom GLSL shaders whose uniforms
// are fed by EEG band powers at ~12 Hz.  An ambient synth layer (AuroraSynth)
// makes the aurora audible.
//
// Band → visual mapping:
//   Delta  → curtain sway amplitude (slow, majestic)
//   Theta  → curtain colour drift / pad texture
//   Alpha  → aurora brightness (relaxation = brighter display)
//   Beta   → turbulence speed
//   Gamma  → particle sparkle density
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useEffect, useCallback, useState } from "react";
import * as THREE from "three";
import type { ExperienceProps } from "../registry";
import { AURORA_VERTEX, AURORA_FRAGMENT, GROUND_VERTEX, GROUND_FRAGMENT } from "./auroraShaders";
import { useAuroraAudio } from "./useAuroraAudio";
import type { NormalisedBands } from "./useAuroraAudio";

// ── Constants ────────────────────────────────────────────────────────────

const STAR_COUNT       = 1200;
const PARTICLE_COUNT   = 300;
const CURTAIN_SEGMENTS = [80, 50];    // [horizontal, vertical] subdivisions

/** Curtain definitions — 6 ribbons wrapping the full 360° sky dome. */
const CURTAINS = [
  // ── Primary band (front-to-sides, bright green → teal → purple) ─────
  {
    arcRadius: 10,   arcSpan: 4.2,  centerY: 8,   height: 6,
    color1: new THREE.Color(0.15, 0.95, 0.4),     // electric green
    color2: new THREE.Color(0.2, 0.75, 0.85),      // teal
    color3: new THREE.Color(0.55, 0.2, 0.85),      // purple
    rotY: 0, intensity: 0.75,
  },
  // ── Secondary band (rotated 120°, violet → magenta) ────────────────
  {
    arcRadius: 12,   arcSpan: 3.6,  centerY: 9.5, height: 5,
    color1: new THREE.Color(0.1, 0.8, 0.55),
    color2: new THREE.Color(0.4, 0.25, 0.9),       // violet
    color3: new THREE.Color(0.8, 0.2, 0.55),       // magenta
    rotY: Math.PI * 2 / 3, intensity: 0.5,
  },
  // ── Tertiary band (rotated 240°, blue-cyan → rose) ─────────────────
  {
    arcRadius: 14,   arcSpan: 3.2,  centerY: 11,  height: 4,
    color1: new THREE.Color(0.2, 0.6, 0.9),        // blue-cyan
    color2: new THREE.Color(0.6, 0.15, 0.7),
    color3: new THREE.Color(0.85, 0.35, 0.55),     // rose
    rotY: Math.PI * 4 / 3, intensity: 0.35,
  },
  // ── Lower fill ribbon (behind, wide soft green) ────────────────────
  {
    arcRadius: 11,   arcSpan: 5.0,  centerY: 6.5, height: 4,
    color1: new THREE.Color(0.1, 0.7, 0.35),
    color2: new THREE.Color(0.15, 0.6, 0.7),
    color3: new THREE.Color(0.3, 0.2, 0.6),
    rotY: Math.PI, intensity: 0.3,
  },
  // ── High thin ribbon (overhead, subtle pink → blue) ────────────────
  {
    arcRadius: 9,    arcSpan: 5.6,  centerY: 13,  height: 3,
    color1: new THREE.Color(0.3, 0.9, 0.7),
    color2: new THREE.Color(0.7, 0.3, 0.8),
    color3: new THREE.Color(0.5, 0.15, 0.9),
    rotY: Math.PI / 2, intensity: 0.25,
  },
  // ── Accent wisp (offset, narrow, deep green) ──────────────────────
  {
    arcRadius: 13,   arcSpan: 3.0,  centerY: 7,   height: 5,
    color1: new THREE.Color(0.05, 0.85, 0.3),
    color2: new THREE.Color(0.1, 0.5, 0.8),
    color3: new THREE.Color(0.4, 0.1, 0.7),
    rotY: -Math.PI / 3, intensity: 0.4,
  },
];

// ── Helper — build one aurora curtain mesh ───────────────────────────────

function makeCurtain(def: (typeof CURTAINS)[number]) {
  const geo = new THREE.PlaneGeometry(1, 1, CURTAIN_SEGMENTS[0], CURTAIN_SEGMENTS[1]);
  const mat = new THREE.ShaderMaterial({
    vertexShader: AURORA_VERTEX,
    fragmentShader: AURORA_FRAGMENT,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    uniforms: {
      uTime:      { value: 0 },
      uDelta:     { value: 0 },
      uTheta:     { value: 0 },
      uAlpha:     { value: 0 },
      uBeta:      { value: 0 },
      uGamma:     { value: 0 },
      uIntensity: { value: def.intensity },
      uArcRadius: { value: def.arcRadius },
      uArcSpan:   { value: def.arcSpan },
      uCenterY:   { value: def.centerY },
      uHeight:    { value: def.height },
      uColor1:    { value: def.color1 },
      uColor2:    { value: def.color2 },
      uColor3:    { value: def.color3 },
    },
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.rotation.y = def.rotY;
  mesh.frustumCulled = false;
  return mesh;
}

// ── Helper — particle system ─────────────────────────────────────────────

function makeParticles() {
  const pos = new Float32Array(PARTICLE_COUNT * 3);
  const vel = new Float32Array(PARTICLE_COUNT); // upward speed
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    // Distribute in a full 360° cylinder around the viewer
    const angle = Math.random() * Math.PI * 2;
    const dist  = 3 + Math.random() * 14;
    pos[i * 3]     = Math.cos(angle) * dist;
    pos[i * 3 + 1] = 4 + Math.random() * 10;
    pos[i * 3 + 2] = Math.sin(angle) * dist;
    vel[i] = 0.005 + Math.random() * 0.015;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const mat = new THREE.PointsMaterial({
    size: 0.06,
    color: 0x88ffbb,
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  return { points: new THREE.Points(geo, mat), positions: pos, velocities: vel };
}

// ── Component ────────────────────────────────────────────────────────────

export default function NorthernLights({ eegData, onExit }: ExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef  = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef     = useRef<THREE.Scene | null>(null);
  const cameraRef    = useRef<THREE.PerspectiveCamera | null>(null);
  const curtainsRef  = useRef<THREE.Mesh[]>([]);
  const particlesRef = useRef<{
    points: THREE.Points; positions: Float32Array; velocities: Float32Array;
  } | null>(null);
  const sessionRef       = useRef<XRSession | null>(null);
  const rafRef           = useRef<number | null>(null);
  const cleanedUpRef     = useRef(false);
  const timerRef         = useRef(new THREE.Timer());
  const hudCanvasRef     = useRef<HTMLCanvasElement>(null);
  const restartFallback  = useRef<(() => void) | null>(null);

  const [vrSupported, setVrSupported] = useState(false);
  const [inVR, setInVR]               = useState(false);
  const [audioOn, setAudioOn]         = useState(false);

  const audio = useAuroraAudio(eegData);
  const normRef = audio.normalised;   // mutable ref, read in RAF
  const onExitRef = useRef(onExit);
  onExitRef.current = onExit;

  // ── Cleanup ────────────────────────────────────────────────────────

  const cleanup = useCallback(() => {
    if (cleanedUpRef.current) return;
    cleanedUpRef.current = true;
    if (sessionRef.current) { sessionRef.current.end().catch(() => {}); sessionRef.current = null; }
    if (rafRef.current != null) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    const r = rendererRef.current;
    if (r) { r.xr.enabled = false; r.setAnimationLoop(null); r.dispose(); rendererRef.current = null; }
    curtainsRef.current = [];
  }, []);

  // ── Audio toggle ───────────────────────────────────────────────────

  const toggleAudio = useCallback(async () => {
    if (audioOn) { audio.stop(); setAudioOn(false); }
    else         { await audio.start(); setAudioOn(true); }
  }, [audioOn, audio]);

  // ── VR support check ───────────────────────────────────────────────

  useEffect(() => {
    navigator.xr?.isSessionSupported("immersive-vr")
      .then((ok) => setVrSupported(ok)).catch(() => {});
  }, []);

  // ── Keyboard ───────────────────────────────────────────────────────

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onExitRef.current();
      if (e.key === " ") { e.preventDefault(); toggleAudio(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggleAudio]);

  // ── Three.js scene setup (mount-only) ──────────────────────────────

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    cleanedUpRef.current = false;
    const timer = timerRef.current;

    // ── Scene ──────────────
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x010209);
    scene.fog = new THREE.FogExp2(0x010209, 0.012);
    sceneRef.current = scene;

    // ── Camera ─────────────
    const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.05, 80);
    camera.position.set(0, 1.6, 0);
    cameraRef.current = camera;

    // ── Renderer ───────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // ── Ambient light (very dim) ───────
    scene.add(new THREE.AmbientLight(0x112244, 0.3));

    // ── Stars ──────────────
    const starPos = new Float32Array(STAR_COUNT * 3);
    const starCol = new Float32Array(STAR_COUNT * 3);
    const tc = new THREE.Color();
    for (let i = 0; i < STAR_COUNT; i++) {
      const r = 18 + Math.random() * 22;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random()); // upper hemisphere bias
      starPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) + 2; // push up
      starPos[i * 3 + 2] = r * Math.cos(phi);
      const temp = 0.7 + Math.random() * 0.3;
      tc.setHSL(0.6 + Math.random() * 0.15, 0.15, temp);
      starCol[i * 3]     = tc.r;
      starCol[i * 3 + 1] = tc.g;
      starCol[i * 3 + 2] = tc.b;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute("color",    new THREE.BufferAttribute(starCol, 3));
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({
      size: 0.04, vertexColors: true, transparent: true, opacity: 0.85,
      sizeAttenuation: true, blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    scene.add(stars);

    // ── Ground plane ───────
    const groundMat = new THREE.ShaderMaterial({
      vertexShader: GROUND_VERTEX,
      fragmentShader: GROUND_FRAGMENT,
      uniforms: {
        uTime: { value: 0 },
        uAuroraGlow: { value: new THREE.Color(0.15, 0.9, 0.4) },
      },
    });
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(80, 80, 1, 1), groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    scene.add(ground);

    // ── Aurora curtains ────
    const curtains: THREE.Mesh[] = [];
    for (const def of CURTAINS) {
      const mesh = makeCurtain(def);
      scene.add(mesh);
      curtains.push(mesh);
    }
    curtainsRef.current = curtains;

    // ── Particles ──────────
    const particles = makeParticles();
    scene.add(particles.points);
    particlesRef.current = particles;

    // ── Horizon glow (simple plane) ──
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x0a2e1a, transparent: true, opacity: 0.2,
      blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide,
    });
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(60, 6), glowMat);
    glow.position.set(0, 3, -12);
    scene.add(glow);

    // ── Update loop logic (shared by fallback + VR) ────

    function updateScene(elapsed: number, n: NormalisedBands) {
      // Update curtain uniforms
      for (const mesh of curtains) {
        const u = (mesh.material as THREE.ShaderMaterial).uniforms;
        u.uTime.value  = elapsed;
        u.uDelta.value = n.delta;
        u.uTheta.value = n.theta;
        u.uAlpha.value = n.alpha;
        u.uBeta.value  = n.beta;
        u.uGamma.value = n.gamma;
        // Intensity pulses slightly with alpha
        const baseDef = CURTAINS[curtains.indexOf(mesh)];
        u.uIntensity.value = baseDef.intensity * (0.6 + n.alpha * 0.5 + n.delta * 0.15);
      }

      // Ground glow colour shifts toward dominant aurora
      const gUni = (ground.material as THREE.ShaderMaterial).uniforms;
      gUni.uTime.value = elapsed;
      const gc = gUni.uAuroraGlow.value as THREE.Color;
      gc.setRGB(
        0.1 + n.beta * 0.2,
        0.6 + n.alpha * 0.3,
        0.3 + n.theta * 0.3,
      );

      // Horizon glow colour
      (glow.material as THREE.MeshBasicMaterial).color.setRGB(
        0.04 + n.gamma * 0.06,
        0.18 + n.alpha * 0.15,
        0.1 + n.theta * 0.08,
      );
      (glow.material as THREE.MeshBasicMaterial).opacity = 0.15 + n.alpha * 0.15;

      // Particle drift
      const pp = particles.positions;
      const pv = particles.velocities;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        pp[i * 3 + 1] += pv[i] * (1 + n.gamma * 2);
        // Subtle horizontal drift
        pp[i * 3]     += Math.sin(elapsed * 0.2 + i) * 0.002;
        pp[i * 3 + 2] += Math.cos(elapsed * 0.15 + i * 0.7) * 0.002;
        // Reset when too high
        if (pp[i * 3 + 1] > 16) {
          pp[i * 3]     = (Math.random() - 0.5) * 20;
          pp[i * 3 + 1] = 4 + Math.random() * 2;
          pp[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
      }
      (particles.points.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;

      // Particle brightness + colour reacts to gamma
      const pm = particles.points.material as THREE.PointsMaterial;
      pm.opacity = 0.35 + n.gamma * 0.5;
      pm.color.setRGB(0.5 + n.gamma * 0.3, 1.0, 0.7 + n.theta * 0.3);

      // Star slow rotation
      stars.rotation.y = elapsed * 0.002;
    }

    // ── HUD draw (2-D canvas overlay) ───────────────────────────────

    function drawHUD(ctx: CanvasRenderingContext2D, w: number, h: number, n: NormalisedBands) {
      ctx.clearRect(0, 0, w, h);

      // Semi-transparent backdrop strip at bottom
      const stripH = 72;
      const stripY = h - stripH;
      ctx.fillStyle = "rgba(2,2,12,0.45)";
      ctx.fillRect(0, stripY, w, stripH);
      ctx.fillStyle = "rgba(100,255,180,0.06)";
      ctx.fillRect(0, stripY, w, 1);

      // Band indicators — small arc gauges
      const bands = [
        { label: "δ", val: n.delta, color: "#5588cc" },
        { label: "θ", val: n.theta, color: "#44ccaa" },
        { label: "α", val: n.alpha, color: "#66ff99" },
        { label: "β", val: n.beta,  color: "#aa88ff" },
        { label: "γ", val: n.gamma, color: "#ff77cc" },
      ];
      const gaugeR = 18;
      const gap = 72;
      const startX = w / 2 - (bands.length - 1) * gap / 2;
      const cy = stripY + stripH / 2;

      for (let i = 0; i < bands.length; i++) {
        const b = bands[i];
        const cx = startX + i * gap;

        // Track arc (dim)
        ctx.beginPath();
        ctx.arc(cx, cy, gaugeR, Math.PI * 0.8, Math.PI * 2.2);
        ctx.strokeStyle = "rgba(255,255,255,0.08)";
        ctx.lineWidth = 3;
        ctx.stroke();

        // Value arc
        const sweep = Math.PI * 1.4;
        const endAngle = Math.PI * 0.8 + sweep * b.val;
        ctx.beginPath();
        ctx.arc(cx, cy, gaugeR, Math.PI * 0.8, endAngle);
        ctx.strokeStyle = b.color;
        ctx.lineWidth = 3;
        ctx.lineCap = "round";
        ctx.stroke();

        // Glow dot at tip
        ctx.beginPath();
        ctx.arc(
          cx + Math.cos(endAngle) * gaugeR,
          cy + Math.sin(endAngle) * gaugeR,
          3, 0, Math.PI * 2,
        );
        ctx.fillStyle = b.color;
        ctx.fill();

        // Greek letter
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.font = "bold 13px 'Inter', system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(b.label, cx, cy);

        // Percentage below
        ctx.fillStyle = "rgba(255,255,255,0.35)";
        ctx.font = "9px 'Inter', system-ui, sans-serif";
        ctx.fillText((b.val * 100).toFixed(0) + "%", cx, cy + gaugeR + 12);
      }

      // Title — top left
      ctx.fillStyle = "rgba(130,255,200,0.6)";
      ctx.font = "bold 14px 'Inter', system-ui, sans-serif";
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.fillText("NORTHERN LIGHTS", 16, 14);

      // Subtitle
      ctx.fillStyle = "rgba(255,255,255,0.25)";
      ctx.font = "10px 'Inter', system-ui, sans-serif";
      ctx.fillText("neural aurora borealis", 16, 32);
    }

    // ── Fallback 3D ──────────────────────────────────────────────────

    let isDragging = false;
    let prevX = 0, prevY = 0, rotY = 0, rotX = 0.35;
    let autoRotate = true;

    const el = renderer.domElement;
    const onDown = (e: PointerEvent) => { isDragging = true; autoRotate = false; prevX = e.clientX; prevY = e.clientY; };
    const onUp   = () => { isDragging = false; };
    const onMove = (e: PointerEvent) => {
      if (!isDragging) return;
      rotY -= (e.clientX - prevX) * 0.003;
      rotX -= (e.clientY - prevY) * 0.003;
      rotX = Math.max(-0.2, Math.min(Math.PI / 2.2, rotX));
      prevX = e.clientX; prevY = e.clientY;
    };
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointerup",   onUp);
    el.addEventListener("pointermove", onMove);

    function startFallbackLoop() {
      // Reset orbit state when coming back from VR
      autoRotate = true;
      function fallbackLoop() {
        timer.update();
        const t = timer.getElapsed();
        if (autoRotate) rotY = t * 0.015;
        camera.rotation.order = "YXZ";
        camera.rotation.y = rotY;
        camera.rotation.x = rotX;

        const n = normRef.current;
        updateScene(t, n);
        renderer.render(scene, camera);

        // HUD overlay
        const hud = hudCanvasRef.current;
        if (hud) {
          const dpr = window.devicePixelRatio || 1;
          const rect = hud.getBoundingClientRect();
          const cw = rect.width, ch = rect.height;
          if (hud.width !== cw * dpr || hud.height !== ch * dpr) {
            hud.width = cw * dpr; hud.height = ch * dpr;
          }
          const hctx = hud.getContext("2d");
          if (hctx) {
            hctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            drawHUD(hctx, cw, ch, n);
          }
        }

        rafRef.current = requestAnimationFrame(fallbackLoop);
      }
      rafRef.current = requestAnimationFrame(fallbackLoop);
    }
    restartFallback.current = startFallbackLoop;
    startFallbackLoop();

    const onResize = () => {
      if (!rendererRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointermove", onMove);
      cleanup();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []); // mount-only

  // ── Enter VR ───────────────────────────────────────────────────────

  const enterVR = useCallback(async () => {
    const renderer = rendererRef.current;
    if (!renderer || !navigator.xr) return;
    try {
      const session = await navigator.xr.requestSession("immersive-vr", {
        optionalFeatures: ["local-floor", "bounded-floor", "hand-tracking"],
      });
      sessionRef.current = session;
      setInVR(true);

      if (rafRef.current != null) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }
      await renderer.xr.setSession(session);

      session.addEventListener("end", () => {
        sessionRef.current = null;
        setInVR(false);
        // Return to desktop 3D view instead of exiting
        renderer.setAnimationLoop(null);
        renderer.xr.enabled = false;
        // Reconfigure renderer for non-XR
        renderer.xr.enabled = true;
        restartFallback.current?.();
      });

      // ── Controller squeeze to exit VR ────────────────────────────
      session.addEventListener("squeeze", () => {
        session.end().catch(() => {});
      });

      const timer = timerRef.current;
      const curtains = curtainsRef.current;
      const particles = particlesRef.current;
      const scene = sceneRef.current!;
      const cam = cameraRef.current!;

      renderer.setAnimationLoop(() => {
        timer.update();
        const t = timer.getElapsed();
        const n = normRef.current;

        // Update curtain uniforms
        for (let ci = 0; ci < curtains.length; ci++) {
          const u = (curtains[ci].material as THREE.ShaderMaterial).uniforms;
          u.uTime.value  = t;
          u.uDelta.value = n.delta;
          u.uTheta.value = n.theta;
          u.uAlpha.value = n.alpha;
          u.uBeta.value  = n.beta;
          u.uGamma.value = n.gamma;
          u.uIntensity.value = CURTAINS[ci].intensity * (0.6 + n.alpha * 0.5 + n.delta * 0.15);
        }

        // Particles
        if (particles) {
          const pp = particles.positions;
          const pv = particles.velocities;
          for (let i = 0; i < PARTICLE_COUNT; i++) {
            pp[i * 3 + 1] += pv[i] * (1 + n.gamma * 2);
            pp[i * 3]     += Math.sin(t * 0.2 + i) * 0.002;
            pp[i * 3 + 2] += Math.cos(t * 0.15 + i * 0.7) * 0.002;
            if (pp[i * 3 + 1] > 16) {
              pp[i * 3]     = (Math.random() - 0.5) * 20;
              pp[i * 3 + 1] = 4 + Math.random() * 2;
              pp[i * 3 + 2] = (Math.random() - 0.5) * 20;
            }
          }
          (particles.points.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
          const pm = particles.points.material as THREE.PointsMaterial;
          pm.opacity = 0.35 + n.gamma * 0.5;
        }

        renderer.render(scene, cam);
      });
    } catch (err) {
      console.warn("Failed to enter VR:", err);
    }
  }, []);

  // ── Render ─────────────────────────────────────────────────────────

  return (
    <div style={{ position: "fixed", inset: 0, background: "#010209", zIndex: 1000 }}>
      {/* Three.js canvas */}
      <div ref={containerRef} style={{ position: "absolute", inset: 0 }} />

      {/* HUD canvas overlay */}
      <canvas
        ref={hudCanvasRef}
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          pointerEvents: "none", zIndex: 1,
        }}
      />

      {/* Controls */}
      <div style={{
        position: "absolute", top: 12, right: 12, display: "flex", gap: 8, zIndex: 2,
      }}>
        <button onClick={() => { cleanup(); audio.stop(); onExitRef.current(); }} style={btnStyle}>
          ✕ Exit
        </button>
        <button onClick={toggleAudio} style={{
          ...btnStyle,
          background: audioOn ? "rgba(100,255,180,0.15)" : "rgba(255,255,255,0.08)",
          borderColor: audioOn ? "rgba(100,255,180,0.4)" : "rgba(255,255,255,0.15)",
        }}>
          {audioOn ? "♫ Sound On" : "♪ Sound Off"}
        </button>
        {vrSupported && !inVR && (
          <button onClick={enterVR} style={{
            ...btnStyle, background: "rgba(100,180,255,0.15)",
            borderColor: "rgba(100,180,255,0.4)",
          }}>
            ▶ Enter VR
          </button>
        )}
        {inVR && (
          <span style={{
            ...btnStyle, background: "rgba(100,255,180,0.12)",
            borderColor: "rgba(100,255,180,0.35)", cursor: "default",
          }}>
            VR Active
          </span>
        )}
      </div>

      {/* Hint */}
      {!inVR && (
        <div style={{
          position: "absolute", bottom: 84, left: "50%", transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.2)", fontSize: 11, zIndex: 2,
          fontFamily: "'Inter', system-ui, sans-serif", letterSpacing: 1,
        }}>
          SPACE — toggle sound · DRAG — look around · ESC — exit
        </div>
      )}
    </div>
  );
}

// ── Shared button style ──────────────────────────────────────────────────

const btnStyle: React.CSSProperties = {
  padding: "8px 16px",
  fontSize: 13,
  fontFamily: "'Inter', system-ui, sans-serif",
  fontWeight: 500,
  color: "rgba(255,255,255,0.85)",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: 8,
  cursor: "pointer",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  lineHeight: 1,
};
