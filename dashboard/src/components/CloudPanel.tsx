import { useState, useCallback } from "react";
import type { UseCloudReturn } from "../hooks/useCloud";
import CloudTerms, { hasAcceptedTerms } from "./CloudTerms";

interface Props {
  open: boolean;
  onClose: () => void;
  cloud: UseCloudReturn;
}

export default function CloudPanel({ open, onClose, cloud }: Props) {
  const [otp, setOtp] = useState("");
  const [tab, setTab] = useState<"relay" | "sessions">("relay");
  const [tosAccepted, setTosAccepted] = useState(hasAcceptedTerms);

  const handleTosAccept = useCallback(() => setTosAccepted(true), []);

  if (!open) return null;

  return (
    <div className="cloud-panel side-panel">
      <div className="panel-header">
        <h2>Cloud</h2>
        <button className="btn-close" onClick={onClose}>×</button>
      </div>

      {/* ── Terms of Service gate ────────────────────────────────────── */}
      {!tosAccepted ? (
        <CloudTerms onAccept={handleTosAccept} />
      ) : !cloud.loggedIn ? (
        <div className="cloud-auth">
          {cloud.authStep === "idle" && (
            <>
              <p className="cloud-intro">
                Sign in to PiEEG Cloud to stream live EEG, upload recordings,
                and manage sessions from anywhere.
              </p>
              <label className="cloud-label">Email</label>
              <input
                className="cloud-input"
                type="email"
                placeholder="you@example.com"
                value={cloud.email}
                onChange={(e) => cloud.setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && cloud.sendOtp()}
              />
              <button className="btn cloud-btn" onClick={cloud.sendOtp}>
                Send Login Code
              </button>
            </>
          )}

          {(cloud.authStep === "otp_sent" || cloud.authStep === "verifying") && (
            <>
              <p className="cloud-intro">
                A 6-digit code was sent to <strong>{cloud.email}</strong>
              </p>
              <label className="cloud-label">Code</label>
              <input
                className="cloud-input"
                type="text"
                placeholder="123456"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                onKeyDown={(e) => e.key === "Enter" && cloud.verifyOtp(otp)}
                autoFocus
              />
              <button
                className="btn cloud-btn"
                onClick={() => cloud.verifyOtp(otp)}
                disabled={cloud.authStep === "verifying"}
              >
                {cloud.authStep === "verifying" ? "Verifying…" : "Verify"}
              </button>
              <button
                className="btn cloud-btn-secondary"
                onClick={() => { setOtp(""); cloud.sendOtp(); }}
              >
                Resend Code
              </button>
            </>
          )}

          {cloud.authError && (
            <p className="cloud-error">{cloud.authError}</p>
          )}
        </div>
      ) : (
        <>
          {/* ── Logged-in header ──────────────────────────────────────── */}
          <div className="cloud-user-row">
            <span className="cloud-user-email">{cloud.email}</span>
            <button className="btn cloud-btn-secondary" onClick={cloud.logout}>
              Log Out
            </button>
          </div>

          {/* ── Tabs ─────────────────────────────────────────────────── */}
          <div className="cloud-tabs">
            <button
              className={`cloud-tab${tab === "relay" ? " active" : ""}`}
              onClick={() => setTab("relay")}
            >
              Live Relay
            </button>
            <button
              className={`cloud-tab${tab === "sessions" ? " active" : ""}`}
              onClick={() => setTab("sessions")}
            >
              Sessions ({cloud.sessions.length})
            </button>
          </div>

          {/* ── Relay tab ────────────────────────────────────────────── */}
          {tab === "relay" && (
            <div className="cloud-relay">
              {cloud.relayStatus.running ? (
                <>
                  <div className="cloud-relay-live">
                    <span className="cloud-dot cloud-dot-on" />
                    <span>Streaming</span>
                    <span className="cloud-relay-count">
                      {cloud.relayStatus.send_count?.toLocaleString() ?? 0} frames
                    </span>
                  </div>
                  {cloud.relayShareUrl && (
                    <div className="cloud-share">
                      <label className="cloud-label">Share URL</label>
                      <input
                        className="cloud-input"
                        readOnly
                        value={cloud.relayShareUrl}
                        onFocus={(e) => e.target.select()}
                      />
                      <button
                        className="btn cloud-btn-secondary"
                        onClick={() => navigator.clipboard.writeText(cloud.relayShareUrl!)}
                      >
                        Copy
                      </button>
                      <p className="cloud-hint" style={{ marginTop: 8 }}>
                        Send this link to anyone — they can open it in their browser
                        to watch your brainwaves live from anywhere on the internet.
                        No login required for viewers.
                      </p>
                    </div>
                  )}
                  <button className="btn cloud-btn-stop" onClick={cloud.stopRelay}>
                    Stop Relay
                  </button>
                </>
              ) : (
                <>
                  <div className="cloud-relay-guide">
                    <p className="cloud-hint"><strong>How it works</strong></p>
                    <ol className="cloud-relay-steps">
                      <li>Click <strong>Start Live Relay</strong> below</li>
                      <li>Copy the <strong>Share URL</strong> that appears</li>
                      <li>Send it to anyone (friend, colleague, chat, etc.)</li>
                      <li>They open the link in any browser — no account needed</li>
                      <li>They see your live EEG stream in real-time</li>
                    </ol>
                    <p className="cloud-hint">
                      Your data is streamed in transit only — nothing is recorded
                      on the server. The relay stops automatically after 30 minutes.
                    </p>
                  </div>

                  {cloud.relayStatus.error && (
                    <p className="cloud-error">{cloud.relayStatus.error}</p>
                  )}
                  <button
                    className="btn cloud-btn"
                    onClick={cloud.startRelay}
                    disabled={cloud.relayLoading}
                  >
                    {cloud.relayLoading ? "Starting…" : "Start Live Relay"}
                  </button>
                </>
              )}
            </div>
          )}

          {/* ── Sessions tab ─────────────────────────────────────────── */}
          {tab === "sessions" && (
            <div className="cloud-sessions">
              <div className="cloud-sessions-header">
                <button
                  className="btn cloud-btn-secondary"
                  onClick={cloud.refreshSessions}
                  disabled={cloud.sessionsLoading}
                >
                  {cloud.sessionsLoading ? "Loading…" : "Refresh"}
                </button>
              </div>

              {cloud.sessions.length === 0 ? (
                <p className="cloud-hint">No sessions yet. Record some EEG and upload!</p>
              ) : (
                <ul className="cloud-session-list">
                  {cloud.sessions.map((s) => (
                    <li key={s.id} className="cloud-session-item">
                      <div className="cloud-session-info">
                        <span className="cloud-session-label">{s.label}</span>
                        <span className="cloud-session-meta">
                          {s.channels}ch · {s.sampleRate}Hz
                          {s.duration ? ` · ${Math.round(s.duration)}s` : ""}
                          {" · "}
                          {new Date(s.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="cloud-session-actions">
                        <button
                          className="btn btn-sm cloud-btn-secondary"
                          onClick={() => cloud.downloadSession(s.id)}
                          title="Download CSV"
                        >
                          ↓
                        </button>
                        <button
                          className="btn btn-sm cloud-btn-delete"
                          onClick={() => {
                            if (confirm(`Delete "${s.label}"?`)) cloud.deleteSession(s.id);
                          }}
                          title="Delete session"
                        >
                          ✕
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
