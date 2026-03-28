import { useState, useEffect } from "react";
import type { UpdateInfo } from "../types";

type BannerStatus = "idle" | "checking" | "updating" | "done" | "error";

export default function UpdateBanner() {
  const [info, setInfo] = useState<UpdateInfo | null>(null);
  const [status, setStatus] = useState<BannerStatus>("idle");
  const [message, setMessage] = useState("");
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setStatus("checking");
    fetch("/api/update/check")
      .then((r) => r.json())
      .then((data) => {
        if (data.error) {
          setStatus("idle");
          return;
        }
        setInfo(data);
        setStatus("idle");
      })
      .catch(() => setStatus("idle"));
  }, []);

  if (dismissed || !info?.update_available || status === "checking") return null;

  function handleUpdate() {
    setStatus("updating");
    setMessage("");
    fetch("/api/update/apply", { method: "POST" })
      .then((r) => r.json())
      .then((data) => {
        if (data.ok) {
          setStatus("done");
          setMessage(data.restart_required
            ? "Update installed! Restart the server to use the new version."
            : "Update installed!");
        } else {
          setStatus("error");
          setMessage(data.message || "Update failed.");
        }
      })
      .catch((err: Error) => {
        setStatus("error");
        setMessage("Network error: " + err.message);
      });
  }

  const methodLabel = info!.install_method === "git" ? "git pull" : "pip upgrade";

  return (
    <div className="update-banner">
      <div className="update-banner-content">
        {status === "idle" && (
          <>
            <span className="update-banner-text">
              Update available: <strong>{info!.current_version}</strong> → <strong>{info!.latest_version}</strong>
              <span className="update-method">({methodLabel})</span>
            </span>
            <button className="btn update-btn" onClick={handleUpdate}>
              Update Now
            </button>
            <button className="update-dismiss" onClick={() => setDismissed(true)} title="Dismiss">
              ✕
            </button>
          </>
        )}
        {status === "updating" && (
          <span className="update-banner-text">
            <span className="update-spinner" /> Updating…
          </span>
        )}
        {status === "done" && (
          <>
            <span className="update-banner-text update-success">
              {message}
            </span>
            <button className="update-dismiss" onClick={() => setDismissed(true)} title="Dismiss">
              ✕
            </button>
          </>
        )}
        {status === "error" && (
          <>
            <span className="update-banner-text update-error">
              {message}
            </span>
            <button className="btn update-btn" onClick={handleUpdate}>
              Retry
            </button>
            <button className="update-dismiss" onClick={() => setDismissed(true)} title="Dismiss">
              ✕
            </button>
          </>
        )}
      </div>
    </div>
  );
}
