/**
 * ShareView — immersive viewer experience for a shared live EEG relay.
 *
 * Opened via /live/{relayId}. Provides:
 *  - Live EEG channel visualization
 *  - FFT / spectral panel
 *  - Viewer presence bar (coloured dots)
 *  - Live chat sidebar
 *  - WebRTC voice chat
 */

import { useState, useRef, useEffect, useCallback, memo } from "react";
import { useRelayViewer } from "../hooks/useRelayViewer";
import { useVoiceChat } from "../hooks/useVoiceChat";
import { useTheme } from "../hooks/useTheme";
import ChannelCanvas from "./ChannelCanvas";
import SpectralPanel from "./SpectralPanel";
import TopoMap from "./TopoMap";
import ErrorBoundary from "./ErrorBoundary";
import type { ChatMessage } from "../types";

declare const __APP_VERSION__: string;

/* ── Chat Message ────────────────────────────────────────────────────── */

const ChatBubble = memo(function ChatBubble({
  msg,
  isOwn,
}: {
  msg: ChatMessage;
  isOwn: boolean;
}) {
  const time = new Date(msg.ts);
  const hhmm = `${time.getHours().toString().padStart(2, "0")}:${time.getMinutes().toString().padStart(2, "0")}`;
  return (
    <div className={`sv-msg${isOwn ? " sv-msg--own" : ""}`}>
      <span className="sv-msg-dot" style={{ background: msg.from.color }} />
      <div className="sv-msg-body">
        <span className="sv-msg-name" style={{ color: msg.from.color }}>
          {msg.from.name || "Anonymous"}
        </span>
        <span className="sv-msg-text">{msg.text}</span>
      </div>
      <span className="sv-msg-time">{hhmm}</span>
    </div>
  );
});

/* ── Main ShareView ──────────────────────────────────────────────────── */

export default function ShareView({ relayId }: { relayId: string }) {
  const relay = useRelayViewer(relayId);
  const voice = useVoiceChat(
    relay.viewerId,
    relay.viewers,
    relay.sendSignal,
    relay.onSignal,
  );
  const { theme, toggle: toggleTheme } = useTheme();

  const [chatOpen, setChatOpen] = useState(true);
  const [chatInput, setChatInput] = useState("");
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(relay.viewerName);
  const chatBottomRef = useRef<HTMLDivElement>(null);
  const chatInputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll chat
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [relay.messages.length]);

  // Focus chat input when opened
  useEffect(() => {
    if (chatOpen) setTimeout(() => chatInputRef.current?.focus(), 150);
  }, [chatOpen]);

  const handleSendChat = useCallback(() => {
    if (!chatInput.trim()) return;
    relay.sendChat(chatInput);
    setChatInput("");
  }, [chatInput, relay.sendChat]);

  const handleNameSave = useCallback(() => {
    relay.setViewerName(nameInput);
    setEditingName(false);
  }, [nameInput, relay.setViewerName]);

  // ── Session ended state ──
  if (relay.ended && !relay.connected) {
    return (
      <div className="sv-ended">
        <div className="sv-ended-card">
          <div className="sv-ended-icon">📡</div>
          <h1>Session Ended</h1>
          <p>This live EEG session is no longer active.</p>
          <a className="sv-ended-btn" href="/">
            Go to Dashboard
          </a>
        </div>
      </div>
    );
  }

  // ── Connecting state ──
  if (!relay.connected) {
    return (
      <div className="sv-connecting">
        <div className="sv-connecting-card">
          <div className="sv-spinner" />
          <h2>Connecting to live session…</h2>
          <p className="sv-connecting-id">{relayId}</p>
        </div>
      </div>
    );
  }

  const numCh = relay.numChannels;

  return (
    <div className="sv">
      {/* ── Header ── */}
      <header className="sv-header">
        <div className="sv-header-left">
          <span className="sv-live-dot" />
          <h1 className="sv-title">
            Pi<span>EEG</span> Live
          </h1>
          <span className="sv-badge">{numCh}ch</span>
          {relay.hz > 0 && (
            <span className="sv-badge sv-badge--dim">{relay.hz} Hz</span>
          )}
          <span className="sv-badge sv-badge--dim">
            {relay.sampleCount.toLocaleString()} samples
          </span>
        </div>

        <div className="sv-header-right">
          {/* Presence dots */}
          <div className="sv-presence">
            {relay.viewers.map((v) => (
              <div
                key={v.id}
                className={`sv-viewer-dot${voice.activeSpeakers.includes(v.id) ? " speaking" : ""}`}
                style={{ background: v.color }}
                title={v.name || "Anonymous"}
              >
                <span className="sv-viewer-initial">
                  {(v.name || "A")[0].toUpperCase()}
                </span>
              </div>
            ))}
            <span className="sv-viewer-count">
              {relay.viewers.length} viewer{relay.viewers.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Voice */}
          {voice.supported && (
            <button
              className={`sv-icon-btn${voice.speaking ? " sv-icon-btn--active" : ""}`}
              onClick={voice.toggleMic}
              title={voice.speaking ? "Mute" : "Unmute"}
            >
              {voice.speaking ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="1" y1="1" x2="23" y2="23"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/>
                  <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2c0 .76-.13 1.48-.35 2.17"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>
                </svg>
              )}
            </button>
          )}

          {/* Chat toggle */}
          <button
            className={`sv-icon-btn${chatOpen ? " sv-icon-btn--active" : ""}`}
            onClick={() => setChatOpen((v) => !v)}
            title="Toggle chat"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </button>

          <button className="theme-toggle" onClick={toggleTheme} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </div>
      </header>

      {/* ── Body: EEG + Chat ── */}
      <div className="sv-body">
        {/* ── EEG Content ── */}
        <div className={`sv-eeg${chatOpen ? " sv-eeg--with-chat" : ""}`}>
          <ErrorBoundary>
            <div className="sv-channels">
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
            <div className="sv-analysis">
              <SpectralPanel eegData={relay.data} />
              <TopoMap eegData={relay.data} />
            </div>
          </ErrorBoundary>
        </div>

        {/* ── Chat Sidebar ── */}
        {chatOpen && (
          <aside className="sv-chat">
            <div className="sv-chat-header">
              <span className="sv-chat-title">Live Chat</span>
              <button
                className="sv-chat-close"
                onClick={() => setChatOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Viewer list */}
            <div className="sv-chat-viewers">
              {relay.viewers.map((v) => (
                <div key={v.id} className="sv-chat-viewer">
                  <span
                    className="sv-chat-viewer-dot"
                    style={{ background: v.color }}
                  />
                  <span className="sv-chat-viewer-name">
                    {v.id === relay.viewerId ? (
                      editingName ? (
                        <form
                          className="sv-name-edit"
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleNameSave();
                          }}
                        >
                          <input
                            className="sv-name-input"
                            value={nameInput}
                            onChange={(e) => setNameInput(e.target.value)}
                            maxLength={30}
                            autoFocus
                            onBlur={handleNameSave}
                          />
                        </form>
                      ) : (
                        <button
                          className="sv-name-btn"
                          onClick={() => {
                            setNameInput(relay.viewerName);
                            setEditingName(true);
                          }}
                          title="Click to change name"
                        >
                          {v.name || "Anonymous"} <span className="sv-you">(you)</span>
                        </button>
                      )
                    ) : (
                      v.name || "Anonymous"
                    )}
                  </span>
                  {voice.activeSpeakers.includes(v.id) && (
                    <span className="sv-speaking-icon">🔊</span>
                  )}
                </div>
              ))}
            </div>

            {/* Messages */}
            <div className="sv-chat-messages">
              {relay.messages.length === 0 && (
                <div className="sv-chat-empty">
                  No messages yet. Say hello! ✌️
                </div>
              )}
              {relay.messages.map((msg, i) => (
                <ChatBubble
                  key={i}
                  msg={msg}
                  isOwn={msg.from.id === relay.viewerId}
                />
              ))}
              <div ref={chatBottomRef} />
            </div>

            {/* Input */}
            <div className="sv-chat-input-row">
              <input
                ref={chatInputRef}
                className="sv-chat-input"
                type="text"
                placeholder="Type a message…"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendChat();
                  }
                }}
                maxLength={500}
              />
              <button
                className="sv-chat-send"
                onClick={handleSendChat}
                disabled={!chatInput.trim()}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </div>
          </aside>
        )}
      </div>

      {/* ── Voice bar ── */}
      {voice.speaking && voice.activeSpeakers.length > 0 && (
        <div className="sv-voice-bar">
          <span className="sv-voice-label">Voice active</span>
          {voice.activeSpeakers.map((id) => {
            const v = relay.viewers.find((v) => v.id === id);
            return (
              <span key={id} className="sv-voice-speaker">
                <span className="sv-voice-dot" style={{ background: v?.color ?? "#58a6ff" }} />
                {v?.name || "Anonymous"}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
