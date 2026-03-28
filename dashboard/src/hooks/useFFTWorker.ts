import { useEffect, useRef } from "react";
import type { FftEngine } from "../lib/fftEngine";
import type { FFTResult, WorkerOutMessage } from "../types";

const FFT_SIZE = 256;

export function useFFTWorker(fallbackFFTEngine: FftEngine) {
  const workerRef = useRef<Worker | null>(null);
  const pendingRef = useRef<Map<number, (result: FFTResult | null) => void>>(new Map());
  const requestIdRef = useRef(0);
  const readyRef = useRef(false);

  useEffect(() => {
    if (typeof Worker === "undefined") {
      return;
    }

    try {
      const worker = new Worker(
        new URL("../workers/fftWorker.ts", import.meta.url),
        { type: "module" }
      );

      worker.onmessage = (event: MessageEvent<WorkerOutMessage>) => {
        const msg = event.data;
        if (msg.type === "ready") {
          readyRef.current = true;
        } else if (msg.type === "analyseResult" && pendingRef.current.has(msg.id)) {
          const callback = pendingRef.current.get(msg.id)!;
          callback(msg.result);
          pendingRef.current.delete(msg.id);
        }
      };

      worker.onerror = (err) => {
        console.warn("FFT Worker error, falling back to main thread:", err);
        readyRef.current = false;
      };

      workerRef.current = worker;
      worker.postMessage({ type: "init" });
    } catch (e) {
      console.warn("Could not create FFT worker:", e);
    }

    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
    };
  }, []);

  const analyseAsync = (samples: Float32Array | Float64Array | number[], callback: (result: FFTResult | null) => void) => {
    if (!readyRef.current || !workerRef.current) {
      const result = fallbackFFTEngine.analyse(samples, 0);
      callback(result);
      return;
    }

    const id = ++requestIdRef.current;
    pendingRef.current.set(id, callback);
    workerRef.current.postMessage({
      type: "analyse",
      data: { samples, id },
    });
  };

  const analyseRingAsync = (ringBuf: Float32Array, writeIndex: number, samplesInBuf: number, callback: (result: FFTResult | null) => void) => {
    if (!readyRef.current || !workerRef.current) {
      const result = fallbackFFTEngine.analyseRing(ringBuf, writeIndex, samplesInBuf);
      callback(result);
      return;
    }

    const id = ++requestIdRef.current;
    pendingRef.current.set(id, callback);
    workerRef.current.postMessage({
      type: "analyseRing",
      data: { ringBuf, writeIndex, samplesInBuf, id },
    });
  };

  return {
    analyseAsync,
    analyseRingAsync,
    isReady: readyRef.current,
  };
}
