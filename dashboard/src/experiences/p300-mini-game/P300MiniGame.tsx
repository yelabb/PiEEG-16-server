// ─────────────────────────────────────────────────────────────────────────────
// P300 Mini-Game — top-level experience
//
// Wires up the four architectural layers and exposes them through a small
// operator UI:
//   • subject selection (persists models across sessions)
//   • calibration run (cued targets → labelled epochs → trained LDA)
//   • free operation (brain-controlled selection)
//   • review panel + session export
//
// Any browser game that emits flash markers through the shared
// P300Runtime gets the same decoding pipeline — this file is just one
// reference UI. See the folder README for the full architecture.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useMemo, useRef, useState } from "react";
import type { ExperienceProps } from "../registry";
import { P300Runtime } from "./runtime";
import { StimulusGrid, type Theme } from "./game/StimulusGrid";
import { ReviewPanel } from "./review/ReviewPanel";
import type { TrainingMetrics } from "./ml/decoder";
import { deleteModel, listSubjects, loadModel } from "./ml/storage";
import type { CandidatePrediction } from "./types";

type Mode = "calibration" | "free";

const DEFAULT_CHANNELS = [0, 1, 2, 3, 4, 5, 6, 7]; // first 8 channels — swap as needed

export default function P300MiniGame({ eegData, onExit }: ExperienceProps) {
  const [subjectId, setSubjectId] = useState<string>(() => {
    const stored = localStorage.getItem("pieeg-p300-last-subject") ?? "";
    return stored || "default";
  });
  const [theme, setTheme] = useState<Theme>("icons");
  const [mode, setMode] = useState<Mode>("calibration");
  const [training, setTraining] = useState<TrainingMetrics | null>(null);
  const [hasModel, setHasModel] = useState<boolean>(() => loadModel(subjectId) != null);
  const [calProgress, setCalProgress] = useState({ target: 0, nontarget: 0 });
  const [subjects, setSubjects] = useState<string[]>(() => listSubjects());
  const [lastPred, setLastPred] = useState<CandidatePrediction | null>(null);
  const [lastTarget, setLastTarget] = useState<string | null>(null);

  const runtimeRef = useRef<P300Runtime | null>(null);
  const numChannels = eegData.numChannels;

  // (Re)create runtime when subject changes.
  useEffect(() => {
    const rt = new P300Runtime({
      subject_id: subjectId,
      theme,
      channels: DEFAULT_CHANNELS.filter((c) => c < numChannels),
      numChannels,
    });
    rt.start();
    runtimeRef.current = rt;
    localStorage.setItem("pieeg-p300-last-subject", subjectId);
    setHasModel(loadModel(subjectId) != null);

    const offProg = rt.on("training_progress", setCalProgress);

    return () => {
      offProg();
      rt.stop();
      runtimeRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subjectId, numChannels]);

  // Keep the runtime's theme tag in sync so sessions export with the right name.
  useEffect(() => {
    if (runtimeRef.current) runtimeRef.current.setTheme(theme);
  }, [theme]);

  const runtime = runtimeRef.current;

  const handleFitModel = () => {
    if (!runtime) return;
    try {
      const metrics = runtime.fitModel();
      setTraining(metrics);
      setHasModel(true);
      setSubjects(listSubjects());
    } catch (e) {
      console.error("[P300] fit failed", e);
      alert(`Training failed: ${e instanceof Error ? e.message : String(e)}`);
    }
  };

  const handleResetModel = () => {
    if (!runtime) return;
    if (!confirm(`Delete trained model for "${subjectId}" ?`)) return;
    deleteModel(subjectId);
    runtime.clearCalibration();
    setHasModel(false);
    setTraining(null);
    setCalProgress({ target: 0, nontarget: 0 });
    setSubjects(listSubjects());
  };

  const onTrialEnd = (pred: CandidatePrediction, target?: string) => {
    setLastPred(pred);
    setLastTarget(target ?? null);
  };

  const subjectOptions = useMemo(() => {
    const set = new Set(subjects);
    set.add(subjectId);
    if (!set.size) set.add("default");
    return Array.from(set);
  }, [subjects, subjectId]);

  return (
    <div style={{
      position: "fixed", inset: 0, background: "#030712",
      color: "#e5e7eb", zIndex: 50, display: "flex", flexDirection: "column",
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}>
      <header style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "10px 16px", borderBottom: "1px solid #1f2937",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <strong style={{ fontSize: 16 }}>🧠 P300 mini-game</strong>
          <span style={{ color: "#6b7280", fontSize: 12 }}>
            {numChannels}-ch · 250 Hz · LDA decoder
          </span>
        </div>
        <button onClick={onExit} style={exitBtnStyle}>Exit</button>
      </header>

      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        {/* Left rail — operator controls */}
        <div style={{
          width: 260, padding: 12, borderRight: "1px solid #1f2937",
          display: "flex", flexDirection: "column", gap: 12, overflow: "auto",
        }}>
          <section>
            <label style={labelStyle}>Subject</label>
            <select
              value={subjectId}
              onChange={(e) => setSubjectId(e.target.value)}
              style={selectStyle}
            >
              {subjectOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <div style={{ display: "flex", gap: 4, marginTop: 4 }}>
              <input
                placeholder="new subject id…"
                style={{ ...selectStyle, flex: 1 }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const v = (e.target as HTMLInputElement).value.trim();
                    if (v) setSubjectId(v);
                    (e.target as HTMLInputElement).value = "";
                  }
                }}
              />
            </div>
            <div style={{ fontSize: 11, color: "#6b7280", marginTop: 4 }}>
              {hasModel ? "✓ model loaded from localStorage" : "no model yet"}
            </div>
          </section>

          <section>
            <label style={labelStyle}>Theme</label>
            <select value={theme} onChange={(e) => setTheme(e.target.value as Theme)} style={selectStyle}>
              <option value="icons">Icons</option>
              <option value="letters">Letters</option>
              <option value="monsters">Monsters</option>
              <option value="spells">Spells</option>
            </select>
          </section>

          <section>
            <label style={labelStyle}>Mode</label>
            <div style={{ display: "flex", gap: 4 }}>
              <button
                onClick={() => setMode("calibration")}
                style={modeBtnStyle(mode === "calibration")}
              >Calibration</button>
              <button
                onClick={() => setMode("free")}
                style={modeBtnStyle(mode === "free")}
              >Free</button>
            </div>
          </section>

          {mode === "calibration" && (
            <section style={sectionStyle}>
              <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 6 }}>
                Labelled epochs
              </div>
              <div style={{ fontSize: 13 }}>
                target <b style={{ color: "#22c55e" }}>{calProgress.target}</b> ·
                non-target <b style={{ color: "#f59e0b" }}>{calProgress.nontarget}</b>
              </div>
              <button
                onClick={handleFitModel}
                disabled={calProgress.target < 10 || calProgress.nontarget < 10}
                style={{
                  ...primaryBtnStyle,
                  marginTop: 6,
                  opacity: calProgress.target < 10 ? 0.5 : 1,
                }}
              >
                Fit decoder
              </button>
              {training && (
                <div style={{ fontSize: 11, color: "#9ca3af", marginTop: 8 }}>
                  train {(training.train_accuracy * 100).toFixed(1)}% ·
                  CV {(training.cv_accuracy * 100).toFixed(1)}%
                  {training.auc ? ` · AUC ${training.auc.toFixed(2)}` : ""}
                </div>
              )}
            </section>
          )}

          {lastPred && (
            <section style={sectionStyle}>
              <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>Last trial</div>
              <div style={{ fontSize: 14 }}>
                predicted <b style={{ color: "#fde047" }}>{lastPred.top_candidate}</b>
                {lastTarget && (
                  <span style={{ color: lastTarget === lastPred.top_candidate ? "#22c55e" : "#ef4444" }}>
                    {" "}{lastTarget === lastPred.top_candidate ? "✓" : "✗"} (cued {lastTarget})
                  </span>
                )}
              </div>
              <div style={{ fontSize: 11, color: "#9ca3af" }}>
                confidence {(lastPred.confidence * 100).toFixed(1)}% ·
                entropy {lastPred.uncertainty.toFixed(2)}
              </div>
            </section>
          )}

          <button onClick={handleResetModel} style={dangerBtnStyle}>
            Reset subject model
          </button>
        </div>

        {/* Main stage — the themed grid */}
        <div style={{
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
          padding: 16,
        }}>
          {runtime ? (
            <StimulusGrid
              runtime={runtime}
              theme={theme}
              mode={mode}
              onTrialEnd={onTrialEnd}
            />
          ) : (
            <span style={{ color: "#6b7280" }}>initialising…</span>
          )}
        </div>

        {/* Right rail — review panel */}
        <div style={{ width: 340, padding: 12, borderLeft: "1px solid #1f2937", overflow: "auto" }}>
          {runtime && <ReviewPanel runtime={runtime} />}
        </div>
      </div>
    </div>
  );
}

// ── Styles ───────────────────────────────────────────────────────────────────

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: 11, color: "#9ca3af",
  marginBottom: 4, textTransform: "uppercase", letterSpacing: 0.5,
};
const selectStyle: React.CSSProperties = {
  width: "100%", padding: "6px 8px", background: "#111827",
  color: "#e5e7eb", border: "1px solid #1f2937", borderRadius: 6, fontSize: 13,
};
const sectionStyle: React.CSSProperties = {
  background: "#0a0a0a", border: "1px solid #1f2937", borderRadius: 8, padding: 10,
};
const primaryBtnStyle: React.CSSProperties = {
  padding: "8px 10px", background: "#2563eb", color: "white",
  border: "none", borderRadius: 6, fontSize: 13, cursor: "pointer", width: "100%",
};
const dangerBtnStyle: React.CSSProperties = {
  padding: "6px 8px", background: "transparent",
  color: "#ef4444", border: "1px solid #b91c1c", borderRadius: 6,
  fontSize: 12, cursor: "pointer", marginTop: "auto",
};
const exitBtnStyle: React.CSSProperties = {
  padding: "6px 10px", background: "#1f2937", color: "#e5e7eb",
  border: "1px solid #374151", borderRadius: 6, fontSize: 12, cursor: "pointer",
};
function modeBtnStyle(active: boolean): React.CSSProperties {
  return {
    flex: 1, padding: "6px", fontSize: 12,
    background: active ? "#2563eb" : "#111827",
    color: active ? "white" : "#9ca3af",
    border: "1px solid #1f2937", borderRadius: 6, cursor: "pointer",
  };
}
