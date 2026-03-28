import { useRef, useEffect, useState, memo, useMemo } from "react";
import { FftEngine, FREQUENCY_BANDS } from "../lib/fftEngine";

const NUM_CHANNELS = 16;
const FFT_SIZE = 256;
const SAMPLE_RATE = 250;
const MAX_DISPLAY_HZ = 60;
const FFT_EVERY_FRAMES = 12; // recompute every ~200 ms
const SMOOTHING = 0.3;
const UI_THROTTLE_MS = 350;

// ── drawing helpers ─────────────────────────────────────────────────────

function drawSpectrum(ctx, w, h, psd, freqs, maxHz, logScale, selectedBand) {
  const plotL = 48;
  const plotR = w - 16;
  const plotT = 24;
  const plotB = h - 24;
  const plotW = plotR - plotL;
  const plotH = plotB - plotT;
  const df = freqs[1]; // Hz per bin
  const maxBin = Math.min(Math.ceil(maxHz / df), psd.length - 1);

  // peak for normalisation
  let peak = 1e-30;
  for (let k = 1; k <= maxBin; k++) if (psd[k] > peak) peak = psd[k];

  // ── band backgrounds ─────────────────────────────────────────────
  for (const band of FREQUENCY_BANDS) {
    if (band.low >= maxHz) continue;
    const x1 = plotL + (Math.max(band.low, 0) / maxHz) * plotW;
    const x2 = plotL + (Math.min(band.high, maxHz) / maxHz) * plotW;
    const highlight = selectedBand === band.name;
    ctx.fillStyle = band.color + (highlight ? "28" : "12");
    ctx.fillRect(x1, plotT, x2 - x1, plotH);
    // band label at top
    ctx.fillStyle = band.color + (highlight ? "cc" : "66");
    ctx.font = "9px monospace";
    ctx.textAlign = "center";
    ctx.fillText(band.name, (x1 + x2) / 2, plotT + 10);
  }

  // ── grid ──────────────────────────────────────────────────────────
  ctx.strokeStyle = "rgba(48,54,61,0.45)";
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

  // ── PSD curve ─────────────────────────────────────────────────────
  ctx.beginPath();
  for (let k = 1; k <= maxBin; k++) {
    const x = plotL + (freqs[k] / maxHz) * plotW;
    let v;
    if (logScale) {
      const dB = 10 * Math.log10((psd[k] || 1e-30) / peak); // 0 … -∞
      v = Math.max(0, (dB + 60) / 60); // 0 … 1 (clamp at -60 dB)
    } else {
      v = psd[k] / peak;
    }
    const y = plotB - Math.min(1, v) * plotH;
    k === 1 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.strokeStyle = "#58a6ff";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // fill under
  ctx.lineTo(plotL + (freqs[maxBin] / maxHz) * plotW, plotB);
  ctx.lineTo(plotL + (freqs[1] / maxHz) * plotW, plotB);
  ctx.closePath();
  ctx.fillStyle = "rgba(88,166,255,0.07)";
  ctx.fill();

  // ── axis labels ───────────────────────────────────────────────────
  ctx.fillStyle = "#8b949e";
  ctx.font = "10px monospace";
  ctx.textAlign = "center";
  for (let f = 0; f <= maxHz; f += 10) {
    ctx.fillText(`${f}`, plotL + (f / maxHz) * plotW, plotB + 14);
  }
  ctx.fillText("Hz", plotR + 2, plotB + 14);

  // Y label
  ctx.save();
  ctx.translate(11, plotT + plotH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.textAlign = "center";
  ctx.fillText(logScale ? "dB" : "µV²/Hz", 0, 0);
  ctx.restore();

  // Scale markings
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

const SpectralPanel = memo(function SpectralPanel({ eegData }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const frameRef = useRef(0);
  const smoothRef = useRef(null);
  const uiTsRef = useRef(0);
  const avgBufRef = useRef(null);
  const bandPowersRef = useRef({});
  const dprRef = useRef(window.devicePixelRatio || 1);
  const canvasSizeRef = useRef({ w: 0, h: 0, pw: 0, ph: 0 });
  const needsResizeRef = useRef(true);

  const [channel, setChannel] = useState(0);
  const [logScale, setLogScale] = useState(true);
  const [paused, setPaused] = useState(false);
  const [selectedBand, setSelectedBand] = useState(null);
  const [bandPowers, setBandPowers] = useState({});
  const [dominant, setDominant] = useState({ band: "", freq: 0 });

  const fft = useMemo(() => new FftEngine(FFT_SIZE, SAMPLE_RATE), []);

  // Initialize average buffer once
  if (!avgBufRef.current) {
    avgBufRef.current = new Float64Array(FFT_SIZE);
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });

    // ResizeObserver — avoid getBoundingClientRect every frame
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const dpr = window.devicePixelRatio || 1;
      dprRef.current = dpr;
      const { width: w, height: h } = entry.contentRect;
      canvasSizeRef.current = { w, h, pw: Math.round(w * dpr), ph: Math.round(h * dpr) };
      needsResizeRef.current = true;
    });
    observer.observe(canvas);

    const tick = () => {
      const { w, h, pw, ph } = canvasSizeRef.current;

      if (w === 0 || h === 0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      // Resize only when needed
      if (needsResizeRef.current) {
        needsResizeRef.current = false;
        canvas.width = pw;
        canvas.height = ph;
      }
      ctx.setTransform(dprRef.current, 0, 0, dprRef.current, 0, 0);

      // background
      ctx.fillStyle = "#0d1117";
      ctx.fillRect(0, 0, w, h);

      frameRef.current++;

      // compute FFT
      if (!paused && frameRef.current % FFT_EVERY_FRAMES === 0) {
        const bufs = eegData.buffers.current;
        const wi = eegData.writeIndex.current;
        const count = eegData.samplesInBuffer.current;

        if (bufs && count >= FFT_SIZE) {
          let result;
          if (channel === -1) {
            // average all channels — reuse avgBufRef
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
            // exponential smoothing
            if (
              !smoothRef.current ||
              smoothRef.current.length !== result.psd.length
            ) {
              smoothRef.current = new Float64Array(result.psd);
            } else {
              const s = smoothRef.current;
              const c = result.psd;
              for (let k = 0; k < s.length; k++)
                s[k] = s[k] * (1 - SMOOTHING) + c[k] * SMOOTHING;
            }

            // throttled React updates — reuse object references
            const now = performance.now();
            if (now - uiTsRef.current > UI_THROTTLE_MS) {
              uiTsRef.current = now;
              
              // Update bandPowers reference only if values changed significantly
              bandPowersRef.current = result.bandPowers;
              setBandPowers(result.bandPowers);
              
              // find dominant band
              let best = "";
              let bestPow = 0;
              for (const b of FREQUENCY_BANDS) {
                if ((result.bandPowers[b.name] || 0) > bestPow) {
                  bestPow = result.bandPowers[b.name];
                  best = b.name;
                }
              }
              // Reuse object if values unchanged
              setDominant((prev) =>
                prev.band === best && prev.freq === result.dominantFrequency
                  ? prev
                  : { band: best, freq: result.dominantFrequency }
              );
            }
          }
        }
      }

      // draw
      const psd = smoothRef.current;
      if (!psd || psd.length === 0) {
        ctx.fillStyle = "#4b5563";
        ctx.font = "13px monospace";
        ctx.textAlign = "center";
        ctx.fillText("Collecting samples…", w / 2, h / 2);
      } else {
        drawSpectrum(
          ctx,
          w,
          h,
          psd,
          fft._frequencies,
          MAX_DISPLAY_HZ,
          logScale,
          selectedBand,
        );
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [eegData, channel, logScale, paused, selectedBand, fft]);

  // ── derived values ────────────────────────────────────────────────
  const maxBandPow = Math.max(
    ...FREQUENCY_BANDS.map((b) => bandPowers[b.name] || 0),
    1e-6,
  );
  const chLabel = channel === -1 ? "Avg" : `Ch ${channel + 1}`;
  const dominantColor =
    FREQUENCY_BANDS.find((b) => b.name === dominant.band)?.color || "#8b949e";

  return (
    <div className="spectral-panel">
      {/* toolbar */}
      <div className="spectral-toolbar">
        <span className="spectral-title">
          Spectral Analysis{" "}
          <small style={{ color: "var(--text-dim)", fontWeight: 400 }}>
            — {chLabel}
          </small>
        </span>
        <div className="spectral-channels">
          <button
            className={`sp-ch${channel === -1 ? " active" : ""}`}
            onClick={() => setChannel(-1)}
          >
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

      {/* canvas */}
      <div className="spectral-canvas-wrap">
        <canvas
          ref={canvasRef}
          style={{ display: "block", width: "100%", height: "100%" }}
        />
        {paused && <div className="spectral-paused">PAUSED</div>}
      </div>

      {/* band power bars */}
      <div className="spectral-bands">
        {FREQUENCY_BANDS.map((band) => {
          const power = bandPowers[band.name] || 0;
          const pct = maxBandPow > 0 ? (power / maxBandPow) * 100 : 0;
          const active = selectedBand === band.name;
          return (
            <div
              key={band.name}
              className={`sp-band${active ? " selected" : ""}`}
              onClick={() =>
                setSelectedBand(active ? null : band.name)
              }
            >
              <div className="sp-band-head">
                <span className="sp-band-dot" style={{ background: band.color }} />
                <span className="sp-band-name" style={{ color: band.color }}>
                  {band.label}
                </span>
                <span className="sp-band-hz">
                  {band.low}–{band.high} Hz
                </span>
              </div>
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

      {/* footer stats */}
      <div className="spectral-footer">
        <span>
          Dominant:{" "}
          <strong style={{ color: dominantColor }}>{dominant.band}</strong>{" "}
          ({dominant.freq.toFixed(1)} Hz)
        </span>
        <span>
          {FFT_SIZE} pt · {SAMPLE_RATE} Hz ·{" "}
          {(SAMPLE_RATE / FFT_SIZE).toFixed(1)} Hz/bin
        </span>
      </div>
    </div>
  );
});

export default SpectralPanel;
