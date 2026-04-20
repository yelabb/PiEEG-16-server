import { useRef, useEffect, useState, memo, useCallback } from "react";
import type { EEGData } from "../types";
import { useFocus } from "../hooks/detectors/useFocus";
import { useRelax } from "../hooks/detectors/useRelax";
import { useBandPowers } from "../hooks/detectors/useBandPowers";
import { FREQUENCY_BANDS } from "../lib/fftEngine";

const HISTORY_LEN = 120; // data points in the sparkline (~10 s at 12 Hz)
const UPDATE_MS = 83; // ~12 Hz read rate

interface MentalStatePanelProps {
  eegData: EEGData;
}

/* ── Gauge arc ──────────────────────────────────────────────────────── */

function Gauge({
  value,
  label,
  color,
  sublabel,
}: {
  value: number;
  label: string;
  color: string;
  sublabel?: string;
}) {
  const pct = Math.round(value * 100);
  const r = 40;
  const stroke = 8;
  const cx = 50;
  const cy = 50;
  const startAngle = 140;
  const sweep = 260;

  const arcPath = (frac: number) => {
    const a1 = ((startAngle - 90) * Math.PI) / 180;
    const a2 = ((startAngle - 90 + sweep * frac) * Math.PI) / 180;
    const x1 = cx + r * Math.cos(a1);
    const y1 = cy + r * Math.sin(a1);
    const x2 = cx + r * Math.cos(a2);
    const y2 = cy + r * Math.sin(a2);
    const large = sweep * frac > 180 ? 1 : 0;
    return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
  };

  return (
    <div className="ms-gauge">
      <svg viewBox="0 0 100 100" className="ms-gauge-svg">
        {/* Track */}
        <path
          d={arcPath(1)}
          fill="none"
          stroke="var(--border)"
          strokeWidth={stroke}
          strokeLinecap="round"
          opacity="0.5"
        />
        {/* Filled arc */}
        <path
          d={arcPath(Math.max(0.01, value))}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
        />
        {/* Percentage */}
        <text
          x={cx}
          y={cy - 3}
          textAnchor="middle"
          dominantBaseline="central"
          className="ms-gauge-value"
        >
          {pct}
        </text>
        <text
          x={cx}
          y={cy + 12}
          textAnchor="middle"
          className="ms-gauge-unit"
        >
          %
        </text>
        {/* Label inside arc */}
        <text
          x={cx}
          y={cy + 24}
          textAnchor="middle"
          className="ms-gauge-label"
          fill={color}
        >
          {label}
        </text>
      </svg>
      {sublabel && <div className="ms-gauge-sub">{sublabel}</div>}
    </div>
  );
}

/* ── Sparkline (last ~10 s) ─────────────────────────────────────────── */

function Sparkline({
  data,
  color,
  label,
  height = 40,
}: {
  data: number[];
  color: string;
  label: string;
  height?: number;
}) {
  if (data.length < 2) return null;
  const w = 200;
  const h = height;
  const pad = 2;
  const step = w / (HISTORY_LEN - 1);

  // Line path
  let linePath = "";
  for (let i = 0; i < data.length; i++) {
    const x = i * step;
    const y = pad + (h - 2 * pad) * (1 - data[i]);
    linePath += i === 0 ? `M${x},${y}` : `L${x},${y}`;
  }

  // Area fill (close path at bottom)
  const lastX = (data.length - 1) * step;
  const areaPath = `${linePath}L${lastX},${h}L0,${h}Z`;

  // Current value badge
  const current = data[data.length - 1];
  const pct = Math.round(current * 100);

  return (
    <div className="ms-spark-wrap">
      <div className="ms-spark-header">
        <span className="ms-spark-label" style={{ color }}>{label}</span>
        <span className="ms-spark-current" style={{ color }}>{pct}%</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="ms-spark" preserveAspectRatio="none">
        {/* Horizontal grid lines at 25%, 50%, 75% */}
        {[0.25, 0.5, 0.75].map((v) => {
          const gy = pad + (h - 2 * pad) * (1 - v);
          return (
            <line
              key={v}
              x1={0}
              y1={gy}
              x2={w}
              y2={gy}
              stroke="var(--border)"
              strokeWidth="0.5"
              strokeDasharray="3,3"
            />
          );
        })}
        {/* Filled area */}
        <path d={areaPath} fill={color} opacity="0.1" />
        {/* Line */}
        <path d={linePath} fill="none" stroke={color} strokeWidth="1.5" />
      </svg>
    </div>
  );
}

/* ── Band bar row ───────────────────────────────────────────────────── */

function BandBar({ name, label, pct, color }: { name: string; label: string; pct: number; color: string }) {
  return (
    <div className="ms-band-row">
      <span className="ms-band-dot" style={{ background: color }} />
      <span className="ms-band-label">{label}</span>
      <div className="ms-band-track">
        <div className="ms-band-fill" style={{ width: `${Math.max(1, pct * 100)}%`, background: color }} />
      </div>
      <span className="ms-band-pct">{(pct * 100).toFixed(0)}%</span>
    </div>
  );
}

/* ── Main component ─────────────────────────────────────────────────── */

const MentalStatePanel = memo(function MentalStatePanel({
  eegData,
}: MentalStatePanelProps) {
  const focus = useFocus(eegData);
  const relax = useRelax(eegData);
  const bpRef = useBandPowers(eegData, { updateHz: 12, smoothing: 0.6 });

  const focusHistory = useRef<number[]>([]);
  const relaxHistory = useRef<number[]>([]);

  const [tick, setTick] = useState(0);

  // Read refs periodically and force render
  useEffect(() => {
    const id = setInterval(() => {
      const f = focus.state.current.focus;
      const r = relax.state.current.relaxation;

      const fh = focusHistory.current;
      const rh = relaxHistory.current;
      fh.push(f);
      rh.push(r);
      if (fh.length > HISTORY_LEN) fh.shift();
      if (rh.length > HISTORY_LEN) rh.shift();

      setTick((t) => t + 1);
    }, UPDATE_MS);
    return () => clearInterval(id);
  }, [focus.state, relax.state]);

  const fs = focus.state.current;
  const rs = relax.state.current;
  const bp = bpRef.current;

  // Determine dominant band
  let dominant = "";
  let bestPower = 0;
  for (const band of FREQUENCY_BANDS) {
    const p = bp.relative[band.name] ?? 0;
    if (p > bestPower) {
      bestPower = p;
      dominant = band.name;
    }
  }

  return (
    <div className="ms-panel">
      <div className="ms-toolbar">
        <span className="ms-title">Mental State</span>
        <span className="ms-dominant">
          {dominant && (
            <>
              Dominant: <strong>{dominant}</strong>{" "}
              {bp.dominantFrequency > 0 && (
                <span className="ms-freq">{bp.dominantFrequency.toFixed(1)} Hz</span>
              )}
            </>
          )}
        </span>
      </div>

      <div className="ms-body">
        {/* Gauges */}
        <div className="ms-section">
          <div className="ms-gauges">
            <Gauge
              value={fs.focus}
              label="Focus"
              color="#3b82f6"
              sublabel={fs.calibrated ? "calibrated" : undefined}
            />
            <Gauge
              value={rs.relaxation}
              label="Relax"
              color="#22c55e"
              sublabel={rs.calibrated ? "calibrated" : undefined}
            />
          </div>
        </div>

        {/* Sparklines */}
        <div className="ms-section">
          <div className="ms-section-label">Timeline</div>
          <div className="ms-sparks">
            <Sparkline data={focusHistory.current} color="#3b82f6" label="Focus" />
            <Sparkline data={relaxHistory.current} color="#22c55e" label="Relax" />
          </div>
        </div>

        {/* Band power bars */}
        <div className="ms-section">
          <div className="ms-section-label">Band Power</div>
          <div className="ms-bands">
            {FREQUENCY_BANDS.map((band) => (
              <BandBar
                key={band.name}
                name={band.name}
                label={band.label}
                pct={bp.relative[band.name] ?? 0}
                color={band.color}
            />
          ))}
          </div>
        </div>

        {/* Secondary metrics */}
        <div className="ms-section">
          <div className="ms-section-label">Metrics</div>
          <div className="ms-metrics">
            <div className="ms-metric">
              <span className="ms-metric-value">{(rs.alphaRelative * 100).toFixed(1)}%</span>
              <span className="ms-metric-label">α Relative</span>
            </div>
            <div className="ms-metric">
              <span className="ms-metric-value">{rs.thetaBetaRatio.toFixed(2)}</span>
              <span className="ms-metric-label">θ/β Ratio</span>
            </div>
            <div className="ms-metric">
              <span className="ms-metric-value">{bp.totalPower.toFixed(1)}</span>
              <span className="ms-metric-label">Total µV²</span>
            </div>
            <div className="ms-metric">
              <span className="ms-metric-value">{bp.dominantFrequency.toFixed(1)} Hz</span>
              <span className="ms-metric-label">Peak Freq</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MentalStatePanel;
