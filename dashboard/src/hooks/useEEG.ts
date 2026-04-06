import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import type {
  EEGData,
  UseEEGReturn,
  RecordResult,
  WSMessage,
  WSRecordStatusMessage,
  WSSampleMessage,
} from "../types";
import { NUM_CHANNELS, SAMPLE_RATE } from "../types";

const UI_UPDATE_MS = 500; // Throttle React state updates

// Exponential backoff config
const BACKOFF_INITIAL_MS = 1000;
const BACKOFF_MAX_MS = 30000;
const BACKOFF_MULTIPLIER = 2;

export function useEEG(timeWindowSec = 4): UseEEGReturn {
  const [connected, setConnected] = useState(false);
  const [numChannels, setNumChannels] = useState(NUM_CHANNELS);
  const [sampleCount, setSampleCount] = useState(0);
  const [hz, setHz] = useState(0);
  const [latencyMs, setLatencyMs] = useState<number | null>(null);
  const [recording, setRecording] = useState(false);
  const [recordElapsed, setRecordElapsed] = useState(0);
  const [recordResult, setRecordResult] = useState<RecordResult | null>(null);
  const recordStartRef = useRef<number | null>(null);
  const recordTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const buffersRef = useRef<Float32Array[]>(null!);
  const writeIndexRef = useRef(0);
  const samplesInBufRef = useRef(0);
  const numChRef = useRef(NUM_CHANNELS);
  const tsRef = useRef<number[]>([]);
  const pausedRef = useRef(false);
  const sampleCountRef = useRef(0);
  const lastUIUpdate = useRef(0);
  const bufferSizeRef = useRef(0);

  const bufferSize = SAMPLE_RATE * timeWindowSec;
  bufferSizeRef.current = bufferSize;

  // Allocate ring buffers (re-allocate if channel count or buffer size changes)
  if (
    !buffersRef.current ||
    buffersRef.current.length !== numChRef.current ||
    buffersRef.current[0].length !== bufferSize
  ) {
    buffersRef.current = Array.from(
      { length: numChRef.current },
      () => new Float32Array(bufferSize)
    );
    writeIndexRef.current = 0;
    samplesInBufRef.current = 0;
  }

  // Client-side recording timer driven by `recording` state
  useEffect(() => {
    if (recording) {
      recordStartRef.current = Date.now();
      setRecordElapsed(0);
      if (recordTimerRef.current) clearInterval(recordTimerRef.current);
      recordTimerRef.current = setInterval(() => {
        setRecordElapsed(Math.floor((Date.now() - recordStartRef.current!) / 1000));
      }, 500);
    } else {
      if (recordTimerRef.current) clearInterval(recordTimerRef.current);
      recordStartRef.current = null;
    }
    return () => { if (recordTimerRef.current) clearInterval(recordTimerRef.current); };
  }, [recording]);

  const setPaused = useCallback((v: boolean) => {
    pausedRef.current = v;
    // On resume, clear stale buffer so display starts fresh from live data
    if (!v) {
      writeIndexRef.current = 0;
      samplesInBufRef.current = 0;
    }
  }, []);

  const sendCommand = useCallback((cmd: Record<string, unknown>) => {
    const ws = wsRef.current;
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(cmd));
    }
  }, []);

  useEffect(() => {
    const serverUrl = import.meta.env.VITE_SERVER_URL as string | undefined;
    let wsBase: string;
    let tokenUrl: string;

    if (serverUrl) {
      // Explicit server URL provided via VITE_SERVER_URL env variable
      const url = new URL(serverUrl);
      const wsScheme = url.protocol === "https:" ? "wss" : "ws";
      wsBase = `${wsScheme}://${url.host}`;
      tokenUrl = `${url.protocol}//${url.host}/auth/ws-token`;
    } else {
      const wsHost = location.hostname || "localhost";
      const wsPort = import.meta.env.DEV ? 1616 : parseInt(location.port || "1617") - 1;
      const wsScheme = location.protocol === "https:" ? "wss" : "ws";
      const httpScheme = location.protocol === "https:" ? "https" : "http";
      wsBase = `${wsScheme}://${wsHost}:${wsPort}`;
      tokenUrl = import.meta.env.DEV
        ? `${httpScheme}://${wsHost}:1617/auth/ws-token`
        : `/auth/ws-token`;
    }

    async function fetchWsToken(): Promise<string | null> {
      try {
        const res = await fetch(tokenUrl, { credentials: "include" });
        if (!res.ok) return null;
        const data = await res.json();
        return data.token || null;
      } catch {
        return null;
      }
    }

    let backoffMs = BACKOFF_INITIAL_MS;

    async function connect() {
      const token = await fetchWsToken();
      const url = token ? `${wsBase}?token=${encodeURIComponent(token)}` : wsBase;
      const ws = new WebSocket(url);
      wsRef.current = ws;

      ws.onopen = () => {
        setConnected(true);
        backoffMs = BACKOFF_INITIAL_MS; // Reset on successful connect
      };
      ws.onclose = () => {
        setConnected(false);
        setLatencyMs(null);
        // Exponential backoff with jitter
        const jitter = Math.random() * backoffMs * 0.3;
        setTimeout(connect, backoffMs + jitter);
        backoffMs = Math.min(backoffMs * BACKOFF_MULTIPLIER, BACKOFF_MAX_MS);
      };
      ws.onerror = () => ws.close();

      ws.onmessage = (event: MessageEvent) => {
        const msg = JSON.parse(event.data as string) as WSMessage;

        // Handle record_status updates
        if ("record_status" in msg) {
          const rs = (msg as WSRecordStatusMessage).record_status;
          setRecording(rs.recording);
          if (rs.stopped) {
            const dashPort = location.port || "1617";
            setRecordResult({
              filename: rs.stopped.filename,
              frames: rs.stopped.frames,
              duration: rs.stopped.duration,
              path: rs.stopped.path,
              downloadUrl: `${location.protocol}//${location.hostname}:${dashPort}/recordings/${rs.stopped.filename}`,
            });
          }
        }

        // Forward webhook messages to panel handler
        if ("webhook_rules" in msg || "webhook_created" in msg ||
            "webhook_updated" in msg || "webhook_deleted" in msg ||
            "webhook_event" in msg || "webhook_error" in msg ||
            "webhook_test" in msg) {
          const handler = (window as unknown as Record<string, unknown>).__webhookHandler;
          if (typeof handler === "function") handler(msg);
        }

        // Forward VRChat OSC status to experience handler
        if ("osc_status" in msg) {
          const handler = (window as unknown as Record<string, unknown>).__oscHandler;
          if (typeof handler === "function") handler(msg);
        }

        if ("status" in msg) {
          // Welcome message — read channel count from server
          const serverCh = (msg as Record<string, unknown>).channels;
          if (typeof serverCh === "number" && serverCh > 0 && serverCh <= NUM_CHANNELS) {
            numChRef.current = serverCh;
            setNumChannels(serverCh);
            // Re-allocate buffers for new channel count
            buffersRef.current = Array.from(
              { length: serverCh },
              () => new Float32Array(bufferSizeRef.current)
            );
            writeIndexRef.current = 0;
            samplesInBufRef.current = 0;
          }
          return;
        }
        if (pausedRef.current) return;

        const channels = (msg as WSSampleMessage).channels;
        const nCh = numChRef.current;
        if (!channels || channels.length !== nCh) return;

        // Write into ring buffers (no React state — refs only)
        const bufs = buffersRef.current;
        const bs = bufferSizeRef.current;
        const wi = writeIndexRef.current;
        for (let ch = 0; ch < nCh; ch++) {
          bufs[ch][wi] = channels[ch];
        }
        writeIndexRef.current = (wi + 1) % bs;
        if (samplesInBufRef.current < bs) samplesInBufRef.current++;

        sampleCountRef.current++;

        // Collect timestamp for Hz calculation
        const now = (msg as WSSampleMessage).t;
        tsRef.current.push(now);

        // Throttled React state update for header stats
        const wallNow = performance.now();
        if (wallNow - lastUIUpdate.current > UI_UPDATE_MS) {
          lastUIUpdate.current = wallNow;
          setSampleCount(sampleCountRef.current);

          // Trim timestamps only during UI update (not every sample)
          const ts = tsRef.current;
          const cutoff = now - 2;
          let readIdx = 0;
          while (readIdx < ts.length && ts[readIdx] < cutoff) readIdx++;
          if (readIdx > 0) ts.splice(0, readIdx);

          if (ts.length > 1) {
            const elapsed = ts[ts.length - 1] - ts[0];
            if (elapsed > 0) setHz(Math.round((ts.length - 1) / elapsed));
          }

          // One-way latency estimate (client clock - server timestamp)
          const latency = Math.round((Date.now() / 1000 - now) * 1000);
          if (latency >= 0 && latency < 10000) setLatencyMs(latency);
        }
      };
    }

    connect();
    return () => {
      const ws = wsRef.current;
      if (ws) ws.close();
    };
  }, []);

  const dismissRecordResult = useCallback(() => setRecordResult(null), []);

  // Stable data object for canvas components — refs never change identity
  const data = useMemo((): EEGData => {
    return {
      buffers: buffersRef,
      writeIndex: writeIndexRef,
      samplesInBuffer: samplesInBufRef,
      bufferSize,
      numChannels: numChRef.current,
      gridSuspended: false,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // bufferSize changes are synced via the mutable property:
  data.bufferSize = bufferSize;
  data.numChannels = numChannels;

  return {
    connected,
    numChannels,
    sampleCount,
    hz,
    latencyMs,
    recording,
    recordElapsed,
    recordResult,
    data,
    dismissRecordResult,
    setPaused,
    sendCommand,
  };
}
