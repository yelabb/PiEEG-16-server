import { useState, useEffect, useRef } from "react";
import type { EEGData } from "../types";

const STORAGE_KEY = "pieeg_ch_mismatch_dismissed";
const CHECK_DELAY_MS = 3000; // wait 3s of data before checking
const VARIANCE_THRESHOLD = 0.5; // µV² — channels below this are "flat"

interface Props {
  numChannels: number;
  eegData: EEGData;
  connected: boolean;
}

/**
 * Detects when a PiEEG-8 user accidentally launched with 16 channels.
 * After a few seconds of data, checks if channels 9–16 are flat / dead.
 */
export default function ChannelMismatchBanner({ numChannels, eegData, connected }: Props) {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) === "true"
  );
  const checked = useRef(false);

  useEffect(() => {
    if (dismissed || numChannels <= 8 || !connected) return;

    checked.current = false;
    const timer = setTimeout(() => {
      if (checked.current) return;
      checked.current = true;

      const bufs = eegData.buffers.current;
      const count = eegData.samplesInBuffer.current;
      if (!bufs || count < 250) return; // need at least 1s of data

      // Check variance of channels 9–16 (indices 8–15)
      let flatCount = 0;
      for (let ch = 8; ch < bufs.length && ch < 16; ch++) {
        const buf = bufs[ch];
        if (!buf || buf.length === 0) { flatCount++; continue; }

        const n = Math.min(count, buf.length);
        let sum = 0;
        let sumSq = 0;
        for (let i = 0; i < n; i++) {
          sum += buf[i];
          sumSq += buf[i] * buf[i];
        }
        const mean = sum / n;
        const variance = sumSq / n - mean * mean;
        if (variance < VARIANCE_THRESHOLD) flatCount++;
      }

      // If most upper channels are flat, likely a PiEEG-8
      if (flatCount >= 6) setShow(true);
    }, CHECK_DELAY_MS);

    return () => clearTimeout(timer);
  }, [numChannels, connected, dismissed]);

  function dismiss(remember: boolean) {
    setShow(false);
    setDismissed(true);
    if (remember) sessionStorage.setItem(STORAGE_KEY, "true");
  }

  if (!show || dismissed) return null;

  const isWin = /win/i.test(navigator.platform);
  const cmd = isWin ? "pieeg-server.cmd --device pieeg8" : "pieeg-server --device pieeg8";

  return (
    <div className="ch-mismatch-banner">
      <div className="ch-mismatch-content">
        <span className="ch-mismatch-icon">⚠️</span>
        <div className="ch-mismatch-text">
          <strong>PiEEG-8 detected</strong> — Server is running with 16 channels,
          but channels 9–16 appear inactive. If you have a PiEEG-8 board, restart
          with:
          <pre className="ch-mismatch-cmd"><code>{cmd}</code></pre>
        </div>
        <div className="ch-mismatch-actions">
          <button className="btn ch-mismatch-ok" onClick={() => dismiss(true)}>
            I have 16 channels
          </button>
          <button className="ch-mismatch-dismiss" onClick={() => dismiss(false)} title="Dismiss">
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
