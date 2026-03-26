import { useState, useEffect } from "react";

export default function AuthGate({ children }) {
  const [state, setState] = useState("checking"); // checking | login | ok
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/auth/status", { credentials: "include" })
      .then((r) => r.json())
      .then((d) => setState(d.authenticated ? "ok" : "login"))
      .catch(() => setState("login"));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const r = await fetch("/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ code }),
      });
      const d = await r.json();
      if (d.ok) {
        setState("ok");
      } else {
        setError(d.error || "Invalid code");
        setCode("");
      }
    } catch {
      setError("Server unreachable");
    }
  }

  if (state === "checking") return null;
  if (state === "ok") return children;

  return (
    <div className="auth-overlay">
      <div className="auth-card">
        <h1>
          Pi<span>EEG</span>-16
        </h1>
        <p className="auth-sub">
          Enter the access code displayed in the server console
        </p>
        <form onSubmit={handleSubmit}>
          <input
            className="auth-input"
            type="text"
            maxLength={6}
            pattern="[0-9]{6}"
            autoComplete="off"
            autoFocus
            required
            placeholder="------"
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
          />
          <br />
          <button className="auth-btn" type="submit">
            Connect
          </button>
          {error && <p className="auth-error">{error}</p>}
        </form>
      </div>
    </div>
  );
}
