# P300 Mini-Game — Neural Decoding Engine

A browser-based **P300 decoding pipeline** for PiEEG-server.
The visual experience is intentionally unconstrained — designers pick any
theme (icons, letters, monsters, spells, cards, portals, rhythm cues…) and
the decoder does not care. The only requirement for a game is to emit
stimulus markers through the shared [`MarkerBus`](./marker/markerBus.ts).

This module is not a classical ERP averaging demo. It is a reusable
**stimulus-response neural decoding engine** that any browser game inside
PiEEG-server can plug into.

---

## Four-layer architecture

```
┌─────────────────────────────────────────────────────────────────┐
│  1. Game Layer       visuals, pacing, animations, theme, rules  │
│     (your code)                                                  │
│                         │                                        │
│                         ▼  emits StimulusMarker                  │
├─────────────────────────────────────────────────────────────────┤
│  2. Marker Layer     monotonic ids, EEG-aligned timestamps,     │
│     (markerBus.ts)   pub/sub fan-out, 60-s memory buffer        │
│                         │                                        │
│                         ▼                                        │
├─────────────────────────────────────────────────────────────────┤
│  3a. EEG Layer       timestamped ring buffer, epoch extraction, │
│     (eeg/*)          baseline correct / band-pass / decimate,   │
│                      quality scoring, artefact flagging         │
│                         │                                        │
│                         ▼                                        │
│  3b. ML Layer        shrinkage-LDA decoder (Blankertz 2011),    │
│     (ml/*)           Bayesian evidence accumulator across        │
│                      repetitions, confidence + entropy,          │
│                      subject-specific persistence                │
│                         │                                        │
│                         ▼  emits CandidatePrediction             │
├─────────────────────────────────────────────────────────────────┤
│  4. Review Layer     session recorder, explainability panel,    │
│     (review/*)       JSON export for offline training            │
└─────────────────────────────────────────────────────────────────┘
```

Each layer is isolated by a stable data contract defined in
[`types.ts`](./types.ts). Games and models never import each other.

---

## The ML contract

Every game must emit one `StimulusMarker` per flash / highlight / reveal
event. The ML layer requires these fields:

| Field | Purpose |
| --- | --- |
| `stimulus_id` | Candidate identifier (e.g. `"A"`, `"🎯"`, `"monster-3"`). |
| `stimulus_type` | `"flash"`, `"selection"`, `"cue"`, `"feedback"`, `"baseline"`. |
| `stimulus_position` | Optional `{row, col, group}` for explainability. |
| `timestamp` | Auto-filled by the bus — EEG-stream-aligned seconds. |
| `trial_id` | One decoded selection = one trial. |
| `sequence_id` | Repetition number inside a trial (0-indexed). |
| `presentation_duration` | Planned visible duration (ms). |
| `visual_state` | `"onset" / "offset" / "peak" / "hidden" / "revealed"`. |
| `target_label` | During calibration only: `"target"` / `"nontarget"`. |
| `candidate_set` | All candidate ids in the current trial. |
| `meta` | Free-form game payload (theme, animation id, …). |

Predictions come back as `CandidatePrediction`:

* ranked candidates with posterior probabilities
* per-candidate evidence + observation count
* aggregate EEG-quality score
* entropy-based uncertainty
* `commit: boolean` — decoder's "stop flashing, I'm confident" signal

---

## Using the runtime in your own game

```ts
import { P300Runtime } from "./runtime";

const runtime = new P300Runtime({
  subject_id: "alice",
  theme: "monsters",
  channels: [0, 1, 2, 3, 4, 5, 6, 7],
  numChannels: eegData.numChannels,
});
runtime.start();

// Begin a trial over any candidate set
const trial = runtime.beginTrial(["m1", "m2", "m3", "m4"]);

// Flash a candidate
runtime.markFlash({
  stimulus_id: "m2",
  trial_id: trial,
  sequence_id: 0,
  presentation_duration: 120,
  candidate_set: ["m1", "m2", "m3", "m4"],
  target_label: null, // free operation
});

// Live snapshots stream in through `runtime.on("prediction", ...)`
const final = runtime.endTrial();
```

For calibration, set `target_label: id === cuedTarget ? "target" : "nontarget"`.
After enough labelled epochs accumulate, call `runtime.fitModel()` — it
trains the decoder and persists it to `localStorage` keyed by subject id.

---

## Decoder

Default implementation: **shrinkage LDA** with closed-form Ledoit–Wolf
covariance shrinkage (`ml/shrinkageLda.ts`). Standard P300 baseline that:

* trains in one shot on ~200 labelled epochs (< 500 ms)
* works well in high-D / low-sample-size regime (8 ch × 40 samples = 320 features)
* produces a single log-odds evidence per epoch → Bayesian accumulator

The [`Decoder`](./ml/decoder.ts) interface is deliberately minimal so a
TensorFlow.js compact CNN (EEGNet / DeepConvNet), an ONNX Runtime Web
transformer, or a cloud-trained hybrid model can drop in without touching
game / marker / accumulator code.

---

## Evidence accumulation

`ml/accumulator.ts` performs Bayesian posterior update per candidate,
receiving one log-odds scalar per flash. A trial ends when:

* entropy falls below `commit_entropy` (default 0.35 of max), **and**
* every candidate has been flashed `min_flashes_per_candidate` times

or when the safety cap `max_flashes_per_candidate` is reached.

The UI shows per-candidate probability bars that update live — making it
obvious when the decoder is converging vs undecided.

---

## Offline training pipeline

The Review panel exports session JSON containing every marker, every
prediction, and (optionally) the preprocessed epoch data. Drop the JSON
into a notebook to:

* re-fit a stronger model offline
* compare decoders
* analyse confusions per theme / position / time-of-day

Because the marker contract is theme-agnostic, models trained across many
games and subjects are stackable.

---

## File map

| Path | Role |
| --- | --- |
| [`types.ts`](./types.ts) | Core contracts (markers, epochs, predictions). |
| [`runtime.ts`](./runtime.ts) | Glues all four layers; entry point for games. |
| [`marker/markerBus.ts`](./marker/markerBus.ts) | Pub/sub bus with EEG-aligned timestamps. |
| [`eeg/timestampedRing.ts`](./eeg/timestampedRing.ts) | Parallel per-sample timestamp ring buffer. |
| [`eeg/preprocessing.ts`](./eeg/preprocessing.ts) | Baseline, HP/LP, decimation, quality. |
| [`eeg/epochExtractor.ts`](./eeg/epochExtractor.ts) | Marker → epoch pipeline. |
| [`ml/decoder.ts`](./ml/decoder.ts) | Abstract decoder interface. |
| [`ml/shrinkageLda.ts`](./ml/shrinkageLda.ts) | Default decoder — Ledoit-Wolf LDA. |
| [`ml/accumulator.ts`](./ml/accumulator.ts) | Bayesian evidence integration. |
| [`ml/storage.ts`](./ml/storage.ts) | Per-subject model persistence. |
| [`review/sessionRecorder.ts`](./review/sessionRecorder.ts) | Session → JSON exporter. |
| [`review/ReviewPanel.tsx`](./review/ReviewPanel.tsx) | In-app explainability panel. |
| [`game/StimulusGrid.tsx`](./game/StimulusGrid.tsx) | Reference themed 3×3 game. |
| [`P300MiniGame.tsx`](./P300MiniGame.tsx) | Experience top-level UI. |

---

## What this module is not

* **Not** a classical ERP averaging tool — it does single-trial decoding.
* **Not** tied to a specific game layout — letters, icons, monsters, cards, spells all work.
* **Not** a black box — every prediction is explainable (per-candidate evidence, observation counts, quality score).
