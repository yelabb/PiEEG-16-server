import type { UseTrainReturn } from "../../hooks/useTrain";
import type { ActionKind } from "../../types";

interface Props {
  train: UseTrainReturn;
}

const ACTION_KINDS: { value: ActionKind; label: string }[] = [
  { value: "log", label: "Console log" },
  { value: "key", label: "Key event" },
  { value: "websocket", label: "WS event" },
  { value: "osc", label: "OSC message" },
];

export default function ActionsPanel({ train }: Props) {
  const {
    classes,
    actions,
    setActions,
    setAction,
    threshold,
    setThreshold,
    modelReady,
    running,
    prediction,
    startInference,
    stopInference,
  } = train;

  // Ensure actions array matches classes
  if (actions.length !== classes.length) {
    setActions(
      classes.map((c) => {
        const existing = actions.find((a) => a.classId === c.id);
        return (
          existing ?? {
            classId: c.id,
            kind: "log" as ActionKind,
            value: c.name,
            enabled: true,
          }
        );
      })
    );
  }

  return (
    <div className="train-actions">
      {/* Run controls */}
      <div className="ta-run-bar">
        <button
          className={`btn btn-run${running ? " running" : ""}`}
          onClick={running ? stopInference : startInference}
          disabled={!modelReady}
        >
          {running ? "Stop inference" : "Run inference"}
        </button>
        <div className="ta-threshold">
          <label>
            Threshold: {(threshold * 100).toFixed(0)}%
          </label>
          <input
            type="range"
            min={0.3}
            max={0.99}
            step={0.01}
            value={threshold}
            onChange={(e) => setThreshold(parseFloat(e.target.value))}
          />
        </div>
        {!modelReady && (
          <span className="ta-hint">Train a model first</span>
        )}
      </div>

      {/* Live prediction */}
      {running && prediction && (
        <div className="ta-prediction">
          <div className="ta-pred-label">
            {classes.find((c) => c.id === prediction.classId)?.name ?? "?"}
            <span
              className="ta-pred-conf"
              style={{
                color:
                  prediction.confidence >= threshold
                    ? "#00c853"
                    : "#a1a1a1",
              }}
            >
              {(prediction.confidence * 100).toFixed(1)}%
            </span>
          </div>
          <div className="ta-pred-bars">
            {classes.map((cls, i) => (
              <div key={cls.id} className="ta-bar-row">
                <span className="ta-bar-name">{cls.name}</span>
                <div className="ta-bar-track">
                  <div
                    className="ta-bar-fill"
                    style={{
                      width: `${(prediction.allConfidences[i] ?? 0) * 100}%`,
                      background: cls.color,
                      opacity:
                        prediction.allConfidences[i] >= threshold ? 1 : 0.4,
                    }}
                  />
                </div>
                <span className="ta-bar-pct">
                  {((prediction.allConfidences[i] ?? 0) * 100).toFixed(0)}%
                </span>
              </div>
            ))}
          </div>
          <div className="ta-threshold-line" style={{ left: `${threshold * 100}%` }} />
        </div>
      )}

      {/* Action mapping */}
      <div className="ta-mapping">
        <h3>Action Mapping</h3>
        {classes.map((cls) => {
          const action = actions.find((a) => a.classId === cls.id);
          if (!action) return null;
          return (
            <div key={cls.id} className="ta-action-row">
              <div
                className="ta-action-color"
                style={{ background: cls.color }}
              />
              <span className="ta-action-class">{cls.name}</span>
              <select
                className="ta-action-kind"
                value={action.kind}
                onChange={(e) =>
                  setAction(cls.id, {
                    kind: e.target.value as ActionKind,
                  })
                }
              >
                {ACTION_KINDS.map((k) => (
                  <option key={k.value} value={k.value}>
                    {k.label}
                  </option>
                ))}
              </select>
              <input
                className="ta-action-value"
                value={action.value}
                onChange={(e) =>
                  setAction(cls.id, { value: e.target.value })
                }
                placeholder={
                  action.kind === "key"
                    ? "e.g. ArrowLeft"
                    : action.kind === "osc"
                    ? "/eeg/class"
                    : action.kind === "websocket"
                    ? "message payload"
                    : "label"
                }
              />
              <label className="ta-action-toggle">
                <input
                  type="checkbox"
                  checked={action.enabled}
                  onChange={(e) =>
                    setAction(cls.id, { enabled: e.target.checked })
                  }
                />
                <span>On</span>
              </label>
            </div>
          );
        })}
      </div>

      {/* Event log hint */}
      <div className="ta-log-hint">
        Actions fire when confidence exceeds threshold.
        <br />
        <code>key</code> dispatches a browser KeyboardEvent.{" "}
        <code>websocket</code> / <code>osc</code> emit a{" "}
        <code>bci-action</code> / <code>bci-osc</code> CustomEvent on{" "}
        <code>window</code>.
      </div>
    </div>
  );
}
