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
  /** Optional: send a command to the pieeg-server WebSocket. */
  sendCommand?: (cmd: Record<string, unknown>) => void;
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
const NeuralSonificationExperience = lazy(
  () => import("./neural-sonification/NeuralSonification"),
);
const VRChatOSCExperience = lazy(
  () => import("./vrchat-osc/VRChatOSC"),
);
const SpoonBendExperience = lazy(
  () => import("./spoon-bend/SpoonBend"),
);
const WebhookWizardExperience = lazy(
  () => import("./webhook-wizard/WebhookWizard"),
);
const EyeTrackExperience = lazy(
  () => import("./eye-track/EyeTrack"),
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
  {
    id: "neural-sonification",
    name: "Neural Sonification",
    description:
      "Turn your brainwaves into live music — Delta drives a deep drone, Theta shapes an FM pad, Alpha opens a melodic lead, Beta adds bright harmonics, and Gamma sparkles with shimmer. Full DJ controls for scale, key, reverb, and delay.",
    tag: "Audio",
    gradient: ["#f59e0b", "#ef4444"],
    component: NeuralSonificationExperience,
    author: "PiEEG community",
  },
  {
    id: "vrchat-osc",
    name: "VRChat OSC Bridge",
    description:
      "Stream live EEG band powers into VRChat via OSC UDP. Show your mental state in the chatbox bubble above your avatar's head, or drive avatar expressions and animations with normalised band-power float parameters.",
    tag: "VRChat",
    gradient: ["#1565c0", "#6a1b9a"],
    component: VRChatOSCExperience,
    author: "PiEEG community",
  },
  {
    id: "spoon-bend",
    name: "Spoon Bend",
    description:
      "Channel your focus to bend a virtual spoon — Matrix style. Beta and Gamma brainwaves drive the bend while digital rain cascades around you. Includes baseline calibration for personalised sensitivity.",
    tag: "Focus",
    gradient: ["#059669", "#0a0a0a"],
    component: SpoonBendExperience,
    author: "PiEEG community",
  },
  {
    id: "webhook-wizard",
    name: "Webhook Wizard",
    description:
      "Guided walkthrough to set up your first brain-powered automation — connect IFTTT, Zapier, or any webhook in 60 seconds with live EEG feedback.",
    tag: "Automation",
    gradient: ["#ff4a00", "#33ccff"],
    component: WebhookWizardExperience,
    author: "PiEEG community",
  },
  {
    id: "eye-track",
    name: "Eye Track",
    description:
      "EOG-based gaze estimation using Fp1/Fp2 frontal electrodes. Polynomial ridge regression (degree 2) maps eye signals to screen position. Online adaptive learning continuously improves accuracy — save your trained model to localStorage and resume later. Includes a live algorithm editor.",
    tag: "BCI",
    gradient: ["#06b6d4", "#8b5cf6"],
    component: EyeTrackExperience,
    author: "PiEEG community",
  },
];
