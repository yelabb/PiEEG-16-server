import { useState, useEffect, useCallback, useRef, type ChangeEvent } from "react";
import { useEEG } from "./hooks/useEEG";
import AuthGate from "./components/AuthGate";
import ChannelCanvas from "./components/ChannelCanvas";
import ChannelDetailPanel from "./components/ChannelDetailPanel";
import SpectralPanel from "./components/SpectralPanel";
import PerformanceMonitor from "./components/PerformanceMonitor";
import SessionList from "./components/SessionList";
import SessionViewer from "./components/SessionViewer";
import TopoMap from "./components/TopoMap";
import Spectrogram from "./components/Spectrogram";
import FilterPreview from "./components/FilterPreview";
import StatsPanel from "./components/StatsPanel";
import UpdateBanner from "./components/UpdateBanner";
import ChannelMismatchBanner from "./components/ChannelMismatchBanner";
import ShortcutHelp from "./components/ShortcutHelp";
import ChatPanel from "./components/ChatPanel";
import WebhookPanel from "./components/WebhookPanel";
import RegisterPanel from "./components/RegisterPanel";
import ExperiencesPage from "./components/ExperiencesPage";
import { useWebhooks } from "./hooks/useWebhooks";
import ErrorBoundary from "./components/ErrorBoundary";
import { NUM_CHANNELS } from "./types";
import { GUIDED_PRESETS } from "./types";
import type { SelectOption, GuidedPreset } from "./types";

const DEFAULT_MOBILE = new Set([0, 1, 2, 3]);
const isDemo = !!import.meta.env.VITE_SERVER_URL;

type ViewState = "live" | "sessions" | "playback" | "experiences";

const SCALE_OPTIONS: SelectOption<number>[] = [
  { value: 50, label: "±50 µV" },
  { value: 100, label: "±100 µV" },
  { value: 200, label: "±200 µV" },
  { value: 500, label: "±500 µV" },
];

const TIME_OPTIONS: SelectOption<number>[] = [
  { value: 2, label: "2s" },
  { value: 4, label: "4s" },
  { value: 8, label: "8s" },
  { value: 16, label: "16s" },
];

export default function App() {
  const [view, setView] = useState<ViewState>("live");
  const [selectedSession, setSelectedSession] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);
  const [showFFT, setShowFFT] = useState(true);
  const [filterEnabled, setFilterEnabled] = useState(false);
  const [lowcut, setLowcut] = useState<number | string>(1);
  const [highcut, setHighcut] = useState<number | string>(40);
  const [timeWindow, setTimeWindow] = useState(4);
  const [yScale, setYScale] = useState(100);
  const [spikeThreshold, setSpikeThreshold] = useState<number | string>(5000);
  const [spikeResetAfter, setSpikeResetAfter] = useState<number | string>(50);
  const lastSpikeThreshold = useRef(5000);
  const spikeEnabled = Number(spikeThreshold) !== -1;
  const [expandedCh, setExpandedCh] = useState<number | null>(null);
  const [showSpectrogram, setShowSpectrogram] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showDocs, setShowDocs] = useState(false);
  const [showRegisters, setShowRegisters] = useState(false);
  const [showWebhooks, setShowWebhooks] = useState(false);
  const [webhooksEnabled, setWebhooksEnabled] = useState(
    () => localStorage.getItem("pieeg_webhooks_enabled") === "true"
  );
  const eeg = useEEG(timeWindow);
  const numCh = eeg.numChannels;

  const [serverInfo, setServerInfo] = useState<{ version: string; branch: string | null } | null>(null);
  useEffect(() => {
    fetch("/api/info")
      .then((r) => r.json())
      .then((d) => { if (d.version) setServerInfo(d); })
      .catch(() => {});
  }, []);

  // Sync local spike inputs from server (skip if user just toggled)
  const spikeUserAction = useRef(false);
  useEffect(() => {
    if (spikeUserAction.current) {
      spikeUserAction.current = false;
      return;
    }
    setSpikeThreshold(eeg.spikeConfig.threshold);
    if (eeg.spikeConfig.threshold > 0) lastSpikeThreshold.current = eeg.spikeConfig.threshold;
    setSpikeResetAfter(eeg.spikeConfig.reset_after);
  }, [eeg.spikeConfig.threshold, eeg.spikeConfig.reset_after]);

  const toggleWebhooksEnabled = useCallback(() => {
    setWebhooksEnabled((prev) => {
      const next = !prev;
      localStorage.setItem("pieeg_webhooks_enabled", String(next));
      return next;
    });
  }, []);

  const webhooks = useWebhooks(webhooksEnabled, eeg.data, eeg.sendCommand);

  // ── LSL streaming ───────────────────────────────────────────────────
  const [lslRunning, setLslRunning] = useState(false);

  useEffect(() => {
    const handler = (msg: Record<string, unknown>) => {
      const s = msg.lsl_status as { running?: boolean } | undefined;
      if (s) setLslRunning(!!s.running);
    };
    (window as unknown as Record<string, unknown>).__lslHandler = handler;
    eeg.sendCommand({ cmd: "lsl_status" });
    return () => {
      delete (window as unknown as Record<string, unknown>).__lslHandler;
    };
  }, []);

  const toggleLSL = useCallback(() => {
    eeg.sendCommand({ cmd: lslRunning ? "lsl_stop" : "lsl_start" });
  }, [lslRunning, eeg.sendCommand]);

  // ── Guided presets ──────────────────────────────────────────────────
  const [activePreset, setActivePreset] = useState<GuidedPreset | null>(null);
  const [presetStep, setPresetStep] = useState(0);

  const applyPreset = useCallback((preset: GuidedPreset | null) => {
    if (!preset) {
      setActivePreset(null);
      setPresetStep(0);
      return;
    }
    setActivePreset(preset);
    setPresetStep(0);
    // Channels
    if (preset.channels) {
      setActiveChannels(new Set(preset.channels));
    } else {
      setActiveChannels(new Set(Array.from({ length: numCh }, (_, i) => i)));
    }
    // Filter
    setFilterEnabled(preset.filterEnabled);
    setLowcut(preset.lowcut);
    setHighcut(preset.highcut);
    eeg.sendCommand({
      cmd: "set_filter",
      enabled: preset.filterEnabled,
      lowcut: preset.lowcut,
      highcut: preset.highcut,
    });
    // Display
    setTimeWindow(preset.timeWindow);
    setYScale(preset.yScale);
    setShowFFT(preset.showFFT);
    setShowSpectrogram(preset.showSpectrogram);
    setShowStats(preset.showStats);
    // Unpause if paused
    if (paused) {
      setPaused(false);
      eeg.setPaused(false);
    }
  }, [numCh, paused]);

  const allChannels = new Set(Array.from({ length: numCh }, (_, i) => i));

  const [activeChannels, setActiveChannels] = useState<Set<number>>(() =>
    window.innerWidth < 768 ? new Set(DEFAULT_MOBILE) : new Set(Array.from({ length: NUM_CHANNELS }, (_, i) => i))
  );

  // Sync activeChannels when numChannels changes (e.g. server reports 8 ch)
  useEffect(() => {
    setActiveChannels((prev) => {
      const next = new Set([...prev].filter((i) => i < numCh));
      if (next.size === 0) {
        return new Set(Array.from({ length: numCh }, (_, i) => i));
      }
      return next;
    });
  }, [numCh]);

  // Keep active channels in a ref so toggleExpandCh stays stable
  const activeChRef = useRef(activeChannels);
  activeChRef.current = activeChannels;

  const toggleChannel = useCallback((i: number) => {
    setActiveChannels((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }, []);

  const setAllChannels = useCallback((on: boolean) => {
    setActiveChannels(on ? new Set(allChannels) : new Set());
  }, [numCh]);

  function togglePause() {
    const next = !paused;
    setPaused(next);
    eeg.setPaused(next);
  }

  function toggleFilter() {
    const next = !filterEnabled;
    setFilterEnabled(next);
    eeg.sendCommand({
      cmd: "set_filter",
      enabled: next,
      lowcut: parseFloat(String(lowcut)) || 1,
      highcut: parseFloat(String(highcut)) || 40,
    });
  }

  function toggleRecord() {
    eeg.sendCommand({ cmd: eeg.recording ? "stop_record" : "start_record" });
  }

  function formatElapsed(sec: number): string {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function updateFilter(low: number | string, high: number | string) {
    if (!filterEnabled) return;
    eeg.sendCommand({
      cmd: "set_filter",
      enabled: true,
      lowcut: parseFloat(String(low)) || 1,
      highcut: parseFloat(String(high)) || 40,
    });
  }

  const toggleExpandCh = useCallback((i: number) => {
    if (!activeChRef.current.has(i)) {
      setActiveChannels((prev) => {
        const next = new Set(prev);
        next.add(i);
        return next;
      });
      return;
    }
    setExpandedCh((prev) => (prev === i ? null : i));
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
      if (view !== "live") {
        if (e.code === "Escape") {
          if (view === "playback") { setView("sessions"); setSelectedSession(null); }
          else if (view === "sessions") setView("live");
          else if (view === "experiences") setView("live");
        }
        return;
      }
      switch (e.code) {
        case "Space":
          e.preventDefault();
          togglePause();
          break;
        case "KeyR":
          toggleRecord();
          break;
        case "KeyF":
          setShowFFT((v) => !v);
          break;
        case "KeyV":
          setView("experiences");
          break;
        case "KeyS":
          setShowStats((v) => !v);
          break;
        case "KeyC":
          setShowChat((v) => !v);
          break;
        case "KeyW":
          setShowWebhooks((v) => !v);
          break;
        case "KeyG":
          setShowSpectrogram((v) => !v);
          break;
        case "KeyD":
          setShowDocs((v) => !v);
          break;
        case "KeyN":
          setShowRegisters((v) => !v);
          break;
        case "Escape":
          if (showDocs) setShowDocs(false);
          else if (activePreset) applyPreset(null);
          else if (expandedCh !== null) setExpandedCh(null);
          else if (eeg.recordResult) eeg.dismissRecordResult();
          break;
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expandedCh, eeg.recordResult, view]);

  // --- Sessions / Playback views ---
  if (view === "playback" && selectedSession) {
    return (
      <AuthGate>
        <ErrorBoundary>
          <SessionViewer
            filename={selectedSession}
            onBack={() => { setView("sessions"); setSelectedSession(null); }}
          />
        </ErrorBoundary>
      </AuthGate>
    );
  }

  if (view === "sessions") {
    return (
      <AuthGate>
        <ErrorBoundary>
          <SessionList
            onSelect={(filename) => { setSelectedSession(filename); setView("playback"); }}
            onBack={() => setView("live")}
          />
        </ErrorBoundary>
      </AuthGate>
    );
  }

  if (view === "experiences") {
    return (
      <AuthGate>
        <ErrorBoundary>
          <ExperiencesPage
            eegData={eeg.data}
            yScale={yScale}
            onBack={() => setView("live")}
            sendCommand={eeg.sendCommand}
          />
        </ErrorBoundary>
      </AuthGate>
    );
  }

  // Suspend grid RAF loops while expanded overlay covers them
  eeg.data.gridSuspended = expandedCh !== null && activeChannels.has(expandedCh);

  return (
    <AuthGate>
      <UpdateBanner />
      <ChannelMismatchBanner numChannels={numCh} eegData={eeg.data} connected={eeg.connected} />
      {/* Header */}
      <header className="header">
        <h1>
          Pi<span>EEG</span>
          <small>{numCh}ch Dashboard</small>
          {isDemo && <span className="demo-badge">DEMO</span>}
          {serverInfo && (
            <a
              className="version-badge"
              href="https://github.com/pieeg-club/PiEEG-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              v{serverInfo.version}{serverInfo.branch ? ` · ${serverInfo.branch}` : ""}
            </a>
          )}
        </h1>
        <div className="status-bar">
          <span>
            <span
              className={`status-dot${eeg.connected ? " connected" : ""}`}
            />
            {eeg.connected ? "Connected" : "Disconnected"}
          </span>
          {eeg.latencyMs !== null && (
            <span className={`latency-badge${eeg.latencyMs > 100 ? " warn" : ""}${eeg.latencyMs > 500 ? " critical" : ""}`}>
              {eeg.latencyMs} ms
            </span>
          )}
          <span className={`live-badge${paused ? " paused" : ""}`}>
            {paused ? "PAUSED" : "LIVE"}
          </span>
          <span style={{ fontFamily: "var(--mono)" }}>{eeg.hz ? `${eeg.hz} Hz` : "— Hz"}</span>
          <span style={{ fontFamily: "var(--mono)" }}>{eeg.sampleCount.toLocaleString()} samples</span>
        </div>
      </header>

      {/* Controls */}
      <div className="controls">
        <button
          className={`btn${paused ? " active" : ""}`}
          onClick={togglePause}
        >
          {paused ? "Resume" : "Pause"}
        </button>
        <button
          className={`btn btn-record${eeg.recording ? " recording" : ""}`}
          onClick={toggleRecord}
        >
          <span className="rec-dot" />
          {eeg.recording
            ? `Stop ${formatElapsed(eeg.recordElapsed)}`
            : "Record"}
        </button>
        <button
          className={`btn${filterEnabled ? " active" : ""}`}
          onClick={toggleFilter}
        >
          Filter: {filterEnabled ? "ON" : "OFF"}
        </button>
        <button
          className={`btn${showFFT ? " active" : ""}`}
          onClick={() => setShowFFT((v) => !v)}
        >
          FFT {showFFT ? "ON" : "OFF"}
        </button>
        <button
          className={`btn${showSpectrogram ? " active" : ""}`}
          onClick={() => setShowSpectrogram((v) => !v)}
        >
          Spectrogram {showSpectrogram ? "ON" : "OFF"}
        </button>
        <button
          className={`btn${showStats ? " active" : ""}`}
          onClick={() => setShowStats((v) => !v)}
        >
          Stats {showStats ? "ON" : "OFF"}
        </button>
        <button
          className="btn btn-sessions"
          onClick={() => setView("sessions")}
        >
          Sessions
        </button>
        <button
          className={`btn btn-chat${showChat ? " active" : ""}`}
          onClick={() => setShowChat((v) => !v)}
        >
          Chat
        </button>
        <button
          className={`btn${showWebhooks ? " active" : ""}`}
          onClick={() => setShowWebhooks((v) => !v)}
        >
          Webhooks{webhooksEnabled && <span className="wh-active-dot" />}
        </button>
        <button
          className={`btn btn-lsl${lslRunning ? " active" : ""}`}
          onClick={toggleLSL}
          title="Lab Streaming Layer — stream EEG to external apps"
        >
          LSL {lslRunning ? "ON" : "OFF"}
        </button>
        <button
          className="btn btn-xr"
          onClick={() => setView("experiences")}
          title="Open immersive EEG experiences"
        >
          Mini Games
        </button>
        <button
          className={`btn${showDocs ? " active" : ""}`}
          onClick={() => setShowDocs((v) => !v)}
          title="Open documentation"
        >
          Docs
        </button>
        <button
          className={`btn${showRegisters ? " active" : ""}`}
          onClick={() => setShowRegisters((v) => !v)}
          title="ADS1299 register config & noise diagnostic"
        >
          Registers
        </button>
        <div className="sep" />
        <div className="control-group">
          <label>Guide</label>
          <select
            value={activePreset?.id ?? ""}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              const id = e.target.value;
              applyPreset(id ? GUIDED_PRESETS.find((p) => p.id === id) ?? null : null);
            }}
          >
            <option value="">— none —</option>
            {GUIDED_PRESETS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.icon} {p.name}
              </option>
            ))}
          </select>
        </div>
        <div className="sep" />
        <div className="control-group">
          <label>Low</label>
          <input
            type="number"
            value={lowcut}
            min={0.1}
            max={50}
            step={0.5}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setLowcut(e.target.value);
              updateFilter(e.target.value, highcut);
            }}
          />{" "}
          Hz
        </div>
        <div className="control-group">
          <label>High</label>
          <input
            type="number"
            value={highcut}
            min={1}
            max={125}
            step={1}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setHighcut(e.target.value);
              updateFilter(lowcut, e.target.value);
            }}
          />{" "}
          Hz
        </div>
        <div className="sep" />
        <div className="control-group">
          <label>Time window</label>
          <select
            value={timeWindow}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setTimeWindow(parseInt(e.target.value))}
          >
            {TIME_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div className="control-group">
          <label>Scale</label>
          <select
            value={yScale}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setYScale(parseInt(e.target.value))}
          >
            {SCALE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div className="sep" />
        <button
          className={`btn${spikeEnabled ? " active" : ""}`}
          onClick={() => {
            spikeUserAction.current = true;
            if (spikeEnabled) {
              lastSpikeThreshold.current = Math.max(1, Number(spikeThreshold));
              setSpikeThreshold(-1);
              eeg.sendCommand({ cmd: "spike_config", config: { threshold: -1 } });
            } else {
              const restore = lastSpikeThreshold.current;
              setSpikeThreshold(restore);
              eeg.sendCommand({ cmd: "spike_config", config: { threshold: restore } });
            }
          }}
        >
          Spike Filter: {spikeEnabled ? "ON" : "OFF"}
        </button>
        <div className="control-group">
          <label>Spike</label>
          <input
            type="number"
            value={spikeEnabled ? spikeThreshold : lastSpikeThreshold.current}
            min={1}
            max={100000}
            step={500}
            disabled={!spikeEnabled}
            style={{ width: "5.5em" }}
            title="Max allowed jump in raw ADC value between consecutive samples"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSpikeThreshold(e.target.value);
              const v = parseInt(e.target.value);
              if (v > 0) {
                lastSpikeThreshold.current = v;
                eeg.sendCommand({ cmd: "spike_config", config: { threshold: v } });
              }
            }}
          />
        </div>
        <div className="control-group">
          <label>Reset</label>
          <input
            type="number"
            value={spikeResetAfter}
            min={1}
            max={1000}
            step={5}
            disabled={!spikeEnabled}
            style={{ width: "4em" }}
            title="Re-sync baseline after this many consecutive rejected frames"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSpikeResetAfter(e.target.value);
              const v = parseInt(e.target.value);
              if (v > 0) eeg.sendCommand({ cmd: "spike_config", config: { reset_after: v } });
            }}
          />
        </div>
        {eeg.mock && (
          <button
            className="btn btn-inject-spike"
            onClick={() => eeg.sendCommand({ cmd: "inject_spike", count: 1 })}
            title="Inject a synthetic spike into the mock data stream (testing only)"
          >
            ⚡ Inject Spike
          </button>
        )}
      </div>

      {/* Channel selector */}
      <div className="channel-selector">
        <span className="cs-label">Channels</span>
        <button className="cs-toggle" onClick={() => setAllChannels(true)}>All</button>
        <button className="cs-toggle" onClick={() => setAllChannels(false)}>None</button>
        <div className="cs-grid">
          {Array.from({ length: numCh }, (_, i) => (
            <button
              key={i}
              className={`cs-ch${activeChannels.has(i) ? " on" : ""}`}
              onClick={() => toggleChannel(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <span className="cs-count">{activeChannels.size}/{numCh}</span>
      </div>

      {/* Guided preset step banner */}
      {activePreset && (
        <div className="preset-banner">
          <div className="preset-banner-head">
            <span className="preset-banner-icon">{activePreset.icon}</span>
            <strong>{activePreset.name}</strong>
            <span className="preset-banner-step">
              Step {presetStep + 1} / {activePreset.steps.length}
            </span>
          </div>
          <p className="preset-banner-text">{activePreset.steps[presetStep]}</p>
          <div className="preset-banner-actions">
            <button
              className="btn"
              disabled={presetStep === 0}
              onClick={() => setPresetStep((s) => s - 1)}
            >
              ← Back
            </button>
            {presetStep < activePreset.steps.length - 1 ? (
              <button
                className="btn active"
                onClick={() => setPresetStep((s) => s + 1)}
              >
                Next →
              </button>
            ) : (
              <button
                className="btn"
                onClick={() => applyPreset(null)}
              >
                Done ✓
              </button>
            )}
            <button
              className="btn preset-dismiss"
              onClick={() => applyPreset(null)}
            >
              Exit guide
            </button>
          </div>
        </div>
      )}

      {/* Main area */}
      <ErrorBoundary>
        <div className={`main-area${showFFT ? " with-fft" : ""}${showSpectrogram || showStats || filterEnabled ? " with-analysis" : ""}`}>
        {expandedCh !== null && activeChannels.has(expandedCh) && (
          <ChannelDetailPanel
            chIdx={expandedCh}
            eegData={eeg.data}
            yRange={yScale}
            onClose={() => setExpandedCh(null)}
          />
        )}
        <div className="grid">
          {Array.from({ length: numCh }, (_, i) => (
            <ChannelCanvas
              key={i}
              chIdx={i}
              eegData={eeg.data}
              yRange={yScale}
              active={activeChannels.has(i)}
              onToggleExpand={() => toggleExpandCh(i)}
            />
          ))}
        </div>
        {showFFT && (
          <div className="fft-area">
            <SpectralPanel eegData={eeg.data} />
            <TopoMap eegData={eeg.data} />
          </div>
        )}
        {filterEnabled && (
          <FilterPreview
            enabled={filterEnabled}
            lowcut={parseFloat(String(lowcut)) || 1}
            highcut={parseFloat(String(highcut)) || 40}
          />
        )}
        {(showSpectrogram || showStats) && (
          <div className="analysis-area">
            {showSpectrogram && <Spectrogram eegData={eeg.data} />}
            {showStats && <StatsPanel eegData={eeg.data} />}
          </div>
        )}
        </div>
      </ErrorBoundary>

      {/* Recording result modal */}
      {eeg.recordResult && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h2>Recording Complete</h2>
            <div className="modal-details">
              <div className="modal-row">
                <span className="modal-label">File</span>
                <span className="modal-value">{eeg.recordResult.filename}</span>
              </div>
              <div className="modal-row">
                <span className="modal-label">Duration</span>
                <span className="modal-value">{formatElapsed(eeg.recordResult.duration)}</span>
              </div>
              <div className="modal-row">
                <span className="modal-label">Frames</span>
                <span className="modal-value">{eeg.recordResult.frames.toLocaleString()}</span>
              </div>
              <div className="modal-row">
                <span className="modal-label">Saved to</span>
                <span className="modal-value modal-path">{eeg.recordResult.path}</span>
              </div>
            </div>
            <div className="modal-actions">
              <a
                className="btn modal-btn-download"
                href={eeg.recordResult.downloadUrl}
                download
              >
                Download CSV
              </a>
              <button
                className="btn modal-btn-view"
                onClick={() => {
                  const fn = eeg.recordResult!.filename;
                  eeg.dismissRecordResult();
                  setSelectedSession(fn);
                  setView("playback");
                }}
              >
                View Session
              </button>
              <button
                className="btn modal-btn-dismiss"
                onClick={eeg.dismissRecordResult}
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}



      {/* Performance Monitor (press P to toggle) */}
      <PerformanceMonitor />

      {/* Chat side panel */}
      <ChatPanel eegData={eeg.data} open={showChat} onClose={() => setShowChat(false)} />

      {/* Webhooks side panel */}
      <WebhookPanel
        open={showWebhooks}
        onClose={() => setShowWebhooks(false)}
        numChannels={numCh}
        webhooks={webhooks}
        webhooksEnabled={webhooksEnabled}
        onToggleEnabled={toggleWebhooksEnabled}
      />

      {/* Register / Noise diagnostic panel */}
      <RegisterPanel
        open={showRegisters}
        onClose={() => setShowRegisters(false)}
        numChannels={numCh}
        sendCommand={eeg.sendCommand}
      />

      {/* Keyboard shortcut help (press ? to toggle) */}
      <ShortcutHelp />

      {/* Docs iframe panel */}
      <div className={`docs-panel${showDocs ? " open" : ""}`}>
        <div className="docs-header">
          <strong>Documentation</strong>
          <button className="docs-close" onClick={() => setShowDocs(false)}>✕</button>
        </div>
        {showDocs && (
          <iframe
            className="docs-iframe"
            src="https://pieeg-server-doc.vercel.app/"
            title="PiEEG Documentation"
          />
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <span style={{ fontFamily: "var(--mono)", letterSpacing: "-0.01em" }}>PiEEG {numCh}ch</span>
        <span className="kbd-hints">
          <kbd>Space</kbd> Pause
          <kbd>R</kbd> Record
          <kbd>F</kbd> FFT
          <kbd>G</kbd> Gram
          <kbd>S</kbd> Stats
          <kbd>V</kbd> Exp
          <kbd>C</kbd> Chat
          <kbd>W</kbd> Hooks
          <kbd>N</kbd> Regs
          <kbd>D</kbd> Docs
          <kbd>Esc</kbd> Close
          <kbd>P</kbd> Perf
        </span>
        <span>Not a medical device</span>
      </footer>
    </AuthGate>
  );
}
