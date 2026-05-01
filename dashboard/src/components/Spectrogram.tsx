import { useRef, useEffect, useState, memo, useMemo } from "react";
import { FftEngine } from "../lib/fftEngine";
import type { EEGData, CanvasSize } from "../types";
import { useSampleRate } from "../lib/sampleRateStore";

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

  // Circular-buffer spectrogram history
  const historyRef = useRef<Float64Array[]>([]);
  const historyHeadRef = useRef(0);   // next write position
  const historyCountRef = useRef(0);  // how many filled
  const maxColumnsRef = useRef(400);
  const dBFloorRef = useRef(-60);
  const globalPeakRef = useRef(1e-30); // incremental peak tracking

  // Cached colour-bar ImageData so we don't redraw it every frame
  const colourBarCacheRef = useRef<{ img: ImageData; h: number } | null>(null);
  const canvasBgRef = useRef("#0d1117");
  const canvasAxisRef = useRef("#8b949e");

  // Re-read canvas colors when theme changes
  useEffect(() => {
    const readColors = () => {
      const el = canvasRef.current ?? document.documentElement;
      const s = getComputedStyle(el);
      canvasBgRef.current = s.getPropertyValue("--canvas-bg").trim() || "#0d1117";
      canvasAxisRef.current = s.getPropertyValue("--canvas-axis-text").trim() || "#8b949e";
    };
    readColors();
    const obs = new MutationObserver(readColors);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);

  const [channel, setChannel] = useState(-1);
  const [paused, setPaused] = useState(false);

  const sampleRate = useSampleRate();
  const fft = useMemo(() => new FftEngine(FFT_SIZE, sampleRate), [sampleRate]);

  const binsToDisplay = useMemo(() => {
    const df = sampleRate / FFT_SIZE;
    return Math.min(Math.ceil(MAX_DISPLAY_HZ / df) + 1, (FFT_SIZE >> 1) + 1);
  }, [sampleRate]);

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
      const newMax = Math.max(200, Math.round(w));
      if (newMax !== maxColumnsRef.current) {
        // Reset history on resize since column count changes
        maxColumnsRef.current = newMax;
        historyRef.current = [];
        historyHeadRef.current = 0;
        historyCountRef.current = 0;
        globalPeakRef.current = 1e-30;
      }
      colourBarCacheRef.current = null; // invalidate colour bar
    });
    observer.observe(canvas);

    // Reusable ImageData for the heatmap (allocated once, resized only on change)
    let heatImgData: ImageData | null = null;
    let heatW = 0;
    let heatH = 0;

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
        heatImgData = null; // force re-alloc
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
          const nCh = eegData.numChannels;
          if (channel === -1) {
            const tmp = avgBufRef.current;
            const bufLen = eegData.bufferSize;
            const start = (wi - FFT_SIZE + bufLen) % bufLen;
            for (let i = 0; i < FFT_SIZE; i++) {
              let sum = 0;
              const idx = (start + i) % bufLen;
              for (let ch = 0; ch < nCh; ch++) sum += bufs[ch][idx];
              tmp[i] = sum / nCh;
            }
            result = fft.analyse(tmp, 0);
          } else if (channel < nCh) {
            result = fft.analyseRing(bufs[channel], wi, count);
          }

          if (result) {
            const maxCols = maxColumnsRef.current;
            const history = historyRef.current;
            const head = historyHeadRef.current;

            // Reuse or allocate column
            let col: Float64Array;
            if (history.length < maxCols) {
              col = new Float64Array(binsToDisplay);
              history.push(col);
              historyCountRef.current = history.length;
            } else {
              col = history[head];
            }
            for (let k = 0; k < binsToDisplay; k++) col[k] = result.psd[k];
            historyHeadRef.current = (head + 1) % maxCols;

            // Track peak incrementally from this new column
            for (let k = 1; k < binsToDisplay; k++) {
              if (col[k] > globalPeakRef.current) globalPeakRef.current = col[k];
            }
          }
        }
      }

      // Draw spectrogram
      drawSpectrogram(ctx, w, h, heatImgData, heatW, heatH, (img, iw, ih) => {
        heatImgData = img;
        heatW = iw;
        heatH = ih;
      });
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [eegData, channel, paused, fft, binsToDisplay]);

  function drawSpectrogram(
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    heatImgData: ImageData | null,
    prevHeatW: number,
    prevHeatH: number,
    setHeatImg: (img: ImageData, w: number, h: number) => void,
  ) {
    ctx.fillStyle = canvasBgRef.current;
    ctx.fillRect(0, 0, w, h);

    const histCount = historyCountRef.current;
    if (histCount < 2) {
      ctx.fillStyle = canvasAxisRef.current;
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
    const globalPeak = globalPeakRef.current;

    const history = historyRef.current;
    const head = historyHeadRef.current;
    const numCols = histCount;
    const numRows = binsToDisplay - 1; // skip DC bin

    // ── Draw heatmap via ImageData (single putImageData, no fillRect) ──
    const imgW = numCols;
    const imgH = numRows;

    // Allocate ImageData only when dimensions change
    let imgData = heatImgData;
    if (!imgData || prevHeatW !== imgW || prevHeatH !== imgH) {
      imgData = ctx.createImageData(imgW, imgH);
    }
    const pixels = imgData.data;
    const invNegFloor = 1 / -dBFloor;
    const log10 = Math.log10;

    for (let c = 0; c < numCols; c++) {
      // Read columns in chronological order from the circular buffer
      const colIdx = histCount < maxColumnsRef.current
        ? c
        : (head + c) % histCount;
      const col = history[colIdx];
      for (let k = 0; k < numRows; k++) {
        const psdVal = col[k + 1]; // skip DC
        const dB = 10 * log10((psdVal || 1e-30) / globalPeak);
        let norm = (dB - dBFloor) * invNegFloor;
        if (norm < 0) norm = 0;
        else if (norm > 1) norm = 1;
        const lutOff = (norm * 255 + 0.5) | 0;
        const lutIdx = lutOff * 4;

        // Y: low frequencies at bottom → pixel row 0 = highest freq
        const row = numRows - 1 - k;
        const pxOff = (row * imgW + c) * 4;
        pixels[pxOff] = TURBO_LUT[lutIdx];
        pixels[pxOff + 1] = TURBO_LUT[lutIdx + 1];
        pixels[pxOff + 2] = TURBO_LUT[lutIdx + 2];
        pixels[pxOff + 3] = 255;
      }
    }

    // Scale ImageData into the plot area
    ctx.save();
    ctx.imageSmoothingEnabled = false;
    // Put imgData at origin via temp canvas or putImageData + drawImage
    ctx.putImageData(imgData, 0, 0);
    ctx.drawImage(
      ctx.canvas,
      0, 0, imgW, imgH,             // src rect (in physical pixels)
      padL, padT, plotW, plotH,      // dest rect (in CSS pixels, scaled by transform)
    );
    // Clear the temp pixels we wrote at origin
    ctx.fillStyle = canvasBgRef.current;
    ctx.fillRect(0, 0, padL, padT + plotH);
    ctx.restore();
    setHeatImg(imgData, imgW, imgH);

    // Y-axis labels (frequency)
    const df = sampleRate / FFT_SIZE;
    ctx.fillStyle = canvasAxisRef.current;
    ctx.font = "9px monospace";
    ctx.textAlign = "right";
    const rowH = plotH / numRows;
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
    ctx.fillStyle = canvasAxisRef.current;
    ctx.font = "9px monospace";
    ctx.fillText("Hz", 0, 0);
    ctx.restore();

    // X-axis: time (approximate)
    const totalSec = (numCols * FFT_EVERY_FRAMES) / 60;
    ctx.textAlign = "center";
    ctx.fillStyle = canvasAxisRef.current;
    ctx.font = "9px monospace";
    const timeStep = totalSec > 30 ? 10 : totalSec > 10 ? 5 : 2;
    for (let t = 0; t <= totalSec; t += timeStep) {
      const x = padL + (t / totalSec) * plotW;
      ctx.fillText(`-${(totalSec - t).toFixed(0)}s`, x, h - 4);
    }
    ctx.fillText("now", padL + plotW, h - 4);

    // Color bar legend — cached as ImageData
    const barW = 8;
    const barX = w - padR + 2;
    const barT = padT;
    const barH = Math.round(plotH);
    let barCache = colourBarCacheRef.current;
    if (!barCache || barCache.h !== barH) {
      const barImg = ctx.createImageData(barW, barH);
      const bd = barImg.data;
      for (let i = 0; i < barH; i++) {
        const n2 = 1 - i / barH;
        const li = ((n2 * 255 + 0.5) | 0) * 4;
        const rr = TURBO_LUT[li], gg = TURBO_LUT[li + 1], bb = TURBO_LUT[li + 2];
        for (let j = 0; j < barW; j++) {
          const o = (i * barW + j) * 4;
          bd[o] = rr; bd[o + 1] = gg; bd[o + 2] = bb; bd[o + 3] = 255;
        }
      }
      barCache = { img: barImg, h: barH };
      colourBarCacheRef.current = barCache;
    }
    ctx.putImageData(barCache.img, Math.round(barX * dprRef.current), Math.round(barT * dprRef.current));

    ctx.fillStyle = canvasAxisRef.current;
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
          {Array.from({ length: eegData.numChannels }, (_, i) => (
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
