// ─────────────────────────────────────────────────────────────────────────────
// useBandPowers — Shared spectral decomposition hook.
//
// Runs a periodic FFT on all (or selected) EEG channels and returns
// averaged absolute band powers (µV²/Hz) plus relative powers (0–1).
//
// This is the foundation hook that higher-level detectors build upon.
// Uses mutable refs internally so consumers can read in RAF loops
// without triggering React re-renders.
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useEffect } from "react";
import type { EEGData, BandPowers } from "../../types";
import { SAMPLE_RATE } from "../../types";
import { FftEngine, FREQUENCY_BANDS } from "../../lib/fftEngine";

const FFT_SIZE = 256;

export interface BandPowersConfig {
  /** Update rate in Hz (default 12 ≈ 80 ms). */
  updateHz?: number;
  /** Channels to average over. `undefined` = all channels. */
  channels?: number[];
  /** EMA smoothing factor 0–1 (0 = no smoothing, 0.8 = heavy). Default 0. */
  smoothing?: number;
}

export interface BandPowersResult {
  /** Absolute band powers in µV²/Hz, averaged across channels. */
  absolute: BandPowers;
  /** Relative band powers normalised to sum = 1. */
  relative: BandPowers;
  /** Total spectral power across all bands (µV²/Hz). */
  totalPower: number;
  /** Dominant frequency in Hz (highest PSD bin). */
  dominantFrequency: number;
}

const EMPTY_BP: BandPowers = Object.fromEntries(
  FREQUENCY_BANDS.map((b) => [b.name, 0]),
);

const EMPTY_RESULT: BandPowersResult = {
  absolute: { ...EMPTY_BP },
  relative: { ...EMPTY_BP },
  totalPower: 0,
  dominantFrequency: 0,
};

export function useBandPowers(
  eegData: EEGData,
  config: BandPowersConfig = {},
) {
  const { updateHz = 12, channels, smoothing = 0 } = config;

  const fftRef = useRef<FftEngine | null>(null);
  const resultRef = useRef<BandPowersResult>({ ...EMPTY_RESULT });
  const prevAbsolute = useRef<BandPowers>({ ...EMPTY_BP });
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  if (!fftRef.current) {
    fftRef.current = new FftEngine(FFT_SIZE, SAMPLE_RATE);
  }

  useEffect(() => {
    const intervalMs = Math.round(1000 / updateHz);
    const fft = fftRef.current!;

    timerRef.current = setInterval(() => {
      const { buffers, writeIndex, samplesInBuffer, numChannels } = eegData;

      const chList =
        channels ?? Array.from({ length: numChannels }, (_, i) => i);

      const sumBP: BandPowers = {};
      for (const band of FREQUENCY_BANDS) sumBP[band.name] = 0;
      let totalPower = 0;
      let dominantFrequency = 0;
      let bestPeak = 0;
      let validCount = 0;

      for (const ch of chList) {
        if (ch >= buffers.current.length) continue;
        const result = fft.analyseRing(
          buffers.current[ch],
          writeIndex.current,
          samplesInBuffer.current,
        );
        if (!result) continue;
        validCount++;
        for (const band of FREQUENCY_BANDS) {
          sumBP[band.name] += result.bandPowers[band.name] ?? 0;
        }
        totalPower += result.totalPower;
        if (result.totalPower > bestPeak) {
          bestPeak = result.totalPower;
          dominantFrequency = result.dominantFrequency;
        }
      }

      if (validCount === 0) return;

      // Average across channels
      const absolute: BandPowers = {};
      const relative: BandPowers = {};
      const avgTotal = totalPower / validCount;

      for (const band of FREQUENCY_BANDS) {
        let raw = sumBP[band.name] / validCount;

        // Apply EMA smoothing
        if (smoothing > 0) {
          raw =
            smoothing * (prevAbsolute.current[band.name] ?? 0) +
            (1 - smoothing) * raw;
        }

        absolute[band.name] = raw;
        relative[band.name] = avgTotal > 0 ? raw / avgTotal : 0;
      }

      prevAbsolute.current = absolute;

      resultRef.current = {
        absolute,
        relative,
        totalPower: avgTotal,
        dominantFrequency,
      };
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [eegData, updateHz, channels, smoothing]);

  return resultRef;
}
