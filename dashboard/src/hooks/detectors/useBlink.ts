// ─────────────────────────────────────────────────────────────────────────────
// useBlink — Ocular artifact (blink) detector.
//
// Detects eye-blink events from frontal EEG electrodes by monitoring
// peak-to-peak amplitude in a short sliding window (default 100 ms).
// Blinks produce large deflections (100–500 µV) compared to resting
// cortical EEG (~20–80 µV p2p), making them reliably distinguishable
// via a simple amplitude-threshold state machine:
//
//   idle → [p2p > threshold] → onset
//   onset → [p2p drops, 30–600 ms] → blink confirmed → refractory
//   refractory → [cooldown expires] → idle
//
// Optional adaptive calibration collects baseline + prompted blink
// amplitudes to personalise the threshold.
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useEffect, useCallback } from "react";
import type { EEGData } from "../../types";
import { SAMPLE_RATE } from "../../types";

// ── Configuration ────────────────────────────────────────────────────────

export interface BlinkConfig {
  /** Frontal channel indices to monitor (default [0, 1] for Fp1/Fp2). */
  channels?: number[];
  /** Detection threshold in µV peak-to-peak. Default 150. */
  threshold?: number;
  /** Sliding window duration in ms (default 100). */
  windowMs?: number;
  /** Minimum blink duration in ms (default 30). */
  minDurationMs?: number;
  /** Maximum blink duration in ms (default 600). */
  maxDurationMs?: number;
  /** Refractory period in ms — ignore new blinks for this long (default 300). */
  refractoryMs?: number;
  /** Polling rate in Hz (default 40). */
  pollHz?: number;
}

// ── State machine ────────────────────────────────────────────────────────

const enum Phase {
  Idle,
  Onset,
  Refractory,
}

// ── Result ───────────────────────────────────────────────────────────────

export interface BlinkState {
  /** True for exactly one poll cycle when a blink is confirmed. */
  blinked: boolean;
  /** Cumulative blink count this session. */
  count: number;
  /** Current peak-to-peak amplitude (µV) — useful for debug UI. */
  amplitude: number;
  /** Epoch ms of the last confirmed blink (0 if none). */
  lastBlinkTime: number;
}

// ── Amplitude reader (ring buffer) ───────────────────────────────────────

function readPeakToPeak(
  eeg: EEGData,
  channels: number[],
  windowSamples: number,
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

// ── Hook ─────────────────────────────────────────────────────────────────

export function useBlink(eegData: EEGData, config: BlinkConfig = {}) {
  const {
    channels = [0, 1],
    threshold = 150,
    windowMs = 100,
    minDurationMs = 30,
    maxDurationMs = 600,
    refractoryMs = 300,
    pollHz = 40,
  } = config;

  const windowSamples = Math.round((windowMs / 1000) * SAMPLE_RATE);

  const stateRef = useRef<BlinkState>({
    blinked: false,
    count: 0,
    amplitude: 0,
    lastBlinkTime: 0,
  });

  const phaseRef = useRef(Phase.Idle);
  const onsetTimeRef = useRef(0);
  const refractoryEndRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const reset = useCallback(() => {
    stateRef.current = {
      blinked: false,
      count: 0,
      amplitude: 0,
      lastBlinkTime: 0,
    };
    phaseRef.current = Phase.Idle;
  }, []);

  useEffect(() => {
    const intervalMs = Math.round(1000 / pollHz);

    timerRef.current = setInterval(() => {
      const now = performance.now();
      const amp = readPeakToPeak(eegData, channels, windowSamples);

      // Always clear the one-shot flag from the previous cycle
      const prev = stateRef.current;
      let blinked = false;

      switch (phaseRef.current) {
        case Phase.Idle:
          if (amp > threshold) {
            phaseRef.current = Phase.Onset;
            onsetTimeRef.current = now;
          }
          break;

        case Phase.Onset: {
          const elapsed = now - onsetTimeRef.current;
          if (amp <= threshold) {
            // Amplitude dropped — check duration validity
            if (elapsed >= minDurationMs && elapsed <= maxDurationMs) {
              blinked = true;
              phaseRef.current = Phase.Refractory;
              refractoryEndRef.current = now + refractoryMs;
            } else {
              // Too short or too long — likely noise, reset
              phaseRef.current = Phase.Idle;
            }
          } else if (elapsed > maxDurationMs) {
            // Sustained high amplitude — not a blink (artefact / clench)
            phaseRef.current = Phase.Idle;
          }
          break;
        }

        case Phase.Refractory:
          if (now >= refractoryEndRef.current) {
            phaseRef.current = Phase.Idle;
          }
          break;
      }

      stateRef.current = {
        blinked,
        count: prev.count + (blinked ? 1 : 0),
        amplitude: amp,
        lastBlinkTime: blinked ? Date.now() : prev.lastBlinkTime,
      };
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [
    eegData,
    channels,
    threshold,
    windowSamples,
    minDurationMs,
    maxDurationMs,
    refractoryMs,
    pollHz,
  ]);

  return { state: stateRef, reset };
}
