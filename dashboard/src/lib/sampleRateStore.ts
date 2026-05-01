// Runtime-mutable sample-rate store.
//
// The PiEEG-server sends the device's true sample rate in the WebSocket
// welcome message (`{"status": "connected", "sample_rate": 500, ...}`).
// PiEEG-8/16 → 250 Hz, IronBCI-32 → 500 Hz, BLE/IronBCI-8 → 250 Hz.
//
// Hard-coding 250 Hz everywhere on the dashboard caused a 2× error in every
// FFT-derived metric whenever a user connected to a 500 Hz device:
// alpha showed up at the theta bin, blink-window length doubled, time-axis
// labels lied, etc. This store fixes that by exposing the rate as a
// reactive value that all hooks/components can read.
//
// Module-level singleton + `useSyncExternalStore` so non-React code paths
// (workers, plain functions) can also call `getSampleRate()` synchronously
// without prop-drilling. The store starts at 250 (the historical default)
// and gets replaced once the welcome message arrives.

import { useSyncExternalStore } from "react";

const DEFAULT_SAMPLE_RATE = 250;

let current = DEFAULT_SAMPLE_RATE;
const listeners = new Set<() => void>();

/** Get the current sample rate (Hz). Safe to call outside React. */
export function getSampleRate(): number {
  return current;
}

/** Update the sample rate. No-op if the value hasn't changed. */
export function setSampleRate(rate: number): void {
  if (!Number.isFinite(rate) || rate <= 0) return;
  const next = Math.round(rate);
  if (next === current) return;
  current = next;
  for (const fn of listeners) fn();
}

function subscribe(fn: () => void): () => void {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

/**
 * React hook returning the live sample rate.
 *
 * Re-renders the calling component whenever `setSampleRate()` is called with
 * a different value. Falls back to 250 Hz before the first welcome message.
 */
export function useSampleRate(): number {
  return useSyncExternalStore(subscribe, getSampleRate, getSampleRate);
}
