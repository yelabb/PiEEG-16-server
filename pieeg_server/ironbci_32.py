"""
Pure-Python serial driver for IronBCI-32 (32-channel, 4 × AD7771, STM32H7).

Speaks the same wire protocol as BrainFlow's IRONBCI_32_BOARD / FREEEEG32
(both share the `FreeEEG` class in BrainFlow), but without the BrainFlow
dependency — just pyserial.

Wire protocol
-------------
    Baud:   921600 (USB CDC ACM)
    Frame:  [0xA0] [counter:u8] [ch1_msb ch1_mid ch1_lsb] ... [ch32_lsb] [0xC0]
            =  1   +   1        +              32 × 3              +   1   = 99 B
    Channel data:    24-bit big-endian two's complement
    Reference:       Vref = 2.5 V, gain = 8 (ADS131-style front-end)
    LSB → µV:        2.5 / (2^23 - 1) / 8 × 1e6  ≈  0.03725 µV/LSB

Resync rule (from BrainFlow's `FreeEEG::read_thread`):
    scan byte-by-byte until `... 0xC0 0xA0 ...` is seen with at least
    97 bytes between the previous start byte — at which point the prior
    97 bytes are: `counter (1) + 32 × 3-byte channels (96)`.

Public interface mirrors `PiEEGHardware` / `MockHardware` / `IronBCIHardware`:
`open()`, `close()`, `read_sample()`, `num_channels`, `spike_threshold`,
`spike_reset_after`. The acquisition loop's `_run_serial` mode polls
`read_sample()` at 250 Hz; the actual byte-pumping happens in a daemon
thread fed by `serial.Serial.read()`.

Reference:
    https://github.com/pieeg-club/ironbci-32
    https://github.com/brainflow-dev/brainflow/blob/master/src/board_controller/freeeeg/freeeeg.cpp

Requires: pyserial (pip install pieeg-server[ironbci32])
"""

from __future__ import annotations

import logging
import sys
import threading
from collections import deque

logger = logging.getLogger("pieeg.ironbci32")

try:
    import serial  # pyserial
except ImportError:  # pragma: no cover — exercised at runtime only
    serial = None  # type: ignore[assignment]


# --- Frame layout -----------------------------------------------------------
NUM_CHANNELS = 32
START_BYTE = 0xA0
END_BYTE = 0xC0
BYTES_PER_CHANNEL = 3
DATA_BYTES = NUM_CHANNELS * BYTES_PER_CHANNEL          # 96
PAYLOAD_BYTES = 1 + DATA_BYTES + 1                     # counter + 96 data + 0xC0 = 98
FRAME_BYTES = 1 + PAYLOAD_BYTES                        # incl. leading 0xA0 = 99

# --- Conversion -------------------------------------------------------------
ADS_VREF = 2.5
ADS_GAIN = 8.0
FULL_SCALE = (1 << 23) - 1     # 2^23 - 1 = 8 388 607
SIGN_BIT = 1 << 23
SAMPLE_RANGE = 1 << 24
SCALE_UV = ADS_VREF / FULL_SCALE / ADS_GAIN * 1_000_000.0  # ≈ 0.03725 µV / LSB

# --- Defaults ---------------------------------------------------------------
DEFAULT_BAUDRATE = 921_600
DEFAULT_READ_TIMEOUT = 1.0    # seconds
DEFAULT_BUFFER_LIMIT = 8192   # max samples to keep in buffer (~32 s @ 250 Hz)


def _require_pyserial():
    if serial is None:
        print(
            "\n  ERROR: Missing dependency: pyserial\n\n"
            "  Install it with:\n"
            "    pip install pieeg-server[ironbci32]\n"
            "  or:\n"
            "    pip install pyserial\n",
            file=sys.stderr,
        )
        sys.exit(1)


def _decode_frame(payload: bytes) -> tuple[int, list[float]]:
    """Decode the 98-byte payload (counter + 96 data + end byte) → (counter, [µV...]).

    Caller guarantees `len(payload) == PAYLOAD_BYTES` and `payload[-1] == END_BYTE`.
    """
    counter = payload[0]
    channels: list[float] = []
    # Local refs for the inner loop — measurable speedup at 250 Hz × 32 ch.
    sign_bit = SIGN_BIT
    sample_range = SAMPLE_RANGE
    scale = SCALE_UV
    for ch in range(NUM_CHANNELS):
        off = 1 + ch * BYTES_PER_CHANNEL
        raw = (payload[off] << 16) | (payload[off + 1] << 8) | payload[off + 2]
        if raw & sign_bit:
            raw -= sample_range
        channels.append(round(raw * scale, 2))
    return counter, channels


class IronBCI32Hardware:
    """Pure-Python serial hardware abstraction for IronBCI-32 boards.

    Threading model: a daemon reader thread continuously consumes bytes from
    the serial port, parses 99-byte frames, and pushes µV samples into an
    internal `deque`. The acquisition loop calls `read_sample()` from the
    main thread to drain that deque at 250 Hz.
    """

    def __init__(
        self,
        serial_port: str,
        num_channels: int = NUM_CHANNELS,
        baudrate: int = DEFAULT_BAUDRATE,
        timeout: float = DEFAULT_READ_TIMEOUT,
        buffer_limit: int = DEFAULT_BUFFER_LIMIT,
    ) -> None:
        if num_channels != NUM_CHANNELS:
            raise ValueError(
                f"IronBCI-32 supports {NUM_CHANNELS} channels only, got {num_channels}"
            )
        if not serial_port:
            raise ValueError(
                "IronBCI-32 requires --serial-port (e.g. COM3, /dev/ttyACM0)"
            )
        _require_pyserial()
        self._serial_port = serial_port
        self._baudrate = baudrate
        self._timeout = timeout
        self._num_channels = num_channels

        self._port: "serial.Serial | None" = None
        self._buffer: deque[list[float]] = deque(maxlen=buffer_limit)
        self._stop_event = threading.Event()
        self._reader_thread: threading.Thread | None = None
        self._connected = False
        self._dropped_frames = 0
        # Shared spike-filter knobs (kept identical to other drivers).
        self._spike_threshold = 5000
        self._spike_reset_after = 50

    # --- Public properties (driver contract) -------------------------------

    @property
    def num_channels(self) -> int:
        return self._num_channels

    @property
    def serial_port(self) -> str:
        return self._serial_port

    @property
    def sample_rate(self) -> int:
        # Default firmware rate; not negotiated over the wire.
        return 250

    @property
    def spike_threshold(self) -> int:
        return self._spike_threshold

    @spike_threshold.setter
    def spike_threshold(self, value: int) -> None:
        self._spike_threshold = max(0, int(value))

    @property
    def spike_reset_after(self) -> int:
        return self._spike_reset_after

    @spike_reset_after.setter
    def spike_reset_after(self, value: int) -> None:
        self._spike_reset_after = max(1, int(value))

    @property
    def dropped_frames(self) -> int:
        """Total resync events since `open()`. Useful for diagnostics."""
        return self._dropped_frames

    # --- Lifecycle ---------------------------------------------------------

    def open(self) -> None:
        """Open the serial port and start the reader thread."""
        if self._connected:
            return
        logger.info(
            "IronBCI-32: opening serial port %s @ %d baud",
            self._serial_port, self._baudrate,
        )
        self._port = serial.Serial(
            port=self._serial_port,
            baudrate=self._baudrate,
            timeout=self._timeout,
            bytesize=serial.EIGHTBITS,
            parity=serial.PARITY_NONE,
            stopbits=serial.STOPBITS_ONE,
        )
        # Flush any stale bytes from a previous session.
        try:
            self._port.reset_input_buffer()
        except Exception:  # pragma: no cover
            pass
        self._stop_event.clear()
        self._buffer.clear()
        self._dropped_frames = 0
        self._reader_thread = threading.Thread(
            target=self._read_loop, name="ironbci32-reader", daemon=True,
        )
        self._reader_thread.start()
        self._connected = True
        logger.info(
            "IronBCI-32: streaming at %d Hz, %d channels (frame=%d B)",
            self.sample_rate, self._num_channels, FRAME_BYTES,
        )

    def close(self) -> None:
        """Stop the reader thread and close the serial port."""
        if not self._connected:
            return
        self._stop_event.set()
        thread = self._reader_thread
        if thread is not None:
            thread.join(timeout=2.0)
        self._reader_thread = None
        port = self._port
        self._port = None
        self._connected = False
        if port is not None:
            try:
                port.close()
            except Exception as e:  # pragma: no cover
                logger.warning("Error closing IronBCI-32 port: %s", e)
        logger.info(
            "IronBCI-32: closed (dropped frames during session: %d)",
            self._dropped_frames,
        )

    def read_sample(self) -> list[float] | None:
        """Pop the oldest buffered sample, or None if no data yet."""
        try:
            return self._buffer.popleft()
        except IndexError:
            return None

    # --- Internal reader ---------------------------------------------------

    def _read_loop(self) -> None:
        """Daemon thread: pull bytes from the port and parse frames forever."""
        port = self._port
        assert port is not None
        # First sync: walk to the next 0xA0 byte.
        if not self._sync_to_start_byte():
            return

        while not self._stop_event.is_set():
            try:
                payload = port.read(PAYLOAD_BYTES)
            except Exception as e:
                logger.warning("IronBCI-32 serial read error: %s", e)
                self._dropped_frames += 1
                if not self._sync_to_start_byte():
                    return
                continue

            if len(payload) < PAYLOAD_BYTES:
                # Timeout — keep waiting.
                continue

            if payload[-1] != END_BYTE:
                self._dropped_frames += 1
                if not self._sync_to_start_byte():
                    return
                continue

            try:
                next_start = port.read(1)
            except Exception as e:
                logger.warning("IronBCI-32 serial read error: %s", e)
                continue

            if not next_start or next_start[0] != START_BYTE:
                # Lost framing alignment — resync without parsing this frame.
                self._dropped_frames += 1
                if not self._sync_to_start_byte():
                    return
                continue

            try:
                _counter, channels = _decode_frame(bytes(payload))
            except Exception as e:  # pragma: no cover — defensive
                logger.warning("IronBCI-32 frame decode error: %s", e)
                self._dropped_frames += 1
                if not self._sync_to_start_byte():
                    return
                continue

            self._buffer.append(channels)

    def _sync_to_start_byte(self) -> bool:
        """Read one byte at a time until 0xA0 is found. Returns False on stop."""
        port = self._port
        if port is None:
            return False
        while not self._stop_event.is_set():
            try:
                b = port.read(1)
            except Exception as e:
                logger.warning("IronBCI-32 serial read error during resync: %s", e)
                return False
            if not b:
                continue
            if b[0] == START_BYTE:
                return True
        return False

    # --- Context manager ---------------------------------------------------

    def __enter__(self) -> "IronBCI32Hardware":
        self.open()
        return self

    def __exit__(self, *exc: object) -> None:
        self.close()
