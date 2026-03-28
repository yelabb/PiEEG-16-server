import { useEffect, useRef, useState, useCallback, useMemo } from "react";

const NUM_CHANNELS = 16;
const SAMPLE_RATE = 250;
const UI_UPDATE_MS = 500; // Throttle React state updates

/**
 * Hook that connects to the PiEEG-16 WebSocket and maintains
 * per-channel ring buffers for the last `timeWindowSec` seconds.
 *
 * Returns two objects (PhantomLoop selector pattern):
 *  - `data`: stable ref-based object for canvas components (never triggers re-render)
 *  - state fields: reactive values for UI (connected, hz, sampleCount, etc.)
 */
export function useEEG(timeWindowSec = 4) {
  const [connected, setConnected] = useState(false);
  const [sampleCount, setSampleCount] = useState(0);
  const [hz, setHz] = useState(0);
  const [recording, setRecording] = useState(false);
  const [recordElapsed, setRecordElapsed] = useState(0);
  const [recordResult, setRecordResult] = useState(null);
  const recordStartRef = useRef(null);
  const recordTimerRef = useRef(null);
  const wsRef = useRef(null);
  const buffersRef = useRef(null);
  const writeIndexRef = useRef(0);
  const samplesInBufRef = useRef(0);
  const tsRef = useRef([]);
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
      clearInterval(recordTimerRef.current);
      recordTimerRef.current = setInterval(() => {
        setRecordElapsed(Math.floor((Date.now() - recordStartRef.current) / 1000));
      }, 500);
    } else {
      clearInterval(recordTimerRef.current);
      recordStartRef.current = null;
    }
    return () => clearInterval(recordTimerRef.current);
  }, [recording]);

  const setPaused = useCallback((v) => {
    pausedRef.current = v;
    // On resume, clear stale buffer so display starts fresh from live data
    if (!v) {
      writeIndexRef.current = 0;
      samplesInBufRef.current = 0;
    }
  }, []);

  const sendCommand = useCallback((cmd) => {
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

    async function fetchWsToken() {
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

      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);

        // Handle record_status updates
        if (msg.record_status) {
          const rs = msg.record_status;
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

        if (msg.status) return;
        if (pausedRef.current) return;

        const channels = msg.channels;
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

        // Collect timestamp for Hz calculation — trim deferred to UI update
        const now = msg.t;
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

  // Stable data object for canvas components — refs never change identity,
  // so this object stays reference-equal across renders (PhantomLoop selector pattern).
  // bufferSize is updated via the ref on the object.
  const data = useMemo(() => {
    const d = {
      buffers: buffersRef,
      writeIndex: writeIndexRef,
      samplesInBuffer: samplesInBufRef,
      bufferSize,
      gridSuspended: false, // set by App when expanded overlay is open
    };
    return d;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // bufferSize changes are synced via the mutable ref below:
  data.bufferSize = bufferSize;

  return {
    // Reactive state (triggers App re-render for header/controls UI)
    connected,
    sampleCount,
    hz,
    recording,
    recordElapsed,
    recordResult,
    // Stable ref-based data for canvas components (never changes reference)
    data,
    // Stable callbacks
    dismissRecordResult,
    setPaused,
    sendCommand,
  };
}
