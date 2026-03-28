var Sy=Object.defineProperty;var yy=(r,t,i)=>t in r?Sy(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var Ii=(r,t,i)=>yy(r,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Lv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Td={exports:{}},Xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function My(){if(l_)return Xo;l_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Xo.Fragment=t,Xo.jsx=i,Xo.jsxs=i,Xo}var c_;function by(){return c_||(c_=1,Td.exports=My()),Td.exports}var L=by(),Ad={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u_;function Ey(){if(u_)return de;u_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),g=Symbol.iterator;function M(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,v={};function x(F,k,et){this.props=F,this.context=k,this.refs=v,this.updater=et||b}x.prototype.isReactComponent={},x.prototype.setState=function(F,k){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,k,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function A(){}A.prototype=x.prototype;function U(F,k,et){this.props=F,this.context=k,this.refs=v,this.updater=et||b}var D=U.prototype=new A;D.constructor=U,R(D,x.prototype),D.isPureReactComponent=!0;var H=Array.isArray;function I(){}var z={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function O(F,k,et){var pt=et.ref;return{$$typeof:r,type:F,key:k,ref:pt!==void 0?pt:null,props:et}}function mt(F,k){return O(F.type,k,F.props)}function G(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function Q(F){var k={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(et){return k[et]})}var q=/\/+/g;function at(F,k){return typeof F=="object"&&F!==null&&F.key!=null?Q(""+F.key):k.toString(36)}function tt(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(I,I):(F.status="pending",F.then(function(k){F.status==="pending"&&(F.status="fulfilled",F.value=k)},function(k){F.status==="pending"&&(F.status="rejected",F.reason=k)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function N(F,k,et,pt,bt){var Z=typeof F;(Z==="undefined"||Z==="boolean")&&(F=null);var V=!1;if(F===null)V=!0;else switch(Z){case"bigint":case"string":case"number":V=!0;break;case"object":switch(F.$$typeof){case r:case t:V=!0;break;case _:return V=F._init,N(V(F._payload),k,et,pt,bt)}}if(V)return bt=bt(F),V=pt===""?"."+at(F,0):pt,H(bt)?(et="",V!=null&&(et=V.replace(q,"$&/")+"/"),N(bt,k,et,"",function(Ot){return Ot})):bt!=null&&(G(bt)&&(bt=mt(bt,et+(bt.key==null||F&&F.key===bt.key?"":(""+bt.key).replace(q,"$&/")+"/")+V)),k.push(bt)),1;V=0;var ut=pt===""?".":pt+":";if(H(F))for(var Mt=0;Mt<F.length;Mt++)pt=F[Mt],Z=ut+at(pt,Mt),V+=N(pt,k,et,Z,bt);else if(Mt=M(F),typeof Mt=="function")for(F=Mt.call(F),Mt=0;!(pt=F.next()).done;)pt=pt.value,Z=ut+at(pt,Mt++),V+=N(pt,k,et,Z,bt);else if(Z==="object"){if(typeof F.then=="function")return N(tt(F),k,et,pt,bt);throw k=String(F),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return V}function B(F,k,et){if(F==null)return F;var pt=[],bt=0;return N(F,pt,"","",function(Z){return k.call(et,Z,bt++)}),pt}function X(F){if(F._status===-1){var k=F._result;k=k(),k.then(function(et){(F._status===0||F._status===-1)&&(F._status=1,F._result=et)},function(et){(F._status===0||F._status===-1)&&(F._status=2,F._result=et)}),F._status===-1&&(F._status=0,F._result=k)}if(F._status===1)return F._result.default;throw F._result}var nt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},vt={map:B,forEach:function(F,k,et){B(F,function(){k.apply(this,arguments)},et)},count:function(F){var k=0;return B(F,function(){k++}),k},toArray:function(F){return B(F,function(k){return k})||[]},only:function(F){if(!G(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return de.Activity=S,de.Children=vt,de.Component=x,de.Fragment=i,de.Profiler=l,de.PureComponent=U,de.StrictMode=s,de.Suspense=m,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,de.__COMPILER_RUNTIME={__proto__:null,c:function(F){return z.H.useMemoCache(F)}},de.cache=function(F){return function(){return F.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(F,k,et){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var pt=R({},F.props),bt=F.key;if(k!=null)for(Z in k.key!==void 0&&(bt=""+k.key),k)!E.call(k,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&k.ref===void 0||(pt[Z]=k[Z]);var Z=arguments.length-2;if(Z===1)pt.children=et;else if(1<Z){for(var V=Array(Z),ut=0;ut<Z;ut++)V[ut]=arguments[ut+2];pt.children=V}return O(F.type,bt,pt)},de.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},de.createElement=function(F,k,et){var pt,bt={},Z=null;if(k!=null)for(pt in k.key!==void 0&&(Z=""+k.key),k)E.call(k,pt)&&pt!=="key"&&pt!=="__self"&&pt!=="__source"&&(bt[pt]=k[pt]);var V=arguments.length-2;if(V===1)bt.children=et;else if(1<V){for(var ut=Array(V),Mt=0;Mt<V;Mt++)ut[Mt]=arguments[Mt+2];bt.children=ut}if(F&&F.defaultProps)for(pt in V=F.defaultProps,V)bt[pt]===void 0&&(bt[pt]=V[pt]);return O(F,Z,bt)},de.createRef=function(){return{current:null}},de.forwardRef=function(F){return{$$typeof:p,render:F}},de.isValidElement=G,de.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:X}},de.memo=function(F,k){return{$$typeof:h,type:F,compare:k===void 0?null:k}},de.startTransition=function(F){var k=z.T,et={};z.T=et;try{var pt=F(),bt=z.S;bt!==null&&bt(et,pt),typeof pt=="object"&&pt!==null&&typeof pt.then=="function"&&pt.then(I,nt)}catch(Z){nt(Z)}finally{k!==null&&et.types!==null&&(k.types=et.types),z.T=k}},de.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},de.use=function(F){return z.H.use(F)},de.useActionState=function(F,k,et){return z.H.useActionState(F,k,et)},de.useCallback=function(F,k){return z.H.useCallback(F,k)},de.useContext=function(F){return z.H.useContext(F)},de.useDebugValue=function(){},de.useDeferredValue=function(F,k){return z.H.useDeferredValue(F,k)},de.useEffect=function(F,k){return z.H.useEffect(F,k)},de.useEffectEvent=function(F){return z.H.useEffectEvent(F)},de.useId=function(){return z.H.useId()},de.useImperativeHandle=function(F,k,et){return z.H.useImperativeHandle(F,k,et)},de.useInsertionEffect=function(F,k){return z.H.useInsertionEffect(F,k)},de.useLayoutEffect=function(F,k){return z.H.useLayoutEffect(F,k)},de.useMemo=function(F,k){return z.H.useMemo(F,k)},de.useOptimistic=function(F,k){return z.H.useOptimistic(F,k)},de.useReducer=function(F,k,et){return z.H.useReducer(F,k,et)},de.useRef=function(F){return z.H.useRef(F)},de.useState=function(F){return z.H.useState(F)},de.useSyncExternalStore=function(F,k,et){return z.H.useSyncExternalStore(F,k,et)},de.useTransition=function(){return z.H.useTransition()},de.version="19.2.4",de}var f_;function dp(){return f_||(f_=1,Ad.exports=Ey()),Ad.exports}var dt=dp();const Ty=Lv(dt);var Rd={exports:{}},Wo={},Cd={exports:{}},wd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_;function Ay(){return d_||(d_=1,(function(r){function t(N,B){var X=N.length;N.push(B);t:for(;0<X;){var nt=X-1>>>1,vt=N[nt];if(0<l(vt,B))N[nt]=B,N[X]=vt,X=nt;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var B=N[0],X=N.pop();if(X!==B){N[0]=X;t:for(var nt=0,vt=N.length,F=vt>>>1;nt<F;){var k=2*(nt+1)-1,et=N[k],pt=k+1,bt=N[pt];if(0>l(et,X))pt<vt&&0>l(bt,et)?(N[nt]=bt,N[pt]=X,nt=pt):(N[nt]=et,N[k]=X,nt=k);else if(pt<vt&&0>l(bt,X))N[nt]=bt,N[pt]=X,nt=pt;else break t}}return B}function l(N,B){var X=N.sortIndex-B.sortIndex;return X!==0?X:N.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var m=[],h=[],_=1,S=null,g=3,M=!1,b=!1,R=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(N){for(var B=i(h);B!==null;){if(B.callback===null)s(h);else if(B.startTime<=N)s(h),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(h)}}function H(N){if(R=!1,D(N),!b)if(i(m)!==null)b=!0,I||(I=!0,Q());else{var B=i(h);B!==null&&tt(H,B.startTime-N)}}var I=!1,z=-1,E=5,O=-1;function mt(){return v?!0:!(r.unstable_now()-O<E)}function G(){if(v=!1,I){var N=r.unstable_now();O=N;var B=!0;try{t:{b=!1,R&&(R=!1,A(z),z=-1),M=!0;var X=g;try{e:{for(D(N),S=i(m);S!==null&&!(S.expirationTime>N&&mt());){var nt=S.callback;if(typeof nt=="function"){S.callback=null,g=S.priorityLevel;var vt=nt(S.expirationTime<=N);if(N=r.unstable_now(),typeof vt=="function"){S.callback=vt,D(N),B=!0;break e}S===i(m)&&s(m),D(N)}else s(m);S=i(m)}if(S!==null)B=!0;else{var F=i(h);F!==null&&tt(H,F.startTime-N),B=!1}}break t}finally{S=null,g=X,M=!1}B=void 0}}finally{B?Q():I=!1}}}var Q;if(typeof U=="function")Q=function(){U(G)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,at=q.port2;q.port1.onmessage=G,Q=function(){at.postMessage(null)}}else Q=function(){x(G,0)};function tt(N,B){z=x(function(){N(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(N){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var X=g;g=B;try{return N()}finally{g=X}},r.unstable_requestPaint=function(){v=!0},r.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var X=g;g=N;try{return B()}finally{g=X}},r.unstable_scheduleCallback=function(N,B,X){var nt=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?nt+X:nt):X=nt,N){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=X+vt,N={id:_++,callback:B,priorityLevel:N,startTime:X,expirationTime:vt,sortIndex:-1},X>nt?(N.sortIndex=X,t(h,N),i(m)===null&&N===i(h)&&(R?(A(z),z=-1):R=!0,tt(H,X-nt))):(N.sortIndex=vt,t(m,N),b||M||(b=!0,I||(I=!0,Q()))),N},r.unstable_shouldYield=mt,r.unstable_wrapCallback=function(N){var B=g;return function(){var X=g;g=B;try{return N.apply(this,arguments)}finally{g=X}}}})(wd)),wd}var h_;function Ry(){return h_||(h_=1,Cd.exports=Ay()),Cd.exports}var Dd={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p_;function Cy(){if(p_)return wn;p_=1;var r=dp();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)h+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,_){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:h,implementation:_}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.createPortal=function(m,h){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,_)},wn.flushSync=function(m){var h=d.T,_=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=_,s.d.f()}},wn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},wn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},wn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var _=h.as,S=p(_,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;_==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:g,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:S,integrity:g,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},wn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var _=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},wn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var _=h.as,S=p(_,h.crossOrigin);s.d.L(m,_,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},wn.preloadModule=function(m,h){if(typeof m=="string")if(h){var _=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},wn.requestFormReset=function(m){s.d.r(m)},wn.unstable_batchedUpdates=function(m,h){return m(h)},wn.useFormState=function(m,h,_){return d.H.useFormState(m,h,_)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.2.4",wn}var m_;function wy(){if(m_)return Dd.exports;m_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Dd.exports=Cy(),Dd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function Dy(){if(g_)return Wo;g_=1;var r=Ry(),t=dp(),i=wy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,C=u.child;C;){if(C===a){y=!0,a=u,o=f;break}if(C===o){y=!0,o=u,a=f;break}C=C.sibling}if(!y){for(C=f.child;C;){if(C===a){y=!0,a=f,o=u;break}if(C===o){y=!0,o=f,a=u;break}C=C.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var S=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),mt=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var q=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case x:return"Profiler";case v:return"StrictMode";case H:return"Suspense";case I:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case U:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:at(e.type)||"Memo";case E:n=e._payload,e=e._init;try{return at(e(n))}catch{}}return null}var tt=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},nt=[],vt=-1;function F(e){return{current:e}}function k(e){0>vt||(e.current=nt[vt],nt[vt]=null,vt--)}function et(e,n){vt++,nt[vt]=e.current,e.current=n}var pt=F(null),bt=F(null),Z=F(null),V=F(null);function ut(e,n){switch(et(Z,n),et(bt,e),et(pt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Ng(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Ng(n),e=Ug(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}k(pt),et(pt,e)}function Mt(){k(pt),k(bt),k(Z)}function Ot(e){e.memoizedState!==null&&et(V,e);var n=pt.current,a=Ug(n,e.type);n!==a&&(et(bt,e),et(pt,a))}function wt(e){bt.current===e&&(k(pt),k(bt)),V.current===e&&(k(V),Ho._currentValue=X)}var ne,Ft;function ae(e){if(ne===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ne=n&&n[1]||"",Ft=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ne+e+Ft}var re=!1;function qt(e,n){if(!e||re)return"";re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Tt=function(){throw Error()};if(Object.defineProperty(Tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Tt,[])}catch(_t){var ft=_t}Reflect.construct(e,[],Tt)}else{try{Tt.call()}catch(_t){ft=_t}e.call(Tt.prototype)}}else{try{throw Error()}catch(_t){ft=_t}(Tt=e())&&typeof Tt.catch=="function"&&Tt.catch(function(){})}}catch(_t){if(_t&&ft&&typeof _t.stack=="string")return[_t.stack,ft.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],C=f[1];if(y&&C){var W=y.split(`
`),lt=C.split(`
`);for(u=o=0;o<W.length&&!W[o].includes("DetermineComponentFrameRoot");)o++;for(;u<lt.length&&!lt[u].includes("DetermineComponentFrameRoot");)u++;if(o===W.length||u===lt.length)for(o=W.length-1,u=lt.length-1;1<=o&&0<=u&&W[o]!==lt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(W[o]!==lt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||W[o]!==lt[u]){var yt=`
`+W[o].replace(" at new "," at ");return e.displayName&&yt.includes("<anonymous>")&&(yt=yt.replace("<anonymous>",e.displayName)),yt}while(1<=o&&0<=u);break}}}finally{re=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ae(a):""}function pe(e,n){switch(e.tag){case 26:case 27:case 5:return ae(e.type);case 16:return ae("Lazy");case 13:return e.child!==n&&n!==null?ae("Suspense Fallback"):ae("Suspense");case 19:return ae("SuspenseList");case 0:case 15:return qt(e.type,!1);case 11:return qt(e.type.render,!1);case 1:return qt(e.type,!0);case 31:return ae("Activity");default:return""}}function j(e){try{var n="",a=null;do n+=pe(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Te=Object.prototype.hasOwnProperty,me=r.unstable_scheduleCallback,Ae=r.unstable_cancelCallback,kt=r.unstable_shouldYield,P=r.unstable_requestPaint,T=r.unstable_now,$=r.unstable_getCurrentPriorityLevel,St=r.unstable_ImmediatePriority,At=r.unstable_UserBlockingPriority,ht=r.unstable_NormalPriority,Wt=r.unstable_LowPriority,Ut=r.unstable_IdlePriority,Jt=r.log,$t=r.unstable_setDisableYieldValue,Ct=null,Rt=null;function Ht(e){if(typeof Jt=="function"&&$t(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Ct,e)}catch{}}var It=Math.clz32?Math.clz32:J,Gt=Math.log,ge=Math.LN2;function J(e){return e>>>=0,e===0?32:31-(Gt(e)/ge|0)|0}var Lt=256,Nt=262144,Vt=4194304;function Dt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~f,o!==0?u=Dt(o):(y&=C,y!==0?u=Dt(y):a||(a=C&~e,a!==0&&(u=Dt(a))))):(C=o&~f,C!==0?u=Dt(C):y!==0?u=Dt(y):a||(a=o&~e,a!==0&&(u=Dt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function jt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ce(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Vt;return Vt<<=1,(Vt&62914560)===0&&(Vt=4194304),e}function Ne(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Bn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mi(e,n,a,o,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,W=e.expirationTimes,lt=e.hiddenUpdates;for(a=y&~a;0<a;){var yt=31-It(a),Tt=1<<yt;C[yt]=0,W[yt]=-1;var ft=lt[yt];if(ft!==null)for(lt[yt]=null,yt=0;yt<ft.length;yt++){var _t=ft[yt];_t!==null&&(_t.lane&=-536870913)}a&=~Tt}o!==0&&to(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function to(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-It(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function ks(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-It(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function gl(e,n){var a=n&-n;return a=(a&42)!==0?1:Xs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Xs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ws(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Oi(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:e_(e.type))}function js(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var bi=Math.random().toString(36).slice(2),rn="__reactFiber$"+bi,pn="__reactProps$"+bi,Ji="__reactContainer$"+bi,Ca="__reactEvents$"+bi,_l="__reactListeners$"+bi,vl="__reactHandles$"+bi,xl="__reactResources$"+bi,us="__reactMarker$"+bi;function eo(e){delete e[rn],delete e[pn],delete e[Ca],delete e[_l],delete e[vl]}function wa(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ji]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Ig(e);e!==null;){if(a=e[rn])return a;e=Ig(e)}return n}e=a,a=e.parentNode}return null}function Da(e){if(e=e[rn]||e[Ji]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function fs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function w(e){var n=e[xl];return n||(n=e[xl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function K(e){e[us]=!0}var gt=new Set,ct={};function st(e,n){Pt(e,n),Pt(e+"Capture",n)}function Pt(e,n){for(ct[e]=n,e=0;e<n.length;e++)gt.add(n[e])}var Xt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bt={},Qt={};function ee(e){return Te.call(Qt,e)?!0:Te.call(Bt,e)?!1:Xt.test(e)?Qt[e]=!0:(Bt[e]=!0,!1)}function oe(e,n,a){if(ee(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function fe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Yt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Oe(e){if(!e._valueTracker){var n=Qe(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function mn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Qe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var zn=/[\n"\\]/g;function ue(e){return e.replace(zn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function In(e,n,a,o,u,f,y,C){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?Ei(e,y,_e(n)):a!=null?Ei(e,y,_e(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+_e(C):e.removeAttribute("name")}function Qn(e,n,a,o,u,f,y,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Oe(e);return}a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Oe(e)}function Ei(e,n,a){n==="number"&&Kt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Jn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ze(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function on(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(tt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Oe(e)}function Hn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ln=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ti(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||ln.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function $i(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ti(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Ti(e,f,n[f])}function qs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_x=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sl(e){return _x.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ta(){}var yu=null;function Mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,Zs=null;function Dp(e){var n=Da(e);if(n&&(e=n.stateNode)){var a=e[pn]||null;t:switch(e=n.stateNode,n.type){case"input":if(In(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ue(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[pn]||null;if(!u)throw Error(s(90));In(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&mn(o)}break t;case"textarea":ze(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Jn(e,!!a.multiple,n,!1)}}}var bu=!1;function Np(e,n,a){if(bu)return e(n,a);bu=!0;try{var o=e(n);return o}finally{if(bu=!1,(Ys!==null||Zs!==null)&&(oc(),Ys&&(n=Ys,e=Zs,Zs=Ys=null,Dp(n),e)))for(n=0;n<e.length;n++)Dp(e[n])}}function no(e,n){var a=e.stateNode;if(a===null)return null;var o=a[pn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=!1;if(ea)try{var io={};Object.defineProperty(io,"passive",{get:function(){Eu=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{Eu=!1}var Na=null,Tu=null,yl=null;function Up(){if(yl)return yl;var e,n=Tu,a=n.length,o,u="value"in Na?Na.value:Na.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return yl=u.slice(e,1<o?1-o:void 0)}function Ml(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function bl(){return!0}function Lp(){return!1}function Xn(e){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?bl:Lp,this.isPropagationStopped=Lp,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),n}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},El=Xn(ds),ao=S({},ds,{view:0,detail:0}),vx=Xn(ao),Au,Ru,so,Tl=S({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==so&&(so&&e.type==="mousemove"?(Au=e.screenX-so.screenX,Ru=e.screenY-so.screenY):Ru=Au=0,so=e),Au)},movementY:function(e){return"movementY"in e?e.movementY:Ru}}),Op=Xn(Tl),xx=S({},Tl,{dataTransfer:0}),Sx=Xn(xx),yx=S({},ao,{relatedTarget:0}),Cu=Xn(yx),Mx=S({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),bx=Xn(Mx),Ex=S({},ds,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Tx=Xn(Ex),Ax=S({},ds,{data:0}),Pp=Xn(Ax),Rx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=wx[e])?!!n[e]:!1}function wu(){return Dx}var Nx=S({},ao,{key:function(e){if(e.key){var n=Rx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(e){return e.type==="keypress"?Ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ux=Xn(Nx),Lx=S({},Tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fp=Xn(Lx),Ox=S({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),Px=Xn(Ox),Fx=S({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bx=Xn(Fx),zx=S({},Tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ix=Xn(zx),Hx=S({},ds,{newState:0,oldState:0}),Gx=Xn(Hx),Vx=[9,13,27,32],Du=ea&&"CompositionEvent"in window,ro=null;ea&&"documentMode"in document&&(ro=document.documentMode);var kx=ea&&"TextEvent"in window&&!ro,Bp=ea&&(!Du||ro&&8<ro&&11>=ro),zp=" ",Ip=!1;function Hp(e,n){switch(e){case"keyup":return Vx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ks=!1;function Xx(e,n){switch(e){case"compositionend":return Gp(n);case"keypress":return n.which!==32?null:(Ip=!0,zp);case"textInput":return e=n.data,e===zp&&Ip?null:e;default:return null}}function Wx(e,n){if(Ks)return e==="compositionend"||!Du&&Hp(e,n)?(e=Up(),yl=Tu=Na=null,Ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Bp&&n.locale!=="ko"?null:n.data;default:return null}}var jx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!jx[e.type]:n==="textarea"}function kp(e,n,a,o){Ys?Zs?Zs.push(o):Zs=[o]:Ys=o,n=pc(n,"onChange"),0<n.length&&(a=new El("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var oo=null,lo=null;function qx(e){Tg(e,0)}function Al(e){var n=fs(e);if(mn(n))return e}function Xp(e,n){if(e==="change")return n}var Wp=!1;if(ea){var Nu;if(ea){var Uu="oninput"in document;if(!Uu){var jp=document.createElement("div");jp.setAttribute("oninput","return;"),Uu=typeof jp.oninput=="function"}Nu=Uu}else Nu=!1;Wp=Nu&&(!document.documentMode||9<document.documentMode)}function qp(){oo&&(oo.detachEvent("onpropertychange",Yp),lo=oo=null)}function Yp(e){if(e.propertyName==="value"&&Al(lo)){var n=[];kp(n,lo,e,Mu(e)),Np(qx,n)}}function Yx(e,n,a){e==="focusin"?(qp(),oo=n,lo=a,oo.attachEvent("onpropertychange",Yp)):e==="focusout"&&qp()}function Zx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Al(lo)}function Kx(e,n){if(e==="click")return Al(n)}function Qx(e,n){if(e==="input"||e==="change")return Al(n)}function Jx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:Jx;function co(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Te.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function Zp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kp(e,n){var a=Zp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Zp(a)}}function Qp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Qp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Jp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Kt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Kt(e.document)}return n}function Lu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var $x=ea&&"documentMode"in document&&11>=document.documentMode,Qs=null,Ou=null,uo=null,Pu=!1;function $p(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Pu||Qs==null||Qs!==Kt(o)||(o=Qs,"selectionStart"in o&&Lu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),uo&&co(uo,o)||(uo=o,o=pc(Ou,"onSelect"),0<o.length&&(n=new El("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Qs)))}function hs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Js={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionrun:hs("Transition","TransitionRun"),transitionstart:hs("Transition","TransitionStart"),transitioncancel:hs("Transition","TransitionCancel"),transitionend:hs("Transition","TransitionEnd")},Fu={},tm={};ea&&(tm=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function ps(e){if(Fu[e])return Fu[e];if(!Js[e])return e;var n=Js[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in tm)return Fu[e]=n[a];return e}var em=ps("animationend"),nm=ps("animationiteration"),im=ps("animationstart"),tS=ps("transitionrun"),eS=ps("transitionstart"),nS=ps("transitioncancel"),am=ps("transitionend"),sm=new Map,Bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Bu.push("scrollEnd");function Ai(e,n){sm.set(e,n),st(n,[e])}var Rl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],$s=0,zu=0;function Cl(){for(var e=$s,n=zu=$s=0;n<e;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var f=fi[n];if(fi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&rm(a,u,f)}}function wl(e,n,a,o){fi[$s++]=e,fi[$s++]=n,fi[$s++]=a,fi[$s++]=o,zu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Iu(e,n,a,o){return wl(e,n,a,o),Dl(e)}function ms(e,n){return wl(e,null,null,n),Dl(e)}function rm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-It(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Dl(e){if(50<Lo)throw Lo=0,Zf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var tr={};function iS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new iS(e,n,a,o)}function Hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function na(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function om(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Nl(e,n,a,o,u,f){var y=0;if(o=e,typeof e=="function")Hu(e)&&(y=1);else if(typeof e=="string")y=ly(e,a,pt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case O:return e=ti(31,a,n,u),e.elementType=O,e.lanes=f,e;case R:return gs(a.children,u,f,n);case v:y=8,u|=24;break;case x:return e=ti(12,a,n,u|2),e.elementType=x,e.lanes=f,e;case H:return e=ti(13,a,n,u),e.elementType=H,e.lanes=f,e;case I:return e=ti(19,a,n,u),e.elementType=I,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:y=10;break t;case A:y=9;break t;case D:y=11;break t;case z:y=14;break t;case E:y=16,o=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(y,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function gs(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function Gu(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function lm(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Vu(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var cm=new WeakMap;function di(e,n){if(typeof e=="object"&&e!==null){var a=cm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:j(n)},cm.set(e,n),n)}return{value:e,source:n,stack:j(n)}}var er=[],nr=0,Ul=null,fo=0,hi=[],pi=0,Ua=null,Pi=1,Fi="";function ia(e,n){er[nr++]=fo,er[nr++]=Ul,Ul=e,fo=n}function um(e,n,a){hi[pi++]=Pi,hi[pi++]=Fi,hi[pi++]=Ua,Ua=e;var o=Pi;e=Fi;var u=32-It(o)-1;o&=~(1<<u),a+=1;var f=32-It(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Pi=1<<32-It(n)+u|a<<u|o,Fi=f+e}else Pi=1<<f|a<<u|o,Fi=e}function ku(e){e.return!==null&&(ia(e,1),um(e,1,0))}function Xu(e){for(;e===Ul;)Ul=er[--nr],er[nr]=null,fo=er[--nr],er[nr]=null;for(;e===Ua;)Ua=hi[--pi],hi[pi]=null,Fi=hi[--pi],hi[pi]=null,Pi=hi[--pi],hi[pi]=null}function fm(e,n){hi[pi++]=Pi,hi[pi++]=Fi,hi[pi++]=Ua,Pi=n.id,Fi=n.overflow,Ua=e}var Mn=null,Ye=null,we=!1,La=null,mi=!1,Wu=Error(s(519));function Oa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ho(di(n,e)),Wu}function dm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[rn]=e,n[pn]=o,a){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(a=0;a<Po.length;a++)be(Po[a],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":be("invalid",n),Qn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":be("invalid",n);break;case"textarea":be("invalid",n),on(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||wg(n.textContent,a)?(o.popover!=null&&(be("beforetoggle",n),be("toggle",n)),o.onScroll!=null&&be("scroll",n),o.onScrollEnd!=null&&be("scrollend",n),o.onClick!=null&&(n.onclick=ta),n=!0):n=!1,n||Oa(e,!0)}function hm(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Mn=Mn.return}}function ir(e){if(e!==Mn)return!1;if(!we)return hm(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ud(e.type,e.memoizedProps)),a=!a),a&&Ye&&Oa(e),hm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=zg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=zg(e)}else n===27?(n=Ye,Ya(e.type)?(e=md,md=null,Ye=e):Ye=n):Ye=Mn?_i(e.stateNode.nextSibling):null;return!0}function _s(){Ye=Mn=null,we=!1}function ju(){var e=La;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),La=null),e}function ho(e){La===null?La=[e]:La.push(e)}var qu=F(null),vs=null,aa=null;function Pa(e,n,a){et(qu,n._currentValue),n._currentValue=a}function sa(e){e._currentValue=qu.current,k(qu)}function Yu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Zu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var C=f;f=u;for(var W=0;W<n.length;W++)if(C.context===n[W]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Yu(f.return,a,e),o||(y=null);break t}f=C.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Yu(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function ar(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var C=u.type;$n(u.pendingProps.value,y.value)||(e!==null?e.push(C):e=[C])}}else if(u===V.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ho):e=[Ho])}u=u.return}e!==null&&Zu(n,e,a,o),n.flags|=262144}function Ll(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xs(e){vs=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bn(e){return pm(vs,e)}function Ol(e,n){return vs===null&&xs(e),pm(e,n)}function pm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},aa===null){if(e===null)throw Error(s(308));aa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else aa=aa.next=n;return a}var aS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},sS=r.unstable_scheduleCallback,rS=r.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ku(){return{controller:new aS,data:new Map,refCount:0}}function po(e){e.refCount--,e.refCount===0&&sS(rS,function(){e.controller.abort()})}var mo=null,Qu=0,sr=0,rr=null;function oS(e,n){if(mo===null){var a=mo=[];Qu=0,sr=ed(),rr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Qu++,n.then(mm,mm),n}function mm(){if(--Qu===0&&mo!==null){rr!==null&&(rr.status="fulfilled");var e=mo;mo=null,sr=0,rr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function lS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var gm=N.S;N.S=function(e,n){$0=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&oS(e,n),gm!==null&&gm(e,n)};var Ss=F(null);function Ju(){var e=Ss.current;return e!==null?e:qe.pooledCache}function Pl(e,n){n===null?et(Ss,Ss.current):et(Ss,n.pool)}function _m(){var e=Ju();return e===null?null:{parent:cn._currentValue,pool:e}}var or=Error(s(460)),$u=Error(s(474)),Fl=Error(s(542)),Bl={then:function(){}};function vm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ta,ta),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ym(e),e;default:if(typeof n.status=="string")n.then(ta,ta);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ym(e),e}throw Ms=n,or}}function ys(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ms=a,or):a}}var Ms=null;function Sm(){if(Ms===null)throw Error(s(459));var e=Ms;return Ms=null,e}function ym(e){if(e===or||e===Fl)throw Error(s(483))}var lr=null,go=0;function zl(e){var n=go;return go+=1,lr===null&&(lr=[]),xm(lr,e,n)}function _o(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Il(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Mm(e){function n(it,Y){if(e){var ot=it.deletions;ot===null?(it.deletions=[Y],it.flags|=16):ot.push(Y)}}function a(it,Y){if(!e)return null;for(;Y!==null;)n(it,Y),Y=Y.sibling;return null}function o(it){for(var Y=new Map;it!==null;)it.key!==null?Y.set(it.key,it):Y.set(it.index,it),it=it.sibling;return Y}function u(it,Y){return it=na(it,Y),it.index=0,it.sibling=null,it}function f(it,Y,ot){return it.index=ot,e?(ot=it.alternate,ot!==null?(ot=ot.index,ot<Y?(it.flags|=67108866,Y):ot):(it.flags|=67108866,Y)):(it.flags|=1048576,Y)}function y(it){return e&&it.alternate===null&&(it.flags|=67108866),it}function C(it,Y,ot,Et){return Y===null||Y.tag!==6?(Y=Gu(ot,it.mode,Et),Y.return=it,Y):(Y=u(Y,ot),Y.return=it,Y)}function W(it,Y,ot,Et){var ie=ot.type;return ie===R?yt(it,Y,ot.props.children,Et,ot.key):Y!==null&&(Y.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===E&&ys(ie)===Y.type)?(Y=u(Y,ot.props),_o(Y,ot),Y.return=it,Y):(Y=Nl(ot.type,ot.key,ot.props,null,it.mode,Et),_o(Y,ot),Y.return=it,Y)}function lt(it,Y,ot,Et){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ot.containerInfo||Y.stateNode.implementation!==ot.implementation?(Y=Vu(ot,it.mode,Et),Y.return=it,Y):(Y=u(Y,ot.children||[]),Y.return=it,Y)}function yt(it,Y,ot,Et,ie){return Y===null||Y.tag!==7?(Y=gs(ot,it.mode,Et,ie),Y.return=it,Y):(Y=u(Y,ot),Y.return=it,Y)}function Tt(it,Y,ot){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=Gu(""+Y,it.mode,ot),Y.return=it,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case M:return ot=Nl(Y.type,Y.key,Y.props,null,it.mode,ot),_o(ot,Y),ot.return=it,ot;case b:return Y=Vu(Y,it.mode,ot),Y.return=it,Y;case E:return Y=ys(Y),Tt(it,Y,ot)}if(tt(Y)||Q(Y))return Y=gs(Y,it.mode,ot,null),Y.return=it,Y;if(typeof Y.then=="function")return Tt(it,zl(Y),ot);if(Y.$$typeof===U)return Tt(it,Ol(it,Y),ot);Il(it,Y)}return null}function ft(it,Y,ot,Et){var ie=Y!==null?Y.key:null;if(typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint")return ie!==null?null:C(it,Y,""+ot,Et);if(typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case M:return ot.key===ie?W(it,Y,ot,Et):null;case b:return ot.key===ie?lt(it,Y,ot,Et):null;case E:return ot=ys(ot),ft(it,Y,ot,Et)}if(tt(ot)||Q(ot))return ie!==null?null:yt(it,Y,ot,Et,null);if(typeof ot.then=="function")return ft(it,Y,zl(ot),Et);if(ot.$$typeof===U)return ft(it,Y,Ol(it,ot),Et);Il(it,ot)}return null}function _t(it,Y,ot,Et,ie){if(typeof Et=="string"&&Et!==""||typeof Et=="number"||typeof Et=="bigint")return it=it.get(ot)||null,C(Y,it,""+Et,ie);if(typeof Et=="object"&&Et!==null){switch(Et.$$typeof){case M:return it=it.get(Et.key===null?ot:Et.key)||null,W(Y,it,Et,ie);case b:return it=it.get(Et.key===null?ot:Et.key)||null,lt(Y,it,Et,ie);case E:return Et=ys(Et),_t(it,Y,ot,Et,ie)}if(tt(Et)||Q(Et))return it=it.get(ot)||null,yt(Y,it,Et,ie,null);if(typeof Et.then=="function")return _t(it,Y,ot,zl(Et),ie);if(Et.$$typeof===U)return _t(it,Y,ot,Ol(Y,Et),ie);Il(Y,Et)}return null}function Zt(it,Y,ot,Et){for(var ie=null,Pe=null,te=Y,ve=Y=0,Ce=null;te!==null&&ve<ot.length;ve++){te.index>ve?(Ce=te,te=null):Ce=te.sibling;var Fe=ft(it,te,ot[ve],Et);if(Fe===null){te===null&&(te=Ce);break}e&&te&&Fe.alternate===null&&n(it,te),Y=f(Fe,Y,ve),Pe===null?ie=Fe:Pe.sibling=Fe,Pe=Fe,te=Ce}if(ve===ot.length)return a(it,te),we&&ia(it,ve),ie;if(te===null){for(;ve<ot.length;ve++)te=Tt(it,ot[ve],Et),te!==null&&(Y=f(te,Y,ve),Pe===null?ie=te:Pe.sibling=te,Pe=te);return we&&ia(it,ve),ie}for(te=o(te);ve<ot.length;ve++)Ce=_t(te,it,ve,ot[ve],Et),Ce!==null&&(e&&Ce.alternate!==null&&te.delete(Ce.key===null?ve:Ce.key),Y=f(Ce,Y,ve),Pe===null?ie=Ce:Pe.sibling=Ce,Pe=Ce);return e&&te.forEach(function($a){return n(it,$a)}),we&&ia(it,ve),ie}function se(it,Y,ot,Et){if(ot==null)throw Error(s(151));for(var ie=null,Pe=null,te=Y,ve=Y=0,Ce=null,Fe=ot.next();te!==null&&!Fe.done;ve++,Fe=ot.next()){te.index>ve?(Ce=te,te=null):Ce=te.sibling;var $a=ft(it,te,Fe.value,Et);if($a===null){te===null&&(te=Ce);break}e&&te&&$a.alternate===null&&n(it,te),Y=f($a,Y,ve),Pe===null?ie=$a:Pe.sibling=$a,Pe=$a,te=Ce}if(Fe.done)return a(it,te),we&&ia(it,ve),ie;if(te===null){for(;!Fe.done;ve++,Fe=ot.next())Fe=Tt(it,Fe.value,Et),Fe!==null&&(Y=f(Fe,Y,ve),Pe===null?ie=Fe:Pe.sibling=Fe,Pe=Fe);return we&&ia(it,ve),ie}for(te=o(te);!Fe.done;ve++,Fe=ot.next())Fe=_t(te,it,ve,Fe.value,Et),Fe!==null&&(e&&Fe.alternate!==null&&te.delete(Fe.key===null?ve:Fe.key),Y=f(Fe,Y,ve),Pe===null?ie=Fe:Pe.sibling=Fe,Pe=Fe);return e&&te.forEach(function(xy){return n(it,xy)}),we&&ia(it,ve),ie}function We(it,Y,ot,Et){if(typeof ot=="object"&&ot!==null&&ot.type===R&&ot.key===null&&(ot=ot.props.children),typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case M:t:{for(var ie=ot.key;Y!==null;){if(Y.key===ie){if(ie=ot.type,ie===R){if(Y.tag===7){a(it,Y.sibling),Et=u(Y,ot.props.children),Et.return=it,it=Et;break t}}else if(Y.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===E&&ys(ie)===Y.type){a(it,Y.sibling),Et=u(Y,ot.props),_o(Et,ot),Et.return=it,it=Et;break t}a(it,Y);break}else n(it,Y);Y=Y.sibling}ot.type===R?(Et=gs(ot.props.children,it.mode,Et,ot.key),Et.return=it,it=Et):(Et=Nl(ot.type,ot.key,ot.props,null,it.mode,Et),_o(Et,ot),Et.return=it,it=Et)}return y(it);case b:t:{for(ie=ot.key;Y!==null;){if(Y.key===ie)if(Y.tag===4&&Y.stateNode.containerInfo===ot.containerInfo&&Y.stateNode.implementation===ot.implementation){a(it,Y.sibling),Et=u(Y,ot.children||[]),Et.return=it,it=Et;break t}else{a(it,Y);break}else n(it,Y);Y=Y.sibling}Et=Vu(ot,it.mode,Et),Et.return=it,it=Et}return y(it);case E:return ot=ys(ot),We(it,Y,ot,Et)}if(tt(ot))return Zt(it,Y,ot,Et);if(Q(ot)){if(ie=Q(ot),typeof ie!="function")throw Error(s(150));return ot=ie.call(ot),se(it,Y,ot,Et)}if(typeof ot.then=="function")return We(it,Y,zl(ot),Et);if(ot.$$typeof===U)return We(it,Y,Ol(it,ot),Et);Il(it,ot)}return typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint"?(ot=""+ot,Y!==null&&Y.tag===6?(a(it,Y.sibling),Et=u(Y,ot),Et.return=it,it=Et):(a(it,Y),Et=Gu(ot,it.mode,Et),Et.return=it,it=Et),y(it)):a(it,Y)}return function(it,Y,ot,Et){try{go=0;var ie=We(it,Y,ot,Et);return lr=null,ie}catch(te){if(te===or||te===Fl)throw te;var Pe=ti(29,te,null,it.mode);return Pe.lanes=Et,Pe.return=it,Pe}finally{}}}var bs=Mm(!0),bm=Mm(!1),Fa=!1;function tf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ef(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Be&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Dl(e),rm(e,null,a),n}return wl(e,o,n,a),Dl(e)}function vo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ks(e,a)}}function nf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var af=!1;function xo(){if(af){var e=rr;if(e!==null)throw e}}function So(e,n,a,o){af=!1;var u=e.updateQueue;Fa=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var W=C,lt=W.next;W.next=null,y===null?f=lt:y.next=lt,y=W;var yt=e.alternate;yt!==null&&(yt=yt.updateQueue,C=yt.lastBaseUpdate,C!==y&&(C===null?yt.firstBaseUpdate=lt:C.next=lt,yt.lastBaseUpdate=W))}if(f!==null){var Tt=u.baseState;y=0,yt=lt=W=null,C=f;do{var ft=C.lane&-536870913,_t=ft!==C.lane;if(_t?(Re&ft)===ft:(o&ft)===ft){ft!==0&&ft===sr&&(af=!0),yt!==null&&(yt=yt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Zt=e,se=C;ft=n;var We=a;switch(se.tag){case 1:if(Zt=se.payload,typeof Zt=="function"){Tt=Zt.call(We,Tt,ft);break t}Tt=Zt;break t;case 3:Zt.flags=Zt.flags&-65537|128;case 0:if(Zt=se.payload,ft=typeof Zt=="function"?Zt.call(We,Tt,ft):Zt,ft==null)break t;Tt=S({},Tt,ft);break t;case 2:Fa=!0}}ft=C.callback,ft!==null&&(e.flags|=64,_t&&(e.flags|=8192),_t=u.callbacks,_t===null?u.callbacks=[ft]:_t.push(ft))}else _t={lane:ft,tag:C.tag,payload:C.payload,callback:C.callback,next:null},yt===null?(lt=yt=_t,W=Tt):yt=yt.next=_t,y|=ft;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;_t=C,C=_t.next,_t.next=null,u.lastBaseUpdate=_t,u.shared.pending=null}}while(!0);yt===null&&(W=Tt),u.baseState=W,u.firstBaseUpdate=lt,u.lastBaseUpdate=yt,f===null&&(u.shared.lanes=0),ka|=y,e.lanes=y,e.memoizedState=Tt}}function Em(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Tm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Em(a[e],n)}var cr=F(null),Hl=F(0);function Am(e,n){e=pa,et(Hl,e),et(cr,n),pa=e|n.baseLanes}function sf(){et(Hl,pa),et(cr,cr.current)}function rf(){pa=Hl.current,k(cr),k(Hl)}var ei=F(null),gi=null;function Ia(e){var n=e.alternate;et(an,an.current&1),et(ei,e),gi===null&&(n===null||cr.current!==null||n.memoizedState!==null)&&(gi=e)}function of(e){et(an,an.current),et(ei,e),gi===null&&(gi=e)}function Rm(e){e.tag===22?(et(an,an.current),et(ei,e),gi===null&&(gi=e)):Ha()}function Ha(){et(an,an.current),et(ei,ei.current)}function ni(e){k(ei),gi===e&&(gi=null),k(an)}var an=F(0);function Gl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||hd(a)||pd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ra=0,he=null,ke=null,un=null,Vl=!1,ur=!1,Es=!1,kl=0,yo=0,fr=null,cS=0;function tn(){throw Error(s(321))}function lf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function cf(e,n,a,o,u,f){return ra=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?u0:Ef,Es=!1,f=a(o,u),Es=!1,ur&&(f=wm(n,a,o,u)),Cm(e),f}function Cm(e){N.H=Eo;var n=ke!==null&&ke.next!==null;if(ra=0,un=ke=he=null,Vl=!1,yo=0,fr=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&Ll(e)&&(fn=!0))}function wm(e,n,a,o){he=e;var u=0;do{if(ur&&(fr=null),yo=0,ur=!1,25<=u)throw Error(s(301));if(u+=1,un=ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=f0,f=n(a,o)}while(ur);return f}function uS(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?Mo(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(he.flags|=1024),n}function uf(){var e=kl!==0;return kl=0,e}function ff(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function df(e){if(Vl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Vl=!1}ra=0,un=ke=he=null,ur=!1,yo=kl=0,fr=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?he.memoizedState=un=e:un=un.next=e,un}function sn(){if(ke===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=un===null?he.memoizedState:un.next;if(n!==null)un=n,ke=e;else{if(e===null)throw he.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},un===null?he.memoizedState=un=e:un=un.next=e}return un}function Xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mo(e){var n=yo;return yo+=1,fr===null&&(fr=[]),e=xm(fr,e,n),n=he,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?u0:Ef),e}function Wl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mo(e);if(e.$$typeof===U)return bn(e)}throw Error(s(438,String(e)))}function hf(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Xl(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=mt;return n.index++,a}function oa(e,n){return typeof n=="function"?n(e):n}function jl(e){var n=sn();return pf(n,ke,e)}function pf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var C=y=null,W=null,lt=n,yt=!1;do{var Tt=lt.lane&-536870913;if(Tt!==lt.lane?(Re&Tt)===Tt:(ra&Tt)===Tt){var ft=lt.revertLane;if(ft===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null}),Tt===sr&&(yt=!0);else if((ra&ft)===ft){lt=lt.next,ft===sr&&(yt=!0);continue}else Tt={lane:0,revertLane:lt.revertLane,gesture:null,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null},W===null?(C=W=Tt,y=f):W=W.next=Tt,he.lanes|=ft,ka|=ft;Tt=lt.action,Es&&a(f,Tt),f=lt.hasEagerState?lt.eagerState:a(f,Tt)}else ft={lane:Tt,revertLane:lt.revertLane,gesture:lt.gesture,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null},W===null?(C=W=ft,y=f):W=W.next=ft,he.lanes|=Tt,ka|=Tt;lt=lt.next}while(lt!==null&&lt!==n);if(W===null?y=f:W.next=C,!$n(f,e.memoizedState)&&(fn=!0,yt&&(a=rr,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=W,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function mf(e){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);$n(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Dm(e,n,a){var o=he,u=sn(),f=we;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!$n((ke||u).memoizedState,a);if(y&&(u.memoizedState=a,fn=!0),u=u.queue,vf(Lm.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,dr(9,{destroy:void 0},Um.bind(null,o,u,a,n),null),qe===null)throw Error(s(349));f||(ra&127)!==0||Nm(o,n,a)}return a}function Nm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=Xl(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Um(e,n,a,o){n.value=a,n.getSnapshot=o,Om(n)&&Pm(e)}function Lm(e,n,a){return a(function(){Om(n)&&Pm(e)})}function Om(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function Pm(e){var n=ms(e,2);n!==null&&Zn(n,e,2)}function gf(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),Es){Ht(!0);try{a()}finally{Ht(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:e},n}function Fm(e,n,a,o){return e.baseState=a,pf(e,ke,typeof o=="function"?o:oa)}function fS(e,n,a,o,u){if(Zl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};N.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Bm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Bm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=N.T,y={};N.T=y;try{var C=a(u,o),W=N.S;W!==null&&W(y,C),zm(e,n,C)}catch(lt){_f(e,n,lt)}finally{f!==null&&y.types!==null&&(f.types=y.types),N.T=f}}else try{f=a(u,o),zm(e,n,f)}catch(lt){_f(e,n,lt)}}function zm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Im(e,n,o)},function(o){return _f(e,n,o)}):Im(e,n,a)}function Im(e,n,a){n.status="fulfilled",n.value=a,Hm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Bm(e,a)))}function _f(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Hm(n),n=n.next;while(n!==o)}e.action=null}function Hm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Gm(e,n){return n}function Vm(e,n){if(we){var a=qe.formState;if(a!==null){t:{var o=he;if(we){if(Ye){e:{for(var u=Ye,f=mi;u.nodeType!==8;){if(!f){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ye=_i(u.nextSibling),o=u.data==="F!";break t}}Oa(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gm,lastRenderedState:n},a.queue=o,a=o0.bind(null,he,o),o.dispatch=a,o=gf(!1),f=bf.bind(null,he,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=fS.bind(null,he,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function km(e){var n=sn();return Xm(n,ke,e)}function Xm(e,n,a){if(n=pf(e,n,Gm)[0],e=jl(oa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Mo(n)}catch(y){throw y===or?Fl:y}else o=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,dr(9,{destroy:void 0},dS.bind(null,u,a),null)),[o,f,e]}function dS(e,n){e.action=n}function Wm(e){var n=sn(),a=ke;if(a!==null)return Xm(n,a,e);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function dr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=he.updateQueue,n===null&&(n=Xl(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function jm(){return sn().memoizedState}function ql(e,n,a,o){var u=Gn();he.flags|=e,u.memoizedState=dr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Yl(e,n,a,o){var u=sn();o=o===void 0?null:o;var f=u.memoizedState.inst;ke!==null&&o!==null&&lf(o,ke.memoizedState.deps)?u.memoizedState=dr(n,f,a,o):(he.flags|=e,u.memoizedState=dr(1|n,f,a,o))}function qm(e,n){ql(8390656,8,e,n)}function vf(e,n){Yl(2048,8,e,n)}function hS(e){he.flags|=4;var n=he.updateQueue;if(n===null)n=Xl(),he.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Ym(e){var n=sn().memoizedState;return hS({ref:n,nextImpl:e}),function(){if((Be&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Zm(e,n){return Yl(4,2,e,n)}function Km(e,n){return Yl(4,4,e,n)}function Qm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Jm(e,n,a){a=a!=null?a.concat([e]):null,Yl(4,4,Qm.bind(null,n,e),a)}function xf(){}function $m(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&lf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function t0(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&lf(n,o[1]))return o[0];if(o=e(),Es){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[o,n],o}function Sf(e,n,a){return a===void 0||(ra&1073741824)!==0&&(Re&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=eg(),he.lanes|=e,ka|=e,a)}function e0(e,n,a,o){return $n(a,n)?a:cr.current!==null?(e=Sf(e,a,o),$n(e,n)||(fn=!0),e):(ra&42)===0||(ra&1073741824)!==0&&(Re&261930)===0?(fn=!0,e.memoizedState=a):(e=eg(),he.lanes|=e,ka|=e,n)}function n0(e,n,a,o,u){var f=B.p;B.p=f!==0&&8>f?f:8;var y=N.T,C={};N.T=C,bf(e,!1,n,a);try{var W=u(),lt=N.S;if(lt!==null&&lt(C,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var yt=lS(W,o);bo(e,n,yt,si(e))}else bo(e,n,o,si(e))}catch(Tt){bo(e,n,{then:function(){},status:"rejected",reason:Tt},si())}finally{B.p=f,y!==null&&C.types!==null&&(y.types=C.types),N.T=y}}function pS(){}function yf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=i0(e).queue;n0(e,u,n,X,a===null?pS:function(){return a0(e),a(o)})}function i0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:X},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:oa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function a0(e){var n=i0(e);n.next===null&&(n=e.alternate.memoizedState),bo(e,n.next.queue,{},si())}function Mf(){return bn(Ho)}function s0(){return sn().memoizedState}function r0(){return sn().memoizedState}function mS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=Ba(a);var o=za(n,e,a);o!==null&&(Zn(o,n,a),vo(o,n,a)),n={cache:Ku()},e.payload=n;return}n=n.return}}function gS(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Zl(e)?l0(n,a):(a=Iu(e,n,a,o),a!==null&&(Zn(a,e,o),c0(a,n,o)))}function o0(e,n,a){var o=si();bo(e,n,a,o)}function bo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zl(e))l0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,C=f(y,a);if(u.hasEagerState=!0,u.eagerState=C,$n(C,y))return wl(e,n,u,0),qe===null&&Cl(),!1}catch{}finally{}if(a=Iu(e,n,u,o),a!==null)return Zn(a,e,o),c0(a,n,o),!0}return!1}function bf(e,n,a,o){if(o={lane:2,revertLane:ed(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Zl(e)){if(n)throw Error(s(479))}else n=Iu(e,a,o,2),n!==null&&Zn(n,e,2)}function Zl(e){var n=e.alternate;return e===he||n!==null&&n===he}function l0(e,n){ur=Vl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function c0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ks(e,a)}}var Eo={readContext:bn,use:Wl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};Eo.useEffectEvent=tn;var u0={readContext:bn,use:Wl,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:bn,useEffect:qm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,ql(4194308,4,Qm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return ql(4194308,4,e,n)},useInsertionEffect:function(e,n){ql(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var o=e();if(Es){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(Es){Ht(!0);try{a(n)}finally{Ht(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=gS.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=gf(e);var n=e.queue,a=o0.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:xf,useDeferredValue:function(e,n){var a=Gn();return Sf(a,e,n)},useTransition:function(){var e=gf(!1);return e=n0.bind(null,he,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=he,u=Gn();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(Re&127)!==0||Nm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,qm(Lm.bind(null,o,f,e),[e]),o.flags|=2048,dr(9,{destroy:void 0},Um.bind(null,o,f,a,n),null),a},useId:function(){var e=Gn(),n=qe.identifierPrefix;if(we){var a=Fi,o=Pi;a=(o&~(1<<32-It(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=kl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=cS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Mf,useFormState:Vm,useActionState:Vm,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=bf.bind(null,he,!0,a),a.dispatch=n,[e,n]},useMemoCache:hf,useCacheRefresh:function(){return Gn().memoizedState=mS.bind(null,he)},useEffectEvent:function(e){var n=Gn(),a={impl:e};return n.memoizedState=a,function(){if((Be&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ef={readContext:bn,use:Wl,useCallback:$m,useContext:bn,useEffect:vf,useImperativeHandle:Jm,useInsertionEffect:Zm,useLayoutEffect:Km,useMemo:t0,useReducer:jl,useRef:jm,useState:function(){return jl(oa)},useDebugValue:xf,useDeferredValue:function(e,n){var a=sn();return e0(a,ke.memoizedState,e,n)},useTransition:function(){var e=jl(oa)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:Mo(e),n]},useSyncExternalStore:Dm,useId:s0,useHostTransitionStatus:Mf,useFormState:km,useActionState:km,useOptimistic:function(e,n){var a=sn();return Fm(a,ke,e,n)},useMemoCache:hf,useCacheRefresh:r0};Ef.useEffectEvent=Ym;var f0={readContext:bn,use:Wl,useCallback:$m,useContext:bn,useEffect:vf,useImperativeHandle:Jm,useInsertionEffect:Zm,useLayoutEffect:Km,useMemo:t0,useReducer:mf,useRef:jm,useState:function(){return mf(oa)},useDebugValue:xf,useDeferredValue:function(e,n){var a=sn();return ke===null?Sf(a,e,n):e0(a,ke.memoizedState,e,n)},useTransition:function(){var e=mf(oa)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:Mo(e),n]},useSyncExternalStore:Dm,useId:s0,useHostTransitionStatus:Mf,useFormState:Wm,useActionState:Wm,useOptimistic:function(e,n){var a=sn();return ke!==null?Fm(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:hf,useCacheRefresh:r0};f0.useEffectEvent=Ym;function Tf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:S({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Af={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ba(o);u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(Zn(n,e,o),vo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ba(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(Zn(n,e,o),vo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=Ba(a);o.tag=2,n!=null&&(o.callback=n),n=za(e,o,a),n!==null&&(Zn(n,e,a),vo(n,e,a))}};function d0(e,n,a,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!co(a,o)||!co(u,f):!0}function h0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Af.enqueueReplaceState(n,n.state,null)}function Ts(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=S({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function p0(e){Rl(e)}function m0(e){console.error(e)}function g0(e){Rl(e)}function Kl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function _0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Rf(e,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Kl(e,n)},a}function v0(e){return e=Ba(e),e.tag=3,e}function x0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){_0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){_0(n,a,o),typeof u!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function _S(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ar(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?lc():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Bl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Jf(e,o,u)),!1;case 22:return a.flags|=65536,o===Bl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Jf(e,o,u)),!1}throw Error(s(435,a.tag))}return Jf(e,o,u),lc(),!1}if(we)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Wu&&(e=Error(s(422),{cause:o}),ho(di(e,a)))):(o!==Wu&&(n=Error(s(423),{cause:o}),ho(di(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=di(o,a),u=Rf(e.stateNode,o,u),nf(e,u),en!==4&&(en=2)),!1;var f=Error(s(520),{cause:o});if(f=di(f,a),Uo===null?Uo=[f]:Uo.push(f),en!==4&&(en=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Rf(a.stateNode,o,e),nf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Xa===null||!Xa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=v0(u),x0(u,e,a,o),nf(a,u),!1}a=a.return}while(a!==null);return!1}var Cf=Error(s(461)),fn=!1;function En(e,n,a,o){n.child=e===null?bm(n,null,a,o):bs(n,e.child,a,o)}function S0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var C in o)C!=="ref"&&(y[C]=o[C])}else y=o;return xs(n),o=cf(e,n,a,y,f,u),C=uf(),e!==null&&!fn?(ff(e,n,u),la(e,n,u)):(we&&C&&ku(n),n.flags|=1,En(e,n,o,u),n.child)}function y0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Hu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,M0(e,n,f,o,u)):(e=Nl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ff(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:co,a(y,o)&&e.ref===n.ref)return la(e,n,u)}return n.flags|=1,e=na(f,o),e.ref=n.ref,e.return=n,n.child=e}function M0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(co(f,o)&&e.ref===n.ref)if(fn=!1,n.pendingProps=o=f,Ff(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,la(e,n,u)}return wf(e,n,a,o,u)}function b0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return E0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Pl(n,f!==null?f.cachePool:null),f!==null?Am(n,f):sf(),Rm(n);else return o=n.lanes=536870912,E0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Pl(n,f.cachePool),Am(n,f),Ha(),n.memoizedState=null):(e!==null&&Pl(n,null),sf(),Ha());return En(e,n,u,a),n.child}function To(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function E0(e,n,a,o,u){var f=Ju();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Pl(n,null),sf(),Rm(n),e!==null&&ar(e,n,o,!0),n.childLanes=u,null}function Ql(e,n){return n=$l({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function T0(e,n,a){return bs(n,e.child,null,a),e=Ql(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function vS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(we){if(o.mode==="hidden")return e=Ql(n,o),n.lanes=536870912,To(null,e);if(of(n),(e=Ye)?(e=Bg(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Pi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=lm(e),a.return=n,n.child=a,Mn=n,Ye=null)):e=null,e===null)throw Oa(n);return n.lanes=536870912,null}return Ql(n,o)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(of(n),u)if(n.flags&256)n.flags&=-257,n=T0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||ar(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(o=qe,o!==null&&(y=gl(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,ms(e,y),Zn(o,e,y),Cf;lc(),n=T0(e,n,a)}else e=f.treeContext,Ye=_i(y.nextSibling),Mn=n,we=!0,La=null,mi=!1,e!==null&&fm(n,e),n=Ql(n,o),n.flags|=4096;return n}return e=na(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Jl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function wf(e,n,a,o,u){return xs(n),a=cf(e,n,a,o,void 0,u),o=uf(),e!==null&&!fn?(ff(e,n,u),la(e,n,u)):(we&&o&&ku(n),n.flags|=1,En(e,n,a,u),n.child)}function A0(e,n,a,o,u,f){return xs(n),n.updateQueue=null,a=wm(n,o,a,u),Cm(e),o=uf(),e!==null&&!fn?(ff(e,n,f),la(e,n,f)):(we&&o&&ku(n),n.flags|=1,En(e,n,a,f),n.child)}function R0(e,n,a,o,u){if(xs(n),n.stateNode===null){var f=tr,y=a.contextType;typeof y=="object"&&y!==null&&(f=bn(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Af,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},tf(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?bn(y):tr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Tf(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Af.enqueueReplaceState(f,f.state,null),So(n,o,f,u),xo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var C=n.memoizedProps,W=Ts(a,C);f.props=W;var lt=f.context,yt=a.contextType;y=tr,typeof yt=="object"&&yt!==null&&(y=bn(yt));var Tt=a.getDerivedStateFromProps;yt=typeof Tt=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,yt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||lt!==y)&&h0(n,f,o,y),Fa=!1;var ft=n.memoizedState;f.state=ft,So(n,o,f,u),xo(),lt=n.memoizedState,C||ft!==lt||Fa?(typeof Tt=="function"&&(Tf(n,a,Tt,o),lt=n.memoizedState),(W=Fa||d0(n,a,W,o,ft,lt,y))?(yt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=lt),f.props=o,f.state=lt,f.context=y,o=W):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,ef(e,n),y=n.memoizedProps,yt=Ts(a,y),f.props=yt,Tt=n.pendingProps,ft=f.context,lt=a.contextType,W=tr,typeof lt=="object"&&lt!==null&&(W=bn(lt)),C=a.getDerivedStateFromProps,(lt=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==Tt||ft!==W)&&h0(n,f,o,W),Fa=!1,ft=n.memoizedState,f.state=ft,So(n,o,f,u),xo();var _t=n.memoizedState;y!==Tt||ft!==_t||Fa||e!==null&&e.dependencies!==null&&Ll(e.dependencies)?(typeof C=="function"&&(Tf(n,a,C,o),_t=n.memoizedState),(yt=Fa||d0(n,a,yt,o,ft,_t,W)||e!==null&&e.dependencies!==null&&Ll(e.dependencies))?(lt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,_t,W),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,_t,W)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&ft===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ft===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=_t),f.props=o,f.state=_t,f.context=W,o=yt):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&ft===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ft===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Jl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=bs(n,e.child,null,u),n.child=bs(n,null,a,u)):En(e,n,a,u),n.memoizedState=f.state,e=n.child):e=la(e,n,u),e}function C0(e,n,a,o){return _s(),n.flags|=256,En(e,n,a,o),n.child}var Df={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nf(e){return{baseLanes:e,cachePool:_m()}}function Uf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function w0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?Ia(n):Ha(),(e=Ye)?(e=Bg(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ua!==null?{id:Pi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=lm(e),a.return=n,n.child=a,Mn=n,Ye=null)):e=null,e===null)throw Oa(n);return pd(e)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(Ha(),u=n.mode,C=$l({mode:"hidden",children:C},u),o=gs(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=Nf(a),o.childLanes=Uf(e,y,a),n.memoizedState=Df,To(null,o)):(Ia(n),Lf(n,C))}var W=e.memoizedState;if(W!==null&&(C=W.dehydrated,C!==null)){if(f)n.flags&256?(Ia(n),n.flags&=-257,n=Of(e,n,a)):n.memoizedState!==null?(Ha(),n.child=e.child,n.flags|=128,n=null):(Ha(),C=o.fallback,u=n.mode,o=$l({mode:"visible",children:o.children},u),C=gs(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,bs(n,e.child,null,a),o=n.child,o.memoizedState=Nf(a),o.childLanes=Uf(e,y,a),n.memoizedState=Df,n=To(null,o));else if(Ia(n),pd(C)){if(y=C.nextSibling&&C.nextSibling.dataset,y)var lt=y.dgst;y=lt,o=Error(s(419)),o.stack="",o.digest=y,ho({value:o,source:null,stack:null}),n=Of(e,n,a)}else if(fn||ar(e,n,a,!1),y=(a&e.childLanes)!==0,fn||y){if(y=qe,y!==null&&(o=gl(y,a),o!==0&&o!==W.retryLane))throw W.retryLane=o,ms(e,o),Zn(y,e,o),Cf;hd(C)||lc(),n=Of(e,n,a)}else hd(C)?(n.flags|=192,n.child=e.child,n=null):(e=W.treeContext,Ye=_i(C.nextSibling),Mn=n,we=!0,La=null,mi=!1,e!==null&&fm(n,e),n=Lf(n,o.children),n.flags|=4096);return n}return u?(Ha(),C=o.fallback,u=n.mode,W=e.child,lt=W.sibling,o=na(W,{mode:"hidden",children:o.children}),o.subtreeFlags=W.subtreeFlags&65011712,lt!==null?C=na(lt,C):(C=gs(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,To(null,o),o=n.child,C=e.child.memoizedState,C===null?C=Nf(a):(u=C.cachePool,u!==null?(W=cn._currentValue,u=u.parent!==W?{parent:W,pool:W}:u):u=_m(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=Uf(e,y,a),n.memoizedState=Df,To(e.child,o)):(Ia(n),a=e.child,e=a.sibling,a=na(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Lf(e,n){return n=$l({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function $l(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function Of(e,n,a){return bs(n,e.child,null,a),e=Lf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function D0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Yu(e.return,n,a)}function Pf(e,n,a,o,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function N0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=an.current,C=(y&2)!==0;if(C?(y=y&1|2,n.flags|=128):y&=1,et(an,y),En(e,n,o,a),o=we?fo:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&D0(e,a,n);else if(e.tag===19)D0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Gl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Pf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Gl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Pf(n,!0,a,null,f,o);break;case"together":Pf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function la(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ka|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ar(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=na(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=na(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ff(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ll(e)))}function xS(e,n,a){switch(n.tag){case 3:ut(n,n.stateNode.containerInfo),Pa(n,cn,e.memoizedState.cache),_s();break;case 27:case 5:Ot(n);break;case 4:ut(n,n.stateNode.containerInfo);break;case 10:Pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,of(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?w0(e,n,a):(Ia(n),e=la(e,n,a),e!==null?e.sibling:null);Ia(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ar(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return N0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),et(an,an.current),o)break;return null;case 22:return n.lanes=0,b0(e,n,a,n.pendingProps);case 24:Pa(n,cn,e.memoizedState.cache)}return la(e,n,a)}function U0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Ff(e,a)&&(n.flags&128)===0)return fn=!1,xS(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,we&&(n.flags&1048576)!==0&&um(n,fo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ys(n.elementType),n.type=e,typeof e=="function")Hu(e)?(o=Ts(e,o),n.tag=1,n=R0(null,n,e,o,a)):(n.tag=0,n=wf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=S0(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=y0(null,n,e,o,a);break t}}throw n=at(e)||e,Error(s(306,n,""))}}return n;case 0:return wf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ts(o,n.pendingProps),R0(e,n,o,u,a);case 3:t:{if(ut(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,ef(e,n),So(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Pa(n,cn,o),o!==f.cache&&Zu(n,[cn],a,!0),xo(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=C0(e,n,o,a);break t}else if(o!==u){u=di(Error(s(424)),n),ho(u),n=C0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=_i(e.firstChild),Mn=n,we=!0,La=null,mi=!0,a=bm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(_s(),o===u){n=la(e,n,a);break t}En(e,n,o,a)}n=n.child}return n;case 26:return Jl(e,n),e===null?(a=kg(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,o=mc(Z.current).createElement(a),o[rn]=n,o[pn]=e,Tn(o,a,e),K(o),n.stateNode=o):n.memoizedState=kg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ot(n),e===null&&we&&(o=n.stateNode=Hg(n.type,n.pendingProps,Z.current),Mn=n,mi=!0,u=Ye,Ya(n.type)?(md=u,Ye=_i(o.firstChild)):Ye=u),En(e,n,n.pendingProps.children,a),Jl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((u=o=Ye)&&(o=ZS(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,Mn=n,Ye=_i(o.firstChild),mi=!1,u=!0):u=!1),u||Oa(n)),Ot(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,ud(u,f)?o=null:y!==null&&ud(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=cf(e,n,uS,null,null,a),Ho._currentValue=u),Jl(e,n),En(e,n,o,a),n.child;case 6:return e===null&&we&&((e=a=Ye)&&(a=KS(a,n.pendingProps,mi),a!==null?(n.stateNode=a,Mn=n,Ye=null,e=!0):e=!1),e||Oa(n)),null;case 13:return w0(e,n,a);case 4:return ut(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=bs(n,null,o,a):En(e,n,o,a),n.child;case 11:return S0(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Pa(n,n.type,o.value),En(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,xs(n),u=bn(u),o=o(u),n.flags|=1,En(e,n,o,a),n.child;case 14:return y0(e,n,n.type,n.pendingProps,a);case 15:return M0(e,n,n.type,n.pendingProps,a);case 19:return N0(e,n,a);case 31:return vS(e,n,a);case 22:return b0(e,n,a,n.pendingProps);case 24:return xs(n),o=bn(cn),e===null?(u=Ju(),u===null&&(u=qe,f=Ku(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},tf(n),Pa(n,cn,u)):((e.lanes&a)!==0&&(ef(e,n),So(n,null,null,a),xo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Pa(n,cn,o)):(o=f.cache,Pa(n,cn,o),o!==u.cache&&Zu(n,[cn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ca(e){e.flags|=4}function Bf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(sg())e.flags|=8192;else throw Ms=Bl,$u}else e.flags&=-16777217}function L0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Yg(n))if(sg())e.flags|=8192;else throw Ms=Bl,$u}function tc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ie():536870912,e.lanes|=n,gr|=n)}function Ao(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function SS(e,n,a){var o=n.pendingProps;switch(Xu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),sa(cn),Mt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ir(n)?ca(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ju())),Ze(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ca(n),f!==null?(Ze(n),L0(n,f)):(Ze(n),Bf(n,u,null,o,a))):f?f!==e.memoizedState?(ca(n),Ze(n),L0(n,f)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ca(n),Ze(n),Bf(n,u,e,o,a)),null;case 27:if(wt(n),a=Z.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=pt.current,ir(n)?dm(n):(e=Hg(u,o,a),n.stateNode=e,ca(n))}return Ze(n),null;case 5:if(wt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(f=pt.current,ir(n))dm(n);else{var y=mc(Z.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[rn]=n,f[pn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(Tn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ca(n)}}return Ze(n),Bf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ca(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=Z.current,ir(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Mn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||wg(e.nodeValue,a)),e||Oa(n,!0)}else e=mc(e).createTextNode(o),e[rn]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ir(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[rn]=n}else _s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ir(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[rn]=n}else _s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),tc(n,n.updateQueue),Ze(n),null);case 4:return Mt(),e===null&&sd(n.stateNode.containerInfo),Ze(n),null;case 10:return sa(n.type),Ze(n),null;case 19:if(k(an),o=n.memoizedState,o===null)return Ze(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Ao(o,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Gl(e),f!==null){for(n.flags|=128,Ao(o,!1),e=f.updateQueue,n.updateQueue=e,tc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)om(a,e),a=a.sibling;return et(an,an.current&1|2),we&&ia(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>sc&&(n.flags|=128,u=!0,Ao(o,!1),n.lanes=4194304)}else{if(!u)if(e=Gl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,tc(n,e),Ao(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!we)return Ze(n),null}else 2*T()-o.renderingStartTime>sc&&a!==536870912&&(n.flags|=128,u=!0,Ao(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=an.current,et(an,u?a&1|2:a&1),we&&ia(n,o.treeForkCount),e):(Ze(n),null);case 22:case 23:return ni(n),rf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&tc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&k(Ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),sa(cn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function yS(e,n){switch(Xu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return sa(cn),Mt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return wt(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));_s()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));_s()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return k(an),null;case 4:return Mt(),null;case 10:return sa(n.type),null;case 22:case 23:return ni(n),rf(),e!==null&&k(Ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return sa(cn),null;case 25:return null;default:return null}}function O0(e,n){switch(Xu(n),n.tag){case 3:sa(cn),Mt();break;case 26:case 27:case 5:wt(n);break;case 4:Mt();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:k(an);break;case 10:sa(n.type);break;case 22:case 23:ni(n),rf(),e!==null&&k(Ss);break;case 24:sa(cn)}}function Ro(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(C){Ge(n,n.return,C)}}function Ga(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,C=y.destroy;if(C!==void 0){y.destroy=void 0,u=n;var W=a,lt=C;try{lt()}catch(yt){Ge(u,W,yt)}}}o=o.next}while(o!==f)}}catch(yt){Ge(n,n.return,yt)}}function P0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Tm(n,a)}catch(o){Ge(e,e.return,o)}}}function F0(e,n,a){a.props=Ts(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function Co(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function Bi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function B0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function zf(e,n,a){try{var o=e.stateNode;kS(o,e.type,a,n),o[pn]=n}catch(u){Ge(e,e.return,u)}}function z0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function If(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||z0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ta));else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Hf(e,n,a),e=e.sibling;e!==null;)Hf(e,n,a),e=e.sibling}function ec(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ec(e,n,a),e=e.sibling;e!==null;)ec(e,n,a),e=e.sibling}function I0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Tn(n,o,a),n[rn]=e,n[pn]=a}catch(f){Ge(e,e.return,f)}}var ua=!1,dn=!1,Gf=!1,H0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function MS(e,n){if(e=e.containerInfo,ld=Mc,e=Jp(e),Lu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,C=-1,W=-1,lt=0,yt=0,Tt=e,ft=null;e:for(;;){for(var _t;Tt!==a||u!==0&&Tt.nodeType!==3||(C=y+u),Tt!==f||o!==0&&Tt.nodeType!==3||(W=y+o),Tt.nodeType===3&&(y+=Tt.nodeValue.length),(_t=Tt.firstChild)!==null;)ft=Tt,Tt=_t;for(;;){if(Tt===e)break e;if(ft===a&&++lt===u&&(C=y),ft===f&&++yt===o&&(W=y),(_t=Tt.nextSibling)!==null)break;Tt=ft,ft=Tt.parentNode}Tt=_t}a=C===-1||W===-1?null:{start:C,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(cd={focusedElem:e,selectionRange:a},Mc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Zt=Ts(a.type,u);e=o.getSnapshotBeforeUpdate(Zt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(se){Ge(a,a.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)dd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":dd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function G0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:da(e,a),o&4&&Ro(5,a);break;case 1:if(da(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Ge(a,a.return,y)}else{var u=Ts(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ge(a,a.return,y)}}o&64&&P0(a),o&512&&Co(a,a.return);break;case 3:if(da(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Tm(e,n)}catch(y){Ge(a,a.return,y)}}break;case 27:n===null&&o&4&&I0(a);case 26:case 5:da(e,a),n===null&&o&4&&B0(a),o&512&&Co(a,a.return);break;case 12:da(e,a);break;case 31:da(e,a),o&4&&X0(e,a);break;case 13:da(e,a),o&4&&W0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=NS.bind(null,a),QS(e,a))));break;case 22:if(o=a.memoizedState!==null||ua,!o){n=n!==null&&n.memoizedState!==null||dn,u=ua;var f=dn;ua=o,(dn=n)&&!f?ha(e,a,(a.subtreeFlags&8772)!==0):da(e,a),ua=u,dn=f}break;case 30:break;default:da(e,a)}}function V0(e){var n=e.alternate;n!==null&&(e.alternate=null,V0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&eo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Wn=!1;function fa(e,n,a){for(a=a.child;a!==null;)k0(e,n,a),a=a.sibling}function k0(e,n,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Ct,a)}catch{}switch(a.tag){case 26:dn||Bi(a,n),fa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Bi(a,n);var o=$e,u=Wn;Ya(a.type)&&($e=a.stateNode,Wn=!1),fa(e,n,a),Bo(a.stateNode),$e=o,Wn=u;break;case 5:dn||Bi(a,n);case 6:if(o=$e,u=Wn,$e=null,fa(e,n,a),$e=o,Wn=u,$e!==null)if(Wn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:$e!==null&&(Wn?(e=$e,Pg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Er(e)):Pg($e,a.stateNode));break;case 4:o=$e,u=Wn,$e=a.stateNode.containerInfo,Wn=!0,fa(e,n,a),$e=o,Wn=u;break;case 0:case 11:case 14:case 15:Ga(2,a,n),dn||Ga(4,a,n),fa(e,n,a);break;case 1:dn||(Bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&F0(a,n,o)),fa(e,n,a);break;case 21:fa(e,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,fa(e,n,a),dn=o;break;default:fa(e,n,a)}}function X0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Er(e)}catch(a){Ge(n,n.return,a)}}}function W0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Er(e)}catch(a){Ge(n,n.return,a)}}function bS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new H0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new H0),n;default:throw Error(s(435,e.tag))}}function nc(e,n){var a=bS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=US.bind(null,e,o);o.then(u,u)}})}function jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,y=n,C=y;t:for(;C!==null;){switch(C.tag){case 27:if(Ya(C.type)){$e=C.stateNode,Wn=!1;break t}break;case 5:$e=C.stateNode,Wn=!1;break t;case 3:case 4:$e=C.stateNode.containerInfo,Wn=!0;break t}C=C.return}if($e===null)throw Error(s(160));k0(f,y,u),$e=null,Wn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)j0(n,e),n=n.sibling}var Ri=null;function j0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),qn(e),o&4&&(Ga(3,e,e.return),Ro(3,e),Ga(5,e,e.return));break;case 1:jn(n,e),qn(e),o&512&&(dn||a===null||Bi(a,a.return)),o&64&&ua&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ri;if(jn(n,e),qn(e),o&512&&(dn||a===null||Bi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[us]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Tn(f,o,a),f[rn]=e,K(f),o=f;break t;case"link":var y=jg("link","href",u).get(o+(a.href||""));if(y){for(var C=0;C<y.length;C++)if(f=y[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(C,1);break e}}f=u.createElement(o),Tn(f,o,a),u.head.appendChild(f);break;case"meta":if(y=jg("meta","content",u).get(o+(a.content||""))){for(C=0;C<y.length;C++)if(f=y[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(C,1);break e}}f=u.createElement(o),Tn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[rn]=e,K(f),o=f}e.stateNode=o}else qg(u,e.type,e.stateNode);else e.stateNode=Wg(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?qg(u,e.type,e.stateNode):Wg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&zf(e,e.memoizedProps,a.memoizedProps)}break;case 27:jn(n,e),qn(e),o&512&&(dn||a===null||Bi(a,a.return)),a!==null&&o&4&&zf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,e),qn(e),o&512&&(dn||a===null||Bi(a,a.return)),e.flags&32){u=e.stateNode;try{Hn(u,"")}catch(Zt){Ge(e,e.return,Zt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,zf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Gf=!0);break;case 6:if(jn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Zt){Ge(e,e.return,Zt)}}break;case 3:if(vc=null,u=Ri,Ri=gc(n.containerInfo),jn(n,e),Ri=u,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Er(n.containerInfo)}catch(Zt){Ge(e,e.return,Zt)}Gf&&(Gf=!1,q0(e));break;case 4:o=Ri,Ri=gc(e.stateNode.containerInfo),jn(n,e),qn(e),Ri=o;break;case 12:jn(n,e),qn(e);break;case 31:jn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,nc(e,o)));break;case 13:jn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ac=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,nc(e,o)));break;case 22:u=e.memoizedState!==null;var W=a!==null&&a.memoizedState!==null,lt=ua,yt=dn;if(ua=lt||u,dn=yt||W,jn(n,e),dn=yt,ua=lt,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||W||ua||dn||As(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){W=a=n;try{if(f=W.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{C=W.stateNode;var Tt=W.memoizedProps.style,ft=Tt!=null&&Tt.hasOwnProperty("display")?Tt.display:null;C.style.display=ft==null||typeof ft=="boolean"?"":(""+ft).trim()}}catch(Zt){Ge(W,W.return,Zt)}}}else if(n.tag===6){if(a===null){W=n;try{W.stateNode.nodeValue=u?"":W.memoizedProps}catch(Zt){Ge(W,W.return,Zt)}}}else if(n.tag===18){if(a===null){W=n;try{var _t=W.stateNode;u?Fg(_t,!0):Fg(W.stateNode,!1)}catch(Zt){Ge(W,W.return,Zt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,nc(e,a))));break;case 19:jn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,nc(e,o)));break;case 30:break;case 21:break;default:jn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(z0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=If(e);ec(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(Hn(y,""),a.flags&=-33);var C=If(e);ec(e,C,y);break;case 3:case 4:var W=a.stateNode.containerInfo,lt=If(e);Hf(e,lt,W);break;default:throw Error(s(161))}}catch(yt){Ge(e,e.return,yt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function q0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;q0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function da(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)G0(e,n.alternate,n),n=n.sibling}function As(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ga(4,n,n.return),As(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&F0(n,n.return,a),As(n);break;case 27:Bo(n.stateNode);case 26:case 5:Bi(n,n.return),As(n);break;case 22:n.memoizedState===null&&As(n);break;case 30:As(n);break;default:As(n)}e=e.sibling}}function ha(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:ha(u,f,a),Ro(4,f);break;case 1:if(ha(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(lt){Ge(o,o.return,lt)}if(o=f,u=o.updateQueue,u!==null){var C=o.stateNode;try{var W=u.shared.hiddenCallbacks;if(W!==null)for(u.shared.hiddenCallbacks=null,u=0;u<W.length;u++)Em(W[u],C)}catch(lt){Ge(o,o.return,lt)}}a&&y&64&&P0(f),Co(f,f.return);break;case 27:I0(f);case 26:case 5:ha(u,f,a),a&&o===null&&y&4&&B0(f),Co(f,f.return);break;case 12:ha(u,f,a);break;case 31:ha(u,f,a),a&&y&4&&X0(u,f);break;case 13:ha(u,f,a),a&&y&4&&W0(u,f);break;case 22:f.memoizedState===null&&ha(u,f,a),Co(f,f.return);break;case 30:break;default:ha(u,f,a)}n=n.sibling}}function Vf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&po(a))}function kf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e))}function Ci(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Y0(e,n,a,o),n=n.sibling}function Y0(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,o),u&2048&&Ro(9,n);break;case 1:Ci(e,n,a,o);break;case 3:Ci(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&po(e)));break;case 12:if(u&2048){Ci(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,C=f.onPostCommit;typeof C=="function"&&C(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(W){Ge(n,n.return,W)}}else Ci(e,n,a,o);break;case 31:Ci(e,n,a,o);break;case 13:Ci(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(e,n,a,o):wo(e,n):f._visibility&2?Ci(e,n,a,o):(f._visibility|=2,hr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Vf(y,n);break;case 24:Ci(e,n,a,o),u&2048&&kf(n.alternate,n);break;default:Ci(e,n,a,o)}}function hr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,C=a,W=o,lt=y.flags;switch(y.tag){case 0:case 11:case 15:hr(f,y,C,W,u),Ro(8,y);break;case 23:break;case 22:var yt=y.stateNode;y.memoizedState!==null?yt._visibility&2?hr(f,y,C,W,u):wo(f,y):(yt._visibility|=2,hr(f,y,C,W,u)),u&&lt&2048&&Vf(y.alternate,y);break;case 24:hr(f,y,C,W,u),u&&lt&2048&&kf(y.alternate,y);break;default:hr(f,y,C,W,u)}n=n.sibling}}function wo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:wo(a,o),u&2048&&Vf(o.alternate,o);break;case 24:wo(a,o),u&2048&&kf(o.alternate,o);break;default:wo(a,o)}n=n.sibling}}var Do=8192;function pr(e,n,a){if(e.subtreeFlags&Do)for(e=e.child;e!==null;)Z0(e,n,a),e=e.sibling}function Z0(e,n,a){switch(e.tag){case 26:pr(e,n,a),e.flags&Do&&e.memoizedState!==null&&cy(a,Ri,e.memoizedState,e.memoizedProps);break;case 5:pr(e,n,a);break;case 3:case 4:var o=Ri;Ri=gc(e.stateNode.containerInfo),pr(e,n,a),Ri=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Do,Do=16777216,pr(e,n,a),Do=o):pr(e,n,a));break;default:pr(e,n,a)}}function K0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function No(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,J0(o,e)}K0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Q0(e),e=e.sibling}function Q0(e){switch(e.tag){case 0:case 11:case 15:No(e),e.flags&2048&&Ga(9,e,e.return);break;case 3:No(e);break;case 12:No(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ic(e)):No(e);break;default:No(e)}}function ic(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,J0(o,e)}K0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),ic(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ic(n));break;default:ic(n)}e=e.sibling}}function J0(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:po(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var u=o.sibling,f=o.return;if(V0(o),o===a){xn=null;break t}if(u!==null){u.return=f,xn=u;break t}xn=f}}}var ES={getCacheForType:function(e){var n=bn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return bn(cn).controller.signal}},TS=typeof WeakMap=="function"?WeakMap:Map,Be=0,qe=null,Me=null,Re=0,He=0,ii=null,Va=!1,mr=!1,Xf=!1,pa=0,en=0,ka=0,Rs=0,Wf=0,ai=0,gr=0,Uo=null,Yn=null,jf=!1,ac=0,$0=0,sc=1/0,rc=null,Xa=null,gn=0,Wa=null,_r=null,ma=0,qf=0,Yf=null,tg=null,Lo=0,Zf=null;function si(){return(Be&2)!==0&&Re!==0?Re&-Re:N.T!==null?ed():Oi()}function eg(){if(ai===0)if((Re&536870912)===0||we){var e=Nt;Nt<<=1,(Nt&3932160)===0&&(Nt=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function Zn(e,n,a){(e===qe&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(vr(e,0),ja(e,Re,ai,!1)),Bn(e,a),((Be&2)===0||e!==qe)&&(e===qe&&((Be&2)===0&&(Rs|=a),en===4&&ja(e,Re,ai,!1)),zi(e))}function ng(e,n,a){if((Be&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||jt(e,n),u=o?CS(e,n):Qf(e,n,!0),f=o;do{if(u===0){mr&&!o&&ja(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!AS(a)){u=Qf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var C=e;u=Uo;var W=C.current.memoizedState.isDehydrated;if(W&&(vr(C,y).flags|=256),y=Qf(C,y,!1),y!==2){if(Xf&&!W){C.errorRecoveryDisabledLanes|=f,Rs|=f,u=4;break t}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){vr(e,0),ja(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ja(o,n,ai,!Va);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=ac+300-T(),10<u)){if(ja(o,n,ai,!Va),xt(o,0,!0)!==0)break t;ma=n,o.timeoutHandle=Lg(ig.bind(null,o,a,Yn,rc,jf,n,ai,Rs,gr,Va,f,"Throttled",-0,0),u);break t}ig(o,a,Yn,rc,jf,n,ai,Rs,gr,Va,f,null,-0,0)}}break}while(!0);zi(e)}function ig(e,n,a,o,u,f,y,C,W,lt,yt,Tt,ft,_t){if(e.timeoutHandle=-1,Tt=n.subtreeFlags,Tt&8192||(Tt&16785408)===16785408){Tt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},Z0(n,f,Tt);var Zt=(f&62914560)===f?ac-T():(f&4194048)===f?$0-T():0;if(Zt=uy(Tt,Zt),Zt!==null){ma=f,e.cancelPendingCommit=Zt(fg.bind(null,e,n,f,a,o,u,y,C,W,yt,Tt,null,ft,_t)),ja(e,f,y,!lt);return}}fg(e,n,f,a,o,u,y,C,W)}function AS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ja(e,n,a,o){n&=~Wf,n&=~Rs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-It(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&to(e,a,n)}function oc(){return(Be&6)===0?(Oo(0),!1):!0}function Kf(){if(Me!==null){if(He===0)var e=Me.return;else e=Me,aa=vs=null,df(e),lr=null,go=0,e=Me;for(;e!==null;)O0(e.alternate,e),e=e.return;Me=null}}function vr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,jS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ma=0,Kf(),qe=e,Me=a=na(e.current,null),Re=n,He=0,ii=null,Va=!1,mr=jt(e,n),Xf=!1,gr=ai=Wf=Rs=ka=en=0,Yn=Uo=null,jf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-It(o),f=1<<u;n|=e[u],o&=~f}return pa=n,Cl(),a}function ag(e,n){he=null,N.H=Eo,n===or||n===Fl?(n=Sm(),He=3):n===$u?(n=Sm(),He=4):He=n===Cf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,Me===null&&(en=1,Kl(e,di(n,e.current)))}function sg(){var e=ei.current;return e===null?!0:(Re&4194048)===Re?gi===null:(Re&62914560)===Re||(Re&536870912)!==0?e===gi:!1}function rg(){var e=N.H;return N.H=Eo,e===null?Eo:e}function og(){var e=N.A;return N.A=ES,e}function lc(){en=4,Va||(Re&4194048)!==Re&&ei.current!==null||(mr=!0),(ka&134217727)===0&&(Rs&134217727)===0||qe===null||ja(qe,Re,ai,!1)}function Qf(e,n,a){var o=Be;Be|=2;var u=rg(),f=og();(qe!==e||Re!==n)&&(rc=null,vr(e,n)),n=!1;var y=en;t:do try{if(He!==0&&Me!==null){var C=Me,W=ii;switch(He){case 8:Kf(),y=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var lt=He;if(He=0,ii=null,xr(e,C,W,lt),a&&mr){y=0;break t}break;default:lt=He,He=0,ii=null,xr(e,C,W,lt)}}RS(),y=en;break}catch(yt){ag(e,yt)}while(!0);return n&&e.shellSuspendCounter++,aa=vs=null,Be=o,N.H=u,N.A=f,Me===null&&(qe=null,Re=0,Cl()),y}function RS(){for(;Me!==null;)lg(Me)}function CS(e,n){var a=Be;Be|=2;var o=rg(),u=og();qe!==e||Re!==n?(rc=null,sc=T()+500,vr(e,n)):mr=jt(e,n);t:do try{if(He!==0&&Me!==null){n=Me;var f=ii;e:switch(He){case 1:He=0,ii=null,xr(e,n,f,1);break;case 2:case 9:if(vm(f)){He=0,ii=null,cg(n);break}n=function(){He!==2&&He!==9||qe!==e||(He=7),zi(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:vm(f)?(He=0,ii=null,cg(n)):(He=0,ii=null,xr(e,n,f,7));break;case 5:var y=null;switch(Me.tag){case 26:y=Me.memoizedState;case 5:case 27:var C=Me;if(y?Yg(y):C.stateNode.complete){He=0,ii=null;var W=C.sibling;if(W!==null)Me=W;else{var lt=C.return;lt!==null?(Me=lt,cc(lt)):Me=null}break e}}He=0,ii=null,xr(e,n,f,5);break;case 6:He=0,ii=null,xr(e,n,f,6);break;case 8:Kf(),en=6;break t;default:throw Error(s(462))}}wS();break}catch(yt){ag(e,yt)}while(!0);return aa=vs=null,N.H=o,N.A=u,Be=a,Me!==null?0:(qe=null,Re=0,Cl(),en)}function wS(){for(;Me!==null&&!kt();)lg(Me)}function lg(e){var n=U0(e.alternate,e,pa);e.memoizedProps=e.pendingProps,n===null?cc(e):Me=n}function cg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=A0(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=A0(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:df(n);default:O0(a,n),n=Me=om(n,pa),n=U0(a,n,pa)}e.memoizedProps=e.pendingProps,n===null?cc(e):Me=n}function xr(e,n,a,o){aa=vs=null,df(n),lr=null,go=0;var u=n.return;try{if(_S(e,u,n,a,Re)){en=1,Kl(e,di(a,e.current)),Me=null;return}}catch(f){if(u!==null)throw Me=u,f;en=1,Kl(e,di(a,e.current)),Me=null;return}n.flags&32768?(we||o===1?e=!0:mr||(Re&536870912)!==0?e=!1:(Va=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),ug(n,e)):cc(n)}function cc(e){var n=e;do{if((n.flags&32768)!==0){ug(n,Va);return}e=n.return;var a=SS(n.alternate,n,pa);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=e}while(n!==null);en===0&&(en=5)}function ug(e,n){do{var a=yS(e.alternate,e);if(a!==null){a.flags&=32767,Me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Me=e;return}Me=e=a}while(e!==null);en=6,Me=null}function fg(e,n,a,o,u,f,y,C,W){e.cancelPendingCommit=null;do uc();while(gn!==0);if((Be&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=zu,Mi(e,a,f,y,C,W),e===qe&&(Me=qe=null,Re=0),_r=n,Wa=e,ma=a,qf=f,Yf=u,tg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,LS(ht,function(){return gg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,u=B.p,B.p=2,y=Be,Be|=4;try{MS(e,n,a)}finally{Be=y,B.p=u,N.T=o}}gn=1,dg(),hg(),pg()}}function dg(){if(gn===1){gn=0;var e=Wa,n=_r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var o=B.p;B.p=2;var u=Be;Be|=4;try{j0(n,e);var f=cd,y=Jp(e.containerInfo),C=f.focusedElem,W=f.selectionRange;if(y!==C&&C&&C.ownerDocument&&Qp(C.ownerDocument.documentElement,C)){if(W!==null&&Lu(C)){var lt=W.start,yt=W.end;if(yt===void 0&&(yt=lt),"selectionStart"in C)C.selectionStart=lt,C.selectionEnd=Math.min(yt,C.value.length);else{var Tt=C.ownerDocument||document,ft=Tt&&Tt.defaultView||window;if(ft.getSelection){var _t=ft.getSelection(),Zt=C.textContent.length,se=Math.min(W.start,Zt),We=W.end===void 0?se:Math.min(W.end,Zt);!_t.extend&&se>We&&(y=We,We=se,se=y);var it=Kp(C,se),Y=Kp(C,We);if(it&&Y&&(_t.rangeCount!==1||_t.anchorNode!==it.node||_t.anchorOffset!==it.offset||_t.focusNode!==Y.node||_t.focusOffset!==Y.offset)){var ot=Tt.createRange();ot.setStart(it.node,it.offset),_t.removeAllRanges(),se>We?(_t.addRange(ot),_t.extend(Y.node,Y.offset)):(ot.setEnd(Y.node,Y.offset),_t.addRange(ot))}}}}for(Tt=[],_t=C;_t=_t.parentNode;)_t.nodeType===1&&Tt.push({element:_t,left:_t.scrollLeft,top:_t.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Tt.length;C++){var Et=Tt[C];Et.element.scrollLeft=Et.left,Et.element.scrollTop=Et.top}}Mc=!!ld,cd=ld=null}finally{Be=u,B.p=o,N.T=a}}e.current=n,gn=2}}function hg(){if(gn===2){gn=0;var e=Wa,n=_r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var o=B.p;B.p=2;var u=Be;Be|=4;try{G0(e,n.alternate,n)}finally{Be=u,B.p=o,N.T=a}}gn=3}}function pg(){if(gn===4||gn===3){gn=0,P();var e=Wa,n=_r,a=ma,o=tg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,_r=Wa=null,mg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Xa=null),Ws(a),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Ct,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=N.T,u=B.p,B.p=2,N.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var C=o[y];f(C.value,{componentStack:C.stack})}}finally{N.T=n,B.p=u}}(ma&3)!==0&&uc(),zi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Zf?Lo++:(Lo=0,Zf=e):Lo=0,Oo(0)}}function mg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,po(n)))}function uc(){return dg(),hg(),pg(),gg()}function gg(){if(gn!==5)return!1;var e=Wa,n=qf;qf=0;var a=Ws(ma),o=N.T,u=B.p;try{B.p=32>a?32:a,N.T=null,a=Yf,Yf=null;var f=Wa,y=ma;if(gn=0,_r=Wa=null,ma=0,(Be&6)!==0)throw Error(s(331));var C=Be;if(Be|=4,Q0(f.current),Y0(f,f.current,y,a),Be=C,Oo(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Ct,f)}catch{}return!0}finally{B.p=u,N.T=o,mg(e,n)}}function _g(e,n,a){n=di(a,n),n=Rf(e.stateNode,n,2),e=za(e,n,2),e!==null&&(Bn(e,2),zi(e))}function Ge(e,n,a){if(e.tag===3)_g(e,e,a);else for(;n!==null;){if(n.tag===3){_g(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xa===null||!Xa.has(o))){e=di(a,e),a=v0(2),o=za(n,a,2),o!==null&&(x0(a,o,n,e),Bn(o,2),zi(o));break}}n=n.return}}function Jf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new TS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Xf=!0,u.add(a),e=DS.bind(null,e,n,a),n.then(e,e))}function DS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(Re&a)===a&&(en===4||en===3&&(Re&62914560)===Re&&300>T()-ac?(Be&2)===0&&vr(e,0):Wf|=a,gr===Re&&(gr=0)),zi(e)}function vg(e,n){n===0&&(n=Ie()),e=ms(e,n),e!==null&&(Bn(e,n),zi(e))}function NS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),vg(e,a)}function US(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),vg(e,a)}function LS(e,n){return me(e,n)}var fc=null,Sr=null,$f=!1,dc=!1,td=!1,qa=0;function zi(e){e!==Sr&&e.next===null&&(Sr===null?fc=Sr=e:Sr=Sr.next=e),dc=!0,$f||($f=!0,PS())}function Oo(e,n){if(!td&&dc){td=!0;do for(var a=!1,o=fc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,C=o.pingedLanes;f=(1<<31-It(42|e)+1)-1,f&=u&~(y&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Mg(o,f))}else f=Re,f=xt(o,o===qe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||jt(o,f)||(a=!0,Mg(o,f));o=o.next}while(a);td=!1}}function OS(){xg()}function xg(){dc=$f=!1;var e=0;qa!==0&&WS()&&(e=qa);for(var n=T(),a=null,o=fc;o!==null;){var u=o.next,f=Sg(o,n);f===0?(o.next=null,a===null?fc=u:a.next=u,u===null&&(Sr=a)):(a=o,(e!==0||(f&3)!==0)&&(dc=!0)),o=u}gn!==0&&gn!==5||Oo(e),qa!==0&&(qa=0)}function Sg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-It(f),C=1<<y,W=u[y];W===-1?((C&a)===0||(C&o)!==0)&&(u[y]=ce(C,n)):W<=n&&(e.expiredLanes|=C),f&=~C}if(n=qe,a=Re,a=xt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ae(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||jt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ae(o),Ws(a)){case 2:case 8:a=At;break;case 32:a=ht;break;case 268435456:a=Ut;break;default:a=ht}return o=yg.bind(null,e),a=me(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ae(o),e.callbackPriority=2,e.callbackNode=null,2}function yg(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(uc()&&e.callbackNode!==a)return null;var o=Re;return o=xt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(ng(e,o,n),Sg(e,T()),e.callbackNode!=null&&e.callbackNode===a?yg.bind(null,e):null)}function Mg(e,n){if(uc())return null;ng(e,n,!0)}function PS(){qS(function(){(Be&6)!==0?me(St,OS):xg()})}function ed(){if(qa===0){var e=sr;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),qa=e}return qa}function bg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Sl(""+e)}function Eg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function FS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=bg((u[pn]||null).action),y=o.submitter;y&&(n=(n=y[pn]||null)?bg(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var C=new El("action","action",null,o,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(qa!==0){var W=y?Eg(u,y):new FormData(u);yf(a,{pending:!0,data:W,method:u.method,action:f},null,W)}}else typeof f=="function"&&(C.preventDefault(),W=y?Eg(u,y):new FormData(u),yf(a,{pending:!0,data:W,method:u.method,action:f},f,W))},currentTarget:u}]})}}for(var nd=0;nd<Bu.length;nd++){var id=Bu[nd],BS=id.toLowerCase(),zS=id[0].toUpperCase()+id.slice(1);Ai(BS,"on"+zS)}Ai(em,"onAnimationEnd"),Ai(nm,"onAnimationIteration"),Ai(im,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(tS,"onTransitionRun"),Ai(eS,"onTransitionStart"),Ai(nS,"onTransitionCancel"),Ai(am,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),st("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),st("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),st("onBeforeInput",["compositionend","keypress","textInput","paste"]),st("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),st("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Po));function Tg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var C=o[y],W=C.instance,lt=C.currentTarget;if(C=C.listener,W!==f&&u.isPropagationStopped())break t;f=C,u.currentTarget=lt;try{f(u)}catch(yt){Rl(yt)}u.currentTarget=null,f=W}else for(y=0;y<o.length;y++){if(C=o[y],W=C.instance,lt=C.currentTarget,C=C.listener,W!==f&&u.isPropagationStopped())break t;f=C,u.currentTarget=lt;try{f(u)}catch(yt){Rl(yt)}u.currentTarget=null,f=W}}}}function be(e,n){var a=n[Ca];a===void 0&&(a=n[Ca]=new Set);var o=e+"__bubble";a.has(o)||(Ag(n,e,2,!1),a.add(o))}function ad(e,n,a){var o=0;n&&(o|=4),Ag(a,e,o,n)}var hc="_reactListening"+Math.random().toString(36).slice(2);function sd(e){if(!e[hc]){e[hc]=!0,gt.forEach(function(a){a!=="selectionchange"&&(IS.has(a)||ad(a,!1,e),ad(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[hc]||(n[hc]=!0,ad("selectionchange",!1,n))}}function Ag(e,n,a,o){switch(e_(n)){case 2:var u=hy;break;case 8:u=py;break;default:u=Sd}a=u.bind(null,n,a,e),u=void 0,!Eu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function rd(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var C=o.stateNode.containerInfo;if(C===u)break;if(y===4)for(y=o.return;y!==null;){var W=y.tag;if((W===3||W===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;C!==null;){if(y=wa(C),y===null)return;if(W=y.tag,W===5||W===6||W===26||W===27){o=f=y;continue t}C=C.parentNode}}o=o.return}Np(function(){var lt=f,yt=Mu(a),Tt=[];t:{var ft=sm.get(e);if(ft!==void 0){var _t=El,Zt=e;switch(e){case"keypress":if(Ml(a)===0)break t;case"keydown":case"keyup":_t=Ux;break;case"focusin":Zt="focus",_t=Cu;break;case"focusout":Zt="blur",_t=Cu;break;case"beforeblur":case"afterblur":_t=Cu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_t=Op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_t=Sx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_t=Px;break;case em:case nm:case im:_t=bx;break;case am:_t=Bx;break;case"scroll":case"scrollend":_t=vx;break;case"wheel":_t=Ix;break;case"copy":case"cut":case"paste":_t=Tx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_t=Fp;break;case"toggle":case"beforetoggle":_t=Gx}var se=(n&4)!==0,We=!se&&(e==="scroll"||e==="scrollend"),it=se?ft!==null?ft+"Capture":null:ft;se=[];for(var Y=lt,ot;Y!==null;){var Et=Y;if(ot=Et.stateNode,Et=Et.tag,Et!==5&&Et!==26&&Et!==27||ot===null||it===null||(Et=no(Y,it),Et!=null&&se.push(Fo(Y,Et,ot))),We)break;Y=Y.return}0<se.length&&(ft=new _t(ft,Zt,null,a,yt),Tt.push({event:ft,listeners:se}))}}if((n&7)===0){t:{if(ft=e==="mouseover"||e==="pointerover",_t=e==="mouseout"||e==="pointerout",ft&&a!==yu&&(Zt=a.relatedTarget||a.fromElement)&&(wa(Zt)||Zt[Ji]))break t;if((_t||ft)&&(ft=yt.window===yt?yt:(ft=yt.ownerDocument)?ft.defaultView||ft.parentWindow:window,_t?(Zt=a.relatedTarget||a.toElement,_t=lt,Zt=Zt?wa(Zt):null,Zt!==null&&(We=c(Zt),se=Zt.tag,Zt!==We||se!==5&&se!==27&&se!==6)&&(Zt=null)):(_t=null,Zt=lt),_t!==Zt)){if(se=Op,Et="onMouseLeave",it="onMouseEnter",Y="mouse",(e==="pointerout"||e==="pointerover")&&(se=Fp,Et="onPointerLeave",it="onPointerEnter",Y="pointer"),We=_t==null?ft:fs(_t),ot=Zt==null?ft:fs(Zt),ft=new se(Et,Y+"leave",_t,a,yt),ft.target=We,ft.relatedTarget=ot,Et=null,wa(yt)===lt&&(se=new se(it,Y+"enter",Zt,a,yt),se.target=ot,se.relatedTarget=We,Et=se),We=Et,_t&&Zt)e:{for(se=HS,it=_t,Y=Zt,ot=0,Et=it;Et;Et=se(Et))ot++;Et=0;for(var ie=Y;ie;ie=se(ie))Et++;for(;0<ot-Et;)it=se(it),ot--;for(;0<Et-ot;)Y=se(Y),Et--;for(;ot--;){if(it===Y||Y!==null&&it===Y.alternate){se=it;break e}it=se(it),Y=se(Y)}se=null}else se=null;_t!==null&&Rg(Tt,ft,_t,se,!1),Zt!==null&&We!==null&&Rg(Tt,We,Zt,se,!0)}}t:{if(ft=lt?fs(lt):window,_t=ft.nodeName&&ft.nodeName.toLowerCase(),_t==="select"||_t==="input"&&ft.type==="file")var Pe=Xp;else if(Vp(ft))if(Wp)Pe=Qx;else{Pe=Zx;var te=Yx}else _t=ft.nodeName,!_t||_t.toLowerCase()!=="input"||ft.type!=="checkbox"&&ft.type!=="radio"?lt&&qs(lt.elementType)&&(Pe=Xp):Pe=Kx;if(Pe&&(Pe=Pe(e,lt))){kp(Tt,Pe,a,yt);break t}te&&te(e,ft,lt),e==="focusout"&&lt&&ft.type==="number"&&lt.memoizedProps.value!=null&&Ei(ft,"number",ft.value)}switch(te=lt?fs(lt):window,e){case"focusin":(Vp(te)||te.contentEditable==="true")&&(Qs=te,Ou=lt,uo=null);break;case"focusout":uo=Ou=Qs=null;break;case"mousedown":Pu=!0;break;case"contextmenu":case"mouseup":case"dragend":Pu=!1,$p(Tt,a,yt);break;case"selectionchange":if($x)break;case"keydown":case"keyup":$p(Tt,a,yt)}var ve;if(Du)t:{switch(e){case"compositionstart":var Ce="onCompositionStart";break t;case"compositionend":Ce="onCompositionEnd";break t;case"compositionupdate":Ce="onCompositionUpdate";break t}Ce=void 0}else Ks?Hp(e,a)&&(Ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ce="onCompositionStart");Ce&&(Bp&&a.locale!=="ko"&&(Ks||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Ks&&(ve=Up()):(Na=yt,Tu="value"in Na?Na.value:Na.textContent,Ks=!0)),te=pc(lt,Ce),0<te.length&&(Ce=new Pp(Ce,e,null,a,yt),Tt.push({event:Ce,listeners:te}),ve?Ce.data=ve:(ve=Gp(a),ve!==null&&(Ce.data=ve)))),(ve=kx?Xx(e,a):Wx(e,a))&&(Ce=pc(lt,"onBeforeInput"),0<Ce.length&&(te=new Pp("onBeforeInput","beforeinput",null,a,yt),Tt.push({event:te,listeners:Ce}),te.data=ve)),FS(Tt,e,lt,a,yt)}Tg(Tt,n)})}function Fo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function pc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=no(e,a),u!=null&&o.unshift(Fo(e,u,f)),u=no(e,n),u!=null&&o.push(Fo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function HS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Rg(e,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var C=a,W=C.alternate,lt=C.stateNode;if(C=C.tag,W!==null&&W===o)break;C!==5&&C!==26&&C!==27||lt===null||(W=lt,u?(lt=no(a,f),lt!=null&&y.unshift(Fo(a,lt,W))):u||(lt=no(a,f),lt!=null&&y.push(Fo(a,lt,W)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var GS=/\r\n?/g,VS=/\u0000|\uFFFD/g;function Cg(e){return(typeof e=="string"?e:""+e).replace(GS,`
`).replace(VS,"")}function wg(e,n){return n=Cg(n),Cg(e)===n}function Xe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Hn(e,""+o);break;case"className":fe(e,"class",o);break;case"tabIndex":fe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":fe(e,a,o);break;case"style":$i(e,o,f);break;case"data":if(n!=="object"){fe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Sl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Sl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ta);break;case"onScroll":o!=null&&be("scroll",e);break;case"onScrollEnd":o!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Sl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":be("beforetoggle",e),be("toggle",e),oe(e,"popover",o);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":oe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=gx.get(a)||a,oe(e,a,o))}}function od(e,n,a,o,u,f){switch(a){case"style":$i(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&Hn(e,""+o);break;case"onScroll":o!=null&&be("scroll",e);break;case"onScrollEnd":o!=null&&be("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ct.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):oe(e,a,o)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,f,y,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),o&&Xe(e,n,"src",a.src,a,null);return;case"input":be("invalid",e);var C=f=y=u=null,W=null,lt=null;for(o in a)if(a.hasOwnProperty(o)){var yt=a[o];if(yt!=null)switch(o){case"name":u=yt;break;case"type":y=yt;break;case"checked":W=yt;break;case"defaultChecked":lt=yt;break;case"value":f=yt;break;case"defaultValue":C=yt;break;case"children":case"dangerouslySetInnerHTML":if(yt!=null)throw Error(s(137,n));break;default:Xe(e,n,o,yt,a,null)}}Qn(e,f,C,W,lt,y,u,!1);return;case"select":be("invalid",e),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":y=C;break;case"multiple":o=C;default:Xe(e,n,u,C,a,null)}n=f,a=y,e.multiple=!!o,n!=null?Jn(e,!!o,n,!1):a!=null&&Jn(e,!!o,a,!0);return;case"textarea":be("invalid",e),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(C=a[y],C!=null))switch(y){case"value":o=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Xe(e,n,y,C,a,null)}on(e,o,u,f);return;case"option":for(W in a)if(a.hasOwnProperty(W)&&(o=a[W],o!=null))switch(W){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xe(e,n,W,o,a,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(o=0;o<Po.length;o++)be(Po[o],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(lt in a)if(a.hasOwnProperty(lt)&&(o=a[lt],o!=null))switch(lt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,lt,o,a,null)}return;default:if(qs(n)){for(yt in a)a.hasOwnProperty(yt)&&(o=a[yt],o!==void 0&&od(e,n,yt,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Xe(e,n,C,o,a,null))}function kS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,C=null,W=null,lt=null,yt=null;for(_t in a){var Tt=a[_t];if(a.hasOwnProperty(_t)&&Tt!=null)switch(_t){case"checked":break;case"value":break;case"defaultValue":W=Tt;default:o.hasOwnProperty(_t)||Xe(e,n,_t,null,o,Tt)}}for(var ft in o){var _t=o[ft];if(Tt=a[ft],o.hasOwnProperty(ft)&&(_t!=null||Tt!=null))switch(ft){case"type":f=_t;break;case"name":u=_t;break;case"checked":lt=_t;break;case"defaultChecked":yt=_t;break;case"value":y=_t;break;case"defaultValue":C=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(s(137,n));break;default:_t!==Tt&&Xe(e,n,ft,_t,o,Tt)}}In(e,y,C,W,lt,yt,f,u);return;case"select":_t=y=C=ft=null;for(f in a)if(W=a[f],a.hasOwnProperty(f)&&W!=null)switch(f){case"value":break;case"multiple":_t=W;default:o.hasOwnProperty(f)||Xe(e,n,f,null,o,W)}for(u in o)if(f=o[u],W=a[u],o.hasOwnProperty(u)&&(f!=null||W!=null))switch(u){case"value":ft=f;break;case"defaultValue":C=f;break;case"multiple":y=f;default:f!==W&&Xe(e,n,u,f,o,W)}n=C,a=y,o=_t,ft!=null?Jn(e,!!a,ft,!1):!!o!=!!a&&(n!=null?Jn(e,!!a,n,!0):Jn(e,!!a,a?[]:"",!1));return;case"textarea":_t=ft=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Xe(e,n,C,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":ft=u;break;case"defaultValue":_t=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xe(e,n,y,u,o,f)}ze(e,ft,_t);return;case"option":for(var Zt in a)if(ft=a[Zt],a.hasOwnProperty(Zt)&&ft!=null&&!o.hasOwnProperty(Zt))switch(Zt){case"selected":e.selected=!1;break;default:Xe(e,n,Zt,null,o,ft)}for(W in o)if(ft=o[W],_t=a[W],o.hasOwnProperty(W)&&ft!==_t&&(ft!=null||_t!=null))switch(W){case"selected":e.selected=ft&&typeof ft!="function"&&typeof ft!="symbol";break;default:Xe(e,n,W,ft,o,_t)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)ft=a[se],a.hasOwnProperty(se)&&ft!=null&&!o.hasOwnProperty(se)&&Xe(e,n,se,null,o,ft);for(lt in o)if(ft=o[lt],_t=a[lt],o.hasOwnProperty(lt)&&ft!==_t&&(ft!=null||_t!=null))switch(lt){case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Xe(e,n,lt,ft,o,_t)}return;default:if(qs(n)){for(var We in a)ft=a[We],a.hasOwnProperty(We)&&ft!==void 0&&!o.hasOwnProperty(We)&&od(e,n,We,void 0,o,ft);for(yt in o)ft=o[yt],_t=a[yt],!o.hasOwnProperty(yt)||ft===_t||ft===void 0&&_t===void 0||od(e,n,yt,ft,o,_t);return}}for(var it in a)ft=a[it],a.hasOwnProperty(it)&&ft!=null&&!o.hasOwnProperty(it)&&Xe(e,n,it,null,o,ft);for(Tt in o)ft=o[Tt],_t=a[Tt],!o.hasOwnProperty(Tt)||ft===_t||ft==null&&_t==null||Xe(e,n,Tt,ft,o,_t)}function Dg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function XS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,C=u.duration;if(f&&C&&Dg(y)){for(y=0,C=u.responseEnd,o+=1;o<a.length;o++){var W=a[o],lt=W.startTime;if(lt>C)break;var yt=W.transferSize,Tt=W.initiatorType;yt&&Dg(Tt)&&(W=W.responseEnd,y+=yt*(W<C?1:(C-lt)/(W-lt)))}if(--o,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ld=null,cd=null;function mc(e){return e.nodeType===9?e:e.ownerDocument}function Ng(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ug(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ud(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var fd=null;function WS(){var e=window.event;return e&&e.type==="popstate"?e===fd?!1:(fd=e,!0):(fd=null,!1)}var Lg=typeof setTimeout=="function"?setTimeout:void 0,jS=typeof clearTimeout=="function"?clearTimeout:void 0,Og=typeof Promise=="function"?Promise:void 0,qS=typeof queueMicrotask=="function"?queueMicrotask:typeof Og<"u"?function(e){return Og.resolve(null).then(e).catch(YS)}:Lg;function YS(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function Pg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Er(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Bo(a);for(var f=a.firstChild;f;){var y=f.nextSibling,C=f.nodeName;f[us]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&Bo(e.ownerDocument.body);a=u}while(a);Er(n)}function Fg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function dd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":dd(a),eo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ZS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[us])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function KS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function Bg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_i(e.nextSibling),e===null))return null;return e}function hd(e){return e.data==="$?"||e.data==="$~"}function pd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function QS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var md=null;function zg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return _i(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Ig(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Hg(e,n,a){switch(n=mc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Bo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);eo(e)}var vi=new Map,Gg=new Set;function gc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ga=B.d;B.d={f:JS,r:$S,D:ty,C:ey,L:ny,m:iy,X:sy,S:ay,M:ry};function JS(){var e=ga.f(),n=oc();return e||n}function $S(e){var n=Da(e);n!==null&&n.tag===5&&n.type==="form"?a0(n):ga.r(e)}var yr=typeof document>"u"?null:document;function Vg(e,n,a){var o=yr;if(o&&typeof n=="string"&&n){var u=ue(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Gg.has(u)||(Gg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Tn(n,"link",e),K(n),o.head.appendChild(n)))}}function ty(e){ga.D(e),Vg("dns-prefetch",e,null)}function ey(e,n){ga.C(e,n),Vg("preconnect",e,n)}function ny(e,n,a){ga.L(e,n,a);var o=yr;if(o&&e&&n){var u='link[rel="preload"][as="'+ue(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ue(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ue(a.imageSizes)+'"]')):u+='[href="'+ue(e)+'"]';var f=u;switch(n){case"style":f=Mr(e);break;case"script":f=br(e)}vi.has(f)||(e=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),vi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(zo(f))||n==="script"&&o.querySelector(Io(f))||(n=o.createElement("link"),Tn(n,"link",e),K(n),o.head.appendChild(n)))}}function iy(e,n){ga.m(e,n);var a=yr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ue(o)+'"][href="'+ue(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=br(e)}if(!vi.has(f)&&(e=S({rel:"modulepreload",href:e},n),vi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(f)))return}o=a.createElement("link"),Tn(o,"link",e),K(o),a.head.appendChild(o)}}}function ay(e,n,a){ga.S(e,n,a);var o=yr;if(o&&e){var u=w(o).hoistableStyles,f=Mr(e);n=n||"default";var y=u.get(f);if(!y){var C={loading:0,preload:null};if(y=o.querySelector(zo(f)))C.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":n},a),(a=vi.get(f))&&gd(e,a);var W=y=o.createElement("link");K(W),Tn(W,"link",e),W._p=new Promise(function(lt,yt){W.onload=lt,W.onerror=yt}),W.addEventListener("load",function(){C.loading|=1}),W.addEventListener("error",function(){C.loading|=2}),C.loading|=4,_c(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:C},u.set(f,y)}}}function sy(e,n){ga.X(e,n);var a=yr;if(a&&e){var o=w(a).hoistableScripts,u=br(e),f=o.get(u);f||(f=a.querySelector(Io(u)),f||(e=S({src:e,async:!0},n),(n=vi.get(u))&&_d(e,n),f=a.createElement("script"),K(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function ry(e,n){ga.M(e,n);var a=yr;if(a&&e){var o=w(a).hoistableScripts,u=br(e),f=o.get(u);f||(f=a.querySelector(Io(u)),f||(e=S({src:e,async:!0,type:"module"},n),(n=vi.get(u))&&_d(e,n),f=a.createElement("script"),K(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function kg(e,n,a,o){var u=(u=Z.current)?gc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Mr(a.href),a=w(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Mr(a.href);var f=w(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(zo(e)))&&!f._p&&(y.instance=f,y.state.loading=5),vi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(e,a),f||oy(u,e,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=br(a),a=w(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Mr(e){return'href="'+ue(e)+'"'}function zo(e){return'link[rel="stylesheet"]['+e+"]"}function Xg(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function oy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),K(n),e.head.appendChild(n))}function br(e){return'[src="'+ue(e)+'"]'}function Io(e){return"script[async]"+e}function Wg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ue(a.href)+'"]');if(o)return n.instance=o,K(o),o;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),K(o),Tn(o,"style",u),_c(o,a.precedence,e),n.instance=o;case"stylesheet":u=Mr(a.href);var f=e.querySelector(zo(u));if(f)return n.state.loading|=4,n.instance=f,K(f),f;o=Xg(a),(u=vi.get(u))&&gd(o,u),f=(e.ownerDocument||e).createElement("link"),K(f);var y=f;return y._p=new Promise(function(C,W){y.onload=C,y.onerror=W}),Tn(f,"link",o),n.state.loading|=4,_c(f,a.precedence,e),n.instance=f;case"script":return f=br(a.src),(u=e.querySelector(Io(f)))?(n.instance=u,K(u),u):(o=a,(u=vi.get(f))&&(o=S({},a),_d(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),K(u),Tn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,_c(o,a.precedence,e));return n.instance}function _c(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var C=o[y];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function gd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function _d(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var vc=null;function jg(e,n,a){if(vc===null){var o=new Map,u=vc=new Map;u.set(a,o)}else u=vc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[us]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var C=o.get(y);C?C.push(f):o.set(y,[f])}}return o}function qg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ly(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Yg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function cy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Mr(o.href),f=n.querySelector(zo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=xc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,K(f);return}f=n.ownerDocument||n,o=Xg(o),(u=vi.get(u))&&gd(o,u),f=f.createElement("link"),K(f);var y=f;y._p=new Promise(function(C,W){y.onload=C,y.onerror=W}),Tn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=xc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var vd=0;function uy(e,n){return e.stylesheets&&e.count===0&&yc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&yc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&vd===0&&(vd=62500*XS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>vd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function xc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Sc=null;function yc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Sc=new Map,n.forEach(fy,e),Sc=null,xc.call(e))}function fy(e,n){if(!(n.state.loading&4)){var a=Sc.get(e);if(a)var o=a.get(null);else{a=new Map,Sc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=xc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ho={$$typeof:U,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function dy(e,n,a,o,u,f,y,C,W){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ne(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ne(0),this.hiddenUpdates=Ne(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map}function Zg(e,n,a,o,u,f,y,C,W,lt,yt,Tt){return e=new dy(e,n,a,y,W,lt,yt,Tt,C),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),e.current=f,f.stateNode=e,n=Ku(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},tf(f),e}function Kg(e){return e?(e=tr,e):tr}function Qg(e,n,a,o,u,f){u=Kg(u),o.context===null?o.context=u:o.pendingContext=u,o=Ba(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=za(e,o,n),a!==null&&(Zn(a,e,n),vo(a,e,n))}function Jg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function xd(e,n){Jg(e,n),(e=e.alternate)&&Jg(e,n)}function $g(e){if(e.tag===13||e.tag===31){var n=ms(e,67108864);n!==null&&Zn(n,e,67108864),xd(e,67108864)}}function t_(e){if(e.tag===13||e.tag===31){var n=si();n=Xs(n);var a=ms(e,n);a!==null&&Zn(a,e,n),xd(e,n)}}var Mc=!0;function hy(e,n,a,o){var u=N.T;N.T=null;var f=B.p;try{B.p=2,Sd(e,n,a,o)}finally{B.p=f,N.T=u}}function py(e,n,a,o){var u=N.T;N.T=null;var f=B.p;try{B.p=8,Sd(e,n,a,o)}finally{B.p=f,N.T=u}}function Sd(e,n,a,o){if(Mc){var u=yd(o);if(u===null)rd(e,n,o,bc,a),n_(e,o);else if(gy(u,e,n,a,o))o.stopPropagation();else if(n_(e,o),n&4&&-1<my.indexOf(e)){for(;u!==null;){var f=Da(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Dt(f.pendingLanes);if(y!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;y;){var W=1<<31-It(y);C.entanglements[1]|=W,y&=~W}zi(f),(Be&6)===0&&(sc=T()+500,Oo(0))}}break;case 31:case 13:C=ms(f,2),C!==null&&Zn(C,f,2),oc(),xd(f,2)}if(f=yd(o),f===null&&rd(e,n,o,bc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else rd(e,n,o,null,a)}}function yd(e){return e=Mu(e),Md(e)}var bc=null;function Md(e){if(bc=null,e=wa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return bc=e,null}function e_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case St:return 2;case At:return 8;case ht:case Wt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var bd=!1,Za=null,Ka=null,Qa=null,Go=new Map,Vo=new Map,Ja=[],my="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function n_(e,n){switch(e){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":Go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(n.pointerId)}}function ko(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Da(n),n!==null&&$g(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function gy(e,n,a,o,u){switch(n){case"focusin":return Za=ko(Za,e,n,a,o,u),!0;case"dragenter":return Ka=ko(Ka,e,n,a,o,u),!0;case"mouseover":return Qa=ko(Qa,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Go.set(f,ko(Go.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Vo.set(f,ko(Vo.get(f)||null,e,n,a,o,u)),!0}return!1}function i_(e){var n=wa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,js(e.priority,function(){t_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,js(e.priority,function(){t_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ec(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=yd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);yu=o,a.target.dispatchEvent(o),yu=null}else return n=Da(a),n!==null&&$g(n),e.blockedOn=a,!1;n.shift()}return!0}function a_(e,n,a){Ec(e)&&a.delete(n)}function _y(){bd=!1,Za!==null&&Ec(Za)&&(Za=null),Ka!==null&&Ec(Ka)&&(Ka=null),Qa!==null&&Ec(Qa)&&(Qa=null),Go.forEach(a_),Vo.forEach(a_)}function Tc(e,n){e.blockedOn===n&&(e.blockedOn=null,bd||(bd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,_y)))}var Ac=null;function s_(e){Ac!==e&&(Ac=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ac===e&&(Ac=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Md(o||a)===null)continue;break}var f=Da(a);f!==null&&(e.splice(n,3),n-=3,yf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Er(e){function n(W){return Tc(W,e)}Za!==null&&Tc(Za,e),Ka!==null&&Tc(Ka,e),Qa!==null&&Tc(Qa,e),Go.forEach(n),Vo.forEach(n);for(var a=0;a<Ja.length;a++){var o=Ja[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)i_(a),a.blockedOn===null&&Ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[pn]||null;if(typeof f=="function")y||s_(a);else if(y){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[pn]||null)C=y.formAction;else if(Md(u)!==null)continue}else C=y.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),s_(a)}}}function r_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ed(e){this._internalRoot=e}Rc.prototype.render=Ed.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();Qg(a,o,e,n,null,null)},Rc.prototype.unmount=Ed.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Qg(e.current,2,null,e,null,null),oc(),n[Ji]=null}};function Rc(e){this._internalRoot=e}Rc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Oi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ja.length&&n!==0&&n<Ja[a].priority;a++);Ja.splice(a,0,e),a===0&&i_(e)}};var o_=t.version;if(o_!=="19.2.4")throw Error(s(527,o_,"19.2.4"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var vy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{Ct=Cc.inject(vy),Rt=Cc}catch{}}return Wo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=p0,f=m0,y=g0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=Zg(e,1,!1,null,null,a,o,null,u,f,y,r_),e[Ji]=n.current,sd(e),new Ed(n)},Wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=p0,y=m0,C=g0,W=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(W=a.formState)),n=Zg(e,1,!0,n,a??null,o,u,W,f,y,C,r_),n.context=Kg(null),a=n.current,o=si(),o=Xs(o),u=Ba(o),u.callback=null,za(a,u,o),a=o,n.current.lanes=a,Bn(n,a),zi(n),e[Ji]=n.current,sd(e),new Rc(n)},Wo.version="19.2.4",Wo}var __;function Ny(){if(__)return Rd.exports;__=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Rd.exports=Dy(),Rd.exports}var Uy=Ny();const Ly=Lv(Uy),yn=16,An=250,hp=["#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2","#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2"],Oy=500;function Py(r=4){const[t,i]=dt.useState(!1),[s,l]=dt.useState(0),[c,d]=dt.useState(0),[p,m]=dt.useState(!1),[h,_]=dt.useState(0),[S,g]=dt.useState(null),M=dt.useRef(null),b=dt.useRef(null),R=dt.useRef(null),v=dt.useRef(null),x=dt.useRef(0),A=dt.useRef(0),U=dt.useRef([]),D=dt.useRef(!1),H=dt.useRef(0),I=dt.useRef(0),z=dt.useRef(0),E=An*r;z.current=E,(!v.current||v.current[0].length!==E)&&(v.current=Array.from({length:yn},()=>new Float32Array(E)),x.current=0,A.current=0),dt.useEffect(()=>(p?(M.current=Date.now(),_(0),b.current&&clearInterval(b.current),b.current=setInterval(()=>{_(Math.floor((Date.now()-M.current)/1e3))},500)):(b.current&&clearInterval(b.current),M.current=null),()=>{b.current&&clearInterval(b.current)}),[p]);const O=dt.useCallback(q=>{D.current=q,q||(x.current=0,A.current=0)},[]),mt=dt.useCallback(q=>{const at=R.current;at&&at.readyState===WebSocket.OPEN&&at.send(JSON.stringify(q))},[]);dt.useEffect(()=>{const q=location.hostname||"localhost",at=parseInt(location.port||"1617")-1,N=`${location.protocol==="https:"?"wss":"ws"}://${q}:${at}`,B="/auth/ws-token";async function X(){try{const vt=await fetch(B,{credentials:"include"});return vt.ok&&(await vt.json()).token||null}catch{return null}}async function nt(){const vt=await X(),F=vt?`${N}?token=${encodeURIComponent(vt)}`:N,k=new WebSocket(F);R.current=k,k.onopen=()=>i(!0),k.onclose=()=>{i(!1),setTimeout(nt,2e3)},k.onerror=()=>k.close(),k.onmessage=et=>{const pt=JSON.parse(et.data);if("record_status"in pt){const wt=pt.record_status;if(m(wt.recording),wt.stopped){const ne=location.port||"1617";g({filename:wt.stopped.filename,frames:wt.stopped.frames,duration:wt.stopped.duration,path:wt.stopped.path,downloadUrl:`${location.protocol}//${location.hostname}:${ne}/recordings/${wt.stopped.filename}`})}}if("status"in pt||D.current)return;const bt=pt.channels;if(!bt||bt.length!==yn)return;const Z=v.current,V=z.current,ut=x.current;for(let wt=0;wt<yn;wt++)Z[wt][ut]=bt[wt];x.current=(ut+1)%V,A.current<V&&A.current++,H.current++;const Mt=pt.t;U.current.push(Mt);const Ot=performance.now();if(Ot-I.current>Oy){I.current=Ot,l(H.current);const wt=U.current,ne=Mt-2;let Ft=0;for(;Ft<wt.length&&wt[Ft]<ne;)Ft++;if(Ft>0&&wt.splice(0,Ft),wt.length>1){const ae=wt[wt.length-1]-wt[0];ae>0&&d(Math.round((wt.length-1)/ae))}}}}return nt(),()=>{const vt=R.current;vt&&vt.close()}},[]);const G=dt.useCallback(()=>g(null),[]),Q=dt.useMemo(()=>({buffers:v,writeIndex:x,samplesInBuffer:A,bufferSize:E,gridSuspended:!1}),[]);return Q.bufferSize=E,{connected:t,sampleCount:s,hz:c,recording:p,recordElapsed:h,recordResult:S,data:Q,dismissRecordResult:G,setPaused:O,sendCommand:mt}}function Nd({children:r}){const[t,i]=dt.useState("checking"),[s,l]=dt.useState(""),[c,d]=dt.useState("");dt.useEffect(()=>{(async()=>{try{const h=await fetch("/auth/status",{credentials:"include"});if(!h.ok){i("login");return}const _=await h.json();i(_.authenticated?"ok":"login")}catch(h){console.error("Auth check error:",h),i("login")}})()},[]);async function p(m){m.preventDefault(),d("");try{const _=await(await fetch("/auth",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({code:s})})).json();_.ok?i("ok"):(d(_.error||"Invalid code"),l(""))}catch{d("Server unreachable")}}return t==="checking"?null:t==="ok"?L.jsx(L.Fragment,{children:r}):L.jsx("div",{className:"auth-overlay",children:L.jsxs("div",{className:"auth-card",children:[L.jsxs("h1",{children:["Pi",L.jsx("span",{children:"EEG"}),"-16"]}),L.jsx("p",{className:"auth-sub",children:"Enter the access code displayed in the server console"}),L.jsxs("form",{onSubmit:p,children:[L.jsx("input",{className:"auth-input",type:"text",maxLength:6,pattern:"[0-9]{6}",autoComplete:"off",autoFocus:!0,required:!0,placeholder:"------",value:s,onChange:m=>l(m.target.value.replace(/\D/g,""))}),L.jsx("br",{}),L.jsx("button",{className:"auth-btn",type:"submit",children:"Connect"}),c&&L.jsx("p",{className:"auth-error",children:c})]})]})})}const Fy="rgba(48,54,61,0.4)",By="rgba(88,166,255,0.15)",zy={high:1500,medium:800,low:400},v_=14,x_=20,S_=2;function Iy(r,t,i,s,l,c,d,p,m,h){r.clearRect(0,0,t,i);const _=i/2,S=i/4;r.beginPath();for(let U=S;U<i;U+=S)r.moveTo(0,U),r.lineTo(t,U);if(r.strokeStyle=Fy,r.lineWidth=.5,r.stroke(),r.beginPath(),r.moveTo(0,_),r.lineTo(t,_),r.strokeStyle=By,r.lineWidth=1,r.stroke(),l<2)return;const g=zy[h]||1500,M=l>g?Math.floor(l/g):1,b=i/2,R=t/(d-1),v=b/p;if(h!=="low"){r.beginPath();let U=0;for(let D=0;D<l;D+=M){const H=(c-l+D+d)%d,I=D*R,z=_-s[H]*v;D===0?(r.moveTo(I,z),U=I):r.lineTo(I,z)}r.lineTo((l-1)*R,i),r.lineTo(U,i),r.closePath(),r.fillStyle=m+"10",r.fill()}r.strokeStyle=m,r.lineWidth=h==="low"?1:1.3,r.lineJoin="round",r.lineCap="round",r.beginPath();for(let U=0;U<l;U+=M){const D=(c-l+U+d)%d,H=U*R,I=_-s[D]*v;U===0?r.moveTo(H,I):r.lineTo(H,I)}r.stroke();let x=0;const A=Math.min(l,250);for(let U=l-A;U<l;U++){const D=(c-l+U+d)%d;x+=s[D]*s[D]}return Math.sqrt(x/A)}const Hy=dt.memo(function({chIdx:t,eegData:i,yRange:s,expanded:l,onToggleExpand:c,active:d=!0}){const p=dt.useRef(null),m=dt.useRef(0),h=dt.useRef(0),_=dt.useRef(null),S=dt.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),g=dt.useRef(!0),M=dt.useRef("high"),b=dt.useRef([]),R=dt.useRef(-1),v=dt.useRef(0),x=dt.useRef(0);return dt.useEffect(()=>{if(!d)return;const A=p.current;if(!A)return;const U=new ResizeObserver(D=>{const H=D[0];if(!H)return;const I=window.devicePixelRatio||1,{width:z,height:E}=H.contentRect,O=l?Math.min(I,2):1;S.current={w:z,h:E,pw:Math.round(z*O),ph:Math.round(E*O),dpr:O},g.current=!0});return U.observe(A),()=>U.disconnect()},[d,l]),dt.useEffect(()=>{if(!d)return;const A=p.current;if(!A)return;const U=A.getContext("2d",{alpha:!1});R.current=-1,x.current=0;const D=t%S_,H=()=>{x.current++;const{w:I,h:z,pw:E,ph:O,dpr:mt}=S.current;if(I===0||z===0){m.current=requestAnimationFrame(H);return}if(!l&&i.gridSuspended){m.current=requestAnimationFrame(H);return}if(!l&&x.current%S_!==D){m.current=requestAnimationFrame(H);return}const G=i.writeIndex.current;if(G===R.current){m.current=requestAnimationFrame(H);return}R.current=G;const Q=performance.now();g.current&&(g.current=!1,A.width=E,A.height=O,U.setTransform(mt,0,0,mt,0,0)),U.fillStyle="#0d1117",U.fillRect(0,0,I,z);const q=Iy(U,I,z,i.buffers.current[t],i.samplesInBuffer.current,G,i.bufferSize,s,hp[t],M.current);if(v.current++,q!==void 0&&(v.current&1)===0&&(h.current=q,_.current)){const N=q/s;_.current.style.borderLeftColor=N>.8?"#f85149":N>.4?"#d29922":"#3fb950"}const at=performance.now()-Q,tt=b.current;if(tt.push(at),tt.length>x_&&tt.shift(),tt.length===x_){let N=0;for(let X=0;X<tt.length;X++)N+=tt[X];const B=N/tt.length;B>v_&&M.current!=="low"?M.current=M.current==="high"?"medium":"low":B<v_*.4&&M.current!=="high"&&(M.current=M.current==="low"?"medium":"high")}m.current=requestAnimationFrame(H)};return m.current=requestAnimationFrame(H),()=>cancelAnimationFrame(m.current)},[t,i,s,d]),d?L.jsxs("div",{className:`channel-cell${l?" expanded":""}`,onClick:c,children:[L.jsxs("div",{className:"channel-label",ref:_,children:["Ch ",t+1]}),L.jsx("canvas",{ref:p,style:{display:"block",width:"100%",height:"100%"}})]}):L.jsxs("div",{className:`channel-cell inactive${l?" expanded":""}`,onClick:c,children:[L.jsxs("div",{className:"channel-label",children:["Ch ",t+1]}),L.jsx("div",{className:"channel-off",children:"OFF"})]})}),{PI:Gy,cos:y_,sin:Vy}=Math,M_=2*Gy,Un=[{name:"Delta",label:"δ Delta",low:.5,high:4,color:"#8b5cf6"},{name:"Theta",label:"θ Theta",low:4,high:8,color:"#06b6d4"},{name:"Alpha",label:"α Alpha",low:8,high:13,color:"#22c55e"},{name:"Beta",label:"β Beta",low:13,high:30,color:"#f59e0b"},{name:"Gamma",label:"γ Gamma",low:30,high:100,color:"#ef4444"}];class ol{constructor(t,i){Ii(this,"n");Ii(this,"sampleRateHz");Ii(this,"_window");Ii(this,"_frequencies");Ii(this,"_df");Ii(this,"_bitReversed");Ii(this,"_twRe");Ii(this,"_twIm");Ii(this,"_norm");if(t<=0||(t&t-1)!==0)throw new Error("n must be a power of 2");this.n=t,this.sampleRateHz=i,this._precompute()}_precompute(){const{n:t,sampleRateHz:i}=this;this._window=new Float64Array(t);for(let p=0;p<t;p++)this._window[p]=.5*(1-y_(M_*p/(t-1)));const s=(t>>1)+1;this._frequencies=new Float64Array(s),this._df=i/t;for(let p=0;p<s;p++)this._frequencies[p]=p*this._df;const l=ol._log2(t);this._bitReversed=new Int32Array(t);for(let p=0;p<t;p++)this._bitReversed[p]=ol._reverseBits(p,l);const c=t>>1;this._twRe=new Float64Array(c),this._twIm=new Float64Array(c);for(let p=0;p<c;p++){const m=-M_*p/t;this._twRe[p]=y_(m),this._twIm[p]=Vy(m)}let d=0;for(let p=0;p<t;p++)d+=this._window[p]*this._window[p];this._norm=2/(i*d)}analyse(t,i){const{n:s,_window:l,_frequencies:c,_df:d,_norm:p}=this;if(i===void 0&&(i=t.length-s),i<0||t.length-i<s)return null;const m=new Float64Array(s),h=new Float64Array(s);for(let v=0;v<s;v++)m[v]=t[i+v]*l[v];this._fft(m,h);const _=(s>>1)+1,S=new Float64Array(_);let g=0,M=0,b=0;for(let v=0;v<_;v++){const x=m[v]*m[v]+h[v]*h[v],A=v===0||v===_-1?.5:1;S[v]=x*p*A,M+=S[v]*d,S[v]>g&&(g=S[v],b=v)}const R={};for(const v of Un){let x=0;for(let A=0;A<_;A++)c[A]>=v.low&&c[A]<v.high&&(x+=S[A]*d);R[v.name]=x}return{frequencies:c,psd:S,bandPowers:R,dominantFrequency:c[b],totalPower:M}}analyseRing(t,i,s){const{n:l}=this;if(s<l)return null;const c=t.length,d=new Float64Array(l),p=(i-l+c)%c;for(let m=0;m<l;m++)d[m]=t[(p+m)%c];return this.analyse(d,0)}_fft(t,i){const{n:s,_bitReversed:l,_twRe:c,_twIm:d}=this;for(let p=0;p<s;p++){const m=l[p];if(m>p){let h=t[p];t[p]=t[m],t[m]=h,h=i[p],i[p]=i[m],i[m]=h}}for(let p=2;p<=s;p*=2){const m=p>>1,h=s/p;for(let _=0;_<s;_+=p)for(let S=0;S<m;S++){const g=S*h,M=c[g],b=d[g],R=_+S,v=R+m,x=M*t[v]-b*i[v],A=M*i[v]+b*t[v];t[v]=t[R]-x,i[v]=i[R]-A,t[R]+=x,i[R]+=A}}}static _log2(t){let i=0,s=t;for(;s>1;)s>>=1,i++;return i}static _reverseBits(t,i){let s=0,l=t;for(let c=0;c<i;c++)s=s<<1|l&1,l>>=1;return s}}const jo=256,b_=8,E_=.25,Ud=15,ky=60,wi=40;function Xy(r,t,i,s,l,c,d,p,m){r.clearRect(0,0,t,i);const h={l:52,r:12,t:8,b:28},_=t-h.l-h.r,S=i-h.t-h.b,g=h.t+S/2;r.fillStyle="#0d1117",r.fillRect(0,0,t,i),r.strokeStyle="rgba(48,54,61,0.5)",r.lineWidth=.5;const M=[-p,-p/2,0,p/2,p];r.font="9px monospace",r.fillStyle="#8b949e",r.textAlign="right";for(const N of M){const B=g-N/p*(S/2);r.beginPath(),r.moveTo(h.l,B),r.lineTo(t-h.r,B),r.stroke(),r.fillText(`${N>0?"+":""}${N}`,h.l-6,B+3)}r.textAlign="center",r.fillStyle="#8b949e";const b=d/An;for(let N=0;N<=b;N+=1){const B=h.l+N/b*_;r.beginPath(),r.moveTo(B,h.t),r.lineTo(B,h.t+S),r.strokeStyle="rgba(48,54,61,0.3)",r.stroke(),r.fillText(`${N}s`,B,i-6)}if(r.beginPath(),r.moveTo(h.l,g),r.lineTo(t-h.r,g),r.strokeStyle="rgba(88,166,255,0.2)",r.lineWidth=1,r.stroke(),l<2)return{};const R=S/2,v=_/(d-1),x=R/p;r.beginPath();let A=h.l;for(let N=0;N<l;N++){const B=(c-l+N+d)%d,X=h.l+N*v,nt=g-s[B]*x;N===0?(r.moveTo(X,nt),A=X):r.lineTo(X,nt)}r.lineTo(h.l+(l-1)*v,g+R),r.lineTo(A,g+R),r.closePath(),r.fillStyle=m+"0a",r.fill(),r.strokeStyle=m,r.lineWidth=1.5,r.lineJoin="round",r.lineCap="round",r.beginPath();for(let N=0;N<l;N++){const B=(c-l+N+d)%d,X=h.l+N*v,nt=g-s[B]*x;N===0?r.moveTo(X,nt):r.lineTo(X,nt)}r.stroke();const U=h.l+(l-1)*v;r.beginPath(),r.moveTo(U,h.t),r.lineTo(U,h.t+S),r.strokeStyle=m+"40",r.lineWidth=1,r.setLineDash([3,3]),r.stroke(),r.setLineDash([]);const D=(c-1+d)%d,H=s[D];r.fillStyle=m,r.font="bold 11px monospace",r.textAlign="left",r.fillText(`${H.toFixed(1)} µV`,U+6,h.t+14),r.save(),r.translate(12,g),r.rotate(-Math.PI/2),r.textAlign="center",r.fillStyle="#8b949e",r.font="9px monospace",r.fillText("µV",0,0),r.restore();let I=0,z=0,E=1/0,O=-1/0,mt=0,G=null;const Q=Math.min(l,An*2);for(let N=l-Q;N<l;N++){const B=(c-l+N+d)%d,X=s[B];I+=X,z+=X*X,X<E&&(E=X),X>O&&(O=X),G!==null&&(G>=0&&X<0||G<0&&X>=0)&&mt++,G=X}const q=I/Q,at=Math.sqrt(z/Q),tt=O-E;return{mean:q,rms:at,pp:tt,min:E,max:O,zeroCross:mt,latestVal:H,statCount:Q}}function Wy(r,t,i,s,l,c,d,p){r.fillStyle="#0d1117",r.fillRect(0,0,t,i);const m={l:44,r:10,t:20,b:24},h=t-m.l-m.r,_=i-m.t-m.b,S=l[1],g=Math.min(Math.ceil(c/S),s.length-1);let M=1e-30;for(let b=1;b<=g;b++)s[b]>M&&(M=s[b]);for(const b of Un){if(b.low>=c)continue;const R=m.l+Math.max(b.low,0)/c*h,v=m.l+Math.min(b.high,c)/c*h,x=p===b.name;r.fillStyle=b.color+(x?"20":"0a"),r.fillRect(R,m.t,v-R,_),r.fillStyle=b.color+(x?"bb":"55"),r.font="8px monospace",r.textAlign="center",r.fillText(b.label.split(" ")[0],(R+v)/2,m.t+10)}r.strokeStyle="rgba(48,54,61,0.45)",r.lineWidth=.5;for(let b=1;b<4;b++){const R=m.t+b/4*_;r.beginPath(),r.moveTo(m.l,R),r.lineTo(m.l+h,R),r.stroke()}r.beginPath();for(let b=1;b<=g;b++){const R=m.l+l[b]/c*h,v=10*Math.log10((s[b]||1e-30)/M),x=Math.max(0,(v+60)/60),A=m.t+_-Math.min(1,x)*_;b===1?r.moveTo(R,A):r.lineTo(R,A)}r.strokeStyle="#58a6ff",r.lineWidth=1.5,r.stroke(),r.lineTo(m.l+l[g]/c*h,m.t+_),r.lineTo(m.l+l[1]/c*h,m.t+_),r.closePath(),r.fillStyle="rgba(88,166,255,0.08)",r.fill(),r.fillStyle="#8b949e",r.font="9px monospace",r.textAlign="center";for(let b=0;b<=c;b+=10)r.fillText(`${b}`,m.l+b/c*h,i-6);r.fillText("Hz",m.l+h+2,i-6),r.save(),r.translate(10,m.t+_/2),r.rotate(-Math.PI/2),r.textAlign="center",r.fillStyle="#8b949e",r.font="8px monospace",r.fillText("dB",0,0),r.restore(),r.textAlign="right",r.font="8px monospace",r.fillStyle="#6e7681";for(const b of[0,-20,-40,-60]){const R=m.t+_-(b+60)/60*_;r.fillText(`${b}`,m.l-4,R+3)}}function jy(r,t,i,s){r.fillStyle="#0d1117",r.fillRect(0,0,t,i);const l={l:10,r:10,t:6,b:4},c=Math.min(16,(i-l.t-l.b-(Un.length-1)*4)/Un.length),d=Math.max(...Un.map(m=>s[m.name]||0),1e-6),p=Un.reduce((m,h)=>m+(s[h.name]||0),0)||1e-6;Un.forEach((m,h)=>{const _=s[m.name]||0,S=_/d,g=(_/p*100).toFixed(1),M=l.t+h*(c+4),b=t-l.l-l.r-82;r.fillStyle=m.color,r.font="bold 9px monospace",r.textAlign="left",r.fillText(m.label.charAt(0),l.l,M+c-3);const R=l.l+14;r.fillStyle="rgba(48,54,61,0.5)",r.beginPath(),r.roundRect(R,M,b,c,3),r.fill(),S>0&&(r.fillStyle=m.color+"cc",r.beginPath(),r.roundRect(R,M,Math.max(4,b*S),c,3),r.fill()),r.fillStyle="#e6edf3",r.font="9px monospace",r.textAlign="right",r.fillText(`${g}%`,t-l.r,M+c-3)})}function qy(r,t,i,s,l,c,d,p){if(r.fillStyle="#0d1117",r.fillRect(0,0,t,i),l<10)return;const m={l:8,r:8,t:6,b:20},h=t-m.l-m.r,_=i-m.t-m.b,S=new Float32Array(wi),g=2*p/wi,M=Math.min(l,An*2);for(let v=l-M;v<l;v++){const x=(c-l+v+d)%d,A=s[x],U=Math.floor((A+p)/g);U>=0&&U<wi&&S[U]++}let b=0;for(let v=0;v<wi;v++)S[v]>b&&(b=S[v]);if(b===0)return;const R=h/wi;for(let v=0;v<wi;v++){const x=S[v]/b*_,A=m.l+v*R,U=m.t+_-x,D=Math.abs(v-wi/2)/(wi/2),H=Math.floor(88+D*160),I=Math.floor(166-D*120),z=Math.floor(255-D*200);r.fillStyle=`rgba(${H},${I},${z},0.6)`,r.fillRect(A+.5,U,R-1,x)}r.fillStyle="#6e7681",r.font="8px monospace",r.textAlign="center",r.fillText(`-${p}`,m.l+R,i-4),r.fillText("0",m.l+h/2,i-4),r.fillText(`+${p}`,t-m.r-R,i-4),r.strokeStyle="rgba(88,166,255,0.3)",r.lineWidth=1,r.beginPath();for(let v=0;v<wi;v++){const x=m.l+(v+.5)*R,A=(v-wi/2)/(wi/4),U=Math.exp(-.5*A*A),D=m.t+_-U*_*.85;v===0?r.moveTo(x,D):r.lineTo(x,D)}r.stroke()}const Yy=dt.memo(function({chIdx:t,eegData:i,yRange:s,onClose:l}){var G;const c=dt.useRef(null),d=dt.useRef(null),p=dt.useRef(null),m=dt.useRef(null),h=dt.useRef(0),_=dt.useRef(0),S=dt.useRef(null),[g,M]=dt.useState(null),[b,R]=dt.useState({}),[v,x]=dt.useState({band:"",freq:0}),[A,U]=dt.useState(null),D=dt.useMemo(()=>new ol(jo,An),[]),H=hp[t],I=dt.useRef({trace:{w:0,h:0,pw:0,ph:0,dpr:1},spectrum:{w:0,h:0,pw:0,ph:0,dpr:1},band:{w:0,h:0,pw:0,ph:0,dpr:1},hist:{w:0,h:0,pw:0,ph:0,dpr:1}}),z=dt.useRef({trace:!0,spectrum:!0,band:!0,hist:!0});dt.useEffect(()=>{const Q={trace:c.current,spectrum:d.current,band:p.current,hist:m.current},q={},at=[];for(const[nt,vt]of Object.entries(Q)){if(!vt)continue;q[nt]=vt.getContext("2d",{alpha:!1});const F=new ResizeObserver(k=>{const et=k[0];if(!et)return;const pt=Math.min(window.devicePixelRatio||1,2),{width:bt,height:Z}=et.contentRect,V=Math.round(bt*pt),ut=Math.round(Z*pt);I.current[nt]={w:bt,h:Z,pw:V,ph:ut,dpr:pt},z.current[nt]=!0});F.observe(vt),at.push(F)}let tt=null,N={},B={band:"",freq:0};const X=()=>{_.current++;for(const[et,pt]of Object.entries(Q)){if(!pt||!z.current[et])continue;const{pw:bt,ph:Z,dpr:V}=I.current[et];bt===0||Z===0||(pt.width=bt,pt.height=Z,q[et].setTransform(V,0,0,V,0,0),z.current[et]=!1)}const nt=i.buffers.current,vt=i.writeIndex.current,F=i.samplesInBuffer.current,k=i.bufferSize;if(q.trace){const{w:et,h:pt}=I.current.trace;if(et>0&&pt>0){const bt=Xy(q.trace,et,pt,nt[t],F,vt,k,s,H);bt.rms!==void 0&&_.current%Ud===0&&(tt=bt)}}if(_.current%b_===0&&F>=jo){const et=D.analyseRing(nt[t],vt,F);if(et){if(!S.current||S.current.length!==et.psd.length)S.current=new Float64Array(et.psd);else{const Z=S.current,V=et.psd;for(let ut=0;ut<Z.length;ut++)Z[ut]=Z[ut]*(1-E_)+V[ut]*E_}N=et.bandPowers;let pt="",bt=0;for(const Z of Un)(et.bandPowers[Z.name]||0)>bt&&(bt=et.bandPowers[Z.name],pt=Z.name);B={band:pt,freq:et.dominantFrequency}}}if(q.spectrum&&S.current){const{w:et,h:pt}=I.current.spectrum;et>0&&pt>0&&Wy(q.spectrum,et,pt,S.current,D._frequencies,ky,N,A)}if(q.band&&_.current%b_===0){const{w:et,h:pt}=I.current.band;et>0&&pt>0&&jy(q.band,et,pt,N)}if(q.hist&&_.current%Ud===0){const{w:et,h:pt}=I.current.hist;et>0&&pt>0&&qy(q.hist,et,pt,nt[t],F,vt,k,s)}_.current%Ud===0&&(tt&&M(tt),N&&R(N),x(et=>et.band===B.band&&et.freq===B.freq?et:B)),h.current=requestAnimationFrame(X)};return h.current=requestAnimationFrame(X),()=>{cancelAnimationFrame(h.current),at.forEach(nt=>nt.disconnect())}},[t,i,s,H,D,A]);const E=Un.find(Q=>Q.name===v.band),O=(E==null?void 0:E.color)||"#8b949e",mt=Un.reduce((Q,q)=>Q+(b[q.name]||0),0);return L.jsx("div",{className:"detail-overlay",onClick:l,children:L.jsxs("div",{className:"detail-panel",onClick:Q=>Q.stopPropagation(),children:[L.jsxs("div",{className:"detail-header",children:[L.jsxs("div",{className:"detail-title-group",children:[L.jsxs("span",{className:"detail-ch-badge",style:{borderColor:H,color:H},children:["Ch ",t+1]}),L.jsx("span",{className:"detail-title",children:"Channel Analysis"}),L.jsx("span",{className:"detail-subtitle",children:"Real-time single-channel deep inspection"})]}),L.jsxs("div",{className:"detail-header-stats",children:[v.band&&L.jsxs("span",{className:"detail-dominant",style:{color:O},children:[L.jsx("span",{className:"detail-dominant-label",children:"Dominant"}),L.jsx("span",{className:"detail-dominant-band",children:(E==null?void 0:E.label)||v.band}),L.jsxs("span",{className:"detail-dominant-freq",children:[v.freq.toFixed(1)," Hz"]})]}),g&&L.jsxs("span",{className:"detail-rms-badge",children:["RMS ",(G=g.rms)==null?void 0:G.toFixed(1)," µV"]})]}),L.jsx("button",{className:"detail-close",onClick:l,children:L.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:L.jsx("path",{d:"M4 4L14 14M14 4L4 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]}),L.jsxs("div",{className:"detail-body",children:[L.jsxs("div",{className:"detail-trace-section",children:[L.jsxs("div",{className:"detail-section-head",children:[L.jsx("span",{className:"detail-section-title",children:"Time Domain"}),L.jsxs("span",{className:"detail-section-meta",children:[An," Hz · ±",s," µV"]})]}),L.jsx("div",{className:"detail-trace-canvas-wrap",children:L.jsx("canvas",{ref:c,style:{display:"block",width:"100%",height:"100%"}})})]}),L.jsxs("div",{className:"detail-analysis",children:[L.jsxs("div",{className:"detail-card",children:[L.jsxs("div",{className:"detail-card-head",children:[L.jsx("span",{className:"detail-card-title",children:"Power Spectrum"}),L.jsxs("span",{className:"detail-card-meta",children:[jo,"pt FFT · ",(An/jo).toFixed(1)," Hz/bin"]})]}),L.jsx("div",{className:"detail-card-canvas",children:L.jsx("canvas",{ref:d,style:{display:"block",width:"100%",height:"100%"}})})]}),L.jsxs("div",{className:"detail-card",children:[L.jsxs("div",{className:"detail-card-head",children:[L.jsx("span",{className:"detail-card-title",children:"Band Power Distribution"}),L.jsx("span",{className:"detail-card-meta",children:mt>0?`${mt.toFixed(2)} µV²/Hz total`:"—"})]}),L.jsx("div",{className:"detail-card-canvas detail-card-canvas-sm",children:L.jsx("canvas",{ref:p,style:{display:"block",width:"100%",height:"100%"}})}),L.jsx("div",{className:"detail-band-legend",children:Un.map(Q=>L.jsxs("button",{className:`detail-band-btn${A===Q.name?" active":""}`,style:{"--band-color":Q.color},onClick:()=>U(q=>q===Q.name?null:Q.name),children:[L.jsx("span",{className:"detail-band-dot"}),Q.label.split(" ")[0]]},Q.name))})]}),L.jsxs("div",{className:"detail-bottom-row",children:[L.jsxs("div",{className:"detail-card detail-card-half",children:[L.jsx("div",{className:"detail-card-head",children:L.jsx("span",{className:"detail-card-title",children:"Amplitude Distribution"})}),L.jsx("div",{className:"detail-card-canvas detail-card-canvas-sm",children:L.jsx("canvas",{ref:m,style:{display:"block",width:"100%",height:"100%"}})})]}),L.jsxs("div",{className:"detail-card detail-card-half detail-stats-card",children:[L.jsx("div",{className:"detail-card-head",children:L.jsx("span",{className:"detail-card-title",children:"Signal Metrics"})}),L.jsxs("div",{className:"detail-stats-grid",children:[L.jsx(Cs,{label:"RMS",value:g==null?void 0:g.rms,unit:"µV",precision:2}),L.jsx(Cs,{label:"Peak-Peak",value:g==null?void 0:g.pp,unit:"µV",precision:1}),L.jsx(Cs,{label:"Mean",value:g==null?void 0:g.mean,unit:"µV",precision:2}),L.jsx(Cs,{label:"Min",value:g==null?void 0:g.min,unit:"µV",precision:1}),L.jsx(Cs,{label:"Max",value:g==null?void 0:g.max,unit:"µV",precision:1}),L.jsx(Cs,{label:"Zero-X",value:g==null?void 0:g.zeroCross,unit:"/2s",precision:0}),L.jsx(Cs,{label:"Live",value:g==null?void 0:g.latestVal,unit:"µV",precision:1,highlight:!0})]})]})]})]})]}),L.jsxs("div",{className:"detail-footer",children:[L.jsxs("span",{children:[jo,"-pt Hanning · Cooley-Tukey radix-2"]}),L.jsxs("span",{className:"detail-footer-keys",children:[L.jsx("kbd",{children:"Esc"})," Close"]}),L.jsx("span",{children:"Not a medical device"})]})]})})});function Cs({label:r,value:t,unit:i,precision:s=2,highlight:l}){const c=t!=null?s===0?String(Math.round(t)):t.toFixed(s):"—";return L.jsxs("div",{className:`detail-stat-row${l?" highlight":""}`,children:[L.jsx("span",{className:"detail-stat-label",children:r}),L.jsx("span",{className:"detail-stat-value",children:c}),L.jsx("span",{className:"detail-stat-unit",children:i})]})}const ws=256,Zy=60,Ky=12,T_=.3,Qy=350;function Jy(r,t,i,s,l,c,d,p){const h=t-16,_=24,S=i-24,g=h-48,M=S-_,b=l[1],R=Math.min(Math.ceil(c/b),s.length-1);let v=1e-30;for(let x=1;x<=R;x++)s[x]>v&&(v=s[x]);for(const x of Un){if(x.low>=c)continue;const A=48+Math.max(x.low,0)/c*g,U=48+Math.min(x.high,c)/c*g,D=p===x.name;r.fillStyle=x.color+(D?"28":"12"),r.fillRect(A,_,U-A,M),r.fillStyle=x.color+(D?"cc":"66"),r.font="9px monospace",r.textAlign="center",r.fillText(x.name,(A+U)/2,_+10)}r.strokeStyle="rgba(48,54,61,0.45)",r.lineWidth=.5;for(let x=1;x<5;x++){const A=_+x/5*M;r.beginPath(),r.moveTo(48,A),r.lineTo(h,A),r.stroke()}for(const x of[4,8,13,30,50]){if(x>c)continue;const A=48+x/c*g;r.beginPath(),r.moveTo(A,_),r.lineTo(A,S),r.stroke()}r.beginPath();for(let x=1;x<=R;x++){const A=48+l[x]/c*g;let U;if(d){const H=10*Math.log10((s[x]||1e-30)/v);U=Math.max(0,(H+60)/60)}else U=s[x]/v;const D=S-Math.min(1,U)*M;x===1?r.moveTo(A,D):r.lineTo(A,D)}r.strokeStyle="#58a6ff",r.lineWidth=1.5,r.stroke(),r.lineTo(48+l[R]/c*g,S),r.lineTo(48+l[1]/c*g,S),r.closePath(),r.fillStyle="rgba(88,166,255,0.07)",r.fill(),r.fillStyle="#8b949e",r.font="10px monospace",r.textAlign="center";for(let x=0;x<=c;x+=10)r.fillText(`${x}`,48+x/c*g,S+14);if(r.fillText("Hz",h+2,S+14),r.save(),r.translate(11,_+M/2),r.rotate(-Math.PI/2),r.textAlign="center",r.fillText(d?"dB":"µV²/Hz",0,0),r.restore(),r.textAlign="right",r.font="9px monospace",d)for(const x of[0,-20,-40,-60]){const A=S-(x+60)/60*M;r.fillText(`${x}`,44,A+3)}}const $y=dt.memo(function({eegData:t}){var Q;const i=dt.useRef(null),s=dt.useRef(0),l=dt.useRef(0),c=dt.useRef(null),d=dt.useRef(0),p=dt.useRef(null),m=dt.useRef({}),h=dt.useRef(window.devicePixelRatio||1),_=dt.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),S=dt.useRef(!0),[g,M]=dt.useState(-1),[b,R]=dt.useState(!0),[v,x]=dt.useState(!1),[A,U]=dt.useState(null),[D,H]=dt.useState({}),[I,z]=dt.useState({band:"",freq:0}),E=dt.useMemo(()=>new ol(ws,An),[]);p.current||(p.current=new Float64Array(ws)),dt.useEffect(()=>{const q=i.current;if(!q)return;const at=q.getContext("2d",{alpha:!1}),tt=new ResizeObserver(B=>{const X=B[0];if(!X)return;const nt=window.devicePixelRatio||1;h.current=nt;const{width:vt,height:F}=X.contentRect;_.current={w:vt,h:F,pw:Math.round(vt*nt),ph:Math.round(F*nt),dpr:nt},S.current=!0});tt.observe(q);const N=()=>{const{w:B,h:X,pw:nt,ph:vt}=_.current;if(B===0||X===0){s.current=requestAnimationFrame(N);return}if(S.current&&(S.current=!1,q.width=nt,q.height=vt),at.setTransform(h.current,0,0,h.current,0,0),at.fillStyle="#0d1117",at.fillRect(0,0,B,X),l.current++,!v&&l.current%Ky===0){const k=t.buffers.current,et=t.writeIndex.current,pt=t.samplesInBuffer.current;if(k&&pt>=ws){let bt;if(g===-1){const Z=p.current,V=t.bufferSize,ut=(et-ws+V)%V;for(let Mt=0;Mt<ws;Mt++){let Ot=0;const wt=(ut+Mt)%V;for(let ne=0;ne<yn;ne++)Ot+=k[ne][wt];Z[Mt]=Ot/yn}bt=E.analyse(Z,0)}else bt=E.analyseRing(k[g],et,pt);if(bt){if(!c.current||c.current.length!==bt.psd.length)c.current=new Float64Array(bt.psd);else{const V=c.current,ut=bt.psd;for(let Mt=0;Mt<V.length;Mt++)V[Mt]=V[Mt]*(1-T_)+ut[Mt]*T_}const Z=performance.now();if(Z-d.current>Qy){d.current=Z,m.current=bt.bandPowers,H(bt.bandPowers);let V="",ut=0;for(const Mt of Un)(bt.bandPowers[Mt.name]||0)>ut&&(ut=bt.bandPowers[Mt.name],V=Mt.name);z(Mt=>Mt.band===V&&Mt.freq===bt.dominantFrequency?Mt:{band:V,freq:bt.dominantFrequency})}}}}const F=c.current;!F||F.length===0?(at.fillStyle="#4b5563",at.font="13px monospace",at.textAlign="center",at.fillText("Collecting samples…",B/2,X/2)):Jy(at,B,X,F,E._frequencies,Zy,b,A),s.current=requestAnimationFrame(N)};return s.current=requestAnimationFrame(N),()=>{cancelAnimationFrame(s.current),tt.disconnect()}},[t,g,b,v,A,E]);const O=Math.max(...Un.map(q=>D[q.name]||0),1e-6),mt=g===-1?"Avg":`Ch ${g+1}`,G=((Q=Un.find(q=>q.name===I.band))==null?void 0:Q.color)||"#8b949e";return L.jsxs("div",{className:"spectral-panel",children:[L.jsxs("div",{className:"spectral-toolbar",children:[L.jsxs("span",{className:"spectral-title",children:["Spectral Analysis"," ",L.jsxs("small",{style:{color:"var(--text-dim)",fontWeight:400},children:["— ",mt]})]}),L.jsxs("div",{className:"spectral-channels",children:[L.jsx("button",{className:`sp-ch${g===-1?" active":""}`,onClick:()=>M(-1),children:"Avg"}),Array.from({length:yn},(q,at)=>L.jsx("button",{className:`sp-ch${g===at?" active":""}`,onClick:()=>M(at),children:at+1},at))]}),L.jsxs("div",{className:"spectral-ctrls",children:[L.jsx("button",{className:`btn${b?" active":""}`,onClick:()=>R(q=>!q),children:b?"Log":"Lin"}),L.jsx("button",{className:`btn${v?" active":""}`,onClick:()=>x(q=>!q),children:v?"▶":"⏸"})]})]}),L.jsxs("div",{className:"spectral-canvas-wrap",children:[L.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}}),v&&L.jsx("div",{className:"spectral-paused",children:"PAUSED"})]}),L.jsx("div",{className:"spectral-bands",children:Un.map(q=>{const at=D[q.name]||0,tt=O>0?at/O*100:0,N=A===q.name;return L.jsxs("div",{className:`sp-band${N?" selected":""}`,onClick:()=>U(N?null:q.name),children:[L.jsxs("div",{className:"sp-band-head",children:[L.jsx("span",{className:"sp-band-dot",style:{background:q.color}}),L.jsx("span",{className:"sp-band-name",style:{color:q.color},children:q.label}),L.jsxs("span",{className:"sp-band-hz",children:[q.low,"–",q.high," Hz"]})]}),L.jsx("div",{className:"sp-band-track",children:L.jsx("div",{className:"sp-band-fill",style:{width:`${tt}%`,background:q.color}})}),L.jsx("span",{className:"sp-band-val",children:at<.01?at.toExponential(1):at.toFixed(2)})]},q.name)})}),L.jsxs("div",{className:"spectral-footer",children:[L.jsxs("span",{children:["Dominant:"," ",L.jsx("strong",{style:{color:G},children:I.band})," ","(",I.freq.toFixed(1)," Hz)"]}),L.jsxs("span",{children:[ws," pt · ",An," Hz ·"," ",(An/ws).toFixed(1)," Hz/bin"]})]})]})}),tM=dt.memo(function(){const[t,i]=dt.useState(!1),[s,l]=dt.useState(0),[c,d]=dt.useState(0),[p,m]=dt.useState(0),h=dt.useRef(0),_=dt.useRef(performance.now()),S=dt.useRef(0);return dt.useEffect(()=>{const g=M=>{(M.key==="p"||M.key==="P")&&i(b=>!b)};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[]),dt.useEffect(()=>{if(!t)return;const g=()=>{h.current++;const M=performance.now(),b=M-_.current;if(b>=1e3){l(Math.round(h.current*(1e3/b))),d(Math.round(b/h.current*100)/100);const R=performance.memory;R&&m(Math.round(R.usedJSHeapSize/1048576)),h.current=0,_.current=M}S.current=requestAnimationFrame(g)};return S.current=requestAnimationFrame(g),()=>cancelAnimationFrame(S.current)},[t]),t?L.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.8)",color:"#0f0",fontFamily:"monospace",fontSize:"12px",padding:"8px 12px",borderRadius:"4px",zIndex:1e4,border:"1px solid #0f0",userSelect:"none"},children:[L.jsxs("div",{children:["FPS: ",s]}),L.jsxs("div",{children:["Frame: ",c,"ms"]}),L.jsxs("div",{children:["Memory: ",p,"MB"]}),L.jsx("div",{style:{marginTop:"4px",fontSize:"10px",opacity:.7},children:"Press P to toggle"})]}):null});function eM({onSelect:r,onBack:t}){const[i,s]=dt.useState([]),[l,c]=dt.useState(!0);dt.useEffect(()=>{d()},[]);async function d(){try{const _=await(await fetch("/api/recordings")).json();s(_.recordings||[])}catch(h){console.error("Failed to load recordings:",h)}finally{c(!1)}}function p(h){return new Date(h*1e3).toLocaleString()}function m(h){return h<1024?`${h} B`:h<1024*1024?`${(h/1024).toFixed(1)} KB`:`${(h/1024/1024).toFixed(1)} MB`}return L.jsxs("div",{className:"session-list",children:[L.jsxs("header",{className:"session-header",children:[L.jsx("h2",{children:"Saved Sessions"}),L.jsx("button",{className:"btn btn-back",onClick:t,children:"← Back to Live"})]}),l&&L.jsx("div",{className:"list-loading",children:L.jsx("p",{children:"Loading recordings..."})}),!l&&i.length===0&&L.jsx("div",{className:"list-empty",children:L.jsx("p",{children:"No recordings yet. Record a session on the Live tab."})}),!l&&i.length>0&&L.jsx("div",{className:"list-container",children:L.jsxs("table",{className:"recordings-table",children:[L.jsx("thead",{children:L.jsxs("tr",{children:[L.jsx("th",{children:"Filename"}),L.jsx("th",{children:"Size"}),L.jsx("th",{children:"Date & Time"}),L.jsx("th",{children:"Action"})]})}),L.jsx("tbody",{children:i.map(h=>L.jsxs("tr",{children:[L.jsx("td",{className:"filename",children:h.filename}),L.jsx("td",{className:"size",children:m(h.size)}),L.jsx("td",{className:"mtime",children:p(h.mtime)}),L.jsx("td",{className:"action",children:L.jsx("button",{className:"btn btn-open",onClick:()=>r(h.filename),children:"Open"})})]},h.filename))})]})}),L.jsx("style",{children:`
        .session-list {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 20px;
          background: var(--bg);
        }

        .session-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border);
          padding-bottom: 15px;
        }

        .session-header h2 {
          margin: 0;
          color: var(--text);
          font-size: 20px;
        }

        .btn-back {
          padding: 8px 16px;
          background: var(--border);
          color: var(--text);
          border: 1px solid var(--border);
          border-radius: 6px;
          cursor: pointer;
          font-size: 13px;
          transition: background 0.2s;
        }

        .btn-back:hover {
          background: var(--accent);
          border-color: var(--accent);
        }

        .list-loading,
        .list-empty {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          color: var(--dim);
          font-size: 14px;
        }

        .list-container {
          flex: 1;
          overflow-y: auto;
        }

        .recordings-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
        }

        .recordings-table thead {
          position: sticky;
          top: 0;
          background: var(--surface);
          z-index: 1;
        }

        .recordings-table th {
          padding: 12px;
          text-align: left;
          color: var(--text-dim);
          font-weight: 600;
          border-bottom: 1px solid var(--border);
        }

        .recordings-table td {
          padding: 12px;
          border-bottom: 1px solid var(--border);
          color: var(--text);
        }

        .recordings-table tbody tr:hover {
          background: var(--surface);
        }

        .filename {
          font-family: monospace;
          font-size: 12px;
          max-width: 300px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .size {
          text-align: right;
          color: var(--dim);
          font-family: monospace;
        }

        .mtime {
          color: var(--dim);
          font-family: monospace;
          font-size: 12px;
        }

        .btn-open {
          padding: 6px 12px;
          background: var(--accent);
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 600;
          transition: opacity 0.2s;
        }

        .btn-open:hover {
          opacity: 0.8;
        }
      `})]})}const nM="rgba(48,54,61,0.4)",iM="rgba(88,166,255,0.12)",aM="rgba(88,166,255,0.6)",sM="#0d1117",rM=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],oM=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"}];function lM({filename:r,onBack:t}){const[i,s]=dt.useState(!0),[l,c]=dt.useState(null),[d,p]=dt.useState(!1),[m,h]=dt.useState(0),[_,S]=dt.useState(1),[g,M]=dt.useState(100),[b,R]=dt.useState(4),[v,x]=dt.useState([]),[A,U]=dt.useState(""),[D,H]=dt.useState(!1),I=dt.useRef(null),z=dt.useRef(0),E=dt.useRef(0),O=dt.useRef(null),mt=dt.useRef(0),G=dt.useRef(0),Q=dt.useRef(!1),q=dt.useRef(1),at=dt.useRef(100),tt=dt.useRef(4),N=dt.useRef(window.devicePixelRatio||1),B=dt.useRef({w:0,h:0});Q.current=d,q.current=_,at.current=g,tt.current=b,E.current=m;const X=z.current,nt=X/An,vt=m/An;dt.useEffect(()=>{let V=!1;async function ut(){s(!0),c(null);try{const Mt=await fetch(`/api/recordings/data/${encodeURIComponent(r)}`);if(!Mt.ok)throw new Error(`HTTP ${Mt.status}`);const Ot=await Mt.json();if(Ot.error)throw new Error(Ot.error);const ne=(Ot.data||[]).slice(1),Ft=ne.length;if(Ft===0)throw new Error("Empty recording");const ae=Array.from({length:yn},()=>new Float32Array(Ft));for(let re=0;re<Ft;re++){const qt=ne[re].split(",");for(let pe=0;pe<yn;pe++)ae[pe][re]=parseFloat(qt[pe+1])||0}V||(I.current=ae,z.current=Ft,h(0),s(!1))}catch(Mt){V||(c(Mt instanceof Error?Mt.message:String(Mt)),s(!1))}}return ut(),()=>{V=!0}},[r]),dt.useEffect(()=>{fetch(`/api/recordings/annotations/${encodeURIComponent(r)}`).then(V=>V.json()).then(V=>x(V.annotations||[])).catch(()=>{})},[r]),dt.useEffect(()=>{const V=O.current;if(!V||i||l)return;const ut=V.getContext("2d",{alpha:!1}),Mt=Ot=>{if(Q.current&&G.current>0){const j=(Ot-G.current)/1e3*An*q.current;let Te=E.current+j;Te>=z.current&&(Te=z.current-1,p(!1)),E.current=Te,h(Te)}G.current=Ot;const wt=N.current,ne=V.getBoundingClientRect(),Ft=ne.width,ae=ne.height,re=Math.round(Ft*wt),qt=Math.round(ae*wt);(B.current.w!==re||B.current.h!==qt)&&(B.current={w:re,h:qt},V.width=re,V.height=qt,ut.setTransform(wt,0,0,wt,0,0)),F(ut,Ft,ae),mt.current=requestAnimationFrame(Mt)};return G.current=0,mt.current=requestAnimationFrame(Mt),()=>cancelAnimationFrame(mt.current)},[i,l]);function F(V,ut,Mt){const Ot=I.current;if(!Ot)return;V.fillStyle=sM,V.fillRect(0,0,ut,Mt);const wt=z.current,ne=E.current,Ft=tt.current*An,ae=at.current,re=Math.floor(Ft/2);let qt=Math.floor(ne)-re,pe=qt+Ft;qt<0&&(qt=0,pe=Ft),pe>wt&&(pe=wt,qt=Math.max(0,wt-Ft));const j=Mt/yn;for(let P=0;P<yn;P++){const T=P*j,$=T+j/2,St=j/2;P>0&&(V.strokeStyle=nM,V.lineWidth=.5,V.beginPath(),V.moveTo(0,T),V.lineTo(ut,T),V.stroke()),V.strokeStyle=iM,V.lineWidth=.5,V.beginPath(),V.moveTo(0,$),V.lineTo(ut,$),V.stroke(),V.fillStyle="rgba(230,237,243,0.4)",V.font="10px monospace",V.fillText(`Ch ${P+1}`,4,T+12);const At=Ot[P],ht=pe-qt;if(ht<2)continue;const Wt=ht>2e3?Math.floor(ht/2e3):1,Ut=ut/(ht-1),Jt=St*.85/ae;V.strokeStyle=hp[P],V.lineWidth=1.2,V.lineJoin="round",V.beginPath();for(let $t=0;$t<ht;$t+=Wt){const Ct=$t*Ut,Rt=$-At[qt+$t]*Jt;$t===0?V.moveTo(Ct,Rt):V.lineTo(Ct,Rt)}V.stroke()}const Te=Math.floor(ne)>=qt&&Math.floor(ne)<=pe?(Math.floor(ne)-qt)/(pe-qt)*ut:ut/2;V.strokeStyle=aM,V.lineWidth=1.5,V.setLineDash([4,3]),V.beginPath(),V.moveTo(Te,0),V.lineTo(Te,Mt),V.stroke(),V.setLineDash([]),V.fillStyle="rgba(230,237,243,0.3)",V.font="10px monospace";const me=qt/An,Ae=pe/An,kt=Math.min(10,Math.floor(ut/80));for(let P=0;P<=kt;P++){const T=me+(Ae-me)*(P/kt),$=P/kt*ut;V.fillText(Z(T),$+2,Mt-4)}}const k=dt.useCallback(async V=>{try{await fetch(`/api/recordings/annotations/${encodeURIComponent(r)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({annotations:V})})}catch{}},[r]);function et(){if(!A.trim())return;const V=Math.floor(m)/An,ut={id:Date.now(),frame:Math.floor(m),time:V,text:A,timestamp:new Date().toISOString()},Mt=[...v,ut];x(Mt),k(Mt),U(""),H(!1)}function pt(V){const ut=v.filter(Mt=>Mt.id!==V);x(ut),k(ut)}function bt(V){h(V.frame),E.current=V.frame,p(!1)}function Z(V){const ut=Math.floor(V/60),Mt=Math.floor(V%60),Ot=Math.floor(V%1*100);return`${String(ut).padStart(2,"0")}:${String(Mt).padStart(2,"0")}.${String(Ot).padStart(2,"0")}`}return i?L.jsxs("div",{className:"sv-root sv-center",children:[L.jsx("p",{children:"Loading recording..."}),L.jsx("style",{children:Ld})]}):l?L.jsxs("div",{className:"sv-root sv-center",children:[L.jsxs("p",{children:["Error: ",l]}),L.jsx("button",{className:"sv-btn",onClick:t,children:"Back"}),L.jsx("style",{children:Ld})]}):L.jsxs("div",{className:"sv-root",children:[L.jsxs("header",{className:"sv-header",children:[L.jsxs("div",{className:"sv-title",children:[L.jsx("button",{className:"sv-btn",onClick:t,children:"← Back"}),L.jsx("h2",{children:r}),L.jsxs("span",{className:"sv-meta",children:[X.toLocaleString()," frames · ",Z(nt)]})]}),L.jsxs("div",{className:"sv-controls",children:[L.jsx("button",{className:`sv-btn${d?" active":""}`,onClick:()=>{d||(G.current=0),p(!d)},children:d?"⏸ Pause":"▶ Play"}),L.jsx("button",{className:"sv-btn",onClick:()=>{h(0),E.current=0,p(!1)},children:"⏮ Rewind"}),L.jsxs("select",{value:_,onChange:V=>S(parseFloat(V.target.value)),className:"sv-select",children:[L.jsx("option",{value:.25,children:"0.25x"}),L.jsx("option",{value:.5,children:"0.5x"}),L.jsx("option",{value:1,children:"1x"}),L.jsx("option",{value:1.5,children:"1.5x"}),L.jsx("option",{value:2,children:"2x"}),L.jsx("option",{value:4,children:"4x"})]}),L.jsx("div",{className:"sv-sep"}),L.jsx("label",{className:"sv-label",children:"Window"}),L.jsx("select",{value:b,onChange:V=>R(parseInt(V.target.value)),className:"sv-select",children:oM.map(V=>L.jsx("option",{value:V.value,children:V.label},V.value))}),L.jsx("label",{className:"sv-label",children:"Scale"}),L.jsx("select",{value:g,onChange:V=>M(parseInt(V.target.value)),className:"sv-select",children:rM.map(V=>L.jsx("option",{value:V.value,children:V.label},V.value))})]})]}),L.jsxs("div",{className:"sv-timeline",children:[L.jsx("span",{className:"sv-time",children:Z(vt)}),L.jsx("input",{type:"range",min:"0",max:X-1,value:Math.floor(m),onChange:V=>{const ut=parseInt(V.target.value);h(ut),E.current=ut,p(!1),G.current=0},className:"sv-slider"}),L.jsx("span",{className:"sv-time",children:Z(nt)})]}),L.jsxs("div",{className:"sv-content",children:[L.jsx("div",{className:"sv-canvas-wrap",children:L.jsx("canvas",{ref:O,style:{display:"block",width:"100%",height:"100%"}})}),L.jsxs("div",{className:"sv-annotations",children:[L.jsxs("div",{className:"sv-anno-header",children:[L.jsx("h3",{children:"Annotations"}),L.jsx("button",{className:"sv-btn sv-btn-sm",onClick:()=>H(!D),children:D?"Cancel":"+ Add"})]}),D&&L.jsxs("div",{className:"sv-anno-form",children:[L.jsx("textarea",{value:A,onChange:V=>U(V.target.value),placeholder:"Annotation at current position...",onKeyDown:V=>{V.key==="Enter"&&V.ctrlKey&&et()}}),L.jsx("button",{className:"sv-btn sv-btn-primary",onClick:et,children:"Add"})]}),L.jsx("div",{className:"sv-anno-list",children:v.length===0?L.jsx("p",{className:"sv-anno-empty",children:"No annotations"}):v.map(V=>L.jsxs("div",{className:"sv-anno-item",onClick:()=>bt(V),children:[L.jsx("span",{className:"sv-anno-time",children:Z(V.time)}),L.jsx("span",{className:"sv-anno-text",children:V.text}),L.jsx("button",{className:"sv-anno-del",onClick:ut=>{ut.stopPropagation(),pt(V.id)},children:"✕"})]},V.id))})]})]}),L.jsx("style",{children:Ld})]})}const Ld=`
  .sv-root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background: #0d1117;
    color: #e6edf3;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  .sv-center {
    align-items: center;
    justify-content: center;
    gap: 12px;
    font-size: 14px;
    color: #8b949e;
  }

  .sv-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px;
    border-bottom: 1px solid #30363d;
    flex-wrap: wrap;
    gap: 10px;
  }
  .sv-title {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .sv-title h2 {
    margin: 0;
    font-size: 14px;
    font-family: monospace;
    color: #58a6ff;
  }
  .sv-meta {
    font-size: 11px;
    color: #8b949e;
    font-family: monospace;
  }
  .sv-controls {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .sv-sep {
    width: 1px;
    height: 20px;
    background: #30363d;
    margin: 0 4px;
  }
  .sv-label {
    font-size: 11px;
    color: #8b949e;
  }

  .sv-btn {
    padding: 6px 12px;
    background: #21262d;
    color: #e6edf3;
    border: 1px solid #30363d;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    transition: all 0.15s;
  }
  .sv-btn:hover { background: #30363d; }
  .sv-btn.active { background: #58a6ff; border-color: #58a6ff; color: #fff; }
  .sv-btn-sm { padding: 3px 8px; font-size: 11px; }
  .sv-btn-primary { background: #58a6ff; border-color: #58a6ff; color: #fff; }
  .sv-btn-primary:hover { opacity: 0.85; }

  .sv-select {
    padding: 5px 8px;
    background: #21262d;
    color: #e6edf3;
    border: 1px solid #30363d;
    border-radius: 4px;
    font-size: 12px;
  }

  .sv-timeline {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 16px;
    border-bottom: 1px solid #30363d;
  }
  .sv-time {
    font-size: 12px;
    font-family: monospace;
    color: #8b949e;
    min-width: 64px;
  }
  .sv-slider {
    flex: 1;
    height: 6px;
    border-radius: 3px;
    background: #30363d;
    outline: none;
    -webkit-appearance: none;
    cursor: pointer;
  }
  .sv-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #58a6ff;
    cursor: pointer;
  }
  .sv-slider::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #58a6ff;
    border: none;
    cursor: pointer;
  }

  .sv-content {
    display: flex;
    flex: 1;
    overflow: hidden;
  }
  .sv-canvas-wrap {
    flex: 1;
    min-width: 0;
    position: relative;
  }

  .sv-annotations {
    width: 260px;
    border-left: 1px solid #30363d;
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow: hidden;
  }
  .sv-anno-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  .sv-anno-header h3 {
    margin: 0;
    font-size: 12px;
    color: #8b949e;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .sv-anno-form {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 8px;
  }
  .sv-anno-form textarea {
    width: 100%;
    padding: 6px 8px;
    background: #0d1117;
    color: #e6edf3;
    border: 1px solid #30363d;
    border-radius: 4px;
    font-size: 12px;
    font-family: inherit;
    resize: vertical;
    min-height: 50px;
  }
  .sv-anno-form textarea:focus {
    outline: none;
    border-color: #58a6ff;
  }
  .sv-anno-list {
    flex: 1;
    overflow-y: auto;
  }
  .sv-anno-empty {
    color: #8b949e;
    text-align: center;
    padding: 16px 0;
    font-size: 12px;
    margin: 0;
  }
  .sv-anno-item {
    display: flex;
    gap: 6px;
    padding: 8px;
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: 4px;
    margin-bottom: 6px;
    cursor: pointer;
    transition: border-color 0.15s;
    align-items: flex-start;
  }
  .sv-anno-item:hover { border-color: #58a6ff; }
  .sv-anno-time {
    color: #58a6ff;
    font-weight: 600;
    font-family: monospace;
    font-size: 10px;
    min-width: 52px;
    padding-top: 1px;
  }
  .sv-anno-text {
    flex: 1;
    font-size: 11px;
    line-height: 1.3;
    word-break: break-word;
  }
  .sv-anno-del {
    background: none;
    border: none;
    color: #f85149;
    cursor: pointer;
    font-size: 12px;
    padding: 0;
    opacity: 0.5;
    transition: opacity 0.15s;
  }
  .sv-anno-del:hover { opacity: 1; }

  @media (max-width: 900px) {
    .sv-annotations { width: 200px; }
  }
  @media (max-width: 640px) {
    .sv-content { flex-direction: column; }
    .sv-canvas-wrap { min-height: 300px; }
    .sv-annotations { width: 100%; border-left: none; border-top: 1px solid #30363d; max-height: 200px; }
  }
`;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pp="183",cM=0,A_=1,uM=2,su=1,fM=2,sl=3,cs=0,Kn=1,ki=2,ba=0,Xr=1,R_=2,C_=3,w_=4,dM=5,Bs=100,hM=101,pM=102,mM=103,gM=104,_M=200,vM=201,xM=202,SM=203,_h=204,vh=205,yM=206,MM=207,bM=208,EM=209,TM=210,AM=211,RM=212,CM=213,wM=214,xh=0,Sh=1,yh=2,jr=3,Mh=4,bh=5,Eh=6,Th=7,Ov=0,DM=1,NM=2,qi=0,Pv=1,Fv=2,Bv=3,mp=4,zv=5,Iv=6,Hv=7,Gv=300,Gs=301,qr=302,Od=303,Pd=304,vu=306,Ah=1e3,Ma=1001,Rh=1002,Rn=1003,UM=1004,wc=1005,On=1006,Fd=1007,Is=1008,ci=1009,Vv=1010,kv=1011,ll=1012,gp=1013,Zi=1014,Wi=1015,Ta=1016,_p=1017,vp=1018,cl=1020,Xv=35902,Wv=35899,jv=1021,qv=1022,Li=1023,Aa=1026,Hs=1027,Yv=1028,xp=1029,Yr=1030,Sp=1031,yp=1033,ru=33776,ou=33777,lu=33778,cu=33779,Ch=35840,wh=35841,Dh=35842,Nh=35843,Uh=36196,Lh=37492,Oh=37496,Ph=37488,Fh=37489,Bh=37490,zh=37491,Ih=37808,Hh=37809,Gh=37810,Vh=37811,kh=37812,Xh=37813,Wh=37814,jh=37815,qh=37816,Yh=37817,Zh=37818,Kh=37819,Qh=37820,Jh=37821,$h=36492,tp=36494,ep=36495,np=36283,ip=36284,ap=36285,sp=36286,LM=3200,OM=0,PM=1,rs="",Si="srgb",Zr="srgb-linear",fu="linear",Ve="srgb",Tr=7680,D_=519,FM=512,BM=513,zM=514,Mp=515,IM=516,HM=517,bp=518,GM=519,rp=35044,N_="300 es",ji=2e3,ul=2001;function VM(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function du(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function kM(){const r=du("canvas");return r.style.display="block",r}const U_={};function hu(...r){const t="THREE."+r.shift();console.log(t,...r)}function Zv(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function le(...r){r=Zv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ue(...r){r=Zv(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function pu(...r){const t=r.join(" ");t in U_||(U_[t]=!0,le(...r))}function XM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const WM={[xh]:Sh,[yh]:Eh,[Mh]:Th,[jr]:bh,[Sh]:xh,[Eh]:yh,[Th]:Mh,[bh]:jr};class Qr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bd=Math.PI/180,op=180/Math.PI;function ls(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function De(r,t,i){return Math.max(t,Math.min(i,r))}function jM(r,t){return(r%t+t)%t}function zd(r,t,i){return(1-i)*r+i*t}function Xi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function je(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(t=0,i=0){Ee.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],_=s[l+2],S=s[l+3],g=c[d+0],M=c[d+1],b=c[d+2],R=c[d+3];if(S!==R||m!==g||h!==M||_!==b){let v=m*g+h*M+_*b+S*R;v<0&&(g=-g,M=-M,b=-b,R=-R,v=-v);let x=1-p;if(v<.9995){const A=Math.acos(v),U=Math.sin(A);x=Math.sin(x*A)/U,p=Math.sin(p*A)/U,m=m*x+g*p,h=h*x+M*p,_=_*x+b*p,S=S*x+R*p}else{m=m*x+g*p,h=h*x+M*p,_=_*x+b*p,S=S*x+R*p;const A=1/Math.sqrt(m*m+h*h+_*_+S*S);m*=A,h*=A,_*=A,S*=A}}t[i]=m,t[i+1]=h,t[i+2]=_,t[i+3]=S}static multiplyQuaternionsFlat(t,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],_=s[l+3],S=c[d],g=c[d+1],M=c[d+2],b=c[d+3];return t[i]=p*b+_*S+m*M-h*g,t[i+1]=m*b+_*g+h*S-p*M,t[i+2]=h*b+_*M+p*g-m*S,t[i+3]=_*b-p*S-m*g-h*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,p=Math.cos,m=Math.sin,h=p(s/2),_=p(l/2),S=p(c/2),g=m(s/2),M=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=g*_*S+h*M*b,this._y=h*M*S-g*_*b,this._z=h*_*b+g*M*S,this._w=h*_*S-g*M*b;break;case"YXZ":this._x=g*_*S+h*M*b,this._y=h*M*S-g*_*b,this._z=h*_*b-g*M*S,this._w=h*_*S+g*M*b;break;case"ZXY":this._x=g*_*S-h*M*b,this._y=h*M*S+g*_*b,this._z=h*_*b+g*M*S,this._w=h*_*S-g*M*b;break;case"ZYX":this._x=g*_*S-h*M*b,this._y=h*M*S+g*_*b,this._z=h*_*b-g*M*S,this._w=h*_*S+g*M*b;break;case"YZX":this._x=g*_*S+h*M*b,this._y=h*M*S+g*_*b,this._z=h*_*b-g*M*S,this._w=h*_*S-g*M*b;break;case"XZY":this._x=g*_*S-h*M*b,this._y=h*M*S-g*_*b,this._z=h*_*b+g*M*S,this._w=h*_*S+g*M*b;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],_=i[6],S=i[10],g=s+p+S;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-m)*M,this._y=(c-h)*M,this._z=(d-l)*M}else if(s>p&&s>S){const M=2*Math.sqrt(1+s-p-S);this._w=(_-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+h)/M}else if(p>S){const M=2*Math.sqrt(1+p-s-S);this._w=(c-h)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+S-s-p);this._w=(d-l)/M,this._x=(c+h)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,p=i._x,m=i._y,h=i._z,_=i._w;return this._x=s*_+d*p+l*h-c*m,this._y=l*_+d*m+c*p-s*h,this._z=c*_+d*h+s*m-l*p,this._w=d*_-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,d=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),_=Math.sin(h);m=Math.sin(m*h)/_,i=Math.sin(i*h)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(t=0,i=0,s=0){rt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(L_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(L_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,p=t.z,m=t.w,h=2*(d*l-p*s),_=2*(p*i-c*l),S=2*(c*s-d*i);return this.x=i+m*h+d*S-p*_,this.y=s+m*_+p*h-c*S,this.z=l+m*S+c*_-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Id.copy(this).projectOnVector(t),this.sub(Id)}reflect(t){return this.sub(Id.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Id=new rt,L_=new Jr;class xe{constructor(t,i,s,l,c,d,p,m,h){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,m,h)}set(t,i,s,l,c,d,p,m,h){const _=this.elements;return _[0]=t,_[1]=l,_[2]=p,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=d,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],_=s[4],S=s[7],g=s[2],M=s[5],b=s[8],R=l[0],v=l[3],x=l[6],A=l[1],U=l[4],D=l[7],H=l[2],I=l[5],z=l[8];return c[0]=d*R+p*A+m*H,c[3]=d*v+p*U+m*I,c[6]=d*x+p*D+m*z,c[1]=h*R+_*A+S*H,c[4]=h*v+_*U+S*I,c[7]=h*x+_*D+S*z,c[2]=g*R+M*A+b*H,c[5]=g*v+M*U+b*I,c[8]=g*x+M*D+b*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],_=t[8];return i*d*_-i*p*h-s*c*_+s*p*m+l*c*h-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],_=t[8],S=_*d-p*h,g=p*m-_*c,M=h*c-d*m,b=i*S+s*g+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=S*R,t[1]=(l*h-_*s)*R,t[2]=(p*s-l*d)*R,t[3]=g*R,t[4]=(_*i-l*m)*R,t[5]=(l*c-p*i)*R,t[6]=M*R,t[7]=(s*m-h*i)*R,t[8]=(d*i-s*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+t,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Hd.makeScale(t,i)),this}rotate(t){return this.premultiply(Hd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Hd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hd=new xe,O_=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),P_=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qM(){const r={enabled:!0,workingColorSpace:Zr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Ve&&(l.r=Ea(l.r),l.g=Ea(l.g),l.b=Ea(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ve&&(l.r=Wr(l.r),l.g=Wr(l.g),l.b=Wr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===rs?fu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return pu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return pu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Zr]:{primaries:t,whitePoint:s,transfer:fu,toXYZ:O_,fromXYZ:P_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:O_,fromXYZ:P_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const Le=qM();function Ea(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Wr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ar;class YM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Ar===void 0&&(Ar=du("canvas")),Ar.width=t.width,Ar.height=t.height;const l=Ar.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Ar}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=du("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Ea(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ea(i[s]/255)*255):i[s]=Ea(i[s]);return{data:i,width:t.width,height:t.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ZM=0;class Ep{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZM++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Gd(l[d].image)):c.push(Gd(l[d]))}else c=Gd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Gd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?YM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}let KM=0;const Vd=new rt;class Pn extends Qr{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=Ma,l=Ma,c=On,d=Is,p=Li,m=ci,h=Pn.DEFAULT_ANISOTROPY,_=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KM++}),this.uuid=ls(),this.name="",this.source=new Ep(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vd).x}get height(){return this.source.getSize(Vd).y}get depth(){return this.source.getSize(Vd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){le(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ah:t.x=t.x-Math.floor(t.x);break;case Ma:t.x=t.x<0?0:1;break;case Rh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ah:t.y=t.y-Math.floor(t.y);break;case Ma:t.y=t.y<0?0:1;break;case Rh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Gv;Pn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,s=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,h=m[0],_=m[4],S=m[8],g=m[1],M=m[5],b=m[9],R=m[2],v=m[6],x=m[10];if(Math.abs(_-g)<.01&&Math.abs(S-R)<.01&&Math.abs(b-v)<.01){if(Math.abs(_+g)<.1&&Math.abs(S+R)<.1&&Math.abs(b+v)<.1&&Math.abs(h+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(h+1)/2,D=(M+1)/2,H=(x+1)/2,I=(_+g)/4,z=(S+R)/4,E=(b+v)/4;return U>D&&U>H?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=I/s,c=z/s):D>H?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=I/l,c=E/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=z/c,l=E/c),this.set(s,l,c,i),this}let A=Math.sqrt((v-b)*(v-b)+(S-R)*(S-R)+(g-_)*(g-_));return Math.abs(A)<.001&&(A=1),this.x=(v-b)/A,this.y=(S-R)/A,this.z=(g-_)/A,this.w=Math.acos((h+M+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this.w=De(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this.w=De(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QM extends Qr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Pn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ep(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends QM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Kv extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class JM extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ke{constructor(t,i,s,l,c,d,p,m,h,_,S,g,M,b,R,v){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,m,h,_,S,g,M,b,R,v)}set(t,i,s,l,c,d,p,m,h,_,S,g,M,b,R,v){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=d,x[9]=p,x[13]=m,x[2]=h,x[6]=_,x[10]=S,x[14]=g,x[3]=M,x[7]=b,x[11]=R,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Rr.setFromMatrixColumn(t,0).length(),c=1/Rr.setFromMatrixColumn(t,1).length(),d=1/Rr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),_=Math.cos(c),S=Math.sin(c);if(t.order==="XYZ"){const g=d*_,M=d*S,b=p*_,R=p*S;i[0]=m*_,i[4]=-m*S,i[8]=h,i[1]=M+b*h,i[5]=g-R*h,i[9]=-p*m,i[2]=R-g*h,i[6]=b+M*h,i[10]=d*m}else if(t.order==="YXZ"){const g=m*_,M=m*S,b=h*_,R=h*S;i[0]=g+R*p,i[4]=b*p-M,i[8]=d*h,i[1]=d*S,i[5]=d*_,i[9]=-p,i[2]=M*p-b,i[6]=R+g*p,i[10]=d*m}else if(t.order==="ZXY"){const g=m*_,M=m*S,b=h*_,R=h*S;i[0]=g-R*p,i[4]=-d*S,i[8]=b+M*p,i[1]=M+b*p,i[5]=d*_,i[9]=R-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(t.order==="ZYX"){const g=d*_,M=d*S,b=p*_,R=p*S;i[0]=m*_,i[4]=b*h-M,i[8]=g*h+R,i[1]=m*S,i[5]=R*h+g,i[9]=M*h-b,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(t.order==="YZX"){const g=d*m,M=d*h,b=p*m,R=p*h;i[0]=m*_,i[4]=R-g*S,i[8]=b*S+M,i[1]=S,i[5]=d*_,i[9]=-p*_,i[2]=-h*_,i[6]=M*S+b,i[10]=g-R*S}else if(t.order==="XZY"){const g=d*m,M=d*h,b=p*m,R=p*h;i[0]=m*_,i[4]=-S,i[8]=h*_,i[1]=g*S+R,i[5]=d*_,i[9]=M*S-b,i[2]=b*S-M,i[6]=p*_,i[10]=R*S+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose($M,t,tb)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),ts.crossVectors(s,ri),ts.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),ts.crossVectors(s,ri)),ts.normalize(),Dc.crossVectors(ri,ts),l[0]=ts.x,l[4]=Dc.x,l[8]=ri.x,l[1]=ts.y,l[5]=Dc.y,l[9]=ri.y,l[2]=ts.z,l[6]=Dc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],_=s[1],S=s[5],g=s[9],M=s[13],b=s[2],R=s[6],v=s[10],x=s[14],A=s[3],U=s[7],D=s[11],H=s[15],I=l[0],z=l[4],E=l[8],O=l[12],mt=l[1],G=l[5],Q=l[9],q=l[13],at=l[2],tt=l[6],N=l[10],B=l[14],X=l[3],nt=l[7],vt=l[11],F=l[15];return c[0]=d*I+p*mt+m*at+h*X,c[4]=d*z+p*G+m*tt+h*nt,c[8]=d*E+p*Q+m*N+h*vt,c[12]=d*O+p*q+m*B+h*F,c[1]=_*I+S*mt+g*at+M*X,c[5]=_*z+S*G+g*tt+M*nt,c[9]=_*E+S*Q+g*N+M*vt,c[13]=_*O+S*q+g*B+M*F,c[2]=b*I+R*mt+v*at+x*X,c[6]=b*z+R*G+v*tt+x*nt,c[10]=b*E+R*Q+v*N+x*vt,c[14]=b*O+R*q+v*B+x*F,c[3]=A*I+U*mt+D*at+H*X,c[7]=A*z+U*G+D*tt+H*nt,c[11]=A*E+U*Q+D*N+H*vt,c[15]=A*O+U*q+D*B+H*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],p=t[5],m=t[9],h=t[13],_=t[2],S=t[6],g=t[10],M=t[14],b=t[3],R=t[7],v=t[11],x=t[15],A=m*M-h*g,U=p*M-h*S,D=p*g-m*S,H=d*M-h*_,I=d*g-m*_,z=d*S-p*_;return i*(R*A-v*U+x*D)-s*(b*A-v*H+x*I)+l*(b*U-R*H+x*z)-c*(b*D-R*I+v*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],_=t[8],S=t[9],g=t[10],M=t[11],b=t[12],R=t[13],v=t[14],x=t[15],A=i*p-s*d,U=i*m-l*d,D=i*h-c*d,H=s*m-l*p,I=s*h-c*p,z=l*h-c*m,E=_*R-S*b,O=_*v-g*b,mt=_*x-M*b,G=S*v-g*R,Q=S*x-M*R,q=g*x-M*v,at=A*q-U*Q+D*G+H*mt-I*O+z*E;if(at===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const tt=1/at;return t[0]=(p*q-m*Q+h*G)*tt,t[1]=(l*Q-s*q-c*G)*tt,t[2]=(R*z-v*I+x*H)*tt,t[3]=(g*I-S*z-M*H)*tt,t[4]=(m*mt-d*q-h*O)*tt,t[5]=(i*q-l*mt+c*O)*tt,t[6]=(v*D-b*z-x*U)*tt,t[7]=(_*z-g*D+M*U)*tt,t[8]=(d*Q-p*mt+h*E)*tt,t[9]=(s*mt-i*Q-c*E)*tt,t[10]=(b*I-R*D+x*A)*tt,t[11]=(S*D-_*I-M*A)*tt,t[12]=(p*O-d*G-m*E)*tt,t[13]=(i*G-s*O+l*E)*tt,t[14]=(R*U-b*H-v*A)*tt,t[15]=(_*H-S*U+g*A)*tt,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,p=t.y,m=t.z,h=c*d,_=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,_*p+s,_*m-l*d,0,h*m-l*p,_*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,_=d+d,S=p+p,g=c*h,M=c*_,b=c*S,R=d*_,v=d*S,x=p*S,A=m*h,U=m*_,D=m*S,H=s.x,I=s.y,z=s.z;return l[0]=(1-(R+x))*H,l[1]=(M+D)*H,l[2]=(b-U)*H,l[3]=0,l[4]=(M-D)*I,l[5]=(1-(g+x))*I,l[6]=(v+A)*I,l[7]=0,l[8]=(b+U)*z,l[9]=(v-A)*z,l[10]=(1-(g+R))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Rr.set(l[0],l[1],l[2]).length();const p=Rr.set(l[4],l[5],l[6]).length(),m=Rr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Di.copy(this);const h=1/d,_=1/p,S=1/m;return Di.elements[0]*=h,Di.elements[1]*=h,Di.elements[2]*=h,Di.elements[4]*=_,Di.elements[5]*=_,Di.elements[6]*=_,Di.elements[8]*=S,Di.elements[9]*=S,Di.elements[10]*=S,i.setFromRotationMatrix(Di),s.x=d,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,d,p=ji,m=!1){const h=this.elements,_=2*c/(i-t),S=2*c/(s-l),g=(i+t)/(i-t),M=(s+l)/(s-l);let b,R;if(m)b=c/(d-c),R=d*c/(d-c);else if(p===ji)b=-(d+c)/(d-c),R=-2*d*c/(d-c);else if(p===ul)b=-d/(d-c),R=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=S,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,s,l,c,d,p=ji,m=!1){const h=this.elements,_=2/(i-t),S=2/(s-l),g=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,R;if(m)b=1/(d-c),R=d/(d-c);else if(p===ji)b=-2/(d-c),R=-(d+c)/(d-c);else if(p===ul)b=-1/(d-c),R=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=_,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=S,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Rr=new rt,Di=new Ke,$M=new rt(0,0,0),tb=new rt(1,1,1),ts=new rt,Dc=new rt,ri=new rt,F_=new Ke,B_=new Jr;class Ra{constructor(t=0,i=0,s=0,l=Ra.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],_=l[9],S=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(De(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-De(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(De(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-De(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(De(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-_,M),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return F_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(F_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return B_.setFromEuler(this),this.setFromQuaternion(B_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ra.DEFAULT_ORDER="XYZ";class Qv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let eb=0;const z_=new rt,Cr=new Jr,_a=new Ke,Nc=new rt,qo=new rt,nb=new rt,ib=new Jr,I_=new rt(1,0,0),H_=new rt(0,1,0),G_=new rt(0,0,1),V_={type:"added"},ab={type:"removed"},wr={type:"childadded",child:null},kd={type:"childremoved",child:null};class Cn extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const t=new rt,i=new Ra,s=new Jr,l=new rt(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new xe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(I_,t)}rotateY(t){return this.rotateOnAxis(H_,t)}rotateZ(t){return this.rotateOnAxis(G_,t)}translateOnAxis(t,i){return z_.copy(t).applyQuaternion(this.quaternion),this.position.add(z_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(I_,t)}translateY(t){return this.translateOnAxis(H_,t)}translateZ(t){return this.translateOnAxis(G_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Nc.copy(t):Nc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt(qo,Nc,this.up):_a.lookAt(Nc,qo,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),Cr.setFromRotationMatrix(_a),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(V_),wr.child=t,this.dispatchEvent(wr),wr.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ab),kd.child=t,this.dispatchEvent(kd),kd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),_a.multiply(t.parent.matrixWorld)),t.applyMatrix4(_a),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(V_),wr.child=t,this.dispatchEvent(wr),wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,t,nb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,ib,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,_=m.length;h<_;h++){const S=m[h];c(t.shapes,S)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=d(t.geometries),m=d(t.materials),h=d(t.textures),_=d(t.images),S=d(t.shapes),g=d(t.skeletons),M=d(t.animations),b=d(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),_.length>0&&(s.images=_),S.length>0&&(s.shapes=S),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(p){const m=[];for(const h in p){const _=p[h];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Cn.DEFAULT_UP=new rt(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Uc extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sb={type:"move"};class Xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const R of t.hand.values()){const v=i.getJointPose(R,s),x=this._getHandJoint(h,R);v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=v.radius),x.visible=v!==null}const _=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],g=_.position.distanceTo(S.position),M=.02,b=.005;h.inputState.pinching&&g>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(sb)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Uc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Wd(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ye{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=jM(t,1),i=De(i,0,1),s=De(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Wd(d,c,t+1/3),this.g=Wd(d,c,t),this.b=Wd(d,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&le("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:le("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);le("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Si){const s=Jv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):le("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ea(t.r),this.g=Ea(t.g),this.b=Ea(t.b),this}copyLinearToSRGB(t){return this.r=Wr(t.r),this.g=Wr(t.g),this.b=Wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return Le.workingToColorSpace(Nn.copy(this),t),Math.round(De(Nn.r*255,0,255))*65536+Math.round(De(Nn.g*255,0,255))*256+Math.round(De(Nn.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,c=Nn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const _=(p+d)/2;if(p===d)m=0,h=0;else{const S=d-p;switch(h=_<=.5?S/(d+p):S/(2-d-p),d){case s:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-s)/S+2;break;case c:m=(s-l)/S+4;break}m/=6}return t.h=m,t.s=h,t.l=_,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=Si){Le.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,s=Nn.g,l=Nn.b;return t!==Si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(es),this.setHSL(es.h+t,es.s+i,es.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(es),t.getHSL(Lc);const s=zd(es.h,Lc.h,i),l=zd(es.s,Lc.s,i),c=zd(es.l,Lc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new ye;ye.NAMES=Jv;class Tp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(t),this.density=i}clone(){return new Tp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rb extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ra,this.environmentIntensity=1,this.environmentRotation=new Ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ni=new rt,va=new rt,jd=new rt,xa=new rt,Dr=new rt,Nr=new rt,k_=new rt,qd=new rt,Yd=new rt,Zd=new rt,Kd=new nn,Qd=new nn,Jd=new nn;class yi{constructor(t=new rt,i=new rt,s=new rt){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ni.subVectors(t,i),l.cross(Ni);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ni.subVectors(l,i),va.subVectors(s,i),jd.subVectors(t,i);const d=Ni.dot(Ni),p=Ni.dot(va),m=Ni.dot(jd),h=va.dot(va),_=va.dot(jd),S=d*h-p*p;if(S===0)return c.set(0,0,0),null;const g=1/S,M=(h*m-p*_)*g,b=(d*_-p*m)*g;return c.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,xa)===null?!1:xa.x>=0&&xa.y>=0&&xa.x+xa.y<=1}static getInterpolation(t,i,s,l,c,d,p,m){return this.getBarycoord(t,i,s,l,xa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,xa.x),m.addScaledVector(d,xa.y),m.addScaledVector(p,xa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return Kd.setScalar(0),Qd.setScalar(0),Jd.setScalar(0),Kd.fromBufferAttribute(t,i),Qd.fromBufferAttribute(t,s),Jd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Kd,c.x),d.addScaledVector(Qd,c.y),d.addScaledVector(Jd,c.z),d}static isFrontFacing(t,i,s,l){return Ni.subVectors(s,i),va.subVectors(t,i),Ni.cross(va).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),va.subVectors(this.a,this.b),Ni.cross(va).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return yi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,p;Dr.subVectors(l,s),Nr.subVectors(c,s),qd.subVectors(t,s);const m=Dr.dot(qd),h=Nr.dot(qd);if(m<=0&&h<=0)return i.copy(s);Yd.subVectors(t,l);const _=Dr.dot(Yd),S=Nr.dot(Yd);if(_>=0&&S<=_)return i.copy(l);const g=m*S-_*h;if(g<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(s).addScaledVector(Dr,d);Zd.subVectors(t,c);const M=Dr.dot(Zd),b=Nr.dot(Zd);if(b>=0&&M<=b)return i.copy(c);const R=M*h-m*b;if(R<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(s).addScaledVector(Nr,p);const v=_*b-M*S;if(v<=0&&S-_>=0&&M-b>=0)return k_.subVectors(c,l),p=(S-_)/(S-_+(M-b)),i.copy(l).addScaledVector(k_,p);const x=1/(v+R+g);return d=R*x,p=g*x,i.copy(s).addScaledVector(Dr,d).addScaledVector(Nr,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class dl{constructor(t=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ui.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ui.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ui.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,Ui):Ui.fromBufferAttribute(c,d),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Oc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Oc.copy(s.boundingBox)),Oc.applyMatrix4(t.matrixWorld),this.union(Oc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yo),Pc.subVectors(this.max,Yo),Ur.subVectors(t.a,Yo),Lr.subVectors(t.b,Yo),Or.subVectors(t.c,Yo),ns.subVectors(Lr,Ur),is.subVectors(Or,Lr),Ds.subVectors(Ur,Or);let i=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Ds.z,Ds.y,ns.z,0,-ns.x,is.z,0,-is.x,Ds.z,0,-Ds.x,-ns.y,ns.x,0,-is.y,is.x,0,-Ds.y,Ds.x,0];return!$d(i,Ur,Lr,Or,Pc)||(i=[1,0,0,0,1,0,0,0,1],!$d(i,Ur,Lr,Or,Pc))?!1:(Fc.crossVectors(ns,is),i=[Fc.x,Fc.y,Fc.z],$d(i,Ur,Lr,Or,Pc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Sa=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],Ui=new rt,Oc=new dl,Ur=new rt,Lr=new rt,Or=new rt,ns=new rt,is=new rt,Ds=new rt,Yo=new rt,Pc=new rt,Fc=new rt,Ns=new rt;function $d(r,t,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Ns.fromArray(r,c);const p=l.x*Math.abs(Ns.x)+l.y*Math.abs(Ns.y)+l.z*Math.abs(Ns.z),m=t.dot(Ns),h=i.dot(Ns),_=s.dot(Ns);if(Math.max(-Math.max(m,h,_),Math.min(m,h,_))>p)return!1}return!0}const hn=new rt,Bc=new Ee;let ob=0;class Ln{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ob++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=rp,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Bc.fromBufferAttribute(this,i),Bc.applyMatrix3(t),this.setXY(i,Bc.x,Bc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Xi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=je(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Xi(i,this.array)),i}setX(t,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Xi(i,this.array)),i}setY(t,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Xi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Xi(i,this.array)),i}setW(t,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=je(i,this.array),s=je(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=je(i,this.array),s=je(s,this.array),l=je(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=je(i,this.array),s=je(s,this.array),l=je(l,this.array),c=je(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rp&&(t.usage=this.usage),t}}class $v extends Ln{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class tx extends Ln{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ui extends Ln{constructor(t,i,s){super(new Float32Array(t),i,s)}}const lb=new dl,Zo=new rt,th=new rt;class hl{constructor(t=new rt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):lb.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zo.subVectors(t,this.center);const i=Zo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Zo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(th.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zo.copy(t.center).add(th)),this.expandByPoint(Zo.copy(t.center).sub(th))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let cb=0;const xi=new Ke,eh=new Cn,Pr=new rt,oi=new dl,Ko=new dl,Sn=new rt;class Fn extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(VM(t)?tx:$v)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new xe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,i,s){return xi.makeTranslation(t,i,s),this.applyMatrix4(xi),this}scale(t,i,s){return xi.makeScale(t,i,s),this.applyMatrix4(xi),this}lookAt(t){return eh.lookAt(t),eh.updateMatrix(),this.applyMatrix4(eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ui(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Ko.setFromBufferAttribute(p),this.morphTargetsRelative?(Sn.addVectors(oi.min,Ko.min),oi.expandByPoint(Sn),Sn.addVectors(oi.max,Ko.max),oi.expandByPoint(Sn)):(oi.expandByPoint(Ko.min),oi.expandByPoint(Ko.max))}oi.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,_=p.count;h<_;h++)Sn.fromBufferAttribute(p,h),m&&(Pr.fromBufferAttribute(t,h),Sn.add(Pr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let E=0;E<s.count;E++)p[E]=new rt,m[E]=new rt;const h=new rt,_=new rt,S=new rt,g=new Ee,M=new Ee,b=new Ee,R=new rt,v=new rt;function x(E,O,mt){h.fromBufferAttribute(s,E),_.fromBufferAttribute(s,O),S.fromBufferAttribute(s,mt),g.fromBufferAttribute(c,E),M.fromBufferAttribute(c,O),b.fromBufferAttribute(c,mt),_.sub(h),S.sub(h),M.sub(g),b.sub(g);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(R.copy(_).multiplyScalar(b.y).addScaledVector(S,-M.y).multiplyScalar(G),v.copy(S).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(G),p[E].add(R),p[O].add(R),p[mt].add(R),m[E].add(v),m[O].add(v),m[mt].add(v))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let E=0,O=A.length;E<O;++E){const mt=A[E],G=mt.start,Q=mt.count;for(let q=G,at=G+Q;q<at;q+=3)x(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const U=new rt,D=new rt,H=new rt,I=new rt;function z(E){H.fromBufferAttribute(l,E),I.copy(H);const O=p[E];U.copy(O),U.sub(H.multiplyScalar(H.dot(O))).normalize(),D.crossVectors(I,O);const G=D.dot(m[E])<0?-1:1;d.setXYZW(E,U.x,U.y,U.z,G)}for(let E=0,O=A.length;E<O;++E){const mt=A[E],G=mt.start,Q=mt.count;for(let q=G,at=G+Q;q<at;q+=3)z(t.getX(q+0)),z(t.getX(q+1)),z(t.getX(q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ln(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new rt,c=new rt,d=new rt,p=new rt,m=new rt,h=new rt,_=new rt,S=new rt;if(t)for(let g=0,M=t.count;g<M;g+=3){const b=t.getX(g+0),R=t.getX(g+1),v=t.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,v),_.subVectors(d,c),S.subVectors(l,c),_.cross(S),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,R),h.fromBufferAttribute(s,v),p.add(_),m.add(_),h.add(_),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(v,h.x,h.y,h.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),_.subVectors(d,c),S.subVectors(l,c),_.cross(S),s.setXYZ(g+0,_.x,_.y,_.z),s.setXYZ(g+1,_.x,_.y,_.z),s.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(p,m){const h=p.array,_=p.itemSize,S=p.normalized,g=new h.constructor(m.length*_);let M=0,b=0;for(let R=0,v=m.length;R<v;R++){p.isInterleavedBufferAttribute?M=m[R]*p.data.stride+p.offset:M=m[R]*_;for(let x=0;x<_;x++)g[b++]=h[M++]}return new Ln(g,_,S)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fn,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let _=0,S=h.length;_<S;_++){const g=h[_],M=t(g,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],_=[];for(let S=0,g=h.length;S<g;S++){const M=h[S];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const h in l){const _=l[h];this.setAttribute(h,_.clone(i))}const c=t.morphAttributes;for(const h in c){const _=[],S=c[h];for(let g=0,M=S.length;g<M;g++)_.push(S[g].clone(i));this.morphAttributes[h]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,_=d.length;h<_;h++){const S=d[h];this.addGroup(S.start,S.count,S.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ub{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=rp,this.updateRanges=[],this.version=0,this.uuid=ls()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ls()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ls()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vn=new rt;class mu{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix4(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyNormalMatrix(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.transformDirection(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Xi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=je(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Xi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Xi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Xi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Xi(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=je(i,this.array),s=je(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=je(i,this.array),s=je(s,this.array),l=je(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=je(i,this.array),s=je(s,this.array),l=je(l,this.array),c=je(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){hu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ln(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new mu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){hu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let fb=0;class Vs extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Xr,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=vh,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=D_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){le(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(s.blending=this.blending),this.side!==cs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==_h&&(s.blendSrc=this.blendSrc),this.blendDst!==vh&&(s.blendDst=this.blendDst),this.blendEquation!==Bs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==D_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ex extends Vs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Fr;const Qo=new rt,Br=new rt,zr=new rt,Ir=new Ee,Jo=new Ee,nx=new Ke,zc=new rt,$o=new rt,Ic=new rt,X_=new Ee,nh=new Ee,W_=new Ee;class db extends Cn{constructor(t=new ex){if(super(),this.isSprite=!0,this.type="Sprite",Fr===void 0){Fr=new Fn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new ub(i,5);Fr.setIndex([0,1,2,0,2,3]),Fr.setAttribute("position",new mu(s,3,0,!1)),Fr.setAttribute("uv",new mu(s,2,3,!1))}this.geometry=Fr,this.material=t,this.center=new Ee(.5,.5),this.count=1}raycast(t,i){t.camera===null&&Ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Br.setFromMatrixScale(this.matrixWorld),nx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),zr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Br.multiplyScalar(-zr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const d=this.center;Hc(zc.set(-.5,-.5,0),zr,d,Br,l,c),Hc($o.set(.5,-.5,0),zr,d,Br,l,c),Hc(Ic.set(.5,.5,0),zr,d,Br,l,c),X_.set(0,0),nh.set(1,0),W_.set(1,1);let p=t.ray.intersectTriangle(zc,$o,Ic,!1,Qo);if(p===null&&(Hc($o.set(-.5,.5,0),zr,d,Br,l,c),nh.set(0,1),p=t.ray.intersectTriangle(zc,Ic,$o,!1,Qo),p===null))return;const m=t.ray.origin.distanceTo(Qo);m<t.near||m>t.far||i.push({distance:m,point:Qo.clone(),uv:yi.getInterpolation(Qo,zc,$o,Ic,X_,nh,W_,new Ee),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Hc(r,t,i,s,l,c){Ir.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(Jo.x=c*Ir.x-l*Ir.y,Jo.y=l*Ir.x+c*Ir.y):Jo.copy(Ir),r.copy(t),r.x+=Jo.x,r.y+=Jo.y,r.applyMatrix4(nx)}const ya=new rt,ih=new rt,Gc=new rt,as=new rt,ah=new rt,Vc=new rt,sh=new rt;class Ap{constructor(t=new rt,i=new rt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ya)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ya.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ya.copy(this.origin).addScaledVector(this.direction,i),ya.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){ih.copy(t).add(i).multiplyScalar(.5),Gc.copy(i).sub(t).normalize(),as.copy(this.origin).sub(ih);const c=t.distanceTo(i)*.5,d=-this.direction.dot(Gc),p=as.dot(this.direction),m=-as.dot(Gc),h=as.lengthSq(),_=Math.abs(1-d*d);let S,g,M,b;if(_>0)if(S=d*m-p,g=d*p-m,b=c*_,S>=0)if(g>=-b)if(g<=b){const R=1/_;S*=R,g*=R,M=S*(S+d*g+2*p)+g*(d*S+g+2*m)+h}else g=c,S=Math.max(0,-(d*g+p)),M=-S*S+g*(g+2*m)+h;else g=-c,S=Math.max(0,-(d*g+p)),M=-S*S+g*(g+2*m)+h;else g<=-b?(S=Math.max(0,-(-d*c+p)),g=S>0?-c:Math.min(Math.max(-c,-m),c),M=-S*S+g*(g+2*m)+h):g<=b?(S=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+h):(S=Math.max(0,-(d*c+p)),g=S>0?c:Math.min(Math.max(-c,-m),c),M=-S*S+g*(g+2*m)+h);else g=d>0?-c:c,S=Math.max(0,-(d*g+p)),M=-S*S+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(ih).addScaledVector(Gc,g),M}intersectSphere(t,i){ya.subVectors(t.center,this.origin);const s=ya.dot(this.direction),l=ya.dot(ya)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,p,m;const h=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,g=this.origin;return h>=0?(s=(t.min.x-g.x)*h,l=(t.max.x-g.x)*h):(s=(t.max.x-g.x)*h,l=(t.min.x-g.x)*h),_>=0?(c=(t.min.y-g.y)*_,d=(t.max.y-g.y)*_):(c=(t.max.y-g.y)*_,d=(t.min.y-g.y)*_),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),S>=0?(p=(t.min.z-g.z)*S,m=(t.max.z-g.z)*S):(p=(t.max.z-g.z)*S,m=(t.min.z-g.z)*S),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ya)!==null}intersectTriangle(t,i,s,l,c){ah.subVectors(i,t),Vc.subVectors(s,t),sh.crossVectors(ah,Vc);let d=this.direction.dot(sh),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;as.subVectors(this.origin,t);const m=p*this.direction.dot(Vc.crossVectors(as,Vc));if(m<0)return null;const h=p*this.direction.dot(ah.cross(as));if(h<0||m+h>d)return null;const _=-p*as.dot(sh);return _<0?null:this.at(_/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rp extends Vs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ra,this.combine=Ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const j_=new Ke,Us=new Ap,kc=new hl,q_=new rt,Xc=new rt,Wc=new rt,jc=new rt,rh=new rt,qc=new rt,Y_=new rt,Yc=new rt;class Ki extends Cn{constructor(t=new Fn,i=new Rp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){qc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const _=p[m],S=c[m];_!==0&&(rh.fromBufferAttribute(S,t),d?qc.addScaledVector(rh,_):qc.addScaledVector(rh.sub(i),_))}i.add(qc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),kc.copy(s.boundingSphere),kc.applyMatrix4(c),Us.copy(t.ray).recast(t.near),!(kc.containsPoint(Us.origin)===!1&&(Us.intersectSphere(kc,q_)===null||Us.origin.distanceToSquared(q_)>(t.far-t.near)**2))&&(j_.copy(c).invert(),Us.copy(t.ray).applyMatrix4(j_),!(s.boundingBox!==null&&Us.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Us)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,_=c.attributes.uv1,S=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(d))for(let b=0,R=g.length;b<R;b++){const v=g[b],x=d[v.materialIndex],A=Math.max(v.start,M.start),U=Math.min(p.count,Math.min(v.start+v.count,M.start+M.count));for(let D=A,H=U;D<H;D+=3){const I=p.getX(D),z=p.getX(D+1),E=p.getX(D+2);l=Zc(this,x,t,s,h,_,S,I,z,E),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(p.count,M.start+M.count);for(let v=b,x=R;v<x;v+=3){const A=p.getX(v),U=p.getX(v+1),D=p.getX(v+2);l=Zc(this,d,t,s,h,_,S,A,U,D),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,R=g.length;b<R;b++){const v=g[b],x=d[v.materialIndex],A=Math.max(v.start,M.start),U=Math.min(m.count,Math.min(v.start+v.count,M.start+M.count));for(let D=A,H=U;D<H;D+=3){const I=D,z=D+1,E=D+2;l=Zc(this,x,t,s,h,_,S,I,z,E),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=v.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let v=b,x=R;v<x;v+=3){const A=v,U=v+1,D=v+2;l=Zc(this,d,t,s,h,_,S,A,U,D),l&&(l.faceIndex=Math.floor(v/3),i.push(l))}}}}function hb(r,t,i,s,l,c,d,p){let m;if(t.side===Kn?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,t.side===cs,p),m===null)return null;Yc.copy(p),Yc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Yc);return h<i.near||h>i.far?null:{distance:h,point:Yc.clone(),object:r}}function Zc(r,t,i,s,l,c,d,p,m,h){r.getVertexPosition(p,Xc),r.getVertexPosition(m,Wc),r.getVertexPosition(h,jc);const _=hb(r,t,i,s,Xc,Wc,jc,Y_);if(_){const S=new rt;yi.getBarycoord(Y_,Xc,Wc,jc,S),l&&(_.uv=yi.getInterpolatedAttribute(l,p,m,h,S,new Ee)),c&&(_.uv1=yi.getInterpolatedAttribute(c,p,m,h,S,new Ee)),d&&(_.normal=yi.getInterpolatedAttribute(d,p,m,h,S,new rt),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new rt,materialIndex:0};yi.getNormal(Xc,Wc,jc,g.normal),_.face=g,_.barycoord=S}return _}class pb extends Pn{constructor(t=null,i=1,s=1,l,c,d,p,m,h=Rn,_=Rn,S,g){super(null,d,p,m,h,_,l,c,S,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const oh=new rt,mb=new rt,gb=new xe;class Fs{constructor(t=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=oh.subVectors(s,i).cross(mb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(oh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||gb.getNormalMatrix(t),l=this.coplanarPoint(oh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new hl,_b=new Ee(.5,.5),Kc=new rt;class Cp{constructor(t=new Fs,i=new Fs,s=new Fs,l=new Fs,c=new Fs,d=new Fs){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ji,s=!1){const l=this.planes,c=t.elements,d=c[0],p=c[1],m=c[2],h=c[3],_=c[4],S=c[5],g=c[6],M=c[7],b=c[8],R=c[9],v=c[10],x=c[11],A=c[12],U=c[13],D=c[14],H=c[15];if(l[0].setComponents(h-d,M-_,x-b,H-A).normalize(),l[1].setComponents(h+d,M+_,x+b,H+A).normalize(),l[2].setComponents(h+p,M+S,x+R,H+U).normalize(),l[3].setComponents(h-p,M-S,x-R,H-U).normalize(),s)l[4].setComponents(m,g,v,D).normalize(),l[5].setComponents(h-m,M-g,x-v,H-D).normalize();else if(l[4].setComponents(h-m,M-g,x-v,H-D).normalize(),i===ji)l[5].setComponents(h+m,M+g,x+v,H+D).normalize();else if(i===ul)l[5].setComponents(m,g,v,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(t){Ls.center.set(0,0,0);const i=_b.distanceTo(t.center);return Ls.radius=.7071067811865476+i,Ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Kc.x=l.normal.x>0?t.max.x:t.min.x,Kc.y=l.normal.y>0?t.max.y:t.min.y,Kc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Kc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wp extends Vs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const gu=new rt,_u=new rt,Z_=new Ke,tl=new Ap,Qc=new hl,lh=new rt,K_=new rt;class ix extends Cn{constructor(t=new Fn,i=new wp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)gu.fromBufferAttribute(i,l-1),_u.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=gu.distanceTo(_u);t.setAttribute("lineDistance",new ui(s,1))}else le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Qc.copy(s.boundingSphere),Qc.applyMatrix4(l),Qc.radius+=c,t.ray.intersectsSphere(Qc)===!1)return;Z_.copy(l).invert(),tl.copy(t.ray).applyMatrix4(Z_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,_=s.index,g=s.attributes.position;if(_!==null){const M=Math.max(0,d.start),b=Math.min(_.count,d.start+d.count);for(let R=M,v=b-1;R<v;R+=h){const x=_.getX(R),A=_.getX(R+1),U=Jc(this,t,tl,m,x,A,R);U&&i.push(U)}if(this.isLineLoop){const R=_.getX(b-1),v=_.getX(M),x=Jc(this,t,tl,m,R,v,b-1);x&&i.push(x)}}else{const M=Math.max(0,d.start),b=Math.min(g.count,d.start+d.count);for(let R=M,v=b-1;R<v;R+=h){const x=Jc(this,t,tl,m,R,R+1,R);x&&i.push(x)}if(this.isLineLoop){const R=Jc(this,t,tl,m,b-1,M,b-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Jc(r,t,i,s,l,c,d){const p=r.geometry.attributes.position;if(gu.fromBufferAttribute(p,l),_u.fromBufferAttribute(p,c),i.distanceSqToSegment(gu,_u,lh,K_)>s)return;lh.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(lh);if(!(h<t.near||h>t.far))return{distance:h,point:K_.clone().applyMatrix4(r.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:r}}const Q_=new rt,J_=new rt;class vb extends ix{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Q_.fromBufferAttribute(i,l),J_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Q_.distanceTo(J_);t.setAttribute("lineDistance",new ui(s,1))}else le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lp extends Vs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const $_=new Ke,cp=new Ap,$c=new hl,tu=new rt;class tv extends Cn{constructor(t=new Fn,i=new lp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),$c.copy(s.boundingSphere),$c.applyMatrix4(l),$c.radius+=c,t.ray.intersectsSphere($c)===!1)return;$_.copy(l).invert(),cp.copy(t.ray).applyMatrix4($_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=s.index,S=s.attributes.position;if(h!==null){const g=Math.max(0,d.start),M=Math.min(h.count,d.start+d.count);for(let b=g,R=M;b<R;b++){const v=h.getX(b);tu.fromBufferAttribute(S,v),ev(tu,v,m,l,t,i,this)}}else{const g=Math.max(0,d.start),M=Math.min(S.count,d.start+d.count);for(let b=g,R=M;b<R;b++)tu.fromBufferAttribute(S,b),ev(tu,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function ev(r,t,i,s,l,c,d){const p=cp.distanceSqToPoint(r);if(p<i){const m=new rt;cp.closestPointToPoint(r,m),m.applyMatrix4(s);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class ax extends Pn{constructor(t=[],i=Gs,s,l,c,d,p,m,h,_){super(t,i,s,l,c,d,p,m,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class xb extends Pn{constructor(t,i,s,l,c,d,p,m,h){super(t,i,s,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fl extends Pn{constructor(t,i,s=Zi,l,c,d,p=Rn,m=Rn,h,_=Aa,S=1){if(_!==Aa&&_!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:S};super(g,l,c,d,p,m,_,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ep(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Sb extends fl{constructor(t,i=Zi,s=Gs,l,c,d=Rn,p=Rn,m,h=Aa){const _={width:t,height:t,depth:1},S=[_,_,_,_,_,_];super(t,t,i,s,l,c,d,p,m,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class sx extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class pl extends Fn{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],_=[],S=[];let g=0,M=0;b("z","y","x",-1,-1,s,i,t,d,c,0),b("z","y","x",1,-1,s,i,-t,d,c,1),b("x","z","y",1,1,t,s,i,l,d,2),b("x","z","y",1,-1,t,s,-i,l,d,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ui(h,3)),this.setAttribute("normal",new ui(_,3)),this.setAttribute("uv",new ui(S,2));function b(R,v,x,A,U,D,H,I,z,E,O){const mt=D/z,G=H/E,Q=D/2,q=H/2,at=I/2,tt=z+1,N=E+1;let B=0,X=0;const nt=new rt;for(let vt=0;vt<N;vt++){const F=vt*G-q;for(let k=0;k<tt;k++){const et=k*mt-Q;nt[R]=et*A,nt[v]=F*U,nt[x]=at,h.push(nt.x,nt.y,nt.z),nt[R]=0,nt[v]=0,nt[x]=I>0?1:-1,_.push(nt.x,nt.y,nt.z),S.push(k/z),S.push(1-vt/E),B+=1}}for(let vt=0;vt<E;vt++)for(let F=0;F<z;F++){const k=g+F+tt*vt,et=g+F+tt*(vt+1),pt=g+(F+1)+tt*(vt+1),bt=g+(F+1)+tt*vt;m.push(k,et,bt),m.push(et,pt,bt),X+=6}p.addGroup(M,X,O),M+=X,g+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ml extends Fn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,_=m+1,S=t/p,g=i/m,M=[],b=[],R=[],v=[];for(let x=0;x<_;x++){const A=x*g-d;for(let U=0;U<h;U++){const D=U*S-c;b.push(D,-A,0),R.push(0,0,1),v.push(U/p),v.push(1-x/m)}}for(let x=0;x<m;x++)for(let A=0;A<p;A++){const U=A+h*x,D=A+h*(x+1),H=A+1+h*(x+1),I=A+1+h*x;M.push(U,D,I),M.push(D,H,I)}this.setIndex(M),this.setAttribute("position",new ui(b,3)),this.setAttribute("normal",new ui(R,3)),this.setAttribute("uv",new ui(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ml(t.width,t.height,t.widthSegments,t.heightSegments)}}function Kr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function kn(r){const t={};for(let i=0;i<r.length;i++){const s=Kr(r[i]);for(const l in s)t[l]=s[l]}return t}function yb(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function rx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const Mb={clone:Kr,merge:kn};var bb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends Vs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bb,this.fragmentShader=Eb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Kr(t.uniforms),this.uniformsGroups=yb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Tb extends Qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ab extends Vs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Rb extends Vs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ox extends Cn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const ch=new Ke,nv=new rt,iv=new rt;class Cb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cp,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;nv.setFromMatrixPosition(t.matrixWorld),i.position.copy(nv),iv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(iv),i.updateMatrixWorld(),ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ch,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===ul||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ch)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const eu=new rt,nu=new Jr,Hi=new rt;class lx extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(eu,nu,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eu,nu,Hi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(eu,nu,Hi),Hi.x===1&&Hi.y===1&&Hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eu,nu,Hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ss=new rt,av=new Ee,sv=new Ee;class li extends lx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=op*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return op*2*Math.atan(Math.tan(Bd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-t/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ss.x,ss.y).multiplyScalar(-t/ss.z)}getViewSize(t,i){return this.getViewBounds(t,av,sv),i.subVectors(sv,av)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Bd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class wb extends Cb{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0}}class Db extends ox{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new wb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class cx extends lx{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=_*this.view.offsetY,m=p-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Nb extends ox{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Hr=-90,Gr=1;class Ub extends Cn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(Hr,Gr,t,i);l.layers=this.layers,this.add(l);const c=new li(Hr,Gr,t,i);c.layers=this.layers,this.add(c);const d=new li(Hr,Gr,t,i);d.layers=this.layers,this.add(d);const p=new li(Hr,Gr,t,i);p.layers=this.layers,this.add(p);const m=new li(Hr,Gr,t,i);m.layers=this.layers,this.add(m);const h=new li(Hr,Gr,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(t===ji)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===ul)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,_]=this.children,S=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let v=!1;t.isWebGLRenderer===!0?v=t.state.buffers.depth.getReversed():v=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),v&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),v&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),v&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),v&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),v&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),v&&t.autoClear===!1&&t.clearDepth(),t.render(i,_),t.setRenderTarget(S,g,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Lb extends li{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ob{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,le("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class Pb extends vb{constructor(t=10,i=10,s=4473924,l=8947848){s=new ye(s),l=new ye(l);const c=i/2,d=t/i,p=t/2,m=[],h=[];for(let g=0,M=0,b=-p;g<=i;g++,b+=d){m.push(-p,0,b,p,0,b),m.push(b,0,-p,b,0,p);const R=g===c?s:l;R.toArray(h,M),M+=3,R.toArray(h,M),M+=3,R.toArray(h,M),M+=3,R.toArray(h,M),M+=3}const _=new Fn;_.setAttribute("position",new ui(m,3)),_.setAttribute("color",new ui(h,3));const S=new wp({vertexColors:!0,toneMapped:!1});super(_,S),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function rv(r,t,i,s){const l=Fb(s);switch(i){case jv:return r*t;case Yv:return r*t/l.components*l.byteLength;case xp:return r*t/l.components*l.byteLength;case Yr:return r*t*2/l.components*l.byteLength;case Sp:return r*t*2/l.components*l.byteLength;case qv:return r*t*3/l.components*l.byteLength;case Li:return r*t*4/l.components*l.byteLength;case yp:return r*t*4/l.components*l.byteLength;case ru:case ou:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case lu:case cu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wh:case Nh:return Math.max(r,16)*Math.max(t,8)/4;case Ch:case Dh:return Math.max(r,8)*Math.max(t,8)/2;case Uh:case Lh:case Ph:case Fh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Oh:case Bh:case zh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ih:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Gh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Vh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case kh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case jh:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case qh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Kh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Qh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Jh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case $h:case tp:case ep:return Math.ceil(r/4)*Math.ceil(t/4)*16;case np:case ip:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ap:case sp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Fb(r){switch(r){case ci:case Vv:return{byteLength:1,components:1};case ll:case kv:case Ta:return{byteLength:2,components:1};case _p:case vp:return{byteLength:2,components:4};case Zi:case gp:case Wi:return{byteLength:4,components:1};case Xv:case Wv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pp}}));typeof window<"u"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ux(){let r=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Bb(r){const t=new WeakMap;function i(p,m){const h=p.array,_=p.usage,S=h.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,h,_),p.onUploadCallback();let M;if(h instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=r.SHORT;else if(h instanceof Uint32Array)M=r.UNSIGNED_INT;else if(h instanceof Int32Array)M=r.INT;else if(h instanceof Int8Array)M=r.BYTE;else if(h instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:S}}function s(p,m,h){const _=m.array,S=m.updateRanges;if(r.bindBuffer(h,p),S.length===0)r.bufferSubData(h,0,_);else{S.sort((M,b)=>M.start-b.start);let g=0;for(let M=1;M<S.length;M++){const b=S[g],R=S[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++g,S[g]=R)}S.length=g+1;for(let M=0,b=S.length;M<b;M++){const R=S[M];r.bufferSubData(h,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const _=t.get(p);(!_||_.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var zb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ib=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,aE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,rE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,oE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pE="gl_FragColor = linearToOutputTexel( gl_FragColor );",mE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_E=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ME=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,DE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,NE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,FE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,WE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$E=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,t1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,n1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,o1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,c1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,h1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,S1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,y1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,M1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,b1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,T1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,R1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,F1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,X1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,W1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,j1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Se={alphahash_fragment:zb,alphahash_pars_fragment:Ib,alphamap_fragment:Hb,alphamap_pars_fragment:Gb,alphatest_fragment:Vb,alphatest_pars_fragment:kb,aomap_fragment:Xb,aomap_pars_fragment:Wb,batching_pars_vertex:jb,batching_vertex:qb,begin_vertex:Yb,beginnormal_vertex:Zb,bsdfs:Kb,iridescence_fragment:Qb,bumpmap_pars_fragment:Jb,clipping_planes_fragment:$b,clipping_planes_pars_fragment:tE,clipping_planes_pars_vertex:eE,clipping_planes_vertex:nE,color_fragment:iE,color_pars_fragment:aE,color_pars_vertex:sE,color_vertex:rE,common:oE,cube_uv_reflection_fragment:lE,defaultnormal_vertex:cE,displacementmap_pars_vertex:uE,displacementmap_vertex:fE,emissivemap_fragment:dE,emissivemap_pars_fragment:hE,colorspace_fragment:pE,colorspace_pars_fragment:mE,envmap_fragment:gE,envmap_common_pars_fragment:_E,envmap_pars_fragment:vE,envmap_pars_vertex:xE,envmap_physical_pars_fragment:DE,envmap_vertex:SE,fog_vertex:yE,fog_pars_vertex:ME,fog_fragment:bE,fog_pars_fragment:EE,gradientmap_pars_fragment:TE,lightmap_pars_fragment:AE,lights_lambert_fragment:RE,lights_lambert_pars_fragment:CE,lights_pars_begin:wE,lights_toon_fragment:NE,lights_toon_pars_fragment:UE,lights_phong_fragment:LE,lights_phong_pars_fragment:OE,lights_physical_fragment:PE,lights_physical_pars_fragment:FE,lights_fragment_begin:BE,lights_fragment_maps:zE,lights_fragment_end:IE,logdepthbuf_fragment:HE,logdepthbuf_pars_fragment:GE,logdepthbuf_pars_vertex:VE,logdepthbuf_vertex:kE,map_fragment:XE,map_pars_fragment:WE,map_particle_fragment:jE,map_particle_pars_fragment:qE,metalnessmap_fragment:YE,metalnessmap_pars_fragment:ZE,morphinstance_vertex:KE,morphcolor_vertex:QE,morphnormal_vertex:JE,morphtarget_pars_vertex:$E,morphtarget_vertex:t1,normal_fragment_begin:e1,normal_fragment_maps:n1,normal_pars_fragment:i1,normal_pars_vertex:a1,normal_vertex:s1,normalmap_pars_fragment:r1,clearcoat_normal_fragment_begin:o1,clearcoat_normal_fragment_maps:l1,clearcoat_pars_fragment:c1,iridescence_pars_fragment:u1,opaque_fragment:f1,packing:d1,premultiplied_alpha_fragment:h1,project_vertex:p1,dithering_fragment:m1,dithering_pars_fragment:g1,roughnessmap_fragment:_1,roughnessmap_pars_fragment:v1,shadowmap_pars_fragment:x1,shadowmap_pars_vertex:S1,shadowmap_vertex:y1,shadowmask_pars_fragment:M1,skinbase_vertex:b1,skinning_pars_vertex:E1,skinning_vertex:T1,skinnormal_vertex:A1,specularmap_fragment:R1,specularmap_pars_fragment:C1,tonemapping_fragment:w1,tonemapping_pars_fragment:D1,transmission_fragment:N1,transmission_pars_fragment:U1,uv_pars_fragment:L1,uv_pars_vertex:O1,uv_vertex:P1,worldpos_vertex:F1,background_vert:B1,background_frag:z1,backgroundCube_vert:I1,backgroundCube_frag:H1,cube_vert:G1,cube_frag:V1,depth_vert:k1,depth_frag:X1,distance_vert:W1,distance_frag:j1,equirect_vert:q1,equirect_frag:Y1,linedashed_vert:Z1,linedashed_frag:K1,meshbasic_vert:Q1,meshbasic_frag:J1,meshlambert_vert:$1,meshlambert_frag:tT,meshmatcap_vert:eT,meshmatcap_frag:nT,meshnormal_vert:iT,meshnormal_frag:aT,meshphong_vert:sT,meshphong_frag:rT,meshphysical_vert:oT,meshphysical_frag:lT,meshtoon_vert:cT,meshtoon_frag:uT,points_vert:fT,points_frag:dT,shadow_vert:hT,shadow_frag:pT,sprite_vert:mT,sprite_frag:gT},zt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Vi={basic:{uniforms:kn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:kn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:kn([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:kn([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:kn([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new ye(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:kn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:kn([zt.points,zt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:kn([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:kn([zt.common,zt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:kn([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:kn([zt.sprite,zt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:kn([zt.common,zt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:kn([zt.lights,zt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};Vi.physical={uniforms:kn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const iu={r:0,b:0,g:0},Os=new Ra,_T=new Ke;function vT(r,t,i,s,l,c){const d=new ye(0);let p=l===!0?0:1,m,h,_=null,S=0,g=null;function M(A){let U=A.isScene===!0?A.background:null;if(U&&U.isTexture){const D=A.backgroundBlurriness>0;U=t.get(U,D)}return U}function b(A){let U=!1;const D=M(A);D===null?v(d,p):D&&D.isColor&&(v(D,1),U=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||U)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(A,U){const D=M(U);D&&(D.isCubeTexture||D.mapping===vu)?(h===void 0&&(h=new Ki(new pl(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:Kr(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(H,I,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Os.copy(U.backgroundRotation),Os.x*=-1,Os.y*=-1,Os.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_T.makeRotationFromEuler(Os)),h.material.toneMapped=Le.getTransfer(D.colorSpace)!==Ve,(_!==D||S!==D.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,_=D,S=D.version,g=r.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Ki(new ml(2,2),new Qi({name:"BackgroundMaterial",uniforms:Kr(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Le.getTransfer(D.colorSpace)!==Ve,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||S!==D.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,_=D,S=D.version,g=r.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null))}function v(A,U){A.getRGB(iu,rx(r)),i.buffers.color.setClear(iu.r,iu.g,iu.b,U,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(A,U=1){d.set(A),p=U,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(A){p=A,v(d,p)},render:b,addToRenderList:R,dispose:x}}function xT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(G,Q,q,at,tt){let N=!1;const B=S(G,at,q,Q);c!==B&&(c=B,h(c.object)),N=M(G,at,q,tt),N&&b(G,at,q,tt),tt!==null&&t.update(tt,r.ELEMENT_ARRAY_BUFFER),(N||d)&&(d=!1,D(G,Q,q,at),tt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function m(){return r.createVertexArray()}function h(G){return r.bindVertexArray(G)}function _(G){return r.deleteVertexArray(G)}function S(G,Q,q,at){const tt=at.wireframe===!0;let N=s[Q.id];N===void 0&&(N={},s[Q.id]=N);const B=G.isInstancedMesh===!0?G.id:0;let X=N[B];X===void 0&&(X={},N[B]=X);let nt=X[q.id];nt===void 0&&(nt={},X[q.id]=nt);let vt=nt[tt];return vt===void 0&&(vt=g(m()),nt[tt]=vt),vt}function g(G){const Q=[],q=[],at=[];for(let tt=0;tt<i;tt++)Q[tt]=0,q[tt]=0,at[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:q,attributeDivisors:at,object:G,attributes:{},index:null}}function M(G,Q,q,at){const tt=c.attributes,N=Q.attributes;let B=0;const X=q.getAttributes();for(const nt in X)if(X[nt].location>=0){const F=tt[nt];let k=N[nt];if(k===void 0&&(nt==="instanceMatrix"&&G.instanceMatrix&&(k=G.instanceMatrix),nt==="instanceColor"&&G.instanceColor&&(k=G.instanceColor)),F===void 0||F.attribute!==k||k&&F.data!==k.data)return!0;B++}return c.attributesNum!==B||c.index!==at}function b(G,Q,q,at){const tt={},N=Q.attributes;let B=0;const X=q.getAttributes();for(const nt in X)if(X[nt].location>=0){let F=N[nt];F===void 0&&(nt==="instanceMatrix"&&G.instanceMatrix&&(F=G.instanceMatrix),nt==="instanceColor"&&G.instanceColor&&(F=G.instanceColor));const k={};k.attribute=F,F&&F.data&&(k.data=F.data),tt[nt]=k,B++}c.attributes=tt,c.attributesNum=B,c.index=at}function R(){const G=c.newAttributes;for(let Q=0,q=G.length;Q<q;Q++)G[Q]=0}function v(G){x(G,0)}function x(G,Q){const q=c.newAttributes,at=c.enabledAttributes,tt=c.attributeDivisors;q[G]=1,at[G]===0&&(r.enableVertexAttribArray(G),at[G]=1),tt[G]!==Q&&(r.vertexAttribDivisor(G,Q),tt[G]=Q)}function A(){const G=c.newAttributes,Q=c.enabledAttributes;for(let q=0,at=Q.length;q<at;q++)Q[q]!==G[q]&&(r.disableVertexAttribArray(q),Q[q]=0)}function U(G,Q,q,at,tt,N,B){B===!0?r.vertexAttribIPointer(G,Q,q,tt,N):r.vertexAttribPointer(G,Q,q,at,tt,N)}function D(G,Q,q,at){R();const tt=at.attributes,N=q.getAttributes(),B=Q.defaultAttributeValues;for(const X in N){const nt=N[X];if(nt.location>=0){let vt=tt[X];if(vt===void 0&&(X==="instanceMatrix"&&G.instanceMatrix&&(vt=G.instanceMatrix),X==="instanceColor"&&G.instanceColor&&(vt=G.instanceColor)),vt!==void 0){const F=vt.normalized,k=vt.itemSize,et=t.get(vt);if(et===void 0)continue;const pt=et.buffer,bt=et.type,Z=et.bytesPerElement,V=bt===r.INT||bt===r.UNSIGNED_INT||vt.gpuType===gp;if(vt.isInterleavedBufferAttribute){const ut=vt.data,Mt=ut.stride,Ot=vt.offset;if(ut.isInstancedInterleavedBuffer){for(let wt=0;wt<nt.locationSize;wt++)x(nt.location+wt,ut.meshPerAttribute);G.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let wt=0;wt<nt.locationSize;wt++)v(nt.location+wt);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let wt=0;wt<nt.locationSize;wt++)U(nt.location+wt,k/nt.locationSize,bt,F,Mt*Z,(Ot+k/nt.locationSize*wt)*Z,V)}else{if(vt.isInstancedBufferAttribute){for(let ut=0;ut<nt.locationSize;ut++)x(nt.location+ut,vt.meshPerAttribute);G.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ut=0;ut<nt.locationSize;ut++)v(nt.location+ut);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let ut=0;ut<nt.locationSize;ut++)U(nt.location+ut,k/nt.locationSize,bt,F,k*Z,k/nt.locationSize*ut*Z,V)}}else if(B!==void 0){const F=B[X];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(nt.location,F);break;case 3:r.vertexAttrib3fv(nt.location,F);break;case 4:r.vertexAttrib4fv(nt.location,F);break;default:r.vertexAttrib1fv(nt.location,F)}}}}A()}function H(){O();for(const G in s){const Q=s[G];for(const q in Q){const at=Q[q];for(const tt in at){const N=at[tt];for(const B in N)_(N[B].object),delete N[B];delete at[tt]}}delete s[G]}}function I(G){if(s[G.id]===void 0)return;const Q=s[G.id];for(const q in Q){const at=Q[q];for(const tt in at){const N=at[tt];for(const B in N)_(N[B].object),delete N[B];delete at[tt]}}delete s[G.id]}function z(G){for(const Q in s){const q=s[Q];for(const at in q){const tt=q[at];if(tt[G.id]===void 0)continue;const N=tt[G.id];for(const B in N)_(N[B].object),delete N[B];delete tt[G.id]}}}function E(G){for(const Q in s){const q=s[Q],at=G.isInstancedMesh===!0?G.id:0,tt=q[at];if(tt!==void 0){for(const N in tt){const B=tt[N];for(const X in B)_(B[X].object),delete B[X];delete tt[N]}delete q[at],Object.keys(q).length===0&&delete s[Q]}}}function O(){mt(),d=!0,c!==l&&(c=l,h(c.object))}function mt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:mt,dispose:H,releaseStatesOfGeometry:I,releaseStatesOfObject:E,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:v,disableUnusedAttributes:A}}function ST(r,t,i){let s;function l(h){s=h}function c(h,_){r.drawArrays(s,h,_),i.update(_,s,1)}function d(h,_,S){S!==0&&(r.drawArraysInstanced(s,h,_,S),i.update(_,s,S))}function p(h,_,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,_,0,S);let M=0;for(let b=0;b<S;b++)M+=_[b];i.update(M,s,1)}function m(h,_,S,g){if(S===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<h.length;b++)d(h[b],_[b],g[b]);else{M.multiDrawArraysInstancedWEBGL(s,h,0,_,0,g,0,S);let b=0;for(let R=0;R<S;R++)b+=_[R]*g[R];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function yT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Li&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const E=z===Ta&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ci&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Wi&&!E)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const _=m(h);_!==h&&(le("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const S=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),A=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=r.getParameter(r.MAX_SAMPLES),I=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:A,maxVaryings:U,maxFragmentUniforms:D,maxSamples:H,samples:I}}function MT(r){const t=this;let i=null,s=0,l=!1,c=!1;const d=new Fs,p=new xe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const M=S.length!==0||g||s!==0||l;return l=g,s=S.length,M},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,g){i=_(S,g,0)},this.setState=function(S,g,M){const b=S.clippingPlanes,R=S.clipIntersection,v=S.clipShadows,x=r.get(S);if(!l||b===null||b.length===0||c&&!v)c?_(null):h();else{const A=c?0:s,U=A*4;let D=x.clippingState||null;m.value=D,D=_(b,g,U,M);for(let H=0;H!==U;++H)D[H]=i[H];x.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=A}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function _(S,g,M,b){const R=S!==null?S.length:0;let v=null;if(R!==0){if(v=m.value,b!==!0||v===null){const x=M+R*4,A=g.matrixWorldInverse;p.getNormalMatrix(A),(v===null||v.length<x)&&(v=new Float32Array(x));for(let U=0,D=M;U!==R;++U,D+=4)d.copy(S[U]).applyMatrix4(A,p),d.normal.toArray(v,D),v[D+3]=d.constant}m.value=v,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,v}}const os=4,ov=[.125,.215,.35,.446,.526,.582],zs=20,bT=256,el=new cx,lv=new ye;let uh=null,fh=0,dh=0,hh=!1;const ET=new rt;class cv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=ET}=c;uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(uh,fh,dh),this._renderer.xr.enabled=hh,t.scissorTest=!1,Vr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Gs||t.mapping===qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:Ta,format:Li,colorSpace:Zr,depthBuffer:!1},l=uv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=TT(c)),this._blurMaterial=RT(c,t,i),this._ggxMaterial=AT(c,t,i)}return l}_compileMaterial(t){const i=new Ki(new Fn,t);this._renderer.compile(i,el)}_sceneToCubeUV(t,i,s,l,c){const m=new li(90,1,i,s),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,M=S.toneMapping;S.getClearColor(lv),S.toneMapping=qi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ki(new pl,new Rp({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,v=R.material;let x=!1;const A=t.background;A?A.isColor&&(v.color.copy(A),t.background=null,x=!0):(v.color.copy(lv),x=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(m.up.set(0,h[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[U],c.y,c.z)):D===1?(m.up.set(0,0,h[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[U],c.z)):(m.up.set(0,h[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[U]));const H=this._cubeSize;Vr(l,D*H,U>2?H:0,H,H),S.setRenderTarget(l),x&&S.render(R,m),S.render(t,m)}S.toneMapping=M,S.autoClear=g,t.background=A}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Gs||t.mapping===qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=dv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Vr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,el)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),S=Math.sqrt(h*h-_*_),g=0+h*1.25,M=S*g,{_lodMax:b}=this,R=this._sizeLods[s],v=3*R*(s>b-os?s-b+os:0),x=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,Vr(c,v,x,3*R,2*R),l.setRenderTarget(c),l.render(p,el),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Vr(t,v,x,3*R,2*R),l.setRenderTarget(t),l.render(p,el)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const _=3,S=this._lodMeshes[l];S.material=h;const g=h.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*zs-1),R=c/b,v=isFinite(c)?1+Math.floor(_*R):zs;v>zs&&le(`sigmaRadians, ${c}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${zs}`);const x=[];let A=0;for(let z=0;z<zs;++z){const E=z/R,O=Math.exp(-E*E/2);x.push(O),z===0?A+=O:z<v&&(A+=2*O)}for(let z=0;z<x.length;z++)x[z]=x[z]/A;g.envMap.value=t.texture,g.samples.value=v,g.weights.value=x,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:U}=this;g.dTheta.value=b,g.mipInt.value=U-s;const D=this._sizeLods[l],H=3*D*(l>U-os?l-U+os:0),I=4*(this._cubeSize-D);Vr(i,H,I,3*D,2*D),m.setRenderTarget(i),m.render(S,el)}}function TT(r){const t=[],i=[],s=[];let l=r;const c=r-os+1+ov.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);t.push(p);let m=1/p;d>r-os?m=ov[d-r+os-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),_=-h,S=1+h,g=[_,_,S,_,S,S,_,_,S,S,_,S],M=6,b=6,R=3,v=2,x=1,A=new Float32Array(R*b*M),U=new Float32Array(v*b*M),D=new Float32Array(x*b*M);for(let I=0;I<M;I++){const z=I%3*2/3-1,E=I>2?0:-1,O=[z,E,0,z+2/3,E,0,z+2/3,E+1,0,z,E,0,z+2/3,E+1,0,z,E+1,0];A.set(O,R*b*I),U.set(g,v*b*I);const mt=[I,I,I,I,I,I];D.set(mt,x*b*I)}const H=new Fn;H.setAttribute("position",new Ln(A,R)),H.setAttribute("uv",new Ln(U,v)),H.setAttribute("faceIndex",new Ln(D,x)),s.push(new Ki(H,null)),l>os&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function uv(r,t,i){const s=new Yi(r,t,i);return s.texture.mapping=vu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Vr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function AT(r,t,i){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function RT(r,t,i){const s=new Float32Array(zs),l=new rt(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function fv(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function dv(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ba,depthTest:!1,depthWrite:!1})}function xu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class fx extends Yi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new ax(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new pl(5,5,5),c=new Qi({name:"CubemapFromEquirect",uniforms:Kr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:ba});c.uniforms.tEquirect.value=i;const d=new Ki(l,c),p=i.minFilter;return i.minFilter===Is&&(i.minFilter=On),new Ub(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}function CT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?d(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Od||M===Pd)if(t.has(g)){const b=t.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const R=new fx(b.height);return R.fromEquirectangularTexture(r,g),t.set(g,R),g.addEventListener("dispose",h),p(R.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const M=g.mapping,b=M===Od||M===Pd,R=M===Gs||M===qr;if(b||R){let v=i.get(g);const x=v!==void 0?v.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new cv(r)),v=b?s.fromEquirectangular(g,v):s.fromCubemap(g,v),v.texture.pmremVersion=g.pmremVersion,i.set(g,v),v.texture;if(v!==void 0)return v.texture;{const A=g.image;return b&&A&&A.height>0||R&&A&&m(A)?(s===null&&(s=new cv(r)),v=b?s.fromEquirectangular(g):s.fromCubemap(g),v.texture.pmremVersion=g.pmremVersion,i.set(g,v),g.addEventListener("dispose",_),v.texture):null}}}return g}function p(g,M){return M===Od?g.mapping=Gs:M===Pd&&(g.mapping=qr),g}function m(g){let M=0;const b=6;for(let R=0;R<b;R++)g[R]!==void 0&&M++;return M===b}function h(g){const M=g.target;M.removeEventListener("dispose",h);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function S(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function wT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&pu("WebGLRenderer: "+s+" extension not supported."),l}}}function DT(r,t,i,s){const l={},c=new WeakMap;function d(S){const g=S.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",d),delete l[g.id];const M=c.get(g);M&&(t.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(S,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(S){const g=S.attributes;for(const M in g)t.update(g[M],r.ARRAY_BUFFER)}function h(S){const g=[],M=S.index,b=S.attributes.position;let R=0;if(b===void 0)return;if(M!==null){const A=M.array;R=M.version;for(let U=0,D=A.length;U<D;U+=3){const H=A[U+0],I=A[U+1],z=A[U+2];g.push(H,I,I,z,z,H)}}else{const A=b.array;R=b.version;for(let U=0,D=A.length/3-1;U<D;U+=3){const H=U+0,I=U+1,z=U+2;g.push(H,I,I,z,z,H)}}const v=new(b.count>=65535?tx:$v)(g,1);v.version=R;const x=c.get(S);x&&t.remove(x),c.set(S,v)}function _(S){const g=c.get(S);if(g){const M=S.index;M!==null&&g.version<M.version&&h(S)}else h(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:_}}function NT(r,t,i){let s;function l(g){s=g}let c,d;function p(g){c=g.type,d=g.bytesPerElement}function m(g,M){r.drawElements(s,M,c,g*d),i.update(M,s,1)}function h(g,M,b){b!==0&&(r.drawElementsInstanced(s,M,c,g*d,b),i.update(M,s,b))}function _(g,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,g,0,b);let v=0;for(let x=0;x<b;x++)v+=M[x];i.update(v,s,1)}function S(g,M,b,R){if(b===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let x=0;x<g.length;x++)h(g[x]/d,M[x],R[x]);else{v.multiDrawElementsInstancedWEBGL(s,M,0,c,g,0,R,0,b);let x=0;for(let A=0;A<b;A++)x+=M[A]*R[A];i.update(x,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=_,this.renderMultiDrawInstances=S}function UT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ue("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function LT(r,t,i){const s=new WeakMap,l=new nn;function c(d,p,m){const h=d.morphTargetInfluences,_=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=_!==void 0?_.length:0;let g=s.get(p);if(g===void 0||g.count!==S){let mt=function(){E.dispose(),s.delete(p),p.removeEventListener("dispose",mt)};var M=mt;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,v=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],U=p.morphAttributes.color||[];let D=0;b===!0&&(D=1),R===!0&&(D=2),v===!0&&(D=3);let H=p.attributes.position.count*D,I=1;H>t.maxTextureSize&&(I=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const z=new Float32Array(H*I*4*S),E=new Kv(z,H,I,S);E.type=Wi,E.needsUpdate=!0;const O=D*4;for(let G=0;G<S;G++){const Q=x[G],q=A[G],at=U[G],tt=H*I*4*G;for(let N=0;N<Q.count;N++){const B=N*O;b===!0&&(l.fromBufferAttribute(Q,N),z[tt+B+0]=l.x,z[tt+B+1]=l.y,z[tt+B+2]=l.z,z[tt+B+3]=0),R===!0&&(l.fromBufferAttribute(q,N),z[tt+B+4]=l.x,z[tt+B+5]=l.y,z[tt+B+6]=l.z,z[tt+B+7]=0),v===!0&&(l.fromBufferAttribute(at,N),z[tt+B+8]=l.x,z[tt+B+9]=l.y,z[tt+B+10]=l.z,z[tt+B+11]=at.itemSize===4?l.w:1)}}g={count:S,texture:E,size:new Ee(H,I)},s.set(p,g),p.addEventListener("dispose",mt)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let b=0;for(let v=0;v<h.length;v++)b+=h[v];const R=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function OT(r,t,i,s,l){let c=new WeakMap;function d(h){const _=l.render.frame,S=h.geometry,g=t.get(h,S);if(c.get(g)!==_&&(t.update(g),c.set(g,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==_&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,_))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==_&&(M.update(),c.set(M,_))}return g}function p(){c=new WeakMap}function m(h){const _=h.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:d,dispose:p}}const PT={[Pv]:"LINEAR_TONE_MAPPING",[Fv]:"REINHARD_TONE_MAPPING",[Bv]:"CINEON_TONE_MAPPING",[mp]:"ACES_FILMIC_TONE_MAPPING",[Iv]:"AGX_TONE_MAPPING",[Hv]:"NEUTRAL_TONE_MAPPING",[zv]:"CUSTOM_TONE_MAPPING"};function FT(r,t,i,s,l){const c=new Yi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),d=new Yi(t,i,{type:Ta,depthBuffer:!1,stencilBuffer:!1}),p=new Fn;p.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new ui([0,2,0,0,2,0],2));const m=new Tb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ki(p,m),_=new cx(-1,1,1,-1,0,1);let S=null,g=null,M=!1,b,R=null,v=[],x=!1;this.setSize=function(A,U){c.setSize(A,U),d.setSize(A,U);for(let D=0;D<v.length;D++){const H=v[D];H.setSize&&H.setSize(A,U)}},this.setEffects=function(A){v=A,x=v.length>0&&v[0].isRenderPass===!0;const U=c.width,D=c.height;for(let H=0;H<v.length;H++){const I=v[H];I.setSize&&I.setSize(U,D)}},this.begin=function(A,U){if(M||A.toneMapping===qi&&v.length===0)return!1;if(R=U,U!==null){const D=U.width,H=U.height;(c.width!==D||c.height!==H)&&this.setSize(D,H)}return x===!1&&A.setRenderTarget(c),b=A.toneMapping,A.toneMapping=qi,!0},this.hasRenderPass=function(){return x},this.end=function(A,U){A.toneMapping=b,M=!0;let D=c,H=d;for(let I=0;I<v.length;I++){const z=v[I];if(z.enabled!==!1&&(z.render(A,H,D,U),z.needsSwap!==!1)){const E=D;D=H,H=E}}if(S!==A.outputColorSpace||g!==A.toneMapping){S=A.outputColorSpace,g=A.toneMapping,m.defines={},Le.getTransfer(S)===Ve&&(m.defines.SRGB_TRANSFER="");const I=PT[g];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,A.setRenderTarget(R),A.render(h,_),R=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const dx=new Pn,up=new fl(1,1),hx=new Kv,px=new JM,mx=new ax,hv=[],pv=[],mv=new Float32Array(16),gv=new Float32Array(9),_v=new Float32Array(4);function $r(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=hv[l];if(c===void 0&&(c=new Float32Array(l),hv[l]=c),t!==0){s.toArray(c,0);for(let d=1,p=0;d!==t;++d)p+=i,r[d].toArray(c,p)}return c}function _n(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function vn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Su(r,t){let i=pv[t];i===void 0&&(i=new Int32Array(t),pv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function BT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function zT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2fv(this.addr,t),vn(i,t)}}function IT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;r.uniform3fv(this.addr,t),vn(i,t)}}function HT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4fv(this.addr,t),vn(i,t)}}function GT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;_v.set(s),r.uniformMatrix2fv(this.addr,!1,_v),vn(i,s)}}function VT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;gv.set(s),r.uniformMatrix3fv(this.addr,!1,gv),vn(i,s)}}function kT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;mv.set(s),r.uniformMatrix4fv(this.addr,!1,mv),vn(i,s)}}function XT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function WT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2iv(this.addr,t),vn(i,t)}}function jT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3iv(this.addr,t),vn(i,t)}}function qT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4iv(this.addr,t),vn(i,t)}}function YT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function ZT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2uiv(this.addr,t),vn(i,t)}}function KT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3uiv(this.addr,t),vn(i,t)}}function QT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4uiv(this.addr,t),vn(i,t)}}function JT(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(up.compareFunction=i.isReversedDepthBuffer()?bp:Mp,c=up):c=dx,i.setTexture2D(t||c,l)}function $T(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||px,l)}function tA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||mx,l)}function eA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||hx,l)}function nA(r){switch(r){case 5126:return BT;case 35664:return zT;case 35665:return IT;case 35666:return HT;case 35674:return GT;case 35675:return VT;case 35676:return kT;case 5124:case 35670:return XT;case 35667:case 35671:return WT;case 35668:case 35672:return jT;case 35669:case 35673:return qT;case 5125:return YT;case 36294:return ZT;case 36295:return KT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return tA;case 36289:case 36303:case 36311:case 36292:return eA}}function iA(r,t){r.uniform1fv(this.addr,t)}function aA(r,t){const i=$r(t,this.size,2);r.uniform2fv(this.addr,i)}function sA(r,t){const i=$r(t,this.size,3);r.uniform3fv(this.addr,i)}function rA(r,t){const i=$r(t,this.size,4);r.uniform4fv(this.addr,i)}function oA(r,t){const i=$r(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function lA(r,t){const i=$r(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function cA(r,t){const i=$r(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function uA(r,t){r.uniform1iv(this.addr,t)}function fA(r,t){r.uniform2iv(this.addr,t)}function dA(r,t){r.uniform3iv(this.addr,t)}function hA(r,t){r.uniform4iv(this.addr,t)}function pA(r,t){r.uniform1uiv(this.addr,t)}function mA(r,t){r.uniform2uiv(this.addr,t)}function gA(r,t){r.uniform3uiv(this.addr,t)}function _A(r,t){r.uniform4uiv(this.addr,t)}function vA(r,t,i){const s=this.cache,l=t.length,c=Su(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=up:d=dx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||d,c[p])}function xA(r,t,i){const s=this.cache,l=t.length,c=Su(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||px,c[d])}function SA(r,t,i){const s=this.cache,l=t.length,c=Su(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||mx,c[d])}function yA(r,t,i){const s=this.cache,l=t.length,c=Su(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||hx,c[d])}function MA(r){switch(r){case 5126:return iA;case 35664:return aA;case 35665:return sA;case 35666:return rA;case 35674:return oA;case 35675:return lA;case 35676:return cA;case 5124:case 35670:return uA;case 35667:case 35671:return fA;case 35668:case 35672:return dA;case 35669:case 35673:return hA;case 5125:return pA;case 36294:return mA;case 36295:return gA;case 36296:return _A;case 35678:case 36198:case 36298:case 36306:case 35682:return vA;case 35679:case 36299:case 36307:return xA;case 35680:case 36300:case 36308:case 36293:return SA;case 36289:case 36303:case 36311:case 36292:return yA}}class bA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=nA(i.type)}}class EA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=MA(i.type)}}class TA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const ph=/(\w+)(\])?(\[|\.)?/g;function vv(r,t){r.seq.push(t),r.map[t.id]=t}function AA(r,t,i){const s=r.name,l=s.length;for(ph.lastIndex=0;;){const c=ph.exec(s),d=ph.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){vv(i,h===void 0?new bA(p,r,t):new EA(p,r,t));break}else{let S=i.map[p];S===void 0&&(S=new TA(p),vv(i,S)),i=S}}}class uu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=t.getActiveUniform(i,d),m=t.getUniformLocation(i,p.name);AA(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function xv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const RA=37297;let CA=0;function wA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const Sv=new xe;function DA(r){Le._getMatrix(Sv,Le.workingColorSpace,r);const t=`mat3( ${Sv.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(r)){case fu:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function yv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+wA(r.getShaderSource(t),p)}else return c}function NA(r,t){const i=DA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const UA={[Pv]:"Linear",[Fv]:"Reinhard",[Bv]:"Cineon",[mp]:"ACESFilmic",[Iv]:"AgX",[Hv]:"Neutral",[zv]:"Custom"};function LA(r,t){const i=UA[t];return i===void 0?(le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const au=new rt;function OA(){Le.getLuminanceCoefficients(au);const r=au.x.toFixed(4),t=au.y.toFixed(4),i=au.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function FA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function BA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),d=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:r.getAttribLocation(t,d),locationSize:p}}return i}function rl(r){return r!==""}function Mv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zA=/^[ \t]*#include +<([\w\d./]+)>/gm;function fp(r){return r.replace(zA,HA)}const IA=new Map;function HA(r,t){let i=Se[t];if(i===void 0){const s=IA.get(t);if(s!==void 0)i=Se[s],le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return fp(i)}const GA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ev(r){return r.replace(GA,VA)}function VA(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Tv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const kA={[su]:"SHADOWMAP_TYPE_PCF",[sl]:"SHADOWMAP_TYPE_VSM"};function XA(r){return kA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const WA={[Gs]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE",[vu]:"ENVMAP_TYPE_CUBE_UV"};function jA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":WA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const qA={[qr]:"ENVMAP_MODE_REFRACTION"};function YA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":qA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ZA={[Ov]:"ENVMAP_BLENDING_MULTIPLY",[DM]:"ENVMAP_BLENDING_MIX",[NM]:"ENVMAP_BLENDING_ADD"};function KA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":ZA[r.combine]||"ENVMAP_BLENDING_NONE"}function QA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function JA(r,t,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=XA(i),h=jA(i),_=YA(i),S=KA(i),g=QA(i),M=PA(i),b=FA(c),R=l.createProgram();let v,x,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(rl).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(rl).join(`
`),x.length>0&&(x+=`
`)):(v=[Tv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),x=[Tv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+_:"",i.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qi?"#define TONE_MAPPING":"",i.toneMapping!==qi?Se.tonemapping_pars_fragment:"",i.toneMapping!==qi?LA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,NA("linearToOutputTexel",i.outputColorSpace),OA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(rl).join(`
`)),d=fp(d),d=Mv(d,i),d=bv(d,i),p=fp(p),p=Mv(p,i),p=bv(p,i),d=Ev(d),p=Ev(p),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",i.glslVersion===N_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===N_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=A+v+d,D=A+x+p,H=xv(l,l.VERTEX_SHADER,U),I=xv(l,l.FRAGMENT_SHADER,D);l.attachShader(R,H),l.attachShader(R,I),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function z(G){if(r.debug.checkShaderErrors){const Q=l.getProgramInfoLog(R)||"",q=l.getShaderInfoLog(H)||"",at=l.getShaderInfoLog(I)||"",tt=Q.trim(),N=q.trim(),B=at.trim();let X=!0,nt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,H,I);else{const vt=yv(l,H,"vertex"),F=yv(l,I,"fragment");Ue("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+tt+`
`+vt+`
`+F)}else tt!==""?le("WebGLProgram: Program Info Log:",tt):(N===""||B==="")&&(nt=!1);nt&&(G.diagnostics={runnable:X,programLog:tt,vertexShader:{log:N,prefix:v},fragmentShader:{log:B,prefix:x}})}l.deleteShader(H),l.deleteShader(I),E=new uu(l,R),O=BA(l,R)}let E;this.getUniforms=function(){return E===void 0&&z(this),E};let O;this.getAttributes=function(){return O===void 0&&z(this),O};let mt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return mt===!1&&(mt=l.getProgramParameter(R,RA)),mt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=CA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=H,this.fragmentShader=I,this}let $A=0;class tR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new eR(t),i.set(t,s)),s}}class eR{constructor(t){this.id=$A++,this.code=t,this.usedTimes=0}}function nR(r,t,i,s,l,c){const d=new Qv,p=new tR,m=new Set,h=[],_=new Map,S=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return m.add(E),E===0?"uv":`uv${E}`}function R(E,O,mt,G,Q){const q=G.fog,at=Q.geometry,tt=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,N=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,B=t.get(E.envMap||tt,N),X=B&&B.mapping===vu?B.image.height:null,nt=M[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&le("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const vt=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,F=vt!==void 0?vt.length:0;let k=0;at.morphAttributes.position!==void 0&&(k=1),at.morphAttributes.normal!==void 0&&(k=2),at.morphAttributes.color!==void 0&&(k=3);let et,pt,bt,Z;if(nt){const Ne=Vi[nt];et=Ne.vertexShader,pt=Ne.fragmentShader}else et=E.vertexShader,pt=E.fragmentShader,p.update(E),bt=p.getVertexShaderID(E),Z=p.getFragmentShaderID(E);const V=r.getRenderTarget(),ut=r.state.buffers.depth.getReversed(),Mt=Q.isInstancedMesh===!0,Ot=Q.isBatchedMesh===!0,wt=!!E.map,ne=!!E.matcap,Ft=!!B,ae=!!E.aoMap,re=!!E.lightMap,qt=!!E.bumpMap,pe=!!E.normalMap,j=!!E.displacementMap,Te=!!E.emissiveMap,me=!!E.metalnessMap,Ae=!!E.roughnessMap,kt=E.anisotropy>0,P=E.clearcoat>0,T=E.dispersion>0,$=E.iridescence>0,St=E.sheen>0,At=E.transmission>0,ht=kt&&!!E.anisotropyMap,Wt=P&&!!E.clearcoatMap,Ut=P&&!!E.clearcoatNormalMap,Jt=P&&!!E.clearcoatRoughnessMap,$t=$&&!!E.iridescenceMap,Ct=$&&!!E.iridescenceThicknessMap,Rt=St&&!!E.sheenColorMap,Ht=St&&!!E.sheenRoughnessMap,It=!!E.specularMap,Gt=!!E.specularColorMap,ge=!!E.specularIntensityMap,J=At&&!!E.transmissionMap,Lt=At&&!!E.thicknessMap,Nt=!!E.gradientMap,Vt=!!E.alphaMap,Dt=E.alphaTest>0,xt=!!E.alphaHash,jt=!!E.extensions;let ce=qi;E.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ce=r.toneMapping);const Ie={shaderID:nt,shaderType:E.type,shaderName:E.name,vertexShader:et,fragmentShader:pt,defines:E.defines,customVertexShaderID:bt,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Ot,batchingColor:Ot&&Q._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&Q.instanceColor!==null,instancingMorph:Mt&&Q.morphTexture!==null,outputColorSpace:V===null?r.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Zr,alphaToCoverage:!!E.alphaToCoverage,map:wt,matcap:ne,envMap:Ft,envMapMode:Ft&&B.mapping,envMapCubeUVHeight:X,aoMap:ae,lightMap:re,bumpMap:qt,normalMap:pe,displacementMap:j,emissiveMap:Te,normalMapObjectSpace:pe&&E.normalMapType===PM,normalMapTangentSpace:pe&&E.normalMapType===OM,metalnessMap:me,roughnessMap:Ae,anisotropy:kt,anisotropyMap:ht,clearcoat:P,clearcoatMap:Wt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Jt,dispersion:T,iridescence:$,iridescenceMap:$t,iridescenceThicknessMap:Ct,sheen:St,sheenColorMap:Rt,sheenRoughnessMap:Ht,specularMap:It,specularColorMap:Gt,specularIntensityMap:ge,transmission:At,transmissionMap:J,thicknessMap:Lt,gradientMap:Nt,opaque:E.transparent===!1&&E.blending===Xr&&E.alphaToCoverage===!1,alphaMap:Vt,alphaTest:Dt,alphaHash:xt,combine:E.combine,mapUv:wt&&b(E.map.channel),aoMapUv:ae&&b(E.aoMap.channel),lightMapUv:re&&b(E.lightMap.channel),bumpMapUv:qt&&b(E.bumpMap.channel),normalMapUv:pe&&b(E.normalMap.channel),displacementMapUv:j&&b(E.displacementMap.channel),emissiveMapUv:Te&&b(E.emissiveMap.channel),metalnessMapUv:me&&b(E.metalnessMap.channel),roughnessMapUv:Ae&&b(E.roughnessMap.channel),anisotropyMapUv:ht&&b(E.anisotropyMap.channel),clearcoatMapUv:Wt&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:$t&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&b(E.sheenRoughnessMap.channel),specularMapUv:It&&b(E.specularMap.channel),specularColorMapUv:Gt&&b(E.specularColorMap.channel),specularIntensityMapUv:ge&&b(E.specularIntensityMap.channel),transmissionMapUv:J&&b(E.transmissionMap.channel),thicknessMapUv:Lt&&b(E.thicknessMap.channel),alphaMapUv:Vt&&b(E.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(pe||kt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!at.attributes.uv&&(wt||Vt),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||at.attributes.normal===void 0&&pe===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:ut,skinning:Q.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:k,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&mt.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:wt&&E.map.isVideoTexture===!0&&Le.getTransfer(E.map.colorSpace)===Ve,decodeVideoTextureEmissive:Te&&E.emissiveMap.isVideoTexture===!0&&Le.getTransfer(E.emissiveMap.colorSpace)===Ve,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ki,flipSided:E.side===Kn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:jt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&E.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ie.vertexUv1s=m.has(1),Ie.vertexUv2s=m.has(2),Ie.vertexUv3s=m.has(3),m.clear(),Ie}function v(E){const O=[];if(E.shaderID?O.push(E.shaderID):(O.push(E.customVertexShaderID),O.push(E.customFragmentShaderID)),E.defines!==void 0)for(const mt in E.defines)O.push(mt),O.push(E.defines[mt]);return E.isRawShaderMaterial===!1&&(x(O,E),A(O,E),O.push(r.outputColorSpace)),O.push(E.customProgramCacheKey),O.join()}function x(E,O){E.push(O.precision),E.push(O.outputColorSpace),E.push(O.envMapMode),E.push(O.envMapCubeUVHeight),E.push(O.mapUv),E.push(O.alphaMapUv),E.push(O.lightMapUv),E.push(O.aoMapUv),E.push(O.bumpMapUv),E.push(O.normalMapUv),E.push(O.displacementMapUv),E.push(O.emissiveMapUv),E.push(O.metalnessMapUv),E.push(O.roughnessMapUv),E.push(O.anisotropyMapUv),E.push(O.clearcoatMapUv),E.push(O.clearcoatNormalMapUv),E.push(O.clearcoatRoughnessMapUv),E.push(O.iridescenceMapUv),E.push(O.iridescenceThicknessMapUv),E.push(O.sheenColorMapUv),E.push(O.sheenRoughnessMapUv),E.push(O.specularMapUv),E.push(O.specularColorMapUv),E.push(O.specularIntensityMapUv),E.push(O.transmissionMapUv),E.push(O.thicknessMapUv),E.push(O.combine),E.push(O.fogExp2),E.push(O.sizeAttenuation),E.push(O.morphTargetsCount),E.push(O.morphAttributeCount),E.push(O.numDirLights),E.push(O.numPointLights),E.push(O.numSpotLights),E.push(O.numSpotLightMaps),E.push(O.numHemiLights),E.push(O.numRectAreaLights),E.push(O.numDirLightShadows),E.push(O.numPointLightShadows),E.push(O.numSpotLightShadows),E.push(O.numSpotLightShadowsWithMaps),E.push(O.numLightProbes),E.push(O.shadowMapType),E.push(O.toneMapping),E.push(O.numClippingPlanes),E.push(O.numClipIntersection),E.push(O.depthPacking)}function A(E,O){d.disableAll(),O.instancing&&d.enable(0),O.instancingColor&&d.enable(1),O.instancingMorph&&d.enable(2),O.matcap&&d.enable(3),O.envMap&&d.enable(4),O.normalMapObjectSpace&&d.enable(5),O.normalMapTangentSpace&&d.enable(6),O.clearcoat&&d.enable(7),O.iridescence&&d.enable(8),O.alphaTest&&d.enable(9),O.vertexColors&&d.enable(10),O.vertexAlphas&&d.enable(11),O.vertexUv1s&&d.enable(12),O.vertexUv2s&&d.enable(13),O.vertexUv3s&&d.enable(14),O.vertexTangents&&d.enable(15),O.anisotropy&&d.enable(16),O.alphaHash&&d.enable(17),O.batching&&d.enable(18),O.dispersion&&d.enable(19),O.batchingColor&&d.enable(20),O.gradientMap&&d.enable(21),E.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.reversedDepthBuffer&&d.enable(4),O.skinning&&d.enable(5),O.morphTargets&&d.enable(6),O.morphNormals&&d.enable(7),O.morphColors&&d.enable(8),O.premultipliedAlpha&&d.enable(9),O.shadowMapEnabled&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.decodeVideoTextureEmissive&&d.enable(20),O.alphaToCoverage&&d.enable(21),E.push(d.mask)}function U(E){const O=M[E.type];let mt;if(O){const G=Vi[O];mt=Mb.clone(G.uniforms)}else mt=E.uniforms;return mt}function D(E,O){let mt=_.get(O);return mt!==void 0?++mt.usedTimes:(mt=new JA(r,O,E,l),h.push(mt),_.set(O,mt)),mt}function H(E){if(--E.usedTimes===0){const O=h.indexOf(E);h[O]=h[h.length-1],h.pop(),_.delete(E.cacheKey),E.destroy()}}function I(E){p.remove(E)}function z(){p.dispose()}return{getParameters:R,getProgramCacheKey:v,getUniforms:U,acquireProgram:D,releaseProgram:H,releaseShaderCache:I,programs:h,dispose:z}}function iR(){let r=new WeakMap;function t(d){return r.has(d)}function i(d){let p=r.get(d);return p===void 0&&(p={},r.set(d,p)),p}function s(d){r.delete(d)}function l(d,p,m){r.get(d)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function aR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Av(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Rv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,b,R,v,x){let A=r[t];return A===void 0?(A={id:g.id,object:g,geometry:M,material:b,materialVariant:d(g),groupOrder:R,renderOrder:g.renderOrder,z:v,group:x},r[t]=A):(A.id=g.id,A.object=g,A.geometry=M,A.material=b,A.materialVariant=d(g),A.groupOrder=R,A.renderOrder=g.renderOrder,A.z=v,A.group=x),t++,A}function m(g,M,b,R,v,x){const A=p(g,M,b,R,v,x);b.transmission>0?s.push(A):b.transparent===!0?l.push(A):i.push(A)}function h(g,M,b,R,v,x){const A=p(g,M,b,R,v,x);b.transmission>0?s.unshift(A):b.transparent===!0?l.unshift(A):i.unshift(A)}function _(g,M){i.length>1&&i.sort(g||aR),s.length>1&&s.sort(M||Av),l.length>1&&l.sort(M||Av)}function S(){for(let g=t,M=r.length;g<M;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:S,sort:_}}function sR(){let r=new WeakMap;function t(s,l){const c=r.get(s);let d;return c===void 0?(d=new Rv,r.set(s,[d])):l>=c.length?(d=new Rv,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:t,dispose:i}}function rR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new rt,color:new ye};break;case"SpotLight":i={position:new rt,direction:new rt,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return r[t.id]=i,i}}}function oR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let lR=0;function cR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function uR(r){const t=new rR,i=oR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new rt);const l=new rt,c=new Ke,d=new Ke;function p(h){let _=0,S=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let M=0,b=0,R=0,v=0,x=0,A=0,U=0,D=0,H=0,I=0,z=0;h.sort(cR);for(let O=0,mt=h.length;O<mt;O++){const G=h[O],Q=G.color,q=G.intensity,at=G.distance;let tt=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Yr?tt=G.shadow.map.texture:tt=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=Q.r*q,S+=Q.g*q,g+=Q.b*q;else if(G.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(G.sh.coefficients[N],q);z++}else if(G.isDirectionalLight){const N=t.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const B=G.shadow,X=i.get(G);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,s.directionalShadow[M]=X,s.directionalShadowMap[M]=tt,s.directionalShadowMatrix[M]=G.shadow.matrix,A++}s.directional[M]=N,M++}else if(G.isSpotLight){const N=t.get(G);N.position.setFromMatrixPosition(G.matrixWorld),N.color.copy(Q).multiplyScalar(q),N.distance=at,N.coneCos=Math.cos(G.angle),N.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),N.decay=G.decay,s.spot[R]=N;const B=G.shadow;if(G.map&&(s.spotLightMap[H]=G.map,H++,B.updateMatrices(G),G.castShadow&&I++),s.spotLightMatrix[R]=B.matrix,G.castShadow){const X=i.get(G);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,s.spotShadow[R]=X,s.spotShadowMap[R]=tt,D++}R++}else if(G.isRectAreaLight){const N=t.get(G);N.color.copy(Q).multiplyScalar(q),N.halfWidth.set(G.width*.5,0,0),N.halfHeight.set(0,G.height*.5,0),s.rectArea[v]=N,v++}else if(G.isPointLight){const N=t.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),N.distance=G.distance,N.decay=G.decay,G.castShadow){const B=G.shadow,X=i.get(G);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,X.shadowCameraNear=B.camera.near,X.shadowCameraFar=B.camera.far,s.pointShadow[b]=X,s.pointShadowMap[b]=tt,s.pointShadowMatrix[b]=G.shadow.matrix,U++}s.point[b]=N,b++}else if(G.isHemisphereLight){const N=t.get(G);N.skyColor.copy(G.color).multiplyScalar(q),N.groundColor.copy(G.groundColor).multiplyScalar(q),s.hemi[x]=N,x++}}v>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=zt.LTC_FLOAT_1,s.rectAreaLTC2=zt.LTC_FLOAT_2):(s.rectAreaLTC1=zt.LTC_HALF_1,s.rectAreaLTC2=zt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=S,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==M||E.pointLength!==b||E.spotLength!==R||E.rectAreaLength!==v||E.hemiLength!==x||E.numDirectionalShadows!==A||E.numPointShadows!==U||E.numSpotShadows!==D||E.numSpotMaps!==H||E.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=v,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=D+H-I,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=z,E.directionalLength=M,E.pointLength=b,E.spotLength=R,E.rectAreaLength=v,E.hemiLength=x,E.numDirectionalShadows=A,E.numPointShadows=U,E.numSpotShadows=D,E.numSpotMaps=H,E.numLightProbes=z,s.version=lR++)}function m(h,_){let S=0,g=0,M=0,b=0,R=0;const v=_.matrixWorldInverse;for(let x=0,A=h.length;x<A;x++){const U=h[x];if(U.isDirectionalLight){const D=s.directional[S];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(v),S++}else if(U.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(v),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(v),M++}else if(U.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(v),d.identity(),c.copy(U.matrixWorld),c.premultiply(v),d.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),b++}else if(U.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(v),g++}else if(U.isHemisphereLight){const D=s.hemi[R];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(v),R++}}}return{setup:p,setupView:m,state:s}}function Cv(r){const t=new uR(r),i=[],s=[];function l(_){h.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function d(_){s.push(_)}function p(){t.setup(i)}function m(_){t.setupView(i,_)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function fR(r){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let p;return d===void 0?(p=new Cv(r),t.set(l,[p])):c>=d.length?(p=new Cv(r),d.push(p)):p=d[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const dR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,pR=[new rt(1,0,0),new rt(-1,0,0),new rt(0,1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1)],mR=[new rt(0,-1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1),new rt(0,-1,0),new rt(0,-1,0)],wv=new Ke,nl=new rt,mh=new rt;function gR(r,t,i){let s=new Cp;const l=new Ee,c=new Ee,d=new nn,p=new Ab,m=new Rb,h={},_=i.maxTextureSize,S={[cs]:Kn,[Kn]:cs,[ki]:ki},g=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:dR,fragmentShader:hR}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new Fn;b.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ki(b,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=su;let x=this.type;this.render=function(I,z,E){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||I.length===0)return;this.type===fM&&(le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=su);const O=r.getRenderTarget(),mt=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(ba),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const q=x!==this.type;q&&z.traverse(function(at){at.material&&(Array.isArray(at.material)?at.material.forEach(tt=>tt.needsUpdate=!0):at.material.needsUpdate=!0)});for(let at=0,tt=I.length;at<tt;at++){const N=I[at],B=N.shadow;if(B===void 0){le("WebGLShadowMap:",N,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const X=B.getFrameExtents();l.multiply(X),c.copy(B.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/X.x),l.x=c.x*X.x,B.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/X.y),l.y=c.y*X.y,B.mapSize.y=c.y));const nt=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=nt,B.map===null||q===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===sl){if(N.isPointLight){le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Yi(l.x,l.y,{format:Yr,type:Ta,minFilter:On,magFilter:On,generateMipmaps:!1}),B.map.texture.name=N.name+".shadowMap",B.map.depthTexture=new fl(l.x,l.y,Wi),B.map.depthTexture.name=N.name+".shadowMapDepth",B.map.depthTexture.format=Aa,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Rn,B.map.depthTexture.magFilter=Rn}else N.isPointLight?(B.map=new fx(l.x),B.map.depthTexture=new Sb(l.x,Zi)):(B.map=new Yi(l.x,l.y),B.map.depthTexture=new fl(l.x,l.y,Zi)),B.map.depthTexture.name=N.name+".shadowMap",B.map.depthTexture.format=Aa,this.type===su?(B.map.depthTexture.compareFunction=nt?bp:Mp,B.map.depthTexture.minFilter=On,B.map.depthTexture.magFilter=On):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Rn,B.map.depthTexture.magFilter=Rn);B.camera.updateProjectionMatrix()}const vt=B.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<vt;F++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,F),r.clear();else{F===0&&(r.setRenderTarget(B.map),r.clear());const k=B.getViewport(F);d.set(c.x*k.x,c.y*k.y,c.x*k.z,c.y*k.w),Q.viewport(d)}if(N.isPointLight){const k=B.camera,et=B.matrix,pt=N.distance||k.far;pt!==k.far&&(k.far=pt,k.updateProjectionMatrix()),nl.setFromMatrixPosition(N.matrixWorld),k.position.copy(nl),mh.copy(k.position),mh.add(pR[F]),k.up.copy(mR[F]),k.lookAt(mh),k.updateMatrixWorld(),et.makeTranslation(-nl.x,-nl.y,-nl.z),wv.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),B._frustum.setFromProjectionMatrix(wv,k.coordinateSystem,k.reversedDepth)}else B.updateMatrices(N);s=B.getFrustum(),D(z,E,B.camera,N,this.type)}B.isPointLightShadow!==!0&&this.type===sl&&A(B,E),B.needsUpdate=!1}x=this.type,v.needsUpdate=!1,r.setRenderTarget(O,mt,G)};function A(I,z){const E=t.update(R);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Yi(l.x,l.y,{format:Yr,type:Ta})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(z,null,E,g,R,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(z,null,E,M,R,null)}function U(I,z,E,O){let mt=null;const G=E.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)mt=G;else if(mt=E.isPointLight===!0?m:p,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Q=mt.uuid,q=z.uuid;let at=h[Q];at===void 0&&(at={},h[Q]=at);let tt=at[q];tt===void 0&&(tt=mt.clone(),at[q]=tt,z.addEventListener("dispose",H)),mt=tt}if(mt.visible=z.visible,mt.wireframe=z.wireframe,O===sl?mt.side=z.shadowSide!==null?z.shadowSide:z.side:mt.side=z.shadowSide!==null?z.shadowSide:S[z.side],mt.alphaMap=z.alphaMap,mt.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,mt.map=z.map,mt.clipShadows=z.clipShadows,mt.clippingPlanes=z.clippingPlanes,mt.clipIntersection=z.clipIntersection,mt.displacementMap=z.displacementMap,mt.displacementScale=z.displacementScale,mt.displacementBias=z.displacementBias,mt.wireframeLinewidth=z.wireframeLinewidth,mt.linewidth=z.linewidth,E.isPointLight===!0&&mt.isMeshDistanceMaterial===!0){const Q=r.properties.get(mt);Q.light=E}return mt}function D(I,z,E,O,mt){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&mt===sl)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,I.matrixWorld);const q=t.update(I),at=I.material;if(Array.isArray(at)){const tt=q.groups;for(let N=0,B=tt.length;N<B;N++){const X=tt[N],nt=at[X.materialIndex];if(nt&&nt.visible){const vt=U(I,nt,O,mt);I.onBeforeShadow(r,I,z,E,q,vt,X),r.renderBufferDirect(E,null,q,vt,I,X),I.onAfterShadow(r,I,z,E,q,vt,X)}}}else if(at.visible){const tt=U(I,at,O,mt);I.onBeforeShadow(r,I,z,E,q,tt,null),r.renderBufferDirect(E,null,q,tt,I,null),I.onAfterShadow(r,I,z,E,q,tt,null)}}const Q=I.children;for(let q=0,at=Q.length;q<at;q++)D(Q[q],z,E,O,mt)}function H(I){I.target.removeEventListener("dispose",H);for(const E in h){const O=h[E],mt=I.target.uuid;mt in O&&(O[mt].dispose(),delete O[mt])}}}function _R(r,t){function i(){let J=!1;const Lt=new nn;let Nt=null;const Vt=new nn(0,0,0,0);return{setMask:function(Dt){Nt!==Dt&&!J&&(r.colorMask(Dt,Dt,Dt,Dt),Nt=Dt)},setLocked:function(Dt){J=Dt},setClear:function(Dt,xt,jt,ce,Ie){Ie===!0&&(Dt*=ce,xt*=ce,jt*=ce),Lt.set(Dt,xt,jt,ce),Vt.equals(Lt)===!1&&(r.clearColor(Dt,xt,jt,ce),Vt.copy(Lt))},reset:function(){J=!1,Nt=null,Vt.set(-1,0,0,0)}}}function s(){let J=!1,Lt=!1,Nt=null,Vt=null,Dt=null;return{setReversed:function(xt){if(Lt!==xt){const jt=t.get("EXT_clip_control");xt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT),Lt=xt;const ce=Dt;Dt=null,this.setClear(ce)}},getReversed:function(){return Lt},setTest:function(xt){xt?V(r.DEPTH_TEST):ut(r.DEPTH_TEST)},setMask:function(xt){Nt!==xt&&!J&&(r.depthMask(xt),Nt=xt)},setFunc:function(xt){if(Lt&&(xt=WM[xt]),Vt!==xt){switch(xt){case xh:r.depthFunc(r.NEVER);break;case Sh:r.depthFunc(r.ALWAYS);break;case yh:r.depthFunc(r.LESS);break;case jr:r.depthFunc(r.LEQUAL);break;case Mh:r.depthFunc(r.EQUAL);break;case bh:r.depthFunc(r.GEQUAL);break;case Eh:r.depthFunc(r.GREATER);break;case Th:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Vt=xt}},setLocked:function(xt){J=xt},setClear:function(xt){Dt!==xt&&(Dt=xt,Lt&&(xt=1-xt),r.clearDepth(xt))},reset:function(){J=!1,Nt=null,Vt=null,Dt=null,Lt=!1}}}function l(){let J=!1,Lt=null,Nt=null,Vt=null,Dt=null,xt=null,jt=null,ce=null,Ie=null;return{setTest:function(Ne){J||(Ne?V(r.STENCIL_TEST):ut(r.STENCIL_TEST))},setMask:function(Ne){Lt!==Ne&&!J&&(r.stencilMask(Ne),Lt=Ne)},setFunc:function(Ne,Bn,Mi){(Nt!==Ne||Vt!==Bn||Dt!==Mi)&&(r.stencilFunc(Ne,Bn,Mi),Nt=Ne,Vt=Bn,Dt=Mi)},setOp:function(Ne,Bn,Mi){(xt!==Ne||jt!==Bn||ce!==Mi)&&(r.stencilOp(Ne,Bn,Mi),xt=Ne,jt=Bn,ce=Mi)},setLocked:function(Ne){J=Ne},setClear:function(Ne){Ie!==Ne&&(r.clearStencil(Ne),Ie=Ne)},reset:function(){J=!1,Lt=null,Nt=null,Vt=null,Dt=null,xt=null,jt=null,ce=null,Ie=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let _={},S={},g=new WeakMap,M=[],b=null,R=!1,v=null,x=null,A=null,U=null,D=null,H=null,I=null,z=new ye(0,0,0),E=0,O=!1,mt=null,G=null,Q=null,q=null,at=null;const tt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,B=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(X)[1]),N=B>=1):X.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),N=B>=2);let nt=null,vt={};const F=r.getParameter(r.SCISSOR_BOX),k=r.getParameter(r.VIEWPORT),et=new nn().fromArray(F),pt=new nn().fromArray(k);function bt(J,Lt,Nt,Vt){const Dt=new Uint8Array(4),xt=r.createTexture();r.bindTexture(J,xt),r.texParameteri(J,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(J,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let jt=0;jt<Nt;jt++)J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?r.texImage3D(Lt,0,r.RGBA,1,1,Vt,0,r.RGBA,r.UNSIGNED_BYTE,Dt):r.texImage2D(Lt+jt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Dt);return xt}const Z={};Z[r.TEXTURE_2D]=bt(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=bt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=bt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=bt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),V(r.DEPTH_TEST),d.setFunc(jr),qt(!1),pe(A_),V(r.CULL_FACE),ae(ba);function V(J){_[J]!==!0&&(r.enable(J),_[J]=!0)}function ut(J){_[J]!==!1&&(r.disable(J),_[J]=!1)}function Mt(J,Lt){return S[J]!==Lt?(r.bindFramebuffer(J,Lt),S[J]=Lt,J===r.DRAW_FRAMEBUFFER&&(S[r.FRAMEBUFFER]=Lt),J===r.FRAMEBUFFER&&(S[r.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Ot(J,Lt){let Nt=M,Vt=!1;if(J){Nt=g.get(Lt),Nt===void 0&&(Nt=[],g.set(Lt,Nt));const Dt=J.textures;if(Nt.length!==Dt.length||Nt[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,jt=Dt.length;xt<jt;xt++)Nt[xt]=r.COLOR_ATTACHMENT0+xt;Nt.length=Dt.length,Vt=!0}}else Nt[0]!==r.BACK&&(Nt[0]=r.BACK,Vt=!0);Vt&&r.drawBuffers(Nt)}function wt(J){return b!==J?(r.useProgram(J),b=J,!0):!1}const ne={[Bs]:r.FUNC_ADD,[hM]:r.FUNC_SUBTRACT,[pM]:r.FUNC_REVERSE_SUBTRACT};ne[mM]=r.MIN,ne[gM]=r.MAX;const Ft={[_M]:r.ZERO,[vM]:r.ONE,[xM]:r.SRC_COLOR,[_h]:r.SRC_ALPHA,[TM]:r.SRC_ALPHA_SATURATE,[bM]:r.DST_COLOR,[yM]:r.DST_ALPHA,[SM]:r.ONE_MINUS_SRC_COLOR,[vh]:r.ONE_MINUS_SRC_ALPHA,[EM]:r.ONE_MINUS_DST_COLOR,[MM]:r.ONE_MINUS_DST_ALPHA,[AM]:r.CONSTANT_COLOR,[RM]:r.ONE_MINUS_CONSTANT_COLOR,[CM]:r.CONSTANT_ALPHA,[wM]:r.ONE_MINUS_CONSTANT_ALPHA};function ae(J,Lt,Nt,Vt,Dt,xt,jt,ce,Ie,Ne){if(J===ba){R===!0&&(ut(r.BLEND),R=!1);return}if(R===!1&&(V(r.BLEND),R=!0),J!==dM){if(J!==v||Ne!==O){if((x!==Bs||D!==Bs)&&(r.blendEquation(r.FUNC_ADD),x=Bs,D=Bs),Ne)switch(J){case Xr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case R_:r.blendFunc(r.ONE,r.ONE);break;case C_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case w_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ue("WebGLState: Invalid blending: ",J);break}else switch(J){case Xr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case R_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case C_:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case w_:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",J);break}A=null,U=null,H=null,I=null,z.set(0,0,0),E=0,v=J,O=Ne}return}Dt=Dt||Lt,xt=xt||Nt,jt=jt||Vt,(Lt!==x||Dt!==D)&&(r.blendEquationSeparate(ne[Lt],ne[Dt]),x=Lt,D=Dt),(Nt!==A||Vt!==U||xt!==H||jt!==I)&&(r.blendFuncSeparate(Ft[Nt],Ft[Vt],Ft[xt],Ft[jt]),A=Nt,U=Vt,H=xt,I=jt),(ce.equals(z)===!1||Ie!==E)&&(r.blendColor(ce.r,ce.g,ce.b,Ie),z.copy(ce),E=Ie),v=J,O=!1}function re(J,Lt){J.side===ki?ut(r.CULL_FACE):V(r.CULL_FACE);let Nt=J.side===Kn;Lt&&(Nt=!Nt),qt(Nt),J.blending===Xr&&J.transparent===!1?ae(ba):ae(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),d.setFunc(J.depthFunc),d.setTest(J.depthTest),d.setMask(J.depthWrite),c.setMask(J.colorWrite);const Vt=J.stencilWrite;p.setTest(Vt),Vt&&(p.setMask(J.stencilWriteMask),p.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),p.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Te(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?V(r.SAMPLE_ALPHA_TO_COVERAGE):ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function qt(J){mt!==J&&(J?r.frontFace(r.CW):r.frontFace(r.CCW),mt=J)}function pe(J){J!==cM?(V(r.CULL_FACE),J!==G&&(J===A_?r.cullFace(r.BACK):J===uM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ut(r.CULL_FACE),G=J}function j(J){J!==Q&&(N&&r.lineWidth(J),Q=J)}function Te(J,Lt,Nt){J?(V(r.POLYGON_OFFSET_FILL),(q!==Lt||at!==Nt)&&(q=Lt,at=Nt,d.getReversed()&&(Lt=-Lt),r.polygonOffset(Lt,Nt))):ut(r.POLYGON_OFFSET_FILL)}function me(J){J?V(r.SCISSOR_TEST):ut(r.SCISSOR_TEST)}function Ae(J){J===void 0&&(J=r.TEXTURE0+tt-1),nt!==J&&(r.activeTexture(J),nt=J)}function kt(J,Lt,Nt){Nt===void 0&&(nt===null?Nt=r.TEXTURE0+tt-1:Nt=nt);let Vt=vt[Nt];Vt===void 0&&(Vt={type:void 0,texture:void 0},vt[Nt]=Vt),(Vt.type!==J||Vt.texture!==Lt)&&(nt!==Nt&&(r.activeTexture(Nt),nt=Nt),r.bindTexture(J,Lt||Z[J]),Vt.type=J,Vt.texture=Lt)}function P(){const J=vt[nt];J!==void 0&&J.type!==void 0&&(r.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(J){Ue("WebGLState:",J)}}function $(){try{r.compressedTexImage3D(...arguments)}catch(J){Ue("WebGLState:",J)}}function St(){try{r.texSubImage2D(...arguments)}catch(J){Ue("WebGLState:",J)}}function At(){try{r.texSubImage3D(...arguments)}catch(J){Ue("WebGLState:",J)}}function ht(){try{r.compressedTexSubImage2D(...arguments)}catch(J){Ue("WebGLState:",J)}}function Wt(){try{r.compressedTexSubImage3D(...arguments)}catch(J){Ue("WebGLState:",J)}}function Ut(){try{r.texStorage2D(...arguments)}catch(J){Ue("WebGLState:",J)}}function Jt(){try{r.texStorage3D(...arguments)}catch(J){Ue("WebGLState:",J)}}function $t(){try{r.texImage2D(...arguments)}catch(J){Ue("WebGLState:",J)}}function Ct(){try{r.texImage3D(...arguments)}catch(J){Ue("WebGLState:",J)}}function Rt(J){et.equals(J)===!1&&(r.scissor(J.x,J.y,J.z,J.w),et.copy(J))}function Ht(J){pt.equals(J)===!1&&(r.viewport(J.x,J.y,J.z,J.w),pt.copy(J))}function It(J,Lt){let Nt=h.get(Lt);Nt===void 0&&(Nt=new WeakMap,h.set(Lt,Nt));let Vt=Nt.get(J);Vt===void 0&&(Vt=r.getUniformBlockIndex(Lt,J.name),Nt.set(J,Vt))}function Gt(J,Lt){const Vt=h.get(Lt).get(J);m.get(Lt)!==Vt&&(r.uniformBlockBinding(Lt,Vt,J.__bindingPointIndex),m.set(Lt,Vt))}function ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},nt=null,vt={},S={},g=new WeakMap,M=[],b=null,R=!1,v=null,x=null,A=null,U=null,D=null,H=null,I=null,z=new ye(0,0,0),E=0,O=!1,mt=null,G=null,Q=null,q=null,at=null,et.set(0,0,r.canvas.width,r.canvas.height),pt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:V,disable:ut,bindFramebuffer:Mt,drawBuffers:Ot,useProgram:wt,setBlending:ae,setMaterial:re,setFlipSided:qt,setCullFace:pe,setLineWidth:j,setPolygonOffset:Te,setScissorTest:me,activeTexture:Ae,bindTexture:kt,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:$,texImage2D:$t,texImage3D:Ct,updateUBOMapping:It,uniformBlockBinding:Gt,texStorage2D:Ut,texStorage3D:Jt,texSubImage2D:St,texSubImage3D:At,compressedTexSubImage2D:ht,compressedTexSubImage3D:Wt,scissor:Rt,viewport:Ht,reset:ge}}function vR(r,t,i,s,l,c,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ee,_=new WeakMap;let S;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,T){return M?new OffscreenCanvas(P,T):du("canvas")}function R(P,T,$){let St=1;const At=kt(P);if((At.width>$||At.height>$)&&(St=$/Math.max(At.width,At.height)),St<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ht=Math.floor(St*At.width),Wt=Math.floor(St*At.height);S===void 0&&(S=b(ht,Wt));const Ut=T?b(ht,Wt):S;return Ut.width=ht,Ut.height=Wt,Ut.getContext("2d").drawImage(P,0,0,ht,Wt),le("WebGLRenderer: Texture has been resized from ("+At.width+"x"+At.height+") to ("+ht+"x"+Wt+")."),Ut}else return"data"in P&&le("WebGLRenderer: Image in DataTexture is too big ("+At.width+"x"+At.height+")."),P;return P}function v(P){return P.generateMipmaps}function x(P){r.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(P,T,$,St,At=!1){if(P!==null){if(r[P]!==void 0)return r[P];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ht=T;if(T===r.RED&&($===r.FLOAT&&(ht=r.R32F),$===r.HALF_FLOAT&&(ht=r.R16F),$===r.UNSIGNED_BYTE&&(ht=r.R8)),T===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(ht=r.R8UI),$===r.UNSIGNED_SHORT&&(ht=r.R16UI),$===r.UNSIGNED_INT&&(ht=r.R32UI),$===r.BYTE&&(ht=r.R8I),$===r.SHORT&&(ht=r.R16I),$===r.INT&&(ht=r.R32I)),T===r.RG&&($===r.FLOAT&&(ht=r.RG32F),$===r.HALF_FLOAT&&(ht=r.RG16F),$===r.UNSIGNED_BYTE&&(ht=r.RG8)),T===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(ht=r.RG8UI),$===r.UNSIGNED_SHORT&&(ht=r.RG16UI),$===r.UNSIGNED_INT&&(ht=r.RG32UI),$===r.BYTE&&(ht=r.RG8I),$===r.SHORT&&(ht=r.RG16I),$===r.INT&&(ht=r.RG32I)),T===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(ht=r.RGB8UI),$===r.UNSIGNED_SHORT&&(ht=r.RGB16UI),$===r.UNSIGNED_INT&&(ht=r.RGB32UI),$===r.BYTE&&(ht=r.RGB8I),$===r.SHORT&&(ht=r.RGB16I),$===r.INT&&(ht=r.RGB32I)),T===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(ht=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(ht=r.RGBA16UI),$===r.UNSIGNED_INT&&(ht=r.RGBA32UI),$===r.BYTE&&(ht=r.RGBA8I),$===r.SHORT&&(ht=r.RGBA16I),$===r.INT&&(ht=r.RGBA32I)),T===r.RGB&&($===r.UNSIGNED_INT_5_9_9_9_REV&&(ht=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(ht=r.R11F_G11F_B10F)),T===r.RGBA){const Wt=At?fu:Le.getTransfer(St);$===r.FLOAT&&(ht=r.RGBA32F),$===r.HALF_FLOAT&&(ht=r.RGBA16F),$===r.UNSIGNED_BYTE&&(ht=Wt===Ve?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(ht=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(ht=r.RGB5_A1)}return(ht===r.R16F||ht===r.R32F||ht===r.RG16F||ht===r.RG32F||ht===r.RGBA16F||ht===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function D(P,T){let $;return P?T===null||T===Zi||T===cl?$=r.DEPTH24_STENCIL8:T===Wi?$=r.DEPTH32F_STENCIL8:T===ll&&($=r.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Zi||T===cl?$=r.DEPTH_COMPONENT24:T===Wi?$=r.DEPTH_COMPONENT32F:T===ll&&($=r.DEPTH_COMPONENT16),$}function H(P,T){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==Rn&&P.minFilter!==On?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function I(P){const T=P.target;T.removeEventListener("dispose",I),E(T),T.isVideoTexture&&_.delete(T)}function z(P){const T=P.target;T.removeEventListener("dispose",z),mt(T)}function E(P){const T=s.get(P);if(T.__webglInit===void 0)return;const $=P.source,St=g.get($);if(St){const At=St[T.__cacheKey];At.usedTimes--,At.usedTimes===0&&O(P),Object.keys(St).length===0&&g.delete($)}s.remove(P)}function O(P){const T=s.get(P);r.deleteTexture(T.__webglTexture);const $=P.source,St=g.get($);delete St[T.__cacheKey],d.memory.textures--}function mt(P){const T=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let St=0;St<6;St++){if(Array.isArray(T.__webglFramebuffer[St]))for(let At=0;At<T.__webglFramebuffer[St].length;At++)r.deleteFramebuffer(T.__webglFramebuffer[St][At]);else r.deleteFramebuffer(T.__webglFramebuffer[St]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[St])}else{if(Array.isArray(T.__webglFramebuffer))for(let St=0;St<T.__webglFramebuffer.length;St++)r.deleteFramebuffer(T.__webglFramebuffer[St]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let St=0;St<T.__webglColorRenderbuffer.length;St++)T.__webglColorRenderbuffer[St]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[St]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=P.textures;for(let St=0,At=$.length;St<At;St++){const ht=s.get($[St]);ht.__webglTexture&&(r.deleteTexture(ht.__webglTexture),d.memory.textures--),s.remove($[St])}s.remove(P)}let G=0;function Q(){G=0}function q(){const P=G;return P>=l.maxTextures&&le("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),G+=1,P}function at(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function tt(P,T){const $=s.get(P);if(P.isVideoTexture&&me(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&$.__version!==P.version){const St=P.image;if(St===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(St.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{Z($,P,T);return}}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+T)}function N(P,T){const $=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){Z($,P,T);return}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+T)}function B(P,T){const $=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){Z($,P,T);return}i.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+T)}function X(P,T){const $=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&$.__version!==P.version){V($,P,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+T)}const nt={[Ah]:r.REPEAT,[Ma]:r.CLAMP_TO_EDGE,[Rh]:r.MIRRORED_REPEAT},vt={[Rn]:r.NEAREST,[UM]:r.NEAREST_MIPMAP_NEAREST,[wc]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[Fd]:r.LINEAR_MIPMAP_NEAREST,[Is]:r.LINEAR_MIPMAP_LINEAR},F={[FM]:r.NEVER,[GM]:r.ALWAYS,[BM]:r.LESS,[Mp]:r.LEQUAL,[zM]:r.EQUAL,[bp]:r.GEQUAL,[IM]:r.GREATER,[HM]:r.NOTEQUAL};function k(P,T){if(T.type===Wi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===On||T.magFilter===Fd||T.magFilter===wc||T.magFilter===Is||T.minFilter===On||T.minFilter===Fd||T.minFilter===wc||T.minFilter===Is)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,nt[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,nt[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,nt[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,vt[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,vt[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Rn||T.minFilter!==wc&&T.minFilter!==Is||T.type===Wi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function et(P,T){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",I));const St=T.source;let At=g.get(St);At===void 0&&(At={},g.set(St,At));const ht=at(T);if(ht!==P.__cacheKey){At[ht]===void 0&&(At[ht]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,$=!0),At[ht].usedTimes++;const Wt=At[P.__cacheKey];Wt!==void 0&&(At[P.__cacheKey].usedTimes--,Wt.usedTimes===0&&O(T)),P.__cacheKey=ht,P.__webglTexture=At[ht].texture}return $}function pt(P,T,$){return Math.floor(Math.floor(P/$)/T)}function bt(P,T,$,St){const ht=P.updateRanges;if(ht.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,$,St,T.data);else{ht.sort((Ct,Rt)=>Ct.start-Rt.start);let Wt=0;for(let Ct=1;Ct<ht.length;Ct++){const Rt=ht[Wt],Ht=ht[Ct],It=Rt.start+Rt.count,Gt=pt(Ht.start,T.width,4),ge=pt(Rt.start,T.width,4);Ht.start<=It+1&&Gt===ge&&pt(Ht.start+Ht.count-1,T.width,4)===Gt?Rt.count=Math.max(Rt.count,Ht.start+Ht.count-Rt.start):(++Wt,ht[Wt]=Ht)}ht.length=Wt+1;const Ut=r.getParameter(r.UNPACK_ROW_LENGTH),Jt=r.getParameter(r.UNPACK_SKIP_PIXELS),$t=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Ct=0,Rt=ht.length;Ct<Rt;Ct++){const Ht=ht[Ct],It=Math.floor(Ht.start/4),Gt=Math.ceil(Ht.count/4),ge=It%T.width,J=Math.floor(It/T.width),Lt=Gt,Nt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),r.pixelStorei(r.UNPACK_SKIP_ROWS,J),i.texSubImage2D(r.TEXTURE_2D,0,ge,J,Lt,Nt,$,St,T.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ut),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Jt),r.pixelStorei(r.UNPACK_SKIP_ROWS,$t)}}function Z(P,T,$){let St=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(St=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(St=r.TEXTURE_3D);const At=et(P,T),ht=T.source;i.bindTexture(St,P.__webglTexture,r.TEXTURE0+$);const Wt=s.get(ht);if(ht.version!==Wt.__version||At===!0){i.activeTexture(r.TEXTURE0+$);const Ut=Le.getPrimaries(Le.workingColorSpace),Jt=T.colorSpace===rs?null:Le.getPrimaries(T.colorSpace),$t=T.colorSpace===rs||Ut===Jt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let Ct=R(T.image,!1,l.maxTextureSize);Ct=Ae(T,Ct);const Rt=c.convert(T.format,T.colorSpace),Ht=c.convert(T.type);let It=U(T.internalFormat,Rt,Ht,T.colorSpace,T.isVideoTexture);k(St,T);let Gt;const ge=T.mipmaps,J=T.isVideoTexture!==!0,Lt=Wt.__version===void 0||At===!0,Nt=ht.dataReady,Vt=H(T,Ct);if(T.isDepthTexture)It=D(T.format===Hs,T.type),Lt&&(J?i.texStorage2D(r.TEXTURE_2D,1,It,Ct.width,Ct.height):i.texImage2D(r.TEXTURE_2D,0,It,Ct.width,Ct.height,0,Rt,Ht,null));else if(T.isDataTexture)if(ge.length>0){J&&Lt&&i.texStorage2D(r.TEXTURE_2D,Vt,It,ge[0].width,ge[0].height);for(let Dt=0,xt=ge.length;Dt<xt;Dt++)Gt=ge[Dt],J?Nt&&i.texSubImage2D(r.TEXTURE_2D,Dt,0,0,Gt.width,Gt.height,Rt,Ht,Gt.data):i.texImage2D(r.TEXTURE_2D,Dt,It,Gt.width,Gt.height,0,Rt,Ht,Gt.data);T.generateMipmaps=!1}else J?(Lt&&i.texStorage2D(r.TEXTURE_2D,Vt,It,Ct.width,Ct.height),Nt&&bt(T,Ct,Rt,Ht)):i.texImage2D(r.TEXTURE_2D,0,It,Ct.width,Ct.height,0,Rt,Ht,Ct.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){J&&Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Vt,It,ge[0].width,ge[0].height,Ct.depth);for(let Dt=0,xt=ge.length;Dt<xt;Dt++)if(Gt=ge[Dt],T.format!==Li)if(Rt!==null)if(J){if(Nt)if(T.layerUpdates.size>0){const jt=rv(Gt.width,Gt.height,T.format,T.type);for(const ce of T.layerUpdates){const Ie=Gt.data.subarray(ce*jt/Gt.data.BYTES_PER_ELEMENT,(ce+1)*jt/Gt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Dt,0,0,ce,Gt.width,Gt.height,1,Rt,Ie)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Dt,0,0,0,Gt.width,Gt.height,Ct.depth,Rt,Gt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Dt,It,Gt.width,Gt.height,Ct.depth,0,Gt.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?Nt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Dt,0,0,0,Gt.width,Gt.height,Ct.depth,Rt,Ht,Gt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Dt,It,Gt.width,Gt.height,Ct.depth,0,Rt,Ht,Gt.data)}else{J&&Lt&&i.texStorage2D(r.TEXTURE_2D,Vt,It,ge[0].width,ge[0].height);for(let Dt=0,xt=ge.length;Dt<xt;Dt++)Gt=ge[Dt],T.format!==Li?Rt!==null?J?Nt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Dt,0,0,Gt.width,Gt.height,Rt,Gt.data):i.compressedTexImage2D(r.TEXTURE_2D,Dt,It,Gt.width,Gt.height,0,Gt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?Nt&&i.texSubImage2D(r.TEXTURE_2D,Dt,0,0,Gt.width,Gt.height,Rt,Ht,Gt.data):i.texImage2D(r.TEXTURE_2D,Dt,It,Gt.width,Gt.height,0,Rt,Ht,Gt.data)}else if(T.isDataArrayTexture)if(J){if(Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Vt,It,Ct.width,Ct.height,Ct.depth),Nt)if(T.layerUpdates.size>0){const Dt=rv(Ct.width,Ct.height,T.format,T.type);for(const xt of T.layerUpdates){const jt=Ct.data.subarray(xt*Dt/Ct.data.BYTES_PER_ELEMENT,(xt+1)*Dt/Ct.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,Ct.width,Ct.height,1,Rt,Ht,jt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,Rt,Ht,Ct.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,It,Ct.width,Ct.height,Ct.depth,0,Rt,Ht,Ct.data);else if(T.isData3DTexture)J?(Lt&&i.texStorage3D(r.TEXTURE_3D,Vt,It,Ct.width,Ct.height,Ct.depth),Nt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,Rt,Ht,Ct.data)):i.texImage3D(r.TEXTURE_3D,0,It,Ct.width,Ct.height,Ct.depth,0,Rt,Ht,Ct.data);else if(T.isFramebufferTexture){if(Lt)if(J)i.texStorage2D(r.TEXTURE_2D,Vt,It,Ct.width,Ct.height);else{let Dt=Ct.width,xt=Ct.height;for(let jt=0;jt<Vt;jt++)i.texImage2D(r.TEXTURE_2D,jt,It,Dt,xt,0,Rt,Ht,null),Dt>>=1,xt>>=1}}else if(ge.length>0){if(J&&Lt){const Dt=kt(ge[0]);i.texStorage2D(r.TEXTURE_2D,Vt,It,Dt.width,Dt.height)}for(let Dt=0,xt=ge.length;Dt<xt;Dt++)Gt=ge[Dt],J?Nt&&i.texSubImage2D(r.TEXTURE_2D,Dt,0,0,Rt,Ht,Gt):i.texImage2D(r.TEXTURE_2D,Dt,It,Rt,Ht,Gt);T.generateMipmaps=!1}else if(J){if(Lt){const Dt=kt(Ct);i.texStorage2D(r.TEXTURE_2D,Vt,It,Dt.width,Dt.height)}Nt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Rt,Ht,Ct)}else i.texImage2D(r.TEXTURE_2D,0,It,Rt,Ht,Ct);v(T)&&x(St),Wt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function V(P,T,$){if(T.image.length!==6)return;const St=et(P,T),At=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+$);const ht=s.get(At);if(At.version!==ht.__version||St===!0){i.activeTexture(r.TEXTURE0+$);const Wt=Le.getPrimaries(Le.workingColorSpace),Ut=T.colorSpace===rs?null:Le.getPrimaries(T.colorSpace),Jt=T.colorSpace===rs||Wt===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);const $t=T.isCompressedTexture||T.image[0].isCompressedTexture,Ct=T.image[0]&&T.image[0].isDataTexture,Rt=[];for(let xt=0;xt<6;xt++)!$t&&!Ct?Rt[xt]=R(T.image[xt],!0,l.maxCubemapSize):Rt[xt]=Ct?T.image[xt].image:T.image[xt],Rt[xt]=Ae(T,Rt[xt]);const Ht=Rt[0],It=c.convert(T.format,T.colorSpace),Gt=c.convert(T.type),ge=U(T.internalFormat,It,Gt,T.colorSpace),J=T.isVideoTexture!==!0,Lt=ht.__version===void 0||St===!0,Nt=At.dataReady;let Vt=H(T,Ht);k(r.TEXTURE_CUBE_MAP,T);let Dt;if($t){J&&Lt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Vt,ge,Ht.width,Ht.height);for(let xt=0;xt<6;xt++){Dt=Rt[xt].mipmaps;for(let jt=0;jt<Dt.length;jt++){const ce=Dt[jt];T.format!==Li?It!==null?J?Nt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt,0,0,ce.width,ce.height,It,ce.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt,ge,ce.width,ce.height,0,ce.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt,0,0,ce.width,ce.height,It,Gt,ce.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt,ge,ce.width,ce.height,0,It,Gt,ce.data)}}}else{if(Dt=T.mipmaps,J&&Lt){Dt.length>0&&Vt++;const xt=kt(Rt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Vt,ge,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Ct){J?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Rt[xt].width,Rt[xt].height,It,Gt,Rt[xt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ge,Rt[xt].width,Rt[xt].height,0,It,Gt,Rt[xt].data);for(let jt=0;jt<Dt.length;jt++){const Ie=Dt[jt].image[xt].image;J?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt+1,0,0,Ie.width,Ie.height,It,Gt,Ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt+1,ge,Ie.width,Ie.height,0,It,Gt,Ie.data)}}else{J?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,It,Gt,Rt[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ge,It,Gt,Rt[xt]);for(let jt=0;jt<Dt.length;jt++){const ce=Dt[jt];J?Nt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt+1,0,0,It,Gt,ce.image[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,jt+1,ge,It,Gt,ce.image[xt])}}}v(T)&&x(r.TEXTURE_CUBE_MAP),ht.__version=At.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ut(P,T,$,St,At,ht){const Wt=c.convert($.format,$.colorSpace),Ut=c.convert($.type),Jt=U($.internalFormat,Wt,Ut,$.colorSpace),$t=s.get(T),Ct=s.get($);if(Ct.__renderTarget=T,!$t.__hasExternalTextures){const Rt=Math.max(1,T.width>>ht),Ht=Math.max(1,T.height>>ht);At===r.TEXTURE_3D||At===r.TEXTURE_2D_ARRAY?i.texImage3D(At,ht,Jt,Rt,Ht,T.depth,0,Wt,Ut,null):i.texImage2D(At,ht,Jt,Rt,Ht,0,Wt,Ut,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),Te(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,St,At,Ct.__webglTexture,0,j(T)):(At===r.TEXTURE_2D||At>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,St,At,Ct.__webglTexture,ht),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Mt(P,T,$){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){const St=T.depthTexture,At=St&&St.isDepthTexture?St.type:null,ht=D(T.stencilBuffer,At),Wt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Te(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(T),ht,T.width,T.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(T),ht,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ht,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Wt,r.RENDERBUFFER,P)}else{const St=T.textures;for(let At=0;At<St.length;At++){const ht=St[At],Wt=c.convert(ht.format,ht.colorSpace),Ut=c.convert(ht.type),Jt=U(ht.internalFormat,Wt,Ut,ht.colorSpace);Te(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(T),Jt,T.width,T.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(T),Jt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Jt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ot(P,T,$){const St=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const At=s.get(T.depthTexture);if(At.__renderTarget=T,(!At.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),St){if(At.__webglInit===void 0&&(At.__webglInit=!0,T.depthTexture.addEventListener("dispose",I)),At.__webglTexture===void 0){At.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,At.__webglTexture),k(r.TEXTURE_CUBE_MAP,T.depthTexture);const $t=c.convert(T.depthTexture.format),Ct=c.convert(T.depthTexture.type);let Rt;T.depthTexture.format===Aa?Rt=r.DEPTH_COMPONENT24:T.depthTexture.format===Hs&&(Rt=r.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Rt,T.width,T.height,0,$t,Ct,null)}}else tt(T.depthTexture,0);const ht=At.__webglTexture,Wt=j(T),Ut=St?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,Jt=T.depthTexture.format===Hs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Aa)Te(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Jt,Ut,ht,0,Wt):r.framebufferTexture2D(r.FRAMEBUFFER,Jt,Ut,ht,0);else if(T.depthTexture.format===Hs)Te(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Jt,Ut,ht,0,Wt):r.framebufferTexture2D(r.FRAMEBUFFER,Jt,Ut,ht,0);else throw new Error("Unknown depthTexture format")}function wt(P){const T=s.get(P),$=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const St=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),St){const At=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,St.removeEventListener("dispose",At)};St.addEventListener("dispose",At),T.__depthDisposeCallback=At}T.__boundDepthTexture=St}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if($)for(let St=0;St<6;St++)Ot(T.__webglFramebuffer[St],P,St);else{const St=P.texture.mipmaps;St&&St.length>0?Ot(T.__webglFramebuffer[0],P,0):Ot(T.__webglFramebuffer,P,0)}else if($){T.__webglDepthbuffer=[];for(let St=0;St<6;St++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[St]),T.__webglDepthbuffer[St]===void 0)T.__webglDepthbuffer[St]=r.createRenderbuffer(),Mt(T.__webglDepthbuffer[St],P,!1);else{const At=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer[St];r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,ht)}}else{const St=P.texture.mipmaps;if(St&&St.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Mt(T.__webglDepthbuffer,P,!1);else{const At=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,ht)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ne(P,T,$){const St=s.get(P);T!==void 0&&ut(St.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&wt(P)}function Ft(P){const T=P.texture,$=s.get(P),St=s.get(T);P.addEventListener("dispose",z);const At=P.textures,ht=P.isWebGLCubeRenderTarget===!0,Wt=At.length>1;if(Wt||(St.__webglTexture===void 0&&(St.__webglTexture=r.createTexture()),St.__version=T.version,d.memory.textures++),ht){$.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[Ut]=[];for(let Jt=0;Jt<T.mipmaps.length;Jt++)$.__webglFramebuffer[Ut][Jt]=r.createFramebuffer()}else $.__webglFramebuffer[Ut]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let Ut=0;Ut<T.mipmaps.length;Ut++)$.__webglFramebuffer[Ut]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Wt)for(let Ut=0,Jt=At.length;Ut<Jt;Ut++){const $t=s.get(At[Ut]);$t.__webglTexture===void 0&&($t.__webglTexture=r.createTexture(),d.memory.textures++)}if(P.samples>0&&Te(P)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Ut=0;Ut<At.length;Ut++){const Jt=At[Ut];$.__webglColorRenderbuffer[Ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[Ut]);const $t=c.convert(Jt.format,Jt.colorSpace),Ct=c.convert(Jt.type),Rt=U(Jt.internalFormat,$t,Ct,Jt.colorSpace,P.isXRRenderTarget===!0),Ht=j(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,Rt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,$.__webglColorRenderbuffer[Ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),Mt($.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ht){i.bindTexture(r.TEXTURE_CUBE_MAP,St.__webglTexture),k(r.TEXTURE_CUBE_MAP,T);for(let Ut=0;Ut<6;Ut++)if(T.mipmaps&&T.mipmaps.length>0)for(let Jt=0;Jt<T.mipmaps.length;Jt++)ut($.__webglFramebuffer[Ut][Jt],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Jt);else ut($.__webglFramebuffer[Ut],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);v(T)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let Ut=0,Jt=At.length;Ut<Jt;Ut++){const $t=At[Ut],Ct=s.get($t);let Rt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Rt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Rt,Ct.__webglTexture),k(Rt,$t),ut($.__webglFramebuffer,P,$t,r.COLOR_ATTACHMENT0+Ut,Rt,0),v($t)&&x(Rt)}i.unbindTexture()}else{let Ut=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ut=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ut,St.__webglTexture),k(Ut,T),T.mipmaps&&T.mipmaps.length>0)for(let Jt=0;Jt<T.mipmaps.length;Jt++)ut($.__webglFramebuffer[Jt],P,T,r.COLOR_ATTACHMENT0,Ut,Jt);else ut($.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,Ut,0);v(T)&&x(Ut),i.unbindTexture()}P.depthBuffer&&wt(P)}function ae(P){const T=P.textures;for(let $=0,St=T.length;$<St;$++){const At=T[$];if(v(At)){const ht=A(P),Wt=s.get(At).__webglTexture;i.bindTexture(ht,Wt),x(ht),i.unbindTexture()}}}const re=[],qt=[];function pe(P){if(P.samples>0){if(Te(P)===!1){const T=P.textures,$=P.width,St=P.height;let At=r.COLOR_BUFFER_BIT;const ht=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Wt=s.get(P),Ut=T.length>1;if(Ut)for(let $t=0;$t<T.length;$t++)i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const Jt=P.texture.mipmaps;Jt&&Jt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let $t=0;$t<T.length;$t++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(At|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(At|=r.STENCIL_BUFFER_BIT)),Ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Wt.__webglColorRenderbuffer[$t]);const Ct=s.get(T[$t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ct,0)}r.blitFramebuffer(0,0,$,St,0,0,$,St,At,r.NEAREST),m===!0&&(re.length=0,qt.length=0,re.push(r.COLOR_ATTACHMENT0+$t),P.depthBuffer&&P.resolveDepthBuffer===!1&&(re.push(ht),qt.push(ht),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,qt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ut)for(let $t=0;$t<T.length;$t++){i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.RENDERBUFFER,Wt.__webglColorRenderbuffer[$t]);const Ct=s.get(T[$t]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+$t,r.TEXTURE_2D,Ct,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function j(P){return Math.min(l.maxSamples,P.samples)}function Te(P){const T=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function me(P){const T=d.render.frame;_.get(P)!==T&&(_.set(P,T),P.update())}function Ae(P,T){const $=P.colorSpace,St=P.format,At=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==Zr&&$!==rs&&(Le.getTransfer($)===Ve?(St!==Li||At!==ci)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",$)),T}function kt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=q,this.resetTextureUnits=Q,this.setTexture2D=tt,this.setTexture2DArray=N,this.setTexture3D=B,this.setTextureCube=X,this.rebindTextures=ne,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function xR(r,t){function i(s,l=rs){let c;const d=Le.getTransfer(l);if(s===ci)return r.UNSIGNED_BYTE;if(s===_p)return r.UNSIGNED_SHORT_4_4_4_4;if(s===vp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Xv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Wv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Vv)return r.BYTE;if(s===kv)return r.SHORT;if(s===ll)return r.UNSIGNED_SHORT;if(s===gp)return r.INT;if(s===Zi)return r.UNSIGNED_INT;if(s===Wi)return r.FLOAT;if(s===Ta)return r.HALF_FLOAT;if(s===jv)return r.ALPHA;if(s===qv)return r.RGB;if(s===Li)return r.RGBA;if(s===Aa)return r.DEPTH_COMPONENT;if(s===Hs)return r.DEPTH_STENCIL;if(s===Yv)return r.RED;if(s===xp)return r.RED_INTEGER;if(s===Yr)return r.RG;if(s===Sp)return r.RG_INTEGER;if(s===yp)return r.RGBA_INTEGER;if(s===ru||s===ou||s===lu||s===cu)if(d===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===ru)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ou)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===ru)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ou)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===cu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ch||s===wh||s===Dh||s===Nh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ch)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Dh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Nh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Uh||s===Lh||s===Oh||s===Ph||s===Fh||s===Bh||s===zh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Uh||s===Lh)return d===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Oh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ph)return c.COMPRESSED_R11_EAC;if(s===Fh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Bh)return c.COMPRESSED_RG11_EAC;if(s===zh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ih||s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===Wh||s===jh||s===qh||s===Yh||s===Zh||s===Kh||s===Qh||s===Jh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ih)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Yh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$h||s===tp||s===ep)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===$h)return d===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===tp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ep)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===np||s===ip||s===ap||s===sp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===np)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ip)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ap)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===cl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const SR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class MR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new sx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Qi({vertexShader:SR,fragmentShader:yR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ki(new ml(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bR extends Qr{constructor(t,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,_=null,S=null,g=null,M=null,b=null;const R=typeof XRWebGLBinding<"u",v=new MR,x={},A=i.getContextAttributes();let U=null,D=null;const H=[],I=[],z=new Ee;let E=null;const O=new li;O.viewport=new nn;const mt=new li;mt.viewport=new nn;const G=[O,mt],Q=new Lb;let q=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let V=H[Z];return V===void 0&&(V=new Xd,H[Z]=V),V.getTargetRaySpace()},this.getControllerGrip=function(Z){let V=H[Z];return V===void 0&&(V=new Xd,H[Z]=V),V.getGripSpace()},this.getHand=function(Z){let V=H[Z];return V===void 0&&(V=new Xd,H[Z]=V),V.getHandSpace()};function tt(Z){const V=I.indexOf(Z.inputSource);if(V===-1)return;const ut=H[V];ut!==void 0&&(ut.update(Z.inputSource,Z.frame,h||d),ut.dispatchEvent({type:Z.type,data:Z.inputSource}))}function N(){l.removeEventListener("select",tt),l.removeEventListener("selectstart",tt),l.removeEventListener("selectend",tt),l.removeEventListener("squeeze",tt),l.removeEventListener("squeezestart",tt),l.removeEventListener("squeezeend",tt),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",B);for(let Z=0;Z<H.length;Z++){const V=I[Z];V!==null&&(I[Z]=null,H[Z].disconnect(V))}q=null,at=null,v.reset();for(const Z in x)delete x[Z];t.setRenderTarget(U),M=null,g=null,S=null,l=null,D=null,bt.stop(),s.isPresenting=!1,t.setPixelRatio(E),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,s.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){p=Z,s.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return S===null&&R&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",tt),l.addEventListener("selectstart",tt),l.addEventListener("selectend",tt),l.addEventListener("squeeze",tt),l.addEventListener("squeezestart",tt),l.addEventListener("squeezeend",tt),l.addEventListener("end",N),l.addEventListener("inputsourceschange",B),A.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(z),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Mt=null,Ot=null;A.depth&&(Ot=A.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ut=A.stencil?Hs:Aa,Mt=A.stencil?cl:Zi);const wt={colorFormat:i.RGBA8,depthFormat:Ot,scaleFactor:c};S=this.getBinding(),g=S.createProjectionLayer(wt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new Yi(g.textureWidth,g.textureHeight,{format:Li,type:ci,depthTexture:new fl(g.textureWidth,g.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ut={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ut),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Yi(M.framebufferWidth,M.framebufferHeight,{format:Li,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),bt.setContext(l),bt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function B(Z){for(let V=0;V<Z.removed.length;V++){const ut=Z.removed[V],Mt=I.indexOf(ut);Mt>=0&&(I[Mt]=null,H[Mt].disconnect(ut))}for(let V=0;V<Z.added.length;V++){const ut=Z.added[V];let Mt=I.indexOf(ut);if(Mt===-1){for(let wt=0;wt<H.length;wt++)if(wt>=I.length){I.push(ut),Mt=wt;break}else if(I[wt]===null){I[wt]=ut,Mt=wt;break}if(Mt===-1)break}const Ot=H[Mt];Ot&&Ot.connect(ut)}}const X=new rt,nt=new rt;function vt(Z,V,ut){X.setFromMatrixPosition(V.matrixWorld),nt.setFromMatrixPosition(ut.matrixWorld);const Mt=X.distanceTo(nt),Ot=V.projectionMatrix.elements,wt=ut.projectionMatrix.elements,ne=Ot[14]/(Ot[10]-1),Ft=Ot[14]/(Ot[10]+1),ae=(Ot[9]+1)/Ot[5],re=(Ot[9]-1)/Ot[5],qt=(Ot[8]-1)/Ot[0],pe=(wt[8]+1)/wt[0],j=ne*qt,Te=ne*pe,me=Mt/(-qt+pe),Ae=me*-qt;if(V.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ae),Z.translateZ(me),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ot[10]===-1)Z.projectionMatrix.copy(V.projectionMatrix),Z.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const kt=ne+me,P=Ft+me,T=j-Ae,$=Te+(Mt-Ae),St=ae*Ft/P*kt,At=re*Ft/P*kt;Z.projectionMatrix.makePerspective(T,$,St,At,kt,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function F(Z,V){V===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(V.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let V=Z.near,ut=Z.far;v.texture!==null&&(v.depthNear>0&&(V=v.depthNear),v.depthFar>0&&(ut=v.depthFar)),Q.near=mt.near=O.near=V,Q.far=mt.far=O.far=ut,(q!==Q.near||at!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),q=Q.near,at=Q.far),Q.layers.mask=Z.layers.mask|6,O.layers.mask=Q.layers.mask&-5,mt.layers.mask=Q.layers.mask&-3;const Mt=Z.parent,Ot=Q.cameras;F(Q,Mt);for(let wt=0;wt<Ot.length;wt++)F(Ot[wt],Mt);Ot.length===2?vt(Q,O,mt):Q.projectionMatrix.copy(O.projectionMatrix),k(Z,Q,Mt)};function k(Z,V,ut){ut===null?Z.matrix.copy(V.matrixWorld):(Z.matrix.copy(ut.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(V.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(V.projectionMatrix),Z.projectionMatrixInverse.copy(V.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=op*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(Z){m=Z,g!==null&&(g.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(Q)},this.getCameraTexture=function(Z){return x[Z]};let et=null;function pt(Z,V){if(_=V.getViewerPose(h||d),b=V,_!==null){const ut=_.views;M!==null&&(t.setRenderTargetFramebuffer(D,M.framebuffer),t.setRenderTarget(D));let Mt=!1;ut.length!==Q.cameras.length&&(Q.cameras.length=0,Mt=!0);for(let Ft=0;Ft<ut.length;Ft++){const ae=ut[Ft];let re=null;if(M!==null)re=M.getViewport(ae);else{const pe=S.getViewSubImage(g,ae);re=pe.viewport,Ft===0&&(t.setRenderTargetTextures(D,pe.colorTexture,pe.depthStencilTexture),t.setRenderTarget(D))}let qt=G[Ft];qt===void 0&&(qt=new li,qt.layers.enable(Ft),qt.viewport=new nn,G[Ft]=qt),qt.matrix.fromArray(ae.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(ae.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(re.x,re.y,re.width,re.height),Ft===0&&(Q.matrix.copy(qt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Mt===!0&&Q.cameras.push(qt)}const Ot=l.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){S=s.getBinding();const Ft=S.getDepthInformation(ut[0]);Ft&&Ft.isValid&&Ft.texture&&v.init(Ft,l.renderState)}if(Ot&&Ot.includes("camera-access")&&R){t.state.unbindTexture(),S=s.getBinding();for(let Ft=0;Ft<ut.length;Ft++){const ae=ut[Ft].camera;if(ae){let re=x[ae];re||(re=new sx,x[ae]=re);const qt=S.getCameraImage(ae);re.sourceTexture=qt}}}}for(let ut=0;ut<H.length;ut++){const Mt=I[ut],Ot=H[ut];Mt!==null&&Ot!==void 0&&Ot.update(Mt,V,h||d)}et&&et(Z,V),V.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:V}),b=null}const bt=new ux;bt.setAnimationLoop(pt),this.setAnimationLoop=function(Z){et=Z},this.dispose=function(){}}}const Ps=new Ra,ER=new Ke;function TR(r,t){function i(v,x){v.matrixAutoUpdate===!0&&v.updateMatrix(),x.value.copy(v.matrix)}function s(v,x){x.color.getRGB(v.fogColor.value,rx(r)),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function l(v,x,A,U,D){x.isMeshBasicMaterial?c(v,x):x.isMeshLambertMaterial?(c(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(v,x),S(v,x)):x.isMeshPhongMaterial?(c(v,x),_(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(v,x),g(v,x),x.isMeshPhysicalMaterial&&M(v,x,D)):x.isMeshMatcapMaterial?(c(v,x),b(v,x)):x.isMeshDepthMaterial?c(v,x):x.isMeshDistanceMaterial?(c(v,x),R(v,x)):x.isMeshNormalMaterial?c(v,x):x.isLineBasicMaterial?(d(v,x),x.isLineDashedMaterial&&p(v,x)):x.isPointsMaterial?m(v,x,A,U):x.isSpriteMaterial?h(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map,i(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,i(x.alphaMap,v.alphaMapTransform)),x.bumpMap&&(v.bumpMap.value=x.bumpMap,i(x.bumpMap,v.bumpMapTransform),v.bumpScale.value=x.bumpScale,x.side===Kn&&(v.bumpScale.value*=-1)),x.normalMap&&(v.normalMap.value=x.normalMap,i(x.normalMap,v.normalMapTransform),v.normalScale.value.copy(x.normalScale),x.side===Kn&&v.normalScale.value.negate()),x.displacementMap&&(v.displacementMap.value=x.displacementMap,i(x.displacementMap,v.displacementMapTransform),v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,v.emissiveMapTransform)),x.specularMap&&(v.specularMap.value=x.specularMap,i(x.specularMap,v.specularMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const A=t.get(x),U=A.envMap,D=A.envMapRotation;U&&(v.envMap.value=U,Ps.copy(D),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),v.envMapRotation.value.setFromMatrix4(ER.makeRotationFromEuler(Ps)),v.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap&&(v.lightMap.value=x.lightMap,v.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,v.lightMapTransform)),x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,v.aoMapTransform))}function d(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,x.map&&(v.map.value=x.map,i(x.map,v.mapTransform))}function p(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function m(v,x,A,U){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*A,v.scale.value=U*.5,x.map&&(v.map.value=x.map,i(x.map,v.uvTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,i(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function h(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map,i(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,i(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function _(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function S(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function g(v,x){v.metalness.value=x.metalness,x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,v.metalnessMapTransform)),v.roughness.value=x.roughness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,v.roughnessMapTransform)),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function M(v,x,A){v.ior.value=x.ior,x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,v.sheenColorMapTransform)),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,v.sheenRoughnessMapTransform))),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,v.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(v.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Kn&&v.clearcoatNormalScale.value.negate())),x.dispersion>0&&(v.dispersion.value=x.dispersion),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,v.iridescenceMapTransform)),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=A.texture,v.transmissionSamplerSize.value.set(A.width,A.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,v.transmissionMapTransform)),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(v.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(v.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,v.specularColorMapTransform)),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,v.specularIntensityMapTransform))}function b(v,x){x.matcap&&(v.matcap.value=x.matcap)}function R(v,x){const A=t.get(x).light;v.referencePosition.value.setFromMatrixPosition(A.matrixWorld),v.nearDistance.value=A.shadow.camera.near,v.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function AR(r,t,i,s){let l={},c={},d=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,U){const D=U.program;s.uniformBlockBinding(A,D)}function h(A,U){let D=l[A.id];D===void 0&&(b(A),D=_(A),l[A.id]=D,A.addEventListener("dispose",v));const H=U.program;s.updateUBOMapping(A,H);const I=t.render.frame;c[A.id]!==I&&(g(A),c[A.id]=I)}function _(A){const U=S();A.__bindingPointIndex=U;const D=r.createBuffer(),H=A.__size,I=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,H,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,D),D}function S(){for(let A=0;A<p;A++)if(d.indexOf(A)===-1)return d.push(A),A;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const U=l[A.id],D=A.uniforms,H=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let I=0,z=D.length;I<z;I++){const E=Array.isArray(D[I])?D[I]:[D[I]];for(let O=0,mt=E.length;O<mt;O++){const G=E[O];if(M(G,I,O,H)===!0){const Q=G.__offset,q=Array.isArray(G.value)?G.value:[G.value];let at=0;for(let tt=0;tt<q.length;tt++){const N=q[tt],B=R(N);typeof N=="number"||typeof N=="boolean"?(G.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,Q+at,G.__data)):N.isMatrix3?(G.__data[0]=N.elements[0],G.__data[1]=N.elements[1],G.__data[2]=N.elements[2],G.__data[3]=0,G.__data[4]=N.elements[3],G.__data[5]=N.elements[4],G.__data[6]=N.elements[5],G.__data[7]=0,G.__data[8]=N.elements[6],G.__data[9]=N.elements[7],G.__data[10]=N.elements[8],G.__data[11]=0):(N.toArray(G.__data,at),at+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(A,U,D,H){const I=A.value,z=U+"_"+D;if(H[z]===void 0)return typeof I=="number"||typeof I=="boolean"?H[z]=I:H[z]=I.clone(),!0;{const E=H[z];if(typeof I=="number"||typeof I=="boolean"){if(E!==I)return H[z]=I,!0}else if(E.equals(I)===!1)return E.copy(I),!0}return!1}function b(A){const U=A.uniforms;let D=0;const H=16;for(let z=0,E=U.length;z<E;z++){const O=Array.isArray(U[z])?U[z]:[U[z]];for(let mt=0,G=O.length;mt<G;mt++){const Q=O[mt],q=Array.isArray(Q.value)?Q.value:[Q.value];for(let at=0,tt=q.length;at<tt;at++){const N=q[at],B=R(N),X=D%H,nt=X%B.boundary,vt=X+nt;D+=nt,vt!==0&&H-vt<B.storage&&(D+=H-vt),Q.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=D,D+=B.storage}}}const I=D%H;return I>0&&(D+=H-I),A.__size=D,A.__cache={},this}function R(A){const U={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(U.boundary=4,U.storage=4):A.isVector2?(U.boundary=8,U.storage=8):A.isVector3||A.isColor?(U.boundary=16,U.storage=12):A.isVector4?(U.boundary=16,U.storage=16):A.isMatrix3?(U.boundary=48,U.storage=48):A.isMatrix4?(U.boundary=64,U.storage=64):A.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):le("WebGLRenderer: Unsupported uniform value type.",A),U}function v(A){const U=A.target;U.removeEventListener("dispose",v);const D=d.indexOf(U.__bindingPointIndex);d.splice(D,1),r.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function x(){for(const A in l)r.deleteBuffer(l[A]);d=[],l={},c={}}return{bind:m,update:h,dispose:x}}const RR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function CR(){return Gi===null&&(Gi=new pb(RR,16,16,Yr,Ta),Gi.name="DFG_LUT",Gi.minFilter=On,Gi.magFilter=On,Gi.wrapS=Ma,Gi.wrapT=Ma,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class wR{constructor(t={}){const{canvas:i=kM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:M=ci}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=d;const R=M,v=new Set([yp,Sp,xp]),x=new Set([ci,Zi,ll,cl,_p,vp]),A=new Uint32Array(4),U=new Int32Array(4);let D=null,H=null;const I=[],z=[];let E=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let mt=!1;this._outputColorSpace=Si;let G=0,Q=0,q=null,at=-1,tt=null;const N=new nn,B=new nn;let X=null;const nt=new ye(0);let vt=0,F=i.width,k=i.height,et=1,pt=null,bt=null;const Z=new nn(0,0,F,k),V=new nn(0,0,F,k);let ut=!1;const Mt=new Cp;let Ot=!1,wt=!1;const ne=new Ke,Ft=new rt,ae=new nn,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function pe(){return q===null?et:1}let j=s;function Te(w,K){return i.getContext(w,K)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${pp}`),i.addEventListener("webglcontextlost",jt,!1),i.addEventListener("webglcontextrestored",ce,!1),i.addEventListener("webglcontextcreationerror",Ie,!1),j===null){const K="webgl2";if(j=Te(K,w),j===null)throw Te(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ue("WebGLRenderer: "+w.message),w}let me,Ae,kt,P,T,$,St,At,ht,Wt,Ut,Jt,$t,Ct,Rt,Ht,It,Gt,ge,J,Lt,Nt,Vt;function Dt(){me=new wT(j),me.init(),Lt=new xR(j,me),Ae=new yT(j,me,t,Lt),kt=new _R(j,me),Ae.reversedDepthBuffer&&g&&kt.buffers.depth.setReversed(!0),P=new UT(j),T=new iR,$=new vR(j,me,kt,T,Ae,Lt,P),St=new CT(O),At=new Bb(j),Nt=new xT(j,At),ht=new DT(j,At,P,Nt),Wt=new OT(j,ht,At,Nt,P),Gt=new LT(j,Ae,$),Rt=new MT(T),Ut=new nR(O,St,me,Ae,Nt,Rt),Jt=new TR(O,T),$t=new sR,Ct=new fR(me),It=new vT(O,St,kt,Wt,b,m),Ht=new gR(O,Wt,Ae),Vt=new AR(j,P,Ae,kt),ge=new ST(j,me,P),J=new NT(j,me,P),P.programs=Ut.programs,O.capabilities=Ae,O.extensions=me,O.properties=T,O.renderLists=$t,O.shadowMap=Ht,O.state=kt,O.info=P}Dt(),R!==ci&&(E=new FT(R,i.width,i.height,l,c));const xt=new bR(O,j);this.xr=xt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const w=me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(w){w!==void 0&&(et=w,this.setSize(F,k,!1))},this.getSize=function(w){return w.set(F,k)},this.setSize=function(w,K,gt=!0){if(xt.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,k=K,i.width=Math.floor(w*et),i.height=Math.floor(K*et),gt===!0&&(i.style.width=w+"px",i.style.height=K+"px"),E!==null&&E.setSize(i.width,i.height),this.setViewport(0,0,w,K)},this.getDrawingBufferSize=function(w){return w.set(F*et,k*et).floor()},this.setDrawingBufferSize=function(w,K,gt){F=w,k=K,et=gt,i.width=Math.floor(w*gt),i.height=Math.floor(K*gt),this.setViewport(0,0,w,K)},this.setEffects=function(w){if(R===ci){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let K=0;K<w.length;K++)if(w[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,K,gt,ct){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,K,gt,ct),kt.viewport(N.copy(Z).multiplyScalar(et).round())},this.getScissor=function(w){return w.copy(V)},this.setScissor=function(w,K,gt,ct){w.isVector4?V.set(w.x,w.y,w.z,w.w):V.set(w,K,gt,ct),kt.scissor(B.copy(V).multiplyScalar(et).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(w){kt.setScissorTest(ut=w)},this.setOpaqueSort=function(w){pt=w},this.setTransparentSort=function(w){bt=w},this.getClearColor=function(w){return w.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(w=!0,K=!0,gt=!0){let ct=0;if(w){let st=!1;if(q!==null){const Pt=q.texture.format;st=v.has(Pt)}if(st){const Pt=q.texture.type,Xt=x.has(Pt),Bt=It.getClearColor(),Qt=It.getClearAlpha(),ee=Bt.r,oe=Bt.g,fe=Bt.b;Xt?(A[0]=ee,A[1]=oe,A[2]=fe,A[3]=Qt,j.clearBufferuiv(j.COLOR,0,A)):(U[0]=ee,U[1]=oe,U[2]=fe,U[3]=Qt,j.clearBufferiv(j.COLOR,0,U))}else ct|=j.COLOR_BUFFER_BIT}K&&(ct|=j.DEPTH_BUFFER_BIT),gt&&(ct|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ct!==0&&j.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",jt,!1),i.removeEventListener("webglcontextrestored",ce,!1),i.removeEventListener("webglcontextcreationerror",Ie,!1),It.dispose(),$t.dispose(),Ct.dispose(),T.dispose(),St.dispose(),Wt.dispose(),Nt.dispose(),Vt.dispose(),Ut.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Xs),xt.removeEventListener("sessionend",Ws),Oi.stop()};function jt(w){w.preventDefault(),hu("WebGLRenderer: Context Lost."),mt=!0}function ce(){hu("WebGLRenderer: Context Restored."),mt=!1;const w=P.autoReset,K=Ht.enabled,gt=Ht.autoUpdate,ct=Ht.needsUpdate,st=Ht.type;Dt(),P.autoReset=w,Ht.enabled=K,Ht.autoUpdate=gt,Ht.needsUpdate=ct,Ht.type=st}function Ie(w){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ne(w){const K=w.target;K.removeEventListener("dispose",Ne),Bn(K)}function Bn(w){Mi(w),T.remove(w)}function Mi(w){const K=T.get(w).programs;K!==void 0&&(K.forEach(function(gt){Ut.releaseProgram(gt)}),w.isShaderMaterial&&Ut.releaseShaderCache(w))}this.renderBufferDirect=function(w,K,gt,ct,st,Pt){K===null&&(K=re);const Xt=st.isMesh&&st.matrixWorld.determinant()<0,Bt=xl(w,K,gt,ct,st);kt.setMaterial(ct,Xt);let Qt=gt.index,ee=1;if(ct.wireframe===!0){if(Qt=ht.getWireframeAttribute(gt),Qt===void 0)return;ee=2}const oe=gt.drawRange,fe=gt.attributes.position;let Yt=oe.start*ee,_e=(oe.start+oe.count)*ee;Pt!==null&&(Yt=Math.max(Yt,Pt.start*ee),_e=Math.min(_e,(Pt.start+Pt.count)*ee)),Qt!==null?(Yt=Math.max(Yt,0),_e=Math.min(_e,Qt.count)):fe!=null&&(Yt=Math.max(Yt,0),_e=Math.min(_e,fe.count));const Qe=_e-Yt;if(Qe<0||Qe===1/0)return;Nt.setup(st,ct,Bt,gt,Qt);let Je,Oe=ge;if(Qt!==null&&(Je=At.get(Qt),Oe=J,Oe.setIndex(Je)),st.isMesh)ct.wireframe===!0?(kt.setLineWidth(ct.wireframeLinewidth*pe()),Oe.setMode(j.LINES)):Oe.setMode(j.TRIANGLES);else if(st.isLine){let mn=ct.linewidth;mn===void 0&&(mn=1),kt.setLineWidth(mn*pe()),st.isLineSegments?Oe.setMode(j.LINES):st.isLineLoop?Oe.setMode(j.LINE_LOOP):Oe.setMode(j.LINE_STRIP)}else st.isPoints?Oe.setMode(j.POINTS):st.isSprite&&Oe.setMode(j.TRIANGLES);if(st.isBatchedMesh)if(st._multiDrawInstances!==null)pu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount,st._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))Oe.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{const mn=st._multiDrawStarts,Kt=st._multiDrawCounts,zn=st._multiDrawCount,ue=Qt?At.get(Qt).bytesPerElement:1,In=T.get(ct).currentProgram.getUniforms();for(let Qn=0;Qn<zn;Qn++)In.setValue(j,"_gl_DrawID",Qn),Oe.render(mn[Qn]/ue,Kt[Qn])}else if(st.isInstancedMesh)Oe.renderInstances(Yt,Qe,st.count);else if(gt.isInstancedBufferGeometry){const mn=gt._maxInstanceCount!==void 0?gt._maxInstanceCount:1/0,Kt=Math.min(gt.instanceCount,mn);Oe.renderInstances(Yt,Qe,Kt)}else Oe.render(Yt,Qe)};function to(w,K,gt){w.transparent===!0&&w.side===ki&&w.forceSinglePass===!1?(w.side=Kn,w.needsUpdate=!0,Ca(w,K,gt),w.side=cs,w.needsUpdate=!0,Ca(w,K,gt),w.side=ki):Ca(w,K,gt)}this.compile=function(w,K,gt=null){gt===null&&(gt=w),H=Ct.get(gt),H.init(K),z.push(H),gt.traverseVisible(function(st){st.isLight&&st.layers.test(K.layers)&&(H.pushLight(st),st.castShadow&&H.pushShadow(st))}),w!==gt&&w.traverseVisible(function(st){st.isLight&&st.layers.test(K.layers)&&(H.pushLight(st),st.castShadow&&H.pushShadow(st))}),H.setupLights();const ct=new Set;return w.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;const Pt=st.material;if(Pt)if(Array.isArray(Pt))for(let Xt=0;Xt<Pt.length;Xt++){const Bt=Pt[Xt];to(Bt,gt,st),ct.add(Bt)}else to(Pt,gt,st),ct.add(Pt)}),H=z.pop(),ct},this.compileAsync=function(w,K,gt=null){const ct=this.compile(w,K,gt);return new Promise(st=>{function Pt(){if(ct.forEach(function(Xt){T.get(Xt).currentProgram.isReady()&&ct.delete(Xt)}),ct.size===0){st(w);return}setTimeout(Pt,10)}me.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let ks=null;function gl(w){ks&&ks(w)}function Xs(){Oi.stop()}function Ws(){Oi.start()}const Oi=new ux;Oi.setAnimationLoop(gl),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(w){ks=w,xt.setAnimationLoop(w),w===null?Oi.stop():Oi.start()},xt.addEventListener("sessionstart",Xs),xt.addEventListener("sessionend",Ws),this.render=function(w,K){if(K!==void 0&&K.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(mt===!0)return;const gt=xt.enabled===!0&&xt.isPresenting===!0,ct=E!==null&&(q===null||gt)&&E.begin(O,q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(K),K=xt.getCamera()),w.isScene===!0&&w.onBeforeRender(O,w,K,q),H=Ct.get(w,z.length),H.init(K),z.push(H),ne.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Mt.setFromProjectionMatrix(ne,ji,K.reversedDepth),wt=this.localClippingEnabled,Ot=Rt.init(this.clippingPlanes,wt),D=$t.get(w,I.length),D.init(),I.push(D),xt.enabled===!0&&xt.isPresenting===!0){const Xt=O.xr.getDepthSensingMesh();Xt!==null&&js(Xt,K,-1/0,O.sortObjects)}js(w,K,0,O.sortObjects),D.finish(),O.sortObjects===!0&&D.sort(pt,bt),qt=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,qt&&It.addToRenderList(D,w),this.info.render.frame++,Ot===!0&&Rt.beginShadows();const st=H.state.shadowsArray;if(Ht.render(st,w,K),Ot===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ct&&E.hasRenderPass())===!1){const Xt=D.opaque,Bt=D.transmissive;if(H.setupLights(),K.isArrayCamera){const Qt=K.cameras;if(Bt.length>0)for(let ee=0,oe=Qt.length;ee<oe;ee++){const fe=Qt[ee];rn(Xt,Bt,w,fe)}qt&&It.render(w);for(let ee=0,oe=Qt.length;ee<oe;ee++){const fe=Qt[ee];bi(D,w,fe,fe.viewport)}}else Bt.length>0&&rn(Xt,Bt,w,K),qt&&It.render(w),bi(D,w,K)}q!==null&&Q===0&&($.updateMultisampleRenderTarget(q),$.updateRenderTargetMipmap(q)),ct&&E.end(O),w.isScene===!0&&w.onAfterRender(O,w,K),Nt.resetDefaultState(),at=-1,tt=null,z.pop(),z.length>0?(H=z[z.length-1],Ot===!0&&Rt.setGlobalState(O.clippingPlanes,H.state.camera)):H=null,I.pop(),I.length>0?D=I[I.length-1]:D=null};function js(w,K,gt,ct){if(w.visible===!1)return;if(w.layers.test(K.layers)){if(w.isGroup)gt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(K);else if(w.isLight)H.pushLight(w),w.castShadow&&H.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Mt.intersectsSprite(w)){ct&&ae.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ne);const Xt=Wt.update(w),Bt=w.material;Bt.visible&&D.push(w,Xt,Bt,gt,ae.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Mt.intersectsObject(w))){const Xt=Wt.update(w),Bt=w.material;if(ct&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ae.copy(w.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),ae.copy(Xt.boundingSphere.center)),ae.applyMatrix4(w.matrixWorld).applyMatrix4(ne)),Array.isArray(Bt)){const Qt=Xt.groups;for(let ee=0,oe=Qt.length;ee<oe;ee++){const fe=Qt[ee],Yt=Bt[fe.materialIndex];Yt&&Yt.visible&&D.push(w,Xt,Yt,gt,ae.z,fe)}}else Bt.visible&&D.push(w,Xt,Bt,gt,ae.z,null)}}const Pt=w.children;for(let Xt=0,Bt=Pt.length;Xt<Bt;Xt++)js(Pt[Xt],K,gt,ct)}function bi(w,K,gt,ct){const{opaque:st,transmissive:Pt,transparent:Xt}=w;H.setupLightsView(gt),Ot===!0&&Rt.setGlobalState(O.clippingPlanes,gt),ct&&kt.viewport(N.copy(ct)),st.length>0&&pn(st,K,gt),Pt.length>0&&pn(Pt,K,gt),Xt.length>0&&pn(Xt,K,gt),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function rn(w,K,gt,ct){if((gt.isScene===!0?gt.overrideMaterial:null)!==null)return;if(H.state.transmissionRenderTarget[ct.id]===void 0){const Yt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");H.state.transmissionRenderTarget[ct.id]=new Yi(1,1,{generateMipmaps:!0,type:Yt?Ta:ci,minFilter:Is,samples:Math.max(4,Ae.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace})}const Pt=H.state.transmissionRenderTarget[ct.id],Xt=ct.viewport||N;Pt.setSize(Xt.z*O.transmissionResolutionScale,Xt.w*O.transmissionResolutionScale);const Bt=O.getRenderTarget(),Qt=O.getActiveCubeFace(),ee=O.getActiveMipmapLevel();O.setRenderTarget(Pt),O.getClearColor(nt),vt=O.getClearAlpha(),vt<1&&O.setClearColor(16777215,.5),O.clear(),qt&&It.render(gt);const oe=O.toneMapping;O.toneMapping=qi;const fe=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),H.setupLightsView(ct),Ot===!0&&Rt.setGlobalState(O.clippingPlanes,ct),pn(w,gt,ct),$.updateMultisampleRenderTarget(Pt),$.updateRenderTargetMipmap(Pt),me.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let _e=0,Qe=K.length;_e<Qe;_e++){const Je=K[_e],{object:Oe,geometry:mn,material:Kt,group:zn}=Je;if(Kt.side===ki&&Oe.layers.test(ct.layers)){const ue=Kt.side;Kt.side=Kn,Kt.needsUpdate=!0,Ji(Oe,gt,ct,mn,Kt,zn),Kt.side=ue,Kt.needsUpdate=!0,Yt=!0}}Yt===!0&&($.updateMultisampleRenderTarget(Pt),$.updateRenderTargetMipmap(Pt))}O.setRenderTarget(Bt,Qt,ee),O.setClearColor(nt,vt),fe!==void 0&&(ct.viewport=fe),O.toneMapping=oe}function pn(w,K,gt){const ct=K.isScene===!0?K.overrideMaterial:null;for(let st=0,Pt=w.length;st<Pt;st++){const Xt=w[st],{object:Bt,geometry:Qt,group:ee}=Xt;let oe=Xt.material;oe.allowOverride===!0&&ct!==null&&(oe=ct),Bt.layers.test(gt.layers)&&Ji(Bt,K,gt,Qt,oe,ee)}}function Ji(w,K,gt,ct,st,Pt){w.onBeforeRender(O,K,gt,ct,st,Pt),w.modelViewMatrix.multiplyMatrices(gt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),st.onBeforeRender(O,K,gt,ct,w,Pt),st.transparent===!0&&st.side===ki&&st.forceSinglePass===!1?(st.side=Kn,st.needsUpdate=!0,O.renderBufferDirect(gt,K,ct,st,w,Pt),st.side=cs,st.needsUpdate=!0,O.renderBufferDirect(gt,K,ct,st,w,Pt),st.side=ki):O.renderBufferDirect(gt,K,ct,st,w,Pt),w.onAfterRender(O,K,gt,ct,st,Pt)}function Ca(w,K,gt){K.isScene!==!0&&(K=re);const ct=T.get(w),st=H.state.lights,Pt=H.state.shadowsArray,Xt=st.state.version,Bt=Ut.getParameters(w,st.state,Pt,K,gt),Qt=Ut.getProgramCacheKey(Bt);let ee=ct.programs;ct.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?K.environment:null,ct.fog=K.fog;const oe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ct.envMap=St.get(w.envMap||ct.environment,oe),ct.envMapRotation=ct.environment!==null&&w.envMap===null?K.environmentRotation:w.envMapRotation,ee===void 0&&(w.addEventListener("dispose",Ne),ee=new Map,ct.programs=ee);let fe=ee.get(Qt);if(fe!==void 0){if(ct.currentProgram===fe&&ct.lightsStateVersion===Xt)return vl(w,Bt),fe}else Bt.uniforms=Ut.getUniforms(w),w.onBeforeCompile(Bt,O),fe=Ut.acquireProgram(Bt,Qt),ee.set(Qt,fe),ct.uniforms=Bt.uniforms;const Yt=ct.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Yt.clippingPlanes=Rt.uniform),vl(w,Bt),ct.needsLights=eo(w),ct.lightsStateVersion=Xt,ct.needsLights&&(Yt.ambientLightColor.value=st.state.ambient,Yt.lightProbe.value=st.state.probe,Yt.directionalLights.value=st.state.directional,Yt.directionalLightShadows.value=st.state.directionalShadow,Yt.spotLights.value=st.state.spot,Yt.spotLightShadows.value=st.state.spotShadow,Yt.rectAreaLights.value=st.state.rectArea,Yt.ltc_1.value=st.state.rectAreaLTC1,Yt.ltc_2.value=st.state.rectAreaLTC2,Yt.pointLights.value=st.state.point,Yt.pointLightShadows.value=st.state.pointShadow,Yt.hemisphereLights.value=st.state.hemi,Yt.directionalShadowMatrix.value=st.state.directionalShadowMatrix,Yt.spotLightMatrix.value=st.state.spotLightMatrix,Yt.spotLightMap.value=st.state.spotLightMap,Yt.pointShadowMatrix.value=st.state.pointShadowMatrix),ct.currentProgram=fe,ct.uniformsList=null,fe}function _l(w){if(w.uniformsList===null){const K=w.currentProgram.getUniforms();w.uniformsList=uu.seqWithValue(K.seq,w.uniforms)}return w.uniformsList}function vl(w,K){const gt=T.get(w);gt.outputColorSpace=K.outputColorSpace,gt.batching=K.batching,gt.batchingColor=K.batchingColor,gt.instancing=K.instancing,gt.instancingColor=K.instancingColor,gt.instancingMorph=K.instancingMorph,gt.skinning=K.skinning,gt.morphTargets=K.morphTargets,gt.morphNormals=K.morphNormals,gt.morphColors=K.morphColors,gt.morphTargetsCount=K.morphTargetsCount,gt.numClippingPlanes=K.numClippingPlanes,gt.numIntersection=K.numClipIntersection,gt.vertexAlphas=K.vertexAlphas,gt.vertexTangents=K.vertexTangents,gt.toneMapping=K.toneMapping}function xl(w,K,gt,ct,st){K.isScene!==!0&&(K=re),$.resetTextureUnits();const Pt=K.fog,Xt=ct.isMeshStandardMaterial||ct.isMeshLambertMaterial||ct.isMeshPhongMaterial?K.environment:null,Bt=q===null?O.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Zr,Qt=ct.isMeshStandardMaterial||ct.isMeshLambertMaterial&&!ct.envMap||ct.isMeshPhongMaterial&&!ct.envMap,ee=St.get(ct.envMap||Xt,Qt),oe=ct.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,fe=!!gt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Yt=!!gt.morphAttributes.position,_e=!!gt.morphAttributes.normal,Qe=!!gt.morphAttributes.color;let Je=qi;ct.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Je=O.toneMapping);const Oe=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,mn=Oe!==void 0?Oe.length:0,Kt=T.get(ct),zn=H.state.lights;if(Ot===!0&&(wt===!0||w!==tt)){const ln=w===tt&&ct.id===at;Rt.setState(ct,w,ln)}let ue=!1;ct.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==zn.state.version||Kt.outputColorSpace!==Bt||st.isBatchedMesh&&Kt.batching===!1||!st.isBatchedMesh&&Kt.batching===!0||st.isBatchedMesh&&Kt.batchingColor===!0&&st.colorTexture===null||st.isBatchedMesh&&Kt.batchingColor===!1&&st.colorTexture!==null||st.isInstancedMesh&&Kt.instancing===!1||!st.isInstancedMesh&&Kt.instancing===!0||st.isSkinnedMesh&&Kt.skinning===!1||!st.isSkinnedMesh&&Kt.skinning===!0||st.isInstancedMesh&&Kt.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&Kt.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&Kt.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&Kt.instancingMorph===!1&&st.morphTexture!==null||Kt.envMap!==ee||ct.fog===!0&&Kt.fog!==Pt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Rt.numPlanes||Kt.numIntersection!==Rt.numIntersection)||Kt.vertexAlphas!==oe||Kt.vertexTangents!==fe||Kt.morphTargets!==Yt||Kt.morphNormals!==_e||Kt.morphColors!==Qe||Kt.toneMapping!==Je||Kt.morphTargetsCount!==mn)&&(ue=!0):(ue=!0,Kt.__version=ct.version);let In=Kt.currentProgram;ue===!0&&(In=Ca(ct,K,st));let Qn=!1,Ei=!1,Jn=!1;const ze=In.getUniforms(),on=Kt.uniforms;if(kt.useProgram(In.program)&&(Qn=!0,Ei=!0,Jn=!0),ct.id!==at&&(at=ct.id,Ei=!0),Qn||tt!==w){kt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ze.setValue(j,"projectionMatrix",w.projectionMatrix),ze.setValue(j,"viewMatrix",w.matrixWorldInverse);const Ti=ze.map.cameraPosition;Ti!==void 0&&Ti.setValue(j,Ft.setFromMatrixPosition(w.matrixWorld)),Ae.logarithmicDepthBuffer&&ze.setValue(j,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&ze.setValue(j,"isOrthographic",w.isOrthographicCamera===!0),tt!==w&&(tt=w,Ei=!0,Jn=!0)}if(Kt.needsLights&&(zn.state.directionalShadowMap.length>0&&ze.setValue(j,"directionalShadowMap",zn.state.directionalShadowMap,$),zn.state.spotShadowMap.length>0&&ze.setValue(j,"spotShadowMap",zn.state.spotShadowMap,$),zn.state.pointShadowMap.length>0&&ze.setValue(j,"pointShadowMap",zn.state.pointShadowMap,$)),st.isSkinnedMesh){ze.setOptional(j,st,"bindMatrix"),ze.setOptional(j,st,"bindMatrixInverse");const ln=st.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),ze.setValue(j,"boneTexture",ln.boneTexture,$))}st.isBatchedMesh&&(ze.setOptional(j,st,"batchingTexture"),ze.setValue(j,"batchingTexture",st._matricesTexture,$),ze.setOptional(j,st,"batchingIdTexture"),ze.setValue(j,"batchingIdTexture",st._indirectTexture,$),ze.setOptional(j,st,"batchingColorTexture"),st._colorsTexture!==null&&ze.setValue(j,"batchingColorTexture",st._colorsTexture,$));const Hn=gt.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&Gt.update(st,gt,In),(Ei||Kt.receiveShadow!==st.receiveShadow)&&(Kt.receiveShadow=st.receiveShadow,ze.setValue(j,"receiveShadow",st.receiveShadow)),(ct.isMeshStandardMaterial||ct.isMeshLambertMaterial||ct.isMeshPhongMaterial)&&ct.envMap===null&&K.environment!==null&&(on.envMapIntensity.value=K.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=CR()),Ei&&(ze.setValue(j,"toneMappingExposure",O.toneMappingExposure),Kt.needsLights&&us(on,Jn),Pt&&ct.fog===!0&&Jt.refreshFogUniforms(on,Pt),Jt.refreshMaterialUniforms(on,ct,et,k,H.state.transmissionRenderTarget[w.id]),uu.upload(j,_l(Kt),on,$)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(uu.upload(j,_l(Kt),on,$),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&ze.setValue(j,"center",st.center),ze.setValue(j,"modelViewMatrix",st.modelViewMatrix),ze.setValue(j,"normalMatrix",st.normalMatrix),ze.setValue(j,"modelMatrix",st.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const ln=ct.uniformsGroups;for(let Ti=0,$i=ln.length;Ti<$i;Ti++){const qs=ln[Ti];Vt.update(qs,In),Vt.bind(qs,In)}}return In}function us(w,K){w.ambientLightColor.needsUpdate=K,w.lightProbe.needsUpdate=K,w.directionalLights.needsUpdate=K,w.directionalLightShadows.needsUpdate=K,w.pointLights.needsUpdate=K,w.pointLightShadows.needsUpdate=K,w.spotLights.needsUpdate=K,w.spotLightShadows.needsUpdate=K,w.rectAreaLights.needsUpdate=K,w.hemisphereLights.needsUpdate=K}function eo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(w,K,gt){const ct=T.get(w);ct.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),T.get(w.texture).__webglTexture=K,T.get(w.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:gt,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,K){const gt=T.get(w);gt.__webglFramebuffer=K,gt.__useDefaultFramebuffer=K===void 0};const wa=j.createFramebuffer();this.setRenderTarget=function(w,K=0,gt=0){q=w,G=K,Q=gt;let ct=null,st=!1,Pt=!1;if(w){const Bt=T.get(w);if(Bt.__useDefaultFramebuffer!==void 0){kt.bindFramebuffer(j.FRAMEBUFFER,Bt.__webglFramebuffer),N.copy(w.viewport),B.copy(w.scissor),X=w.scissorTest,kt.viewport(N),kt.scissor(B),kt.setScissorTest(X),at=-1;return}else if(Bt.__webglFramebuffer===void 0)$.setupRenderTarget(w);else if(Bt.__hasExternalTextures)$.rebindTextures(w,T.get(w.texture).__webglTexture,T.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const oe=w.depthTexture;if(Bt.__boundDepthTexture!==oe){if(oe!==null&&T.has(oe)&&(w.width!==oe.image.width||w.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(w)}}const Qt=w.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Pt=!0);const ee=T.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ee[K])?ct=ee[K][gt]:ct=ee[K],st=!0):w.samples>0&&$.useMultisampledRTT(w)===!1?ct=T.get(w).__webglMultisampledFramebuffer:Array.isArray(ee)?ct=ee[gt]:ct=ee,N.copy(w.viewport),B.copy(w.scissor),X=w.scissorTest}else N.copy(Z).multiplyScalar(et).floor(),B.copy(V).multiplyScalar(et).floor(),X=ut;if(gt!==0&&(ct=wa),kt.bindFramebuffer(j.FRAMEBUFFER,ct)&&kt.drawBuffers(w,ct),kt.viewport(N),kt.scissor(B),kt.setScissorTest(X),st){const Bt=T.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+K,Bt.__webglTexture,gt)}else if(Pt){const Bt=K;for(let Qt=0;Qt<w.textures.length;Qt++){const ee=T.get(w.textures[Qt]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Qt,ee.__webglTexture,gt,Bt)}}else if(w!==null&&gt!==0){const Bt=T.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Bt.__webglTexture,gt)}at=-1},this.readRenderTargetPixels=function(w,K,gt,ct,st,Pt,Xt,Bt=0){if(!(w&&w.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Xt!==void 0&&(Qt=Qt[Xt]),Qt){kt.bindFramebuffer(j.FRAMEBUFFER,Qt);try{const ee=w.textures[Bt],oe=ee.format,fe=ee.type;if(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Bt),!Ae.textureFormatReadable(oe)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(fe)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=w.width-ct&&gt>=0&&gt<=w.height-st&&j.readPixels(K,gt,ct,st,Lt.convert(oe),Lt.convert(fe),Pt)}finally{const ee=q!==null?T.get(q).__webglFramebuffer:null;kt.bindFramebuffer(j.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(w,K,gt,ct,st,Pt,Xt,Bt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Xt!==void 0&&(Qt=Qt[Xt]),Qt)if(K>=0&&K<=w.width-ct&&gt>=0&&gt<=w.height-st){kt.bindFramebuffer(j.FRAMEBUFFER,Qt);const ee=w.textures[Bt],oe=ee.format,fe=ee.type;if(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Bt),!Ae.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Yt),j.bufferData(j.PIXEL_PACK_BUFFER,Pt.byteLength,j.STREAM_READ),j.readPixels(K,gt,ct,st,Lt.convert(oe),Lt.convert(fe),0);const _e=q!==null?T.get(q).__webglFramebuffer:null;kt.bindFramebuffer(j.FRAMEBUFFER,_e);const Qe=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await XM(j,Qe,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Yt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Pt),j.deleteBuffer(Yt),j.deleteSync(Qe),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,K=null,gt=0){const ct=Math.pow(2,-gt),st=Math.floor(w.image.width*ct),Pt=Math.floor(w.image.height*ct),Xt=K!==null?K.x:0,Bt=K!==null?K.y:0;$.setTexture2D(w,0),j.copyTexSubImage2D(j.TEXTURE_2D,gt,0,0,Xt,Bt,st,Pt),kt.unbindTexture()};const Da=j.createFramebuffer(),fs=j.createFramebuffer();this.copyTextureToTexture=function(w,K,gt=null,ct=null,st=0,Pt=0){let Xt,Bt,Qt,ee,oe,fe,Yt,_e,Qe;const Je=w.isCompressedTexture?w.mipmaps[Pt]:w.image;if(gt!==null)Xt=gt.max.x-gt.min.x,Bt=gt.max.y-gt.min.y,Qt=gt.isBox3?gt.max.z-gt.min.z:1,ee=gt.min.x,oe=gt.min.y,fe=gt.isBox3?gt.min.z:0;else{const on=Math.pow(2,-st);Xt=Math.floor(Je.width*on),Bt=Math.floor(Je.height*on),w.isDataArrayTexture?Qt=Je.depth:w.isData3DTexture?Qt=Math.floor(Je.depth*on):Qt=1,ee=0,oe=0,fe=0}ct!==null?(Yt=ct.x,_e=ct.y,Qe=ct.z):(Yt=0,_e=0,Qe=0);const Oe=Lt.convert(K.format),mn=Lt.convert(K.type);let Kt;K.isData3DTexture?($.setTexture3D(K,0),Kt=j.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?($.setTexture2DArray(K,0),Kt=j.TEXTURE_2D_ARRAY):($.setTexture2D(K,0),Kt=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,K.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,K.unpackAlignment);const zn=j.getParameter(j.UNPACK_ROW_LENGTH),ue=j.getParameter(j.UNPACK_IMAGE_HEIGHT),In=j.getParameter(j.UNPACK_SKIP_PIXELS),Qn=j.getParameter(j.UNPACK_SKIP_ROWS),Ei=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Je.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Je.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,ee),j.pixelStorei(j.UNPACK_SKIP_ROWS,oe),j.pixelStorei(j.UNPACK_SKIP_IMAGES,fe);const Jn=w.isDataArrayTexture||w.isData3DTexture,ze=K.isDataArrayTexture||K.isData3DTexture;if(w.isDepthTexture){const on=T.get(w),Hn=T.get(K),ln=T.get(on.__renderTarget),Ti=T.get(Hn.__renderTarget);kt.bindFramebuffer(j.READ_FRAMEBUFFER,ln.__webglFramebuffer),kt.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let $i=0;$i<Qt;$i++)Jn&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(w).__webglTexture,st,fe+$i),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(K).__webglTexture,Pt,Qe+$i)),j.blitFramebuffer(ee,oe,Xt,Bt,Yt,_e,Xt,Bt,j.DEPTH_BUFFER_BIT,j.NEAREST);kt.bindFramebuffer(j.READ_FRAMEBUFFER,null),kt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(st!==0||w.isRenderTargetTexture||T.has(w)){const on=T.get(w),Hn=T.get(K);kt.bindFramebuffer(j.READ_FRAMEBUFFER,Da),kt.bindFramebuffer(j.DRAW_FRAMEBUFFER,fs);for(let ln=0;ln<Qt;ln++)Jn?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,on.__webglTexture,st,fe+ln):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,on.__webglTexture,st),ze?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Hn.__webglTexture,Pt,Qe+ln):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Hn.__webglTexture,Pt),st!==0?j.blitFramebuffer(ee,oe,Xt,Bt,Yt,_e,Xt,Bt,j.COLOR_BUFFER_BIT,j.NEAREST):ze?j.copyTexSubImage3D(Kt,Pt,Yt,_e,Qe+ln,ee,oe,Xt,Bt):j.copyTexSubImage2D(Kt,Pt,Yt,_e,ee,oe,Xt,Bt);kt.bindFramebuffer(j.READ_FRAMEBUFFER,null),kt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else ze?w.isDataTexture||w.isData3DTexture?j.texSubImage3D(Kt,Pt,Yt,_e,Qe,Xt,Bt,Qt,Oe,mn,Je.data):K.isCompressedArrayTexture?j.compressedTexSubImage3D(Kt,Pt,Yt,_e,Qe,Xt,Bt,Qt,Oe,Je.data):j.texSubImage3D(Kt,Pt,Yt,_e,Qe,Xt,Bt,Qt,Oe,mn,Je):w.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Pt,Yt,_e,Xt,Bt,Oe,mn,Je.data):w.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Pt,Yt,_e,Je.width,Je.height,Oe,Je.data):j.texSubImage2D(j.TEXTURE_2D,Pt,Yt,_e,Xt,Bt,Oe,mn,Je);j.pixelStorei(j.UNPACK_ROW_LENGTH,zn),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ue),j.pixelStorei(j.UNPACK_SKIP_PIXELS,In),j.pixelStorei(j.UNPACK_SKIP_ROWS,Qn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Ei),Pt===0&&K.generateMipmaps&&j.generateMipmap(Kt),kt.unbindTexture()},this.initRenderTarget=function(w){T.get(w).__webglFramebuffer===void 0&&$.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?$.setTextureCube(w,0):w.isData3DTexture?$.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?$.setTexture2DArray(w,0):$.setTexture2D(w,0),kt.unbindTexture()},this.resetState=function(){G=0,Q=0,q=null,kt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const il=400,DR=[.5,.8,.95,.6,.38,.14,.05,.55,.5,.8,.95,.6,.38,.14,.05,.55],kr=3,Dv=Math.PI*.75,Nv=2.6,gh=1.4,al=1.8;function NR({eegData:r,yScale:t,onExit:i}){const s=dt.useRef(null),l=dt.useRef(null),c=dt.useRef(null),d=dt.useRef(null),p=dt.useRef([]),m=dt.useRef(null),h=dt.useRef(null),_=dt.useRef(!1),S=dt.useRef(new Ob),g=dt.useRef(r),M=dt.useRef(t),b=dt.useRef(i);g.current=r,M.current=t,b.current=i;const R=dt.useCallback(()=>{if(_.current)return;_.current=!0,m.current&&(m.current.end().catch(()=>{}),m.current=null),h.current!=null&&(cancelAnimationFrame(h.current),h.current=null);const v=l.current;v&&(v.xr.enabled=!1,v.setAnimationLoop(null),v.dispose(),l.current=null),p.current=[]},[]);return dt.useEffect(()=>{const v=s.current;if(!v)return;_.current=!1;const x=S.current;x.start();const A=new rb;A.background=new ye(198159),A.fog=new Tp(198159,.07),c.current=A;const U=new li(80,window.innerWidth/window.innerHeight,.05,60);U.position.set(0,gh,0),d.current=U;const D=new wR({antialias:!0,alpha:!1});D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.setSize(window.innerWidth,window.innerHeight),D.xr.enabled=!0,D.toneMapping=mp,D.toneMappingExposure=1.2,v.appendChild(D.domElement),l.current=D;const H=new Nb(1122884,.8);A.add(H);const I=new Db(4491519,1.5,25);I.position.set(0,gh+1,0),A.add(I);const z=1500,E=new Float32Array(z*3),O=new Float32Array(z*3);for(let k=0;k<z;k++){const et=10+Math.random()*15,pt=Math.random()*Math.PI*2,bt=Math.acos(2*Math.random()-1);E[k*3]=et*Math.sin(bt)*Math.cos(pt),E[k*3+1]=et*Math.sin(bt)*Math.sin(pt),E[k*3+2]=et*Math.cos(bt),O[k*3]=.7+Math.random()*.3,O[k*3+1]=.75+Math.random()*.25,O[k*3+2]=.85+Math.random()*.15}const mt=new Fn;mt.setAttribute("position",new Ln(E,3)),mt.setAttribute("color",new Ln(O,3));const G=new lp({size:.05,vertexColors:!0,transparent:!0,opacity:.85,sizeAttenuation:!0}),Q=new tv(mt,G);A.add(Q);const at=[{color:4853888,center:[5,2,-10],count:400,spread:5},{color:666208,center:[-6,1,-9],count:350,spread:4},{color:14928,center:[1,4,-12],count:300,spread:4}].map(({color:k,center:et,count:pt,spread:bt})=>{const Z=new Float32Array(pt*3);for(let Ot=0;Ot<pt;Ot++)Z[Ot*3]=et[0]+(Math.random()-.5)*bt,Z[Ot*3+1]=et[1]+(Math.random()-.5)*bt,Z[Ot*3+2]=et[2]+(Math.random()-.5)*bt;const V=new Fn;V.setAttribute("position",new Ln(Z,3));const ut=new lp({color:k,size:.12,transparent:!0,opacity:.16,sizeAttenuation:!0,depthWrite:!1}),Mt=new tv(V,ut);return A.add(Mt),Mt}),tt=[],N=new ye;for(let k=0;k<yn;k++){const et=k/(yn-1),pt=-Dv/2+et*Dv,bt=gh+Nv/2-et*Nv,Z=DR[k],V=new Float32Array(il*3),ut=new Float32Array(il*3),Mt=new Fn;Mt.setAttribute("position",new Ln(V,3)),Mt.setAttribute("color",new Ln(ut,3)),Mt.setDrawRange(0,0);const Ot=new wp({vertexColors:!0,transparent:!0,opacity:.92,linewidth:2}),wt=new ix(Mt,Ot);A.add(wt);const ne=document.createElement("canvas");ne.width=128,ne.height=48;const Ft=ne.getContext("2d");Ft.clearRect(0,0,128,48),N.setHSL(Z,.9,.7),Ft.font="bold 28px monospace",Ft.fillStyle=`#${N.getHexString()}`,Ft.textAlign="center",Ft.textBaseline="middle",Ft.fillText(`Ch ${k+1}`,64,24);const ae=new xb(ne),re=new ex({map:ae,transparent:!0,opacity:.65}),qt=new db(re);qt.scale.set(.4,.15,1);const pe=Math.sin(pt)*(kr+.05),j=-Math.cos(pt)*(kr+.05),Te=pe-Math.cos(pt)*(al/2),me=j+Math.sin(pt)*(al/2);qt.position.set(Te-Math.cos(pt)*.3,bt,me+Math.sin(pt)*.3),A.add(qt);const Ae=new ml(al+.3,.14),kt=new Rp({color:new ye().setHSL(Z,1,.55),transparent:!0,opacity:.05,side:ki,depthWrite:!1}),P=new Ki(Ae,kt);P.position.set(Math.sin(pt)*kr,bt,-Math.cos(pt)*kr),P.rotation.y=pt,A.add(P),tt.push({line:wt,geometry:Mt,positions:V,colors:ut,angle:pt,yPos:bt,glowPlane:P,baseHue:Z})}p.current=tt;const B=new Pb(12,24,660784,396830);A.add(B);function X(k){const et=g.current,pt=et.buffers.current;if(!pt)return;const bt=et.samplesInBuffer.current,Z=et.writeIndex.current,V=et.bufferSize;if(bt<2)return;const ut=bt>il?Math.floor(bt/il):1,Mt=Math.min(il,Math.ceil(bt/ut)),Ot=M.current||100;for(let wt=0;wt<yn;wt++){const{positions:ne,colors:Ft,geometry:ae,angle:re,yPos:qt,glowPlane:pe,baseHue:j}=tt[wt],Te=pt[wt],me=Math.sin(re)*kr,Ae=-Math.cos(re)*kr,kt=-Math.cos(re),P=-Math.sin(re),T=(j+Math.sin(k*.08+wt*.4)*.08+1)%1,$=.85+Math.sin(k*.15+wt)*.1;let St=0;for(let ht=0;ht<Mt;ht++){const Wt=ht*ut,Ut=(Z-bt+Wt+V)%V,Jt=ht/Math.max(1,Mt-1),$t=Te[Ut]/Ot;St+=$t*$t,ne[ht*3]=me+kt*(Jt-.5)*al,ne[ht*3+1]=qt+$t*.14,ne[ht*3+2]=Ae+P*(Jt-.5)*al;const Ct=Math.sin(Jt*Math.PI),Rt=.35+Math.min(Math.abs($t)*3,1)*.65,Ht=Math.min(.95,.5*Ct+Rt*.5);N.setHSL(T,$,Ht),Ft[ht*3]=N.r,Ft[ht*3+1]=N.g,Ft[ht*3+2]=N.b}ae.attributes.position.needsUpdate=!0,ae.attributes.color.needsUpdate=!0,ae.setDrawRange(0,Mt);const At=Math.sqrt(St/Math.max(1,Mt));pe.material.opacity=Math.min(.2,.03+At*.9)}H.intensity=.6+Math.sin(k*.5)*.15,I.intensity=1.2+Math.sin(k*.3)*.4,Q.rotation.y=k*.005,Q.rotation.x=Math.sin(k*.003)*.02,at.forEach((wt,ne)=>{wt.material.opacity=.1+Math.sin(k*.2+ne*2.1)*.06,wt.rotation.y=k*.003*(ne%2===0?1:-1)})}async function nt(){let k=null;if(navigator.xr)for(const et of["immersive-vr","immersive-ar","inline"])try{if(await navigator.xr.isSessionSupported(et)){k=et;break}}catch{}if(k&&k!=="inline")try{const et=await navigator.xr.requestSession(k,{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});m.current=et,D.xr.setSession(et),et.addEventListener("end",()=>{m.current=null,b.current()}),D.setAnimationLoop(()=>{X(x.getElapsedTime()),D.render(A,U)});return}catch{}vt()}function vt(){let k=!1,et=0,pt=0,bt=0,Z=0,V=!0;const ut=D.domElement,Mt=Ft=>{k=!0,V=!1,et=Ft.clientX,pt=Ft.clientY},Ot=()=>{k=!1},wt=Ft=>{k&&(bt-=(Ft.clientX-et)*.003,Z-=(Ft.clientY-pt)*.003,Z=Math.max(-Math.PI/3,Math.min(Math.PI/3,Z)),et=Ft.clientX,pt=Ft.clientY)};ut.addEventListener("pointerdown",Mt),ut.addEventListener("pointerup",Ot),ut.addEventListener("pointermove",wt);function ne(){const Ft=x.getElapsedTime();V&&(bt=Ft*.04),U.rotation.order="YXZ",U.rotation.y=bt,U.rotation.x=Z,X(Ft),D.render(A,U),h.current=requestAnimationFrame(ne)}h.current=requestAnimationFrame(ne)}nt();function F(){l.current&&(U.aspect=window.innerWidth/window.innerHeight,U.updateProjectionMatrix(),D.setSize(window.innerWidth,window.innerHeight))}return window.addEventListener("resize",F),()=>{window.removeEventListener("resize",F),R(),v.contains(D.domElement)&&v.removeChild(D.domElement)}},[]),L.jsxs("div",{className:"xr-overlay",children:[L.jsx("div",{className:"xr-container",ref:s}),L.jsxs("div",{className:"xr-hud",children:[L.jsx("button",{className:"btn xr-exit-btn",onClick:()=>{R(),b.current()},children:"✕ Exit XR"}),L.jsxs("div",{className:"xr-info",children:[L.jsx("span",{className:"xr-badge",children:"WebXR"}),L.jsxs("span",{children:[yn," channels · ±",t," µV"]})]})]})]})}function UR(){const[r,t]=dt.useState(null),[i,s]=dt.useState("idle"),[l,c]=dt.useState(""),[d,p]=dt.useState(!1);if(dt.useEffect(()=>{s("checking"),fetch("/api/update/check").then(_=>_.json()).then(_=>{if(_.error){s("idle");return}t(_),s("idle")}).catch(()=>s("idle"))},[]),d||!(r!=null&&r.update_available)||i==="checking")return null;function m(){s("updating"),c(""),fetch("/api/update/apply",{method:"POST"}).then(_=>_.json()).then(_=>{_.ok?(s("done"),c(_.restart_required?"Update installed! Restart the server to use the new version.":"Update installed!")):(s("error"),c(_.message||"Update failed."))}).catch(_=>{s("error"),c("Network error: "+_.message)})}const h=r.install_method==="git"?"git pull":"pip upgrade";return L.jsx("div",{className:"update-banner",children:L.jsxs("div",{className:"update-banner-content",children:[i==="idle"&&L.jsxs(L.Fragment,{children:[L.jsxs("span",{className:"update-banner-text",children:["Update available: ",L.jsx("strong",{children:r.current_version})," → ",L.jsx("strong",{children:r.latest_version}),L.jsxs("span",{className:"update-method",children:["(",h,")"]})]}),L.jsx("button",{className:"btn update-btn",onClick:m,children:"Update Now"}),L.jsx("button",{className:"update-dismiss",onClick:()=>p(!0),title:"Dismiss",children:"✕"})]}),i==="updating"&&L.jsxs("span",{className:"update-banner-text",children:[L.jsx("span",{className:"update-spinner"})," Updating…"]}),i==="done"&&L.jsxs(L.Fragment,{children:[L.jsx("span",{className:"update-banner-text update-success",children:l}),L.jsx("button",{className:"update-dismiss",onClick:()=>p(!0),title:"Dismiss",children:"✕"})]}),i==="error"&&L.jsxs(L.Fragment,{children:[L.jsx("span",{className:"update-banner-text update-error",children:l}),L.jsx("button",{className:"btn update-btn",onClick:m,children:"Retry"}),L.jsx("button",{className:"update-dismiss",onClick:()=>p(!0),title:"Dismiss",children:"✕"})]})]})})}const Uv=new Set(Array.from({length:yn},(r,t)=>t)),LR=new Set([0,1,2,3]),OR=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],PR=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"},{value:16,label:"16s"}];function FR(){const[r,t]=dt.useState("live"),[i,s]=dt.useState(null),[l,c]=dt.useState(!1),[d,p]=dt.useState(!0),[m,h]=dt.useState(!1),[_,S]=dt.useState(1),[g,M]=dt.useState(40),[b,R]=dt.useState(4),[v,x]=dt.useState(100),[A,U]=dt.useState(null),[D,H]=dt.useState(!1),[I,z]=dt.useState(()=>window.innerWidth<768?new Set(LR):new Set(Uv)),E=Py(b),O=dt.useRef(I);O.current=I;const mt=dt.useCallback(X=>{z(nt=>{const vt=new Set(nt);return vt.has(X)?vt.delete(X):vt.add(X),vt})},[]),G=dt.useCallback(X=>{z(X?new Set(Uv):new Set)},[]);function Q(){const X=!l;c(X),E.setPaused(X)}function q(){const X=!m;h(X),E.sendCommand({cmd:"set_filter",enabled:X,lowcut:parseFloat(String(_))||1,highcut:parseFloat(String(g))||40})}function at(){E.sendCommand({cmd:E.recording?"stop_record":"start_record"})}function tt(X){const nt=Math.floor(X/60),vt=Math.floor(X%60);return`${String(nt).padStart(2,"0")}:${String(vt).padStart(2,"0")}`}function N(X,nt){m&&E.sendCommand({cmd:"set_filter",enabled:!0,lowcut:parseFloat(String(X))||1,highcut:parseFloat(String(nt))||40})}const B=dt.useCallback(X=>{if(!O.current.has(X)){z(nt=>{const vt=new Set(nt);return vt.add(X),vt});return}U(nt=>nt===X?null:X)},[]);return dt.useEffect(()=>{function X(nt){const vt=nt.target.tagName;if(!(vt==="INPUT"||vt==="SELECT"||vt==="TEXTAREA")){if(r!=="live"){nt.code==="Escape"&&(r==="playback"?(t("sessions"),s(null)):r==="sessions"&&t("live"));return}switch(nt.code){case"Space":nt.preventDefault(),Q();break;case"KeyR":at();break;case"KeyF":p(F=>!F);break;case"KeyV":H(F=>!F);break;case"Escape":D?H(!1):A!==null?U(null):E.recordResult&&E.dismissRecordResult();break}}}return window.addEventListener("keydown",X),()=>window.removeEventListener("keydown",X)},[A,E.recordResult,r]),r==="playback"&&i?L.jsx(Nd,{children:L.jsx(lM,{filename:i,onBack:()=>{t("sessions"),s(null)}})}):r==="sessions"?L.jsx(Nd,{children:L.jsx(eM,{onSelect:X=>{s(X),t("playback")},onBack:()=>t("live")})}):(E.data.gridSuspended=A!==null&&I.has(A),L.jsxs(Nd,{children:[L.jsx(UR,{}),L.jsxs("header",{className:"header",children:[L.jsxs("h1",{children:["Pi",L.jsx("span",{children:"EEG"}),"-16"," ",L.jsx("small",{style:{fontWeight:400,color:"var(--text-dim)"},children:"Dashboard"})]}),L.jsxs("div",{className:"status-bar",children:[L.jsxs("span",{children:[L.jsx("span",{className:`status-dot${E.connected?" connected":""}`}),E.connected?" Connected":" Disconnected"]}),L.jsx("span",{className:`live-badge${l?" paused":""}`,children:l?"⏸ PAUSED":"● LIVE"}),L.jsx("span",{children:E.hz?`${E.hz} Hz`:"— Hz"}),L.jsxs("span",{children:[E.sampleCount.toLocaleString()," samples"]})]})]}),L.jsxs("div",{className:"controls",children:[L.jsx("button",{className:`btn${l?" active":""}`,onClick:Q,children:l?"▶ Resume":"⏸ Pause"}),L.jsxs("button",{className:`btn btn-record${E.recording?" recording":""}`,onClick:at,children:[L.jsx("span",{className:"rec-dot"}),E.recording?`⏹ Stop ${tt(E.recordElapsed)}`:"⏺ Record"]}),L.jsxs("button",{className:`btn${m?" active":""}`,onClick:q,children:["Filter: ",m?"ON":"OFF"]}),L.jsxs("button",{className:`btn${d?" active":""}`,onClick:()=>p(X=>!X),children:["FFT ",d?"ON":"OFF"]}),L.jsx("button",{className:"btn btn-sessions",onClick:()=>t("sessions"),children:"Sessions"}),L.jsx("button",{className:"btn btn-xr",onClick:()=>H(!0),title:"Open EEG waves in immersive 3D / VR",children:"🥽 XR View"}),L.jsx("div",{className:"sep"}),L.jsxs("div",{className:"control-group",children:[L.jsx("label",{children:"Low"}),L.jsx("input",{type:"number",value:_,min:.1,max:50,step:.5,onChange:X=>{S(X.target.value),N(X.target.value,g)}})," ","Hz"]}),L.jsxs("div",{className:"control-group",children:[L.jsx("label",{children:"High"}),L.jsx("input",{type:"number",value:g,min:1,max:125,step:1,onChange:X=>{M(X.target.value),N(_,X.target.value)}})," ","Hz"]}),L.jsx("div",{className:"sep"}),L.jsxs("div",{className:"control-group",children:[L.jsx("label",{children:"Time window"}),L.jsx("select",{value:b,onChange:X=>R(parseInt(X.target.value)),children:PR.map(X=>L.jsx("option",{value:X.value,children:X.label},X.value))})]}),L.jsxs("div",{className:"control-group",children:[L.jsx("label",{children:"Scale"}),L.jsx("select",{value:v,onChange:X=>x(parseInt(X.target.value)),children:OR.map(X=>L.jsx("option",{value:X.value,children:X.label},X.value))})]})]}),L.jsxs("div",{className:"channel-selector",children:[L.jsx("span",{className:"cs-label",children:"Channels"}),L.jsx("button",{className:"cs-toggle",onClick:()=>G(!0),children:"All"}),L.jsx("button",{className:"cs-toggle",onClick:()=>G(!1),children:"None"}),L.jsx("div",{className:"cs-grid",children:Array.from({length:yn},(X,nt)=>L.jsx("button",{className:`cs-ch${I.has(nt)?" on":""}`,onClick:()=>mt(nt),children:nt+1},nt))}),L.jsxs("span",{className:"cs-count",children:[I.size,"/",yn]})]}),L.jsxs("div",{className:`main-area${d?" with-fft":""}`,children:[A!==null&&I.has(A)&&L.jsx(Yy,{chIdx:A,eegData:E.data,yRange:v,onClose:()=>U(null)}),L.jsx("div",{className:"grid",children:Array.from({length:yn},(X,nt)=>L.jsx(Hy,{chIdx:nt,eegData:E.data,yRange:v,active:I.has(nt),onToggleExpand:()=>B(nt)},nt))}),d&&L.jsx($y,{eegData:E.data})]}),E.recordResult&&L.jsx("div",{className:"modal-overlay",children:L.jsxs("div",{className:"modal-card",children:[L.jsx("h2",{children:"Recording Complete"}),L.jsxs("div",{className:"modal-details",children:[L.jsxs("div",{className:"modal-row",children:[L.jsx("span",{className:"modal-label",children:"File"}),L.jsx("span",{className:"modal-value",children:E.recordResult.filename})]}),L.jsxs("div",{className:"modal-row",children:[L.jsx("span",{className:"modal-label",children:"Duration"}),L.jsx("span",{className:"modal-value",children:tt(E.recordResult.duration)})]}),L.jsxs("div",{className:"modal-row",children:[L.jsx("span",{className:"modal-label",children:"Frames"}),L.jsx("span",{className:"modal-value",children:E.recordResult.frames.toLocaleString()})]}),L.jsxs("div",{className:"modal-row",children:[L.jsx("span",{className:"modal-label",children:"Saved to"}),L.jsx("span",{className:"modal-value modal-path",children:E.recordResult.path})]})]}),L.jsxs("div",{className:"modal-actions",children:[L.jsx("a",{className:"btn modal-btn-download",href:E.recordResult.downloadUrl,download:!0,children:"Download CSV"}),L.jsx("button",{className:"btn modal-btn-view",onClick:()=>{const X=E.recordResult.filename;E.dismissRecordResult(),s(X),t("playback")},children:"View Session"}),L.jsx("button",{className:"btn modal-btn-dismiss",onClick:E.dismissRecordResult,children:"Dismiss"})]})]})}),D&&L.jsx(NR,{eegData:E.data,yScale:v,onExit:()=>H(!1)}),L.jsx(tM,{}),L.jsxs("footer",{className:"footer",children:[L.jsx("span",{children:"PiEEG-16-server · React Dashboard"}),L.jsxs("span",{className:"kbd-hints",children:[L.jsx("kbd",{children:"Space"})," Pause ",L.jsx("kbd",{children:"R"})," Record ",L.jsx("kbd",{children:"F"})," FFT ",L.jsx("kbd",{children:"V"})," XR ",L.jsx("kbd",{children:"Esc"})," Close ",L.jsx("kbd",{children:"P"})," Perf"]}),L.jsx("span",{children:"Battery powered only · Not a medical device"})]})]}))}Ly.createRoot(document.getElementById("root")).render(L.jsx(Ty.StrictMode,{children:L.jsx(FR,{})}));
