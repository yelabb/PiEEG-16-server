// ─────────────────────────────────────────────────────────────────────────────
// Neurofeedback engine — pure math helpers.
//
// All numerical routines that decide how an EEG feature drives an avatar
// expression live here, isolated from React + Three.js for clarity and
// future testability.
// ─────────────────────────────────────────────────────────────────────────────

import type { Stats, CalibrationPair, Link, LinkRuntime, NeuroFrame } from "./types";
import { BAND_NAMES } from "./types";

const LOG_EPSILON = 1e-9;
const STAT_FLOOR = 0.05; // minimum |active-rest| to consider a link well-trained

// ── Welford running mean / variance ──────────────────────────────────────

export function newStats(): Stats {
  return { n: 0, mean: 0, m2: 0 };
}

export function pushStat(s: Stats, x: number): void {
  s.n += 1;
  const delta = x - s.mean;
  s.mean += delta / s.n;
  const delta2 = x - s.mean;
  s.m2 += delta * delta2;
}

export function variance(s: Stats): number {
  return s.n > 1 ? s.m2 / (s.n - 1) : 0;
}

export function stddev(s: Stats): number {
  return Math.sqrt(Math.max(variance(s), 0));
}

// ── Calibration helpers ──────────────────────────────────────────────────

export function newCalibration(): CalibrationPair {
  return { rest: newStats(), active: newStats() };
}

/**
 * Cohen's d on log-band power between REST and ACTIVE for a single channel/
 * band pair, within a single calibration session.
 *
 * IMPORTANT — this is a *within-session* descriptive statistic. It tells us how
 * separable the two recorded states were *for this user, this electrode
 * placement, this session* — it is not a generalisation claim, a clinical
 * metric, or a measure of cognitive state. Inter-session reliability,
 * artefact contamination, and number-of-channels multiple comparisons are all
 * unaccounted for. Treat the value as session-local UX feedback only.
 */
export function cohenD(rest: Stats, active: Stats): number {
  if (rest.n < 2 || active.n < 2) return 0;
  const vr = variance(rest);
  const va = variance(active);
  const pooled = Math.sqrt((vr + va) / 2);
  if (pooled <= 1e-9) return 0;
  return (active.mean - rest.mean) / pooled;
}

export function isWellTrained(link: Link): boolean {
  return (
    link.cal.rest.n > 4 &&
    link.cal.active.n > 4 &&
    Math.abs(link.cal.active.mean - link.cal.rest.mean) > STAT_FLOOR
  );
}

// ── Quality labels ───────────────────────────────────────────────────────
//
// Deliberately conservative wording. These bands describe the *session-local*
// separability of the two recorded states — they are NOT a claim about
// cognitive content, BCI performance, or clinical utility. Naming them so a
// reviewer wouldn't flinch.

export type QualityTier = "untrained" | "strong" | "usable" | "marginal" | "inconclusive";

export interface QualityLabel {
  tier: QualityTier;
  /** Short text shown to the user. */
  label: string;
  /** One-line interpretation, suitable for tooltips. */
  hint: string;
}

export function qualityFromD(absD: number, well: boolean): QualityLabel {
  if (!well) {
    return {
      tier: "untrained",
      label: "untrained",
      hint: "Not yet calibrated. Run the training overlay to record REST vs ACTIVE.",
    };
  }
  if (absD >= 1.2) {
    return {
      tier: "strong",
      label: "strong session contrast",
      hint: "REST and ACTIVE distributions separated cleanly within this session.",
    };
  }
  if (absD >= 0.8) {
    return {
      tier: "usable",
      label: "usable",
      hint: "Distributions separated, with some overlap. Driving the avatar will feel responsive but noisy.",
    };
  }
  if (absD >= 0.4) {
    return {
      tier: "marginal",
      label: "marginal",
      hint: "Substantial overlap between REST and ACTIVE. Expect the avatar to react slowly and inconsistently.",
    };
  }
  return {
    tier: "inconclusive",
    label: "inconclusive",
    hint: "REST and ACTIVE are statistically indistinguishable in this session. Try a stronger / clearer cue, or a different channel.",
  };
}

// ── Feature extraction ───────────────────────────────────────────────────

export function logPower(power: number): number {
  return Math.log10(Math.max(power, 0) + LOG_EPSILON);
}

// ── Per-link transfer function ───────────────────────────────────────────
//
// Trained mapping: linear between rest.mean and active.mean, clamped, then
// scaled by `gain` (centred on 0.5 so a gain of 1.0 is identity).
//
// Untrained fallback: gentle sigmoid around 0 (no calibration → no signal).
export function evaluateLink(
  link: Link,
  feature: number,
  prev: LinkRuntime,
): LinkRuntime {
  const next: LinkRuntime = {
    value: prev.value,
    norm: 0,
    logPower: feature,
  };

  let norm = 0;
  if (isWellTrained(link)) {
    const lo = link.cal.rest.mean;
    const hi = link.cal.active.mean;
    norm = (feature - lo) / (hi - lo);
  } else {
    // Not yet trained → contribute nothing (avatar stays neutral until the
    // user calibrates this link). This avoids the "locked face" problem
    // where a 0.5 baseline would stick on the avatar indefinitely.
    next.norm = 0;
    next.value = prev.value * link.smoothing; // decay any leftover smoothing
    return next;
  }
  next.norm = norm;
  if (link.invert) norm = 1 - norm;

  // Apply gain (centred on 0.5)
  const driven = 0.5 + (norm - 0.5) * link.gain;
  const clamped = Math.max(0, Math.min(1, driven));

  // EMA smoothing
  const a = link.smoothing;
  next.value = a * prev.value + (1 - a) * clamped;
  return next;
}

// ── Channel ranking after a 2-state calibration ──────────────────────────

export interface RankedFeature {
  channel: number;
  band: (typeof BAND_NAMES)[number];
  d: number;
  rest: number;
  active: number;
}

/** Rank every (channel × band) pair by |Cohen's d|. Top result is best. */
export function rankFeatures(
  restFrames: NeuroFrame[],
  activeFrames: NeuroFrame[],
  numChannels: number,
): RankedFeature[] {
  const out: RankedFeature[] = [];
  for (let ch = 0; ch < numChannels; ch++) {
    for (let b = 0; b < BAND_NAMES.length; b++) {
      const rest = newStats();
      const active = newStats();
      for (const f of restFrames) {
        const v = f.channels[ch]?.logBands[b];
        if (Number.isFinite(v)) pushStat(rest, v);
      }
      for (const f of activeFrames) {
        const v = f.channels[ch]?.logBands[b];
        if (Number.isFinite(v)) pushStat(active, v);
      }
      const d = cohenD(rest, active);
      if (Math.abs(d) < 1e-9) continue;
      out.push({
        channel: ch,
        band: BAND_NAMES[b],
        d,
        rest: rest.mean,
        active: active.mean,
      });
    }
  }
  out.sort((a, b) => Math.abs(b.d) - Math.abs(a.d));
  return out;
}

/** Convert a ranked feature into a fresh Link with calibration filled in. */
export function linkFromRanked(
  feature: RankedFeature,
  expression: string,
  restFrames: NeuroFrame[],
  activeFrames: NeuroFrame[],
): Link {
  const bandIdx = BAND_NAMES.indexOf(feature.band);
  const cal = newCalibration();
  for (const f of restFrames) {
    const v = f.channels[feature.channel]?.logBands[bandIdx];
    if (Number.isFinite(v)) pushStat(cal.rest, v);
  }
  for (const f of activeFrames) {
    const v = f.channels[feature.channel]?.logBands[bandIdx];
    if (Number.isFinite(v)) pushStat(cal.active, v);
  }
  return {
    id: `${feature.channel}-${feature.band}-${expression}-${Date.now().toString(36)}`,
    channel: feature.channel,
    band: feature.band,
    expression,
    cal,
    gain: 1.4,
    smoothing: 0.85,
    invert: feature.d < 0,
    enabled: true,
    snr: Math.abs(feature.d),
  };
}

export function newRuntime(): LinkRuntime {
  return { value: 0, norm: 0, logPower: 0 };
}
