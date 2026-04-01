// ─────────────────────────────────────────────────────────────────────────────
// useEventEngine — Feeds live EEG ring buffers (or replayed data) into the
// event detection worker, receives candidates, merges them, and maintains the
// event timeline.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef, useCallback } from "react";
import type {
  EEGData,
  EEGEvent,
  DetectorConfig,
  EventCandidate,
  EventWorkerOutMessage,
} from "../types";
import { SAMPLE_RATE } from "../types";
import { DEFAULT_DETECTORS, scanRecording } from "../lib/eventDetectors";
import { mergeCandidates } from "../lib/eventMerger";

const FFT_SIZE = 256;
// Evaluate every EVAL_STRIDE new samples (≈0.5 s at 250 Hz).
// Driven by actual incoming data, not a wall-clock timer.
const EVAL_STRIDE = Math.round(SAMPLE_RATE / 2);
const MAX_EVENTS = 500; // cap timeline size

// ── Persistence helpers ──────────────────────────────────────────────────

const STORAGE_KEY = "pieeg_event_detectors";

function loadDetectors(): DetectorConfig[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved: DetectorConfig[] = JSON.parse(raw);
      // Merge with defaults in case new detectors were added
      return DEFAULT_DETECTORS.map((def) => {
        const s = saved.find((d) => d.type === def.type);
        return s ? { ...def, enabled: s.enabled, sensitivity: s.sensitivity } : def;
      });
    }
  } catch { /* ignore */ }
  return DEFAULT_DETECTORS.map((d) => ({ ...d }));
}

function saveDetectors(dets: DetectorConfig[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dets));
  } catch { /* ignore */ }
}

// ── Hook ─────────────────────────────────────────────────────────────────

export interface UseEventEngineReturn {
  events: EEGEvent[];
  detectors: DetectorConfig[];
  setDetectorEnabled: (type: string, enabled: boolean) => void;
  setDetectorSensitivity: (type: string, sensitivity: number) => void;
  resetDetectors: () => void;
  clearEvents: () => void;
  /** For replay: scan entire recording. Returns a promise that
   * resolves when complete. */
  scanRecording: (channelData: Float64Array[], totalFrames: number) => Promise<EEGEvent[]>;
  /** Replay events (set externally after scan). */
  setEvents: (events: EEGEvent[]) => void;
  scanning: boolean;
}

export function useEventEngine(
  enabled: boolean,
  eegData: EEGData | null,
): UseEventEngineReturn {
  const [events, setEvents] = useState<EEGEvent[]>([]);
  const [detectors, setDetectors] = useState<DetectorConfig[]>(loadDetectors);
  const [scanning, setScanning] = useState(false);

  const workerRef = useRef<Worker | null>(null);
  const candidateBufferRef = useRef<EventCandidate[]>([]);
  const detectorsRef = useRef(detectors);
  detectorsRef.current = detectors;

  // Pre-allocated extraction buffers — reused every eval tick to avoid GC
  const extractBufsRef = useRef<Float64Array[]>([]);
  // Tracks the writeIndex at the time of last eval (to detect new data)
  const lastWriteIdxRef = useRef(-1);
  // Accumulates new-sample count between evaluations
  const pendingSamplesRef = useRef(0);

  const scanResolveRef = useRef<((evts: EEGEvent[]) => void) | null>(null);

  // ── Worker lifecycle ─────────────────────────────────────────────────
  useEffect(() => {
    if (!enabled) return;

    let worker: Worker;
    try {
      worker = new Worker(
        new URL("../workers/eventWorker.ts", import.meta.url),
        { type: "module" },
      );
    } catch {
      // Worker failed to load — fall back to main thread (no-op for now)
      return;
    }

    workerRef.current = worker;

    worker.onmessage = (e: MessageEvent<EventWorkerOutMessage>) => {
      const msg = e.data;

      if (msg.type === "candidates") {
        // Accumulate candidates, then merge periodically
        candidateBufferRef.current.push(...msg.candidates);
        if (candidateBufferRef.current.length > 0) {
          const merged = mergeCandidates(
            candidateBufferRef.current,
            detectorsRef.current,
          );
          if (merged.length > 0) {
            setEvents((prev) => {
              const next = [...prev, ...merged];
              return next.length > MAX_EVENTS ? next.slice(next.length - MAX_EVENTS) : next;
            });
          }
          candidateBufferRef.current = [];
        }
      }

      if (msg.type === "scan_complete") {
        setScanning(false);
        setEvents(msg.events);
        if (scanResolveRef.current) {
          scanResolveRef.current(msg.events);
          scanResolveRef.current = null;
        }
      }
    };

    // Send initial config
    worker.postMessage({ type: "configure", detectors: detectorsRef.current });

    return () => {
      worker.terminate();
      workerRef.current = null;
    };
  }, [enabled]);

  // Push config updates to worker
  useEffect(() => {
    workerRef.current?.postMessage({ type: "configure", detectors });
    saveDetectors(detectors);
  }, [detectors]);

  // ── Live evaluation loop (data-driven, not clock-driven) ─────────────
  useEffect(() => {
    if (!enabled || !eegData) return;

    lastWriteIdxRef.current = eegData.writeIndex.current;
    pendingSamplesRef.current = 0;
    let rafId = 0;

    const tick = () => {
      rafId = requestAnimationFrame(tick);

      const worker = workerRef.current;
      if (!worker) return;

      const { buffers, writeIndex, samplesInBuffer, numChannels, bufferSize } = eegData;
      const wi = writeIndex.current;
      const lastWi = lastWriteIdxRef.current;

      // Compute how many new samples arrived since last check (handles wrap)
      if (wi !== lastWi) {
        const delta = wi >= lastWi
          ? wi - lastWi
          : bufferSize - lastWi + wi;
        pendingSamplesRef.current += delta;
        lastWriteIdxRef.current = wi;
      }

      // Only evaluate when EVAL_STRIDE new samples have arrived
      if (pendingSamplesRef.current < EVAL_STRIDE) return;
      if (samplesInBuffer.current < FFT_SIZE) return;

      pendingSamplesRef.current = 0;

      // Lazily grow the pre-allocated buffer pool to match numChannels
      const pool = extractBufsRef.current;
      while (pool.length < numChannels) pool.push(new Float64Array(FFT_SIZE));

      // Copy last FFT_SIZE samples per channel into reusable buffers
      const channelData: Float64Array[] = [];
      for (let ch = 0; ch < numChannels; ch++) {
        const buf = buffers.current[ch];
        const bLen = buf.length;
        const curWi = writeIndex.current;
        const tmp = pool[ch];
        const start = (curWi - FFT_SIZE + bLen) % bLen;
        for (let i = 0; i < FFT_SIZE; i++) {
          tmp[i] = buf[(start + i) % bLen];
        }
        channelData.push(tmp);
      }

      const startFrame = Math.max(0, samplesInBuffer.current - FFT_SIZE);

      worker.postMessage({
        type: "analyse",
        channelData,
        startFrame,
        sampleRate: SAMPLE_RATE,
      });
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [enabled, eegData]);

  // ── Detector config mutations ────────────────────────────────────────

  const setDetectorEnabled = useCallback((type: string, en: boolean) => {
    setDetectors((prev) =>
      prev.map((d) => (d.type === type ? { ...d, enabled: en } : d)),
    );
  }, []);

  const setDetectorSensitivity = useCallback((type: string, sensitivity: number) => {
    setDetectors((prev) =>
      prev.map((d) => (d.type === type ? { ...d, sensitivity } : d)),
    );
  }, []);

  const resetDetectors = useCallback(() => {
    setDetectors(DEFAULT_DETECTORS.map((d) => ({ ...d })));
  }, []);

  const clearEvents = useCallback(() => {
    setEvents([]);
    candidateBufferRef.current = [];
  }, []);

  // ── Replay scanning ─────────────────────────────────────────────────
  const scanRecordingFn = useCallback(
    (channelData: Float64Array[], totalFrames: number): Promise<EEGEvent[]> => {
      return new Promise((resolve) => {
        const worker = workerRef.current;
        if (!worker) {
          // Fallback: run on main thread
          const candidates = scanRecording(detectorsRef.current, channelData, totalFrames, SAMPLE_RATE);
          const evts = mergeCandidates(candidates, detectorsRef.current);
          setEvents(evts);
          resolve(evts);
          return;
        }

        setScanning(true);
        scanResolveRef.current = resolve;
        worker.postMessage({
          type: "scan",
          channelData,
          totalFrames,
          sampleRate: SAMPLE_RATE,
        });
      });
    },
    [],
  );

  return {
    events,
    detectors,
    setDetectorEnabled,
    setDetectorSensitivity,
    resetDetectors,
    clearEvents,
    scanRecording: scanRecordingFn,
    setEvents,
    scanning,
  };
}
