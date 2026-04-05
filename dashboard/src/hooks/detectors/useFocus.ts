// ─────────────────────────────────────────────────────────────────────────────
// useFocus — Cortical engagement / attentional index.
//
// Computes a normalised focus metric based on the ratio of high-frequency
// (Beta + Gamma) to low-frequency (Alpha + Theta + Delta) spectral power:
//
//   focus_raw = (β + γ) / (α + θ + δ + ε)     ε = 1e-6 for stability
//
// This ratio is well-established in quantitative EEG (qEEG) literature as
// a proxy for cortical arousal and sustained attention. Higher values
// indicate desynchronised, task-engaged cortical states; lower values
// indicate relaxed or drowsy states.
//
// Supports optional baseline calibration: during a short rest period the
// average focus ratio is captured, then subtracted so the normalised
// output reflects the user's *deviation from their personal baseline*.
//
// Output is clamped to [0, 1] and smoothed with exponential moving average.
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useEffect, useCallback } from "react";
import type { MutableRefObject } from "react";
import type { EEGData } from "../../types";
import { useBandPowers } from "./useBandPowers";
import type { BandPowersResult } from "./useBandPowers";

// ── Configuration ────────────────────────────────────────────────────────

export interface FocusConfig {
  /** Channels to analyse (default: all). */
  channels?: number[];
  /** FFT update rate in Hz (default 12). */
  updateHz?: number;
  /** EMA smoothing factor 0–1 (default 0.85). */
  smoothing?: number;
  /** Divisor to normalise raw ratio to 0–1 range (default 1.8). */
  scaleDivisor?: number;
}

// ── Result ───────────────────────────────────────────────────────────────

export interface FocusState {
  /** Normalised focus index 0 (relaxed) – 1 (highly focused). */
  focus: number;
  /** Raw (unsmoothed, uncalibrated) ratio value. */
  raw: number;
  /** Whether baseline calibration has been performed. */
  calibrated: boolean;
}

// ── Constants ────────────────────────────────────────────────────────────

const EPSILON = 1e-6;
const BASELINE_DURATION_MS = 3000;
const BASELINE_POLL_MS = 100;

// ── Hook ─────────────────────────────────────────────────────────────────

export function useFocus(eegData: EEGData, config: FocusConfig = {}) {
  const {
    channels,
    updateHz = 12,
    smoothing = 0.85,
    scaleDivisor = 1.8,
  } = config;

  const bpRef = useBandPowers(eegData, { updateHz, channels });

  const stateRef = useRef<FocusState>({
    focus: 0,
    raw: 0,
    calibrated: false,
  });

  const baselineRef = useRef(0);
  const smoothedRef = useRef(0);
  const calibratingRef = useRef(false);
  const calibrationPromiseRef = useRef<Promise<void> | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Periodic focus computation
  useEffect(() => {
    const intervalMs = Math.round(1000 / updateHz);

    timerRef.current = setInterval(() => {
      const bp = bpRef.current;
      if (bp.totalPower === 0) return;
      const abs = bp.absolute;

      const high = (abs.Beta ?? 0) + (abs.Gamma ?? 0);
      const low =
        (abs.Alpha ?? 0) + (abs.Theta ?? 0) + (abs.Delta ?? 0) + EPSILON;

      const raw = high / low;
      const adjusted = raw - baselineRef.current;
      const normalised = Math.max(0, Math.min(1, adjusted / scaleDivisor));

      smoothedRef.current =
        smoothing * smoothedRef.current + (1 - smoothing) * normalised;

      stateRef.current = {
        focus: smoothedRef.current,
        raw,
        calibrated: baselineRef.current > 0,
      };
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [bpRef, updateHz, smoothing, scaleDivisor]);

  // ── Calibration ──────────────────────────────────────────────────────

  const calibrate = useCallback((): Promise<void> => {
    if (calibratingRef.current) return calibrationPromiseRef.current!;
    calibratingRef.current = true;

    const p = new Promise<void>((resolve) => {
      const samples: number[] = [];
      const start = performance.now();

      const id = setInterval(() => {
        const bp = bpRef.current;
        if (bp.totalPower > 0) {
          const abs = bp.absolute;
          const high = (abs.Beta ?? 0) + (abs.Gamma ?? 0);
          const low =
            (abs.Alpha ?? 0) + (abs.Theta ?? 0) + (abs.Delta ?? 0) + EPSILON;
          samples.push(high / low);
        }

        if (performance.now() - start >= BASELINE_DURATION_MS) {
          clearInterval(id);
          if (samples.length > 0) {
            baselineRef.current =
              samples.reduce((a, b) => a + b, 0) / samples.length;
          }
          smoothedRef.current = 0;
          calibratingRef.current = false;
          calibrationPromiseRef.current = null;
          resolve();
        }
      }, BASELINE_POLL_MS);
    });
    calibrationPromiseRef.current = p;
    return p;
  }, [bpRef]);

  const resetCalibration = useCallback(() => {
    baselineRef.current = 0;
    smoothedRef.current = 0;
    stateRef.current = { focus: 0, raw: 0, calibrated: false };
  }, []);

  return {
    state: stateRef,
    calibrate,
    resetCalibration,
    /** True while calibration is in progress. */
    get calibrating() {
      return calibratingRef.current;
    },
  };
}
