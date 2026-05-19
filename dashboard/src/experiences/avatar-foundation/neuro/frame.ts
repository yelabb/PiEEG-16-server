// ─────────────────────────────────────────────────────────────────────────────
// Frame utilities — independent of React / Three.
//
// `NeuroFrame` is updated in place by `useChannelBandPowers` to avoid GC churn,
// so anything that wants to remember a *historical* frame (e.g. the training
// overlay during REST/ACTIVE recording) must deep-copy it first.
// ─────────────────────────────────────────────────────────────────────────────

import type { NeuroFrame } from "./types";

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
