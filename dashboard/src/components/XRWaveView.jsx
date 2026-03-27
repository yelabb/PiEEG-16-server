import { useRef, useEffect, useCallback } from "react";
import * as THREE from "three";

const NUM_CHANNELS = 16;
const MAX_POINTS = 500; // vertices per wave strip

const TRACE_COLORS = [
  "#58a6ff", "#3fb950", "#d29922", "#f85149",
  "#bc8cff", "#39d2c0", "#f0883e", "#db61a2",
  "#58a6ff", "#3fb950", "#d29922", "#f85149",
  "#bc8cff", "#39d2c0", "#f0883e", "#db61a2",
];

// Arrange channels on a curved surface around the user
const PANEL_RADIUS = 3.0;       // meters from user
const PANEL_ARC = Math.PI * 0.8; // 144° arc
const PANEL_HEIGHT = 2.4;        // total height of all channels
const PANEL_Y_CENTER = 1.4;      // eye-level center
const WAVE_WIDTH = 2.0;          // width of each wave strip (meters)

/**
 * XRWaveView — full-screen WebXR immersive view of EEG waves.
 * Reads from the same eeg.buffers ring buffers as the 2D canvases.
 */
export default function XRWaveView({ eeg, yScale, onExit }) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const linesRef = useRef([]);
  const sessionRef = useRef(null);
  const rafRef = useRef(null);
  const cleanedUpRef = useRef(false);

  // ── Keep props in refs so the effect never re-runs ────────────
  const eegRef = useRef(eeg);
  const yScaleRef = useRef(yScale);
  const onExitRef = useRef(onExit);
  eegRef.current = eeg;
  yScaleRef.current = yScale;
  onExitRef.current = onExit;

  const cleanup = useCallback(() => {
    if (cleanedUpRef.current) return;
    cleanedUpRef.current = true;

    if (sessionRef.current) {
      sessionRef.current.end().catch(() => {});
      sessionRef.current = null;
    }
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    const renderer = rendererRef.current;
    if (renderer) {
      renderer.xr.enabled = false;
      renderer.setAnimationLoop(null);
      renderer.dispose();
      rendererRef.current = null;
    }
    linesRef.current = [];
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    cleanedUpRef.current = false;

    // ── Scene setup ─────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060a10);
    scene.fog = new THREE.FogExp2(0x060a10, 0.12);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 50);
    camera.position.set(0, PANEL_Y_CENTER, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // ── Lighting ────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0x223344, 0.5));
    const pointLight = new THREE.PointLight(0x58a6ff, 1.2, 20);
    pointLight.position.set(0, PANEL_Y_CENTER + 1, 0);
    scene.add(pointLight);

    // ── Ground grid ─────────────────────────────────────────────
    const gridHelper = new THREE.GridHelper(10, 20, 0x1a2233, 0x0f1520);
    scene.add(gridHelper);

    // ── Channel wave strips ─────────────────────────────────────
    const lines = [];
    for (let ch = 0; ch < NUM_CHANNELS; ch++) {
      const color = new THREE.Color(TRACE_COLORS[ch]);

      // Position on curved surface
      const t = NUM_CHANNELS > 1 ? ch / (NUM_CHANNELS - 1) : 0.5;
      const angle = -PANEL_ARC / 2 + t * PANEL_ARC;
      const yPos = PANEL_Y_CENTER + PANEL_HEIGHT / 2 - t * PANEL_HEIGHT;

      // Create line geometry with pre-allocated positions
      const positions = new Float32Array(MAX_POINTS * 3);
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setDrawRange(0, 0);

      const material = new THREE.LineBasicMaterial({
        color,
        linewidth: 2,
        transparent: true,
        opacity: 0.9,
      });

      const line = new THREE.Line(geometry, material);
      scene.add(line);

      // Channel label — create a small sprite
      const canvas = document.createElement("canvas");
      canvas.width = 128;
      canvas.height = 48;
      const ctx2d = canvas.getContext("2d");
      ctx2d.fillStyle = "transparent";
      ctx2d.clearRect(0, 0, 128, 48);
      ctx2d.font = "bold 28px monospace";
      ctx2d.fillStyle = TRACE_COLORS[ch];
      ctx2d.textAlign = "center";
      ctx2d.textBaseline = "middle";
      ctx2d.fillText(`Ch ${ch + 1}`, 64, 24);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.7 });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(0.4, 0.15, 1);

      // Place label to the left of the wave
      const labelX = Math.sin(angle) * (PANEL_RADIUS + 0.05);
      const labelZ = -Math.cos(angle) * (PANEL_RADIUS + 0.05);
      const waveStartX = labelX - Math.cos(angle) * (WAVE_WIDTH / 2);
      const waveStartZ = labelZ + Math.sin(angle) * (WAVE_WIDTH / 2);
      sprite.position.set(waveStartX - Math.cos(angle) * 0.3, yPos, waveStartZ + Math.sin(angle) * 0.3);
      scene.add(sprite);

      // Optional: subtle glow plane behind each wave
      const glowGeo = new THREE.PlaneGeometry(WAVE_WIDTH + 0.2, 0.12);
      const glowMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.04,
        side: THREE.DoubleSide,
      });
      const glowPlane = new THREE.Mesh(glowGeo, glowMat);
      glowPlane.position.set(
        Math.sin(angle) * PANEL_RADIUS,
        yPos,
        -Math.cos(angle) * PANEL_RADIUS
      );
      glowPlane.rotation.y = angle;
      scene.add(glowPlane);

      lines.push({ line, geometry, positions, angle, yPos, glowPlane });
    }
    linesRef.current = lines;

    // ── Update wave data each frame ─────────────────────────────
    function updateWaves() {
      const e = eegRef.current;
      const bufs = e.buffers.current;
      if (!bufs) return;
      const count = e.samplesInBuffer.current;
      const writeIdx = e.writeIndex.current;
      const bufSize = e.bufferSize;
      if (count < 2) return;

      const skip = count > MAX_POINTS ? Math.floor(count / MAX_POINTS) : 1;
      const drawCount = Math.min(MAX_POINTS, Math.ceil(count / skip));
      const range = yScaleRef.current || 100;

      for (let ch = 0; ch < NUM_CHANNELS; ch++) {
        const { positions, geometry, angle, yPos } = lines[ch];
        const buf = bufs[ch];

        // Center of the channel's arc position
        const cx = Math.sin(angle) * PANEL_RADIUS;
        const cz = -Math.cos(angle) * PANEL_RADIUS;

        // Direction along the wave (tangent to the arc)
        const dx = -Math.cos(angle);
        const dz = -Math.sin(angle);

        for (let i = 0; i < drawCount; i++) {
          const sampleI = i * skip;
          const idx = (writeIdx - count + sampleI + bufSize) % bufSize;
          const t = i / (drawCount - 1); // 0..1 along width

          const x = cx + dx * (t - 0.5) * WAVE_WIDTH;
          const y = yPos + (buf[idx] / range) * 0.08;
          const z = cz + dz * (t - 0.5) * WAVE_WIDTH;

          positions[i * 3] = x;
          positions[i * 3 + 1] = y;
          positions[i * 3 + 2] = z;
        }

        geometry.attributes.position.needsUpdate = true;
        geometry.setDrawRange(0, drawCount);
      }
    }

    // ── Try immersive VR, fallback to inline ────────────────────
    let xrMode = null;

    async function startXR() {
      if (navigator.xr) {
        // Try immersive-vr first, then immersive-ar, then inline
        for (const mode of ["immersive-vr", "immersive-ar", "inline"]) {
          try {
            const supported = await navigator.xr.isSessionSupported(mode);
            if (supported) {
              xrMode = mode;
              break;
            }
          } catch {
            // continue
          }
        }
      }

      if (xrMode && xrMode !== "inline") {
        try {
          const session = await navigator.xr.requestSession(xrMode, {
            optionalFeatures: ["local-floor", "bounded-floor"],
          });
          sessionRef.current = session;
          renderer.xr.setSession(session);

          session.addEventListener("end", () => {
            sessionRef.current = null;
            onExitRef.current();
          });

          // XR animation loop
          renderer.setAnimationLoop(() => {
            updateWaves();
            renderer.render(scene, camera);
          });
          return;
        } catch {
          // Fall through to non-XR rendering
        }
      }

      // Fallback: non-XR 3D view with orbit
      startFallback3D();
    }

    function startFallback3D() {
      // Simple mouse-look for non-XR
      let isDragging = false;
      let prevX = 0, prevY = 0;
      let rotY = 0, rotX = 0;

      const onPointerDown = (e) => { isDragging = true; prevX = e.clientX; prevY = e.clientY; };
      const onPointerUp = () => { isDragging = false; };
      const onPointerMove = (e) => {
        if (!isDragging) return;
        rotY -= (e.clientX - prevX) * 0.003;
        rotX -= (e.clientY - prevY) * 0.003;
        rotX = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, rotX));
        prevX = e.clientX;
        prevY = e.clientY;
      };

      const el = renderer.domElement;
      el.addEventListener("pointerdown", onPointerDown);
      el.addEventListener("pointerup", onPointerUp);
      el.addEventListener("pointermove", onPointerMove);

      function fallbackLoop() {
        camera.rotation.order = "YXZ";
        camera.rotation.y = rotY;
        camera.rotation.x = rotX;

        updateWaves();
        renderer.render(scene, camera);
        rafRef.current = requestAnimationFrame(fallbackLoop);
      }

      rafRef.current = requestAnimationFrame(fallbackLoop);
    }

    startXR();

    // ── Resize handler ──────────────────────────────────────────
    function onResize() {
      if (!rendererRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cleanup();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []); // mount-only — props read via refs

  return (
    <div className="xr-overlay">
      <div className="xr-container" ref={containerRef} />
      <div className="xr-hud">
        <button className="btn xr-exit-btn" onClick={() => { cleanup(); onExitRef.current(); }}>
          ✕ Exit XR
        </button>
        <div className="xr-info">
          <span className="xr-badge">WebXR</span>
          <span>{NUM_CHANNELS} channels · ±{yScale} µV</span>
        </div>
      </div>
    </div>
  );
}
