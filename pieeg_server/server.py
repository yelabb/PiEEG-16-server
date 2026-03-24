"""
WebSocket server that broadcasts live EEG data to connected clients.

Protocol (JSON over WebSocket):
  Server → Client (data frame):
    {"t": 1711234567.123456, "n": 42, "channels": [ch1, ..., ch16]}

  Client → Server (optional commands):
    {"cmd": "set_filter", "enabled": true, "lowcut": 1.0, "highcut": 40.0}
    {"cmd": "set_filter", "enabled": false}

  Server → Client (status):
    {"status": "connected", "sample_rate": 250, "channels": 16}
"""

import asyncio
import json
import logging

import websockets

from .acquisition import AcquisitionLoop
from .filters import MultichannelFilter

logger = logging.getLogger("pieeg.server")

DEFAULT_HOST = "0.0.0.0"
DEFAULT_PORT = 1616  # PiEEG-16 → 1616


class PiEEGServer:
    """WebSocket server broadcasting EEG frames to all connected clients."""

    def __init__(self, acquisition: AcquisitionLoop,
                 host: str = DEFAULT_HOST, port: int = DEFAULT_PORT):
        self._acq = acquisition
        self._host = host
        self._port = port
        self._clients: set[websockets.WebSocketServerProtocol] = set()
        self._filter: MultichannelFilter | None = None

    def enable_filter(self, lowcut: float = 1.0, highcut: float = 40.0):
        self._filter = MultichannelFilter(lowcut=lowcut, highcut=highcut)

    def disable_filter(self):
        self._filter = None

    async def run(self):
        """Start the WebSocket server and the broadcast loop."""
        async with websockets.serve(
            self._handle_client, self._host, self._port,
            ping_interval=20, ping_timeout=10,
        ):
            logger.info(
                "PiEEG-16 streaming on ws://%s:%d", self._host, self._port
            )
            await self._broadcast_loop()

    async def _handle_client(self, ws: websockets.WebSocketServerProtocol):
        """Handle a new WebSocket connection."""
        self._clients.add(ws)
        peer = ws.remote_address
        logger.info("Client connected: %s", peer)

        # Send welcome message
        welcome = json.dumps({
            "status": "connected",
            "sample_rate": 250,
            "channels": 16,
            "filter": self._filter is not None,
        })
        await ws.send(welcome)

        try:
            async for message in ws:
                await self._handle_command(message)
        except websockets.ConnectionClosed:
            pass
        finally:
            self._clients.discard(ws)
            logger.info("Client disconnected: %s", peer)

    async def _handle_command(self, raw: str):
        """Process a client command."""
        try:
            msg = json.loads(raw)
        except (json.JSONDecodeError, TypeError):
            return

        cmd = msg.get("cmd")
        if cmd == "set_filter":
            if msg.get("enabled", True):
                lowcut = float(msg.get("lowcut", 1.0))
                highcut = float(msg.get("highcut", 40.0))
                self.enable_filter(lowcut, highcut)
                logger.info("Filter enabled: %.1f-%.1f Hz", lowcut, highcut)
            else:
                self.disable_filter()
                logger.info("Filter disabled")

    async def _broadcast_loop(self):
        """Continuously read frames from the acquisition queue and broadcast."""
        queue = self._acq.queue

        while True:
            frame = await queue.get()

            if self._filter:
                frame["channels"] = self._filter.apply_sample(frame["channels"])

            if not self._clients:
                continue

            payload = json.dumps(frame)

            # Broadcast to all connected clients
            stale = set()
            for ws in self._clients:
                try:
                    await ws.send(payload)
                except websockets.ConnectionClosed:
                    stale.add(ws)

            self._clients -= stale
