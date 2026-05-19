// ─────────────────────────────────────────────────────────────────────────────
// useChannelBandPowers — Per-channel × per-band spectral feature hook.
//
// Runs an FFT on every channel at ~12 Hz and exposes a NeuroFrame ref that
// downstream RAF loops can poll without triggering React re-renders.
//
// Each call returns a stable MutableRefObject; the consumer reads .current
// at any time. Frame is updated *in place* (Float32Array slots) — no GC churn.
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useEffect } from "react";
import type { MutableRefObject } from "react";
import type { EEGData } from "../../../types";
import { useSampleRate } from "../../../lib/sampleRateStore";
import { FftEngine, FREQUENCY_BANDS } from "../../../lib/fftEngine";
import { BAND_NAMES, type ChannelSnapshot, type NeuroFrame } from "./types";
import { logPower } from "./engine";

const FFT_SIZE = 256;
const UPDATE_HZ = 12;

// Map ordered BAND_NAMES → indices in FREQUENCY_BANDS
const BAND_INDEX_MAP = BAND_NAMES.map((n) =>
  FREQUENCY_BANDS.findIndex((b) => b.name === n),
);

export function useChannelBandPowers(
  eegData: EEGData,
): MutableRefObject<NeuroFrame> {
  const sampleRate = useSampleRate();
  const fftRef = useRef<FftEngine | null>(null);
  if (!fftRef.current || fftRef.current.sampleRateHz !== sampleRate) {
    fftRef.current = new FftEngine(FFT_SIZE, sampleRate);
  }

  // Pre-allocate the frame structure for the maximum channel count we expect.
  const frameRef = useRef<NeuroFrame>(makeFrame(eegData.numChannels));

  // Re-allocate if channel count grows (rare, but happens on reconnect).
  if (frameRef.current.channels.length < eegData.numChannels) {
    frameRef.current = makeFrame(eegData.numChannels);
  }

  useEffect(() => {
    const intervalMs = Math.round(1000 / UPDATE_HZ);
    const id = setInterval(() => {
      const fft = fftRef.current!;
      const { buffers, writeIndex, samplesInBuffer, numChannels } = eegData;
      const frame = frameRef.current;

      let anyReady = false;
      for (let ch = 0; ch < numChannels; ch++) {
        if (ch >= buffers.current.length) continue;
        const snap = frame.channels[ch];
        const result = fft.analyseRing(
          buffers.current[ch],
          writeIndex.current,
          samplesInBuffer.current,
        );
        if (!result) continue;
        anyReady = true;
        let dominantIdx = 0;
        let dominantVal = -Infinity;
        let totalAbs = 0;
        for (let b = 0; b < BAND_NAMES.length; b++) {
          const origIdx = BAND_INDEX_MAP[b];
          const bandName = FREQUENCY_BANDS[origIdx]?.name ?? BAND_NAMES[b];
          const power = result.bandPowers[bandName] ?? 0;
          const lp = logPower(power);
          snap.logBands[b] = lp;
          totalAbs += power;
          if (lp > dominantVal) {
            dominantVal = lp;
            dominantIdx = b;
          }
        }
        snap.dominantBand = dominantIdx;
        snap.rms = Math.sqrt(totalAbs); // proxy
      }

      if (anyReady) {
        frame.ts = performance.now();
        frame.ready = true;
      }
    }, intervalMs);

    return () => clearInterval(id);
  }, [eegData]);

  return frameRef;
}

function makeFrame(numChannels: number): NeuroFrame {
  const channels: ChannelSnapshot[] = [];
  for (let i = 0; i < numChannels; i++) {
    channels.push({
      logBands: new Float32Array(BAND_NAMES.length),
      dominantBand: 0,
      rms: 0,
    });
  }
  return { channels, ts: 0, ready: false };
}
