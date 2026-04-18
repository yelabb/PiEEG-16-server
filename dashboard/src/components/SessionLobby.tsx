import { useState, useCallback, useEffect, type FormEvent, type KeyboardEvent } from "react";

const FLY_DEMO_URL = "wss://pieeg-server--mock.fly.dev";

/** Compute the default WS URL from the current page location. */
function defaultWsUrl(): string {
  const host = location.hostname || "localhost";
  const port = import.meta.env.DEV ? 1616 : parseInt(location.port || "1617") - 1;
  const scheme = location.protocol === "https:" ? "wss" : "ws";
  return `${scheme}://${host}:${port}`;
}

interface Props {
  onConnect: (wsUrl: string) => void;
}

export default function SessionLobby({ onConnect }: Props) {
  const [serverUrl, setServerUrl] = useState(
    () => import.meta.env.VITE_SERVER_URL ? FLY_DEMO_URL : defaultWsUrl()
  );
  const [sessionCode, setSessionCode] = useState("");
  const [serverInfo, setServerInfo] = useState<{ version: string; branch: string | null } | null>(null);

  useEffect(() => {
    fetch("/api/info")
      .then((r) => r.json())
      .then((d) => { if (d.version) setServerInfo(d); })
      .catch(() => {});
  }, []);

  const handleCreate = useCallback(() => {
    const url = serverUrl.trim();
    if (url) onConnect(url);
  }, [serverUrl, onConnect]);

  const handleJoin = useCallback(
    (e?: FormEvent) => {
      e?.preventDefault();
      const code = sessionCode.trim();
      if (!code) return;
      // If it looks like a full URL, use as-is; otherwise treat as session code
      if (/^wss?:\/\//.test(code)) {
        onConnect(code);
      } else {
        onConnect(code);
      }
    },
    [sessionCode, onConnect],
  );

  const handleSessionKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") handleJoin();
    },
    [handleJoin],
  );

  return (
    <div className="lobby-backdrop">
      <div className="lobby-card">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="PiEEG"
          className="lobby-logo-img"
        />
        <div className="lobby-title">PiEEG-server</div>
        {serverInfo && (
          <span className="lobby-version">
            v{serverInfo.version}{serverInfo.branch ? ` · ${serverInfo.branch}` : ""}
          </span>
        )}
        <p className="lobby-subtitle">
          
        </p>

        {/* ── Main section ─────────────────────────────────── */}
        <div className="lobby-section">
          <h2 className="lobby-section-title">
            <span className="lobby-dot lobby-dot--green" />
            Start a Session
          </h2>

          {/* Data source label */}
          <label className="lobby-label">Server URL</label>
          <input
            className="lobby-input"
            type="text"
            value={serverUrl}
            onChange={(e) => setServerUrl(e.target.value)}
            placeholder="ws://localhost:1616"
          />
          <span className="lobby-hint">
            Enter your PiEEG server address or use the default
          </span>

          <button
            className="lobby-btn lobby-btn--demo"
            type="button"
            onClick={() => setServerUrl(FLY_DEMO_URL)}
          >
            ▶ Use Demo Server
          </button>
        </div>

        {/* ── Join existing ────────────────────────────────── */}
        <div className="lobby-section">
          <label className="lobby-label">Join existing session</label>
          <div className="lobby-join-row">
            <input
              className="lobby-input"
              type="text"
              value={sessionCode}
              onChange={(e) => setSessionCode(e.target.value)}
              onKeyDown={handleSessionKeyDown}
              placeholder="Enter session code or URL…"
            />
            <button
              className="lobby-btn lobby-btn--accent"
              disabled={!sessionCode.trim()}
              onClick={() => handleJoin()}
            >
              Join
            </button>
          </div>
        </div>

        <div className="lobby-divider">
          <span>OR</span>
        </div>

        <button className="lobby-btn lobby-btn--primary" onClick={handleCreate}>
          + Create New Session
        </button>

        {/* ── Footer ───────────────────────────────────────── */}
        <div className="lobby-footer">
          <span className="lobby-footer-dot lobby-dot--yellow" /> Visualization
          <span className="lobby-footer-dot lobby-dot--blue" /> Neural Decoders
          <span className="lobby-footer-dot lobby-dot--green" /> Real-time Metrics
        </div>
        <p className="lobby-footer-hint">
          Press Enter to join after entering a session code
        </p>
        <a
          className="lobby-gh-link"
          href="https://github.com/pieeg-club/PiEEG-server"
          target="_blank"
          rel="noopener noreferrer"
        >
          ◔ Submit an issue on GitHub
        </a>
      </div>
    </div>
  );
}
