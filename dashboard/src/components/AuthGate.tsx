import { useState, useEffect, type ReactNode, type FormEvent, type ChangeEvent } from "react";

interface AuthGateProps {
  children: ReactNode;
}

type AuthState = "checking" | "login" | "ok";

export default function AuthGate({ children }: AuthGateProps) {
  const [state, setState] = useState<AuthState>("checking");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const r = await fetch("/auth/status", { credentials: "include" });
        if (!r.ok) {
          setState("login");
          return;
        }
        const d = await r.json();
        setState(d.authenticated ? "ok" : "login");
      } catch (err) {
        console.error("Auth check error:", err);
        setState("login");
      }
    };
    checkAuth();
  }, []);

  async function handleSubmit(e: FormEvent) {
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
  if (state === "ok") return <>{children}</>;

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
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCode(e.target.value.replace(/\D/g, ""))}
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
