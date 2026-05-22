# Avatar Neurofeedback Studio

A real‑time facial‑expression neurofeedback workbench with **three parallel pipelines**: spectral (FFT), artifact (time-domain), and hybrid (fusion). Every EEG electrode becomes a feature source, every avatar facial expression becomes a controllable sink, and the user composes **Links** between them through a mapping panel.

The system automatically discovers the best channels for each expression type — **no prescribed electrode placements required**.

The experience is mounted by the dashboard's experience registry under the id `avatar-foundation`.

---

## 1. Three-Pipeline Architecture

### **Spectral Pipeline** (FFT-based, ~12 Hz, ~1s window)

For slow emotional/mental states: *relaxed*, *focused*, *happy*, *sad*, etc.

Per ~80 ms tick (~12 Hz) and per channel:

1. **Windowing** — 256 newest samples × Hanning window from the channel's ring buffer.
2. **FFT** — radix‑2 Cooley–Tukey (see [`lib/fftEngine.ts`](../../lib/fftEngine.ts)) → PSD in µV²/Hz.
3. **Band integration** — Delta (0.5–4 Hz), Theta (4–8), Alpha (8–13), Beta (13–30), Gamma (30–100).
4. **Log transform** — `log10(power + 1e-9)` makes EEG band power roughly Gaussian, so variance‑based effect sizes behave well.

Per RAF tick (~60 Hz) and per enabled Link:

5. **Trained transfer function** — linear interpolation between the user's calibrated REST and ACTIVE means:
   $$ \text{norm} = \frac{x - \mu_{\text{rest}}}{\mu_{\text{active}} - \mu_{\text{rest}}} $$
6. **Gain** — `driven = 0.5 + (norm − 0.5) × gain`, clamped to `[0,1]`.
7. **Optional inversion** — `1 − norm` when the trained direction is negative (`d < 0`).
8. **EMA smoothing** — `value = α · prev + (1−α) · driven`, default α = 0.85.

Per‑expression aggregation across links uses `Math.max` so multiple electrodes can vote for the same expression without cancelling each other out.

### **Artifact Pipeline** (time-domain, 60 Hz, ~256ms window)

For fast transient events: *blink*, *jaw*, *eyebrow*, *wink*, etc.

Per ~16 ms tick (60 Hz) and per channel:

1. **Windowing** — 64 newest samples (~256 ms at 250 Hz) from ring buffer.
2. **Zero-mean** — Remove DC offset.
3. **Detrend** — Linear detrending to remove slow drift.
4. **Rectification** — Absolute value (|signal|).
5. **Moving average** — Smooth over 20 samples (~80 ms) for envelope.

Per RAF tick (~60 Hz) and per enabled Link:

6. **Threshold detection** — Compare envelope to calibrated threshold with hysteresis:
   - **Above threshold + hysteresis** → detected = true
   - **Below threshold** → detected = false
7. **Activation mapping** — Map envelope amplitude to 0..1 range based on calibrated peak.
8. **Gain & smoothing** — Same as spectral pipeline.

**Calibration** (3-phase auto-discovery):
- **BASELINE (5s)**: Records noise floor on ALL channels simultaneously
- **REPETITIONS (10x)**: User performs action naturally, system detects peaks on all channels
- **RANKING**: Channels sorted by SNR × consistency × detection rate
- **USER PICKS**: Reviews ranked channels with live preview, selects best

This is based on Chapter 5 EOG signal processing (bandpass 1-15Hz → rectify → moving average → threshold).

### **Hybrid Pipeline** (fusion of spectral + artifact)

For complex expressions requiring both: *surprised*, *angry*, *excited*, *alert*, etc.

Combines calibrated spectral + artifact sub-links using configurable fusion modes:

- **Multiply (AND)**: Both must be active — e.g., *surprised = browUp × beta burst*
- **Add (OR)**: Either can activate — e.g., *excited = beta spike + jaw*
- **Max**: Stronger signal wins — e.g., *alert = max(gamma, eyeWide)*
- **Strict AND**: Both must exceed 50% threshold
- **Sequential**: Artifact triggers, spectral modulates — e.g., *focused blink = blink gated by alpha*

Each mode supports independent weight adjustment (0-2×) for spectral vs artifact components.

### Auto-Detection

The system auto-suggests pipeline type based on expression name:

| Keywords | Pipeline | Examples |
|----------|----------|----------|
| `surprised`, `angry`, `excited`, `alert`, `shocked` | **Hybrid** | Combines slow frequency shifts with fast muscle movements |
| `blink`, `wink`, `eye`, `brow`, `jaw`, `mouth`, `frown` | **Artifact** | Fast transient events (100-500ms) |
| *all others* | **Spectral** | Slow emotional/mental states (>1s) |

Users can override the auto-suggestion when creating links.

---

## 2. Calibration Workflows

### Spectral (Two-state contrastive calibration)

The training overlay walks the user through a user-paced **intro**, then records two long windows on every channel:

| Phase   | Duration | Purpose                                                  |
| ------- | -------- | -------------------------------------------------------- |
| PREP    | 5 s      | settle, neutral face                                     |
| REST    | 20 s     | baseline log-band power (~200 samples at 10 Hz polling)  |
| PREP    | 5 s      | switch cue                                               |
| ACTIVE  | 20 s     | log-band power while producing a repeatable cue          |

It then ranks every `(channel × band)` pair by **Cohen's d** on log-power:

$$ d = \frac{\mu_{\text{active}} - \mu_{\text{rest}}}{\sqrt{(\sigma^2_{\text{rest}} + \sigma^2_{\text{active}}) / 2}} $$

The labels shown in the UI describe **within-session separability** for the two recorded windows. They are deliberately non-clinical — they are not claims about cognitive state, BCI accuracy, or generalisation across sessions or subjects:

| \|d\|     | Label                       | What it means in plain language                                                |
| --------- | --------------------------- | ------------------------------------------------------------------------------ |
| ≥ 1.2     | strong session contrast     | REST and ACTIVE distributions separated cleanly in this recording.             |
| ≥ 0.8     | usable                      | Distributions separated, with some overlap. The driver will feel noisy.        |
| ≥ 0.4     | marginal                    | Substantial overlap. Expect slow, inconsistent avatar response.                |
| < 0.4     | inconclusive                | Distributions are statistically indistinguishable in this session.             |

These cut-offs are conventional descriptive bands for Cohen's d, *not* validated thresholds for any specific BCI task. Use them as UX feedback, not as evidence.

A link is `isWellTrained` only when both phases have **more than 4 samples** (`n > 4`, i.e. at least 5 each) **and** `|μ_active − μ_rest| > 0.05` (the `STAT_FLOOR`). Freshly added, uncalibrated links contribute zero to the avatar — they cannot lock the face on, by design. (A previously calibrated link whose calibration is later wiped will decay toward zero rather than snap, via the smoothing factor.)

#### Known limitations

- Single-session, descriptive statistics only. The session ends, the numbers go with it.
- No artefact rejection. EOG (blinks), EMG (jaw, neck), motion, and 50/60 Hz line noise all leak into the bands and inflate or deflate d in ways the tool does not detect.
- No multiple-comparison correction across `(channels × bands)`. With *N* channels × 5 bands simultaneous tests, the top-ranked pair is biased upward by the selection itself.
- Window autocorrelation, not just polling jitter: the FFT uses a 256-sample (~1.024 s at 250 Hz) Hanning window updated at 12 Hz, polled at 10 Hz during calibration. Adjacent polled samples are drawn from FFT windows that share ~90% of their input, so the *200 polled samples in a 20 s window* correspond to only ≈ **20 effectively independent observations** (`recording_duration / FFT_window`). Treat sample counts displayed in the UI as a progress indicator, not as the *N* of an independent-samples test.


---

## 3. Data Flow

```
EEGData (ring buffers, 250 Hz)
        │
        ├─────────────────────────────────────────────┐
        │                                             │
        ▼                                             ▼
useChannelBandPowers                    useArtifactEnvelopes
  FFT @ 12 Hz                              Envelope @ 60 Hz
  256-sample window                        64-sample window
        │                                             │
        ▼                                             ▼
   frameRef: NeuroFrame                  envelopeFrameRef: EnvelopeFrame
   {channels[ch].logBands[5]}            {channels[ch].envelope, rms}
   in-place mutation                     in-place mutation
        │                                             │
        └─────────────────┬───────────────────────────┘
                          │
                          ▼
            AvatarFoundation RAF loop (60 Hz)
                          │
        ┌─────────────────┼─────────────────┐
        │                 │                 │
        ▼                 ▼                 ▼
   SPECTRAL          ARTIFACT           HYBRID
   pipeline          pipeline          pipeline
        │                 │                 │
        │ evaluateLink()  │ evaluateArtifact│ evaluateHybridLink()
        │ (FFT features)  │ (envelope)      │ (fusion of both)
        │                 │                 │
        └─────────────────┴─────────────────┘
                          │
        for each enabled Link:
          if (spectral):  feature = frame.logBands[band]
          if (artifact):  feature = envelope.envelope
          if (hybrid):    feature = fuse(spectral, artifact)
          
          next = evaluate(link, feature, prev)
          weights[expression] = max(weights[expression], next.value)
                          │
                          ▼
        VRM.expressionManager.setValue(name, weight)
        or  mesh.morphTargetInfluences[i] = weight
```

The MappingStudio reads the same `frameRef`, `envelopeFrameRef`, and `runtimeRef` at 10 Hz to refresh live numerics without forcing RAF or React to re-render.

---

## 4. File Map

```
avatar-foundation/
├── README.md                      ← this file
├── AVATAR_SOURCES.md              ← how to obtain/customise the .vrm or .glb
├── AvatarFoundation.tsx           ← 3D scene + RAF loop + dual-pipeline orchestration
└── neuro/
    ├── types.ts                   ← Link (with pipeline discriminators), Stats, NeuroFrame, EnvelopeFrame
    │
    ├── engine.ts                  ← SPECTRAL: Welford, Cohen's d, evaluateLink, rankChannelsForSpectral
    ├── engine-artifact.ts         ← ARTIFACT: envelope processing, threshold calibration, rankChannelsForArtifact
    ├── engine-hybrid.ts           ← HYBRID: fusion modes (multiply/add/max/and/sequential)
    │
    ├── frame.ts                   ← deepCopyNeuroFrame(), deepCopyEnvelopeFrame()
    │
    ├── useChannelBandPowers.ts    ← FFT hook (256-sample @ 12 Hz) → NeuroFrame
    ├── useArtifactEnvelopes.ts    ← Envelope hook (64-sample @ 60 Hz) → EnvelopeFrame
    │
    ├── MappingStudio.tsx          ← Figma-style 4-panel control UI + link cards
    │
    ├── TrainingOverlay.tsx        ← SPECTRAL calibration (2-state, 20s REST/ACTIVE)
    ├── ArtifactTrainingOverlay.tsx← ARTIFACT calibration (3-phase: baseline/reps/ranking)
    └── HybridTrainingOverlay.tsx  ← HYBRID calibration (choose components + fusion config)
```

The split is intentional:

- **Engine files (`engine.ts`, `engine-artifact.ts`, `engine-hybrid.ts`) are pure math** — no React, no Three, easy to unit test.
- **Hook files (`useChannelBandPowers.ts`, `useArtifactEnvelopes.ts`) are the only consumers of raw EEG** — everyone else reads `NeuroFrame` or `EnvelopeFrame`.
- **Training overlays (`TrainingOverlay.tsx`, `ArtifactTrainingOverlay.tsx`, `HybridTrainingOverlay.tsx`) are UI-only** — they never touch Three.js, only collect calibration data.
- **`MappingStudio.tsx` is the control panel** — reads refs at 10 Hz for live display, doesn't trigger re-renders.
- **`AvatarFoundation.tsx` is the wiring layer** — owns the scene, RAF loop, persistence, training callbacks, and pipeline routing.

---

## 5. Controls

Top bar:

| Button         | Effect                                                                |
| -------------- | --------------------------------------------------------------------- |
| **⏸ Pause / ▶ Resume** | Globally freezes EEG → avatar writes. The avatar returns to neutral instantly; spontaneous blink and idle breathing keep running. |
| **↻ Reset**    | Wipes all links, clears `runtimeRef`, removes the entry in `localStorage`. Asks for confirmation when there are links. |
| **✕**          | Exit the experience (same as `Esc`).                                  |

Left rail (channels):

- Click any of the 5 colored band bars on a channel row to add a link from that `(channel, band)` to the currently selected composer expression.

Right rail (expressions):

- Click any expression name to begin **discover** training for it (auto-picks the best channel).

Bottom panel:

- **Composer bar** — manual `Channel → Band → Expression` selectors, plus *+ Add link* (no training) and *⌖ Train best channel* (discover training of the currently composed expression).
- **Link cards** — one card per Link with gain, smoothing, invert, live activation bar, Cohen's d badge, R/A means, *Re-train* (refine mode), and delete.

Keyboard:

- `Esc` — exit the experience.

---

## 6. Persistence

Links are persisted under the localStorage key `avatar-foundation:links:v1`. This includes the calibration data for each link (spectral: Welford state, artifact: threshold/baseline, hybrid: fusion config), so a trained avatar comes back across reloads. Wipe via the **Reset** button or:

```js
localStorage.removeItem("avatar-foundation:links:v1");
```

---

## 7. Avatar requirements

The scene tries `AVATAR_CONFIG.avatarUrls` in order — by default `/avatar.vrm` then `/avatar.glb` (both served from `dashboard/public/`).

- **VRM** (both 0.x and 1.0) works out of the box via `@pixiv/three-vrm`'s `VRMLoaderPlugin`; VRM 0.x avatars are auto-rotated by `VRMUtils.rotateVRM0`. The studio enumerates whatever names `vrm.expressionManager.expressions` exposes — typically the VRM 1.0 standard presets (`aa`, `angry`, `blink`, `blinkLeft`, `blinkRight`, `ee`, `happy`, `ih`, `lookDown/Left/Right/Up`, `neutral`, `oh`, `ou`, `relaxed`, `sad`, `surprised`) but any custom expression registered on the VRM is also picked up.
- **glTF/glb** fallback: any mesh with `morphTargetDictionary` works; the studio lists the morph names directly.

See [AVATAR_SOURCES.md](AVATAR_SOURCES.md) for download options and ARKit-style blendshape sources.

---

## 8. Tuning knobs

All scene-level constants live in the `AVATAR_CONFIG` block at the top of [AvatarFoundation.tsx](AvatarFoundation.tsx):

```ts
const AVATAR_CONFIG = {
  avatarUrls:   ["/avatar.vrm", "/avatar.glb"],
  targetHeight: 1.7,
  camera: { fov: 30, near: 0.1, far: 20, position: [0,1.35,2.6], target: [0,1.45,0], ... },
  blink:  { durationMs: 160, minIntervalMs: 3000, maxIntervalMs: 6000 },
  idle:   { breathHz: 1.2, swayHz: 0.45, armRestZLeft: -1.4, armRestZRight: 1.4, ... },
};
```

**Spectral pipeline** tuning in [neuro/engine.ts](neuro/engine.ts) and [neuro/useChannelBandPowers.ts](neuro/useChannelBandPowers.ts):

- `FFT_SIZE = 256` — window size (~1.024s at 250 Hz)
- `UPDATE_HZ = 12` — FFT computation rate
- `LOG_EPSILON = 1e-9` — log-domain floor
- `STAT_FLOOR = 0.05` — minimum |Δμ| for `isWellTrained`
- Default Link params: `gain = 1.4`, `smoothing = 0.85`

**Artifact pipeline** tuning in [neuro/engine-artifact.ts](neuro/engine-artifact.ts) and [neuro/useArtifactEnvelopes.ts](neuro/useArtifactEnvelopes.ts):

- `UPDATE_HZ = 60` — envelope computation rate
- `WINDOW_SAMPLES = 64` — window size (~256ms at 250 Hz)
- `MA_WINDOW = 20` — moving average window (~80ms)
- `HYSTERESIS_FACTOR = 1.2` — threshold + 20% for detection
- Threshold calibration: `baseline + 0.6 × (meanPeak - baseline)`

**Hybrid pipeline** tuning in [neuro/engine-hybrid.ts](neuro/engine-hybrid.ts):

- Default fusion mode: `"multiply"` (AND)
- Default weights: `[1, 1]` (spectral, artifact)
- Sequential mode threshold: `0.3` (artifact must exceed 30% to gate spectral)

---

## 9. Extending

To add a **new feature dimension** (e.g. coherence between two channels, or a frontal alpha asymmetry index), add the computation to `useChannelBandPowers.ts` and extend `ChannelSnapshot` / the `Link` shape so the engine and studio know how to address it.

To add a **new pipeline type**, follow the pattern:
1. Create `engine-<type>.ts` with evaluation and ranking functions
2. Create `use<Type>Features.ts` hook for real-time feature extraction
3. Create `<Type>TrainingOverlay.tsx` for calibration UI
4. Add pipeline branch in `AvatarFoundation.tsx` evaluation loop
5. Update `suggestPipeline()` for auto-detection

To add a **new transfer function** (e.g. log-sigmoid, dead-zone), replace the trained branch of `evaluateLink` in the respective engine file. The function signature is stable; nothing outside the engine needs to change.

To add a **new fusion mode** for hybrid links, add it to the `switch` statement in `engine-hybrid.ts` `evaluateHybridLink()`.

To add **multi-link blends** other than `max` (e.g. weighted sum, gated by another link), edit the per-expression aggregation block inside the RAF loop in `AvatarFoundation.tsx`.

---

## 10. Why these choices?

- **Three pipelines** — FFT cannot detect sub-second transients (fundamental window-duration tradeoff); time-domain envelope detection has ~80ms latency but no frequency information; hybrid fusion combines both for complex expressions.
- **Auto-channel discovery over prescribed montages** — Works with any electrode configuration; user sees quality metrics for ALL channels and picks the best one.
- **Log-power, not raw PSD** — EEG band powers are roughly log-normal; variance-based statistics like Cohen's d only behave decently on near-Gaussian data.
- **Cohen's d over correlation** — d is the right tool when comparing two *populations* (REST vs ACTIVE) with possibly different variances. It also has well-known conventional bands (≥0.8 large, ≥1.2 very large) which the UI maps to deliberately conservative labels.
- **Linear interp instead of sigmoid** — when REST and ACTIVE are well-separated, linear interpolation gives the user a directly readable gauge (0% = your rest level, 100% = your trained activation level). Sigmoids are saved for the untrained fallback (currently: zero, by design).
- **EMA over Kalman** — facial expression is a slow, perceptual control loop; a one-parameter exponential moving average is enough and stays interpretable.
- **`max` aggregation across links** — multiple electrodes voting on the same expression is a *union of evidence*, not a vote.
- **Separate sub-links for hybrid** — Easier to debug, retrain, and reason about; fusion weights are adjustable without recalibrating.

