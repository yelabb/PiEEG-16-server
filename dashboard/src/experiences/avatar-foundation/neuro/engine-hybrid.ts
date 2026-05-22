// ─────────────────────────────────────────────────────────────────────────────
// engine-hybrid — Fusion logic for combining spectral + artifact pipelines
//
// Hybrid links reference two sub-calibrations (spectral + artifact) and combine
// their normalized outputs using various fusion modes.
// ─────────────────────────────────────────────────────────────────────────────

import type { Link } from "./types";
import { evaluateLink } from "./engine";
import { evaluateArtifactLink } from "./engine-artifact";

/**
 * Evaluate a hybrid link by combining spectral and artifact components.
 * 
 * @param link - The hybrid link with fusion configuration
 * @param spectralLink - The spectral sub-link (or undefined if not calibrated)
 * @param artifactLink - The artifact sub-link (or undefined if not calibrated)
 * @param spectralValue - Current normalized spectral feature value
 * @param artifactValue - Current normalized artifact envelope value
 * @returns The fused activation value (0..1)
 */
export function evaluateHybridLink(
  link: Link,
  spectralLink: Link | undefined,
  artifactLink: Link | undefined,
  spectralValue: number,
  artifactValue: number
): number {
  const mode = link.fusionMode || "multiply";
  const weights = link.fusionWeights || [1, 1];

  // If either component is missing, fall back to the available one
  if (!spectralLink && !artifactLink) return 0;
  if (!spectralLink) return artifactValue;
  if (!artifactLink) return spectralValue;

  // Apply weights
  const wSpec = spectralValue * weights[0];
  const wArt = artifactValue * weights[1];

  // Fusion logic
  switch (mode) {
    case "multiply":
      // Both must be active (useful for: surprised = browUp AND beta burst)
      return wSpec * wArt;

    case "add":
      // Either can activate, blend together (useful for: excited = high beta OR jaw movement)
      return Math.min(1, wSpec + wArt);

    case "max":
      // Whichever is stronger wins (useful for: alert = either high gamma OR blink)
      return Math.max(wSpec, wArt);

    case "and":
      // Both must exceed threshold (strict requirement)
      return wSpec > 0.5 && wArt > 0.5 ? Math.min(wSpec, wArt) : 0;

    case "sequential":
      // Artifact triggers, spectral modulates intensity
      // (useful for: blink intensity modulated by focus level)
      return wArt > 0.3 ? wSpec : 0;

    default:
      return wSpec * wArt;
  }
}

/**
 * Check if a hybrid link is well-trained (both sub-links calibrated).
 */
export function isWellTrainedHybrid(
  link: Link,
  spectralLink: Link | undefined,
  artifactLink: Link | undefined
): boolean {
  if (link.pipeline !== "hybrid") return false;
  
  // At least one sub-link must be well-trained
  const spectralOk = spectralLink?.cal && 
    spectralLink.cal.rest.n > 4 && 
    spectralLink.cal.active.n > 4;
  
  const artifactOk = artifactLink?.artifactCal && 
    artifactLink.artifactCal.threshold > 0;

  return Boolean(spectralOk || artifactOk);
}
