// ─────────────────────────────────────────────────────────────────────────────
// Artifact Detection Engine — Time-domain envelope processing.
//
// Based on EOG signal processing methodology (Chapter 5):
//   1. Zero-mean (remove DC offset)
//   2. Detrend (remove slow baseline drift)
//   3. Rectification (full-wave: abs(x))
//   4. Moving average smoothing → envelope
//   5. Threshold detection with hysteresis
//
// Designed for fast transient events (100-500 ms): blinks, jaw clenches, brow
// raises, eye movements — artifacts that FFT-based spectral analysis misses.
// ─────────────────────────────────────────────────────────────────────────────

import type {
  Link,
  LinkRuntime,
  ArtifactCalibration,
  EnvelopeFrame,
  ArtifactChannelRank,
} from "./types";

const ENVELOPE_FLOOR = 0.1; // Minimum envelope value to prevent division by zero

// ── Calibration ──────────────────────────────────────────────────────────────

export function newArtifactCalibration(): ArtifactCalibration {
  return {
    baseline: 0,
    threshold: 0,
    peakEnvelope: 0,
    nBaseline: 0,
    nDetections: 0,
  };
}

/**
 * Analyze baseline (rest) phase to establish noise floor.
 */
export function calibrateBaseline(
  baselineFrames: EnvelopeFrame[],
  channel: number,
): { baseline: number; nSamples: number } {
  if (baselineFrames.length === 0) return { baseline: 0, nSamples: 0 };

  let sum = 0;
  let sumSq = 0;
  let n = 0;

  for (const frame of baselineFrames) {
    const snap = frame.channels[channel];
    if (!snap) continue;
    const env = snap.envelope;
    if (!Number.isFinite(env)) continue;
    sum += env;
    sumSq += env * env;
    n++;
  }

  if (n === 0) return { baseline: 0, nSamples: 0 };
  const mean = sum / n;
  const variance = sumSq / n - mean * mean;
  const baseline = mean + Math.sqrt(Math.max(0, variance)); // mean + 1σ

  return { baseline, nSamples: n };
}

/**
 * Detect peaks in active phase and compute threshold.
 * Returns peaks found and suggested threshold.
 */
export function calibrateThreshold(
  activeFrames: EnvelopeFrame[],
  channel: number,
  baseline: number,
  expectedRepetitions: number = 10,
): { threshold: number; peakEnvelope: number; nDetections: number } {
  if (activeFrames.length === 0 || baseline <= 0) {
    return { threshold: baseline * 2, peakEnvelope: 0, nDetections: 0 };
  }

  // Extract envelope time series
  const envelopes: number[] = [];
  for (const frame of activeFrames) {
    const snap = frame.channels[channel];
    if (snap && Number.isFinite(snap.envelope)) {
      envelopes.push(snap.envelope);
    }
  }

  if (envelopes.length === 0) {
    return { threshold: baseline * 2, peakEnvelope: 0, nDetections: 0 };
  }

  // Simple peak detection: find local maxima above baseline
  const minPeakDistance = 5; // samples (~83ms at 60 Hz)
  const minPeakHeight = baseline * 1.5;
  const peaks: number[] = [];

  for (let i = minPeakDistance; i < envelopes.length - minPeakDistance; i++) {
    const val = envelopes[i];
    if (val < minPeakHeight) continue;

    // Check if local maximum
    let isMax = true;
    for (let j = 1; j <= minPeakDistance; j++) {
      if (
        envelopes[i - j] > val ||
        envelopes[i + j] > val
      ) {
        isMax = false;
        break;
      }
    }

    if (isMax) peaks.push(val);
  }

  const peakEnvelope = peaks.length > 0 ? Math.max(...peaks) : 0;
  const nDetections = peaks.length;

  // Set threshold between baseline and mean peak
  const meanPeak = peaks.length > 0 ? peaks.reduce((a, b) => a + b, 0) / peaks.length : baseline * 2;
  const threshold = baseline + 0.6 * (meanPeak - baseline);

  return { threshold, peakEnvelope, nDetections };
}

/**
 * Rank all channels by artifact detection quality.
 */
export function rankChannelsForArtifact(
  baselineFrames: EnvelopeFrame[],
  activeFrames: EnvelopeFrame[],
  numChannels: number,
  expectedRepetitions: number = 10,
): ArtifactChannelRank[] {
  const results: ArtifactChannelRank[] = [];

  for (let ch = 0; ch < numChannels; ch++) {
    const { baseline, nSamples } = calibrateBaseline(baselineFrames, ch);
    if (nSamples < 10) continue; // Not enough data

    const { threshold, peakEnvelope, nDetections } = calibrateThreshold(
      activeFrames,
      ch,
      baseline,
      expectedRepetitions,
    );

    // Calculate metrics
    const snr = baseline > 0 ? peakEnvelope / baseline : 0;
    const detectionRate = expectedRepetitions > 0 ? nDetections / expectedRepetitions : 0;

    // Measure consistency (inverse of peak variation)
    const peaks: number[] = [];
    const envelopes: number[] = [];
    for (const frame of activeFrames) {
      const snap = frame.channels[ch];
      if (snap && Number.isFinite(snap.envelope)) {
        envelopes.push(snap.envelope);
      }
    }

    const minPeakDistance = 5;
    for (let i = minPeakDistance; i < envelopes.length - minPeakDistance; i++) {
      const val = envelopes[i];
      if (val < baseline * 1.5) continue;
      let isMax = true;
      for (let j = 1; j <= minPeakDistance; j++) {
        if (envelopes[i - j] > val || envelopes[i + j] > val) {
          isMax = false;
          break;
        }
      }
      if (isMax) peaks.push(val);
    }

    const peakStdDev =
      peaks.length > 1
        ? Math.sqrt(
            peaks.reduce((sum, p) => sum + Math.pow(p - peakEnvelope / peaks.length, 2), 0) /
              (peaks.length - 1),
          )
        : peakEnvelope * 0.5;
    const consistency = 1 / (1 + peakStdDev / Math.max(peakEnvelope, 1));

    // Composite quality score
    const quality = snr * consistency * Math.min(1, detectionRate);

    results.push({
      channel: ch,
      channelLabel: channelLabelShort(ch),
      peakEnvelope,
      baselineRMS: baseline,
      snr,
      consistency,
      detectionRate,
      quality,
    });
  }

  // Sort by quality (best first)
  results.sort((a, b) => b.quality - a.quality);
  return results;
}

// ── Runtime Evaluation ───────────────────────────────────────────────────────

/**
 * Evaluate artifact link in real-time.
 * Maps envelope relative to threshold → 0..1 activation.
 */
export function evaluateArtifactLink(
  link: Link,
  envelope: number,
  prev: LinkRuntime,
): LinkRuntime {
  const next: LinkRuntime = {
    value: prev.value,
    norm: 0,
    envelope,
    detected: false,
  };

  const cal = link.artifactCal;
  if (!cal || cal.nBaseline < 10 || cal.threshold <= 0) {
    // Untrained → decay to zero
    next.value = prev.value * link.smoothing;
    return next;
  }

  const { baseline, threshold, peakEnvelope } = cal;

  // Threshold detection with hysteresis
  const above = envelope > threshold;
  const releaseThreshold = baseline + 0.3 * (threshold - baseline);
  const below = envelope < releaseThreshold;

  if (above) {
    next.detected = true;
  } else if (!below && prev.detected) {
    next.detected = true; // Hysteresis hold
  }

  // Map envelope to 0..1
  let norm = 0;
  if (next.detected && peakEnvelope > baseline) {
    // Linear between baseline and peak
    norm = (envelope - baseline) / (peakEnvelope - baseline);
    norm = Math.max(0, Math.min(1, norm));
  }

  next.norm = norm;
  if (link.invert) norm = 1 - norm;

  // Apply gain (centered on 0.5)
  const driven = 0.5 + (norm - 0.5) * link.gain;
  const clamped = Math.max(0, Math.min(1, driven));

  // EMA smoothing
  const a = link.smoothing;
  next.value = a * prev.value + (1 - a) * clamped;

  return next;
}

/**
 * Create a new Link from ranked artifact channel.
 */
export function linkFromRankedArtifact(
  ranked: ArtifactChannelRank,
  expression: string,
  baselineFrames: EnvelopeFrame[],
  activeFrames: EnvelopeFrame[],
  expectedRepetitions: number = 10,
): Link {
  const { baseline, nSamples } = calibrateBaseline(baselineFrames, ranked.channel);
  const { threshold, peakEnvelope, nDetections } = calibrateThreshold(
    activeFrames,
    ranked.channel,
    baseline,
    expectedRepetitions,
  );

  return {
    id: `artifact-${ranked.channel}-${expression}-${Date.now().toString(36)}`,
    pipeline: "artifact",
    channel: ranked.channel,
    expression,
    artifactCal: {
      baseline,
      threshold,
      peakEnvelope,
      nBaseline: nSamples,
      nDetections,
    },
    gain: 1.2,
    smoothing: 0.75, // Faster than spectral (less smoothing)
    invert: false,
    enabled: true,
  };
}

export function newArtifactRuntime(): LinkRuntime {
  return { value: 0, norm: 0, envelope: 0, detected: false };
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function channelLabelShort(idx: number): string {
  const MONTAGE_HINTS = [
    "Fp1", "Fp2", "C3", "C4", "T5", "T6", "O1", "O2",
    "F3", "F4", "F7", "F8", "P3", "P4", "Fz", "Cz",
  ];
  const hint = MONTAGE_HINTS[idx];
  return hint ? `${hint}` : `Ch${idx + 1}`;
}
