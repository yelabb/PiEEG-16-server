"""
HTTP server serving the PiEEG-16 real-time dashboard.

Serves the static single-page app on port 1617 (one above the
WebSocket data port 1616). Uses only the standard library.
"""

import asyncio
import logging
import mimetypes
from pathlib import Path
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler
import socketserver
import threading

logger = logging.getLogger("pieeg.dashboard")

# Dashboard lives next to this file in static/
STATIC_DIR = Path(__file__).parent / "static"

DEFAULT_DASHBOARD_PORT = 1617


class _DashboardHandler(SimpleHTTPRequestHandler):
    """Serve files from the static directory, silently."""

    def __init__(self, *args, directory=None, **kwargs):
        super().__init__(*args, directory=str(STATIC_DIR), **kwargs)

    def log_message(self, format, *args):
        # Route through Python logging instead of stderr
        logger.debug(format, *args)


class _ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True


class DashboardServer:
    """Runs the dashboard HTTP server in a background thread."""

    def __init__(self, host: str = "0.0.0.0", port: int = DEFAULT_DASHBOARD_PORT):
        self._host = host
        self._port = port
        self._httpd = None
        self._thread = None

    def start(self):
        self._httpd = _ReusableTCPServer(
            (self._host, self._port), _DashboardHandler
        )
        self._thread = threading.Thread(
            target=self._httpd.serve_forever,
            name="pieeg-dashboard",
            daemon=True,
        )
        self._thread.start()
        logger.info(
            "Dashboard running at http://%s:%d",
            self._host if self._host != "0.0.0.0" else "raspberrypi.local",
            self._port,
        )

    def stop(self):
        if self._httpd:
            self._httpd.shutdown()
