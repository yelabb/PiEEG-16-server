// ─────────────────────────────────────────────────────────────────────────────
// P300 — Session recorder / exporter
//
// Captures markers, predictions, and (optionally) raw EEG into a single
// SessionRecord that can be:
//   • reviewed inside the app (ReviewPanel)
//   • exported as JSON (`.p300.json`) for offline ML training
//   • replayed to verify decoder behaviour
//
// Kept deliberately minimal — the dashboard already has a CSV recorder
// for full-session EEG; this store focuses on the labelled training
// metadata the ML layer needs.
// ─────────────────────────────────────────────────────────────────────────────

import type {
  StimulusMarker,
  CandidatePrediction,
  Epoch,
  SessionRecord,
} from "../types";

interface CapturedEpoch {
  marker_id: number;
  data: Float32Array[];
  quality: number;
  sample_rate: number;
  /** Epoch start time in seconds (EEG clock). */
  start_ts: number;
}

export class SessionRecorder {
  private markers: StimulusMarker[] = [];
  private predictions: CandidatePrediction[] = [];
  private epochs: CapturedEpoch[] = [];
  private startedAt = new Date().toISOString();
  private _sessionId = `p300-${Date.now().toString(36)}`;

  constructor(
    public subject_id: string,
    public theme: string,
  ) {}

  /** Public, stable handle to the session id for filename generation etc. */
  get sessionId(): string {
    return this._sessionId;
  }

  onMarker(m: StimulusMarker): void {
    this.markers.push(m);
  }

  onEpoch(e: Epoch, captureData = false): void {
    if (captureData) {
      this.epochs.push({
        marker_id: e.marker.marker_id,
        data: e.data.map((ch) => new Float32Array(ch)),
        quality: e.quality,
        sample_rate: e.sample_rate,
        start_ts: e.marker.timestamp - e.baseline_samples / e.sample_rate,
      });
    }
  }

  onPrediction(p: CandidatePrediction): void {
    this.predictions.push(p);
  }

  toRecord(includeEeg = false): SessionRecord {
    const rec: SessionRecord = {
      session_id: this._sessionId,
      subject_id: this.subject_id,
      started_at: this.startedAt,
      theme: this.theme,
      markers: this.markers.slice(),
      predictions: this.predictions.slice(),
    };
    if (includeEeg && this.epochs.length > 0) {
      // Export a flat sample matrix shaped as [t, ch0, ch1, …] rows, where
      // `t` is the sample's timestamp in seconds on the EEG clock. All
      // epochs share the first epoch's sample rate (decimation is constant).
      const sr = this.epochs[0].sample_rate;
      const samples: number[][] = [];
      for (const ep of this.epochs) {
        const nS = ep.data[0]?.length ?? 0;
        for (let i = 0; i < nS; i++) {
          const t = ep.start_ts + i / ep.sample_rate;
          const row: number[] = [t];
          for (const ch of ep.data) row.push(ch[i]);
          samples.push(row);
        }
      }
      rec.eeg = { sample_rate: sr, samples };
    }
    return rec;
  }

  exportJsonBlob(includeEeg = false): Blob {
    return new Blob([JSON.stringify(this.toRecord(includeEeg), null, 2)], {
      type: "application/json",
    });
  }

  reset(): void {
    this.markers = [];
    this.predictions = [];
    this.epochs = [];
    this.startedAt = new Date().toISOString();
    this._sessionId = `p300-${Date.now().toString(36)}`;
  }

  getMarkerCount(): number { return this.markers.length; }
  getPredictionCount(): number { return this.predictions.length; }
  getEpochCount(): number { return this.epochs.length; }
}
