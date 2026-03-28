// ─────────────────────────────────────────────────────────────────────────────
// FFT Engine — Pure JS Cooley-Tukey radix-2 FFT with EEG spectral analysis.
//
// Ported from miruns-connect Dart engine.
//   • 256-sample window (≈1 s at 250 Hz) → ~1 Hz frequency resolution
//   • Hanning window to suppress spectral leakage
//   • Power Spectral Density (PSD) in µV²/Hz
//   • EEG frequency band extraction (Delta → Gamma)
// ─────────────────────────────────────────────────────────────────────────────

import type { FrequencyBand, FFTResult, BandPowers } from "../types";

const { PI, cos, sin } = Math;
const TWO_PI = 2 * PI;

/** Standard EEG frequency bands. */
export const FREQUENCY_BANDS: readonly FrequencyBand[] = [
  { name: "Delta", label: "δ Delta", low: 0.5, high: 4, color: "#8b5cf6" },
  { name: "Theta", label: "θ Theta", low: 4, high: 8, color: "#06b6d4" },
  { name: "Alpha", label: "α Alpha", low: 8, high: 13, color: "#22c55e" },
  { name: "Beta", label: "β Beta", low: 13, high: 30, color: "#f59e0b" },
  { name: "Gamma", label: "γ Gamma", low: 30, high: 100, color: "#ef4444" },
];

export class FftEngine {
  readonly n: number;
  readonly sampleRateHz: number;

  // Precomputed tables
  _window!: Float64Array;
  _frequencies!: Float64Array;
  _df!: number;
  _bitReversed!: Int32Array;
  _twRe!: Float64Array;
  _twIm!: Float64Array;
  _norm!: number;

  constructor(n: number, sampleRateHz: number) {
    if (n <= 0 || (n & (n - 1)) !== 0)
      throw new Error("n must be a power of 2");
    this.n = n;
    this.sampleRateHz = sampleRateHz;
    this._precompute();
  }

  private _precompute(): void {
    const { n, sampleRateHz } = this;

    // ── Hanning window ────────────────────────────────────────────────
    this._window = new Float64Array(n);
    for (let i = 0; i < n; i++) {
      this._window[i] = 0.5 * (1.0 - cos(TWO_PI * i / (n - 1)));
    }

    // ── Frequency axis (one-sided: 0 … N/2) ──────────────────────────
    const bins = (n >> 1) + 1;
    this._frequencies = new Float64Array(bins);
    this._df = sampleRateHz / n;
    for (let i = 0; i < bins; i++) {
      this._frequencies[i] = i * this._df;
    }

    // ── Bit-reversal permutation ──────────────────────────────────────
    const logN = FftEngine._log2(n);
    this._bitReversed = new Int32Array(n);
    for (let i = 0; i < n; i++) {
      this._bitReversed[i] = FftEngine._reverseBits(i, logN);
    }

    // ── Twiddle factors  exp(-j·2π·k/N) ──────────────────────────────
    const half = n >> 1;
    this._twRe = new Float64Array(half);
    this._twIm = new Float64Array(half);
    for (let k = 0; k < half; k++) {
      const angle = -TWO_PI * k / n;
      this._twRe[k] = cos(angle);
      this._twIm[k] = sin(angle);
    }

    // ── Window energy (Σ w²) for PSD normalisation ───────────────────
    let s2 = 0;
    for (let i = 0; i < n; i++) s2 += this._window[i] * this._window[i];
    this._norm = 2.0 / (sampleRateHz * s2);
  }

  // ── Public API ──────────────────────────────────────────────────────

  analyse(samples: Float32Array | Float64Array | number[], offset?: number): FFTResult | null {
    const { n, _window, _frequencies, _df, _norm } = this;
    if (offset === undefined) offset = samples.length - n;
    if (offset < 0 || samples.length - offset < n) return null;

    // Apply window
    const re = new Float64Array(n);
    const im = new Float64Array(n);
    for (let i = 0; i < n; i++) re[i] = samples[offset + i] * _window[i];

    this._fft(re, im);

    // One-sided PSD  (µV²/Hz)
    const bins = (n >> 1) + 1;
    const psd = new Float64Array(bins);
    let peakPower = 0;
    let totalPower = 0;
    let peakBin = 0;

    for (let k = 0; k < bins; k++) {
      const pw = re[k] * re[k] + im[k] * im[k];
      const scale = k === 0 || k === bins - 1 ? 0.5 : 1.0;
      psd[k] = pw * _norm * scale;
      totalPower += psd[k] * _df;
      if (psd[k] > peakPower) {
        peakPower = psd[k];
        peakBin = k;
      }
    }

    // Band powers
    const bandPowers: BandPowers = {};
    for (const band of FREQUENCY_BANDS) {
      let bp = 0;
      for (let k = 0; k < bins; k++) {
        if (_frequencies[k] >= band.low && _frequencies[k] < band.high) {
          bp += psd[k] * _df;
        }
      }
      bandPowers[band.name] = bp;
    }

    return {
      frequencies: _frequencies,
      psd,
      bandPowers,
      dominantFrequency: _frequencies[peakBin],
      totalPower,
    };
  }

  analyseRing(ringBuf: Float32Array, writeIndex: number, samplesInBuf: number): FFTResult | null {
    const { n } = this;
    if (samplesInBuf < n) return null;

    const bufLen = ringBuf.length;
    const tmp = new Float64Array(n);
    const start = (writeIndex - n + bufLen) % bufLen;
    for (let i = 0; i < n; i++) {
      tmp[i] = ringBuf[(start + i) % bufLen];
    }
    return this.analyse(tmp, 0);
  }

  // ── Cooley-Tukey in-place radix-2 FFT ──────────────────────────────

  private _fft(re: Float64Array, im: Float64Array): void {
    const { n, _bitReversed, _twRe, _twIm } = this;

    // Bit-reversal reorder
    for (let i = 0; i < n; i++) {
      const j = _bitReversed[i];
      if (j > i) {
        let t = re[i]; re[i] = re[j]; re[j] = t;
        t = im[i]; im[i] = im[j]; im[j] = t;
      }
    }

    // Butterfly stages
    for (let size = 2; size <= n; size *= 2) {
      const half = size >> 1;
      const step = n / size;
      for (let i = 0; i < n; i += size) {
        for (let j = 0; j < half; j++) {
          const tw = j * step;
          const wr = _twRe[tw];
          const wi = _twIm[tw];
          const e = i + j;
          const o = e + half;
          const tr = wr * re[o] - wi * im[o];
          const ti = wr * im[o] + wi * re[o];
          re[o] = re[e] - tr;
          im[o] = im[e] - ti;
          re[e] += tr;
          im[e] += ti;
        }
      }
    }
  }

  // ── Helpers ─────────────────────────────────────────────────────────

  private static _log2(v: number): number {
    let r = 0, x = v;
    while (x > 1) { x >>= 1; r++; }
    return r;
  }

  private static _reverseBits(x: number, bits: number): number {
    let r = 0, v = x;
    for (let i = 0; i < bits; i++) {
      r = (r << 1) | (v & 1);
      v >>= 1;
    }
    return r;
  }
}
