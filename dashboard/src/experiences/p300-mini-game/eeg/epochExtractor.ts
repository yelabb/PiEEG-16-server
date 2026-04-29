// ─────────────────────────────────────────────────────────────────────────────
// P300 — EEG Layer: Epoch Extractor
//
// Listens to the MarkerBus, and for every "flash"-type stimulus marker,
// waits until enough post-stimulus EEG has arrived in the TimestampedRing,
// then pulls out a windowed, preprocessed epoch and dispatches it to
// subscribers (the ML layer, the session recorder, the review panel).
// ─────────────────────────────────────────────────────────────────────────────

import type { Epoch, StimulusMarker, CalibrationConfig } from "../types";
import type { MarkerBus } from "../marker/markerBus";
import type { TimestampedRing } from "./timestampedRing";
import { preprocessEpoch } from "./preprocessing";
import { SAMPLE_RATE } from "../../../types";

export type EpochListener = (e: Epoch) => void;

interface PendingExtraction {
  marker: StimulusMarker;
  startTs: number;
  endTs: number;
  /** perf-clock time at which the full window should have been buffered. */
  readyAtPerfMs: number;
}

export interface EpochExtractorOptions {
  /** Channels to include in the epoch. */
  channels: number[];
  /** Pre-stimulus baseline length (ms). Default 200. */
  baseline_ms?: number;
  /** Post-stimulus epoch length (ms). Default 800. */
  post_ms?: number;
  /** Decimation factor after LPF. Default 5 (250 Hz → 50 Hz). */
  decimation?: number;
  /** Stimulus types to epoch. Default ["flash"]. */
  include_types?: string[];
  /** Safety margin (ms) after `endTs` before we pull the window. */
  settle_ms?: number;
}

/**
 * Sets up marker→epoch extraction. Returns a handle with a stop() function.
 */
export class EpochExtractor {
  private listeners = new Set<EpochListener>();
  private pending: PendingExtraction[] = [];
  private unsub: (() => void) | null = null;
  private pumpTimer: ReturnType<typeof setInterval> | null = null;
  readonly channels: number[];
  readonly baseline_ms: number;
  readonly post_ms: number;
  readonly decimation: number;
  readonly include_types: Set<string>;
  readonly settle_ms: number;

  constructor(
    private bus: MarkerBus,
    private ring: TimestampedRing,
    opts: EpochExtractorOptions,
  ) {
    this.channels = opts.channels;
    this.baseline_ms = opts.baseline_ms ?? 200;
    this.post_ms = opts.post_ms ?? 800;
    this.decimation = opts.decimation ?? 5;
    this.include_types = new Set(opts.include_types ?? ["flash"]);
    this.settle_ms = opts.settle_ms ?? 50;
  }

  start(): void {
    if (this.unsub) return;
    this.unsub = this.bus.subscribe((m) => this.onMarker(m));
    this.pumpTimer = setInterval(() => this.pump(), 20);
  }

  stop(): void {
    if (this.unsub) this.unsub();
    this.unsub = null;
    if (this.pumpTimer) clearInterval(this.pumpTimer);
    this.pumpTimer = null;
    this.pending = [];
    this.listeners.clear();
  }

  subscribe(fn: EpochListener): () => void {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  /** The calibration config derived from current options — handy for models. */
  toConfig(subject_id: string): CalibrationConfig {
    return {
      channels: this.channels,
      baseline_ms: this.baseline_ms,
      post_ms: this.post_ms,
      decimation: this.decimation,
      subject_id,
    };
  }

  private onMarker(m: StimulusMarker): void {
    if (!this.include_types.has(m.stimulus_type)) return;
    // Window: [m.timestamp - baseline_ms/1000, m.timestamp + post_ms/1000]
    const startTs = m.timestamp - this.baseline_ms / 1000;
    const endTs = m.timestamp + this.post_ms / 1000;
    const nowPerf = performance.now();
    // Convert endTs to perf time: end-perf ≈ now-perf + (endTs - latestEegTs)
    const latestEeg = this.ring.getLatestEegTimestamp() ?? m.timestamp;
    const latestEegPerf = this.ring.getLatestEegPerfNow() ?? nowPerf;
    const readyAtPerfMs =
      latestEegPerf + (endTs - latestEeg) * 1000 + this.settle_ms;

    this.pending.push({ marker: m, startTs, endTs, readyAtPerfMs });
  }

  private pump(): void {
    if (this.pending.length === 0) return;
    const now = performance.now();
    const remain: PendingExtraction[] = [];
    for (const p of this.pending) {
      if (now < p.readyAtPerfMs) {
        remain.push(p);
        continue;
      }
      const win = this.ring.extractWindow(p.startTs, p.endTs, this.channels);
      if (!win) {
        // Window not available — likely lost / too old. Drop silently.
        continue;
      }
      const srcBaselineN = Math.round((this.baseline_ms / 1000) * SAMPLE_RATE);
      const epoch = preprocessEpoch(win.data, p.marker, {
        baseline_samples: srcBaselineN,
        decimation: this.decimation,
        sample_rate: SAMPLE_RATE,
      });
      for (const l of this.listeners) {
        try {
          l(epoch);
        } catch (e) {
          console.error("[EpochExtractor] listener threw", e);
        }
      }
    }
    this.pending = remain;
  }
}
