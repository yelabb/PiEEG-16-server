// ─────────────────────────────────────────────────────────────────────────────
// useVideoContext — MediaPipe Face Landmarker for artifact-awareness context.
//
// Detects blinks, head movement, jaw clenching, and eye gaze from a webcam
// <video> element. Accumulates events in a ring buffer and exposes
// buildVideoContext() for injection into the LLM system prompt alongside EEG.
//
// Runs entirely in-browser (WASM + WebGL), no server round-trip.
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useEffect, useCallback } from "react";
import {
  FaceLandmarker,
  FilesetResolver,
} from "@mediapipe/tasks-vision";

// ── Constants ────────────────────────────────────────────────────────────

const ANALYSIS_INTERVAL_MS = 100; // 10 fps — enough for blink/motion
const HISTORY_SECONDS = 10;
const MAX_EVENTS = Math.ceil((HISTORY_SECONDS * 1000) / ANALYSIS_INTERVAL_MS);

// Eye Aspect Ratio threshold — below this = blink
const EAR_BLINK_THRESHOLD = 0.21;
// Minimum frames between blinks to avoid double-counting
const BLINK_COOLDOWN_MS = 150;

// Adaptive baseline — collect first N frames to calibrate per-user EAR
const BASELINE_FRAMES = 30; // ~3s at 10fps
// Blink = EAR drops to this fraction of baseline
const BLINK_RATIO = 0.65;
// Velocity-assisted detection: rapid closure + below this fraction
const BLINK_VEL_THRESHOLD = 0.04;
const BLINK_VEL_RATIO = 0.80;

// Head movement threshold (normalised landmark delta per frame)
const HEAD_MOVE_THRESHOLD = 0.008;

// Jaw-open threshold (lip distance, normalised)
const JAW_OPEN_THRESHOLD = 0.04;

// MediaPipe face-mesh landmark indices (478-point model)
// Left eye: 6 points for EAR
const LEFT_EYE = [362, 385, 387, 263, 373, 380];
// Right eye: 6 points for EAR
const RIGHT_EYE = [33, 160, 158, 133, 153, 144];
// Nose tip for head tracking
const NOSE_TIP = 1;
// Upper/lower lip for jaw
const UPPER_LIP = 13;
const LOWER_LIP = 14;

// ── Types ────────────────────────────────────────────────────────────────

interface BlinkEvent {
  type: "blink";
  eye: "both" | "left" | "right";
  t: number; // Date.now()
}

interface Snapshot {
  t: number;
  headDelta: number; // normalised movement magnitude
  jawOpen: number; // normalised lip distance
  earLeft: number;
  earRight: number;
  leftClosed: boolean;
  rightClosed: boolean;
  noseX: number;
  noseY: number;
}

export type Landmark = { x: number; y: number; z: number };

export interface VideoContextData {
  blinks: BlinkEvent[];
  snapshots: Snapshot[];
  latestLandmarks: Landmark[] | null;
  ready: boolean;
}

// ── Helpers ──────────────────────────────────────────────────────────────

function dist(
  a: { x: number; y: number },
  b: { x: number; y: number }
): number {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

function ear(
  landmarks: { x: number; y: number; z: number }[],
  indices: number[]
): number {
  // EAR = (|p2-p6| + |p3-p5|) / (2 * |p1-p4|)
  const p1 = landmarks[indices[0]];
  const p2 = landmarks[indices[1]];
  const p3 = landmarks[indices[2]];
  const p4 = landmarks[indices[3]];
  const p5 = landmarks[indices[4]];
  const p6 = landmarks[indices[5]];
  const vertical1 = dist(p2, p6);
  const vertical2 = dist(p3, p5);
  const horizontal = dist(p1, p4);
  if (horizontal < 1e-6) return 1;
  return (vertical1 + vertical2) / (2 * horizontal);
}

// ── Build context string for LLM ────────────────────────────────────────

export function buildVideoContext(data: VideoContextData): string {
  if (!data.ready || data.snapshots.length === 0) {
    return "Video context: camera initialising…";
  }

  const now = Date.now();
  const lines: string[] = ["## Video Context (last 10s)"];

  // Blinks
  const recentBlinks = data.blinks.filter((b) => now - b.t < HISTORY_SECONDS * 1000);
  if (recentBlinks.length > 0) {
    const times = recentBlinks
      .map((b) => {
        const tag = b.eye === "both" ? "" : ` [${b.eye}]`;
        return `t-${((now - b.t) / 1000).toFixed(1)}s${tag}`;
      })
      .join(", ");
    const winkL = recentBlinks.filter((b) => b.eye === "left").length;
    const winkR = recentBlinks.filter((b) => b.eye === "right").length;
    const both = recentBlinks.filter((b) => b.eye === "both").length;
    lines.push(`Blinks: ${recentBlinks.length} detected at ${times}`);
    lines.push(`  ↳ both: ${both}, left wink: ${winkL}, right wink: ${winkR}`);
  } else {
    lines.push("Blinks: none detected");
  }

  // Head movement — average over recent snapshots
  const recent = data.snapshots.filter((s) => now - s.t < HISTORY_SECONDS * 1000);
  const avgMove =
    recent.reduce((sum, s) => sum + s.headDelta, 0) / recent.length;
  const moveLabel =
    avgMove > 0.02 ? "HIGH" : avgMove > 0.008 ? "MODERATE" : "LOW (stable)";
  lines.push(`Head movement: ${moveLabel}`);

  // Jaw activity
  const jawFrames = recent.filter((s) => s.jawOpen > JAW_OPEN_THRESHOLD);
  const jawPct = ((jawFrames.length / recent.length) * 100).toFixed(0);
  lines.push(
    jawFrames.length > 0
      ? `Jaw activity: DETECTED (${jawPct}% of frames)`
      : "Jaw activity: NONE"
  );

  // Eye state (latest snapshot)
  const latest = recent[recent.length - 1];
  if (latest) {
    const eyeState = latest.leftClosed && latest.rightClosed
      ? "both closed/blinking"
      : latest.leftClosed
        ? "left closed (wink)"
        : latest.rightClosed
          ? "right closed (wink)"
          : "open";
    lines.push(`Eyes: ${eyeState} (EAR L:${latest.earLeft.toFixed(2)} R:${latest.earRight.toFixed(2)})`);
  }

  // Correlation hints for the LLM
  if (recentBlinks.length > 0) {
    const winkL = recentBlinks.filter((b) => b.eye === "left").length;
    const winkR = recentBlinks.filter((b) => b.eye === "right").length;
    const both = recentBlinks.filter((b) => b.eye === "both").length;
    if (both > 0) {
      lines.push(
        "\n⚠ Full blinks correlate with sharp frontal spikes (Fp1/Fp2) — likely EOG artifact"
      );
    }
    if (winkL > 0) {
      lines.push(
        "⚠ Left-eye winks detected — asymmetric EOG artifact expected on Fp1 side"
      );
    }
    if (winkR > 0) {
      lines.push(
        "⚠ Right-eye winks detected — asymmetric EOG artifact expected on Fp2 side"
      );
    }
  }
  if (avgMove > 0.02) {
    lines.push(
      "⚠ High head movement — broadband artifacts likely across all channels"
    );
  }
  if (jawFrames.length > 0) {
    lines.push(
      "⚠ Jaw activity detected — high-frequency EMG artifacts likely on temporal channels (T7/T8)"
    );
  }

  return lines.join("\n");
}

// ── Hook ─────────────────────────────────────────────────────────────────

export function useVideoContext(
  videoRef: React.RefObject<HTMLVideoElement | null>,
  active: boolean
): VideoContextData {
  const landmarkerRef = useRef<FaceLandmarker | null>(null);
  const blinksRef = useRef<BlinkEvent[]>([]);
  const snapshotsRef = useRef<Snapshot[]>([]);
  const lastBlinkRef = useRef(0);
  const prevNoseRef = useRef<{ x: number; y: number } | null>(null);
  const prevEarRef = useRef({ left: 0.3, right: 0.3 });
  const earBaselineRef = useRef({
    samples: [] as { l: number; r: number }[],
    medianL: 0.28, medianR: 0.28, ready: false,
  });
  const readyRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Stable data object — refs prevent re-renders on every frame
  const dataRef = useRef<VideoContextData>({
    blinks: blinksRef.current,
    snapshots: snapshotsRef.current,
    latestLandmarks: null,
    ready: false,
  });

  // Init MediaPipe
  useEffect(() => {
    if (!active) return;
    let cancelled = false;

    (async () => {
      try {
        const vision = await FilesetResolver.forVisionTasks(
          "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
        );
        if (cancelled) return;

        const lm = await FaceLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath:
              "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
            delegate: "GPU",
          },
          runningMode: "VIDEO",
          numFaces: 1,
          outputFaceBlendshapes: false,
          outputFacialTransformationMatrixes: false,
        });
        if (cancelled) {
          lm.close();
          return;
        }
        landmarkerRef.current = lm;
        readyRef.current = true;
        dataRef.current.ready = true;
      } catch (err) {
        console.warn("[VideoContext] MediaPipe init failed:", err);
      }
    })();

    return () => {
      cancelled = true;
      if (landmarkerRef.current) {
        landmarkerRef.current.close();
        landmarkerRef.current = null;
      }
      readyRef.current = false;
      dataRef.current.ready = false;
      dataRef.current.latestLandmarks = null;
    };
  }, [active]);

  // Analysis loop
  useEffect(() => {
    if (!active) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
      return;
    }

    intervalRef.current = setInterval(() => {
      const video = videoRef.current;
      const lm = landmarkerRef.current;
      if (!lm || !video || video.readyState < 2) return;

      const result = lm.detectForVideo(video, performance.now());
      if (!result.faceLandmarks || result.faceLandmarks.length === 0) return;

      const landmarks = result.faceLandmarks[0];
      const now = Date.now();

      // Store landmarks for face-mesh canvas
      dataRef.current.latestLandmarks = landmarks as Landmark[];

      // EAR for both eyes
      const earL = ear(landmarks, LEFT_EYE);
      const earR = ear(landmarks, RIGHT_EYE);

      // 2-frame smoothing to reduce headset vibration noise
      const smoothL = (earL + prevEarRef.current.left) / 2;
      const smoothR = (earR + prevEarRef.current.right) / 2;

      // Adaptive baseline — calibrate to this user's eye shape
      const bl = earBaselineRef.current;
      if (!bl.ready) {
        bl.samples.push({ l: earL, r: earR });
        if (bl.samples.length >= BASELINE_FRAMES) {
          const sortL = bl.samples.map((s) => s.l).sort((a, b) => a - b);
          const sortR = bl.samples.map((s) => s.r).sort((a, b) => a - b);
          bl.medianL = sortL[Math.floor(sortL.length / 2)];
          bl.medianR = sortR[Math.floor(sortR.length / 2)];
          bl.ready = true;
        }
      }

      // EAR velocity (positive = closing)
      const velL = prevEarRef.current.left - smoothL;
      const velR = prevEarRef.current.right - smoothR;
      prevEarRef.current = { left: smoothL, right: smoothR };

      // Adaptive blink / wink detection
      const leftClosed =
        smoothL < bl.medianL * BLINK_RATIO ||
        (velL > BLINK_VEL_THRESHOLD && smoothL < bl.medianL * BLINK_VEL_RATIO);
      const rightClosed =
        smoothR < bl.medianR * BLINK_RATIO ||
        (velR > BLINK_VEL_THRESHOLD && smoothR < bl.medianR * BLINK_VEL_RATIO);

      if (
        (leftClosed || rightClosed) &&
        now - lastBlinkRef.current > BLINK_COOLDOWN_MS
      ) {
        const eye: BlinkEvent["eye"] =
          leftClosed && rightClosed
            ? "both"
            : leftClosed
              ? "left"
              : "right";
        blinksRef.current.push({ type: "blink", eye, t: now });
        lastBlinkRef.current = now;
        // Trim old blinks
        while (
          blinksRef.current.length > 0 &&
          now - blinksRef.current[0].t > HISTORY_SECONDS * 1000
        ) {
          blinksRef.current.shift();
        }
      }

      // Nose tip for head movement
      const nose = landmarks[NOSE_TIP];
      let headDelta = 0;
      if (prevNoseRef.current) {
        headDelta = dist(prevNoseRef.current, nose);
      }
      prevNoseRef.current = { x: nose.x, y: nose.y };

      // Jaw openness
      const upper = landmarks[UPPER_LIP];
      const lower = landmarks[LOWER_LIP];
      const jawOpen = dist(upper, lower);

      // Push snapshot
      snapshotsRef.current.push({
        t: now,
        headDelta,
        jawOpen,
        earLeft: smoothL,
        earRight: smoothR,
        leftClosed,
        rightClosed,
        noseX: nose.x,
        noseY: nose.y,
      });

      // Trim old snapshots
      while (
        snapshotsRef.current.length > MAX_EVENTS
      ) {
        snapshotsRef.current.shift();
      }
    }, ANALYSIS_INTERVAL_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
      // Reset adaptive baseline for recalibration on re-enable
      earBaselineRef.current = {
        samples: [], medianL: 0.28, medianR: 0.28, ready: false,
      };
      prevEarRef.current = { left: 0.3, right: 0.3 };
    };
  }, [active, videoRef]);

  // Return stable ref — consumers call buildVideoContext(data) when needed
  return dataRef.current;
}
