// ─────────────────────────────────────────────────────────────────────────────
// P300 — Model persistence (subject-specific, cross-session)
//
// Serialised models live in localStorage keyed by subject id so the same
// user can resume across sessions without re-calibrating. A profile also
// remembers their preferred CalibrationConfig + training metrics.
// ─────────────────────────────────────────────────────────────────────────────

import type { SerialisedModel } from "../types";

const KEY_PREFIX = "pieeg-p300-v1:";

export function listSubjects(): string[] {
  const out: string[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith(KEY_PREFIX)) {
      out.push(k.slice(KEY_PREFIX.length));
    }
  }
  return out;
}

export function loadModel(subject_id: string): SerialisedModel | null {
  try {
    const raw = localStorage.getItem(KEY_PREFIX + subject_id);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SerialisedModel;
    if (!parsed.kind || !parsed.payload) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveModel(model: SerialisedModel): void {
  localStorage.setItem(KEY_PREFIX + model.subject_id, JSON.stringify(model));
}

export function deleteModel(subject_id: string): void {
  localStorage.removeItem(KEY_PREFIX + subject_id);
}
