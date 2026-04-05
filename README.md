# PiEEG-server

[![PyPI](https://img.shields.io/pypi/v/pieeg-server?color=blue)](https://pypi.org/project/pieeg-server/)
[![Python](https://img.shields.io/pypi/pyversions/pieeg-server)](https://pypi.org/project/pieeg-server/)
[![CI](https://github.com/pieeg-club/PiEEG-server/actions/workflows/ci.yml/badge.svg)](https://github.com/pieeg-club/PiEEG-server/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/github/license/pieeg-club/PiEEG-server)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Raspberry%20Pi-c51a4a)](https://www.raspberrypi.com/)
[![Downloads](https://img.shields.io/pypi/dm/pieeg-server)](https://pypi.org/project/pieeg-server/)

A lightweight server for the [PiEEG](https://github.com/pieeg-club/PiEEG-16) shields (8 or 16 channels) that initializes the hardware, reads EEG at 250 Hz, streams live data over WebSocket, and serves a real-time dashboard — all on your local network.

```bash
curl -sSL https://raw.githubusercontent.com/pieeg-club/PiEEG-server/main/install.sh | bash
```

<p align="left">

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/65a2ab63-256b-4757-b6e3-c13716c92e35" />

  <img width="15%" alt="image" src="https://github.com/user-attachments/assets/395f1c53-88ff-4728-8cd9-b06b80bc82de" />
  <img width="15%" alt="Dashboard overview" src="https://github.com/user-attachments/assets/6e88f47c-f17e-47f8-a088-771f1a064d43" />
  <img width="15%" alt="Spectral analysis" src="https://github.com/user-attachments/assets/e9255668-05dd-4738-80b5-7c2a18411f65" />
  <img width="15%" alt="Channel detail" src="https://github.com/user-attachments/assets/1dca8e35-d645-46a5-b957-245b65f5dd82" />
  <img width="15%" alt="image" src="https://github.com/user-attachments/assets/a837586b-8df1-4e86-9ff9-c72e94830953" />



</p>

## Features

### Server

- **250 Hz real-time streaming** — continuous EEG data over WebSocket (`ws://<host>:1616`), plain JSON, language-agnostic
- **8 and 16 channel support** — auto-adapts to PiEEG-8 or PiEEG-16 shields (`--device pieeg8 | pieeg16`)
- **Server-side bandpass filter** — Butterworth IIR (SOS), per-channel state, configurable cutoffs (`--filter --lowcut 1 --highcut 40`); adjustable live via WebSocket command
- **CSV recording** — start/stop from the dashboard or CLI; auto-timestamped files with `~1 s` flush interval; optional duration limit
- **Session annotations** — attach text notes to any frame; stored as sidecar `.annotations.json`; export annotated CSV
- **Terminal monitor** — Rich-powered TUI with per-channel sparklines and µV readout; works over SSH with no browser (`--monitor`)
- **Mock mode** — realistic synthetic EEG (alpha rhythm, drift, noise, blink artifacts) for development without hardware (`--mock`)
- **Authentication** — optional 6-digit access code with rate limiting, HMAC timing-safe verification, HttpOnly session cookies, and single-use WebSocket tokens (`--auth`)
- **Self-diagnostics** — `pieeg-server doctor` checks Pi model, Python version, SPI/GPIO devices, permissions, ports, deps, and systemd service in one shot
- **Self-update** — detects git or pip install; checks PyPI / remote branch for new versions; one-click update from dashboard
- **Systemd service** — auto-starts on boot via the install script; standard `systemctl` management
- **Zero-dependency GPIO** — direct Linux chardev v1 ioctl (no `gpiod` package); stable ABI since Linux 4.8
- **Spike rejection** — auto-resets after sustained electrode contact changes
- **Webhooks** — configurable HTTP callbacks triggered by EEG events (band power thresholds, amplitude, band ratios); rules persisted to JSON on disk; server relays HTTP requests with custom method, headers, and cooldown; disable with `--no-webhooks`

### Dashboard

- **Real-time waveforms** — Canvas 2D rendering with adaptive quality (auto-downgrades on slow frames); configurable time window (2–16 s) and Y-scale (±50–500 µV)
- **Signal quality indicators** — live per-channel RMS badge with color feedback (green / yellow / red / gray-flatline)
- **Channel detail panel** — click any channel to expand: zoomed trace, FFT spectrum, band power bars, amplitude histogram, and full statistics overlay
- **Spectral analysis (FFT)** — 256-point Cooley–Tukey FFT in a Web Worker; PSD plot (log dB or linear); band power bars for Delta / Theta / Alpha / Beta / Gamma; dominant-frequency detection
- **Spectrogram** — scrolling time-frequency heatmap (Turbo colormap, –60 → 0 dB); circular buffer, incremental peak tracking
- **Topographic map** — IDW-interpolated scalp heatmap over the 10-20 montage; selectable band metric; head outline with nose/ears
- **Statistics panel** — 10 metrics per channel (Mean, RMS, Std, Variance, P-P, Min, Max, Skewness, Kurtosis, Zero-Crossings); sortable columns; CSV export
- **Filter preview** — live Butterworth magnitude response curve with passband highlight and –3 dB reference as you adjust cutoffs
- **Experiences gallery** — community-driven collection of immersive EEG visualizations; card-based launcher page; each experience lazy-loaded as a separate chunk; simple registry pattern for contributors (add a component + one entry)
- **3D immersive view** — Three.js arc of 16 wave strips with amplitude-responsive color, starfield, and cosmic environment; WebXR-ready with hand tracking support; available as the first experience in the gallery
- **AI chat assistant** — bring-your-own-provider side panel (OpenAI, Anthropic, Ollama, Groq, LM Studio, or any OpenAI-compatible endpoint); system prompt auto-includes live band powers and channel context; SSE streaming responses
- **Session library** — browse, open, and replay saved recordings with play/pause, seek, and speed control (0.5×–2×); add/delete annotations during playback
- **Performance monitor** — toggle overlay showing FPS, frame time, and JS heap usage
- **Keyboard shortcuts** — Space (pause), R (record), F (FFT), G (spectrogram), S (stats), V (experiences), C (chat), W (webhooks), P (perf monitor), ? (shortcut help)
- **Update banner** — notifies when a newer version is available with platform-appropriate upgrade instructions
- **Responsive auth gate** — 6-digit code entry screen when `--auth` is enabled; 24-hour session persistence
- **Webhook panel** — create rules that fire HTTP requests when EEG conditions are met (e.g. alpha power above threshold); browser-side FFT evaluation (no extra load on the Pi); supports POST/PUT/PATCH/GET methods, Authorization headers, and per-rule cooldown; enable/disable toggle works even when the panel is closed; active indicator dot on the toolbar; contextual `?` tooltips on every field

## Install

> Pick **one** method. They all get you to the same place: `pieeg-server` ready to run.

### Option A — One-line install (recommended)

SSH into your Pi and paste:

```bash
curl -sSL https://raw.githubusercontent.com/pieeg-club/PiEEG-server/main/install.sh | bash
sudo reboot   # only needed first time, to enable SPI
```

This enables SPI, installs dependencies, creates a virtualenv, sets up a systemd service, and verifies everything works.

### Option B — Clone & setup

```bash
git clone https://github.com/pieeg-club/PiEEG-server.git
cd PiEEG-server
chmod +x setup.sh
./setup.sh
sudo reboot   # only needed first time, to enable SPI
```

### Option C — pip install

```bash
pip install pieeg-server
```

---

## Run

```bash
pieeg-server              # start streaming (16ch by default)
pieeg-server --device pieeg8   # use with PiEEG-8 shield (8 channels)
pieeg-server --filter     # with 1–40 Hz bandpass filter
pieeg-server --monitor    # with live terminal display
pieeg-server --mock       # synthetic data, no hardware needed
pieeg-server --auth       # enable authentication (requires access code)
pieeg-server doctor       # diagnose SPI, GPIO, deps, permissions
```

That's it. LEDs turn on, data streams to `ws://raspberrypi.local:1616`.

Open **http://raspberrypi.local:1617** in any browser on your network for the real-time dashboard.

**Ports:**
- **`:1616`** — WebSocket data stream (PiEEG-**16** → **1616**)
- **`:1617`** — Web dashboard (next door)


## Connect from any device

The stream is a plain WebSocket that emits UTF-8 JSON frames on `ws://<host>:1616`.

- Replace `<host>` with `raspberrypi.local`, the Pi's IP, or `localhost`.
- No SDK is required. Any language or tool that can open a WebSocket can consume the stream.
- Without `--auth`, connect directly to `ws://<host>:1616`.
- With `--auth`, first authenticate on `http://<host>:1617/auth`, then request `http://<host>:1617/auth/ws-token`, then connect to `ws://<host>:1616?token=...`.

<details open>
<summary><strong>Tab 1: No Auth Examples</strong></summary>

### Command line

```bash
# websocat
websocat ws://raspberrypi.local:1616

# Node-based CLI
npx wscat -c ws://raspberrypi.local:1616

# Python one-liner
python -c "import asyncio, json, websockets; async def main():\n    async with websockets.connect('ws://raspberrypi.local:1616') as ws:\n        print(json.loads(await ws.recv()))\nasyncio.run(main())"
```

### Python

```python
import asyncio
import json

import websockets


async def main():
    async with websockets.connect("ws://raspberrypi.local:1616") as ws:
        async for message in ws:
            frame = json.loads(message)
            print(f"Sample #{frame['n']}: {frame['channels']}")


asyncio.run(main())
```

### JavaScript (browser)

```javascript
const ws = new WebSocket("ws://raspberrypi.local:1616");

ws.onmessage = (event) => {
  const frame = JSON.parse(event.data);
  console.log(`Sample #${frame.n}:`, frame.channels);
};
```

### Node.js

```javascript
import WebSocket from "ws";

const ws = new WebSocket("ws://raspberrypi.local:1616");

ws.on("message", (message) => {
  const frame = JSON.parse(message.toString());
  console.log(`Sample #${frame.n}:`, frame.channels);
});
```

### Generic client checklist

- URL: `ws://<host>:1616`
- Method: WebSocket upgrade
- Payload type: text frames containing JSON
- Message cadence: server-pushed, continuous
- Required fields in each frame: `t`, `n`, `channels`
- `channels` length: 8 or 16 (reported in welcome message)

</details>

<details>
<summary><strong>Tab 2: TypeScript with --auth</strong></summary>

```ts
const dashboardBase = "http://raspberrypi.local:1617";
const wsBase = "ws://raspberrypi.local:1616";
const accessCode = "<ACCESS_CODE_PRINTED_BY_PIEEG_SERVER_ON_STARTUP>";

async function connectAuthenticated(): Promise<WebSocket> {
  const authResponse = await fetch(`${dashboardBase}/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ code: accessCode }),
  });

  const authPayload = await authResponse.json();
  if (!authResponse.ok || authPayload.ok === false) {
    throw new Error(authPayload.error ?? "Authentication failed");
  }

  const tokenResponse = await fetch(`${dashboardBase}/auth/ws-token`, {
    credentials: "include",
  });
  if (!tokenResponse.ok) {
    throw new Error(`Token request failed: ${tokenResponse.status}`);
  }

  const { token } = (await tokenResponse.json()) as { token: string };
  const ws = new WebSocket(`${wsBase}?token=${encodeURIComponent(token)}`);

  ws.addEventListener("message", (event) => {
    const frame = JSON.parse(event.data as string) as {
      t: number;
      n: number;
      channels: number[];
    };

    console.log(`Sample #${frame.n}:`, frame.channels);
  });

  return ws;
}

void connectAuthenticated();
```

Authenticated flow summary:

1. Start the server with `pieeg-server --auth`.
2. `POST /auth` with the 6-digit code.
3. Reuse the session cookie returned by the dashboard server.
4. `GET /auth/ws-token` to obtain a short-lived, single-use WebSocket token.
5. Connect to `ws://<host>:1616?token=<token>`.

</details>

## Jupyter Notebooks

The [`notebooks/`](notebooks/) folder contains ready-to-run examples that show how to work with PiEEG data in Python:

| # | Notebook | Description |
|---|----------|-------------|
| 1 | `01_load_and_plot_session.ipynb` | Load a recorded CSV or stream live via WebSocket, plot all channels |
| 2 | `02_detect_blinks.ipynb` | Detect eye-blink artifacts on frontal channels with a simple threshold |
| 3 | `03_bandpower_and_alpha.ipynb` | Compute band powers (δ θ α β γ) with Welch's method, track alpha over time |
| 4 | `04_export_features_for_ml.ipynb` | Extract windowed features and export a tidy CSV for scikit-learn |

```bash
cd notebooks
pip install -r requirements.txt
pieeg-server --mock        # no hardware needed
jupyter lab
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
| `channels` | float[] | Voltage in microvolts (µV) per channel (8 or 16 elements) |


## CLI Options

```
pieeg-server [OPTIONS] [COMMAND]

Commands:
  doctor                 Diagnose hardware, software, and configuration
  record FILE            Record EEG data to CSV (standalone, no server)
  monitor                Live terminal display (standalone, no server)

Server options:
  --device DEVICE        pieeg8 or pieeg16 (default: pieeg16)
  --host HOST            Bind address (default: 0.0.0.0)
  --port PORT            WebSocket port (default: 1616)
  --dashboard-port PORT  Dashboard HTTP port (default: 1617)
  --no-dashboard         Disable the web dashboard
  --auth                 Enable authentication (requires 6-digit access code)
  --gpio-chip PATH       GPIO chip device path (default: /dev/gpiochip4)
  --filter               Enable 1–40 Hz bandpass filter server-side
  --lowcut HZ            Filter low cutoff (default: 1.0)
  --highcut HZ           Filter high cutoff (default: 40.0)
  --record FILE          Record to CSV while streaming
  --record-duration SEC  Stop recording after N seconds
  --monitor              Show live terminal monitor alongside server
  --mock                 Synthetic EEG data (no hardware needed)
  --no-webhooks          Disable the webhook system
  -v, --verbose          Debug logging
```

## Runtime Commands

Clients can send JSON commands over the WebSocket:

```json
{"cmd": "set_filter", "enabled": true, "lowcut": 1.0, "highcut": 40.0}
{"cmd": "set_filter", "enabled": false}
```

### Webhook commands

Webhook rules are managed via WebSocket commands. The dashboard handles this automatically, but custom clients can use these directly:

```json
{"cmd": "webhook_list"}
{"cmd": "webhook_create", "rule": {"name": "Alpha alert", "trigger_type": "band_power_above", "params": {"band": "alpha", "threshold": 20}, "url": "https://example.com/hook", "method": "POST", "headers": {"Authorization": "Bearer ..."}, "cooldown": 30}}
{"cmd": "webhook_update", "rule": {"id": "abc123", "name": "Updated name", "enabled": false}}
{"cmd": "webhook_delete", "id": "abc123"}
{"cmd": "webhook_test", "id": "abc123"}
{"cmd": "webhook_fire", "rule_id": "abc123", "value": 25.3}
```

Trigger types: `band_power_above`, `band_power_below`, `amplitude_above`, `amplitude_below`, `band_ratio_above`, `band_ratio_below`.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│  Raspberry Pi 5 + PiEEG Shield (8 or 16 ch)             │
│                                                          │
│  hardware.py     → SPI/GPIO init, ADC register config    │
│       ↓                                                  │
│  acquisition.py  → 250 Hz read loop (background thread)  │
│       ↓ pub/sub (multiple consumers)                     │
│       ├── server.py    → WebSocket broadcast             │
│       ├── recorder.py  → CSV file writer                 │
│       └── monitor.py   → Terminal sparkline display      │
│       ↓                                                  │
│  webhooks.py     → Rules store + HTTP relay              │
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


### Authentication

By default, the dashboard is **open to anyone on your network** (no authentication required).

To require an access code, start the server with `--auth`:

```bash
pieeg-server --auth
```

With authentication enabled, a **6-digit access code** is printed in your terminal at startup:

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

> **Security Note:** Without `--auth`, the dashboard and WebSocket are accessible to anyone on your network without a code.

### Dashboard

The dashboard is served at `http://raspberrypi.local:1617`.
Built with React + Vite, it provides a modern UI with per-channel canvases.

**Features:**
- Real-time EEG waveforms (adapts to 8 or 16 channels)
- Pause / resume, bandpass filter controls, adjustable time window & scale
- **Spectral Analysis (FFT)** — toggle the **FFT** button to open the spectral panel:
  - Pure-JS Cooley-Tukey radix-2 FFT (256-point, Hanning window)
  - Power Spectral Density plot (0–60 Hz, log/linear scale)
  - EEG frequency band power bars: Delta (δ 0.5–4 Hz), Theta (θ 4–8 Hz), Alpha (α 8–13 Hz), Beta (β 13–30 Hz), Gamma (γ 30–100 Hz)
  - Per-channel or all-channel average analysis
  - Dominant frequency detection

## Record data

```bash
pieeg-server record session.csv                   # record until Ctrl-C
pieeg-server record session.csv --duration 300     # record 5 minutes
pieeg-server --record session.csv                  # record while streaming
pieeg-server --record session.csv --record-duration 60  # record 60s while streaming
```

CSV format: `timestamp, ch1, ch2, ..., chN` (8 or 16 columns depending on device).

## Terminal monitor

```bash
pieeg-server monitor          # standalone live view (no server)
pieeg-server --monitor        # live view alongside the server
```

Displays all channels with real-time µV values and sparkline waveforms directly in the terminal. Works over SSH — no browser or display needed.

> **`pieeg-server: command not found`?** Run `pieeg-server doctor` (or `./setup.sh` again).
> As a fallback: `cd PiEEG-server && .venv/bin/pieeg-server`

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
git clone https://github.com/pieeg-club/PiEEG-server.git
cd PiEEG-server
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

Requires Node.js >= 18 and Python >= 3.10 on your **dev machine** (not on the Pi).

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

PiEEG server is designed for **trusted local networks** (home lab, research bench). It is **not hardened for the public internet**. Here's a breakdown of what's protected and what isn't.

### What's secured

| Layer | Protection |
|-------|------------|
| **Dashboard access** | Optional. Enabled only when you start the server with `--auth`; then a 6-digit code is required on first visit and regenerated every restart. |
| **Session tokens** | Cryptographically random (`secrets.token_urlsafe`, 256-bit), stored server-side with 24h TTL. |
| **Constant-time comparison** | Access code checked via `hmac.compare_digest` — immune to timing attacks. |
| **HttpOnly cookie** | Session token can't be read by JavaScript (mitigates XSS token theft). |
| **SameSite=Lax cookie** | Prevents cross-site request forgery on state-changing POST requests. |
| **WebSocket authentication** | Optional. When `--auth` is enabled, connections require a short-lived, single-use token obtained via the authenticated HTTP API. Without `--auth`, the WebSocket is open on your local network. |
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

> **PiEEG must operate from battery power (5V) only.**
> Do NOT connect to mains-powered equipment via USB.
> PiEEG is NOT a medical device.

## License

MIT
