import { useState } from "react";
import { useEEG } from "./hooks/useEEG";
import AuthGate from "./components/AuthGate";
import ChannelCanvas from "./components/ChannelCanvas";

const NUM_CHANNELS = 16;

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
  const [paused, setPaused] = useState(false);
  const [filterEnabled, setFilterEnabled] = useState(false);
  const [lowcut, setLowcut] = useState(1);
  const [highcut, setHighcut] = useState(40);
  const [timeWindow, setTimeWindow] = useState(4);
  const [yScale, setYScale] = useState(100);

  const eeg = useEEG(timeWindow);

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

  function updateFilter(low, high) {
    if (!filterEnabled) return;
    eeg.sendCommand({
      cmd: "set_filter",
      enabled: true,
      lowcut: parseFloat(low) || 1,
      highcut: parseFloat(high) || 40,
    });
  }

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
          className={`btn${filterEnabled ? " active" : ""}`}
          onClick={toggleFilter}
        >
          Filter: {filterEnabled ? "ON" : "OFF"}
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

      {/* Channel grid */}
      <div className="grid">
        {Array.from({ length: NUM_CHANNELS }, (_, i) => (
          <ChannelCanvas key={i} chIdx={i} eeg={eeg} yRange={yScale} />
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <span>PiEEG-16-server · React Dashboard</span>
        <span>Battery powered only · Not a medical device</span>
      </footer>
    </AuthGate>
  );
}
