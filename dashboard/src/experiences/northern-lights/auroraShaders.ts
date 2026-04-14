// ─────────────────────────────────────────────────────────────────────────────
// Aurora Borealis GLSL shaders for realistic curtain rendering.
//
// Vertex shader maps a flat plane onto a cylindrical arc and applies
// noise-based curtain wave motion driven by EEG band powers.
// Fragment shader creates the characteristic aurora colour gradient,
// vertical ray structure, and edge-faded transparency.
// ─────────────────────────────────────────────────────────────────────────────

// ── Shared 2-D simplex noise (Ashima Arts, MIT) ──────────────────────────

const NOISE_GLSL = /* glsl */ `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

float snoise(vec2 v) {
  const vec4 C = vec4(
    0.211324865405187,   // (3.0-sqrt(3.0))/6.0
    0.366025403784439,   // 0.5*(sqrt(3.0)-1.0)
   -0.577350269189626,   // -1.0 + 2.0 * C.x
    0.024390243902439    // 1.0 / 41.0
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                            + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                           dot(x12.zw,x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`;

// ── Aurora curtain vertex shader ─────────────────────────────────────────

export const AURORA_VERTEX = /* glsl */ `
uniform float uTime;
uniform float uDelta;
uniform float uTheta;
uniform float uBeta;
uniform float uArcRadius;
uniform float uArcSpan;
uniform float uCenterY;
uniform float uHeight;

varying vec2 vUv;
varying float vRay;

${NOISE_GLSL}

void main() {
  vUv = uv;
  float t = uTime;

  // ── Map flat UV → cylindrical arc ──────────────────────────────────
  float angle = (uv.x - 0.5) * uArcSpan;
  float r     = uArcRadius;
  vec3 pos;
  pos.x = sin(angle) * r;
  pos.z = -cos(angle) * r;
  pos.y = uCenterY + (uv.y - 0.5) * uHeight;

  // ── Curtain wave motion ────────────────────────────────────────────
  float drape = pow(1.0 - uv.y, 1.5);                       // bottom hangs more
  float w1 = snoise(vec2(uv.x * 3.0 + t * 0.08, t * 0.05)) * 1.5;
  float w2 = snoise(vec2(uv.x * 5.0 - t * 0.12, uv.y * 2.0 + t * 0.03)) * 0.8;
  float w3 = sin(uv.x * 8.0 + t * 0.15) * 0.4;

  float wave = (w1 + w2 * (0.5 + uTheta) + w3 * (0.5 + uDelta))
             * (0.35 + drape * 0.65);

  // Beta drives faster turbulence
  float turb = snoise(vec2(uv.x * 8.0 + t * 0.3, uv.y * 4.0)) * uBeta * 0.6;
  wave += turb;

  // Push radially along the arc normal
  pos.x += sin(angle) * wave;
  pos.z += -cos(angle) * wave;

  // Slight vertical ripple
  pos.y += snoise(vec2(uv.x * 6.0, t * 0.1)) * 0.25 * drape;

  // ── Ray pattern (passed to fragment) ───────────────────────────────
  float rn = snoise(vec2(uv.x * 20.0, t * 0.05));
  vRay = sin(uv.x * 40.0 + rn * 3.0) * 0.5 + 0.5;
  vRay = pow(vRay, 0.5);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

// ── Aurora curtain fragment shader ───────────────────────────────────────

export const AURORA_FRAGMENT = /* glsl */ `
uniform float uTime;
uniform float uAlpha;
uniform float uGamma;
uniform float uIntensity;
uniform vec3  uColor1;          // lower colour  (green)
uniform vec3  uColor2;          // mid colour    (teal / purple)
uniform vec3  uColor3;          // upper colour  (blue / magenta)

varying vec2  vUv;
varying float vRay;

void main() {
  float t = vUv.y;                                           // 0 = bottom, 1 = top

  // ── Vertical colour gradient ───────────────────────────────────────
  vec3 col = mix(uColor1, uColor2, smoothstep(0.08, 0.55, t));
  col = mix(col, uColor3, smoothstep(0.45, 0.95, t) * 0.6);

  // Alpha (relaxation) boosts luminosity
  col *= 0.7 + uAlpha * 0.6;

  // ── Brightness profile — brightest near the lower curtain edge ─────
  float brightness = 1.0 - smoothstep(0.0, 0.8, t) * 0.55;

  // ── Edge fade ──────────────────────────────────────────────────────
  float ex = smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
  float ey = smoothstep(0.0, 0.03, vUv.y) * smoothstep(1.0, 0.85, vUv.y);

  // ── Ray modulation ─────────────────────────────────────────────────
  float ray = mix(0.45, 1.0, vRay);

  // ── Gamma sparkle at the top edge ──────────────────────────────────
  float hash = fract(sin(dot(floor(vUv * 200.0), vec2(12.9898, 78.233)))
                     * 43758.5453);
  float sparkle = step(0.985, hash) * uGamma * 2.0;
  col += vec3(sparkle * 0.8, sparkle, sparkle * 0.9);

  // ── Composite ──────────────────────────────────────────────────────
  float a = uIntensity * brightness * ray * ex * ey;
  a = clamp(a, 0.0, 0.88);

  gl_FragColor = vec4(col, a);
}
`;

// ── Ground plane shaders (subtle snowy reflective surface) ───────────────

export const GROUND_VERTEX = /* glsl */ `
varying vec2 vUv;
varying vec3 vWorldPos;
void main() {
  vUv = uv;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

export const GROUND_FRAGMENT = /* glsl */ `
uniform float uTime;
uniform vec3  uAuroraGlow;    // dominant aurora colour tint

varying vec2 vUv;
varying vec3 vWorldPos;

${NOISE_GLSL}

void main() {
  // Base snow colour — dark blue-grey
  vec3 snow = vec3(0.06, 0.07, 0.11);

  // Subtle noise texture
  float n = snoise(vWorldPos.xz * 0.3 + uTime * 0.01) * 0.5 + 0.5;
  snow += vec3(0.01, 0.012, 0.02) * n;

  // Aurora reflection — faint colour on the snow
  float dist = length(vWorldPos.xz);
  float falloff = 1.0 / (1.0 + dist * 0.06);
  snow += uAuroraGlow * 0.08 * falloff;

  // Distance fog
  float fog = smoothstep(5.0, 40.0, dist);
  snow = mix(snow, vec3(0.02, 0.025, 0.04), fog);

  gl_FragColor = vec4(snow, 1.0);
}
`;
