"""
Cloud Relay Bridge — forwards live EEG frames to PiEEG Cloud relay.

Subscribes to the AcquisitionLoop queue and pushes JSON frames
over a WebSocket to the cloud upstream endpoint.

Lifecycle:
  bridge = CloudRelayBridge(acq, upstream_url, token)
  task   = asyncio.create_task(bridge.run())
  ...
  bridge.stop()
  await task
"""

from __future__ import annotations

import asyncio
import json
import logging
import time
from urllib.parse import urlparse, urlencode, urlunparse, parse_qs

import websockets

from .acquisition import AcquisitionLoop

logger = logging.getLogger("pieeg.cloud_relay")


class CloudRelayBridge:
    """Forwards EEG frames from AcquisitionLoop to PiEEG Cloud relay."""

    def __init__(
        self,
        acq: AcquisitionLoop,
        upstream_url: str,
        token: str,
    ) -> None:
        self._acq = acq
        self._upstream_url = upstream_url
        self._token = token
        self._queue: asyncio.Queue = acq.subscribe()
        self._running = False
        # Telemetry
        self._send_count: int = 0
        self._last_send: float = 0.0
        self._error: str | None = None

    def status(self) -> dict:
        return {
            "running": self._running,
            "upstream_url": self._upstream_url,
            "send_count": self._send_count,
            "last_send": self._last_send,
            "error": self._error,
        }

    def stop(self) -> None:
        """Signal the run() coroutine to exit on its next iteration."""
        self._running = False

    async def run(self) -> None:
        """
        Main loop: read frames from acquisition queue, forward as JSON
        to cloud upstream WebSocket.
        """
        self._running = True
        self._error = None

        # Build URL safely, merging token into query params
        parsed = urlparse(self._upstream_url)
        qs = parse_qs(parsed.query)
        qs["token"] = [self._token]
        url = urlunparse(parsed._replace(query=urlencode(qs, doseq=True)))

        logger.info("Cloud relay connecting to %s", self._upstream_url)

        try:
            async with websockets.connect(url) as ws:
                logger.info("Cloud relay connected")
                while self._running:
                    try:
                        frame = await asyncio.wait_for(
                            self._queue.get(), timeout=0.1
                        )
                    except asyncio.TimeoutError:
                        continue

                    payload = json.dumps(frame)
                    try:
                        await ws.send(payload)
                        self._send_count += 1
                        self._last_send = time.time()
                    except websockets.ConnectionClosed as exc:
                        self._error = f"Connection closed: {exc}"
                        logger.warning("Cloud relay WS closed: %s", exc)
                        break
        except Exception as exc:
            self._error = str(exc)
            logger.error("Cloud relay error: %s", exc)
        finally:
            self._running = False
            self._acq.unsubscribe(self._queue)
            logger.info(
                "Cloud relay stopped (sent %d frames)", self._send_count
            )
