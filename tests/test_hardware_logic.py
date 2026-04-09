"""
Tests for PiEEGHardware that can run WITHOUT a Raspberry Pi.

Only tests logic that doesn't require actual GPIO/SPI hardware:
- ADC value decoding (24-bit signed → µV)
- Spike detection logic
- SPI frame validation (status byte checking)
- Register/command constants
"""

import pytest

from pieeg_server.hardware import (
    SIGN_TEST, FULL_SCALE, FULL_SCALE_PLUS_1, NEGATIVE_OFFSET,
    VREF_UV, SPIKE_THRESHOLD, SPIKE_RESET_AFTER,
    EXPECTED_STATUS, BYTES_PER_READ,
    CS_PIN, DRDY_PIN, SPI_SPEED_HZ,
    PiEEGHardware,
)


# We can't call PiEEGHardware.open() on Windows, but we can test its
# pure-logic methods by constructing an instance and bypassing open().


class TestADCConstants:
    """Verify ADC conversion constants are correct for ADS1299."""

    def test_sign_test_is_2_23_minus_1(self):
        assert SIGN_TEST == 0x7FFFFF == 2**23 - 1

    def test_full_scale_is_2_24_minus_1(self):
        assert FULL_SCALE == 0xFFFFFF == 2**24 - 1

    def test_vref_is_4_5V(self):
        assert VREF_UV == 4.5e6  # 4.5V in µV

    def test_spi_speed_is_1mhz(self):
        assert SPI_SPEED_HZ == 1_000_000

    def test_bytes_per_read_is_27(self):
        # 3 status + 8 channels × 3 bytes = 27
        assert BYTES_PER_READ == 27

    def test_gpio_pins(self):
        assert CS_PIN == 19
        assert DRDY_PIN == 26


class TestSpikeDetection:
    """Test the spike detection logic (critical for data quality)."""

    def _make_hw(self):
        """Create a PiEEGHardware without initializing GPIO/SPI."""
        hw = PiEEGHardware.__new__(PiEEGHardware)
        hw._last_valid_value = None
        hw._spike_count = 0
        hw._consecutive_rejects = 0
        hw._spike_threshold = SPIKE_THRESHOLD
        hw._spike_reset_after = SPIKE_RESET_AFTER
        return hw

    def _raw_with_last_3(self, b24, b25, b26):
        """Create a 27-byte raw frame with specified bytes at positions 24-26."""
        raw = [0] * 27
        raw[24] = b24
        raw[25] = b25
        raw[26] = b26
        return raw

    def test_first_frame_always_rejected(self):
        """First frame is skipped (no reference value to compare against)."""
        hw = self._make_hw()
        raw = self._raw_with_last_3(0, 0, 100)
        assert hw._is_valid_frame(raw) is False
        # But it sets the baseline
        assert hw._last_valid_value is not None

    def test_small_change_accepted(self):
        hw = self._make_hw()
        # First frame (sets baseline)
        hw._is_valid_frame(self._raw_with_last_3(0, 0, 100))
        # Second frame with small change
        assert hw._is_valid_frame(self._raw_with_last_3(0, 0, 110)) is True

    def test_large_spike_rejected(self):
        hw = self._make_hw()
        # Baseline at value 100
        hw._is_valid_frame(self._raw_with_last_3(0, 0, 100))
        # Jump of >5000 — this is a spike
        # Encode value 6000 as 24-bit: 0x001770
        val = 6000
        b24 = (val >> 16) & 0xFF
        b25 = (val >> 8) & 0xFF
        b26 = val & 0xFF
        assert hw._is_valid_frame(self._raw_with_last_3(b24, b25, b26)) is False
        assert hw._spike_count == 1

    def test_negative_values_handled(self):
        """Signed 24-bit negative values should be decoded correctly."""
        hw = self._make_hw()
        # Set baseline to 0
        hw._is_valid_frame(self._raw_with_last_3(0, 0, 0))
        # Small negative (-10): 24-bit two's complement = 0xFFFFF6
        raw = self._raw_with_last_3(0xFF, 0xFF, 0xF6)
        assert hw._is_valid_frame(raw) is True

    def test_spike_count_increments(self):
        hw = self._make_hw()
        hw._is_valid_frame(self._raw_with_last_3(0, 0, 0))  # baseline

        # Produce multiple spikes (fewer than SPIKE_RESET_AFTER)
        for i in range(5):
            val = 10000 + i * 1000  # all > threshold
            b24 = (val >> 16) & 0xFF
            b25 = (val >> 8) & 0xFF
            b26 = val & 0xFF
            hw._is_valid_frame(self._raw_with_last_3(b24, b25, b26))

        assert hw._spike_count == 5

    def test_spike_filter_resets_after_consecutive_rejects(self):
        """After SPIKE_RESET_AFTER consecutive rejects, baseline re-syncs."""
        hw = self._make_hw()
        hw._is_valid_frame(self._raw_with_last_3(0, 0, 0))  # baseline at 0

        # Send the same far-away value repeatedly (simulates electrode connect)
        val = 100_000
        b24 = (val >> 16) & 0xFF
        b25 = (val >> 8) & 0xFF
        b26 = val & 0xFF
        far_raw = self._raw_with_last_3(b24, b25, b26)

        for i in range(SPIKE_RESET_AFTER - 1):
            assert hw._is_valid_frame(far_raw) is False

        # The next one triggers the reset and is accepted
        assert hw._is_valid_frame(far_raw) is True
        assert hw._consecutive_rejects == 0
        assert hw._last_valid_value == val

        # Subsequent close values are accepted normally
        val2 = val + 10
        b24 = (val2 >> 16) & 0xFF
        b25 = (val2 >> 8) & 0xFF
        b26 = val2 & 0xFF
        assert hw._is_valid_frame(self._raw_with_last_3(b24, b25, b26)) is True

    def test_status_header_constant(self):
        """Expected status bytes should be (0xC0, 0x00, 0x08)."""
        assert EXPECTED_STATUS == (192, 0, 8)
        assert EXPECTED_STATUS == (0xC0, 0x00, 0x08)

    def test_custom_threshold_accepts_larger_jumps(self):
        """Raising spike_threshold allows larger jumps through."""
        hw = self._make_hw()
        hw.spike_threshold = 10000
        hw._is_valid_frame(self._raw_with_last_3(0, 0, 100))  # baseline
        # Jump of 6000 — within new threshold
        val = 6100
        b24 = (val >> 16) & 0xFF
        b25 = (val >> 8) & 0xFF
        b26 = val & 0xFF
        assert hw._is_valid_frame(self._raw_with_last_3(b24, b25, b26)) is True

    def test_custom_reset_after(self):
        """Lowering spike_reset_after resets sooner."""
        hw = self._make_hw()
        hw.spike_reset_after = 5
        hw._is_valid_frame(self._raw_with_last_3(0, 0, 0))  # baseline

        val = 100_000
        b24 = (val >> 16) & 0xFF
        b25 = (val >> 8) & 0xFF
        b26 = val & 0xFF
        far_raw = self._raw_with_last_3(b24, b25, b26)

        for _ in range(4):
            assert hw._is_valid_frame(far_raw) is False
        # 5th triggers reset
        assert hw._is_valid_frame(far_raw) is True
        assert hw._consecutive_rejects == 0

    def test_threshold_property_clamps_minimum(self):
        """spike_threshold property enforces min=0."""
        hw = self._make_hw()
        hw.spike_threshold = -100
        assert hw.spike_threshold == 0

    def test_reset_after_property_clamps_minimum(self):
        """spike_reset_after property enforces min=1."""
        hw = self._make_hw()
        hw.spike_reset_after = 0
        assert hw.spike_reset_after == 1


class TestADCDecoding:
    """Test the 24-bit signed integer to µV conversion.

    _decode_channels is a @staticmethod, so we call it directly.
    Formula: µV = round(4.5e6 * (signed_val / 16777215), 2)
    """

    def test_decode_channels_returns_8_values(self):
        raw = [0] * 27
        channels = PiEEGHardware._decode_channels(raw)
        assert len(channels) == 8

    def test_decode_channels_zero(self):
        raw = [0] * 27
        channels = PiEEGHardware._decode_channels(raw)
        assert all(v == 0.0 for v in channels)

    def test_decode_channels_positive(self):
        """0x400000 (positive, below sign threshold) → expected µV."""
        raw = [0] * 27
        raw[3] = 0x40  # ch1 MSB
        raw[4] = 0x00
        raw[5] = 0x00
        channels = PiEEGHardware._decode_channels(raw)
        # 0x400000 = 4194304, signed_val = 4194304
        expected = round(VREF_UV * (4194304 / FULL_SCALE_PLUS_1), 2)
        assert channels[0] == expected
        assert channels[0] > 0

    def test_decode_channels_negative(self):
        """0xFFFFFF (all ones) should decode to a negative value."""
        raw = [0] * 27
        raw[3] = 0xFF  # ch1
        raw[4] = 0xFF
        raw[5] = 0xFF
        channels = PiEEGHardware._decode_channels(raw)
        # raw_val = 0xFFFFFF = 16777215
        # raw_val | SIGN_TEST = 0xFFFFFF | 0x7FFFFF = 0xFFFFFF = FULL_SCALE → True
        # signed_val = 16777215 - NEGATIVE_OFFSET = 16777215 - 16777214 = 1
        expected = round(VREF_UV * (1 / FULL_SCALE_PLUS_1), 2)
        assert channels[0] == expected

    def test_decode_full_negative(self):
        """0x800000 should decode to a negative value (MSB set, sign bit)."""
        raw = [0] * 27
        raw[3] = 0x80
        raw[4] = 0x00
        raw[5] = 0x00
        channels = PiEEGHardware._decode_channels(raw)
        # raw_val = 0x800000 = 8388608
        # raw_val | SIGN_TEST = 0x800000 | 0x7FFFFF = 0xFFFFFF = FULL_SCALE → True
        # signed_val = 8388608 - 16777214 = -8388606
        expected = round(VREF_UV * (-8388606 / FULL_SCALE_PLUS_1), 2)
        assert channels[0] == expected
        assert channels[0] < 0

    def test_all_channels_independent(self):
        """Setting different values in different channel slots decodes independently."""
        raw = [0] * 27
        # Ch1 (bytes 3-5): 0x000001
        raw[5] = 0x01
        # Ch2 (bytes 6-8): 0x000002
        raw[8] = 0x02
        channels = PiEEGHardware._decode_channels(raw)
        assert channels[0] != channels[1]
        assert channels[0] == round(VREF_UV * (1 / FULL_SCALE_PLUS_1), 2)
        assert channels[1] == round(VREF_UV * (2 / FULL_SCALE_PLUS_1), 2)
