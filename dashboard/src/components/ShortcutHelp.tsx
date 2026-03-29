import { useEffect, useState } from "react";

const SHORTCUTS: { key: string; desc: string }[] = [
  { key: "Space", desc: "Pause / Resume" },
  { key: "R", desc: "Start / Stop recording" },
  { key: "F", desc: "Toggle FFT panel" },
  { key: "G", desc: "Toggle Spectrogram" },
  { key: "S", desc: "Toggle Statistics panel" },
  { key: "V", desc: "Toggle XR / VR view" },
  { key: "P", desc: "Toggle performance monitor" },
  { key: "?", desc: "Show this help" },
  { key: "Esc", desc: "Close overlay / panel" },
];

export default function ShortcutHelp() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
      if (e.key === "?" || (e.shiftKey && e.code === "Slash")) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.code === "Escape" && open) {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={() => setOpen(false)}>
      <div className="shortcut-card" onClick={(e) => e.stopPropagation()}>
        <h2>Keyboard Shortcuts</h2>
        <div className="shortcut-grid">
          {SHORTCUTS.map((s) => (
            <div className="shortcut-row" key={s.key}>
              <kbd>{s.key}</kbd>
              <span>{s.desc}</span>
            </div>
          ))}
        </div>
        <button className="btn shortcut-close" onClick={() => setOpen(false)}>
          Close
        </button>
      </div>
    </div>
  );
}
