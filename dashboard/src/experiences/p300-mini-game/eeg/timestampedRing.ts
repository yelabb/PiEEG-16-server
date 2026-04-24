// ─────────────────────────────────────────────────────────────────────────────
// P300 — EEG Layer: timestamped ring buffer
//
// A parallel, timestamped ring buffer that mirrors the main useEEG stream
// but keeps per-sample server timestamps so the epoch extractor can slice
// by marker time. Taps into useEEG via the window.__p300SampleHandler hook.
// ─────────────────────────────────────────────────────────────────────────────

import { SAMPLE_RATE } from "../../../types";
import type { EegTimestamp, PerfTimestamp } from "../types";
import type { EegClock } from "../marker/markerBus";

export class TimestampedRing implements EegClock {
  private buffers: Float32Array[];
  private timestamps: Float64Array;
  private writeIndex = 0;
  private samplesInBuf = 0;
  private lastTs: EegTimestamp | null = null;
  private lastTsPerf: PerfTimestamp | null = null;

  constructor(
    public readonly numChannels: number,
    public readonly bufferSize: number,
    public readonly sampleRate: number = SAMPLE_RATE,
  ) {
    this.buffers = Array.from(
      { length: numChannels },
      () => new Float32Array(bufferSize),
    );
    this.timestamps = new Float64Array(bufferSize);
  }

  /** Push a new sample. Called from the useEEG sample tap. */
  push(timestamp: EegTimestamp, channels: number[]): void {
    const wi = this.writeIndex;
    const n = Math.min(channels.length, this.numChannels);
    for (let ch = 0; ch < n; ch++) {
      this.buffers[ch][wi] = channels[ch];
    }
    this.timestamps[wi] = timestamp;
    this.writeIndex = (wi + 1) % this.bufferSize;
    if (this.samplesInBuf < this.bufferSize) this.samplesInBuf++;
    this.lastTs = timestamp;
    this.lastTsPerf = performance.now();
  }

  getLatestEegTimestamp(): EegTimestamp | null {
    return this.lastTs;
  }
  getLatestEegPerfNow(): PerfTimestamp | null {
    return this.lastTsPerf;
  }

  /**
   * Extract a contiguous window of samples whose timestamps lie in
   * [startTs, endTs]. Returns null if the window isn't fully buffered yet.
   * The output shape is [numChannels][numSamples]; numSamples is determined
   * by whichever samples fall inside the time range.
   */
  extractWindow(
    startTs: EegTimestamp,
    endTs: EegTimestamp,
    channels: number[],
  ): { data: Float32Array[]; startIndex: number; numSamples: number } | null {
    if (this.samplesInBuf === 0) return null;

    // Walk the ring from oldest to newest, find indices within [startTs, endTs]
    const bs = this.bufferSize;
    const oldestIdx =
      this.samplesInBuf < bs ? 0 : this.writeIndex; // first valid index
    const newestTs = this.lastTs ?? 0;
    if (newestTs < endTs) return null; // window not yet recorded

    // Binary-ish search: since sample rate is steady, we can estimate
    // by ts difference — but to stay robust, do a linear scan from newest.
    const targetCount = Math.round((endTs - startTs) * this.sampleRate) + 1;

    // Walk backwards from writeIndex-1 until ts < startTs.
    let endRingIdx = (this.writeIndex - 1 + bs) % bs;
    // advance endRingIdx forward until timestamp > endTs
    // (it should already be <= newestTs, so step back if needed)
    while (this.timestamps[endRingIdx] > endTs) {
      endRingIdx = (endRingIdx - 1 + bs) % bs;
      if (endRingIdx === oldestIdx) return null;
    }

    // Walk back `targetCount-1` samples — this gives us a steady-rate window.
    let startRingIdx = endRingIdx;
    for (let i = 1; i < targetCount; i++) {
      startRingIdx = (startRingIdx - 1 + bs) % bs;
      if (startRingIdx === oldestIdx && i < targetCount - 1) {
        // Not enough history.
        return null;
      }
    }

    // Sanity-check the start timestamp falls near startTs (guard against
    // dropped frames that would silently shift the window). Tolerate up to
    // ~16 ms drift (4 samples at 250 Hz) before dropping the epoch.
    const actualStartTs = this.timestamps[startRingIdx];
    if (Math.abs(actualStartTs - startTs) > (2.0 / this.sampleRate) * 4) {
      return null;
    }

    const out: Float32Array[] = channels.map(() => new Float32Array(targetCount));
    for (let i = 0; i < targetCount; i++) {
      const ringIdx = (startRingIdx + i) % bs;
      for (let c = 0; c < channels.length; c++) {
        out[c][i] = this.buffers[channels[c]][ringIdx];
      }
    }
    return { data: out, startIndex: startRingIdx, numSamples: targetCount };
  }

  reset(): void {
    for (const b of this.buffers) b.fill(0);
    this.timestamps.fill(0);
    this.writeIndex = 0;
    this.samplesInBuf = 0;
    this.lastTs = null;
    this.lastTsPerf = null;
  }
}
