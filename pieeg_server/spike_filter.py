"""
Device-agnostic Hampel spike filter for real-time EEG streams.

Runs at the acquisition layer — works identically for PiEEG, PiEEG-16,
IronBCI, and any future device.  Instead of dropping entire frames
(like the hardware-level delta-threshold filter), this replaces only
the affected channel values with the local median, preserving temporal
continuity.

Algorithm (per channel):
  1. Maintain a small sliding window of recent values (default 5).
  2. For each new sample, compute the window median and MAD (Median
     Absolute Deviation).
  3. If the new value deviates from the median by more than
     ``n_sigma × 1.4826 × MAD``, replace it with the median.
  4. A minimum MAD floor prevents false positives on flat signals.

The 1.4826 constant converts MAD to a consistent estimator of the
standard deviation for normally distributed data.

Complexity: O(k log k) per sample per channel where k = window size.
At 250 Hz × 16 channels with k=5 this is negligible.
"""

import logging

logger = logging.getLogger("pieeg.spike_filter")

# Scale factor: MAD → σ for a normal distribution
_MAD_SCALE = 1.4826

# Minimum MAD floor (µV).  Prevents every small fluctuation on a
# near-flat channel from being flagged as a spike.
_MIN_MAD = 2.0


class HampelFilter:
    """Per-channel Hampel spike filter for a multi-channel EEG stream.

    Parameters
    ----------
    num_channels : int
        Number of EEG channels.
    window_size : int
        Number of past samples kept per channel (the "half-window" in
        classic Hampel literature; here it's the full circular buffer).
        Must be odd and >= 3.  Default 5 (≈20 ms at 250 Hz).
    n_sigma : float
        Deviation threshold in units of estimated σ.  Default 3.0.
    enabled : bool
        Whether the filter is active.  Can be toggled at runtime.
    """

    def __init__(self, num_channels: int = 16, window_size: int = 5,
                 n_sigma: float = 3.0, enabled: bool = True):
        # Enforce odd window >= 3
        ws = max(3, window_size)
        if ws % 2 == 0:
            ws += 1
        self._window_size = ws
        self._n_sigma = max(1.0, float(n_sigma))
        self._enabled = enabled
        self._num_channels = num_channels

        # Circular buffers: one list per channel
        self._buffers: list[list[float]] = [[] for _ in range(num_channels)]
        # Running spike replacement count (for diagnostics)
        self._replaced_count = 0

    # ── properties ────────────────────────────────────────────────────

    @property
    def enabled(self) -> bool:
        return self._enabled

    @enabled.setter
    def enabled(self, value: bool):
        self._enabled = bool(value)

    @property
    def window_size(self) -> int:
        return self._window_size

    @window_size.setter
    def window_size(self, value: int):
        ws = max(3, int(value))
        if ws % 2 == 0:
            ws += 1
        if ws != self._window_size:
            self._window_size = ws
            self.reset()

    @property
    def n_sigma(self) -> float:
        return self._n_sigma

    @n_sigma.setter
    def n_sigma(self, value: float):
        self._n_sigma = max(1.0, float(value))

    @property
    def replaced_count(self) -> int:
        return self._replaced_count

    # ── public API ────────────────────────────────────────────────────

    def apply(self, channels: list[float]) -> list[float]:
        """Filter one multi-channel sample.

        Returns a new list with spikes replaced by the channel median.
        If the filter is disabled, returns the original list unchanged.
        """
        if not self._enabled:
            self._push(channels)
            return channels

        result = list(channels)
        for ch in range(min(len(channels), self._num_channels)):
            buf = self._buffers[ch]
            val = channels[ch]

            if len(buf) >= self._window_size:
                median = self._median(buf)
                mad = self._mad(buf, median)
                threshold = self._n_sigma * _MAD_SCALE * max(mad, _MIN_MAD)

                if abs(val - median) > threshold:
                    result[ch] = median
                    self._replaced_count += 1

            # Push the *original* value into the buffer so that a single
            # spike doesn't bias the window (it will be outvoted next time).
            # Using the original preserves the statistical window integrity.
            if len(buf) >= self._window_size:
                buf.pop(0)
            buf.append(val)

        return result

    def reset(self):
        """Clear all channel buffers (e.g. after register config change)."""
        self._buffers = [[] for _ in range(self._num_channels)]

    def config(self) -> dict:
        """Return current configuration as a JSON-serialisable dict."""
        return {
            "enabled": self._enabled,
            "window_size": self._window_size,
            "n_sigma": self._n_sigma,
            "replaced_count": self._replaced_count,
        }

    # ── internals ─────────────────────────────────────────────────────

    def _push(self, channels: list[float]):
        """Push values into buffers without filtering (used when disabled)."""
        for ch in range(min(len(channels), self._num_channels)):
            buf = self._buffers[ch]
            if len(buf) >= self._window_size:
                buf.pop(0)
            buf.append(channels[ch])

    @staticmethod
    def _median(values: list[float]) -> float:
        s = sorted(values)
        n = len(s)
        if n % 2 == 1:
            return s[n // 2]
        return (s[n // 2 - 1] + s[n // 2]) / 2.0

    @staticmethod
    def _mad(values: list[float], median: float) -> float:
        """Median Absolute Deviation."""
        deviations = sorted(abs(v - median) for v in values)
        n = len(deviations)
        if n % 2 == 1:
            return deviations[n // 2]
        return (deviations[n // 2 - 1] + deviations[n // 2]) / 2.0
