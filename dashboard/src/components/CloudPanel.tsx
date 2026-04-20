import { useState, useCallback } from "react";
import type { UseCloudReturn } from "../hooks/useCloud";
import { RELAY_MAX_MINUTES } from "../hooks/useCloud";
import CloudTerms, { hasAcceptedTerms } from "./CloudTerms";

interface Props {
  open: boolean;
  onClose: () => void;
  cloud: UseCloudReturn;
}

export default function CloudPanel({ open, onClose, cloud }: Props) {
  const [otp, setOtp] = useState("");
  const [tosAccepted, setTosAccepted] = useState(hasAcceptedTerms);
  const [copied, setCopied] = useState(false);

  const handleTosAccept = useCallback(() => setTosAccepted(true), []);

  const copyLink = useCallback(() => {
    const link = cloud.shareLink;
    if (!link) return;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [cloud.shareLink]);

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
          {(cloud.authStep === "idle" || cloud.authStep === "sending") && (
            <>
              <p className="cloud-intro">
                Sign in to PiEEG Cloud to stream live EEG to anyone,
                anywhere.
              </p>
              <label className="cloud-label">Email</label>
              <input
                className="cloud-input"
                type="email"
                placeholder="you@example.com"
                value={cloud.email}
                onChange={(e) => cloud.setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && cloud.authStep !== "sending" && cloud.sendOtp()}
                disabled={cloud.authStep === "sending"}
              />
              <button
                className="btn cloud-btn"
                onClick={cloud.sendOtp}
                disabled={cloud.authStep === "sending"}
              >
                {cloud.authStep === "sending" ? (
                  <><span className="spinner" /> Sending…</>
                ) : (
                  "Send Login Code"
                )}
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

          {/* ── Relay ────────────────────────────────────────────── */}
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

                  <div className="cloud-relay-timer">
                    <span className="cloud-relay-elapsed">
                      {Math.floor(cloud.relayElapsed / 60).toString().padStart(2, "0")}:
                      {(cloud.relayElapsed % 60).toString().padStart(2, "0")}
                    </span>
                    <span className="cloud-relay-limit"> / {RELAY_MAX_MINUTES}:00</span>
                    {cloud.relayElapsed >= (RELAY_MAX_MINUTES - 5) * 60 && (
                      <span className="cloud-relay-warning"> — stopping soon</span>
                    )}
                  </div>

                  {/* ── Share card ── */}
                  {cloud.shareLink && (
                    <div className="cloud-share-card">
                      <div className="cloud-share-card-header">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                        </svg>
                        <span>Share this session</span>
                      </div>

                      <p className="cloud-share-desc">
                        Anyone with this link can watch your live EEG, chat, and
                        join voice — no account needed.
                      </p>

                      <div className="cloud-share-url-row">
                        <input
                          className="cloud-share-url"
                          readOnly
                          value={cloud.shareLink}
                          onFocus={(e) => e.target.select()}
                        />
                        <button
                          className={`cloud-share-copy${copied ? " copied" : ""}`}
                          onClick={copyLink}
                        >
                          {copied ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                            </svg>
                          )}
                          {copied ? "Copied!" : "Copy"}
                        </button>
                      </div>

                      <div className="cloud-share-actions">
                        <a
                          className="cloud-share-action"
                          href={cloud.shareLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                          Open viewer
                        </a>
                        <button
                          className="cloud-share-action"
                          onClick={() => {
                            const text = `Watch my live EEG session: ${cloud.shareLink}`;
                            if (navigator.share) {
                              navigator.share({ title: "PiEEG Live", url: cloud.shareLink! }).catch(() => {});
                            } else {
                              navigator.clipboard.writeText(text);
                              setCopied(true);
                              setTimeout(() => setCopied(false), 2000);
                            }
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                            <polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
                          </svg>
                          Share
                        </button>
                      </div>

                      <div className="cloud-share-features">
                        <span className="cloud-share-feat">
                          <span className="cloud-share-feat-dot" style={{ background: "#3fb950" }} />
                          Live EEG
                        </span>
                        <span className="cloud-share-feat">
                          <span className="cloud-share-feat-dot" style={{ background: "#58a6ff" }} />
                          Chat
                        </span>
                        <span className="cloud-share-feat">
                          <span className="cloud-share-feat-dot" style={{ background: "#bc8cff" }} />
                          Voice
                        </span>
                      </div>
                    </div>
                  )}

                  <button
                    className="btn cloud-btn-stop"
                    onClick={cloud.stopRelay}
                    disabled={cloud.relayStopping}
                  >
                    {cloud.relayStopping ? "Stopping…" : "Stop Relay"}
                  </button>
                </>
              ) : (
                <>
                  <div className="cloud-relay-guide">
                    <div className="cloud-relay-hero">
                      <div className="cloud-relay-hero-icon">📡</div>
                      <h3>Go Live</h3>
                      <p>Stream your brain activity to anyone, anywhere.</p>
                    </div>

                    <div className="cloud-relay-features">
                      <div className="cloud-relay-feature">
                        <span className="cloud-relay-feature-icon">🧠</span>
                        <div>
                          <strong>Real-time EEG</strong>
                          <span>Live waveforms, FFT, and spectral analysis</span>
                        </div>
                      </div>
                      <div className="cloud-relay-feature">
                        <span className="cloud-relay-feature-icon">💬</span>
                        <div>
                          <strong>Live Chat</strong>
                          <span>Viewers can discuss in real-time</span>
                        </div>
                      </div>
                      <div className="cloud-relay-feature">
                        <span className="cloud-relay-feature-icon">🎤</span>
                        <div>
                          <strong>Voice Chat</strong>
                          <span>Talk with viewers, Figma-style</span>
                        </div>
                      </div>
                      <div className="cloud-relay-feature">
                        <span className="cloud-relay-feature-icon">🔒</span>
                        <div>
                          <strong>Private & Secure</strong>
                          <span>Only people with the link can join. No data stored.</span>
                        </div>
                      </div>
                    </div>

                    <p className="cloud-hint">
                      Auto-stops after {RELAY_MAX_MINUTES} minutes. Data is streamed
                      in transit only — nothing is recorded.
                    </p>
                  </div>

                  {cloud.relayStatus.error && (
                    <p className="cloud-error">{cloud.relayStatus.error}</p>
                  )}
                  <button
                    className="btn cloud-btn cloud-btn-go-live"
                    onClick={cloud.startRelay}
                    disabled={cloud.relayLoading}
                  >
                    {cloud.relayLoading ? (
                      <><span className="spinner" /> Starting…</>
                    ) : (
                      <>
                        <span className="cloud-go-live-dot" />
                        Go Live
                      </>
                    )}
                  </button>
                </>
              )}
            </div>
        </>
      )}
    </div>
  );
}
