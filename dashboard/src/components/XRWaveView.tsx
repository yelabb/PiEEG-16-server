import { useRef, useEffect, useCallback, useState } from "react";
import * as THREE from "three";
import type { EEGData } from "../types";
import { NUM_CHANNELS } from "../types";

const MAX_POINTS = 300;

const CHANNEL_HUES = [
  0.50, 0.80, 0.95, 0.60,
  0.38, 0.14, 0.05, 0.55,
  0.50, 0.80, 0.95, 0.60,
  0.38, 0.14, 0.05, 0.55,
];

const PANEL_RADIUS = 2.5;
const PANEL_ARC = Math.PI * 0.65;
const PANEL_HEIGHT = 2.2;
const PANEL_Y_CENTER = 1.3;
const WAVE_WIDTH = 1.6;

interface ChannelLine {
  line: THREE.Line;
  geometry: THREE.BufferGeometry;
  positions: Float32Array;
  colors: Float32Array;
  angle: number;
  yPos: number;
  baseHue: number;
}

interface XRWaveViewProps {
  eegData: EEGData;
  yScale: number;
  onExit: () => void;
}

export default function XRWaveView({ eegData, yScale, onExit }: XRWaveViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const linesRef = useRef<ChannelLine[]>([]);
  const sessionRef = useRef<XRSession | null>(null);
  const rafRef = useRef<number | null>(null);
  const cleanedUpRef = useRef(false);
  const timerRef = useRef(new THREE.Timer());
  const sceneReadyRef = useRef(false);
  const tempColorRef = useRef(new THREE.Color());

  const [vrSupported, setVrSupported] = useState(false);
  const [inVR, setInVR] = useState(false);

  const eegRef = useRef(eegData);
  const yScaleRef = useRef(yScale);
  const onExitRef = useRef(onExit);
  eegRef.current = eegData;
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

  // Check VR support on mount
  useEffect(() => {
    if (navigator.xr) {
      navigator.xr.isSessionSupported("immersive-vr").then((ok) => setVrSupported(ok)).catch(() => {});
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    cleanedUpRef.current = false;
    const timer = timerRef.current;

    // Scene — minimal dark environment
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020408);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.05, 50);
    camera.position.set(0, PANEL_Y_CENTER, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Simple lighting
    scene.add(new THREE.AmbientLight(0x223355, 0.6));

    // Sparse starfield
    const starCount = 600;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 12 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPos[i * 3 + 2] = r * Math.cos(phi);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({
      size: 0.04,
      color: 0x8899bb,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    }));
    scene.add(stars);

    // Channel wave lines — no labels, no glow planes
    const lines: ChannelLine[] = [];
    const tempColor = new THREE.Color();
    for (let ch = 0; ch < NUM_CHANNELS; ch++) {
      const t = NUM_CHANNELS > 1 ? ch / (NUM_CHANNELS - 1) : 0.5;
      const angle = -PANEL_ARC / 2 + t * PANEL_ARC;
      const yPos = PANEL_Y_CENTER + PANEL_HEIGHT / 2 - t * PANEL_HEIGHT;
      const baseHue = CHANNEL_HUES[ch];

      const positions = new Float32Array(MAX_POINTS * 3);
      const colors = new Float32Array(MAX_POINTS * 3);
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color",    new THREE.BufferAttribute(colors, 3));
      geometry.setDrawRange(0, 0);

      const material = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        linewidth: 2,
      });

      const line = new THREE.Line(geometry, material);
      scene.add(line);
      lines.push({ line, geometry, positions, colors, angle, yPos, baseHue });
    }
    linesRef.current = lines;

    // Subtle ground grid
    scene.add(new THREE.GridHelper(8, 16, 0x0a1530, 0x060e1e));

    sceneReadyRef.current = true;

    // Update wave data each frame
    function updateWaves(time: number) {
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
        const { positions, colors, geometry, angle, yPos, baseHue } = lines[ch];
        const buf = bufs[ch];
        if (!buf) continue;

        const cx = Math.sin(angle) * PANEL_RADIUS;
        const cz = -Math.cos(angle) * PANEL_RADIUS;
        const dx = -Math.cos(angle);
        const dz = -Math.sin(angle);

        const hue = (baseHue + Math.sin(time * 0.08 + ch * 0.4) * 0.06 + 1) % 1;

        for (let i = 0; i < drawCount; i++) {
          const sampleI = i * skip;
          const idx = (writeIdx - count + sampleI + bufSize) % bufSize;
          const tPos = i / Math.max(1, drawCount - 1);
          const amplitude = buf[idx] / range;

          positions[i * 3]     = cx + dx * (tPos - 0.5) * WAVE_WIDTH;
          positions[i * 3 + 1] = yPos + amplitude * 0.14;
          positions[i * 3 + 2] = cz + dz * (tPos - 0.5) * WAVE_WIDTH;

          const edgeFade  = Math.sin(tPos * Math.PI);
          const ampBright = 0.35 + Math.min(Math.abs(amplitude) * 3.0, 1.0) * 0.65;
          const lightness = Math.min(0.95, 0.5 * edgeFade + ampBright * 0.5);
          tempColor.setHSL(hue, 0.85, lightness);
          colors[i * 3]     = tempColor.r;
          colors[i * 3 + 1] = tempColor.g;
          colors[i * 3 + 2] = tempColor.b;
        }

        geometry.attributes.position.needsUpdate = true;
        geometry.attributes.color.needsUpdate = true;
        geometry.setDrawRange(0, drawCount);
      }

      stars.rotation.y = time * 0.004;
    }

    // 3D fallback (non-VR browsers / desktop preview)
    function startFallback3D() {
      let isDragging = false;
      let prevX = 0, prevY = 0;
      let rotY = 0, rotX = 0;
      let autoRotate = true;

      const el = renderer.domElement;
      const onPointerDown = (e: PointerEvent) => { isDragging = true; autoRotate = false; prevX = e.clientX; prevY = e.clientY; };
      const onPointerUp   = () => { isDragging = false; };
      const onPointerMove = (e: PointerEvent) => {
        if (!isDragging) return;
        rotY -= (e.clientX - prevX) * 0.003;
        rotX -= (e.clientY - prevY) * 0.003;
        rotX = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, rotX));
        prevX = e.clientX; prevY = e.clientY;
      };
      el.addEventListener("pointerdown", onPointerDown);
      el.addEventListener("pointerup",   onPointerUp);
      el.addEventListener("pointermove", onPointerMove);

      function fallbackLoop() {
        timer.update();
        const t = timer.getElapsed();
        if (autoRotate) rotY = t * 0.04;
        camera.rotation.order = "YXZ";
        camera.rotation.y = rotY;
        camera.rotation.x = rotX;
        updateWaves(t);
        renderer.render(scene, camera);
        rafRef.current = requestAnimationFrame(fallbackLoop);
      }
      rafRef.current = requestAnimationFrame(fallbackLoop);
    }

    startFallback3D();

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

  // Enter immersive VR — MUST be called from a user gesture (click/tap)
  const enterVR = useCallback(async () => {
    const renderer = rendererRef.current;
    if (!renderer || !navigator.xr) return;

    try {
      const session = await navigator.xr.requestSession("immersive-vr", {
        optionalFeatures: ["local-floor", "bounded-floor", "hand-tracking"],
      });
      sessionRef.current = session;
      setInVR(true);

      // Stop the fallback rAF loop
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      await renderer.xr.setSession(session);

      session.addEventListener("end", () => {
        sessionRef.current = null;
        setInVR(false);
        // Restart fallback loop would require re-mount; just exit
        onExitRef.current();
      });

      const timer = timerRef.current;
      renderer.setAnimationLoop(() => {
        timer.update();
        const t = timer.getElapsed();
        // Update waves
        const e = eegRef.current;
        const bufs = e.buffers.current;
        if (bufs) {
          const count = e.samplesInBuffer.current;
          const writeIdx = e.writeIndex.current;
          const bufSize = e.bufferSize;
          if (count >= 2) {
            const skip = count > MAX_POINTS ? Math.floor(count / MAX_POINTS) : 1;
            const drawCount = Math.min(MAX_POINTS, Math.ceil(count / skip));
            const range = yScaleRef.current || 100;
            const lines = linesRef.current;
            const tc = tempColorRef.current;

            for (let ch = 0; ch < lines.length; ch++) {
              const { positions, colors, geometry, angle, yPos, baseHue } = lines[ch];
              const buf = bufs[ch];
              if (!buf) continue;

              const cx = Math.sin(angle) * PANEL_RADIUS;
              const cz = -Math.cos(angle) * PANEL_RADIUS;
              const dx = -Math.cos(angle);
              const dz = -Math.sin(angle);
              const hue = (baseHue + Math.sin(t * 0.08 + ch * 0.4) * 0.06 + 1) % 1;

              for (let i = 0; i < drawCount; i++) {
                const sampleI = i * skip;
                const idx = (writeIdx - count + sampleI + bufSize) % bufSize;
                const tPos = i / Math.max(1, drawCount - 1);
                const amplitude = buf[idx] / range;

                positions[i * 3]     = cx + dx * (tPos - 0.5) * WAVE_WIDTH;
                positions[i * 3 + 1] = yPos + amplitude * 0.14;
                positions[i * 3 + 2] = cz + dz * (tPos - 0.5) * WAVE_WIDTH;

                const edgeFade  = Math.sin(tPos * Math.PI);
                const ampBright = 0.35 + Math.min(Math.abs(amplitude) * 3.0, 1.0) * 0.65;
                const lightness = Math.min(0.95, 0.5 * edgeFade + ampBright * 0.5);
                tc.setHSL(hue, 0.85, lightness);
                colors[i * 3]     = tc.r;
                colors[i * 3 + 1] = tc.g;
                colors[i * 3 + 2] = tc.b;
              }

              geometry.attributes.position.needsUpdate = true;
              geometry.attributes.color.needsUpdate = true;
              geometry.setDrawRange(0, drawCount);
            }
          }
        }

        if (sceneRef.current && cameraRef.current) {
          renderer.render(sceneRef.current, cameraRef.current);
        }
      });
    } catch (err) {
      console.warn("Failed to enter VR:", err);
    }
  }, []);

  return (
    <div className="xr-overlay">
      <div className="xr-container" ref={containerRef} />
      <div className="xr-hud">
        <button className="btn xr-exit-btn" onClick={() => { cleanup(); onExitRef.current(); }}>
          ✕ Exit
        </button>
        {vrSupported && !inVR && (
          <button
            className="btn xr-enter-vr-btn"
            onClick={enterVR}
          >
            ▶ Enter VR
          </button>
        )}
        {inVR && <span className="xr-badge xr-badge--vr">VR Active</span>}
      </div>
    </div>
  );
}
