"""
Threaded data acquisition loop for PiEEG.

Reads EEG samples at 250 Hz from the hardware layer
and pushes timestamped frames into an asyncio-safe queue
for downstream consumers (WebSocket server, file writer, etc.).
"""

import asyncio
import threading
import time

from .spike_filter import HampelFilter

SAMPLE_RATE = 250  # Hz
SAMPLE_INTERVAL = 1.0 / SAMPLE_RATE  # 4 ms

# Number of frames to discard after a register config change.
# At 250 Hz, 25 frames = 100 ms — enough for SPI + ADC to settle.
_SETTLE_FRAMES = 25


class AcquisitionLoop:
    """Runs the SPI read loop in a background thread, feeds async queues."""

    def __init__(self, hardware, loop: asyncio.AbstractEventLoop,
                 mock: bool = False, ble: bool = False, serial: bool = False):
        self._hw = hardware
        self._loop = loop
        self._mock = mock
        self._ble = ble
        self._serial = serial
        self._subscribers: list[asyncio.Queue] = []
        self._stop_event = threading.Event()
        self._thread: threading.Thread | None = None
        self._sample_count = 0
        self._settle_remaining = 0
        # Device-agnostic Hampel spike filter (runs in acquisition thread)
        self._hampel = HampelFilter(num_channels=hardware.num_channels)
        # Default subscriber for backward compat (.queue property)
        self._default_queue = self.subscribe()

    @property
    def num_channels(self) -> int:
        """Number of channels provided by the underlying hardware."""
        return self._hw.num_channels

    @property
    def hampel(self) -> HampelFilter:
        """Access the Hampel spike filter for configuration."""
        return self._hampel

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
        self._hampel.reset()
        self._settle_remaining = _SETTLE_FRAMES
        self.start()

    def _run(self):
        if self._mock:
            self._run_mock()
        elif self._ble:
            self._run_ble()
        elif self._serial:
            self._run_serial()
        else:
            self._run_hardware()

    def _run_mock(self):
        """Generate synthetic data for testing without hardware.

        Uses the hardware's advertised ``sample_rate`` if available, else
        falls back to the default 250 Hz. This lets the IronBCI-32 mock
        run at 500 Hz × 32 ch to faithfully reproduce its data rate.
        """
        interval = 1.0 / getattr(self._hw, "sample_rate", SAMPLE_RATE)
        while not self._stop_event.is_set():
            sample = self._hw.read_sample()
            sample = self._hampel.apply(sample)
            self._sample_count += 1
            frame = {
                "t": round(time.time(), 6),
                "n": self._sample_count,
                "channels": sample,
            }
            self._loop.call_soon_threadsafe(self._enqueue, frame)
            time.sleep(interval)

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

            sample = self._hampel.apply(sample)
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

        interval = 1.0 / getattr(self._hw, "sample_rate", SAMPLE_RATE)
        next_t = time.monotonic()
        while not self._stop_event.is_set():
            sample = self._hw.read_sample()
            if sample is None:
                time.sleep(interval)
                next_t = time.monotonic()
                continue

            sample = self._hampel.apply(sample)
            self._sample_count += 1
            frame = {
                "t": round(time.time(), 6),
                "n": self._sample_count,
                "channels": sample,
            }
            self._loop.call_soon_threadsafe(self._enqueue, frame)

            next_t += interval
            delay = next_t - time.monotonic()
            if delay > 0:
                time.sleep(delay)
            elif delay < -interval * 50:
                next_t = time.monotonic()

    def _run_serial(self):
        """Serial acquisition (IronBCI-32 / FreeEEG32-style USB-CDC boards).

        The hardware driver opens its own reader thread on `open()` and feeds
        an internal buffer; we drain it here paced at the device sample rate.

        Pacing matters: USB-CDC delivers bytes in 8–16 ms chunks, so without
        any pacing the consumer would emit frames in tight bursts (4–8 at
        once, then idle), which causes visible UI hangs downstream.

        Windows caveat: `time.sleep()` default resolution is ~15.6 ms — far
        coarser than the 2 ms tick a 500 SPS device demands. To work around
        that we drain *all* queued samples each iteration in a single batch
        and sleep once for the batch's worth of time. 
        """
        sample_rate = getattr(self._hw, "sample_rate", SAMPLE_RATE)
        interval = 1.0 / sample_rate
        # Cap batch size to keep the loop responsive to stop_event.
        max_batch = max(8, int(sample_rate / 50))  # ~20 ms worth of samples
        next_t = time.monotonic()
        while not self._stop_event.is_set():
            # Drain everything currently in the driver's deque, up to a cap.
            batch: list[list[float]] = []
            while len(batch) < max_batch:
                s = self._hw.read_sample()
                if s is None:
                    break
                batch.append(s)

            if not batch:
                # No data yet — wait one tick. resync schedule on resume so
                # we don't burst-catch-up after a stall.
                time.sleep(interval)
                next_t = time.monotonic()
                continue

            for sample in batch:
                sample = self._hampel.apply(sample)
                self._sample_count += 1
                frame = {
                    "t": round(time.time(), 6),
                    "n": self._sample_count,
                    "channels": sample,
                }
                self._loop.call_soon_threadsafe(self._enqueue, frame)

            # Advance schedule by one interval per emitted sample, then sleep
            # the remainder. Sleeping once for `len(batch) * interval` keeps
            # us above the OS sleep-granularity floor on Windows.
            next_t += interval * len(batch)
            delay = next_t - time.monotonic()
            if delay > 0:
                time.sleep(delay)
            elif delay < -interval * 50:
                # >100 ms behind — driver deque is overflowing; resync.
                next_t = time.monotonic()
