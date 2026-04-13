"""
Threaded data acquisition loop for PiEEG.

Reads EEG samples at 250 Hz from the hardware layer
and pushes timestamped frames into an asyncio-safe queue
for downstream consumers (WebSocket server, file writer, etc.).
"""

import asyncio
import threading
import time

SAMPLE_RATE = 250  # Hz
SAMPLE_INTERVAL = 1.0 / SAMPLE_RATE  # 4 ms

# Number of frames to discard after a register config change.
# At 250 Hz, 25 frames = 100 ms — enough for SPI + ADC to settle.
_SETTLE_FRAMES = 25


class AcquisitionLoop:
    """Runs the SPI read loop in a background thread, feeds async queues."""

    def __init__(self, hardware, loop: asyncio.AbstractEventLoop,
                 mock: bool = False, ble: bool = False):
        self._hw = hardware
        self._loop = loop
        self._mock = mock
        self._ble = ble
        self._subscribers: list[asyncio.Queue] = []
        self._stop_event = threading.Event()
        self._thread: threading.Thread | None = None
        self._sample_count = 0
        self._settle_remaining = 0
        # Default subscriber for backward compat (.queue property)
        self._default_queue = self.subscribe()

    @property
    def num_channels(self) -> int:
        """Number of channels provided by the underlying hardware."""
        return self._hw.num_channels

    def subscribe(self, maxsize: int = 2048) -> asyncio.Queue:
        """Create and return a new queue that receives every frame."""
        q: asyncio.Queue = asyncio.Queue(maxsize=maxsize)
        self._subscribers.append(q)
        return q

    def unsubscribe(self, q: asyncio.Queue):
        """Remove a subscriber queue."""
        try:
            self._subscribers.remove(q)
        except ValueError:
            pass

    @property
    def queue(self) -> asyncio.Queue:
        """Backward-compatible default queue."""
        return self._default_queue

    @property
    def sample_count(self) -> int:
        return self._sample_count

    def start(self):
        self._stop_event.clear()
        self._thread = threading.Thread(
            target=self._run, name="pieeg-acquisition", daemon=True
        )
        self._thread.start()

    def stop(self):
        self._stop_event.set()
        if self._thread:
            self._thread.join(timeout=2.0)

    def restart_with_config(self, reg_map: dict[int, int]):
        """Stop acquisition, write registers, restart the thread.

        Drops ~10-20 ms of data during the transition (acceptable for config changes).
        After restart, the first SETTLE_FRAMES frames are discarded to let the
        SPI bus and ADC settle (avoids corrupted frames after RDATAC+START).
        """
        self.stop()
        self._hw.configure_registers(reg_map)
        self._settle_remaining = _SETTLE_FRAMES
        self.start()

    def _run(self):
        if self._mock:
            self._run_mock()
        elif self._ble:
            self._run_ble()
        else:
            self._run_hardware()

    def _run_mock(self):
        """Generate synthetic data at 250 Hz for testing without hardware."""
        while not self._stop_event.is_set():
            sample = self._hw.read_sample()
            self._sample_count += 1
            frame = {
                "t": round(time.time(), 6),
                "n": self._sample_count,
                "channels": sample,
            }
            self._loop.call_soon_threadsafe(self._enqueue, frame)
            time.sleep(SAMPLE_INTERVAL)

    def _run_hardware(self):
        """
        Tight loop: poll DRDY, read sample, push to async queue.

        The original PiEEG code uses a polling state machine:
        - Wait for DRDY pin to go HIGH (armed)
        - Wait for DRDY pin to go LOW (data ready)
        - Read SPI bytes

        We replicate the reference PiEEG script's tight busy-poll
        for lowest possible jitter at the cost of higher CPU.
        """
        armed = False

        while not self._stop_event.is_set():
            drdy = self._hw._drdy_get()

            # Arm: wait for DRDY to go high
            if not armed:
                if drdy == 1:
                    armed = True
                continue

            # Trigger: DRDY goes low → data ready
            if drdy != 0:
                continue

            armed = False
            sample = self._hw.read_sample()
            if sample is None:
                continue

            # Discard settling frames after register config change —
            # SPI bus often produces corrupted data right after RDATAC+START
            if self._settle_remaining > 0:
                self._settle_remaining -= 1
                continue

            self._sample_count += 1
            timestamp = time.time()

            frame = {
                "t": round(timestamp, 6),
                "n": self._sample_count,
                "channels": sample,
            }

            # Non-blocking put into the asyncio queue from this thread
            self._loop.call_soon_threadsafe(self._enqueue, frame)

    def _enqueue(self, frame: dict):
        for q in self._subscribers:
            try:
                q.put_nowait(frame)
            except asyncio.QueueFull:
                # Drop oldest frame to keep up with real-time
                try:
                    q.get_nowait()
                except asyncio.QueueEmpty:
                    pass
                try:
                    q.put_nowait(frame)
                except asyncio.QueueFull:
                    pass

    def _run_ble(self):
        """BLE acquisition: connect, then poll the notification buffer at 250 Hz.

        The IronBCIHardware receives data via BLE notification callbacks which
        fill an internal buffer. This loop drains that buffer at the sample rate
        and pushes frames into the async queues, matching the same timing
        contract as _run_hardware() and _run_mock().
        """
        import asyncio as _aio

        # Run scan_and_connect on the main event loop
        future = _aio.run_coroutine_threadsafe(
            self._hw.scan_and_connect(self._loop), self._loop
        )
        try:
            future.result(timeout=30.0)
        except Exception as e:
            import logging
            logging.getLogger("pieeg.acquisition").error(
                "BLE connection failed: %s", e
            )
            return

        while not self._stop_event.is_set():
            sample = self._hw.read_sample()
            if sample is None:
                time.sleep(SAMPLE_INTERVAL)
                continue

            self._sample_count += 1
            frame = {
                "t": round(time.time(), 6),
                "n": self._sample_count,
                "channels": sample,
            }
            self._loop.call_soon_threadsafe(self._enqueue, frame)
