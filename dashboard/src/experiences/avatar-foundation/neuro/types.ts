// ─────────────────────────────────────────────────────────────────────────────
// Neurofeedback Avatar — shared types
//
// A "Link" connects an EEG feature (channel × frequency band) to an avatar
// facial expression. Each link has its own calibration (REST / ACTIVE means)
// and a few transfer-function knobs (gain, smoothing, invert).
//
// Mathematics is kept transparent: linear interpolation between trained rest
// and active means, clamped to [0, 1], then EMA-smoothed. The neuroscience
// signal-quality score is Cohen's d (a.k.a. d-prime) over log-power features.
// ─────────────────────────────────────────────────────────────────────────────

export const BAND_NAMES = ["Delta", "Theta", "Alpha", "Beta", "Gamma"] as const;
export type BandName = (typeof BAND_NAMES)[number];

export const BAND_COLORS: Record<BandName, string> = {
  Delta: "#8b5cf6",
  Theta: "#06b6d4",
  Alpha: "#22c55e",
  Beta: "#f59e0b",
  Gamma: "#ef4444",
};

export const BAND_HINTS: Record<BandName, string> = {
  Delta: "0.5–4 Hz · sleep / deep states",
  Theta: "4–8 Hz · drowsy / meditation",
  Alpha: "8–13 Hz · relaxed eyes-closed",
  Beta: "13–30 Hz · active thought / focus",
  Gamma: "30–100 Hz · binding / arousal",
};

/** Welford-style running statistics over log-power. */
export interface Stats {
  n: number;
  mean: number;
  m2: number; // sum of squared deviations
}

export interface CalibrationPair {
  rest: Stats;
  active: Stats;
}

export interface Link {
  id: string;
  channel: number; // 0-based electrode index
  band: BandName;
  expression: string; // VRM expression name or glTF morph name
  /** Calibration of log-power features for this (channel, band). */
  cal: CalibrationPair;
  /** Post-normalisation gain (0.1 … 4). */
  gain: number;
  /** EMA smoothing on the output 0..1 (0 = none, 0.95 = heavy). */
  smoothing: number;
  /** Flip the mapping (e.g. relax-driven smile when alpha is the cue). */
  invert: boolean;
  enabled: boolean;
  /** Frozen Cohen's d at end of last calibration (0 if untrained). */
  snr: number;
  /** Optional human label override. */
  label?: string;
}

export interface LinkRuntime {
  /** Latest 0..1 weight written to the avatar. */
  value: number;
  /** Latest normalised position between rest (0) and active (1) before clamp. */
  norm: number;
  /** Latest log10(power). */
  logPower: number;
}

export interface ChannelSnapshot {
  /** Per-band log10(µV²/Hz + ε) for this channel. */
  logBands: Float32Array; // length 5
  /** Dominant band index (0..4). */
  dominantBand: number;
  /** Mean of the channel's recent absolute amplitude (µV). */
  rms: number;
}

export interface NeuroFrame {
  /** Per-channel snapshot. */
  channels: ChannelSnapshot[];
  /** Monotonic timestamp (ms). */
  ts: number;
  /** True once at least one full FFT window has been computed. */
  ready: boolean;
}

/** Standard 10-20 montage hints — used as channel labels when available. */
export const MONTAGE_HINTS: string[] = [
  // PiEEG-8 default
  "Fp1", "Fp2", "C3", "C4", "T5", "T6", "O1", "O2",
  // PiEEG-16 / IronBCI-32 extensions (best-effort)
  "F3", "F4", "F7", "F8", "P3", "P4", "Fz", "Cz",
  "Pz", "T3", "T4", "FC1", "FC2", "CP1", "CP2", "PO3",
  "PO4", "FT9", "FT10", "TP9", "TP10", "AF3", "AF4", "Oz",
];

export function channelLabel(idx: number): string {
  const hint = MONTAGE_HINTS[idx];
  return hint ? `Ch${idx + 1} · ${hint}` : `Ch${idx + 1}`;
}
