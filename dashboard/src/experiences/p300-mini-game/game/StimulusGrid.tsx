// ─────────────────────────────────────────────────────────────────────────────
// P300 — Reference game: themed 3×3 stimulus grid
//
// This is ONE example game built on top of the P300 runtime. It is
// deliberately themeable (emoji icons, letters, monsters, spells…) to
// show that the ML layer does not care about the visual experience — it
// only consumes markers from the bus. Build your own game by emitting
// stimulus markers through `runtime.markFlash(...)`.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import type { P300Runtime } from "../runtime";
import type { CandidatePrediction } from "../types";

export type Theme = "icons" | "letters" | "monsters" | "spells";

const THEMES: Record<Theme, string[]> = {
  icons: ["🎯", "🚀", "🪐", "🎨", "🎵", "🍀", "🧠", "⚡", "🌙"],
  letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I"],
  monsters: ["👹", "👻", "👽", "🤖", "👾", "🐉", "🦑", "🦖", "🐙"],
  spells: ["🔥", "❄️", "🌀", "💫", "🌟", "🌪", "💥", "🌈", "🌊"],
};

const FLASH_MS = 120;
const ISI_MS = 160; // inter-stimulus interval
const REPS_FREE = 8; // flashes per candidate in free mode
const REPS_CALIB = 10; // flashes per candidate per calibration trial
const CALIB_TRIALS = 4; // number of calibration trials (= cued targets)

export interface StimulusGridProps {
  runtime: P300Runtime;
  theme: Theme;
  mode: "calibration" | "free";
  /** Called after each trial finishes with the final prediction. */
  onTrialEnd?: (pred: CandidatePrediction, target?: string) => void;
  /** Called when calibration sequence is complete. */
  onCalibrationDone?: () => void;
}

export function StimulusGrid({
  runtime, theme, mode, onTrialEnd, onCalibrationDone,
}: StimulusGridProps) {
  const icons = useMemo(() => THEMES[theme], [theme]);
  const [flashing, setFlashing] = useState<string | null>(null);
  const [livePred, setLivePred] = useState<CandidatePrediction | null>(null);
  const [cue, setCue] = useState<string | null>(null);
  const [trialNum, setTrialNum] = useState(0);
  const [status, setStatus] = useState<string>("");
  const [running, setRunning] = useState(false);
  const stopRef = useRef(false);

  // Subscribe to live predictions (free mode).
  useEffect(() => {
    return runtime.on("prediction", (p) => setLivePred(p));
  }, [runtime]);

  const runTrial = useCallback(
    async (target: string | null): Promise<CandidatePrediction | null> => {
      const candidates = icons.slice();
      const trialId = runtime.beginTrial(candidates);
      setTrialNum(trialId);
      const reps = mode === "calibration" ? REPS_CALIB : REPS_FREE;

      for (let seq = 0; seq < reps; seq++) {
        if (stopRef.current) break;
        // Random permutation of candidates per repetition (oddball style).
        const order = candidates.slice().sort(() => Math.random() - 0.5);
        for (const id of order) {
          if (stopRef.current) break;
          const label = target ? (id === target ? "target" : "nontarget") : null;
          runtime.markFlash({
            stimulus_id: id,
            trial_id: trialId,
            sequence_id: seq,
            presentation_duration: FLASH_MS,
            candidate_set: candidates,
            target_label: label,
            position: {
              row: Math.floor(candidates.indexOf(id) / 3),
              col: candidates.indexOf(id) % 3,
            },
            meta: { theme, mode },
          });
          setFlashing(id);
          await sleep(FLASH_MS);
          setFlashing(null);
          await sleep(ISI_MS);
        }
      }
      return runtime.endTrial();
    },
    [icons, mode, runtime, theme],
  );

  const runSession = useCallback(async () => {
    if (running) return;
    stopRef.current = false;
    setRunning(true);
    try {
      if (mode === "calibration") {
        setStatus("Calibration — watch and silently count the highlighted icon.");
        for (let t = 0; t < CALIB_TRIALS; t++) {
          if (stopRef.current) break;
          const target = icons[Math.floor(Math.random() * icons.length)];
          setCue(target);
          setStatus(`Trial ${t + 1}/${CALIB_TRIALS}: focus on ${target} and count its flashes.`);
          await sleep(1800);
          setCue(null);
          await sleep(300);
          const pred = await runTrial(target);
          if (pred) onTrialEnd?.(pred, target);
          await sleep(600);
        }
        setStatus("Calibration complete.");
        onCalibrationDone?.();
      } else {
        setStatus("Focus on the icon you want to select.");
        if (!runtime.decoder.isReady()) {
          setStatus("⚠ No trained model for this subject — run calibration first.");
          return;
        }
        const pred = await runTrial(null);
        if (pred) {
          setStatus(`Selected: ${pred.top_candidate}  —  confidence ${(pred.confidence * 100).toFixed(0)}%`);
          onTrialEnd?.(pred);
        }
      }
    } finally {
      setRunning(false);
      setFlashing(null);
      setCue(null);
    }
  }, [icons, mode, onCalibrationDone, onTrialEnd, runTrial, runtime, running]);

  const stop = useCallback(() => { stopRef.current = true; }, []);

  // Cleanup on unmount
  useEffect(() => () => { stopRef.current = true; }, []);

  const liveProbs = new Map<string, number>();
  if (livePred && livePred.trial_id === trialNum) {
    for (const s of livePred.ranking) liveProbs.set(s.stimulus_id, s.probability);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <div style={{ fontSize: 14, color: "#9ca3af", minHeight: 20, textAlign: "center" }}>
        {cue ? (
          <span>Target: <span style={{ fontSize: 28 }}>{cue}</span></span>
        ) : status}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 120px)",
          gridTemplateRows: "repeat(3, 120px)",
          gap: 10,
          background: "#0a0a0a",
          padding: 16,
          borderRadius: 16,
          boxShadow: "0 0 0 1px #1f2937 inset",
        }}
      >
        {icons.map((id) => {
          const isFlash = flashing === id;
          const prob = liveProbs.get(id) ?? 0;
          const barH = Math.max(2, Math.round(prob * 100));
          return (
            <div
              key={id}
              style={{
                position: "relative",
                width: 120, height: 120,
                borderRadius: 12,
                background: isFlash ? "#f8fafc" : "#111827",
                color: isFlash ? "#111827" : "#d1d5db",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 56,
                transition: isFlash ? "none" : "background 120ms ease-out",
                border: isFlash ? "2px solid #fde047" : "1px solid #1f2937",
                boxShadow: isFlash ? "0 0 24px rgba(253, 224, 71, 0.6)" : "none",
              }}
            >
              <span>{id}</span>
              {mode === "free" && running ? (
                <div
                  style={{
                    position: "absolute", left: 6, right: 6, bottom: 6,
                    height: 4, background: "#1f2937", borderRadius: 2,
                  }}
                >
                  <div
                    style={{
                      width: `${barH}%`, height: "100%",
                      background: "#22d3ee", borderRadius: 2,
                      transition: "width 120ms ease-out",
                    }}
                  />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={runSession}
          disabled={running}
          style={btnStyle(!running)}
        >
          {mode === "calibration" ? "Start calibration" : "Start trial"}
        </button>
        <button
          onClick={stop}
          disabled={!running}
          style={btnStyle(running, true)}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

function sleep(ms: number): Promise<void> {
  return new Promise((res) => setTimeout(res, ms));
}

function btnStyle(enabled: boolean, danger = false): React.CSSProperties {
  return {
    padding: "8px 16px",
    fontSize: 14,
    background: !enabled ? "#374151" : danger ? "#b91c1c" : "#2563eb",
    color: "white",
    border: "none",
    borderRadius: 8,
    cursor: enabled ? "pointer" : "not-allowed",
    opacity: enabled ? 1 : 0.6,
  };
}
