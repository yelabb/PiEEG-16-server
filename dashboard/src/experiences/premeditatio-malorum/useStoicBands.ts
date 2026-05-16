// ─────────────────────────────────────────────────────────────────────────────
// useStoicBands — runs an FFT loop on the EEG ring buffers and exposes
// smoothed Alpha + Beta values plus a calm-control score.
//
// Calm score is the alpha / (alpha + beta) ratio, smoothed with EMA so the
// HUD bars don't twitch.  A baseline can be captured during calibration and
// later used to normalise the alpha bar (0 = at baseline, 1 = double).
// ─────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useRef, useState } from "react";
import type { EEGData, BandPowers } from "../../types";
import { useSampleRate } from "../../lib/sampleRateStore";
import { FftEngine, FREQUENCY_BANDS } from "../../lib/fftEngine";

const FFT_SIZE = 256;
const UPDATE_MS = 100; // 10 Hz
const EMA = 0.18;

export interface StoicSignal {
  alpha: number;
  beta: number;
  /** alpha / (alpha + beta), 0..1 — higher = calmer */
  calmScore: number;
  /** Spike detector — beta normalised against rolling baseline. */
  betaSpike: number;
}

export interface StoicBaseline {
  alpha: number;
  beta: number;
  capturedAt: number;
}

export function useStoicBands(eegData: EEGData) {
  const sampleRate = useSampleRate();
  const fftRef = useRef<FftEngine | null>(null);
  if (!fftRef.current || fftRef.current.sampleRateHz !== sampleRate) {
    fftRef.current = new FftEngine(FFT_SIZE, sampleRate);
  }

  /** Live values — exposed as ref for high-frequency render loops */
  const liveRef = useRef<StoicSignal>({
    alpha: 0, beta: 0, calmScore: 0.5, betaSpike: 0,
  });
  const baselineRef = useRef<StoicBaseline | null>(null);

  /** Public, re-rendering snapshot at HUD cadence (4 Hz) */
  const [snapshot, setSnapshot] = useState<StoicSignal>(liveRef.current);

  useEffect(() => {
    const fft = fftRef.current!;
    let snapTick = 0;
    let alphaEMA = 0;
    let betaEMA = 0;
    let calmEMA = 0.5;
    let betaBaseEMA = 0;

    const timer = setInterval(() => {
      const { buffers, writeIndex, samplesInBuffer, numChannels } = eegData;
      const avg: BandPowers = {};
      for (const b of FREQUENCY_BANDS) avg[b.name] = 0;
      let valid = 0;
      for (let ch = 0; ch < numChannels; ch++) {
        const buf = buffers.current[ch];
        if (!buf) continue;
        const res = fft.analyseRing(buf, writeIndex.current, samplesInBuffer.current);
        if (!res) continue;
        valid++;
        for (const b of FREQUENCY_BANDS) avg[b.name] += res.bandPowers[b.name] ?? 0;
      }
      if (valid === 0) return;
      for (const b of FREQUENCY_BANDS) avg[b.name] /= valid;

      const rawAlpha = avg.Alpha ?? 0;
      const rawBeta = avg.Beta ?? 0;

      alphaEMA = alphaEMA + EMA * (rawAlpha - alphaEMA);
      betaEMA = betaEMA + EMA * (rawBeta - betaEMA);

      const denom = alphaEMA + betaEMA;
      const calm = denom > 1e-9 ? alphaEMA / denom : 0.5;
      calmEMA = calmEMA + EMA * (calm - calmEMA);

      // Rolling slow baseline for beta-spike detection (~30 s tau).
      betaBaseEMA = betaBaseEMA + 0.005 * (betaEMA - betaBaseEMA);
      const spike = betaBaseEMA > 1e-9
        ? Math.max(0, Math.min(1, (betaEMA - betaBaseEMA) / (betaBaseEMA + 1e-9)))
        : 0;

      liveRef.current = {
        alpha: alphaEMA,
        beta: betaEMA,
        calmScore: calmEMA,
        betaSpike: spike,
      };

      // Throttle React updates to ~4 Hz to keep the HUD snappy but cheap.
      if (++snapTick >= 3) {
        snapTick = 0;
        setSnapshot({ ...liveRef.current });
      }
    }, UPDATE_MS);

    return () => clearInterval(timer);
  }, [eegData]);

  const captureBaseline = useCallback(() => {
    baselineRef.current = {
      alpha: liveRef.current.alpha,
      beta: liveRef.current.beta,
      capturedAt: Date.now(),
    };
    return baselineRef.current;
  }, []);

  return { liveRef, snapshot, captureBaseline, baselineRef };
}
