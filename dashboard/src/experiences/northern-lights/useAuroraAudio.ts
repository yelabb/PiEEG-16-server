// ─────────────────────────────────────────────────────────────────────────────
// useAuroraAudio — Bridges EEG ring buffers → FFT → AuroraSynth.
//
// FFT runs ALWAYS on mount (~12 Hz) so the visual scene receives band
// powers even when audio is muted.  The synth is started/stopped
// independently by the component.
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useCallback, useEffect } from "react";
import type { EEGData, BandPowers } from "../../types";
import { SAMPLE_RATE } from "../../types";
import { FftEngine, FREQUENCY_BANDS } from "../../lib/fftEngine";
import { AuroraSynth } from "./AuroraSynth";
import type { AuroraConfig } from "./AuroraSynth";

const FFT_SIZE = 256;
const UPDATE_MS = 80; // ~12 Hz

export interface NormalisedBands {
  delta: number;
  theta: number;
  alpha: number;
  beta: number;
  gamma: number;
}

export function useAuroraAudio(eegData: EEGData) {
  const synthRef = useRef<AuroraSynth | null>(null);
  const fftRef = useRef<FftEngine | null>(null);
  const latestBP = useRef<BandPowers | null>(null);
  const sensitivity = useRef(2);
  /** Normalised 0-1 band powers for the render loop — updated every FFT tick */
  const normalised = useRef<NormalisedBands>({
    delta: 0, theta: 0, alpha: 0, beta: 0, gamma: 0,
  });

  if (!fftRef.current) fftRef.current = new FftEngine(FFT_SIZE, SAMPLE_RATE);
  if (!synthRef.current) synthRef.current = new AuroraSynth();

  // ── FFT loop — runs on mount, independent of audio ─────────────────

  useEffect(() => {
    const fft = fftRef.current!;
    const synth = synthRef.current!;

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

      if (valid > 0) {
        for (const b of FREQUENCY_BANDS) avg[b.name] /= valid;
        latestBP.current = avg;

        // Feed the synth if it's playing
        if (synth.playing) synth.update(avg);

        // Always update normalised values for the GPU uniforms
        const s = sensitivity.current;
        const n = normalised.current;
        n.delta = Math.min(Math.log1p((avg.Delta ?? 0) * s) / 6, 1);
        n.theta = Math.min(Math.log1p((avg.Theta ?? 0) * s) / 6, 1);
        n.alpha = Math.min(Math.log1p((avg.Alpha ?? 0) * s) / 6, 1);
        n.beta  = Math.min(Math.log1p((avg.Beta  ?? 0) * s) / 6, 1);
        n.gamma = Math.min(Math.log1p((avg.Gamma ?? 0) * s) / 6, 1);
      }
    }, UPDATE_MS);

    return () => clearInterval(timer);
  }, [eegData]);

  // ── Audio start/stop (user gesture required) ───────────────────────

  const start = useCallback(async () => {
    const synth = synthRef.current!;
    if (synth.playing) return;
    await synth.start();
    sensitivity.current = synth.config.sensitivity;
  }, []);

  const stop = useCallback(() => {
    synthRef.current?.stop();
  }, []);

  const applyConfig = useCallback((cfg: Partial<AuroraConfig>) => {
    synthRef.current?.applyConfig(cfg);
    if (cfg.sensitivity !== undefined) sensitivity.current = cfg.sensitivity;
  }, []);

  // Cleanup synth on unmount
  useEffect(() => {
    return () => { synthRef.current?.stop(); };
  }, []);

  return { start, stop, applyConfig, latestBP, normalised,
    get playing() { return synthRef.current?.playing ?? false; },
    get config() { return synthRef.current?.config; },
  };
}
