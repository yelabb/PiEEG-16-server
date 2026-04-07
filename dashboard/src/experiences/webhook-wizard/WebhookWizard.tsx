// ─────────────────────────────────────────────────────────────────────────────
// Webhook Wizard — Guided walkthrough experience
//
// Walks the user step-by-step through setting up their first brain-to-phone
// notification using IFTTT or Zapier. Shows live EEG feedback at each step
// so users can see their brain data triggering in real time.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useRef, useEffect, useCallback } from "react";
import type { ExperienceProps } from "../registry";
import { WEBHOOK_RECIPES, type WebhookRecipe } from "../../lib/webhookRecipes";
import { FftEngine, FREQUENCY_BANDS } from "../../lib/fftEngine";
import type { BandPowers } from "../../types";

const SAMPLE_RATE = 250;
const FFT_SIZE = 256;
const FFT_ENGINE = new FftEngine(FFT_SIZE, SAMPLE_RATE);

/** Map lowercase band names (from recipe params) → title-case (from FftEngine). */
const BAND_MAP: Record<string, string> = {
  delta: "Delta", theta: "Theta", alpha: "Alpha", beta: "Beta", gamma: "Gamma",
};

// ── Steps ────────────────────────────────────────────────────────────────────

type Step = "choose" | "connect" | "configure" | "test" | "done";

const STEP_ORDER: Step[] = ["choose", "connect", "configure", "test", "done"];

const STEP_LABELS: Record<Step, string> = {
  choose: "Pick a recipe",
  connect: "Connect service",
  configure: "Configure trigger",
  test: "Live test",
  done: "You're live!",
};

// ── Featured recipes for the wizard ──────────────────────────────────────────

const WIZARD_RECIPES = WEBHOOK_RECIPES.filter((r) =>
  ["ifttt-meditation-notify", "ifttt-focus-streak", "ifttt-blink-light",
   "zapier-focus-slack", "zapier-session-sheets", "generic-home-assistant",
  ].includes(r.id),
);

// ── Component ────────────────────────────────────────────────────────────────

export default function WebhookWizard({ eegData, onExit, sendCommand }: ExperienceProps) {
  const [step, setStep] = useState<Step>("choose");
  const [recipe, setRecipe] = useState<WebhookRecipe | null>(null);
  const [serviceKey, setServiceKey] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");
  const [bandPowers, setBandPowers] = useState<BandPowers | null>(null);
  const [triggerHit, setTriggerHit] = useState(false);
  const [hitCount, setHitCount] = useState(0);
  const [amplitude, setAmplitude] = useState(0);
  const prevHitRef = useRef(false);
  const rafRef = useRef(0);
  const frameRef = useRef(0);

  // ── Live FFT for the meter ──
  useEffect(() => {
    function tick() {
      frameRef.current++;
      if (frameRef.current % 4 === 0 && eegData.samplesInBuffer.current >= FFT_SIZE) {
        const ch = 0;
        const buf = eegData.buffers.current[ch];
        const wi = eegData.writeIndex.current;
        const samples = new Float64Array(FFT_SIZE);
        for (let i = 0; i < FFT_SIZE; i++) {
          samples[i] = buf[(wi - FFT_SIZE + i + buf.length) % buf.length];
        }
        const result = FFT_ENGINE.analyse(samples);
        if (result) setBandPowers(result.bandPowers);

        // Peak amplitude for amplitude triggers
        let peak = 0;
        for (let i = 0; i < FFT_SIZE; i++) {
          const v = Math.abs(samples[i]);
          if (v > peak) peak = v;
        }
        setAmplitude(peak);
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [eegData]);

  // ── Check trigger (rising-edge only, matching useWebhookEvaluator logic) ──
  useEffect(() => {
    if (!recipe || !bandPowers || step !== "test") return;
    const p = recipe.params;
    let value = 0;
    if (recipe.trigger_type.startsWith("band_power") && p.band) {
      const key = BAND_MAP[String(p.band)] ?? "Alpha";
      value = bandPowers[key] ?? 0;
    } else if (recipe.trigger_type.startsWith("band_ratio") && p.numerator && p.denominator) {
      const numKey = BAND_MAP[String(p.numerator)] ?? "Alpha";
      const denKey = BAND_MAP[String(p.denominator)] ?? "Theta";
      const num = bandPowers[numKey] ?? 0;
      const den = bandPowers[denKey] ?? 0;
      value = den < 1e-9 ? 0 : num / den;
    } else if (recipe.trigger_type.startsWith("amplitude")) {
      value = amplitude;
    }
    const threshold = (p.threshold as number) ?? 10;
    const above = recipe.trigger_type.includes("above");
    const hit = above ? value >= threshold : value <= threshold;
    setTriggerHit(hit);
    // Count only rising edges (false → true) to match real webhook cooldown behavior
    if (hit && !prevHitRef.current) setHitCount((c) => c + 1);
    prevHitRef.current = hit;
  }, [bandPowers, recipe, step, amplitude]);

  const nextStep = useCallback(() => {
    const idx = STEP_ORDER.indexOf(step);
    if (idx < STEP_ORDER.length - 1) setStep(STEP_ORDER[idx + 1]);
  }, [step]);

  const prevStep = useCallback(() => {
    const idx = STEP_ORDER.indexOf(step);
    if (idx > 0) setStep(STEP_ORDER[idx - 1]);
  }, [step]);

  const handleCreate = useCallback(() => {
    if (!recipe || !sendCommand) return;
    let url = webhookUrl;
    if (recipe.service === "ifttt" && serviceKey) {
      const evt = recipe.iftttEvent || "pieeg_trigger";
      url = `https://maker.ifttt.com/trigger/${encodeURIComponent(evt)}/json/with/key/${serviceKey}`;
    }
    sendCommand({
      cmd: "webhook_create",
      rule: {
        name: recipe.name,
        enabled: true,
        trigger_type: recipe.trigger_type,
        params: recipe.params,
        url,
        method: "POST",
        headers: {},
        body_template: "",
        cooldown: recipe.cooldown,
        service: recipe.service,
      },
    });
    nextStep();
  }, [recipe, serviceKey, webhookUrl, sendCommand, nextStep]);

  // ── Progress bar ──
  const stepIdx = STEP_ORDER.indexOf(step);
  const progress = ((stepIdx) / (STEP_ORDER.length - 1)) * 100;

  return (
    <div className="wiz-root">
      {/* Header */}
      <div className="wiz-header">
        <button className="btn wiz-exit" onClick={onExit}>← Exit</button>
        <h1 className="wiz-title">Webhook Wizard</h1>
        <span className="wiz-subtitle">Set up your first brain-powered automation in 60 seconds</span>
      </div>

      {/* Progress */}
      <div className="wiz-progress">
        <div className="wiz-progress-bar" style={{ width: `${progress}%` }} />
        <div className="wiz-steps">
          {STEP_ORDER.map((s, i) => (
            <span
              key={s}
              className={`wiz-step-dot${i <= stepIdx ? " active" : ""}${s === step ? " current" : ""}`}
            >
              {STEP_LABELS[s]}
            </span>
          ))}
        </div>
      </div>

      {/* Live band meter (always visible) */}
      {bandPowers && (
        <div className="wiz-meter">
          {FREQUENCY_BANDS.map((band) => {
            const val = bandPowers[band.name] ?? 0;
            const pct = Math.min(val / 30, 1) * 100;
            return (
              <div key={band.name} className="wiz-meter-bar">
                <span className="wiz-meter-label">{band.label}</span>
                <div className="wiz-meter-track">
                  <div
                    className="wiz-meter-fill"
                    style={{ width: `${pct}%`, background: band.color }}
                  />
                </div>
                <span className="wiz-meter-val">{val.toFixed(1)}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* Step content */}
      <div className="wiz-body">
        {step === "choose" && (
          <div className="wiz-choose">
            <h2>What do you want your brain to do?</h2>
            <p className="wiz-desc">Pick a recipe below — each one is a pre-configured automation you can launch in minutes.</p>
            <div className="wiz-recipe-grid">
              {WIZARD_RECIPES.map((r) => (
                <button
                  key={r.id}
                  className={`wiz-recipe-card${recipe?.id === r.id ? " selected" : ""}`}
                  onClick={() => setRecipe(r)}
                >
                  <span className="wiz-recipe-icon">{r.icon}</span>
                  <span className="wiz-recipe-name">{r.name}</span>
                  <span className="wiz-recipe-desc">{r.description}</span>
                  <span className={`wh-badge wh-service-${r.service}`}>
                    {r.service === "generic" ? "Webhook" : r.service.toUpperCase()}
                  </span>
                </button>
              ))}
            </div>
            <button className="btn wiz-next" disabled={!recipe} onClick={nextStep}>
              Next →
            </button>
          </div>
        )}

        {step === "connect" && recipe && (
          <div className="wiz-connect">
            <h2>Connect {recipe.service === "ifttt" ? "IFTTT" : recipe.service === "zapier" ? "Zapier" : "your service"}</h2>

            {recipe.service === "ifttt" ? (
              <div className="wiz-instructions">
                <ol>
                  <li>Go to <strong>ifttt.com/create</strong></li>
                  <li>"If This" → <strong>Webhooks</strong> → "Receive a web request with a JSON payload"</li>
                  <li>Event name: <code>{recipe.iftttEvent || "pieeg_trigger"}</code></li>
                  <li>"Then That" → {recipe.actionHint}</li>
                  <li>Get your key at <strong>ifttt.com/services/maker_webhooks</strong> → Documentation</li>
                </ol>
                <label className="wiz-label">Paste your IFTTT Webhooks key:</label>
                <input
                  className="wiz-input"
                  value={serviceKey}
                  onChange={(e) => setServiceKey(e.target.value)}
                  placeholder="your-ifttt-key"
                  autoFocus
                />
              </div>
            ) : recipe.service === "zapier" ? (
              <div className="wiz-instructions">
                <ol>
                  <li>Go to <strong>zapier.com/app/zaps</strong> → Create Zap</li>
                  <li>Trigger: <strong>Webhooks by Zapier</strong> → "Catch Hook"</li>
                  <li>Copy the webhook URL</li>
                  <li>Action: {recipe.actionHint}</li>
                </ol>
                <label className="wiz-label">Paste your Zapier webhook URL:</label>
                <input
                  className="wiz-input"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  placeholder="https://hooks.zapier.com/hooks/catch/..."
                  autoFocus
                />
              </div>
            ) : (
              <div className="wiz-instructions">
                <p>💡 {recipe.actionHint}</p>
                <label className="wiz-label">Paste your webhook URL:</label>
                <input
                  className="wiz-input"
                  value={webhookUrl}
                  onChange={(e) => setWebhookUrl(e.target.value)}
                  placeholder="https://..."
                  autoFocus
                />
              </div>
            )}

            <div className="wiz-nav">
              <button className="btn wiz-back" onClick={prevStep}>← Back</button>
              <button
                className="btn wiz-next"
                disabled={recipe.service === "ifttt" ? !serviceKey : !webhookUrl}
                onClick={nextStep}
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {step === "configure" && recipe && (
          <div className="wiz-configure">
            <h2>Trigger settings</h2>
            <p className="wiz-desc">
              These are pre-configured for <strong>{recipe.name}</strong>. You can adjust them later in the Webhooks panel.
            </p>
            <div className="wiz-config-summary">
              <div className="wiz-config-row">
                <span className="wiz-config-label">Trigger</span>
                <span className="wiz-config-value">
                  {recipe.trigger_type.replace(/_/g, " ")}
                </span>
              </div>
              {"band" in recipe.params && (
                <div className="wiz-config-row">
                  <span className="wiz-config-label">Band</span>
                  <span className="wiz-config-value">{String(recipe.params.band)}</span>
                </div>
              )}
              {"numerator" in recipe.params && (
                <div className="wiz-config-row">
                  <span className="wiz-config-label">Ratio</span>
                  <span className="wiz-config-value">
                    {String(recipe.params.numerator)} / {String(recipe.params.denominator)}
                  </span>
                </div>
              )}
              <div className="wiz-config-row">
                <span className="wiz-config-label">Threshold</span>
                <span className="wiz-config-value">{String(recipe.params.threshold)}</span>
              </div>
              <div className="wiz-config-row">
                <span className="wiz-config-label">Cooldown</span>
                <span className="wiz-config-value">{recipe.cooldown}s</span>
              </div>
              <div className="wiz-config-row">
                <span className="wiz-config-label">Channel</span>
                <span className="wiz-config-value">
                  {recipe.params.channel === "avg" ? "Average (all)" : `Ch ${Number(recipe.params.channel) + 1}`}
                </span>
              </div>
            </div>
            <div className="wiz-nav">
              <button className="btn wiz-back" onClick={prevStep}>← Back</button>
              <button className="btn wiz-next wiz-create" onClick={handleCreate}>
                Create & Test →
              </button>
            </div>
          </div>
        )}

        {step === "test" && recipe && (
          <div className="wiz-test">
            <h2>Live test</h2>
            <p className="wiz-desc">
              Your webhook rule is active! Watch the meter above — when the condition is met, it fires.
            </p>
            <div className={`wiz-trigger-indicator${triggerHit ? " hit" : ""}`}>
              <span className="wiz-trigger-icon">{triggerHit ? "🔔" : "⏳"}</span>
              <span className="wiz-trigger-text">
                {triggerHit ? "TRIGGERED!" : "Waiting for trigger…"}
              </span>
              {hitCount > 0 && (
                <span className="wiz-trigger-count">{hitCount} hit{hitCount !== 1 ? "s" : ""}</span>
              )}
            </div>
            <p className="wiz-tip">
              💡 Try closing your eyes and relaxing (alpha) or focusing intently (beta) to trigger the condition.
            </p>
            <div className="wiz-nav">
              <button className="btn wiz-back" onClick={prevStep}>← Back</button>
              <button className="btn wiz-next" onClick={nextStep}>
                Finish →
              </button>
            </div>
          </div>
        )}

        {step === "done" && recipe && (
          <div className="wiz-done">
            <div className="wiz-done-icon">🎉</div>
            <h2>You're live!</h2>
            <p className="wiz-desc">
              <strong>{recipe.name}</strong> is now running. It keeps working
              even when you leave this page — as long as the dashboard tab is open
              and webhooks are enabled.
            </p>
            <div className="wiz-done-actions">
              <button className="btn wiz-next" onClick={onExit}>
                Back to experiences
              </button>
            </div>
            <p className="wiz-tip">
              💡 Find your rule in the Webhooks panel to edit thresholds, change the URL, or add more rules.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
