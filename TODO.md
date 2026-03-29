# PiEEG-16 Dashboard — Quick Wins & Roadmap

## What You Have

- **16-ch live canvas grid** with adaptive quality + staggered rendering
- **Real-time FFT** via Web Worker with spectral panel + topo heatmap
- **Channel detail panel** (trace, PSD, band bars, histogram, 7 stats)
- **Session recording/playback** with annotations + scrubbing
- **XR/VR immersive mode** (Three.js) — nobody else in the OSS BCI space has this
- **Performance monitor** (FPS/heap/frame time)
- Ring buffers, zero-state-thrash architecture, `ResizeObserver` — solid perf foundation

---

## BCI GUI Landscape Context

| Tool | Strength | Gap vs PiEEG-16 |
|---|---|---|
| **OpenBCI GUI** (892★) | Widget framework, networking (UDP/OSC/LSL/Serial), multi-device support | Desktop Processing/Java app — no web, no XR. Has **spectrogram** and **networking widget** we lack |
| **BrainFlow** (1.6k★) | Universal SDK, 7 language bindings, signal processing lib | Library not GUI — but examples show **spectrogram**, **filter design viz**, band power bars |
| **NeuroScope** (21★) | Browser-based, 11 file formats, zero-install | Has **spectrogram**, **filter preview with freq response curve**, **statistics table**, **PDF export**, **montage selector** — all things we're missing |
| **Timeflux** | Real-time pipeline architecture, plugin system | Python-based, not web |
| **Samadhi** | Novel EEG viz (LSL streams) | Python/Qt, real-time but niche |

---

## Quick Wins (Ranked by Impact / Effort)

### Tier 1 — High impact, low effort (1-2 sessions each)

- [x] **Keyboard Shortcut Help Overlay** (`?` key)
  - We already have Space/R/F/V/P/Esc — users just can't discover them
  - Simple modal with a grid of shortcuts. < 50 lines

- [x] **Connection Status Indicator + Latency Badge**
  - Show WS state (connected/reconnecting/disconnected) + round-trip latency in the header bar
  - Data is already flowing via `useEEG` — just derive connection state + timestamp delta

- [x] **WebSocket Reconnect with Exponential Backoff**
  - Current: flat `setTimeout(connect, 2000)` — can hammer server
  - Fix: 1s → 2s → 4s → 8s → cap at 30s with jitter. ~15 lines in `useEEG.ts`

- [x] **Error Boundary**
  - One canvas crash = whole app white-screen. Wrap channel grid + panels in `<ErrorBoundary>` with retry button
  - React 19 native `ErrorBoundary` or a 20-line class component

- [x] **Signal Quality Indicator per Channel**
  - We already compute RMS and border-color it. Add a simple icon or badge: green/yellow/red based on RMS + flatline detection (zero-crossing rate already computed in detail panel)
  - Makes the grid instantly more informative for researchers

### Tier 2 — Medium effort, high differentiation

- [x] **Spectrogram (STFT Heatmap)**
  - The single biggest feature gap vs OpenBCI GUI and NeuroScope
  - We already have FFT engine + Web Worker. Compute overlapping STFT windows, render as `ImageData` (same pattern as TopoMap)
  - Time on X, frequency on Y, power as color — use same turbo gradient as topo
  - Perfect for seizure detection, sleep staging, alpha-block demos

- [x] **Filter Preview / Freq Response Visualization**
  - NeuroScope lets users preview filter effect before applying
  - Our server already has `set_filter` command. Add a small canvas showing Butterworth magnitude response curve when filter controls are open
  - Shows users exactly what 1-40 Hz bandpass looks like before enabling

- [x] **Statistics Panel**
  - NeuroScope has sortable per-channel stats table (mean, std, variance, RMS, peak-peak, skewness, kurtosis, zero-crossings)
  - We compute 7 of these already in `ChannelDetailPanel` — extract to a shared utility and display as a collapsible table
  - Bonus: CSV download of the stats snapshot

- [x] **Export Annotated Recording as CSV/JSON**
  - Annotations are stored server-side as JSON but never merged into CSV exports
  - Add "Export with annotations" button in SessionViewer that interleaves annotation markers into the CSV or produces a companion JSON


---

## Architecture Recommendations (Not Quick Wins, But Important)

| Issue | Recommendation |
|---|---|
| No global RAF scheduler | Consider a single `requestAnimationFrame` loop that dispatches to sub-renderers — reduces overhead of 16+ independent RAF loops |
| SpectralPanel still FFTs on main thread sometimes | Move ALL FFT to the Web Worker exclusively |
| SessionViewer inline styles | Extract to CSS module or stylesheet |
| No data validation on WS messages | Add minimal shape check (`Array.isArray(channels) && channels.length === 16`) |
| No heartbeat/ping detection | Add client-side ping tracking — if no data for 5s, show "No data" warning |

---

## What Makes PiEEG-16 Unique (Lean Into These)

- **XR/VR immersive view** — literally nobody else in the OSS BCI space has browser-based WebXR EEG. This is our moat.
- **Zero-install web dashboard** — NeuroScope also has this philosophy, but ours is live-streaming, not file-based
- **Integrated hardware + software** — OpenBCI needs Processing IDE; BrainFlow needs C++ builds. Ours is `pip install` and open browser
- **Adaptive rendering quality** — unique to our implementation

> The **spectrogram** and **filter preview** are the two features that would most close the gap with established tools while being natural extensions of our existing FFT infrastructure.
