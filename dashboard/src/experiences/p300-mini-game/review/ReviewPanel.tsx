// ─────────────────────────────────────────────────────────────────────────────
// P300 — Review panel
//
// Shows per-trial predictions + explainability information: per-candidate
// evidence bars, number of observations, EEG quality, and entropy.
// Also provides session export (JSON) for offline training.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from "react";
import type { P300Runtime } from "../runtime";
import type { CandidatePrediction } from "../types";

export function ReviewPanel({ runtime }: { runtime: P300Runtime }) {
  const [includeEeg, setIncludeEeg] = useState(false);
  const [predictions, setPredictions] = useState<CandidatePrediction[]>([]);

  // Refresh on each new prediction.
  useEffect(() => runtime.on("prediction", (p) => {
    setPredictions((prev) => {
      // Replace existing trial snapshot or append.
      const i = prev.findIndex((x) => x.trial_id === p.trial_id);
      if (i >= 0) { const next = prev.slice(); next[i] = p; return next; }
      return [...prev, p];
    });
  }), [runtime]);

  function download() {
    const blob = runtime.recorder.exportJsonBlob(includeEeg);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `p300-session-${runtime.recorder.sessionId}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <div style={{
      background: "#0a0a0a", border: "1px solid #1f2937",
      borderRadius: 12, padding: 12, fontSize: 12, color: "#d1d5db",
      minWidth: 320, maxHeight: 420, overflowY: "auto",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
        <strong style={{ color: "#e5e7eb" }}>Review</strong>
        <label style={{ fontSize: 11, display: "flex", gap: 4 }}>
          <input type="checkbox" checked={includeEeg} onChange={(e) => setIncludeEeg(e.target.checked)} />
          Include EEG
        </label>
      </div>
      {predictions.length === 0 ? (
        <div style={{ color: "#6b7280", fontStyle: "italic" }}>No trials yet.</div>
      ) : predictions.map((p) => (
        <div key={p.trial_id} style={{ marginBottom: 10, paddingBottom: 10, borderBottom: "1px solid #1f2937" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Trial #{p.trial_id} — <b style={{ color: "#fde047" }}>{p.top_candidate}</b></span>
            <span style={{ color: p.commit ? "#22c55e" : "#f59e0b" }}>
              {p.commit ? "committed" : "tentative"}
            </span>
          </div>
          <div style={{ fontSize: 11, color: "#9ca3af" }}>
            conf {(p.confidence * 100).toFixed(1)}% · entropy {p.uncertainty.toFixed(2)} · quality {p.quality.toFixed(2)}
          </div>
          <div style={{ marginTop: 4 }}>
            {p.ranking.slice(0, 5).map((c) => (
              <div key={c.stimulus_id} style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
                <span style={{ width: 36 }}>{c.stimulus_id}</span>
                <div style={{ flex: 1, height: 6, background: "#111827", borderRadius: 3 }}>
                  <div style={{
                    width: `${Math.round(c.probability * 100)}%`,
                    height: "100%", background: "#22d3ee", borderRadius: 3,
                  }} />
                </div>
                <span style={{ width: 40, textAlign: "right", color: "#9ca3af" }}>
                  {(c.probability * 100).toFixed(0)}%
                </span>
                <span style={{ width: 28, textAlign: "right", color: "#6b7280" }}>
                  ×{c.observations}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={download}
        disabled={predictions.length === 0}
        style={{
          width: "100%", marginTop: 6, padding: "6px 10px",
          background: predictions.length ? "#2563eb" : "#374151",
          color: "white", border: "none", borderRadius: 6,
          cursor: predictions.length ? "pointer" : "not-allowed",
          fontSize: 12,
        }}
      >
        Export session JSON
      </button>
    </div>
  );
}
