import { describe, it, expect } from "vitest";
import { TimestampedRing } from "../../experiences/p300-mini-game/eeg/timestampedRing";

describe("TimestampedRing", () => {
  it("extracts a window by timestamp", () => {
    const ring = new TimestampedRing(2, 2000, 250);
    // Push 1000 samples at 250 Hz starting at t=10.0.
    for (let i = 0; i < 1000; i++) {
      const t = 10.0 + i / 250;
      ring.push(t, [i, i * 2]);
    }
    expect(ring.getLatestEegTimestamp()).toBeCloseTo(10.0 + 999 / 250, 4);

    // Ask for the window spanning [11.0, 11.4] (100 samples).
    const win = ring.extractWindow(11.0, 11.4, [0, 1]);
    expect(win).not.toBeNull();
    expect(win!.data).toHaveLength(2);
    expect(win!.numSamples).toBe(Math.round(0.4 * 250) + 1);
    // First channel values should be contiguous integers near sample 250.
    expect(win!.data[0][0]).toBeCloseTo(250, 0);
  });

  it("returns null for windows outside the buffered region", () => {
    const ring = new TimestampedRing(1, 100, 250);
    for (let i = 0; i < 50; i++) ring.push(i / 250, [i]);
    // Request a window that's entirely in the future.
    expect(ring.extractWindow(10, 11, [0])).toBeNull();
  });

  it("exposes EEG clock interface compatible with MarkerBus", () => {
    const ring = new TimestampedRing(1, 100);
    ring.push(42.5, [1]);
    expect(ring.getLatestEegTimestamp()).toBe(42.5);
    expect(ring.getLatestEegPerfNow()).not.toBeNull();
  });
});
