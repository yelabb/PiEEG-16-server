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

export function useEEG(timeWindowSec = 4): UseEEGReturn {
  const [connected, setConnected] = useState(false);
  const [sampleCount, setSampleCount] = useState(0);
  const [hz, setHz] = useState(0);
  const [recording, setRecording] = useState(false);
  const [recordElapsed, setRecordElapsed] = useState(0);
  const [recordResult, setRecordResult] = useState<RecordResult | null>(null);
  const recordStartRef = useRef<number | null>(null);
  const recordTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const buffersRef = useRef<Float32Array[]>(null!);
  const writeIndexRef = useRef(0);
  const samplesInBufRef = useRef(0);
  const tsRef = useRef<number[]>([]);
  const pausedRef = useRef(false);
  const sampleCountRef = useRef(0);
  const lastUIUpdate = useRef(0);
  const bufferSizeRef = useRef(0);

  const bufferSize = SAMPLE_RATE * timeWindowSec;
  bufferSizeRef.current = bufferSize;

  // Allocate ring buffers
  if (!buffersRef.current || buffersRef.current[0].length !== bufferSize) {
    buffersRef.current = Array.from(
      { length: NUM_CHANNELS },
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
    const wsHost = location.hostname || "localhost";
    const wsPort = import.meta.env.DEV ? 1616 : parseInt(location.port || "1617") - 1;
    const wsScheme = location.protocol === "https:" ? "wss" : "ws";
    const httpScheme = location.protocol === "https:" ? "https" : "http";
    const wsBase = `${wsScheme}://${wsHost}:${wsPort}`;
    const tokenUrl = import.meta.env.DEV
      ? `${httpScheme}://${wsHost}:1617/auth/ws-token`
      : `/auth/ws-token`;

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

    async function connect() {
      const token = await fetchWsToken();
      const url = token ? `${wsBase}?token=${encodeURIComponent(token)}` : wsBase;
      const ws = new WebSocket(url);
      wsRef.current = ws;

      ws.onopen = () => setConnected(true);
      ws.onclose = () => {
        setConnected(false);
        setTimeout(connect, 2000);
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

        if ("status" in msg) return;
        if (pausedRef.current) return;

        const channels = (msg as WSSampleMessage).channels;
        if (!channels || channels.length !== NUM_CHANNELS) return;

        // Write into ring buffers (no React state — refs only)
        const bufs = buffersRef.current;
        const bs = bufferSizeRef.current;
        const wi = writeIndexRef.current;
        for (let ch = 0; ch < NUM_CHANNELS; ch++) {
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
      gridSuspended: false,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // bufferSize changes are synced via the mutable property:
  data.bufferSize = bufferSize;

  return {
    connected,
    sampleCount,
    hz,
    recording,
    recordElapsed,
    recordResult,
    data,
    dismissRecordResult,
    setPaused,
    sendCommand,
  };
}
