import { describe, it, expect } from "vitest";
import { preprocessEpoch, epochToFeatures } from "../../experiences/p300-mini-game/eeg/preprocessing";
import type { StimulusMarker } from "../../experiences/p300-mini-game/types";

function mkMarker(): StimulusMarker {
  return {
    marker_id: 1, stimulus_id: "a", stimulus_type: "flash",
    timestamp: 0, perf_timestamp: 0, trial_id: 1, sequence_id: 0,
    presentation_duration: 100, visual_state: "onset",
  };
}

describe("preprocessEpoch", () => {
  it("baseline-corrects the pre-stim window", () => {
    // 250 Hz, 200 ms baseline = 50 samples, 800 ms post = 200 samples.
    const raw = [new Float32Array(250).fill(10)]; // constant DC offset
    const ep = preprocessEpoch(raw, mkMarker(), {
      baseline_samples: 50,
      decimation: 5,
      hp_hz: 0.5,
      lp_hz: 20,
    });
    // After baseline + HP, the mean of the channel should be near zero.
    const ch = ep.data[0];
    let mean = 0; for (let i = 0; i < ch.length; i++) mean += ch[i];
    mean /= ch.length;
    expect(Math.abs(mean)).toBeLessThan(1);
    expect(ep.sample_rate).toBe(50);
    expect(ep.baseline_samples).toBe(10); // 50 / dec=5
  });

  it("flags high-amplitude epochs as artifacts", () => {
    const raw = [new Float32Array(250).fill(300)]; // above 150 µV threshold
    const ep = preprocessEpoch(raw, mkMarker(), {
      baseline_samples: 50, decimation: 5,
    });
    // Use a sustained post-stim bump that survives the LPF (20 Hz).
    const rawSpike = [new Float32Array(250)];
    for (let i = 100; i < 180; i++) rawSpike[0][i] = 500;
    const ep2 = preprocessEpoch(rawSpike, mkMarker(), {
      baseline_samples: 50, decimation: 5,
    });
    expect(ep2.artifact).toBe(true);
    expect(ep.quality).toBeGreaterThanOrEqual(0);
  });

  it("epochToFeatures flattens channels × samples correctly", () => {
    const raw = [new Float32Array(250).fill(0), new Float32Array(250).fill(0)];
    const ep = preprocessEpoch(raw, mkMarker(), {
      baseline_samples: 50, decimation: 5,
    });
    const f = epochToFeatures(ep);
    expect(f.length).toBe(ep.data.length * ep.data[0].length);
  });
});
