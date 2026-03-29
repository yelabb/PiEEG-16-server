import { useRef, useEffect, useState, memo, useMemo } from "react";
import { FftEngine } from "../lib/fftEngine";
import type { EEGData, CanvasSize } from "../types";
import { NUM_CHANNELS, SAMPLE_RATE } from "../types";

const FFT_SIZE = 256;
const MAX_DISPLAY_HZ = 60;
const FFT_EVERY_FRAMES = 6;

// ── Turbo-like colour LUT (256 entries) ──────────────────────────────

function buildTurboLUT(): Uint8ClampedArray {
  const lut = new Uint8ClampedArray(256 * 4);
  for (let i = 0; i < 256; i++) {
    const t = i / 255;
    let r: number, g: number, b: number;
    if (t < 0.25) {
      const s = t / 0.25;
      r = 48 + s * 20;
      g = 18 + s * 100;
      b = 120 + s * 135;
    } else if (t < 0.5) {
      const s = (t - 0.25) / 0.25;
      r = 68 - s * 40;
      g = 118 + s * 120;
      b = 255 - s * 80;
    } else if (t < 0.75) {
      const s = (t - 0.5) / 0.25;
      r = 28 + s * 200;
      g = 238 - s * 40;
      b = 175 - s * 130;
    } else {
      const s = (t - 0.75) / 0.25;
      r = 228 + s * 27;
      g = 198 - s * 160;
      b = 45 - s * 40;
    }
    const off = i * 4;
    lut[off] = Math.max(0, Math.min(255, Math.round(r)));
    lut[off + 1] = Math.max(0, Math.min(255, Math.round(g)));
    lut[off + 2] = Math.max(0, Math.min(255, Math.round(b)));
    lut[off + 3] = 255;
  }
  return lut;
}

const TURBO_LUT = buildTurboLUT();

// ── Component ────────────────────────────────────────────────────────

interface SpectrogramProps {
  eegData: EEGData;
}

const Spectrogram = memo(function Spectrogram({ eegData }: SpectrogramProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);
  const frameRef = useRef(0);
  const dprRef = useRef(window.devicePixelRatio || 1);
  const canvasSizeRef = useRef<CanvasSize>({ w: 0, h: 0, pw: 0, ph: 0, dpr: 1 });
  const needsResizeRef = useRef(true);
  const avgBufRef = useRef(new Float64Array(FFT_SIZE));

  // Spectrogram history: each column is a Float64Array of PSD values
  const historyRef = useRef<Float64Array[]>([]);
  const maxColumnsRef = useRef(400);
  const dBFloorRef = useRef(-60);

  const [channel, setChannel] = useState(-1);
  const [paused, setPaused] = useState(false);

  const fft = useMemo(() => new FftEngine(FFT_SIZE, SAMPLE_RATE), []);

  const binsToDisplay = useMemo(() => {
    const df = SAMPLE_RATE / FFT_SIZE;
    return Math.min(Math.ceil(MAX_DISPLAY_HZ / df) + 1, (FFT_SIZE >> 1) + 1);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false })!;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const dpr = window.devicePixelRatio || 1;
      dprRef.current = dpr;
      const { width: w, height: h } = entry.contentRect;
      canvasSizeRef.current = { w, h, pw: Math.round(w * dpr), ph: Math.round(h * dpr), dpr };
      needsResizeRef.current = true;
      maxColumnsRef.current = Math.max(200, Math.round(w));
    });
    observer.observe(canvas);

    const tick = () => {
      const { w, h, pw, ph } = canvasSizeRef.current;

      if (w === 0 || h === 0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      if (needsResizeRef.current) {
        needsResizeRef.current = false;
        canvas.width = pw;
        canvas.height = ph;
      }

      ctx.setTransform(dprRef.current, 0, 0, dprRef.current, 0, 0);
      frameRef.current++;

      // Compute new FFT column
      if (!paused && frameRef.current % FFT_EVERY_FRAMES === 0) {
        const bufs = eegData.buffers.current;
        const wi = eegData.writeIndex.current;
        const count = eegData.samplesInBuffer.current;

        if (bufs && count >= FFT_SIZE) {
          let result;
          if (channel === -1) {
            const tmp = avgBufRef.current;
            const bufLen = eegData.bufferSize;
            const start = (wi - FFT_SIZE + bufLen) % bufLen;
            for (let i = 0; i < FFT_SIZE; i++) {
              let sum = 0;
              const idx = (start + i) % bufLen;
              for (let ch = 0; ch < NUM_CHANNELS; ch++) sum += bufs[ch][idx];
              tmp[i] = sum / NUM_CHANNELS;
            }
            result = fft.analyse(tmp, 0);
          } else {
            result = fft.analyseRing(bufs[channel], wi, count);
          }

          if (result) {
            // Store only the bins we display
            const col = new Float64Array(binsToDisplay);
            for (let k = 0; k < binsToDisplay; k++) col[k] = result.psd[k];
            historyRef.current.push(col);
            if (historyRef.current.length > maxColumnsRef.current) {
              historyRef.current.shift();
            }
          }
        }
      }

      // Draw spectrogram
      drawSpectrogram(ctx, w, h);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [eegData, channel, paused, fft, binsToDisplay]);

  function drawSpectrogram(ctx: CanvasRenderingContext2D, w: number, h: number) {
    ctx.fillStyle = "#0d1117";
    ctx.fillRect(0, 0, w, h);

    const history = historyRef.current;
    if (history.length < 2) {
      ctx.fillStyle = "#4b5563";
      ctx.font = "13px monospace";
      ctx.textAlign = "center";
      ctx.fillText("Collecting spectrogram data…", w / 2, h / 2);
      return;
    }

    const padL = 44;
    const padR = 12;
    const padT = 8;
    const padB = 22;
    const plotW = w - padL - padR;
    const plotH = h - padT - padB;
    const dBFloor = dBFloorRef.current;

    // Compute global peak for normalization
    let globalPeak = 1e-30;
    for (let c = 0; c < history.length; c++) {
      const col = history[c];
      for (let k = 1; k < col.length; k++) {
        if (col[k] > globalPeak) globalPeak = col[k];
      }
    }

    const numCols = history.length;
    const numRows = binsToDisplay - 1; // skip DC bin
    const colW = plotW / numCols;
    const rowH = plotH / numRows;

    // Draw heatmap using fillRect for each cell
    for (let c = 0; c < numCols; c++) {
      const col = history[c];
      const x = padL + c * colW;
      for (let k = 0; k < numRows; k++) {
        const psdVal = col[k + 1]; // skip DC
        const dB = 10 * Math.log10((psdVal || 1e-30) / globalPeak);
        const norm = Math.max(0, Math.min(1, (dB - dBFloor) / -dBFloor));
        const lutIdx = Math.round(norm * 255) * 4;

        const r = TURBO_LUT[lutIdx];
        const g = TURBO_LUT[lutIdx + 1];
        const b2 = TURBO_LUT[lutIdx + 2];

        // Y: low frequencies at bottom, high at top
        const y = padT + (numRows - 1 - k) * rowH;
        ctx.fillStyle = `rgb(${r},${g},${b2})`;
        ctx.fillRect(x, y, Math.ceil(colW) + 1, Math.ceil(rowH) + 1);
      }
    }

    // Y-axis labels (frequency)
    const df = SAMPLE_RATE / FFT_SIZE;
    ctx.fillStyle = "#8b949e";
    ctx.font = "9px monospace";
    ctx.textAlign = "right";
    for (const f of [5, 10, 20, 30, 40, 50]) {
      if (f > MAX_DISPLAY_HZ) continue;
      const k = Math.round(f / df) - 1;
      if (k < 0 || k >= numRows) continue;
      const y = padT + (numRows - 1 - k) * rowH;
      ctx.fillText(`${f}`, padL - 4, y + 3);
    }

    ctx.save();
    ctx.translate(10, padT + plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillStyle = "#8b949e";
    ctx.font = "9px monospace";
    ctx.fillText("Hz", 0, 0);
    ctx.restore();

    // X-axis: time (approximate)
    const totalSec = (numCols * FFT_EVERY_FRAMES) / 60; // approximate seconds based on frame rate
    ctx.textAlign = "center";
    ctx.fillStyle = "#8b949e";
    ctx.font = "9px monospace";
    const timeStep = totalSec > 30 ? 10 : totalSec > 10 ? 5 : 2;
    for (let t = 0; t <= totalSec; t += timeStep) {
      const x = padL + (t / totalSec) * plotW;
      ctx.fillText(`-${(totalSec - t).toFixed(0)}s`, x, h - 4);
    }
    ctx.fillText("now", padL + plotW, h - 4);

    // Color bar legend (right side)
    const barW = 8;
    const barX = w - padR + 2;
    const barT = padT;
    const barH = plotH;
    for (let i = 0; i < barH; i++) {
      const norm = 1 - i / barH;
      const lutIdx = Math.round(norm * 255) * 4;
      ctx.fillStyle = `rgb(${TURBO_LUT[lutIdx]},${TURBO_LUT[lutIdx + 1]},${TURBO_LUT[lutIdx + 2]})`;
      ctx.fillRect(barX, barT + i, barW, 1);
    }
    ctx.fillStyle = "#8b949e";
    ctx.font = "8px monospace";
    ctx.textAlign = "left";
    ctx.fillText("0", barX + barW + 2, barT + 6);
    ctx.fillText(`${dBFloor}`, barX + barW + 2, barT + barH);
    ctx.fillText("dB", barX + barW + 2, barT + barH / 2 + 3);
  }

  const chLabel = channel === -1 ? "Avg" : `Ch ${channel + 1}`;

  return (
    <div className="spectrogram-panel">
      <div className="spectrogram-toolbar">
        <span className="spectrogram-title">
          Spectrogram{" "}
          <small style={{ color: "var(--text-dim)", fontWeight: 400 }}>{chLabel}</small>
        </span>
        <div className="spectrogram-channels">
          <button className={`sp-ch${channel === -1 ? " active" : ""}`} onClick={() => setChannel(-1)}>
            Avg
          </button>
          {Array.from({ length: NUM_CHANNELS }, (_, i) => (
            <button
              key={i}
              className={`sp-ch${channel === i ? " active" : ""}`}
              onClick={() => setChannel(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div className="spectrogram-ctrls">
          <button
            className={`btn${paused ? " active" : ""}`}
            onClick={() => setPaused((v) => !v)}
          >
            {paused ? "▶" : "⏸"}
          </button>
        </div>
      </div>
      <div className="spectrogram-canvas-wrap">
        <canvas
          ref={canvasRef}
          style={{ display: "block", width: "100%", height: "100%" }}
        />
        {paused && <div className="spectral-paused">PAUSED</div>}
      </div>
    </div>
  );
});

export default Spectrogram;
