// ─────────────────────────────────────────────────────────────────────────────
// P300 mini-game — Core type contracts
//
// This file defines the ML-contract boundary between the four architectural
// layers. Game developers may freely design any visual experience, as long
// as they emit StimulusMarker events through the MarkerBus. ML developers
// consume markers + EEG and produce CandidatePrediction results. Neither
// side touches the other's internals.
// ─────────────────────────────────────────────────────────────────────────────

/** Absolute wall-clock time in seconds (server-aligned, matches WSSampleMessage.t). */
export type EegTimestamp = number;

/** Monotonic `performance.now()` in milliseconds — used for precise UI timing. */
export type PerfTimestamp = number;

// ─── Stimulus markers (Marker Layer output) ──────────────────────────────────

/**
 * Describes what a stimulus represents at the game level. The ML layer does
 * not interpret these — they are opaque labels that identify a candidate
 * across flashes so evidence can be accumulated per candidate.
 */
export type StimulusType =
  | "flash" // a brief highlight / reveal of a candidate
  | "selection" // user (or decoder) committed to a candidate
  | "cue" // pre-trial instruction/target cue (during calibration)
  | "feedback" // post-trial feedback animation
  | "baseline" // baseline / rest window
  | "custom";

/** Stimulus visual state at the moment the marker fires. */
export type StimulusVisualState =
  | "onset"
  | "offset"
  | "peak"
  | "hidden"
  | "revealed";

/**
 * The canonical stimulus event. Every flash, highlight, reveal or selection
 * moment in the game MUST produce one of these, pushed to the MarkerBus.
 *
 * `stimulus_id` identifies the specific visible token (e.g. a 3×3 cell, a
 * letter, a monster). `trial_id` groups the stimuli belonging to a single
 * user selection (one trial = many repetitions = many flashes). `sequence_id`
 * groups repetitions within a trial (all candidates flashed once = one seq).
 */
export interface StimulusMarker {
  /** Local monotonic id within the current session (1…∞). */
  marker_id: number;
  /** Candidate identifier — ML accumulates evidence per candidate. */
  stimulus_id: string;
  /** Semantic type of the event. */
  stimulus_type: StimulusType;
  /** Optional spatial / grouping info for explainability. */
  stimulus_position?: { row?: number; col?: number; group?: string };
  /** EEG-stream-aligned timestamp (seconds, server clock). */
  timestamp: EegTimestamp;
  /** High-resolution local clock (ms) — used to cross-check sync drift. */
  perf_timestamp: PerfTimestamp;
  /** Trial ID — one decoded selection = one trial. */
  trial_id: number;
  /** Sequence / repetition number inside a trial (0-indexed). */
  sequence_id: number;
  /** Planned visible duration in ms (actual may differ — see `offset` marker). */
  presentation_duration: number;
  /** Visual state when this marker was emitted. */
  visual_state: StimulusVisualState;
  /**
   * When known (calibration / oddball), the ground-truth label:
   *   - `"target"` if `stimulus_id` matches the cued target
   *   - `"nontarget"` if not
   *   - `null` / undefined during free operation
   */
  target_label?: "target" | "nontarget" | null;
  /** All candidate ids in this trial (for accumulator book-keeping). */
  candidate_set?: string[];
  /** Arbitrary game-specific payload (theme, animation id, etc.). */
  meta?: Record<string, unknown>;
}

// ─── Epochs (EEG Layer output → ML Layer input) ──────────────────────────────

export interface Epoch {
  /** The marker that triggered this epoch. */
  marker: StimulusMarker;
  /** Epoch data, shape [numChannels][numSamples]. µV, float32. */
  data: Float32Array[];
  /** Sample rate of the epoch (may differ from source if decimated). */
  sample_rate: number;
  /** Pre-stimulus baseline length in samples (included in `data`). */
  baseline_samples: number;
  /** Post-stimulus length in samples (included in `data`). */
  post_samples: number;
  /** Quality score in [0,1] — 1 means clean, 0 means unusable. */
  quality: number;
  /** True if the epoch is believed to contain motion/blink/clip artifacts. */
  artifact: boolean;
}

// ─── Predictions (ML Layer output) ───────────────────────────────────────────

export interface CandidateScore {
  /** Candidate stimulus id. */
  stimulus_id: string;
  /** Posterior probability this candidate is the intended target, [0,1]. */
  probability: number;
  /** Raw (pre-softmax) log-odds score. */
  log_odds: number;
  /** Number of epochs accumulated for this candidate. */
  observations: number;
  /** Mean single-trial classifier output (for explainability). */
  mean_evidence: number;
}

export interface CandidatePrediction {
  /** Trial this prediction refers to. */
  trial_id: number;
  /** Scores for every candidate, sorted best-first. */
  ranking: CandidateScore[];
  /** Top candidate shortcut (same as ranking[0].stimulus_id). */
  top_candidate: string;
  /** Confidence in top candidate in [0,1]. */
  confidence: number;
  /** Uncertainty (entropy over ranking), normalised to [0,1]. */
  uncertainty: number;
  /**
   * True if the decoder recommends stopping (confidence threshold met) —
   * false if more repetitions would meaningfully improve the result.
   */
  commit: boolean;
  /** Aggregate EEG-quality score in [0,1] across all accumulated epochs. */
  quality: number;
}

// ─── Calibration / model artefacts (ML Layer persistent state) ───────────────

export interface CalibrationConfig {
  /** Channels fed to the decoder (indices into the 16-ch array). */
  channels: number[];
  /** Pre-stimulus baseline length (ms). */
  baseline_ms: number;
  /** Post-stimulus window length (ms). */
  post_ms: number;
  /** Decimation factor applied to the raw 250 Hz stream. */
  decimation: number;
  /** Subject id — arbitrary free-form string, used as storage key. */
  subject_id: string;
}

/**
 * Opaque serialised model. `kind` identifies the decoder; `payload` is a
 * JSON-serialisable blob understood only by the concrete implementation.
 */
export interface SerialisedModel {
  kind: "shrinkage-lda-v1" | "tfjs" | "onnx" | string;
  version: number;
  created_at: number;
  subject_id: string;
  config: CalibrationConfig;
  /** Aggregate training accuracy measured during calibration. */
  train_accuracy?: number;
  /** Aggregate cross-validated accuracy measured during calibration. */
  cv_accuracy?: number;
  /** Number of (target, nontarget) training epochs used. */
  training_size?: { target: number; nontarget: number };
  payload: unknown;
}

// ─── Review/Replay artefacts (Layer 4) ───────────────────────────────────────

export interface SessionRecord {
  /** Unique session id. */
  session_id: string;
  /** Subject id / profile. */
  subject_id: string;
  /** ISO timestamp of session start. */
  started_at: string;
  /** Game theme / preset name (opaque to ML). */
  theme: string;
  /** All stimulus markers emitted during the session. */
  markers: StimulusMarker[];
  /** All EEG samples recorded (optional — may be large). */
  eeg?: {
    sample_rate: number;
    /** Flat [t, ch0, ch1, …] rows. */
    samples: number[][];
  };
  /** Final predictions (one per trial). */
  predictions: CandidatePrediction[];
  /** Any notes / annotations the user added during review. */
  notes?: string;
}
