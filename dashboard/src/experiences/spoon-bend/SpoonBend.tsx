// ─────────────────────────────────────────────────────────────────────────────
// Spoon Bend — "There is no spoon" / Matrix-inspired 3D focus experience.
//
// Three.js procedural spoon with metallic PBR material + env-map reflections.
// Beta + Gamma power (focus/attention) drives the bend amount while a
// Matrix-style digital rain falls over the 3D scene.
//
// Focus metric: (Beta + Gamma) / (Alpha + Theta + Delta)
//
// Controls:
//   Space — calibrate baseline
//   R     — reset calibration
//   Esc   — exit
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import type { ExperienceProps } from "../registry";
import { FftEngine, FREQUENCY_BANDS } from "../../lib/fftEngine";
import type { BandPowers } from "../../types";
import { getSampleRate } from "../../lib/sampleRateStore";
import spoonObjUrl from "./spoon.obj?url";

// ── Constants ───────────────────────────────────────────────────────

const FFT_SIZE = 256;
// Rebuild the FftEngine if the device's sample rate changes (PiEEG-16 →
// IronBCI-32 etc). Otherwise band-power frequency edges silently drift.
let _FFT_ENGINE: FftEngine | null = null;
function getFftEngine(): FftEngine {
  const rate = getSampleRate();
  if (!_FFT_ENGINE || _FFT_ENGINE.sampleRateHz !== rate) {
    _FFT_ENGINE = new FftEngine(FFT_SIZE, rate);
  }
  return _FFT_ENGINE;
}
const FFT_EVERY_N_FRAMES = 2;
const SMOOTH = 0.88;
const RAIN_COLS = 60;

// ── Matrix rain ──────────────────────────────────────────────────────────────

const MATRIX_CHARS =
  "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ012345789ZΞΨΩΦ:・.=*+-<>¦╌";

interface RainDrop {
  y: number;
  speed: number;
  chars: string[];
}

function randomChar(): string {
  return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
}

function createDrops(cols: number): RainDrop[] {
  return Array.from({ length: cols }, () => ({
    y: Math.random() * -50,
    speed: 0.5 + Math.random() * 2,
    chars: Array.from({ length: 22 }, randomChar),
  }));
}

// ── Spoon model ──────────────────────────────────────────────────────────────
// The OBJ model lies along Z (bowl at −Z, handle tip at +Z).
// ~0.43 wide (X), ~0.11 tall (Y), ~1.85 long (Z).
// We bend the handle half (positive Z) using vertex deformation.

const SPOON_MATERIAL = new THREE.MeshPhysicalMaterial({
  color: 0xd8d8de,
  metalness: 1.0,
  roughness: 0.08,
  reflectivity: 1.0,
  clearcoat: 0.3,
  clearcoatRoughness: 0.05,
  envMapIntensity: 2.0,
  side: THREE.DoubleSide,
});

/**
 * Apply a smooth bend to vertex positions along Z.
 * `bendAmount` is 0–1 (0 = straight, 1 = full bend).
 * Bends the TOP of the spoon (negative Z / bowl side).
 */
function applyBend(
  positions: THREE.BufferAttribute,
  originals: Float32Array,
  bendStart: number,
  bendEnd: number,
  bendAmount: number,
) {
  const maxAngle = bendAmount * (80 * Math.PI) / 180; // up to 80°
  const range = bendStart - bendEnd; // bendEnd < bendStart (negative Z)
  const count = positions.count;

  for (let i = 0; i < count; i++) {
    const ox = originals[i * 3];
    const oy = originals[i * 3 + 1];
    const oz = originals[i * 3 + 2];

    if (oz >= bendStart) {
      positions.setXYZ(i, ox, oy, oz);
      continue;
    }

    // t: 0 at bendStart, 1 at bendEnd (into negative Z)
    const t = Math.min(1, (bendStart - oz) / range);
    const angle = maxAngle * t * t; // quadratic ease

    // Rotate the segment around the bend origin
    const dz = bendStart - oz;
    const newZ = bendStart - Math.cos(angle) * dz;
    const newY = oy + Math.sin(angle) * dz;

    positions.setXYZ(i, ox, newY, newZ);
  }

  positions.needsUpdate = true;
}

// ── Procedural env-map for reflections ───────────────────────────────────────

function createEnvMap(): THREE.Texture {
  const size = 512;
  const data = new Uint8Array(size * size * 4);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      const t = y / size;
      const u = x / size;
      // Richer gradient: cool highlights top, warm bottom, bright centre band
      const band = Math.exp(-((t - 0.35) * (t - 0.35)) / 0.02) * 80;
      data[i] = Math.min(255, Math.floor(15 + t * 50 + band * 0.6));
      data[i + 1] = Math.min(255, Math.floor(25 + t * 90 + band + Math.sin(u * 12) * 10));
      data[i + 2] = Math.min(255, Math.floor(35 + t * 70 + band * 0.8));
      data[i + 3] = 255;
    }
  }

  const tex = new THREE.DataTexture(data, size, size, THREE.RGBAFormat);
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.needsUpdate = true;
  return tex;
}

// ── Component ────────────────────────────────────────────────────────────────

export default function SpoonBend({ eegData, onExit }: ExperienceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const rafRef = useRef(0);
  const frameRef = useRef(0);
  const focusRef = useRef(0);
  const baselineRef = useRef<number | null>(null);
  const baselineSamples = useRef<number[]>([]);
  const dropsRef = useRef<RainDrop[]>(createDrops(RAIN_COLS));
  const spoonGroupRef = useRef<THREE.Group | null>(null);
  const origPositionsRef = useRef<Map<THREE.BufferGeometry, Float32Array>>(new Map());
  const cleanedUpRef = useRef(false);

  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [calibrating, setCalibrating] = useState(false);
  const [focus, setFocus] = useState(0);
  const [bendPct, setBendPct] = useState(0);
  const [bands, setBands] = useState<BandPowers>({});
  const [hint, setHint] = useState("Focus your mind to bend the spoon…");

  // ── Calibration ────────────────────────────────────────────────────

  const startCalibration = useCallback(() => {
    baselineSamples.current = [];
    baselineRef.current = null;
    setCalibrating(true);
    setHint("Relax… capturing baseline (3 s)");
    setTimeout(() => {
      const samples = baselineSamples.current;
      if (samples.length > 0) {
        baselineRef.current =
          samples.reduce((a, b) => a + b, 0) / samples.length;
      }
      setCalibrating(false);
      setHint("Now concentrate — bend the spoon!");
    }, 3000);
  }, []);

  const resetCalibration = useCallback(() => {
    baselineRef.current = null;
    baselineSamples.current = [];
    focusRef.current = 0;
    setFocus(0);
    setBendPct(0);
    setHint("Baseline reset. Press Space to recalibrate.");
  }, []);

  // ── Keyboard ──────────────────────────────────────────────────────

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onExit();
      if (e.key === " ") {
        e.preventDefault();
        startCalibration();
      }
      if (e.key === "r" || e.key === "R") resetCalibration();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onExit, startCalibration, resetCalibration]);

  // ── Three.js scene + render loop ──────────────────────────────────

  useEffect(() => {
    const container = containerRef.current;
    const overlay = overlayRef.current;
    if (!container || !overlay) return;
    cleanedUpRef.current = false;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.prepend(renderer.domElement);
    renderer.domElement.style.cssText =
      "position:absolute;inset:0;width:100%;height:100%;display:block;";
    rendererRef.current = renderer;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050505);

    const envMap = createEnvMap();
    scene.environment = envMap;

    // Camera — centred on the spoon
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
    camera.position.set(0, 0, 3);
    camera.lookAt(0, 0, 0);

    // Lights
    scene.add(new THREE.AmbientLight(0x112211, 0.6));

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
    keyLight.position.set(2, 3, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x88ccff, 0.6);
    fillLight.position.set(-3, 1, 2);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x00ff66, 0, 10);
    rimLight.position.set(0, -1, -2);
    scene.add(rimLight);

    // Spoon — loaded from OBJ, kept in a group for transforms
    const spoonGroup = new THREE.Group();
    // Upright: rotate so Z-axis of model points upward (bowl on top)
    spoonGroup.rotation.x = Math.PI * 0.55;
    scene.add(spoonGroup);
    spoonGroupRef.current = spoonGroup;

    // Bounding extents for bend calculation (Z axis of model)
    // Bowl is at negative Z, handle at positive Z.
    // We bend from the bowl side: bendStart is just below centre,
    // bendEnd is the bowl tip (most negative Z).
    let bendStart = 0;
    let bendEnd = -0.92;

    const loader = new OBJLoader();
    loader.load(spoonObjUrl, (obj) => {
      if (cleanedUpRef.current) return;
      obj.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = SPOON_MATERIAL;
          // Store original positions for vertex bending
          const geo = child.geometry as THREE.BufferGeometry;
          const posAttr = geo.getAttribute("position") as THREE.BufferAttribute;
          origPositionsRef.current.set(geo, new Float32Array(posAttr.array));
          geo.computeVertexNormals();
        }
      });

      // Centre and scale — 20% smaller than full-fit
      const box = new THREE.Box3().setFromObject(obj);
      const centre = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const scale = (1.8 * 0.8) / Math.max(size.x, size.y, size.z);
      obj.scale.setScalar(scale);
      obj.position.sub(centre.multiplyScalar(scale));

      // Recalculate bend extents in scaled space (bowl = negative Z)
      bendStart = (0.05) * scale - centre.z * scale;  // just above centre
      bendEnd = (box.min.z * scale) - centre.z * scale; // bowl tip

      spoonGroup.add(obj);
    });

    // Floating particles
    const particleCount = 200;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 4;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 4;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    pGeo.setAttribute("position", new THREE.Float32BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x00ff44,
      size: 0.015,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    scene.add(new THREE.Points(pGeo, pMat));

    // Overlay 2D context
    const overlayCtx = overlay.getContext("2d")!;
    const dpr = window.devicePixelRatio || 1;

    // Resize
    function resize() {
      const w = container!.clientWidth;
      const h = container!.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      overlay!.width = w * dpr;
      overlay!.height = h * dpr;
      overlay!.style.width = w + "px";
      overlay!.style.height = h + "px";
      overlayCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    // Animation loop
    const clock = new THREE.Clock();

    const render = () => {
      if (cleanedUpRef.current) return;
      rafRef.current = requestAnimationFrame(render);
      frameRef.current += 1;
      const dt = clock.getDelta();
      const elapsed = clock.elapsedTime;
      const w = container!.clientWidth;
      const h = container!.clientHeight;

      // ── FFT ───────────────────────────────────────────────────────
      if (frameRef.current % FFT_EVERY_N_FRAMES === 0) {
        const { buffers, writeIndex, samplesInBuffer } = eegData;
        if (samplesInBuffer.current >= FFT_SIZE) {
          const input = new Float64Array(FFT_SIZE);
          const chCount = Math.min(eegData.numChannels, 4);
          for (let ch = 0; ch < chCount; ch++) {
            const buf = buffers.current[ch];
            const wi = writeIndex.current;
            const len = buf.length;
            for (let i = 0; i < FFT_SIZE; i++) {
              input[i] += buf[(wi - FFT_SIZE + i + len) % len];
            }
          }
          for (let i = 0; i < FFT_SIZE; i++) input[i] /= chCount;

          const result = getFftEngine().analyse(input);
          if (result) {
            const bp = result.bandPowers;
            const relaxation =
              (bp["Alpha"] ?? 0) + (bp["Theta"] ?? 0) + (bp["Delta"] ?? 0) + 1e-6;
            const concentration = (bp["Beta"] ?? 0) + (bp["Gamma"] ?? 0);
            let raw = concentration / relaxation;

            if (calibrating) baselineSamples.current.push(raw);
            if (baselineRef.current !== null)
              raw = Math.max(0, raw - baselineRef.current);

            const normalised = Math.min(1, raw / 1.8);
            focusRef.current =
              SMOOTH * focusRef.current + (1 - SMOOTH) * normalised;

            if (frameRef.current % (FFT_EVERY_N_FRAMES * 4) === 0) {
              setFocus(focusRef.current);
              setBendPct(Math.round(focusRef.current * 100));
              setBands(bp);
            }
          }
        }
      }

      const f = focusRef.current;

      // ── Bend loaded spoon vertices ────────────────────────────────
      origPositionsRef.current.forEach((orig, geo) => {
        const posAttr = geo.getAttribute("position") as THREE.BufferAttribute;
        applyBend(posAttr, orig, bendStart, bendEnd, f);
        geo.computeVertexNormals();
      });

      // Subtle idle sway
      spoonGroup.rotation.y = Math.sin(elapsed * 0.3) * 0.15;
      spoonGroup.rotation.x =
        Math.PI * 0.55 + Math.sin(elapsed * 0.2) * 0.03;

      // Green rim glow + particle opacity track focus
      rimLight.intensity = f * 3;
      pMat.opacity = 0.15 + f * 0.5;

      // Particle drift
      const posAttr = pGeo.getAttribute("position") as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        let py = posAttr.getY(i);
        py += (0.03 + f * 0.08) * dt * 10;
        if (py > 2) py = -2;
        posAttr.setY(i, py);
      }
      posAttr.needsUpdate = true;

      // ── Render 3D ─────────────────────────────────────────────────
      renderer.render(scene, camera);

      // ── Matrix rain overlay ───────────────────────────────────────
      overlayCtx.clearRect(0, 0, w, h);

      const colW = w / RAIN_COLS;
      const fontSize = Math.max(10, colW * 0.72);
      overlayCtx.font = `${fontSize}px "Courier New", monospace`;
      const drops = dropsRef.current;

      for (let c = 0; c < drops.length; c++) {
        const drop = drops[c];
        const x = c * colW + colW / 2;
        for (let j = 0; j < drop.chars.length; j++) {
          const cy = drop.y - j * fontSize;
          if (cy < -fontSize || cy > h + fontSize) continue;
          const age = j / drop.chars.length;
          const a = (1 - age) * (0.08 + f * 0.35);
          overlayCtx.fillStyle = `rgba(0,255,70,${a.toFixed(3)})`;
          overlayCtx.fillText(drop.chars[j], x, cy);
        }
        drop.y += drop.speed * (0.8 + f * 1.5);
        if (drop.y - drop.chars.length * fontSize > h) {
          drop.y = Math.random() * -200;
          drop.speed = 0.5 + Math.random() * 2;
          for (let k = 0; k < 5; k++) {
            drop.chars[Math.floor(Math.random() * drop.chars.length)] =
              randomChar();
          }
        }
      }

      // ── HUD: Focus arc ────────────────────────────────────────────
      const arcCX = w / 2;
      const arcCY = h * 0.1;
      const arcR = Math.min(w, h) * 0.06;

      overlayCtx.beginPath();
      overlayCtx.arc(arcCX, arcCY, arcR, Math.PI, 2 * Math.PI);
      overlayCtx.strokeStyle = "rgba(255,255,255,0.1)";
      overlayCtx.lineWidth = 4;
      overlayCtx.stroke();

      overlayCtx.beginPath();
      overlayCtx.arc(arcCX, arcCY, arcR, Math.PI, Math.PI + f * Math.PI);
      overlayCtx.strokeStyle = `hsl(${120 * f}, 90%, 50%)`;
      overlayCtx.lineWidth = 4;
      overlayCtx.lineCap = "round";
      overlayCtx.stroke();

      overlayCtx.fillStyle = "#fff";
      overlayCtx.font = `bold ${Math.max(12, arcR * 0.55)}px system-ui, sans-serif`;
      overlayCtx.textAlign = "center";
      overlayCtx.fillText(
        `${Math.round(f * 100)}%`,
        arcCX,
        arcCY + arcR * 0.35,
      );
      overlayCtx.font = `${Math.max(10, arcR * 0.35)}px system-ui, sans-serif`;
      overlayCtx.fillStyle = "rgba(255,255,255,0.5)";
      overlayCtx.fillText("FOCUS", arcCX, arcCY - arcR * 0.15);

      // ── Quote ─────────────────────────────────────────────────────
      const qAlpha = 0.3 + f * 0.5;
      overlayCtx.fillStyle = `rgba(0,255,70,${qAlpha.toFixed(2)})`;
      overlayCtx.font = `italic ${Math.max(14, w * 0.02)}px Georgia, serif`;
      overlayCtx.textAlign = "center";
      if (f > 0.7) {
        overlayCtx.fillText('"There is no spoon."', w / 2, h * 0.91);
      } else if (f > 0.4) {
        overlayCtx.fillText(
          '"Do not try to bend the spoon — that\'s impossible."',
          w / 2,
          h * 0.91,
        );
      } else {
        overlayCtx.fillText(
          '"Instead, only try to realise the truth…"',
          w / 2,
          h * 0.91,
        );
      }
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      cleanedUpRef.current = true;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      envMap.dispose();
      if (container.contains(renderer.domElement))
        container.removeChild(renderer.domElement);
      rendererRef.current = null;
    };
  }, [eegData, calibrating]);

  // ── UI overlay ────────────────────────────────────────────────────

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "#050505",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={overlayRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Top bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 20px",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        <span
          style={{
            color: "#0f0",
            fontFamily: "monospace",
            fontSize: 14,
            textShadow: "0 0 8px rgba(0,255,0,0.5)",
          }}
        >
          🥄 SPOON BEND
        </span>
        <span
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: 12,
            fontFamily: "monospace",
          }}
        >
          Space: calibrate · R: reset · Esc: exit
        </span>
      </div>

      {/* Hint */}
      <div
        style={{
          position: "absolute",
          bottom: 50,
          left: 0,
          right: 0,
          textAlign: "center",
          color: `rgba(0,255,70,${0.5 + focus * 0.5})`,
          fontFamily: "monospace",
          fontSize: 13,
          textShadow: "0 0 6px rgba(0,255,0,0.3)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        {hint}
      </div>

      {/* Band powers */}
      <div
        style={{
          position: "absolute",
          bottom: 12,
          left: 16,
          display: "flex",
          gap: 10,
          fontFamily: "monospace",
          fontSize: 11,
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        {FREQUENCY_BANDS.map((b) => (
          <span key={b.name} style={{ color: b.color, opacity: 0.7 }}>
            {b.label.charAt(0)} {(bands[b.name] ?? 0).toFixed(0)}
          </span>
        ))}
      </div>

      {/* Bend % */}
      <div
        style={{
          position: "absolute",
          bottom: 12,
          right: 16,
          color: "#0f0",
          fontFamily: "monospace",
          fontSize: 13,
          opacity: 0.7,
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        bend {bendPct}%
      </div>

      {/* Exit button */}
      <button
        onClick={onExit}
        style={{
          position: "absolute",
          top: 12,
          right: 12,
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 6,
          color: "#fff",
          padding: "4px 12px",
          cursor: "pointer",
          fontSize: 13,
          zIndex: 3,
        }}
      >
        ✕
      </button>

      {/* Disclaimer overlay */}
      {showDisclaimer && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <div
            style={{
              maxWidth: 420,
              padding: "28px 32px",
              background: "rgba(10,10,10,0.95)",
              border: "1px solid rgba(0,255,70,0.25)",
              borderRadius: 12,
              textAlign: "center",
              fontFamily: "monospace",
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 12 }}>⚠️</div>
            <h2
              style={{
                color: "#0f0",
                fontSize: 16,
                margin: "0 0 12px",
                textShadow: "0 0 8px rgba(0,255,0,0.4)",
              }}
            >
              For entertainment only
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 13,
                lineHeight: 1.6,
                margin: "0 0 20px",
              }}
            >
              PiEEG does not measure electrode impedance, so the signal may
              contain significant noise. Movements you see could be caused by
              random electrical artifacts rather than actual brain activity.
              Treat this as a fun demo, not a reliable neurofeedback tool.
            </p>
            <button
              onClick={() => setShowDisclaimer(false)}
              style={{
                background: "rgba(0,255,70,0.15)",
                border: "1px solid rgba(0,255,70,0.4)",
                borderRadius: 6,
                color: "#0f0",
                padding: "8px 28px",
                cursor: "pointer",
                fontSize: 14,
                fontFamily: "monospace",
                textShadow: "0 0 6px rgba(0,255,0,0.3)",
              }}
            >
              Got it — let me try!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
