// ─────────────────────────────────────────────────────────────────────────────
// TrainingOverlay — contrastive 2-state EEG calibration UI.
//
// Protocol:
//   0.  INTRO          — user-paced. Explains the paradigm before recording.
//   1.  PREP  (5 s)    — "Get ready, neutral face, eyes open"
//   2.  REST  (20 s)   — record baseline log-band features (~200 samples)
//   3.  PREP  (5 s)    — "Now: <express / imagine the cue>"
//   4.  ACTIVE (20 s)  — record activation features (~200 samples)
//   5.  ANALYSIS       — Cohen's d ranking over every (channel × band)
//   6.  REVIEW         — ranked feature picker. User decides what to commit.
//
// Why the longer windows?
//   With ~200 samples per phase, the Welford mean/variance estimates are much
//   tighter than what 60 samples (a 6 s window at 10 Hz polling) gives us. The
//   Cohen's d we report is then less noisy as a description of *this session's*
//   separability — it is not a generalisation claim.
//
// Scientific notes:
//   • log10 transform of band power approximates a more Gaussian distribution
//     for EEG, making variance-based effect sizes meaningful at all.
//   • Cohen's d treats both populations symmetrically; d>0 means "active >
//     rest", d<0 means the inverse. We auto-set `invert` accordingly.
//   • Quality labels (strong / usable / marginal / inconclusive) are
//     intentionally non-clinical. They describe within-session separability,
//     not BCI performance, cognitive state, or anything generalisable.
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
import { linkFromRanked, qualityFromD, rankFeatures, type RankedFeature } from "./engine";
import { deepCopyNeuroFrame } from "./frame";
import { TOKENS } from "./MappingStudio";

type Phase = "intro" | "prep1" | "rest" | "prep2" | "active" | "analysis" | "review";

const DURATIONS: Record<"prep1" | "rest" | "prep2" | "active", number> = {
  prep1: 5000,
  rest: 20000,
  prep2: 5000,
  active: 20000,
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
  const [phase, setPhase] = useState<Phase>("intro");
  const [progress, setProgress] = useState(0); // 0..1 within current phase
  const [sampleTick, setSampleTick] = useState(0); // re-render trigger for live counters
  const restFramesRef = useRef<NeuroFrame[]>([]);
  const activeFramesRef = useRef<NeuroFrame[]>([]);
  const [ranking, setRanking] = useState<RankedFeature[]>([]);
  const [selected, setSelected] = useState<Set<number>>(new Set([0])); // indices in ranking

  // ── Phase machine ────────────────────────────────────────────────
  useEffect(() => {
    if (phase === "intro" || phase === "analysis" || phase === "review") return;

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
        target.push(deepCopyNeuroFrame(f));
        // Lightweight re-render so the on-screen sample counter ticks up.
        setSampleTick((n) => (n + 1) | 0);
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
      case "intro":
        return {
          title:
            mode === "refine"
              ? `Recalibrate “${expression}”`
              : `Calibrate a new link for “${expression}”`,
          sub:
            `We will record two short windows of brain activity — one while you are\u00a0relaxed, one while you actively produce a chosen mental or facial cue — and then compare them. The channels whose log-band power separates the two windows most cleanly become your driver.`,
        };
      case "prep1":
        return {
          title: "Get ready — neutral baseline",
          sub:
            `In a moment we'll record ${DURATIONS.rest / 1000}\u00a0s of REST. Settle in, face relaxed, jaw unclenched, eyes open and softly fixated. Don't think about “${expression}” yet.`,
        };
      case "rest":
        return {
          title: "REST · neutral baseline",
          sub:
            `Recording your baseline. Keep your face relaxed and your breathing even. Try not to do “${expression}”; we need a clean reference.`,
        };
      case "prep2":
        return {
          title: "Get ready — active state",
          sub:
            `Next: ${DURATIONS.active / 1000}\u00a0s of ACTIVE. Pick a single repeatable cue (a clear mental image, a subtle muscular intention, or both) and stick with it the whole window — consistency matters more than intensity.`,
        };
      case "active":
        return {
          title: `ACTIVE · ${expression}`,
          sub:
            `Hold your cue. Keep the same intensity throughout — don't push at the end. Repeat the mental / muscular instruction rhythmically until the timer fills.`,
        };
      case "analysis":
        return {
          title: "Comparing the two windows…",
          sub: `Computing Cohen's d on log-power for every (channel × band) pair.`,
        };
      case "review":
        return {
          title: "Pick which channels drive the avatar",
          sub:
            mode === "refine"
              ? `Refining the calibration for “${expression}”. The most clearly separated channel is pre-selected.`
              : `Channels are ranked by within-session separability of REST vs ACTIVE. These are descriptive statistics for this recording, not generalisation claims.`,
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

  // Live sample counters (re-render driven by sampleTick).
  void sampleTick;
  const liveSamples =
    phase === "rest"
      ? restFramesRef.current.length
      : phase === "active"
        ? activeFramesRef.current.length
        : 0;
  const expectedSamples =
    phase === "rest" || phase === "active"
      ? Math.round((DURATIONS[phase] / 1000) * POLL_HZ)
      : 0;

  // ── Render ────────────────────────────────────────────────────────────
  return (
    <div style={overlayStyles.scrim}>
      <div style={overlayStyles.panel}>
        {/* Header */}
        <div style={overlayStyles.header}>
          <div>
            <div style={overlayStyles.eyebrow}>
              Calibration · two-state contrastive paradigm
            </div>
            <div style={overlayStyles.title}>{cueText.title}</div>
            <div style={overlayStyles.subtitle}>{cueText.sub}</div>
          </div>
          <button onClick={onCancel} style={overlayStyles.closeBtn} title="Cancel calibration">
            ✕
          </button>
        </div>

        {/* Body: intro screen, recording dial, or ranked review */}
        {phase === "intro" ? (
          <IntroBody expression={expression} mode={mode} />
        ) : phase !== "review" ? (
          <RecordingBody
            phase={phase}
            progress={progress}
            expression={expression}
            liveSamples={liveSamples}
            expectedSamples={expectedSamples}
          />
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
            {phase === "review" ? "Cancel" : "Abort"}
          </button>
          {phase === "intro" && (
            <button onClick={() => setPhase("prep1")} style={overlayStyles.primaryBtn}>
              Start calibration →
            </button>
          )}
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

// ── Intro body — explains the protocol before any recording starts ─────

function IntroBody({
  expression,
  mode,
}: {
  expression: string;
  mode: "discover" | "refine";
}) {
  const totalSec = (DURATIONS.prep1 + DURATIONS.rest + DURATIONS.prep2 + DURATIONS.active) / 1000;
  return (
    <div style={overlayStyles.introBody}>
      <div style={overlayStyles.introGrid}>
        <IntroStep
          n={1}
          title={`REST · ${DURATIONS.rest / 1000} s`}
          body={`Sit quietly with a relaxed face. We record your baseline log-band power on every channel.`}
          color="#5cd6a0"
        />
        <IntroStep
          n={2}
          title={`ACTIVE · ${DURATIONS.active / 1000} s`}
          body={`Produce a single, repeatable cue for “${expression}”. Hold it steady — consistency matters more than intensity.`}
          color="#ff9ec0"
        />
        <IntroStep
          n={3}
          title="Compare"
          body={`We rank every (channel × band) by Cohen's d on log-power between the two windows, and let you pick which channels drive the avatar.`}
          color={TOKENS.accent}
        />
      </div>
      <div style={overlayStyles.introMeta}>
        <div>
          <span style={overlayStyles.metaKey}>Total time</span>
          <span style={overlayStyles.metaVal}>~{Math.round(totalSec)} s</span>
        </div>
        <div>
          <span style={overlayStyles.metaKey}>Samples / window</span>
          <span style={overlayStyles.metaVal}>~{Math.round((DURATIONS.rest / 1000) * POLL_HZ)}</span>
        </div>
        <div>
          <span style={overlayStyles.metaKey}>Mode</span>
          <span style={overlayStyles.metaVal}>{mode === "refine" ? "refine existing" : "discover new"}</span>
        </div>
      </div>
      <div style={overlayStyles.introCaveat}>
        Tips. Hold a steady posture. Don't blink heavily during REST or ACTIVE — both phases get the same artefacts then,
        which wipes out the contrast. Pick a cue you can hold for the whole {DURATIONS.active / 1000} s without forcing it.
      </div>
      <div style={overlayStyles.introDisclaimer}>
        The numbers reported by this tool are within-session descriptive statistics. They quantify how separable
        your two recorded windows are <em>right now</em>, on this electrode placement — not cognitive content,
        not BCI accuracy, not anything that generalises across sessions or subjects.
      </div>
    </div>
  );
}

function IntroStep({
  n,
  title,
  body,
  color,
}: {
  n: number;
  title: string;
  body: string;
  color: string;
}) {
  return (
    <div style={overlayStyles.introStep}>
      <div style={{ ...overlayStyles.introBadge, color, borderColor: color + "55", background: color + "11" }}>
        {n}
      </div>
      <div>
        <div style={overlayStyles.introStepTitle}>{title}</div>
        <div style={overlayStyles.introStepBody}>{body}</div>
      </div>
    </div>
  );
}

// ── Recording body — large circular progress + phase pips ─────────────

function RecordingBody({
  phase,
  progress,
  expression,
  liveSamples,
  expectedSamples,
}: {
  phase: Phase;
  progress: number;
  expression: string;
  liveSamples: number;
  expectedSamples: number;
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

  const phaseDurationSec =
    phase === "rest"
      ? DURATIONS.rest / 1000
      : phase === "active"
        ? DURATIONS.active / 1000
        : phase === "prep1"
          ? DURATIONS.prep1 / 1000
          : phase === "prep2"
            ? DURATIONS.prep2 / 1000
            : 0;
  const remainingSec = Math.max(0, Math.ceil((1 - progress) * phaseDurationSec));

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
          {phase === "analysis" ? "…" : `${remainingSec}s`}
        </text>
      </svg>
      {isRecording && (
        <div style={overlayStyles.liveReadout}>
          <span style={overlayStyles.liveSamples}>
            {liveSamples} / {expectedSamples} samples
          </span>
          <span style={overlayStyles.liveHint}>
            polling at {POLL_HZ} Hz · log-power on every channel
          </span>
        </div>
      )}
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
        <span style={{ flex: 3, textAlign: "left" }}>Session contrast · |d|</span>
        <span style={{ width: 60, textAlign: "right" }}>R → A</span>
      </div>
      {top.map((f, i) => {
        const isSel = selected.has(i);
        const abs = Math.abs(f.d);
        const w = (abs / maxD) * 100;
        const q = qualityFromD(abs, true);
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
                  width: 160,
                }}
                title={q.hint}
              >
                {abs.toFixed(2)} · {q.label}
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
        |d| ≥ 1.2 strong session contrast · ≥ 0.8 usable · ≥ 0.4 marginal · &lt; 0.4 inconclusive.
        Positive d means ACTIVE increased the band power; negative d means ACTIVE decreased it (we auto-flip
        the link's invert flag so the avatar still moves in the intuitive direction). These are descriptive
        within-session statistics, not generalisation claims.
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
    gap: 18,
  },
  liveReadout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },
  liveSamples: {
    fontFamily: TOKENS.mono,
    fontSize: 13,
    color: TOKENS.text,
    letterSpacing: 0.4,
  },
  liveHint: {
    fontSize: 10,
    color: TOKENS.textFaint,
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
  introBody: {
    padding: "20px 24px 24px",
    display: "flex",
    flexDirection: "column",
    gap: 18,
    overflowY: "auto",
  },
  introGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 12,
  },
  introStep: {
    display: "flex",
    gap: 12,
    padding: 14,
    borderRadius: 10,
    border: `1px solid ${TOKENS.border}`,
    background: "rgba(255,255,255,0.02)",
    alignItems: "flex-start",
  },
  introBadge: {
    width: 28,
    height: 28,
    minWidth: 28,
    borderRadius: 14,
    border: "1px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: TOKENS.mono,
    fontSize: 13,
    fontWeight: 600,
  },
  introStepTitle: {
    fontSize: 13,
    fontWeight: 600,
    color: TOKENS.text,
    marginBottom: 4,
  },
  introStepBody: {
    fontSize: 12,
    color: TOKENS.textDim,
    lineHeight: 1.5,
  },
  introMeta: {
    display: "flex",
    gap: 24,
    padding: "10px 14px",
    borderRadius: 8,
    background: "rgba(255,255,255,0.03)",
    border: `1px solid ${TOKENS.border}`,
  },
  metaKey: {
    display: "block",
    fontSize: 9,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: TOKENS.textFaint,
    marginBottom: 3,
  },
  metaVal: {
    fontFamily: TOKENS.mono,
    fontSize: 13,
    color: TOKENS.text,
  },
  introCaveat: {
    fontSize: 11,
    lineHeight: 1.5,
    color: TOKENS.textDim,
    padding: "10px 14px",
    borderLeft: `2px solid ${TOKENS.accent}55`,
    background: "rgba(255,255,255,0.015)",
    borderRadius: "0 6px 6px 0",
  },
  introDisclaimer: {
    fontSize: 10,
    lineHeight: 1.5,
    color: TOKENS.textFaint,
    fontStyle: "italic",
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
