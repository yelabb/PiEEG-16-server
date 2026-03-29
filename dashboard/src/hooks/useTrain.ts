import { useState, useRef, useCallback } from "react";
import type {
  EEGData,
  TrainClass,
  TrainDataset,
  TrainMetrics,
  TrainAction,
  Prediction,
  ActionKind,
} from "../types";
import { NUM_CHANNELS, SAMPLE_RATE } from "../types";

// ── Default class palette ────────────────────────────────────────────────

const CLASS_COLORS = [
  "#3291ff", "#00c853", "#f5a623", "#ee4444", "#bc8cff", "#39d2c0",
];

// ── Default model code (TF.js sequential) ────────────────────────────────

export const DEFAULT_MODEL_CODE = `// Build a TF.js Sequential model for EEG classification.
// Available variables:
//   tf         – the TensorFlow.js library
//   numClasses – number of target classes
//   inputShape – [channels, epochSamples]
//
// Return: a compiled tf.Sequential model.

const model = tf.sequential();

model.add(tf.layers.conv1d({
  inputShape: [inputShape[1], inputShape[0]],  // [time, channels]
  filters: 16,
  kernelSize: 5,
  activation: "relu",
}));
model.add(tf.layers.maxPooling1d({ poolSize: 2 }));
model.add(tf.layers.conv1d({ filters: 32, kernelSize: 3, activation: "relu" }));
model.add(tf.layers.globalAveragePooling1d());
model.add(tf.layers.dropout({ rate: 0.3 }));
model.add(tf.layers.dense({ units: numClasses, activation: "softmax" }));

model.compile({
  optimizer: tf.train.adam(0.001),
  loss: "categoricalCrossentropy",
  metrics: ["accuracy"],
});

return model;
`;

// ── IndexedDB persistence helpers ────────────────────────────────────────

const DB_NAME = "pieeg_train";
const DB_VERSION = 1;
const STORE_DATASETS = "datasets";
const STORE_MODELS = "models";

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_DATASETS))
        db.createObjectStore(STORE_DATASETS, { keyPath: "id", autoIncrement: true });
      if (!db.objectStoreNames.contains(STORE_MODELS))
        db.createObjectStore(STORE_MODELS, { keyPath: "id", autoIncrement: true });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function saveDataset(dataset: TrainDataset): Promise<void> {
  const db = await openDB();
  const tx = db.transaction(STORE_DATASETS, "readwrite");
  // Serialize Float32Arrays
  const serialized = {
    ...dataset,
    classes: dataset.classes.map((c) => ({
      ...c,
      epochs: c.epochs.map((e) => Array.from(e)),
    })),
    savedAt: Date.now(),
  };
  tx.objectStore(STORE_DATASETS).put(serialized);
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function loadLatestDataset(): Promise<TrainDataset | null> {
  const db = await openDB();
  const tx = db.transaction(STORE_DATASETS, "readonly");
  const store = tx.objectStore(STORE_DATASETS);
  return new Promise((resolve) => {
    const req = store.openCursor(null, "prev");
    req.onsuccess = () => {
      const cursor = req.result;
      if (cursor) {
        const raw = cursor.value as {
          classes: { id: number; name: string; color: string; epochs: number[][] }[];
          channels: number[];
          epochSamples: number;
          sampleRate: number;
        };
        resolve({
          ...raw,
          classes: raw.classes.map((c) => ({
            ...c,
            epochs: c.epochs.map((e) => new Float32Array(e)),
          })),
        });
      } else {
        resolve(null);
      }
    };
    req.onerror = () => resolve(null);
  });
}

// ── Hook ──────────────────────────────────────────────────────────────────

export function useTrain(eegData: EEGData) {
  // Dataset state
  const [classes, setClasses] = useState<TrainClass[]>([
    { id: 0, name: "Left", color: CLASS_COLORS[0], epochs: [] },
    { id: 1, name: "Right", color: CLASS_COLORS[1], epochs: [] },
    { id: 2, name: "Rest", color: CLASS_COLORS[2], epochs: [] },
  ]);
  const [selectedChannels, setSelectedChannels] = useState<number[]>(
    Array.from({ length: NUM_CHANNELS }, (_, i) => i)
  );
  const [epochDuration, setEpochDuration] = useState(2); // seconds

  // Model state
  const [modelCode, setModelCode] = useState(DEFAULT_MODEL_CODE);
  const modelRef = useRef<unknown>(null);
  const [modelReady, setModelReady] = useState(false);
  const [training, setTraining] = useState(false);
  const [trainMetrics, setTrainMetrics] = useState<TrainMetrics[]>([]);
  const [trainError, setTrainError] = useState<string | null>(null);

  // Inference state
  const [running, setRunning] = useState(false);
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const inferIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Actions state
  const [actions, setActions] = useState<TrainAction[]>([]);
  const [threshold, setThreshold] = useState(0.6);

  // ── Capture helpers ──────────────────────────────────────────────────

  const captureEpoch = useCallback(
    (classId: number) => {
      const epochSamples = epochDuration * SAMPLE_RATE;
      const nCh = selectedChannels.length;
      const epoch = new Float32Array(nCh * epochSamples);
      const { buffers, writeIndex, samplesInBuffer, bufferSize } = eegData;

      const available = samplesInBuffer.current;
      if (available < epochSamples) return; // not enough data yet

      for (let ci = 0; ci < nCh; ci++) {
        const ch = selectedChannels[ci];
        const buf = buffers.current[ch];
        for (let s = 0; s < epochSamples; s++) {
          const idx = (writeIndex.current - epochSamples + s + bufferSize) % bufferSize;
          epoch[ci * epochSamples + s] = buf[idx];
        }
      }

      setClasses((prev) =>
        prev.map((c) =>
          c.id === classId ? { ...c, epochs: [...c.epochs, epoch] } : c
        )
      );
    },
    [eegData, epochDuration, selectedChannels]
  );

  const clearClass = useCallback((classId: number) => {
    setClasses((prev) =>
      prev.map((c) => (c.id === classId ? { ...c, epochs: [] } : c))
    );
  }, []);

  const clearAll = useCallback(() => {
    setClasses((prev) => prev.map((c) => ({ ...c, epochs: [] })));
  }, []);

  const addClass = useCallback(() => {
    setClasses((prev) => {
      const id = prev.length;
      return [
        ...prev,
        {
          id,
          name: `Class ${id + 1}`,
          color: CLASS_COLORS[id % CLASS_COLORS.length],
          epochs: [],
        },
      ];
    });
  }, []);

  const removeClass = useCallback((classId: number) => {
    setClasses((prev) => prev.filter((c) => c.id !== classId));
  }, []);

  const renameClass = useCallback((classId: number, name: string) => {
    setClasses((prev) =>
      prev.map((c) => (c.id === classId ? { ...c, name } : c))
    );
  }, []);

  // ── Dataset persistence ─────────────────────────────────────────────

  const save = useCallback(async () => {
    const dataset: TrainDataset = {
      classes,
      channels: selectedChannels,
      epochSamples: epochDuration * SAMPLE_RATE,
      sampleRate: SAMPLE_RATE,
    };
    await saveDataset(dataset);
  }, [classes, selectedChannels, epochDuration]);

  const load = useCallback(async () => {
    const ds = await loadLatestDataset();
    if (ds) {
      setClasses(ds.classes);
      setSelectedChannels(ds.channels);
      setEpochDuration(ds.epochSamples / ds.sampleRate);
    }
  }, []);

  // ── Training ────────────────────────────────────────────────────────

  const buildAndTrain = useCallback(
    async (epochs = 50) => {
      setTrainError(null);
      setTrainMetrics([]);

      // Lazy-load TF.js only when needed
      const tf = await import("@tensorflow/tfjs");

      const numClasses = classes.length;
      const epochSamples = epochDuration * SAMPLE_RATE;
      const nCh = selectedChannels.length;

      // Validate
      const totalEpochs = classes.reduce((s, c) => s + c.epochs.length, 0);
      if (totalEpochs < numClasses * 2) {
        setTrainError(`Need at least 2 epochs per class (have ${totalEpochs} total)`);
        return;
      }

      try {
        setTraining(true);

        // Build model from user code
        const inputShape = [nCh, epochSamples];
        const buildFn = new Function("tf", "numClasses", "inputShape", modelCode);
        const model = buildFn(tf, numClasses, inputShape);
        modelRef.current = model;

        // Prepare dataset: reshape to [batch, time, channels]
        const xs: number[][][] = [];
        const ys: number[] = [];
        for (let ci = 0; ci < classes.length; ci++) {
          for (const epoch of classes[ci].epochs) {
            const sample: number[][] = [];
            for (let t = 0; t < epochSamples; t++) {
              const row: number[] = [];
              for (let ch = 0; ch < nCh; ch++) {
                row.push(epoch[ch * epochSamples + t]);
              }
              sample.push(row);
            }
            xs.push(sample);
            ys.push(ci);
          }
        }

        const xTensor = tf.tensor3d(xs);
        const yTensor = tf.oneHot(tf.tensor1d(ys, "int32"), numClasses);

        // Train
        await model.fit(xTensor, yTensor, {
          epochs,
          validationSplit: 0.2,
          shuffle: true,
          callbacks: {
            onEpochEnd: (epoch: number, logs: { loss: number; acc: number }) => {
              setTrainMetrics((prev) => [
                ...prev,
                { epoch, loss: logs.loss, accuracy: logs.acc },
              ]);
            },
          },
        });

        xTensor.dispose();
        yTensor.dispose();

        setModelReady(true);
        // Initialise actions for each class if empty
        setActions((prev) =>
          prev.length === 0
            ? classes.map((c) => ({
                classId: c.id,
                kind: "log" as ActionKind,
                value: c.name,
                enabled: true,
              }))
            : prev
        );
      } catch (err) {
        setTrainError(String(err));
      } finally {
        setTraining(false);
      }
    },
    [classes, epochDuration, selectedChannels, modelCode]
  );

  // ── Inference ───────────────────────────────────────────────────────

  const startInference = useCallback(async () => {
    if (!modelReady || !modelRef.current) return;
    const tf = await import("@tensorflow/tfjs");
    const model = modelRef.current as { predict: (x: unknown) => { dataSync: () => Float32Array; dispose: () => void } };
    setRunning(true);

    const epochSamples = epochDuration * SAMPLE_RATE;
    const nCh = selectedChannels.length;

    inferIntervalRef.current = setInterval(() => {
      const { buffers, writeIndex, samplesInBuffer, bufferSize } = eegData;
      if (samplesInBuffer.current < epochSamples) return;

      const sample: number[][] = [];
      for (let t = 0; t < epochSamples; t++) {
        const row: number[] = [];
        for (let ci = 0; ci < nCh; ci++) {
          const ch = selectedChannels[ci];
          const idx = (writeIndex.current - epochSamples + t + bufferSize) % bufferSize;
          row.push(buffers.current[ch][idx]);
        }
        sample.push(row);
      }

      const xTensor = tf.tensor3d([sample]);
      const pred = model.predict(xTensor) as { dataSync: () => Float32Array; dispose: () => void };
      const probs = Array.from(pred.dataSync());
      xTensor.dispose();
      pred.dispose();

      let bestIdx = 0;
      for (let i = 1; i < probs.length; i++) {
        if (probs[i] > probs[bestIdx]) bestIdx = i;
      }

      const p: Prediction = {
        classId: bestIdx,
        confidence: probs[bestIdx],
        allConfidences: probs,
      };
      setPrediction(p);

      // Fire actions if above threshold
      if (p.confidence >= threshold) {
        const act = actions.find(
          (a) => a.classId === bestIdx && a.enabled
        );
        if (act) fireAction(act, p);
      }
    }, 250); // 4 Hz inference
  }, [
    modelReady,
    epochDuration,
    selectedChannels,
    eegData,
    threshold,
    actions,
  ]);

  const stopInference = useCallback(() => {
    if (inferIntervalRef.current) {
      clearInterval(inferIntervalRef.current);
      inferIntervalRef.current = null;
    }
    setRunning(false);
    setPrediction(null);
  }, []);

  // ── Action dispatch ─────────────────────────────────────────────────

  function fireAction(action: TrainAction, pred: Prediction) {
    switch (action.kind) {
      case "log":
        console.log(
          `[BCI] ${action.value} (${(pred.confidence * 100).toFixed(1)}%)`
        );
        break;
      case "key":
        window.dispatchEvent(
          new KeyboardEvent("keydown", { key: action.value })
        );
        break;
      case "websocket":
        // User can provide ws://... messages – dispatched as custom event
        window.dispatchEvent(
          new CustomEvent("bci-action", {
            detail: { class: action.value, confidence: pred.confidence },
          })
        );
        break;
      case "osc":
        window.dispatchEvent(
          new CustomEvent("bci-osc", {
            detail: { path: action.value, confidence: pred.confidence },
          })
        );
        break;
    }
  }

  const setAction = useCallback(
    (classId: number, updates: Partial<TrainAction>) => {
      setActions((prev) =>
        prev.map((a) => (a.classId === classId ? { ...a, ...updates } : a))
      );
    },
    []
  );

  return {
    // Dataset
    classes,
    selectedChannels,
    setSelectedChannels,
    epochDuration,
    setEpochDuration,
    captureEpoch,
    clearClass,
    clearAll,
    addClass,
    removeClass,
    renameClass,
    save,
    load,
    // Model
    modelCode,
    setModelCode,
    modelReady,
    training,
    trainMetrics,
    trainError,
    buildAndTrain,
    // Inference
    running,
    prediction,
    startInference,
    stopInference,
    // Actions
    actions,
    setActions,
    setAction,
    threshold,
    setThreshold,
  };
}

export type UseTrainReturn = ReturnType<typeof useTrain>;
