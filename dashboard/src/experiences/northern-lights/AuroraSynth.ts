// ─────────────────────────────────────────────────────────────────────────────
// AuroraSynth — Zen ambient engine for the Northern Lights experience.
//
// Architecture: layered drones & textures that evolve slowly, with
// binaural detuning, singing-bowl overtones, and gentle pitch drift
// driven by EEG band powers.  Everything uses very long ramp times
// (0.4–1.2 s) so transitions feel organic, never abrupt.
//
//   Delta → deep binaural drone (two detuned sines, ~2 Hz beat)
//   Theta → ethereal FM pad with slow LFO pitch drift
//   Alpha → breath / wind (wide bandpass noise, opens with relaxation)
//   Beta  → singing bowl (detuned triangle harmonics, resonant filter)
//   Gamma → crystal shimmer (high partials + long delay tails)
//
// Always-on: pink-noise arctic wind at barely audible level.
// Reverb: 5 s decay — vast arctic cathedral.
// ─────────────────────────────────────────────────────────────────────────────

import type { BandPowers } from "../../types";

function clamp(v: number, lo: number, hi: number): number {
  return v < lo ? lo : v > hi ? hi : v;
}

/** Smooth ramping — long tau values for zen feel. */
function ramp(p: AudioParam, val: number, t: number, tau = 0.5): void {
  p.setTargetAtTime(val, t, tau);
}

export interface AuroraConfig {
  masterVolume: number;
  reverbMix: number;
  delayTime: number;
  delayFeedback: number;
  sensitivity: number;
}

const DEFAULT_CONFIG: AuroraConfig = {
  masterVolume: 0.45,
  reverbMix: 0.6,
  delayTime: 0.6,
  delayFeedback: 0.4,
  sensitivity: 2,
};

// Root note — Eb2 (77.78 Hz), very low, meditative
const ROOT = 77.78;

export class AuroraSynth {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;

  // ── Voices ─────────────────────────────────────────────────────────
  // Drone: binaural pair (L slightly flat, R slightly sharp → beating)
  private droneL: OscillatorNode | null = null;
  private droneR: OscillatorNode | null = null;
  private droneMerge: ChannelMergerNode | null = null;
  private droneGain: GainNode | null = null;

  // Pad: FM carrier + slow-LFO modulator + detuned second carrier
  private padA: OscillatorNode | null = null;
  private padB: OscillatorNode | null = null;
  private padMod: OscillatorNode | null = null;
  private padModGain: GainNode | null = null;
  private padGain: GainNode | null = null;

  // Wind / breath: looped noise → bandpass
  private windSrc: AudioBufferSourceNode | null = null;
  private windBP: BiquadFilterNode | null = null;
  private windLP: BiquadFilterNode | null = null;
  private windGain: GainNode | null = null;

  // Bowl: two detuned triangles → resonant bandpass
  private bowlA: OscillatorNode | null = null;
  private bowlB: OscillatorNode | null = null;
  private bowlBP: BiquadFilterNode | null = null;
  private bowlGain: GainNode | null = null;

  // Shimmer: high sine partial + second partial offset
  private shimA: OscillatorNode | null = null;
  private shimB: OscillatorNode | null = null;
  private shimGain: GainNode | null = null;

  // FX
  private delay: DelayNode | null = null;
  private delayFb: GainNode | null = null;
  private delaySend: GainNode | null = null;
  private convolver: ConvolverNode | null = null;
  private wetGain: GainNode | null = null;
  private dryGain: GainNode | null = null;

  // Ambient wind
  private ambWindSrc: AudioBufferSourceNode | null = null;
  private ambWindGain: GainNode | null = null;

  // LFO for slow pitch drift on pad
  private padLFO: OscillatorNode | null = null;
  private padLFOGain: GainNode | null = null;

  config: AuroraConfig = { ...DEFAULT_CONFIG };
  private _playing = false;
  private _updateCount = 0;
  get playing() { return this._playing; }

  // ── Start ──────────────────────────────────────────────────────────

  async start(): Promise<void> {
    if (this._playing) return;
    const ctx = new AudioContext();
    if (ctx.state === "suspended") await ctx.resume();
    this.ctx = ctx;
    const t = ctx.currentTime;

    // Master
    this.master = ctx.createGain();
    this.master.gain.value = this.config.masterVolume;

    // ── Reverb — vast 5 s decay ──────────────────────────────────────
    this.convolver = ctx.createConvolver();
    this.convolver.buffer = this._impulse(ctx, 5, 2);
    this.wetGain = ctx.createGain();
    this.wetGain.gain.value = this.config.reverbMix;
    this.dryGain = ctx.createGain();
    this.dryGain.gain.value = 1 - this.config.reverbMix;
    this.master.connect(this.dryGain);
    this.dryGain.connect(ctx.destination);
    this.master.connect(this.convolver);
    this.convolver.connect(this.wetGain);
    this.wetGain.connect(ctx.destination);

    // ── Delay — long, dreamy ─────────────────────────────────────────
    this.delay = ctx.createDelay(3);
    this.delay.delayTime.value = this.config.delayTime;
    this.delayFb = ctx.createGain();
    this.delayFb.gain.value = this.config.delayFeedback;
    this.delaySend = ctx.createGain();
    this.delaySend.gain.value = 0;
    this.delaySend.connect(this.delay);
    this.delay.connect(this.delayFb);
    this.delayFb.connect(this.delay);
    this.delay.connect(this.master);

    // ── 1. Binaural Drone (Delta) ────────────────────────────────────
    // L ear slightly flat, R ear slightly sharp → ~2 Hz beat frequency
    this.droneL = ctx.createOscillator();
    this.droneL.type = "sine";
    this.droneL.frequency.value = ROOT - 1;       // 76.78 Hz
    this.droneR = ctx.createOscillator();
    this.droneR.type = "sine";
    this.droneR.frequency.value = ROOT + 1;        // 78.78 Hz
    this.droneMerge = ctx.createChannelMerger(2);
    this.droneGain = ctx.createGain();
    this.droneGain.gain.value = 0;
    const droneLP = ctx.createBiquadFilter();
    droneLP.type = "lowpass";
    droneLP.frequency.value = 200;
    droneLP.Q.value = 0.5;
    this.droneL.connect(this.droneMerge, 0, 0);
    this.droneR.connect(this.droneMerge, 0, 1);
    this.droneMerge.connect(droneLP);
    droneLP.connect(this.droneGain);
    this.droneGain.connect(this.master);
    this.droneL.start(t);
    this.droneR.start(t);

    // ── 2. Ethereal Pad (Theta) — FM + slow LFO pitch wander ────────
    this.padA = ctx.createOscillator();
    this.padA.type = "sine";
    this.padA.frequency.value = ROOT * 2;          // Eb3
    this.padB = ctx.createOscillator();
    this.padB.type = "sine";
    this.padB.frequency.value = ROOT * 2 * 1.005;  // +8 cents → slow beating
    this.padMod = ctx.createOscillator();
    this.padMod.type = "sine";
    this.padMod.frequency.value = ROOT * 3;         // modulator at ~fifth
    this.padModGain = ctx.createGain();
    this.padModGain.gain.value = 0;
    this.padGain = ctx.createGain();
    this.padGain.gain.value = 0;

    // LFO → slow pitch drift on carrier A
    this.padLFO = ctx.createOscillator();
    this.padLFO.type = "sine";
    this.padLFO.frequency.value = 0.07;            // one cycle per ~14 s
    this.padLFOGain = ctx.createGain();
    this.padLFOGain.gain.value = 3;                // ±3 Hz wander
    this.padLFO.connect(this.padLFOGain);
    this.padLFOGain.connect(this.padA.frequency);
    this.padLFO.start(t);

    this.padMod.connect(this.padModGain);
    this.padModGain.connect(this.padA.frequency);
    this.padA.connect(this.padGain);
    this.padB.connect(this.padGain);
    this.padGain.connect(this.master);
    this.padMod.start(t);
    this.padA.start(t);
    this.padB.start(t);

    // ── 3. Wind / Breath (Alpha) — wide bandpass noise ───────────────
    const noise = this._noiseBuffer(ctx, 6);
    this.windSrc = ctx.createBufferSource();
    this.windSrc.buffer = noise;
    this.windSrc.loop = true;
    this.windBP = ctx.createBiquadFilter();
    this.windBP.type = "bandpass";
    this.windBP.frequency.value = 350;
    this.windBP.Q.value = 0.8;
    this.windLP = ctx.createBiquadFilter();
    this.windLP.type = "lowpass";
    this.windLP.frequency.value = 800;
    this.windLP.Q.value = 0.5;
    this.windGain = ctx.createGain();
    this.windGain.gain.value = 0;
    this.windSrc.connect(this.windBP);
    this.windBP.connect(this.windLP);
    this.windLP.connect(this.windGain);
    this.windGain.connect(this.master);
    this.windSrc.start(t);

    // ── 4. Singing Bowl (Beta) — two detuned triangles → BP ─────────
    this.bowlA = ctx.createOscillator();
    this.bowlA.type = "triangle";
    this.bowlA.frequency.value = ROOT * 4;          // ~311 Hz
    this.bowlB = ctx.createOscillator();
    this.bowlB.type = "triangle";
    this.bowlB.frequency.value = ROOT * 4 * 1.003;  // slight beating
    this.bowlBP = ctx.createBiquadFilter();
    this.bowlBP.type = "bandpass";
    this.bowlBP.frequency.value = 900;
    this.bowlBP.Q.value = 8;                        // very resonant — bowl ring
    this.bowlGain = ctx.createGain();
    this.bowlGain.gain.value = 0;
    this.bowlA.connect(this.bowlBP);
    this.bowlB.connect(this.bowlBP);
    this.bowlBP.connect(this.bowlGain);
    this.bowlGain.connect(this.master);
    this.bowlGain.connect(this.delaySend!);
    this.bowlA.start(t);
    this.bowlB.start(t);

    // ── 5. Crystal Shimmer (Gamma) — high partials ───────────────────
    this.shimA = ctx.createOscillator();
    this.shimA.type = "sine";
    this.shimA.frequency.value = ROOT * 8;           // ~622 Hz
    this.shimB = ctx.createOscillator();
    this.shimB.type = "sine";
    this.shimB.frequency.value = ROOT * 12;          // ~933 Hz (perfect 5th above)
    this.shimGain = ctx.createGain();
    this.shimGain.gain.value = 0;
    this.shimA.connect(this.shimGain);
    this.shimB.connect(this.shimGain);
    this.shimGain.connect(this.master);
    this.shimGain.connect(this.delaySend!);
    this.shimA.start(t);
    this.shimB.start(t);

    // ── Ambient wind (always-on whisper) ─────────────────────────────
    this.ambWindSrc = ctx.createBufferSource();
    this.ambWindSrc.buffer = noise;
    this.ambWindSrc.loop = true;
    const ambLP = ctx.createBiquadFilter();
    ambLP.type = "lowpass";
    ambLP.frequency.value = 180;
    ambLP.Q.value = 0.3;
    this.ambWindGain = ctx.createGain();
    this.ambWindGain.gain.value = 0.03;
    this.ambWindSrc.connect(ambLP);
    ambLP.connect(this.ambWindGain);
    this.ambWindGain.connect(this.master);
    this.ambWindSrc.start(t);

    this._playing = true;
  }

  stop(): void {
    if (!this._playing || !this.ctx) return;
    this._playing = false;
    this.ctx.close();
    this.ctx = null;
  }

  // ── Update from band powers ────────────────────────────────────────

  update(bp: BandPowers): void {
    if (!this._playing || !this.ctx) return;
    const t = this.ctx.currentTime;
    const s = this.config.sensitivity;
    this._updateCount++;

    const delta = clamp(Math.log1p((bp.Delta ?? 0) * s) / 6, 0, 1);
    const theta = clamp(Math.log1p((bp.Theta ?? 0) * s) / 6, 0, 1);
    const alpha = clamp(Math.log1p((bp.Alpha ?? 0) * s) / 6, 0, 1);
    const beta  = clamp(Math.log1p((bp.Beta  ?? 0) * s) / 6, 0, 1);
    const gamma = clamp(Math.log1p((bp.Gamma ?? 0) * s) / 6, 0, 1);

    // ── Delta → binaural drone volume + beat frequency spread ────────
    ramp(this.droneGain!.gain, 0.08 + delta * 0.2, t, 0.8);
    // Widen binaural beat from ±0.5 Hz to ±3 Hz with delta
    const beat = 0.5 + delta * 2.5;
    ramp(this.droneL!.frequency, ROOT - beat, t, 1.0);
    ramp(this.droneR!.frequency, ROOT + beat, t, 1.0);

    // ── Theta → pad volume + FM depth + LFO wander range ────────────
    ramp(this.padGain!.gain, theta * 0.14, t, 0.6);
    ramp(this.padModGain!.gain, theta * ROOT * 0.5, t, 0.8);
    ramp(this.padLFOGain!.gain, 2 + theta * 6, t, 1.0);   // more theta = wider drift

    // Slowly shift pad pitch based on theta (within ±5th of root)
    const padDrift = ROOT * 2 * (1 + theta * 0.08);
    ramp(this.padA!.frequency, padDrift, t, 1.2);
    ramp(this.padB!.frequency, padDrift * 1.005, t, 1.2);

    // ── Alpha → wind volume + filter opens (relaxation = gentle breeze)
    ramp(this.windGain!.gain, alpha * 0.12, t, 0.6);
    ramp(this.windBP!.frequency, 250 + alpha * 1800, t, 0.8);
    ramp(this.windLP!.frequency, 500 + alpha * 2500, t, 0.8);
    ramp(this.ambWindGain!.gain, 0.025 + alpha * 0.04, t, 0.6);

    // ── Beta → singing bowl volume + resonance sweep ─────────────────
    ramp(this.bowlGain!.gain, beta * 0.07, t, 0.5);
    // Bowl frequency slowly shifts — harmonic series of root
    const bowlHarm = ROOT * (4 + beta * 2);  // range: 4th → 6th harmonic
    ramp(this.bowlA!.frequency, bowlHarm, t, 1.0);
    ramp(this.bowlB!.frequency, bowlHarm * 1.003, t, 1.0);
    ramp(this.bowlBP!.frequency, 600 + beta * 1200, t, 0.8);

    // ── Gamma → shimmer volume + partial spread + delay send ─────────
    ramp(this.shimGain!.gain, gamma * 0.05, t, 0.4);
    // Shimmer partials drift slightly
    ramp(this.shimA!.frequency, ROOT * (8 + gamma * 2), t, 0.8);
    ramp(this.shimB!.frequency, ROOT * (12 + gamma * 2), t, 0.8);
    ramp(this.delaySend!.gain, (beta + gamma) * 0.25, t, 0.5);
  }

  // ── Config ─────────────────────────────────────────────────────────

  applyConfig(cfg: Partial<AuroraConfig>): void {
    Object.assign(this.config, cfg);
    if (!this._playing || !this.ctx) return;
    const t = this.ctx.currentTime;
    if (cfg.masterVolume !== undefined) ramp(this.master!.gain, cfg.masterVolume, t, 0.3);
    if (cfg.reverbMix !== undefined) {
      ramp(this.wetGain!.gain, cfg.reverbMix, t, 0.3);
      ramp(this.dryGain!.gain, 1 - cfg.reverbMix, t, 0.3);
    }
    if (cfg.delayTime !== undefined) {
      this.delay!.delayTime.setTargetAtTime(cfg.delayTime, t, 0.2);
    }
    if (cfg.delayFeedback !== undefined) {
      ramp(this.delayFb!.gain, cfg.delayFeedback, t, 0.3);
    }
  }

  // ── Helpers ────────────────────────────────────────────────────────

  private _impulse(ctx: AudioContext, dur: number, ch: number): AudioBuffer {
    const len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(ch, len, ctx.sampleRate);
    for (let c = 0; c < ch; c++) {
      const d = buf.getChannelData(c);
      for (let i = 0; i < len; i++) {
        const env = (1 - i / len) ** 3;
        // Add a few early-reflection bumps for spaciousness
        const er = i < ctx.sampleRate * 0.1
          ? Math.sin(i * 0.02) * 0.3 * (1 - i / (ctx.sampleRate * 0.1))
          : 0;
        d[i] = ((Math.random() * 2 - 1) + er) * env;
      }
    }
    return buf;
  }

  private _noiseBuffer(ctx: AudioContext, dur: number): AudioBuffer {
    const len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    // Pink-ish noise via simple 1/f random walk
    let prev = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      prev = prev * 0.97 + white * 0.03;
      d[i] = prev * 10;
    }
    return buf;
  }
}
