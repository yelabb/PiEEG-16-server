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
import time
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse, parse_qs

import websockets
from websockets.datastructures import Headers
from websockets.http11 import Response as HTTPResponse

from .acquisition import AcquisitionLoop
from .auth import AuthManager
from .filters import MultichannelFilter
from .recorder import Recorder
from .webhooks import WebhookStore
from .osc_vrchat import VRChatOSCBridge, OSCConfig
from .lsl import LSLBridge, LSLConfig  # LSLBridge defers pylsl import to run()

logger = logging.getLogger("pieeg.server")

DEFAULT_HOST = "0.0.0.0"
DEFAULT_PORT = 1616  # PiEEG → 1616


class PiEEGServer:
    """WebSocket server broadcasting EEG frames to all connected clients."""

    def __init__(self, acquisition: AcquisitionLoop,
                 host: str = DEFAULT_HOST, port: int = DEFAULT_PORT,
                 auth: AuthManager | None = None,
                 num_channels: int = 16):
        self._acq = acquisition
        self._host = host
        self._port = port
        self._auth = auth
        self._num_channels = num_channels
        self._clients: set[websockets.WebSocketServerProtocol] = set()
        self._filter: MultichannelFilter | None = None
        self._queue = acquisition.subscribe()
        self._recorder: Recorder | None = None
        self._recorder_task: asyncio.Task | None = None
        self._record_start_time: float | None = None
        self._recordings_dir = Path("recordings")
        self._webhooks: WebhookStore | None = None
        self._osc_bridge: VRChatOSCBridge | None = None
        self._osc_task: asyncio.Task | None = None
        self._lsl_bridge: LSLBridge | None = None
        self._lsl_task: asyncio.Task | None = None

    def enable_filter(self, lowcut: float = 1.0, highcut: float = 40.0):
        self._filter = MultichannelFilter(
            num_channels=self._num_channels, lowcut=lowcut, highcut=highcut,
        )

    def disable_filter(self):
        self._filter = None

    def enable_lsl(self, config: LSLConfig | None = None):
        """Pre-configure the LSL bridge (start via dashboard or --lsl flag)."""
        self._lsl_bridge = LSLBridge(self._acq, config)
        logger.info("LSL bridge ready (start via dashboard or --lsl flag)")

    async def _lsl_autostart(self):
        """Start the LSL bridge immediately (used with --lsl CLI flag)."""
        if self._lsl_bridge and not (self._lsl_task and not self._lsl_task.done()):
            self._lsl_task = asyncio.create_task(self._lsl_bridge.run())
            await self._broadcast_lsl_status()

    def enable_osc(self, config: OSCConfig | None = None):
        """Pre-configure the OSC bridge (does not start it; use osc_start command)."""
        self._osc_bridge = VRChatOSCBridge(self._acq, config)
        logger.info("VRChat OSC bridge ready (start via dashboard or --osc flag)")

    async def _osc_autostart(self):
        """Start the OSC bridge immediately (used with --osc CLI flag)."""
        if self._osc_bridge and not (self._osc_task and not self._osc_task.done()):
            self._osc_task = asyncio.create_task(self._osc_bridge.run())
            await self._broadcast_osc_status()

    def enable_webhooks(self, rules_path=None):
        """Create the webhook store (rules + HTTP relay)."""
        kwargs = {}
        if rules_path:
            kwargs["rules_path"] = rules_path
        self._webhooks = WebhookStore(**kwargs)
        logger.info("Webhooks enabled (%d rules loaded)",
                    len(self._webhooks.list_rules()))

    async def _health_check(self, connection, request):
        """Respond to HTTP health checks (e.g. Fly.io) without upgrading."""
        if request.path == "/health":
            return HTTPResponse(200, "OK", Headers(), b"ok\n")

    async def run(self):
        """Start the WebSocket server and the broadcast loop."""
        async with websockets.serve(
            self._handle_client, self._host, self._port,
            ping_interval=20, ping_timeout=10,
            process_request=self._health_check,
        ):
            logger.info(
                "PiEEG streaming on ws://%s:%d", self._host, self._port
            )
            # Auto-start bridges if pre-configured (via CLI flags)
            if self._osc_bridge:
                await self._osc_autostart()
            if self._lsl_bridge:
                await self._lsl_autostart()
            await self._broadcast_loop()

    async def _handle_client(self, ws: websockets.WebSocketServerProtocol):
        """Handle a new WebSocket connection."""
        peer = ws.remote_address

        # Validate token from query string: ws://host:port?token=xxx
        if self._auth:
            query = parse_qs(urlparse(ws.request.path).query)
            token = query.get("token", [None])[0]
            if not self._auth.validate_ws_token(token):
                logger.warning("WebSocket auth rejected from %s", peer)
                await ws.close(4401, "Unauthorized")
                return

        self._clients.add(ws)
        logger.info("Client connected: %s", peer)

        # Send welcome message
        welcome = {
            "status": "connected",
            "sample_rate": 250,
            "channels": self._num_channels,
            "filter": self._filter is not None,
            "lsl_status": self._lsl_bridge.status() if self._lsl_bridge else {"running": False},
            "spike_config": self._get_spike_config(),
        }
        welcome.update(self._get_record_status())
        await ws.send(json.dumps(welcome))

        try:
            async for message in ws:
                await self._handle_command(message, ws)
        except websockets.ConnectionClosed:
            pass
        finally:
            self._clients.discard(ws)
            logger.info("Client disconnected: %s", peer)

    async def _handle_command(self, raw: str, ws=None):
        """Process a client command."""
        try:
            msg = json.loads(raw)
        except (json.JSONDecodeError, TypeError):
            return

        if not isinstance(msg, dict):
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
        elif cmd == "start_record":
            await self._start_recording()
        elif cmd == "stop_record":
            await self._stop_recording()
        elif cmd == "webhook_list":
            await self._ws_webhook_list(ws)
        elif cmd == "webhook_create":
            await self._ws_webhook_create(ws, msg)
        elif cmd == "webhook_update":
            await self._ws_webhook_update(ws, msg)
        elif cmd == "webhook_delete":
            await self._ws_webhook_delete(ws, msg)
        elif cmd == "webhook_test":
            await self._ws_webhook_test(ws, msg)
        elif cmd == "webhook_fire":
            await self._ws_webhook_fire(ws, msg)
        # ── VRChat OSC commands ────────────────────────────────────────────
        elif cmd == "osc_status":
            await self._ws_osc_status(ws)
        elif cmd == "osc_start":
            await self._ws_osc_start(ws, msg)
        elif cmd == "osc_stop":
            await self._ws_osc_stop(ws)
        elif cmd == "osc_config":
            await self._ws_osc_config(ws, msg)
        # ── LSL commands ───────────────────────────────────────────────────
        elif cmd == "lsl_status":
            await self._ws_lsl_status(ws)
        elif cmd == "lsl_start":
            await self._ws_lsl_start(ws, msg)
        elif cmd == "lsl_stop":
            await self._ws_lsl_stop(ws)
        # ── Spike config commands ──────────────────────────────────────────
        elif cmd == "spike_config":
            await self._ws_spike_config(ws, msg)

    async def _start_recording(self):
        """Start recording EEG data to a timestamped CSV file."""
        if self._recorder_task and not self._recorder_task.done():
            logger.warning("Recording already in progress")
            return

        filename = datetime.now().strftime("pieeg_%Y%m%d_%H%M%S.csv")
        output = self._recordings_dir / filename
        self._recorder = Recorder(self._acq, output=output)
        self._record_start_time = time.time()
        self._recorder_task = asyncio.create_task(self._recorder.run())
        logger.info("Recording started: %s", output)
        await self._broadcast_record_status()

    async def _stop_recording(self):
        """Stop the current recording."""
        if not self._recorder_task or self._recorder_task.done():
            logger.warning("No recording in progress")
            return

        self._recorder_task.cancel()
        try:
            await self._recorder_task
        except asyncio.CancelledError:
            pass
        frames = self._recorder.frames_written
        filename = self._recorder._output.name
        duration = round(time.time() - self._record_start_time, 1) if self._record_start_time else 0
        path = str(self._recorder._output.resolve())
        logger.info("Recording stopped: %d frames → %s", frames, filename)
        self._recorder = None
        self._recorder_task = None
        self._record_start_time = None
        await self._broadcast_record_status(stop_info={
            "filename": filename,
            "frames": frames,
            "duration": duration,
            "path": path,
        })

    async def _broadcast_record_status(self, stop_info: dict | None = None):
        """Send recording status to all connected clients."""
        status = self._get_record_status(stop_info=stop_info)
        payload = json.dumps(status)
        stale = set()
        for ws in list(self._clients):
            try:
                await ws.send(payload)
            except websockets.ConnectionClosed:
                stale.add(ws)
        self._clients -= stale

    def _get_record_status(self, stop_info: dict | None = None) -> dict:
        """Build a record_status message."""
        recording = self._recorder_task is not None and not self._recorder_task.done()
        status: dict = {
            "recording": recording,
        }
        if stop_info:
            status["stopped"] = stop_info
        return {"record_status": status}

    async def _broadcast_loop(self):
        """Continuously read frames from the acquisition queue and broadcast."""
        queue = self._queue

        while True:
            frame = await queue.get()

            if self._filter:
                frame["channels"] = self._filter.apply_sample(frame["channels"])

            if not self._clients:
                continue

            payload = json.dumps(frame)

            # Broadcast to all connected clients (snapshot to avoid mutation during iteration)
            stale = set()
            for ws in list(self._clients):
                try:
                    await ws.send(payload)
                except websockets.ConnectionClosed:
                    stale.add(ws)

            self._clients -= stale

    # ── Webhook WebSocket handlers ─────────────────────────────

    async def _ws_webhook_list(self, ws):
        if not self._webhooks:
            return
        await ws.send(json.dumps({"webhook_rules": self._webhooks.list_rules()}))

    async def _ws_webhook_create(self, ws, msg):
        if not self._webhooks:
            return
        data = msg.get("rule", {})
        rule = self._webhooks.create_rule(data)
        await ws.send(json.dumps({"webhook_created": rule}))

    async def _ws_webhook_update(self, ws, msg):
        if not self._webhooks:
            return
        rule_id = msg.get("rule_id")
        data = msg.get("rule", {})
        result = self._webhooks.update_rule(rule_id, data)
        if result:
            await ws.send(json.dumps({"webhook_updated": result}))
        else:
            await ws.send(json.dumps({"webhook_error": "rule_not_found"}))

    async def _ws_webhook_delete(self, ws, msg):
        if not self._webhooks:
            return
        rule_id = msg.get("rule_id")
        ok = self._webhooks.delete_rule(rule_id)
        await ws.send(json.dumps({"webhook_deleted": ok, "rule_id": rule_id}))

    async def _ws_webhook_test(self, ws, msg):
        if not self._webhooks:
            return
        rule_id = msg.get("rule_id")
        result = await self._webhooks.test_rule(rule_id)
        await ws.send(json.dumps({"webhook_test": result}))

    async def _ws_webhook_fire(self, ws, msg):
        """Browser evaluated a trigger — relay the HTTP call."""
        if not self._webhooks:
            return
        rule_id = msg.get("rule_id")
        value = float(msg.get("value", 0))
        result = await self._webhooks.fire_rule(rule_id, value)
        if result.get("ok"):
            event = {
                "webhook_event": {
                    "rule_id": rule_id,
                    "value": round(value, 4),
                    "ts": time.time(),
                }
            }
            await self._broadcast_webhook_event(event)
        await ws.send(json.dumps({"webhook_fire": result}))

    async def _broadcast_webhook_event(self, event: dict):
        """Relay webhook events to all connected dashboard clients."""
        if not self._clients:
            return
        payload = json.dumps(event)
        stale = set()
        for ws in list(self._clients):
            try:
                await ws.send(payload)
            except websockets.ConnectionClosed:
                stale.add(ws)
        self._clients -= stale

    # ── VRChat OSC WebSocket handlers ─────────────────────────────────────

    async def _ws_osc_status(self, ws):
        """Send current OSC bridge status to the requesting client."""
        status = self._osc_bridge.status() if self._osc_bridge else {"running": False}
        await ws.send(json.dumps({"osc_status": status}))

    async def _ws_osc_start(self, ws, msg: dict):
        """Start (or restart) the OSC bridge with optional config."""
        # Apply config patch before starting, if provided
        config_patch = msg.get("config", {})

        if not self._osc_bridge:
            cfg = OSCConfig.from_dict(config_patch) if config_patch else OSCConfig()
            self._osc_bridge = VRChatOSCBridge(self._acq, cfg)
        elif config_patch:
            self._osc_bridge.update_config(config_patch)

        # Stop existing task if running
        if self._osc_task and not self._osc_task.done():
            self._osc_bridge.stop()
            try:
                await asyncio.wait_for(self._osc_task, timeout=2.0)
            except (asyncio.TimeoutError, asyncio.CancelledError):
                pass

        self._osc_task = asyncio.create_task(self._osc_bridge.run())
        # Yield once so run() can execute its first line (self._running = True)
        # before we read status() for the broadcast — otherwise the broadcast
        # would still report running=False.
        await asyncio.sleep(0)
        logger.info("VRChat OSC bridge started via WebSocket command")
        await self._broadcast_osc_status()

    async def _ws_osc_stop(self, ws):
        """Stop the OSC bridge."""
        if self._osc_bridge and self._osc_task and not self._osc_task.done():
            self._osc_bridge.stop()
            try:
                await asyncio.wait_for(self._osc_task, timeout=2.0)
            except (asyncio.TimeoutError, asyncio.CancelledError):
                pass
            logger.info("VRChat OSC bridge stopped via WebSocket command")
        await self._broadcast_osc_status()

    async def _ws_osc_config(self, ws, msg: dict):
        """Update OSC config while running (hot-reload)."""
        config_patch = msg.get("config", {})
        if not self._osc_bridge:
            cfg = OSCConfig.from_dict(config_patch)
            self._osc_bridge = VRChatOSCBridge(self._acq, cfg)
        else:
            self._osc_bridge.update_config(config_patch)
        await ws.send(json.dumps({"osc_status": self._osc_bridge.status()}))

    async def _broadcast_osc_status(self):
        """Push current OSC status to all connected clients."""
        status = self._osc_bridge.status() if self._osc_bridge else {"running": False}
        payload = json.dumps({"osc_status": status})
        stale = set()
        for ws in list(self._clients):
            try:
                await ws.send(payload)
            except websockets.ConnectionClosed:
                stale.add(ws)
        self._clients -= stale

    # ── LSL WebSocket handlers ────────────────────────────────────────────

    async def _ws_lsl_status(self, ws):
        """Send current LSL bridge status to the requesting client."""
        status = self._lsl_bridge.status() if self._lsl_bridge else {"running": False}
        await ws.send(json.dumps({"lsl_status": status}))

    async def _ws_lsl_start(self, ws, msg: dict):
        """Start the LSL outlet."""
        config_patch = msg.get("config", {})

        if not self._lsl_bridge:
            cfg = LSLConfig.from_dict(config_patch) if config_patch else LSLConfig()
            self._lsl_bridge = LSLBridge(self._acq, cfg)
        elif config_patch:
            self._lsl_bridge.update_config(config_patch)

        # Stop existing task if running
        if self._lsl_task and not self._lsl_task.done():
            self._lsl_bridge.stop()
            try:
                await asyncio.wait_for(self._lsl_task, timeout=2.0)
            except asyncio.TimeoutError:
                self._lsl_task.cancel()
                try:
                    await self._lsl_task
                except asyncio.CancelledError:
                    pass
            except asyncio.CancelledError:
                pass

        self._lsl_task = asyncio.create_task(self._lsl_bridge.run())
        await asyncio.sleep(0)
        logger.info("LSL outlet started via WebSocket command")
        await self._broadcast_lsl_status()

    async def _ws_lsl_stop(self, ws):
        """Stop the LSL outlet."""
        if self._lsl_bridge and self._lsl_task and not self._lsl_task.done():
            self._lsl_bridge.stop()
            try:
                await asyncio.wait_for(self._lsl_task, timeout=2.0)
            except asyncio.TimeoutError:
                self._lsl_task.cancel()
                try:
                    await self._lsl_task
                except asyncio.CancelledError:
                    pass
            except asyncio.CancelledError:
                pass
            logger.info("LSL outlet stopped via WebSocket command")
        await self._broadcast_lsl_status()

    async def _broadcast_lsl_status(self):
        """Push current LSL status to all connected clients."""
        status = self._lsl_bridge.status() if self._lsl_bridge else {"running": False}
        payload = json.dumps({"lsl_status": status})
        stale = set()
        for ws in list(self._clients):
            try:
                await ws.send(payload)
            except websockets.ConnectionClosed:
                stale.add(ws)
        self._clients -= stale

    # ── Spike config ───────────────────────────────────────────────────

    def _get_spike_config(self) -> dict:
        hw = self._acq._hw
        return {
            "threshold": hw.spike_threshold,
            "reset_after": hw.spike_reset_after,
        }

    async def _ws_spike_config(self, ws, msg: dict):
        """Get or set spike rejection parameters."""
        hw = self._acq._hw
        config = msg.get("config")
        if config and isinstance(config, dict):
            if "threshold" in config:
                hw.spike_threshold = int(config["threshold"])
            if "reset_after" in config:
                hw.spike_reset_after = int(config["reset_after"])
            logger.info("Spike config updated: threshold=%d, reset_after=%d",
                        hw.spike_threshold, hw.spike_reset_after)
        await self._broadcast_spike_config()

    async def _broadcast_spike_config(self):
        """Push current spike config to all connected clients."""
        payload = json.dumps({"spike_config": self._get_spike_config()})
        stale = set()
        for ws in list(self._clients):
            try:
                await ws.send(payload)
            except websockets.ConnectionClosed:
                stale.add(ws)
        self._clients -= stale

