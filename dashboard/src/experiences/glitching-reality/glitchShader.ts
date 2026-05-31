// ─────────────────────────────────────────────────────────────────────────────
// Glitch shader — fullscreen MR passthrough composite for "The Glitching
// Reality".  WebGL2 / GLSL ES 3.00.
//
// Inputs
//   u_tex          camera/passthrough texture
//   u_instability  0..1 master "reality break" amount, EEG-driven
//   u_snap         0/1 pulse — fires for ~600 ms after a deep-breath recovery
//   u_faa          Frontal Alpha Asymmetry, clamped [-2, 2]
//   u_time         seconds since program start
//   u_resolution   canvas pixel size
//   u_videoAspect  source video aspect ratio (for cover-fit)
//
// Composition (all scaled by `inst`):
//   1. Cover-fit sample of the video texture.
//   2. Block-shift slice tear (horizontal datamosh).
//   3. Chromatic aberration / RGB split, biased by FAA hemisphere.
//   4. Scanline ripple + brightness pulse.
//   5. Snow / hash noise.
//   6. Harsh light: contrast boost, saturation crush at high inst.
//   7. Soft cyan tint when calm; rose/amber tint when fractured.
//   8. Vignette inversion: gentle dim at low inst, hot bloom at high.
//   9. Snap-flash: white pulse + cyan ring on recovery.
// ─────────────────────────────────────────────────────────────────────────────

export const VERTEX_SRC = /* glsl */ `#version 300 es
out vec2 v_uv;
void main() {
  // Fullscreen triangle from gl_VertexID (no VBO needed).
  vec2 p = vec2(
    (gl_VertexID == 1) ?  3.0 : -1.0,
    (gl_VertexID == 2) ?  3.0 : -1.0
  );
  v_uv = (p + 1.0) * 0.5;
  gl_Position = vec4(p, 0.0, 1.0);
}
`;

export const FRAGMENT_SRC = /* glsl */ `#version 300 es
precision highp float;

in  vec2 v_uv;
out vec4 fragColor;

uniform sampler2D u_tex;
uniform float u_time;
uniform float u_instability;
uniform float u_snap;
uniform float u_faa;
uniform vec2  u_resolution;
uniform float u_videoAspect;

// ── hash / noise ────────────────────────────────────────────────────
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float hash11(float x) { return fract(sin(x * 91.3458) * 47453.5453); }

float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

// Map the [0,1] screen uv to a cover-fit uv into the video texture.
vec2 coverUV(vec2 uv) {
  float canvasAR = u_resolution.x / max(u_resolution.y, 1.0);
  float vAR = max(u_videoAspect, 0.01);
  vec2 scale = vec2(1.0);
  if (canvasAR > vAR) {
    // Canvas wider than video → crop vertically.
    scale.y = vAR / canvasAR;
  } else {
    scale.x = canvasAR / vAR;
  }
  vec2 centered = (uv - 0.5) / scale + 0.5;
  return centered;
}

void main() {
  float inst = clamp(u_instability, 0.0, 1.0);
  // Soft "reality is breaking" curve — quiet at low values, blooms near 1.
  float bend = pow(inst, 1.6);

  vec2 uv = v_uv;

  // ── 1. Slice tear (horizontal datamosh) ─────────────────────────
  float bandY = floor(uv.y * (12.0 + 60.0 * bend));
  float bandSeed = hash11(bandY + floor(u_time * 6.0));
  float doTear = step(0.78 - 0.45 * bend, bandSeed);
  float tearAmount = (bandSeed - 0.5) * 0.18 * bend * doTear;
  uv.x += tearAmount;

  // Block displacement — coarser glitch blocks at high inst.
  float blocks = 18.0 + 40.0 * bend;
  vec2 blockId = floor(uv * blocks);
  float blockJitter = hash(blockId + floor(u_time * 8.0));
  if (blockJitter > 1.0 - 0.35 * bend) {
    uv.x += (blockJitter - 0.5) * 0.08 * bend;
    uv.y += (hash(blockId + 17.0) - 0.5) * 0.04 * bend;
  }

  // Scanline ripple — ever-present at very low amplitude.
  uv.x += sin(uv.y * (200.0 + 600.0 * bend) + u_time * 4.0)
        * (0.0008 + 0.012 * bend);

  // ── 2. Chromatic aberration / RGB split ─────────────────────────
  // FAA biases the split direction — left hemi dominance pushes red
  // leftward, right hemi pushes it rightward.  Subtle when calm.
  float faaBias = clamp(u_faa * 0.5, -1.0, 1.0);
  float ca = (0.002 + 0.025 * bend) * (1.0 + abs(faaBias) * 0.6);
  vec2 dirR = vec2( ca * (1.0 + faaBias * 0.4),  ca * 0.2 * bend);
  vec2 dirB = vec2(-ca * (1.0 - faaBias * 0.4), -ca * 0.2 * bend);

  vec2 uvR = coverUV(uv + dirR);
  vec2 uvG = coverUV(uv);
  vec2 uvB = coverUV(uv + dirB);

  vec3 col;
  col.r = texture(u_tex, uvR).r;
  col.g = texture(u_tex, uvG).g;
  col.b = texture(u_tex, uvB).b;

  // ── 3. Scanlines + brightness pulse ─────────────────────────────
  float scan = 0.5 + 0.5 * sin(v_uv.y * u_resolution.y * 1.2);
  col *= mix(1.0, 0.85 + 0.15 * scan, 0.15 + 0.55 * bend);

  float pulse = sin(u_time * (3.0 + 9.0 * bend)) * 0.5 + 0.5;
  col *= 1.0 + (pulse - 0.5) * 0.35 * bend;

  // ── 4. Snow / hash noise ────────────────────────────────────────
  float n = noise(v_uv * (350.0 + 800.0 * bend) + u_time * 30.0);
  col = mix(col, vec3(n), 0.05 + 0.35 * bend);

  // ── 5. Harsh light — contrast + saturation crush ────────────────
  float harsh = 0.4 * bend;
  col = (col - 0.5) * (1.0 + harsh * 2.0) + 0.5;
  float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(vec3(lum), col, 1.0 - harsh * 0.5);
  col = clamp(col, 0.0, 1.0);

  // ── 6. Mood tint — cyan when calm, rose/amber when fractured ───
  vec3 calmTint    = vec3(0.85, 1.05, 1.15);
  vec3 fracTint    = vec3(1.20, 0.85, 0.95);
  float tintMix    = smoothstep(0.2, 0.85, bend);
  vec3 tint = mix(calmTint, fracTint, tintMix);
  col *= tint;

  // ── 7. Vignette: gentle dim at low inst, hot bloom at high ─────
  vec2 q = v_uv - 0.5;
  float vig = 1.0 - dot(q, q) * (0.9 + 1.6 * bend);
  vig = clamp(vig, 0.0, 1.0);
  col *= mix(0.95, vig, 0.55);
  // Edge "hot" bleed at high instability.
  float edge = 1.0 - vig;
  col += vec3(0.95, 0.20, 0.45) * edge * bend * 0.55;

  // ── 8. Snap → clarity flash ─────────────────────────────────────
  if (u_snap > 0.5) {
    float ring = exp(-length(q) * 6.0) * 0.85;
    col += vec3(0.55, 0.95, 1.0) * ring;
    col = pow(col, vec3(0.85));   // brief clarity gamma lift
  }

  // ── 9. Mild base grain — keeps "MR camera" feel even when calm ─
  float baseGrain = (noise(v_uv * 900.0 + u_time * 60.0) - 0.5) * 0.025;
  col += baseGrain;

  fragColor = vec4(col, 1.0);
}
`;
