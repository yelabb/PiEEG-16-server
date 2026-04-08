"""
Lab Streaming Layer (LSL) outlet — pushes live EEG samples to the LSL network.

Requires: pylsl  (pip install pylsl)

Creates a single LSL StreamOutlet with 16 (or 8) channels at 250 Hz.
Any LSL-compatible application (OpenViBE, MNE-LSL, BCI2000, NeuroPype, …)
can then discover and record the stream on the local network.
"""

import asyncio
import logging
from dataclasses import dataclass

from .acquisition import AcquisitionLoop, SAMPLE_RATE

logger = logging.getLogger("pieeg.lsl")


@dataclass
class LSLConfig:
    stream_name: str = "PiEEG"
    stream_type: str = "EEG"
    source_id: str = "pieeg-server"

    @classmethod
    def from_dict(cls, d: dict) -> "LSLConfig":
        known = set(cls.__dataclass_fields__)
        return cls(**{k: v for k, v in d.items() if k in known})

    def to_dict(self) -> dict:
        from dataclasses import asdict
        return asdict(self)


class LSLBridge:
    """Subscribes to AcquisitionLoop and pushes each sample to an LSL outlet."""

    def __init__(self, acq: AcquisitionLoop, config: LSLConfig | None = None):
        self._acq = acq
        self._cfg = config or LSLConfig()
        self._running = False
        self._outlet = None
        self._sample_count = 0

    def _create_outlet(self):
        """Lazily import pylsl and create the StreamOutlet."""
        try:
            from pylsl import StreamInfo, StreamOutlet
        except ImportError:
            raise ImportError(
                "pylsl is required for LSL streaming but is not installed. "
                "Install it with:  pip install pieeg-server[lsl]"
            ) from None

        num_ch = self._acq.num_channels
        info = StreamInfo(
            name=self._cfg.stream_name,
            type=self._cfg.stream_type,
            channel_count=num_ch,
            nominal_srate=SAMPLE_RATE,
            channel_format="float32",
            source_id=self._cfg.source_id,
        )

        # Add channel labels to the stream description
        chns = info.desc().append_child("channels")
        for i in range(num_ch):
            ch = chns.append_child("channel")
            ch.append_child_value("label", f"Ch{i}")
            ch.append_child_value("unit", "microvolts")
            ch.append_child_value("type", "EEG")

        self._outlet = StreamOutlet(info)
        logger.info(
            "LSL outlet created: %s (%d ch @ %d Hz)",
            self._cfg.stream_name, num_ch, SAMPLE_RATE,
        )

    async def run(self):
        """Main loop — push every EEG frame to the LSL outlet."""
        self._create_outlet()
        self._running = True
        self._sample_count = 0
        queue = self._acq.subscribe()

        try:
            while self._running:
                try:
                    frame = await asyncio.wait_for(queue.get(), timeout=0.5)
                except asyncio.TimeoutError:
                    continue
                if not self._running:
                    break
                if self._outlet is not None:
                    self._outlet.push_sample(frame["channels"], frame["t"])
                    self._sample_count += 1
        except asyncio.CancelledError:
            pass
        finally:
            self._running = False
            self._acq.unsubscribe(queue)
            self._outlet = None
            logger.info("LSL outlet closed (%d samples pushed)", self._sample_count)

    def stop(self):
        self._running = False

    def update_config(self, patch: dict):
        for k, v in patch.items():
            if hasattr(self._cfg, k):
                setattr(self._cfg, k, v)

    def status(self) -> dict:
        return {
            "running": self._running,
            "stream_name": self._cfg.stream_name,
            "stream_type": self._cfg.stream_type,
            "sample_count": self._sample_count,
        }
