# Creating an Experience (Mini-game)

> **Time to first playable: ~15 minutes.**
> You need one `.tsx` file and one line in the registry. The shared detector hooks handle all EEG signal processing for you.

---

## Quick Start

### 1. Create your component

```
dashboard/src/experiences/my-game/MyGame.tsx
```

```tsx
import { useRef, useEffect } from "react";
import type { ExperienceProps } from "../registry";
import { useFocus, useRelax, useBlink } from "../../hooks/detectors";

export default function MyGame({ eegData, onExit }: ExperienceProps) {
  const { state: focus, calibrate } = useFocus(eegData);
  const { state: relax } = useRelax(eegData);
  const { state: blink } = useBlink(eegData);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let raf: number;
    function loop() {
      // Read current values (no re-renders — these are mutable refs)
      const f = focus.current.focus;       // 0–1
      const r = relax.current.relaxation;  // 0–1
      const b = blink.current.blinked;     // true for one cycle per blink

      // --- your game logic here ---

      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, background: "#000" }}>
      <canvas ref={canvasRef} />
      <button onClick={onExit} style={{ position: "absolute", top: 12, left: 12 }}>
        ← Exit
      </button>
    </div>
  );
}
```

### 2. Register it

Open `dashboard/src/experiences/registry.ts` and add:

```ts
const MyGameExperience = lazy(() => import("./my-game/MyGame"));
```

Then append to the `EXPERIENCES` array:

```ts
{
  id: "my-game",
  name: "My Game",
  description: "One-sentence summary of what your game does.",
  tag: "Focus",          // BCI | Focus | Audio | VR / 3D | VRChat
  gradient: ["#ec4899", "#8b5cf6"],
  component: MyGameExperience,
  author: "Your Name",
},
```

That's it — the gallery picks it up automatically.

---

## Shared Detector Hooks

All hooks live in `hooks/detectors/` and return **mutable refs** (read `.current` in your RAF loop — zero re-renders).

```ts
import { useBandPowers, useBlink, useFocus, useRelax } from "../../hooks/detectors";
```

### `useBandPowers(eegData, config?)`

Foundation layer. Runs a single FFT instance and returns averaged spectral band powers.

| Field | Type | Description |
|---|---|---|
| `absolute` | `BandPowers` | Absolute power per band in µV²/Hz (Delta, Theta, Alpha, Beta, Gamma) |
| `relative` | `BandPowers` | Normalised to sum = 1 |
| `totalPower` | `number` | Sum across all bands |
| `dominantFrequency` | `number` | Frequency of the highest PSD bin (Hz) |

Config: `{ updateHz?, channels?, smoothing? }`

### `useBlink(eegData, config?)`

Ocular artifact detector. Amplitude-threshold state machine on frontal channels (Fp1/Fp2).

| Field | Type | Description |
|---|---|---|
| `blinked` | `boolean` | `true` for exactly one poll cycle when a blink is confirmed |
| `count` | `number` | Cumulative blink count |
| `amplitude` | `number` | Current peak-to-peak µV (useful for debug/meters) |
| `lastBlinkTime` | `number` | Epoch ms of last confirmed blink |

Config: `{ channels?, threshold?, windowMs?, minDurationMs?, maxDurationMs?, refractoryMs?, pollHz? }`

Returns: `{ state, reset() }`

### `useFocus(eegData, config?)`

Cortical engagement index — (Beta + Gamma) / (Alpha + Theta + Delta).

| Field | Type | Description |
|---|---|---|
| `focus` | `number` | 0 (relaxed) – 1 (highly focused), smoothed |
| `raw` | `number` | Unsmoothed, uncalibrated ratio |
| `calibrated` | `boolean` | Whether baseline has been captured |

Config: `{ channels?, updateHz?, smoothing?, scaleDivisor? }`

Returns: `{ state, calibrate(), resetCalibration(), calibrating }`

### `useRelax(eegData, config?)`

Alpha-dominance + theta-beta ratio composite relaxation index.

| Field | Type | Description |
|---|---|---|
| `relaxation` | `number` | 0 (alert) – 1 (deeply relaxed), smoothed |
| `alphaRelative` | `number` | Alpha / total power (0–1) |
| `thetaBetaRatio` | `number` | θ / β raw ratio |
| `calibrated` | `boolean` | Whether baseline has been captured |

Config: `{ channels?, updateHz?, smoothing?, alphaWeight?, tbrCeiling? }`

Returns: `{ state, calibrate(), resetCalibration(), calibrating }`

---

## `ExperienceProps` — What Your Component Receives

```ts
interface ExperienceProps {
  eegData: EEGData;       // Ring buffers with live EEG samples
  yScale: number;          // Current amplitude scale
  onExit: () => void;      // Call this to return to the gallery
  sendCommand?: (cmd) => void;  // Send a command to pieeg-server (optional)
}
```

`eegData` contains mutable refs — never causes re-renders:

| Field | Type | Description |
|---|---|---|
| `buffers.current` | `Float32Array[]` | One ring buffer per channel |
| `writeIndex.current` | `number` | Next write position in the ring |
| `samplesInBuffer.current` | `number` | How many samples are valid |
| `bufferSize` | `number` | Buffer length (SAMPLE_RATE × timeWindow) |
| `numChannels` | `number` | Active channel count |

---

## Patterns & Tips

### Calibration UX

Both `useFocus` and `useRelax` support `calibrate()` which returns a Promise (resolves after ~3 s). Show a "sit still" overlay while it runs:

```tsx
const [calibrating, setCalibrating] = useState(false);

async function handleCalibrate() {
  setCalibrating(true);
  await calibrate();
  setCalibrating(false);
}
```

### Combining detectors

Use multiple hooks together — they share the same `FftEngine` instance via `useBandPowers`:

```tsx
const { state: focus } = useFocus(eegData);
const { state: blink } = useBlink(eegData);

// In RAF: blink to jump, focus to run faster
if (blink.current.blinked) player.jump();
player.speed = 1 + focus.current.focus * 2;
```

### Direct band power access

For custom metrics not covered by the built-in detectors:

```tsx
const bp = useBandPowers(eegData, { updateHz: 20, smoothing: 0.5 });

// In RAF:
const { Alpha, Beta } = bp.current.absolute;
const myMetric = Alpha / (Beta + 1e-6);
```

### Performance

- Detector hooks use `setInterval` internally — they don't tick on every frame
- Read `.current` in your RAF loop — it's just a ref read, effectively free
- Don't spread/clone detector state into React state on every frame
- One `useBandPowers` instance is shared when you use `useFocus` + `useRelax` together

### Keyboard

Handle `Escape` to let users exit gracefully:

```tsx
useEffect(() => {
  const handler = (e: KeyboardEvent) => {
    if (e.key === "Escape") onExit();
  };
  window.addEventListener("keydown", handler);
  return () => window.removeEventListener("keydown", handler);
}, [onExit]);
```

---

---

## Advanced: Direct Signal Extraction (Eye Track)

The **Eye Track** experience bypasses the detector hooks and reads raw ring buffers directly — useful when you need custom signal processing rather than pre-built detectors.

### EOG Physics

The corneal-retinal potential (~0.4–1.0 mV) creates a dipole whose projection onto frontal electrodes (Fp1, Fp2) shifts with gaze angle:

- **Horizontal gaze** ≈ `Fp2 − Fp1` (differential — lateralised dipole)
- **Vertical gaze** ≈ `(Fp1 + Fp2) / 2` (common-mode — both eyes move together)
- Typical accuracy: **5–10° angular resolution** (Bulling et al. 2011)

### Reading the ring buffer directly

```tsx
function readEOGFeatures(eeg: EEGData, windowSamples: number) {
  const fp1 = eeg.buffers.current[0]; // channel 0 = Fp1
  const fp2 = eeg.buffers.current[1]; // channel 1 = Fp2
  const wi = eeg.writeIndex.current;
  const bs = eeg.bufferSize;

  let sumH = 0, sumV = 0;
  for (let i = 0; i < windowSamples; i++) {
    const idx = (wi - windowSamples + i + bs) % bs;
    sumH += fp2[idx] - fp1[idx];
    sumV += (fp1[idx] + fp2[idx]) * 0.5;
  }
  return { hEOG: sumH / windowSamples, vEOG: sumV / windowSamples };
}
```

### Model training & persistence

Eye Track uses **polynomial ridge regression** (degree 2, λ = 0.01):

1. **Calibration** — collect mean EOG features at 5 fixation targets
2. **Feature expansion** — `[1, h, v, h², h·v, v²]` (6 coefficients per axis)
3. **Ridge solve** — Gaussian elimination on `(X'X + λI)w = X'y`
4. **Online learning** — during tracking, new (EOG, target) pairs are collected ~4 Hz; model refits every 12 new samples
5. **Persistence** — `localStorage` save/load under key `pieeg-eyetrack-v1`

Users can pause/resume learning (L key), save (S key), and edit the algorithm live (E key).

---

## File Structure

```
dashboard/src/experiences/
├── registry.ts              ← register your game here
├── README.md                ← you are here
├── blink-scroll/            ← Blink Browser
├── eye-track/               ← Eye Track (EOG gaze estimation)
├── neural-sonification/     ← Neural Sonification
├── spoon-bend/              ← Spoon Bend
├── vrchat-osc/              ← VRChat OSC Bridge
├── webhook-wizard/          ← Webhook Wizard
└── my-game/                 ← your new game folder
    └── MyGame.tsx
```

```
dashboard/src/hooks/detectors/
├── index.ts                 ← barrel export
├── useBandPowers.ts         ← shared FFT (foundation)
├── useBlink.ts              ← blink detection
├── useFocus.ts              ← focus/attention index
└── useRelax.ts              ← relaxation index
```
