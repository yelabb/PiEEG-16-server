// ─────────────────────────────────────────────────────────────────────────────
// MappingStudio — Figma-for-neurofeedback control panel.
//
// Renders three rails over the 3D avatar viewport:
//   • Left:   live per-channel band power matrix
//   • Right:  avatar expressions with live activation bars
//   • Bottom: editable Link cards (channel → band → expression)
// Plus a top status bar and an inline + New Link composer.
//
// All real-time numbers (live values, RMS, activation) are read from refs
// at ~10 Hz via a single internal RAF loop, so the rest of React stays cheap.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useMemo, useRef, useState } from "react";
import type { MutableRefObject } from "react";
import {
  BAND_COLORS,
  BAND_HINTS,
  BAND_NAMES,
  channelLabel,
  type BandName,
  type Link,
  type LinkRuntime,
  type NeuroFrame,
} from "./types";
import { cohenD, isWellTrained, qualityFromD } from "./engine";

// ── Design tokens ─────────────────────────────────────────────────────────

const TOKENS = {
  bg: "rgba(10, 12, 20, 0.78)",
  bgRaised: "rgba(20, 22, 32, 0.92)",
  border: "rgba(255, 255, 255, 0.08)",
  borderStrong: "rgba(255, 255, 255, 0.16)",
  text: "#e8eaed",
  textDim: "#9aa0a6",
  textFaint: "#5f6368",
  accent: "#7c9eff",
  accentSoft: "rgba(124, 158, 255, 0.16)",
  danger: "#ff6b8b",
  success: "#5cd6a0",
  font: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
  mono: "ui-monospace, 'JetBrains Mono', 'Fira Code', monospace",
};

// ── Public props ─────────────────────────────────────────────────────────

export interface MappingStudioProps {
  numChannels: number;
  availableExpressions: string[];
  links: Link[];
  setLinks: (updater: (prev: Link[]) => Link[]) => void;
  /** Stable map id→runtime (mutated by the engine, read by UI loop). */
  runtimeRef: MutableRefObject<Map<string, LinkRuntime>>;
  /** Latest neuro frame from the FFT pipeline. */
  frameRef: MutableRefObject<NeuroFrame>;
  /** Begin a 2-state contrastive calibration for a target expression. */
  onStartTraining: (expression: string, mode: "discover" | "refine", existingLinkId?: string) => void;
  /** Currently active training session (if any). */
  trainingActive: boolean;
  /** Master pause: when true, no EEG signal is written to the avatar. */
  paused: boolean;
  onTogglePause: () => void;
  /** Briefly pulse an expression on the avatar for preview/demo. */
  onDemoExpression: (name: string) => void;
  /** Wipe all links + persisted calibration. */
  onResetAll: () => void;
  /** Optional avatar info pill. */
  statusText: string;
  onExit: () => void;
}

// ── Component ────────────────────────────────────────────────────────────

export function MappingStudio({
  numChannels,
  availableExpressions,
  links,
  setLinks,
  runtimeRef,
  frameRef,
  onStartTraining,
  trainingActive,
  paused,
  onTogglePause,
  onDemoExpression,
  onResetAll,
  statusText,
  onExit,
}: MappingStudioProps) {
  // Tick used to redraw live numerics at 20 Hz without re-rendering on every RAF.
  const [, setTick] = useState(0);
  useEffect(() => {
    let raf = 0;
    let last = 0;
    const loop = (t: number) => {
      if (t - last > 100) {
        // ~10 Hz
        last = t;
        setTick((x) => (x + 1) & 0xffff);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  // ── + New Link composer state ───────────────────────────────────────
  const [composerChannel, setComposerChannel] = useState(0);
  const [composerBand, setComposerBand] = useState<BandName>("Alpha");
  const [composerExpression, setComposerExpression] = useState<string>("");
  useEffect(() => {
    if (!composerExpression && availableExpressions.length > 0) {
      setComposerExpression(availableExpressions[0]);
    }
  }, [availableExpressions, composerExpression]);

  // ── Expression → live activation map (max over enabled links) ───────
  const liveExpression = useMemo(() => {
    const map = new Map<string, number>();
    for (const l of links) {
      if (!l.enabled) continue;
      const rt = runtimeRef.current.get(l.id);
      if (!rt) continue;
      const prev = map.get(l.expression) ?? 0;
      map.set(l.expression, Math.max(prev, rt.value));
    }
    return map;
  }, [links, runtimeRef.current.size, frameRef.current.ts]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Handlers ────────────────────────────────────────────────────────
  const addLink = (channel: number, band: BandName, expression: string) => {
    if (!expression) return;
    setLinks((prev) => [
      ...prev,
      {
        id: `${channel}-${band}-${expression}-${Date.now().toString(36)}`,
        channel,
        band,
        expression,
        cal: { rest: { n: 0, mean: 0, m2: 0 }, active: { n: 0, mean: 0, m2: 0 } },
        gain: 1.4,
        smoothing: 0.85,
        invert: false,
        enabled: true,
        snr: 0,
      },
    ]);
  };

  const updateLink = (id: string, patch: Partial<Link>) => {
    setLinks((prev) => prev.map((l) => (l.id === id ? { ...l, ...patch } : l)));
  };

  const removeLink = (id: string) => {
    setLinks((prev) => prev.filter((l) => l.id !== id));
  };

  // ── Render ──────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Top status bar ─────────────────────────────────────────── */}
      <div style={styles.topBar}>
        <div style={styles.brand}>
          <span style={{ color: TOKENS.accent, fontWeight: 600 }}>Avatar Neurofeedback Studio</span>
          <span style={{ color: TOKENS.textFaint, marginLeft: 10 }}>
            {numChannels} channels · {links.filter((l) => l.enabled).length}/{links.length} links live
          </span>
        </div>
        <div style={styles.brandRight}>
          <span style={{ color: TOKENS.textDim, fontSize: 11 }}>{statusText}</span>
          <button
            style={{
              ...styles.topBtn,
              color: paused ? TOKENS.danger : TOKENS.text,
              borderColor: paused ? TOKENS.danger : TOKENS.border,
            }}
            onClick={onTogglePause}
            title={paused ? "Resume EEG → avatar" : "Pause EEG → avatar (avatar returns to neutral)"}
          >
            {paused ? "▶ Resume" : "⏸ Pause"}
          </button>
          <button
            style={styles.topBtn}
            onClick={() => {
              if (links.length === 0 ||
                  window.confirm(`Reset ${links.length} link${links.length === 1 ? "" : "s"} and clear saved calibration?`)) {
                onResetAll();
              }
            }}
            title="Delete all links and clear saved calibration"
          >
            ↻ Reset
          </button>
          <button style={styles.exitBtn} onClick={onExit} title="Exit (Esc)">
            ✕
          </button>
        </div>
      </div>

      {/* ── Left rail: channels ────────────────────────────────────── */}
      <div style={styles.leftRail}>
        <div style={styles.railHeader}>
          <span>Channels</span>
          <span style={{ color: TOKENS.textFaint, fontSize: 10 }}>log µV²/Hz</span>
        </div>
        <div style={styles.railScroll}>
          {Array.from({ length: numChannels }, (_, ch) => (
            <ChannelRow
              key={ch}
              ch={ch}
              frame={frameRef.current}
              onPick={(band) =>
                addLink(ch, band, composerExpression || availableExpressions[0] || "")
              }
              disabled={!composerExpression && availableExpressions.length === 0}
            />
          ))}
        </div>
      </div>

      {/* ── Right rail: expressions ───────────────────────────────── */}
      <div style={styles.rightRail}>
        <div style={styles.railHeader}>
          <span>Expressions</span>
          <span style={{ color: TOKENS.textFaint, fontSize: 10 }}>live · click to train</span>
        </div>
        <div style={styles.railScroll}>
          {availableExpressions.length === 0 ? (
            <div style={{ padding: 12, color: TOKENS.textFaint, fontSize: 11 }}>
              Avatar has no morph targets / VRM expressions.
            </div>
          ) : (
            availableExpressions.map((e) => (
              <ExpressionRow
                key={e}
                name={e}
                activation={liveExpression.get(e) ?? 0}
                trained={links.some((l) => l.expression === e && isWellTrained(l))}
                onTrain={() => onStartTraining(e, "discover")}
                onDemo={() => onDemoExpression(e)}
                disabled={trainingActive}
              />
            ))
          )}
        </div>
      </div>

      {/* ── Bottom: link cards + composer ─────────────────────────── */}
      <div style={styles.bottom}>
        <div style={styles.composerBar}>
          <Pill label="Channel">
            <select
              value={composerChannel}
              onChange={(e) => setComposerChannel(Number(e.target.value))}
              style={styles.select}
            >
              {Array.from({ length: numChannels }, (_, i) => (
                <option key={i} value={i}>
                  {channelLabel(i)}
                </option>
              ))}
            </select>
          </Pill>
          <ArrowConnector />
          <Pill label="Band">
            <select
              value={composerBand}
              onChange={(e) => setComposerBand(e.target.value as BandName)}
              style={{ ...styles.select, color: BAND_COLORS[composerBand] }}
            >
              {BAND_NAMES.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </Pill>
          <ArrowConnector />
          <Pill label="Expression">
            <select
              value={composerExpression}
              onChange={(e) => setComposerExpression(e.target.value)}
              style={styles.select}
              disabled={availableExpressions.length === 0}
            >
              {availableExpressions.map((e) => (
                <option key={e} value={e}>
                  {e}
                </option>
              ))}
            </select>
          </Pill>
          <button
            style={styles.primaryBtn}
            disabled={!composerExpression}
            onClick={() => addLink(composerChannel, composerBand, composerExpression)}
            title="Add link without training (it'll use auto-mode until calibrated)"
          >
            + Add link
          </button>
          <button
            style={styles.ghostBtn}
            disabled={!composerExpression || trainingActive}
            onClick={() => onStartTraining(composerExpression, "discover")}
            title="Two-state contrastive training: REST vs ACTIVE. Auto-selects best channel/band."
          >
            ⌖ Train best channel
          </button>
        </div>

        <div style={styles.linksScroll}>
          {links.length === 0 ? (
            <div style={styles.emptyHint}>
              No mappings yet — choose a channel, band &amp; expression, then{" "}
              <strong style={{ color: TOKENS.accent }}>Train best channel</strong> to let the
              system pick the strongest electrode for your facial cue.
            </div>
          ) : (
            <div style={styles.linkGrid}>
              {links.map((l) => (
                <LinkCard
                  key={l.id}
                  link={l}
                  runtime={runtimeRef.current.get(l.id)}
                  onUpdate={(p) => updateLink(l.id, p)}
                  onRemove={() => removeLink(l.id)}
                  onRetrain={() => onStartTraining(l.expression, "refine", l.id)}
                  disabled={trainingActive}
                  availableExpressions={availableExpressions}
                  numChannels={numChannels}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// ── Channel row (left rail) ─────────────────────────────────────────────

function ChannelRow({
  ch,
  frame,
  onPick,
  disabled,
}: {
  ch: number;
  frame: NeuroFrame;
  onPick: (band: BandName) => void;
  disabled: boolean;
}) {
  const snap = frame.channels[ch];
  const logBands = snap?.logBands;
  // Normalise to local [min,max] for display
  let lo = Infinity;
  let hi = -Infinity;
  if (logBands) {
    for (let i = 0; i < logBands.length; i++) {
      const v = logBands[i];
      if (v < lo) lo = v;
      if (v > hi) hi = v;
    }
  }
  const span = hi - lo;
  const dominant = snap?.dominantBand ?? 0;

  return (
    <div style={styles.chRow}>
      <div style={styles.chLabel}>
        <span style={{ color: TOKENS.text, fontSize: 11 }}>{channelLabel(ch)}</span>
        <span
          style={{
            fontSize: 9,
            color: BAND_COLORS[BAND_NAMES[dominant]],
            fontFamily: TOKENS.mono,
          }}
        >
          {BAND_NAMES[dominant]?.[0] ?? "-"}
        </span>
      </div>
      <div style={styles.chBars}>
        {BAND_NAMES.map((b, i) => {
          const v = logBands?.[i] ?? 0;
          const h = span > 0 ? Math.max(2, Math.round(((v - lo) / span) * 22)) : 2;
          const isDom = i === dominant;
          return (
            <div
              key={b}
              style={styles.chBarWrap}
              title={`${b}: ${v.toFixed(2)}  (click to map to current expression)`}
              onClick={() => !disabled && onPick(b)}
            >
              <div
                style={{
                  height: h,
                  width: "100%",
                  background: BAND_COLORS[b],
                  opacity: isDom ? 1 : 0.55,
                  borderRadius: 1,
                  transition: "height 120ms",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Expression row (right rail) ────────────────────────────────────────

function ExpressionRow({
  name,
  activation,
  trained,
  onTrain,
  onDemo,
  disabled,
}: {
  name: string;
  activation: number;
  trained: boolean;
  onTrain: () => void;
  onDemo: () => void;
  disabled: boolean;
}) {
  return (
    <div
      style={{
        ...styles.exprRow,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      onClick={() => !disabled && onTrain()}
      title="Click to start a calibration session for this expression"
    >
      <div style={styles.exprRowTop}>
        <span style={{ fontSize: 11, color: TOKENS.text }}>{name}</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onDemo();
            }}
            title="Preview this expression on the avatar (1 s pulse)"
            style={styles.demoBtn}
          >
            ▶
          </button>
          <span
            style={{
              fontSize: 9,
              color: trained ? TOKENS.success : TOKENS.textFaint,
              fontFamily: TOKENS.mono,
            }}
          >
            {trained ? "● trained" : "○ untrained"}
          </span>
        </span>
      </div>
      <div style={styles.exprBarBg}>
        <div
          style={{
            ...styles.exprBarFill,
            width: `${Math.round(activation * 100)}%`,
            background: trained ? TOKENS.success : TOKENS.accent,
          }}
        />
      </div>
    </div>
  );
}

// ── Link card (bottom) ─────────────────────────────────────────────────

function LinkCard({
  link,
  runtime,
  onUpdate,
  onRemove,
  onRetrain,
  disabled,
  availableExpressions,
  numChannels,
}: {
  link: Link;
  runtime: LinkRuntime | undefined;
  onUpdate: (patch: Partial<Link>) => void;
  onRemove: () => void;
  onRetrain: () => void;
  disabled: boolean;
  availableExpressions: string[];
  numChannels: number;
}) {
  const value = runtime?.value ?? 0;
  const d = cohenD(link.cal.rest, link.cal.active);
  const well = isWellTrained(link);
  const accent = BAND_COLORS[link.band];

  return (
    <div
      style={{
        ...styles.linkCard,
        borderColor: link.enabled ? accent + "55" : TOKENS.border,
        boxShadow: link.enabled
          ? `0 0 0 1px ${accent}22, 0 4px 18px rgba(0,0,0,0.35)`
          : "none",
      }}
    >
      {/* Header */}
      <div style={styles.linkHeader}>
        <input
          type="checkbox"
          checked={link.enabled}
          onChange={(e) => onUpdate({ enabled: e.target.checked })}
          style={{ accentColor: accent }}
        />
        <select
          value={link.channel}
          onChange={(e) => onUpdate({ channel: Number(e.target.value) })}
          style={styles.compactSelect}
        >
          {Array.from({ length: numChannels }, (_, i) => (
            <option key={i} value={i}>
              {channelLabel(i)}
            </option>
          ))}
        </select>
        <span style={{ color: TOKENS.textFaint }}>·</span>
        <select
          value={link.band}
          onChange={(e) => onUpdate({ band: e.target.value as BandName })}
          style={{ ...styles.compactSelect, color: accent }}
        >
          {BAND_NAMES.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
        <span style={{ color: TOKENS.textFaint, fontSize: 11 }}>→</span>
        <select
          value={link.expression}
          onChange={(e) => onUpdate({ expression: e.target.value })}
          style={styles.compactSelect}
        >
          {availableExpressions.map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>
        <div style={{ flex: 1 }} />
        <button
          onClick={onRemove}
          style={styles.iconBtn}
          title="Remove link"
          disabled={disabled}
        >
          🗑
        </button>
      </div>

      {/* Live value bar */}
      <div style={styles.liveBarRow}>
        <div style={styles.liveBarBg}>
          <div
            style={{
              ...styles.liveBarFill,
              width: `${Math.round(value * 100)}%`,
              background: `linear-gradient(90deg, ${accent}88, ${accent})`,
            }}
          />
        </div>
        <span style={styles.liveValue}>{(value * 100).toFixed(0)}</span>
      </div>

      {/* Knobs */}
      <div style={styles.knobRow}>
        <Knob
          label="Gain"
          value={link.gain}
          min={0.2}
          max={4}
          step={0.1}
          onChange={(v) => onUpdate({ gain: v })}
        />
        <Knob
          label="Smooth"
          value={link.smoothing}
          min={0}
          max={0.97}
          step={0.01}
          onChange={(v) => onUpdate({ smoothing: v })}
        />
        <label style={styles.invertWrap} title="Flip the mapping direction">
          <input
            type="checkbox"
            checked={link.invert}
            onChange={(e) => onUpdate({ invert: e.target.checked })}
            style={{ accentColor: accent }}
          />
          <span style={{ fontSize: 10, color: TOKENS.textDim }}>invert</span>
        </label>
      </div>

      {/* Footer stats */}
      <div style={styles.linkFooter}>
        <SnrBadge d={d} well={well} />
        <span style={styles.statText} title="REST log-power mean">
          R {fmt(link.cal.rest.mean)}
        </span>
        <span style={styles.statText} title="ACTIVE log-power mean">
          A {fmt(link.cal.active.mean)}
        </span>
        <div style={{ flex: 1 }} />
        <button onClick={onRetrain} style={styles.tinyBtn} disabled={disabled}>
          ⌖ Re-train
        </button>
      </div>
    </div>
  );
}

function SnrBadge({ d, well }: { d: number; well: boolean }) {
  const abs = Math.abs(d);
  const q = qualityFromD(abs, well);
  const color =
    q.tier === "strong"
      ? TOKENS.success
      : q.tier === "usable"
        ? "#88d8ff"
        : q.tier === "marginal"
          ? "#f3b94d"
          : q.tier === "inconclusive"
            ? TOKENS.danger
            : TOKENS.textFaint;
  return (
    <span
      style={{
        ...styles.snrBadge,
        color,
        borderColor: color + "55",
        background: color + "11",
      }}
      title={`Cohen's d (within-session contrast) of log-power between REST and ACTIVE. ${q.hint}`}
    >
      d={abs.toFixed(2)} · {q.label}
    </span>
  );
}

function Knob({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div style={styles.knob}>
      <div style={styles.knobLabel}>
        <span style={{ fontSize: 9, color: TOKENS.textDim, textTransform: "uppercase", letterSpacing: 0.7 }}>
          {label}
        </span>
        <span style={{ fontSize: 10, color: TOKENS.text, fontFamily: TOKENS.mono }}>
          {value.toFixed(2)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={styles.range}
      />
    </div>
  );
}

function Pill({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={styles.pill}>
      <span style={styles.pillLabel}>{label}</span>
      {children}
    </div>
  );
}

function ArrowConnector() {
  return (
    <span style={{ color: TOKENS.textFaint, fontFamily: TOKENS.mono, fontSize: 14 }}>
      ⟶
    </span>
  );
}

function fmt(x: number): string {
  if (!Number.isFinite(x)) return "–";
  return x.toFixed(2);
}

// ── Styles ───────────────────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  topBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 16px",
    background: TOKENS.bg,
    backdropFilter: "blur(14px)",
    borderBottom: `1px solid ${TOKENS.border}`,
    color: TOKENS.text,
    fontFamily: TOKENS.font,
    fontSize: 12,
    zIndex: 10,
  },
  brand: { display: "flex", alignItems: "center", gap: 6, fontSize: 13 },
  brandRight: { display: "flex", alignItems: "center", gap: 8 },
  topBtn: {
    height: 26,
    padding: "0 10px",
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${TOKENS.border}`,
    borderRadius: 6,
    color: TOKENS.text,
    cursor: "pointer",
    fontFamily: TOKENS.font,
    fontSize: 11,
    letterSpacing: 0.3,
  },
  exitBtn: {
    width: 28,
    height: 28,
    background: "rgba(255,107,139,0.12)",
    border: `1px solid rgba(255,107,139,0.3)`,
    borderRadius: 6,
    color: "#fff",
    cursor: "pointer",
    fontFamily: TOKENS.mono,
  },
  leftRail: {
    position: "absolute",
    top: 44,
    left: 0,
    bottom: 230,
    width: 220,
    background: TOKENS.bg,
    backdropFilter: "blur(14px)",
    borderRight: `1px solid ${TOKENS.border}`,
    display: "flex",
    flexDirection: "column",
    color: TOKENS.text,
    fontFamily: TOKENS.font,
    zIndex: 9,
  },
  rightRail: {
    position: "absolute",
    top: 44,
    right: 0,
    bottom: 230,
    width: 240,
    background: TOKENS.bg,
    backdropFilter: "blur(14px)",
    borderLeft: `1px solid ${TOKENS.border}`,
    display: "flex",
    flexDirection: "column",
    color: TOKENS.text,
    fontFamily: TOKENS.font,
    zIndex: 9,
  },
  railHeader: {
    padding: "10px 14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 11,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    color: TOKENS.textDim,
    borderBottom: `1px solid ${TOKENS.border}`,
  },
  railScroll: { flex: 1, overflowY: "auto", padding: "6px 8px" },
  chRow: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    padding: "6px 8px",
    borderRadius: 6,
  },
  chLabel: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  chBars: { display: "flex", alignItems: "flex-end", gap: 3, height: 24 },
  chBarWrap: {
    flex: 1,
    display: "flex",
    alignItems: "flex-end",
    height: "100%",
    cursor: "pointer",
  },
  exprRow: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    padding: "8px 10px",
    margin: "3px 0",
    borderRadius: 6,
    border: `1px solid ${TOKENS.border}`,
    background: "rgba(255,255,255,0.02)",
  },
  exprRowTop: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  demoBtn: {
    width: 18,
    height: 18,
    padding: 0,
    borderRadius: "50%",
    border: `1px solid ${TOKENS.border}`,
    background: "rgba(255,255,255,0.04)",
    color: TOKENS.accent,
    fontSize: 9,
    lineHeight: "16px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  exprBarBg: {
    height: 5,
    background: "rgba(255,255,255,0.06)",
    borderRadius: 3,
    overflow: "hidden",
  },
  exprBarFill: { height: "100%", transition: "width 120ms" },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 230,
    background: TOKENS.bg,
    backdropFilter: "blur(14px)",
    borderTop: `1px solid ${TOKENS.border}`,
    color: TOKENS.text,
    fontFamily: TOKENS.font,
    display: "flex",
    flexDirection: "column",
    zIndex: 9,
  },
  composerBar: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 16px",
    borderBottom: `1px solid ${TOKENS.border}`,
    flexWrap: "wrap",
  },
  pill: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "4px 8px",
    background: TOKENS.bgRaised,
    border: `1px solid ${TOKENS.border}`,
    borderRadius: 8,
  },
  pillLabel: { fontSize: 10, color: TOKENS.textFaint, textTransform: "uppercase", letterSpacing: 1 },
  select: {
    background: "transparent",
    color: TOKENS.text,
    border: "none",
    fontFamily: TOKENS.font,
    fontSize: 12,
    outline: "none",
    cursor: "pointer",
  },
  primaryBtn: {
    padding: "6px 14px",
    background: TOKENS.accentSoft,
    color: TOKENS.accent,
    border: `1px solid ${TOKENS.accent}55`,
    borderRadius: 8,
    cursor: "pointer",
    fontFamily: TOKENS.font,
    fontSize: 12,
  },
  ghostBtn: {
    padding: "6px 12px",
    background: "transparent",
    color: TOKENS.text,
    border: `1px solid ${TOKENS.borderStrong}`,
    borderRadius: 8,
    cursor: "pointer",
    fontFamily: TOKENS.font,
    fontSize: 12,
  },
  linksScroll: { flex: 1, overflowY: "auto", padding: 12 },
  emptyHint: {
    padding: "20px 24px",
    color: TOKENS.textDim,
    fontSize: 12,
    lineHeight: 1.7,
    textAlign: "center",
  },
  linkGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: 10,
  },
  linkCard: {
    padding: "10px 12px",
    background: TOKENS.bgRaised,
    border: `1px solid ${TOKENS.border}`,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  linkHeader: { display: "flex", alignItems: "center", gap: 6, fontSize: 11 },
  compactSelect: {
    background: "rgba(255,255,255,0.04)",
    color: TOKENS.text,
    border: `1px solid ${TOKENS.border}`,
    borderRadius: 5,
    padding: "3px 6px",
    fontSize: 11,
    fontFamily: TOKENS.font,
    outline: "none",
  },
  iconBtn: {
    background: "transparent",
    border: "none",
    color: TOKENS.textDim,
    cursor: "pointer",
    fontSize: 13,
  },
  liveBarRow: { display: "flex", alignItems: "center", gap: 8 },
  liveBarBg: {
    flex: 1,
    height: 8,
    background: "rgba(255,255,255,0.05)",
    borderRadius: 4,
    overflow: "hidden",
  },
  liveBarFill: { height: "100%", transition: "width 80ms linear" },
  liveValue: {
    width: 28,
    fontFamily: TOKENS.mono,
    fontSize: 11,
    color: TOKENS.text,
    textAlign: "right",
  },
  knobRow: { display: "flex", alignItems: "center", gap: 12 },
  knob: { display: "flex", flexDirection: "column", gap: 2, flex: 1 },
  knobLabel: { display: "flex", justifyContent: "space-between" },
  range: { width: "100%", accentColor: TOKENS.accent },
  invertWrap: { display: "flex", alignItems: "center", gap: 4 },
  linkFooter: { display: "flex", alignItems: "center", gap: 8 },
  snrBadge: {
    fontSize: 10,
    fontFamily: TOKENS.mono,
    padding: "2px 7px",
    borderRadius: 10,
    border: `1px solid ${TOKENS.border}`,
  },
  statText: { fontSize: 10, color: TOKENS.textFaint, fontFamily: TOKENS.mono },
  tinyBtn: {
    padding: "3px 10px",
    fontSize: 10,
    background: "rgba(255,255,255,0.04)",
    color: TOKENS.text,
    border: `1px solid ${TOKENS.border}`,
    borderRadius: 5,
    cursor: "pointer",
    fontFamily: TOKENS.font,
  },
};

export { TOKENS, BAND_HINTS };
