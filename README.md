# PiEEG-16-server

A lightweight server for the [PiEEG-16](https://github.com/pieeg-club/PiEEG-16) shield that initializes the hardware, reads 16 channels at 250 Hz, streams live data over WebSocket, and serves a real-time dashboard — all on your local network.

## Install

> Pick **one** method. They all get you to the same place: `pieeg-server` ready to run.

### Option A — pip install (recommended)

```bash
pip install pieeg-server
```

### Option B — One-line install

SSH into your Pi and paste:

```bash
curl -sSL https://raw.githubusercontent.com/yelabb/PiEEG-16-server/main/install.sh | bash
sudo reboot   # only needed first time, to enable SPI
```

### Option C — Clone & setup

```bash
git clone https://github.com/yelabb/PiEEG-16-server.git
cd PiEEG-16-server
chmod +x setup.sh
./setup.sh
sudo reboot   # only needed first time, to enable SPI
```

---

## Run

```bash
pieeg-server              # start streaming
pieeg-server --filter     # with 1–40 Hz bandpass filter
pieeg-server --monitor    # with live terminal display
pieeg-server --mock       # synthetic data, no hardware needed
pieeg-server --no-auth    # disable authentication (no access code)
pieeg-server doctor       # diagnose SPI, GPIO, deps, permissions
```

That's it. LEDs turn on, data streams to `ws://raspberrypi.local:1616`.

Open **http://raspberrypi.local:1617** in any browser on your network for the real-time dashboard.

**Ports:**
- **`:1616`** — WebSocket data stream (PiEEG-**16** → **1616**)
- **`:1617`** — Web dashboard (next door)

### Authentication

When the server starts, a **6-digit access code** is printed in your terminal:

```
╔══════════════════════════════════════╗
║        DASHBOARD ACCESS CODE         ║
║                                      ║
║       ██  ██  ██  ██  ██  ██        ║
║                                      ║
║         Code: 847291                 ║
╚══════════════════════════════════════╝
```

The first time you open the dashboard in your browser, you'll be asked for this code. After that, your session is remembered for 24 hours.

The code changes every time the server restarts.

To skip authentication entirely (e.g. for local development or trusted networks), start with:

```bash
pieeg-server --no-auth
```

> **Warning:** `--no-auth` exposes the dashboard and WebSocket to anyone on the network without a code.

### Dashboard

The dashboard is served at `http://raspberrypi.local:1617` and requires the access code.
Built with React + Vite, it provides a modern UI with per-channel canvases.

**Features:**
- 16-channel real-time EEG waveforms (4×4 grid)
- Pause / resume, bandpass filter controls, adjustable time window & scale
- **Spectral Analysis (FFT)** — toggle the **FFT** button to open the spectral panel:
  - Pure-JS Cooley-Tukey radix-2 FFT (256-point, Hanning window)
  - Power Spectral Density plot (0–60 Hz, log/linear scale)
  - EEG frequency band power bars: Delta (δ 0.5–4 Hz), Theta (θ 4–8 Hz), Alpha (α 8–13 Hz), Beta (β 13–30 Hz), Gamma (γ 30–100 Hz)
  - Per-channel or all-channel average analysis
  - Dominant frequency detection

<img height="400" alt="image" src="https://github.com/user-attachments/assets/3f33bfd4-c721-4b94-a672-2a0b744d127b" />

### Terminal
<img width="422" height="475" alt="image" src="https://github.com/user-attachments/assets/7d58af68-85c4-41d3-b1ab-89b23e99faff" />

## Record data

```bash
pieeg-server record session.csv                   # record until Ctrl-C
pieeg-server record session.csv --duration 300     # record 5 minutes
pieeg-server --record session.csv                  # record while streaming
pieeg-server --record session.csv --record-duration 60  # record 60s while streaming
```

CSV format: `timestamp, ch1, ch2, ..., ch16` (compatible with the official PiEEG-16 dataset format).

## Terminal monitor

```bash
pieeg-server monitor          # standalone live view (no server)
pieeg-server --monitor        # live view alongside the server
```

Displays all 16 channels with real-time µV values and sparkline waveforms directly in the terminal. Works over SSH — no browser or display needed.

> **`pieeg-server: command not found`?** Run `pieeg-server doctor` (or `./setup.sh` again).
> As a fallback: `cd PiEEG-16-server && .venv/bin/pieeg-server`

## Troubleshooting

```bash
pieeg-server doctor
```

Checks everything in one shot: Pi model, Python version, SPI devices, GPIO chips, file permissions, port availability, installed dependencies, systemd service. Returns exit code `0` (all good), `1` (warnings), or `2` (errors) — scriptable with `--quiet`.

### Windows: `Could not install packages due to an OSError`

If `pip install -e .` fails with a `WinError 2` or `Failed to write executable` error, pip can't replace an old `pieeg-server.exe` in your Python Scripts folder. Fix it:

```powershell
pip uninstall pieeg-server -y
pip install -e .
```

If that still fails, run your terminal **as Administrator** (right-click → Run as administrator).

### Windows: using the `.cmd` wrapper

If the system-wide `pieeg-server` command picks up the wrong Python install, use the included wrapper that always uses the project's venv:

```powershell
.\pieeg-server.cmd --mock
```

> On Windows you can only use mock mode (`pieeg-server --mock`) since SPI/GPIO hardware is not available.

## Connect from any device

> **Note:** The WebSocket now requires a token. Get one from the authenticated HTTP API first.

### Python

```python
import asyncio, json, requests, websockets

# Step 1: authenticate and get a WS token
session = requests.Session()
ACCESS_CODE = "<ACCESS_CODE_PRINTED_BY_PIEEG_SERVER_ON_STARTUP>"
session.post("http://raspberrypi.local:1617/auth", json={"code": ACCESS_CODE})
token = session.get("http://raspberrypi.local:1617/auth/ws-token").json()["token"]

# Step 2: connect with the token
async def main():
    async with websockets.connect(f"ws://raspberrypi.local:1616?token={token}") as ws:
        async for message in ws:
            frame = json.loads(message)
            print(f"Sample #{frame['n']}: {frame['channels']}")

asyncio.run(main())
```

### JavaScript (browser)

```javascript
// Fetch a short-lived WS token (requires an active dashboard session)
const res = await fetch("/auth/ws-token", { credentials: "include" });
const { token } = await res.json();

const ws = new WebSocket(`ws://raspberrypi.local:1616?token=${encodeURIComponent(token)}`);
ws.onmessage = (event) => {
    const frame = JSON.parse(event.data);
    console.log(`Sample #${frame.n}:`, frame.channels);
};
```

## Data Format

Each WebSocket message is a JSON frame:

```json
{
    "t": 1711234567.123456,
    "n": 42,
    "channels": [12.34, -5.67, 8.90, ...]
}
```

| Field | Type | Description |
|-------|------|-------------|
| `t` | float | Unix timestamp (seconds) |
| `n` | int | Sample number (monotonic) |
| `channels` | float[16] | Voltage in microvolts (µV) per channel |

## CLI Options

```
pieeg-server [OPTIONS] [COMMAND]

Commands:
  doctor                 Diagnose hardware, software, and configuration
  record FILE            Record EEG data to CSV (standalone, no server)
  monitor                Live terminal display (standalone, no server)

Server options:
  --host HOST            Bind address (default: 0.0.0.0)
  --port PORT            WebSocket port (default: 1616)
  --dashboard-port PORT  Dashboard HTTP port (default: 1617)
  --no-dashboard         Disable the web dashboard
  --no-auth              Disable authentication (no access code required)
  --gpio-chip PATH       GPIO chip device path (default: /dev/gpiochip4)
  --filter               Enable 1–40 Hz bandpass filter server-side
  --lowcut HZ            Filter low cutoff (default: 1.0)
  --highcut HZ           Filter high cutoff (default: 40.0)
  --record FILE          Record to CSV while streaming
  --record-duration SEC  Stop recording after N seconds
  --monitor              Show live terminal monitor alongside server
  --mock                 Synthetic EEG data (no hardware needed)
  -v, --verbose          Debug logging
```

## Runtime Commands

Clients can send JSON commands over the WebSocket:

```json
{"cmd": "set_filter", "enabled": true, "lowcut": 1.0, "highcut": 40.0}
{"cmd": "set_filter", "enabled": false}
```

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│  Raspberry Pi 5 + PiEEG-16 Shield                       │
│                                                          │
│  hardware.py     → SPI/GPIO init, ADC register config    │
│       ↓                                                  │
│  acquisition.py  → 250 Hz read loop (background thread)  │
│       ↓ pub/sub (multiple consumers)                     │
│       ├── server.py    → WebSocket broadcast             │
│       ├── recorder.py  → CSV file writer                 │
│       └── monitor.py   → Terminal sparkline display      │
│       ↓                                                  │
│  dashboard.py    → HTTP server for real-time web UI       │
│       ↓                                                  │
│  ws://0.0.0.0:1616  │  http://0.0.0.0:1617              │
└──────────┬───────────────────────────────────────────────┘
           │  Local network
           ├── Browser (JS client)
           ├── Python notebook
           ├── Mobile app
           └── Any WebSocket client
```

## Runs as a Service

Setup creates a systemd service that auto-starts on boot:

```bash
sudo systemctl status pieeg-server    # check status
sudo systemctl stop pieeg-server      # stop
sudo systemctl restart pieeg-server   # restart
journalctl -u pieeg-server -f         # view logs
```

## GPIO: No `gpiod` Dependency

This server talks to GPIO directly via the Linux kernel's character device interface (`/dev/gpiochipN`) using standard `ioctl` calls — no `gpiod` pip package needed.

We only use two GPIO pins (chip-select output + data-ready input), so the ~20 lines of `struct` packing replace an entire external dependency that:

- Has **breaking API changes** between v1 and v2 (completely incompatible)
- Requires **system C headers** (`libgpiod-dev`) to install via pip
- Only works on **Linux** (blocks development/testing on macOS/Windows)

The chardev v1 ioctl ABI has been stable since Linux 4.8 (2016) and is guaranteed not to break by the kernel's userspace compatibility policy.

## Development

### Setup

```bash
git clone https://github.com/yelabb/PiEEG-16-server.git
cd PiEEG-16-server
python -m venv .venv && source .venv/bin/activate  # or .venv\Scripts\Activate.ps1 on Windows
pip install -e ".[dev]"
```

### Dashboard development (React)

The React dashboard source lives in `dashboard/`. During development, use the Vite dev server for hot reload:

```bash
# Terminal 1: start the Python server (mock data, no hardware needed)
pieeg-server --mock

# Terminal 2: start the Vite dev server
cd dashboard
npm install
npm run dev          # → http://localhost:3000
```

The Vite dev server proxies `/auth` and `/ws` to the Python server, so authentication and data streaming work the same as production.

### Building the dashboard

The React dashboard is **pre-built and committed to git** in `pieeg_server/static/dashboard/` so that `pip install` users get it without needing Node.js.

If you change files in `dashboard/src/`, rebuild:

```bash
cd dashboard && npm run build
```

#### Auto-build on commit (pre-commit hook)

A git hook auto-rebuilds the dashboard whenever you commit changes to `dashboard/src/`. Install it once:

```bash
cp scripts/pre-commit .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit          # Linux/macOS
```

After that, `git commit` will automatically:
1. Detect staged changes in `dashboard/src/`
2. Run `npm run build`
3. Stage the fresh build output

No more forgetting to rebuild before pushing.

### Tests

```bash
pytest                    # run all tests
pytest -v                 # verbose output
```

### Publishing to PyPI

#### Release build

```bash
./scripts/build_release.sh            # React build → Python wheel → dist/
./scripts/build_release.sh --upload   # also uploads to PyPI
```

Requires Node.js >= 18 and Python >= 3.11 on your **dev machine** (not on the Pi).

#### Release workflow

1. Merge your feature branch into `main`
2. Bump `version` in both `pyproject.toml` and `pieeg_server/__init__.py`
3. Commit: `git commit -am "release v0.2.0"`
4. Tag: `git tag v0.2.0`
5. Release: `./scripts/build_release.sh --upload`
6. Push: `git push origin main --tags`

> **Pre-releases:** Use a version like `0.2.0a1` or `0.2.0.dev1` to publish from a non-main branch.

## Acknowledgments

This project was built with guidance from [Ildar Rakhmatulin, PhD](https://scholar.google.com/citations?user=L8q-KSoAAAAJ&hl=en), creator of the PiEEG platform.

## Security

PiEEG-16-server is designed for **trusted local networks** (home lab, research bench). It is **not hardened for the public internet**. Here's an honest breakdown of what's protected and what isn't.

### What's secured

| Layer | Protection |
|-------|------------|
| **Dashboard access** | 6-digit code required on first visit. Regenerated every server restart. |
| **Session tokens** | Cryptographically random (`secrets.token_urlsafe`, 256-bit), stored server-side with 24h TTL. |
| **Constant-time comparison** | Access code checked via `hmac.compare_digest` — immune to timing attacks. |
| **HttpOnly cookie** | Session token can't be read by JavaScript (mitigates XSS token theft). |
| **SameSite=Lax cookie** | Prevents cross-site request forgery on state-changing POST requests. |
| **WebSocket authentication** | Connections require a short-lived, single-use token obtained via the authenticated HTTP API. Unauthenticated WebSocket connections are rejected with code 4401. |
| **Rate limiting** | `/auth` endpoint limited to 5 attempts per IP per 60 seconds (prevents brute-force on the 6-digit code). |
| **Path traversal protection** | `/recordings/` downloads resolve paths and verify they stay inside the recordings directory. |
| **CORS** | `Access-Control-Allow-Origin` reflects the requesting origin (not wildcard) and only when credentials are involved. |

### What's NOT secured

| Risk | Detail | Mitigation |
|------|--------|------------|
| **No TLS (HTTP/WS only)** | All traffic — access code, session cookie, EEG data — travels in plaintext. Anyone on the same WiFi can sniff it. | Use on a dedicated/private network. If you need encryption, put an nginx reverse proxy with a self-signed cert in front. |
| **No user accounts** | Single shared code, no roles or per-user sessions. Anyone with the code has full access. | Acceptable for a single-user device on a home network. |
| **No Content Security Policy** | The dashboard doesn't set CSP headers. If an attacker can inject HTML, inline scripts will execute. | The dashboard is a static React build with no user-generated content. |
| **In-memory sessions** | All sessions are lost on server restart. | By design — the code changes too, so this is consistent. |
| **6-digit code entropy** | 900,000 possibilities. Even with rate limiting, a determined local attacker could exhaust it in ~3 hours. | The server is meant for trusted networks. If this concerns you, restrict access at the network level (firewall, VLAN). |

### Threat model

The server assumes:
- It runs on a **private local network** (home WiFi, lab bench, hotspot)
- The operator has **physical access** to the Pi (can read the access code from the console)
- Clients are **trusted devices** (your laptop, phone, tablet)

It does **not** defend against:
- Active network attackers performing MITM (no TLS)
- Public internet exposure (do **not** port-forward 1616/1617)
- Multi-tenant environments with untrusted users on the same network

### Recommendations for sensitive deployments

1. **Private network only** — use a dedicated WiFi hotspot or wired connection
2. **TLS termination** — put nginx/caddy with a self-signed cert in front of both ports
3. **Firewall** — restrict ports 1616/1617 to known client IPs
4. **VPN** — if accessing remotely, use WireGuard or Tailscale instead of port-forwarding

## Safety

> **PiEEG-16 must operate from battery power (5V) only.**
> Do NOT connect to mains-powered equipment via USB.
> PiEEG-16 is NOT a medical device.

## License

MIT
