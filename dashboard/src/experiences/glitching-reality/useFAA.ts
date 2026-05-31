// ─────────────────────────────────────────────────────────────────────────────
// useFAA — Frontal Alpha Asymmetry hook for "The Glitching Reality".
//
// Electrode-placement agnostic: processes ALL available channels and derives:
//
//   • faa          ln(α_ch1) − ln(α_ch0) — Davidson FAA proxy when ≥2 ch
//                  available; 0 (neutral) otherwise
//   • calm         α / (α + β) averaged over all channels — 0..1, higher = calmer
//   • betaSurge    β normalised against a slow rolling baseline (~30 s τ)
//   • instability  0..1 composite — drives the MR glitch shader
//
// `instability` blends "loss of α dominance" (1 − calm) with sustained β
// surges, and is gated by FAA so positive-affect / equanimity states earn an
// extra calmness bonus.  A sudden drop in β (deep breath, exhale) snaps the
// score back toward 0.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from "react";
import type { EEGData } from "../../types";
import { useSampleRate } from "../../lib/sampleRateStore";
import { FftEngine, FREQUENCY_BANDS } from "../../lib/fftEngine";

const FFT_SIZE = 256;       // ≈1 s window at 250 Hz
const UPDATE_MS = 80;       // 12.5 Hz analysis loop
const EMA_FAST = 0.22;      // band-power smoothing
const EMA_SLOW = 0.006;     // ~30 s rolling β baseline
const EMA_CALM = 0.12;      // displayed calm-score smoothing
const SNAP_DROP = 0.35;     // β drop ratio that triggers "snap to clarity"

/** Band-power averages (all channels), smoothed. Keys match FREQUENCY_BANDS names. */
export type BandAvg = Record<string, number>;

export interface FAASignal {
  /** Frontal Alpha Asymmetry, ln(α_ch1) − ln(α_ch0).  Positive ≈ approach. */
  faa: number;
  /** α / (α + β) averaged over all channels, smoothed 0..1.  Higher = calmer. */
  calm: number;
  /** β normalised against rolling baseline, clamped 0..1 (~1 = strong spike). */
  betaSurge: number;
  /** Composite 0..1 — drives shader instability. */
  instability: number;
  /** True for ~600 ms after a deep-breath / sharp β drop. */
  snapping: boolean;
  /** All-channel average band powers (δ θ α β γ), smoothed. */
  bands: BandAvg;
  /** Number of channels contributing to the signal. */
  activeChannels: number;
}

const ZERO_BANDS: BandAvg = Object.fromEntries(FREQUENCY_BANDS.map((b) => [b.name, 0]));
const ZERO: FAASignal = { faa: 0, calm: 0.5, betaSurge: 0, instability: 0, snapping: false, bands: ZERO_BANDS, activeChannels: 0 };

export function useFAA(eegData: EEGData) {
  const sampleRate = useSampleRate();
  const fftRef = useRef<FftEngine | null>(null);
  if (!fftRef.current || fftRef.current.sampleRateHz !== sampleRate) {
    fftRef.current = new FftEngine(FFT_SIZE, sampleRate);
  }

  const liveRef = useRef<FAASignal>(ZERO);
  const [snapshot, setSnapshot] = useState<FAASignal>(ZERO);

  useEffect(() => {
    const fft = fftRef.current!;
    let aEMA = 0, bAvg = 0;            // smoothed all-channel α average / β average
    let a0EMA = 0, a1EMA = 0;          // per-channel α for FAA (ch 0 & ch 1)
    let bBaseline = 0;
    // Smoothed per-band averages (all channels).
    const bandEMA: Record<string, number> = Object.fromEntries(FREQUENCY_BANDS.map((b) => [b.name, 0]));
    let calmEMA = 0.5;
    let instEMA = 0;
    let snapUntil = 0;
    let prevB = 0;
    let snapCounter = 0;

    const tick = () => {
      const { buffers, writeIndex, samplesInBuffer, numChannels } = eegData;
      if (numChannels < 1) return;

      const wi = writeIndex.current;
      const si = samplesInBuffer.current;

      // ── Accumulate all bands over all available channels ─────────────
      const bandSum: Record<string, number> = Object.fromEntries(FREQUENCY_BANDS.map((b) => [b.name, 0]));
      let count = 0;
      let a0Raw = 0, a1Raw = 0; // for FAA (ch 0 vs ch 1 proxy)

      for (let ch = 0; ch < numChannels; ch++) {
        const buf = buffers.current[ch];
        if (!buf) continue;
        const r = fft.analyseRing(buf, wi, si);
        if (!r) continue;
        for (const b of FREQUENCY_BANDS) bandSum[b.name] += r.bandPowers[b.name] ?? 0;
        count++;
        if (ch === 0) a0Raw = r.bandPowers.Alpha ?? 0;
        if (ch === 1) a1Raw = r.bandPowers.Alpha ?? 0;
      }

      if (count === 0) return;

      // Per-band averages across channels.
      for (const b of FREQUENCY_BANDS) {
        const raw = bandSum[b.name] / count;
        bandEMA[b.name] += EMA_FAST * (raw - bandEMA[b.name]);
      }

      const a1Avg = bandSum.Alpha / count;
      const bRaw  = bandSum.Beta  / count;

      // Smooth all-channel averages.
      aEMA  += EMA_FAST * (a1Avg - aEMA);
      bAvg  += EMA_FAST * (bRaw  - bAvg);
      // FAA per-channel EMAs (only meaningful when numChannels ≥ 2).
      a0EMA += EMA_FAST * (a0Raw - a0EMA);
      a1EMA += EMA_FAST * (a1Raw - a1EMA);

      // Slow rolling β baseline for surge detection.
      bBaseline += EMA_SLOW * (bAvg - bBaseline);
      const surge = bBaseline > 1e-9
        ? Math.max(0, Math.min(1, (bAvg - bBaseline) / (bBaseline + 1e-9)))
        : 0;

      // FAA — guard log of zero.  Meaningful only when ≥2 channels present;
      // otherwise falls back to 0 (neutral).
      const faa = numChannels >= 2
        ? Math.log(Math.max(a1EMA, 1e-9)) - Math.log(Math.max(a0EMA, 1e-9))
        : 0;

      // Calm = α-dominance over (α+β), all-channel average.
      const denom = aEMA + bAvg;
      const calmRaw = denom > 1e-9 ? aEMA / denom : 0.5;
      calmEMA += EMA_CALM * (calmRaw - calmEMA);

      // Composite instability:
      //   • starts as (1 − calm)         → loss of α dominance
      //   • adds 0.6 × β surge           → sustained cognitive load
      //   • subtracts 0.15 × max(faa,0)  → equanimity / positive affect bonus
      const raw = (1 - calmEMA) + 0.6 * surge - 0.15 * Math.max(0, faa);
      const target = Math.max(0, Math.min(1, raw));

      // Snap-back: detect a sharp β drop (deep exhale relaxes the spike).
      if (prevB > 1e-9 && (prevB - bAvg) / prevB > SNAP_DROP) {
        snapUntil = performance.now() + 600;
        snapCounter = 6; // pull instability down hard for next few ticks
      }
      prevB = bAvg;

      // Asymmetric smoothing: ramp up fast on stress, slower on relief —
      // unless a snap is active, then collapse instantly.
      const now = performance.now();
      const snapping = now < snapUntil;
      let alpha = target > instEMA ? 0.18 : 0.08;
      if (snapCounter > 0) { alpha = 0.55; snapCounter--; }
      instEMA += alpha * (target - instEMA);
      if (snapping) instEMA *= 0.85;
      instEMA = Math.max(0, Math.min(1, instEMA));

      liveRef.current = {
        faa,
        calm: calmEMA,
        betaSurge: surge,
        instability: instEMA,
        snapping,
        bands: { ...bandEMA },
        activeChannels: count,
      };
    };

    const id = setInterval(tick, UPDATE_MS);
    const snapId = setInterval(() => setSnapshot({ ...liveRef.current }), 200);
    return () => { clearInterval(id); clearInterval(snapId); };
  }, [eegData]);

  return { liveRef, snapshot };
}
