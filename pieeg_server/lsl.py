"""
Lab Streaming Layer (LSL) outlet — pushes live EEG samples to the LSL network.

Requires: pylsl  (pip install pylsl)

Creates one or more LSL StreamOutlet instances based on channel group configuration.
Any LSL-compatible application (OpenViBE, MNE-LSL, BCI2000, NeuroPype, …)
can then discover and record the streams on the local network.
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
    """Subscribes to AcquisitionLoop and pushes samples to one or more LSL outlets.

    Each channel group gets its own LSL StreamOutlet. If no groups are provided,
    creates a single default outlet with all channels (backward compatible).
    """

    def __init__(
        self,
        acq: AcquisitionLoop,
        config: LSLConfig | None = None,
        groups: list[dict] | None = None,
    ):
        self._acq = acq
        self._cfg = config or LSLConfig()
        self._groups = groups if groups else []
        self._running = False
        self._outlets = []  # List of (group_name, channels, StreamOutlet, sample_count)
        self._queue = None

    def _create_outlets(self):
        """Lazily import pylsl and create one StreamOutlet per channel group."""
        try:
            from pylsl import StreamInfo, StreamOutlet
        except ImportError:
            raise ImportError(
                "pylsl is required for LSL streaming but is not installed. "
                "Install it with:  pip install pieeg-server[lsl]"
            ) from None

        # If no groups configured, create single default outlet with all channels
        if not self._groups:
            self._groups = [{
                "name": "PiEEG",
                "channels": list(range(self._acq.num_channels))
            }]

        for group in self._groups:
            group_name = group["name"]
            group_channels = group["channels"]
            num_ch = len(group_channels)

            # Stream name: use config base or group name
            if group_name == "PiEEG":
                stream_name = self._cfg.stream_name  # Use config value
            else:
                # Custom group: {GroupName}_{ConfigBase} (e.g., "EEG_PiEEG", "EOG_PiEEG")
                stream_name = f"{group_name}_{self._cfg.stream_name}"

            # Unique source_id per group (LSL requirement)
            source_id = f"{self._cfg.source_id}_{group_name}" if len(self._groups) > 1 else self._cfg.source_id

            info = StreamInfo(
                name=stream_name,
                type=self._cfg.stream_type,
                channel_count=num_ch,
                nominal_srate=SAMPLE_RATE,
                channel_format="float32",
                source_id=source_id,
            )

            # Add channel labels to the stream description
            # Use both stream-local index AND hardware channel number for clarity
            chns = info.desc().append_child("channels")
            for stream_idx, hw_ch_idx in enumerate(group_channels):
                ch = chns.append_child("channel")
                ch.append_child_value("label", f"Ch{stream_idx}")  # Stream-local: Ch0, Ch1, Ch2...
                ch.append_child_value("hw_channel", str(hw_ch_idx))  # Hardware channel for reference
                ch.append_child_value("unit", "microvolts")
                ch.append_child_value("type", "EEG")

            outlet = StreamOutlet(info)
            self._outlets.append((group_name, group_channels, outlet, 0))
            logger.info(
                "LSL outlet created: %s (%d ch @ %d Hz) — channels %s",
                stream_name, num_ch, SAMPLE_RATE, group_channels,
            )

    async def run(self):
        """Main loop — push every EEG frame to all LSL outlets."""
        self._create_outlets()
        self._running = True
        self._queue = self._acq.subscribe()

        try:
            while self._running:
                try:
                    frame = await asyncio.wait_for(self._queue.get(), timeout=0.5)
                except asyncio.TimeoutError:
                    continue
                if not self._running:
                    break

                # Push to each outlet (extract channel subset for each group)
                for i, (group_name, group_channels, outlet, count) in enumerate(self._outlets):
                    group_data = [frame["channels"][ch_idx] for ch_idx in group_channels]
                    outlet.push_sample(group_data, frame["t"])
                    # Update sample count for this outlet
                    self._outlets[i] = (group_name, group_channels, outlet, count + 1)

        except asyncio.CancelledError:
            pass
        finally:
            self._running = False
            if self._queue:
                self._acq.unsubscribe(self._queue)
                self._queue = None

            # Log stats and cleanup outlets
            for group_name, _, outlet, count in self._outlets:
                logger.info("LSL outlet '%s' closed (%d samples pushed)", group_name, count)
            self._outlets = []

    def stop(self):
        self._running = False

    def update_config(self, patch: dict):
        for k, v in patch.items():
            if hasattr(self._cfg, k):
                setattr(self._cfg, k, v)

    def status(self) -> dict:
        """Return status including all active outlets."""
        outlets_info = []
        for group_name, group_channels, _, sample_count in self._outlets:
            outlets_info.append({
                "group": group_name,
                "channels": group_channels,
                "sample_count": sample_count,
            })

        return {
            "running": self._running,
            "stream_name": self._cfg.stream_name,
            "stream_type": self._cfg.stream_type,
            "outlets": outlets_info,
            "num_outlets": len(self._outlets),
        }
