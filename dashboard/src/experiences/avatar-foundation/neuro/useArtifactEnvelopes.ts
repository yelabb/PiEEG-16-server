// ─────────────────────────────────────────────────────────────────────────────
// useArtifactEnvelopes — Real-time time-domain envelope tracking.
//
// Fast update (~60 Hz) to catch transient artifacts (100-500 ms):
//   • Blinks
//   • Eye movements
//   • Jaw clenches
//   • Eyebrow raises
//   • Any muscle artifact
//
// Processing chain (per channel):
//   1. Extract recent window (~60 samples = 240ms @ 250 Hz)
//   2. Zero-mean (remove DC offset)
//   3. Detrend (remove slow baseline drift)
//   4. Full-wave rectification: abs(x)
//   5. Moving average (15-30 samples = 60-120ms)
//   6. → envelope (µV)
//
// Frame is updated *in place* (no GC churn), similar to useChannelBandPowers.
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useEffect } from "react";
import type { MutableRefObject } from "react";
import type { EEGData } from "../../../types";
import type { EnvelopeFrame, EnvelopeSnapshot } from "./types";

const UPDATE_HZ = 60; // Fast update for transient detection
const WINDOW_SAMPLES = 64; // ~256ms @ 250 Hz
const MA_WINDOW = 20; // Moving average window: ~80ms @ 250 Hz

export function useArtifactEnvelopes(
  eegData: EEGData,
): MutableRefObject<EnvelopeFrame> {
  // Pre-allocate frame structure
  const frameRef = useRef<EnvelopeFrame>(makeFrame(eegData.numChannels));

  // Re-allocate if channel count grows
  if (frameRef.current.channels.length < eegData.numChannels) {
    frameRef.current = makeFrame(eegData.numChannels);
  }

  useEffect(() => {
    const intervalMs = Math.round(1000 / UPDATE_HZ);
    
    // Reusable buffers for processing
    const windowBuffers: Float32Array[] = [];
    for (let i = 0; i < eegData.numChannels; i++) {
      windowBuffers.push(new Float32Array(WINDOW_SAMPLES));
    }

    const id = setInterval(() => {
      const { buffers, writeIndex, samplesInBuffer, numChannels } = eegData;
      const frame = frameRef.current;

      let anyReady = false;

      for (let ch = 0; ch < numChannels; ch++) {
        if (ch >= buffers.current.length) continue;
        
        const ringBuffer = buffers.current[ch];
        if (samplesInBuffer.current < WINDOW_SAMPLES) continue;

        // Extract recent window from ring buffer
        const window = windowBuffers[ch];
        extractWindow(ringBuffer, writeIndex.current, samplesInBuffer.current, window);

        // Process: zero-mean → detrend → rectify → moving average
        const envelope = processEnvelope(window);

        // Update frame
        const snap = frame.channels[ch];
        snap.envelope = envelope;
        snap.rms = rms(window);
        anyReady = true;
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

// ── Signal Processing ────────────────────────────────────────────────────────

/**
 * Extract recent window from ring buffer.
 */
function extractWindow(
  ring: Float32Array,
  writeIdx: number,
  available: number,
  out: Float32Array,
): void {
  const n = out.length;
  const start = (writeIdx - n + ring.length) % ring.length;

  for (let i = 0; i < n; i++) {
    out[i] = ring[(start + i) % ring.length];
  }
}

/**
 * Process window → envelope.
 * Steps: zero-mean, detrend, rectify, moving average.
 */
function processEnvelope(window: Float32Array): number {
  const n = window.length;
  if (n === 0) return 0;

  // 1. Zero-mean (remove DC offset)
  let mean = 0;
  for (let i = 0; i < n; i++) mean += window[i];
  mean /= n;
  
  const centered = new Float32Array(n);
  for (let i = 0; i < n; i++) centered[i] = window[i] - mean;

  // 2. Detrend (remove linear trend)
  const detrended = detrend(centered);

  // 3. Full-wave rectification
  const rectified = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    rectified[i] = Math.abs(detrended[i]);
  }

  // 4. Moving average → envelope
  const envelope = movingAverage(rectified, MA_WINDOW);

  return envelope;
}

/**
 * Simple linear detrend.
 */
function detrend(data: Float32Array): Float32Array {
  const n = data.length;
  if (n === 0) return data;

  // Fit line: y = a + b*x
  let sumX = 0;
  let sumY = 0;
  let sumXY = 0;
  let sumXX = 0;

  for (let i = 0; i < n; i++) {
    sumX += i;
    sumY += data[i];
    sumXY += i * data[i];
    sumXX += i * i;
  }

  const denom = n * sumXX - sumX * sumX;
  const slope = denom !== 0 ? (n * sumXY - sumX * sumY) / denom : 0;
  const intercept = (sumY - slope * sumX) / n;

  // Subtract trend
  const out = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    out[i] = data[i] - (intercept + slope * i);
  }

  return out;
}

/**
 * Moving average filter (returns final smoothed value).
 */
function movingAverage(data: Float32Array, windowSize: number): number {
  const n = data.length;
  if (n === 0) return 0;

  const w = Math.min(windowSize, n);
  
  // Compute smoothed signal
  const smoothed = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    let sum = 0;
    let count = 0;
    for (let j = Math.max(0, i - w + 1); j <= Math.min(i, n - 1); j++) {
      sum += data[j];
      count++;
    }
    smoothed[i] = count > 0 ? sum / count : 0;
  }

  // Return the most recent (current) envelope value
  return smoothed[n - 1];
}

/**
 * Root mean square.
 */
function rms(data: Float32Array): number {
  if (data.length === 0) return 0;
  let sumSq = 0;
  for (let i = 0; i < data.length; i++) {
    sumSq += data[i] * data[i];
  }
  return Math.sqrt(sumSq / data.length);
}

// ── Frame Factory ────────────────────────────────────────────────────────────

function makeFrame(numChannels: number): EnvelopeFrame {
  const channels: EnvelopeSnapshot[] = [];
  for (let i = 0; i < numChannels; i++) {
    channels.push({
      envelope: 0,
      rms: 0,
    });
  }
  return { channels, ts: 0, ready: false };
}
