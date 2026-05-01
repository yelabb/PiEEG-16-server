import { useRef, useEffect, useState, memo, useMemo } from "react";
import { FftEngine, FREQUENCY_BANDS } from "../lib/fftEngine";
import type { EEGData, BandPowers, CanvasSize } from "../types";
import { TRACE_COLORS } from "../types";
import { useSampleRate } from "../lib/sampleRateStore";

// Read canvas colours from CSS variables (fall back to dark defaults)
function getCanvasColors(el: Element) {
  const s = getComputedStyle(el);
  return {
    bg: s.getPropertyValue("--canvas-bg").trim() || "#0d1117",
    grid: s.getPropertyValue("--canvas-grid").trim() || "rgba(48,54,61,0.45)",
    axisText: s.getPropertyValue("--canvas-axis-text").trim() || "#8b949e",
    curve: s.getPropertyValue("--canvas-curve").trim() || "#58a6ff",
  };
}

const FFT_SIZE = 256;
const MAX_DISPLAY_HZ = 60;
const FFT_EVERY_FRAMES = 12;
const SMOOTHING = 0.3;
const UI_THROTTLE_MS = 350;

// ── drawing helper ──────────────────────────────────────────────────────

function drawSpectrum(
  ctx: CanvasRenderingContext2D,
  w: number, h: number,
  psd: Float64Array, freqs: Float64Array,
  maxHz: number, logScale: boolean, selectedBand: string | null,
  traces?: readonly { psd: Float64Array; color: string }[],
  colors?: { bg: string; grid: string; axisText: string; curve: string },
) {
  const plotL = 36;
  const plotR = w - 16;
  const plotT = 24;
  const plotB = h - 24;
  const plotW = plotR - plotL;
  const plotH = plotB - plotT;
  const df = freqs[1];
  const maxBin = Math.min(Math.ceil(maxHz / df), psd.length - 1);

  let peak = 1e-30;
  for (let k = 1; k <= maxBin; k++) if (psd[k] > peak) peak = psd[k];

  // band backgrounds
  for (const band of FREQUENCY_BANDS) {
    if (band.low >= maxHz) continue;
    const bandLow = band.name === "Delta" ? 0 : Math.max(band.low, 0);
    const x1 = bandLow <= 0 ? 0 : plotL + (bandLow / maxHz) * plotW;
    const x2 = band.high >= maxHz ? w : plotL + (Math.min(band.high, maxHz) / maxHz) * plotW;
    const highlight = selectedBand === band.name;
    ctx.fillStyle = band.color + (highlight ? "28" : "12");
    ctx.fillRect(x1, plotT, x2 - x1, plotH);
    ctx.fillStyle = band.color + (highlight ? "cc" : "66");
    ctx.font = "9px monospace";
    ctx.textAlign = "center";
    ctx.fillText(band.name, (x1 + x2) / 2, plotT + 10);
  }

  // grid
  ctx.strokeStyle = colors?.grid ?? "rgba(48,54,61,0.45)";
  ctx.lineWidth = 0.5;
  for (let i = 1; i < 5; i++) {
    const y = plotT + (i / 5) * plotH;
    ctx.beginPath();
    ctx.moveTo(plotL, y);
    ctx.lineTo(plotR, y);
    ctx.stroke();
  }
  for (const f of [4, 8, 13, 30, 50]) {
    if (f > maxHz) continue;
    const x = plotL + (f / maxHz) * plotW;
    ctx.beginPath();
    ctx.moveTo(x, plotT);
    ctx.lineTo(x, plotB);
    ctx.stroke();
  }

  // PSD curve(s)
  const drawCurve = (data: Float64Array, color: string, fill: boolean) => {
    ctx.beginPath();
    for (let k = 1; k <= maxBin; k++) {
      const x = plotL + (freqs[k] / maxHz) * plotW;
      let v: number;
      if (logScale) {
        const dB = 10 * Math.log10((data[k] || 1e-30) / peak);
        v = Math.max(0, (dB + 60) / 60);
      } else {
        v = data[k] / peak;
      }
      const y = plotB - Math.min(1, v) * plotH;
      if (k === 1) {
        ctx.moveTo(plotL, y);
        ctx.lineTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    if (fill) {
      ctx.lineTo(plotL + (freqs[maxBin] / maxHz) * plotW, plotB);
      ctx.lineTo(plotL, plotB);
      ctx.closePath();
      ctx.fillStyle = color.slice(0, 7) + "12";
      ctx.fill();
    }
  };

  if (traces && traces.length > 0) {
    // multi-channel: recompute peak across all traces
    peak = 1e-30;
    for (const t of traces)
      for (let k = 1; k <= maxBin; k++) if (t.psd[k] > peak) peak = t.psd[k];
    for (const t of traces) drawCurve(t.psd, t.color, false);
  } else {
    drawCurve(psd, colors?.curve ?? "#58a6ff", true);
  }

  // axis labels
  ctx.fillStyle = colors?.axisText ?? "#8b949e";
  ctx.font = "10px monospace";
  for (let f = 0; f <= maxHz; f += 10) {
    if (f === maxHz) {
      ctx.textAlign = "right";
      ctx.fillText(`${f} Hz`, plotR + 10, plotB + 14);
    } else {
      ctx.textAlign = "center";
      ctx.fillText(`${f}`, plotL + (f / maxHz) * plotW, plotB + 14);
    }
  }

  ctx.save();
  ctx.translate(11, plotT + plotH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = "center";
  ctx.fillText(logScale ? "dB" : "µV²/Hz", 0, 0);
  ctx.restore();

  ctx.textAlign = "right";
  ctx.font = "9px monospace";
  if (logScale) {
    for (const dB of [0, -20, -40, -60]) {
      const y = plotB - ((dB + 60) / 60) * plotH;
      ctx.fillText(`${dB}`, plotL - 4, y + 3);
    }
  }
}

// ── component ───────────────────────────────────────────────────────────

interface SpectralPanelProps {
  eegData: EEGData;
}

const SpectralPanel = memo(function SpectralPanel({ eegData }: SpectralPanelProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);
  const frameRef = useRef(0);
  const smoothRef = useRef<Float64Array | null>(null);
  const smoothAllRef = useRef<Float64Array[]>([]);
  const uiTsRef = useRef(0);
  const avgBufRef = useRef<Float64Array | null>(null);
  const bandPowersRef = useRef<BandPowers>({});
  const dprRef = useRef(window.devicePixelRatio || 1);
  const canvasSizeRef = useRef<CanvasSize>({ w: 0, h: 0, pw: 0, ph: 0, dpr: 1 });
  const needsResizeRef = useRef(true);
  const canvasColorsRef = useRef({ bg: "", grid: "", axisText: "", curve: "" });

  const [channel, setChannel] = useState(-1);
  const [logScale, setLogScale] = useState(true);
  const [paused, setPaused] = useState(false);
  const [selectedBand, setSelectedBand] = useState<string | null>(null);
  const [bandPowers, setBandPowers] = useState<BandPowers>({});
  const [dominant, setDominant] = useState({ band: "", freq: 0 });

  // Rebuild the FftEngine when the device's sample rate changes (PiEEG-16
  // 250 Hz ↔ IronBCI-32 500 Hz). Without the dependency, alpha would land
  // in the theta bin on a 500 Hz device.
  const sampleRate = useSampleRate();
  const fft = useMemo(() => new FftEngine(FFT_SIZE, sampleRate), [sampleRate]);

  if (!avgBufRef.current) {
    avgBufRef.current = new Float64Array(FFT_SIZE);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d", { alpha: false })!;
    canvasColorsRef.current = getCanvasColors(canvas);

    // Re-read colors when theme changes
    const themeObs = new MutationObserver(() => { canvasColorsRef.current = getCanvasColors(canvas); });
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const dpr = window.devicePixelRatio || 1;
      dprRef.current = dpr;
      const { width: w, height: h } = entry.contentRect;
      canvasSizeRef.current = { w, h, pw: Math.round(w * dpr), ph: Math.round(h * dpr), dpr };
      needsResizeRef.current = true;
    });
    observer.observe(wrap);

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

      ctx.fillStyle = canvasColorsRef.current.bg || "#0d1117";
      ctx.fillRect(0, 0, w, h);

      frameRef.current++;

      if (!paused && frameRef.current % FFT_EVERY_FRAMES === 0) {
        const bufs = eegData.buffers.current;
        const wi = eegData.writeIndex.current;
        const count = eegData.samplesInBuffer.current;

        if (bufs && count >= FFT_SIZE) {
          let result;
          const nCh = eegData.numChannels;
          if (channel === -2) {
            // ALL: compute FFT per channel, smooth each independently
            const allSmooth = smoothAllRef.current;
            // ensure smooth array is right length
            while (allSmooth.length < nCh) allSmooth.push(new Float64Array(0));
            if (allSmooth.length > nCh) allSmooth.length = nCh;

            let firstResult = null;
            for (let ch = 0; ch < nCh; ch++) {
              const r = fft.analyseRing(bufs[ch], wi, count);
              if (!r) continue;
              if (!firstResult) firstResult = r;
              if (!allSmooth[ch] || allSmooth[ch].length !== r.psd.length) {
                allSmooth[ch] = new Float64Array(r.psd);
              } else {
                const s = allSmooth[ch];
                const c = r.psd;
                for (let k = 0; k < s.length; k++)
                  s[k] = s[k] * (1 - SMOOTHING) + c[k] * SMOOTHING;
              }
            }
            result = firstResult;
          } else if (channel === -1) {
            const tmp = avgBufRef.current!;
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
            if (!smoothRef.current || smoothRef.current.length !== result.psd.length) {
              smoothRef.current = new Float64Array(result.psd);
            } else {
              const s = smoothRef.current;
              const c = result.psd;
              for (let k = 0; k < s.length; k++)
                s[k] = s[k] * (1 - SMOOTHING) + c[k] * SMOOTHING;
            }

            const now = performance.now();
            if (now - uiTsRef.current > UI_THROTTLE_MS) {
              uiTsRef.current = now;
              bandPowersRef.current = result.bandPowers;
              setBandPowers(result.bandPowers);

              let best = "";
              let bestPow = 0;
              for (const b of FREQUENCY_BANDS) {
                if ((result.bandPowers[b.name] || 0) > bestPow) {
                  bestPow = result.bandPowers[b.name];
                  best = b.name;
                }
              }
              setDominant((prev) =>
                prev.band === best && prev.freq === result.dominantFrequency
                  ? prev
                  : { band: best, freq: result.dominantFrequency }
              );
            }
          }
        }
      }

      const psd = smoothRef.current;
      const cc = canvasColorsRef.current;
      if (channel === -2) {
        const allSmooth = smoothAllRef.current;
        if (allSmooth.length === 0 || !allSmooth[0] || allSmooth[0].length === 0) {
          ctx.fillStyle = cc.axisText || "#4b5563";
          ctx.font = "13px monospace";
          ctx.textAlign = "center";
          ctx.fillText("Collecting samples…", w / 2, h / 2);
        } else {
          const traces = allSmooth.map((s, i) => ({
            psd: s,
            color: TRACE_COLORS[i % TRACE_COLORS.length],
          }));
          drawSpectrum(ctx, w, h, allSmooth[0], fft._frequencies, MAX_DISPLAY_HZ, logScale, selectedBand, traces, cc);
        }
      } else if (!psd || psd.length === 0) {
        ctx.fillStyle = cc.axisText || "#4b5563";
        ctx.font = "13px monospace";
        ctx.textAlign = "center";
        ctx.fillText("Collecting samples…", w / 2, h / 2);
      } else {
        drawSpectrum(ctx, w, h, psd, fft._frequencies, MAX_DISPLAY_HZ, logScale, selectedBand, undefined, cc);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      themeObs.disconnect();
    };
  }, [eegData, channel, logScale, paused, selectedBand, fft]);

  const maxBandPow = Math.max(
    ...FREQUENCY_BANDS.map((b) => bandPowers[b.name] || 0),
    1e-6,
  );
  const chLabel = channel === -2 ? "All" : channel === -1 ? "Avg" : `Ch ${channel + 1}`;
  const dominantColor =
    FREQUENCY_BANDS.find((b) => b.name === dominant.band)?.color || "#8b949e";

  return (
    <div className="spectral-panel">
      <div className="spectral-toolbar">
        <span className="spectral-title">
          Spectral{" "}
          <small style={{ color: "var(--text-dim)", fontWeight: 400 }}>
            {chLabel}
          </small>
        </span>
        <div className="spectral-channels">
          <button
            className={`sp-ch${channel === -1 ? " active" : ""}`}
            onClick={() => setChannel(-1)}
          >
            Avg
          </button>
          <button
            className={`sp-ch${channel === -2 ? " active" : ""}`}
            onClick={() => setChannel(-2)}
          >
            All
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
        <span className="sp-dominant">
          <strong style={{ color: dominantColor }}>{dominant.band || "—"}</strong>{" "}
          {dominant.freq > 0 && <small>{dominant.freq.toFixed(1)} Hz</small>}
        </span>
        <div className="spectral-ctrls">
          <button
            className={`btn${logScale ? " active" : ""}`}
            onClick={() => setLogScale((v) => !v)}
          >
            {logScale ? "Log" : "Lin"}
          </button>
          <button
            className={`btn${paused ? " active" : ""}`}
            onClick={() => setPaused((v) => !v)}
          >
            {paused ? "▶" : "⏸"}
          </button>
        </div>
      </div>

      <div className="spectral-canvas-wrap" ref={wrapRef}>
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
        />
        {paused && <div className="spectral-paused">PAUSED</div>}
      </div>

      <div className="spectral-bands">
        {FREQUENCY_BANDS.map((band) => {
          const power = bandPowers[band.name] || 0;
          const pct = maxBandPow > 0 ? (power / maxBandPow) * 100 : 0;
          const active = selectedBand === band.name;
          return (
            <div
              key={band.name}
              className={`sp-band${active ? " selected" : ""}`}
              onClick={() => setSelectedBand(active ? null : band.name)}
            >
              <span className="sp-band-dot" style={{ background: band.color }} />
              <span className="sp-band-name" style={{ color: band.color }}>
                {band.label}
              </span>
              <div className="sp-band-track">
                <div
                  className="sp-band-fill"
                  style={{ width: `${pct}%`, background: band.color }}
                />
              </div>
              <span className="sp-band-val">
                {power < 0.01 ? power.toExponential(1) : power.toFixed(2)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default SpectralPanel;
