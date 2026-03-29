var Yy=Object.defineProperty;var Zy=(r,e,i)=>e in r?Yy(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i;var wi=(r,e,i)=>Zy(r,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function ix(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function ZC(r){if(Object.prototype.hasOwnProperty.call(r,"__esModule"))return r;var e=r.default;if(typeof e=="function"){var i=function s(){return this instanceof s?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};i.prototype=e.prototype}else i={};return Object.defineProperty(i,"__esModule",{value:!0}),Object.keys(r).forEach(function(s){var l=Object.getOwnPropertyDescriptor(r,s);Object.defineProperty(i,s,l.get?l:{enumerable:!0,get:function(){return r[s]}})}),i}var Id={exports:{}},Zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv;function Ky(){if(yv)return Zo;yv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Zo.Fragment=e,Zo.jsx=i,Zo.jsxs=i,Zo}var Mv;function Qy(){return Mv||(Mv=1,Id.exports=Ky()),Id.exports}var b=Qy(),Bd={exports:{}},gt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv;function Jy(){if(bv)return gt;bv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function y(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,_={};function S(I,j,ne){this.props=I,this.context=j,this.refs=_,this.updater=ne||M}S.prototype.isReactComponent={},S.prototype.setState=function(I,j){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,j,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function R(){}R.prototype=S.prototype;function w(I,j,ne){this.props=I,this.context=j,this.refs=_,this.updater=ne||M}var N=w.prototype=new R;N.constructor=w,A(N,S.prototype),N.isPureReactComponent=!0;var H=Array.isArray;function L(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function O(I,j,ne){var W=ne.ref;return{$$typeof:r,type:I,key:j,ref:W!==void 0?W:null,props:ne}}function J(I,j){return O(I.type,j,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function q(I){var j={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(ne){return j[ne]})}var K=/\/+/g;function Y(I,j){return typeof I=="object"&&I!==null&&I.key!=null?q(""+I.key):j.toString(36)}function ae(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(L,L):(I.status="pending",I.then(function(j){I.status==="pending"&&(I.status="fulfilled",I.value=j)},function(j){I.status==="pending"&&(I.status="rejected",I.reason=j)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function D(I,j,ne,W,re){var X=typeof I;(X==="undefined"||X==="boolean")&&(I=null);var ee=!1;if(I===null)ee=!0;else switch(X){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(I.$$typeof){case r:case e:ee=!0;break;case x:return ee=I._init,D(ee(I._payload),j,ne,W,re)}}if(ee)return re=re(I),ee=W===""?"."+Y(I,0):W,H(re)?(ne="",ee!=null&&(ne=ee.replace(K,"$&/")+"/"),D(re,j,ne,"",function(be){return be})):re!=null&&(G(re)&&(re=J(re,ne+(re.key==null||I&&I.key===re.key?"":(""+re.key).replace(K,"$&/")+"/")+ee)),j.push(re)),1;ee=0;var ge=W===""?".":W+":";if(H(I))for(var Q=0;Q<I.length;Q++)W=I[Q],X=ge+Y(W,Q),ee+=D(W,j,ne,X,re);else if(Q=y(I),typeof Q=="function")for(I=Q.call(I),Q=0;!(W=I.next()).done;)W=W.value,X=ge+Y(W,Q++),ee+=D(W,j,ne,X,re);else if(X==="object"){if(typeof I.then=="function")return D(ae(I),j,ne,W,re);throw j=String(I),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return ee}function z(I,j,ne){if(I==null)return I;var W=[],re=0;return D(I,W,"","",function(X){return j.call(ne,X,re++)}),W}function te(I){if(I._status===-1){var j=I._result;j=j(),j.then(function(ne){(I._status===0||I._status===-1)&&(I._status=1,I._result=ne)},function(ne){(I._status===0||I._status===-1)&&(I._status=2,I._result=ne)}),I._status===-1&&(I._status=0,I._result=j)}if(I._status===1)return I._result.default;throw I._result}var le=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},_e={map:z,forEach:function(I,j,ne){z(I,function(){j.apply(this,arguments)},ne)},count:function(I){var j=0;return z(I,function(){j++}),j},toArray:function(I){return z(I,function(j){return j})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return gt.Activity=g,gt.Children=_e,gt.Component=S,gt.Fragment=i,gt.Profiler=l,gt.PureComponent=w,gt.StrictMode=s,gt.Suspense=m,gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,gt.__COMPILER_RUNTIME={__proto__:null,c:function(I){return F.H.useMemoCache(I)}},gt.cache=function(I){return function(){return I.apply(null,arguments)}},gt.cacheSignal=function(){return null},gt.cloneElement=function(I,j,ne){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var W=A({},I.props),re=I.key;if(j!=null)for(X in j.key!==void 0&&(re=""+j.key),j)!T.call(j,X)||X==="key"||X==="__self"||X==="__source"||X==="ref"&&j.ref===void 0||(W[X]=j[X]);var X=arguments.length-2;if(X===1)W.children=ne;else if(1<X){for(var ee=Array(X),ge=0;ge<X;ge++)ee[ge]=arguments[ge+2];W.children=ee}return O(I.type,re,W)},gt.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},gt.createElement=function(I,j,ne){var W,re={},X=null;if(j!=null)for(W in j.key!==void 0&&(X=""+j.key),j)T.call(j,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(re[W]=j[W]);var ee=arguments.length-2;if(ee===1)re.children=ne;else if(1<ee){for(var ge=Array(ee),Q=0;Q<ee;Q++)ge[Q]=arguments[Q+2];re.children=ge}if(I&&I.defaultProps)for(W in ee=I.defaultProps,ee)re[W]===void 0&&(re[W]=ee[W]);return O(I,X,re)},gt.createRef=function(){return{current:null}},gt.forwardRef=function(I){return{$$typeof:h,render:I}},gt.isValidElement=G,gt.lazy=function(I){return{$$typeof:x,_payload:{_status:-1,_result:I},_init:te}},gt.memo=function(I,j){return{$$typeof:p,type:I,compare:j===void 0?null:j}},gt.startTransition=function(I){var j=F.T,ne={};F.T=ne;try{var W=I(),re=F.S;re!==null&&re(ne,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(L,le)}catch(X){le(X)}finally{j!==null&&ne.types!==null&&(j.types=ne.types),F.T=j}},gt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},gt.use=function(I){return F.H.use(I)},gt.useActionState=function(I,j,ne){return F.H.useActionState(I,j,ne)},gt.useCallback=function(I,j){return F.H.useCallback(I,j)},gt.useContext=function(I){return F.H.useContext(I)},gt.useDebugValue=function(){},gt.useDeferredValue=function(I,j){return F.H.useDeferredValue(I,j)},gt.useEffect=function(I,j){return F.H.useEffect(I,j)},gt.useEffectEvent=function(I){return F.H.useEffectEvent(I)},gt.useId=function(){return F.H.useId()},gt.useImperativeHandle=function(I,j,ne){return F.H.useImperativeHandle(I,j,ne)},gt.useInsertionEffect=function(I,j){return F.H.useInsertionEffect(I,j)},gt.useLayoutEffect=function(I,j){return F.H.useLayoutEffect(I,j)},gt.useMemo=function(I,j){return F.H.useMemo(I,j)},gt.useOptimistic=function(I,j){return F.H.useOptimistic(I,j)},gt.useReducer=function(I,j,ne){return F.H.useReducer(I,j,ne)},gt.useRef=function(I){return F.H.useRef(I)},gt.useState=function(I){return F.H.useState(I)},gt.useSyncExternalStore=function(I,j,ne){return F.H.useSyncExternalStore(I,j,ne)},gt.useTransition=function(){return F.H.useTransition()},gt.version="19.2.4",gt}var Ev;function Ap(){return Ev||(Ev=1,Bd.exports=Jy()),Bd.exports}var V=Ap();const $y=ix(V);var zd={exports:{}},Ko={},Hd={exports:{}},Gd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function eM(){return Tv||(Tv=1,(function(r){function e(D,z){var te=D.length;D.push(z);e:for(;0<te;){var le=te-1>>>1,_e=D[le];if(0<l(_e,z))D[le]=z,D[te]=_e,te=le;else break e}}function i(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var z=D[0],te=D.pop();if(te!==z){D[0]=te;e:for(var le=0,_e=D.length,I=_e>>>1;le<I;){var j=2*(le+1)-1,ne=D[j],W=j+1,re=D[W];if(0>l(ne,te))W<_e&&0>l(re,ne)?(D[le]=re,D[W]=te,le=W):(D[le]=ne,D[j]=te,le=j);else if(W<_e&&0>l(re,te))D[le]=re,D[W]=te,le=W;else break e}}return z}function l(D,z){var te=D.sortIndex-z.sortIndex;return te!==0?te:D.id-z.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],x=1,g=null,v=3,y=!1,M=!1,A=!1,_=!1,S=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function N(D){for(var z=i(p);z!==null;){if(z.callback===null)s(p);else if(z.startTime<=D)s(p),z.sortIndex=z.expirationTime,e(m,z);else break;z=i(p)}}function H(D){if(A=!1,N(D),!M)if(i(m)!==null)M=!0,L||(L=!0,q());else{var z=i(p);z!==null&&ae(H,z.startTime-D)}}var L=!1,F=-1,T=5,O=-1;function J(){return _?!0:!(r.unstable_now()-O<T)}function G(){if(_=!1,L){var D=r.unstable_now();O=D;var z=!0;try{e:{M=!1,A&&(A=!1,R(F),F=-1),y=!0;var te=v;try{t:{for(N(D),g=i(m);g!==null&&!(g.expirationTime>D&&J());){var le=g.callback;if(typeof le=="function"){g.callback=null,v=g.priorityLevel;var _e=le(g.expirationTime<=D);if(D=r.unstable_now(),typeof _e=="function"){g.callback=_e,N(D),z=!0;break t}g===i(m)&&s(m),N(D)}else s(m);g=i(m)}if(g!==null)z=!0;else{var I=i(p);I!==null&&ae(H,I.startTime-D),z=!1}}break e}finally{g=null,v=te,y=!1}z=void 0}}finally{z?q():L=!1}}}var q;if(typeof w=="function")q=function(){w(G)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,Y=K.port2;K.port1.onmessage=G,q=function(){Y.postMessage(null)}}else q=function(){S(G,0)};function ae(D,z){F=S(function(){D(r.unstable_now())},z)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(D){D.callback=null},r.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<D?Math.floor(1e3/D):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(D){switch(v){case 1:case 2:case 3:var z=3;break;default:z=v}var te=v;v=z;try{return D()}finally{v=te}},r.unstable_requestPaint=function(){_=!0},r.unstable_runWithPriority=function(D,z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var te=v;v=D;try{return z()}finally{v=te}},r.unstable_scheduleCallback=function(D,z,te){var le=r.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?le+te:le):te=le,D){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=te+_e,D={id:x++,callback:z,priorityLevel:D,startTime:te,expirationTime:_e,sortIndex:-1},te>le?(D.sortIndex=te,e(p,D),i(m)===null&&D===i(p)&&(A?(R(F),F=-1):A=!0,ae(H,te-le))):(D.sortIndex=_e,e(m,D),M||y||(M=!0,L||(L=!0,q()))),D},r.unstable_shouldYield=J,r.unstable_wrapCallback=function(D){var z=v;return function(){var te=v;v=z;try{return D.apply(this,arguments)}finally{v=te}}}})(Gd)),Gd}var Av;function tM(){return Av||(Av=1,Hd.exports=eM()),Hd.exports}var Vd={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rv;function nM(){if(Rv)return Nn;Rv=1;var r=Ap();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Nn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,x)},Nn.flushSync=function(m){var p=f.T,x=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=x,s.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:y}):x==="script"&&s.d.X(m,{crossOrigin:g,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Nn.requestFormReset=function(m){s.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,x){return f.H.useFormState(m,p,x)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.2.4",Nn}var Cv;function iM(){if(Cv)return Vd.exports;Cv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Vd.exports=nM(),Vd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wv;function aM(){if(wv)return Ko;wv=1;var r=tM(),e=Ap(),i=iM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var E=!1,U=u.child;U;){if(U===a){E=!0,a=u,o=d;break}if(U===o){E=!0,o=u,a=d;break}U=U.sibling}if(!E){for(U=d.child;U;){if(U===a){E=!0,a=d,o=u;break}if(U===o){E=!0,o=d,a=u;break}U=U.sibling}if(!E)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),w=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),J=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function q(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var K=Symbol.for("react.client.reference");function Y(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===K?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case S:return"Profiler";case _:return"StrictMode";case H:return"Suspense";case L:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case w:return t.displayName||"Context";case R:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:Y(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return Y(t(n))}catch{}}return null}var ae=Array.isArray,D=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},le=[],_e=-1;function I(t){return{current:t}}function j(t){0>_e||(t.current=le[_e],le[_e]=null,_e--)}function ne(t,n){_e++,le[_e]=t.current,t.current=n}var W=I(null),re=I(null),X=I(null),ee=I(null);function ge(t,n){switch(ne(X,n),ne(re,t),ne(W,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?jg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=jg(n),t=Xg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}j(W),ne(W,t)}function Q(){j(W),j(re),j(X)}function be(t){t.memoizedState!==null&&ne(ee,t);var n=W.current,a=Xg(n,t.type);n!==a&&(ne(re,t),ne(W,a))}function Re(t){re.current===t&&(j(W),j(re)),ee.current===t&&(j(ee),Xo._currentValue=te)}var ze,Ue;function we(t){if(ze===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ze=n&&n[1]||"",Ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ze+t+Ue}var Be=!1;function Fe(t,n){if(!t||Be)return"";Be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Ce=function(){throw Error()};if(Object.defineProperty(Ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ce,[])}catch(Se){var me=Se}Reflect.construct(t,[],Ce)}else{try{Ce.call()}catch(Se){me=Se}t.call(Ce.prototype)}}else{try{throw Error()}catch(Se){me=Se}(Ce=t())&&typeof Ce.catch=="function"&&Ce.catch(function(){})}}catch(Se){if(Se&&me&&typeof Se.stack=="string")return[Se.stack,me.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),E=d[0],U=d[1];if(E&&U){var Z=E.split(`
`),he=U.split(`
`);for(u=o=0;o<Z.length&&!Z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<he.length&&!he[u].includes("DetermineComponentFrameRoot");)u++;if(o===Z.length||u===he.length)for(o=Z.length-1,u=he.length-1;1<=o&&0<=u&&Z[o]!==he[u];)u--;for(;1<=o&&0<=u;o--,u--)if(Z[o]!==he[u]){if(o!==1||u!==1)do if(o--,u--,0>u||Z[o]!==he[u]){var Ee=`
`+Z[o].replace(" at new "," at ");return t.displayName&&Ee.includes("<anonymous>")&&(Ee=Ee.replace("<anonymous>",t.displayName)),Ee}while(1<=o&&0<=u);break}}}finally{Be=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?we(a):""}function qe(t,n){switch(t.tag){case 26:case 27:case 5:return we(t.type);case 16:return we("Lazy");case 13:return t.child!==n&&n!==null?we("Suspense Fallback"):we("Suspense");case 19:return we("SuspenseList");case 0:case 15:return Fe(t.type,!1);case 11:return Fe(t.type.render,!1);case 1:return Fe(t.type,!0);case 31:return we("Activity");default:return""}}function k(t){try{var n="",a=null;do n+=qe(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var st=Object.prototype.hasOwnProperty,rt=r.unstable_scheduleCallback,lt=r.unstable_cancelCallback,He=r.unstable_shouldYield,B=r.unstable_requestPaint,C=r.unstable_now,$=r.unstable_getCurrentPriorityLevel,ye=r.unstable_ImmediatePriority,Te=r.unstable_UserBlockingPriority,ve=r.unstable_NormalPriority,je=r.unstable_LowPriority,Oe=r.unstable_IdlePriority,Ye=r.log,nt=r.unstable_setDisableYieldValue,Ne=null,De=null;function Xe(t){if(typeof Ye=="function"&&nt(t),De&&typeof De.setStrictMode=="function")try{De.setStrictMode(Ne,t)}catch{}}var Ve=Math.clz32?Math.clz32:oe,Ze=Math.log,_t=Math.LN2;function oe(t){return t>>>=0,t===0?32:31-(Ze(t)/_t|0)|0}var Ie=256,Pe=262144,Ke=4194304;function Le(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Me(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var U=o&134217727;return U!==0?(o=U&~d,o!==0?u=Le(o):(E&=U,E!==0?u=Le(E):a||(a=U&~t,a!==0&&(u=Le(a))))):(U=o&~d,U!==0?u=Le(U):E!==0?u=Le(E):a||(a=o&~t,a!==0&&(u=Le(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Je(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ht(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gt(){var t=Ke;return Ke<<=1,(Ke&62914560)===0&&(Ke=4194304),t}function Ut(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function In(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Mi(t,n,a,o,u,d){var E=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var U=t.entanglements,Z=t.expirationTimes,he=t.hiddenUpdates;for(a=E&~a;0<a;){var Ee=31-Ve(a),Ce=1<<Ee;U[Ee]=0,Z[Ee]=-1;var me=he[Ee];if(me!==null)for(he[Ee]=null,Ee=0;Ee<me.length;Ee++){var Se=me[Ee];Se!==null&&(Se.lane&=-536870913)}a&=~Ce}o!==0&&so(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(E&~n))}function so(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ve(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Ws(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ve(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Ml(t,n){var a=n&-n;return a=(a&42)!==0?1:qs(a),(a&(t.suspendedLanes|n))!==0?0:a}function qs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ys(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Fi(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:pv(t.type))}function Zs(t,n){var a=z.p;try{return z.p=t,n()}finally{z.p=a}}var bi=Math.random().toString(36).slice(2),cn="__reactFiber$"+bi,vn="__reactProps$"+bi,$i="__reactContainer$"+bi,wa="__reactEvents$"+bi,bl="__reactListeners$"+bi,El="__reactHandles$"+bi,Tl="__reactResources$"+bi,ps="__reactMarker$"+bi;function ro(t){delete t[cn],delete t[vn],delete t[wa],delete t[bl],delete t[El]}function Na(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[$i]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Jg(t);t!==null;){if(a=t[cn])return a;t=Jg(t)}return n}t=a,a=t.parentNode}return null}function Da(t){if(t=t[cn]||t[$i]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ms(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function P(t){var n=t[Tl];return n||(n=t[Tl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function se(t){t[ps]=!0}var xe=new Set,pe={};function ue(t,n){Ge(t,n),Ge(t+"Capture",n)}function Ge(t,n){for(pe[t]=n,t=0;t<n.length;t++)xe.add(n[t])}var Qe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ke={},it={};function ot(t){return st.call(it,t)?!0:st.call(ke,t)?!1:Qe.test(t)?it[t]=!0:(ke[t]=!0,!1)}function ft(t,n,a){if(ot(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function mt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function $e(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function xt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $t(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function en(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(E){a=""+E,d.call(this,E)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(E){a=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ft(t){if(!t._valueTracker){var n=$t(t)?"checked":"value";t._valueTracker=en(t,n,""+t[n])}}function _n(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=$t(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function tt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Bn=/[\n"\\]/g;function pt(t){return t.replace(Bn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zn(t,n,a,o,u,d,E,U){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),n!=null?E==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+xt(n)):t.value!==""+xt(n)&&(t.value=""+xt(n)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),n!=null?Ei(t,E,xt(n)):a!=null?Ei(t,E,xt(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?t.name=""+xt(U):t.removeAttribute("name")}function Qn(t,n,a,o,u,d,E,U){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ft(t);return}a=a!=null?""+xt(a):"",n=n!=null?""+xt(n):a,U||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=U?t.checked:!!o,t.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E),Ft(t)}function Ei(t,n,a){n==="number"&&tt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Jn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+xt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ht(t,n,a){if(n!=null&&(n=""+xt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+xt(a):""}function un(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ae(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=xt(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Ft(t)}function Hn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var fn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ti(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||fn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function ea(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ti(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Ti(t,d,n[d])}function Ks(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Al(t){return Xx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ta(){}var Lu=null;function Ou(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qs=null,Js=null;function kp(t){var n=Da(t);if(n&&(t=n.stateNode)){var a=t[vn]||null;e:switch(t=n.stateNode,n.type){case"input":if(zn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[vn]||null;if(!u)throw Error(s(90));zn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&_n(o)}break e;case"textarea":Ht(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Jn(t,!!a.multiple,n,!1)}}}var Pu=!1;function jp(t,n,a){if(Pu)return t(n,a);Pu=!0;try{var o=t(n);return o}finally{if(Pu=!1,(Qs!==null||Js!==null)&&(hc(),Qs&&(n=Qs,t=Js,Js=Qs=null,kp(n),t)))for(n=0;n<t.length;n++)kp(t[n])}}function oo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[vn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=!1;if(na)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Fu=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Fu=!1}var Ua=null,Iu=null,Rl=null;function Xp(){if(Rl)return Rl;var t,n=Iu,a=n.length,o,u="value"in Ua?Ua.value:Ua.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var E=a-t;for(o=1;o<=E&&n[a-o]===u[d-o];o++);return Rl=u.slice(t,1<o?1-o:void 0)}function Cl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function wl(){return!0}function Wp(){return!1}function jn(t){function n(a,o,u,d,E){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(a=t[U],this[U]=a?a(d):d[U]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?wl:Wp,this.isPropagationStopped=Wp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),n}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nl=jn(gs),co=g({},gs,{view:0,detail:0}),Wx=jn(co),Bu,zu,uo,Dl=g({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(Bu=t.screenX-uo.screenX,zu=t.screenY-uo.screenY):zu=Bu=0,uo=t),Bu)},movementY:function(t){return"movementY"in t?t.movementY:zu}}),qp=jn(Dl),qx=g({},Dl,{dataTransfer:0}),Yx=jn(qx),Zx=g({},co,{relatedTarget:0}),Hu=jn(Zx),Kx=g({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),Qx=jn(Kx),Jx=g({},gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$x=jn(Jx),eS=g({},gs,{data:0}),Yp=jn(eS),tS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=iS[t])?!!n[t]:!1}function Gu(){return aS}var sS=g({},co,{key:function(t){if(t.key){var n=tS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gu,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rS=jn(sS),oS=g({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zp=jn(oS),lS=g({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gu}),cS=jn(lS),uS=g({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),fS=jn(uS),dS=g({},Dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hS=jn(dS),pS=g({},gs,{newState:0,oldState:0}),mS=jn(pS),gS=[9,13,27,32],Vu=na&&"CompositionEvent"in window,fo=null;na&&"documentMode"in document&&(fo=document.documentMode);var vS=na&&"TextEvent"in window&&!fo,Kp=na&&(!Vu||fo&&8<fo&&11>=fo),Qp=" ",Jp=!1;function $p(t,n){switch(t){case"keyup":return gS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function em(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $s=!1;function _S(t,n){switch(t){case"compositionend":return em(n);case"keypress":return n.which!==32?null:(Jp=!0,Qp);case"textInput":return t=n.data,t===Qp&&Jp?null:t;default:return null}}function xS(t,n){if($s)return t==="compositionend"||!Vu&&$p(t,n)?(t=Xp(),Rl=Iu=Ua=null,$s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Kp&&n.locale!=="ko"?null:n.data;default:return null}}var SS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!SS[t.type]:n==="textarea"}function nm(t,n,a,o){Qs?Js?Js.push(o):Js=[o]:Qs=o,n=Sc(n,"onChange"),0<n.length&&(a=new Nl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var ho=null,po=null;function yS(t){Bg(t,0)}function Ul(t){var n=ms(t);if(_n(n))return t}function im(t,n){if(t==="change")return n}var am=!1;if(na){var ku;if(na){var ju="oninput"in document;if(!ju){var sm=document.createElement("div");sm.setAttribute("oninput","return;"),ju=typeof sm.oninput=="function"}ku=ju}else ku=!1;am=ku&&(!document.documentMode||9<document.documentMode)}function rm(){ho&&(ho.detachEvent("onpropertychange",om),po=ho=null)}function om(t){if(t.propertyName==="value"&&Ul(po)){var n=[];nm(n,po,t,Ou(t)),jp(yS,n)}}function MS(t,n,a){t==="focusin"?(rm(),ho=n,po=a,ho.attachEvent("onpropertychange",om)):t==="focusout"&&rm()}function bS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ul(po)}function ES(t,n){if(t==="click")return Ul(n)}function TS(t,n){if(t==="input"||t==="change")return Ul(n)}function AS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $n=typeof Object.is=="function"?Object.is:AS;function mo(t,n){if($n(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!st.call(n,u)||!$n(t[u],n[u]))return!1}return!0}function lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cm(t,n){var a=lm(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=lm(a)}}function um(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?um(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function fm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=tt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=tt(t.document)}return n}function Xu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var RS=na&&"documentMode"in document&&11>=document.documentMode,er=null,Wu=null,go=null,qu=!1;function dm(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qu||er==null||er!==tt(o)||(o=er,"selectionStart"in o&&Xu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),go&&mo(go,o)||(go=o,o=Sc(Wu,"onSelect"),0<o.length&&(n=new Nl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=er)))}function vs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var tr={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionrun:vs("Transition","TransitionRun"),transitionstart:vs("Transition","TransitionStart"),transitioncancel:vs("Transition","TransitionCancel"),transitionend:vs("Transition","TransitionEnd")},Yu={},hm={};na&&(hm=document.createElement("div").style,"AnimationEvent"in window||(delete tr.animationend.animation,delete tr.animationiteration.animation,delete tr.animationstart.animation),"TransitionEvent"in window||delete tr.transitionend.transition);function _s(t){if(Yu[t])return Yu[t];if(!tr[t])return t;var n=tr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in hm)return Yu[t]=n[a];return t}var pm=_s("animationend"),mm=_s("animationiteration"),gm=_s("animationstart"),CS=_s("transitionrun"),wS=_s("transitionstart"),NS=_s("transitioncancel"),vm=_s("transitionend"),_m=new Map,Zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zu.push("scrollEnd");function Ai(t,n){_m.set(t,n),ue(n,[t])}var Ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fi=[],nr=0,Ku=0;function Ol(){for(var t=nr,n=Ku=nr=0;n<t;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var d=fi[n];if(fi[n++]=null,o!==null&&u!==null){var E=o.pending;E===null?u.next=u:(u.next=E.next,E.next=u),o.pending=u}d!==0&&xm(a,u,d)}}function Pl(t,n,a,o){fi[nr++]=t,fi[nr++]=n,fi[nr++]=a,fi[nr++]=o,Ku|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Qu(t,n,a,o){return Pl(t,n,a,o),Fl(t)}function xs(t,n){return Pl(t,null,null,n),Fl(t)}function xm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Ve(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Fl(t){if(50<Bo)throw Bo=0,od=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ir={};function DS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,n,a,o){return new DS(t,n,a,o)}function Ju(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ia(t,n){var a=t.alternate;return a===null?(a=ei(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Sm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Il(t,n,a,o,u,d){var E=0;if(o=t,typeof t=="function")Ju(t)&&(E=1);else if(typeof t=="string")E=Fy(t,a,W.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=ei(31,a,n,u),t.elementType=O,t.lanes=d,t;case A:return Ss(a.children,u,d,n);case _:E=8,u|=24;break;case S:return t=ei(12,a,n,u|2),t.elementType=S,t.lanes=d,t;case H:return t=ei(13,a,n,u),t.elementType=H,t.lanes=d,t;case L:return t=ei(19,a,n,u),t.elementType=L,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:E=10;break e;case R:E=9;break e;case N:E=11;break e;case F:E=14;break e;case T:E=16,o=null;break e}E=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ei(E,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function Ss(t,n,a,o){return t=ei(7,t,o,n),t.lanes=a,t}function $u(t,n,a){return t=ei(6,t,null,n),t.lanes=a,t}function ym(t){var n=ei(18,null,null,0);return n.stateNode=t,n}function ef(t,n,a){return n=ei(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Mm=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var a=Mm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:k(n)},Mm.set(t,n),n)}return{value:t,source:n,stack:k(n)}}var ar=[],sr=0,Bl=null,vo=0,hi=[],pi=0,La=null,Ii=1,Bi="";function aa(t,n){ar[sr++]=vo,ar[sr++]=Bl,Bl=t,vo=n}function bm(t,n,a){hi[pi++]=Ii,hi[pi++]=Bi,hi[pi++]=La,La=t;var o=Ii;t=Bi;var u=32-Ve(o)-1;o&=~(1<<u),a+=1;var d=32-Ve(n)+u;if(30<d){var E=u-u%5;d=(o&(1<<E)-1).toString(32),o>>=E,u-=E,Ii=1<<32-Ve(n)+u|a<<u|o,Bi=d+t}else Ii=1<<d|a<<u|o,Bi=t}function tf(t){t.return!==null&&(aa(t,1),bm(t,1,0))}function nf(t){for(;t===Bl;)Bl=ar[--sr],ar[sr]=null,vo=ar[--sr],ar[sr]=null;for(;t===La;)La=hi[--pi],hi[pi]=null,Bi=hi[--pi],hi[pi]=null,Ii=hi[--pi],hi[pi]=null}function Em(t,n){hi[pi++]=Ii,hi[pi++]=Bi,hi[pi++]=La,Ii=n.id,Bi=n.overflow,La=t}var En=null,Kt=null,Nt=!1,Oa=null,mi=!1,af=Error(s(519));function Pa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _o(di(n,t)),af}function Tm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[cn]=t,n[vn]=o,a){case"dialog":Tt("cancel",n),Tt("close",n);break;case"iframe":case"object":case"embed":Tt("load",n);break;case"video":case"audio":for(a=0;a<Ho.length;a++)Tt(Ho[a],n);break;case"source":Tt("error",n);break;case"img":case"image":case"link":Tt("error",n),Tt("load",n);break;case"details":Tt("toggle",n);break;case"input":Tt("invalid",n),Qn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Tt("invalid",n);break;case"textarea":Tt("invalid",n),un(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Vg(n.textContent,a)?(o.popover!=null&&(Tt("beforetoggle",n),Tt("toggle",n)),o.onScroll!=null&&Tt("scroll",n),o.onScrollEnd!=null&&Tt("scrollend",n),o.onClick!=null&&(n.onclick=ta),n=!0):n=!1,n||Pa(t,!0)}function Am(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:En=En.return}}function rr(t){if(t!==En)return!1;if(!Nt)return Am(t),Nt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Md(t.type,t.memoizedProps)),a=!a),a&&Kt&&Pa(t),Am(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Kt=Qg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Kt=Qg(t)}else n===27?(n=Kt,Za(t.type)?(t=Rd,Rd=null,Kt=t):Kt=n):Kt=En?vi(t.stateNode.nextSibling):null;return!0}function ys(){Kt=En=null,Nt=!1}function sf(){var t=Oa;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),Oa=null),t}function _o(t){Oa===null?Oa=[t]:Oa.push(t)}var rf=I(null),Ms=null,sa=null;function Fa(t,n,a){ne(rf,n._currentValue),n._currentValue=a}function ra(t){t._currentValue=rf.current,j(rf)}function of(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function lf(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var E=u.child;d=d.firstContext;e:for(;d!==null;){var U=d;d=u;for(var Z=0;Z<n.length;Z++)if(U.context===n[Z]){d.lanes|=a,U=d.alternate,U!==null&&(U.lanes|=a),of(d.return,a,t),o||(E=null);break e}d=U.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(s(341));E.lanes|=a,d=E.alternate,d!==null&&(d.lanes|=a),of(E,a,t),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===t){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function or(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var U=u.type;$n(u.pendingProps.value,E.value)||(t!==null?t.push(U):t=[U])}}else if(u===ee.current){if(E=u.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Xo):t=[Xo])}u=u.return}t!==null&&lf(n,t,a,o),n.flags|=262144}function zl(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function bs(t){Ms=t,sa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return Rm(Ms,t)}function Hl(t,n){return Ms===null&&bs(t),Rm(t,n)}function Rm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},sa===null){if(t===null)throw Error(s(308));sa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else sa=sa.next=n;return a}var US=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},LS=r.unstable_scheduleCallback,OS=r.unstable_NormalPriority,dn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cf(){return{controller:new US,data:new Map,refCount:0}}function xo(t){t.refCount--,t.refCount===0&&LS(OS,function(){t.controller.abort()})}var So=null,uf=0,lr=0,cr=null;function PS(t,n){if(So===null){var a=So=[];uf=0,lr=hd(),cr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return uf++,n.then(Cm,Cm),n}function Cm(){if(--uf===0&&So!==null){cr!==null&&(cr.status="fulfilled");var t=So;So=null,lr=0,cr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function FS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var wm=D.S;D.S=function(t,n){dg=C(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&PS(t,n),wm!==null&&wm(t,n)};var Es=I(null);function ff(){var t=Es.current;return t!==null?t:Zt.pooledCache}function Gl(t,n){n===null?ne(Es,Es.current):ne(Es,n.pool)}function Nm(){var t=ff();return t===null?null:{parent:dn._currentValue,pool:t}}var ur=Error(s(460)),df=Error(s(474)),Vl=Error(s(542)),kl={then:function(){}};function Dm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Um(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ta,ta),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Om(t),t;default:if(typeof n.status=="string")n.then(ta,ta);else{if(t=Zt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Om(t),t}throw As=n,ur}}function Ts(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(As=a,ur):a}}var As=null;function Lm(){if(As===null)throw Error(s(459));var t=As;return As=null,t}function Om(t){if(t===ur||t===Vl)throw Error(s(483))}var fr=null,yo=0;function jl(t){var n=yo;return yo+=1,fr===null&&(fr=[]),Um(fr,t,n)}function Mo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Xl(t,n){throw n.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Pm(t){function n(ce,ie){if(t){var de=ce.deletions;de===null?(ce.deletions=[ie],ce.flags|=16):de.push(ie)}}function a(ce,ie){if(!t)return null;for(;ie!==null;)n(ce,ie),ie=ie.sibling;return null}function o(ce){for(var ie=new Map;ce!==null;)ce.key!==null?ie.set(ce.key,ce):ie.set(ce.index,ce),ce=ce.sibling;return ie}function u(ce,ie){return ce=ia(ce,ie),ce.index=0,ce.sibling=null,ce}function d(ce,ie,de){return ce.index=de,t?(de=ce.alternate,de!==null?(de=de.index,de<ie?(ce.flags|=67108866,ie):de):(ce.flags|=67108866,ie)):(ce.flags|=1048576,ie)}function E(ce){return t&&ce.alternate===null&&(ce.flags|=67108866),ce}function U(ce,ie,de,Ae){return ie===null||ie.tag!==6?(ie=$u(de,ce.mode,Ae),ie.return=ce,ie):(ie=u(ie,de),ie.return=ce,ie)}function Z(ce,ie,de,Ae){var ct=de.type;return ct===A?Ee(ce,ie,de.props.children,Ae,de.key):ie!==null&&(ie.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===T&&Ts(ct)===ie.type)?(ie=u(ie,de.props),Mo(ie,de),ie.return=ce,ie):(ie=Il(de.type,de.key,de.props,null,ce.mode,Ae),Mo(ie,de),ie.return=ce,ie)}function he(ce,ie,de,Ae){return ie===null||ie.tag!==4||ie.stateNode.containerInfo!==de.containerInfo||ie.stateNode.implementation!==de.implementation?(ie=ef(de,ce.mode,Ae),ie.return=ce,ie):(ie=u(ie,de.children||[]),ie.return=ce,ie)}function Ee(ce,ie,de,Ae,ct){return ie===null||ie.tag!==7?(ie=Ss(de,ce.mode,Ae,ct),ie.return=ce,ie):(ie=u(ie,de),ie.return=ce,ie)}function Ce(ce,ie,de){if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return ie=$u(""+ie,ce.mode,de),ie.return=ce,ie;if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case y:return de=Il(ie.type,ie.key,ie.props,null,ce.mode,de),Mo(de,ie),de.return=ce,de;case M:return ie=ef(ie,ce.mode,de),ie.return=ce,ie;case T:return ie=Ts(ie),Ce(ce,ie,de)}if(ae(ie)||q(ie))return ie=Ss(ie,ce.mode,de,null),ie.return=ce,ie;if(typeof ie.then=="function")return Ce(ce,jl(ie),de);if(ie.$$typeof===w)return Ce(ce,Hl(ce,ie),de);Xl(ce,ie)}return null}function me(ce,ie,de,Ae){var ct=ie!==null?ie.key:null;if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return ct!==null?null:U(ce,ie,""+de,Ae);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case y:return de.key===ct?Z(ce,ie,de,Ae):null;case M:return de.key===ct?he(ce,ie,de,Ae):null;case T:return de=Ts(de),me(ce,ie,de,Ae)}if(ae(de)||q(de))return ct!==null?null:Ee(ce,ie,de,Ae,null);if(typeof de.then=="function")return me(ce,ie,jl(de),Ae);if(de.$$typeof===w)return me(ce,ie,Hl(ce,de),Ae);Xl(ce,de)}return null}function Se(ce,ie,de,Ae,ct){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number"||typeof Ae=="bigint")return ce=ce.get(de)||null,U(ie,ce,""+Ae,ct);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case y:return ce=ce.get(Ae.key===null?de:Ae.key)||null,Z(ie,ce,Ae,ct);case M:return ce=ce.get(Ae.key===null?de:Ae.key)||null,he(ie,ce,Ae,ct);case T:return Ae=Ts(Ae),Se(ce,ie,de,Ae,ct)}if(ae(Ae)||q(Ae))return ce=ce.get(de)||null,Ee(ie,ce,Ae,ct,null);if(typeof Ae.then=="function")return Se(ce,ie,de,jl(Ae),ct);if(Ae.$$typeof===w)return Se(ce,ie,de,Hl(ie,Ae),ct);Xl(ie,Ae)}return null}function et(ce,ie,de,Ae){for(var ct=null,It=null,at=ie,St=ie=0,Ct=null;at!==null&&St<de.length;St++){at.index>St?(Ct=at,at=null):Ct=at.sibling;var Bt=me(ce,at,de[St],Ae);if(Bt===null){at===null&&(at=Ct);break}t&&at&&Bt.alternate===null&&n(ce,at),ie=d(Bt,ie,St),It===null?ct=Bt:It.sibling=Bt,It=Bt,at=Ct}if(St===de.length)return a(ce,at),Nt&&aa(ce,St),ct;if(at===null){for(;St<de.length;St++)at=Ce(ce,de[St],Ae),at!==null&&(ie=d(at,ie,St),It===null?ct=at:It.sibling=at,It=at);return Nt&&aa(ce,St),ct}for(at=o(at);St<de.length;St++)Ct=Se(at,ce,St,de[St],Ae),Ct!==null&&(t&&Ct.alternate!==null&&at.delete(Ct.key===null?St:Ct.key),ie=d(Ct,ie,St),It===null?ct=Ct:It.sibling=Ct,It=Ct);return t&&at.forEach(function(es){return n(ce,es)}),Nt&&aa(ce,St),ct}function ut(ce,ie,de,Ae){if(de==null)throw Error(s(151));for(var ct=null,It=null,at=ie,St=ie=0,Ct=null,Bt=de.next();at!==null&&!Bt.done;St++,Bt=de.next()){at.index>St?(Ct=at,at=null):Ct=at.sibling;var es=me(ce,at,Bt.value,Ae);if(es===null){at===null&&(at=Ct);break}t&&at&&es.alternate===null&&n(ce,at),ie=d(es,ie,St),It===null?ct=es:It.sibling=es,It=es,at=Ct}if(Bt.done)return a(ce,at),Nt&&aa(ce,St),ct;if(at===null){for(;!Bt.done;St++,Bt=de.next())Bt=Ce(ce,Bt.value,Ae),Bt!==null&&(ie=d(Bt,ie,St),It===null?ct=Bt:It.sibling=Bt,It=Bt);return Nt&&aa(ce,St),ct}for(at=o(at);!Bt.done;St++,Bt=de.next())Bt=Se(at,ce,St,Bt.value,Ae),Bt!==null&&(t&&Bt.alternate!==null&&at.delete(Bt.key===null?St:Bt.key),ie=d(Bt,ie,St),It===null?ct=Bt:It.sibling=Bt,It=Bt);return t&&at.forEach(function(qy){return n(ce,qy)}),Nt&&aa(ce,St),ct}function qt(ce,ie,de,Ae){if(typeof de=="object"&&de!==null&&de.type===A&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case y:e:{for(var ct=de.key;ie!==null;){if(ie.key===ct){if(ct=de.type,ct===A){if(ie.tag===7){a(ce,ie.sibling),Ae=u(ie,de.props.children),Ae.return=ce,ce=Ae;break e}}else if(ie.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===T&&Ts(ct)===ie.type){a(ce,ie.sibling),Ae=u(ie,de.props),Mo(Ae,de),Ae.return=ce,ce=Ae;break e}a(ce,ie);break}else n(ce,ie);ie=ie.sibling}de.type===A?(Ae=Ss(de.props.children,ce.mode,Ae,de.key),Ae.return=ce,ce=Ae):(Ae=Il(de.type,de.key,de.props,null,ce.mode,Ae),Mo(Ae,de),Ae.return=ce,ce=Ae)}return E(ce);case M:e:{for(ct=de.key;ie!==null;){if(ie.key===ct)if(ie.tag===4&&ie.stateNode.containerInfo===de.containerInfo&&ie.stateNode.implementation===de.implementation){a(ce,ie.sibling),Ae=u(ie,de.children||[]),Ae.return=ce,ce=Ae;break e}else{a(ce,ie);break}else n(ce,ie);ie=ie.sibling}Ae=ef(de,ce.mode,Ae),Ae.return=ce,ce=Ae}return E(ce);case T:return de=Ts(de),qt(ce,ie,de,Ae)}if(ae(de))return et(ce,ie,de,Ae);if(q(de)){if(ct=q(de),typeof ct!="function")throw Error(s(150));return de=ct.call(de),ut(ce,ie,de,Ae)}if(typeof de.then=="function")return qt(ce,ie,jl(de),Ae);if(de.$$typeof===w)return qt(ce,ie,Hl(ce,de),Ae);Xl(ce,de)}return typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint"?(de=""+de,ie!==null&&ie.tag===6?(a(ce,ie.sibling),Ae=u(ie,de),Ae.return=ce,ce=Ae):(a(ce,ie),Ae=$u(de,ce.mode,Ae),Ae.return=ce,ce=Ae),E(ce)):a(ce,ie)}return function(ce,ie,de,Ae){try{yo=0;var ct=qt(ce,ie,de,Ae);return fr=null,ct}catch(at){if(at===ur||at===Vl)throw at;var It=ei(29,at,null,ce.mode);return It.lanes=Ae,It.return=ce,It}finally{}}}var Rs=Pm(!0),Fm=Pm(!1),Ia=!1;function hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function za(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(zt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Fl(t),xm(t,null,a),n}return Pl(t,o,n,a),Fl(t)}function bo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ws(t,a)}}function mf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=E:d=d.next=E,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var gf=!1;function Eo(){if(gf){var t=cr;if(t!==null)throw t}}function To(t,n,a,o){gf=!1;var u=t.updateQueue;Ia=!1;var d=u.firstBaseUpdate,E=u.lastBaseUpdate,U=u.shared.pending;if(U!==null){u.shared.pending=null;var Z=U,he=Z.next;Z.next=null,E===null?d=he:E.next=he,E=Z;var Ee=t.alternate;Ee!==null&&(Ee=Ee.updateQueue,U=Ee.lastBaseUpdate,U!==E&&(U===null?Ee.firstBaseUpdate=he:U.next=he,Ee.lastBaseUpdate=Z))}if(d!==null){var Ce=u.baseState;E=0,Ee=he=Z=null,U=d;do{var me=U.lane&-536870913,Se=me!==U.lane;if(Se?(Rt&me)===me:(o&me)===me){me!==0&&me===lr&&(gf=!0),Ee!==null&&(Ee=Ee.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});e:{var et=t,ut=U;me=n;var qt=a;switch(ut.tag){case 1:if(et=ut.payload,typeof et=="function"){Ce=et.call(qt,Ce,me);break e}Ce=et;break e;case 3:et.flags=et.flags&-65537|128;case 0:if(et=ut.payload,me=typeof et=="function"?et.call(qt,Ce,me):et,me==null)break e;Ce=g({},Ce,me);break e;case 2:Ia=!0}}me=U.callback,me!==null&&(t.flags|=64,Se&&(t.flags|=8192),Se=u.callbacks,Se===null?u.callbacks=[me]:Se.push(me))}else Se={lane:me,tag:U.tag,payload:U.payload,callback:U.callback,next:null},Ee===null?(he=Ee=Se,Z=Ce):Ee=Ee.next=Se,E|=me;if(U=U.next,U===null){if(U=u.shared.pending,U===null)break;Se=U,U=Se.next,Se.next=null,u.lastBaseUpdate=Se,u.shared.pending=null}}while(!0);Ee===null&&(Z=Ce),u.baseState=Z,u.firstBaseUpdate=he,u.lastBaseUpdate=Ee,d===null&&(u.shared.lanes=0),ja|=E,t.lanes=E,t.memoizedState=Ce}}function Im(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Bm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Im(a[t],n)}var dr=I(null),Wl=I(0);function zm(t,n){t=ma,ne(Wl,t),ne(dr,n),ma=t|n.baseLanes}function vf(){ne(Wl,ma),ne(dr,dr.current)}function _f(){ma=Wl.current,j(dr),j(Wl)}var ti=I(null),gi=null;function Ha(t){var n=t.alternate;ne(on,on.current&1),ne(ti,t),gi===null&&(n===null||dr.current!==null||n.memoizedState!==null)&&(gi=t)}function xf(t){ne(on,on.current),ne(ti,t),gi===null&&(gi=t)}function Hm(t){t.tag===22?(ne(on,on.current),ne(ti,t),gi===null&&(gi=t)):Ga()}function Ga(){ne(on,on.current),ne(ti,ti.current)}function ni(t){j(ti),gi===t&&(gi=null),j(on)}var on=I(0);function ql(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Td(a)||Ad(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oa=0,vt=null,Xt=null,hn=null,Yl=!1,hr=!1,Cs=!1,Zl=0,Ao=0,pr=null,IS=0;function an(){throw Error(s(321))}function Sf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!$n(t[a],n[a]))return!1;return!0}function yf(t,n,a,o,u,d){return oa=d,vt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=t===null||t.memoizedState===null?b0:Ff,Cs=!1,d=a(o,u),Cs=!1,hr&&(d=Vm(n,a,o,u)),Gm(t),d}function Gm(t){D.H=wo;var n=Xt!==null&&Xt.next!==null;if(oa=0,hn=Xt=vt=null,Yl=!1,Ao=0,pr=null,n)throw Error(s(300));t===null||pn||(t=t.dependencies,t!==null&&zl(t)&&(pn=!0))}function Vm(t,n,a,o){vt=t;var u=0;do{if(hr&&(pr=null),Ao=0,hr=!1,25<=u)throw Error(s(301));if(u+=1,hn=Xt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}D.H=E0,d=n(a,o)}while(hr);return d}function BS(){var t=D.H,n=t.useState()[0];return n=typeof n.then=="function"?Ro(n):n,t=t.useState()[0],(Xt!==null?Xt.memoizedState:null)!==t&&(vt.flags|=1024),n}function Mf(){var t=Zl!==0;return Zl=0,t}function bf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ef(t){if(Yl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Yl=!1}oa=0,hn=Xt=vt=null,hr=!1,Ao=Zl=0,pr=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?vt.memoizedState=hn=t:hn=hn.next=t,hn}function ln(){if(Xt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var n=hn===null?vt.memoizedState:hn.next;if(n!==null)hn=n,Xt=t;else{if(t===null)throw vt.alternate===null?Error(s(467)):Error(s(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},hn===null?vt.memoizedState=hn=t:hn=hn.next=t}return hn}function Kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ro(t){var n=Ao;return Ao+=1,pr===null&&(pr=[]),t=Um(pr,t,n),n=vt,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?b0:Ff),t}function Ql(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ro(t);if(t.$$typeof===w)return Tn(t)}throw Error(s(438,String(t)))}function Tf(t){var n=null,a=vt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=vt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Kl(),vt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=J;return n.index++,a}function la(t,n){return typeof n=="function"?n(t):n}function Jl(t){var n=ln();return Af(n,Xt,t)}function Af(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var E=u.next;u.next=d.next,d.next=E}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var U=E=null,Z=null,he=n,Ee=!1;do{var Ce=he.lane&-536870913;if(Ce!==he.lane?(Rt&Ce)===Ce:(oa&Ce)===Ce){var me=he.revertLane;if(me===0)Z!==null&&(Z=Z.next={lane:0,revertLane:0,gesture:null,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),Ce===lr&&(Ee=!0);else if((oa&me)===me){he=he.next,me===lr&&(Ee=!0);continue}else Ce={lane:0,revertLane:he.revertLane,gesture:null,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null},Z===null?(U=Z=Ce,E=d):Z=Z.next=Ce,vt.lanes|=me,ja|=me;Ce=he.action,Cs&&a(d,Ce),d=he.hasEagerState?he.eagerState:a(d,Ce)}else me={lane:Ce,revertLane:he.revertLane,gesture:he.gesture,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null},Z===null?(U=Z=me,E=d):Z=Z.next=me,vt.lanes|=Ce,ja|=Ce;he=he.next}while(he!==null&&he!==n);if(Z===null?E=d:Z.next=U,!$n(d,t.memoizedState)&&(pn=!0,Ee&&(a=cr,a!==null)))throw a;t.memoizedState=d,t.baseState=E,t.baseQueue=Z,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Rf(t){var n=ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var E=u=u.next;do d=t(d,E.action),E=E.next;while(E!==u);$n(d,n.memoizedState)||(pn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function km(t,n,a){var o=vt,u=ln(),d=Nt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var E=!$n((Xt||u).memoizedState,a);if(E&&(u.memoizedState=a,pn=!0),u=u.queue,Nf(Wm.bind(null,o,u,t),[t]),u.getSnapshot!==n||E||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,mr(9,{destroy:void 0},Xm.bind(null,o,u,a,n),null),Zt===null)throw Error(s(349));d||(oa&127)!==0||jm(o,n,a)}return a}function jm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=vt.updateQueue,n===null?(n=Kl(),vt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Xm(t,n,a,o){n.value=a,n.getSnapshot=o,qm(n)&&Ym(t)}function Wm(t,n,a){return a(function(){qm(n)&&Ym(t)})}function qm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!$n(t,a)}catch{return!0}}function Ym(t){var n=xs(t,2);n!==null&&Zn(n,t,2)}function Cf(t){var n=Gn();if(typeof t=="function"){var a=t;if(t=a(),Cs){Xe(!0);try{a()}finally{Xe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},n}function Zm(t,n,a,o){return t.baseState=a,Af(t,Xt,typeof o=="function"?o:la)}function zS(t,n,a,o,u){if(tc(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){d.listeners.push(E)}};D.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Km(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Km(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=D.T,E={};D.T=E;try{var U=a(u,o),Z=D.S;Z!==null&&Z(E,U),Qm(t,n,U)}catch(he){wf(t,n,he)}finally{d!==null&&E.types!==null&&(d.types=E.types),D.T=d}}else try{d=a(u,o),Qm(t,n,d)}catch(he){wf(t,n,he)}}function Qm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Jm(t,n,o)},function(o){return wf(t,n,o)}):Jm(t,n,a)}function Jm(t,n,a){n.status="fulfilled",n.value=a,$m(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Km(t,a)))}function wf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,$m(n),n=n.next;while(n!==o)}t.action=null}function $m(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function e0(t,n){return n}function t0(t,n){if(Nt){var a=Zt.formState;if(a!==null){e:{var o=vt;if(Nt){if(Kt){t:{for(var u=Kt,d=mi;u.nodeType!==8;){if(!d){u=null;break t}if(u=vi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Kt=vi(u.nextSibling),o=u.data==="F!";break e}}Pa(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e0,lastRenderedState:n},a.queue=o,a=S0.bind(null,vt,o),o.dispatch=a,o=Cf(!1),d=Pf.bind(null,vt,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=zS.bind(null,vt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function n0(t){var n=ln();return i0(n,Xt,t)}function i0(t,n,a){if(n=Af(t,n,e0)[0],t=Jl(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ro(n)}catch(E){throw E===ur?Vl:E}else o=n;n=ln();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(vt.flags|=2048,mr(9,{destroy:void 0},HS.bind(null,u,a),null)),[o,d,t]}function HS(t,n){t.action=n}function a0(t){var n=ln(),a=Xt;if(a!==null)return i0(n,a,t);ln(),n=n.memoizedState,a=ln();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function mr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=vt.updateQueue,n===null&&(n=Kl(),vt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function s0(){return ln().memoizedState}function $l(t,n,a,o){var u=Gn();vt.flags|=t,u.memoizedState=mr(1|n,{destroy:void 0},a,o===void 0?null:o)}function ec(t,n,a,o){var u=ln();o=o===void 0?null:o;var d=u.memoizedState.inst;Xt!==null&&o!==null&&Sf(o,Xt.memoizedState.deps)?u.memoizedState=mr(n,d,a,o):(vt.flags|=t,u.memoizedState=mr(1|n,d,a,o))}function r0(t,n){$l(8390656,8,t,n)}function Nf(t,n){ec(2048,8,t,n)}function GS(t){vt.flags|=4;var n=vt.updateQueue;if(n===null)n=Kl(),vt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function o0(t){var n=ln().memoizedState;return GS({ref:n,nextImpl:t}),function(){if((zt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function l0(t,n){return ec(4,2,t,n)}function c0(t,n){return ec(4,4,t,n)}function u0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function f0(t,n,a){a=a!=null?a.concat([t]):null,ec(4,4,u0.bind(null,n,t),a)}function Df(){}function d0(t,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Sf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function h0(t,n){var a=ln();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Sf(n,o[1]))return o[0];if(o=t(),Cs){Xe(!0);try{t()}finally{Xe(!1)}}return a.memoizedState=[o,n],o}function Uf(t,n,a){return a===void 0||(oa&1073741824)!==0&&(Rt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=pg(),vt.lanes|=t,ja|=t,a)}function p0(t,n,a,o){return $n(a,n)?a:dr.current!==null?(t=Uf(t,a,o),$n(t,n)||(pn=!0),t):(oa&42)===0||(oa&1073741824)!==0&&(Rt&261930)===0?(pn=!0,t.memoizedState=a):(t=pg(),vt.lanes|=t,ja|=t,n)}function m0(t,n,a,o,u){var d=z.p;z.p=d!==0&&8>d?d:8;var E=D.T,U={};D.T=U,Pf(t,!1,n,a);try{var Z=u(),he=D.S;if(he!==null&&he(U,Z),Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var Ee=FS(Z,o);Co(t,n,Ee,si(t))}else Co(t,n,o,si(t))}catch(Ce){Co(t,n,{then:function(){},status:"rejected",reason:Ce},si())}finally{z.p=d,E!==null&&U.types!==null&&(E.types=U.types),D.T=E}}function VS(){}function Lf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=g0(t).queue;m0(t,u,n,te,a===null?VS:function(){return v0(t),a(o)})}function g0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:te},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function v0(t){var n=g0(t);n.next===null&&(n=t.alternate.memoizedState),Co(t,n.next.queue,{},si())}function Of(){return Tn(Xo)}function _0(){return ln().memoizedState}function x0(){return ln().memoizedState}function kS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();t=Ba(a);var o=za(n,t,a);o!==null&&(Zn(o,n,a),bo(o,n,a)),n={cache:cf()},t.payload=n;return}n=n.return}}function jS(t,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},tc(t)?y0(n,a):(a=Qu(t,n,a,o),a!==null&&(Zn(a,t,o),M0(a,n,o)))}function S0(t,n,a){var o=si();Co(t,n,a,o)}function Co(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(tc(t))y0(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var E=n.lastRenderedState,U=d(E,a);if(u.hasEagerState=!0,u.eagerState=U,$n(U,E))return Pl(t,n,u,0),Zt===null&&Ol(),!1}catch{}finally{}if(a=Qu(t,n,u,o),a!==null)return Zn(a,t,o),M0(a,n,o),!0}return!1}function Pf(t,n,a,o){if(o={lane:2,revertLane:hd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},tc(t)){if(n)throw Error(s(479))}else n=Qu(t,a,o,2),n!==null&&Zn(n,t,2)}function tc(t){var n=t.alternate;return t===vt||n!==null&&n===vt}function y0(t,n){hr=Yl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function M0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Ws(t,a)}}var wo={readContext:Tn,use:Ql,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an};wo.useEffectEvent=an;var b0={readContext:Tn,use:Ql,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:r0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,$l(4194308,4,u0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return $l(4194308,4,t,n)},useInsertionEffect:function(t,n){$l(4,2,t,n)},useMemo:function(t,n){var a=Gn();n=n===void 0?null:n;var o=t();if(Cs){Xe(!0);try{t()}finally{Xe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(Cs){Xe(!0);try{a(n)}finally{Xe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=jS.bind(null,vt,t),[o.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=Cf(t);var n=t.queue,a=S0.bind(null,vt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Df,useDeferredValue:function(t,n){var a=Gn();return Uf(a,t,n)},useTransition:function(){var t=Cf(!1);return t=m0.bind(null,vt,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=vt,u=Gn();if(Nt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Zt===null)throw Error(s(349));(Rt&127)!==0||jm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,r0(Wm.bind(null,o,d,t),[t]),o.flags|=2048,mr(9,{destroy:void 0},Xm.bind(null,o,d,a,n),null),a},useId:function(){var t=Gn(),n=Zt.identifierPrefix;if(Nt){var a=Bi,o=Ii;a=(o&~(1<<32-Ve(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Zl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=IS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Of,useFormState:t0,useActionState:t0,useOptimistic:function(t){var n=Gn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Pf.bind(null,vt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Tf,useCacheRefresh:function(){return Gn().memoizedState=kS.bind(null,vt)},useEffectEvent:function(t){var n=Gn(),a={impl:t};return n.memoizedState=a,function(){if((zt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ff={readContext:Tn,use:Ql,useCallback:d0,useContext:Tn,useEffect:Nf,useImperativeHandle:f0,useInsertionEffect:l0,useLayoutEffect:c0,useMemo:h0,useReducer:Jl,useRef:s0,useState:function(){return Jl(la)},useDebugValue:Df,useDeferredValue:function(t,n){var a=ln();return p0(a,Xt.memoizedState,t,n)},useTransition:function(){var t=Jl(la)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:Ro(t),n]},useSyncExternalStore:km,useId:_0,useHostTransitionStatus:Of,useFormState:n0,useActionState:n0,useOptimistic:function(t,n){var a=ln();return Zm(a,Xt,t,n)},useMemoCache:Tf,useCacheRefresh:x0};Ff.useEffectEvent=o0;var E0={readContext:Tn,use:Ql,useCallback:d0,useContext:Tn,useEffect:Nf,useImperativeHandle:f0,useInsertionEffect:l0,useLayoutEffect:c0,useMemo:h0,useReducer:Rf,useRef:s0,useState:function(){return Rf(la)},useDebugValue:Df,useDeferredValue:function(t,n){var a=ln();return Xt===null?Uf(a,t,n):p0(a,Xt.memoizedState,t,n)},useTransition:function(){var t=Rf(la)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:Ro(t),n]},useSyncExternalStore:km,useId:_0,useHostTransitionStatus:Of,useFormState:a0,useActionState:a0,useOptimistic:function(t,n){var a=ln();return Xt!==null?Zm(a,Xt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Tf,useCacheRefresh:x0};E0.useEffectEvent=o0;function If(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Bf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=si(),u=Ba(o);u.payload=n,a!=null&&(u.callback=a),n=za(t,u,o),n!==null&&(Zn(n,t,o),bo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=si(),u=Ba(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(t,u,o),n!==null&&(Zn(n,t,o),bo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=si(),o=Ba(a);o.tag=2,n!=null&&(o.callback=n),n=za(t,o,a),n!==null&&(Zn(n,t,a),bo(n,t,a))}};function T0(t,n,a,o,u,d,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,E):n.prototype&&n.prototype.isPureReactComponent?!mo(a,o)||!mo(u,d):!0}function A0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Bf.enqueueReplaceState(n,n.state,null)}function ws(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function R0(t){Ll(t)}function C0(t){console.error(t)}function w0(t){Ll(t)}function nc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function N0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function zf(t,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){nc(t,n)},a}function D0(t){return t=Ba(t),t.tag=3,t}function U0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){N0(n,a,o)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){N0(n,a,o),typeof u!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var U=o.stack;this.componentDidCatch(o.value,{componentStack:U!==null?U:""})})}function XS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&or(n,a,u,!0),a=ti.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?pc():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===kl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),ud(t,o,u)),!1;case 22:return a.flags|=65536,o===kl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),ud(t,o,u)),!1}throw Error(s(435,a.tag))}return ud(t,o,u),pc(),!1}if(Nt)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==af&&(t=Error(s(422),{cause:o}),_o(di(t,a)))):(o!==af&&(n=Error(s(423),{cause:o}),_o(di(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=di(o,a),u=zf(t.stateNode,o,u),mf(t,u),sn!==4&&(sn=2)),!1;var d=Error(s(520),{cause:o});if(d=di(d,a),Io===null?Io=[d]:Io.push(d),sn!==4&&(sn=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=zf(a.stateNode,o,t),mf(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Xa===null||!Xa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=D0(u),U0(u,t,a,o),mf(a,u),!1}a=a.return}while(a!==null);return!1}var Hf=Error(s(461)),pn=!1;function An(t,n,a,o){n.child=t===null?Fm(n,null,a,o):Rs(n,t.child,a,o)}function L0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var E={};for(var U in o)U!=="ref"&&(E[U]=o[U])}else E=o;return bs(n),o=yf(t,n,a,E,d,u),U=Mf(),t!==null&&!pn?(bf(t,n,u),ca(t,n,u)):(Nt&&U&&tf(n),n.flags|=1,An(t,n,o,u),n.child)}function O0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Ju(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,P0(t,n,d,o,u)):(t=Il(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Yf(t,u)){var E=d.memoizedProps;if(a=a.compare,a=a!==null?a:mo,a(E,o)&&t.ref===n.ref)return ca(t,n,u)}return n.flags|=1,t=ia(d,o),t.ref=n.ref,t.return=n,n.child=t}function P0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(mo(d,o)&&t.ref===n.ref)if(pn=!1,n.pendingProps=o=d,Yf(t,u))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,ca(t,n,u)}return Gf(t,n,a,o,u)}function F0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return I0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Gl(n,d!==null?d.cachePool:null),d!==null?zm(n,d):vf(),Hm(n);else return o=n.lanes=536870912,I0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Gl(n,d.cachePool),zm(n,d),Ga(),n.memoizedState=null):(t!==null&&Gl(n,null),vf(),Ga());return An(t,n,u,a),n.child}function No(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function I0(t,n,a,o,u){var d=ff();return d=d===null?null:{parent:dn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Gl(n,null),vf(),Hm(n),t!==null&&or(t,n,o,!0),n.childLanes=u,null}function ic(t,n){return n=sc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function B0(t,n,a){return Rs(n,t.child,null,a),t=ic(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function WS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Nt){if(o.mode==="hidden")return t=ic(n,o),n.lanes=536870912,No(null,t);if(xf(n),(t=Kt)?(t=Kg(t,mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=ym(t),a.return=n,n.child=a,En=n,Kt=null)):t=null,t===null)throw Pa(n);return n.lanes=536870912,null}return ic(n,o)}var d=t.memoizedState;if(d!==null){var E=d.dehydrated;if(xf(n),u)if(n.flags&256)n.flags&=-257,n=B0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||or(t,n,a,!1),u=(a&t.childLanes)!==0,pn||u){if(o=Zt,o!==null&&(E=Ml(o,a),E!==0&&E!==d.retryLane))throw d.retryLane=E,xs(t,E),Zn(o,t,E),Hf;pc(),n=B0(t,n,a)}else t=d.treeContext,Kt=vi(E.nextSibling),En=n,Nt=!0,Oa=null,mi=!1,t!==null&&Em(n,t),n=ic(n,o),n.flags|=4096;return n}return t=ia(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ac(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Gf(t,n,a,o,u){return bs(n),a=yf(t,n,a,o,void 0,u),o=Mf(),t!==null&&!pn?(bf(t,n,u),ca(t,n,u)):(Nt&&o&&tf(n),n.flags|=1,An(t,n,a,u),n.child)}function z0(t,n,a,o,u,d){return bs(n),n.updateQueue=null,a=Vm(n,o,a,u),Gm(t),o=Mf(),t!==null&&!pn?(bf(t,n,d),ca(t,n,d)):(Nt&&o&&tf(n),n.flags|=1,An(t,n,a,d),n.child)}function H0(t,n,a,o,u){if(bs(n),n.stateNode===null){var d=ir,E=a.contextType;typeof E=="object"&&E!==null&&(d=Tn(E)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Bf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},hf(n),E=a.contextType,d.context=typeof E=="object"&&E!==null?Tn(E):ir,d.state=n.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(If(n,a,E,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(E=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),E!==d.state&&Bf.enqueueReplaceState(d,d.state,null),To(n,o,d,u),Eo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var U=n.memoizedProps,Z=ws(a,U);d.props=Z;var he=d.context,Ee=a.contextType;E=ir,typeof Ee=="object"&&Ee!==null&&(E=Tn(Ee));var Ce=a.getDerivedStateFromProps;Ee=typeof Ce=="function"||typeof d.getSnapshotBeforeUpdate=="function",U=n.pendingProps!==U,Ee||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(U||he!==E)&&A0(n,d,o,E),Ia=!1;var me=n.memoizedState;d.state=me,To(n,o,d,u),Eo(),he=n.memoizedState,U||me!==he||Ia?(typeof Ce=="function"&&(If(n,a,Ce,o),he=n.memoizedState),(Z=Ia||T0(n,a,Z,o,me,he,E))?(Ee||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=he),d.props=o,d.state=he,d.context=E,o=Z):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,pf(t,n),E=n.memoizedProps,Ee=ws(a,E),d.props=Ee,Ce=n.pendingProps,me=d.context,he=a.contextType,Z=ir,typeof he=="object"&&he!==null&&(Z=Tn(he)),U=a.getDerivedStateFromProps,(he=typeof U=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E!==Ce||me!==Z)&&A0(n,d,o,Z),Ia=!1,me=n.memoizedState,d.state=me,To(n,o,d,u),Eo();var Se=n.memoizedState;E!==Ce||me!==Se||Ia||t!==null&&t.dependencies!==null&&zl(t.dependencies)?(typeof U=="function"&&(If(n,a,U,o),Se=n.memoizedState),(Ee=Ia||T0(n,a,Ee,o,me,Se,Z)||t!==null&&t.dependencies!==null&&zl(t.dependencies))?(he||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,Se,Z),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,Se,Z)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&me===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&me===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=Se),d.props=o,d.state=Se,d.context=Z,o=Ee):(typeof d.componentDidUpdate!="function"||E===t.memoizedProps&&me===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&me===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,ac(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Rs(n,t.child,null,u),n.child=Rs(n,null,a,u)):An(t,n,a,u),n.memoizedState=d.state,t=n.child):t=ca(t,n,u),t}function G0(t,n,a,o){return ys(),n.flags|=256,An(t,n,a,o),n.child}var Vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kf(t){return{baseLanes:t,cachePool:Nm()}}function jf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ai),t}function V0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,E;if((E=d)||(E=t!==null&&t.memoizedState===null?!1:(on.current&2)!==0),E&&(u=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,t===null){if(Nt){if(u?Ha(n):Ga(),(t=Kt)?(t=Kg(t,mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=ym(t),a.return=n,n.child=a,En=n,Kt=null)):t=null,t===null)throw Pa(n);return Ad(t)?n.lanes=32:n.lanes=536870912,null}var U=o.children;return o=o.fallback,u?(Ga(),u=n.mode,U=sc({mode:"hidden",children:U},u),o=Ss(o,u,a,null),U.return=n,o.return=n,U.sibling=o,n.child=U,o=n.child,o.memoizedState=kf(a),o.childLanes=jf(t,E,a),n.memoizedState=Vf,No(null,o)):(Ha(n),Xf(n,U))}var Z=t.memoizedState;if(Z!==null&&(U=Z.dehydrated,U!==null)){if(d)n.flags&256?(Ha(n),n.flags&=-257,n=Wf(t,n,a)):n.memoizedState!==null?(Ga(),n.child=t.child,n.flags|=128,n=null):(Ga(),U=o.fallback,u=n.mode,o=sc({mode:"visible",children:o.children},u),U=Ss(U,u,a,null),U.flags|=2,o.return=n,U.return=n,o.sibling=U,n.child=o,Rs(n,t.child,null,a),o=n.child,o.memoizedState=kf(a),o.childLanes=jf(t,E,a),n.memoizedState=Vf,n=No(null,o));else if(Ha(n),Ad(U)){if(E=U.nextSibling&&U.nextSibling.dataset,E)var he=E.dgst;E=he,o=Error(s(419)),o.stack="",o.digest=E,_o({value:o,source:null,stack:null}),n=Wf(t,n,a)}else if(pn||or(t,n,a,!1),E=(a&t.childLanes)!==0,pn||E){if(E=Zt,E!==null&&(o=Ml(E,a),o!==0&&o!==Z.retryLane))throw Z.retryLane=o,xs(t,o),Zn(E,t,o),Hf;Td(U)||pc(),n=Wf(t,n,a)}else Td(U)?(n.flags|=192,n.child=t.child,n=null):(t=Z.treeContext,Kt=vi(U.nextSibling),En=n,Nt=!0,Oa=null,mi=!1,t!==null&&Em(n,t),n=Xf(n,o.children),n.flags|=4096);return n}return u?(Ga(),U=o.fallback,u=n.mode,Z=t.child,he=Z.sibling,o=ia(Z,{mode:"hidden",children:o.children}),o.subtreeFlags=Z.subtreeFlags&65011712,he!==null?U=ia(he,U):(U=Ss(U,u,a,null),U.flags|=2),U.return=n,o.return=n,o.sibling=U,n.child=o,No(null,o),o=n.child,U=t.child.memoizedState,U===null?U=kf(a):(u=U.cachePool,u!==null?(Z=dn._currentValue,u=u.parent!==Z?{parent:Z,pool:Z}:u):u=Nm(),U={baseLanes:U.baseLanes|a,cachePool:u}),o.memoizedState=U,o.childLanes=jf(t,E,a),n.memoizedState=Vf,No(t.child,o)):(Ha(n),a=t.child,t=a.sibling,a=ia(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(E=n.deletions,E===null?(n.deletions=[t],n.flags|=16):E.push(t)),n.child=a,n.memoizedState=null,a)}function Xf(t,n){return n=sc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function sc(t,n){return t=ei(22,t,null,n),t.lanes=0,t}function Wf(t,n,a){return Rs(n,t.child,null,a),t=Xf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function k0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),of(t.return,n,a)}function qf(t,n,a,o,u,d){var E=t.memoizedState;E===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(E.isBackwards=n,E.rendering=null,E.renderingStartTime=0,E.last=o,E.tail=a,E.tailMode=u,E.treeForkCount=d)}function j0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var E=on.current,U=(E&2)!==0;if(U?(E=E&1|2,n.flags|=128):E&=1,ne(on,E),An(t,n,o,a),o=Nt?vo:0,!U&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&k0(t,a,n);else if(t.tag===19)k0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&ql(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),qf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&ql(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}qf(n,!0,a,null,d,o);break;case"together":qf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ca(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ja|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(or(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ia(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ia(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Yf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&zl(t)))}function qS(t,n,a){switch(n.tag){case 3:ge(n,n.stateNode.containerInfo),Fa(n,dn,t.memoizedState.cache),ys();break;case 27:case 5:be(n);break;case 4:ge(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,xf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?V0(t,n,a):(Ha(n),t=ca(t,n,a),t!==null?t.sibling:null);Ha(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(or(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return j0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ne(on,on.current),o)break;return null;case 22:return n.lanes=0,F0(t,n,a,n.pendingProps);case 24:Fa(n,dn,t.memoizedState.cache)}return ca(t,n,a)}function X0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!Yf(t,a)&&(n.flags&128)===0)return pn=!1,qS(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,Nt&&(n.flags&1048576)!==0&&bm(n,vo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Ts(n.elementType),n.type=t,typeof t=="function")Ju(t)?(o=ws(t,o),n.tag=1,n=H0(null,n,t,o,a)):(n.tag=0,n=Gf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=L0(null,n,t,o,a);break e}else if(u===F){n.tag=14,n=O0(null,n,t,o,a);break e}}throw n=Y(t)||t,Error(s(306,n,""))}}return n;case 0:return Gf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ws(o,n.pendingProps),H0(t,n,o,u,a);case 3:e:{if(ge(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,pf(t,n),To(n,o,null,a);var E=n.memoizedState;if(o=E.cache,Fa(n,dn,o),o!==d.cache&&lf(n,[dn],a,!0),Eo(),o=E.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=G0(t,n,o,a);break e}else if(o!==u){u=di(Error(s(424)),n),_o(u),n=G0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Kt=vi(t.firstChild),En=n,Nt=!0,Oa=null,mi=!0,a=Fm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ys(),o===u){n=ca(t,n,a);break e}An(t,n,o,a)}n=n.child}return n;case 26:return ac(t,n),t===null?(a=nv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Nt||(a=n.type,t=n.pendingProps,o=yc(X.current).createElement(a),o[cn]=n,o[vn]=t,Rn(o,a,t),se(o),n.stateNode=o):n.memoizedState=nv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return be(n),t===null&&Nt&&(o=n.stateNode=$g(n.type,n.pendingProps,X.current),En=n,mi=!0,u=Kt,Za(n.type)?(Rd=u,Kt=vi(o.firstChild)):Kt=u),An(t,n,n.pendingProps.children,a),ac(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Nt&&((u=o=Kt)&&(o=by(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,En=n,Kt=vi(o.firstChild),mi=!1,u=!0):u=!1),u||Pa(n)),be(n),u=n.type,d=n.pendingProps,E=t!==null?t.memoizedProps:null,o=d.children,Md(u,d)?o=null:E!==null&&Md(u,E)&&(n.flags|=32),n.memoizedState!==null&&(u=yf(t,n,BS,null,null,a),Xo._currentValue=u),ac(t,n),An(t,n,o,a),n.child;case 6:return t===null&&Nt&&((t=a=Kt)&&(a=Ey(a,n.pendingProps,mi),a!==null?(n.stateNode=a,En=n,Kt=null,t=!0):t=!1),t||Pa(n)),null;case 13:return V0(t,n,a);case 4:return ge(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Rs(n,null,o,a):An(t,n,o,a),n.child;case 11:return L0(t,n,n.type,n.pendingProps,a);case 7:return An(t,n,n.pendingProps,a),n.child;case 8:return An(t,n,n.pendingProps.children,a),n.child;case 12:return An(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Fa(n,n.type,o.value),An(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,bs(n),u=Tn(u),o=o(u),n.flags|=1,An(t,n,o,a),n.child;case 14:return O0(t,n,n.type,n.pendingProps,a);case 15:return P0(t,n,n.type,n.pendingProps,a);case 19:return j0(t,n,a);case 31:return WS(t,n,a);case 22:return F0(t,n,a,n.pendingProps);case 24:return bs(n),o=Tn(dn),t===null?(u=ff(),u===null&&(u=Zt,d=cf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},hf(n),Fa(n,dn,u)):((t.lanes&a)!==0&&(pf(t,n),To(n,null,null,a),Eo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Fa(n,dn,o)):(o=d.cache,Fa(n,dn,o),o!==u.cache&&lf(n,[dn],a,!0))),An(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ua(t){t.flags|=4}function Zf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(_g())t.flags|=8192;else throw As=kl,df}else t.flags&=-16777217}function W0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ov(n))if(_g())t.flags|=8192;else throw As=kl,df}function rc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Gt():536870912,t.lanes|=n,xr|=n)}function Do(t,n){if(!Nt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function YS(t,n,a){var o=n.pendingProps;switch(nf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(dn),Q(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(rr(n)?ua(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,sf())),Qt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ua(n),d!==null?(Qt(n),W0(n,d)):(Qt(n),Zf(n,u,null,o,a))):d?d!==t.memoizedState?(ua(n),Qt(n),W0(n,d)):(Qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ua(n),Qt(n),Zf(n,u,t,o,a)),null;case 27:if(Re(n),a=X.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}t=W.current,rr(n)?Tm(n):(t=$g(u,o,a),n.stateNode=t,ua(n))}return Qt(n),null;case 5:if(Re(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}if(d=W.current,rr(n))Tm(n);else{var E=yc(X.current);switch(d){case 1:d=E.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=E.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=E.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=E.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=E.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?E.createElement("select",{is:o.is}):E.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?E.createElement(u,{is:o.is}):E.createElement(u)}}d[cn]=n,d[vn]=o;e:for(E=n.child;E!==null;){if(E.tag===5||E.tag===6)d.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===n)break e;for(;E.sibling===null;){if(E.return===null||E.return===n)break e;E=E.return}E.sibling.return=E.return,E=E.sibling}n.stateNode=d;e:switch(Rn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ua(n)}}return Qt(n),Zf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ua(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=X.current,rr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=En,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Vg(t.nodeValue,a)),t||Pa(n,!0)}else t=yc(t).createTextNode(o),t[cn]=n,n.stateNode=t}return Qt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=rr(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[cn]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),t=!1}else a=sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=rr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else ys(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),rc(n,n.updateQueue),Qt(n),null);case 4:return Q(),t===null&&vd(n.stateNode.containerInfo),Qt(n),null;case 10:return ra(n.type),Qt(n),null;case 19:if(j(on),o=n.memoizedState,o===null)return Qt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Do(o,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=ql(t),d!==null){for(n.flags|=128,Do(o,!1),t=d.updateQueue,n.updateQueue=t,rc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Sm(a,t),a=a.sibling;return ne(on,on.current&1|2),Nt&&aa(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&C()>fc&&(n.flags|=128,u=!0,Do(o,!1),n.lanes=4194304)}else{if(!u)if(t=ql(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,rc(n,t),Do(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Nt)return Qt(n),null}else 2*C()-o.renderingStartTime>fc&&a!==536870912&&(n.flags|=128,u=!0,Do(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=C(),t.sibling=null,a=on.current,ne(on,u?a&1|2:a&1),Nt&&aa(n,o.treeForkCount),t):(Qt(n),null);case 22:case 23:return ni(n),_f(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&rc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&j(Es),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(dn),Qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function ZS(t,n){switch(nf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ra(dn),Q(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Re(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ys()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return j(on),null;case 4:return Q(),null;case 10:return ra(n.type),null;case 22:case 23:return ni(n),_f(),t!==null&&j(Es),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ra(dn),null;case 25:return null;default:return null}}function q0(t,n){switch(nf(n),n.tag){case 3:ra(dn),Q();break;case 26:case 27:case 5:Re(n);break;case 4:Q();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:j(on);break;case 10:ra(n.type);break;case 22:case 23:ni(n),_f(),t!==null&&j(Es);break;case 24:ra(dn)}}function Uo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,E=a.inst;o=d(),E.destroy=o}a=a.next}while(a!==u)}}catch(U){kt(n,n.return,U)}}function Va(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var E=o.inst,U=E.destroy;if(U!==void 0){E.destroy=void 0,u=n;var Z=a,he=U;try{he()}catch(Ee){kt(u,Z,Ee)}}}o=o.next}while(o!==d)}}catch(Ee){kt(n,n.return,Ee)}}function Y0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Bm(n,a)}catch(o){kt(t,t.return,o)}}}function Z0(t,n,a){a.props=ws(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){kt(t,n,o)}}function Lo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){kt(t,n,u)}}function zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){kt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){kt(t,n,u)}else a.current=null}function K0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){kt(t,t.return,u)}}function Kf(t,n,a){try{var o=t.stateNode;vy(o,t.type,a,n),o[vn]=n}catch(u){kt(t,t.return,u)}}function Q0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Za(t.type)||t.tag===4}function Qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Q0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Za(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ta));else if(o!==4&&(o===27&&Za(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Jf(t,n,a),t=t.sibling;t!==null;)Jf(t,n,a),t=t.sibling}function oc(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Za(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(oc(t,n,a),t=t.sibling;t!==null;)oc(t,n,a),t=t.sibling}function J0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,a),n[cn]=t,n[vn]=a}catch(d){kt(t,t.return,d)}}var fa=!1,mn=!1,$f=!1,$0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function KS(t,n){if(t=t.containerInfo,Sd=Cc,t=fm(t),Xu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var E=0,U=-1,Z=-1,he=0,Ee=0,Ce=t,me=null;t:for(;;){for(var Se;Ce!==a||u!==0&&Ce.nodeType!==3||(U=E+u),Ce!==d||o!==0&&Ce.nodeType!==3||(Z=E+o),Ce.nodeType===3&&(E+=Ce.nodeValue.length),(Se=Ce.firstChild)!==null;)me=Ce,Ce=Se;for(;;){if(Ce===t)break t;if(me===a&&++he===u&&(U=E),me===d&&++Ee===o&&(Z=E),(Se=Ce.nextSibling)!==null)break;Ce=me,me=Ce.parentNode}Ce=Se}a=U===-1||Z===-1?null:{start:U,end:Z}}else a=null}a=a||{start:0,end:0}}else a=null;for(yd={focusedElem:t,selectionRange:a},Cc=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var et=ws(a.type,u);t=o.getSnapshotBeforeUpdate(et,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(ut){kt(a,a.return,ut)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Ed(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ed(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function eg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ha(t,a),o&4&&Uo(5,a);break;case 1:if(ha(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(E){kt(a,a.return,E)}else{var u=ws(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(E){kt(a,a.return,E)}}o&64&&Y0(a),o&512&&Lo(a,a.return);break;case 3:if(ha(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Bm(t,n)}catch(E){kt(a,a.return,E)}}break;case 27:n===null&&o&4&&J0(a);case 26:case 5:ha(t,a),n===null&&o&4&&K0(a),o&512&&Lo(a,a.return);break;case 12:ha(t,a);break;case 31:ha(t,a),o&4&&ig(t,a);break;case 13:ha(t,a),o&4&&ag(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=sy.bind(null,a),Ty(t,a))));break;case 22:if(o=a.memoizedState!==null||fa,!o){n=n!==null&&n.memoizedState!==null||mn,u=fa;var d=mn;fa=o,(mn=n)&&!d?pa(t,a,(a.subtreeFlags&8772)!==0):ha(t,a),fa=u,mn=d}break;case 30:break;default:ha(t,a)}}function tg(t){var n=t.alternate;n!==null&&(t.alternate=null,tg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ro(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,Xn=!1;function da(t,n,a){for(a=a.child;a!==null;)ng(t,n,a),a=a.sibling}function ng(t,n,a){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(Ne,a)}catch{}switch(a.tag){case 26:mn||zi(a,n),da(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mn||zi(a,n);var o=tn,u=Xn;Za(a.type)&&(tn=a.stateNode,Xn=!1),da(t,n,a),Vo(a.stateNode),tn=o,Xn=u;break;case 5:mn||zi(a,n);case 6:if(o=tn,u=Xn,tn=null,da(t,n,a),tn=o,Xn=u,tn!==null)if(Xn)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode)}catch(d){kt(a,n,d)}else try{tn.removeChild(a.stateNode)}catch(d){kt(a,n,d)}break;case 18:tn!==null&&(Xn?(t=tn,Yg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Rr(t)):Yg(tn,a.stateNode));break;case 4:o=tn,u=Xn,tn=a.stateNode.containerInfo,Xn=!0,da(t,n,a),tn=o,Xn=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),mn||Va(4,a,n),da(t,n,a);break;case 1:mn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Z0(a,n,o)),da(t,n,a);break;case 21:da(t,n,a);break;case 22:mn=(o=mn)||a.memoizedState!==null,da(t,n,a),mn=o;break;default:da(t,n,a)}}function ig(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Rr(t)}catch(a){kt(n,n.return,a)}}}function ag(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Rr(t)}catch(a){kt(n,n.return,a)}}function QS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new $0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new $0),n;default:throw Error(s(435,t.tag))}}function lc(t,n){var a=QS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=ry.bind(null,t,o);o.then(u,u)}})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,E=n,U=E;e:for(;U!==null;){switch(U.tag){case 27:if(Za(U.type)){tn=U.stateNode,Xn=!1;break e}break;case 5:tn=U.stateNode,Xn=!1;break e;case 3:case 4:tn=U.stateNode.containerInfo,Xn=!0;break e}U=U.return}if(tn===null)throw Error(s(160));ng(d,E,u),tn=null,Xn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)sg(n,t),n=n.sibling}var Ri=null;function sg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),o&4&&(Va(3,t,t.return),Uo(3,t),Va(5,t,t.return));break;case 1:Wn(n,t),qn(t),o&512&&(mn||a===null||zi(a,a.return)),o&64&&fa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ri;if(Wn(n,t),qn(t),o&512&&(mn||a===null||zi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[ps]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Rn(d,o,a),d[cn]=t,se(d),o=d;break e;case"link":var E=sv("link","href",u).get(o+(a.href||""));if(E){for(var U=0;U<E.length;U++)if(d=E[U],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(U,1);break t}}d=u.createElement(o),Rn(d,o,a),u.head.appendChild(d);break;case"meta":if(E=sv("meta","content",u).get(o+(a.content||""))){for(U=0;U<E.length;U++)if(d=E[U],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(U,1);break t}}d=u.createElement(o),Rn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[cn]=t,se(d),o=d}t.stateNode=o}else rv(u,t.type,t.stateNode);else t.stateNode=av(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?rv(u,t.type,t.stateNode):av(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Kf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),o&512&&(mn||a===null||zi(a,a.return)),a!==null&&o&4&&Kf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),o&512&&(mn||a===null||zi(a,a.return)),t.flags&32){u=t.stateNode;try{Hn(u,"")}catch(et){kt(t,t.return,et)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Kf(t,u,a!==null?a.memoizedProps:u)),o&1024&&($f=!0);break;case 6:if(Wn(n,t),qn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(et){kt(t,t.return,et)}}break;case 3:if(Ec=null,u=Ri,Ri=Mc(n.containerInfo),Wn(n,t),Ri=u,qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Rr(n.containerInfo)}catch(et){kt(t,t.return,et)}$f&&($f=!1,rg(t));break;case 4:o=Ri,Ri=Mc(t.stateNode.containerInfo),Wn(n,t),qn(t),Ri=o;break;case 12:Wn(n,t),qn(t);break;case 31:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,lc(t,o)));break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(uc=C()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,lc(t,o)));break;case 22:u=t.memoizedState!==null;var Z=a!==null&&a.memoizedState!==null,he=fa,Ee=mn;if(fa=he||u,mn=Ee||Z,Wn(n,t),mn=Ee,fa=he,qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||Z||fa||mn||Ns(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){Z=a=n;try{if(d=Z.stateNode,u)E=d.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{U=Z.stateNode;var Ce=Z.memoizedProps.style,me=Ce!=null&&Ce.hasOwnProperty("display")?Ce.display:null;U.style.display=me==null||typeof me=="boolean"?"":(""+me).trim()}}catch(et){kt(Z,Z.return,et)}}}else if(n.tag===6){if(a===null){Z=n;try{Z.stateNode.nodeValue=u?"":Z.memoizedProps}catch(et){kt(Z,Z.return,et)}}}else if(n.tag===18){if(a===null){Z=n;try{var Se=Z.stateNode;u?Zg(Se,!0):Zg(Z.stateNode,!1)}catch(et){kt(Z,Z.return,et)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,lc(t,a))));break;case 19:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,lc(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Q0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Qf(t);oc(t,d,u);break;case 5:var E=a.stateNode;a.flags&32&&(Hn(E,""),a.flags&=-33);var U=Qf(t);oc(t,U,E);break;case 3:case 4:var Z=a.stateNode.containerInfo,he=Qf(t);Jf(t,he,Z);break;default:throw Error(s(161))}}catch(Ee){kt(t,t.return,Ee)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function rg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;rg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ha(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)eg(t,n.alternate,n),n=n.sibling}function Ns(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Va(4,n,n.return),Ns(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Z0(n,n.return,a),Ns(n);break;case 27:Vo(n.stateNode);case 26:case 5:zi(n,n.return),Ns(n);break;case 22:n.memoizedState===null&&Ns(n);break;case 30:Ns(n);break;default:Ns(n)}t=t.sibling}}function pa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,E=d.flags;switch(d.tag){case 0:case 11:case 15:pa(u,d,a),Uo(4,d);break;case 1:if(pa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(he){kt(o,o.return,he)}if(o=d,u=o.updateQueue,u!==null){var U=o.stateNode;try{var Z=u.shared.hiddenCallbacks;if(Z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<Z.length;u++)Im(Z[u],U)}catch(he){kt(o,o.return,he)}}a&&E&64&&Y0(d),Lo(d,d.return);break;case 27:J0(d);case 26:case 5:pa(u,d,a),a&&o===null&&E&4&&K0(d),Lo(d,d.return);break;case 12:pa(u,d,a);break;case 31:pa(u,d,a),a&&E&4&&ig(u,d);break;case 13:pa(u,d,a),a&&E&4&&ag(u,d);break;case 22:d.memoizedState===null&&pa(u,d,a),Lo(d,d.return);break;case 30:break;default:pa(u,d,a)}n=n.sibling}}function ed(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&xo(a))}function td(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&xo(t))}function Ci(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)og(t,n,a,o),n=n.sibling}function og(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(t,n,a,o),u&2048&&Uo(9,n);break;case 1:Ci(t,n,a,o);break;case 3:Ci(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&xo(t)));break;case 12:if(u&2048){Ci(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,E=d.id,U=d.onPostCommit;typeof U=="function"&&U(E,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(Z){kt(n,n.return,Z)}}else Ci(t,n,a,o);break;case 31:Ci(t,n,a,o);break;case 13:Ci(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,E=n.alternate,n.memoizedState!==null?d._visibility&2?Ci(t,n,a,o):Oo(t,n):d._visibility&2?Ci(t,n,a,o):(d._visibility|=2,gr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&ed(E,n);break;case 24:Ci(t,n,a,o),u&2048&&td(n.alternate,n);break;default:Ci(t,n,a,o)}}function gr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,E=n,U=a,Z=o,he=E.flags;switch(E.tag){case 0:case 11:case 15:gr(d,E,U,Z,u),Uo(8,E);break;case 23:break;case 22:var Ee=E.stateNode;E.memoizedState!==null?Ee._visibility&2?gr(d,E,U,Z,u):Oo(d,E):(Ee._visibility|=2,gr(d,E,U,Z,u)),u&&he&2048&&ed(E.alternate,E);break;case 24:gr(d,E,U,Z,u),u&&he&2048&&td(E.alternate,E);break;default:gr(d,E,U,Z,u)}n=n.sibling}}function Oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Oo(a,o),u&2048&&ed(o.alternate,o);break;case 24:Oo(a,o),u&2048&&td(o.alternate,o);break;default:Oo(a,o)}n=n.sibling}}var Po=8192;function vr(t,n,a){if(t.subtreeFlags&Po)for(t=t.child;t!==null;)lg(t,n,a),t=t.sibling}function lg(t,n,a){switch(t.tag){case 26:vr(t,n,a),t.flags&Po&&t.memoizedState!==null&&Iy(a,Ri,t.memoizedState,t.memoizedProps);break;case 5:vr(t,n,a);break;case 3:case 4:var o=Ri;Ri=Mc(t.stateNode.containerInfo),vr(t,n,a),Ri=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Po,Po=16777216,vr(t,n,a),Po=o):vr(t,n,a));break;default:vr(t,n,a)}}function cg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Fo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,fg(o,t)}cg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ug(t),t=t.sibling}function ug(t){switch(t.tag){case 0:case 11:case 15:Fo(t),t.flags&2048&&Va(9,t,t.return);break;case 3:Fo(t);break;case 12:Fo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,cc(t)):Fo(t);break;default:Fo(t)}}function cc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,fg(o,t)}cg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Va(8,n,n.return),cc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,cc(n));break;default:cc(n)}t=t.sibling}}function fg(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:xo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else e:for(a=t;Mn!==null;){o=Mn;var u=o.sibling,d=o.return;if(tg(o),o===a){Mn=null;break e}if(u!==null){u.return=d,Mn=u;break e}Mn=d}}}var JS={getCacheForType:function(t){var n=Tn(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Tn(dn).controller.signal}},$S=typeof WeakMap=="function"?WeakMap:Map,zt=0,Zt=null,Et=null,Rt=0,Vt=0,ii=null,ka=!1,_r=!1,nd=!1,ma=0,sn=0,ja=0,Ds=0,id=0,ai=0,xr=0,Io=null,Yn=null,ad=!1,uc=0,dg=0,fc=1/0,dc=null,Xa=null,xn=0,Wa=null,Sr=null,ga=0,sd=0,rd=null,hg=null,Bo=0,od=null;function si(){return(zt&2)!==0&&Rt!==0?Rt&-Rt:D.T!==null?hd():Fi()}function pg(){if(ai===0)if((Rt&536870912)===0||Nt){var t=Pe;Pe<<=1,(Pe&3932160)===0&&(Pe=262144),ai=t}else ai=536870912;return t=ti.current,t!==null&&(t.flags|=32),ai}function Zn(t,n,a){(t===Zt&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)&&(yr(t,0),qa(t,Rt,ai,!1)),In(t,a),((zt&2)===0||t!==Zt)&&(t===Zt&&((zt&2)===0&&(Ds|=a),sn===4&&qa(t,Rt,ai,!1)),Hi(t))}function mg(t,n,a){if((zt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Je(t,n),u=o?ny(t,n):cd(t,n,!0),d=o;do{if(u===0){_r&&!o&&qa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!ey(a)){u=cd(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;e:{var U=t;u=Io;var Z=U.current.memoizedState.isDehydrated;if(Z&&(yr(U,E).flags|=256),E=cd(U,E,!1),E!==2){if(nd&&!Z){U.errorRecoveryDisabledLanes|=d,Ds|=d,u=4;break e}d=Yn,Yn=u,d!==null&&(Yn===null?Yn=d:Yn.push.apply(Yn,d))}u=E}if(d=!1,u!==2)continue}}if(u===1){yr(t,0),qa(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,ai,!ka);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=uc+300-C(),10<u)){if(qa(o,n,ai,!ka),Me(o,0,!0)!==0)break e;ga=n,o.timeoutHandle=Wg(gg.bind(null,o,a,Yn,dc,ad,n,ai,Ds,xr,ka,d,"Throttled",-0,0),u);break e}gg(o,a,Yn,dc,ad,n,ai,Ds,xr,ka,d,null,-0,0)}}break}while(!0);Hi(t)}function gg(t,n,a,o,u,d,E,U,Z,he,Ee,Ce,me,Se){if(t.timeoutHandle=-1,Ce=n.subtreeFlags,Ce&8192||(Ce&16785408)===16785408){Ce={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ta},lg(n,d,Ce);var et=(d&62914560)===d?uc-C():(d&4194048)===d?dg-C():0;if(et=By(Ce,et),et!==null){ga=d,t.cancelPendingCommit=et(Eg.bind(null,t,n,d,a,o,u,E,U,Z,Ee,Ce,null,me,Se)),qa(t,d,E,!he);return}}Eg(t,n,d,a,o,u,E,U,Z)}function ey(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!$n(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(t,n,a,o){n&=~id,n&=~Ds,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Ve(u),E=1<<d;o[d]=-1,u&=~E}a!==0&&so(t,a,n)}function hc(){return(zt&6)===0?(zo(0),!1):!0}function ld(){if(Et!==null){if(Vt===0)var t=Et.return;else t=Et,sa=Ms=null,Ef(t),fr=null,yo=0,t=Et;for(;t!==null;)q0(t.alternate,t),t=t.return;Et=null}}function yr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Sy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ga=0,ld(),Zt=t,Et=a=ia(t.current,null),Rt=n,Vt=0,ii=null,ka=!1,_r=Je(t,n),nd=!1,xr=ai=id=Ds=ja=sn=0,Yn=Io=null,ad=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ve(o),d=1<<u;n|=t[u],o&=~d}return ma=n,Ol(),a}function vg(t,n){vt=null,D.H=wo,n===ur||n===Vl?(n=Lm(),Vt=3):n===df?(n=Lm(),Vt=4):Vt=n===Hf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,Et===null&&(sn=1,nc(t,di(n,t.current)))}function _g(){var t=ti.current;return t===null?!0:(Rt&4194048)===Rt?gi===null:(Rt&62914560)===Rt||(Rt&536870912)!==0?t===gi:!1}function xg(){var t=D.H;return D.H=wo,t===null?wo:t}function Sg(){var t=D.A;return D.A=JS,t}function pc(){sn=4,ka||(Rt&4194048)!==Rt&&ti.current!==null||(_r=!0),(ja&134217727)===0&&(Ds&134217727)===0||Zt===null||qa(Zt,Rt,ai,!1)}function cd(t,n,a){var o=zt;zt|=2;var u=xg(),d=Sg();(Zt!==t||Rt!==n)&&(dc=null,yr(t,n)),n=!1;var E=sn;e:do try{if(Vt!==0&&Et!==null){var U=Et,Z=ii;switch(Vt){case 8:ld(),E=6;break e;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var he=Vt;if(Vt=0,ii=null,Mr(t,U,Z,he),a&&_r){E=0;break e}break;default:he=Vt,Vt=0,ii=null,Mr(t,U,Z,he)}}ty(),E=sn;break}catch(Ee){vg(t,Ee)}while(!0);return n&&t.shellSuspendCounter++,sa=Ms=null,zt=o,D.H=u,D.A=d,Et===null&&(Zt=null,Rt=0,Ol()),E}function ty(){for(;Et!==null;)yg(Et)}function ny(t,n){var a=zt;zt|=2;var o=xg(),u=Sg();Zt!==t||Rt!==n?(dc=null,fc=C()+500,yr(t,n)):_r=Je(t,n);e:do try{if(Vt!==0&&Et!==null){n=Et;var d=ii;t:switch(Vt){case 1:Vt=0,ii=null,Mr(t,n,d,1);break;case 2:case 9:if(Dm(d)){Vt=0,ii=null,Mg(n);break}n=function(){Vt!==2&&Vt!==9||Zt!==t||(Vt=7),Hi(t)},d.then(n,n);break e;case 3:Vt=7;break e;case 4:Vt=5;break e;case 7:Dm(d)?(Vt=0,ii=null,Mg(n)):(Vt=0,ii=null,Mr(t,n,d,7));break;case 5:var E=null;switch(Et.tag){case 26:E=Et.memoizedState;case 5:case 27:var U=Et;if(E?ov(E):U.stateNode.complete){Vt=0,ii=null;var Z=U.sibling;if(Z!==null)Et=Z;else{var he=U.return;he!==null?(Et=he,mc(he)):Et=null}break t}}Vt=0,ii=null,Mr(t,n,d,5);break;case 6:Vt=0,ii=null,Mr(t,n,d,6);break;case 8:ld(),sn=6;break e;default:throw Error(s(462))}}iy();break}catch(Ee){vg(t,Ee)}while(!0);return sa=Ms=null,D.H=o,D.A=u,zt=a,Et!==null?0:(Zt=null,Rt=0,Ol(),sn)}function iy(){for(;Et!==null&&!He();)yg(Et)}function yg(t){var n=X0(t.alternate,t,ma);t.memoizedProps=t.pendingProps,n===null?mc(t):Et=n}function Mg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=z0(a,n,n.pendingProps,n.type,void 0,Rt);break;case 11:n=z0(a,n,n.pendingProps,n.type.render,n.ref,Rt);break;case 5:Ef(n);default:q0(a,n),n=Et=Sm(n,ma),n=X0(a,n,ma)}t.memoizedProps=t.pendingProps,n===null?mc(t):Et=n}function Mr(t,n,a,o){sa=Ms=null,Ef(n),fr=null,yo=0;var u=n.return;try{if(XS(t,u,n,a,Rt)){sn=1,nc(t,di(a,t.current)),Et=null;return}}catch(d){if(u!==null)throw Et=u,d;sn=1,nc(t,di(a,t.current)),Et=null;return}n.flags&32768?(Nt||o===1?t=!0:_r||(Rt&536870912)!==0?t=!1:(ka=t=!0,(o===2||o===9||o===3||o===6)&&(o=ti.current,o!==null&&o.tag===13&&(o.flags|=16384))),bg(n,t)):mc(n)}function mc(t){var n=t;do{if((n.flags&32768)!==0){bg(n,ka);return}t=n.return;var a=YS(n.alternate,n,ma);if(a!==null){Et=a;return}if(n=n.sibling,n!==null){Et=n;return}Et=n=t}while(n!==null);sn===0&&(sn=5)}function bg(t,n){do{var a=ZS(t.alternate,t);if(a!==null){a.flags&=32767,Et=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Et=t;return}Et=t=a}while(t!==null);sn=6,Et=null}function Eg(t,n,a,o,u,d,E,U,Z){t.cancelPendingCommit=null;do gc();while(xn!==0);if((zt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Ku,Mi(t,a,d,E,U,Z),t===Zt&&(Et=Zt=null,Rt=0),Sr=n,Wa=t,ga=a,sd=d,rd=u,hg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,oy(ve,function(){return wg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=D.T,D.T=null,u=z.p,z.p=2,E=zt,zt|=4;try{KS(t,n,a)}finally{zt=E,z.p=u,D.T=o}}xn=1,Tg(),Ag(),Rg()}}function Tg(){if(xn===1){xn=0;var t=Wa,n=Sr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=D.T,D.T=null;var o=z.p;z.p=2;var u=zt;zt|=4;try{sg(n,t);var d=yd,E=fm(t.containerInfo),U=d.focusedElem,Z=d.selectionRange;if(E!==U&&U&&U.ownerDocument&&um(U.ownerDocument.documentElement,U)){if(Z!==null&&Xu(U)){var he=Z.start,Ee=Z.end;if(Ee===void 0&&(Ee=he),"selectionStart"in U)U.selectionStart=he,U.selectionEnd=Math.min(Ee,U.value.length);else{var Ce=U.ownerDocument||document,me=Ce&&Ce.defaultView||window;if(me.getSelection){var Se=me.getSelection(),et=U.textContent.length,ut=Math.min(Z.start,et),qt=Z.end===void 0?ut:Math.min(Z.end,et);!Se.extend&&ut>qt&&(E=qt,qt=ut,ut=E);var ce=cm(U,ut),ie=cm(U,qt);if(ce&&ie&&(Se.rangeCount!==1||Se.anchorNode!==ce.node||Se.anchorOffset!==ce.offset||Se.focusNode!==ie.node||Se.focusOffset!==ie.offset)){var de=Ce.createRange();de.setStart(ce.node,ce.offset),Se.removeAllRanges(),ut>qt?(Se.addRange(de),Se.extend(ie.node,ie.offset)):(de.setEnd(ie.node,ie.offset),Se.addRange(de))}}}}for(Ce=[],Se=U;Se=Se.parentNode;)Se.nodeType===1&&Ce.push({element:Se,left:Se.scrollLeft,top:Se.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<Ce.length;U++){var Ae=Ce[U];Ae.element.scrollLeft=Ae.left,Ae.element.scrollTop=Ae.top}}Cc=!!Sd,yd=Sd=null}finally{zt=u,z.p=o,D.T=a}}t.current=n,xn=2}}function Ag(){if(xn===2){xn=0;var t=Wa,n=Sr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var o=z.p;z.p=2;var u=zt;zt|=4;try{eg(t,n.alternate,n)}finally{zt=u,z.p=o,D.T=a}}xn=3}}function Rg(){if(xn===4||xn===3){xn=0,B();var t=Wa,n=Sr,a=ga,o=hg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,Sr=Wa=null,Cg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Xa=null),Ys(a),n=n.stateNode,De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(Ne,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=D.T,u=z.p,z.p=2,D.T=null;try{for(var d=t.onRecoverableError,E=0;E<o.length;E++){var U=o[E];d(U.value,{componentStack:U.stack})}}finally{D.T=n,z.p=u}}(ga&3)!==0&&gc(),Hi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===od?Bo++:(Bo=0,od=t):Bo=0,zo(0)}}function Cg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,xo(n)))}function gc(){return Tg(),Ag(),Rg(),wg()}function wg(){if(xn!==5)return!1;var t=Wa,n=sd;sd=0;var a=Ys(ga),o=D.T,u=z.p;try{z.p=32>a?32:a,D.T=null,a=rd,rd=null;var d=Wa,E=ga;if(xn=0,Sr=Wa=null,ga=0,(zt&6)!==0)throw Error(s(331));var U=zt;if(zt|=4,ug(d.current),og(d,d.current,E,a),zt=U,zo(0,!1),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(Ne,d)}catch{}return!0}finally{z.p=u,D.T=o,Cg(t,n)}}function Ng(t,n,a){n=di(a,n),n=zf(t.stateNode,n,2),t=za(t,n,2),t!==null&&(In(t,2),Hi(t))}function kt(t,n,a){if(t.tag===3)Ng(t,t,a);else for(;n!==null;){if(n.tag===3){Ng(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xa===null||!Xa.has(o))){t=di(a,t),a=D0(2),o=za(n,a,2),o!==null&&(U0(a,o,n,t),In(o,2),Hi(o));break}}n=n.return}}function ud(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new $S;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(nd=!0,u.add(a),t=ay.bind(null,t,n,a),n.then(t,t))}function ay(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Zt===t&&(Rt&a)===a&&(sn===4||sn===3&&(Rt&62914560)===Rt&&300>C()-uc?(zt&2)===0&&yr(t,0):id|=a,xr===Rt&&(xr=0)),Hi(t)}function Dg(t,n){n===0&&(n=Gt()),t=xs(t,n),t!==null&&(In(t,n),Hi(t))}function sy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Dg(t,a)}function ry(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Dg(t,a)}function oy(t,n){return rt(t,n)}var vc=null,br=null,fd=!1,_c=!1,dd=!1,Ya=0;function Hi(t){t!==br&&t.next===null&&(br===null?vc=br=t:br=br.next=t),_c=!0,fd||(fd=!0,cy())}function zo(t,n){if(!dd&&_c){dd=!0;do for(var a=!1,o=vc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var E=o.suspendedLanes,U=o.pingedLanes;d=(1<<31-Ve(42|t)+1)-1,d&=u&~(E&~U),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Pg(o,d))}else d=Rt,d=Me(o,o===Zt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Je(o,d)||(a=!0,Pg(o,d));o=o.next}while(a);dd=!1}}function ly(){Ug()}function Ug(){_c=fd=!1;var t=0;Ya!==0&&xy()&&(t=Ya);for(var n=C(),a=null,o=vc;o!==null;){var u=o.next,d=Lg(o,n);d===0?(o.next=null,a===null?vc=u:a.next=u,u===null&&(br=a)):(a=o,(t!==0||(d&3)!==0)&&(_c=!0)),o=u}xn!==0&&xn!==5||zo(t),Ya!==0&&(Ya=0)}function Lg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var E=31-Ve(d),U=1<<E,Z=u[E];Z===-1?((U&a)===0||(U&o)!==0)&&(u[E]=ht(U,n)):Z<=n&&(t.expiredLanes|=U),d&=~U}if(n=Zt,a=Rt,a=Me(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Vt===2||Vt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&lt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Je(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&lt(o),Ys(a)){case 2:case 8:a=Te;break;case 32:a=ve;break;case 268435456:a=Oe;break;default:a=ve}return o=Og.bind(null,t),a=rt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&lt(o),t.callbackPriority=2,t.callbackNode=null,2}function Og(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(gc()&&t.callbackNode!==a)return null;var o=Rt;return o=Me(t,t===Zt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(mg(t,o,n),Lg(t,C()),t.callbackNode!=null&&t.callbackNode===a?Og.bind(null,t):null)}function Pg(t,n){if(gc())return null;mg(t,n,!0)}function cy(){yy(function(){(zt&6)!==0?rt(ye,ly):Ug()})}function hd(){if(Ya===0){var t=lr;t===0&&(t=Ie,Ie<<=1,(Ie&261888)===0&&(Ie=256)),Ya=t}return Ya}function Fg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Al(""+t)}function Ig(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function uy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Fg((u[vn]||null).action),E=o.submitter;E&&(n=(n=E[vn]||null)?Fg(n.formAction):E.getAttribute("formAction"),n!==null&&(d=n,E=null));var U=new Nl("action","action",null,o,u);t.push({event:U,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var Z=E?Ig(u,E):new FormData(u);Lf(a,{pending:!0,data:Z,method:u.method,action:d},null,Z)}}else typeof d=="function"&&(U.preventDefault(),Z=E?Ig(u,E):new FormData(u),Lf(a,{pending:!0,data:Z,method:u.method,action:d},d,Z))},currentTarget:u}]})}}for(var pd=0;pd<Zu.length;pd++){var md=Zu[pd],fy=md.toLowerCase(),dy=md[0].toUpperCase()+md.slice(1);Ai(fy,"on"+dy)}Ai(pm,"onAnimationEnd"),Ai(mm,"onAnimationIteration"),Ai(gm,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(CS,"onTransitionRun"),Ai(wS,"onTransitionStart"),Ai(NS,"onTransitionCancel"),Ai(vm,"onTransitionEnd"),Ge("onMouseEnter",["mouseout","mouseover"]),Ge("onMouseLeave",["mouseout","mouseover"]),Ge("onPointerEnter",["pointerout","pointerover"]),Ge("onPointerLeave",["pointerout","pointerover"]),ue("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ue("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ue("onBeforeInput",["compositionend","keypress","textInput","paste"]),ue("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ue("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ue("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ho));function Bg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var E=o.length-1;0<=E;E--){var U=o[E],Z=U.instance,he=U.currentTarget;if(U=U.listener,Z!==d&&u.isPropagationStopped())break e;d=U,u.currentTarget=he;try{d(u)}catch(Ee){Ll(Ee)}u.currentTarget=null,d=Z}else for(E=0;E<o.length;E++){if(U=o[E],Z=U.instance,he=U.currentTarget,U=U.listener,Z!==d&&u.isPropagationStopped())break e;d=U,u.currentTarget=he;try{d(u)}catch(Ee){Ll(Ee)}u.currentTarget=null,d=Z}}}}function Tt(t,n){var a=n[wa];a===void 0&&(a=n[wa]=new Set);var o=t+"__bubble";a.has(o)||(zg(n,t,2,!1),a.add(o))}function gd(t,n,a){var o=0;n&&(o|=4),zg(a,t,o,n)}var xc="_reactListening"+Math.random().toString(36).slice(2);function vd(t){if(!t[xc]){t[xc]=!0,xe.forEach(function(a){a!=="selectionchange"&&(hy.has(a)||gd(a,!1,t),gd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[xc]||(n[xc]=!0,gd("selectionchange",!1,n))}}function zg(t,n,a,o){switch(pv(n)){case 2:var u=Gy;break;case 8:u=Vy;break;default:u=Ud}a=u.bind(null,n,a,t),u=void 0,!Fu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function _d(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var U=o.stateNode.containerInfo;if(U===u)break;if(E===4)for(E=o.return;E!==null;){var Z=E.tag;if((Z===3||Z===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;U!==null;){if(E=Na(U),E===null)return;if(Z=E.tag,Z===5||Z===6||Z===26||Z===27){o=d=E;continue e}U=U.parentNode}}o=o.return}jp(function(){var he=d,Ee=Ou(a),Ce=[];e:{var me=_m.get(t);if(me!==void 0){var Se=Nl,et=t;switch(t){case"keypress":if(Cl(a)===0)break e;case"keydown":case"keyup":Se=rS;break;case"focusin":et="focus",Se=Hu;break;case"focusout":et="blur",Se=Hu;break;case"beforeblur":case"afterblur":Se=Hu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Se=qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Se=Yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Se=cS;break;case pm:case mm:case gm:Se=Qx;break;case vm:Se=fS;break;case"scroll":case"scrollend":Se=Wx;break;case"wheel":Se=hS;break;case"copy":case"cut":case"paste":Se=$x;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Se=Zp;break;case"toggle":case"beforetoggle":Se=mS}var ut=(n&4)!==0,qt=!ut&&(t==="scroll"||t==="scrollend"),ce=ut?me!==null?me+"Capture":null:me;ut=[];for(var ie=he,de;ie!==null;){var Ae=ie;if(de=Ae.stateNode,Ae=Ae.tag,Ae!==5&&Ae!==26&&Ae!==27||de===null||ce===null||(Ae=oo(ie,ce),Ae!=null&&ut.push(Go(ie,Ae,de))),qt)break;ie=ie.return}0<ut.length&&(me=new Se(me,et,null,a,Ee),Ce.push({event:me,listeners:ut}))}}if((n&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",Se=t==="mouseout"||t==="pointerout",me&&a!==Lu&&(et=a.relatedTarget||a.fromElement)&&(Na(et)||et[$i]))break e;if((Se||me)&&(me=Ee.window===Ee?Ee:(me=Ee.ownerDocument)?me.defaultView||me.parentWindow:window,Se?(et=a.relatedTarget||a.toElement,Se=he,et=et?Na(et):null,et!==null&&(qt=c(et),ut=et.tag,et!==qt||ut!==5&&ut!==27&&ut!==6)&&(et=null)):(Se=null,et=he),Se!==et)){if(ut=qp,Ae="onMouseLeave",ce="onMouseEnter",ie="mouse",(t==="pointerout"||t==="pointerover")&&(ut=Zp,Ae="onPointerLeave",ce="onPointerEnter",ie="pointer"),qt=Se==null?me:ms(Se),de=et==null?me:ms(et),me=new ut(Ae,ie+"leave",Se,a,Ee),me.target=qt,me.relatedTarget=de,Ae=null,Na(Ee)===he&&(ut=new ut(ce,ie+"enter",et,a,Ee),ut.target=de,ut.relatedTarget=qt,Ae=ut),qt=Ae,Se&&et)t:{for(ut=py,ce=Se,ie=et,de=0,Ae=ce;Ae;Ae=ut(Ae))de++;Ae=0;for(var ct=ie;ct;ct=ut(ct))Ae++;for(;0<de-Ae;)ce=ut(ce),de--;for(;0<Ae-de;)ie=ut(ie),Ae--;for(;de--;){if(ce===ie||ie!==null&&ce===ie.alternate){ut=ce;break t}ce=ut(ce),ie=ut(ie)}ut=null}else ut=null;Se!==null&&Hg(Ce,me,Se,ut,!1),et!==null&&qt!==null&&Hg(Ce,qt,et,ut,!0)}}e:{if(me=he?ms(he):window,Se=me.nodeName&&me.nodeName.toLowerCase(),Se==="select"||Se==="input"&&me.type==="file")var It=im;else if(tm(me))if(am)It=TS;else{It=bS;var at=MS}else Se=me.nodeName,!Se||Se.toLowerCase()!=="input"||me.type!=="checkbox"&&me.type!=="radio"?he&&Ks(he.elementType)&&(It=im):It=ES;if(It&&(It=It(t,he))){nm(Ce,It,a,Ee);break e}at&&at(t,me,he),t==="focusout"&&he&&me.type==="number"&&he.memoizedProps.value!=null&&Ei(me,"number",me.value)}switch(at=he?ms(he):window,t){case"focusin":(tm(at)||at.contentEditable==="true")&&(er=at,Wu=he,go=null);break;case"focusout":go=Wu=er=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,dm(Ce,a,Ee);break;case"selectionchange":if(RS)break;case"keydown":case"keyup":dm(Ce,a,Ee)}var St;if(Vu)e:{switch(t){case"compositionstart":var Ct="onCompositionStart";break e;case"compositionend":Ct="onCompositionEnd";break e;case"compositionupdate":Ct="onCompositionUpdate";break e}Ct=void 0}else $s?$p(t,a)&&(Ct="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ct="onCompositionStart");Ct&&(Kp&&a.locale!=="ko"&&($s||Ct!=="onCompositionStart"?Ct==="onCompositionEnd"&&$s&&(St=Xp()):(Ua=Ee,Iu="value"in Ua?Ua.value:Ua.textContent,$s=!0)),at=Sc(he,Ct),0<at.length&&(Ct=new Yp(Ct,t,null,a,Ee),Ce.push({event:Ct,listeners:at}),St?Ct.data=St:(St=em(a),St!==null&&(Ct.data=St)))),(St=vS?_S(t,a):xS(t,a))&&(Ct=Sc(he,"onBeforeInput"),0<Ct.length&&(at=new Yp("onBeforeInput","beforeinput",null,a,Ee),Ce.push({event:at,listeners:Ct}),at.data=St)),uy(Ce,t,he,a,Ee)}Bg(Ce,n)})}function Go(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Sc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=oo(t,a),u!=null&&o.unshift(Go(t,u,d)),u=oo(t,n),u!=null&&o.push(Go(t,u,d))),t.tag===3)return o;t=t.return}return[]}function py(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Hg(t,n,a,o,u){for(var d=n._reactName,E=[];a!==null&&a!==o;){var U=a,Z=U.alternate,he=U.stateNode;if(U=U.tag,Z!==null&&Z===o)break;U!==5&&U!==26&&U!==27||he===null||(Z=he,u?(he=oo(a,d),he!=null&&E.unshift(Go(a,he,Z))):u||(he=oo(a,d),he!=null&&E.push(Go(a,he,Z)))),a=a.return}E.length!==0&&t.push({event:n,listeners:E})}var my=/\r\n?/g,gy=/\u0000|\uFFFD/g;function Gg(t){return(typeof t=="string"?t:""+t).replace(my,`
`).replace(gy,"")}function Vg(t,n){return n=Gg(n),Gg(t)===n}function Wt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Hn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Hn(t,""+o);break;case"className":mt(t,"class",o);break;case"tabIndex":mt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":mt(t,a,o);break;case"style":ea(t,o,d);break;case"data":if(n!=="object"){mt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Al(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Wt(t,n,"name",u.name,u,null),Wt(t,n,"formEncType",u.formEncType,u,null),Wt(t,n,"formMethod",u.formMethod,u,null),Wt(t,n,"formTarget",u.formTarget,u,null)):(Wt(t,n,"encType",u.encType,u,null),Wt(t,n,"method",u.method,u,null),Wt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Al(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ta);break;case"onScroll":o!=null&&Tt("scroll",t);break;case"onScrollEnd":o!=null&&Tt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Al(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Tt("beforetoggle",t),Tt("toggle",t),ft(t,"popover",o);break;case"xlinkActuate":$e(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":$e(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":$e(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":$e(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":$e(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":$e(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":$e(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":$e(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":$e(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ft(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=jx.get(a)||a,ft(t,a,o))}}function xd(t,n,a,o,u,d){switch(a){case"style":ea(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Hn(t,o):(typeof o=="number"||typeof o=="bigint")&&Hn(t,""+o);break;case"onScroll":o!=null&&Tt("scroll",t);break;case"onScrollEnd":o!=null&&Tt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[vn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ft(t,a,o)}}}function Rn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",t),Tt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var E=a[d];if(E!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(t,n,d,E,a,null)}}u&&Wt(t,n,"srcSet",a.srcSet,a,null),o&&Wt(t,n,"src",a.src,a,null);return;case"input":Tt("invalid",t);var U=d=E=u=null,Z=null,he=null;for(o in a)if(a.hasOwnProperty(o)){var Ee=a[o];if(Ee!=null)switch(o){case"name":u=Ee;break;case"type":E=Ee;break;case"checked":Z=Ee;break;case"defaultChecked":he=Ee;break;case"value":d=Ee;break;case"defaultValue":U=Ee;break;case"children":case"dangerouslySetInnerHTML":if(Ee!=null)throw Error(s(137,n));break;default:Wt(t,n,o,Ee,a,null)}}Qn(t,d,U,Z,he,E,u,!1);return;case"select":Tt("invalid",t),o=E=d=null;for(u in a)if(a.hasOwnProperty(u)&&(U=a[u],U!=null))switch(u){case"value":d=U;break;case"defaultValue":E=U;break;case"multiple":o=U;default:Wt(t,n,u,U,a,null)}n=d,a=E,t.multiple=!!o,n!=null?Jn(t,!!o,n,!1):a!=null&&Jn(t,!!o,a,!0);return;case"textarea":Tt("invalid",t),d=u=o=null;for(E in a)if(a.hasOwnProperty(E)&&(U=a[E],U!=null))switch(E){case"value":o=U;break;case"defaultValue":u=U;break;case"children":d=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(91));break;default:Wt(t,n,E,U,a,null)}un(t,o,u,d);return;case"option":for(Z in a)if(a.hasOwnProperty(Z)&&(o=a[Z],o!=null))switch(Z){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Wt(t,n,Z,o,a,null)}return;case"dialog":Tt("beforetoggle",t),Tt("toggle",t),Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":Tt("load",t);break;case"video":case"audio":for(o=0;o<Ho.length;o++)Tt(Ho[o],t);break;case"image":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"embed":case"source":case"link":Tt("error",t),Tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(he in a)if(a.hasOwnProperty(he)&&(o=a[he],o!=null))switch(he){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Wt(t,n,he,o,a,null)}return;default:if(Ks(n)){for(Ee in a)a.hasOwnProperty(Ee)&&(o=a[Ee],o!==void 0&&xd(t,n,Ee,o,a,void 0));return}}for(U in a)a.hasOwnProperty(U)&&(o=a[U],o!=null&&Wt(t,n,U,o,a,null))}function vy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,E=null,U=null,Z=null,he=null,Ee=null;for(Se in a){var Ce=a[Se];if(a.hasOwnProperty(Se)&&Ce!=null)switch(Se){case"checked":break;case"value":break;case"defaultValue":Z=Ce;default:o.hasOwnProperty(Se)||Wt(t,n,Se,null,o,Ce)}}for(var me in o){var Se=o[me];if(Ce=a[me],o.hasOwnProperty(me)&&(Se!=null||Ce!=null))switch(me){case"type":d=Se;break;case"name":u=Se;break;case"checked":he=Se;break;case"defaultChecked":Ee=Se;break;case"value":E=Se;break;case"defaultValue":U=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(s(137,n));break;default:Se!==Ce&&Wt(t,n,me,Se,o,Ce)}}zn(t,E,U,Z,he,Ee,d,u);return;case"select":Se=E=U=me=null;for(d in a)if(Z=a[d],a.hasOwnProperty(d)&&Z!=null)switch(d){case"value":break;case"multiple":Se=Z;default:o.hasOwnProperty(d)||Wt(t,n,d,null,o,Z)}for(u in o)if(d=o[u],Z=a[u],o.hasOwnProperty(u)&&(d!=null||Z!=null))switch(u){case"value":me=d;break;case"defaultValue":U=d;break;case"multiple":E=d;default:d!==Z&&Wt(t,n,u,d,o,Z)}n=U,a=E,o=Se,me!=null?Jn(t,!!a,me,!1):!!o!=!!a&&(n!=null?Jn(t,!!a,n,!0):Jn(t,!!a,a?[]:"",!1));return;case"textarea":Se=me=null;for(U in a)if(u=a[U],a.hasOwnProperty(U)&&u!=null&&!o.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:Wt(t,n,U,null,o,u)}for(E in o)if(u=o[E],d=a[E],o.hasOwnProperty(E)&&(u!=null||d!=null))switch(E){case"value":me=u;break;case"defaultValue":Se=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Wt(t,n,E,u,o,d)}Ht(t,me,Se);return;case"option":for(var et in a)if(me=a[et],a.hasOwnProperty(et)&&me!=null&&!o.hasOwnProperty(et))switch(et){case"selected":t.selected=!1;break;default:Wt(t,n,et,null,o,me)}for(Z in o)if(me=o[Z],Se=a[Z],o.hasOwnProperty(Z)&&me!==Se&&(me!=null||Se!=null))switch(Z){case"selected":t.selected=me&&typeof me!="function"&&typeof me!="symbol";break;default:Wt(t,n,Z,me,o,Se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ut in a)me=a[ut],a.hasOwnProperty(ut)&&me!=null&&!o.hasOwnProperty(ut)&&Wt(t,n,ut,null,o,me);for(he in o)if(me=o[he],Se=a[he],o.hasOwnProperty(he)&&me!==Se&&(me!=null||Se!=null))switch(he){case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:Wt(t,n,he,me,o,Se)}return;default:if(Ks(n)){for(var qt in a)me=a[qt],a.hasOwnProperty(qt)&&me!==void 0&&!o.hasOwnProperty(qt)&&xd(t,n,qt,void 0,o,me);for(Ee in o)me=o[Ee],Se=a[Ee],!o.hasOwnProperty(Ee)||me===Se||me===void 0&&Se===void 0||xd(t,n,Ee,me,o,Se);return}}for(var ce in a)me=a[ce],a.hasOwnProperty(ce)&&me!=null&&!o.hasOwnProperty(ce)&&Wt(t,n,ce,null,o,me);for(Ce in o)me=o[Ce],Se=a[Ce],!o.hasOwnProperty(Ce)||me===Se||me==null&&Se==null||Wt(t,n,Ce,me,o,Se)}function kg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function _y(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,E=u.initiatorType,U=u.duration;if(d&&U&&kg(E)){for(E=0,U=u.responseEnd,o+=1;o<a.length;o++){var Z=a[o],he=Z.startTime;if(he>U)break;var Ee=Z.transferSize,Ce=Z.initiatorType;Ee&&kg(Ce)&&(Z=Z.responseEnd,E+=Ee*(Z<U?1:(U-he)/(Z-he)))}if(--o,n+=8*(d+E)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Sd=null,yd=null;function yc(t){return t.nodeType===9?t:t.ownerDocument}function jg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Md(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var bd=null;function xy(){var t=window.event;return t&&t.type==="popstate"?t===bd?!1:(bd=t,!0):(bd=null,!1)}var Wg=typeof setTimeout=="function"?setTimeout:void 0,Sy=typeof clearTimeout=="function"?clearTimeout:void 0,qg=typeof Promise=="function"?Promise:void 0,yy=typeof queueMicrotask=="function"?queueMicrotask:typeof qg<"u"?function(t){return qg.resolve(null).then(t).catch(My)}:Wg;function My(t){setTimeout(function(){throw t})}function Za(t){return t==="head"}function Yg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Rr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Vo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Vo(a);for(var d=a.firstChild;d;){var E=d.nextSibling,U=d.nodeName;d[ps]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=E}}else a==="body"&&Vo(t.ownerDocument.body);a=u}while(a);Rr(n)}function Zg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Ed(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ed(a),ro(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function by(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ps])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function Ey(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function Kg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function Td(t){return t.data==="$?"||t.data==="$~"}function Ad(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ty(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Rd=null;function Qg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return vi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Jg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function $g(t,n,a){switch(n=yc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Vo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ro(t)}var _i=new Map,ev=new Set;function Mc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var va=z.d;z.d={f:Ay,r:Ry,D:Cy,C:wy,L:Ny,m:Dy,X:Ly,S:Uy,M:Oy};function Ay(){var t=va.f(),n=hc();return t||n}function Ry(t){var n=Da(t);n!==null&&n.tag===5&&n.type==="form"?v0(n):va.r(t)}var Er=typeof document>"u"?null:document;function tv(t,n,a){var o=Er;if(o&&typeof n=="string"&&n){var u=pt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),ev.has(u)||(ev.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",t),se(n),o.head.appendChild(n)))}}function Cy(t){va.D(t),tv("dns-prefetch",t,null)}function wy(t,n){va.C(t,n),tv("preconnect",t,n)}function Ny(t,n,a){va.L(t,n,a);var o=Er;if(o&&t&&n){var u='link[rel="preload"][as="'+pt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pt(a.imageSizes)+'"]')):u+='[href="'+pt(t)+'"]';var d=u;switch(n){case"style":d=Tr(t);break;case"script":d=Ar(t)}_i.has(d)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),_i.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(ko(d))||n==="script"&&o.querySelector(jo(d))||(n=o.createElement("link"),Rn(n,"link",t),se(n),o.head.appendChild(n)))}}function Dy(t,n){va.m(t,n);var a=Er;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pt(o)+'"][href="'+pt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ar(t)}if(!_i.has(d)&&(t=g({rel:"modulepreload",href:t},n),_i.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(jo(d)))return}o=a.createElement("link"),Rn(o,"link",t),se(o),a.head.appendChild(o)}}}function Uy(t,n,a){va.S(t,n,a);var o=Er;if(o&&t){var u=P(o).hoistableStyles,d=Tr(t);n=n||"default";var E=u.get(d);if(!E){var U={loading:0,preload:null};if(E=o.querySelector(ko(d)))U.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=_i.get(d))&&Cd(t,a);var Z=E=o.createElement("link");se(Z),Rn(Z,"link",t),Z._p=new Promise(function(he,Ee){Z.onload=he,Z.onerror=Ee}),Z.addEventListener("load",function(){U.loading|=1}),Z.addEventListener("error",function(){U.loading|=2}),U.loading|=4,bc(E,n,o)}E={type:"stylesheet",instance:E,count:1,state:U},u.set(d,E)}}}function Ly(t,n){va.X(t,n);var a=Er;if(a&&t){var o=P(a).hoistableScripts,u=Ar(t),d=o.get(u);d||(d=a.querySelector(jo(u)),d||(t=g({src:t,async:!0},n),(n=_i.get(u))&&wd(t,n),d=a.createElement("script"),se(d),Rn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Oy(t,n){va.M(t,n);var a=Er;if(a&&t){var o=P(a).hoistableScripts,u=Ar(t),d=o.get(u);d||(d=a.querySelector(jo(u)),d||(t=g({src:t,async:!0,type:"module"},n),(n=_i.get(u))&&wd(t,n),d=a.createElement("script"),se(d),Rn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function nv(t,n,a,o){var u=(u=X.current)?Mc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Tr(a.href),a=P(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Tr(a.href);var d=P(u).hoistableStyles,E=d.get(t);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,E),(d=u.querySelector(ko(t)))&&!d._p&&(E.instance=d,E.state.loading=5),_i.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(t,a),d||Py(u,t,a,E.state))),n&&o===null)throw Error(s(528,""));return E}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ar(a),a=P(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Tr(t){return'href="'+pt(t)+'"'}function ko(t){return'link[rel="stylesheet"]['+t+"]"}function iv(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Py(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),se(n),t.head.appendChild(n))}function Ar(t){return'[src="'+pt(t)+'"]'}function jo(t){return"script[async]"+t}function av(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+pt(a.href)+'"]');if(o)return n.instance=o,se(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),se(o),Rn(o,"style",u),bc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Tr(a.href);var d=t.querySelector(ko(u));if(d)return n.state.loading|=4,n.instance=d,se(d),d;o=iv(a),(u=_i.get(u))&&Cd(o,u),d=(t.ownerDocument||t).createElement("link"),se(d);var E=d;return E._p=new Promise(function(U,Z){E.onload=U,E.onerror=Z}),Rn(d,"link",o),n.state.loading|=4,bc(d,a.precedence,t),n.instance=d;case"script":return d=Ar(a.src),(u=t.querySelector(jo(d)))?(n.instance=u,se(u),u):(o=a,(u=_i.get(d))&&(o=g({},a),wd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),se(u),Rn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,bc(o,a.precedence,t));return n.instance}function bc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,E=0;E<o.length;E++){var U=o[E];if(U.dataset.precedence===n)d=U;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function wd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ec=null;function sv(t,n,a){if(Ec===null){var o=new Map,u=Ec=new Map;u.set(a,o)}else u=Ec,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[ps]||d[cn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var E=d.getAttribute(n)||"";E=t+E;var U=o.get(E);U?U.push(d):o.set(E,[d])}}return o}function rv(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Fy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ov(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Iy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Tr(o.href),d=n.querySelector(ko(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Tc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,se(d);return}d=n.ownerDocument||n,o=iv(o),(u=_i.get(u))&&Cd(o,u),d=d.createElement("link"),se(d);var E=d;E._p=new Promise(function(U,Z){E.onload=U,E.onerror=Z}),Rn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Tc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Nd=0;function By(t,n){return t.stylesheets&&t.count===0&&Rc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Rc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&Nd===0&&(Nd=62500*_y());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Rc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Nd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Rc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ac=null;function Rc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ac=new Map,n.forEach(zy,t),Ac=null,Tc.call(t))}function zy(t,n){if(!(n.state.loading&4)){var a=Ac.get(t);if(a)var o=a.get(null);else{a=new Map,Ac.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var E=u[d];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),o=E)}o&&a.set(null,o)}u=n.instance,E=u.getAttribute("data-precedence"),d=a.get(E)||o,d===o&&a.set(null,u),a.set(E,u),this.count++,o=Tc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Xo={$$typeof:w,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function Hy(t,n,a,o,u,d,E,U,Z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ut(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ut(0),this.hiddenUpdates=Ut(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=Z,this.incompleteTransitions=new Map}function lv(t,n,a,o,u,d,E,U,Z,he,Ee,Ce){return t=new Hy(t,n,a,E,Z,he,Ee,Ce,U),n=1,d===!0&&(n|=24),d=ei(3,null,null,n),t.current=d,d.stateNode=t,n=cf(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},hf(d),t}function cv(t){return t?(t=ir,t):ir}function uv(t,n,a,o,u,d){u=cv(u),o.context===null?o.context=u:o.pendingContext=u,o=Ba(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=za(t,o,n),a!==null&&(Zn(a,t,n),bo(a,t,n))}function fv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Dd(t,n){fv(t,n),(t=t.alternate)&&fv(t,n)}function dv(t){if(t.tag===13||t.tag===31){var n=xs(t,67108864);n!==null&&Zn(n,t,67108864),Dd(t,67108864)}}function hv(t){if(t.tag===13||t.tag===31){var n=si();n=qs(n);var a=xs(t,n);a!==null&&Zn(a,t,n),Dd(t,n)}}var Cc=!0;function Gy(t,n,a,o){var u=D.T;D.T=null;var d=z.p;try{z.p=2,Ud(t,n,a,o)}finally{z.p=d,D.T=u}}function Vy(t,n,a,o){var u=D.T;D.T=null;var d=z.p;try{z.p=8,Ud(t,n,a,o)}finally{z.p=d,D.T=u}}function Ud(t,n,a,o){if(Cc){var u=Ld(o);if(u===null)_d(t,n,o,wc,a),mv(t,o);else if(jy(u,t,n,a,o))o.stopPropagation();else if(mv(t,o),n&4&&-1<ky.indexOf(t)){for(;u!==null;){var d=Da(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var E=Le(d.pendingLanes);if(E!==0){var U=d;for(U.pendingLanes|=2,U.entangledLanes|=2;E;){var Z=1<<31-Ve(E);U.entanglements[1]|=Z,E&=~Z}Hi(d),(zt&6)===0&&(fc=C()+500,zo(0))}}break;case 31:case 13:U=xs(d,2),U!==null&&Zn(U,d,2),hc(),Dd(d,2)}if(d=Ld(o),d===null&&_d(t,n,o,wc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else _d(t,n,o,null,a)}}function Ld(t){return t=Ou(t),Od(t)}var wc=null;function Od(t){if(wc=null,t=Na(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return wc=t,null}function pv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case ye:return 2;case Te:return 8;case ve:case je:return 32;case Oe:return 268435456;default:return 32}default:return 32}}var Pd=!1,Ka=null,Qa=null,Ja=null,Wo=new Map,qo=new Map,$a=[],ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mv(t,n){switch(t){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":Wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(n.pointerId)}}function Yo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Da(n),n!==null&&dv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function jy(t,n,a,o,u){switch(n){case"focusin":return Ka=Yo(Ka,t,n,a,o,u),!0;case"dragenter":return Qa=Yo(Qa,t,n,a,o,u),!0;case"mouseover":return Ja=Yo(Ja,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Wo.set(d,Yo(Wo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,qo.set(d,Yo(qo.get(d)||null,t,n,a,o,u)),!0}return!1}function gv(t){var n=Na(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Zs(t.priority,function(){hv(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Zs(t.priority,function(){hv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Nc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ld(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Lu=o,a.target.dispatchEvent(o),Lu=null}else return n=Da(a),n!==null&&dv(n),t.blockedOn=a,!1;n.shift()}return!0}function vv(t,n,a){Nc(t)&&a.delete(n)}function Xy(){Pd=!1,Ka!==null&&Nc(Ka)&&(Ka=null),Qa!==null&&Nc(Qa)&&(Qa=null),Ja!==null&&Nc(Ja)&&(Ja=null),Wo.forEach(vv),qo.forEach(vv)}function Dc(t,n){t.blockedOn===n&&(t.blockedOn=null,Pd||(Pd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Xy)))}var Uc=null;function _v(t){Uc!==t&&(Uc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Uc===t&&(Uc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Od(o||a)===null)continue;break}var d=Da(a);d!==null&&(t.splice(n,3),n-=3,Lf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Rr(t){function n(Z){return Dc(Z,t)}Ka!==null&&Dc(Ka,t),Qa!==null&&Dc(Qa,t),Ja!==null&&Dc(Ja,t),Wo.forEach(n),qo.forEach(n);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)gv(a),a.blockedOn===null&&$a.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],E=u[vn]||null;if(typeof d=="function")E||_v(a);else if(E){var U=null;if(d&&d.hasAttribute("formAction")){if(u=d,E=d[vn]||null)U=E.formAction;else if(Od(u)!==null)continue}else U=E.action;typeof U=="function"?a[o+1]=U:(a.splice(o,3),o-=3),_v(a)}}}function xv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(E){return u=E})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Fd(t){this._internalRoot=t}Lc.prototype.render=Fd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();uv(a,o,t,n,null,null)},Lc.prototype.unmount=Fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;uv(t.current,2,null,t,null,null),hc(),n[$i]=null}};function Lc(t){this._internalRoot=t}Lc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Fi();t={blockedOn:null,target:t,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,t),a===0&&gv(t)}};var Sv=e.version;if(Sv!=="19.2.4")throw Error(s(527,Sv,"19.2.4"));z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var Wy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oc.isDisabled&&Oc.supportsFiber)try{Ne=Oc.inject(Wy),De=Oc}catch{}}return Ko.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=R0,d=C0,E=w0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError)),n=lv(t,1,!1,null,null,a,o,null,u,d,E,xv),t[$i]=n.current,vd(t),new Fd(n)},Ko.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=R0,E=C0,U=w0,Z=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(U=a.onRecoverableError),a.formState!==void 0&&(Z=a.formState)),n=lv(t,1,!0,n,a??null,o,u,Z,d,E,U,xv),n.context=cv(null),a=n.current,o=si(),o=qs(o),u=Ba(o),u.callback=null,za(a,u,o),a=o,n.current.lanes=a,In(n,a),Hi(n),t[$i]=n.current,vd(t),new Lc(n)},Ko.version="19.2.4",Ko}var Nv;function sM(){if(Nv)return zd.exports;Nv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),zd.exports=aM(),zd.exports}var rM=sM();const oM=ix(rM),wt=16,Pt=250,wu=["#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2","#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2"],lM=500,Dv=1e3,cM=3e4,uM=2;function fM(r=4){const[e,i]=V.useState(!1),[s,l]=V.useState(0),[c,f]=V.useState(0),[h,m]=V.useState(null),[p,x]=V.useState(!1),[g,v]=V.useState(0),[y,M]=V.useState(null),A=V.useRef(null),_=V.useRef(null),S=V.useRef(null),R=V.useRef(null),w=V.useRef(0),N=V.useRef(0),H=V.useRef([]),L=V.useRef(!1),F=V.useRef(0),T=V.useRef(0),O=V.useRef(0),J=Pt*r;O.current=J,(!R.current||R.current[0].length!==J)&&(R.current=Array.from({length:wt},()=>new Float32Array(J)),w.current=0,N.current=0),V.useEffect(()=>(p?(A.current=Date.now(),v(0),_.current&&clearInterval(_.current),_.current=setInterval(()=>{v(Math.floor((Date.now()-A.current)/1e3))},500)):(_.current&&clearInterval(_.current),A.current=null),()=>{_.current&&clearInterval(_.current)}),[p]);const G=V.useCallback(ae=>{L.current=ae,ae||(w.current=0,N.current=0)},[]),q=V.useCallback(ae=>{const D=S.current;D&&D.readyState===WebSocket.OPEN&&D.send(JSON.stringify(ae))},[]);V.useEffect(()=>{const ae=location.hostname||"localhost",D=parseInt(location.port||"1617")-1,te=`${location.protocol==="https:"?"wss":"ws"}://${ae}:${D}`,le="/auth/ws-token";async function _e(){try{const ne=await fetch(le,{credentials:"include"});return ne.ok&&(await ne.json()).token||null}catch{return null}}let I=Dv;async function j(){const ne=await _e(),W=ne?`${te}?token=${encodeURIComponent(ne)}`:te,re=new WebSocket(W);S.current=re,re.onopen=()=>{i(!0),I=Dv},re.onclose=()=>{i(!1),m(null);const X=Math.random()*I*.3;setTimeout(j,I+X),I=Math.min(I*uM,cM)},re.onerror=()=>re.close(),re.onmessage=X=>{const ee=JSON.parse(X.data);if("record_status"in ee){const we=ee.record_status;if(x(we.recording),we.stopped){const Be=location.port||"1617";M({filename:we.stopped.filename,frames:we.stopped.frames,duration:we.stopped.duration,path:we.stopped.path,downloadUrl:`${location.protocol}//${location.hostname}:${Be}/recordings/${we.stopped.filename}`})}}if("status"in ee||L.current)return;const ge=ee.channels;if(!ge||ge.length!==wt)return;const Q=R.current,be=O.current,Re=w.current;for(let we=0;we<wt;we++)Q[we][Re]=ge[we];w.current=(Re+1)%be,N.current<be&&N.current++,F.current++;const ze=ee.t;H.current.push(ze);const Ue=performance.now();if(Ue-T.current>lM){T.current=Ue,l(F.current);const we=H.current,Be=ze-2;let Fe=0;for(;Fe<we.length&&we[Fe]<Be;)Fe++;if(Fe>0&&we.splice(0,Fe),we.length>1){const k=we[we.length-1]-we[0];k>0&&f(Math.round((we.length-1)/k))}const qe=Math.round((Date.now()/1e3-ze)*1e3);qe>=0&&qe<1e4&&m(qe)}}}return j(),()=>{const ne=S.current;ne&&ne.close()}},[]);const K=V.useCallback(()=>M(null),[]),Y=V.useMemo(()=>({buffers:R,writeIndex:w,samplesInBuffer:N,bufferSize:J,gridSuspended:!1}),[]);return Y.bufferSize=J,{connected:e,sampleCount:s,hz:c,latencyMs:h,recording:p,recordElapsed:g,recordResult:y,data:Y,dismissRecordResult:K,setPaused:G,sendCommand:q}}function Pc({children:r}){const[e,i]=V.useState("checking"),[s,l]=V.useState(""),[c,f]=V.useState("");V.useEffect(()=>{(async()=>{try{const p=await fetch("/auth/status",{credentials:"include"});if(!p.ok){i("login");return}const x=await p.json();i(x.authenticated?"ok":"login")}catch(p){console.error("Auth check error:",p),i("login")}})()},[]);async function h(m){m.preventDefault(),f("");try{const x=await(await fetch("/auth",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({code:s})})).json();x.ok?i("ok"):(f(x.error||"Invalid code"),l(""))}catch{f("Server unreachable")}}return e==="checking"?null:e==="ok"?b.jsx(b.Fragment,{children:r}):b.jsx("div",{className:"auth-overlay",children:b.jsxs("div",{className:"auth-card",children:[b.jsxs("h1",{children:["Pi",b.jsx("span",{children:"EEG"}),"-16"]}),b.jsx("p",{className:"auth-sub",children:"Enter the access code displayed in the server console"}),b.jsxs("form",{onSubmit:h,children:[b.jsx("input",{className:"auth-input",type:"text",maxLength:6,pattern:"[0-9]{6}",autoComplete:"off",autoFocus:!0,required:!0,placeholder:"------",value:s,onChange:m=>l(m.target.value.replace(/\D/g,""))}),b.jsx("br",{}),b.jsx("button",{className:"auth-btn",type:"submit",children:"Connect"}),c&&b.jsx("p",{className:"auth-error",children:c})]})]})})}const dM="rgba(48,54,61,0.4)",hM="rgba(88,166,255,0.15)",pM={high:1500,medium:800,low:400},Uv=14,Lv=20,Ov=2;function mM(r,e,i,s,l,c,f,h,m,p){r.clearRect(0,0,e,i);const x=i/2,g=i/4;r.beginPath();for(let w=g;w<i;w+=g)r.moveTo(0,w),r.lineTo(e,w);if(r.strokeStyle=dM,r.lineWidth=.5,r.stroke(),r.beginPath(),r.moveTo(0,x),r.lineTo(e,x),r.strokeStyle=hM,r.lineWidth=1,r.stroke(),l<2)return;const v=pM[p]||1500,y=l>v?Math.floor(l/v):1,M=i/2,A=e/(f-1),_=M/h;if(p!=="low"){r.beginPath();let w=0;for(let N=0;N<l;N+=y){const H=(c-l+N+f)%f,L=N*A,F=x-s[H]*_;N===0?(r.moveTo(L,F),w=L):r.lineTo(L,F)}r.lineTo((l-1)*A,i),r.lineTo(w,i),r.closePath(),r.fillStyle=m+"10",r.fill()}r.strokeStyle=m,r.lineWidth=p==="low"?1:1.3,r.lineJoin="round",r.lineCap="round",r.beginPath();for(let w=0;w<l;w+=y){const N=(c-l+w+f)%f,H=w*A,L=x-s[N]*_;w===0?r.moveTo(H,L):r.lineTo(H,L)}r.stroke();let S=0;const R=Math.min(l,250);for(let w=l-R;w<l;w++){const N=(c-l+w+f)%f;S+=s[N]*s[N]}return Math.sqrt(S/R)}const gM=V.memo(function({chIdx:e,eegData:i,yRange:s,expanded:l,onToggleExpand:c,active:f=!0}){const h=V.useRef(null),m=V.useRef(0),p=V.useRef(0),x=V.useRef(null),g=V.useRef(null),v=V.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),y=V.useRef(!0),M=V.useRef("high"),A=V.useRef([]),_=V.useRef(-1),S=V.useRef(0),R=V.useRef(0);return V.useEffect(()=>{if(!f)return;const w=h.current;if(!w)return;const N=new ResizeObserver(H=>{const L=H[0];if(!L)return;const F=window.devicePixelRatio||1,{width:T,height:O}=L.contentRect,J=l?Math.min(F,2):1;v.current={w:T,h:O,pw:Math.round(T*J),ph:Math.round(O*J),dpr:J},y.current=!0});return N.observe(w),()=>N.disconnect()},[f,l]),V.useEffect(()=>{if(!f)return;const w=h.current;if(!w)return;const N=w.getContext("2d",{alpha:!1});_.current=-1,R.current=0;const H=e%Ov,L=()=>{R.current++;const{w:F,h:T,pw:O,ph:J,dpr:G}=v.current;if(F===0||T===0){m.current=requestAnimationFrame(L);return}if(!l&&i.gridSuspended){m.current=requestAnimationFrame(L);return}if(!l&&R.current%Ov!==H){m.current=requestAnimationFrame(L);return}const q=i.writeIndex.current;if(q===_.current){m.current=requestAnimationFrame(L);return}_.current=q;const K=performance.now();y.current&&(y.current=!1,w.width=O,w.height=J,N.setTransform(G,0,0,G,0,0)),N.fillStyle="#0d1117",N.fillRect(0,0,F,T);const Y=mM(N,F,T,i.buffers.current[e],i.samplesInBuffer.current,q,i.bufferSize,s,wu[e],M.current);if(S.current++,Y!==void 0&&(S.current&1)===0){p.current=Y;const z=Y/s;if(x.current&&(x.current.style.borderLeftColor=z>.8?"#f85149":z>.4?"#d29922":"#3fb950"),g.current){const te=z>.8?"#f85149":z>.4?"#d29922":"#3fb950",le=z>.8?"HIGH":z>.4?"MED":"OK",_e=Y<.5;g.current.style.color=_e?"#8b949e":te,g.current.textContent=_e?"FLAT":le}}const ae=performance.now()-K,D=A.current;if(D.push(ae),D.length>Lv&&D.shift(),D.length===Lv){let z=0;for(let le=0;le<D.length;le++)z+=D[le];const te=z/D.length;te>Uv&&M.current!=="low"?M.current=M.current==="high"?"medium":"low":te<Uv*.4&&M.current!=="high"&&(M.current=M.current==="low"?"medium":"high")}m.current=requestAnimationFrame(L)};return m.current=requestAnimationFrame(L),()=>cancelAnimationFrame(m.current)},[e,i,s,f]),f?b.jsxs("div",{className:`channel-cell${l?" expanded":""}`,onClick:c,children:[b.jsxs("div",{className:"channel-label",ref:x,children:["Ch ",e+1,b.jsx("span",{className:"signal-quality",ref:g,children:"OK"})]}),b.jsx("canvas",{ref:h,style:{display:"block",width:"100%",height:"100%"}})]}):b.jsxs("div",{className:`channel-cell inactive${l?" expanded":""}`,onClick:c,children:[b.jsxs("div",{className:"channel-label",children:["Ch ",e+1]}),b.jsx("div",{className:"channel-off",children:"OFF"})]})}),{PI:vM,cos:Pv,sin:_M}=Math,Fv=2*vM,nn=[{name:"Delta",label:"δ Delta",low:.5,high:4,color:"#8b5cf6"},{name:"Theta",label:"θ Theta",low:4,high:8,color:"#06b6d4"},{name:"Alpha",label:"α Alpha",low:8,high:13,color:"#22c55e"},{name:"Beta",label:"β Beta",low:13,high:30,color:"#f59e0b"},{name:"Gamma",label:"γ Gamma",low:30,high:100,color:"#ef4444"}];class ds{constructor(e,i){wi(this,"n");wi(this,"sampleRateHz");wi(this,"_window");wi(this,"_frequencies");wi(this,"_df");wi(this,"_bitReversed");wi(this,"_twRe");wi(this,"_twIm");wi(this,"_norm");if(e<=0||(e&e-1)!==0)throw new Error("n must be a power of 2");this.n=e,this.sampleRateHz=i,this._precompute()}_precompute(){const{n:e,sampleRateHz:i}=this;this._window=new Float64Array(e);for(let h=0;h<e;h++)this._window[h]=.5*(1-Pv(Fv*h/(e-1)));const s=(e>>1)+1;this._frequencies=new Float64Array(s),this._df=i/e;for(let h=0;h<s;h++)this._frequencies[h]=h*this._df;const l=ds._log2(e);this._bitReversed=new Int32Array(e);for(let h=0;h<e;h++)this._bitReversed[h]=ds._reverseBits(h,l);const c=e>>1;this._twRe=new Float64Array(c),this._twIm=new Float64Array(c);for(let h=0;h<c;h++){const m=-Fv*h/e;this._twRe[h]=Pv(m),this._twIm[h]=_M(m)}let f=0;for(let h=0;h<e;h++)f+=this._window[h]*this._window[h];this._norm=2/(i*f)}analyse(e,i){const{n:s,_window:l,_frequencies:c,_df:f,_norm:h}=this;if(i===void 0&&(i=e.length-s),i<0||e.length-i<s)return null;const m=new Float64Array(s),p=new Float64Array(s);for(let _=0;_<s;_++)m[_]=e[i+_]*l[_];this._fft(m,p);const x=(s>>1)+1,g=new Float64Array(x);let v=0,y=0,M=0;for(let _=0;_<x;_++){const S=m[_]*m[_]+p[_]*p[_],R=_===0||_===x-1?.5:1;g[_]=S*h*R,y+=g[_]*f,g[_]>v&&(v=g[_],M=_)}const A={};for(const _ of nn){let S=0;for(let R=0;R<x;R++)c[R]>=_.low&&c[R]<_.high&&(S+=g[R]*f);A[_.name]=S}return{frequencies:c,psd:g,bandPowers:A,dominantFrequency:c[M],totalPower:y}}analyseRing(e,i,s){const{n:l}=this;if(s<l)return null;const c=e.length,f=new Float64Array(l),h=(i-l+c)%c;for(let m=0;m<l;m++)f[m]=e[(h+m)%c];return this.analyse(f,0)}_fft(e,i){const{n:s,_bitReversed:l,_twRe:c,_twIm:f}=this;for(let h=0;h<s;h++){const m=l[h];if(m>h){let p=e[h];e[h]=e[m],e[m]=p,p=i[h],i[h]=i[m],i[m]=p}}for(let h=2;h<=s;h*=2){const m=h>>1,p=s/h;for(let x=0;x<s;x+=h)for(let g=0;g<m;g++){const v=g*p,y=c[v],M=f[v],A=x+g,_=A+m,S=y*e[_]-M*i[_],R=y*i[_]+M*e[_];e[_]=e[A]-S,i[_]=i[A]-R,e[A]+=S,i[A]+=R}}}static _log2(e){let i=0,s=e;for(;s>1;)s>>=1,i++;return i}static _reverseBits(e,i){let s=0,l=e;for(let c=0;c<i;c++)s=s<<1|l&1,l>>=1;return s}}const Qo=256,Iv=8,Bv=.25,kd=15,xM=60,Ni=40;function SM(r,e,i,s,l,c,f,h,m){r.clearRect(0,0,e,i);const p={l:52,r:12,t:8,b:28},x=e-p.l-p.r,g=i-p.t-p.b,v=p.t+g/2;r.fillStyle="#0d1117",r.fillRect(0,0,e,i),r.strokeStyle="rgba(48,54,61,0.5)",r.lineWidth=.5;const y=[-h,-h/2,0,h/2,h];r.font="9px monospace",r.fillStyle="#8b949e",r.textAlign="right";for(const D of y){const z=v-D/h*(g/2);r.beginPath(),r.moveTo(p.l,z),r.lineTo(e-p.r,z),r.stroke(),r.fillText(`${D>0?"+":""}${D}`,p.l-6,z+3)}r.textAlign="center",r.fillStyle="#8b949e";const M=f/Pt;for(let D=0;D<=M;D+=1){const z=p.l+D/M*x;r.beginPath(),r.moveTo(z,p.t),r.lineTo(z,p.t+g),r.strokeStyle="rgba(48,54,61,0.3)",r.stroke(),r.fillText(`${D}s`,z,i-6)}if(r.beginPath(),r.moveTo(p.l,v),r.lineTo(e-p.r,v),r.strokeStyle="rgba(88,166,255,0.2)",r.lineWidth=1,r.stroke(),l<2)return{};const A=g/2,_=x/(f-1),S=A/h;r.beginPath();let R=p.l;for(let D=0;D<l;D++){const z=(c-l+D+f)%f,te=p.l+D*_,le=v-s[z]*S;D===0?(r.moveTo(te,le),R=te):r.lineTo(te,le)}r.lineTo(p.l+(l-1)*_,v+A),r.lineTo(R,v+A),r.closePath(),r.fillStyle=m+"0a",r.fill(),r.strokeStyle=m,r.lineWidth=1.5,r.lineJoin="round",r.lineCap="round",r.beginPath();for(let D=0;D<l;D++){const z=(c-l+D+f)%f,te=p.l+D*_,le=v-s[z]*S;D===0?r.moveTo(te,le):r.lineTo(te,le)}r.stroke();const w=p.l+(l-1)*_;r.beginPath(),r.moveTo(w,p.t),r.lineTo(w,p.t+g),r.strokeStyle=m+"40",r.lineWidth=1,r.setLineDash([3,3]),r.stroke(),r.setLineDash([]);const N=(c-1+f)%f,H=s[N];r.fillStyle=m,r.font="bold 11px monospace",r.textAlign="left",r.fillText(`${H.toFixed(1)} µV`,w+6,p.t+14),r.save(),r.translate(12,v),r.rotate(-Math.PI/2),r.textAlign="center",r.fillStyle="#8b949e",r.font="9px monospace",r.fillText("µV",0,0),r.restore();let L=0,F=0,T=1/0,O=-1/0,J=0,G=null;const q=Math.min(l,Pt*2);for(let D=l-q;D<l;D++){const z=(c-l+D+f)%f,te=s[z];L+=te,F+=te*te,te<T&&(T=te),te>O&&(O=te),G!==null&&(G>=0&&te<0||G<0&&te>=0)&&J++,G=te}const K=L/q,Y=Math.sqrt(F/q),ae=O-T;return{mean:K,rms:Y,pp:ae,min:T,max:O,zeroCross:J,latestVal:H,statCount:q}}function yM(r,e,i,s,l,c,f,h){r.fillStyle="#0d1117",r.fillRect(0,0,e,i);const m={l:44,r:10,t:20,b:24},p=e-m.l-m.r,x=i-m.t-m.b,g=l[1],v=Math.min(Math.ceil(c/g),s.length-1);let y=1e-30;for(let M=1;M<=v;M++)s[M]>y&&(y=s[M]);for(const M of nn){if(M.low>=c)continue;const A=m.l+Math.max(M.low,0)/c*p,_=m.l+Math.min(M.high,c)/c*p,S=h===M.name;r.fillStyle=M.color+(S?"20":"0a"),r.fillRect(A,m.t,_-A,x),r.fillStyle=M.color+(S?"bb":"55"),r.font="8px monospace",r.textAlign="center",r.fillText(M.label.split(" ")[0],(A+_)/2,m.t+10)}r.strokeStyle="rgba(48,54,61,0.45)",r.lineWidth=.5;for(let M=1;M<4;M++){const A=m.t+M/4*x;r.beginPath(),r.moveTo(m.l,A),r.lineTo(m.l+p,A),r.stroke()}r.beginPath();for(let M=1;M<=v;M++){const A=m.l+l[M]/c*p,_=10*Math.log10((s[M]||1e-30)/y),S=Math.max(0,(_+60)/60),R=m.t+x-Math.min(1,S)*x;M===1?r.moveTo(A,R):r.lineTo(A,R)}r.strokeStyle="#58a6ff",r.lineWidth=1.5,r.stroke(),r.lineTo(m.l+l[v]/c*p,m.t+x),r.lineTo(m.l+l[1]/c*p,m.t+x),r.closePath(),r.fillStyle="rgba(88,166,255,0.08)",r.fill(),r.fillStyle="#8b949e",r.font="9px monospace",r.textAlign="center";for(let M=0;M<=c;M+=10)r.fillText(`${M}`,m.l+M/c*p,i-6);r.fillText("Hz",m.l+p+2,i-6),r.save(),r.translate(10,m.t+x/2),r.rotate(-Math.PI/2),r.textAlign="center",r.fillStyle="#8b949e",r.font="8px monospace",r.fillText("dB",0,0),r.restore(),r.textAlign="right",r.font="8px monospace",r.fillStyle="#6e7681";for(const M of[0,-20,-40,-60]){const A=m.t+x-(M+60)/60*x;r.fillText(`${M}`,m.l-4,A+3)}}function MM(r,e,i,s){r.fillStyle="#0d1117",r.fillRect(0,0,e,i);const l={l:10,r:10,t:6,b:4},c=Math.min(16,(i-l.t-l.b-(nn.length-1)*4)/nn.length),f=Math.max(...nn.map(m=>s[m.name]||0),1e-6),h=nn.reduce((m,p)=>m+(s[p.name]||0),0)||1e-6;nn.forEach((m,p)=>{const x=s[m.name]||0,g=x/f,v=(x/h*100).toFixed(1),y=l.t+p*(c+4),M=e-l.l-l.r-82;r.fillStyle=m.color,r.font="bold 9px monospace",r.textAlign="left",r.fillText(m.label.charAt(0),l.l,y+c-3);const A=l.l+14;r.fillStyle="rgba(48,54,61,0.5)",r.beginPath(),r.roundRect(A,y,M,c,3),r.fill(),g>0&&(r.fillStyle=m.color+"cc",r.beginPath(),r.roundRect(A,y,Math.max(4,M*g),c,3),r.fill()),r.fillStyle="#e6edf3",r.font="9px monospace",r.textAlign="right",r.fillText(`${v}%`,e-l.r,y+c-3)})}function bM(r,e,i,s,l,c,f,h){if(r.fillStyle="#0d1117",r.fillRect(0,0,e,i),l<10)return;const m={l:8,r:8,t:6,b:20},p=e-m.l-m.r,x=i-m.t-m.b,g=new Float32Array(Ni),v=2*h/Ni,y=Math.min(l,Pt*2);for(let _=l-y;_<l;_++){const S=(c-l+_+f)%f,R=s[S],w=Math.floor((R+h)/v);w>=0&&w<Ni&&g[w]++}let M=0;for(let _=0;_<Ni;_++)g[_]>M&&(M=g[_]);if(M===0)return;const A=p/Ni;for(let _=0;_<Ni;_++){const S=g[_]/M*x,R=m.l+_*A,w=m.t+x-S,N=Math.abs(_-Ni/2)/(Ni/2),H=Math.floor(88+N*160),L=Math.floor(166-N*120),F=Math.floor(255-N*200);r.fillStyle=`rgba(${H},${L},${F},0.6)`,r.fillRect(R+.5,w,A-1,S)}r.fillStyle="#6e7681",r.font="8px monospace",r.textAlign="center",r.fillText(`-${h}`,m.l+A,i-4),r.fillText("0",m.l+p/2,i-4),r.fillText(`+${h}`,e-m.r-A,i-4),r.strokeStyle="rgba(88,166,255,0.3)",r.lineWidth=1,r.beginPath();for(let _=0;_<Ni;_++){const S=m.l+(_+.5)*A,R=(_-Ni/2)/(Ni/4),w=Math.exp(-.5*R*R),N=m.t+x-w*x*.85;_===0?r.moveTo(S,N):r.lineTo(S,N)}r.stroke()}const EM=V.memo(function({chIdx:e,eegData:i,yRange:s,onClose:l}){var G;const c=V.useRef(null),f=V.useRef(null),h=V.useRef(null),m=V.useRef(null),p=V.useRef(0),x=V.useRef(0),g=V.useRef(null),[v,y]=V.useState(null),[M,A]=V.useState({}),[_,S]=V.useState({band:"",freq:0}),[R,w]=V.useState(null),N=V.useMemo(()=>new ds(Qo,Pt),[]),H=wu[e],L=V.useRef({trace:{w:0,h:0,pw:0,ph:0,dpr:1},spectrum:{w:0,h:0,pw:0,ph:0,dpr:1},band:{w:0,h:0,pw:0,ph:0,dpr:1},hist:{w:0,h:0,pw:0,ph:0,dpr:1}}),F=V.useRef({trace:!0,spectrum:!0,band:!0,hist:!0});V.useEffect(()=>{const q={trace:c.current,spectrum:f.current,band:h.current,hist:m.current},K={},Y=[];for(const[le,_e]of Object.entries(q)){if(!_e)continue;K[le]=_e.getContext("2d",{alpha:!1});const I=new ResizeObserver(j=>{const ne=j[0];if(!ne)return;const W=Math.min(window.devicePixelRatio||1,2),{width:re,height:X}=ne.contentRect,ee=Math.round(re*W),ge=Math.round(X*W);L.current[le]={w:re,h:X,pw:ee,ph:ge,dpr:W},F.current[le]=!0});I.observe(_e),Y.push(I)}let ae=null,D={},z={band:"",freq:0};const te=()=>{x.current++;for(const[ne,W]of Object.entries(q)){if(!W||!F.current[ne])continue;const{pw:re,ph:X,dpr:ee}=L.current[ne];re===0||X===0||(W.width=re,W.height=X,K[ne].setTransform(ee,0,0,ee,0,0),F.current[ne]=!1)}const le=i.buffers.current,_e=i.writeIndex.current,I=i.samplesInBuffer.current,j=i.bufferSize;if(K.trace){const{w:ne,h:W}=L.current.trace;if(ne>0&&W>0){const re=SM(K.trace,ne,W,le[e],I,_e,j,s,H);re.rms!==void 0&&x.current%kd===0&&(ae=re)}}if(x.current%Iv===0&&I>=Qo){const ne=N.analyseRing(le[e],_e,I);if(ne){if(!g.current||g.current.length!==ne.psd.length)g.current=new Float64Array(ne.psd);else{const X=g.current,ee=ne.psd;for(let ge=0;ge<X.length;ge++)X[ge]=X[ge]*(1-Bv)+ee[ge]*Bv}D=ne.bandPowers;let W="",re=0;for(const X of nn)(ne.bandPowers[X.name]||0)>re&&(re=ne.bandPowers[X.name],W=X.name);z={band:W,freq:ne.dominantFrequency}}}if(K.spectrum&&g.current){const{w:ne,h:W}=L.current.spectrum;ne>0&&W>0&&yM(K.spectrum,ne,W,g.current,N._frequencies,xM,D,R)}if(K.band&&x.current%Iv===0){const{w:ne,h:W}=L.current.band;ne>0&&W>0&&MM(K.band,ne,W,D)}if(K.hist&&x.current%kd===0){const{w:ne,h:W}=L.current.hist;ne>0&&W>0&&bM(K.hist,ne,W,le[e],I,_e,j,s)}x.current%kd===0&&(ae&&y(ae),D&&A(D),S(ne=>ne.band===z.band&&ne.freq===z.freq?ne:z)),p.current=requestAnimationFrame(te)};return p.current=requestAnimationFrame(te),()=>{cancelAnimationFrame(p.current),Y.forEach(le=>le.disconnect())}},[e,i,s,H,N,R]);const T=nn.find(q=>q.name===_.band),O=(T==null?void 0:T.color)||"#8b949e",J=nn.reduce((q,K)=>q+(M[K.name]||0),0);return b.jsx("div",{className:"detail-overlay",onClick:l,children:b.jsxs("div",{className:"detail-panel",onClick:q=>q.stopPropagation(),children:[b.jsxs("div",{className:"detail-header",children:[b.jsxs("div",{className:"detail-title-group",children:[b.jsxs("span",{className:"detail-ch-badge",style:{borderColor:H,color:H},children:["Ch ",e+1]}),b.jsx("span",{className:"detail-title",children:"Channel Analysis"}),b.jsx("span",{className:"detail-subtitle",children:"Real-time single-channel deep inspection"})]}),b.jsxs("div",{className:"detail-header-stats",children:[_.band&&b.jsxs("span",{className:"detail-dominant",style:{color:O},children:[b.jsx("span",{className:"detail-dominant-label",children:"Dominant"}),b.jsx("span",{className:"detail-dominant-band",children:(T==null?void 0:T.label)||_.band}),b.jsxs("span",{className:"detail-dominant-freq",children:[_.freq.toFixed(1)," Hz"]})]}),v&&b.jsxs("span",{className:"detail-rms-badge",children:["RMS ",(G=v.rms)==null?void 0:G.toFixed(1)," µV"]})]}),b.jsx("button",{className:"detail-close",onClick:l,children:b.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:b.jsx("path",{d:"M4 4L14 14M14 4L4 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]}),b.jsxs("div",{className:"detail-body",children:[b.jsxs("div",{className:"detail-trace-section",children:[b.jsxs("div",{className:"detail-section-head",children:[b.jsx("span",{className:"detail-section-title",children:"Time Domain"}),b.jsxs("span",{className:"detail-section-meta",children:[Pt," Hz · ±",s," µV"]})]}),b.jsx("div",{className:"detail-trace-canvas-wrap",children:b.jsx("canvas",{ref:c,style:{display:"block",width:"100%",height:"100%"}})})]}),b.jsxs("div",{className:"detail-analysis",children:[b.jsxs("div",{className:"detail-card",children:[b.jsxs("div",{className:"detail-card-head",children:[b.jsx("span",{className:"detail-card-title",children:"Power Spectrum"}),b.jsxs("span",{className:"detail-card-meta",children:[Qo,"pt FFT · ",(Pt/Qo).toFixed(1)," Hz/bin"]})]}),b.jsx("div",{className:"detail-card-canvas",children:b.jsx("canvas",{ref:f,style:{display:"block",width:"100%",height:"100%"}})})]}),b.jsxs("div",{className:"detail-card",children:[b.jsxs("div",{className:"detail-card-head",children:[b.jsx("span",{className:"detail-card-title",children:"Band Power Distribution"}),b.jsx("span",{className:"detail-card-meta",children:J>0?`${J.toFixed(2)} µV²/Hz total`:"—"})]}),b.jsx("div",{className:"detail-card-canvas detail-card-canvas-sm",children:b.jsx("canvas",{ref:h,style:{display:"block",width:"100%",height:"100%"}})}),b.jsx("div",{className:"detail-band-legend",children:nn.map(q=>b.jsxs("button",{className:`detail-band-btn${R===q.name?" active":""}`,style:{"--band-color":q.color},onClick:()=>w(K=>K===q.name?null:q.name),children:[b.jsx("span",{className:"detail-band-dot"}),q.label.split(" ")[0]]},q.name))})]}),b.jsxs("div",{className:"detail-bottom-row",children:[b.jsxs("div",{className:"detail-card detail-card-half",children:[b.jsx("div",{className:"detail-card-head",children:b.jsx("span",{className:"detail-card-title",children:"Amplitude Distribution"})}),b.jsx("div",{className:"detail-card-canvas detail-card-canvas-sm",children:b.jsx("canvas",{ref:m,style:{display:"block",width:"100%",height:"100%"}})})]}),b.jsxs("div",{className:"detail-card detail-card-half detail-stats-card",children:[b.jsx("div",{className:"detail-card-head",children:b.jsx("span",{className:"detail-card-title",children:"Signal Metrics"})}),b.jsxs("div",{className:"detail-stats-grid",children:[b.jsx(Us,{label:"RMS",value:v==null?void 0:v.rms,unit:"µV",precision:2}),b.jsx(Us,{label:"Peak-Peak",value:v==null?void 0:v.pp,unit:"µV",precision:1}),b.jsx(Us,{label:"Mean",value:v==null?void 0:v.mean,unit:"µV",precision:2}),b.jsx(Us,{label:"Min",value:v==null?void 0:v.min,unit:"µV",precision:1}),b.jsx(Us,{label:"Max",value:v==null?void 0:v.max,unit:"µV",precision:1}),b.jsx(Us,{label:"Zero-X",value:v==null?void 0:v.zeroCross,unit:"/2s",precision:0}),b.jsx(Us,{label:"Live",value:v==null?void 0:v.latestVal,unit:"µV",precision:1,highlight:!0})]})]})]})]})]}),b.jsxs("div",{className:"detail-footer",children:[b.jsxs("span",{children:[Qo,"-pt Hanning · Cooley-Tukey radix-2"]}),b.jsxs("span",{className:"detail-footer-keys",children:[b.jsx("kbd",{children:"Esc"})," Close"]}),b.jsx("span",{children:"Not a medical device"})]})]})})});function Us({label:r,value:e,unit:i,precision:s=2,highlight:l}){const c=e!=null?s===0?String(Math.round(e)):e.toFixed(s):"—";return b.jsxs("div",{className:`detail-stat-row${l?" highlight":""}`,children:[b.jsx("span",{className:"detail-stat-label",children:r}),b.jsx("span",{className:"detail-stat-value",children:c}),b.jsx("span",{className:"detail-stat-unit",children:i})]})}const Jo=256,TM=60,AM=12,zv=.3,RM=350;function CM(r,e,i,s,l,c,f,h){const p=e-16,x=24,g=i-24,v=p-48,y=g-x,M=l[1],A=Math.min(Math.ceil(c/M),s.length-1);let _=1e-30;for(let S=1;S<=A;S++)s[S]>_&&(_=s[S]);for(const S of nn){if(S.low>=c)continue;const R=48+Math.max(S.low,0)/c*v,w=48+Math.min(S.high,c)/c*v,N=h===S.name;r.fillStyle=S.color+(N?"28":"12"),r.fillRect(R,x,w-R,y),r.fillStyle=S.color+(N?"cc":"66"),r.font="9px monospace",r.textAlign="center",r.fillText(S.name,(R+w)/2,x+10)}r.strokeStyle="rgba(48,54,61,0.45)",r.lineWidth=.5;for(let S=1;S<5;S++){const R=x+S/5*y;r.beginPath(),r.moveTo(48,R),r.lineTo(p,R),r.stroke()}for(const S of[4,8,13,30,50]){if(S>c)continue;const R=48+S/c*v;r.beginPath(),r.moveTo(R,x),r.lineTo(R,g),r.stroke()}r.beginPath();for(let S=1;S<=A;S++){const R=48+l[S]/c*v;let w;if(f){const H=10*Math.log10((s[S]||1e-30)/_);w=Math.max(0,(H+60)/60)}else w=s[S]/_;const N=g-Math.min(1,w)*y;S===1?r.moveTo(R,N):r.lineTo(R,N)}r.strokeStyle="#58a6ff",r.lineWidth=1.5,r.stroke(),r.lineTo(48+l[A]/c*v,g),r.lineTo(48+l[1]/c*v,g),r.closePath(),r.fillStyle="rgba(88,166,255,0.07)",r.fill(),r.fillStyle="#8b949e",r.font="10px monospace",r.textAlign="center";for(let S=0;S<=c;S+=10)r.fillText(`${S}`,48+S/c*v,g+14);if(r.fillText("Hz",p+2,g+14),r.save(),r.translate(11,x+y/2),r.rotate(-Math.PI/2),r.textAlign="center",r.fillText(f?"dB":"µV²/Hz",0,0),r.restore(),r.textAlign="right",r.font="9px monospace",f)for(const S of[0,-20,-40,-60]){const R=g-(S+60)/60*y;r.fillText(`${S}`,44,R+3)}}const wM=V.memo(function({eegData:e}){var q;const i=V.useRef(null),s=V.useRef(0),l=V.useRef(0),c=V.useRef(null),f=V.useRef(0),h=V.useRef(null),m=V.useRef({}),p=V.useRef(window.devicePixelRatio||1),x=V.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),g=V.useRef(!0),[v,y]=V.useState(-1),[M,A]=V.useState(!0),[_,S]=V.useState(!1),[R,w]=V.useState(null),[N,H]=V.useState({}),[L,F]=V.useState({band:"",freq:0}),T=V.useMemo(()=>new ds(Jo,Pt),[]);h.current||(h.current=new Float64Array(Jo)),V.useEffect(()=>{const K=i.current;if(!K)return;const Y=K.getContext("2d",{alpha:!1}),ae=new ResizeObserver(z=>{const te=z[0];if(!te)return;const le=window.devicePixelRatio||1;p.current=le;const{width:_e,height:I}=te.contentRect;x.current={w:_e,h:I,pw:Math.round(_e*le),ph:Math.round(I*le),dpr:le},g.current=!0});ae.observe(K);const D=()=>{const{w:z,h:te,pw:le,ph:_e}=x.current;if(z===0||te===0){s.current=requestAnimationFrame(D);return}if(g.current&&(g.current=!1,K.width=le,K.height=_e),Y.setTransform(p.current,0,0,p.current,0,0),Y.fillStyle="#0d1117",Y.fillRect(0,0,z,te),l.current++,!_&&l.current%AM===0){const j=e.buffers.current,ne=e.writeIndex.current,W=e.samplesInBuffer.current;if(j&&W>=Jo){let re;if(v===-1){const X=h.current,ee=e.bufferSize,ge=(ne-Jo+ee)%ee;for(let Q=0;Q<Jo;Q++){let be=0;const Re=(ge+Q)%ee;for(let ze=0;ze<wt;ze++)be+=j[ze][Re];X[Q]=be/wt}re=T.analyse(X,0)}else re=T.analyseRing(j[v],ne,W);if(re){if(!c.current||c.current.length!==re.psd.length)c.current=new Float64Array(re.psd);else{const ee=c.current,ge=re.psd;for(let Q=0;Q<ee.length;Q++)ee[Q]=ee[Q]*(1-zv)+ge[Q]*zv}const X=performance.now();if(X-f.current>RM){f.current=X,m.current=re.bandPowers,H(re.bandPowers);let ee="",ge=0;for(const Q of nn)(re.bandPowers[Q.name]||0)>ge&&(ge=re.bandPowers[Q.name],ee=Q.name);F(Q=>Q.band===ee&&Q.freq===re.dominantFrequency?Q:{band:ee,freq:re.dominantFrequency})}}}}const I=c.current;!I||I.length===0?(Y.fillStyle="#4b5563",Y.font="13px monospace",Y.textAlign="center",Y.fillText("Collecting samples…",z/2,te/2)):CM(Y,z,te,I,T._frequencies,TM,M,R),s.current=requestAnimationFrame(D)};return s.current=requestAnimationFrame(D),()=>{cancelAnimationFrame(s.current),ae.disconnect()}},[e,v,M,_,R,T]);const O=Math.max(...nn.map(K=>N[K.name]||0),1e-6),J=v===-1?"Avg":`Ch ${v+1}`,G=((q=nn.find(K=>K.name===L.band))==null?void 0:q.color)||"#8b949e";return b.jsxs("div",{className:"spectral-panel",children:[b.jsxs("div",{className:"spectral-toolbar",children:[b.jsxs("span",{className:"spectral-title",children:["Spectral"," ",b.jsx("small",{style:{color:"var(--text-dim)",fontWeight:400},children:J})]}),b.jsxs("div",{className:"spectral-channels",children:[b.jsx("button",{className:`sp-ch${v===-1?" active":""}`,onClick:()=>y(-1),children:"Avg"}),Array.from({length:wt},(K,Y)=>b.jsx("button",{className:`sp-ch${v===Y?" active":""}`,onClick:()=>y(Y),children:Y+1},Y))]}),b.jsxs("span",{className:"sp-dominant",children:[b.jsx("strong",{style:{color:G},children:L.band||"—"})," ",L.freq>0&&b.jsxs("small",{children:[L.freq.toFixed(1)," Hz"]})]}),b.jsxs("div",{className:"spectral-ctrls",children:[b.jsx("button",{className:`btn${M?" active":""}`,onClick:()=>A(K=>!K),children:M?"Log":"Lin"}),b.jsx("button",{className:`btn${_?" active":""}`,onClick:()=>S(K=>!K),children:_?"▶":"⏸"})]})]}),b.jsxs("div",{className:"spectral-canvas-wrap",children:[b.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}}),_&&b.jsx("div",{className:"spectral-paused",children:"PAUSED"})]}),b.jsx("div",{className:"spectral-bands",children:nn.map(K=>{const Y=N[K.name]||0,ae=O>0?Y/O*100:0,D=R===K.name;return b.jsxs("div",{className:`sp-band${D?" selected":""}`,onClick:()=>w(D?null:K.name),children:[b.jsx("span",{className:"sp-band-dot",style:{background:K.color}}),b.jsx("span",{className:"sp-band-name",style:{color:K.color},children:K.label}),b.jsx("div",{className:"sp-band-track",children:b.jsx("div",{className:"sp-band-fill",style:{width:`${ae}%`,background:K.color}})}),b.jsx("span",{className:"sp-band-val",children:Y<.01?Y.toExponential(1):Y.toFixed(2)})]},K.name)})})]})}),NM=V.memo(function(){const[e,i]=V.useState(!1),[s,l]=V.useState(0),[c,f]=V.useState(0),[h,m]=V.useState(0),p=V.useRef(0),x=V.useRef(performance.now()),g=V.useRef(0);return V.useEffect(()=>{const v=y=>{(y.key==="p"||y.key==="P")&&i(M=>!M)};return window.addEventListener("keydown",v),()=>window.removeEventListener("keydown",v)},[]),V.useEffect(()=>{if(!e)return;const v=()=>{p.current++;const y=performance.now(),M=y-x.current;if(M>=1e3){l(Math.round(p.current*(1e3/M))),f(Math.round(M/p.current*100)/100);const A=performance.memory;A&&m(Math.round(A.usedJSHeapSize/1048576)),p.current=0,x.current=y}g.current=requestAnimationFrame(v)};return g.current=requestAnimationFrame(v),()=>cancelAnimationFrame(g.current)},[e]),e?b.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.8)",color:"#0f0",fontFamily:"monospace",fontSize:"12px",padding:"8px 12px",borderRadius:"4px",zIndex:1e4,border:"1px solid #0f0",userSelect:"none"},children:[b.jsxs("div",{children:["FPS: ",s]}),b.jsxs("div",{children:["Frame: ",c,"ms"]}),b.jsxs("div",{children:["Memory: ",h,"MB"]}),b.jsx("div",{style:{marginTop:"4px",fontSize:"10px",opacity:.7},children:"Press P to toggle"})]}):null});function DM({onSelect:r,onBack:e}){const[i,s]=V.useState([]),[l,c]=V.useState(!0);V.useEffect(()=>{f()},[]);async function f(){try{const x=await(await fetch("/api/recordings")).json();s(x.recordings||[])}catch(p){console.error("Failed to load recordings:",p)}finally{c(!1)}}function h(p){return new Date(p*1e3).toLocaleString()}function m(p){return p<1024?`${p} B`:p<1024*1024?`${(p/1024).toFixed(1)} KB`:`${(p/1024/1024).toFixed(1)} MB`}return b.jsxs("div",{className:"session-list",children:[b.jsxs("header",{className:"session-header",children:[b.jsx("h2",{children:"Saved Sessions"}),b.jsx("button",{className:"btn btn-back",onClick:e,children:"← Back to Live"})]}),l&&b.jsx("div",{className:"list-loading",children:b.jsx("p",{children:"Loading recordings..."})}),!l&&i.length===0&&b.jsx("div",{className:"list-empty",children:b.jsx("p",{children:"No recordings yet. Record a session on the Live tab."})}),!l&&i.length>0&&b.jsx("div",{className:"list-container",children:b.jsxs("table",{className:"recordings-table",children:[b.jsx("thead",{children:b.jsxs("tr",{children:[b.jsx("th",{children:"Filename"}),b.jsx("th",{children:"Size"}),b.jsx("th",{children:"Date & Time"}),b.jsx("th",{children:"Action"})]})}),b.jsx("tbody",{children:i.map(p=>b.jsxs("tr",{children:[b.jsx("td",{className:"filename",children:p.filename}),b.jsx("td",{className:"size",children:m(p.size)}),b.jsx("td",{className:"mtime",children:h(p.mtime)}),b.jsx("td",{className:"action",children:b.jsx("button",{className:"btn btn-open",onClick:()=>r(p.filename),children:"Open"})})]},p.filename))})]})}),b.jsx("style",{children:`
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
      `})]})}const UM="rgba(48,54,61,0.4)",LM="rgba(88,166,255,0.12)",OM="rgba(88,166,255,0.6)",PM="#0d1117",FM=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],IM=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"}];function BM({filename:r,onBack:e}){const[i,s]=V.useState(!0),[l,c]=V.useState(null),[f,h]=V.useState(!1),[m,p]=V.useState(0),[x,g]=V.useState(1),[v,y]=V.useState(100),[M,A]=V.useState(4),[_,S]=V.useState([]),[R,w]=V.useState(""),[N,H]=V.useState(!1),L=V.useRef(null),F=V.useRef(0),T=V.useRef(0),O=V.useRef(null),J=V.useRef(0),G=V.useRef(0),q=V.useRef(!1),K=V.useRef(1),Y=V.useRef(100),ae=V.useRef(4),D=V.useRef(window.devicePixelRatio||1),z=V.useRef({w:0,h:0});q.current=f,K.current=x,Y.current=v,ae.current=M,T.current=m;const te=F.current,le=te/Pt,_e=m/Pt;V.useEffect(()=>{let Q=!1;async function be(){s(!0),c(null);try{const Re=await fetch(`/api/recordings/data/${encodeURIComponent(r)}`);if(!Re.ok)throw new Error(`HTTP ${Re.status}`);const ze=await Re.json();if(ze.error)throw new Error(ze.error);const we=(ze.data||[]).slice(1),Be=we.length;if(Be===0)throw new Error("Empty recording");const Fe=Array.from({length:wt},()=>new Float32Array(Be));for(let qe=0;qe<Be;qe++){const k=we[qe].split(",");for(let st=0;st<wt;st++)Fe[st][qe]=parseFloat(k[st+1])||0}Q||(L.current=Fe,F.current=Be,p(0),s(!1))}catch(Re){Q||(c(Re instanceof Error?Re.message:String(Re)),s(!1))}}return be(),()=>{Q=!0}},[r]),V.useEffect(()=>{fetch(`/api/recordings/annotations/${encodeURIComponent(r)}`).then(Q=>Q.json()).then(Q=>S(Q.annotations||[])).catch(()=>{})},[r]),V.useEffect(()=>{const Q=O.current;if(!Q||i||l)return;const be=Q.getContext("2d",{alpha:!1}),Re=ze=>{if(q.current&&G.current>0){const rt=(ze-G.current)/1e3*Pt*K.current;let lt=T.current+rt;lt>=F.current&&(lt=F.current-1,h(!1)),T.current=lt,p(lt)}G.current=ze;const Ue=D.current,we=Q.getBoundingClientRect(),Be=we.width,Fe=we.height,qe=Math.round(Be*Ue),k=Math.round(Fe*Ue);(z.current.w!==qe||z.current.h!==k)&&(z.current={w:qe,h:k},Q.width=qe,Q.height=k,be.setTransform(Ue,0,0,Ue,0,0)),I(be,Be,Fe),J.current=requestAnimationFrame(Re)};return G.current=0,J.current=requestAnimationFrame(Re),()=>cancelAnimationFrame(J.current)},[i,l]);function I(Q,be,Re){const ze=L.current;if(!ze)return;Q.fillStyle=PM,Q.fillRect(0,0,be,Re);const Ue=F.current,we=T.current,Be=ae.current*Pt,Fe=Y.current,qe=Math.floor(Be/2);let k=Math.floor(we)-qe,st=k+Be;k<0&&(k=0,st=Be),st>Ue&&(st=Ue,k=Math.max(0,Ue-Be));const rt=Re/wt;for(let $=0;$<wt;$++){const ye=$*rt,Te=ye+rt/2,ve=rt/2;$>0&&(Q.strokeStyle=UM,Q.lineWidth=.5,Q.beginPath(),Q.moveTo(0,ye),Q.lineTo(be,ye),Q.stroke()),Q.strokeStyle=LM,Q.lineWidth=.5,Q.beginPath(),Q.moveTo(0,Te),Q.lineTo(be,Te),Q.stroke(),Q.fillStyle="rgba(230,237,243,0.4)",Q.font="10px monospace",Q.fillText(`Ch ${$+1}`,4,ye+12);const je=ze[$],Oe=st-k;if(Oe<2)continue;const Ye=Oe>2e3?Math.floor(Oe/2e3):1,nt=be/(Oe-1),Ne=ve*.85/Fe;Q.strokeStyle=wu[$],Q.lineWidth=1.2,Q.lineJoin="round",Q.beginPath();for(let De=0;De<Oe;De+=Ye){const Xe=De*nt,Ve=Te-je[k+De]*Ne;De===0?Q.moveTo(Xe,Ve):Q.lineTo(Xe,Ve)}Q.stroke()}const lt=Math.floor(we)>=k&&Math.floor(we)<=st?(Math.floor(we)-k)/(st-k)*be:be/2;Q.strokeStyle=OM,Q.lineWidth=1.5,Q.setLineDash([4,3]),Q.beginPath(),Q.moveTo(lt,0),Q.lineTo(lt,Re),Q.stroke(),Q.setLineDash([]),Q.fillStyle="rgba(230,237,243,0.3)",Q.font="10px monospace";const He=k/Pt,B=st/Pt,C=Math.min(10,Math.floor(be/80));for(let $=0;$<=C;$++){const ye=He+(B-He)*($/C),Te=$/C*be;Q.fillText(ge(ye),Te+2,Re-4)}}const j=V.useCallback(async Q=>{try{await fetch(`/api/recordings/annotations/${encodeURIComponent(r)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({annotations:Q})})}catch{}},[r]);function ne(){if(!R.trim())return;const Q=Math.floor(m)/Pt,be={id:Date.now(),frame:Math.floor(m),time:Q,text:R,timestamp:new Date().toISOString()},Re=[..._,be];S(Re),j(Re),w(""),H(!1)}function W(Q){const be=_.filter(Re=>Re.id!==Q);S(be),j(be)}function re(Q){p(Q.frame),T.current=Q.frame,h(!1)}function X(){const Q=L.current;if(!Q)return;const be=F.current,Re=new Map;for(const qe of _)Re.set(qe.frame,qe.text);const Ue=[["frame","time_s",...Array.from({length:wt},(qe,k)=>`ch${k+1}`),"annotation"].join(",")];for(let qe=0;qe<be;qe++){const k=(qe/Pt).toFixed(6),st=Array.from({length:wt},(He,B)=>Q[B][qe].toFixed(4)),rt=Re.get(qe)||"",lt=rt?`"${rt.replace(/"/g,'""')}"`:"";Ue.push([qe,k,...st,lt].join(","))}const we=new Blob([Ue.join(`
`)],{type:"text/csv"}),Be=URL.createObjectURL(we),Fe=document.createElement("a");Fe.href=Be,Fe.download=r.replace(".csv","_annotated.csv"),Fe.click(),URL.revokeObjectURL(Be)}function ee(){if(!L.current)return;const be=F.current,Re={filename:r,sampleRate:Pt,channels:wt,totalFrames:be,duration:be/Pt,annotations:_.map(Be=>({frame:Be.frame,time:Be.time,text:Be.text,timestamp:Be.timestamp}))},ze=new Blob([JSON.stringify(Re,null,2)],{type:"application/json"}),Ue=URL.createObjectURL(ze),we=document.createElement("a");we.href=Ue,we.download=r.replace(".csv","_session.json"),we.click(),URL.revokeObjectURL(Ue)}function ge(Q){const be=Math.floor(Q/60),Re=Math.floor(Q%60),ze=Math.floor(Q%1*100);return`${String(be).padStart(2,"0")}:${String(Re).padStart(2,"0")}.${String(ze).padStart(2,"0")}`}return i?b.jsxs("div",{className:"sv-root sv-center",children:[b.jsx("p",{children:"Loading recording..."}),b.jsx("style",{children:jd})]}):l?b.jsxs("div",{className:"sv-root sv-center",children:[b.jsxs("p",{children:["Error: ",l]}),b.jsx("button",{className:"sv-btn",onClick:e,children:"Back"}),b.jsx("style",{children:jd})]}):b.jsxs("div",{className:"sv-root",children:[b.jsxs("header",{className:"sv-header",children:[b.jsxs("div",{className:"sv-title",children:[b.jsx("button",{className:"sv-btn",onClick:e,children:"← Back"}),b.jsx("h2",{children:r}),b.jsxs("span",{className:"sv-meta",children:[te.toLocaleString()," frames · ",ge(le)]})]}),b.jsxs("div",{className:"sv-controls",children:[b.jsx("button",{className:`sv-btn${f?" active":""}`,onClick:()=>{f||(G.current=0),h(!f)},children:f?"⏸ Pause":"▶ Play"}),b.jsx("button",{className:"sv-btn",onClick:()=>{p(0),T.current=0,h(!1)},children:"⏮ Rewind"}),b.jsxs("select",{value:x,onChange:Q=>g(parseFloat(Q.target.value)),className:"sv-select",children:[b.jsx("option",{value:.25,children:"0.25x"}),b.jsx("option",{value:.5,children:"0.5x"}),b.jsx("option",{value:1,children:"1x"}),b.jsx("option",{value:1.5,children:"1.5x"}),b.jsx("option",{value:2,children:"2x"}),b.jsx("option",{value:4,children:"4x"})]}),b.jsx("div",{className:"sv-sep"}),b.jsx("label",{className:"sv-label",children:"Window"}),b.jsx("select",{value:M,onChange:Q=>A(parseInt(Q.target.value)),className:"sv-select",children:IM.map(Q=>b.jsx("option",{value:Q.value,children:Q.label},Q.value))}),b.jsx("label",{className:"sv-label",children:"Scale"}),b.jsx("select",{value:v,onChange:Q=>y(parseInt(Q.target.value)),className:"sv-select",children:FM.map(Q=>b.jsx("option",{value:Q.value,children:Q.label},Q.value))}),b.jsx("div",{className:"sv-sep"}),b.jsx("button",{className:"sv-btn sv-btn-export",onClick:X,title:"Export CSV with annotations column",children:"⬇ CSV"}),b.jsx("button",{className:"sv-btn sv-btn-export",onClick:ee,title:"Export session metadata + annotations as JSON",children:"⬇ JSON"})]})]}),b.jsxs("div",{className:"sv-timeline",children:[b.jsx("span",{className:"sv-time",children:ge(_e)}),b.jsx("input",{type:"range",min:"0",max:te-1,value:Math.floor(m),onChange:Q=>{const be=parseInt(Q.target.value);p(be),T.current=be,h(!1),G.current=0},className:"sv-slider"}),b.jsx("span",{className:"sv-time",children:ge(le)})]}),b.jsxs("div",{className:"sv-content",children:[b.jsx("div",{className:"sv-canvas-wrap",children:b.jsx("canvas",{ref:O,style:{display:"block",width:"100%",height:"100%"}})}),b.jsxs("div",{className:"sv-annotations",children:[b.jsxs("div",{className:"sv-anno-header",children:[b.jsx("h3",{children:"Annotations"}),b.jsx("button",{className:"sv-btn sv-btn-sm",onClick:()=>H(!N),children:N?"Cancel":"+ Add"})]}),N&&b.jsxs("div",{className:"sv-anno-form",children:[b.jsx("textarea",{value:R,onChange:Q=>w(Q.target.value),placeholder:"Annotation at current position...",onKeyDown:Q=>{Q.key==="Enter"&&Q.ctrlKey&&ne()}}),b.jsx("button",{className:"sv-btn sv-btn-primary",onClick:ne,children:"Add"})]}),b.jsx("div",{className:"sv-anno-list",children:_.length===0?b.jsx("p",{className:"sv-anno-empty",children:"No annotations"}):_.map(Q=>b.jsxs("div",{className:"sv-anno-item",onClick:()=>re(Q),children:[b.jsx("span",{className:"sv-anno-time",children:ge(Q.time)}),b.jsx("span",{className:"sv-anno-text",children:Q.text}),b.jsx("button",{className:"sv-anno-del",onClick:be=>{be.stopPropagation(),W(Q.id)},children:"✕"})]},Q.id))})]})]}),b.jsx("style",{children:jd})]})}const jd=`
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
  .sv-btn-export { background: #1a7f37; border-color: #238636; color: #fff; font-size: 11px; }
  .sv-btn-export:hover { background: #238636; }

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
 */const Rp="183",zM=0,Hv=1,HM=2,hu=1,GM=2,dl=3,hs=0,Kn=1,ji=2,Ea=0,Yr=1,Gv=2,Vv=3,kv=4,VM=5,Hs=100,kM=101,jM=102,XM=103,WM=104,qM=200,YM=201,ZM=202,KM=203,Nh=204,Dh=205,QM=206,JM=207,$M=208,eb=209,tb=210,nb=211,ib=212,ab=213,sb=214,Uh=0,Lh=1,Oh=2,Kr=3,Ph=4,Fh=5,Ih=6,Bh=7,ax=0,rb=1,ob=2,Yi=0,sx=1,rx=2,ox=3,Cp=4,lx=5,cx=6,ux=7,fx=300,js=301,Qr=302,Xd=303,Wd=304,Nu=306,zh=1e3,ba=1001,Hh=1002,Cn=1003,lb=1004,Fc=1005,On=1006,qd=1007,Vs=1008,ci=1009,dx=1010,hx=1011,pl=1012,wp=1013,Ki=1014,Wi=1015,Aa=1016,Np=1017,Dp=1018,ml=1020,px=35902,mx=35899,gx=1021,vx=1022,Oi=1023,Ra=1026,ks=1027,_x=1028,Up=1029,Jr=1030,Lp=1031,Op=1033,pu=33776,mu=33777,gu=33778,vu=33779,Gh=35840,Vh=35841,kh=35842,jh=35843,Xh=36196,Wh=37492,qh=37496,Yh=37488,Zh=37489,Kh=37490,Qh=37491,Jh=37808,$h=37809,ep=37810,tp=37811,np=37812,ip=37813,ap=37814,sp=37815,rp=37816,op=37817,lp=37818,cp=37819,up=37820,fp=37821,dp=36492,hp=36494,pp=36495,mp=36283,gp=36284,vp=36285,_p=36286,cb=3200,ub=0,fb=1,cs="",Si="srgb",$r="srgb-linear",xu="linear",jt="srgb",Cr=7680,jv=519,db=512,hb=513,pb=514,Pp=515,mb=516,gb=517,Fp=518,vb=519,xp=35044,Xv="300 es",qi=2e3,gl=2001;function _b(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Su(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xb(){const r=Su("canvas");return r.style.display="block",r}const Wv={};function yu(...r){const e="THREE."+r.shift();console.log(e,...r)}function xx(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function dt(...r){r=xx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Lt(...r){r=xx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function Mu(...r){const e=r.join(" ");e in Wv||(Wv[e]=!0,dt(...r))}function Sb(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const yb={[Uh]:Lh,[Oh]:Ih,[Ph]:Bh,[Kr]:Fh,[Lh]:Uh,[Ih]:Oh,[Bh]:Ph,[Fh]:Kr};class no{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yd=Math.PI/180,Sp=180/Math.PI;function fs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function Dt(r,e,i){return Math.max(e,Math.min(i,r))}function Mb(r,e){return(r%e+e)%e}function Zd(r,e,i){return(1-i)*r+i*e}function Xi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Yt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class At{constructor(e=0,i=0){At.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Dt(this.x,e.x,i.x),this.y=Dt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Dt(this.x,e,i),this.y=Dt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Dt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class io{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],x=s[l+2],g=s[l+3],v=c[f+0],y=c[f+1],M=c[f+2],A=c[f+3];if(g!==A||m!==v||p!==y||x!==M){let _=m*v+p*y+x*M+g*A;_<0&&(v=-v,y=-y,M=-M,A=-A,_=-_);let S=1-h;if(_<.9995){const R=Math.acos(_),w=Math.sin(R);S=Math.sin(S*R)/w,h=Math.sin(h*R)/w,m=m*S+v*h,p=p*S+y*h,x=x*S+M*h,g=g*S+A*h}else{m=m*S+v*h,p=p*S+y*h,x=x*S+M*h,g=g*S+A*h;const R=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=R,p*=R,x*=R,g*=R}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],x=s[l+3],g=c[f],v=c[f+1],y=c[f+2],M=c[f+3];return e[i]=h*M+x*g+m*y-p*v,e[i+1]=m*M+x*v+p*g-h*y,e[i+2]=p*M+x*y+h*v-m*g,e[i+3]=x*M-h*g-m*v-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(s/2),x=h(l/2),g=h(c/2),v=m(s/2),y=m(l/2),M=m(c/2);switch(f){case"XYZ":this._x=v*x*g+p*y*M,this._y=p*y*g-v*x*M,this._z=p*x*M+v*y*g,this._w=p*x*g-v*y*M;break;case"YXZ":this._x=v*x*g+p*y*M,this._y=p*y*g-v*x*M,this._z=p*x*M-v*y*g,this._w=p*x*g+v*y*M;break;case"ZXY":this._x=v*x*g-p*y*M,this._y=p*y*g+v*x*M,this._z=p*x*M+v*y*g,this._w=p*x*g-v*y*M;break;case"ZYX":this._x=v*x*g-p*y*M,this._y=p*y*g+v*x*M,this._z=p*x*M-v*y*g,this._w=p*x*g+v*y*M;break;case"YZX":this._x=v*x*g+p*y*M,this._y=p*y*g+v*x*M,this._z=p*x*M-v*y*g,this._w=p*x*g-v*y*M;break;case"XZY":this._x=v*x*g-p*y*M,this._y=p*y*g-v*x*M,this._z=p*x*M+v*y*g,this._w=p*x*g+v*y*M;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],x=i[6],g=i[10],v=s+h+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(x-m)*y,this._y=(c-p)*y,this._z=(f-l)*y}else if(s>h&&s>g){const y=2*Math.sqrt(1+s-h-g);this._w=(x-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+p)/y}else if(h>g){const y=2*Math.sqrt(1+h-s-g);this._w=(c-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+x)/y}else{const y=2*Math.sqrt(1+g-s-h);this._w=(f-l)/y,this._x=(c+p)/y,this._y=(m+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+f*h+l*p-c*m,this._y=l*x+f*m+c*h-s*p,this._z=c*x+f*p+s*m-l*h,this._w=f*x-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class fe{constructor(e=0,i=0,s=0){fe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(qv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(qv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*s),x=2*(h*i-c*l),g=2*(c*s-f*i);return this.x=i+m*p+f*g-h*x,this.y=s+m*x+h*p-c*g,this.z=l+m*g+c*x-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Dt(this.x,e.x,i.x),this.y=Dt(this.y,e.y,i.y),this.z=Dt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Dt(this.x,e,i),this.y=Dt(this.y,e,i),this.z=Dt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Kd.copy(this).projectOnVector(e),this.sub(Kd)}reflect(e){return this.sub(Kd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Dt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kd=new fe,qv=new io;class yt{constructor(e,i,s,l,c,f,h,m,p){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p)}set(e,i,s,l,c,f,h,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=f,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],x=s[4],g=s[7],v=s[2],y=s[5],M=s[8],A=l[0],_=l[3],S=l[6],R=l[1],w=l[4],N=l[7],H=l[2],L=l[5],F=l[8];return c[0]=f*A+h*R+m*H,c[3]=f*_+h*w+m*L,c[6]=f*S+h*N+m*F,c[1]=p*A+x*R+g*H,c[4]=p*_+x*w+g*L,c[7]=p*S+x*N+g*F,c[2]=v*A+y*R+M*H,c[5]=v*_+y*w+M*L,c[8]=v*S+y*N+M*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return i*f*x-i*h*p-s*c*x+s*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=x*f-h*p,v=h*m-x*c,y=p*c-f*m,M=i*g+s*v+l*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=g*A,e[1]=(l*p-x*s)*A,e[2]=(h*s-l*f)*A,e[3]=v*A,e[4]=(x*i-l*m)*A,e[5]=(l*c-h*i)*A,e[6]=y*A,e[7]=(s*m-p*i)*A,e[8]=(f*i-s*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Qd.makeScale(e,i)),this}rotate(e){return this.premultiply(Qd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Qd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qd=new yt,Yv=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zv=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bb(){const r={enabled:!0,workingColorSpace:$r,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===jt&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===jt&&(l.r=Zr(l.r),l.g=Zr(l.g),l.b=Zr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===cs?xu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Mu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Mu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[$r]:{primaries:e,whitePoint:s,transfer:xu,toXYZ:Yv,fromXYZ:Zv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:e,whitePoint:s,transfer:jt,toXYZ:Yv,fromXYZ:Zv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const Ot=bb();function Ta(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let wr;class Eb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{wr===void 0&&(wr=Su("canvas")),wr.width=e.width,wr.height=e.height;const l=wr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=wr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Su("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ta(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ta(i[s]/255)*255):i[s]=Ta(i[s]);return{data:i,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tb=0;class Ip{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Jd(l[f].image)):c.push(Jd(l[f]))}else c=Jd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Jd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Eb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let Ab=0;const $d=new fe;class Pn extends no{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=ba,l=ba,c=On,f=Vs,h=Oi,m=ci,p=Pn.DEFAULT_ANISOTROPY,x=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ab++}),this.uuid=fs(),this.name="",this.source=new Ip(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($d).x}get height(){return this.source.getSize($d).y}get depth(){return this.source.getSize($d).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){dt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){dt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zh:e.x=e.x-Math.floor(e.x);break;case ba:e.x=e.x<0?0:1;break;case Hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zh:e.y=e.y-Math.floor(e.y);break;case ba:e.y=e.y<0?0:1;break;case Hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=fx;Pn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,s=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],x=m[4],g=m[8],v=m[1],y=m[5],M=m[9],A=m[2],_=m[6],S=m[10];if(Math.abs(x-v)<.01&&Math.abs(g-A)<.01&&Math.abs(M-_)<.01){if(Math.abs(x+v)<.1&&Math.abs(g+A)<.1&&Math.abs(M+_)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(p+1)/2,N=(y+1)/2,H=(S+1)/2,L=(x+v)/4,F=(g+A)/4,T=(M+_)/4;return w>N&&w>H?w<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(w),l=L/s,c=F/s):N>H?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=L/l,c=T/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=F/c,l=T/c),this.set(s,l,c,i),this}let R=Math.sqrt((_-M)*(_-M)+(g-A)*(g-A)+(v-x)*(v-x));return Math.abs(R)<.001&&(R=1),this.x=(_-M)/R,this.y=(g-A)/R,this.z=(v-x)/R,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Dt(this.x,e.x,i.x),this.y=Dt(this.y,e.y,i.y),this.z=Dt(this.z,e.z,i.z),this.w=Dt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Dt(this.x,e,i),this.y=Dt(this.y,e,i),this.z=Dt(this.z,e,i),this.w=Dt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Dt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rb extends no{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Pn(l),f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Ip(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends Rb{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Sx extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cb extends Pn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jt{constructor(e,i,s,l,c,f,h,m,p,x,g,v,y,M,A,_){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p,x,g,v,y,M,A,_)}set(e,i,s,l,c,f,h,m,p,x,g,v,y,M,A,_){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=f,S[9]=h,S[13]=m,S[2]=p,S[6]=x,S[10]=g,S[14]=v,S[3]=y,S[7]=M,S[11]=A,S[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Nr.setFromMatrixColumn(e,0).length(),c=1/Nr.setFromMatrixColumn(e,1).length(),f=1/Nr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const v=f*x,y=f*g,M=h*x,A=h*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=y+M*p,i[5]=v-A*p,i[9]=-h*m,i[2]=A-v*p,i[6]=M+y*p,i[10]=f*m}else if(e.order==="YXZ"){const v=m*x,y=m*g,M=p*x,A=p*g;i[0]=v+A*h,i[4]=M*h-y,i[8]=f*p,i[1]=f*g,i[5]=f*x,i[9]=-h,i[2]=y*h-M,i[6]=A+v*h,i[10]=f*m}else if(e.order==="ZXY"){const v=m*x,y=m*g,M=p*x,A=p*g;i[0]=v-A*h,i[4]=-f*g,i[8]=M+y*h,i[1]=y+M*h,i[5]=f*x,i[9]=A-v*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const v=f*x,y=f*g,M=h*x,A=h*g;i[0]=m*x,i[4]=M*p-y,i[8]=v*p+A,i[1]=m*g,i[5]=A*p+v,i[9]=y*p-M,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const v=f*m,y=f*p,M=h*m,A=h*p;i[0]=m*x,i[4]=A-v*g,i[8]=M*g+y,i[1]=g,i[5]=f*x,i[9]=-h*x,i[2]=-p*x,i[6]=y*g+M,i[10]=v-A*g}else if(e.order==="XZY"){const v=f*m,y=f*p,M=h*m,A=h*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=v*g+A,i[5]=f*x,i[9]=y*g-M,i[2]=M*g-y,i[6]=h*x,i[10]=A*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wb,e,Nb)}lookAt(e,i,s){const l=this.elements;return ri.subVectors(e,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),ts.crossVectors(s,ri),ts.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),ts.crossVectors(s,ri)),ts.normalize(),Ic.crossVectors(ri,ts),l[0]=ts.x,l[4]=Ic.x,l[8]=ri.x,l[1]=ts.y,l[5]=Ic.y,l[9]=ri.y,l[2]=ts.z,l[6]=Ic.z,l[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],x=s[1],g=s[5],v=s[9],y=s[13],M=s[2],A=s[6],_=s[10],S=s[14],R=s[3],w=s[7],N=s[11],H=s[15],L=l[0],F=l[4],T=l[8],O=l[12],J=l[1],G=l[5],q=l[9],K=l[13],Y=l[2],ae=l[6],D=l[10],z=l[14],te=l[3],le=l[7],_e=l[11],I=l[15];return c[0]=f*L+h*J+m*Y+p*te,c[4]=f*F+h*G+m*ae+p*le,c[8]=f*T+h*q+m*D+p*_e,c[12]=f*O+h*K+m*z+p*I,c[1]=x*L+g*J+v*Y+y*te,c[5]=x*F+g*G+v*ae+y*le,c[9]=x*T+g*q+v*D+y*_e,c[13]=x*O+g*K+v*z+y*I,c[2]=M*L+A*J+_*Y+S*te,c[6]=M*F+A*G+_*ae+S*le,c[10]=M*T+A*q+_*D+S*_e,c[14]=M*O+A*K+_*z+S*I,c[3]=R*L+w*J+N*Y+H*te,c[7]=R*F+w*G+N*ae+H*le,c[11]=R*T+w*q+N*D+H*_e,c[15]=R*O+w*K+N*z+H*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],x=e[2],g=e[6],v=e[10],y=e[14],M=e[3],A=e[7],_=e[11],S=e[15],R=m*y-p*v,w=h*y-p*g,N=h*v-m*g,H=f*y-p*x,L=f*v-m*x,F=f*g-h*x;return i*(A*R-_*w+S*N)-s*(M*R-_*H+S*L)+l*(M*w-A*H+S*F)-c*(M*N-A*L+_*F)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],x=e[8],g=e[9],v=e[10],y=e[11],M=e[12],A=e[13],_=e[14],S=e[15],R=i*h-s*f,w=i*m-l*f,N=i*p-c*f,H=s*m-l*h,L=s*p-c*h,F=l*p-c*m,T=x*A-g*M,O=x*_-v*M,J=x*S-y*M,G=g*_-v*A,q=g*S-y*A,K=v*S-y*_,Y=R*K-w*q+N*G+H*J-L*O+F*T;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ae=1/Y;return e[0]=(h*K-m*q+p*G)*ae,e[1]=(l*q-s*K-c*G)*ae,e[2]=(A*F-_*L+S*H)*ae,e[3]=(v*L-g*F-y*H)*ae,e[4]=(m*J-f*K-p*O)*ae,e[5]=(i*K-l*J+c*O)*ae,e[6]=(_*N-M*F-S*w)*ae,e[7]=(x*F-v*N+y*w)*ae,e[8]=(f*q-h*J+p*T)*ae,e[9]=(s*J-i*q-c*T)*ae,e[10]=(M*L-A*N+S*R)*ae,e[11]=(g*N-x*L-y*R)*ae,e[12]=(h*O-f*G-m*T)*ae,e[13]=(i*G-s*O+l*T)*ae,e[14]=(A*w-M*H-_*R)*ae,e[15]=(x*H-g*w+v*R)*ae,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,h=e.y,m=e.z,p=c*f,x=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+s,x*m-l*f,0,p*m-l*h,x*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,x=f+f,g=h+h,v=c*p,y=c*x,M=c*g,A=f*x,_=f*g,S=h*g,R=m*p,w=m*x,N=m*g,H=s.x,L=s.y,F=s.z;return l[0]=(1-(A+S))*H,l[1]=(y+N)*H,l[2]=(M-w)*H,l[3]=0,l[4]=(y-N)*L,l[5]=(1-(v+S))*L,l[6]=(_+R)*L,l[7]=0,l[8]=(M+w)*F,l[9]=(_-R)*F,l[10]=(1-(v+A))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Nr.set(l[0],l[1],l[2]).length();const h=Nr.set(l[4],l[5],l[6]).length(),m=Nr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Di.copy(this);const p=1/f,x=1/h,g=1/m;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=x,Di.elements[5]*=x,Di.elements[6]*=x,Di.elements[8]*=g,Di.elements[9]*=g,Di.elements[10]*=g,i.setFromRotationMatrix(Di),s.x=f,s.y=h,s.z=m,this}makePerspective(e,i,s,l,c,f,h=qi,m=!1){const p=this.elements,x=2*c/(i-e),g=2*c/(s-l),v=(i+e)/(i-e),y=(s+l)/(s-l);let M,A;if(m)M=c/(f-c),A=f*c/(f-c);else if(h===qi)M=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(h===gl)M=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,h=qi,m=!1){const p=this.elements,x=2/(i-e),g=2/(s-l),v=-(i+e)/(i-e),y=-(s+l)/(s-l);let M,A;if(m)M=1/(f-c),A=f/(f-c);else if(h===qi)M=-2/(f-c),A=-(f+c)/(f-c);else if(h===gl)M=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Nr=new fe,Di=new Jt,wb=new fe(0,0,0),Nb=new fe(1,1,1),ts=new fe,Ic=new fe,ri=new fe,Kv=new Jt,Qv=new io;class Ca{constructor(e=0,i=0,s=0,l=Ca.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],x=l[9],g=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Dt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Dt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,y),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Kv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Qv.setFromEuler(this),this.setFromQuaternion(Qv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ca.DEFAULT_ORDER="XYZ";class yx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Db=0;const Jv=new fe,Dr=new io,_a=new Jt,Bc=new fe,$o=new fe,Ub=new fe,Lb=new io,$v=new fe(1,0,0),e_=new fe(0,1,0),t_=new fe(0,0,1),n_={type:"added"},Ob={type:"removed"},Ur={type:"childadded",child:null},eh={type:"childremoved",child:null};class wn extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new fe,i=new Ca,s=new io,l=new fe(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Jt},normalMatrix:{value:new yt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Dr.setFromAxisAngle(e,i),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,i){return Dr.setFromAxisAngle(e,i),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis($v,e)}rotateY(e){return this.rotateOnAxis(e_,e)}rotateZ(e){return this.rotateOnAxis(t_,e)}translateOnAxis(e,i){return Jv.copy(e).applyQuaternion(this.quaternion),this.position.add(Jv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis($v,e)}translateY(e){return this.translateOnAxis(e_,e)}translateZ(e){return this.translateOnAxis(t_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_a.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Bc.copy(e):Bc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_a.lookAt($o,Bc,this.up):_a.lookAt(Bc,$o,this.up),this.quaternion.setFromRotationMatrix(_a),l&&(_a.extractRotation(l.matrixWorld),Dr.setFromRotationMatrix(_a),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(n_),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Ob),eh.child=e,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_a.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_a.multiply(e.parent.matrixWorld)),e.applyMatrix4(_a),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(n_),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,Ub),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,Lb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),x=f(e.images),g=f(e.shapes),v=f(e.skeletons),y=f(e.animations),M=f(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),y.length>0&&(s.animations=y),M.length>0&&(s.nodes=M)}return s.object=l,s;function f(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}wn.DEFAULT_UP=new fe(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zc extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pb={type:"move"};class th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const A of e.hand.values()){const _=i.getJointPose(A,s),S=this._getHandJoint(p,A);_!==null&&(S.matrix.fromArray(_.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=_.radius),S.visible=_!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=x.position.distanceTo(g.position),y=.02,M=.005;p.inputState.pinching&&v>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Pb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new zc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Hc={h:0,s:0,l:0};function nh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class bt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ot.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ot.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ot.workingColorSpace){if(e=Mb(e,1),i=Dt(i,0,1),s=Dt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=nh(f,c,e+1/3),this.g=nh(f,c,e),this.b=nh(f,c,e-1/3)}return Ot.colorSpaceToWorking(this,l),this}setStyle(e,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:dt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Si){const s=Mx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}copyLinearToSRGB(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return Ot.workingToColorSpace(Un.copy(this),e),Math.round(Dt(Un.r*255,0,255))*65536+Math.round(Dt(Un.g*255,0,255))*256+Math.round(Dt(Un.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ot.workingColorSpace){Ot.workingToColorSpace(Un.copy(this),i);const s=Un.r,l=Un.g,c=Un.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const x=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=x<=.5?g/(f+h):g/(2-f-h),f){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=Ot.workingColorSpace){return Ot.workingToColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=Si){Ot.workingToColorSpace(Un.copy(this),e);const i=Un.r,s=Un.g,l=Un.b;return e!==Si?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+i,ns.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ns),e.getHSL(Hc);const s=Zd(ns.h,Hc.h,i),l=Zd(ns.s,Hc.s,i),c=Zd(ns.l,Hc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new bt;bt.NAMES=Mx;class Bp{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(e),this.density=i}clone(){return new Bp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Fb extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ca,this.environmentIntensity=1,this.environmentRotation=new Ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ui=new fe,xa=new fe,ih=new fe,Sa=new fe,Lr=new fe,Or=new fe,i_=new fe,ah=new fe,sh=new fe,rh=new fe,oh=new rn,lh=new rn,ch=new rn;class yi{constructor(e=new fe,i=new fe,s=new fe){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ui.subVectors(e,i),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ui.subVectors(l,i),xa.subVectors(s,i),ih.subVectors(e,i);const f=Ui.dot(Ui),h=Ui.dot(xa),m=Ui.dot(ih),p=xa.dot(xa),x=xa.dot(ih),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const v=1/g,y=(p*m-h*x)*v,M=(f*x-h*m)*v;return c.set(1-y-M,M,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(e,i,s,l,c,f,h,m){return this.getBarycoord(e,i,s,l,Sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Sa.x),m.addScaledVector(f,Sa.y),m.addScaledVector(h,Sa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return oh.setScalar(0),lh.setScalar(0),ch.setScalar(0),oh.fromBufferAttribute(e,i),lh.fromBufferAttribute(e,s),ch.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(oh,c.x),f.addScaledVector(lh,c.y),f.addScaledVector(ch,c.z),f}static isFrontFacing(e,i,s,l){return Ui.subVectors(s,i),xa.subVectors(e,i),Ui.cross(xa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Ui.cross(xa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return yi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,h;Lr.subVectors(l,s),Or.subVectors(c,s),ah.subVectors(e,s);const m=Lr.dot(ah),p=Or.dot(ah);if(m<=0&&p<=0)return i.copy(s);sh.subVectors(e,l);const x=Lr.dot(sh),g=Or.dot(sh);if(x>=0&&g<=x)return i.copy(l);const v=m*g-x*p;if(v<=0&&m>=0&&x<=0)return f=m/(m-x),i.copy(s).addScaledVector(Lr,f);rh.subVectors(e,c);const y=Lr.dot(rh),M=Or.dot(rh);if(M>=0&&y<=M)return i.copy(c);const A=y*p-m*M;if(A<=0&&p>=0&&M<=0)return h=p/(p-M),i.copy(s).addScaledVector(Or,h);const _=x*M-y*g;if(_<=0&&g-x>=0&&y-M>=0)return i_.subVectors(c,l),h=(g-x)/(g-x+(y-M)),i.copy(l).addScaledVector(i_,h);const S=1/(_+A+v);return f=A*S,h=v*S,i.copy(s).addScaledVector(Lr,f).addScaledVector(Or,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _l{constructor(e=new fe(1/0,1/0,1/0),i=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Li.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Li.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Li.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Li):Li.fromBufferAttribute(c,f),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Gc.copy(s.boundingBox)),Gc.applyMatrix4(e.matrixWorld),this.union(Gc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(el),Vc.subVectors(this.max,el),Pr.subVectors(e.a,el),Fr.subVectors(e.b,el),Ir.subVectors(e.c,el),is.subVectors(Fr,Pr),as.subVectors(Ir,Fr),Ls.subVectors(Pr,Ir);let i=[0,-is.z,is.y,0,-as.z,as.y,0,-Ls.z,Ls.y,is.z,0,-is.x,as.z,0,-as.x,Ls.z,0,-Ls.x,-is.y,is.x,0,-as.y,as.x,0,-Ls.y,Ls.x,0];return!uh(i,Pr,Fr,Ir,Vc)||(i=[1,0,0,0,1,0,0,0,1],!uh(i,Pr,Fr,Ir,Vc))?!1:(kc.crossVectors(is,as),i=[kc.x,kc.y,kc.z],uh(i,Pr,Fr,Ir,Vc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ya),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ya=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],Li=new fe,Gc=new _l,Pr=new fe,Fr=new fe,Ir=new fe,is=new fe,as=new fe,Ls=new fe,el=new fe,Vc=new fe,kc=new fe,Os=new fe;function uh(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Os.fromArray(r,c);const h=l.x*Math.abs(Os.x)+l.y*Math.abs(Os.y)+l.z*Math.abs(Os.z),m=e.dot(Os),p=i.dot(Os),x=s.dot(Os);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const gn=new fe,jc=new At;let Ib=0;class Ln{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ib++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=xp,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)jc.fromBufferAttribute(this,i),jc.applyMatrix3(e),this.setXY(i,jc.x,jc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Xi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Yt(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Xi(i,this.array)),i}setX(e,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Xi(i,this.array)),i}setY(e,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Xi(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Xi(i,this.array)),i}setW(e,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Yt(i,this.array),s=Yt(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Yt(i,this.array),s=Yt(s,this.array),l=Yt(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Yt(i,this.array),s=Yt(s,this.array),l=Yt(l,this.array),c=Yt(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xp&&(e.usage=this.usage),e}}class bx extends Ln{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Ex extends Ln{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class ui extends Ln{constructor(e,i,s){super(new Float32Array(e),i,s)}}const Bb=new _l,tl=new fe,fh=new fe;class xl{constructor(e=new fe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Bb.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tl.subVectors(e,this.center);const i=tl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(tl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tl.copy(e.center).add(fh)),this.expandByPoint(tl.copy(e.center).sub(fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zb=0;const xi=new Jt,dh=new wn,Br=new fe,oi=new _l,nl=new _l,bn=new fe;class Fn extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_b(e)?Ex:bx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new yt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,i,s){return xi.makeTranslation(e,i,s),this.applyMatrix4(xi),this}scale(e,i,s){return xi.makeScale(e,i,s),this.applyMatrix4(xi),this}lookAt(e){return dh.lookAt(e),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ui(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _l);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(e){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];nl.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(oi.min,nl.min),oi.expandByPoint(bn),bn.addVectors(oi.max,nl.max),oi.expandByPoint(bn)):(oi.expandByPoint(nl.min),oi.expandByPoint(nl.max))}oi.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)bn.fromBufferAttribute(h,p),m&&(Br.fromBufferAttribute(e,p),bn.add(Br)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let T=0;T<s.count;T++)h[T]=new fe,m[T]=new fe;const p=new fe,x=new fe,g=new fe,v=new At,y=new At,M=new At,A=new fe,_=new fe;function S(T,O,J){p.fromBufferAttribute(s,T),x.fromBufferAttribute(s,O),g.fromBufferAttribute(s,J),v.fromBufferAttribute(c,T),y.fromBufferAttribute(c,O),M.fromBufferAttribute(c,J),x.sub(p),g.sub(p),y.sub(v),M.sub(v);const G=1/(y.x*M.y-M.x*y.y);isFinite(G)&&(A.copy(x).multiplyScalar(M.y).addScaledVector(g,-y.y).multiplyScalar(G),_.copy(g).multiplyScalar(y.x).addScaledVector(x,-M.x).multiplyScalar(G),h[T].add(A),h[O].add(A),h[J].add(A),m[T].add(_),m[O].add(_),m[J].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let T=0,O=R.length;T<O;++T){const J=R[T],G=J.start,q=J.count;for(let K=G,Y=G+q;K<Y;K+=3)S(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const w=new fe,N=new fe,H=new fe,L=new fe;function F(T){H.fromBufferAttribute(l,T),L.copy(H);const O=h[T];w.copy(O),w.sub(H.multiplyScalar(H.dot(O))).normalize(),N.crossVectors(L,O);const G=N.dot(m[T])<0?-1:1;f.setXYZW(T,w.x,w.y,w.z,G)}for(let T=0,O=R.length;T<O;++T){const J=R[T],G=J.start,q=J.count;for(let K=G,Y=G+q;K<Y;K+=3)F(e.getX(K+0)),F(e.getX(K+1)),F(e.getX(K+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ln(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,y=s.count;v<y;v++)s.setXYZ(v,0,0,0);const l=new fe,c=new fe,f=new fe,h=new fe,m=new fe,p=new fe,x=new fe,g=new fe;if(e)for(let v=0,y=e.count;v<y;v+=3){const M=e.getX(v+0),A=e.getX(v+1),_=e.getX(v+2);l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,_),x.subVectors(f,c),g.subVectors(l,c),x.cross(g),h.fromBufferAttribute(s,M),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,_),h.add(x),m.add(x),p.add(x),s.setXYZ(M,h.x,h.y,h.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(_,p.x,p.y,p.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),x.subVectors(f,c),g.subVectors(l,c),x.cross(g),s.setXYZ(v+0,x.x,x.y,x.z),s.setXYZ(v+1,x.x,x.y,x.z),s.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,g=h.normalized,v=new p.constructor(m.length*x);let y=0,M=0;for(let A=0,_=m.length;A<_;A++){h.isInterleavedBufferAttribute?y=m[A]*h.data.stride+h.offset:y=m[A]*x;for(let S=0;S<x;S++)v[M++]=p[y++]}return new Ln(v,x,g)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fn,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let x=0,g=p.length;x<g;x++){const v=p[x],y=e(v,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,v=p.length;g<v;g++){const y=p[g];x.push(y.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=e.morphAttributes;for(const p in c){const x=[],g=c[p];for(let v=0,y=g.length;v<y;v++)x.push(g[v].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,x=f.length;p<x;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hb{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=xp,this.updateRanges=[],this.version=0,this.uuid=fs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,s){e*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[s+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vn=new fe;class bu{constructor(e,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,s=this.data.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix4(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyNormalMatrix(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.transformDirection(e),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}getComponent(e,i){let s=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(s=Xi(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Yt(s,this.array)),this.data.array[e*this.data.stride+this.offset+i]=s,this}setX(e,i){return this.normalized&&(i=Yt(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Yt(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Yt(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Yt(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=Xi(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=Xi(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=Xi(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=Xi(i,this.array)),i}setXY(e,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(i=Yt(i,this.array),s=Yt(s,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this}setXYZ(e,i,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Yt(i,this.array),s=Yt(s,this.array),l=Yt(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=Yt(i,this.array),s=Yt(s,this.array),l=Yt(l,this.array),c=Yt(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=s,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){yu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ln(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){yu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Gb=0;class Xs extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Yr,this.side=hs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=Dh,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cr,this.stencilZFail=Cr,this.stencilZPass=Cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){dt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){dt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(s.blending=this.blending),this.side!==hs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Nh&&(s.blendSrc=this.blendSrc),this.blendDst!==Dh&&(s.blendDst=this.blendDst),this.blendEquation!==Hs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Cr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Cr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Tx extends Xs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let zr;const il=new fe,Hr=new fe,Gr=new fe,Vr=new At,al=new At,Ax=new Jt,Xc=new fe,sl=new fe,Wc=new fe,a_=new At,hh=new At,s_=new At;class Vb extends wn{constructor(e=new Tx){if(super(),this.isSprite=!0,this.type="Sprite",zr===void 0){zr=new Fn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new Hb(i,5);zr.setIndex([0,1,2,0,2,3]),zr.setAttribute("position",new bu(s,3,0,!1)),zr.setAttribute("uv",new bu(s,2,3,!1))}this.geometry=zr,this.material=e,this.center=new At(.5,.5),this.count=1}raycast(e,i){e.camera===null&&Lt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hr.setFromMatrixScale(this.matrixWorld),Ax.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Gr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const f=this.center;qc(Xc.set(-.5,-.5,0),Gr,f,Hr,l,c),qc(sl.set(.5,-.5,0),Gr,f,Hr,l,c),qc(Wc.set(.5,.5,0),Gr,f,Hr,l,c),a_.set(0,0),hh.set(1,0),s_.set(1,1);let h=e.ray.intersectTriangle(Xc,sl,Wc,!1,il);if(h===null&&(qc(sl.set(-.5,.5,0),Gr,f,Hr,l,c),hh.set(0,1),h=e.ray.intersectTriangle(Xc,Wc,sl,!1,il),h===null))return;const m=e.ray.origin.distanceTo(il);m<e.near||m>e.far||i.push({distance:m,point:il.clone(),uv:yi.getInterpolation(il,Xc,sl,Wc,a_,hh,s_,new At),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function qc(r,e,i,s,l,c){Vr.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(al.x=c*Vr.x-l*Vr.y,al.y=l*Vr.x+c*Vr.y):al.copy(Vr),r.copy(e),r.x+=al.x,r.y+=al.y,r.applyMatrix4(Ax)}const Ma=new fe,ph=new fe,Yc=new fe,ss=new fe,mh=new fe,Zc=new fe,gh=new fe;class zp{constructor(e=new fe,i=new fe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ma)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ma.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ma.copy(this.origin).addScaledVector(this.direction,i),Ma.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){ph.copy(e).add(i).multiplyScalar(.5),Yc.copy(i).sub(e).normalize(),ss.copy(this.origin).sub(ph);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Yc),h=ss.dot(this.direction),m=-ss.dot(Yc),p=ss.lengthSq(),x=Math.abs(1-f*f);let g,v,y,M;if(x>0)if(g=f*m-h,v=f*h-m,M=c*x,g>=0)if(v>=-M)if(v<=M){const A=1/x;g*=A,v*=A,y=g*(g+f*v+2*h)+v*(f*g+v+2*m)+p}else v=c,g=Math.max(0,-(f*v+h)),y=-g*g+v*(v+2*m)+p;else v=-c,g=Math.max(0,-(f*v+h)),y=-g*g+v*(v+2*m)+p;else v<=-M?(g=Math.max(0,-(-f*c+h)),v=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+v*(v+2*m)+p):v<=M?(g=0,v=Math.min(Math.max(-c,-m),c),y=v*(v+2*m)+p):(g=Math.max(0,-(f*c+h)),v=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+v*(v+2*m)+p);else v=f>0?-c:c,g=Math.max(0,-(f*v+h)),y=-g*g+v*(v+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(ph).addScaledVector(Yc,v),y}intersectSphere(e,i){Ma.subVectors(e.center,this.origin);const s=Ma.dot(this.direction),l=Ma.dot(Ma)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,h,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),x>=0?(c=(e.min.y-v.y)*x,f=(e.max.y-v.y)*x):(c=(e.max.y-v.y)*x,f=(e.min.y-v.y)*x),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(h=(e.min.z-v.z)*g,m=(e.max.z-v.z)*g):(h=(e.max.z-v.z)*g,m=(e.min.z-v.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ma)!==null}intersectTriangle(e,i,s,l,c){mh.subVectors(i,e),Zc.subVectors(s,e),gh.crossVectors(mh,Zc);let f=this.direction.dot(gh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;ss.subVectors(this.origin,e);const m=h*this.direction.dot(Zc.crossVectors(ss,Zc));if(m<0)return null;const p=h*this.direction.dot(mh.cross(ss));if(p<0||m+p>f)return null;const x=-h*ss.dot(gh);return x<0?null:this.at(x/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hp extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ca,this.combine=ax,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const r_=new Jt,Ps=new zp,Kc=new xl,o_=new fe,Qc=new fe,Jc=new fe,$c=new fe,vh=new fe,eu=new fe,l_=new fe,tu=new fe;class Qi extends wn{constructor(e=new Fn,i=new Hp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){eu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=h[m],g=c[m];x!==0&&(vh.fromBufferAttribute(g,e),f?eu.addScaledVector(vh,x):eu.addScaledVector(vh.sub(i),x))}i.add(eu)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Kc.copy(s.boundingSphere),Kc.applyMatrix4(c),Ps.copy(e.ray).recast(e.near),!(Kc.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(Kc,o_)===null||Ps.origin.distanceToSquared(o_)>(e.far-e.near)**2))&&(r_.copy(c).invert(),Ps.copy(e.ray).applyMatrix4(r_),!(s.boundingBox!==null&&Ps.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Ps)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,v=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(f))for(let M=0,A=v.length;M<A;M++){const _=v[M],S=f[_.materialIndex],R=Math.max(_.start,y.start),w=Math.min(h.count,Math.min(_.start+_.count,y.start+y.count));for(let N=R,H=w;N<H;N+=3){const L=h.getX(N),F=h.getX(N+1),T=h.getX(N+2);l=nu(this,S,e,s,p,x,g,L,F,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=_.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),A=Math.min(h.count,y.start+y.count);for(let _=M,S=A;_<S;_+=3){const R=h.getX(_),w=h.getX(_+1),N=h.getX(_+2);l=nu(this,f,e,s,p,x,g,R,w,N),l&&(l.faceIndex=Math.floor(_/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let M=0,A=v.length;M<A;M++){const _=v[M],S=f[_.materialIndex],R=Math.max(_.start,y.start),w=Math.min(m.count,Math.min(_.start+_.count,y.start+y.count));for(let N=R,H=w;N<H;N+=3){const L=N,F=N+1,T=N+2;l=nu(this,S,e,s,p,x,g,L,F,T),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=_.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let _=M,S=A;_<S;_+=3){const R=_,w=_+1,N=_+2;l=nu(this,f,e,s,p,x,g,R,w,N),l&&(l.faceIndex=Math.floor(_/3),i.push(l))}}}}function kb(r,e,i,s,l,c,f,h){let m;if(e.side===Kn?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,e.side===hs,h),m===null)return null;tu.copy(h),tu.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(tu);return p<i.near||p>i.far?null:{distance:p,point:tu.clone(),object:r}}function nu(r,e,i,s,l,c,f,h,m,p){r.getVertexPosition(h,Qc),r.getVertexPosition(m,Jc),r.getVertexPosition(p,$c);const x=kb(r,e,i,s,Qc,Jc,$c,l_);if(x){const g=new fe;yi.getBarycoord(l_,Qc,Jc,$c,g),l&&(x.uv=yi.getInterpolatedAttribute(l,h,m,p,g,new At)),c&&(x.uv1=yi.getInterpolatedAttribute(c,h,m,p,g,new At)),f&&(x.normal=yi.getInterpolatedAttribute(f,h,m,p,g,new fe),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new fe,materialIndex:0};yi.getNormal(Qc,Jc,$c,v.normal),x.face=v,x.barycoord=g}return x}class jb extends Pn{constructor(e=null,i=1,s=1,l,c,f,h,m,p=Cn,x=Cn,g,v){super(null,f,h,m,p,x,l,c,g,v),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _h=new fe,Xb=new fe,Wb=new yt;class zs{constructor(e=new fe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=_h.subVectors(s,i).cross(Xb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(_h),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Wb.getNormalMatrix(e),l=this.coplanarPoint(_h).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new xl,qb=new At(.5,.5),iu=new fe;class Gp{constructor(e=new zs,i=new zs,s=new zs,l=new zs,c=new zs,f=new zs){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=qi,s=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],x=c[4],g=c[5],v=c[6],y=c[7],M=c[8],A=c[9],_=c[10],S=c[11],R=c[12],w=c[13],N=c[14],H=c[15];if(l[0].setComponents(p-f,y-x,S-M,H-R).normalize(),l[1].setComponents(p+f,y+x,S+M,H+R).normalize(),l[2].setComponents(p+h,y+g,S+A,H+w).normalize(),l[3].setComponents(p-h,y-g,S-A,H-w).normalize(),s)l[4].setComponents(m,v,_,N).normalize(),l[5].setComponents(p-m,y-v,S-_,H-N).normalize();else if(l[4].setComponents(p-m,y-v,S-_,H-N).normalize(),i===qi)l[5].setComponents(p+m,y+v,S+_,H+N).normalize();else if(i===gl)l[5].setComponents(m,v,_,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);const i=qb.distanceTo(e.center);return Fs.radius=.7071067811865476+i,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(iu.x=l.normal.x>0?e.max.x:e.min.x,iu.y=l.normal.y>0?e.max.y:e.min.y,iu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(iu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vp extends Xs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Eu=new fe,Tu=new fe,c_=new Jt,rl=new zp,au=new xl,xh=new fe,u_=new fe;class Rx extends wn{constructor(e=new Fn,i=new Vp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Eu.fromBufferAttribute(i,l-1),Tu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Eu.distanceTo(Tu);e.setAttribute("lineDistance",new ui(s,1))}else dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),au.copy(s.boundingSphere),au.applyMatrix4(l),au.radius+=c,e.ray.intersectsSphere(au)===!1)return;c_.copy(l).invert(),rl.copy(e.ray).applyMatrix4(c_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,x=s.index,v=s.attributes.position;if(x!==null){const y=Math.max(0,f.start),M=Math.min(x.count,f.start+f.count);for(let A=y,_=M-1;A<_;A+=p){const S=x.getX(A),R=x.getX(A+1),w=su(this,e,rl,m,S,R,A);w&&i.push(w)}if(this.isLineLoop){const A=x.getX(M-1),_=x.getX(y),S=su(this,e,rl,m,A,_,M-1);S&&i.push(S)}}else{const y=Math.max(0,f.start),M=Math.min(v.count,f.start+f.count);for(let A=y,_=M-1;A<_;A+=p){const S=su(this,e,rl,m,A,A+1,A);S&&i.push(S)}if(this.isLineLoop){const A=su(this,e,rl,m,M-1,y,M-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function su(r,e,i,s,l,c,f){const h=r.geometry.attributes.position;if(Eu.fromBufferAttribute(h,l),Tu.fromBufferAttribute(h,c),i.distanceSqToSegment(Eu,Tu,xh,u_)>s)return;xh.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(xh);if(!(p<e.near||p>e.far))return{distance:p,point:u_.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const f_=new fe,d_=new fe;class Yb extends Rx{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)f_.fromBufferAttribute(i,l),d_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+f_.distanceTo(d_);e.setAttribute("lineDistance",new ui(s,1))}else dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yp extends Xs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const h_=new Jt,Mp=new zp,ru=new xl,ou=new fe;class p_ extends wn{constructor(e=new Fn,i=new yp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),ru.copy(s.boundingSphere),ru.applyMatrix4(l),ru.radius+=c,e.ray.intersectsSphere(ru)===!1)return;h_.copy(l).invert(),Mp.copy(e.ray).applyMatrix4(h_);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,g=s.attributes.position;if(p!==null){const v=Math.max(0,f.start),y=Math.min(p.count,f.start+f.count);for(let M=v,A=y;M<A;M++){const _=p.getX(M);ou.fromBufferAttribute(g,_),m_(ou,_,m,l,e,i,this)}}else{const v=Math.max(0,f.start),y=Math.min(g.count,f.start+f.count);for(let M=v,A=y;M<A;M++)ou.fromBufferAttribute(g,M),m_(ou,M,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function m_(r,e,i,s,l,c,f){const h=Mp.distanceSqToPoint(r);if(h<i){const m=new fe;Mp.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class Cx extends Pn{constructor(e=[],i=js,s,l,c,f,h,m,p,x){super(e,i,s,l,c,f,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zb extends Pn{constructor(e,i,s,l,c,f,h,m,p){super(e,i,s,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vl extends Pn{constructor(e,i,s=Ki,l,c,f,h=Cn,m=Cn,p,x=Ra,g=1){if(x!==Ra&&x!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:g};super(v,l,c,f,h,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ip(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Kb extends vl{constructor(e,i=Ki,s=js,l,c,f=Cn,h=Cn,m,p=Ra){const x={width:e,height:e,depth:1},g=[x,x,x,x,x,x];super(e,e,i,s,l,c,f,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wx extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sl extends Fn{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],x=[],g=[];let v=0,y=0;M("z","y","x",-1,-1,s,i,e,f,c,0),M("z","y","x",1,-1,s,i,-e,f,c,1),M("x","z","y",1,1,e,s,i,l,f,2),M("x","z","y",1,-1,e,s,-i,l,f,3),M("x","y","z",1,-1,e,i,s,l,c,4),M("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ui(p,3)),this.setAttribute("normal",new ui(x,3)),this.setAttribute("uv",new ui(g,2));function M(A,_,S,R,w,N,H,L,F,T,O){const J=N/F,G=H/T,q=N/2,K=H/2,Y=L/2,ae=F+1,D=T+1;let z=0,te=0;const le=new fe;for(let _e=0;_e<D;_e++){const I=_e*G-K;for(let j=0;j<ae;j++){const ne=j*J-q;le[A]=ne*R,le[_]=I*w,le[S]=Y,p.push(le.x,le.y,le.z),le[A]=0,le[_]=0,le[S]=L>0?1:-1,x.push(le.x,le.y,le.z),g.push(j/F),g.push(1-_e/T),z+=1}}for(let _e=0;_e<T;_e++)for(let I=0;I<F;I++){const j=v+I+ae*_e,ne=v+I+ae*(_e+1),W=v+(I+1)+ae*(_e+1),re=v+(I+1)+ae*_e;m.push(j,ne,re),m.push(ne,W,re),te+=6}h.addGroup(y,te,O),y+=te,v+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class yl extends Fn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,x=m+1,g=e/h,v=i/m,y=[],M=[],A=[],_=[];for(let S=0;S<x;S++){const R=S*v-f;for(let w=0;w<p;w++){const N=w*g-c;M.push(N,-R,0),A.push(0,0,1),_.push(w/h),_.push(1-S/m)}}for(let S=0;S<m;S++)for(let R=0;R<h;R++){const w=R+p*S,N=R+p*(S+1),H=R+1+p*(S+1),L=R+1+p*S;y.push(w,N,L),y.push(N,H,L)}this.setIndex(y),this.setAttribute("position",new ui(M,3)),this.setAttribute("normal",new ui(A,3)),this.setAttribute("uv",new ui(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.width,e.height,e.widthSegments,e.heightSegments)}}function eo(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function kn(r){const e={};for(let i=0;i<r.length;i++){const s=eo(r[i]);for(const l in s)e[l]=s[l]}return e}function Qb(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Nx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const Jb={clone:eo,merge:kn};var $b=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$b,this.fragmentShader=eE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=Qb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class tE extends Ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nE extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iE extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Dx extends wn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Sh=new Jt,g_=new fe,v_=new fe;class aE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gp,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;g_.setFromMatrixPosition(e.matrixWorld),i.position.copy(g_),v_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(v_),i.updateMatrixWorld(),Sh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===gl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Sh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const lu=new fe,cu=new io,Gi=new fe;class Ux extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lu,cu,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lu,cu,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(lu,cu,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lu,cu,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rs=new fe,__=new At,x_=new At;class li extends Ux{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Sp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sp*2*Math.atan(Math.tan(Yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,i){return this.getViewBounds(e,__,x_),i.subVectors(x_,__)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Yd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class sE extends aE{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0}}class rE extends Dx{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new sE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Lx extends Ux{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class oE extends Dx{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const kr=-90,jr=1;class lE extends wn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(kr,jr,e,i);l.layers=this.layers,this.add(l);const c=new li(kr,jr,e,i);c.layers=this.layers,this.add(c);const f=new li(kr,jr,e,i);f.layers=this.layers,this.add(f);const h=new li(kr,jr,e,i);h.layers=this.layers,this.add(h);const m=new li(kr,jr,e,i);m.layers=this.layers,this.add(m);const p=new li(kr,jr,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===gl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,x]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),_&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(g,v,y),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class cE extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class uE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,dt("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}class fE extends Yb{constructor(e=10,i=10,s=4473924,l=8947848){s=new bt(s),l=new bt(l);const c=i/2,f=e/i,h=e/2,m=[],p=[];for(let v=0,y=0,M=-h;v<=i;v++,M+=f){m.push(-h,0,M,h,0,M),m.push(M,0,-h,M,0,h);const A=v===c?s:l;A.toArray(p,y),y+=3,A.toArray(p,y),y+=3,A.toArray(p,y),y+=3,A.toArray(p,y),y+=3}const x=new Fn;x.setAttribute("position",new ui(m,3)),x.setAttribute("color",new ui(p,3));const g=new Vp({vertexColors:!0,toneMapped:!1});super(x,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function S_(r,e,i,s){const l=dE(s);switch(i){case gx:return r*e;case _x:return r*e/l.components*l.byteLength;case Up:return r*e/l.components*l.byteLength;case Jr:return r*e*2/l.components*l.byteLength;case Lp:return r*e*2/l.components*l.byteLength;case vx:return r*e*3/l.components*l.byteLength;case Oi:return r*e*4/l.components*l.byteLength;case Op:return r*e*4/l.components*l.byteLength;case pu:case mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case gu:case vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vh:case jh:return Math.max(r,16)*Math.max(e,8)/4;case Gh:case kh:return Math.max(r,8)*Math.max(e,8)/2;case Xh:case Wh:case Yh:case Zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case qh:case Kh:case Qh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ep:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case tp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case np:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ip:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ap:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case sp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case rp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case op:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case lp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case cp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case up:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case fp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case dp:case hp:case pp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case mp:case gp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case vp:case _p:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function dE(r){switch(r){case ci:case dx:return{byteLength:1,components:1};case pl:case hx:case Aa:return{byteLength:2,components:1};case Np:case Dp:return{byteLength:2,components:4};case Ki:case wp:case Wi:return{byteLength:4,components:1};case px:case mx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rp}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ox(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function hE(r){const e=new WeakMap;function i(h,m){const p=h.array,x=h.usage,g=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,x),h.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const x=m.array,g=m.updateRanges;if(r.bindBuffer(p,h),g.length===0)r.bufferSubData(p,0,x);else{g.sort((y,M)=>y.start-M.start);let v=0;for(let y=1;y<g.length;y++){const M=g[v],A=g[y];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++v,g[v]=A)}g.length=v+1;for(let y=0,M=g.length;y<M;y++){const A=g[y];r.bufferSubData(p,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var pE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mE=`#ifdef USE_ALPHAHASH
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
#endif`,gE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_E=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SE=`#ifdef USE_AOMAP
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
#endif`,yE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ME=`#ifdef USE_BATCHING
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
#endif`,bE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RE=`#ifdef USE_IRIDESCENCE
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
#endif`,CE=`#ifdef USE_BUMPMAP
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
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,UE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,OE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,PE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,FE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,IE=`#define PI 3.141592653589793
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
} // validated`,BE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zE=`vec3 transformedNormal = objectNormal;
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
#endif`,HE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jE="gl_FragColor = linearToOutputTexel( gl_FragColor );",XE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WE=`#ifdef USE_ENVMAP
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
#endif`,qE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,YE=`#ifdef USE_ENVMAP
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
#endif`,ZE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KE=`#ifdef USE_ENVMAP
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
#endif`,QE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$E=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t1=`#ifdef USE_GRADIENTMAP
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
}`,n1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s1=`uniform bool receiveShadow;
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
#endif`,r1=`#ifdef USE_ENVMAP
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
#endif`,o1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f1=`PhysicalMaterial material;
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
#endif`,d1=`uniform sampler2D dfgLUT;
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
}`,h1=`
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
#endif`,p1=`#if defined( RE_IndirectDiffuse )
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
#endif`,m1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,v1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,S1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,M1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,b1=`#if defined( USE_POINTS_UV )
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
#endif`,E1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
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
#endif`,N1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,U1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,L1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F1=`#ifdef USE_NORMALMAP
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
#endif`,I1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,k1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,J1=`float getShadowMask() {
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
}`,$1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eT=`#ifdef USE_SKINNING
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
#endif`,tT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nT=`#ifdef USE_SKINNING
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
#endif`,iT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oT=`#ifdef USE_TRANSMISSION
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
#endif`,lT=`#ifdef USE_TRANSMISSION
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
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pT=`uniform sampler2D t2D;
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
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_T=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`#include <common>
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
}`,ST=`#if DEPTH_PACKING == 3200
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
}`,yT=`#define DISTANCE
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
}`,MT=`#define DISTANCE
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
}`,bT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ET=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`uniform float scale;
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
}`,AT=`uniform vec3 diffuse;
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
}`,RT=`#include <common>
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
}`,CT=`uniform vec3 diffuse;
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
}`,wT=`#define LAMBERT
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
}`,NT=`#define LAMBERT
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
}`,DT=`#define MATCAP
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
}`,UT=`#define MATCAP
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
}`,LT=`#define NORMAL
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
}`,OT=`#define NORMAL
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
}`,PT=`#define PHONG
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
}`,FT=`#define PHONG
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
}`,IT=`#define STANDARD
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
}`,BT=`#define STANDARD
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
}`,zT=`#define TOON
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
}`,HT=`#define TOON
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
}`,GT=`uniform float size;
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
}`,VT=`uniform vec3 diffuse;
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
}`,kT=`#include <common>
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
}`,jT=`uniform vec3 color;
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
}`,XT=`uniform float rotation;
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
}`,WT=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:pE,alphahash_pars_fragment:mE,alphamap_fragment:gE,alphamap_pars_fragment:vE,alphatest_fragment:_E,alphatest_pars_fragment:xE,aomap_fragment:SE,aomap_pars_fragment:yE,batching_pars_vertex:ME,batching_vertex:bE,begin_vertex:EE,beginnormal_vertex:TE,bsdfs:AE,iridescence_fragment:RE,bumpmap_pars_fragment:CE,clipping_planes_fragment:wE,clipping_planes_pars_fragment:NE,clipping_planes_pars_vertex:DE,clipping_planes_vertex:UE,color_fragment:LE,color_pars_fragment:OE,color_pars_vertex:PE,color_vertex:FE,common:IE,cube_uv_reflection_fragment:BE,defaultnormal_vertex:zE,displacementmap_pars_vertex:HE,displacementmap_vertex:GE,emissivemap_fragment:VE,emissivemap_pars_fragment:kE,colorspace_fragment:jE,colorspace_pars_fragment:XE,envmap_fragment:WE,envmap_common_pars_fragment:qE,envmap_pars_fragment:YE,envmap_pars_vertex:ZE,envmap_physical_pars_fragment:r1,envmap_vertex:KE,fog_vertex:QE,fog_pars_vertex:JE,fog_fragment:$E,fog_pars_fragment:e1,gradientmap_pars_fragment:t1,lightmap_pars_fragment:n1,lights_lambert_fragment:i1,lights_lambert_pars_fragment:a1,lights_pars_begin:s1,lights_toon_fragment:o1,lights_toon_pars_fragment:l1,lights_phong_fragment:c1,lights_phong_pars_fragment:u1,lights_physical_fragment:f1,lights_physical_pars_fragment:d1,lights_fragment_begin:h1,lights_fragment_maps:p1,lights_fragment_end:m1,logdepthbuf_fragment:g1,logdepthbuf_pars_fragment:v1,logdepthbuf_pars_vertex:_1,logdepthbuf_vertex:x1,map_fragment:S1,map_pars_fragment:y1,map_particle_fragment:M1,map_particle_pars_fragment:b1,metalnessmap_fragment:E1,metalnessmap_pars_fragment:T1,morphinstance_vertex:A1,morphcolor_vertex:R1,morphnormal_vertex:C1,morphtarget_pars_vertex:w1,morphtarget_vertex:N1,normal_fragment_begin:D1,normal_fragment_maps:U1,normal_pars_fragment:L1,normal_pars_vertex:O1,normal_vertex:P1,normalmap_pars_fragment:F1,clearcoat_normal_fragment_begin:I1,clearcoat_normal_fragment_maps:B1,clearcoat_pars_fragment:z1,iridescence_pars_fragment:H1,opaque_fragment:G1,packing:V1,premultiplied_alpha_fragment:k1,project_vertex:j1,dithering_fragment:X1,dithering_pars_fragment:W1,roughnessmap_fragment:q1,roughnessmap_pars_fragment:Y1,shadowmap_pars_fragment:Z1,shadowmap_pars_vertex:K1,shadowmap_vertex:Q1,shadowmask_pars_fragment:J1,skinbase_vertex:$1,skinning_pars_vertex:eT,skinning_vertex:tT,skinnormal_vertex:nT,specularmap_fragment:iT,specularmap_pars_fragment:aT,tonemapping_fragment:sT,tonemapping_pars_fragment:rT,transmission_fragment:oT,transmission_pars_fragment:lT,uv_pars_fragment:cT,uv_pars_vertex:uT,uv_vertex:fT,worldpos_vertex:dT,background_vert:hT,background_frag:pT,backgroundCube_vert:mT,backgroundCube_frag:gT,cube_vert:vT,cube_frag:_T,depth_vert:xT,depth_frag:ST,distance_vert:yT,distance_frag:MT,equirect_vert:bT,equirect_frag:ET,linedashed_vert:TT,linedashed_frag:AT,meshbasic_vert:RT,meshbasic_frag:CT,meshlambert_vert:wT,meshlambert_frag:NT,meshmatcap_vert:DT,meshmatcap_frag:UT,meshnormal_vert:LT,meshnormal_frag:OT,meshphong_vert:PT,meshphong_frag:FT,meshphysical_vert:IT,meshphysical_frag:BT,meshtoon_vert:zT,meshtoon_frag:HT,points_vert:GT,points_frag:VT,shadow_vert:kT,shadow_frag:jT,sprite_vert:XT,sprite_frag:WT},We={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},ki={basic:{uniforms:kn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:kn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:kn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:kn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:kn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new bt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:kn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:kn([We.points,We.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:kn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:kn([We.common,We.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:kn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:kn([We.sprite,We.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:kn([We.common,We.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:kn([We.lights,We.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};ki.physical={uniforms:kn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const uu={r:0,b:0,g:0},Is=new Ca,qT=new Jt;function YT(r,e,i,s,l,c){const f=new bt(0);let h=l===!0?0:1,m,p,x=null,g=0,v=null;function y(R){let w=R.isScene===!0?R.background:null;if(w&&w.isTexture){const N=R.backgroundBlurriness>0;w=e.get(w,N)}return w}function M(R){let w=!1;const N=y(R);N===null?_(f,h):N&&N.isColor&&(_(N,1),w=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function A(R,w){const N=y(w);N&&(N.isCubeTexture||N.mapping===Nu)?(p===void 0&&(p=new Qi(new Sl(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:eo(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(H,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),Is.copy(w.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),p.material.uniforms.envMap.value=N,p.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(qT.makeRotationFromEuler(Is)),p.material.toneMapped=Ot.getTransfer(N.colorSpace)!==jt,(x!==N||g!==N.version||v!==r.toneMapping)&&(p.material.needsUpdate=!0,x=N,g=N.version,v=r.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Qi(new yl(2,2),new Ji({name:"BackgroundMaterial",uniforms:eo(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:hs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.toneMapped=Ot.getTransfer(N.colorSpace)!==jt,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(x!==N||g!==N.version||v!==r.toneMapping)&&(m.material.needsUpdate=!0,x=N,g=N.version,v=r.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function _(R,w){R.getRGB(uu,Nx(r)),i.buffers.color.setClear(uu.r,uu.g,uu.b,w,c)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,w=1){f.set(R),h=w,_(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,_(f,h)},render:M,addToRenderList:A,dispose:S}}function ZT(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,f=!1;function h(G,q,K,Y,ae){let D=!1;const z=g(G,Y,K,q);c!==z&&(c=z,p(c.object)),D=y(G,Y,K,ae),D&&M(G,Y,K,ae),ae!==null&&e.update(ae,r.ELEMENT_ARRAY_BUFFER),(D||f)&&(f=!1,N(G,q,K,Y),ae!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function m(){return r.createVertexArray()}function p(G){return r.bindVertexArray(G)}function x(G){return r.deleteVertexArray(G)}function g(G,q,K,Y){const ae=Y.wireframe===!0;let D=s[q.id];D===void 0&&(D={},s[q.id]=D);const z=G.isInstancedMesh===!0?G.id:0;let te=D[z];te===void 0&&(te={},D[z]=te);let le=te[K.id];le===void 0&&(le={},te[K.id]=le);let _e=le[ae];return _e===void 0&&(_e=v(m()),le[ae]=_e),_e}function v(G){const q=[],K=[],Y=[];for(let ae=0;ae<i;ae++)q[ae]=0,K[ae]=0,Y[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:K,attributeDivisors:Y,object:G,attributes:{},index:null}}function y(G,q,K,Y){const ae=c.attributes,D=q.attributes;let z=0;const te=K.getAttributes();for(const le in te)if(te[le].location>=0){const I=ae[le];let j=D[le];if(j===void 0&&(le==="instanceMatrix"&&G.instanceMatrix&&(j=G.instanceMatrix),le==="instanceColor"&&G.instanceColor&&(j=G.instanceColor)),I===void 0||I.attribute!==j||j&&I.data!==j.data)return!0;z++}return c.attributesNum!==z||c.index!==Y}function M(G,q,K,Y){const ae={},D=q.attributes;let z=0;const te=K.getAttributes();for(const le in te)if(te[le].location>=0){let I=D[le];I===void 0&&(le==="instanceMatrix"&&G.instanceMatrix&&(I=G.instanceMatrix),le==="instanceColor"&&G.instanceColor&&(I=G.instanceColor));const j={};j.attribute=I,I&&I.data&&(j.data=I.data),ae[le]=j,z++}c.attributes=ae,c.attributesNum=z,c.index=Y}function A(){const G=c.newAttributes;for(let q=0,K=G.length;q<K;q++)G[q]=0}function _(G){S(G,0)}function S(G,q){const K=c.newAttributes,Y=c.enabledAttributes,ae=c.attributeDivisors;K[G]=1,Y[G]===0&&(r.enableVertexAttribArray(G),Y[G]=1),ae[G]!==q&&(r.vertexAttribDivisor(G,q),ae[G]=q)}function R(){const G=c.newAttributes,q=c.enabledAttributes;for(let K=0,Y=q.length;K<Y;K++)q[K]!==G[K]&&(r.disableVertexAttribArray(K),q[K]=0)}function w(G,q,K,Y,ae,D,z){z===!0?r.vertexAttribIPointer(G,q,K,ae,D):r.vertexAttribPointer(G,q,K,Y,ae,D)}function N(G,q,K,Y){A();const ae=Y.attributes,D=K.getAttributes(),z=q.defaultAttributeValues;for(const te in D){const le=D[te];if(le.location>=0){let _e=ae[te];if(_e===void 0&&(te==="instanceMatrix"&&G.instanceMatrix&&(_e=G.instanceMatrix),te==="instanceColor"&&G.instanceColor&&(_e=G.instanceColor)),_e!==void 0){const I=_e.normalized,j=_e.itemSize,ne=e.get(_e);if(ne===void 0)continue;const W=ne.buffer,re=ne.type,X=ne.bytesPerElement,ee=re===r.INT||re===r.UNSIGNED_INT||_e.gpuType===wp;if(_e.isInterleavedBufferAttribute){const ge=_e.data,Q=ge.stride,be=_e.offset;if(ge.isInstancedInterleavedBuffer){for(let Re=0;Re<le.locationSize;Re++)S(le.location+Re,ge.meshPerAttribute);G.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Re=0;Re<le.locationSize;Re++)_(le.location+Re);r.bindBuffer(r.ARRAY_BUFFER,W);for(let Re=0;Re<le.locationSize;Re++)w(le.location+Re,j/le.locationSize,re,I,Q*X,(be+j/le.locationSize*Re)*X,ee)}else{if(_e.isInstancedBufferAttribute){for(let ge=0;ge<le.locationSize;ge++)S(le.location+ge,_e.meshPerAttribute);G.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ge=0;ge<le.locationSize;ge++)_(le.location+ge);r.bindBuffer(r.ARRAY_BUFFER,W);for(let ge=0;ge<le.locationSize;ge++)w(le.location+ge,j/le.locationSize,re,I,j*X,j/le.locationSize*ge*X,ee)}}else if(z!==void 0){const I=z[te];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(le.location,I);break;case 3:r.vertexAttrib3fv(le.location,I);break;case 4:r.vertexAttrib4fv(le.location,I);break;default:r.vertexAttrib1fv(le.location,I)}}}}R()}function H(){O();for(const G in s){const q=s[G];for(const K in q){const Y=q[K];for(const ae in Y){const D=Y[ae];for(const z in D)x(D[z].object),delete D[z];delete Y[ae]}}delete s[G]}}function L(G){if(s[G.id]===void 0)return;const q=s[G.id];for(const K in q){const Y=q[K];for(const ae in Y){const D=Y[ae];for(const z in D)x(D[z].object),delete D[z];delete Y[ae]}}delete s[G.id]}function F(G){for(const q in s){const K=s[q];for(const Y in K){const ae=K[Y];if(ae[G.id]===void 0)continue;const D=ae[G.id];for(const z in D)x(D[z].object),delete D[z];delete ae[G.id]}}}function T(G){for(const q in s){const K=s[q],Y=G.isInstancedMesh===!0?G.id:0,ae=K[Y];if(ae!==void 0){for(const D in ae){const z=ae[D];for(const te in z)x(z[te].object),delete z[te];delete ae[D]}delete K[Y],Object.keys(K).length===0&&delete s[q]}}}function O(){J(),f=!0,c!==l&&(c=l,p(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:O,resetDefaultState:J,dispose:H,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:_,disableUnusedAttributes:R}}function KT(r,e,i){let s;function l(p){s=p}function c(p,x){r.drawArrays(s,p,x),i.update(x,s,1)}function f(p,x,g){g!==0&&(r.drawArraysInstanced(s,p,x,g),i.update(x,s,g))}function h(p,x,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,g);let y=0;for(let M=0;M<g;M++)y+=x[M];i.update(y,s,1)}function m(p,x,g,v){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<p.length;M++)f(p[M],x[M],v[M]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,x,0,v,0,g);let M=0;for(let A=0;A<g;A++)M+=x[A]*v[A];i.update(M,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function QT(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Oi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const T=F===Aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ci&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Wi&&!T)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(dt("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=r.getParameter(r.MAX_SAMPLES),L=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:R,maxVaryings:w,maxFragmentUniforms:N,maxSamples:H,samples:L}}function JT(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new zs,h=new yt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||s!==0||l;return l=v,s=g.length,y},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){i=x(g,v,0)},this.setState=function(g,v,y){const M=g.clippingPlanes,A=g.clipIntersection,_=g.clipShadows,S=r.get(g);if(!l||M===null||M.length===0||c&&!_)c?x(null):p();else{const R=c?0:s,w=R*4;let N=S.clippingState||null;m.value=N,N=x(M,v,w,y);for(let H=0;H!==w;++H)N[H]=i[H];S.clippingState=N,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(g,v,y,M){const A=g!==null?g.length:0;let _=null;if(A!==0){if(_=m.value,M!==!0||_===null){const S=y+A*4,R=v.matrixWorldInverse;h.getNormalMatrix(R),(_===null||_.length<S)&&(_=new Float32Array(S));for(let w=0,N=y;w!==A;++w,N+=4)f.copy(g[w]).applyMatrix4(R,h),f.normal.toArray(_,N),_[N+3]=f.constant}m.value=_,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,_}}const us=4,y_=[.125,.215,.35,.446,.526,.582],Gs=20,$T=256,ol=new Lx,M_=new bt;let yh=null,Mh=0,bh=0,Eh=!1;const eA=new fe;class b_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=eA}=c;yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=A_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yh,Mh,bh),this._renderer.xr.enabled=Eh,e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===js||e.mapping===Qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:Aa,format:Oi,colorSpace:$r,depthBuffer:!1},l=E_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tA(c)),this._blurMaterial=iA(c,e,i),this._ggxMaterial=nA(c,e,i)}return l}_compileMaterial(e){const i=new Qi(new Fn,e);this._renderer.compile(i,ol)}_sceneToCubeUV(e,i,s,l,c){const m=new li(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(M_),g.toneMapping=Yi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qi(new Sl,new Hp({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,_=A.material;let S=!1;const R=e.background;R?R.isColor&&(_.color.copy(R),e.background=null,S=!0):(_.color.copy(M_),S=!0);for(let w=0;w<6;w++){const N=w%3;N===0?(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[w],c.y,c.z)):N===1?(m.up.set(0,0,p[w]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[w],c.z)):(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[w]));const H=this._cubeSize;Xr(l,N*H,w>2?H:0,H,H),g.setRenderTarget(l),S&&g.render(A,m),g.render(e,m)}g.toneMapping=y,g.autoClear=v,e.background=R}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===js||e.mapping===Qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=A_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=T_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Xr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,ol)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),v=0+p*1.25,y=g*v,{_lodMax:M}=this,A=this._sizeLods[s],_=3*A*(s>M-us?s-M+us:0),S=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=M-i,Xr(c,_,S,3*A,2*A),l.setRenderTarget(c),l.render(h,ol),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-s,Xr(e,_,S,3*A,2*A),l.setRenderTarget(e),l.render(h,ol)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=p;const v=p.uniforms,y=this._sizeLods[s]-1,M=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Gs-1),A=c/M,_=isFinite(c)?1+Math.floor(x*A):Gs;_>Gs&&dt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Gs}`);const S=[];let R=0;for(let F=0;F<Gs;++F){const T=F/A,O=Math.exp(-T*T/2);S.push(O),F===0?R+=O:F<_&&(R+=2*O)}for(let F=0;F<S.length;F++)S[F]=S[F]/R;v.envMap.value=e.texture,v.samples.value=_,v.weights.value=S,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:w}=this;v.dTheta.value=M,v.mipInt.value=w-s;const N=this._sizeLods[l],H=3*N*(l>w-us?l-w+us:0),L=4*(this._cubeSize-N);Xr(i,H,L,3*N,2*N),m.setRenderTarget(i),m.render(g,ol)}}function tA(r){const e=[],i=[],s=[];let l=r;const c=r-us+1+y_.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>r-us?m=y_[f-r+us-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,g=1+p,v=[x,x,g,x,g,g,x,x,g,g,x,g],y=6,M=6,A=3,_=2,S=1,R=new Float32Array(A*M*y),w=new Float32Array(_*M*y),N=new Float32Array(S*M*y);for(let L=0;L<y;L++){const F=L%3*2/3-1,T=L>2?0:-1,O=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];R.set(O,A*M*L),w.set(v,_*M*L);const J=[L,L,L,L,L,L];N.set(J,S*M*L)}const H=new Fn;H.setAttribute("position",new Ln(R,A)),H.setAttribute("uv",new Ln(w,_)),H.setAttribute("faceIndex",new Ln(N,S)),s.push(new Qi(H,null)),l>us&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function E_(r,e,i){const s=new Zi(r,e,i);return s.texture.mapping=Nu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Xr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function nA(r,e,i){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$T,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Du(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function iA(r,e,i){const s=new Float32Array(Gs),l=new fe(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Du(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function T_(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function A_(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Du(){return`

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
	`}class Px extends Zi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Cx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Sl(5,5,5),c=new Ji({name:"CubemapFromEquirect",uniforms:eo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Ea});c.uniforms.tEquirect.value=i;const f=new Qi(l,c),h=i.minFilter;return i.minFilter===Vs&&(i.minFilter=On),new lE(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function aA(r){let e=new WeakMap,i=new WeakMap,s=null;function l(v,y=!1){return v==null?null:y?f(v):c(v)}function c(v){if(v&&v.isTexture){const y=v.mapping;if(y===Xd||y===Wd)if(e.has(v)){const M=e.get(v).texture;return h(M,v.mapping)}else{const M=v.image;if(M&&M.height>0){const A=new Px(M.height);return A.fromEquirectangularTexture(r,v),e.set(v,A),v.addEventListener("dispose",p),h(A.texture,v.mapping)}else return null}}return v}function f(v){if(v&&v.isTexture){const y=v.mapping,M=y===Xd||y===Wd,A=y===js||y===Qr;if(M||A){let _=i.get(v);const S=_!==void 0?_.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return s===null&&(s=new b_(r)),_=M?s.fromEquirectangular(v,_):s.fromCubemap(v,_),_.texture.pmremVersion=v.pmremVersion,i.set(v,_),_.texture;if(_!==void 0)return _.texture;{const R=v.image;return M&&R&&R.height>0||A&&R&&m(R)?(s===null&&(s=new b_(r)),_=M?s.fromEquirectangular(v):s.fromCubemap(v),_.texture.pmremVersion=v.pmremVersion,i.set(v,_),v.addEventListener("dispose",x),_.texture):null}}}return v}function h(v,y){return y===Xd?v.mapping=js:y===Wd&&(v.mapping=Qr),v}function m(v){let y=0;const M=6;for(let A=0;A<M;A++)v[A]!==void 0&&y++;return y===M}function p(v){const y=v.target;y.removeEventListener("dispose",p);const M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function x(v){const y=v.target;y.removeEventListener("dispose",x);const M=i.get(y);M!==void 0&&(i.delete(y),M.dispose())}function g(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:g}}function sA(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Mu("WebGLRenderer: "+s+" extension not supported."),l}}}function rA(r,e,i,s){const l={},c=new WeakMap;function f(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",f),delete l[v.id];const y=c.get(v);y&&(e.remove(y),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(g,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(g){const v=g.attributes;for(const y in v)e.update(v[y],r.ARRAY_BUFFER)}function p(g){const v=[],y=g.index,M=g.attributes.position;let A=0;if(M===void 0)return;if(y!==null){const R=y.array;A=y.version;for(let w=0,N=R.length;w<N;w+=3){const H=R[w+0],L=R[w+1],F=R[w+2];v.push(H,L,L,F,F,H)}}else{const R=M.array;A=M.version;for(let w=0,N=R.length/3-1;w<N;w+=3){const H=w+0,L=w+1,F=w+2;v.push(H,L,L,F,F,H)}}const _=new(M.count>=65535?Ex:bx)(v,1);_.version=A;const S=c.get(g);S&&e.remove(S),c.set(g,_)}function x(g){const v=c.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:x}}function oA(r,e,i){let s;function l(v){s=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function m(v,y){r.drawElements(s,y,c,v*f),i.update(y,s,1)}function p(v,y,M){M!==0&&(r.drawElementsInstanced(s,y,c,v*f,M),i.update(y,s,M))}function x(v,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,v,0,M);let _=0;for(let S=0;S<M;S++)_+=y[S];i.update(_,s,1)}function g(v,y,M,A){if(M===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<v.length;S++)p(v[S]/f,y[S],A[S]);else{_.multiDrawElementsInstancedWEBGL(s,y,0,c,v,0,A,0,M);let S=0;for(let R=0;R<M;R++)S+=y[R]*A[R];i.update(S,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function lA(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:Lt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function cA(r,e,i){const s=new WeakMap,l=new rn;function c(f,h,m){const p=f.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=x!==void 0?x.length:0;let v=s.get(h);if(v===void 0||v.count!==g){let O=function(){F.dispose(),s.delete(h),h.removeEventListener("dispose",O)};v!==void 0&&v.texture.dispose();const y=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let w=0;y===!0&&(w=1),M===!0&&(w=2),A===!0&&(w=3);let N=h.attributes.position.count*w,H=1;N>e.maxTextureSize&&(H=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const L=new Float32Array(N*H*4*g),F=new Sx(L,N,H,g);F.type=Wi,F.needsUpdate=!0;const T=w*4;for(let J=0;J<g;J++){const G=_[J],q=S[J],K=R[J],Y=N*H*4*J;for(let ae=0;ae<G.count;ae++){const D=ae*T;y===!0&&(l.fromBufferAttribute(G,ae),L[Y+D+0]=l.x,L[Y+D+1]=l.y,L[Y+D+2]=l.z,L[Y+D+3]=0),M===!0&&(l.fromBufferAttribute(q,ae),L[Y+D+4]=l.x,L[Y+D+5]=l.y,L[Y+D+6]=l.z,L[Y+D+7]=0),A===!0&&(l.fromBufferAttribute(K,ae),L[Y+D+8]=l.x,L[Y+D+9]=l.y,L[Y+D+10]=l.z,L[Y+D+11]=K.itemSize===4?l.w:1)}}v={count:g,texture:F,size:new At(N,H)},s.set(h,v),h.addEventListener("dispose",O)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let y=0;for(let A=0;A<p.length;A++)y+=p[A];const M=h.morphTargetsRelative?1:1-y;m.getUniforms().setValue(r,"morphTargetBaseInfluence",M),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function uA(r,e,i,s,l){let c=new WeakMap;function f(p){const x=l.render.frame,g=p.geometry,v=e.get(p,g);if(c.get(v)!==x&&(e.update(v),c.set(v,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==x&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,x))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==x&&(y.update(),c.set(y,x))}return v}function h(){c=new WeakMap}function m(p){const x=p.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:f,dispose:h}}const fA={[sx]:"LINEAR_TONE_MAPPING",[rx]:"REINHARD_TONE_MAPPING",[ox]:"CINEON_TONE_MAPPING",[Cp]:"ACES_FILMIC_TONE_MAPPING",[cx]:"AGX_TONE_MAPPING",[ux]:"NEUTRAL_TONE_MAPPING",[lx]:"CUSTOM_TONE_MAPPING"};function dA(r,e,i,s,l){const c=new Zi(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Zi(e,i,{type:Aa,depthBuffer:!1,stencilBuffer:!1}),h=new Fn;h.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ui([0,2,0,0,2,0],2));const m=new tE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Qi(h,m),x=new Lx(-1,1,1,-1,0,1);let g=null,v=null,y=!1,M,A=null,_=[],S=!1;this.setSize=function(R,w){c.setSize(R,w),f.setSize(R,w);for(let N=0;N<_.length;N++){const H=_[N];H.setSize&&H.setSize(R,w)}},this.setEffects=function(R){_=R,S=_.length>0&&_[0].isRenderPass===!0;const w=c.width,N=c.height;for(let H=0;H<_.length;H++){const L=_[H];L.setSize&&L.setSize(w,N)}},this.begin=function(R,w){if(y||R.toneMapping===Yi&&_.length===0)return!1;if(A=w,w!==null){const N=w.width,H=w.height;(c.width!==N||c.height!==H)&&this.setSize(N,H)}return S===!1&&R.setRenderTarget(c),M=R.toneMapping,R.toneMapping=Yi,!0},this.hasRenderPass=function(){return S},this.end=function(R,w){R.toneMapping=M,y=!0;let N=c,H=f;for(let L=0;L<_.length;L++){const F=_[L];if(F.enabled!==!1&&(F.render(R,H,N,w),F.needsSwap!==!1)){const T=N;N=H,H=T}}if(g!==R.outputColorSpace||v!==R.toneMapping){g=R.outputColorSpace,v=R.toneMapping,m.defines={},Ot.getTransfer(g)===jt&&(m.defines.SRGB_TRANSFER="");const L=fA[v];L&&(m.defines[L]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,R.setRenderTarget(A),R.render(p,x),A=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const Fx=new Pn,bp=new vl(1,1),Ix=new Sx,Bx=new Cb,zx=new Cx,R_=[],C_=[],w_=new Float32Array(16),N_=new Float32Array(9),D_=new Float32Array(4);function ao(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=R_[l];if(c===void 0&&(c=new Float32Array(l),R_[l]=c),e!==0){s.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,r[f].toArray(c,h)}return c}function Sn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function yn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Uu(r,e){let i=C_[e];i===void 0&&(i=new Int32Array(e),C_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function hA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function pA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;r.uniform2fv(this.addr,e),yn(i,e)}}function mA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Sn(i,e))return;r.uniform3fv(this.addr,e),yn(i,e)}}function gA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;r.uniform4fv(this.addr,e),yn(i,e)}}function vA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,s))return;D_.set(s),r.uniformMatrix2fv(this.addr,!1,D_),yn(i,s)}}function _A(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,s))return;N_.set(s),r.uniformMatrix3fv(this.addr,!1,N_),yn(i,s)}}function xA(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Sn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(Sn(i,s))return;w_.set(s),r.uniformMatrix4fv(this.addr,!1,w_),yn(i,s)}}function SA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function yA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;r.uniform2iv(this.addr,e),yn(i,e)}}function MA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;r.uniform3iv(this.addr,e),yn(i,e)}}function bA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;r.uniform4iv(this.addr,e),yn(i,e)}}function EA(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function TA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Sn(i,e))return;r.uniform2uiv(this.addr,e),yn(i,e)}}function AA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Sn(i,e))return;r.uniform3uiv(this.addr,e),yn(i,e)}}function RA(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Sn(i,e))return;r.uniform4uiv(this.addr,e),yn(i,e)}}function CA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(bp.compareFunction=i.isReversedDepthBuffer()?Fp:Pp,c=bp):c=Fx,i.setTexture2D(e||c,l)}function wA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Bx,l)}function NA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||zx,l)}function DA(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Ix,l)}function UA(r){switch(r){case 5126:return hA;case 35664:return pA;case 35665:return mA;case 35666:return gA;case 35674:return vA;case 35675:return _A;case 35676:return xA;case 5124:case 35670:return SA;case 35667:case 35671:return yA;case 35668:case 35672:return MA;case 35669:case 35673:return bA;case 5125:return EA;case 36294:return TA;case 36295:return AA;case 36296:return RA;case 35678:case 36198:case 36298:case 36306:case 35682:return CA;case 35679:case 36299:case 36307:return wA;case 35680:case 36300:case 36308:case 36293:return NA;case 36289:case 36303:case 36311:case 36292:return DA}}function LA(r,e){r.uniform1fv(this.addr,e)}function OA(r,e){const i=ao(e,this.size,2);r.uniform2fv(this.addr,i)}function PA(r,e){const i=ao(e,this.size,3);r.uniform3fv(this.addr,i)}function FA(r,e){const i=ao(e,this.size,4);r.uniform4fv(this.addr,i)}function IA(r,e){const i=ao(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function BA(r,e){const i=ao(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function zA(r,e){const i=ao(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function HA(r,e){r.uniform1iv(this.addr,e)}function GA(r,e){r.uniform2iv(this.addr,e)}function VA(r,e){r.uniform3iv(this.addr,e)}function kA(r,e){r.uniform4iv(this.addr,e)}function jA(r,e){r.uniform1uiv(this.addr,e)}function XA(r,e){r.uniform2uiv(this.addr,e)}function WA(r,e){r.uniform3uiv(this.addr,e)}function qA(r,e){r.uniform4uiv(this.addr,e)}function YA(r,e,i){const s=this.cache,l=e.length,c=Uu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=bp:f=Fx;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function ZA(r,e,i){const s=this.cache,l=e.length,c=Uu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Bx,c[f])}function KA(r,e,i){const s=this.cache,l=e.length,c=Uu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||zx,c[f])}function QA(r,e,i){const s=this.cache,l=e.length,c=Uu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Ix,c[f])}function JA(r){switch(r){case 5126:return LA;case 35664:return OA;case 35665:return PA;case 35666:return FA;case 35674:return IA;case 35675:return BA;case 35676:return zA;case 5124:case 35670:return HA;case 35667:case 35671:return GA;case 35668:case 35672:return VA;case 35669:case 35673:return kA;case 5125:return jA;case 36294:return XA;case 36295:return WA;case 36296:return qA;case 35678:case 36198:case 36298:case 36306:case 35682:return YA;case 35679:case 36299:case 36307:return ZA;case 35680:case 36300:case 36308:case 36293:return KA;case 36289:case 36303:case 36311:case 36292:return QA}}class $A{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=UA(i.type)}}class eR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=JA(i.type)}}class tR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const Th=/(\w+)(\])?(\[|\.)?/g;function U_(r,e){r.seq.push(e),r.map[e.id]=e}function nR(r,e,i){const s=r.name,l=s.length;for(Th.lastIndex=0;;){const c=Th.exec(s),f=Th.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){U_(i,p===void 0?new $A(h,r,e):new eR(h,r,e));break}else{let g=i.map[h];g===void 0&&(g=new tR(h),U_(i,g)),i=g}}}class _u{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);nR(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function L_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const iR=37297;let aR=0;function sR(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const O_=new yt;function rR(r){Ot._getMatrix(O_,Ot.workingColorSpace,r);const e=`mat3( ${O_.elements.map(i=>i.toFixed(4))} )`;switch(Ot.getTransfer(r)){case xu:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function P_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+sR(r.getShaderSource(e),h)}else return c}function oR(r,e){const i=rR(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const lR={[sx]:"Linear",[rx]:"Reinhard",[ox]:"Cineon",[Cp]:"ACESFilmic",[cx]:"AgX",[ux]:"Neutral",[lx]:"Custom"};function cR(r,e){const i=lR[e];return i===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const fu=new fe;function uR(){Ot.getLuminanceCoefficients(fu);const r=fu.x.toFixed(4),e=fu.y.toFixed(4),i=fu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hl).join(`
`)}function dR(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function hR(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:h}}return i}function hl(r){return r!==""}function F_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function I_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ep(r){return r.replace(pR,gR)}const mR=new Map;function gR(r,e){let i=Mt[e];if(i===void 0){const s=mR.get(e);if(s!==void 0)i=Mt[s],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Ep(i)}const vR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B_(r){return r.replace(vR,_R)}function _R(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function z_(r){let e=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const xR={[hu]:"SHADOWMAP_TYPE_PCF",[dl]:"SHADOWMAP_TYPE_VSM"};function SR(r){return xR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yR={[js]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE",[Nu]:"ENVMAP_TYPE_CUBE_UV"};function MR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":yR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const bR={[Qr]:"ENVMAP_MODE_REFRACTION"};function ER(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":bR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TR={[ax]:"ENVMAP_BLENDING_MULTIPLY",[rb]:"ENVMAP_BLENDING_MIX",[ob]:"ENVMAP_BLENDING_ADD"};function AR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":TR[r.combine]||"ENVMAP_BLENDING_NONE"}function RR(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function CR(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=SR(i),p=MR(i),x=ER(i),g=AR(i),v=RR(i),y=fR(i),M=dR(c),A=l.createProgram();let _,S,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(hl).join(`
`),_.length>0&&(_+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(hl).join(`
`),S.length>0&&(S+=`
`)):(_=[z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hl).join(`
`),S=[z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?Mt.tonemapping_pars_fragment:"",i.toneMapping!==Yi?cR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,oR("linearToOutputTexel",i.outputColorSpace),uR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(hl).join(`
`)),f=Ep(f),f=F_(f,i),f=I_(f,i),h=Ep(h),h=F_(h,i),h=I_(h,i),f=B_(f),h=B_(h),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,S=["#define varying in",i.glslVersion===Xv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Xv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const w=R+_+f,N=R+S+h,H=L_(l,l.VERTEX_SHADER,w),L=L_(l,l.FRAGMENT_SHADER,N);l.attachShader(A,H),l.attachShader(A,L),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function F(G){if(r.debug.checkShaderErrors){const q=l.getProgramInfoLog(A)||"",K=l.getShaderInfoLog(H)||"",Y=l.getShaderInfoLog(L)||"",ae=q.trim(),D=K.trim(),z=Y.trim();let te=!0,le=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(te=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,H,L);else{const _e=P_(l,H,"vertex"),I=P_(l,L,"fragment");Lt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ae+`
`+_e+`
`+I)}else ae!==""?dt("WebGLProgram: Program Info Log:",ae):(D===""||z==="")&&(le=!1);le&&(G.diagnostics={runnable:te,programLog:ae,vertexShader:{log:D,prefix:_},fragmentShader:{log:z,prefix:S}})}l.deleteShader(H),l.deleteShader(L),T=new _u(l,A),O=hR(l,A)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let O;this.getAttributes=function(){return O===void 0&&F(this),O};let J=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=l.getProgramParameter(A,iR)),J},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=aR++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=L,this}let wR=0;class NR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new DR(e),i.set(e,s)),s}}class DR{constructor(e){this.id=wR++,this.code=e,this.usedTimes=0}}function UR(r,e,i,s,l,c){const f=new yx,h=new NR,m=new Set,p=[],x=new Map,g=s.logarithmicDepthBuffer;let v=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return m.add(T),T===0?"uv":`uv${T}`}function A(T,O,J,G,q){const K=G.fog,Y=q.geometry,ae=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,D=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,z=e.get(T.envMap||ae,D),te=z&&z.mapping===Nu?z.image.height:null,le=y[T.type];T.precision!==null&&(v=s.getMaxPrecision(T.precision),v!==T.precision&&dt("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const _e=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,I=_e!==void 0?_e.length:0;let j=0;Y.morphAttributes.position!==void 0&&(j=1),Y.morphAttributes.normal!==void 0&&(j=2),Y.morphAttributes.color!==void 0&&(j=3);let ne,W,re,X;if(le){const Ut=ki[le];ne=Ut.vertexShader,W=Ut.fragmentShader}else ne=T.vertexShader,W=T.fragmentShader,h.update(T),re=h.getVertexShaderID(T),X=h.getFragmentShaderID(T);const ee=r.getRenderTarget(),ge=r.state.buffers.depth.getReversed(),Q=q.isInstancedMesh===!0,be=q.isBatchedMesh===!0,Re=!!T.map,ze=!!T.matcap,Ue=!!z,we=!!T.aoMap,Be=!!T.lightMap,Fe=!!T.bumpMap,qe=!!T.normalMap,k=!!T.displacementMap,st=!!T.emissiveMap,rt=!!T.metalnessMap,lt=!!T.roughnessMap,He=T.anisotropy>0,B=T.clearcoat>0,C=T.dispersion>0,$=T.iridescence>0,ye=T.sheen>0,Te=T.transmission>0,ve=He&&!!T.anisotropyMap,je=B&&!!T.clearcoatMap,Oe=B&&!!T.clearcoatNormalMap,Ye=B&&!!T.clearcoatRoughnessMap,nt=$&&!!T.iridescenceMap,Ne=$&&!!T.iridescenceThicknessMap,De=ye&&!!T.sheenColorMap,Xe=ye&&!!T.sheenRoughnessMap,Ve=!!T.specularMap,Ze=!!T.specularColorMap,_t=!!T.specularIntensityMap,oe=Te&&!!T.transmissionMap,Ie=Te&&!!T.thicknessMap,Pe=!!T.gradientMap,Ke=!!T.alphaMap,Le=T.alphaTest>0,Me=!!T.alphaHash,Je=!!T.extensions;let ht=Yi;T.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(ht=r.toneMapping);const Gt={shaderID:le,shaderType:T.type,shaderName:T.name,vertexShader:ne,fragmentShader:W,defines:T.defines,customVertexShaderID:re,customFragmentShaderID:X,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:be,batchingColor:be&&q._colorsTexture!==null,instancing:Q,instancingColor:Q&&q.instanceColor!==null,instancingMorph:Q&&q.morphTexture!==null,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:$r,alphaToCoverage:!!T.alphaToCoverage,map:Re,matcap:ze,envMap:Ue,envMapMode:Ue&&z.mapping,envMapCubeUVHeight:te,aoMap:we,lightMap:Be,bumpMap:Fe,normalMap:qe,displacementMap:k,emissiveMap:st,normalMapObjectSpace:qe&&T.normalMapType===fb,normalMapTangentSpace:qe&&T.normalMapType===ub,metalnessMap:rt,roughnessMap:lt,anisotropy:He,anisotropyMap:ve,clearcoat:B,clearcoatMap:je,clearcoatNormalMap:Oe,clearcoatRoughnessMap:Ye,dispersion:C,iridescence:$,iridescenceMap:nt,iridescenceThicknessMap:Ne,sheen:ye,sheenColorMap:De,sheenRoughnessMap:Xe,specularMap:Ve,specularColorMap:Ze,specularIntensityMap:_t,transmission:Te,transmissionMap:oe,thicknessMap:Ie,gradientMap:Pe,opaque:T.transparent===!1&&T.blending===Yr&&T.alphaToCoverage===!1,alphaMap:Ke,alphaTest:Le,alphaHash:Me,combine:T.combine,mapUv:Re&&M(T.map.channel),aoMapUv:we&&M(T.aoMap.channel),lightMapUv:Be&&M(T.lightMap.channel),bumpMapUv:Fe&&M(T.bumpMap.channel),normalMapUv:qe&&M(T.normalMap.channel),displacementMapUv:k&&M(T.displacementMap.channel),emissiveMapUv:st&&M(T.emissiveMap.channel),metalnessMapUv:rt&&M(T.metalnessMap.channel),roughnessMapUv:lt&&M(T.roughnessMap.channel),anisotropyMapUv:ve&&M(T.anisotropyMap.channel),clearcoatMapUv:je&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&M(T.sheenRoughnessMap.channel),specularMapUv:Ve&&M(T.specularMap.channel),specularColorMapUv:Ze&&M(T.specularColorMap.channel),specularIntensityMapUv:_t&&M(T.specularIntensityMap.channel),transmissionMapUv:oe&&M(T.transmissionMap.channel),thicknessMapUv:Ie&&M(T.thicknessMap.channel),alphaMapUv:Ke&&M(T.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(qe||He),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Y.attributes.uv&&(Re||Ke),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Y.attributes.normal===void 0&&qe===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ge,skinning:q.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:j,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&J.length>0,shadowMapType:r.shadowMap.type,toneMapping:ht,decodeVideoTexture:Re&&T.map.isVideoTexture===!0&&Ot.getTransfer(T.map.colorSpace)===jt,decodeVideoTextureEmissive:st&&T.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(T.emissiveMap.colorSpace)===jt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ji,flipSided:T.side===Kn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Je&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&T.extensions.multiDraw===!0||be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Gt.vertexUv1s=m.has(1),Gt.vertexUv2s=m.has(2),Gt.vertexUv3s=m.has(3),m.clear(),Gt}function _(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const J in T.defines)O.push(J),O.push(T.defines[J]);return T.isRawShaderMaterial===!1&&(S(O,T),R(O,T),O.push(r.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function S(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function R(T,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),T.push(f.mask)}function w(T){const O=y[T.type];let J;if(O){const G=ki[O];J=Jb.clone(G.uniforms)}else J=T.uniforms;return J}function N(T,O){let J=x.get(O);return J!==void 0?++J.usedTimes:(J=new CR(r,O,T,l),p.push(J),x.set(O,J)),J}function H(T){if(--T.usedTimes===0){const O=p.indexOf(T);p[O]=p[p.length-1],p.pop(),x.delete(T.cacheKey),T.destroy()}}function L(T){h.remove(T)}function F(){h.dispose()}return{getParameters:A,getProgramCacheKey:_,getUniforms:w,acquireProgram:N,releaseProgram:H,releaseShaderCache:L,programs:p,dispose:F}}function LR(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function OR(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function H_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function G_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function h(v,y,M,A,_,S){let R=r[e];return R===void 0?(R={id:v.id,object:v,geometry:y,material:M,materialVariant:f(v),groupOrder:A,renderOrder:v.renderOrder,z:_,group:S},r[e]=R):(R.id=v.id,R.object=v,R.geometry=y,R.material=M,R.materialVariant=f(v),R.groupOrder=A,R.renderOrder=v.renderOrder,R.z=_,R.group=S),e++,R}function m(v,y,M,A,_,S){const R=h(v,y,M,A,_,S);M.transmission>0?s.push(R):M.transparent===!0?l.push(R):i.push(R)}function p(v,y,M,A,_,S){const R=h(v,y,M,A,_,S);M.transmission>0?s.unshift(R):M.transparent===!0?l.unshift(R):i.unshift(R)}function x(v,y){i.length>1&&i.sort(v||OR),s.length>1&&s.sort(y||H_),l.length>1&&l.sort(y||H_)}function g(){for(let v=e,y=r.length;v<y;v++){const M=r[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:g,sort:x}}function PR(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new G_,r.set(s,[f])):l>=c.length?(f=new G_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function FR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new fe,color:new bt};break;case"SpotLight":i={position:new fe,direction:new fe,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new fe,color:new bt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new fe,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":i={color:new bt,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return r[e.id]=i,i}}}function IR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let BR=0;function zR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function HR(r){const e=new FR,i=IR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new fe);const l=new fe,c=new Jt,f=new Jt;function h(p){let x=0,g=0,v=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let y=0,M=0,A=0,_=0,S=0,R=0,w=0,N=0,H=0,L=0,F=0;p.sort(zR);for(let O=0,J=p.length;O<J;O++){const G=p[O],q=G.color,K=G.intensity,Y=G.distance;let ae=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Jr?ae=G.shadow.map.texture:ae=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)x+=q.r*K,g+=q.g*K,v+=q.b*K;else if(G.isLightProbe){for(let D=0;D<9;D++)s.probe[D].addScaledVector(G.sh.coefficients[D],K);F++}else if(G.isDirectionalLight){const D=e.get(G);if(D.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const z=G.shadow,te=i.get(G);te.shadowIntensity=z.intensity,te.shadowBias=z.bias,te.shadowNormalBias=z.normalBias,te.shadowRadius=z.radius,te.shadowMapSize=z.mapSize,s.directionalShadow[y]=te,s.directionalShadowMap[y]=ae,s.directionalShadowMatrix[y]=G.shadow.matrix,R++}s.directional[y]=D,y++}else if(G.isSpotLight){const D=e.get(G);D.position.setFromMatrixPosition(G.matrixWorld),D.color.copy(q).multiplyScalar(K),D.distance=Y,D.coneCos=Math.cos(G.angle),D.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),D.decay=G.decay,s.spot[A]=D;const z=G.shadow;if(G.map&&(s.spotLightMap[H]=G.map,H++,z.updateMatrices(G),G.castShadow&&L++),s.spotLightMatrix[A]=z.matrix,G.castShadow){const te=i.get(G);te.shadowIntensity=z.intensity,te.shadowBias=z.bias,te.shadowNormalBias=z.normalBias,te.shadowRadius=z.radius,te.shadowMapSize=z.mapSize,s.spotShadow[A]=te,s.spotShadowMap[A]=ae,N++}A++}else if(G.isRectAreaLight){const D=e.get(G);D.color.copy(q).multiplyScalar(K),D.halfWidth.set(G.width*.5,0,0),D.halfHeight.set(0,G.height*.5,0),s.rectArea[_]=D,_++}else if(G.isPointLight){const D=e.get(G);if(D.color.copy(G.color).multiplyScalar(G.intensity),D.distance=G.distance,D.decay=G.decay,G.castShadow){const z=G.shadow,te=i.get(G);te.shadowIntensity=z.intensity,te.shadowBias=z.bias,te.shadowNormalBias=z.normalBias,te.shadowRadius=z.radius,te.shadowMapSize=z.mapSize,te.shadowCameraNear=z.camera.near,te.shadowCameraFar=z.camera.far,s.pointShadow[M]=te,s.pointShadowMap[M]=ae,s.pointShadowMatrix[M]=G.shadow.matrix,w++}s.point[M]=D,M++}else if(G.isHemisphereLight){const D=e.get(G);D.skyColor.copy(G.color).multiplyScalar(K),D.groundColor.copy(G.groundColor).multiplyScalar(K),s.hemi[S]=D,S++}}_>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=We.LTC_FLOAT_1,s.rectAreaLTC2=We.LTC_FLOAT_2):(s.rectAreaLTC1=We.LTC_HALF_1,s.rectAreaLTC2=We.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=g,s.ambient[2]=v;const T=s.hash;(T.directionalLength!==y||T.pointLength!==M||T.spotLength!==A||T.rectAreaLength!==_||T.hemiLength!==S||T.numDirectionalShadows!==R||T.numPointShadows!==w||T.numSpotShadows!==N||T.numSpotMaps!==H||T.numLightProbes!==F)&&(s.directional.length=y,s.spot.length=A,s.rectArea.length=_,s.point.length=M,s.hemi.length=S,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=N+H-L,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=F,T.directionalLength=y,T.pointLength=M,T.spotLength=A,T.rectAreaLength=_,T.hemiLength=S,T.numDirectionalShadows=R,T.numPointShadows=w,T.numSpotShadows=N,T.numSpotMaps=H,T.numLightProbes=F,s.version=BR++)}function m(p,x){let g=0,v=0,y=0,M=0,A=0;const _=x.matrixWorldInverse;for(let S=0,R=p.length;S<R;S++){const w=p[S];if(w.isDirectionalLight){const N=s.directional[g];N.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(_),g++}else if(w.isSpotLight){const N=s.spot[y];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(_),N.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(_),y++}else if(w.isRectAreaLight){const N=s.rectArea[M];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(_),f.identity(),c.copy(w.matrixWorld),c.premultiply(_),f.extractRotation(c),N.halfWidth.set(w.width*.5,0,0),N.halfHeight.set(0,w.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),M++}else if(w.isPointLight){const N=s.point[v];N.position.setFromMatrixPosition(w.matrixWorld),N.position.applyMatrix4(_),v++}else if(w.isHemisphereLight){const N=s.hemi[A];N.direction.setFromMatrixPosition(w.matrixWorld),N.direction.transformDirection(_),A++}}}return{setup:h,setupView:m,state:s}}function V_(r){const e=new HR(r),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function f(x){s.push(x)}function h(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function GR(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new V_(r),e.set(l,[h])):c>=f.length?(h=new V_(r),f.push(h)):h=f[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const VR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kR=`uniform sampler2D shadow_pass;
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
}`,jR=[new fe(1,0,0),new fe(-1,0,0),new fe(0,1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1)],XR=[new fe(0,-1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1),new fe(0,-1,0),new fe(0,-1,0)],k_=new Jt,ll=new fe,Ah=new fe;function WR(r,e,i){let s=new Gp;const l=new At,c=new At,f=new rn,h=new nE,m=new iE,p={},x=i.maxTextureSize,g={[hs]:Kn,[Kn]:hs,[ji]:ji},v=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:VR,fragmentShader:kR}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const M=new Fn;M.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Qi(M,v),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hu;let S=this.type;this.render=function(L,F,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||L.length===0)return;this.type===GM&&(dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=hu);const O=r.getRenderTarget(),J=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),q=r.state;q.setBlending(Ea),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const K=S!==this.type;K&&F.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(ae=>ae.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,ae=L.length;Y<ae;Y++){const D=L[Y],z=D.shadow;if(z===void 0){dt("WebGLShadowMap:",D,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const te=z.getFrameExtents();l.multiply(te),c.copy(z.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/te.x),l.x=c.x*te.x,z.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/te.y),l.y=c.y*te.y,z.mapSize.y=c.y));const le=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=le,z.map===null||K===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===dl){if(D.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Zi(l.x,l.y,{format:Jr,type:Aa,minFilter:On,magFilter:On,generateMipmaps:!1}),z.map.texture.name=D.name+".shadowMap",z.map.depthTexture=new vl(l.x,l.y,Wi),z.map.depthTexture.name=D.name+".shadowMapDepth",z.map.depthTexture.format=Ra,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Cn,z.map.depthTexture.magFilter=Cn}else D.isPointLight?(z.map=new Px(l.x),z.map.depthTexture=new Kb(l.x,Ki)):(z.map=new Zi(l.x,l.y),z.map.depthTexture=new vl(l.x,l.y,Ki)),z.map.depthTexture.name=D.name+".shadowMap",z.map.depthTexture.format=Ra,this.type===hu?(z.map.depthTexture.compareFunction=le?Fp:Pp,z.map.depthTexture.minFilter=On,z.map.depthTexture.magFilter=On):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Cn,z.map.depthTexture.magFilter=Cn);z.camera.updateProjectionMatrix()}const _e=z.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<_e;I++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,I),r.clear();else{I===0&&(r.setRenderTarget(z.map),r.clear());const j=z.getViewport(I);f.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),q.viewport(f)}if(D.isPointLight){const j=z.camera,ne=z.matrix,W=D.distance||j.far;W!==j.far&&(j.far=W,j.updateProjectionMatrix()),ll.setFromMatrixPosition(D.matrixWorld),j.position.copy(ll),Ah.copy(j.position),Ah.add(jR[I]),j.up.copy(XR[I]),j.lookAt(Ah),j.updateMatrixWorld(),ne.makeTranslation(-ll.x,-ll.y,-ll.z),k_.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),z._frustum.setFromProjectionMatrix(k_,j.coordinateSystem,j.reversedDepth)}else z.updateMatrices(D);s=z.getFrustum(),N(F,T,z.camera,D,this.type)}z.isPointLightShadow!==!0&&this.type===dl&&R(z,T),z.needsUpdate=!1}S=this.type,_.needsUpdate=!1,r.setRenderTarget(O,J,G)};function R(L,F){const T=e.update(A);v.defines.VSM_SAMPLES!==L.blurSamples&&(v.defines.VSM_SAMPLES=L.blurSamples,y.defines.VSM_SAMPLES=L.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Zi(l.x,l.y,{format:Jr,type:Aa})),v.uniforms.shadow_pass.value=L.map.depthTexture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(F,null,T,v,A,null),y.uniforms.shadow_pass.value=L.mapPass.texture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(F,null,T,y,A,null)}function w(L,F,T,O){let J=null;const G=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)J=G;else if(J=T.isPointLight===!0?m:h,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const q=J.uuid,K=F.uuid;let Y=p[q];Y===void 0&&(Y={},p[q]=Y);let ae=Y[K];ae===void 0&&(ae=J.clone(),Y[K]=ae,F.addEventListener("dispose",H)),J=ae}if(J.visible=F.visible,J.wireframe=F.wireframe,O===dl?J.side=F.shadowSide!==null?F.shadowSide:F.side:J.side=F.shadowSide!==null?F.shadowSide:g[F.side],J.alphaMap=F.alphaMap,J.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,J.map=F.map,J.clipShadows=F.clipShadows,J.clippingPlanes=F.clippingPlanes,J.clipIntersection=F.clipIntersection,J.displacementMap=F.displacementMap,J.displacementScale=F.displacementScale,J.displacementBias=F.displacementBias,J.wireframeLinewidth=F.wireframeLinewidth,J.linewidth=F.linewidth,T.isPointLight===!0&&J.isMeshDistanceMaterial===!0){const q=r.properties.get(J);q.light=T}return J}function N(L,F,T,O,J){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&J===dl)&&(!L.frustumCulled||s.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const K=e.update(L),Y=L.material;if(Array.isArray(Y)){const ae=K.groups;for(let D=0,z=ae.length;D<z;D++){const te=ae[D],le=Y[te.materialIndex];if(le&&le.visible){const _e=w(L,le,O,J);L.onBeforeShadow(r,L,F,T,K,_e,te),r.renderBufferDirect(T,null,K,_e,L,te),L.onAfterShadow(r,L,F,T,K,_e,te)}}}else if(Y.visible){const ae=w(L,Y,O,J);L.onBeforeShadow(r,L,F,T,K,ae,null),r.renderBufferDirect(T,null,K,ae,L,null),L.onAfterShadow(r,L,F,T,K,ae,null)}}const q=L.children;for(let K=0,Y=q.length;K<Y;K++)N(q[K],F,T,O,J)}function H(L){L.target.removeEventListener("dispose",H);for(const T in p){const O=p[T],J=L.target.uuid;J in O&&(O[J].dispose(),delete O[J])}}}function qR(r,e){function i(){let oe=!1;const Ie=new rn;let Pe=null;const Ke=new rn(0,0,0,0);return{setMask:function(Le){Pe!==Le&&!oe&&(r.colorMask(Le,Le,Le,Le),Pe=Le)},setLocked:function(Le){oe=Le},setClear:function(Le,Me,Je,ht,Gt){Gt===!0&&(Le*=ht,Me*=ht,Je*=ht),Ie.set(Le,Me,Je,ht),Ke.equals(Ie)===!1&&(r.clearColor(Le,Me,Je,ht),Ke.copy(Ie))},reset:function(){oe=!1,Pe=null,Ke.set(-1,0,0,0)}}}function s(){let oe=!1,Ie=!1,Pe=null,Ke=null,Le=null;return{setReversed:function(Me){if(Ie!==Me){const Je=e.get("EXT_clip_control");Me?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Ie=Me;const ht=Le;Le=null,this.setClear(ht)}},getReversed:function(){return Ie},setTest:function(Me){Me?ee(r.DEPTH_TEST):ge(r.DEPTH_TEST)},setMask:function(Me){Pe!==Me&&!oe&&(r.depthMask(Me),Pe=Me)},setFunc:function(Me){if(Ie&&(Me=yb[Me]),Ke!==Me){switch(Me){case Uh:r.depthFunc(r.NEVER);break;case Lh:r.depthFunc(r.ALWAYS);break;case Oh:r.depthFunc(r.LESS);break;case Kr:r.depthFunc(r.LEQUAL);break;case Ph:r.depthFunc(r.EQUAL);break;case Fh:r.depthFunc(r.GEQUAL);break;case Ih:r.depthFunc(r.GREATER);break;case Bh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ke=Me}},setLocked:function(Me){oe=Me},setClear:function(Me){Le!==Me&&(Le=Me,Ie&&(Me=1-Me),r.clearDepth(Me))},reset:function(){oe=!1,Pe=null,Ke=null,Le=null,Ie=!1}}}function l(){let oe=!1,Ie=null,Pe=null,Ke=null,Le=null,Me=null,Je=null,ht=null,Gt=null;return{setTest:function(Ut){oe||(Ut?ee(r.STENCIL_TEST):ge(r.STENCIL_TEST))},setMask:function(Ut){Ie!==Ut&&!oe&&(r.stencilMask(Ut),Ie=Ut)},setFunc:function(Ut,In,Mi){(Pe!==Ut||Ke!==In||Le!==Mi)&&(r.stencilFunc(Ut,In,Mi),Pe=Ut,Ke=In,Le=Mi)},setOp:function(Ut,In,Mi){(Me!==Ut||Je!==In||ht!==Mi)&&(r.stencilOp(Ut,In,Mi),Me=Ut,Je=In,ht=Mi)},setLocked:function(Ut){oe=Ut},setClear:function(Ut){Gt!==Ut&&(r.clearStencil(Ut),Gt=Ut)},reset:function(){oe=!1,Ie=null,Pe=null,Ke=null,Le=null,Me=null,Je=null,ht=null,Gt=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let x={},g={},v=new WeakMap,y=[],M=null,A=!1,_=null,S=null,R=null,w=null,N=null,H=null,L=null,F=new bt(0,0,0),T=0,O=!1,J=null,G=null,q=null,K=null,Y=null;const ae=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,z=0;const te=r.getParameter(r.VERSION);te.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(te)[1]),D=z>=1):te.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),D=z>=2);let le=null,_e={};const I=r.getParameter(r.SCISSOR_BOX),j=r.getParameter(r.VIEWPORT),ne=new rn().fromArray(I),W=new rn().fromArray(j);function re(oe,Ie,Pe,Ke){const Le=new Uint8Array(4),Me=r.createTexture();r.bindTexture(oe,Me),r.texParameteri(oe,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(oe,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Je=0;Je<Pe;Je++)oe===r.TEXTURE_3D||oe===r.TEXTURE_2D_ARRAY?r.texImage3D(Ie,0,r.RGBA,1,1,Ke,0,r.RGBA,r.UNSIGNED_BYTE,Le):r.texImage2D(Ie+Je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Le);return Me}const X={};X[r.TEXTURE_2D]=re(r.TEXTURE_2D,r.TEXTURE_2D,1),X[r.TEXTURE_CUBE_MAP]=re(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[r.TEXTURE_2D_ARRAY]=re(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),X[r.TEXTURE_3D]=re(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ee(r.DEPTH_TEST),f.setFunc(Kr),Fe(!1),qe(Hv),ee(r.CULL_FACE),we(Ea);function ee(oe){x[oe]!==!0&&(r.enable(oe),x[oe]=!0)}function ge(oe){x[oe]!==!1&&(r.disable(oe),x[oe]=!1)}function Q(oe,Ie){return g[oe]!==Ie?(r.bindFramebuffer(oe,Ie),g[oe]=Ie,oe===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ie),oe===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ie),!0):!1}function be(oe,Ie){let Pe=y,Ke=!1;if(oe){Pe=v.get(Ie),Pe===void 0&&(Pe=[],v.set(Ie,Pe));const Le=oe.textures;if(Pe.length!==Le.length||Pe[0]!==r.COLOR_ATTACHMENT0){for(let Me=0,Je=Le.length;Me<Je;Me++)Pe[Me]=r.COLOR_ATTACHMENT0+Me;Pe.length=Le.length,Ke=!0}}else Pe[0]!==r.BACK&&(Pe[0]=r.BACK,Ke=!0);Ke&&r.drawBuffers(Pe)}function Re(oe){return M!==oe?(r.useProgram(oe),M=oe,!0):!1}const ze={[Hs]:r.FUNC_ADD,[kM]:r.FUNC_SUBTRACT,[jM]:r.FUNC_REVERSE_SUBTRACT};ze[XM]=r.MIN,ze[WM]=r.MAX;const Ue={[qM]:r.ZERO,[YM]:r.ONE,[ZM]:r.SRC_COLOR,[Nh]:r.SRC_ALPHA,[tb]:r.SRC_ALPHA_SATURATE,[$M]:r.DST_COLOR,[QM]:r.DST_ALPHA,[KM]:r.ONE_MINUS_SRC_COLOR,[Dh]:r.ONE_MINUS_SRC_ALPHA,[eb]:r.ONE_MINUS_DST_COLOR,[JM]:r.ONE_MINUS_DST_ALPHA,[nb]:r.CONSTANT_COLOR,[ib]:r.ONE_MINUS_CONSTANT_COLOR,[ab]:r.CONSTANT_ALPHA,[sb]:r.ONE_MINUS_CONSTANT_ALPHA};function we(oe,Ie,Pe,Ke,Le,Me,Je,ht,Gt,Ut){if(oe===Ea){A===!0&&(ge(r.BLEND),A=!1);return}if(A===!1&&(ee(r.BLEND),A=!0),oe!==VM){if(oe!==_||Ut!==O){if((S!==Hs||N!==Hs)&&(r.blendEquation(r.FUNC_ADD),S=Hs,N=Hs),Ut)switch(oe){case Yr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gv:r.blendFunc(r.ONE,r.ONE);break;case Vv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case kv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Lt("WebGLState: Invalid blending: ",oe);break}else switch(oe){case Yr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Vv:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kv:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",oe);break}R=null,w=null,H=null,L=null,F.set(0,0,0),T=0,_=oe,O=Ut}return}Le=Le||Ie,Me=Me||Pe,Je=Je||Ke,(Ie!==S||Le!==N)&&(r.blendEquationSeparate(ze[Ie],ze[Le]),S=Ie,N=Le),(Pe!==R||Ke!==w||Me!==H||Je!==L)&&(r.blendFuncSeparate(Ue[Pe],Ue[Ke],Ue[Me],Ue[Je]),R=Pe,w=Ke,H=Me,L=Je),(ht.equals(F)===!1||Gt!==T)&&(r.blendColor(ht.r,ht.g,ht.b,Gt),F.copy(ht),T=Gt),_=oe,O=!1}function Be(oe,Ie){oe.side===ji?ge(r.CULL_FACE):ee(r.CULL_FACE);let Pe=oe.side===Kn;Ie&&(Pe=!Pe),Fe(Pe),oe.blending===Yr&&oe.transparent===!1?we(Ea):we(oe.blending,oe.blendEquation,oe.blendSrc,oe.blendDst,oe.blendEquationAlpha,oe.blendSrcAlpha,oe.blendDstAlpha,oe.blendColor,oe.blendAlpha,oe.premultipliedAlpha),f.setFunc(oe.depthFunc),f.setTest(oe.depthTest),f.setMask(oe.depthWrite),c.setMask(oe.colorWrite);const Ke=oe.stencilWrite;h.setTest(Ke),Ke&&(h.setMask(oe.stencilWriteMask),h.setFunc(oe.stencilFunc,oe.stencilRef,oe.stencilFuncMask),h.setOp(oe.stencilFail,oe.stencilZFail,oe.stencilZPass)),st(oe.polygonOffset,oe.polygonOffsetFactor,oe.polygonOffsetUnits),oe.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(oe){J!==oe&&(oe?r.frontFace(r.CW):r.frontFace(r.CCW),J=oe)}function qe(oe){oe!==zM?(ee(r.CULL_FACE),oe!==G&&(oe===Hv?r.cullFace(r.BACK):oe===HM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ge(r.CULL_FACE),G=oe}function k(oe){oe!==q&&(D&&r.lineWidth(oe),q=oe)}function st(oe,Ie,Pe){oe?(ee(r.POLYGON_OFFSET_FILL),(K!==Ie||Y!==Pe)&&(K=Ie,Y=Pe,f.getReversed()&&(Ie=-Ie),r.polygonOffset(Ie,Pe))):ge(r.POLYGON_OFFSET_FILL)}function rt(oe){oe?ee(r.SCISSOR_TEST):ge(r.SCISSOR_TEST)}function lt(oe){oe===void 0&&(oe=r.TEXTURE0+ae-1),le!==oe&&(r.activeTexture(oe),le=oe)}function He(oe,Ie,Pe){Pe===void 0&&(le===null?Pe=r.TEXTURE0+ae-1:Pe=le);let Ke=_e[Pe];Ke===void 0&&(Ke={type:void 0,texture:void 0},_e[Pe]=Ke),(Ke.type!==oe||Ke.texture!==Ie)&&(le!==Pe&&(r.activeTexture(Pe),le=Pe),r.bindTexture(oe,Ie||X[oe]),Ke.type=oe,Ke.texture=Ie)}function B(){const oe=_e[le];oe!==void 0&&oe.type!==void 0&&(r.bindTexture(oe.type,null),oe.type=void 0,oe.texture=void 0)}function C(){try{r.compressedTexImage2D(...arguments)}catch(oe){Lt("WebGLState:",oe)}}function $(){try{r.compressedTexImage3D(...arguments)}catch(oe){Lt("WebGLState:",oe)}}function ye(){try{r.texSubImage2D(...arguments)}catch(oe){Lt("WebGLState:",oe)}}function Te(){try{r.texSubImage3D(...arguments)}catch(oe){Lt("WebGLState:",oe)}}function ve(){try{r.compressedTexSubImage2D(...arguments)}catch(oe){Lt("WebGLState:",oe)}}function je(){try{r.compressedTexSubImage3D(...arguments)}catch(oe){Lt("WebGLState:",oe)}}function Oe(){try{r.texStorage2D(...arguments)}catch(oe){Lt("WebGLState:",oe)}}function Ye(){try{r.texStorage3D(...arguments)}catch(oe){Lt("WebGLState:",oe)}}function nt(){try{r.texImage2D(...arguments)}catch(oe){Lt("WebGLState:",oe)}}function Ne(){try{r.texImage3D(...arguments)}catch(oe){Lt("WebGLState:",oe)}}function De(oe){ne.equals(oe)===!1&&(r.scissor(oe.x,oe.y,oe.z,oe.w),ne.copy(oe))}function Xe(oe){W.equals(oe)===!1&&(r.viewport(oe.x,oe.y,oe.z,oe.w),W.copy(oe))}function Ve(oe,Ie){let Pe=p.get(Ie);Pe===void 0&&(Pe=new WeakMap,p.set(Ie,Pe));let Ke=Pe.get(oe);Ke===void 0&&(Ke=r.getUniformBlockIndex(Ie,oe.name),Pe.set(oe,Ke))}function Ze(oe,Ie){const Ke=p.get(Ie).get(oe);m.get(Ie)!==Ke&&(r.uniformBlockBinding(Ie,Ke,oe.__bindingPointIndex),m.set(Ie,Ke))}function _t(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),x={},le=null,_e={},g={},v=new WeakMap,y=[],M=null,A=!1,_=null,S=null,R=null,w=null,N=null,H=null,L=null,F=new bt(0,0,0),T=0,O=!1,J=null,G=null,q=null,K=null,Y=null,ne.set(0,0,r.canvas.width,r.canvas.height),W.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ee,disable:ge,bindFramebuffer:Q,drawBuffers:be,useProgram:Re,setBlending:we,setMaterial:Be,setFlipSided:Fe,setCullFace:qe,setLineWidth:k,setPolygonOffset:st,setScissorTest:rt,activeTexture:lt,bindTexture:He,unbindTexture:B,compressedTexImage2D:C,compressedTexImage3D:$,texImage2D:nt,texImage3D:Ne,updateUBOMapping:Ve,uniformBlockBinding:Ze,texStorage2D:Oe,texStorage3D:Ye,texSubImage2D:ye,texSubImage3D:Te,compressedTexSubImage2D:ve,compressedTexSubImage3D:je,scissor:De,viewport:Xe,reset:_t}}function YR(r,e,i,s,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new At,x=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(B,C){return y?new OffscreenCanvas(B,C):Su("canvas")}function A(B,C,$){let ye=1;const Te=He(B);if((Te.width>$||Te.height>$)&&(ye=$/Math.max(Te.width,Te.height)),ye<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const ve=Math.floor(ye*Te.width),je=Math.floor(ye*Te.height);g===void 0&&(g=M(ve,je));const Oe=C?M(ve,je):g;return Oe.width=ve,Oe.height=je,Oe.getContext("2d").drawImage(B,0,0,ve,je),dt("WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+ve+"x"+je+")."),Oe}else return"data"in B&&dt("WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),B;return B}function _(B){return B.generateMipmaps}function S(B){r.generateMipmap(B)}function R(B){return B.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?r.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(B,C,$,ye,Te=!1){if(B!==null){if(r[B]!==void 0)return r[B];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let ve=C;if(C===r.RED&&($===r.FLOAT&&(ve=r.R32F),$===r.HALF_FLOAT&&(ve=r.R16F),$===r.UNSIGNED_BYTE&&(ve=r.R8)),C===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(ve=r.R8UI),$===r.UNSIGNED_SHORT&&(ve=r.R16UI),$===r.UNSIGNED_INT&&(ve=r.R32UI),$===r.BYTE&&(ve=r.R8I),$===r.SHORT&&(ve=r.R16I),$===r.INT&&(ve=r.R32I)),C===r.RG&&($===r.FLOAT&&(ve=r.RG32F),$===r.HALF_FLOAT&&(ve=r.RG16F),$===r.UNSIGNED_BYTE&&(ve=r.RG8)),C===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(ve=r.RG8UI),$===r.UNSIGNED_SHORT&&(ve=r.RG16UI),$===r.UNSIGNED_INT&&(ve=r.RG32UI),$===r.BYTE&&(ve=r.RG8I),$===r.SHORT&&(ve=r.RG16I),$===r.INT&&(ve=r.RG32I)),C===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(ve=r.RGB8UI),$===r.UNSIGNED_SHORT&&(ve=r.RGB16UI),$===r.UNSIGNED_INT&&(ve=r.RGB32UI),$===r.BYTE&&(ve=r.RGB8I),$===r.SHORT&&(ve=r.RGB16I),$===r.INT&&(ve=r.RGB32I)),C===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(ve=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(ve=r.RGBA16UI),$===r.UNSIGNED_INT&&(ve=r.RGBA32UI),$===r.BYTE&&(ve=r.RGBA8I),$===r.SHORT&&(ve=r.RGBA16I),$===r.INT&&(ve=r.RGBA32I)),C===r.RGB&&($===r.UNSIGNED_INT_5_9_9_9_REV&&(ve=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(ve=r.R11F_G11F_B10F)),C===r.RGBA){const je=Te?xu:Ot.getTransfer(ye);$===r.FLOAT&&(ve=r.RGBA32F),$===r.HALF_FLOAT&&(ve=r.RGBA16F),$===r.UNSIGNED_BYTE&&(ve=je===jt?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(ve=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(ve=r.RGB5_A1)}return(ve===r.R16F||ve===r.R32F||ve===r.RG16F||ve===r.RG32F||ve===r.RGBA16F||ve===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function N(B,C){let $;return B?C===null||C===Ki||C===ml?$=r.DEPTH24_STENCIL8:C===Wi?$=r.DEPTH32F_STENCIL8:C===pl&&($=r.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Ki||C===ml?$=r.DEPTH_COMPONENT24:C===Wi?$=r.DEPTH_COMPONENT32F:C===pl&&($=r.DEPTH_COMPONENT16),$}function H(B,C){return _(B)===!0||B.isFramebufferTexture&&B.minFilter!==Cn&&B.minFilter!==On?Math.log2(Math.max(C.width,C.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?C.mipmaps.length:1}function L(B){const C=B.target;C.removeEventListener("dispose",L),T(C),C.isVideoTexture&&x.delete(C)}function F(B){const C=B.target;C.removeEventListener("dispose",F),J(C)}function T(B){const C=s.get(B);if(C.__webglInit===void 0)return;const $=B.source,ye=v.get($);if(ye){const Te=ye[C.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&O(B),Object.keys(ye).length===0&&v.delete($)}s.remove(B)}function O(B){const C=s.get(B);r.deleteTexture(C.__webglTexture);const $=B.source,ye=v.get($);delete ye[C.__cacheKey],f.memory.textures--}function J(B){const C=s.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),s.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(C.__webglFramebuffer[ye]))for(let Te=0;Te<C.__webglFramebuffer[ye].length;Te++)r.deleteFramebuffer(C.__webglFramebuffer[ye][Te]);else r.deleteFramebuffer(C.__webglFramebuffer[ye]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[ye])}else{if(Array.isArray(C.__webglFramebuffer))for(let ye=0;ye<C.__webglFramebuffer.length;ye++)r.deleteFramebuffer(C.__webglFramebuffer[ye]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ye=0;ye<C.__webglColorRenderbuffer.length;ye++)C.__webglColorRenderbuffer[ye]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[ye]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const $=B.textures;for(let ye=0,Te=$.length;ye<Te;ye++){const ve=s.get($[ye]);ve.__webglTexture&&(r.deleteTexture(ve.__webglTexture),f.memory.textures--),s.remove($[ye])}s.remove(B)}let G=0;function q(){G=0}function K(){const B=G;return B>=l.maxTextures&&dt("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),G+=1,B}function Y(B){const C=[];return C.push(B.wrapS),C.push(B.wrapT),C.push(B.wrapR||0),C.push(B.magFilter),C.push(B.minFilter),C.push(B.anisotropy),C.push(B.internalFormat),C.push(B.format),C.push(B.type),C.push(B.generateMipmaps),C.push(B.premultiplyAlpha),C.push(B.flipY),C.push(B.unpackAlignment),C.push(B.colorSpace),C.join()}function ae(B,C){const $=s.get(B);if(B.isVideoTexture&&rt(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&$.__version!==B.version){const ye=B.image;if(ye===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{X($,B,C);return}}else B.isExternalTexture&&($.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+C)}function D(B,C){const $=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&$.__version!==B.version){X($,B,C);return}else B.isExternalTexture&&($.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+C)}function z(B,C){const $=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&$.__version!==B.version){X($,B,C);return}i.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+C)}function te(B,C){const $=s.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&$.__version!==B.version){ee($,B,C);return}i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+C)}const le={[zh]:r.REPEAT,[ba]:r.CLAMP_TO_EDGE,[Hh]:r.MIRRORED_REPEAT},_e={[Cn]:r.NEAREST,[lb]:r.NEAREST_MIPMAP_NEAREST,[Fc]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[qd]:r.LINEAR_MIPMAP_NEAREST,[Vs]:r.LINEAR_MIPMAP_LINEAR},I={[db]:r.NEVER,[vb]:r.ALWAYS,[hb]:r.LESS,[Pp]:r.LEQUAL,[pb]:r.EQUAL,[Fp]:r.GEQUAL,[mb]:r.GREATER,[gb]:r.NOTEQUAL};function j(B,C){if(C.type===Wi&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===On||C.magFilter===qd||C.magFilter===Fc||C.magFilter===Vs||C.minFilter===On||C.minFilter===qd||C.minFilter===Fc||C.minFilter===Vs)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(B,r.TEXTURE_WRAP_S,le[C.wrapS]),r.texParameteri(B,r.TEXTURE_WRAP_T,le[C.wrapT]),(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)&&r.texParameteri(B,r.TEXTURE_WRAP_R,le[C.wrapR]),r.texParameteri(B,r.TEXTURE_MAG_FILTER,_e[C.magFilter]),r.texParameteri(B,r.TEXTURE_MIN_FILTER,_e[C.minFilter]),C.compareFunction&&(r.texParameteri(B,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(B,r.TEXTURE_COMPARE_FUNC,I[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Cn||C.minFilter!==Fc&&C.minFilter!==Vs||C.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||s.get(C).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(B,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,l.getMaxAnisotropy())),s.get(C).__currentAnisotropy=C.anisotropy}}}function ne(B,C){let $=!1;B.__webglInit===void 0&&(B.__webglInit=!0,C.addEventListener("dispose",L));const ye=C.source;let Te=v.get(ye);Te===void 0&&(Te={},v.set(ye,Te));const ve=Y(C);if(ve!==B.__cacheKey){Te[ve]===void 0&&(Te[ve]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,$=!0),Te[ve].usedTimes++;const je=Te[B.__cacheKey];je!==void 0&&(Te[B.__cacheKey].usedTimes--,je.usedTimes===0&&O(C)),B.__cacheKey=ve,B.__webglTexture=Te[ve].texture}return $}function W(B,C,$){return Math.floor(Math.floor(B/$)/C)}function re(B,C,$,ye){const ve=B.updateRanges;if(ve.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,C.width,C.height,$,ye,C.data);else{ve.sort((Ne,De)=>Ne.start-De.start);let je=0;for(let Ne=1;Ne<ve.length;Ne++){const De=ve[je],Xe=ve[Ne],Ve=De.start+De.count,Ze=W(Xe.start,C.width,4),_t=W(De.start,C.width,4);Xe.start<=Ve+1&&Ze===_t&&W(Xe.start+Xe.count-1,C.width,4)===Ze?De.count=Math.max(De.count,Xe.start+Xe.count-De.start):(++je,ve[je]=Xe)}ve.length=je+1;const Oe=r.getParameter(r.UNPACK_ROW_LENGTH),Ye=r.getParameter(r.UNPACK_SKIP_PIXELS),nt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,C.width);for(let Ne=0,De=ve.length;Ne<De;Ne++){const Xe=ve[Ne],Ve=Math.floor(Xe.start/4),Ze=Math.ceil(Xe.count/4),_t=Ve%C.width,oe=Math.floor(Ve/C.width),Ie=Ze,Pe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,_t),r.pixelStorei(r.UNPACK_SKIP_ROWS,oe),i.texSubImage2D(r.TEXTURE_2D,0,_t,oe,Ie,Pe,$,ye,C.data)}B.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Oe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,nt)}}function X(B,C,$){let ye=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ye=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ye=r.TEXTURE_3D);const Te=ne(B,C),ve=C.source;i.bindTexture(ye,B.__webglTexture,r.TEXTURE0+$);const je=s.get(ve);if(ve.version!==je.__version||Te===!0){i.activeTexture(r.TEXTURE0+$);const Oe=Ot.getPrimaries(Ot.workingColorSpace),Ye=C.colorSpace===cs?null:Ot.getPrimaries(C.colorSpace),nt=C.colorSpace===cs||Oe===Ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Ne=A(C.image,!1,l.maxTextureSize);Ne=lt(C,Ne);const De=c.convert(C.format,C.colorSpace),Xe=c.convert(C.type);let Ve=w(C.internalFormat,De,Xe,C.colorSpace,C.isVideoTexture);j(ye,C);let Ze;const _t=C.mipmaps,oe=C.isVideoTexture!==!0,Ie=je.__version===void 0||Te===!0,Pe=ve.dataReady,Ke=H(C,Ne);if(C.isDepthTexture)Ve=N(C.format===ks,C.type),Ie&&(oe?i.texStorage2D(r.TEXTURE_2D,1,Ve,Ne.width,Ne.height):i.texImage2D(r.TEXTURE_2D,0,Ve,Ne.width,Ne.height,0,De,Xe,null));else if(C.isDataTexture)if(_t.length>0){oe&&Ie&&i.texStorage2D(r.TEXTURE_2D,Ke,Ve,_t[0].width,_t[0].height);for(let Le=0,Me=_t.length;Le<Me;Le++)Ze=_t[Le],oe?Pe&&i.texSubImage2D(r.TEXTURE_2D,Le,0,0,Ze.width,Ze.height,De,Xe,Ze.data):i.texImage2D(r.TEXTURE_2D,Le,Ve,Ze.width,Ze.height,0,De,Xe,Ze.data);C.generateMipmaps=!1}else oe?(Ie&&i.texStorage2D(r.TEXTURE_2D,Ke,Ve,Ne.width,Ne.height),Pe&&re(C,Ne,De,Xe)):i.texImage2D(r.TEXTURE_2D,0,Ve,Ne.width,Ne.height,0,De,Xe,Ne.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){oe&&Ie&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ke,Ve,_t[0].width,_t[0].height,Ne.depth);for(let Le=0,Me=_t.length;Le<Me;Le++)if(Ze=_t[Le],C.format!==Oi)if(De!==null)if(oe){if(Pe)if(C.layerUpdates.size>0){const Je=S_(Ze.width,Ze.height,C.format,C.type);for(const ht of C.layerUpdates){const Gt=Ze.data.subarray(ht*Je/Ze.data.BYTES_PER_ELEMENT,(ht+1)*Je/Ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Le,0,0,ht,Ze.width,Ze.height,1,De,Gt)}C.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Le,0,0,0,Ze.width,Ze.height,Ne.depth,De,Ze.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Le,Ve,Ze.width,Ze.height,Ne.depth,0,Ze.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Pe&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Le,0,0,0,Ze.width,Ze.height,Ne.depth,De,Xe,Ze.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Le,Ve,Ze.width,Ze.height,Ne.depth,0,De,Xe,Ze.data)}else{oe&&Ie&&i.texStorage2D(r.TEXTURE_2D,Ke,Ve,_t[0].width,_t[0].height);for(let Le=0,Me=_t.length;Le<Me;Le++)Ze=_t[Le],C.format!==Oi?De!==null?oe?Pe&&i.compressedTexSubImage2D(r.TEXTURE_2D,Le,0,0,Ze.width,Ze.height,De,Ze.data):i.compressedTexImage2D(r.TEXTURE_2D,Le,Ve,Ze.width,Ze.height,0,Ze.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Pe&&i.texSubImage2D(r.TEXTURE_2D,Le,0,0,Ze.width,Ze.height,De,Xe,Ze.data):i.texImage2D(r.TEXTURE_2D,Le,Ve,Ze.width,Ze.height,0,De,Xe,Ze.data)}else if(C.isDataArrayTexture)if(oe){if(Ie&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ke,Ve,Ne.width,Ne.height,Ne.depth),Pe)if(C.layerUpdates.size>0){const Le=S_(Ne.width,Ne.height,C.format,C.type);for(const Me of C.layerUpdates){const Je=Ne.data.subarray(Me*Le/Ne.data.BYTES_PER_ELEMENT,(Me+1)*Le/Ne.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Me,Ne.width,Ne.height,1,De,Xe,Je)}C.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ne.width,Ne.height,Ne.depth,De,Xe,Ne.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ve,Ne.width,Ne.height,Ne.depth,0,De,Xe,Ne.data);else if(C.isData3DTexture)oe?(Ie&&i.texStorage3D(r.TEXTURE_3D,Ke,Ve,Ne.width,Ne.height,Ne.depth),Pe&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ne.width,Ne.height,Ne.depth,De,Xe,Ne.data)):i.texImage3D(r.TEXTURE_3D,0,Ve,Ne.width,Ne.height,Ne.depth,0,De,Xe,Ne.data);else if(C.isFramebufferTexture){if(Ie)if(oe)i.texStorage2D(r.TEXTURE_2D,Ke,Ve,Ne.width,Ne.height);else{let Le=Ne.width,Me=Ne.height;for(let Je=0;Je<Ke;Je++)i.texImage2D(r.TEXTURE_2D,Je,Ve,Le,Me,0,De,Xe,null),Le>>=1,Me>>=1}}else if(_t.length>0){if(oe&&Ie){const Le=He(_t[0]);i.texStorage2D(r.TEXTURE_2D,Ke,Ve,Le.width,Le.height)}for(let Le=0,Me=_t.length;Le<Me;Le++)Ze=_t[Le],oe?Pe&&i.texSubImage2D(r.TEXTURE_2D,Le,0,0,De,Xe,Ze):i.texImage2D(r.TEXTURE_2D,Le,Ve,De,Xe,Ze);C.generateMipmaps=!1}else if(oe){if(Ie){const Le=He(Ne);i.texStorage2D(r.TEXTURE_2D,Ke,Ve,Le.width,Le.height)}Pe&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,De,Xe,Ne)}else i.texImage2D(r.TEXTURE_2D,0,Ve,De,Xe,Ne);_(C)&&S(ye),je.__version=ve.version,C.onUpdate&&C.onUpdate(C)}B.__version=C.version}function ee(B,C,$){if(C.image.length!==6)return;const ye=ne(B,C),Te=C.source;i.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+$);const ve=s.get(Te);if(Te.version!==ve.__version||ye===!0){i.activeTexture(r.TEXTURE0+$);const je=Ot.getPrimaries(Ot.workingColorSpace),Oe=C.colorSpace===cs?null:Ot.getPrimaries(C.colorSpace),Ye=C.colorSpace===cs||je===Oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const nt=C.isCompressedTexture||C.image[0].isCompressedTexture,Ne=C.image[0]&&C.image[0].isDataTexture,De=[];for(let Me=0;Me<6;Me++)!nt&&!Ne?De[Me]=A(C.image[Me],!0,l.maxCubemapSize):De[Me]=Ne?C.image[Me].image:C.image[Me],De[Me]=lt(C,De[Me]);const Xe=De[0],Ve=c.convert(C.format,C.colorSpace),Ze=c.convert(C.type),_t=w(C.internalFormat,Ve,Ze,C.colorSpace),oe=C.isVideoTexture!==!0,Ie=ve.__version===void 0||ye===!0,Pe=Te.dataReady;let Ke=H(C,Xe);j(r.TEXTURE_CUBE_MAP,C);let Le;if(nt){oe&&Ie&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ke,_t,Xe.width,Xe.height);for(let Me=0;Me<6;Me++){Le=De[Me].mipmaps;for(let Je=0;Je<Le.length;Je++){const ht=Le[Je];C.format!==Oi?Ve!==null?oe?Pe&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,0,0,ht.width,ht.height,Ve,ht.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,_t,ht.width,ht.height,0,ht.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?Pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,0,0,ht.width,ht.height,Ve,Ze,ht.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je,_t,ht.width,ht.height,0,Ve,Ze,ht.data)}}}else{if(Le=C.mipmaps,oe&&Ie){Le.length>0&&Ke++;const Me=He(De[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ke,_t,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Ne){oe?Pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,De[Me].width,De[Me].height,Ve,Ze,De[Me].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,_t,De[Me].width,De[Me].height,0,Ve,Ze,De[Me].data);for(let Je=0;Je<Le.length;Je++){const Gt=Le[Je].image[Me].image;oe?Pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,0,0,Gt.width,Gt.height,Ve,Ze,Gt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,_t,Gt.width,Gt.height,0,Ve,Ze,Gt.data)}}else{oe?Pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ve,Ze,De[Me]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,_t,Ve,Ze,De[Me]);for(let Je=0;Je<Le.length;Je++){const ht=Le[Je];oe?Pe&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,0,0,Ve,Ze,ht.image[Me]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Je+1,_t,Ve,Ze,ht.image[Me])}}}_(C)&&S(r.TEXTURE_CUBE_MAP),ve.__version=Te.version,C.onUpdate&&C.onUpdate(C)}B.__version=C.version}function ge(B,C,$,ye,Te,ve){const je=c.convert($.format,$.colorSpace),Oe=c.convert($.type),Ye=w($.internalFormat,je,Oe,$.colorSpace),nt=s.get(C),Ne=s.get($);if(Ne.__renderTarget=C,!nt.__hasExternalTextures){const De=Math.max(1,C.width>>ve),Xe=Math.max(1,C.height>>ve);Te===r.TEXTURE_3D||Te===r.TEXTURE_2D_ARRAY?i.texImage3D(Te,ve,Ye,De,Xe,C.depth,0,je,Oe,null):i.texImage2D(Te,ve,Ye,De,Xe,0,je,Oe,null)}i.bindFramebuffer(r.FRAMEBUFFER,B),st(C)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,Te,Ne.__webglTexture,0,k(C)):(Te===r.TEXTURE_2D||Te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ye,Te,Ne.__webglTexture,ve),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Q(B,C,$){if(r.bindRenderbuffer(r.RENDERBUFFER,B),C.depthBuffer){const ye=C.depthTexture,Te=ye&&ye.isDepthTexture?ye.type:null,ve=N(C.stencilBuffer,Te),je=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;st(C)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(C),ve,C.width,C.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(C),ve,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,ve,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,je,r.RENDERBUFFER,B)}else{const ye=C.textures;for(let Te=0;Te<ye.length;Te++){const ve=ye[Te],je=c.convert(ve.format,ve.colorSpace),Oe=c.convert(ve.type),Ye=w(ve.internalFormat,je,Oe,ve.colorSpace);st(C)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(C),Ye,C.width,C.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(C),Ye,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,Ye,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(B,C,$){const ye=C.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,B),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Te=s.get(C.depthTexture);if(Te.__renderTarget=C,(!Te.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),ye){if(Te.__webglInit===void 0&&(Te.__webglInit=!0,C.depthTexture.addEventListener("dispose",L)),Te.__webglTexture===void 0){Te.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Te.__webglTexture),j(r.TEXTURE_CUBE_MAP,C.depthTexture);const nt=c.convert(C.depthTexture.format),Ne=c.convert(C.depthTexture.type);let De;C.depthTexture.format===Ra?De=r.DEPTH_COMPONENT24:C.depthTexture.format===ks&&(De=r.DEPTH24_STENCIL8);for(let Xe=0;Xe<6;Xe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,De,C.width,C.height,0,nt,Ne,null)}}else ae(C.depthTexture,0);const ve=Te.__webglTexture,je=k(C),Oe=ye?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,Ye=C.depthTexture.format===ks?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(C.depthTexture.format===Ra)st(C)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ye,Oe,ve,0,je):r.framebufferTexture2D(r.FRAMEBUFFER,Ye,Oe,ve,0);else if(C.depthTexture.format===ks)st(C)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ye,Oe,ve,0,je):r.framebufferTexture2D(r.FRAMEBUFFER,Ye,Oe,ve,0);else throw new Error("Unknown depthTexture format")}function Re(B){const C=s.get(B),$=B.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==B.depthTexture){const ye=B.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),ye){const Te=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,ye.removeEventListener("dispose",Te)};ye.addEventListener("dispose",Te),C.__depthDisposeCallback=Te}C.__boundDepthTexture=ye}if(B.depthTexture&&!C.__autoAllocateDepthBuffer)if($)for(let ye=0;ye<6;ye++)be(C.__webglFramebuffer[ye],B,ye);else{const ye=B.texture.mipmaps;ye&&ye.length>0?be(C.__webglFramebuffer[0],B,0):be(C.__webglFramebuffer,B,0)}else if($){C.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(i.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[ye]),C.__webglDepthbuffer[ye]===void 0)C.__webglDepthbuffer[ye]=r.createRenderbuffer(),Q(C.__webglDepthbuffer[ye],B,!1);else{const Te=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=C.__webglDepthbuffer[ye];r.bindRenderbuffer(r.RENDERBUFFER,ve),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,ve)}}else{const ye=B.texture.mipmaps;if(ye&&ye.length>0?i.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),Q(C.__webglDepthbuffer,B,!1);else{const Te=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ve),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,ve)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function ze(B,C,$){const ye=s.get(B);C!==void 0&&ge(ye.__webglFramebuffer,B,B.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&Re(B)}function Ue(B){const C=B.texture,$=s.get(B),ye=s.get(C);B.addEventListener("dispose",F);const Te=B.textures,ve=B.isWebGLCubeRenderTarget===!0,je=Te.length>1;if(je||(ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture()),ye.__version=C.version,f.memory.textures++),ve){$.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer[Oe]=[];for(let Ye=0;Ye<C.mipmaps.length;Ye++)$.__webglFramebuffer[Oe][Ye]=r.createFramebuffer()}else $.__webglFramebuffer[Oe]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){$.__webglFramebuffer=[];for(let Oe=0;Oe<C.mipmaps.length;Oe++)$.__webglFramebuffer[Oe]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(je)for(let Oe=0,Ye=Te.length;Oe<Ye;Oe++){const nt=s.get(Te[Oe]);nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture(),f.memory.textures++)}if(B.samples>0&&st(B)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Oe=0;Oe<Te.length;Oe++){const Ye=Te[Oe];$.__webglColorRenderbuffer[Oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[Oe]);const nt=c.convert(Ye.format,Ye.colorSpace),Ne=c.convert(Ye.type),De=w(Ye.internalFormat,nt,Ne,Ye.colorSpace,B.isXRRenderTarget===!0),Xe=k(B);r.renderbufferStorageMultisample(r.RENDERBUFFER,Xe,De,B.width,B.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,$.__webglColorRenderbuffer[Oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),B.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),Q($.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ve){i.bindTexture(r.TEXTURE_CUBE_MAP,ye.__webglTexture),j(r.TEXTURE_CUBE_MAP,C);for(let Oe=0;Oe<6;Oe++)if(C.mipmaps&&C.mipmaps.length>0)for(let Ye=0;Ye<C.mipmaps.length;Ye++)ge($.__webglFramebuffer[Oe][Ye],B,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Ye);else ge($.__webglFramebuffer[Oe],B,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);_(C)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(je){for(let Oe=0,Ye=Te.length;Oe<Ye;Oe++){const nt=Te[Oe],Ne=s.get(nt);let De=r.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(De=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(De,Ne.__webglTexture),j(De,nt),ge($.__webglFramebuffer,B,nt,r.COLOR_ATTACHMENT0+Oe,De,0),_(nt)&&S(De)}i.unbindTexture()}else{let Oe=r.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Oe=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Oe,ye.__webglTexture),j(Oe,C),C.mipmaps&&C.mipmaps.length>0)for(let Ye=0;Ye<C.mipmaps.length;Ye++)ge($.__webglFramebuffer[Ye],B,C,r.COLOR_ATTACHMENT0,Oe,Ye);else ge($.__webglFramebuffer,B,C,r.COLOR_ATTACHMENT0,Oe,0);_(C)&&S(Oe),i.unbindTexture()}B.depthBuffer&&Re(B)}function we(B){const C=B.textures;for(let $=0,ye=C.length;$<ye;$++){const Te=C[$];if(_(Te)){const ve=R(B),je=s.get(Te).__webglTexture;i.bindTexture(ve,je),S(ve),i.unbindTexture()}}}const Be=[],Fe=[];function qe(B){if(B.samples>0){if(st(B)===!1){const C=B.textures,$=B.width,ye=B.height;let Te=r.COLOR_BUFFER_BIT;const ve=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,je=s.get(B),Oe=C.length>1;if(Oe)for(let nt=0;nt<C.length;nt++)i.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,je.__webglMultisampledFramebuffer);const Ye=B.texture.mipmaps;Ye&&Ye.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglFramebuffer);for(let nt=0;nt<C.length;nt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Te|=r.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Te|=r.STENCIL_BUFFER_BIT)),Oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,je.__webglColorRenderbuffer[nt]);const Ne=s.get(C[nt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ne,0)}r.blitFramebuffer(0,0,$,ye,0,0,$,ye,Te,r.NEAREST),m===!0&&(Be.length=0,Fe.length=0,Be.push(r.COLOR_ATTACHMENT0+nt),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Be.push(ve),Fe.push(ve),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Fe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Be))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Oe)for(let nt=0;nt<C.length;nt++){i.bindFramebuffer(r.FRAMEBUFFER,je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,je.__webglColorRenderbuffer[nt]);const Ne=s.get(C[nt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.TEXTURE_2D,Ne,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,je.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&m){const C=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function k(B){return Math.min(l.maxSamples,B.samples)}function st(B){const C=s.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function rt(B){const C=f.render.frame;x.get(B)!==C&&(x.set(B,C),B.update())}function lt(B,C){const $=B.colorSpace,ye=B.format,Te=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||$!==$r&&$!==cs&&(Ot.getTransfer($)===jt?(ye!==Oi||Te!==ci)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",$)),C}function He(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(p.width=B.naturalWidth||B.width,p.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(p.width=B.displayWidth,p.height=B.displayHeight):(p.width=B.width,p.height=B.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=q,this.setTexture2D=ae,this.setTexture2DArray=D,this.setTexture3D=z,this.setTextureCube=te,this.rebindTextures=ze,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=st,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function ZR(r,e){function i(s,l=cs){let c;const f=Ot.getTransfer(l);if(s===ci)return r.UNSIGNED_BYTE;if(s===Np)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Dp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===px)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===mx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===dx)return r.BYTE;if(s===hx)return r.SHORT;if(s===pl)return r.UNSIGNED_SHORT;if(s===wp)return r.INT;if(s===Ki)return r.UNSIGNED_INT;if(s===Wi)return r.FLOAT;if(s===Aa)return r.HALF_FLOAT;if(s===gx)return r.ALPHA;if(s===vx)return r.RGB;if(s===Oi)return r.RGBA;if(s===Ra)return r.DEPTH_COMPONENT;if(s===ks)return r.DEPTH_STENCIL;if(s===_x)return r.RED;if(s===Up)return r.RED_INTEGER;if(s===Jr)return r.RG;if(s===Lp)return r.RG_INTEGER;if(s===Op)return r.RGBA_INTEGER;if(s===pu||s===mu||s===gu||s===vu)if(f===jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===pu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===pu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gh||s===Vh||s===kh||s===jh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Gh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Vh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===jh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xh||s===Wh||s===qh||s===Yh||s===Zh||s===Kh||s===Qh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Xh||s===Wh)return f===jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===qh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Yh)return c.COMPRESSED_R11_EAC;if(s===Zh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Kh)return c.COMPRESSED_RG11_EAC;if(s===Qh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Jh||s===$h||s===ep||s===tp||s===np||s===ip||s===ap||s===sp||s===rp||s===op||s===lp||s===cp||s===up||s===fp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Jh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$h)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ep)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===tp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===np)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ip)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ap)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===sp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===op)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===lp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===cp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===up)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fp)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===dp||s===hp||s===pp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===dp)return f===jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===hp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===pp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===mp||s===gp||s===vp||s===_p)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===mp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===gp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_p)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ml?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const KR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QR=`
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

}`;class JR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new wx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Ji({vertexShader:KR,fragmentShader:QR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qi(new yl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $R extends no{constructor(e,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,x=null,g=null,v=null,y=null,M=null;const A=typeof XRWebGLBinding<"u",_=new JR,S={},R=i.getContextAttributes();let w=null,N=null;const H=[],L=[],F=new At;let T=null;const O=new li;O.viewport=new rn;const J=new li;J.viewport=new rn;const G=[O,J],q=new cE;let K=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ee=H[X];return ee===void 0&&(ee=new th,H[X]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(X){let ee=H[X];return ee===void 0&&(ee=new th,H[X]=ee),ee.getGripSpace()},this.getHand=function(X){let ee=H[X];return ee===void 0&&(ee=new th,H[X]=ee),ee.getHandSpace()};function ae(X){const ee=L.indexOf(X.inputSource);if(ee===-1)return;const ge=H[ee];ge!==void 0&&(ge.update(X.inputSource,X.frame,p||f),ge.dispatchEvent({type:X.type,data:X.inputSource}))}function D(){l.removeEventListener("select",ae),l.removeEventListener("selectstart",ae),l.removeEventListener("selectend",ae),l.removeEventListener("squeeze",ae),l.removeEventListener("squeezestart",ae),l.removeEventListener("squeezeend",ae),l.removeEventListener("end",D),l.removeEventListener("inputsourceschange",z);for(let X=0;X<H.length;X++){const ee=L[X];ee!==null&&(L[X]=null,H[X].disconnect(ee))}K=null,Y=null,_.reset();for(const X in S)delete S[X];e.setRenderTarget(w),y=null,v=null,g=null,l=null,N=null,re.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){c=X,s.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){h=X,s.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(X){p=X},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(X){if(l=X,l!==null){if(w=e.getRenderTarget(),l.addEventListener("select",ae),l.addEventListener("selectstart",ae),l.addEventListener("selectend",ae),l.addEventListener("squeeze",ae),l.addEventListener("squeezestart",ae),l.addEventListener("squeezeend",ae),l.addEventListener("end",D),l.addEventListener("inputsourceschange",z),R.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Q=null,be=null;R.depth&&(be=R.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ge=R.stencil?ks:Ra,Q=R.stencil?ml:Ki);const Re={colorFormat:i.RGBA8,depthFormat:be,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(Re),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new Zi(v.textureWidth,v.textureHeight,{format:Oi,type:ci,depthTexture:new vl(v.textureWidth,v.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ge={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,ge),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Zi(y.framebufferWidth,y.framebufferHeight,{format:Oi,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),re.setContext(l),re.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(X){for(let ee=0;ee<X.removed.length;ee++){const ge=X.removed[ee],Q=L.indexOf(ge);Q>=0&&(L[Q]=null,H[Q].disconnect(ge))}for(let ee=0;ee<X.added.length;ee++){const ge=X.added[ee];let Q=L.indexOf(ge);if(Q===-1){for(let Re=0;Re<H.length;Re++)if(Re>=L.length){L.push(ge),Q=Re;break}else if(L[Re]===null){L[Re]=ge,Q=Re;break}if(Q===-1)break}const be=H[Q];be&&be.connect(ge)}}const te=new fe,le=new fe;function _e(X,ee,ge){te.setFromMatrixPosition(ee.matrixWorld),le.setFromMatrixPosition(ge.matrixWorld);const Q=te.distanceTo(le),be=ee.projectionMatrix.elements,Re=ge.projectionMatrix.elements,ze=be[14]/(be[10]-1),Ue=be[14]/(be[10]+1),we=(be[9]+1)/be[5],Be=(be[9]-1)/be[5],Fe=(be[8]-1)/be[0],qe=(Re[8]+1)/Re[0],k=ze*Fe,st=ze*qe,rt=Q/(-Fe+qe),lt=rt*-Fe;if(ee.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(lt),X.translateZ(rt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),be[10]===-1)X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const He=ze+rt,B=Ue+rt,C=k-lt,$=st+(Q-lt),ye=we*Ue/B*He,Te=Be*Ue/B*He;X.projectionMatrix.makePerspective(C,$,ye,Te,He,B),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function I(X,ee){ee===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ee.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(l===null)return;let ee=X.near,ge=X.far;_.texture!==null&&(_.depthNear>0&&(ee=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),q.near=J.near=O.near=ee,q.far=J.far=O.far=ge,(K!==q.near||Y!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),K=q.near,Y=q.far),q.layers.mask=X.layers.mask|6,O.layers.mask=q.layers.mask&-5,J.layers.mask=q.layers.mask&-3;const Q=X.parent,be=q.cameras;I(q,Q);for(let Re=0;Re<be.length;Re++)I(be[Re],Q);be.length===2?_e(q,O,J):q.projectionMatrix.copy(O.projectionMatrix),j(X,q,Q)};function j(X,ee,ge){ge===null?X.matrix.copy(ee.matrixWorld):(X.matrix.copy(ge.matrixWorld),X.matrix.invert(),X.matrix.multiply(ee.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ee.projectionMatrix),X.projectionMatrixInverse.copy(ee.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Sp*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(X){m=X,v!==null&&(v.fixedFoveation=X),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(q)},this.getCameraTexture=function(X){return S[X]};let ne=null;function W(X,ee){if(x=ee.getViewerPose(p||f),M=ee,x!==null){const ge=x.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let Q=!1;ge.length!==q.cameras.length&&(q.cameras.length=0,Q=!0);for(let Ue=0;Ue<ge.length;Ue++){const we=ge[Ue];let Be=null;if(y!==null)Be=y.getViewport(we);else{const qe=g.getViewSubImage(v,we);Be=qe.viewport,Ue===0&&(e.setRenderTargetTextures(N,qe.colorTexture,qe.depthStencilTexture),e.setRenderTarget(N))}let Fe=G[Ue];Fe===void 0&&(Fe=new li,Fe.layers.enable(Ue),Fe.viewport=new rn,G[Ue]=Fe),Fe.matrix.fromArray(we.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(we.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Be.x,Be.y,Be.width,Be.height),Ue===0&&(q.matrix.copy(Fe.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Q===!0&&q.cameras.push(Fe)}const be=l.enabledFeatures;if(be&&be.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=s.getBinding();const Ue=g.getDepthInformation(ge[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(Ue,l.renderState)}if(be&&be.includes("camera-access")&&A){e.state.unbindTexture(),g=s.getBinding();for(let Ue=0;Ue<ge.length;Ue++){const we=ge[Ue].camera;if(we){let Be=S[we];Be||(Be=new wx,S[we]=Be);const Fe=g.getCameraImage(we);Be.sourceTexture=Fe}}}}for(let ge=0;ge<H.length;ge++){const Q=L[ge],be=H[ge];Q!==null&&be!==void 0&&be.update(Q,ee,p||f)}ne&&ne(X,ee),ee.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ee}),M=null}const re=new Ox;re.setAnimationLoop(W),this.setAnimationLoop=function(X){ne=X},this.dispose=function(){}}}const Bs=new Ca,eC=new Jt;function tC(r,e){function i(_,S){_.matrixAutoUpdate===!0&&_.updateMatrix(),S.value.copy(_.matrix)}function s(_,S){S.color.getRGB(_.fogColor.value,Nx(r)),S.isFog?(_.fogNear.value=S.near,_.fogFar.value=S.far):S.isFogExp2&&(_.fogDensity.value=S.density)}function l(_,S,R,w,N){S.isMeshBasicMaterial?c(_,S):S.isMeshLambertMaterial?(c(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(_,S),g(_,S)):S.isMeshPhongMaterial?(c(_,S),x(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(_,S),v(_,S),S.isMeshPhysicalMaterial&&y(_,S,N)):S.isMeshMatcapMaterial?(c(_,S),M(_,S)):S.isMeshDepthMaterial?c(_,S):S.isMeshDistanceMaterial?(c(_,S),A(_,S)):S.isMeshNormalMaterial?c(_,S):S.isLineBasicMaterial?(f(_,S),S.isLineDashedMaterial&&h(_,S)):S.isPointsMaterial?m(_,S,R,w):S.isSpriteMaterial?p(_,S):S.isShadowMaterial?(_.color.value.copy(S.color),_.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(_,S){_.opacity.value=S.opacity,S.color&&_.diffuse.value.copy(S.color),S.emissive&&_.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(_.map.value=S.map,i(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,i(S.alphaMap,_.alphaMapTransform)),S.bumpMap&&(_.bumpMap.value=S.bumpMap,i(S.bumpMap,_.bumpMapTransform),_.bumpScale.value=S.bumpScale,S.side===Kn&&(_.bumpScale.value*=-1)),S.normalMap&&(_.normalMap.value=S.normalMap,i(S.normalMap,_.normalMapTransform),_.normalScale.value.copy(S.normalScale),S.side===Kn&&_.normalScale.value.negate()),S.displacementMap&&(_.displacementMap.value=S.displacementMap,i(S.displacementMap,_.displacementMapTransform),_.displacementScale.value=S.displacementScale,_.displacementBias.value=S.displacementBias),S.emissiveMap&&(_.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,_.emissiveMapTransform)),S.specularMap&&(_.specularMap.value=S.specularMap,i(S.specularMap,_.specularMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest);const R=e.get(S),w=R.envMap,N=R.envMapRotation;w&&(_.envMap.value=w,Bs.copy(N),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),_.envMapRotation.value.setFromMatrix4(eC.makeRotationFromEuler(Bs)),_.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=S.reflectivity,_.ior.value=S.ior,_.refractionRatio.value=S.refractionRatio),S.lightMap&&(_.lightMap.value=S.lightMap,_.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,_.lightMapTransform)),S.aoMap&&(_.aoMap.value=S.aoMap,_.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,_.aoMapTransform))}function f(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,S.map&&(_.map.value=S.map,i(S.map,_.mapTransform))}function h(_,S){_.dashSize.value=S.dashSize,_.totalSize.value=S.dashSize+S.gapSize,_.scale.value=S.scale}function m(_,S,R,w){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.size.value=S.size*R,_.scale.value=w*.5,S.map&&(_.map.value=S.map,i(S.map,_.uvTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,i(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function p(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.rotation.value=S.rotation,S.map&&(_.map.value=S.map,i(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,i(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function x(_,S){_.specular.value.copy(S.specular),_.shininess.value=Math.max(S.shininess,1e-4)}function g(_,S){S.gradientMap&&(_.gradientMap.value=S.gradientMap)}function v(_,S){_.metalness.value=S.metalness,S.metalnessMap&&(_.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,_.metalnessMapTransform)),_.roughness.value=S.roughness,S.roughnessMap&&(_.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,_.roughnessMapTransform)),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)}function y(_,S,R){_.ior.value=S.ior,S.sheen>0&&(_.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),_.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(_.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,_.sheenColorMapTransform)),S.sheenRoughnessMap&&(_.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,_.sheenRoughnessMapTransform))),S.clearcoat>0&&(_.clearcoat.value=S.clearcoat,_.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(_.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,_.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(_.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Kn&&_.clearcoatNormalScale.value.negate())),S.dispersion>0&&(_.dispersion.value=S.dispersion),S.iridescence>0&&(_.iridescence.value=S.iridescence,_.iridescenceIOR.value=S.iridescenceIOR,_.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(_.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,_.iridescenceMapTransform)),S.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),S.transmission>0&&(_.transmission.value=S.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(_.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,_.transmissionMapTransform)),_.thickness.value=S.thickness,S.thicknessMap&&(_.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=S.attenuationDistance,_.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(_.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(_.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=S.specularIntensity,_.specularColor.value.copy(S.specularColor),S.specularColorMap&&(_.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,_.specularColorMapTransform)),S.specularIntensityMap&&(_.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,S){S.matcap&&(_.matcap.value=S.matcap)}function A(_,S){const R=e.get(S).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function nC(r,e,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,w){const N=w.program;s.uniformBlockBinding(R,N)}function p(R,w){let N=l[R.id];N===void 0&&(M(R),N=x(R),l[R.id]=N,R.addEventListener("dispose",_));const H=w.program;s.updateUBOMapping(R,H);const L=e.render.frame;c[R.id]!==L&&(v(R),c[R.id]=L)}function x(R){const w=g();R.__bindingPointIndex=w;const N=r.createBuffer(),H=R.__size,L=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,H,L),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,N),N}function g(){for(let R=0;R<h;R++)if(f.indexOf(R)===-1)return f.push(R),R;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(R){const w=l[R.id],N=R.uniforms,H=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let L=0,F=N.length;L<F;L++){const T=Array.isArray(N[L])?N[L]:[N[L]];for(let O=0,J=T.length;O<J;O++){const G=T[O];if(y(G,L,O,H)===!0){const q=G.__offset,K=Array.isArray(G.value)?G.value:[G.value];let Y=0;for(let ae=0;ae<K.length;ae++){const D=K[ae],z=A(D);typeof D=="number"||typeof D=="boolean"?(G.__data[0]=D,r.bufferSubData(r.UNIFORM_BUFFER,q+Y,G.__data)):D.isMatrix3?(G.__data[0]=D.elements[0],G.__data[1]=D.elements[1],G.__data[2]=D.elements[2],G.__data[3]=0,G.__data[4]=D.elements[3],G.__data[5]=D.elements[4],G.__data[6]=D.elements[5],G.__data[7]=0,G.__data[8]=D.elements[6],G.__data[9]=D.elements[7],G.__data[10]=D.elements[8],G.__data[11]=0):(D.toArray(G.__data,Y),Y+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(R,w,N,H){const L=R.value,F=w+"_"+N;if(H[F]===void 0)return typeof L=="number"||typeof L=="boolean"?H[F]=L:H[F]=L.clone(),!0;{const T=H[F];if(typeof L=="number"||typeof L=="boolean"){if(T!==L)return H[F]=L,!0}else if(T.equals(L)===!1)return T.copy(L),!0}return!1}function M(R){const w=R.uniforms;let N=0;const H=16;for(let F=0,T=w.length;F<T;F++){const O=Array.isArray(w[F])?w[F]:[w[F]];for(let J=0,G=O.length;J<G;J++){const q=O[J],K=Array.isArray(q.value)?q.value:[q.value];for(let Y=0,ae=K.length;Y<ae;Y++){const D=K[Y],z=A(D),te=N%H,le=te%z.boundary,_e=te+le;N+=le,_e!==0&&H-_e<z.storage&&(N+=H-_e),q.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=N,N+=z.storage}}}const L=N%H;return L>0&&(N+=H-L),R.__size=N,R.__cache={},this}function A(R){const w={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(w.boundary=4,w.storage=4):R.isVector2?(w.boundary=8,w.storage=8):R.isVector3||R.isColor?(w.boundary=16,w.storage=12):R.isVector4?(w.boundary=16,w.storage=16):R.isMatrix3?(w.boundary=48,w.storage=48):R.isMatrix4?(w.boundary=64,w.storage=64):R.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):dt("WebGLRenderer: Unsupported uniform value type.",R),w}function _(R){const w=R.target;w.removeEventListener("dispose",_);const N=f.indexOf(w.__bindingPointIndex);f.splice(N,1),r.deleteBuffer(l[w.id]),delete l[w.id],delete c[w.id]}function S(){for(const R in l)r.deleteBuffer(l[R]);f=[],l={},c={}}return{bind:m,update:p,dispose:S}}const iC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function aC(){return Vi===null&&(Vi=new jb(iC,16,16,Jr,Aa),Vi.name="DFG_LUT",Vi.minFilter=On,Vi.magFilter=On,Vi.wrapS=ba,Vi.wrapT=ba,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class sC{constructor(e={}){const{canvas:i=xb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:y=ci}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=f;const A=y,_=new Set([Op,Lp,Up]),S=new Set([ci,Ki,pl,ml,Np,Dp]),R=new Uint32Array(4),w=new Int32Array(4);let N=null,H=null;const L=[],F=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let J=!1;this._outputColorSpace=Si;let G=0,q=0,K=null,Y=-1,ae=null;const D=new rn,z=new rn;let te=null;const le=new bt(0);let _e=0,I=i.width,j=i.height,ne=1,W=null,re=null;const X=new rn(0,0,I,j),ee=new rn(0,0,I,j);let ge=!1;const Q=new Gp;let be=!1,Re=!1;const ze=new Jt,Ue=new fe,we=new rn,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function qe(){return K===null?ne:1}let k=s;function st(P,se){return i.getContext(P,se)}try{const P={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Rp}`),i.addEventListener("webglcontextlost",Je,!1),i.addEventListener("webglcontextrestored",ht,!1),i.addEventListener("webglcontextcreationerror",Gt,!1),k===null){const se="webgl2";if(k=st(se,P),k===null)throw st(se)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw Lt("WebGLRenderer: "+P.message),P}let rt,lt,He,B,C,$,ye,Te,ve,je,Oe,Ye,nt,Ne,De,Xe,Ve,Ze,_t,oe,Ie,Pe,Ke;function Le(){rt=new sA(k),rt.init(),Ie=new ZR(k,rt),lt=new QT(k,rt,e,Ie),He=new qR(k,rt),lt.reversedDepthBuffer&&v&&He.buffers.depth.setReversed(!0),B=new lA(k),C=new LR,$=new YR(k,rt,He,C,lt,Ie,B),ye=new aA(O),Te=new hE(k),Pe=new ZT(k,Te),ve=new rA(k,Te,B,Pe),je=new uA(k,ve,Te,Pe,B),Ze=new cA(k,lt,$),De=new JT(C),Oe=new UR(O,ye,rt,lt,Pe,De),Ye=new tC(O,C),nt=new PR,Ne=new GR(rt),Ve=new YT(O,ye,He,je,M,m),Xe=new WR(O,je,lt),Ke=new nC(k,B,lt,He),_t=new KT(k,rt,B),oe=new oA(k,rt,B),B.programs=Oe.programs,O.capabilities=lt,O.extensions=rt,O.properties=C,O.renderLists=nt,O.shadowMap=Xe,O.state=He,O.info=B}Le(),A!==ci&&(T=new dA(A,i.width,i.height,l,c));const Me=new $R(O,k);this.xr=Me,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const P=rt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=rt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(P){P!==void 0&&(ne=P,this.setSize(I,j,!1))},this.getSize=function(P){return P.set(I,j)},this.setSize=function(P,se,xe=!0){if(Me.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}I=P,j=se,i.width=Math.floor(P*ne),i.height=Math.floor(se*ne),xe===!0&&(i.style.width=P+"px",i.style.height=se+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,P,se)},this.getDrawingBufferSize=function(P){return P.set(I*ne,j*ne).floor()},this.setDrawingBufferSize=function(P,se,xe){I=P,j=se,ne=xe,i.width=Math.floor(P*xe),i.height=Math.floor(se*xe),this.setViewport(0,0,P,se)},this.setEffects=function(P){if(A===ci){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let se=0;se<P.length;se++)if(P[se].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(D)},this.getViewport=function(P){return P.copy(X)},this.setViewport=function(P,se,xe,pe){P.isVector4?X.set(P.x,P.y,P.z,P.w):X.set(P,se,xe,pe),He.viewport(D.copy(X).multiplyScalar(ne).round())},this.getScissor=function(P){return P.copy(ee)},this.setScissor=function(P,se,xe,pe){P.isVector4?ee.set(P.x,P.y,P.z,P.w):ee.set(P,se,xe,pe),He.scissor(z.copy(ee).multiplyScalar(ne).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(P){He.setScissorTest(ge=P)},this.setOpaqueSort=function(P){W=P},this.setTransparentSort=function(P){re=P},this.getClearColor=function(P){return P.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(P=!0,se=!0,xe=!0){let pe=0;if(P){let ue=!1;if(K!==null){const Ge=K.texture.format;ue=_.has(Ge)}if(ue){const Ge=K.texture.type,Qe=S.has(Ge),ke=Ve.getClearColor(),it=Ve.getClearAlpha(),ot=ke.r,ft=ke.g,mt=ke.b;Qe?(R[0]=ot,R[1]=ft,R[2]=mt,R[3]=it,k.clearBufferuiv(k.COLOR,0,R)):(w[0]=ot,w[1]=ft,w[2]=mt,w[3]=it,k.clearBufferiv(k.COLOR,0,w))}else pe|=k.COLOR_BUFFER_BIT}se&&(pe|=k.DEPTH_BUFFER_BIT),xe&&(pe|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),pe!==0&&k.clear(pe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Je,!1),i.removeEventListener("webglcontextrestored",ht,!1),i.removeEventListener("webglcontextcreationerror",Gt,!1),Ve.dispose(),nt.dispose(),Ne.dispose(),C.dispose(),ye.dispose(),je.dispose(),Pe.dispose(),Ke.dispose(),Oe.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",qs),Me.removeEventListener("sessionend",Ys),Fi.stop()};function Je(P){P.preventDefault(),yu("WebGLRenderer: Context Lost."),J=!0}function ht(){yu("WebGLRenderer: Context Restored."),J=!1;const P=B.autoReset,se=Xe.enabled,xe=Xe.autoUpdate,pe=Xe.needsUpdate,ue=Xe.type;Le(),B.autoReset=P,Xe.enabled=se,Xe.autoUpdate=xe,Xe.needsUpdate=pe,Xe.type=ue}function Gt(P){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ut(P){const se=P.target;se.removeEventListener("dispose",Ut),In(se)}function In(P){Mi(P),C.remove(P)}function Mi(P){const se=C.get(P).programs;se!==void 0&&(se.forEach(function(xe){Oe.releaseProgram(xe)}),P.isShaderMaterial&&Oe.releaseShaderCache(P))}this.renderBufferDirect=function(P,se,xe,pe,ue,Ge){se===null&&(se=Be);const Qe=ue.isMesh&&ue.matrixWorld.determinant()<0,ke=Tl(P,se,xe,pe,ue);He.setMaterial(pe,Qe);let it=xe.index,ot=1;if(pe.wireframe===!0){if(it=ve.getWireframeAttribute(xe),it===void 0)return;ot=2}const ft=xe.drawRange,mt=xe.attributes.position;let $e=ft.start*ot,xt=(ft.start+ft.count)*ot;Ge!==null&&($e=Math.max($e,Ge.start*ot),xt=Math.min(xt,(Ge.start+Ge.count)*ot)),it!==null?($e=Math.max($e,0),xt=Math.min(xt,it.count)):mt!=null&&($e=Math.max($e,0),xt=Math.min(xt,mt.count));const $t=xt-$e;if($t<0||$t===1/0)return;Pe.setup(ue,pe,ke,xe,it);let en,Ft=_t;if(it!==null&&(en=Te.get(it),Ft=oe,Ft.setIndex(en)),ue.isMesh)pe.wireframe===!0?(He.setLineWidth(pe.wireframeLinewidth*qe()),Ft.setMode(k.LINES)):Ft.setMode(k.TRIANGLES);else if(ue.isLine){let _n=pe.linewidth;_n===void 0&&(_n=1),He.setLineWidth(_n*qe()),ue.isLineSegments?Ft.setMode(k.LINES):ue.isLineLoop?Ft.setMode(k.LINE_LOOP):Ft.setMode(k.LINE_STRIP)}else ue.isPoints?Ft.setMode(k.POINTS):ue.isSprite&&Ft.setMode(k.TRIANGLES);if(ue.isBatchedMesh)if(ue._multiDrawInstances!==null)Mu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ft.renderMultiDrawInstances(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount,ue._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))Ft.renderMultiDraw(ue._multiDrawStarts,ue._multiDrawCounts,ue._multiDrawCount);else{const _n=ue._multiDrawStarts,tt=ue._multiDrawCounts,Bn=ue._multiDrawCount,pt=it?Te.get(it).bytesPerElement:1,zn=C.get(pe).currentProgram.getUniforms();for(let Qn=0;Qn<Bn;Qn++)zn.setValue(k,"_gl_DrawID",Qn),Ft.render(_n[Qn]/pt,tt[Qn])}else if(ue.isInstancedMesh)Ft.renderInstances($e,$t,ue.count);else if(xe.isInstancedBufferGeometry){const _n=xe._maxInstanceCount!==void 0?xe._maxInstanceCount:1/0,tt=Math.min(xe.instanceCount,_n);Ft.renderInstances($e,$t,tt)}else Ft.render($e,$t)};function so(P,se,xe){P.transparent===!0&&P.side===ji&&P.forceSinglePass===!1?(P.side=Kn,P.needsUpdate=!0,wa(P,se,xe),P.side=hs,P.needsUpdate=!0,wa(P,se,xe),P.side=ji):wa(P,se,xe)}this.compile=function(P,se,xe=null){xe===null&&(xe=P),H=Ne.get(xe),H.init(se),F.push(H),xe.traverseVisible(function(ue){ue.isLight&&ue.layers.test(se.layers)&&(H.pushLight(ue),ue.castShadow&&H.pushShadow(ue))}),P!==xe&&P.traverseVisible(function(ue){ue.isLight&&ue.layers.test(se.layers)&&(H.pushLight(ue),ue.castShadow&&H.pushShadow(ue))}),H.setupLights();const pe=new Set;return P.traverse(function(ue){if(!(ue.isMesh||ue.isPoints||ue.isLine||ue.isSprite))return;const Ge=ue.material;if(Ge)if(Array.isArray(Ge))for(let Qe=0;Qe<Ge.length;Qe++){const ke=Ge[Qe];so(ke,xe,ue),pe.add(ke)}else so(Ge,xe,ue),pe.add(Ge)}),H=F.pop(),pe},this.compileAsync=function(P,se,xe=null){const pe=this.compile(P,se,xe);return new Promise(ue=>{function Ge(){if(pe.forEach(function(Qe){C.get(Qe).currentProgram.isReady()&&pe.delete(Qe)}),pe.size===0){ue(P);return}setTimeout(Ge,10)}rt.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let Ws=null;function Ml(P){Ws&&Ws(P)}function qs(){Fi.stop()}function Ys(){Fi.start()}const Fi=new Ox;Fi.setAnimationLoop(Ml),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(P){Ws=P,Me.setAnimationLoop(P),P===null?Fi.stop():Fi.start()},Me.addEventListener("sessionstart",qs),Me.addEventListener("sessionend",Ys),this.render=function(P,se){if(se!==void 0&&se.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(J===!0)return;const xe=Me.enabled===!0&&Me.isPresenting===!0,pe=T!==null&&(K===null||xe)&&T.begin(O,K);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),se.parent===null&&se.matrixWorldAutoUpdate===!0&&se.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(se),se=Me.getCamera()),P.isScene===!0&&P.onBeforeRender(O,P,se,K),H=Ne.get(P,F.length),H.init(se),F.push(H),ze.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),Q.setFromProjectionMatrix(ze,qi,se.reversedDepth),Re=this.localClippingEnabled,be=De.init(this.clippingPlanes,Re),N=nt.get(P,L.length),N.init(),L.push(N),Me.enabled===!0&&Me.isPresenting===!0){const Qe=O.xr.getDepthSensingMesh();Qe!==null&&Zs(Qe,se,-1/0,O.sortObjects)}Zs(P,se,0,O.sortObjects),N.finish(),O.sortObjects===!0&&N.sort(W,re),Fe=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,Fe&&Ve.addToRenderList(N,P),this.info.render.frame++,be===!0&&De.beginShadows();const ue=H.state.shadowsArray;if(Xe.render(ue,P,se),be===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),(pe&&T.hasRenderPass())===!1){const Qe=N.opaque,ke=N.transmissive;if(H.setupLights(),se.isArrayCamera){const it=se.cameras;if(ke.length>0)for(let ot=0,ft=it.length;ot<ft;ot++){const mt=it[ot];cn(Qe,ke,P,mt)}Fe&&Ve.render(P);for(let ot=0,ft=it.length;ot<ft;ot++){const mt=it[ot];bi(N,P,mt,mt.viewport)}}else ke.length>0&&cn(Qe,ke,P,se),Fe&&Ve.render(P),bi(N,P,se)}K!==null&&q===0&&($.updateMultisampleRenderTarget(K),$.updateRenderTargetMipmap(K)),pe&&T.end(O),P.isScene===!0&&P.onAfterRender(O,P,se),Pe.resetDefaultState(),Y=-1,ae=null,F.pop(),F.length>0?(H=F[F.length-1],be===!0&&De.setGlobalState(O.clippingPlanes,H.state.camera)):H=null,L.pop(),L.length>0?N=L[L.length-1]:N=null};function Zs(P,se,xe,pe){if(P.visible===!1)return;if(P.layers.test(se.layers)){if(P.isGroup)xe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(se);else if(P.isLight)H.pushLight(P),P.castShadow&&H.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Q.intersectsSprite(P)){pe&&we.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ze);const Qe=je.update(P),ke=P.material;ke.visible&&N.push(P,Qe,ke,xe,we.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Q.intersectsObject(P))){const Qe=je.update(P),ke=P.material;if(pe&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),we.copy(P.boundingSphere.center)):(Qe.boundingSphere===null&&Qe.computeBoundingSphere(),we.copy(Qe.boundingSphere.center)),we.applyMatrix4(P.matrixWorld).applyMatrix4(ze)),Array.isArray(ke)){const it=Qe.groups;for(let ot=0,ft=it.length;ot<ft;ot++){const mt=it[ot],$e=ke[mt.materialIndex];$e&&$e.visible&&N.push(P,Qe,$e,xe,we.z,mt)}}else ke.visible&&N.push(P,Qe,ke,xe,we.z,null)}}const Ge=P.children;for(let Qe=0,ke=Ge.length;Qe<ke;Qe++)Zs(Ge[Qe],se,xe,pe)}function bi(P,se,xe,pe){const{opaque:ue,transmissive:Ge,transparent:Qe}=P;H.setupLightsView(xe),be===!0&&De.setGlobalState(O.clippingPlanes,xe),pe&&He.viewport(D.copy(pe)),ue.length>0&&vn(ue,se,xe),Ge.length>0&&vn(Ge,se,xe),Qe.length>0&&vn(Qe,se,xe),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function cn(P,se,xe,pe){if((xe.isScene===!0?xe.overrideMaterial:null)!==null)return;if(H.state.transmissionRenderTarget[pe.id]===void 0){const $e=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");H.state.transmissionRenderTarget[pe.id]=new Zi(1,1,{generateMipmaps:!0,type:$e?Aa:ci,minFilter:Vs,samples:Math.max(4,lt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}const Ge=H.state.transmissionRenderTarget[pe.id],Qe=pe.viewport||D;Ge.setSize(Qe.z*O.transmissionResolutionScale,Qe.w*O.transmissionResolutionScale);const ke=O.getRenderTarget(),it=O.getActiveCubeFace(),ot=O.getActiveMipmapLevel();O.setRenderTarget(Ge),O.getClearColor(le),_e=O.getClearAlpha(),_e<1&&O.setClearColor(16777215,.5),O.clear(),Fe&&Ve.render(xe);const ft=O.toneMapping;O.toneMapping=Yi;const mt=pe.viewport;if(pe.viewport!==void 0&&(pe.viewport=void 0),H.setupLightsView(pe),be===!0&&De.setGlobalState(O.clippingPlanes,pe),vn(P,xe,pe),$.updateMultisampleRenderTarget(Ge),$.updateRenderTargetMipmap(Ge),rt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let xt=0,$t=se.length;xt<$t;xt++){const en=se[xt],{object:Ft,geometry:_n,material:tt,group:Bn}=en;if(tt.side===ji&&Ft.layers.test(pe.layers)){const pt=tt.side;tt.side=Kn,tt.needsUpdate=!0,$i(Ft,xe,pe,_n,tt,Bn),tt.side=pt,tt.needsUpdate=!0,$e=!0}}$e===!0&&($.updateMultisampleRenderTarget(Ge),$.updateRenderTargetMipmap(Ge))}O.setRenderTarget(ke,it,ot),O.setClearColor(le,_e),mt!==void 0&&(pe.viewport=mt),O.toneMapping=ft}function vn(P,se,xe){const pe=se.isScene===!0?se.overrideMaterial:null;for(let ue=0,Ge=P.length;ue<Ge;ue++){const Qe=P[ue],{object:ke,geometry:it,group:ot}=Qe;let ft=Qe.material;ft.allowOverride===!0&&pe!==null&&(ft=pe),ke.layers.test(xe.layers)&&$i(ke,se,xe,it,ft,ot)}}function $i(P,se,xe,pe,ue,Ge){P.onBeforeRender(O,se,xe,pe,ue,Ge),P.modelViewMatrix.multiplyMatrices(xe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ue.onBeforeRender(O,se,xe,pe,P,Ge),ue.transparent===!0&&ue.side===ji&&ue.forceSinglePass===!1?(ue.side=Kn,ue.needsUpdate=!0,O.renderBufferDirect(xe,se,pe,ue,P,Ge),ue.side=hs,ue.needsUpdate=!0,O.renderBufferDirect(xe,se,pe,ue,P,Ge),ue.side=ji):O.renderBufferDirect(xe,se,pe,ue,P,Ge),P.onAfterRender(O,se,xe,pe,ue,Ge)}function wa(P,se,xe){se.isScene!==!0&&(se=Be);const pe=C.get(P),ue=H.state.lights,Ge=H.state.shadowsArray,Qe=ue.state.version,ke=Oe.getParameters(P,ue.state,Ge,se,xe),it=Oe.getProgramCacheKey(ke);let ot=pe.programs;pe.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?se.environment:null,pe.fog=se.fog;const ft=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;pe.envMap=ye.get(P.envMap||pe.environment,ft),pe.envMapRotation=pe.environment!==null&&P.envMap===null?se.environmentRotation:P.envMapRotation,ot===void 0&&(P.addEventListener("dispose",Ut),ot=new Map,pe.programs=ot);let mt=ot.get(it);if(mt!==void 0){if(pe.currentProgram===mt&&pe.lightsStateVersion===Qe)return El(P,ke),mt}else ke.uniforms=Oe.getUniforms(P),P.onBeforeCompile(ke,O),mt=Oe.acquireProgram(ke,it),ot.set(it,mt),pe.uniforms=ke.uniforms;const $e=pe.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&($e.clippingPlanes=De.uniform),El(P,ke),pe.needsLights=ro(P),pe.lightsStateVersion=Qe,pe.needsLights&&($e.ambientLightColor.value=ue.state.ambient,$e.lightProbe.value=ue.state.probe,$e.directionalLights.value=ue.state.directional,$e.directionalLightShadows.value=ue.state.directionalShadow,$e.spotLights.value=ue.state.spot,$e.spotLightShadows.value=ue.state.spotShadow,$e.rectAreaLights.value=ue.state.rectArea,$e.ltc_1.value=ue.state.rectAreaLTC1,$e.ltc_2.value=ue.state.rectAreaLTC2,$e.pointLights.value=ue.state.point,$e.pointLightShadows.value=ue.state.pointShadow,$e.hemisphereLights.value=ue.state.hemi,$e.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,$e.spotLightMatrix.value=ue.state.spotLightMatrix,$e.spotLightMap.value=ue.state.spotLightMap,$e.pointShadowMatrix.value=ue.state.pointShadowMatrix),pe.currentProgram=mt,pe.uniformsList=null,mt}function bl(P){if(P.uniformsList===null){const se=P.currentProgram.getUniforms();P.uniformsList=_u.seqWithValue(se.seq,P.uniforms)}return P.uniformsList}function El(P,se){const xe=C.get(P);xe.outputColorSpace=se.outputColorSpace,xe.batching=se.batching,xe.batchingColor=se.batchingColor,xe.instancing=se.instancing,xe.instancingColor=se.instancingColor,xe.instancingMorph=se.instancingMorph,xe.skinning=se.skinning,xe.morphTargets=se.morphTargets,xe.morphNormals=se.morphNormals,xe.morphColors=se.morphColors,xe.morphTargetsCount=se.morphTargetsCount,xe.numClippingPlanes=se.numClippingPlanes,xe.numIntersection=se.numClipIntersection,xe.vertexAlphas=se.vertexAlphas,xe.vertexTangents=se.vertexTangents,xe.toneMapping=se.toneMapping}function Tl(P,se,xe,pe,ue){se.isScene!==!0&&(se=Be),$.resetTextureUnits();const Ge=se.fog,Qe=pe.isMeshStandardMaterial||pe.isMeshLambertMaterial||pe.isMeshPhongMaterial?se.environment:null,ke=K===null?O.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:$r,it=pe.isMeshStandardMaterial||pe.isMeshLambertMaterial&&!pe.envMap||pe.isMeshPhongMaterial&&!pe.envMap,ot=ye.get(pe.envMap||Qe,it),ft=pe.vertexColors===!0&&!!xe.attributes.color&&xe.attributes.color.itemSize===4,mt=!!xe.attributes.tangent&&(!!pe.normalMap||pe.anisotropy>0),$e=!!xe.morphAttributes.position,xt=!!xe.morphAttributes.normal,$t=!!xe.morphAttributes.color;let en=Yi;pe.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(en=O.toneMapping);const Ft=xe.morphAttributes.position||xe.morphAttributes.normal||xe.morphAttributes.color,_n=Ft!==void 0?Ft.length:0,tt=C.get(pe),Bn=H.state.lights;if(be===!0&&(Re===!0||P!==ae)){const fn=P===ae&&pe.id===Y;De.setState(pe,P,fn)}let pt=!1;pe.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Bn.state.version||tt.outputColorSpace!==ke||ue.isBatchedMesh&&tt.batching===!1||!ue.isBatchedMesh&&tt.batching===!0||ue.isBatchedMesh&&tt.batchingColor===!0&&ue.colorTexture===null||ue.isBatchedMesh&&tt.batchingColor===!1&&ue.colorTexture!==null||ue.isInstancedMesh&&tt.instancing===!1||!ue.isInstancedMesh&&tt.instancing===!0||ue.isSkinnedMesh&&tt.skinning===!1||!ue.isSkinnedMesh&&tt.skinning===!0||ue.isInstancedMesh&&tt.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&tt.instancingColor===!1&&ue.instanceColor!==null||ue.isInstancedMesh&&tt.instancingMorph===!0&&ue.morphTexture===null||ue.isInstancedMesh&&tt.instancingMorph===!1&&ue.morphTexture!==null||tt.envMap!==ot||pe.fog===!0&&tt.fog!==Ge||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==De.numPlanes||tt.numIntersection!==De.numIntersection)||tt.vertexAlphas!==ft||tt.vertexTangents!==mt||tt.morphTargets!==$e||tt.morphNormals!==xt||tt.morphColors!==$t||tt.toneMapping!==en||tt.morphTargetsCount!==_n)&&(pt=!0):(pt=!0,tt.__version=pe.version);let zn=tt.currentProgram;pt===!0&&(zn=wa(pe,se,ue));let Qn=!1,Ei=!1,Jn=!1;const Ht=zn.getUniforms(),un=tt.uniforms;if(He.useProgram(zn.program)&&(Qn=!0,Ei=!0,Jn=!0),pe.id!==Y&&(Y=pe.id,Ei=!0),Qn||ae!==P){He.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ht.setValue(k,"projectionMatrix",P.projectionMatrix),Ht.setValue(k,"viewMatrix",P.matrixWorldInverse);const Ti=Ht.map.cameraPosition;Ti!==void 0&&Ti.setValue(k,Ue.setFromMatrixPosition(P.matrixWorld)),lt.logarithmicDepthBuffer&&Ht.setValue(k,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(pe.isMeshPhongMaterial||pe.isMeshToonMaterial||pe.isMeshLambertMaterial||pe.isMeshBasicMaterial||pe.isMeshStandardMaterial||pe.isShaderMaterial)&&Ht.setValue(k,"isOrthographic",P.isOrthographicCamera===!0),ae!==P&&(ae=P,Ei=!0,Jn=!0)}if(tt.needsLights&&(Bn.state.directionalShadowMap.length>0&&Ht.setValue(k,"directionalShadowMap",Bn.state.directionalShadowMap,$),Bn.state.spotShadowMap.length>0&&Ht.setValue(k,"spotShadowMap",Bn.state.spotShadowMap,$),Bn.state.pointShadowMap.length>0&&Ht.setValue(k,"pointShadowMap",Bn.state.pointShadowMap,$)),ue.isSkinnedMesh){Ht.setOptional(k,ue,"bindMatrix"),Ht.setOptional(k,ue,"bindMatrixInverse");const fn=ue.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Ht.setValue(k,"boneTexture",fn.boneTexture,$))}ue.isBatchedMesh&&(Ht.setOptional(k,ue,"batchingTexture"),Ht.setValue(k,"batchingTexture",ue._matricesTexture,$),Ht.setOptional(k,ue,"batchingIdTexture"),Ht.setValue(k,"batchingIdTexture",ue._indirectTexture,$),Ht.setOptional(k,ue,"batchingColorTexture"),ue._colorsTexture!==null&&Ht.setValue(k,"batchingColorTexture",ue._colorsTexture,$));const Hn=xe.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&Ze.update(ue,xe,zn),(Ei||tt.receiveShadow!==ue.receiveShadow)&&(tt.receiveShadow=ue.receiveShadow,Ht.setValue(k,"receiveShadow",ue.receiveShadow)),(pe.isMeshStandardMaterial||pe.isMeshLambertMaterial||pe.isMeshPhongMaterial)&&pe.envMap===null&&se.environment!==null&&(un.envMapIntensity.value=se.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=aC()),Ei&&(Ht.setValue(k,"toneMappingExposure",O.toneMappingExposure),tt.needsLights&&ps(un,Jn),Ge&&pe.fog===!0&&Ye.refreshFogUniforms(un,Ge),Ye.refreshMaterialUniforms(un,pe,ne,j,H.state.transmissionRenderTarget[P.id]),_u.upload(k,bl(tt),un,$)),pe.isShaderMaterial&&pe.uniformsNeedUpdate===!0&&(_u.upload(k,bl(tt),un,$),pe.uniformsNeedUpdate=!1),pe.isSpriteMaterial&&Ht.setValue(k,"center",ue.center),Ht.setValue(k,"modelViewMatrix",ue.modelViewMatrix),Ht.setValue(k,"normalMatrix",ue.normalMatrix),Ht.setValue(k,"modelMatrix",ue.matrixWorld),pe.isShaderMaterial||pe.isRawShaderMaterial){const fn=pe.uniformsGroups;for(let Ti=0,ea=fn.length;Ti<ea;Ti++){const Ks=fn[Ti];Ke.update(Ks,zn),Ke.bind(Ks,zn)}}return zn}function ps(P,se){P.ambientLightColor.needsUpdate=se,P.lightProbe.needsUpdate=se,P.directionalLights.needsUpdate=se,P.directionalLightShadows.needsUpdate=se,P.pointLights.needsUpdate=se,P.pointLightShadows.needsUpdate=se,P.spotLights.needsUpdate=se,P.spotLightShadows.needsUpdate=se,P.rectAreaLights.needsUpdate=se,P.hemisphereLights.needsUpdate=se}function ro(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(P,se,xe){const pe=C.get(P);pe.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,pe.__autoAllocateDepthBuffer===!1&&(pe.__useRenderToTexture=!1),C.get(P.texture).__webglTexture=se,C.get(P.depthTexture).__webglTexture=pe.__autoAllocateDepthBuffer?void 0:xe,pe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,se){const xe=C.get(P);xe.__webglFramebuffer=se,xe.__useDefaultFramebuffer=se===void 0};const Na=k.createFramebuffer();this.setRenderTarget=function(P,se=0,xe=0){K=P,G=se,q=xe;let pe=null,ue=!1,Ge=!1;if(P){const ke=C.get(P);if(ke.__useDefaultFramebuffer!==void 0){He.bindFramebuffer(k.FRAMEBUFFER,ke.__webglFramebuffer),D.copy(P.viewport),z.copy(P.scissor),te=P.scissorTest,He.viewport(D),He.scissor(z),He.setScissorTest(te),Y=-1;return}else if(ke.__webglFramebuffer===void 0)$.setupRenderTarget(P);else if(ke.__hasExternalTextures)$.rebindTextures(P,C.get(P.texture).__webglTexture,C.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const ft=P.depthTexture;if(ke.__boundDepthTexture!==ft){if(ft!==null&&C.has(ft)&&(P.width!==ft.image.width||P.height!==ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(P)}}const it=P.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ge=!0);const ot=C.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ot[se])?pe=ot[se][xe]:pe=ot[se],ue=!0):P.samples>0&&$.useMultisampledRTT(P)===!1?pe=C.get(P).__webglMultisampledFramebuffer:Array.isArray(ot)?pe=ot[xe]:pe=ot,D.copy(P.viewport),z.copy(P.scissor),te=P.scissorTest}else D.copy(X).multiplyScalar(ne).floor(),z.copy(ee).multiplyScalar(ne).floor(),te=ge;if(xe!==0&&(pe=Na),He.bindFramebuffer(k.FRAMEBUFFER,pe)&&He.drawBuffers(P,pe),He.viewport(D),He.scissor(z),He.setScissorTest(te),ue){const ke=C.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+se,ke.__webglTexture,xe)}else if(Ge){const ke=se;for(let it=0;it<P.textures.length;it++){const ot=C.get(P.textures[it]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+it,ot.__webglTexture,xe,ke)}}else if(P!==null&&xe!==0){const ke=C.get(P.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ke.__webglTexture,xe)}Y=-1},this.readRenderTargetPixels=function(P,se,xe,pe,ue,Ge,Qe,ke=0){if(!(P&&P.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=C.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Qe!==void 0&&(it=it[Qe]),it){He.bindFramebuffer(k.FRAMEBUFFER,it);try{const ot=P.textures[ke],ft=ot.format,mt=ot.type;if(P.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ke),!lt.textureFormatReadable(ft)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(mt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}se>=0&&se<=P.width-pe&&xe>=0&&xe<=P.height-ue&&k.readPixels(se,xe,pe,ue,Ie.convert(ft),Ie.convert(mt),Ge)}finally{const ot=K!==null?C.get(K).__webglFramebuffer:null;He.bindFramebuffer(k.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(P,se,xe,pe,ue,Ge,Qe,ke=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let it=C.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Qe!==void 0&&(it=it[Qe]),it)if(se>=0&&se<=P.width-pe&&xe>=0&&xe<=P.height-ue){He.bindFramebuffer(k.FRAMEBUFFER,it);const ot=P.textures[ke],ft=ot.format,mt=ot.type;if(P.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ke),!lt.textureFormatReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,$e),k.bufferData(k.PIXEL_PACK_BUFFER,Ge.byteLength,k.STREAM_READ),k.readPixels(se,xe,pe,ue,Ie.convert(ft),Ie.convert(mt),0);const xt=K!==null?C.get(K).__webglFramebuffer:null;He.bindFramebuffer(k.FRAMEBUFFER,xt);const $t=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Sb(k,$t,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,$e),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ge),k.deleteBuffer($e),k.deleteSync($t),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,se=null,xe=0){const pe=Math.pow(2,-xe),ue=Math.floor(P.image.width*pe),Ge=Math.floor(P.image.height*pe),Qe=se!==null?se.x:0,ke=se!==null?se.y:0;$.setTexture2D(P,0),k.copyTexSubImage2D(k.TEXTURE_2D,xe,0,0,Qe,ke,ue,Ge),He.unbindTexture()};const Da=k.createFramebuffer(),ms=k.createFramebuffer();this.copyTextureToTexture=function(P,se,xe=null,pe=null,ue=0,Ge=0){let Qe,ke,it,ot,ft,mt,$e,xt,$t;const en=P.isCompressedTexture?P.mipmaps[Ge]:P.image;if(xe!==null)Qe=xe.max.x-xe.min.x,ke=xe.max.y-xe.min.y,it=xe.isBox3?xe.max.z-xe.min.z:1,ot=xe.min.x,ft=xe.min.y,mt=xe.isBox3?xe.min.z:0;else{const un=Math.pow(2,-ue);Qe=Math.floor(en.width*un),ke=Math.floor(en.height*un),P.isDataArrayTexture?it=en.depth:P.isData3DTexture?it=Math.floor(en.depth*un):it=1,ot=0,ft=0,mt=0}pe!==null?($e=pe.x,xt=pe.y,$t=pe.z):($e=0,xt=0,$t=0);const Ft=Ie.convert(se.format),_n=Ie.convert(se.type);let tt;se.isData3DTexture?($.setTexture3D(se,0),tt=k.TEXTURE_3D):se.isDataArrayTexture||se.isCompressedArrayTexture?($.setTexture2DArray(se,0),tt=k.TEXTURE_2D_ARRAY):($.setTexture2D(se,0),tt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,se.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,se.unpackAlignment);const Bn=k.getParameter(k.UNPACK_ROW_LENGTH),pt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),zn=k.getParameter(k.UNPACK_SKIP_PIXELS),Qn=k.getParameter(k.UNPACK_SKIP_ROWS),Ei=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,en.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,en.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ot),k.pixelStorei(k.UNPACK_SKIP_ROWS,ft),k.pixelStorei(k.UNPACK_SKIP_IMAGES,mt);const Jn=P.isDataArrayTexture||P.isData3DTexture,Ht=se.isDataArrayTexture||se.isData3DTexture;if(P.isDepthTexture){const un=C.get(P),Hn=C.get(se),fn=C.get(un.__renderTarget),Ti=C.get(Hn.__renderTarget);He.bindFramebuffer(k.READ_FRAMEBUFFER,fn.__webglFramebuffer),He.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let ea=0;ea<it;ea++)Jn&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,C.get(P).__webglTexture,ue,mt+ea),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,C.get(se).__webglTexture,Ge,$t+ea)),k.blitFramebuffer(ot,ft,Qe,ke,$e,xt,Qe,ke,k.DEPTH_BUFFER_BIT,k.NEAREST);He.bindFramebuffer(k.READ_FRAMEBUFFER,null),He.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(ue!==0||P.isRenderTargetTexture||C.has(P)){const un=C.get(P),Hn=C.get(se);He.bindFramebuffer(k.READ_FRAMEBUFFER,Da),He.bindFramebuffer(k.DRAW_FRAMEBUFFER,ms);for(let fn=0;fn<it;fn++)Jn?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,un.__webglTexture,ue,mt+fn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,un.__webglTexture,ue),Ht?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Hn.__webglTexture,Ge,$t+fn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Hn.__webglTexture,Ge),ue!==0?k.blitFramebuffer(ot,ft,Qe,ke,$e,xt,Qe,ke,k.COLOR_BUFFER_BIT,k.NEAREST):Ht?k.copyTexSubImage3D(tt,Ge,$e,xt,$t+fn,ot,ft,Qe,ke):k.copyTexSubImage2D(tt,Ge,$e,xt,ot,ft,Qe,ke);He.bindFramebuffer(k.READ_FRAMEBUFFER,null),He.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ht?P.isDataTexture||P.isData3DTexture?k.texSubImage3D(tt,Ge,$e,xt,$t,Qe,ke,it,Ft,_n,en.data):se.isCompressedArrayTexture?k.compressedTexSubImage3D(tt,Ge,$e,xt,$t,Qe,ke,it,Ft,en.data):k.texSubImage3D(tt,Ge,$e,xt,$t,Qe,ke,it,Ft,_n,en):P.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ge,$e,xt,Qe,ke,Ft,_n,en.data):P.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ge,$e,xt,en.width,en.height,Ft,en.data):k.texSubImage2D(k.TEXTURE_2D,Ge,$e,xt,Qe,ke,Ft,_n,en);k.pixelStorei(k.UNPACK_ROW_LENGTH,Bn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,pt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,zn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Qn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ei),Ge===0&&se.generateMipmaps&&k.generateMipmap(tt),He.unbindTexture()},this.initRenderTarget=function(P){C.get(P).__webglFramebuffer===void 0&&$.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?$.setTextureCube(P,0):P.isData3DTexture?$.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?$.setTexture2DArray(P,0):$.setTexture2D(P,0),He.unbindTexture()},this.resetState=function(){G=0,q=0,K=null,He.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ot._getUnpackColorSpace()}}const cl=400,rC=[.5,.8,.95,.6,.38,.14,.05,.55,.5,.8,.95,.6,.38,.14,.05,.55],Wr=3,j_=Math.PI*.75,X_=2.6,Rh=1.4,ul=1.8;function oC({eegData:r,yScale:e,onExit:i}){const s=V.useRef(null),l=V.useRef(null),c=V.useRef(null),f=V.useRef(null),h=V.useRef([]),m=V.useRef(null),p=V.useRef(null),x=V.useRef(!1),g=V.useRef(new uE),v=V.useRef(r),y=V.useRef(e),M=V.useRef(i);v.current=r,y.current=e,M.current=i;const A=V.useCallback(()=>{if(x.current)return;x.current=!0,m.current&&(m.current.end().catch(()=>{}),m.current=null),p.current!=null&&(cancelAnimationFrame(p.current),p.current=null);const _=l.current;_&&(_.xr.enabled=!1,_.setAnimationLoop(null),_.dispose(),l.current=null),h.current=[]},[]);return V.useEffect(()=>{const _=s.current;if(!_)return;x.current=!1;const S=g.current;S.start();const R=new Fb;R.background=new bt(198159),R.fog=new Bp(198159,.07),c.current=R;const w=new li(80,window.innerWidth/window.innerHeight,.05,60);w.position.set(0,Rh,0),f.current=w;const N=new sC({antialias:!0,alpha:!1});N.setPixelRatio(Math.min(window.devicePixelRatio,2)),N.setSize(window.innerWidth,window.innerHeight),N.xr.enabled=!0,N.toneMapping=Cp,N.toneMappingExposure=1.2,_.appendChild(N.domElement),l.current=N;const H=new oE(1122884,.8);R.add(H);const L=new rE(4491519,1.5,25);L.position.set(0,Rh+1,0),R.add(L);const F=1500,T=new Float32Array(F*3),O=new Float32Array(F*3);for(let j=0;j<F;j++){const ne=10+Math.random()*15,W=Math.random()*Math.PI*2,re=Math.acos(2*Math.random()-1);T[j*3]=ne*Math.sin(re)*Math.cos(W),T[j*3+1]=ne*Math.sin(re)*Math.sin(W),T[j*3+2]=ne*Math.cos(re),O[j*3]=.7+Math.random()*.3,O[j*3+1]=.75+Math.random()*.25,O[j*3+2]=.85+Math.random()*.15}const J=new Fn;J.setAttribute("position",new Ln(T,3)),J.setAttribute("color",new Ln(O,3));const G=new yp({size:.05,vertexColors:!0,transparent:!0,opacity:.85,sizeAttenuation:!0}),q=new p_(J,G);R.add(q);const Y=[{color:4853888,center:[5,2,-10],count:400,spread:5},{color:666208,center:[-6,1,-9],count:350,spread:4},{color:14928,center:[1,4,-12],count:300,spread:4}].map(({color:j,center:ne,count:W,spread:re})=>{const X=new Float32Array(W*3);for(let be=0;be<W;be++)X[be*3]=ne[0]+(Math.random()-.5)*re,X[be*3+1]=ne[1]+(Math.random()-.5)*re,X[be*3+2]=ne[2]+(Math.random()-.5)*re;const ee=new Fn;ee.setAttribute("position",new Ln(X,3));const ge=new yp({color:j,size:.12,transparent:!0,opacity:.16,sizeAttenuation:!0,depthWrite:!1}),Q=new p_(ee,ge);return R.add(Q),Q}),ae=[],D=new bt;for(let j=0;j<wt;j++){const ne=j/(wt-1),W=-j_/2+ne*j_,re=Rh+X_/2-ne*X_,X=rC[j],ee=new Float32Array(cl*3),ge=new Float32Array(cl*3),Q=new Fn;Q.setAttribute("position",new Ln(ee,3)),Q.setAttribute("color",new Ln(ge,3)),Q.setDrawRange(0,0);const be=new Vp({vertexColors:!0,transparent:!0,opacity:.92,linewidth:2}),Re=new Rx(Q,be);R.add(Re);const ze=document.createElement("canvas");ze.width=128,ze.height=48;const Ue=ze.getContext("2d");Ue.clearRect(0,0,128,48),D.setHSL(X,.9,.7),Ue.font="bold 28px monospace",Ue.fillStyle=`#${D.getHexString()}`,Ue.textAlign="center",Ue.textBaseline="middle",Ue.fillText(`Ch ${j+1}`,64,24);const we=new Zb(ze),Be=new Tx({map:we,transparent:!0,opacity:.65}),Fe=new Vb(Be);Fe.scale.set(.4,.15,1);const qe=Math.sin(W)*(Wr+.05),k=-Math.cos(W)*(Wr+.05),st=qe-Math.cos(W)*(ul/2),rt=k+Math.sin(W)*(ul/2);Fe.position.set(st-Math.cos(W)*.3,re,rt+Math.sin(W)*.3),R.add(Fe);const lt=new yl(ul+.3,.14),He=new Hp({color:new bt().setHSL(X,1,.55),transparent:!0,opacity:.05,side:ji,depthWrite:!1}),B=new Qi(lt,He);B.position.set(Math.sin(W)*Wr,re,-Math.cos(W)*Wr),B.rotation.y=W,R.add(B),ae.push({line:Re,geometry:Q,positions:ee,colors:ge,angle:W,yPos:re,glowPlane:B,baseHue:X})}h.current=ae;const z=new fE(12,24,660784,396830);R.add(z);function te(j){const ne=v.current,W=ne.buffers.current;if(!W)return;const re=ne.samplesInBuffer.current,X=ne.writeIndex.current,ee=ne.bufferSize;if(re<2)return;const ge=re>cl?Math.floor(re/cl):1,Q=Math.min(cl,Math.ceil(re/ge)),be=y.current||100;for(let Re=0;Re<wt;Re++){const{positions:ze,colors:Ue,geometry:we,angle:Be,yPos:Fe,glowPlane:qe,baseHue:k}=ae[Re],st=W[Re],rt=Math.sin(Be)*Wr,lt=-Math.cos(Be)*Wr,He=-Math.cos(Be),B=-Math.sin(Be),C=(k+Math.sin(j*.08+Re*.4)*.08+1)%1,$=.85+Math.sin(j*.15+Re)*.1;let ye=0;for(let ve=0;ve<Q;ve++){const je=ve*ge,Oe=(X-re+je+ee)%ee,Ye=ve/Math.max(1,Q-1),nt=st[Oe]/be;ye+=nt*nt,ze[ve*3]=rt+He*(Ye-.5)*ul,ze[ve*3+1]=Fe+nt*.14,ze[ve*3+2]=lt+B*(Ye-.5)*ul;const Ne=Math.sin(Ye*Math.PI),De=.35+Math.min(Math.abs(nt)*3,1)*.65,Xe=Math.min(.95,.5*Ne+De*.5);D.setHSL(C,$,Xe),Ue[ve*3]=D.r,Ue[ve*3+1]=D.g,Ue[ve*3+2]=D.b}we.attributes.position.needsUpdate=!0,we.attributes.color.needsUpdate=!0,we.setDrawRange(0,Q);const Te=Math.sqrt(ye/Math.max(1,Q));qe.material.opacity=Math.min(.2,.03+Te*.9)}H.intensity=.6+Math.sin(j*.5)*.15,L.intensity=1.2+Math.sin(j*.3)*.4,q.rotation.y=j*.005,q.rotation.x=Math.sin(j*.003)*.02,Y.forEach((Re,ze)=>{Re.material.opacity=.1+Math.sin(j*.2+ze*2.1)*.06,Re.rotation.y=j*.003*(ze%2===0?1:-1)})}async function le(){let j=null;if(navigator.xr)for(const ne of["immersive-vr","immersive-ar","inline"])try{if(await navigator.xr.isSessionSupported(ne)){j=ne;break}}catch{}if(j&&j!=="inline")try{const ne=await navigator.xr.requestSession(j,{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});m.current=ne,N.xr.setSession(ne),ne.addEventListener("end",()=>{m.current=null,M.current()}),N.setAnimationLoop(()=>{te(S.getElapsedTime()),N.render(R,w)});return}catch{}_e()}function _e(){let j=!1,ne=0,W=0,re=0,X=0,ee=!0;const ge=N.domElement,Q=Ue=>{j=!0,ee=!1,ne=Ue.clientX,W=Ue.clientY},be=()=>{j=!1},Re=Ue=>{j&&(re-=(Ue.clientX-ne)*.003,X-=(Ue.clientY-W)*.003,X=Math.max(-Math.PI/3,Math.min(Math.PI/3,X)),ne=Ue.clientX,W=Ue.clientY)};ge.addEventListener("pointerdown",Q),ge.addEventListener("pointerup",be),ge.addEventListener("pointermove",Re);function ze(){const Ue=S.getElapsedTime();ee&&(re=Ue*.04),w.rotation.order="YXZ",w.rotation.y=re,w.rotation.x=X,te(Ue),N.render(R,w),p.current=requestAnimationFrame(ze)}p.current=requestAnimationFrame(ze)}le();function I(){l.current&&(w.aspect=window.innerWidth/window.innerHeight,w.updateProjectionMatrix(),N.setSize(window.innerWidth,window.innerHeight))}return window.addEventListener("resize",I),()=>{window.removeEventListener("resize",I),A(),_.contains(N.domElement)&&_.removeChild(N.domElement)}},[]),b.jsxs("div",{className:"xr-overlay",children:[b.jsx("div",{className:"xr-container",ref:s}),b.jsxs("div",{className:"xr-hud",children:[b.jsx("button",{className:"btn xr-exit-btn",onClick:()=>{A(),M.current()},children:"✕ Exit XR"}),b.jsxs("div",{className:"xr-info",children:[b.jsx("span",{className:"xr-badge",children:"WebXR"}),b.jsxs("span",{children:[wt," channels · ±",e," µV"]})]})]})]})}const W_=256,Ch=4,lC=2.5,Tp=64,q_=.25,cC=[{key:"Alpha",label:"α Alpha"},{key:"Beta",label:"β Beta"},{key:"Theta",label:"θ Theta"},{key:"Delta",label:"δ Delta"},{key:"Gamma",label:"γ Gamma"},{key:"Total",label:"Σ Total"}],Y_=[{label:"Fp1",x:-.3,y:-.85},{label:"Fp2",x:.3,y:-.85},{label:"F7",x:-.7,y:-.45},{label:"F3",x:-.35,y:-.45},{label:"Fz",x:0,y:-.4},{label:"F4",x:.35,y:-.45},{label:"F8",x:.7,y:-.45},{label:"C3",x:-.55,y:0},{label:"Cz",x:0,y:0},{label:"C4",x:.55,y:0},{label:"P3",x:-.45,y:.45},{label:"Pz",x:0,y:.42},{label:"P4",x:.45,y:.45},{label:"O1",x:-.25,y:.85},{label:"Oz",x:0,y:.8},{label:"O2",x:.25,y:.85}],wh=[[6,10,20],[11,37,58],[18,92,109],[0,230,118],[255,215,64],[255,82,82],[255,255,255]],Pi=256,Au=new Uint8Array(Pi),Ru=new Uint8Array(Pi),Cu=new Uint8Array(Pi);(function(){const e=wh.length-1;for(let i=0;i<Pi;i++){const l=i/(Pi-1)*e,c=Math.min(Math.floor(l),e-1),f=l-c,h=wh[c],m=wh[c+1];Au[i]=h[0]+(m[0]-h[0])*f|0,Ru[i]=h[1]+(m[1]-h[1])*f|0,Cu[i]=h[2]+(m[2]-h[2])*f|0}})();function uC(r,e){const i=r.length,s=[],l=[],c=[],f=[],h=[],m=[];for(let _=0;_<e;_++)for(let S=0;S<e;S++){const R=-1+2*(S+.5)/e,w=-1+2*(_+.5)/e,N=Math.sqrt(R*R+w*w);if(N>1.05)continue;s.push(_*e+S),l.push(R),c.push(w),f.push(N>.92?(1.05-N)/.13:1);const H=new Array(i);let L=-1,F=0;for(let T=0;T<i;T++){const O=R-r[T].x,J=w-r[T].y,G=Math.sqrt(O*O+J*J);if(G<.001){L=T;break}H[T]=1/G**lC,F+=H[T]}if(L>=0)h.push(L),m.push(new Array(i).fill(0));else{h.push(-1);for(let T=0;T<i;T++)H[T]/=F;m.push(H)}}const p=s.length,x=new Int32Array(s),g=new Float64Array(f),v=new Float64Array(l),y=new Float64Array(c),M=new Int16Array(h),A=new Float64Array(p*i);for(let _=0;_<p;_++){const S=_*i,R=m[_];for(let w=0;w<i;w++)A[S+w]=R[w]}return{cellCount:p,cellIndex:x,edgeFade:g,nx:v,ny:y,weights:A,exactElectrode:M}}function fC(r,e,i,s,l,c){const f=r.data;f.fill(0);let h=1/0,m=-1/0;for(let v=0;v<i.length;v++)i[v]<h&&(h=i[v]),i[v]>m&&(m=i[v]);m<=h&&(m=h+1);const p=m-h,x=(Pi-1)/p,g=e/l;for(let v=0;v<s.cellCount;v++){const y=s.cellIndex[v],M=y/l|0,A=y-M*l;let _;const S=s.exactElectrode[v];if(S>=0)_=i[S];else{_=0;const G=v*c;for(let q=0;q<c;q++)_+=s.weights[G+q]*i[q]}const R=Math.max(0,Math.min(Pi-1,(_-h)*x|0)),w=s.edgeFade[v]*255|0,N=Au[R],H=Ru[R],L=Cu[R],F=A*g|0,T=M*g|0,O=Math.min((A+1)*g|0,e),J=Math.min((M+1)*g|0,e);for(let G=T;G<J;G++){let q=(G*e+F)*4;for(let K=F;K<O;K++)f[q]=N,f[q+1]=H,f[q+2]=L,f[q+3]=w,q+=4}}}function dC(r,e,i,s,l){const c=Math.min(e,i),f=e/2,h=i/2,m=c*.4;let p=1/0,x=-1/0;for(let _=0;_<s.length;_++)s[_]<p&&(p=s[_]),s[_]>x&&(x=s[_]);x<=p&&(x=p+1);const g=x-p;r.strokeStyle="rgba(255,255,255,0.25)",r.lineWidth=1.5,r.beginPath(),r.arc(f,h,m,0,Math.PI*2),r.stroke(),r.beginPath(),r.moveTo(f-m*.08,h-m),r.lineTo(f,h-m-m*.12),r.lineTo(f+m*.08,h-m),r.strokeStyle="rgba(255,255,255,0.3)",r.lineWidth=1.5,r.lineJoin="round",r.stroke();for(const _ of[!0,!1]){const S=_?f-m:f+m,R=_?-1:1;r.beginPath(),r.moveTo(S,h-m*.12),r.quadraticCurveTo(S+R*m*.08,h,S,h+m*.12),r.strokeStyle="rgba(255,255,255,0.2)",r.lineWidth=1.2,r.stroke()}for(let _=0;_<l.length&&_<s.length;_++){const S=f+l[_].x*m,R=h+l[_].y*m,w=Math.max(0,Math.min(Pi-1,(s[_]-p)/g*(Pi-1)|0)),N=Au[w],H=Ru[w],L=Cu[w];r.beginPath(),r.arc(S,R,5,0,Math.PI*2),r.fillStyle=`rgba(${N},${H},${L},0.4)`,r.shadowColor=`rgba(${N},${H},${L},0.6)`,r.shadowBlur=6,r.fill(),r.shadowBlur=0,r.beginPath(),r.arc(S,R,3,0,Math.PI*2),r.fillStyle="rgba(255,255,255,0.9)",r.fill(),r.beginPath(),r.arc(S,R,2,0,Math.PI*2),r.fillStyle=`rgb(${N},${H},${L})`,r.fill(),r.fillStyle="rgba(255,255,255,0.65)",r.font="7px monospace",r.textAlign="center",r.fillText(l[_].label,S,R+10)}const v=10,y=i*.5,M=e-v-8,A=(i-y)/2;for(let _=0;_<y;_++){const S=Math.max(0,Math.min(Pi-1,(1-_/y)*(Pi-1)|0));r.fillStyle=`rgb(${Au[S]},${Ru[S]},${Cu[S]})`,r.fillRect(M,A+_,v,1)}r.strokeStyle="rgba(255,255,255,0.15)",r.lineWidth=.5,r.strokeRect(M,A,v,y),r.fillStyle="rgba(255,255,255,0.4)",r.font="7px monospace",r.textAlign="right",r.fillText(x.toFixed(1),M-3,A+4),r.fillText(p.toFixed(1),M-3,A+y)}const os=Tp*4,hC=V.memo(function({eegData:e}){var O;const i=V.useRef(null),s=V.useRef(0),l=V.useRef(0),c=V.useRef(window.devicePixelRatio||1),f=V.useRef(!0),h=V.useRef({w:0,h:0,pw:0,ph:0}),m=V.useRef(new Array(wt).fill(0)),p=V.useRef(new Array(wt).fill(0)),x=V.useRef(0),g=V.useRef(null),v=V.useRef({}),y=V.useRef(0),[M,A]=V.useState("Alpha"),[_,S]=V.useState(!1),[R,w]=V.useState({}),[N,H]=V.useState({band:"",freq:0}),L=V.useMemo(()=>new ds(W_,Pt),[]),F=V.useMemo(()=>uC(Y_,Tp),[]);V.useEffect(()=>{const J=i.current;if(!J)return;const G=J.getContext("2d",{alpha:!1}),q=document.createElement("canvas");q.width=os,q.height=os;const K=q.getContext("2d");(!g.current||g.current.width!==os)&&(g.current=new ImageData(os,os));const Y=new ResizeObserver(D=>{const z=D[0];if(!z)return;const te=window.devicePixelRatio||1;c.current=te;const{width:le,height:_e}=z.contentRect;h.current={w:le,h:_e,pw:Math.round(le*te),ph:Math.round(_e*te)},f.current=!0});Y.observe(J);const ae=()=>{const{w:D,h:z,pw:te,ph:le}=h.current;if(D===0||z===0){s.current=requestAnimationFrame(ae);return}if(f.current&&(f.current=!1,J.width=te,J.height=le),G.setTransform(c.current,0,0,c.current,0,0),G.fillStyle="#0d1117",G.fillRect(0,0,D,z),l.current++,!_){const j=e.buffers.current,ne=e.writeIndex.current,W=e.samplesInBuffer.current;if(j&&W>=W_){const re=x.current,X=re*Ch,ee=Math.min(X+Ch,wt),ge=p.current,Q=m.current,be=v.current;for(let ze=X;ze<ee;ze++){const Ue=L.analyseRing(j[ze],ne,W);if(Ue){ge[ze]=M==="Total"?Ue.totalPower:Ue.bandPowers[M]||0,Q[ze]=Q[ze]*(1-q_)+ge[ze]*q_;for(const we of nn)be[we.name]=(be[we.name]||0)-(be[`_ch${ze}_${we.name}`]||0)+(Ue.bandPowers[we.name]||0),be[`_ch${ze}_${we.name}`]=Ue.bandPowers[we.name]||0}}x.current=(re+1)%Math.ceil(wt/Ch);const Re=performance.now();if(Re-y.current>400){y.current=Re;const ze={};let Ue="",we=0;for(const Be of nn)ze[Be.name]=(be[Be.name]||0)/wt,ze[Be.name]>we&&(we=ze[Be.name],Ue=Be.name);w(ze),H(Be=>Be.band===Ue?Be:{band:Ue,freq:0})}}}const _e=m.current;if(_e.some(j=>j!==0)){const j=g.current;fC(j,os,_e,F,Tp,wt),K.putImageData(j,0,0);const W=Math.min(D,z)*.4,re=D/2,X=z/2,ee=W*2.1;G.imageSmoothingEnabled=!0,G.imageSmoothingQuality="high",G.drawImage(q,0,0,os,os,re-ee/2,X-ee/2,ee,ee),dC(G,D,z,_e,Y_)}else G.fillStyle="#4b5563",G.font="13px monospace",G.textAlign="center",G.fillText("Collecting samples…",D/2,z/2);s.current=requestAnimationFrame(ae)};return s.current=requestAnimationFrame(ae),()=>{cancelAnimationFrame(s.current),Y.disconnect()}},[e,M,_,L,F]);const T=((O=nn.find(J=>J.name===N.band))==null?void 0:O.color)||"#8b949e";return b.jsxs("div",{className:"topomap-panel",children:[b.jsxs("div",{className:"topomap-toolbar",children:[b.jsx("span",{className:"topomap-title",children:"Topomap"}),b.jsx("div",{className:"topomap-metrics",children:cC.map(J=>b.jsx("button",{className:`topo-metric${M===J.key?" active":""}`,onClick:()=>A(J.key),children:J.label},J.key))}),b.jsx("span",{className:"topo-dominant",children:b.jsx("strong",{style:{color:T},children:N.band||"—"})}),b.jsx("button",{className:`btn topo-pause${_?" active":""}`,onClick:()=>S(J=>!J),children:_?"▶":"⏸"})]}),b.jsx("div",{className:"topomap-canvas-wrap",children:b.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}})}),b.jsx("div",{className:"topomap-bands",children:nn.map(J=>{const G=R[J.name]||0,q=Math.max(...nn.map(Y=>R[Y.name]||0),1e-6),K=q>0?G/q*100:0;return b.jsxs("div",{className:"topo-band",children:[b.jsx("span",{className:"topo-band-dot",style:{background:J.color}}),b.jsx("span",{className:"topo-band-name",style:{color:J.color},children:J.label}),b.jsx("div",{className:"topo-band-track",children:b.jsx("div",{className:"topo-band-fill",style:{width:`${K}%`,background:J.color}})}),b.jsx("span",{className:"topo-band-val",children:G<.01?G.toExponential(1):G.toFixed(2)})]},J.name)})})]})}),ls=256,Z_=60,K_=6;function pC(){const r=new Uint8ClampedArray(1024);for(let e=0;e<256;e++){const i=e/255;let s,l,c;if(i<.25){const h=i/.25;s=48+h*20,l=18+h*100,c=120+h*135}else if(i<.5){const h=(i-.25)/.25;s=68-h*40,l=118+h*120,c=255-h*80}else if(i<.75){const h=(i-.5)/.25;s=28+h*200,l=238-h*40,c=175-h*130}else{const h=(i-.75)/.25;s=228+h*27,l=198-h*160,c=45-h*40}const f=e*4;r[f]=Math.max(0,Math.min(255,Math.round(s))),r[f+1]=Math.max(0,Math.min(255,Math.round(l))),r[f+2]=Math.max(0,Math.min(255,Math.round(c))),r[f+3]=255}return r}const qr=pC(),mC=V.memo(function({eegData:e}){const i=V.useRef(null),s=V.useRef(0),l=V.useRef(0),c=V.useRef(window.devicePixelRatio||1),f=V.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),h=V.useRef(!0),m=V.useRef(new Float64Array(ls)),p=V.useRef([]),x=V.useRef(0),g=V.useRef(0),v=V.useRef(400),y=V.useRef(-60),M=V.useRef(1e-30),A=V.useRef(null),[_,S]=V.useState(-1),[R,w]=V.useState(!1),N=V.useMemo(()=>new ds(ls,Pt),[]),H=V.useMemo(()=>{const T=Pt/ls;return Math.min(Math.ceil(Z_/T)+1,(ls>>1)+1)},[]);V.useEffect(()=>{const T=i.current;if(!T)return;const O=T.getContext("2d",{alpha:!1}),J=new ResizeObserver(ae=>{const D=ae[0];if(!D)return;const z=window.devicePixelRatio||1;c.current=z;const{width:te,height:le}=D.contentRect;f.current={w:te,h:le,pw:Math.round(te*z),ph:Math.round(le*z),dpr:z},h.current=!0;const _e=Math.max(200,Math.round(te));_e!==v.current&&(v.current=_e,p.current=[],x.current=0,g.current=0,M.current=1e-30),A.current=null});J.observe(T);let G=null,q=0,K=0;const Y=()=>{const{w:ae,h:D,pw:z,ph:te}=f.current;if(ae===0||D===0){s.current=requestAnimationFrame(Y);return}if(h.current&&(h.current=!1,T.width=z,T.height=te,G=null),O.setTransform(c.current,0,0,c.current,0,0),l.current++,!R&&l.current%K_===0){const le=e.buffers.current,_e=e.writeIndex.current,I=e.samplesInBuffer.current;if(le&&I>=ls){let j;if(_===-1){const ne=m.current,W=e.bufferSize,re=(_e-ls+W)%W;for(let X=0;X<ls;X++){let ee=0;const ge=(re+X)%W;for(let Q=0;Q<wt;Q++)ee+=le[Q][ge];ne[X]=ee/wt}j=N.analyse(ne,0)}else j=N.analyseRing(le[_],_e,I);if(j){const ne=v.current,W=p.current,re=x.current;let X;W.length<ne?(X=new Float64Array(H),W.push(X),g.current=W.length):X=W[re];for(let ee=0;ee<H;ee++)X[ee]=j.psd[ee];x.current=(re+1)%ne;for(let ee=1;ee<H;ee++)X[ee]>M.current&&(M.current=X[ee])}}}L(O,ae,D,G,q,K,(le,_e,I)=>{G=le,q=_e,K=I}),s.current=requestAnimationFrame(Y)};return s.current=requestAnimationFrame(Y),()=>{cancelAnimationFrame(s.current),J.disconnect()}},[e,_,R,N,H]);function L(T,O,J,G,q,K,Y){T.fillStyle="#0d1117",T.fillRect(0,0,O,J);const ae=g.current;if(ae<2){T.fillStyle="#4b5563",T.font="13px monospace",T.textAlign="center",T.fillText("Collecting spectrogram data…",O/2,J/2);return}const D=44,z=12,te=8,le=22,_e=O-D-z,I=J-te-le,j=y.current,ne=M.current,W=p.current,re=x.current,X=ae,ee=H-1,ge=X,Q=ee;let be=G;(!be||q!==ge||K!==Q)&&(be=T.createImageData(ge,Q));const Re=be.data,ze=1/-j,Ue=Math.log10;for(let B=0;B<X;B++){const C=ae<v.current?B:(re+B)%ae,$=W[C];for(let ye=0;ye<ee;ye++){const Te=$[ye+1];let je=(10*Ue((Te||1e-30)/ne)-j)*ze;je<0?je=0:je>1&&(je=1);const Ye=(je*255+.5|0)*4,Ne=((ee-1-ye)*ge+B)*4;Re[Ne]=qr[Ye],Re[Ne+1]=qr[Ye+1],Re[Ne+2]=qr[Ye+2],Re[Ne+3]=255}}T.save(),T.imageSmoothingEnabled=!1,T.putImageData(be,0,0),T.drawImage(T.canvas,0,0,ge,Q,D,te,_e,I),T.fillStyle="#0d1117",T.fillRect(0,0,D,te+I),T.restore(),Y(be,ge,Q);const we=Pt/ls;T.fillStyle="#8b949e",T.font="9px monospace",T.textAlign="right";const Be=I/ee;for(const B of[5,10,20,30,40,50]){if(B>Z_)continue;const C=Math.round(B/we)-1;if(C<0||C>=ee)continue;const $=te+(ee-1-C)*Be;T.fillText(`${B}`,D-4,$+3)}T.save(),T.translate(10,te+I/2),T.rotate(-Math.PI/2),T.textAlign="center",T.fillStyle="#8b949e",T.font="9px monospace",T.fillText("Hz",0,0),T.restore();const Fe=X*K_/60;T.textAlign="center",T.fillStyle="#8b949e",T.font="9px monospace";const qe=Fe>30?10:Fe>10?5:2;for(let B=0;B<=Fe;B+=qe){const C=D+B/Fe*_e;T.fillText(`-${(Fe-B).toFixed(0)}s`,C,J-4)}T.fillText("now",D+_e,J-4);const k=8,st=O-z+2,rt=te,lt=Math.round(I);let He=A.current;if(!He||He.h!==lt){const B=T.createImageData(k,lt),C=B.data;for(let $=0;$<lt;$++){const Te=((1-$/lt)*255+.5|0)*4,ve=qr[Te],je=qr[Te+1],Oe=qr[Te+2];for(let Ye=0;Ye<k;Ye++){const nt=($*k+Ye)*4;C[nt]=ve,C[nt+1]=je,C[nt+2]=Oe,C[nt+3]=255}}He={img:B,h:lt},A.current=He}T.putImageData(He.img,Math.round(st*c.current),Math.round(rt*c.current)),T.fillStyle="#8b949e",T.font="8px monospace",T.textAlign="left",T.fillText("0",st+k+2,rt+6),T.fillText(`${j}`,st+k+2,rt+lt),T.fillText("dB",st+k+2,rt+lt/2+3)}const F=_===-1?"Avg":`Ch ${_+1}`;return b.jsxs("div",{className:"spectrogram-panel",children:[b.jsxs("div",{className:"spectrogram-toolbar",children:[b.jsxs("span",{className:"spectrogram-title",children:["Spectrogram"," ",b.jsx("small",{style:{color:"var(--text-dim)",fontWeight:400},children:F})]}),b.jsxs("div",{className:"spectrogram-channels",children:[b.jsx("button",{className:`sp-ch${_===-1?" active":""}`,onClick:()=>S(-1),children:"Avg"}),Array.from({length:wt},(T,O)=>b.jsx("button",{className:`sp-ch${_===O?" active":""}`,onClick:()=>S(O),children:O+1},O))]}),b.jsx("div",{className:"spectrogram-ctrls",children:b.jsx("button",{className:`btn${R?" active":""}`,onClick:()=>w(T=>!T),children:R?"▶":"⏸"})})]}),b.jsxs("div",{className:"spectrogram-canvas-wrap",children:[b.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}}),R&&b.jsx("div",{className:"spectral-paused",children:"PAUSED"})]})]})});function gC(r,e,i,s){if(r<=0)return 0;const l=r/i,c=1/(1+Math.pow(l,2*s)),f=e/r,h=1/(1+Math.pow(f,2*s));return Math.sqrt(c*h)}const vC=V.memo(function({enabled:e,lowcut:i,highcut:s,order:l=5}){const c=V.useRef(null),f=V.useRef(window.devicePixelRatio||1),h=V.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),m=V.useRef(!0),p=V.useCallback(()=>{const x=c.current;if(!x)return;const g=x.getContext("2d",{alpha:!1});if(!g)return;const{w:v,h:y}=h.current;if(v===0||y===0)return;g.setTransform(f.current,0,0,f.current,0,0),g.fillStyle="#0d1117",g.fillRect(0,0,v,y);const M=42,A=12,_=16,S=22,R=v-M-A,w=y-_-S,N=Pt/2,H=Math.min(N,125);if(e){const F=M+Math.max(i,0)/H*R,T=M+Math.min(s,H)/H*R;g.fillStyle="rgba(63, 185, 80, 0.08)",g.fillRect(F,_,T-F,w),g.strokeStyle="rgba(63, 185, 80, 0.5)",g.lineWidth=1,g.setLineDash([4,3]);for(const G of[i,s]){const q=M+G/H*R;g.beginPath(),g.moveTo(q,_),g.lineTo(q,_+w),g.stroke()}g.setLineDash([]),g.fillStyle="rgba(63, 185, 80, 0.8)",g.font="9px monospace",g.textAlign="center";const O=M+i/H*R,J=M+s/H*R;g.fillText(`${i} Hz`,O,_-4),g.fillText(`${s} Hz`,J,_-4)}g.strokeStyle="rgba(48,54,61,0.45)",g.lineWidth=.5;for(const F of[0,-10,-20,-30,-40,-50,-60]){const T=_+-F/60*w;g.beginPath(),g.moveTo(M,T),g.lineTo(M+R,T),g.stroke()}for(const F of[1,5,10,20,30,50,100]){if(F>H)continue;const T=M+F/H*R;g.beginPath(),g.moveTo(T,_),g.lineTo(T,_+w),g.stroke()}if(e){g.beginPath();const F=Math.max(200,Math.round(R));for(let T=0;T<=F;T++){const O=T/F*H,J=gC(O,i,s,l),G=20*Math.log10(Math.max(J,1e-6)),q=Math.max(-60,G),K=_+-q/60*w,Y=M+O/H*R;T===0?g.moveTo(Y,K):g.lineTo(Y,K)}g.strokeStyle="#3fb950",g.lineWidth=2,g.lineJoin="round",g.stroke(),g.lineTo(M+R,_+w),g.lineTo(M,_+w),g.closePath(),g.fillStyle="rgba(63, 185, 80, 0.06)",g.fill()}else g.strokeStyle="rgba(139, 148, 158, 0.6)",g.lineWidth=1.5,g.setLineDash([6,4]),g.beginPath(),g.moveTo(M,_),g.lineTo(M+R,_),g.stroke(),g.setLineDash([]),g.fillStyle="#6e7681",g.font="12px monospace",g.textAlign="center",g.fillText("Filter OFF — unfiltered passthrough",M+R/2,_+w/2);const L=_+3/60*w;g.strokeStyle="rgba(210, 153, 34, 0.5)",g.lineWidth=.8,g.setLineDash([3,3]),g.beginPath(),g.moveTo(M,L),g.lineTo(M+R,L),g.stroke(),g.setLineDash([]),g.fillStyle="rgba(210, 153, 34, 0.7)",g.font="8px monospace",g.textAlign="right",g.fillText("-3 dB",M-4,L+3),g.fillStyle="#8b949e",g.font="9px monospace",g.textAlign="right";for(const F of[0,-20,-40,-60]){const T=_+-F/60*w;g.fillText(`${F}`,M-4,T+3)}g.save(),g.translate(10,_+w/2),g.rotate(-Math.PI/2),g.textAlign="center",g.fillStyle="#8b949e",g.font="9px monospace",g.fillText("dB",0,0),g.restore(),g.fillStyle="#8b949e",g.font="9px monospace",g.textAlign="center";for(const F of[1,10,20,30,50,100])F>H||g.fillText(`${F}`,M+F/H*R,y-4);g.fillText("Hz",M+R+2,y-4),e&&(g.fillStyle="#3fb950",g.font="bold 10px monospace",g.textAlign="right",g.fillText(`Butterworth order ${l} · ${i}–${s} Hz`,M+R,_+w+14))},[e,i,s,l]);return V.useEffect(()=>{const x=c.current;if(!x)return;const g=new ResizeObserver(v=>{const y=v[0];if(!y)return;const M=window.devicePixelRatio||1;f.current=M;const{width:A,height:_}=y.contentRect;h.current={w:A,h:_,pw:Math.round(A*M),ph:Math.round(_*M),dpr:M},x.width=Math.round(A*M),x.height=Math.round(_*M),m.current=!0,p()});return g.observe(x),m.current=!0,p(),()=>g.disconnect()},[p]),b.jsxs("div",{className:"filter-preview-panel",children:[b.jsxs("div",{className:"filter-preview-toolbar",children:[b.jsx("span",{className:"filter-preview-title",children:"Filter Response"}),b.jsx("span",{className:"filter-preview-meta",children:e?`Bandpass ${i}–${s} Hz · Order ${l}`:"Disabled"})]}),b.jsx("div",{className:"filter-preview-canvas-wrap",children:b.jsx("canvas",{ref:c,style:{display:"block",width:"100%",height:"100%"}})})]})}),_C=500;function xC(r,e,i,s){const l=Math.min(e,Pt*2);let c=0,f=0,h=1/0,m=-1/0,p=0,x=null;for(let N=e-l;N<e;N++){const H=(i-e+N+s)%s,L=r[H];c+=L,f+=L*L,L<h&&(h=L),L>m&&(m=L),x!==null&&(x>=0&&L<0||x<0&&L>=0)&&p++,x=L}const g=l>0?c/l:0,v=l>1?f/l-g*g:0,y=Math.sqrt(Math.max(0,v)),M=Math.sqrt(f/Math.max(1,l)),A=m-h;let _=0,S=0;for(let N=e-l;N<e;N++){const H=(i-e+N+s)%s,L=r[H]-g,F=L*L;_+=F*L,S+=F*F}const R=y>1e-10?_/l/(y*y*y):0,w=y>1e-10?S/l/(y*y*y*y)-3:0;return{ch:0,mean:g,rms:M,pp:A,min:h===1/0?0:h,max:m===-1/0?0:m,std:y,variance:v,skewness:R,kurtosis:w,zeroCross:p}}const SC=V.memo(function({eegData:e}){const[i,s]=V.useState([]),[l,c]=V.useState("ch"),[f,h]=V.useState(!0),m=V.useRef(void 0);V.useEffect(()=>{function y(){const M=e.buffers.current,A=e.writeIndex.current,_=e.samplesInBuffer.current,S=e.bufferSize;if(!M||_<10)return;const R=[];for(let w=0;w<wt;w++){const N=xC(M[w],_,A,S);N.ch=w,R.push(N)}s(R)}return y(),m.current=setInterval(y,_C),()=>clearInterval(m.current)},[e]);const p=V.useCallback(y=>{c(M=>M===y?(h(A=>!A),y):(h(!0),y))},[]),x=[...i].sort((y,M)=>{const A=y[l],_=M[l];return f?A-_:_-A}),g=V.useCallback(()=>{const M=[["Channel","Mean","RMS","Std","Variance","Peak-Peak","Min","Max","Skewness","Kurtosis","Zero-Crossings"].join(",")];for(const R of x)M.push([`Ch ${R.ch+1}`,R.mean.toFixed(4),R.rms.toFixed(4),R.std.toFixed(4),R.variance.toFixed(4),R.pp.toFixed(4),R.min.toFixed(4),R.max.toFixed(4),R.skewness.toFixed(4),R.kurtosis.toFixed(4),R.zeroCross.toString()].join(","));const A=new Blob([M.join(`
`)],{type:"text/csv"}),_=URL.createObjectURL(A),S=document.createElement("a");S.href=_,S.download=`pieeg_stats_${new Date().toISOString().replace(/[:.]/g,"-")}.csv`,S.click(),URL.revokeObjectURL(_)},[x]),v=[{key:"ch",label:"Ch",unit:"",precision:0},{key:"mean",label:"Mean",unit:"µV",precision:2},{key:"rms",label:"RMS",unit:"µV",precision:2},{key:"std",label:"Std",unit:"µV",precision:2},{key:"pp",label:"P-P",unit:"µV",precision:1},{key:"min",label:"Min",unit:"µV",precision:1},{key:"max",label:"Max",unit:"µV",precision:1},{key:"skewness",label:"Skew",unit:"",precision:2},{key:"kurtosis",label:"Kurt",unit:"",precision:2},{key:"zeroCross",label:"ZX",unit:"/2s",precision:0}];return b.jsxs("div",{className:"stats-panel",children:[b.jsxs("div",{className:"stats-toolbar",children:[b.jsx("span",{className:"stats-title",children:"Signal Statistics"}),b.jsxs("span",{className:"stats-meta",children:["16 channels · ",Pt," Hz · 2s window"]}),b.jsx("button",{className:"btn stats-btn-export",onClick:g,title:"Download stats as CSV",children:"⬇ CSV"})]}),b.jsx("div",{className:"stats-table-wrap",children:b.jsxs("table",{className:"stats-table",children:[b.jsx("thead",{children:b.jsx("tr",{children:v.map(y=>b.jsxs("th",{onClick:()=>p(y.key),className:l===y.key?"sorted":"",title:y.unit?`${y.label} (${y.unit})`:y.label,children:[y.label,l===y.key&&b.jsx("span",{className:"sort-arrow",children:f?" ▲":" ▼"})]},y.key))})}),b.jsx("tbody",{children:x.map(y=>b.jsxs("tr",{children:[b.jsxs("td",{className:"stats-ch-cell",children:[b.jsx("span",{className:"stats-ch-dot",style:{background:wu[y.ch]}}),y.ch+1]}),b.jsx("td",{children:y.mean.toFixed(2)}),b.jsx("td",{children:y.rms.toFixed(2)}),b.jsx("td",{children:y.std.toFixed(2)}),b.jsx("td",{children:y.pp.toFixed(1)}),b.jsx("td",{children:y.min.toFixed(1)}),b.jsx("td",{children:y.max.toFixed(1)}),b.jsx("td",{children:y.skewness.toFixed(2)}),b.jsx("td",{children:y.kurtosis.toFixed(2)}),b.jsx("td",{children:y.zeroCross})]},y.ch))})]})})]})});function yC(){const[r,e]=V.useState(null),[i,s]=V.useState(!1),[l,c]=V.useState(!1),[f,h]=V.useState(!1);if(V.useEffect(()=>{fetch("/api/update/check").then(v=>v.json()).then(v=>{v.error||e(v),s(!0)}).catch(()=>s(!0))},[]),l||!i||!(r!=null&&r.update_available))return null;const m=r.install_method==="git",p=/win/i.test(navigator.platform),x=m?`git pull origin main
pip install -e .`:"pip install --upgrade pieeg-server",g=p?".\\pieeg-server.cmd":"pieeg-server";return b.jsxs("div",{className:"update-banner",children:[b.jsxs("div",{className:"update-banner-content",children:[b.jsxs("span",{className:"update-banner-text",children:["Update available: ",b.jsx("strong",{children:r.current_version})," →"," ",b.jsx("strong",{children:r.latest_version})]}),b.jsx("button",{className:"btn update-btn",onClick:()=>h(v=>!v),children:f?"Hide instructions":"How to update"}),b.jsx("button",{className:"update-dismiss",onClick:()=>c(!0),title:"Dismiss",children:"✕"})]}),f&&b.jsxs("div",{className:"update-howto",children:[b.jsx("p",{children:m?"Run these commands in your project folder:":"Run this command:"}),b.jsx("pre",{children:b.jsx("code",{children:x})}),b.jsx("p",{children:"Then restart the server:"}),b.jsx("pre",{children:b.jsx("code",{children:g})})]})]})}const MC=[{key:"Space",desc:"Pause / Resume"},{key:"R",desc:"Start / Stop recording"},{key:"F",desc:"Toggle FFT panel"},{key:"G",desc:"Toggle Spectrogram"},{key:"S",desc:"Toggle Statistics panel"},{key:"V",desc:"Toggle XR / VR view"},{key:"P",desc:"Toggle performance monitor"},{key:"?",desc:"Show this help"},{key:"Esc",desc:"Close overlay / panel"}];function bC(){const[r,e]=V.useState(!1);return V.useEffect(()=>{function i(s){const l=s.target.tagName;l==="INPUT"||l==="SELECT"||l==="TEXTAREA"||((s.key==="?"||s.shiftKey&&s.code==="Slash")&&(s.preventDefault(),e(c=>!c)),s.code==="Escape"&&r&&e(!1))}return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[r]),r?b.jsx("div",{className:"modal-overlay",onClick:()=>e(!1),children:b.jsxs("div",{className:"shortcut-card",onClick:i=>i.stopPropagation(),children:[b.jsx("h2",{children:"Keyboard Shortcuts"}),b.jsx("div",{className:"shortcut-grid",children:MC.map(i=>b.jsxs("div",{className:"shortcut-row",children:[b.jsx("kbd",{children:i.key}),b.jsx("span",{children:i.desc})]},i.key))}),b.jsx("button",{className:"btn shortcut-close",onClick:()=>e(!1),children:"Close"})]})}):null}const Hx=256,EC=new ds(Hx,Pt);function TC(r){const{buffers:e,writeIndex:i,samplesInBuffer:s,bufferSize:l}=r,c=i.current,f=s.current;if(f<Hx)return"EEG: insufficient data (buffering).";const h=["## Live EEG Snapshot"],m={};for(const x of nn)m[x.name]=[];let p=0;for(let x=0;x<wt;x++){const g=EC.analyseRing(e.current[x],c,f);if(!g)continue;p++;const v=g.bandPowers;for(const A of nn)m[A.name].push(v[A.name]??0);const y=g.dominantFrequency.toFixed(1),M=g.totalPower.toFixed(1);h.push(`Ch${x+1}: peak ${y} Hz, power ${M} µV²`)}if(p>0){h.push(`
### Average Band Powers (µV²)`);for(const x of nn){const v=m[x.name].reduce((y,M)=>y+M,0)/p;h.push(`${x.label}: ${v.toFixed(2)}`)}}return h.push(`
Channels: ${p}/${wt} active, ${Pt} Hz sample rate`),h.join(`
`)}const Q_="You are an EEG research assistant embedded in the PiEEG-16 dashboard. You can see a live snapshot of the user's EEG spectral data (band powers, dominant frequencies). Answer questions about the data, suggest interpretations, and help with EEG analysis. Be concise. Remember: this is a research tool, not a medical device.",J_={endpoint:"https://api.openai.com/v1/chat/completions",apiKey:"",model:"gpt-4o-mini"},Gx="pieeg-chat-config";function AC(){try{const r=localStorage.getItem(Gx);if(r){const e=JSON.parse(r);return{...J_,...e}}}catch{}return{...J_}}function RC(r){const e={endpoint:r.endpoint,model:r.model};localStorage.setItem(Gx,JSON.stringify(e))}function CC(r){const[e,i]=V.useState([]),[s,l]=V.useState(!1),[c,f]=V.useState(null),[h,m]=V.useState(AC),p=V.useRef(null),x=V.useCallback(y=>{m(y),RC(y)},[]),g=V.useCallback(()=>{p.current&&p.current.abort(),i([]),f(null),l(!1)},[]),v=V.useCallback(y=>{if(!y.trim()||s)return;const M=TC(r),A={role:"user",content:y.trim()};if(i(R=>[...R,A]),f(null),!h.apiKey){const R={role:"assistant",content:`**Eco mode** — no API key configured. Here's what the AI would see:

---
**System prompt:**
${Q_}

**EEG context:**
${M}

**Your message:**
${y.trim()}
---

Add your API key & endpoint in ⚙ Settings to enable AI responses.`};i(w=>[...w,R]);return}const _=new AbortController;p.current=_,l(!0);const S=[{role:"system",content:`${Q_}

${M}`},...e.slice(-20),A];(async()=>{var R,w,N,H;try{const L={"Content-Type":"application/json"};h.apiKey&&(L.Authorization=`Bearer ${h.apiKey}`);const F=await fetch(h.endpoint,{method:"POST",headers:L,body:JSON.stringify({model:h.model,messages:S,stream:!0}),signal:_.signal});if(!F.ok){const q=await F.text();throw new Error(`${F.status}: ${q.slice(0,200)}`)}const T=(R=F.body)==null?void 0:R.getReader();if(!T)throw new Error("No response body");const O=new TextDecoder;let J="",G="";for(i(q=>[...q,{role:"assistant",content:""}]);;){const{done:q,value:K}=await T.read();if(q)break;J+=O.decode(K,{stream:!0});const Y=J.split(`
`);J=Y.pop()??"";for(const ae of Y){const D=ae.trim();if(!D.startsWith("data: "))continue;const z=D.slice(6);if(z==="[DONE]")break;try{const le=(H=(N=(w=JSON.parse(z).choices)==null?void 0:w[0])==null?void 0:N.delta)==null?void 0:H.content;if(le){G+=le;const _e=G;i(I=>{const j=[...I];return j[j.length-1]={role:"assistant",content:_e},j})}}catch{}}}}catch(L){if(L.name==="AbortError")return;f(L.message)}finally{l(!1),p.current=null}})()},[h,r,e,s]);return{messages:e,streaming:s,error:c,config:h,setConfig:x,send:v,clear:g}}const wC=V.memo(function({eegData:e,open:i,onClose:s}){const{messages:l,streaming:c,error:f,config:h,setConfig:m,send:p,clear:x}=CC(e),[g,v]=V.useState(""),[y,M]=V.useState(!1),A=V.useRef(null),_=V.useRef(null);V.useEffect(()=>{var w;(w=A.current)==null||w.scrollIntoView({behavior:"smooth"})},[l]),V.useEffect(()=>{i&&setTimeout(()=>{var w;return(w=_.current)==null?void 0:w.focus()},150)},[i]);const S=V.useCallback(()=>{g.trim()&&(p(g),v(""))},[g,p]),R=V.useCallback(w=>{w.key==="Enter"&&!w.shiftKey&&(w.preventDefault(),S())},[S]);return b.jsxs("div",{className:`chat-panel${i?" open":""}`,children:[b.jsxs("div",{className:"chat-header",children:[b.jsxs("span",{className:"chat-title",children:["🧠 EEG Assistant",!h.apiKey&&b.jsx("span",{className:"chat-eco-badge",children:"ECO"})]}),b.jsxs("div",{className:"chat-header-actions",children:[b.jsx("button",{className:"chat-icon-btn",onClick:()=>M(w=>!w),title:"Settings",children:"⚙"}),b.jsx("button",{className:"chat-icon-btn",onClick:x,title:"Clear chat",children:"🗑"}),b.jsx("button",{className:"chat-icon-btn",onClick:s,title:"Close",children:"✕"})]})]}),y&&b.jsx(NC,{config:h,onChange:m,onClose:()=>M(!1)}),b.jsxs("div",{className:"chat-messages",children:[l.length===0&&b.jsx("div",{className:"chat-empty",children:h.apiKey?"Ask anything about your live EEG data.":`No API key — running in eco mode.
Messages will show the context snapshot the AI would receive.

Open ⚙ Settings to configure your provider.`}),l.map((w,N)=>b.jsx("div",{className:`chat-msg chat-msg-${w.role}`,children:b.jsx("div",{className:"chat-msg-content",children:w.content||"…"})},N)),f&&b.jsx("div",{className:"chat-error",children:f}),b.jsx("div",{ref:A})]}),b.jsxs("div",{className:"chat-input-area",children:[b.jsx("textarea",{ref:_,className:"chat-input",value:g,onChange:w=>v(w.target.value),onKeyDown:R,placeholder:c?"Waiting for response…":"Ask about your EEG…",rows:1,disabled:c}),b.jsx("button",{className:"chat-send-btn",onClick:S,disabled:c||!g.trim(),children:c?"…":"↑"})]})]})});function NC({config:r,onChange:e,onClose:i}){const[s,l]=V.useState(r.endpoint),[c,f]=V.useState(r.apiKey),[h,m]=V.useState(r.model),p=()=>{e({endpoint:s.trim(),apiKey:c.trim(),model:h.trim()}),i()};return b.jsxs("div",{className:"chat-settings",children:[b.jsxs("label",{children:["Endpoint",b.jsx("input",{type:"url",value:s,onChange:x=>l(x.target.value),placeholder:"https://api.openai.com/v1/chat/completions"})]}),b.jsxs("label",{children:["API Key",b.jsx("input",{type:"password",value:c,onChange:x=>f(x.target.value),placeholder:"sk-… (leave empty for eco mode)",autoComplete:"off"})]}),b.jsxs("label",{children:["Model",b.jsx("input",{type:"text",value:h,onChange:x=>m(x.target.value),placeholder:"gpt-4o-mini, claude-3-haiku, llama3, …"})]}),b.jsxs("div",{className:"chat-settings-hint",children:["Works with any OpenAI-compatible endpoint:",b.jsx("br",{}),"OpenAI · Anthropic · Ollama · LM Studio · Groq · Together"]}),b.jsxs("div",{className:"chat-settings-actions",children:[b.jsx("button",{className:"btn",onClick:p,children:"Save"}),b.jsx("button",{className:"btn",onClick:i,children:"Cancel"})]})]})}const DC="modulepreload",UC=function(r){return"/"+r},$_={},ex=function(e,i,s){let l=Promise.resolve();if(i&&i.length>0){let f=function(p){return Promise.all(p.map(x=>Promise.resolve(x).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),m=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));l=f(i.map(p=>{if(p=UC(p),p in $_)return;$_[p]=!0;const x=p.endsWith(".css"),g=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${g}`))return;const v=document.createElement("link");if(v.rel=x?"stylesheet":DC,x||(v.as="script"),v.crossOrigin="",v.href=p,m&&v.setAttribute("nonce",m),document.head.appendChild(v),x)return new Promise((y,M)=>{v.addEventListener("load",y),v.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${p}`)))})}))}function c(f){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=f,window.dispatchEvent(h),!h.defaultPrevented)throw f}return l.then(f=>{for(const h of f||[])h.status==="rejected"&&c(h.reason);return e().catch(c)})},fl=["#3291ff","#00c853","#f5a623","#ee4444","#bc8cff","#39d2c0"],Vx=`// Build a TF.js Sequential model for EEG classification.
// Available variables:
//   tf         – the TensorFlow.js library
//   numClasses – number of target classes
//   inputShape – [channels, epochSamples]
//
// Return: a compiled tf.Sequential model.

const model = tf.sequential();

model.add(tf.layers.conv1d({
  inputShape: [inputShape[1], inputShape[0]],  // [time, channels]
  filters: 16,
  kernelSize: 5,
  activation: "relu",
}));
model.add(tf.layers.maxPooling1d({ poolSize: 2 }));
model.add(tf.layers.conv1d({ filters: 32, kernelSize: 3, activation: "relu" }));
model.add(tf.layers.globalAveragePooling1d());
model.add(tf.layers.dropout({ rate: 0.3 }));
model.add(tf.layers.dense({ units: numClasses, activation: "softmax" }));

model.compile({
  optimizer: tf.train.adam(0.001),
  loss: "categoricalCrossentropy",
  metrics: ["accuracy"],
});

return model;
`,LC="pieeg_train",OC=1,to="datasets",tx="models";function kx(){return new Promise((r,e)=>{const i=indexedDB.open(LC,OC);i.onupgradeneeded=()=>{const s=i.result;s.objectStoreNames.contains(to)||s.createObjectStore(to,{keyPath:"id",autoIncrement:!0}),s.objectStoreNames.contains(tx)||s.createObjectStore(tx,{keyPath:"id",autoIncrement:!0})},i.onsuccess=()=>r(i.result),i.onerror=()=>e(i.error)})}async function PC(r){const i=(await kx()).transaction(to,"readwrite"),s={...r,classes:r.classes.map(l=>({...l,epochs:l.epochs.map(c=>Array.from(c))})),savedAt:Date.now()};return i.objectStore(to).put(s),new Promise((l,c)=>{i.oncomplete=()=>l(),i.onerror=()=>c(i.error)})}async function FC(){const i=(await kx()).transaction(to,"readonly").objectStore(to);return new Promise(s=>{const l=i.openCursor(null,"prev");l.onsuccess=()=>{const c=l.result;if(c){const f=c.value;s({...f,classes:f.classes.map(h=>({...h,epochs:h.epochs.map(m=>new Float32Array(m))}))})}else s(null)},l.onerror=()=>s(null)})}function IC(r){const[e,i]=V.useState([{id:0,name:"Left",color:fl[0],epochs:[]},{id:1,name:"Right",color:fl[1],epochs:[]},{id:2,name:"Rest",color:fl[2],epochs:[]}]),[s,l]=V.useState(Array.from({length:wt},(W,re)=>re)),[c,f]=V.useState(2),[h,m]=V.useState(Vx),p=V.useRef(null),[x,g]=V.useState(!1),[v,y]=V.useState(!1),[M,A]=V.useState([]),[_,S]=V.useState(null),[R,w]=V.useState(!1),[N,H]=V.useState(null),L=V.useRef(null),[F,T]=V.useState([]),[O,J]=V.useState(.6),G=V.useCallback(W=>{const re=c*Pt,X=s.length,ee=new Float32Array(X*re),{buffers:ge,writeIndex:Q,samplesInBuffer:be,bufferSize:Re}=r;if(!(be.current<re)){for(let Ue=0;Ue<X;Ue++){const we=s[Ue],Be=ge.current[we];for(let Fe=0;Fe<re;Fe++){const qe=(Q.current-re+Fe+Re)%Re;ee[Ue*re+Fe]=Be[qe]}}i(Ue=>Ue.map(we=>we.id===W?{...we,epochs:[...we.epochs,ee]}:we))}},[r,c,s]),q=V.useCallback(W=>{i(re=>re.map(X=>X.id===W?{...X,epochs:[]}:X))},[]),K=V.useCallback(()=>{i(W=>W.map(re=>({...re,epochs:[]})))},[]),Y=V.useCallback(()=>{i(W=>{const re=W.length;return[...W,{id:re,name:`Class ${re+1}`,color:fl[re%fl.length],epochs:[]}]})},[]),ae=V.useCallback(W=>{i(re=>re.filter(X=>X.id!==W))},[]),D=V.useCallback((W,re)=>{i(X=>X.map(ee=>ee.id===W?{...ee,name:re}:ee))},[]),z=V.useCallback(async()=>{const W={classes:e,channels:s,epochSamples:c*Pt,sampleRate:Pt};await PC(W)},[e,s,c]),te=V.useCallback(async()=>{const W=await FC();W&&(i(W.classes),l(W.channels),f(W.epochSamples/W.sampleRate))},[]),le=V.useCallback(async(W=50)=>{S(null),A([]);const re=await ex(()=>import("./index-CG_PsM5Q.js"),[]),X=e.length,ee=c*Pt,ge=s.length,Q=e.reduce((be,Re)=>be+Re.epochs.length,0);if(Q<X*2){S(`Need at least 2 epochs per class (have ${Q} total)`);return}try{y(!0);const be=[ge,ee],ze=new Function("tf","numClasses","inputShape",h)(re,X,be);p.current=ze;const Ue=[],we=[];for(let qe=0;qe<e.length;qe++)for(const k of e[qe].epochs){const st=[];for(let rt=0;rt<ee;rt++){const lt=[];for(let He=0;He<ge;He++)lt.push(k[He*ee+rt]);st.push(lt)}Ue.push(st),we.push(qe)}const Be=re.tensor3d(Ue),Fe=re.oneHot(re.tensor1d(we,"int32"),X);await ze.fit(Be,Fe,{epochs:W,validationSplit:.2,shuffle:!0,callbacks:{onEpochEnd:(qe,k)=>{A(st=>[...st,{epoch:qe,loss:k.loss,accuracy:k.acc}])}}}),Be.dispose(),Fe.dispose(),g(!0),T(qe=>qe.length===0?e.map(k=>({classId:k.id,kind:"log",value:k.name,enabled:!0})):qe)}catch(be){S(String(be))}finally{y(!1)}},[e,c,s,h]),_e=V.useCallback(async()=>{if(!x||!p.current)return;const W=await ex(()=>import("./index-CG_PsM5Q.js"),[]),re=p.current;w(!0);const X=c*Pt,ee=s.length;L.current=setInterval(()=>{const{buffers:ge,writeIndex:Q,samplesInBuffer:be,bufferSize:Re}=r;if(be.current<X)return;const ze=[];for(let k=0;k<X;k++){const st=[];for(let rt=0;rt<ee;rt++){const lt=s[rt],He=(Q.current-X+k+Re)%Re;st.push(ge.current[lt][He])}ze.push(st)}const Ue=W.tensor3d([ze]),we=re.predict(Ue),Be=Array.from(we.dataSync());Ue.dispose(),we.dispose();let Fe=0;for(let k=1;k<Be.length;k++)Be[k]>Be[Fe]&&(Fe=k);const qe={classId:Fe,confidence:Be[Fe],allConfidences:Be};if(H(qe),qe.confidence>=O){const k=F.find(st=>st.classId===Fe&&st.enabled);k&&j(k,qe)}},250)},[x,c,s,r,O,F]),I=V.useCallback(()=>{L.current&&(clearInterval(L.current),L.current=null),w(!1),H(null)},[]);function j(W,re){switch(W.kind){case"log":console.log(`[BCI] ${W.value} (${(re.confidence*100).toFixed(1)}%)`);break;case"key":window.dispatchEvent(new KeyboardEvent("keydown",{key:W.value}));break;case"websocket":window.dispatchEvent(new CustomEvent("bci-action",{detail:{class:W.value,confidence:re.confidence}}));break;case"osc":window.dispatchEvent(new CustomEvent("bci-osc",{detail:{path:W.value,confidence:re.confidence}}));break}}const ne=V.useCallback((W,re)=>{T(X=>X.map(ee=>ee.classId===W?{...ee,...re}:ee))},[]);return{classes:e,selectedChannels:s,setSelectedChannels:l,epochDuration:c,setEpochDuration:f,captureEpoch:G,clearClass:q,clearAll:K,addClass:Y,removeClass:ae,renameClass:D,save:z,load:te,modelCode:h,setModelCode:m,modelReady:x,training:v,trainMetrics:M,trainError:_,buildAndTrain:le,running:R,prediction:N,startInference:_e,stopInference:I,actions:F,setActions:T,setAction:ne,threshold:O,setThreshold:J}}function BC({train:r}){const{classes:e,selectedChannels:i,setSelectedChannels:s,epochDuration:l,setEpochDuration:c,captureEpoch:f,clearClass:h,clearAll:m,addClass:p,removeClass:x,renameClass:g,save:v,load:y}=r,[M,A]=V.useState(null),[_,S]=V.useState(null),R=V.useRef(null),w=V.useCallback(L=>{A(L),S(3);let F=3;const T=()=>{F--,F>0?(S(F),R.current=setTimeout(T,1e3)):(S(null),R.current=setTimeout(()=>{f(L),A(null)},l*1e3))};R.current=setTimeout(T,1e3)},[f,l]);V.useEffect(()=>()=>{R.current&&clearTimeout(R.current)},[]);const N=L=>{s(i.includes(L)?i.filter(F=>F!==L):[...i,L].sort((F,T)=>F-T))},H=e.reduce((L,F)=>L+F.epochs.length,0);return b.jsxs("div",{className:"train-capture",children:[b.jsxs("div",{className:"tc-settings",children:[b.jsxs("div",{className:"tc-setting",children:[b.jsx("label",{children:"Epoch duration"}),b.jsxs("select",{value:l,onChange:L=>c(parseFloat(L.target.value)),children:[b.jsx("option",{value:1,children:"1 s"}),b.jsx("option",{value:2,children:"2 s"}),b.jsx("option",{value:4,children:"4 s"})]})]}),b.jsxs("div",{className:"tc-setting",children:[b.jsxs("label",{children:["Channels (",i.length,"/",wt,")"]}),b.jsx("div",{className:"tc-ch-grid",children:Array.from({length:wt},(L,F)=>b.jsx("button",{className:`tc-ch${i.includes(F)?" on":""}`,onClick:()=>N(F),children:F+1},F))})]})]}),b.jsxs("div",{className:"tc-classes",children:[b.jsxs("div",{className:"tc-classes-header",children:[b.jsxs("h3",{children:["Classes (",e.length,")"]}),b.jsxs("div",{className:"tc-classes-actions",children:[b.jsx("button",{className:"btn btn-sm",onClick:p,disabled:e.length>=6,children:"+ Add"}),b.jsx("button",{className:"btn btn-sm",onClick:m,children:"Clear all"}),b.jsx("button",{className:"btn btn-sm",onClick:()=>v(),children:"Save"}),b.jsx("button",{className:"btn btn-sm",onClick:()=>y(),children:"Load"})]})]}),e.map(L=>b.jsxs("div",{className:`tc-class-card${M===L.id?" capturing":""}`,children:[b.jsx("div",{className:"tc-class-color",style:{background:L.color}}),b.jsx("input",{className:"tc-class-name",value:L.name,onChange:F=>g(L.id,F.target.value),maxLength:20}),b.jsxs("span",{className:"tc-class-count",children:[L.epochs.length," epochs"]}),b.jsxs("span",{className:"tc-class-time",children:[(L.epochs.length*l).toFixed(0),"s"]}),b.jsx("button",{className:"btn btn-capture",onClick:()=>w(L.id),disabled:M!==null,children:M===L.id?_!==null?_:"Recording...":"Capture"}),b.jsx("button",{className:"btn btn-sm btn-danger",onClick:()=>h(L.id),children:"Clear"}),e.length>2&&b.jsx("button",{className:"btn btn-sm btn-danger",onClick:()=>x(L.id),children:"x"})]},L.id))]}),b.jsxs("div",{className:"tc-summary",children:[b.jsxs("span",{children:[H," total epochs"]}),b.jsxs("span",{children:[(H*l).toFixed(0),"s of data"]}),b.jsxs("span",{children:[i.length," ch x ",l*Pt," samples"]})]})]})}function zC({train:r}){const{modelCode:e,setModelCode:i,modelReady:s,training:l,trainMetrics:c,trainError:f,buildAndTrain:h,classes:m}=r,[p,x]=V.useState(50),g=V.useRef(null);V.useEffect(()=>{const M=g.current;if(!M||c.length===0)return;const A=M.getContext("2d");if(!A)return;const _=window.devicePixelRatio||1,S=M.clientWidth,R=M.clientHeight;M.width=S*_,M.height=R*_,A.scale(_,_),A.clearRect(0,0,S,R);const w={l:40,r:12,t:12,b:24},N=S-w.l-w.r,H=R-w.t-w.b;A.strokeStyle="rgba(255,255,255,0.06)",A.lineWidth=1;for(let O=0;O<=4;O++){const J=w.t+H*O/4;A.beginPath(),A.moveTo(w.l,J),A.lineTo(w.l+N,J),A.stroke()}const L=c.length,F=N/Math.max(L-1,1),T=Math.max(...c.map(O=>O.loss),.01);A.strokeStyle="#ee4444",A.lineWidth=1.5,A.beginPath(),c.forEach((O,J)=>{const G=w.l+J*F,q=w.t+H-O.loss/T*H;J===0?A.moveTo(G,q):A.lineTo(G,q)}),A.stroke(),A.strokeStyle="#00c853",A.lineWidth=1.5,A.beginPath(),c.forEach((O,J)=>{const G=w.l+J*F,q=w.t+H-(O.accuracy??0)*H;J===0?A.moveTo(G,q):A.lineTo(G,q)}),A.stroke(),A.fillStyle="#a1a1a1",A.font="10px var(--mono)",A.textAlign="right",A.fillText("1.0",w.l-4,w.t+4),A.fillText("0.0",w.l-4,w.t+H+4),A.textAlign="center",A.fillText("Epoch",w.l+N/2,w.t+H+18),A.textAlign="right",A.fillStyle="#ee4444",A.fillText("loss",S-w.r-40,w.t+12),A.fillStyle="#00c853",A.fillText("acc",S-w.r,w.t+12)},[c]);const v=m.reduce((M,A)=>M+A.epochs.length,0),y=c.length>0?c[c.length-1]:null;return b.jsxs("div",{className:"train-model",children:[b.jsxs("div",{className:"tm-editor-wrap",children:[b.jsxs("div",{className:"tm-editor-header",children:[b.jsx("span",{children:"Model Architecture (TF.js)"}),b.jsx("button",{className:"btn btn-sm",onClick:()=>i(Vx),children:"Reset"})]}),b.jsx("textarea",{className:"tm-editor",value:e,onChange:M=>i(M.target.value),spellCheck:!1,autoCapitalize:"off",autoCorrect:"off"})]}),b.jsxs("div",{className:"tm-controls",children:[b.jsxs("div",{className:"tm-setting",children:[b.jsx("label",{children:"Training epochs"}),b.jsx("input",{type:"number",value:p,min:5,max:500,step:5,onChange:M=>x(parseInt(M.target.value)||50)})]}),b.jsx("button",{className:`btn btn-train${l?" training":""}`,onClick:()=>h(p),disabled:l||v<m.length*2,children:l?`Training ${c.length}/${p}...`:s?"Re-train":"Build & Train"}),s&&b.jsx("span",{className:"tm-ready-badge",children:"Model ready"})]}),f&&b.jsx("div",{className:"tm-error",children:f}),c.length>0&&b.jsxs("div",{className:"tm-chart-wrap",children:[b.jsx("canvas",{ref:g,className:"tm-chart"}),y&&b.jsxs("div",{className:"tm-metric-summary",children:[b.jsxs("span",{children:["Loss: ",b.jsx("strong",{children:y.loss.toFixed(4)})]}),b.jsxs("span",{children:["Accuracy:"," ",b.jsxs("strong",{children:[((y.accuracy??0)*100).toFixed(1),"%"]})]}),b.jsxs("span",{children:["Epochs: ",c.length]})]})]}),v<m.length*2&&b.jsxs("div",{className:"tm-hint",children:["Capture at least 2 epochs per class before training. Currently: ",v," total."]})]})}const HC=[{value:"log",label:"Console log"},{value:"key",label:"Key event"},{value:"websocket",label:"WS event"},{value:"osc",label:"OSC message"}];function GC({train:r}){var v;const{classes:e,actions:i,setActions:s,setAction:l,threshold:c,setThreshold:f,modelReady:h,running:m,prediction:p,startInference:x,stopInference:g}=r;return i.length!==e.length&&s(e.map(y=>i.find(A=>A.classId===y.id)??{classId:y.id,kind:"log",value:y.name,enabled:!0})),b.jsxs("div",{className:"train-actions",children:[b.jsxs("div",{className:"ta-run-bar",children:[b.jsx("button",{className:`btn btn-run${m?" running":""}`,onClick:m?g:x,disabled:!h,children:m?"Stop inference":"Run inference"}),b.jsxs("div",{className:"ta-threshold",children:[b.jsxs("label",{children:["Threshold: ",(c*100).toFixed(0),"%"]}),b.jsx("input",{type:"range",min:.3,max:.99,step:.01,value:c,onChange:y=>f(parseFloat(y.target.value))})]}),!h&&b.jsx("span",{className:"ta-hint",children:"Train a model first"})]}),m&&p&&b.jsxs("div",{className:"ta-prediction",children:[b.jsxs("div",{className:"ta-pred-label",children:[((v=e.find(y=>y.id===p.classId))==null?void 0:v.name)??"?",b.jsxs("span",{className:"ta-pred-conf",style:{color:p.confidence>=c?"#00c853":"#a1a1a1"},children:[(p.confidence*100).toFixed(1),"%"]})]}),b.jsx("div",{className:"ta-pred-bars",children:e.map((y,M)=>b.jsxs("div",{className:"ta-bar-row",children:[b.jsx("span",{className:"ta-bar-name",children:y.name}),b.jsx("div",{className:"ta-bar-track",children:b.jsx("div",{className:"ta-bar-fill",style:{width:`${(p.allConfidences[M]??0)*100}%`,background:y.color,opacity:p.allConfidences[M]>=c?1:.4}})}),b.jsxs("span",{className:"ta-bar-pct",children:[((p.allConfidences[M]??0)*100).toFixed(0),"%"]})]},y.id))}),b.jsx("div",{className:"ta-threshold-line",style:{left:`${c*100}%`}})]}),b.jsxs("div",{className:"ta-mapping",children:[b.jsx("h3",{children:"Action Mapping"}),e.map(y=>{const M=i.find(A=>A.classId===y.id);return M?b.jsxs("div",{className:"ta-action-row",children:[b.jsx("div",{className:"ta-action-color",style:{background:y.color}}),b.jsx("span",{className:"ta-action-class",children:y.name}),b.jsx("select",{className:"ta-action-kind",value:M.kind,onChange:A=>l(y.id,{kind:A.target.value}),children:HC.map(A=>b.jsx("option",{value:A.value,children:A.label},A.value))}),b.jsx("input",{className:"ta-action-value",value:M.value,onChange:A=>l(y.id,{value:A.target.value}),placeholder:M.kind==="key"?"e.g. ArrowLeft":M.kind==="osc"?"/eeg/class":M.kind==="websocket"?"message payload":"label"}),b.jsxs("label",{className:"ta-action-toggle",children:[b.jsx("input",{type:"checkbox",checked:M.enabled,onChange:A=>l(y.id,{enabled:A.target.checked})}),b.jsx("span",{children:"On"})]})]},y.id):null})]}),b.jsxs("div",{className:"ta-log-hint",children:["Actions fire when confidence exceeds threshold.",b.jsx("br",{}),b.jsx("code",{children:"key"})," dispatches a browser KeyboardEvent."," ",b.jsx("code",{children:"websocket"})," / ",b.jsx("code",{children:"osc"})," emit a"," ",b.jsx("code",{children:"bci-action"})," / ",b.jsx("code",{children:"bci-osc"})," CustomEvent on"," ",b.jsx("code",{children:"window"}),"."]})]})}const VC=[{id:"capture",label:"Capture",icon:"⏺"},{id:"model",label:"Model",icon:"⚡"},{id:"actions",label:"Actions",icon:"▶"}];function kC({eegData:r,connected:e,onBack:i}){const[s,l]=V.useState("capture"),c=IC(r),f=c.classes.reduce((h,m)=>h+m.epochs.length,0);return b.jsxs("div",{className:"train-mode",children:[b.jsxs("header",{className:"train-header",children:[b.jsxs("div",{className:"train-header-left",children:[b.jsx("button",{className:"btn btn-back",onClick:i,children:"← Back"}),b.jsxs("h1",{children:["Pi",b.jsx("span",{children:"EEG"}),b.jsx("small",{children:"Train"})]})]}),b.jsx("nav",{className:"train-tabs",children:VC.map(h=>b.jsxs("button",{className:`train-tab${s===h.id?" active":""}`,onClick:()=>l(h.id),children:[b.jsx("span",{className:"train-tab-icon",children:h.icon}),h.label]},h.id))}),b.jsxs("div",{className:"train-status",children:[b.jsx("span",{className:`status-dot${e?" connected":""}`}),b.jsxs("span",{className:"train-stat",children:[f," epochs"]}),c.modelReady&&b.jsx("span",{className:"train-stat model-ready",children:"Model ✓"}),c.running&&b.jsx("span",{className:"train-stat running",children:"Inference ⚡"})]})]}),b.jsxs("main",{className:"train-content",children:[s==="capture"&&b.jsx(BC,{train:c}),s==="model"&&b.jsx(zC,{train:c}),s==="actions"&&b.jsx(GC,{train:c})]}),b.jsxs("footer",{className:"train-footer",children:[b.jsxs("div",{className:"train-pipeline",children:[b.jsx("div",{className:`train-pipe-step${f>0?" done":""}`,children:"1. Capture"}),b.jsx("div",{className:"train-pipe-arrow",children:"→"}),b.jsx("div",{className:`train-pipe-step${c.modelReady?" done":""}`,children:"2. Train"}),b.jsx("div",{className:"train-pipe-arrow",children:"→"}),b.jsx("div",{className:`train-pipe-step${c.running?" done":""}`,children:"3. Run"})]}),b.jsxs("span",{className:"train-footer-hint",children:[b.jsx("kbd",{children:"Esc"})," Back to live"]})]})]})}class du extends V.Component{constructor(){super(...arguments);wi(this,"state",{hasError:!1,error:null})}static getDerivedStateFromError(i){return{hasError:!0,error:i}}componentDidCatch(i,s){console.error("[ErrorBoundary]",i,s.componentStack)}render(){var i;return this.state.hasError?b.jsx("div",{className:"error-boundary",children:b.jsxs("div",{className:"error-card",children:[b.jsx("h2",{children:"Something went wrong"}),b.jsx("p",{className:"error-msg",children:(i=this.state.error)==null?void 0:i.message}),b.jsx("button",{className:"btn",onClick:()=>this.setState({hasError:!1,error:null}),children:"Retry"})]})}):this.props.children}}const nx=new Set(Array.from({length:wt},(r,e)=>e)),jC=new Set([0,1,2,3]),XC=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],WC=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"},{value:16,label:"16s"}];function qC(){const[r,e]=V.useState("live"),[i,s]=V.useState(null),[l,c]=V.useState(!1),[f,h]=V.useState(!0),[m,p]=V.useState(!1),[x,g]=V.useState(1),[v,y]=V.useState(40),[M,A]=V.useState(4),[_,S]=V.useState(100),[R,w]=V.useState(null),[N,H]=V.useState(!1),[L,F]=V.useState(!1),[T,O]=V.useState(!1),[J,G]=V.useState(!1),[q,K]=V.useState(()=>window.innerWidth<768?new Set(jC):new Set(nx)),Y=fM(M),ae=V.useRef(q);ae.current=q;const D=V.useCallback(W=>{K(re=>{const X=new Set(re);return X.has(W)?X.delete(W):X.add(W),X})},[]),z=V.useCallback(W=>{K(W?new Set(nx):new Set)},[]);function te(){const W=!l;c(W),Y.setPaused(W)}function le(){const W=!m;p(W),Y.sendCommand({cmd:"set_filter",enabled:W,lowcut:parseFloat(String(x))||1,highcut:parseFloat(String(v))||40})}function _e(){Y.sendCommand({cmd:Y.recording?"stop_record":"start_record"})}function I(W){const re=Math.floor(W/60),X=Math.floor(W%60);return`${String(re).padStart(2,"0")}:${String(X).padStart(2,"0")}`}function j(W,re){m&&Y.sendCommand({cmd:"set_filter",enabled:!0,lowcut:parseFloat(String(W))||1,highcut:parseFloat(String(re))||40})}const ne=V.useCallback(W=>{if(!ae.current.has(W)){K(re=>{const X=new Set(re);return X.add(W),X});return}w(re=>re===W?null:W)},[]);return V.useEffect(()=>{function W(re){const X=re.target.tagName;if(!(X==="INPUT"||X==="SELECT"||X==="TEXTAREA")){if(r!=="live"){re.code==="Escape"&&(r==="playback"?(e("sessions"),s(null)):(r==="sessions"||r==="train")&&e("live"));return}switch(re.code){case"Space":re.preventDefault(),te();break;case"KeyR":_e();break;case"KeyF":h(ee=>!ee);break;case"KeyV":H(ee=>!ee);break;case"KeyS":O(ee=>!ee);break;case"KeyC":G(ee=>!ee);break;case"KeyT":e("train");break;case"KeyG":F(ee=>!ee);break;case"Escape":N?H(!1):R!==null?w(null):Y.recordResult&&Y.dismissRecordResult();break}}}return window.addEventListener("keydown",W),()=>window.removeEventListener("keydown",W)},[R,Y.recordResult,r]),r==="train"?b.jsx(Pc,{children:b.jsx(du,{children:b.jsx(kC,{eegData:Y.data,connected:Y.connected,onBack:()=>e("live")})})}):r==="playback"&&i?b.jsx(Pc,{children:b.jsx(du,{children:b.jsx(BM,{filename:i,onBack:()=>{e("sessions"),s(null)}})})}):r==="sessions"?b.jsx(Pc,{children:b.jsx(du,{children:b.jsx(DM,{onSelect:W=>{s(W),e("playback")},onBack:()=>e("live")})})}):(Y.data.gridSuspended=R!==null&&q.has(R),b.jsxs(Pc,{children:[b.jsx(yC,{}),b.jsxs("header",{className:"header",children:[b.jsxs("h1",{children:["Pi",b.jsx("span",{children:"EEG"}),"-16",b.jsx("small",{children:"Dashboard"})]}),b.jsxs("div",{className:"status-bar",children:[b.jsxs("span",{children:[b.jsx("span",{className:`status-dot${Y.connected?" connected":""}`}),Y.connected?"Connected":"Disconnected"]}),Y.latencyMs!==null&&b.jsxs("span",{className:`latency-badge${Y.latencyMs>100?" warn":""}${Y.latencyMs>500?" critical":""}`,children:[Y.latencyMs," ms"]}),b.jsx("span",{className:`live-badge${l?" paused":""}`,children:l?"PAUSED":"LIVE"}),b.jsx("span",{style:{fontFamily:"var(--mono)"},children:Y.hz?`${Y.hz} Hz`:"— Hz"}),b.jsxs("span",{style:{fontFamily:"var(--mono)"},children:[Y.sampleCount.toLocaleString()," samples"]})]})]}),b.jsxs("div",{className:"controls",children:[b.jsx("button",{className:`btn${l?" active":""}`,onClick:te,children:l?"Resume":"Pause"}),b.jsxs("button",{className:`btn btn-record${Y.recording?" recording":""}`,onClick:_e,children:[b.jsx("span",{className:"rec-dot"}),Y.recording?`Stop ${I(Y.recordElapsed)}`:"Record"]}),b.jsxs("button",{className:`btn${m?" active":""}`,onClick:le,children:["Filter: ",m?"ON":"OFF"]}),b.jsxs("button",{className:`btn${f?" active":""}`,onClick:()=>h(W=>!W),children:["FFT ",f?"ON":"OFF"]}),b.jsxs("button",{className:`btn${L?" active":""}`,onClick:()=>F(W=>!W),children:["Spectrogram ",L?"ON":"OFF"]}),b.jsxs("button",{className:`btn${T?" active":""}`,onClick:()=>O(W=>!W),children:["Stats ",T?"ON":"OFF"]}),b.jsx("button",{className:"btn btn-train",onClick:()=>e("train"),children:"Train"}),b.jsx("button",{className:"btn btn-sessions",onClick:()=>e("sessions"),children:"Sessions"}),b.jsx("button",{className:`btn btn-chat${J?" active":""}`,onClick:()=>G(W=>!W),children:"Chat"}),b.jsx("button",{className:"btn btn-xr",onClick:()=>H(!0),title:"Open EEG waves in immersive 3D / VR",children:"XR View"}),b.jsx("div",{className:"sep"}),b.jsxs("div",{className:"control-group",children:[b.jsx("label",{children:"Low"}),b.jsx("input",{type:"number",value:x,min:.1,max:50,step:.5,onChange:W=>{g(W.target.value),j(W.target.value,v)}})," ","Hz"]}),b.jsxs("div",{className:"control-group",children:[b.jsx("label",{children:"High"}),b.jsx("input",{type:"number",value:v,min:1,max:125,step:1,onChange:W=>{y(W.target.value),j(x,W.target.value)}})," ","Hz"]}),b.jsx("div",{className:"sep"}),b.jsxs("div",{className:"control-group",children:[b.jsx("label",{children:"Time window"}),b.jsx("select",{value:M,onChange:W=>A(parseInt(W.target.value)),children:WC.map(W=>b.jsx("option",{value:W.value,children:W.label},W.value))})]}),b.jsxs("div",{className:"control-group",children:[b.jsx("label",{children:"Scale"}),b.jsx("select",{value:_,onChange:W=>S(parseInt(W.target.value)),children:XC.map(W=>b.jsx("option",{value:W.value,children:W.label},W.value))})]})]}),b.jsxs("div",{className:"channel-selector",children:[b.jsx("span",{className:"cs-label",children:"Channels"}),b.jsx("button",{className:"cs-toggle",onClick:()=>z(!0),children:"All"}),b.jsx("button",{className:"cs-toggle",onClick:()=>z(!1),children:"None"}),b.jsx("div",{className:"cs-grid",children:Array.from({length:wt},(W,re)=>b.jsx("button",{className:`cs-ch${q.has(re)?" on":""}`,onClick:()=>D(re),children:re+1},re))}),b.jsxs("span",{className:"cs-count",children:[q.size,"/",wt]})]}),b.jsx(du,{children:b.jsxs("div",{className:`main-area${f?" with-fft":""}${L||T||m?" with-analysis":""}`,children:[R!==null&&q.has(R)&&b.jsx(EM,{chIdx:R,eegData:Y.data,yRange:_,onClose:()=>w(null)}),b.jsx("div",{className:"grid",children:Array.from({length:wt},(W,re)=>b.jsx(gM,{chIdx:re,eegData:Y.data,yRange:_,active:q.has(re),onToggleExpand:()=>ne(re)},re))}),f&&b.jsxs("div",{className:"fft-area",children:[b.jsx(wM,{eegData:Y.data}),b.jsx(hC,{eegData:Y.data})]}),m&&b.jsx(vC,{enabled:m,lowcut:parseFloat(String(x))||1,highcut:parseFloat(String(v))||40}),(L||T)&&b.jsxs("div",{className:"analysis-area",children:[L&&b.jsx(mC,{eegData:Y.data}),T&&b.jsx(SC,{eegData:Y.data})]})]})}),Y.recordResult&&b.jsx("div",{className:"modal-overlay",children:b.jsxs("div",{className:"modal-card",children:[b.jsx("h2",{children:"Recording Complete"}),b.jsxs("div",{className:"modal-details",children:[b.jsxs("div",{className:"modal-row",children:[b.jsx("span",{className:"modal-label",children:"File"}),b.jsx("span",{className:"modal-value",children:Y.recordResult.filename})]}),b.jsxs("div",{className:"modal-row",children:[b.jsx("span",{className:"modal-label",children:"Duration"}),b.jsx("span",{className:"modal-value",children:I(Y.recordResult.duration)})]}),b.jsxs("div",{className:"modal-row",children:[b.jsx("span",{className:"modal-label",children:"Frames"}),b.jsx("span",{className:"modal-value",children:Y.recordResult.frames.toLocaleString()})]}),b.jsxs("div",{className:"modal-row",children:[b.jsx("span",{className:"modal-label",children:"Saved to"}),b.jsx("span",{className:"modal-value modal-path",children:Y.recordResult.path})]})]}),b.jsxs("div",{className:"modal-actions",children:[b.jsx("a",{className:"btn modal-btn-download",href:Y.recordResult.downloadUrl,download:!0,children:"Download CSV"}),b.jsx("button",{className:"btn modal-btn-view",onClick:()=>{const W=Y.recordResult.filename;Y.dismissRecordResult(),s(W),e("playback")},children:"View Session"}),b.jsx("button",{className:"btn modal-btn-dismiss",onClick:Y.dismissRecordResult,children:"Dismiss"})]})]})}),N&&b.jsx(oC,{eegData:Y.data,yScale:_,onExit:()=>H(!1)}),b.jsx(NM,{}),b.jsx(wC,{eegData:Y.data,open:J,onClose:()=>G(!1)}),b.jsx(bC,{}),b.jsxs("footer",{className:"footer",children:[b.jsx("span",{style:{fontFamily:"var(--mono)",letterSpacing:"-0.01em"},children:"PiEEG-16"}),b.jsxs("span",{className:"kbd-hints",children:[b.jsx("kbd",{children:"Space"})," Pause",b.jsx("kbd",{children:"R"})," Record",b.jsx("kbd",{children:"F"})," FFT",b.jsx("kbd",{children:"G"})," Gram",b.jsx("kbd",{children:"S"})," Stats",b.jsx("kbd",{children:"T"})," Train",b.jsx("kbd",{children:"V"})," XR",b.jsx("kbd",{children:"C"})," Chat",b.jsx("kbd",{children:"Esc"})," Close",b.jsx("kbd",{children:"P"})," Perf"]}),b.jsx("span",{children:"Not a medical device"})]})]}))}oM.createRoot(document.getElementById("root")).render(b.jsx($y.StrictMode,{children:b.jsx(qC,{})}));export{ZC as a,ix as g};
