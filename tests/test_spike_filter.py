"""Tests for the Hampel spike filter."""

import pytest

# These tests validate the pure-Python reference implementation. The native
# accelerator (pieeg-core) is exercised separately in
# ``test_native_integration.py``.
from pieeg_server.spike_filter import _PyHampelFilter as HampelFilter


class TestHampelBasics:
    """Core Hampel filter behaviour."""

    def test_passthrough_when_disabled(self):
        hf = HampelFilter(num_channels=2, enabled=False)
        for _ in range(10):
            result = hf.apply([100.0, 200.0])
        assert result == [100.0, 200.0]
        assert hf.replaced_count == 0

    def test_clean_signal_unchanged(self):
        """A smooth signal should pass through without any replacements."""
        hf = HampelFilter(num_channels=1, window_size=5, n_sigma=3.0)
        values = [10.0, 10.5, 11.0, 10.8, 10.2, 10.6, 10.3, 10.9, 10.4, 10.7]
        results = [hf.apply([v])[0] for v in values]
        # Once the window fills (after 5 samples), values should be untouched
        assert results[5:] == values[5:]
        assert hf.replaced_count == 0

    def test_spike_replaced_with_median(self):
        """A single large spike should be replaced with the window median."""
        hf = HampelFilter(num_channels=1, window_size=5, n_sigma=3.0)
        # Fill the window with stable values
        for v in [10.0, 10.1, 10.2, 10.0, 10.1]:
            hf.apply([v])
        # Now inject a spike
        result = hf.apply([500.0])
        assert result[0] != 500.0
        # Should be close to ~10.1 (the median of the window)
        assert 9.0 < result[0] < 11.0
        assert hf.replaced_count == 1

    def test_negative_spike_replaced(self):
        """A large negative spike should also be caught."""
        hf = HampelFilter(num_channels=1, window_size=5, n_sigma=3.0)
        for v in [50.0, 50.1, 49.9, 50.2, 50.0]:
            hf.apply([v])
        result = hf.apply([-500.0])
        assert result[0] != -500.0
        assert 49.0 < result[0] < 51.0
        assert hf.replaced_count == 1

    def test_multichannel_independent(self):
        """Spike on one channel should not affect another."""
        hf = HampelFilter(num_channels=2, window_size=5, n_sigma=3.0)
        for _ in range(5):
            hf.apply([10.0, 20.0])
        # Spike only on channel 0
        result = hf.apply([1000.0, 20.1])
        assert 9.0 < result[0] < 11.0   # replaced
        assert result[1] == 20.1          # untouched
        assert hf.replaced_count == 1

    def test_consecutive_spikes(self):
        """Multiple consecutive spikes should all be replaced."""
        hf = HampelFilter(num_channels=1, window_size=5, n_sigma=3.0)
        for v in [10.0, 10.1, 10.2, 10.0, 10.1]:
            hf.apply([v])
        # Three consecutive spikes
        for _ in range(3):
            result = hf.apply([900.0])
            assert result[0] != 900.0
        assert hf.replaced_count == 3


class TestHampelConfiguration:
    """Test configuration and dynamic reconfiguration."""

    def test_window_size_enforced_odd(self):
        hf = HampelFilter(num_channels=1, window_size=4)
        assert hf.window_size == 5

    def test_window_size_minimum_3(self):
        hf = HampelFilter(num_channels=1, window_size=1)
        assert hf.window_size == 3

    def test_n_sigma_clamped_minimum(self):
        hf = HampelFilter(num_channels=1, n_sigma=0.1)
        assert hf.n_sigma == 1.0

    def test_config_dict(self):
        hf = HampelFilter(num_channels=2, window_size=7, n_sigma=2.5, enabled=False)
        cfg = hf.config()
        assert cfg == {
            "enabled": False,
            "window_size": 7,
            "n_sigma": 2.5,
            "replaced_count": 0,
        }

    def test_reset_clears_buffers(self):
        hf = HampelFilter(num_channels=1, window_size=5)
        for v in [10.0, 10.1, 10.2, 10.0, 10.1]:
            hf.apply([v])
        hf.reset()
        # After reset, buffer is empty — spike won't be caught until window fills
        result = hf.apply([500.0])
        assert result[0] == 500.0  # no window to compare against

    def test_enable_disable_runtime(self):
        hf = HampelFilter(num_channels=1, window_size=5, enabled=True)
        for v in [10.0, 10.1, 10.2, 10.0, 10.1]:
            hf.apply([v])
        # Disable: spike passes through
        hf.enabled = False
        result = hf.apply([500.0])
        assert result[0] == 500.0
        # Re-enable: window still has history, spike caught
        hf.enabled = True
        result = hf.apply([500.0])
        assert result[0] != 500.0

    def test_window_size_change_resets_buffers(self):
        hf = HampelFilter(num_channels=1, window_size=5)
        for v in [10.0, 10.1, 10.2, 10.0, 10.1]:
            hf.apply([v])
        hf.window_size = 7
        # Buffer was reset — spike not caught
        result = hf.apply([500.0])
        assert result[0] == 500.0


class TestHampelEdgeCases:
    """Edge cases and robustness."""

    def test_flat_signal_no_false_positives(self):
        """A perfectly flat signal should not trigger (thanks to MIN_MAD)."""
        hf = HampelFilter(num_channels=1, window_size=5, n_sigma=3.0)
        for _ in range(20):
            result = hf.apply([100.0])
        assert result == [100.0]
        assert hf.replaced_count == 0

    def test_flat_with_small_step_no_false_positive(self):
        """A small step on a flat channel shouldn't trigger."""
        hf = HampelFilter(num_channels=1, window_size=5, n_sigma=3.0)
        for _ in range(5):
            hf.apply([100.0])
        # Small step of 5 µV — within MIN_MAD-based threshold
        result = hf.apply([105.0])
        assert result[0] == 105.0
        assert hf.replaced_count == 0

    def test_gradual_drift_passes(self):
        """Slowly drifting signal should not be flagged."""
        hf = HampelFilter(num_channels=1, window_size=5, n_sigma=3.0)
        for i in range(50):
            val = 10.0 + i * 0.5  # slow drift
            result = hf.apply([val])
        # Last value should pass through
        assert abs(result[0] - (10.0 + 49 * 0.5)) < 1.0
        assert hf.replaced_count == 0

    def test_fewer_channels_than_configured(self):
        """If hardware sends fewer channels, handle gracefully."""
        hf = HampelFilter(num_channels=16, window_size=5)
        for _ in range(5):
            hf.apply([10.0, 20.0])  # only 2 channels
        result = hf.apply([500.0, 20.0])
        assert result[0] != 500.0  # spike caught on ch0
        assert result[1] == 20.0

    def test_replaced_count_persists_across_reset(self):
        """replaced_count is a running total, not reset with buffers."""
        hf = HampelFilter(num_channels=1, window_size=5)
        for v in [10.0, 10.1, 10.2, 10.0, 10.1]:
            hf.apply([v])
        hf.apply([500.0])
        assert hf.replaced_count == 1
        hf.reset()
        assert hf.replaced_count == 1  # not cleared
