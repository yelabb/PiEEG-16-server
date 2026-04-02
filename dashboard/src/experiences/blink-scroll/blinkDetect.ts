// ─────────────────────────────────────────────────────────────────────────────
// Blink detection & calibration utilities
//
// Detects blink artifacts from frontal EEG channels (Fp1/Fp2).
// Blinks produce large peak-to-peak deflections (100-500 µV) that are
// easily distinguishable from normal EEG activity (~20-80 µV p2p).
// ─────────────────────────────────────────────────────────────────────────────

import type { EEGData } from "../../types";

// ── Calibration persistence ──────────────────────────────────────────────

export interface BlinkCalibration {
  baselineCeiling: number;   // p95 of baseline peak-to-peak (µV)
  blinkMedian: number;       // median blink peak amplitude (µV)
  threshold: number;         // detection threshold (µV p2p)
  channels: number[];        // monitored channels [0,1] = Fp1,Fp2
  scrollAmount: number;      // pixels per scroll action
  timestamp: number;         // when calibration was performed (epoch ms)
}

const STORAGE_KEY = "pieeg_blink_calibration";

export function loadCalibration(): BlinkCalibration | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as BlinkCalibration;
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

// ── Ring-buffer amplitude reading ────────────────────────────────────────

/**
 * Compute the peak-to-peak amplitude from the most recent `windowSamples`
 * across the given channels. Returns the maximum p2p value.
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

  let maxPP = 0;
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
    const pp = max - min;
    if (pp > maxPP) maxPP = pp;
  }
  return maxPP;
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
): number[] {
  const sorted = [...readings].sort((a, b) => b.amp - a.amp);
  const peaks: number[] = [];
  const usedTimes: number[] = [];

  for (const r of sorted) {
    if (peaks.length >= count) break;
    const tooClose = usedTimes.some((t) => Math.abs(r.time - t) < minGapMs);
    if (!tooClose) {
      peaks.push(r.amp);
      usedTimes.push(r.time);
    }
  }
  return peaks;
}

// ── Calibration computation ──────────────────────────────────────────────

export function computeCalibration(
  baselineReadings: number[],
  blinkReadings: TimedReading[],
  channels: number[],
): BlinkCalibration | null {
  if (baselineReadings.length < 10) return null;

  // p95 of baseline p2p
  const sorted = [...baselineReadings].sort((a, b) => a - b);
  const p95i = Math.floor(sorted.length * 0.95);
  const baselineCeiling = sorted[Math.min(p95i, sorted.length - 1)];

  // Find top 5 peaks from blink phase
  const peaks = findPeaks(blinkReadings, 5, 400);
  // Filter to those clearly above baseline
  const valid = peaks.filter((p) => p > baselineCeiling * 1.3);
  if (valid.length < 2) return null;

  valid.sort((a, b) => a - b);
  const median = valid[Math.floor(valid.length / 2)];

  // Threshold: 50% of the way from baseline ceiling to blink median
  const threshold = baselineCeiling + 0.5 * (median - baselineCeiling);

  return {
    baselineCeiling,
    blinkMedian: median,
    threshold,
    channels,
    scrollAmount: 200,
    timestamp: Date.now(),
  };
}
