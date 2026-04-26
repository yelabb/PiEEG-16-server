// ─────────────────────────────────────────────────────────────────────────────
// P300 — Shrinkage LDA decoder (Ledoit-Wolf)
//
// Regularised Linear Discriminant Analysis with closed-form shrinkage of
// the covariance matrix. This is the de-facto baseline for P300
// speller / oddball decoding: it trains in one shot, handles the
// high-dim / low-sample-size regime well, and produces a single scalar
// evidence score that maps cleanly into a Bayesian accumulator.
//
// Reference:
//   Blankertz et al. (2011) "Single-trial analysis and classification of
//   ERP components — a tutorial." NeuroImage 56(2).
//
// Feature vector: channels × decimated-samples, flattened (row-major).
// Typical size: 8 ch × 40 samples = 320 features; training set ~200
// epochs → trains in a few ms.
// ─────────────────────────────────────────────────────────────────────────────

import type { Decoder, TrainingMetrics } from "./decoder";
import type { Epoch, SerialisedModel, CalibrationConfig } from "../types";
import { epochToFeatures } from "../eeg/preprocessing";

const KIND = "shrinkage-lda-v1";

interface LDAPayload {
  weights: number[]; // length D
  bias: number;
  featureMean: number[]; // length D (for normalisation)
  featureStd: number[]; // length D
  D: number;
}

export class ShrinkageLDA implements Decoder {
  readonly kind = KIND;
  private payload: LDAPayload | null = null;

  constructor(public readonly config: CalibrationConfig) {}

  isReady(): boolean {
    return this.payload !== null;
  }

  fit(epochs: Epoch[], labels: boolean[]): TrainingMetrics {
    if (epochs.length !== labels.length || epochs.length < 10) {
      throw new Error(`ShrinkageLDA.fit: need ≥10 labelled epochs (got ${epochs.length}).`);
    }
    const D = epochs[0].data.length * (epochs[0].data[0]?.length ?? 0);
    if (D === 0) throw new Error("ShrinkageLDA.fit: empty epochs.");

    // Build design matrix X (N×D) and labels y (N).
    const X: Float32Array[] = epochs.map(epochToFeatures);
    const N = X.length;

    // z-score normalisation for numerical stability.
    const featureMean = new Array<number>(D).fill(0);
    for (const x of X) for (let j = 0; j < D; j++) featureMean[j] += x[j];
    for (let j = 0; j < D; j++) featureMean[j] /= N;

    const featureStd = new Array<number>(D).fill(0);
    for (const x of X) {
      for (let j = 0; j < D; j++) {
        const d = x[j] - featureMean[j];
        featureStd[j] += d * d;
      }
    }
    for (let j = 0; j < D; j++) {
      featureStd[j] = Math.sqrt(featureStd[j] / Math.max(1, N - 1)) || 1;
    }

    // Normalised matrix Z (N×D) as Float64Array for covariance math.
    const Z: Float64Array[] = X.map((row) => {
      const z = new Float64Array(D);
      for (let j = 0; j < D; j++) z[j] = (row[j] - featureMean[j]) / featureStd[j];
      return z;
    });

    // Class means.
    const muT = new Float64Array(D);
    const muN = new Float64Array(D);
    let nT = 0, nN = 0;
    for (let i = 0; i < N; i++) {
      const z = Z[i];
      if (labels[i]) {
        for (let j = 0; j < D; j++) muT[j] += z[j];
        nT++;
      } else {
        for (let j = 0; j < D; j++) muN[j] += z[j];
        nN++;
      }
    }
    if (nT < 3 || nN < 3) {
      throw new Error(`ShrinkageLDA.fit: need ≥3 examples per class (got T=${nT}, N=${nN}).`);
    }
    for (let j = 0; j < D; j++) { muT[j] /= nT; muN[j] /= nN; }

    // Pooled within-class covariance (D×D) with Ledoit-Wolf shrinkage
    // toward scaled identity: Σ̂ = (1-λ)Σ + λ·ν·I.
    const Sigma = new Float64Array(D * D);
    for (let i = 0; i < N; i++) {
      const z = Z[i];
      const mu = labels[i] ? muT : muN;
      const diff = new Float64Array(D);
      for (let j = 0; j < D; j++) diff[j] = z[j] - mu[j];
      // outer product add
      for (let a = 0; a < D; a++) {
        const da = diff[a];
        if (da === 0) continue;
        const row = a * D;
        for (let b = 0; b < D; b++) {
          Sigma[row + b] += da * diff[b];
        }
      }
    }
    const dof = Math.max(1, N - 2);
    for (let k = 0; k < D * D; k++) Sigma[k] /= dof;

    // Shrinkage target: ν·I where ν = mean(diag(Σ)).
    let nu = 0;
    for (let j = 0; j < D; j++) nu += Sigma[j * D + j];
    nu /= D;

    // Closed-form Ledoit-Wolf intensity (Ledoit & Wolf 2004, Blankertz 2011).
    // λ = sum Var(s_ij) / sum (s_ij - t_ij)^2
    let num = 0, den = 0;
    const meanS = Sigma; // use sample covariance as estimate of mean
    const varS = new Float64Array(D * D);
    for (let i = 0; i < N; i++) {
      const z = Z[i];
      const mu = labels[i] ? muT : muN;
      for (let a = 0; a < D; a++) {
        const da = z[a] - mu[a];
        const row = a * D;
        for (let b = 0; b < D; b++) {
          const db = z[b] - mu[b];
          const s = da * db;
          const d = s - meanS[row + b];
          varS[row + b] += d * d;
        }
      }
    }
    for (let a = 0; a < D; a++) {
      const row = a * D;
      for (let b = 0; b < D; b++) {
        const idx = row + b;
        varS[idx] /= Math.max(1, (N - 1) * (N - 1));
        num += varS[idx];
        const target = a === b ? nu : 0;
        const diffST = meanS[idx] - target;
        den += diffST * diffST;
      }
    }
    let lambda = den > 0 ? num / den : 0.1;
    if (!Number.isFinite(lambda)) lambda = 0.1;
    lambda = Math.max(0.01, Math.min(1, lambda));

    const ShrunkSigma = new Float64Array(D * D);
    for (let a = 0; a < D; a++) {
      const row = a * D;
      for (let b = 0; b < D; b++) {
        const t = a === b ? nu : 0;
        ShrunkSigma[row + b] = (1 - lambda) * meanS[row + b] + lambda * t;
      }
    }

    // Solve Σ · w = (μT - μN)   →   w = Σ⁻¹ (μT - μN)
    const diffMu = new Float64Array(D);
    for (let j = 0; j < D; j++) diffMu[j] = muT[j] - muN[j];

    const w = solveLinearSystem(ShrunkSigma, diffMu, D);
    if (!w) throw new Error("ShrinkageLDA.fit: singular covariance after shrinkage.");

    // Bias: put decision boundary at midpoint between class means, with
    // class-prior offset.
    let bias = 0;
    for (let j = 0; j < D; j++) bias += w[j] * 0.5 * (muT[j] + muN[j]);
    bias = -bias + Math.log(nT / nN);

    this.payload = {
      weights: Array.from(w),
      bias,
      featureMean,
      featureStd,
      D,
    };

    // Metrics: training accuracy + 5-fold CV.
    const trainAcc = evaluate(X, labels, this.payload);
    const cvAcc = crossValidate(X, labels, 5);
    const auc = computeAuc(X, labels, this.payload);

    return {
      train_accuracy: trainAcc,
      cv_accuracy: cvAcc,
      training_size: { target: nT, nontarget: nN },
      auc,
    };
  }

  score(epoch: Epoch): number {
    if (!this.payload) throw new Error("ShrinkageLDA.score: model not fit.");
    const x = epochToFeatures(epoch);
    if (x.length !== this.payload.D) {
      throw new Error(
        `ShrinkageLDA.score: feature-length mismatch (epoch=${x.length}, model=${this.payload.D}). ` +
        "Channel set or decimation likely changed since calibration \u2014 re-train the subject.",
      );
    }
    return linearScore(x, this.payload);
  }

  serialise(): SerialisedModel {
    if (!this.payload) throw new Error("ShrinkageLDA.serialise: model not fit.");
    return {
      kind: KIND,
      version: 1,
      created_at: Date.now(),
      subject_id: this.config.subject_id,
      config: this.config,
      payload: this.payload,
    };
  }

  deserialise(model: SerialisedModel): void {
    if (model.kind !== KIND) throw new Error(`ShrinkageLDA.deserialise: kind mismatch (${model.kind}).`);
    const p = model.payload as Partial<LDAPayload> | null;
    if (
      !p ||
      typeof p.D !== "number" ||
      !Array.isArray(p.weights) ||
      !Array.isArray(p.featureMean) ||
      !Array.isArray(p.featureStd) ||
      typeof p.bias !== "number" ||
      p.weights.length !== p.D ||
      p.featureMean.length !== p.D ||
      p.featureStd.length !== p.D
    ) {
      throw new Error("ShrinkageLDA.deserialise: malformed payload.");
    }
    this.payload = p as LDAPayload;
  }
}

// ── Math helpers ─────────────────────────────────────────────────────────────

function linearScore(x: Float32Array, p: LDAPayload): number {
  let s = p.bias;
  const w = p.weights;
  for (let j = 0; j < p.D; j++) {
    const z = (x[j] - p.featureMean[j]) / p.featureStd[j];
    s += w[j] * z;
  }
  return s;
}

function evaluate(X: Float32Array[], y: boolean[], p: LDAPayload): number {
  let correct = 0;
  for (let i = 0; i < X.length; i++) {
    const pred = linearScore(X[i], p) > 0;
    if (pred === y[i]) correct++;
  }
  return correct / X.length;
}

function crossValidate(X: Float32Array[], y: boolean[], k: number): number {
  // Stratified k-fold: split each class independently, then round-robin into
  // folds. Without this, an unbalanced calibration set (typical P300 ~1:8
  // target:non-target) routinely produces folds with zero target epochs,
  // which silently collapse to a one-class predictor and report bogus high
  // CV accuracy.
  const tIdx: number[] = [];
  const nIdx: number[] = [];
  for (let i = 0; i < X.length; i++) (y[i] ? tIdx : nIdx).push(i);
  // Deterministic scramble per class (independent of the other class).
  const scramble = (arr: number[]) =>
    arr.sort((a, b) => Math.sin(a * 12.9898) - Math.sin(b * 12.9898));
  scramble(tIdx);
  scramble(nIdx);

  const folds: number[][] = Array.from({ length: k }, () => []);
  for (let i = 0; i < tIdx.length; i++) folds[i % k].push(tIdx[i]);
  for (let i = 0; i < nIdx.length; i++) folds[i % k].push(nIdx[i]);

  let accSum = 0;
  for (let f = 0; f < k; f++) {
    const test = new Set(folds[f]);
    const trainX: Float32Array[] = [], trainY: boolean[] = [];
    const testX: Float32Array[] = [], testY: boolean[] = [];
    for (let i = 0; i < X.length; i++) {
      if (test.has(i)) { testX.push(X[i]); testY.push(y[i]); }
      else { trainX.push(X[i]); trainY.push(y[i]); }
    }
    // Quick-fit a shrinkage LDA inline (reuses top-level machinery via a
    // throwaway Decoder would recurse — so we inline a fast path).
    try {
      const p = fitQuickLDA(trainX, trainY);
      let correct = 0;
      for (let i = 0; i < testX.length; i++) {
        const pred = linearScore(testX[i], p) > 0;
        if (pred === testY[i]) correct++;
      }
      accSum += correct / Math.max(1, testX.length);
    } catch {
      accSum += 0.5;
    }
  }
  return accSum / k;
}

function fitQuickLDA(X: Float32Array[], y: boolean[]): LDAPayload {
  // Simplified (diagonal-only shrinkage) LDA for CV folds — fast and
  // avoids the O(D²·N) Ledoit-Wolf work on every fold.
  const D = X[0].length;
  const N = X.length;

  // Refuse degenerate folds. Without this guard, a fold containing only one
  // class trains a meaningless classifier (NaN-laden weights or a constant
  // predictor) which still scores well on a same-class test fold.
  let nTPre = 0, nNPre = 0;
  for (let i = 0; i < N; i++) (y[i] ? nTPre++ : nNPre++);
  if (nTPre === 0 || nNPre === 0) {
    throw new Error("fitQuickLDA: degenerate fold (single-class training set).");
  }

  const fm = new Array<number>(D).fill(0);
  for (const x of X) for (let j = 0; j < D; j++) fm[j] += x[j];
  for (let j = 0; j < D; j++) fm[j] /= N;

  const fs = new Array<number>(D).fill(0);
  for (const x of X) for (let j = 0; j < D; j++) { const d = x[j] - fm[j]; fs[j] += d * d; }
  for (let j = 0; j < D; j++) fs[j] = Math.sqrt(fs[j] / Math.max(1, N - 1)) || 1;

  const muT = new Float64Array(D); const muN = new Float64Array(D);
  let nT = 0, nN = 0;
  const varPool = new Float64Array(D);
  for (let i = 0; i < N; i++) {
    const z = new Float64Array(D);
    for (let j = 0; j < D; j++) z[j] = (X[i][j] - fm[j]) / fs[j];
    if (y[i]) { for (let j = 0; j < D; j++) muT[j] += z[j]; nT++; }
    else { for (let j = 0; j < D; j++) muN[j] += z[j]; nN++; }
  }
  for (let j = 0; j < D; j++) { muT[j] /= Math.max(1, nT); muN[j] /= Math.max(1, nN); }
  for (let i = 0; i < N; i++) {
    const mu = y[i] ? muT : muN;
    for (let j = 0; j < D; j++) {
      const z = (X[i][j] - fm[j]) / fs[j];
      const d = z - mu[j];
      varPool[j] += d * d;
    }
  }
  for (let j = 0; j < D; j++) varPool[j] = varPool[j] / Math.max(1, N - 2) + 0.1; // ridge

  const w = new Array<number>(D);
  for (let j = 0; j < D; j++) w[j] = (muT[j] - muN[j]) / varPool[j];
  let bias = 0;
  for (let j = 0; j < D; j++) bias += w[j] * 0.5 * (muT[j] + muN[j]);
  bias = -bias + Math.log(Math.max(1, nT) / Math.max(1, nN));

  return { weights: w, bias, featureMean: fm, featureStd: fs, D };
}

function computeAuc(X: Float32Array[], y: boolean[], p: LDAPayload): number {
  const scored = X.map((x, i) => ({ s: linearScore(x, p), y: y[i] }));
  scored.sort((a, b) => b.s - a.s);
  let tp = 0, fp = 0, lastTp = 0, lastFp = 0, auc = 0;
  const P = y.filter(Boolean).length;
  const N = y.length - P;
  if (P === 0 || N === 0) return 0.5;
  for (const s of scored) {
    if (s.y) tp++; else fp++;
    // trapezoidal
    auc += ((fp - lastFp) * (tp + lastTp)) / 2;
    lastTp = tp; lastFp = fp;
  }
  return auc / (P * N);
}

// ── Gaussian elimination with partial pivoting ───────────────────────────────

function solveLinearSystem(A: Float64Array, b: Float64Array, D: number): Float64Array | null {
  // Augment and reduce. A is D*D row-major, b is D.
  const M = new Float64Array(D * (D + 1));
  for (let i = 0; i < D; i++) {
    for (let j = 0; j < D; j++) M[i * (D + 1) + j] = A[i * D + j];
    M[i * (D + 1) + D] = b[i];
  }
  for (let i = 0; i < D; i++) {
    // Pivot
    let piv = i;
    let pivAbs = Math.abs(M[i * (D + 1) + i]);
    for (let r = i + 1; r < D; r++) {
      const v = Math.abs(M[r * (D + 1) + i]);
      if (v > pivAbs) { pivAbs = v; piv = r; }
    }
    if (pivAbs < 1e-12) return null;
    if (piv !== i) {
      for (let j = i; j <= D; j++) {
        const tmp = M[i * (D + 1) + j];
        M[i * (D + 1) + j] = M[piv * (D + 1) + j];
        M[piv * (D + 1) + j] = tmp;
      }
    }
    const diag = M[i * (D + 1) + i];
    for (let r = 0; r < D; r++) {
      if (r === i) continue;
      const f = M[r * (D + 1) + i] / diag;
      if (f === 0) continue;
      for (let j = i; j <= D; j++) {
        M[r * (D + 1) + j] -= f * M[i * (D + 1) + j];
      }
    }
  }
  const x = new Float64Array(D);
  for (let i = 0; i < D; i++) x[i] = M[i * (D + 1) + D] / M[i * (D + 1) + i];
  return x;
}
