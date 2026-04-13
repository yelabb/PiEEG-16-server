// ─────────────────────────────────────────────────────────────────────────────
// EyeTrack — EOG-based gaze estimation mini-game.
//
// Frontal EEG electrodes (Fp1 / Fp2) capture electro-oculographic (EOG)
// artifacts that encode horizontal and vertical eye position:
//
//   Horizontal ≈ Fp2 − Fp1   (differential — lateralised corneal dipole)
//   Vertical   ≈ (Fp1 + Fp2) / 2   (common-mode — both eyes move together)
//
// Scientific basis:
//   The corneal-retinal potential (~0.4–1.0 mV) creates a dipole whose
//   projection onto frontal electrodes shifts proportionally with gaze angle.
//   Documented accuracy: for sufficient for quadrant-level tracking.
//   https://pubmed.ncbi.nlm.nih.gov/20421675/
// Model: Polynomial ridge regression (degree 2)
//   Features: [1, h, v, h², h·v, v²]  →  6 coefficients per axis
//   Ridge regularisation (λ=0.01) prevents overfitting with few samples.
//   Online adaptive learning continuously collects new (EOG, target) pairs
//   during tracking and periodically refits — accuracy improves over time.
//
// Users can toggle learning on/off, save/load models to localStorage,
// and edit the gaze-estimation algorithm live.
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

/** Polynomial ridge regression model for gaze estimation. */
interface GazeModel {
  weightsX: number[]; // [bias, h, v, h², h·v, v²] → predicts screen X
  weightsY: number[]; // [bias, h, v, h², h·v, v²] → predicts screen Y
  hMean: number; // mean hEOG (normalisation center)
  vMean: number; // mean vEOG
  hStd: number; // std hEOG (normalisation scale)
  vStd: number; // std vEOG
  sampleCount: number; // training samples used
}

// ── Constants ────────────────────────────────────────────────────────────

const TARGETS: { label: TargetLabel; x: number; y: number; instruction: string }[] = [
  { label: "center", x: 0, y: 0, instruction: "Look at the center dot" },
  { label: "up", x: 0, y: -0.7, instruction: "Look UP at the dot" },
  { label: "down", x: 0, y: 0.7, instruction: "Look DOWN at the dot" },
  { label: "left", x: -0.7, y: 0, instruction: "Look LEFT at the dot" },
  { label: "right", x: 0.7, y: 0, instruction: "Look RIGHT at the dot" },
];

const CALIBRATION_DURATION_MS = 2500;
const SETTLE_DELAY_MS = 500;
const CH_FP1 = 0;
const CH_FP2 = 1;
const SMOOTHING = 0.15;
const DOT_RADIUS = 14;
const TARGET_RADIUS = 32;
const WINDOW_SAMPLES = Math.round(SAMPLE_RATE * 0.12);
const TARGET_MOVE_MS = 3000;
const ERROR_HISTORY_LEN = 60;
const RIDGE_LAMBDA = 0.01;
const ONLINE_COLLECT_EVERY = 15; // collect a training pair every N frames (~4 Hz at 60fps)
const ONLINE_REFIT_EVERY = 12; // refit model after N new online samples
const MAX_SAMPLES = 500; // cap training buffer — older samples evicted
const STORAGE_KEY = "pieeg-eyetrack-v1";

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
    sumH += v2 - v1;
    sumV += (v1 + v2) * 0.5;
  }
  return {
    hEOG: sumH / windowSamples,
    vEOG: sumV / windowSamples,
  };
}

// ── Ridge regression solver (Gaussian elimination, 6×6) ─────────────────

function solveRidge(X: number[][], y: number[], lambda: number): number[] {
  const p = X[0].length;
  const n = X.length;

  // Build normal equations: (X'X + λI) w = X'y
  const A: number[][] = [];
  const b: number[] = new Array(p).fill(0);
  for (let i = 0; i < p; i++) {
    A[i] = new Array(p).fill(0);
    for (let j = 0; j < p; j++) {
      let s = 0;
      for (let k = 0; k < n; k++) s += X[k][i] * X[k][j];
      A[i][j] = s + (i === j ? lambda : 0);
    }
    let s = 0;
    for (let k = 0; k < n; k++) s += X[k][i] * y[k];
    b[i] = s;
  }

  // Gaussian elimination with partial pivoting
  for (let col = 0; col < p; col++) {
    let maxRow = col;
    let maxVal = Math.abs(A[col][col]);
    for (let row = col + 1; row < p; row++) {
      if (Math.abs(A[row][col]) > maxVal) {
        maxVal = Math.abs(A[row][col]);
        maxRow = row;
      }
    }
    [A[col], A[maxRow]] = [A[maxRow], A[col]];
    [b[col], b[maxRow]] = [b[maxRow], b[col]];

    for (let row = col + 1; row < p; row++) {
      const f = A[row][col] / A[col][col];
      for (let j = col; j < p; j++) A[row][j] -= f * A[col][j];
      b[row] -= f * b[col];
    }
  }

  // Back substitution
  const w = new Array(p).fill(0);
  for (let i = p - 1; i >= 0; i--) {
    let s = b[i];
    for (let j = i + 1; j < p; j++) s -= A[i][j] * w[j];
    w[i] = s / (A[i][i] || 1e-12);
  }
  return w;
}

// ── Build polynomial ridge regression model ─────────────────────────────

function buildModel(samples: CalibrationSample[]): GazeModel {
  const n = samples.length;
  if (n === 0) {
    return {
      weightsX: [0, 1, 0, 0, 0, 0],
      weightsY: [0, 0, 1, 0, 0, 0],
      hMean: 0, vMean: 0, hStd: 1, vStd: 1, sampleCount: 0,
    };
  }

  // Compute mean and std for normalisation
  let hSum = 0, vSum = 0;
  for (const s of samples) { hSum += s.hEOG; vSum += s.vEOG; }
  const hMean = hSum / n;
  const vMean = vSum / n;

  let hVar = 0, vVar = 0;
  for (const s of samples) {
    hVar += (s.hEOG - hMean) ** 2;
    vVar += (s.vEOG - vMean) ** 2;
  }
  const hStd = Math.max(1e-6, Math.sqrt(hVar / n));
  const vStd = Math.max(1e-6, Math.sqrt(vVar / n));

  // Build feature matrix: [1, h, v, h², h·v, v²]
  const X: number[][] = [];
  const yX: number[] = [];
  const yY: number[] = [];
  for (const s of samples) {
    const h = (s.hEOG - hMean) / hStd;
    const v = (s.vEOG - vMean) / vStd;
    X.push([1, h, v, h * h, h * v, v * v]);
    yX.push(s.x);
    yY.push(s.y);
  }

  return {
    weightsX: solveRidge(X, yX, RIDGE_LAMBDA),
    weightsY: solveRidge(X, yY, RIDGE_LAMBDA),
    hMean, vMean, hStd, vStd,
    sampleCount: n,
  };
}

// ── Default user-editable algorithm ─────────────────────────────────────

const DEFAULT_ALGORITHM = `// Polynomial ridge regression — edit me!
// model.weightsX/Y = [bias, h, v, h², h·v, v²]
// model.hMean/vMean/hStd/vStd = normalisation stats

const h = (hEOG - model.hMean) / model.hStd;
const v = (vEOG - model.vMean) / model.vStd;
const feat = [1, h, v, h*h, h*v, v*v];

let x = 0, y = 0;
for (let i = 0; i < feat.length; i++) {
  x += feat[i] * model.weightsX[i];
  y += feat[i] * model.weightsY[i];
}

return {
  x: Math.max(-1, Math.min(1, x)),
  y: Math.max(-1, Math.min(1, y)),
};`;

// ── Compile user algorithm safely ───────────────────────────────────────

function compileAlgorithm(code: string): ((hEOG: number, vEOG: number, model: GazeModel) => { x: number; y: number }) | null {
  try {
    const fn = new Function("hEOG", "vEOG", "model", "Math", code) as (
      hEOG: number, vEOG: number, model: GazeModel, math: typeof Math,
    ) => { x: number; y: number };
    const testModel: GazeModel = {
      weightsX: [0, 1, 0, 0, 0, 0], weightsY: [0, 0, 1, 0, 0, 0],
      hMean: 0, vMean: 0, hStd: 1, vStd: 1, sampleCount: 0,
    };
    const test = fn(0, 0, testModel, Math);
    if (typeof test?.x !== "number" || typeof test?.y !== "number") return null;
    return (h, v, m) => fn(h, v, m, Math);
  } catch {
    return null;
  }
}

// ── localStorage persistence ────────────────────────────────────────────

interface SavedState {
  samples: CalibrationSample[];
  model: GazeModel;
  savedAt: number;
}

function saveToStorage(samples: CalibrationSample[], model: GazeModel): void {
  try {
    const data: SavedState = { samples, model, savedAt: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch { /* quota exceeded — ignore */ }
}

function loadFromStorage(): SavedState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as SavedState;
    if (!data.model?.weightsX || !data.samples?.length) return null;
    return data;
  } catch {
    return null;
  }
}

function clearStorage(): void {
  try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
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
  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState(3);

  // ── Model state ────────────────────────────────────────────────────
  const modelRef = useRef<GazeModel | null>(null);
  const samplesRef = useRef<CalibrationSample[]>([]);
  const collectRef = useRef<{ hArr: number[]; vArr: number[] }>({ hArr: [], vArr: [] });

  // ── Tracking state (refs for RAF) ─────────────────────────────────
  const gazeRef = useRef({ x: 0, y: 0 });
  const rawRef = useRef({ x: 0, y: 0 });

  // ── Validation target ─────────────────────────────────────────────
  const validationRef = useRef({ x: 0, y: 0, lastMove: 0 });
  const errorHistoryRef = useRef<number[]>([]);
  const avgErrorRef = useRef(0);

  // ── Online learning ───────────────────────────────────────────────
  const [learning, setLearning] = useState(true);
  const learningRef = useRef(true); // mirror for RAF
  const onlineFrameRef = useRef(0);
  const onlineNewRef = useRef(0);
  const [sampleCount, setSampleCount] = useState(0);

  // ── Save/load ─────────────────────────────────────────────────────
  const [hasSaved, setHasSaved] = useState(false);
  const savedModelExists = useRef(!!loadFromStorage());

  // ── Algorithm editor ──────────────────────────────────────────────
  const [showEditor, setShowEditor] = useState(false);
  const [algoCode, setAlgoCode] = useState(DEFAULT_ALGORITHM);
  const [algoError, setAlgoError] = useState<string | null>(null);
  const algoFnRef = useRef<ReturnType<typeof compileAlgorithm>>(null);

  // Keep learningRef in sync
  useEffect(() => { learningRef.current = learning; }, [learning]);

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
        const { hArr, vArr } = collectRef.current;
        if (hArr.length > 0) {
          const meanH = hArr.reduce((a, b) => a + b, 0) / hArr.length;
          const meanV = vArr.reduce((a, b) => a + b, 0) / vArr.length;
          samplesRef.current.push({ hEOG: meanH, vEOG: meanV, x: target.x, y: target.y });
        }

        if (targetIdx < TARGETS.length - 1) {
          setTargetIdx((i) => i + 1);
        } else {
          modelRef.current = buildModel(samplesRef.current);
          setSampleCount(samplesRef.current.length);
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

    validationRef.current = { x: 0, y: 0, lastMove: performance.now() };
    errorHistoryRef.current = [];
    onlineFrameRef.current = 0;
    onlineNewRef.current = 0;

    // Cache layout rect — only update on resize (avoids per-frame layout recalc)
    let cw = canvas.clientWidth;
    let ch = canvas.clientHeight;
    const ro = new ResizeObserver((entries) => {
      const e = entries[0];
      if (e) { cw = e.contentRect.width; ch = e.contentRect.height; }
    });
    ro.observe(canvas);

    const render = () => {
      const w = cw;
      const h = ch;
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

        gazeRef.current.x += SMOOTHING * (raw.x - gazeRef.current.x);
        gazeRef.current.y += SMOOTHING * (raw.y - gazeRef.current.y);

        // ── Online adaptive learning ─────────────────────────────
        if (learningRef.current) {
          onlineFrameRef.current++;
          if (onlineFrameRef.current % ONLINE_COLLECT_EVERY === 0) {
            const vt = validationRef.current;
            samplesRef.current.push({
              hEOG: feat.hEOG, vEOG: feat.vEOG,
              x: vt.x, y: vt.y,
            });
            // Evict oldest samples to bound memory + refit cost
            if (samplesRef.current.length > MAX_SAMPLES) {
              samplesRef.current = samplesRef.current.slice(-MAX_SAMPLES);
            }
            onlineNewRef.current++;

            if (onlineNewRef.current >= ONLINE_REFIT_EVERY) {
              modelRef.current = buildModel(samplesRef.current);
              onlineNewRef.current = 0;
              // Throttled React state update for UI counter
              setSampleCount(samplesRef.current.length);
            }
          }
        }
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

      // ── Validation target (green — "look here") ──────────────────
      const vt = validationRef.current;
      const vtx = cx + vt.x * rangeX;
      const vty = cy + vt.y * rangeY;

      // Soft glow via concentric transparent circles (avoids gradient alloc)
      ctx.fillStyle = "rgba(34,197,94,0.08)";
      ctx.beginPath();
      ctx.arc(vtx, vty, TARGET_RADIUS * 1.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(34,197,94,0.15)";
      ctx.beginPath();
      ctx.arc(vtx, vty, TARGET_RADIUS * 1.0, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "#22c55e";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(vtx, vty, TARGET_RADIUS, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = "#22c55e";
      ctx.beginPath();
      ctx.arc(vtx, vty, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(34,197,94,0.7)";
      ctx.font = "11px monospace";
      ctx.textAlign = "center";
      ctx.fillText("LOOK HERE", vtx, vty + TARGET_RADIUS + 16);

      // ── Predicted gaze dot (blue) ─────────────────────────────────
      const gx = cx + gazeRef.current.x * rangeX;
      const gy = cy + gazeRef.current.y * rangeY;

      const errDist = Math.hypot(gazeRef.current.x - vt.x, gazeRef.current.y - vt.y);
      const errHist = errorHistoryRef.current;
      errHist.push(errDist);
      if (errHist.length > ERROR_HISTORY_LEN) errHist.shift();
      // Incremental-style average (no closure alloc)
      let errSum = 0;
      for (let i = 0; i < errHist.length; i++) errSum += errHist[i];
      avgErrorRef.current = errSum / errHist.length;
      const accuracy = Math.max(0, (1 - avgErrorRef.current / 1.4) * 100);

      ctx.strokeStyle = errDist < 0.3 ? "rgba(255,255,80,0.35)" : errDist < 0.6 ? "rgba(255,180,80,0.35)" : "rgba(255,80,80,0.35)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(gx, gy);
      ctx.lineTo(vtx, vty);
      ctx.stroke();
      ctx.setLineDash([]);

      // Soft glow via concentric circles (avoids gradient alloc)
      ctx.fillStyle = "rgba(59,130,246,0.06)";
      ctx.beginPath();
      ctx.arc(gx, gy, DOT_RADIUS * 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(59,130,246,0.18)";
      ctx.beginPath();
      ctx.arc(gx, gy, DOT_RADIUS * 1.8, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#3b82f6";
      ctx.beginPath();
      ctx.arc(gx, gy, DOT_RADIUS, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(255,255,255,0.6)";
      ctx.beginPath();
      ctx.arc(gx - 3, gy - 3, DOT_RADIUS * 0.35, 0, Math.PI * 2);
      ctx.fill();

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
        12, h - 68,
      );
      ctx.fillText(
        `target:    (${vt.x.toFixed(2)}, ${vt.y.toFixed(2)})`,
        12, h - 52,
      );
      ctx.fillText(
        `error: ${errDist.toFixed(3)}   accuracy: ${accuracy.toFixed(1)}%`,
        12, h - 36,
      );
      ctx.fillText(
        `samples: ${samplesRef.current.length}   model: poly2+ridge   learning: ${learningRef.current ? "ON" : "OFF"}`,
        12, h - 20,
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

      // ── Learning indicator (top-right, below accuracy) ────────────
      if (learningRef.current) {
        ctx.fillStyle = "#f59e0b";
        ctx.font = "11px monospace";
        ctx.textAlign = "right";
        ctx.fillText("● LEARNING", w - 16, 118);
      }

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [phase, eegData]);

  // ── Keyboard shortcuts ────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showEditor) setShowEditor(false);
        else onExit();
      }
      if (e.key === "r" || e.key === "R") {
        samplesRef.current = [];
        modelRef.current = null;
        gazeRef.current = { x: 0, y: 0 };
        setTargetIdx(0);
        setCountdown(3);
        setProgress(0);
        setSampleCount(0);
        setPhase("calibrating");
      }
      if (e.key === "e" || e.key === "E") setShowEditor((v) => !v);
      if (e.key === "l" || e.key === "L") setLearning((v) => !v);
      if (e.key === "s" || e.key === "S") {
        if (modelRef.current) {
          saveToStorage(samplesRef.current, modelRef.current);
          setHasSaved(true);
          setTimeout(() => setHasSaved(false), 2000);
        }
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

  // ── Save / Load handlers ──────────────────────────────────────────
  const handleSave = useCallback(() => {
    if (!modelRef.current) return;
    saveToStorage(samplesRef.current, modelRef.current);
    setHasSaved(true);
    setTimeout(() => setHasSaved(false), 2000);
  }, []);

  const handleLoad = useCallback(() => {
    const saved = loadFromStorage();
    if (!saved) return;
    samplesRef.current = saved.samples;
    modelRef.current = saved.model;
    setSampleCount(saved.samples.length);
    gazeRef.current = { x: 0, y: 0 };
    setPhase("tracking");
  }, []);

  const handleClearSaved = useCallback(() => {
    clearStorage();
    savedModelExists.current = false;
  }, []);

  // ═══════════════════════════════════════════════════════════════════
  // Render
  // ═══════════════════════════════════════════════════════════════════

  const target = TARGETS[targetIdx];
  const saved = loadFromStorage();

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
              maxWidth: 500,
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
              Estimate where you're looking using EOG signals from Fp1 &amp; Fp2.
              Based on the corneal-retinal dipole (~0.4–1.0 mV) measured by
              frontal electrodes — well-documented in BCI literature for ~5–10° accuracy.
            </p>
            <div
              style={{
                fontSize: 13,
                opacity: 0.45,
                lineHeight: 1.8,
                textAlign: "left",
                margin: "0 auto 20px",
                maxWidth: 400,
              }}
            >
              <strong style={{ opacity: 1, color: "#3b82f6" }}>How it works:</strong>
              <br />
              1. Calibrate on <strong>5 fixation targets</strong> (center, up, down, left, right)
              <br />
              2. A <strong>polynomial ridge regression</strong> model maps EOG → gaze
              <br />
              3. Follow the <span style={{ color: "#22c55e" }}>green target</span> — the model <strong>learns continuously</strong>
              <br />
              4. The <span style={{ color: "#3b82f6" }}>blue dot</span> shows the prediction — watch accuracy improve
              <br />
              5. Toggle learning on/off, <strong>save your model</strong>, or edit the algorithm live
            </div>
            <p style={{ fontSize: 12, opacity: 0.35, margin: "0 0 20px" }}>
              Tip: keep your head still — only move your eyes. The model improves with more data.
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              <button
                onClick={() => setPhase("calibrating")}
                style={{
                  background: "#3b82f6",
                  color: "#fff",
                  border: "none",
                  borderRadius: 10,
                  padding: "10px 28px",
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Start Calibration →
              </button>
              {saved && (
                <button
                  onClick={handleLoad}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 10,
                    padding: "10px 20px",
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  Load Saved ({saved.samples.length} samples)
                </button>
              )}
            </div>
            {saved && (
              <div style={{ fontSize: 11, opacity: 0.3, marginTop: 10 }}>
                Saved {new Date(saved.savedAt).toLocaleDateString()} ·{" "}
                <span
                  onClick={handleClearSaved}
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  delete
                </span>
              </div>
            )}
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
            Polynomial ridge regression. Inputs: hEOG, vEOG, model.
            model.weightsX/Y = [bias, h, v, h², h·v, v²].
            Must return {"{"} x, y {"}"} in range −1…1.
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
          gap: 8,
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

        {phase === "tracking" && (
          <span style={{ fontSize: 11, opacity: 0.35, marginLeft: 4 }}>
            {sampleCount} samples
          </span>
        )}

        <span style={{ flex: 1 }} />

        <span style={{ fontSize: 12, opacity: 0.4 }}>
          {phase === "intro" ? "Ready" : phase === "calibrating" ? "Calibrating…" : "Live Tracking"}
        </span>

        {phase === "tracking" && (
          <>
            <button
              onClick={() => setLearning((v) => !v)}
              style={btnStyle(learning ? "#f59e0b" : "rgba(255,255,255,0.1)")}
            >
              {learning ? "⏸ Pause Learning" : "▶ Resume Learning"}
            </button>
            <button onClick={handleSave} style={btnStyle("rgba(255,255,255,0.1)")}>
              {hasSaved ? "✓ Saved" : "💾 Save"}
            </button>
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
                setSampleCount(0);
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
        Esc exit · R recalibrate · E editor · L toggle learning · S save
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
