# Avatar Neurofeedback Studio

A real‑time facial‑expression neurofeedback workbench. Every EEG electrode becomes a feature source, every avatar facial expression becomes a controllable sink, and the user composes **Links** between them through a mapping panel.

The experience is mounted by the dashboard's experience registry under the id `avatar-foundation`.

---

## 1. Scientific pipeline

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

### Two‑state contrastive calibration

The Training overlay records 6 s of REST and 6 s of ACTIVE log‑band power on every channel, then ranks every `(channel × band)` pair by **Cohen's d**:

$$ d = \frac{\mu_{\text{active}} - \mu_{\text{rest}}}{\sqrt{(\sigma^2_{\text{rest}} + \sigma^2_{\text{active}}) / 2}} $$

Quality thresholds shown in the UI:

| \|d\|          | Label       | Interpretation                          |
| -------------- | ----------- | --------------------------------------- |
| ≥ 1.2          | excellent   | strong, BCI‑grade separation            |
| ≥ 0.8          | good        | adequate for everyday neurofeedback     |
| ≥ 0.4          | weak        | marginal; expect noise                  |
| < 0.4          | noise       | re‑train with a stronger / clearer cue  |

A link is `isWellTrained` only when both phases have ≥ 4 samples *and* `|μ_active − μ_rest| > 0.05` (the `STAT_FLOOR`). **Untrained links contribute zero** — they cannot lock the avatar's face on, by design.

---

## 2. Data flow

```
EEGData (ring buffers, 250 Hz)
        │
        ▼
useChannelBandPowers ── FFT @ 12 Hz ──▶ frameRef: NeuroFrame
        │                                    {channels[ch].logBands[5]}
        │                                    in-place mutation, no GC churn
        │
        ▼
AvatarFoundation RAF loop (60 Hz)
        │
        │ for each enabled Link:
        │   feature = frame.channels[link.channel].logBands[band]
        │   next    = evaluateLink(link, feature, prev)
        │   weights[link.expression] = max(weights[link.expression], next.value)
        │
        ▼
VRM.expressionManager.setValue(name, weight)
or  mesh.morphTargetInfluences[i] = weight
```

The MappingStudio reads the same `frameRef` and `runtimeRef` at 10 Hz to refresh live numerics (band bars, link activation, R/A means) without forcing the RAF loop or the bigger React tree to re-render.

---

## 3. File map

```
avatar-foundation/
├── README.md                ← this file
├── AVATAR_SOURCES.md        ← how to obtain/customise the .vrm or .glb
├── AvatarFoundation.tsx     ← 3D scene + RAF loop + studio orchestration
└── neuro/
    ├── types.ts                  ← Link, Stats, NeuroFrame, BAND_*, MONTAGE_HINTS
    ├── engine.ts                 ← Welford, Cohen's d, evaluateLink, rankFeatures
    ├── frame.ts                  ← deepCopyNeuroFrame()
    ├── useChannelBandPowers.ts   ← FFT hook (256-sample @ 12 Hz)
    ├── MappingStudio.tsx         ← Figma-style 4-panel control UI
    └── TrainingOverlay.tsx       ← 2-state contrastive calibration UI
```

The split is intentional:

- **`engine.ts` is pure math** — no React, no Three, easy to unit test.
- **`useChannelBandPowers.ts` is the only consumer of raw EEG** — everyone else reads `NeuroFrame`.
- **`MappingStudio.tsx` and `TrainingOverlay.tsx` are UI-only** — they never touch Three.js.
- **`AvatarFoundation.tsx` is the wiring layer** — it owns the scene, the RAF loop, persistence, and the training callbacks.

---

## 4. Controls

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

## 5. Persistence

Links are persisted under the localStorage key `avatar-foundation:links:v1`. This includes the calibration `Stats` for each link (Welford state), so a trained avatar comes back across reloads. Wipe via the **Reset** button or:

```js
localStorage.removeItem("avatar-foundation:links:v1");
```

---

## 6. Avatar requirements

The scene tries `AVATAR_CONFIG.avatarUrls` in order — by default `/avatar.vrm` then `/avatar.glb` (both served from `dashboard/public/`).

- **VRM 1.0** is preferred: the studio uses `vrm.expressionManager.expressions`, which gives a clean list of named presets (`aa`, `angry`, `blink`, `blinkLeft`, `blinkRight`, `ee`, `happy`, `ih`, `lookDown/Left/Right/Up`, `neutral`, `oh`, `ou`, `relaxed`, `sad`, `surprised`).
- **glTF/glb** fallback: any mesh with `morphTargetDictionary` works; the studio lists the morph names directly.

See [AVATAR_SOURCES.md](AVATAR_SOURCES.md) for download options and ARKit-style blendshape sources.

---

## 7. Tuning knobs

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

Numerical engine tuning lives in [neuro/engine.ts](neuro/engine.ts):

- `LOG_EPSILON = 1e-9` — log-domain floor
- `STAT_FLOOR = 0.05` — minimum |Δμ| for `isWellTrained`
- Default Link params: `gain = 1.4`, `smoothing = 0.85`

FFT / feature-rate tuning lives in [neuro/useChannelBandPowers.ts](neuro/useChannelBandPowers.ts):

- `FFT_SIZE = 256`
- `UPDATE_HZ = 12`

---

## 8. Extending

To add a **new feature dimension** (e.g. coherence between two channels, or a frontal alpha asymmetry index), add the computation to `useChannelBandPowers.ts` and extend `ChannelSnapshot` / the `Link` shape so the engine and studio know how to address it.

To add a **new transfer function** (e.g. log-sigmoid, dead-zone), replace the trained branch of `evaluateLink` in `engine.ts`. The function signature is stable; nothing outside `engine.ts` needs to change.

To add **multi-link blends** other than `max` (e.g. weighted sum, gated by another link), edit the per-expression aggregation block inside the RAF loop in `AvatarFoundation.tsx`.

---

## 9. Why these choices?

- **Log-power, not raw PSD** — EEG band powers are roughly log-normal; effect-size statistics like Cohen's d only behave well on near-Gaussian data.
- **Cohen's d over correlation** — d is the right tool when comparing two *populations* (REST vs ACTIVE), each potentially with their own variance. It also gives an interpretable scale (0.8 = "large effect").
- **Linear interp instead of sigmoid** — when REST and ACTIVE are well-separated, linear interpolation gives the user a directly readable gauge (0% = your rest level, 100% = your trained activation level). Sigmoids are saved for the untrained fallback (currently: zero, by design).
- **EMA over Kalman** — facial expression is a slow, perceptual control loop; a one-parameter exponential moving average is enough and stays interpretable.
- **`max` aggregation across links** — multiple electrodes voting on the same expression is a *union of evidence*, not a vote.
