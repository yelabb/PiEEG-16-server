// ─────────────────────────────────────────────────────────────────────────────
// Spoon Bend — "There is no spoon" / Matrix-inspired focus experience.
//
// The user concentrates to bend a virtual spoon using brainwaves.
// Beta + Gamma power (focus/attention) drives the bend amount while
// a Matrix-style digital rain falls in the background.
//
// Focus metric: (Beta + Gamma) / (Alpha + Theta + Delta)
// Higher ratio → more concentration → more bend.
//
// Controls:
//   Space — toggle calibration baseline
//   R     — reset calibration
//   Esc   — exit
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef, useCallback } from "react";
import type { ExperienceProps } from "../registry";
import { FftEngine, FREQUENCY_BANDS } from "../../lib/fftEngine";
import type { BandPowers } from "../../types";

// ── Constants ────────────────────────────────────────────────────────────────

const SAMPLE_RATE = 250;
const FFT_SIZE = 256;
const FFT_ENGINE = new FftEngine(FFT_SIZE, SAMPLE_RATE);

/** How many frames between FFT updates (perf: skip every other). */
const FFT_EVERY_N_FRAMES = 2;

/** Smoothing factor for the focus metric (0 = no smoothing, 1 = frozen). */
const SMOOTH = 0.88;

/** Maximum bend angle in degrees. */
const MAX_BEND_DEG = 75;

/** Matrix rain — number of columns. */
const RAIN_COLS = 48;

// ── Matrix rain state ────────────────────────────────────────────────────────

interface RainDrop {
  y: number;
  speed: number;
  chars: string[];
}

const MATRIX_CHARS = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ012345789ZΞΨΩΦ:・.\"=*+-<>¦╌";

function randomChar(): string {
  return MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
}

function createDrops(cols: number): RainDrop[] {
  return Array.from({ length: cols }, () => ({
    y: Math.random() * -50,
    speed: 0.5 + Math.random() * 2,
    chars: Array.from({ length: 20 }, randomChar),
  }));
}

// ── Spoon path generation ────────────────────────────────────────────────────

/**
 * Returns an array of {x, y} points tracing a spoon outline.
 * `bend` is 0..1 — how much to curve the handle.
 */
function spoonPoints(
  cx: number,
  cy: number,
  size: number,
  bend: number,
): { x: number; y: number }[] {
  const pts: { x: number; y: number }[] = [];
  const bowlW = size * 0.32;
  const bowlH = size * 0.22;
  const handleLen = size * 0.58;
  const handleW = size * 0.055;

  // Bowl — ellipse at top
  const bowlCY = cy - size * 0.28;
  for (let a = 0; a <= Math.PI * 2; a += 0.15) {
    pts.push({
      x: cx + Math.cos(a) * bowlW,
      y: bowlCY + Math.sin(a) * bowlH,
    });
  }

  // Neck narrowing
  const neckY = bowlCY + bowlH;
  pts.push({ x: cx - handleW * 1.8, y: neckY });
  pts.push({ x: cx + handleW * 1.8, y: neckY });

  // Handle — bends via quadratic offset
  const handleStartY = neckY + size * 0.02;
  const handleEndY = handleStartY + handleLen;
  const bendOffset = bend * size * 0.55; // max lateral pixel shift

  const steps = 24;
  // Right edge going down
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const y = handleStartY + t * handleLen;
    // Quadratic bend curve, peak at t≈0.6
    const curve = bendOffset * Math.sin(t * Math.PI * 0.9);
    pts.push({ x: cx + handleW + curve, y });
  }
  // Left edge going up
  for (let i = steps; i >= 0; i--) {
    const t = i / steps;
    const y = handleStartY + t * handleLen;
    const curve = bendOffset * Math.sin(t * Math.PI * 0.9);
    pts.push({ x: cx - handleW + curve, y });
  }

  return pts;
}

// ── Component ────────────────────────────────────────────────────────────────

export default function SpoonBend({
  eegData,
  onExit,
}: ExperienceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);
  const frameRef = useRef(0);
  const focusRef = useRef(0); // smoothed focus 0–1
  const baselineRef = useRef<number | null>(null);
  const baselineSamples = useRef<number[]>([]);
  const dropsRef = useRef<RainDrop[]>(createDrops(RAIN_COLS));

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

  // ── Render loop ───────────────────────────────────────────────────

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const render = () => {
      rafRef.current = requestAnimationFrame(render);
      frameRef.current += 1;

      // ── Resize ────────────────────────────────────────────────────
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      // ── FFT on selected frames ───────────────────────────────────
      if (frameRef.current % FFT_EVERY_N_FRAMES === 0) {
        const { buffers, writeIndex, samplesInBuffer } = eegData;
        const nSamples = samplesInBuffer.current;
        if (nSamples >= FFT_SIZE) {
          // Average first 4 channels (frontal) for focus detection
          const input = new Float64Array(FFT_SIZE);
          const chCount = Math.min(eegData.numChannels, 4);
          for (let ch = 0; ch < chCount; ch++) {
            const buf = buffers.current[ch];
            const wi = writeIndex.current;
            const len = buf.length;
            for (let i = 0; i < FFT_SIZE; i++) {
              const idx = (wi - FFT_SIZE + i + len) % len;
              input[i] += buf[idx];
            }
          }
          for (let i = 0; i < FFT_SIZE; i++) input[i] /= chCount;

          const result = FFT_ENGINE.analyse(input);
          if (!result) return;
          const bp = result.bandPowers;

          const alpha = bp["Alpha"] ?? 0;
          const theta = bp["Theta"] ?? 0;
          const beta = bp["Beta"] ?? 0;
          const gamma = bp["Gamma"] ?? 0;
          const delta = bp["Delta"] ?? 0;

          // Focus = concentration bands / relaxation bands
          const relaxation = alpha + theta + delta + 1e-6;
          const concentration = beta + gamma;
          let raw = concentration / relaxation;

          // During calibration, collect baseline samples
          if (calibrating) {
            baselineSamples.current.push(raw);
          }

          // Subtract baseline if calibrated
          if (baselineRef.current !== null) {
            raw = Math.max(0, raw - baselineRef.current);
          }

          // Normalise into 0–1 with a soft-clamp
          // Typical delta from baseline is 0–2
          const normalised = Math.min(1, raw / 1.8);

          // Smooth
          focusRef.current =
            SMOOTH * focusRef.current + (1 - SMOOTH) * normalised;

          // Update React state (throttled to every 4th FFT)
          if (frameRef.current % (FFT_EVERY_N_FRAMES * 4) === 0) {
            setFocus(focusRef.current);
            setBendPct(Math.round(focusRef.current * 100));
            setBands(bp);
          }
        }
      }

      const f = focusRef.current;

      // ── Clear ─────────────────────────────────────────────────────
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, w, h);

      // ── Matrix rain ───────────────────────────────────────────────
      const colW = w / RAIN_COLS;
      const fontSize = Math.max(10, colW * 0.75);
      ctx.font = `${fontSize}px "Courier New", monospace`;
      const drops = dropsRef.current;

      for (let c = 0; c < drops.length; c++) {
        const drop = drops[c];
        const x = c * colW + colW / 2;

        for (let j = 0; j < drop.chars.length; j++) {
          const cy = drop.y - j * fontSize;
          if (cy < -fontSize || cy > h + fontSize) continue;

          const age = j / drop.chars.length;
          // Brighter when more focused
          const alpha = (1 - age) * (0.15 + f * 0.55);
          ctx.fillStyle = `rgba(0,255,70,${alpha.toFixed(3)})`;
          ctx.fillText(drop.chars[j], x, cy);
        }

        // Move drops
        drop.y += drop.speed * (0.8 + f * 1.5);
        if (drop.y - drop.chars.length * fontSize > h) {
          drop.y = Math.random() * -200;
          drop.speed = 0.5 + Math.random() * 2;
          // Refresh a few characters
          for (let k = 0; k < 5; k++) {
            const idx = Math.floor(Math.random() * drop.chars.length);
            drop.chars[idx] = randomChar();
          }
        }
      }

      // ── Spoon ─────────────────────────────────────────────────────
      const spoonSize = Math.min(w, h) * 0.55;
      const spoonCX = w / 2;
      const spoonCY = h * 0.45;

      const pts = spoonPoints(spoonCX, spoonCY, spoonSize, f);

      // Glow
      ctx.save();
      ctx.shadowColor = `rgba(0,255,100,${(0.3 + f * 0.7).toFixed(2)})`;
      ctx.shadowBlur = 15 + f * 40;

      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) {
        ctx.lineTo(pts[i].x, pts[i].y);
      }
      ctx.closePath();

      // Fill — metallic gradient
      const grad = ctx.createLinearGradient(
        spoonCX - spoonSize * 0.3,
        spoonCY - spoonSize * 0.4,
        spoonCX + spoonSize * 0.3,
        spoonCY + spoonSize * 0.5,
      );
      grad.addColorStop(0, "#d4d4d8");
      grad.addColorStop(0.3, "#a1a1aa");
      grad.addColorStop(0.5, "#e4e4e7");
      grad.addColorStop(0.7, "#71717a");
      grad.addColorStop(1, "#52525b");
      ctx.fillStyle = grad;
      ctx.fill();

      // Stroke
      ctx.strokeStyle = `rgba(0,255,100,${(0.2 + f * 0.6).toFixed(2)})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();

      // ── Quote ─────────────────────────────────────────────────────
      const quoteAlpha = 0.3 + f * 0.5;
      ctx.fillStyle = `rgba(0,255,70,${quoteAlpha.toFixed(2)})`;
      ctx.font = `italic ${Math.max(14, w * 0.022)}px Georgia, serif`;
      ctx.textAlign = "center";

      if (f > 0.7) {
        ctx.fillText('"There is no spoon."', w / 2, h * 0.88);
      } else if (f > 0.4) {
        ctx.fillText(
          '"Do not try to bend the spoon — that\'s impossible."',
          w / 2,
          h * 0.88,
        );
      } else {
        ctx.fillText(
          '"Instead, only try to realise the truth…"',
          w / 2,
          h * 0.88,
        );
      }

      // ── Focus arc meter ───────────────────────────────────────────
      const arcCX = w / 2;
      const arcCY = h * 0.13;
      const arcR = Math.min(w, h) * 0.07;

      ctx.beginPath();
      ctx.arc(arcCX, arcCY, arcR, Math.PI, 2 * Math.PI, false);
      ctx.strokeStyle = "rgba(255,255,255,0.1)";
      ctx.lineWidth = 4;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(
        arcCX,
        arcCY,
        arcR,
        Math.PI,
        Math.PI + f * Math.PI,
        false,
      );
      ctx.strokeStyle = `hsl(${120 * f}, 90%, 50%)`;
      ctx.lineWidth = 4;
      ctx.lineCap = "round";
      ctx.stroke();

      ctx.fillStyle = "#fff";
      ctx.font = `bold ${Math.max(12, arcR * 0.55)}px system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.fillText(`${Math.round(f * 100)}%`, arcCX, arcCY + arcR * 0.35);

      ctx.font = `${Math.max(10, arcR * 0.35)}px system-ui, sans-serif`;
      ctx.fillStyle = "rgba(255,255,255,0.5)";
      ctx.fillText("FOCUS", arcCX, arcCY - arcR * 0.15);
    };

    rafRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafRef.current);
  }, [eegData, calibrating]);

  // ── UI overlay ────────────────────────────────────────────────────

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background: "#0a0a0a",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
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
          background: "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 100%)",
          pointerEvents: "none",
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
          bottom: 40,
          left: 0,
          right: 0,
          textAlign: "center",
          color: `rgba(0,255,70,${0.5 + focus * 0.5})`,
          fontFamily: "monospace",
          fontSize: 13,
          textShadow: "0 0 6px rgba(0,255,0,0.3)",
          pointerEvents: "none",
        }}
      >
        {hint}
      </div>

      {/* Band powers — bottom-left */}
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
        }}
      >
        {FREQUENCY_BANDS.map((b) => (
          <span key={b.name} style={{ color: b.color, opacity: 0.7 }}>
            {b.label.charAt(0)} {((bands[b.name] ?? 0)).toFixed(0)}
          </span>
        ))}
      </div>

      {/* Bend percentage — bottom-right */}
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
        }}
      >
        bend {bendPct}%
      </div>

      {/* Exit button (mobile) */}
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
          pointerEvents: "auto",
        }}
      >
        ✕
      </button>
    </div>
  );
}
