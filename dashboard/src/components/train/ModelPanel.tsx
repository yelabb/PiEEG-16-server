import { useState, useRef, useEffect } from "react";
import type { UseTrainReturn } from "../../hooks/useTrain";
import { DEFAULT_MODEL_CODE } from "../../hooks/useTrain";

interface Props {
  train: UseTrainReturn;
}

export default function ModelPanel({ train }: Props) {
  const {
    modelCode,
    setModelCode,
    modelReady,
    training,
    trainMetrics,
    trainError,
    buildAndTrain,
    classes,
  } = train;

  const [numEpochs, setNumEpochs] = useState(50);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Draw loss/accuracy chart
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv || trainMetrics.length === 0) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const w = cv.clientWidth;
    const h = cv.clientHeight;
    cv.width = w * dpr;
    cv.height = h * dpr;
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, w, h);

    const pad = { l: 40, r: 12, t: 12, b: 24 };
    const cw = w - pad.l - pad.r;
    const ch = h - pad.t - pad.b;

    // Grid
    ctx.strokeStyle = "rgba(255,255,255,0.06)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = pad.t + (ch * i) / 4;
      ctx.beginPath();
      ctx.moveTo(pad.l, y);
      ctx.lineTo(pad.l + cw, y);
      ctx.stroke();
    }

    const maxEpoch = trainMetrics.length;
    const xStep = cw / Math.max(maxEpoch - 1, 1);

    // Loss line
    const maxLoss = Math.max(...trainMetrics.map((m) => m.loss), 0.01);
    ctx.strokeStyle = "#ee4444";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    trainMetrics.forEach((m, i) => {
      const x = pad.l + i * xStep;
      const y = pad.t + ch - (m.loss / maxLoss) * ch;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Accuracy line
    ctx.strokeStyle = "#00c853";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    trainMetrics.forEach((m, i) => {
      const x = pad.l + i * xStep;
      const y = pad.t + ch - (m.accuracy ?? 0) * ch;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Labels
    ctx.fillStyle = "#a1a1a1";
    ctx.font = "10px var(--mono)";
    ctx.textAlign = "right";
    ctx.fillText("1.0", pad.l - 4, pad.t + 4);
    ctx.fillText("0.0", pad.l - 4, pad.t + ch + 4);
    ctx.textAlign = "center";
    ctx.fillText("Epoch", pad.l + cw / 2, pad.t + ch + 18);

    // Legend
    ctx.textAlign = "right";
    ctx.fillStyle = "#ee4444";
    ctx.fillText("loss", w - pad.r - 40, pad.t + 12);
    ctx.fillStyle = "#00c853";
    ctx.fillText("acc", w - pad.r, pad.t + 12);
  }, [trainMetrics]);

  const totalEpochs = classes.reduce((s, c) => s + c.epochs.length, 0);
  const lastMetric = trainMetrics.length > 0 ? trainMetrics[trainMetrics.length - 1] : null;

  return (
    <div className="train-model">
      {/* Code editor */}
      <div className="tm-editor-wrap">
        <div className="tm-editor-header">
          <span>Model Architecture (TF.js)</span>
          <button
            className="btn btn-sm"
            onClick={() => setModelCode(DEFAULT_MODEL_CODE)}
          >
            Reset
          </button>
        </div>
        <textarea
          className="tm-editor"
          value={modelCode}
          onChange={(e) => setModelCode(e.target.value)}
          spellCheck={false}
          autoCapitalize="off"
          autoCorrect="off"
        />
      </div>

      {/* Train controls */}
      <div className="tm-controls">
        <div className="tm-setting">
          <label>Training epochs</label>
          <input
            type="number"
            value={numEpochs}
            min={5}
            max={500}
            step={5}
            onChange={(e) => setNumEpochs(parseInt(e.target.value) || 50)}
          />
        </div>
        <button
          className={`btn btn-train${training ? " training" : ""}`}
          onClick={() => buildAndTrain(numEpochs)}
          disabled={training || totalEpochs < classes.length * 2}
        >
          {training
            ? `Training ${trainMetrics.length}/${numEpochs}...`
            : modelReady
            ? "Re-train"
            : "Build & Train"}
        </button>
        {modelReady && (
          <span className="tm-ready-badge">Model ready</span>
        )}
      </div>

      {/* Error */}
      {trainError && <div className="tm-error">{trainError}</div>}

      {/* Metrics chart */}
      {trainMetrics.length > 0 && (
        <div className="tm-chart-wrap">
          <canvas ref={canvasRef} className="tm-chart" />
          {lastMetric && (
            <div className="tm-metric-summary">
              <span>
                Loss: <strong>{lastMetric.loss.toFixed(4)}</strong>
              </span>
              <span>
                Accuracy:{" "}
                <strong>
                  {((lastMetric.accuracy ?? 0) * 100).toFixed(1)}%
                </strong>
              </span>
              <span>Epochs: {trainMetrics.length}</span>
            </div>
          )}
        </div>
      )}

      {/* Hints */}
      {totalEpochs < classes.length * 2 && (
        <div className="tm-hint">
          Capture at least 2 epochs per class before training.
          Currently: {totalEpochs} total.
        </div>
      )}
    </div>
  );
}
