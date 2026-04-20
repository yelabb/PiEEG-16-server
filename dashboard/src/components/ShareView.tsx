/**
 * ShareView — live EEG viewer for a shared relay session.
 * Opened via /live/{relayId}. Streaming-focused: channels + FFT + viewer count.
 */

import { useRelayViewer } from "../hooks/useRelayViewer";
import { useTheme } from "../hooks/useTheme";
import ChannelCanvas from "./ChannelCanvas";
import SpectralPanel from "./SpectralPanel";
import TopoMap from "./TopoMap";
import ErrorBoundary from "./ErrorBoundary";

export default function ShareView({ relayId }: { relayId: string }) {
  const relay = useRelayViewer(relayId);
  const { theme, toggle: toggleTheme } = useTheme();

  // ── Session ended ──
  if (relay.ended && !relay.connected) {
    return (
      <div className="sv-fullscreen">
        <div className="sv-card">
          <div style={{ fontSize: 36, marginBottom: 8 }}>📡</div>
          <h2>Session Ended</h2>
          <p style={{ color: "var(--text-dim)", fontSize: 13, lineHeight: 1.5, margin: "0 0 20px" }}>
            This live EEG session is no longer active.
          </p>
          <a className="btn" href="/" style={{ textDecoration: "none" }}>
            Go to Dashboard
          </a>
        </div>
      </div>
    );
  }

  // ── Connecting ──
  if (!relay.connected) {
    return (
      <div className="sv-fullscreen">
        <div className="sv-card">
          <div className="spinner" style={{ width: 32, height: 32, borderWidth: 3, margin: "0 auto 12px" }} />
          <h2>Connecting to live session…</h2>
          <p style={{ color: "var(--text-dim)", fontSize: 11, fontFamily: "var(--mono)", wordBreak: "break-all" }}>
            {relayId}
          </p>
        </div>
      </div>
    );
  }

  const numCh = relay.numChannels;
  const viewerCount = relay.viewers.length;

  return (
    <div className="sv-root">
      {/* ── Header ── */}
      <header className="header">
        <h1>
          <span className="status-dot connected" />
          Pi<span>EEG</span>
          <small>Live</small>
        </h1>
        <div className="status-bar">
          <span className="live-badge">LIVE</span>
          <span style={{ fontFamily: "var(--mono)" }}>{numCh}ch</span>
          {relay.hz > 0 && (
            <span style={{ fontFamily: "var(--mono)" }}>{relay.hz} Hz</span>
          )}
          <span style={{ fontFamily: "var(--mono)" }}>
            {relay.sampleCount.toLocaleString()} samples
          </span>

          {/* Viewer count */}
          <span className="sv-viewer-count" title={`${viewerCount} viewer${viewerCount !== 1 ? "s" : ""} watching`}>
            👁 {viewerCount}
          </span>

          <button className="theme-toggle" onClick={toggleTheme} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </div>
      </header>

      {/* ── EEG content ── */}
      <div className="app-body">
        <div className="app-content">
          <ErrorBoundary>
            <div className="main-area with-fft">
              <div className="grid">
                {Array.from({ length: numCh }, (_, i) => (
                  <ChannelCanvas
                    key={i}
                    chIdx={i}
                    eegData={relay.data}
                    yRange={200}
                    active
                    onToggleExpand={() => {}}
                  />
                ))}
              </div>
              <div className="fft-area">
                <SpectralPanel eegData={relay.data} />
                <TopoMap eegData={relay.data} />
              </div>
            </div>
          </ErrorBoundary>
        </div>
      </div>
    </div>
  );
}
