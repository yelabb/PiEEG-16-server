// ─────────────────────────────────────────────────────────────────────────────
// Frame utilities — independent of React / Three.
//
// Both `NeuroFrame` and `EnvelopeFrame` are updated in place to avoid GC churn,
// so anything that wants to remember a *historical* frame (e.g. the training
// overlay during REST/ACTIVE recording) must deep-copy it first.
// ─────────────────────────────────────────────────────────────────────────────

import type { NeuroFrame, EnvelopeFrame } from "./types";

export function deepCopyNeuroFrame(f: NeuroFrame): NeuroFrame {
  return {
    ts: f.ts,
    ready: f.ready,
    channels: f.channels.map((c) => ({
      logBands: new Float32Array(c.logBands),
      dominantBand: c.dominantBand,
      rms: c.rms,
    })),
  };
}

export function deepCopyEnvelopeFrame(f: EnvelopeFrame): EnvelopeFrame {
  return {
    ts: f.ts,
    ready: f.ready,
    channels: f.channels.map((c) => ({
      envelope: c.envelope,
      rms: c.rms,
    })),
  };
}
