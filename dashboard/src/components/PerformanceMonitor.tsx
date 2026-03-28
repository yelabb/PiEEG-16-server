import { useRef, useEffect, useState, memo } from "react";

const PerformanceMonitor = memo(function PerformanceMonitor() {
  const [visible, setVisible] = useState(false);
  const [fps, setFps] = useState(0);
  const [frameTime, setFrameTime] = useState(0);
  const [memory, setMemory] = useState(0);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const rafRef = useRef(0);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "p" || e.key === "P") {
        setVisible((v) => !v);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    if (!visible) return;

    const tick = () => {
      frameCountRef.current++;
      const now = performance.now();
      const deltaTime = now - lastTimeRef.current;

      if (deltaTime >= 1000) {
        setFps(Math.round(frameCountRef.current * (1000 / deltaTime)));
        setFrameTime(Math.round((deltaTime / frameCountRef.current) * 100) / 100);

        const perfMemory = (performance as unknown as { memory?: { usedJSHeapSize: number } }).memory;
        if (perfMemory) {
          setMemory(Math.round(perfMemory.usedJSHeapSize / 1048576));
        }

        frameCountRef.current = 0;
        lastTimeRef.current = now;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 10,
        right: 10,
        background: "rgba(0, 0, 0, 0.8)",
        color: "#0f0",
        fontFamily: "monospace",
        fontSize: "12px",
        padding: "8px 12px",
        borderRadius: "4px",
        zIndex: 10000,
        border: "1px solid #0f0",
        userSelect: "none",
      }}
    >
      <div>FPS: {fps}</div>
      <div>Frame: {frameTime}ms</div>
      <div>Memory: {memory}MB</div>
      <div style={{ marginTop: "4px", fontSize: "10px", opacity: 0.7 }}>
        Press P to toggle
      </div>
    </div>
  );
});

export default PerformanceMonitor;
