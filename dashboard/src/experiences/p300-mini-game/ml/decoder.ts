// ─────────────────────────────────────────────────────────────────────────────
// P300 — ML Layer: decoder interface
//
// Decoders are hot-swappable. The default is a pure-TS shrinkage LDA
// (fast, robust, and trains in <1 s on ~200 epochs — perfect for an
// in-browser calibration session). The interface is deliberately minimal
// so a TensorFlow.js CNN, an ONNX Runtime Web model, or a cloud-trained
// transformer can drop in without touching game / marker / accumulator
// code. Implementations must:
//
//   • accept preprocessed Epochs (post-baseline, post-decimation)
//   • return a single scalar evidence per epoch (higher = more target-like)
//   • serialise to SerialisedModel for persistence / cross-session reuse
//   • report calibration metrics (train + CV accuracy) on `fit()`
// ─────────────────────────────────────────────────────────────────────────────

import type { Epoch, SerialisedModel, CalibrationConfig } from "../types";

export interface TrainingMetrics {
  train_accuracy: number;
  cv_accuracy: number;
  training_size: { target: number; nontarget: number };
  auc?: number;
}

export interface Decoder {
  readonly kind: string;
  readonly config: CalibrationConfig;

  /**
   * Fit on labelled epochs. Labels: true = target, false = nontarget.
   * Returns calibration metrics.
   */
  fit(epochs: Epoch[], labels: boolean[]): TrainingMetrics;

  /**
   * Produce a single-trial evidence score for one epoch. Higher means
   * more target-like. Interpreted as log-odds by the accumulator.
   */
  score(epoch: Epoch): number;

  /** Whether the model has been fit and is ready to predict. */
  isReady(): boolean;

  /** Export for persistence. */
  serialise(): SerialisedModel;

  /** Restore state from a SerialisedModel. Throws if `kind` mismatches. */
  deserialise(model: SerialisedModel): void;
}
