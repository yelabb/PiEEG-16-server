// ─────────────────────────────────────────────────────────────────────────────
// useNeuralAudio — Bridges EEG ring buffers → FFT → NeuralSynth.
//
// Runs FFT on each channel at ~12 Hz, averages band powers across all
// channels, then feeds the result into the synth engine.
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useCallback, useEffect } from "react";
import type { EEGData, BandPowers } from "../../types";
import { useSampleRate } from "../../lib/sampleRateStore";
import { FftEngine, FREQUENCY_BANDS } from "../../lib/fftEngine";
import { NeuralSynth } from "./NeuralSynth";
import type { SynthConfig } from "./NeuralSynth";

const FFT_SIZE = 256;
const UPDATE_INTERVAL_MS = 80; // ~12 Hz spectral updates

export function useNeuralAudio(eegData: EEGData) {
  const synthRef = useRef<NeuralSynth | null>(null);
  const fftRef = useRef<FftEngine | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const latestBP = useRef<BandPowers | null>(null);

  // Re-init the FftEngine when the device's sample rate changes (PiEEG-16
  // 250 Hz → IronBCI-32 500 Hz). Without this, every band edge is wrong.
  const sampleRate = useSampleRate();
  if (!fftRef.current || fftRef.current.sampleRateHz !== sampleRate) {
    fftRef.current = new FftEngine(FFT_SIZE, sampleRate);
  }

  // Lazy-init synth (not started yet — needs user gesture)
  if (!synthRef.current) {
    synthRef.current = new NeuralSynth();
  }

  const start = useCallback(async () => {
    const synth = synthRef.current!;
    if (synth.playing) return;
    await synth.start();

    // Start periodic FFT → synth updates
    timerRef.current = setInterval(() => {
      const fft = fftRef.current!;
      const { buffers, writeIndex, samplesInBuffer, numChannels } = eegData;

      const avgBP: BandPowers = {};
      for (const band of FREQUENCY_BANDS) avgBP[band.name] = 0;

      let validCount = 0;
      for (let ch = 0; ch < numChannels; ch++) {
        const buf = buffers.current[ch];
        if (!buf) continue;
        const result = fft.analyseRing(
          buf,
          writeIndex.current,
          samplesInBuffer.current,
        );
        if (!result) continue;
        validCount++;
        for (const band of FREQUENCY_BANDS) {
          avgBP[band.name] += result.bandPowers[band.name] ?? 0;
        }
      }

      if (validCount > 0) {
        for (const band of FREQUENCY_BANDS) {
          avgBP[band.name] /= validCount;
        }
        latestBP.current = avgBP;
        synth.update(avgBP);
      }
    }, UPDATE_INTERVAL_MS);
  }, [eegData]);

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    synthRef.current?.stop();
  }, []);

  const applyConfig = useCallback((cfg: Partial<SynthConfig>) => {
    synthRef.current?.applyConfig(cfg);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      synthRef.current?.stop();
    };
  }, []);

  return {
    start,
    stop,
    applyConfig,
    get playing() {
      return synthRef.current?.playing ?? false;
    },
    get config() {
      return synthRef.current?.config;
    },
    latestBP,
  };
}
