import { describe, it, expect, vi } from "vitest";
import { MarkerBus } from "../../experiences/p300-mini-game/marker/markerBus";

describe("MarkerBus", () => {
  it("assigns monotonic marker ids and fills timestamps", () => {
    const bus = new MarkerBus();
    const received: number[] = [];
    bus.subscribe((m) => received.push(m.marker_id));

    bus.emit({
      stimulus_id: "a", stimulus_type: "flash", trial_id: 1,
      sequence_id: 0, presentation_duration: 100, visual_state: "onset",
    });
    bus.emit({
      stimulus_id: "b", stimulus_type: "flash", trial_id: 1,
      sequence_id: 0, presentation_duration: 100, visual_state: "onset",
    });

    expect(received).toEqual([1, 2]);
    const snap = bus.snapshot();
    expect(snap.length).toBe(2);
    expect(snap[0].timestamp).toBeGreaterThan(0);
    expect(typeof snap[0].perf_timestamp).toBe("number");
  });

  it("uses the EEG clock to derive timestamps when provided", () => {
    const bus = new MarkerBus();
    bus.setClock({
      getLatestEegTimestamp: () => 1000.0,
      getLatestEegPerfNow: () => performance.now(),
    });
    const m = bus.emit({
      stimulus_id: "a", stimulus_type: "flash", trial_id: 1,
      sequence_id: 0, presentation_duration: 100, visual_state: "onset",
    });
    expect(m.timestamp).toBeCloseTo(1000, 0);
  });

  it("continues dispatching even if a listener throws", () => {
    const bus = new MarkerBus();
    const spy = vi.fn();
    bus.subscribe(() => { throw new Error("boom"); });
    bus.subscribe(spy);
    bus.emit({
      stimulus_id: "a", stimulus_type: "flash", trial_id: 1,
      sequence_id: 0, presentation_duration: 100, visual_state: "onset",
    });
    expect(spy).toHaveBeenCalledOnce();
  });

  it("reset clears buffer and id counter", () => {
    const bus = new MarkerBus();
    bus.emit({
      stimulus_id: "a", stimulus_type: "flash", trial_id: 1,
      sequence_id: 0, presentation_duration: 100, visual_state: "onset",
    });
    bus.reset();
    expect(bus.snapshot()).toEqual([]);
    const m = bus.emit({
      stimulus_id: "b", stimulus_type: "flash", trial_id: 1,
      sequence_id: 0, presentation_duration: 100, visual_state: "onset",
    });
    expect(m.marker_id).toBe(1);
  });
});
