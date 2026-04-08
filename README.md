# PiEEG-server

> **Try it now** — no hardware needed: [pieeg.vercel.app](https://pieeg.vercel.app) runs in demo mode with synthetic EEG data.

[![PyPI](https://img.shields.io/pypi/v/pieeg-server?color=blue)](https://pypi.org/project/pieeg-server/)
[![Python](https://img.shields.io/pypi/pyversions/pieeg-server)](https://pypi.org/project/pieeg-server/)
[![CI](https://github.com/pieeg-club/PiEEG-server/actions/workflows/ci.yml/badge.svg)](https://github.com/pieeg-club/PiEEG-server/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/github/license/pieeg-club/PiEEG-server)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Raspberry%20Pi-c51a4a)](https://www.raspberrypi.com/)
[![Downloads](https://img.shields.io/pypi/dm/pieeg-server)](https://pypi.org/project/pieeg-server/)
[![IFTTT](https://img.shields.io/badge/IFTTT-compatible-black?logo=ifttt&logoColor=white)](https://ifttt.com/maker_webhooks)
[![Zapier](https://img.shields.io/badge/Zapier-compatible-FF4A00?logo=zapier&logoColor=white)](https://zapier.com/apps/webhooks)

A real-time EEG streaming platform for [PiEEG](https://github.com/pieeg-club/PiEEG-16) shields (8/16 ch). Reads at 250 Hz, streams over WebSocket, serves a live dashboard with spectral analysis, topographic maps, an experiences gallery, VRChat OSC bridge, webhook automation — all from your Raspberry Pi.

```bash
curl -sSL https://raw.githubusercontent.com/pieeg-club/PiEEG-server/main/install.sh | bash
```

<p align="left">
  <img width="100%" alt="image" src="https://github.com/user-attachments/assets/6172a2cd-c7fc-4a77-8b7f-644a2e177826" />
  <img width="15%" alt="image" src="https://github.com/user-attachments/assets/395f1c53-88ff-4728-8cd9-b06b80bc82de" />
  <img width="15%" alt="Dashboard overview" src="https://github.com/user-attachments/assets/6e88f47c-f17e-47f8-a088-771f1a064d43" />
  <img width="15%" alt="Spectral analysis" src="https://github.com/user-attachments/assets/e9255668-05dd-4738-80b5-7c2a18411f65" />
  <img width="15%" alt="Channel detail" src="https://github.com/user-attachments/assets/1dca8e35-d645-46a5-b957-245b65f5dd82" />
  <img width="15%" alt="image" src="https://github.com/user-attachments/assets/a837586b-8df1-4e86-9ff9-c72e94830953" />
</p>

---

## Install

> Pick **one** method — they all get you `pieeg-server` ready to run.

**A) One-line install (recommended)**
```bash
curl -sSL https://raw.githubusercontent.com/pieeg-club/PiEEG-server/main/install.sh | bash
sudo reboot   # first time only, to enable SPI
```

**B) Clone & setup**
```bash
git clone https://github.com/pieeg-club/PiEEG-server.git
cd PiEEG-server && chmod +x setup.sh && ./setup.sh
sudo reboot   # first time only
```

**C) pip**
```bash
pip install pieeg-server
```

## Run

```bash
pieeg-server                        # stream 16 ch
pieeg-server --device pieeg8        # 8-channel shield
pieeg-server --filter               # 1–40 Hz bandpass
pieeg-server --monitor              # terminal sparklines
pieeg-server --mock                 # synthetic data, no hardware
pieeg-server --auth                 # require 6-digit access code
pieeg-server --osc                  # VRChat OSC bridge
pieeg-server doctor                 # diagnose everything
```

**Ports:** `:1616` WebSocket data — `:1617` web dashboard

Open **http://raspberrypi.local:1617** in any browser on your network.

---

## Features

<details>
<summary><strong>Server</strong></summary>

- **250 Hz real-time streaming** — WebSocket (`ws://<host>:1616`), plain JSON, language-agnostic
- **8 & 16 channel support** — auto-adapts to PiEEG-8 or PiEEG-16 shields
- **Server-side bandpass filter** — Butterworth IIR (SOS), per-channel state, adjustable live via WebSocket
- **CSV recording** — start/stop from dashboard or CLI; auto-timestamped files; optional duration limit
- **Session annotations** — text notes on any frame; sidecar `.annotations.json`
- **Terminal monitor** — Rich TUI with per-channel sparklines and µV readout; works over SSH
- **Mock mode** — realistic synthetic EEG (alpha rhythm, drift, noise, blink artifacts) for dev without hardware
- **Authentication** — optional 6-digit code, rate limiting, HMAC timing-safe verify, HttpOnly cookies, single-use WS tokens
- **VRChat OSC bridge** — stream band powers to VRChat via UDP OSC; chatbox text, avatar parameters, or both; rolling normalization; zero dependencies
- **Webhooks** — HTTP callbacks on EEG events (band power, amplitude, ratios); IFTTT & Zapier presets; per-rule cooldown; JSON persistence
- **Self-diagnostics** — `pieeg-server doctor` checks Pi model, SPI/GPIO, ports, deps, systemd in one shot
- **Self-update** — detects pip/git install; checks PyPI or remote branch; one-click upgrade from dashboard
- **Systemd service** — auto-starts on boot; standard `systemctl` management
- **Zero-dependency GPIO** — direct Linux chardev v1 ioctl; stable ABI since Linux 4.8
- **Spike rejection** — auto-resets after sustained electrode contact changes
- **Cloud-ready** — Dockerfile + Fly.io config included for mock-mode demo hosting

</details>

<details>
<summary><strong>Dashboard</strong></summary>

- **Real-time waveforms** — Canvas 2D with adaptive quality; time window 2–16 s, Y-scale ±50–500 µV
- **Signal quality badges** — live per-channel RMS with color feedback (green / yellow / red / gray)
- **Channel detail panel** — click to expand: zoomed trace, FFT, band power bars, histogram, statistics
- **Spectral analysis** — 256-point FFT in a Web Worker; PSD plot (log dB / linear); band power bars for δ θ α β γ; dominant-frequency detection
- **Spectrogram** — scrolling time-frequency heatmap (Turbo colormap, –60 → 0 dB)
- **Topographic map** — IDW-interpolated scalp heatmap over 10-20 montage; selectable band metric
- **Statistics panel** — 10 metrics per channel; sortable columns; CSV export
- **Filter preview** — live Butterworth magnitude response with –3 dB reference
- **Session library** — browse, replay recordings with play/pause, seek, speed control (0.5×–2×); annotations
- **AI chat assistant** — BYO provider (OpenAI, Anthropic, Ollama, Groq, LM Studio, any OpenAI-compatible); SSE streaming; live band powers in context
- **Webhook panel** — visual rule builder; POST/PUT/PATCH/GET; Authorization headers; IFTTT & Zapier presets; per-rule cooldown; enable/disable toggle; status indicator
- **Webcam feed** — optional video overlay
- **Performance monitor** — FPS, frame time, JS heap overlay
- **Update banner** — version upgrade notification
- **Responsive** — desktop: all 16 channels; mobile: 4-channel subset
- **Keyboard shortcuts** — `Space` pause · `R` record · `F` FFT · `G` spectrogram · `S` stats · `V` experiences · `C` chat · `W` webhooks · `P` perf · `?` help

</details>

<details>
<summary><strong>Experiences Gallery</strong></summary>

Community-driven immersive EEG visualizations — lazy-loaded, card-based launcher, simple registry for contributors.

| Experience | Description |
|---|---|
| **Neural Wave Space** | Three.js 3D arc of 16 wave strips with amplitude-responsive color, starfield, WebXR + hand tracking |
| **Blink Browser** | Scroll articles via eye blinks; per-user calibration; frontal electrode monitoring |
| **Neural Sonification** | Brainwaves → live music; bands mapped to drone, FM pad, lead, harmonics, shimmer; DJ controls |
| **VRChat OSC** | Stream band powers into VRChat; chatbox + avatar parameter output; live config UI |
| **Spoon Bend** | Matrix-style telekinesis controlled by focus/beta/gamma; 3D spoon + digital rain |
| **Webhook Wizard** | Guided 60-second first-webhook setup; live EEG feedback; IFTTT/Zapier templates |

</details>

<details>
<summary><strong>Client-side Detectors</strong></summary>

Browser-side EEG processing hooks (React refs, zero re-renders):

| Hook | Returns | Description |
|------|---------|-------------|
| `useBlink` | `{blinked}` | Eye blink detection (100 ms window, adaptive threshold) |
| `useFocus` | `{focus}` | Focus score 0–1 from β/θ ratio |
| `useRelax` | `{relaxation}` | Relaxation score 0–1 from α dominance |
| `useBandPowers` | `{δ, θ, α, β, γ}` | All 5 band powers (µV²/Hz) |

</details>

---

## Connect from any device

Plain WebSocket, UTF-8 JSON frames on `ws://<host>:1616`. No SDK needed.

<details open>
<summary><strong>Quick examples (no auth)</strong></summary>

```bash
websocat ws://raspberrypi.local:1616                    # CLI
npx wscat -c ws://raspberrypi.local:1616                # Node CLI
```

**Python**
```python
import asyncio, json, websockets

async def main():
    async with websockets.connect("ws://raspberrypi.local:1616") as ws:
        async for msg in ws:
            frame = json.loads(msg)
            print(f"#{frame['n']}: {frame['channels']}")

asyncio.run(main())
```

**JavaScript**
```javascript
const ws = new WebSocket("ws://raspberrypi.local:1616");
ws.onmessage = (e) => {
  const frame = JSON.parse(e.data);
  console.log(`#${frame.n}:`, frame.channels);
};
```

</details>

<details>
<summary><strong>Authenticated connection (TypeScript)</strong></summary>

With `--auth` enabled: `POST /auth` with the 6-digit code → `GET /auth/ws-token` → connect with `?token=...`.

```ts
const dashboardBase = "http://raspberrypi.local:1617";
const wsBase = "ws://raspberrypi.local:1616";

async function connectAuthenticated(code: string): Promise<WebSocket> {
  await fetch(`${dashboardBase}/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ code }),
  });

  const { token } = await fetch(`${dashboardBase}/auth/ws-token`, {
    credentials: "include",
  }).then((r) => r.json());

  const ws = new WebSocket(`${wsBase}?token=${encodeURIComponent(token)}`);
  ws.addEventListener("message", (e) => {
    const frame = JSON.parse(e.data as string);
    console.log(`#${frame.n}:`, frame.channels);
  });
  return ws;
}
```

</details>

## Data format

```json
{ "t": 1711234567.123, "n": 42, "channels": [12.34, -5.67, 8.90, ...] }
```

| Field | Type | Description |
|-------|------|-------------|
| `t` | float | Unix timestamp (seconds) |
| `n` | int | Sample number (monotonic) |
| `channels` | float[] | µV per channel (8 or 16 elements) |

---

## CLI reference

<details>
<summary><strong>All options</strong></summary>

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
  --auth                 Enable 6-digit access code authentication
  --gpio-chip PATH       GPIO chip device (default: /dev/gpiochip4)
  --filter               Enable 1–40 Hz bandpass filter
  --lowcut HZ            Filter low cutoff (default: 1.0)
  --highcut HZ           Filter high cutoff (default: 40.0)
  --record FILE          Record to CSV while streaming
  --record-duration SEC  Stop recording after N seconds
  --monitor              Show terminal monitor alongside server
  --mock                 Synthetic EEG (no hardware needed)
  --no-webhooks          Disable webhooks
  --osc                  Enable VRChat OSC bridge
  --osc-host HOST        VRChat receiver (default: 127.0.0.1)
  --osc-port PORT        VRChat OSC port (default: 9000)
  --osc-mode MODE        chatbox, parameters, or both (default: both)
  --osc-interval SEC     OSC update rate (default: 0.25)
  -v, --verbose          Debug logging
```

</details>

<details>
<summary><strong>WebSocket commands</strong></summary>

```json
{"cmd": "set_filter", "enabled": true, "lowcut": 1.0, "highcut": 40.0}
{"cmd": "set_filter", "enabled": false}
```

**Webhooks**
```json
{"cmd": "webhook_list"}
{"cmd": "webhook_create", "rule": {"name": "Alpha alert", "trigger_type": "band_power_above", "params": {"band": "alpha", "threshold": 20}, "url": "https://example.com/hook", "method": "POST", "headers": {"Authorization": "Bearer ..."}, "cooldown": 30}}
{"cmd": "webhook_update", "rule": {"id": "abc123", "enabled": false}}
{"cmd": "webhook_delete", "id": "abc123"}
{"cmd": "webhook_test", "id": "abc123"}
```

Trigger types: `band_power_above`, `band_power_below`, `amplitude_above`, `amplitude_below`, `band_ratio_above`, `band_ratio_below`.

**VRChat OSC**
```json
{"cmd": "osc_start"}
{"cmd": "osc_stop"}
{"cmd": "osc_configure", "host": "127.0.0.1", "port": 9000, "mode": "both", "interval": 0.25}
{"cmd": "osc_status"}
```

</details>

<details>
<summary><strong>IFTTT & Zapier integration</strong></summary>

Webhook rules support three service modes — **Generic**, **IFTTT**, **Zapier** — selectable per rule.

**<img src="https://cdn.simpleicons.org/ifttt/black" width="14" height="14" alt="IFTTT"> IFTTT** — Get your key at [ifttt.com/maker_webhooks](https://ifttt.com/maker_webhooks) → Documentation. URL: `https://maker.ifttt.com/trigger/{event}/with/key/{key}`. Payload: `value1` (measured value), `value2` (trigger type), `value3` (full JSON detail).

**<img src="https://cdn.simpleicons.org/zapier/FF4A00" width="14" height="14" alt="Zapier"> Zapier** — Create a Zap with Webhooks trigger (Catch Hook). Paste the URL. Payload: flat JSON with `event`, `rule`, `value`, `threshold`, `channel`, `band`, `timestamp`, `source`.

**Generic** — JSON body with `event`, `rule`, `value`, `threshold`, `channel`, `timestamp`. Works with n8n, Home Assistant, Node-RED, or any POST-accepting endpoint.

<details>
<summary>Example payloads</summary>

```json
// IFTTT
{"value1": "23.45", "value2": "band_power_above", "value3": "{\"event\":\"band_power_above\",\"rule\":\"Alpha alert\",\"value\":23.45,\"threshold\":20}"}

// Zapier
{"event": "band_power_above", "rule": "Alpha alert", "value": 23.45, "threshold": 20, "channel": 0, "band": "alpha", "timestamp": 1711234567.12, "source": "pieeg"}

// Generic
{"event": "band_power_above", "rule": "Alpha alert", "value": 23.45, "threshold": 20, "channel": 0, "timestamp": 1711234567.12}
```

</details>

</details>

---

## Record & replay

```bash
pieeg-server record session.csv                    # standalone, Ctrl-C to stop
pieeg-server record session.csv --duration 300     # 5 minutes
pieeg-server --record session.csv                  # record while streaming
```

CSV format: `timestamp, ch1, ch2, ..., chN`. Replay in the dashboard's session library with seek, speed control (0.5×–2×), and annotations.

## Jupyter notebooks

| # | Notebook | Description |
|---|----------|-------------|
| 1 | `01_load_and_plot_session` | Load CSV or stream live, plot all channels |
| 2 | `02_detect_blinks` | Eye-blink artifact detection (threshold-based) |
| 3 | `03_bandpower_and_alpha` | Band powers via Welch's method, alpha tracking |
| 4 | `04_export_features_for_ml` | Windowed features → ML-ready CSV (scikit-learn) |

```bash
cd notebooks && pip install -r requirements.txt
pieeg-server --mock && jupyter lab
```

---

## Architecture

```
┌──────────────────────────────────────────────────────────┐
│  Raspberry Pi + PiEEG Shield (8 or 16 ch)                │
│                                                          │
│  hardware.py     → SPI/GPIO init, ADS1299 config         │
│       ↓                                                  │
│  acquisition.py  → 250 Hz read loop (background thread)  │
│       ↓ pub/sub                                          │
│       ├── server.py     → WebSocket broadcast            │
│       ├── recorder.py   → CSV writer                     │
│       ├── monitor.py    → Terminal sparklines             │
│       └── osc_vrchat.py → VRChat OSC bridge              │
│                                                          │
│  webhooks.py  → event rules + HTTP relay                 │
│  dashboard.py → HTTP server (React UI)                   │
│  auth.py      → session + WS token management            │
│  filters.py   → Butterworth bandpass (SOS)               │
│  updater.py   → version check + upgrade                  │
│  doctor.py    → system diagnostics                       │
│       ↓                                                  │
│  ws://0.0.0.0:1616  │  http://0.0.0.0:1617              │
└──────────┬───────────────────────────────────────────────┘
           │  Local network / internet
           ├── Browser dashboard (React + Vite)
           ├── Python / Jupyter notebook
           ├── VRChat (OSC over UDP)
           ├── IFTTT / Zapier (webhooks)
           └── Any WebSocket client
```

<details>
<summary><strong>Systemd service</strong></summary>

Setup creates a service that auto-starts on boot:

```bash
sudo systemctl status pieeg-server
sudo systemctl restart pieeg-server
journalctl -u pieeg-server -f
```

</details>

<details>
<summary><strong>Authentication details</strong></summary>

Start with `--auth` to require a 6-digit access code (printed at startup, changes every restart). Sessions persist 24 hours via HttpOnly cookies.

```
╔══════════════════════════════════════╗
║        DASHBOARD ACCESS CODE         ║
║            Code: 847291              ║
╚══════════════════════════════════════╝
```

| Layer | Protection |
|-------|------------|
| Access code | HMAC timing-safe comparison |
| Sessions | `secrets.token_urlsafe` (256-bit), 24h TTL |
| Cookies | HttpOnly, SameSite=Lax |
| WebSocket | Short-lived single-use token |
| Rate limit | 5 attempts / 60s per IP |
| Recordings | Path traversal protection |
| CORS | Origin-reflecting (not wildcard) |

> Without `--auth`, dashboard and WebSocket are open to your local network.

</details>

---

## Troubleshooting

```bash
pieeg-server doctor     # checks Pi model, SPI, GPIO, ports, deps, systemd
                        # exit 0 = ok, 1 = warnings, 2 = errors
```

<details>
<summary><strong>Windows notes</strong></summary>

Windows only supports mock mode (`--mock`). If `pip install -e .` fails with `WinError 2`:

```powershell
pip uninstall pieeg-server -y
pip install -e .
```

Or use the bundled wrapper: `.\pieeg-server.cmd --mock`

</details>

<details>
<summary><strong>GPIO: no gpiod dependency</strong></summary>

The server talks to GPIO directly via Linux chardev v1 ioctl — no `gpiod` pip package. Two GPIO pins (chip-select + data-ready) use ~20 lines of `struct` packing instead of an external dep that has breaking v1/v2 API changes, requires `libgpiod-dev` C headers, and only works on Linux. The chardev ABI has been stable since Linux 4.8 (2016).

</details>

---

## Development

```bash
git clone https://github.com/pieeg-club/PiEEG-server.git
cd PiEEG-server
python -m venv .venv && source .venv/bin/activate  # Windows: .venv\Scripts\Activate.ps1
pip install -e ".[dev]"
```

<details>
<summary><strong>Dashboard dev (React + Vite)</strong></summary>

```bash
# Terminal 1
pieeg-server --mock

# Terminal 2
cd dashboard && npm install && npm run dev   # → http://localhost:3000
```

Vite proxies `/auth` and `/ws` to the Python server.

**Build:** `cd dashboard && npm run build` — output committed to `pieeg_server/static/dashboard/` so pip users don't need Node.

**Auto-build hook:**
```bash
cp scripts/pre-commit .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit
```

</details>

<details>
<summary><strong>Tests & release</strong></summary>

```bash
pytest                # all tests
pytest -v             # verbose
```

**Release:**
```bash
./scripts/build_release.sh            # React build → wheel → dist/
./scripts/build_release.sh --upload   # + upload to PyPI
```

1. Bump version in `pyproject.toml` + `pieeg_server/__init__.py`
2. `git commit -am "release v0.X.0" && git tag v0.X.0`
3. `./scripts/build_release.sh --upload && git push origin main --tags`

</details>

---

## Security

<details>
<summary><strong>Threat model & recommendations</strong></summary>

Designed for **trusted local networks** (home lab, research bench). Not hardened for the public internet.

**Assumes:** private network, physical access to Pi, trusted client devices.

**Does NOT defend against:** MITM (no TLS), public internet exposure, untrusted users on the same network.

| Not secured | Mitigation |
|-------------|------------|
| No TLS | Use dedicated network; or nginx/caddy reverse proxy with self-signed cert |
| No user accounts | Single-user device on home network |
| No CSP headers | Static React build, no user-generated content |
| In-memory sessions | By design — code changes on restart |
| 6-digit code (900k possibilities) | Rate limiting + trusted network; use firewall/VLAN if concerned |

**For sensitive deployments:** private network only → TLS termination (nginx/caddy) → firewall rules → VPN (WireGuard/Tailscale) for remote access.

</details>

## Safety

> **PiEEG must operate from battery power (5V) only.**
> Do NOT connect to mains-powered equipment via USB.
> PiEEG is NOT a medical device.

## Acknowledgments

Built with guidance from [Ildar Rakhmatulin, PhD](https://scholar.google.com/citations?user=L8q-KSoAAAAJ&hl=en), creator of the PiEEG platform.

## License

MIT
