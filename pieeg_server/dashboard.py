"""
HTTP server serving the PiEEG-16 real-time dashboard.

Serves the React/Vite build on port 1617 (one above the WebSocket data
port 1616).  Uses only the standard library.

Includes a simple session-auth gate: every new browser session must enter
the 6-digit code shown in the server console.
"""

import asyncio
import html
import http.cookies
import json
import logging
import mimetypes
from pathlib import Path
from functools import partial
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler
import socketserver
import threading
from urllib.parse import parse_qs

from .auth import AuthManager, COOKIE_NAME

logger = logging.getLogger("pieeg.dashboard")

_PKG_DIR = Path(__file__).parent

# React build output (built via: cd dashboard && npm run build)
STATIC_DIR = _PKG_DIR / "static" / "dashboard"

DEFAULT_DASHBOARD_PORT = 1617

_LOGIN_PAGE = """\
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PiEEG-16 · Access Code</title>
<style>
  :root { --bg:#0d1117; --surface:#161b22; --border:#30363d;
          --text:#e6edf3; --dim:#8b949e; --accent:#58a6ff; --red:#f85149; }
  * { margin:0; padding:0; box-sizing:border-box; }
  body { background:var(--bg); color:var(--text);
         font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;
         display:flex; align-items:center; justify-content:center; height:100vh; }
  .card { background:var(--surface); border:1px solid var(--border);
          border-radius:12px; padding:40px 48px; text-align:center;
          box-shadow:0 8px 24px rgba(0,0,0,.4); max-width:400px; width:90%; }
  h1 { font-size:22px; margin-bottom:6px; }
  h1 span { color:var(--accent); }
  .sub { color:var(--dim); font-size:13px; margin-bottom:28px; }
  input[type=text] { width:100%; padding:12px 16px; font-size:28px;
         text-align:center; letter-spacing:12px; border-radius:8px;
         border:1px solid var(--border); background:var(--bg); color:var(--text);
         outline:none; font-family:monospace; }
  input:focus { border-color:var(--accent); }
  button { margin-top:18px; padding:10px 32px; font-size:15px;
           border:none; border-radius:8px; background:var(--accent);
           color:#fff; cursor:pointer; font-weight:600; }
  button:hover { opacity:.9; }
  .error { color:var(--red); font-size:13px; margin-top:12px; }
</style>
</head>
<body>
<div class="card">
  <h1>Pi<span>EEG</span>-16</h1>
  <p class="sub">Enter the access code displayed in the server console</p>
  <form method="POST" action="/auth">
    <input type="text" name="code" maxlength="6" pattern="[0-9]{6}"
           autocomplete="off" autofocus required placeholder="------">
    <br>
    <button type="submit">Connect</button>
    <!--ERROR-->
  </form>
</div>
</body>
</html>
"""


def _make_handler(static_dir: Path, auth: AuthManager):
    """Create a handler class bound to a specific static directory."""

    class _DashboardHandler(SimpleHTTPRequestHandler):
        """Serve files from the given static directory, silently."""

        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=str(static_dir), **kwargs)

        def log_message(self, format, *args):
            logger.debug(format, *args)

        # -- cookie helpers --

        def _get_session_token(self):
            cookie_header = self.headers.get("Cookie", "")
            cookies = http.cookies.SimpleCookie()
            try:
                cookies.load(cookie_header)
            except http.cookies.CookieError:
                return None
            morsel = cookies.get(COOKIE_NAME)
            return morsel.value if morsel else None

        def _is_authenticated(self):
            if auth is None:
                return True
            return auth.validate_session(self._get_session_token())

        # -- auth routes --

        def _send_login(self, error=""):
            replacement = f'<p class="error">{html.escape(error)}</p>' if error else ""
            body = _LOGIN_PAGE.replace("<!--ERROR-->", replacement).encode()
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

        def _send_json(self, data, status=200):
            body = json.dumps(data).encode()
            self.send_response(status)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            origin = self.headers.get("Origin", "")
            if origin:
                self.send_header("Access-Control-Allow-Origin", origin)
            self.send_header("Access-Control-Allow-Credentials", "true")
            self.end_headers()
            self.wfile.write(body)

        def do_OPTIONS(self):
            self.send_response(204)
            origin = self.headers.get("Origin", "")
            if origin:
                self.send_header("Access-Control-Allow-Origin", origin)
            self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
            self.send_header("Access-Control-Allow-Headers", "Content-Type")
            self.send_header("Access-Control-Allow-Credentials", "true")
            self.end_headers()

        def do_GET(self):
            # Auth status check (JSON API for React app)
            if self.path == "/auth/status":
                return self._send_json({"authenticated": self._is_authenticated()})

            # Issue a short-lived, single-use WebSocket token
            if self.path == "/auth/ws-token":
                if auth is None:
                    return self._send_json({"token": "no-auth"})
                if not self._is_authenticated():
                    return self._send_json({"error": "Not authenticated"}, 403)
                ws_token = auth.create_ws_token()
                return self._send_json({"token": ws_token})

            # Static assets (JS/CSS bundles) are served without auth
            # so the login page can load properly if nested under /assets
            if self.path.startswith("/assets/"):
                return super().do_GET()

            if not self._is_authenticated():
                return self._send_login()

            # Download recorded CSV files
            if self.path.startswith("/recordings/"):
                return self._serve_recording()

            # SPA fallback: if the path doesn't match a file, serve index.html
            file_path = static_dir / self.path.lstrip("/")
            if not file_path.is_file() and not self.path.startswith("/assets"):
                self.path = "/index.html"
            super().do_GET()

        def _serve_recording(self):
            """Serve a recorded CSV file from the recordings directory."""
            filename = self.path.split("/")[-1]
            # Only allow simple filenames (no path traversal)
            if not filename or "/" in filename or "\\" in filename or ".." in filename:
                self.send_error(400)
                return
            recordings_dir = Path.cwd() / "recordings"
            file_path = (recordings_dir / filename).resolve()
            # Ensure resolved path is inside recordings_dir
            if not str(file_path).startswith(str(recordings_dir.resolve())):
                self.send_error(403)
                return
            if not file_path.is_file():
                self.send_error(404)
                return
            try:
                data = file_path.read_bytes()
            except OSError:
                self.send_error(500)
                return
            self.send_response(200)
            self.send_header("Content-Type", "text/csv")
            self.send_header("Content-Length", str(len(data)))
            self.send_header("Content-Disposition", f'attachment; filename="{filename}"')
            origin = self.headers.get("Origin", "")
            if origin:
                self.send_header("Access-Control-Allow-Origin", origin)
            self.send_header("Access-Control-Allow-Credentials", "true")
            self.end_headers()
            self.wfile.write(data)

        def do_POST(self):
            if self.path != "/auth":
                self.send_error(404)
                return

            # When auth is disabled, auto-authenticate
            if auth is None:
                content_type = self.headers.get("Content-Type", "")
                if "application/json" in content_type:
                    return self._send_json({"ok": True})
                self.send_response(303)
                self.send_header("Location", "/")
                self.end_headers()
                return

            # Rate limiting
            client_ip = self.client_address[0]
            if not auth.check_rate_limit(client_ip):
                logger.warning("Rate limit exceeded for %s", client_ip)
                content_type = self.headers.get("Content-Type", "")
                if "application/json" in content_type:
                    return self._send_json({"ok": False, "error": "Too many attempts. Try again later."}, 429)
                return self._send_login(error="Too many attempts. Try again in a minute.")

            length = int(self.headers.get("Content-Length", 0))
            body = self.rfile.read(length).decode("utf-8", errors="replace")
            content_type = self.headers.get("Content-Type", "")

            # Support both form-encoded (legacy) and JSON (React app)
            if "application/json" in content_type:
                try:
                    data = json.loads(body)
                    code = str(data.get("code", ""))
                except (json.JSONDecodeError, TypeError):
                    return self._send_json({"ok": False, "error": "Invalid request"}, 400)
            else:
                params = parse_qs(body)
                code = params.get("code", [""])[0]

            if not auth.verify_code(code):
                logger.warning("Invalid access code attempt from %s", self.client_address[0])
                if "application/json" in content_type:
                    return self._send_json({"ok": False, "error": "Invalid code"}, 403)
                return self._send_login(error="Invalid code. Check the server console.")

            token = auth.create_session()
            cookie = f"{COOKIE_NAME}={token}; Path=/; HttpOnly; SameSite=Lax"

            if "application/json" in content_type:
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.send_header("Set-Cookie", cookie)
                origin = self.headers.get("Origin", "")
                if origin:
                    self.send_header("Access-Control-Allow-Origin", origin)
                self.send_header("Access-Control-Allow-Credentials", "true")
                resp = json.dumps({"ok": True}).encode()
                self.send_header("Content-Length", str(len(resp)))
                self.end_headers()
                self.wfile.write(resp)
            else:
                self.send_response(303)
                self.send_header("Location", "/")
                self.send_header("Set-Cookie", cookie)
                self.end_headers()

            logger.info("Dashboard authenticated from %s", self.client_address[0])

    return _DashboardHandler


class _ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True


class DashboardServer:
    """Runs the dashboard HTTP server in a background thread."""

    def __init__(
        self,
        host: str = "0.0.0.0",
        port: int = DEFAULT_DASHBOARD_PORT,
        auth: AuthManager | None = None,
    ):
        self._host = host
        self._port = port
        self._auth = auth
        self._httpd = None
        self._thread = None

    def start(self):
        static_dir = STATIC_DIR

        handler = _make_handler(static_dir, self._auth)
        self._httpd = _ReusableTCPServer(
            (self._host, self._port), handler
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
