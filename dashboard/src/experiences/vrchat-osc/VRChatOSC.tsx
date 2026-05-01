// ─────────────────────────────────────────────────────────────────────────────
// VRChat OSC Bridge — EEG → VRChat chatbox / avatar parameters
//
// Communicates with the Python osc_vrchat.py bridge running on the server.
// The bridge subscribes to the AcquisitionLoop server-side, computes band
// powers with numpy FFT, and sends OSC UDP packets to VRChat at a configured
// interval.
//
// This component handles the control UI and mirrors EEG data locally for the
// visualiser.  All actual OSC traffic happens in the Python process.
//
// VRChat OSC endpoints:
//   /chatbox/input  (string, bool)      — scrolling chatbox above avatar
//   /avatar/parameters/EEG_{Band}       — float 0–1 per band (drive animations)
//
// Docs: https://docs.vrchat.com/docs/osc-overview
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef, useCallback } from "react";
import type { ExperienceProps } from "../registry";
import { FftEngine, FREQUENCY_BANDS } from "../../lib/fftEngine";
import type { BandPowers } from "../../types";
import { getSampleRate } from "../../lib/sampleRateStore";

// ── Constants ───────────────────────────────────────────────────────

// Lazy / rate-aware FftEngine. Rebuilt automatically when the live sample
// rate changes (e.g. PiEEG-16 250 Hz → IronBCI-32 500 Hz).
let _FFT_ENGINE: FftEngine | null = null;
function getFftEngine(): FftEngine {
  const rate = getSampleRate();
  if (!_FFT_ENGINE || _FFT_ENGINE.sampleRateHz !== rate) {
    _FFT_ENGINE = new FftEngine(256, rate);
  }
  return _FFT_ENGINE;
}
const FFT_INTERVAL_MS = 300; // local vis update interval

const DEFAULT_CONFIG = {
  host: "127.0.0.1",
  port: 9000,
  mode: "both" as "chatbox" | "parameters" | "both",
  channel: "avg" as number | "avg",
  chatbox_template:
    "\u{1F9E0} \u03B1{alpha:.0f}|\u03B8{theta:.0f}|\u03B2{beta:.0f}|\u03B3{gamma:.0f} \u00B5V\u00B2/Hz",
  parameter_prefix: "EEG_",
  normalize: true,
  typing_indicator: true,
  interval: 1.5,
};

type OSCConfig = typeof DEFAULT_CONFIG;

interface OSCStatus {
  running: boolean;
  config?: OSCConfig;
  last_send?: number;
  send_count?: number;
  last_message?: string;
  band_powers?: BandPowers;
  normalised?: BandPowers;
}

const BAND_COLORS: Record<string, string> = {
  Delta: "#8b5cf6",
  Theta: "#06b6d4",
  Alpha: "#22c55e",
  Beta:  "#f59e0b",
  Gamma: "#ef4444",
};

const TEMPLATE_PRESETS: { label: string; value: string; desc: string }[] = [
  {
    label: "Full bands",
    value: "\u{1F9E0} \u03B1{alpha:.0f}|\u03B8{theta:.0f}|\u03B2{beta:.0f}|\u03B3{gamma:.0f} \u00B5V\u00B2/Hz",
    desc: "Raw µV²/Hz for all 5 bands",
  },
  {
    label: "Dominant band",
    value: "\u26A1 {dominant} is dominant",
    desc: "Shows which band is strongest",
  },
  {
    label: "\u03B1/\u03B2 focus ratio",
    value: "\u{1F3AF} Focus \u03B1/\u03B2 = {ratio_ab:.2f}",
    desc: "Alpha-to-Beta ratio — higher = more relaxed",
  },
  {
    label: "Calm score",
    value: "\u{1F9D8} \u03B1{alpha_n:.2f} | \u03B2{beta_n:.2f} | focus={ratio_ab:.2f}",
    desc: "Normalised alpha and beta with focus ratio",
  },
  {
    label: "All normalised",
    value: "\u{1F535} \u03B4{delta_n:.2f} \u03B8{theta_n:.2f} \u03B1{alpha_n:.2f} \u03B2{beta_n:.2f} \u03B3{gamma_n:.2f}",
    desc: "All 5 bands normalised 0–1",
  },
  {
    label: "Minimal",
    value: "{dominant} \u03B1{alpha_n:.2f} \u03B2{beta_n:.2f}",
    desc: "Compact: dominant band + key values",
  },
  {
    label: "Brain state",
    value: "\u{1F9E0} {dominant} | relax={ratio_ab:.1f}",
    desc: "Dominant band + relaxation score",
  },
  {
    label: "All raw",
    value: "\u03B4{delta:.0f} \u03B8{theta:.0f} \u03B1{alpha:.0f} \u03B2{beta:.0f} \u03B3{gamma:.0f}",
    desc: "All 5 raw values without units",
  },
];

// Simple Python-style .format() substitution for template preview
function previewTemplate(tmpl: string, powers: BandPowers): string {
  const alpha = powers["Alpha"] ?? 0;
  const theta = powers["Theta"] ?? 0;
  const beta  = powers["Beta"] ?? 0;
  const gamma = powers["Gamma"] ?? 0;
  const delta = powers["Delta"] ?? 0;
  const rAB   = alpha / Math.max(beta, 1e-6);
  const dominant = Object.entries(powers).sort(([, a], [, b]) => b - a)[0]?.[0] ?? "?";

  return tmpl
    .replace(/\{alpha:.*?\}/g, alpha.toFixed(0))
    .replace(/\{theta:.*?\}/g, theta.toFixed(0))
    .replace(/\{beta:.*?\}/g, beta.toFixed(0))
    .replace(/\{gamma:.*?\}/g, gamma.toFixed(0))
    .replace(/\{delta:.*?\}/g, delta.toFixed(0))
    .replace(/\{alpha_n:.*?\}/g, (alpha / 100).toFixed(2))
    .replace(/\{theta_n:.*?\}/g, (theta / 100).toFixed(2))
    .replace(/\{beta_n:.*?\}/g, (beta / 100).toFixed(2))
    .replace(/\{gamma_n:.*?\}/g, (gamma / 100).toFixed(2))
    .replace(/\{delta_n:.*?\}/g, (delta / 100).toFixed(2))
    .replace(/\{ratio_ab:.*?\}/g, rAB.toFixed(2))
    .replace(/\{dominant\}/g, dominant)
    .replace(/\{.*?\}/g, "?");
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function VRChatOSC({ eegData, onExit, sendCommand }: ExperienceProps) {
  const [status, setStatus] = useState<OSCStatus>({ running: false });
  const [config, setConfig] = useState<OSCConfig>({ ...DEFAULT_CONFIG });
  const [showConfig, setShowConfig] = useState(true);
  const [bandPowers, setBandPowers] = useState<BandPowers>({});
  // Optimistic pending: "start" | "stop" | null — reflects button click before server ack
  const [pending, setPending] = useState<"start" | "stop" | null>(null);
  const fftTimerRef = useRef(0);

  // ── Query server OSC status on mount ────────────────────────────────

  useEffect(() => {
    if (sendCommand) sendCommand({ cmd: "osc_status" });
  }, [sendCommand]);

  // ── Handle incoming osc_status WebSocket messages ────────────────────

  useEffect(() => {
      (window as unknown as Record<string, unknown>).__oscHandler = (msg: Record<string, unknown>) => {
      if (msg.osc_status) {
        const s = msg.osc_status as OSCStatus;
        setStatus(s);
        setPending(null); // server confirmed — clear optimistic state
        // Sync config from server when available
        if (s.config) setConfig((prev) => ({ ...prev, ...s.config }));
      }
    };
    return () => {
      delete (window as unknown as Record<string, unknown>).__oscHandler;
    };
  }, []);

  // ── Keyboard shortcuts ───────────────────────────────────────────────

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onExit();
      if (e.key === "c" || e.key === "C") setShowConfig((v) => !v);
      if (e.key === " ") {
        e.preventDefault();
        if (pending === null) toggleBridge();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onExit, status.running, pending]);

  // ── Local FFT for visual band meters ────────────────────────────────

  useEffect(() => {
    const tick = () => {
      const { buffers, writeIndex, samplesInBuffer, numChannels } = eegData;
      if (!buffers.current) return;

      const n = numChannels;
      // Accumulate band powers across channels, then average
      const accumulated: BandPowers = {};
      let count = 0;

      for (let c = 0; c < n; c++) {
        const buf = buffers.current[c];
        const wi = writeIndex.current;
        const si = samplesInBuffer.current;
        if (!buf || si < 256) continue;
        const result = getFftEngine().analyseRing(buf, wi, si);
        if (!result) continue;
        for (const band of FREQUENCY_BANDS) {
          accumulated[band.name] = (accumulated[band.name] ?? 0) + result.bandPowers[band.name];
        }
        count++;
      }

      if (count === 0) return;

      const bp: BandPowers = {};
      for (const band of FREQUENCY_BANDS) {
        bp[band.name] = (accumulated[band.name] ?? 0) / count;
      }
      setBandPowers(bp);
    };

    fftTimerRef.current = window.setInterval(tick, FFT_INTERVAL_MS);
    return () => clearInterval(fftTimerRef.current);
  }, [eegData]);

  // ── Poll osc_status while bridge is running ────────────────────────
  // Server only broadcasts on start/stop/config — poll to keep
  // send_count, last_message, and normalised values live.
  useEffect(() => {
    const active = pending === "start" ? true : pending === "stop" ? false : status.running;
    if (!active || !sendCommand) return;
    const id = window.setInterval(() => {
      sendCommand({ cmd: "osc_status" });
    }, 500);
    return () => clearInterval(id);
  }, [status.running, pending, sendCommand]);

  // ── Control actions ──────────────────────────────────────────────────

  const toggleBridge = useCallback(() => {
    if (!sendCommand) return;
    if (status.running) {
      setPending("stop");
      sendCommand({ cmd: "osc_stop" });
    } else {
      setPending("start");
      sendCommand({ cmd: "osc_start", config: configToServer(config) });
    }
  }, [sendCommand, status.running, config]);

  const applyConfig = useCallback(
    (patch: Partial<OSCConfig>) => {
      setConfig((prev) => {
        const next = { ...prev, ...patch };
        if (sendCommand && status.running) {
          sendCommand({ cmd: "osc_config", config: configToServer(next) });
        }
        return next;
      });
    },
    [sendCommand, status.running],
  );

  // ── Preview of what the chatbox message will look like ───────────────
  // Always render the local preview from the current template + live band powers.
  // When the bridge is running the server's last_message is appended as a
  // secondary "last sent" note so the user can compare.
  const previewText = previewTemplate(config.chatbox_template, bandPowers);
  const serverMsg = previewText;

  // ── Render ───────────────────────────────────────────────────────────

  // Optimistic: reflect pending command instantly; fall back to server state
  const isRunning = pending === "start" ? true : pending === "stop" ? false : status.running;
  const statusDot = isRunning ? "#22c55e" : pending ? "#f59e0b" : "#484f58";
  const statusLabel = pending === "start"
    ? `Connecting… ${config.host}:${config.port}`
    : pending === "stop"
    ? "Stopping…"
    : isRunning
    ? `Active — ${config.host}:${config.port}`
    : "Stopped";

  // ── Band power display values ─────────────────────────────────────────
  // Bars always use local FFT (always live). Server normalised values
  // are shown separately in the OSC param column.
  const maxLocalBP = Math.max(...Object.values(bandPowers), 1e-9);
  const hasData = Object.keys(bandPowers).length > 0;
  const displayBands = FREQUENCY_BANDS.map((band) => {
    const raw = bandPowers[band.name] ?? 0;
    const norm = Math.min(Math.log1p(raw) / Math.log1p(maxLocalBP), 1);
    const oscVal = isRunning ? (status.normalised?.[band.name] ?? null) : null;
    return { band, norm, oscVal };
  });

  return (
    <div style={styles.root}>

      {/* ── Header ── */}
      <div style={styles.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22 }}>🎮</span>
          <div>
            <div style={styles.title}>VRChat OSC Bridge</div>
            <div style={styles.statusLine}>
              <span
                style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: statusDot, display: "inline-block",
                  boxShadow: isRunning ? `0 0 6px ${statusDot}` : "none",
                }}
              />
              &nbsp;{statusLabel}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={toggleBridge}
            disabled={!sendCommand || pending !== null}
            style={{
              ...styles.btn,
              background: isRunning ? "#da3633" : "#238636",
              opacity: (sendCommand && pending === null) ? 1 : 0.6,
            }}
          >
            {pending === "start" ? "⏳ Starting…" : pending === "stop" ? "⏳ Stopping…" : isRunning ? "⏹ Stop" : "▶ Start"}
          </button>
          <button onClick={onExit} style={{ ...styles.btn, background: "#30363d" }}>
            ✕ Exit
          </button>
        </div>
      </div>

      {/* ── Config panel — collapsible, open by default ── */}
      <div style={styles.configPanel}>
        <button
          style={styles.sectionToggle}
          onClick={() => setShowConfig((v) => !v)}
          aria-expanded={showConfig}
          aria-controls="osc-config-body"
        >
          <span>⚙ Configuration</span>
          <span style={{ fontSize: 10, opacity: 0.6 }}>{showConfig ? "▲ collapse" : "▼ expand"}</span>
        </button>
        {showConfig && (
          <div id="osc-config-body" style={styles.configGrid}>
            <label style={styles.label}>
              Host
              <input
                style={styles.input}
                value={config.host}
                onChange={(e) => applyConfig({ host: e.target.value })}
                placeholder="127.0.0.1"
              />
            </label>
            <label style={styles.label}>
              Port
              <input
                style={styles.input}
                type="number"
                value={config.port}
                min={1024} max={65535}
                onChange={(e) => applyConfig({ port: parseInt(e.target.value) || 9000 })}
              />
            </label>
            <label style={styles.label}>
              Mode
              <select
                style={styles.select}
                value={config.mode}
                onChange={(e) => applyConfig({ mode: e.target.value as OSCConfig["mode"] })}
              >
                <option value="chatbox">Chatbox only</option>
                <option value="parameters">Avatar parameters only</option>
                <option value="both">Both</option>
              </select>
            </label>
            <label style={styles.label}>
              Channel
              <select
                style={styles.select}
                value={String(config.channel)}
                onChange={(e) =>
                  applyConfig({ channel: e.target.value === "avg" ? "avg" : parseInt(e.target.value) })
                }
              >
                <option value="avg">All channels (avg)</option>
                {Array.from({ length: 16 }, (_, i) => (
                  <option key={i} value={i}>Channel {i + 1}</option>
                ))}
              </select>
            </label>
            <label style={styles.label}>
              Update rate — {(1 / config.interval).toFixed(1)} Hz
              <input
                type="range" min={0.1} max={2} step={0.05}
                value={config.interval}
                onChange={(e) => applyConfig({ interval: parseFloat(e.target.value) })}
                style={styles.range}
              />
            </label>
            <label style={styles.label}>
              Parameter prefix
              <input
                style={styles.input}
                value={config.parameter_prefix}
                onChange={(e) => applyConfig({ parameter_prefix: e.target.value })}
                placeholder="EEG_"
              />
            </label>

            {/* ── Chatbox template + presets ── */}
            <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={styles.label}>
                Chatbox template
                <input
                  style={styles.input}
                  value={config.chatbox_template}
                  onChange={(e) => applyConfig({ chatbox_template: e.target.value })}
                />
                <span style={{ color: "#484f58", fontSize: 10, marginTop: 2, fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>
                  Variables: {"{alpha} {theta} {beta} {gamma} {delta}"} (raw µV²/Hz)
                  &nbsp;|&nbsp; {"{alpha_n} …"} (normalised 0–1)
                  &nbsp;|&nbsp; {"{ratio_ab}"} (α/β) &nbsp;|&nbsp; {"{dominant}"}
                </span>
              </label>
              {/* Template preset list */}
              <div>
                <div style={{ fontSize: 10, fontWeight: 600, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 5 }}>
                  Presets
                </div>
                <ul
                  role="list"
                  aria-label="Chatbox template presets"
                  style={styles.presetList}
                >
                  {TEMPLATE_PRESETS.map((p) => {
                    const active = config.chatbox_template === p.value;
                    return (
                      <li key={p.label} style={{ listStyle: "none" }}>
                        <button
                          type="button"
                          title={p.value}
                          aria-pressed={active}
                          style={{
                            ...styles.presetBtn,
                            ...(active ? styles.presetBtnActive : {}),
                          }}
                          onClick={() => applyConfig({ chatbox_template: p.value })}
                        >
                          <span style={styles.presetBtnLabel}>{p.label}</span>
                          <span style={styles.presetBtnDesc}>{p.desc}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* ── Toggles ── */}
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <label style={styles.checkLabel}>
                <input
                  type="checkbox"
                  checked={config.normalize}
                  onChange={(e) => applyConfig({ normalize: e.target.checked })}
                />
                Normalise 0–1
              </label>
              <label style={styles.checkLabel}>
                <input
                  type="checkbox"
                  checked={config.typing_indicator}
                  onChange={(e) => applyConfig({ typing_indicator: e.target.checked })}
                />
                Typing indicator
              </label>
            </div>
          </div>
        )}
      </div>

      {/* ── Scrollable body ── */}
      <div style={styles.body}>

        {/* ── Unified EEG band monitor ── */}
        <section style={styles.section} aria-label="EEG band powers">
          <div style={styles.sectionTitle}>
            EEG Bands
            <span style={styles.sectionBadge}>local FFT</span>
            {config.mode !== "chatbox" && (
              <span style={{ ...styles.sectionBadge, marginLeft: 0, color: isRunning ? "#22c55e" : undefined }}>
                {isRunning ? "OSC live" : "OSC –"}
              </span>
            )}
          </div>
          <div style={styles.bandList}>
            {displayBands.map(({ band, norm, oscVal }) => (
              <div key={band.name} style={styles.bandRow}>
                {/* Label */}
                <span style={{ ...styles.bandLabel, color: BAND_COLORS[band.name] }}>
                  {band.label}
                </span>
                {/* Bar — always local FFT, always live */}
                <div
                  style={styles.bandBarTrack}
                  role="progressbar"
                  aria-valuenow={Math.round(norm * 100)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${band.label} ${Math.round(norm * 100)}%`}
                >
                  <div
                    style={{
                      width: `${norm * 100}%`,
                      height: "100%",
                      background: BAND_COLORS[band.name],
                      borderRadius: 3,
                      transition: "width 0.25s ease",
                      boxShadow: norm > 0.5 ? `0 0 8px ${BAND_COLORS[band.name]}88` : undefined,
                    }}
                  />
                </div>
                {/* Percentage (local) */}
                <span style={styles.bandPct}>
                  {hasData ? `${(norm * 100).toFixed(0)}%` : "—"}
                </span>
                {/* OSC param name + server normalised value */}
                {config.mode !== "chatbox" && (
                  <>
                    <code style={styles.paramName}>
                      {config.parameter_prefix}{band.name}
                    </code>
                    <span style={styles.paramVal}>
                      {oscVal !== null ? oscVal.toFixed(3) : "–"}
                    </span>
                  </>
                )}
              </div>
            ))}
            {!hasData && (
              <div style={styles.noData}>Waiting for EEG data…</div>
            )}
          </div>
        </section>

        {/* ── Chatbox preview ── */}
        {config.mode !== "parameters" && (
          <section style={styles.section} aria-label="VRChat chatbox preview">
            <div style={styles.sectionTitle}>Chatbox Preview</div>
            <div style={styles.chatboxWrap}>
              <div style={styles.chatboxBubble}>
                <span>{serverMsg || "\u00A0"}</span>
              </div>
              <div style={styles.avatarIcon}>🧑‍💻</div>
            </div>
            {isRunning && status.last_message && status.last_message !== serverMsg && (
              <div style={{ fontSize: 10, color: "#484f58", textAlign: "center", marginTop: 2 }}>
                Last sent: <span style={{ color: "#8b949e" }}>{status.last_message}</span>
              </div>
            )}
          </section>
        )}

      </div>{/* end body */}

      {/* ── Footer ── */}
      <div style={styles.footer}>
        Space=start/stop · C=config · Esc=exit
        {!sendCommand && (
          <span style={{ color: "#f59e0b", marginLeft: 16 }}>
            ⚠ No WebSocket — start pieeg-server to control the bridge
          </span>
        )}
      </div>

    </div>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function configToServer(cfg: OSCConfig): Record<string, unknown> {
  return {
    host: cfg.host,
    port: cfg.port,
    mode: cfg.mode,
    channel: cfg.channel,
    chatbox_template: cfg.chatbox_template,
    parameter_prefix: cfg.parameter_prefix,
    normalize: cfg.normalize,
    typing_indicator: cfg.typing_indicator,
    interval: cfg.interval,
  };
}

// ── Styles ────────────────────────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  root: {
    position: "fixed", inset: 0, zIndex: 9999,
    background: "#0d1117",
    display: "flex", flexDirection: "column",
    fontFamily: "system-ui, sans-serif",
    color: "#c9d1d9",
    overflow: "hidden",
  },
  header: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "12px 16px",
    borderBottom: "1px solid #30363d",
    background: "#161b22",
    flexShrink: 0,
  },
  title: {
    fontSize: 17, fontWeight: 700, color: "#e6edf3", lineHeight: 1.2,
  },
  statusLine: {
    fontSize: 12, color: "#8b949e", marginTop: 2,
    display: "flex", alignItems: "center", gap: 4,
  },
  configPanel: {
    background: "#161b22",
    borderBottom: "1px solid #30363d",
    padding: "0 16px",
    flexShrink: 0,
    maxHeight: "60vh",
    overflowY: "auto" as const,
  },
  sectionToggle: {
    width: "100%",
    background: "none",
    border: "none",
    color: "#8b949e",
    fontSize: 12,
    fontWeight: 600,
    padding: "10px 0",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
  },
  configGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: 10,
    paddingBottom: 12,
  },
  label: {
    display: "flex", flexDirection: "column", gap: 4,
    fontSize: 11, fontWeight: 600, color: "#8b949e", textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  checkLabel: {
    display: "flex", alignItems: "center", gap: 6,
    fontSize: 12, color: "#c9d1d9", cursor: "pointer",
  },
  input: {
    background: "#0d1117", color: "#e6edf3",
    border: "1px solid #30363d", borderRadius: 4,
    padding: "5px 8px", fontSize: 13,
    fontFamily: "inherit",
    width: "100%", boxSizing: "border-box" as const,
  },
  select: {
    background: "#0d1117", color: "#e6edf3",
    border: "1px solid #30363d", borderRadius: 4,
    padding: "5px 8px", fontSize: 13,
  },
  range: {
    width: "100%", accentColor: "#58a6ff",
  },
  presetList: {
    margin: 0, padding: 0,
    display: "flex", flexDirection: "column" as const, gap: 2,
  },
  presetBtn: {
    width: "100%",
    background: "#0d1117",
    border: "1px solid #30363d",
    borderRadius: 5,
    color: "#c9d1d9",
    cursor: "pointer",
    padding: "6px 10px",
    textAlign: "left" as const,
    display: "flex",
    alignItems: "baseline",
    gap: 8,
    fontSize: 12,
    transition: "border-color 0.15s, background 0.15s",
  },
  presetBtnActive: {
    background: "#1f3a1f",
    borderColor: "#238636",
    color: "#e6edf3",
  },
  presetBtnLabel: {
    fontWeight: 600,
    minWidth: 130,
    fontSize: 12,
  },
  presetBtnDesc: {
    color: "#484f58",
    fontSize: 11,
    fontWeight: 400,
  },
  body: {
    flex: 1,
    overflowY: "auto" as const,
    display: "flex",
    flexDirection: "column" as const,
    gap: 0,
  },
  section: {
    padding: "12px 16px",
    borderBottom: "1px solid #21262d",
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: "#484f58",
    textTransform: "uppercase" as const,
    letterSpacing: "0.07em",
    marginBottom: 8,
    display: "flex",
    alignItems: "center",
    gap: 8,
  },
  sectionBadge: {
    background: "#21262d",
    color: "#8b949e",
    borderRadius: 3,
    padding: "1px 5px",
    fontSize: 9,
    fontWeight: 500,
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
  },
  bandList: {
    display: "flex", flexDirection: "column" as const, gap: 7,
  },
  bandRow: {
    display: "flex", alignItems: "center", gap: 10,
  },
  bandLabel: {
    fontWeight: 700,
    fontSize: 12,
    minWidth: 46,
    letterSpacing: "0.02em",
  },
  bandBarTrack: {
    flex: 1, height: 10, background: "#21262d", borderRadius: 5, overflow: "hidden" as const,
  },
  bandPct: {
    color: "#8b949e", fontSize: 11, minWidth: 36, textAlign: "right" as const,
    fontVariantNumeric: "tabular-nums",
  },
  noData: {
    color: "#484f58", fontSize: 12, fontStyle: "italic" as const, padding: "4px 0",
  },
  chatboxWrap: {
    display: "flex", flexDirection: "column" as const, alignItems: "center",
    gap: 6,
  },
  chatboxBubble: {
    background: "rgba(255,255,255,0.92)",
    color: "#111",
    borderRadius: 20,
    padding: "8px 18px",
    fontSize: 14, fontWeight: 500,
    maxWidth: "80%",
    textAlign: "center" as const,
    boxShadow: "0 2px 12px rgba(0,0,0,0.5)",
    wordBreak: "break-word" as const,
  },
  avatarIcon: {
    fontSize: 26, lineHeight: 1,
  },
  paramTable: {
    display: "flex", flexDirection: "column" as const, gap: 6,
  },
  paramRow: {
    display: "flex", alignItems: "center", gap: 10,
  },
  paramName: {
    color: "#484f58",
    fontSize: 11,
    minWidth: 110,
    fontFamily: "monospace",
  },
  paramBarTrack: {
    flex: 1, height: 8, background: "#21262d", borderRadius: 4, overflow: "hidden" as const,
  },
  paramVal: {
    color: "#c9d1d9", fontSize: 11, minWidth: 40, textAlign: "right" as const,
    fontVariantNumeric: "tabular-nums",
  },
  btn: {
    color: "#fff", border: "none", borderRadius: 6,
    padding: "7px 16px", fontSize: 13, fontWeight: 600,
    cursor: "pointer",
  },
  footer: {
    fontSize: 11, color: "#484f58", textAlign: "center" as const,
    padding: "6px 16px",
    borderTop: "1px solid #30363d",
    flexShrink: 0,
  },
};
