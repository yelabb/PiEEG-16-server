import { useState } from "react";
import type { EEGData, TrainTab } from "../../types";
import { useTrain } from "../../hooks/useTrain";
import CapturePanel from "./CapturePanel";
import ModelPanel from "./ModelPanel";
import ActionsPanel from "./ActionsPanel";

interface Props {
  eegData: EEGData;
  connected: boolean;
  onBack: () => void;
}

const TABS: { id: TrainTab; label: string; icon: string }[] = [
  { id: "capture", label: "Capture", icon: "⏺" },
  { id: "model", label: "Model", icon: "⚡" },
  { id: "actions", label: "Actions", icon: "▶" },
];

export default function TrainMode({ eegData, connected, onBack }: Props) {
  const [tab, setTab] = useState<TrainTab>("capture");
  const train = useTrain(eegData);

  const totalEpochs = train.classes.reduce(
    (s, c) => s + c.epochs.length,
    0
  );

  return (
    <div className="train-mode">
      {/* Header */}
      <header className="train-header">
        <div className="train-header-left">
          <button className="btn btn-back" onClick={onBack}>
            ← Back
          </button>
          <h1>
            Pi<span>EEG</span>
            <small>Train</small>
          </h1>
        </div>

        <nav className="train-tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={`train-tab${tab === t.id ? " active" : ""}`}
              onClick={() => setTab(t.id)}
            >
              <span className="train-tab-icon">{t.icon}</span>
              {t.label}
            </button>
          ))}
        </nav>

        <div className="train-status">
          <span
            className={`status-dot${connected ? " connected" : ""}`}
          />
          <span className="train-stat">
            {totalEpochs} epochs
          </span>
          {train.modelReady && (
            <span className="train-stat model-ready">Model ✓</span>
          )}
          {train.running && (
            <span className="train-stat running">Inference ⚡</span>
          )}
        </div>
      </header>

      {/* Tab content */}
      <main className="train-content">
        {tab === "capture" && <CapturePanel train={train} />}
        {tab === "model" && <ModelPanel train={train} />}
        {tab === "actions" && <ActionsPanel train={train} />}
      </main>

      {/* Pipeline status bar */}
      <footer className="train-footer">
        <div className="train-pipeline">
          <div
            className={`train-pipe-step${totalEpochs > 0 ? " done" : ""}`}
          >
            1. Capture
          </div>
          <div className="train-pipe-arrow">→</div>
          <div
            className={`train-pipe-step${train.modelReady ? " done" : ""}`}
          >
            2. Train
          </div>
          <div className="train-pipe-arrow">→</div>
          <div
            className={`train-pipe-step${train.running ? " done" : ""}`}
          >
            3. Run
          </div>
        </div>
        <span className="train-footer-hint">
          <kbd>Esc</kbd> Back to live
        </span>
      </footer>
    </div>
  );
}
