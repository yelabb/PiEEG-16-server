import { describe, it, expect } from "vitest";
import { ShrinkageLDA } from "../../experiences/p300-mini-game/ml/shrinkageLda";
import { EvidenceAccumulator } from "../../experiences/p300-mini-game/ml/accumulator";
import type { Epoch, StimulusMarker, CalibrationConfig } from "../../experiences/p300-mini-game/types";

function mkMarker(stimulus_id: string, label?: "target" | "nontarget"): StimulusMarker {
  return {
    marker_id: Math.random(), stimulus_id, stimulus_type: "flash",
    timestamp: 0, perf_timestamp: 0, trial_id: 1, sequence_id: 0,
    presentation_duration: 100, visual_state: "onset",
    target_label: label ?? null,
  };
}

/** Synthetic epoch: P300-like bump on channel 0 for targets. */
function synth(target: boolean, noise = 1): Epoch {
  const nCh = 4;
  const nS = 40;
  const data: Float32Array[] = [];
  for (let c = 0; c < nCh; c++) {
    const row = new Float32Array(nS);
    for (let i = 0; i < nS; i++) {
      row[i] = (Math.random() - 0.5) * noise;
      if (target && c === 0) {
        // P300-like positive bump around 300 ms (sample 15 at 50 Hz)
        const dx = (i - 15) / 6;
        row[i] += 8 * Math.exp(-dx * dx);
      }
    }
    data.push(row);
  }
  return {
    marker: mkMarker(target ? "T" : "N", target ? "target" : "nontarget"),
    data, sample_rate: 50, baseline_samples: 10, post_samples: 30,
    quality: 1, artifact: false,
  };
}

const config: CalibrationConfig = {
  channels: [0, 1, 2, 3], baseline_ms: 200, post_ms: 800,
  decimation: 5, subject_id: "test",
};

describe("ShrinkageLDA", () => {
  it("trains and separates synthetic P300 from noise", () => {
    const epochs: Epoch[] = [];
    const labels: boolean[] = [];
    // Unbalanced classes — typical P300 (~1:5 target:nontarget)
    for (let i = 0; i < 40; i++) { epochs.push(synth(true)); labels.push(true); }
    for (let i = 0; i < 160; i++) { epochs.push(synth(false)); labels.push(false); }

    const lda = new ShrinkageLDA(config);
    const metrics = lda.fit(epochs, labels);

    expect(lda.isReady()).toBe(true);
    expect(metrics.train_accuracy).toBeGreaterThan(0.75);
    expect(metrics.cv_accuracy).toBeGreaterThan(0.65);
    expect(metrics.training_size).toEqual({ target: 40, nontarget: 160 });

    // Score sign should favour targets on average
    let tS = 0, nS = 0;
    for (let i = 0; i < 20; i++) tS += lda.score(synth(true));
    for (let i = 0; i < 20; i++) nS += lda.score(synth(false));
    expect(tS / 20).toBeGreaterThan(nS / 20);
  });

  it("serialises and restores model state", () => {
    const epochs: Epoch[] = [];
    const labels: boolean[] = [];
    for (let i = 0; i < 30; i++) { epochs.push(synth(true)); labels.push(true); }
    for (let i = 0; i < 60; i++) { epochs.push(synth(false)); labels.push(false); }

    const lda = new ShrinkageLDA(config);
    lda.fit(epochs, labels);
    const serial = lda.serialise();
    expect(serial.kind).toBe("shrinkage-lda-v1");

    const restored = new ShrinkageLDA(config);
    restored.deserialise(serial);
    const probe = synth(true);
    expect(restored.score(probe)).toBeCloseTo(lda.score(probe), 4);
  });

  it("throws on too few training samples", () => {
    const lda = new ShrinkageLDA(config);
    expect(() => lda.fit([synth(true), synth(false)], [true, false])).toThrow();
  });
});

describe("EvidenceAccumulator", () => {
  it("accumulates posterior toward the true target", () => {
    const epochs: Epoch[] = [];
    const labels: boolean[] = [];
    for (let i = 0; i < 40; i++) { epochs.push(synth(true)); labels.push(true); }
    for (let i = 0; i < 160; i++) { epochs.push(synth(false)); labels.push(false); }
    const lda = new ShrinkageLDA(config);
    lda.fit(epochs, labels);

    const acc = new EvidenceAccumulator(lda, 42, {
      candidates: ["T", "A", "B", "C"],
      min_flashes_per_candidate: 1,
    });

    // Flash each candidate 5 times; "T" gets target-like epochs, others noise.
    for (let rep = 0; rep < 5; rep++) {
      acc.ingest({ ...synth(true), marker: mkMarker("T") });
      for (const id of ["A", "B", "C"]) {
        acc.ingest({ ...synth(false), marker: mkMarker(id) });
      }
    }
    const snap = acc.snapshot();
    expect(snap.top_candidate).toBe("T");
    expect(snap.confidence).toBeGreaterThan(0.5);
    expect(snap.ranking).toHaveLength(4);
    expect(snap.ranking[0].observations).toBe(5);
  });

  it("ignores artefacted epochs", () => {
    const lda = new ShrinkageLDA(config);
    // Fit with a tiny set so decoder is ready.
    const eps: Epoch[] = [];
    const lbs: boolean[] = [];
    for (let i = 0; i < 20; i++) { eps.push(synth(true)); lbs.push(true); }
    for (let i = 0; i < 20; i++) { eps.push(synth(false)); lbs.push(false); }
    lda.fit(eps, lbs);

    const acc = new EvidenceAccumulator(lda, 1, { candidates: ["T", "A"] });
    const bad = synth(true);
    bad.artifact = true;
    acc.ingest({ ...bad, marker: mkMarker("T") });
    expect(acc.snapshot().ranking[0].observations).toBe(0);
  });
});
