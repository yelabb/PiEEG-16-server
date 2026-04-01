import { useRef, useEffect, useState, memo, type RefObject } from "react";
import { FaceLandmarker } from "@mediapipe/tasks-vision";
import type { VideoContextData, Landmark } from "../hooks/useVideoContext";

// ── HUD overlay — reads refs directly, updates DOM without re-renders ────

function WebcamHUD({ data }: { data: VideoContextData }) {
  const hudRef = useRef<HTMLDivElement>(null);
  const blinkFlashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const iv = setInterval(() => {
      const el = hudRef.current;
      const flash = blinkFlashRef.current;
      if (!el || !data.ready) return;

      const now = Date.now();
      const snaps = data.snapshots;
      const latest = snaps.length > 0 ? snaps[snaps.length - 1] : null;

      // --- Blink flash (visible for 300ms after blink) ---
      const lastBlink = data.blinks.length > 0 ? data.blinks[data.blinks.length - 1] : null;
      const recentBlink = lastBlink && now - lastBlink.t < 300;
      if (flash) {
        flash.style.opacity = recentBlink ? "1" : "0";
      }

      if (!latest) {
        el.textContent = "Waiting for face…";
        return;
      }

      // --- Per-eye state ---
      const leftClosed = latest.leftClosed;
      const rightClosed = latest.rightClosed;

      let eyeLabel: string;
      if (leftClosed && rightClosed) {
        eyeLabel = "👁 BOTH CLOSED";
      } else if (leftClosed) {
        eyeLabel = "👁 L closed";
      } else if (rightClosed) {
        eyeLabel = "👁 R closed";
      } else {
        eyeLabel = "👁 Open";
      }

      // Head movement — average last 10 snapshots
      const tail = snaps.slice(-10);
      const avgMove =
        tail.reduce((s, v) => s + v.headDelta, 0) / tail.length;
      const moveLabel =
        avgMove > 0.02
          ? "🔴 HIGH"
          : avgMove > 0.008
            ? "🟡 MED"
            : "🟢 LOW";

      const jawLabel = latest.jawOpen > 0.04 ? "👄 OPEN" : "👄 —";

      // Blink count last 10s (per type)
      const recent10 = data.blinks.filter((b) => now - b.t < 10_000);
      const blinkCount = recent10.length;
      const winkL = recent10.filter((b) => b.eye === "left").length;
      const winkR = recent10.filter((b) => b.eye === "right").length;
      const blinkBoth = recent10.filter((b) => b.eye === "both").length;

      const blinkActive = recentBlink ? ' hud-blink-active' : '';
      const blinkEyeTag = recentBlink && lastBlink
        ? lastBlink.eye === "both" ? "" : ` (${lastBlink.eye === "left" ? "L" : "R"})`
        : "";

      el.innerHTML =
        `<span class="hud-row${blinkActive}">${eyeLabel}</span>` +
        `<span class="hud-row${blinkActive}">⚡ ${blinkCount}${blinkEyeTag}</span>` +
        (winkL || winkR ? `<span class="hud-row hud-wink">L:${winkL} R:${winkR} B:${blinkBoth}</span>` : '') +
        `<span class="hud-row">🗣 ${moveLabel}</span>` +
        `<span class="hud-row">${jawLabel}</span>`;
    }, 100);

    return () => clearInterval(iv);
  }, [data]);

  return (
    <>
      <div ref={blinkFlashRef} className="webcam-blink-flash" />
      <div ref={hudRef} className="webcam-hud">Initialising…</div>
    </>
  );
}
// ── Face mesh canvas — draws landmarks instead of raw video ──────────────

const MESH_COLOR = "rgba(80, 160, 220, 0.06)";
const OVAL_COLOR = "rgba(80, 160, 220, 0.25)";
const EYE_OPEN = "#3fb950";
const EYE_SHUT = "#f85149";
const IRIS_COLOR = "#58a6ff";
const LIP_COLOR = "rgba(219, 97, 162, 0.6)";

function drawLines(
  ctx: CanvasRenderingContext2D,
  lm: Landmark[],
  conns: readonly { start: number; end: number }[],
  w: number, h: number,
  color: string, lw: number
) {
  ctx.strokeStyle = color;
  ctx.lineWidth = lw;
  ctx.beginPath();
  for (const c of conns) {
    const a = lm[c.start], b = lm[c.end];
    if (!a || !b) continue;
    ctx.moveTo(a.x * w, a.y * h);
    ctx.lineTo(b.x * w, b.y * h);
  }
  ctx.stroke();
}

function FaceCanvas({ data }: { data: VideoContextData }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const iv = setInterval(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      const lm = data.latestLandmarks;
      if (!data.ready) {
        ctx.fillStyle = "rgba(255,255,255,0.3)";
        ctx.font = "12px monospace";
        ctx.textAlign = "center";
        ctx.fillText("Initialising face mesh…", w / 2, h / 2);
        return;
      }
      if (!lm || lm.length === 0) {
        ctx.fillStyle = "rgba(255,255,255,0.3)";
        ctx.font = "12px monospace";
        ctx.textAlign = "center";
        ctx.fillText("No face detected", w / 2, h / 2);
        return;
      }

      // Mirror (selfie view)
      ctx.save();
      ctx.translate(w, 0);
      ctx.scale(-1, 1);

      // Tessellation mesh (subtle wireframe)
      drawLines(ctx, lm, FaceLandmarker.FACE_LANDMARKS_TESSELATION, w, h, MESH_COLOR, 0.4);

      // Face oval
      drawLines(ctx, lm, FaceLandmarker.FACE_LANDMARKS_FACE_OVAL, w, h, OVAL_COLOR, 1);

      // Eye state from latest snapshot
      const snaps = data.snapshots;
      const snap = snaps.length > 0 ? snaps[snaps.length - 1] : null;
      const lC = snap?.leftClosed ?? false;
      const rC = snap?.rightClosed ?? false;

      // Eyes (green = open, red = closed)
      drawLines(ctx, lm, FaceLandmarker.FACE_LANDMARKS_LEFT_EYE, w, h, lC ? EYE_SHUT : EYE_OPEN, 1.5);
      drawLines(ctx, lm, FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE, w, h, rC ? EYE_SHUT : EYE_OPEN, 1.5);

      // Iris dots (468 = left iris center, 473 = right iris center)
      if (!lC && lm[468]) {
        ctx.fillStyle = IRIS_COLOR;
        ctx.beginPath();
        ctx.arc(lm[468].x * w, lm[468].y * h, 3, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!rC && lm[473]) {
        ctx.fillStyle = IRIS_COLOR;
        ctx.beginPath();
        ctx.arc(lm[473].x * w, lm[473].y * h, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // Lips
      drawLines(ctx, lm, FaceLandmarker.FACE_LANDMARKS_LIPS, w, h, LIP_COLOR, 1);

      ctx.restore();
    }, 80);

    return () => clearInterval(iv);
  }, [data]);

  return <canvas ref={canvasRef} width={320} height={240} className="webcam-canvas" />;
}
// ── WebcamFeed ───────────────────────────────────────────────────────────

interface WebcamFeedProps {
  active: boolean;
  videoRef: RefObject<HTMLVideoElement | null>;
  videoData: VideoContextData;
}

const WebcamFeed = memo(function WebcamFeed({ active, videoRef, videoData }: WebcamFeedProps) {
  const streamRef = useRef<MediaStream | null>(null);
  const [minimized, setMinimized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (!active) {
      stopStream();
      return;
    }
    let cancelled = false;

    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 320, height: 240, facingMode: "user" },
          audio: false,
        });
        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
        setError(null);
      } catch (err: any) {
        if (!cancelled) {
          setError(
            err.name === "NotAllowedError"
              ? "Camera access denied"
              : err.name === "NotFoundError"
                ? "No camera found"
                : "Camera unavailable"
          );
        }
      }
    })();

    return () => {
      cancelled = true;
      stopStream();
    };
  }, [active]);

  function stopStream() {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
  }

  if (!active) return null;

  return (
    <div className={`webcam-feed${minimized ? " minimized" : ""}`}>
      <div className="webcam-toolbar">
        <button
          className="webcam-info-btn"
          onClick={() => setShowInfo((v) => !v)}
          title="What is this?"
        >
          ?
        </button>
        <button
          className="webcam-toggle"
          onClick={() => setMinimized((v) => !v)}
          title={minimized ? "Show webcam" : "Hide webcam"}
        >
          {minimized ? "📷" : "▾"}
        </button>
      </div>
      {showInfo && (
        <div className="webcam-info-tooltip">
          <p>
            The optional webcam tracks <strong>blinks</strong>,{" "}
            <strong>eye openness</strong>, <strong>jaw</strong> &amp;{" "}
            <strong>head movement</strong> via MediaPipe.
          </p>
          <p>
            All processing runs locally in your browser. Video frames never
            leave your device.
          </p>
        </div>
      )}
      {!minimized &&
        (error ? (
          <div className="webcam-error">📷 {error}</div>
        ) : (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="webcam-video-hidden"
            />
            <FaceCanvas data={videoData} />
            <WebcamHUD data={videoData} />
          </>
        ))}
    </div>
  );
});

export default WebcamFeed;
