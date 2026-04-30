/**
 * Combined hook for relay viewer mode.
 *
 * Manages a single WebSocket to pieeg-cloud relay and provides:
 *  - EEG ring buffers (compatible with ChannelCanvas/SpectralPanel)
 *  - Live chat (send/receive messages)
 *  - Presence (viewer list)
 *  - WebRTC signaling passthrough for voice chat
 */

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import type {
  EEGData,
  ViewerInfo,
  ChatMessage,
  RelayControlMessage,
  WSSampleMessage,
} from "../types";
import { NUM_CHANNELS } from "../types";
import { useSampleRate } from "../lib/sampleRateStore";

const CLOUD_URL = "https://pieeg-cloud.fly.dev";
const UI_UPDATE_MS = 500;

const ADJECTIVES = ["Curious", "Electric", "Neural", "Cosmic", "Lucid", "Zen", "Quantum", "Vivid"];
const NOUNS = ["Neuron", "Cortex", "Signal", "Wave", "Pulse", "Synapse", "Mind", "Spark"];

function randomName(): string {
  const a = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const n = NOUNS[Math.floor(Math.random() * NOUNS.length)];
  return `${a} ${n}`;
}

export interface UseRelayViewerReturn {
  // Connection
  connected: boolean;
  ended: boolean;

  // EEG
  data: EEGData;
  numChannels: number;
  sampleCount: number;
  hz: number;

  // Identity
  viewerId: string | null;
  viewerColor: string;
  viewerName: string;
  setViewerName: (name: string) => void;

  // Presence
  viewers: ViewerInfo[];

  // Chat
  messages: ChatMessage[];
  sendChat: (text: string) => void;

  // Voice signaling
  sendSignal: (to: string, data: unknown) => void;
  onSignal: React.MutableRefObject<((from: string, data: unknown) => void) | null>;

  // Raw WS ref for advanced use
  wsRef: React.MutableRefObject<WebSocket | null>;
}

export function useRelayViewer(relayId: string, timeWindowSec = 4): UseRelayViewerReturn {
  const [connected, setConnected] = useState(false);
  const [ended, setEnded] = useState(false);
  const [numChannels, setNumChannels] = useState(8);
  const [sampleCount, setSampleCount] = useState(0);
  const [hz, setHz] = useState(0);
  const [viewerId, setViewerId] = useState<string | null>(null);
  const [viewerColor, setViewerColor] = useState("#58a6ff");
  const [viewerName, setViewerNameState] = useState(randomName);
  const [viewers, setViewers] = useState<ViewerInfo[]>([]);
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const wsRef = useRef<WebSocket | null>(null);
  const buffersRef = useRef<Float32Array[]>(null!);
  const writeIndexRef = useRef(0);
  const samplesInBufRef = useRef(0);
  const numChRef = useRef(8);
  const tsRef = useRef<number[]>([]);
  const sampleCountRef = useRef(0);
  const lastUIUpdate = useRef(0);
  const onSignal = useRef<((from: string, data: unknown) => void) | null>(null);
  const viewerNameRef = useRef(viewerName);

  // Buffer size scales with the active sample rate (250 Hz default,
  // 500 Hz when an IronBCI-32 set the rate via the local welcome message).
  const sampleRate = useSampleRate();
  const bufferSize = sampleRate * timeWindowSec;

  // Allocate ring buffers
  if (
    !buffersRef.current ||
    buffersRef.current.length !== numChRef.current ||
    buffersRef.current[0].length !== bufferSize
  ) {
    buffersRef.current = Array.from(
      { length: numChRef.current },
      () => new Float32Array(bufferSize),
    );
    writeIndexRef.current = 0;
    samplesInBufRef.current = 0;
  }

  const setViewerName = useCallback((name: string) => {
    const trimmed = name.slice(0, 30).trim();
    if (!trimmed) return;
    viewerNameRef.current = trimmed;
    setViewerNameState(trimmed);
    const ws = wsRef.current;
    if (ws?.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: "join", name: trimmed }));
    }
  }, []);

  const sendChat = useCallback((text: string) => {
    const ws = wsRef.current;
    if (ws?.readyState === WebSocket.OPEN && text.trim()) {
      ws.send(JSON.stringify({ type: "chat", text: text.slice(0, 500) }));
    }
  }, []);

  const sendSignal = useCallback((to: string, data: unknown) => {
    const ws = wsRef.current;
    if (ws?.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ type: "signal", to, data }));
    }
  }, []);

  useEffect(() => {
    const wsUrl = CLOUD_URL.replace(/^http/, "ws") + `/v1/relay/${relayId}`;
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => {
      setConnected(true);
      setEnded(false);
      // Announce ourselves
      ws.send(JSON.stringify({ type: "join", name: viewerNameRef.current }));
    };

    ws.onclose = (ev) => {
      setConnected(false);
      // 4404 = relay not active, 1001 = upstream disconnected
      if (ev.code === 4404 || ev.code === 1001 || ev.code === 1000) {
        setEnded(true);
      }
    };

    ws.onerror = () => ws.close();

    ws.onmessage = (event: MessageEvent) => {
      const raw = typeof event.data === "string" ? event.data : "";
      if (!raw) return;

      let msg: Record<string, unknown>;
      try {
        msg = JSON.parse(raw);
      } catch {
        return;
      }

      // ── Control messages (from relay server) ──
      if (msg.type) {
        const ctrl = msg as unknown as RelayControlMessage;
        switch (ctrl.type) {
          case "welcome":
            setViewerId(ctrl.viewerId);
            setViewerColor(ctrl.color);
            setViewers(ctrl.viewers);
            break;
          case "viewers":
            setViewers(ctrl.list);
            break;
          case "chat":
            setMessages((prev) => {
              const next = [...prev, { from: ctrl.from, text: ctrl.text, ts: ctrl.ts }];
              return next.length > 200 ? next.slice(-200) : next;
            });
            break;
          case "signal":
            onSignal.current?.(ctrl.from, ctrl.data);
            break;
        }
        return;
      }

      // ── EEG data frame ──
      const channels = (msg as unknown as WSSampleMessage).channels;
      if (!channels?.length) return;

      const nCh = numChRef.current;
      if (channels.length !== nCh && channels.length > 0 && channels.length <= NUM_CHANNELS) {
        numChRef.current = channels.length;
        setNumChannels(channels.length);
        buffersRef.current = Array.from(
          { length: channels.length },
          () => new Float32Array(bufferSize),
        );
        writeIndexRef.current = 0;
        samplesInBufRef.current = 0;
      }
      if (channels.length !== numChRef.current) return;

      // Write to ring buffers
      const bufs = buffersRef.current;
      const bs = bufferSize;
      const wi = writeIndexRef.current;
      for (let ch = 0; ch < numChRef.current; ch++) {
        bufs[ch][wi] = channels[ch];
      }
      writeIndexRef.current = (wi + 1) % bs;
      if (samplesInBufRef.current < bs) samplesInBufRef.current++;
      sampleCountRef.current++;

      const now = (msg as unknown as WSSampleMessage).t;
      tsRef.current.push(now);

      // Throttled UI update
      const wallNow = performance.now();
      if (wallNow - lastUIUpdate.current > UI_UPDATE_MS) {
        lastUIUpdate.current = wallNow;
        setSampleCount(sampleCountRef.current);

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

    return () => {
      ws.close();
    };
  }, [relayId, bufferSize]);

  const data = useMemo((): EEGData => ({
    buffers: buffersRef,
    writeIndex: writeIndexRef,
    samplesInBuffer: samplesInBufRef,
    bufferSize,
    numChannels: numChRef.current,
    gridSuspended: false,
  }), []);

  data.bufferSize = bufferSize;
  data.numChannels = numChannels;

  return {
    connected,
    ended,
    data,
    numChannels,
    sampleCount,
    hz,
    viewerId,
    viewerColor,
    viewerName,
    setViewerName,
    viewers,
    messages,
    sendChat,
    sendSignal,
    onSignal,
    wsRef,
  };
}
