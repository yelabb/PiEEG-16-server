// ─────────────────────────────────────────────────────────────────────────────
// P300 — Marker Layer
//
// A precise, low-overhead pub/sub bus that:
//   • assigns monotonic marker ids
//   • samples the best available EEG-stream timestamp at emit time
//   • captures performance.now() for sync-drift diagnostics
//   • fans out to multiple subscribers (EEG layer, session recorder, UI)
//
// Games call `bus.emit({...partial})` — the bus fills in marker_id,
// timestamp and perf_timestamp. Every marker is buffered in memory so the
// EEG layer can pull markers that arrived *before* the corresponding EEG
// sample (the bus deliberately keeps the last ~60 s of markers).
// ─────────────────────────────────────────────────────────────────────────────

import type { StimulusMarker, EegTimestamp, PerfTimestamp } from "../types";

/** Minimal "live clock" interface the bus needs from the EEG hook. */
export interface EegClock {
  /** Most recent server timestamp seen on the wire. */
  getLatestEegTimestamp(): EegTimestamp | null;
  /** `performance.now()` when that timestamp arrived. */
  getLatestEegPerfNow(): PerfTimestamp | null;
}

export type MarkerListener = (m: StimulusMarker) => void;

/**
 * Partial marker input accepted by `emit()`. The bus fills in marker_id,
 * timestamp and perf_timestamp if not provided.
 */
export type MarkerInput = Omit<
  StimulusMarker,
  "marker_id" | "timestamp" | "perf_timestamp"
> & {
  timestamp?: EegTimestamp;
  perf_timestamp?: PerfTimestamp;
};

const DEFAULT_BUFFER_MS = 60_000;

export class MarkerBus {
  private listeners = new Set<MarkerListener>();
  private buffer: StimulusMarker[] = [];
  private nextId = 1;
  private clock: EegClock | null = null;

  constructor(private bufferMs: number = DEFAULT_BUFFER_MS) {}

  /** Attach (or replace) the EEG clock used to compute stream timestamps. */
  setClock(clock: EegClock | null): void {
    this.clock = clock;
  }

  /** Subscribe to markers. Returns an unsubscribe function. */
  subscribe(listener: MarkerListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  /**
   * Emit a marker. `timestamp` is derived from the EEG clock if not given,
   * using the latest EEG sample timestamp + elapsed wall time since it
   * arrived (best estimate of the EEG clock at *now*).
   */
  emit(input: MarkerInput): StimulusMarker {
    const perfNow = performance.now();

    let ts = input.timestamp;
    if (ts == null) {
      const lastEeg = this.clock?.getLatestEegTimestamp() ?? null;
      const lastEegPerf = this.clock?.getLatestEegPerfNow() ?? null;
      if (lastEeg != null && lastEegPerf != null) {
        // Interpolate: EEG timestamp is in seconds, perf is in ms.
        ts = lastEeg + (perfNow - lastEegPerf) / 1000;
      } else {
        // Fall back to a monotonic wall-ish timestamp derived from
        // performance.timeOrigin + performance.now() (in seconds). Unlike
        // Date.now(), this is immune to NTP jumps and sleep-wake skew.
        ts = (performance.timeOrigin + perfNow) / 1000;
      }
    }

    const marker: StimulusMarker = {
      ...input,
      marker_id: this.nextId++,
      timestamp: ts,
      perf_timestamp: input.perf_timestamp ?? perfNow,
    };

    this.buffer.push(marker);
    this.pruneBuffer(perfNow);

    // Fan out synchronously — listeners must be cheap.
    for (const l of this.listeners) {
      try {
        l(marker);
      } catch (e) {
        // A single buggy subscriber must not break marker delivery.
        console.error("[MarkerBus] listener threw", e);
      }
    }
    return marker;
  }

  /** Returns all markers buffered in memory (copy). */
  snapshot(): StimulusMarker[] {
    return this.buffer.slice();
  }

  /** Clears all buffered markers and resets the id counter. */
  reset(): void {
    this.buffer = [];
    this.nextId = 1;
  }

  private pruneBuffer(perfNow: PerfTimestamp): void {
    const cutoff = perfNow - this.bufferMs;
    // Buffer is roughly time-ordered — a linear scan is fine at these rates.
    while (this.buffer.length > 0 && this.buffer[0].perf_timestamp < cutoff) {
      this.buffer.shift();
    }
  }
}
