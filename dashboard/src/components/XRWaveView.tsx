import { useRef, useEffect, useCallback } from "react";
import * as THREE from "three";
import type { EEGData } from "../types";
import { NUM_CHANNELS } from "../types";

const MAX_POINTS = 400;

const CHANNEL_HUES = [
  0.50, 0.80, 0.95, 0.60,
  0.38, 0.14, 0.05, 0.55,
  0.50, 0.80, 0.95, 0.60,
  0.38, 0.14, 0.05, 0.55,
];

const PANEL_RADIUS = 3.0;
const PANEL_ARC = Math.PI * 0.75;
const PANEL_HEIGHT = 2.6;
const PANEL_Y_CENTER = 1.4;
const WAVE_WIDTH = 1.8;

interface ChannelLine {
  line: THREE.Line;
  geometry: THREE.BufferGeometry;
  positions: Float32Array;
  colors: Float32Array;
  angle: number;
  yPos: number;
  glowPlane: THREE.Mesh;
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
  const clockRef = useRef(new THREE.Clock());

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

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    cleanedUpRef.current = false;
    const clock = clockRef.current;
    clock.start();

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x03060f);
    scene.fog = new THREE.FogExp2(0x03060f, 0.07);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.05, 60);
    camera.position.set(0, PANEL_Y_CENTER, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x112244, 0.8);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x4488ff, 1.5, 25);
    pointLight.position.set(0, PANEL_Y_CENTER + 1, 0);
    scene.add(pointLight);

    // Starfield
    const starCount = 1500;
    const starPos = new Float32Array(starCount * 3);
    const starCol = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 10 + Math.random() * 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPos[i * 3 + 2] = r * Math.cos(phi);
      starCol[i * 3]     = 0.70 + Math.random() * 0.30;
      starCol[i * 3 + 1] = 0.75 + Math.random() * 0.25;
      starCol[i * 3 + 2] = 0.85 + Math.random() * 0.15;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute("color", new THREE.BufferAttribute(starCol, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // Nebula particle clouds
    interface NebulaDef {
      color: number;
      center: [number, number, number];
      count: number;
      spread: number;
    }
    const nebulaDefs: NebulaDef[] = [
      { color: 0x4a1080, center: [ 5,  2, -10], count: 400, spread: 5 },
      { color: 0x0a2a60, center: [-6,  1,  -9], count: 350, spread: 4 },
      { color: 0x003a50, center: [ 1,  4, -12], count: 300, spread: 4 },
    ];
    const nebulaClouds = nebulaDefs.map(({ color, center, count, spread }) => {
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        pos[i * 3]     = center[0] + (Math.random() - 0.5) * spread;
        pos[i * 3 + 1] = center[1] + (Math.random() - 0.5) * spread;
        pos[i * 3 + 2] = center[2] + (Math.random() - 0.5) * spread;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({
        color,
        size: 0.12,
        transparent: true,
        opacity: 0.16,
        sizeAttenuation: true,
        depthWrite: false,
      });
      const pts = new THREE.Points(geo, mat);
      scene.add(pts);
      return pts;
    });

    // Channel wave strips
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
        opacity: 0.92,
        linewidth: 2,
      });

      const line = new THREE.Line(geometry, material);
      scene.add(line);

      // Channel label sprite
      const labelCanvas = document.createElement("canvas");
      labelCanvas.width = 128;
      labelCanvas.height = 48;
      const ctx2d = labelCanvas.getContext("2d")!;
      ctx2d.clearRect(0, 0, 128, 48);
      tempColor.setHSL(baseHue, 0.9, 0.7);
      ctx2d.font = "bold 28px monospace";
      ctx2d.fillStyle = `#${tempColor.getHexString()}`;
      ctx2d.textAlign = "center";
      ctx2d.textBaseline = "middle";
      ctx2d.fillText(`Ch ${ch + 1}`, 64, 24);
      const texture = new THREE.CanvasTexture(labelCanvas);
      const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.65 });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(0.4, 0.15, 1);
      const labelX = Math.sin(angle) * (PANEL_RADIUS + 0.05);
      const labelZ = -Math.cos(angle) * (PANEL_RADIUS + 0.05);
      const waveStartX = labelX - Math.cos(angle) * (WAVE_WIDTH / 2);
      const waveStartZ = labelZ + Math.sin(angle) * (WAVE_WIDTH / 2);
      sprite.position.set(
        waveStartX - Math.cos(angle) * 0.3,
        yPos,
        waveStartZ + Math.sin(angle) * 0.3,
      );
      scene.add(sprite);

      // Glow plane behind each wave
      const glowGeo = new THREE.PlaneGeometry(WAVE_WIDTH + 0.3, 0.14);
      const glowMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(baseHue, 1.0, 0.55),
        transparent: true,
        opacity: 0.05,
        side: THREE.DoubleSide,
        depthWrite: false,
      });
      const glowPlane = new THREE.Mesh(glowGeo, glowMat);
      glowPlane.position.set(
        Math.sin(angle) * PANEL_RADIUS,
        yPos,
        -Math.cos(angle) * PANEL_RADIUS,
      );
      glowPlane.rotation.y = angle;
      scene.add(glowPlane);

      lines.push({ line, geometry, positions, colors, angle, yPos, glowPlane, baseHue });
    }
    linesRef.current = lines;

    // Ground grid
    const gridHelper = new THREE.GridHelper(12, 24, 0x0a1530, 0x060e1e);
    scene.add(gridHelper);

    // Update wave data + animate environment each frame
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
        const { positions, colors, geometry, angle, yPos, glowPlane, baseHue } = lines[ch];
        const buf = bufs[ch];

        const cx = Math.sin(angle) * PANEL_RADIUS;
        const cz = -Math.cos(angle) * PANEL_RADIUS;
        const dx = -Math.cos(angle);
        const dz = -Math.sin(angle);

        const hue = (baseHue + Math.sin(time * 0.08 + ch * 0.4) * 0.08 + 1) % 1;
        const sat = 0.85 + Math.sin(time * 0.15 + ch) * 0.10;

        let rmsSum = 0;
        for (let i = 0; i < drawCount; i++) {
          const sampleI = i * skip;
          const idx = (writeIdx - count + sampleI + bufSize) % bufSize;
          const tPos = i / Math.max(1, drawCount - 1);
          const amplitude = buf[idx] / range;
          rmsSum += amplitude * amplitude;

          positions[i * 3]     = cx + dx * (tPos - 0.5) * WAVE_WIDTH;
          positions[i * 3 + 1] = yPos + amplitude * 0.14;
          positions[i * 3 + 2] = cz + dz * (tPos - 0.5) * WAVE_WIDTH;

          const edgeFade  = Math.sin(tPos * Math.PI);
          const ampBright = 0.35 + Math.min(Math.abs(amplitude) * 3.0, 1.0) * 0.65;
          const lightness = Math.min(0.95, 0.5 * edgeFade + ampBright * 0.5);
          tempColor.setHSL(hue, sat, lightness);
          colors[i * 3]     = tempColor.r;
          colors[i * 3 + 1] = tempColor.g;
          colors[i * 3 + 2] = tempColor.b;
        }

        geometry.attributes.position.needsUpdate = true;
        geometry.attributes.color.needsUpdate = true;
        geometry.setDrawRange(0, drawCount);

        const rms = Math.sqrt(rmsSum / Math.max(1, drawCount));
        (glowPlane.material as THREE.MeshBasicMaterial).opacity = Math.min(0.20, 0.03 + rms * 0.9);
      }

      ambientLight.intensity = 0.60 + Math.sin(time * 0.50) * 0.15;
      pointLight.intensity   = 1.20 + Math.sin(time * 0.30) * 0.40;

      stars.rotation.y = time * 0.005;
      stars.rotation.x = Math.sin(time * 0.003) * 0.02;

      nebulaClouds.forEach((cloud, i) => {
        (cloud.material as THREE.PointsMaterial).opacity = 0.10 + Math.sin(time * 0.20 + i * 2.1) * 0.06;
        cloud.rotation.y = time * 0.003 * (i % 2 === 0 ? 1 : -1);
      });
    }

    // Try immersive VR (Oculus), fallback to inline
    async function startXR() {
      let xrMode: XRSessionMode | null = null;

      if (navigator.xr) {
        for (const mode of ["immersive-vr", "immersive-ar", "inline"] as XRSessionMode[]) {
          try {
            if (await navigator.xr.isSessionSupported(mode)) {
              xrMode = mode;
              break;
            }
          } catch { /* continue */ }
        }
      }

      if (xrMode && xrMode !== "inline") {
        try {
          const session = await navigator.xr!.requestSession(xrMode, {
            optionalFeatures: ["local-floor", "bounded-floor", "hand-tracking"],
          });
          sessionRef.current = session;
          renderer.xr.setSession(session);
          session.addEventListener("end", () => {
            sessionRef.current = null;
            onExitRef.current();
          });

          renderer.setAnimationLoop(() => {
            updateWaves(clock.getElapsedTime());
            renderer.render(scene, camera);
          });
          return;
        } catch { /* fall through to 3D fallback */ }
      }

      startFallback3D();
    }

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
        const t = clock.getElapsedTime();
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

    startXR();

    // Resize handler
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
