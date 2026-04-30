// FFT Web Worker — runs spectral analysis off the main thread
import { FftEngine } from "../lib/fftEngine";
import type { WorkerInMessage, WorkerOutMessage } from "../types";

const FFT_SIZE = 256;
const DEFAULT_SAMPLE_RATE = 250;

let fftEngine: FftEngine | null = null;

// Worker global — DOM lib doesn't expose DedicatedWorkerGlobalScope but
// `self` is typed as `Window & typeof globalThis` which is close enough.
// We use `onmessage` / `postMessage` directly.
const ctx = self as unknown as {
  onmessage: ((ev: MessageEvent<WorkerInMessage>) => void) | null;
  postMessage(msg: WorkerOutMessage): void;
};

ctx.onmessage = (event: MessageEvent<WorkerInMessage>) => {
  const { type } = event.data;

  if (type === "init") {
    // Sample rate may change between init calls (e.g. user reconnects from
    // a 250 Hz PiEEG to a 500 Hz IronBCI-32). We rebuild the FftEngine
    // every time `init` arrives so band-power maths stays correct.
    const rate = event.data.sampleRate ?? DEFAULT_SAMPLE_RATE;
    fftEngine = new FftEngine(FFT_SIZE, rate);
    ctx.postMessage({ type: "ready" } satisfies WorkerOutMessage);
    return;
  }

  if (type === "analyse" && fftEngine) {
    const { samples, id } = event.data.data;
    const result = fftEngine.analyse(samples, 0);
    ctx.postMessage({
      type: "analyseResult",
      id,
      result,
    } satisfies WorkerOutMessage);
  }

  if (type === "analyseRing" && fftEngine) {
    const { ringBuf, writeIndex, samplesInBuf, id } = event.data.data;
    const result = fftEngine.analyseRing(ringBuf, writeIndex, samplesInBuf);
    ctx.postMessage({
      type: "analyseResult",
      id,
      result,
    } satisfies WorkerOutMessage);
  }
};
