import type { ComponentType } from "react";
import type { EEGData } from "../types";

// ─────────────────────────────────────────────────────────────────────────────
// Experience registry — community contributors: add your experience here!
//
// 1. Create a component in this folder (e.g. MyExperience.tsx)
//    Props must extend ExperienceProps: { eegData, yScale, onExit }
// 2. Add an entry to EXPERIENCES below
// 3. That's it — it shows up in the gallery automatically
// ─────────────────────────────────────────────────────────────────────────────

/** Props every experience component receives. */
export interface ExperienceProps {
  eegData: EEGData;
  yScale: number;
  onExit: () => void;
}

export interface ExperienceEntry {
  id: string;
  name: string;
  description: string;
  /** Short tag shown on the card (e.g. "VR", "3D", "2D") */
  tag: string;
  /** Gradient colours for the card thumbnail placeholder */
  gradient: [string, string];
  /** The component to render when this experience is launched */
  component: ComponentType<ExperienceProps>;
  /** Whether VR headset is supported */
  vr?: boolean;
  /** Whether hand tracking is supported */
  handTracking?: boolean;
  /** Author / contributor name */
  author?: string;
}

// Lazy-load to keep the gallery page lightweight
import { lazy } from "react";

const XRWaveViewExperience = lazy(() => import("../components/XRWaveView"));
const BlinkBrowserExperience = lazy(
  () => import("./blink-scroll/BlinkBrowser"),
);

export const EXPERIENCES: ExperienceEntry[] = [
  {
    id: "xr-wave-view",
    name: "Neural Wave Space",
    description:
      "Immersive 3D EEG visualization — waves curve around you in a cosmic starfield. Supports VR headsets with hand tracking.",
    tag: "VR / 3D",
    gradient: ["#7c3aed", "#3b82f6"],
    component: XRWaveViewExperience,
    vr: true,
    handTracking: true,
    author: "PiEEG community",
  },
  {
    id: "blink-browser",
    name: "Blink Browser",
    description:
      "Scroll through articles and web pages using eye blinks. Includes per-user calibration that adapts to your blink strength.",
    tag: "BCI",
    gradient: ["#0070f3", "#00c853"],
    component: BlinkBrowserExperience,
    author: "PiEEG community",
  },
];
