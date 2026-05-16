// ─────────────────────────────────────────────────────────────────────────────
// Premeditatio Malorum — Stoic XR Training
//
// Pairs of 360° YouTube videos (calm baseline ↔ disruptive visualisation)
// turn classic Stoic meditations into an embodied neurofeedback drill.
//
// Goal: maintain a high Alpha rhythm while witnessing the negative
// visualisation, then return rapidly to Alpha baseline once the disruption
// ends.  Score = how quickly Beta spike decays back to baseline.
//
// Designed first for the Meta Quest Browser:
//   • Fullscreen iframe with YouTube's native 360° / VR / Cardboard button.
//   • Large, high-contrast HUD readable through the headset lenses.
//   • Pointer-events isolated so head-pan controls fall through to the
//     YouTube canvas while telemetry stays interactive.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useMemo, useRef, useState } from "react";
import type { ExperienceProps } from "../registry";
import { DUALITIES, type Duality, type Pole } from "./dualities";
import { useStoicBands } from "./useStoicBands";
import "./stoic.css";

// ── Session stages ──────────────────────────────────────────────────────
type Stage =
  | "intro"        // Philosophy + onboarding
  | "device"       // Quest headset check / browser hint
  | "calibrate"    // 30 s eyes-closed baseline capture
  | "select"       // Choose a duality
  | "baseline"     // Anchor: calm pole video
  | "disruption"   // The premeditatio: disruptive pole video
  | "recovery"     // Return to calm pole video
  | "result";      // Scorecard

const BASELINE_S   = 30; // s
const DISRUPTION_S = 60;
const RECOVERY_S   = 30;
const CALIB_S      = 30;

// Standardised YouTube embed URL — autoplay + 360° hints.
// `playsinline=1` keeps inline playback on iOS; `enablejsapi=1` exposes the
// JS API; `vq=hd1080` requests high resolution where available.
// `start=10` skips the first 10 seconds to avoid channel branding.
// `loop=1` + `playlist=id` enables seamless looping.
function ytSrc(id: string, autoplay: boolean) {
  const params = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    mute: autoplay ? "1" : "0",   // browsers require muted autoplay
    controls: "1",
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    enablejsapi: "1",
    vq: "hd1080",
    start: "10",     // Skip first 10 seconds
    loop: "1",       // Enable looping
    playlist: id,    // Required for loop to work
  });
  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}

function detectQuestBrowser(): boolean {
  if (typeof navigator === "undefined") return false;
  return /OculusBrowser|Quest/i.test(navigator.userAgent);
}

// ─────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────

export default function PremeditatioMalorum({ eegData, onExit }: ExperienceProps) {
  const [stage, setStage] = useState<Stage>("intro");
  const [duality, setDuality] = useState<Duality | null>(null);
  const [stageElapsed, setStageElapsed] = useState(0);
  const [calibProgress, setCalibProgress] = useState(0);
  const [recoveryTimeS, setRecoveryTimeS] = useState<number | null>(null);
  const [peakBetaSpike, setPeakBetaSpike] = useState(0);
  const [meanCalm, setMeanCalm] = useState(0);

  const { liveRef, snapshot, captureBaseline, baselineRef } = useStoicBands(eegData);

  const isQuest = useMemo(detectQuestBrowser, []);

  // ── Calibration timer ─────────────────────────────────────────────
  useEffect(() => {
    if (stage !== "calibrate") return;
    const start = performance.now();
    const id = setInterval(() => {
      const elapsed = (performance.now() - start) / 1000;
      const p = Math.min(1, elapsed / CALIB_S);
      setCalibProgress(p);
      if (p >= 1) {
        clearInterval(id);
        captureBaseline();
        setStage("select");
      }
    }, 100);
    return () => clearInterval(id);
  }, [stage, captureBaseline]);

  // ── Session stage timer (baseline / disruption / recovery) ────────
  useEffect(() => {
    if (stage !== "baseline" && stage !== "disruption" && stage !== "recovery") return;

    const duration =
      stage === "baseline" ? BASELINE_S :
      stage === "disruption" ? DISRUPTION_S : RECOVERY_S;

    const start = performance.now();
    setStageElapsed(0);

    let peak = peakBetaSpike;
    let calmSum = 0;
    let calmN = 0;
    let recoveryHit = false;
    const baselineAlpha = baselineRef.current?.alpha ?? 0;
    const recoveryStart = stage === "disruption" ? Infinity : start;

    const id = setInterval(() => {
      const elapsed = (performance.now() - start) / 1000;
      setStageElapsed(elapsed);

      const live = liveRef.current;
      if (stage === "disruption") {
        if (live.betaSpike > peak) {
          peak = live.betaSpike;
          setPeakBetaSpike(peak);
        }
      }
      if (stage === "recovery") {
        calmSum += live.calmScore;
        calmN += 1;
        // Detect first moment alpha returns to ≥ 95% of baseline.
        if (!recoveryHit && baselineAlpha > 0 && live.alpha >= 0.95 * baselineAlpha) {
          recoveryHit = true;
          setRecoveryTimeS((performance.now() - recoveryStart) / 1000);
        }
      }

      if (elapsed >= duration) {
        clearInterval(id);
        if (stage === "baseline") setStage("disruption");
        else if (stage === "disruption") {
          setStage("recovery");
        } else {
          setMeanCalm(calmN > 0 ? calmSum / calmN : 0);
          if (!recoveryHit) setRecoveryTimeS(RECOVERY_S);
          setStage("result");
        }
      }
    }, 200);

    return () => clearInterval(id);
    // We intentionally exclude `peakBetaSpike` to avoid resetting between ticks.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  // ── Reset per-run state when a new duality is selected ───────────
  const startSession = (d: Duality) => {
    setDuality(d);
    setPeakBetaSpike(0);
    setRecoveryTimeS(null);
    setMeanCalm(0);
    setStage("baseline");
  };

  const resetAll = () => {
    setDuality(null);
    setPeakBetaSpike(0);
    setRecoveryTimeS(null);
    setMeanCalm(0);
    setStage("select");
  };

  // ── Render ───────────────────────────────────────────────────────
  return (
    <div className="stoic-root">
      {/* Stage video (background) */}
      <SessionStage stage={stage} duality={duality} />

      {/* Always-on exit */}
      <div className="stoic-topbar">
        <button className="stoic-exit" onClick={onExit}>← Exit</button>
        <div />
        <div />
      </div>

      {/* HUD only during session stages */}
      {(stage === "baseline" || stage === "disruption" || stage === "recovery") && duality && (
        <SessionHUD
          stage={stage}
          duality={duality}
          elapsed={stageElapsed}
          snapshot={snapshot}
        />
      )}

      {/* Onboarding / configuration overlays */}
      {stage === "intro"     && <IntroOverlay isQuest={isQuest} onNext={() => setStage("device")} />}
      {stage === "device"    && <DeviceOverlay isQuest={isQuest} onNext={() => setStage("calibrate")} />}
      {stage === "calibrate" && <CalibrateOverlay progress={calibProgress} alpha={snapshot.alpha} />}
      {stage === "select"    && <SelectOverlay onPick={startSession} />}
      {stage === "result"    && duality && (
        <ResultOverlay
          duality={duality}
          peakBeta={peakBetaSpike}
          recoveryS={recoveryTimeS ?? RECOVERY_S}
          meanCalm={meanCalm}
          onAgain={() => startSession(duality)}
          onSwitch={resetAll}
          onExit={onExit}
        />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────

function SessionStage({ stage, duality }: { stage: Stage; duality: Duality | null }) {
  if (!duality) return <div className="stoic-stage" />;
  
  // Calculate width percentages based on stage
  const calmWidth = 
    stage === "baseline" ? 100 :
    stage === "disruption" ? 30 :
    stage === "recovery" ? 100 : 100;
  
  const disruptWidth = 100 - calmWidth;
  const isCompressed = calmWidth < 50;

  return (
    <div className="stoic-stage">
      {/* Calm video (left side, shrinks during disruption) */}
      <div 
        className="stoic-video-side stoic-video-side--calm"
        style={{ width: `${calmWidth}%` }}
      >
        <iframe
          title={duality.calm.name}
          src={ytSrc(duality.calm.youtubeId, true)}
          allow="autoplay; encrypted-media; accelerometer; gyroscope; xr-spatial-tracking; fullscreen; picture-in-picture"
          allowFullScreen
        />
        {/* Cinematic vignette when compressed */}
        {isCompressed && <div className="stoic-video-vignette" />}
      </div>
      
      {/* Disruptive video (right side, grows during disruption) */}
      <div 
        className="stoic-video-side stoic-video-side--disruption"
        style={{ width: `${disruptWidth}%` }}
      >
        <iframe
          title={duality.disruption.name}
          src={ytSrc(duality.disruption.youtubeId, true)}
          allow="autoplay; encrypted-media; accelerometer; gyroscope; xr-spatial-tracking; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
      
      {/* Cinematic dimming overlay during disruption */}
      {stage === "disruption" && <div className="stoic-stage-dimmer" />}
    </div>
  );
}

function SessionHUD({
  stage, duality, elapsed, snapshot,
}: {
  stage: Stage;
  duality: Duality;
  elapsed: number;
  snapshot: ReturnType<typeof useStoicBands>["snapshot"];
}) {
  const pole: Pole = stage === "disruption" ? duality.disruption : duality.calm;
  const stageLabels: Record<string, [string, string]> = {
    baseline: ["BASELINE", "Anchor in the calm."],
    disruption: ["PREMEDITATIO", "Witness. Accept. Release."],
    recovery: ["RECOVERY", "Return to baseline alpha."],
  };
  const [label, sub] = stageLabels[stage];
  const calmPct = Math.round(snapshot.calmScore * 100);
  const betaPct = Math.round(Math.min(1, snapshot.betaSpike) * 100);
  const alphaPct = Math.min(100, Math.round(snapshot.calmScore * 110));

  return (
    <>
      {/* Centre scenario circle — mirrors screenshot composition */}
      <div className="stoic-scenario" aria-hidden>
        <div className="stoic-scenario-eyebrow">SCENARIO</div>
        <h2 className="stoic-scenario-title">{duality.latin}</h2>
        <div className="stoic-scenario-sub">({duality.translation})</div>
        <div className="stoic-scenario-cue">{sub}</div>
      </div>

      {/* Top-left — neurofeedback */}
      <div className="stoic-panel stoic-corner-tl">
        <div className="stoic-panel-title">NEUROFEEDBACK</div>
        <div className="stoic-metric">
          <div className="stoic-metric-row"><span>FOCUS LEVEL</span><b>{calmPct}%</b></div>
          <div className="stoic-bar"><div className="stoic-bar-fill" style={{ width: `${calmPct}%` }} /></div>
        </div>
        <div className="stoic-metric">
          <div className="stoic-metric-row"><span>NEURAL SYNC</span><b>{snapshot.calmScore > 0.55 ? "STRONG" : snapshot.calmScore > 0.4 ? "STABLE" : "DRIFT"}</b></div>
        </div>
        <span className="stoic-status-pill"><span className="stoic-dot" /> LIVE • {pole.name.toUpperCase()}</span>
      </div>

      {/* Top-right — EEG challenge */}
      <div className="stoic-panel stoic-corner-tr">
        <div className="stoic-panel-title">EEG CHALLENGE</div>
        <div className="stoic-metric">
          <div className="stoic-metric-row"><span>ALPHA STATE</span><b>{stage === "disruption" ? "Hold High" : "High"}</b></div>
          <div className="stoic-bar"><div className="stoic-bar-fill stoic-bar-fill--alpha" style={{ width: `${alphaPct}%` }} /></div>
        </div>
        <div className="stoic-metric">
          <div className="stoic-metric-row"><span>BETA SPIKE</span><b>{betaPct > 30 ? "Detected" : "—"}</b></div>
          <div className="stoic-bar"><div className="stoic-bar-fill stoic-bar-fill--beta" style={{ width: `${betaPct}%` }} /></div>
        </div>
        <div className="stoic-metric">
          <div className="stoic-metric-row"><span>RECOVERY</span><b>{stage === "recovery" ? "Returning" : "—"}</b></div>
        </div>
      </div>

      {/* Bottom strip — session row */}
      <div className="stoic-stripe">
        <div className="stoic-panel stoic-stripe-cell">
          <div className="stoic-stripe-label">{label}</div>
          <div className="stoic-stripe-value">{elapsed.toFixed(1)}s</div>
        </div>
        <div className="stoic-panel stoic-stripe-cell">
          <div className="stoic-stripe-label">CALM CONTROL</div>
          <div className="stoic-stripe-value stoic-stripe-value--calm">{calmPct}%</div>
        </div>
        <div className="stoic-panel stoic-stripe-cell">
          <div className="stoic-stripe-label">BETA SPIKE</div>
          <div className="stoic-stripe-value stoic-stripe-value--beta">{betaPct}%</div>
        </div>
      </div>
    </>
  );
}

function IntroOverlay({ isQuest, onNext }: { isQuest: boolean; onNext: () => void }) {
  return (
    <div className="stoic-overlay">
      <div className="stoic-card">
        <div className="stoic-eyebrow">PIEEG XR • STOIC TRAINING</div>
        <h1 className="stoic-headline">Premeditatio Malorum</h1>
        <p className="stoic-body">
          The Stoics rehearsed loss before it arrived. <strong>You will do the same — in 360°.</strong>{" "}
          Pair by pair, a calm scene anchors your baseline; a disruptive scene tests your composure.
          Your brain is the instrument; the metric is how quickly your alpha returns.
        </p>
        <div className="stoic-steps">
          <Step n={1} title="Calibrate">
            30 s eyes-closed baseline. We capture your personal alpha.
          </Step>
          <Step n={2} title="Choose a duality">
            Fire/Forest, Storm/Lagoon, City/Summit, Cliff/Meadow.
          </Step>
          <Step n={3} title="Witness">
            Calm → disruption → calm. Hold high alpha. Recover fast.
          </Step>
          <Step n={4} title="Read the scorecard">
            Peak beta spike, mean calm score, recovery latency.
          </Step>
        </div>
        {!isQuest && (
          <div className="stoic-hint">
            <b>Tip:</b> For the full immersive build, open this URL inside the{" "}
            <b>Meta Quest Browser</b>. Click the headset / cardboard icon on the YouTube
            player to enter VR 360°. The HUD overlay works on desktop too.
          </div>
        )}
        <div className="stoic-actions">
          <button className="stoic-btn stoic-btn--primary" onClick={onNext}>Begin →</button>
        </div>
      </div>
    </div>
  );
}

function DeviceOverlay({ isQuest, onNext }: { isQuest: boolean; onNext: () => void }) {
  return (
    <div className="stoic-overlay">
      <div className="stoic-card">
        <div className="stoic-eyebrow">DEVICE CHECK</div>
        <h1 className="stoic-headline">{isQuest ? "Quest Browser Detected" : "Browser Compatibility"}</h1>
        <p className="stoic-body">
          {isQuest
            ? <>You're in the Meta Quest Browser. When a 360° video loads, look for the <strong>cardboard / VR icon</strong> in the YouTube player to enter immersive view.</>
            : <>This experience runs on any modern browser, but the immersive 360° experience is intended for the <strong>Meta Quest Browser</strong>. Continue here to test the flow, or open the dashboard URL on your headset.</>
          }
        </p>
        <div className="stoic-steps">
          <Step n="EEG" title="Cap your headset, then your PiEEG">
            Both must be on at once. Make sure you can see the live signal in the dashboard before starting.
          </Step>
          <Step n="🔊" title="Allow audio">
            Tap the unmute icon on the video controls if needed.
          </Step>
          <Step n="🌀" title="Find a quiet space">
            Seated. Soft light. No interruptions for ~3 minutes.
          </Step>
        </div>
        <div className="stoic-actions">
          <button className="stoic-btn stoic-btn--primary" onClick={onNext}>I'm ready → Calibrate</button>
        </div>
      </div>
    </div>
  );
}

function CalibrateOverlay({ progress, alpha }: { progress: number; alpha: number }) {
  const remaining = Math.ceil(CALIB_S * (1 - progress));
  const r = 100;
  const c = 2 * Math.PI * r;
  return (
    <div className="stoic-overlay">
      <div className="stoic-card">
        <div className="stoic-eyebrow">CALIBRATION</div>
        <h1 className="stoic-headline">Close Your Eyes</h1>
        <p className="stoic-body">
          Sit upright. Soften the jaw. Breathe through the nose. We are capturing your{" "}
          <strong>personal alpha baseline</strong> — the reference that the rest of the session
          will be scored against.
        </p>
        <div className="stoic-calib-ring">
          <svg viewBox="0 0 220 220">
            <circle cx="110" cy="110" r={r} className="stoic-calib-bg" />
            <circle
              cx="110" cy="110" r={r}
              className="stoic-calib-fg"
              strokeDasharray={c}
              strokeDashoffset={c * (1 - progress)}
            />
          </svg>
          <div className="stoic-calib-label">
            <div>
              <span className="stoic-calib-num">{remaining}</span>
              <span>SECONDS</span>
              <span style={{ marginTop: 8, fontSize: 10, letterSpacing: "0.22em", color: "var(--stoic-dim)" }}>
                α = {alpha.toFixed(3)}
              </span>
            </div>
          </div>
        </div>
        <span className="stoic-status-pill"><span className="stoic-dot" /> CAPTURING BASELINE</span>
      </div>
    </div>
  );
}

function SelectOverlay({ onPick }: { onPick: (d: Duality) => void }) {
  return (
    <div className="stoic-overlay">
      <div className="stoic-card" style={{ width: "min(900px, 100%)" }}>
        <div className="stoic-eyebrow">CHOOSE YOUR DUALITY</div>
        <h1 className="stoic-headline">Calm ↔ Disruption</h1>
        <p className="stoic-body">
          Each scenario pairs a Stoic meditation with two 360° scenes. You will move from
          the calm pole into the disruption — then back. <strong>Pick what you can witness today.</strong>
        </p>
        <div className="stoic-dualities">
          {DUALITIES.map((d) => (
            <button key={d.id} className="stoic-duality" onClick={() => onPick(d)}>
              <div
                className="stoic-duality-thumb"
                style={{ background: `linear-gradient(135deg, ${d.gradient[0]}, ${d.gradient[1]})` }}
              >
                <span>{d.latin}</span>
              </div>
              <div className="stoic-duality-body">
                <div className="stoic-duality-tr">{d.translation.toUpperCase()}</div>
                <div className="stoic-duality-cap">{d.meditation}</div>
                <div className="stoic-duality-pair">
                  <span className="stoic-pole-chip" style={{ color: d.calm.accent }}>{d.calm.name}</span>
                  <span className="stoic-pole-chip" style={{ color: d.disruption.accent }}>{d.disruption.name}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResultOverlay({
  duality, peakBeta, recoveryS, meanCalm, onAgain, onSwitch, onExit,
}: {
  duality: Duality;
  peakBeta: number;
  recoveryS: number;
  meanCalm: number;
  onAgain: () => void;
  onSwitch: () => void;
  onExit: () => void;
}) {
  const calmPct = Math.round(meanCalm * 100);
  const betaPct = Math.round(peakBeta * 100);
  const rapid = recoveryS <= 12;
  const composure =
    calmPct > 65 ? "Excellent" :
    calmPct > 50 ? "Good" :
    calmPct > 35 ? "Improving" : "Reset & retry";

  return (
    <div className="stoic-overlay">
      <div className="stoic-card">
        <div className="stoic-eyebrow">SESSION COMPLETE</div>
        <h1 className="stoic-headline">{rapid ? "Rapid Recovery Achieved" : "Session Logged"}</h1>
        <p className="stoic-body">
          {duality.latin} — <strong>{duality.translation}</strong>. {duality.meditation}
        </p>
        <div style={{ marginTop: 14 }}>
          <div className="stoic-result-row"><span>Recovery time</span><span>{recoveryS.toFixed(1)} s</span></div>
          <div className="stoic-result-row"><span>Mean calm score</span><span>{calmPct}%</span></div>
          <div className="stoic-result-row"><span>Peak β spike</span><span>{betaPct}%</span></div>
          <div className="stoic-result-row"><span>Composure</span><span>{composure}</span></div>
        </div>
        <div className="stoic-actions">
          <button className="stoic-btn stoic-btn--primary" onClick={onAgain}>↻ Run again</button>
          <button className="stoic-btn" onClick={onSwitch}>Switch duality</button>
          <button className="stoic-btn" onClick={onExit}>Exit</button>
        </div>
      </div>
    </div>
  );
}

function Step({ n, title, children }: { n: number | string; title: string; children: React.ReactNode }) {
  return (
    <div className="stoic-step">
      <div className="stoic-step-num">{n}</div>
      <div><b>{title}</b>{children}</div>
    </div>
  );
}
