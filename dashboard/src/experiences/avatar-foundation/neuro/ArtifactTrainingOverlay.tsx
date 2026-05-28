// ─────────────────────────────────────────────────────────────────────────────
// ArtifactTrainingOverlay — Threshold-based calibration with channel ranking.
//
// 3-Phase Protocol:
//   1. BASELINE (5s) — Record noise floor on ALL channels
//   2. REPETITIONS (user-paced) — Perform artifact 10x, live feedback
//   3. REVIEW — Rank channels, user picks best, live preview
//
// Unlike spectral training (Cohen's d on REST vs ACTIVE), this uses threshold
// detection optimized for fast transient events (100-500ms).
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useMemo, useRef, useState } from "react";
import type { MutableRefObject } from "react";
import type {
  Link,
  EnvelopeFrame,
  ArtifactChannelRank,
} from "./types";
import {
  rankChannelsForArtifact,
  linkFromRankedArtifact,
} from "./engine-artifact";
import { deepCopyEnvelopeFrame } from "./frame";
import { TOKENS } from "./MappingStudio";

type Phase = "intro" | "baseline" | "repetitions" | "analysis" | "review";

const BASELINE_DURATION_MS = 5000;
const EXPECTED_REPETITIONS = 10;
const POLL_HZ = 60; // Match envelope update rate

export interface ArtifactTrainingOverlayProps {
  expression: string;
  mode: "discover" | "refine";
  existingLinkId?: string;
  numChannels: number;
  envelopeFrameRef: MutableRefObject<EnvelopeFrame>;
  onCancel: () => void;
  onApply: (newOrUpdated: Link[], removedIds: string[]) => void;
}

export function ArtifactTrainingOverlay({
  expression,
  mode,
  existingLinkId,
  numChannels,
  envelopeFrameRef,
  onCancel,
  onApply,
}: ArtifactTrainingOverlayProps) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [progress, setProgress] = useState(0);
  const [detectedCount, setDetectedCount] = useState(0);

  const baselineFramesRef = useRef<EnvelopeFrame[]>([]);
  const repetitionFramesRef = useRef<EnvelopeFrame[]>([]);
  const [ranking, setRanking] = useState<ArtifactChannelRank[]>([]);
  const [selectedChannel, setSelectedChannel] = useState<number | null>(null);
  const [previewChannel, setPreviewChannel] = useState<number | null>(null);

  // Real-time detection state for repetitions phase
  const baselineThresholdRef = useRef<number>(0);
  const lastPeakTimeRef = useRef<number>(0);
  const peakStateRef = useRef<"idle" | "in-peak">("idle");

  // ── Phase Machine ────────────────────────────────────────────────────

  useEffect(() => {
    if (phase === "intro" || phase === "analysis" || phase === "review") return;

    if (phase === "baseline") {
      const start = performance.now();
      const duration = BASELINE_DURATION_MS;

      baselineFramesRef.current = [];

      const pollTimer = setInterval(() => {
        const f = envelopeFrameRef.current;
        if (f.ready) {
          baselineFramesRef.current.push(deepCopyEnvelopeFrame(f));
        }
      }, Math.round(1000 / POLL_HZ));

      const progressTimer = setInterval(() => {
        const elapsed = performance.now() - start;
        const p = Math.min(1, elapsed / duration);
        setProgress(p);
        if (p >= 1) {
          clearInterval(progressTimer);
          clearInterval(pollTimer);
          
          // Compute baseline threshold for real-time detection
          // Use simple average across all channels
          let totalBaseline = 0;
          let count = 0;
          for (let ch = 0; ch < numChannels; ch++) {
            let sum = 0;
            let n = 0;
            for (const frame of baselineFramesRef.current) {
              const snap = frame.channels[ch];
              if (snap && Number.isFinite(snap.envelope)) {
                sum += snap.envelope;
                n++;
              }
            }
            if (n > 0) {
              totalBaseline += sum / n;
              count++;
            }
          }
          baselineThresholdRef.current = count > 0 ? (totalBaseline / count) * 2.5 : 10;
          
          setPhase("repetitions");
        }
      }, 50);

      return () => {
        clearInterval(pollTimer);
        clearInterval(progressTimer);
      };
    }

    if (phase === "repetitions") {
      repetitionFramesRef.current = [];
      setDetectedCount(0);
      peakStateRef.current = "idle";
      lastPeakTimeRef.current = 0;

      const REFRACTORY_MS = 400; // Minimum time between detections
      const MIN_PEAK_WIDTH_MS = 50; // Minimum duration above threshold

      const pollTimer = setInterval(() => {
        const f = envelopeFrameRef.current;
        if (f.ready) {
          repetitionFramesRef.current.push(deepCopyEnvelopeFrame(f));
          
          // Real-time peak detection for feedback
          // Average envelope across all channels
          let totalEnv = 0;
          let envCount = 0;
          for (let ch = 0; ch < numChannels; ch++) {
            const snap = f.channels[ch];
            if (snap && Number.isFinite(snap.envelope)) {
              totalEnv += snap.envelope;
              envCount++;
            }
          }
          const avgEnv = envCount > 0 ? totalEnv / envCount : 0;
          const now = performance.now();
          
          // Simple state machine for peak detection
          if (peakStateRef.current === "idle") {
            if (avgEnv > baselineThresholdRef.current && now - lastPeakTimeRef.current > REFRACTORY_MS) {
              peakStateRef.current = "in-peak";
            }
          } else if (peakStateRef.current === "in-peak") {
            if (avgEnv <= baselineThresholdRef.current * 0.7) {
              // Dropped below threshold - peak detected!
              lastPeakTimeRef.current = now;
              peakStateRef.current = "idle";
              setDetectedCount((c) => c + 1);
            }
          }
        }
      }, Math.round(1000 / POLL_HZ));

      return () => clearInterval(pollTimer);
    }
  }, [phase, envelopeFrameRef]);

  // ── Analysis ─────────────────────────────────────────────────────────

  useEffect(() => {
    if (phase !== "analysis") return;

    const t = setTimeout(() => {
      const ranked = rankChannelsForArtifact(
        baselineFramesRef.current,
        repetitionFramesRef.current,
        numChannels,
        EXPECTED_REPETITIONS,
      );
      setRanking(ranked);
      setSelectedChannel(ranked.length > 0 ? ranked[0].channel : null);
      setPreviewChannel(ranked.length > 0 ? ranked[0].channel : null);
      setPhase("review");
    }, 300);

    return () => clearTimeout(t);
  }, [phase, numChannels]);

  // ── Helpers ──────────────────────────────────────────────────────────

  const cueText = useMemo(() => {
    switch (phase) {
      case "intro":
        return {
          title: mode === "refine" ? `Recalibrate "${expression}"` : `Calibrate "${expression}" (Fast Detection)`,
          sub: `This uses artifact detection for fast transient events (blinks, jaw, brows). We'll test ALL ${numChannels} channels and let you pick the best.`,
        };
      case "baseline":
        return {
          title: "BASELINE",
          sub: "Relax, keep face neutral. Recording noise floor on all channels...",
        };
      case "repetitions":
        return {
          title: "REPETITIONS",
          sub: `Perform the action (${expression}) naturally. Detected: ${detectedCount} / ${EXPECTED_REPETITIONS}`,
        };
      case "analysis":
        return {
          title: "Analyzing...",
          sub: `Ranking ${numChannels} channels by detection quality...`,
        };
      case "review":
        return {
          title: "Select Best Channel",
          sub: "Pick the channel with strongest, most consistent detection:",
        };
    }
  }, [phase, mode, expression, numChannels, detectedCount]);

  // ── Handlers ─────────────────────────────────────────────────────────

  const handleStart = () => setPhase("baseline");

  const handleContinue = () => {
    if (detectedCount >= EXPECTED_REPETITIONS * 0.7) {
      // At least 70% detected
      setPhase("analysis");
    }
  };

  const handleApply = () => {
    if (selectedChannel === null || ranking.length === 0) return;

    const ranked = ranking.find((r) => r.channel === selectedChannel);
    if (!ranked) return;

    const newLink = linkFromRankedArtifact(
      ranked,
      expression,
      baselineFramesRef.current,
      repetitionFramesRef.current,
      EXPECTED_REPETITIONS,
    );

    const removed = mode === "refine" && existingLinkId ? [existingLinkId] : [];
    onApply([newLink], removed);
  };

  const qualityStars = (q: number): string => {
    if (q >= 5) return "⭐⭐⭐⭐⭐";
    if (q >= 3) return "⭐⭐⭐⭐";
    if (q >= 1.5) return "⭐⭐⭐";
    if (q >= 0.5) return "⭐⭐";
    return "⭐";
  };

  // ── Render ───────────────────────────────────────────────────────────

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: TOKENS.bg,
          border: `1px solid ${TOKENS.border}`,
          borderRadius: 8,
          width: 640,
          maxHeight: "90vh",
          overflow: "auto",
          padding: 24,
        }}
      >
        <h2 style={{ margin: 0, color: TOKENS.text, fontSize: 18, fontWeight: 600 }}>
          {cueText.title}
        </h2>
        <p style={{ margin: "8px 0 20px", color: TOKENS.textFaint, fontSize: 13 }}>
          {cueText.sub}
        </p>

        {/* INTRO */}
        {phase === "intro" && (
          <div>
            <div style={{ padding: 16, background: TOKENS.bgPanel, borderRadius: 6, marginBottom: 16 }}>
              <p style={{ margin: "0 0 12px", color: TOKENS.text, fontSize: 13 }}>
                <strong>How it works:</strong>
              </p>
              <ol style={{ margin: 0, paddingLeft: 20, color: TOKENS.textFaint, fontSize: 13 }}>
                <li>Baseline (5s): Stay relaxed, neutral face</li>
                <li>Repetitions: Perform "{expression}" 10 times naturally</li>
                <li>We'll rank all {numChannels} channels and show you the best</li>
                <li>Pick the channel that detected your action most clearly</li>
              </ol>
            </div>
            <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
              <button onClick={onCancel} style={buttonStyle(false)}>
                Cancel
              </button>
              <button onClick={handleStart} style={buttonStyle(true)}>
                Start Calibration
              </button>
            </div>
          </div>
        )}

        {/* BASELINE */}
        {phase === "baseline" && (
          <div>
            <div style={{ height: 12, background: TOKENS.bgPanel, borderRadius: 6, overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  background: "linear-gradient(90deg, #06b6d4, #22c55e)",
                  width: `${progress * 100}%`,
                  transition: "width 0.1s linear",
                }}
              />
            </div>
            <p style={{ marginTop: 12, color: TOKENS.textFaint, fontSize: 13, textAlign: "center" }}>
              {Math.round(progress * 100)}% · Recording all {numChannels} channels...
            </p>
          </div>
        )}

        {/* REPETITIONS */}
        {phase === "repetitions" && (
          <div>
            <div style={{ padding: 16, background: TOKENS.bgPanel, borderRadius: 6, marginBottom: 16, textAlign: "center" }}>
              <div style={{ fontSize: 48, fontWeight: 700, color: TOKENS.accent, marginBottom: 8 }}>
                {detectedCount} / {EXPECTED_REPETITIONS}
              </div>
              <p style={{ margin: 0, color: TOKENS.textFaint, fontSize: 13 }}>
                Perform the action naturally (don't force it)
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
              <button onClick={onCancel} style={buttonStyle(false)}>
                Cancel
              </button>
              <button
                onClick={handleContinue}
                disabled={detectedCount < EXPECTED_REPETITIONS * 0.7}
                style={buttonStyle(detectedCount >= EXPECTED_REPETITIONS * 0.7)}
              >
                Continue ({Math.max(0, Math.ceil(EXPECTED_REPETITIONS * 0.7) - detectedCount)} more)
              </button>
            </div>
          </div>
        )}

        {/* ANALYSIS */}
        {phase === "analysis" && (
          <div style={{ padding: 32, textAlign: "center" }}>
            <div style={{ fontSize: 14, color: TOKENS.textFaint }}>
              Analyzing {numChannels} channels...
            </div>
          </div>
        )}

        {/* REVIEW */}
        {phase === "review" && (
          <div>
            <div style={{ maxHeight: 400, overflowY: "auto", marginBottom: 16 }}>
              {ranking.map((r) => (
                <div
                  key={r.channel}
                  onClick={() => {
                    setSelectedChannel(r.channel);
                    setPreviewChannel(r.channel);
                  }}
                  style={{
                    padding: 12,
                    background: selectedChannel === r.channel ? TOKENS.bgPanel : "transparent",
                    border: `1px solid ${selectedChannel === r.channel ? TOKENS.accent : TOKENS.border}`,
                    borderRadius: 6,
                    marginBottom: 8,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div style={{ width: 20, color: TOKENS.text }}>
                    {selectedChannel === r.channel ? "◉" : "○"}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: TOKENS.text, fontSize: 13, fontWeight: 600 }}>
                      {r.channelLabel}
                    </div>
                    <div style={{ color: TOKENS.textFaint, fontSize: 11 }}>
                      SNR: {r.snr.toFixed(1)} · Peak: {r.peakEnvelope.toFixed(1)} µV · Detected: {(r.detectionRate * 100).toFixed(0)}%
                    </div>
                  </div>
                  <div style={{ fontSize: 16 }}>{qualityStars(r.quality)}</div>
                </div>
              ))}
            </div>

            {previewChannel !== null && (
              <div style={{ padding: 12, background: TOKENS.bgPanel, borderRadius: 6, marginBottom: 16 }}>
                <div style={{ fontSize: 11, color: TOKENS.textFaint, marginBottom: 8 }}>
                  💡 Live preview — try the action a few times to see real-time response
                </div>
                <LivePreview
                  channel={previewChannel}
                  envelopeFrameRef={envelopeFrameRef}
                  ranking={ranking}
                />
              </div>
            )}

            <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
              <button onClick={onCancel} style={buttonStyle(false)}>
                Cancel
              </button>
              <button onClick={handleApply} disabled={selectedChannel === null} style={buttonStyle(selectedChannel !== null)}>
                Use {ranking.find((r) => r.channel === selectedChannel)?.channelLabel ?? "Channel"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Live Preview Component ───────────────────────────────────────────────────

function LivePreview({
  channel,
  envelopeFrameRef,
  ranking,
}: {
  channel: number;
  envelopeFrameRef: MutableRefObject<EnvelopeFrame>;
  ranking: ArtifactChannelRank[];
}) {
  const [activation, setActivation] = useState(0);

  useEffect(() => {
    const ranked = ranking.find((r) => r.channel === channel);
    if (!ranked) return;

    const { baselineRMS, peakEnvelope } = ranked;

    const id = setInterval(() => {
      const frame = envelopeFrameRef.current;
      if (!frame.ready) return;

      const snap = frame.channels[channel];
      if (!snap) return;

      const env = snap.envelope;
      const norm = (env - baselineRMS) / Math.max(peakEnvelope - baselineRMS, 1);
      const clamped = Math.max(0, Math.min(1, norm));

      setActivation(clamped);
    }, 50);

    return () => clearInterval(id);
  }, [channel, envelopeFrameRef, ranking]);

  const barWidth = `${activation * 100}%`;
  const barColor = activation > 0.5 ? "#22c55e" : activation > 0.2 ? "#f59e0b" : "#64748b";

  return (
    <div>
      <div style={{ fontSize: 11, color: TOKENS.textFaint, marginBottom: 4 }}>
        Activation: {activation.toFixed(2)}
      </div>
      <div style={{ height: 24, background: TOKENS.bg, borderRadius: 4, overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            background: barColor,
            width: barWidth,
            transition: "width 0.1s ease-out",
          }}
        />
      </div>
    </div>
  );
}

// ── Styles ───────────────────────────────────────────────────────────────────

function buttonStyle(primary: boolean): React.CSSProperties {
  return {
    padding: "8px 16px",
    border: primary ? `1px solid ${TOKENS.accent}` : `1px solid ${TOKENS.border}`,
    background: primary ? TOKENS.accent : "transparent",
    color: primary ? "#000" : TOKENS.text,
    borderRadius: 6,
    cursor: primary ? "pointer" : "not-allowed",
    fontSize: 13,
    fontWeight: 500,
    opacity: primary ? 1 : 0.5,
  };
}
