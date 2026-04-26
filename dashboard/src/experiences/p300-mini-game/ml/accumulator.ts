// ─────────────────────────────────────────────────────────────────────────────
// P300 — Evidence accumulator
//
// The decoder produces a single scalar evidence per (candidate × flash).
// Real-world P300 decoding requires multiple flashes of each candidate
// before a reliable selection emerges. The accumulator performs Bayesian
// evidence integration:
//
//   prior: uniform over K candidates
//   per-flash log-likelihood-ratio ≈ λ · (decoder_score)
//     where λ is a per-subject gain (calibrated once)
//   posterior ∝ prior · exp(Σ LLR_per_flash)
//
// The commit criterion is entropy-based: when the posterior entropy
// falls below `commit_entropy` (and we have seen ≥ `min_flashes` per
// candidate), the top candidate is committed.
// ─────────────────────────────────────────────────────────────────────────────

import type {
  Epoch,
  CandidatePrediction,
  CandidateScore,
} from "../types";
import type { Decoder } from "./decoder";

export interface AccumulatorOptions {
  /** All candidate stimulus ids for this trial. */
  candidates: string[];
  /** Log-odds gain applied to raw decoder score (default 1 — LDA already is log-odds). */
  gain?: number;
  /** Minimum flashes per candidate before a commit is allowed. */
  min_flashes_per_candidate?: number;
  /** Maximum flashes per candidate (safety cap). */
  max_flashes_per_candidate?: number;
  /** Commit when entropy falls below this fraction of max entropy (0-1). */
  commit_entropy?: number;
}

interface CandState {
  id: string;
  logPosterior: number;
  evidenceSum: number;
  flashes: number;
  qualitySum: number;
}

export class EvidenceAccumulator {
  private states: Map<string, CandState>;
  readonly K: number;
  readonly gain: number;
  readonly minFlashes: number;
  readonly maxFlashes: number;
  readonly commitEntropy: number;

  constructor(
    private decoder: Decoder,
    public readonly trial_id: number,
    opts: AccumulatorOptions,
  ) {
    this.K = opts.candidates.length;
    this.gain = opts.gain ?? 1;
    this.minFlashes = opts.min_flashes_per_candidate ?? 3;
    this.maxFlashes = opts.max_flashes_per_candidate ?? 15;
    this.commitEntropy = opts.commit_entropy ?? 0.35;
    this.states = new Map();
    const uniform = Math.log(1 / this.K);
    for (const id of opts.candidates) {
      this.states.set(id, {
        id,
        logPosterior: uniform,
        evidenceSum: 0,
        flashes: 0,
        qualitySum: 0,
      });
    }
  }

  /** Ingest a single preprocessed epoch + its decoder score. */
  ingest(epoch: Epoch): void {
    const id = epoch.marker.stimulus_id;
    const st = this.states.get(id);
    if (!st) return; // epoch for a candidate not in this trial — ignore
    if (!this.decoder.isReady()) return;
    if (epoch.artifact) return; // skip artefacted epochs

    const raw = this.decoder.score(epoch);
    const llr = this.gain * raw;
    // One-vs-rest update: add llr to this candidate, subtract a fraction
    // spread across others (soft competition — preserves total mass before
    // normalisation). Simpler & more stable: add llr to this candidate,
    // then renormalise.
    st.logPosterior += llr;
    st.evidenceSum += raw;
    st.flashes += 1;
    st.qualitySum += epoch.quality;
    this.normalise();
  }

  snapshot(): CandidatePrediction {
    const scores: CandidateScore[] = [];
    let maxLP = -Infinity;
    for (const st of this.states.values()) {
      if (st.logPosterior > maxLP) maxLP = st.logPosterior;
    }
    let Z = 0;
    const probs: number[] = [];
    const ordered = Array.from(this.states.values());
    for (const st of ordered) {
      const p = Math.exp(st.logPosterior - maxLP);
      probs.push(p);
      Z += p;
    }
    let totalFlashes = 0, totalQual = 0;
    for (let i = 0; i < ordered.length; i++) {
      const st = ordered[i];
      const prob = probs[i] / Z;
      scores.push({
        stimulus_id: st.id,
        probability: prob,
        log_odds: st.logPosterior,
        observations: st.flashes,
        mean_evidence: st.flashes > 0 ? st.evidenceSum / st.flashes : 0,
      });
      totalFlashes += st.flashes;
      totalQual += st.qualitySum;
    }
    scores.sort((a, b) => b.probability - a.probability);

    // Entropy (normalised to [0,1] over uniform distribution).
    const Hmax = Math.log(this.K);
    let H = 0;
    for (const s of scores) {
      if (s.probability > 1e-9) H -= s.probability * Math.log(s.probability);
    }
    const uncertainty = Hmax > 0 ? H / Hmax : 0;

    const minFlashes = Math.min(...ordered.map((s) => s.flashes));
    const commit =
      minFlashes >= this.minFlashes &&
      (uncertainty < this.commitEntropy ||
        minFlashes >= this.maxFlashes);

    const quality = totalFlashes > 0 ? totalQual / totalFlashes : 0;

    return {
      trial_id: this.trial_id,
      ranking: scores,
      top_candidate: scores[0].stimulus_id,
      confidence: scores[0].probability,
      uncertainty,
      commit,
      quality,
    };
  }

  private normalise(): void {
    // Subtract max log-posterior — keeps values bounded.
    let maxLP = -Infinity;
    for (const st of this.states.values()) {
      if (st.logPosterior > maxLP) maxLP = st.logPosterior;
    }
    if (!Number.isFinite(maxLP)) return;
    for (const st of this.states.values()) {
      st.logPosterior -= maxLP;
    }
  }
}
