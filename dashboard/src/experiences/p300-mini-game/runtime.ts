// ─────────────────────────────────────────────────────────────────────────────
// P300 — Runtime
//
// Glues the four layers together so a game only has to worry about visuals
// and marker emission. A Game calls:
//
//   runtime.beginTrial(candidates)   → starts a new accumulator
//   runtime.markFlash(id, trial, seq, target?)  → emits one marker
//   runtime.endTrial() → finalises + returns the CandidatePrediction
//
// Calibration mode additionally records epoch labels so `runtime.fitModel()`
// can train a subject-specific decoder in-place.
// ─────────────────────────────────────────────────────────────────────────────

import type {
  StimulusMarker,
  CandidatePrediction,
  Epoch,
  CalibrationConfig,
} from "./types";
import { MarkerBus } from "./marker/markerBus";
import { TimestampedRing } from "./eeg/timestampedRing";
import { EpochExtractor } from "./eeg/epochExtractor";
import { EvidenceAccumulator } from "./ml/accumulator";
import type { Decoder, TrainingMetrics } from "./ml/decoder";
import { ShrinkageLDA } from "./ml/shrinkageLda";
import { loadModel, saveModel } from "./ml/storage";
import { SessionRecorder } from "./review/sessionRecorder";
import { SAMPLE_RATE } from "../../types";

export interface RuntimeOptions {
  subject_id: string;
  theme: string;
  channels: number[];
  baseline_ms?: number;
  post_ms?: number;
  decimation?: number;
  ring_seconds?: number;
  numChannels: number;
}

export interface RuntimeEventMap {
  epoch: Epoch;
  prediction: CandidatePrediction;
  marker: StimulusMarker;
  training_progress: { target: number; nontarget: number };
}

type Handler<E extends keyof RuntimeEventMap> = (e: RuntimeEventMap[E]) => void;

export class P300Runtime {
  readonly bus = new MarkerBus();
  readonly ring: TimestampedRing;
  readonly extractor: EpochExtractor;
  readonly recorder: SessionRecorder;
  decoder: Decoder;

  private sampleTapInstalled = false;
  private installedSampleHandler?: (t: number, channels: number[]) => void;
  private busUnsubscribe: (() => void) | null = null;
  private extractorUnsubscribe: (() => void) | null = null;
  private currentAcc: EvidenceAccumulator | null = null;
  private trialCounter = 0;
  private handlers: { [K in keyof RuntimeEventMap]?: Set<Handler<K>> } = {};

  /** Labelled epochs accumulated during calibration. */
  private calEpochs: Epoch[] = [];
  private calLabels: boolean[] = [];

  /** Latest prediction snapshot per trial (live view). */
  private liveSnapshots = new Map<number, CandidatePrediction>();

  constructor(public opts: RuntimeOptions) {
    const bufSize = SAMPLE_RATE * (opts.ring_seconds ?? 8);
    this.ring = new TimestampedRing(opts.numChannels, bufSize);
    this.bus.setClock(this.ring);
    this.extractor = new EpochExtractor(this.bus, this.ring, {
      channels: opts.channels,
      baseline_ms: opts.baseline_ms,
      post_ms: opts.post_ms,
      decimation: opts.decimation,
      include_types: ["flash"],
    });
    this.recorder = new SessionRecorder(opts.subject_id, opts.theme);
    const cfg: CalibrationConfig = this.extractor.toConfig(opts.subject_id);
    this.decoder = new ShrinkageLDA(cfg);
    const existing = loadModel(opts.subject_id);
    if (existing && existing.kind === "shrinkage-lda-v1") {
      try {
        this.decoder.deserialise(existing);
      } catch (e) {
        console.warn("[P300Runtime] failed to load existing model", e);
      }
    }
  }

  /** Start all subscriptions. Must be called before any markers are emitted. */
  start(): void {
    this.extractor.start();
    this.extractorUnsubscribe = this.extractor.subscribe((e) => this.onEpoch(e));
    this.busUnsubscribe = this.bus.subscribe((m) => {
      this.recorder.onMarker(m);
      this.emit("marker", m);
    });
    this.installSampleTap();
  }

  stop(): void {
    this.extractor.stop();
    if (this.busUnsubscribe) { this.busUnsubscribe(); this.busUnsubscribe = null; }
    if (this.extractorUnsubscribe) { this.extractorUnsubscribe(); this.extractorUnsubscribe = null; }
    this.removeSampleTap();
  }

  /**
   * Update the theme tag associated with this runtime. Keeps the runtime
   * options and the session recorder's theme metadata in sync so exported
   * sessions reflect the theme the user is actually playing.
   */
  setTheme(theme: string): void {
    this.opts.theme = theme;
    this.recorder.theme = theme;
  }

  /** Begin a new decoding trial over the given candidate set. */
  beginTrial(candidates: string[]): number {
    this.trialCounter += 1;
    const id = this.trialCounter;
    this.currentAcc = new EvidenceAccumulator(this.decoder, id, {
      candidates,
    });
    this.liveSnapshots.delete(id);
    return id;
  }

  /** Finalise the current trial and return the best prediction (if any). */
  endTrial(): CandidatePrediction | null {
    if (!this.currentAcc) return null;
    const snap = this.currentAcc.snapshot();
    this.recorder.onPrediction(snap);
    this.emit("prediction", snap);
    this.currentAcc = null;
    return snap;
  }

  /** Returns a live snapshot for the current trial (no commit). */
  snapshotCurrent(): CandidatePrediction | null {
    return this.currentAcc ? this.currentAcc.snapshot() : null;
  }

  /**
   * Emit a flash marker. Convenience wrapper around bus.emit.
   * `presentation_duration` is the planned visible duration (ms).
   */
  markFlash(params: {
    stimulus_id: string;
    trial_id: number;
    sequence_id: number;
    presentation_duration: number;
    candidate_set?: string[];
    target_label?: "target" | "nontarget" | null;
    position?: { row?: number; col?: number; group?: string };
    visual_state?: "onset" | "offset" | "peak";
    meta?: Record<string, unknown>;
  }): StimulusMarker {
    return this.bus.emit({
      stimulus_id: params.stimulus_id,
      stimulus_type: "flash",
      stimulus_position: params.position,
      trial_id: params.trial_id,
      sequence_id: params.sequence_id,
      presentation_duration: params.presentation_duration,
      visual_state: params.visual_state ?? "onset",
      target_label: params.target_label ?? null,
      candidate_set: params.candidate_set,
      meta: params.meta,
    });
  }

  /** Emit any non-flash marker type. */
  mark(m: Parameters<MarkerBus["emit"]>[0]): StimulusMarker {
    return this.bus.emit(m);
  }

  /** Fit the decoder on all calibration epochs collected so far. */
  fitModel(): TrainingMetrics {
    const metrics = this.decoder.fit(this.calEpochs, this.calLabels);
    const ser = this.decoder.serialise();
    ser.train_accuracy = metrics.train_accuracy;
    ser.cv_accuracy = metrics.cv_accuracy;
    ser.training_size = metrics.training_size;
    saveModel(ser);
    return metrics;
  }

  clearCalibration(): void {
    this.calEpochs = [];
    this.calLabels = [];
    this.emit("training_progress", { target: 0, nontarget: 0 });
  }

  calibrationSize(): { target: number; nontarget: number } {
    let t = 0, n = 0;
    for (const l of this.calLabels) { if (l) t++; else n++; }
    return { target: t, nontarget: n };
  }

  on<E extends keyof RuntimeEventMap>(event: E, handler: Handler<E>): () => void {
    let set = this.handlers[event] as Set<Handler<E>> | undefined;
    if (!set) { set = new Set(); (this.handlers as Record<string, unknown>)[event] = set; }
    set.add(handler);
    return () => set!.delete(handler);
  }

  private emit<E extends keyof RuntimeEventMap>(event: E, payload: RuntimeEventMap[E]): void {
    const set = this.handlers[event] as Set<Handler<E>> | undefined;
    if (!set) return;
    for (const h of set) {
      try { h(payload); } catch (e) { console.error(`[P300Runtime] ${event} handler threw`, e); }
    }
  }

  private onEpoch(e: Epoch): void {
    // Capture raw epoch data whenever it is labelled (calibration) so the
    // session exporter can include EEG windows for offline training. Free
    // operation only needs markers + predictions, not raw samples.
    const captureData =
      e.marker.target_label === "target" || e.marker.target_label === "nontarget";
    this.recorder.onEpoch(e, captureData);
    this.emit("epoch", e);

    // Calibration: accumulate labelled epochs.
    if (e.marker.target_label === "target" && !e.artifact) {
      this.calEpochs.push(e); this.calLabels.push(true);
      this.emit("training_progress", this.calibrationSize());
    } else if (e.marker.target_label === "nontarget" && !e.artifact) {
      this.calEpochs.push(e); this.calLabels.push(false);
      this.emit("training_progress", this.calibrationSize());
    }

    // Free-operation: feed accumulator if a trial is active and the epoch
    // belongs to it.
    if (this.currentAcc && e.marker.trial_id === this.currentAcc.trial_id) {
      this.currentAcc.ingest(e);
      const snap = this.currentAcc.snapshot();
      this.liveSnapshots.set(this.currentAcc.trial_id, snap);
      this.emit("prediction", snap);
    }
  }

  private installSampleTap(): void {
    if (this.sampleTapInstalled) return;
    // Use a shared subscriber registry rather than save-and-restore. The old
    // chained-handler approach left zombie runtimes pinned via the saved
    // `previousSampleHandler` slot — when subject/channels changed, samples
    // continued flowing into a dead ring while the new ring stayed empty
    // (calibration counter never advanced).
    const w = window as unknown as {
      __p300SampleHandler?: (t: number, channels: number[]) => void;
      __p300SampleSubscribers?: Set<(t: number, channels: number[]) => void>;
    };
    let subs = w.__p300SampleSubscribers;
    if (!subs) {
      subs = new Set();
      w.__p300SampleSubscribers = subs;
      // Single multiplexer: useEEG keeps calling __p300SampleHandler exactly
      // once per sample; we fan it out to every live subscriber.
      w.__p300SampleHandler = (t: number, channels: number[]) => {
        const set = w.__p300SampleSubscribers;
        if (!set) return;
        for (const fn of set) {
          try { fn(t, channels); } catch { /* ignore subscriber errors */ }
        }
      };
    }
    this.installedSampleHandler = (t: number, channels: number[]) => {
      this.ring.push(t, channels);
    };
    subs.add(this.installedSampleHandler);
    this.sampleTapInstalled = true;
  }

  private removeSampleTap(): void {
    if (!this.sampleTapInstalled) return;
    const w = window as unknown as {
      __p300SampleHandler?: (t: number, channels: number[]) => void;
      __p300SampleSubscribers?: Set<(t: number, channels: number[]) => void>;
    };
    const subs = w.__p300SampleSubscribers;
    if (subs && this.installedSampleHandler) {
      subs.delete(this.installedSampleHandler);
      if (subs.size === 0) {
        // Last subscriber out: tear down the multiplexer so unrelated code
        // probing __p300SampleHandler sees a clean slate.
        delete w.__p300SampleHandler;
        delete w.__p300SampleSubscribers;
      }
    }
    this.installedSampleHandler = undefined;
    this.sampleTapInstalled = false;
  }
}
