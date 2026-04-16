import { useRef, useEffect, useState, memo, useCallback } from "react";
import type { EEGData } from "../types";
import { SAMPLE_RATE, TRACE_COLORS } from "../types";

const UPDATE_INTERVAL_MS = 500;

interface ChannelStatsRow {
  ch: number;
  mean: number;
  rms: number;
  pp: number;
  min: number;
  max: number;
  std: number;
  variance: number;
  skewness: number;
  kurtosis: number;
  zeroCross: number;
}

type SortKey = keyof ChannelStatsRow;

function computeStats(
  buf: Float32Array, count: number, writeIndex: number, bufferSize: number
): ChannelStatsRow {
  const statCount = Math.min(count, SAMPLE_RATE * 2); // 2-second window

  let sum = 0;
  let sumSq = 0;
  let min = Infinity;
  let max = -Infinity;
  let zeroCross = 0;
  let prev: number | null = null;

  for (let i = count - statCount; i < count; i++) {
    const idx = (writeIndex - count + i + bufferSize) % bufferSize;
    const v = buf[idx];
    sum += v;
    sumSq += v * v;
    if (v < min) min = v;
    if (v > max) max = v;
    if (prev !== null && ((prev >= 0 && v < 0) || (prev < 0 && v >= 0))) zeroCross++;
    prev = v;
  }

  const mean = statCount > 0 ? sum / statCount : 0;
  const variance = statCount > 1 ? (sumSq / statCount - mean * mean) : 0;
  const std = Math.sqrt(Math.max(0, variance));
  const rms = Math.sqrt(sumSq / Math.max(1, statCount));
  const pp = max - min;

  // Higher moments (skewness, kurtosis) — centered
  let sumCube = 0;
  let sumQuad = 0;
  for (let i = count - statCount; i < count; i++) {
    const idx = (writeIndex - count + i + bufferSize) % bufferSize;
    const d = buf[idx] - mean;
    const d2 = d * d;
    sumCube += d2 * d;
    sumQuad += d2 * d2;
  }
  const skewness = std > 1e-10 ? (sumCube / statCount) / (std * std * std) : 0;
  const kurtosis = std > 1e-10 ? (sumQuad / statCount) / (std * std * std * std) - 3 : 0;

  return {
    ch: 0,
    mean,
    rms,
    pp,
    min: min === Infinity ? 0 : min,
    max: max === -Infinity ? 0 : max,
    std,
    variance,
    skewness,
    kurtosis,
    zeroCross,
  };
}

interface StatsPanelProps {
  eegData: EEGData;
}

const StatsPanel = memo(function StatsPanel({ eegData }: StatsPanelProps) {
  const [rows, setRows] = useState<ChannelStatsRow[]>([]);
  const [sortKey, setSortKey] = useState<SortKey>("ch");
  const [sortAsc, setSortAsc] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval>>(undefined);

  // Periodic stats update
  useEffect(() => {
    function update() {
      const bufs = eegData.buffers.current;
      const wi = eegData.writeIndex.current;
      const count = eegData.samplesInBuffer.current;
      const bufSize = eegData.bufferSize;
      const nCh = eegData.numChannels;
      if (!bufs || count < 10) return;

      const newRows: ChannelStatsRow[] = [];
      for (let ch = 0; ch < nCh; ch++) {
        const stats = computeStats(bufs[ch], count, wi, bufSize);
        stats.ch = ch;
        newRows.push(stats);
      }
      setRows(newRows);
    }

    update();
    timerRef.current = setInterval(update, UPDATE_INTERVAL_MS);
    return () => clearInterval(timerRef.current);
  }, [eegData]);

  // Sort
  const handleSort = useCallback((key: SortKey) => {
    setSortKey((prev) => {
      if (prev === key) {
        setSortAsc((a) => !a);
        return key;
      }
      setSortAsc(true);
      return key;
    });
  }, []);

  const sorted = [...rows].sort((a, b) => {
    const av = a[sortKey];
    const bv = b[sortKey];
    return sortAsc ? (av as number) - (bv as number) : (bv as number) - (av as number);
  });

  // CSV export
  const downloadCSV = useCallback(() => {
    const headers = ["Channel", "Mean", "RMS", "Std", "Variance", "Peak-Peak", "Min", "Max", "Skewness", "Kurtosis", "Zero-Crossings"];
    const csvRows = [headers.join(",")];
    for (const r of sorted) {
      csvRows.push([
        `Ch ${r.ch + 1}`,
        r.mean.toFixed(4),
        r.rms.toFixed(4),
        r.std.toFixed(4),
        r.variance.toFixed(4),
        r.pp.toFixed(4),
        r.min.toFixed(4),
        r.max.toFixed(4),
        r.skewness.toFixed(4),
        r.kurtosis.toFixed(4),
        r.zeroCross.toString(),
      ].join(","));
    }
    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pieeg_stats_${new Date().toISOString().replace(/[:.]/g, "-")}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }, [sorted]);

  const columns: { key: SortKey; label: string; unit: string; precision: number }[] = [
    { key: "ch", label: "Ch", unit: "", precision: 0 },
    { key: "mean", label: "Mean", unit: "µV", precision: 2 },
    { key: "rms", label: "RMS", unit: "µV", precision: 2 },
    { key: "std", label: "Std", unit: "µV", precision: 2 },
    { key: "pp", label: "P-P", unit: "µV", precision: 1 },
    { key: "min", label: "Min", unit: "µV", precision: 1 },
    { key: "max", label: "Max", unit: "µV", precision: 1 },
    { key: "skewness", label: "Skew", unit: "", precision: 2 },
    { key: "kurtosis", label: "Kurt", unit: "", precision: 2 },
    { key: "zeroCross", label: "ZX", unit: "/2s", precision: 0 },
  ];

  return (
    <div className="stats-panel">
      <div className="stats-toolbar">
        <span className="stats-title">Signal Statistics</span>
        <span className="stats-meta">
          {eegData.numChannels} channels · {SAMPLE_RATE} Hz · 2s window
        </span>
        <button className="btn stats-btn-export" onClick={downloadCSV} title="Download stats as CSV">
          ⬇ CSV
        </button>
      </div>
      <div className="stats-table-wrap">
        <table className="stats-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key)}
                  className={sortKey === col.key ? "sorted" : ""}
                  title={col.unit ? `${col.label} (${col.unit})` : col.label}
                >
                  {col.label}
                  {sortKey === col.key && (
                    <span className="sort-arrow">{sortAsc ? " ▲" : " ▼"}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((row) => (
              <tr key={row.ch}>
                <td className="stats-ch-cell">
                  <span className="stats-ch-dot" style={{ background: TRACE_COLORS[row.ch] }} />
                  {row.ch + 1}
                </td>
                <td>{row.mean.toFixed(2)}</td>
                <td>{row.rms.toFixed(2)}</td>
                <td>{row.std.toFixed(2)}</td>
                <td>{row.pp.toFixed(1)}</td>
                <td>{row.min.toFixed(1)}</td>
                <td>{row.max.toFixed(1)}</td>
                <td>{row.skewness.toFixed(2)}</td>
                <td>{row.kurtosis.toFixed(2)}</td>
                <td>{row.zeroCross}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default StatsPanel;
