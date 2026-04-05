// ─────────────────────────────────────────────────────────────────────────────
// useRelax — Posterior alpha-dominance relaxation index.
//
// Measures relaxation via alpha-band (8–13 Hz) dominance in the EEG
// power spectrum. Alpha oscillations originate primarily in parieto-
// occipital cortex and are the hallmark of wakeful relaxation with
// eyes closed (Berger, 1929). Their relative power inversely correlates
// with cortical activation.
//
// Two complementary metrics are provided:
//
//   1. Alpha Relative Power  = α / (δ + θ + α + β + γ)
//      Simple proportion of total power occupied by the alpha band.
//
//   2. Theta-Beta Ratio (TBR) = θ / (β + ε)
//      Elevated TBR is associated with reduced attentional demand and
//      default-mode network activity. Included as a secondary marker.
//
// Output is a composite relaxation index (0–1) with configurable
// weighting between the two metrics, smoothed via EMA.
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useEffect, useCallback } from "react";
import type { EEGData } from "../../types";
import { useBandPowers } from "./useBandPowers";

// ── Configuration ────────────────────────────────────────────────────────

export interface RelaxConfig {
  /** Channels to analyse (default: all). */
  channels?: number[];
  /** FFT update rate in Hz (default 12). */
  updateHz?: number;
  /** EMA smoothing factor 0–1 (default 0.85). */
  smoothing?: number;
  /**
   * Weight of alpha relative power in the composite index (default 0.7).
   * The remaining weight goes to the TBR component.
   */
  alphaWeight?: number;
  /**
   * Expected ceiling for theta/beta ratio before normalisation.
   * Higher values make the TBR component less sensitive (default 3.0).
   */
  tbrCeiling?: number;
}

// ── Result ───────────────────────────────────────────────────────────────

export interface RelaxState {
  /** Composite relaxation index 0 (alert) – 1 (deeply relaxed). */
  relaxation: number;
  /** Alpha relative power (0–1). */
  alphaRelative: number;
  /** Theta-beta ratio (raw, unbounded). */
  thetaBetaRatio: number;
  /** Whether baseline calibration has been performed. */
  calibrated: boolean;
}

// ── Constants ────────────────────────────────────────────────────────────

const EPSILON = 1e-6;
const BASELINE_DURATION_MS = 3000;
const BASELINE_POLL_MS = 100;

// ── Hook ─────────────────────────────────────────────────────────────────

export function useRelax(eegData: EEGData, config: RelaxConfig = {}) {
  const {
    channels,
    updateHz = 12,
    smoothing = 0.85,
    alphaWeight = 0.7,
    tbrCeiling = 3.0,
  } = config;

  const bpRef = useBandPowers(eegData, { updateHz, channels });

  const stateRef = useRef<RelaxState>({
    relaxation: 0,
    alphaRelative: 0,
    thetaBetaRatio: 0,
    calibrated: false,
  });

  const baselineRef = useRef(0); // baseline composite to subtract
  const smoothedRef = useRef(0);
  const calibratingRef = useRef(false);
  const calibrationPromiseRef = useRef<Promise<void> | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const intervalMs = Math.round(1000 / updateHz);

    timerRef.current = setInterval(() => {
      const bp = bpRef.current;
      if (bp.totalPower === 0) return;
      const abs = bp.absolute;

      const delta = abs.Delta ?? 0;
      const theta = abs.Theta ?? 0;
      const alpha = abs.Alpha ?? 0;
      const beta = abs.Beta ?? 0;
      const gamma = abs.Gamma ?? 0;

      const total = delta + theta + alpha + beta + gamma + EPSILON;

      // Metric 1: alpha relative power
      const alphaRel = alpha / total;

      // Metric 2: theta-beta ratio, normalised to 0–1
      const tbr = theta / (beta + EPSILON);
      const tbrNorm = Math.min(1, tbr / tbrCeiling);

      // Composite
      const tbrWeight = 1 - alphaWeight;
      let composite =
        alphaWeight * alphaRel + tbrWeight * tbrNorm;

      // Subtract baseline if calibrated
      composite = composite - baselineRef.current;
      composite = Math.max(0, Math.min(1, composite));

      // Smooth
      smoothedRef.current =
        smoothing * smoothedRef.current + (1 - smoothing) * composite;

      stateRef.current = {
        relaxation: smoothedRef.current,
        alphaRelative: alphaRel,
        thetaBetaRatio: tbr,
        calibrated: baselineRef.current > 0,
      };
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [bpRef, updateHz, smoothing, alphaWeight, tbrCeiling]);

  // ── Calibration (capture "alert" baseline to subtract) ─────────────

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
          const total =
            (abs.Delta ?? 0) +
            (abs.Theta ?? 0) +
            (abs.Alpha ?? 0) +
            (abs.Beta ?? 0) +
            (abs.Gamma ?? 0) +
            EPSILON;

          const alphaRel = (abs.Alpha ?? 0) / total;
          const tbr = (abs.Theta ?? 0) / ((abs.Beta ?? 0) + EPSILON);
          const tbrNorm = Math.min(1, tbr / tbrCeiling);
          const tbrWeight = 1 - alphaWeight;
          samples.push(alphaWeight * alphaRel + tbrWeight * tbrNorm);
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
  }, [bpRef, alphaWeight, tbrCeiling]);

  const resetCalibration = useCallback(() => {
    baselineRef.current = 0;
    smoothedRef.current = 0;
    stateRef.current = {
      relaxation: 0,
      alphaRelative: 0,
      thetaBetaRatio: 0,
      calibrated: false,
    };
  }, []);

  return {
    state: stateRef,
    calibrate,
    resetCalibration,
    get calibrating() {
      return calibratingRef.current;
    },
  };
}
