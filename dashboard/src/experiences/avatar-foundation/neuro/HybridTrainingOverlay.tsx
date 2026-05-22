// ─────────────────────────────────────────────────────────────────────────────
// HybridTrainingOverlay — Dual-calibration UI for hybrid (spectral + artifact) links
//
// Workflow:
//   1. User chooses which components to train (spectral, artifact, or both)
//   2. Runs spectral calibration (if selected) → creates hidden spectral link
//   3. Runs artifact calibration (if selected) → creates hidden artifact link
//   4. FUSION TEST: User tries different fusion modes with live preview
//   5. Confirms settings → creates hybrid link with references to sub-links
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef, useMemo } from "react";
import type { MutableRefObject } from "react";
import {
  type BandName,
  type Link,
  type NeuroFrame,
  type EnvelopeFrame,
  type SpectralCalibration,
  type ArtifactCalibration,
  BAND_NAMES,
} from "./types";
import { rankChannelsForSpectral, linkFromRankedSpectral, cohenD } from "./engine";
import { rankChannelsForArtifact, linkFromRankedArtifact } from "./engine-artifact";
import { evaluateHybridLink } from "./engine-hybrid";
import { deepCopyNeuroFrame, deepCopyEnvelopeFrame } from "./frame";
import { TOKENS } from "./MappingStudio";

type Phase = "CHOOSE" | "SPECTRAL" | "ARTIFACT" | "FUSION" | "DONE";
type FusionMode = "multiply" | "add" | "max" | "and" | "sequential";

interface Props {
  expression: string;
  eegData: Float32Array | null;
  frameRef: MutableRefObject<NeuroFrame>;
  envelopeFrameRef: MutableRefObject<EnvelopeFrame>;
  onDone: (link: Link, spectralLink?: Link, artifactLink?: Link) => void;
  onCancel: () => void;
}

export function HybridTrainingOverlay({
  expression,
  eegData,
  frameRef,
  envelopeFrameRef,
  onDone,
  onCancel,
}: Props) {
  const [phase, setPhase] = useState<Phase>("CHOOSE");
  const [trainSpectral, setTrainSpectral] = useState(true);
  const [trainArtifact, setTrainArtifact] = useState(true);

  // Spectral training state
  const [spectralRestFrames, setSpectralRestFrames] = useState<NeuroFrame[]>([]);
  const [spectralActiveFrames, setSpectralActiveFrames] = useState<NeuroFrame[]>([]);
  const [spectralLink, setSpectralLink] = useState<Link | undefined>(undefined);

  // Artifact training state
  const [artifactRestFrames, setArtifactRestFrames] = useState<EnvelopeFrame[]>([]);
  const [artifactActiveFrames, setArtifactActiveFrames] = useState<EnvelopeFrame[]>([]);
  const [artifactLink, setArtifactLink] = useState<Link | undefined>(undefined);

  // Fusion testing state
  const [fusionMode, setFusionMode] = useState<FusionMode>("multiply");
  const [spectralWeight, setSpectralWeight] = useState(1);
  const [artifactWeight, setArtifactWeight] = useState(1);
  const [liveActivation, setLiveActivation] = useState(0);

  const fusionModes: { mode: FusionMode; label: string; hint: string }[] = [
    { mode: "multiply", label: "Multiply (AND)", hint: "Both must be active" },
    { mode: "add", label: "Add (OR)", hint: "Either can activate" },
    { mode: "max", label: "Max", hint: "Stronger signal wins" },
    { mode: "and", label: "Strict AND", hint: "Both > 50% required" },
    { mode: "sequential", label: "Sequential", hint: "Artifact triggers, spectral modulates" },
  ];

  // Live preview update loop
  useEffect(() => {
    if (phase !== "FUSION" || !spectralLink || !artifactLink) return;

    const interval = setInterval(() => {
      // Get current spectral and artifact values (simplified - would use actual evaluation)
      const spectralValue = Math.random(); // TODO: evaluate spectralLink with current frameRef
      const artifactValue = Math.random(); // TODO: evaluate artifactLink with current envelopeFrameRef

      const fused = evaluateHybridLink(
        { fusionMode, fusionWeights: [spectralWeight, artifactWeight] } as Link,
        spectralLink,
        artifactLink,
        spectralValue,
        artifactValue
      );

      setLiveActivation(fused);
    }, 50);

    return () => clearInterval(interval);
  }, [phase, fusionMode, spectralWeight, artifactWeight, spectralLink, artifactLink]);

  // ── Spectral Training (simplified - reuses TrainingOverlay logic) ──
  const handleSpectralComplete = (link: Link) => {
    setSpectralLink(link);
    if (trainArtifact) {
      setPhase("ARTIFACT");
    } else {
      setPhase("FUSION");
    }
  };

  // ── Artifact Training (simplified - reuses ArtifactTrainingOverlay logic) ──
  const handleArtifactComplete = (link: Link) => {
    setArtifactLink(link);
    setPhase("FUSION");
  };

  // ── Final Hybrid Link Creation ──
  const handleConfirmFusion = () => {
    const hybridLink: Link = {
      id: `hybrid-${expression}-${Date.now().toString(36)}`,
      pipeline: "hybrid",
      channel: spectralLink?.channel || artifactLink?.channel || 0,
      expression,
      fusionMode,
      fusionWeights: [spectralWeight, artifactWeight],
      spectralLinkId: spectralLink?.id,
      artifactLinkId: artifactLink?.id,
      gain: 1.0,
      smoothing: 0.85,
      invert: false,
      enabled: true,
      snr: 0,
    };

    onDone(hybridLink, spectralLink, artifactLink);
  };

  // ── Render ──────────────────────────────────────────────────────────

  if (phase === "CHOOSE") {
    return (
      <div style={overlayStyle}>
        <div style={modalStyle}>
          <h2 style={titleStyle}>Hybrid Training: {expression}</h2>
          <p style={subtitleStyle}>
            Choose which components to train. Hybrid links combine slow frequency patterns
            (spectral) with fast transient events (artifact).
          </p>

          <div style={{ marginTop: 30 }}>
            <label style={checkboxLabelStyle}>
              <input
                type="checkbox"
                checked={trainSpectral}
                onChange={(e) => setTrainSpectral(e.target.checked)}
                style={{ marginRight: 10 }}
              />
              Train Spectral Component (frequency bands, emotions)
            </label>

            <label style={checkboxLabelStyle}>
              <input
                type="checkbox"
                checked={trainArtifact}
                onChange={(e) => setTrainArtifact(e.target.checked)}
                style={{ marginRight: 10 }}
              />
              Train Artifact Component (blinks, jaw, eyebrow)
            </label>
          </div>

          <div style={{ marginTop: 40, display: "flex", gap: 12 }}>
            <button
              onClick={() => {
                if (trainSpectral) {
                  setPhase("SPECTRAL");
                } else if (trainArtifact) {
                  setPhase("ARTIFACT");
                } else {
                  alert("Please select at least one component to train.");
                }
              }}
              disabled={!trainSpectral && !trainArtifact}
              style={primaryButtonStyle}
            >
              Begin Training
            </button>
            <button onClick={onCancel} style={secondaryButtonStyle}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "SPECTRAL") {
    return (
      <div style={overlayStyle}>
        <div style={modalStyle}>
          <h2 style={titleStyle}>Spectral Calibration ({expression})</h2>
          <p style={subtitleStyle}>
            Training frequency-based component. This will be used for slow emotional/mental states.
          </p>
          <p style={{ color: TOKENS.textDim, marginTop: 20 }}>
            [TODO: Embed TrainingOverlay component here with onDone → handleSpectralComplete]
          </p>
          <button onClick={() => handleSpectralComplete({} as Link)} style={primaryButtonStyle}>
            [Mock] Complete Spectral
          </button>
        </div>
      </div>
    );
  }

  if (phase === "ARTIFACT") {
    return (
      <div style={overlayStyle}>
        <div style={modalStyle}>
          <h2 style={titleStyle}>Artifact Calibration ({expression})</h2>
          <p style={subtitleStyle}>
            Training time-domain component. This will be used for fast transient events.
          </p>
          <p style={{ color: TOKENS.textDim, marginTop: 20 }}>
            [TODO: Embed ArtifactTrainingOverlay component here with onDone → handleArtifactComplete]
          </p>
          <button onClick={() => handleArtifactComplete({} as Link)} style={primaryButtonStyle}>
            [Mock] Complete Artifact
          </button>
        </div>
      </div>
    );
  }

  if (phase === "FUSION") {
    return (
      <div style={overlayStyle}>
        <div style={modalStyle}>
          <h2 style={titleStyle}>Fusion Configuration: {expression}</h2>
          <p style={subtitleStyle}>
            Test different fusion modes to see how spectral and artifact signals combine.
          </p>

          {/* Fusion Mode Selector */}
          <div style={{ marginTop: 30 }}>
            <label style={{ color: TOKENS.text, fontSize: 13, fontWeight: 500 }}>
              Fusion Mode:
            </label>
            <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 8 }}>
              {fusionModes.map(({ mode, label, hint }) => (
                <label key={mode} style={radioLabelStyle}>
                  <input
                    type="radio"
                    name="fusionMode"
                    value={mode}
                    checked={fusionMode === mode}
                    onChange={() => setFusionMode(mode)}
                    style={{ marginRight: 10 }}
                  />
                  <div>
                    <div style={{ color: TOKENS.text }}>{label}</div>
                    <div style={{ color: TOKENS.textFaint, fontSize: 11 }}>{hint}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Weight Sliders */}
          <div style={{ marginTop: 30 }}>
            <label style={{ color: TOKENS.text, fontSize: 13, fontWeight: 500 }}>
              Spectral Weight: {spectralWeight.toFixed(2)}
            </label>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={spectralWeight}
              onChange={(e) => setSpectralWeight(parseFloat(e.target.value))}
              style={{ width: "100%", marginTop: 8 }}
            />

            <label style={{ color: TOKENS.text, fontSize: 13, fontWeight: 500, marginTop: 15, display: "block" }}>
              Artifact Weight: {artifactWeight.toFixed(2)}
            </label>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={artifactWeight}
              onChange={(e) => setArtifactWeight(parseFloat(e.target.value))}
              style={{ width: "100%", marginTop: 8 }}
            />
          </div>

          {/* Live Preview */}
          <div style={{ marginTop: 30, padding: 15, background: TOKENS.bgRaised, borderRadius: 8 }}>
            <div style={{ color: TOKENS.textDim, fontSize: 12, marginBottom: 8 }}>
              Live Activation:
            </div>
            <div style={{ width: "100%", height: 40, background: TOKENS.bg, borderRadius: 6, overflow: "hidden" }}>
              <div
                style={{
                  width: `${liveActivation * 100}%`,
                  height: "100%",
                  background: `linear-gradient(90deg, ${TOKENS.accent}, ${TOKENS.success})`,
                  transition: "width 0.05s linear",
                }}
              />
            </div>
            <div style={{ color: TOKENS.text, fontSize: 18, fontWeight: 600, marginTop: 8 }}>
              {(liveActivation * 100).toFixed(0)}%
            </div>
          </div>

          {/* Actions */}
          <div style={{ marginTop: 40, display: "flex", gap: 12 }}>
            <button onClick={handleConfirmFusion} style={primaryButtonStyle}>
              Create Hybrid Link
            </button>
            <button onClick={onCancel} style={secondaryButtonStyle}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

// ── Styles ──────────────────────────────────────────────────────────────

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0, 0, 0, 0.85)",
  backdropFilter: "blur(8px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
  fontFamily: TOKENS.font,
};

const modalStyle: React.CSSProperties = {
  background: TOKENS.bgPanel,
  border: `1px solid ${TOKENS.borderStrong}`,
  borderRadius: 12,
  padding: 40,
  maxWidth: 600,
  width: "90%",
  maxHeight: "80vh",
  overflowY: "auto",
};

const titleStyle: React.CSSProperties = {
  color: TOKENS.text,
  fontSize: 24,
  fontWeight: 600,
  margin: 0,
};

const subtitleStyle: React.CSSProperties = {
  color: TOKENS.textDim,
  fontSize: 14,
  marginTop: 8,
};

const checkboxLabelStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  color: TOKENS.text,
  fontSize: 14,
  marginTop: 12,
  cursor: "pointer",
};

const radioLabelStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  cursor: "pointer",
  padding: 10,
  background: TOKENS.bg,
  borderRadius: 6,
  border: `1px solid ${TOKENS.border}`,
};

const primaryButtonStyle: React.CSSProperties = {
  background: TOKENS.accent,
  color: "#fff",
  border: "none",
  borderRadius: 6,
  padding: "12px 24px",
  fontSize: 14,
  fontWeight: 500,
  cursor: "pointer",
  fontFamily: TOKENS.font,
};

const secondaryButtonStyle: React.CSSProperties = {
  background: "transparent",
  color: TOKENS.textDim,
  border: `1px solid ${TOKENS.border}`,
  borderRadius: 6,
  padding: "12px 24px",
  fontSize: 14,
  fontWeight: 500,
  cursor: "pointer",
  fontFamily: TOKENS.font,
};
