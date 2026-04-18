/**
 * Cloud integration hook.
 *
 * Handles: OTP auth, token persistence, session CRUD, CSV upload,
 * relay control (via PiEEG server WS commands), and relay status.
 */

import { useState, useEffect, useCallback, useRef } from "react";
import type {
  CloudTokens,
  CloudSession,
  CloudRelayInfo,
  CloudRelayStatus,
  WSCloudRelayMessage,
} from "../types";

const CLOUD_URL = "https://pieeg-cloud.fly.dev";
const STORAGE_KEY = "pieeg_cloud_tokens";
const EMAIL_STORAGE_KEY = "pieeg_cloud_email";
export const RELAY_MAX_MINUTES = 30;

export interface UseCloudReturn {
  // Auth
  email: string;
  setEmail: (v: string) => void;
  loggedIn: boolean;
  authStep: "idle" | "otp_sent" | "verifying" | "logged_in";
  authError: string | null;
  sendOtp: () => Promise<void>;
  verifyOtp: (otp: string) => Promise<void>;
  logout: () => void;
  // Sessions
  sessions: CloudSession[];
  sessionsLoading: boolean;
  refreshSessions: () => Promise<void>;
  uploadSession: (filename: string, downloadUrl: string, meta?: { channels?: number; sampleRate?: number; duration?: number }) => Promise<void>;
  deleteSession: (id: string) => Promise<void>;
  downloadSession: (id: string) => Promise<void>;
  uploading: boolean;
  uploadError: string | null;
  // Relay
  relayStatus: CloudRelayStatus;
  relayShareUrl: string | null;
  startRelay: () => Promise<void>;
  stopRelay: () => void;
  relayLoading: boolean;
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
  const [authStep, setAuthStep] = useState<"idle" | "otp_sent" | "verifying" | "logged_in">("idle");
  const [authError, setAuthError] = useState<string | null>(null);
  const [tokens, setTokens] = useState<CloudTokens | null>(loadTokens);
  const [sessions, setSessions] = useState<CloudSession[]>([]);
  const [sessionsLoading, setSessionsLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [relayStatus, setRelayStatus] = useState<CloudRelayStatus>({ running: false });
  const [relayShareUrl, setRelayShareUrl] = useState<string | null>(null);
  const [relayLoading, setRelayLoading] = useState(false);
  const [relayElapsed, setRelayElapsed] = useState(0);
  const relayInfoRef = useRef<CloudRelayInfo | null>(null);
  const relayStartRef = useRef<number | null>(null);
  const relayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stopRelayRef = useRef<() => void>(() => {});

  const loggedIn = authStep === "logged_in";

  // ── Relay elapsed timer & auto-timeout ──────────────────────────────
  useEffect(() => {
    if (relayStatus.running) {
      if (!relayStartRef.current) relayStartRef.current = Date.now();
      relayTimerRef.current = setInterval(() => {
        const elapsed = Math.floor((Date.now() - relayStartRef.current!) / 1000);
        setRelayElapsed(elapsed);
        if (elapsed >= RELAY_MAX_MINUTES * 60) {
          // Auto-stop: max session length reached
          stopRelayRef.current();
        }
      }, 1000);
    } else {
      relayStartRef.current = null;
      setRelayElapsed(0);
      if (relayTimerRef.current) {
        clearInterval(relayTimerRef.current);
        relayTimerRef.current = null;
      }
    }
    return () => {
      if (relayTimerRef.current) clearInterval(relayTimerRef.current);
    };
  }, [relayStatus.running]);

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
    setSessions([]);
    setRelayShareUrl(null);
  }, [tokens]);

  // ── Sessions ────────────────────────────────────────────────────────

  const refreshSessions = useCallback(async () => {
    if (!tokens?.access.token) return;
    setSessionsLoading(true);
    try {
      const res = await apiFetch("/v1/sessions");
      if (res.ok) {
        const data = await res.json();
        setSessions(data.results || []);
      }
    } finally {
      setSessionsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokens?.access.token]);

  // Auto-load sessions when logged in
  useEffect(() => {
    if (loggedIn) refreshSessions();
  }, [loggedIn, refreshSessions]);

  const uploadSession = useCallback(async (filename: string, downloadUrl: string, meta?: { channels?: number; sampleRate?: number; duration?: number }) => {
    if (!tokens?.access.token) return;
    setUploading(true);
    setUploadError(null);
    try {
      // 1. Fetch CSV from local server
      const csvRes = await fetch(downloadUrl);
      if (!csvRes.ok) throw new Error("Failed to download CSV from server");
      const csvBlob = await csvRes.blob();

      // 2. Create session on cloud → get presigned upload URL
      const createRes = await apiFetch("/v1/sessions", {
        method: "POST",
        body: JSON.stringify({
          label: filename.replace(/\.csv$/i, ""),
          channels: meta?.channels ?? 16,
          sampleRate: meta?.sampleRate ?? 250,
          duration: meta?.duration ?? 0,
          fileBytes: csvBlob.size,
        }),
      });
      if (!createRes.ok) {
        const data = await createRes.json().catch(() => ({}));
        throw new Error(data.message || "Failed to create cloud session");
      }
      const session = await createRes.json();

      // 3. PUT CSV to presigned S3 URL
      if (session.uploadUrl) {
        const uploadRes = await fetch(session.uploadUrl, {
          method: "PUT",
          body: csvBlob,
          headers: { "Content-Type": "text/csv" },
        });
        if (!uploadRes.ok) throw new Error("Failed to upload CSV to cloud storage");
      }

      // 4. Refresh session list
      await refreshSessions();
    } catch (err: unknown) {
      setUploadError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }, [tokens?.access.token, refreshSessions]);

  const deleteSession = useCallback(async (id: string) => {
    if (!tokens?.access.token) return;
    try {
      const res = await apiFetch(`/v1/sessions/${id}`, { method: "DELETE" });
      // Cloud returns 404 if session doesn't exist — still refresh
      if (res.ok || res.status === 404) {
        setSessions((prev) => prev.filter((s) => s.id !== id));
      }
    } catch { /* ignore */ }
  }, [tokens?.access.token]);

  const downloadSession = useCallback(async (id: string) => {
    if (!tokens?.access.token) return;
    try {
      const res = await apiFetch(`/v1/sessions/${id}/download`, { redirect: "follow" });
      if (res.ok) {
        // Cloud redirects to S3 signed URL — browser followed it, download the blob
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `session_${id}.csv`;
        a.click();
        URL.revokeObjectURL(url);
      }
    } catch { /* ignore */ }
  }, [tokens?.access.token]);

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

      // 2. Tell Python server to start forwarding frames
      sendCommand({
        cmd: "cloud_relay_start",
        upstream_url: info.upstreamUrl,
        token: tokens.access.token,
      });
    } catch (err: unknown) {
      setRelayStatus({ running: false, error: err instanceof Error ? err.message : "Relay failed" });
    } finally {
      setRelayLoading(false);
    }
  }, [tokens?.access.token, sendCommand]);

  const stopRelay = useCallback(() => {
    sendCommand({ cmd: "cloud_relay_stop" });
    setRelayShareUrl(null);

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
    sessions,
    sessionsLoading,
    refreshSessions,
    uploadSession,
    deleteSession,
    downloadSession,
    uploading,
    uploadError,
    relayStatus,
    relayShareUrl,
    startRelay,
    stopRelay,
    relayLoading,
    relayElapsed,
  };
}
