/**
 * Cloud integration hook.
 *
 * Handles: OTP auth, token persistence, session CRUD, CSV upload,
 * relay control (via PiEEG server WS commands), and relay status.
 */

import { useState, useEffect, useCallback, useRef } from "react";
import type {
  CloudTokens,
  CloudRelayInfo,
  CloudRelayStatus,
  WSCloudRelayMessage,
} from "../types";

const CLOUD_URL = "https://pieeg-cloud.fly.dev";
const CANONICAL_DASHBOARD = "https://pieeg.vercel.app";
const STORAGE_KEY = "pieeg_cloud_tokens";
const EMAIL_STORAGE_KEY = "pieeg_cloud_email";
export const RELAY_MAX_MINUTES = 30;

function buildShareLink(relayId: string): string {
  const host = location.hostname;
  const isLocal =
    host === "localhost" ||
    host === "127.0.0.1" ||
    /^(192\.168\.|10\.|172\.(1[6-9]|2\d|3[01])\.)/.test(host);
  const base = isLocal ? CANONICAL_DASHBOARD : location.origin;
  return `${base}/live/${relayId}`;
}

export interface UseCloudReturn {
  // Auth
  email: string;
  setEmail: (v: string) => void;
  loggedIn: boolean;
  authStep: "idle" | "sending" | "otp_sent" | "verifying" | "logged_in";
  authError: string | null;
  sendOtp: () => Promise<void>;
  verifyOtp: (otp: string) => Promise<void>;
  logout: () => void;
  // Relay
  relayStatus: CloudRelayStatus;
  relayShareUrl: string | null;
  shareLink: string | null;
  startRelay: () => Promise<void>;
  stopRelay: () => void;
  relayLoading: boolean;
  relayStopping: boolean;
  relayElapsed: number;
}

function loadTokens(): CloudTokens | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const tokens: CloudTokens = JSON.parse(raw);
    // Check if access token is expired
    if (new Date(tokens.access.expires) < new Date()) {
      // Try refresh below
      return tokens;
    }
    return tokens;
  } catch {
    return null;
  }
}

function saveTokens(tokens: CloudTokens) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tokens));
}

function clearTokens() {
  localStorage.removeItem(STORAGE_KEY);
}

export function useCloud(
  sendCommand: (cmd: Record<string, unknown>) => void,
): UseCloudReturn {
  const [email, setEmail] = useState(() => localStorage.getItem(EMAIL_STORAGE_KEY) || "");
  const [authStep, setAuthStep] = useState<"idle" | "sending" | "otp_sent" | "verifying" | "logged_in">("idle");
  const [authError, setAuthError] = useState<string | null>(null);
  const [tokens, setTokens] = useState<CloudTokens | null>(loadTokens);
  const [relayStatus, setRelayStatus] = useState<CloudRelayStatus>({ running: false });
  const [relayShareUrl, setRelayShareUrl] = useState<string | null>(null);
  const [shareLink, setShareLink] = useState<string | null>(null);
  const [relayLoading, setRelayLoading] = useState(false);
  const [relayStopping, setRelayStopping] = useState(false);
  const [relayElapsed, setRelayElapsed] = useState(0);
  const relayInfoRef = useRef<CloudRelayInfo | null>(null);
  const relayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stopRelayRef = useRef<() => void>(() => {});

  const loggedIn = authStep === "logged_in";

  // ── Relay elapsed timer (seeded from backend started_at) ────────────
  useEffect(() => {
    if (relayStatus.running) {
      // Use server timestamp if available (survives refresh), else fall back
      const startSec = relayStatus.started_at || Date.now() / 1000;
      const tick = () => {
        const elapsed = Math.floor(Date.now() / 1000 - startSec);
        setRelayElapsed(Math.max(0, elapsed));
      };
      tick(); // immediate first tick
      relayTimerRef.current = setInterval(tick, 1000);

      // Recover share_url from backend status after refresh
      if (!relayShareUrl && relayStatus.share_url) {
        setRelayShareUrl(relayStatus.share_url);
      }
      // Recover relayInfoRef so stopRelay can clean up cloud-side
      if (!relayInfoRef.current && relayStatus.relay_id && relayStatus.share_url) {
        relayInfoRef.current = {
          relayId: relayStatus.relay_id,
          upstreamUrl: relayStatus.upstream_url ?? "",
          shareUrl: relayStatus.share_url,
        };
        if (!shareLink) setShareLink(buildShareLink(relayStatus.relay_id));
      }
    } else {
      setRelayElapsed(0);
      setRelayStopping(false);
      if (relayTimerRef.current) {
        clearInterval(relayTimerRef.current);
        relayTimerRef.current = null;
      }
      setRelayShareUrl(null);
      setShareLink(null);
      relayInfoRef.current = null;
    }
    return () => {
      if (relayTimerRef.current) clearInterval(relayTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [relayStatus.running, relayStatus.started_at]);

  // ── Restore session on mount ────────────────────────────────────────
  useEffect(() => {
    if (tokens && new Date(tokens.access.expires) > new Date()) {
      setAuthStep("logged_in");
    } else if (tokens) {
      // Try refresh
      refreshToken(tokens).then((ok) => {
        if (!ok) { clearTokens(); setTokens(null); }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Window global handler for relay status from WS ──────────────────
  const handleWSMessage = useCallback((msg: WSCloudRelayMessage) => {
    if (msg.cloud_relay_status) {
      setRelayStatus(msg.cloud_relay_status);
    }
  }, []);

  useEffect(() => {
    (window as unknown as Record<string, unknown>).__cloudRelayHandler = handleWSMessage;
    return () => { delete (window as unknown as Record<string, unknown>).__cloudRelayHandler; };
  }, [handleWSMessage]);

  // ── Auth helpers ────────────────────────────────────────────────────

  async function apiFetch(path: string, init?: RequestInit): Promise<Response> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...(init?.headers as Record<string, string> || {}),
    };
    if (tokens?.access.token) {
      headers["Authorization"] = `Bearer ${tokens.access.token}`;
    }
    return fetch(`${CLOUD_URL}${path}`, { ...init, headers });
  }

  async function refreshToken(t: CloudTokens): Promise<boolean> {
    try {
      const res = await fetch(`${CLOUD_URL}/v1/auth/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken: t.refresh.token }),
      });
      if (!res.ok) return false;
      const newTokens: CloudTokens = await res.json();
      setTokens(newTokens);
      saveTokens(newTokens);
      setAuthStep("logged_in");
      return true;
    } catch {
      return false;
    }
  }

  const sendOtp = useCallback(async () => {
    setAuthError(null);
    setAuthStep("sending");
    try {
      // Try login first; if 404, register
      let res = await fetch(`${CLOUD_URL}/v1/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.status === 404) {
        res = await fetch(`${CLOUD_URL}/v1/auth/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
      }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || `Error ${res.status}`);
      }
      setAuthStep("otp_sent");
    } catch (err: unknown) {
      setAuthError(err instanceof Error ? err.message : "Failed to send OTP");
      setAuthStep("idle");
    }
  }, [email]);

  const verifyOtp = useCallback(async (otp: string) => {
    setAuthError(null);
    setAuthStep("verifying");
    try {
      const res = await fetch(`${CLOUD_URL}/v1/auth/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Invalid code");
      }
      const newTokens: CloudTokens = await res.json();
      setTokens(newTokens);
      saveTokens(newTokens);
      setAuthStep("logged_in");
    } catch (err: unknown) {
      setAuthError(err instanceof Error ? err.message : "Verification failed");
      setAuthStep("otp_sent");
    }
  }, [email]);

  const logout = useCallback(() => {
    if (tokens?.refresh.token) {
      fetch(`${CLOUD_URL}/v1/auth/logout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken: tokens.refresh.token }),
      }).catch(() => {});
    }
    clearTokens();
    localStorage.removeItem(EMAIL_STORAGE_KEY);
    setTokens(null);
    setEmail("");
    setAuthStep("idle");
    setRelayShareUrl(null);
    setShareLink(null);
  }, [tokens]);

  // ── Relay ───────────────────────────────────────────────────────────

  const startRelay = useCallback(async () => {
    if (!tokens?.access.token) return;
    setRelayLoading(true);
    try {
      // 1. Create relay on cloud
      const res = await apiFetch("/v1/relay", { method: "POST" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Failed to create relay");
      }
      const info: CloudRelayInfo = await res.json();
      relayInfoRef.current = info;
      setRelayShareUrl(info.shareUrl);
      setShareLink(buildShareLink(info.relayId));

      // 2. Tell Python server to start forwarding frames
      sendCommand({
        cmd: "cloud_relay_start",
        upstream_url: info.upstreamUrl,
        token: tokens.access.token,
        relay_id: info.relayId,
        share_url: info.shareUrl,
      });
    } catch (err: unknown) {
      setRelayStatus({ running: false, error: err instanceof Error ? err.message : "Relay failed" });
    } finally {
      setRelayLoading(false);
    }
  }, [tokens?.access.token, sendCommand]);

  const stopRelay = useCallback(() => {
    setRelayStopping(true);
    sendCommand({ cmd: "cloud_relay_stop" });
    setRelayShareUrl(null);
    setShareLink(null);

    // Clean up cloud-side relay
    if (relayInfoRef.current && tokens?.access.token) {
      apiFetch(`/v1/relay/${relayInfoRef.current.relayId}`, { method: "DELETE" }).catch(() => {});
      relayInfoRef.current = null;
    }
  }, [sendCommand, tokens?.access.token]);

  // Keep stopRelayRef in sync so timer effect always calls latest closure
  stopRelayRef.current = stopRelay;

  return {
    email,
    setEmail,
    loggedIn,
    authStep,
    authError,
    sendOtp,
    verifyOtp,
    logout,
    relayStatus,
    relayShareUrl,
    shareLink,
    startRelay,
    stopRelay,
    relayLoading,
    relayStopping,
    relayElapsed,
  };
}
