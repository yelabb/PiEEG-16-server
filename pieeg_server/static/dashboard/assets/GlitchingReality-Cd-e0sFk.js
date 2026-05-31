import{u as de,r,F as me,a as z,j as e}from"./index-BmxdySO0.js";const fe=256,pe=80,G=.22,ge=.006,ve=.12,xe=.35,be=Object.fromEntries(z.map(s=>[s.name,0])),ne={faa:0,calm:.5,betaSurge:0,instability:0,snapping:!1,bands:be,activeChannels:0};function we(s){const n=de(),c=r.useRef(null);(!c.current||c.current.sampleRateHz!==n)&&(c.current=new me(fe,n));const o=r.useRef(ne),[v,h]=r.useState(ne);return r.useEffect(()=>{const u=c.current;let j=0,d=0,S=0,g=0,w=0;const T=Object.fromEntries(z.map(k=>[k.name,0]));let y=.5,x=0,$=0,M=0,F=0;const W=setInterval(()=>{const{buffers:k,writeIndex:B,samplesInBuffer:R,numChannels:A}=s;if(A<1)return;const l=B.current,Y=R.current,I=Object.fromEntries(z.map(f=>[f.name,0]));let E=0,q=0,O=0;for(let f=0;f<A;f++){const P=k.current[f];if(!P)continue;const U=u.analyseRing(P,l,Y);if(U){for(const X of z)I[X.name]+=U.bandPowers[X.name]??0;E++,f===0&&(q=U.bandPowers.Alpha??0),f===1&&(O=U.bandPowers.Alpha??0)}}if(E===0)return;for(const f of z){const P=I[f.name]/E;T[f.name]+=G*(P-T[f.name])}const K=I.Alpha/E,J=I.Beta/E;j+=G*(K-j),d+=G*(J-d),S+=G*(q-S),g+=G*(O-g),w+=ge*(d-w);const C=w>1e-9?Math.max(0,Math.min(1,(d-w)/(w+1e-9))):0,V=A>=2?Math.log(Math.max(g,1e-9))-Math.log(Math.max(S,1e-9)):0,D=j+d,a=D>1e-9?j/D:.5;y+=ve*(a-y);const i=1-y+.6*C-.15*Math.max(0,V),t=Math.max(0,Math.min(1,i));M>1e-9&&(M-d)/M>xe&&($=performance.now()+600,F=6),M=d;const p=performance.now()<$;let b=t>x?.18:.08;F>0&&(b=.55,F--),x+=b*(t-x),p&&(x*=.85),x=Math.max(0,Math.min(1,x)),o.current={faa:V,calm:y,betaSurge:C,instability:x,snapping:p,bands:{...T},activeChannels:E}},pe),L=setInterval(()=>h({...o.current}),200);return()=>{clearInterval(W),clearInterval(L)}},[s]),{liveRef:o,snapshot:v}}const je=`#version 300 es
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
`,ye=`#version 300 es
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
`;function _({text:s,children:n}){return e.jsxs("span",{className:"gl-tip-wrap",children:[n,e.jsx("span",{className:"gl-tip",role:"tooltip",children:s})]})}function Q(s){const n=h=>Math.floor(Math.random()*h);if(s<=1){const h=12+n(40),u=8+n(30);return{q:`${h} + ${u}`,a:h+u}}if(s<=2){const h=30+n(80),u=10+n(60);return{q:`${h} − ${u}`,a:h-u}}if(s<=3){const h=6+n(13),u=4+n(13);return{q:`${h} × ${u}`,a:h*u}}if(s<=4){const h=7+n(11),u=3+n(8),j=5+n(20);return{q:`${h} × ${u} − ${j}`,a:h*u-j}}const c=13+n(40),o=4+n(8),v=3+n(11);return{q:`${c} × ${o} + ${c} − ${v}`,a:c*o+c-v}}function ie(s,n,c){const o=s.createShader(n);if(s.shaderSource(o,c),s.compileShader(o),!s.getShaderParameter(o,s.COMPILE_STATUS)){const v=s.getShaderInfoLog(o);throw s.deleteShader(o),new Error(`Shader compile failed: ${v}`)}return o}function Re(s){const n=ie(s,s.VERTEX_SHADER,je),c=ie(s,s.FRAGMENT_SHADER,ye),o=s.createProgram();if(s.attachShader(o,n),s.attachShader(o,c),s.linkProgram(o),!s.getProgramParameter(o,s.LINK_STATUS)){const v=s.getProgramInfoLog(o);throw new Error(`Program link failed: ${v}`)}return o}const re={calm:["Keep it up — eyes soft, jaw loose.","Feel your exhale lengthen.","Let thoughts pass without engaging them."],drift:["Slow down your breathing — 4 s in, 6 s out.","Drop your shoulders. Relax your eyes.","Observe the distortion without reacting to it."],tear:["Take one slow, deep belly breath now.","Close your eyes for 2 seconds, then re-open.","Unclench your jaw and forehead."],frac:["Stop the puzzle. Breathe first.","Long exhale — let beta fall.","Eyes closed, 3 slow breaths."]};function Ee({eegData:s,onExit:n}){const[c,o]=r.useState("intro"),[v,h]=r.useState(null),[u,j]=r.useState(!1),[d,S]=r.useState(3),[g,w]=r.useState(null),[T,y]=r.useState(""),[x,$]=r.useState(!1),[M,F]=r.useState(0),[ee,W]=r.useState(0),L=r.useRef(null),k=r.useRef(null),B=r.useRef(null),R=r.useRef(null),{liveRef:A,snapshot:l}=we(s),Y=r.useCallback(async()=>{h(null);try{const a=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"},width:{ideal:1280},height:{ideal:720}},audio:!1});B.current=a;const i=L.current;i&&(i.srcObject=a,i.muted=!0,i.playsInline=!0,await i.play()),o("live")}catch(a){const i=a instanceof Error?a.message:String(a);h(`Camera access denied — ${i}`)}},[]);r.useEffect(()=>()=>{var a;(a=B.current)==null||a.getTracks().forEach(i=>i.stop()),B.current=null,R.current!=null&&cancelAnimationFrame(R.current)},[]),r.useEffect(()=>{if(c!=="live")return;const a=k.current,i=L.current;if(!a||!i)return;const t=a.getContext("webgl2",{antialias:!1,alpha:!1});if(!t){h("WebGL2 not available on this device.");return}let m;try{m=Re(t)}catch(N){h(N.message);return}const p=t.createVertexArray();t.bindVertexArray(p);const b=t.createTexture();t.bindTexture(t.TEXTURE_2D,b),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR);const f=t.getUniformLocation(m,"u_tex"),P=t.getUniformLocation(m,"u_time"),U=t.getUniformLocation(m,"u_instability"),X=t.getUniformLocation(m,"u_snap"),le=t.getUniformLocation(m,"u_resolution"),ce=t.getUniformLocation(m,"u_videoAspect"),oe=t.getUniformLocation(m,"u_faa");let te=!1;const he=performance.now(),ue=()=>{const N=Math.min(window.devicePixelRatio||1,2),H=Math.floor(a.clientWidth*N),se=Math.floor(a.clientHeight*N);(a.width!==H||a.height!==se)&&(a.width=H,a.height=se),t.viewport(0,0,a.width,a.height)},ae=()=>{if(te)return;ue(),t.useProgram(m),i.readyState>=2&&i.videoWidth>0&&(t.bindTexture(t.TEXTURE_2D,b),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i));const N=A.current;t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,b),t.uniform1i(f,0),t.uniform1f(P,(performance.now()-he)/1e3),t.uniform1f(U,N.instability),t.uniform1f(X,N.snapping?1:0),t.uniform1f(oe,Math.max(-2,Math.min(2,N.faa))),t.uniform2f(le,a.width,a.height);const H=i.videoWidth>0?i.videoWidth/i.videoHeight:16/9;t.uniform1f(ce,H),t.drawArrays(t.TRIANGLES,0,3),R.current=requestAnimationFrame(ae)};return R.current=requestAnimationFrame(ae),()=>{te=!0,R.current!=null&&cancelAnimationFrame(R.current),t.deleteProgram(m),t.deleteTexture(b),t.deleteVertexArray(p)}},[c,A]),r.useEffect(()=>{if(c!=="live")return;const a=setInterval(()=>{F(i=>{const t=A.current.instability,m=t>.75?-2:t>.5?-.5:t<.25?1:0;return Math.max(0,i+m)}),W(i=>(i+1)%3)},1e3);return()=>clearInterval(a)},[c,A]),r.useEffect(()=>{if(!u){w(null),y("");return}(()=>{const{q:t,a:m}=Q(d);w(p=>({question:t,answer:m,deadline:performance.now()+Math.max(4e3,11e3-d*1500),streak:(p==null?void 0:p.streak)??0,lastResult:null})),y("")})();const i=setInterval(()=>{w(t=>{if(!t)return t;if(performance.now()>t.deadline){const{q:m,a:p}=Q(d);return{question:m,answer:p,deadline:performance.now()+Math.max(4e3,11e3-d*1500),streak:0,lastResult:"wrong"}}return t})},200);return()=>clearInterval(i)},[u,d]);const I=r.useCallback(()=>{w(a=>{if(!a)return a;const i=parseInt(T,10),t=!isNaN(i)&&i===a.answer,{q:m,a:p}=Q(d),b=t?a.streak+1:0;return t&&b>0&&b%3===0&&d<5?S(f=>Math.min(5,f+1)):!t&&d>1&&S(f=>Math.max(1,f-1)),{question:m,answer:p,deadline:performance.now()+Math.max(4e3,11e3-d*1500),streak:b,lastResult:t?"correct":"wrong"}}),y("")},[T,d]),E=r.useMemo(()=>Math.round(l.instability*100),[l.instability]),q=r.useMemo(()=>Math.round(l.calm*100),[l.calm]),O=r.useMemo(()=>l.faa.toFixed(2),[l.faa]),K=r.useMemo(()=>Math.round(l.betaSurge*100),[l.betaSurge]),J=l.snapping?"SNAP → CLARITY":l.instability>.75?"REALITY FRACTURED":l.instability>.5?"TEARING":l.instability>.25?"DRIFTING":"EQUANIMITY",C=l.instability>.75?"frac":l.instability>.5?"tear":l.instability>.25?"drift":"calm",V=re[C][ee%re[C].length],D=g?Math.max(0,g.deadline-performance.now())/1e3:0;return e.jsxs("div",{className:"glitch-root",children:[e.jsx("video",{ref:L,className:"glitch-video",autoPlay:!0,playsInline:!0,muted:!0,"aria-hidden":"true"}),e.jsx("canvas",{ref:k,className:`glitch-canvas ${c==="live"?"is-live":""}`}),c==="intro"&&e.jsxs("div",{className:"glitch-panel glitch-intro",children:[e.jsx("button",{className:"glitch-exit",onClick:n,children:"✕ Exit"}),e.jsx("h1",{children:"The Glitching Reality"}),e.jsx("p",{className:"glitch-tag",children:"I wired my brain to my room.  If I lose focus, reality breaks."}),e.jsxs("p",{className:"glitch-prose",children:["This is a purely visual demonstration of ",e.jsx("strong",{children:"Frontal Alpha Asymmetry"}),".  Your phone or headset camera becomes a mixed- reality passthrough; a real-time shader composites EEG-driven distortion on top."]}),e.jsxs("ul",{className:"glitch-list",children:[e.jsxs("li",{children:[e.jsx("span",{children:"•"})," When you are calm and equanimous, the room is pristine."]}),e.jsxs("li",{children:[e.jsx("span",{children:"•"})," Cognitive load tears the scene apart — RGB split, slice tear, harsh light."]}),e.jsxs("li",{children:[e.jsx("span",{children:"•"})," A deep, slow breath snaps reality back to clarity."]})]}),e.jsx("p",{className:"glitch-prose glitch-dim",children:"Works with any electrode placement and any number of channels. When two or more channels are connected, Frontal Alpha Asymmetry is computed from channels 1 & 2; with a single channel the calm / β signal still drives the shader. Best in a darkened room, on a phone or Quest Browser."}),v&&e.jsx("div",{className:"glitch-err",children:v}),e.jsxs("div",{className:"glitch-actions",children:[e.jsx("button",{className:"glitch-btn glitch-btn--primary",onClick:Y,children:"Wire In"}),e.jsx("button",{className:"glitch-btn",onClick:n,children:"Cancel"})]})]}),c==="live"&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"glitch-exit glitch-exit--floating",onClick:n,children:"✕ Exit"}),e.jsxs("div",{className:"glitch-hud glitch-hud--tl",children:[e.jsxs("div",{className:"glitch-hud-row glitch-hud-score-row",children:[e.jsx(_,{text:"Score: +1 pts/s while calm, −2 pts/s while fractured. Keep reality stable to grow your score.",children:e.jsx("span",{className:"glitch-hud-k glitch-tip-label",children:"SCORE ⓘ"})}),e.jsx("span",{className:"glitch-hud-v glitch-score",children:Math.floor(M)})]}),e.jsxs("div",{className:"glitch-hud-row",style:{marginBottom:8},children:[e.jsx(_,{text:"Composite instability driving the shader. Rises with beta and cognitive load, falls with calm alpha.",children:e.jsx("span",{className:"glitch-hud-k glitch-tip-label",children:"STATE ⓘ"})}),e.jsx("span",{className:`glitch-hud-v glitch-hud-state lvl-${l.snapping?"snap":l.instability>.75?"frac":l.instability>.5?"tear":l.instability>.25?"drift":"calm"}`,children:J})]}),e.jsx(_,{text:"How fractured reality is right now. Goal: keep this below 25%.",children:e.jsx("span",{className:"glitch-tip-label",children:e.jsx(Z,{label:"INSTABILITY ⓘ",pct:E,color:"#ff3366"})})}),e.jsx(_,{text:"Alpha / (Alpha + Beta) — how much your brain is in idle/relaxed alpha vs active beta. Higher is calmer.",children:e.jsx("span",{className:"glitch-tip-label",children:e.jsx(Z,{label:"CALM α/(α+β) ⓘ",pct:q,color:"#5cf2ff"})})}),e.jsx(_,{text:"Beta power vs your 30-second rolling baseline. Spikes during mental effort or stress.",children:e.jsx("span",{className:"glitch-tip-label",children:e.jsx(Z,{label:"β SURGE ⓘ",pct:K,color:"#ffb347"})})}),e.jsxs("div",{className:"glitch-hud-row glitch-hud-faa",children:[e.jsx(_,{text:"Frontal Alpha Asymmetry: ln(α_ch2) − ln(α_ch1). Positive = approach/positive affect. Negative = withdrawal/frustration.",children:e.jsx("span",{className:"glitch-hud-k glitch-tip-label",children:"FAA ⓘ"})}),e.jsxs("span",{className:"glitch-hud-v",children:[O," ",e.jsxs("span",{className:"glitch-hud-dim",children:["(",l.faa>.05?"approach":l.faa<-.05?"withdraw":"neutral",")"]})]})]}),e.jsx("div",{className:"glitch-hud-row glitch-hud-bands",children:z.map(a=>e.jsx(_,{text:`${a.label} (${a.low}–${a.high} Hz) — avg power across all channels (µV²/Hz × 10⁻⁶)`,children:e.jsxs("span",{className:"glitch-band-chip",style:{color:a.color},children:[a.label.charAt(0),e.jsx("span",{className:"glitch-band-val",children:((l.bands[a.name]??0)*1e6).toFixed(0)})]})},a.name))}),e.jsxs("div",{className:"glitch-hud-row glitch-hud-dim",style:{fontSize:"0.7rem",marginTop:2},children:[e.jsx("span",{className:"glitch-hud-k",children:"CH"}),e.jsxs("span",{className:"glitch-hud-v",children:[l.activeChannels," active"]})]})]}),e.jsxs("div",{className:"glitch-hud glitch-hud--tr",children:[e.jsxs("div",{className:"glitch-hud-title-row",children:[e.jsx("span",{className:"glitch-hud-title",children:"Stressor"}),e.jsx("button",{className:"glitch-how-btn",onClick:()=>$(a=>!a),"aria-expanded":x,children:x?"▲ hide":"? how to play"})]}),x&&e.jsxs("div",{className:"glitch-how",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Goal:"})," keep the room clean (instability < 25%) for as long as possible."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["🟦 ",e.jsx("strong",{children:"CALM"})," — alpha dominates. Score rises."]}),e.jsxs("li",{children:["🟡 ",e.jsx("strong",{children:"TEARING"})," — beta rising. Slow your breathing."]}),e.jsxs("li",{children:["🔴 ",e.jsx("strong",{children:"FRACTURED"})," — reality broken. Score drops fast."]}),e.jsxs("li",{children:["⚡ ",e.jsx("strong",{children:"SNAP"})," — sharp exhale detected. Room resets."]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Stressor:"})," enable the puzzle to deliberately break reality, then recover. Training biofeedback loop."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Snap trick:"})," inhale deeply, then exhale sharply through your mouth to trigger SNAP."]})]}),e.jsxs("label",{className:"glitch-toggle",children:[e.jsx("input",{type:"checkbox",checked:u,onChange:a=>j(a.target.checked)}),e.jsx("span",{children:"Mental arithmetic stressor"})]}),u&&e.jsxs("div",{className:"glitch-diff",children:[e.jsx("span",{children:"Difficulty"}),e.jsx("div",{children:[1,2,3,4,5].map(a=>e.jsx("button",{className:`glitch-diff-btn ${d===a?"is-on":""}`,onClick:()=>S(a),children:a},a))})]}),e.jsx("p",{className:"glitch-hint",children:"Breathe slowly to snap the room back."})]}),!l.snapping&&e.jsx("div",{className:`glitch-coaching lvl-${C}`,children:V}),u&&g&&e.jsxs("div",{className:"glitch-puzzle",children:[e.jsxs("div",{className:"glitch-puzzle-q",children:[g.question," = ?"]}),e.jsx("input",{className:"glitch-puzzle-input",type:"text",inputMode:"numeric",autoFocus:!0,value:T,onChange:a=>y(a.target.value.replace(/[^0-9\-]/g,"")),onKeyDown:a=>{a.key==="Enter"&&I()},placeholder:"answer"}),e.jsxs("div",{className:"glitch-puzzle-meta",children:[e.jsxs("span",{className:`glitch-puzzle-timer ${D<2?"is-low":""}`,children:[D.toFixed(1),"s"]}),e.jsxs("span",{children:["streak ",g.streak]}),g.lastResult&&e.jsx("span",{className:`glitch-puzzle-flash is-${g.lastResult}`,children:g.lastResult==="correct"?"✓":"✗"})]})]})]})]})}function Z({label:s,pct:n,color:c}){return e.jsxs("div",{className:"glitch-bar",children:[e.jsxs("div",{className:"glitch-bar-head",children:[e.jsx("span",{className:"glitch-hud-k",children:s}),e.jsxs("span",{className:"glitch-hud-v",children:[n,"%"]})]}),e.jsx("div",{className:"glitch-bar-track",children:e.jsx("div",{className:"glitch-bar-fill",style:{width:`${Math.max(0,Math.min(100,n))}%`,background:c}})})]})}export{Ee as default};
