"""
Unit tests for the IronBCI-32 USB-serial driver.

Covers the wire-protocol parser without any actual hardware. The reader
thread is exercised by feeding a fake `serial.Serial`-like object that
emits prerecorded byte streams.
"""

from __future__ import annotations

import threading
import time

import pytest

from pieeg_server import ironbci_32 as drv
from pieeg_server.ironbci_32 import (
    DATA_BYTES,
    END_BYTE,
    FRAME_BYTES,
    IronBCI32Hardware,
    NUM_CHANNELS,
    PAYLOAD_BYTES,
    SCALE_UV,
    START_BYTE,
    _decode_frame,
)


# --- Helpers ---------------------------------------------------------------

def _to_24bit_be(value: int) -> bytes:
    """Encode a signed integer as 3-byte big-endian two's complement."""
    if value < 0:
        value += 1 << 24
    return bytes(((value >> 16) & 0xFF, (value >> 8) & 0xFF, value & 0xFF))


def _build_payload(counter: int, raw_codes: list[int]) -> bytes:
    """Build a 98-byte payload (counter + 32 × 3-byte codes + 0xC0)."""
    assert len(raw_codes) == NUM_CHANNELS
    body = bytearray([counter & 0xFF])
    for code in raw_codes:
        body.extend(_to_24bit_be(code))
    body.append(END_BYTE)
    assert len(body) == PAYLOAD_BYTES
    return bytes(body)


def _build_frame(counter: int, raw_codes: list[int]) -> bytes:
    """Build a complete 99-byte frame (0xA0 + payload)."""
    return bytes([START_BYTE]) + _build_payload(counter, raw_codes)


# --- Fake serial port ------------------------------------------------------

class _FakeSerial:
    """Minimal stand-in for `serial.Serial`. Yields bytes from an internal
    queue; blocks (returns empty) when exhausted instead of raising."""

    def __init__(self, payload: bytes) -> None:
        self._buf = bytearray(payload)
        self._lock = threading.Lock()
        self._closed = False

    def read(self, n: int) -> bytes:
        with self._lock:
            if not self._buf:
                # Mimic a timeout — return empty bytes.
                return b""
            chunk = bytes(self._buf[:n])
            del self._buf[:n]
            return chunk

    def reset_input_buffer(self) -> None:
        # No-op: the driver calls this on open() to flush stale bytes from a
        # real port; clearing our pre-loaded test stream would defeat the test.
        pass

    def close(self) -> None:
        self._closed = True

    @property
    def is_open(self) -> bool:  # pragma: no cover — interface stub
        return not self._closed


# --- Tests: pure decoder ---------------------------------------------------

class TestDecodeFrame:
    def test_layout_constants(self):
        assert NUM_CHANNELS == 32
        assert DATA_BYTES == 96
        assert PAYLOAD_BYTES == 98
        assert FRAME_BYTES == 99

    def test_zero_codes_decode_to_zero(self):
        payload = _build_payload(7, [0] * NUM_CHANNELS)
        counter, channels = _decode_frame(payload)
        assert counter == 7
        assert channels == [0.0] * NUM_CHANNELS

    def test_positive_full_scale(self):
        # +full-scale = 2^23 - 1 → ADS_VREF / GAIN in volts → × 1e6 µV
        full = (1 << 23) - 1
        payload = _build_payload(0, [full] * NUM_CHANNELS)
        _, channels = _decode_frame(payload)
        expected = round(full * SCALE_UV, 2)
        assert all(c == expected for c in channels)
        # Sanity: 2.5 V / 8 = 0.3125 V ≈ 312_500 µV
        assert 312_400.0 < channels[0] < 312_600.0

    def test_negative_full_scale(self):
        neg = -(1 << 23)
        payload = _build_payload(0, [neg] * NUM_CHANNELS)
        _, channels = _decode_frame(payload)
        expected = round(neg * SCALE_UV, 2)
        assert all(c == expected for c in channels)
        assert -312_600.0 < channels[0] < -312_400.0

    def test_per_channel_independence(self):
        codes = [(i + 1) * 1000 for i in range(NUM_CHANNELS)]
        payload = _build_payload(42, codes)
        counter, channels = _decode_frame(payload)
        assert counter == 42
        # Channels should be in the same order as the byte stream.
        for code, val in zip(codes, channels):
            assert val == round(code * SCALE_UV, 2)

    def test_counter_is_first_byte(self):
        payload = _build_payload(255, [1] * NUM_CHANNELS)
        counter, _ = _decode_frame(payload)
        assert counter == 255


# --- Tests: reader thread --------------------------------------------------

@pytest.fixture
def hw():
    h = IronBCI32Hardware(serial_port="FAKE")
    yield h
    h.close()


def _drain_until(hw: IronBCI32Hardware, n: int, timeout: float = 1.0) -> list[list[float]]:
    """Pop up to `n` samples from the buffer, waiting for the reader thread."""
    end = time.monotonic() + timeout
    out: list[list[float]] = []
    while len(out) < n and time.monotonic() < end:
        s = hw.read_sample()
        if s is None:
            time.sleep(0.01)
            continue
        out.append(s)
    return out


class TestReaderThread:
    def test_parses_clean_stream(self, hw, monkeypatch):
        codes_a = [1000] * NUM_CHANNELS
        codes_b = [-2000] * NUM_CHANNELS
        # Stream: leading 0xA0, payload_a, 0xA0, payload_b, 0xA0, payload_b, ...
        # The reader thread first syncs to a 0xA0, then expects PAYLOAD bytes
        # followed by the next 0xA0 marker.
        stream = bytes([START_BYTE])
        stream += _build_payload(1, codes_a) + bytes([START_BYTE])
        stream += _build_payload(2, codes_b) + bytes([START_BYTE])
        stream += _build_payload(3, codes_a) + bytes([START_BYTE])

        fake = _FakeSerial(stream)
        monkeypatch.setattr(drv, "serial", _StubSerialModule(fake))
        hw.open()

        samples = _drain_until(hw, 3)
        assert len(samples) == 3
        assert samples[0] == [round(1000 * SCALE_UV, 2)] * NUM_CHANNELS
        assert samples[1] == [round(-2000 * SCALE_UV, 2)] * NUM_CHANNELS
        assert hw.dropped_frames == 0

    def test_resyncs_after_garbage(self, hw, monkeypatch):
        good = bytes([START_BYTE]) + _build_payload(1, [500] * NUM_CHANNELS)
        # 50 bytes of junk between the start byte and a valid frame.
        junk = bytes(range(50))
        stream = junk + good + bytes([START_BYTE])
        stream += _build_payload(2, [600] * NUM_CHANNELS) + bytes([START_BYTE])

        fake = _FakeSerial(stream)
        monkeypatch.setattr(drv, "serial", _StubSerialModule(fake))
        hw.open()

        samples = _drain_until(hw, 1)
        assert len(samples) == 1
        assert samples[0] == [round(500 * SCALE_UV, 2)] * NUM_CHANNELS

    def test_resyncs_on_bad_end_byte(self, hw, monkeypatch):
        # Build a valid frame, then corrupt the end byte → driver should drop
        # it and resync to the next 0xA0.
        bad_payload = bytearray(_build_payload(1, [1] * NUM_CHANNELS))
        bad_payload[-1] = 0xBB  # not END_BYTE
        good = _build_payload(2, [777] * NUM_CHANNELS)
        stream = bytes([START_BYTE]) + bytes(bad_payload)
        stream += bytes([START_BYTE]) + good + bytes([START_BYTE])

        fake = _FakeSerial(stream)
        monkeypatch.setattr(drv, "serial", _StubSerialModule(fake))
        hw.open()

        samples = _drain_until(hw, 1)
        assert len(samples) == 1
        assert samples[0] == [round(777 * SCALE_UV, 2)] * NUM_CHANNELS
        assert hw.dropped_frames >= 1


# --- Tests: validation -----------------------------------------------------

class TestValidation:
    def test_requires_serial_port(self):
        with pytest.raises(ValueError, match="serial-port"):
            IronBCI32Hardware(serial_port="")

    def test_rejects_wrong_channel_count(self):
        with pytest.raises(ValueError, match="32 channels"):
            IronBCI32Hardware(serial_port="COM1", num_channels=16)

    def test_num_channels_property(self, hw):
        assert hw.num_channels == 32

    def test_sample_rate_default(self, hw):
        assert hw.sample_rate == 250

    def test_spike_filter_setters(self, hw):
        hw.spike_threshold = 1234
        hw.spike_reset_after = 7
        assert hw.spike_threshold == 1234
        assert hw.spike_reset_after == 7
        # Negative values are clamped.
        hw.spike_threshold = -1
        assert hw.spike_threshold == 0
        hw.spike_reset_after = 0
        assert hw.spike_reset_after == 1

    def test_read_sample_returns_none_when_idle(self, hw):
        assert hw.read_sample() is None


# --- Stub serial module ----------------------------------------------------

class _StubSerialModule:
    """Stands in for the real `serial` module so `IronBCI32Hardware.open()`
    can be exercised without pyserial actually installed (and without opening
    a real device when it is). All Serial(...) calls return a pre-built fake.
    """

    EIGHTBITS = 8
    PARITY_NONE = "N"
    STOPBITS_ONE = 1

    def __init__(self, fake: _FakeSerial):
        self._fake = fake

    def Serial(self, *_args, **_kwargs):  # noqa: N802 — mirrors pyserial API
        return self._fake
