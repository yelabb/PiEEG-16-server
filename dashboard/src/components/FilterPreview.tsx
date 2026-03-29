import { useRef, useEffect, memo, useCallback } from "react";
import type { CanvasSize } from "../types";
import { SAMPLE_RATE } from "../types";

// ── Butterworth magnitude response computation ──────────────────────

/**
 * Compute the squared magnitude of an Nth-order Butterworth bandpass
 * filter at frequency f. This is the analytical response — no SOS
 * coefficients needed.
 *
 *   |H(f)|² = 1 / (1 + (f/fc)^(2·N))
 *
 * For a bandpass: combine highpass and lowpass responses.
 */
function butterworthBandpassMagnitude(
  f: number, lowcut: number, highcut: number, order: number
): number {
  if (f <= 0) return 0;
  // Lowpass at highcut
  const lpRatio = f / highcut;
  const lpMag2 = 1 / (1 + Math.pow(lpRatio, 2 * order));
  // Highpass at lowcut
  const hpRatio = lowcut / f;
  const hpMag2 = 1 / (1 + Math.pow(hpRatio, 2 * order));
  return Math.sqrt(lpMag2 * hpMag2);
}

// ── Component ────────────────────────────────────────────────────────

interface FilterPreviewProps {
  enabled: boolean;
  lowcut: number;
  highcut: number;
  order?: number;
}

const FilterPreview = memo(function FilterPreview({
  enabled, lowcut, highcut, order = 5,
}: FilterPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dprRef = useRef(window.devicePixelRatio || 1);
  const sizeRef = useRef<CanvasSize>({ w: 0, h: 0, pw: 0, ph: 0, dpr: 1 });
  const needsDrawRef = useRef(true);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const { w, h } = sizeRef.current;
    if (w === 0 || h === 0) return;

    ctx.setTransform(dprRef.current, 0, 0, dprRef.current, 0, 0);
    ctx.fillStyle = "#0d1117";
    ctx.fillRect(0, 0, w, h);

    const padL = 42;
    const padR = 12;
    const padT = 16;
    const padB = 22;
    const plotW = w - padL - padR;
    const plotH = h - padT - padB;

    const maxHz = SAMPLE_RATE / 2; // Nyquist
    const displayMax = Math.min(maxHz, 125);

    // Passband highlight
    if (enabled) {
      const x1 = padL + (Math.max(lowcut, 0) / displayMax) * plotW;
      const x2 = padL + (Math.min(highcut, displayMax) / displayMax) * plotW;
      ctx.fillStyle = "rgba(63, 185, 80, 0.08)";
      ctx.fillRect(x1, padT, x2 - x1, plotH);

      // Cutoff lines
      ctx.strokeStyle = "rgba(63, 185, 80, 0.5)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 3]);
      for (const f of [lowcut, highcut]) {
        const x = padL + (f / displayMax) * plotW;
        ctx.beginPath();
        ctx.moveTo(x, padT);
        ctx.lineTo(x, padT + plotH);
        ctx.stroke();
      }
      ctx.setLineDash([]);

      // Cutoff labels
      ctx.fillStyle = "rgba(63, 185, 80, 0.8)";
      ctx.font = "9px monospace";
      ctx.textAlign = "center";
      const x1Label = padL + (lowcut / displayMax) * plotW;
      const x2Label = padL + (highcut / displayMax) * plotW;
      ctx.fillText(`${lowcut} Hz`, x1Label, padT - 4);
      ctx.fillText(`${highcut} Hz`, x2Label, padT - 4);
    }

    // Grid
    ctx.strokeStyle = "rgba(48,54,61,0.45)";
    ctx.lineWidth = 0.5;
    for (const dB of [0, -10, -20, -30, -40, -50, -60]) {
      const y = padT + ((-dB) / 60) * plotH;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(padL + plotW, y);
      ctx.stroke();
    }
    for (const f of [1, 5, 10, 20, 30, 50, 100]) {
      if (f > displayMax) continue;
      const x = padL + (f / displayMax) * plotW;
      ctx.beginPath();
      ctx.moveTo(x, padT);
      ctx.lineTo(x, padT + plotH);
      ctx.stroke();
    }

    // Draw magnitude response curve
    if (enabled) {
      ctx.beginPath();
      const steps = Math.max(200, Math.round(plotW));
      for (let i = 0; i <= steps; i++) {
        const f = (i / steps) * displayMax;
        const mag = butterworthBandpassMagnitude(f, lowcut, highcut, order);
        const dB = 20 * Math.log10(Math.max(mag, 1e-6));
        const clampedDB = Math.max(-60, dB);
        const y = padT + (-clampedDB / 60) * plotH;
        const x = padL + (f / displayMax) * plotW;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "#3fb950";
      ctx.lineWidth = 2;
      ctx.lineJoin = "round";
      ctx.stroke();

      // Fill under curve
      ctx.lineTo(padL + plotW, padT + plotH);
      ctx.lineTo(padL, padT + plotH);
      ctx.closePath();
      ctx.fillStyle = "rgba(63, 185, 80, 0.06)";
      ctx.fill();
    } else {
      // Flat line at 0 dB when filter is off
      ctx.strokeStyle = "rgba(139, 148, 158, 0.6)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.moveTo(padL, padT);
      ctx.lineTo(padL + plotW, padT);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = "#6e7681";
      ctx.font = "12px monospace";
      ctx.textAlign = "center";
      ctx.fillText("Filter OFF — unfiltered passthrough", padL + plotW / 2, padT + plotH / 2);
    }

    // -3 dB reference line
    const y3db = padT + (3 / 60) * plotH;
    ctx.strokeStyle = "rgba(210, 153, 34, 0.5)";
    ctx.lineWidth = 0.8;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(padL, y3db);
    ctx.lineTo(padL + plotW, y3db);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "rgba(210, 153, 34, 0.7)";
    ctx.font = "8px monospace";
    ctx.textAlign = "right";
    ctx.fillText("-3 dB", padL - 4, y3db + 3);

    // Y-axis labels
    ctx.fillStyle = "#8b949e";
    ctx.font = "9px monospace";
    ctx.textAlign = "right";
    for (const dB of [0, -20, -40, -60]) {
      const y = padT + (-dB / 60) * plotH;
      ctx.fillText(`${dB}`, padL - 4, y + 3);
    }

    ctx.save();
    ctx.translate(10, padT + plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = "center";
    ctx.fillStyle = "#8b949e";
    ctx.font = "9px monospace";
    ctx.fillText("dB", 0, 0);
    ctx.restore();

    // X-axis labels
    ctx.fillStyle = "#8b949e";
    ctx.font = "9px monospace";
    ctx.textAlign = "center";
    for (const f of [1, 10, 20, 30, 50, 100]) {
      if (f > displayMax) continue;
      ctx.fillText(`${f}`, padL + (f / displayMax) * plotW, h - 4);
    }
    ctx.fillText("Hz", padL + plotW + 2, h - 4);

    // Title info
    if (enabled) {
      ctx.fillStyle = "#3fb950";
      ctx.font = "bold 10px monospace";
      ctx.textAlign = "right";
      ctx.fillText(
        `Butterworth order ${order} · ${lowcut}–${highcut} Hz`,
        padL + plotW, padT + plotH + 14
      );
    }
  }, [enabled, lowcut, highcut, order]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const dpr = window.devicePixelRatio || 1;
      dprRef.current = dpr;
      const { width: w, height: h } = entry.contentRect;
      sizeRef.current = { w, h, pw: Math.round(w * dpr), ph: Math.round(h * dpr), dpr };
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      needsDrawRef.current = true;
      draw();
    });
    observer.observe(canvas);

    needsDrawRef.current = true;
    draw();
    return () => observer.disconnect();
  }, [draw]);

  return (
    <div className="filter-preview-panel">
      <div className="filter-preview-toolbar">
        <span className="filter-preview-title">
          Filter Response
        </span>
        <span className="filter-preview-meta">
          {enabled
            ? `Bandpass ${lowcut}–${highcut} Hz · Order ${order}`
            : "Disabled"}
        </span>
      </div>
      <div className="filter-preview-canvas-wrap">
        <canvas
          ref={canvasRef}
          style={{ display: "block", width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
});

export default FilterPreview;
