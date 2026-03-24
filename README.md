# PiEEG-16-Server

<img height="400" alt="image" src="https://github.com/user-attachments/assets/3f33bfd4-c721-4b94-a672-2a0b744d127b" />


A lightweight server for the [PiEEG-16](https://github.com/pieeg-club/PiEEG-16) shield that initializes the hardware, reads 16 channels at 250 Hz, streams live data over WebSocket, and serves a real-time dashboard — all on your local network.

**Ports:**
- **`:1616`** — WebSocket data stream (PiEEG-**16** → **1616**)
- **`:1617`** — Web dashboard (next door)

## Quick Start

### First time (on Raspberry Pi 5)

```bash
git clone https://github.com/yelabb/PiEEG-16-Server.git
cd PiEEG-16-Server
chmod +x setup.sh
./setup.sh
sudo reboot   # only needed first time, to enable SPI
```

### Every time after

```bash
pieeg-server
```

That's it. LEDs turn on, data streams to `ws://raspberrypi.local:1616`.

Open **http://raspberrypi.local:1617** in any browser on your network for the real-time dashboard.

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
pieeg-server [OPTIONS]

  --host HOST            Bind address (default: 0.0.0.0)
  --port PORT            WebSocket port (default: 1616)
  --dashboard-port PORT  Dashboard HTTP port (default: 1617)
  --no-dashboard         Disable the web dashboard
  --gpio-chip NAME       GPIO chip for gpiod (default: "0")
  --filter               Enable 1–40 Hz bandpass filter server-side
  --lowcut HZ            Filter low cutoff (default: 1.0)
  --highcut HZ           Filter high cutoff (default: 40.0)
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

## Safety

> **PiEEG-16 must operate from battery power (5V) only.**
> Do NOT connect to mains-powered equipment via USB.
> PiEEG-16 is NOT a medical device.

## License

MIT
