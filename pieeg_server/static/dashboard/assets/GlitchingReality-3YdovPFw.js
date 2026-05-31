import{u as te,r,F as ae,j as t}from"./index-CyHy-59y.js";const ne=256,se=80,G=.22,ie=.006,re=.12,ce=.35,Z={faa:0,calm:.5,betaSurge:0,instability:0,snapping:!1};function le(n){const s=te(),l=r.useRef(null);(!l.current||l.current.sampleRateHz!==s)&&(l.current=new ae(ne,s));const c=r.useRef(Z),[x,o]=r.useState(Z);return r.useEffect(()=>{const h=l.current;let E=0,d=0,w=0,f=0,R=0,A=.5,v=0,j=0,T=0,y=0;const C=setInterval(()=>{const{buffers:$,writeIndex:q,samplesInBuffer:X,numChannels:k}=n;if(k<1)return;const V=q.current,W=X.current;let L=0,P=0,a=0,i=0,e=0;for(let S=0;S<k;S++){const D=$.current[S];if(!D)continue;const N=h.analyseRing(D,V,W);if(!N)continue;const g=N.bandPowers.Alpha??0,I=N.bandPowers.Beta??0;L+=g,P+=I,a++,S===0&&(i=g),S===1&&(e=g)}if(a===0)return;const m=L/a,p=P/a;E+=G*(m-E),d+=G*(p-d),w+=G*(i-w),f+=G*(e-f),R+=ie*(d-R);const b=R>1e-9?Math.max(0,Math.min(1,(d-R)/(R+1e-9))):0,_=k>=2?Math.log(Math.max(f,1e-9))-Math.log(Math.max(w,1e-9)):0,z=E+d,O=z>1e-9?E/z:.5;A+=re*(O-A);const Y=1-A+.6*b-.15*Math.max(0,_),F=Math.max(0,Math.min(1,Y));T>1e-9&&(T-d)/T>ce&&(j=performance.now()+600,y=6),T=d;const B=performance.now()<j;let U=F>v?.18:.08;y>0&&(U=.55,y--),v+=U*(F-v),B&&(v*=.85),v=Math.max(0,Math.min(1,v)),c.current={faa:_,calm:A,betaSurge:b,instability:v,snapping:B}},se),u=setInterval(()=>o({...c.current}),200);return()=>{clearInterval(C),clearInterval(u)}},[n]),{liveRef:c,snapshot:x}}const oe=`#version 300 es
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
`,ue=`#version 300 es
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
`;function H(n){const s=o=>Math.floor(Math.random()*o);if(n<=1){const o=12+s(40),h=8+s(30);return{q:`${o} + ${h}`,a:o+h}}if(n<=2){const o=30+s(80),h=10+s(60);return{q:`${o} − ${h}`,a:o-h}}if(n<=3){const o=6+s(13),h=4+s(13);return{q:`${o} × ${h}`,a:o*h}}if(n<=4){const o=7+s(11),h=3+s(8),E=5+s(20);return{q:`${o} × ${h} − ${E}`,a:o*h-E}}const l=13+s(40),c=4+s(8),x=3+s(11);return{q:`${l} × ${c} + ${l} − ${x}`,a:l*c+l-x}}function ee(n,s,l){const c=n.createShader(s);if(n.shaderSource(c,l),n.compileShader(c),!n.getShaderParameter(c,n.COMPILE_STATUS)){const x=n.getShaderInfoLog(c);throw n.deleteShader(c),new Error(`Shader compile failed: ${x}`)}return c}function he(n){const s=ee(n,n.VERTEX_SHADER,oe),l=ee(n,n.FRAGMENT_SHADER,ue),c=n.createProgram();if(n.attachShader(c,s),n.attachShader(c,l),n.linkProgram(c),!n.getProgramParameter(c,n.LINK_STATUS)){const x=n.getProgramInfoLog(c);throw new Error(`Program link failed: ${x}`)}return c}function me({eegData:n,onExit:s}){const[l,c]=r.useState("intro"),[x,o]=r.useState(null),[h,E]=r.useState(!1),[d,w]=r.useState(3),[f,R]=r.useState(null),[A,v]=r.useState(""),j=r.useRef(null),T=r.useRef(null),y=r.useRef(null),M=r.useRef(null),{liveRef:C,snapshot:u}=le(n),$=r.useCallback(async()=>{o(null);try{const a=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:"environment"},width:{ideal:1280},height:{ideal:720}},audio:!1});y.current=a;const i=j.current;i&&(i.srcObject=a,i.muted=!0,i.playsInline=!0,await i.play()),c("live")}catch(a){const i=a instanceof Error?a.message:String(a);o(`Camera access denied — ${i}`)}},[]);r.useEffect(()=>()=>{var a;(a=y.current)==null||a.getTracks().forEach(i=>i.stop()),y.current=null,M.current!=null&&cancelAnimationFrame(M.current)},[]),r.useEffect(()=>{if(l!=="live")return;const a=T.current,i=j.current;if(!a||!i)return;const e=a.getContext("webgl2",{antialias:!1,alpha:!1});if(!e){o("WebGL2 not available on this device.");return}let m;try{m=he(e)}catch(g){o(g.message);return}const p=e.createVertexArray();e.bindVertexArray(p);const b=e.createTexture();e.bindTexture(e.TEXTURE_2D,b),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR);const _=e.getUniformLocation(m,"u_tex"),z=e.getUniformLocation(m,"u_time"),O=e.getUniformLocation(m,"u_instability"),Y=e.getUniformLocation(m,"u_snap"),F=e.getUniformLocation(m,"u_resolution"),K=e.getUniformLocation(m,"u_videoAspect"),B=e.getUniformLocation(m,"u_faa");let U=!1;const S=performance.now(),D=()=>{const g=Math.min(window.devicePixelRatio||1,2),I=Math.floor(a.clientWidth*g),Q=Math.floor(a.clientHeight*g);(a.width!==I||a.height!==Q)&&(a.width=I,a.height=Q),e.viewport(0,0,a.width,a.height)},N=()=>{if(U)return;D(),e.useProgram(m),i.readyState>=2&&i.videoWidth>0&&(e.bindTexture(e.TEXTURE_2D,b),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,i));const g=C.current;e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,b),e.uniform1i(_,0),e.uniform1f(z,(performance.now()-S)/1e3),e.uniform1f(O,g.instability),e.uniform1f(Y,g.snapping?1:0),e.uniform1f(B,Math.max(-2,Math.min(2,g.faa))),e.uniform2f(F,a.width,a.height);const I=i.videoWidth>0?i.videoWidth/i.videoHeight:16/9;e.uniform1f(K,I),e.drawArrays(e.TRIANGLES,0,3),M.current=requestAnimationFrame(N)};return M.current=requestAnimationFrame(N),()=>{U=!0,M.current!=null&&cancelAnimationFrame(M.current),e.deleteProgram(m),e.deleteTexture(b),e.deleteVertexArray(p)}},[l,C]),r.useEffect(()=>{if(!h){R(null),v("");return}(()=>{const{q:e,a:m}=H(d);R(p=>({question:e,answer:m,deadline:performance.now()+Math.max(4e3,11e3-d*1500),streak:(p==null?void 0:p.streak)??0,lastResult:null})),v("")})();const i=setInterval(()=>{R(e=>{if(!e)return e;if(performance.now()>e.deadline){const{q:m,a:p}=H(d);return{question:m,answer:p,deadline:performance.now()+Math.max(4e3,11e3-d*1500),streak:0,lastResult:"wrong"}}return e})},200);return()=>clearInterval(i)},[h,d]);const q=r.useCallback(()=>{R(a=>{if(!a)return a;const i=parseInt(A,10),e=!isNaN(i)&&i===a.answer,{q:m,a:p}=H(d),b=e?a.streak+1:0;return e&&b>0&&b%3===0&&d<5?w(_=>Math.min(5,_+1)):!e&&d>1&&w(_=>Math.max(1,_-1)),{question:m,answer:p,deadline:performance.now()+Math.max(4e3,11e3-d*1500),streak:b,lastResult:e?"correct":"wrong"}}),v("")},[A,d]),X=r.useMemo(()=>Math.round(u.instability*100),[u.instability]),k=r.useMemo(()=>Math.round(u.calm*100),[u.calm]),V=r.useMemo(()=>u.faa.toFixed(2),[u.faa]),W=r.useMemo(()=>Math.round(u.betaSurge*100),[u.betaSurge]),L=u.snapping?"SNAP → CLARITY":u.instability>.75?"REALITY FRACTURED":u.instability>.5?"TEARING":u.instability>.25?"DRIFTING":"EQUANIMITY",P=f?Math.max(0,f.deadline-performance.now())/1e3:0;return t.jsxs("div",{className:"glitch-root",children:[t.jsx("video",{ref:j,className:"glitch-video",autoPlay:!0,playsInline:!0,muted:!0,"aria-hidden":"true"}),t.jsx("canvas",{ref:T,className:`glitch-canvas ${l==="live"?"is-live":""}`}),l==="intro"&&t.jsxs("div",{className:"glitch-panel glitch-intro",children:[t.jsx("button",{className:"glitch-exit",onClick:s,children:"✕ Exit"}),t.jsx("h1",{children:"The Glitching Reality"}),t.jsx("p",{className:"glitch-tag",children:"I wired my brain to my room.  If I lose focus, reality breaks."}),t.jsxs("p",{className:"glitch-prose",children:["This is a purely visual demonstration of ",t.jsx("strong",{children:"Frontal Alpha Asymmetry"}),".  Your phone or headset camera becomes a mixed- reality passthrough; a real-time shader composites EEG-driven distortion on top."]}),t.jsxs("ul",{className:"glitch-list",children:[t.jsxs("li",{children:[t.jsx("span",{children:"•"})," When you are calm and equanimous, the room is pristine."]}),t.jsxs("li",{children:[t.jsx("span",{children:"•"})," Cognitive load tears the scene apart — RGB split, slice tear, harsh light."]}),t.jsxs("li",{children:[t.jsx("span",{children:"•"})," A deep, slow breath snaps reality back to clarity."]})]}),t.jsx("p",{className:"glitch-prose glitch-dim",children:"Works with any electrode placement and any number of channels. When two or more channels are connected, Frontal Alpha Asymmetry is computed from channels 1 & 2; with a single channel the calm / β signal still drives the shader. Best in a darkened room, on a phone or Quest Browser."}),x&&t.jsx("div",{className:"glitch-err",children:x}),t.jsxs("div",{className:"glitch-actions",children:[t.jsx("button",{className:"glitch-btn glitch-btn--primary",onClick:$,children:"Wire In"}),t.jsx("button",{className:"glitch-btn",onClick:s,children:"Cancel"})]})]}),l==="live"&&t.jsxs(t.Fragment,{children:[t.jsx("button",{className:"glitch-exit glitch-exit--floating",onClick:s,children:"✕ Exit"}),t.jsxs("div",{className:"glitch-hud glitch-hud--tl",children:[t.jsxs("div",{className:"glitch-hud-row",children:[t.jsx("span",{className:"glitch-hud-k",children:"STATE"}),t.jsx("span",{className:`glitch-hud-v glitch-hud-state lvl-${u.snapping?"snap":u.instability>.75?"frac":u.instability>.5?"tear":u.instability>.25?"drift":"calm"}`,children:L})]}),t.jsx(J,{label:"INSTABILITY",pct:X,color:"#ff3366"}),t.jsx(J,{label:"CALM α/(α+β)",pct:k,color:"#5cf2ff"}),t.jsx(J,{label:"β SURGE",pct:W,color:"#ffb347"}),t.jsxs("div",{className:"glitch-hud-row glitch-hud-faa",children:[t.jsx("span",{className:"glitch-hud-k",children:"FAA"}),t.jsxs("span",{className:"glitch-hud-v",children:[V," ",t.jsxs("span",{className:"glitch-hud-dim",children:["(",u.faa>.05?"approach":u.faa<-.05?"withdraw":"neutral",")"]})]})]})]}),t.jsxs("div",{className:"glitch-hud glitch-hud--tr",children:[t.jsx("div",{className:"glitch-hud-title",children:"Stressor"}),t.jsxs("label",{className:"glitch-toggle",children:[t.jsx("input",{type:"checkbox",checked:h,onChange:a=>E(a.target.checked)}),t.jsx("span",{children:"Mental arithmetic, timed"})]}),h&&t.jsxs("div",{className:"glitch-diff",children:[t.jsx("span",{children:"Difficulty"}),t.jsx("div",{children:[1,2,3,4,5].map(a=>t.jsx("button",{className:`glitch-diff-btn ${d===a?"is-on":""}`,onClick:()=>w(a),children:a},a))})]}),t.jsx("p",{className:"glitch-hint",children:"Breathe slowly to snap the room back."})]}),h&&f&&t.jsxs("div",{className:"glitch-puzzle",children:[t.jsxs("div",{className:"glitch-puzzle-q",children:[f.question," = ?"]}),t.jsx("input",{className:"glitch-puzzle-input",type:"text",inputMode:"numeric",autoFocus:!0,value:A,onChange:a=>v(a.target.value.replace(/[^0-9\-]/g,"")),onKeyDown:a=>{a.key==="Enter"&&q()},placeholder:"answer"}),t.jsxs("div",{className:"glitch-puzzle-meta",children:[t.jsxs("span",{className:`glitch-puzzle-timer ${P<2?"is-low":""}`,children:[P.toFixed(1),"s"]}),t.jsxs("span",{children:["streak ",f.streak]}),f.lastResult&&t.jsx("span",{className:`glitch-puzzle-flash is-${f.lastResult}`,children:f.lastResult==="correct"?"✓":"✗"})]})]})]})]})}function J({label:n,pct:s,color:l}){return t.jsxs("div",{className:"glitch-bar",children:[t.jsxs("div",{className:"glitch-bar-head",children:[t.jsx("span",{className:"glitch-hud-k",children:n}),t.jsxs("span",{className:"glitch-hud-v",children:[s,"%"]})]}),t.jsx("div",{className:"glitch-bar-track",children:t.jsx("div",{className:"glitch-bar-fill",style:{width:`${Math.max(0,Math.min(100,s))}%`,background:l}})})]})}export{me as default};
