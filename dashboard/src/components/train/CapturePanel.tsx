import { useState, useCallback, useEffect, useRef } from "react";
import type { UseTrainReturn } from "../../hooks/useTrain";
import { NUM_CHANNELS, SAMPLE_RATE } from "../../types";

interface Props {
  train: UseTrainReturn;
}

export default function CapturePanel({ train }: Props) {
  const {
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
  } = train;

  const [capturing, setCapturing] = useState<number | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Countdown → capture flow
  const startCapture = useCallback(
    (classId: number) => {
      setCapturing(classId);
      setCountdown(3);

      let count = 3;
      const tick = () => {
        count--;
        if (count > 0) {
          setCountdown(count);
          timerRef.current = setTimeout(tick, 1000);
        } else {
          setCountdown(null);
          // Record for epochDuration seconds then capture
          timerRef.current = setTimeout(() => {
            captureEpoch(classId);
            setCapturing(null);
          }, epochDuration * 1000);
        }
      };
      timerRef.current = setTimeout(tick, 1000);
    },
    [captureEpoch, epochDuration]
  );

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const toggleChannel = (ch: number) => {
    setSelectedChannels(
      selectedChannels.includes(ch)
        ? selectedChannels.filter((c) => c !== ch)
        : [...selectedChannels, ch].sort((a, b) => a - b)
    );
  };

  const totalEpochs = classes.reduce((s, c) => s + c.epochs.length, 0);

  return (
    <div className="train-capture">
      {/* Settings row */}
      <div className="tc-settings">
        <div className="tc-setting">
          <label>Epoch duration</label>
          <select
            value={epochDuration}
            onChange={(e) => setEpochDuration(parseFloat(e.target.value))}
          >
            <option value={1}>1 s</option>
            <option value={2}>2 s</option>
            <option value={4}>4 s</option>
          </select>
        </div>
        <div className="tc-setting">
          <label>
            Channels ({selectedChannels.length}/{NUM_CHANNELS})
          </label>
          <div className="tc-ch-grid">
            {Array.from({ length: NUM_CHANNELS }, (_, i) => (
              <button
                key={i}
                className={`tc-ch${selectedChannels.includes(i) ? " on" : ""}`}
                onClick={() => toggleChannel(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Classes */}
      <div className="tc-classes">
        <div className="tc-classes-header">
          <h3>Classes ({classes.length})</h3>
          <div className="tc-classes-actions">
            <button
              className="btn btn-sm"
              onClick={addClass}
              disabled={classes.length >= 6}
            >
              + Add
            </button>
            <button className="btn btn-sm" onClick={clearAll}>
              Clear all
            </button>
            <button className="btn btn-sm" onClick={() => save()}>
              Save
            </button>
            <button className="btn btn-sm" onClick={() => load()}>
              Load
            </button>
          </div>
        </div>

        {classes.map((cls) => (
          <div
            key={cls.id}
            className={`tc-class-card${capturing === cls.id ? " capturing" : ""}`}
          >
            <div
              className="tc-class-color"
              style={{ background: cls.color }}
            />
            <input
              className="tc-class-name"
              value={cls.name}
              onChange={(e) => renameClass(cls.id, e.target.value)}
              maxLength={20}
            />
            <span className="tc-class-count">{cls.epochs.length} epochs</span>
            <span className="tc-class-time">
              {(cls.epochs.length * epochDuration).toFixed(0)}s
            </span>

            <button
              className="btn btn-capture"
              onClick={() => startCapture(cls.id)}
              disabled={capturing !== null}
            >
              {capturing === cls.id
                ? countdown !== null
                  ? countdown
                  : "Recording..."
                : "Capture"}
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => clearClass(cls.id)}
            >
              Clear
            </button>
            {classes.length > 2 && (
              <button
                className="btn btn-sm btn-danger"
                onClick={() => removeClass(cls.id)}
              >
                x
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Dataset summary */}
      <div className="tc-summary">
        <span>{totalEpochs} total epochs</span>
        <span>{(totalEpochs * epochDuration).toFixed(0)}s of data</span>
        <span>
          {selectedChannels.length} ch x {epochDuration * SAMPLE_RATE} samples
        </span>
      </div>
    </div>
  );
}
