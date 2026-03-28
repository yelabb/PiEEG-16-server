var Ny=Object.defineProperty;var Uy=(r,t,i)=>t in r?Ny(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var Hi=(r,t,i)=>Uy(r,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Xv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Dd={exports:{}},jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_;function Ly(){if(g_)return jo;g_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:d,ref:l!==void 0?l:null,props:c}}return jo.Fragment=t,jo.jsx=i,jo.jsxs=i,jo}var __;function Oy(){return __||(__=1,Dd.exports=Ly()),Dd.exports}var L=Oy(),Nd={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function Py(){if(v_)return de;v_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),g=Symbol.iterator;function M(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,_={};function v(F,k,et){this.props=F,this.context=k,this.refs=_,this.updater=et||b}v.prototype.isReactComponent={},v.prototype.setState=function(F,k){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,k,"setState")},v.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function A(){}A.prototype=v.prototype;function D(F,k,et){this.props=F,this.context=k,this.refs=_,this.updater=et||b}var N=D.prototype=new A;N.constructor=D,R(N,v.prototype),N.isPureReactComponent=!0;var G=Array.isArray;function B(){}var z={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function O(F,k,et){var pt=et.ref;return{$$typeof:r,type:F,key:k,ref:pt!==void 0?pt:null,props:et}}function rt(F,k){return O(F.type,k,F.props)}function H(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function q(F){var k={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(et){return k[et]})}var Y=/\/+/g;function at(F,k){return typeof F=="object"&&F!==null&&F.key!=null?q(""+F.key):k.toString(36)}function tt(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(B,B):(F.status="pending",F.then(function(k){F.status==="pending"&&(F.status="fulfilled",F.value=k)},function(k){F.status==="pending"&&(F.status="rejected",F.reason=k)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function U(F,k,et,pt,Mt){var Z=typeof F;(Z==="undefined"||Z==="boolean")&&(F=null);var V=!1;if(F===null)V=!0;else switch(Z){case"bigint":case"string":case"number":V=!0;break;case"object":switch(F.$$typeof){case r:case t:V=!0;break;case x:return V=F._init,U(V(F._payload),k,et,pt,Mt)}}if(V)return Mt=Mt(F),V=pt===""?"."+at(F,0):pt,G(Mt)?(et="",V!=null&&(et=V.replace(Y,"$&/")+"/"),U(Mt,k,et,"",function(Nt){return Nt})):Mt!=null&&(H(Mt)&&(Mt=rt(Mt,et+(Mt.key==null||F&&F.key===Mt.key?"":(""+Mt.key).replace(Y,"$&/")+"/")+V)),k.push(Mt)),1;V=0;var ft=pt===""?".":pt+":";if(G(F))for(var St=0;St<F.length;St++)pt=F[St],Z=ft+at(pt,St),V+=U(pt,k,et,Z,Mt);else if(St=M(F),typeof St=="function")for(F=St.call(F),St=0;!(pt=F.next()).done;)pt=pt.value,Z=ft+at(pt,St++),V+=U(pt,k,et,Z,Mt);else if(Z==="object"){if(typeof F.then=="function")return U(tt(F),k,et,pt,Mt);throw k=String(F),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return V}function I(F,k,et){if(F==null)return F;var pt=[],Mt=0;return U(F,pt,"","",function(Z){return k.call(et,Z,Mt++)}),pt}function X(F){if(F._status===-1){var k=F._result;k=k(),k.then(function(et){(F._status===0||F._status===-1)&&(F._status=1,F._result=et)},function(et){(F._status===0||F._status===-1)&&(F._status=2,F._result=et)}),F._status===-1&&(F._status=0,F._result=k)}if(F._status===1)return F._result.default;throw F._result}var nt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},gt={map:I,forEach:function(F,k,et){I(F,function(){k.apply(this,arguments)},et)},count:function(F){var k=0;return I(F,function(){k++}),k},toArray:function(F){return I(F,function(k){return k})||[]},only:function(F){if(!H(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return de.Activity=S,de.Children=gt,de.Component=v,de.Fragment=i,de.Profiler=l,de.PureComponent=D,de.StrictMode=s,de.Suspense=m,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,de.__COMPILER_RUNTIME={__proto__:null,c:function(F){return z.H.useMemoCache(F)}},de.cache=function(F){return function(){return F.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(F,k,et){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var pt=R({},F.props),Mt=F.key;if(k!=null)for(Z in k.key!==void 0&&(Mt=""+k.key),k)!E.call(k,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&k.ref===void 0||(pt[Z]=k[Z]);var Z=arguments.length-2;if(Z===1)pt.children=et;else if(1<Z){for(var V=Array(Z),ft=0;ft<Z;ft++)V[ft]=arguments[ft+2];pt.children=V}return O(F.type,Mt,pt)},de.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},de.createElement=function(F,k,et){var pt,Mt={},Z=null;if(k!=null)for(pt in k.key!==void 0&&(Z=""+k.key),k)E.call(k,pt)&&pt!=="key"&&pt!=="__self"&&pt!=="__source"&&(Mt[pt]=k[pt]);var V=arguments.length-2;if(V===1)Mt.children=et;else if(1<V){for(var ft=Array(V),St=0;St<V;St++)ft[St]=arguments[St+2];Mt.children=ft}if(F&&F.defaultProps)for(pt in V=F.defaultProps,V)Mt[pt]===void 0&&(Mt[pt]=V[pt]);return O(F,Z,Mt)},de.createRef=function(){return{current:null}},de.forwardRef=function(F){return{$$typeof:p,render:F}},de.isValidElement=H,de.lazy=function(F){return{$$typeof:x,_payload:{_status:-1,_result:F},_init:X}},de.memo=function(F,k){return{$$typeof:h,type:F,compare:k===void 0?null:k}},de.startTransition=function(F){var k=z.T,et={};z.T=et;try{var pt=F(),Mt=z.S;Mt!==null&&Mt(et,pt),typeof pt=="object"&&pt!==null&&typeof pt.then=="function"&&pt.then(B,nt)}catch(Z){nt(Z)}finally{k!==null&&et.types!==null&&(k.types=et.types),z.T=k}},de.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},de.use=function(F){return z.H.use(F)},de.useActionState=function(F,k,et){return z.H.useActionState(F,k,et)},de.useCallback=function(F,k){return z.H.useCallback(F,k)},de.useContext=function(F){return z.H.useContext(F)},de.useDebugValue=function(){},de.useDeferredValue=function(F,k){return z.H.useDeferredValue(F,k)},de.useEffect=function(F,k){return z.H.useEffect(F,k)},de.useEffectEvent=function(F){return z.H.useEffectEvent(F)},de.useId=function(){return z.H.useId()},de.useImperativeHandle=function(F,k,et){return z.H.useImperativeHandle(F,k,et)},de.useInsertionEffect=function(F,k){return z.H.useInsertionEffect(F,k)},de.useLayoutEffect=function(F,k){return z.H.useLayoutEffect(F,k)},de.useMemo=function(F,k){return z.H.useMemo(F,k)},de.useOptimistic=function(F,k){return z.H.useOptimistic(F,k)},de.useReducer=function(F,k,et){return z.H.useReducer(F,k,et)},de.useRef=function(F){return z.H.useRef(F)},de.useState=function(F){return z.H.useState(F)},de.useSyncExternalStore=function(F,k,et){return z.H.useSyncExternalStore(F,k,et)},de.useTransition=function(){return z.H.useTransition()},de.version="19.2.4",de}var x_;function Sp(){return x_||(x_=1,Nd.exports=Py()),Nd.exports}var st=Sp();const Fy=Xv(st);var Ud={exports:{}},qo={},Ld={exports:{}},Od={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function Iy(){return S_||(S_=1,(function(r){function t(U,I){var X=U.length;U.push(I);t:for(;0<X;){var nt=X-1>>>1,gt=U[nt];if(0<l(gt,I))U[nt]=I,U[X]=gt,X=nt;else break t}}function i(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var I=U[0],X=U.pop();if(X!==I){U[0]=X;t:for(var nt=0,gt=U.length,F=gt>>>1;nt<F;){var k=2*(nt+1)-1,et=U[k],pt=k+1,Mt=U[pt];if(0>l(et,X))pt<gt&&0>l(Mt,et)?(U[nt]=Mt,U[pt]=X,nt=pt):(U[nt]=et,U[k]=X,nt=k);else if(pt<gt&&0>l(Mt,X))U[nt]=Mt,U[pt]=X,nt=pt;else break t}}return I}function l(U,I){var X=U.sortIndex-I.sortIndex;return X!==0?X:U.id-I.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();r.unstable_now=function(){return d.now()-p}}var m=[],h=[],x=1,S=null,g=3,M=!1,b=!1,R=!1,_=!1,v=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function N(U){for(var I=i(h);I!==null;){if(I.callback===null)s(h);else if(I.startTime<=U)s(h),I.sortIndex=I.expirationTime,t(m,I);else break;I=i(h)}}function G(U){if(R=!1,N(U),!b)if(i(m)!==null)b=!0,B||(B=!0,q());else{var I=i(h);I!==null&&tt(G,I.startTime-U)}}var B=!1,z=-1,E=5,O=-1;function rt(){return _?!0:!(r.unstable_now()-O<E)}function H(){if(_=!1,B){var U=r.unstable_now();O=U;var I=!0;try{t:{b=!1,R&&(R=!1,A(z),z=-1),M=!0;var X=g;try{e:{for(N(U),S=i(m);S!==null&&!(S.expirationTime>U&&rt());){var nt=S.callback;if(typeof nt=="function"){S.callback=null,g=S.priorityLevel;var gt=nt(S.expirationTime<=U);if(U=r.unstable_now(),typeof gt=="function"){S.callback=gt,N(U),I=!0;break e}S===i(m)&&s(m),N(U)}else s(m);S=i(m)}if(S!==null)I=!0;else{var F=i(h);F!==null&&tt(G,F.startTime-U),I=!1}}break t}finally{S=null,g=X,M=!1}I=void 0}}finally{I?q():B=!1}}}var q;if(typeof D=="function")q=function(){D(H)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,at=Y.port2;Y.port1.onmessage=H,q=function(){at.postMessage(null)}}else q=function(){v(H,0)};function tt(U,I){z=v(function(){U(r.unstable_now())},I)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(U){switch(g){case 1:case 2:case 3:var I=3;break;default:I=g}var X=g;g=I;try{return U()}finally{g=X}},r.unstable_requestPaint=function(){_=!0},r.unstable_runWithPriority=function(U,I){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var X=g;g=U;try{return I()}finally{g=X}},r.unstable_scheduleCallback=function(U,I,X){var nt=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?nt+X:nt):X=nt,U){case 1:var gt=-1;break;case 2:gt=250;break;case 5:gt=1073741823;break;case 4:gt=1e4;break;default:gt=5e3}return gt=X+gt,U={id:x++,callback:I,priorityLevel:U,startTime:X,expirationTime:gt,sortIndex:-1},X>nt?(U.sortIndex=X,t(h,U),i(m)===null&&U===i(h)&&(R?(A(z),z=-1):R=!0,tt(G,X-nt))):(U.sortIndex=gt,t(m,U),b||M||(b=!0,B||(B=!0,q()))),U},r.unstable_shouldYield=rt,r.unstable_wrapCallback=function(U){var I=g;return function(){var X=g;g=I;try{return U.apply(this,arguments)}finally{g=X}}}})(Od)),Od}var y_;function By(){return y_||(y_=1,Ld.exports=Iy()),Ld.exports}var Pd={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function zy(){if(M_)return wn;M_=1;var r=Sp();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:h,implementation:x}}var d=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.createPortal=function(m,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,x)},wn.flushSync=function(m){var h=d.T,x=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=x,s.d.f()}},wn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},wn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},wn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var x=h.as,S=p(x,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:g,fetchPriority:M}):x==="script"&&s.d.X(m,{crossOrigin:S,integrity:g,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},wn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},wn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,S=p(x,h.crossOrigin);s.d.L(m,x,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},wn.preloadModule=function(m,h){if(typeof m=="string")if(h){var x=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},wn.requestFormReset=function(m){s.d.r(m)},wn.unstable_batchedUpdates=function(m,h){return m(h)},wn.useFormState=function(m,h,x){return d.H.useFormState(m,h,x)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.2.4",wn}var b_;function Hy(){if(b_)return Pd.exports;b_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Pd.exports=zy(),Pd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function Gy(){if(E_)return qo;E_=1;var r=By(),t=Sp(),i=Hy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,C=u.child;C;){if(C===a){y=!0,a=u,o=f;break}if(C===o){y=!0,o=u,a=f;break}C=C.sibling}if(!y){for(C=f.child;C;){if(C===a){y=!0,a=f,o=u;break}if(C===o){y=!0,o=f,a=u;break}C=C.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var S=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),D=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),rt=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Y?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case v:return"Profiler";case _:return"StrictMode";case G:return"Suspense";case B:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case D:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case N:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:at(e.type)||"Memo";case E:n=e._payload,e=e._init;try{return at(e(n))}catch{}}return null}var tt=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},nt=[],gt=-1;function F(e){return{current:e}}function k(e){0>gt||(e.current=nt[gt],nt[gt]=null,gt--)}function et(e,n){gt++,nt[gt]=e.current,e.current=n}var pt=F(null),Mt=F(null),Z=F(null),V=F(null);function ft(e,n){switch(et(Z,n),et(Mt,e),et(pt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?zg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=zg(n),e=Hg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}k(pt),et(pt,e)}function St(){k(pt),k(Mt),k(Z)}function Nt(e){e.memoizedState!==null&&et(V,e);var n=pt.current,a=Hg(n,e.type);n!==a&&(et(Mt,e),et(pt,a))}function wt(e){Mt.current===e&&(k(pt),k(Mt)),V.current===e&&(k(V),Vo._currentValue=X)}var Gt,Ot;function Qt(e){if(Gt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Gt=n&&n[1]||"",Ot=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gt+e+Ot}var ae=!1;function Yt(e,n){if(!e||ae)return"";ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Tt=function(){throw Error()};if(Object.defineProperty(Tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Tt,[])}catch(vt){var ht=vt}Reflect.construct(e,[],Tt)}else{try{Tt.call()}catch(vt){ht=vt}e.call(Tt.prototype)}}else{try{throw Error()}catch(vt){ht=vt}(Tt=e())&&typeof Tt.catch=="function"&&Tt.catch(function(){})}}catch(vt){if(vt&&ht&&typeof vt.stack=="string")return[vt.stack,ht.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],C=f[1];if(y&&C){var W=y.split(`
`),ut=C.split(`
`);for(u=o=0;o<W.length&&!W[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ut.length&&!ut[u].includes("DetermineComponentFrameRoot");)u++;if(o===W.length||u===ut.length)for(o=W.length-1,u=ut.length-1;1<=o&&0<=u&&W[o]!==ut[u];)u--;for(;1<=o&&0<=u;o--,u--)if(W[o]!==ut[u]){if(o!==1||u!==1)do if(o--,u--,0>u||W[o]!==ut[u]){var bt=`
`+W[o].replace(" at new "," at ");return e.displayName&&bt.includes("<anonymous>")&&(bt=bt.replace("<anonymous>",e.displayName)),bt}while(1<=o&&0<=u);break}}}finally{ae=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Qt(a):""}function pe(e,n){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return e.child!==n&&n!==null?Qt("Suspense Fallback"):Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return Yt(e.type,!1);case 11:return Yt(e.type.render,!1);case 1:return Yt(e.type,!0);case 31:return Qt("Activity");default:return""}}function j(e){try{var n="",a=null;do n+=pe(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Te=Object.prototype.hasOwnProperty,me=r.unstable_scheduleCallback,Ae=r.unstable_cancelCallback,Xt=r.unstable_shouldYield,P=r.unstable_requestPaint,T=r.unstable_now,$=r.unstable_getCurrentPriorityLevel,yt=r.unstable_ImmediatePriority,At=r.unstable_UserBlockingPriority,mt=r.unstable_NormalPriority,jt=r.unstable_LowPriority,Lt=r.unstable_IdlePriority,te=r.log,ee=r.unstable_setDisableYieldValue,Ct=null,Rt=null;function Ht(e){if(typeof te=="function"&&ee(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Ct,e)}catch{}}var zt=Math.clz32?Math.clz32:J,Vt=Math.log,ge=Math.LN2;function J(e){return e>>>=0,e===0?32:31-(Vt(e)/ge|0)|0}var Pt=256,Ut=262144,kt=4194304;function Dt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var C=o&134217727;return C!==0?(o=C&~f,o!==0?u=Dt(o):(y&=C,y!==0?u=Dt(y):a||(a=C&~e,a!==0&&(u=Dt(a))))):(C=o&~f,C!==0?u=Dt(C):y!==0?u=Dt(y):a||(a=o&~e,a!==0&&(u=Dt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function qt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ce(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=kt;return kt<<=1,(kt&62914560)===0&&(kt=4194304),e}function Ne(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function In(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mi(e,n,a,o,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,W=e.expirationTimes,ut=e.hiddenUpdates;for(a=y&~a;0<a;){var bt=31-zt(a),Tt=1<<bt;C[bt]=0,W[bt]=-1;var ht=ut[bt];if(ht!==null)for(ut[bt]=null,bt=0;bt<ht.length;bt++){var vt=ht[bt];vt!==null&&(vt.lane&=-536870913)}a&=~Tt}o!==0&&no(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function no(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Xs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function vl(e,n){var a=n&-n;return a=(a&42)!==0?1:Ws(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ws(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function js(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Pi(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:c_(e.type))}function qs(e,n){var a=I.p;try{return I.p=e,n()}finally{I.p=a}}var bi=Math.random().toString(36).slice(2),ln="__reactFiber$"+bi,gn="__reactProps$"+bi,$i="__reactContainer$"+bi,wa="__reactEvents$"+bi,xl="__reactListeners$"+bi,Sl="__reactHandles$"+bi,yl="__reactResources$"+bi,ds="__reactMarker$"+bi;function io(e){delete e[ln],delete e[gn],delete e[wa],delete e[xl],delete e[Sl]}function Da(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[$i]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=qg(e);e!==null;){if(a=e[ln])return a;e=qg(e)}return n}e=a,a=e.parentNode}return null}function Na(e){if(e=e[ln]||e[$i]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function hs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function w(e){var n=e[yl];return n||(n=e[yl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Q(e){e[ds]=!0}var _t=new Set,dt={};function ot(e,n){Ft(e,n),Ft(e+"Capture",n)}function Ft(e,n){for(dt[e]=n,e=0;e<n.length;e++)_t.add(n[e])}var Wt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),It={},$t={};function ie(e){return Te.call($t,e)?!0:Te.call(It,e)?!1:Wt.test(e)?$t[e]=!0:(It[e]=!0,!1)}function oe(e,n,a){if(ie(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function fe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Zt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Oe(e){if(!e._valueTracker){var n=Qe(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function _n(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Qe(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Bn=/[\n"\\]/g;function ue(e){return e.replace(Bn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zn(e,n,a,o,u,f,y,C){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?Ei(e,y,_e(n)):a!=null?Ei(e,y,_e(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+_e(C):e.removeAttribute("name")}function Qn(e,n,a,o,u,f,y,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Oe(e);return}a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=C?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Oe(e)}function Ei(e,n,a){n==="number"&&Jt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Jn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Be(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function cn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(tt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Oe(e)}function Hn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var un=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ti(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||un.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ta(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ti(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Ti(e,f,n[f])}function Ys(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Cx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ml(e){return Cx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ea(){}var Au=null;function Ru(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zs=null,Ks=null;function Bp(e){var n=Na(e);if(n&&(e=n.stateNode)){var a=e[gn]||null;t:switch(e=n.stateNode,n.type){case"input":if(zn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ue(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[gn]||null;if(!u)throw Error(s(90));zn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&_n(o)}break t;case"textarea":Be(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Jn(e,!!a.multiple,n,!1)}}}var Cu=!1;function zp(e,n,a){if(Cu)return e(n,a);Cu=!0;try{var o=e(n);return o}finally{if(Cu=!1,(Zs!==null||Ks!==null)&&(cc(),Zs&&(n=Zs,e=Ks,Ks=Zs=null,Bp(n),e)))for(n=0;n<e.length;n++)Bp(e[n])}}function ao(e,n){var a=e.stateNode;if(a===null)return null;var o=a[gn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wu=!1;if(na)try{var so={};Object.defineProperty(so,"passive",{get:function(){wu=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{wu=!1}var Ua=null,Du=null,bl=null;function Hp(){if(bl)return bl;var e,n=Du,a=n.length,o,u="value"in Ua?Ua.value:Ua.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return bl=u.slice(e,1<o?1-o:void 0)}function El(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Tl(){return!0}function Gp(){return!1}function Xn(e){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Tl:Gp,this.isPropagationStopped=Gp,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),n}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Al=Xn(ps),ro=S({},ps,{view:0,detail:0}),wx=Xn(ro),Nu,Uu,oo,Rl=S({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oo&&(oo&&e.type==="mousemove"?(Nu=e.screenX-oo.screenX,Uu=e.screenY-oo.screenY):Uu=Nu=0,oo=e),Nu)},movementY:function(e){return"movementY"in e?e.movementY:Uu}}),Vp=Xn(Rl),Dx=S({},Rl,{dataTransfer:0}),Nx=Xn(Dx),Ux=S({},ro,{relatedTarget:0}),Lu=Xn(Ux),Lx=S({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Ox=Xn(Lx),Px=S({},ps,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fx=Xn(Px),Ix=S({},ps,{data:0}),kp=Xn(Ix),Bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Hx[e])?!!n[e]:!1}function Ou(){return Gx}var Vx=S({},ro,{key:function(e){if(e.key){var n=Bx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=El(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(e){return e.type==="keypress"?El(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?El(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),kx=Xn(Vx),Xx=S({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xp=Xn(Xx),Wx=S({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),jx=Xn(Wx),qx=S({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yx=Xn(qx),Zx=S({},Rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Kx=Xn(Zx),Qx=S({},ps,{newState:0,oldState:0}),Jx=Xn(Qx),$x=[9,13,27,32],Pu=na&&"CompositionEvent"in window,lo=null;na&&"documentMode"in document&&(lo=document.documentMode);var tS=na&&"TextEvent"in window&&!lo,Wp=na&&(!Pu||lo&&8<lo&&11>=lo),jp=" ",qp=!1;function Yp(e,n){switch(e){case"keyup":return $x.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qs=!1;function eS(e,n){switch(e){case"compositionend":return Zp(n);case"keypress":return n.which!==32?null:(qp=!0,jp);case"textInput":return e=n.data,e===jp&&qp?null:e;default:return null}}function nS(e,n){if(Qs)return e==="compositionend"||!Pu&&Yp(e,n)?(e=Hp(),bl=Du=Ua=null,Qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wp&&n.locale!=="ko"?null:n.data;default:return null}}var iS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!iS[e.type]:n==="textarea"}function Qp(e,n,a,o){Zs?Ks?Ks.push(o):Ks=[o]:Zs=o,n=gc(n,"onChange"),0<n.length&&(a=new Al("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var co=null,uo=null;function aS(e){Lg(e,0)}function Cl(e){var n=hs(e);if(_n(n))return e}function Jp(e,n){if(e==="change")return n}var $p=!1;if(na){var Fu;if(na){var Iu="oninput"in document;if(!Iu){var tm=document.createElement("div");tm.setAttribute("oninput","return;"),Iu=typeof tm.oninput=="function"}Fu=Iu}else Fu=!1;$p=Fu&&(!document.documentMode||9<document.documentMode)}function em(){co&&(co.detachEvent("onpropertychange",nm),uo=co=null)}function nm(e){if(e.propertyName==="value"&&Cl(uo)){var n=[];Qp(n,uo,e,Ru(e)),zp(aS,n)}}function sS(e,n,a){e==="focusin"?(em(),co=n,uo=a,co.attachEvent("onpropertychange",nm)):e==="focusout"&&em()}function rS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cl(uo)}function oS(e,n){if(e==="click")return Cl(n)}function lS(e,n){if(e==="input"||e==="change")return Cl(n)}function cS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:cS;function fo(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Te.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function im(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function am(e,n){var a=im(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=im(a)}}function sm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?sm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function rm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Jt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Jt(e.document)}return n}function Bu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var uS=na&&"documentMode"in document&&11>=document.documentMode,Js=null,zu=null,ho=null,Hu=!1;function om(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hu||Js==null||Js!==Jt(o)||(o=Js,"selectionStart"in o&&Bu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ho&&fo(ho,o)||(ho=o,o=gc(zu,"onSelect"),0<o.length&&(n=new Al("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Js)))}function ms(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var $s={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionrun:ms("Transition","TransitionRun"),transitionstart:ms("Transition","TransitionStart"),transitioncancel:ms("Transition","TransitionCancel"),transitionend:ms("Transition","TransitionEnd")},Gu={},lm={};na&&(lm=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function gs(e){if(Gu[e])return Gu[e];if(!$s[e])return e;var n=$s[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in lm)return Gu[e]=n[a];return e}var cm=gs("animationend"),um=gs("animationiteration"),fm=gs("animationstart"),fS=gs("transitionrun"),dS=gs("transitionstart"),hS=gs("transitioncancel"),dm=gs("transitionend"),hm=new Map,Vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vu.push("scrollEnd");function Ai(e,n){hm.set(e,n),ot(n,[e])}var wl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],tr=0,ku=0;function Dl(){for(var e=tr,n=ku=tr=0;n<e;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var f=fi[n];if(fi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&pm(a,u,f)}}function Nl(e,n,a,o){fi[tr++]=e,fi[tr++]=n,fi[tr++]=a,fi[tr++]=o,ku|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Xu(e,n,a,o){return Nl(e,n,a,o),Ul(e)}function _s(e,n){return Nl(e,null,null,n),Ul(e)}function pm(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-zt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Ul(e){if(50<Po)throw Po=0,td=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var er={};function pS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new pS(e,n,a,o)}function Wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function mm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ll(e,n,a,o,u,f){var y=0;if(o=e,typeof e=="function")Wu(e)&&(y=1);else if(typeof e=="string")y=xy(e,a,pt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case O:return e=ti(31,a,n,u),e.elementType=O,e.lanes=f,e;case R:return vs(a.children,u,f,n);case _:y=8,u|=24;break;case v:return e=ti(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case G:return e=ti(13,a,n,u),e.elementType=G,e.lanes=f,e;case B:return e=ti(19,a,n,u),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:y=10;break t;case A:y=9;break t;case N:y=11;break t;case z:y=14;break t;case E:y=16,o=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(y,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function vs(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function ju(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function gm(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function qu(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var _m=new WeakMap;function di(e,n){if(typeof e=="object"&&e!==null){var a=_m.get(e);return a!==void 0?a:(n={value:e,source:n,stack:j(n)},_m.set(e,n),n)}return{value:e,source:n,stack:j(n)}}var nr=[],ir=0,Ol=null,po=0,hi=[],pi=0,La=null,Fi=1,Ii="";function aa(e,n){nr[ir++]=po,nr[ir++]=Ol,Ol=e,po=n}function vm(e,n,a){hi[pi++]=Fi,hi[pi++]=Ii,hi[pi++]=La,La=e;var o=Fi;e=Ii;var u=32-zt(o)-1;o&=~(1<<u),a+=1;var f=32-zt(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Fi=1<<32-zt(n)+u|a<<u|o,Ii=f+e}else Fi=1<<f|a<<u|o,Ii=e}function Yu(e){e.return!==null&&(aa(e,1),vm(e,1,0))}function Zu(e){for(;e===Ol;)Ol=nr[--ir],nr[ir]=null,po=nr[--ir],nr[ir]=null;for(;e===La;)La=hi[--pi],hi[pi]=null,Ii=hi[--pi],hi[pi]=null,Fi=hi[--pi],hi[pi]=null}function xm(e,n){hi[pi++]=Fi,hi[pi++]=Ii,hi[pi++]=La,Fi=n.id,Ii=n.overflow,La=e}var bn=null,Ye=null,we=!1,Oa=null,mi=!1,Ku=Error(s(519));function Pa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(di(n,e)),Ku}function Sm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[ln]=e,n[gn]=o,a){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(a=0;a<Io.length;a++)be(Io[a],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":be("invalid",n),Qn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":be("invalid",n);break;case"textarea":be("invalid",n),cn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Ig(n.textContent,a)?(o.popover!=null&&(be("beforetoggle",n),be("toggle",n)),o.onScroll!=null&&be("scroll",n),o.onScrollEnd!=null&&be("scrollend",n),o.onClick!=null&&(n.onclick=ea),n=!0):n=!1,n||Pa(e,!0)}function ym(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:bn=bn.return}}function ar(e){if(e!==bn)return!1;if(!we)return ym(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||md(e.type,e.memoizedProps)),a=!a),a&&Ye&&Pa(e),ym(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=jg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=jg(e)}else n===27?(n=Ye,Za(e.type)?(e=Sd,Sd=null,Ye=e):Ye=n):Ye=bn?_i(e.stateNode.nextSibling):null;return!0}function xs(){Ye=bn=null,we=!1}function Qu(){var e=Oa;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Oa=null),e}function mo(e){Oa===null?Oa=[e]:Oa.push(e)}var Ju=F(null),Ss=null,sa=null;function Fa(e,n,a){et(Ju,n._currentValue),n._currentValue=a}function ra(e){e._currentValue=Ju.current,k(Ju)}function $u(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function tf(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var C=f;f=u;for(var W=0;W<n.length;W++)if(C.context===n[W]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),$u(f.return,a,e),o||(y=null);break t}f=C.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),$u(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function sr(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var C=u.type;$n(u.pendingProps.value,y.value)||(e!==null?e.push(C):e=[C])}}else if(u===V.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Vo):e=[Vo])}u=u.return}e!==null&&tf(n,e,a,o),n.flags|=262144}function Pl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ys(e){Ss=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return Mm(Ss,e)}function Fl(e,n){return Ss===null&&ys(e),Mm(e,n)}function Mm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},sa===null){if(e===null)throw Error(s(308));sa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else sa=sa.next=n;return a}var mS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},gS=r.unstable_scheduleCallback,_S=r.unstable_NormalPriority,fn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ef(){return{controller:new mS,data:new Map,refCount:0}}function go(e){e.refCount--,e.refCount===0&&gS(_S,function(){e.controller.abort()})}var _o=null,nf=0,rr=0,or=null;function vS(e,n){if(_o===null){var a=_o=[];nf=0,rr=rd(),or={status:"pending",value:void 0,then:function(o){a.push(o)}}}return nf++,n.then(bm,bm),n}function bm(){if(--nf===0&&_o!==null){or!==null&&(or.status="fulfilled");var e=_o;_o=null,rr=0,or=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function xS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Em=U.S;U.S=function(e,n){og=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&vS(e,n),Em!==null&&Em(e,n)};var Ms=F(null);function af(){var e=Ms.current;return e!==null?e:qe.pooledCache}function Il(e,n){n===null?et(Ms,Ms.current):et(Ms,n.pool)}function Tm(){var e=af();return e===null?null:{parent:fn._currentValue,pool:e}}var lr=Error(s(460)),sf=Error(s(474)),Bl=Error(s(542)),zl={then:function(){}};function Am(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Rm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ea,ea),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,wm(e),e;default:if(typeof n.status=="string")n.then(ea,ea);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,wm(e),e}throw Es=n,lr}}function bs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Es=a,lr):a}}var Es=null;function Cm(){if(Es===null)throw Error(s(459));var e=Es;return Es=null,e}function wm(e){if(e===lr||e===Bl)throw Error(s(483))}var cr=null,vo=0;function Hl(e){var n=vo;return vo+=1,cr===null&&(cr=[]),Rm(cr,e,n)}function xo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Gl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Dm(e){function n(it,K){if(e){var ct=it.deletions;ct===null?(it.deletions=[K],it.flags|=16):ct.push(K)}}function a(it,K){if(!e)return null;for(;K!==null;)n(it,K),K=K.sibling;return null}function o(it){for(var K=new Map;it!==null;)it.key!==null?K.set(it.key,it):K.set(it.index,it),it=it.sibling;return K}function u(it,K){return it=ia(it,K),it.index=0,it.sibling=null,it}function f(it,K,ct){return it.index=ct,e?(ct=it.alternate,ct!==null?(ct=ct.index,ct<K?(it.flags|=67108866,K):ct):(it.flags|=67108866,K)):(it.flags|=1048576,K)}function y(it){return e&&it.alternate===null&&(it.flags|=67108866),it}function C(it,K,ct,Et){return K===null||K.tag!==6?(K=ju(ct,it.mode,Et),K.return=it,K):(K=u(K,ct),K.return=it,K)}function W(it,K,ct,Et){var se=ct.type;return se===R?bt(it,K,ct.props.children,Et,ct.key):K!==null&&(K.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===E&&bs(se)===K.type)?(K=u(K,ct.props),xo(K,ct),K.return=it,K):(K=Ll(ct.type,ct.key,ct.props,null,it.mode,Et),xo(K,ct),K.return=it,K)}function ut(it,K,ct,Et){return K===null||K.tag!==4||K.stateNode.containerInfo!==ct.containerInfo||K.stateNode.implementation!==ct.implementation?(K=qu(ct,it.mode,Et),K.return=it,K):(K=u(K,ct.children||[]),K.return=it,K)}function bt(it,K,ct,Et,se){return K===null||K.tag!==7?(K=vs(ct,it.mode,Et,se),K.return=it,K):(K=u(K,ct),K.return=it,K)}function Tt(it,K,ct){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=ju(""+K,it.mode,ct),K.return=it,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return ct=Ll(K.type,K.key,K.props,null,it.mode,ct),xo(ct,K),ct.return=it,ct;case b:return K=qu(K,it.mode,ct),K.return=it,K;case E:return K=bs(K),Tt(it,K,ct)}if(tt(K)||q(K))return K=vs(K,it.mode,ct,null),K.return=it,K;if(typeof K.then=="function")return Tt(it,Hl(K),ct);if(K.$$typeof===D)return Tt(it,Fl(it,K),ct);Gl(it,K)}return null}function ht(it,K,ct,Et){var se=K!==null?K.key:null;if(typeof ct=="string"&&ct!==""||typeof ct=="number"||typeof ct=="bigint")return se!==null?null:C(it,K,""+ct,Et);if(typeof ct=="object"&&ct!==null){switch(ct.$$typeof){case M:return ct.key===se?W(it,K,ct,Et):null;case b:return ct.key===se?ut(it,K,ct,Et):null;case E:return ct=bs(ct),ht(it,K,ct,Et)}if(tt(ct)||q(ct))return se!==null?null:bt(it,K,ct,Et,null);if(typeof ct.then=="function")return ht(it,K,Hl(ct),Et);if(ct.$$typeof===D)return ht(it,K,Fl(it,ct),Et);Gl(it,ct)}return null}function vt(it,K,ct,Et,se){if(typeof Et=="string"&&Et!==""||typeof Et=="number"||typeof Et=="bigint")return it=it.get(ct)||null,C(K,it,""+Et,se);if(typeof Et=="object"&&Et!==null){switch(Et.$$typeof){case M:return it=it.get(Et.key===null?ct:Et.key)||null,W(K,it,Et,se);case b:return it=it.get(Et.key===null?ct:Et.key)||null,ut(K,it,Et,se);case E:return Et=bs(Et),vt(it,K,ct,Et,se)}if(tt(Et)||q(Et))return it=it.get(ct)||null,bt(K,it,Et,se,null);if(typeof Et.then=="function")return vt(it,K,ct,Hl(Et),se);if(Et.$$typeof===D)return vt(it,K,ct,Fl(K,Et),se);Gl(K,Et)}return null}function Kt(it,K,ct,Et){for(var se=null,Pe=null,ne=K,ve=K=0,Ce=null;ne!==null&&ve<ct.length;ve++){ne.index>ve?(Ce=ne,ne=null):Ce=ne.sibling;var Fe=ht(it,ne,ct[ve],Et);if(Fe===null){ne===null&&(ne=Ce);break}e&&ne&&Fe.alternate===null&&n(it,ne),K=f(Fe,K,ve),Pe===null?se=Fe:Pe.sibling=Fe,Pe=Fe,ne=Ce}if(ve===ct.length)return a(it,ne),we&&aa(it,ve),se;if(ne===null){for(;ve<ct.length;ve++)ne=Tt(it,ct[ve],Et),ne!==null&&(K=f(ne,K,ve),Pe===null?se=ne:Pe.sibling=ne,Pe=ne);return we&&aa(it,ve),se}for(ne=o(ne);ve<ct.length;ve++)Ce=vt(ne,it,ve,ct[ve],Et),Ce!==null&&(e&&Ce.alternate!==null&&ne.delete(Ce.key===null?ve:Ce.key),K=f(Ce,K,ve),Pe===null?se=Ce:Pe.sibling=Ce,Pe=Ce);return e&&ne.forEach(function(ts){return n(it,ts)}),we&&aa(it,ve),se}function re(it,K,ct,Et){if(ct==null)throw Error(s(151));for(var se=null,Pe=null,ne=K,ve=K=0,Ce=null,Fe=ct.next();ne!==null&&!Fe.done;ve++,Fe=ct.next()){ne.index>ve?(Ce=ne,ne=null):Ce=ne.sibling;var ts=ht(it,ne,Fe.value,Et);if(ts===null){ne===null&&(ne=Ce);break}e&&ne&&ts.alternate===null&&n(it,ne),K=f(ts,K,ve),Pe===null?se=ts:Pe.sibling=ts,Pe=ts,ne=Ce}if(Fe.done)return a(it,ne),we&&aa(it,ve),se;if(ne===null){for(;!Fe.done;ve++,Fe=ct.next())Fe=Tt(it,Fe.value,Et),Fe!==null&&(K=f(Fe,K,ve),Pe===null?se=Fe:Pe.sibling=Fe,Pe=Fe);return we&&aa(it,ve),se}for(ne=o(ne);!Fe.done;ve++,Fe=ct.next())Fe=vt(ne,it,ve,Fe.value,Et),Fe!==null&&(e&&Fe.alternate!==null&&ne.delete(Fe.key===null?ve:Fe.key),K=f(Fe,K,ve),Pe===null?se=Fe:Pe.sibling=Fe,Pe=Fe);return e&&ne.forEach(function(Dy){return n(it,Dy)}),we&&aa(it,ve),se}function We(it,K,ct,Et){if(typeof ct=="object"&&ct!==null&&ct.type===R&&ct.key===null&&(ct=ct.props.children),typeof ct=="object"&&ct!==null){switch(ct.$$typeof){case M:t:{for(var se=ct.key;K!==null;){if(K.key===se){if(se=ct.type,se===R){if(K.tag===7){a(it,K.sibling),Et=u(K,ct.props.children),Et.return=it,it=Et;break t}}else if(K.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===E&&bs(se)===K.type){a(it,K.sibling),Et=u(K,ct.props),xo(Et,ct),Et.return=it,it=Et;break t}a(it,K);break}else n(it,K);K=K.sibling}ct.type===R?(Et=vs(ct.props.children,it.mode,Et,ct.key),Et.return=it,it=Et):(Et=Ll(ct.type,ct.key,ct.props,null,it.mode,Et),xo(Et,ct),Et.return=it,it=Et)}return y(it);case b:t:{for(se=ct.key;K!==null;){if(K.key===se)if(K.tag===4&&K.stateNode.containerInfo===ct.containerInfo&&K.stateNode.implementation===ct.implementation){a(it,K.sibling),Et=u(K,ct.children||[]),Et.return=it,it=Et;break t}else{a(it,K);break}else n(it,K);K=K.sibling}Et=qu(ct,it.mode,Et),Et.return=it,it=Et}return y(it);case E:return ct=bs(ct),We(it,K,ct,Et)}if(tt(ct))return Kt(it,K,ct,Et);if(q(ct)){if(se=q(ct),typeof se!="function")throw Error(s(150));return ct=se.call(ct),re(it,K,ct,Et)}if(typeof ct.then=="function")return We(it,K,Hl(ct),Et);if(ct.$$typeof===D)return We(it,K,Fl(it,ct),Et);Gl(it,ct)}return typeof ct=="string"&&ct!==""||typeof ct=="number"||typeof ct=="bigint"?(ct=""+ct,K!==null&&K.tag===6?(a(it,K.sibling),Et=u(K,ct),Et.return=it,it=Et):(a(it,K),Et=ju(ct,it.mode,Et),Et.return=it,it=Et),y(it)):a(it,K)}return function(it,K,ct,Et){try{vo=0;var se=We(it,K,ct,Et);return cr=null,se}catch(ne){if(ne===lr||ne===Bl)throw ne;var Pe=ti(29,ne,null,it.mode);return Pe.lanes=Et,Pe.return=it,Pe}finally{}}}var Ts=Dm(!0),Nm=Dm(!1),Ia=!1;function rf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function of(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ie&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ul(e),pm(e,null,a),n}return Nl(e,o,n,a),Ul(e)}function So(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xs(e,a)}}function lf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var cf=!1;function yo(){if(cf){var e=or;if(e!==null)throw e}}function Mo(e,n,a,o){cf=!1;var u=e.updateQueue;Ia=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var W=C,ut=W.next;W.next=null,y===null?f=ut:y.next=ut,y=W;var bt=e.alternate;bt!==null&&(bt=bt.updateQueue,C=bt.lastBaseUpdate,C!==y&&(C===null?bt.firstBaseUpdate=ut:C.next=ut,bt.lastBaseUpdate=W))}if(f!==null){var Tt=u.baseState;y=0,bt=ut=W=null,C=f;do{var ht=C.lane&-536870913,vt=ht!==C.lane;if(vt?(Re&ht)===ht:(o&ht)===ht){ht!==0&&ht===rr&&(cf=!0),bt!==null&&(bt=bt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Kt=e,re=C;ht=n;var We=a;switch(re.tag){case 1:if(Kt=re.payload,typeof Kt=="function"){Tt=Kt.call(We,Tt,ht);break t}Tt=Kt;break t;case 3:Kt.flags=Kt.flags&-65537|128;case 0:if(Kt=re.payload,ht=typeof Kt=="function"?Kt.call(We,Tt,ht):Kt,ht==null)break t;Tt=S({},Tt,ht);break t;case 2:Ia=!0}}ht=C.callback,ht!==null&&(e.flags|=64,vt&&(e.flags|=8192),vt=u.callbacks,vt===null?u.callbacks=[ht]:vt.push(ht))}else vt={lane:ht,tag:C.tag,payload:C.payload,callback:C.callback,next:null},bt===null?(ut=bt=vt,W=Tt):bt=bt.next=vt,y|=ht;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;vt=C,C=vt.next,vt.next=null,u.lastBaseUpdate=vt,u.shared.pending=null}}while(!0);bt===null&&(W=Tt),u.baseState=W,u.firstBaseUpdate=ut,u.lastBaseUpdate=bt,f===null&&(u.shared.lanes=0),Xa|=y,e.lanes=y,e.memoizedState=Tt}}function Um(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Lm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Um(a[e],n)}var ur=F(null),Vl=F(0);function Om(e,n){e=ma,et(Vl,e),et(ur,n),ma=e|n.baseLanes}function uf(){et(Vl,ma),et(ur,ur.current)}function ff(){ma=Vl.current,k(ur),k(Vl)}var ei=F(null),gi=null;function Ha(e){var n=e.alternate;et(sn,sn.current&1),et(ei,e),gi===null&&(n===null||ur.current!==null||n.memoizedState!==null)&&(gi=e)}function df(e){et(sn,sn.current),et(ei,e),gi===null&&(gi=e)}function Pm(e){e.tag===22?(et(sn,sn.current),et(ei,e),gi===null&&(gi=e)):Ga()}function Ga(){et(sn,sn.current),et(ei,ei.current)}function ni(e){k(ei),gi===e&&(gi=null),k(sn)}var sn=F(0);function kl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||vd(a)||xd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oa=0,he=null,ke=null,dn=null,Xl=!1,fr=!1,As=!1,Wl=0,bo=0,dr=null,SS=0;function en(){throw Error(s(321))}function hf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function pf(e,n,a,o,u,f){return oa=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?v0:wf,As=!1,f=a(o,u),As=!1,fr&&(f=Im(n,a,o,u)),Fm(e),f}function Fm(e){U.H=Ao;var n=ke!==null&&ke.next!==null;if(oa=0,dn=ke=he=null,Xl=!1,bo=0,dr=null,n)throw Error(s(300));e===null||hn||(e=e.dependencies,e!==null&&Pl(e)&&(hn=!0))}function Im(e,n,a,o){he=e;var u=0;do{if(fr&&(dr=null),bo=0,fr=!1,25<=u)throw Error(s(301));if(u+=1,dn=ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}U.H=x0,f=n(a,o)}while(fr);return f}function yS(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?Eo(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(he.flags|=1024),n}function mf(){var e=Wl!==0;return Wl=0,e}function gf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function _f(e){if(Xl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Xl=!1}oa=0,dn=ke=he=null,fr=!1,bo=Wl=0,dr=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?he.memoizedState=dn=e:dn=dn.next=e,dn}function rn(){if(ke===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=dn===null?he.memoizedState:dn.next;if(n!==null)dn=n,ke=e;else{if(e===null)throw he.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},dn===null?he.memoizedState=dn=e:dn=dn.next=e}return dn}function jl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(e){var n=bo;return bo+=1,dr===null&&(dr=[]),e=Rm(dr,e,n),n=he,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?v0:wf),e}function ql(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Eo(e);if(e.$$typeof===D)return En(e)}throw Error(s(438,String(e)))}function vf(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=he.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=jl(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=rt;return n.index++,a}function la(e,n){return typeof n=="function"?n(e):n}function Yl(e){var n=rn();return xf(n,ke,e)}function xf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var C=y=null,W=null,ut=n,bt=!1;do{var Tt=ut.lane&-536870913;if(Tt!==ut.lane?(Re&Tt)===Tt:(oa&Tt)===Tt){var ht=ut.revertLane;if(ht===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null}),Tt===rr&&(bt=!0);else if((oa&ht)===ht){ut=ut.next,ht===rr&&(bt=!0);continue}else Tt={lane:0,revertLane:ut.revertLane,gesture:null,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null},W===null?(C=W=Tt,y=f):W=W.next=Tt,he.lanes|=ht,Xa|=ht;Tt=ut.action,As&&a(f,Tt),f=ut.hasEagerState?ut.eagerState:a(f,Tt)}else ht={lane:Tt,revertLane:ut.revertLane,gesture:ut.gesture,action:ut.action,hasEagerState:ut.hasEagerState,eagerState:ut.eagerState,next:null},W===null?(C=W=ht,y=f):W=W.next=ht,he.lanes|=Tt,Xa|=Tt;ut=ut.next}while(ut!==null&&ut!==n);if(W===null?y=f:W.next=C,!$n(f,e.memoizedState)&&(hn=!0,bt&&(a=or,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=W,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Sf(e){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);$n(f,n.memoizedState)||(hn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Bm(e,n,a){var o=he,u=rn(),f=we;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!$n((ke||u).memoizedState,a);if(y&&(u.memoizedState=a,hn=!0),u=u.queue,bf(Gm.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||dn!==null&&dn.memoizedState.tag&1){if(o.flags|=2048,hr(9,{destroy:void 0},Hm.bind(null,o,u,a,n),null),qe===null)throw Error(s(349));f||(oa&127)!==0||zm(o,n,a)}return a}function zm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=jl(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Hm(e,n,a,o){n.value=a,n.getSnapshot=o,Vm(n)&&km(e)}function Gm(e,n,a){return a(function(){Vm(n)&&km(e)})}function Vm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function km(e){var n=_s(e,2);n!==null&&Zn(n,e,2)}function yf(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),As){Ht(!0);try{a()}finally{Ht(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},n}function Xm(e,n,a,o){return e.baseState=a,xf(e,ke,typeof o=="function"?o:la)}function MS(e,n,a,o,u){if(Ql(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};U.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Wm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Wm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=U.T,y={};U.T=y;try{var C=a(u,o),W=U.S;W!==null&&W(y,C),jm(e,n,C)}catch(ut){Mf(e,n,ut)}finally{f!==null&&y.types!==null&&(f.types=y.types),U.T=f}}else try{f=a(u,o),jm(e,n,f)}catch(ut){Mf(e,n,ut)}}function jm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){qm(e,n,o)},function(o){return Mf(e,n,o)}):qm(e,n,a)}function qm(e,n,a){n.status="fulfilled",n.value=a,Ym(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Wm(e,a)))}function Mf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Ym(n),n=n.next;while(n!==o)}e.action=null}function Ym(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Zm(e,n){return n}function Km(e,n){if(we){var a=qe.formState;if(a!==null){t:{var o=he;if(we){if(Ye){e:{for(var u=Ye,f=mi;u.nodeType!==8;){if(!f){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ye=_i(u.nextSibling),o=u.data==="F!";break t}}Pa(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zm,lastRenderedState:n},a.queue=o,a=m0.bind(null,he,o),o.dispatch=a,o=yf(!1),f=Cf.bind(null,he,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=MS.bind(null,he,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Qm(e){var n=rn();return Jm(n,ke,e)}function Jm(e,n,a){if(n=xf(e,n,Zm)[0],e=Yl(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Eo(n)}catch(y){throw y===lr?Bl:y}else o=n;n=rn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,hr(9,{destroy:void 0},bS.bind(null,u,a),null)),[o,f,e]}function bS(e,n){e.action=n}function $m(e){var n=rn(),a=ke;if(a!==null)return Jm(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function hr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=he.updateQueue,n===null&&(n=jl(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function t0(){return rn().memoizedState}function Zl(e,n,a,o){var u=Gn();he.flags|=e,u.memoizedState=hr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Kl(e,n,a,o){var u=rn();o=o===void 0?null:o;var f=u.memoizedState.inst;ke!==null&&o!==null&&hf(o,ke.memoizedState.deps)?u.memoizedState=hr(n,f,a,o):(he.flags|=e,u.memoizedState=hr(1|n,f,a,o))}function e0(e,n){Zl(8390656,8,e,n)}function bf(e,n){Kl(2048,8,e,n)}function ES(e){he.flags|=4;var n=he.updateQueue;if(n===null)n=jl(),he.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function n0(e){var n=rn().memoizedState;return ES({ref:n,nextImpl:e}),function(){if((Ie&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function i0(e,n){return Kl(4,2,e,n)}function a0(e,n){return Kl(4,4,e,n)}function s0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function r0(e,n,a){a=a!=null?a.concat([e]):null,Kl(4,4,s0.bind(null,n,e),a)}function Ef(){}function o0(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&hf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function l0(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&hf(n,o[1]))return o[0];if(o=e(),As){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[o,n],o}function Tf(e,n,a){return a===void 0||(oa&1073741824)!==0&&(Re&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=cg(),he.lanes|=e,Xa|=e,a)}function c0(e,n,a,o){return $n(a,n)?a:ur.current!==null?(e=Tf(e,a,o),$n(e,n)||(hn=!0),e):(oa&42)===0||(oa&1073741824)!==0&&(Re&261930)===0?(hn=!0,e.memoizedState=a):(e=cg(),he.lanes|=e,Xa|=e,n)}function u0(e,n,a,o,u){var f=I.p;I.p=f!==0&&8>f?f:8;var y=U.T,C={};U.T=C,Cf(e,!1,n,a);try{var W=u(),ut=U.S;if(ut!==null&&ut(C,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var bt=xS(W,o);To(e,n,bt,si(e))}else To(e,n,o,si(e))}catch(Tt){To(e,n,{then:function(){},status:"rejected",reason:Tt},si())}finally{I.p=f,y!==null&&C.types!==null&&(y.types=C.types),U.T=y}}function TS(){}function Af(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=f0(e).queue;u0(e,u,n,X,a===null?TS:function(){return d0(e),a(o)})}function f0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:X},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function d0(e){var n=f0(e);n.next===null&&(n=e.alternate.memoizedState),To(e,n.next.queue,{},si())}function Rf(){return En(Vo)}function h0(){return rn().memoizedState}function p0(){return rn().memoizedState}function AS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=Ba(a);var o=za(n,e,a);o!==null&&(Zn(o,n,a),So(o,n,a)),n={cache:ef()},e.payload=n;return}n=n.return}}function RS(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ql(e)?g0(n,a):(a=Xu(e,n,a,o),a!==null&&(Zn(a,e,o),_0(a,n,o)))}function m0(e,n,a){var o=si();To(e,n,a,o)}function To(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ql(e))g0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,C=f(y,a);if(u.hasEagerState=!0,u.eagerState=C,$n(C,y))return Nl(e,n,u,0),qe===null&&Dl(),!1}catch{}finally{}if(a=Xu(e,n,u,o),a!==null)return Zn(a,e,o),_0(a,n,o),!0}return!1}function Cf(e,n,a,o){if(o={lane:2,revertLane:rd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ql(e)){if(n)throw Error(s(479))}else n=Xu(e,a,o,2),n!==null&&Zn(n,e,2)}function Ql(e){var n=e.alternate;return e===he||n!==null&&n===he}function g0(e,n){fr=Xl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function _0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Xs(e,a)}}var Ao={readContext:En,use:ql,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};Ao.useEffectEvent=en;var v0={readContext:En,use:ql,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:e0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Zl(4194308,4,s0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Zl(4194308,4,e,n)},useInsertionEffect:function(e,n){Zl(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var o=e();if(As){Ht(!0);try{e()}finally{Ht(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(As){Ht(!0);try{a(n)}finally{Ht(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=RS.bind(null,he,e),[o.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=yf(e);var n=e.queue,a=m0.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ef,useDeferredValue:function(e,n){var a=Gn();return Tf(a,e,n)},useTransition:function(){var e=yf(!1);return e=u0.bind(null,he,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=he,u=Gn();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(Re&127)!==0||zm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,e0(Gm.bind(null,o,f,e),[e]),o.flags|=2048,hr(9,{destroy:void 0},Hm.bind(null,o,f,a,n),null),a},useId:function(){var e=Gn(),n=qe.identifierPrefix;if(we){var a=Ii,o=Fi;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Wl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=SS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Rf,useFormState:Km,useActionState:Km,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Cf.bind(null,he,!0,a),a.dispatch=n,[e,n]},useMemoCache:vf,useCacheRefresh:function(){return Gn().memoizedState=AS.bind(null,he)},useEffectEvent:function(e){var n=Gn(),a={impl:e};return n.memoizedState=a,function(){if((Ie&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},wf={readContext:En,use:ql,useCallback:o0,useContext:En,useEffect:bf,useImperativeHandle:r0,useInsertionEffect:i0,useLayoutEffect:a0,useMemo:l0,useReducer:Yl,useRef:t0,useState:function(){return Yl(la)},useDebugValue:Ef,useDeferredValue:function(e,n){var a=rn();return c0(a,ke.memoizedState,e,n)},useTransition:function(){var e=Yl(la)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Eo(e),n]},useSyncExternalStore:Bm,useId:h0,useHostTransitionStatus:Rf,useFormState:Qm,useActionState:Qm,useOptimistic:function(e,n){var a=rn();return Xm(a,ke,e,n)},useMemoCache:vf,useCacheRefresh:p0};wf.useEffectEvent=n0;var x0={readContext:En,use:ql,useCallback:o0,useContext:En,useEffect:bf,useImperativeHandle:r0,useInsertionEffect:i0,useLayoutEffect:a0,useMemo:l0,useReducer:Sf,useRef:t0,useState:function(){return Sf(la)},useDebugValue:Ef,useDeferredValue:function(e,n){var a=rn();return ke===null?Tf(a,e,n):c0(a,ke.memoizedState,e,n)},useTransition:function(){var e=Sf(la)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Eo(e),n]},useSyncExternalStore:Bm,useId:h0,useHostTransitionStatus:Rf,useFormState:$m,useActionState:$m,useOptimistic:function(e,n){var a=rn();return ke!==null?Xm(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:vf,useCacheRefresh:p0};x0.useEffectEvent=n0;function Df(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:S({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Nf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ba(o);u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(Zn(n,e,o),So(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ba(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(Zn(n,e,o),So(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=Ba(a);o.tag=2,n!=null&&(o.callback=n),n=za(e,o,a),n!==null&&(Zn(n,e,a),So(n,e,a))}};function S0(e,n,a,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!fo(a,o)||!fo(u,f):!0}function y0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Nf.enqueueReplaceState(n,n.state,null)}function Rs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=S({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function M0(e){wl(e)}function b0(e){console.error(e)}function E0(e){wl(e)}function Jl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function T0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Uf(e,n,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Jl(e,n)},a}function A0(e){return e=Ba(e),e.tag=3,e}function R0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){T0(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){T0(n,a,o),typeof u!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function CS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&sr(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?uc():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===zl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),id(e,o,u)),!1;case 22:return a.flags|=65536,o===zl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),id(e,o,u)),!1}throw Error(s(435,a.tag))}return id(e,o,u),uc(),!1}if(we)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ku&&(e=Error(s(422),{cause:o}),mo(di(e,a)))):(o!==Ku&&(n=Error(s(423),{cause:o}),mo(di(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=di(o,a),u=Uf(e.stateNode,o,u),lf(e,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:o});if(f=di(f,a),Oo===null?Oo=[f]:Oo.push(f),nn!==4&&(nn=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Uf(a.stateNode,o,e),lf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Wa===null||!Wa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=A0(u),R0(u,e,a,o),lf(a,u),!1}a=a.return}while(a!==null);return!1}var Lf=Error(s(461)),hn=!1;function Tn(e,n,a,o){n.child=e===null?Nm(n,null,a,o):Ts(n,e.child,a,o)}function C0(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var C in o)C!=="ref"&&(y[C]=o[C])}else y=o;return ys(n),o=pf(e,n,a,y,f,u),C=mf(),e!==null&&!hn?(gf(e,n,u),ca(e,n,u)):(we&&C&&Yu(n),n.flags|=1,Tn(e,n,o,u),n.child)}function w0(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Wu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,D0(e,n,f,o,u)):(e=Ll(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Gf(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:fo,a(y,o)&&e.ref===n.ref)return ca(e,n,u)}return n.flags|=1,e=ia(f,o),e.ref=n.ref,e.return=n,n.child=e}function D0(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(fo(f,o)&&e.ref===n.ref)if(hn=!1,n.pendingProps=o=f,Gf(e,u))(e.flags&131072)!==0&&(hn=!0);else return n.lanes=e.lanes,ca(e,n,u)}return Of(e,n,a,o,u)}function N0(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return U0(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Il(n,f!==null?f.cachePool:null),f!==null?Om(n,f):uf(),Pm(n);else return o=n.lanes=536870912,U0(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Il(n,f.cachePool),Om(n,f),Ga(),n.memoizedState=null):(e!==null&&Il(n,null),uf(),Ga());return Tn(e,n,u,a),n.child}function Ro(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function U0(e,n,a,o,u){var f=af();return f=f===null?null:{parent:fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Il(n,null),uf(),Pm(n),e!==null&&sr(e,n,o,!0),n.childLanes=u,null}function $l(e,n){return n=ec({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function L0(e,n,a){return Ts(n,e.child,null,a),e=$l(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function wS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(we){if(o.mode==="hidden")return e=$l(n,o),n.lanes=536870912,Ro(null,e);if(df(n),(e=Ye)?(e=Wg(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:La!==null?{id:Fi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=gm(e),a.return=n,n.child=a,bn=n,Ye=null)):e=null,e===null)throw Pa(n);return n.lanes=536870912,null}return $l(n,o)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(df(n),u)if(n.flags&256)n.flags&=-257,n=L0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(hn||sr(e,n,a,!1),u=(a&e.childLanes)!==0,hn||u){if(o=qe,o!==null&&(y=vl(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,_s(e,y),Zn(o,e,y),Lf;uc(),n=L0(e,n,a)}else e=f.treeContext,Ye=_i(y.nextSibling),bn=n,we=!0,Oa=null,mi=!1,e!==null&&xm(n,e),n=$l(n,o),n.flags|=4096;return n}return e=ia(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function tc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Of(e,n,a,o,u){return ys(n),a=pf(e,n,a,o,void 0,u),o=mf(),e!==null&&!hn?(gf(e,n,u),ca(e,n,u)):(we&&o&&Yu(n),n.flags|=1,Tn(e,n,a,u),n.child)}function O0(e,n,a,o,u,f){return ys(n),n.updateQueue=null,a=Im(n,o,a,u),Fm(e),o=mf(),e!==null&&!hn?(gf(e,n,f),ca(e,n,f)):(we&&o&&Yu(n),n.flags|=1,Tn(e,n,a,f),n.child)}function P0(e,n,a,o,u){if(ys(n),n.stateNode===null){var f=er,y=a.contextType;typeof y=="object"&&y!==null&&(f=En(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Nf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},rf(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?En(y):er,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Df(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&Nf.enqueueReplaceState(f,f.state,null),Mo(n,o,f,u),yo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var C=n.memoizedProps,W=Rs(a,C);f.props=W;var ut=f.context,bt=a.contextType;y=er,typeof bt=="object"&&bt!==null&&(y=En(bt));var Tt=a.getDerivedStateFromProps;bt=typeof Tt=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,bt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||ut!==y)&&y0(n,f,o,y),Ia=!1;var ht=n.memoizedState;f.state=ht,Mo(n,o,f,u),yo(),ut=n.memoizedState,C||ht!==ut||Ia?(typeof Tt=="function"&&(Df(n,a,Tt,o),ut=n.memoizedState),(W=Ia||S0(n,a,W,o,ht,ut,y))?(bt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ut),f.props=o,f.state=ut,f.context=y,o=W):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,of(e,n),y=n.memoizedProps,bt=Rs(a,y),f.props=bt,Tt=n.pendingProps,ht=f.context,ut=a.contextType,W=er,typeof ut=="object"&&ut!==null&&(W=En(ut)),C=a.getDerivedStateFromProps,(ut=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==Tt||ht!==W)&&y0(n,f,o,W),Ia=!1,ht=n.memoizedState,f.state=ht,Mo(n,o,f,u),yo();var vt=n.memoizedState;y!==Tt||ht!==vt||Ia||e!==null&&e.dependencies!==null&&Pl(e.dependencies)?(typeof C=="function"&&(Df(n,a,C,o),vt=n.memoizedState),(bt=Ia||S0(n,a,bt,o,ht,vt,W)||e!==null&&e.dependencies!==null&&Pl(e.dependencies))?(ut||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,vt,W),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,vt,W)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&ht===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ht===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=vt),f.props=o,f.state=vt,f.context=W,o=bt):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&ht===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ht===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,tc(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Ts(n,e.child,null,u),n.child=Ts(n,null,a,u)):Tn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ca(e,n,u),e}function F0(e,n,a,o){return xs(),n.flags|=256,Tn(e,n,a,o),n.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ff(e){return{baseLanes:e,cachePool:Tm()}}function If(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function I0(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?Ha(n):Ga(),(e=Ye)?(e=Wg(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:La!==null?{id:Fi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=gm(e),a.return=n,n.child=a,bn=n,Ye=null)):e=null,e===null)throw Pa(n);return xd(e)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(Ga(),u=n.mode,C=ec({mode:"hidden",children:C},u),o=vs(o,u,a,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=Ff(a),o.childLanes=If(e,y,a),n.memoizedState=Pf,Ro(null,o)):(Ha(n),Bf(n,C))}var W=e.memoizedState;if(W!==null&&(C=W.dehydrated,C!==null)){if(f)n.flags&256?(Ha(n),n.flags&=-257,n=zf(e,n,a)):n.memoizedState!==null?(Ga(),n.child=e.child,n.flags|=128,n=null):(Ga(),C=o.fallback,u=n.mode,o=ec({mode:"visible",children:o.children},u),C=vs(C,u,a,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,Ts(n,e.child,null,a),o=n.child,o.memoizedState=Ff(a),o.childLanes=If(e,y,a),n.memoizedState=Pf,n=Ro(null,o));else if(Ha(n),xd(C)){if(y=C.nextSibling&&C.nextSibling.dataset,y)var ut=y.dgst;y=ut,o=Error(s(419)),o.stack="",o.digest=y,mo({value:o,source:null,stack:null}),n=zf(e,n,a)}else if(hn||sr(e,n,a,!1),y=(a&e.childLanes)!==0,hn||y){if(y=qe,y!==null&&(o=vl(y,a),o!==0&&o!==W.retryLane))throw W.retryLane=o,_s(e,o),Zn(y,e,o),Lf;vd(C)||uc(),n=zf(e,n,a)}else vd(C)?(n.flags|=192,n.child=e.child,n=null):(e=W.treeContext,Ye=_i(C.nextSibling),bn=n,we=!0,Oa=null,mi=!1,e!==null&&xm(n,e),n=Bf(n,o.children),n.flags|=4096);return n}return u?(Ga(),C=o.fallback,u=n.mode,W=e.child,ut=W.sibling,o=ia(W,{mode:"hidden",children:o.children}),o.subtreeFlags=W.subtreeFlags&65011712,ut!==null?C=ia(ut,C):(C=vs(C,u,a,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,Ro(null,o),o=n.child,C=e.child.memoizedState,C===null?C=Ff(a):(u=C.cachePool,u!==null?(W=fn._currentValue,u=u.parent!==W?{parent:W,pool:W}:u):u=Tm(),C={baseLanes:C.baseLanes|a,cachePool:u}),o.memoizedState=C,o.childLanes=If(e,y,a),n.memoizedState=Pf,Ro(e.child,o)):(Ha(n),a=e.child,e=a.sibling,a=ia(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function Bf(e,n){return n=ec({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ec(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function zf(e,n,a){return Ts(n,e.child,null,a),e=Bf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function B0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),$u(e.return,n,a)}function Hf(e,n,a,o,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function z0(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=sn.current,C=(y&2)!==0;if(C?(y=y&1|2,n.flags|=128):y&=1,et(sn,y),Tn(e,n,o,a),o=we?po:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&B0(e,a,n);else if(e.tag===19)B0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&kl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Hf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&kl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Hf(n,!0,a,null,f,o);break;case"together":Hf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ca(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Xa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(sr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ia(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ia(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Gf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Pl(e)))}function DS(e,n,a){switch(n.tag){case 3:ft(n,n.stateNode.containerInfo),Fa(n,fn,e.memoizedState.cache),xs();break;case 27:case 5:Nt(n);break;case 4:ft(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,df(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?I0(e,n,a):(Ha(n),e=ca(e,n,a),e!==null?e.sibling:null);Ha(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(sr(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return z0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),et(sn,sn.current),o)break;return null;case 22:return n.lanes=0,N0(e,n,a,n.pendingProps);case 24:Fa(n,fn,e.memoizedState.cache)}return ca(e,n,a)}function H0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)hn=!0;else{if(!Gf(e,a)&&(n.flags&128)===0)return hn=!1,DS(e,n,a);hn=(e.flags&131072)!==0}else hn=!1,we&&(n.flags&1048576)!==0&&vm(n,po,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=bs(n.elementType),n.type=e,typeof e=="function")Wu(e)?(o=Rs(e,o),n.tag=1,n=P0(null,n,e,o,a)):(n.tag=0,n=Of(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===N){n.tag=11,n=C0(null,n,e,o,a);break t}else if(u===z){n.tag=14,n=w0(null,n,e,o,a);break t}}throw n=at(e)||e,Error(s(306,n,""))}}return n;case 0:return Of(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Rs(o,n.pendingProps),P0(e,n,o,u,a);case 3:t:{if(ft(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,of(e,n),Mo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Fa(n,fn,o),o!==f.cache&&tf(n,[fn],a,!0),yo(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=F0(e,n,o,a);break t}else if(o!==u){u=di(Error(s(424)),n),mo(u),n=F0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=_i(e.firstChild),bn=n,we=!0,Oa=null,mi=!0,a=Nm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(xs(),o===u){n=ca(e,n,a);break t}Tn(e,n,o,a)}n=n.child}return n;case 26:return tc(e,n),e===null?(a=Qg(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,o=_c(Z.current).createElement(a),o[ln]=n,o[gn]=e,An(o,a,e),Q(o),n.stateNode=o):n.memoizedState=Qg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Nt(n),e===null&&we&&(o=n.stateNode=Yg(n.type,n.pendingProps,Z.current),bn=n,mi=!0,u=Ye,Za(n.type)?(Sd=u,Ye=_i(o.firstChild)):Ye=u),Tn(e,n,n.pendingProps.children,a),tc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((u=o=Ye)&&(o=ry(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,bn=n,Ye=_i(o.firstChild),mi=!1,u=!0):u=!1),u||Pa(n)),Nt(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,md(u,f)?o=null:y!==null&&md(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=pf(e,n,yS,null,null,a),Vo._currentValue=u),tc(e,n),Tn(e,n,o,a),n.child;case 6:return e===null&&we&&((e=a=Ye)&&(a=oy(a,n.pendingProps,mi),a!==null?(n.stateNode=a,bn=n,Ye=null,e=!0):e=!1),e||Pa(n)),null;case 13:return I0(e,n,a);case 4:return ft(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Ts(n,null,o,a):Tn(e,n,o,a),n.child;case 11:return C0(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Fa(n,n.type,o.value),Tn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ys(n),u=En(u),o=o(u),n.flags|=1,Tn(e,n,o,a),n.child;case 14:return w0(e,n,n.type,n.pendingProps,a);case 15:return D0(e,n,n.type,n.pendingProps,a);case 19:return z0(e,n,a);case 31:return wS(e,n,a);case 22:return N0(e,n,a,n.pendingProps);case 24:return ys(n),o=En(fn),e===null?(u=af(),u===null&&(u=qe,f=ef(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},rf(n),Fa(n,fn,u)):((e.lanes&a)!==0&&(of(e,n),Mo(n,null,null,a),yo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Fa(n,fn,o)):(o=f.cache,Fa(n,fn,o),o!==u.cache&&tf(n,[fn],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ua(e){e.flags|=4}function Vf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(hg())e.flags|=8192;else throw Es=zl,sf}else e.flags&=-16777217}function G0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!n_(n))if(hg())e.flags|=8192;else throw Es=zl,sf}function nc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ze():536870912,e.lanes|=n,_r|=n)}function Co(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function NS(e,n,a){var o=n.pendingProps;switch(Zu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(fn),St(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ar(n)?ua(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Qu())),Ze(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ua(n),f!==null?(Ze(n),G0(n,f)):(Ze(n),Vf(n,u,null,o,a))):f?f!==e.memoizedState?(ua(n),Ze(n),G0(n,f)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ua(n),Ze(n),Vf(n,u,e,o,a)),null;case 27:if(wt(n),a=Z.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=pt.current,ar(n)?Sm(n):(e=Yg(u,o,a),n.stateNode=e,ua(n))}return Ze(n),null;case 5:if(wt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(f=pt.current,ar(n))Sm(n);else{var y=_c(Z.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[ln]=n,f[gn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(An(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ua(n)}}return Ze(n),Vf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=Z.current,ar(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=bn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ig(e.nodeValue,a)),e||Pa(n,!0)}else e=_c(e).createTextNode(o),e[ln]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=ar(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[ln]=n}else xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=Qu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=ar(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else xs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=Qu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),nc(n,n.updateQueue),Ze(n),null);case 4:return St(),e===null&&ud(n.stateNode.containerInfo),Ze(n),null;case 10:return ra(n.type),Ze(n),null;case 19:if(k(sn),o=n.memoizedState,o===null)return Ze(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Co(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=kl(e),f!==null){for(n.flags|=128,Co(o,!1),e=f.updateQueue,n.updateQueue=e,nc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)mm(a,e),a=a.sibling;return et(sn,sn.current&1|2),we&&aa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>oc&&(n.flags|=128,u=!0,Co(o,!1),n.lanes=4194304)}else{if(!u)if(e=kl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,nc(n,e),Co(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!we)return Ze(n),null}else 2*T()-o.renderingStartTime>oc&&a!==536870912&&(n.flags|=128,u=!0,Co(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=sn.current,et(sn,u?a&1|2:a&1),we&&aa(n,o.treeForkCount),e):(Ze(n),null);case 22:case 23:return ni(n),ff(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&nc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&k(Ms),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(fn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function US(e,n){switch(Zu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ra(fn),St(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return wt(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));xs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return k(sn),null;case 4:return St(),null;case 10:return ra(n.type),null;case 22:case 23:return ni(n),ff(),e!==null&&k(Ms),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ra(fn),null;case 25:return null;default:return null}}function V0(e,n){switch(Zu(n),n.tag){case 3:ra(fn),St();break;case 26:case 27:case 5:wt(n);break;case 4:St();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:k(sn);break;case 10:ra(n.type);break;case 22:case 23:ni(n),ff(),e!==null&&k(Ms);break;case 24:ra(fn)}}function wo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(C){Ge(n,n.return,C)}}function Va(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,C=y.destroy;if(C!==void 0){y.destroy=void 0,u=n;var W=a,ut=C;try{ut()}catch(bt){Ge(u,W,bt)}}}o=o.next}while(o!==f)}}catch(bt){Ge(n,n.return,bt)}}function k0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Lm(n,a)}catch(o){Ge(e,e.return,o)}}}function X0(e,n,a){a.props=Rs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ge(e,n,o)}}function Do(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ge(e,n,u)}}function Bi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function W0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function kf(e,n,a){try{var o=e.stateNode;ty(o,e.type,a,n),o[gn]=n}catch(u){Ge(e,e.return,u)}}function j0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function Xf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||j0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Wf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ea));else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Wf(e,n,a),e=e.sibling;e!==null;)Wf(e,n,a),e=e.sibling}function ic(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ic(e,n,a),e=e.sibling;e!==null;)ic(e,n,a),e=e.sibling}function q0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);An(n,o,a),n[ln]=e,n[gn]=a}catch(f){Ge(e,e.return,f)}}var fa=!1,pn=!1,jf=!1,Y0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function LS(e,n){if(e=e.containerInfo,hd=Ec,e=rm(e),Bu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,C=-1,W=-1,ut=0,bt=0,Tt=e,ht=null;e:for(;;){for(var vt;Tt!==a||u!==0&&Tt.nodeType!==3||(C=y+u),Tt!==f||o!==0&&Tt.nodeType!==3||(W=y+o),Tt.nodeType===3&&(y+=Tt.nodeValue.length),(vt=Tt.firstChild)!==null;)ht=Tt,Tt=vt;for(;;){if(Tt===e)break e;if(ht===a&&++ut===u&&(C=y),ht===f&&++bt===o&&(W=y),(vt=Tt.nextSibling)!==null)break;Tt=ht,ht=Tt.parentNode}Tt=vt}a=C===-1||W===-1?null:{start:C,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(pd={focusedElem:e,selectionRange:a},Ec=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Kt=Rs(a.type,u);e=o.getSnapshotBeforeUpdate(Kt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(re){Ge(a,a.return,re)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)_d(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":_d(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}}function Z0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ha(e,a),o&4&&wo(5,a);break;case 1:if(ha(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Ge(a,a.return,y)}else{var u=Rs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ge(a,a.return,y)}}o&64&&k0(a),o&512&&Do(a,a.return);break;case 3:if(ha(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Lm(e,n)}catch(y){Ge(a,a.return,y)}}break;case 27:n===null&&o&4&&q0(a);case 26:case 5:ha(e,a),n===null&&o&4&&W0(a),o&512&&Do(a,a.return);break;case 12:ha(e,a);break;case 31:ha(e,a),o&4&&J0(e,a);break;case 13:ha(e,a),o&4&&$0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=VS.bind(null,a),ly(e,a))));break;case 22:if(o=a.memoizedState!==null||fa,!o){n=n!==null&&n.memoizedState!==null||pn,u=fa;var f=pn;fa=o,(pn=n)&&!f?pa(e,a,(a.subtreeFlags&8772)!==0):ha(e,a),fa=u,pn=f}break;case 30:break;default:ha(e,a)}}function K0(e){var n=e.alternate;n!==null&&(e.alternate=null,K0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&io(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Wn=!1;function da(e,n,a){for(a=a.child;a!==null;)Q0(e,n,a),a=a.sibling}function Q0(e,n,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Ct,a)}catch{}switch(a.tag){case 26:pn||Bi(a,n),da(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||Bi(a,n);var o=$e,u=Wn;Za(a.type)&&($e=a.stateNode,Wn=!1),da(e,n,a),zo(a.stateNode),$e=o,Wn=u;break;case 5:pn||Bi(a,n);case 6:if(o=$e,u=Wn,$e=null,da(e,n,a),$e=o,Wn=u,$e!==null)if(Wn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:$e!==null&&(Wn?(e=$e,kg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Tr(e)):kg($e,a.stateNode));break;case 4:o=$e,u=Wn,$e=a.stateNode.containerInfo,Wn=!0,da(e,n,a),$e=o,Wn=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),pn||Va(4,a,n),da(e,n,a);break;case 1:pn||(Bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&X0(a,n,o)),da(e,n,a);break;case 21:da(e,n,a);break;case 22:pn=(o=pn)||a.memoizedState!==null,da(e,n,a),pn=o;break;default:da(e,n,a)}}function J0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Tr(e)}catch(a){Ge(n,n.return,a)}}}function $0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tr(e)}catch(a){Ge(n,n.return,a)}}function OS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Y0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Y0),n;default:throw Error(s(435,e.tag))}}function ac(e,n){var a=OS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=kS.bind(null,e,o);o.then(u,u)}})}function jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,y=n,C=y;t:for(;C!==null;){switch(C.tag){case 27:if(Za(C.type)){$e=C.stateNode,Wn=!1;break t}break;case 5:$e=C.stateNode,Wn=!1;break t;case 3:case 4:$e=C.stateNode.containerInfo,Wn=!0;break t}C=C.return}if($e===null)throw Error(s(160));Q0(f,y,u),$e=null,Wn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)tg(n,e),n=n.sibling}var Ri=null;function tg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),qn(e),o&4&&(Va(3,e,e.return),wo(3,e),Va(5,e,e.return));break;case 1:jn(n,e),qn(e),o&512&&(pn||a===null||Bi(a,a.return)),o&64&&fa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ri;if(jn(n,e),qn(e),o&512&&(pn||a===null||Bi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ds]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),An(f,o,a),f[ln]=e,Q(f),o=f;break t;case"link":var y=t_("link","href",u).get(o+(a.href||""));if(y){for(var C=0;C<y.length;C++)if(f=y[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(C,1);break e}}f=u.createElement(o),An(f,o,a),u.head.appendChild(f);break;case"meta":if(y=t_("meta","content",u).get(o+(a.content||""))){for(C=0;C<y.length;C++)if(f=y[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(C,1);break e}}f=u.createElement(o),An(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[ln]=e,Q(f),o=f}e.stateNode=o}else e_(u,e.type,e.stateNode);else e.stateNode=$g(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?e_(u,e.type,e.stateNode):$g(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&kf(e,e.memoizedProps,a.memoizedProps)}break;case 27:jn(n,e),qn(e),o&512&&(pn||a===null||Bi(a,a.return)),a!==null&&o&4&&kf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,e),qn(e),o&512&&(pn||a===null||Bi(a,a.return)),e.flags&32){u=e.stateNode;try{Hn(u,"")}catch(Kt){Ge(e,e.return,Kt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,kf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(jf=!0);break;case 6:if(jn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Kt){Ge(e,e.return,Kt)}}break;case 3:if(Sc=null,u=Ri,Ri=vc(n.containerInfo),jn(n,e),Ri=u,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Tr(n.containerInfo)}catch(Kt){Ge(e,e.return,Kt)}jf&&(jf=!1,eg(e));break;case 4:o=Ri,Ri=vc(e.stateNode.containerInfo),jn(n,e),qn(e),Ri=o;break;case 12:jn(n,e),qn(e);break;case 31:jn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ac(e,o)));break;case 13:jn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(rc=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ac(e,o)));break;case 22:u=e.memoizedState!==null;var W=a!==null&&a.memoizedState!==null,ut=fa,bt=pn;if(fa=ut||u,pn=bt||W,jn(n,e),pn=bt,fa=ut,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||W||fa||pn||Cs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){W=a=n;try{if(f=W.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{C=W.stateNode;var Tt=W.memoizedProps.style,ht=Tt!=null&&Tt.hasOwnProperty("display")?Tt.display:null;C.style.display=ht==null||typeof ht=="boolean"?"":(""+ht).trim()}}catch(Kt){Ge(W,W.return,Kt)}}}else if(n.tag===6){if(a===null){W=n;try{W.stateNode.nodeValue=u?"":W.memoizedProps}catch(Kt){Ge(W,W.return,Kt)}}}else if(n.tag===18){if(a===null){W=n;try{var vt=W.stateNode;u?Xg(vt,!0):Xg(W.stateNode,!1)}catch(Kt){Ge(W,W.return,Kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ac(e,a))));break;case 19:jn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ac(e,o)));break;case 30:break;case 21:break;default:jn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(j0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Xf(e);ic(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(Hn(y,""),a.flags&=-33);var C=Xf(e);ic(e,C,y);break;case 3:case 4:var W=a.stateNode.containerInfo,ut=Xf(e);Wf(e,ut,W);break;default:throw Error(s(161))}}catch(bt){Ge(e,e.return,bt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function eg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;eg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ha(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Z0(e,n.alternate,n),n=n.sibling}function Cs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Va(4,n,n.return),Cs(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&X0(n,n.return,a),Cs(n);break;case 27:zo(n.stateNode);case 26:case 5:Bi(n,n.return),Cs(n);break;case 22:n.memoizedState===null&&Cs(n);break;case 30:Cs(n);break;default:Cs(n)}e=e.sibling}}function pa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:pa(u,f,a),wo(4,f);break;case 1:if(pa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ut){Ge(o,o.return,ut)}if(o=f,u=o.updateQueue,u!==null){var C=o.stateNode;try{var W=u.shared.hiddenCallbacks;if(W!==null)for(u.shared.hiddenCallbacks=null,u=0;u<W.length;u++)Um(W[u],C)}catch(ut){Ge(o,o.return,ut)}}a&&y&64&&k0(f),Do(f,f.return);break;case 27:q0(f);case 26:case 5:pa(u,f,a),a&&o===null&&y&4&&W0(f),Do(f,f.return);break;case 12:pa(u,f,a);break;case 31:pa(u,f,a),a&&y&4&&J0(u,f);break;case 13:pa(u,f,a),a&&y&4&&$0(u,f);break;case 22:f.memoizedState===null&&pa(u,f,a),Do(f,f.return);break;case 30:break;default:pa(u,f,a)}n=n.sibling}}function qf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&go(a))}function Yf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&go(e))}function Ci(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ng(e,n,a,o),n=n.sibling}function ng(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,o),u&2048&&wo(9,n);break;case 1:Ci(e,n,a,o);break;case 3:Ci(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&go(e)));break;case 12:if(u&2048){Ci(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,C=f.onPostCommit;typeof C=="function"&&C(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(W){Ge(n,n.return,W)}}else Ci(e,n,a,o);break;case 31:Ci(e,n,a,o);break;case 13:Ci(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(e,n,a,o):No(e,n):f._visibility&2?Ci(e,n,a,o):(f._visibility|=2,pr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&qf(y,n);break;case 24:Ci(e,n,a,o),u&2048&&Yf(n.alternate,n);break;default:Ci(e,n,a,o)}}function pr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,C=a,W=o,ut=y.flags;switch(y.tag){case 0:case 11:case 15:pr(f,y,C,W,u),wo(8,y);break;case 23:break;case 22:var bt=y.stateNode;y.memoizedState!==null?bt._visibility&2?pr(f,y,C,W,u):No(f,y):(bt._visibility|=2,pr(f,y,C,W,u)),u&&ut&2048&&qf(y.alternate,y);break;case 24:pr(f,y,C,W,u),u&&ut&2048&&Yf(y.alternate,y);break;default:pr(f,y,C,W,u)}n=n.sibling}}function No(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:No(a,o),u&2048&&qf(o.alternate,o);break;case 24:No(a,o),u&2048&&Yf(o.alternate,o);break;default:No(a,o)}n=n.sibling}}var Uo=8192;function mr(e,n,a){if(e.subtreeFlags&Uo)for(e=e.child;e!==null;)ig(e,n,a),e=e.sibling}function ig(e,n,a){switch(e.tag){case 26:mr(e,n,a),e.flags&Uo&&e.memoizedState!==null&&Sy(a,Ri,e.memoizedState,e.memoizedProps);break;case 5:mr(e,n,a);break;case 3:case 4:var o=Ri;Ri=vc(e.stateNode.containerInfo),mr(e,n,a),Ri=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Uo,Uo=16777216,mr(e,n,a),Uo=o):mr(e,n,a));break;default:mr(e,n,a)}}function ag(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Lo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,rg(o,e)}ag(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sg(e),e=e.sibling}function sg(e){switch(e.tag){case 0:case 11:case 15:Lo(e),e.flags&2048&&Va(9,e,e.return);break;case 3:Lo(e);break;case 12:Lo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,sc(e)):Lo(e);break;default:Lo(e)}}function sc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,rg(o,e)}ag(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Va(8,n,n.return),sc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,sc(n));break;default:sc(n)}e=e.sibling}}function rg(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:go(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else t:for(a=e;yn!==null;){o=yn;var u=o.sibling,f=o.return;if(K0(o),o===a){yn=null;break t}if(u!==null){u.return=f,yn=u;break t}yn=f}}}var PS={getCacheForType:function(e){var n=En(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return En(fn).controller.signal}},FS=typeof WeakMap=="function"?WeakMap:Map,Ie=0,qe=null,Me=null,Re=0,He=0,ii=null,ka=!1,gr=!1,Zf=!1,ma=0,nn=0,Xa=0,ws=0,Kf=0,ai=0,_r=0,Oo=null,Yn=null,Qf=!1,rc=0,og=0,oc=1/0,lc=null,Wa=null,vn=0,ja=null,vr=null,ga=0,Jf=0,$f=null,lg=null,Po=0,td=null;function si(){return(Ie&2)!==0&&Re!==0?Re&-Re:U.T!==null?rd():Pi()}function cg(){if(ai===0)if((Re&536870912)===0||we){var e=Ut;Ut<<=1,(Ut&3932160)===0&&(Ut=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function Zn(e,n,a){(e===qe&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(xr(e,0),qa(e,Re,ai,!1)),In(e,a),((Ie&2)===0||e!==qe)&&(e===qe&&((Ie&2)===0&&(ws|=a),nn===4&&qa(e,Re,ai,!1)),zi(e))}function ug(e,n,a){if((Ie&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||qt(e,n),u=o?zS(e,n):nd(e,n,!0),f=o;do{if(u===0){gr&&!o&&qa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!IS(a)){u=nd(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var C=e;u=Oo;var W=C.current.memoizedState.isDehydrated;if(W&&(xr(C,y).flags|=256),y=nd(C,y,!1),y!==2){if(Zf&&!W){C.errorRecoveryDisabledLanes|=f,ws|=f,u=4;break t}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){xr(e,0),qa(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,ai,!ka);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=rc+300-T(),10<u)){if(qa(o,n,ai,!ka),xt(o,0,!0)!==0)break t;ga=n,o.timeoutHandle=Gg(fg.bind(null,o,a,Yn,lc,Qf,n,ai,ws,_r,ka,f,"Throttled",-0,0),u);break t}fg(o,a,Yn,lc,Qf,n,ai,ws,_r,ka,f,null,-0,0)}}break}while(!0);zi(e)}function fg(e,n,a,o,u,f,y,C,W,ut,bt,Tt,ht,vt){if(e.timeoutHandle=-1,Tt=n.subtreeFlags,Tt&8192||(Tt&16785408)===16785408){Tt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},ig(n,f,Tt);var Kt=(f&62914560)===f?rc-T():(f&4194048)===f?og-T():0;if(Kt=yy(Tt,Kt),Kt!==null){ga=f,e.cancelPendingCommit=Kt(xg.bind(null,e,n,f,a,o,u,y,C,W,bt,Tt,null,ht,vt)),qa(e,f,y,!ut);return}}xg(e,n,f,a,o,u,y,C,W)}function IS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(e,n,a,o){n&=~Kf,n&=~ws,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-zt(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&no(e,a,n)}function cc(){return(Ie&6)===0?(Fo(0),!1):!0}function ed(){if(Me!==null){if(He===0)var e=Me.return;else e=Me,sa=Ss=null,_f(e),cr=null,vo=0,e=Me;for(;e!==null;)V0(e.alternate,e),e=e.return;Me=null}}function xr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,iy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ga=0,ed(),qe=e,Me=a=ia(e.current,null),Re=n,He=0,ii=null,ka=!1,gr=qt(e,n),Zf=!1,_r=ai=Kf=ws=Xa=nn=0,Yn=Oo=null,Qf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-zt(o),f=1<<u;n|=e[u],o&=~f}return ma=n,Dl(),a}function dg(e,n){he=null,U.H=Ao,n===lr||n===Bl?(n=Cm(),He=3):n===sf?(n=Cm(),He=4):He=n===Lf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,Me===null&&(nn=1,Jl(e,di(n,e.current)))}function hg(){var e=ei.current;return e===null?!0:(Re&4194048)===Re?gi===null:(Re&62914560)===Re||(Re&536870912)!==0?e===gi:!1}function pg(){var e=U.H;return U.H=Ao,e===null?Ao:e}function mg(){var e=U.A;return U.A=PS,e}function uc(){nn=4,ka||(Re&4194048)!==Re&&ei.current!==null||(gr=!0),(Xa&134217727)===0&&(ws&134217727)===0||qe===null||qa(qe,Re,ai,!1)}function nd(e,n,a){var o=Ie;Ie|=2;var u=pg(),f=mg();(qe!==e||Re!==n)&&(lc=null,xr(e,n)),n=!1;var y=nn;t:do try{if(He!==0&&Me!==null){var C=Me,W=ii;switch(He){case 8:ed(),y=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var ut=He;if(He=0,ii=null,Sr(e,C,W,ut),a&&gr){y=0;break t}break;default:ut=He,He=0,ii=null,Sr(e,C,W,ut)}}BS(),y=nn;break}catch(bt){dg(e,bt)}while(!0);return n&&e.shellSuspendCounter++,sa=Ss=null,Ie=o,U.H=u,U.A=f,Me===null&&(qe=null,Re=0,Dl()),y}function BS(){for(;Me!==null;)gg(Me)}function zS(e,n){var a=Ie;Ie|=2;var o=pg(),u=mg();qe!==e||Re!==n?(lc=null,oc=T()+500,xr(e,n)):gr=qt(e,n);t:do try{if(He!==0&&Me!==null){n=Me;var f=ii;e:switch(He){case 1:He=0,ii=null,Sr(e,n,f,1);break;case 2:case 9:if(Am(f)){He=0,ii=null,_g(n);break}n=function(){He!==2&&He!==9||qe!==e||(He=7),zi(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:Am(f)?(He=0,ii=null,_g(n)):(He=0,ii=null,Sr(e,n,f,7));break;case 5:var y=null;switch(Me.tag){case 26:y=Me.memoizedState;case 5:case 27:var C=Me;if(y?n_(y):C.stateNode.complete){He=0,ii=null;var W=C.sibling;if(W!==null)Me=W;else{var ut=C.return;ut!==null?(Me=ut,fc(ut)):Me=null}break e}}He=0,ii=null,Sr(e,n,f,5);break;case 6:He=0,ii=null,Sr(e,n,f,6);break;case 8:ed(),nn=6;break t;default:throw Error(s(462))}}HS();break}catch(bt){dg(e,bt)}while(!0);return sa=Ss=null,U.H=o,U.A=u,Ie=a,Me!==null?0:(qe=null,Re=0,Dl(),nn)}function HS(){for(;Me!==null&&!Xt();)gg(Me)}function gg(e){var n=H0(e.alternate,e,ma);e.memoizedProps=e.pendingProps,n===null?fc(e):Me=n}function _g(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=O0(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=O0(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:_f(n);default:V0(a,n),n=Me=mm(n,ma),n=H0(a,n,ma)}e.memoizedProps=e.pendingProps,n===null?fc(e):Me=n}function Sr(e,n,a,o){sa=Ss=null,_f(n),cr=null,vo=0;var u=n.return;try{if(CS(e,u,n,a,Re)){nn=1,Jl(e,di(a,e.current)),Me=null;return}}catch(f){if(u!==null)throw Me=u,f;nn=1,Jl(e,di(a,e.current)),Me=null;return}n.flags&32768?(we||o===1?e=!0:gr||(Re&536870912)!==0?e=!1:(ka=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),vg(n,e)):fc(n)}function fc(e){var n=e;do{if((n.flags&32768)!==0){vg(n,ka);return}e=n.return;var a=NS(n.alternate,n,ma);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=e}while(n!==null);nn===0&&(nn=5)}function vg(e,n){do{var a=US(e.alternate,e);if(a!==null){a.flags&=32767,Me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Me=e;return}Me=e=a}while(e!==null);nn=6,Me=null}function xg(e,n,a,o,u,f,y,C,W){e.cancelPendingCommit=null;do dc();while(vn!==0);if((Ie&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=ku,Mi(e,a,f,y,C,W),e===qe&&(Me=qe=null,Re=0),vr=n,ja=e,ga=a,Jf=f,$f=u,lg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,XS(mt,function(){return Eg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=I.p,I.p=2,y=Ie,Ie|=4;try{LS(e,n,a)}finally{Ie=y,I.p=u,U.T=o}}vn=1,Sg(),yg(),Mg()}}function Sg(){if(vn===1){vn=0;var e=ja,n=vr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=I.p;I.p=2;var u=Ie;Ie|=4;try{tg(n,e);var f=pd,y=rm(e.containerInfo),C=f.focusedElem,W=f.selectionRange;if(y!==C&&C&&C.ownerDocument&&sm(C.ownerDocument.documentElement,C)){if(W!==null&&Bu(C)){var ut=W.start,bt=W.end;if(bt===void 0&&(bt=ut),"selectionStart"in C)C.selectionStart=ut,C.selectionEnd=Math.min(bt,C.value.length);else{var Tt=C.ownerDocument||document,ht=Tt&&Tt.defaultView||window;if(ht.getSelection){var vt=ht.getSelection(),Kt=C.textContent.length,re=Math.min(W.start,Kt),We=W.end===void 0?re:Math.min(W.end,Kt);!vt.extend&&re>We&&(y=We,We=re,re=y);var it=am(C,re),K=am(C,We);if(it&&K&&(vt.rangeCount!==1||vt.anchorNode!==it.node||vt.anchorOffset!==it.offset||vt.focusNode!==K.node||vt.focusOffset!==K.offset)){var ct=Tt.createRange();ct.setStart(it.node,it.offset),vt.removeAllRanges(),re>We?(vt.addRange(ct),vt.extend(K.node,K.offset)):(ct.setEnd(K.node,K.offset),vt.addRange(ct))}}}}for(Tt=[],vt=C;vt=vt.parentNode;)vt.nodeType===1&&Tt.push({element:vt,left:vt.scrollLeft,top:vt.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Tt.length;C++){var Et=Tt[C];Et.element.scrollLeft=Et.left,Et.element.scrollTop=Et.top}}Ec=!!hd,pd=hd=null}finally{Ie=u,I.p=o,U.T=a}}e.current=n,vn=2}}function yg(){if(vn===2){vn=0;var e=ja,n=vr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=I.p;I.p=2;var u=Ie;Ie|=4;try{Z0(e,n.alternate,n)}finally{Ie=u,I.p=o,U.T=a}}vn=3}}function Mg(){if(vn===4||vn===3){vn=0,P();var e=ja,n=vr,a=ga,o=lg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,vr=ja=null,bg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Wa=null),js(a),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Ct,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,u=I.p,I.p=2,U.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var C=o[y];f(C.value,{componentStack:C.stack})}}finally{U.T=n,I.p=u}}(ga&3)!==0&&dc(),zi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===td?Po++:(Po=0,td=e):Po=0,Fo(0)}}function bg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,go(n)))}function dc(){return Sg(),yg(),Mg(),Eg()}function Eg(){if(vn!==5)return!1;var e=ja,n=Jf;Jf=0;var a=js(ga),o=U.T,u=I.p;try{I.p=32>a?32:a,U.T=null,a=$f,$f=null;var f=ja,y=ga;if(vn=0,vr=ja=null,ga=0,(Ie&6)!==0)throw Error(s(331));var C=Ie;if(Ie|=4,sg(f.current),ng(f,f.current,y,a),Ie=C,Fo(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Ct,f)}catch{}return!0}finally{I.p=u,U.T=o,bg(e,n)}}function Tg(e,n,a){n=di(a,n),n=Uf(e.stateNode,n,2),e=za(e,n,2),e!==null&&(In(e,2),zi(e))}function Ge(e,n,a){if(e.tag===3)Tg(e,e,a);else for(;n!==null;){if(n.tag===3){Tg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Wa===null||!Wa.has(o))){e=di(a,e),a=A0(2),o=za(n,a,2),o!==null&&(R0(a,o,n,e),In(o,2),zi(o));break}}n=n.return}}function id(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new FS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Zf=!0,u.add(a),e=GS.bind(null,e,n,a),n.then(e,e))}function GS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(Re&a)===a&&(nn===4||nn===3&&(Re&62914560)===Re&&300>T()-rc?(Ie&2)===0&&xr(e,0):Kf|=a,_r===Re&&(_r=0)),zi(e)}function Ag(e,n){n===0&&(n=ze()),e=_s(e,n),e!==null&&(In(e,n),zi(e))}function VS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Ag(e,a)}function kS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Ag(e,a)}function XS(e,n){return me(e,n)}var hc=null,yr=null,ad=!1,pc=!1,sd=!1,Ya=0;function zi(e){e!==yr&&e.next===null&&(yr===null?hc=yr=e:yr=yr.next=e),pc=!0,ad||(ad=!0,jS())}function Fo(e,n){if(!sd&&pc){sd=!0;do for(var a=!1,o=hc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,C=o.pingedLanes;f=(1<<31-zt(42|e)+1)-1,f&=u&~(y&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Dg(o,f))}else f=Re,f=xt(o,o===qe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||qt(o,f)||(a=!0,Dg(o,f));o=o.next}while(a);sd=!1}}function WS(){Rg()}function Rg(){pc=ad=!1;var e=0;Ya!==0&&ny()&&(e=Ya);for(var n=T(),a=null,o=hc;o!==null;){var u=o.next,f=Cg(o,n);f===0?(o.next=null,a===null?hc=u:a.next=u,u===null&&(yr=a)):(a=o,(e!==0||(f&3)!==0)&&(pc=!0)),o=u}vn!==0&&vn!==5||Fo(e),Ya!==0&&(Ya=0)}function Cg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-zt(f),C=1<<y,W=u[y];W===-1?((C&a)===0||(C&o)!==0)&&(u[y]=ce(C,n)):W<=n&&(e.expiredLanes|=C),f&=~C}if(n=qe,a=Re,a=xt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ae(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||qt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ae(o),js(a)){case 2:case 8:a=At;break;case 32:a=mt;break;case 268435456:a=Lt;break;default:a=mt}return o=wg.bind(null,e),a=me(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ae(o),e.callbackPriority=2,e.callbackNode=null,2}function wg(e,n){if(vn!==0&&vn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(dc()&&e.callbackNode!==a)return null;var o=Re;return o=xt(e,e===qe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(ug(e,o,n),Cg(e,T()),e.callbackNode!=null&&e.callbackNode===a?wg.bind(null,e):null)}function Dg(e,n){if(dc())return null;ug(e,n,!0)}function jS(){ay(function(){(Ie&6)!==0?me(yt,WS):Rg()})}function rd(){if(Ya===0){var e=rr;e===0&&(e=Pt,Pt<<=1,(Pt&261888)===0&&(Pt=256)),Ya=e}return Ya}function Ng(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ml(""+e)}function Ug(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function qS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Ng((u[gn]||null).action),y=o.submitter;y&&(n=(n=y[gn]||null)?Ng(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var C=new Al("action","action",null,o,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var W=y?Ug(u,y):new FormData(u);Af(a,{pending:!0,data:W,method:u.method,action:f},null,W)}}else typeof f=="function"&&(C.preventDefault(),W=y?Ug(u,y):new FormData(u),Af(a,{pending:!0,data:W,method:u.method,action:f},f,W))},currentTarget:u}]})}}for(var od=0;od<Vu.length;od++){var ld=Vu[od],YS=ld.toLowerCase(),ZS=ld[0].toUpperCase()+ld.slice(1);Ai(YS,"on"+ZS)}Ai(cm,"onAnimationEnd"),Ai(um,"onAnimationIteration"),Ai(fm,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(fS,"onTransitionRun"),Ai(dS,"onTransitionStart"),Ai(hS,"onTransitionCancel"),Ai(dm,"onTransitionEnd"),Ft("onMouseEnter",["mouseout","mouseover"]),Ft("onMouseLeave",["mouseout","mouseover"]),Ft("onPointerEnter",["pointerout","pointerover"]),Ft("onPointerLeave",["pointerout","pointerover"]),ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function Lg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var C=o[y],W=C.instance,ut=C.currentTarget;if(C=C.listener,W!==f&&u.isPropagationStopped())break t;f=C,u.currentTarget=ut;try{f(u)}catch(bt){wl(bt)}u.currentTarget=null,f=W}else for(y=0;y<o.length;y++){if(C=o[y],W=C.instance,ut=C.currentTarget,C=C.listener,W!==f&&u.isPropagationStopped())break t;f=C,u.currentTarget=ut;try{f(u)}catch(bt){wl(bt)}u.currentTarget=null,f=W}}}}function be(e,n){var a=n[wa];a===void 0&&(a=n[wa]=new Set);var o=e+"__bubble";a.has(o)||(Og(n,e,2,!1),a.add(o))}function cd(e,n,a){var o=0;n&&(o|=4),Og(a,e,o,n)}var mc="_reactListening"+Math.random().toString(36).slice(2);function ud(e){if(!e[mc]){e[mc]=!0,_t.forEach(function(a){a!=="selectionchange"&&(KS.has(a)||cd(a,!1,e),cd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[mc]||(n[mc]=!0,cd("selectionchange",!1,n))}}function Og(e,n,a,o){switch(c_(n)){case 2:var u=Ey;break;case 8:u=Ty;break;default:u=Td}a=u.bind(null,n,a,e),u=void 0,!wu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function fd(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var C=o.stateNode.containerInfo;if(C===u)break;if(y===4)for(y=o.return;y!==null;){var W=y.tag;if((W===3||W===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;C!==null;){if(y=Da(C),y===null)return;if(W=y.tag,W===5||W===6||W===26||W===27){o=f=y;continue t}C=C.parentNode}}o=o.return}zp(function(){var ut=f,bt=Ru(a),Tt=[];t:{var ht=hm.get(e);if(ht!==void 0){var vt=Al,Kt=e;switch(e){case"keypress":if(El(a)===0)break t;case"keydown":case"keyup":vt=kx;break;case"focusin":Kt="focus",vt=Lu;break;case"focusout":Kt="blur",vt=Lu;break;case"beforeblur":case"afterblur":vt=Lu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":vt=Vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":vt=Nx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":vt=jx;break;case cm:case um:case fm:vt=Ox;break;case dm:vt=Yx;break;case"scroll":case"scrollend":vt=wx;break;case"wheel":vt=Kx;break;case"copy":case"cut":case"paste":vt=Fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":vt=Xp;break;case"toggle":case"beforetoggle":vt=Jx}var re=(n&4)!==0,We=!re&&(e==="scroll"||e==="scrollend"),it=re?ht!==null?ht+"Capture":null:ht;re=[];for(var K=ut,ct;K!==null;){var Et=K;if(ct=Et.stateNode,Et=Et.tag,Et!==5&&Et!==26&&Et!==27||ct===null||it===null||(Et=ao(K,it),Et!=null&&re.push(Bo(K,Et,ct))),We)break;K=K.return}0<re.length&&(ht=new vt(ht,Kt,null,a,bt),Tt.push({event:ht,listeners:re}))}}if((n&7)===0){t:{if(ht=e==="mouseover"||e==="pointerover",vt=e==="mouseout"||e==="pointerout",ht&&a!==Au&&(Kt=a.relatedTarget||a.fromElement)&&(Da(Kt)||Kt[$i]))break t;if((vt||ht)&&(ht=bt.window===bt?bt:(ht=bt.ownerDocument)?ht.defaultView||ht.parentWindow:window,vt?(Kt=a.relatedTarget||a.toElement,vt=ut,Kt=Kt?Da(Kt):null,Kt!==null&&(We=c(Kt),re=Kt.tag,Kt!==We||re!==5&&re!==27&&re!==6)&&(Kt=null)):(vt=null,Kt=ut),vt!==Kt)){if(re=Vp,Et="onMouseLeave",it="onMouseEnter",K="mouse",(e==="pointerout"||e==="pointerover")&&(re=Xp,Et="onPointerLeave",it="onPointerEnter",K="pointer"),We=vt==null?ht:hs(vt),ct=Kt==null?ht:hs(Kt),ht=new re(Et,K+"leave",vt,a,bt),ht.target=We,ht.relatedTarget=ct,Et=null,Da(bt)===ut&&(re=new re(it,K+"enter",Kt,a,bt),re.target=ct,re.relatedTarget=We,Et=re),We=Et,vt&&Kt)e:{for(re=QS,it=vt,K=Kt,ct=0,Et=it;Et;Et=re(Et))ct++;Et=0;for(var se=K;se;se=re(se))Et++;for(;0<ct-Et;)it=re(it),ct--;for(;0<Et-ct;)K=re(K),Et--;for(;ct--;){if(it===K||K!==null&&it===K.alternate){re=it;break e}it=re(it),K=re(K)}re=null}else re=null;vt!==null&&Pg(Tt,ht,vt,re,!1),Kt!==null&&We!==null&&Pg(Tt,We,Kt,re,!0)}}t:{if(ht=ut?hs(ut):window,vt=ht.nodeName&&ht.nodeName.toLowerCase(),vt==="select"||vt==="input"&&ht.type==="file")var Pe=Jp;else if(Kp(ht))if($p)Pe=lS;else{Pe=rS;var ne=sS}else vt=ht.nodeName,!vt||vt.toLowerCase()!=="input"||ht.type!=="checkbox"&&ht.type!=="radio"?ut&&Ys(ut.elementType)&&(Pe=Jp):Pe=oS;if(Pe&&(Pe=Pe(e,ut))){Qp(Tt,Pe,a,bt);break t}ne&&ne(e,ht,ut),e==="focusout"&&ut&&ht.type==="number"&&ut.memoizedProps.value!=null&&Ei(ht,"number",ht.value)}switch(ne=ut?hs(ut):window,e){case"focusin":(Kp(ne)||ne.contentEditable==="true")&&(Js=ne,zu=ut,ho=null);break;case"focusout":ho=zu=Js=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,om(Tt,a,bt);break;case"selectionchange":if(uS)break;case"keydown":case"keyup":om(Tt,a,bt)}var ve;if(Pu)t:{switch(e){case"compositionstart":var Ce="onCompositionStart";break t;case"compositionend":Ce="onCompositionEnd";break t;case"compositionupdate":Ce="onCompositionUpdate";break t}Ce=void 0}else Qs?Yp(e,a)&&(Ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ce="onCompositionStart");Ce&&(Wp&&a.locale!=="ko"&&(Qs||Ce!=="onCompositionStart"?Ce==="onCompositionEnd"&&Qs&&(ve=Hp()):(Ua=bt,Du="value"in Ua?Ua.value:Ua.textContent,Qs=!0)),ne=gc(ut,Ce),0<ne.length&&(Ce=new kp(Ce,e,null,a,bt),Tt.push({event:Ce,listeners:ne}),ve?Ce.data=ve:(ve=Zp(a),ve!==null&&(Ce.data=ve)))),(ve=tS?eS(e,a):nS(e,a))&&(Ce=gc(ut,"onBeforeInput"),0<Ce.length&&(ne=new kp("onBeforeInput","beforeinput",null,a,bt),Tt.push({event:ne,listeners:Ce}),ne.data=ve)),qS(Tt,e,ut,a,bt)}Lg(Tt,n)})}function Bo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function gc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ao(e,a),u!=null&&o.unshift(Bo(e,u,f)),u=ao(e,n),u!=null&&o.push(Bo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function QS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pg(e,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var C=a,W=C.alternate,ut=C.stateNode;if(C=C.tag,W!==null&&W===o)break;C!==5&&C!==26&&C!==27||ut===null||(W=ut,u?(ut=ao(a,f),ut!=null&&y.unshift(Bo(a,ut,W))):u||(ut=ao(a,f),ut!=null&&y.push(Bo(a,ut,W)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var JS=/\r\n?/g,$S=/\u0000|\uFFFD/g;function Fg(e){return(typeof e=="string"?e:""+e).replace(JS,`
`).replace($S,"")}function Ig(e,n){return n=Fg(n),Fg(e)===n}function Xe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Hn(e,""+o);break;case"className":fe(e,"class",o);break;case"tabIndex":fe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":fe(e,a,o);break;case"style":ta(e,o,f);break;case"data":if(n!=="object"){fe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ml(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ml(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ea);break;case"onScroll":o!=null&&be("scroll",e);break;case"onScrollEnd":o!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ml(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":be("beforetoggle",e),be("toggle",e),oe(e,"popover",o);break;case"xlinkActuate":Zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Zt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Zt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Zt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Zt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":oe(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Rx.get(a)||a,oe(e,a,o))}}function dd(e,n,a,o,u,f){switch(a){case"style":ta(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&Hn(e,""+o);break;case"onScroll":o!=null&&be("scroll",e);break;case"onScrollEnd":o!=null&&be("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[gn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):oe(e,a,o)}}}function An(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,f,y,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),o&&Xe(e,n,"src",a.src,a,null);return;case"input":be("invalid",e);var C=f=y=u=null,W=null,ut=null;for(o in a)if(a.hasOwnProperty(o)){var bt=a[o];if(bt!=null)switch(o){case"name":u=bt;break;case"type":y=bt;break;case"checked":W=bt;break;case"defaultChecked":ut=bt;break;case"value":f=bt;break;case"defaultValue":C=bt;break;case"children":case"dangerouslySetInnerHTML":if(bt!=null)throw Error(s(137,n));break;default:Xe(e,n,o,bt,a,null)}}Qn(e,f,C,W,ut,y,u,!1);return;case"select":be("invalid",e),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":y=C;break;case"multiple":o=C;default:Xe(e,n,u,C,a,null)}n=f,a=y,e.multiple=!!o,n!=null?Jn(e,!!o,n,!1):a!=null&&Jn(e,!!o,a,!0);return;case"textarea":be("invalid",e),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(C=a[y],C!=null))switch(y){case"value":o=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Xe(e,n,y,C,a,null)}cn(e,o,u,f);return;case"option":for(W in a)if(a.hasOwnProperty(W)&&(o=a[W],o!=null))switch(W){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xe(e,n,W,o,a,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(o=0;o<Io.length;o++)be(Io[o],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ut in a)if(a.hasOwnProperty(ut)&&(o=a[ut],o!=null))switch(ut){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,ut,o,a,null)}return;default:if(Ys(n)){for(bt in a)a.hasOwnProperty(bt)&&(o=a[bt],o!==void 0&&dd(e,n,bt,o,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(o=a[C],o!=null&&Xe(e,n,C,o,a,null))}function ty(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,C=null,W=null,ut=null,bt=null;for(vt in a){var Tt=a[vt];if(a.hasOwnProperty(vt)&&Tt!=null)switch(vt){case"checked":break;case"value":break;case"defaultValue":W=Tt;default:o.hasOwnProperty(vt)||Xe(e,n,vt,null,o,Tt)}}for(var ht in o){var vt=o[ht];if(Tt=a[ht],o.hasOwnProperty(ht)&&(vt!=null||Tt!=null))switch(ht){case"type":f=vt;break;case"name":u=vt;break;case"checked":ut=vt;break;case"defaultChecked":bt=vt;break;case"value":y=vt;break;case"defaultValue":C=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(s(137,n));break;default:vt!==Tt&&Xe(e,n,ht,vt,o,Tt)}}zn(e,y,C,W,ut,bt,f,u);return;case"select":vt=y=C=ht=null;for(f in a)if(W=a[f],a.hasOwnProperty(f)&&W!=null)switch(f){case"value":break;case"multiple":vt=W;default:o.hasOwnProperty(f)||Xe(e,n,f,null,o,W)}for(u in o)if(f=o[u],W=a[u],o.hasOwnProperty(u)&&(f!=null||W!=null))switch(u){case"value":ht=f;break;case"defaultValue":C=f;break;case"multiple":y=f;default:f!==W&&Xe(e,n,u,f,o,W)}n=C,a=y,o=vt,ht!=null?Jn(e,!!a,ht,!1):!!o!=!!a&&(n!=null?Jn(e,!!a,n,!0):Jn(e,!!a,a?[]:"",!1));return;case"textarea":vt=ht=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Xe(e,n,C,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":ht=u;break;case"defaultValue":vt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xe(e,n,y,u,o,f)}Be(e,ht,vt);return;case"option":for(var Kt in a)if(ht=a[Kt],a.hasOwnProperty(Kt)&&ht!=null&&!o.hasOwnProperty(Kt))switch(Kt){case"selected":e.selected=!1;break;default:Xe(e,n,Kt,null,o,ht)}for(W in o)if(ht=o[W],vt=a[W],o.hasOwnProperty(W)&&ht!==vt&&(ht!=null||vt!=null))switch(W){case"selected":e.selected=ht&&typeof ht!="function"&&typeof ht!="symbol";break;default:Xe(e,n,W,ht,o,vt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in a)ht=a[re],a.hasOwnProperty(re)&&ht!=null&&!o.hasOwnProperty(re)&&Xe(e,n,re,null,o,ht);for(ut in o)if(ht=o[ut],vt=a[ut],o.hasOwnProperty(ut)&&ht!==vt&&(ht!=null||vt!=null))switch(ut){case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Xe(e,n,ut,ht,o,vt)}return;default:if(Ys(n)){for(var We in a)ht=a[We],a.hasOwnProperty(We)&&ht!==void 0&&!o.hasOwnProperty(We)&&dd(e,n,We,void 0,o,ht);for(bt in o)ht=o[bt],vt=a[bt],!o.hasOwnProperty(bt)||ht===vt||ht===void 0&&vt===void 0||dd(e,n,bt,ht,o,vt);return}}for(var it in a)ht=a[it],a.hasOwnProperty(it)&&ht!=null&&!o.hasOwnProperty(it)&&Xe(e,n,it,null,o,ht);for(Tt in o)ht=o[Tt],vt=a[Tt],!o.hasOwnProperty(Tt)||ht===vt||ht==null&&vt==null||Xe(e,n,Tt,ht,o,vt)}function Bg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ey(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,C=u.duration;if(f&&C&&Bg(y)){for(y=0,C=u.responseEnd,o+=1;o<a.length;o++){var W=a[o],ut=W.startTime;if(ut>C)break;var bt=W.transferSize,Tt=W.initiatorType;bt&&Bg(Tt)&&(W=W.responseEnd,y+=bt*(W<C?1:(C-ut)/(W-ut)))}if(--o,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var hd=null,pd=null;function _c(e){return e.nodeType===9?e:e.ownerDocument}function zg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function md(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gd=null;function ny(){var e=window.event;return e&&e.type==="popstate"?e===gd?!1:(gd=e,!0):(gd=null,!1)}var Gg=typeof setTimeout=="function"?setTimeout:void 0,iy=typeof clearTimeout=="function"?clearTimeout:void 0,Vg=typeof Promise=="function"?Promise:void 0,ay=typeof queueMicrotask=="function"?queueMicrotask:typeof Vg<"u"?function(e){return Vg.resolve(null).then(e).catch(sy)}:Gg;function sy(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function kg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Tr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")zo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,zo(a);for(var f=a.firstChild;f;){var y=f.nextSibling,C=f.nodeName;f[ds]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&zo(e.ownerDocument.body);a=u}while(a);Tr(n)}function Xg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function _d(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_d(a),io(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ry(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ds])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function oy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function Wg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_i(e.nextSibling),e===null))return null;return e}function vd(e){return e.data==="$?"||e.data==="$~"}function xd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ly(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Sd=null;function jg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return _i(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function qg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Yg(e,n,a){switch(n=_c(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function zo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);io(e)}var vi=new Map,Zg=new Set;function vc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _a=I.d;I.d={f:cy,r:uy,D:fy,C:dy,L:hy,m:py,X:gy,S:my,M:_y};function cy(){var e=_a.f(),n=cc();return e||n}function uy(e){var n=Na(e);n!==null&&n.tag===5&&n.type==="form"?d0(n):_a.r(e)}var Mr=typeof document>"u"?null:document;function Kg(e,n,a){var o=Mr;if(o&&typeof n=="string"&&n){var u=ue(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Zg.has(u)||(Zg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),An(n,"link",e),Q(n),o.head.appendChild(n)))}}function fy(e){_a.D(e),Kg("dns-prefetch",e,null)}function dy(e,n){_a.C(e,n),Kg("preconnect",e,n)}function hy(e,n,a){_a.L(e,n,a);var o=Mr;if(o&&e&&n){var u='link[rel="preload"][as="'+ue(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ue(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ue(a.imageSizes)+'"]')):u+='[href="'+ue(e)+'"]';var f=u;switch(n){case"style":f=br(e);break;case"script":f=Er(e)}vi.has(f)||(e=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),vi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ho(f))||n==="script"&&o.querySelector(Go(f))||(n=o.createElement("link"),An(n,"link",e),Q(n),o.head.appendChild(n)))}}function py(e,n){_a.m(e,n);var a=Mr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ue(o)+'"][href="'+ue(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Er(e)}if(!vi.has(f)&&(e=S({rel:"modulepreload",href:e},n),vi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Go(f)))return}o=a.createElement("link"),An(o,"link",e),Q(o),a.head.appendChild(o)}}}function my(e,n,a){_a.S(e,n,a);var o=Mr;if(o&&e){var u=w(o).hoistableStyles,f=br(e);n=n||"default";var y=u.get(f);if(!y){var C={loading:0,preload:null};if(y=o.querySelector(Ho(f)))C.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":n},a),(a=vi.get(f))&&yd(e,a);var W=y=o.createElement("link");Q(W),An(W,"link",e),W._p=new Promise(function(ut,bt){W.onload=ut,W.onerror=bt}),W.addEventListener("load",function(){C.loading|=1}),W.addEventListener("error",function(){C.loading|=2}),C.loading|=4,xc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:C},u.set(f,y)}}}function gy(e,n){_a.X(e,n);var a=Mr;if(a&&e){var o=w(a).hoistableScripts,u=Er(e),f=o.get(u);f||(f=a.querySelector(Go(u)),f||(e=S({src:e,async:!0},n),(n=vi.get(u))&&Md(e,n),f=a.createElement("script"),Q(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function _y(e,n){_a.M(e,n);var a=Mr;if(a&&e){var o=w(a).hoistableScripts,u=Er(e),f=o.get(u);f||(f=a.querySelector(Go(u)),f||(e=S({src:e,async:!0,type:"module"},n),(n=vi.get(u))&&Md(e,n),f=a.createElement("script"),Q(f),An(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Qg(e,n,a,o){var u=(u=Z.current)?vc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=br(a.href),a=w(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=br(a.href);var f=w(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(Ho(e)))&&!f._p&&(y.instance=f,y.state.loading=5),vi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(e,a),f||vy(u,e,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Er(a),a=w(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function br(e){return'href="'+ue(e)+'"'}function Ho(e){return'link[rel="stylesheet"]['+e+"]"}function Jg(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function vy(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),An(n,"link",a),Q(n),e.head.appendChild(n))}function Er(e){return'[src="'+ue(e)+'"]'}function Go(e){return"script[async]"+e}function $g(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ue(a.href)+'"]');if(o)return n.instance=o,Q(o),o;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Q(o),An(o,"style",u),xc(o,a.precedence,e),n.instance=o;case"stylesheet":u=br(a.href);var f=e.querySelector(Ho(u));if(f)return n.state.loading|=4,n.instance=f,Q(f),f;o=Jg(a),(u=vi.get(u))&&yd(o,u),f=(e.ownerDocument||e).createElement("link"),Q(f);var y=f;return y._p=new Promise(function(C,W){y.onload=C,y.onerror=W}),An(f,"link",o),n.state.loading|=4,xc(f,a.precedence,e),n.instance=f;case"script":return f=Er(a.src),(u=e.querySelector(Go(f)))?(n.instance=u,Q(u),u):(o=a,(u=vi.get(f))&&(o=S({},a),Md(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Q(u),An(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,xc(o,a.precedence,e));return n.instance}function xc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var C=o[y];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function yd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Md(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Sc=null;function t_(e,n,a){if(Sc===null){var o=new Map,u=Sc=new Map;u.set(a,o)}else u=Sc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ds]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var C=o.get(y);C?C.push(f):o.set(y,[f])}}return o}function e_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function xy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function n_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Sy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=br(o.href),f=n.querySelector(Ho(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=yc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Q(f);return}f=n.ownerDocument||n,o=Jg(o),(u=vi.get(u))&&yd(o,u),f=f.createElement("link"),Q(f);var y=f;y._p=new Promise(function(C,W){y.onload=C,y.onerror=W}),An(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=yc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var bd=0;function yy(e,n){return e.stylesheets&&e.count===0&&bc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&bc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&bd===0&&(bd=62500*ey());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&bc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>bd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function yc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)bc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mc=null;function bc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mc=new Map,n.forEach(My,e),Mc=null,yc.call(e))}function My(e,n){if(!(n.state.loading&4)){var a=Mc.get(e);if(a)var o=a.get(null);else{a=new Map,Mc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=yc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Vo={$$typeof:D,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function by(e,n,a,o,u,f,y,C,W){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ne(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ne(0),this.hiddenUpdates=Ne(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map}function i_(e,n,a,o,u,f,y,C,W,ut,bt,Tt){return e=new by(e,n,a,y,W,ut,bt,Tt,C),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),e.current=f,f.stateNode=e,n=ef(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},rf(f),e}function a_(e){return e?(e=er,e):er}function s_(e,n,a,o,u,f){u=a_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ba(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=za(e,o,n),a!==null&&(Zn(a,e,n),So(a,e,n))}function r_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Ed(e,n){r_(e,n),(e=e.alternate)&&r_(e,n)}function o_(e){if(e.tag===13||e.tag===31){var n=_s(e,67108864);n!==null&&Zn(n,e,67108864),Ed(e,67108864)}}function l_(e){if(e.tag===13||e.tag===31){var n=si();n=Ws(n);var a=_s(e,n);a!==null&&Zn(a,e,n),Ed(e,n)}}var Ec=!0;function Ey(e,n,a,o){var u=U.T;U.T=null;var f=I.p;try{I.p=2,Td(e,n,a,o)}finally{I.p=f,U.T=u}}function Ty(e,n,a,o){var u=U.T;U.T=null;var f=I.p;try{I.p=8,Td(e,n,a,o)}finally{I.p=f,U.T=u}}function Td(e,n,a,o){if(Ec){var u=Ad(o);if(u===null)fd(e,n,o,Tc,a),u_(e,o);else if(Ry(u,e,n,a,o))o.stopPropagation();else if(u_(e,o),n&4&&-1<Ay.indexOf(e)){for(;u!==null;){var f=Na(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Dt(f.pendingLanes);if(y!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;y;){var W=1<<31-zt(y);C.entanglements[1]|=W,y&=~W}zi(f),(Ie&6)===0&&(oc=T()+500,Fo(0))}}break;case 31:case 13:C=_s(f,2),C!==null&&Zn(C,f,2),cc(),Ed(f,2)}if(f=Ad(o),f===null&&fd(e,n,o,Tc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else fd(e,n,o,null,a)}}function Ad(e){return e=Ru(e),Rd(e)}var Tc=null;function Rd(e){if(Tc=null,e=Da(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Tc=e,null}function c_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case yt:return 2;case At:return 8;case mt:case jt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var Cd=!1,Ka=null,Qa=null,Ja=null,ko=new Map,Xo=new Map,$a=[],Ay="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function u_(e,n){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(n.pointerId)}}function Wo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Na(n),n!==null&&o_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Ry(e,n,a,o,u){switch(n){case"focusin":return Ka=Wo(Ka,e,n,a,o,u),!0;case"dragenter":return Qa=Wo(Qa,e,n,a,o,u),!0;case"mouseover":return Ja=Wo(Ja,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return ko.set(f,Wo(ko.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Xo.set(f,Wo(Xo.get(f)||null,e,n,a,o,u)),!0}return!1}function f_(e){var n=Da(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,qs(e.priority,function(){l_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,qs(e.priority,function(){l_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Ad(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Au=o,a.target.dispatchEvent(o),Au=null}else return n=Na(a),n!==null&&o_(n),e.blockedOn=a,!1;n.shift()}return!0}function d_(e,n,a){Ac(e)&&a.delete(n)}function Cy(){Cd=!1,Ka!==null&&Ac(Ka)&&(Ka=null),Qa!==null&&Ac(Qa)&&(Qa=null),Ja!==null&&Ac(Ja)&&(Ja=null),ko.forEach(d_),Xo.forEach(d_)}function Rc(e,n){e.blockedOn===n&&(e.blockedOn=null,Cd||(Cd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Cy)))}var Cc=null;function h_(e){Cc!==e&&(Cc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Cc===e&&(Cc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Rd(o||a)===null)continue;break}var f=Na(a);f!==null&&(e.splice(n,3),n-=3,Af(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Tr(e){function n(W){return Rc(W,e)}Ka!==null&&Rc(Ka,e),Qa!==null&&Rc(Qa,e),Ja!==null&&Rc(Ja,e),ko.forEach(n),Xo.forEach(n);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)f_(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[gn]||null;if(typeof f=="function")y||h_(a);else if(y){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[gn]||null)C=y.formAction;else if(Rd(u)!==null)continue}else C=y.action;typeof C=="function"?a[o+1]=C:(a.splice(o,3),o-=3),h_(a)}}}function p_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function wd(e){this._internalRoot=e}wc.prototype.render=wd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();s_(a,o,e,n,null,null)},wc.prototype.unmount=wd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;s_(e.current,2,null,e,null,null),cc(),n[$i]=null}};function wc(e){this._internalRoot=e}wc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Pi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,e),a===0&&f_(e)}};var m_=t.version;if(m_!=="19.2.4")throw Error(s(527,m_,"19.2.4"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var wy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dc.isDisabled&&Dc.supportsFiber)try{Ct=Dc.inject(wy),Rt=Dc}catch{}}return qo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=M0,f=b0,y=E0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=i_(e,1,!1,null,null,a,o,null,u,f,y,p_),e[$i]=n.current,ud(e),new wd(n)},qo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=M0,y=b0,C=E0,W=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(W=a.formState)),n=i_(e,1,!0,n,a??null,o,u,W,f,y,C,p_),n.context=a_(null),a=n.current,o=si(),o=Ws(o),u=Ba(o),u.callback=null,za(a,u,o),a=o,n.current.lanes=a,In(n,a),zi(n),e[$i]=n.current,ud(e),new wc(n)},qo.version="19.2.4",qo}var T_;function Vy(){if(T_)return Ud.exports;T_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ud.exports=Gy(),Ud.exports}var ky=Vy();const Xy=Xv(ky),tn=16,Un=250,yp=["#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2","#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2"],Wy=500;function jy(r=4){const[t,i]=st.useState(!1),[s,l]=st.useState(0),[c,d]=st.useState(0),[p,m]=st.useState(!1),[h,x]=st.useState(0),[S,g]=st.useState(null),M=st.useRef(null),b=st.useRef(null),R=st.useRef(null),_=st.useRef(null),v=st.useRef(0),A=st.useRef(0),D=st.useRef([]),N=st.useRef(!1),G=st.useRef(0),B=st.useRef(0),z=st.useRef(0),E=Un*r;z.current=E,(!_.current||_.current[0].length!==E)&&(_.current=Array.from({length:tn},()=>new Float32Array(E)),v.current=0,A.current=0),st.useEffect(()=>(p?(M.current=Date.now(),x(0),b.current&&clearInterval(b.current),b.current=setInterval(()=>{x(Math.floor((Date.now()-M.current)/1e3))},500)):(b.current&&clearInterval(b.current),M.current=null),()=>{b.current&&clearInterval(b.current)}),[p]);const O=st.useCallback(Y=>{N.current=Y,Y||(v.current=0,A.current=0)},[]),rt=st.useCallback(Y=>{const at=R.current;at&&at.readyState===WebSocket.OPEN&&at.send(JSON.stringify(Y))},[]);st.useEffect(()=>{const Y=location.hostname||"localhost",at=parseInt(location.port||"1617")-1,U=`${location.protocol==="https:"?"wss":"ws"}://${Y}:${at}`,I="/auth/ws-token";async function X(){try{const gt=await fetch(I,{credentials:"include"});return gt.ok&&(await gt.json()).token||null}catch{return null}}async function nt(){const gt=await X(),F=gt?`${U}?token=${encodeURIComponent(gt)}`:U,k=new WebSocket(F);R.current=k,k.onopen=()=>i(!0),k.onclose=()=>{i(!1),setTimeout(nt,2e3)},k.onerror=()=>k.close(),k.onmessage=et=>{const pt=JSON.parse(et.data);if("record_status"in pt){const wt=pt.record_status;if(m(wt.recording),wt.stopped){const Gt=location.port||"1617";g({filename:wt.stopped.filename,frames:wt.stopped.frames,duration:wt.stopped.duration,path:wt.stopped.path,downloadUrl:`${location.protocol}//${location.hostname}:${Gt}/recordings/${wt.stopped.filename}`})}}if("status"in pt||N.current)return;const Mt=pt.channels;if(!Mt||Mt.length!==tn)return;const Z=_.current,V=z.current,ft=v.current;for(let wt=0;wt<tn;wt++)Z[wt][ft]=Mt[wt];v.current=(ft+1)%V,A.current<V&&A.current++,G.current++;const St=pt.t;D.current.push(St);const Nt=performance.now();if(Nt-B.current>Wy){B.current=Nt,l(G.current);const wt=D.current,Gt=St-2;let Ot=0;for(;Ot<wt.length&&wt[Ot]<Gt;)Ot++;if(Ot>0&&wt.splice(0,Ot),wt.length>1){const Qt=wt[wt.length-1]-wt[0];Qt>0&&d(Math.round((wt.length-1)/Qt))}}}}return nt(),()=>{const gt=R.current;gt&&gt.close()}},[]);const H=st.useCallback(()=>g(null),[]),q=st.useMemo(()=>({buffers:_,writeIndex:v,samplesInBuffer:A,bufferSize:E,gridSuspended:!1}),[]);return q.bufferSize=E,{connected:t,sampleCount:s,hz:c,recording:p,recordElapsed:h,recordResult:S,data:q,dismissRecordResult:H,setPaused:O,sendCommand:rt}}function Fd({children:r}){const[t,i]=st.useState("checking"),[s,l]=st.useState(""),[c,d]=st.useState("");st.useEffect(()=>{(async()=>{try{const h=await fetch("/auth/status",{credentials:"include"});if(!h.ok){i("login");return}const x=await h.json();i(x.authenticated?"ok":"login")}catch(h){console.error("Auth check error:",h),i("login")}})()},[]);async function p(m){m.preventDefault(),d("");try{const x=await(await fetch("/auth",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({code:s})})).json();x.ok?i("ok"):(d(x.error||"Invalid code"),l(""))}catch{d("Server unreachable")}}return t==="checking"?null:t==="ok"?L.jsx(L.Fragment,{children:r}):L.jsx("div",{className:"auth-overlay",children:L.jsxs("div",{className:"auth-card",children:[L.jsxs("h1",{children:["Pi",L.jsx("span",{children:"EEG"}),"-16"]}),L.jsx("p",{className:"auth-sub",children:"Enter the access code displayed in the server console"}),L.jsxs("form",{onSubmit:p,children:[L.jsx("input",{className:"auth-input",type:"text",maxLength:6,pattern:"[0-9]{6}",autoComplete:"off",autoFocus:!0,required:!0,placeholder:"------",value:s,onChange:m=>l(m.target.value.replace(/\D/g,""))}),L.jsx("br",{}),L.jsx("button",{className:"auth-btn",type:"submit",children:"Connect"}),c&&L.jsx("p",{className:"auth-error",children:c})]})]})})}const qy="rgba(48,54,61,0.4)",Yy="rgba(88,166,255,0.15)",Zy={high:1500,medium:800,low:400},A_=14,R_=20,C_=2;function Ky(r,t,i,s,l,c,d,p,m,h){r.clearRect(0,0,t,i);const x=i/2,S=i/4;r.beginPath();for(let D=S;D<i;D+=S)r.moveTo(0,D),r.lineTo(t,D);if(r.strokeStyle=qy,r.lineWidth=.5,r.stroke(),r.beginPath(),r.moveTo(0,x),r.lineTo(t,x),r.strokeStyle=Yy,r.lineWidth=1,r.stroke(),l<2)return;const g=Zy[h]||1500,M=l>g?Math.floor(l/g):1,b=i/2,R=t/(d-1),_=b/p;if(h!=="low"){r.beginPath();let D=0;for(let N=0;N<l;N+=M){const G=(c-l+N+d)%d,B=N*R,z=x-s[G]*_;N===0?(r.moveTo(B,z),D=B):r.lineTo(B,z)}r.lineTo((l-1)*R,i),r.lineTo(D,i),r.closePath(),r.fillStyle=m+"10",r.fill()}r.strokeStyle=m,r.lineWidth=h==="low"?1:1.3,r.lineJoin="round",r.lineCap="round",r.beginPath();for(let D=0;D<l;D+=M){const N=(c-l+D+d)%d,G=D*R,B=x-s[N]*_;D===0?r.moveTo(G,B):r.lineTo(G,B)}r.stroke();let v=0;const A=Math.min(l,250);for(let D=l-A;D<l;D++){const N=(c-l+D+d)%d;v+=s[N]*s[N]}return Math.sqrt(v/A)}const Qy=st.memo(function({chIdx:t,eegData:i,yRange:s,expanded:l,onToggleExpand:c,active:d=!0}){const p=st.useRef(null),m=st.useRef(0),h=st.useRef(0),x=st.useRef(null),S=st.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),g=st.useRef(!0),M=st.useRef("high"),b=st.useRef([]),R=st.useRef(-1),_=st.useRef(0),v=st.useRef(0);return st.useEffect(()=>{if(!d)return;const A=p.current;if(!A)return;const D=new ResizeObserver(N=>{const G=N[0];if(!G)return;const B=window.devicePixelRatio||1,{width:z,height:E}=G.contentRect,O=l?Math.min(B,2):1;S.current={w:z,h:E,pw:Math.round(z*O),ph:Math.round(E*O),dpr:O},g.current=!0});return D.observe(A),()=>D.disconnect()},[d,l]),st.useEffect(()=>{if(!d)return;const A=p.current;if(!A)return;const D=A.getContext("2d",{alpha:!1});R.current=-1,v.current=0;const N=t%C_,G=()=>{v.current++;const{w:B,h:z,pw:E,ph:O,dpr:rt}=S.current;if(B===0||z===0){m.current=requestAnimationFrame(G);return}if(!l&&i.gridSuspended){m.current=requestAnimationFrame(G);return}if(!l&&v.current%C_!==N){m.current=requestAnimationFrame(G);return}const H=i.writeIndex.current;if(H===R.current){m.current=requestAnimationFrame(G);return}R.current=H;const q=performance.now();g.current&&(g.current=!1,A.width=E,A.height=O,D.setTransform(rt,0,0,rt,0,0)),D.fillStyle="#0d1117",D.fillRect(0,0,B,z);const Y=Ky(D,B,z,i.buffers.current[t],i.samplesInBuffer.current,H,i.bufferSize,s,yp[t],M.current);if(_.current++,Y!==void 0&&(_.current&1)===0&&(h.current=Y,x.current)){const U=Y/s;x.current.style.borderLeftColor=U>.8?"#f85149":U>.4?"#d29922":"#3fb950"}const at=performance.now()-q,tt=b.current;if(tt.push(at),tt.length>R_&&tt.shift(),tt.length===R_){let U=0;for(let X=0;X<tt.length;X++)U+=tt[X];const I=U/tt.length;I>A_&&M.current!=="low"?M.current=M.current==="high"?"medium":"low":I<A_*.4&&M.current!=="high"&&(M.current=M.current==="low"?"medium":"high")}m.current=requestAnimationFrame(G)};return m.current=requestAnimationFrame(G),()=>cancelAnimationFrame(m.current)},[t,i,s,d]),d?L.jsxs("div",{className:`channel-cell${l?" expanded":""}`,onClick:c,children:[L.jsxs("div",{className:"channel-label",ref:x,children:["Ch ",t+1]}),L.jsx("canvas",{ref:p,style:{display:"block",width:"100%",height:"100%"}})]}):L.jsxs("div",{className:`channel-cell inactive${l?" expanded":""}`,onClick:c,children:[L.jsxs("div",{className:"channel-label",children:["Ch ",t+1]}),L.jsx("div",{className:"channel-off",children:"OFF"})]})}),{PI:Jy,cos:w_,sin:$y}=Math,D_=2*Jy,on=[{name:"Delta",label:"δ Delta",low:.5,high:4,color:"#8b5cf6"},{name:"Theta",label:"θ Theta",low:4,high:8,color:"#06b6d4"},{name:"Alpha",label:"α Alpha",low:8,high:13,color:"#22c55e"},{name:"Beta",label:"β Beta",low:13,high:30,color:"#f59e0b"},{name:"Gamma",label:"γ Gamma",low:30,high:100,color:"#ef4444"}];class qr{constructor(t,i){Hi(this,"n");Hi(this,"sampleRateHz");Hi(this,"_window");Hi(this,"_frequencies");Hi(this,"_df");Hi(this,"_bitReversed");Hi(this,"_twRe");Hi(this,"_twIm");Hi(this,"_norm");if(t<=0||(t&t-1)!==0)throw new Error("n must be a power of 2");this.n=t,this.sampleRateHz=i,this._precompute()}_precompute(){const{n:t,sampleRateHz:i}=this;this._window=new Float64Array(t);for(let p=0;p<t;p++)this._window[p]=.5*(1-w_(D_*p/(t-1)));const s=(t>>1)+1;this._frequencies=new Float64Array(s),this._df=i/t;for(let p=0;p<s;p++)this._frequencies[p]=p*this._df;const l=qr._log2(t);this._bitReversed=new Int32Array(t);for(let p=0;p<t;p++)this._bitReversed[p]=qr._reverseBits(p,l);const c=t>>1;this._twRe=new Float64Array(c),this._twIm=new Float64Array(c);for(let p=0;p<c;p++){const m=-D_*p/t;this._twRe[p]=w_(m),this._twIm[p]=$y(m)}let d=0;for(let p=0;p<t;p++)d+=this._window[p]*this._window[p];this._norm=2/(i*d)}analyse(t,i){const{n:s,_window:l,_frequencies:c,_df:d,_norm:p}=this;if(i===void 0&&(i=t.length-s),i<0||t.length-i<s)return null;const m=new Float64Array(s),h=new Float64Array(s);for(let _=0;_<s;_++)m[_]=t[i+_]*l[_];this._fft(m,h);const x=(s>>1)+1,S=new Float64Array(x);let g=0,M=0,b=0;for(let _=0;_<x;_++){const v=m[_]*m[_]+h[_]*h[_],A=_===0||_===x-1?.5:1;S[_]=v*p*A,M+=S[_]*d,S[_]>g&&(g=S[_],b=_)}const R={};for(const _ of on){let v=0;for(let A=0;A<x;A++)c[A]>=_.low&&c[A]<_.high&&(v+=S[A]*d);R[_.name]=v}return{frequencies:c,psd:S,bandPowers:R,dominantFrequency:c[b],totalPower:M}}analyseRing(t,i,s){const{n:l}=this;if(s<l)return null;const c=t.length,d=new Float64Array(l),p=(i-l+c)%c;for(let m=0;m<l;m++)d[m]=t[(p+m)%c];return this.analyse(d,0)}_fft(t,i){const{n:s,_bitReversed:l,_twRe:c,_twIm:d}=this;for(let p=0;p<s;p++){const m=l[p];if(m>p){let h=t[p];t[p]=t[m],t[m]=h,h=i[p],i[p]=i[m],i[m]=h}}for(let p=2;p<=s;p*=2){const m=p>>1,h=s/p;for(let x=0;x<s;x+=p)for(let S=0;S<m;S++){const g=S*h,M=c[g],b=d[g],R=x+S,_=R+m,v=M*t[_]-b*i[_],A=M*i[_]+b*t[_];t[_]=t[R]-v,i[_]=i[R]-A,t[R]+=v,i[R]+=A}}}static _log2(t){let i=0,s=t;for(;s>1;)s>>=1,i++;return i}static _reverseBits(t,i){let s=0,l=t;for(let c=0;c<i;c++)s=s<<1|l&1,l>>=1;return s}}const Yo=256,N_=8,U_=.25,Id=15,tM=60,wi=40;function eM(r,t,i,s,l,c,d,p,m){r.clearRect(0,0,t,i);const h={l:52,r:12,t:8,b:28},x=t-h.l-h.r,S=i-h.t-h.b,g=h.t+S/2;r.fillStyle="#0d1117",r.fillRect(0,0,t,i),r.strokeStyle="rgba(48,54,61,0.5)",r.lineWidth=.5;const M=[-p,-p/2,0,p/2,p];r.font="9px monospace",r.fillStyle="#8b949e",r.textAlign="right";for(const U of M){const I=g-U/p*(S/2);r.beginPath(),r.moveTo(h.l,I),r.lineTo(t-h.r,I),r.stroke(),r.fillText(`${U>0?"+":""}${U}`,h.l-6,I+3)}r.textAlign="center",r.fillStyle="#8b949e";const b=d/Un;for(let U=0;U<=b;U+=1){const I=h.l+U/b*x;r.beginPath(),r.moveTo(I,h.t),r.lineTo(I,h.t+S),r.strokeStyle="rgba(48,54,61,0.3)",r.stroke(),r.fillText(`${U}s`,I,i-6)}if(r.beginPath(),r.moveTo(h.l,g),r.lineTo(t-h.r,g),r.strokeStyle="rgba(88,166,255,0.2)",r.lineWidth=1,r.stroke(),l<2)return{};const R=S/2,_=x/(d-1),v=R/p;r.beginPath();let A=h.l;for(let U=0;U<l;U++){const I=(c-l+U+d)%d,X=h.l+U*_,nt=g-s[I]*v;U===0?(r.moveTo(X,nt),A=X):r.lineTo(X,nt)}r.lineTo(h.l+(l-1)*_,g+R),r.lineTo(A,g+R),r.closePath(),r.fillStyle=m+"0a",r.fill(),r.strokeStyle=m,r.lineWidth=1.5,r.lineJoin="round",r.lineCap="round",r.beginPath();for(let U=0;U<l;U++){const I=(c-l+U+d)%d,X=h.l+U*_,nt=g-s[I]*v;U===0?r.moveTo(X,nt):r.lineTo(X,nt)}r.stroke();const D=h.l+(l-1)*_;r.beginPath(),r.moveTo(D,h.t),r.lineTo(D,h.t+S),r.strokeStyle=m+"40",r.lineWidth=1,r.setLineDash([3,3]),r.stroke(),r.setLineDash([]);const N=(c-1+d)%d,G=s[N];r.fillStyle=m,r.font="bold 11px monospace",r.textAlign="left",r.fillText(`${G.toFixed(1)} µV`,D+6,h.t+14),r.save(),r.translate(12,g),r.rotate(-Math.PI/2),r.textAlign="center",r.fillStyle="#8b949e",r.font="9px monospace",r.fillText("µV",0,0),r.restore();let B=0,z=0,E=1/0,O=-1/0,rt=0,H=null;const q=Math.min(l,Un*2);for(let U=l-q;U<l;U++){const I=(c-l+U+d)%d,X=s[I];B+=X,z+=X*X,X<E&&(E=X),X>O&&(O=X),H!==null&&(H>=0&&X<0||H<0&&X>=0)&&rt++,H=X}const Y=B/q,at=Math.sqrt(z/q),tt=O-E;return{mean:Y,rms:at,pp:tt,min:E,max:O,zeroCross:rt,latestVal:G,statCount:q}}function nM(r,t,i,s,l,c,d,p){r.fillStyle="#0d1117",r.fillRect(0,0,t,i);const m={l:44,r:10,t:20,b:24},h=t-m.l-m.r,x=i-m.t-m.b,S=l[1],g=Math.min(Math.ceil(c/S),s.length-1);let M=1e-30;for(let b=1;b<=g;b++)s[b]>M&&(M=s[b]);for(const b of on){if(b.low>=c)continue;const R=m.l+Math.max(b.low,0)/c*h,_=m.l+Math.min(b.high,c)/c*h,v=p===b.name;r.fillStyle=b.color+(v?"20":"0a"),r.fillRect(R,m.t,_-R,x),r.fillStyle=b.color+(v?"bb":"55"),r.font="8px monospace",r.textAlign="center",r.fillText(b.label.split(" ")[0],(R+_)/2,m.t+10)}r.strokeStyle="rgba(48,54,61,0.45)",r.lineWidth=.5;for(let b=1;b<4;b++){const R=m.t+b/4*x;r.beginPath(),r.moveTo(m.l,R),r.lineTo(m.l+h,R),r.stroke()}r.beginPath();for(let b=1;b<=g;b++){const R=m.l+l[b]/c*h,_=10*Math.log10((s[b]||1e-30)/M),v=Math.max(0,(_+60)/60),A=m.t+x-Math.min(1,v)*x;b===1?r.moveTo(R,A):r.lineTo(R,A)}r.strokeStyle="#58a6ff",r.lineWidth=1.5,r.stroke(),r.lineTo(m.l+l[g]/c*h,m.t+x),r.lineTo(m.l+l[1]/c*h,m.t+x),r.closePath(),r.fillStyle="rgba(88,166,255,0.08)",r.fill(),r.fillStyle="#8b949e",r.font="9px monospace",r.textAlign="center";for(let b=0;b<=c;b+=10)r.fillText(`${b}`,m.l+b/c*h,i-6);r.fillText("Hz",m.l+h+2,i-6),r.save(),r.translate(10,m.t+x/2),r.rotate(-Math.PI/2),r.textAlign="center",r.fillStyle="#8b949e",r.font="8px monospace",r.fillText("dB",0,0),r.restore(),r.textAlign="right",r.font="8px monospace",r.fillStyle="#6e7681";for(const b of[0,-20,-40,-60]){const R=m.t+x-(b+60)/60*x;r.fillText(`${b}`,m.l-4,R+3)}}function iM(r,t,i,s){r.fillStyle="#0d1117",r.fillRect(0,0,t,i);const l={l:10,r:10,t:6,b:4},c=Math.min(16,(i-l.t-l.b-(on.length-1)*4)/on.length),d=Math.max(...on.map(m=>s[m.name]||0),1e-6),p=on.reduce((m,h)=>m+(s[h.name]||0),0)||1e-6;on.forEach((m,h)=>{const x=s[m.name]||0,S=x/d,g=(x/p*100).toFixed(1),M=l.t+h*(c+4),b=t-l.l-l.r-82;r.fillStyle=m.color,r.font="bold 9px monospace",r.textAlign="left",r.fillText(m.label.charAt(0),l.l,M+c-3);const R=l.l+14;r.fillStyle="rgba(48,54,61,0.5)",r.beginPath(),r.roundRect(R,M,b,c,3),r.fill(),S>0&&(r.fillStyle=m.color+"cc",r.beginPath(),r.roundRect(R,M,Math.max(4,b*S),c,3),r.fill()),r.fillStyle="#e6edf3",r.font="9px monospace",r.textAlign="right",r.fillText(`${g}%`,t-l.r,M+c-3)})}function aM(r,t,i,s,l,c,d,p){if(r.fillStyle="#0d1117",r.fillRect(0,0,t,i),l<10)return;const m={l:8,r:8,t:6,b:20},h=t-m.l-m.r,x=i-m.t-m.b,S=new Float32Array(wi),g=2*p/wi,M=Math.min(l,Un*2);for(let _=l-M;_<l;_++){const v=(c-l+_+d)%d,A=s[v],D=Math.floor((A+p)/g);D>=0&&D<wi&&S[D]++}let b=0;for(let _=0;_<wi;_++)S[_]>b&&(b=S[_]);if(b===0)return;const R=h/wi;for(let _=0;_<wi;_++){const v=S[_]/b*x,A=m.l+_*R,D=m.t+x-v,N=Math.abs(_-wi/2)/(wi/2),G=Math.floor(88+N*160),B=Math.floor(166-N*120),z=Math.floor(255-N*200);r.fillStyle=`rgba(${G},${B},${z},0.6)`,r.fillRect(A+.5,D,R-1,v)}r.fillStyle="#6e7681",r.font="8px monospace",r.textAlign="center",r.fillText(`-${p}`,m.l+R,i-4),r.fillText("0",m.l+h/2,i-4),r.fillText(`+${p}`,t-m.r-R,i-4),r.strokeStyle="rgba(88,166,255,0.3)",r.lineWidth=1,r.beginPath();for(let _=0;_<wi;_++){const v=m.l+(_+.5)*R,A=(_-wi/2)/(wi/4),D=Math.exp(-.5*A*A),N=m.t+x-D*x*.85;_===0?r.moveTo(v,N):r.lineTo(v,N)}r.stroke()}const sM=st.memo(function({chIdx:t,eegData:i,yRange:s,onClose:l}){var H;const c=st.useRef(null),d=st.useRef(null),p=st.useRef(null),m=st.useRef(null),h=st.useRef(0),x=st.useRef(0),S=st.useRef(null),[g,M]=st.useState(null),[b,R]=st.useState({}),[_,v]=st.useState({band:"",freq:0}),[A,D]=st.useState(null),N=st.useMemo(()=>new qr(Yo,Un),[]),G=yp[t],B=st.useRef({trace:{w:0,h:0,pw:0,ph:0,dpr:1},spectrum:{w:0,h:0,pw:0,ph:0,dpr:1},band:{w:0,h:0,pw:0,ph:0,dpr:1},hist:{w:0,h:0,pw:0,ph:0,dpr:1}}),z=st.useRef({trace:!0,spectrum:!0,band:!0,hist:!0});st.useEffect(()=>{const q={trace:c.current,spectrum:d.current,band:p.current,hist:m.current},Y={},at=[];for(const[nt,gt]of Object.entries(q)){if(!gt)continue;Y[nt]=gt.getContext("2d",{alpha:!1});const F=new ResizeObserver(k=>{const et=k[0];if(!et)return;const pt=Math.min(window.devicePixelRatio||1,2),{width:Mt,height:Z}=et.contentRect,V=Math.round(Mt*pt),ft=Math.round(Z*pt);B.current[nt]={w:Mt,h:Z,pw:V,ph:ft,dpr:pt},z.current[nt]=!0});F.observe(gt),at.push(F)}let tt=null,U={},I={band:"",freq:0};const X=()=>{x.current++;for(const[et,pt]of Object.entries(q)){if(!pt||!z.current[et])continue;const{pw:Mt,ph:Z,dpr:V}=B.current[et];Mt===0||Z===0||(pt.width=Mt,pt.height=Z,Y[et].setTransform(V,0,0,V,0,0),z.current[et]=!1)}const nt=i.buffers.current,gt=i.writeIndex.current,F=i.samplesInBuffer.current,k=i.bufferSize;if(Y.trace){const{w:et,h:pt}=B.current.trace;if(et>0&&pt>0){const Mt=eM(Y.trace,et,pt,nt[t],F,gt,k,s,G);Mt.rms!==void 0&&x.current%Id===0&&(tt=Mt)}}if(x.current%N_===0&&F>=Yo){const et=N.analyseRing(nt[t],gt,F);if(et){if(!S.current||S.current.length!==et.psd.length)S.current=new Float64Array(et.psd);else{const Z=S.current,V=et.psd;for(let ft=0;ft<Z.length;ft++)Z[ft]=Z[ft]*(1-U_)+V[ft]*U_}U=et.bandPowers;let pt="",Mt=0;for(const Z of on)(et.bandPowers[Z.name]||0)>Mt&&(Mt=et.bandPowers[Z.name],pt=Z.name);I={band:pt,freq:et.dominantFrequency}}}if(Y.spectrum&&S.current){const{w:et,h:pt}=B.current.spectrum;et>0&&pt>0&&nM(Y.spectrum,et,pt,S.current,N._frequencies,tM,U,A)}if(Y.band&&x.current%N_===0){const{w:et,h:pt}=B.current.band;et>0&&pt>0&&iM(Y.band,et,pt,U)}if(Y.hist&&x.current%Id===0){const{w:et,h:pt}=B.current.hist;et>0&&pt>0&&aM(Y.hist,et,pt,nt[t],F,gt,k,s)}x.current%Id===0&&(tt&&M(tt),U&&R(U),v(et=>et.band===I.band&&et.freq===I.freq?et:I)),h.current=requestAnimationFrame(X)};return h.current=requestAnimationFrame(X),()=>{cancelAnimationFrame(h.current),at.forEach(nt=>nt.disconnect())}},[t,i,s,G,N,A]);const E=on.find(q=>q.name===_.band),O=(E==null?void 0:E.color)||"#8b949e",rt=on.reduce((q,Y)=>q+(b[Y.name]||0),0);return L.jsx("div",{className:"detail-overlay",onClick:l,children:L.jsxs("div",{className:"detail-panel",onClick:q=>q.stopPropagation(),children:[L.jsxs("div",{className:"detail-header",children:[L.jsxs("div",{className:"detail-title-group",children:[L.jsxs("span",{className:"detail-ch-badge",style:{borderColor:G,color:G},children:["Ch ",t+1]}),L.jsx("span",{className:"detail-title",children:"Channel Analysis"}),L.jsx("span",{className:"detail-subtitle",children:"Real-time single-channel deep inspection"})]}),L.jsxs("div",{className:"detail-header-stats",children:[_.band&&L.jsxs("span",{className:"detail-dominant",style:{color:O},children:[L.jsx("span",{className:"detail-dominant-label",children:"Dominant"}),L.jsx("span",{className:"detail-dominant-band",children:(E==null?void 0:E.label)||_.band}),L.jsxs("span",{className:"detail-dominant-freq",children:[_.freq.toFixed(1)," Hz"]})]}),g&&L.jsxs("span",{className:"detail-rms-badge",children:["RMS ",(H=g.rms)==null?void 0:H.toFixed(1)," µV"]})]}),L.jsx("button",{className:"detail-close",onClick:l,children:L.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:L.jsx("path",{d:"M4 4L14 14M14 4L4 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]}),L.jsxs("div",{className:"detail-body",children:[L.jsxs("div",{className:"detail-trace-section",children:[L.jsxs("div",{className:"detail-section-head",children:[L.jsx("span",{className:"detail-section-title",children:"Time Domain"}),L.jsxs("span",{className:"detail-section-meta",children:[Un," Hz · ±",s," µV"]})]}),L.jsx("div",{className:"detail-trace-canvas-wrap",children:L.jsx("canvas",{ref:c,style:{display:"block",width:"100%",height:"100%"}})})]}),L.jsxs("div",{className:"detail-analysis",children:[L.jsxs("div",{className:"detail-card",children:[L.jsxs("div",{className:"detail-card-head",children:[L.jsx("span",{className:"detail-card-title",children:"Power Spectrum"}),L.jsxs("span",{className:"detail-card-meta",children:[Yo,"pt FFT · ",(Un/Yo).toFixed(1)," Hz/bin"]})]}),L.jsx("div",{className:"detail-card-canvas",children:L.jsx("canvas",{ref:d,style:{display:"block",width:"100%",height:"100%"}})})]}),L.jsxs("div",{className:"detail-card",children:[L.jsxs("div",{className:"detail-card-head",children:[L.jsx("span",{className:"detail-card-title",children:"Band Power Distribution"}),L.jsx("span",{className:"detail-card-meta",children:rt>0?`${rt.toFixed(2)} µV²/Hz total`:"—"})]}),L.jsx("div",{className:"detail-card-canvas detail-card-canvas-sm",children:L.jsx("canvas",{ref:p,style:{display:"block",width:"100%",height:"100%"}})}),L.jsx("div",{className:"detail-band-legend",children:on.map(q=>L.jsxs("button",{className:`detail-band-btn${A===q.name?" active":""}`,style:{"--band-color":q.color},onClick:()=>D(Y=>Y===q.name?null:q.name),children:[L.jsx("span",{className:"detail-band-dot"}),q.label.split(" ")[0]]},q.name))})]}),L.jsxs("div",{className:"detail-bottom-row",children:[L.jsxs("div",{className:"detail-card detail-card-half",children:[L.jsx("div",{className:"detail-card-head",children:L.jsx("span",{className:"detail-card-title",children:"Amplitude Distribution"})}),L.jsx("div",{className:"detail-card-canvas detail-card-canvas-sm",children:L.jsx("canvas",{ref:m,style:{display:"block",width:"100%",height:"100%"}})})]}),L.jsxs("div",{className:"detail-card detail-card-half detail-stats-card",children:[L.jsx("div",{className:"detail-card-head",children:L.jsx("span",{className:"detail-card-title",children:"Signal Metrics"})}),L.jsxs("div",{className:"detail-stats-grid",children:[L.jsx(Ds,{label:"RMS",value:g==null?void 0:g.rms,unit:"µV",precision:2}),L.jsx(Ds,{label:"Peak-Peak",value:g==null?void 0:g.pp,unit:"µV",precision:1}),L.jsx(Ds,{label:"Mean",value:g==null?void 0:g.mean,unit:"µV",precision:2}),L.jsx(Ds,{label:"Min",value:g==null?void 0:g.min,unit:"µV",precision:1}),L.jsx(Ds,{label:"Max",value:g==null?void 0:g.max,unit:"µV",precision:1}),L.jsx(Ds,{label:"Zero-X",value:g==null?void 0:g.zeroCross,unit:"/2s",precision:0}),L.jsx(Ds,{label:"Live",value:g==null?void 0:g.latestVal,unit:"µV",precision:1,highlight:!0})]})]})]})]})]}),L.jsxs("div",{className:"detail-footer",children:[L.jsxs("span",{children:[Yo,"-pt Hanning · Cooley-Tukey radix-2"]}),L.jsxs("span",{className:"detail-footer-keys",children:[L.jsx("kbd",{children:"Esc"})," Close"]}),L.jsx("span",{children:"Not a medical device"})]})]})})});function Ds({label:r,value:t,unit:i,precision:s=2,highlight:l}){const c=t!=null?s===0?String(Math.round(t)):t.toFixed(s):"—";return L.jsxs("div",{className:`detail-stat-row${l?" highlight":""}`,children:[L.jsx("span",{className:"detail-stat-label",children:r}),L.jsx("span",{className:"detail-stat-value",children:c}),L.jsx("span",{className:"detail-stat-unit",children:i})]})}const Zo=256,rM=60,oM=12,L_=.3,lM=350;function cM(r,t,i,s,l,c,d,p){const h=t-16,x=24,S=i-24,g=h-48,M=S-x,b=l[1],R=Math.min(Math.ceil(c/b),s.length-1);let _=1e-30;for(let v=1;v<=R;v++)s[v]>_&&(_=s[v]);for(const v of on){if(v.low>=c)continue;const A=48+Math.max(v.low,0)/c*g,D=48+Math.min(v.high,c)/c*g,N=p===v.name;r.fillStyle=v.color+(N?"28":"12"),r.fillRect(A,x,D-A,M),r.fillStyle=v.color+(N?"cc":"66"),r.font="9px monospace",r.textAlign="center",r.fillText(v.name,(A+D)/2,x+10)}r.strokeStyle="rgba(48,54,61,0.45)",r.lineWidth=.5;for(let v=1;v<5;v++){const A=x+v/5*M;r.beginPath(),r.moveTo(48,A),r.lineTo(h,A),r.stroke()}for(const v of[4,8,13,30,50]){if(v>c)continue;const A=48+v/c*g;r.beginPath(),r.moveTo(A,x),r.lineTo(A,S),r.stroke()}r.beginPath();for(let v=1;v<=R;v++){const A=48+l[v]/c*g;let D;if(d){const G=10*Math.log10((s[v]||1e-30)/_);D=Math.max(0,(G+60)/60)}else D=s[v]/_;const N=S-Math.min(1,D)*M;v===1?r.moveTo(A,N):r.lineTo(A,N)}r.strokeStyle="#58a6ff",r.lineWidth=1.5,r.stroke(),r.lineTo(48+l[R]/c*g,S),r.lineTo(48+l[1]/c*g,S),r.closePath(),r.fillStyle="rgba(88,166,255,0.07)",r.fill(),r.fillStyle="#8b949e",r.font="10px monospace",r.textAlign="center";for(let v=0;v<=c;v+=10)r.fillText(`${v}`,48+v/c*g,S+14);if(r.fillText("Hz",h+2,S+14),r.save(),r.translate(11,x+M/2),r.rotate(-Math.PI/2),r.textAlign="center",r.fillText(d?"dB":"µV²/Hz",0,0),r.restore(),r.textAlign="right",r.font="9px monospace",d)for(const v of[0,-20,-40,-60]){const A=S-(v+60)/60*M;r.fillText(`${v}`,44,A+3)}}const uM=st.memo(function({eegData:t}){var q;const i=st.useRef(null),s=st.useRef(0),l=st.useRef(0),c=st.useRef(null),d=st.useRef(0),p=st.useRef(null),m=st.useRef({}),h=st.useRef(window.devicePixelRatio||1),x=st.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),S=st.useRef(!0),[g,M]=st.useState(-1),[b,R]=st.useState(!0),[_,v]=st.useState(!1),[A,D]=st.useState(null),[N,G]=st.useState({}),[B,z]=st.useState({band:"",freq:0}),E=st.useMemo(()=>new qr(Zo,Un),[]);p.current||(p.current=new Float64Array(Zo)),st.useEffect(()=>{const Y=i.current;if(!Y)return;const at=Y.getContext("2d",{alpha:!1}),tt=new ResizeObserver(I=>{const X=I[0];if(!X)return;const nt=window.devicePixelRatio||1;h.current=nt;const{width:gt,height:F}=X.contentRect;x.current={w:gt,h:F,pw:Math.round(gt*nt),ph:Math.round(F*nt),dpr:nt},S.current=!0});tt.observe(Y);const U=()=>{const{w:I,h:X,pw:nt,ph:gt}=x.current;if(I===0||X===0){s.current=requestAnimationFrame(U);return}if(S.current&&(S.current=!1,Y.width=nt,Y.height=gt),at.setTransform(h.current,0,0,h.current,0,0),at.fillStyle="#0d1117",at.fillRect(0,0,I,X),l.current++,!_&&l.current%oM===0){const k=t.buffers.current,et=t.writeIndex.current,pt=t.samplesInBuffer.current;if(k&&pt>=Zo){let Mt;if(g===-1){const Z=p.current,V=t.bufferSize,ft=(et-Zo+V)%V;for(let St=0;St<Zo;St++){let Nt=0;const wt=(ft+St)%V;for(let Gt=0;Gt<tn;Gt++)Nt+=k[Gt][wt];Z[St]=Nt/tn}Mt=E.analyse(Z,0)}else Mt=E.analyseRing(k[g],et,pt);if(Mt){if(!c.current||c.current.length!==Mt.psd.length)c.current=new Float64Array(Mt.psd);else{const V=c.current,ft=Mt.psd;for(let St=0;St<V.length;St++)V[St]=V[St]*(1-L_)+ft[St]*L_}const Z=performance.now();if(Z-d.current>lM){d.current=Z,m.current=Mt.bandPowers,G(Mt.bandPowers);let V="",ft=0;for(const St of on)(Mt.bandPowers[St.name]||0)>ft&&(ft=Mt.bandPowers[St.name],V=St.name);z(St=>St.band===V&&St.freq===Mt.dominantFrequency?St:{band:V,freq:Mt.dominantFrequency})}}}}const F=c.current;!F||F.length===0?(at.fillStyle="#4b5563",at.font="13px monospace",at.textAlign="center",at.fillText("Collecting samples…",I/2,X/2)):cM(at,I,X,F,E._frequencies,rM,b,A),s.current=requestAnimationFrame(U)};return s.current=requestAnimationFrame(U),()=>{cancelAnimationFrame(s.current),tt.disconnect()}},[t,g,b,_,A,E]);const O=Math.max(...on.map(Y=>N[Y.name]||0),1e-6),rt=g===-1?"Avg":`Ch ${g+1}`,H=((q=on.find(Y=>Y.name===B.band))==null?void 0:q.color)||"#8b949e";return L.jsxs("div",{className:"spectral-panel",children:[L.jsxs("div",{className:"spectral-toolbar",children:[L.jsxs("span",{className:"spectral-title",children:["Spectral"," ",L.jsx("small",{style:{color:"var(--text-dim)",fontWeight:400},children:rt})]}),L.jsxs("div",{className:"spectral-channels",children:[L.jsx("button",{className:`sp-ch${g===-1?" active":""}`,onClick:()=>M(-1),children:"Avg"}),Array.from({length:tn},(Y,at)=>L.jsx("button",{className:`sp-ch${g===at?" active":""}`,onClick:()=>M(at),children:at+1},at))]}),L.jsxs("span",{className:"sp-dominant",children:[L.jsx("strong",{style:{color:H},children:B.band||"—"})," ",B.freq>0&&L.jsxs("small",{children:[B.freq.toFixed(1)," Hz"]})]}),L.jsxs("div",{className:"spectral-ctrls",children:[L.jsx("button",{className:`btn${b?" active":""}`,onClick:()=>R(Y=>!Y),children:b?"Log":"Lin"}),L.jsx("button",{className:`btn${_?" active":""}`,onClick:()=>v(Y=>!Y),children:_?"▶":"⏸"})]})]}),L.jsxs("div",{className:"spectral-canvas-wrap",children:[L.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}}),_&&L.jsx("div",{className:"spectral-paused",children:"PAUSED"})]}),L.jsx("div",{className:"spectral-bands",children:on.map(Y=>{const at=N[Y.name]||0,tt=O>0?at/O*100:0,U=A===Y.name;return L.jsxs("div",{className:`sp-band${U?" selected":""}`,onClick:()=>D(U?null:Y.name),children:[L.jsx("span",{className:"sp-band-dot",style:{background:Y.color}}),L.jsx("span",{className:"sp-band-name",style:{color:Y.color},children:Y.label}),L.jsx("div",{className:"sp-band-track",children:L.jsx("div",{className:"sp-band-fill",style:{width:`${tt}%`,background:Y.color}})}),L.jsx("span",{className:"sp-band-val",children:at<.01?at.toExponential(1):at.toFixed(2)})]},Y.name)})})]})}),fM=st.memo(function(){const[t,i]=st.useState(!1),[s,l]=st.useState(0),[c,d]=st.useState(0),[p,m]=st.useState(0),h=st.useRef(0),x=st.useRef(performance.now()),S=st.useRef(0);return st.useEffect(()=>{const g=M=>{(M.key==="p"||M.key==="P")&&i(b=>!b)};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[]),st.useEffect(()=>{if(!t)return;const g=()=>{h.current++;const M=performance.now(),b=M-x.current;if(b>=1e3){l(Math.round(h.current*(1e3/b))),d(Math.round(b/h.current*100)/100);const R=performance.memory;R&&m(Math.round(R.usedJSHeapSize/1048576)),h.current=0,x.current=M}S.current=requestAnimationFrame(g)};return S.current=requestAnimationFrame(g),()=>cancelAnimationFrame(S.current)},[t]),t?L.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.8)",color:"#0f0",fontFamily:"monospace",fontSize:"12px",padding:"8px 12px",borderRadius:"4px",zIndex:1e4,border:"1px solid #0f0",userSelect:"none"},children:[L.jsxs("div",{children:["FPS: ",s]}),L.jsxs("div",{children:["Frame: ",c,"ms"]}),L.jsxs("div",{children:["Memory: ",p,"MB"]}),L.jsx("div",{style:{marginTop:"4px",fontSize:"10px",opacity:.7},children:"Press P to toggle"})]}):null});function dM({onSelect:r,onBack:t}){const[i,s]=st.useState([]),[l,c]=st.useState(!0);st.useEffect(()=>{d()},[]);async function d(){try{const x=await(await fetch("/api/recordings")).json();s(x.recordings||[])}catch(h){console.error("Failed to load recordings:",h)}finally{c(!1)}}function p(h){return new Date(h*1e3).toLocaleString()}function m(h){return h<1024?`${h} B`:h<1024*1024?`${(h/1024).toFixed(1)} KB`:`${(h/1024/1024).toFixed(1)} MB`}return L.jsxs("div",{className:"session-list",children:[L.jsxs("header",{className:"session-header",children:[L.jsx("h2",{children:"Saved Sessions"}),L.jsx("button",{className:"btn btn-back",onClick:t,children:"← Back to Live"})]}),l&&L.jsx("div",{className:"list-loading",children:L.jsx("p",{children:"Loading recordings..."})}),!l&&i.length===0&&L.jsx("div",{className:"list-empty",children:L.jsx("p",{children:"No recordings yet. Record a session on the Live tab."})}),!l&&i.length>0&&L.jsx("div",{className:"list-container",children:L.jsxs("table",{className:"recordings-table",children:[L.jsx("thead",{children:L.jsxs("tr",{children:[L.jsx("th",{children:"Filename"}),L.jsx("th",{children:"Size"}),L.jsx("th",{children:"Date & Time"}),L.jsx("th",{children:"Action"})]})}),L.jsx("tbody",{children:i.map(h=>L.jsxs("tr",{children:[L.jsx("td",{className:"filename",children:h.filename}),L.jsx("td",{className:"size",children:m(h.size)}),L.jsx("td",{className:"mtime",children:p(h.mtime)}),L.jsx("td",{className:"action",children:L.jsx("button",{className:"btn btn-open",onClick:()=>r(h.filename),children:"Open"})})]},h.filename))})]})}),L.jsx("style",{children:`
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
      `})]})}const hM="rgba(48,54,61,0.4)",pM="rgba(88,166,255,0.12)",mM="rgba(88,166,255,0.6)",gM="#0d1117",_M=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],vM=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"}];function xM({filename:r,onBack:t}){const[i,s]=st.useState(!0),[l,c]=st.useState(null),[d,p]=st.useState(!1),[m,h]=st.useState(0),[x,S]=st.useState(1),[g,M]=st.useState(100),[b,R]=st.useState(4),[_,v]=st.useState([]),[A,D]=st.useState(""),[N,G]=st.useState(!1),B=st.useRef(null),z=st.useRef(0),E=st.useRef(0),O=st.useRef(null),rt=st.useRef(0),H=st.useRef(0),q=st.useRef(!1),Y=st.useRef(1),at=st.useRef(100),tt=st.useRef(4),U=st.useRef(window.devicePixelRatio||1),I=st.useRef({w:0,h:0});q.current=d,Y.current=x,at.current=g,tt.current=b,E.current=m;const X=z.current,nt=X/Un,gt=m/Un;st.useEffect(()=>{let V=!1;async function ft(){s(!0),c(null);try{const St=await fetch(`/api/recordings/data/${encodeURIComponent(r)}`);if(!St.ok)throw new Error(`HTTP ${St.status}`);const Nt=await St.json();if(Nt.error)throw new Error(Nt.error);const Gt=(Nt.data||[]).slice(1),Ot=Gt.length;if(Ot===0)throw new Error("Empty recording");const Qt=Array.from({length:tn},()=>new Float32Array(Ot));for(let ae=0;ae<Ot;ae++){const Yt=Gt[ae].split(",");for(let pe=0;pe<tn;pe++)Qt[pe][ae]=parseFloat(Yt[pe+1])||0}V||(B.current=Qt,z.current=Ot,h(0),s(!1))}catch(St){V||(c(St instanceof Error?St.message:String(St)),s(!1))}}return ft(),()=>{V=!0}},[r]),st.useEffect(()=>{fetch(`/api/recordings/annotations/${encodeURIComponent(r)}`).then(V=>V.json()).then(V=>v(V.annotations||[])).catch(()=>{})},[r]),st.useEffect(()=>{const V=O.current;if(!V||i||l)return;const ft=V.getContext("2d",{alpha:!1}),St=Nt=>{if(q.current&&H.current>0){const j=(Nt-H.current)/1e3*Un*Y.current;let Te=E.current+j;Te>=z.current&&(Te=z.current-1,p(!1)),E.current=Te,h(Te)}H.current=Nt;const wt=U.current,Gt=V.getBoundingClientRect(),Ot=Gt.width,Qt=Gt.height,ae=Math.round(Ot*wt),Yt=Math.round(Qt*wt);(I.current.w!==ae||I.current.h!==Yt)&&(I.current={w:ae,h:Yt},V.width=ae,V.height=Yt,ft.setTransform(wt,0,0,wt,0,0)),F(ft,Ot,Qt),rt.current=requestAnimationFrame(St)};return H.current=0,rt.current=requestAnimationFrame(St),()=>cancelAnimationFrame(rt.current)},[i,l]);function F(V,ft,St){const Nt=B.current;if(!Nt)return;V.fillStyle=gM,V.fillRect(0,0,ft,St);const wt=z.current,Gt=E.current,Ot=tt.current*Un,Qt=at.current,ae=Math.floor(Ot/2);let Yt=Math.floor(Gt)-ae,pe=Yt+Ot;Yt<0&&(Yt=0,pe=Ot),pe>wt&&(pe=wt,Yt=Math.max(0,wt-Ot));const j=St/tn;for(let P=0;P<tn;P++){const T=P*j,$=T+j/2,yt=j/2;P>0&&(V.strokeStyle=hM,V.lineWidth=.5,V.beginPath(),V.moveTo(0,T),V.lineTo(ft,T),V.stroke()),V.strokeStyle=pM,V.lineWidth=.5,V.beginPath(),V.moveTo(0,$),V.lineTo(ft,$),V.stroke(),V.fillStyle="rgba(230,237,243,0.4)",V.font="10px monospace",V.fillText(`Ch ${P+1}`,4,T+12);const At=Nt[P],mt=pe-Yt;if(mt<2)continue;const jt=mt>2e3?Math.floor(mt/2e3):1,Lt=ft/(mt-1),te=yt*.85/Qt;V.strokeStyle=yp[P],V.lineWidth=1.2,V.lineJoin="round",V.beginPath();for(let ee=0;ee<mt;ee+=jt){const Ct=ee*Lt,Rt=$-At[Yt+ee]*te;ee===0?V.moveTo(Ct,Rt):V.lineTo(Ct,Rt)}V.stroke()}const Te=Math.floor(Gt)>=Yt&&Math.floor(Gt)<=pe?(Math.floor(Gt)-Yt)/(pe-Yt)*ft:ft/2;V.strokeStyle=mM,V.lineWidth=1.5,V.setLineDash([4,3]),V.beginPath(),V.moveTo(Te,0),V.lineTo(Te,St),V.stroke(),V.setLineDash([]),V.fillStyle="rgba(230,237,243,0.3)",V.font="10px monospace";const me=Yt/Un,Ae=pe/Un,Xt=Math.min(10,Math.floor(ft/80));for(let P=0;P<=Xt;P++){const T=me+(Ae-me)*(P/Xt),$=P/Xt*ft;V.fillText(Z(T),$+2,St-4)}}const k=st.useCallback(async V=>{try{await fetch(`/api/recordings/annotations/${encodeURIComponent(r)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({annotations:V})})}catch{}},[r]);function et(){if(!A.trim())return;const V=Math.floor(m)/Un,ft={id:Date.now(),frame:Math.floor(m),time:V,text:A,timestamp:new Date().toISOString()},St=[..._,ft];v(St),k(St),D(""),G(!1)}function pt(V){const ft=_.filter(St=>St.id!==V);v(ft),k(ft)}function Mt(V){h(V.frame),E.current=V.frame,p(!1)}function Z(V){const ft=Math.floor(V/60),St=Math.floor(V%60),Nt=Math.floor(V%1*100);return`${String(ft).padStart(2,"0")}:${String(St).padStart(2,"0")}.${String(Nt).padStart(2,"0")}`}return i?L.jsxs("div",{className:"sv-root sv-center",children:[L.jsx("p",{children:"Loading recording..."}),L.jsx("style",{children:Bd})]}):l?L.jsxs("div",{className:"sv-root sv-center",children:[L.jsxs("p",{children:["Error: ",l]}),L.jsx("button",{className:"sv-btn",onClick:t,children:"Back"}),L.jsx("style",{children:Bd})]}):L.jsxs("div",{className:"sv-root",children:[L.jsxs("header",{className:"sv-header",children:[L.jsxs("div",{className:"sv-title",children:[L.jsx("button",{className:"sv-btn",onClick:t,children:"← Back"}),L.jsx("h2",{children:r}),L.jsxs("span",{className:"sv-meta",children:[X.toLocaleString()," frames · ",Z(nt)]})]}),L.jsxs("div",{className:"sv-controls",children:[L.jsx("button",{className:`sv-btn${d?" active":""}`,onClick:()=>{d||(H.current=0),p(!d)},children:d?"⏸ Pause":"▶ Play"}),L.jsx("button",{className:"sv-btn",onClick:()=>{h(0),E.current=0,p(!1)},children:"⏮ Rewind"}),L.jsxs("select",{value:x,onChange:V=>S(parseFloat(V.target.value)),className:"sv-select",children:[L.jsx("option",{value:.25,children:"0.25x"}),L.jsx("option",{value:.5,children:"0.5x"}),L.jsx("option",{value:1,children:"1x"}),L.jsx("option",{value:1.5,children:"1.5x"}),L.jsx("option",{value:2,children:"2x"}),L.jsx("option",{value:4,children:"4x"})]}),L.jsx("div",{className:"sv-sep"}),L.jsx("label",{className:"sv-label",children:"Window"}),L.jsx("select",{value:b,onChange:V=>R(parseInt(V.target.value)),className:"sv-select",children:vM.map(V=>L.jsx("option",{value:V.value,children:V.label},V.value))}),L.jsx("label",{className:"sv-label",children:"Scale"}),L.jsx("select",{value:g,onChange:V=>M(parseInt(V.target.value)),className:"sv-select",children:_M.map(V=>L.jsx("option",{value:V.value,children:V.label},V.value))})]})]}),L.jsxs("div",{className:"sv-timeline",children:[L.jsx("span",{className:"sv-time",children:Z(gt)}),L.jsx("input",{type:"range",min:"0",max:X-1,value:Math.floor(m),onChange:V=>{const ft=parseInt(V.target.value);h(ft),E.current=ft,p(!1),H.current=0},className:"sv-slider"}),L.jsx("span",{className:"sv-time",children:Z(nt)})]}),L.jsxs("div",{className:"sv-content",children:[L.jsx("div",{className:"sv-canvas-wrap",children:L.jsx("canvas",{ref:O,style:{display:"block",width:"100%",height:"100%"}})}),L.jsxs("div",{className:"sv-annotations",children:[L.jsxs("div",{className:"sv-anno-header",children:[L.jsx("h3",{children:"Annotations"}),L.jsx("button",{className:"sv-btn sv-btn-sm",onClick:()=>G(!N),children:N?"Cancel":"+ Add"})]}),N&&L.jsxs("div",{className:"sv-anno-form",children:[L.jsx("textarea",{value:A,onChange:V=>D(V.target.value),placeholder:"Annotation at current position...",onKeyDown:V=>{V.key==="Enter"&&V.ctrlKey&&et()}}),L.jsx("button",{className:"sv-btn sv-btn-primary",onClick:et,children:"Add"})]}),L.jsx("div",{className:"sv-anno-list",children:_.length===0?L.jsx("p",{className:"sv-anno-empty",children:"No annotations"}):_.map(V=>L.jsxs("div",{className:"sv-anno-item",onClick:()=>Mt(V),children:[L.jsx("span",{className:"sv-anno-time",children:Z(V.time)}),L.jsx("span",{className:"sv-anno-text",children:V.text}),L.jsx("button",{className:"sv-anno-del",onClick:ft=>{ft.stopPropagation(),pt(V.id)},children:"✕"})]},V.id))})]})]}),L.jsx("style",{children:Bd})]})}const Bd=`
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
 */const Mp="183",SM=0,O_=1,yM=2,ou=1,MM=2,ll=3,fs=0,Kn=1,Xi=2,Ea=0,Wr=1,P_=2,F_=3,I_=4,bM=5,Bs=100,EM=101,TM=102,AM=103,RM=104,CM=200,wM=201,DM=202,NM=203,Eh=204,Th=205,UM=206,LM=207,OM=208,PM=209,FM=210,IM=211,BM=212,zM=213,HM=214,Ah=0,Rh=1,Ch=2,Yr=3,wh=4,Dh=5,Nh=6,Uh=7,Wv=0,GM=1,VM=2,Yi=0,jv=1,qv=2,Yv=3,bp=4,Zv=5,Kv=6,Qv=7,Jv=300,Vs=301,Zr=302,zd=303,Hd=304,bu=306,Lh=1e3,ba=1001,Oh=1002,Rn=1003,kM=1004,Nc=1005,On=1006,Gd=1007,Hs=1008,ci=1009,$v=1010,tx=1011,ul=1012,Ep=1013,Ki=1014,ji=1015,Aa=1016,Tp=1017,Ap=1018,fl=1020,ex=35902,nx=35899,ix=1021,ax=1022,Li=1023,Ra=1026,Gs=1027,sx=1028,Rp=1029,Kr=1030,Cp=1031,wp=1033,lu=33776,cu=33777,uu=33778,fu=33779,Ph=35840,Fh=35841,Ih=35842,Bh=35843,zh=36196,Hh=37492,Gh=37496,Vh=37488,kh=37489,Xh=37490,Wh=37491,jh=37808,qh=37809,Yh=37810,Zh=37811,Kh=37812,Qh=37813,Jh=37814,$h=37815,tp=37816,ep=37817,np=37818,ip=37819,ap=37820,sp=37821,rp=36492,op=36494,lp=36495,cp=36283,up=36284,fp=36285,dp=36286,XM=3200,WM=0,jM=1,ls="",Si="srgb",Qr="srgb-linear",hu="linear",Ve="srgb",Ar=7680,B_=519,qM=512,YM=513,ZM=514,Dp=515,KM=516,QM=517,Np=518,JM=519,hp=35044,z_="300 es",qi=2e3,dl=2001;function $M(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function pu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function tb(){const r=pu("canvas");return r.style.display="block",r}const H_={};function mu(...r){const t="THREE."+r.shift();console.log(t,...r)}function rx(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function le(...r){r=rx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ue(...r){r=rx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function gu(...r){const t=r.join(" ");t in H_||(H_[t]=!0,le(...r))}function eb(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const nb={[Ah]:Rh,[Ch]:Nh,[wh]:Uh,[Yr]:Dh,[Rh]:Ah,[Nh]:Ch,[Uh]:wh,[Dh]:Yr};class $r{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vd=Math.PI/180,pp=180/Math.PI;function us(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function De(r,t,i){return Math.max(t,Math.min(i,r))}function ib(r,t){return(r%t+t)%t}function kd(r,t,i){return(1-i)*r+i*t}function Wi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function je(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(t=0,i=0){Ee.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class to{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],x=s[l+2],S=s[l+3],g=c[d+0],M=c[d+1],b=c[d+2],R=c[d+3];if(S!==R||m!==g||h!==M||x!==b){let _=m*g+h*M+x*b+S*R;_<0&&(g=-g,M=-M,b=-b,R=-R,_=-_);let v=1-p;if(_<.9995){const A=Math.acos(_),D=Math.sin(A);v=Math.sin(v*A)/D,p=Math.sin(p*A)/D,m=m*v+g*p,h=h*v+M*p,x=x*v+b*p,S=S*v+R*p}else{m=m*v+g*p,h=h*v+M*p,x=x*v+b*p,S=S*v+R*p;const A=1/Math.sqrt(m*m+h*h+x*x+S*S);m*=A,h*=A,x*=A,S*=A}}t[i]=m,t[i+1]=h,t[i+2]=x,t[i+3]=S}static multiplyQuaternionsFlat(t,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],x=s[l+3],S=c[d],g=c[d+1],M=c[d+2],b=c[d+3];return t[i]=p*b+x*S+m*M-h*g,t[i+1]=m*b+x*g+h*S-p*M,t[i+2]=h*b+x*M+p*g-m*S,t[i+3]=x*b-p*S-m*g-h*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,p=Math.cos,m=Math.sin,h=p(s/2),x=p(l/2),S=p(c/2),g=m(s/2),M=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=g*x*S+h*M*b,this._y=h*M*S-g*x*b,this._z=h*x*b+g*M*S,this._w=h*x*S-g*M*b;break;case"YXZ":this._x=g*x*S+h*M*b,this._y=h*M*S-g*x*b,this._z=h*x*b-g*M*S,this._w=h*x*S+g*M*b;break;case"ZXY":this._x=g*x*S-h*M*b,this._y=h*M*S+g*x*b,this._z=h*x*b+g*M*S,this._w=h*x*S-g*M*b;break;case"ZYX":this._x=g*x*S-h*M*b,this._y=h*M*S+g*x*b,this._z=h*x*b-g*M*S,this._w=h*x*S+g*M*b;break;case"YZX":this._x=g*x*S+h*M*b,this._y=h*M*S+g*x*b,this._z=h*x*b-g*M*S,this._w=h*x*S-g*M*b;break;case"XZY":this._x=g*x*S-h*M*b,this._y=h*M*S-g*x*b,this._z=h*x*b+g*M*S,this._w=h*x*S+g*M*b;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],x=i[6],S=i[10],g=s+p+S;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(x-m)*M,this._y=(c-h)*M,this._z=(d-l)*M}else if(s>p&&s>S){const M=2*Math.sqrt(1+s-p-S);this._w=(x-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+h)/M}else if(p>S){const M=2*Math.sqrt(1+p-s-S);this._w=(c-h)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+S-s-p);this._w=(d-l)/M,this._x=(c+h)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,p=i._x,m=i._y,h=i._z,x=i._w;return this._x=s*x+d*p+l*h-c*m,this._y=l*x+d*m+c*p-s*h,this._z=c*x+d*h+s*m-l*p,this._w=d*x-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,d=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);m=Math.sin(m*h)/x,i=Math.sin(i*h)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(t=0,i=0,s=0){lt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(G_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(G_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,p=t.z,m=t.w,h=2*(d*l-p*s),x=2*(p*i-c*l),S=2*(c*s-d*i);return this.x=i+m*h+d*S-p*x,this.y=s+m*x+p*h-c*S,this.z=l+m*S+c*x-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Xd.copy(this).projectOnVector(t),this.sub(Xd)}reflect(t){return this.sub(Xd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xd=new lt,G_=new to;class xe{constructor(t,i,s,l,c,d,p,m,h){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,m,h)}set(t,i,s,l,c,d,p,m,h){const x=this.elements;return x[0]=t,x[1]=l,x[2]=p,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=d,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],x=s[4],S=s[7],g=s[2],M=s[5],b=s[8],R=l[0],_=l[3],v=l[6],A=l[1],D=l[4],N=l[7],G=l[2],B=l[5],z=l[8];return c[0]=d*R+p*A+m*G,c[3]=d*_+p*D+m*B,c[6]=d*v+p*N+m*z,c[1]=h*R+x*A+S*G,c[4]=h*_+x*D+S*B,c[7]=h*v+x*N+S*z,c[2]=g*R+M*A+b*G,c[5]=g*_+M*D+b*B,c[8]=g*v+M*N+b*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8];return i*d*x-i*p*h-s*c*x+s*p*m+l*c*h-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8],S=x*d-p*h,g=p*m-x*c,M=h*c-d*m,b=i*S+s*g+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=S*R,t[1]=(l*h-x*s)*R,t[2]=(p*s-l*d)*R,t[3]=g*R,t[4]=(x*i-l*m)*R,t[5]=(l*c-p*i)*R,t[6]=M*R,t[7]=(s*m-h*i)*R,t[8]=(d*i-s*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+t,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Wd.makeScale(t,i)),this}rotate(t){return this.premultiply(Wd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Wd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Wd=new xe,V_=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),k_=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ab(){const r={enabled:!0,workingColorSpace:Qr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Ve&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ve&&(l.r=jr(l.r),l.g=jr(l.g),l.b=jr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ls?hu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return gu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return gu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Qr]:{primaries:t,whitePoint:s,transfer:hu,toXYZ:V_,fromXYZ:k_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:V_,fromXYZ:k_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const Le=ab();function Ta(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function jr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Rr;class sb{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Rr===void 0&&(Rr=pu("canvas")),Rr.width=t.width,Rr.height=t.height;const l=Rr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Rr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=pu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=Ta(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ta(i[s]/255)*255):i[s]=Ta(i[s]);return{data:i,width:t.width,height:t.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rb=0;class Up{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(jd(l[d].image)):c.push(jd(l[d]))}else c=jd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function jd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}let ob=0;const qd=new lt;class Pn extends $r{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=ba,l=ba,c=On,d=Hs,p=Li,m=ci,h=Pn.DEFAULT_ANISOTROPY,x=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=us(),this.name="",this.source=new Up(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qd).x}get height(){return this.source.getSize(qd).y}get depth(){return this.source.getSize(qd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){le(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Lh:t.x=t.x-Math.floor(t.x);break;case ba:t.x=t.x<0?0:1;break;case Oh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Lh:t.y=t.y-Math.floor(t.y);break;case ba:t.y=t.y<0?0:1;break;case Oh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Jv;Pn.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,h=m[0],x=m[4],S=m[8],g=m[1],M=m[5],b=m[9],R=m[2],_=m[6],v=m[10];if(Math.abs(x-g)<.01&&Math.abs(S-R)<.01&&Math.abs(b-_)<.01){if(Math.abs(x+g)<.1&&Math.abs(S+R)<.1&&Math.abs(b+_)<.1&&Math.abs(h+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(h+1)/2,N=(M+1)/2,G=(v+1)/2,B=(x+g)/4,z=(S+R)/4,E=(b+_)/4;return D>N&&D>G?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=B/s,c=z/s):N>G?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=B/l,c=E/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=z/c,l=E/c),this.set(s,l,c,i),this}let A=Math.sqrt((_-b)*(_-b)+(S-R)*(S-R)+(g-x)*(g-x));return Math.abs(A)<.001&&(A=1),this.x=(_-b)/A,this.y=(S-R)/A,this.z=(g-x)/A,this.w=Math.acos((h+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this.w=De(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this.w=De(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lb extends $r{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Pn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Up(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends lb{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class ox extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cb extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ke{constructor(t,i,s,l,c,d,p,m,h,x,S,g,M,b,R,_){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,m,h,x,S,g,M,b,R,_)}set(t,i,s,l,c,d,p,m,h,x,S,g,M,b,R,_){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=d,v[9]=p,v[13]=m,v[2]=h,v[6]=x,v[10]=S,v[14]=g,v[3]=M,v[7]=b,v[11]=R,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Cr.setFromMatrixColumn(t,0).length(),c=1/Cr.setFromMatrixColumn(t,1).length(),d=1/Cr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),x=Math.cos(c),S=Math.sin(c);if(t.order==="XYZ"){const g=d*x,M=d*S,b=p*x,R=p*S;i[0]=m*x,i[4]=-m*S,i[8]=h,i[1]=M+b*h,i[5]=g-R*h,i[9]=-p*m,i[2]=R-g*h,i[6]=b+M*h,i[10]=d*m}else if(t.order==="YXZ"){const g=m*x,M=m*S,b=h*x,R=h*S;i[0]=g+R*p,i[4]=b*p-M,i[8]=d*h,i[1]=d*S,i[5]=d*x,i[9]=-p,i[2]=M*p-b,i[6]=R+g*p,i[10]=d*m}else if(t.order==="ZXY"){const g=m*x,M=m*S,b=h*x,R=h*S;i[0]=g-R*p,i[4]=-d*S,i[8]=b+M*p,i[1]=M+b*p,i[5]=d*x,i[9]=R-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(t.order==="ZYX"){const g=d*x,M=d*S,b=p*x,R=p*S;i[0]=m*x,i[4]=b*h-M,i[8]=g*h+R,i[1]=m*S,i[5]=R*h+g,i[9]=M*h-b,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(t.order==="YZX"){const g=d*m,M=d*h,b=p*m,R=p*h;i[0]=m*x,i[4]=R-g*S,i[8]=b*S+M,i[1]=S,i[5]=d*x,i[9]=-p*x,i[2]=-h*x,i[6]=M*S+b,i[10]=g-R*S}else if(t.order==="XZY"){const g=d*m,M=d*h,b=p*m,R=p*h;i[0]=m*x,i[4]=-S,i[8]=h*x,i[1]=g*S+R,i[5]=d*x,i[9]=M*S-b,i[2]=b*S-M,i[6]=p*x,i[10]=R*S+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ub,t,fb)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),es.crossVectors(s,ri),es.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),es.crossVectors(s,ri)),es.normalize(),Uc.crossVectors(ri,es),l[0]=es.x,l[4]=Uc.x,l[8]=ri.x,l[1]=es.y,l[5]=Uc.y,l[9]=ri.y,l[2]=es.z,l[6]=Uc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],x=s[1],S=s[5],g=s[9],M=s[13],b=s[2],R=s[6],_=s[10],v=s[14],A=s[3],D=s[7],N=s[11],G=s[15],B=l[0],z=l[4],E=l[8],O=l[12],rt=l[1],H=l[5],q=l[9],Y=l[13],at=l[2],tt=l[6],U=l[10],I=l[14],X=l[3],nt=l[7],gt=l[11],F=l[15];return c[0]=d*B+p*rt+m*at+h*X,c[4]=d*z+p*H+m*tt+h*nt,c[8]=d*E+p*q+m*U+h*gt,c[12]=d*O+p*Y+m*I+h*F,c[1]=x*B+S*rt+g*at+M*X,c[5]=x*z+S*H+g*tt+M*nt,c[9]=x*E+S*q+g*U+M*gt,c[13]=x*O+S*Y+g*I+M*F,c[2]=b*B+R*rt+_*at+v*X,c[6]=b*z+R*H+_*tt+v*nt,c[10]=b*E+R*q+_*U+v*gt,c[14]=b*O+R*Y+_*I+v*F,c[3]=A*B+D*rt+N*at+G*X,c[7]=A*z+D*H+N*tt+G*nt,c[11]=A*E+D*q+N*U+G*gt,c[15]=A*O+D*Y+N*I+G*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],p=t[5],m=t[9],h=t[13],x=t[2],S=t[6],g=t[10],M=t[14],b=t[3],R=t[7],_=t[11],v=t[15],A=m*M-h*g,D=p*M-h*S,N=p*g-m*S,G=d*M-h*x,B=d*g-m*x,z=d*S-p*x;return i*(R*A-_*D+v*N)-s*(b*A-_*G+v*B)+l*(b*D-R*G+v*z)-c*(b*N-R*B+_*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8],S=t[9],g=t[10],M=t[11],b=t[12],R=t[13],_=t[14],v=t[15],A=i*p-s*d,D=i*m-l*d,N=i*h-c*d,G=s*m-l*p,B=s*h-c*p,z=l*h-c*m,E=x*R-S*b,O=x*_-g*b,rt=x*v-M*b,H=S*_-g*R,q=S*v-M*R,Y=g*v-M*_,at=A*Y-D*q+N*H+G*rt-B*O+z*E;if(at===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const tt=1/at;return t[0]=(p*Y-m*q+h*H)*tt,t[1]=(l*q-s*Y-c*H)*tt,t[2]=(R*z-_*B+v*G)*tt,t[3]=(g*B-S*z-M*G)*tt,t[4]=(m*rt-d*Y-h*O)*tt,t[5]=(i*Y-l*rt+c*O)*tt,t[6]=(_*N-b*z-v*D)*tt,t[7]=(x*z-g*N+M*D)*tt,t[8]=(d*q-p*rt+h*E)*tt,t[9]=(s*rt-i*q-c*E)*tt,t[10]=(b*B-R*N+v*A)*tt,t[11]=(S*N-x*B-M*A)*tt,t[12]=(p*O-d*H-m*E)*tt,t[13]=(i*H-s*O+l*E)*tt,t[14]=(R*D-b*G-_*A)*tt,t[15]=(x*G-S*D+g*A)*tt,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,p=t.y,m=t.z,h=c*d,x=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,x*p+s,x*m-l*d,0,h*m-l*p,x*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,x=d+d,S=p+p,g=c*h,M=c*x,b=c*S,R=d*x,_=d*S,v=p*S,A=m*h,D=m*x,N=m*S,G=s.x,B=s.y,z=s.z;return l[0]=(1-(R+v))*G,l[1]=(M+N)*G,l[2]=(b-D)*G,l[3]=0,l[4]=(M-N)*B,l[5]=(1-(g+v))*B,l[6]=(_+A)*B,l[7]=0,l[8]=(b+D)*z,l[9]=(_-A)*z,l[10]=(1-(g+R))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=Cr.set(l[0],l[1],l[2]).length();const p=Cr.set(l[4],l[5],l[6]).length(),m=Cr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Di.copy(this);const h=1/d,x=1/p,S=1/m;return Di.elements[0]*=h,Di.elements[1]*=h,Di.elements[2]*=h,Di.elements[4]*=x,Di.elements[5]*=x,Di.elements[6]*=x,Di.elements[8]*=S,Di.elements[9]*=S,Di.elements[10]*=S,i.setFromRotationMatrix(Di),s.x=d,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,d,p=qi,m=!1){const h=this.elements,x=2*c/(i-t),S=2*c/(s-l),g=(i+t)/(i-t),M=(s+l)/(s-l);let b,R;if(m)b=c/(d-c),R=d*c/(d-c);else if(p===qi)b=-(d+c)/(d-c),R=-2*d*c/(d-c);else if(p===dl)b=-d/(d-c),R=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=S,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=R,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,s,l,c,d,p=qi,m=!1){const h=this.elements,x=2/(i-t),S=2/(s-l),g=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,R;if(m)b=1/(d-c),R=d/(d-c);else if(p===qi)b=-2/(d-c),R=-(d+c)/(d-c);else if(p===dl)b=-1/(d-c),R=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=S,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=R,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Cr=new lt,Di=new Ke,ub=new lt(0,0,0),fb=new lt(1,1,1),es=new lt,Uc=new lt,ri=new lt,X_=new Ke,W_=new to;class Ca{constructor(t=0,i=0,s=0,l=Ca.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],x=l[9],S=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(De(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-De(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(De(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-De(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(De(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,M),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return X_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(X_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return W_.setFromEuler(this),this.setFromQuaternion(W_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ca.DEFAULT_ORDER="XYZ";class lx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let db=0;const j_=new lt,wr=new to,va=new Ke,Lc=new lt,Ko=new lt,hb=new lt,pb=new to,q_=new lt(1,0,0),Y_=new lt(0,1,0),Z_=new lt(0,0,1),K_={type:"added"},mb={type:"removed"},Dr={type:"childadded",child:null},Yd={type:"childremoved",child:null};class Cn extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const t=new lt,i=new Ca,s=new to,l=new lt(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new xe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.multiply(wr),this}rotateOnWorldAxis(t,i){return wr.setFromAxisAngle(t,i),this.quaternion.premultiply(wr),this}rotateX(t){return this.rotateOnAxis(q_,t)}rotateY(t){return this.rotateOnAxis(Y_,t)}rotateZ(t){return this.rotateOnAxis(Z_,t)}translateOnAxis(t,i){return j_.copy(t).applyQuaternion(this.quaternion),this.position.add(j_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(q_,t)}translateY(t){return this.translateOnAxis(Y_,t)}translateZ(t){return this.translateOnAxis(Z_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Lc.copy(t):Lc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(Ko,Lc,this.up):va.lookAt(Lc,Ko,this.up),this.quaternion.setFromRotationMatrix(va),l&&(va.extractRotation(l.matrixWorld),wr.setFromRotationMatrix(va),this.quaternion.premultiply(wr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(K_),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(mb),Yd.child=t,this.dispatchEvent(Yd),Yd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),va.multiply(t.parent.matrixWorld)),t.applyMatrix4(va),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(K_),Dr.child=t,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,t,hb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,pb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const S=m[h];c(t.shapes,S)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=d(t.geometries),m=d(t.materials),h=d(t.textures),x=d(t.images),S=d(t.shapes),g=d(t.skeletons),M=d(t.animations),b=d(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),x.length>0&&(s.images=x),S.length>0&&(s.shapes=S),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(p){const m=[];for(const h in p){const x=p[h];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Cn.DEFAULT_UP=new lt(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Oc extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gb={type:"move"};class Zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const R of t.hand.values()){const _=i.getJointPose(R,s),v=this._getHandJoint(h,R);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const x=h.joints["index-finger-tip"],S=h.joints["thumb-tip"],g=x.position.distanceTo(S.position),M=.02,b=.005;h.inputState.pinching&&g>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(gb)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Oc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Pc={h:0,s:0,l:0};function Kd(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class ye{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=ib(t,1),i=De(i,0,1),s=De(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Kd(d,c,t+1/3),this.g=Kd(d,c,t),this.b=Kd(d,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&le("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:le("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);le("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Si){const s=cx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):le("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ta(t.r),this.g=Ta(t.g),this.b=Ta(t.b),this}copyLinearToSRGB(t){return this.r=jr(t.r),this.g=jr(t.g),this.b=jr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return Le.workingToColorSpace(Nn.copy(this),t),Math.round(De(Nn.r*255,0,255))*65536+Math.round(De(Nn.g*255,0,255))*256+Math.round(De(Nn.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(Nn.copy(this),i);const s=Nn.r,l=Nn.g,c=Nn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const x=(p+d)/2;if(p===d)m=0,h=0;else{const S=d-p;switch(h=x<=.5?S/(d+p):S/(2-d-p),d){case s:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-s)/S+2;break;case c:m=(s-l)/S+4;break}m/=6}return t.h=m,t.s=h,t.l=x,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=Si){Le.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,s=Nn.g,l=Nn.b;return t!==Si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+i,ns.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ns),t.getHSL(Pc);const s=kd(ns.h,Pc.h,i),l=kd(ns.s,Pc.s,i),c=kd(ns.l,Pc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new ye;ye.NAMES=cx;class Lp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(t),this.density=i}clone(){return new Lp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _b extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ca,this.environmentIntensity=1,this.environmentRotation=new Ca,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ni=new lt,xa=new lt,Qd=new lt,Sa=new lt,Nr=new lt,Ur=new lt,Q_=new lt,Jd=new lt,$d=new lt,th=new lt,eh=new an,nh=new an,ih=new an;class yi{constructor(t=new lt,i=new lt,s=new lt){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ni.subVectors(t,i),l.cross(Ni);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ni.subVectors(l,i),xa.subVectors(s,i),Qd.subVectors(t,i);const d=Ni.dot(Ni),p=Ni.dot(xa),m=Ni.dot(Qd),h=xa.dot(xa),x=xa.dot(Qd),S=d*h-p*p;if(S===0)return c.set(0,0,0),null;const g=1/S,M=(h*m-p*x)*g,b=(d*x-p*m)*g;return c.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(t,i,s,l,c,d,p,m){return this.getBarycoord(t,i,s,l,Sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Sa.x),m.addScaledVector(d,Sa.y),m.addScaledVector(p,Sa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return eh.setScalar(0),nh.setScalar(0),ih.setScalar(0),eh.fromBufferAttribute(t,i),nh.fromBufferAttribute(t,s),ih.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(eh,c.x),d.addScaledVector(nh,c.y),d.addScaledVector(ih,c.z),d}static isFrontFacing(t,i,s,l){return Ni.subVectors(s,i),xa.subVectors(t,i),Ni.cross(xa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ni.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Ni.cross(xa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return yi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,p;Nr.subVectors(l,s),Ur.subVectors(c,s),Jd.subVectors(t,s);const m=Nr.dot(Jd),h=Ur.dot(Jd);if(m<=0&&h<=0)return i.copy(s);$d.subVectors(t,l);const x=Nr.dot($d),S=Ur.dot($d);if(x>=0&&S<=x)return i.copy(l);const g=m*S-x*h;if(g<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(s).addScaledVector(Nr,d);th.subVectors(t,c);const M=Nr.dot(th),b=Ur.dot(th);if(b>=0&&M<=b)return i.copy(c);const R=M*h-m*b;if(R<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(s).addScaledVector(Ur,p);const _=x*b-M*S;if(_<=0&&S-x>=0&&M-b>=0)return Q_.subVectors(c,l),p=(S-x)/(S-x+(M-b)),i.copy(l).addScaledVector(Q_,p);const v=1/(_+R+g);return d=R*v,p=g*v,i.copy(s).addScaledVector(Nr,d).addScaledVector(Ur,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class pl{constructor(t=new lt(1/0,1/0,1/0),i=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ui.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ui.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ui.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,Ui):Ui.fromBufferAttribute(c,d),Ui.applyMatrix4(t.matrixWorld),this.expandByPoint(Ui);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Fc.copy(s.boundingBox)),Fc.applyMatrix4(t.matrixWorld),this.union(Fc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ui),Ui.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qo),Ic.subVectors(this.max,Qo),Lr.subVectors(t.a,Qo),Or.subVectors(t.b,Qo),Pr.subVectors(t.c,Qo),is.subVectors(Or,Lr),as.subVectors(Pr,Or),Ns.subVectors(Lr,Pr);let i=[0,-is.z,is.y,0,-as.z,as.y,0,-Ns.z,Ns.y,is.z,0,-is.x,as.z,0,-as.x,Ns.z,0,-Ns.x,-is.y,is.x,0,-as.y,as.x,0,-Ns.y,Ns.x,0];return!ah(i,Lr,Or,Pr,Ic)||(i=[1,0,0,0,1,0,0,0,1],!ah(i,Lr,Or,Pr,Ic))?!1:(Bc.crossVectors(is,as),i=[Bc.x,Bc.y,Bc.z],ah(i,Lr,Or,Pr,Ic))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ui).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ui).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ya),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ya=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],Ui=new lt,Fc=new pl,Lr=new lt,Or=new lt,Pr=new lt,is=new lt,as=new lt,Ns=new lt,Qo=new lt,Ic=new lt,Bc=new lt,Us=new lt;function ah(r,t,i,s,l){for(let c=0,d=r.length-3;c<=d;c+=3){Us.fromArray(r,c);const p=l.x*Math.abs(Us.x)+l.y*Math.abs(Us.y)+l.z*Math.abs(Us.z),m=t.dot(Us),h=i.dot(Us),x=s.dot(Us);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>p)return!1}return!0}const mn=new lt,zc=new Ee;let vb=0;class Ln{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=hp,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)zc.fromBufferAttribute(this,i),zc.applyMatrix3(t),this.setXY(i,zc.x,zc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(t),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Wi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=je(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Wi(i,this.array)),i}setX(t,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Wi(i,this.array)),i}setY(t,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Wi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Wi(i,this.array)),i}setW(t,i){return this.normalized&&(i=je(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=je(i,this.array),s=je(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=je(i,this.array),s=je(s,this.array),l=je(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=je(i,this.array),s=je(s,this.array),l=je(l,this.array),c=je(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hp&&(t.usage=this.usage),t}}class ux extends Ln{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class fx extends Ln{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ui extends Ln{constructor(t,i,s){super(new Float32Array(t),i,s)}}const xb=new pl,Jo=new lt,sh=new lt;class ml{constructor(t=new lt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):xb.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jo.subVectors(t,this.center);const i=Jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Jo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jo.copy(t.center).add(sh)),this.expandByPoint(Jo.copy(t.center).sub(sh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Sb=0;const xi=new Ke,rh=new Cn,Fr=new lt,oi=new pl,$o=new pl,Mn=new lt;class Fn extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($M(t)?fx:ux)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new xe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,i,s){return xi.makeTranslation(t,i,s),this.applyMatrix4(xi),this}scale(t,i,s){return xi.makeScale(t,i,s),this.applyMatrix4(xi),this}lookAt(t){return rh.lookAt(t),rh.updateMatrix(),this.applyMatrix4(rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ui(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ml);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];$o.setFromBufferAttribute(p),this.morphTargetsRelative?(Mn.addVectors(oi.min,$o.min),oi.expandByPoint(Mn),Mn.addVectors(oi.max,$o.max),oi.expandByPoint(Mn)):(oi.expandByPoint($o.min),oi.expandByPoint($o.max))}oi.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)Mn.fromBufferAttribute(p,h),m&&(Fr.fromBufferAttribute(t,h),Mn.add(Fr)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let E=0;E<s.count;E++)p[E]=new lt,m[E]=new lt;const h=new lt,x=new lt,S=new lt,g=new Ee,M=new Ee,b=new Ee,R=new lt,_=new lt;function v(E,O,rt){h.fromBufferAttribute(s,E),x.fromBufferAttribute(s,O),S.fromBufferAttribute(s,rt),g.fromBufferAttribute(c,E),M.fromBufferAttribute(c,O),b.fromBufferAttribute(c,rt),x.sub(h),S.sub(h),M.sub(g),b.sub(g);const H=1/(M.x*b.y-b.x*M.y);isFinite(H)&&(R.copy(x).multiplyScalar(b.y).addScaledVector(S,-M.y).multiplyScalar(H),_.copy(S).multiplyScalar(M.x).addScaledVector(x,-b.x).multiplyScalar(H),p[E].add(R),p[O].add(R),p[rt].add(R),m[E].add(_),m[O].add(_),m[rt].add(_))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let E=0,O=A.length;E<O;++E){const rt=A[E],H=rt.start,q=rt.count;for(let Y=H,at=H+q;Y<at;Y+=3)v(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const D=new lt,N=new lt,G=new lt,B=new lt;function z(E){G.fromBufferAttribute(l,E),B.copy(G);const O=p[E];D.copy(O),D.sub(G.multiplyScalar(G.dot(O))).normalize(),N.crossVectors(B,O);const H=N.dot(m[E])<0?-1:1;d.setXYZW(E,D.x,D.y,D.z,H)}for(let E=0,O=A.length;E<O;++E){const rt=A[E],H=rt.start,q=rt.count;for(let Y=H,at=H+q;Y<at;Y+=3)z(t.getX(Y+0)),z(t.getX(Y+1)),z(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ln(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new lt,c=new lt,d=new lt,p=new lt,m=new lt,h=new lt,x=new lt,S=new lt;if(t)for(let g=0,M=t.count;g<M;g+=3){const b=t.getX(g+0),R=t.getX(g+1),_=t.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,_),x.subVectors(d,c),S.subVectors(l,c),x.cross(S),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,R),h.fromBufferAttribute(s,_),p.add(x),m.add(x),h.add(x),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(_,h.x,h.y,h.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),x.subVectors(d,c),S.subVectors(l,c),x.cross(S),s.setXYZ(g+0,x.x,x.y,x.z),s.setXYZ(g+1,x.x,x.y,x.z),s.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(p,m){const h=p.array,x=p.itemSize,S=p.normalized,g=new h.constructor(m.length*x);let M=0,b=0;for(let R=0,_=m.length;R<_;R++){p.isInterleavedBufferAttribute?M=m[R]*p.data.stride+p.offset:M=m[R]*x;for(let v=0;v<x;v++)g[b++]=h[M++]}return new Ln(g,x,S)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fn,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let x=0,S=h.length;x<S;x++){const g=h[x],M=t(g,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let S=0,g=h.length;S<g;S++){const M=h[S];x.push(M.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const c=t.morphAttributes;for(const h in c){const x=[],S=c[h];for(let g=0,M=S.length;g<M;g++)x.push(S[g].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,x=d.length;h<x;h++){const S=d[h];this.addGroup(S.start,S.count,S.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yb{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=hp,this.updateRanges=[],this.version=0,this.uuid=us()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=us()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=us()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vn=new lt;class _u{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix4(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyNormalMatrix(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.transformDirection(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Wi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=je(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=je(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Wi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Wi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Wi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Wi(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=je(i,this.array),s=je(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=je(i,this.array),s=je(s,this.array),l=je(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=je(i,this.array),s=je(s,this.array),l=je(l,this.array),c=je(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){mu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ln(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _u(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){mu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Mb=0;class ks extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=us(),this.name="",this.type="Material",this.blending=Wr,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eh,this.blendDst=Th,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){le(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(s.blending=this.blending),this.side!==fs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Eh&&(s.blendSrc=this.blendSrc),this.blendDst!==Th&&(s.blendDst=this.blendDst),this.blendEquation!==Bs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==B_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class dx extends ks{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ir;const tl=new lt,Br=new lt,zr=new lt,Hr=new Ee,el=new Ee,hx=new Ke,Hc=new lt,nl=new lt,Gc=new lt,J_=new Ee,oh=new Ee,$_=new Ee;class bb extends Cn{constructor(t=new dx){if(super(),this.isSprite=!0,this.type="Sprite",Ir===void 0){Ir=new Fn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new yb(i,5);Ir.setIndex([0,1,2,0,2,3]),Ir.setAttribute("position",new _u(s,3,0,!1)),Ir.setAttribute("uv",new _u(s,2,3,!1))}this.geometry=Ir,this.material=t,this.center=new Ee(.5,.5),this.count=1}raycast(t,i){t.camera===null&&Ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Br.setFromMatrixScale(this.matrixWorld),hx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),zr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Br.multiplyScalar(-zr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const d=this.center;Vc(Hc.set(-.5,-.5,0),zr,d,Br,l,c),Vc(nl.set(.5,-.5,0),zr,d,Br,l,c),Vc(Gc.set(.5,.5,0),zr,d,Br,l,c),J_.set(0,0),oh.set(1,0),$_.set(1,1);let p=t.ray.intersectTriangle(Hc,nl,Gc,!1,tl);if(p===null&&(Vc(nl.set(-.5,.5,0),zr,d,Br,l,c),oh.set(0,1),p=t.ray.intersectTriangle(Hc,Gc,nl,!1,tl),p===null))return;const m=t.ray.origin.distanceTo(tl);m<t.near||m>t.far||i.push({distance:m,point:tl.clone(),uv:yi.getInterpolation(tl,Hc,nl,Gc,J_,oh,$_,new Ee),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Vc(r,t,i,s,l,c){Hr.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(el.x=c*Hr.x-l*Hr.y,el.y=l*Hr.x+c*Hr.y):el.copy(Hr),r.copy(t),r.x+=el.x,r.y+=el.y,r.applyMatrix4(hx)}const Ma=new lt,lh=new lt,kc=new lt,ss=new lt,ch=new lt,Xc=new lt,uh=new lt;class Op{constructor(t=new lt,i=new lt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ma.copy(this.origin).addScaledVector(this.direction,i),Ma.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){lh.copy(t).add(i).multiplyScalar(.5),kc.copy(i).sub(t).normalize(),ss.copy(this.origin).sub(lh);const c=t.distanceTo(i)*.5,d=-this.direction.dot(kc),p=ss.dot(this.direction),m=-ss.dot(kc),h=ss.lengthSq(),x=Math.abs(1-d*d);let S,g,M,b;if(x>0)if(S=d*m-p,g=d*p-m,b=c*x,S>=0)if(g>=-b)if(g<=b){const R=1/x;S*=R,g*=R,M=S*(S+d*g+2*p)+g*(d*S+g+2*m)+h}else g=c,S=Math.max(0,-(d*g+p)),M=-S*S+g*(g+2*m)+h;else g=-c,S=Math.max(0,-(d*g+p)),M=-S*S+g*(g+2*m)+h;else g<=-b?(S=Math.max(0,-(-d*c+p)),g=S>0?-c:Math.min(Math.max(-c,-m),c),M=-S*S+g*(g+2*m)+h):g<=b?(S=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+h):(S=Math.max(0,-(d*c+p)),g=S>0?c:Math.min(Math.max(-c,-m),c),M=-S*S+g*(g+2*m)+h);else g=d>0?-c:c,S=Math.max(0,-(d*g+p)),M=-S*S+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(lh).addScaledVector(kc,g),M}intersectSphere(t,i){Ma.subVectors(t.center,this.origin);const s=Ma.dot(this.direction),l=Ma.dot(Ma)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,p,m;const h=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,g=this.origin;return h>=0?(s=(t.min.x-g.x)*h,l=(t.max.x-g.x)*h):(s=(t.max.x-g.x)*h,l=(t.min.x-g.x)*h),x>=0?(c=(t.min.y-g.y)*x,d=(t.max.y-g.y)*x):(c=(t.max.y-g.y)*x,d=(t.min.y-g.y)*x),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),S>=0?(p=(t.min.z-g.z)*S,m=(t.max.z-g.z)*S):(p=(t.max.z-g.z)*S,m=(t.min.z-g.z)*S),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ma)!==null}intersectTriangle(t,i,s,l,c){ch.subVectors(i,t),Xc.subVectors(s,t),uh.crossVectors(ch,Xc);let d=this.direction.dot(uh),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ss.subVectors(this.origin,t);const m=p*this.direction.dot(Xc.crossVectors(ss,Xc));if(m<0)return null;const h=p*this.direction.dot(ch.cross(ss));if(h<0||m+h>d)return null;const x=-p*ss.dot(uh);return x<0?null:this.at(x/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pp extends ks{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ca,this.combine=Wv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const tv=new Ke,Ls=new Op,Wc=new ml,ev=new lt,jc=new lt,qc=new lt,Yc=new lt,fh=new lt,Zc=new lt,nv=new lt,Kc=new lt;class Qi extends Cn{constructor(t=new Fn,i=new Pp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Zc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const x=p[m],S=c[m];x!==0&&(fh.fromBufferAttribute(S,t),d?Zc.addScaledVector(fh,x):Zc.addScaledVector(fh.sub(i),x))}i.add(Zc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Wc.copy(s.boundingSphere),Wc.applyMatrix4(c),Ls.copy(t.ray).recast(t.near),!(Wc.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Wc,ev)===null||Ls.origin.distanceToSquared(ev)>(t.far-t.near)**2))&&(tv.copy(c).invert(),Ls.copy(t.ray).applyMatrix4(tv),!(s.boundingBox!==null&&Ls.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ls)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,S=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(d))for(let b=0,R=g.length;b<R;b++){const _=g[b],v=d[_.materialIndex],A=Math.max(_.start,M.start),D=Math.min(p.count,Math.min(_.start+_.count,M.start+M.count));for(let N=A,G=D;N<G;N+=3){const B=p.getX(N),z=p.getX(N+1),E=p.getX(N+2);l=Qc(this,v,t,s,h,x,S,B,z,E),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=_.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(p.count,M.start+M.count);for(let _=b,v=R;_<v;_+=3){const A=p.getX(_),D=p.getX(_+1),N=p.getX(_+2);l=Qc(this,d,t,s,h,x,S,A,D,N),l&&(l.faceIndex=Math.floor(_/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,R=g.length;b<R;b++){const _=g[b],v=d[_.materialIndex],A=Math.max(_.start,M.start),D=Math.min(m.count,Math.min(_.start+_.count,M.start+M.count));for(let N=A,G=D;N<G;N+=3){const B=N,z=N+1,E=N+2;l=Qc(this,v,t,s,h,x,S,B,z,E),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=_.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let _=b,v=R;_<v;_+=3){const A=_,D=_+1,N=_+2;l=Qc(this,d,t,s,h,x,S,A,D,N),l&&(l.faceIndex=Math.floor(_/3),i.push(l))}}}}function Eb(r,t,i,s,l,c,d,p){let m;if(t.side===Kn?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,t.side===fs,p),m===null)return null;Kc.copy(p),Kc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Kc);return h<i.near||h>i.far?null:{distance:h,point:Kc.clone(),object:r}}function Qc(r,t,i,s,l,c,d,p,m,h){r.getVertexPosition(p,jc),r.getVertexPosition(m,qc),r.getVertexPosition(h,Yc);const x=Eb(r,t,i,s,jc,qc,Yc,nv);if(x){const S=new lt;yi.getBarycoord(nv,jc,qc,Yc,S),l&&(x.uv=yi.getInterpolatedAttribute(l,p,m,h,S,new Ee)),c&&(x.uv1=yi.getInterpolatedAttribute(c,p,m,h,S,new Ee)),d&&(x.normal=yi.getInterpolatedAttribute(d,p,m,h,S,new lt),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new lt,materialIndex:0};yi.getNormal(jc,qc,Yc,g.normal),x.face=g,x.barycoord=S}return x}class Tb extends Pn{constructor(t=null,i=1,s=1,l,c,d,p,m,h=Rn,x=Rn,S,g){super(null,d,p,m,h,x,l,c,S,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const dh=new lt,Ab=new lt,Rb=new xe;class Is{constructor(t=new lt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=dh.subVectors(s,i).cross(Ab.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(dh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Rb.getNormalMatrix(t),l=this.coplanarPoint(dh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Os=new ml,Cb=new Ee(.5,.5),Jc=new lt;class Fp{constructor(t=new Is,i=new Is,s=new Is,l=new Is,c=new Is,d=new Is){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=qi,s=!1){const l=this.planes,c=t.elements,d=c[0],p=c[1],m=c[2],h=c[3],x=c[4],S=c[5],g=c[6],M=c[7],b=c[8],R=c[9],_=c[10],v=c[11],A=c[12],D=c[13],N=c[14],G=c[15];if(l[0].setComponents(h-d,M-x,v-b,G-A).normalize(),l[1].setComponents(h+d,M+x,v+b,G+A).normalize(),l[2].setComponents(h+p,M+S,v+R,G+D).normalize(),l[3].setComponents(h-p,M-S,v-R,G-D).normalize(),s)l[4].setComponents(m,g,_,N).normalize(),l[5].setComponents(h-m,M-g,v-_,G-N).normalize();else if(l[4].setComponents(h-m,M-g,v-_,G-N).normalize(),i===qi)l[5].setComponents(h+m,M+g,v+_,G+N).normalize();else if(i===dl)l[5].setComponents(m,g,_,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){Os.center.set(0,0,0);const i=Cb.distanceTo(t.center);return Os.radius=.7071067811865476+i,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Jc.x=l.normal.x>0?t.max.x:t.min.x,Jc.y=l.normal.y>0?t.max.y:t.min.y,Jc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Jc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ip extends ks{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vu=new lt,xu=new lt,iv=new Ke,il=new Op,$c=new ml,hh=new lt,av=new lt;class px extends Cn{constructor(t=new Fn,i=new Ip){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)vu.fromBufferAttribute(i,l-1),xu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=vu.distanceTo(xu);t.setAttribute("lineDistance",new ui(s,1))}else le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),$c.copy(s.boundingSphere),$c.applyMatrix4(l),$c.radius+=c,t.ray.intersectsSphere($c)===!1)return;iv.copy(l).invert(),il.copy(t.ray).applyMatrix4(iv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,x=s.index,g=s.attributes.position;if(x!==null){const M=Math.max(0,d.start),b=Math.min(x.count,d.start+d.count);for(let R=M,_=b-1;R<_;R+=h){const v=x.getX(R),A=x.getX(R+1),D=tu(this,t,il,m,v,A,R);D&&i.push(D)}if(this.isLineLoop){const R=x.getX(b-1),_=x.getX(M),v=tu(this,t,il,m,R,_,b-1);v&&i.push(v)}}else{const M=Math.max(0,d.start),b=Math.min(g.count,d.start+d.count);for(let R=M,_=b-1;R<_;R+=h){const v=tu(this,t,il,m,R,R+1,R);v&&i.push(v)}if(this.isLineLoop){const R=tu(this,t,il,m,b-1,M,b-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function tu(r,t,i,s,l,c,d){const p=r.geometry.attributes.position;if(vu.fromBufferAttribute(p,l),xu.fromBufferAttribute(p,c),i.distanceSqToSegment(vu,xu,hh,av)>s)return;hh.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(hh);if(!(h<t.near||h>t.far))return{distance:h,point:av.clone().applyMatrix4(r.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:r}}const sv=new lt,rv=new lt;class wb extends px{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)sv.fromBufferAttribute(i,l),rv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+sv.distanceTo(rv);t.setAttribute("lineDistance",new ui(s,1))}else le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mp extends ks{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ov=new Ke,gp=new Op,eu=new ml,nu=new lt;class lv extends Cn{constructor(t=new Fn,i=new mp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),eu.copy(s.boundingSphere),eu.applyMatrix4(l),eu.radius+=c,t.ray.intersectsSphere(eu)===!1)return;ov.copy(l).invert(),gp.copy(t.ray).applyMatrix4(ov);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=s.index,S=s.attributes.position;if(h!==null){const g=Math.max(0,d.start),M=Math.min(h.count,d.start+d.count);for(let b=g,R=M;b<R;b++){const _=h.getX(b);nu.fromBufferAttribute(S,_),cv(nu,_,m,l,t,i,this)}}else{const g=Math.max(0,d.start),M=Math.min(S.count,d.start+d.count);for(let b=g,R=M;b<R;b++)nu.fromBufferAttribute(S,b),cv(nu,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function cv(r,t,i,s,l,c,d){const p=gp.distanceSqToPoint(r);if(p<i){const m=new lt;gp.closestPointToPoint(r,m),m.applyMatrix4(s);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:d})}}class mx extends Pn{constructor(t=[],i=Vs,s,l,c,d,p,m,h,x){super(t,i,s,l,c,d,p,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Db extends Pn{constructor(t,i,s,l,c,d,p,m,h){super(t,i,s,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hl extends Pn{constructor(t,i,s=Ki,l,c,d,p=Rn,m=Rn,h,x=Ra,S=1){if(x!==Ra&&x!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:S};super(g,l,c,d,p,m,x,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Up(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Nb extends hl{constructor(t,i=Ki,s=Vs,l,c,d=Rn,p=Rn,m,h=Ra){const x={width:t,height:t,depth:1},S=[x,x,x,x,x,x];super(t,t,i,s,l,c,d,p,m,h),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class gx extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class gl extends Fn{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],x=[],S=[];let g=0,M=0;b("z","y","x",-1,-1,s,i,t,d,c,0),b("z","y","x",1,-1,s,i,-t,d,c,1),b("x","z","y",1,1,t,s,i,l,d,2),b("x","z","y",1,-1,t,s,-i,l,d,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ui(h,3)),this.setAttribute("normal",new ui(x,3)),this.setAttribute("uv",new ui(S,2));function b(R,_,v,A,D,N,G,B,z,E,O){const rt=N/z,H=G/E,q=N/2,Y=G/2,at=B/2,tt=z+1,U=E+1;let I=0,X=0;const nt=new lt;for(let gt=0;gt<U;gt++){const F=gt*H-Y;for(let k=0;k<tt;k++){const et=k*rt-q;nt[R]=et*A,nt[_]=F*D,nt[v]=at,h.push(nt.x,nt.y,nt.z),nt[R]=0,nt[_]=0,nt[v]=B>0?1:-1,x.push(nt.x,nt.y,nt.z),S.push(k/z),S.push(1-gt/E),I+=1}}for(let gt=0;gt<E;gt++)for(let F=0;F<z;F++){const k=g+F+tt*gt,et=g+F+tt*(gt+1),pt=g+(F+1)+tt*(gt+1),Mt=g+(F+1)+tt*gt;m.push(k,et,Mt),m.push(et,pt,Mt),X+=6}p.addGroup(M,X,O),M+=X,g+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class _l extends Fn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,x=m+1,S=t/p,g=i/m,M=[],b=[],R=[],_=[];for(let v=0;v<x;v++){const A=v*g-d;for(let D=0;D<h;D++){const N=D*S-c;b.push(N,-A,0),R.push(0,0,1),_.push(D/p),_.push(1-v/m)}}for(let v=0;v<m;v++)for(let A=0;A<p;A++){const D=A+h*v,N=A+h*(v+1),G=A+1+h*(v+1),B=A+1+h*v;M.push(D,N,B),M.push(N,G,B)}this.setIndex(M),this.setAttribute("position",new ui(b,3)),this.setAttribute("normal",new ui(R,3)),this.setAttribute("uv",new ui(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _l(t.width,t.height,t.widthSegments,t.heightSegments)}}function Jr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function kn(r){const t={};for(let i=0;i<r.length;i++){const s=Jr(r[i]);for(const l in s)t[l]=s[l]}return t}function Ub(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function _x(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const Lb={clone:Jr,merge:kn};var Ob=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends ks{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ob,this.fragmentShader=Pb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Jr(t.uniforms),this.uniformsGroups=Ub(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Fb extends Ji{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ib extends ks{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bb extends ks{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class vx extends Cn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const ph=new Ke,uv=new lt,fv=new lt;class zb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fp,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;uv.setFromMatrixPosition(t.matrixWorld),i.position.copy(uv),fv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(fv),i.updateMatrixWorld(),ph.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ph,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===dl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ph)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const iu=new lt,au=new to,Gi=new lt;class xx extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(iu,au,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(iu,au,Gi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(iu,au,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(iu,au,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rs=new lt,dv=new Ee,hv=new Ee;class li extends xx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=pp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return pp*2*Math.atan(Math.tan(Vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,i){return this.getViewBounds(t,dv,hv),i.subVectors(hv,dv)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Vd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Hb extends zb{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0}}class Gb extends vx{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Hb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Sx extends xx{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Vb extends vx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Gr=-90,Vr=1;class kb extends Cn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(Gr,Vr,t,i);l.layers=this.layers,this.add(l);const c=new li(Gr,Vr,t,i);c.layers=this.layers,this.add(c);const d=new li(Gr,Vr,t,i);d.layers=this.layers,this.add(d);const p=new li(Gr,Vr,t,i);p.layers=this.layers,this.add(p);const m=new li(Gr,Vr,t,i);m.layers=this.layers,this.add(m);const h=new li(Gr,Vr,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(t===qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===dl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,x]=this.children,S=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(S,g,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class Xb extends li{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Wb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,le("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class jb extends wb{constructor(t=10,i=10,s=4473924,l=8947848){s=new ye(s),l=new ye(l);const c=i/2,d=t/i,p=t/2,m=[],h=[];for(let g=0,M=0,b=-p;g<=i;g++,b+=d){m.push(-p,0,b,p,0,b),m.push(b,0,-p,b,0,p);const R=g===c?s:l;R.toArray(h,M),M+=3,R.toArray(h,M),M+=3,R.toArray(h,M),M+=3,R.toArray(h,M),M+=3}const x=new Fn;x.setAttribute("position",new ui(m,3)),x.setAttribute("color",new ui(h,3));const S=new Ip({vertexColors:!0,toneMapped:!1});super(x,S),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function pv(r,t,i,s){const l=qb(s);switch(i){case ix:return r*t;case sx:return r*t/l.components*l.byteLength;case Rp:return r*t/l.components*l.byteLength;case Kr:return r*t*2/l.components*l.byteLength;case Cp:return r*t*2/l.components*l.byteLength;case ax:return r*t*3/l.components*l.byteLength;case Li:return r*t*4/l.components*l.byteLength;case wp:return r*t*4/l.components*l.byteLength;case lu:case cu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case uu:case fu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Fh:case Bh:return Math.max(r,16)*Math.max(t,8)/4;case Ph:case Ih:return Math.max(r,8)*Math.max(t,8)/2;case zh:case Hh:case Vh:case kh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Gh:case Xh:case Wh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case jh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case qh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Zh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Jh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case $h:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case tp:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ep:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case np:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ip:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case ap:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case sp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case rp:case op:case lp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case cp:case up:return Math.ceil(r/4)*Math.ceil(t/4)*8;case fp:case dp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function qb(r){switch(r){case ci:case $v:return{byteLength:1,components:1};case ul:case tx:case Aa:return{byteLength:2,components:1};case Tp:case Ap:return{byteLength:2,components:4};case Ki:case Ep:case ji:return{byteLength:4,components:1};case ex:case nx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mp}}));typeof window<"u"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yx(){let r=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function Yb(r){const t=new WeakMap;function i(p,m){const h=p.array,x=p.usage,S=h.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,h,x),p.onUploadCallback();let M;if(h instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=r.SHORT;else if(h instanceof Uint32Array)M=r.UNSIGNED_INT;else if(h instanceof Int32Array)M=r.INT;else if(h instanceof Int8Array)M=r.BYTE;else if(h instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:S}}function s(p,m,h){const x=m.array,S=m.updateRanges;if(r.bindBuffer(h,p),S.length===0)r.bufferSubData(h,0,x);else{S.sort((M,b)=>M.start-b.start);let g=0;for(let M=1;M<S.length;M++){const b=S[g],R=S[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++g,S[g]=R)}S.length=g+1;for(let M=0,b=S.length;M<b;M++){const R=S[M];r.bufferSubData(h,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=t.get(p);(!x||x.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var Zb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kb=`#ifdef USE_ALPHAHASH
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
#endif`,Qb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$b=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eE=`#ifdef USE_AOMAP
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
#endif`,nE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iE=`#ifdef USE_BATCHING
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
#endif`,aE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lE=`#ifdef USE_IRIDESCENCE
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
#endif`,cE=`#ifdef USE_BUMPMAP
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
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_E=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vE=`#define PI 3.141592653589793
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
} // validated`,xE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,SE=`vec3 transformedNormal = objectNormal;
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
#endif`,yE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ME=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TE="gl_FragColor = linearToOutputTexel( gl_FragColor );",AE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RE=`#ifdef USE_ENVMAP
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
#endif`,CE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
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
#endif`,DE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,NE=`#ifdef USE_ENVMAP
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
#endif`,UE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FE=`#ifdef USE_GRADIENTMAP
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
}`,IE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HE=`uniform bool receiveShadow;
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
#endif`,GE=`#ifdef USE_ENVMAP
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
#endif`,VE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jE=`PhysicalMaterial material;
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
#endif`,qE=`uniform sampler2D dfgLUT;
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
}`,YE=`
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
#endif`,ZE=`#if defined( RE_IndirectDiffuse )
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
#endif`,KE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$E=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,a1=`#if defined( USE_POINTS_UV )
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
#endif`,s1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u1=`#ifdef USE_MORPHTARGETS
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
#endif`,f1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_1=`#ifdef USE_NORMALMAP
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
#endif`,v1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,M1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L1=`float getShadowMask() {
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
}`,O1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,P1=`#ifdef USE_SKINNING
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
#endif`,F1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I1=`#ifdef USE_SKINNING
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
#endif`,B1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V1=`#ifdef USE_TRANSMISSION
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
#endif`,k1=`#ifdef USE_TRANSMISSION
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
#endif`,X1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Z1=`uniform sampler2D t2D;
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
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,J1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`#include <common>
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
}`,eT=`#if DEPTH_PACKING == 3200
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
}`,nT=`#define DISTANCE
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
}`,iT=`#define DISTANCE
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`uniform float scale;
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
}`,oT=`uniform vec3 diffuse;
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
}`,lT=`#include <common>
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
}`,cT=`uniform vec3 diffuse;
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
}`,uT=`#define LAMBERT
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
}`,fT=`#define LAMBERT
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
}`,dT=`#define MATCAP
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
}`,hT=`#define MATCAP
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
}`,pT=`#define NORMAL
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
}`,mT=`#define NORMAL
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
}`,gT=`#define PHONG
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
}`,_T=`#define PHONG
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
}`,vT=`#define STANDARD
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
}`,xT=`#define STANDARD
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
}`,ST=`#define TOON
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
}`,yT=`#define TOON
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
}`,MT=`uniform float size;
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
}`,bT=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,TT=`uniform vec3 color;
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
}`,AT=`uniform float rotation;
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
}`,RT=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:Zb,alphahash_pars_fragment:Kb,alphamap_fragment:Qb,alphamap_pars_fragment:Jb,alphatest_fragment:$b,alphatest_pars_fragment:tE,aomap_fragment:eE,aomap_pars_fragment:nE,batching_pars_vertex:iE,batching_vertex:aE,begin_vertex:sE,beginnormal_vertex:rE,bsdfs:oE,iridescence_fragment:lE,bumpmap_pars_fragment:cE,clipping_planes_fragment:uE,clipping_planes_pars_fragment:fE,clipping_planes_pars_vertex:dE,clipping_planes_vertex:hE,color_fragment:pE,color_pars_fragment:mE,color_pars_vertex:gE,color_vertex:_E,common:vE,cube_uv_reflection_fragment:xE,defaultnormal_vertex:SE,displacementmap_pars_vertex:yE,displacementmap_vertex:ME,emissivemap_fragment:bE,emissivemap_pars_fragment:EE,colorspace_fragment:TE,colorspace_pars_fragment:AE,envmap_fragment:RE,envmap_common_pars_fragment:CE,envmap_pars_fragment:wE,envmap_pars_vertex:DE,envmap_physical_pars_fragment:GE,envmap_vertex:NE,fog_vertex:UE,fog_pars_vertex:LE,fog_fragment:OE,fog_pars_fragment:PE,gradientmap_pars_fragment:FE,lightmap_pars_fragment:IE,lights_lambert_fragment:BE,lights_lambert_pars_fragment:zE,lights_pars_begin:HE,lights_toon_fragment:VE,lights_toon_pars_fragment:kE,lights_phong_fragment:XE,lights_phong_pars_fragment:WE,lights_physical_fragment:jE,lights_physical_pars_fragment:qE,lights_fragment_begin:YE,lights_fragment_maps:ZE,lights_fragment_end:KE,logdepthbuf_fragment:QE,logdepthbuf_pars_fragment:JE,logdepthbuf_pars_vertex:$E,logdepthbuf_vertex:t1,map_fragment:e1,map_pars_fragment:n1,map_particle_fragment:i1,map_particle_pars_fragment:a1,metalnessmap_fragment:s1,metalnessmap_pars_fragment:r1,morphinstance_vertex:o1,morphcolor_vertex:l1,morphnormal_vertex:c1,morphtarget_pars_vertex:u1,morphtarget_vertex:f1,normal_fragment_begin:d1,normal_fragment_maps:h1,normal_pars_fragment:p1,normal_pars_vertex:m1,normal_vertex:g1,normalmap_pars_fragment:_1,clearcoat_normal_fragment_begin:v1,clearcoat_normal_fragment_maps:x1,clearcoat_pars_fragment:S1,iridescence_pars_fragment:y1,opaque_fragment:M1,packing:b1,premultiplied_alpha_fragment:E1,project_vertex:T1,dithering_fragment:A1,dithering_pars_fragment:R1,roughnessmap_fragment:C1,roughnessmap_pars_fragment:w1,shadowmap_pars_fragment:D1,shadowmap_pars_vertex:N1,shadowmap_vertex:U1,shadowmask_pars_fragment:L1,skinbase_vertex:O1,skinning_pars_vertex:P1,skinning_vertex:F1,skinnormal_vertex:I1,specularmap_fragment:B1,specularmap_pars_fragment:z1,tonemapping_fragment:H1,tonemapping_pars_fragment:G1,transmission_fragment:V1,transmission_pars_fragment:k1,uv_pars_fragment:X1,uv_pars_vertex:W1,uv_vertex:j1,worldpos_vertex:q1,background_vert:Y1,background_frag:Z1,backgroundCube_vert:K1,backgroundCube_frag:Q1,cube_vert:J1,cube_frag:$1,depth_vert:tT,depth_frag:eT,distance_vert:nT,distance_frag:iT,equirect_vert:aT,equirect_frag:sT,linedashed_vert:rT,linedashed_frag:oT,meshbasic_vert:lT,meshbasic_frag:cT,meshlambert_vert:uT,meshlambert_frag:fT,meshmatcap_vert:dT,meshmatcap_frag:hT,meshnormal_vert:pT,meshnormal_frag:mT,meshphong_vert:gT,meshphong_frag:_T,meshphysical_vert:vT,meshphysical_frag:xT,meshtoon_vert:ST,meshtoon_frag:yT,points_vert:MT,points_frag:bT,shadow_vert:ET,shadow_frag:TT,sprite_vert:AT,sprite_frag:RT},Bt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},ki={basic:{uniforms:kn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:kn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:kn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:kn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:kn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new ye(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:kn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:kn([Bt.points,Bt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:kn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:kn([Bt.common,Bt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:kn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:kn([Bt.sprite,Bt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:kn([Bt.common,Bt.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:kn([Bt.lights,Bt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};ki.physical={uniforms:kn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const su={r:0,b:0,g:0},Ps=new Ca,CT=new Ke;function wT(r,t,i,s,l,c){const d=new ye(0);let p=l===!0?0:1,m,h,x=null,S=0,g=null;function M(A){let D=A.isScene===!0?A.background:null;if(D&&D.isTexture){const N=A.backgroundBlurriness>0;D=t.get(D,N)}return D}function b(A){let D=!1;const N=M(A);N===null?_(d,p):N&&N.isColor&&(_(N,1),D=!0);const G=r.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,c):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function R(A,D){const N=M(D);N&&(N.isCubeTexture||N.mapping===bu)?(h===void 0&&(h=new Qi(new gl(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Jr(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(G,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ps.copy(D.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),h.material.uniforms.envMap.value=N,h.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(CT.makeRotationFromEuler(Ps)),h.material.toneMapped=Le.getTransfer(N.colorSpace)!==Ve,(x!==N||S!==N.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,x=N,S=N.version,g=r.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Qi(new _l(2,2),new Ji({name:"BackgroundMaterial",uniforms:Jr(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Le.getTransfer(N.colorSpace)!==Ve,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(x!==N||S!==N.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,x=N,S=N.version,g=r.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null))}function _(A,D){A.getRGB(su,_x(r)),i.buffers.color.setClear(su.r,su.g,su.b,D,c)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(A,D=1){d.set(A),p=D,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(A){p=A,_(d,p)},render:b,addToRenderList:R,dispose:v}}function DT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(H,q,Y,at,tt){let U=!1;const I=S(H,at,Y,q);c!==I&&(c=I,h(c.object)),U=M(H,at,Y,tt),U&&b(H,at,Y,tt),tt!==null&&t.update(tt,r.ELEMENT_ARRAY_BUFFER),(U||d)&&(d=!1,N(H,q,Y,at),tt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function m(){return r.createVertexArray()}function h(H){return r.bindVertexArray(H)}function x(H){return r.deleteVertexArray(H)}function S(H,q,Y,at){const tt=at.wireframe===!0;let U=s[q.id];U===void 0&&(U={},s[q.id]=U);const I=H.isInstancedMesh===!0?H.id:0;let X=U[I];X===void 0&&(X={},U[I]=X);let nt=X[Y.id];nt===void 0&&(nt={},X[Y.id]=nt);let gt=nt[tt];return gt===void 0&&(gt=g(m()),nt[tt]=gt),gt}function g(H){const q=[],Y=[],at=[];for(let tt=0;tt<i;tt++)q[tt]=0,Y[tt]=0,at[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Y,attributeDivisors:at,object:H,attributes:{},index:null}}function M(H,q,Y,at){const tt=c.attributes,U=q.attributes;let I=0;const X=Y.getAttributes();for(const nt in X)if(X[nt].location>=0){const F=tt[nt];let k=U[nt];if(k===void 0&&(nt==="instanceMatrix"&&H.instanceMatrix&&(k=H.instanceMatrix),nt==="instanceColor"&&H.instanceColor&&(k=H.instanceColor)),F===void 0||F.attribute!==k||k&&F.data!==k.data)return!0;I++}return c.attributesNum!==I||c.index!==at}function b(H,q,Y,at){const tt={},U=q.attributes;let I=0;const X=Y.getAttributes();for(const nt in X)if(X[nt].location>=0){let F=U[nt];F===void 0&&(nt==="instanceMatrix"&&H.instanceMatrix&&(F=H.instanceMatrix),nt==="instanceColor"&&H.instanceColor&&(F=H.instanceColor));const k={};k.attribute=F,F&&F.data&&(k.data=F.data),tt[nt]=k,I++}c.attributes=tt,c.attributesNum=I,c.index=at}function R(){const H=c.newAttributes;for(let q=0,Y=H.length;q<Y;q++)H[q]=0}function _(H){v(H,0)}function v(H,q){const Y=c.newAttributes,at=c.enabledAttributes,tt=c.attributeDivisors;Y[H]=1,at[H]===0&&(r.enableVertexAttribArray(H),at[H]=1),tt[H]!==q&&(r.vertexAttribDivisor(H,q),tt[H]=q)}function A(){const H=c.newAttributes,q=c.enabledAttributes;for(let Y=0,at=q.length;Y<at;Y++)q[Y]!==H[Y]&&(r.disableVertexAttribArray(Y),q[Y]=0)}function D(H,q,Y,at,tt,U,I){I===!0?r.vertexAttribIPointer(H,q,Y,tt,U):r.vertexAttribPointer(H,q,Y,at,tt,U)}function N(H,q,Y,at){R();const tt=at.attributes,U=Y.getAttributes(),I=q.defaultAttributeValues;for(const X in U){const nt=U[X];if(nt.location>=0){let gt=tt[X];if(gt===void 0&&(X==="instanceMatrix"&&H.instanceMatrix&&(gt=H.instanceMatrix),X==="instanceColor"&&H.instanceColor&&(gt=H.instanceColor)),gt!==void 0){const F=gt.normalized,k=gt.itemSize,et=t.get(gt);if(et===void 0)continue;const pt=et.buffer,Mt=et.type,Z=et.bytesPerElement,V=Mt===r.INT||Mt===r.UNSIGNED_INT||gt.gpuType===Ep;if(gt.isInterleavedBufferAttribute){const ft=gt.data,St=ft.stride,Nt=gt.offset;if(ft.isInstancedInterleavedBuffer){for(let wt=0;wt<nt.locationSize;wt++)v(nt.location+wt,ft.meshPerAttribute);H.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let wt=0;wt<nt.locationSize;wt++)_(nt.location+wt);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let wt=0;wt<nt.locationSize;wt++)D(nt.location+wt,k/nt.locationSize,Mt,F,St*Z,(Nt+k/nt.locationSize*wt)*Z,V)}else{if(gt.isInstancedBufferAttribute){for(let ft=0;ft<nt.locationSize;ft++)v(nt.location+ft,gt.meshPerAttribute);H.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let ft=0;ft<nt.locationSize;ft++)_(nt.location+ft);r.bindBuffer(r.ARRAY_BUFFER,pt);for(let ft=0;ft<nt.locationSize;ft++)D(nt.location+ft,k/nt.locationSize,Mt,F,k*Z,k/nt.locationSize*ft*Z,V)}}else if(I!==void 0){const F=I[X];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(nt.location,F);break;case 3:r.vertexAttrib3fv(nt.location,F);break;case 4:r.vertexAttrib4fv(nt.location,F);break;default:r.vertexAttrib1fv(nt.location,F)}}}}A()}function G(){O();for(const H in s){const q=s[H];for(const Y in q){const at=q[Y];for(const tt in at){const U=at[tt];for(const I in U)x(U[I].object),delete U[I];delete at[tt]}}delete s[H]}}function B(H){if(s[H.id]===void 0)return;const q=s[H.id];for(const Y in q){const at=q[Y];for(const tt in at){const U=at[tt];for(const I in U)x(U[I].object),delete U[I];delete at[tt]}}delete s[H.id]}function z(H){for(const q in s){const Y=s[q];for(const at in Y){const tt=Y[at];if(tt[H.id]===void 0)continue;const U=tt[H.id];for(const I in U)x(U[I].object),delete U[I];delete tt[H.id]}}}function E(H){for(const q in s){const Y=s[q],at=H.isInstancedMesh===!0?H.id:0,tt=Y[at];if(tt!==void 0){for(const U in tt){const I=tt[U];for(const X in I)x(I[X].object),delete I[X];delete tt[U]}delete Y[at],Object.keys(Y).length===0&&delete s[q]}}}function O(){rt(),d=!0,c!==l&&(c=l,h(c.object))}function rt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:rt,dispose:G,releaseStatesOfGeometry:B,releaseStatesOfObject:E,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:_,disableUnusedAttributes:A}}function NT(r,t,i){let s;function l(h){s=h}function c(h,x){r.drawArrays(s,h,x),i.update(x,s,1)}function d(h,x,S){S!==0&&(r.drawArraysInstanced(s,h,x,S),i.update(x,s,S))}function p(h,x,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,x,0,S);let M=0;for(let b=0;b<S;b++)M+=x[b];i.update(M,s,1)}function m(h,x,S,g){if(S===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<h.length;b++)d(h[b],x[b],g[b]);else{M.multiDrawArraysInstancedWEBGL(s,h,0,x,0,g,0,S);let b=0;for(let R=0;R<S;R++)b+=x[R]*g[R];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function UT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==Li&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const E=z===Aa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ci&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ji&&!E)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=m(h);x!==h&&(le("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const S=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),A=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),G=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:A,maxVaryings:D,maxFragmentUniforms:N,maxSamples:G,samples:B}}function LT(r){const t=this;let i=null,s=0,l=!1,c=!1;const d=new Is,p=new xe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const M=S.length!==0||g||s!==0||l;return l=g,s=S.length,M},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,g){i=x(S,g,0)},this.setState=function(S,g,M){const b=S.clippingPlanes,R=S.clipIntersection,_=S.clipShadows,v=r.get(S);if(!l||b===null||b.length===0||c&&!_)c?x(null):h();else{const A=c?0:s,D=A*4;let N=v.clippingState||null;m.value=N,N=x(b,g,D,M);for(let G=0;G!==D;++G)N[G]=i[G];v.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=A}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(S,g,M,b){const R=S!==null?S.length:0;let _=null;if(R!==0){if(_=m.value,b!==!0||_===null){const v=M+R*4,A=g.matrixWorldInverse;p.getNormalMatrix(A),(_===null||_.length<v)&&(_=new Float32Array(v));for(let D=0,N=M;D!==R;++D,N+=4)d.copy(S[D]).applyMatrix4(A,p),d.normal.toArray(_,N),_[N+3]=d.constant}m.value=_,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,_}}const cs=4,mv=[.125,.215,.35,.446,.526,.582],zs=20,OT=256,al=new Sx,gv=new ye;let mh=null,gh=0,_h=0,vh=!1;const PT=new lt;class _v{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=PT}=c;mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mh,gh,_h),this._renderer.xr.enabled=vh,t.scissorTest=!1,kr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Vs||t.mapping===Zr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:Aa,format:Li,colorSpace:Qr,depthBuffer:!1},l=vv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=FT(c)),this._blurMaterial=BT(c,t,i),this._ggxMaterial=IT(c,t,i)}return l}_compileMaterial(t){const i=new Qi(new Fn,t);this._renderer.compile(i,al)}_sceneToCubeUV(t,i,s,l,c){const m=new li(90,1,i,s),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,M=S.toneMapping;S.getClearColor(gv),S.toneMapping=Yi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qi(new gl,new Pp({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,_=R.material;let v=!1;const A=t.background;A?A.isColor&&(_.color.copy(A),t.background=null,v=!0):(_.color.copy(gv),v=!0);for(let D=0;D<6;D++){const N=D%3;N===0?(m.up.set(0,h[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[D],c.y,c.z)):N===1?(m.up.set(0,0,h[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[D],c.z)):(m.up.set(0,h[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[D]));const G=this._cubeSize;kr(l,N*G,D>2?G:0,G,G),S.setRenderTarget(l),v&&S.render(R,m),S.render(t,m)}S.toneMapping=M,S.autoClear=g,t.background=A}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Vs||t.mapping===Zr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;kr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,al)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),S=Math.sqrt(h*h-x*x),g=0+h*1.25,M=S*g,{_lodMax:b}=this,R=this._sizeLods[s],_=3*R*(s>b-cs?s-b+cs:0),v=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,kr(c,_,v,3*R,2*R),l.setRenderTarget(c),l.render(p,al),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,kr(t,_,v,3*R,2*R),l.setRenderTarget(t),l.render(p,al)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[l];S.material=h;const g=h.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*zs-1),R=c/b,_=isFinite(c)?1+Math.floor(x*R):zs;_>zs&&le(`sigmaRadians, ${c}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${zs}`);const v=[];let A=0;for(let z=0;z<zs;++z){const E=z/R,O=Math.exp(-E*E/2);v.push(O),z===0?A+=O:z<_&&(A+=2*O)}for(let z=0;z<v.length;z++)v[z]=v[z]/A;g.envMap.value=t.texture,g.samples.value=_,g.weights.value=v,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:D}=this;g.dTheta.value=b,g.mipInt.value=D-s;const N=this._sizeLods[l],G=3*N*(l>D-cs?l-D+cs:0),B=4*(this._cubeSize-N);kr(i,G,B,3*N,2*N),m.setRenderTarget(i),m.render(S,al)}}function FT(r){const t=[],i=[],s=[];let l=r;const c=r-cs+1+mv.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);t.push(p);let m=1/p;d>r-cs?m=mv[d-r+cs-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),x=-h,S=1+h,g=[x,x,S,x,S,S,x,x,S,S,x,S],M=6,b=6,R=3,_=2,v=1,A=new Float32Array(R*b*M),D=new Float32Array(_*b*M),N=new Float32Array(v*b*M);for(let B=0;B<M;B++){const z=B%3*2/3-1,E=B>2?0:-1,O=[z,E,0,z+2/3,E,0,z+2/3,E+1,0,z,E,0,z+2/3,E+1,0,z,E+1,0];A.set(O,R*b*B),D.set(g,_*b*B);const rt=[B,B,B,B,B,B];N.set(rt,v*b*B)}const G=new Fn;G.setAttribute("position",new Ln(A,R)),G.setAttribute("uv",new Ln(D,_)),G.setAttribute("faceIndex",new Ln(N,v)),s.push(new Qi(G,null)),l>cs&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function vv(r,t,i){const s=new Zi(r,t,i);return s.texture.mapping=bu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function kr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function IT(r,t,i){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:OT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function BT(r,t,i){const s=new Float32Array(zs),l=new lt(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function xv(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eu(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Sv(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Eu(){return`

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
	`}class Mx extends Zi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new mx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new gl(5,5,5),c=new Ji({name:"CubemapFromEquirect",uniforms:Jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Ea});c.uniforms.tEquirect.value=i;const d=new Qi(l,c),p=i.minFilter;return i.minFilter===Hs&&(i.minFilter=On),new kb(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}function zT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?d(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===zd||M===Hd)if(t.has(g)){const b=t.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const R=new Mx(b.height);return R.fromEquirectangularTexture(r,g),t.set(g,R),g.addEventListener("dispose",h),p(R.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const M=g.mapping,b=M===zd||M===Hd,R=M===Vs||M===Zr;if(b||R){let _=i.get(g);const v=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new _v(r)),_=b?s.fromEquirectangular(g,_):s.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,i.set(g,_),_.texture;if(_!==void 0)return _.texture;{const A=g.image;return b&&A&&A.height>0||R&&A&&m(A)?(s===null&&(s=new _v(r)),_=b?s.fromEquirectangular(g):s.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,i.set(g,_),g.addEventListener("dispose",x),_.texture):null}}}return g}function p(g,M){return M===zd?g.mapping=Vs:M===Hd&&(g.mapping=Zr),g}function m(g){let M=0;const b=6;for(let R=0;R<b;R++)g[R]!==void 0&&M++;return M===b}function h(g){const M=g.target;M.removeEventListener("dispose",h);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function x(g){const M=g.target;M.removeEventListener("dispose",x);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function S(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function HT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&gu("WebGLRenderer: "+s+" extension not supported."),l}}}function GT(r,t,i,s){const l={},c=new WeakMap;function d(S){const g=S.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",d),delete l[g.id];const M=c.get(g);M&&(t.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(S,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(S){const g=S.attributes;for(const M in g)t.update(g[M],r.ARRAY_BUFFER)}function h(S){const g=[],M=S.index,b=S.attributes.position;let R=0;if(b===void 0)return;if(M!==null){const A=M.array;R=M.version;for(let D=0,N=A.length;D<N;D+=3){const G=A[D+0],B=A[D+1],z=A[D+2];g.push(G,B,B,z,z,G)}}else{const A=b.array;R=b.version;for(let D=0,N=A.length/3-1;D<N;D+=3){const G=D+0,B=D+1,z=D+2;g.push(G,B,B,z,z,G)}}const _=new(b.count>=65535?fx:ux)(g,1);_.version=R;const v=c.get(S);v&&t.remove(v),c.set(S,_)}function x(S){const g=c.get(S);if(g){const M=S.index;M!==null&&g.version<M.version&&h(S)}else h(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:x}}function VT(r,t,i){let s;function l(g){s=g}let c,d;function p(g){c=g.type,d=g.bytesPerElement}function m(g,M){r.drawElements(s,M,c,g*d),i.update(M,s,1)}function h(g,M,b){b!==0&&(r.drawElementsInstanced(s,M,c,g*d,b),i.update(M,s,b))}function x(g,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,g,0,b);let _=0;for(let v=0;v<b;v++)_+=M[v];i.update(_,s,1)}function S(g,M,b,R){if(b===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<g.length;v++)h(g[v]/d,M[v],R[v]);else{_.multiDrawElementsInstancedWEBGL(s,M,0,c,g,0,R,0,b);let v=0;for(let A=0;A<b;A++)v+=M[A]*R[A];i.update(v,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=S}function kT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ue("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function XT(r,t,i){const s=new WeakMap,l=new an;function c(d,p,m){const h=d.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=x!==void 0?x.length:0;let g=s.get(p);if(g===void 0||g.count!==S){let rt=function(){E.dispose(),s.delete(p),p.removeEventListener("dispose",rt)};var M=rt;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,_=p.morphAttributes.color!==void 0,v=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],D=p.morphAttributes.color||[];let N=0;b===!0&&(N=1),R===!0&&(N=2),_===!0&&(N=3);let G=p.attributes.position.count*N,B=1;G>t.maxTextureSize&&(B=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const z=new Float32Array(G*B*4*S),E=new ox(z,G,B,S);E.type=ji,E.needsUpdate=!0;const O=N*4;for(let H=0;H<S;H++){const q=v[H],Y=A[H],at=D[H],tt=G*B*4*H;for(let U=0;U<q.count;U++){const I=U*O;b===!0&&(l.fromBufferAttribute(q,U),z[tt+I+0]=l.x,z[tt+I+1]=l.y,z[tt+I+2]=l.z,z[tt+I+3]=0),R===!0&&(l.fromBufferAttribute(Y,U),z[tt+I+4]=l.x,z[tt+I+5]=l.y,z[tt+I+6]=l.z,z[tt+I+7]=0),_===!0&&(l.fromBufferAttribute(at,U),z[tt+I+8]=l.x,z[tt+I+9]=l.y,z[tt+I+10]=l.z,z[tt+I+11]=at.itemSize===4?l.w:1)}}g={count:S,texture:E,size:new Ee(G,B)},s.set(p,g),p.addEventListener("dispose",rt)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,i);else{let b=0;for(let _=0;_<h.length;_++)b+=h[_];const R=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",R),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function WT(r,t,i,s,l){let c=new WeakMap;function d(h){const x=l.render.frame,S=h.geometry,g=t.get(h,S);if(c.get(g)!==x&&(t.update(g),c.set(g,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==x&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,x))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==x&&(M.update(),c.set(M,x))}return g}function p(){c=new WeakMap}function m(h){const x=h.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:p}}const jT={[jv]:"LINEAR_TONE_MAPPING",[qv]:"REINHARD_TONE_MAPPING",[Yv]:"CINEON_TONE_MAPPING",[bp]:"ACES_FILMIC_TONE_MAPPING",[Kv]:"AGX_TONE_MAPPING",[Qv]:"NEUTRAL_TONE_MAPPING",[Zv]:"CUSTOM_TONE_MAPPING"};function qT(r,t,i,s,l){const c=new Zi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),d=new Zi(t,i,{type:Aa,depthBuffer:!1,stencilBuffer:!1}),p=new Fn;p.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new ui([0,2,0,0,2,0],2));const m=new Fb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Qi(p,m),x=new Sx(-1,1,1,-1,0,1);let S=null,g=null,M=!1,b,R=null,_=[],v=!1;this.setSize=function(A,D){c.setSize(A,D),d.setSize(A,D);for(let N=0;N<_.length;N++){const G=_[N];G.setSize&&G.setSize(A,D)}},this.setEffects=function(A){_=A,v=_.length>0&&_[0].isRenderPass===!0;const D=c.width,N=c.height;for(let G=0;G<_.length;G++){const B=_[G];B.setSize&&B.setSize(D,N)}},this.begin=function(A,D){if(M||A.toneMapping===Yi&&_.length===0)return!1;if(R=D,D!==null){const N=D.width,G=D.height;(c.width!==N||c.height!==G)&&this.setSize(N,G)}return v===!1&&A.setRenderTarget(c),b=A.toneMapping,A.toneMapping=Yi,!0},this.hasRenderPass=function(){return v},this.end=function(A,D){A.toneMapping=b,M=!0;let N=c,G=d;for(let B=0;B<_.length;B++){const z=_[B];if(z.enabled!==!1&&(z.render(A,G,N,D),z.needsSwap!==!1)){const E=N;N=G,G=E}}if(S!==A.outputColorSpace||g!==A.toneMapping){S=A.outputColorSpace,g=A.toneMapping,m.defines={},Le.getTransfer(S)===Ve&&(m.defines.SRGB_TRANSFER="");const B=jT[g];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,A.setRenderTarget(R),A.render(h,x),R=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const bx=new Pn,_p=new hl(1,1),Ex=new ox,Tx=new cb,Ax=new mx,yv=[],Mv=[],bv=new Float32Array(16),Ev=new Float32Array(9),Tv=new Float32Array(4);function eo(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=yv[l];if(c===void 0&&(c=new Float32Array(l),yv[l]=c),t!==0){s.toArray(c,0);for(let d=1,p=0;d!==t;++d)p+=i,r[d].toArray(c,p)}return c}function xn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function Sn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Tu(r,t){let i=Mv[t];i===void 0&&(i=new Int32Array(t),Mv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function YT(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function ZT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2fv(this.addr,t),Sn(i,t)}}function KT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;r.uniform3fv(this.addr,t),Sn(i,t)}}function QT(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4fv(this.addr,t),Sn(i,t)}}function JT(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;Tv.set(s),r.uniformMatrix2fv(this.addr,!1,Tv),Sn(i,s)}}function $T(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;Ev.set(s),r.uniformMatrix3fv(this.addr,!1,Ev),Sn(i,s)}}function tA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),Sn(i,t)}else{if(xn(i,s))return;bv.set(s),r.uniformMatrix4fv(this.addr,!1,bv),Sn(i,s)}}function eA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function nA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2iv(this.addr,t),Sn(i,t)}}function iA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;r.uniform3iv(this.addr,t),Sn(i,t)}}function aA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4iv(this.addr,t),Sn(i,t)}}function sA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function rA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;r.uniform2uiv(this.addr,t),Sn(i,t)}}function oA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;r.uniform3uiv(this.addr,t),Sn(i,t)}}function lA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;r.uniform4uiv(this.addr,t),Sn(i,t)}}function cA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(_p.compareFunction=i.isReversedDepthBuffer()?Np:Dp,c=_p):c=bx,i.setTexture2D(t||c,l)}function uA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Tx,l)}function fA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Ax,l)}function dA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Ex,l)}function hA(r){switch(r){case 5126:return YT;case 35664:return ZT;case 35665:return KT;case 35666:return QT;case 35674:return JT;case 35675:return $T;case 35676:return tA;case 5124:case 35670:return eA;case 35667:case 35671:return nA;case 35668:case 35672:return iA;case 35669:case 35673:return aA;case 5125:return sA;case 36294:return rA;case 36295:return oA;case 36296:return lA;case 35678:case 36198:case 36298:case 36306:case 35682:return cA;case 35679:case 36299:case 36307:return uA;case 35680:case 36300:case 36308:case 36293:return fA;case 36289:case 36303:case 36311:case 36292:return dA}}function pA(r,t){r.uniform1fv(this.addr,t)}function mA(r,t){const i=eo(t,this.size,2);r.uniform2fv(this.addr,i)}function gA(r,t){const i=eo(t,this.size,3);r.uniform3fv(this.addr,i)}function _A(r,t){const i=eo(t,this.size,4);r.uniform4fv(this.addr,i)}function vA(r,t){const i=eo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function xA(r,t){const i=eo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function SA(r,t){const i=eo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function yA(r,t){r.uniform1iv(this.addr,t)}function MA(r,t){r.uniform2iv(this.addr,t)}function bA(r,t){r.uniform3iv(this.addr,t)}function EA(r,t){r.uniform4iv(this.addr,t)}function TA(r,t){r.uniform1uiv(this.addr,t)}function AA(r,t){r.uniform2uiv(this.addr,t)}function RA(r,t){r.uniform3uiv(this.addr,t)}function CA(r,t){r.uniform4uiv(this.addr,t)}function wA(r,t,i){const s=this.cache,l=t.length,c=Tu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));let d;this.type===r.SAMPLER_2D_SHADOW?d=_p:d=bx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||d,c[p])}function DA(r,t,i){const s=this.cache,l=t.length,c=Tu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Tx,c[d])}function NA(r,t,i){const s=this.cache,l=t.length,c=Tu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Ax,c[d])}function UA(r,t,i){const s=this.cache,l=t.length,c=Tu(i,l);xn(s,c)||(r.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Ex,c[d])}function LA(r){switch(r){case 5126:return pA;case 35664:return mA;case 35665:return gA;case 35666:return _A;case 35674:return vA;case 35675:return xA;case 35676:return SA;case 5124:case 35670:return yA;case 35667:case 35671:return MA;case 35668:case 35672:return bA;case 35669:case 35673:return EA;case 5125:return TA;case 36294:return AA;case 36295:return RA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return wA;case 35679:case 36299:case 36307:return DA;case 35680:case 36300:case 36308:case 36293:return NA;case 36289:case 36303:case 36311:case 36292:return UA}}class OA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=hA(i.type)}}class PA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=LA(i.type)}}class FA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const xh=/(\w+)(\])?(\[|\.)?/g;function Av(r,t){r.seq.push(t),r.map[t.id]=t}function IA(r,t,i){const s=r.name,l=s.length;for(xh.lastIndex=0;;){const c=xh.exec(s),d=xh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){Av(i,h===void 0?new OA(p,r,t):new PA(p,r,t));break}else{let S=i.map[p];S===void 0&&(S=new FA(p),Av(i,S)),i=S}}}class du{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=t.getActiveUniform(i,d),m=t.getUniformLocation(i,p.name);IA(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function Rv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const BA=37297;let zA=0;function HA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const Cv=new xe;function GA(r){Le._getMatrix(Cv,Le.workingColorSpace,r);const t=`mat3( ${Cv.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(r)){case hu:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function wv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+HA(r.getShaderSource(t),p)}else return c}function VA(r,t){const i=GA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const kA={[jv]:"Linear",[qv]:"Reinhard",[Yv]:"Cineon",[bp]:"ACESFilmic",[Kv]:"AgX",[Qv]:"Neutral",[Zv]:"Custom"};function XA(r,t){const i=kA[t];return i===void 0?(le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const ru=new lt;function WA(){Le.getLuminanceCoefficients(ru);const r=ru.x.toFixed(4),t=ru.y.toFixed(4),i=ru.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function qA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function YA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),d=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:r.getAttribLocation(t,d),locationSize:p}}return i}function cl(r){return r!==""}function Dv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ZA=/^[ \t]*#include +<([\w\d./]+)>/gm;function vp(r){return r.replace(ZA,QA)}const KA=new Map;function QA(r,t){let i=Se[t];if(i===void 0){const s=KA.get(t);if(s!==void 0)i=Se[s],le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return vp(i)}const JA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uv(r){return r.replace(JA,$A)}function $A(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Lv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const tR={[ou]:"SHADOWMAP_TYPE_PCF",[ll]:"SHADOWMAP_TYPE_VSM"};function eR(r){return tR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nR={[Vs]:"ENVMAP_TYPE_CUBE",[Zr]:"ENVMAP_TYPE_CUBE",[bu]:"ENVMAP_TYPE_CUBE_UV"};function iR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":nR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const aR={[Zr]:"ENVMAP_MODE_REFRACTION"};function sR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":aR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rR={[Wv]:"ENVMAP_BLENDING_MULTIPLY",[GM]:"ENVMAP_BLENDING_MIX",[VM]:"ENVMAP_BLENDING_ADD"};function oR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":rR[r.combine]||"ENVMAP_BLENDING_NONE"}function lR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function cR(r,t,i,s){const l=r.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=eR(i),h=iR(i),x=sR(i),S=oR(i),g=lR(i),M=jA(i),b=qA(c),R=l.createProgram();let _,v,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(cl).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(cl).join(`
`),v.length>0&&(v+=`
`)):(_=[Lv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),v=[Lv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?Se.tonemapping_pars_fragment:"",i.toneMapping!==Yi?XA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,VA("linearToOutputTexel",i.outputColorSpace),WA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(cl).join(`
`)),d=vp(d),d=Dv(d,i),d=Nv(d,i),p=vp(p),p=Dv(p,i),p=Nv(p,i),d=Uv(d),p=Uv(p),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",i.glslVersion===z_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===z_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=A+_+d,N=A+v+p,G=Rv(l,l.VERTEX_SHADER,D),B=Rv(l,l.FRAGMENT_SHADER,N);l.attachShader(R,G),l.attachShader(R,B),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function z(H){if(r.debug.checkShaderErrors){const q=l.getProgramInfoLog(R)||"",Y=l.getShaderInfoLog(G)||"",at=l.getShaderInfoLog(B)||"",tt=q.trim(),U=Y.trim(),I=at.trim();let X=!0,nt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,G,B);else{const gt=wv(l,G,"vertex"),F=wv(l,B,"fragment");Ue("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+tt+`
`+gt+`
`+F)}else tt!==""?le("WebGLProgram: Program Info Log:",tt):(U===""||I==="")&&(nt=!1);nt&&(H.diagnostics={runnable:X,programLog:tt,vertexShader:{log:U,prefix:_},fragmentShader:{log:I,prefix:v}})}l.deleteShader(G),l.deleteShader(B),E=new du(l,R),O=YA(l,R)}let E;this.getUniforms=function(){return E===void 0&&z(this),E};let O;this.getAttributes=function(){return O===void 0&&z(this),O};let rt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return rt===!1&&(rt=l.getProgramParameter(R,BA)),rt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=zA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=G,this.fragmentShader=B,this}let uR=0;class fR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new dR(t),i.set(t,s)),s}}class dR{constructor(t){this.id=uR++,this.code=t,this.usedTimes=0}}function hR(r,t,i,s,l,c){const d=new lx,p=new fR,m=new Set,h=[],x=new Map,S=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return m.add(E),E===0?"uv":`uv${E}`}function R(E,O,rt,H,q){const Y=H.fog,at=q.geometry,tt=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,U=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,I=t.get(E.envMap||tt,U),X=I&&I.mapping===bu?I.image.height:null,nt=M[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&le("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const gt=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,F=gt!==void 0?gt.length:0;let k=0;at.morphAttributes.position!==void 0&&(k=1),at.morphAttributes.normal!==void 0&&(k=2),at.morphAttributes.color!==void 0&&(k=3);let et,pt,Mt,Z;if(nt){const Ne=ki[nt];et=Ne.vertexShader,pt=Ne.fragmentShader}else et=E.vertexShader,pt=E.fragmentShader,p.update(E),Mt=p.getVertexShaderID(E),Z=p.getFragmentShaderID(E);const V=r.getRenderTarget(),ft=r.state.buffers.depth.getReversed(),St=q.isInstancedMesh===!0,Nt=q.isBatchedMesh===!0,wt=!!E.map,Gt=!!E.matcap,Ot=!!I,Qt=!!E.aoMap,ae=!!E.lightMap,Yt=!!E.bumpMap,pe=!!E.normalMap,j=!!E.displacementMap,Te=!!E.emissiveMap,me=!!E.metalnessMap,Ae=!!E.roughnessMap,Xt=E.anisotropy>0,P=E.clearcoat>0,T=E.dispersion>0,$=E.iridescence>0,yt=E.sheen>0,At=E.transmission>0,mt=Xt&&!!E.anisotropyMap,jt=P&&!!E.clearcoatMap,Lt=P&&!!E.clearcoatNormalMap,te=P&&!!E.clearcoatRoughnessMap,ee=$&&!!E.iridescenceMap,Ct=$&&!!E.iridescenceThicknessMap,Rt=yt&&!!E.sheenColorMap,Ht=yt&&!!E.sheenRoughnessMap,zt=!!E.specularMap,Vt=!!E.specularColorMap,ge=!!E.specularIntensityMap,J=At&&!!E.transmissionMap,Pt=At&&!!E.thicknessMap,Ut=!!E.gradientMap,kt=!!E.alphaMap,Dt=E.alphaTest>0,xt=!!E.alphaHash,qt=!!E.extensions;let ce=Yi;E.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ce=r.toneMapping);const ze={shaderID:nt,shaderType:E.type,shaderName:E.name,vertexShader:et,fragmentShader:pt,defines:E.defines,customVertexShaderID:Mt,customFragmentShaderID:Z,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Nt,batchingColor:Nt&&q._colorsTexture!==null,instancing:St,instancingColor:St&&q.instanceColor!==null,instancingMorph:St&&q.morphTexture!==null,outputColorSpace:V===null?r.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Qr,alphaToCoverage:!!E.alphaToCoverage,map:wt,matcap:Gt,envMap:Ot,envMapMode:Ot&&I.mapping,envMapCubeUVHeight:X,aoMap:Qt,lightMap:ae,bumpMap:Yt,normalMap:pe,displacementMap:j,emissiveMap:Te,normalMapObjectSpace:pe&&E.normalMapType===jM,normalMapTangentSpace:pe&&E.normalMapType===WM,metalnessMap:me,roughnessMap:Ae,anisotropy:Xt,anisotropyMap:mt,clearcoat:P,clearcoatMap:jt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:te,dispersion:T,iridescence:$,iridescenceMap:ee,iridescenceThicknessMap:Ct,sheen:yt,sheenColorMap:Rt,sheenRoughnessMap:Ht,specularMap:zt,specularColorMap:Vt,specularIntensityMap:ge,transmission:At,transmissionMap:J,thicknessMap:Pt,gradientMap:Ut,opaque:E.transparent===!1&&E.blending===Wr&&E.alphaToCoverage===!1,alphaMap:kt,alphaTest:Dt,alphaHash:xt,combine:E.combine,mapUv:wt&&b(E.map.channel),aoMapUv:Qt&&b(E.aoMap.channel),lightMapUv:ae&&b(E.lightMap.channel),bumpMapUv:Yt&&b(E.bumpMap.channel),normalMapUv:pe&&b(E.normalMap.channel),displacementMapUv:j&&b(E.displacementMap.channel),emissiveMapUv:Te&&b(E.emissiveMap.channel),metalnessMapUv:me&&b(E.metalnessMap.channel),roughnessMapUv:Ae&&b(E.roughnessMap.channel),anisotropyMapUv:mt&&b(E.anisotropyMap.channel),clearcoatMapUv:jt&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&b(E.sheenRoughnessMap.channel),specularMapUv:zt&&b(E.specularMap.channel),specularColorMapUv:Vt&&b(E.specularColorMap.channel),specularIntensityMapUv:ge&&b(E.specularIntensityMap.channel),transmissionMapUv:J&&b(E.transmissionMap.channel),thicknessMapUv:Pt&&b(E.thicknessMap.channel),alphaMapUv:kt&&b(E.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(pe||Xt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!at.attributes.uv&&(wt||kt),fog:!!Y,useFog:E.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||at.attributes.normal===void 0&&pe===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:ft,skinning:q.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:k,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&rt.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:wt&&E.map.isVideoTexture===!0&&Le.getTransfer(E.map.colorSpace)===Ve,decodeVideoTextureEmissive:Te&&E.emissiveMap.isVideoTexture===!0&&Le.getTransfer(E.emissiveMap.colorSpace)===Ve,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Xi,flipSided:E.side===Kn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:qt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qt&&E.extensions.multiDraw===!0||Nt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ze.vertexUv1s=m.has(1),ze.vertexUv2s=m.has(2),ze.vertexUv3s=m.has(3),m.clear(),ze}function _(E){const O=[];if(E.shaderID?O.push(E.shaderID):(O.push(E.customVertexShaderID),O.push(E.customFragmentShaderID)),E.defines!==void 0)for(const rt in E.defines)O.push(rt),O.push(E.defines[rt]);return E.isRawShaderMaterial===!1&&(v(O,E),A(O,E),O.push(r.outputColorSpace)),O.push(E.customProgramCacheKey),O.join()}function v(E,O){E.push(O.precision),E.push(O.outputColorSpace),E.push(O.envMapMode),E.push(O.envMapCubeUVHeight),E.push(O.mapUv),E.push(O.alphaMapUv),E.push(O.lightMapUv),E.push(O.aoMapUv),E.push(O.bumpMapUv),E.push(O.normalMapUv),E.push(O.displacementMapUv),E.push(O.emissiveMapUv),E.push(O.metalnessMapUv),E.push(O.roughnessMapUv),E.push(O.anisotropyMapUv),E.push(O.clearcoatMapUv),E.push(O.clearcoatNormalMapUv),E.push(O.clearcoatRoughnessMapUv),E.push(O.iridescenceMapUv),E.push(O.iridescenceThicknessMapUv),E.push(O.sheenColorMapUv),E.push(O.sheenRoughnessMapUv),E.push(O.specularMapUv),E.push(O.specularColorMapUv),E.push(O.specularIntensityMapUv),E.push(O.transmissionMapUv),E.push(O.thicknessMapUv),E.push(O.combine),E.push(O.fogExp2),E.push(O.sizeAttenuation),E.push(O.morphTargetsCount),E.push(O.morphAttributeCount),E.push(O.numDirLights),E.push(O.numPointLights),E.push(O.numSpotLights),E.push(O.numSpotLightMaps),E.push(O.numHemiLights),E.push(O.numRectAreaLights),E.push(O.numDirLightShadows),E.push(O.numPointLightShadows),E.push(O.numSpotLightShadows),E.push(O.numSpotLightShadowsWithMaps),E.push(O.numLightProbes),E.push(O.shadowMapType),E.push(O.toneMapping),E.push(O.numClippingPlanes),E.push(O.numClipIntersection),E.push(O.depthPacking)}function A(E,O){d.disableAll(),O.instancing&&d.enable(0),O.instancingColor&&d.enable(1),O.instancingMorph&&d.enable(2),O.matcap&&d.enable(3),O.envMap&&d.enable(4),O.normalMapObjectSpace&&d.enable(5),O.normalMapTangentSpace&&d.enable(6),O.clearcoat&&d.enable(7),O.iridescence&&d.enable(8),O.alphaTest&&d.enable(9),O.vertexColors&&d.enable(10),O.vertexAlphas&&d.enable(11),O.vertexUv1s&&d.enable(12),O.vertexUv2s&&d.enable(13),O.vertexUv3s&&d.enable(14),O.vertexTangents&&d.enable(15),O.anisotropy&&d.enable(16),O.alphaHash&&d.enable(17),O.batching&&d.enable(18),O.dispersion&&d.enable(19),O.batchingColor&&d.enable(20),O.gradientMap&&d.enable(21),E.push(d.mask),d.disableAll(),O.fog&&d.enable(0),O.useFog&&d.enable(1),O.flatShading&&d.enable(2),O.logarithmicDepthBuffer&&d.enable(3),O.reversedDepthBuffer&&d.enable(4),O.skinning&&d.enable(5),O.morphTargets&&d.enable(6),O.morphNormals&&d.enable(7),O.morphColors&&d.enable(8),O.premultipliedAlpha&&d.enable(9),O.shadowMapEnabled&&d.enable(10),O.doubleSided&&d.enable(11),O.flipSided&&d.enable(12),O.useDepthPacking&&d.enable(13),O.dithering&&d.enable(14),O.transmission&&d.enable(15),O.sheen&&d.enable(16),O.opaque&&d.enable(17),O.pointsUvs&&d.enable(18),O.decodeVideoTexture&&d.enable(19),O.decodeVideoTextureEmissive&&d.enable(20),O.alphaToCoverage&&d.enable(21),E.push(d.mask)}function D(E){const O=M[E.type];let rt;if(O){const H=ki[O];rt=Lb.clone(H.uniforms)}else rt=E.uniforms;return rt}function N(E,O){let rt=x.get(O);return rt!==void 0?++rt.usedTimes:(rt=new cR(r,O,E,l),h.push(rt),x.set(O,rt)),rt}function G(E){if(--E.usedTimes===0){const O=h.indexOf(E);h[O]=h[h.length-1],h.pop(),x.delete(E.cacheKey),E.destroy()}}function B(E){p.remove(E)}function z(){p.dispose()}return{getParameters:R,getProgramCacheKey:_,getUniforms:D,acquireProgram:N,releaseProgram:G,releaseShaderCache:B,programs:h,dispose:z}}function pR(){let r=new WeakMap;function t(d){return r.has(d)}function i(d){let p=r.get(d);return p===void 0&&(p={},r.set(d,p)),p}function s(d){r.delete(d)}function l(d,p,m){r.get(d)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function mR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Ov(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Pv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,b,R,_,v){let A=r[t];return A===void 0?(A={id:g.id,object:g,geometry:M,material:b,materialVariant:d(g),groupOrder:R,renderOrder:g.renderOrder,z:_,group:v},r[t]=A):(A.id=g.id,A.object=g,A.geometry=M,A.material=b,A.materialVariant=d(g),A.groupOrder=R,A.renderOrder=g.renderOrder,A.z=_,A.group=v),t++,A}function m(g,M,b,R,_,v){const A=p(g,M,b,R,_,v);b.transmission>0?s.push(A):b.transparent===!0?l.push(A):i.push(A)}function h(g,M,b,R,_,v){const A=p(g,M,b,R,_,v);b.transmission>0?s.unshift(A):b.transparent===!0?l.unshift(A):i.unshift(A)}function x(g,M){i.length>1&&i.sort(g||mR),s.length>1&&s.sort(M||Ov),l.length>1&&l.sort(M||Ov)}function S(){for(let g=t,M=r.length;g<M;g++){const b=r[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:S,sort:x}}function gR(){let r=new WeakMap;function t(s,l){const c=r.get(s);let d;return c===void 0?(d=new Pv,r.set(s,[d])):l>=c.length?(d=new Pv,c.push(d)):d=c[l],d}function i(){r=new WeakMap}return{get:t,dispose:i}}function _R(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new lt,color:new ye};break;case"SpotLight":i={position:new lt,direction:new lt,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new lt,color:new ye,distance:0,decay:0};break;case"HemisphereLight":i={direction:new lt,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":i={color:new ye,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return r[t.id]=i,i}}}function vR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let xR=0;function SR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function yR(r){const t=new _R,i=vR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new lt);const l=new lt,c=new Ke,d=new Ke;function p(h){let x=0,S=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let M=0,b=0,R=0,_=0,v=0,A=0,D=0,N=0,G=0,B=0,z=0;h.sort(SR);for(let O=0,rt=h.length;O<rt;O++){const H=h[O],q=H.color,Y=H.intensity,at=H.distance;let tt=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Kr?tt=H.shadow.map.texture:tt=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)x+=q.r*Y,S+=q.g*Y,g+=q.b*Y;else if(H.isLightProbe){for(let U=0;U<9;U++)s.probe[U].addScaledVector(H.sh.coefficients[U],Y);z++}else if(H.isDirectionalLight){const U=t.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const I=H.shadow,X=i.get(H);X.shadowIntensity=I.intensity,X.shadowBias=I.bias,X.shadowNormalBias=I.normalBias,X.shadowRadius=I.radius,X.shadowMapSize=I.mapSize,s.directionalShadow[M]=X,s.directionalShadowMap[M]=tt,s.directionalShadowMatrix[M]=H.shadow.matrix,A++}s.directional[M]=U,M++}else if(H.isSpotLight){const U=t.get(H);U.position.setFromMatrixPosition(H.matrixWorld),U.color.copy(q).multiplyScalar(Y),U.distance=at,U.coneCos=Math.cos(H.angle),U.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),U.decay=H.decay,s.spot[R]=U;const I=H.shadow;if(H.map&&(s.spotLightMap[G]=H.map,G++,I.updateMatrices(H),H.castShadow&&B++),s.spotLightMatrix[R]=I.matrix,H.castShadow){const X=i.get(H);X.shadowIntensity=I.intensity,X.shadowBias=I.bias,X.shadowNormalBias=I.normalBias,X.shadowRadius=I.radius,X.shadowMapSize=I.mapSize,s.spotShadow[R]=X,s.spotShadowMap[R]=tt,N++}R++}else if(H.isRectAreaLight){const U=t.get(H);U.color.copy(q).multiplyScalar(Y),U.halfWidth.set(H.width*.5,0,0),U.halfHeight.set(0,H.height*.5,0),s.rectArea[_]=U,_++}else if(H.isPointLight){const U=t.get(H);if(U.color.copy(H.color).multiplyScalar(H.intensity),U.distance=H.distance,U.decay=H.decay,H.castShadow){const I=H.shadow,X=i.get(H);X.shadowIntensity=I.intensity,X.shadowBias=I.bias,X.shadowNormalBias=I.normalBias,X.shadowRadius=I.radius,X.shadowMapSize=I.mapSize,X.shadowCameraNear=I.camera.near,X.shadowCameraFar=I.camera.far,s.pointShadow[b]=X,s.pointShadowMap[b]=tt,s.pointShadowMatrix[b]=H.shadow.matrix,D++}s.point[b]=U,b++}else if(H.isHemisphereLight){const U=t.get(H);U.skyColor.copy(H.color).multiplyScalar(Y),U.groundColor.copy(H.groundColor).multiplyScalar(Y),s.hemi[v]=U,v++}}_>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Bt.LTC_FLOAT_1,s.rectAreaLTC2=Bt.LTC_FLOAT_2):(s.rectAreaLTC1=Bt.LTC_HALF_1,s.rectAreaLTC2=Bt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=S,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==M||E.pointLength!==b||E.spotLength!==R||E.rectAreaLength!==_||E.hemiLength!==v||E.numDirectionalShadows!==A||E.numPointShadows!==D||E.numSpotShadows!==N||E.numSpotMaps!==G||E.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=_,s.point.length=b,s.hemi.length=v,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=N+G-B,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=z,E.directionalLength=M,E.pointLength=b,E.spotLength=R,E.rectAreaLength=_,E.hemiLength=v,E.numDirectionalShadows=A,E.numPointShadows=D,E.numSpotShadows=N,E.numSpotMaps=G,E.numLightProbes=z,s.version=xR++)}function m(h,x){let S=0,g=0,M=0,b=0,R=0;const _=x.matrixWorldInverse;for(let v=0,A=h.length;v<A;v++){const D=h[v];if(D.isDirectionalLight){const N=s.directional[S];N.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(_),S++}else if(D.isSpotLight){const N=s.spot[M];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(_),N.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(_),M++}else if(D.isRectAreaLight){const N=s.rectArea[b];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(_),d.identity(),c.copy(D.matrixWorld),c.premultiply(_),d.extractRotation(c),N.halfWidth.set(D.width*.5,0,0),N.halfHeight.set(0,D.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),b++}else if(D.isPointLight){const N=s.point[g];N.position.setFromMatrixPosition(D.matrixWorld),N.position.applyMatrix4(_),g++}else if(D.isHemisphereLight){const N=s.hemi[R];N.direction.setFromMatrixPosition(D.matrixWorld),N.direction.transformDirection(_),R++}}}return{setup:p,setupView:m,state:s}}function Fv(r){const t=new yR(r),i=[],s=[];function l(x){h.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function d(x){s.push(x)}function p(){t.setup(i)}function m(x){t.setupView(i,x)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function MR(r){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let p;return d===void 0?(p=new Fv(r),t.set(l,[p])):c>=d.length?(p=new Fv(r),d.push(p)):p=d[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const bR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ER=`uniform sampler2D shadow_pass;
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
}`,TR=[new lt(1,0,0),new lt(-1,0,0),new lt(0,1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1)],AR=[new lt(0,-1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1),new lt(0,-1,0),new lt(0,-1,0)],Iv=new Ke,sl=new lt,Sh=new lt;function RR(r,t,i){let s=new Fp;const l=new Ee,c=new Ee,d=new an,p=new Ib,m=new Bb,h={},x=i.maxTextureSize,S={[fs]:Kn,[Kn]:fs,[Xi]:Xi},g=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:bR,fragmentShader:ER}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new Fn;b.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Qi(b,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ou;let v=this.type;this.render=function(B,z,E){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||B.length===0)return;this.type===MM&&(le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ou);const O=r.getRenderTarget(),rt=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),q=r.state;q.setBlending(Ea),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Y=v!==this.type;Y&&z.traverse(function(at){at.material&&(Array.isArray(at.material)?at.material.forEach(tt=>tt.needsUpdate=!0):at.material.needsUpdate=!0)});for(let at=0,tt=B.length;at<tt;at++){const U=B[at],I=U.shadow;if(I===void 0){le("WebGLShadowMap:",U,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;l.copy(I.mapSize);const X=I.getFrameExtents();l.multiply(X),c.copy(I.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/X.x),l.x=c.x*X.x,I.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/X.y),l.y=c.y*X.y,I.mapSize.y=c.y));const nt=r.state.buffers.depth.getReversed();if(I.camera._reversedDepth=nt,I.map===null||Y===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===ll){if(U.isPointLight){le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Zi(l.x,l.y,{format:Kr,type:Aa,minFilter:On,magFilter:On,generateMipmaps:!1}),I.map.texture.name=U.name+".shadowMap",I.map.depthTexture=new hl(l.x,l.y,ji),I.map.depthTexture.name=U.name+".shadowMapDepth",I.map.depthTexture.format=Ra,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Rn,I.map.depthTexture.magFilter=Rn}else U.isPointLight?(I.map=new Mx(l.x),I.map.depthTexture=new Nb(l.x,Ki)):(I.map=new Zi(l.x,l.y),I.map.depthTexture=new hl(l.x,l.y,Ki)),I.map.depthTexture.name=U.name+".shadowMap",I.map.depthTexture.format=Ra,this.type===ou?(I.map.depthTexture.compareFunction=nt?Np:Dp,I.map.depthTexture.minFilter=On,I.map.depthTexture.magFilter=On):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Rn,I.map.depthTexture.magFilter=Rn);I.camera.updateProjectionMatrix()}const gt=I.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<gt;F++){if(I.map.isWebGLCubeRenderTarget)r.setRenderTarget(I.map,F),r.clear();else{F===0&&(r.setRenderTarget(I.map),r.clear());const k=I.getViewport(F);d.set(c.x*k.x,c.y*k.y,c.x*k.z,c.y*k.w),q.viewport(d)}if(U.isPointLight){const k=I.camera,et=I.matrix,pt=U.distance||k.far;pt!==k.far&&(k.far=pt,k.updateProjectionMatrix()),sl.setFromMatrixPosition(U.matrixWorld),k.position.copy(sl),Sh.copy(k.position),Sh.add(TR[F]),k.up.copy(AR[F]),k.lookAt(Sh),k.updateMatrixWorld(),et.makeTranslation(-sl.x,-sl.y,-sl.z),Iv.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Iv,k.coordinateSystem,k.reversedDepth)}else I.updateMatrices(U);s=I.getFrustum(),N(z,E,I.camera,U,this.type)}I.isPointLightShadow!==!0&&this.type===ll&&A(I,E),I.needsUpdate=!1}v=this.type,_.needsUpdate=!1,r.setRenderTarget(O,rt,H)};function A(B,z){const E=t.update(R);g.defines.VSM_SAMPLES!==B.blurSamples&&(g.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Zi(l.x,l.y,{format:Kr,type:Aa})),g.uniforms.shadow_pass.value=B.map.depthTexture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(z,null,E,g,R,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(z,null,E,M,R,null)}function D(B,z,E,O){let rt=null;const H=E.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)rt=H;else if(rt=E.isPointLight===!0?m:p,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const q=rt.uuid,Y=z.uuid;let at=h[q];at===void 0&&(at={},h[q]=at);let tt=at[Y];tt===void 0&&(tt=rt.clone(),at[Y]=tt,z.addEventListener("dispose",G)),rt=tt}if(rt.visible=z.visible,rt.wireframe=z.wireframe,O===ll?rt.side=z.shadowSide!==null?z.shadowSide:z.side:rt.side=z.shadowSide!==null?z.shadowSide:S[z.side],rt.alphaMap=z.alphaMap,rt.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,rt.map=z.map,rt.clipShadows=z.clipShadows,rt.clippingPlanes=z.clippingPlanes,rt.clipIntersection=z.clipIntersection,rt.displacementMap=z.displacementMap,rt.displacementScale=z.displacementScale,rt.displacementBias=z.displacementBias,rt.wireframeLinewidth=z.wireframeLinewidth,rt.linewidth=z.linewidth,E.isPointLight===!0&&rt.isMeshDistanceMaterial===!0){const q=r.properties.get(rt);q.light=E}return rt}function N(B,z,E,O,rt){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&rt===ll)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,B.matrixWorld);const Y=t.update(B),at=B.material;if(Array.isArray(at)){const tt=Y.groups;for(let U=0,I=tt.length;U<I;U++){const X=tt[U],nt=at[X.materialIndex];if(nt&&nt.visible){const gt=D(B,nt,O,rt);B.onBeforeShadow(r,B,z,E,Y,gt,X),r.renderBufferDirect(E,null,Y,gt,B,X),B.onAfterShadow(r,B,z,E,Y,gt,X)}}}else if(at.visible){const tt=D(B,at,O,rt);B.onBeforeShadow(r,B,z,E,Y,tt,null),r.renderBufferDirect(E,null,Y,tt,B,null),B.onAfterShadow(r,B,z,E,Y,tt,null)}}const q=B.children;for(let Y=0,at=q.length;Y<at;Y++)N(q[Y],z,E,O,rt)}function G(B){B.target.removeEventListener("dispose",G);for(const E in h){const O=h[E],rt=B.target.uuid;rt in O&&(O[rt].dispose(),delete O[rt])}}}function CR(r,t){function i(){let J=!1;const Pt=new an;let Ut=null;const kt=new an(0,0,0,0);return{setMask:function(Dt){Ut!==Dt&&!J&&(r.colorMask(Dt,Dt,Dt,Dt),Ut=Dt)},setLocked:function(Dt){J=Dt},setClear:function(Dt,xt,qt,ce,ze){ze===!0&&(Dt*=ce,xt*=ce,qt*=ce),Pt.set(Dt,xt,qt,ce),kt.equals(Pt)===!1&&(r.clearColor(Dt,xt,qt,ce),kt.copy(Pt))},reset:function(){J=!1,Ut=null,kt.set(-1,0,0,0)}}}function s(){let J=!1,Pt=!1,Ut=null,kt=null,Dt=null;return{setReversed:function(xt){if(Pt!==xt){const qt=t.get("EXT_clip_control");xt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),Pt=xt;const ce=Dt;Dt=null,this.setClear(ce)}},getReversed:function(){return Pt},setTest:function(xt){xt?V(r.DEPTH_TEST):ft(r.DEPTH_TEST)},setMask:function(xt){Ut!==xt&&!J&&(r.depthMask(xt),Ut=xt)},setFunc:function(xt){if(Pt&&(xt=nb[xt]),kt!==xt){switch(xt){case Ah:r.depthFunc(r.NEVER);break;case Rh:r.depthFunc(r.ALWAYS);break;case Ch:r.depthFunc(r.LESS);break;case Yr:r.depthFunc(r.LEQUAL);break;case wh:r.depthFunc(r.EQUAL);break;case Dh:r.depthFunc(r.GEQUAL);break;case Nh:r.depthFunc(r.GREATER);break;case Uh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}kt=xt}},setLocked:function(xt){J=xt},setClear:function(xt){Dt!==xt&&(Dt=xt,Pt&&(xt=1-xt),r.clearDepth(xt))},reset:function(){J=!1,Ut=null,kt=null,Dt=null,Pt=!1}}}function l(){let J=!1,Pt=null,Ut=null,kt=null,Dt=null,xt=null,qt=null,ce=null,ze=null;return{setTest:function(Ne){J||(Ne?V(r.STENCIL_TEST):ft(r.STENCIL_TEST))},setMask:function(Ne){Pt!==Ne&&!J&&(r.stencilMask(Ne),Pt=Ne)},setFunc:function(Ne,In,Mi){(Ut!==Ne||kt!==In||Dt!==Mi)&&(r.stencilFunc(Ne,In,Mi),Ut=Ne,kt=In,Dt=Mi)},setOp:function(Ne,In,Mi){(xt!==Ne||qt!==In||ce!==Mi)&&(r.stencilOp(Ne,In,Mi),xt=Ne,qt=In,ce=Mi)},setLocked:function(Ne){J=Ne},setClear:function(Ne){ze!==Ne&&(r.clearStencil(Ne),ze=Ne)},reset:function(){J=!1,Pt=null,Ut=null,kt=null,Dt=null,xt=null,qt=null,ce=null,ze=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let x={},S={},g=new WeakMap,M=[],b=null,R=!1,_=null,v=null,A=null,D=null,N=null,G=null,B=null,z=new ye(0,0,0),E=0,O=!1,rt=null,H=null,q=null,Y=null,at=null;const tt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,I=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(X)[1]),U=I>=1):X.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),U=I>=2);let nt=null,gt={};const F=r.getParameter(r.SCISSOR_BOX),k=r.getParameter(r.VIEWPORT),et=new an().fromArray(F),pt=new an().fromArray(k);function Mt(J,Pt,Ut,kt){const Dt=new Uint8Array(4),xt=r.createTexture();r.bindTexture(J,xt),r.texParameteri(J,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(J,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let qt=0;qt<Ut;qt++)J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?r.texImage3D(Pt,0,r.RGBA,1,1,kt,0,r.RGBA,r.UNSIGNED_BYTE,Dt):r.texImage2D(Pt+qt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Dt);return xt}const Z={};Z[r.TEXTURE_2D]=Mt(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=Mt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=Mt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=Mt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),V(r.DEPTH_TEST),d.setFunc(Yr),Yt(!1),pe(O_),V(r.CULL_FACE),Qt(Ea);function V(J){x[J]!==!0&&(r.enable(J),x[J]=!0)}function ft(J){x[J]!==!1&&(r.disable(J),x[J]=!1)}function St(J,Pt){return S[J]!==Pt?(r.bindFramebuffer(J,Pt),S[J]=Pt,J===r.DRAW_FRAMEBUFFER&&(S[r.FRAMEBUFFER]=Pt),J===r.FRAMEBUFFER&&(S[r.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Nt(J,Pt){let Ut=M,kt=!1;if(J){Ut=g.get(Pt),Ut===void 0&&(Ut=[],g.set(Pt,Ut));const Dt=J.textures;if(Ut.length!==Dt.length||Ut[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,qt=Dt.length;xt<qt;xt++)Ut[xt]=r.COLOR_ATTACHMENT0+xt;Ut.length=Dt.length,kt=!0}}else Ut[0]!==r.BACK&&(Ut[0]=r.BACK,kt=!0);kt&&r.drawBuffers(Ut)}function wt(J){return b!==J?(r.useProgram(J),b=J,!0):!1}const Gt={[Bs]:r.FUNC_ADD,[EM]:r.FUNC_SUBTRACT,[TM]:r.FUNC_REVERSE_SUBTRACT};Gt[AM]=r.MIN,Gt[RM]=r.MAX;const Ot={[CM]:r.ZERO,[wM]:r.ONE,[DM]:r.SRC_COLOR,[Eh]:r.SRC_ALPHA,[FM]:r.SRC_ALPHA_SATURATE,[OM]:r.DST_COLOR,[UM]:r.DST_ALPHA,[NM]:r.ONE_MINUS_SRC_COLOR,[Th]:r.ONE_MINUS_SRC_ALPHA,[PM]:r.ONE_MINUS_DST_COLOR,[LM]:r.ONE_MINUS_DST_ALPHA,[IM]:r.CONSTANT_COLOR,[BM]:r.ONE_MINUS_CONSTANT_COLOR,[zM]:r.CONSTANT_ALPHA,[HM]:r.ONE_MINUS_CONSTANT_ALPHA};function Qt(J,Pt,Ut,kt,Dt,xt,qt,ce,ze,Ne){if(J===Ea){R===!0&&(ft(r.BLEND),R=!1);return}if(R===!1&&(V(r.BLEND),R=!0),J!==bM){if(J!==_||Ne!==O){if((v!==Bs||N!==Bs)&&(r.blendEquation(r.FUNC_ADD),v=Bs,N=Bs),Ne)switch(J){case Wr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case P_:r.blendFunc(r.ONE,r.ONE);break;case F_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case I_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ue("WebGLState: Invalid blending: ",J);break}else switch(J){case Wr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case P_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case F_:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case I_:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",J);break}A=null,D=null,G=null,B=null,z.set(0,0,0),E=0,_=J,O=Ne}return}Dt=Dt||Pt,xt=xt||Ut,qt=qt||kt,(Pt!==v||Dt!==N)&&(r.blendEquationSeparate(Gt[Pt],Gt[Dt]),v=Pt,N=Dt),(Ut!==A||kt!==D||xt!==G||qt!==B)&&(r.blendFuncSeparate(Ot[Ut],Ot[kt],Ot[xt],Ot[qt]),A=Ut,D=kt,G=xt,B=qt),(ce.equals(z)===!1||ze!==E)&&(r.blendColor(ce.r,ce.g,ce.b,ze),z.copy(ce),E=ze),_=J,O=!1}function ae(J,Pt){J.side===Xi?ft(r.CULL_FACE):V(r.CULL_FACE);let Ut=J.side===Kn;Pt&&(Ut=!Ut),Yt(Ut),J.blending===Wr&&J.transparent===!1?Qt(Ea):Qt(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),d.setFunc(J.depthFunc),d.setTest(J.depthTest),d.setMask(J.depthWrite),c.setMask(J.colorWrite);const kt=J.stencilWrite;p.setTest(kt),kt&&(p.setMask(J.stencilWriteMask),p.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),p.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),Te(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?V(r.SAMPLE_ALPHA_TO_COVERAGE):ft(r.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(J){rt!==J&&(J?r.frontFace(r.CW):r.frontFace(r.CCW),rt=J)}function pe(J){J!==SM?(V(r.CULL_FACE),J!==H&&(J===O_?r.cullFace(r.BACK):J===yM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ft(r.CULL_FACE),H=J}function j(J){J!==q&&(U&&r.lineWidth(J),q=J)}function Te(J,Pt,Ut){J?(V(r.POLYGON_OFFSET_FILL),(Y!==Pt||at!==Ut)&&(Y=Pt,at=Ut,d.getReversed()&&(Pt=-Pt),r.polygonOffset(Pt,Ut))):ft(r.POLYGON_OFFSET_FILL)}function me(J){J?V(r.SCISSOR_TEST):ft(r.SCISSOR_TEST)}function Ae(J){J===void 0&&(J=r.TEXTURE0+tt-1),nt!==J&&(r.activeTexture(J),nt=J)}function Xt(J,Pt,Ut){Ut===void 0&&(nt===null?Ut=r.TEXTURE0+tt-1:Ut=nt);let kt=gt[Ut];kt===void 0&&(kt={type:void 0,texture:void 0},gt[Ut]=kt),(kt.type!==J||kt.texture!==Pt)&&(nt!==Ut&&(r.activeTexture(Ut),nt=Ut),r.bindTexture(J,Pt||Z[J]),kt.type=J,kt.texture=Pt)}function P(){const J=gt[nt];J!==void 0&&J.type!==void 0&&(r.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(J){Ue("WebGLState:",J)}}function $(){try{r.compressedTexImage3D(...arguments)}catch(J){Ue("WebGLState:",J)}}function yt(){try{r.texSubImage2D(...arguments)}catch(J){Ue("WebGLState:",J)}}function At(){try{r.texSubImage3D(...arguments)}catch(J){Ue("WebGLState:",J)}}function mt(){try{r.compressedTexSubImage2D(...arguments)}catch(J){Ue("WebGLState:",J)}}function jt(){try{r.compressedTexSubImage3D(...arguments)}catch(J){Ue("WebGLState:",J)}}function Lt(){try{r.texStorage2D(...arguments)}catch(J){Ue("WebGLState:",J)}}function te(){try{r.texStorage3D(...arguments)}catch(J){Ue("WebGLState:",J)}}function ee(){try{r.texImage2D(...arguments)}catch(J){Ue("WebGLState:",J)}}function Ct(){try{r.texImage3D(...arguments)}catch(J){Ue("WebGLState:",J)}}function Rt(J){et.equals(J)===!1&&(r.scissor(J.x,J.y,J.z,J.w),et.copy(J))}function Ht(J){pt.equals(J)===!1&&(r.viewport(J.x,J.y,J.z,J.w),pt.copy(J))}function zt(J,Pt){let Ut=h.get(Pt);Ut===void 0&&(Ut=new WeakMap,h.set(Pt,Ut));let kt=Ut.get(J);kt===void 0&&(kt=r.getUniformBlockIndex(Pt,J.name),Ut.set(J,kt))}function Vt(J,Pt){const kt=h.get(Pt).get(J);m.get(Pt)!==kt&&(r.uniformBlockBinding(Pt,kt,J.__bindingPointIndex),m.set(Pt,kt))}function ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),x={},nt=null,gt={},S={},g=new WeakMap,M=[],b=null,R=!1,_=null,v=null,A=null,D=null,N=null,G=null,B=null,z=new ye(0,0,0),E=0,O=!1,rt=null,H=null,q=null,Y=null,at=null,et.set(0,0,r.canvas.width,r.canvas.height),pt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:V,disable:ft,bindFramebuffer:St,drawBuffers:Nt,useProgram:wt,setBlending:Qt,setMaterial:ae,setFlipSided:Yt,setCullFace:pe,setLineWidth:j,setPolygonOffset:Te,setScissorTest:me,activeTexture:Ae,bindTexture:Xt,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:$,texImage2D:ee,texImage3D:Ct,updateUBOMapping:zt,uniformBlockBinding:Vt,texStorage2D:Lt,texStorage3D:te,texSubImage2D:yt,texSubImage3D:At,compressedTexSubImage2D:mt,compressedTexSubImage3D:jt,scissor:Rt,viewport:Ht,reset:ge}}function wR(r,t,i,s,l,c,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ee,x=new WeakMap;let S;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,T){return M?new OffscreenCanvas(P,T):pu("canvas")}function R(P,T,$){let yt=1;const At=Xt(P);if((At.width>$||At.height>$)&&(yt=$/Math.max(At.width,At.height)),yt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const mt=Math.floor(yt*At.width),jt=Math.floor(yt*At.height);S===void 0&&(S=b(mt,jt));const Lt=T?b(mt,jt):S;return Lt.width=mt,Lt.height=jt,Lt.getContext("2d").drawImage(P,0,0,mt,jt),le("WebGLRenderer: Texture has been resized from ("+At.width+"x"+At.height+") to ("+mt+"x"+jt+")."),Lt}else return"data"in P&&le("WebGLRenderer: Image in DataTexture is too big ("+At.width+"x"+At.height+")."),P;return P}function _(P){return P.generateMipmaps}function v(P){r.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(P,T,$,yt,At=!1){if(P!==null){if(r[P]!==void 0)return r[P];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let mt=T;if(T===r.RED&&($===r.FLOAT&&(mt=r.R32F),$===r.HALF_FLOAT&&(mt=r.R16F),$===r.UNSIGNED_BYTE&&(mt=r.R8)),T===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(mt=r.R8UI),$===r.UNSIGNED_SHORT&&(mt=r.R16UI),$===r.UNSIGNED_INT&&(mt=r.R32UI),$===r.BYTE&&(mt=r.R8I),$===r.SHORT&&(mt=r.R16I),$===r.INT&&(mt=r.R32I)),T===r.RG&&($===r.FLOAT&&(mt=r.RG32F),$===r.HALF_FLOAT&&(mt=r.RG16F),$===r.UNSIGNED_BYTE&&(mt=r.RG8)),T===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(mt=r.RG8UI),$===r.UNSIGNED_SHORT&&(mt=r.RG16UI),$===r.UNSIGNED_INT&&(mt=r.RG32UI),$===r.BYTE&&(mt=r.RG8I),$===r.SHORT&&(mt=r.RG16I),$===r.INT&&(mt=r.RG32I)),T===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(mt=r.RGB8UI),$===r.UNSIGNED_SHORT&&(mt=r.RGB16UI),$===r.UNSIGNED_INT&&(mt=r.RGB32UI),$===r.BYTE&&(mt=r.RGB8I),$===r.SHORT&&(mt=r.RGB16I),$===r.INT&&(mt=r.RGB32I)),T===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(mt=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(mt=r.RGBA16UI),$===r.UNSIGNED_INT&&(mt=r.RGBA32UI),$===r.BYTE&&(mt=r.RGBA8I),$===r.SHORT&&(mt=r.RGBA16I),$===r.INT&&(mt=r.RGBA32I)),T===r.RGB&&($===r.UNSIGNED_INT_5_9_9_9_REV&&(mt=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(mt=r.R11F_G11F_B10F)),T===r.RGBA){const jt=At?hu:Le.getTransfer(yt);$===r.FLOAT&&(mt=r.RGBA32F),$===r.HALF_FLOAT&&(mt=r.RGBA16F),$===r.UNSIGNED_BYTE&&(mt=jt===Ve?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(mt=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(mt=r.RGB5_A1)}return(mt===r.R16F||mt===r.R32F||mt===r.RG16F||mt===r.RG32F||mt===r.RGBA16F||mt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function N(P,T){let $;return P?T===null||T===Ki||T===fl?$=r.DEPTH24_STENCIL8:T===ji?$=r.DEPTH32F_STENCIL8:T===ul&&($=r.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ki||T===fl?$=r.DEPTH_COMPONENT24:T===ji?$=r.DEPTH_COMPONENT32F:T===ul&&($=r.DEPTH_COMPONENT16),$}function G(P,T){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==Rn&&P.minFilter!==On?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function B(P){const T=P.target;T.removeEventListener("dispose",B),E(T),T.isVideoTexture&&x.delete(T)}function z(P){const T=P.target;T.removeEventListener("dispose",z),rt(T)}function E(P){const T=s.get(P);if(T.__webglInit===void 0)return;const $=P.source,yt=g.get($);if(yt){const At=yt[T.__cacheKey];At.usedTimes--,At.usedTimes===0&&O(P),Object.keys(yt).length===0&&g.delete($)}s.remove(P)}function O(P){const T=s.get(P);r.deleteTexture(T.__webglTexture);const $=P.source,yt=g.get($);delete yt[T.__cacheKey],d.memory.textures--}function rt(P){const T=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(T.__webglFramebuffer[yt]))for(let At=0;At<T.__webglFramebuffer[yt].length;At++)r.deleteFramebuffer(T.__webglFramebuffer[yt][At]);else r.deleteFramebuffer(T.__webglFramebuffer[yt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[yt])}else{if(Array.isArray(T.__webglFramebuffer))for(let yt=0;yt<T.__webglFramebuffer.length;yt++)r.deleteFramebuffer(T.__webglFramebuffer[yt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let yt=0;yt<T.__webglColorRenderbuffer.length;yt++)T.__webglColorRenderbuffer[yt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[yt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=P.textures;for(let yt=0,At=$.length;yt<At;yt++){const mt=s.get($[yt]);mt.__webglTexture&&(r.deleteTexture(mt.__webglTexture),d.memory.textures--),s.remove($[yt])}s.remove(P)}let H=0;function q(){H=0}function Y(){const P=H;return P>=l.maxTextures&&le("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),H+=1,P}function at(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function tt(P,T){const $=s.get(P);if(P.isVideoTexture&&me(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&$.__version!==P.version){const yt=P.image;if(yt===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{Z($,P,T);return}}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+T)}function U(P,T){const $=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){Z($,P,T);return}else P.isExternalTexture&&($.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+T)}function I(P,T){const $=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&$.__version!==P.version){Z($,P,T);return}i.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+T)}function X(P,T){const $=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&$.__version!==P.version){V($,P,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+T)}const nt={[Lh]:r.REPEAT,[ba]:r.CLAMP_TO_EDGE,[Oh]:r.MIRRORED_REPEAT},gt={[Rn]:r.NEAREST,[kM]:r.NEAREST_MIPMAP_NEAREST,[Nc]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[Gd]:r.LINEAR_MIPMAP_NEAREST,[Hs]:r.LINEAR_MIPMAP_LINEAR},F={[qM]:r.NEVER,[JM]:r.ALWAYS,[YM]:r.LESS,[Dp]:r.LEQUAL,[ZM]:r.EQUAL,[Np]:r.GEQUAL,[KM]:r.GREATER,[QM]:r.NOTEQUAL};function k(P,T){if(T.type===ji&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===On||T.magFilter===Gd||T.magFilter===Nc||T.magFilter===Hs||T.minFilter===On||T.minFilter===Gd||T.minFilter===Nc||T.minFilter===Hs)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,nt[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,nt[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,nt[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,gt[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,gt[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Rn||T.minFilter!==Nc&&T.minFilter!==Hs||T.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function et(P,T){let $=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",B));const yt=T.source;let At=g.get(yt);At===void 0&&(At={},g.set(yt,At));const mt=at(T);if(mt!==P.__cacheKey){At[mt]===void 0&&(At[mt]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,$=!0),At[mt].usedTimes++;const jt=At[P.__cacheKey];jt!==void 0&&(At[P.__cacheKey].usedTimes--,jt.usedTimes===0&&O(T)),P.__cacheKey=mt,P.__webglTexture=At[mt].texture}return $}function pt(P,T,$){return Math.floor(Math.floor(P/$)/T)}function Mt(P,T,$,yt){const mt=P.updateRanges;if(mt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,$,yt,T.data);else{mt.sort((Ct,Rt)=>Ct.start-Rt.start);let jt=0;for(let Ct=1;Ct<mt.length;Ct++){const Rt=mt[jt],Ht=mt[Ct],zt=Rt.start+Rt.count,Vt=pt(Ht.start,T.width,4),ge=pt(Rt.start,T.width,4);Ht.start<=zt+1&&Vt===ge&&pt(Ht.start+Ht.count-1,T.width,4)===Vt?Rt.count=Math.max(Rt.count,Ht.start+Ht.count-Rt.start):(++jt,mt[jt]=Ht)}mt.length=jt+1;const Lt=r.getParameter(r.UNPACK_ROW_LENGTH),te=r.getParameter(r.UNPACK_SKIP_PIXELS),ee=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Ct=0,Rt=mt.length;Ct<Rt;Ct++){const Ht=mt[Ct],zt=Math.floor(Ht.start/4),Vt=Math.ceil(Ht.count/4),ge=zt%T.width,J=Math.floor(zt/T.width),Pt=Vt,Ut=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ge),r.pixelStorei(r.UNPACK_SKIP_ROWS,J),i.texSubImage2D(r.TEXTURE_2D,0,ge,J,Pt,Ut,$,yt,T.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Lt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,te),r.pixelStorei(r.UNPACK_SKIP_ROWS,ee)}}function Z(P,T,$){let yt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(yt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(yt=r.TEXTURE_3D);const At=et(P,T),mt=T.source;i.bindTexture(yt,P.__webglTexture,r.TEXTURE0+$);const jt=s.get(mt);if(mt.version!==jt.__version||At===!0){i.activeTexture(r.TEXTURE0+$);const Lt=Le.getPrimaries(Le.workingColorSpace),te=T.colorSpace===ls?null:Le.getPrimaries(T.colorSpace),ee=T.colorSpace===ls||Lt===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Ct=R(T.image,!1,l.maxTextureSize);Ct=Ae(T,Ct);const Rt=c.convert(T.format,T.colorSpace),Ht=c.convert(T.type);let zt=D(T.internalFormat,Rt,Ht,T.colorSpace,T.isVideoTexture);k(yt,T);let Vt;const ge=T.mipmaps,J=T.isVideoTexture!==!0,Pt=jt.__version===void 0||At===!0,Ut=mt.dataReady,kt=G(T,Ct);if(T.isDepthTexture)zt=N(T.format===Gs,T.type),Pt&&(J?i.texStorage2D(r.TEXTURE_2D,1,zt,Ct.width,Ct.height):i.texImage2D(r.TEXTURE_2D,0,zt,Ct.width,Ct.height,0,Rt,Ht,null));else if(T.isDataTexture)if(ge.length>0){J&&Pt&&i.texStorage2D(r.TEXTURE_2D,kt,zt,ge[0].width,ge[0].height);for(let Dt=0,xt=ge.length;Dt<xt;Dt++)Vt=ge[Dt],J?Ut&&i.texSubImage2D(r.TEXTURE_2D,Dt,0,0,Vt.width,Vt.height,Rt,Ht,Vt.data):i.texImage2D(r.TEXTURE_2D,Dt,zt,Vt.width,Vt.height,0,Rt,Ht,Vt.data);T.generateMipmaps=!1}else J?(Pt&&i.texStorage2D(r.TEXTURE_2D,kt,zt,Ct.width,Ct.height),Ut&&Mt(T,Ct,Rt,Ht)):i.texImage2D(r.TEXTURE_2D,0,zt,Ct.width,Ct.height,0,Rt,Ht,Ct.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){J&&Pt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,kt,zt,ge[0].width,ge[0].height,Ct.depth);for(let Dt=0,xt=ge.length;Dt<xt;Dt++)if(Vt=ge[Dt],T.format!==Li)if(Rt!==null)if(J){if(Ut)if(T.layerUpdates.size>0){const qt=pv(Vt.width,Vt.height,T.format,T.type);for(const ce of T.layerUpdates){const ze=Vt.data.subarray(ce*qt/Vt.data.BYTES_PER_ELEMENT,(ce+1)*qt/Vt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Dt,0,0,ce,Vt.width,Vt.height,1,Rt,ze)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Dt,0,0,0,Vt.width,Vt.height,Ct.depth,Rt,Vt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Dt,zt,Vt.width,Vt.height,Ct.depth,0,Vt.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?Ut&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Dt,0,0,0,Vt.width,Vt.height,Ct.depth,Rt,Ht,Vt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Dt,zt,Vt.width,Vt.height,Ct.depth,0,Rt,Ht,Vt.data)}else{J&&Pt&&i.texStorage2D(r.TEXTURE_2D,kt,zt,ge[0].width,ge[0].height);for(let Dt=0,xt=ge.length;Dt<xt;Dt++)Vt=ge[Dt],T.format!==Li?Rt!==null?J?Ut&&i.compressedTexSubImage2D(r.TEXTURE_2D,Dt,0,0,Vt.width,Vt.height,Rt,Vt.data):i.compressedTexImage2D(r.TEXTURE_2D,Dt,zt,Vt.width,Vt.height,0,Vt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?Ut&&i.texSubImage2D(r.TEXTURE_2D,Dt,0,0,Vt.width,Vt.height,Rt,Ht,Vt.data):i.texImage2D(r.TEXTURE_2D,Dt,zt,Vt.width,Vt.height,0,Rt,Ht,Vt.data)}else if(T.isDataArrayTexture)if(J){if(Pt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,kt,zt,Ct.width,Ct.height,Ct.depth),Ut)if(T.layerUpdates.size>0){const Dt=pv(Ct.width,Ct.height,T.format,T.type);for(const xt of T.layerUpdates){const qt=Ct.data.subarray(xt*Dt/Ct.data.BYTES_PER_ELEMENT,(xt+1)*Dt/Ct.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,Ct.width,Ct.height,1,Rt,Ht,qt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,Rt,Ht,Ct.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,Ct.width,Ct.height,Ct.depth,0,Rt,Ht,Ct.data);else if(T.isData3DTexture)J?(Pt&&i.texStorage3D(r.TEXTURE_3D,kt,zt,Ct.width,Ct.height,Ct.depth),Ut&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,Rt,Ht,Ct.data)):i.texImage3D(r.TEXTURE_3D,0,zt,Ct.width,Ct.height,Ct.depth,0,Rt,Ht,Ct.data);else if(T.isFramebufferTexture){if(Pt)if(J)i.texStorage2D(r.TEXTURE_2D,kt,zt,Ct.width,Ct.height);else{let Dt=Ct.width,xt=Ct.height;for(let qt=0;qt<kt;qt++)i.texImage2D(r.TEXTURE_2D,qt,zt,Dt,xt,0,Rt,Ht,null),Dt>>=1,xt>>=1}}else if(ge.length>0){if(J&&Pt){const Dt=Xt(ge[0]);i.texStorage2D(r.TEXTURE_2D,kt,zt,Dt.width,Dt.height)}for(let Dt=0,xt=ge.length;Dt<xt;Dt++)Vt=ge[Dt],J?Ut&&i.texSubImage2D(r.TEXTURE_2D,Dt,0,0,Rt,Ht,Vt):i.texImage2D(r.TEXTURE_2D,Dt,zt,Rt,Ht,Vt);T.generateMipmaps=!1}else if(J){if(Pt){const Dt=Xt(Ct);i.texStorage2D(r.TEXTURE_2D,kt,zt,Dt.width,Dt.height)}Ut&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Rt,Ht,Ct)}else i.texImage2D(r.TEXTURE_2D,0,zt,Rt,Ht,Ct);_(T)&&v(yt),jt.__version=mt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function V(P,T,$){if(T.image.length!==6)return;const yt=et(P,T),At=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+$);const mt=s.get(At);if(At.version!==mt.__version||yt===!0){i.activeTexture(r.TEXTURE0+$);const jt=Le.getPrimaries(Le.workingColorSpace),Lt=T.colorSpace===ls?null:Le.getPrimaries(T.colorSpace),te=T.colorSpace===ls||jt===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ee=T.isCompressedTexture||T.image[0].isCompressedTexture,Ct=T.image[0]&&T.image[0].isDataTexture,Rt=[];for(let xt=0;xt<6;xt++)!ee&&!Ct?Rt[xt]=R(T.image[xt],!0,l.maxCubemapSize):Rt[xt]=Ct?T.image[xt].image:T.image[xt],Rt[xt]=Ae(T,Rt[xt]);const Ht=Rt[0],zt=c.convert(T.format,T.colorSpace),Vt=c.convert(T.type),ge=D(T.internalFormat,zt,Vt,T.colorSpace),J=T.isVideoTexture!==!0,Pt=mt.__version===void 0||yt===!0,Ut=At.dataReady;let kt=G(T,Ht);k(r.TEXTURE_CUBE_MAP,T);let Dt;if(ee){J&&Pt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,kt,ge,Ht.width,Ht.height);for(let xt=0;xt<6;xt++){Dt=Rt[xt].mipmaps;for(let qt=0;qt<Dt.length;qt++){const ce=Dt[qt];T.format!==Li?zt!==null?J?Ut&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt,0,0,ce.width,ce.height,zt,ce.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt,ge,ce.width,ce.height,0,ce.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt,0,0,ce.width,ce.height,zt,Vt,ce.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt,ge,ce.width,ce.height,0,zt,Vt,ce.data)}}}else{if(Dt=T.mipmaps,J&&Pt){Dt.length>0&&kt++;const xt=Xt(Rt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,kt,ge,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Ct){J?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Rt[xt].width,Rt[xt].height,zt,Vt,Rt[xt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ge,Rt[xt].width,Rt[xt].height,0,zt,Vt,Rt[xt].data);for(let qt=0;qt<Dt.length;qt++){const ze=Dt[qt].image[xt].image;J?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt+1,0,0,ze.width,ze.height,zt,Vt,ze.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt+1,ge,ze.width,ze.height,0,zt,Vt,ze.data)}}else{J?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,zt,Vt,Rt[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ge,zt,Vt,Rt[xt]);for(let qt=0;qt<Dt.length;qt++){const ce=Dt[qt];J?Ut&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt+1,0,0,zt,Vt,ce.image[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,qt+1,ge,zt,Vt,ce.image[xt])}}}_(T)&&v(r.TEXTURE_CUBE_MAP),mt.__version=At.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ft(P,T,$,yt,At,mt){const jt=c.convert($.format,$.colorSpace),Lt=c.convert($.type),te=D($.internalFormat,jt,Lt,$.colorSpace),ee=s.get(T),Ct=s.get($);if(Ct.__renderTarget=T,!ee.__hasExternalTextures){const Rt=Math.max(1,T.width>>mt),Ht=Math.max(1,T.height>>mt);At===r.TEXTURE_3D||At===r.TEXTURE_2D_ARRAY?i.texImage3D(At,mt,te,Rt,Ht,T.depth,0,jt,Lt,null):i.texImage2D(At,mt,te,Rt,Ht,0,jt,Lt,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),Te(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,yt,At,Ct.__webglTexture,0,j(T)):(At===r.TEXTURE_2D||At>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,yt,At,Ct.__webglTexture,mt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function St(P,T,$){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){const yt=T.depthTexture,At=yt&&yt.isDepthTexture?yt.type:null,mt=N(T.stencilBuffer,At),jt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Te(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(T),mt,T.width,T.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(T),mt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,mt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,jt,r.RENDERBUFFER,P)}else{const yt=T.textures;for(let At=0;At<yt.length;At++){const mt=yt[At],jt=c.convert(mt.format,mt.colorSpace),Lt=c.convert(mt.type),te=D(mt.internalFormat,jt,Lt,mt.colorSpace);Te(T)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(T),te,T.width,T.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(T),te,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,te,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Nt(P,T,$){const yt=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const At=s.get(T.depthTexture);if(At.__renderTarget=T,(!At.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),yt){if(At.__webglInit===void 0&&(At.__webglInit=!0,T.depthTexture.addEventListener("dispose",B)),At.__webglTexture===void 0){At.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,At.__webglTexture),k(r.TEXTURE_CUBE_MAP,T.depthTexture);const ee=c.convert(T.depthTexture.format),Ct=c.convert(T.depthTexture.type);let Rt;T.depthTexture.format===Ra?Rt=r.DEPTH_COMPONENT24:T.depthTexture.format===Gs&&(Rt=r.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,Rt,T.width,T.height,0,ee,Ct,null)}}else tt(T.depthTexture,0);const mt=At.__webglTexture,jt=j(T),Lt=yt?r.TEXTURE_CUBE_MAP_POSITIVE_X+$:r.TEXTURE_2D,te=T.depthTexture.format===Gs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Ra)Te(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,Lt,mt,0,jt):r.framebufferTexture2D(r.FRAMEBUFFER,te,Lt,mt,0);else if(T.depthTexture.format===Gs)Te(T)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,te,Lt,mt,0,jt):r.framebufferTexture2D(r.FRAMEBUFFER,te,Lt,mt,0);else throw new Error("Unknown depthTexture format")}function wt(P){const T=s.get(P),$=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const yt=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),yt){const At=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,yt.removeEventListener("dispose",At)};yt.addEventListener("dispose",At),T.__depthDisposeCallback=At}T.__boundDepthTexture=yt}if(P.depthTexture&&!T.__autoAllocateDepthBuffer)if($)for(let yt=0;yt<6;yt++)Nt(T.__webglFramebuffer[yt],P,yt);else{const yt=P.texture.mipmaps;yt&&yt.length>0?Nt(T.__webglFramebuffer[0],P,0):Nt(T.__webglFramebuffer,P,0)}else if($){T.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[yt]),T.__webglDepthbuffer[yt]===void 0)T.__webglDepthbuffer[yt]=r.createRenderbuffer(),St(T.__webglDepthbuffer[yt],P,!1);else{const At=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer[yt];r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,mt)}}else{const yt=P.texture.mipmaps;if(yt&&yt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),St(T.__webglDepthbuffer,P,!1);else{const At=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,At,r.RENDERBUFFER,mt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(P,T,$){const yt=s.get(P);T!==void 0&&ft(yt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&wt(P)}function Ot(P){const T=P.texture,$=s.get(P),yt=s.get(T);P.addEventListener("dispose",z);const At=P.textures,mt=P.isWebGLCubeRenderTarget===!0,jt=At.length>1;if(jt||(yt.__webglTexture===void 0&&(yt.__webglTexture=r.createTexture()),yt.__version=T.version,d.memory.textures++),mt){$.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[Lt]=[];for(let te=0;te<T.mipmaps.length;te++)$.__webglFramebuffer[Lt][te]=r.createFramebuffer()}else $.__webglFramebuffer[Lt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let Lt=0;Lt<T.mipmaps.length;Lt++)$.__webglFramebuffer[Lt]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(jt)for(let Lt=0,te=At.length;Lt<te;Lt++){const ee=s.get(At[Lt]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),d.memory.textures++)}if(P.samples>0&&Te(P)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Lt=0;Lt<At.length;Lt++){const te=At[Lt];$.__webglColorRenderbuffer[Lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[Lt]);const ee=c.convert(te.format,te.colorSpace),Ct=c.convert(te.type),Rt=D(te.internalFormat,ee,Ct,te.colorSpace,P.isXRRenderTarget===!0),Ht=j(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht,Rt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,$.__webglColorRenderbuffer[Lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),St($.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(mt){i.bindTexture(r.TEXTURE_CUBE_MAP,yt.__webglTexture),k(r.TEXTURE_CUBE_MAP,T);for(let Lt=0;Lt<6;Lt++)if(T.mipmaps&&T.mipmaps.length>0)for(let te=0;te<T.mipmaps.length;te++)ft($.__webglFramebuffer[Lt][te],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,te);else ft($.__webglFramebuffer[Lt],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);_(T)&&v(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Lt=0,te=At.length;Lt<te;Lt++){const ee=At[Lt],Ct=s.get(ee);let Rt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Rt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Rt,Ct.__webglTexture),k(Rt,ee),ft($.__webglFramebuffer,P,ee,r.COLOR_ATTACHMENT0+Lt,Rt,0),_(ee)&&v(Rt)}i.unbindTexture()}else{let Lt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Lt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Lt,yt.__webglTexture),k(Lt,T),T.mipmaps&&T.mipmaps.length>0)for(let te=0;te<T.mipmaps.length;te++)ft($.__webglFramebuffer[te],P,T,r.COLOR_ATTACHMENT0,Lt,te);else ft($.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,Lt,0);_(T)&&v(Lt),i.unbindTexture()}P.depthBuffer&&wt(P)}function Qt(P){const T=P.textures;for(let $=0,yt=T.length;$<yt;$++){const At=T[$];if(_(At)){const mt=A(P),jt=s.get(At).__webglTexture;i.bindTexture(mt,jt),v(mt),i.unbindTexture()}}}const ae=[],Yt=[];function pe(P){if(P.samples>0){if(Te(P)===!1){const T=P.textures,$=P.width,yt=P.height;let At=r.COLOR_BUFFER_BIT;const mt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,jt=s.get(P),Lt=T.length>1;if(Lt)for(let ee=0;ee<T.length;ee++)i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const te=P.texture.mipmaps;te&&te.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let ee=0;ee<T.length;ee++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(At|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(At|=r.STENCIL_BUFFER_BIT)),Lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,jt.__webglColorRenderbuffer[ee]);const Ct=s.get(T[ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ct,0)}r.blitFramebuffer(0,0,$,yt,0,0,$,yt,At,r.NEAREST),m===!0&&(ae.length=0,Yt.length=0,ae.push(r.COLOR_ATTACHMENT0+ee),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ae.push(mt),Yt.push(mt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Yt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Lt)for(let ee=0;ee<T.length;ee++){i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,jt.__webglColorRenderbuffer[ee]);const Ct=s.get(T[ee]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,Ct,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function j(P){return Math.min(l.maxSamples,P.samples)}function Te(P){const T=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function me(P){const T=d.render.frame;x.get(P)!==T&&(x.set(P,T),P.update())}function Ae(P,T){const $=P.colorSpace,yt=P.format,At=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||$!==Qr&&$!==ls&&(Le.getTransfer($)===Ve?(yt!==Li||At!==ci)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",$)),T}function Xt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=q,this.setTexture2D=tt,this.setTexture2DArray=U,this.setTexture3D=I,this.setTextureCube=X,this.rebindTextures=Gt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function DR(r,t){function i(s,l=ls){let c;const d=Le.getTransfer(l);if(s===ci)return r.UNSIGNED_BYTE;if(s===Tp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ap)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ex)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===nx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===$v)return r.BYTE;if(s===tx)return r.SHORT;if(s===ul)return r.UNSIGNED_SHORT;if(s===Ep)return r.INT;if(s===Ki)return r.UNSIGNED_INT;if(s===ji)return r.FLOAT;if(s===Aa)return r.HALF_FLOAT;if(s===ix)return r.ALPHA;if(s===ax)return r.RGB;if(s===Li)return r.RGBA;if(s===Ra)return r.DEPTH_COMPONENT;if(s===Gs)return r.DEPTH_STENCIL;if(s===sx)return r.RED;if(s===Rp)return r.RED_INTEGER;if(s===Kr)return r.RG;if(s===Cp)return r.RG_INTEGER;if(s===wp)return r.RGBA_INTEGER;if(s===lu||s===cu||s===uu||s===fu)if(d===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===lu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===lu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===cu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===uu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===fu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ph||s===Fh||s===Ih||s===Bh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Ph)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Fh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ih)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Bh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zh||s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===Wh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===zh||s===Hh)return d===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Gh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Vh)return c.COMPRESSED_R11_EAC;if(s===kh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Xh)return c.COMPRESSED_RG11_EAC;if(s===Wh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===jh||s===qh||s===Yh||s===Zh||s===Kh||s===Qh||s===Jh||s===$h||s===tp||s===ep||s===np||s===ip||s===ap||s===sp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===jh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===$h)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===tp)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ep)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===np)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ip)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ap)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sp)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===rp||s===op||s===lp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===rp)return d===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===op)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===lp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cp||s===up||s===fp||s===dp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===cp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===up)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===dp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const NR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UR=`
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

}`;class LR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new gx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ji({vertexShader:NR,fragmentShader:UR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qi(new _l(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OR extends $r{constructor(t,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,x=null,S=null,g=null,M=null,b=null;const R=typeof XRWebGLBinding<"u",_=new LR,v={},A=i.getContextAttributes();let D=null,N=null;const G=[],B=[],z=new Ee;let E=null;const O=new li;O.viewport=new an;const rt=new li;rt.viewport=new an;const H=[O,rt],q=new Xb;let Y=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let V=G[Z];return V===void 0&&(V=new Zd,G[Z]=V),V.getTargetRaySpace()},this.getControllerGrip=function(Z){let V=G[Z];return V===void 0&&(V=new Zd,G[Z]=V),V.getGripSpace()},this.getHand=function(Z){let V=G[Z];return V===void 0&&(V=new Zd,G[Z]=V),V.getHandSpace()};function tt(Z){const V=B.indexOf(Z.inputSource);if(V===-1)return;const ft=G[V];ft!==void 0&&(ft.update(Z.inputSource,Z.frame,h||d),ft.dispatchEvent({type:Z.type,data:Z.inputSource}))}function U(){l.removeEventListener("select",tt),l.removeEventListener("selectstart",tt),l.removeEventListener("selectend",tt),l.removeEventListener("squeeze",tt),l.removeEventListener("squeezestart",tt),l.removeEventListener("squeezeend",tt),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",I);for(let Z=0;Z<G.length;Z++){const V=B[Z];V!==null&&(B[Z]=null,G[Z].disconnect(V))}Y=null,at=null,_.reset();for(const Z in v)delete v[Z];t.setRenderTarget(D),M=null,g=null,S=null,l=null,N=null,Mt.stop(),s.isPresenting=!1,t.setPixelRatio(E),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,s.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){p=Z,s.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return S===null&&R&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(Z){if(l=Z,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",tt),l.addEventListener("selectstart",tt),l.addEventListener("selectend",tt),l.addEventListener("squeeze",tt),l.addEventListener("squeezestart",tt),l.addEventListener("squeezeend",tt),l.addEventListener("end",U),l.addEventListener("inputsourceschange",I),A.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(z),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,St=null,Nt=null;A.depth&&(Nt=A.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ft=A.stencil?Gs:Ra,St=A.stencil?fl:Ki);const wt={colorFormat:i.RGBA8,depthFormat:Nt,scaleFactor:c};S=this.getBinding(),g=S.createProjectionLayer(wt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),N=new Zi(g.textureWidth,g.textureHeight,{format:Li,type:ci,depthTexture:new hl(g.textureWidth,g.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ft={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ft),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Zi(M.framebufferWidth,M.framebufferHeight,{format:Li,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Mt.setContext(l),Mt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function I(Z){for(let V=0;V<Z.removed.length;V++){const ft=Z.removed[V],St=B.indexOf(ft);St>=0&&(B[St]=null,G[St].disconnect(ft))}for(let V=0;V<Z.added.length;V++){const ft=Z.added[V];let St=B.indexOf(ft);if(St===-1){for(let wt=0;wt<G.length;wt++)if(wt>=B.length){B.push(ft),St=wt;break}else if(B[wt]===null){B[wt]=ft,St=wt;break}if(St===-1)break}const Nt=G[St];Nt&&Nt.connect(ft)}}const X=new lt,nt=new lt;function gt(Z,V,ft){X.setFromMatrixPosition(V.matrixWorld),nt.setFromMatrixPosition(ft.matrixWorld);const St=X.distanceTo(nt),Nt=V.projectionMatrix.elements,wt=ft.projectionMatrix.elements,Gt=Nt[14]/(Nt[10]-1),Ot=Nt[14]/(Nt[10]+1),Qt=(Nt[9]+1)/Nt[5],ae=(Nt[9]-1)/Nt[5],Yt=(Nt[8]-1)/Nt[0],pe=(wt[8]+1)/wt[0],j=Gt*Yt,Te=Gt*pe,me=St/(-Yt+pe),Ae=me*-Yt;if(V.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ae),Z.translateZ(me),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Nt[10]===-1)Z.projectionMatrix.copy(V.projectionMatrix),Z.projectionMatrixInverse.copy(V.projectionMatrixInverse);else{const Xt=Gt+me,P=Ot+me,T=j-Ae,$=Te+(St-Ae),yt=Qt*Ot/P*Xt,At=ae*Ot/P*Xt;Z.projectionMatrix.makePerspective(T,$,yt,At,Xt,P),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function F(Z,V){V===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(V.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(l===null)return;let V=Z.near,ft=Z.far;_.texture!==null&&(_.depthNear>0&&(V=_.depthNear),_.depthFar>0&&(ft=_.depthFar)),q.near=rt.near=O.near=V,q.far=rt.far=O.far=ft,(Y!==q.near||at!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),Y=q.near,at=q.far),q.layers.mask=Z.layers.mask|6,O.layers.mask=q.layers.mask&-5,rt.layers.mask=q.layers.mask&-3;const St=Z.parent,Nt=q.cameras;F(q,St);for(let wt=0;wt<Nt.length;wt++)F(Nt[wt],St);Nt.length===2?gt(q,O,rt):q.projectionMatrix.copy(O.projectionMatrix),k(Z,q,St)};function k(Z,V,ft){ft===null?Z.matrix.copy(V.matrixWorld):(Z.matrix.copy(ft.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(V.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(V.projectionMatrix),Z.projectionMatrixInverse.copy(V.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=pp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(Z){m=Z,g!==null&&(g.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(q)},this.getCameraTexture=function(Z){return v[Z]};let et=null;function pt(Z,V){if(x=V.getViewerPose(h||d),b=V,x!==null){const ft=x.views;M!==null&&(t.setRenderTargetFramebuffer(N,M.framebuffer),t.setRenderTarget(N));let St=!1;ft.length!==q.cameras.length&&(q.cameras.length=0,St=!0);for(let Ot=0;Ot<ft.length;Ot++){const Qt=ft[Ot];let ae=null;if(M!==null)ae=M.getViewport(Qt);else{const pe=S.getViewSubImage(g,Qt);ae=pe.viewport,Ot===0&&(t.setRenderTargetTextures(N,pe.colorTexture,pe.depthStencilTexture),t.setRenderTarget(N))}let Yt=H[Ot];Yt===void 0&&(Yt=new li,Yt.layers.enable(Ot),Yt.viewport=new an,H[Ot]=Yt),Yt.matrix.fromArray(Qt.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(Qt.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(ae.x,ae.y,ae.width,ae.height),Ot===0&&(q.matrix.copy(Yt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),St===!0&&q.cameras.push(Yt)}const Nt=l.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){S=s.getBinding();const Ot=S.getDepthInformation(ft[0]);Ot&&Ot.isValid&&Ot.texture&&_.init(Ot,l.renderState)}if(Nt&&Nt.includes("camera-access")&&R){t.state.unbindTexture(),S=s.getBinding();for(let Ot=0;Ot<ft.length;Ot++){const Qt=ft[Ot].camera;if(Qt){let ae=v[Qt];ae||(ae=new gx,v[Qt]=ae);const Yt=S.getCameraImage(Qt);ae.sourceTexture=Yt}}}}for(let ft=0;ft<G.length;ft++){const St=B[ft],Nt=G[ft];St!==null&&Nt!==void 0&&Nt.update(St,V,h||d)}et&&et(Z,V),V.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:V}),b=null}const Mt=new yx;Mt.setAnimationLoop(pt),this.setAnimationLoop=function(Z){et=Z},this.dispose=function(){}}}const Fs=new Ca,PR=new Ke;function FR(r,t){function i(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function s(_,v){v.color.getRGB(_.fogColor.value,_x(r)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function l(_,v,A,D,N){v.isMeshBasicMaterial?c(_,v):v.isMeshLambertMaterial?(c(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(_,v),S(_,v)):v.isMeshPhongMaterial?(c(_,v),x(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(_,v),g(_,v),v.isMeshPhysicalMaterial&&M(_,v,N)):v.isMeshMatcapMaterial?(c(_,v),b(_,v)):v.isMeshDepthMaterial?c(_,v):v.isMeshDistanceMaterial?(c(_,v),R(_,v)):v.isMeshNormalMaterial?c(_,v):v.isLineBasicMaterial?(d(_,v),v.isLineDashedMaterial&&p(_,v)):v.isPointsMaterial?m(_,v,A,D):v.isSpriteMaterial?h(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,i(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,i(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,i(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===Kn&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,i(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===Kn&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,i(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,i(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const A=t.get(v),D=A.envMap,N=A.envMapRotation;D&&(_.envMap.value=D,Fs.copy(N),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),_.envMapRotation.value.setFromMatrix4(PR.makeRotationFromEuler(Fs)),_.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,_.aoMapTransform))}function d(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,i(v.map,_.mapTransform))}function p(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function m(_,v,A,D){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*A,_.scale.value=D*.5,v.map&&(_.map.value=v.map,i(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,i(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function h(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,i(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,i(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function x(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function S(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function g(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function M(_,v,A){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Kn&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=A.texture,_.transmissionSamplerSize.value.set(A.width,A.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,_.specularIntensityMapTransform))}function b(_,v){v.matcap&&(_.matcap.value=v.matcap)}function R(_,v){const A=t.get(v).light;_.referencePosition.value.setFromMatrixPosition(A.matrixWorld),_.nearDistance.value=A.shadow.camera.near,_.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function IR(r,t,i,s){let l={},c={},d=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,D){const N=D.program;s.uniformBlockBinding(A,N)}function h(A,D){let N=l[A.id];N===void 0&&(b(A),N=x(A),l[A.id]=N,A.addEventListener("dispose",_));const G=D.program;s.updateUBOMapping(A,G);const B=t.render.frame;c[A.id]!==B&&(g(A),c[A.id]=B)}function x(A){const D=S();A.__bindingPointIndex=D;const N=r.createBuffer(),G=A.__size,B=A.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,G,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,N),N}function S(){for(let A=0;A<p;A++)if(d.indexOf(A)===-1)return d.push(A),A;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const D=l[A.id],N=A.uniforms,G=A.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let B=0,z=N.length;B<z;B++){const E=Array.isArray(N[B])?N[B]:[N[B]];for(let O=0,rt=E.length;O<rt;O++){const H=E[O];if(M(H,B,O,G)===!0){const q=H.__offset,Y=Array.isArray(H.value)?H.value:[H.value];let at=0;for(let tt=0;tt<Y.length;tt++){const U=Y[tt],I=R(U);typeof U=="number"||typeof U=="boolean"?(H.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,q+at,H.__data)):U.isMatrix3?(H.__data[0]=U.elements[0],H.__data[1]=U.elements[1],H.__data[2]=U.elements[2],H.__data[3]=0,H.__data[4]=U.elements[3],H.__data[5]=U.elements[4],H.__data[6]=U.elements[5],H.__data[7]=0,H.__data[8]=U.elements[6],H.__data[9]=U.elements[7],H.__data[10]=U.elements[8],H.__data[11]=0):(U.toArray(H.__data,at),at+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(A,D,N,G){const B=A.value,z=D+"_"+N;if(G[z]===void 0)return typeof B=="number"||typeof B=="boolean"?G[z]=B:G[z]=B.clone(),!0;{const E=G[z];if(typeof B=="number"||typeof B=="boolean"){if(E!==B)return G[z]=B,!0}else if(E.equals(B)===!1)return E.copy(B),!0}return!1}function b(A){const D=A.uniforms;let N=0;const G=16;for(let z=0,E=D.length;z<E;z++){const O=Array.isArray(D[z])?D[z]:[D[z]];for(let rt=0,H=O.length;rt<H;rt++){const q=O[rt],Y=Array.isArray(q.value)?q.value:[q.value];for(let at=0,tt=Y.length;at<tt;at++){const U=Y[at],I=R(U),X=N%G,nt=X%I.boundary,gt=X+nt;N+=nt,gt!==0&&G-gt<I.storage&&(N+=G-gt),q.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=N,N+=I.storage}}}const B=N%G;return B>0&&(N+=G-B),A.__size=N,A.__cache={},this}function R(A){const D={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(D.boundary=4,D.storage=4):A.isVector2?(D.boundary=8,D.storage=8):A.isVector3||A.isColor?(D.boundary=16,D.storage=12):A.isVector4?(D.boundary=16,D.storage=16):A.isMatrix3?(D.boundary=48,D.storage=48):A.isMatrix4?(D.boundary=64,D.storage=64):A.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):le("WebGLRenderer: Unsupported uniform value type.",A),D}function _(A){const D=A.target;D.removeEventListener("dispose",_);const N=d.indexOf(D.__bindingPointIndex);d.splice(N,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function v(){for(const A in l)r.deleteBuffer(l[A]);d=[],l={},c={}}return{bind:m,update:h,dispose:v}}const BR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function zR(){return Vi===null&&(Vi=new Tb(BR,16,16,Kr,Aa),Vi.name="DFG_LUT",Vi.minFilter=On,Vi.magFilter=On,Vi.wrapS=ba,Vi.wrapT=ba,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class HR{constructor(t={}){const{canvas:i=tb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:M=ci}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=d;const R=M,_=new Set([wp,Cp,Rp]),v=new Set([ci,Ki,ul,fl,Tp,Ap]),A=new Uint32Array(4),D=new Int32Array(4);let N=null,G=null;const B=[],z=[];let E=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let rt=!1;this._outputColorSpace=Si;let H=0,q=0,Y=null,at=-1,tt=null;const U=new an,I=new an;let X=null;const nt=new ye(0);let gt=0,F=i.width,k=i.height,et=1,pt=null,Mt=null;const Z=new an(0,0,F,k),V=new an(0,0,F,k);let ft=!1;const St=new Fp;let Nt=!1,wt=!1;const Gt=new Ke,Ot=new lt,Qt=new an,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function pe(){return Y===null?et:1}let j=s;function Te(w,Q){return i.getContext(w,Q)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Mp}`),i.addEventListener("webglcontextlost",qt,!1),i.addEventListener("webglcontextrestored",ce,!1),i.addEventListener("webglcontextcreationerror",ze,!1),j===null){const Q="webgl2";if(j=Te(Q,w),j===null)throw Te(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ue("WebGLRenderer: "+w.message),w}let me,Ae,Xt,P,T,$,yt,At,mt,jt,Lt,te,ee,Ct,Rt,Ht,zt,Vt,ge,J,Pt,Ut,kt;function Dt(){me=new HT(j),me.init(),Pt=new DR(j,me),Ae=new UT(j,me,t,Pt),Xt=new CR(j,me),Ae.reversedDepthBuffer&&g&&Xt.buffers.depth.setReversed(!0),P=new kT(j),T=new pR,$=new wR(j,me,Xt,T,Ae,Pt,P),yt=new zT(O),At=new Yb(j),Ut=new DT(j,At),mt=new GT(j,At,P,Ut),jt=new WT(j,mt,At,Ut,P),Vt=new XT(j,Ae,$),Rt=new LT(T),Lt=new hR(O,yt,me,Ae,Ut,Rt),te=new FR(O,T),ee=new gR,Ct=new MR(me),zt=new wT(O,yt,Xt,jt,b,m),Ht=new RR(O,jt,Ae),kt=new IR(j,P,Ae,Xt),ge=new NT(j,me,P),J=new VT(j,me,P),P.programs=Lt.programs,O.capabilities=Ae,O.extensions=me,O.properties=T,O.renderLists=ee,O.shadowMap=Ht,O.state=Xt,O.info=P}Dt(),R!==ci&&(E=new qT(R,i.width,i.height,l,c));const xt=new OR(O,j);this.xr=xt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const w=me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(w){w!==void 0&&(et=w,this.setSize(F,k,!1))},this.getSize=function(w){return w.set(F,k)},this.setSize=function(w,Q,_t=!0){if(xt.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}F=w,k=Q,i.width=Math.floor(w*et),i.height=Math.floor(Q*et),_t===!0&&(i.style.width=w+"px",i.style.height=Q+"px"),E!==null&&E.setSize(i.width,i.height),this.setViewport(0,0,w,Q)},this.getDrawingBufferSize=function(w){return w.set(F*et,k*et).floor()},this.setDrawingBufferSize=function(w,Q,_t){F=w,k=Q,et=_t,i.width=Math.floor(w*_t),i.height=Math.floor(Q*_t),this.setViewport(0,0,w,Q)},this.setEffects=function(w){if(R===ci){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Q=0;Q<w.length;Q++)if(w[Q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(Z)},this.setViewport=function(w,Q,_t,dt){w.isVector4?Z.set(w.x,w.y,w.z,w.w):Z.set(w,Q,_t,dt),Xt.viewport(U.copy(Z).multiplyScalar(et).round())},this.getScissor=function(w){return w.copy(V)},this.setScissor=function(w,Q,_t,dt){w.isVector4?V.set(w.x,w.y,w.z,w.w):V.set(w,Q,_t,dt),Xt.scissor(I.copy(V).multiplyScalar(et).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(w){Xt.setScissorTest(ft=w)},this.setOpaqueSort=function(w){pt=w},this.setTransparentSort=function(w){Mt=w},this.getClearColor=function(w){return w.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(w=!0,Q=!0,_t=!0){let dt=0;if(w){let ot=!1;if(Y!==null){const Ft=Y.texture.format;ot=_.has(Ft)}if(ot){const Ft=Y.texture.type,Wt=v.has(Ft),It=zt.getClearColor(),$t=zt.getClearAlpha(),ie=It.r,oe=It.g,fe=It.b;Wt?(A[0]=ie,A[1]=oe,A[2]=fe,A[3]=$t,j.clearBufferuiv(j.COLOR,0,A)):(D[0]=ie,D[1]=oe,D[2]=fe,D[3]=$t,j.clearBufferiv(j.COLOR,0,D))}else dt|=j.COLOR_BUFFER_BIT}Q&&(dt|=j.DEPTH_BUFFER_BIT),_t&&(dt|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),dt!==0&&j.clear(dt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",qt,!1),i.removeEventListener("webglcontextrestored",ce,!1),i.removeEventListener("webglcontextcreationerror",ze,!1),zt.dispose(),ee.dispose(),Ct.dispose(),T.dispose(),yt.dispose(),jt.dispose(),Ut.dispose(),kt.dispose(),Lt.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Ws),xt.removeEventListener("sessionend",js),Pi.stop()};function qt(w){w.preventDefault(),mu("WebGLRenderer: Context Lost."),rt=!0}function ce(){mu("WebGLRenderer: Context Restored."),rt=!1;const w=P.autoReset,Q=Ht.enabled,_t=Ht.autoUpdate,dt=Ht.needsUpdate,ot=Ht.type;Dt(),P.autoReset=w,Ht.enabled=Q,Ht.autoUpdate=_t,Ht.needsUpdate=dt,Ht.type=ot}function ze(w){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ne(w){const Q=w.target;Q.removeEventListener("dispose",Ne),In(Q)}function In(w){Mi(w),T.remove(w)}function Mi(w){const Q=T.get(w).programs;Q!==void 0&&(Q.forEach(function(_t){Lt.releaseProgram(_t)}),w.isShaderMaterial&&Lt.releaseShaderCache(w))}this.renderBufferDirect=function(w,Q,_t,dt,ot,Ft){Q===null&&(Q=ae);const Wt=ot.isMesh&&ot.matrixWorld.determinant()<0,It=yl(w,Q,_t,dt,ot);Xt.setMaterial(dt,Wt);let $t=_t.index,ie=1;if(dt.wireframe===!0){if($t=mt.getWireframeAttribute(_t),$t===void 0)return;ie=2}const oe=_t.drawRange,fe=_t.attributes.position;let Zt=oe.start*ie,_e=(oe.start+oe.count)*ie;Ft!==null&&(Zt=Math.max(Zt,Ft.start*ie),_e=Math.min(_e,(Ft.start+Ft.count)*ie)),$t!==null?(Zt=Math.max(Zt,0),_e=Math.min(_e,$t.count)):fe!=null&&(Zt=Math.max(Zt,0),_e=Math.min(_e,fe.count));const Qe=_e-Zt;if(Qe<0||Qe===1/0)return;Ut.setup(ot,dt,It,_t,$t);let Je,Oe=ge;if($t!==null&&(Je=At.get($t),Oe=J,Oe.setIndex(Je)),ot.isMesh)dt.wireframe===!0?(Xt.setLineWidth(dt.wireframeLinewidth*pe()),Oe.setMode(j.LINES)):Oe.setMode(j.TRIANGLES);else if(ot.isLine){let _n=dt.linewidth;_n===void 0&&(_n=1),Xt.setLineWidth(_n*pe()),ot.isLineSegments?Oe.setMode(j.LINES):ot.isLineLoop?Oe.setMode(j.LINE_LOOP):Oe.setMode(j.LINE_STRIP)}else ot.isPoints?Oe.setMode(j.POINTS):ot.isSprite&&Oe.setMode(j.TRIANGLES);if(ot.isBatchedMesh)if(ot._multiDrawInstances!==null)gu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount,ot._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))Oe.renderMultiDraw(ot._multiDrawStarts,ot._multiDrawCounts,ot._multiDrawCount);else{const _n=ot._multiDrawStarts,Jt=ot._multiDrawCounts,Bn=ot._multiDrawCount,ue=$t?At.get($t).bytesPerElement:1,zn=T.get(dt).currentProgram.getUniforms();for(let Qn=0;Qn<Bn;Qn++)zn.setValue(j,"_gl_DrawID",Qn),Oe.render(_n[Qn]/ue,Jt[Qn])}else if(ot.isInstancedMesh)Oe.renderInstances(Zt,Qe,ot.count);else if(_t.isInstancedBufferGeometry){const _n=_t._maxInstanceCount!==void 0?_t._maxInstanceCount:1/0,Jt=Math.min(_t.instanceCount,_n);Oe.renderInstances(Zt,Qe,Jt)}else Oe.render(Zt,Qe)};function no(w,Q,_t){w.transparent===!0&&w.side===Xi&&w.forceSinglePass===!1?(w.side=Kn,w.needsUpdate=!0,wa(w,Q,_t),w.side=fs,w.needsUpdate=!0,wa(w,Q,_t),w.side=Xi):wa(w,Q,_t)}this.compile=function(w,Q,_t=null){_t===null&&(_t=w),G=Ct.get(_t),G.init(Q),z.push(G),_t.traverseVisible(function(ot){ot.isLight&&ot.layers.test(Q.layers)&&(G.pushLight(ot),ot.castShadow&&G.pushShadow(ot))}),w!==_t&&w.traverseVisible(function(ot){ot.isLight&&ot.layers.test(Q.layers)&&(G.pushLight(ot),ot.castShadow&&G.pushShadow(ot))}),G.setupLights();const dt=new Set;return w.traverse(function(ot){if(!(ot.isMesh||ot.isPoints||ot.isLine||ot.isSprite))return;const Ft=ot.material;if(Ft)if(Array.isArray(Ft))for(let Wt=0;Wt<Ft.length;Wt++){const It=Ft[Wt];no(It,_t,ot),dt.add(It)}else no(Ft,_t,ot),dt.add(Ft)}),G=z.pop(),dt},this.compileAsync=function(w,Q,_t=null){const dt=this.compile(w,Q,_t);return new Promise(ot=>{function Ft(){if(dt.forEach(function(Wt){T.get(Wt).currentProgram.isReady()&&dt.delete(Wt)}),dt.size===0){ot(w);return}setTimeout(Ft,10)}me.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let Xs=null;function vl(w){Xs&&Xs(w)}function Ws(){Pi.stop()}function js(){Pi.start()}const Pi=new yx;Pi.setAnimationLoop(vl),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(w){Xs=w,xt.setAnimationLoop(w),w===null?Pi.stop():Pi.start()},xt.addEventListener("sessionstart",Ws),xt.addEventListener("sessionend",js),this.render=function(w,Q){if(Q!==void 0&&Q.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(rt===!0)return;const _t=xt.enabled===!0&&xt.isPresenting===!0,dt=E!==null&&(Y===null||_t)&&E.begin(O,Y);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(Q),Q=xt.getCamera()),w.isScene===!0&&w.onBeforeRender(O,w,Q,Y),G=Ct.get(w,z.length),G.init(Q),z.push(G),Gt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),St.setFromProjectionMatrix(Gt,qi,Q.reversedDepth),wt=this.localClippingEnabled,Nt=Rt.init(this.clippingPlanes,wt),N=ee.get(w,B.length),N.init(),B.push(N),xt.enabled===!0&&xt.isPresenting===!0){const Wt=O.xr.getDepthSensingMesh();Wt!==null&&qs(Wt,Q,-1/0,O.sortObjects)}qs(w,Q,0,O.sortObjects),N.finish(),O.sortObjects===!0&&N.sort(pt,Mt),Yt=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,Yt&&zt.addToRenderList(N,w),this.info.render.frame++,Nt===!0&&Rt.beginShadows();const ot=G.state.shadowsArray;if(Ht.render(ot,w,Q),Nt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(dt&&E.hasRenderPass())===!1){const Wt=N.opaque,It=N.transmissive;if(G.setupLights(),Q.isArrayCamera){const $t=Q.cameras;if(It.length>0)for(let ie=0,oe=$t.length;ie<oe;ie++){const fe=$t[ie];ln(Wt,It,w,fe)}Yt&&zt.render(w);for(let ie=0,oe=$t.length;ie<oe;ie++){const fe=$t[ie];bi(N,w,fe,fe.viewport)}}else It.length>0&&ln(Wt,It,w,Q),Yt&&zt.render(w),bi(N,w,Q)}Y!==null&&q===0&&($.updateMultisampleRenderTarget(Y),$.updateRenderTargetMipmap(Y)),dt&&E.end(O),w.isScene===!0&&w.onAfterRender(O,w,Q),Ut.resetDefaultState(),at=-1,tt=null,z.pop(),z.length>0?(G=z[z.length-1],Nt===!0&&Rt.setGlobalState(O.clippingPlanes,G.state.camera)):G=null,B.pop(),B.length>0?N=B[B.length-1]:N=null};function qs(w,Q,_t,dt){if(w.visible===!1)return;if(w.layers.test(Q.layers)){if(w.isGroup)_t=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Q);else if(w.isLight)G.pushLight(w),w.castShadow&&G.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||St.intersectsSprite(w)){dt&&Qt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Gt);const Wt=jt.update(w),It=w.material;It.visible&&N.push(w,Wt,It,_t,Qt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||St.intersectsObject(w))){const Wt=jt.update(w),It=w.material;if(dt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Qt.copy(w.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),Qt.copy(Wt.boundingSphere.center)),Qt.applyMatrix4(w.matrixWorld).applyMatrix4(Gt)),Array.isArray(It)){const $t=Wt.groups;for(let ie=0,oe=$t.length;ie<oe;ie++){const fe=$t[ie],Zt=It[fe.materialIndex];Zt&&Zt.visible&&N.push(w,Wt,Zt,_t,Qt.z,fe)}}else It.visible&&N.push(w,Wt,It,_t,Qt.z,null)}}const Ft=w.children;for(let Wt=0,It=Ft.length;Wt<It;Wt++)qs(Ft[Wt],Q,_t,dt)}function bi(w,Q,_t,dt){const{opaque:ot,transmissive:Ft,transparent:Wt}=w;G.setupLightsView(_t),Nt===!0&&Rt.setGlobalState(O.clippingPlanes,_t),dt&&Xt.viewport(U.copy(dt)),ot.length>0&&gn(ot,Q,_t),Ft.length>0&&gn(Ft,Q,_t),Wt.length>0&&gn(Wt,Q,_t),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function ln(w,Q,_t,dt){if((_t.isScene===!0?_t.overrideMaterial:null)!==null)return;if(G.state.transmissionRenderTarget[dt.id]===void 0){const Zt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");G.state.transmissionRenderTarget[dt.id]=new Zi(1,1,{generateMipmaps:!0,type:Zt?Aa:ci,minFilter:Hs,samples:Math.max(4,Ae.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace})}const Ft=G.state.transmissionRenderTarget[dt.id],Wt=dt.viewport||U;Ft.setSize(Wt.z*O.transmissionResolutionScale,Wt.w*O.transmissionResolutionScale);const It=O.getRenderTarget(),$t=O.getActiveCubeFace(),ie=O.getActiveMipmapLevel();O.setRenderTarget(Ft),O.getClearColor(nt),gt=O.getClearAlpha(),gt<1&&O.setClearColor(16777215,.5),O.clear(),Yt&&zt.render(_t);const oe=O.toneMapping;O.toneMapping=Yi;const fe=dt.viewport;if(dt.viewport!==void 0&&(dt.viewport=void 0),G.setupLightsView(dt),Nt===!0&&Rt.setGlobalState(O.clippingPlanes,dt),gn(w,_t,dt),$.updateMultisampleRenderTarget(Ft),$.updateRenderTargetMipmap(Ft),me.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let _e=0,Qe=Q.length;_e<Qe;_e++){const Je=Q[_e],{object:Oe,geometry:_n,material:Jt,group:Bn}=Je;if(Jt.side===Xi&&Oe.layers.test(dt.layers)){const ue=Jt.side;Jt.side=Kn,Jt.needsUpdate=!0,$i(Oe,_t,dt,_n,Jt,Bn),Jt.side=ue,Jt.needsUpdate=!0,Zt=!0}}Zt===!0&&($.updateMultisampleRenderTarget(Ft),$.updateRenderTargetMipmap(Ft))}O.setRenderTarget(It,$t,ie),O.setClearColor(nt,gt),fe!==void 0&&(dt.viewport=fe),O.toneMapping=oe}function gn(w,Q,_t){const dt=Q.isScene===!0?Q.overrideMaterial:null;for(let ot=0,Ft=w.length;ot<Ft;ot++){const Wt=w[ot],{object:It,geometry:$t,group:ie}=Wt;let oe=Wt.material;oe.allowOverride===!0&&dt!==null&&(oe=dt),It.layers.test(_t.layers)&&$i(It,Q,_t,$t,oe,ie)}}function $i(w,Q,_t,dt,ot,Ft){w.onBeforeRender(O,Q,_t,dt,ot,Ft),w.modelViewMatrix.multiplyMatrices(_t.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ot.onBeforeRender(O,Q,_t,dt,w,Ft),ot.transparent===!0&&ot.side===Xi&&ot.forceSinglePass===!1?(ot.side=Kn,ot.needsUpdate=!0,O.renderBufferDirect(_t,Q,dt,ot,w,Ft),ot.side=fs,ot.needsUpdate=!0,O.renderBufferDirect(_t,Q,dt,ot,w,Ft),ot.side=Xi):O.renderBufferDirect(_t,Q,dt,ot,w,Ft),w.onAfterRender(O,Q,_t,dt,ot,Ft)}function wa(w,Q,_t){Q.isScene!==!0&&(Q=ae);const dt=T.get(w),ot=G.state.lights,Ft=G.state.shadowsArray,Wt=ot.state.version,It=Lt.getParameters(w,ot.state,Ft,Q,_t),$t=Lt.getProgramCacheKey(It);let ie=dt.programs;dt.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Q.environment:null,dt.fog=Q.fog;const oe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;dt.envMap=yt.get(w.envMap||dt.environment,oe),dt.envMapRotation=dt.environment!==null&&w.envMap===null?Q.environmentRotation:w.envMapRotation,ie===void 0&&(w.addEventListener("dispose",Ne),ie=new Map,dt.programs=ie);let fe=ie.get($t);if(fe!==void 0){if(dt.currentProgram===fe&&dt.lightsStateVersion===Wt)return Sl(w,It),fe}else It.uniforms=Lt.getUniforms(w),w.onBeforeCompile(It,O),fe=Lt.acquireProgram(It,$t),ie.set($t,fe),dt.uniforms=It.uniforms;const Zt=dt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Zt.clippingPlanes=Rt.uniform),Sl(w,It),dt.needsLights=io(w),dt.lightsStateVersion=Wt,dt.needsLights&&(Zt.ambientLightColor.value=ot.state.ambient,Zt.lightProbe.value=ot.state.probe,Zt.directionalLights.value=ot.state.directional,Zt.directionalLightShadows.value=ot.state.directionalShadow,Zt.spotLights.value=ot.state.spot,Zt.spotLightShadows.value=ot.state.spotShadow,Zt.rectAreaLights.value=ot.state.rectArea,Zt.ltc_1.value=ot.state.rectAreaLTC1,Zt.ltc_2.value=ot.state.rectAreaLTC2,Zt.pointLights.value=ot.state.point,Zt.pointLightShadows.value=ot.state.pointShadow,Zt.hemisphereLights.value=ot.state.hemi,Zt.directionalShadowMatrix.value=ot.state.directionalShadowMatrix,Zt.spotLightMatrix.value=ot.state.spotLightMatrix,Zt.spotLightMap.value=ot.state.spotLightMap,Zt.pointShadowMatrix.value=ot.state.pointShadowMatrix),dt.currentProgram=fe,dt.uniformsList=null,fe}function xl(w){if(w.uniformsList===null){const Q=w.currentProgram.getUniforms();w.uniformsList=du.seqWithValue(Q.seq,w.uniforms)}return w.uniformsList}function Sl(w,Q){const _t=T.get(w);_t.outputColorSpace=Q.outputColorSpace,_t.batching=Q.batching,_t.batchingColor=Q.batchingColor,_t.instancing=Q.instancing,_t.instancingColor=Q.instancingColor,_t.instancingMorph=Q.instancingMorph,_t.skinning=Q.skinning,_t.morphTargets=Q.morphTargets,_t.morphNormals=Q.morphNormals,_t.morphColors=Q.morphColors,_t.morphTargetsCount=Q.morphTargetsCount,_t.numClippingPlanes=Q.numClippingPlanes,_t.numIntersection=Q.numClipIntersection,_t.vertexAlphas=Q.vertexAlphas,_t.vertexTangents=Q.vertexTangents,_t.toneMapping=Q.toneMapping}function yl(w,Q,_t,dt,ot){Q.isScene!==!0&&(Q=ae),$.resetTextureUnits();const Ft=Q.fog,Wt=dt.isMeshStandardMaterial||dt.isMeshLambertMaterial||dt.isMeshPhongMaterial?Q.environment:null,It=Y===null?O.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Qr,$t=dt.isMeshStandardMaterial||dt.isMeshLambertMaterial&&!dt.envMap||dt.isMeshPhongMaterial&&!dt.envMap,ie=yt.get(dt.envMap||Wt,$t),oe=dt.vertexColors===!0&&!!_t.attributes.color&&_t.attributes.color.itemSize===4,fe=!!_t.attributes.tangent&&(!!dt.normalMap||dt.anisotropy>0),Zt=!!_t.morphAttributes.position,_e=!!_t.morphAttributes.normal,Qe=!!_t.morphAttributes.color;let Je=Yi;dt.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Je=O.toneMapping);const Oe=_t.morphAttributes.position||_t.morphAttributes.normal||_t.morphAttributes.color,_n=Oe!==void 0?Oe.length:0,Jt=T.get(dt),Bn=G.state.lights;if(Nt===!0&&(wt===!0||w!==tt)){const un=w===tt&&dt.id===at;Rt.setState(dt,w,un)}let ue=!1;dt.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Bn.state.version||Jt.outputColorSpace!==It||ot.isBatchedMesh&&Jt.batching===!1||!ot.isBatchedMesh&&Jt.batching===!0||ot.isBatchedMesh&&Jt.batchingColor===!0&&ot.colorTexture===null||ot.isBatchedMesh&&Jt.batchingColor===!1&&ot.colorTexture!==null||ot.isInstancedMesh&&Jt.instancing===!1||!ot.isInstancedMesh&&Jt.instancing===!0||ot.isSkinnedMesh&&Jt.skinning===!1||!ot.isSkinnedMesh&&Jt.skinning===!0||ot.isInstancedMesh&&Jt.instancingColor===!0&&ot.instanceColor===null||ot.isInstancedMesh&&Jt.instancingColor===!1&&ot.instanceColor!==null||ot.isInstancedMesh&&Jt.instancingMorph===!0&&ot.morphTexture===null||ot.isInstancedMesh&&Jt.instancingMorph===!1&&ot.morphTexture!==null||Jt.envMap!==ie||dt.fog===!0&&Jt.fog!==Ft||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Rt.numPlanes||Jt.numIntersection!==Rt.numIntersection)||Jt.vertexAlphas!==oe||Jt.vertexTangents!==fe||Jt.morphTargets!==Zt||Jt.morphNormals!==_e||Jt.morphColors!==Qe||Jt.toneMapping!==Je||Jt.morphTargetsCount!==_n)&&(ue=!0):(ue=!0,Jt.__version=dt.version);let zn=Jt.currentProgram;ue===!0&&(zn=wa(dt,Q,ot));let Qn=!1,Ei=!1,Jn=!1;const Be=zn.getUniforms(),cn=Jt.uniforms;if(Xt.useProgram(zn.program)&&(Qn=!0,Ei=!0,Jn=!0),dt.id!==at&&(at=dt.id,Ei=!0),Qn||tt!==w){Xt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Be.setValue(j,"projectionMatrix",w.projectionMatrix),Be.setValue(j,"viewMatrix",w.matrixWorldInverse);const Ti=Be.map.cameraPosition;Ti!==void 0&&Ti.setValue(j,Ot.setFromMatrixPosition(w.matrixWorld)),Ae.logarithmicDepthBuffer&&Be.setValue(j,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(dt.isMeshPhongMaterial||dt.isMeshToonMaterial||dt.isMeshLambertMaterial||dt.isMeshBasicMaterial||dt.isMeshStandardMaterial||dt.isShaderMaterial)&&Be.setValue(j,"isOrthographic",w.isOrthographicCamera===!0),tt!==w&&(tt=w,Ei=!0,Jn=!0)}if(Jt.needsLights&&(Bn.state.directionalShadowMap.length>0&&Be.setValue(j,"directionalShadowMap",Bn.state.directionalShadowMap,$),Bn.state.spotShadowMap.length>0&&Be.setValue(j,"spotShadowMap",Bn.state.spotShadowMap,$),Bn.state.pointShadowMap.length>0&&Be.setValue(j,"pointShadowMap",Bn.state.pointShadowMap,$)),ot.isSkinnedMesh){Be.setOptional(j,ot,"bindMatrix"),Be.setOptional(j,ot,"bindMatrixInverse");const un=ot.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Be.setValue(j,"boneTexture",un.boneTexture,$))}ot.isBatchedMesh&&(Be.setOptional(j,ot,"batchingTexture"),Be.setValue(j,"batchingTexture",ot._matricesTexture,$),Be.setOptional(j,ot,"batchingIdTexture"),Be.setValue(j,"batchingIdTexture",ot._indirectTexture,$),Be.setOptional(j,ot,"batchingColorTexture"),ot._colorsTexture!==null&&Be.setValue(j,"batchingColorTexture",ot._colorsTexture,$));const Hn=_t.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&Vt.update(ot,_t,zn),(Ei||Jt.receiveShadow!==ot.receiveShadow)&&(Jt.receiveShadow=ot.receiveShadow,Be.setValue(j,"receiveShadow",ot.receiveShadow)),(dt.isMeshStandardMaterial||dt.isMeshLambertMaterial||dt.isMeshPhongMaterial)&&dt.envMap===null&&Q.environment!==null&&(cn.envMapIntensity.value=Q.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=zR()),Ei&&(Be.setValue(j,"toneMappingExposure",O.toneMappingExposure),Jt.needsLights&&ds(cn,Jn),Ft&&dt.fog===!0&&te.refreshFogUniforms(cn,Ft),te.refreshMaterialUniforms(cn,dt,et,k,G.state.transmissionRenderTarget[w.id]),du.upload(j,xl(Jt),cn,$)),dt.isShaderMaterial&&dt.uniformsNeedUpdate===!0&&(du.upload(j,xl(Jt),cn,$),dt.uniformsNeedUpdate=!1),dt.isSpriteMaterial&&Be.setValue(j,"center",ot.center),Be.setValue(j,"modelViewMatrix",ot.modelViewMatrix),Be.setValue(j,"normalMatrix",ot.normalMatrix),Be.setValue(j,"modelMatrix",ot.matrixWorld),dt.isShaderMaterial||dt.isRawShaderMaterial){const un=dt.uniformsGroups;for(let Ti=0,ta=un.length;Ti<ta;Ti++){const Ys=un[Ti];kt.update(Ys,zn),kt.bind(Ys,zn)}}return zn}function ds(w,Q){w.ambientLightColor.needsUpdate=Q,w.lightProbe.needsUpdate=Q,w.directionalLights.needsUpdate=Q,w.directionalLightShadows.needsUpdate=Q,w.pointLights.needsUpdate=Q,w.pointLightShadows.needsUpdate=Q,w.spotLights.needsUpdate=Q,w.spotLightShadows.needsUpdate=Q,w.rectAreaLights.needsUpdate=Q,w.hemisphereLights.needsUpdate=Q}function io(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(w,Q,_t){const dt=T.get(w);dt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,dt.__autoAllocateDepthBuffer===!1&&(dt.__useRenderToTexture=!1),T.get(w.texture).__webglTexture=Q,T.get(w.depthTexture).__webglTexture=dt.__autoAllocateDepthBuffer?void 0:_t,dt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Q){const _t=T.get(w);_t.__webglFramebuffer=Q,_t.__useDefaultFramebuffer=Q===void 0};const Da=j.createFramebuffer();this.setRenderTarget=function(w,Q=0,_t=0){Y=w,H=Q,q=_t;let dt=null,ot=!1,Ft=!1;if(w){const It=T.get(w);if(It.__useDefaultFramebuffer!==void 0){Xt.bindFramebuffer(j.FRAMEBUFFER,It.__webglFramebuffer),U.copy(w.viewport),I.copy(w.scissor),X=w.scissorTest,Xt.viewport(U),Xt.scissor(I),Xt.setScissorTest(X),at=-1;return}else if(It.__webglFramebuffer===void 0)$.setupRenderTarget(w);else if(It.__hasExternalTextures)$.rebindTextures(w,T.get(w.texture).__webglTexture,T.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const oe=w.depthTexture;if(It.__boundDepthTexture!==oe){if(oe!==null&&T.has(oe)&&(w.width!==oe.image.width||w.height!==oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(w)}}const $t=w.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ft=!0);const ie=T.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ie[Q])?dt=ie[Q][_t]:dt=ie[Q],ot=!0):w.samples>0&&$.useMultisampledRTT(w)===!1?dt=T.get(w).__webglMultisampledFramebuffer:Array.isArray(ie)?dt=ie[_t]:dt=ie,U.copy(w.viewport),I.copy(w.scissor),X=w.scissorTest}else U.copy(Z).multiplyScalar(et).floor(),I.copy(V).multiplyScalar(et).floor(),X=ft;if(_t!==0&&(dt=Da),Xt.bindFramebuffer(j.FRAMEBUFFER,dt)&&Xt.drawBuffers(w,dt),Xt.viewport(U),Xt.scissor(I),Xt.setScissorTest(X),ot){const It=T.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Q,It.__webglTexture,_t)}else if(Ft){const It=Q;for(let $t=0;$t<w.textures.length;$t++){const ie=T.get(w.textures[$t]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+$t,ie.__webglTexture,_t,It)}}else if(w!==null&&_t!==0){const It=T.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,It.__webglTexture,_t)}at=-1},this.readRenderTargetPixels=function(w,Q,_t,dt,ot,Ft,Wt,It=0){if(!(w&&w.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $t=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Wt!==void 0&&($t=$t[Wt]),$t){Xt.bindFramebuffer(j.FRAMEBUFFER,$t);try{const ie=w.textures[It],oe=ie.format,fe=ie.type;if(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+It),!Ae.textureFormatReadable(oe)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(fe)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=w.width-dt&&_t>=0&&_t<=w.height-ot&&j.readPixels(Q,_t,dt,ot,Pt.convert(oe),Pt.convert(fe),Ft)}finally{const ie=Y!==null?T.get(Y).__webglFramebuffer:null;Xt.bindFramebuffer(j.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(w,Q,_t,dt,ot,Ft,Wt,It=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $t=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Wt!==void 0&&($t=$t[Wt]),$t)if(Q>=0&&Q<=w.width-dt&&_t>=0&&_t<=w.height-ot){Xt.bindFramebuffer(j.FRAMEBUFFER,$t);const ie=w.textures[It],oe=ie.format,fe=ie.type;if(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+It),!Ae.textureFormatReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Zt),j.bufferData(j.PIXEL_PACK_BUFFER,Ft.byteLength,j.STREAM_READ),j.readPixels(Q,_t,dt,ot,Pt.convert(oe),Pt.convert(fe),0);const _e=Y!==null?T.get(Y).__webglFramebuffer:null;Xt.bindFramebuffer(j.FRAMEBUFFER,_e);const Qe=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await eb(j,Qe,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Zt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ft),j.deleteBuffer(Zt),j.deleteSync(Qe),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Q=null,_t=0){const dt=Math.pow(2,-_t),ot=Math.floor(w.image.width*dt),Ft=Math.floor(w.image.height*dt),Wt=Q!==null?Q.x:0,It=Q!==null?Q.y:0;$.setTexture2D(w,0),j.copyTexSubImage2D(j.TEXTURE_2D,_t,0,0,Wt,It,ot,Ft),Xt.unbindTexture()};const Na=j.createFramebuffer(),hs=j.createFramebuffer();this.copyTextureToTexture=function(w,Q,_t=null,dt=null,ot=0,Ft=0){let Wt,It,$t,ie,oe,fe,Zt,_e,Qe;const Je=w.isCompressedTexture?w.mipmaps[Ft]:w.image;if(_t!==null)Wt=_t.max.x-_t.min.x,It=_t.max.y-_t.min.y,$t=_t.isBox3?_t.max.z-_t.min.z:1,ie=_t.min.x,oe=_t.min.y,fe=_t.isBox3?_t.min.z:0;else{const cn=Math.pow(2,-ot);Wt=Math.floor(Je.width*cn),It=Math.floor(Je.height*cn),w.isDataArrayTexture?$t=Je.depth:w.isData3DTexture?$t=Math.floor(Je.depth*cn):$t=1,ie=0,oe=0,fe=0}dt!==null?(Zt=dt.x,_e=dt.y,Qe=dt.z):(Zt=0,_e=0,Qe=0);const Oe=Pt.convert(Q.format),_n=Pt.convert(Q.type);let Jt;Q.isData3DTexture?($.setTexture3D(Q,0),Jt=j.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?($.setTexture2DArray(Q,0),Jt=j.TEXTURE_2D_ARRAY):($.setTexture2D(Q,0),Jt=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Q.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,Q.unpackAlignment);const Bn=j.getParameter(j.UNPACK_ROW_LENGTH),ue=j.getParameter(j.UNPACK_IMAGE_HEIGHT),zn=j.getParameter(j.UNPACK_SKIP_PIXELS),Qn=j.getParameter(j.UNPACK_SKIP_ROWS),Ei=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Je.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Je.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,ie),j.pixelStorei(j.UNPACK_SKIP_ROWS,oe),j.pixelStorei(j.UNPACK_SKIP_IMAGES,fe);const Jn=w.isDataArrayTexture||w.isData3DTexture,Be=Q.isDataArrayTexture||Q.isData3DTexture;if(w.isDepthTexture){const cn=T.get(w),Hn=T.get(Q),un=T.get(cn.__renderTarget),Ti=T.get(Hn.__renderTarget);Xt.bindFramebuffer(j.READ_FRAMEBUFFER,un.__webglFramebuffer),Xt.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let ta=0;ta<$t;ta++)Jn&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(w).__webglTexture,ot,fe+ta),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,T.get(Q).__webglTexture,Ft,Qe+ta)),j.blitFramebuffer(ie,oe,Wt,It,Zt,_e,Wt,It,j.DEPTH_BUFFER_BIT,j.NEAREST);Xt.bindFramebuffer(j.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ot!==0||w.isRenderTargetTexture||T.has(w)){const cn=T.get(w),Hn=T.get(Q);Xt.bindFramebuffer(j.READ_FRAMEBUFFER,Na),Xt.bindFramebuffer(j.DRAW_FRAMEBUFFER,hs);for(let un=0;un<$t;un++)Jn?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,cn.__webglTexture,ot,fe+un):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,cn.__webglTexture,ot),Be?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Hn.__webglTexture,Ft,Qe+un):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Hn.__webglTexture,Ft),ot!==0?j.blitFramebuffer(ie,oe,Wt,It,Zt,_e,Wt,It,j.COLOR_BUFFER_BIT,j.NEAREST):Be?j.copyTexSubImage3D(Jt,Ft,Zt,_e,Qe+un,ie,oe,Wt,It):j.copyTexSubImage2D(Jt,Ft,Zt,_e,ie,oe,Wt,It);Xt.bindFramebuffer(j.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Be?w.isDataTexture||w.isData3DTexture?j.texSubImage3D(Jt,Ft,Zt,_e,Qe,Wt,It,$t,Oe,_n,Je.data):Q.isCompressedArrayTexture?j.compressedTexSubImage3D(Jt,Ft,Zt,_e,Qe,Wt,It,$t,Oe,Je.data):j.texSubImage3D(Jt,Ft,Zt,_e,Qe,Wt,It,$t,Oe,_n,Je):w.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ft,Zt,_e,Wt,It,Oe,_n,Je.data):w.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ft,Zt,_e,Je.width,Je.height,Oe,Je.data):j.texSubImage2D(j.TEXTURE_2D,Ft,Zt,_e,Wt,It,Oe,_n,Je);j.pixelStorei(j.UNPACK_ROW_LENGTH,Bn),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ue),j.pixelStorei(j.UNPACK_SKIP_PIXELS,zn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Qn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Ei),Ft===0&&Q.generateMipmaps&&j.generateMipmap(Jt),Xt.unbindTexture()},this.initRenderTarget=function(w){T.get(w).__webglFramebuffer===void 0&&$.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?$.setTextureCube(w,0):w.isData3DTexture?$.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?$.setTexture2DArray(w,0):$.setTexture2D(w,0),Xt.unbindTexture()},this.resetState=function(){H=0,q=0,Y=null,Xt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const rl=400,GR=[.5,.8,.95,.6,.38,.14,.05,.55,.5,.8,.95,.6,.38,.14,.05,.55],Xr=3,Bv=Math.PI*.75,zv=2.6,yh=1.4,ol=1.8;function VR({eegData:r,yScale:t,onExit:i}){const s=st.useRef(null),l=st.useRef(null),c=st.useRef(null),d=st.useRef(null),p=st.useRef([]),m=st.useRef(null),h=st.useRef(null),x=st.useRef(!1),S=st.useRef(new Wb),g=st.useRef(r),M=st.useRef(t),b=st.useRef(i);g.current=r,M.current=t,b.current=i;const R=st.useCallback(()=>{if(x.current)return;x.current=!0,m.current&&(m.current.end().catch(()=>{}),m.current=null),h.current!=null&&(cancelAnimationFrame(h.current),h.current=null);const _=l.current;_&&(_.xr.enabled=!1,_.setAnimationLoop(null),_.dispose(),l.current=null),p.current=[]},[]);return st.useEffect(()=>{const _=s.current;if(!_)return;x.current=!1;const v=S.current;v.start();const A=new _b;A.background=new ye(198159),A.fog=new Lp(198159,.07),c.current=A;const D=new li(80,window.innerWidth/window.innerHeight,.05,60);D.position.set(0,yh,0),d.current=D;const N=new HR({antialias:!0,alpha:!1});N.setPixelRatio(Math.min(window.devicePixelRatio,2)),N.setSize(window.innerWidth,window.innerHeight),N.xr.enabled=!0,N.toneMapping=bp,N.toneMappingExposure=1.2,_.appendChild(N.domElement),l.current=N;const G=new Vb(1122884,.8);A.add(G);const B=new Gb(4491519,1.5,25);B.position.set(0,yh+1,0),A.add(B);const z=1500,E=new Float32Array(z*3),O=new Float32Array(z*3);for(let k=0;k<z;k++){const et=10+Math.random()*15,pt=Math.random()*Math.PI*2,Mt=Math.acos(2*Math.random()-1);E[k*3]=et*Math.sin(Mt)*Math.cos(pt),E[k*3+1]=et*Math.sin(Mt)*Math.sin(pt),E[k*3+2]=et*Math.cos(Mt),O[k*3]=.7+Math.random()*.3,O[k*3+1]=.75+Math.random()*.25,O[k*3+2]=.85+Math.random()*.15}const rt=new Fn;rt.setAttribute("position",new Ln(E,3)),rt.setAttribute("color",new Ln(O,3));const H=new mp({size:.05,vertexColors:!0,transparent:!0,opacity:.85,sizeAttenuation:!0}),q=new lv(rt,H);A.add(q);const at=[{color:4853888,center:[5,2,-10],count:400,spread:5},{color:666208,center:[-6,1,-9],count:350,spread:4},{color:14928,center:[1,4,-12],count:300,spread:4}].map(({color:k,center:et,count:pt,spread:Mt})=>{const Z=new Float32Array(pt*3);for(let Nt=0;Nt<pt;Nt++)Z[Nt*3]=et[0]+(Math.random()-.5)*Mt,Z[Nt*3+1]=et[1]+(Math.random()-.5)*Mt,Z[Nt*3+2]=et[2]+(Math.random()-.5)*Mt;const V=new Fn;V.setAttribute("position",new Ln(Z,3));const ft=new mp({color:k,size:.12,transparent:!0,opacity:.16,sizeAttenuation:!0,depthWrite:!1}),St=new lv(V,ft);return A.add(St),St}),tt=[],U=new ye;for(let k=0;k<tn;k++){const et=k/(tn-1),pt=-Bv/2+et*Bv,Mt=yh+zv/2-et*zv,Z=GR[k],V=new Float32Array(rl*3),ft=new Float32Array(rl*3),St=new Fn;St.setAttribute("position",new Ln(V,3)),St.setAttribute("color",new Ln(ft,3)),St.setDrawRange(0,0);const Nt=new Ip({vertexColors:!0,transparent:!0,opacity:.92,linewidth:2}),wt=new px(St,Nt);A.add(wt);const Gt=document.createElement("canvas");Gt.width=128,Gt.height=48;const Ot=Gt.getContext("2d");Ot.clearRect(0,0,128,48),U.setHSL(Z,.9,.7),Ot.font="bold 28px monospace",Ot.fillStyle=`#${U.getHexString()}`,Ot.textAlign="center",Ot.textBaseline="middle",Ot.fillText(`Ch ${k+1}`,64,24);const Qt=new Db(Gt),ae=new dx({map:Qt,transparent:!0,opacity:.65}),Yt=new bb(ae);Yt.scale.set(.4,.15,1);const pe=Math.sin(pt)*(Xr+.05),j=-Math.cos(pt)*(Xr+.05),Te=pe-Math.cos(pt)*(ol/2),me=j+Math.sin(pt)*(ol/2);Yt.position.set(Te-Math.cos(pt)*.3,Mt,me+Math.sin(pt)*.3),A.add(Yt);const Ae=new _l(ol+.3,.14),Xt=new Pp({color:new ye().setHSL(Z,1,.55),transparent:!0,opacity:.05,side:Xi,depthWrite:!1}),P=new Qi(Ae,Xt);P.position.set(Math.sin(pt)*Xr,Mt,-Math.cos(pt)*Xr),P.rotation.y=pt,A.add(P),tt.push({line:wt,geometry:St,positions:V,colors:ft,angle:pt,yPos:Mt,glowPlane:P,baseHue:Z})}p.current=tt;const I=new jb(12,24,660784,396830);A.add(I);function X(k){const et=g.current,pt=et.buffers.current;if(!pt)return;const Mt=et.samplesInBuffer.current,Z=et.writeIndex.current,V=et.bufferSize;if(Mt<2)return;const ft=Mt>rl?Math.floor(Mt/rl):1,St=Math.min(rl,Math.ceil(Mt/ft)),Nt=M.current||100;for(let wt=0;wt<tn;wt++){const{positions:Gt,colors:Ot,geometry:Qt,angle:ae,yPos:Yt,glowPlane:pe,baseHue:j}=tt[wt],Te=pt[wt],me=Math.sin(ae)*Xr,Ae=-Math.cos(ae)*Xr,Xt=-Math.cos(ae),P=-Math.sin(ae),T=(j+Math.sin(k*.08+wt*.4)*.08+1)%1,$=.85+Math.sin(k*.15+wt)*.1;let yt=0;for(let mt=0;mt<St;mt++){const jt=mt*ft,Lt=(Z-Mt+jt+V)%V,te=mt/Math.max(1,St-1),ee=Te[Lt]/Nt;yt+=ee*ee,Gt[mt*3]=me+Xt*(te-.5)*ol,Gt[mt*3+1]=Yt+ee*.14,Gt[mt*3+2]=Ae+P*(te-.5)*ol;const Ct=Math.sin(te*Math.PI),Rt=.35+Math.min(Math.abs(ee)*3,1)*.65,Ht=Math.min(.95,.5*Ct+Rt*.5);U.setHSL(T,$,Ht),Ot[mt*3]=U.r,Ot[mt*3+1]=U.g,Ot[mt*3+2]=U.b}Qt.attributes.position.needsUpdate=!0,Qt.attributes.color.needsUpdate=!0,Qt.setDrawRange(0,St);const At=Math.sqrt(yt/Math.max(1,St));pe.material.opacity=Math.min(.2,.03+At*.9)}G.intensity=.6+Math.sin(k*.5)*.15,B.intensity=1.2+Math.sin(k*.3)*.4,q.rotation.y=k*.005,q.rotation.x=Math.sin(k*.003)*.02,at.forEach((wt,Gt)=>{wt.material.opacity=.1+Math.sin(k*.2+Gt*2.1)*.06,wt.rotation.y=k*.003*(Gt%2===0?1:-1)})}async function nt(){let k=null;if(navigator.xr)for(const et of["immersive-vr","immersive-ar","inline"])try{if(await navigator.xr.isSessionSupported(et)){k=et;break}}catch{}if(k&&k!=="inline")try{const et=await navigator.xr.requestSession(k,{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});m.current=et,N.xr.setSession(et),et.addEventListener("end",()=>{m.current=null,b.current()}),N.setAnimationLoop(()=>{X(v.getElapsedTime()),N.render(A,D)});return}catch{}gt()}function gt(){let k=!1,et=0,pt=0,Mt=0,Z=0,V=!0;const ft=N.domElement,St=Ot=>{k=!0,V=!1,et=Ot.clientX,pt=Ot.clientY},Nt=()=>{k=!1},wt=Ot=>{k&&(Mt-=(Ot.clientX-et)*.003,Z-=(Ot.clientY-pt)*.003,Z=Math.max(-Math.PI/3,Math.min(Math.PI/3,Z)),et=Ot.clientX,pt=Ot.clientY)};ft.addEventListener("pointerdown",St),ft.addEventListener("pointerup",Nt),ft.addEventListener("pointermove",wt);function Gt(){const Ot=v.getElapsedTime();V&&(Mt=Ot*.04),D.rotation.order="YXZ",D.rotation.y=Mt,D.rotation.x=Z,X(Ot),N.render(A,D),h.current=requestAnimationFrame(Gt)}h.current=requestAnimationFrame(Gt)}nt();function F(){l.current&&(D.aspect=window.innerWidth/window.innerHeight,D.updateProjectionMatrix(),N.setSize(window.innerWidth,window.innerHeight))}return window.addEventListener("resize",F),()=>{window.removeEventListener("resize",F),R(),_.contains(N.domElement)&&_.removeChild(N.domElement)}},[]),L.jsxs("div",{className:"xr-overlay",children:[L.jsx("div",{className:"xr-container",ref:s}),L.jsxs("div",{className:"xr-hud",children:[L.jsx("button",{className:"btn xr-exit-btn",onClick:()=>{R(),b.current()},children:"✕ Exit XR"}),L.jsxs("div",{className:"xr-info",children:[L.jsx("span",{className:"xr-badge",children:"WebXR"}),L.jsxs("span",{children:[tn," channels · ±",t," µV"]})]})]})]})}const Hv=256,Mh=4,kR=2.5,xp=64,Gv=.25,XR=[{key:"Alpha",label:"α Alpha"},{key:"Beta",label:"β Beta"},{key:"Theta",label:"θ Theta"},{key:"Delta",label:"δ Delta"},{key:"Gamma",label:"γ Gamma"},{key:"Total",label:"Σ Total"}],Vv=[{label:"Fp1",x:-.3,y:-.85},{label:"Fp2",x:.3,y:-.85},{label:"F7",x:-.7,y:-.45},{label:"F3",x:-.35,y:-.45},{label:"Fz",x:0,y:-.4},{label:"F4",x:.35,y:-.45},{label:"F8",x:.7,y:-.45},{label:"C3",x:-.55,y:0},{label:"Cz",x:0,y:0},{label:"C4",x:.55,y:0},{label:"P3",x:-.45,y:.45},{label:"Pz",x:0,y:.42},{label:"P4",x:.45,y:.45},{label:"O1",x:-.25,y:.85},{label:"Oz",x:0,y:.8},{label:"O2",x:.25,y:.85}],bh=[[6,10,20],[11,37,58],[18,92,109],[0,230,118],[255,215,64],[255,82,82],[255,255,255]],Oi=256,Su=new Uint8Array(Oi),yu=new Uint8Array(Oi),Mu=new Uint8Array(Oi);(function(){const t=bh.length-1;for(let i=0;i<Oi;i++){const l=i/(Oi-1)*t,c=Math.min(Math.floor(l),t-1),d=l-c,p=bh[c],m=bh[c+1];Su[i]=p[0]+(m[0]-p[0])*d|0,yu[i]=p[1]+(m[1]-p[1])*d|0,Mu[i]=p[2]+(m[2]-p[2])*d|0}})();function WR(r,t){const i=r.length,s=[],l=[],c=[],d=[],p=[],m=[];for(let _=0;_<t;_++)for(let v=0;v<t;v++){const A=-1+2*(v+.5)/t,D=-1+2*(_+.5)/t,N=Math.sqrt(A*A+D*D);if(N>1.05)continue;s.push(_*t+v),l.push(A),c.push(D),d.push(N>.92?(1.05-N)/.13:1);const G=new Array(i);let B=-1,z=0;for(let E=0;E<i;E++){const O=A-r[E].x,rt=D-r[E].y,H=Math.sqrt(O*O+rt*rt);if(H<.001){B=E;break}G[E]=1/H**kR,z+=G[E]}if(B>=0)p.push(B),m.push(new Array(i).fill(0));else{p.push(-1);for(let E=0;E<i;E++)G[E]/=z;m.push(G)}}const h=s.length,x=new Int32Array(s),S=new Float64Array(d),g=new Float64Array(l),M=new Float64Array(c),b=new Int16Array(p),R=new Float64Array(h*i);for(let _=0;_<h;_++){const v=_*i,A=m[_];for(let D=0;D<i;D++)R[v+D]=A[D]}return{cellCount:h,cellIndex:x,edgeFade:S,nx:g,ny:M,weights:R,exactElectrode:b}}function jR(r,t,i,s,l,c){const d=r.data;d.fill(0);let p=1/0,m=-1/0;for(let g=0;g<i.length;g++)i[g]<p&&(p=i[g]),i[g]>m&&(m=i[g]);m<=p&&(m=p+1);const h=m-p,x=(Oi-1)/h,S=t/l;for(let g=0;g<s.cellCount;g++){const M=s.cellIndex[g],b=M/l|0,R=M-b*l;let _;const v=s.exactElectrode[g];if(v>=0)_=i[v];else{_=0;const H=g*c;for(let q=0;q<c;q++)_+=s.weights[H+q]*i[q]}const A=Math.max(0,Math.min(Oi-1,(_-p)*x|0)),D=s.edgeFade[g]*255|0,N=Su[A],G=yu[A],B=Mu[A],z=R*S|0,E=b*S|0,O=Math.min((R+1)*S|0,t),rt=Math.min((b+1)*S|0,t);for(let H=E;H<rt;H++){let q=(H*t+z)*4;for(let Y=z;Y<O;Y++)d[q]=N,d[q+1]=G,d[q+2]=B,d[q+3]=D,q+=4}}}function qR(r,t,i,s,l){const c=Math.min(t,i),d=t/2,p=i/2,m=c*.4;let h=1/0,x=-1/0;for(let _=0;_<s.length;_++)s[_]<h&&(h=s[_]),s[_]>x&&(x=s[_]);x<=h&&(x=h+1);const S=x-h;r.strokeStyle="rgba(255,255,255,0.25)",r.lineWidth=1.5,r.beginPath(),r.arc(d,p,m,0,Math.PI*2),r.stroke(),r.beginPath(),r.moveTo(d-m*.08,p-m),r.lineTo(d,p-m-m*.12),r.lineTo(d+m*.08,p-m),r.strokeStyle="rgba(255,255,255,0.3)",r.lineWidth=1.5,r.lineJoin="round",r.stroke();for(const _ of[!0,!1]){const v=_?d-m:d+m,A=_?-1:1;r.beginPath(),r.moveTo(v,p-m*.12),r.quadraticCurveTo(v+A*m*.08,p,v,p+m*.12),r.strokeStyle="rgba(255,255,255,0.2)",r.lineWidth=1.2,r.stroke()}for(let _=0;_<l.length&&_<s.length;_++){const v=d+l[_].x*m,A=p+l[_].y*m,D=Math.max(0,Math.min(Oi-1,(s[_]-h)/S*(Oi-1)|0)),N=Su[D],G=yu[D],B=Mu[D];r.beginPath(),r.arc(v,A,5,0,Math.PI*2),r.fillStyle=`rgba(${N},${G},${B},0.4)`,r.shadowColor=`rgba(${N},${G},${B},0.6)`,r.shadowBlur=6,r.fill(),r.shadowBlur=0,r.beginPath(),r.arc(v,A,3,0,Math.PI*2),r.fillStyle="rgba(255,255,255,0.9)",r.fill(),r.beginPath(),r.arc(v,A,2,0,Math.PI*2),r.fillStyle=`rgb(${N},${G},${B})`,r.fill(),r.fillStyle="rgba(255,255,255,0.65)",r.font="7px monospace",r.textAlign="center",r.fillText(l[_].label,v,A+10)}const g=10,M=i*.5,b=t-g-8,R=(i-M)/2;for(let _=0;_<M;_++){const v=Math.max(0,Math.min(Oi-1,(1-_/M)*(Oi-1)|0));r.fillStyle=`rgb(${Su[v]},${yu[v]},${Mu[v]})`,r.fillRect(b,R+_,g,1)}r.strokeStyle="rgba(255,255,255,0.15)",r.lineWidth=.5,r.strokeRect(b,R,g,M),r.fillStyle="rgba(255,255,255,0.4)",r.font="7px monospace",r.textAlign="right",r.fillText(x.toFixed(1),b-3,R+4),r.fillText(h.toFixed(1),b-3,R+M)}const os=xp*4,YR=st.memo(function({eegData:t}){var O;const i=st.useRef(null),s=st.useRef(0),l=st.useRef(0),c=st.useRef(window.devicePixelRatio||1),d=st.useRef(!0),p=st.useRef({w:0,h:0,pw:0,ph:0}),m=st.useRef(new Array(tn).fill(0)),h=st.useRef(new Array(tn).fill(0)),x=st.useRef(0),S=st.useRef(null),g=st.useRef({}),M=st.useRef(0),[b,R]=st.useState("Alpha"),[_,v]=st.useState(!1),[A,D]=st.useState({}),[N,G]=st.useState({band:"",freq:0}),B=st.useMemo(()=>new qr(Hv,Un),[]),z=st.useMemo(()=>WR(Vv,xp),[]);st.useEffect(()=>{const rt=i.current;if(!rt)return;const H=rt.getContext("2d",{alpha:!1}),q=document.createElement("canvas");q.width=os,q.height=os;const Y=q.getContext("2d");(!S.current||S.current.width!==os)&&(S.current=new ImageData(os,os));const at=new ResizeObserver(U=>{const I=U[0];if(!I)return;const X=window.devicePixelRatio||1;c.current=X;const{width:nt,height:gt}=I.contentRect;p.current={w:nt,h:gt,pw:Math.round(nt*X),ph:Math.round(gt*X)},d.current=!0});at.observe(rt);const tt=()=>{const{w:U,h:I,pw:X,ph:nt}=p.current;if(U===0||I===0){s.current=requestAnimationFrame(tt);return}if(d.current&&(d.current=!1,rt.width=X,rt.height=nt),H.setTransform(c.current,0,0,c.current,0,0),H.fillStyle="#0d1117",H.fillRect(0,0,U,I),l.current++,!_){const k=t.buffers.current,et=t.writeIndex.current,pt=t.samplesInBuffer.current;if(k&&pt>=Hv){const Mt=x.current,Z=Mt*Mh,V=Math.min(Z+Mh,tn),ft=h.current,St=m.current,Nt=g.current;for(let Gt=Z;Gt<V;Gt++){const Ot=B.analyseRing(k[Gt],et,pt);if(Ot){ft[Gt]=b==="Total"?Ot.totalPower:Ot.bandPowers[b]||0,St[Gt]=St[Gt]*(1-Gv)+ft[Gt]*Gv;for(const Qt of on)Nt[Qt.name]=(Nt[Qt.name]||0)-(Nt[`_ch${Gt}_${Qt.name}`]||0)+(Ot.bandPowers[Qt.name]||0),Nt[`_ch${Gt}_${Qt.name}`]=Ot.bandPowers[Qt.name]||0}}x.current=(Mt+1)%Math.ceil(tn/Mh);const wt=performance.now();if(wt-M.current>400){M.current=wt;const Gt={};let Ot="",Qt=0;for(const ae of on)Gt[ae.name]=(Nt[ae.name]||0)/tn,Gt[ae.name]>Qt&&(Qt=Gt[ae.name],Ot=ae.name);D(Gt),G(ae=>ae.band===Ot?ae:{band:Ot,freq:0})}}}const gt=m.current;if(gt.some(k=>k!==0)){const k=S.current;jR(k,os,gt,z,xp,tn),Y.putImageData(k,0,0);const pt=Math.min(U,I)*.4,Mt=U/2,Z=I/2,V=pt*2.1;H.imageSmoothingEnabled=!0,H.imageSmoothingQuality="high",H.drawImage(q,0,0,os,os,Mt-V/2,Z-V/2,V,V),qR(H,U,I,gt,Vv)}else H.fillStyle="#4b5563",H.font="13px monospace",H.textAlign="center",H.fillText("Collecting samples…",U/2,I/2);s.current=requestAnimationFrame(tt)};return s.current=requestAnimationFrame(tt),()=>{cancelAnimationFrame(s.current),at.disconnect()}},[t,b,_,B,z]);const E=((O=on.find(rt=>rt.name===N.band))==null?void 0:O.color)||"#8b949e";return L.jsxs("div",{className:"topomap-panel",children:[L.jsxs("div",{className:"topomap-toolbar",children:[L.jsx("span",{className:"topomap-title",children:"Topomap"}),L.jsx("div",{className:"topomap-metrics",children:XR.map(rt=>L.jsx("button",{className:`topo-metric${b===rt.key?" active":""}`,onClick:()=>R(rt.key),children:rt.label},rt.key))}),L.jsx("span",{className:"topo-dominant",children:L.jsx("strong",{style:{color:E},children:N.band||"—"})}),L.jsx("button",{className:`btn topo-pause${_?" active":""}`,onClick:()=>v(rt=>!rt),children:_?"▶":"⏸"})]}),L.jsx("div",{className:"topomap-canvas-wrap",children:L.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}})}),L.jsx("div",{className:"topomap-bands",children:on.map(rt=>{const H=A[rt.name]||0,q=Math.max(...on.map(at=>A[at.name]||0),1e-6),Y=q>0?H/q*100:0;return L.jsxs("div",{className:"topo-band",children:[L.jsx("span",{className:"topo-band-dot",style:{background:rt.color}}),L.jsx("span",{className:"topo-band-name",style:{color:rt.color},children:rt.label}),L.jsx("div",{className:"topo-band-track",children:L.jsx("div",{className:"topo-band-fill",style:{width:`${Y}%`,background:rt.color}})}),L.jsx("span",{className:"topo-band-val",children:H<.01?H.toExponential(1):H.toFixed(2)})]},rt.name)})})]})});function ZR(){const[r,t]=st.useState(null),[i,s]=st.useState(!1),[l,c]=st.useState(!1),[d,p]=st.useState(!1);if(st.useEffect(()=>{fetch("/api/update/check").then(g=>g.json()).then(g=>{g.error||t(g),s(!0)}).catch(()=>s(!0))},[]),l||!i||!(r!=null&&r.update_available))return null;const m=r.install_method==="git",h=/win/i.test(navigator.platform),x=m?`git pull origin main
pip install -e .`:"pip install --upgrade pieeg-server",S=h?".\\pieeg-server.cmd":"pieeg-server";return L.jsxs("div",{className:"update-banner",children:[L.jsxs("div",{className:"update-banner-content",children:[L.jsxs("span",{className:"update-banner-text",children:["Update available: ",L.jsx("strong",{children:r.current_version})," →"," ",L.jsx("strong",{children:r.latest_version})]}),L.jsx("button",{className:"btn update-btn",onClick:()=>p(g=>!g),children:d?"Hide instructions":"How to update"}),L.jsx("button",{className:"update-dismiss",onClick:()=>c(!0),title:"Dismiss",children:"✕"})]}),d&&L.jsxs("div",{className:"update-howto",children:[L.jsx("p",{children:m?"Run these commands in your project folder:":"Run this command:"}),L.jsx("pre",{children:L.jsx("code",{children:x})}),L.jsx("p",{children:"Then restart the server:"}),L.jsx("pre",{children:L.jsx("code",{children:S})})]})]})}const kv=new Set(Array.from({length:tn},(r,t)=>t)),KR=new Set([0,1,2,3]),QR=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],JR=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"},{value:16,label:"16s"}];function $R(){const[r,t]=st.useState("live"),[i,s]=st.useState(null),[l,c]=st.useState(!1),[d,p]=st.useState(!0),[m,h]=st.useState(!1),[x,S]=st.useState(1),[g,M]=st.useState(40),[b,R]=st.useState(4),[_,v]=st.useState(100),[A,D]=st.useState(null),[N,G]=st.useState(!1),[B,z]=st.useState(()=>window.innerWidth<768?new Set(KR):new Set(kv)),E=jy(b),O=st.useRef(B);O.current=B;const rt=st.useCallback(X=>{z(nt=>{const gt=new Set(nt);return gt.has(X)?gt.delete(X):gt.add(X),gt})},[]),H=st.useCallback(X=>{z(X?new Set(kv):new Set)},[]);function q(){const X=!l;c(X),E.setPaused(X)}function Y(){const X=!m;h(X),E.sendCommand({cmd:"set_filter",enabled:X,lowcut:parseFloat(String(x))||1,highcut:parseFloat(String(g))||40})}function at(){E.sendCommand({cmd:E.recording?"stop_record":"start_record"})}function tt(X){const nt=Math.floor(X/60),gt=Math.floor(X%60);return`${String(nt).padStart(2,"0")}:${String(gt).padStart(2,"0")}`}function U(X,nt){m&&E.sendCommand({cmd:"set_filter",enabled:!0,lowcut:parseFloat(String(X))||1,highcut:parseFloat(String(nt))||40})}const I=st.useCallback(X=>{if(!O.current.has(X)){z(nt=>{const gt=new Set(nt);return gt.add(X),gt});return}D(nt=>nt===X?null:X)},[]);return st.useEffect(()=>{function X(nt){const gt=nt.target.tagName;if(!(gt==="INPUT"||gt==="SELECT"||gt==="TEXTAREA")){if(r!=="live"){nt.code==="Escape"&&(r==="playback"?(t("sessions"),s(null)):r==="sessions"&&t("live"));return}switch(nt.code){case"Space":nt.preventDefault(),q();break;case"KeyR":at();break;case"KeyF":p(F=>!F);break;case"KeyV":G(F=>!F);break;case"Escape":N?G(!1):A!==null?D(null):E.recordResult&&E.dismissRecordResult();break}}}return window.addEventListener("keydown",X),()=>window.removeEventListener("keydown",X)},[A,E.recordResult,r]),r==="playback"&&i?L.jsx(Fd,{children:L.jsx(xM,{filename:i,onBack:()=>{t("sessions"),s(null)}})}):r==="sessions"?L.jsx(Fd,{children:L.jsx(dM,{onSelect:X=>{s(X),t("playback")},onBack:()=>t("live")})}):(E.data.gridSuspended=A!==null&&B.has(A),L.jsxs(Fd,{children:[L.jsx(ZR,{}),L.jsxs("header",{className:"header",children:[L.jsxs("h1",{children:["Pi",L.jsx("span",{children:"EEG"}),"-16"," ",L.jsx("small",{style:{fontWeight:400,color:"var(--text-dim)"},children:"Dashboard"})]}),L.jsxs("div",{className:"status-bar",children:[L.jsxs("span",{children:[L.jsx("span",{className:`status-dot${E.connected?" connected":""}`}),E.connected?" Connected":" Disconnected"]}),L.jsx("span",{className:`live-badge${l?" paused":""}`,children:l?"⏸ PAUSED":"● LIVE"}),L.jsx("span",{children:E.hz?`${E.hz} Hz`:"— Hz"}),L.jsxs("span",{children:[E.sampleCount.toLocaleString()," samples"]})]})]}),L.jsxs("div",{className:"controls",children:[L.jsx("button",{className:`btn${l?" active":""}`,onClick:q,children:l?"▶ Resume":"⏸ Pause"}),L.jsxs("button",{className:`btn btn-record${E.recording?" recording":""}`,onClick:at,children:[L.jsx("span",{className:"rec-dot"}),E.recording?`⏹ Stop ${tt(E.recordElapsed)}`:"⏺ Record"]}),L.jsxs("button",{className:`btn${m?" active":""}`,onClick:Y,children:["Filter: ",m?"ON":"OFF"]}),L.jsxs("button",{className:`btn${d?" active":""}`,onClick:()=>p(X=>!X),children:["FFT ",d?"ON":"OFF"]}),L.jsx("button",{className:"btn btn-sessions",onClick:()=>t("sessions"),children:"Sessions"}),L.jsx("button",{className:"btn btn-xr",onClick:()=>G(!0),title:"Open EEG waves in immersive 3D / VR",children:"🥽 XR View"}),L.jsx("div",{className:"sep"}),L.jsxs("div",{className:"control-group",children:[L.jsx("label",{children:"Low"}),L.jsx("input",{type:"number",value:x,min:.1,max:50,step:.5,onChange:X=>{S(X.target.value),U(X.target.value,g)}})," ","Hz"]}),L.jsxs("div",{className:"control-group",children:[L.jsx("label",{children:"High"}),L.jsx("input",{type:"number",value:g,min:1,max:125,step:1,onChange:X=>{M(X.target.value),U(x,X.target.value)}})," ","Hz"]}),L.jsx("div",{className:"sep"}),L.jsxs("div",{className:"control-group",children:[L.jsx("label",{children:"Time window"}),L.jsx("select",{value:b,onChange:X=>R(parseInt(X.target.value)),children:JR.map(X=>L.jsx("option",{value:X.value,children:X.label},X.value))})]}),L.jsxs("div",{className:"control-group",children:[L.jsx("label",{children:"Scale"}),L.jsx("select",{value:_,onChange:X=>v(parseInt(X.target.value)),children:QR.map(X=>L.jsx("option",{value:X.value,children:X.label},X.value))})]})]}),L.jsxs("div",{className:"channel-selector",children:[L.jsx("span",{className:"cs-label",children:"Channels"}),L.jsx("button",{className:"cs-toggle",onClick:()=>H(!0),children:"All"}),L.jsx("button",{className:"cs-toggle",onClick:()=>H(!1),children:"None"}),L.jsx("div",{className:"cs-grid",children:Array.from({length:tn},(X,nt)=>L.jsx("button",{className:`cs-ch${B.has(nt)?" on":""}`,onClick:()=>rt(nt),children:nt+1},nt))}),L.jsxs("span",{className:"cs-count",children:[B.size,"/",tn]})]}),L.jsxs("div",{className:`main-area${d?" with-fft":""}`,children:[A!==null&&B.has(A)&&L.jsx(sM,{chIdx:A,eegData:E.data,yRange:_,onClose:()=>D(null)}),L.jsx("div",{className:"grid",children:Array.from({length:tn},(X,nt)=>L.jsx(Qy,{chIdx:nt,eegData:E.data,yRange:_,active:B.has(nt),onToggleExpand:()=>I(nt)},nt))}),d&&L.jsxs("div",{className:"fft-area",children:[L.jsx(uM,{eegData:E.data}),L.jsx(YR,{eegData:E.data})]})]}),E.recordResult&&L.jsx("div",{className:"modal-overlay",children:L.jsxs("div",{className:"modal-card",children:[L.jsx("h2",{children:"Recording Complete"}),L.jsxs("div",{className:"modal-details",children:[L.jsxs("div",{className:"modal-row",children:[L.jsx("span",{className:"modal-label",children:"File"}),L.jsx("span",{className:"modal-value",children:E.recordResult.filename})]}),L.jsxs("div",{className:"modal-row",children:[L.jsx("span",{className:"modal-label",children:"Duration"}),L.jsx("span",{className:"modal-value",children:tt(E.recordResult.duration)})]}),L.jsxs("div",{className:"modal-row",children:[L.jsx("span",{className:"modal-label",children:"Frames"}),L.jsx("span",{className:"modal-value",children:E.recordResult.frames.toLocaleString()})]}),L.jsxs("div",{className:"modal-row",children:[L.jsx("span",{className:"modal-label",children:"Saved to"}),L.jsx("span",{className:"modal-value modal-path",children:E.recordResult.path})]})]}),L.jsxs("div",{className:"modal-actions",children:[L.jsx("a",{className:"btn modal-btn-download",href:E.recordResult.downloadUrl,download:!0,children:"Download CSV"}),L.jsx("button",{className:"btn modal-btn-view",onClick:()=>{const X=E.recordResult.filename;E.dismissRecordResult(),s(X),t("playback")},children:"View Session"}),L.jsx("button",{className:"btn modal-btn-dismiss",onClick:E.dismissRecordResult,children:"Dismiss"})]})]})}),N&&L.jsx(VR,{eegData:E.data,yScale:_,onExit:()=>G(!1)}),L.jsx(fM,{}),L.jsxs("footer",{className:"footer",children:[L.jsx("span",{children:"PiEEG-16-server · React Dashboard"}),L.jsxs("span",{className:"kbd-hints",children:[L.jsx("kbd",{children:"Space"})," Pause ",L.jsx("kbd",{children:"R"})," Record ",L.jsx("kbd",{children:"F"})," FFT ",L.jsx("kbd",{children:"V"})," XR ",L.jsx("kbd",{children:"Esc"})," Close ",L.jsx("kbd",{children:"P"})," Perf"]}),L.jsx("span",{children:"Battery powered only · Not a medical device"})]})]}))}Xy.createRoot(document.getElementById("root")).render(L.jsx(Fy.StrictMode,{children:L.jsx($R,{})}));
