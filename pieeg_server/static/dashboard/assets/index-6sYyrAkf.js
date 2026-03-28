(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Uv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ed={exports:{}},Ho={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function vy(){if(o_)return Ho;o_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=t,Ho.jsx=i,Ho.jsxs=i,Ho}var l_;function xy(){return l_||(l_=1,Ed.exports=vy()),Ed.exports}var X=xy(),bd={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function Sy(){if(c_)return de;c_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),g=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,x={};function _(P,j,rt){this.props=P,this.context=j,this.refs=x,this.updater=rt||b}_.prototype.isReactComponent={},_.prototype.setState=function(P,j){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,j,"setState")},_.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function A(){}A.prototype=_.prototype;function U(P,j,rt){this.props=P,this.context=j,this.refs=x,this.updater=rt||b}var D=U.prototype=new A;D.constructor=U,w(D,_.prototype),D.isPureReactComponent=!0;var I=Array.isArray;function B(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(P,j,rt){var Mt=rt.ref;return{$$typeof:o,type:P,key:j,ref:Mt!==void 0?Mt:null,props:rt}}function pt(P,j){return N(P.type,j,P.props)}function G(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function et(P){var j={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(rt){return j[rt]})}var K=/\/+/g;function nt(P,j){return typeof P=="object"&&P!==null&&P.key!=null?et(""+P.key):j.toString(36)}function $(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(B,B):(P.status="pending",P.then(function(j){P.status==="pending"&&(P.status="fulfilled",P.value=j)},function(j){P.status==="pending"&&(P.status="rejected",P.reason=j)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function L(P,j,rt,Mt,At){var J=typeof P;(J==="undefined"||J==="boolean")&&(P=null);var H=!1;if(P===null)H=!0;else switch(J){case"bigint":case"string":case"number":H=!0;break;case"object":switch(P.$$typeof){case o:case t:H=!0;break;case v:return H=P._init,L(H(P._payload),j,rt,Mt,At)}}if(H)return At=At(P),H=Mt===""?"."+nt(P,0):Mt,I(At)?(rt="",H!=null&&(rt=H.replace(K,"$&/")+"/"),L(At,j,rt,"",function(Nt){return Nt})):At!=null&&(G(At)&&(At=pt(At,rt+(At.key==null||P&&P.key===At.key?"":(""+At.key).replace(K,"$&/")+"/")+H)),j.push(At)),1;H=0;var ft=Mt===""?".":Mt+":";if(I(P))for(var Et=0;Et<P.length;Et++)Mt=P[Et],J=ft+nt(Mt,Et),H+=L(Mt,j,rt,J,At);else if(Et=M(P),typeof Et=="function")for(P=Et.call(P),Et=0;!(Mt=P.next()).done;)Mt=Mt.value,J=ft+nt(Mt,Et++),H+=L(Mt,j,rt,J,At);else if(J==="object"){if(typeof P.then=="function")return L($(P),j,rt,Mt,At);throw j=String(P),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return H}function z(P,j,rt){if(P==null)return P;var Mt=[],At=0;return L(P,Mt,"","",function(J){return j.call(rt,J,At++)}),Mt}function W(P){if(P._status===-1){var j=P._result;j=j(),j.then(function(rt){(P._status===0||P._status===-1)&&(P._status=1,P._result=rt)},function(rt){(P._status===0||P._status===-1)&&(P._status=2,P._result=rt)}),P._status===-1&&(P._status=0,P._result=j)}if(P._status===1)return P._result.default;throw P._result}var it=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},vt={map:z,forEach:function(P,j,rt){z(P,function(){j.apply(this,arguments)},rt)},count:function(P){var j=0;return z(P,function(){j++}),j},toArray:function(P){return z(P,function(j){return j})||[]},only:function(P){if(!G(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return de.Activity=y,de.Children=vt,de.Component=_,de.Fragment=i,de.Profiler=l,de.PureComponent=U,de.StrictMode=s,de.Suspense=m,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,de.__COMPILER_RUNTIME={__proto__:null,c:function(P){return F.H.useMemoCache(P)}},de.cache=function(P){return function(){return P.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(P,j,rt){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Mt=w({},P.props),At=P.key;if(j!=null)for(J in j.key!==void 0&&(At=""+j.key),j)!T.call(j,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&j.ref===void 0||(Mt[J]=j[J]);var J=arguments.length-2;if(J===1)Mt.children=rt;else if(1<J){for(var H=Array(J),ft=0;ft<J;ft++)H[ft]=arguments[ft+2];Mt.children=H}return N(P.type,At,Mt)},de.createContext=function(P){return P={$$typeof:d,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},de.createElement=function(P,j,rt){var Mt,At={},J=null;if(j!=null)for(Mt in j.key!==void 0&&(J=""+j.key),j)T.call(j,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(At[Mt]=j[Mt]);var H=arguments.length-2;if(H===1)At.children=rt;else if(1<H){for(var ft=Array(H),Et=0;Et<H;Et++)ft[Et]=arguments[Et+2];At.children=ft}if(P&&P.defaultProps)for(Mt in H=P.defaultProps,H)At[Mt]===void 0&&(At[Mt]=H[Mt]);return N(P,J,At)},de.createRef=function(){return{current:null}},de.forwardRef=function(P){return{$$typeof:p,render:P}},de.isValidElement=G,de.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:W}},de.memo=function(P,j){return{$$typeof:h,type:P,compare:j===void 0?null:j}},de.startTransition=function(P){var j=F.T,rt={};F.T=rt;try{var Mt=P(),At=F.S;At!==null&&At(rt,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(B,it)}catch(J){it(J)}finally{j!==null&&rt.types!==null&&(j.types=rt.types),F.T=j}},de.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},de.use=function(P){return F.H.use(P)},de.useActionState=function(P,j,rt){return F.H.useActionState(P,j,rt)},de.useCallback=function(P,j){return F.H.useCallback(P,j)},de.useContext=function(P){return F.H.useContext(P)},de.useDebugValue=function(){},de.useDeferredValue=function(P,j){return F.H.useDeferredValue(P,j)},de.useEffect=function(P,j){return F.H.useEffect(P,j)},de.useEffectEvent=function(P){return F.H.useEffectEvent(P)},de.useId=function(){return F.H.useId()},de.useImperativeHandle=function(P,j,rt){return F.H.useImperativeHandle(P,j,rt)},de.useInsertionEffect=function(P,j){return F.H.useInsertionEffect(P,j)},de.useLayoutEffect=function(P,j){return F.H.useLayoutEffect(P,j)},de.useMemo=function(P,j){return F.H.useMemo(P,j)},de.useOptimistic=function(P,j){return F.H.useOptimistic(P,j)},de.useReducer=function(P,j,rt){return F.H.useReducer(P,j,rt)},de.useRef=function(P){return F.H.useRef(P)},de.useState=function(P){return F.H.useState(P)},de.useSyncExternalStore=function(P,j,rt){return F.H.useSyncExternalStore(P,j,rt)},de.useTransition=function(){return F.H.useTransition()},de.version="19.2.4",de}var u_;function dp(){return u_||(u_=1,bd.exports=Sy()),bd.exports}var _t=dp();const yy=Uv(_t);var Td={exports:{}},Go={},Ad={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function My(){return f_||(f_=1,(function(o){function t(L,z){var W=L.length;L.push(z);t:for(;0<W;){var it=W-1>>>1,vt=L[it];if(0<l(vt,z))L[it]=z,L[W]=vt,W=it;else break t}}function i(L){return L.length===0?null:L[0]}function s(L){if(L.length===0)return null;var z=L[0],W=L.pop();if(W!==z){L[0]=W;t:for(var it=0,vt=L.length,P=vt>>>1;it<P;){var j=2*(it+1)-1,rt=L[j],Mt=j+1,At=L[Mt];if(0>l(rt,W))Mt<vt&&0>l(At,rt)?(L[it]=At,L[Mt]=W,it=Mt):(L[it]=rt,L[j]=W,it=j);else if(Mt<vt&&0>l(At,W))L[it]=At,L[Mt]=W,it=Mt;else break t}}return z}function l(L,z){var W=L.sortIndex-z.sortIndex;return W!==0?W:L.id-z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var m=[],h=[],v=1,y=null,g=3,M=!1,b=!1,w=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(L){for(var z=i(h);z!==null;){if(z.callback===null)s(h);else if(z.startTime<=L)s(h),z.sortIndex=z.expirationTime,t(m,z);else break;z=i(h)}}function I(L){if(w=!1,D(L),!b)if(i(m)!==null)b=!0,B||(B=!0,et());else{var z=i(h);z!==null&&$(I,z.startTime-L)}}var B=!1,F=-1,T=5,N=-1;function pt(){return x?!0:!(o.unstable_now()-N<T)}function G(){if(x=!1,B){var L=o.unstable_now();N=L;var z=!0;try{t:{b=!1,w&&(w=!1,A(F),F=-1),M=!0;var W=g;try{e:{for(D(L),y=i(m);y!==null&&!(y.expirationTime>L&&pt());){var it=y.callback;if(typeof it=="function"){y.callback=null,g=y.priorityLevel;var vt=it(y.expirationTime<=L);if(L=o.unstable_now(),typeof vt=="function"){y.callback=vt,D(L),z=!0;break e}y===i(m)&&s(m),D(L)}else s(m);y=i(m)}if(y!==null)z=!0;else{var P=i(h);P!==null&&$(I,P.startTime-L),z=!1}}break t}finally{y=null,g=W,M=!1}z=void 0}}finally{z?et():B=!1}}}var et;if(typeof U=="function")et=function(){U(G)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,nt=K.port2;K.port1.onmessage=G,et=function(){nt.postMessage(null)}}else et=function(){_(G,0)};function $(L,z){F=_(function(){L(o.unstable_now())},z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(L){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var W=g;g=z;try{return L()}finally{g=W}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(L,z){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var W=g;g=L;try{return z()}finally{g=W}},o.unstable_scheduleCallback=function(L,z,W){var it=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?it+W:it):W=it,L){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=W+vt,L={id:v++,callback:z,priorityLevel:L,startTime:W,expirationTime:vt,sortIndex:-1},W>it?(L.sortIndex=W,t(h,L),i(m)===null&&L===i(h)&&(w?(A(F),F=-1):w=!0,$(I,W-it))):(L.sortIndex=vt,t(m,L),b||M||(b=!0,B||(B=!0,et()))),L},o.unstable_shouldYield=pt,o.unstable_wrapCallback=function(L){var z=g;return function(){var W=g;g=z;try{return L.apply(this,arguments)}finally{g=W}}}})(Rd)),Rd}var d_;function Ey(){return d_||(d_=1,Ad.exports=My()),Ad.exports}var Cd={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function by(){if(h_)return Rn;h_=1;var o=dp();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:m,containerInfo:h,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,v)},Rn.flushSync=function(m){var h=d.T,v=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=v,s.d.f()}},Rn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,y=p(v,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:g,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:y,integrity:g,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Rn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Rn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,y=p(v,h.crossOrigin);s.d.L(m,v,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Rn.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,h){return m(h)},Rn.useFormState=function(m,h,v){return d.H.useFormState(m,h,v)},Rn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Rn.version="19.2.4",Rn}var p_;function Ty(){if(p_)return Cd.exports;p_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Cd.exports=by(),Cd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function Ay(){if(m_)return Go;m_=1;var o=Ey(),t=dp(),i=Ty();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var S=!1,R=u.child;R;){if(R===a){S=!0,a=u,r=f;break}if(R===r){S=!0,r=u,a=f;break}R=R.sibling}if(!S){for(R=f.child;R;){if(R===a){S=!0,a=f,r=u;break}if(R===r){S=!0,r=f,a=u;break}R=R.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),pt=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var K=Symbol.for("react.client.reference");function nt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===K?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case _:return"Profiler";case x:return"StrictMode";case I:return"Suspense";case B:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case U:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:nt(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return nt(e(n))}catch{}}return null}var $=Array.isArray,L=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},it=[],vt=-1;function P(e){return{current:e}}function j(e){0>vt||(e.current=it[vt],it[vt]=null,vt--)}function rt(e,n){vt++,it[vt]=e.current,e.current=n}var Mt=P(null),At=P(null),J=P(null),H=P(null);function ft(e,n){switch(rt(J,n),rt(At,e),rt(Mt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Dg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Dg(n),e=Ug(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(Mt),rt(Mt,e)}function Et(){j(Mt),j(At),j(J)}function Nt(e){e.memoizedState!==null&&rt(H,e);var n=Mt.current,a=Ug(n,e.type);n!==a&&(rt(At,e),rt(Mt,a))}function Dt(e){At.current===e&&(j(Mt),j(At)),H.current===e&&(j(H),Fo._currentValue=W)}var ie,Gt;function Vt(e){if(ie===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ie=n&&n[1]||"",Gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ie+e+Gt}var re=!1;function jt(e,n){if(!e||re)return"";re=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(ht){var ut=ht}Reflect.construct(e,[],bt)}else{try{bt.call()}catch(ht){ut=ht}e.call(bt.prototype)}}else{try{throw Error()}catch(ht){ut=ht}(bt=e())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(ht){if(ht&&ut&&typeof ht.stack=="string")return[ht.stack,ut.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),S=f[0],R=f[1];if(S&&R){var V=S.split(`
`),lt=R.split(`
`);for(u=r=0;r<V.length&&!V[r].includes("DetermineComponentFrameRoot");)r++;for(;u<lt.length&&!lt[u].includes("DetermineComponentFrameRoot");)u++;if(r===V.length||u===lt.length)for(r=V.length-1,u=lt.length-1;1<=r&&0<=u&&V[r]!==lt[u];)u--;for(;1<=r&&0<=u;r--,u--)if(V[r]!==lt[u]){if(r!==1||u!==1)do if(r--,u--,0>u||V[r]!==lt[u]){var St=`
`+V[r].replace(" at new "," at ");return e.displayName&&St.includes("<anonymous>")&&(St=St.replace("<anonymous>",e.displayName)),St}while(1<=r&&0<=u);break}}}finally{re=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Vt(a):""}function he(e,n){switch(e.tag){case 26:case 27:case 5:return Vt(e.type);case 16:return Vt("Lazy");case 13:return e.child!==n&&n!==null?Vt("Suspense Fallback"):Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 15:return jt(e.type,!1);case 11:return jt(e.type.render,!1);case 1:return jt(e.type,!0);case 31:return Vt("Activity");default:return""}}function k(e){try{var n="",a=null;do n+=he(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Te=Object.prototype.hasOwnProperty,me=o.unstable_scheduleCallback,Ae=o.unstable_cancelCallback,Wt=o.unstable_shouldYield,O=o.unstable_requestPaint,E=o.unstable_now,Q=o.unstable_getCurrentPriorityLevel,xt=o.unstable_ImmediatePriority,Tt=o.unstable_UserBlockingPriority,mt=o.unstable_NormalPriority,Ft=o.unstable_LowPriority,Lt=o.unstable_IdlePriority,te=o.log,ee=o.unstable_setDisableYieldValue,Rt=null,Ct=null;function Ht(e){if(typeof te=="function"&&ee(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Rt,e)}catch{}}var zt=Math.clz32?Math.clz32:Z,kt=Math.log,ge=Math.LN2;function Z(e){return e>>>=0,e===0?32:31-(kt(e)/ge|0)|0}var Ot=256,Ut=262144,Xt=4194304;function wt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function gt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?u=wt(r):(S&=R,S!==0?u=wt(S):a||(a=R&~e,a!==0&&(u=wt(a))))):(R=r&~f,R!==0?u=wt(R):S!==0?u=wt(S):a||(a=r&~e,a!==0&&(u=wt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Yt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ce(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Xt;return Xt<<=1,(Xt&62914560)===0&&(Xt=4194304),e}function Ue(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function On(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xi(e,n,a,r,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,V=e.expirationTimes,lt=e.hiddenUpdates;for(a=S&~a;0<a;){var St=31-zt(a),bt=1<<St;R[St]=0,V[St]=-1;var ut=lt[St];if(ut!==null)for(lt[St]=null,St=0;St<ut.length;St++){var ht=ut[St];ht!==null&&(ht.lane&=-536870913)}a&=~bt}r!==0&&Kr(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Kr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-zt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Bs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-zt(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function ul(e,n){var a=n&-n;return a=(a&42)!==0?1:Is(a),(a&(e.suspendedLanes|n))!==0?0:a}function Is(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Di(){var e=z.p;return e!==0?e:(e=window.event,e===void 0?32:t_(e.type))}function Gs(e,n){var a=z.p;try{return z.p=e,n()}finally{z.p=a}}var Si=Math.random().toString(36).slice(2),rn="__reactFiber$"+Si,pn="__reactProps$"+Si,ji="__reactContainer$"+Si,Ea="__reactEvents$"+Si,fl="__reactListeners$"+Si,dl="__reactHandles$"+Si,hl="__reactResources$"+Si,ss="__reactMarker$"+Si;function Qr(e){delete e[rn],delete e[pn],delete e[Ea],delete e[fl],delete e[dl]}function ba(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ji]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Bg(e);e!==null;){if(a=e[rn])return a;e=Bg(e)}return n}e=a,a=e.parentNode}return null}function Ta(e){if(e=e[rn]||e[ji]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function C(e){var n=e[hl];return n||(n=e[hl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Y(e){e[ss]=!0}var dt=new Set,ct={};function at(e,n){Pt(e,n),Pt(e+"Capture",n)}function Pt(e,n){for(ct[e]=n,e=0;e<n.length;e++)dt.add(n[e])}var qt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bt={},Jt={};function ne(e){return Te.call(Jt,e)?!0:Te.call(Bt,e)?!1:qt.test(e)?Jt[e]=!0:(Bt[e]=!0,!1)}function oe(e,n,a){if(ne(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function fe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Zt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Oe(e){if(!e._valueTracker){var n=Qe(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function mn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Qe(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pn=/[\n"\\]/g;function ue(e){return e.replace(Pn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fn(e,n,a,r,u,f,S,R){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?yi(e,S,_e(n)):a!=null?yi(e,S,_e(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+_e(R):e.removeAttribute("name")}function Yn(e,n,a,r,u,f,S,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Oe(e);return}a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=R?e.checked:!!r,e.defaultChecked=!!r,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Oe(e)}function yi(e,n,a){n==="number"&&Qt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Zn(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Be(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function on(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if($(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Oe(e)}function zn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ln=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mi(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||ln.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Yi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Mi(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Mi(e,f,n[f])}function Vs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var px=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pl(e){return mx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var xu=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ks=null,Xs=null;function wp(e){var n=Ta(e);if(n&&(e=n.stateNode)){var a=e[pn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Fn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ue(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[pn]||null;if(!u)throw Error(s(90));Fn(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&mn(r)}break t;case"textarea":Be(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Zn(e,!!a.multiple,n,!1)}}}var yu=!1;function Dp(e,n,a){if(yu)return e(n,a);yu=!0;try{var r=e(n);return r}finally{if(yu=!1,(ks!==null||Xs!==null)&&(ec(),ks&&(n=ks,e=Xs,Xs=ks=null,wp(n),e)))for(n=0;n<e.length;n++)wp(e[n])}}function Jr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[pn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(Ki)try{var $r={};Object.defineProperty($r,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{Mu=!1}var Aa=null,Eu=null,ml=null;function Up(){if(ml)return ml;var e,n=Eu,a=n.length,r,u="value"in Aa?Aa.value:Aa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(r=1;r<=S&&n[a-r]===u[f-r];r++);return ml=u.slice(e,1<r?1-r:void 0)}function gl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function _l(){return!0}function Np(){return!1}function Gn(e){function n(a,r,u,f,S){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?_l:Np,this.isPropagationStopped=Np,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),n}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=Gn(os),to=y({},os,{view:0,detail:0}),gx=Gn(to),bu,Tu,eo,xl=y({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(bu=e.screenX-eo.screenX,Tu=e.screenY-eo.screenY):Tu=bu=0,eo=e),bu)},movementY:function(e){return"movementY"in e?e.movementY:Tu}}),Lp=Gn(xl),_x=y({},xl,{dataTransfer:0}),vx=Gn(_x),xx=y({},to,{relatedTarget:0}),Au=Gn(xx),Sx=y({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),yx=Gn(Sx),Mx=y({},os,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ex=Gn(Mx),bx=y({},os,{data:0}),Op=Gn(bx),Tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Rx[e])?!!n[e]:!1}function Ru(){return Cx}var wx=y({},to,{key:function(e){if(e.key){var n=Tx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=gl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ax[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?gl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Dx=Gn(wx),Ux=y({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=Gn(Ux),Nx=y({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),Lx=Gn(Nx),Ox=y({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),Px=Gn(Ox),Fx=y({},xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zx=Gn(Fx),Bx=y({},os,{newState:0,oldState:0}),Ix=Gn(Bx),Hx=[9,13,27,32],Cu=Ki&&"CompositionEvent"in window,no=null;Ki&&"documentMode"in document&&(no=document.documentMode);var Gx=Ki&&"TextEvent"in window&&!no,Fp=Ki&&(!Cu||no&&8<no&&11>=no),zp=" ",Bp=!1;function Ip(e,n){switch(e){case"keyup":return Hx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ws=!1;function Vx(e,n){switch(e){case"compositionend":return Hp(n);case"keypress":return n.which!==32?null:(Bp=!0,zp);case"textInput":return e=n.data,e===zp&&Bp?null:e;default:return null}}function kx(e,n){if(Ws)return e==="compositionend"||!Cu&&Ip(e,n)?(e=Up(),ml=Eu=Aa=null,Ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fp&&n.locale!=="ko"?null:n.data;default:return null}}var Xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Xx[e.type]:n==="textarea"}function Vp(e,n,a,r){ks?Xs?Xs.push(r):Xs=[r]:ks=r,n=lc(n,"onChange"),0<n.length&&(a=new vl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var io=null,ao=null;function Wx(e){bg(e,0)}function Sl(e){var n=rs(e);if(mn(n))return e}function kp(e,n){if(e==="change")return n}var Xp=!1;if(Ki){var wu;if(Ki){var Du="oninput"in document;if(!Du){var Wp=document.createElement("div");Wp.setAttribute("oninput","return;"),Du=typeof Wp.oninput=="function"}wu=Du}else wu=!1;Xp=wu&&(!document.documentMode||9<document.documentMode)}function qp(){io&&(io.detachEvent("onpropertychange",jp),ao=io=null)}function jp(e){if(e.propertyName==="value"&&Sl(ao)){var n=[];Vp(n,ao,e,Su(e)),Dp(Wx,n)}}function qx(e,n,a){e==="focusin"?(qp(),io=n,ao=a,io.attachEvent("onpropertychange",jp)):e==="focusout"&&qp()}function jx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sl(ao)}function Yx(e,n){if(e==="click")return Sl(n)}function Zx(e,n){if(e==="input"||e==="change")return Sl(n)}function Kx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:Kx;function so(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Te.call(n,u)||!Kn(e[u],n[u]))return!1}return!0}function Yp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zp(e,n){var a=Yp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Yp(a)}}function Kp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Kp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Qp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Qt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Qt(e.document)}return n}function Uu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Qx=Ki&&"documentMode"in document&&11>=document.documentMode,qs=null,Nu=null,ro=null,Lu=!1;function Jp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lu||qs==null||qs!==Qt(r)||(r=qs,"selectionStart"in r&&Uu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ro&&so(ro,r)||(ro=r,r=lc(Nu,"onSelect"),0<r.length&&(n=new vl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=qs)))}function ls(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var js={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionrun:ls("Transition","TransitionRun"),transitionstart:ls("Transition","TransitionStart"),transitioncancel:ls("Transition","TransitionCancel"),transitionend:ls("Transition","TransitionEnd")},Ou={},$p={};Ki&&($p=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function cs(e){if(Ou[e])return Ou[e];if(!js[e])return e;var n=js[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in $p)return Ou[e]=n[a];return e}var tm=cs("animationend"),em=cs("animationiteration"),nm=cs("animationstart"),Jx=cs("transitionrun"),$x=cs("transitionstart"),tS=cs("transitioncancel"),im=cs("transitionend"),am=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function Ei(e,n){am.set(e,n),at(n,[e])}var yl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},li=[],Ys=0,Fu=0;function Ml(){for(var e=Ys,n=Fu=Ys=0;n<e;){var a=li[n];li[n++]=null;var r=li[n];li[n++]=null;var u=li[n];li[n++]=null;var f=li[n];if(li[n++]=null,r!==null&&u!==null){var S=r.pending;S===null?u.next=u:(u.next=S.next,S.next=u),r.pending=u}f!==0&&sm(a,u,f)}}function El(e,n,a,r){li[Ys++]=e,li[Ys++]=n,li[Ys++]=a,li[Ys++]=r,Fu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function zu(e,n,a,r){return El(e,n,a,r),bl(e)}function us(e,n){return El(e,null,null,n),bl(e)}function sm(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-zt(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function bl(e){if(50<wo)throw wo=0,jf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Zs={};function eS(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,r){return new eS(e,n,a,r)}function Bu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qi(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function rm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Tl(e,n,a,r,u,f){var S=0;if(r=e,typeof e=="function")Bu(e)&&(S=1);else if(typeof e=="string")S=ry(e,a,Mt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=Qn(31,a,n,u),e.elementType=N,e.lanes=f,e;case w:return fs(a.children,u,f,n);case x:S=8,u|=24;break;case _:return e=Qn(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case I:return e=Qn(13,a,n,u),e.elementType=I,e.lanes=f,e;case B:return e=Qn(19,a,n,u),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:S=10;break t;case A:S=9;break t;case D:S=11;break t;case F:S=14;break t;case T:S=16,r=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Qn(S,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function fs(e,n,a,r){return e=Qn(7,e,r,n),e.lanes=a,e}function Iu(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function om(e){var n=Qn(18,null,null,0);return n.stateNode=e,n}function Hu(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var lm=new WeakMap;function ci(e,n){if(typeof e=="object"&&e!==null){var a=lm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:k(n)},lm.set(e,n),n)}return{value:e,source:n,stack:k(n)}}var Ks=[],Qs=0,Al=null,oo=0,ui=[],fi=0,Ra=null,Ui=1,Ni="";function Ji(e,n){Ks[Qs++]=oo,Ks[Qs++]=Al,Al=e,oo=n}function cm(e,n,a){ui[fi++]=Ui,ui[fi++]=Ni,ui[fi++]=Ra,Ra=e;var r=Ui;e=Ni;var u=32-zt(r)-1;r&=~(1<<u),a+=1;var f=32-zt(n)+u;if(30<f){var S=u-u%5;f=(r&(1<<S)-1).toString(32),r>>=S,u-=S,Ui=1<<32-zt(n)+u|a<<u|r,Ni=f+e}else Ui=1<<f|a<<u|r,Ni=e}function Gu(e){e.return!==null&&(Ji(e,1),cm(e,1,0))}function Vu(e){for(;e===Al;)Al=Ks[--Qs],Ks[Qs]=null,oo=Ks[--Qs],Ks[Qs]=null;for(;e===Ra;)Ra=ui[--fi],ui[fi]=null,Ni=ui[--fi],ui[fi]=null,Ui=ui[--fi],ui[fi]=null}function um(e,n){ui[fi++]=Ui,ui[fi++]=Ni,ui[fi++]=Ra,Ui=n.id,Ni=n.overflow,Ra=e}var yn=null,Ye=null,we=!1,Ca=null,di=!1,ku=Error(s(519));function wa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lo(ci(n,e)),ku}function fm(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[rn]=e,n[pn]=r,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<Uo.length;a++)Ee(Uo[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),Yn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),on(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Cg(n.textContent,a)?(r.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),r.onScroll!=null&&Ee("scroll",n),r.onScrollEnd!=null&&Ee("scrollend",n),r.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||wa(e,!0)}function dm(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:yn=yn.return}}function Js(e){if(e!==yn)return!1;if(!we)return dm(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ld(e.type,e.memoizedProps)),a=!a),a&&Ye&&wa(e),dm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=zg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=zg(e)}else n===27?(n=Ye,ka(e.type)?(e=hd,hd=null,Ye=e):Ye=n):Ye=yn?pi(e.stateNode.nextSibling):null;return!0}function ds(){Ye=yn=null,we=!1}function Xu(){var e=Ca;return e!==null&&(Wn===null?Wn=e:Wn.push.apply(Wn,e),Ca=null),e}function lo(e){Ca===null?Ca=[e]:Ca.push(e)}var Wu=P(null),hs=null,$i=null;function Da(e,n,a){rt(Wu,n._currentValue),n._currentValue=a}function ta(e){e._currentValue=Wu.current,j(Wu)}function qu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function ju(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var V=0;V<n.length;V++)if(R.context===n[V]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),qu(f.return,a,e),r||(S=null);break t}f=R.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),qu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function $s(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var R=u.type;Kn(u.pendingProps.value,S.value)||(e!==null?e.push(R):e=[R])}}else if(u===H.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Fo):e=[Fo])}u=u.return}e!==null&&ju(n,e,a,r),n.flags|=262144}function Rl(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ps(e){hs=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return hm(hs,e)}function Cl(e,n){return hs===null&&ps(e),hm(e,n)}function hm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(e===null)throw Error(s(308));$i=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else $i=$i.next=n;return a}var nS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},iS=o.unstable_scheduleCallback,aS=o.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new nS,data:new Map,refCount:0}}function co(e){e.refCount--,e.refCount===0&&iS(aS,function(){e.controller.abort()})}var uo=null,Zu=0,tr=0,er=null;function sS(e,n){if(uo===null){var a=uo=[];Zu=0,tr=$f(),er={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Zu++,n.then(pm,pm),n}function pm(){if(--Zu===0&&uo!==null){er!==null&&(er.status="fulfilled");var e=uo;uo=null,tr=0,er=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function rS(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var mm=L.S;L.S=function(e,n){J0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&sS(e,n),mm!==null&&mm(e,n)};var ms=P(null);function Ku(){var e=ms.current;return e!==null?e:je.pooledCache}function wl(e,n){n===null?rt(ms,ms.current):rt(ms,n.pool)}function gm(){var e=Ku();return e===null?null:{parent:cn._currentValue,pool:e}}var nr=Error(s(460)),Qu=Error(s(474)),Dl=Error(s(542)),Ul={then:function(){}};function _m(e){return e=e.status,e==="fulfilled"||e==="rejected"}function vm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Sm(e),e;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Sm(e),e}throw _s=n,nr}}function gs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_s=a,nr):a}}var _s=null;function xm(){if(_s===null)throw Error(s(459));var e=_s;return _s=null,e}function Sm(e){if(e===nr||e===Dl)throw Error(s(483))}var ir=null,fo=0;function Nl(e){var n=fo;return fo+=1,ir===null&&(ir=[]),vm(ir,e,n)}function ho(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ll(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function ym(e){function n(tt,q){if(e){var ot=tt.deletions;ot===null?(tt.deletions=[q],tt.flags|=16):ot.push(q)}}function a(tt,q){if(!e)return null;for(;q!==null;)n(tt,q),q=q.sibling;return null}function r(tt){for(var q=new Map;tt!==null;)tt.key!==null?q.set(tt.key,tt):q.set(tt.index,tt),tt=tt.sibling;return q}function u(tt,q){return tt=Qi(tt,q),tt.index=0,tt.sibling=null,tt}function f(tt,q,ot){return tt.index=ot,e?(ot=tt.alternate,ot!==null?(ot=ot.index,ot<q?(tt.flags|=67108866,q):ot):(tt.flags|=67108866,q)):(tt.flags|=1048576,q)}function S(tt){return e&&tt.alternate===null&&(tt.flags|=67108866),tt}function R(tt,q,ot,yt){return q===null||q.tag!==6?(q=Iu(ot,tt.mode,yt),q.return=tt,q):(q=u(q,ot),q.return=tt,q)}function V(tt,q,ot,yt){var ae=ot.type;return ae===w?St(tt,q,ot.props.children,yt,ot.key):q!==null&&(q.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===T&&gs(ae)===q.type)?(q=u(q,ot.props),ho(q,ot),q.return=tt,q):(q=Tl(ot.type,ot.key,ot.props,null,tt.mode,yt),ho(q,ot),q.return=tt,q)}function lt(tt,q,ot,yt){return q===null||q.tag!==4||q.stateNode.containerInfo!==ot.containerInfo||q.stateNode.implementation!==ot.implementation?(q=Hu(ot,tt.mode,yt),q.return=tt,q):(q=u(q,ot.children||[]),q.return=tt,q)}function St(tt,q,ot,yt,ae){return q===null||q.tag!==7?(q=fs(ot,tt.mode,yt,ae),q.return=tt,q):(q=u(q,ot),q.return=tt,q)}function bt(tt,q,ot){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Iu(""+q,tt.mode,ot),q.return=tt,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case M:return ot=Tl(q.type,q.key,q.props,null,tt.mode,ot),ho(ot,q),ot.return=tt,ot;case b:return q=Hu(q,tt.mode,ot),q.return=tt,q;case T:return q=gs(q),bt(tt,q,ot)}if($(q)||et(q))return q=fs(q,tt.mode,ot,null),q.return=tt,q;if(typeof q.then=="function")return bt(tt,Nl(q),ot);if(q.$$typeof===U)return bt(tt,Cl(tt,q),ot);Ll(tt,q)}return null}function ut(tt,q,ot,yt){var ae=q!==null?q.key:null;if(typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint")return ae!==null?null:R(tt,q,""+ot,yt);if(typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case M:return ot.key===ae?V(tt,q,ot,yt):null;case b:return ot.key===ae?lt(tt,q,ot,yt):null;case T:return ot=gs(ot),ut(tt,q,ot,yt)}if($(ot)||et(ot))return ae!==null?null:St(tt,q,ot,yt,null);if(typeof ot.then=="function")return ut(tt,q,Nl(ot),yt);if(ot.$$typeof===U)return ut(tt,q,Cl(tt,ot),yt);Ll(tt,ot)}return null}function ht(tt,q,ot,yt,ae){if(typeof yt=="string"&&yt!==""||typeof yt=="number"||typeof yt=="bigint")return tt=tt.get(ot)||null,R(q,tt,""+yt,ae);if(typeof yt=="object"&&yt!==null){switch(yt.$$typeof){case M:return tt=tt.get(yt.key===null?ot:yt.key)||null,V(q,tt,yt,ae);case b:return tt=tt.get(yt.key===null?ot:yt.key)||null,lt(q,tt,yt,ae);case T:return yt=gs(yt),ht(tt,q,ot,yt,ae)}if($(yt)||et(yt))return tt=tt.get(ot)||null,St(q,tt,yt,ae,null);if(typeof yt.then=="function")return ht(tt,q,ot,Nl(yt),ae);if(yt.$$typeof===U)return ht(tt,q,ot,Cl(q,yt),ae);Ll(q,yt)}return null}function Kt(tt,q,ot,yt){for(var ae=null,Pe=null,$t=q,ve=q=0,Ce=null;$t!==null&&ve<ot.length;ve++){$t.index>ve?(Ce=$t,$t=null):Ce=$t.sibling;var Fe=ut(tt,$t,ot[ve],yt);if(Fe===null){$t===null&&($t=Ce);break}e&&$t&&Fe.alternate===null&&n(tt,$t),q=f(Fe,q,ve),Pe===null?ae=Fe:Pe.sibling=Fe,Pe=Fe,$t=Ce}if(ve===ot.length)return a(tt,$t),we&&Ji(tt,ve),ae;if($t===null){for(;ve<ot.length;ve++)$t=bt(tt,ot[ve],yt),$t!==null&&(q=f($t,q,ve),Pe===null?ae=$t:Pe.sibling=$t,Pe=$t);return we&&Ji(tt,ve),ae}for($t=r($t);ve<ot.length;ve++)Ce=ht($t,tt,ve,ot[ve],yt),Ce!==null&&(e&&Ce.alternate!==null&&$t.delete(Ce.key===null?ve:Ce.key),q=f(Ce,q,ve),Pe===null?ae=Ce:Pe.sibling=Ce,Pe=Ce);return e&&$t.forEach(function(Ya){return n(tt,Ya)}),we&&Ji(tt,ve),ae}function se(tt,q,ot,yt){if(ot==null)throw Error(s(151));for(var ae=null,Pe=null,$t=q,ve=q=0,Ce=null,Fe=ot.next();$t!==null&&!Fe.done;ve++,Fe=ot.next()){$t.index>ve?(Ce=$t,$t=null):Ce=$t.sibling;var Ya=ut(tt,$t,Fe.value,yt);if(Ya===null){$t===null&&($t=Ce);break}e&&$t&&Ya.alternate===null&&n(tt,$t),q=f(Ya,q,ve),Pe===null?ae=Ya:Pe.sibling=Ya,Pe=Ya,$t=Ce}if(Fe.done)return a(tt,$t),we&&Ji(tt,ve),ae;if($t===null){for(;!Fe.done;ve++,Fe=ot.next())Fe=bt(tt,Fe.value,yt),Fe!==null&&(q=f(Fe,q,ve),Pe===null?ae=Fe:Pe.sibling=Fe,Pe=Fe);return we&&Ji(tt,ve),ae}for($t=r($t);!Fe.done;ve++,Fe=ot.next())Fe=ht($t,tt,ve,Fe.value,yt),Fe!==null&&(e&&Fe.alternate!==null&&$t.delete(Fe.key===null?ve:Fe.key),q=f(Fe,q,ve),Pe===null?ae=Fe:Pe.sibling=Fe,Pe=Fe);return e&&$t.forEach(function(_y){return n(tt,_y)}),we&&Ji(tt,ve),ae}function We(tt,q,ot,yt){if(typeof ot=="object"&&ot!==null&&ot.type===w&&ot.key===null&&(ot=ot.props.children),typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case M:t:{for(var ae=ot.key;q!==null;){if(q.key===ae){if(ae=ot.type,ae===w){if(q.tag===7){a(tt,q.sibling),yt=u(q,ot.props.children),yt.return=tt,tt=yt;break t}}else if(q.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===T&&gs(ae)===q.type){a(tt,q.sibling),yt=u(q,ot.props),ho(yt,ot),yt.return=tt,tt=yt;break t}a(tt,q);break}else n(tt,q);q=q.sibling}ot.type===w?(yt=fs(ot.props.children,tt.mode,yt,ot.key),yt.return=tt,tt=yt):(yt=Tl(ot.type,ot.key,ot.props,null,tt.mode,yt),ho(yt,ot),yt.return=tt,tt=yt)}return S(tt);case b:t:{for(ae=ot.key;q!==null;){if(q.key===ae)if(q.tag===4&&q.stateNode.containerInfo===ot.containerInfo&&q.stateNode.implementation===ot.implementation){a(tt,q.sibling),yt=u(q,ot.children||[]),yt.return=tt,tt=yt;break t}else{a(tt,q);break}else n(tt,q);q=q.sibling}yt=Hu(ot,tt.mode,yt),yt.return=tt,tt=yt}return S(tt);case T:return ot=gs(ot),We(tt,q,ot,yt)}if($(ot))return Kt(tt,q,ot,yt);if(et(ot)){if(ae=et(ot),typeof ae!="function")throw Error(s(150));return ot=ae.call(ot),se(tt,q,ot,yt)}if(typeof ot.then=="function")return We(tt,q,Nl(ot),yt);if(ot.$$typeof===U)return We(tt,q,Cl(tt,ot),yt);Ll(tt,ot)}return typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint"?(ot=""+ot,q!==null&&q.tag===6?(a(tt,q.sibling),yt=u(q,ot),yt.return=tt,tt=yt):(a(tt,q),yt=Iu(ot,tt.mode,yt),yt.return=tt,tt=yt),S(tt)):a(tt,q)}return function(tt,q,ot,yt){try{fo=0;var ae=We(tt,q,ot,yt);return ir=null,ae}catch($t){if($t===nr||$t===Dl)throw $t;var Pe=Qn(29,$t,null,tt.mode);return Pe.lanes=yt,Pe.return=tt,Pe}finally{}}}var vs=ym(!0),Mm=ym(!1),Ua=!1;function Ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ze&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=bl(e),sm(e,null,a),n}return El(e,r,n,a),bl(e)}function po(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Bs(e,a)}}function tf(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var ef=!1;function mo(){if(ef){var e=er;if(e!==null)throw e}}function go(e,n,a,r){ef=!1;var u=e.updateQueue;Ua=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var V=R,lt=V.next;V.next=null,S===null?f=lt:S.next=lt,S=V;var St=e.alternate;St!==null&&(St=St.updateQueue,R=St.lastBaseUpdate,R!==S&&(R===null?St.firstBaseUpdate=lt:R.next=lt,St.lastBaseUpdate=V))}if(f!==null){var bt=u.baseState;S=0,St=lt=V=null,R=f;do{var ut=R.lane&-536870913,ht=ut!==R.lane;if(ht?(Re&ut)===ut:(r&ut)===ut){ut!==0&&ut===tr&&(ef=!0),St!==null&&(St=St.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Kt=e,se=R;ut=n;var We=a;switch(se.tag){case 1:if(Kt=se.payload,typeof Kt=="function"){bt=Kt.call(We,bt,ut);break t}bt=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=se.payload,ut=typeof Kt=="function"?Kt.call(We,bt,ut):Kt,ut==null)break t;bt=y({},bt,ut);break t;case 2:Ua=!0}}ut=R.callback,ut!==null&&(e.flags|=64,ht&&(e.flags|=8192),ht=u.callbacks,ht===null?u.callbacks=[ut]:ht.push(ut))}else ht={lane:ut,tag:R.tag,payload:R.payload,callback:R.callback,next:null},St===null?(lt=St=ht,V=bt):St=St.next=ht,S|=ut;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ht=R,R=ht.next,ht.next=null,u.lastBaseUpdate=ht,u.shared.pending=null}}while(!0);St===null&&(V=bt),u.baseState=V,u.firstBaseUpdate=lt,u.lastBaseUpdate=St,f===null&&(u.shared.lanes=0),Ba|=S,e.lanes=S,e.memoizedState=bt}}function Em(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function bm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Em(a[e],n)}var ar=P(null),Ol=P(0);function Tm(e,n){e=ca,rt(Ol,e),rt(ar,n),ca=e|n.baseLanes}function nf(){rt(Ol,ca),rt(ar,ar.current)}function af(){ca=Ol.current,j(ar),j(Ol)}var Jn=P(null),hi=null;function Oa(e){var n=e.alternate;rt(an,an.current&1),rt(Jn,e),hi===null&&(n===null||ar.current!==null||n.memoizedState!==null)&&(hi=e)}function sf(e){rt(an,an.current),rt(Jn,e),hi===null&&(hi=e)}function Am(e){e.tag===22?(rt(an,an.current),rt(Jn,e),hi===null&&(hi=e)):Pa()}function Pa(){rt(an,an.current),rt(Jn,Jn.current)}function $n(e){j(Jn),hi===e&&(hi=null),j(an)}var an=P(0);function Pl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fd(a)||dd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ea=0,pe=null,ke=null,un=null,Fl=!1,sr=!1,xs=!1,zl=0,_o=0,rr=null,oS=0;function tn(){throw Error(s(321))}function rf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Kn(e[a],n[a]))return!1;return!0}function of(e,n,a,r,u,f){return ea=f,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=e===null||e.memoizedState===null?c0:Mf,xs=!1,f=a(r,u),xs=!1,sr&&(f=Cm(n,a,r,u)),Rm(e),f}function Rm(e){L.H=So;var n=ke!==null&&ke.next!==null;if(ea=0,un=ke=pe=null,Fl=!1,_o=0,rr=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&Rl(e)&&(fn=!0))}function Cm(e,n,a,r){pe=e;var u=0;do{if(sr&&(rr=null),_o=0,sr=!1,25<=u)throw Error(s(301));if(u+=1,un=ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=u0,f=n(a,r)}while(sr);return f}function lS(){var e=L.H,n=e.useState()[0];return n=typeof n.then=="function"?vo(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(pe.flags|=1024),n}function lf(){var e=zl!==0;return zl=0,e}function cf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function uf(e){if(Fl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Fl=!1}ea=0,un=ke=pe=null,sr=!1,_o=zl=0,rr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?pe.memoizedState=un=e:un=un.next=e,un}function sn(){if(ke===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=un===null?pe.memoizedState:un.next;if(n!==null)un=n,ke=e;else{if(e===null)throw pe.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},un===null?pe.memoizedState=un=e:un=un.next=e}return un}function Bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(e){var n=_o;return _o+=1,rr===null&&(rr=[]),e=vm(rr,e,n),n=pe,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?c0:Mf),e}function Il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vo(e);if(e.$$typeof===U)return Mn(e)}throw Error(s(438,String(e)))}function ff(e){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=pe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Bl(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=pt;return n.index++,a}function na(e,n){return typeof n=="function"?n(e):n}function Hl(e){var n=sn();return df(n,ke,e)}function df(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var R=S=null,V=null,lt=n,St=!1;do{var bt=lt.lane&-536870913;if(bt!==lt.lane?(Re&bt)===bt:(ea&bt)===bt){var ut=lt.revertLane;if(ut===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null}),bt===tr&&(St=!0);else if((ea&ut)===ut){lt=lt.next,ut===tr&&(St=!0);continue}else bt={lane:0,revertLane:lt.revertLane,gesture:null,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null},V===null?(R=V=bt,S=f):V=V.next=bt,pe.lanes|=ut,Ba|=ut;bt=lt.action,xs&&a(f,bt),f=lt.hasEagerState?lt.eagerState:a(f,bt)}else ut={lane:bt,revertLane:lt.revertLane,gesture:lt.gesture,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null},V===null?(R=V=ut,S=f):V=V.next=ut,pe.lanes|=bt,Ba|=bt;lt=lt.next}while(lt!==null&&lt!==n);if(V===null?S=f:V.next=R,!Kn(f,e.memoizedState)&&(fn=!0,St&&(a=er,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=V,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function hf(e){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);Kn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function wm(e,n,a){var r=pe,u=sn(),f=we;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Kn((ke||u).memoizedState,a);if(S&&(u.memoizedState=a,fn=!0),u=u.queue,gf(Nm.bind(null,r,u,e),[e]),u.getSnapshot!==n||S||un!==null&&un.memoizedState.tag&1){if(r.flags|=2048,or(9,{destroy:void 0},Um.bind(null,r,u,a,n),null),je===null)throw Error(s(349));f||(ea&127)!==0||Dm(r,n,a)}return a}function Dm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=Bl(),pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Um(e,n,a,r){n.value=a,n.getSnapshot=r,Lm(n)&&Om(e)}function Nm(e,n,a){return a(function(){Lm(n)&&Om(e)})}function Lm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Kn(e,a)}catch{return!0}}function Om(e){var n=us(e,2);n!==null&&qn(n,e,2)}function pf(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),xs){Ht(!0);try{a()}finally{Ht(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},n}function Pm(e,n,a,r){return e.baseState=a,df(e,ke,typeof r=="function"?r:na)}function cS(e,n,a,r,u){if(kl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};L.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Fm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Fm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=L.T,S={};L.T=S;try{var R=a(u,r),V=L.S;V!==null&&V(S,R),zm(e,n,R)}catch(lt){mf(e,n,lt)}finally{f!==null&&S.types!==null&&(f.types=S.types),L.T=f}}else try{f=a(u,r),zm(e,n,f)}catch(lt){mf(e,n,lt)}}function zm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Bm(e,n,r)},function(r){return mf(e,n,r)}):Bm(e,n,a)}function Bm(e,n,a){n.status="fulfilled",n.value=a,Im(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Fm(e,a)))}function mf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Im(n),n=n.next;while(n!==r)}e.action=null}function Im(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Hm(e,n){return n}function Gm(e,n){if(we){var a=je.formState;if(a!==null){t:{var r=pe;if(we){if(Ye){e:{for(var u=Ye,f=di;u.nodeType!==8;){if(!f){u=null;break e}if(u=pi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ye=pi(u.nextSibling),r=u.data==="F!";break t}}wa(r)}r=!1}r&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hm,lastRenderedState:n},a.queue=r,a=r0.bind(null,pe,r),r.dispatch=a,r=pf(!1),f=yf.bind(null,pe,!1,r.queue),r=Bn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=cS.bind(null,pe,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function Vm(e){var n=sn();return km(n,ke,e)}function km(e,n,a){if(n=df(e,n,Hm)[0],e=Hl(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=vo(n)}catch(S){throw S===nr?Dl:S}else r=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,or(9,{destroy:void 0},uS.bind(null,u,a),null)),[r,f,e]}function uS(e,n){e.action=n}function Xm(e){var n=sn(),a=ke;if(a!==null)return km(n,a,e);sn(),n=n.memoizedState,a=sn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function or(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=pe.updateQueue,n===null&&(n=Bl(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Wm(){return sn().memoizedState}function Gl(e,n,a,r){var u=Bn();pe.flags|=e,u.memoizedState=or(1|n,{destroy:void 0},a,r===void 0?null:r)}function Vl(e,n,a,r){var u=sn();r=r===void 0?null:r;var f=u.memoizedState.inst;ke!==null&&r!==null&&rf(r,ke.memoizedState.deps)?u.memoizedState=or(n,f,a,r):(pe.flags|=e,u.memoizedState=or(1|n,f,a,r))}function qm(e,n){Gl(8390656,8,e,n)}function gf(e,n){Vl(2048,8,e,n)}function fS(e){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=Bl(),pe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function jm(e){var n=sn().memoizedState;return fS({ref:n,nextImpl:e}),function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Ym(e,n){return Vl(4,2,e,n)}function Zm(e,n){return Vl(4,4,e,n)}function Km(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Qm(e,n,a){a=a!=null?a.concat([e]):null,Vl(4,4,Km.bind(null,n,e),a)}function _f(){}function Jm(e,n){var a=sn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&rf(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function $m(e,n){var a=sn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&rf(n,r[1]))return r[0];if(r=e(),xs){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[r,n],r}function vf(e,n,a){return a===void 0||(ea&1073741824)!==0&&(Re&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=tg(),pe.lanes|=e,Ba|=e,a)}function t0(e,n,a,r){return Kn(a,n)?a:ar.current!==null?(e=vf(e,a,r),Kn(e,n)||(fn=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(Re&261930)===0?(fn=!0,e.memoizedState=a):(e=tg(),pe.lanes|=e,Ba|=e,n)}function e0(e,n,a,r,u){var f=z.p;z.p=f!==0&&8>f?f:8;var S=L.T,R={};L.T=R,yf(e,!1,n,a);try{var V=u(),lt=L.S;if(lt!==null&&lt(R,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var St=rS(V,r);xo(e,n,St,ni(e))}else xo(e,n,r,ni(e))}catch(bt){xo(e,n,{then:function(){},status:"rejected",reason:bt},ni())}finally{z.p=f,S!==null&&R.types!==null&&(S.types=R.types),L.T=S}}function dS(){}function xf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=n0(e).queue;e0(e,u,n,W,a===null?dS:function(){return i0(e),a(r)})}function n0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function i0(e){var n=n0(e);n.next===null&&(n=e.alternate.memoizedState),xo(e,n.next.queue,{},ni())}function Sf(){return Mn(Fo)}function a0(){return sn().memoizedState}function s0(){return sn().memoizedState}function hS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();e=Na(a);var r=La(n,e,a);r!==null&&(qn(r,n,a),po(r,n,a)),n={cache:Yu()},e.payload=n;return}n=n.return}}function pS(e,n,a){var r=ni();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},kl(e)?o0(n,a):(a=zu(e,n,a,r),a!==null&&(qn(a,e,r),l0(a,n,r)))}function r0(e,n,a){var r=ni();xo(e,n,a,r)}function xo(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(kl(e))o0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,R=f(S,a);if(u.hasEagerState=!0,u.eagerState=R,Kn(R,S))return El(e,n,u,0),je===null&&Ml(),!1}catch{}finally{}if(a=zu(e,n,u,r),a!==null)return qn(a,e,r),l0(a,n,r),!0}return!1}function yf(e,n,a,r){if(r={lane:2,revertLane:$f(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},kl(e)){if(n)throw Error(s(479))}else n=zu(e,a,r,2),n!==null&&qn(n,e,2)}function kl(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function o0(e,n){sr=Fl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function l0(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Bs(e,a)}}var So={readContext:Mn,use:Il,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};So.useEffectEvent=tn;var c0={readContext:Mn,use:Il,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:qm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Gl(4194308,4,Km.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Gl(4194308,4,e,n)},useInsertionEffect:function(e,n){Gl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var r=e();if(xs){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Bn();if(a!==void 0){var u=a(n);if(xs){Ht(!0);try{a(n)}finally{Ht(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=pS.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=pf(e);var n=e.queue,a=r0.bind(null,pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:_f,useDeferredValue:function(e,n){var a=Bn();return vf(a,e,n)},useTransition:function(){var e=pf(!1);return e=e0.bind(null,pe,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=pe,u=Bn();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),je===null)throw Error(s(349));(Re&127)!==0||Dm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,qm(Nm.bind(null,r,f,e),[e]),r.flags|=2048,or(9,{destroy:void 0},Um.bind(null,r,f,a,n),null),a},useId:function(){var e=Bn(),n=je.identifierPrefix;if(we){var a=Ni,r=Ui;a=(r&~(1<<32-zt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=zl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=oS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Sf,useFormState:Gm,useActionState:Gm,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=yf.bind(null,pe,!0,a),a.dispatch=n,[e,n]},useMemoCache:ff,useCacheRefresh:function(){return Bn().memoizedState=hS.bind(null,pe)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Mf={readContext:Mn,use:Il,useCallback:Jm,useContext:Mn,useEffect:gf,useImperativeHandle:Qm,useInsertionEffect:Ym,useLayoutEffect:Zm,useMemo:$m,useReducer:Hl,useRef:Wm,useState:function(){return Hl(na)},useDebugValue:_f,useDeferredValue:function(e,n){var a=sn();return t0(a,ke.memoizedState,e,n)},useTransition:function(){var e=Hl(na)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:wm,useId:a0,useHostTransitionStatus:Sf,useFormState:Vm,useActionState:Vm,useOptimistic:function(e,n){var a=sn();return Pm(a,ke,e,n)},useMemoCache:ff,useCacheRefresh:s0};Mf.useEffectEvent=jm;var u0={readContext:Mn,use:Il,useCallback:Jm,useContext:Mn,useEffect:gf,useImperativeHandle:Qm,useInsertionEffect:Ym,useLayoutEffect:Zm,useMemo:$m,useReducer:hf,useRef:Wm,useState:function(){return hf(na)},useDebugValue:_f,useDeferredValue:function(e,n){var a=sn();return ke===null?vf(a,e,n):t0(a,ke.memoizedState,e,n)},useTransition:function(){var e=hf(na)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:wm,useId:a0,useHostTransitionStatus:Sf,useFormState:Xm,useActionState:Xm,useOptimistic:function(e,n){var a=sn();return ke!==null?Pm(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ff,useCacheRefresh:s0};u0.useEffectEvent=jm;function Ef(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:y({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var bf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ni(),u=Na(r);u.payload=n,a!=null&&(u.callback=a),n=La(e,u,r),n!==null&&(qn(n,e,r),po(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ni(),u=Na(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(e,u,r),n!==null&&(qn(n,e,r),po(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ni(),r=Na(a);r.tag=2,n!=null&&(r.callback=n),n=La(e,r,a),n!==null&&(qn(n,e,a),po(n,e,a))}};function f0(e,n,a,r,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,S):n.prototype&&n.prototype.isPureReactComponent?!so(a,r)||!so(u,f):!0}function d0(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&bf.enqueueReplaceState(n,n.state,null)}function Ss(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=y({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function h0(e){yl(e)}function p0(e){console.error(e)}function m0(e){yl(e)}function Xl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function g0(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tf(e,n,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){Xl(e,n)},a}function _0(e){return e=Na(e),e.tag=3,e}function v0(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){g0(n,a,r)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){g0(n,a,r),typeof u!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function mS(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&$s(n,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?nc():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===Ul?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Kf(e,r,u)),!1;case 22:return a.flags|=65536,r===Ul?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Kf(e,r,u)),!1}throw Error(s(435,a.tag))}return Kf(e,r,u),nc(),!1}if(we)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==ku&&(e=Error(s(422),{cause:r}),lo(ci(e,a)))):(r!==ku&&(n=Error(s(423),{cause:r}),lo(ci(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=ci(r,a),u=Tf(e.stateNode,r,u),tf(e,u),en!==4&&(en=2)),!1;var f=Error(s(520),{cause:r});if(f=ci(f,a),Co===null?Co=[f]:Co.push(f),en!==4&&(en=2),n===null)return!0;r=ci(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Tf(a.stateNode,r,e),tf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ia===null||!Ia.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=_0(u),v0(u,e,a,r),tf(a,u),!1}a=a.return}while(a!==null);return!1}var Af=Error(s(461)),fn=!1;function En(e,n,a,r){n.child=e===null?Mm(n,null,a,r):vs(n,e.child,a,r)}function x0(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var S={};for(var R in r)R!=="ref"&&(S[R]=r[R])}else S=r;return ps(n),r=of(e,n,a,S,f,u),R=lf(),e!==null&&!fn?(cf(e,n,u),ia(e,n,u)):(we&&R&&Gu(n),n.flags|=1,En(e,n,r,u),n.child)}function S0(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!Bu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,y0(e,n,f,r,u)):(e=Tl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Of(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:so,a(S,r)&&e.ref===n.ref)return ia(e,n,u)}return n.flags|=1,e=Qi(f,r),e.ref=n.ref,e.return=n,n.child=e}function y0(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(so(f,r)&&e.ref===n.ref)if(fn=!1,n.pendingProps=r=f,Of(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,ia(e,n,u)}return Rf(e,n,a,r,u)}function M0(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return E0(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&wl(n,f!==null?f.cachePool:null),f!==null?Tm(n,f):nf(),Am(n);else return r=n.lanes=536870912,E0(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(wl(n,f.cachePool),Tm(n,f),Pa(),n.memoizedState=null):(e!==null&&wl(n,null),nf(),Pa());return En(e,n,u,a),n.child}function yo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function E0(e,n,a,r,u){var f=Ku();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&wl(n,null),nf(),Am(n),e!==null&&$s(e,n,r,!0),n.childLanes=u,null}function Wl(e,n){return n=jl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function b0(e,n,a){return vs(n,e.child,null,a),e=Wl(n,n.pendingProps),e.flags|=2,$n(n),n.memoizedState=null,e}function gS(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(we){if(r.mode==="hidden")return e=Wl(n,r),n.lanes=536870912,yo(null,e);if(sf(n),(e=Ye)?(e=Fg(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=om(e),a.return=n,n.child=a,yn=n,Ye=null)):e=null,e===null)throw wa(n);return n.lanes=536870912,null}return Wl(n,r)}var f=e.memoizedState;if(f!==null){var S=f.dehydrated;if(sf(n),u)if(n.flags&256)n.flags&=-257,n=b0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||$s(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(r=je,r!==null&&(S=ul(r,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,us(e,S),qn(r,e,S),Af;nc(),n=b0(e,n,a)}else e=f.treeContext,Ye=pi(S.nextSibling),yn=n,we=!0,Ca=null,di=!1,e!==null&&um(n,e),n=Wl(n,r),n.flags|=4096;return n}return e=Qi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function ql(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Rf(e,n,a,r,u){return ps(n),a=of(e,n,a,r,void 0,u),r=lf(),e!==null&&!fn?(cf(e,n,u),ia(e,n,u)):(we&&r&&Gu(n),n.flags|=1,En(e,n,a,u),n.child)}function T0(e,n,a,r,u,f){return ps(n),n.updateQueue=null,a=Cm(n,r,a,u),Rm(e),r=lf(),e!==null&&!fn?(cf(e,n,f),ia(e,n,f)):(we&&r&&Gu(n),n.flags|=1,En(e,n,a,f),n.child)}function A0(e,n,a,r,u){if(ps(n),n.stateNode===null){var f=Zs,S=a.contextType;typeof S=="object"&&S!==null&&(f=Mn(S)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=bf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Ju(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?Mn(S):Zs,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Ef(n,a,S,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&bf.enqueueReplaceState(f,f.state,null),go(n,r,f,u),mo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var R=n.memoizedProps,V=Ss(a,R);f.props=V;var lt=f.context,St=a.contextType;S=Zs,typeof St=="object"&&St!==null&&(S=Mn(St));var bt=a.getDerivedStateFromProps;St=typeof bt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,St||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||lt!==S)&&d0(n,f,r,S),Ua=!1;var ut=n.memoizedState;f.state=ut,go(n,r,f,u),mo(),lt=n.memoizedState,R||ut!==lt||Ua?(typeof bt=="function"&&(Ef(n,a,bt,r),lt=n.memoizedState),(V=Ua||f0(n,a,V,r,ut,lt,S))?(St||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=lt),f.props=r,f.state=lt,f.context=S,r=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,$u(e,n),S=n.memoizedProps,St=Ss(a,S),f.props=St,bt=n.pendingProps,ut=f.context,lt=a.contextType,V=Zs,typeof lt=="object"&&lt!==null&&(V=Mn(lt)),R=a.getDerivedStateFromProps,(lt=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==bt||ut!==V)&&d0(n,f,r,V),Ua=!1,ut=n.memoizedState,f.state=ut,go(n,r,f,u),mo();var ht=n.memoizedState;S!==bt||ut!==ht||Ua||e!==null&&e.dependencies!==null&&Rl(e.dependencies)?(typeof R=="function"&&(Ef(n,a,R,r),ht=n.memoizedState),(St=Ua||f0(n,a,St,r,ut,ht,V)||e!==null&&e.dependencies!==null&&Rl(e.dependencies))?(lt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ht,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ht,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&ut===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ut===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ht),f.props=r,f.state=ht,f.context=V,r=St):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&ut===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&ut===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,ql(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=vs(n,e.child,null,u),n.child=vs(n,null,a,u)):En(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ia(e,n,u),e}function R0(e,n,a,r){return ds(),n.flags|=256,En(e,n,a,r),n.child}var Cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wf(e){return{baseLanes:e,cachePool:gm()}}function Df(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ei),e}function C0(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?Oa(n):Pa(),(e=Ye)?(e=Fg(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=om(e),a.return=n,n.child=a,yn=n,Ye=null)):e=null,e===null)throw wa(n);return dd(e)?n.lanes=32:n.lanes=536870912,null}var R=r.children;return r=r.fallback,u?(Pa(),u=n.mode,R=jl({mode:"hidden",children:R},u),r=fs(r,u,a,null),R.return=n,r.return=n,R.sibling=r,n.child=R,r=n.child,r.memoizedState=wf(a),r.childLanes=Df(e,S,a),n.memoizedState=Cf,yo(null,r)):(Oa(n),Uf(n,R))}var V=e.memoizedState;if(V!==null&&(R=V.dehydrated,R!==null)){if(f)n.flags&256?(Oa(n),n.flags&=-257,n=Nf(e,n,a)):n.memoizedState!==null?(Pa(),n.child=e.child,n.flags|=128,n=null):(Pa(),R=r.fallback,u=n.mode,r=jl({mode:"visible",children:r.children},u),R=fs(R,u,a,null),R.flags|=2,r.return=n,R.return=n,r.sibling=R,n.child=r,vs(n,e.child,null,a),r=n.child,r.memoizedState=wf(a),r.childLanes=Df(e,S,a),n.memoizedState=Cf,n=yo(null,r));else if(Oa(n),dd(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var lt=S.dgst;S=lt,r=Error(s(419)),r.stack="",r.digest=S,lo({value:r,source:null,stack:null}),n=Nf(e,n,a)}else if(fn||$s(e,n,a,!1),S=(a&e.childLanes)!==0,fn||S){if(S=je,S!==null&&(r=ul(S,a),r!==0&&r!==V.retryLane))throw V.retryLane=r,us(e,r),qn(S,e,r),Af;fd(R)||nc(),n=Nf(e,n,a)}else fd(R)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,Ye=pi(R.nextSibling),yn=n,we=!0,Ca=null,di=!1,e!==null&&um(n,e),n=Uf(n,r.children),n.flags|=4096);return n}return u?(Pa(),R=r.fallback,u=n.mode,V=e.child,lt=V.sibling,r=Qi(V,{mode:"hidden",children:r.children}),r.subtreeFlags=V.subtreeFlags&65011712,lt!==null?R=Qi(lt,R):(R=fs(R,u,a,null),R.flags|=2),R.return=n,r.return=n,r.sibling=R,n.child=r,yo(null,r),r=n.child,R=e.child.memoizedState,R===null?R=wf(a):(u=R.cachePool,u!==null?(V=cn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=gm(),R={baseLanes:R.baseLanes|a,cachePool:u}),r.memoizedState=R,r.childLanes=Df(e,S,a),n.memoizedState=Cf,yo(e.child,r)):(Oa(n),a=e.child,e=a.sibling,a=Qi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Uf(e,n){return n=jl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function jl(e,n){return e=Qn(22,e,null,n),e.lanes=0,e}function Nf(e,n,a){return vs(n,e.child,null,a),e=Uf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function w0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),qu(e.return,n,a)}function Lf(e,n,a,r,u,f){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=r,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function D0(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var S=an.current,R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,rt(an,S),En(e,n,r,a),r=we?oo:0,!R&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&w0(e,a,n);else if(e.tag===19)w0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Pl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Lf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Pl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Lf(n,!0,a,null,f,r);break;case"together":Lf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ia(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if($s(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Qi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Qi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Of(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Rl(e)))}function _S(e,n,a){switch(n.tag){case 3:ft(n,n.stateNode.containerInfo),Da(n,cn,e.memoizedState.cache),ds();break;case 27:case 5:Nt(n);break;case 4:ft(n,n.stateNode.containerInfo);break;case 10:Da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,sf(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Oa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?C0(e,n,a):(Oa(n),e=ia(e,n,a),e!==null?e.sibling:null);Oa(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||($s(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return D0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),rt(an,an.current),r)break;return null;case 22:return n.lanes=0,M0(e,n,a,n.pendingProps);case 24:Da(n,cn,e.memoizedState.cache)}return ia(e,n,a)}function U0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Of(e,a)&&(n.flags&128)===0)return fn=!1,_S(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,we&&(n.flags&1048576)!==0&&cm(n,oo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=gs(n.elementType),n.type=e,typeof e=="function")Bu(e)?(r=Ss(e,r),n.tag=1,n=A0(null,n,e,r,a)):(n.tag=0,n=Rf(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=x0(null,n,e,r,a);break t}else if(u===F){n.tag=14,n=S0(null,n,e,r,a);break t}}throw n=nt(e)||e,Error(s(306,n,""))}}return n;case 0:return Rf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Ss(r,n.pendingProps),A0(e,n,r,u,a);case 3:t:{if(ft(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,$u(e,n),go(n,r,null,a);var S=n.memoizedState;if(r=S.cache,Da(n,cn,r),r!==f.cache&&ju(n,[cn],a,!0),mo(),r=S.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=R0(e,n,r,a);break t}else if(r!==u){u=ci(Error(s(424)),n),lo(u),n=R0(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=pi(e.firstChild),yn=n,we=!0,Ca=null,di=!0,a=Mm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ds(),r===u){n=ia(e,n,a);break t}En(e,n,r,a)}n=n.child}return n;case 26:return ql(e,n),e===null?(a=Vg(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,r=cc(J.current).createElement(a),r[rn]=n,r[pn]=e,bn(r,a,e),Y(r),n.stateNode=r):n.memoizedState=Vg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Nt(n),e===null&&we&&(r=n.stateNode=Ig(n.type,n.pendingProps,J.current),yn=n,di=!0,u=Ye,ka(n.type)?(hd=u,Ye=pi(r.firstChild)):Ye=u),En(e,n,n.pendingProps.children,a),ql(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((u=r=Ye)&&(r=jS(r,n.type,n.pendingProps,di),r!==null?(n.stateNode=r,yn=n,Ye=pi(r.firstChild),di=!1,u=!0):u=!1),u||wa(n)),Nt(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,r=f.children,ld(u,f)?r=null:S!==null&&ld(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=of(e,n,lS,null,null,a),Fo._currentValue=u),ql(e,n),En(e,n,r,a),n.child;case 6:return e===null&&we&&((e=a=Ye)&&(a=YS(a,n.pendingProps,di),a!==null?(n.stateNode=a,yn=n,Ye=null,e=!0):e=!1),e||wa(n)),null;case 13:return C0(e,n,a);case 4:return ft(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=vs(n,null,r,a):En(e,n,r,a),n.child;case 11:return x0(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Da(n,n.type,r.value),En(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,ps(n),u=Mn(u),r=r(u),n.flags|=1,En(e,n,r,a),n.child;case 14:return S0(e,n,n.type,n.pendingProps,a);case 15:return y0(e,n,n.type,n.pendingProps,a);case 19:return D0(e,n,a);case 31:return gS(e,n,a);case 22:return M0(e,n,a,n.pendingProps);case 24:return ps(n),r=Mn(cn),e===null?(u=Ku(),u===null&&(u=je,f=Yu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Ju(n),Da(n,cn,u)):((e.lanes&a)!==0&&($u(e,n),go(n,null,null,a),mo()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Da(n,cn,r)):(r=f.cache,Da(n,cn,r),r!==u.cache&&ju(n,[cn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function aa(e){e.flags|=4}function Pf(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(ag())e.flags|=8192;else throw _s=Ul,Qu}else e.flags&=-16777217}function N0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!jg(n))if(ag())e.flags|=8192;else throw _s=Ul,Qu}function Yl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ie():536870912,e.lanes|=n,fr|=n)}function Mo(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function vS(e,n,a){var r=n.pendingProps;switch(Vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ta(cn),Et(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Js(n)?aa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Xu())),Ze(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(aa(n),f!==null?(Ze(n),N0(n,f)):(Ze(n),Pf(n,u,null,r,a))):f?f!==e.memoizedState?(aa(n),Ze(n),N0(n,f)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&aa(n),Ze(n),Pf(n,u,e,r,a)),null;case 27:if(Dt(n),a=J.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&aa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=Mt.current,Js(n)?fm(n):(e=Ig(u,r,a),n.stateNode=e,aa(n))}return Ze(n),null;case 5:if(Dt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&aa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(f=Mt.current,Js(n))fm(n);else{var S=cc(J.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?S.createElement("select",{is:r.is}):S.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?S.createElement(u,{is:r.is}):S.createElement(u)}}f[rn]=n,f[pn]=r;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;t:switch(bn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&aa(n)}}return Ze(n),Pf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&aa(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=J.current,Js(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=yn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Cg(e.nodeValue,a)),e||wa(n,!0)}else e=cc(e).createTextNode(r),e[rn]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Js(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[rn]=n}else ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=Xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Js(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[rn]=n}else ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=Xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),Ze(n),null);case 4:return Et(),e===null&&id(n.stateNode.containerInfo),Ze(n),null;case 10:return ta(n.type),Ze(n),null;case 19:if(j(an),r=n.memoizedState,r===null)return Ze(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)Mo(r,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Pl(e),f!==null){for(n.flags|=128,Mo(r,!1),e=f.updateQueue,n.updateQueue=e,Yl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)rm(a,e),a=a.sibling;return rt(an,an.current&1|2),we&&Ji(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&E()>$l&&(n.flags|=128,u=!0,Mo(r,!1),n.lanes=4194304)}else{if(!u)if(e=Pl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Yl(n,e),Mo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!we)return Ze(n),null}else 2*E()-r.renderingStartTime>$l&&a!==536870912&&(n.flags|=128,u=!0,Mo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=E(),e.sibling=null,a=an.current,rt(an,u?a&1|2:a&1),we&&Ji(n,r.treeForkCount),e):(Ze(n),null);case 22:case 23:return $n(n),af(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&j(ms),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ta(cn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function xS(e,n){switch(Vu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ta(cn),Et(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Dt(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(s(340));ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if($n(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return j(an),null;case 4:return Et(),null;case 10:return ta(n.type),null;case 22:case 23:return $n(n),af(),e!==null&&j(ms),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ta(cn),null;case 25:return null;default:return null}}function L0(e,n){switch(Vu(n),n.tag){case 3:ta(cn),Et();break;case 26:case 27:case 5:Dt(n);break;case 4:Et();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:j(an);break;case 10:ta(n.type);break;case 22:case 23:$n(n),af(),e!==null&&j(ms);break;case 24:ta(cn)}}function Eo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,S=a.inst;r=f(),S.destroy=r}a=a.next}while(a!==u)}}catch(R){Ge(n,n.return,R)}}function Fa(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var S=r.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,u=n;var V=a,lt=R;try{lt()}catch(St){Ge(u,V,St)}}}r=r.next}while(r!==f)}}catch(St){Ge(n,n.return,St)}}function O0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{bm(n,a)}catch(r){Ge(e,e.return,r)}}}function P0(e,n,a){a.props=Ss(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ge(e,n,r)}}function bo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Ge(e,n,u)}}function Li(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function F0(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Ff(e,n,a){try{var r=e.stateNode;GS(r,e.type,a,n),r[pn]=n}catch(u){Ge(e,e.return,u)}}function z0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function zf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||z0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Bf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi));else if(r!==4&&(r===27&&ka(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Bf(e,n,a),e=e.sibling;e!==null;)Bf(e,n,a),e=e.sibling}function Zl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Zl(e,n,a),e=e.sibling;e!==null;)Zl(e,n,a),e=e.sibling}function B0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);bn(n,r,a),n[rn]=e,n[pn]=a}catch(f){Ge(e,e.return,f)}}var sa=!1,dn=!1,If=!1,I0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function SS(e,n){if(e=e.containerInfo,rd=gc,e=Qp(e),Uu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,R=-1,V=-1,lt=0,St=0,bt=e,ut=null;e:for(;;){for(var ht;bt!==a||u!==0&&bt.nodeType!==3||(R=S+u),bt!==f||r!==0&&bt.nodeType!==3||(V=S+r),bt.nodeType===3&&(S+=bt.nodeValue.length),(ht=bt.firstChild)!==null;)ut=bt,bt=ht;for(;;){if(bt===e)break e;if(ut===a&&++lt===u&&(R=S),ut===f&&++St===r&&(V=S),(ht=bt.nextSibling)!==null)break;bt=ut,ut=bt.parentNode}bt=ht}a=R===-1||V===-1?null:{start:R,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(od={focusedElem:e,selectionRange:a},gc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Kt=Ss(a.type,u);e=r.getSnapshotBeforeUpdate(Kt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(se){Ge(a,a.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ud(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ud(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function H0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:oa(e,a),r&4&&Eo(5,a);break;case 1:if(oa(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ge(a,a.return,S)}else{var u=Ss(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ge(a,a.return,S)}}r&64&&O0(a),r&512&&bo(a,a.return);break;case 3:if(oa(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{bm(e,n)}catch(S){Ge(a,a.return,S)}}break;case 27:n===null&&r&4&&B0(a);case 26:case 5:oa(e,a),n===null&&r&4&&F0(a),r&512&&bo(a,a.return);break;case 12:oa(e,a);break;case 31:oa(e,a),r&4&&k0(e,a);break;case 13:oa(e,a),r&4&&X0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=wS.bind(null,a),ZS(e,a))));break;case 22:if(r=a.memoizedState!==null||sa,!r){n=n!==null&&n.memoizedState!==null||dn,u=sa;var f=dn;sa=r,(dn=n)&&!f?la(e,a,(a.subtreeFlags&8772)!==0):oa(e,a),sa=u,dn=f}break;case 30:break;default:oa(e,a)}}function G0(e){var n=e.alternate;n!==null&&(e.alternate=null,G0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Qr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Vn=!1;function ra(e,n,a){for(a=a.child;a!==null;)V0(e,n,a),a=a.sibling}function V0(e,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Rt,a)}catch{}switch(a.tag){case 26:dn||Li(a,n),ra(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Li(a,n);var r=$e,u=Vn;ka(a.type)&&($e=a.stateNode,Vn=!1),ra(e,n,a),Lo(a.stateNode),$e=r,Vn=u;break;case 5:dn||Li(a,n);case 6:if(r=$e,u=Vn,$e=null,ra(e,n,a),$e=r,Vn=u,$e!==null)if(Vn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:$e!==null&&(Vn?(e=$e,Og(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),xr(e)):Og($e,a.stateNode));break;case 4:r=$e,u=Vn,$e=a.stateNode.containerInfo,Vn=!0,ra(e,n,a),$e=r,Vn=u;break;case 0:case 11:case 14:case 15:Fa(2,a,n),dn||Fa(4,a,n),ra(e,n,a);break;case 1:dn||(Li(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&P0(a,n,r)),ra(e,n,a);break;case 21:ra(e,n,a);break;case 22:dn=(r=dn)||a.memoizedState!==null,ra(e,n,a),dn=r;break;default:ra(e,n,a)}}function k0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{xr(e)}catch(a){Ge(n,n.return,a)}}}function X0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xr(e)}catch(a){Ge(n,n.return,a)}}function yS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new I0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new I0),n;default:throw Error(s(435,e.tag))}}function Kl(e,n){var a=yS(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=DS.bind(null,e,r);r.then(u,u)}})}function kn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,S=n,R=S;t:for(;R!==null;){switch(R.tag){case 27:if(ka(R.type)){$e=R.stateNode,Vn=!1;break t}break;case 5:$e=R.stateNode,Vn=!1;break t;case 3:case 4:$e=R.stateNode.containerInfo,Vn=!0;break t}R=R.return}if($e===null)throw Error(s(160));V0(f,S,u),$e=null,Vn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)W0(n,e),n=n.sibling}var bi=null;function W0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:kn(n,e),Xn(e),r&4&&(Fa(3,e,e.return),Eo(3,e),Fa(5,e,e.return));break;case 1:kn(n,e),Xn(e),r&512&&(dn||a===null||Li(a,a.return)),r&64&&sa&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=bi;if(kn(n,e),Xn(e),r&512&&(dn||a===null||Li(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ss]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),bn(f,r,a),f[rn]=e,Y(f),r=f;break t;case"link":var S=Wg("link","href",u).get(r+(a.href||""));if(S){for(var R=0;R<S.length;R++)if(f=S[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(R,1);break e}}f=u.createElement(r),bn(f,r,a),u.head.appendChild(f);break;case"meta":if(S=Wg("meta","content",u).get(r+(a.content||""))){for(R=0;R<S.length;R++)if(f=S[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(R,1);break e}}f=u.createElement(r),bn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[rn]=e,Y(f),r=f}e.stateNode=r}else qg(u,e.type,e.stateNode);else e.stateNode=Xg(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?qg(u,e.type,e.stateNode):Xg(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Ff(e,e.memoizedProps,a.memoizedProps)}break;case 27:kn(n,e),Xn(e),r&512&&(dn||a===null||Li(a,a.return)),a!==null&&r&4&&Ff(e,e.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,e),Xn(e),r&512&&(dn||a===null||Li(a,a.return)),e.flags&32){u=e.stateNode;try{zn(u,"")}catch(Kt){Ge(e,e.return,Kt)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,Ff(e,u,a!==null?a.memoizedProps:u)),r&1024&&(If=!0);break;case 6:if(kn(n,e),Xn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Kt){Ge(e,e.return,Kt)}}break;case 3:if(dc=null,u=bi,bi=uc(n.containerInfo),kn(n,e),bi=u,Xn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{xr(n.containerInfo)}catch(Kt){Ge(e,e.return,Kt)}If&&(If=!1,q0(e));break;case 4:r=bi,bi=uc(e.stateNode.containerInfo),kn(n,e),Xn(e),bi=r;break;case 12:kn(n,e),Xn(e);break;case 31:kn(n,e),Xn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Kl(e,r)));break;case 13:kn(n,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jl=E()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Kl(e,r)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,lt=sa,St=dn;if(sa=lt||u,dn=St||V,kn(n,e),dn=St,sa=lt,Xn(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||sa||dn||ys(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=V.stateNode;var bt=V.memoizedProps.style,ut=bt!=null&&bt.hasOwnProperty("display")?bt.display:null;R.style.display=ut==null||typeof ut=="boolean"?"":(""+ut).trim()}}catch(Kt){Ge(V,V.return,Kt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(Kt){Ge(V,V.return,Kt)}}}else if(n.tag===18){if(a===null){V=n;try{var ht=V.stateNode;u?Pg(ht,!0):Pg(V.stateNode,!1)}catch(Kt){Ge(V,V.return,Kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Kl(e,a))));break;case 19:kn(n,e),Xn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Kl(e,r)));break;case 30:break;case 21:break;default:kn(n,e),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(z0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=zf(e);Zl(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(zn(S,""),a.flags&=-33);var R=zf(e);Zl(e,R,S);break;case 3:case 4:var V=a.stateNode.containerInfo,lt=zf(e);Bf(e,lt,V);break;default:throw Error(s(161))}}catch(St){Ge(e,e.return,St)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function q0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;q0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function oa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)H0(e,n.alternate,n),n=n.sibling}function ys(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),ys(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&P0(n,n.return,a),ys(n);break;case 27:Lo(n.stateNode);case 26:case 5:Li(n,n.return),ys(n);break;case 22:n.memoizedState===null&&ys(n);break;case 30:ys(n);break;default:ys(n)}e=e.sibling}}function la(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:la(u,f,a),Eo(4,f);break;case 1:if(la(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(lt){Ge(r,r.return,lt)}if(r=f,u=r.updateQueue,u!==null){var R=r.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)Em(V[u],R)}catch(lt){Ge(r,r.return,lt)}}a&&S&64&&O0(f),bo(f,f.return);break;case 27:B0(f);case 26:case 5:la(u,f,a),a&&r===null&&S&4&&F0(f),bo(f,f.return);break;case 12:la(u,f,a);break;case 31:la(u,f,a),a&&S&4&&k0(u,f);break;case 13:la(u,f,a),a&&S&4&&X0(u,f);break;case 22:f.memoizedState===null&&la(u,f,a),bo(f,f.return);break;case 30:break;default:la(u,f,a)}n=n.sibling}}function Hf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&co(a))}function Gf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e))}function Ti(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)j0(e,n,a,r),n=n.sibling}function j0(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,a,r),u&2048&&Eo(9,n);break;case 1:Ti(e,n,a,r);break;case 3:Ti(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e)));break;case 12:if(u&2048){Ti(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,R=f.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Ge(n,n.return,V)}}else Ti(e,n,a,r);break;case 31:Ti(e,n,a,r);break;case 13:Ti(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(e,n,a,r):To(e,n):f._visibility&2?Ti(e,n,a,r):(f._visibility|=2,lr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Hf(S,n);break;case 24:Ti(e,n,a,r),u&2048&&Gf(n.alternate,n);break;default:Ti(e,n,a,r)}}function lr(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,S=n,R=a,V=r,lt=S.flags;switch(S.tag){case 0:case 11:case 15:lr(f,S,R,V,u),Eo(8,S);break;case 23:break;case 22:var St=S.stateNode;S.memoizedState!==null?St._visibility&2?lr(f,S,R,V,u):To(f,S):(St._visibility|=2,lr(f,S,R,V,u)),u&&lt&2048&&Hf(S.alternate,S);break;case 24:lr(f,S,R,V,u),u&&lt&2048&&Gf(S.alternate,S);break;default:lr(f,S,R,V,u)}n=n.sibling}}function To(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:To(a,r),u&2048&&Hf(r.alternate,r);break;case 24:To(a,r),u&2048&&Gf(r.alternate,r);break;default:To(a,r)}n=n.sibling}}var Ao=8192;function cr(e,n,a){if(e.subtreeFlags&Ao)for(e=e.child;e!==null;)Y0(e,n,a),e=e.sibling}function Y0(e,n,a){switch(e.tag){case 26:cr(e,n,a),e.flags&Ao&&e.memoizedState!==null&&oy(a,bi,e.memoizedState,e.memoizedProps);break;case 5:cr(e,n,a);break;case 3:case 4:var r=bi;bi=uc(e.stateNode.containerInfo),cr(e,n,a),bi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ao,Ao=16777216,cr(e,n,a),Ao=r):cr(e,n,a));break;default:cr(e,n,a)}}function Z0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ro(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,Q0(r,e)}Z0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)K0(e),e=e.sibling}function K0(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ql(e)):Ro(e);break;default:Ro(e)}}function Ql(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,Q0(r,e)}Z0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Ql(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ql(n));break;default:Ql(n)}e=e.sibling}}function Q0(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:co(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,xn=r;else t:for(a=e;xn!==null;){r=xn;var u=r.sibling,f=r.return;if(G0(r),r===a){xn=null;break t}if(u!==null){u.return=f,xn=u;break t}xn=f}}}var MS={getCacheForType:function(e){var n=Mn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(cn).controller.signal}},ES=typeof WeakMap=="function"?WeakMap:Map,ze=0,je=null,Me=null,Re=0,He=0,ti=null,za=!1,ur=!1,Vf=!1,ca=0,en=0,Ba=0,Ms=0,kf=0,ei=0,fr=0,Co=null,Wn=null,Xf=!1,Jl=0,J0=0,$l=1/0,tc=null,Ia=null,gn=0,Ha=null,dr=null,ua=0,Wf=0,qf=null,$0=null,wo=0,jf=null;function ni(){return(ze&2)!==0&&Re!==0?Re&-Re:L.T!==null?$f():Di()}function tg(){if(ei===0)if((Re&536870912)===0||we){var e=Ut;Ut<<=1,(Ut&3932160)===0&&(Ut=262144),ei=e}else ei=536870912;return e=Jn.current,e!==null&&(e.flags|=32),ei}function qn(e,n,a){(e===je&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(hr(e,0),Ga(e,Re,ei,!1)),On(e,a),((ze&2)===0||e!==je)&&(e===je&&((ze&2)===0&&(Ms|=a),en===4&&Ga(e,Re,ei,!1)),Oi(e))}function eg(e,n,a){if((ze&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Yt(e,n),u=r?AS(e,n):Zf(e,n,!0),f=r;do{if(u===0){ur&&!r&&Ga(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!bS(a)){u=Zf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var R=e;u=Co;var V=R.current.memoizedState.isDehydrated;if(V&&(hr(R,S).flags|=256),S=Zf(R,S,!1),S!==2){if(Vf&&!V){R.errorRecoveryDisabledLanes|=f,Ms|=f,u=4;break t}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){hr(e,0),Ga(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ga(r,n,ei,!za);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Jl+300-E(),10<u)){if(Ga(r,n,ei,!za),gt(r,0,!0)!==0)break t;ua=n,r.timeoutHandle=Ng(ng.bind(null,r,a,Wn,tc,Xf,n,ei,Ms,fr,za,f,"Throttled",-0,0),u);break t}ng(r,a,Wn,tc,Xf,n,ei,Ms,fr,za,f,null,-0,0)}}break}while(!0);Oi(e)}function ng(e,n,a,r,u,f,S,R,V,lt,St,bt,ut,ht){if(e.timeoutHandle=-1,bt=n.subtreeFlags,bt&8192||(bt&16785408)===16785408){bt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},Y0(n,f,bt);var Kt=(f&62914560)===f?Jl-E():(f&4194048)===f?J0-E():0;if(Kt=ly(bt,Kt),Kt!==null){ua=f,e.cancelPendingCommit=Kt(ug.bind(null,e,n,f,a,r,u,S,R,V,St,bt,null,ut,ht)),Ga(e,f,S,!lt);return}}ug(e,n,f,a,r,u,S,R,V)}function bS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Kn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ga(e,n,a,r){n&=~kf,n&=~Ms,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-zt(u),S=1<<f;r[f]=-1,u&=~S}a!==0&&Kr(e,a,n)}function ec(){return(ze&6)===0?(Do(0),!1):!0}function Yf(){if(Me!==null){if(He===0)var e=Me.return;else e=Me,$i=hs=null,uf(e),ir=null,fo=0,e=Me;for(;e!==null;)L0(e.alternate,e),e=e.return;Me=null}}function hr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,XS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ua=0,Yf(),je=e,Me=a=Qi(e.current,null),Re=n,He=0,ti=null,za=!1,ur=Yt(e,n),Vf=!1,fr=ei=kf=Ms=Ba=en=0,Wn=Co=null,Xf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-zt(r),f=1<<u;n|=e[u],r&=~f}return ca=n,Ml(),a}function ig(e,n){pe=null,L.H=So,n===nr||n===Dl?(n=xm(),He=3):n===Qu?(n=xm(),He=4):He=n===Af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,Me===null&&(en=1,Xl(e,ci(n,e.current)))}function ag(){var e=Jn.current;return e===null?!0:(Re&4194048)===Re?hi===null:(Re&62914560)===Re||(Re&536870912)!==0?e===hi:!1}function sg(){var e=L.H;return L.H=So,e===null?So:e}function rg(){var e=L.A;return L.A=MS,e}function nc(){en=4,za||(Re&4194048)!==Re&&Jn.current!==null||(ur=!0),(Ba&134217727)===0&&(Ms&134217727)===0||je===null||Ga(je,Re,ei,!1)}function Zf(e,n,a){var r=ze;ze|=2;var u=sg(),f=rg();(je!==e||Re!==n)&&(tc=null,hr(e,n)),n=!1;var S=en;t:do try{if(He!==0&&Me!==null){var R=Me,V=ti;switch(He){case 8:Yf(),S=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var lt=He;if(He=0,ti=null,pr(e,R,V,lt),a&&ur){S=0;break t}break;default:lt=He,He=0,ti=null,pr(e,R,V,lt)}}TS(),S=en;break}catch(St){ig(e,St)}while(!0);return n&&e.shellSuspendCounter++,$i=hs=null,ze=r,L.H=u,L.A=f,Me===null&&(je=null,Re=0,Ml()),S}function TS(){for(;Me!==null;)og(Me)}function AS(e,n){var a=ze;ze|=2;var r=sg(),u=rg();je!==e||Re!==n?(tc=null,$l=E()+500,hr(e,n)):ur=Yt(e,n);t:do try{if(He!==0&&Me!==null){n=Me;var f=ti;e:switch(He){case 1:He=0,ti=null,pr(e,n,f,1);break;case 2:case 9:if(_m(f)){He=0,ti=null,lg(n);break}n=function(){He!==2&&He!==9||je!==e||(He=7),Oi(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:_m(f)?(He=0,ti=null,lg(n)):(He=0,ti=null,pr(e,n,f,7));break;case 5:var S=null;switch(Me.tag){case 26:S=Me.memoizedState;case 5:case 27:var R=Me;if(S?jg(S):R.stateNode.complete){He=0,ti=null;var V=R.sibling;if(V!==null)Me=V;else{var lt=R.return;lt!==null?(Me=lt,ic(lt)):Me=null}break e}}He=0,ti=null,pr(e,n,f,5);break;case 6:He=0,ti=null,pr(e,n,f,6);break;case 8:Yf(),en=6;break t;default:throw Error(s(462))}}RS();break}catch(St){ig(e,St)}while(!0);return $i=hs=null,L.H=r,L.A=u,ze=a,Me!==null?0:(je=null,Re=0,Ml(),en)}function RS(){for(;Me!==null&&!Wt();)og(Me)}function og(e){var n=U0(e.alternate,e,ca);e.memoizedProps=e.pendingProps,n===null?ic(e):Me=n}function lg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=T0(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=T0(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:uf(n);default:L0(a,n),n=Me=rm(n,ca),n=U0(a,n,ca)}e.memoizedProps=e.pendingProps,n===null?ic(e):Me=n}function pr(e,n,a,r){$i=hs=null,uf(n),ir=null,fo=0;var u=n.return;try{if(mS(e,u,n,a,Re)){en=1,Xl(e,ci(a,e.current)),Me=null;return}}catch(f){if(u!==null)throw Me=u,f;en=1,Xl(e,ci(a,e.current)),Me=null;return}n.flags&32768?(we||r===1?e=!0:ur||(Re&536870912)!==0?e=!1:(za=e=!0,(r===2||r===9||r===3||r===6)&&(r=Jn.current,r!==null&&r.tag===13&&(r.flags|=16384))),cg(n,e)):ic(n)}function ic(e){var n=e;do{if((n.flags&32768)!==0){cg(n,za);return}e=n.return;var a=vS(n.alternate,n,ca);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=e}while(n!==null);en===0&&(en=5)}function cg(e,n){do{var a=xS(e.alternate,e);if(a!==null){a.flags&=32767,Me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Me=e;return}Me=e=a}while(e!==null);en=6,Me=null}function ug(e,n,a,r,u,f,S,R,V){e.cancelPendingCommit=null;do ac();while(gn!==0);if((ze&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Fu,xi(e,a,f,S,R,V),e===je&&(Me=je=null,Re=0),dr=n,Ha=e,ua=a,Wf=f,qf=u,$0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,US(mt,function(){return mg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=L.T,L.T=null,u=z.p,z.p=2,S=ze,ze|=4;try{SS(e,n,a)}finally{ze=S,z.p=u,L.T=r}}gn=1,fg(),dg(),hg()}}function fg(){if(gn===1){gn=0;var e=Ha,n=dr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var r=z.p;z.p=2;var u=ze;ze|=4;try{W0(n,e);var f=od,S=Qp(e.containerInfo),R=f.focusedElem,V=f.selectionRange;if(S!==R&&R&&R.ownerDocument&&Kp(R.ownerDocument.documentElement,R)){if(V!==null&&Uu(R)){var lt=V.start,St=V.end;if(St===void 0&&(St=lt),"selectionStart"in R)R.selectionStart=lt,R.selectionEnd=Math.min(St,R.value.length);else{var bt=R.ownerDocument||document,ut=bt&&bt.defaultView||window;if(ut.getSelection){var ht=ut.getSelection(),Kt=R.textContent.length,se=Math.min(V.start,Kt),We=V.end===void 0?se:Math.min(V.end,Kt);!ht.extend&&se>We&&(S=We,We=se,se=S);var tt=Zp(R,se),q=Zp(R,We);if(tt&&q&&(ht.rangeCount!==1||ht.anchorNode!==tt.node||ht.anchorOffset!==tt.offset||ht.focusNode!==q.node||ht.focusOffset!==q.offset)){var ot=bt.createRange();ot.setStart(tt.node,tt.offset),ht.removeAllRanges(),se>We?(ht.addRange(ot),ht.extend(q.node,q.offset)):(ot.setEnd(q.node,q.offset),ht.addRange(ot))}}}}for(bt=[],ht=R;ht=ht.parentNode;)ht.nodeType===1&&bt.push({element:ht,left:ht.scrollLeft,top:ht.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<bt.length;R++){var yt=bt[R];yt.element.scrollLeft=yt.left,yt.element.scrollTop=yt.top}}gc=!!rd,od=rd=null}finally{ze=u,z.p=r,L.T=a}}e.current=n,gn=2}}function dg(){if(gn===2){gn=0;var e=Ha,n=dr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var r=z.p;z.p=2;var u=ze;ze|=4;try{H0(e,n.alternate,n)}finally{ze=u,z.p=r,L.T=a}}gn=3}}function hg(){if(gn===4||gn===3){gn=0,O();var e=Ha,n=dr,a=ua,r=$0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,dr=Ha=null,pg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ia=null),Hs(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=L.T,u=z.p,z.p=2,L.T=null;try{for(var f=e.onRecoverableError,S=0;S<r.length;S++){var R=r[S];f(R.value,{componentStack:R.stack})}}finally{L.T=n,z.p=u}}(ua&3)!==0&&ac(),Oi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===jf?wo++:(wo=0,jf=e):wo=0,Do(0)}}function pg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,co(n)))}function ac(){return fg(),dg(),hg(),mg()}function mg(){if(gn!==5)return!1;var e=Ha,n=Wf;Wf=0;var a=Hs(ua),r=L.T,u=z.p;try{z.p=32>a?32:a,L.T=null,a=qf,qf=null;var f=Ha,S=ua;if(gn=0,dr=Ha=null,ua=0,(ze&6)!==0)throw Error(s(331));var R=ze;if(ze|=4,K0(f.current),j0(f,f.current,S,a),ze=R,Do(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Rt,f)}catch{}return!0}finally{z.p=u,L.T=r,pg(e,n)}}function gg(e,n,a){n=ci(a,n),n=Tf(e.stateNode,n,2),e=La(e,n,2),e!==null&&(On(e,2),Oi(e))}function Ge(e,n,a){if(e.tag===3)gg(e,e,a);else for(;n!==null;){if(n.tag===3){gg(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ia===null||!Ia.has(r))){e=ci(a,e),a=_0(2),r=La(n,a,2),r!==null&&(v0(a,r,n,e),On(r,2),Oi(r));break}}n=n.return}}function Kf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new ES;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Vf=!0,u.add(a),e=CS.bind(null,e,n,a),n.then(e,e))}function CS(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(Re&a)===a&&(en===4||en===3&&(Re&62914560)===Re&&300>E()-Jl?(ze&2)===0&&hr(e,0):kf|=a,fr===Re&&(fr=0)),Oi(e)}function _g(e,n){n===0&&(n=Ie()),e=us(e,n),e!==null&&(On(e,n),Oi(e))}function wS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),_g(e,a)}function DS(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),_g(e,a)}function US(e,n){return me(e,n)}var sc=null,mr=null,Qf=!1,rc=!1,Jf=!1,Va=0;function Oi(e){e!==mr&&e.next===null&&(mr===null?sc=mr=e:mr=mr.next=e),rc=!0,Qf||(Qf=!0,LS())}function Do(e,n){if(!Jf&&rc){Jf=!0;do for(var a=!1,r=sc;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var S=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-zt(42|e)+1)-1,f&=u&~(S&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,yg(r,f))}else f=Re,f=gt(r,r===je?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Yt(r,f)||(a=!0,yg(r,f));r=r.next}while(a);Jf=!1}}function NS(){vg()}function vg(){rc=Qf=!1;var e=0;Va!==0&&kS()&&(e=Va);for(var n=E(),a=null,r=sc;r!==null;){var u=r.next,f=xg(r,n);f===0?(r.next=null,a===null?sc=u:a.next=u,u===null&&(mr=a)):(a=r,(e!==0||(f&3)!==0)&&(rc=!0)),r=u}gn!==0&&gn!==5||Do(e),Va!==0&&(Va=0)}function xg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-zt(f),R=1<<S,V=u[S];V===-1?((R&a)===0||(R&r)!==0)&&(u[S]=ce(R,n)):V<=n&&(e.expiredLanes|=R),f&=~R}if(n=je,a=Re,a=gt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Yt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Ae(r),Hs(a)){case 2:case 8:a=Tt;break;case 32:a=mt;break;case 268435456:a=Lt;break;default:a=mt}return r=Sg.bind(null,e),a=me(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function Sg(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ac()&&e.callbackNode!==a)return null;var r=Re;return r=gt(e,e===je?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(eg(e,r,n),xg(e,E()),e.callbackNode!=null&&e.callbackNode===a?Sg.bind(null,e):null)}function yg(e,n){if(ac())return null;eg(e,n,!0)}function LS(){WS(function(){(ze&6)!==0?me(xt,NS):vg()})}function $f(){if(Va===0){var e=tr;e===0&&(e=Ot,Ot<<=1,(Ot&261888)===0&&(Ot=256)),Va=e}return Va}function Mg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pl(""+e)}function Eg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function OS(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=Mg((u[pn]||null).action),S=r.submitter;S&&(n=(n=S[pn]||null)?Mg(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var R=new vl("action","action",null,r,u);e.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Va!==0){var V=S?Eg(u,S):new FormData(u);xf(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(R.preventDefault(),V=S?Eg(u,S):new FormData(u),xf(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var td=0;td<Pu.length;td++){var ed=Pu[td],PS=ed.toLowerCase(),FS=ed[0].toUpperCase()+ed.slice(1);Ei(PS,"on"+FS)}Ei(tm,"onAnimationEnd"),Ei(em,"onAnimationIteration"),Ei(nm,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Jx,"onTransitionRun"),Ei($x,"onTransitionStart"),Ei(tS,"onTransitionCancel"),Ei(im,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function bg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var S=r.length-1;0<=S;S--){var R=r[S],V=R.instance,lt=R.currentTarget;if(R=R.listener,V!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=lt;try{f(u)}catch(St){yl(St)}u.currentTarget=null,f=V}else for(S=0;S<r.length;S++){if(R=r[S],V=R.instance,lt=R.currentTarget,R=R.listener,V!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=lt;try{f(u)}catch(St){yl(St)}u.currentTarget=null,f=V}}}}function Ee(e,n){var a=n[Ea];a===void 0&&(a=n[Ea]=new Set);var r=e+"__bubble";a.has(r)||(Tg(n,e,2,!1),a.add(r))}function nd(e,n,a){var r=0;n&&(r|=4),Tg(a,e,r,n)}var oc="_reactListening"+Math.random().toString(36).slice(2);function id(e){if(!e[oc]){e[oc]=!0,dt.forEach(function(a){a!=="selectionchange"&&(zS.has(a)||nd(a,!1,e),nd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[oc]||(n[oc]=!0,nd("selectionchange",!1,n))}}function Tg(e,n,a,r){switch(t_(n)){case 2:var u=fy;break;case 8:u=dy;break;default:u=vd}a=u.bind(null,n,a,e),u=void 0,!Mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ad(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var S=r.tag;if(S===3||S===4){var R=r.stateNode.containerInfo;if(R===u)break;if(S===4)for(S=r.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;R!==null;){if(S=ba(R),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){r=f=S;continue t}R=R.parentNode}}r=r.return}Dp(function(){var lt=f,St=Su(a),bt=[];t:{var ut=am.get(e);if(ut!==void 0){var ht=vl,Kt=e;switch(e){case"keypress":if(gl(a)===0)break t;case"keydown":case"keyup":ht=Dx;break;case"focusin":Kt="focus",ht=Au;break;case"focusout":Kt="blur",ht=Au;break;case"beforeblur":case"afterblur":ht=Au;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ht=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ht=vx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ht=Lx;break;case tm:case em:case nm:ht=yx;break;case im:ht=Px;break;case"scroll":case"scrollend":ht=gx;break;case"wheel":ht=zx;break;case"copy":case"cut":case"paste":ht=Ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ht=Pp;break;case"toggle":case"beforetoggle":ht=Ix}var se=(n&4)!==0,We=!se&&(e==="scroll"||e==="scrollend"),tt=se?ut!==null?ut+"Capture":null:ut;se=[];for(var q=lt,ot;q!==null;){var yt=q;if(ot=yt.stateNode,yt=yt.tag,yt!==5&&yt!==26&&yt!==27||ot===null||tt===null||(yt=Jr(q,tt),yt!=null&&se.push(No(q,yt,ot))),We)break;q=q.return}0<se.length&&(ut=new ht(ut,Kt,null,a,St),bt.push({event:ut,listeners:se}))}}if((n&7)===0){t:{if(ut=e==="mouseover"||e==="pointerover",ht=e==="mouseout"||e==="pointerout",ut&&a!==xu&&(Kt=a.relatedTarget||a.fromElement)&&(ba(Kt)||Kt[ji]))break t;if((ht||ut)&&(ut=St.window===St?St:(ut=St.ownerDocument)?ut.defaultView||ut.parentWindow:window,ht?(Kt=a.relatedTarget||a.toElement,ht=lt,Kt=Kt?ba(Kt):null,Kt!==null&&(We=c(Kt),se=Kt.tag,Kt!==We||se!==5&&se!==27&&se!==6)&&(Kt=null)):(ht=null,Kt=lt),ht!==Kt)){if(se=Lp,yt="onMouseLeave",tt="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(se=Pp,yt="onPointerLeave",tt="onPointerEnter",q="pointer"),We=ht==null?ut:rs(ht),ot=Kt==null?ut:rs(Kt),ut=new se(yt,q+"leave",ht,a,St),ut.target=We,ut.relatedTarget=ot,yt=null,ba(St)===lt&&(se=new se(tt,q+"enter",Kt,a,St),se.target=ot,se.relatedTarget=We,yt=se),We=yt,ht&&Kt)e:{for(se=BS,tt=ht,q=Kt,ot=0,yt=tt;yt;yt=se(yt))ot++;yt=0;for(var ae=q;ae;ae=se(ae))yt++;for(;0<ot-yt;)tt=se(tt),ot--;for(;0<yt-ot;)q=se(q),yt--;for(;ot--;){if(tt===q||q!==null&&tt===q.alternate){se=tt;break e}tt=se(tt),q=se(q)}se=null}else se=null;ht!==null&&Ag(bt,ut,ht,se,!1),Kt!==null&&We!==null&&Ag(bt,We,Kt,se,!0)}}t:{if(ut=lt?rs(lt):window,ht=ut.nodeName&&ut.nodeName.toLowerCase(),ht==="select"||ht==="input"&&ut.type==="file")var Pe=kp;else if(Gp(ut))if(Xp)Pe=Zx;else{Pe=jx;var $t=qx}else ht=ut.nodeName,!ht||ht.toLowerCase()!=="input"||ut.type!=="checkbox"&&ut.type!=="radio"?lt&&Vs(lt.elementType)&&(Pe=kp):Pe=Yx;if(Pe&&(Pe=Pe(e,lt))){Vp(bt,Pe,a,St);break t}$t&&$t(e,ut,lt),e==="focusout"&&lt&&ut.type==="number"&&lt.memoizedProps.value!=null&&yi(ut,"number",ut.value)}switch($t=lt?rs(lt):window,e){case"focusin":(Gp($t)||$t.contentEditable==="true")&&(qs=$t,Nu=lt,ro=null);break;case"focusout":ro=Nu=qs=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,Jp(bt,a,St);break;case"selectionchange":if(Qx)break;case"keydown":case"keyup":Jp(bt,a,St)}var ve;if(Cu)t:{switch(e){case"compositionstart":var Ce="onCompositionStart";break t;case"compositionend":Ce="onCompositionEnd";break t;case"compositionupdate":Ce="onCompositionUpdate";break t}Ce=void 0}else Ws?Ip(e,a)&&(Ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ce="onCompositionStart");Ce&&(Fp&&a.locale!=="ko"&&(Ws||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Ws&&(ve=Up()):(Aa=St,Eu="value"in Aa?Aa.value:Aa.textContent,Ws=!0)),$t=lc(lt,Ce),0<$t.length&&(Ce=new Op(Ce,e,null,a,St),bt.push({event:Ce,listeners:$t}),ve?Ce.data=ve:(ve=Hp(a),ve!==null&&(Ce.data=ve)))),(ve=Gx?Vx(e,a):kx(e,a))&&(Ce=lc(lt,"onBeforeInput"),0<Ce.length&&($t=new Op("onBeforeInput","beforeinput",null,a,St),bt.push({event:$t,listeners:Ce}),$t.data=ve)),OS(bt,e,lt,a,St)}bg(bt,n)})}function No(e,n,a){return{instance:e,listener:n,currentTarget:a}}function lc(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Jr(e,a),u!=null&&r.unshift(No(e,u,f)),u=Jr(e,n),u!=null&&r.push(No(e,u,f))),e.tag===3)return r;e=e.return}return[]}function BS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ag(e,n,a,r,u){for(var f=n._reactName,S=[];a!==null&&a!==r;){var R=a,V=R.alternate,lt=R.stateNode;if(R=R.tag,V!==null&&V===r)break;R!==5&&R!==26&&R!==27||lt===null||(V=lt,u?(lt=Jr(a,f),lt!=null&&S.unshift(No(a,lt,V))):u||(lt=Jr(a,f),lt!=null&&S.push(No(a,lt,V)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var IS=/\r\n?/g,HS=/\u0000|\uFFFD/g;function Rg(e){return(typeof e=="string"?e:""+e).replace(IS,`
`).replace(HS,"")}function Cg(e,n){return n=Rg(n),Rg(e)===n}function Xe(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||zn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&zn(e,""+r);break;case"className":fe(e,"class",r);break;case"tabIndex":fe(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":fe(e,a,r);break;case"style":Yi(e,r,f);break;case"data":if(n!=="object"){fe(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=pl(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=pl(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Zi);break;case"onScroll":r!=null&&Ee("scroll",e);break;case"onScrollEnd":r!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=pl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),oe(e,"popover",r);break;case"xlinkActuate":Zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Zt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Zt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Zt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Zt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":oe(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=px.get(a)||a,oe(e,a,r))}}function sd(e,n,a,r,u,f){switch(a){case"style":Yi(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?zn(e,r):(typeof r=="number"||typeof r=="bigint")&&zn(e,""+r);break;case"onScroll":r!=null&&Ee("scroll",e);break;case"onScrollEnd":r!=null&&Ee("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ct.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):oe(e,a,r)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,f,S,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),r&&Xe(e,n,"src",a.src,a,null);return;case"input":Ee("invalid",e);var R=f=S=u=null,V=null,lt=null;for(r in a)if(a.hasOwnProperty(r)){var St=a[r];if(St!=null)switch(r){case"name":u=St;break;case"type":S=St;break;case"checked":V=St;break;case"defaultChecked":lt=St;break;case"value":f=St;break;case"defaultValue":R=St;break;case"children":case"dangerouslySetInnerHTML":if(St!=null)throw Error(s(137,n));break;default:Xe(e,n,r,St,a,null)}}Yn(e,f,R,V,lt,S,u,!1);return;case"select":Ee("invalid",e),r=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":S=R;break;case"multiple":r=R;default:Xe(e,n,u,R,a,null)}n=f,a=S,e.multiple=!!r,n!=null?Zn(e,!!r,n,!1):a!=null&&Zn(e,!!r,a,!0);return;case"textarea":Ee("invalid",e),f=u=r=null;for(S in a)if(a.hasOwnProperty(S)&&(R=a[S],R!=null))switch(S){case"value":r=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Xe(e,n,S,R,a,null)}on(e,r,u,f);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(r=a[V],r!=null))switch(V){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Xe(e,n,V,r,a,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(r=0;r<Uo.length;r++)Ee(Uo[r],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(lt in a)if(a.hasOwnProperty(lt)&&(r=a[lt],r!=null))switch(lt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,lt,r,a,null)}return;default:if(Vs(n)){for(St in a)a.hasOwnProperty(St)&&(r=a[St],r!==void 0&&sd(e,n,St,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&Xe(e,n,R,r,a,null))}function GS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,R=null,V=null,lt=null,St=null;for(ht in a){var bt=a[ht];if(a.hasOwnProperty(ht)&&bt!=null)switch(ht){case"checked":break;case"value":break;case"defaultValue":V=bt;default:r.hasOwnProperty(ht)||Xe(e,n,ht,null,r,bt)}}for(var ut in r){var ht=r[ut];if(bt=a[ut],r.hasOwnProperty(ut)&&(ht!=null||bt!=null))switch(ut){case"type":f=ht;break;case"name":u=ht;break;case"checked":lt=ht;break;case"defaultChecked":St=ht;break;case"value":S=ht;break;case"defaultValue":R=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:ht!==bt&&Xe(e,n,ut,ht,r,bt)}}Fn(e,S,R,V,lt,St,f,u);return;case"select":ht=S=R=ut=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":ht=V;default:r.hasOwnProperty(f)||Xe(e,n,f,null,r,V)}for(u in r)if(f=r[u],V=a[u],r.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":ut=f;break;case"defaultValue":R=f;break;case"multiple":S=f;default:f!==V&&Xe(e,n,u,f,r,V)}n=R,a=S,r=ht,ut!=null?Zn(e,!!a,ut,!1):!!r!=!!a&&(n!=null?Zn(e,!!a,n,!0):Zn(e,!!a,a?[]:"",!1));return;case"textarea":ht=ut=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Xe(e,n,R,null,r,u)}for(S in r)if(u=r[S],f=a[S],r.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":ut=u;break;case"defaultValue":ht=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xe(e,n,S,u,r,f)}Be(e,ut,ht);return;case"option":for(var Kt in a)if(ut=a[Kt],a.hasOwnProperty(Kt)&&ut!=null&&!r.hasOwnProperty(Kt))switch(Kt){case"selected":e.selected=!1;break;default:Xe(e,n,Kt,null,r,ut)}for(V in r)if(ut=r[V],ht=a[V],r.hasOwnProperty(V)&&ut!==ht&&(ut!=null||ht!=null))switch(V){case"selected":e.selected=ut&&typeof ut!="function"&&typeof ut!="symbol";break;default:Xe(e,n,V,ut,r,ht)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)ut=a[se],a.hasOwnProperty(se)&&ut!=null&&!r.hasOwnProperty(se)&&Xe(e,n,se,null,r,ut);for(lt in r)if(ut=r[lt],ht=a[lt],r.hasOwnProperty(lt)&&ut!==ht&&(ut!=null||ht!=null))switch(lt){case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:Xe(e,n,lt,ut,r,ht)}return;default:if(Vs(n)){for(var We in a)ut=a[We],a.hasOwnProperty(We)&&ut!==void 0&&!r.hasOwnProperty(We)&&sd(e,n,We,void 0,r,ut);for(St in r)ut=r[St],ht=a[St],!r.hasOwnProperty(St)||ut===ht||ut===void 0&&ht===void 0||sd(e,n,St,ut,r,ht);return}}for(var tt in a)ut=a[tt],a.hasOwnProperty(tt)&&ut!=null&&!r.hasOwnProperty(tt)&&Xe(e,n,tt,null,r,ut);for(bt in r)ut=r[bt],ht=a[bt],!r.hasOwnProperty(bt)||ut===ht||ut==null&&ht==null||Xe(e,n,bt,ut,r,ht)}function wg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function VS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,S=u.initiatorType,R=u.duration;if(f&&R&&wg(S)){for(S=0,R=u.responseEnd,r+=1;r<a.length;r++){var V=a[r],lt=V.startTime;if(lt>R)break;var St=V.transferSize,bt=V.initiatorType;St&&wg(bt)&&(V=V.responseEnd,S+=St*(V<R?1:(R-lt)/(V-lt)))}if(--r,n+=8*(f+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var rd=null,od=null;function cc(e){return e.nodeType===9?e:e.ownerDocument}function Dg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ug(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ld(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cd=null;function kS(){var e=window.event;return e&&e.type==="popstate"?e===cd?!1:(cd=e,!0):(cd=null,!1)}var Ng=typeof setTimeout=="function"?setTimeout:void 0,XS=typeof clearTimeout=="function"?clearTimeout:void 0,Lg=typeof Promise=="function"?Promise:void 0,WS=typeof queueMicrotask=="function"?queueMicrotask:typeof Lg<"u"?function(e){return Lg.resolve(null).then(e).catch(qS)}:Ng;function qS(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function Og(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),xr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Lo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Lo(a);for(var f=a.firstChild;f;){var S=f.nextSibling,R=f.nodeName;f[ss]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&Lo(e.ownerDocument.body);a=u}while(a);xr(n)}function Pg(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function ud(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ud(a),Qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function jS(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ss])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function YS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pi(e.nextSibling),e===null))return null;return e}function Fg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pi(e.nextSibling),e===null))return null;return e}function fd(e){return e.data==="$?"||e.data==="$~"}function dd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ZS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var hd=null;function zg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return pi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Bg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Ig(e,n,a){switch(n=cc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Lo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Qr(e)}var mi=new Map,Hg=new Set;function uc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=z.d;z.d={f:KS,r:QS,D:JS,C:$S,L:ty,m:ey,X:iy,S:ny,M:ay};function KS(){var e=fa.f(),n=ec();return e||n}function QS(e){var n=Ta(e);n!==null&&n.tag===5&&n.type==="form"?i0(n):fa.r(e)}var gr=typeof document>"u"?null:document;function Gg(e,n,a){var r=gr;if(r&&typeof n=="string"&&n){var u=ue(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Hg.has(u)||(Hg.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),bn(n,"link",e),Y(n),r.head.appendChild(n)))}}function JS(e){fa.D(e),Gg("dns-prefetch",e,null)}function $S(e,n){fa.C(e,n),Gg("preconnect",e,n)}function ty(e,n,a){fa.L(e,n,a);var r=gr;if(r&&e&&n){var u='link[rel="preload"][as="'+ue(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ue(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ue(a.imageSizes)+'"]')):u+='[href="'+ue(e)+'"]';var f=u;switch(n){case"style":f=_r(e);break;case"script":f=vr(e)}mi.has(f)||(e=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),mi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Oo(f))||n==="script"&&r.querySelector(Po(f))||(n=r.createElement("link"),bn(n,"link",e),Y(n),r.head.appendChild(n)))}}function ey(e,n){fa.m(e,n);var a=gr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ue(r)+'"][href="'+ue(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=vr(e)}if(!mi.has(f)&&(e=y({rel:"modulepreload",href:e},n),mi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Po(f)))return}r=a.createElement("link"),bn(r,"link",e),Y(r),a.head.appendChild(r)}}}function ny(e,n,a){fa.S(e,n,a);var r=gr;if(r&&e){var u=C(r).hoistableStyles,f=_r(e);n=n||"default";var S=u.get(f);if(!S){var R={loading:0,preload:null};if(S=r.querySelector(Oo(f)))R.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},a),(a=mi.get(f))&&pd(e,a);var V=S=r.createElement("link");Y(V),bn(V,"link",e),V._p=new Promise(function(lt,St){V.onload=lt,V.onerror=St}),V.addEventListener("load",function(){R.loading|=1}),V.addEventListener("error",function(){R.loading|=2}),R.loading|=4,fc(S,n,r)}S={type:"stylesheet",instance:S,count:1,state:R},u.set(f,S)}}}function iy(e,n){fa.X(e,n);var a=gr;if(a&&e){var r=C(a).hoistableScripts,u=vr(e),f=r.get(u);f||(f=a.querySelector(Po(u)),f||(e=y({src:e,async:!0},n),(n=mi.get(u))&&md(e,n),f=a.createElement("script"),Y(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function ay(e,n){fa.M(e,n);var a=gr;if(a&&e){var r=C(a).hoistableScripts,u=vr(e),f=r.get(u);f||(f=a.querySelector(Po(u)),f||(e=y({src:e,async:!0,type:"module"},n),(n=mi.get(u))&&md(e,n),f=a.createElement("script"),Y(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Vg(e,n,a,r){var u=(u=J.current)?uc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=_r(a.href),a=C(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=_r(a.href);var f=C(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(Oo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),mi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(e,a),f||sy(u,e,a,S.state))),n&&r===null)throw Error(s(528,""));return S}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vr(a),a=C(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function _r(e){return'href="'+ue(e)+'"'}function Oo(e){return'link[rel="stylesheet"]['+e+"]"}function kg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function sy(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),bn(n,"link",a),Y(n),e.head.appendChild(n))}function vr(e){return'[src="'+ue(e)+'"]'}function Po(e){return"script[async]"+e}function Xg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+ue(a.href)+'"]');if(r)return n.instance=r,Y(r),r;var u=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Y(r),bn(r,"style",u),fc(r,a.precedence,e),n.instance=r;case"stylesheet":u=_r(a.href);var f=e.querySelector(Oo(u));if(f)return n.state.loading|=4,n.instance=f,Y(f),f;r=kg(a),(u=mi.get(u))&&pd(r,u),f=(e.ownerDocument||e).createElement("link"),Y(f);var S=f;return S._p=new Promise(function(R,V){S.onload=R,S.onerror=V}),bn(f,"link",r),n.state.loading|=4,fc(f,a.precedence,e),n.instance=f;case"script":return f=vr(a.src),(u=e.querySelector(Po(f)))?(n.instance=u,Y(u),u):(r=a,(u=mi.get(f))&&(r=y({},a),md(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),Y(u),bn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,fc(r,a.precedence,e));return n.instance}function fc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,S=0;S<r.length;S++){var R=r[S];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function pd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function md(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var dc=null;function Wg(e,n,a){if(dc===null){var r=new Map,u=dc=new Map;u.set(a,r)}else u=dc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ss]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var R=r.get(S);R?R.push(f):r.set(S,[f])}}return r}function qg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ry(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function jg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function oy(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=_r(r.href),f=n.querySelector(Oo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=hc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Y(f);return}f=n.ownerDocument||n,r=kg(r),(u=mi.get(u))&&pd(r,u),f=f.createElement("link"),Y(f);var S=f;S._p=new Promise(function(R,V){S.onload=R,S.onerror=V}),bn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=hc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var gd=0;function ly(e,n){return e.stylesheets&&e.count===0&&mc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&mc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&gd===0&&(gd=62500*VS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&mc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>gd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)mc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pc=null;function mc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pc=new Map,n.forEach(cy,e),pc=null,hc.call(e))}function cy(e,n){if(!(n.state.loading&4)){var a=pc.get(e);if(a)var r=a.get(null);else{a=new Map,pc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),r=S)}r&&a.set(null,r)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||r,f===r&&a.set(null,u),a.set(S,u),this.count++,r=hc.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Fo={$$typeof:U,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function uy(e,n,a,r,u,f,S,R,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ue(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ue(0),this.hiddenUpdates=Ue(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Yg(e,n,a,r,u,f,S,R,V,lt,St,bt){return e=new uy(e,n,a,S,V,lt,St,bt,R),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),e.current=f,f.stateNode=e,n=Yu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Ju(f),e}function Zg(e){return e?(e=Zs,e):Zs}function Kg(e,n,a,r,u,f){u=Zg(u),r.context===null?r.context=u:r.pendingContext=u,r=Na(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=La(e,r,n),a!==null&&(qn(a,e,n),po(a,e,n))}function Qg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function _d(e,n){Qg(e,n),(e=e.alternate)&&Qg(e,n)}function Jg(e){if(e.tag===13||e.tag===31){var n=us(e,67108864);n!==null&&qn(n,e,67108864),_d(e,67108864)}}function $g(e){if(e.tag===13||e.tag===31){var n=ni();n=Is(n);var a=us(e,n);a!==null&&qn(a,e,n),_d(e,n)}}var gc=!0;function fy(e,n,a,r){var u=L.T;L.T=null;var f=z.p;try{z.p=2,vd(e,n,a,r)}finally{z.p=f,L.T=u}}function dy(e,n,a,r){var u=L.T;L.T=null;var f=z.p;try{z.p=8,vd(e,n,a,r)}finally{z.p=f,L.T=u}}function vd(e,n,a,r){if(gc){var u=xd(r);if(u===null)ad(e,n,r,_c,a),e_(e,r);else if(py(u,e,n,a,r))r.stopPropagation();else if(e_(e,r),n&4&&-1<hy.indexOf(e)){for(;u!==null;){var f=Ta(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=wt(f.pendingLanes);if(S!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var V=1<<31-zt(S);R.entanglements[1]|=V,S&=~V}Oi(f),(ze&6)===0&&($l=E()+500,Do(0))}}break;case 31:case 13:R=us(f,2),R!==null&&qn(R,f,2),ec(),_d(f,2)}if(f=xd(r),f===null&&ad(e,n,r,_c,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else ad(e,n,r,null,a)}}function xd(e){return e=Su(e),Sd(e)}var _c=null;function Sd(e){if(_c=null,e=ba(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return _c=e,null}function t_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case xt:return 2;case Tt:return 8;case mt:case Ft:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var yd=!1,Xa=null,Wa=null,qa=null,zo=new Map,Bo=new Map,ja=[],hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function e_(e,n){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(n.pointerId)}}function Io(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ta(n),n!==null&&Jg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function py(e,n,a,r,u){switch(n){case"focusin":return Xa=Io(Xa,e,n,a,r,u),!0;case"dragenter":return Wa=Io(Wa,e,n,a,r,u),!0;case"mouseover":return qa=Io(qa,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return zo.set(f,Io(zo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Bo.set(f,Io(Bo.get(f)||null,e,n,a,r,u)),!0}return!1}function n_(e){var n=ba(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Gs(e.priority,function(){$g(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Gs(e.priority,function(){$g(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=xd(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);xu=r,a.target.dispatchEvent(r),xu=null}else return n=Ta(a),n!==null&&Jg(n),e.blockedOn=a,!1;n.shift()}return!0}function i_(e,n,a){vc(e)&&a.delete(n)}function my(){yd=!1,Xa!==null&&vc(Xa)&&(Xa=null),Wa!==null&&vc(Wa)&&(Wa=null),qa!==null&&vc(qa)&&(qa=null),zo.forEach(i_),Bo.forEach(i_)}function xc(e,n){e.blockedOn===n&&(e.blockedOn=null,yd||(yd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,my)))}var Sc=null;function a_(e){Sc!==e&&(Sc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Sc===e&&(Sc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(Sd(r||a)===null)continue;break}var f=Ta(a);f!==null&&(e.splice(n,3),n-=3,xf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function xr(e){function n(V){return xc(V,e)}Xa!==null&&xc(Xa,e),Wa!==null&&xc(Wa,e),qa!==null&&xc(qa,e),zo.forEach(n),Bo.forEach(n);for(var a=0;a<ja.length;a++){var r=ja[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)n_(a),a.blockedOn===null&&ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],S=u[pn]||null;if(typeof f=="function")S||a_(a);else if(S){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[pn]||null)R=S.formAction;else if(Sd(u)!==null)continue}else R=S.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),a_(a)}}}function s_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Md(e){this._internalRoot=e}yc.prototype.render=Md.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ni();Kg(a,r,e,n,null,null)},yc.prototype.unmount=Md.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Kg(e.current,2,null,e,null,null),ec(),n[ji]=null}};function yc(e){this._internalRoot=e}yc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Di();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ja.length&&n!==0&&n<ja[a].priority;a++);ja.splice(a,0,e),a===0&&n_(e)}};var r_=t.version;if(r_!=="19.2.4")throw Error(s(527,r_,"19.2.4"));z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var gy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{Rt=Mc.inject(gy),Ct=Mc}catch{}}return Go.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=h0,f=p0,S=m0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Yg(e,1,!1,null,null,a,r,null,u,f,S,s_),e[ji]=n.current,id(e),new Md(n)},Go.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=h0,S=p0,R=m0,V=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=Yg(e,1,!0,n,a??null,r,u,V,f,S,R,s_),n.context=Zg(null),a=n.current,r=ni(),r=Is(r),u=Na(r),u.callback=null,La(a,u,r),a=r,n.current.lanes=a,On(n,a),Oi(n),e[ji]=n.current,id(e),new yc(n)},Go.version="19.2.4",Go}var g_;function Ry(){if(g_)return Td.exports;g_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Td.exports=Ay(),Td.exports}var Cy=Ry();const wy=Uv(Cy),wd=16,Dy=250,Uy=500;function Ny(o=4){const[t,i]=_t.useState(!1),[s,l]=_t.useState(0),[c,d]=_t.useState(0),[p,m]=_t.useState(!1),[h,v]=_t.useState(0),[y,g]=_t.useState(null),M=_t.useRef(null),b=_t.useRef(null),w=_t.useRef(null),x=_t.useRef(null),_=_t.useRef(0),A=_t.useRef(0),U=_t.useRef([]),D=_t.useRef(!1),I=_t.useRef(0),B=_t.useRef(0),F=_t.useRef(0),T=Dy*o;F.current=T,(!x.current||x.current[0].length!==T)&&(x.current=Array.from({length:wd},()=>new Float32Array(T)),_.current=0,A.current=0),_t.useEffect(()=>(p?(M.current=Date.now(),v(0),clearInterval(b.current),b.current=setInterval(()=>{v(Math.floor((Date.now()-M.current)/1e3))},500)):(clearInterval(b.current),M.current=null),()=>clearInterval(b.current)),[p]);const N=_t.useCallback(K=>{D.current=K,K||(_.current=0,A.current=0)},[]),pt=_t.useCallback(K=>{const nt=w.current;nt&&nt.readyState===WebSocket.OPEN&&nt.send(JSON.stringify(K))},[]);_t.useEffect(()=>{const K=location.hostname||"localhost",nt=parseInt(location.port||"1617")-1,L=`${location.protocol==="https:"?"wss":"ws"}://${K}:${nt}`,z="/auth/ws-token";async function W(){try{const vt=await fetch(z,{credentials:"include"});return vt.ok&&(await vt.json()).token||null}catch{return null}}async function it(){const vt=await W(),P=vt?`${L}?token=${encodeURIComponent(vt)}`:L,j=new WebSocket(P);w.current=j,j.onopen=()=>i(!0),j.onclose=()=>{i(!1),setTimeout(it,2e3)},j.onerror=()=>j.close(),j.onmessage=rt=>{const Mt=JSON.parse(rt.data);if(Mt.record_status){const Dt=Mt.record_status;if(m(Dt.recording),Dt.stopped){const ie=location.port||"1617";g({filename:Dt.stopped.filename,frames:Dt.stopped.frames,duration:Dt.stopped.duration,path:Dt.stopped.path,downloadUrl:`${location.protocol}//${location.hostname}:${ie}/recordings/${Dt.stopped.filename}`})}}if(Mt.status||D.current)return;const At=Mt.channels;if(!At||At.length!==wd)return;const J=x.current,H=F.current,ft=_.current;for(let Dt=0;Dt<wd;Dt++)J[Dt][ft]=At[Dt];_.current=(ft+1)%H,A.current<H&&A.current++,I.current++;const Et=Mt.t;U.current.push(Et);const Nt=performance.now();if(Nt-B.current>Uy){B.current=Nt,l(I.current);const Dt=U.current,ie=Et-2;let Gt=0;for(;Gt<Dt.length&&Dt[Gt]<ie;)Gt++;if(Gt>0&&Dt.splice(0,Gt),Dt.length>1){const Vt=Dt[Dt.length-1]-Dt[0];Vt>0&&d(Math.round((Dt.length-1)/Vt))}}}}return it(),()=>{const vt=w.current;vt&&vt.close()}},[]);const G=_t.useCallback(()=>g(null),[]),et=_t.useMemo(()=>({buffers:x,writeIndex:_,samplesInBuffer:A,bufferSize:T,gridSuspended:!1}),[]);return et.bufferSize=T,{connected:t,sampleCount:s,hz:c,recording:p,recordElapsed:h,recordResult:y,data:et,dismissRecordResult:G,setPaused:N,sendCommand:pt}}function Dd({children:o}){const[t,i]=_t.useState("checking"),[s,l]=_t.useState(""),[c,d]=_t.useState("");_t.useEffect(()=>{(async()=>{try{const h=await fetch("/auth/status",{credentials:"include"});if(!h.ok){i("login");return}const v=await h.json();i(v.authenticated?"ok":"login")}catch(h){console.error("Auth check error:",h),i("login")}})()},[]);async function p(m){m.preventDefault(),d("");try{const v=await(await fetch("/auth",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({code:s})})).json();v.ok?i("ok"):(d(v.error||"Invalid code"),l(""))}catch{d("Server unreachable")}}return t==="checking"?null:t==="ok"?o:X.jsx("div",{className:"auth-overlay",children:X.jsxs("div",{className:"auth-card",children:[X.jsxs("h1",{children:["Pi",X.jsx("span",{children:"EEG"}),"-16"]}),X.jsx("p",{className:"auth-sub",children:"Enter the access code displayed in the server console"}),X.jsxs("form",{onSubmit:p,children:[X.jsx("input",{className:"auth-input",type:"text",maxLength:6,pattern:"[0-9]{6}",autoComplete:"off",autoFocus:!0,required:!0,placeholder:"------",value:s,onChange:m=>l(m.target.value.replace(/\D/g,""))}),X.jsx("br",{}),X.jsx("button",{className:"auth-btn",type:"submit",children:"Connect"}),c&&X.jsx("p",{className:"auth-error",children:c})]})]})})}const Ly="rgba(48,54,61,0.4)",Oy="rgba(88,166,255,0.15)",Py=["#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2","#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2"],Fy={high:1500,medium:800,low:400},__=14,v_=20,x_=2;function zy(o,t,i,s,l,c,d,p,m,h){o.clearRect(0,0,t,i);const v=i/2,y=i/4;o.beginPath();for(let U=y;U<i;U+=y)o.moveTo(0,U),o.lineTo(t,U);if(o.strokeStyle=Ly,o.lineWidth=.5,o.stroke(),o.beginPath(),o.moveTo(0,v),o.lineTo(t,v),o.strokeStyle=Oy,o.lineWidth=1,o.stroke(),l<2)return;const g=Fy[h]||1500,M=l>g?Math.floor(l/g):1,b=i/2,w=t/(d-1),x=b/p;if(h!=="low"){o.beginPath();let U=0;for(let D=0;D<l;D+=M){const I=(c-l+D+d)%d,B=D*w,F=v-s[I]*x;D===0?(o.moveTo(B,F),U=B):o.lineTo(B,F)}o.lineTo((l-1)*w,i),o.lineTo(U,i),o.closePath(),o.fillStyle=m+"10",o.fill()}o.strokeStyle=m,o.lineWidth=h==="low"?1:1.3,o.lineJoin="round",o.lineCap="round",o.beginPath();for(let U=0;U<l;U+=M){const D=(c-l+U+d)%d,I=U*w,B=v-s[D]*x;U===0?o.moveTo(I,B):o.lineTo(I,B)}o.stroke();let _=0;const A=Math.min(l,250);for(let U=l-A;U<l;U++){const D=(c-l+U+d)%d;_+=s[D]*s[D]}return Math.sqrt(_/A)}const S_=_t.memo(function({chIdx:t,eegData:i,yRange:s,expanded:l,onToggleExpand:c,active:d=!0}){const p=_t.useRef(null),m=_t.useRef(0),h=_t.useRef(0),v=_t.useRef(null),y=_t.useRef({w:0,h:0,pw:0,ph:0}),g=_t.useRef(!0),M=_t.useRef("high"),b=_t.useRef([]),w=_t.useRef(-1),x=_t.useRef(0),_=_t.useRef(0);return _t.useEffect(()=>{if(!d)return;const A=p.current;if(!A)return;const U=new ResizeObserver(D=>{const I=D[0];if(!I)return;const B=window.devicePixelRatio||1,{width:F,height:T}=I.contentRect,N=l?Math.min(B,2):1;y.current={w:F,h:T,pw:Math.round(F*N),ph:Math.round(T*N),dpr:N},g.current=!0});return U.observe(A),()=>U.disconnect()},[d,l]),_t.useEffect(()=>{if(!d)return;const A=p.current;if(!A)return;const U=A.getContext("2d",{alpha:!1});w.current=-1,_.current=0;const D=t%x_,I=()=>{_.current++;const{w:B,h:F,pw:T,ph:N,dpr:pt}=y.current;if(B===0||F===0){m.current=requestAnimationFrame(I);return}if(!l&&i.gridSuspended){m.current=requestAnimationFrame(I);return}if(!l&&_.current%x_!==D){m.current=requestAnimationFrame(I);return}const G=i.writeIndex.current;if(G===w.current){m.current=requestAnimationFrame(I);return}w.current=G;const et=performance.now();g.current&&(g.current=!1,A.width=T,A.height=N,U.setTransform(pt,0,0,pt,0,0)),U.fillStyle="#0d1117",U.fillRect(0,0,B,F);const K=zy(U,B,F,i.buffers.current[t],i.samplesInBuffer.current,G,i.bufferSize,s,Py[t],M.current);if(x.current++,K!==void 0&&(x.current&1)===0&&(h.current=K,v.current)){const L=K/s;v.current.style.borderLeftColor=L>.8?"#f85149":L>.4?"#d29922":"#3fb950"}const nt=performance.now()-et,$=b.current;if($.push(nt),$.length>v_&&$.shift(),$.length===v_){let L=0;for(let W=0;W<$.length;W++)L+=$[W];const z=L/$.length;z>__&&M.current!=="low"?M.current=M.current==="high"?"medium":"low":z<__*.4&&M.current!=="high"&&(M.current=M.current==="low"?"medium":"high")}m.current=requestAnimationFrame(I)};return m.current=requestAnimationFrame(I),()=>cancelAnimationFrame(m.current)},[t,i,s,d]),d?X.jsxs("div",{className:`channel-cell${l?" expanded":""}`,onClick:c,children:[X.jsxs("div",{className:"channel-label",ref:v,children:["Ch ",t+1]}),X.jsx("canvas",{ref:p,style:{display:"block",width:"100%",height:"100%"}})]}):X.jsxs("div",{className:`channel-cell inactive${l?" expanded":""}`,onClick:c,children:[X.jsxs("div",{className:"channel-label",children:["Ch ",t+1]}),X.jsx("div",{className:"channel-off",children:"OFF"})]})}),{PI:By,cos:y_,sin:Iy}=Math,M_=2*By,Ir=[{name:"Delta",label:"δ Delta",low:.5,high:4,color:"#8b5cf6"},{name:"Theta",label:"θ Theta",low:4,high:8,color:"#06b6d4"},{name:"Alpha",label:"α Alpha",low:8,high:13,color:"#22c55e"},{name:"Beta",label:"β Beta",low:13,high:30,color:"#f59e0b"},{name:"Gamma",label:"γ Gamma",low:30,high:100,color:"#ef4444"}];class lu{constructor(t,i){if(t<=0||(t&t-1)!==0)throw new Error("n must be a power of 2");this.n=t,this.sampleRateHz=i,this._precompute()}_precompute(){const{n:t,sampleRateHz:i}=this;this._window=new Float64Array(t);for(let p=0;p<t;p++)this._window[p]=.5*(1-y_(M_*p/(t-1)));const s=(t>>1)+1;this._frequencies=new Float64Array(s),this._df=i/t;for(let p=0;p<s;p++)this._frequencies[p]=p*this._df;const l=lu._log2(t);this._bitReversed=new Int32Array(t);for(let p=0;p<t;p++)this._bitReversed[p]=lu._reverseBits(p,l);const c=t>>1;this._twRe=new Float64Array(c),this._twIm=new Float64Array(c);for(let p=0;p<c;p++){const m=-M_*p/t;this._twRe[p]=y_(m),this._twIm[p]=Iy(m)}let d=0;for(let p=0;p<t;p++)d+=this._window[p]*this._window[p];this._norm=2/(i*d)}analyse(t,i){const{n:s,_window:l,_frequencies:c,_df:d,_norm:p}=this;if(i===void 0&&(i=t.length-s),i<0||t.length-i<s)return null;const m=new Float64Array(s),h=new Float64Array(s);for(let x=0;x<s;x++)m[x]=t[i+x]*l[x];this._fft(m,h);const v=(s>>1)+1,y=new Float64Array(v);let g=0,M=0,b=0;for(let x=0;x<v;x++){const _=m[x]*m[x]+h[x]*h[x],A=x===0||x===v-1?.5:1;y[x]=_*p*A,M+=y[x]*d,y[x]>g&&(g=y[x],b=x)}const w={};for(const x of Ir){let _=0;for(let A=0;A<v;A++)c[A]>=x.low&&c[A]<x.high&&(_+=y[A]*d);w[x.name]=_}return{frequencies:c,psd:y,bandPowers:w,dominantFrequency:c[b],totalPower:M}}analyseRing(t,i,s){const{n:l}=this;if(s<l)return null;const c=t.length,d=new Float64Array(l),p=(i-l+c)%c;for(let m=0;m<l;m++)d[m]=t[(p+m)%c];return this.analyse(d,0)}_fft(t,i){const{n:s,_bitReversed:l,_twRe:c,_twIm:d}=this;for(let p=0;p<s;p++){const m=l[p];if(m>p){let h=t[p];t[p]=t[m],t[m]=h,h=i[p],i[p]=i[m],i[m]=h}}for(let p=2;p<=s;p*=2){const m=p>>1,h=s/p;for(let v=0;v<s;v+=p)for(let y=0;y<m;y++){const g=y*h,M=c[g],b=d[g],w=v+y,x=w+m,_=M*t[x]-b*i[x],A=M*i[x]+b*t[x];t[x]=t[w]-_,i[x]=i[w]-A,t[w]+=_,i[w]+=A}}}static _log2(t){let i=0,s=t;for(;s>1;)s>>=1,i++;return i}static _reverseBits(t,i){let s=0,l=t;for(let c=0;c<i;c++)s=s<<1|l&1,l>>=1;return s}}const Ud=16,Es=256,Nd=250,Hy=60,Gy=12,E_=.3,Vy=350;function ky(o,t,i,s,l,c,d,p){const h=t-16,v=24,y=i-24,g=h-48,M=y-v,b=l[1],w=Math.min(Math.ceil(c/b),s.length-1);let x=1e-30;for(let _=1;_<=w;_++)s[_]>x&&(x=s[_]);for(const _ of Ir){if(_.low>=c)continue;const A=48+Math.max(_.low,0)/c*g,U=48+Math.min(_.high,c)/c*g,D=p===_.name;o.fillStyle=_.color+(D?"28":"12"),o.fillRect(A,v,U-A,M),o.fillStyle=_.color+(D?"cc":"66"),o.font="9px monospace",o.textAlign="center",o.fillText(_.name,(A+U)/2,v+10)}o.strokeStyle="rgba(48,54,61,0.45)",o.lineWidth=.5;for(let _=1;_<5;_++){const A=v+_/5*M;o.beginPath(),o.moveTo(48,A),o.lineTo(h,A),o.stroke()}for(const _ of[4,8,13,30,50]){if(_>c)continue;const A=48+_/c*g;o.beginPath(),o.moveTo(A,v),o.lineTo(A,y),o.stroke()}o.beginPath();for(let _=1;_<=w;_++){const A=48+l[_]/c*g;let U;if(d){const I=10*Math.log10((s[_]||1e-30)/x);U=Math.max(0,(I+60)/60)}else U=s[_]/x;const D=y-Math.min(1,U)*M;_===1?o.moveTo(A,D):o.lineTo(A,D)}o.strokeStyle="#58a6ff",o.lineWidth=1.5,o.stroke(),o.lineTo(48+l[w]/c*g,y),o.lineTo(48+l[1]/c*g,y),o.closePath(),o.fillStyle="rgba(88,166,255,0.07)",o.fill(),o.fillStyle="#8b949e",o.font="10px monospace",o.textAlign="center";for(let _=0;_<=c;_+=10)o.fillText(`${_}`,48+_/c*g,y+14);if(o.fillText("Hz",h+2,y+14),o.save(),o.translate(11,v+M/2),o.rotate(-Math.PI/2),o.textAlign="center",o.fillText(d?"dB":"µV²/Hz",0,0),o.restore(),o.textAlign="right",o.font="9px monospace",d)for(const _ of[0,-20,-40,-60]){const A=y-(_+60)/60*M;o.fillText(`${_}`,44,A+3)}}const Xy=_t.memo(function({eegData:t}){var et;const i=_t.useRef(null),s=_t.useRef(0),l=_t.useRef(0),c=_t.useRef(null),d=_t.useRef(0),p=_t.useRef(null),m=_t.useRef({}),h=_t.useRef(window.devicePixelRatio||1),v=_t.useRef({w:0,h:0,pw:0,ph:0}),y=_t.useRef(!0),[g,M]=_t.useState(0),[b,w]=_t.useState(!0),[x,_]=_t.useState(!1),[A,U]=_t.useState(null),[D,I]=_t.useState({}),[B,F]=_t.useState({band:"",freq:0}),T=_t.useMemo(()=>new lu(Es,Nd),[]);p.current||(p.current=new Float64Array(Es)),_t.useEffect(()=>{const K=i.current;if(!K)return;const nt=K.getContext("2d",{alpha:!1}),$=new ResizeObserver(z=>{const W=z[0];if(!W)return;const it=window.devicePixelRatio||1;h.current=it;const{width:vt,height:P}=W.contentRect;v.current={w:vt,h:P,pw:Math.round(vt*it),ph:Math.round(P*it)},y.current=!0});$.observe(K);const L=()=>{const{w:z,h:W,pw:it,ph:vt}=v.current;if(z===0||W===0){s.current=requestAnimationFrame(L);return}if(y.current&&(y.current=!1,K.width=it,K.height=vt),nt.setTransform(h.current,0,0,h.current,0,0),nt.fillStyle="#0d1117",nt.fillRect(0,0,z,W),l.current++,!x&&l.current%Gy===0){const j=t.buffers.current,rt=t.writeIndex.current,Mt=t.samplesInBuffer.current;if(j&&Mt>=Es){let At;if(g===-1){const J=p.current,H=t.bufferSize,ft=(rt-Es+H)%H;for(let Et=0;Et<Es;Et++){let Nt=0;const Dt=(ft+Et)%H;for(let ie=0;ie<Ud;ie++)Nt+=j[ie][Dt];J[Et]=Nt/Ud}At=T.analyse(J,0)}else At=T.analyseRing(j[g],rt,Mt);if(At){if(!c.current||c.current.length!==At.psd.length)c.current=new Float64Array(At.psd);else{const H=c.current,ft=At.psd;for(let Et=0;Et<H.length;Et++)H[Et]=H[Et]*(1-E_)+ft[Et]*E_}const J=performance.now();if(J-d.current>Vy){d.current=J,m.current=At.bandPowers,I(At.bandPowers);let H="",ft=0;for(const Et of Ir)(At.bandPowers[Et.name]||0)>ft&&(ft=At.bandPowers[Et.name],H=Et.name);F(Et=>Et.band===H&&Et.freq===At.dominantFrequency?Et:{band:H,freq:At.dominantFrequency})}}}}const P=c.current;!P||P.length===0?(nt.fillStyle="#4b5563",nt.font="13px monospace",nt.textAlign="center",nt.fillText("Collecting samples…",z/2,W/2)):ky(nt,z,W,P,T._frequencies,Hy,b,A),s.current=requestAnimationFrame(L)};return s.current=requestAnimationFrame(L),()=>{cancelAnimationFrame(s.current),$.disconnect()}},[t,g,b,x,A,T]);const N=Math.max(...Ir.map(K=>D[K.name]||0),1e-6),pt=g===-1?"Avg":`Ch ${g+1}`,G=((et=Ir.find(K=>K.name===B.band))==null?void 0:et.color)||"#8b949e";return X.jsxs("div",{className:"spectral-panel",children:[X.jsxs("div",{className:"spectral-toolbar",children:[X.jsxs("span",{className:"spectral-title",children:["Spectral Analysis"," ",X.jsxs("small",{style:{color:"var(--text-dim)",fontWeight:400},children:["— ",pt]})]}),X.jsxs("div",{className:"spectral-channels",children:[X.jsx("button",{className:`sp-ch${g===-1?" active":""}`,onClick:()=>M(-1),children:"Avg"}),Array.from({length:Ud},(K,nt)=>X.jsx("button",{className:`sp-ch${g===nt?" active":""}`,onClick:()=>M(nt),children:nt+1},nt))]}),X.jsxs("div",{className:"spectral-ctrls",children:[X.jsx("button",{className:`btn${b?" active":""}`,onClick:()=>w(K=>!K),children:b?"Log":"Lin"}),X.jsx("button",{className:`btn${x?" active":""}`,onClick:()=>_(K=>!K),children:x?"▶":"⏸"})]})]}),X.jsxs("div",{className:"spectral-canvas-wrap",children:[X.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}}),x&&X.jsx("div",{className:"spectral-paused",children:"PAUSED"})]}),X.jsx("div",{className:"spectral-bands",children:Ir.map(K=>{const nt=D[K.name]||0,$=N>0?nt/N*100:0,L=A===K.name;return X.jsxs("div",{className:`sp-band${L?" selected":""}`,onClick:()=>U(L?null:K.name),children:[X.jsxs("div",{className:"sp-band-head",children:[X.jsx("span",{className:"sp-band-dot",style:{background:K.color}}),X.jsx("span",{className:"sp-band-name",style:{color:K.color},children:K.label}),X.jsxs("span",{className:"sp-band-hz",children:[K.low,"–",K.high," Hz"]})]}),X.jsx("div",{className:"sp-band-track",children:X.jsx("div",{className:"sp-band-fill",style:{width:`${$}%`,background:K.color}})}),X.jsx("span",{className:"sp-band-val",children:nt<.01?nt.toExponential(1):nt.toFixed(2)})]},K.name)})}),X.jsxs("div",{className:"spectral-footer",children:[X.jsxs("span",{children:["Dominant:"," ",X.jsx("strong",{style:{color:G},children:B.band})," ","(",B.freq.toFixed(1)," Hz)"]}),X.jsxs("span",{children:[Es," pt · ",Nd," Hz ·"," ",(Nd/Es).toFixed(1)," Hz/bin"]})]})]})}),Wy=_t.memo(function(){const[t,i]=_t.useState(!1),[s,l]=_t.useState(0),[c,d]=_t.useState(0),[p,m]=_t.useState(0),h=_t.useRef(0),v=_t.useRef(performance.now()),y=_t.useRef(0);return _t.useEffect(()=>{const g=M=>{(M.key==="p"||M.key==="P")&&i(b=>!b)};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[]),_t.useEffect(()=>{if(!t)return;const g=()=>{h.current++;const M=performance.now(),b=M-v.current;b>=1e3&&(l(Math.round(h.current*(1e3/b))),d(Math.round(b/h.current*100)/100),performance.memory&&m(Math.round(performance.memory.usedJSHeapSize/1048576)),h.current=0,v.current=M),y.current=requestAnimationFrame(g)};return y.current=requestAnimationFrame(g),()=>cancelAnimationFrame(y.current)},[t]),t?X.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.8)",color:"#0f0",fontFamily:"monospace",fontSize:"12px",padding:"8px 12px",borderRadius:"4px",zIndex:1e4,border:"1px solid #0f0",userSelect:"none"},children:[X.jsxs("div",{children:["FPS: ",s]}),X.jsxs("div",{children:["Frame: ",c,"ms"]}),X.jsxs("div",{children:["Memory: ",p,"MB"]}),X.jsx("div",{style:{marginTop:"4px",fontSize:"10px",opacity:.7},children:"Press P to toggle"})]}):null});function qy({onSelect:o,onBack:t}){const[i,s]=_t.useState([]),[l,c]=_t.useState(!0);_t.useEffect(()=>{d()},[]);async function d(){try{const v=await(await fetch("/api/recordings")).json();s(v.recordings||[])}catch(h){console.error("Failed to load recordings:",h)}finally{c(!1)}}function p(h){return new Date(h*1e3).toLocaleString()}function m(h){return h<1024?`${h} B`:h<1024*1024?`${(h/1024).toFixed(1)} KB`:`${(h/1024/1024).toFixed(1)} MB`}return X.jsxs("div",{className:"session-list",children:[X.jsxs("header",{className:"session-header",children:[X.jsx("h2",{children:"Saved Sessions"}),X.jsx("button",{className:"btn btn-back",onClick:t,children:"← Back to Live"})]}),l&&X.jsx("div",{className:"list-loading",children:X.jsx("p",{children:"Loading recordings..."})}),!l&&i.length===0&&X.jsx("div",{className:"list-empty",children:X.jsx("p",{children:"No recordings yet. Record a session on the Live tab."})}),!l&&i.length>0&&X.jsx("div",{className:"list-container",children:X.jsxs("table",{className:"recordings-table",children:[X.jsx("thead",{children:X.jsxs("tr",{children:[X.jsx("th",{children:"Filename"}),X.jsx("th",{children:"Size"}),X.jsx("th",{children:"Date & Time"}),X.jsx("th",{children:"Action"})]})}),X.jsx("tbody",{children:i.map(h=>X.jsxs("tr",{children:[X.jsx("td",{className:"filename",children:h.filename}),X.jsx("td",{className:"size",children:m(h.size)}),X.jsx("td",{className:"mtime",children:p(h.mtime)}),X.jsx("td",{className:"action",children:X.jsx("button",{className:"btn btn-open",onClick:()=>o(h.filename),children:"Open"})})]},h.filename))})]})}),X.jsx("style",{children:`
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
      `})]})}const Ec=16,bs=250,jy=["#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2","#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2"],Yy="rgba(48,54,61,0.4)",Zy="rgba(88,166,255,0.12)",Ky="rgba(88,166,255,0.6)",Qy="#0d1117",Jy=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],$y=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"}];function tM({filename:o,onBack:t}){const[i,s]=_t.useState(!0),[l,c]=_t.useState(null),[d,p]=_t.useState(!1),[m,h]=_t.useState(0),[v,y]=_t.useState(1),[g,M]=_t.useState(100),[b,w]=_t.useState(4),[x,_]=_t.useState([]),[A,U]=_t.useState(""),[D,I]=_t.useState(!1),B=_t.useRef(null),F=_t.useRef(0),T=_t.useRef(0),N=_t.useRef(null),pt=_t.useRef(0),G=_t.useRef(0),et=_t.useRef(!1),K=_t.useRef(1),nt=_t.useRef(100),$=_t.useRef(4),L=_t.useRef(window.devicePixelRatio||1),z=_t.useRef({w:0,h:0});et.current=d,K.current=v,nt.current=g,$.current=b,T.current=m;const W=F.current,it=W/bs,vt=m/bs;_t.useEffect(()=>{let H=!1;async function ft(){s(!0),c(null);try{const Et=await fetch(`/api/recordings/data/${encodeURIComponent(o)}`);if(!Et.ok)throw new Error(`HTTP ${Et.status}`);const Nt=await Et.json();if(Nt.error)throw new Error(Nt.error);const ie=(Nt.data||[]).slice(1),Gt=ie.length;if(Gt===0)throw new Error("Empty recording");const Vt=Array.from({length:Ec},()=>new Float32Array(Gt));for(let re=0;re<Gt;re++){const jt=ie[re].split(",");for(let he=0;he<Ec;he++)Vt[he][re]=parseFloat(jt[he+1])||0}H||(B.current=Vt,F.current=Gt,h(0),s(!1))}catch(Et){H||(c(Et.message),s(!1))}}return ft(),()=>{H=!0}},[o]),_t.useEffect(()=>{fetch(`/api/recordings/annotations/${encodeURIComponent(o)}`).then(H=>H.json()).then(H=>_(H.annotations||[])).catch(()=>{})},[o]),_t.useEffect(()=>{const H=N.current;if(!H||i||l)return;const ft=H.getContext("2d",{alpha:!1}),Et=Nt=>{if(et.current&&G.current>0){const k=(Nt-G.current)/1e3*bs*K.current;let Te=T.current+k;Te>=F.current&&(Te=F.current-1,p(!1)),T.current=Te,h(Te)}G.current=Nt;const Dt=L.current,ie=H.getBoundingClientRect(),Gt=ie.width,Vt=ie.height,re=Math.round(Gt*Dt),jt=Math.round(Vt*Dt);(z.current.w!==re||z.current.h!==jt)&&(z.current={w:re,h:jt},H.width=re,H.height=jt,ft.setTransform(Dt,0,0,Dt,0,0)),P(ft,Gt,Vt),pt.current=requestAnimationFrame(Et)};return G.current=0,pt.current=requestAnimationFrame(Et),()=>cancelAnimationFrame(pt.current)},[i,l]);function P(H,ft,Et){const Nt=B.current;if(!Nt)return;H.fillStyle=Qy,H.fillRect(0,0,ft,Et);const Dt=F.current,ie=T.current,Gt=$.current*bs,Vt=nt.current,re=Math.floor(Gt/2);let jt=Math.floor(ie)-re,he=jt+Gt;jt<0&&(jt=0,he=Gt),he>Dt&&(he=Dt,jt=Math.max(0,Dt-Gt));const k=Et/Ec;for(let O=0;O<Ec;O++){const E=O*k,Q=E+k/2,xt=k/2;O>0&&(H.strokeStyle=Yy,H.lineWidth=.5,H.beginPath(),H.moveTo(0,E),H.lineTo(ft,E),H.stroke()),H.strokeStyle=Zy,H.lineWidth=.5,H.beginPath(),H.moveTo(0,Q),H.lineTo(ft,Q),H.stroke(),H.fillStyle="rgba(230,237,243,0.4)",H.font="10px monospace",H.fillText(`Ch ${O+1}`,4,E+12);const Tt=Nt[O],mt=he-jt;if(mt<2)continue;const Ft=mt>2e3?Math.floor(mt/2e3):1,Lt=ft/(mt-1),te=xt*.85/Vt;H.strokeStyle=jy[O],H.lineWidth=1.2,H.lineJoin="round",H.beginPath();for(let ee=0;ee<mt;ee+=Ft){const Rt=ee*Lt,Ct=Q-Tt[jt+ee]*te;ee===0?H.moveTo(Rt,Ct):H.lineTo(Rt,Ct)}H.stroke()}const Te=Math.floor(ie)>=jt&&Math.floor(ie)<=he?(Math.floor(ie)-jt)/(he-jt)*ft:ft/2;H.strokeStyle=Ky,H.lineWidth=1.5,H.setLineDash([4,3]),H.beginPath(),H.moveTo(Te,0),H.lineTo(Te,Et),H.stroke(),H.setLineDash([]),H.fillStyle="rgba(230,237,243,0.3)",H.font="10px monospace";const me=jt/bs,Ae=he/bs,Wt=Math.min(10,Math.floor(ft/80));for(let O=0;O<=Wt;O++){const E=me+(Ae-me)*(O/Wt),Q=O/Wt*ft;H.fillText(J(E),Q+2,Et-4)}}const j=_t.useCallback(async H=>{try{await fetch(`/api/recordings/annotations/${encodeURIComponent(o)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({annotations:H})})}catch{}},[o]);function rt(){if(!A.trim())return;const H=Math.floor(m)/bs,ft={id:Date.now(),frame:Math.floor(m),time:H,text:A,timestamp:new Date().toISOString()},Et=[...x,ft];_(Et),j(Et),U(""),I(!1)}function Mt(H){const ft=x.filter(Et=>Et.id!==H);_(ft),j(ft)}function At(H){h(H.frame),T.current=H.frame,p(!1)}function J(H){const ft=Math.floor(H/60),Et=Math.floor(H%60),Nt=Math.floor(H%1*100);return`${String(ft).padStart(2,"0")}:${String(Et).padStart(2,"0")}.${String(Nt).padStart(2,"0")}`}return i?X.jsxs("div",{className:"sv-root sv-center",children:[X.jsx("p",{children:"Loading recording..."}),X.jsx("style",{children:Ld})]}):l?X.jsxs("div",{className:"sv-root sv-center",children:[X.jsxs("p",{children:["Error: ",l]}),X.jsx("button",{className:"sv-btn",onClick:t,children:"Back"}),X.jsx("style",{children:Ld})]}):X.jsxs("div",{className:"sv-root",children:[X.jsxs("header",{className:"sv-header",children:[X.jsxs("div",{className:"sv-title",children:[X.jsx("button",{className:"sv-btn",onClick:t,children:"← Back"}),X.jsx("h2",{children:o}),X.jsxs("span",{className:"sv-meta",children:[W.toLocaleString()," frames · ",J(it)]})]}),X.jsxs("div",{className:"sv-controls",children:[X.jsx("button",{className:`sv-btn${d?" active":""}`,onClick:()=>{d||(G.current=0),p(!d)},children:d?"⏸ Pause":"▶ Play"}),X.jsx("button",{className:"sv-btn",onClick:()=>{h(0),T.current=0,p(!1)},children:"⏮ Rewind"}),X.jsxs("select",{value:v,onChange:H=>y(parseFloat(H.target.value)),className:"sv-select",children:[X.jsx("option",{value:.25,children:"0.25x"}),X.jsx("option",{value:.5,children:"0.5x"}),X.jsx("option",{value:1,children:"1x"}),X.jsx("option",{value:1.5,children:"1.5x"}),X.jsx("option",{value:2,children:"2x"}),X.jsx("option",{value:4,children:"4x"})]}),X.jsx("div",{className:"sv-sep"}),X.jsx("label",{className:"sv-label",children:"Window"}),X.jsx("select",{value:b,onChange:H=>w(parseInt(H.target.value)),className:"sv-select",children:$y.map(H=>X.jsx("option",{value:H.value,children:H.label},H.value))}),X.jsx("label",{className:"sv-label",children:"Scale"}),X.jsx("select",{value:g,onChange:H=>M(parseInt(H.target.value)),className:"sv-select",children:Jy.map(H=>X.jsx("option",{value:H.value,children:H.label},H.value))})]})]}),X.jsxs("div",{className:"sv-timeline",children:[X.jsx("span",{className:"sv-time",children:J(vt)}),X.jsx("input",{type:"range",min:"0",max:W-1,value:Math.floor(m),onChange:H=>{const ft=parseInt(H.target.value);h(ft),T.current=ft,p(!1),G.current=0},className:"sv-slider"}),X.jsx("span",{className:"sv-time",children:J(it)})]}),X.jsxs("div",{className:"sv-content",children:[X.jsx("div",{className:"sv-canvas-wrap",children:X.jsx("canvas",{ref:N,style:{display:"block",width:"100%",height:"100%"}})}),X.jsxs("div",{className:"sv-annotations",children:[X.jsxs("div",{className:"sv-anno-header",children:[X.jsx("h3",{children:"Annotations"}),X.jsx("button",{className:"sv-btn sv-btn-sm",onClick:()=>I(!D),children:D?"Cancel":"+ Add"})]}),D&&X.jsxs("div",{className:"sv-anno-form",children:[X.jsx("textarea",{value:A,onChange:H=>U(H.target.value),placeholder:"Annotation at current position...",onKeyDown:H=>{H.key==="Enter"&&H.ctrlKey&&rt()}}),X.jsx("button",{className:"sv-btn sv-btn-primary",onClick:rt,children:"Add"})]}),X.jsx("div",{className:"sv-anno-list",children:x.length===0?X.jsx("p",{className:"sv-anno-empty",children:"No annotations"}):x.map(H=>X.jsxs("div",{className:"sv-anno-item",onClick:()=>At(H),children:[X.jsx("span",{className:"sv-anno-time",children:J(H.time)}),X.jsx("span",{className:"sv-anno-text",children:H.text}),X.jsx("button",{className:"sv-anno-del",onClick:ft=>{ft.stopPropagation(),Mt(H.id)},children:"✕"})]},H.id))})]})]}),X.jsx("style",{children:Ld})]})}const Ld=`
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
 */const hp="183",eM=0,b_=1,nM=2,eu=1,iM=2,tl=3,as=0,jn=1,Bi=2,va=0,Hr=1,T_=2,A_=3,R_=4,aM=5,Ns=100,sM=101,rM=102,oM=103,lM=104,cM=200,uM=201,fM=202,dM=203,_h=204,vh=205,hM=206,pM=207,mM=208,gM=209,_M=210,vM=211,xM=212,SM=213,yM=214,xh=0,Sh=1,yh=2,Vr=3,Mh=4,Eh=5,bh=6,Th=7,Nv=0,MM=1,EM=2,Vi=0,Lv=1,Ov=2,Pv=3,pp=4,Fv=5,zv=6,Bv=7,Iv=300,Fs=301,kr=302,Od=303,Pd=304,gu=306,Ah=1e3,_a=1001,Rh=1002,Tn=1003,bM=1004,bc=1005,Un=1006,Fd=1007,Os=1008,ri=1009,Hv=1010,Gv=1011,nl=1012,mp=1013,Xi=1014,Hi=1015,Sa=1016,gp=1017,_p=1018,il=1020,Vv=35902,kv=35899,Xv=1021,Wv=1022,wi=1023,ya=1026,Ps=1027,qv=1028,vp=1029,Xr=1030,xp=1031,Sp=1033,nu=33776,iu=33777,au=33778,su=33779,Ch=35840,wh=35841,Dh=35842,Uh=35843,Nh=36196,Lh=37492,Oh=37496,Ph=37488,Fh=37489,zh=37490,Bh=37491,Ih=37808,Hh=37809,Gh=37810,Vh=37811,kh=37812,Xh=37813,Wh=37814,qh=37815,jh=37816,Yh=37817,Zh=37818,Kh=37819,Qh=37820,Jh=37821,$h=36492,tp=36494,ep=36495,np=36283,ip=36284,ap=36285,sp=36286,TM=3200,AM=0,RM=1,es="",_i="srgb",Wr="srgb-linear",cu="linear",Ve="srgb",Sr=7680,C_=519,CM=512,wM=513,DM=514,yp=515,UM=516,NM=517,Mp=518,LM=519,rp=35044,w_="300 es",Gi=2e3,al=2001;function OM(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function uu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function PM(){const o=uu("canvas");return o.style.display="block",o}const D_={};function fu(...o){const t="THREE."+o.shift();console.log(t,...o)}function jv(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function le(...o){o=jv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Ne(...o){o=jv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function du(...o){const t=o.join(" ");t in D_||(D_[t]=!0,le(...o))}function FM(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const zM={[xh]:Sh,[yh]:bh,[Mh]:Th,[Vr]:Eh,[Sh]:xh,[bh]:yh,[Th]:Mh,[Eh]:Vr};class jr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zd=Math.PI/180,op=180/Math.PI;function is(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function De(o,t,i){return Math.max(t,Math.min(i,o))}function BM(o,t){return(o%t+t)%t}function Bd(o,t,i){return(1-i)*o+i*t}function Ii(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function qe(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class be{constructor(t=0,i=0){be.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],v=s[l+2],y=s[l+3],g=c[d+0],M=c[d+1],b=c[d+2],w=c[d+3];if(y!==w||m!==g||h!==M||v!==b){let x=m*g+h*M+v*b+y*w;x<0&&(g=-g,M=-M,b=-b,w=-w,x=-x);let _=1-p;if(x<.9995){const A=Math.acos(x),U=Math.sin(A);_=Math.sin(_*A)/U,p=Math.sin(p*A)/U,m=m*_+g*p,h=h*_+M*p,v=v*_+b*p,y=y*_+w*p}else{m=m*_+g*p,h=h*_+M*p,v=v*_+b*p,y=y*_+w*p;const A=1/Math.sqrt(m*m+h*h+v*v+y*y);m*=A,h*=A,v*=A,y*=A}}t[i]=m,t[i+1]=h,t[i+2]=v,t[i+3]=y}static multiplyQuaternionsFlat(t,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],v=s[l+3],y=c[d],g=c[d+1],M=c[d+2],b=c[d+3];return t[i]=p*b+v*y+m*M-h*g,t[i+1]=m*b+v*g+h*y-p*M,t[i+2]=h*b+v*M+p*g-m*y,t[i+3]=v*b-p*y-m*g-h*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,p=Math.cos,m=Math.sin,h=p(s/2),v=p(l/2),y=p(c/2),g=m(s/2),M=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=g*v*y+h*M*b,this._y=h*M*y-g*v*b,this._z=h*v*b+g*M*y,this._w=h*v*y-g*M*b;break;case"YXZ":this._x=g*v*y+h*M*b,this._y=h*M*y-g*v*b,this._z=h*v*b-g*M*y,this._w=h*v*y+g*M*b;break;case"ZXY":this._x=g*v*y-h*M*b,this._y=h*M*y+g*v*b,this._z=h*v*b+g*M*y,this._w=h*v*y-g*M*b;break;case"ZYX":this._x=g*v*y-h*M*b,this._y=h*M*y+g*v*b,this._z=h*v*b-g*M*y,this._w=h*v*y+g*M*b;break;case"YZX":this._x=g*v*y+h*M*b,this._y=h*M*y+g*v*b,this._z=h*v*b-g*M*y,this._w=h*v*y-g*M*b;break;case"XZY":this._x=g*v*y-h*M*b,this._y=h*M*y-g*v*b,this._z=h*v*b+g*M*y,this._w=h*v*y+g*M*b;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],v=i[6],y=i[10],g=s+p+y;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-h)*M,this._z=(d-l)*M}else if(s>p&&s>y){const M=2*Math.sqrt(1+s-p-y);this._w=(v-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+h)/M}else if(p>y){const M=2*Math.sqrt(1+p-s-y);this._w=(c-h)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+y-s-p);this._w=(d-l)/M,this._x=(c+h)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,p=i._x,m=i._y,h=i._z,v=i._w;return this._x=s*v+d*p+l*h-c*m,this._y=l*v+d*m+c*p-s*h,this._z=c*v+d*h+s*m-l*p,this._w=d*v-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,d=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),v=Math.sin(h);m=Math.sin(m*h)/v,i=Math.sin(i*h)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(t=0,i=0,s=0){st.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(U_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(U_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,p=t.z,m=t.w,h=2*(d*l-p*s),v=2*(p*i-c*l),y=2*(c*s-d*i);return this.x=i+m*h+d*y-p*v,this.y=s+m*v+p*h-c*y,this.z=l+m*y+c*v-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Id.copy(this).projectOnVector(t),this.sub(Id)}reflect(t){return this.sub(Id.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Id=new st,U_=new Yr;class xe{constructor(t,i,s,l,c,d,p,m,h){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,m,h)}set(t,i,s,l,c,d,p,m,h){const v=this.elements;return v[0]=t,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=d,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],v=s[4],y=s[7],g=s[2],M=s[5],b=s[8],w=l[0],x=l[3],_=l[6],A=l[1],U=l[4],D=l[7],I=l[2],B=l[5],F=l[8];return c[0]=d*w+p*A+m*I,c[3]=d*x+p*U+m*B,c[6]=d*_+p*D+m*F,c[1]=h*w+v*A+y*I,c[4]=h*x+v*U+y*B,c[7]=h*_+v*D+y*F,c[2]=g*w+M*A+b*I,c[5]=g*x+M*U+b*B,c[8]=g*_+M*D+b*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],v=t[8];return i*d*v-i*p*h-s*c*v+s*p*m+l*c*h-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],v=t[8],y=v*d-p*h,g=p*m-v*c,M=h*c-d*m,b=i*y+s*g+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=y*w,t[1]=(l*h-v*s)*w,t[2]=(p*s-l*d)*w,t[3]=g*w,t[4]=(v*i-l*m)*w,t[5]=(l*c-p*i)*w,t[6]=M*w,t[7]=(s*m-h*i)*w,t[8]=(d*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+t,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Hd.makeScale(t,i)),this}rotate(t){return this.premultiply(Hd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Hd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hd=new xe,N_=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),L_=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function IM(){const o={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Ve&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ve&&(l.r=Gr(l.r),l.g=Gr(l.g),l.b=Gr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===es?cu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return du("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return du("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Wr]:{primaries:t,whitePoint:s,transfer:cu,toXYZ:N_,fromXYZ:L_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:N_,fromXYZ:L_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),o}const Le=IM();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Gr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let yr;class HM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{yr===void 0&&(yr=uu("canvas")),yr.width=t.width,yr.height=t.height;const l=yr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=yr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=uu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=xa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:t.width,height:t.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let GM=0;class Ep{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=is(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Gd(l[d].image)):c.push(Gd(l[d]))}else c=Gd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Gd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?HM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}let VM=0;const Vd=new st;class Nn extends jr{constructor(t=Nn.DEFAULT_IMAGE,i=Nn.DEFAULT_MAPPING,s=_a,l=_a,c=Un,d=Os,p=wi,m=ri,h=Nn.DEFAULT_ANISOTROPY,v=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=is(),this.name="",this.source=new Ep(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vd).x}get height(){return this.source.getSize(Vd).y}get depth(){return this.source.getSize(Vd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){le(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Iv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ah:t.x=t.x-Math.floor(t.x);break;case _a:t.x=t.x<0?0:1;break;case Rh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ah:t.y=t.y-Math.floor(t.y);break;case _a:t.y=t.y<0?0:1;break;case Rh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=Iv;Nn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,s=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,h=m[0],v=m[4],y=m[8],g=m[1],M=m[5],b=m[9],w=m[2],x=m[6],_=m[10];if(Math.abs(v-g)<.01&&Math.abs(y-w)<.01&&Math.abs(b-x)<.01){if(Math.abs(v+g)<.1&&Math.abs(y+w)<.1&&Math.abs(b+x)<.1&&Math.abs(h+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(h+1)/2,D=(M+1)/2,I=(_+1)/2,B=(v+g)/4,F=(y+w)/4,T=(b+x)/4;return U>D&&U>I?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=B/s,c=F/s):D>I?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=B/l,c=T/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=F/c,l=T/c),this.set(s,l,c,i),this}let A=Math.sqrt((x-b)*(x-b)+(y-w)*(y-w)+(g-v)*(g-v));return Math.abs(A)<.001&&(A=1),this.x=(x-b)/A,this.y=(y-w)/A,this.z=(g-v)/A,this.w=Math.acos((h+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this.w=De(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this.w=De(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kM extends jr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Nn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ep(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends kM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Yv extends Nn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class XM extends Nn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ke{constructor(t,i,s,l,c,d,p,m,h,v,y,g,M,b,w,x){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,m,h,v,y,g,M,b,w,x)}set(t,i,s,l,c,d,p,m,h,v,y,g,M,b,w,x){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=d,_[9]=p,_[13]=m,_[2]=h,_[6]=v,_[10]=y,_[14]=g,_[3]=M,_[7]=b,_[11]=w,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Mr.setFromMatrixColumn(t,0).length(),c=1/Mr.setFromMatrixColumn(t,1).length(),d=1/Mr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),v=Math.cos(c),y=Math.sin(c);if(t.order==="XYZ"){const g=d*v,M=d*y,b=p*v,w=p*y;i[0]=m*v,i[4]=-m*y,i[8]=h,i[1]=M+b*h,i[5]=g-w*h,i[9]=-p*m,i[2]=w-g*h,i[6]=b+M*h,i[10]=d*m}else if(t.order==="YXZ"){const g=m*v,M=m*y,b=h*v,w=h*y;i[0]=g+w*p,i[4]=b*p-M,i[8]=d*h,i[1]=d*y,i[5]=d*v,i[9]=-p,i[2]=M*p-b,i[6]=w+g*p,i[10]=d*m}else if(t.order==="ZXY"){const g=m*v,M=m*y,b=h*v,w=h*y;i[0]=g-w*p,i[4]=-d*y,i[8]=b+M*p,i[1]=M+b*p,i[5]=d*v,i[9]=w-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(t.order==="ZYX"){const g=d*v,M=d*y,b=p*v,w=p*y;i[0]=m*v,i[4]=b*h-M,i[8]=g*h+w,i[1]=m*y,i[5]=w*h+g,i[9]=M*h-b,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(t.order==="YZX"){const g=d*m,M=d*h,b=p*m,w=p*h;i[0]=m*v,i[4]=w-g*y,i[8]=b*y+M,i[1]=y,i[5]=d*v,i[9]=-p*v,i[2]=-h*v,i[6]=M*y+b,i[10]=g-w*y}else if(t.order==="XZY"){const g=d*m,M=d*h,b=p*m,w=p*h;i[0]=m*v,i[4]=-y,i[8]=h*v,i[1]=g*y+w,i[5]=d*v,i[9]=M*y-b,i[2]=b*y-M,i[6]=p*v,i[10]=w*y+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(WM,t,qM)}lookAt(t,i,s){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Za.crossVectors(s,ii),Za.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Za.crossVectors(s,ii)),Za.normalize(),Tc.crossVectors(ii,Za),l[0]=Za.x,l[4]=Tc.x,l[8]=ii.x,l[1]=Za.y,l[5]=Tc.y,l[9]=ii.y,l[2]=Za.z,l[6]=Tc.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],v=s[1],y=s[5],g=s[9],M=s[13],b=s[2],w=s[6],x=s[10],_=s[14],A=s[3],U=s[7],D=s[11],I=s[15],B=l[0],F=l[4],T=l[8],N=l[12],pt=l[1],G=l[5],et=l[9],K=l[13],nt=l[2],$=l[6],L=l[10],z=l[14],W=l[3],it=l[7],vt=l[11],P=l[15];return c[0]=d*B+p*pt+m*nt+h*W,c[4]=d*F+p*G+m*$+h*it,c[8]=d*T+p*et+m*L+h*vt,c[12]=d*N+p*K+m*z+h*P,c[1]=v*B+y*pt+g*nt+M*W,c[5]=v*F+y*G+g*$+M*it,c[9]=v*T+y*et+g*L+M*vt,c[13]=v*N+y*K+g*z+M*P,c[2]=b*B+w*pt+x*nt+_*W,c[6]=b*F+w*G+x*$+_*it,c[10]=b*T+w*et+x*L+_*vt,c[14]=b*N+w*K+x*z+_*P,c[3]=A*B+U*pt+D*nt+I*W,c[7]=A*F+U*G+D*$+I*it,c[11]=A*T+U*et+D*L+I*vt,c[15]=A*N+U*K+D*z+I*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],p=t[5],m=t[9],h=t[13],v=t[2],y=t[6],g=t[10],M=t[14],b=t[3],w=t[7],x=t[11],_=t[15],A=m*M-h*g,U=p*M-h*y,D=p*g-m*y,I=d*M-h*v,B=d*g-m*v,F=d*y-p*v;return i*(w*A-x*U+_*D)-s*(b*A-x*I+_*B)+l*(b*U-w*I+_*F)-c*(b*D-w*B+x*F)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],v=t[8],y=t[9],g=t[10],M=t[11],b=t[12],w=t[13],x=t[14],_=t[15],A=i*p-s*d,U=i*m-l*d,D=i*h-c*d,I=s*m-l*p,B=s*h-c*p,F=l*h-c*m,T=v*w-y*b,N=v*x-g*b,pt=v*_-M*b,G=y*x-g*w,et=y*_-M*w,K=g*_-M*x,nt=A*K-U*et+D*G+I*pt-B*N+F*T;if(nt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/nt;return t[0]=(p*K-m*et+h*G)*$,t[1]=(l*et-s*K-c*G)*$,t[2]=(w*F-x*B+_*I)*$,t[3]=(g*B-y*F-M*I)*$,t[4]=(m*pt-d*K-h*N)*$,t[5]=(i*K-l*pt+c*N)*$,t[6]=(x*D-b*F-_*U)*$,t[7]=(v*F-g*D+M*U)*$,t[8]=(d*et-p*pt+h*T)*$,t[9]=(s*pt-i*et-c*T)*$,t[10]=(b*B-w*D+_*A)*$,t[11]=(y*D-v*B-M*A)*$,t[12]=(p*N-d*G-m*T)*$,t[13]=(i*G-s*N+l*T)*$,t[14]=(w*U-b*I-x*A)*$,t[15]=(v*I-y*U+g*A)*$,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,p=t.y,m=t.z,h=c*d,v=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,v*p+s,v*m-l*d,0,h*m-l*p,v*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,v=d+d,y=p+p,g=c*h,M=c*v,b=c*y,w=d*v,x=d*y,_=p*y,A=m*h,U=m*v,D=m*y,I=s.x,B=s.y,F=s.z;return l[0]=(1-(w+_))*I,l[1]=(M+D)*I,l[2]=(b-U)*I,l[3]=0,l[4]=(M-D)*B,l[5]=(1-(g+_))*B,l[6]=(x+A)*B,l[7]=0,l[8]=(b+U)*F,l[9]=(x-A)*F,l[10]=(1-(g+w))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Mr.set(l[0],l[1],l[2]).length();const p=Mr.set(l[4],l[5],l[6]).length(),m=Mr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ai.copy(this);const h=1/d,v=1/p,y=1/m;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=v,Ai.elements[5]*=v,Ai.elements[6]*=v,Ai.elements[8]*=y,Ai.elements[9]*=y,Ai.elements[10]*=y,i.setFromRotationMatrix(Ai),s.x=d,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,d,p=Gi,m=!1){const h=this.elements,v=2*c/(i-t),y=2*c/(s-l),g=(i+t)/(i-t),M=(s+l)/(s-l);let b,w;if(m)b=c/(d-c),w=d*c/(d-c);else if(p===Gi)b=-(d+c)/(d-c),w=-2*d*c/(d-c);else if(p===al)b=-d/(d-c),w=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=y,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,s,l,c,d,p=Gi,m=!1){const h=this.elements,v=2/(i-t),y=2/(s-l),g=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,w;if(m)b=1/(d-c),w=d/(d-c);else if(p===Gi)b=-2/(d-c),w=-(d+c)/(d-c);else if(p===al)b=-1/(d-c),w=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=y,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Mr=new st,Ai=new Ke,WM=new st(0,0,0),qM=new st(1,1,1),Za=new st,Tc=new st,ii=new st,O_=new Ke,P_=new Yr;class Ma{constructor(t=0,i=0,s=0,l=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],v=l[9],y=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(De(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-De(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(De(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-De(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(De(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return O_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(O_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return P_.setFromEuler(this),this.setFromQuaternion(P_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class Zv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jM=0;const F_=new st,Er=new Yr,da=new Ke,Ac=new st,Vo=new st,YM=new st,ZM=new Yr,z_=new st(1,0,0),B_=new st(0,1,0),I_=new st(0,0,1),H_={type:"added"},KM={type:"removed"},br={type:"childadded",child:null},kd={type:"childremoved",child:null};class An extends jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const t=new st,i=new Ma,s=new Yr,l=new st(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new xe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Er.setFromAxisAngle(t,i),this.quaternion.multiply(Er),this}rotateOnWorldAxis(t,i){return Er.setFromAxisAngle(t,i),this.quaternion.premultiply(Er),this}rotateX(t){return this.rotateOnAxis(z_,t)}rotateY(t){return this.rotateOnAxis(B_,t)}rotateZ(t){return this.rotateOnAxis(I_,t)}translateOnAxis(t,i){return F_.copy(t).applyQuaternion(this.quaternion),this.position.add(F_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(z_,t)}translateY(t){return this.translateOnAxis(B_,t)}translateZ(t){return this.translateOnAxis(I_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Ac.copy(t):Ac.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Vo,Ac,this.up):da.lookAt(Ac,Vo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),Er.setFromRotationMatrix(da),this.quaternion.premultiply(Er.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(H_),br.child=t,this.dispatchEvent(br),br.child=null):Ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(KM),kd.child=t,this.dispatchEvent(kd),kd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),da.multiply(t.parent.matrixWorld)),t.applyMatrix4(da),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(H_),br.child=t,this.dispatchEvent(br),br.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,t,YM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,ZM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const y=m[h];c(t.shapes,y)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=d(t.geometries),m=d(t.materials),h=d(t.textures),v=d(t.images),y=d(t.shapes),g=d(t.skeletons),M=d(t.animations),b=d(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),v.length>0&&(s.images=v),y.length>0&&(s.shapes=y),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(p){const m=[];for(const h in p){const v=p[h];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}An.DEFAULT_UP=new st(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Rc extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QM={type:"move"};class Xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const w of t.hand.values()){const x=i.getJointPose(w,s),_=this._getHandJoint(h,w);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const v=h.joints["index-finger-tip"],y=h.joints["thumb-tip"],g=v.position.distanceTo(y.position),M=.02,b=.005;h.inputState.pinching&&g>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(QM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Rc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Wd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class ye{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=_i){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=BM(t,1),i=De(i,0,1),s=De(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Wd(d,c,t+1/3),this.g=Wd(d,c,t),this.b=Wd(d,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=_i){function s(c){c!==void 0&&parseFloat(c)<1&&le("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:le("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);le("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=_i){const s=Kv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):le("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_i){return Le.workingToColorSpace(wn.copy(this),t),Math.round(De(wn.r*255,0,255))*65536+Math.round(De(wn.g*255,0,255))*256+Math.round(De(wn.b*255,0,255))}getHexString(t=_i){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,c=wn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const v=(p+d)/2;if(p===d)m=0,h=0;else{const y=d-p;switch(h=v<=.5?y/(d+p):y/(2-d-p),d){case s:m=(l-c)/y+(l<c?6:0);break;case l:m=(c-s)/y+2;break;case c:m=(s-l)/y+4;break}m/=6}return t.h=m,t.s=h,t.l=v,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=_i){Le.workingToColorSpace(wn.copy(this),t);const i=wn.r,s=wn.g,l=wn.b;return t!==_i?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ka),this.setHSL(Ka.h+t,Ka.s+i,Ka.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ka),t.getHSL(Cc);const s=Bd(Ka.h,Cc.h,i),l=Bd(Ka.s,Cc.s,i),c=Bd(Ka.l,Cc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new ye;ye.NAMES=Kv;class bp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(t),this.density=i}clone(){return new bp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class JM extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ma,this.environmentIntensity=1,this.environmentRotation=new Ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ri=new st,ha=new st,qd=new st,pa=new st,Tr=new st,Ar=new st,G_=new st,jd=new st,Yd=new st,Zd=new st,Kd=new nn,Qd=new nn,Jd=new nn;class vi{constructor(t=new st,i=new st,s=new st){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ri.subVectors(t,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ri.subVectors(l,i),ha.subVectors(s,i),qd.subVectors(t,i);const d=Ri.dot(Ri),p=Ri.dot(ha),m=Ri.dot(qd),h=ha.dot(ha),v=ha.dot(qd),y=d*h-p*p;if(y===0)return c.set(0,0,0),null;const g=1/y,M=(h*m-p*v)*g,b=(d*v-p*m)*g;return c.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(t,i,s,l,c,d,p,m){return this.getBarycoord(t,i,s,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(d,pa.y),m.addScaledVector(p,pa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return Kd.setScalar(0),Qd.setScalar(0),Jd.setScalar(0),Kd.fromBufferAttribute(t,i),Qd.fromBufferAttribute(t,s),Jd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Kd,c.x),d.addScaledVector(Qd,c.y),d.addScaledVector(Jd,c.z),d}static isFrontFacing(t,i,s,l){return Ri.subVectors(s,i),ha.subVectors(t,i),Ri.cross(ha).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ri.cross(ha).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return vi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,p;Tr.subVectors(l,s),Ar.subVectors(c,s),jd.subVectors(t,s);const m=Tr.dot(jd),h=Ar.dot(jd);if(m<=0&&h<=0)return i.copy(s);Yd.subVectors(t,l);const v=Tr.dot(Yd),y=Ar.dot(Yd);if(v>=0&&y<=v)return i.copy(l);const g=m*y-v*h;if(g<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(s).addScaledVector(Tr,d);Zd.subVectors(t,c);const M=Tr.dot(Zd),b=Ar.dot(Zd);if(b>=0&&M<=b)return i.copy(c);const w=M*h-m*b;if(w<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(s).addScaledVector(Ar,p);const x=v*b-M*y;if(x<=0&&y-v>=0&&M-b>=0)return G_.subVectors(c,l),p=(y-v)/(y-v+(M-b)),i.copy(l).addScaledVector(G_,p);const _=1/(x+w+g);return d=w*_,p=g*_,i.copy(s).addScaledVector(Tr,d).addScaledVector(Ar,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class rl{constructor(t=new st(1/0,1/0,1/0),i=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ci.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ci.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ci.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,Ci):Ci.fromBufferAttribute(c,d),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wc.copy(s.boundingBox)),wc.applyMatrix4(t.matrixWorld),this.union(wc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ko),Dc.subVectors(this.max,ko),Rr.subVectors(t.a,ko),Cr.subVectors(t.b,ko),wr.subVectors(t.c,ko),Qa.subVectors(Cr,Rr),Ja.subVectors(wr,Cr),Ts.subVectors(Rr,wr);let i=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-Ts.z,Ts.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,Ts.z,0,-Ts.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-Ts.y,Ts.x,0];return!$d(i,Rr,Cr,wr,Dc)||(i=[1,0,0,0,1,0,0,0,1],!$d(i,Rr,Cr,wr,Dc))?!1:(Uc.crossVectors(Qa,Ja),i=[Uc.x,Uc.y,Uc.z],$d(i,Rr,Cr,wr,Dc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ma=[new st,new st,new st,new st,new st,new st,new st,new st],Ci=new st,wc=new rl,Rr=new st,Cr=new st,wr=new st,Qa=new st,Ja=new st,Ts=new st,ko=new st,Dc=new st,Uc=new st,As=new st;function $d(o,t,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){As.fromArray(o,c);const p=l.x*Math.abs(As.x)+l.y*Math.abs(As.y)+l.z*Math.abs(As.z),m=t.dot(As),h=i.dot(As),v=s.dot(As);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>p)return!1}return!0}const hn=new st,Nc=new be;let $M=0;class Dn{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$M++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=rp,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Nc.fromBufferAttribute(this,i),Nc.applyMatrix3(t),this.setXY(i,Nc.x,Nc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ii(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qe(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ii(i,this.array)),i}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ii(i,this.array)),i}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ii(i,this.array)),i}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ii(i,this.array)),i}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rp&&(t.usage=this.usage),t}}class Qv extends Dn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Jv extends Dn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class oi extends Dn{constructor(t,i,s){super(new Float32Array(t),i,s)}}const tE=new rl,Xo=new st,th=new st;class ol{constructor(t=new st,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):tE.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xo.subVectors(t,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Xo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(th.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xo.copy(t.center).add(th)),this.expandByPoint(Xo.copy(t.center).sub(th))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let eE=0;const gi=new Ke,eh=new An,Dr=new st,ai=new rl,Wo=new rl,Sn=new st;class Ln extends jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(OM(t)?Jv:Qv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new xe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gi.makeRotationFromQuaternion(t),this.applyMatrix4(gi),this}rotateX(t){return gi.makeRotationX(t),this.applyMatrix4(gi),this}rotateY(t){return gi.makeRotationY(t),this.applyMatrix4(gi),this}rotateZ(t){return gi.makeRotationZ(t),this.applyMatrix4(gi),this}translate(t,i,s){return gi.makeTranslation(t,i,s),this.applyMatrix4(gi),this}scale(t,i,s){return gi.makeScale(t,i,s),this.applyMatrix4(gi),this}lookAt(t){return eh.lookAt(t),eh.updateMatrix(),this.applyMatrix4(eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new oi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ol);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(t){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Wo.setFromBufferAttribute(p),this.morphTargetsRelative?(Sn.addVectors(ai.min,Wo.min),ai.expandByPoint(Sn),Sn.addVectors(ai.max,Wo.max),ai.expandByPoint(Sn)):(ai.expandByPoint(Wo.min),ai.expandByPoint(Wo.max))}ai.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,v=p.count;h<v;h++)Sn.fromBufferAttribute(p,h),m&&(Dr.fromBufferAttribute(t,h),Sn.add(Dr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new st,m[T]=new st;const h=new st,v=new st,y=new st,g=new be,M=new be,b=new be,w=new st,x=new st;function _(T,N,pt){h.fromBufferAttribute(s,T),v.fromBufferAttribute(s,N),y.fromBufferAttribute(s,pt),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,N),b.fromBufferAttribute(c,pt),v.sub(h),y.sub(h),M.sub(g),b.sub(g);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(w.copy(v).multiplyScalar(b.y).addScaledVector(y,-M.y).multiplyScalar(G),x.copy(y).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(G),p[T].add(w),p[N].add(w),p[pt].add(w),m[T].add(x),m[N].add(x),m[pt].add(x))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let T=0,N=A.length;T<N;++T){const pt=A[T],G=pt.start,et=pt.count;for(let K=G,nt=G+et;K<nt;K+=3)_(t.getX(K+0),t.getX(K+1),t.getX(K+2))}const U=new st,D=new st,I=new st,B=new st;function F(T){I.fromBufferAttribute(l,T),B.copy(I);const N=p[T];U.copy(N),U.sub(I.multiplyScalar(I.dot(N))).normalize(),D.crossVectors(B,N);const G=D.dot(m[T])<0?-1:1;d.setXYZW(T,U.x,U.y,U.z,G)}for(let T=0,N=A.length;T<N;++T){const pt=A[T],G=pt.start,et=pt.count;for(let K=G,nt=G+et;K<nt;K+=3)F(t.getX(K+0)),F(t.getX(K+1)),F(t.getX(K+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Dn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new st,c=new st,d=new st,p=new st,m=new st,h=new st,v=new st,y=new st;if(t)for(let g=0,M=t.count;g<M;g+=3){const b=t.getX(g+0),w=t.getX(g+1),x=t.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),d.fromBufferAttribute(i,x),v.subVectors(d,c),y.subVectors(l,c),v.cross(y),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),h.fromBufferAttribute(s,x),p.add(v),m.add(v),h.add(v),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(x,h.x,h.y,h.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),v.subVectors(d,c),y.subVectors(l,c),v.cross(y),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(p,m){const h=p.array,v=p.itemSize,y=p.normalized,g=new h.constructor(m.length*v);let M=0,b=0;for(let w=0,x=m.length;w<x;w++){p.isInterleavedBufferAttribute?M=m[w]*p.data.stride+p.offset:M=m[w]*v;for(let _=0;_<v;_++)g[b++]=h[M++]}return new Dn(g,v,y)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ln,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let v=0,y=h.length;v<y;v++){const g=h[v],M=t(g,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let y=0,g=h.length;y<g;y++){const M=h[y];v.push(M.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const h in l){const v=l[h];this.setAttribute(h,v.clone(i))}const c=t.morphAttributes;for(const h in c){const v=[],y=c[h];for(let g=0,M=y.length;g<M;g++)v.push(y[g].clone(i));this.morphAttributes[h]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,v=d.length;h<v;h++){const y=d[h];this.addGroup(y.start,y.count,y.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nE{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=rp,this.updateRanges=[],this.version=0,this.uuid=is()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=is()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=is()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const In=new st;class hu{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)In.fromBufferAttribute(this,i),In.applyMatrix4(t),this.setXYZ(i,In.x,In.y,In.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)In.fromBufferAttribute(this,i),In.applyNormalMatrix(t),this.setXYZ(i,In.x,In.y,In.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)In.fromBufferAttribute(this,i),In.transformDirection(t),this.setXYZ(i,In.x,In.y,In.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Ii(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qe(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ii(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ii(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ii(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ii(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){fu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Dn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new hu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){fu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let iE=0;class zs extends jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=is(),this.name="",this.type="Material",this.blending=Hr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_h,this.blendDst=vh,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){le(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(s.blending=this.blending),this.side!==as&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==_h&&(s.blendSrc=this.blendSrc),this.blendDst!==vh&&(s.blendDst=this.blendDst),this.blendEquation!==Ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==C_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class $v extends zs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ur;const qo=new st,Nr=new st,Lr=new st,Or=new be,jo=new be,tx=new Ke,Lc=new st,Yo=new st,Oc=new st,V_=new be,nh=new be,k_=new be;class aE extends An{constructor(t=new $v){if(super(),this.isSprite=!0,this.type="Sprite",Ur===void 0){Ur=new Ln;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new nE(i,5);Ur.setIndex([0,1,2,0,2,3]),Ur.setAttribute("position",new hu(s,3,0,!1)),Ur.setAttribute("uv",new hu(s,2,3,!1))}this.geometry=Ur,this.material=t,this.center=new be(.5,.5),this.count=1}raycast(t,i){t.camera===null&&Ne('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Nr.setFromMatrixScale(this.matrixWorld),tx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Lr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Nr.multiplyScalar(-Lr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const d=this.center;Pc(Lc.set(-.5,-.5,0),Lr,d,Nr,l,c),Pc(Yo.set(.5,-.5,0),Lr,d,Nr,l,c),Pc(Oc.set(.5,.5,0),Lr,d,Nr,l,c),V_.set(0,0),nh.set(1,0),k_.set(1,1);let p=t.ray.intersectTriangle(Lc,Yo,Oc,!1,qo);if(p===null&&(Pc(Yo.set(-.5,.5,0),Lr,d,Nr,l,c),nh.set(0,1),p=t.ray.intersectTriangle(Lc,Oc,Yo,!1,qo),p===null))return;const m=t.ray.origin.distanceTo(qo);m<t.near||m>t.far||i.push({distance:m,point:qo.clone(),uv:vi.getInterpolation(qo,Lc,Yo,Oc,V_,nh,k_,new be),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Pc(o,t,i,s,l,c){Or.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?(jo.x=c*Or.x-l*Or.y,jo.y=l*Or.x+c*Or.y):jo.copy(Or),o.copy(t),o.x+=jo.x,o.y+=jo.y,o.applyMatrix4(tx)}const ga=new st,ih=new st,Fc=new st,$a=new st,ah=new st,zc=new st,sh=new st;class Tp{constructor(t=new st,i=new st(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ga)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ga.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){ih.copy(t).add(i).multiplyScalar(.5),Fc.copy(i).sub(t).normalize(),$a.copy(this.origin).sub(ih);const c=t.distanceTo(i)*.5,d=-this.direction.dot(Fc),p=$a.dot(this.direction),m=-$a.dot(Fc),h=$a.lengthSq(),v=Math.abs(1-d*d);let y,g,M,b;if(v>0)if(y=d*m-p,g=d*p-m,b=c*v,y>=0)if(g>=-b)if(g<=b){const w=1/v;y*=w,g*=w,M=y*(y+d*g+2*p)+g*(d*y+g+2*m)+h}else g=c,y=Math.max(0,-(d*g+p)),M=-y*y+g*(g+2*m)+h;else g=-c,y=Math.max(0,-(d*g+p)),M=-y*y+g*(g+2*m)+h;else g<=-b?(y=Math.max(0,-(-d*c+p)),g=y>0?-c:Math.min(Math.max(-c,-m),c),M=-y*y+g*(g+2*m)+h):g<=b?(y=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+h):(y=Math.max(0,-(d*c+p)),g=y>0?c:Math.min(Math.max(-c,-m),c),M=-y*y+g*(g+2*m)+h);else g=d>0?-c:c,y=Math.max(0,-(d*g+p)),M=-y*y+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(ih).addScaledVector(Fc,g),M}intersectSphere(t,i){ga.subVectors(t.center,this.origin);const s=ga.dot(this.direction),l=ga.dot(ga)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,p,m;const h=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,g=this.origin;return h>=0?(s=(t.min.x-g.x)*h,l=(t.max.x-g.x)*h):(s=(t.max.x-g.x)*h,l=(t.min.x-g.x)*h),v>=0?(c=(t.min.y-g.y)*v,d=(t.max.y-g.y)*v):(c=(t.max.y-g.y)*v,d=(t.min.y-g.y)*v),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),y>=0?(p=(t.min.z-g.z)*y,m=(t.max.z-g.z)*y):(p=(t.max.z-g.z)*y,m=(t.min.z-g.z)*y),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ga)!==null}intersectTriangle(t,i,s,l,c){ah.subVectors(i,t),zc.subVectors(s,t),sh.crossVectors(ah,zc);let d=this.direction.dot(sh),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;$a.subVectors(this.origin,t);const m=p*this.direction.dot(zc.crossVectors($a,zc));if(m<0)return null;const h=p*this.direction.dot(ah.cross($a));if(h<0||m+h>d)return null;const v=-p*$a.dot(sh);return v<0?null:this.at(v/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ap extends zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ma,this.combine=Nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const X_=new Ke,Rs=new Tp,Bc=new ol,W_=new st,Ic=new st,Hc=new st,Gc=new st,rh=new st,Vc=new st,q_=new st,kc=new st;class Wi extends An{constructor(t=new Ln,i=new Ap){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Vc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const v=p[m],y=c[m];v!==0&&(rh.fromBufferAttribute(y,t),d?Vc.addScaledVector(rh,v):Vc.addScaledVector(rh.sub(i),v))}i.add(Vc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(c),Rs.copy(t.ray).recast(t.near),!(Bc.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Bc,W_)===null||Rs.origin.distanceToSquared(W_)>(t.far-t.near)**2))&&(X_.copy(c).invert(),Rs.copy(t.ray).applyMatrix4(X_),!(s.boundingBox!==null&&Rs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Rs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,v=c.attributes.uv1,y=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(d))for(let b=0,w=g.length;b<w;b++){const x=g[b],_=d[x.materialIndex],A=Math.max(x.start,M.start),U=Math.min(p.count,Math.min(x.start+x.count,M.start+M.count));for(let D=A,I=U;D<I;D+=3){const B=p.getX(D),F=p.getX(D+1),T=p.getX(D+2);l=Xc(this,_,t,s,h,v,y,B,F,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let x=b,_=w;x<_;x+=3){const A=p.getX(x),U=p.getX(x+1),D=p.getX(x+2);l=Xc(this,d,t,s,h,v,y,A,U,D),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,w=g.length;b<w;b++){const x=g[b],_=d[x.materialIndex],A=Math.max(x.start,M.start),U=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let D=A,I=U;D<I;D+=3){const B=D,F=D+1,T=D+2;l=Xc(this,_,t,s,h,v,y,B,F,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let x=b,_=w;x<_;x+=3){const A=x,U=x+1,D=x+2;l=Xc(this,d,t,s,h,v,y,A,U,D),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function sE(o,t,i,s,l,c,d,p){let m;if(t.side===jn?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,t.side===as,p),m===null)return null;kc.copy(p),kc.applyMatrix4(o.matrixWorld);const h=i.ray.origin.distanceTo(kc);return h<i.near||h>i.far?null:{distance:h,point:kc.clone(),object:o}}function Xc(o,t,i,s,l,c,d,p,m,h){o.getVertexPosition(p,Ic),o.getVertexPosition(m,Hc),o.getVertexPosition(h,Gc);const v=sE(o,t,i,s,Ic,Hc,Gc,q_);if(v){const y=new st;vi.getBarycoord(q_,Ic,Hc,Gc,y),l&&(v.uv=vi.getInterpolatedAttribute(l,p,m,h,y,new be)),c&&(v.uv1=vi.getInterpolatedAttribute(c,p,m,h,y,new be)),d&&(v.normal=vi.getInterpolatedAttribute(d,p,m,h,y,new st),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new st,materialIndex:0};vi.getNormal(Ic,Hc,Gc,g.normal),v.face=g,v.barycoord=y}return v}class rE extends Nn{constructor(t=null,i=1,s=1,l,c,d,p,m,h=Tn,v=Tn,y,g){super(null,d,p,m,h,v,l,c,y,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const oh=new st,oE=new st,lE=new xe;class Us{constructor(t=new st(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=oh.subVectors(s,i).cross(oE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(oh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||lE.getNormalMatrix(t),l=this.coplanarPoint(oh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new ol,cE=new be(.5,.5),Wc=new st;class Rp{constructor(t=new Us,i=new Us,s=new Us,l=new Us,c=new Us,d=new Us){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Gi,s=!1){const l=this.planes,c=t.elements,d=c[0],p=c[1],m=c[2],h=c[3],v=c[4],y=c[5],g=c[6],M=c[7],b=c[8],w=c[9],x=c[10],_=c[11],A=c[12],U=c[13],D=c[14],I=c[15];if(l[0].setComponents(h-d,M-v,_-b,I-A).normalize(),l[1].setComponents(h+d,M+v,_+b,I+A).normalize(),l[2].setComponents(h+p,M+y,_+w,I+U).normalize(),l[3].setComponents(h-p,M-y,_-w,I-U).normalize(),s)l[4].setComponents(m,g,x,D).normalize(),l[5].setComponents(h-m,M-g,_-x,I-D).normalize();else if(l[4].setComponents(h-m,M-g,_-x,I-D).normalize(),i===Gi)l[5].setComponents(h+m,M+g,_+x,I+D).normalize();else if(i===al)l[5].setComponents(m,g,x,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){Cs.center.set(0,0,0);const i=cE.distanceTo(t.center);return Cs.radius=.7071067811865476+i,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Wc.x=l.normal.x>0?t.max.x:t.min.x,Wc.y=l.normal.y>0?t.max.y:t.min.y,Wc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cp extends zs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const pu=new st,mu=new st,j_=new Ke,Zo=new Tp,qc=new ol,lh=new st,Y_=new st;class ex extends An{constructor(t=new Ln,i=new Cp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)pu.fromBufferAttribute(i,l-1),mu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=pu.distanceTo(mu);t.setAttribute("lineDistance",new oi(s,1))}else le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),qc.copy(s.boundingSphere),qc.applyMatrix4(l),qc.radius+=c,t.ray.intersectsSphere(qc)===!1)return;j_.copy(l).invert(),Zo.copy(t.ray).applyMatrix4(j_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const M=Math.max(0,d.start),b=Math.min(v.count,d.start+d.count);for(let w=M,x=b-1;w<x;w+=h){const _=v.getX(w),A=v.getX(w+1),U=jc(this,t,Zo,m,_,A,w);U&&i.push(U)}if(this.isLineLoop){const w=v.getX(b-1),x=v.getX(M),_=jc(this,t,Zo,m,w,x,b-1);_&&i.push(_)}}else{const M=Math.max(0,d.start),b=Math.min(g.count,d.start+d.count);for(let w=M,x=b-1;w<x;w+=h){const _=jc(this,t,Zo,m,w,w+1,w);_&&i.push(_)}if(this.isLineLoop){const w=jc(this,t,Zo,m,b-1,M,b-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function jc(o,t,i,s,l,c,d){const p=o.geometry.attributes.position;if(pu.fromBufferAttribute(p,l),mu.fromBufferAttribute(p,c),i.distanceSqToSegment(pu,mu,lh,Y_)>s)return;lh.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(lh);if(!(h<t.near||h>t.far))return{distance:h,point:Y_.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const Z_=new st,K_=new st;class uE extends ex{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Z_.fromBufferAttribute(i,l),K_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Z_.distanceTo(K_);t.setAttribute("lineDistance",new oi(s,1))}else le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lp extends zs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Q_=new Ke,cp=new Tp,Yc=new ol,Zc=new st;class J_ extends An{constructor(t=new Ln,i=new lp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Yc.copy(s.boundingSphere),Yc.applyMatrix4(l),Yc.radius+=c,t.ray.intersectsSphere(Yc)===!1)return;Q_.copy(l).invert(),cp.copy(t.ray).applyMatrix4(Q_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=s.index,y=s.attributes.position;if(h!==null){const g=Math.max(0,d.start),M=Math.min(h.count,d.start+d.count);for(let b=g,w=M;b<w;b++){const x=h.getX(b);Zc.fromBufferAttribute(y,x),$_(Zc,x,m,l,t,i,this)}}else{const g=Math.max(0,d.start),M=Math.min(y.count,d.start+d.count);for(let b=g,w=M;b<w;b++)Zc.fromBufferAttribute(y,b),$_(Zc,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function $_(o,t,i,s,l,c,d){const p=cp.distanceSqToPoint(o);if(p<i){const m=new st;cp.closestPointToPoint(o,m),m.applyMatrix4(s);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class nx extends Nn{constructor(t=[],i=Fs,s,l,c,d,p,m,h,v){super(t,i,s,l,c,d,p,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fE extends Nn{constructor(t,i,s,l,c,d,p,m,h){super(t,i,s,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sl extends Nn{constructor(t,i,s=Xi,l,c,d,p=Tn,m=Tn,h,v=ya,y=1){if(v!==ya&&v!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:y};super(g,l,c,d,p,m,v,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ep(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class dE extends sl{constructor(t,i=Xi,s=Fs,l,c,d=Tn,p=Tn,m,h=ya){const v={width:t,height:t,depth:1},y=[v,v,v,v,v,v];super(t,t,i,s,l,c,d,p,m,h),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ix extends Nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ll extends Ln{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],v=[],y=[];let g=0,M=0;b("z","y","x",-1,-1,s,i,t,d,c,0),b("z","y","x",1,-1,s,i,-t,d,c,1),b("x","z","y",1,1,t,s,i,l,d,2),b("x","z","y",1,-1,t,s,-i,l,d,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new oi(h,3)),this.setAttribute("normal",new oi(v,3)),this.setAttribute("uv",new oi(y,2));function b(w,x,_,A,U,D,I,B,F,T,N){const pt=D/F,G=I/T,et=D/2,K=I/2,nt=B/2,$=F+1,L=T+1;let z=0,W=0;const it=new st;for(let vt=0;vt<L;vt++){const P=vt*G-K;for(let j=0;j<$;j++){const rt=j*pt-et;it[w]=rt*A,it[x]=P*U,it[_]=nt,h.push(it.x,it.y,it.z),it[w]=0,it[x]=0,it[_]=B>0?1:-1,v.push(it.x,it.y,it.z),y.push(j/F),y.push(1-vt/T),z+=1}}for(let vt=0;vt<T;vt++)for(let P=0;P<F;P++){const j=g+P+$*vt,rt=g+P+$*(vt+1),Mt=g+(P+1)+$*(vt+1),At=g+(P+1)+$*vt;m.push(j,rt,At),m.push(rt,Mt,At),W+=6}p.addGroup(M,W,N),M+=W,g+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class cl extends Ln{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,v=m+1,y=t/p,g=i/m,M=[],b=[],w=[],x=[];for(let _=0;_<v;_++){const A=_*g-d;for(let U=0;U<h;U++){const D=U*y-c;b.push(D,-A,0),w.push(0,0,1),x.push(U/p),x.push(1-_/m)}}for(let _=0;_<m;_++)for(let A=0;A<p;A++){const U=A+h*_,D=A+h*(_+1),I=A+1+h*(_+1),B=A+1+h*_;M.push(U,D,B),M.push(D,I,B)}this.setIndex(M),this.setAttribute("position",new oi(b,3)),this.setAttribute("normal",new oi(w,3)),this.setAttribute("uv",new oi(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cl(t.width,t.height,t.widthSegments,t.heightSegments)}}function qr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Hn(o){const t={};for(let i=0;i<o.length;i++){const s=qr(o[i]);for(const l in s)t[l]=s[l]}return t}function hE(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function ax(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const pE={clone:qr,merge:Hn};var mE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mE,this.fragmentShader=gE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qr(t.uniforms),this.uniformsGroups=hE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class _E extends qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vE extends zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xE extends zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class sx extends An{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const ch=new Ke,tv=new st,ev=new st;class SE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rp,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;tv.setFromMatrixPosition(t.matrixWorld),i.position.copy(tv),ev.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(ev),i.updateMatrixWorld(),ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ch,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===al||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ch)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Kc=new st,Qc=new Yr,Pi=new st;class rx extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Kc,Qc,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kc,Qc,Pi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Kc,Qc,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kc,Qc,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ts=new st,nv=new be,iv=new be;class si extends rx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=op*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return op*2*Math.atan(Math.tan(zd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,i){return this.getViewBounds(t,nv,iv),i.subVectors(iv,nv)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(zd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class yE extends SE{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0}}class ME extends sx{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new yE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class ox extends rx{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class EE extends sx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Pr=-90,Fr=1;class bE extends An{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(Pr,Fr,t,i);l.layers=this.layers,this.add(l);const c=new si(Pr,Fr,t,i);c.layers=this.layers,this.add(c);const d=new si(Pr,Fr,t,i);d.layers=this.layers,this.add(d);const p=new si(Pr,Fr,t,i);p.layers=this.layers,this.add(p);const m=new si(Pr,Fr,t,i);m.layers=this.layers,this.add(m);const h=new si(Pr,Fr,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(t===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===al)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,v]=this.children,y=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),x&&t.autoClear===!1&&t.clearDepth(),t.render(i,v),t.setRenderTarget(y,g,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class TE extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class AE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,le("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class RE extends uE{constructor(t=10,i=10,s=4473924,l=8947848){s=new ye(s),l=new ye(l);const c=i/2,d=t/i,p=t/2,m=[],h=[];for(let g=0,M=0,b=-p;g<=i;g++,b+=d){m.push(-p,0,b,p,0,b),m.push(b,0,-p,b,0,p);const w=g===c?s:l;w.toArray(h,M),M+=3,w.toArray(h,M),M+=3,w.toArray(h,M),M+=3,w.toArray(h,M),M+=3}const v=new Ln;v.setAttribute("position",new oi(m,3)),v.setAttribute("color",new oi(h,3));const y=new Cp({vertexColors:!0,toneMapped:!1});super(v,y),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function av(o,t,i,s){const l=CE(s);switch(i){case Xv:return o*t;case qv:return o*t/l.components*l.byteLength;case vp:return o*t/l.components*l.byteLength;case Xr:return o*t*2/l.components*l.byteLength;case xp:return o*t*2/l.components*l.byteLength;case Wv:return o*t*3/l.components*l.byteLength;case wi:return o*t*4/l.components*l.byteLength;case Sp:return o*t*4/l.components*l.byteLength;case nu:case iu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case au:case su:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case wh:case Uh:return Math.max(o,16)*Math.max(t,8)/4;case Ch:case Dh:return Math.max(o,8)*Math.max(t,8)/2;case Nh:case Lh:case Ph:case Fh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Oh:case zh:case Bh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Hh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Gh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Vh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case kh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case qh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case jh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Kh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Qh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Jh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case $h:case tp:case ep:return Math.ceil(o/4)*Math.ceil(t/4)*16;case np:case ip:return Math.ceil(o/4)*Math.ceil(t/4)*8;case ap:case sp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function CE(o){switch(o){case ri:case Hv:return{byteLength:1,components:1};case nl:case Gv:case Sa:return{byteLength:2,components:1};case gp:case _p:return{byteLength:2,components:4};case Xi:case mp:case Hi:return{byteLength:4,components:1};case Vv:case kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hp}}));typeof window<"u"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lx(){let o=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function wE(o){const t=new WeakMap;function i(p,m){const h=p.array,v=p.usage,y=h.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,h,v),p.onUploadCallback();let M;if(h instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=o.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=o.SHORT;else if(h instanceof Uint32Array)M=o.UNSIGNED_INT;else if(h instanceof Int32Array)M=o.INT;else if(h instanceof Int8Array)M=o.BYTE;else if(h instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:y}}function s(p,m,h){const v=m.array,y=m.updateRanges;if(o.bindBuffer(h,p),y.length===0)o.bufferSubData(h,0,v);else{y.sort((M,b)=>M.start-b.start);let g=0;for(let M=1;M<y.length;M++){const b=y[g],w=y[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++g,y[g]=w)}y.length=g+1;for(let M=0,b=y.length;M<b;M++){const w=y[M];o.bufferSubData(h,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(o.deleteBuffer(m.buffer),t.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=t.get(p);(!v||v.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var DE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UE=`#ifdef USE_ALPHAHASH
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
#endif`,NE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FE=`#ifdef USE_AOMAP
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
#endif`,zE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BE=`#ifdef USE_BATCHING
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
#endif`,IE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kE=`#ifdef USE_IRIDESCENCE
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
#endif`,XE=`#ifdef USE_BUMPMAP
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
#endif`,WE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,KE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,QE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,JE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$E=`#define PI 3.141592653589793
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
} // validated`,tb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eb=`vec3 transformedNormal = objectNormal;
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
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ab=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ob=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lb=`#ifdef USE_ENVMAP
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
#endif`,cb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
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
#endif`,fb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,db=`#ifdef USE_ENVMAP
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
#endif`,hb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_b=`#ifdef USE_GRADIENTMAP
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
}`,vb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yb=`uniform bool receiveShadow;
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
#endif`,Mb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rb=`PhysicalMaterial material;
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
#endif`,Cb=`uniform sampler2D dfgLUT;
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
}`,wb=`
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
#endif`,Db=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ub=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ib=`#if defined( USE_POINTS_UV )
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
#endif`,Hb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wb=`#ifdef USE_MORPHTARGETS
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
#endif`,qb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jb=`#ifdef USE_NORMALMAP
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
#endif`,$b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pT=`float getShadowMask() {
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
}`,mT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gT=`#ifdef USE_SKINNING
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
#endif`,_T=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vT=`#ifdef USE_SKINNING
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
#endif`,xT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ST=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ET=`#ifdef USE_TRANSMISSION
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
#endif`,bT=`#ifdef USE_TRANSMISSION
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
#endif`,TT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DT=`uniform sampler2D t2D;
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
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,LT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PT=`#include <common>
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
}`,FT=`#if DEPTH_PACKING == 3200
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
}`,zT=`#define DISTANCE
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
}`,BT=`#define DISTANCE
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
}`,IT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GT=`uniform float scale;
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
}`,VT=`uniform vec3 diffuse;
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
}`,kT=`#include <common>
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
}`,XT=`uniform vec3 diffuse;
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
}`,WT=`#define LAMBERT
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
}`,qT=`#define LAMBERT
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
}`,jT=`#define MATCAP
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
}`,YT=`#define MATCAP
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
}`,ZT=`#define NORMAL
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
}`,KT=`#define NORMAL
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
}`,QT=`#define PHONG
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
}`,JT=`#define PHONG
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
}`,$T=`#define STANDARD
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
}`,t1=`#define STANDARD
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
}`,e1=`#define TOON
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
}`,n1=`#define TOON
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
}`,i1=`uniform float size;
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
}`,a1=`uniform vec3 diffuse;
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
}`,s1=`#include <common>
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
}`,r1=`uniform vec3 color;
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
}`,o1=`uniform float rotation;
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
}`,l1=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:DE,alphahash_pars_fragment:UE,alphamap_fragment:NE,alphamap_pars_fragment:LE,alphatest_fragment:OE,alphatest_pars_fragment:PE,aomap_fragment:FE,aomap_pars_fragment:zE,batching_pars_vertex:BE,batching_vertex:IE,begin_vertex:HE,beginnormal_vertex:GE,bsdfs:VE,iridescence_fragment:kE,bumpmap_pars_fragment:XE,clipping_planes_fragment:WE,clipping_planes_pars_fragment:qE,clipping_planes_pars_vertex:jE,clipping_planes_vertex:YE,color_fragment:ZE,color_pars_fragment:KE,color_pars_vertex:QE,color_vertex:JE,common:$E,cube_uv_reflection_fragment:tb,defaultnormal_vertex:eb,displacementmap_pars_vertex:nb,displacementmap_vertex:ib,emissivemap_fragment:ab,emissivemap_pars_fragment:sb,colorspace_fragment:rb,colorspace_pars_fragment:ob,envmap_fragment:lb,envmap_common_pars_fragment:cb,envmap_pars_fragment:ub,envmap_pars_vertex:fb,envmap_physical_pars_fragment:Mb,envmap_vertex:db,fog_vertex:hb,fog_pars_vertex:pb,fog_fragment:mb,fog_pars_fragment:gb,gradientmap_pars_fragment:_b,lightmap_pars_fragment:vb,lights_lambert_fragment:xb,lights_lambert_pars_fragment:Sb,lights_pars_begin:yb,lights_toon_fragment:Eb,lights_toon_pars_fragment:bb,lights_phong_fragment:Tb,lights_phong_pars_fragment:Ab,lights_physical_fragment:Rb,lights_physical_pars_fragment:Cb,lights_fragment_begin:wb,lights_fragment_maps:Db,lights_fragment_end:Ub,logdepthbuf_fragment:Nb,logdepthbuf_pars_fragment:Lb,logdepthbuf_pars_vertex:Ob,logdepthbuf_vertex:Pb,map_fragment:Fb,map_pars_fragment:zb,map_particle_fragment:Bb,map_particle_pars_fragment:Ib,metalnessmap_fragment:Hb,metalnessmap_pars_fragment:Gb,morphinstance_vertex:Vb,morphcolor_vertex:kb,morphnormal_vertex:Xb,morphtarget_pars_vertex:Wb,morphtarget_vertex:qb,normal_fragment_begin:jb,normal_fragment_maps:Yb,normal_pars_fragment:Zb,normal_pars_vertex:Kb,normal_vertex:Qb,normalmap_pars_fragment:Jb,clearcoat_normal_fragment_begin:$b,clearcoat_normal_fragment_maps:tT,clearcoat_pars_fragment:eT,iridescence_pars_fragment:nT,opaque_fragment:iT,packing:aT,premultiplied_alpha_fragment:sT,project_vertex:rT,dithering_fragment:oT,dithering_pars_fragment:lT,roughnessmap_fragment:cT,roughnessmap_pars_fragment:uT,shadowmap_pars_fragment:fT,shadowmap_pars_vertex:dT,shadowmap_vertex:hT,shadowmask_pars_fragment:pT,skinbase_vertex:mT,skinning_pars_vertex:gT,skinning_vertex:_T,skinnormal_vertex:vT,specularmap_fragment:xT,specularmap_pars_fragment:ST,tonemapping_fragment:yT,tonemapping_pars_fragment:MT,transmission_fragment:ET,transmission_pars_fragment:bT,uv_pars_fragment:TT,uv_pars_vertex:AT,uv_vertex:RT,worldpos_vertex:CT,background_vert:wT,background_frag:DT,backgroundCube_vert:UT,backgroundCube_frag:NT,cube_vert:LT,cube_frag:OT,depth_vert:PT,depth_frag:FT,distance_vert:zT,distance_frag:BT,equirect_vert:IT,equirect_frag:HT,linedashed_vert:GT,linedashed_frag:VT,meshbasic_vert:kT,meshbasic_frag:XT,meshlambert_vert:WT,meshlambert_frag:qT,meshmatcap_vert:jT,meshmatcap_frag:YT,meshnormal_vert:ZT,meshnormal_frag:KT,meshphong_vert:QT,meshphong_frag:JT,meshphysical_vert:$T,meshphysical_frag:t1,meshtoon_vert:e1,meshtoon_frag:n1,points_vert:i1,points_frag:a1,shadow_vert:s1,shadow_frag:r1,sprite_vert:o1,sprite_frag:l1},It={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},zi={basic:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Hn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Hn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Hn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new ye(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Hn([It.points,It.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Hn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Hn([It.common,It.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Hn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Hn([It.sprite,It.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:Hn([It.common,It.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:Hn([It.lights,It.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};zi.physical={uniforms:Hn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const Jc={r:0,b:0,g:0},ws=new Ma,c1=new Ke;function u1(o,t,i,s,l,c){const d=new ye(0);let p=l===!0?0:1,m,h,v=null,y=0,g=null;function M(A){let U=A.isScene===!0?A.background:null;if(U&&U.isTexture){const D=A.backgroundBlurriness>0;U=t.get(U,D)}return U}function b(A){let U=!1;const D=M(A);D===null?x(d,p):D&&D.isColor&&(x(D,1),U=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||U)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(A,U){const D=M(U);D&&(D.isCubeTexture||D.mapping===gu)?(h===void 0&&(h=new Wi(new ll(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:qr(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,B,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ws.copy(U.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(c1.makeRotationFromEuler(ws)),h.material.toneMapped=Le.getTransfer(D.colorSpace)!==Ve,(v!==D||y!==D.version||g!==o.toneMapping)&&(h.material.needsUpdate=!0,v=D,y=D.version,g=o.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Wi(new cl(2,2),new qi({name:"BackgroundMaterial",uniforms:qr(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Le.getTransfer(D.colorSpace)!==Ve,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(v!==D||y!==D.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,v=D,y=D.version,g=o.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null))}function x(A,U){A.getRGB(Jc,ax(o)),i.buffers.color.setClear(Jc.r,Jc.g,Jc.b,U,c)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(A,U=1){d.set(A),p=U,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(A){p=A,x(d,p)},render:b,addToRenderList:w,dispose:_}}function f1(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(G,et,K,nt,$){let L=!1;const z=y(G,nt,K,et);c!==z&&(c=z,h(c.object)),L=M(G,nt,K,$),L&&b(G,nt,K,$),$!==null&&t.update($,o.ELEMENT_ARRAY_BUFFER),(L||d)&&(d=!1,D(G,et,K,nt),$!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function m(){return o.createVertexArray()}function h(G){return o.bindVertexArray(G)}function v(G){return o.deleteVertexArray(G)}function y(G,et,K,nt){const $=nt.wireframe===!0;let L=s[et.id];L===void 0&&(L={},s[et.id]=L);const z=G.isInstancedMesh===!0?G.id:0;let W=L[z];W===void 0&&(W={},L[z]=W);let it=W[K.id];it===void 0&&(it={},W[K.id]=it);let vt=it[$];return vt===void 0&&(vt=g(m()),it[$]=vt),vt}function g(G){const et=[],K=[],nt=[];for(let $=0;$<i;$++)et[$]=0,K[$]=0,nt[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:et,enabledAttributes:K,attributeDivisors:nt,object:G,attributes:{},index:null}}function M(G,et,K,nt){const $=c.attributes,L=et.attributes;let z=0;const W=K.getAttributes();for(const it in W)if(W[it].location>=0){const P=$[it];let j=L[it];if(j===void 0&&(it==="instanceMatrix"&&G.instanceMatrix&&(j=G.instanceMatrix),it==="instanceColor"&&G.instanceColor&&(j=G.instanceColor)),P===void 0||P.attribute!==j||j&&P.data!==j.data)return!0;z++}return c.attributesNum!==z||c.index!==nt}function b(G,et,K,nt){const $={},L=et.attributes;let z=0;const W=K.getAttributes();for(const it in W)if(W[it].location>=0){let P=L[it];P===void 0&&(it==="instanceMatrix"&&G.instanceMatrix&&(P=G.instanceMatrix),it==="instanceColor"&&G.instanceColor&&(P=G.instanceColor));const j={};j.attribute=P,P&&P.data&&(j.data=P.data),$[it]=j,z++}c.attributes=$,c.attributesNum=z,c.index=nt}function w(){const G=c.newAttributes;for(let et=0,K=G.length;et<K;et++)G[et]=0}function x(G){_(G,0)}function _(G,et){const K=c.newAttributes,nt=c.enabledAttributes,$=c.attributeDivisors;K[G]=1,nt[G]===0&&(o.enableVertexAttribArray(G),nt[G]=1),$[G]!==et&&(o.vertexAttribDivisor(G,et),$[G]=et)}function A(){const G=c.newAttributes,et=c.enabledAttributes;for(let K=0,nt=et.length;K<nt;K++)et[K]!==G[K]&&(o.disableVertexAttribArray(K),et[K]=0)}function U(G,et,K,nt,$,L,z){z===!0?o.vertexAttribIPointer(G,et,K,$,L):o.vertexAttribPointer(G,et,K,nt,$,L)}function D(G,et,K,nt){w();const $=nt.attributes,L=K.getAttributes(),z=et.defaultAttributeValues;for(const W in L){const it=L[W];if(it.location>=0){let vt=$[W];if(vt===void 0&&(W==="instanceMatrix"&&G.instanceMatrix&&(vt=G.instanceMatrix),W==="instanceColor"&&G.instanceColor&&(vt=G.instanceColor)),vt!==void 0){const P=vt.normalized,j=vt.itemSize,rt=t.get(vt);if(rt===void 0)continue;const Mt=rt.buffer,At=rt.type,J=rt.bytesPerElement,H=At===o.INT||At===o.UNSIGNED_INT||vt.gpuType===mp;if(vt.isInterleavedBufferAttribute){const ft=vt.data,Et=ft.stride,Nt=vt.offset;if(ft.isInstancedInterleavedBuffer){for(let Dt=0;Dt<it.locationSize;Dt++)_(it.location+Dt,ft.meshPerAttribute);G.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Dt=0;Dt<it.locationSize;Dt++)x(it.location+Dt);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let Dt=0;Dt<it.locationSize;Dt++)U(it.location+Dt,j/it.locationSize,At,P,Et*J,(Nt+j/it.locationSize*Dt)*J,H)}else{if(vt.isInstancedBufferAttribute){for(let ft=0;ft<it.locationSize;ft++)_(it.location+ft,vt.meshPerAttribute);G.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ft=0;ft<it.locationSize;ft++)x(it.location+ft);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let ft=0;ft<it.locationSize;ft++)U(it.location+ft,j/it.locationSize,At,P,j*J,j/it.locationSize*ft*J,H)}}else if(z!==void 0){const P=z[W];if(P!==void 0)switch(P.length){case 2:o.vertexAttrib2fv(it.location,P);break;case 3:o.vertexAttrib3fv(it.location,P);break;case 4:o.vertexAttrib4fv(it.location,P);break;default:o.vertexAttrib1fv(it.location,P)}}}}A()}function I(){N();for(const G in s){const et=s[G];for(const K in et){const nt=et[K];for(const $ in nt){const L=nt[$];for(const z in L)v(L[z].object),delete L[z];delete nt[$]}}delete s[G]}}function B(G){if(s[G.id]===void 0)return;const et=s[G.id];for(const K in et){const nt=et[K];for(const $ in nt){const L=nt[$];for(const z in L)v(L[z].object),delete L[z];delete nt[$]}}delete s[G.id]}function F(G){for(const et in s){const K=s[et];for(const nt in K){const $=K[nt];if($[G.id]===void 0)continue;const L=$[G.id];for(const z in L)v(L[z].object),delete L[z];delete $[G.id]}}}function T(G){for(const et in s){const K=s[et],nt=G.isInstancedMesh===!0?G.id:0,$=K[nt];if($!==void 0){for(const L in $){const z=$[L];for(const W in z)v(z[W].object),delete z[W];delete $[L]}delete K[nt],Object.keys(K).length===0&&delete s[et]}}}function N(){pt(),d=!0,c!==l&&(c=l,h(c.object))}function pt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:N,resetDefaultState:pt,dispose:I,releaseStatesOfGeometry:B,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:x,disableUnusedAttributes:A}}function d1(o,t,i){let s;function l(h){s=h}function c(h,v){o.drawArrays(s,h,v),i.update(v,s,1)}function d(h,v,y){y!==0&&(o.drawArraysInstanced(s,h,v,y),i.update(v,s,y))}function p(h,v,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,v,0,y);let M=0;for(let b=0;b<y;b++)M+=v[b];i.update(M,s,1)}function m(h,v,y,g){if(y===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<h.length;b++)d(h[b],v[b],g[b]);else{M.multiDrawArraysInstancedWEBGL(s,h,0,v,0,g,0,y);let b=0;for(let w=0;w<y;w++)b+=v[w]*g[w];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function h1(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==wi&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(F){const T=F===Sa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==ri&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Hi&&!T)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const v=m(h);v!==h&&(le("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const y=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),A=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=o.getParameter(o.MAX_SAMPLES),B=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:A,maxVaryings:U,maxFragmentUniforms:D,maxSamples:I,samples:B}}function p1(o){const t=this;let i=null,s=0,l=!1,c=!1;const d=new Us,p=new xe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const M=y.length!==0||g||s!==0||l;return l=g,s=y.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,g){i=v(y,g,0)},this.setState=function(y,g,M){const b=y.clippingPlanes,w=y.clipIntersection,x=y.clipShadows,_=o.get(y);if(!l||b===null||b.length===0||c&&!x)c?v(null):h();else{const A=c?0:s,U=A*4;let D=_.clippingState||null;m.value=D,D=v(b,g,U,M);for(let I=0;I!==U;++I)D[I]=i[I];_.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=A}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(y,g,M,b){const w=y!==null?y.length:0;let x=null;if(w!==0){if(x=m.value,b!==!0||x===null){const _=M+w*4,A=g.matrixWorldInverse;p.getNormalMatrix(A),(x===null||x.length<_)&&(x=new Float32Array(_));for(let U=0,D=M;U!==w;++U,D+=4)d.copy(y[U]).applyMatrix4(A,p),d.normal.toArray(x,D),x[D+3]=d.constant}m.value=x,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,x}}const ns=4,sv=[.125,.215,.35,.446,.526,.582],Ls=20,m1=256,Ko=new ox,rv=new ye;let uh=null,fh=0,dh=0,hh=!1;const g1=new st;class ov{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=g1}=c;uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(uh,fh,dh),this._renderer.xr.enabled=hh,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Fs||t.mapping===kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Sa,format:wi,colorSpace:Wr,depthBuffer:!1},l=lv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_1(c)),this._blurMaterial=x1(c,t,i),this._ggxMaterial=v1(c,t,i)}return l}_compileMaterial(t){const i=new Wi(new Ln,t);this._renderer.compile(i,Ko)}_sceneToCubeUV(t,i,s,l,c){const m=new si(90,1,i,s),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,M=y.toneMapping;y.getClearColor(rv),y.toneMapping=Vi,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(l),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wi(new ll,new Ap({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,x=w.material;let _=!1;const A=t.background;A?A.isColor&&(x.color.copy(A),t.background=null,_=!0):(x.color.copy(rv),_=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(m.up.set(0,h[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[U],c.y,c.z)):D===1?(m.up.set(0,0,h[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[U],c.z)):(m.up.set(0,h[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[U]));const I=this._cubeSize;zr(l,D*I,U>2?I:0,I,I),y.setRenderTarget(l),_&&y.render(w,m),y.render(t,m)}y.toneMapping=M,y.autoClear=g,t.background=A}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Fs||t.mapping===kr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=uv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;zr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Ko)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),y=Math.sqrt(h*h-v*v),g=0+h*1.25,M=y*g,{_lodMax:b}=this,w=this._sizeLods[s],x=3*w*(s>b-ns?s-b+ns:0),_=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,zr(c,x,_,3*w,2*w),l.setRenderTarget(c),l.render(p,Ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,zr(t,x,_,3*w,2*w),l.setRenderTarget(t),l.render(p,Ko)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ne("blur direction must be either latitudinal or longitudinal!");const v=3,y=this._lodMeshes[l];y.material=h;const g=h.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ls-1),w=c/b,x=isFinite(c)?1+Math.floor(v*w):Ls;x>Ls&&le(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ls}`);const _=[];let A=0;for(let F=0;F<Ls;++F){const T=F/w,N=Math.exp(-T*T/2);_.push(N),F===0?A+=N:F<x&&(A+=2*N)}for(let F=0;F<_.length;F++)_[F]=_[F]/A;g.envMap.value=t.texture,g.samples.value=x,g.weights.value=_,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:U}=this;g.dTheta.value=b,g.mipInt.value=U-s;const D=this._sizeLods[l],I=3*D*(l>U-ns?l-U+ns:0),B=4*(this._cubeSize-D);zr(i,I,B,3*D,2*D),m.setRenderTarget(i),m.render(y,Ko)}}function _1(o){const t=[],i=[],s=[];let l=o;const c=o-ns+1+sv.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);t.push(p);let m=1/p;d>o-ns?m=sv[d-o+ns-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),v=-h,y=1+h,g=[v,v,y,v,y,y,v,v,y,y,v,y],M=6,b=6,w=3,x=2,_=1,A=new Float32Array(w*b*M),U=new Float32Array(x*b*M),D=new Float32Array(_*b*M);for(let B=0;B<M;B++){const F=B%3*2/3-1,T=B>2?0:-1,N=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];A.set(N,w*b*B),U.set(g,x*b*B);const pt=[B,B,B,B,B,B];D.set(pt,_*b*B)}const I=new Ln;I.setAttribute("position",new Dn(A,w)),I.setAttribute("uv",new Dn(U,x)),I.setAttribute("faceIndex",new Dn(D,_)),s.push(new Wi(I,null)),l>ns&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function lv(o,t,i){const s=new ki(o,t,i);return s.texture.mapping=gu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function zr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function v1(o,t,i){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:m1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_u(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function x1(o,t,i){const s=new Float32Array(Ls),l=new st(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:_u(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function cv(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function uv(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function _u(){return`

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
	`}class cx extends ki{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new nx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ll(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:qr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:va});c.uniforms.tEquirect.value=i;const d=new Wi(l,c),p=i.minFilter;return i.minFilter===Os&&(i.minFilter=Un),new bE(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}function S1(o){let t=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?d(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Od||M===Pd)if(t.has(g)){const b=t.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const w=new cx(b.height);return w.fromEquirectangularTexture(o,g),t.set(g,w),g.addEventListener("dispose",h),p(w.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const M=g.mapping,b=M===Od||M===Pd,w=M===Fs||M===kr;if(b||w){let x=i.get(g);const _=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return s===null&&(s=new ov(o)),x=b?s.fromEquirectangular(g,x):s.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,i.set(g,x),x.texture;if(x!==void 0)return x.texture;{const A=g.image;return b&&A&&A.height>0||w&&A&&m(A)?(s===null&&(s=new ov(o)),x=b?s.fromEquirectangular(g):s.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,i.set(g,x),g.addEventListener("dispose",v),x.texture):null}}}return g}function p(g,M){return M===Od?g.mapping=Fs:M===Pd&&(g.mapping=kr),g}function m(g){let M=0;const b=6;for(let w=0;w<b;w++)g[w]!==void 0&&M++;return M===b}function h(g){const M=g.target;M.removeEventListener("dispose",h);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function y(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:y}}function y1(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&du("WebGLRenderer: "+s+" extension not supported."),l}}}function M1(o,t,i,s){const l={},c=new WeakMap;function d(y){const g=y.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",d),delete l[g.id];const M=c.get(g);M&&(t.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(y,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(y){const g=y.attributes;for(const M in g)t.update(g[M],o.ARRAY_BUFFER)}function h(y){const g=[],M=y.index,b=y.attributes.position;let w=0;if(b===void 0)return;if(M!==null){const A=M.array;w=M.version;for(let U=0,D=A.length;U<D;U+=3){const I=A[U+0],B=A[U+1],F=A[U+2];g.push(I,B,B,F,F,I)}}else{const A=b.array;w=b.version;for(let U=0,D=A.length/3-1;U<D;U+=3){const I=U+0,B=U+1,F=U+2;g.push(I,B,B,F,F,I)}}const x=new(b.count>=65535?Jv:Qv)(g,1);x.version=w;const _=c.get(y);_&&t.remove(_),c.set(y,x)}function v(y){const g=c.get(y);if(g){const M=y.index;M!==null&&g.version<M.version&&h(y)}else h(y);return c.get(y)}return{get:p,update:m,getWireframeAttribute:v}}function E1(o,t,i){let s;function l(g){s=g}let c,d;function p(g){c=g.type,d=g.bytesPerElement}function m(g,M){o.drawElements(s,M,c,g*d),i.update(M,s,1)}function h(g,M,b){b!==0&&(o.drawElementsInstanced(s,M,c,g*d,b),i.update(M,s,b))}function v(g,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,g,0,b);let x=0;for(let _=0;_<b;_++)x+=M[_];i.update(x,s,1)}function y(g,M,b,w){if(b===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<g.length;_++)h(g[_]/d,M[_],w[_]);else{x.multiDrawElementsInstancedWEBGL(s,M,0,c,g,0,w,0,b);let _=0;for(let A=0;A<b;A++)_+=M[A]*w[A];i.update(_,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function b1(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:Ne("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function T1(o,t,i){const s=new WeakMap,l=new nn;function c(d,p,m){const h=d.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,y=v!==void 0?v.length:0;let g=s.get(p);if(g===void 0||g.count!==y){let pt=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",pt)};var M=pt;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,x=p.morphAttributes.color!==void 0,_=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],U=p.morphAttributes.color||[];let D=0;b===!0&&(D=1),w===!0&&(D=2),x===!0&&(D=3);let I=p.attributes.position.count*D,B=1;I>t.maxTextureSize&&(B=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const F=new Float32Array(I*B*4*y),T=new Yv(F,I,B,y);T.type=Hi,T.needsUpdate=!0;const N=D*4;for(let G=0;G<y;G++){const et=_[G],K=A[G],nt=U[G],$=I*B*4*G;for(let L=0;L<et.count;L++){const z=L*N;b===!0&&(l.fromBufferAttribute(et,L),F[$+z+0]=l.x,F[$+z+1]=l.y,F[$+z+2]=l.z,F[$+z+3]=0),w===!0&&(l.fromBufferAttribute(K,L),F[$+z+4]=l.x,F[$+z+5]=l.y,F[$+z+6]=l.z,F[$+z+7]=0),x===!0&&(l.fromBufferAttribute(nt,L),F[$+z+8]=l.x,F[$+z+9]=l.y,F[$+z+10]=l.z,F[$+z+11]=nt.itemSize===4?l.w:1)}}g={count:y,texture:T,size:new be(I,B)},s.set(p,g),p.addEventListener("dispose",pt)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let b=0;for(let x=0;x<h.length;x++)b+=h[x];const w=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",h)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function A1(o,t,i,s,l){let c=new WeakMap;function d(h){const v=l.render.frame,y=h.geometry,g=t.get(h,y);if(c.get(g)!==v&&(t.update(g),c.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==v&&(i.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,o.ARRAY_BUFFER),c.set(h,v))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==v&&(M.update(),c.set(M,v))}return g}function p(){c=new WeakMap}function m(h){const v=h.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:d,dispose:p}}const R1={[Lv]:"LINEAR_TONE_MAPPING",[Ov]:"REINHARD_TONE_MAPPING",[Pv]:"CINEON_TONE_MAPPING",[pp]:"ACES_FILMIC_TONE_MAPPING",[zv]:"AGX_TONE_MAPPING",[Bv]:"NEUTRAL_TONE_MAPPING",[Fv]:"CUSTOM_TONE_MAPPING"};function C1(o,t,i,s,l){const c=new ki(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),d=new ki(t,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),p=new Ln;p.setAttribute("position",new oi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new oi([0,2,0,0,2,0],2));const m=new _E({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Wi(p,m),v=new ox(-1,1,1,-1,0,1);let y=null,g=null,M=!1,b,w=null,x=[],_=!1;this.setSize=function(A,U){c.setSize(A,U),d.setSize(A,U);for(let D=0;D<x.length;D++){const I=x[D];I.setSize&&I.setSize(A,U)}},this.setEffects=function(A){x=A,_=x.length>0&&x[0].isRenderPass===!0;const U=c.width,D=c.height;for(let I=0;I<x.length;I++){const B=x[I];B.setSize&&B.setSize(U,D)}},this.begin=function(A,U){if(M||A.toneMapping===Vi&&x.length===0)return!1;if(w=U,U!==null){const D=U.width,I=U.height;(c.width!==D||c.height!==I)&&this.setSize(D,I)}return _===!1&&A.setRenderTarget(c),b=A.toneMapping,A.toneMapping=Vi,!0},this.hasRenderPass=function(){return _},this.end=function(A,U){A.toneMapping=b,M=!0;let D=c,I=d;for(let B=0;B<x.length;B++){const F=x[B];if(F.enabled!==!1&&(F.render(A,I,D,U),F.needsSwap!==!1)){const T=D;D=I,I=T}}if(y!==A.outputColorSpace||g!==A.toneMapping){y=A.outputColorSpace,g=A.toneMapping,m.defines={},Le.getTransfer(y)===Ve&&(m.defines.SRGB_TRANSFER="");const B=R1[g];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,A.setRenderTarget(w),A.render(h,v),w=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const ux=new Nn,up=new sl(1,1),fx=new Yv,dx=new XM,hx=new nx,fv=[],dv=[],hv=new Float32Array(16),pv=new Float32Array(9),mv=new Float32Array(4);function Zr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=fv[l];if(c===void 0&&(c=new Float32Array(l),fv[l]=c),t!==0){s.toArray(c,0);for(let d=1,p=0;d!==t;++d)p+=i,o[d].toArray(c,p)}return c}function _n(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function vn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function vu(o,t){let i=dv[t];i===void 0&&(i=new Int32Array(t),dv[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function w1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function D1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2fv(this.addr,t),vn(i,t)}}function U1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;o.uniform3fv(this.addr,t),vn(i,t)}}function N1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4fv(this.addr,t),vn(i,t)}}function L1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;mv.set(s),o.uniformMatrix2fv(this.addr,!1,mv),vn(i,s)}}function O1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;pv.set(s),o.uniformMatrix3fv(this.addr,!1,pv),vn(i,s)}}function P1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;hv.set(s),o.uniformMatrix4fv(this.addr,!1,hv),vn(i,s)}}function F1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function z1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2iv(this.addr,t),vn(i,t)}}function B1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;o.uniform3iv(this.addr,t),vn(i,t)}}function I1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4iv(this.addr,t),vn(i,t)}}function H1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function G1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2uiv(this.addr,t),vn(i,t)}}function V1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;o.uniform3uiv(this.addr,t),vn(i,t)}}function k1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4uiv(this.addr,t),vn(i,t)}}function X1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(up.compareFunction=i.isReversedDepthBuffer()?Mp:yp,c=up):c=ux,i.setTexture2D(t||c,l)}function W1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||dx,l)}function q1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||hx,l)}function j1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||fx,l)}function Y1(o){switch(o){case 5126:return w1;case 35664:return D1;case 35665:return U1;case 35666:return N1;case 35674:return L1;case 35675:return O1;case 35676:return P1;case 5124:case 35670:return F1;case 35667:case 35671:return z1;case 35668:case 35672:return B1;case 35669:case 35673:return I1;case 5125:return H1;case 36294:return G1;case 36295:return V1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return W1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return j1}}function Z1(o,t){o.uniform1fv(this.addr,t)}function K1(o,t){const i=Zr(t,this.size,2);o.uniform2fv(this.addr,i)}function Q1(o,t){const i=Zr(t,this.size,3);o.uniform3fv(this.addr,i)}function J1(o,t){const i=Zr(t,this.size,4);o.uniform4fv(this.addr,i)}function $1(o,t){const i=Zr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function tA(o,t){const i=Zr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function eA(o,t){const i=Zr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function nA(o,t){o.uniform1iv(this.addr,t)}function iA(o,t){o.uniform2iv(this.addr,t)}function aA(o,t){o.uniform3iv(this.addr,t)}function sA(o,t){o.uniform4iv(this.addr,t)}function rA(o,t){o.uniform1uiv(this.addr,t)}function oA(o,t){o.uniform2uiv(this.addr,t)}function lA(o,t){o.uniform3uiv(this.addr,t)}function cA(o,t){o.uniform4uiv(this.addr,t)}function uA(o,t,i){const s=this.cache,l=t.length,c=vu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=up:d=ux;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||d,c[p])}function fA(o,t,i){const s=this.cache,l=t.length,c=vu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||dx,c[d])}function dA(o,t,i){const s=this.cache,l=t.length,c=vu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||hx,c[d])}function hA(o,t,i){const s=this.cache,l=t.length,c=vu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||fx,c[d])}function pA(o){switch(o){case 5126:return Z1;case 35664:return K1;case 35665:return Q1;case 35666:return J1;case 35674:return $1;case 35675:return tA;case 35676:return eA;case 5124:case 35670:return nA;case 35667:case 35671:return iA;case 35668:case 35672:return aA;case 35669:case 35673:return sA;case 5125:return rA;case 36294:return oA;case 36295:return lA;case 36296:return cA;case 35678:case 36198:case 36298:case 36306:case 35682:return uA;case 35679:case 36299:case 36307:return fA;case 35680:case 36300:case 36308:case 36293:return dA;case 36289:case 36303:case 36311:case 36292:return hA}}class mA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Y1(i.type)}}class gA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=pA(i.type)}}class _A{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const ph=/(\w+)(\])?(\[|\.)?/g;function gv(o,t){o.seq.push(t),o.map[t.id]=t}function vA(o,t,i){const s=o.name,l=s.length;for(ph.lastIndex=0;;){const c=ph.exec(s),d=ph.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){gv(i,h===void 0?new mA(p,o,t):new gA(p,o,t));break}else{let y=i.map[p];y===void 0&&(y=new _A(p),gv(i,y)),i=y}}}class ru{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=t.getActiveUniform(i,d),m=t.getUniformLocation(i,p.name);vA(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function _v(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const xA=37297;let SA=0;function yA(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const vv=new xe;function MA(o){Le._getMatrix(vv,Le.workingColorSpace,o);const t=`mat3( ${vv.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case cu:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function xv(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+yA(o.getShaderSource(t),p)}else return c}function EA(o,t){const i=MA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const bA={[Lv]:"Linear",[Ov]:"Reinhard",[Pv]:"Cineon",[pp]:"ACESFilmic",[zv]:"AgX",[Bv]:"Neutral",[Fv]:"Custom"};function TA(o,t){const i=bA[t];return i===void 0?(le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const $c=new st;function AA(){Le.getLuminanceCoefficients($c);const o=$c.x.toFixed(4),t=$c.y.toFixed(4),i=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function CA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function wA(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),d=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:p}}return i}function el(o){return o!==""}function Sv(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function yv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const DA=/^[ \t]*#include +<([\w\d./]+)>/gm;function fp(o){return o.replace(DA,NA)}const UA=new Map;function NA(o,t){let i=Se[t];if(i===void 0){const s=UA.get(t);if(s!==void 0)i=Se[s],le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return fp(i)}const LA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mv(o){return o.replace(LA,OA)}function OA(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Ev(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const PA={[eu]:"SHADOWMAP_TYPE_PCF",[tl]:"SHADOWMAP_TYPE_VSM"};function FA(o){return PA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zA={[Fs]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE",[gu]:"ENVMAP_TYPE_CUBE_UV"};function BA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":zA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const IA={[kr]:"ENVMAP_MODE_REFRACTION"};function HA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":IA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GA={[Nv]:"ENVMAP_BLENDING_MULTIPLY",[MM]:"ENVMAP_BLENDING_MIX",[EM]:"ENVMAP_BLENDING_ADD"};function VA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":GA[o.combine]||"ENVMAP_BLENDING_NONE"}function kA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function XA(o,t,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=FA(i),h=BA(i),v=HA(i),y=VA(i),g=kA(i),M=RA(i),b=CA(c),w=l.createProgram();let x,_,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(el).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(el).join(`
`),_.length>0&&(_+=`
`)):(x=[Ev(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),_=[Ev(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+v:"",i.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?Se.tonemapping_pars_fragment:"",i.toneMapping!==Vi?TA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,EA("linearToOutputTexel",i.outputColorSpace),AA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(el).join(`
`)),d=fp(d),d=Sv(d,i),d=yv(d,i),p=fp(p),p=Sv(p,i),p=yv(p,i),d=Mv(d),p=Mv(p),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",i.glslVersion===w_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===w_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=A+x+d,D=A+_+p,I=_v(l,l.VERTEX_SHADER,U),B=_v(l,l.FRAGMENT_SHADER,D);l.attachShader(w,I),l.attachShader(w,B),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function F(G){if(o.debug.checkShaderErrors){const et=l.getProgramInfoLog(w)||"",K=l.getShaderInfoLog(I)||"",nt=l.getShaderInfoLog(B)||"",$=et.trim(),L=K.trim(),z=nt.trim();let W=!0,it=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,I,B);else{const vt=xv(l,I,"vertex"),P=xv(l,B,"fragment");Ne("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+$+`
`+vt+`
`+P)}else $!==""?le("WebGLProgram: Program Info Log:",$):(L===""||z==="")&&(it=!1);it&&(G.diagnostics={runnable:W,programLog:$,vertexShader:{log:L,prefix:x},fragmentShader:{log:z,prefix:_}})}l.deleteShader(I),l.deleteShader(B),T=new ru(l,w),N=wA(l,w)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let pt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return pt===!1&&(pt=l.getProgramParameter(w,xA)),pt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=SA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=B,this}let WA=0;class qA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new jA(t),i.set(t,s)),s}}class jA{constructor(t){this.id=WA++,this.code=t,this.usedTimes=0}}function YA(o,t,i,s,l,c){const d=new Zv,p=new qA,m=new Set,h=[],v=new Map,y=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,N,pt,G,et){const K=G.fog,nt=et.geometry,$=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,L=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,z=t.get(T.envMap||$,L),W=z&&z.mapping===gu?z.image.height:null,it=M[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&le("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const vt=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,P=vt!==void 0?vt.length:0;let j=0;nt.morphAttributes.position!==void 0&&(j=1),nt.morphAttributes.normal!==void 0&&(j=2),nt.morphAttributes.color!==void 0&&(j=3);let rt,Mt,At,J;if(it){const Ue=zi[it];rt=Ue.vertexShader,Mt=Ue.fragmentShader}else rt=T.vertexShader,Mt=T.fragmentShader,p.update(T),At=p.getVertexShaderID(T),J=p.getFragmentShaderID(T);const H=o.getRenderTarget(),ft=o.state.buffers.depth.getReversed(),Et=et.isInstancedMesh===!0,Nt=et.isBatchedMesh===!0,Dt=!!T.map,ie=!!T.matcap,Gt=!!z,Vt=!!T.aoMap,re=!!T.lightMap,jt=!!T.bumpMap,he=!!T.normalMap,k=!!T.displacementMap,Te=!!T.emissiveMap,me=!!T.metalnessMap,Ae=!!T.roughnessMap,Wt=T.anisotropy>0,O=T.clearcoat>0,E=T.dispersion>0,Q=T.iridescence>0,xt=T.sheen>0,Tt=T.transmission>0,mt=Wt&&!!T.anisotropyMap,Ft=O&&!!T.clearcoatMap,Lt=O&&!!T.clearcoatNormalMap,te=O&&!!T.clearcoatRoughnessMap,ee=Q&&!!T.iridescenceMap,Rt=Q&&!!T.iridescenceThicknessMap,Ct=xt&&!!T.sheenColorMap,Ht=xt&&!!T.sheenRoughnessMap,zt=!!T.specularMap,kt=!!T.specularColorMap,ge=!!T.specularIntensityMap,Z=Tt&&!!T.transmissionMap,Ot=Tt&&!!T.thicknessMap,Ut=!!T.gradientMap,Xt=!!T.alphaMap,wt=T.alphaTest>0,gt=!!T.alphaHash,Yt=!!T.extensions;let ce=Vi;T.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(ce=o.toneMapping);const Ie={shaderID:it,shaderType:T.type,shaderName:T.name,vertexShader:rt,fragmentShader:Mt,defines:T.defines,customVertexShaderID:At,customFragmentShaderID:J,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Nt,batchingColor:Nt&&et._colorsTexture!==null,instancing:Et,instancingColor:Et&&et.instanceColor!==null,instancingMorph:Et&&et.morphTexture!==null,outputColorSpace:H===null?o.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Wr,alphaToCoverage:!!T.alphaToCoverage,map:Dt,matcap:ie,envMap:Gt,envMapMode:Gt&&z.mapping,envMapCubeUVHeight:W,aoMap:Vt,lightMap:re,bumpMap:jt,normalMap:he,displacementMap:k,emissiveMap:Te,normalMapObjectSpace:he&&T.normalMapType===RM,normalMapTangentSpace:he&&T.normalMapType===AM,metalnessMap:me,roughnessMap:Ae,anisotropy:Wt,anisotropyMap:mt,clearcoat:O,clearcoatMap:Ft,clearcoatNormalMap:Lt,clearcoatRoughnessMap:te,dispersion:E,iridescence:Q,iridescenceMap:ee,iridescenceThicknessMap:Rt,sheen:xt,sheenColorMap:Ct,sheenRoughnessMap:Ht,specularMap:zt,specularColorMap:kt,specularIntensityMap:ge,transmission:Tt,transmissionMap:Z,thicknessMap:Ot,gradientMap:Ut,opaque:T.transparent===!1&&T.blending===Hr&&T.alphaToCoverage===!1,alphaMap:Xt,alphaTest:wt,alphaHash:gt,combine:T.combine,mapUv:Dt&&b(T.map.channel),aoMapUv:Vt&&b(T.aoMap.channel),lightMapUv:re&&b(T.lightMap.channel),bumpMapUv:jt&&b(T.bumpMap.channel),normalMapUv:he&&b(T.normalMap.channel),displacementMapUv:k&&b(T.displacementMap.channel),emissiveMapUv:Te&&b(T.emissiveMap.channel),metalnessMapUv:me&&b(T.metalnessMap.channel),roughnessMapUv:Ae&&b(T.roughnessMap.channel),anisotropyMapUv:mt&&b(T.anisotropyMap.channel),clearcoatMapUv:Ft&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&b(T.sheenRoughnessMap.channel),specularMapUv:zt&&b(T.specularMap.channel),specularColorMapUv:kt&&b(T.specularColorMap.channel),specularIntensityMapUv:ge&&b(T.specularIntensityMap.channel),transmissionMapUv:Z&&b(T.transmissionMap.channel),thicknessMapUv:Ot&&b(T.thicknessMap.channel),alphaMapUv:Xt&&b(T.alphaMap.channel),vertexTangents:!!nt.attributes.tangent&&(he||Wt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,pointsUvs:et.isPoints===!0&&!!nt.attributes.uv&&(Dt||Xt),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||nt.attributes.normal===void 0&&he===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:ft,skinning:et.isSkinnedMesh===!0,morphTargets:nt.morphAttributes.position!==void 0,morphNormals:nt.morphAttributes.normal!==void 0,morphColors:nt.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:j,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&pt.length>0,shadowMapType:o.shadowMap.type,toneMapping:ce,decodeVideoTexture:Dt&&T.map.isVideoTexture===!0&&Le.getTransfer(T.map.colorSpace)===Ve,decodeVideoTextureEmissive:Te&&T.emissiveMap.isVideoTexture===!0&&Le.getTransfer(T.emissiveMap.colorSpace)===Ve,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Bi,flipSided:T.side===jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Yt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&T.extensions.multiDraw===!0||Nt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ie.vertexUv1s=m.has(1),Ie.vertexUv2s=m.has(2),Ie.vertexUv3s=m.has(3),m.clear(),Ie}function x(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const pt in T.defines)N.push(pt),N.push(T.defines[pt]);return T.isRawShaderMaterial===!1&&(_(N,T),A(N,T),N.push(o.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function _(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function A(T,N){d.disableAll(),N.instancing&&d.enable(0),N.instancingColor&&d.enable(1),N.instancingMorph&&d.enable(2),N.matcap&&d.enable(3),N.envMap&&d.enable(4),N.normalMapObjectSpace&&d.enable(5),N.normalMapTangentSpace&&d.enable(6),N.clearcoat&&d.enable(7),N.iridescence&&d.enable(8),N.alphaTest&&d.enable(9),N.vertexColors&&d.enable(10),N.vertexAlphas&&d.enable(11),N.vertexUv1s&&d.enable(12),N.vertexUv2s&&d.enable(13),N.vertexUv3s&&d.enable(14),N.vertexTangents&&d.enable(15),N.anisotropy&&d.enable(16),N.alphaHash&&d.enable(17),N.batching&&d.enable(18),N.dispersion&&d.enable(19),N.batchingColor&&d.enable(20),N.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reversedDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),T.push(d.mask)}function U(T){const N=M[T.type];let pt;if(N){const G=zi[N];pt=pE.clone(G.uniforms)}else pt=T.uniforms;return pt}function D(T,N){let pt=v.get(N);return pt!==void 0?++pt.usedTimes:(pt=new XA(o,N,T,l),h.push(pt),v.set(N,pt)),pt}function I(T){if(--T.usedTimes===0){const N=h.indexOf(T);h[N]=h[h.length-1],h.pop(),v.delete(T.cacheKey),T.destroy()}}function B(T){p.remove(T)}function F(){p.dispose()}return{getParameters:w,getProgramCacheKey:x,getUniforms:U,acquireProgram:D,releaseProgram:I,releaseShaderCache:B,programs:h,dispose:F}}function ZA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function s(d){o.delete(d)}function l(d,p,m){o.get(d)[p]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function KA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function bv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Tv(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,b,w,x,_){let A=o[t];return A===void 0?(A={id:g.id,object:g,geometry:M,material:b,materialVariant:d(g),groupOrder:w,renderOrder:g.renderOrder,z:x,group:_},o[t]=A):(A.id=g.id,A.object=g,A.geometry=M,A.material=b,A.materialVariant=d(g),A.groupOrder=w,A.renderOrder=g.renderOrder,A.z=x,A.group=_),t++,A}function m(g,M,b,w,x,_){const A=p(g,M,b,w,x,_);b.transmission>0?s.push(A):b.transparent===!0?l.push(A):i.push(A)}function h(g,M,b,w,x,_){const A=p(g,M,b,w,x,_);b.transmission>0?s.unshift(A):b.transparent===!0?l.unshift(A):i.unshift(A)}function v(g,M){i.length>1&&i.sort(g||KA),s.length>1&&s.sort(M||bv),l.length>1&&l.sort(M||bv)}function y(){for(let g=t,M=o.length;g<M;g++){const b=o[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:y,sort:v}}function QA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let d;return c===void 0?(d=new Tv,o.set(s,[d])):l>=c.length?(d=new Tv,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function JA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new st,color:new ye};break;case"SpotLight":i={position:new st,direction:new st,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new st,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new st,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new st,halfWidth:new st,halfHeight:new st};break}return o[t.id]=i,i}}}function $A(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let tR=0;function eR(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function nR(o){const t=new JA,i=$A(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new st);const l=new st,c=new Ke,d=new Ke;function p(h){let v=0,y=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let M=0,b=0,w=0,x=0,_=0,A=0,U=0,D=0,I=0,B=0,F=0;h.sort(eR);for(let N=0,pt=h.length;N<pt;N++){const G=h[N],et=G.color,K=G.intensity,nt=G.distance;let $=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Xr?$=G.shadow.map.texture:$=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=et.r*K,y+=et.g*K,g+=et.b*K;else if(G.isLightProbe){for(let L=0;L<9;L++)s.probe[L].addScaledVector(G.sh.coefficients[L],K);F++}else if(G.isDirectionalLight){const L=t.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const z=G.shadow,W=i.get(G);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,s.directionalShadow[M]=W,s.directionalShadowMap[M]=$,s.directionalShadowMatrix[M]=G.shadow.matrix,A++}s.directional[M]=L,M++}else if(G.isSpotLight){const L=t.get(G);L.position.setFromMatrixPosition(G.matrixWorld),L.color.copy(et).multiplyScalar(K),L.distance=nt,L.coneCos=Math.cos(G.angle),L.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),L.decay=G.decay,s.spot[w]=L;const z=G.shadow;if(G.map&&(s.spotLightMap[I]=G.map,I++,z.updateMatrices(G),G.castShadow&&B++),s.spotLightMatrix[w]=z.matrix,G.castShadow){const W=i.get(G);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,s.spotShadow[w]=W,s.spotShadowMap[w]=$,D++}w++}else if(G.isRectAreaLight){const L=t.get(G);L.color.copy(et).multiplyScalar(K),L.halfWidth.set(G.width*.5,0,0),L.halfHeight.set(0,G.height*.5,0),s.rectArea[x]=L,x++}else if(G.isPointLight){const L=t.get(G);if(L.color.copy(G.color).multiplyScalar(G.intensity),L.distance=G.distance,L.decay=G.decay,G.castShadow){const z=G.shadow,W=i.get(G);W.shadowIntensity=z.intensity,W.shadowBias=z.bias,W.shadowNormalBias=z.normalBias,W.shadowRadius=z.radius,W.shadowMapSize=z.mapSize,W.shadowCameraNear=z.camera.near,W.shadowCameraFar=z.camera.far,s.pointShadow[b]=W,s.pointShadowMap[b]=$,s.pointShadowMatrix[b]=G.shadow.matrix,U++}s.point[b]=L,b++}else if(G.isHemisphereLight){const L=t.get(G);L.skyColor.copy(G.color).multiplyScalar(K),L.groundColor.copy(G.groundColor).multiplyScalar(K),s.hemi[_]=L,_++}}x>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=y,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==x||T.hemiLength!==_||T.numDirectionalShadows!==A||T.numPointShadows!==U||T.numSpotShadows!==D||T.numSpotMaps!==I||T.numLightProbes!==F)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=x,s.point.length=b,s.hemi.length=_,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=D+I-B,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=F,T.directionalLength=M,T.pointLength=b,T.spotLength=w,T.rectAreaLength=x,T.hemiLength=_,T.numDirectionalShadows=A,T.numPointShadows=U,T.numSpotShadows=D,T.numSpotMaps=I,T.numLightProbes=F,s.version=tR++)}function m(h,v){let y=0,g=0,M=0,b=0,w=0;const x=v.matrixWorldInverse;for(let _=0,A=h.length;_<A;_++){const U=h[_];if(U.isDirectionalLight){const D=s.directional[y];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),y++}else if(U.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),M++}else if(U.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(x),d.identity(),c.copy(U.matrixWorld),c.premultiply(x),d.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),b++}else if(U.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(x),g++}else if(U.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(x),w++}}}return{setup:p,setupView:m,state:s}}function Av(o){const t=new nR(o),i=[],s=[];function l(v){h.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function d(v){s.push(v)}function p(){t.setup(i)}function m(v){t.setupView(i,v)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function iR(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let p;return d===void 0?(p=new Av(o),t.set(l,[p])):c>=d.length?(p=new Av(o),d.push(p)):p=d[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const aR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sR=`uniform sampler2D shadow_pass;
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
}`,rR=[new st(1,0,0),new st(-1,0,0),new st(0,1,0),new st(0,-1,0),new st(0,0,1),new st(0,0,-1)],oR=[new st(0,-1,0),new st(0,-1,0),new st(0,0,1),new st(0,0,-1),new st(0,-1,0),new st(0,-1,0)],Rv=new Ke,Qo=new st,mh=new st;function lR(o,t,i){let s=new Rp;const l=new be,c=new be,d=new nn,p=new vE,m=new xE,h={},v=i.maxTextureSize,y={[as]:jn,[jn]:as,[Bi]:Bi},g=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:aR,fragmentShader:sR}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ln;b.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Wi(b,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eu;let _=this.type;this.render=function(B,F,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||B.length===0)return;this.type===iM&&(le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=eu);const N=o.getRenderTarget(),pt=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),et=o.state;et.setBlending(va),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const K=_!==this.type;K&&F.traverse(function(nt){nt.material&&(Array.isArray(nt.material)?nt.material.forEach($=>$.needsUpdate=!0):nt.material.needsUpdate=!0)});for(let nt=0,$=B.length;nt<$;nt++){const L=B[nt],z=L.shadow;if(z===void 0){le("WebGLShadowMap:",L,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const W=z.getFrameExtents();l.multiply(W),c.copy(z.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/W.x),l.x=c.x*W.x,z.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/W.y),l.y=c.y*W.y,z.mapSize.y=c.y));const it=o.state.buffers.depth.getReversed();if(z.camera._reversedDepth=it,z.map===null||K===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===tl){if(L.isPointLight){le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new ki(l.x,l.y,{format:Xr,type:Sa,minFilter:Un,magFilter:Un,generateMipmaps:!1}),z.map.texture.name=L.name+".shadowMap",z.map.depthTexture=new sl(l.x,l.y,Hi),z.map.depthTexture.name=L.name+".shadowMapDepth",z.map.depthTexture.format=ya,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Tn,z.map.depthTexture.magFilter=Tn}else L.isPointLight?(z.map=new cx(l.x),z.map.depthTexture=new dE(l.x,Xi)):(z.map=new ki(l.x,l.y),z.map.depthTexture=new sl(l.x,l.y,Xi)),z.map.depthTexture.name=L.name+".shadowMap",z.map.depthTexture.format=ya,this.type===eu?(z.map.depthTexture.compareFunction=it?Mp:yp,z.map.depthTexture.minFilter=Un,z.map.depthTexture.magFilter=Un):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Tn,z.map.depthTexture.magFilter=Tn);z.camera.updateProjectionMatrix()}const vt=z.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<vt;P++){if(z.map.isWebGLCubeRenderTarget)o.setRenderTarget(z.map,P),o.clear();else{P===0&&(o.setRenderTarget(z.map),o.clear());const j=z.getViewport(P);d.set(c.x*j.x,c.y*j.y,c.x*j.z,c.y*j.w),et.viewport(d)}if(L.isPointLight){const j=z.camera,rt=z.matrix,Mt=L.distance||j.far;Mt!==j.far&&(j.far=Mt,j.updateProjectionMatrix()),Qo.setFromMatrixPosition(L.matrixWorld),j.position.copy(Qo),mh.copy(j.position),mh.add(rR[P]),j.up.copy(oR[P]),j.lookAt(mh),j.updateMatrixWorld(),rt.makeTranslation(-Qo.x,-Qo.y,-Qo.z),Rv.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Rv,j.coordinateSystem,j.reversedDepth)}else z.updateMatrices(L);s=z.getFrustum(),D(F,T,z.camera,L,this.type)}z.isPointLightShadow!==!0&&this.type===tl&&A(z,T),z.needsUpdate=!1}_=this.type,x.needsUpdate=!1,o.setRenderTarget(N,pt,G)};function A(B,F){const T=t.update(w);g.defines.VSM_SAMPLES!==B.blurSamples&&(g.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ki(l.x,l.y,{format:Xr,type:Sa})),g.uniforms.shadow_pass.value=B.map.depthTexture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(F,null,T,g,w,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(F,null,T,M,w,null)}function U(B,F,T,N){let pt=null;const G=T.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(G!==void 0)pt=G;else if(pt=T.isPointLight===!0?m:p,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const et=pt.uuid,K=F.uuid;let nt=h[et];nt===void 0&&(nt={},h[et]=nt);let $=nt[K];$===void 0&&($=pt.clone(),nt[K]=$,F.addEventListener("dispose",I)),pt=$}if(pt.visible=F.visible,pt.wireframe=F.wireframe,N===tl?pt.side=F.shadowSide!==null?F.shadowSide:F.side:pt.side=F.shadowSide!==null?F.shadowSide:y[F.side],pt.alphaMap=F.alphaMap,pt.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,pt.map=F.map,pt.clipShadows=F.clipShadows,pt.clippingPlanes=F.clippingPlanes,pt.clipIntersection=F.clipIntersection,pt.displacementMap=F.displacementMap,pt.displacementScale=F.displacementScale,pt.displacementBias=F.displacementBias,pt.wireframeLinewidth=F.wireframeLinewidth,pt.linewidth=F.linewidth,T.isPointLight===!0&&pt.isMeshDistanceMaterial===!0){const et=o.properties.get(pt);et.light=T}return pt}function D(B,F,T,N,pt){if(B.visible===!1)return;if(B.layers.test(F.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&pt===tl)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,B.matrixWorld);const K=t.update(B),nt=B.material;if(Array.isArray(nt)){const $=K.groups;for(let L=0,z=$.length;L<z;L++){const W=$[L],it=nt[W.materialIndex];if(it&&it.visible){const vt=U(B,it,N,pt);B.onBeforeShadow(o,B,F,T,K,vt,W),o.renderBufferDirect(T,null,K,vt,B,W),B.onAfterShadow(o,B,F,T,K,vt,W)}}}else if(nt.visible){const $=U(B,nt,N,pt);B.onBeforeShadow(o,B,F,T,K,$,null),o.renderBufferDirect(T,null,K,$,B,null),B.onAfterShadow(o,B,F,T,K,$,null)}}const et=B.children;for(let K=0,nt=et.length;K<nt;K++)D(et[K],F,T,N,pt)}function I(B){B.target.removeEventListener("dispose",I);for(const T in h){const N=h[T],pt=B.target.uuid;pt in N&&(N[pt].dispose(),delete N[pt])}}}function cR(o,t){function i(){let Z=!1;const Ot=new nn;let Ut=null;const Xt=new nn(0,0,0,0);return{setMask:function(wt){Ut!==wt&&!Z&&(o.colorMask(wt,wt,wt,wt),Ut=wt)},setLocked:function(wt){Z=wt},setClear:function(wt,gt,Yt,ce,Ie){Ie===!0&&(wt*=ce,gt*=ce,Yt*=ce),Ot.set(wt,gt,Yt,ce),Xt.equals(Ot)===!1&&(o.clearColor(wt,gt,Yt,ce),Xt.copy(Ot))},reset:function(){Z=!1,Ut=null,Xt.set(-1,0,0,0)}}}function s(){let Z=!1,Ot=!1,Ut=null,Xt=null,wt=null;return{setReversed:function(gt){if(Ot!==gt){const Yt=t.get("EXT_clip_control");gt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Ot=gt;const ce=wt;wt=null,this.setClear(ce)}},getReversed:function(){return Ot},setTest:function(gt){gt?H(o.DEPTH_TEST):ft(o.DEPTH_TEST)},setMask:function(gt){Ut!==gt&&!Z&&(o.depthMask(gt),Ut=gt)},setFunc:function(gt){if(Ot&&(gt=zM[gt]),Xt!==gt){switch(gt){case xh:o.depthFunc(o.NEVER);break;case Sh:o.depthFunc(o.ALWAYS);break;case yh:o.depthFunc(o.LESS);break;case Vr:o.depthFunc(o.LEQUAL);break;case Mh:o.depthFunc(o.EQUAL);break;case Eh:o.depthFunc(o.GEQUAL);break;case bh:o.depthFunc(o.GREATER);break;case Th:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Xt=gt}},setLocked:function(gt){Z=gt},setClear:function(gt){wt!==gt&&(wt=gt,Ot&&(gt=1-gt),o.clearDepth(gt))},reset:function(){Z=!1,Ut=null,Xt=null,wt=null,Ot=!1}}}function l(){let Z=!1,Ot=null,Ut=null,Xt=null,wt=null,gt=null,Yt=null,ce=null,Ie=null;return{setTest:function(Ue){Z||(Ue?H(o.STENCIL_TEST):ft(o.STENCIL_TEST))},setMask:function(Ue){Ot!==Ue&&!Z&&(o.stencilMask(Ue),Ot=Ue)},setFunc:function(Ue,On,xi){(Ut!==Ue||Xt!==On||wt!==xi)&&(o.stencilFunc(Ue,On,xi),Ut=Ue,Xt=On,wt=xi)},setOp:function(Ue,On,xi){(gt!==Ue||Yt!==On||ce!==xi)&&(o.stencilOp(Ue,On,xi),gt=Ue,Yt=On,ce=xi)},setLocked:function(Ue){Z=Ue},setClear:function(Ue){Ie!==Ue&&(o.clearStencil(Ue),Ie=Ue)},reset:function(){Z=!1,Ot=null,Ut=null,Xt=null,wt=null,gt=null,Yt=null,ce=null,Ie=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let v={},y={},g=new WeakMap,M=[],b=null,w=!1,x=null,_=null,A=null,U=null,D=null,I=null,B=null,F=new ye(0,0,0),T=0,N=!1,pt=null,G=null,et=null,K=null,nt=null;const $=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,z=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(W)[1]),L=z>=1):W.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),L=z>=2);let it=null,vt={};const P=o.getParameter(o.SCISSOR_BOX),j=o.getParameter(o.VIEWPORT),rt=new nn().fromArray(P),Mt=new nn().fromArray(j);function At(Z,Ot,Ut,Xt){const wt=new Uint8Array(4),gt=o.createTexture();o.bindTexture(Z,gt),o.texParameteri(Z,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(Z,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Yt=0;Yt<Ut;Yt++)Z===o.TEXTURE_3D||Z===o.TEXTURE_2D_ARRAY?o.texImage3D(Ot,0,o.RGBA,1,1,Xt,0,o.RGBA,o.UNSIGNED_BYTE,wt):o.texImage2D(Ot+Yt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,wt);return gt}const J={};J[o.TEXTURE_2D]=At(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=At(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=At(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=At(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),H(o.DEPTH_TEST),d.setFunc(Vr),jt(!1),he(b_),H(o.CULL_FACE),Vt(va);function H(Z){v[Z]!==!0&&(o.enable(Z),v[Z]=!0)}function ft(Z){v[Z]!==!1&&(o.disable(Z),v[Z]=!1)}function Et(Z,Ot){return y[Z]!==Ot?(o.bindFramebuffer(Z,Ot),y[Z]=Ot,Z===o.DRAW_FRAMEBUFFER&&(y[o.FRAMEBUFFER]=Ot),Z===o.FRAMEBUFFER&&(y[o.DRAW_FRAMEBUFFER]=Ot),!0):!1}function Nt(Z,Ot){let Ut=M,Xt=!1;if(Z){Ut=g.get(Ot),Ut===void 0&&(Ut=[],g.set(Ot,Ut));const wt=Z.textures;if(Ut.length!==wt.length||Ut[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Yt=wt.length;gt<Yt;gt++)Ut[gt]=o.COLOR_ATTACHMENT0+gt;Ut.length=wt.length,Xt=!0}}else Ut[0]!==o.BACK&&(Ut[0]=o.BACK,Xt=!0);Xt&&o.drawBuffers(Ut)}function Dt(Z){return b!==Z?(o.useProgram(Z),b=Z,!0):!1}const ie={[Ns]:o.FUNC_ADD,[sM]:o.FUNC_SUBTRACT,[rM]:o.FUNC_REVERSE_SUBTRACT};ie[oM]=o.MIN,ie[lM]=o.MAX;const Gt={[cM]:o.ZERO,[uM]:o.ONE,[fM]:o.SRC_COLOR,[_h]:o.SRC_ALPHA,[_M]:o.SRC_ALPHA_SATURATE,[mM]:o.DST_COLOR,[hM]:o.DST_ALPHA,[dM]:o.ONE_MINUS_SRC_COLOR,[vh]:o.ONE_MINUS_SRC_ALPHA,[gM]:o.ONE_MINUS_DST_COLOR,[pM]:o.ONE_MINUS_DST_ALPHA,[vM]:o.CONSTANT_COLOR,[xM]:o.ONE_MINUS_CONSTANT_COLOR,[SM]:o.CONSTANT_ALPHA,[yM]:o.ONE_MINUS_CONSTANT_ALPHA};function Vt(Z,Ot,Ut,Xt,wt,gt,Yt,ce,Ie,Ue){if(Z===va){w===!0&&(ft(o.BLEND),w=!1);return}if(w===!1&&(H(o.BLEND),w=!0),Z!==aM){if(Z!==x||Ue!==N){if((_!==Ns||D!==Ns)&&(o.blendEquation(o.FUNC_ADD),_=Ns,D=Ns),Ue)switch(Z){case Hr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case T_:o.blendFunc(o.ONE,o.ONE);break;case A_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case R_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ne("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Hr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case T_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case A_:Ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case R_:Ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ne("WebGLState: Invalid blending: ",Z);break}A=null,U=null,I=null,B=null,F.set(0,0,0),T=0,x=Z,N=Ue}return}wt=wt||Ot,gt=gt||Ut,Yt=Yt||Xt,(Ot!==_||wt!==D)&&(o.blendEquationSeparate(ie[Ot],ie[wt]),_=Ot,D=wt),(Ut!==A||Xt!==U||gt!==I||Yt!==B)&&(o.blendFuncSeparate(Gt[Ut],Gt[Xt],Gt[gt],Gt[Yt]),A=Ut,U=Xt,I=gt,B=Yt),(ce.equals(F)===!1||Ie!==T)&&(o.blendColor(ce.r,ce.g,ce.b,Ie),F.copy(ce),T=Ie),x=Z,N=!1}function re(Z,Ot){Z.side===Bi?ft(o.CULL_FACE):H(o.CULL_FACE);let Ut=Z.side===jn;Ot&&(Ut=!Ut),jt(Ut),Z.blending===Hr&&Z.transparent===!1?Vt(va):Vt(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),d.setFunc(Z.depthFunc),d.setTest(Z.depthTest),d.setMask(Z.depthWrite),c.setMask(Z.colorWrite);const Xt=Z.stencilWrite;p.setTest(Xt),Xt&&(p.setMask(Z.stencilWriteMask),p.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),p.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Te(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?H(o.SAMPLE_ALPHA_TO_COVERAGE):ft(o.SAMPLE_ALPHA_TO_COVERAGE)}function jt(Z){pt!==Z&&(Z?o.frontFace(o.CW):o.frontFace(o.CCW),pt=Z)}function he(Z){Z!==eM?(H(o.CULL_FACE),Z!==G&&(Z===b_?o.cullFace(o.BACK):Z===nM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ft(o.CULL_FACE),G=Z}function k(Z){Z!==et&&(L&&o.lineWidth(Z),et=Z)}function Te(Z,Ot,Ut){Z?(H(o.POLYGON_OFFSET_FILL),(K!==Ot||nt!==Ut)&&(K=Ot,nt=Ut,d.getReversed()&&(Ot=-Ot),o.polygonOffset(Ot,Ut))):ft(o.POLYGON_OFFSET_FILL)}function me(Z){Z?H(o.SCISSOR_TEST):ft(o.SCISSOR_TEST)}function Ae(Z){Z===void 0&&(Z=o.TEXTURE0+$-1),it!==Z&&(o.activeTexture(Z),it=Z)}function Wt(Z,Ot,Ut){Ut===void 0&&(it===null?Ut=o.TEXTURE0+$-1:Ut=it);let Xt=vt[Ut];Xt===void 0&&(Xt={type:void 0,texture:void 0},vt[Ut]=Xt),(Xt.type!==Z||Xt.texture!==Ot)&&(it!==Ut&&(o.activeTexture(Ut),it=Ut),o.bindTexture(Z,Ot||J[Z]),Xt.type=Z,Xt.texture=Ot)}function O(){const Z=vt[it];Z!==void 0&&Z.type!==void 0&&(o.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function Q(){try{o.compressedTexImage3D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function xt(){try{o.texSubImage2D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function Tt(){try{o.texSubImage3D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function mt(){try{o.compressedTexSubImage2D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function Ft(){try{o.compressedTexSubImage3D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function Lt(){try{o.texStorage2D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function te(){try{o.texStorage3D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function ee(){try{o.texImage2D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function Rt(){try{o.texImage3D(...arguments)}catch(Z){Ne("WebGLState:",Z)}}function Ct(Z){rt.equals(Z)===!1&&(o.scissor(Z.x,Z.y,Z.z,Z.w),rt.copy(Z))}function Ht(Z){Mt.equals(Z)===!1&&(o.viewport(Z.x,Z.y,Z.z,Z.w),Mt.copy(Z))}function zt(Z,Ot){let Ut=h.get(Ot);Ut===void 0&&(Ut=new WeakMap,h.set(Ot,Ut));let Xt=Ut.get(Z);Xt===void 0&&(Xt=o.getUniformBlockIndex(Ot,Z.name),Ut.set(Z,Xt))}function kt(Z,Ot){const Xt=h.get(Ot).get(Z);m.get(Ot)!==Xt&&(o.uniformBlockBinding(Ot,Xt,Z.__bindingPointIndex),m.set(Ot,Xt))}function ge(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},it=null,vt={},y={},g=new WeakMap,M=[],b=null,w=!1,x=null,_=null,A=null,U=null,D=null,I=null,B=null,F=new ye(0,0,0),T=0,N=!1,pt=null,G=null,et=null,K=null,nt=null,rt.set(0,0,o.canvas.width,o.canvas.height),Mt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:H,disable:ft,bindFramebuffer:Et,drawBuffers:Nt,useProgram:Dt,setBlending:Vt,setMaterial:re,setFlipSided:jt,setCullFace:he,setLineWidth:k,setPolygonOffset:Te,setScissorTest:me,activeTexture:Ae,bindTexture:Wt,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:Q,texImage2D:ee,texImage3D:Rt,updateUBOMapping:zt,uniformBlockBinding:kt,texStorage2D:Lt,texStorage3D:te,texSubImage2D:xt,texSubImage3D:Tt,compressedTexSubImage2D:mt,compressedTexSubImage3D:Ft,scissor:Ct,viewport:Ht,reset:ge}}function uR(o,t,i,s,l,c,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new be,v=new WeakMap;let y;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,E){return M?new OffscreenCanvas(O,E):uu("canvas")}function w(O,E,Q){let xt=1;const Tt=Wt(O);if((Tt.width>Q||Tt.height>Q)&&(xt=Q/Math.max(Tt.width,Tt.height)),xt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const mt=Math.floor(xt*Tt.width),Ft=Math.floor(xt*Tt.height);y===void 0&&(y=b(mt,Ft));const Lt=E?b(mt,Ft):y;return Lt.width=mt,Lt.height=Ft,Lt.getContext("2d").drawImage(O,0,0,mt,Ft),le("WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+mt+"x"+Ft+")."),Lt}else return"data"in O&&le("WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),O;return O}function x(O){return O.generateMipmaps}function _(O){o.generateMipmap(O)}function A(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(O,E,Q,xt,Tt=!1){if(O!==null){if(o[O]!==void 0)return o[O];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let mt=E;if(E===o.RED&&(Q===o.FLOAT&&(mt=o.R32F),Q===o.HALF_FLOAT&&(mt=o.R16F),Q===o.UNSIGNED_BYTE&&(mt=o.R8)),E===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(mt=o.R8UI),Q===o.UNSIGNED_SHORT&&(mt=o.R16UI),Q===o.UNSIGNED_INT&&(mt=o.R32UI),Q===o.BYTE&&(mt=o.R8I),Q===o.SHORT&&(mt=o.R16I),Q===o.INT&&(mt=o.R32I)),E===o.RG&&(Q===o.FLOAT&&(mt=o.RG32F),Q===o.HALF_FLOAT&&(mt=o.RG16F),Q===o.UNSIGNED_BYTE&&(mt=o.RG8)),E===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(mt=o.RG8UI),Q===o.UNSIGNED_SHORT&&(mt=o.RG16UI),Q===o.UNSIGNED_INT&&(mt=o.RG32UI),Q===o.BYTE&&(mt=o.RG8I),Q===o.SHORT&&(mt=o.RG16I),Q===o.INT&&(mt=o.RG32I)),E===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(mt=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(mt=o.RGB16UI),Q===o.UNSIGNED_INT&&(mt=o.RGB32UI),Q===o.BYTE&&(mt=o.RGB8I),Q===o.SHORT&&(mt=o.RGB16I),Q===o.INT&&(mt=o.RGB32I)),E===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(mt=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(mt=o.RGBA16UI),Q===o.UNSIGNED_INT&&(mt=o.RGBA32UI),Q===o.BYTE&&(mt=o.RGBA8I),Q===o.SHORT&&(mt=o.RGBA16I),Q===o.INT&&(mt=o.RGBA32I)),E===o.RGB&&(Q===o.UNSIGNED_INT_5_9_9_9_REV&&(mt=o.RGB9_E5),Q===o.UNSIGNED_INT_10F_11F_11F_REV&&(mt=o.R11F_G11F_B10F)),E===o.RGBA){const Ft=Tt?cu:Le.getTransfer(xt);Q===o.FLOAT&&(mt=o.RGBA32F),Q===o.HALF_FLOAT&&(mt=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(mt=Ft===Ve?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(mt=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(mt=o.RGB5_A1)}return(mt===o.R16F||mt===o.R32F||mt===o.RG16F||mt===o.RG32F||mt===o.RGBA16F||mt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function D(O,E){let Q;return O?E===null||E===Xi||E===il?Q=o.DEPTH24_STENCIL8:E===Hi?Q=o.DEPTH32F_STENCIL8:E===nl&&(Q=o.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===il?Q=o.DEPTH_COMPONENT24:E===Hi?Q=o.DEPTH_COMPONENT32F:E===nl&&(Q=o.DEPTH_COMPONENT16),Q}function I(O,E){return x(O)===!0||O.isFramebufferTexture&&O.minFilter!==Tn&&O.minFilter!==Un?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function B(O){const E=O.target;E.removeEventListener("dispose",B),T(E),E.isVideoTexture&&v.delete(E)}function F(O){const E=O.target;E.removeEventListener("dispose",F),pt(E)}function T(O){const E=s.get(O);if(E.__webglInit===void 0)return;const Q=O.source,xt=g.get(Q);if(xt){const Tt=xt[E.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&N(O),Object.keys(xt).length===0&&g.delete(Q)}s.remove(O)}function N(O){const E=s.get(O);o.deleteTexture(E.__webglTexture);const Q=O.source,xt=g.get(Q);delete xt[E.__cacheKey],d.memory.textures--}function pt(O){const E=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray(E.__webglFramebuffer[xt]))for(let Tt=0;Tt<E.__webglFramebuffer[xt].length;Tt++)o.deleteFramebuffer(E.__webglFramebuffer[xt][Tt]);else o.deleteFramebuffer(E.__webglFramebuffer[xt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[xt])}else{if(Array.isArray(E.__webglFramebuffer))for(let xt=0;xt<E.__webglFramebuffer.length;xt++)o.deleteFramebuffer(E.__webglFramebuffer[xt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let xt=0;xt<E.__webglColorRenderbuffer.length;xt++)E.__webglColorRenderbuffer[xt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[xt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=O.textures;for(let xt=0,Tt=Q.length;xt<Tt;xt++){const mt=s.get(Q[xt]);mt.__webglTexture&&(o.deleteTexture(mt.__webglTexture),d.memory.textures--),s.remove(Q[xt])}s.remove(O)}let G=0;function et(){G=0}function K(){const O=G;return O>=l.maxTextures&&le("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function nt(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function $(O,E){const Q=s.get(O);if(O.isVideoTexture&&me(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Q.__version!==O.version){const xt=O.image;if(xt===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{J(Q,O,E);return}}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+E)}function L(O,E){const Q=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){J(Q,O,E);return}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+E)}function z(O,E){const Q=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){J(Q,O,E);return}i.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+E)}function W(O,E){const Q=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Q.__version!==O.version){H(Q,O,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+E)}const it={[Ah]:o.REPEAT,[_a]:o.CLAMP_TO_EDGE,[Rh]:o.MIRRORED_REPEAT},vt={[Tn]:o.NEAREST,[bM]:o.NEAREST_MIPMAP_NEAREST,[bc]:o.NEAREST_MIPMAP_LINEAR,[Un]:o.LINEAR,[Fd]:o.LINEAR_MIPMAP_NEAREST,[Os]:o.LINEAR_MIPMAP_LINEAR},P={[CM]:o.NEVER,[LM]:o.ALWAYS,[wM]:o.LESS,[yp]:o.LEQUAL,[DM]:o.EQUAL,[Mp]:o.GEQUAL,[UM]:o.GREATER,[NM]:o.NOTEQUAL};function j(O,E){if(E.type===Hi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Un||E.magFilter===Fd||E.magFilter===bc||E.magFilter===Os||E.minFilter===Un||E.minFilter===Fd||E.minFilter===bc||E.minFilter===Os)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,it[E.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,it[E.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,it[E.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,vt[E.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,vt[E.minFilter]),E.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==bc&&E.minFilter!==Os||E.type===Hi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function rt(O,E){let Q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",B));const xt=E.source;let Tt=g.get(xt);Tt===void 0&&(Tt={},g.set(xt,Tt));const mt=nt(E);if(mt!==O.__cacheKey){Tt[mt]===void 0&&(Tt[mt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),Tt[mt].usedTimes++;const Ft=Tt[O.__cacheKey];Ft!==void 0&&(Tt[O.__cacheKey].usedTimes--,Ft.usedTimes===0&&N(E)),O.__cacheKey=mt,O.__webglTexture=Tt[mt].texture}return Q}function Mt(O,E,Q){return Math.floor(Math.floor(O/Q)/E)}function At(O,E,Q,xt){const mt=O.updateRanges;if(mt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,Q,xt,E.data);else{mt.sort((Rt,Ct)=>Rt.start-Ct.start);let Ft=0;for(let Rt=1;Rt<mt.length;Rt++){const Ct=mt[Ft],Ht=mt[Rt],zt=Ct.start+Ct.count,kt=Mt(Ht.start,E.width,4),ge=Mt(Ct.start,E.width,4);Ht.start<=zt+1&&kt===ge&&Mt(Ht.start+Ht.count-1,E.width,4)===kt?Ct.count=Math.max(Ct.count,Ht.start+Ht.count-Ct.start):(++Ft,mt[Ft]=Ht)}mt.length=Ft+1;const Lt=o.getParameter(o.UNPACK_ROW_LENGTH),te=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Rt=0,Ct=mt.length;Rt<Ct;Rt++){const Ht=mt[Rt],zt=Math.floor(Ht.start/4),kt=Math.ceil(Ht.count/4),ge=zt%E.width,Z=Math.floor(zt/E.width),Ot=kt,Ut=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ge),o.pixelStorei(o.UNPACK_SKIP_ROWS,Z),i.texSubImage2D(o.TEXTURE_2D,0,ge,Z,Ot,Ut,Q,xt,E.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Lt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,te),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function J(O,E,Q){let xt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(xt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(xt=o.TEXTURE_3D);const Tt=rt(O,E),mt=E.source;i.bindTexture(xt,O.__webglTexture,o.TEXTURE0+Q);const Ft=s.get(mt);if(mt.version!==Ft.__version||Tt===!0){i.activeTexture(o.TEXTURE0+Q);const Lt=Le.getPrimaries(Le.workingColorSpace),te=E.colorSpace===es?null:Le.getPrimaries(E.colorSpace),ee=E.colorSpace===es||Lt===te?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Rt=w(E.image,!1,l.maxTextureSize);Rt=Ae(E,Rt);const Ct=c.convert(E.format,E.colorSpace),Ht=c.convert(E.type);let zt=U(E.internalFormat,Ct,Ht,E.colorSpace,E.isVideoTexture);j(xt,E);let kt;const ge=E.mipmaps,Z=E.isVideoTexture!==!0,Ot=Ft.__version===void 0||Tt===!0,Ut=mt.dataReady,Xt=I(E,Rt);if(E.isDepthTexture)zt=D(E.format===Ps,E.type),Ot&&(Z?i.texStorage2D(o.TEXTURE_2D,1,zt,Rt.width,Rt.height):i.texImage2D(o.TEXTURE_2D,0,zt,Rt.width,Rt.height,0,Ct,Ht,null));else if(E.isDataTexture)if(ge.length>0){Z&&Ot&&i.texStorage2D(o.TEXTURE_2D,Xt,zt,ge[0].width,ge[0].height);for(let wt=0,gt=ge.length;wt<gt;wt++)kt=ge[wt],Z?Ut&&i.texSubImage2D(o.TEXTURE_2D,wt,0,0,kt.width,kt.height,Ct,Ht,kt.data):i.texImage2D(o.TEXTURE_2D,wt,zt,kt.width,kt.height,0,Ct,Ht,kt.data);E.generateMipmaps=!1}else Z?(Ot&&i.texStorage2D(o.TEXTURE_2D,Xt,zt,Rt.width,Rt.height),Ut&&At(E,Rt,Ct,Ht)):i.texImage2D(o.TEXTURE_2D,0,zt,Rt.width,Rt.height,0,Ct,Ht,Rt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Z&&Ot&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,zt,ge[0].width,ge[0].height,Rt.depth);for(let wt=0,gt=ge.length;wt<gt;wt++)if(kt=ge[wt],E.format!==wi)if(Ct!==null)if(Z){if(Ut)if(E.layerUpdates.size>0){const Yt=av(kt.width,kt.height,E.format,E.type);for(const ce of E.layerUpdates){const Ie=kt.data.subarray(ce*Yt/kt.data.BYTES_PER_ELEMENT,(ce+1)*Yt/kt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,wt,0,0,ce,kt.width,kt.height,1,Ct,Ie)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,wt,0,0,0,kt.width,kt.height,Rt.depth,Ct,kt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,wt,zt,kt.width,kt.height,Rt.depth,0,kt.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?Ut&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,wt,0,0,0,kt.width,kt.height,Rt.depth,Ct,Ht,kt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,wt,zt,kt.width,kt.height,Rt.depth,0,Ct,Ht,kt.data)}else{Z&&Ot&&i.texStorage2D(o.TEXTURE_2D,Xt,zt,ge[0].width,ge[0].height);for(let wt=0,gt=ge.length;wt<gt;wt++)kt=ge[wt],E.format!==wi?Ct!==null?Z?Ut&&i.compressedTexSubImage2D(o.TEXTURE_2D,wt,0,0,kt.width,kt.height,Ct,kt.data):i.compressedTexImage2D(o.TEXTURE_2D,wt,zt,kt.width,kt.height,0,kt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?Ut&&i.texSubImage2D(o.TEXTURE_2D,wt,0,0,kt.width,kt.height,Ct,Ht,kt.data):i.texImage2D(o.TEXTURE_2D,wt,zt,kt.width,kt.height,0,Ct,Ht,kt.data)}else if(E.isDataArrayTexture)if(Z){if(Ot&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Xt,zt,Rt.width,Rt.height,Rt.depth),Ut)if(E.layerUpdates.size>0){const wt=av(Rt.width,Rt.height,E.format,E.type);for(const gt of E.layerUpdates){const Yt=Rt.data.subarray(gt*wt/Rt.data.BYTES_PER_ELEMENT,(gt+1)*wt/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,Rt.width,Rt.height,1,Ct,Ht,Yt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ct,Ht,Rt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,Rt.width,Rt.height,Rt.depth,0,Ct,Ht,Rt.data);else if(E.isData3DTexture)Z?(Ot&&i.texStorage3D(o.TEXTURE_3D,Xt,zt,Rt.width,Rt.height,Rt.depth),Ut&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ct,Ht,Rt.data)):i.texImage3D(o.TEXTURE_3D,0,zt,Rt.width,Rt.height,Rt.depth,0,Ct,Ht,Rt.data);else if(E.isFramebufferTexture){if(Ot)if(Z)i.texStorage2D(o.TEXTURE_2D,Xt,zt,Rt.width,Rt.height);else{let wt=Rt.width,gt=Rt.height;for(let Yt=0;Yt<Xt;Yt++)i.texImage2D(o.TEXTURE_2D,Yt,zt,wt,gt,0,Ct,Ht,null),wt>>=1,gt>>=1}}else if(ge.length>0){if(Z&&Ot){const wt=Wt(ge[0]);i.texStorage2D(o.TEXTURE_2D,Xt,zt,wt.width,wt.height)}for(let wt=0,gt=ge.length;wt<gt;wt++)kt=ge[wt],Z?Ut&&i.texSubImage2D(o.TEXTURE_2D,wt,0,0,Ct,Ht,kt):i.texImage2D(o.TEXTURE_2D,wt,zt,Ct,Ht,kt);E.generateMipmaps=!1}else if(Z){if(Ot){const wt=Wt(Rt);i.texStorage2D(o.TEXTURE_2D,Xt,zt,wt.width,wt.height)}Ut&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ct,Ht,Rt)}else i.texImage2D(o.TEXTURE_2D,0,zt,Ct,Ht,Rt);x(E)&&_(xt),Ft.__version=mt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function H(O,E,Q){if(E.image.length!==6)return;const xt=rt(O,E),Tt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+Q);const mt=s.get(Tt);if(Tt.version!==mt.__version||xt===!0){i.activeTexture(o.TEXTURE0+Q);const Ft=Le.getPrimaries(Le.workingColorSpace),Lt=E.colorSpace===es?null:Le.getPrimaries(E.colorSpace),te=E.colorSpace===es||Ft===Lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ee=E.isCompressedTexture||E.image[0].isCompressedTexture,Rt=E.image[0]&&E.image[0].isDataTexture,Ct=[];for(let gt=0;gt<6;gt++)!ee&&!Rt?Ct[gt]=w(E.image[gt],!0,l.maxCubemapSize):Ct[gt]=Rt?E.image[gt].image:E.image[gt],Ct[gt]=Ae(E,Ct[gt]);const Ht=Ct[0],zt=c.convert(E.format,E.colorSpace),kt=c.convert(E.type),ge=U(E.internalFormat,zt,kt,E.colorSpace),Z=E.isVideoTexture!==!0,Ot=mt.__version===void 0||xt===!0,Ut=Tt.dataReady;let Xt=I(E,Ht);j(o.TEXTURE_CUBE_MAP,E);let wt;if(ee){Z&&Ot&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,ge,Ht.width,Ht.height);for(let gt=0;gt<6;gt++){wt=Ct[gt].mipmaps;for(let Yt=0;Yt<wt.length;Yt++){const ce=wt[Yt];E.format!==wi?zt!==null?Z?Ut&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,0,0,ce.width,ce.height,zt,ce.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,ge,ce.width,ce.height,0,ce.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,0,0,ce.width,ce.height,zt,kt,ce.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt,ge,ce.width,ce.height,0,zt,kt,ce.data)}}}else{if(wt=E.mipmaps,Z&&Ot){wt.length>0&&Xt++;const gt=Wt(Ct[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Xt,ge,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Rt){Z?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ct[gt].width,Ct[gt].height,zt,kt,Ct[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ge,Ct[gt].width,Ct[gt].height,0,zt,kt,Ct[gt].data);for(let Yt=0;Yt<wt.length;Yt++){const Ie=wt[Yt].image[gt].image;Z?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,0,0,Ie.width,Ie.height,zt,kt,Ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,ge,Ie.width,Ie.height,0,zt,kt,Ie.data)}}else{Z?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,zt,kt,Ct[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ge,zt,kt,Ct[gt]);for(let Yt=0;Yt<wt.length;Yt++){const ce=wt[Yt];Z?Ut&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,0,0,zt,kt,ce.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Yt+1,ge,zt,kt,ce.image[gt])}}}x(E)&&_(o.TEXTURE_CUBE_MAP),mt.__version=Tt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function ft(O,E,Q,xt,Tt,mt){const Ft=c.convert(Q.format,Q.colorSpace),Lt=c.convert(Q.type),te=U(Q.internalFormat,Ft,Lt,Q.colorSpace),ee=s.get(E),Rt=s.get(Q);if(Rt.__renderTarget=E,!ee.__hasExternalTextures){const Ct=Math.max(1,E.width>>mt),Ht=Math.max(1,E.height>>mt);Tt===o.TEXTURE_3D||Tt===o.TEXTURE_2D_ARRAY?i.texImage3D(Tt,mt,te,Ct,Ht,E.depth,0,Ft,Lt,null):i.texImage2D(Tt,mt,te,Ct,Ht,0,Ft,Lt,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Te(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,xt,Tt,Rt.__webglTexture,0,k(E)):(Tt===o.TEXTURE_2D||Tt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,xt,Tt,Rt.__webglTexture,mt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Et(O,E,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,O),E.depthBuffer){const xt=E.depthTexture,Tt=xt&&xt.isDepthTexture?xt.type:null,mt=D(E.stencilBuffer,Tt),Ft=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Te(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,k(E),mt,E.width,E.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,k(E),mt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,mt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ft,o.RENDERBUFFER,O)}else{const xt=E.textures;for(let Tt=0;Tt<xt.length;Tt++){const mt=xt[Tt],Ft=c.convert(mt.format,mt.colorSpace),Lt=c.convert(mt.type),te=U(mt.internalFormat,Ft,Lt,mt.colorSpace);Te(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,k(E),te,E.width,E.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,k(E),te,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,te,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Nt(O,E,Q){const xt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Tt=s.get(E.depthTexture);if(Tt.__renderTarget=E,(!Tt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),xt){if(Tt.__webglInit===void 0&&(Tt.__webglInit=!0,E.depthTexture.addEventListener("dispose",B)),Tt.__webglTexture===void 0){Tt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Tt.__webglTexture),j(o.TEXTURE_CUBE_MAP,E.depthTexture);const ee=c.convert(E.depthTexture.format),Rt=c.convert(E.depthTexture.type);let Ct;E.depthTexture.format===ya?Ct=o.DEPTH_COMPONENT24:E.depthTexture.format===Ps&&(Ct=o.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Ct,E.width,E.height,0,ee,Rt,null)}}else $(E.depthTexture,0);const mt=Tt.__webglTexture,Ft=k(E),Lt=xt?o.TEXTURE_CUBE_MAP_POSITIVE_X+Q:o.TEXTURE_2D,te=E.depthTexture.format===Ps?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===ya)Te(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,te,Lt,mt,0,Ft):o.framebufferTexture2D(o.FRAMEBUFFER,te,Lt,mt,0);else if(E.depthTexture.format===Ps)Te(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,te,Lt,mt,0,Ft):o.framebufferTexture2D(o.FRAMEBUFFER,te,Lt,mt,0);else throw new Error("Unknown depthTexture format")}function Dt(O){const E=s.get(O),Q=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const xt=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),xt){const Tt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,xt.removeEventListener("dispose",Tt)};xt.addEventListener("dispose",Tt),E.__depthDisposeCallback=Tt}E.__boundDepthTexture=xt}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let xt=0;xt<6;xt++)Nt(E.__webglFramebuffer[xt],O,xt);else{const xt=O.texture.mipmaps;xt&&xt.length>0?Nt(E.__webglFramebuffer[0],O,0):Nt(E.__webglFramebuffer,O,0)}else if(Q){E.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[xt]),E.__webglDepthbuffer[xt]===void 0)E.__webglDepthbuffer[xt]=o.createRenderbuffer(),Et(E.__webglDepthbuffer[xt],O,!1);else{const Tt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer[xt];o.bindRenderbuffer(o.RENDERBUFFER,mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Tt,o.RENDERBUFFER,mt)}}else{const xt=O.texture.mipmaps;if(xt&&xt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Et(E.__webglDepthbuffer,O,!1);else{const Tt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,Tt,o.RENDERBUFFER,mt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ie(O,E,Q){const xt=s.get(O);E!==void 0&&ft(xt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&Dt(O)}function Gt(O){const E=O.texture,Q=s.get(O),xt=s.get(E);O.addEventListener("dispose",F);const Tt=O.textures,mt=O.isWebGLCubeRenderTarget===!0,Ft=Tt.length>1;if(Ft||(xt.__webglTexture===void 0&&(xt.__webglTexture=o.createTexture()),xt.__version=E.version,d.memory.textures++),mt){Q.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[Lt]=[];for(let te=0;te<E.mipmaps.length;te++)Q.__webglFramebuffer[Lt][te]=o.createFramebuffer()}else Q.__webglFramebuffer[Lt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Lt=0;Lt<E.mipmaps.length;Lt++)Q.__webglFramebuffer[Lt]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(Ft)for(let Lt=0,te=Tt.length;Lt<te;Lt++){const ee=s.get(Tt[Lt]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),d.memory.textures++)}if(O.samples>0&&Te(O)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Lt=0;Lt<Tt.length;Lt++){const te=Tt[Lt];Q.__webglColorRenderbuffer[Lt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[Lt]);const ee=c.convert(te.format,te.colorSpace),Rt=c.convert(te.type),Ct=U(te.internalFormat,ee,Rt,te.colorSpace,O.isXRRenderTarget===!0),Ht=k(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ht,Ct,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,Q.__webglColorRenderbuffer[Lt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),Et(Q.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(mt){i.bindTexture(o.TEXTURE_CUBE_MAP,xt.__webglTexture),j(o.TEXTURE_CUBE_MAP,E);for(let Lt=0;Lt<6;Lt++)if(E.mipmaps&&E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)ft(Q.__webglFramebuffer[Lt][te],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,te);else ft(Q.__webglFramebuffer[Lt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);x(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ft){for(let Lt=0,te=Tt.length;Lt<te;Lt++){const ee=Tt[Lt],Rt=s.get(ee);let Ct=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ct=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,Rt.__webglTexture),j(Ct,ee),ft(Q.__webglFramebuffer,O,ee,o.COLOR_ATTACHMENT0+Lt,Ct,0),x(ee)&&_(Ct)}i.unbindTexture()}else{let Lt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Lt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Lt,xt.__webglTexture),j(Lt,E),E.mipmaps&&E.mipmaps.length>0)for(let te=0;te<E.mipmaps.length;te++)ft(Q.__webglFramebuffer[te],O,E,o.COLOR_ATTACHMENT0,Lt,te);else ft(Q.__webglFramebuffer,O,E,o.COLOR_ATTACHMENT0,Lt,0);x(E)&&_(Lt),i.unbindTexture()}O.depthBuffer&&Dt(O)}function Vt(O){const E=O.textures;for(let Q=0,xt=E.length;Q<xt;Q++){const Tt=E[Q];if(x(Tt)){const mt=A(O),Ft=s.get(Tt).__webglTexture;i.bindTexture(mt,Ft),_(mt),i.unbindTexture()}}}const re=[],jt=[];function he(O){if(O.samples>0){if(Te(O)===!1){const E=O.textures,Q=O.width,xt=O.height;let Tt=o.COLOR_BUFFER_BIT;const mt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ft=s.get(O),Lt=E.length>1;if(Lt)for(let ee=0;ee<E.length;ee++)i.bindFramebuffer(o.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ft.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);const te=O.texture.mipmaps;te&&te.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let ee=0;ee<E.length;ee++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Tt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Tt|=o.STENCIL_BUFFER_BIT)),Lt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ft.__webglColorRenderbuffer[ee]);const Rt=s.get(E[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Rt,0)}o.blitFramebuffer(0,0,Q,xt,0,0,Q,xt,Tt,o.NEAREST),m===!0&&(re.length=0,jt.length=0,re.push(o.COLOR_ATTACHMENT0+ee),O.depthBuffer&&O.resolveDepthBuffer===!1&&(re.push(mt),jt.push(mt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,jt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Lt)for(let ee=0;ee<E.length;ee++){i.bindFramebuffer(o.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,Ft.__webglColorRenderbuffer[ee]);const Rt=s.get(E[ee]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ft.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,Rt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function k(O){return Math.min(l.maxSamples,O.samples)}function Te(O){const E=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function me(O){const E=d.render.frame;v.get(O)!==E&&(v.set(O,E),O.update())}function Ae(O,E){const Q=O.colorSpace,xt=O.format,Tt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Q!==Wr&&Q!==es&&(Le.getTransfer(Q)===Ve?(xt!==wi||Tt!==ri)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ne("WebGLTextures: Unsupported texture color space:",Q)),E}function Wt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(h.width=O.naturalWidth||O.width,h.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(h.width=O.displayWidth,h.height=O.displayHeight):(h.width=O.width,h.height=O.height),h}this.allocateTextureUnit=K,this.resetTextureUnits=et,this.setTexture2D=$,this.setTexture2DArray=L,this.setTexture3D=z,this.setTextureCube=W,this.rebindTextures=ie,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function fR(o,t){function i(s,l=es){let c;const d=Le.getTransfer(l);if(s===ri)return o.UNSIGNED_BYTE;if(s===gp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===_p)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Vv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===kv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Hv)return o.BYTE;if(s===Gv)return o.SHORT;if(s===nl)return o.UNSIGNED_SHORT;if(s===mp)return o.INT;if(s===Xi)return o.UNSIGNED_INT;if(s===Hi)return o.FLOAT;if(s===Sa)return o.HALF_FLOAT;if(s===Xv)return o.ALPHA;if(s===Wv)return o.RGB;if(s===wi)return o.RGBA;if(s===ya)return o.DEPTH_COMPONENT;if(s===Ps)return o.DEPTH_STENCIL;if(s===qv)return o.RED;if(s===vp)return o.RED_INTEGER;if(s===Xr)return o.RG;if(s===xp)return o.RG_INTEGER;if(s===Sp)return o.RGBA_INTEGER;if(s===nu||s===iu||s===au||s===su)if(d===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===nu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===nu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===su)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ch||s===wh||s===Dh||s===Uh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ch)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Dh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Uh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nh||s===Lh||s===Oh||s===Ph||s===Fh||s===zh||s===Bh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Nh||s===Lh)return d===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Oh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ph)return c.COMPRESSED_R11_EAC;if(s===Fh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===zh)return c.COMPRESSED_RG11_EAC;if(s===Bh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Ih||s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===Wh||s===qh||s===jh||s===Yh||s===Zh||s===Kh||s===Qh||s===Jh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ih)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Xh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Yh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$h||s===tp||s===ep)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===$h)return d===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===tp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ep)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===np||s===ip||s===ap||s===sp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===np)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ip)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ap)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===sp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===il?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const dR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hR=`
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

}`;class pR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new ix(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new qi({vertexShader:dR,fragmentShader:hR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Wi(new cl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mR extends jr{constructor(t,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,v=null,y=null,g=null,M=null,b=null;const w=typeof XRWebGLBinding<"u",x=new pR,_={},A=i.getContextAttributes();let U=null,D=null;const I=[],B=[],F=new be;let T=null;const N=new si;N.viewport=new nn;const pt=new si;pt.viewport=new nn;const G=[N,pt],et=new TE;let K=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let H=I[J];return H===void 0&&(H=new Xd,I[J]=H),H.getTargetRaySpace()},this.getControllerGrip=function(J){let H=I[J];return H===void 0&&(H=new Xd,I[J]=H),H.getGripSpace()},this.getHand=function(J){let H=I[J];return H===void 0&&(H=new Xd,I[J]=H),H.getHandSpace()};function $(J){const H=B.indexOf(J.inputSource);if(H===-1)return;const ft=I[H];ft!==void 0&&(ft.update(J.inputSource,J.frame,h||d),ft.dispatchEvent({type:J.type,data:J.inputSource}))}function L(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",z);for(let J=0;J<I.length;J++){const H=B[J];H!==null&&(B[J]=null,I[J].disconnect(H))}K=null,nt=null,x.reset();for(const J in _)delete _[J];t.setRenderTarget(U),M=null,g=null,y=null,l=null,D=null,At.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,s.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){p=J,s.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return y===null&&w&&(y=new XRWebGLBinding(l,i)),y},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",L),l.addEventListener("inputsourceschange",z),A.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(F),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,Et=null,Nt=null;A.depth&&(Nt=A.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ft=A.stencil?Ps:ya,Et=A.stencil?il:Xi);const Dt={colorFormat:i.RGBA8,depthFormat:Nt,scaleFactor:c};y=this.getBinding(),g=y.createProjectionLayer(Dt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new ki(g.textureWidth,g.textureHeight,{format:wi,type:ri,depthTexture:new sl(g.textureWidth,g.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ft={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ft),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new ki(M.framebufferWidth,M.framebufferHeight,{format:wi,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),At.setContext(l),At.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function z(J){for(let H=0;H<J.removed.length;H++){const ft=J.removed[H],Et=B.indexOf(ft);Et>=0&&(B[Et]=null,I[Et].disconnect(ft))}for(let H=0;H<J.added.length;H++){const ft=J.added[H];let Et=B.indexOf(ft);if(Et===-1){for(let Dt=0;Dt<I.length;Dt++)if(Dt>=B.length){B.push(ft),Et=Dt;break}else if(B[Dt]===null){B[Dt]=ft,Et=Dt;break}if(Et===-1)break}const Nt=I[Et];Nt&&Nt.connect(ft)}}const W=new st,it=new st;function vt(J,H,ft){W.setFromMatrixPosition(H.matrixWorld),it.setFromMatrixPosition(ft.matrixWorld);const Et=W.distanceTo(it),Nt=H.projectionMatrix.elements,Dt=ft.projectionMatrix.elements,ie=Nt[14]/(Nt[10]-1),Gt=Nt[14]/(Nt[10]+1),Vt=(Nt[9]+1)/Nt[5],re=(Nt[9]-1)/Nt[5],jt=(Nt[8]-1)/Nt[0],he=(Dt[8]+1)/Dt[0],k=ie*jt,Te=ie*he,me=Et/(-jt+he),Ae=me*-jt;if(H.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ae),J.translateZ(me),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Nt[10]===-1)J.projectionMatrix.copy(H.projectionMatrix),J.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{const Wt=ie+me,O=Gt+me,E=k-Ae,Q=Te+(Et-Ae),xt=Vt*Gt/O*Wt,Tt=re*Gt/O*Wt;J.projectionMatrix.makePerspective(E,Q,xt,Tt,Wt,O),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function P(J,H){H===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(H.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let H=J.near,ft=J.far;x.texture!==null&&(x.depthNear>0&&(H=x.depthNear),x.depthFar>0&&(ft=x.depthFar)),et.near=pt.near=N.near=H,et.far=pt.far=N.far=ft,(K!==et.near||nt!==et.far)&&(l.updateRenderState({depthNear:et.near,depthFar:et.far}),K=et.near,nt=et.far),et.layers.mask=J.layers.mask|6,N.layers.mask=et.layers.mask&-5,pt.layers.mask=et.layers.mask&-3;const Et=J.parent,Nt=et.cameras;P(et,Et);for(let Dt=0;Dt<Nt.length;Dt++)P(Nt[Dt],Et);Nt.length===2?vt(et,N,pt):et.projectionMatrix.copy(N.projectionMatrix),j(J,et,Et)};function j(J,H,ft){ft===null?J.matrix.copy(H.matrixWorld):(J.matrix.copy(ft.matrixWorld),J.matrix.invert(),J.matrix.multiply(H.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(H.projectionMatrix),J.projectionMatrixInverse.copy(H.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=op*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(J){m=J,g!==null&&(g.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(et)},this.getCameraTexture=function(J){return _[J]};let rt=null;function Mt(J,H){if(v=H.getViewerPose(h||d),b=H,v!==null){const ft=v.views;M!==null&&(t.setRenderTargetFramebuffer(D,M.framebuffer),t.setRenderTarget(D));let Et=!1;ft.length!==et.cameras.length&&(et.cameras.length=0,Et=!0);for(let Gt=0;Gt<ft.length;Gt++){const Vt=ft[Gt];let re=null;if(M!==null)re=M.getViewport(Vt);else{const he=y.getViewSubImage(g,Vt);re=he.viewport,Gt===0&&(t.setRenderTargetTextures(D,he.colorTexture,he.depthStencilTexture),t.setRenderTarget(D))}let jt=G[Gt];jt===void 0&&(jt=new si,jt.layers.enable(Gt),jt.viewport=new nn,G[Gt]=jt),jt.matrix.fromArray(Vt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Vt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(re.x,re.y,re.width,re.height),Gt===0&&(et.matrix.copy(jt.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),Et===!0&&et.cameras.push(jt)}const Nt=l.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){y=s.getBinding();const Gt=y.getDepthInformation(ft[0]);Gt&&Gt.isValid&&Gt.texture&&x.init(Gt,l.renderState)}if(Nt&&Nt.includes("camera-access")&&w){t.state.unbindTexture(),y=s.getBinding();for(let Gt=0;Gt<ft.length;Gt++){const Vt=ft[Gt].camera;if(Vt){let re=_[Vt];re||(re=new ix,_[Vt]=re);const jt=y.getCameraImage(Vt);re.sourceTexture=jt}}}}for(let ft=0;ft<I.length;ft++){const Et=B[ft],Nt=I[ft];Et!==null&&Nt!==void 0&&Nt.update(Et,H,h||d)}rt&&rt(J,H),H.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:H}),b=null}const At=new lx;At.setAnimationLoop(Mt),this.setAnimationLoop=function(J){rt=J},this.dispose=function(){}}}const Ds=new Ma,gR=new Ke;function _R(o,t){function i(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function s(x,_){_.color.getRGB(x.fogColor.value,ax(o)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function l(x,_,A,U,D){_.isMeshBasicMaterial?c(x,_):_.isMeshLambertMaterial?(c(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(c(x,_),y(x,_)):_.isMeshPhongMaterial?(c(x,_),v(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(c(x,_),g(x,_),_.isMeshPhysicalMaterial&&M(x,_,D)):_.isMeshMatcapMaterial?(c(x,_),b(x,_)):_.isMeshDepthMaterial?c(x,_):_.isMeshDistanceMaterial?(c(x,_),w(x,_)):_.isMeshNormalMaterial?c(x,_):_.isLineBasicMaterial?(d(x,_),_.isLineDashedMaterial&&p(x,_)):_.isPointsMaterial?m(x,_,A,U):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,i(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===jn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,i(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===jn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,i(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,i(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const A=t.get(_),U=A.envMap,D=A.envMapRotation;U&&(x.envMap.value=U,Ds.copy(D),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),x.envMapRotation.value.setFromMatrix4(gR.makeRotationFromEuler(Ds)),x.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,x.aoMapTransform))}function d(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform))}function p(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function m(x,_,A,U){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*A,x.scale.value=U*.5,_.map&&(x.map.value=_.map,i(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function v(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function y(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function g(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function M(x,_,A){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===jn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=A.texture,x.transmissionSamplerSize.value.set(A.width,A.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,_){_.matcap&&(x.matcap.value=_.matcap)}function w(x,_){const A=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(A.matrixWorld),x.nearDistance.value=A.shadow.camera.near,x.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function vR(o,t,i,s){let l={},c={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,U){const D=U.program;s.uniformBlockBinding(A,D)}function h(A,U){let D=l[A.id];D===void 0&&(b(A),D=v(A),l[A.id]=D,A.addEventListener("dispose",x));const I=U.program;s.updateUBOMapping(A,I);const B=t.render.frame;c[A.id]!==B&&(g(A),c[A.id]=B)}function v(A){const U=y();A.__bindingPointIndex=U;const D=o.createBuffer(),I=A.__size,B=A.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,I,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,D),D}function y(){for(let A=0;A<p;A++)if(d.indexOf(A)===-1)return d.push(A),A;return Ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const U=l[A.id],D=A.uniforms,I=A.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let B=0,F=D.length;B<F;B++){const T=Array.isArray(D[B])?D[B]:[D[B]];for(let N=0,pt=T.length;N<pt;N++){const G=T[N];if(M(G,B,N,I)===!0){const et=G.__offset,K=Array.isArray(G.value)?G.value:[G.value];let nt=0;for(let $=0;$<K.length;$++){const L=K[$],z=w(L);typeof L=="number"||typeof L=="boolean"?(G.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,et+nt,G.__data)):L.isMatrix3?(G.__data[0]=L.elements[0],G.__data[1]=L.elements[1],G.__data[2]=L.elements[2],G.__data[3]=0,G.__data[4]=L.elements[3],G.__data[5]=L.elements[4],G.__data[6]=L.elements[5],G.__data[7]=0,G.__data[8]=L.elements[6],G.__data[9]=L.elements[7],G.__data[10]=L.elements[8],G.__data[11]=0):(L.toArray(G.__data,nt),nt+=z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,et,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(A,U,D,I){const B=A.value,F=U+"_"+D;if(I[F]===void 0)return typeof B=="number"||typeof B=="boolean"?I[F]=B:I[F]=B.clone(),!0;{const T=I[F];if(typeof B=="number"||typeof B=="boolean"){if(T!==B)return I[F]=B,!0}else if(T.equals(B)===!1)return T.copy(B),!0}return!1}function b(A){const U=A.uniforms;let D=0;const I=16;for(let F=0,T=U.length;F<T;F++){const N=Array.isArray(U[F])?U[F]:[U[F]];for(let pt=0,G=N.length;pt<G;pt++){const et=N[pt],K=Array.isArray(et.value)?et.value:[et.value];for(let nt=0,$=K.length;nt<$;nt++){const L=K[nt],z=w(L),W=D%I,it=W%z.boundary,vt=W+it;D+=it,vt!==0&&I-vt<z.storage&&(D+=I-vt),et.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=D,D+=z.storage}}}const B=D%I;return B>0&&(D+=I-B),A.__size=D,A.__cache={},this}function w(A){const U={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(U.boundary=4,U.storage=4):A.isVector2?(U.boundary=8,U.storage=8):A.isVector3||A.isColor?(U.boundary=16,U.storage=12):A.isVector4?(U.boundary=16,U.storage=16):A.isMatrix3?(U.boundary=48,U.storage=48):A.isMatrix4?(U.boundary=64,U.storage=64):A.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):le("WebGLRenderer: Unsupported uniform value type.",A),U}function x(A){const U=A.target;U.removeEventListener("dispose",x);const D=d.indexOf(U.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const A in l)o.deleteBuffer(l[A]);d=[],l={},c={}}return{bind:m,update:h,dispose:_}}const xR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function SR(){return Fi===null&&(Fi=new rE(xR,16,16,Xr,Sa),Fi.name="DFG_LUT",Fi.minFilter=Un,Fi.magFilter=Un,Fi.wrapS=_a,Fi.wrapT=_a,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class yR{constructor(t={}){const{canvas:i=PM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:M=ri}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=d;const w=M,x=new Set([Sp,xp,vp]),_=new Set([ri,Xi,nl,il,gp,_p]),A=new Uint32Array(4),U=new Int32Array(4);let D=null,I=null;const B=[],F=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let pt=!1;this._outputColorSpace=_i;let G=0,et=0,K=null,nt=-1,$=null;const L=new nn,z=new nn;let W=null;const it=new ye(0);let vt=0,P=i.width,j=i.height,rt=1,Mt=null,At=null;const J=new nn(0,0,P,j),H=new nn(0,0,P,j);let ft=!1;const Et=new Rp;let Nt=!1,Dt=!1;const ie=new Ke,Gt=new st,Vt=new nn,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function he(){return K===null?rt:1}let k=s;function Te(C,Y){return i.getContext(C,Y)}try{const C={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${hp}`),i.addEventListener("webglcontextlost",Yt,!1),i.addEventListener("webglcontextrestored",ce,!1),i.addEventListener("webglcontextcreationerror",Ie,!1),k===null){const Y="webgl2";if(k=Te(Y,C),k===null)throw Te(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw Ne("WebGLRenderer: "+C.message),C}let me,Ae,Wt,O,E,Q,xt,Tt,mt,Ft,Lt,te,ee,Rt,Ct,Ht,zt,kt,ge,Z,Ot,Ut,Xt;function wt(){me=new y1(k),me.init(),Ot=new fR(k,me),Ae=new h1(k,me,t,Ot),Wt=new cR(k,me),Ae.reversedDepthBuffer&&g&&Wt.buffers.depth.setReversed(!0),O=new b1(k),E=new ZA,Q=new uR(k,me,Wt,E,Ae,Ot,O),xt=new S1(N),Tt=new wE(k),Ut=new f1(k,Tt),mt=new M1(k,Tt,O,Ut),Ft=new A1(k,mt,Tt,Ut,O),kt=new T1(k,Ae,Q),Ct=new p1(E),Lt=new YA(N,xt,me,Ae,Ut,Ct),te=new _R(N,E),ee=new QA,Rt=new iR(me),zt=new u1(N,xt,Wt,Ft,b,m),Ht=new lR(N,Ft,Ae),Xt=new vR(k,O,Ae,Wt),ge=new d1(k,me,O),Z=new E1(k,me,O),O.programs=Lt.programs,N.capabilities=Ae,N.extensions=me,N.properties=E,N.renderLists=ee,N.shadowMap=Ht,N.state=Wt,N.info=O}wt(),w!==ri&&(T=new C1(w,i.width,i.height,l,c));const gt=new mR(N,k);this.xr=gt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=me.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=me.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(C){C!==void 0&&(rt=C,this.setSize(P,j,!1))},this.getSize=function(C){return C.set(P,j)},this.setSize=function(C,Y,dt=!0){if(gt.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,j=Y,i.width=Math.floor(C*rt),i.height=Math.floor(Y*rt),dt===!0&&(i.style.width=C+"px",i.style.height=Y+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(P*rt,j*rt).floor()},this.setDrawingBufferSize=function(C,Y,dt){P=C,j=Y,rt=dt,i.width=Math.floor(C*dt),i.height=Math.floor(Y*dt),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(w===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(J)},this.setViewport=function(C,Y,dt,ct){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,Y,dt,ct),Wt.viewport(L.copy(J).multiplyScalar(rt).round())},this.getScissor=function(C){return C.copy(H)},this.setScissor=function(C,Y,dt,ct){C.isVector4?H.set(C.x,C.y,C.z,C.w):H.set(C,Y,dt,ct),Wt.scissor(z.copy(H).multiplyScalar(rt).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(C){Wt.setScissorTest(ft=C)},this.setOpaqueSort=function(C){Mt=C},this.setTransparentSort=function(C){At=C},this.getClearColor=function(C){return C.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,dt=!0){let ct=0;if(C){let at=!1;if(K!==null){const Pt=K.texture.format;at=x.has(Pt)}if(at){const Pt=K.texture.type,qt=_.has(Pt),Bt=zt.getClearColor(),Jt=zt.getClearAlpha(),ne=Bt.r,oe=Bt.g,fe=Bt.b;qt?(A[0]=ne,A[1]=oe,A[2]=fe,A[3]=Jt,k.clearBufferuiv(k.COLOR,0,A)):(U[0]=ne,U[1]=oe,U[2]=fe,U[3]=Jt,k.clearBufferiv(k.COLOR,0,U))}else ct|=k.COLOR_BUFFER_BIT}Y&&(ct|=k.DEPTH_BUFFER_BIT),dt&&(ct|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ct!==0&&k.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Yt,!1),i.removeEventListener("webglcontextrestored",ce,!1),i.removeEventListener("webglcontextcreationerror",Ie,!1),zt.dispose(),ee.dispose(),Rt.dispose(),E.dispose(),xt.dispose(),Ft.dispose(),Ut.dispose(),Xt.dispose(),Lt.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Is),gt.removeEventListener("sessionend",Hs),Di.stop()};function Yt(C){C.preventDefault(),fu("WebGLRenderer: Context Lost."),pt=!0}function ce(){fu("WebGLRenderer: Context Restored."),pt=!1;const C=O.autoReset,Y=Ht.enabled,dt=Ht.autoUpdate,ct=Ht.needsUpdate,at=Ht.type;wt(),O.autoReset=C,Ht.enabled=Y,Ht.autoUpdate=dt,Ht.needsUpdate=ct,Ht.type=at}function Ie(C){Ne("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ue(C){const Y=C.target;Y.removeEventListener("dispose",Ue),On(Y)}function On(C){xi(C),E.remove(C)}function xi(C){const Y=E.get(C).programs;Y!==void 0&&(Y.forEach(function(dt){Lt.releaseProgram(dt)}),C.isShaderMaterial&&Lt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,dt,ct,at,Pt){Y===null&&(Y=re);const qt=at.isMesh&&at.matrixWorld.determinant()<0,Bt=hl(C,Y,dt,ct,at);Wt.setMaterial(ct,qt);let Jt=dt.index,ne=1;if(ct.wireframe===!0){if(Jt=mt.getWireframeAttribute(dt),Jt===void 0)return;ne=2}const oe=dt.drawRange,fe=dt.attributes.position;let Zt=oe.start*ne,_e=(oe.start+oe.count)*ne;Pt!==null&&(Zt=Math.max(Zt,Pt.start*ne),_e=Math.min(_e,(Pt.start+Pt.count)*ne)),Jt!==null?(Zt=Math.max(Zt,0),_e=Math.min(_e,Jt.count)):fe!=null&&(Zt=Math.max(Zt,0),_e=Math.min(_e,fe.count));const Qe=_e-Zt;if(Qe<0||Qe===1/0)return;Ut.setup(at,ct,Bt,dt,Jt);let Je,Oe=ge;if(Jt!==null&&(Je=Tt.get(Jt),Oe=Z,Oe.setIndex(Je)),at.isMesh)ct.wireframe===!0?(Wt.setLineWidth(ct.wireframeLinewidth*he()),Oe.setMode(k.LINES)):Oe.setMode(k.TRIANGLES);else if(at.isLine){let mn=ct.linewidth;mn===void 0&&(mn=1),Wt.setLineWidth(mn*he()),at.isLineSegments?Oe.setMode(k.LINES):at.isLineLoop?Oe.setMode(k.LINE_LOOP):Oe.setMode(k.LINE_STRIP)}else at.isPoints?Oe.setMode(k.POINTS):at.isSprite&&Oe.setMode(k.TRIANGLES);if(at.isBatchedMesh)if(at._multiDrawInstances!==null)du("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount,at._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))Oe.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const mn=at._multiDrawStarts,Qt=at._multiDrawCounts,Pn=at._multiDrawCount,ue=Jt?Tt.get(Jt).bytesPerElement:1,Fn=E.get(ct).currentProgram.getUniforms();for(let Yn=0;Yn<Pn;Yn++)Fn.setValue(k,"_gl_DrawID",Yn),Oe.render(mn[Yn]/ue,Qt[Yn])}else if(at.isInstancedMesh)Oe.renderInstances(Zt,Qe,at.count);else if(dt.isInstancedBufferGeometry){const mn=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Qt=Math.min(dt.instanceCount,mn);Oe.renderInstances(Zt,Qe,Qt)}else Oe.render(Zt,Qe)};function Kr(C,Y,dt){C.transparent===!0&&C.side===Bi&&C.forceSinglePass===!1?(C.side=jn,C.needsUpdate=!0,Ea(C,Y,dt),C.side=as,C.needsUpdate=!0,Ea(C,Y,dt),C.side=Bi):Ea(C,Y,dt)}this.compile=function(C,Y,dt=null){dt===null&&(dt=C),I=Rt.get(dt),I.init(Y),F.push(I),dt.traverseVisible(function(at){at.isLight&&at.layers.test(Y.layers)&&(I.pushLight(at),at.castShadow&&I.pushShadow(at))}),C!==dt&&C.traverseVisible(function(at){at.isLight&&at.layers.test(Y.layers)&&(I.pushLight(at),at.castShadow&&I.pushShadow(at))}),I.setupLights();const ct=new Set;return C.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const Pt=at.material;if(Pt)if(Array.isArray(Pt))for(let qt=0;qt<Pt.length;qt++){const Bt=Pt[qt];Kr(Bt,dt,at),ct.add(Bt)}else Kr(Pt,dt,at),ct.add(Pt)}),I=F.pop(),ct},this.compileAsync=function(C,Y,dt=null){const ct=this.compile(C,Y,dt);return new Promise(at=>{function Pt(){if(ct.forEach(function(qt){E.get(qt).currentProgram.isReady()&&ct.delete(qt)}),ct.size===0){at(C);return}setTimeout(Pt,10)}me.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let Bs=null;function ul(C){Bs&&Bs(C)}function Is(){Di.stop()}function Hs(){Di.start()}const Di=new lx;Di.setAnimationLoop(ul),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(C){Bs=C,gt.setAnimationLoop(C),C===null?Di.stop():Di.start()},gt.addEventListener("sessionstart",Is),gt.addEventListener("sessionend",Hs),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){Ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(pt===!0)return;const dt=gt.enabled===!0&&gt.isPresenting===!0,ct=T!==null&&(K===null||dt)&&T.begin(N,K);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(Y),Y=gt.getCamera()),C.isScene===!0&&C.onBeforeRender(N,C,Y,K),I=Rt.get(C,F.length),I.init(Y),F.push(I),ie.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Et.setFromProjectionMatrix(ie,Gi,Y.reversedDepth),Dt=this.localClippingEnabled,Nt=Ct.init(this.clippingPlanes,Dt),D=ee.get(C,B.length),D.init(),B.push(D),gt.enabled===!0&&gt.isPresenting===!0){const qt=N.xr.getDepthSensingMesh();qt!==null&&Gs(qt,Y,-1/0,N.sortObjects)}Gs(C,Y,0,N.sortObjects),D.finish(),N.sortObjects===!0&&D.sort(Mt,At),jt=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,jt&&zt.addToRenderList(D,C),this.info.render.frame++,Nt===!0&&Ct.beginShadows();const at=I.state.shadowsArray;if(Ht.render(at,C,Y),Nt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ct&&T.hasRenderPass())===!1){const qt=D.opaque,Bt=D.transmissive;if(I.setupLights(),Y.isArrayCamera){const Jt=Y.cameras;if(Bt.length>0)for(let ne=0,oe=Jt.length;ne<oe;ne++){const fe=Jt[ne];rn(qt,Bt,C,fe)}jt&&zt.render(C);for(let ne=0,oe=Jt.length;ne<oe;ne++){const fe=Jt[ne];Si(D,C,fe,fe.viewport)}}else Bt.length>0&&rn(qt,Bt,C,Y),jt&&zt.render(C),Si(D,C,Y)}K!==null&&et===0&&(Q.updateMultisampleRenderTarget(K),Q.updateRenderTargetMipmap(K)),ct&&T.end(N),C.isScene===!0&&C.onAfterRender(N,C,Y),Ut.resetDefaultState(),nt=-1,$=null,F.pop(),F.length>0?(I=F[F.length-1],Nt===!0&&Ct.setGlobalState(N.clippingPlanes,I.state.camera)):I=null,B.pop(),B.length>0?D=B[B.length-1]:D=null};function Gs(C,Y,dt,ct){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)dt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)I.pushLight(C),C.castShadow&&I.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Et.intersectsSprite(C)){ct&&Vt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ie);const qt=Ft.update(C),Bt=C.material;Bt.visible&&D.push(C,qt,Bt,dt,Vt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Et.intersectsObject(C))){const qt=Ft.update(C),Bt=C.material;if(ct&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Vt.copy(C.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),Vt.copy(qt.boundingSphere.center)),Vt.applyMatrix4(C.matrixWorld).applyMatrix4(ie)),Array.isArray(Bt)){const Jt=qt.groups;for(let ne=0,oe=Jt.length;ne<oe;ne++){const fe=Jt[ne],Zt=Bt[fe.materialIndex];Zt&&Zt.visible&&D.push(C,qt,Zt,dt,Vt.z,fe)}}else Bt.visible&&D.push(C,qt,Bt,dt,Vt.z,null)}}const Pt=C.children;for(let qt=0,Bt=Pt.length;qt<Bt;qt++)Gs(Pt[qt],Y,dt,ct)}function Si(C,Y,dt,ct){const{opaque:at,transmissive:Pt,transparent:qt}=C;I.setupLightsView(dt),Nt===!0&&Ct.setGlobalState(N.clippingPlanes,dt),ct&&Wt.viewport(L.copy(ct)),at.length>0&&pn(at,Y,dt),Pt.length>0&&pn(Pt,Y,dt),qt.length>0&&pn(qt,Y,dt),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function rn(C,Y,dt,ct){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ct.id]===void 0){const Zt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ct.id]=new ki(1,1,{generateMipmaps:!0,type:Zt?Sa:ri,minFilter:Os,samples:Math.max(4,Ae.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace})}const Pt=I.state.transmissionRenderTarget[ct.id],qt=ct.viewport||L;Pt.setSize(qt.z*N.transmissionResolutionScale,qt.w*N.transmissionResolutionScale);const Bt=N.getRenderTarget(),Jt=N.getActiveCubeFace(),ne=N.getActiveMipmapLevel();N.setRenderTarget(Pt),N.getClearColor(it),vt=N.getClearAlpha(),vt<1&&N.setClearColor(16777215,.5),N.clear(),jt&&zt.render(dt);const oe=N.toneMapping;N.toneMapping=Vi;const fe=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),I.setupLightsView(ct),Nt===!0&&Ct.setGlobalState(N.clippingPlanes,ct),pn(C,dt,ct),Q.updateMultisampleRenderTarget(Pt),Q.updateRenderTargetMipmap(Pt),me.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let _e=0,Qe=Y.length;_e<Qe;_e++){const Je=Y[_e],{object:Oe,geometry:mn,material:Qt,group:Pn}=Je;if(Qt.side===Bi&&Oe.layers.test(ct.layers)){const ue=Qt.side;Qt.side=jn,Qt.needsUpdate=!0,ji(Oe,dt,ct,mn,Qt,Pn),Qt.side=ue,Qt.needsUpdate=!0,Zt=!0}}Zt===!0&&(Q.updateMultisampleRenderTarget(Pt),Q.updateRenderTargetMipmap(Pt))}N.setRenderTarget(Bt,Jt,ne),N.setClearColor(it,vt),fe!==void 0&&(ct.viewport=fe),N.toneMapping=oe}function pn(C,Y,dt){const ct=Y.isScene===!0?Y.overrideMaterial:null;for(let at=0,Pt=C.length;at<Pt;at++){const qt=C[at],{object:Bt,geometry:Jt,group:ne}=qt;let oe=qt.material;oe.allowOverride===!0&&ct!==null&&(oe=ct),Bt.layers.test(dt.layers)&&ji(Bt,Y,dt,Jt,oe,ne)}}function ji(C,Y,dt,ct,at,Pt){C.onBeforeRender(N,Y,dt,ct,at,Pt),C.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),at.onBeforeRender(N,Y,dt,ct,C,Pt),at.transparent===!0&&at.side===Bi&&at.forceSinglePass===!1?(at.side=jn,at.needsUpdate=!0,N.renderBufferDirect(dt,Y,ct,at,C,Pt),at.side=as,at.needsUpdate=!0,N.renderBufferDirect(dt,Y,ct,at,C,Pt),at.side=Bi):N.renderBufferDirect(dt,Y,ct,at,C,Pt),C.onAfterRender(N,Y,dt,ct,at,Pt)}function Ea(C,Y,dt){Y.isScene!==!0&&(Y=re);const ct=E.get(C),at=I.state.lights,Pt=I.state.shadowsArray,qt=at.state.version,Bt=Lt.getParameters(C,at.state,Pt,Y,dt),Jt=Lt.getProgramCacheKey(Bt);let ne=ct.programs;ct.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Y.environment:null,ct.fog=Y.fog;const oe=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ct.envMap=xt.get(C.envMap||ct.environment,oe),ct.envMapRotation=ct.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,ne===void 0&&(C.addEventListener("dispose",Ue),ne=new Map,ct.programs=ne);let fe=ne.get(Jt);if(fe!==void 0){if(ct.currentProgram===fe&&ct.lightsStateVersion===qt)return dl(C,Bt),fe}else Bt.uniforms=Lt.getUniforms(C),C.onBeforeCompile(Bt,N),fe=Lt.acquireProgram(Bt,Jt),ne.set(Jt,fe),ct.uniforms=Bt.uniforms;const Zt=ct.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Zt.clippingPlanes=Ct.uniform),dl(C,Bt),ct.needsLights=Qr(C),ct.lightsStateVersion=qt,ct.needsLights&&(Zt.ambientLightColor.value=at.state.ambient,Zt.lightProbe.value=at.state.probe,Zt.directionalLights.value=at.state.directional,Zt.directionalLightShadows.value=at.state.directionalShadow,Zt.spotLights.value=at.state.spot,Zt.spotLightShadows.value=at.state.spotShadow,Zt.rectAreaLights.value=at.state.rectArea,Zt.ltc_1.value=at.state.rectAreaLTC1,Zt.ltc_2.value=at.state.rectAreaLTC2,Zt.pointLights.value=at.state.point,Zt.pointLightShadows.value=at.state.pointShadow,Zt.hemisphereLights.value=at.state.hemi,Zt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Zt.spotLightMatrix.value=at.state.spotLightMatrix,Zt.spotLightMap.value=at.state.spotLightMap,Zt.pointShadowMatrix.value=at.state.pointShadowMatrix),ct.currentProgram=fe,ct.uniformsList=null,fe}function fl(C){if(C.uniformsList===null){const Y=C.currentProgram.getUniforms();C.uniformsList=ru.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function dl(C,Y){const dt=E.get(C);dt.outputColorSpace=Y.outputColorSpace,dt.batching=Y.batching,dt.batchingColor=Y.batchingColor,dt.instancing=Y.instancing,dt.instancingColor=Y.instancingColor,dt.instancingMorph=Y.instancingMorph,dt.skinning=Y.skinning,dt.morphTargets=Y.morphTargets,dt.morphNormals=Y.morphNormals,dt.morphColors=Y.morphColors,dt.morphTargetsCount=Y.morphTargetsCount,dt.numClippingPlanes=Y.numClippingPlanes,dt.numIntersection=Y.numClipIntersection,dt.vertexAlphas=Y.vertexAlphas,dt.vertexTangents=Y.vertexTangents,dt.toneMapping=Y.toneMapping}function hl(C,Y,dt,ct,at){Y.isScene!==!0&&(Y=re),Q.resetTextureUnits();const Pt=Y.fog,qt=ct.isMeshStandardMaterial||ct.isMeshLambertMaterial||ct.isMeshPhongMaterial?Y.environment:null,Bt=K===null?N.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Wr,Jt=ct.isMeshStandardMaterial||ct.isMeshLambertMaterial&&!ct.envMap||ct.isMeshPhongMaterial&&!ct.envMap,ne=xt.get(ct.envMap||qt,Jt),oe=ct.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,fe=!!dt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Zt=!!dt.morphAttributes.position,_e=!!dt.morphAttributes.normal,Qe=!!dt.morphAttributes.color;let Je=Vi;ct.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Je=N.toneMapping);const Oe=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,mn=Oe!==void 0?Oe.length:0,Qt=E.get(ct),Pn=I.state.lights;if(Nt===!0&&(Dt===!0||C!==$)){const ln=C===$&&ct.id===nt;Ct.setState(ct,C,ln)}let ue=!1;ct.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Pn.state.version||Qt.outputColorSpace!==Bt||at.isBatchedMesh&&Qt.batching===!1||!at.isBatchedMesh&&Qt.batching===!0||at.isBatchedMesh&&Qt.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&Qt.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&Qt.instancing===!1||!at.isInstancedMesh&&Qt.instancing===!0||at.isSkinnedMesh&&Qt.skinning===!1||!at.isSkinnedMesh&&Qt.skinning===!0||at.isInstancedMesh&&Qt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Qt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Qt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Qt.instancingMorph===!1&&at.morphTexture!==null||Qt.envMap!==ne||ct.fog===!0&&Qt.fog!==Pt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==Ct.numPlanes||Qt.numIntersection!==Ct.numIntersection)||Qt.vertexAlphas!==oe||Qt.vertexTangents!==fe||Qt.morphTargets!==Zt||Qt.morphNormals!==_e||Qt.morphColors!==Qe||Qt.toneMapping!==Je||Qt.morphTargetsCount!==mn)&&(ue=!0):(ue=!0,Qt.__version=ct.version);let Fn=Qt.currentProgram;ue===!0&&(Fn=Ea(ct,Y,at));let Yn=!1,yi=!1,Zn=!1;const Be=Fn.getUniforms(),on=Qt.uniforms;if(Wt.useProgram(Fn.program)&&(Yn=!0,yi=!0,Zn=!0),ct.id!==nt&&(nt=ct.id,yi=!0),Yn||$!==C){Wt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Be.setValue(k,"projectionMatrix",C.projectionMatrix),Be.setValue(k,"viewMatrix",C.matrixWorldInverse);const Mi=Be.map.cameraPosition;Mi!==void 0&&Mi.setValue(k,Gt.setFromMatrixPosition(C.matrixWorld)),Ae.logarithmicDepthBuffer&&Be.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&Be.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),$!==C&&($=C,yi=!0,Zn=!0)}if(Qt.needsLights&&(Pn.state.directionalShadowMap.length>0&&Be.setValue(k,"directionalShadowMap",Pn.state.directionalShadowMap,Q),Pn.state.spotShadowMap.length>0&&Be.setValue(k,"spotShadowMap",Pn.state.spotShadowMap,Q),Pn.state.pointShadowMap.length>0&&Be.setValue(k,"pointShadowMap",Pn.state.pointShadowMap,Q)),at.isSkinnedMesh){Be.setOptional(k,at,"bindMatrix"),Be.setOptional(k,at,"bindMatrixInverse");const ln=at.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Be.setValue(k,"boneTexture",ln.boneTexture,Q))}at.isBatchedMesh&&(Be.setOptional(k,at,"batchingTexture"),Be.setValue(k,"batchingTexture",at._matricesTexture,Q),Be.setOptional(k,at,"batchingIdTexture"),Be.setValue(k,"batchingIdTexture",at._indirectTexture,Q),Be.setOptional(k,at,"batchingColorTexture"),at._colorsTexture!==null&&Be.setValue(k,"batchingColorTexture",at._colorsTexture,Q));const zn=dt.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&kt.update(at,dt,Fn),(yi||Qt.receiveShadow!==at.receiveShadow)&&(Qt.receiveShadow=at.receiveShadow,Be.setValue(k,"receiveShadow",at.receiveShadow)),(ct.isMeshStandardMaterial||ct.isMeshLambertMaterial||ct.isMeshPhongMaterial)&&ct.envMap===null&&Y.environment!==null&&(on.envMapIntensity.value=Y.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=SR()),yi&&(Be.setValue(k,"toneMappingExposure",N.toneMappingExposure),Qt.needsLights&&ss(on,Zn),Pt&&ct.fog===!0&&te.refreshFogUniforms(on,Pt),te.refreshMaterialUniforms(on,ct,rt,j,I.state.transmissionRenderTarget[C.id]),ru.upload(k,fl(Qt),on,Q)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(ru.upload(k,fl(Qt),on,Q),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&Be.setValue(k,"center",at.center),Be.setValue(k,"modelViewMatrix",at.modelViewMatrix),Be.setValue(k,"normalMatrix",at.normalMatrix),Be.setValue(k,"modelMatrix",at.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const ln=ct.uniformsGroups;for(let Mi=0,Yi=ln.length;Mi<Yi;Mi++){const Vs=ln[Mi];Xt.update(Vs,Fn),Xt.bind(Vs,Fn)}}return Fn}function ss(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Qr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return et},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(C,Y,dt){const ct=E.get(C);ct.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),E.get(C.texture).__webglTexture=Y,E.get(C.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:dt,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){const dt=E.get(C);dt.__webglFramebuffer=Y,dt.__useDefaultFramebuffer=Y===void 0};const ba=k.createFramebuffer();this.setRenderTarget=function(C,Y=0,dt=0){K=C,G=Y,et=dt;let ct=null,at=!1,Pt=!1;if(C){const Bt=E.get(C);if(Bt.__useDefaultFramebuffer!==void 0){Wt.bindFramebuffer(k.FRAMEBUFFER,Bt.__webglFramebuffer),L.copy(C.viewport),z.copy(C.scissor),W=C.scissorTest,Wt.viewport(L),Wt.scissor(z),Wt.setScissorTest(W),nt=-1;return}else if(Bt.__webglFramebuffer===void 0)Q.setupRenderTarget(C);else if(Bt.__hasExternalTextures)Q.rebindTextures(C,E.get(C.texture).__webglTexture,E.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const oe=C.depthTexture;if(Bt.__boundDepthTexture!==oe){if(oe!==null&&E.has(oe)&&(C.width!==oe.image.width||C.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(C)}}const Jt=C.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Pt=!0);const ne=E.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ne[Y])?ct=ne[Y][dt]:ct=ne[Y],at=!0):C.samples>0&&Q.useMultisampledRTT(C)===!1?ct=E.get(C).__webglMultisampledFramebuffer:Array.isArray(ne)?ct=ne[dt]:ct=ne,L.copy(C.viewport),z.copy(C.scissor),W=C.scissorTest}else L.copy(J).multiplyScalar(rt).floor(),z.copy(H).multiplyScalar(rt).floor(),W=ft;if(dt!==0&&(ct=ba),Wt.bindFramebuffer(k.FRAMEBUFFER,ct)&&Wt.drawBuffers(C,ct),Wt.viewport(L),Wt.scissor(z),Wt.setScissorTest(W),at){const Bt=E.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Bt.__webglTexture,dt)}else if(Pt){const Bt=Y;for(let Jt=0;Jt<C.textures.length;Jt++){const ne=E.get(C.textures[Jt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Jt,ne.__webglTexture,dt,Bt)}}else if(C!==null&&dt!==0){const Bt=E.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Bt.__webglTexture,dt)}nt=-1},this.readRenderTargetPixels=function(C,Y,dt,ct,at,Pt,qt,Bt=0){if(!(C&&C.isWebGLRenderTarget)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&qt!==void 0&&(Jt=Jt[qt]),Jt){Wt.bindFramebuffer(k.FRAMEBUFFER,Jt);try{const ne=C.textures[Bt],oe=ne.format,fe=ne.type;if(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Bt),!Ae.textureFormatReadable(oe)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(fe)){Ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-ct&&dt>=0&&dt<=C.height-at&&k.readPixels(Y,dt,ct,at,Ot.convert(oe),Ot.convert(fe),Pt)}finally{const ne=K!==null?E.get(K).__webglFramebuffer:null;Wt.bindFramebuffer(k.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(C,Y,dt,ct,at,Pt,qt,Bt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=E.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&qt!==void 0&&(Jt=Jt[qt]),Jt)if(Y>=0&&Y<=C.width-ct&&dt>=0&&dt<=C.height-at){Wt.bindFramebuffer(k.FRAMEBUFFER,Jt);const ne=C.textures[Bt],oe=ne.format,fe=ne.type;if(C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Bt),!Ae.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Zt),k.bufferData(k.PIXEL_PACK_BUFFER,Pt.byteLength,k.STREAM_READ),k.readPixels(Y,dt,ct,at,Ot.convert(oe),Ot.convert(fe),0);const _e=K!==null?E.get(K).__webglFramebuffer:null;Wt.bindFramebuffer(k.FRAMEBUFFER,_e);const Qe=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await FM(k,Qe,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Zt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Pt),k.deleteBuffer(Zt),k.deleteSync(Qe),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,dt=0){const ct=Math.pow(2,-dt),at=Math.floor(C.image.width*ct),Pt=Math.floor(C.image.height*ct),qt=Y!==null?Y.x:0,Bt=Y!==null?Y.y:0;Q.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,dt,0,0,qt,Bt,at,Pt),Wt.unbindTexture()};const Ta=k.createFramebuffer(),rs=k.createFramebuffer();this.copyTextureToTexture=function(C,Y,dt=null,ct=null,at=0,Pt=0){let qt,Bt,Jt,ne,oe,fe,Zt,_e,Qe;const Je=C.isCompressedTexture?C.mipmaps[Pt]:C.image;if(dt!==null)qt=dt.max.x-dt.min.x,Bt=dt.max.y-dt.min.y,Jt=dt.isBox3?dt.max.z-dt.min.z:1,ne=dt.min.x,oe=dt.min.y,fe=dt.isBox3?dt.min.z:0;else{const on=Math.pow(2,-at);qt=Math.floor(Je.width*on),Bt=Math.floor(Je.height*on),C.isDataArrayTexture?Jt=Je.depth:C.isData3DTexture?Jt=Math.floor(Je.depth*on):Jt=1,ne=0,oe=0,fe=0}ct!==null?(Zt=ct.x,_e=ct.y,Qe=ct.z):(Zt=0,_e=0,Qe=0);const Oe=Ot.convert(Y.format),mn=Ot.convert(Y.type);let Qt;Y.isData3DTexture?(Q.setTexture3D(Y,0),Qt=k.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(Q.setTexture2DArray(Y,0),Qt=k.TEXTURE_2D_ARRAY):(Q.setTexture2D(Y,0),Qt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const Pn=k.getParameter(k.UNPACK_ROW_LENGTH),ue=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Fn=k.getParameter(k.UNPACK_SKIP_PIXELS),Yn=k.getParameter(k.UNPACK_SKIP_ROWS),yi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Je.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Je.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ne),k.pixelStorei(k.UNPACK_SKIP_ROWS,oe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,fe);const Zn=C.isDataArrayTexture||C.isData3DTexture,Be=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){const on=E.get(C),zn=E.get(Y),ln=E.get(on.__renderTarget),Mi=E.get(zn.__renderTarget);Wt.bindFramebuffer(k.READ_FRAMEBUFFER,ln.__webglFramebuffer),Wt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Yi=0;Yi<Jt;Yi++)Zn&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(C).__webglTexture,at,fe+Yi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Pt,Qe+Yi)),k.blitFramebuffer(ne,oe,qt,Bt,Zt,_e,qt,Bt,k.DEPTH_BUFFER_BIT,k.NEAREST);Wt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(at!==0||C.isRenderTargetTexture||E.has(C)){const on=E.get(C),zn=E.get(Y);Wt.bindFramebuffer(k.READ_FRAMEBUFFER,Ta),Wt.bindFramebuffer(k.DRAW_FRAMEBUFFER,rs);for(let ln=0;ln<Jt;ln++)Zn?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,on.__webglTexture,at,fe+ln):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,on.__webglTexture,at),Be?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,zn.__webglTexture,Pt,Qe+ln):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,zn.__webglTexture,Pt),at!==0?k.blitFramebuffer(ne,oe,qt,Bt,Zt,_e,qt,Bt,k.COLOR_BUFFER_BIT,k.NEAREST):Be?k.copyTexSubImage3D(Qt,Pt,Zt,_e,Qe+ln,ne,oe,qt,Bt):k.copyTexSubImage2D(Qt,Pt,Zt,_e,ne,oe,qt,Bt);Wt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Be?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Qt,Pt,Zt,_e,Qe,qt,Bt,Jt,Oe,mn,Je.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(Qt,Pt,Zt,_e,Qe,qt,Bt,Jt,Oe,Je.data):k.texSubImage3D(Qt,Pt,Zt,_e,Qe,qt,Bt,Jt,Oe,mn,Je):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Pt,Zt,_e,qt,Bt,Oe,mn,Je.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Pt,Zt,_e,Je.width,Je.height,Oe,Je.data):k.texSubImage2D(k.TEXTURE_2D,Pt,Zt,_e,qt,Bt,Oe,mn,Je);k.pixelStorei(k.UNPACK_ROW_LENGTH,Pn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ue),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Fn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Yn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,yi),Pt===0&&Y.generateMipmaps&&k.generateMipmap(Qt),Wt.unbindTexture()},this.initRenderTarget=function(C){E.get(C).__webglFramebuffer===void 0&&Q.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Q.setTextureCube(C,0):C.isData3DTexture?Q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Q.setTexture2DArray(C,0):Q.setTexture2D(C,0),Wt.unbindTexture()},this.resetState=function(){G=0,et=0,K=null,Wt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const tu=16,Jo=400,MR=[.5,.8,.95,.6,.38,.14,.05,.55,.5,.8,.95,.6,.38,.14,.05,.55],Br=3,Cv=Math.PI*.75,wv=2.6,gh=1.4,$o=1.8;function ER({eegData:o,yScale:t,onExit:i}){const s=_t.useRef(null),l=_t.useRef(null),c=_t.useRef(null),d=_t.useRef(null),p=_t.useRef([]),m=_t.useRef(null),h=_t.useRef(null),v=_t.useRef(!1),y=_t.useRef(new AE),g=_t.useRef(o),M=_t.useRef(t),b=_t.useRef(i);g.current=o,M.current=t,b.current=i;const w=_t.useCallback(()=>{if(v.current)return;v.current=!0,m.current&&(m.current.end().catch(()=>{}),m.current=null),h.current!=null&&(cancelAnimationFrame(h.current),h.current=null);const x=l.current;x&&(x.xr.enabled=!1,x.setAnimationLoop(null),x.dispose(),l.current=null),p.current=[]},[]);return _t.useEffect(()=>{const x=s.current;if(!x)return;v.current=!1;const _=y.current;_.start();const A=new JM;A.background=new ye(198159),A.fog=new bp(198159,.07),c.current=A;const U=new si(80,window.innerWidth/window.innerHeight,.05,60);U.position.set(0,gh,0),d.current=U;const D=new yR({antialias:!0,alpha:!1});D.setPixelRatio(Math.min(window.devicePixelRatio,2)),D.setSize(window.innerWidth,window.innerHeight),D.xr.enabled=!0,D.toneMapping=pp,D.toneMappingExposure=1.2,x.appendChild(D.domElement),l.current=D;const I=new EE(1122884,.8);A.add(I);const B=new ME(4491519,1.5,25);B.position.set(0,gh+1,0),A.add(B);const F=1500,T=new Float32Array(F*3),N=new Float32Array(F*3);for(let rt=0;rt<F;rt++){const Mt=10+Math.random()*15,At=Math.random()*Math.PI*2,J=Math.acos(2*Math.random()-1);T[rt*3]=Mt*Math.sin(J)*Math.cos(At),T[rt*3+1]=Mt*Math.sin(J)*Math.sin(At),T[rt*3+2]=Mt*Math.cos(J),N[rt*3]=.7+Math.random()*.3,N[rt*3+1]=.75+Math.random()*.25,N[rt*3+2]=.85+Math.random()*.15}const pt=new Ln;pt.setAttribute("position",new Dn(T,3)),pt.setAttribute("color",new Dn(N,3));const G=new lp({size:.05,vertexColors:!0,transparent:!0,opacity:.85,sizeAttenuation:!0}),et=new J_(pt,G);A.add(et);const nt=[{color:4853888,center:[5,2,-10],count:400,spread:5},{color:666208,center:[-6,1,-9],count:350,spread:4},{color:14928,center:[1,4,-12],count:300,spread:4}].map(({color:rt,center:Mt,count:At,spread:J})=>{const H=new Float32Array(At*3);for(let Dt=0;Dt<At;Dt++)H[Dt*3]=Mt[0]+(Math.random()-.5)*J,H[Dt*3+1]=Mt[1]+(Math.random()-.5)*J,H[Dt*3+2]=Mt[2]+(Math.random()-.5)*J;const ft=new Ln;ft.setAttribute("position",new Dn(H,3));const Et=new lp({color:rt,size:.12,transparent:!0,opacity:.16,sizeAttenuation:!0,depthWrite:!1}),Nt=new J_(ft,Et);return A.add(Nt),Nt}),$=[],L=new ye;for(let rt=0;rt<tu;rt++){const Mt=rt/(tu-1),At=-Cv/2+Mt*Cv,J=gh+wv/2-Mt*wv,H=MR[rt],ft=new Float32Array(Jo*3),Et=new Float32Array(Jo*3),Nt=new Ln;Nt.setAttribute("position",new Dn(ft,3)),Nt.setAttribute("color",new Dn(Et,3)),Nt.setDrawRange(0,0);const Dt=new Cp({vertexColors:!0,transparent:!0,opacity:.92,linewidth:2}),ie=new ex(Nt,Dt);A.add(ie);const Gt=document.createElement("canvas");Gt.width=128,Gt.height=48;const Vt=Gt.getContext("2d");Vt.clearRect(0,0,128,48),L.setHSL(H,.9,.7),Vt.font="bold 28px monospace",Vt.fillStyle=`#${L.getHexString()}`,Vt.textAlign="center",Vt.textBaseline="middle",Vt.fillText(`Ch ${rt+1}`,64,24);const re=new fE(Gt),jt=new $v({map:re,transparent:!0,opacity:.65}),he=new aE(jt);he.scale.set(.4,.15,1);const k=Math.sin(At)*(Br+.05),Te=-Math.cos(At)*(Br+.05),me=k-Math.cos(At)*($o/2),Ae=Te+Math.sin(At)*($o/2);he.position.set(me-Math.cos(At)*.3,J,Ae+Math.sin(At)*.3),A.add(he);const Wt=new cl($o+.3,.14),O=new Ap({color:new ye().setHSL(H,1,.55),transparent:!0,opacity:.05,side:Bi,depthWrite:!1}),E=new Wi(Wt,O);E.position.set(Math.sin(At)*Br,J,-Math.cos(At)*Br),E.rotation.y=At,A.add(E),$.push({line:ie,geometry:Nt,positions:ft,colors:Et,angle:At,yPos:J,glowPlane:E,baseHue:H})}p.current=$;const z=new RE(12,24,660784,396830);A.add(z);function W(rt){const Mt=g.current,At=Mt.buffers.current;if(!At)return;const J=Mt.samplesInBuffer.current,H=Mt.writeIndex.current,ft=Mt.bufferSize;if(J<2)return;const Et=J>Jo?Math.floor(J/Jo):1,Nt=Math.min(Jo,Math.ceil(J/Et)),Dt=M.current||100;for(let ie=0;ie<tu;ie++){const{positions:Gt,colors:Vt,geometry:re,angle:jt,yPos:he,glowPlane:k,baseHue:Te}=$[ie],me=At[ie],Ae=Math.sin(jt)*Br,Wt=-Math.cos(jt)*Br,O=-Math.cos(jt),E=-Math.sin(jt),Q=(Te+Math.sin(rt*.08+ie*.4)*.08+1)%1,xt=.85+Math.sin(rt*.15+ie)*.1;let Tt=0;for(let Ft=0;Ft<Nt;Ft++){const Lt=Ft*Et,te=(H-J+Lt+ft)%ft,ee=Ft/Math.max(1,Nt-1),Rt=me[te]/Dt;Tt+=Rt*Rt,Gt[Ft*3]=Ae+O*(ee-.5)*$o,Gt[Ft*3+1]=he+Rt*.14,Gt[Ft*3+2]=Wt+E*(ee-.5)*$o;const Ct=Math.sin(ee*Math.PI),Ht=.35+Math.min(Math.abs(Rt)*3,1)*.65,zt=Math.min(.95,.5*Ct+Ht*.5);L.setHSL(Q,xt,zt),Vt[Ft*3]=L.r,Vt[Ft*3+1]=L.g,Vt[Ft*3+2]=L.b}re.attributes.position.needsUpdate=!0,re.attributes.color.needsUpdate=!0,re.setDrawRange(0,Nt);const mt=Math.sqrt(Tt/Math.max(1,Nt));k.material.opacity=Math.min(.2,.03+mt*.9)}I.intensity=.6+Math.sin(rt*.5)*.15,B.intensity=1.2+Math.sin(rt*.3)*.4,et.rotation.y=rt*.005,et.rotation.x=Math.sin(rt*.003)*.02,nt.forEach((ie,Gt)=>{ie.material.opacity=.1+Math.sin(rt*.2+Gt*2.1)*.06,ie.rotation.y=rt*.003*(Gt%2===0?1:-1)})}let it=null;async function vt(){if(navigator.xr)for(const rt of["immersive-vr","immersive-ar","inline"])try{if(await navigator.xr.isSessionSupported(rt)){it=rt;break}}catch{}if(it&&it!=="inline")try{const rt=await navigator.xr.requestSession(it,{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});m.current=rt,D.xr.setSession(rt),rt.addEventListener("end",()=>{m.current=null,b.current()}),D.setAnimationLoop(()=>{W(_.getElapsedTime()),D.render(A,U)});return}catch{}P()}function P(){let rt=!1,Mt=0,At=0,J=0,H=0,ft=!0;const Et=D.domElement,Nt=Vt=>{rt=!0,ft=!1,Mt=Vt.clientX,At=Vt.clientY},Dt=()=>{rt=!1},ie=Vt=>{rt&&(J-=(Vt.clientX-Mt)*.003,H-=(Vt.clientY-At)*.003,H=Math.max(-Math.PI/3,Math.min(Math.PI/3,H)),Mt=Vt.clientX,At=Vt.clientY)};Et.addEventListener("pointerdown",Nt),Et.addEventListener("pointerup",Dt),Et.addEventListener("pointermove",ie);function Gt(){const Vt=_.getElapsedTime();ft&&(J=Vt*.04),U.rotation.order="YXZ",U.rotation.y=J,U.rotation.x=H,W(Vt),D.render(A,U),h.current=requestAnimationFrame(Gt)}h.current=requestAnimationFrame(Gt)}vt();function j(){l.current&&(U.aspect=window.innerWidth/window.innerHeight,U.updateProjectionMatrix(),D.setSize(window.innerWidth,window.innerHeight))}return window.addEventListener("resize",j),()=>{window.removeEventListener("resize",j),w(),x.contains(D.domElement)&&x.removeChild(D.domElement)}},[]),X.jsxs("div",{className:"xr-overlay",children:[X.jsx("div",{className:"xr-container",ref:s}),X.jsxs("div",{className:"xr-hud",children:[X.jsx("button",{className:"btn xr-exit-btn",onClick:()=>{w(),b.current()},children:"✕ Exit XR"}),X.jsxs("div",{className:"xr-info",children:[X.jsx("span",{className:"xr-badge",children:"WebXR"}),X.jsxs("span",{children:[tu," channels · ±",t," µV"]})]})]})]})}const ou=16,Dv=new Set(Array.from({length:ou},(o,t)=>t)),bR=new Set([0,1,2,3]),TR=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],AR=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"},{value:16,label:"16s"}];function RR(){const[o,t]=_t.useState("live"),[i,s]=_t.useState(null),[l,c]=_t.useState(!1),[d,p]=_t.useState(!0),[m,h]=_t.useState(!1),[v,y]=_t.useState(1),[g,M]=_t.useState(40),[b,w]=_t.useState(4),[x,_]=_t.useState(100),[A,U]=_t.useState(null),[D,I]=_t.useState(!1),[B,F]=_t.useState(()=>window.innerWidth<768?new Set(bR):new Set(Dv)),T=Ny(b),N=_t.useRef(B);N.current=B;const pt=_t.useCallback(W=>{F(it=>{const vt=new Set(it);return vt.has(W)?vt.delete(W):vt.add(W),vt})},[]),G=_t.useCallback(W=>{F(W?new Set(Dv):new Set)},[]);function et(){const W=!l;c(W),T.setPaused(W)}function K(){const W=!m;h(W),T.sendCommand({cmd:"set_filter",enabled:W,lowcut:parseFloat(v)||1,highcut:parseFloat(g)||40})}function nt(){T.sendCommand({cmd:T.recording?"stop_record":"start_record"})}function $(W){const it=Math.floor(W/60),vt=Math.floor(W%60);return`${String(it).padStart(2,"0")}:${String(vt).padStart(2,"0")}`}function L(W,it){m&&T.sendCommand({cmd:"set_filter",enabled:!0,lowcut:parseFloat(W)||1,highcut:parseFloat(it)||40})}const z=_t.useCallback(W=>{if(!N.current.has(W)){F(it=>{const vt=new Set(it);return vt.add(W),vt});return}U(it=>it===W?null:W)},[]);return _t.useEffect(()=>{function W(it){if(!(it.target.tagName==="INPUT"||it.target.tagName==="SELECT"||it.target.tagName==="TEXTAREA")){if(o!=="live"){it.code==="Escape"&&(o==="playback"?(t("sessions"),s(null)):o==="sessions"&&t("live"));return}switch(it.code){case"Space":it.preventDefault(),et();break;case"KeyR":nt();break;case"KeyF":p(vt=>!vt);break;case"KeyV":I(vt=>!vt);break;case"Escape":D?I(!1):A!==null?U(null):T.recordResult&&T.dismissRecordResult();break}}}return window.addEventListener("keydown",W),()=>window.removeEventListener("keydown",W)},[A,T.recordResult,o]),o==="playback"&&i?X.jsx(Dd,{children:X.jsx(tM,{filename:i,onBack:()=>{t("sessions"),s(null)}})}):o==="sessions"?X.jsx(Dd,{children:X.jsx(qy,{onSelect:W=>{s(W),t("playback")},onBack:()=>t("live")})}):(T.data.gridSuspended=A!==null&&B.has(A),X.jsxs(Dd,{children:[X.jsxs("header",{className:"header",children:[X.jsxs("h1",{children:["Pi",X.jsx("span",{children:"EEG"}),"-16"," ",X.jsx("small",{style:{fontWeight:400,color:"var(--text-dim)"},children:"Dashboard"})]}),X.jsxs("div",{className:"status-bar",children:[X.jsxs("span",{children:[X.jsx("span",{className:`status-dot${T.connected?" connected":""}`}),T.connected?" Connected":" Disconnected"]}),X.jsx("span",{className:`live-badge${l?" paused":""}`,children:l?"⏸ PAUSED":"● LIVE"}),X.jsx("span",{children:T.hz?`${T.hz} Hz`:"— Hz"}),X.jsxs("span",{children:[T.sampleCount.toLocaleString()," samples"]})]})]}),X.jsxs("div",{className:"controls",children:[X.jsx("button",{className:`btn${l?" active":""}`,onClick:et,children:l?"▶ Resume":"⏸ Pause"}),X.jsxs("button",{className:`btn btn-record${T.recording?" recording":""}`,onClick:nt,children:[X.jsx("span",{className:"rec-dot"}),T.recording?`⏹ Stop ${$(T.recordElapsed)}`:"⏺ Record"]}),X.jsxs("button",{className:`btn${m?" active":""}`,onClick:K,children:["Filter: ",m?"ON":"OFF"]}),X.jsxs("button",{className:`btn${d?" active":""}`,onClick:()=>p(W=>!W),children:["FFT ",d?"ON":"OFF"]}),X.jsx("button",{className:"btn btn-sessions",onClick:()=>t("sessions"),children:"Sessions"}),X.jsx("button",{className:"btn btn-xr",onClick:()=>I(!0),title:"Open EEG waves in immersive 3D / VR",children:"🥽 XR View"}),X.jsx("div",{className:"sep"}),X.jsxs("div",{className:"control-group",children:[X.jsx("label",{children:"Low"}),X.jsx("input",{type:"number",value:v,min:.1,max:50,step:.5,onChange:W=>{y(W.target.value),L(W.target.value,g)}})," ","Hz"]}),X.jsxs("div",{className:"control-group",children:[X.jsx("label",{children:"High"}),X.jsx("input",{type:"number",value:g,min:1,max:125,step:1,onChange:W=>{M(W.target.value),L(v,W.target.value)}})," ","Hz"]}),X.jsx("div",{className:"sep"}),X.jsxs("div",{className:"control-group",children:[X.jsx("label",{children:"Time window"}),X.jsx("select",{value:b,onChange:W=>w(parseInt(W.target.value)),children:AR.map(W=>X.jsx("option",{value:W.value,children:W.label},W.value))})]}),X.jsxs("div",{className:"control-group",children:[X.jsx("label",{children:"Scale"}),X.jsx("select",{value:x,onChange:W=>_(parseInt(W.target.value)),children:TR.map(W=>X.jsx("option",{value:W.value,children:W.label},W.value))})]})]}),X.jsxs("div",{className:"channel-selector",children:[X.jsx("span",{className:"cs-label",children:"Channels"}),X.jsx("button",{className:"cs-toggle",onClick:()=>G(!0),children:"All"}),X.jsx("button",{className:"cs-toggle",onClick:()=>G(!1),children:"None"}),X.jsx("div",{className:"cs-grid",children:Array.from({length:ou},(W,it)=>X.jsx("button",{className:`cs-ch${B.has(it)?" on":""}`,onClick:()=>pt(it),children:it+1},it))}),X.jsxs("span",{className:"cs-count",children:[B.size,"/",ou]})]}),X.jsxs("div",{className:`main-area${d?" with-fft":""}`,children:[A!==null&&B.has(A)&&X.jsx("div",{className:"expanded-overlay",onClick:()=>U(null),children:X.jsx("div",{className:"expanded-channel",onClick:W=>W.stopPropagation(),children:X.jsx(S_,{chIdx:A,eegData:T.data,yRange:x,expanded:!0,active:!0,onToggleExpand:()=>U(null)})})}),X.jsx("div",{className:"grid",children:Array.from({length:ou},(W,it)=>X.jsx(S_,{chIdx:it,eegData:T.data,yRange:x,active:B.has(it),onToggleExpand:()=>z(it)},it))}),d&&X.jsx(Xy,{eegData:T.data})]}),T.recordResult&&X.jsx("div",{className:"modal-overlay",children:X.jsxs("div",{className:"modal-card",children:[X.jsx("h2",{children:"Recording Complete"}),X.jsxs("div",{className:"modal-details",children:[X.jsxs("div",{className:"modal-row",children:[X.jsx("span",{className:"modal-label",children:"File"}),X.jsx("span",{className:"modal-value",children:T.recordResult.filename})]}),X.jsxs("div",{className:"modal-row",children:[X.jsx("span",{className:"modal-label",children:"Duration"}),X.jsx("span",{className:"modal-value",children:$(T.recordResult.duration)})]}),X.jsxs("div",{className:"modal-row",children:[X.jsx("span",{className:"modal-label",children:"Frames"}),X.jsx("span",{className:"modal-value",children:T.recordResult.frames.toLocaleString()})]}),X.jsxs("div",{className:"modal-row",children:[X.jsx("span",{className:"modal-label",children:"Saved to"}),X.jsx("span",{className:"modal-value modal-path",children:T.recordResult.path})]})]}),X.jsxs("div",{className:"modal-actions",children:[X.jsx("a",{className:"btn modal-btn-download",href:T.recordResult.downloadUrl,download:!0,children:"Download CSV"}),X.jsx("button",{className:"btn modal-btn-view",onClick:()=>{const W=T.recordResult.filename;T.dismissRecordResult(),s(W),t("playback")},children:"View Session"}),X.jsx("button",{className:"btn modal-btn-dismiss",onClick:T.dismissRecordResult,children:"Dismiss"})]})]})}),D&&X.jsx(ER,{eegData:T.data,yScale:x,onExit:()=>I(!1)}),X.jsx(Wy,{}),X.jsxs("footer",{className:"footer",children:[X.jsx("span",{children:"PiEEG-16-server · React Dashboard"}),X.jsxs("span",{className:"kbd-hints",children:[X.jsx("kbd",{children:"Space"})," Pause ",X.jsx("kbd",{children:"R"})," Record ",X.jsx("kbd",{children:"F"})," FFT ",X.jsx("kbd",{children:"V"})," XR ",X.jsx("kbd",{children:"Esc"})," Close ",X.jsx("kbd",{children:"P"})," Perf"]}),X.jsx("span",{children:"Battery powered only · Not a medical device"})]})]}))}wy.createRoot(document.getElementById("root")).render(X.jsx(yy.StrictMode,{children:X.jsx(RR,{})}));
