import { useState, Suspense } from "react";
import type { EEGData } from "../types";
import { EXPERIENCES, type ExperienceEntry } from "../experiences/registry";

interface ExperiencesPageProps {
  eegData: EEGData;
  yScale: number;
  onBack: () => void;
  sendCommand?: (cmd: Record<string, unknown>) => void;
}

export default function ExperiencesPage({ eegData, yScale, onBack, sendCommand }: ExperiencesPageProps) {
  const [active, setActive] = useState<ExperienceEntry | null>(null);

  // Running an experience — render it full-screen
  if (active) {
    const Comp = active.component;
    return (
      <Suspense
        fallback={
          <div className="exp-loading">
            <div className="exp-loading-spinner" />
            <span>Loading {active.name}…</span>
          </div>
        }
      >
        <Comp eegData={eegData} yScale={yScale} onExit={() => setActive(null)} sendCommand={sendCommand} />
      </Suspense>
    );
  }

  // Gallery view
  return (
    <div className="exp-page">
      <header className="exp-header">
        <button className="btn exp-back" onClick={onBack}>
          ← Dashboard
        </button>
        <div className="exp-title-group">
          <h1 className="exp-title">
            Experiences
          </h1>
          <span className="exp-count">{EXPERIENCES.length}</span>
        </div>
        <p className="exp-subtitle">
          Immersive EEG visualizations &amp; environments. Community-driven — add yours!
        </p>
      </header>

      <div className="exp-grid">
        {EXPERIENCES.map((exp) => (
          <button
            key={exp.id}
            className="exp-card"
            onClick={() => setActive(exp)}
          >
            <div
              className="exp-card-thumb"
              style={{
                background: `linear-gradient(135deg, ${exp.gradient[0]}, ${exp.gradient[1]})`,
              }}
            >
              <div className="exp-card-tags">
                <span className="exp-tag">{exp.tag}</span>
                {exp.vr && <span className="exp-tag exp-tag--vr">VR</span>}
                {exp.handTracking && <span className="exp-tag exp-tag--hand">Hands</span>}
              </div>
            </div>
            <div className="exp-card-body">
              <h3 className="exp-card-name">{exp.name}</h3>
              <p className="exp-card-desc">{exp.description}</p>
              {exp.author && (
                <span className="exp-card-author">by {exp.author}</span>
              )}
            </div>
          </button>
        ))}

        {/* Placeholder card encouraging contributions */}
        <a
          className="exp-card exp-card--add"
          href="https://github.com/pieeg-club/PiEEG-server/blob/main/dashboard/src/experiences/README.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="exp-card-thumb exp-card-thumb--add">
            <span className="exp-add-icon">+</span>
          </div>
          <div className="exp-card-body">
            <h3 className="exp-card-name">Add yours</h3>
            <p className="exp-card-desc">
              Follow the step-by-step guide to create your own brain-powered mini-game and open a PR.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
