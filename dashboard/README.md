# PiEEG Dashboard

Real-time EEG visualization dashboard built with React 19 + Vite 6. Connects to the PiEEG server via WebSocket and renders live waveforms, spectral analysis, session playback, and an immersive WebXR view — all from a browser. Supports both 8-channel and 16-channel configurations.

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | React 19 |
| Bundler | Vite 6 |
| Rendering | Canvas 2D (waveforms, spectra), Three.js (WebXR) |
| FFT | Pure-JS Cooley-Tukey radix-2 (256-point, Hanning window) |
| State | React hooks + refs (no external state library) |
| Styling | Plain CSS (no framework) |

## Project Structure

```
dashboard/
├── src/
│   ├── App.jsx                  # Root component, layout & controls
│   ├── main.jsx                 # Entry point
│   ├── index.css                # Global styles
│   ├── components/
│   │   ├── AuthGate.jsx         # 6-digit access code gate
│   │   ├── ChannelCanvas.jsx    # Per-channel waveform canvas
│   │   ├── ChannelDetailPanel.jsx  # Expanded single-channel view
│   │   ├── SpectralPanel.jsx    # FFT spectrum + band power bars
│   │   ├── PerformanceMonitor.jsx  # FPS/frame-time overlay (press P)
│   │   ├── SessionList.jsx      # Browse saved CSV recordings
│   │   ├── SessionViewer.jsx    # Playback recorded sessions
│   │   ├── ExperiencesPage.tsx  # Gallery launcher for experiences
│   │   ├── UpdateBanner.jsx     # Server update notification
│   │   └── XRWaveView.jsx       # Immersive WebXR wave visualization
│   ├── experiences/
│   │   └── registry.ts         # Experience definitions + types
│   ├── hooks/
│   │   ├── useEEG.js            # WebSocket connection + ring buffers
│   │   └── useFFTWorker.js      # Web Worker bridge for FFT
│   ├── lib/
│   │   └── fftEngine.js         # Pure-JS FFT engine (Cooley-Tukey)
│   └── workers/
│       └── fftWorker.js         # Offloaded FFT computation
├── package.json
├── vite.config.js
└── README.md
```

## Experiences

The **Experiences** page is a gallery of immersive EEG visualizations — community-driven, like the [three.js examples](https://threejs.org/examples/). Each experience is a standalone component that receives live EEG data and renders full-screen.

### Adding an experience

1. Create a component in `src/experiences/` (or `src/components/`). It must accept `{ eegData, yScale, onExit }` props.
2. Add a `lazy()` import and an entry to the `EXPERIENCES` array in `src/experiences/registry.ts`.
3. Each experience is automatically code-split into its own JS chunk — no impact on initial load.

```ts
// src/experiences/registry.ts
const MyExperience = lazy(() => import("./MyExperience"));

// Add to the EXPERIENCES array:
{
  id: "my-experience",
  name: "My Experience",
  description: "What it does",
  tag: "3D",
  gradient: ["#ff6b6b", "#feca57"],
  component: MyExperience,
  author: "Your Name",
}
```

## Development

```bash
# Terminal 1 — Python server with mock data
pieeg-server --mock

# Terminal 2 — Vite dev server with hot reload
cd dashboard
npm install
npm run dev        # → http://localhost:3000
```

Vite proxies `/auth`, `/api`, `/recordings` to `localhost:1617` and `/ws` to `localhost:1616`, so auth and data streaming work identically to production.

### Build for production

```bash
cd dashboard
npm run build      # outputs to ../pieeg_server/static/dashboard/
```

The build is committed to git so `pip install` users get it without needing Node.js.

---

## Performance & Optimization

The dashboard renders 16 simultaneously animating canvases at 250 Hz incoming data rate. Every optimization below exists to keep frame times under 16.67 ms (60 fps target) on low-power devices like a Raspberry Pi browser or mobile phone.

### Architecture: Decoupled Data & Rendering

The core design splits data ingestion from React rendering:

```
WebSocket (250 Hz)
  → useEEG hook: writes directly into Float32Array ring buffers (refs, no state)
  → React state updated at 2 Hz (UI_UPDATE_MS = 500ms) for header stats only
  → Canvas RAF loops read from refs independently — zero React re-renders per sample
```

This is critical. Updating React state at 250 Hz would cause 250 re-renders/sec across the entire tree. Instead:

- **Ring buffers in `useRef`** — `Float32Array[16]` pre-allocated per channel, written via index. No array growth, no GC pressure.
- **Write index as ref** — Canvas loops read `writeIndexRef.current` directly. No state, no subscription.
- **Throttled stats** — `setSampleCount` and `setHz` fire at most every 500 ms, purely for the header display.

### Per-Channel Canvas Optimizations

Each `ChannelCanvas` is a `memo()`-wrapped component with its own `requestAnimationFrame` loop:

**Frame rate reduction for grid view**
Grid channels render at ~30 fps (`GRID_FRAME_INTERVAL = 2`, drawing every 2nd RAF tick). Expanded channels render at full 60 fps. This halves GPU work for the 4×4 grid while keeping the focused channel smooth.

**Staggered rendering**
Each channel offsets its draw frame by `chIdx % GRID_FRAME_INTERVAL`, spreading GPU load across frames instead of all 16 channels drawing on the same tick.

**Skip-if-no-new-data**
Each canvas tracks `lastWriteIdxRef` and skips the draw call entirely when the write index hasn't changed since the last frame — avoids redundant redraws when paused or during connection drops.

**Grid suspension**
When a channel is expanded into the overlay, `eegData.gridSuspended` is set to `true`. All 15 background grid canvases skip their draw loops entirely, leaving only the expanded canvas rendering.

**DPR capping**
Grid channels cap `devicePixelRatio` to 1 (not the native 2× or 3× on HiDPI displays). This halves the pixel fill per canvas. Expanded channels use up to 2× DPR for sharper detail.

**ResizeObserver instead of per-frame measurement**
Canvas dimensions are tracked via `ResizeObserver`, not `getBoundingClientRect()` every frame. The backing store is resized only when dimensions actually change (`needsResizeRef`).

**Adaptive quality**
Frame times are tracked over a rolling window of 20 frames. If average frame time exceeds the 14 ms budget, the canvas automatically downgrades:
- **High** → 1500 max points per trace
- **Medium** → 800 max points
- **Low** → 400 max points, no fill-under-trace, thinner lines

Quality upgrades back when frame times recover below 40% of the budget.

### Waveform Drawing

The `drawChannel` function is the hot path — called 16× per frame at 30–60 fps:

- **Single-pass trace** — one `beginPath()` / `stroke()` call. No glow, no shadow, no duplicate passes.
- **Adaptive point skipping** — when buffer has more samples than `maxPts` for the current quality level, it strides through the data (`skip = floor(count / maxPts)`).
- **Batched grid lines** — all horizontal grid lines drawn in a single path/stroke call.
- **No gradient creation per frame** — fill-under uses a flat alpha color string (`color + "10"`) instead of creating a `CanvasGradient` object.
- **RMS computed every 2nd frame** — signal quality indicator updates at half rate.

### FFT: Off Main Thread

Spectral analysis runs in a **Web Worker** (`fftWorker.js`) to keep the main thread free for rendering:

- `useFFTWorker` hook manages the worker lifecycle and a callback-based request/response pattern.
- FFT recomputes every 12 animation frames (~200 ms at 60 fps, `FFT_EVERY_FRAMES = 12`), not every frame.
- Band power state updates are throttled to 350 ms (`UI_THROTTLE_MS`) and use **reference equality checks** to skip re-renders when the dominant band hasn't changed.
- Falls back to main-thread FFT if Web Workers are unavailable.

The FFT engine itself (`fftEngine.js`) pre-computes:
- Hanning window coefficients
- Bit-reversal permutation table
- Twiddle factors (cos/sin)
- Window energy normalization constant

All allocated once at construction — zero per-frame allocation.

### WebSocket Data Path

```
ws.onmessage
  → JSON.parse (unavoidable)
  → Write 16 floats into ring buffers (ref mutation, ~0 cost)
  → Push timestamp into array (for Hz calc)
  → Every 500ms: splice old timestamps, compute Hz, update 2 state vars
```

Timestamp trimming is deferred to the UI update interval — not done on every incoming sample.

### Memory

- **Ring buffers** — fixed-size `Float32Array` per channel (`SAMPLE_RATE × timeWindow`). No growth, no GC.
- **No array spread in hot paths** — state updates use reference equality or minimal mutation.
- **Canvas `alpha: false`** — passed to `getContext("2d", { alpha: false })`, allowing the browser to skip alpha compositing.

### Performance Monitor

Press **P** to toggle an FPS / frame-time / memory overlay. Uses its own RAF loop that only runs when visible. Useful for verifying optimizations on target hardware.

### Summary

| Technique | Impact |
|-----------|--------|
| Ref-based ring buffers (no React state per sample) | Eliminates 250 re-renders/sec |
| Grid channels at 30 fps, staggered | ~50% less GPU work for 4×4 grid |
| Grid suspension during expanded view | 15 canvases fully idle |
| DPR cap to 1× for grid | 2–4× fewer pixels to fill |
| Adaptive quality (auto point reduction) | Graceful degradation on slow devices |
| Skip draw when no new data | Zero wasted frames |
| FFT in Web Worker, every 12th frame | Main thread stays free |
| Throttled React state (500 ms / 350 ms) | Minimal re-render frequency |
| Pre-allocated FFT tables | Zero per-frame allocation in FFT path |
| Single-pass canvas drawing | No redundant stroke/fill calls |
