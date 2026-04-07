// ─────────────────────────────────────────────────────────────────────────────
// Blink detection & calibration utilities
//
// Detects blink artifacts from frontal EEG channels (Fp1/Fp2).
// Blinks produce large peak-to-peak deflections (100-500 µV) that are
// easily distinguishable from normal EEG activity (~20-80 µV p2p).
//
// Calibration uses robust statistics (median + MAD) so that involuntary
// blinks during baseline don't corrupt the profile.
// ─────────────────────────────────────────────────────────────────────────────

import type { EEGData } from "../../types";

// ── Calibration persistence ──────────────────────────────────────────────

export interface BlinkCalibration {
  baselineMedian: number;    // robust median of baseline p2p (µV)
  baselineCeiling: number;   // upper fence of baseline (µV)
  blinkMedian: number;       // median blink peak amplitude (µV)
  threshold: number;         // detection threshold (µV p2p)
  channels: number[];        // monitored channels [0,1] = Fp1,Fp2
  scrollAmount: number;      // pixels per scroll action
  timestamp: number;         // when calibration was performed (epoch ms)
  snr: number;               // signal-to-noise ratio (blink / baseline)
}

const STORAGE_KEY = "pieeg_blink_calibration";

export function loadCalibration(): BlinkCalibration | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const cal = JSON.parse(raw) as BlinkCalibration;
    // Accept old format missing new fields
    if (typeof cal.threshold !== "number" || cal.threshold <= 0) return null;
    return cal;
  } catch {
    return null;
  }
}

export function saveCalibration(cal: BlinkCalibration): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cal));
}

export function clearCalibration(): void {
  localStorage.removeItem(STORAGE_KEY);
}

// ── Statistics helpers ───────────────────────────────────────────────────

function median(arr: number[]): number {
  if (arr.length === 0) return 0;
  const s = [...arr].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}

/** Median Absolute Deviation — robust measure of spread. */
function mad(arr: number[]): number {
  const med = median(arr);
  const deviations = arr.map((v) => Math.abs(v - med));
  return median(deviations);
}

/** Remove outliers using the IQR fence method and return cleaned array. */
function removeOutliers(arr: number[], k = 2.5): number[] {
  const med = median(arr);
  const m = mad(arr);
  if (m === 0) return arr; // all identical values
  return arr.filter((v) => Math.abs(v - med) <= k * m * 1.4826);
}

// ── Signal quality check ─────────────────────────────────────────────────

export type SignalQuality = "good" | "weak" | "noisy" | "flat";

/**
 * Quick signal quality assessment for a single channel.
 * Reads recent samples and checks for flat, railed, or noisy signals.
 */
export function checkChannelQuality(
  eeg: EEGData,
  ch: number,
  windowSamples: number = 125, // 500 ms at 250 Hz
): { quality: SignalQuality; p2p: number } {
  const bufs = eeg.buffers.current;
  const wi = eeg.writeIndex.current;
  const sib = eeg.samplesInBuffer.current;
  const bs = eeg.bufferSize;

  if (ch >= bufs.length || sib < windowSamples) {
    return { quality: "flat", p2p: 0 };
  }

  const buf = bufs[ch];
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < windowSamples; i++) {
    const idx = ((wi - 1 - i) % bs + bs) % bs;
    const v = buf[idx];
    if (v < min) min = v;
    if (v > max) max = v;
    sum += v;
  }

  const p2p = max - min;

  // Flat: near-zero variance (disconnected electrode)
  if (p2p < 3) return { quality: "flat", p2p };

  // Railed / extremely noisy: p2p > 1000 µV sustained
  if (p2p > 1000) return { quality: "noisy", p2p };

  // Weak: some signal but very low
  if (p2p < 15) return { quality: "weak", p2p };

  return { quality: "good", p2p };
}

/**
 * Check quality of all requested channels. Returns quality per channel
 * and the best channel index.
 */
export function checkSignalQuality(
  eeg: EEGData,
  channels: number[],
): { perChannel: { ch: number; quality: SignalQuality; p2p: number }[]; bestCh: number } {
  const perChannel = channels.map((ch) => ({
    ch,
    ...checkChannelQuality(eeg, ch),
  }));

  // Prefer "good" channels; among those, pick highest p2p
  const good = perChannel.filter((c) => c.quality === "good");
  const pool = good.length > 0 ? good : perChannel;
  pool.sort((a, b) => b.p2p - a.p2p);
  return { perChannel, bestCh: pool[0]?.ch ?? channels[0] };
}

// ── Ring-buffer amplitude reading ────────────────────────────────────────

/**
 * Compute the peak-to-peak amplitude from the most recent `windowSamples`
 * for each channel. Returns the AVERAGE of the channels' p2p values
 * (instead of max, which lets a noisy channel dominate).
 */
export function readAmplitude(
  eeg: EEGData,
  channels: number[],
  windowSamples: number = 25, // 100 ms at 250 Hz
): number {
  const bufs = eeg.buffers.current;
  const wi = eeg.writeIndex.current;
  const sib = eeg.samplesInBuffer.current;
  const bs = eeg.bufferSize;

  if (sib < windowSamples) return 0;

  let total = 0;
  let count = 0;
  for (const ch of channels) {
    if (ch >= bufs.length) continue;
    const buf = bufs[ch];
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < windowSamples; i++) {
      const idx = ((wi - 1 - i) % bs + bs) % bs;
      const v = buf[idx];
      if (v < min) min = v;
      if (v > max) max = v;
    }
    total += max - min;
    count++;
  }
  return count > 0 ? total / count : 0;
}

/**
 * Per-channel p2p (for picking the better channel in calibration).
 */
export function readAmplitudePerChannel(
  eeg: EEGData,
  channels: number[],
  windowSamples: number = 25,
): number[] {
  const bufs = eeg.buffers.current;
  const wi = eeg.writeIndex.current;
  const sib = eeg.samplesInBuffer.current;
  const bs = eeg.bufferSize;
  const result: number[] = [];

  for (const ch of channels) {
    if (ch >= bufs.length || sib < windowSamples) {
      result.push(0);
      continue;
    }
    const buf = bufs[ch];
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < windowSamples; i++) {
      const idx = ((wi - 1 - i) % bs + bs) % bs;
      const v = buf[idx];
      if (v < min) min = v;
      if (v > max) max = v;
    }
    result.push(max - min);
  }
  return result;
}

// ── Peak finder (post-processing for calibration) ────────────────────────

export interface TimedReading {
  time: number; // performance.now()
  amp: number;  // µV peak-to-peak
}

/**
 * Find the N highest amplitude peaks with at least `minGapMs` between them.
 */
export function findPeaks(
  readings: TimedReading[],
  count: number = 5,
  minGapMs: number = 400,
): TimedReading[] {
  const sorted = [...readings].sort((a, b) => b.amp - a.amp);
  const peaks: TimedReading[] = [];
  const usedTimes: number[] = [];

  for (const r of sorted) {
    if (peaks.length >= count) break;
    const tooClose = usedTimes.some((t) => Math.abs(r.time - t) < minGapMs);
    if (!tooClose) {
      peaks.push(r);
      usedTimes.push(r.time);
    }
  }
  return peaks;
}

// ── Calibration computation ──────────────────────────────────────────────

export interface CalibrationError {
  code: "no_data" | "flat_signal" | "no_blinks" | "low_snr";
  message: string;
}

export function computeCalibration(
  baselineReadings: number[],
  blinkReadings: TimedReading[],
  channels: number[],
): BlinkCalibration | CalibrationError {
  if (baselineReadings.length < 10) {
    return { code: "no_data", message: "Not enough baseline data collected." };
  }

  // ── Robust baseline: remove outlier blinks using IQR ──
  const cleanBaseline = removeOutliers(baselineReadings, 2.5);
  if (cleanBaseline.length < 5) {
    return {
      code: "flat_signal",
      message: "Baseline signal is too erratic — check electrode contact on Fp1/Fp2.",
    };
  }

  const baselineMed = median(cleanBaseline);
  const baselineMAD = mad(cleanBaseline);

  // Upper fence: median + 3 * MAD * 1.4826 (≈ IQR-based upper bound)
  // With a minimum floor so very clean signals don't get a threshold of 0
  const baselineCeiling = Math.max(
    baselineMed + 3 * baselineMAD * 1.4826,
    baselineMed * 1.5,
    30, // absolute minimum µV — below this, most signals are just noise
  );

  // ── Check for flat baseline (disconnected electrode) ──
  if (baselineMed < 3) {
    return {
      code: "flat_signal",
      message: "Signal appears flat on Fp channels — electrodes may be disconnected.",
    };
  }

  // ── Find blink peaks ──
  const peaks = findPeaks(blinkReadings, 8, 400);
  // Filter to those above the robust baseline ceiling
  const valid = peaks.filter((p) => p.amp > baselineCeiling);
  if (valid.length < 2) {
    return {
      code: "no_blinks",
      message:
        "Could not detect enough distinct blinks above baseline. " +
        "Try blinking more forcefully, or check electrode contact on Fp1/Fp2.",
    };
  }

  const blinkAmps = valid.map((p) => p.amp);
  blinkAmps.sort((a, b) => a - b);
  const blinkMed = median(blinkAmps);

  // ── SNR check ──
  const snr = blinkMed / Math.max(baselineCeiling, 1);
  if (snr < 1.5) {
    return {
      code: "low_snr",
      message:
        "Blink amplitude is too close to baseline noise (SNR " +
        snr.toFixed(1) +
        "×). Try adjusting electrodes for better Fp contact.",
    };
  }

  // ── Threshold: weighted point between baseline ceiling and blink minimum ──
  // Use the lowest valid blink (not median) to capture gentle blinks.
  // Place threshold at 60% from ceiling toward the weakest blink to
  // favor sensitivity over specificity (false positives are cheap — the
  // duration gate in the detection loop filters noise).
  const weakestBlink = blinkAmps[0];
  const threshold = baselineCeiling + 0.4 * (weakestBlink - baselineCeiling);

  // Clamp: at least 20 µV above baseline, never above the weakest blink
  const clampedThreshold = Math.max(
    Math.min(threshold, weakestBlink * 0.9),
    baselineCeiling + 20,
  );

  return {
    baselineMedian: baselineMed,
    baselineCeiling,
    blinkMedian: blinkMed,
    threshold: clampedThreshold,
    channels,
    scrollAmount: 200,
    timestamp: Date.now(),
    snr,
  };
}

/** Type guard: is the result a successful calibration? */
export function isCalibration(
  result: BlinkCalibration | CalibrationError,
): result is BlinkCalibration {
  return "threshold" in result && !("code" in result);
}
