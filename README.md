# PiEEG-16-server

A lightweight server for the [PiEEG-16](https://github.com/pieeg-club/PiEEG-16) shield that initializes the hardware, reads 16 channels at 250 Hz, streams live data over WebSocket, and serves a real-time dashboard — all on your local network.

## Install

> Pick **one** method. They all get you to the same place: `pieeg-server` ready to run.

### Option A — One-line install (recommended)

SSH into your Pi and paste:

```bash
curl -sSL https://raw.githubusercontent.com/yelabb/PiEEG-16-server/main/install.sh | bash
sudo reboot   # only needed first time, to enable SPI
```

### Option B — Clone & setup

```bash
git clone https://github.com/yelabb/PiEEG-16-server.git
cd PiEEG-16-server
chmod +x setup.sh
./setup.sh
sudo reboot   # only needed first time, to enable SPI
```

### Option C — pip install

```bash
pip install pieeg-server[rpi]
pieeg-server          # start streaming
```

> With pip you get the server but **not** the systemd service or SPI auto-enable.
> Run `pieeg-server doctor` to check that SPI is configured.

---

## Run

```bash
pieeg-server              # start streaming (every time after install)
pieeg-server --filter     # with 1–40 Hz bandpass filter
pieeg-server --mock       # synthetic data, no hardware needed
pieeg-server doctor       # diagnose SPI, GPIO, deps, permissions
```

That's it. LEDs turn on, data streams to `ws://raspberrypi.local:1616`.

Open **http://raspberrypi.local:1617** in any browser on your network for the real-time dashboard.

<img height="400" alt="image" src="https://github.com/user-attachments/assets/3f33bfd4-c721-4b94-a672-2a0b744d127b" />

**Ports:**
- **`:1616`** — WebSocket data stream (PiEEG-**16** → **1616**)
- **`:1617`** — Web dashboard (next door)

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

> On Windows you can only use mock mode (`pieeg-server --mock`) since SPI/GPIO hardware is not available.

## Connect from any device

### Python

```python
import asyncio, json, websockets

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

Options:
  --host HOST            Bind address (default: 0.0.0.0)
  --port PORT            WebSocket port (default: 1616)
  --dashboard-port PORT  Dashboard HTTP port (default: 1617)
  --no-dashboard         Disable the web dashboard
  --gpio-chip NAME       GPIO chip device path (default: "/dev/gpiochip4")
  --filter               Enable 1–40 Hz bandpass filter server-side
  --lowcut HZ            Filter low cutoff (default: 1.0)
  --highcut HZ           Filter high cutoff (default: 40.0)
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
│       ↓                                                  │
│  server.py       → WebSocket broadcast to all clients    │
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

## Safety

> **PiEEG-16 must operate from battery power (5V) only.**
> Do NOT connect to mains-powered equipment via USB.
> PiEEG-16 is NOT a medical device.

## License

MIT
