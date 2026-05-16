// ─────────────────────────────────────────────────────────────────────────────
// Cat Avatar Control — Iron Man HUD Experience
//
// EEG-driven cat avatar:
//   • Blink detection from frontal channels (Fp1/Fp2 = ch 0, 1)
//     → Avatar blinks in response to detected eye blinks
//   • Band powers → ear state:
//       Alpha/Theta dominant → ears drooped  (relaxed / drowsy)
//       Beta/Gamma dominant  → ears perked   (alert / focused)
//       Balanced             → ears neutral
//   • Full iron-man HUD: band power bars, signal quality, mental state,
//     frontal-channel waveform, blink log
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef, useCallback } from "react";
import type { ExperienceProps } from "../registry";
import { FftEngine, FREQUENCY_BANDS } from "../../lib/fftEngine";
import type { BandPowers } from "../../types";
import { getSampleRate } from "../../lib/sampleRateStore";
import VrmViewer from "./VrmViewer";

// ── Constants ────────────────────────────────────────────────────────────────

const FFT_SIZE = 256;
let _FFT: FftEngine | null = null;
function getFFT(): FftEngine {
  const sr = getSampleRate();
  if (!_FFT || _FFT.sampleRateHz !== sr) _FFT = new FftEngine(FFT_SIZE, sr);
  return _FFT;
}

const FFT_INTERVAL_MS = 200;
const SMOOTH = 0.80;
const BLINK_CHANNELS = [0, 1]; // Fp1, Fp2
const BLINK_WIN = 25;          // ~100 ms at 250 Hz
const BLINK_COOLDOWN_MS = 500;
const BLINK_DURATION_MS = 150;
const BLINK_HIST_LEN = 300;    // ~1.2 s rolling window
const BLINK_THRESH_MUL = 2.3;
const AUTO_BLINK_MIN_MS = 3000;
const AUTO_BLINK_MAX_MS = 7000;
const WAVEFORM_WIN = 375;      // ~1.5 s at 250 Hz

// ── Palette ──────────────────────────────────────────────────────────────────

const C = {
  bg:       "#060b12",
  panel:    "#0c1520",
  panelHi:  "#0f1e2e",
  border:   "#1a3040",
  cyan:     "#5fe9ff",
  cyanDim:  "#1b6f85",
  cyanFade: "#1a4a5a",
  orange:   "#ff9d2e",
  red:      "#ff5e6c",
  white:    "#e8faff",
  green:    "#39d2c0",
  purple:   "#8b5cf6",
  muted:    "#3a5a6a",
};

const BAND_COLORS: Record<string, string> = {
  Delta: "#8b5cf6",
  Theta: "#06b6d4",
  Alpha: "#22c55e",
  Beta:  "#f59e0b",
  Gamma: "#ef4444",
};

// ── Types ─────────────────────────────────────────────────────────────────────

import type { EarState, MentalState } from "./VrmViewer";

// ── Signal helpers ────────────────────────────────────────────────────────────

function readFrontalAmplitude(
  bufs: Float32Array[],
  wi: number,
  sib: number,
  bs: number,
): number {
  if (sib < BLINK_WIN) return 0;
  let total = 0, count = 0;
  for (const ch of BLINK_CHANNELS) {
    if (ch >= bufs.length) continue;
    const buf = bufs[ch];
    let min = Infinity, max = -Infinity;
    for (let i = 0; i < BLINK_WIN; i++) {
      const idx = ((wi - 1 - i) % bs + bs) % bs;
      const v = buf[idx];
      if (v < min) min = v;
      if (v > max) max = v;
    }
    total += max - min;
    count++;
  }
  return count > 0 ? total / count : 0;
}

function median(arr: number[]): number {
  if (!arr.length) return 0;
  const s = [...arr].sort((a, b) => a - b);
  const m = s.length >> 1;
  return s.length & 1 ? s[m] : (s[m - 1] + s[m]) / 2;
}

// ── Band bar ──────────────────────────────────────────────────────────────────

function BandBar({ name, raw, norm, color }: {
  name: string;
  raw: number;
  norm: number;
  color: string;
}) {
  const pct = Math.max(0, Math.min(1, norm)) * 100;
  const symbol = { Delta: "δ", Theta: "θ", Alpha: "α", Beta: "β", Gamma: "γ" }[name] ?? name[0];

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
      <span style={{
        width: 14, textAlign: "center",
        color, fontWeight: 700, fontSize: 14,
        textShadow: `0 0 6px ${color}`,
      }}>{symbol}</span>
      <div style={{
        flex: 1, height: 8, background: C.border, borderRadius: 2,
        overflow: "hidden", position: "relative",
      }}>
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          width: `${pct}%`,
          background: color,
          boxShadow: `0 0 6px ${color}`,
          transition: "width 0.15s ease",
          borderRadius: 2,
        }} />
        {/* tick marks */}
        {[25, 50, 75].map(t => (
          <div key={t} style={{
            position: "absolute", left: `${t}%`, top: 0, bottom: 0,
            width: 1, background: C.border,
          }} />
        ))}
      </div>
      <span style={{
        width: 52, textAlign: "right",
        color: C.muted, fontSize: 10, fontFamily: "monospace",
      }}>{raw.toFixed(1)} µV²</span>
    </div>
  );
}

// ── Section header ─────────────────────────────────────────────────────────

function SectionHeader({ label }: { label: string }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 8,
      marginBottom: 10, paddingBottom: 5,
      borderBottom: `1px solid ${C.cyanDim}`,
    }}>
      <div style={{ width: 3, height: 14, background: C.cyan, borderRadius: 1,
        boxShadow: `0 0 4px ${C.cyan}` }} />
      <span style={{
        fontSize: 10, fontFamily: "monospace", letterSpacing: "0.15em",
        color: C.cyan, textTransform: "uppercase",
      }}>{label}</span>
    </div>
  );
}

// ── Stat row ──────────────────────────────────────────────────────────────────

function StatRow({ label, value, valueColor = C.white }: {
  label: string; value: string; valueColor?: string;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between",
      marginBottom: 6, alignItems: "center" }}>
      <span style={{ fontSize: 10, color: C.muted, fontFamily: "monospace",
        letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</span>
      <span style={{ fontSize: 12, color: valueColor, fontFamily: "monospace",
        fontWeight: 600 }}>{value}</span>
    </div>
  );
}

// ── Waveform canvas ───────────────────────────────────────────────────────────

function WaveformCanvas({ bufs, wi, sib, bs, channel, color }: {
  bufs: Float32Array[];
  wi: number;
  sib: number;
  bs: number;
  channel: number;
  color: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    if (channel >= bufs.length || sib < 10) return;

    const buf = bufs[channel];
    const pts = Math.min(WAVEFORM_WIN, sib);

    // Gather samples (newest on the right)
    const samples: number[] = [];
    for (let i = pts - 1; i >= 0; i--) {
      const idx = ((wi - 1 - i) % bs + bs) % bs;
      samples.push(buf[idx]);
    }

    // Auto-scale
    let min = Infinity, max = -Infinity;
    for (const v of samples) { if (v < min) min = v; if (v > max) max = v; }
    const range = Math.max(max - min, 10);
    const mid = (max + min) / 2;

    // Draw baseline
    ctx.strokeStyle = `${C.border}80`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, H / 2);
    ctx.lineTo(W, H / 2);
    ctx.stroke();

    // Draw waveform
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.shadowColor = color;
    ctx.shadowBlur = 3;
    ctx.beginPath();
    samples.forEach((v, i) => {
      const x = (i / (samples.length - 1)) * W;
      const y = H / 2 - ((v - mid) / range) * (H * 0.8);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();
  });

  return (
    <canvas
      ref={canvasRef}
      width={240}
      height={60}
      style={{ width: "100%", height: 60, display: "block", borderRadius: 2 }}
    />
  );
}

// ── Corner brackets (decorative) ─────────────────────────────────────────────

function CornerBrackets() {
  const arm = 18;
  const s = { position: "absolute" as const, color: C.cyanDim };
  const line = {
    stroke: C.cyanDim, strokeWidth: 1.5, fill: "none",
    filter: `drop-shadow(0 0 2px ${C.cyan})`,
  };
  return (
    <>
      {/* TL */}
      <svg style={{ ...s, top: 0, left: 0 }} width={arm} height={arm}>
        <polyline points={`${arm},0 0,0 0,${arm}`} {...line} />
      </svg>
      {/* TR */}
      <svg style={{ ...s, top: 0, right: 0 }} width={arm} height={arm}>
        <polyline points={`0,0 ${arm},0 ${arm},${arm}`} {...line} />
      </svg>
      {/* BL */}
      <svg style={{ ...s, bottom: 0, left: 0 }} width={arm} height={arm}>
        <polyline points={`${arm},${arm} 0,${arm} 0,0`} {...line} />
      </svg>
      {/* BR */}
      <svg style={{ ...s, bottom: 0, right: 0 }} width={arm} height={arm}>
        <polyline points={`0,${arm} ${arm},${arm} ${arm},0`} {...line} />
      </svg>
    </>
  );
}

// ── Signal quality bar ────────────────────────────────────────────────────────

function QualityBar({ value, label }: { value: number; label: string }) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  const color = value > 0.7 ? C.green : value > 0.4 ? C.orange : C.red;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span style={{ fontSize: 10, color: C.muted, fontFamily: "monospace",
        textTransform: "uppercase", letterSpacing: "0.1em", width: 28 }}>{label}</span>
      <div style={{ flex: 1, height: 5, background: C.border, borderRadius: 2 }}>
        <div style={{
          height: "100%", width: `${pct}%`,
          background: color, borderRadius: 2,
          boxShadow: `0 0 5px ${color}`,
          transition: "width 0.3s ease",
        }} />
      </div>
      <span style={{ width: 30, textAlign: "right", fontSize: 10,
        color, fontFamily: "monospace" }}>{pct.toFixed(0)}%</span>
    </div>
  );
}

// ── Main Experience ───────────────────────────────────────────────────────────

export default function CatAvatarControl({ eegData, onExit }: ExperienceProps) {
  const [bands, setBands] = useState<BandPowers>(
    { Delta: 0, Theta: 0, Alpha: 0, Beta: 0, Gamma: 0 }
  );
  const [normBands, setNormBands] = useState<BandPowers>(
    { Delta: 0, Theta: 0, Alpha: 0, Beta: 0, Gamma: 0 }
  );
  const [earState,    setEarState]    = useState<EarState>("neutral");
  const [mentalState, setMentalState] = useState<MentalState>("neutral");
  const [isBlinking,  setIsBlinking]  = useState(false);
  const [blinkCount,  setBlinkCount]  = useState(0);
  const [lastBlinkAt, setLastBlinkAt] = useState<number | null>(null);
  const [sigQuality,  setSigQuality]  = useState<[number, number]>([0, 0]);
  const [autoBlinkOn, setAutoBlinkOn] = useState(true);
  const [tick,        setTick]        = useState(0); // force waveform re-render

  const smoothRef      = useRef<BandPowers>({ Delta: 0, Theta: 0, Alpha: 0, Beta: 0, Gamma: 0 });
  const lastFftRef     = useRef(0);
  const lastBlinkRef   = useRef(0);
  const blinkHistRef   = useRef<number[]>([]);
  const blinkCountRef  = useRef(0);
  const autoTimerRef   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const blinkingRef    = useRef(false);

  // ── trigger a blink (deduplicates concurrent calls) ────────────────────────
  const triggerBlink = useCallback(() => {
    if (blinkingRef.current) return;
    blinkingRef.current = true;
    setIsBlinking(true);
    setTimeout(() => {
      setIsBlinking(false);
      blinkingRef.current = false;
    }, BLINK_DURATION_MS);
  }, []);

  // ── auto-blink scheduler ─────────────────────────────────────────────────
  const scheduleAuto = useCallback(() => {
    if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
    const delay = AUTO_BLINK_MIN_MS + Math.random() * (AUTO_BLINK_MAX_MS - AUTO_BLINK_MIN_MS);
    autoTimerRef.current = setTimeout(() => {
      triggerBlink();
      scheduleAuto();
    }, delay);
  }, [triggerBlink]);

  useEffect(() => {
    if (autoBlinkOn) {
      scheduleAuto();
    } else {
      if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
    }
    return () => { if (autoTimerRef.current) clearTimeout(autoTimerRef.current); };
  }, [autoBlinkOn, scheduleAuto]);

  // ── main rAF loop: FFT + blink detection ─────────────────────────────────
  useEffect(() => {
    let raf: number;

    const tick = () => {
      raf = requestAnimationFrame(tick);

      const now = performance.now();
      if (now - lastFftRef.current < FFT_INTERVAL_MS) return;
      lastFftRef.current = now;

      const bufs = eegData.buffers.current;
      const wi   = eegData.writeIndex.current;
      const sib  = eegData.samplesInBuffer.current;
      const bs   = eegData.bufferSize;
      const nCh  = bufs.length;

      if (sib < FFT_SIZE || nCh === 0) return;

      // ── FFT: average across first 8 channels ──────────────────────────
      const tmp = new Float64Array(FFT_SIZE);
      let validCh = 0;
      for (let ch = 0; ch < Math.min(nCh, 8); ch++) {
        const buf = bufs[ch];
        if (!buf) continue;
        validCh++;
        for (let i = 0; i < FFT_SIZE; i++) {
          const idx = ((wi - FFT_SIZE + i) % bs + bs) % bs;
          tmp[i] += buf[idx];
        }
      }
      if (validCh === 0) return;
      for (let i = 0; i < FFT_SIZE; i++) tmp[i] /= validCh;

      const result = getFFT().analyse(tmp, 0);
      if (!result) return;

      // ── Smooth bands ──────────────────────────────────────────────────
      const s = smoothRef.current;
      const bp = result.bandPowers;
      for (const b of FREQUENCY_BANDS) {
        s[b.name] = s[b.name] * SMOOTH + (bp[b.name] ?? 0) * (1 - SMOOTH);
      }
      setBands({ ...s });

      // Normalize
      const total = Object.values(s).reduce((a, v) => a + v, 0) || 1;
      const norm: BandPowers = {};
      for (const b of FREQUENCY_BANDS) norm[b.name] = s[b.name] / total;
      setNormBands(norm);

      // ── Ear state ─────────────────────────────────────────────────────
      const relaxScore = (norm.Alpha ?? 0) + (norm.Theta ?? 0);
      const focusScore = (norm.Beta  ?? 0) + (norm.Gamma ?? 0);
      if      (focusScore > relaxScore + 0.07) setEarState("perked");
      else if (relaxScore > focusScore + 0.07) setEarState("drooped");
      else                                      setEarState("neutral");

      // ── Mental state ──────────────────────────────────────────────────
      if      (focusScore > 0.44 && focusScore - relaxScore > 0.09) setMentalState("focus");
      else if ((norm.Gamma ?? 0) > 0.24)                            setMentalState("alert");
      else if (relaxScore > 0.50 && relaxScore - focusScore > 0.09) setMentalState("relax");
      else                                                           setMentalState("neutral");

      // ── Signal quality for Fp1 / Fp2 ─────────────────────────────────
      const sq: [number, number] = [0, 0];
      for (let c = 0; c < 2; c++) {
        if (c >= nCh) continue;
        const buf = bufs[c];
        let mn = Infinity, mx = -Infinity;
        const win = Math.min(125, sib);
        for (let i = 0; i < win; i++) {
          const idx = ((wi - 1 - i) % bs + bs) % bs;
          const v = buf[idx];
          if (v < mn) mn = v; if (v > mx) mx = v;
        }
        const p2p = mx - mn;
        sq[c] = Math.min(1, Math.max(0, (p2p - 5) / 350));
      }
      setSigQuality(sq);

      // ── Blink detection ───────────────────────────────────────────────
      const amp  = readFrontalAmplitude(bufs, wi, sib, bs);
      const hist = blinkHistRef.current;
      hist.push(amp);
      if (hist.length > BLINK_HIST_LEN) hist.shift();

      if (
        hist.length >= 60 &&
        now - lastBlinkRef.current > BLINK_COOLDOWN_MS
      ) {
        const med       = median(hist);
        const threshold = med * BLINK_THRESH_MUL;
        if (amp > threshold && amp > 40) {
          lastBlinkRef.current = now;
          blinkCountRef.current++;
          setBlinkCount(blinkCountRef.current);
          setLastBlinkAt(now);
          triggerBlink();
        }
      }

      // Tick waveform re-render
      setTick((t) => t + 1);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eegData, triggerBlink]);

  // ── Derived display values ────────────────────────────────────────────────
  const blinkRate = blinkCountRef.current > 0 && lastBlinkAt
    ? Math.min(30, (blinkCountRef.current / ((performance.now() - (lastBlinkAt - blinkCountRef.current * 3000)) / 60000))).toFixed(0)
    : "—";

  const mentalLabel: Record<MentalState, string> = {
    focus: "FOCUSED", relax: "RELAXED", alert: "ALERT", neutral: "NEUTRAL",
  };
  const mentalColor: Record<MentalState, string> = {
    focus: C.orange, relax: C.green, alert: C.red, neutral: C.cyan,
  };
  const earLabel: Record<EarState, string> = {
    perked: "PERKED ▲", neutral: "NEUTRAL —", drooped: "DROOPED ▼",
  };
  const earColor: Record<EarState, string> = {
    perked: C.orange, neutral: C.cyan, drooped: C.purple,
  };

  const bufs = eegData.buffers.current;
  const wi   = eegData.writeIndex.current;
  const sib  = eegData.samplesInBuffer.current;
  const bs   = eegData.bufferSize;

  // ── Scan-line animation state ─────────────────────────────────────────────
  // (pure CSS — no RAF needed)

  return (
    <div style={{
      position: "relative",
      width: "100%", height: "100%",
      background: C.bg,
      fontFamily: "'Courier New', Courier, monospace",
      color: C.white,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Scan-line overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 50,
        background:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)",
      }} />

      {/* Animated scan sweep */}
      <style>{`
        @keyframes hud-scan { from { top: -2px } to { top: 100% } }
        @keyframes hud-pulse { 0%,100%{opacity:.6} 50%{opacity:1} }
        @keyframes ear-bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
      `}</style>
      <div style={{
        position: "absolute", left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, transparent, ${C.cyan}55, transparent)`,
        animation: "hud-scan 4s linear infinite",
        pointerEvents: "none", zIndex: 51,
      }} />

      {/* ── HEADER ──────────────────────────────────────────────────────── */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 16px",
        height: 48,
        background: `linear-gradient(90deg, ${C.panel}, #0a1a28)`,
        borderBottom: `1px solid ${C.cyanDim}`,
        flexShrink: 0,
      }}>
        {/* left side */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                width: 5, height: 5, borderRadius: "50%",
                background: i === 0 ? C.cyan : C.cyanDim,
                boxShadow: i === 0 ? `0 0 5px ${C.cyan}` : "none",
                animation: i === 0 ? "hud-pulse 2s ease-in-out infinite" : "none",
              }} />
            ))}
          </div>
          <span style={{
            fontSize: 13, letterSpacing: "0.2em", color: C.cyan,
            fontWeight: 700, textShadow: `0 0 8px ${C.cyan}66`,
          }}>
            NEURAL // CAT AVATAR CONTROL
          </span>
        </div>

        {/* right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <span style={{
            fontSize: 10, letterSpacing: "0.12em", color: C.green,
            animation: "hud-pulse 3s ease-in-out infinite",
          }}>
            ● NEURAL LINK ACTIVE
          </span>
          <span style={{
            fontSize: 10, color: C.muted, letterSpacing: "0.1em",
          }}>
            {getSampleRate()} Hz
          </span>
          <button
            onClick={onExit}
            style={{
              padding: "3px 10px",
              background: "transparent",
              border: `1px solid ${C.red}`,
              color: C.red,
              fontSize: 11,
              fontFamily: "monospace",
              letterSpacing: "0.1em",
              cursor: "pointer",
              borderRadius: 2,
            }}
          >
            EXIT
          </button>
        </div>
      </div>

      {/* ── MAIN AREA ────────────────────────────────────────────────────── */}
      <div style={{
        flex: 1,
        display: "grid",
        gridTemplateColumns: "220px 1fr 240px",
        gap: 0,
        overflow: "hidden",
        minHeight: 0,
      }}>

        {/* ── LEFT: Band powers ─────────────────────────────────────────── */}
        <div style={{
          padding: "16px 14px",
          borderRight: `1px solid ${C.border}`,
          background: C.panel,
          overflowY: "auto",
        }}>
          <SectionHeader label="EEG BAND POWERS" />

          {FREQUENCY_BANDS.map(b => (
            <BandBar
              key={b.name}
              name={b.name}
              raw={bands[b.name] ?? 0}
              norm={normBands[b.name] ?? 0}
              color={BAND_COLORS[b.name]}
            />
          ))}

          <div style={{ marginTop: 14 }}>
            <SectionHeader label="MENTAL STATE" />
            <div style={{
              textAlign: "center", padding: "10px 0",
              fontSize: 18, fontWeight: 700, letterSpacing: "0.18em",
              color: mentalColor[mentalState],
              textShadow: `0 0 10px ${mentalColor[mentalState]}`,
            }}>
              {mentalLabel[mentalState]}
            </div>
          </div>

          <div style={{ marginTop: 10 }}>
            <SectionHeader label="ALPHA / BETA RATIO" />
            {(() => {
              const a = normBands.Alpha ?? 0;
              const b = normBands.Beta ?? 0;
              const ratio = b > 0.001 ? a / b : 0;
              const pct = Math.min(100, ratio * 50);
              return (
                <>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontSize: 10, color: C.muted, width: 16 }}>α</span>
                    <div style={{ flex: 1, height: 5, background: C.border, borderRadius: 2 }}>
                      <div style={{
                        height: "100%", width: `${pct}%`,
                        background: C.green, borderRadius: 2,
                        boxShadow: `0 0 5px ${C.green}`,
                        transition: "width 0.2s",
                      }} />
                    </div>
                    <span style={{ fontSize: 10, color: C.green, fontFamily: "monospace", width: 30, textAlign: "right" }}>
                      {ratio.toFixed(2)}
                    </span>
                  </div>
                  <p style={{ fontSize: 9, color: C.muted, marginTop: 4, lineHeight: 1.4 }}>
                    α/β &gt; 1.0 → relaxed · α/β &lt; 0.5 → focused
                  </p>
                </>
              );
            })()}
          </div>
        </div>

        {/* ── CENTER: Cat avatar ────────────────────────────────────────── */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          padding: 20,
          position: "relative",
        }}>
          <CornerBrackets />

          {/* 3D VRM avatar — fills center, iron-man lit */}
          <div style={{
            position: "relative",
            width: 240,
            height: 320,
            borderRadius: 4,
            overflow: "hidden",
            border: `1px solid ${C.border}`,
            boxShadow: `0 0 20px #5fe9ff18, inset 0 0 20px #00000060`,
          }}>
            <VrmViewer
              isBlinking={isBlinking}
              earState={earState}
              mentalState={mentalState}
            />
          </div>

          {/* Status readouts under avatar */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 8,
            width: "100%",
            maxWidth: 380,
          }}>
            {[
              { label: "MENTAL STATE", value: mentalLabel[mentalState], color: mentalColor[mentalState] },
              { label: "EAR STATE",    value: earLabel[earState],       color: earColor[earState] },
              { label: "BLINK",        value: isBlinking ? "BLINKING ●" : "READY ○", color: isBlinking ? C.red : C.green },
            ].map(({ label, value, color }) => (
              <div key={label} style={{
                background: C.panel,
                border: `1px solid ${C.border}`,
                borderRadius: 4,
                padding: "8px 10px",
                textAlign: "center",
              }}>
                <div style={{ fontSize: 9, color: C.muted, letterSpacing: "0.12em",
                  textTransform: "uppercase", marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 11, color, fontWeight: 700,
                  textShadow: `0 0 6px ${color}` }}>{value}</div>
              </div>
            ))}
          </div>

          {/* Frontal channel waveforms */}
          <div style={{
            width: "100%", maxWidth: 420,
            background: C.panel,
            border: `1px solid ${C.border}`,
            borderRadius: 4,
            padding: "10px 12px",
          }}>
            <SectionHeader label="FRONTAL CHANNEL EEG (Fp1 / Fp2)" />
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[0, 1].map(ch => (
                <div key={ch} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 10, color: ch === 0 ? C.cyan : C.orange,
                    fontFamily: "monospace", width: 28 }}>
                    {ch === 0 ? "Fp1" : "Fp2"}
                  </span>
                  <div style={{ flex: 1, background: "#060c14", borderRadius: 2, overflow: "hidden" }}>
                    <WaveformCanvas
                      bufs={bufs}
                      wi={wi}
                      sib={sib}
                      bs={bs}
                      channel={ch}
                      color={ch === 0 ? C.cyan : C.orange}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* render dep: tick ensures canvas repaints every FFT cycle */}
            <span style={{ display: "none" }}>{tick}</span>
          </div>
        </div>

        {/* ── RIGHT: Blink detection + signal quality ───────────────────── */}
        <div style={{
          padding: "16px 14px",
          borderLeft: `1px solid ${C.border}`,
          background: C.panel,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          overflowY: "auto",
        }}>
          {/* Blink detection */}
          <div>
            <SectionHeader label="BLINK DETECTION" />
            <StatRow
              label="STATUS"
              value={isBlinking ? "BLINK" : "IDLE"}
              valueColor={isBlinking ? C.red : C.green}
            />
            <StatRow
              label="TOTAL"
              value={`${blinkCount}`}
              valueColor={C.cyan}
            />
            <StatRow
              label="LAST"
              value={lastBlinkAt
                ? `${((performance.now() - lastBlinkAt) / 1000).toFixed(1)}s ago`
                : "—"}
              valueColor={C.muted}
            />
            <StatRow
              label="AUTO BLINK"
              value={autoBlinkOn ? "ON" : "OFF"}
              valueColor={autoBlinkOn ? C.green : C.muted}
            />

            {/* Toggle auto blink */}
            <button
              onClick={() => setAutoBlinkOn(v => !v)}
              style={{
                marginTop: 6,
                width: "100%",
                padding: "5px 0",
                background: autoBlinkOn ? `${C.green}22` : C.border,
                border: `1px solid ${autoBlinkOn ? C.green : C.muted}`,
                color: autoBlinkOn ? C.green : C.muted,
                fontSize: 10,
                fontFamily: "monospace",
                letterSpacing: "0.12em",
                cursor: "pointer",
                borderRadius: 2,
              }}
            >
              {autoBlinkOn ? "DISABLE AUTO-BLINK" : "ENABLE AUTO-BLINK"}
            </button>
          </div>

          {/* Signal quality */}
          <div>
            <SectionHeader label="SIGNAL QUALITY" />
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <QualityBar value={sigQuality[0]} label="Fp1" />
              <QualityBar value={sigQuality[1]} label="Fp2" />
            </div>
            <p style={{ fontSize: 9, color: C.muted, marginTop: 8, lineHeight: 1.5 }}>
              Fp1/Fp2 p2p amplitude. &gt;70% = good contact.
              Low values indicate poor electrode seal.
            </p>
          </div>

          {/* Ear driver info */}
          <div>
            <SectionHeader label="EAR DRIVER" />
            <StatRow
              label="STATE"
              value={earLabel[earState]}
              valueColor={earColor[earState]}
            />
            <StatRow
              label="ALPHA"
              value={(normBands.Alpha ?? 0).toFixed(2)}
              valueColor={BAND_COLORS.Alpha}
            />
            <StatRow
              label="THETA"
              value={(normBands.Theta ?? 0).toFixed(2)}
              valueColor={BAND_COLORS.Theta}
            />
            <StatRow
              label="BETA"
              value={(normBands.Beta ?? 0).toFixed(2)}
              valueColor={BAND_COLORS.Beta}
            />
            <StatRow
              label="GAMMA"
              value={(normBands.Gamma ?? 0).toFixed(2)}
              valueColor={BAND_COLORS.Gamma}
            />
            <div style={{
              marginTop: 8, padding: "6px 8px",
              background: `${C.border}60`, borderRadius: 3,
              fontSize: 9, color: C.muted, lineHeight: 1.5,
            }}>
              α+θ {">"} β+γ → drooped (calm)<br />
              β+γ {">"} α+θ → perked (alert)<br />
              balanced → neutral
            </div>
          </div>

          {/* Help */}
          <div>
            <SectionHeader label="ABOUT" />
            <p style={{ fontSize: 9, color: C.muted, lineHeight: 1.6, margin: 0 }}>
              Cat avatar driven by live EEG.<br /><br />
              <strong style={{ color: C.cyan }}>Blinking:</strong> detected from
              Fp1/Fp2 blink artifacts (large amplitude spikes in frontal channels).<br /><br />
              <strong style={{ color: C.cyan }}>Ears:</strong> shaped by the
              alpha/theta vs. beta/gamma power ratio in real time.
            </p>
          </div>
        </div>
      </div>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 16px",
        height: 36,
        background: C.panel,
        borderTop: `1px solid ${C.cyanDim}`,
        flexShrink: 0,
      }}>
        <span style={{ fontSize: 9, color: C.muted, letterSpacing: "0.1em" }}>
          PIEEG // CAT AVATAR CONTROL v1.0
        </span>
        <div style={{ display: "flex", gap: 20 }}>
          <span style={{ fontSize: 9, color: C.muted }}>
            SAMPLE RATE: <span style={{ color: C.cyan }}>{getSampleRate()} Hz</span>
          </span>
          <span style={{ fontSize: 9, color: C.muted }}>
            CHANNELS: <span style={{ color: C.cyan }}>{eegData.numChannels}</span>
          </span>
          <span style={{ fontSize: 9, color: C.muted }}>
            FFT WINDOW: <span style={{ color: C.cyan }}>{FFT_SIZE} pts</span>
          </span>
          <span style={{ fontSize: 9, color: C.muted }}>
            BLINKS: <span style={{ color: C.orange }}>{blinkCount}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
