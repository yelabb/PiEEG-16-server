import { describe, it, expect } from "vitest";
import { NUM_CHANNELS, SAMPLE_RATE, TRACE_COLORS, TRIGGER_TYPES, BANDS, SERVICE_TYPES } from "../types";

describe("types constants", () => {
  it("NUM_CHANNELS is 32", () => {
    expect(NUM_CHANNELS).toBe(32);
  });

  it("SAMPLE_RATE is 250 Hz", () => {
    expect(SAMPLE_RATE).toBe(250);
  });

  it("TRACE_COLORS has 32 entries", () => {
    expect(TRACE_COLORS).toHaveLength(32);
  });

  it("all trace colors are valid hex codes", () => {
    for (const color of TRACE_COLORS) {
      expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
    }
  });

  it("TRIGGER_TYPES has 6 entries", () => {
    expect(TRIGGER_TYPES).toHaveLength(6);
    expect(TRIGGER_TYPES).toContain("band_power_above");
    expect(TRIGGER_TYPES).toContain("band_power_below");
    expect(TRIGGER_TYPES).toContain("amplitude_above");
    expect(TRIGGER_TYPES).toContain("amplitude_below");
    expect(TRIGGER_TYPES).toContain("band_ratio_above");
    expect(TRIGGER_TYPES).toContain("band_ratio_below");
  });

  it("BANDS has 5 standard EEG bands", () => {
    expect(BANDS).toHaveLength(5);
    expect(BANDS).toContain("delta");
    expect(BANDS).toContain("theta");
    expect(BANDS).toContain("alpha");
    expect(BANDS).toContain("beta");
    expect(BANDS).toContain("gamma");
  });

  it("SERVICE_TYPES has 3 entries", () => {
    expect(SERVICE_TYPES).toHaveLength(3);
    expect(SERVICE_TYPES).toContain("generic");
    expect(SERVICE_TYPES).toContain("ifttt");
    expect(SERVICE_TYPES).toContain("zapier");
  });
});
