// ─────────────────────────────────────────────────────────────────────────────
// The Glitching Reality
//
//   "I wired my brain to my room.  If I lose focus, reality breaks."
//
// A purely visual MR demonstration of Frontal Alpha Asymmetry.  The device
// camera is used as a stand-in for headset passthrough; a fullscreen
// fragment shader composites EEG-driven glitches on top.  When calm /
// equanimous, the passthrough is a clean high-contrast overlay; cognitive
// load and frustration tear it apart.  A deep breath snaps reality back.
//
// Designed to also work full-screen in the Meta Quest Browser (where it
// becomes a true MR overlay over the front colour cameras).
// ─────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ExperienceProps } from "../registry";
import { useFAA } from "./useFAA";
import { FRAGMENT_SRC, VERTEX_SRC } from "./glitchShader";
import { FREQUENCY_BANDS } from "../../lib/fftEngine";
import "./glitch.css";

// ─────────────────────────────────────────────────────────────────────────
// Tooltip
// ─────────────────────────────────────────────────────────────────────────

function Tooltip({ text, children }: { text: string; children: React.ReactNode }) {
  return (
    <span className="gl-tip-wrap">
      {children}
      <span className="gl-tip" role="tooltip">{text}</span>
    </span>
  );
}

type Stage = "intro" | "camera" | "live";

interface PuzzleState {
  question: string;
  answer: number;
  deadline: number;
  streak: number;
  lastResult: "correct" | "wrong" | null;
}

function makePuzzle(difficulty: number): { q: string; a: number } {
  // Difficulty 1..5 → bigger numbers, more operations.
  const r = (n: number) => Math.floor(Math.random() * n);
  if (difficulty <= 1) {
    const a = 12 + r(40), b = 8 + r(30);
    return { q: `${a} + ${b}`, a: a + b };
  }
  if (difficulty <= 2) {
    const a = 30 + r(80), b = 10 + r(60);
    return { q: `${a} − ${b}`, a: a - b };
  }
  if (difficulty <= 3) {
    const a = 6 + r(13), b = 4 + r(13);
    return { q: `${a} × ${b}`, a: a * b };
  }
  if (difficulty <= 4) {
    const a = 7 + r(11), b = 3 + r(8), c = 5 + r(20);
    return { q: `${a} × ${b} − ${c}`, a: a * b - c };
  }
  const a = 13 + r(40), b = 4 + r(8), c = 3 + r(11);
  return { q: `${a} × ${b} + ${a} − ${c}`, a: a * b + a - c };
}

// ─────────────────────────────────────────────────────────────────────────
// WebGL helpers
// ─────────────────────────────────────────────────────────────────────────

function compileShader(gl: WebGL2RenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)!;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(sh);
    gl.deleteShader(sh);
    throw new Error(`Shader compile failed: ${log}`);
  }
  return sh;
}

function buildProgram(gl: WebGL2RenderingContext) {
  const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SRC);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SRC);
  const p = gl.createProgram()!;
  gl.attachShader(p, vs);
  gl.attachShader(p, fs);
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(p);
    throw new Error(`Program link failed: ${log}`);
  }
  return p;
}

// ─────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────

// Coaching tips shown bottom-center, cycling based on state.
const TIPS: Record<string, string[]> = {
  calm:  ["Keep it up — eyes soft, jaw loose.", "Feel your exhale lengthen.", "Let thoughts pass without engaging them."],
  drift: ["Slow down your breathing — 4 s in, 6 s out.", "Drop your shoulders. Relax your eyes.", "Observe the distortion without reacting to it."],
  tear:  ["Take one slow, deep belly breath now.", "Close your eyes for 2 seconds, then re-open.", "Unclench your jaw and forehead."],
  frac:  ["Stop the puzzle. Breathe first.", "Long exhale — let beta fall.", "Eyes closed, 3 slow breaths."],
};

export default function GlitchingReality({ eegData, onExit }: ExperienceProps) {
  const [stage, setStage] = useState<Stage>("intro");
  const [error, setError] = useState<string | null>(null);
  const [puzzleOn, setPuzzleOn] = useState(false);
  const [difficulty, setDifficulty] = useState(3);
  const [puzzle, setPuzzle] = useState<PuzzleState | null>(null);
  const [answerInput, setAnswerInput] = useState("");
  const [showHow, setShowHow] = useState(false);
  // Session score: +1/s while calm, −2/s while fractured.
  const [score, setScore] = useState(0);
  const [tipIdx, setTipIdx] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number | null>(null);

  const { liveRef, snapshot } = useFAA(eegData);

  // ── Camera passthrough ───────────────────────────────────────────────
  const startCamera = useCallback(async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: "environment" },
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });
      streamRef.current = stream;
      const v = videoRef.current;
      if (v) {
        v.srcObject = stream;
        v.muted = true;
        v.playsInline = true;
        await v.play();
      }
      setStage("live");
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      setError(`Camera access denied — ${msg}`);
    }
  }, []);

  useEffect(() => {
    return () => {
      streamRef.current?.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ── WebGL render loop ────────────────────────────────────────────────
  useEffect(() => {
    if (stage !== "live") return;
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const gl = canvas.getContext("webgl2", { antialias: false, alpha: false });
    if (!gl) { setError("WebGL2 not available on this device."); return; }

    let program: WebGLProgram;
    try { program = buildProgram(gl); }
    catch (e) { setError((e as Error).message); return; }

    // Fullscreen triangle (no VBO required in WebGL2 with gl_VertexID).
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);

    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const uTex = gl.getUniformLocation(program, "u_tex");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uInst = gl.getUniformLocation(program, "u_instability");
    const uSnap = gl.getUniformLocation(program, "u_snap");
    const uRes = gl.getUniformLocation(program, "u_resolution");
    const uAR = gl.getUniformLocation(program, "u_videoAspect");
    const uFAA = gl.getUniformLocation(program, "u_faa");

    let disposed = false;
    const t0 = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.floor(canvas.clientWidth * dpr);
      const h = Math.floor(canvas.clientHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w; canvas.height = h;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const frame = () => {
      if (disposed) return;
      resize();
      gl.useProgram(program);

      if (video.readyState >= 2 && video.videoWidth > 0) {
        gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(
          gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video,
        );
      }

      const sig = liveRef.current;
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.uniform1i(uTex, 0);
      gl.uniform1f(uTime, (performance.now() - t0) / 1000);
      gl.uniform1f(uInst, sig.instability);
      gl.uniform1f(uSnap, sig.snapping ? 1 : 0);
      gl.uniform1f(uFAA, Math.max(-2, Math.min(2, sig.faa)));
      gl.uniform2f(uRes, canvas.width, canvas.height);
      const vAR = video.videoWidth > 0 ? video.videoWidth / video.videoHeight : 16 / 9;
      gl.uniform1f(uAR, vAR);

      gl.drawArrays(gl.TRIANGLES, 0, 3);
      rafRef.current = requestAnimationFrame(frame);
    };
    rafRef.current = requestAnimationFrame(frame);

    return () => {
      disposed = true;
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      gl.deleteProgram(program);
      gl.deleteTexture(tex);
      gl.deleteVertexArray(vao);
    };
  }, [stage, liveRef]);

  // ── Session score + coaching tip ticker ──────────────────────────────
  useEffect(() => {
    if (stage !== "live") return;
    const id = setInterval(() => {
      setScore((s) => {
        const inst = liveRef.current.instability;
        const delta = inst > 0.75 ? -2 : inst > 0.5 ? -0.5 : inst < 0.25 ? 1 : 0;
        return Math.max(0, s + delta);
      });
      setTipIdx((i) => (i + 1) % 3);
    }, 1000);
    return () => clearInterval(id);
  }, [stage, liveRef]);

  // ── Mental arithmetic puzzle (deliberate stressor) ───────────────────
  useEffect(() => {
    if (!puzzleOn) { setPuzzle(null); setAnswerInput(""); return; }
    const next = () => {
      const { q, a } = makePuzzle(difficulty);
      setPuzzle((prev) => ({
        question: q,
        answer: a,
        deadline: performance.now() + Math.max(4000, 11000 - difficulty * 1500),
        streak: prev?.streak ?? 0,
        lastResult: null,
      }));
      setAnswerInput("");
    };
    next();
    const id = setInterval(() => {
      setPuzzle((p) => {
        if (!p) return p;
        if (performance.now() > p.deadline) {
          const { q, a } = makePuzzle(difficulty);
          return {
            question: q, answer: a,
            deadline: performance.now() + Math.max(4000, 11000 - difficulty * 1500),
            streak: 0,
            lastResult: "wrong",
          };
        }
        return p;
      });
    }, 200);
    return () => clearInterval(id);
  }, [puzzleOn, difficulty]);

  const submitAnswer = useCallback(() => {
    setPuzzle((p) => {
      if (!p) return p;
      const parsed = parseInt(answerInput, 10);
      const correct = !isNaN(parsed) && parsed === p.answer;
      const { q, a } = makePuzzle(difficulty);
      const newStreak = correct ? p.streak + 1 : 0;
      // Auto-ramp difficulty.
      if (correct && newStreak > 0 && newStreak % 3 === 0 && difficulty < 5) {
        setDifficulty((d) => Math.min(5, d + 1));
      } else if (!correct && difficulty > 1) {
        setDifficulty((d) => Math.max(1, d - 1));
      }
      return {
        question: q, answer: a,
        deadline: performance.now() + Math.max(4000, 11000 - difficulty * 1500),
        streak: newStreak,
        lastResult: correct ? "correct" : "wrong",
      };
    });
    setAnswerInput("");
  }, [answerInput, difficulty]);

  // ── HUD derived values ───────────────────────────────────────────────
  const instPct = useMemo(() => Math.round(snapshot.instability * 100), [snapshot.instability]);
  const calmPct = useMemo(() => Math.round(snapshot.calm * 100), [snapshot.calm]);
  const faaTxt  = useMemo(() => snapshot.faa.toFixed(2), [snapshot.faa]);
  const surgePct = useMemo(() => Math.round(snapshot.betaSurge * 100), [snapshot.betaSurge]);

  const stateLabel =
    snapshot.snapping ? "SNAP → CLARITY" :
    snapshot.instability > 0.75 ? "REALITY FRACTURED" :
    snapshot.instability > 0.5 ? "TEARING" :
    snapshot.instability > 0.25 ? "DRIFTING" :
    "EQUANIMITY";

  const stateKey: keyof typeof TIPS =
    snapshot.instability > 0.75 ? "frac" :
    snapshot.instability > 0.5  ? "tear" :
    snapshot.instability > 0.25 ? "drift" : "calm";

  const currentTip = TIPS[stateKey][tipIdx % TIPS[stateKey].length];

  const puzzleTimeLeft = puzzle ? Math.max(0, puzzle.deadline - performance.now()) / 1000 : 0;

  // ─────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────
  return (
    <div className="glitch-root">

      {/* ── Live MR view ────────────────────────────────────────────── */}
      <video
        ref={videoRef}
        className="glitch-video"
        autoPlay
        playsInline
        muted
        aria-hidden="true"
      />
      <canvas
        ref={canvasRef}
        className={`glitch-canvas ${stage === "live" ? "is-live" : ""}`}
      />

      {/* ── Stage: intro ────────────────────────────────────────────── */}
      {stage === "intro" && (
        <div className="glitch-panel glitch-intro">
          <button className="glitch-exit" onClick={onExit}>✕ Exit</button>
          <h1>The Glitching Reality</h1>
          <p className="glitch-tag">
            I wired my brain to my room.  If I lose focus, reality breaks.
          </p>
          <p className="glitch-prose">
            This is a purely visual demonstration of <strong>Frontal Alpha
            Asymmetry</strong>.  Your phone or headset camera becomes a mixed-
            reality passthrough; a real-time shader composites EEG-driven
            distortion on top.
          </p>
          <ul className="glitch-list">
            <li><span>•</span> When you are calm and equanimous, the room is pristine.</li>
            <li><span>•</span> Cognitive load tears the scene apart — RGB split, slice tear, harsh light.</li>
            <li><span>•</span> A deep, slow breath snaps reality back to clarity.</li>
          </ul>
          <p className="glitch-prose glitch-dim">
            Works with any electrode placement and any number of channels.
            When two or more channels are connected, Frontal Alpha Asymmetry
            is computed from channels 1 &amp; 2; with a single channel the
            calm / β signal still drives the shader.
            Best in a darkened room, on a phone or Quest Browser.
          </p>
          {error && <div className="glitch-err">{error}</div>}
          <div className="glitch-actions">
            <button className="glitch-btn glitch-btn--primary" onClick={startCamera}>
              Wire In
            </button>
            <button className="glitch-btn" onClick={onExit}>Cancel</button>
          </div>
        </div>
      )}

      {/* ── Stage: live HUD ─────────────────────────────────────────── */}
      {stage === "live" && (
        <>
          <button className="glitch-exit glitch-exit--floating" onClick={onExit}>
            ✕ Exit
          </button>

          <div className="glitch-hud glitch-hud--tl">
            <div className="glitch-hud-row glitch-hud-score-row">
              <Tooltip text="Score: +1 pts/s while calm, −2 pts/s while fractured. Keep reality stable to grow your score.">
                <span className="glitch-hud-k glitch-tip-label">SCORE ⓘ</span>
              </Tooltip>
              <span className="glitch-hud-v glitch-score">{Math.floor(score)}</span>
            </div>
            <div className="glitch-hud-row" style={{ marginBottom: 8 }}>
              <Tooltip text="Composite instability driving the shader. Rises with beta and cognitive load, falls with calm alpha.">
                <span className="glitch-hud-k glitch-tip-label">STATE ⓘ</span>
              </Tooltip>
              <span className={`glitch-hud-v glitch-hud-state lvl-${
                snapshot.snapping ? "snap" :
                snapshot.instability > 0.75 ? "frac" :
                snapshot.instability > 0.5 ? "tear" :
                snapshot.instability > 0.25 ? "drift" : "calm"
              }`}>{stateLabel}</span>
            </div>
            <Tooltip text="How fractured reality is right now. Goal: keep this below 25%.">
              <span className="glitch-tip-label">
                <Bar label="INSTABILITY ⓘ" pct={instPct} color="#ff3366" />
              </span>
            </Tooltip>
            <Tooltip text="Alpha / (Alpha + Beta) — how much your brain is in idle/relaxed alpha vs active beta. Higher is calmer.">
              <span className="glitch-tip-label">
                <Bar label="CALM α/(α+β) ⓘ" pct={calmPct} color="#5cf2ff" />
              </span>
            </Tooltip>
            <Tooltip text="Beta power vs your 30-second rolling baseline. Spikes during mental effort or stress.">
              <span className="glitch-tip-label">
                <Bar label="β SURGE ⓘ" pct={surgePct} color="#ffb347" />
              </span>
            </Tooltip>
            <div className="glitch-hud-row glitch-hud-faa">
              <Tooltip text="Frontal Alpha Asymmetry: ln(α_ch2) − ln(α_ch1). Positive = approach/positive affect. Negative = withdrawal/frustration.">
                <span className="glitch-hud-k glitch-tip-label">FAA ⓘ</span>
              </Tooltip>
              <span className="glitch-hud-v">
                {faaTxt} <span className="glitch-hud-dim">
                  ({snapshot.faa > 0.05 ? "approach" : snapshot.faa < -0.05 ? "withdraw" : "neutral"})
                </span>
              </span>
            </div>
            <div className="glitch-hud-row glitch-hud-bands">
              {FREQUENCY_BANDS.map((b) => (
                <Tooltip key={b.name} text={`${b.label} (${b.low}–${b.high} Hz) — avg power across all channels (µV²/Hz × 10⁻⁶)`}>
                  <span className="glitch-band-chip" style={{ color: b.color }}>
                    {b.label.charAt(0)}
                    <span className="glitch-band-val">
                      {((snapshot.bands[b.name] ?? 0) * 1e6).toFixed(0)}
                    </span>
                  </span>
                </Tooltip>
              ))}
            </div>
            <div className="glitch-hud-row glitch-hud-dim" style={{ fontSize: "0.7rem", marginTop: 2 }}>
              <span className="glitch-hud-k">CH</span>
              <span className="glitch-hud-v">{snapshot.activeChannels} active</span>
            </div>
          </div>

          <div className="glitch-hud glitch-hud--tr">
            <div className="glitch-hud-title-row">
              <span className="glitch-hud-title">Stressor</span>
              <button
                className="glitch-how-btn"
                onClick={() => setShowHow((v) => !v)}
                aria-expanded={showHow}
              >{showHow ? "▲ hide" : "? how to play"}</button>
            </div>
            {showHow && (
              <div className="glitch-how">
                <p><strong>Goal:</strong> keep the room clean (instability &lt; 25%) for as long as possible.</p>
                <ul>
                  <li>🟦 <strong>CALM</strong> — alpha dominates. Score rises.</li>
                  <li>🟡 <strong>TEARING</strong> — beta rising. Slow your breathing.</li>
                  <li>🔴 <strong>FRACTURED</strong> — reality broken. Score drops fast.</li>
                  <li>⚡ <strong>SNAP</strong> — sharp exhale detected. Room resets.</li>
                </ul>
                <p><strong>Stressor:</strong> enable the puzzle to deliberately break reality, then recover. Training biofeedback loop.</p>
                <p><strong>Snap trick:</strong> inhale deeply, then exhale sharply through your mouth to trigger SNAP.</p>
              </div>
            )}
            <label className="glitch-toggle">
              <input
                type="checkbox"
                checked={puzzleOn}
                onChange={(e) => setPuzzleOn(e.target.checked)}
              />
              <span>Mental arithmetic stressor</span>
            </label>
            {puzzleOn && (
              <div className="glitch-diff">
                <span>Difficulty</span>
                <div>
                  {[1,2,3,4,5].map(n => (
                    <button
                      key={n}
                      className={`glitch-diff-btn ${difficulty === n ? "is-on" : ""}`}
                      onClick={() => setDifficulty(n)}
                    >{n}</button>
                  ))}
                </div>
              </div>
            )}
            <p className="glitch-hint">Breathe slowly to snap the room back.</p>
          </div>

          {/* ── Coaching tip bottom-center ─────────────────────────── */}
          {!snapshot.snapping && (
            <div className={`glitch-coaching lvl-${stateKey}`}>
              {currentTip}
            </div>
          )}

          {puzzleOn && puzzle && (
            <div className="glitch-puzzle">
              <div className="glitch-puzzle-q">{puzzle.question} = ?</div>
              <input
                className="glitch-puzzle-input"
                type="text"
                inputMode="numeric"
                autoFocus
                value={answerInput}
                onChange={(e) => setAnswerInput(e.target.value.replace(/[^0-9\-]/g, ""))}
                onKeyDown={(e) => { if (e.key === "Enter") submitAnswer(); }}
                placeholder="answer"
              />
              <div className="glitch-puzzle-meta">
                <span className={`glitch-puzzle-timer ${puzzleTimeLeft < 2 ? "is-low" : ""}`}>
                  {puzzleTimeLeft.toFixed(1)}s
                </span>
                <span>streak {puzzle.streak}</span>
                {puzzle.lastResult && (
                  <span className={`glitch-puzzle-flash is-${puzzle.lastResult}`}>
                    {puzzle.lastResult === "correct" ? "✓" : "✗"}
                  </span>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Bar — minimal HUD bar
// ─────────────────────────────────────────────────────────────────────────

function Bar({ label, pct, color }: { label: string; pct: number; color: string }) {
  return (
    <div className="glitch-bar">
      <div className="glitch-bar-head">
        <span className="glitch-hud-k">{label}</span>
        <span className="glitch-hud-v">{pct}%</span>
      </div>
      <div className="glitch-bar-track">
        <div
          className="glitch-bar-fill"
          style={{ width: `${Math.max(0, Math.min(100, pct))}%`, background: color }}
        />
      </div>
    </div>
  );
}
