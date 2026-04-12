// ─────────────────────────────────────────────────────────────────────────────
// EyeTrack — EOG-based gaze estimation mini-game.
//
// Frontal EEG electrodes (Fp1 / Fp2) capture electro-oculographic (EOG)
// artifacts that encode horizontal and vertical eye position:
//
//   Horizontal ≈ Fp2 − Fp1   (differential — lateralised corneal dipole)
//   Vertical   ≈ (Fp1 + Fp2) / 2   (common-mode — both eyes move together)
//
// The game runs in three phases:
//   1. Calibration   — user fixates on 5 targets (center, up, down, left, right)
//   2. Model build   — simple linear mapping from EOG features → screen X, Y
//   3. Live tracking — real-time gaze dot + optional algorithm editor
//
// Users can open a live code editor to tweak the gaze-estimation function,
// experimenting with smoothing, channel selection, and heuristics.
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useState, useEffect, useCallback } from "react";
import type { ExperienceProps } from "../registry";
import type { EEGData } from "../../types";
import { SAMPLE_RATE } from "../../types";

// ── Types ────────────────────────────────────────────────────────────────

type TargetLabel = "center" | "up" | "down" | "left" | "right";

interface CalibrationSample {
  hEOG: number; // mean horizontal EOG
  vEOG: number; // mean vertical EOG
  x: number; // normalised target x  (-1 … 1)
  y: number; // normalised target y  (-1 … 1)
}

interface GazeModel {
  hOffset: number;
  vOffset: number;
  hScaleX: number;
  hScaleY: number;
  vScaleX: number;
  vScaleY: number;
}

// ── Constants ────────────────────────────────────────────────────────────

const TARGETS: { label: TargetLabel; x: number; y: number; instruction: string }[] = [
  { label: "center", x: 0, y: 0, instruction: "Look at the center dot" },
  { label: "up", x: 0, y: -0.7, instruction: "Look UP at the dot" },
  { label: "down", x: 0, y: 0.7, instruction: "Look DOWN at the dot" },
  { label: "left", x: -0.7, y: 0, instruction: "Look LEFT at the dot" },
  { label: "right", x: 0.7, y: 0, instruction: "Look RIGHT at the dot" },
];

const CALIBRATION_DURATION_MS = 2500; // collect per target
const SETTLE_DELAY_MS = 500; // ignore first N ms after target appears
const CH_FP1 = 0;
const CH_FP2 = 1;
const SMOOTHING = 0.15; // exponential smoothing (lower = smoother)
const DOT_RADIUS = 14;
const TARGET_RADIUS = 32;
const WINDOW_SAMPLES = Math.round(SAMPLE_RATE * 0.12); // ~30 ms sliding window
const TARGET_MOVE_MS = 3000; // validation target jumps every 3 s
const ERROR_HISTORY_LEN = 60; // rolling accuracy window (samples)

// ── EOG feature extraction from ring buffer ──────────────────────────────

function readEOGFeatures(eeg: EEGData, windowSamples: number): { hEOG: number; vEOG: number } | null {
  const bufs = eeg.buffers.current;
  const wi = eeg.writeIndex.current;
  const sib = eeg.samplesInBuffer.current;
  const bs = eeg.bufferSize;

  if (sib < windowSamples || bufs.length < 2) return null;

  const fp1 = bufs[CH_FP1];
  const fp2 = bufs[CH_FP2];

  let sumH = 0;
  let sumV = 0;
  for (let i = 0; i < windowSamples; i++) {
    const idx = (wi - windowSamples + i + bs) % bs;
    const v1 = fp1[idx];
    const v2 = fp2[idx];
    sumH += v2 - v1; // horizontal: Fp2 − Fp1
    sumV += (v1 + v2) * 0.5; // vertical: mean of both
  }
  return {
    hEOG: sumH / windowSamples,
    vEOG: sumV / windowSamples,
  };
}

// ── Build linear model from calibration data ────────────────────────────

function buildModel(samples: CalibrationSample[]): GazeModel {
  const center = samples.find((s) => s.x === 0 && s.y === 0);
  const hOffset = center?.hEOG ?? 0;
  const vOffset = center?.vEOG ?? 0;

  // Simple least-squares for X = a·hEOG + b·vEOG  (after offset removal)
  // and Y = c·hEOG + d·vEOG
  let shh = 0, svv = 0, shv = 0, shx = 0, svx = 0, shy = 0, svy = 0;
  for (const s of samples) {
    const h = s.hEOG - hOffset;
    const v = s.vEOG - vOffset;
    shh += h * h;
    svv += v * v;
    shv += h * v;
    shx += h * s.x;
    svx += v * s.x;
    shy += h * s.y;
    svy += v * s.y;
  }

  const det = shh * svv - shv * shv || 1;
  return {
    hOffset,
    vOffset,
    hScaleX: (svv * shx - shv * svx) / det,
    vScaleX: (shh * svx - shv * shx) / det,
    hScaleY: (svv * shy - shv * svy) / det,
    vScaleY: (shh * svy - shv * shy) / det,
  };
}

// ── Default user-editable algorithm ─────────────────────────────────────

const DEFAULT_ALGORITHM = `// Gaze estimation — edit me!
// Inputs:  hEOG (horizontal), vEOG (vertical), model (calibration)
// Output:  { x, y } in range -1…1

const h = hEOG - model.hOffset;
const v = vEOG - model.vOffset;

const x = h * model.hScaleX + v * model.vScaleX;
const y = h * model.hScaleY + v * model.vScaleY;

// Clamp to screen bounds
return {
  x: Math.max(-1, Math.min(1, x)),
  y: Math.max(-1, Math.min(1, y)),
};`;

// ── Compile user algorithm safely ───────────────────────────────────────

function compileAlgorithm(code: string): ((hEOG: number, vEOG: number, model: GazeModel) => { x: number; y: number }) | null {
  try {
    // Wrap in function body — user code must return {x, y}
    const fn = new Function("hEOG", "vEOG", "model", "Math", code) as (
      hEOG: number,
      vEOG: number,
      model: GazeModel,
      math: typeof Math,
    ) => { x: number; y: number };
    // Quick test
    const test = fn(0, 0, { hOffset: 0, vOffset: 0, hScaleX: 1, hScaleY: 0, vScaleX: 0, vScaleY: 1 }, Math);
    if (typeof test?.x !== "number" || typeof test?.y !== "number") return null;
    return (h, v, m) => fn(h, v, m, Math);
  } catch {
    return null;
  }
}

// ═════════════════════════════════════════════════════════════════════════
// Component
// ═════════════════════════════════════════════════════════════════════════

type Phase = "intro" | "calibrating" | "tracking";

export default function EyeTrack({ eegData, onExit }: ExperienceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ── Calibration state ──────────────────────────────────────────────
  const [phase, setPhase] = useState<Phase>("intro");
  const [targetIdx, setTargetIdx] = useState(0);
  const [progress, setProgress] = useState(0); // 0…1 per target
  const [countdown, setCountdown] = useState(3); // 3-2-1 before first target

  // ── Model state ────────────────────────────────────────────────────
  const modelRef = useRef<GazeModel | null>(null);
  const samplesRef = useRef<CalibrationSample[]>([]);
  const collectRef = useRef<{ hArr: number[]; vArr: number[] }>({ hArr: [], vArr: [] });

  // ── Tracking state (refs for RAF) ─────────────────────────────────
  const gazeRef = useRef({ x: 0, y: 0 });
  const rawRef = useRef({ x: 0, y: 0 });

  // ── Validation target ("real" dot the user follows) ────────────────
  const validationRef = useRef({ x: 0, y: 0, lastMove: 0 });
  const errorHistoryRef = useRef<number[]>([]);
  const avgErrorRef = useRef(0);

  // ── Algorithm editor ──────────────────────────────────────────────
  const [showEditor, setShowEditor] = useState(false);
  const [algoCode, setAlgoCode] = useState(DEFAULT_ALGORITHM);
  const [algoError, setAlgoError] = useState<string | null>(null);
  const algoFnRef = useRef<ReturnType<typeof compileAlgorithm>>(null);

  // Compile initial algorithm
  useEffect(() => {
    algoFnRef.current = compileAlgorithm(DEFAULT_ALGORITHM);
  }, []);

  // ── Countdown before calibration ──────────────────────────────────
  useEffect(() => {
    if (phase !== "calibrating" || countdown <= 0) return;
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, countdown]);

  // ── Calibration collection loop ───────────────────────────────────
  useEffect(() => {
    if (phase !== "calibrating" || countdown > 0) return;

    collectRef.current = { hArr: [], vArr: [] };
    const target = TARGETS[targetIdx];
    const startTime = performance.now();
    let raf: number;

    const collect = () => {
      const elapsed = performance.now() - startTime;
      setProgress(Math.min(1, elapsed / CALIBRATION_DURATION_MS));

      if (elapsed > SETTLE_DELAY_MS) {
        const feat = readEOGFeatures(eegData, WINDOW_SAMPLES);
        if (feat) {
          collectRef.current.hArr.push(feat.hEOG);
          collectRef.current.vArr.push(feat.vEOG);
        }
      }

      if (elapsed < CALIBRATION_DURATION_MS) {
        raf = requestAnimationFrame(collect);
      } else {
        // Compute mean for this target
        const { hArr, vArr } = collectRef.current;
        if (hArr.length > 0) {
          const meanH = hArr.reduce((a, b) => a + b, 0) / hArr.length;
          const meanV = vArr.reduce((a, b) => a + b, 0) / vArr.length;
          samplesRef.current.push({ hEOG: meanH, vEOG: meanV, x: target.x, y: target.y });
        }

        // Next target or finish
        if (targetIdx < TARGETS.length - 1) {
          setTargetIdx((i) => i + 1);
        } else {
          // Build model and go live
          modelRef.current = buildModel(samplesRef.current);
          setPhase("tracking");
        }
      }
    };

    raf = requestAnimationFrame(collect);
    return () => cancelAnimationFrame(raf);
  }, [phase, countdown, targetIdx, eegData]);

  // ── Live tracking render loop ─────────────────────────────────────
  useEffect(() => {
    if (phase !== "tracking") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    const dpr = devicePixelRatio || 1;

    // Seed first validation target
    validationRef.current = { x: 0, y: 0, lastMove: performance.now() };
    errorHistoryRef.current = [];

    const render = () => {
      // Resize if needed
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // ── Move validation target periodically ──────────────────────
      const now = performance.now();
      if (now - validationRef.current.lastMove > TARGET_MOVE_MS) {
        validationRef.current.x = (Math.random() * 2 - 1) * 0.7;
        validationRef.current.y = (Math.random() * 2 - 1) * 0.7;
        validationRef.current.lastMove = now;
      }

      // Read EOG and estimate gaze
      const feat = readEOGFeatures(eegData, WINDOW_SAMPLES);
      if (feat && modelRef.current) {
        const fn = algoFnRef.current;
        let raw = { x: 0, y: 0 };
        if (fn) {
          try {
            raw = fn(feat.hEOG, feat.vEOG, modelRef.current);
          } catch {
            raw = { x: 0, y: 0 };
          }
        }
        rawRef.current = raw;

        // Exponential smoothing
        gazeRef.current.x += SMOOTHING * (raw.x - gazeRef.current.x);
        gazeRef.current.y += SMOOTHING * (raw.y - gazeRef.current.y);
      }

      const cx = w / 2;
      const cy = h / 2;
      const rangeX = w * 0.42;
      const rangeY = h * 0.42;

      // ── Grid / crosshair ─────────────────────────────────────────
      ctx.strokeStyle = "rgba(255,255,255,0.08)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, h);
      ctx.moveTo(0, cy);
      ctx.lineTo(w, cy);
      ctx.stroke();

      // ── Calibration target echoes (faint) ────────────────────────
      ctx.fillStyle = "rgba(255,255,255,0.04)";
      for (const t of TARGETS) {
        const tx = cx + t.x * rangeX;
        const ty = cy + t.y * rangeY;
        ctx.beginPath();
        ctx.arc(tx, ty, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── Validation target (green — "look here") ───────────────────
      const vt = validationRef.current;
      const vtx = cx + vt.x * rangeX;
      const vty = cy + vt.y * rangeY;

      // Outer glow
      const vtGrad = ctx.createRadialGradient(vtx, vty, 0, vtx, vty, TARGET_RADIUS * 1.5);
      vtGrad.addColorStop(0, "rgba(34,197,94,0.25)");
      vtGrad.addColorStop(1, "rgba(34,197,94,0)");
      ctx.fillStyle = vtGrad;
      ctx.beginPath();
      ctx.arc(vtx, vty, TARGET_RADIUS * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Ring
      ctx.strokeStyle = "#22c55e";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(vtx, vty, TARGET_RADIUS, 0, Math.PI * 2);
      ctx.stroke();

      // Inner dot
      ctx.fillStyle = "#22c55e";
      ctx.beginPath();
      ctx.arc(vtx, vty, 5, 0, Math.PI * 2);
      ctx.fill();

      // Label
      ctx.fillStyle = "rgba(34,197,94,0.7)";
      ctx.font = "11px monospace";
      ctx.textAlign = "center";
      ctx.fillText("LOOK HERE", vtx, vty + TARGET_RADIUS + 16);

      // ── Predicted gaze dot (blue) ─────────────────────────────────
      const gx = cx + gazeRef.current.x * rangeX;
      const gy = cy + gazeRef.current.y * rangeY;

      // Error line connecting predicted → real
      const errDist = Math.hypot(gazeRef.current.x - vt.x, gazeRef.current.y - vt.y);
      errorHistoryRef.current.push(errDist);
      if (errorHistoryRef.current.length > ERROR_HISTORY_LEN) errorHistoryRef.current.shift();
      const errArr = errorHistoryRef.current;
      avgErrorRef.current = errArr.reduce((a, b) => a + b, 0) / errArr.length;
      const accuracy = Math.max(0, (1 - avgErrorRef.current / 1.4) * 100); // 1.4 ≈ max diagonal

      ctx.strokeStyle = `rgba(255,${errDist < 0.3 ? 255 : errDist < 0.6 ? 180 : 80},80,0.35)`;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(gx, gy);
      ctx.lineTo(vtx, vty);
      ctx.stroke();
      ctx.setLineDash([]);

      // Outer glow
      const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, DOT_RADIUS * 3);
      grad.addColorStop(0, "rgba(59,130,246,0.35)");
      grad.addColorStop(1, "rgba(59,130,246,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(gx, gy, DOT_RADIUS * 3, 0, Math.PI * 2);
      ctx.fill();

      // Core dot
      ctx.fillStyle = "#3b82f6";
      ctx.beginPath();
      ctx.arc(gx, gy, DOT_RADIUS, 0, Math.PI * 2);
      ctx.fill();

      // Inner highlight
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      ctx.beginPath();
      ctx.arc(gx - 3, gy - 3, DOT_RADIUS * 0.35, 0, Math.PI * 2);
      ctx.fill();

      // Label
      ctx.fillStyle = "rgba(59,130,246,0.7)";
      ctx.font = "11px monospace";
      ctx.textAlign = "center";
      ctx.fillText("PREDICTED", gx, gy + DOT_RADIUS + 16);

      // ── HUD ──────────────────────────────────────────────────────
      ctx.fillStyle = "rgba(255,255,255,0.5)";
      ctx.font = "12px monospace";
      ctx.textAlign = "left";
      ctx.fillText(
        `predicted: (${gazeRef.current.x.toFixed(2)}, ${gazeRef.current.y.toFixed(2)})`,
        12,
        h - 52,
      );
      ctx.fillText(
        `target:    (${vt.x.toFixed(2)}, ${vt.y.toFixed(2)})`,
        12,
        h - 36,
      );
      ctx.fillText(
        `error: ${errDist.toFixed(3)}   accuracy: ${accuracy.toFixed(1)}%`,
        12,
        h - 20,
      );

      // ── Accuracy badge (top-right) ────────────────────────────────
      const badgeCol = accuracy > 75 ? "#22c55e" : accuracy > 45 ? "#f59e0b" : "#ef4444";
      ctx.fillStyle = badgeCol;
      ctx.font = "bold 28px monospace";
      ctx.textAlign = "right";
      ctx.fillText(`${accuracy.toFixed(0)}%`, w - 16, 84);
      ctx.fillStyle = "rgba(255,255,255,0.35)";
      ctx.font = "11px monospace";
      ctx.fillText("accuracy", w - 16, 100);

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);
    return () => cancelAnimationFrame(raf);
  }, [phase, eegData]);

  // ── Keyboard shortcuts ────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showEditor) setShowEditor(false);
        else onExit();
      }
      if (e.key === "r" || e.key === "R") {
        // Recalibrate
        samplesRef.current = [];
        modelRef.current = null;
        gazeRef.current = { x: 0, y: 0 };
        setTargetIdx(0);
        setCountdown(3);
        setProgress(0);
        setPhase("calibrating");
      }
      if (e.key === "e" || e.key === "E") {
        setShowEditor((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onExit, showEditor]);

  // ── Apply algorithm edits ─────────────────────────────────────────
  const applyAlgorithm = useCallback(() => {
    const fn = compileAlgorithm(algoCode);
    if (fn) {
      algoFnRef.current = fn;
      setAlgoError(null);
    } else {
      setAlgoError("Syntax error or missing return { x, y }");
    }
  }, [algoCode]);

  // ═══════════════════════════════════════════════════════════════════
  // Render
  // ═══════════════════════════════════════════════════════════════════

  const target = TARGETS[targetIdx];

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        background: "#0a0a0f",
        overflow: "hidden",
        fontFamily: "'Inter', system-ui, sans-serif",
        color: "#fff",
      }}
    >
      {/* ── Intro overlay ────────────────────────────────────────── */}
      {phase === "intro" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            background: "radial-gradient(ellipse at center, rgba(15,15,30,0.95) 0%, #0a0a0f 70%)",
          }}
        >
          <div
            style={{
              maxWidth: 480,
              padding: "36px 32px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 12 }}>👁️</div>
            <h2 style={{ fontSize: 24, fontWeight: 700, margin: "0 0 10px" }}>Eye Track</h2>
            <p style={{ fontSize: 14, opacity: 0.6, lineHeight: 1.7, margin: "0 0 16px" }}>
              This experiment estimates where you're looking using EOG signals from
              your frontal EEG electrodes (Fp1 &amp; Fp2). Eye movements create
              electrical artifacts that differ for left/right and up/down gaze.
            </p>
            <div
              style={{
                fontSize: 13,
                opacity: 0.45,
                lineHeight: 1.8,
                textAlign: "left",
                margin: "0 auto 20px",
                maxWidth: 360,
              }}
            >
              <strong style={{ opacity: 1, color: "#3b82f6" }}>How it works:</strong>
              <br />
              1. You'll fixate on <strong>5 targets</strong> (center, up, down, left, right)
              <br />
              2. The system builds a <strong>calibration model</strong> from your signals
              <br />
              3. A <span style={{ color: "#22c55e" }}>green target</span> appears —
              follow it with your eyes
              <br />
              4. A <span style={{ color: "#3b82f6" }}>blue dot</span> shows the model's prediction
              <br />
              5. Open the <strong>Algorithm Editor</strong> to tweak the estimation live
            </div>
            <p style={{ fontSize: 12, opacity: 0.35, margin: "0 0 20px" }}>
              Tip: keep your head still — only move your eyes.
            </p>
            <button
              onClick={() => setPhase("calibrating")}
              style={{
                background: "#3b82f6",
                color: "#fff",
                border: "none",
                borderRadius: 10,
                padding: "10px 32px",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Start Calibration →
            </button>
          </div>
        </div>
      )}

      {/* ── Calibration overlay ──────────────────────────────────── */}
      {phase === "calibrating" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          {countdown > 0 ? (
            <>
              <div style={{ fontSize: 72, fontWeight: 700, opacity: 0.9 }}>
                {countdown}
              </div>
              <div style={{ fontSize: 18, opacity: 0.5, marginTop: 12 }}>
                Get ready — keep your head still
              </div>
            </>
          ) : (
            <>
              {/* Target dot */}
              <div
                style={{
                  position: "absolute",
                  left: `${50 + target.x * 35}%`,
                  top: `${50 + target.y * 35}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  style={{
                    width: TARGET_RADIUS * 2,
                    height: TARGET_RADIUS * 2,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, #3b82f6 0%, #1d4ed8 60%, transparent 100%)",
                    boxShadow: "0 0 40px rgba(59,130,246,0.5)",
                    animation: "pulse 1.5s ease-in-out infinite",
                  }}
                />
              </div>

              {/* Instruction */}
              <div
                style={{
                  position: "absolute",
                  bottom: 80,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 8 }}>
                  {target.instruction}
                </div>
                <div style={{ fontSize: 14, opacity: 0.5 }}>
                  Target {targetIdx + 1} of {TARGETS.length}
                </div>
                {/* Progress bar */}
                <div
                  style={{
                    marginTop: 12,
                    width: 200,
                    height: 4,
                    borderRadius: 2,
                    background: "rgba(255,255,255,0.1)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${progress * 100}%`,
                      height: "100%",
                      background: "#3b82f6",
                      borderRadius: 2,
                      transition: "width 0.1s linear",
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* ── Tracking canvas ──────────────────────────────────────── */}
      {phase === "tracking" && (
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        />
      )}

      {/* ── Algorithm editor panel ───────────────────────────────── */}
      {showEditor && phase === "tracking" && (
        <div
          style={{
            position: "absolute",
            right: 16,
            top: 56,
            width: 380,
            maxHeight: "calc(100vh - 80px)",
            background: "rgba(15,15,25,0.95)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: 16,
            zIndex: 20,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            backdropFilter: "blur(12px)",
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 600, opacity: 0.9 }}>
            ✏️ Algorithm Editor
          </div>
          <div style={{ fontSize: 11, opacity: 0.45, lineHeight: 1.4 }}>
            Edit the gaze estimation function. Inputs: hEOG, vEOG, model.
            Must return {"{"} x, y {"}"} in range −1…1. Press Apply to update live.
          </div>
          <textarea
            value={algoCode}
            onChange={(e) => setAlgoCode(e.target.value)}
            spellCheck={false}
            style={{
              flex: 1,
              minHeight: 200,
              background: "rgba(0,0,0,0.4)",
              color: "#a5f3fc",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 8,
              padding: 10,
              fontFamily: "'Fira Code', 'JetBrains Mono', monospace",
              fontSize: 12,
              lineHeight: 1.5,
              resize: "vertical",
              outline: "none",
              tabSize: 2,
            }}
          />
          {algoError && (
            <div style={{ color: "#f87171", fontSize: 12 }}>{algoError}</div>
          )}
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={applyAlgorithm} style={btnStyle("#3b82f6")}>
              Apply
            </button>
            <button
              onClick={() => {
                setAlgoCode(DEFAULT_ALGORITHM);
                algoFnRef.current = compileAlgorithm(DEFAULT_ALGORITHM);
                setAlgoError(null);
              }}
              style={btnStyle("#6b7280")}
            >
              Reset
            </button>
          </div>
        </div>
      )}

      {/* ── Top bar ──────────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 48,
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          gap: 12,
          zIndex: 30,
          background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%)",
        }}
      >
        <button onClick={onExit} style={btnStyle("transparent", true)}>
          ← Exit
        </button>
        <span style={{ fontSize: 15, fontWeight: 600, opacity: 0.9 }}>
          Eye Track
        </span>
        <span style={{ fontSize: 12, opacity: 0.4, marginLeft: "auto" }}>
          {phase === "intro" ? "Ready" : phase === "calibrating" ? "Calibrating…" : "Live Tracking"}
        </span>
        {phase === "tracking" && (
          <>
            <button
              onClick={() => setShowEditor((v) => !v)}
              style={btnStyle(showEditor ? "#3b82f6" : "rgba(255,255,255,0.1)")}
            >
              {showEditor ? "Hide Editor" : "Edit Algorithm"}
            </button>
            <button
              onClick={() => {
                samplesRef.current = [];
                modelRef.current = null;
                gazeRef.current = { x: 0, y: 0 };
                setTargetIdx(0);
                setCountdown(3);
                setProgress(0);
                setPhase("calibrating");
              }}
              style={btnStyle("rgba(255,255,255,0.1)")}
            >
              Recalibrate
            </button>
          </>
        )}
      </div>

      {/* ── Keyboard hint ────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: 12,
          right: 16,
          fontSize: 11,
          opacity: 0.3,
          zIndex: 5,
          textAlign: "right",
          lineHeight: 1.6,
        }}
      >
        <span style={{ color: "#22c55e" }}>●</span> target (look here)
        {" · "}
        <span style={{ color: "#3b82f6" }}>●</span> predicted (model)
        <br />
        Esc exit · R recalibrate · E toggle editor
      </div>

      {/* ── Pulse animation ──────────────────────────────────────── */}
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.15); opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}

// ── Shared button style helper ──────────────────────────────────────────

function btnStyle(bg: string, ghost = false): React.CSSProperties {
  return {
    background: bg,
    color: "#fff",
    border: ghost ? "1px solid rgba(255,255,255,0.15)" : "none",
    borderRadius: 8,
    padding: "6px 14px",
    fontSize: 13,
    fontWeight: 500,
    cursor: "pointer",
    whiteSpace: "nowrap",
  };
}
