import { useState, useEffect, useCallback, useRef } from "react";
import { useEEG } from "./hooks/useEEG";
import AuthGate from "./components/AuthGate";
import ChannelCanvas from "./components/ChannelCanvas";
import SpectralPanel from "./components/SpectralPanel";
import PerformanceMonitor from "./components/PerformanceMonitor";
import SessionList from "./components/SessionList";
import SessionViewer from "./components/SessionViewer";
import XRWaveView from "./components/XRWaveView";

const NUM_CHANNELS = 16;
const ALL_CHANNELS = new Set(Array.from({ length: NUM_CHANNELS }, (_, i) => i));
const DEFAULT_MOBILE = new Set([0, 1, 2, 3]);

const SCALE_OPTIONS = [
  { value: 50, label: "±50 µV" },
  { value: 100, label: "±100 µV" },
  { value: 200, label: "±200 µV" },
  { value: 500, label: "±500 µV" },
];

const TIME_OPTIONS = [
  { value: 2, label: "2s" },
  { value: 4, label: "4s" },
  { value: 8, label: "8s" },
  { value: 16, label: "16s" },
];

export default function App() {
  const [view, setView] = useState("live"); // "live" | "sessions" | "playback"
  const [selectedSession, setSelectedSession] = useState(null);
  const [paused, setPaused] = useState(false);
  const [showFFT, setShowFFT] = useState(true);
  const [filterEnabled, setFilterEnabled] = useState(false);
  const [lowcut, setLowcut] = useState(1);
  const [highcut, setHighcut] = useState(40);
  const [timeWindow, setTimeWindow] = useState(4);
  const [yScale, setYScale] = useState(100);
  const [expandedCh, setExpandedCh] = useState(null);
  const [xrActive, setXrActive] = useState(false);
  const [activeChannels, setActiveChannels] = useState(() =>
    window.innerWidth < 768 ? new Set(DEFAULT_MOBILE) : new Set(ALL_CHANNELS)
  );

  const eeg = useEEG(timeWindow);

  // Keep active channels in a ref so toggleExpandCh stays stable
  const activeChRef = useRef(activeChannels);
  activeChRef.current = activeChannels;

  const toggleChannel = useCallback((i) => {
    setActiveChannels((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }, []);

  const setAllChannels = useCallback((on) => {
    setActiveChannels(on ? new Set(ALL_CHANNELS) : new Set());
  }, []);

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
      lowcut: parseFloat(lowcut) || 1,
      highcut: parseFloat(highcut) || 40,
    });
  }

  function toggleRecord() {
    eeg.sendCommand({ cmd: eeg.recording ? "stop_record" : "start_record" });
  }

  function formatElapsed(sec) {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function updateFilter(low, high) {
    if (!filterEnabled) return;
    eeg.sendCommand({
      cmd: "set_filter",
      enabled: true,
      lowcut: parseFloat(low) || 1,
      highcut: parseFloat(high) || 40,
    });
  }

  const toggleExpandCh = useCallback((i) => {
    // Only expand active channels; toggle inactive ones on
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
    function onKey(e) {
      // Skip when user is typing in an input/select/textarea
      if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT" || e.target.tagName === "TEXTAREA") return;
      // Only handle shortcuts in live view
      if (view !== "live") {
        if (e.code === "Escape") {
          if (view === "playback") { setView("sessions"); setSelectedSession(null); }
          else if (view === "sessions") setView("live");
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
          setXrActive((v) => !v);
          break;
        case "Escape":
          if (xrActive) setXrActive(false);
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
        <SessionViewer
          filename={selectedSession}
          onBack={() => { setView("sessions"); setSelectedSession(null); }}
        />
      </AuthGate>
    );
  }

  if (view === "sessions") {
    return (
      <AuthGate>
        <SessionList
          onSelect={(filename) => { setSelectedSession(filename); setView("playback"); }}
          onBack={() => setView("live")}
        />
      </AuthGate>
    );
  }

  // Suspend grid RAF loops while expanded overlay covers them
  eeg.data.gridSuspended = expandedCh !== null && activeChannels.has(expandedCh);

  return (
    <AuthGate>
      {/* Header */}
      <header className="header">
        <h1>
          Pi<span>EEG</span>-16{" "}
          <small style={{ fontWeight: 400, color: "var(--text-dim)" }}>
            Dashboard
          </small>
        </h1>
        <div className="status-bar">
          <span>
            <span
              className={`status-dot${eeg.connected ? " connected" : ""}`}
            />
            {eeg.connected ? " Connected" : " Disconnected"}
          </span>
          <span className={`live-badge${paused ? " paused" : ""}`}>
            {paused ? "⏸ PAUSED" : "● LIVE"}
          </span>
          <span>{eeg.hz ? `${eeg.hz} Hz` : "— Hz"}</span>
          <span>{eeg.sampleCount.toLocaleString()} samples</span>
        </div>
      </header>

      {/* Controls */}
      <div className="controls">
        <button
          className={`btn${paused ? " active" : ""}`}
          onClick={togglePause}
        >
          {paused ? "▶ Resume" : "⏸ Pause"}
        </button>
        <button
          className={`btn btn-record${eeg.recording ? " recording" : ""}`}
          onClick={toggleRecord}
        >
          <span className="rec-dot" />
          {eeg.recording
            ? `⏹ Stop ${formatElapsed(eeg.recordElapsed)}`
            : "⏺ Record"}
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
          className="btn btn-sessions"
          onClick={() => setView("sessions")}
        >
          Sessions
        </button>
        <button
          className="btn btn-xr"
          onClick={() => setXrActive(true)}
          title="Open EEG waves in immersive 3D / VR"
        >
          🥽 XR View
        </button>
        <div className="sep" />
        <div className="control-group">
          <label>Low</label>
          <input
            type="number"
            value={lowcut}
            min={0.1}
            max={50}
            step={0.5}
            onChange={(e) => {
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
            onChange={(e) => {
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
            onChange={(e) => setTimeWindow(parseInt(e.target.value))}
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
            onChange={(e) => setYScale(parseInt(e.target.value))}
          >
            {SCALE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Channel selector */}
      <div className="channel-selector">
        <span className="cs-label">Channels</span>
        <button className="cs-toggle" onClick={() => setAllChannels(true)}>All</button>
        <button className="cs-toggle" onClick={() => setAllChannels(false)}>None</button>
        <div className="cs-grid">
          {Array.from({ length: NUM_CHANNELS }, (_, i) => (
            <button
              key={i}
              className={`cs-ch${activeChannels.has(i) ? " on" : ""}`}
              onClick={() => toggleChannel(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <span className="cs-count">{activeChannels.size}/{NUM_CHANNELS}</span>
      </div>

      {/* Main area */}
      <div className={`main-area${showFFT ? " with-fft" : ""}`}>
        {expandedCh !== null && activeChannels.has(expandedCh) && (
          <div className="expanded-overlay" onClick={() => setExpandedCh(null)}>
            <div className="expanded-channel" onClick={(e) => e.stopPropagation()}>
              <ChannelCanvas
                chIdx={expandedCh}
                eegData={eeg.data}
                yRange={yScale}
                expanded
                active
                onToggleExpand={() => setExpandedCh(null)}
              />
            </div>
          </div>
        )}
        <div className="grid">
          {Array.from({ length: NUM_CHANNELS }, (_, i) => (
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
        {showFFT && <SpectralPanel eegData={eeg.data} />}
      </div>

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
                  const fn = eeg.recordResult.filename;
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

      {/* XR immersive view */}
      {xrActive && (
        <XRWaveView eegData={eeg.data} yScale={yScale} onExit={() => setXrActive(false)} />
      )}

      {/* Performance Monitor (press P to toggle) */}
      <PerformanceMonitor />

      {/* Footer */}
      <footer className="footer">
        <span>PiEEG-16-server · React Dashboard</span>
        <span className="kbd-hints">
          <kbd>Space</kbd> Pause&ensp;
          <kbd>R</kbd> Record&ensp;
          <kbd>F</kbd> FFT&ensp;
          <kbd>V</kbd> XR&ensp;
          <kbd>Esc</kbd> Close&ensp;
          <kbd>P</kbd> Perf
        </span>
        <span>Battery powered only · Not a medical device</span>
      </footer>
    </AuthGate>
  );
}
