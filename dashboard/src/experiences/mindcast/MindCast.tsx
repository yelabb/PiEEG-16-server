// ─────────────────────────────────────────────────────────────────────────────
// MindCast — Attention-driven podcast player
//
// Plays audio at a speed proportional to your cortical engagement.
// Zone out → slows down.  Lock in → speeds up.  Your focus is the throttle.
//
// Uses useFocus (Beta+Gamma)/(Alpha+Theta+Delta) as the attention signal.
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useState, useEffect, useCallback } from "react";
import type { ExperienceProps } from "../registry";
import { useFocus } from "../../hooks/detectors/useFocus";

// ── Constants ────────────────────────────────────────────────────────────────

const AUDIO_URL =
  "https://miruns.lon1.cdn.digitaloceanspaces.com/Stream_live_brainwaves_with_Raspberry_Pi.m4a";

const SPEED_MIN = 0.5;
const SPEED_MAX = 1.75;
const SPEED_SMOOTHING = 0.92; // EMA for playback rate transitions

const FOCUS_HZ = 12;
const FOCUS_SMOOTHING = 0.85;

// Ring buffer length for history sparkline
const HISTORY_LEN = 180; // ~15 s at 12 Hz

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatTime(s: number): string {
  if (!Number.isFinite(s) || s < 0) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

function focusToSpeed(focus: number): number {
  // Quadratic ease-in so higher focus is disproportionately rewarded
  const t = Math.max(0, Math.min(1, focus));
  return SPEED_MIN + (SPEED_MAX - SPEED_MIN) * (t * (0.4 + 0.6 * t));
}

function speedLabel(speed: number): string {
  return `${speed.toFixed(2)}×`;
}

function speedColor(speed: number): string {
  const t = (speed - SPEED_MIN) / (SPEED_MAX - SPEED_MIN);
  // Cyan (slow) → Green (normal) → Amber (fast)
  if (t < 0.4) {
    const p = t / 0.4;
    return `rgb(${Math.round(6 + 28 * p)}, ${Math.round(182 - 15 * p)}, ${Math.round(212 - 175 * p)})`;
  }
  const p = (t - 0.4) / 0.6;
  return `rgb(${Math.round(34 + 211 * p)}, ${Math.round(167 - 9 * p)}, ${Math.round(37 + p * 0)})`;
}

// ── Component ────────────────────────────────────────────────────────────────

type Phase = "intro" | "calibrating" | "playing";

export default function MindCast({ eegData, onExit }: ExperienceProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [phase, setPhase] = useState<Phase>("intro");
  const [paused, setPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [calProgress, setCalProgress] = useState(0);

  // Live refs (no re-renders)
  const speedRef = useRef(1);
  const smoothedSpeedRef = useRef(1);
  const historyRef = useRef(new Float32Array(HISTORY_LEN));
  const histIdxRef = useRef(0);
  const frameCountRef = useRef(0);

  const { state: focusState, calibrate } = useFocus(eegData, {
    updateHz: FOCUS_HZ,
    smoothing: FOCUS_SMOOTHING,
  });

  // ── Audio setup ──────────────────────────────────────────────────────────

  useEffect(() => {
    const audio = new Audio();
    audio.preload = "auto";
    audio.src = AUDIO_URL;
    audioRef.current = audio;

    const onMeta = () => setDuration(audio.duration);
    const onTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("timeupdate", onTime);

    return () => {
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("timeupdate", onTime);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  // ── Calibration flow ─────────────────────────────────────────────────────

  const startCalibration = useCallback(async () => {
    setPhase("calibrating");
    setCalProgress(0);

    const start = performance.now();
    const id = setInterval(() => {
      const elapsed = performance.now() - start;
      setCalProgress(Math.min(1, elapsed / 3000));
    }, 60);

    await calibrate();
    clearInterval(id);
    setCalProgress(1);

    // Small pause so user sees "100%"
    await new Promise((r) => setTimeout(r, 400));

    setPhase("playing");
    audioRef.current?.play();
  }, [calibrate]);

  // ── Play/pause toggle ────────────────────────────────────────────────────

  const togglePause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setPaused(false);
    } else {
      audio.pause();
      setPaused(true);
    }
  }, []);

  // ── Seek ─────────────────────────────────────────────────────────────────

  const handleSeek = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const audio = audioRef.current;
      if (!audio || !duration) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const t = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      audio.currentTime = t * duration;
    },
    [duration],
  );

  // ── Keyboard shortcuts ───────────────────────────────────────────────────

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === " " && phase === "playing") {
        e.preventDefault();
        togglePause();
      }
      if (e.key === "Escape") onExit();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, togglePause, onExit]);

  // ── RAF render loop — focus ring + sparkline + speed update ──────────────

  useEffect(() => {
    if (phase !== "playing") return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    const dpr = devicePixelRatio || 1;
    let cw = canvas.clientWidth;
    let ch = canvas.clientHeight;

    const ro = new ResizeObserver((entries) => {
      const e = entries[0];
      if (e) {
        cw = e.contentRect.width;
        ch = e.contentRect.height;
      }
    });
    ro.observe(canvas);

    const render = () => {
      const w = cw;
      const h = ch;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // Current focus
      const focus = focusState.current.focus;

      // Compute target speed & smooth
      const targetSpeed = focusToSpeed(focus);
      smoothedSpeedRef.current =
        SPEED_SMOOTHING * smoothedSpeedRef.current +
        (1 - SPEED_SMOOTHING) * targetSpeed;
      speedRef.current = smoothedSpeedRef.current;

      // Apply to audio
      const audio = audioRef.current;
      if (audio && !audio.paused) {
        audio.playbackRate = Math.max(
          0.25,
          Math.min(4, smoothedSpeedRef.current),
        );
      }

      // Record history every ~3 frames (~4 Hz)
      frameCountRef.current++;
      if (frameCountRef.current % 3 === 0) {
        historyRef.current[histIdxRef.current % HISTORY_LEN] = focus;
        histIdxRef.current++;
      }

      const cx = w / 2;
      const cy = h * 0.38;
      const ringR = Math.min(w, h) * 0.22;

      // ── Background glow ──────────────────────────────────────────────
      const glowAlpha = 0.08 + focus * 0.12;
      const col = speedColor(smoothedSpeedRef.current);
      const grad = ctx.createRadialGradient(cx, cy, ringR * 0.3, cx, cy, ringR * 2.5);
      grad.addColorStop(0, col.replace("rgb", "rgba").replace(")", `,${glowAlpha})`));
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // ── Focus ring ───────────────────────────────────────────────────
      // Background ring
      ctx.beginPath();
      ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
      ctx.lineWidth = 6;
      ctx.strokeStyle = "rgba(255,255,255,0.08)";
      ctx.stroke();

      // Active arc (focus fills clockwise from top)
      const startAngle = -Math.PI / 2;
      const endAngle = startAngle + Math.PI * 2 * focus;
      ctx.beginPath();
      ctx.arc(cx, cy, ringR, startAngle, endAngle);
      ctx.lineWidth = 6;
      ctx.lineCap = "round";
      ctx.strokeStyle = col;
      ctx.stroke();

      // ── Speed text (center of ring) ──────────────────────────────────
      ctx.fillStyle = col;
      ctx.font = `bold ${ringR * 0.45}px system-ui, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(speedLabel(smoothedSpeedRef.current), cx, cy - ringR * 0.08);

      ctx.fillStyle = "rgba(255,255,255,0.5)";
      ctx.font = `${ringR * 0.17}px system-ui, sans-serif`;
      ctx.fillText("playback speed", cx, cy + ringR * 0.25);

      // ── Focus label ──────────────────────────────────────────────────
      ctx.fillStyle = "rgba(255,255,255,0.35)";
      ctx.font = `${ringR * 0.14}px system-ui, sans-serif`;
      ctx.fillText(`focus ${(focus * 100).toFixed(0)}%`, cx, cy + ringR * 0.52);

      // ── Sparkline (focus history) ────────────────────────────────────
      const sparkY = h * 0.68;
      const sparkH = h * 0.08;
      const sparkW = w * 0.7;
      const sparkX = (w - sparkW) / 2;
      const hLen = Math.min(histIdxRef.current, HISTORY_LEN);

      if (hLen > 1) {
        ctx.beginPath();
        for (let i = 0; i < hLen; i++) {
          const idx = (histIdxRef.current - hLen + i + HISTORY_LEN) % HISTORY_LEN;
          const x = sparkX + (i / (hLen - 1)) * sparkW;
          const y = sparkY + sparkH - historyRef.current[idx] * sparkH;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = "rgba(255,255,255,0.25)";
        ctx.lineJoin = "round";
        ctx.stroke();

        // Fill under curve
        ctx.lineTo(sparkX + sparkW, sparkY + sparkH);
        ctx.lineTo(sparkX, sparkY + sparkH);
        ctx.closePath();
        ctx.fillStyle = "rgba(255,255,255,0.04)";
        ctx.fill();
      }

      // Sparkline labels
      ctx.fillStyle = "rgba(255,255,255,0.25)";
      ctx.font = `${10}px system-ui, sans-serif`;
      ctx.textAlign = "left";
      ctx.fillText("focus history", sparkX, sparkY - 6);

      // ── Speed zone labels ────────────────────────────────────────────
      const zoneY = sparkY + sparkH + 28;
      const zones = [
        { label: "0.5×", x: sparkX, align: "left" as CanvasTextAlign },
        { label: "1.0×", x: sparkX + sparkW * 0.4, align: "center" as CanvasTextAlign },
        { label: `${SPEED_MAX}×`, x: sparkX + sparkW, align: "right" as CanvasTextAlign },
      ];
      ctx.font = `${9}px system-ui, sans-serif`;
      ctx.fillStyle = "rgba(255,255,255,0.2)";
      for (const z of zones) {
        ctx.textAlign = z.align;
        ctx.fillText(z.label, z.x, zoneY);
      }

      // Speed indicator on zone bar
      const barY = zoneY - 14;
      const barH = 3;
      ctx.fillStyle = "rgba(255,255,255,0.06)";
      ctx.fillRect(sparkX, barY, sparkW, barH);

      const speedT = (smoothedSpeedRef.current - SPEED_MIN) / (SPEED_MAX - SPEED_MIN);
      const indX = sparkX + Math.max(0, Math.min(1, speedT)) * sparkW;
      ctx.beginPath();
      ctx.arc(indX, barY + barH / 2, 4, 0, Math.PI * 2);
      ctx.fillStyle = col;
      ctx.fill();

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [phase, eegData, focusState]);

  // ── Render ───────────────────────────────────────────────────────────────

  const progress = duration > 0 ? currentTime / duration : 0;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#08080c",
        color: "#fff",
        fontFamily: "system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* ── Intro screen ─────────────────────────────────────────────── */}
      {phase === "intro" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <div style={{ maxWidth: 480, padding: "40px 32px", textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎧</div>
            <h2
              style={{
                fontSize: 28,
                fontWeight: 700,
                margin: "0 0 10px",
                background: "linear-gradient(135deg, #06b6d4, #22c55e, #f59e0b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MindCast
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.6,
                margin: "0 0 8px",
              }}
            >
              A podcast that listens to your brain.
            </p>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.6,
                margin: "0 0 28px",
              }}
            >
              Playback speed adapts to your focus in real-time — zone out and it
              slows down, lock in and it speeds up. Your attention is the
              throttle.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 26,
                marginBottom: 28,
                fontSize: 12,
                color: "rgba(255,255,255,0.35)",
              }}
            >
              <span>😴 0.5×</span>
              <span>🧠 1.0×</span>
              <span>🔥 1.75×</span>
            </div>

            <button
              onClick={startCalibration}
              style={{
                padding: "12px 32px",
                fontSize: 15,
                fontWeight: 600,
                background: "linear-gradient(135deg, #06b6d4, #22c55e)",
                color: "#000",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                transition: "transform 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Calibrate & Play →
            </button>
          </div>
        </div>
      )}

      {/* ── Calibration screen ───────────────────────────────────────── */}
      {phase === "calibrating" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          <div style={{ textAlign: "center", maxWidth: 400 }}>
            <div style={{ fontSize: 32, marginBottom: 16 }}>🧘</div>
            <h3 style={{ fontSize: 18, fontWeight: 600, margin: "0 0 8px" }}>
              Calibrating baseline…
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "rgba(255,255,255,0.5)",
                margin: "0 0 24px",
              }}
            >
              Relax and breathe normally for 3 seconds.
            </p>

            {/* Progress bar */}
            <div
              style={{
                width: 220,
                height: 4,
                background: "rgba(255,255,255,0.1)",
                borderRadius: 2,
                margin: "0 auto",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${calProgress * 100}%`,
                  height: "100%",
                  background: "linear-gradient(90deg, #06b6d4, #22c55e)",
                  borderRadius: 2,
                  transition: "width 0.1s",
                }}
              />
            </div>
            <p
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.3)",
                marginTop: 12,
              }}
            >
              {(calProgress * 100).toFixed(0)}%
            </p>
          </div>
        </div>
      )}

      {/* ── Player screen ────────────────────────────────────────────── */}
      {phase === "playing" && (
        <>
          {/* Canvas for focus ring + sparkline */}
          <canvas
            ref={canvasRef}
            style={{ flex: 1, width: "100%", minHeight: 0 }}
          />

          {/* Bottom transport bar */}
          <div
            style={{
              padding: "12px 24px 20px",
              background: "rgba(255,255,255,0.03)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {/* Title */}
            <p
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.5)",
                margin: "0 0 8px",
                textAlign: "center",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              🎧 Stream live brainwaves with Raspberry Pi
            </p>

            {/* Seek bar */}
            <div
              onClick={handleSeek}
              style={{
                height: 4,
                borderRadius: 2,
                background: "rgba(255,255,255,0.1)",
                cursor: "pointer",
                marginBottom: 8,
                position: "relative",
              }}
            >
              <div
                style={{
                  width: `${progress * 100}%`,
                  height: "100%",
                  borderRadius: 2,
                  background: "rgba(255,255,255,0.35)",
                }}
              />
            </div>

            {/* Time + controls */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 12,
                color: "rgba(255,255,255,0.4)",
              }}
            >
              <span>{formatTime(currentTime)}</span>

              <button
                onClick={togglePause}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "50%",
                  width: 40,
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#fff",
                  fontSize: 16,
                }}
                title={paused ? "Play (Space)" : "Pause (Space)"}
              >
                {paused ? "▶" : "⏸"}
              </button>

              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </>
      )}

      {/* ── Exit button (always visible) ─────────────────────────────── */}
      <button
        onClick={onExit}
        style={{
          position: "absolute",
          top: 12,
          left: 12,
          background: "rgba(255,255,255,0.07)",
          color: "rgba(255,255,255,0.6)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 6,
          padding: "6px 12px",
          fontSize: 13,
          cursor: "pointer",
          zIndex: 20,
        }}
      >
        ← Exit
      </button>
    </div>
  );
}
