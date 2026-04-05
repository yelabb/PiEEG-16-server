// ─────────────────────────────────────────────────────────────────────────────
// Shared EEG detector hooks — barrel export.
//
// Usage in any experience:
//
//   import { useBlink, useFocus, useRelax, useBandPowers } from "../../hooks/detectors";
//
//   function MyExperience({ eegData }: ExperienceProps) {
//     const { state: blink }  = useBlink(eegData);
//     const { state: focus }  = useFocus(eegData);
//     const { state: relax }  = useRelax(eegData);
//     const bandPowers        = useBandPowers(eegData);
//
//     useEffect(() => {
//       const id = requestAnimationFrame(function loop() {
//         if (blink.current.blinked) { /* … */ }
//         console.log("focus:", focus.current.focus);
//         console.log("relax:", relax.current.relaxation);
//         requestAnimationFrame(loop);
//       });
//       return () => cancelAnimationFrame(id);
//     }, []);
//   }
// ─────────────────────────────────────────────────────────────────────────────

export { useBandPowers } from "./useBandPowers";
export type { BandPowersConfig, BandPowersResult } from "./useBandPowers";

export { useBlink } from "./useBlink";
export type { BlinkConfig, BlinkState } from "./useBlink";

export { useFocus } from "./useFocus";
export type { FocusConfig, FocusState } from "./useFocus";

export { useRelax } from "./useRelax";
export type { RelaxConfig, RelaxState } from "./useRelax";
