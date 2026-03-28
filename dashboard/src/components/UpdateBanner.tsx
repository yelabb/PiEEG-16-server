import { useState, useEffect } from "react";
import type { UpdateInfo } from "../types";

export default function UpdateBanner() {
  const [info, setInfo] = useState<UpdateInfo | null>(null);
  const [ready, setReady] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [showHowTo, setShowHowTo] = useState(false);

  useEffect(() => {
    fetch("/api/update/check")
      .then((r) => r.json())
      .then((data) => {
        if (!data.error) setInfo(data);
        setReady(true);
      })
      .catch(() => setReady(true));
  }, []);

  if (dismissed || !ready || !info?.update_available) return null;

  const isGit = info.install_method === "git";
  const isWin = /win/i.test(navigator.platform);

  const updateCmd = isGit
    ? `git pull origin main\npip install -e .`
    : `pip install --upgrade pieeg-server`;

  const restartCmd = isWin
    ? `.\\pieeg-server.cmd`
    : `pieeg-server`;

  return (
    <div className="update-banner">
      <div className="update-banner-content">
        <span className="update-banner-text">
          Update available: <strong>{info.current_version}</strong> →{" "}
          <strong>{info.latest_version}</strong>
        </span>
        <button
          className="btn update-btn"
          onClick={() => setShowHowTo((v) => !v)}
        >
          {showHowTo ? "Hide instructions" : "How to update"}
        </button>
        <button
          className="update-dismiss"
          onClick={() => setDismissed(true)}
          title="Dismiss"
        >
          ✕
        </button>
      </div>
      {showHowTo && (
        <div className="update-howto">
          <p>
            {isGit
              ? "Run these commands in your project folder:"
              : "Run this command:"}
          </p>
          <pre><code>{updateCmd}</code></pre>
          <p>Then restart the server:</p>
          <pre><code>{restartCmd}</code></pre>
        </div>
      )}
    </div>
  );
}
