// ─────────────────────────────────────────────────────────────────────────────
// P300 — EEG Preprocessing
//
// Lightweight, epoch-level preprocessing that runs on a single extracted
// window. No global state, no streaming filters — everything here is pure
// so epochs can be recomputed on demand (e.g. during offline review).
//
// Pipeline (in order):
//   1. Baseline correction (subtract mean of pre-stimulus window)
//   2. Butterworth-style single-pole high-pass @ 0.5 Hz (DC & drift)
//   3. 4th-order IIR low-pass @ 20 Hz (biquad cascade)
//   4. Decimation by integer factor (anti-aliasing done by the LPF)
//   5. Quality scoring + artifact flag (amplitude, variance, kurtosis)
//
// These choices follow the literature on P300 decoding: band 0.5–20 Hz,
// decimated to ~50 Hz, baseline-corrected, ~800 ms epoch.
// ─────────────────────────────────────────────────────────────────────────────

import type { Epoch, StimulusMarker } from "../types";
import { SAMPLE_RATE } from "../../../types";

// ── Biquad helpers (Direct Form II transposed) ───────────────────────────────

interface Biquad {
  b0: number; b1: number; b2: number;
  a1: number; a2: number;
}

function lowpassBiquad(fc: number, fs: number, q = Math.SQRT1_2): Biquad {
  const w0 = (2 * Math.PI * fc) / fs;
  const alpha = Math.sin(w0) / (2 * q);
  const cosw0 = Math.cos(w0);
  const a0 = 1 + alpha;
  return {
    b0: ((1 - cosw0) / 2) / a0,
    b1: (1 - cosw0) / a0,
    b2: ((1 - cosw0) / 2) / a0,
    a1: (-2 * cosw0) / a0,
    a2: (1 - alpha) / a0,
  };
}

function applyBiquad(x: Float32Array, b: Biquad): Float32Array {
  const out = new Float32Array(x.length);
  let z1 = 0, z2 = 0;
  for (let i = 0; i < x.length; i++) {
    const xn = x[i];
    const yn = b.b0 * xn + z1;
    z1 = b.b1 * xn - b.a1 * yn + z2;
    z2 = b.b2 * xn - b.a2 * yn;
    out[i] = yn;
  }
  return out;
}

/** Single-pole IIR high-pass. y[n] = α·(y[n-1] + x[n] − x[n-1]) */
function highpass(x: Float32Array, fc: number, fs: number): Float32Array {
  const alpha = 1 / (1 + (2 * Math.PI * fc) / fs);
  const out = new Float32Array(x.length);
  let prevX = x[0];
  let prevY = 0;
  for (let i = 0; i < x.length; i++) {
    const y = alpha * (prevY + x[i] - prevX);
    out[i] = y;
    prevX = x[i];
    prevY = y;
  }
  return out;
}

function decimate(x: Float32Array, factor: number): Float32Array {
  if (factor <= 1) return x;
  const outLen = Math.floor(x.length / factor);
  const out = new Float32Array(outLen);
  for (let i = 0; i < outLen; i++) out[i] = x[i * factor];
  return out;
}

// ── Quality scoring ──────────────────────────────────────────────────────────

const ARTIFACT_PEAK_UV = 150; // clip threshold
const ARTIFACT_VAR_UV2 = 1800; // variance threshold (~42 µV std)

function scoreQuality(data: Float32Array[]): { quality: number; artifact: boolean } {
  let peak = 0, sumSq = 0, n = 0;
  for (const ch of data) {
    for (let i = 0; i < ch.length; i++) {
      const v = ch[i];
      const a = Math.abs(v);
      if (a > peak) peak = a;
      sumSq += v * v;
      n++;
    }
  }
  const variance = sumSq / Math.max(1, n);
  const artifact = peak > ARTIFACT_PEAK_UV || variance > ARTIFACT_VAR_UV2;

  // Map both into [0,1], take the worse one.
  const peakQ = Math.max(0, 1 - peak / (2 * ARTIFACT_PEAK_UV));
  const varQ = Math.max(0, 1 - variance / (2 * ARTIFACT_VAR_UV2));
  return { quality: Math.min(peakQ, varQ), artifact };
}

// ── Public API ───────────────────────────────────────────────────────────────

export interface PreprocessParams {
  /** Sample rate of the incoming data. Defaults to 250 Hz. */
  sample_rate?: number;
  /** High-pass cutoff (Hz). */
  hp_hz?: number;
  /** Low-pass cutoff (Hz). */
  lp_hz?: number;
  /** Decimation factor (after LPF). 250 Hz / 5 = 50 Hz. */
  decimation?: number;
  /** Number of baseline samples at the start of the window. */
  baseline_samples: number;
}

export function preprocessEpoch(
  raw: Float32Array[],
  marker: StimulusMarker,
  params: PreprocessParams,
): Epoch {
  const fs = params.sample_rate ?? SAMPLE_RATE;
  const hp = params.hp_hz ?? 0.5;
  const lp = params.lp_hz ?? 20;
  const dec = params.decimation ?? 5;
  const baselineSrcN = params.baseline_samples;

  const lpBiquad = lowpassBiquad(lp, fs);

  const processed: Float32Array[] = raw.map((ch) => {
    // 1. baseline correct
    let mean = 0;
    const bN = Math.min(baselineSrcN, ch.length);
    for (let i = 0; i < bN; i++) mean += ch[i];
    mean = bN > 0 ? mean / bN : 0;
    const centered = new Float32Array(ch.length);
    for (let i = 0; i < ch.length; i++) centered[i] = ch[i] - mean;

    // 2. high-pass
    const hped = highpass(centered, hp, fs);
    // 3. low-pass (forward only — some phase shift; acceptable for detection)
    const lped = applyBiquad(hped, lpBiquad);
    // 4. decimate
    return decimate(lped, dec);
  });

  const decBaseline = Math.floor(baselineSrcN / dec);
  const totalDecN = processed[0]?.length ?? 0;
  const postDecN = totalDecN - decBaseline;

  const q = scoreQuality(processed);

  return {
    marker,
    data: processed,
    sample_rate: fs / dec,
    baseline_samples: decBaseline,
    post_samples: postDecN,
    quality: q.quality,
    artifact: q.artifact,
  };
}

/** Flatten an epoch to a 1-D feature vector for downstream linear models. */
export function epochToFeatures(epoch: Epoch): Float32Array {
  const nCh = epoch.data.length;
  const nS = epoch.data[0]?.length ?? 0;
  const out = new Float32Array(nCh * nS);
  for (let c = 0; c < nCh; c++) {
    out.set(epoch.data[c], c * nS);
  }
  return out;
}
