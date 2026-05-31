# The Glitching Reality

## What you are actually measuring

> The thresholds and shader mapping below are intentionally heuristic —
> calibrated for interactive feedback, not diagnosis or precise emotion classification.
> This is a neuroscience-*inspired* control model for an EEG-driven MR experience.

Your brain generates electrical oscillations in several frequency bands, each associated
with distinct cognitive and emotional states. Two of them matter most here:

| Band | Range | What it means |
|------|-------|---------------|
| **Alpha (α)** | 8–13 Hz | Idle, relaxed cortex. Rises when eyes are closed, mind is calm. |
| **Beta (β)**  | 13–30 Hz | Active thinking, alertness, stress, cognitive load. |

The shader's **instability** is driven by two complementary signals:

```
instability ≈ (1 − calm) + 0.6 × β_surge − 0.15 × max(FAA, 0)
```

- **calm** = α / (α + β) — how α-dominant your cortex is right now  
- **β surge** = how much your current β power exceeds your ~30-second rolling baseline  
- **FAA bonus** subtracts a bit of instability when you are in an approach/positive state

---

## Frontal Alpha Asymmetry (FAA)

Frontal alpha asymmetry has been widely studied as an index associated with
approach/withdrawal motivation and affective style (Davidson, 1992; Harmon-Jones &
Gable, 2018). The formula used here is the classical log-power difference:

```
FAA = ln(α_right) − ln(α_left)
```

In this prototype, FAA is interpreted relative to the user's own running signal.
A positive shift suggests relatively stronger left-frontal activation, often associated
in the literature with approach motivation; a negative shift suggests a
withdrawal-related tendency. The ±0.05 split in the HUD is a **heuristic threshold**,
not a validated clinical boundary — individual differences, electrode placement,
reference choice, and preprocessing all affect the absolute value.

Positive FAA gives you a small "equanimity bonus" that reduces shader instability.
Negative FAA + high beta makes the room break harder.

> **Electrode placement note:** FAA is commonly estimated from homologous left/right
> frontal electrodes (e.g. F3/F4 or Fp1/Fp2 depending on the protocol). In this
> prototype we use the available frontopolar pair — Ch1/Ch2 or Fp1/Fp2 — as a practical
> approximation. The experience works with any channel count.

---

## The snap-to-clarity event

The **SNAP → CLARITY** state fires when beta power drops sharply within one analysis tick
(~80 ms), specifically when:

```
(prev_β − current_β) / prev_β  >  0.35   (35% drop ratio)
```

The SNAP event is a **game mechanic** triggered by a sharp beta drop relative to the
previous analysis window. It is inspired by the common relaxation pattern where reduced
cognitive tension and slower breathing may coincide with lower high-frequency activity
and stronger alpha — but it should not be interpreted as a direct physiological detector
of exhalation. The shader fades all distortions to zero for ~600 ms.

---

## Mental arithmetic as a deliberate stressor

The optional puzzle induces **cognitive load** (working memory + arithmetic) as a
deliberate stressor. Working-memory and task-difficulty studies show measurable EEG
changes during such load, including modulation of frontal alpha, theta, and beta bands
(Gevins et al., 1997). The difficulty auto-adapts based on your streak so the stressor
stays just above your comfort zone (desirable difficulty).

The game loop becomes:

1. Puzzle triggers beta surge → room starts breaking
2. You solve puzzles under pressure → room tears more
3. You stop, close your eyes, breathe slowly → beta drops → SNAP
4. Open eyes to a clean room — and the next puzzle is waiting

---

## The instability-to-shader mapping

| instability | Visual effect |
|-------------|--------------|
| 0–25% | Clean passthrough, slight vignette |
| 25–50% | Mild RGB fringe + slow scanlines (DRIFTING) |
| 50–75% | Slice tears, chromatic aberration, flicker (TEARING) |
| 75–100% | Full horizontal displacement, harsh bloom, noise overlay (FRACTURED) |
| SNAP | All effects reset to 0 with a white flash |

---

## References

- Davidson, R.J. (1992). *Anterior cerebral asymmetry and the nature of emotion.* Brain and Cognition, 20(1), 125–151.  
- Gevins, A., Smith, M.E., McEvoy, L., & Yu, D. (1997). *High-resolution EEG mapping of cortical activation related to working memory.* Cerebral Cortex, 7(4), 374–385.  
- Harmon-Jones, E., & Gable, P.A. (2018). *On the role of asymmetric frontal cortical activity in approach and avoidance motivation.* Psychophysiology, 55(1), e12879.  
- Klimesch, W. (1999). *EEG alpha and theta oscillations reflect cognitive and memory performance.* Brain Research Reviews, 29(2–3), 169–195.
