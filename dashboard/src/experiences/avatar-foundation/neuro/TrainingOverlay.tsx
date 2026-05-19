// ─────────────────────────────────────────────────────────────────────────────
// TrainingOverlay — contrastive 2-state EEG calibration UI.
//
// Protocol:
//   1.  PREP   (3 s)   — "Get ready, neutral face, eyes open"
//   2.  REST   (6 s)   — record baseline log-band features for every channel
//   3.  PREP   (3 s)   — "Now: <express the cue>"
//   4.  ACTIVE (6 s)   — record activation features
//   5.  ANALYSIS       — Cohen's d ranking over every (channel × band)
//   6.  REVIEW         — top-N feature picker; user applies the best one (or
//                        all good ones for a multi-channel blend)
//
// Scientific notes:
//   • log10 transform of band power approximates a more Gaussian distribution
//     for EEG, making variance-based effect sizes more meaningful.
//   • Cohen's d treats both populations symmetrically; d>0 means "active feature
//     > rest", d<0 means inverse. We auto-set `invert` accordingly.
//   • Frame buffering uses a copy of the NeuroFrame at each polled tick.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useMemo, useRef, useState } from "react";
import type { MutableRefObject } from "react";
import {
  BAND_COLORS,
  BAND_NAMES,
  channelLabel,
  type Link,
  type NeuroFrame,
} from "./types";
import { linkFromRanked, rankFeatures, type RankedFeature } from "./engine";
import { TOKENS } from "./MappingStudio";

type Phase = "prep1" | "rest" | "prep2" | "active" | "analysis" | "review";

const DURATIONS: Record<Exclude<Phase, "analysis" | "review">, number> = {
  prep1: 3000,
  rest: 6000,
  prep2: 3000,
  active: 6000,
};

const POLL_HZ = 10; // sample the NeuroFrame at this rate during REST/ACTIVE

export interface TrainingOverlayProps {
  expression: string;
  /** "discover" = create a new best-link; "refine" = update existing link's calibration only. */
  mode: "discover" | "refine";
  existingLinkId?: string;
  numChannels: number;
  frameRef: MutableRefObject<NeuroFrame>;
  onCancel: () => void;
  onApply: (newOrUpdated: Link[], removedIds: string[]) => void;
}

export function TrainingOverlay({
  expression,
  mode,
  existingLinkId,
  numChannels,
  frameRef,
  onCancel,
  onApply,
}: TrainingOverlayProps) {
  const [phase, setPhase] = useState<Phase>("prep1");
  const [progress, setProgress] = useState(0); // 0..1 within current phase
  const restFramesRef = useRef<NeuroFrame[]>([]);
  const activeFramesRef = useRef<NeuroFrame[]>([]);
  const [ranking, setRanking] = useState<RankedFeature[]>([]);
  const [selected, setSelected] = useState<Set<number>>(new Set([0])); // indices in ranking

  // ── Phase machine ─────────────────────────────────────────────────────
  useEffect(() => {
    if (phase === "analysis" || phase === "review") return;

    const duration = DURATIONS[phase];
    const start = performance.now();
    let pollTimer: ReturnType<typeof setInterval> | null = null;

    // Sample frames during recording phases
    if (phase === "rest" || phase === "active") {
      const target = phase === "rest" ? restFramesRef.current : activeFramesRef.current;
      target.length = 0;
      pollTimer = setInterval(() => {
        const f = frameRef.current;
        if (!f.ready) return;
        // Deep copy the snapshot so later mutations don't contaminate stats.
        target.push({
          ts: f.ts,
          ready: true,
          channels: f.channels.map((c) => ({
            logBands: new Float32Array(c.logBands),
            dominantBand: c.dominantBand,
            rms: c.rms,
          })),
        });
      }, Math.round(1000 / POLL_HZ));
    }

    const tick = () => {
      const t = performance.now() - start;
      const p = Math.min(1, t / duration);
      setProgress(p);
      if (p < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        // Advance phase
        const order: Phase[] = ["prep1", "rest", "prep2", "active", "analysis"];
        const idx = order.indexOf(phase);
        const next = order[idx + 1] ?? "review";
        setPhase(next);
      }
    };
    let rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      if (pollTimer) clearInterval(pollTimer);
    };
  }, [phase, frameRef]);

  // ── Run analysis when entering analysis phase ─────────────────────────
  useEffect(() => {
    if (phase !== "analysis") return;
    // Slight defer so the UI flashes the "Analyzing…" state.
    const t = setTimeout(() => {
      const r = rankFeatures(
        restFramesRef.current,
        activeFramesRef.current,
        numChannels,
      );
      setRanking(r);
      setSelected(new Set(r.length > 0 ? [0] : []));
      setPhase("review");
    }, 350);
    return () => clearTimeout(t);
  }, [phase, numChannels]);

  // ── Helpers ───────────────────────────────────────────────────────────
  const cueText = useMemo(() => {
    switch (phase) {
      case "prep1":
        return {
          title: "Get ready",
          sub: `In a moment: relax your face — eyes open, neutral expression.`,
        };
      case "rest":
        return {
          title: "REST · neutral face",
          sub: `Just sit. Don't do "${expression}". Even breathing.`,
        };
      case "prep2":
        return {
          title: "Get ready",
          sub: `Next: actively perform / imagine "${expression}". Pick a cue you can repeat.`,
        };
      case "active":
        return {
          title: `ACTIVE · ${expression}`,
          sub: `Hold it. Repeat your mental / muscular cue rhythmically until the bar fills.`,
        };
      case "analysis":
        return {
          title: "Analyzing…",
          sub: `Computing Cohen's d for every (channel × band) pair.`,
        };
      case "review":
        return {
          title: "Pick your channels",
          sub:
            mode === "refine"
              ? `Refining calibration for "${expression}" — the strongest contrasts are pre-selected.`
              : `These channels showed the strongest difference between REST and ACTIVE. Pick one (or several) to drive "${expression}".`,
        };
    }
  }, [phase, expression, mode]);

  const apply = () => {
    if (mode === "refine" && existingLinkId) {
      // Refine: pull calibration from the top selected feature only.
      const idx = Array.from(selected)[0] ?? 0;
      const top = ranking[idx];
      if (!top) {
        onApply([], []);
        return;
      }
      const refined = linkFromRanked(
        top,
        expression,
        restFramesRef.current,
        activeFramesRef.current,
      );
      // Preserve the original id so user-facing edits don't get duplicated.
      refined.id = existingLinkId;
      onApply([refined], [existingLinkId]);
      return;
    }
    const newLinks: Link[] = [];
    for (const i of selected) {
      const f = ranking[i];
      if (!f) continue;
      newLinks.push(
        linkFromRanked(f, expression, restFramesRef.current, activeFramesRef.current),
      );
    }
    onApply(newLinks, []);
  };

  // ── Render ────────────────────────────────────────────────────────────
  return (
    <div style={overlayStyles.scrim}>
      <div style={overlayStyles.panel}>
        {/* Header */}
        <div style={overlayStyles.header}>
          <div>
            <div style={overlayStyles.eyebrow}>
              ⌖ Calibration · 2-state contrastive paradigm
            </div>
            <div style={overlayStyles.title}>{cueText.title}</div>
            <div style={overlayStyles.subtitle}>{cueText.sub}</div>
          </div>
          <button onClick={onCancel} style={overlayStyles.closeBtn}>
            ✕
          </button>
        </div>

        {/* Body: progress dial during recording, ranking during review */}
        {phase !== "review" ? (
          <RecordingBody phase={phase} progress={progress} expression={expression} />
        ) : (
          <ReviewBody
            ranking={ranking}
            selected={selected}
            setSelected={setSelected}
            multi={mode === "discover"}
          />
        )}

        {/* Footer */}
        <div style={overlayStyles.footer}>
          <button onClick={onCancel} style={overlayStyles.ghostBtn}>
            Cancel
          </button>
          {phase === "review" && (
            <button
              onClick={apply}
              style={overlayStyles.primaryBtn}
              disabled={selected.size === 0}
            >
              {mode === "refine"
                ? `Apply to existing link`
                : `Create ${selected.size} link${selected.size === 1 ? "" : "s"}`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Recording body — large circular progress + phase pips ─────────────

function RecordingBody({
  phase,
  progress,
  expression,
}: {
  phase: Phase;
  progress: number;
  expression: string;
}) {
  const radius = 80;
  const stroke = 8;
  const C = 2 * Math.PI * radius;
  const isRecording = phase === "rest" || phase === "active";
  const phaseColor =
    phase === "rest"
      ? "#5cd6a0"
      : phase === "active"
        ? "#ff9ec0"
        : phase === "analysis"
          ? TOKENS.accent
          : TOKENS.textDim;

  return (
    <div style={overlayStyles.recordBody}>
      <svg width={radius * 2 + stroke * 2} height={radius * 2 + stroke * 2}>
        <circle
          cx={radius + stroke}
          cy={radius + stroke}
          r={radius}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={radius + stroke}
          cy={radius + stroke}
          r={radius}
          stroke={phaseColor}
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={`${C * progress} ${C}`}
          strokeLinecap="round"
          transform={`rotate(-90 ${radius + stroke} ${radius + stroke})`}
          style={{ transition: "stroke 200ms" }}
        />
        <text
          x={radius + stroke}
          y={radius + stroke + 4}
          textAnchor="middle"
          fontSize={36}
          fontFamily={TOKENS.mono}
          fill={phaseColor}
        >
          {phase === "analysis"
            ? "…"
            : isRecording
              ? `${Math.ceil((1 - progress) * (phase === "rest" ? 6 : 6))}s`
              : `${Math.ceil((1 - progress) * 3)}s`}
        </text>
      </svg>
      <PhasePips phase={phase} expression={expression} />
    </div>
  );
}

function PhasePips({ phase, expression }: { phase: Phase; expression: string }) {
  const items: { id: Phase; label: string }[] = [
    { id: "prep1", label: "Ready" },
    { id: "rest", label: "Rest" },
    { id: "prep2", label: "Cue" },
    { id: "active", label: expression },
    { id: "analysis", label: "Analyze" },
  ];
  const currentIdx = items.findIndex((i) => i.id === phase);
  return (
    <div style={overlayStyles.pips}>
      {items.map((it, idx) => {
        const done = idx < currentIdx;
        const active = idx === currentIdx;
        return (
          <div key={it.id} style={overlayStyles.pipItem}>
            <div
              style={{
                ...overlayStyles.pipDot,
                background: active
                  ? TOKENS.accent
                  : done
                    ? TOKENS.success
                    : "rgba(255,255,255,0.1)",
                boxShadow: active ? `0 0 14px ${TOKENS.accent}` : "none",
              }}
            />
            <span
              style={{
                fontSize: 10,
                color: active ? TOKENS.text : done ? TOKENS.success : TOKENS.textFaint,
                letterSpacing: 0.6,
              }}
            >
              {it.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ── Review body — ranked features table ───────────────────────────────

function ReviewBody({
  ranking,
  selected,
  setSelected,
  multi,
}: {
  ranking: RankedFeature[];
  selected: Set<number>;
  setSelected: React.Dispatch<React.SetStateAction<Set<number>>>;
  multi: boolean;
}) {
  const top = ranking.slice(0, 8);
  if (top.length === 0) {
    return (
      <div style={{ padding: 32, textAlign: "center", color: TOKENS.textDim }}>
        No usable contrast was found. Try a stronger / more distinct cue and run
        the calibration again.
      </div>
    );
  }
  const maxD = Math.abs(top[0].d);
  return (
    <div style={overlayStyles.reviewBody}>
      <div style={overlayStyles.reviewHeader}>
        <span style={{ width: 18 }} />
        <span style={{ flex: 2 }}>Channel</span>
        <span style={{ flex: 1 }}>Band</span>
        <span style={{ flex: 3, textAlign: "left" }}>Effect size · |d|</span>
        <span style={{ width: 60, textAlign: "right" }}>R → A</span>
      </div>
      {top.map((f, i) => {
        const isSel = selected.has(i);
        const abs = Math.abs(f.d);
        const w = (abs / maxD) * 100;
        const quality =
          abs >= 1.2 ? "excellent" : abs >= 0.8 ? "good" : abs >= 0.4 ? "weak" : "noise";
        return (
          <div
            key={`${f.channel}-${f.band}`}
            style={{
              ...overlayStyles.reviewRow,
              borderColor: isSel ? TOKENS.accent + "88" : TOKENS.border,
              background: isSel ? TOKENS.accentSoft : "transparent",
            }}
            onClick={() => {
              setSelected((prev) => {
                const next = new Set(prev);
                if (!multi) next.clear();
                if (prev.has(i)) next.delete(i);
                else next.add(i);
                return next;
              });
            }}
          >
            <input
              type={multi ? "checkbox" : "radio"}
              checked={isSel}
              onChange={() => {}}
              style={{ accentColor: TOKENS.accent }}
            />
            <span style={{ flex: 2, fontSize: 12, color: TOKENS.text }}>
              {channelLabel(f.channel)}
            </span>
            <span style={{ flex: 1, fontSize: 12, color: BAND_COLORS[f.band] }}>
              {f.band}
            </span>
            <div style={{ flex: 3, display: "flex", alignItems: "center", gap: 10 }}>
              <div style={overlayStyles.dBarBg}>
                <div
                  style={{
                    ...overlayStyles.dBarFill,
                    width: `${w}%`,
                    background: f.d >= 0 ? "#5cd6a0" : "#ff9ec0",
                  }}
                />
              </div>
              <span
                style={{
                  fontSize: 11,
                  fontFamily: TOKENS.mono,
                  color: TOKENS.text,
                  width: 70,
                }}
              >
                {abs.toFixed(2)} · {quality}
              </span>
            </div>
            <span
              style={{
                width: 60,
                textAlign: "right",
                fontSize: 11,
                fontFamily: TOKENS.mono,
                color: TOKENS.textDim,
              }}
              title={`Rest log-power: ${f.rest.toFixed(2)} → Active log-power: ${f.active.toFixed(2)}`}
            >
              {f.rest.toFixed(1)}→{f.active.toFixed(1)}
            </span>
          </div>
        );
      })}
      <div style={overlayStyles.legend}>
        d ≥ 1.2 excellent · ≥ 0.8 good · ≥ 0.4 weak · &lt; 0.4 noise. Positive d ⇒ ACTIVE
        increases the band power; negative d ⇒ ACTIVE decreases it (auto-inverted).
      </div>
    </div>
  );
}

// ── Styles ───────────────────────────────────────────────────────────────

const overlayStyles: Record<string, React.CSSProperties> = {
  scrim: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.65)",
    backdropFilter: "blur(8px)",
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: TOKENS.font,
  },
  panel: {
    width: "min(720px, 90vw)",
    maxHeight: "85vh",
    background: TOKENS.bgRaised,
    border: `1px solid ${TOKENS.borderStrong}`,
    borderRadius: 14,
    color: TOKENS.text,
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
    overflow: "hidden",
  },
  header: {
    padding: "18px 22px",
    borderBottom: `1px solid ${TOKENS.border}`,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 16,
  },
  eyebrow: {
    fontSize: 10,
    color: TOKENS.accent,
    letterSpacing: 1.2,
    textTransform: "uppercase",
    marginBottom: 6,
  },
  title: { fontSize: 22, fontWeight: 600, color: TOKENS.text, marginBottom: 4 },
  subtitle: { fontSize: 13, color: TOKENS.textDim, lineHeight: 1.5, maxWidth: 540 },
  closeBtn: {
    background: "transparent",
    border: `1px solid ${TOKENS.border}`,
    color: TOKENS.text,
    width: 32,
    height: 32,
    borderRadius: 8,
    cursor: "pointer",
    fontFamily: TOKENS.mono,
  },
  recordBody: {
    padding: 32,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 24,
  },
  pips: { display: "flex", alignItems: "center", gap: 22 },
  pipItem: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6 },
  pipDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    transition: "all 250ms",
  },
  reviewBody: {
    padding: "16px 22px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  reviewHeader: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "6px 10px",
    fontSize: 10,
    color: TOKENS.textFaint,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  reviewRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "8px 10px",
    border: `1px solid ${TOKENS.border}`,
    borderRadius: 8,
    cursor: "pointer",
    transition: "background 150ms, border-color 150ms",
  },
  dBarBg: {
    flex: 1,
    height: 6,
    background: "rgba(255,255,255,0.06)",
    borderRadius: 3,
    overflow: "hidden",
  },
  dBarFill: { height: "100%", transition: "width 220ms" },
  legend: {
    fontSize: 10,
    color: TOKENS.textFaint,
    lineHeight: 1.6,
    padding: "8px 4px 0",
  },
  footer: {
    padding: "14px 22px",
    borderTop: `1px solid ${TOKENS.border}`,
    display: "flex",
    justifyContent: "flex-end",
    gap: 10,
  },
  primaryBtn: {
    padding: "8px 18px",
    background: TOKENS.accent,
    border: "none",
    color: "#0c0e17",
    fontWeight: 600,
    borderRadius: 8,
    cursor: "pointer",
    fontFamily: TOKENS.font,
    fontSize: 13,
  },
  ghostBtn: {
    padding: "8px 14px",
    background: "transparent",
    border: `1px solid ${TOKENS.borderStrong}`,
    color: TOKENS.text,
    borderRadius: 8,
    cursor: "pointer",
    fontFamily: TOKENS.font,
    fontSize: 13,
  },
};
