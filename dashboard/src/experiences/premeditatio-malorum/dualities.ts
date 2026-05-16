// ─────────────────────────────────────────────────────────────────────────────
// Premeditatio Malorum — Duality catalogue
//
// Each "duality" is a pair of 360° YouTube videos: one CALM (baseline) and
// one DISRUPTIVE (the "negative visualisation").  The Stoic exercise is to
// witness the disruption while keeping Alpha rhythm dominant over Beta.
//
// Video IDs below are placeholders — swap for any 360°-tagged YouTube video.
// Verify the video is marked as 360°/VR (look for the cardboard icon in the
// YouTube player).  When the video is true 360°, the Meta Quest Browser
// player exposes a native VR/Cardboard button.
// ─────────────────────────────────────────────────────────────────────────────

export interface Pole {
  /** Display name shown in the HUD */
  name: string;
  /** Short descriptor for the onboarding card */
  caption: string;
  /** YouTube video ID (the part after watch?v= or youtu.be/) */
  youtubeId: string;
  /** Hint shown to the user */
  prompt: string;
  /** Hex accent colour for the HUD */
  accent: string;
}

export interface Duality {
  id: string;
  /** Headline shown in the scenario circle (uppercase Latin form recommended) */
  latin: string;
  /** Plain-language translation */
  translation: string;
  /** Stoic instruction shown during onboarding */
  meditation: string;
  /** Calm pole — used as baseline + recovery */
  calm: Pole;
  /** Disruptive pole — the "premeditatio" stimulus */
  disruption: Pole;
  /** Gradient for gallery card thumbnail */
  gradient: [string, string];
}

export const DUALITIES: Duality[] = [
  {
    id: "fire-forest",
    latin: "PREMEDITATIO MALORUM",
    translation: "Negative Visualisation",
    meditation:
      "Witness the virtual loss of your possessions. Hold your alpha. Return to the calm forest as if nothing was taken.",
    calm: {
      name: "Boreal Forest",
      caption: "Cold pine. Snow. Slow wind.",
      youtubeId: "sto1YBOS2bw",
      prompt: "Anchor to the cold. Breathe in time with the wind.",
      accent: "#22d3ee",
    },
    disruption: {
      name: "Fire Storm",
      caption: "Possessions burn. Witness without grasping.",
      youtubeId: "qSyKj3cP6Jk",
      prompt: "Observe the flames. Name what is mine vs. what is loaned.",
      accent: "#f97316",
    },
    gradient: ["#0f766e", "#dc2626"],
  },
  {
    id: "storm-ocean",
    latin: "AMOR FATI",
    translation: "Love of Fate",
    meditation:
      "Storm and stillness are one ocean. Will the storm as you willed the calm. Track your beta — let it spike, then dissolve.",
    calm: {
      name: "Glass Lagoon",
      caption: "Still water. Soft horizon.",
      youtubeId: "l1_N190Zrw8",
      prompt: "Settle. Let the breath match the swell.",
      accent: "#06b6d4",
    },
    disruption: {
      name: "Open-Sea Storm",
      caption: "Black waves. Salt wind.",
      youtubeId: "NW90-qo_nhc",
      prompt: "Welcome the wave as you welcomed the calm.",
      accent: "#7c3aed",
    },
    gradient: ["#0ea5e9", "#1e1b4b"],
  },
  {
    id: "city-mountain",
    latin: "SUMMUM BONUM",
    translation: "The Highest Good",
    meditation:
      "Descend into the noise. Climb back to the summit at will. The good is not in the place — it is in the response.",
    calm: {
      name: "Alpine Summit",
      caption: "Above the clouds. Thin air.",
      youtubeId: "kzOn1AYLopU",
      prompt: "Inhabit the height. Slow the heart.",
      accent: "#a5f3fc",
    },
    disruption: {
      name: "Tokyo Crossing",
      caption: "Crowd. Neon. Cascade of stimulus.",
      youtubeId: "rgsZru6zQmE",
      prompt: "Stay among them but do not become them.",
      accent: "#ec4899",
    },
    gradient: ["#0c4a6e", "#be185d"],
  },
  {
    id: "memento-mori",
    latin: "MEMENTO MORI",
    translation: "Remember Death",
    meditation:
      "Stand at the cliff edge. Picture the end. Return to the meadow and notice what is no longer trivial.",
    calm: {
      name: "Spring Meadow",
      caption: "Grass, bees, low sun.",
      youtubeId: "HreW_JqW2p8",
      prompt: "Receive the warmth as a finite gift.",
      accent: "#84cc16",
    },
    disruption: {
      name: "Cliff Edge",
      caption: "Vertical drop. Witness the void.",
      youtubeId: "3U6D-Tn41l4",
      prompt: "Look down. Inventory what would matter at the fall.",
      accent: "#475569",
    },
    gradient: ["#65a30d", "#0f172a"],
  },
];
