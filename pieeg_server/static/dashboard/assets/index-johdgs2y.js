var By=Object.defineProperty;var Iy=(r,t,i)=>t in r?By(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var Ci=(r,t,i)=>Iy(r,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Kv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ld={exports:{}},Yo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function zy(){if(x_)return Yo;x_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Yo.Fragment=t,Yo.jsx=i,Yo.jsxs=i,Yo}var S_;function Hy(){return S_||(S_=1,Ld.exports=zy()),Ld.exports}var C=Hy(),Od={exports:{}},ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function Gy(){if(y_)return ge;y_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=g&&z[g]||z["@@iterator"],typeof z=="function"?z:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,_={};function x(z,I,W){this.props=z,this.context=I,this.refs=_,this.updater=W||M}x.prototype.isReactComponent={},x.prototype.setState=function(z,I){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,I,"setState")},x.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function T(){}T.prototype=x.prototype;function D(z,I,W){this.props=z,this.context=I,this.refs=_,this.updater=W||M}var R=D.prototype=new T;R.constructor=D,w(R,x.prototype),R.isPureReactComponent=!0;var H=Array.isArray;function P(){}var F={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function O(z,I,W){var lt=W.ref;return{$$typeof:r,type:z,key:I,ref:lt!==void 0?lt:null,props:W}}function J(z,I){return O(z.type,I,z.props)}function V(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function k(z){var I={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(W){return I[W]})}var q=/\/+/g;function at(z,I){return typeof z=="object"&&z!==null&&z.key!=null?k(""+z.key):I.toString(36)}function $(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function(I){z.status==="pending"&&(z.status="fulfilled",z.value=I)},function(I){z.status==="pending"&&(z.status="rejected",z.reason=I)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function U(z,I,W,lt,_t){var K=typeof z;(K==="undefined"||K==="boolean")&&(z=null);var st=!1;if(z===null)st=!0;else switch(K){case"bigint":case"string":case"number":st=!0;break;case"object":switch(z.$$typeof){case r:case t:st=!0;break;case S:return st=z._init,U(st(z._payload),I,W,lt,_t)}}if(st)return _t=_t(z),st=lt===""?"."+at(z,0):lt,H(_t)?(W="",st!=null&&(W=st.replace(q,"$&/")+"/"),U(_t,I,W,"",function(At){return At})):_t!=null&&(V(_t)&&(_t=J(_t,W+(_t.key==null||z&&z.key===_t.key?"":(""+_t.key).replace(q,"$&/")+"/")+st)),I.push(_t)),1;st=0;var mt=lt===""?".":lt+":";if(H(z))for(var Y=0;Y<z.length;Y++)lt=z[Y],K=mt+at(lt,Y),st+=U(lt,I,W,K,_t);else if(Y=y(z),typeof Y=="function")for(z=Y.call(z),Y=0;!(lt=z.next()).done;)lt=lt.value,K=mt+at(lt,Y++),st+=U(lt,I,W,K,_t);else if(K==="object"){if(typeof z.then=="function")return U($(z),I,W,lt,_t);throw I=String(z),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return st}function B(z,I,W){if(z==null)return z;var lt=[],_t=0;return U(z,lt,"","",function(K){return I.call(W,K,_t++)}),lt}function nt(z){if(z._status===-1){var I=z._result;I=I(),I.then(function(W){(z._status===0||z._status===-1)&&(z._status=1,z._result=W)},function(W){(z._status===0||z._status===-1)&&(z._status=2,z._result=W)}),z._status===-1&&(z._status=0,z._result=I)}if(z._status===1)return z._result.default;throw z._result}var ot=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},St={map:B,forEach:function(z,I,W){B(z,function(){I.apply(this,arguments)},W)},count:function(z){var I=0;return B(z,function(){I++}),I},toArray:function(z){return B(z,function(I){return I})||[]},only:function(z){if(!V(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return ge.Activity=v,ge.Children=St,ge.Component=x,ge.Fragment=i,ge.Profiler=l,ge.PureComponent=D,ge.StrictMode=s,ge.Suspense=m,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ge.__COMPILER_RUNTIME={__proto__:null,c:function(z){return F.H.useMemoCache(z)}},ge.cache=function(z){return function(){return z.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(z,I,W){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var lt=w({},z.props),_t=z.key;if(I!=null)for(K in I.key!==void 0&&(_t=""+I.key),I)!E.call(I,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&I.ref===void 0||(lt[K]=I[K]);var K=arguments.length-2;if(K===1)lt.children=W;else if(1<K){for(var st=Array(K),mt=0;mt<K;mt++)st[mt]=arguments[mt+2];lt.children=st}return O(z.type,_t,lt)},ge.createContext=function(z){return z={$$typeof:f,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},ge.createElement=function(z,I,W){var lt,_t={},K=null;if(I!=null)for(lt in I.key!==void 0&&(K=""+I.key),I)E.call(I,lt)&&lt!=="key"&&lt!=="__self"&&lt!=="__source"&&(_t[lt]=I[lt]);var st=arguments.length-2;if(st===1)_t.children=W;else if(1<st){for(var mt=Array(st),Y=0;Y<st;Y++)mt[Y]=arguments[Y+2];_t.children=mt}if(z&&z.defaultProps)for(lt in st=z.defaultProps,st)_t[lt]===void 0&&(_t[lt]=st[lt]);return O(z,K,_t)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(z){return{$$typeof:p,render:z}},ge.isValidElement=V,ge.lazy=function(z){return{$$typeof:S,_payload:{_status:-1,_result:z},_init:nt}},ge.memo=function(z,I){return{$$typeof:h,type:z,compare:I===void 0?null:I}},ge.startTransition=function(z){var I=F.T,W={};F.T=W;try{var lt=z(),_t=F.S;_t!==null&&_t(W,lt),typeof lt=="object"&&lt!==null&&typeof lt.then=="function"&&lt.then(P,ot)}catch(K){ot(K)}finally{I!==null&&W.types!==null&&(I.types=W.types),F.T=I}},ge.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ge.use=function(z){return F.H.use(z)},ge.useActionState=function(z,I,W){return F.H.useActionState(z,I,W)},ge.useCallback=function(z,I){return F.H.useCallback(z,I)},ge.useContext=function(z){return F.H.useContext(z)},ge.useDebugValue=function(){},ge.useDeferredValue=function(z,I){return F.H.useDeferredValue(z,I)},ge.useEffect=function(z,I){return F.H.useEffect(z,I)},ge.useEffectEvent=function(z){return F.H.useEffectEvent(z)},ge.useId=function(){return F.H.useId()},ge.useImperativeHandle=function(z,I,W){return F.H.useImperativeHandle(z,I,W)},ge.useInsertionEffect=function(z,I){return F.H.useInsertionEffect(z,I)},ge.useLayoutEffect=function(z,I){return F.H.useLayoutEffect(z,I)},ge.useMemo=function(z,I){return F.H.useMemo(z,I)},ge.useOptimistic=function(z,I){return F.H.useOptimistic(z,I)},ge.useReducer=function(z,I,W){return F.H.useReducer(z,I,W)},ge.useRef=function(z){return F.H.useRef(z)},ge.useState=function(z){return F.H.useState(z)},ge.useSyncExternalStore=function(z,I,W){return F.H.useSyncExternalStore(z,I,W)},ge.useTransition=function(){return F.H.useTransition()},ge.version="19.2.4",ge}var M_;function Ep(){return M_||(M_=1,Od.exports=Gy()),Od.exports}var Z=Ep();const Vy=Kv(Z);var Pd={exports:{}},Zo={},Fd={exports:{}},Bd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function ky(){return b_||(b_=1,(function(r){function t(U,B){var nt=U.length;U.push(B);t:for(;0<nt;){var ot=nt-1>>>1,St=U[ot];if(0<l(St,B))U[ot]=B,U[nt]=St,nt=ot;else break t}}function i(U){return U.length===0?null:U[0]}function s(U){if(U.length===0)return null;var B=U[0],nt=U.pop();if(nt!==B){U[0]=nt;t:for(var ot=0,St=U.length,z=St>>>1;ot<z;){var I=2*(ot+1)-1,W=U[I],lt=I+1,_t=U[lt];if(0>l(W,nt))lt<St&&0>l(_t,W)?(U[ot]=_t,U[lt]=nt,ot=lt):(U[ot]=W,U[I]=nt,ot=I);else if(lt<St&&0>l(_t,nt))U[ot]=_t,U[lt]=nt,ot=lt;else break t}}return B}function l(U,B){var nt=U.sortIndex-B.sortIndex;return nt!==0?nt:U.id-B.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var m=[],h=[],S=1,v=null,g=3,y=!1,M=!1,w=!1,_=!1,x=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function R(U){for(var B=i(h);B!==null;){if(B.callback===null)s(h);else if(B.startTime<=U)s(h),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(h)}}function H(U){if(w=!1,R(U),!M)if(i(m)!==null)M=!0,P||(P=!0,k());else{var B=i(h);B!==null&&$(H,B.startTime-U)}}var P=!1,F=-1,E=5,O=-1;function J(){return _?!0:!(r.unstable_now()-O<E)}function V(){if(_=!1,P){var U=r.unstable_now();O=U;var B=!0;try{t:{M=!1,w&&(w=!1,T(F),F=-1),y=!0;var nt=g;try{e:{for(R(U),v=i(m);v!==null&&!(v.expirationTime>U&&J());){var ot=v.callback;if(typeof ot=="function"){v.callback=null,g=v.priorityLevel;var St=ot(v.expirationTime<=U);if(U=r.unstable_now(),typeof St=="function"){v.callback=St,R(U),B=!0;break e}v===i(m)&&s(m),R(U)}else s(m);v=i(m)}if(v!==null)B=!0;else{var z=i(h);z!==null&&$(H,z.startTime-U),B=!1}}break t}finally{v=null,g=nt,y=!1}B=void 0}}finally{B?k():P=!1}}}var k;if(typeof D=="function")k=function(){D(V)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,at=q.port2;q.port1.onmessage=V,k=function(){at.postMessage(null)}}else k=function(){x(V,0)};function $(U,B){F=x(function(){U(r.unstable_now())},B)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(U){U.callback=null},r.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(U){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var nt=g;g=B;try{return U()}finally{g=nt}},r.unstable_requestPaint=function(){_=!0},r.unstable_runWithPriority=function(U,B){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var nt=g;g=U;try{return B()}finally{g=nt}},r.unstable_scheduleCallback=function(U,B,nt){var ot=r.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?ot+nt:ot):nt=ot,U){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=nt+St,U={id:S++,callback:B,priorityLevel:U,startTime:nt,expirationTime:St,sortIndex:-1},nt>ot?(U.sortIndex=nt,t(h,U),i(m)===null&&U===i(h)&&(w?(T(F),F=-1):w=!0,$(H,nt-ot))):(U.sortIndex=St,t(m,U),M||y||(M=!0,P||(P=!0,k()))),U},r.unstable_shouldYield=J,r.unstable_wrapCallback=function(U){var B=g;return function(){var nt=g;g=B;try{return U.apply(this,arguments)}finally{g=nt}}}})(Bd)),Bd}var E_;function jy(){return E_||(E_=1,Fd.exports=ky()),Fd.exports}var Id={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function Xy(){if(T_)return Dn;T_=1;var r=Ep();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)h+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,S){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:h,implementation:S}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(m,h){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,S)},Dn.flushSync=function(m){var h=f.T,S=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=h,s.p=S,s.d.f()}},Dn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},Dn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Dn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var S=h.as,v=p(S,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,y=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;S==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:y}):S==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:y,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Dn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var S=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},Dn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var S=h.as,v=p(S,h.crossOrigin);s.d.L(m,S,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Dn.preloadModule=function(m,h){if(typeof m=="string")if(h){var S=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},Dn.requestFormReset=function(m){s.d.r(m)},Dn.unstable_batchedUpdates=function(m,h){return m(h)},Dn.useFormState=function(m,h,S){return f.H.useFormState(m,h,S)},Dn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Dn.version="19.2.4",Dn}var A_;function Wy(){if(A_)return Id.exports;A_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Id.exports=Xy(),Id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function qy(){if(R_)return Zo;R_=1;var r=jy(),t=Ep(),i=Wy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var b=!1,N=u.child;N;){if(N===a){b=!0,a=u,o=d;break}if(N===o){b=!0,o=u,a=d;break}N=N.sibling}if(!b){for(N=d.child;N;){if(N===a){b=!0,a=d,o=u;break}if(N===o){b=!0,o=d,a=u;break}N=N.sibling}if(!b)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),D=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),J=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var q=Symbol.for("react.client.reference");function at(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case x:return"Profiler";case _:return"StrictMode";case H:return"Suspense";case P:return"SuspenseList";case O:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case D:return e.displayName||"Context";case T:return(e._context.displayName||"Context")+".Consumer";case R:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:at(e.type)||"Memo";case E:n=e._payload,e=e._init;try{return at(e(n))}catch{}}return null}var $=Array.isArray,U=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt={pending:!1,data:null,method:null,action:null},ot=[],St=-1;function z(e){return{current:e}}function I(e){0>St||(e.current=ot[St],ot[St]=null,St--)}function W(e,n){St++,ot[St]=e.current,e.current=n}var lt=z(null),_t=z(null),K=z(null),st=z(null);function mt(e,n){switch(W(K,n),W(_t,e),W(lt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Vg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Vg(n),e=kg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}I(lt),W(lt,e)}function Y(){I(lt),I(_t),I(K)}function At(e){e.memoizedState!==null&&W(st,e);var n=lt.current,a=kg(n,e.type);n!==a&&(W(_t,e),W(lt,a))}function Ct(e){_t.current===e&&(I(lt),I(_t)),st.current===e&&(I(st),jo._currentValue=nt)}var It,Pt;function Ut(e){if(It===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);It=n&&n[1]||"",Pt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+It+e+Pt}var kt=!1;function Wt(e,n){if(!e||kt)return"";kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Rt=function(){throw Error()};if(Object.defineProperty(Rt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Rt,[])}catch(xt){var pt=xt}Reflect.construct(e,[],Rt)}else{try{Rt.call()}catch(xt){pt=xt}e.call(Rt.prototype)}}else{try{throw Error()}catch(xt){pt=xt}(Rt=e())&&typeof Rt.catch=="function"&&Rt.catch(function(){})}}catch(xt){if(xt&&pt&&typeof xt.stack=="string")return[xt.stack,pt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),b=d[0],N=d[1];if(b&&N){var X=b.split(`
`),dt=N.split(`
`);for(u=o=0;o<X.length&&!X[o].includes("DetermineComponentFrameRoot");)o++;for(;u<dt.length&&!dt[u].includes("DetermineComponentFrameRoot");)u++;if(o===X.length||u===dt.length)for(o=X.length-1,u=dt.length-1;1<=o&&0<=u&&X[o]!==dt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(X[o]!==dt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||X[o]!==dt[u]){var bt=`
`+X[o].replace(" at new "," at ");return e.displayName&&bt.includes("<anonymous>")&&(bt=bt.replace("<anonymous>",e.displayName)),bt}while(1<=o&&0<=u);break}}}finally{kt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ut(a):""}function se(e,n){switch(e.tag){case 26:case 27:case 5:return Ut(e.type);case 16:return Ut("Lazy");case 13:return e.child!==n&&n!==null?Ut("Suspense Fallback"):Ut("Suspense");case 19:return Ut("SuspenseList");case 0:case 15:return Wt(e.type,!1);case 11:return Wt(e.type.render,!1);case 1:return Wt(e.type,!0);case 31:return Ut("Activity");default:return""}}function j(e){try{var n="",a=null;do n+=se(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var he=Object.prototype.hasOwnProperty,le=r.unstable_scheduleCallback,pe=r.unstable_cancelCallback,qt=r.unstable_shouldYield,G=r.unstable_requestPaint,A=r.unstable_now,tt=r.unstable_getCurrentPriorityLevel,yt=r.unstable_ImmediatePriority,Tt=r.unstable_UserBlockingPriority,vt=r.unstable_NormalPriority,Zt=r.unstable_LowPriority,Lt=r.unstable_IdlePriority,ee=r.log,ae=r.unstable_setDisableYieldValue,Dt=null,wt=null;function Gt(e){if(typeof ee=="function"&&ae(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(Dt,e)}catch{}}var zt=Math.clz32?Math.clz32:it,jt=Math.log,ve=Math.LN2;function it(e){return e>>>=0,e===0?32:31-(jt(e)/ve|0)|0}var Ft=256,Ot=262144,Xt=4194304;function Nt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var N=o&134217727;return N!==0?(o=N&~d,o!==0?u=Nt(o):(b&=N,b!==0?u=Nt(b):a||(a=N&~e,a!==0&&(u=Nt(a))))):(N=o&~d,N!==0?u=Nt(N):b!==0?u=Nt(b):a||(a=o&~e,a!==0&&(u=Nt(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Kt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function fe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function He(){var e=Xt;return Xt<<=1,(Xt&62914560)===0&&(Xt=4194304),e}function Ne(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Bn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mi(e,n,a,o,u,d){var b=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var N=e.entanglements,X=e.expirationTimes,dt=e.hiddenUpdates;for(a=b&~a;0<a;){var bt=31-zt(a),Rt=1<<bt;N[bt]=0,X[bt]=-1;var pt=dt[bt];if(pt!==null)for(dt[bt]=null,bt=0;bt<pt.length;bt++){var xt=pt[bt];xt!==null&&(xt.lane&=-536870913)}a&=~Rt}o!==0&&ao(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(b&~n))}function ao(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ws(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Sl(e,n){var a=n&-n;return a=(a&42)!==0?1:qs(a),(a&(e.suspendedLanes|n))!==0?0:a}function qs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ys(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Fi(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:d_(e.type))}function Zs(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var bi=Math.random().toString(36).slice(2),cn="__reactFiber$"+bi,_n="__reactProps$"+bi,$i="__reactContainer$"+bi,Ca="__reactEvents$"+bi,yl="__reactListeners$"+bi,Ml="__reactHandles$"+bi,bl="__reactResources$"+bi,hs="__reactMarker$"+bi;function so(e){delete e[cn],delete e[_n],delete e[Ca],delete e[yl],delete e[Ml]}function Da(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[$i]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Kg(e);e!==null;){if(a=e[cn])return a;e=Kg(e)}return n}e=a,a=e.parentNode}return null}function Na(e){if(e=e[cn]||e[$i]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ps(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function L(e){var n=e[bl];return n||(n=e[bl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function et(e){e[hs]=!0}var gt=new Set,ht={};function ct(e,n){Bt(e,n),Bt(e+"Capture",n)}function Bt(e,n){for(ht[e]=n,e=0;e<n.length;e++)gt.add(n[e])}var Yt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ht={},te={};function ie(e){return he.call(te,e)?!0:he.call(Ht,e)?!1:Yt.test(e)?te[e]=!0:(Ht[e]=!0,!1)}function ce(e,n,a){if(ie(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function me(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Qt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function xe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $e(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tn(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(b){a=""+b,d.call(this,b)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(b){a=""+b},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Oe(e){if(!e._valueTracker){var n=$e(e)?"checked":"value";e._valueTracker=tn(e,n,""+e[n])}}function vn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=$e(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function $t(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var In=/[\n"\\]/g;function de(e){return e.replace(In,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zn(e,n,a,o,u,d,b,N){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),n!=null?b==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+xe(n)):e.value!==""+xe(n)&&(e.value=""+xe(n)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),n!=null?Ei(e,b,xe(n)):a!=null?Ei(e,b,xe(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?e.name=""+xe(N):e.removeAttribute("name")}function Qn(e,n,a,o,u,d,b,N){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Oe(e);return}a=a!=null?""+xe(a):"",n=n!=null?""+xe(n):a,N||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=N?e.checked:!!o,e.defaultChecked=!!o,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),Oe(e)}function Ei(e,n,a){n==="number"&&$t(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Jn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+xe(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ze(e,n,a){if(n!=null&&(n=""+xe(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+xe(a):""}function un(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if($(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=xe(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Oe(e)}function Hn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var fn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ti(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||fn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ta(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ti(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Ti(e,d,n[d])}function Ks(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ox=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function El(e){return Ox.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ea(){}var Cu=null;function Du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qs=null,Js=null;function Gp(e){var n=Na(e);if(n&&(e=n.stateNode)){var a=e[_n]||null;t:switch(e=n.stateNode,n.type){case"input":if(zn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+de(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[_n]||null;if(!u)throw Error(s(90));zn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&vn(o)}break t;case"textarea":ze(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Jn(e,!!a.multiple,n,!1)}}}var Nu=!1;function Vp(e,n,a){if(Nu)return e(n,a);Nu=!0;try{var o=e(n);return o}finally{if(Nu=!1,(Qs!==null||Js!==null)&&(fc(),Qs&&(n=Qs,e=Js,Js=Qs=null,Gp(n),e)))for(n=0;n<e.length;n++)Gp(e[n])}}function ro(e,n){var a=e.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=!1;if(na)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Uu=!1}var Ua=null,Lu=null,Tl=null;function kp(){if(Tl)return Tl;var e,n=Lu,a=n.length,o,u="value"in Ua?Ua.value:Ua.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var b=a-e;for(o=1;o<=b&&n[a-o]===u[d-o];o++);return Tl=u.slice(e,1<o?1-o:void 0)}function Al(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Rl(){return!0}function jp(){return!1}function jn(e){function n(a,o,u,d,b){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=b,this.currentTarget=null;for(var N in e)e.hasOwnProperty(N)&&(a=e[N],this[N]=a?a(d):d[N]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Rl:jp,this.isPropagationStopped=jp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),n}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wl=jn(ms),lo=v({},ms,{view:0,detail:0}),Px=jn(lo),Ou,Pu,co,Cl=v({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==co&&(co&&e.type==="mousemove"?(Ou=e.screenX-co.screenX,Pu=e.screenY-co.screenY):Pu=Ou=0,co=e),Ou)},movementY:function(e){return"movementY"in e?e.movementY:Pu}}),Xp=jn(Cl),Fx=v({},Cl,{dataTransfer:0}),Bx=jn(Fx),Ix=v({},lo,{relatedTarget:0}),Fu=jn(Ix),zx=v({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Hx=jn(zx),Gx=v({},ms,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vx=jn(Gx),kx=v({},ms,{data:0}),Wp=jn(kx),jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Wx[e])?!!n[e]:!1}function Bu(){return qx}var Yx=v({},lo,{key:function(e){if(e.key){var n=jx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(e){return e.type==="keypress"?Al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zx=jn(Yx),Kx=v({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qp=jn(Kx),Qx=v({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),Jx=jn(Qx),$x=v({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),tS=jn($x),eS=v({},Cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nS=jn(eS),iS=v({},ms,{newState:0,oldState:0}),aS=jn(iS),sS=[9,13,27,32],Iu=na&&"CompositionEvent"in window,uo=null;na&&"documentMode"in document&&(uo=document.documentMode);var rS=na&&"TextEvent"in window&&!uo,Yp=na&&(!Iu||uo&&8<uo&&11>=uo),Zp=" ",Kp=!1;function Qp(e,n){switch(e){case"keyup":return sS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $s=!1;function oS(e,n){switch(e){case"compositionend":return Jp(n);case"keypress":return n.which!==32?null:(Kp=!0,Zp);case"textInput":return e=n.data,e===Zp&&Kp?null:e;default:return null}}function lS(e,n){if($s)return e==="compositionend"||!Iu&&Qp(e,n)?(e=kp(),Tl=Lu=Ua=null,$s=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Yp&&n.locale!=="ko"?null:n.data;default:return null}}var cS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!cS[e.type]:n==="textarea"}function tm(e,n,a,o){Qs?Js?Js.push(o):Js=[o]:Qs=o,n=vc(n,"onChange"),0<n.length&&(a=new wl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var fo=null,ho=null;function uS(e){Fg(e,0)}function Dl(e){var n=ps(e);if(vn(n))return e}function em(e,n){if(e==="change")return n}var nm=!1;if(na){var zu;if(na){var Hu="oninput"in document;if(!Hu){var im=document.createElement("div");im.setAttribute("oninput","return;"),Hu=typeof im.oninput=="function"}zu=Hu}else zu=!1;nm=zu&&(!document.documentMode||9<document.documentMode)}function am(){fo&&(fo.detachEvent("onpropertychange",sm),ho=fo=null)}function sm(e){if(e.propertyName==="value"&&Dl(ho)){var n=[];tm(n,ho,e,Du(e)),Vp(uS,n)}}function fS(e,n,a){e==="focusin"?(am(),fo=n,ho=a,fo.attachEvent("onpropertychange",sm)):e==="focusout"&&am()}function dS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dl(ho)}function hS(e,n){if(e==="click")return Dl(n)}function pS(e,n){if(e==="input"||e==="change")return Dl(n)}function mS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:mS;function po(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!he.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function rm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function om(e,n){var a=rm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=rm(a)}}function lm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?lm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function cm(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=$t(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=$t(e.document)}return n}function Gu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var gS=na&&"documentMode"in document&&11>=document.documentMode,tr=null,Vu=null,mo=null,ku=!1;function um(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ku||tr==null||tr!==$t(o)||(o=tr,"selectionStart"in o&&Gu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),mo&&po(mo,o)||(mo=o,o=vc(Vu,"onSelect"),0<o.length&&(n=new wl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=tr)))}function gs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var er={animationend:gs("Animation","AnimationEnd"),animationiteration:gs("Animation","AnimationIteration"),animationstart:gs("Animation","AnimationStart"),transitionrun:gs("Transition","TransitionRun"),transitionstart:gs("Transition","TransitionStart"),transitioncancel:gs("Transition","TransitionCancel"),transitionend:gs("Transition","TransitionEnd")},ju={},fm={};na&&(fm=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function _s(e){if(ju[e])return ju[e];if(!er[e])return e;var n=er[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in fm)return ju[e]=n[a];return e}var dm=_s("animationend"),hm=_s("animationiteration"),pm=_s("animationstart"),_S=_s("transitionrun"),vS=_s("transitionstart"),xS=_s("transitioncancel"),mm=_s("transitionend"),gm=new Map,Xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xu.push("scrollEnd");function Ai(e,n){gm.set(e,n),ct(n,[e])}var Nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],nr=0,Wu=0;function Ul(){for(var e=nr,n=Wu=nr=0;n<e;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var d=fi[n];if(fi[n++]=null,o!==null&&u!==null){var b=o.pending;b===null?u.next=u:(u.next=b.next,b.next=u),o.pending=u}d!==0&&_m(a,u,d)}}function Ll(e,n,a,o){fi[nr++]=e,fi[nr++]=n,fi[nr++]=a,fi[nr++]=o,Wu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function qu(e,n,a,o){return Ll(e,n,a,o),Ol(e)}function vs(e,n){return Ll(e,null,null,n),Ol(e)}function _m(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-zt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Ol(e){if(50<Bo)throw Bo=0,id=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ir={};function SS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new SS(e,n,a,o)}function Yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function vm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Pl(e,n,a,o,u,d){var b=0;if(o=e,typeof e=="function")Yu(e)&&(b=1);else if(typeof e=="string")b=Ty(e,a,lt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case O:return e=ti(31,a,n,u),e.elementType=O,e.lanes=d,e;case w:return xs(a.children,u,d,n);case _:b=8,u|=24;break;case x:return e=ti(12,a,n,u|2),e.elementType=x,e.lanes=d,e;case H:return e=ti(13,a,n,u),e.elementType=H,e.lanes=d,e;case P:return e=ti(19,a,n,u),e.elementType=P,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:b=10;break t;case T:b=9;break t;case R:b=11;break t;case F:b=14;break t;case E:b=16,o=null;break t}b=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(b,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function xs(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function Zu(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function xm(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Ku(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Sm=new WeakMap;function di(e,n){if(typeof e=="object"&&e!==null){var a=Sm.get(e);return a!==void 0?a:(n={value:e,source:n,stack:j(n)},Sm.set(e,n),n)}return{value:e,source:n,stack:j(n)}}var ar=[],sr=0,Fl=null,go=0,hi=[],pi=0,La=null,Bi=1,Ii="";function aa(e,n){ar[sr++]=go,ar[sr++]=Fl,Fl=e,go=n}function ym(e,n,a){hi[pi++]=Bi,hi[pi++]=Ii,hi[pi++]=La,La=e;var o=Bi;e=Ii;var u=32-zt(o)-1;o&=~(1<<u),a+=1;var d=32-zt(n)+u;if(30<d){var b=u-u%5;d=(o&(1<<b)-1).toString(32),o>>=b,u-=b,Bi=1<<32-zt(n)+u|a<<u|o,Ii=d+e}else Bi=1<<d|a<<u|o,Ii=e}function Qu(e){e.return!==null&&(aa(e,1),ym(e,1,0))}function Ju(e){for(;e===Fl;)Fl=ar[--sr],ar[sr]=null,go=ar[--sr],ar[sr]=null;for(;e===La;)La=hi[--pi],hi[pi]=null,Ii=hi[--pi],hi[pi]=null,Bi=hi[--pi],hi[pi]=null}function Mm(e,n){hi[pi++]=Bi,hi[pi++]=Ii,hi[pi++]=La,Bi=n.id,Ii=n.overflow,La=e}var En=null,Ze=null,Ce=!1,Oa=null,mi=!1,$u=Error(s(519));function Pa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _o(di(n,e)),$u}function bm(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[cn]=e,n[_n]=o,a){case"dialog":Te("cancel",n),Te("close",n);break;case"iframe":case"object":case"embed":Te("load",n);break;case"video":case"audio":for(a=0;a<zo.length;a++)Te(zo[a],n);break;case"source":Te("error",n);break;case"img":case"image":case"link":Te("error",n),Te("load",n);break;case"details":Te("toggle",n);break;case"input":Te("invalid",n),Qn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Te("invalid",n);break;case"textarea":Te("invalid",n),un(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Hg(n.textContent,a)?(o.popover!=null&&(Te("beforetoggle",n),Te("toggle",n)),o.onScroll!=null&&Te("scroll",n),o.onScrollEnd!=null&&Te("scrollend",n),o.onClick!=null&&(n.onclick=ea),n=!0):n=!1,n||Pa(e,!0)}function Em(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:En=En.return}}function rr(e){if(e!==En)return!1;if(!Ce)return Em(e),Ce=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||vd(e.type,e.memoizedProps)),a=!a),a&&Ze&&Pa(e),Em(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Zg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ze=Zg(e)}else n===27?(n=Ze,Za(e.type)?(e=bd,bd=null,Ze=e):Ze=n):Ze=En?_i(e.stateNode.nextSibling):null;return!0}function Ss(){Ze=En=null,Ce=!1}function tf(){var e=Oa;return e!==null&&(Yn===null?Yn=e:Yn.push.apply(Yn,e),Oa=null),e}function _o(e){Oa===null?Oa=[e]:Oa.push(e)}var ef=z(null),ys=null,sa=null;function Fa(e,n,a){W(ef,n._currentValue),n._currentValue=a}function ra(e){e._currentValue=ef.current,I(ef)}function nf(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function af(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var b=u.child;d=d.firstContext;t:for(;d!==null;){var N=d;d=u;for(var X=0;X<n.length;X++)if(N.context===n[X]){d.lanes|=a,N=d.alternate,N!==null&&(N.lanes|=a),nf(d.return,a,e),o||(b=null);break t}d=N.next}}else if(u.tag===18){if(b=u.return,b===null)throw Error(s(341));b.lanes|=a,d=b.alternate,d!==null&&(d.lanes|=a),nf(b,a,e),b=null}else b=u.child;if(b!==null)b.return=u;else for(b=u;b!==null;){if(b===e){b=null;break}if(u=b.sibling,u!==null){u.return=b.return,b=u;break}b=b.return}u=b}}function or(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var b=u.alternate;if(b===null)throw Error(s(387));if(b=b.memoizedProps,b!==null){var N=u.type;$n(u.pendingProps.value,b.value)||(e!==null?e.push(N):e=[N])}}else if(u===st.current){if(b=u.alternate,b===null)throw Error(s(387));b.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(jo):e=[jo])}u=u.return}e!==null&&af(n,e,a,o),n.flags|=262144}function Bl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ms(e){ys=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return Tm(ys,e)}function Il(e,n){return ys===null&&Ms(e),Tm(e,n)}function Tm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},sa===null){if(e===null)throw Error(s(308));sa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else sa=sa.next=n;return a}var yS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},MS=r.unstable_scheduleCallback,bS=r.unstable_NormalPriority,dn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sf(){return{controller:new yS,data:new Map,refCount:0}}function vo(e){e.refCount--,e.refCount===0&&MS(bS,function(){e.controller.abort()})}var xo=null,rf=0,lr=0,cr=null;function ES(e,n){if(xo===null){var a=xo=[];rf=0,lr=cd(),cr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return rf++,n.then(Am,Am),n}function Am(){if(--rf===0&&xo!==null){cr!==null&&(cr.status="fulfilled");var e=xo;xo=null,lr=0,cr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function TS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Rm=U.S;U.S=function(e,n){ug=A(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ES(e,n),Rm!==null&&Rm(e,n)};var bs=z(null);function of(){var e=bs.current;return e!==null?e:Ye.pooledCache}function zl(e,n){n===null?W(bs,bs.current):W(bs,n.pool)}function wm(){var e=of();return e===null?null:{parent:dn._currentValue,pool:e}}var ur=Error(s(460)),lf=Error(s(474)),Hl=Error(s(542)),Gl={then:function(){}};function Cm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ea,ea),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Um(e),e;default:if(typeof n.status=="string")n.then(ea,ea);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Um(e),e}throw Ts=n,ur}}function Es(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ts=a,ur):a}}var Ts=null;function Nm(){if(Ts===null)throw Error(s(459));var e=Ts;return Ts=null,e}function Um(e){if(e===ur||e===Hl)throw Error(s(483))}var fr=null,So=0;function Vl(e){var n=So;return So+=1,fr===null&&(fr=[]),Dm(fr,e,n)}function yo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function kl(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Lm(e){function n(rt,Q){if(e){var ft=rt.deletions;ft===null?(rt.deletions=[Q],rt.flags|=16):ft.push(Q)}}function a(rt,Q){if(!e)return null;for(;Q!==null;)n(rt,Q),Q=Q.sibling;return null}function o(rt){for(var Q=new Map;rt!==null;)rt.key!==null?Q.set(rt.key,rt):Q.set(rt.index,rt),rt=rt.sibling;return Q}function u(rt,Q){return rt=ia(rt,Q),rt.index=0,rt.sibling=null,rt}function d(rt,Q,ft){return rt.index=ft,e?(ft=rt.alternate,ft!==null?(ft=ft.index,ft<Q?(rt.flags|=67108866,Q):ft):(rt.flags|=67108866,Q)):(rt.flags|=1048576,Q)}function b(rt){return e&&rt.alternate===null&&(rt.flags|=67108866),rt}function N(rt,Q,ft,Et){return Q===null||Q.tag!==6?(Q=Zu(ft,rt.mode,Et),Q.return=rt,Q):(Q=u(Q,ft),Q.return=rt,Q)}function X(rt,Q,ft,Et){var re=ft.type;return re===w?bt(rt,Q,ft.props.children,Et,ft.key):Q!==null&&(Q.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===E&&Es(re)===Q.type)?(Q=u(Q,ft.props),yo(Q,ft),Q.return=rt,Q):(Q=Pl(ft.type,ft.key,ft.props,null,rt.mode,Et),yo(Q,ft),Q.return=rt,Q)}function dt(rt,Q,ft,Et){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==ft.containerInfo||Q.stateNode.implementation!==ft.implementation?(Q=Ku(ft,rt.mode,Et),Q.return=rt,Q):(Q=u(Q,ft.children||[]),Q.return=rt,Q)}function bt(rt,Q,ft,Et,re){return Q===null||Q.tag!==7?(Q=xs(ft,rt.mode,Et,re),Q.return=rt,Q):(Q=u(Q,ft),Q.return=rt,Q)}function Rt(rt,Q,ft){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=Zu(""+Q,rt.mode,ft),Q.return=rt,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return ft=Pl(Q.type,Q.key,Q.props,null,rt.mode,ft),yo(ft,Q),ft.return=rt,ft;case M:return Q=Ku(Q,rt.mode,ft),Q.return=rt,Q;case E:return Q=Es(Q),Rt(rt,Q,ft)}if($(Q)||k(Q))return Q=xs(Q,rt.mode,ft,null),Q.return=rt,Q;if(typeof Q.then=="function")return Rt(rt,Vl(Q),ft);if(Q.$$typeof===D)return Rt(rt,Il(rt,Q),ft);kl(rt,Q)}return null}function pt(rt,Q,ft,Et){var re=Q!==null?Q.key:null;if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return re!==null?null:N(rt,Q,""+ft,Et);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case y:return ft.key===re?X(rt,Q,ft,Et):null;case M:return ft.key===re?dt(rt,Q,ft,Et):null;case E:return ft=Es(ft),pt(rt,Q,ft,Et)}if($(ft)||k(ft))return re!==null?null:bt(rt,Q,ft,Et,null);if(typeof ft.then=="function")return pt(rt,Q,Vl(ft),Et);if(ft.$$typeof===D)return pt(rt,Q,Il(rt,ft),Et);kl(rt,ft)}return null}function xt(rt,Q,ft,Et,re){if(typeof Et=="string"&&Et!==""||typeof Et=="number"||typeof Et=="bigint")return rt=rt.get(ft)||null,N(Q,rt,""+Et,re);if(typeof Et=="object"&&Et!==null){switch(Et.$$typeof){case y:return rt=rt.get(Et.key===null?ft:Et.key)||null,X(Q,rt,Et,re);case M:return rt=rt.get(Et.key===null?ft:Et.key)||null,dt(Q,rt,Et,re);case E:return Et=Es(Et),xt(rt,Q,ft,Et,re)}if($(Et)||k(Et))return rt=rt.get(ft)||null,bt(Q,rt,Et,re,null);if(typeof Et.then=="function")return xt(rt,Q,ft,Vl(Et),re);if(Et.$$typeof===D)return xt(rt,Q,ft,Il(Q,Et),re);kl(Q,Et)}return null}function Jt(rt,Q,ft,Et){for(var re=null,Pe=null,ne=Q,Se=Q=0,we=null;ne!==null&&Se<ft.length;Se++){ne.index>Se?(we=ne,ne=null):we=ne.sibling;var Fe=pt(rt,ne,ft[Se],Et);if(Fe===null){ne===null&&(ne=we);break}e&&ne&&Fe.alternate===null&&n(rt,ne),Q=d(Fe,Q,Se),Pe===null?re=Fe:Pe.sibling=Fe,Pe=Fe,ne=we}if(Se===ft.length)return a(rt,ne),Ce&&aa(rt,Se),re;if(ne===null){for(;Se<ft.length;Se++)ne=Rt(rt,ft[Se],Et),ne!==null&&(Q=d(ne,Q,Se),Pe===null?re=ne:Pe.sibling=ne,Pe=ne);return Ce&&aa(rt,Se),re}for(ne=o(ne);Se<ft.length;Se++)we=xt(ne,rt,Se,ft[Se],Et),we!==null&&(e&&we.alternate!==null&&ne.delete(we.key===null?Se:we.key),Q=d(we,Q,Se),Pe===null?re=we:Pe.sibling=we,Pe=we);return e&&ne.forEach(function(ts){return n(rt,ts)}),Ce&&aa(rt,Se),re}function oe(rt,Q,ft,Et){if(ft==null)throw Error(s(151));for(var re=null,Pe=null,ne=Q,Se=Q=0,we=null,Fe=ft.next();ne!==null&&!Fe.done;Se++,Fe=ft.next()){ne.index>Se?(we=ne,ne=null):we=ne.sibling;var ts=pt(rt,ne,Fe.value,Et);if(ts===null){ne===null&&(ne=we);break}e&&ne&&ts.alternate===null&&n(rt,ne),Q=d(ts,Q,Se),Pe===null?re=ts:Pe.sibling=ts,Pe=ts,ne=we}if(Fe.done)return a(rt,ne),Ce&&aa(rt,Se),re;if(ne===null){for(;!Fe.done;Se++,Fe=ft.next())Fe=Rt(rt,Fe.value,Et),Fe!==null&&(Q=d(Fe,Q,Se),Pe===null?re=Fe:Pe.sibling=Fe,Pe=Fe);return Ce&&aa(rt,Se),re}for(ne=o(ne);!Fe.done;Se++,Fe=ft.next())Fe=xt(ne,rt,Se,Fe.value,Et),Fe!==null&&(e&&Fe.alternate!==null&&ne.delete(Fe.key===null?Se:Fe.key),Q=d(Fe,Q,Se),Pe===null?re=Fe:Pe.sibling=Fe,Pe=Fe);return e&&ne.forEach(function(Fy){return n(rt,Fy)}),Ce&&aa(rt,Se),re}function We(rt,Q,ft,Et){if(typeof ft=="object"&&ft!==null&&ft.type===w&&ft.key===null&&(ft=ft.props.children),typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case y:t:{for(var re=ft.key;Q!==null;){if(Q.key===re){if(re=ft.type,re===w){if(Q.tag===7){a(rt,Q.sibling),Et=u(Q,ft.props.children),Et.return=rt,rt=Et;break t}}else if(Q.elementType===re||typeof re=="object"&&re!==null&&re.$$typeof===E&&Es(re)===Q.type){a(rt,Q.sibling),Et=u(Q,ft.props),yo(Et,ft),Et.return=rt,rt=Et;break t}a(rt,Q);break}else n(rt,Q);Q=Q.sibling}ft.type===w?(Et=xs(ft.props.children,rt.mode,Et,ft.key),Et.return=rt,rt=Et):(Et=Pl(ft.type,ft.key,ft.props,null,rt.mode,Et),yo(Et,ft),Et.return=rt,rt=Et)}return b(rt);case M:t:{for(re=ft.key;Q!==null;){if(Q.key===re)if(Q.tag===4&&Q.stateNode.containerInfo===ft.containerInfo&&Q.stateNode.implementation===ft.implementation){a(rt,Q.sibling),Et=u(Q,ft.children||[]),Et.return=rt,rt=Et;break t}else{a(rt,Q);break}else n(rt,Q);Q=Q.sibling}Et=Ku(ft,rt.mode,Et),Et.return=rt,rt=Et}return b(rt);case E:return ft=Es(ft),We(rt,Q,ft,Et)}if($(ft))return Jt(rt,Q,ft,Et);if(k(ft)){if(re=k(ft),typeof re!="function")throw Error(s(150));return ft=re.call(ft),oe(rt,Q,ft,Et)}if(typeof ft.then=="function")return We(rt,Q,Vl(ft),Et);if(ft.$$typeof===D)return We(rt,Q,Il(rt,ft),Et);kl(rt,ft)}return typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint"?(ft=""+ft,Q!==null&&Q.tag===6?(a(rt,Q.sibling),Et=u(Q,ft),Et.return=rt,rt=Et):(a(rt,Q),Et=Zu(ft,rt.mode,Et),Et.return=rt,rt=Et),b(rt)):a(rt,Q)}return function(rt,Q,ft,Et){try{So=0;var re=We(rt,Q,ft,Et);return fr=null,re}catch(ne){if(ne===ur||ne===Hl)throw ne;var Pe=ti(29,ne,null,rt.mode);return Pe.lanes=Et,Pe.return=rt,Pe}finally{}}}var As=Lm(!0),Om=Lm(!1),Ba=!1;function cf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Be&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ol(e),_m(e,null,a),n}return Ll(e,o,n,a),Ol(e)}function Mo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ws(e,a)}}function ff(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=b:d=d.next=b,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var df=!1;function bo(){if(df){var e=cr;if(e!==null)throw e}}function Eo(e,n,a,o){df=!1;var u=e.updateQueue;Ba=!1;var d=u.firstBaseUpdate,b=u.lastBaseUpdate,N=u.shared.pending;if(N!==null){u.shared.pending=null;var X=N,dt=X.next;X.next=null,b===null?d=dt:b.next=dt,b=X;var bt=e.alternate;bt!==null&&(bt=bt.updateQueue,N=bt.lastBaseUpdate,N!==b&&(N===null?bt.firstBaseUpdate=dt:N.next=dt,bt.lastBaseUpdate=X))}if(d!==null){var Rt=u.baseState;b=0,bt=dt=X=null,N=d;do{var pt=N.lane&-536870913,xt=pt!==N.lane;if(xt?(Re&pt)===pt:(o&pt)===pt){pt!==0&&pt===lr&&(df=!0),bt!==null&&(bt=bt.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});t:{var Jt=e,oe=N;pt=n;var We=a;switch(oe.tag){case 1:if(Jt=oe.payload,typeof Jt=="function"){Rt=Jt.call(We,Rt,pt);break t}Rt=Jt;break t;case 3:Jt.flags=Jt.flags&-65537|128;case 0:if(Jt=oe.payload,pt=typeof Jt=="function"?Jt.call(We,Rt,pt):Jt,pt==null)break t;Rt=v({},Rt,pt);break t;case 2:Ba=!0}}pt=N.callback,pt!==null&&(e.flags|=64,xt&&(e.flags|=8192),xt=u.callbacks,xt===null?u.callbacks=[pt]:xt.push(pt))}else xt={lane:pt,tag:N.tag,payload:N.payload,callback:N.callback,next:null},bt===null?(dt=bt=xt,X=Rt):bt=bt.next=xt,b|=pt;if(N=N.next,N===null){if(N=u.shared.pending,N===null)break;xt=N,N=xt.next,xt.next=null,u.lastBaseUpdate=xt,u.shared.pending=null}}while(!0);bt===null&&(X=Rt),u.baseState=X,u.firstBaseUpdate=dt,u.lastBaseUpdate=bt,d===null&&(u.shared.lanes=0),ja|=b,e.lanes=b,e.memoizedState=Rt}}function Pm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Fm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pm(a[e],n)}var dr=z(null),jl=z(0);function Bm(e,n){e=ma,W(jl,e),W(dr,n),ma=e|n.baseLanes}function hf(){W(jl,ma),W(dr,dr.current)}function pf(){ma=jl.current,I(dr),I(jl)}var ei=z(null),gi=null;function Ha(e){var n=e.alternate;W(rn,rn.current&1),W(ei,e),gi===null&&(n===null||dr.current!==null||n.memoizedState!==null)&&(gi=e)}function mf(e){W(rn,rn.current),W(ei,e),gi===null&&(gi=e)}function Im(e){e.tag===22?(W(rn,rn.current),W(ei,e),gi===null&&(gi=e)):Ga()}function Ga(){W(rn,rn.current),W(ei,ei.current)}function ni(e){I(ei),gi===e&&(gi=null),I(rn)}var rn=z(0);function Xl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||yd(a)||Md(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oa=0,_e=null,je=null,hn=null,Wl=!1,hr=!1,Rs=!1,ql=0,To=0,pr=null,AS=0;function nn(){throw Error(s(321))}function gf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function _f(e,n,a,o,u,d){return oa=d,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,U.H=e===null||e.memoizedState===null?y0:Uf,Rs=!1,d=a(o,u),Rs=!1,hr&&(d=Hm(n,a,o,u)),zm(e),d}function zm(e){U.H=wo;var n=je!==null&&je.next!==null;if(oa=0,hn=je=_e=null,Wl=!1,To=0,pr=null,n)throw Error(s(300));e===null||pn||(e=e.dependencies,e!==null&&Bl(e)&&(pn=!0))}function Hm(e,n,a,o){_e=e;var u=0;do{if(hr&&(pr=null),To=0,hr=!1,25<=u)throw Error(s(301));if(u+=1,hn=je=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}U.H=M0,d=n(a,o)}while(hr);return d}function RS(){var e=U.H,n=e.useState()[0];return n=typeof n.then=="function"?Ao(n):n,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(_e.flags|=1024),n}function vf(){var e=ql!==0;return ql=0,e}function xf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Sf(e){if(Wl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Wl=!1}oa=0,hn=je=_e=null,hr=!1,To=ql=0,pr=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?_e.memoizedState=hn=e:hn=hn.next=e,hn}function on(){if(je===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var n=hn===null?_e.memoizedState:hn.next;if(n!==null)hn=n,je=e;else{if(e===null)throw _e.alternate===null?Error(s(467)):Error(s(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},hn===null?_e.memoizedState=hn=e:hn=hn.next=e}return hn}function Yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var n=To;return To+=1,pr===null&&(pr=[]),e=Dm(pr,e,n),n=_e,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,U.H=n===null||n.memoizedState===null?y0:Uf),e}function Zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ao(e);if(e.$$typeof===D)return Tn(e)}throw Error(s(438,String(e)))}function yf(e){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=_e.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Yl(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=J;return n.index++,a}function la(e,n){return typeof n=="function"?n(e):n}function Kl(e){var n=on();return Mf(n,je,e)}function Mf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var b=u.next;u.next=d.next,d.next=b}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var N=b=null,X=null,dt=n,bt=!1;do{var Rt=dt.lane&-536870913;if(Rt!==dt.lane?(Re&Rt)===Rt:(oa&Rt)===Rt){var pt=dt.revertLane;if(pt===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:dt.action,hasEagerState:dt.hasEagerState,eagerState:dt.eagerState,next:null}),Rt===lr&&(bt=!0);else if((oa&pt)===pt){dt=dt.next,pt===lr&&(bt=!0);continue}else Rt={lane:0,revertLane:dt.revertLane,gesture:null,action:dt.action,hasEagerState:dt.hasEagerState,eagerState:dt.eagerState,next:null},X===null?(N=X=Rt,b=d):X=X.next=Rt,_e.lanes|=pt,ja|=pt;Rt=dt.action,Rs&&a(d,Rt),d=dt.hasEagerState?dt.eagerState:a(d,Rt)}else pt={lane:Rt,revertLane:dt.revertLane,gesture:dt.gesture,action:dt.action,hasEagerState:dt.hasEagerState,eagerState:dt.eagerState,next:null},X===null?(N=X=pt,b=d):X=X.next=pt,_e.lanes|=Rt,ja|=Rt;dt=dt.next}while(dt!==null&&dt!==n);if(X===null?b=d:X.next=N,!$n(d,e.memoizedState)&&(pn=!0,bt&&(a=cr,a!==null)))throw a;e.memoizedState=d,e.baseState=b,e.baseQueue=X,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function bf(e){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var b=u=u.next;do d=e(d,b.action),b=b.next;while(b!==u);$n(d,n.memoizedState)||(pn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Gm(e,n,a){var o=_e,u=on(),d=Ce;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var b=!$n((je||u).memoizedState,a);if(b&&(u.memoizedState=a,pn=!0),u=u.queue,Af(jm.bind(null,o,u,e),[e]),u.getSnapshot!==n||b||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,mr(9,{destroy:void 0},km.bind(null,o,u,a,n),null),Ye===null)throw Error(s(349));d||(oa&127)!==0||Vm(o,n,a)}return a}function Vm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=Yl(),_e.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function km(e,n,a,o){n.value=a,n.getSnapshot=o,Xm(n)&&Wm(e)}function jm(e,n,a){return a(function(){Xm(n)&&Wm(e)})}function Xm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function Wm(e){var n=vs(e,2);n!==null&&Zn(n,e,2)}function Ef(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),Rs){Gt(!0);try{a()}finally{Gt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},n}function qm(e,n,a,o){return e.baseState=a,Mf(e,je,typeof o=="function"?o:la)}function wS(e,n,a,o,u){if($l(e))throw Error(s(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){d.listeners.push(b)}};U.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Ym(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Ym(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=U.T,b={};U.T=b;try{var N=a(u,o),X=U.S;X!==null&&X(b,N),Zm(e,n,N)}catch(dt){Tf(e,n,dt)}finally{d!==null&&b.types!==null&&(d.types=b.types),U.T=d}}else try{d=a(u,o),Zm(e,n,d)}catch(dt){Tf(e,n,dt)}}function Zm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Km(e,n,o)},function(o){return Tf(e,n,o)}):Km(e,n,a)}function Km(e,n,a){n.status="fulfilled",n.value=a,Qm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Ym(e,a)))}function Tf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Qm(n),n=n.next;while(n!==o)}e.action=null}function Qm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Jm(e,n){return n}function $m(e,n){if(Ce){var a=Ye.formState;if(a!==null){t:{var o=_e;if(Ce){if(Ze){e:{for(var u=Ze,d=mi;u.nodeType!==8;){if(!d){u=null;break e}if(u=_i(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Ze=_i(u.nextSibling),o=u.data==="F!";break t}}Pa(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jm,lastRenderedState:n},a.queue=o,a=v0.bind(null,_e,o),o.dispatch=a,o=Ef(!1),d=Nf.bind(null,_e,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=wS.bind(null,_e,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function t0(e){var n=on();return e0(n,je,e)}function e0(e,n,a){if(n=Mf(e,n,Jm)[0],e=Kl(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ao(n)}catch(b){throw b===ur?Hl:b}else o=n;n=on();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,mr(9,{destroy:void 0},CS.bind(null,u,a),null)),[o,d,e]}function CS(e,n){e.action=n}function n0(e){var n=on(),a=je;if(a!==null)return e0(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function mr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=_e.updateQueue,n===null&&(n=Yl(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function i0(){return on().memoizedState}function Ql(e,n,a,o){var u=Gn();_e.flags|=e,u.memoizedState=mr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Jl(e,n,a,o){var u=on();o=o===void 0?null:o;var d=u.memoizedState.inst;je!==null&&o!==null&&gf(o,je.memoizedState.deps)?u.memoizedState=mr(n,d,a,o):(_e.flags|=e,u.memoizedState=mr(1|n,d,a,o))}function a0(e,n){Ql(8390656,8,e,n)}function Af(e,n){Jl(2048,8,e,n)}function DS(e){_e.flags|=4;var n=_e.updateQueue;if(n===null)n=Yl(),_e.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function s0(e){var n=on().memoizedState;return DS({ref:n,nextImpl:e}),function(){if((Be&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function r0(e,n){return Jl(4,2,e,n)}function o0(e,n){return Jl(4,4,e,n)}function l0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function c0(e,n,a){a=a!=null?a.concat([e]):null,Jl(4,4,l0.bind(null,n,e),a)}function Rf(){}function u0(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&gf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function f0(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&gf(n,o[1]))return o[0];if(o=e(),Rs){Gt(!0);try{e()}finally{Gt(!1)}}return a.memoizedState=[o,n],o}function wf(e,n,a){return a===void 0||(oa&1073741824)!==0&&(Re&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=dg(),_e.lanes|=e,ja|=e,a)}function d0(e,n,a,o){return $n(a,n)?a:dr.current!==null?(e=wf(e,a,o),$n(e,n)||(pn=!0),e):(oa&42)===0||(oa&1073741824)!==0&&(Re&261930)===0?(pn=!0,e.memoizedState=a):(e=dg(),_e.lanes|=e,ja|=e,n)}function h0(e,n,a,o,u){var d=B.p;B.p=d!==0&&8>d?d:8;var b=U.T,N={};U.T=N,Nf(e,!1,n,a);try{var X=u(),dt=U.S;if(dt!==null&&dt(N,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var bt=TS(X,o);Ro(e,n,bt,si(e))}else Ro(e,n,o,si(e))}catch(Rt){Ro(e,n,{then:function(){},status:"rejected",reason:Rt},si())}finally{B.p=d,b!==null&&N.types!==null&&(b.types=N.types),U.T=b}}function NS(){}function Cf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=p0(e).queue;h0(e,u,n,nt,a===null?NS:function(){return m0(e),a(o)})}function p0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:nt,baseState:nt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:nt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function m0(e){var n=p0(e);n.next===null&&(n=e.alternate.memoizedState),Ro(e,n.next.queue,{},si())}function Df(){return Tn(jo)}function g0(){return on().memoizedState}function _0(){return on().memoizedState}function US(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=Ia(a);var o=za(n,e,a);o!==null&&(Zn(o,n,a),Mo(o,n,a)),n={cache:sf()},e.payload=n;return}n=n.return}}function LS(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},$l(e)?x0(n,a):(a=qu(e,n,a,o),a!==null&&(Zn(a,e,o),S0(a,n,o)))}function v0(e,n,a){var o=si();Ro(e,n,a,o)}function Ro(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if($l(e))x0(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var b=n.lastRenderedState,N=d(b,a);if(u.hasEagerState=!0,u.eagerState=N,$n(N,b))return Ll(e,n,u,0),Ye===null&&Ul(),!1}catch{}finally{}if(a=qu(e,n,u,o),a!==null)return Zn(a,e,o),S0(a,n,o),!0}return!1}function Nf(e,n,a,o){if(o={lane:2,revertLane:cd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},$l(e)){if(n)throw Error(s(479))}else n=qu(e,a,o,2),n!==null&&Zn(n,e,2)}function $l(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function x0(e,n){hr=Wl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function S0(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ws(e,a)}}var wo={readContext:Tn,use:Zl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};wo.useEffectEvent=nn;var y0={readContext:Tn,use:Zl,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:a0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ql(4194308,4,l0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ql(4194308,4,e,n)},useInsertionEffect:function(e,n){Ql(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var o=e();if(Rs){Gt(!0);try{e()}finally{Gt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(Rs){Gt(!0);try{a(n)}finally{Gt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=LS.bind(null,_e,e),[o.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=Ef(e);var n=e.queue,a=v0.bind(null,_e,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Rf,useDeferredValue:function(e,n){var a=Gn();return wf(a,e,n)},useTransition:function(){var e=Ef(!1);return e=h0.bind(null,_e,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=_e,u=Gn();if(Ce){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ye===null)throw Error(s(349));(Re&127)!==0||Vm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,a0(jm.bind(null,o,d,e),[e]),o.flags|=2048,mr(9,{destroy:void 0},km.bind(null,o,d,a,n),null),a},useId:function(){var e=Gn(),n=Ye.identifierPrefix;if(Ce){var a=Ii,o=Bi;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ql++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=AS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Df,useFormState:$m,useActionState:$m,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Nf.bind(null,_e,!0,a),a.dispatch=n,[e,n]},useMemoCache:yf,useCacheRefresh:function(){return Gn().memoizedState=US.bind(null,_e)},useEffectEvent:function(e){var n=Gn(),a={impl:e};return n.memoizedState=a,function(){if((Be&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Uf={readContext:Tn,use:Zl,useCallback:u0,useContext:Tn,useEffect:Af,useImperativeHandle:c0,useInsertionEffect:r0,useLayoutEffect:o0,useMemo:f0,useReducer:Kl,useRef:i0,useState:function(){return Kl(la)},useDebugValue:Rf,useDeferredValue:function(e,n){var a=on();return d0(a,je.memoizedState,e,n)},useTransition:function(){var e=Kl(la)[0],n=on().memoizedState;return[typeof e=="boolean"?e:Ao(e),n]},useSyncExternalStore:Gm,useId:g0,useHostTransitionStatus:Df,useFormState:t0,useActionState:t0,useOptimistic:function(e,n){var a=on();return qm(a,je,e,n)},useMemoCache:yf,useCacheRefresh:_0};Uf.useEffectEvent=s0;var M0={readContext:Tn,use:Zl,useCallback:u0,useContext:Tn,useEffect:Af,useImperativeHandle:c0,useInsertionEffect:r0,useLayoutEffect:o0,useMemo:f0,useReducer:bf,useRef:i0,useState:function(){return bf(la)},useDebugValue:Rf,useDeferredValue:function(e,n){var a=on();return je===null?wf(a,e,n):d0(a,je.memoizedState,e,n)},useTransition:function(){var e=bf(la)[0],n=on().memoizedState;return[typeof e=="boolean"?e:Ao(e),n]},useSyncExternalStore:Gm,useId:g0,useHostTransitionStatus:Df,useFormState:n0,useActionState:n0,useOptimistic:function(e,n){var a=on();return je!==null?qm(a,je,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:yf,useCacheRefresh:_0};M0.useEffectEvent=s0;function Lf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Of={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ia(o);u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(Zn(n,e,o),Mo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),u=Ia(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(Zn(n,e,o),Mo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=Ia(a);o.tag=2,n!=null&&(o.callback=n),n=za(e,o,a),n!==null&&(Zn(n,e,a),Mo(n,e,a))}};function b0(e,n,a,o,u,d,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,b):n.prototype&&n.prototype.isPureReactComponent?!po(a,o)||!po(u,d):!0}function E0(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Of.enqueueReplaceState(n,n.state,null)}function ws(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function T0(e){Nl(e)}function A0(e){console.error(e)}function R0(e){Nl(e)}function tc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function w0(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Pf(e,n,a){return a=Ia(a),a.tag=3,a.payload={element:null},a.callback=function(){tc(e,n)},a}function C0(e){return e=Ia(e),e.tag=3,e}function D0(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){w0(n,a,o)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){w0(n,a,o),typeof u!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var N=o.stack;this.componentDidCatch(o.value,{componentStack:N!==null?N:""})})}function OS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&or(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?dc():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Gl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),rd(e,o,u)),!1;case 22:return a.flags|=65536,o===Gl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),rd(e,o,u)),!1}throw Error(s(435,a.tag))}return rd(e,o,u),dc(),!1}if(Ce)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==$u&&(e=Error(s(422),{cause:o}),_o(di(e,a)))):(o!==$u&&(n=Error(s(423),{cause:o}),_o(di(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=di(o,a),u=Pf(e.stateNode,o,u),ff(e,u),an!==4&&(an=2)),!1;var d=Error(s(520),{cause:o});if(d=di(d,a),Fo===null?Fo=[d]:Fo.push(d),an!==4&&(an=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Pf(a.stateNode,o,e),ff(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Xa===null||!Xa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=C0(u),D0(u,e,a,o),ff(a,u),!1}a=a.return}while(a!==null);return!1}var Ff=Error(s(461)),pn=!1;function An(e,n,a,o){n.child=e===null?Om(n,null,a,o):As(n,e.child,a,o)}function N0(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var b={};for(var N in o)N!=="ref"&&(b[N]=o[N])}else b=o;return Ms(n),o=_f(e,n,a,b,d,u),N=vf(),e!==null&&!pn?(xf(e,n,u),ca(e,n,u)):(Ce&&N&&Qu(n),n.flags|=1,An(e,n,o,u),n.child)}function U0(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Yu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,L0(e,n,d,o,u)):(e=Pl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!jf(e,u)){var b=d.memoizedProps;if(a=a.compare,a=a!==null?a:po,a(b,o)&&e.ref===n.ref)return ca(e,n,u)}return n.flags|=1,e=ia(d,o),e.ref=n.ref,e.return=n,n.child=e}function L0(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(po(d,o)&&e.ref===n.ref)if(pn=!1,n.pendingProps=o=d,jf(e,u))(e.flags&131072)!==0&&(pn=!0);else return n.lanes=e.lanes,ca(e,n,u)}return Bf(e,n,a,o,u)}function O0(e,n,a,o){var u=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return P0(e,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&zl(n,d!==null?d.cachePool:null),d!==null?Bm(n,d):hf(),Im(n);else return o=n.lanes=536870912,P0(e,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(zl(n,d.cachePool),Bm(n,d),Ga(),n.memoizedState=null):(e!==null&&zl(n,null),hf(),Ga());return An(e,n,u,a),n.child}function Co(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function P0(e,n,a,o,u){var d=of();return d=d===null?null:{parent:dn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},e!==null&&zl(n,null),hf(),Im(n),e!==null&&or(e,n,o,!0),n.childLanes=u,null}function ec(e,n){return n=ic({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function F0(e,n,a){return As(n,e.child,null,a),e=ec(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function PS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ce){if(o.mode==="hidden")return e=ec(n,o),n.lanes=536870912,Co(null,e);if(mf(n),(e=Ze)?(e=Yg(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:La!==null?{id:Bi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=xm(e),a.return=n,n.child=a,En=n,Ze=null)):e=null,e===null)throw Pa(n);return n.lanes=536870912,null}return ec(n,o)}var d=e.memoizedState;if(d!==null){var b=d.dehydrated;if(mf(n),u)if(n.flags&256)n.flags&=-257,n=F0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||or(e,n,a,!1),u=(a&e.childLanes)!==0,pn||u){if(o=Ye,o!==null&&(b=Sl(o,a),b!==0&&b!==d.retryLane))throw d.retryLane=b,vs(e,b),Zn(o,e,b),Ff;dc(),n=F0(e,n,a)}else e=d.treeContext,Ze=_i(b.nextSibling),En=n,Ce=!0,Oa=null,mi=!1,e!==null&&Mm(n,e),n=ec(n,o),n.flags|=4096;return n}return e=ia(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function nc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Bf(e,n,a,o,u){return Ms(n),a=_f(e,n,a,o,void 0,u),o=vf(),e!==null&&!pn?(xf(e,n,u),ca(e,n,u)):(Ce&&o&&Qu(n),n.flags|=1,An(e,n,a,u),n.child)}function B0(e,n,a,o,u,d){return Ms(n),n.updateQueue=null,a=Hm(n,o,a,u),zm(e),o=vf(),e!==null&&!pn?(xf(e,n,d),ca(e,n,d)):(Ce&&o&&Qu(n),n.flags|=1,An(e,n,a,d),n.child)}function I0(e,n,a,o,u){if(Ms(n),n.stateNode===null){var d=ir,b=a.contextType;typeof b=="object"&&b!==null&&(d=Tn(b)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Of,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},cf(n),b=a.contextType,d.context=typeof b=="object"&&b!==null?Tn(b):ir,d.state=n.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(Lf(n,a,b,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(b=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),b!==d.state&&Of.enqueueReplaceState(d,d.state,null),Eo(n,o,d,u),bo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var N=n.memoizedProps,X=ws(a,N);d.props=X;var dt=d.context,bt=a.contextType;b=ir,typeof bt=="object"&&bt!==null&&(b=Tn(bt));var Rt=a.getDerivedStateFromProps;bt=typeof Rt=="function"||typeof d.getSnapshotBeforeUpdate=="function",N=n.pendingProps!==N,bt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(N||dt!==b)&&E0(n,d,o,b),Ba=!1;var pt=n.memoizedState;d.state=pt,Eo(n,o,d,u),bo(),dt=n.memoizedState,N||pt!==dt||Ba?(typeof Rt=="function"&&(Lf(n,a,Rt,o),dt=n.memoizedState),(X=Ba||b0(n,a,X,o,pt,dt,b))?(bt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=dt),d.props=o,d.state=dt,d.context=b,o=X):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,uf(e,n),b=n.memoizedProps,bt=ws(a,b),d.props=bt,Rt=n.pendingProps,pt=d.context,dt=a.contextType,X=ir,typeof dt=="object"&&dt!==null&&(X=Tn(dt)),N=a.getDerivedStateFromProps,(dt=typeof N=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(b!==Rt||pt!==X)&&E0(n,d,o,X),Ba=!1,pt=n.memoizedState,d.state=pt,Eo(n,o,d,u),bo();var xt=n.memoizedState;b!==Rt||pt!==xt||Ba||e!==null&&e.dependencies!==null&&Bl(e.dependencies)?(typeof N=="function"&&(Lf(n,a,N,o),xt=n.memoizedState),(bt=Ba||b0(n,a,bt,o,pt,xt,X)||e!==null&&e.dependencies!==null&&Bl(e.dependencies))?(dt||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,xt,X),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,xt,X)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||b===e.memoizedProps&&pt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&pt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=xt),d.props=o,d.state=xt,d.context=X,o=bt):(typeof d.componentDidUpdate!="function"||b===e.memoizedProps&&pt===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&pt===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,nc(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=As(n,e.child,null,u),n.child=As(n,null,a,u)):An(e,n,a,u),n.memoizedState=d.state,e=n.child):e=ca(e,n,u),e}function z0(e,n,a,o){return Ss(),n.flags|=256,An(e,n,a,o),n.child}var If={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zf(e){return{baseLanes:e,cachePool:wm()}}function Hf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function H0(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,b;if((b=d)||(b=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),b&&(u=!0,n.flags&=-129),b=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ce){if(u?Ha(n):Ga(),(e=Ze)?(e=Yg(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:La!==null?{id:Bi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=xm(e),a.return=n,n.child=a,En=n,Ze=null)):e=null,e===null)throw Pa(n);return Md(e)?n.lanes=32:n.lanes=536870912,null}var N=o.children;return o=o.fallback,u?(Ga(),u=n.mode,N=ic({mode:"hidden",children:N},u),o=xs(o,u,a,null),N.return=n,o.return=n,N.sibling=o,n.child=N,o=n.child,o.memoizedState=zf(a),o.childLanes=Hf(e,b,a),n.memoizedState=If,Co(null,o)):(Ha(n),Gf(n,N))}var X=e.memoizedState;if(X!==null&&(N=X.dehydrated,N!==null)){if(d)n.flags&256?(Ha(n),n.flags&=-257,n=Vf(e,n,a)):n.memoizedState!==null?(Ga(),n.child=e.child,n.flags|=128,n=null):(Ga(),N=o.fallback,u=n.mode,o=ic({mode:"visible",children:o.children},u),N=xs(N,u,a,null),N.flags|=2,o.return=n,N.return=n,o.sibling=N,n.child=o,As(n,e.child,null,a),o=n.child,o.memoizedState=zf(a),o.childLanes=Hf(e,b,a),n.memoizedState=If,n=Co(null,o));else if(Ha(n),Md(N)){if(b=N.nextSibling&&N.nextSibling.dataset,b)var dt=b.dgst;b=dt,o=Error(s(419)),o.stack="",o.digest=b,_o({value:o,source:null,stack:null}),n=Vf(e,n,a)}else if(pn||or(e,n,a,!1),b=(a&e.childLanes)!==0,pn||b){if(b=Ye,b!==null&&(o=Sl(b,a),o!==0&&o!==X.retryLane))throw X.retryLane=o,vs(e,o),Zn(b,e,o),Ff;yd(N)||dc(),n=Vf(e,n,a)}else yd(N)?(n.flags|=192,n.child=e.child,n=null):(e=X.treeContext,Ze=_i(N.nextSibling),En=n,Ce=!0,Oa=null,mi=!1,e!==null&&Mm(n,e),n=Gf(n,o.children),n.flags|=4096);return n}return u?(Ga(),N=o.fallback,u=n.mode,X=e.child,dt=X.sibling,o=ia(X,{mode:"hidden",children:o.children}),o.subtreeFlags=X.subtreeFlags&65011712,dt!==null?N=ia(dt,N):(N=xs(N,u,a,null),N.flags|=2),N.return=n,o.return=n,o.sibling=N,n.child=o,Co(null,o),o=n.child,N=e.child.memoizedState,N===null?N=zf(a):(u=N.cachePool,u!==null?(X=dn._currentValue,u=u.parent!==X?{parent:X,pool:X}:u):u=wm(),N={baseLanes:N.baseLanes|a,cachePool:u}),o.memoizedState=N,o.childLanes=Hf(e,b,a),n.memoizedState=If,Co(e.child,o)):(Ha(n),a=e.child,e=a.sibling,a=ia(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(b=n.deletions,b===null?(n.deletions=[e],n.flags|=16):b.push(e)),n.child=a,n.memoizedState=null,a)}function Gf(e,n){return n=ic({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ic(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function Vf(e,n,a){return As(n,e.child,null,a),e=Gf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function G0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),nf(e.return,n,a)}function kf(e,n,a,o,u,d){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(b.isBackwards=n,b.rendering=null,b.renderingStartTime=0,b.last=o,b.tail=a,b.tailMode=u,b.treeForkCount=d)}function V0(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var b=rn.current,N=(b&2)!==0;if(N?(b=b&1|2,n.flags|=128):b&=1,W(rn,b),An(e,n,o,a),o=Ce?go:0,!N&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&G0(e,a,n);else if(e.tag===19)G0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Xl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),kf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Xl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}kf(n,!0,a,null,d,o);break;case"together":kf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ca(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ja|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(or(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ia(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ia(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function jf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Bl(e)))}function FS(e,n,a){switch(n.tag){case 3:mt(n,n.stateNode.containerInfo),Fa(n,dn,e.memoizedState.cache),Ss();break;case 27:case 5:At(n);break;case 4:mt(n,n.stateNode.containerInfo);break;case 10:Fa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,mf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?H0(e,n,a):(Ha(n),e=ca(e,n,a),e!==null?e.sibling:null);Ha(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(or(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return V0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),W(rn,rn.current),o)break;return null;case 22:return n.lanes=0,O0(e,n,a,n.pendingProps);case 24:Fa(n,dn,e.memoizedState.cache)}return ca(e,n,a)}function k0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)pn=!0;else{if(!jf(e,a)&&(n.flags&128)===0)return pn=!1,FS(e,n,a);pn=(e.flags&131072)!==0}else pn=!1,Ce&&(n.flags&1048576)!==0&&ym(n,go,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Es(n.elementType),n.type=e,typeof e=="function")Yu(e)?(o=ws(e,o),n.tag=1,n=I0(null,n,e,o,a)):(n.tag=0,n=Bf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===R){n.tag=11,n=N0(null,n,e,o,a);break t}else if(u===F){n.tag=14,n=U0(null,n,e,o,a);break t}}throw n=at(e)||e,Error(s(306,n,""))}}return n;case 0:return Bf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ws(o,n.pendingProps),I0(e,n,o,u,a);case 3:t:{if(mt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,uf(e,n),Eo(n,o,null,a);var b=n.memoizedState;if(o=b.cache,Fa(n,dn,o),o!==d.cache&&af(n,[dn],a,!0),bo(),o=b.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:b.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=z0(e,n,o,a);break t}else if(o!==u){u=di(Error(s(424)),n),_o(u),n=z0(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=_i(e.firstChild),En=n,Ce=!0,Oa=null,mi=!0,a=Om(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ss(),o===u){n=ca(e,n,a);break t}An(e,n,o,a)}n=n.child}return n;case 26:return nc(e,n),e===null?(a=t_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ce||(a=n.type,e=n.pendingProps,o=xc(K.current).createElement(a),o[cn]=n,o[_n]=e,Rn(o,a,e),et(o),n.stateNode=o):n.memoizedState=t_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return At(n),e===null&&Ce&&(o=n.stateNode=Qg(n.type,n.pendingProps,K.current),En=n,mi=!0,u=Ze,Za(n.type)?(bd=u,Ze=_i(o.firstChild)):Ze=u),An(e,n,n.pendingProps.children,a),nc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ce&&((u=o=Ze)&&(o=dy(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,En=n,Ze=_i(o.firstChild),mi=!1,u=!0):u=!1),u||Pa(n)),At(n),u=n.type,d=n.pendingProps,b=e!==null?e.memoizedProps:null,o=d.children,vd(u,d)?o=null:b!==null&&vd(u,b)&&(n.flags|=32),n.memoizedState!==null&&(u=_f(e,n,RS,null,null,a),jo._currentValue=u),nc(e,n),An(e,n,o,a),n.child;case 6:return e===null&&Ce&&((e=a=Ze)&&(a=hy(a,n.pendingProps,mi),a!==null?(n.stateNode=a,En=n,Ze=null,e=!0):e=!1),e||Pa(n)),null;case 13:return H0(e,n,a);case 4:return mt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=As(n,null,o,a):An(e,n,o,a),n.child;case 11:return N0(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Fa(n,n.type,o.value),An(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ms(n),u=Tn(u),o=o(u),n.flags|=1,An(e,n,o,a),n.child;case 14:return U0(e,n,n.type,n.pendingProps,a);case 15:return L0(e,n,n.type,n.pendingProps,a);case 19:return V0(e,n,a);case 31:return PS(e,n,a);case 22:return O0(e,n,a,n.pendingProps);case 24:return Ms(n),o=Tn(dn),e===null?(u=of(),u===null&&(u=Ye,d=sf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},cf(n),Fa(n,dn,u)):((e.lanes&a)!==0&&(uf(e,n),Eo(n,null,null,a),bo()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Fa(n,dn,o)):(o=d.cache,Fa(n,dn,o),o!==u.cache&&af(n,[dn],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ua(e){e.flags|=4}function Xf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(gg())e.flags|=8192;else throw Ts=Gl,lf}else e.flags&=-16777217}function j0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!s_(n))if(gg())e.flags|=8192;else throw Ts=Gl,lf}function ac(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?He():536870912,e.lanes|=n,xr|=n)}function Do(e,n){if(!Ce)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function BS(e,n,a){var o=n.pendingProps;switch(Ju(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(dn),Y(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(rr(n)?ua(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,tf())),Ke(n),null;case 26:var u=n.type,d=n.memoizedState;return e===null?(ua(n),d!==null?(Ke(n),j0(n,d)):(Ke(n),Xf(n,u,null,o,a))):d?d!==e.memoizedState?(ua(n),Ke(n),j0(n,d)):(Ke(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ua(n),Ke(n),Xf(n,u,e,o,a)),null;case 27:if(Ct(n),a=K.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}e=lt.current,rr(n)?bm(n):(e=Qg(u,o,a),n.stateNode=e,ua(n))}return Ke(n),null;case 5:if(Ct(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ke(n),null}if(d=lt.current,rr(n))bm(n);else{var b=xc(K.current);switch(d){case 1:d=b.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=b.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=b.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=b.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?b.createElement("select",{is:o.is}):b.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?b.createElement(u,{is:o.is}):b.createElement(u)}}d[cn]=n,d[_n]=o;t:for(b=n.child;b!==null;){if(b.tag===5||b.tag===6)d.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===n)break t;for(;b.sibling===null;){if(b.return===null||b.return===n)break t;b=b.return}b.sibling.return=b.return,b=b.sibling}n.stateNode=d;t:switch(Rn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ua(n)}}return Ke(n),Xf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=K.current,rr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=En,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Hg(e.nodeValue,a)),e||Pa(n,!0)}else e=xc(e).createTextNode(o),e[cn]=n,n.stateNode=e}return Ke(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=rr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[cn]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),e=!1}else a=tf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=rr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else Ss(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=tf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ac(n,n.updateQueue),Ke(n),null);case 4:return Y(),e===null&&hd(n.stateNode.containerInfo),Ke(n),null;case 10:return ra(n.type),Ke(n),null;case 19:if(I(rn),o=n.memoizedState,o===null)return Ke(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Do(o,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Xl(e),d!==null){for(n.flags|=128,Do(o,!1),e=d.updateQueue,n.updateQueue=e,ac(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)vm(a,e),a=a.sibling;return W(rn,rn.current&1|2),Ce&&aa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&A()>cc&&(n.flags|=128,u=!0,Do(o,!1),n.lanes=4194304)}else{if(!u)if(e=Xl(d),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,ac(n,e),Do(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Ce)return Ke(n),null}else 2*A()-o.renderingStartTime>cc&&a!==536870912&&(n.flags|=128,u=!0,Do(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=A(),e.sibling=null,a=rn.current,W(rn,u?a&1|2:a&1),Ce&&aa(n,o.treeForkCount),e):(Ke(n),null);case 22:case 23:return ni(n),pf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&ac(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&I(bs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(dn),Ke(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function IS(e,n){switch(Ju(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ra(dn),Y(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ct(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));Ss()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ss()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return I(rn),null;case 4:return Y(),null;case 10:return ra(n.type),null;case 22:case 23:return ni(n),pf(),e!==null&&I(bs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ra(dn),null;case 25:return null;default:return null}}function X0(e,n){switch(Ju(n),n.tag){case 3:ra(dn),Y();break;case 26:case 27:case 5:Ct(n);break;case 4:Y();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:I(rn);break;case 10:ra(n.type);break;case 22:case 23:ni(n),pf(),e!==null&&I(bs);break;case 24:ra(dn)}}function No(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,b=a.inst;o=d(),b.destroy=o}a=a.next}while(a!==u)}}catch(N){Ve(n,n.return,N)}}function Va(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var b=o.inst,N=b.destroy;if(N!==void 0){b.destroy=void 0,u=n;var X=a,dt=N;try{dt()}catch(bt){Ve(u,X,bt)}}}o=o.next}while(o!==d)}}catch(bt){Ve(n,n.return,bt)}}function W0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Fm(n,a)}catch(o){Ve(e,e.return,o)}}}function q0(e,n,a){a.props=ws(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ve(e,n,o)}}function Uo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ve(e,n,u)}}function zi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ve(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ve(e,n,u)}else a.current=null}function Y0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ve(e,e.return,u)}}function Wf(e,n,a){try{var o=e.stateNode;ry(o,e.type,a,n),o[_n]=n}catch(u){Ve(e,e.return,u)}}function Z0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function qf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Z0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ea));else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Yf(e,n,a),e=e.sibling;e!==null;)Yf(e,n,a),e=e.sibling}function sc(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(sc(e,n,a),e=e.sibling;e!==null;)sc(e,n,a),e=e.sibling}function K0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,a),n[cn]=e,n[_n]=a}catch(d){Ve(e,e.return,d)}}var fa=!1,mn=!1,Zf=!1,Q0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function zS(e,n){if(e=e.containerInfo,gd=Ac,e=cm(e),Gu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var b=0,N=-1,X=-1,dt=0,bt=0,Rt=e,pt=null;e:for(;;){for(var xt;Rt!==a||u!==0&&Rt.nodeType!==3||(N=b+u),Rt!==d||o!==0&&Rt.nodeType!==3||(X=b+o),Rt.nodeType===3&&(b+=Rt.nodeValue.length),(xt=Rt.firstChild)!==null;)pt=Rt,Rt=xt;for(;;){if(Rt===e)break e;if(pt===a&&++dt===u&&(N=b),pt===d&&++bt===o&&(X=b),(xt=Rt.nextSibling)!==null)break;Rt=pt,pt=Rt.parentNode}Rt=xt}a=N===-1||X===-1?null:{start:N,end:X}}else a=null}a=a||{start:0,end:0}}else a=null;for(_d={focusedElem:e,selectionRange:a},Ac=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Jt=ws(a.type,u);e=o.getSnapshotBeforeUpdate(Jt,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Ve(a,a.return,oe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Sd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Sd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function J0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ha(e,a),o&4&&No(5,a);break;case 1:if(ha(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(b){Ve(a,a.return,b)}else{var u=ws(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Ve(a,a.return,b)}}o&64&&W0(a),o&512&&Uo(a,a.return);break;case 3:if(ha(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Fm(e,n)}catch(b){Ve(a,a.return,b)}}break;case 27:n===null&&o&4&&K0(a);case 26:case 5:ha(e,a),n===null&&o&4&&Y0(a),o&512&&Uo(a,a.return);break;case 12:ha(e,a);break;case 31:ha(e,a),o&4&&eg(e,a);break;case 13:ha(e,a),o&4&&ng(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=YS.bind(null,a),py(e,a))));break;case 22:if(o=a.memoizedState!==null||fa,!o){n=n!==null&&n.memoizedState!==null||mn,u=fa;var d=mn;fa=o,(mn=n)&&!d?pa(e,a,(a.subtreeFlags&8772)!==0):ha(e,a),fa=u,mn=d}break;case 30:break;default:ha(e,a)}}function $0(e){var n=e.alternate;n!==null&&(e.alternate=null,$0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&so(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,Xn=!1;function da(e,n,a){for(a=a.child;a!==null;)tg(e,n,a),a=a.sibling}function tg(e,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Dt,a)}catch{}switch(a.tag){case 26:mn||zi(a,n),da(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mn||zi(a,n);var o=en,u=Xn;Za(a.type)&&(en=a.stateNode,Xn=!1),da(e,n,a),Go(a.stateNode),en=o,Xn=u;break;case 5:mn||zi(a,n);case 6:if(o=en,u=Xn,en=null,da(e,n,a),en=o,Xn=u,en!==null)if(Xn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode)}catch(d){Ve(a,n,d)}else try{en.removeChild(a.stateNode)}catch(d){Ve(a,n,d)}break;case 18:en!==null&&(Xn?(e=en,Wg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Rr(e)):Wg(en,a.stateNode));break;case 4:o=en,u=Xn,en=a.stateNode.containerInfo,Xn=!0,da(e,n,a),en=o,Xn=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),mn||Va(4,a,n),da(e,n,a);break;case 1:mn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&q0(a,n,o)),da(e,n,a);break;case 21:da(e,n,a);break;case 22:mn=(o=mn)||a.memoizedState!==null,da(e,n,a),mn=o;break;default:da(e,n,a)}}function eg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Rr(e)}catch(a){Ve(n,n.return,a)}}}function ng(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Rr(e)}catch(a){Ve(n,n.return,a)}}function HS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Q0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Q0),n;default:throw Error(s(435,e.tag))}}function rc(e,n){var a=HS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=ZS.bind(null,e,o);o.then(u,u)}})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,b=n,N=b;t:for(;N!==null;){switch(N.tag){case 27:if(Za(N.type)){en=N.stateNode,Xn=!1;break t}break;case 5:en=N.stateNode,Xn=!1;break t;case 3:case 4:en=N.stateNode.containerInfo,Xn=!0;break t}N=N.return}if(en===null)throw Error(s(160));tg(d,b,u),en=null,Xn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ig(n,e),n=n.sibling}var Ri=null;function ig(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),o&4&&(Va(3,e,e.return),No(3,e),Va(5,e,e.return));break;case 1:Wn(n,e),qn(e),o&512&&(mn||a===null||zi(a,a.return)),o&64&&fa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ri;if(Wn(n,e),qn(e),o&512&&(mn||a===null||zi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[hs]||d[cn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Rn(d,o,a),d[cn]=e,et(d),o=d;break t;case"link":var b=i_("link","href",u).get(o+(a.href||""));if(b){for(var N=0;N<b.length;N++)if(d=b[N],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(N,1);break e}}d=u.createElement(o),Rn(d,o,a),u.head.appendChild(d);break;case"meta":if(b=i_("meta","content",u).get(o+(a.content||""))){for(N=0;N<b.length;N++)if(d=b[N],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(N,1);break e}}d=u.createElement(o),Rn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[cn]=e,et(d),o=d}e.stateNode=o}else a_(u,e.type,e.stateNode);else e.stateNode=n_(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?a_(u,e.type,e.stateNode):n_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Wf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),o&512&&(mn||a===null||zi(a,a.return)),a!==null&&o&4&&Wf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),o&512&&(mn||a===null||zi(a,a.return)),e.flags&32){u=e.stateNode;try{Hn(u,"")}catch(Jt){Ve(e,e.return,Jt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Wf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Zf=!0);break;case 6:if(Wn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Jt){Ve(e,e.return,Jt)}}break;case 3:if(Mc=null,u=Ri,Ri=Sc(n.containerInfo),Wn(n,e),Ri=u,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Rr(n.containerInfo)}catch(Jt){Ve(e,e.return,Jt)}Zf&&(Zf=!1,ag(e));break;case 4:o=Ri,Ri=Sc(e.stateNode.containerInfo),Wn(n,e),qn(e),Ri=o;break;case 12:Wn(n,e),qn(e);break;case 31:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,rc(e,o)));break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(lc=A()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,rc(e,o)));break;case 22:u=e.memoizedState!==null;var X=a!==null&&a.memoizedState!==null,dt=fa,bt=mn;if(fa=dt||u,mn=bt||X,Wn(n,e),mn=bt,fa=dt,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||X||fa||mn||Cs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){X=a=n;try{if(d=X.stateNode,u)b=d.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{N=X.stateNode;var Rt=X.memoizedProps.style,pt=Rt!=null&&Rt.hasOwnProperty("display")?Rt.display:null;N.style.display=pt==null||typeof pt=="boolean"?"":(""+pt).trim()}}catch(Jt){Ve(X,X.return,Jt)}}}else if(n.tag===6){if(a===null){X=n;try{X.stateNode.nodeValue=u?"":X.memoizedProps}catch(Jt){Ve(X,X.return,Jt)}}}else if(n.tag===18){if(a===null){X=n;try{var xt=X.stateNode;u?qg(xt,!0):qg(X.stateNode,!1)}catch(Jt){Ve(X,X.return,Jt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,rc(e,a))));break;case 19:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,rc(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Z0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=qf(e);sc(e,d,u);break;case 5:var b=a.stateNode;a.flags&32&&(Hn(b,""),a.flags&=-33);var N=qf(e);sc(e,N,b);break;case 3:case 4:var X=a.stateNode.containerInfo,dt=qf(e);Yf(e,dt,X);break;default:throw Error(s(161))}}catch(bt){Ve(e,e.return,bt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ag(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ag(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ha(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)J0(e,n.alternate,n),n=n.sibling}function Cs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Va(4,n,n.return),Cs(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&q0(n,n.return,a),Cs(n);break;case 27:Go(n.stateNode);case 26:case 5:zi(n,n.return),Cs(n);break;case 22:n.memoizedState===null&&Cs(n);break;case 30:Cs(n);break;default:Cs(n)}e=e.sibling}}function pa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,b=d.flags;switch(d.tag){case 0:case 11:case 15:pa(u,d,a),No(4,d);break;case 1:if(pa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(dt){Ve(o,o.return,dt)}if(o=d,u=o.updateQueue,u!==null){var N=o.stateNode;try{var X=u.shared.hiddenCallbacks;if(X!==null)for(u.shared.hiddenCallbacks=null,u=0;u<X.length;u++)Pm(X[u],N)}catch(dt){Ve(o,o.return,dt)}}a&&b&64&&W0(d),Uo(d,d.return);break;case 27:K0(d);case 26:case 5:pa(u,d,a),a&&o===null&&b&4&&Y0(d),Uo(d,d.return);break;case 12:pa(u,d,a);break;case 31:pa(u,d,a),a&&b&4&&eg(u,d);break;case 13:pa(u,d,a),a&&b&4&&ng(u,d);break;case 22:d.memoizedState===null&&pa(u,d,a),Uo(d,d.return);break;case 30:break;default:pa(u,d,a)}n=n.sibling}}function Kf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&vo(a))}function Qf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&vo(e))}function wi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)sg(e,n,a,o),n=n.sibling}function sg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:wi(e,n,a,o),u&2048&&No(9,n);break;case 1:wi(e,n,a,o);break;case 3:wi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&vo(e)));break;case 12:if(u&2048){wi(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,b=d.id,N=d.onPostCommit;typeof N=="function"&&N(b,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(X){Ve(n,n.return,X)}}else wi(e,n,a,o);break;case 31:wi(e,n,a,o);break;case 13:wi(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,b=n.alternate,n.memoizedState!==null?d._visibility&2?wi(e,n,a,o):Lo(e,n):d._visibility&2?wi(e,n,a,o):(d._visibility|=2,gr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Kf(b,n);break;case 24:wi(e,n,a,o),u&2048&&Qf(n.alternate,n);break;default:wi(e,n,a,o)}}function gr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,b=n,N=a,X=o,dt=b.flags;switch(b.tag){case 0:case 11:case 15:gr(d,b,N,X,u),No(8,b);break;case 23:break;case 22:var bt=b.stateNode;b.memoizedState!==null?bt._visibility&2?gr(d,b,N,X,u):Lo(d,b):(bt._visibility|=2,gr(d,b,N,X,u)),u&&dt&2048&&Kf(b.alternate,b);break;case 24:gr(d,b,N,X,u),u&&dt&2048&&Qf(b.alternate,b);break;default:gr(d,b,N,X,u)}n=n.sibling}}function Lo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Lo(a,o),u&2048&&Kf(o.alternate,o);break;case 24:Lo(a,o),u&2048&&Qf(o.alternate,o);break;default:Lo(a,o)}n=n.sibling}}var Oo=8192;function _r(e,n,a){if(e.subtreeFlags&Oo)for(e=e.child;e!==null;)rg(e,n,a),e=e.sibling}function rg(e,n,a){switch(e.tag){case 26:_r(e,n,a),e.flags&Oo&&e.memoizedState!==null&&Ay(a,Ri,e.memoizedState,e.memoizedProps);break;case 5:_r(e,n,a);break;case 3:case 4:var o=Ri;Ri=Sc(e.stateNode.containerInfo),_r(e,n,a),Ri=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Oo,Oo=16777216,_r(e,n,a),Oo=o):_r(e,n,a));break;default:_r(e,n,a)}}function og(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Po(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,cg(o,e)}og(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lg(e),e=e.sibling}function lg(e){switch(e.tag){case 0:case 11:case 15:Po(e),e.flags&2048&&Va(9,e,e.return);break;case 3:Po(e);break;case 12:Po(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,oc(e)):Po(e);break;default:Po(e)}}function oc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,cg(o,e)}og(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Va(8,n,n.return),oc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,oc(n));break;default:oc(n)}e=e.sibling}}function cg(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:vo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else t:for(a=e;Mn!==null;){o=Mn;var u=o.sibling,d=o.return;if($0(o),o===a){Mn=null;break t}if(u!==null){u.return=d,Mn=u;break t}Mn=d}}}var GS={getCacheForType:function(e){var n=Tn(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(dn).controller.signal}},VS=typeof WeakMap=="function"?WeakMap:Map,Be=0,Ye=null,Ee=null,Re=0,Ge=0,ii=null,ka=!1,vr=!1,Jf=!1,ma=0,an=0,ja=0,Ds=0,$f=0,ai=0,xr=0,Fo=null,Yn=null,td=!1,lc=0,ug=0,cc=1/0,uc=null,Xa=null,xn=0,Wa=null,Sr=null,ga=0,ed=0,nd=null,fg=null,Bo=0,id=null;function si(){return(Be&2)!==0&&Re!==0?Re&-Re:U.T!==null?cd():Fi()}function dg(){if(ai===0)if((Re&536870912)===0||Ce){var e=Ot;Ot<<=1,(Ot&3932160)===0&&(Ot=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function Zn(e,n,a){(e===Ye&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)&&(yr(e,0),qa(e,Re,ai,!1)),Bn(e,a),((Be&2)===0||e!==Ye)&&(e===Ye&&((Be&2)===0&&(Ds|=a),an===4&&qa(e,Re,ai,!1)),Hi(e))}function hg(e,n,a){if((Be&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Kt(e,n),u=o?XS(e,n):sd(e,n,!0),d=o;do{if(u===0){vr&&!o&&qa(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!kS(a)){u=sd(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){n=b;t:{var N=e;u=Fo;var X=N.current.memoizedState.isDehydrated;if(X&&(yr(N,b).flags|=256),b=sd(N,b,!1),b!==2){if(Jf&&!X){N.errorRecoveryDisabledLanes|=d,Ds|=d,u=4;break t}d=Yn,Yn=u,d!==null&&(Yn===null?Yn=d:Yn.push.apply(Yn,d))}u=b}if(d=!1,u!==2)continue}}if(u===1){yr(e,0),qa(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,ai,!ka);break t;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=lc+300-A(),10<u)){if(qa(o,n,ai,!ka),Mt(o,0,!0)!==0)break t;ga=n,o.timeoutHandle=jg(pg.bind(null,o,a,Yn,uc,td,n,ai,Ds,xr,ka,d,"Throttled",-0,0),u);break t}pg(o,a,Yn,uc,td,n,ai,Ds,xr,ka,d,null,-0,0)}}break}while(!0);Hi(e)}function pg(e,n,a,o,u,d,b,N,X,dt,bt,Rt,pt,xt){if(e.timeoutHandle=-1,Rt=n.subtreeFlags,Rt&8192||(Rt&16785408)===16785408){Rt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},rg(n,d,Rt);var Jt=(d&62914560)===d?lc-A():(d&4194048)===d?ug-A():0;if(Jt=Ry(Rt,Jt),Jt!==null){ga=d,e.cancelPendingCommit=Jt(Mg.bind(null,e,n,d,a,o,u,b,N,X,bt,Rt,null,pt,xt)),qa(e,d,b,!dt);return}}Mg(e,n,d,a,o,u,b,N,X)}function kS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!$n(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(e,n,a,o){n&=~$f,n&=~Ds,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-zt(u),b=1<<d;o[d]=-1,u&=~b}a!==0&&ao(e,a,n)}function fc(){return(Be&6)===0?(Io(0),!1):!0}function ad(){if(Ee!==null){if(Ge===0)var e=Ee.return;else e=Ee,sa=ys=null,Sf(e),fr=null,So=0,e=Ee;for(;e!==null;)X0(e.alternate,e),e=e.return;Ee=null}}function yr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,cy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ga=0,ad(),Ye=e,Ee=a=ia(e.current,null),Re=n,Ge=0,ii=null,ka=!1,vr=Kt(e,n),Jf=!1,xr=ai=$f=Ds=ja=an=0,Yn=Fo=null,td=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-zt(o),d=1<<u;n|=e[u],o&=~d}return ma=n,Ul(),a}function mg(e,n){_e=null,U.H=wo,n===ur||n===Hl?(n=Nm(),Ge=3):n===lf?(n=Nm(),Ge=4):Ge=n===Ff?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,Ee===null&&(an=1,tc(e,di(n,e.current)))}function gg(){var e=ei.current;return e===null?!0:(Re&4194048)===Re?gi===null:(Re&62914560)===Re||(Re&536870912)!==0?e===gi:!1}function _g(){var e=U.H;return U.H=wo,e===null?wo:e}function vg(){var e=U.A;return U.A=GS,e}function dc(){an=4,ka||(Re&4194048)!==Re&&ei.current!==null||(vr=!0),(ja&134217727)===0&&(Ds&134217727)===0||Ye===null||qa(Ye,Re,ai,!1)}function sd(e,n,a){var o=Be;Be|=2;var u=_g(),d=vg();(Ye!==e||Re!==n)&&(uc=null,yr(e,n)),n=!1;var b=an;t:do try{if(Ge!==0&&Ee!==null){var N=Ee,X=ii;switch(Ge){case 8:ad(),b=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var dt=Ge;if(Ge=0,ii=null,Mr(e,N,X,dt),a&&vr){b=0;break t}break;default:dt=Ge,Ge=0,ii=null,Mr(e,N,X,dt)}}jS(),b=an;break}catch(bt){mg(e,bt)}while(!0);return n&&e.shellSuspendCounter++,sa=ys=null,Be=o,U.H=u,U.A=d,Ee===null&&(Ye=null,Re=0,Ul()),b}function jS(){for(;Ee!==null;)xg(Ee)}function XS(e,n){var a=Be;Be|=2;var o=_g(),u=vg();Ye!==e||Re!==n?(uc=null,cc=A()+500,yr(e,n)):vr=Kt(e,n);t:do try{if(Ge!==0&&Ee!==null){n=Ee;var d=ii;e:switch(Ge){case 1:Ge=0,ii=null,Mr(e,n,d,1);break;case 2:case 9:if(Cm(d)){Ge=0,ii=null,Sg(n);break}n=function(){Ge!==2&&Ge!==9||Ye!==e||(Ge=7),Hi(e)},d.then(n,n);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:Cm(d)?(Ge=0,ii=null,Sg(n)):(Ge=0,ii=null,Mr(e,n,d,7));break;case 5:var b=null;switch(Ee.tag){case 26:b=Ee.memoizedState;case 5:case 27:var N=Ee;if(b?s_(b):N.stateNode.complete){Ge=0,ii=null;var X=N.sibling;if(X!==null)Ee=X;else{var dt=N.return;dt!==null?(Ee=dt,hc(dt)):Ee=null}break e}}Ge=0,ii=null,Mr(e,n,d,5);break;case 6:Ge=0,ii=null,Mr(e,n,d,6);break;case 8:ad(),an=6;break t;default:throw Error(s(462))}}WS();break}catch(bt){mg(e,bt)}while(!0);return sa=ys=null,U.H=o,U.A=u,Be=a,Ee!==null?0:(Ye=null,Re=0,Ul(),an)}function WS(){for(;Ee!==null&&!qt();)xg(Ee)}function xg(e){var n=k0(e.alternate,e,ma);e.memoizedProps=e.pendingProps,n===null?hc(e):Ee=n}function Sg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=B0(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=B0(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:Sf(n);default:X0(a,n),n=Ee=vm(n,ma),n=k0(a,n,ma)}e.memoizedProps=e.pendingProps,n===null?hc(e):Ee=n}function Mr(e,n,a,o){sa=ys=null,Sf(n),fr=null,So=0;var u=n.return;try{if(OS(e,u,n,a,Re)){an=1,tc(e,di(a,e.current)),Ee=null;return}}catch(d){if(u!==null)throw Ee=u,d;an=1,tc(e,di(a,e.current)),Ee=null;return}n.flags&32768?(Ce||o===1?e=!0:vr||(Re&536870912)!==0?e=!1:(ka=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),yg(n,e)):hc(n)}function hc(e){var n=e;do{if((n.flags&32768)!==0){yg(n,ka);return}e=n.return;var a=BS(n.alternate,n,ma);if(a!==null){Ee=a;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=e}while(n!==null);an===0&&(an=5)}function yg(e,n){do{var a=IS(e.alternate,e);if(a!==null){a.flags&=32767,Ee=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=a}while(e!==null);an=6,Ee=null}function Mg(e,n,a,o,u,d,b,N,X){e.cancelPendingCommit=null;do pc();while(xn!==0);if((Be&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Wu,Mi(e,a,d,b,N,X),e===Ye&&(Ee=Ye=null,Re=0),Sr=n,Wa=e,ga=a,ed=d,nd=u,fg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,KS(vt,function(){return Rg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=U.T,U.T=null,u=B.p,B.p=2,b=Be,Be|=4;try{zS(e,n,a)}finally{Be=b,B.p=u,U.T=o}}xn=1,bg(),Eg(),Tg()}}function bg(){if(xn===1){xn=0;var e=Wa,n=Sr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=U.T,U.T=null;var o=B.p;B.p=2;var u=Be;Be|=4;try{ig(n,e);var d=_d,b=cm(e.containerInfo),N=d.focusedElem,X=d.selectionRange;if(b!==N&&N&&N.ownerDocument&&lm(N.ownerDocument.documentElement,N)){if(X!==null&&Gu(N)){var dt=X.start,bt=X.end;if(bt===void 0&&(bt=dt),"selectionStart"in N)N.selectionStart=dt,N.selectionEnd=Math.min(bt,N.value.length);else{var Rt=N.ownerDocument||document,pt=Rt&&Rt.defaultView||window;if(pt.getSelection){var xt=pt.getSelection(),Jt=N.textContent.length,oe=Math.min(X.start,Jt),We=X.end===void 0?oe:Math.min(X.end,Jt);!xt.extend&&oe>We&&(b=We,We=oe,oe=b);var rt=om(N,oe),Q=om(N,We);if(rt&&Q&&(xt.rangeCount!==1||xt.anchorNode!==rt.node||xt.anchorOffset!==rt.offset||xt.focusNode!==Q.node||xt.focusOffset!==Q.offset)){var ft=Rt.createRange();ft.setStart(rt.node,rt.offset),xt.removeAllRanges(),oe>We?(xt.addRange(ft),xt.extend(Q.node,Q.offset)):(ft.setEnd(Q.node,Q.offset),xt.addRange(ft))}}}}for(Rt=[],xt=N;xt=xt.parentNode;)xt.nodeType===1&&Rt.push({element:xt,left:xt.scrollLeft,top:xt.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<Rt.length;N++){var Et=Rt[N];Et.element.scrollLeft=Et.left,Et.element.scrollTop=Et.top}}Ac=!!gd,_d=gd=null}finally{Be=u,B.p=o,U.T=a}}e.current=n,xn=2}}function Eg(){if(xn===2){xn=0;var e=Wa,n=Sr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=U.T,U.T=null;var o=B.p;B.p=2;var u=Be;Be|=4;try{J0(e,n.alternate,n)}finally{Be=u,B.p=o,U.T=a}}xn=3}}function Tg(){if(xn===4||xn===3){xn=0,G();var e=Wa,n=Sr,a=ga,o=fg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,Sr=Wa=null,Ag(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Xa=null),Ys(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Dt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=U.T,u=B.p,B.p=2,U.T=null;try{for(var d=e.onRecoverableError,b=0;b<o.length;b++){var N=o[b];d(N.value,{componentStack:N.stack})}}finally{U.T=n,B.p=u}}(ga&3)!==0&&pc(),Hi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===id?Bo++:(Bo=0,id=e):Bo=0,Io(0)}}function Ag(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,vo(n)))}function pc(){return bg(),Eg(),Tg(),Rg()}function Rg(){if(xn!==5)return!1;var e=Wa,n=ed;ed=0;var a=Ys(ga),o=U.T,u=B.p;try{B.p=32>a?32:a,U.T=null,a=nd,nd=null;var d=Wa,b=ga;if(xn=0,Sr=Wa=null,ga=0,(Be&6)!==0)throw Error(s(331));var N=Be;if(Be|=4,lg(d.current),sg(d,d.current,b,a),Be=N,Io(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Dt,d)}catch{}return!0}finally{B.p=u,U.T=o,Ag(e,n)}}function wg(e,n,a){n=di(a,n),n=Pf(e.stateNode,n,2),e=za(e,n,2),e!==null&&(Bn(e,2),Hi(e))}function Ve(e,n,a){if(e.tag===3)wg(e,e,a);else for(;n!==null;){if(n.tag===3){wg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xa===null||!Xa.has(o))){e=di(a,e),a=C0(2),o=za(n,a,2),o!==null&&(D0(a,o,n,e),Bn(o,2),Hi(o));break}}n=n.return}}function rd(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new VS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Jf=!0,u.add(a),e=qS.bind(null,e,n,a),n.then(e,e))}function qS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Re&a)===a&&(an===4||an===3&&(Re&62914560)===Re&&300>A()-lc?(Be&2)===0&&yr(e,0):$f|=a,xr===Re&&(xr=0)),Hi(e)}function Cg(e,n){n===0&&(n=He()),e=vs(e,n),e!==null&&(Bn(e,n),Hi(e))}function YS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Cg(e,a)}function ZS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Cg(e,a)}function KS(e,n){return le(e,n)}var mc=null,br=null,od=!1,gc=!1,ld=!1,Ya=0;function Hi(e){e!==br&&e.next===null&&(br===null?mc=br=e:br=br.next=e),gc=!0,od||(od=!0,JS())}function Io(e,n){if(!ld&&gc){ld=!0;do for(var a=!1,o=mc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var b=o.suspendedLanes,N=o.pingedLanes;d=(1<<31-zt(42|e)+1)-1,d&=u&~(b&~N),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Lg(o,d))}else d=Re,d=Mt(o,o===Ye?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Kt(o,d)||(a=!0,Lg(o,d));o=o.next}while(a);ld=!1}}function QS(){Dg()}function Dg(){gc=od=!1;var e=0;Ya!==0&&ly()&&(e=Ya);for(var n=A(),a=null,o=mc;o!==null;){var u=o.next,d=Ng(o,n);d===0?(o.next=null,a===null?mc=u:a.next=u,u===null&&(br=a)):(a=o,(e!==0||(d&3)!==0)&&(gc=!0)),o=u}xn!==0&&xn!==5||Io(e),Ya!==0&&(Ya=0)}function Ng(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var b=31-zt(d),N=1<<b,X=u[b];X===-1?((N&a)===0||(N&o)!==0)&&(u[b]=fe(N,n)):X<=n&&(e.expiredLanes|=N),d&=~N}if(n=Ye,a=Re,a=Mt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ge===2||Ge===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&pe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Kt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&pe(o),Ys(a)){case 2:case 8:a=Tt;break;case 32:a=vt;break;case 268435456:a=Lt;break;default:a=vt}return o=Ug.bind(null,e),a=le(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&pe(o),e.callbackPriority=2,e.callbackNode=null,2}function Ug(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(pc()&&e.callbackNode!==a)return null;var o=Re;return o=Mt(e,e===Ye?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(hg(e,o,n),Ng(e,A()),e.callbackNode!=null&&e.callbackNode===a?Ug.bind(null,e):null)}function Lg(e,n){if(pc())return null;hg(e,n,!0)}function JS(){uy(function(){(Be&6)!==0?le(yt,QS):Dg()})}function cd(){if(Ya===0){var e=lr;e===0&&(e=Ft,Ft<<=1,(Ft&261888)===0&&(Ft=256)),Ya=e}return Ya}function Og(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:El(""+e)}function Pg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function $S(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=Og((u[_n]||null).action),b=o.submitter;b&&(n=(n=b[_n]||null)?Og(n.formAction):b.getAttribute("formAction"),n!==null&&(d=n,b=null));var N=new wl("action","action",null,o,u);e.push({event:N,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var X=b?Pg(u,b):new FormData(u);Cf(a,{pending:!0,data:X,method:u.method,action:d},null,X)}}else typeof d=="function"&&(N.preventDefault(),X=b?Pg(u,b):new FormData(u),Cf(a,{pending:!0,data:X,method:u.method,action:d},d,X))},currentTarget:u}]})}}for(var ud=0;ud<Xu.length;ud++){var fd=Xu[ud],ty=fd.toLowerCase(),ey=fd[0].toUpperCase()+fd.slice(1);Ai(ty,"on"+ey)}Ai(dm,"onAnimationEnd"),Ai(hm,"onAnimationIteration"),Ai(pm,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(_S,"onTransitionRun"),Ai(vS,"onTransitionStart"),Ai(xS,"onTransitionCancel"),Ai(mm,"onTransitionEnd"),Bt("onMouseEnter",["mouseout","mouseover"]),Bt("onMouseLeave",["mouseout","mouseover"]),Bt("onPointerEnter",["pointerout","pointerover"]),Bt("onPointerLeave",["pointerout","pointerover"]),ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ct("onBeforeInput",["compositionend","keypress","textInput","paste"]),ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ny=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function Fg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var b=o.length-1;0<=b;b--){var N=o[b],X=N.instance,dt=N.currentTarget;if(N=N.listener,X!==d&&u.isPropagationStopped())break t;d=N,u.currentTarget=dt;try{d(u)}catch(bt){Nl(bt)}u.currentTarget=null,d=X}else for(b=0;b<o.length;b++){if(N=o[b],X=N.instance,dt=N.currentTarget,N=N.listener,X!==d&&u.isPropagationStopped())break t;d=N,u.currentTarget=dt;try{d(u)}catch(bt){Nl(bt)}u.currentTarget=null,d=X}}}}function Te(e,n){var a=n[Ca];a===void 0&&(a=n[Ca]=new Set);var o=e+"__bubble";a.has(o)||(Bg(n,e,2,!1),a.add(o))}function dd(e,n,a){var o=0;n&&(o|=4),Bg(a,e,o,n)}var _c="_reactListening"+Math.random().toString(36).slice(2);function hd(e){if(!e[_c]){e[_c]=!0,gt.forEach(function(a){a!=="selectionchange"&&(ny.has(a)||dd(a,!1,e),dd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[_c]||(n[_c]=!0,dd("selectionchange",!1,n))}}function Bg(e,n,a,o){switch(d_(n)){case 2:var u=Dy;break;case 8:u=Ny;break;default:u=wd}a=u.bind(null,n,a,e),u=void 0,!Uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function pd(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var b=o.tag;if(b===3||b===4){var N=o.stateNode.containerInfo;if(N===u)break;if(b===4)for(b=o.return;b!==null;){var X=b.tag;if((X===3||X===4)&&b.stateNode.containerInfo===u)return;b=b.return}for(;N!==null;){if(b=Da(N),b===null)return;if(X=b.tag,X===5||X===6||X===26||X===27){o=d=b;continue t}N=N.parentNode}}o=o.return}Vp(function(){var dt=d,bt=Du(a),Rt=[];t:{var pt=gm.get(e);if(pt!==void 0){var xt=wl,Jt=e;switch(e){case"keypress":if(Al(a)===0)break t;case"keydown":case"keyup":xt=Zx;break;case"focusin":Jt="focus",xt=Fu;break;case"focusout":Jt="blur",xt=Fu;break;case"beforeblur":case"afterblur":xt=Fu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":xt=Xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":xt=Bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":xt=Jx;break;case dm:case hm:case pm:xt=Hx;break;case mm:xt=tS;break;case"scroll":case"scrollend":xt=Px;break;case"wheel":xt=nS;break;case"copy":case"cut":case"paste":xt=Vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":xt=qp;break;case"toggle":case"beforetoggle":xt=aS}var oe=(n&4)!==0,We=!oe&&(e==="scroll"||e==="scrollend"),rt=oe?pt!==null?pt+"Capture":null:pt;oe=[];for(var Q=dt,ft;Q!==null;){var Et=Q;if(ft=Et.stateNode,Et=Et.tag,Et!==5&&Et!==26&&Et!==27||ft===null||rt===null||(Et=ro(Q,rt),Et!=null&&oe.push(Ho(Q,Et,ft))),We)break;Q=Q.return}0<oe.length&&(pt=new xt(pt,Jt,null,a,bt),Rt.push({event:pt,listeners:oe}))}}if((n&7)===0){t:{if(pt=e==="mouseover"||e==="pointerover",xt=e==="mouseout"||e==="pointerout",pt&&a!==Cu&&(Jt=a.relatedTarget||a.fromElement)&&(Da(Jt)||Jt[$i]))break t;if((xt||pt)&&(pt=bt.window===bt?bt:(pt=bt.ownerDocument)?pt.defaultView||pt.parentWindow:window,xt?(Jt=a.relatedTarget||a.toElement,xt=dt,Jt=Jt?Da(Jt):null,Jt!==null&&(We=c(Jt),oe=Jt.tag,Jt!==We||oe!==5&&oe!==27&&oe!==6)&&(Jt=null)):(xt=null,Jt=dt),xt!==Jt)){if(oe=Xp,Et="onMouseLeave",rt="onMouseEnter",Q="mouse",(e==="pointerout"||e==="pointerover")&&(oe=qp,Et="onPointerLeave",rt="onPointerEnter",Q="pointer"),We=xt==null?pt:ps(xt),ft=Jt==null?pt:ps(Jt),pt=new oe(Et,Q+"leave",xt,a,bt),pt.target=We,pt.relatedTarget=ft,Et=null,Da(bt)===dt&&(oe=new oe(rt,Q+"enter",Jt,a,bt),oe.target=ft,oe.relatedTarget=We,Et=oe),We=Et,xt&&Jt)e:{for(oe=iy,rt=xt,Q=Jt,ft=0,Et=rt;Et;Et=oe(Et))ft++;Et=0;for(var re=Q;re;re=oe(re))Et++;for(;0<ft-Et;)rt=oe(rt),ft--;for(;0<Et-ft;)Q=oe(Q),Et--;for(;ft--;){if(rt===Q||Q!==null&&rt===Q.alternate){oe=rt;break e}rt=oe(rt),Q=oe(Q)}oe=null}else oe=null;xt!==null&&Ig(Rt,pt,xt,oe,!1),Jt!==null&&We!==null&&Ig(Rt,We,Jt,oe,!0)}}t:{if(pt=dt?ps(dt):window,xt=pt.nodeName&&pt.nodeName.toLowerCase(),xt==="select"||xt==="input"&&pt.type==="file")var Pe=em;else if($p(pt))if(nm)Pe=pS;else{Pe=dS;var ne=fS}else xt=pt.nodeName,!xt||xt.toLowerCase()!=="input"||pt.type!=="checkbox"&&pt.type!=="radio"?dt&&Ks(dt.elementType)&&(Pe=em):Pe=hS;if(Pe&&(Pe=Pe(e,dt))){tm(Rt,Pe,a,bt);break t}ne&&ne(e,pt,dt),e==="focusout"&&dt&&pt.type==="number"&&dt.memoizedProps.value!=null&&Ei(pt,"number",pt.value)}switch(ne=dt?ps(dt):window,e){case"focusin":($p(ne)||ne.contentEditable==="true")&&(tr=ne,Vu=dt,mo=null);break;case"focusout":mo=Vu=tr=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,um(Rt,a,bt);break;case"selectionchange":if(gS)break;case"keydown":case"keyup":um(Rt,a,bt)}var Se;if(Iu)t:{switch(e){case"compositionstart":var we="onCompositionStart";break t;case"compositionend":we="onCompositionEnd";break t;case"compositionupdate":we="onCompositionUpdate";break t}we=void 0}else $s?Qp(e,a)&&(we="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(Yp&&a.locale!=="ko"&&($s||we!=="onCompositionStart"?we==="onCompositionEnd"&&$s&&(Se=kp()):(Ua=bt,Lu="value"in Ua?Ua.value:Ua.textContent,$s=!0)),ne=vc(dt,we),0<ne.length&&(we=new Wp(we,e,null,a,bt),Rt.push({event:we,listeners:ne}),Se?we.data=Se:(Se=Jp(a),Se!==null&&(we.data=Se)))),(Se=rS?oS(e,a):lS(e,a))&&(we=vc(dt,"onBeforeInput"),0<we.length&&(ne=new Wp("onBeforeInput","beforeinput",null,a,bt),Rt.push({event:ne,listeners:we}),ne.data=Se)),$S(Rt,e,dt,a,bt)}Fg(Rt,n)})}function Ho(e,n,a){return{instance:e,listener:n,currentTarget:a}}function vc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=ro(e,a),u!=null&&o.unshift(Ho(e,u,d)),u=ro(e,n),u!=null&&o.push(Ho(e,u,d))),e.tag===3)return o;e=e.return}return[]}function iy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ig(e,n,a,o,u){for(var d=n._reactName,b=[];a!==null&&a!==o;){var N=a,X=N.alternate,dt=N.stateNode;if(N=N.tag,X!==null&&X===o)break;N!==5&&N!==26&&N!==27||dt===null||(X=dt,u?(dt=ro(a,d),dt!=null&&b.unshift(Ho(a,dt,X))):u||(dt=ro(a,d),dt!=null&&b.push(Ho(a,dt,X)))),a=a.return}b.length!==0&&e.push({event:n,listeners:b})}var ay=/\r\n?/g,sy=/\u0000|\uFFFD/g;function zg(e){return(typeof e=="string"?e:""+e).replace(ay,`
`).replace(sy,"")}function Hg(e,n){return n=zg(n),zg(e)===n}function Xe(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Hn(e,""+o);break;case"className":me(e,"class",o);break;case"tabIndex":me(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":me(e,a,o);break;case"style":ta(e,o,d);break;case"data":if(n!=="object"){me(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=El(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=El(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ea);break;case"onScroll":o!=null&&Te("scroll",e);break;case"onScrollEnd":o!=null&&Te("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=El(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Te("beforetoggle",e),Te("toggle",e),ce(e,"popover",o);break;case"xlinkActuate":Qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Qt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Qt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Qt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Qt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ce(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Lx.get(a)||a,ce(e,a,o))}}function md(e,n,a,o,u,d){switch(a){case"style":ta(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Hn(e,o):(typeof o=="number"||typeof o=="bigint")&&Hn(e,""+o);break;case"onScroll":o!=null&&Te("scroll",e);break;case"onScrollEnd":o!=null&&Te("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ht.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[_n]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ce(e,a,o)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Te("error",e),Te("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var b=a[d];if(b!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,d,b,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),o&&Xe(e,n,"src",a.src,a,null);return;case"input":Te("invalid",e);var N=d=b=u=null,X=null,dt=null;for(o in a)if(a.hasOwnProperty(o)){var bt=a[o];if(bt!=null)switch(o){case"name":u=bt;break;case"type":b=bt;break;case"checked":X=bt;break;case"defaultChecked":dt=bt;break;case"value":d=bt;break;case"defaultValue":N=bt;break;case"children":case"dangerouslySetInnerHTML":if(bt!=null)throw Error(s(137,n));break;default:Xe(e,n,o,bt,a,null)}}Qn(e,d,N,X,dt,b,u,!1);return;case"select":Te("invalid",e),o=b=d=null;for(u in a)if(a.hasOwnProperty(u)&&(N=a[u],N!=null))switch(u){case"value":d=N;break;case"defaultValue":b=N;break;case"multiple":o=N;default:Xe(e,n,u,N,a,null)}n=d,a=b,e.multiple=!!o,n!=null?Jn(e,!!o,n,!1):a!=null&&Jn(e,!!o,a,!0);return;case"textarea":Te("invalid",e),d=u=o=null;for(b in a)if(a.hasOwnProperty(b)&&(N=a[b],N!=null))switch(b){case"value":o=N;break;case"defaultValue":u=N;break;case"children":d=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(91));break;default:Xe(e,n,b,N,a,null)}un(e,o,u,d);return;case"option":for(X in a)if(a.hasOwnProperty(X)&&(o=a[X],o!=null))switch(X){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xe(e,n,X,o,a,null)}return;case"dialog":Te("beforetoggle",e),Te("toggle",e),Te("cancel",e),Te("close",e);break;case"iframe":case"object":Te("load",e);break;case"video":case"audio":for(o=0;o<zo.length;o++)Te(zo[o],e);break;case"image":Te("error",e),Te("load",e);break;case"details":Te("toggle",e);break;case"embed":case"source":case"link":Te("error",e),Te("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(dt in a)if(a.hasOwnProperty(dt)&&(o=a[dt],o!=null))switch(dt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,dt,o,a,null)}return;default:if(Ks(n)){for(bt in a)a.hasOwnProperty(bt)&&(o=a[bt],o!==void 0&&md(e,n,bt,o,a,void 0));return}}for(N in a)a.hasOwnProperty(N)&&(o=a[N],o!=null&&Xe(e,n,N,o,a,null))}function ry(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,b=null,N=null,X=null,dt=null,bt=null;for(xt in a){var Rt=a[xt];if(a.hasOwnProperty(xt)&&Rt!=null)switch(xt){case"checked":break;case"value":break;case"defaultValue":X=Rt;default:o.hasOwnProperty(xt)||Xe(e,n,xt,null,o,Rt)}}for(var pt in o){var xt=o[pt];if(Rt=a[pt],o.hasOwnProperty(pt)&&(xt!=null||Rt!=null))switch(pt){case"type":d=xt;break;case"name":u=xt;break;case"checked":dt=xt;break;case"defaultChecked":bt=xt;break;case"value":b=xt;break;case"defaultValue":N=xt;break;case"children":case"dangerouslySetInnerHTML":if(xt!=null)throw Error(s(137,n));break;default:xt!==Rt&&Xe(e,n,pt,xt,o,Rt)}}zn(e,b,N,X,dt,bt,d,u);return;case"select":xt=b=N=pt=null;for(d in a)if(X=a[d],a.hasOwnProperty(d)&&X!=null)switch(d){case"value":break;case"multiple":xt=X;default:o.hasOwnProperty(d)||Xe(e,n,d,null,o,X)}for(u in o)if(d=o[u],X=a[u],o.hasOwnProperty(u)&&(d!=null||X!=null))switch(u){case"value":pt=d;break;case"defaultValue":N=d;break;case"multiple":b=d;default:d!==X&&Xe(e,n,u,d,o,X)}n=N,a=b,o=xt,pt!=null?Jn(e,!!a,pt,!1):!!o!=!!a&&(n!=null?Jn(e,!!a,n,!0):Jn(e,!!a,a?[]:"",!1));return;case"textarea":xt=pt=null;for(N in a)if(u=a[N],a.hasOwnProperty(N)&&u!=null&&!o.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:Xe(e,n,N,null,o,u)}for(b in o)if(u=o[b],d=a[b],o.hasOwnProperty(b)&&(u!=null||d!=null))switch(b){case"value":pt=u;break;case"defaultValue":xt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Xe(e,n,b,u,o,d)}ze(e,pt,xt);return;case"option":for(var Jt in a)if(pt=a[Jt],a.hasOwnProperty(Jt)&&pt!=null&&!o.hasOwnProperty(Jt))switch(Jt){case"selected":e.selected=!1;break;default:Xe(e,n,Jt,null,o,pt)}for(X in o)if(pt=o[X],xt=a[X],o.hasOwnProperty(X)&&pt!==xt&&(pt!=null||xt!=null))switch(X){case"selected":e.selected=pt&&typeof pt!="function"&&typeof pt!="symbol";break;default:Xe(e,n,X,pt,o,xt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in a)pt=a[oe],a.hasOwnProperty(oe)&&pt!=null&&!o.hasOwnProperty(oe)&&Xe(e,n,oe,null,o,pt);for(dt in o)if(pt=o[dt],xt=a[dt],o.hasOwnProperty(dt)&&pt!==xt&&(pt!=null||xt!=null))switch(dt){case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:Xe(e,n,dt,pt,o,xt)}return;default:if(Ks(n)){for(var We in a)pt=a[We],a.hasOwnProperty(We)&&pt!==void 0&&!o.hasOwnProperty(We)&&md(e,n,We,void 0,o,pt);for(bt in o)pt=o[bt],xt=a[bt],!o.hasOwnProperty(bt)||pt===xt||pt===void 0&&xt===void 0||md(e,n,bt,pt,o,xt);return}}for(var rt in a)pt=a[rt],a.hasOwnProperty(rt)&&pt!=null&&!o.hasOwnProperty(rt)&&Xe(e,n,rt,null,o,pt);for(Rt in o)pt=o[Rt],xt=a[Rt],!o.hasOwnProperty(Rt)||pt===xt||pt==null&&xt==null||Xe(e,n,Rt,pt,o,xt)}function Gg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function oy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,b=u.initiatorType,N=u.duration;if(d&&N&&Gg(b)){for(b=0,N=u.responseEnd,o+=1;o<a.length;o++){var X=a[o],dt=X.startTime;if(dt>N)break;var bt=X.transferSize,Rt=X.initiatorType;bt&&Gg(Rt)&&(X=X.responseEnd,b+=bt*(X<N?1:(N-dt)/(X-dt)))}if(--o,n+=8*(d+b)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var gd=null,_d=null;function xc(e){return e.nodeType===9?e:e.ownerDocument}function Vg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function kg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function vd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xd=null;function ly(){var e=window.event;return e&&e.type==="popstate"?e===xd?!1:(xd=e,!0):(xd=null,!1)}var jg=typeof setTimeout=="function"?setTimeout:void 0,cy=typeof clearTimeout=="function"?clearTimeout:void 0,Xg=typeof Promise=="function"?Promise:void 0,uy=typeof queueMicrotask=="function"?queueMicrotask:typeof Xg<"u"?function(e){return Xg.resolve(null).then(e).catch(fy)}:jg;function fy(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function Wg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Rr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Go(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Go(a);for(var d=a.firstChild;d;){var b=d.nextSibling,N=d.nodeName;d[hs]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=b}}else a==="body"&&Go(e.ownerDocument.body);a=u}while(a);Rr(n)}function qg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Sd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sd(a),so(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function dy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[hs])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=_i(e.nextSibling),e===null)break}return null}function hy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=_i(e.nextSibling),e===null))return null;return e}function Yg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=_i(e.nextSibling),e===null))return null;return e}function yd(e){return e.data==="$?"||e.data==="$~"}function Md(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function py(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function _i(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var bd=null;function Zg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return _i(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Kg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Qg(e,n,a){switch(n=xc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Go(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);so(e)}var vi=new Map,Jg=new Set;function Sc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _a=B.d;B.d={f:my,r:gy,D:_y,C:vy,L:xy,m:Sy,X:My,S:yy,M:by};function my(){var e=_a.f(),n=fc();return e||n}function gy(e){var n=Na(e);n!==null&&n.tag===5&&n.type==="form"?m0(n):_a.r(e)}var Er=typeof document>"u"?null:document;function $g(e,n,a){var o=Er;if(o&&typeof n=="string"&&n){var u=de(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Jg.has(u)||(Jg.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",e),et(n),o.head.appendChild(n)))}}function _y(e){_a.D(e),$g("dns-prefetch",e,null)}function vy(e,n){_a.C(e,n),$g("preconnect",e,n)}function xy(e,n,a){_a.L(e,n,a);var o=Er;if(o&&e&&n){var u='link[rel="preload"][as="'+de(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+de(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+de(a.imageSizes)+'"]')):u+='[href="'+de(e)+'"]';var d=u;switch(n){case"style":d=Tr(e);break;case"script":d=Ar(e)}vi.has(d)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),vi.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Vo(d))||n==="script"&&o.querySelector(ko(d))||(n=o.createElement("link"),Rn(n,"link",e),et(n),o.head.appendChild(n)))}}function Sy(e,n){_a.m(e,n);var a=Er;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+de(o)+'"][href="'+de(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ar(e)}if(!vi.has(d)&&(e=v({rel:"modulepreload",href:e},n),vi.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ko(d)))return}o=a.createElement("link"),Rn(o,"link",e),et(o),a.head.appendChild(o)}}}function yy(e,n,a){_a.S(e,n,a);var o=Er;if(o&&e){var u=L(o).hoistableStyles,d=Tr(e);n=n||"default";var b=u.get(d);if(!b){var N={loading:0,preload:null};if(b=o.querySelector(Vo(d)))N.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=vi.get(d))&&Ed(e,a);var X=b=o.createElement("link");et(X),Rn(X,"link",e),X._p=new Promise(function(dt,bt){X.onload=dt,X.onerror=bt}),X.addEventListener("load",function(){N.loading|=1}),X.addEventListener("error",function(){N.loading|=2}),N.loading|=4,yc(b,n,o)}b={type:"stylesheet",instance:b,count:1,state:N},u.set(d,b)}}}function My(e,n){_a.X(e,n);var a=Er;if(a&&e){var o=L(a).hoistableScripts,u=Ar(e),d=o.get(u);d||(d=a.querySelector(ko(u)),d||(e=v({src:e,async:!0},n),(n=vi.get(u))&&Td(e,n),d=a.createElement("script"),et(d),Rn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function by(e,n){_a.M(e,n);var a=Er;if(a&&e){var o=L(a).hoistableScripts,u=Ar(e),d=o.get(u);d||(d=a.querySelector(ko(u)),d||(e=v({src:e,async:!0,type:"module"},n),(n=vi.get(u))&&Td(e,n),d=a.createElement("script"),et(d),Rn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function t_(e,n,a,o){var u=(u=K.current)?Sc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Tr(a.href),a=L(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tr(a.href);var d=L(u).hoistableStyles,b=d.get(e);if(b||(u=u.ownerDocument||u,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,b),(d=u.querySelector(Vo(e)))&&!d._p&&(b.instance=d,b.state.loading=5),vi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(e,a),d||Ey(u,e,a,b.state))),n&&o===null)throw Error(s(528,""));return b}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ar(a),a=L(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Tr(e){return'href="'+de(e)+'"'}function Vo(e){return'link[rel="stylesheet"]['+e+"]"}function e_(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Ey(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),et(n),e.head.appendChild(n))}function Ar(e){return'[src="'+de(e)+'"]'}function ko(e){return"script[async]"+e}function n_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+de(a.href)+'"]');if(o)return n.instance=o,et(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),et(o),Rn(o,"style",u),yc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Tr(a.href);var d=e.querySelector(Vo(u));if(d)return n.state.loading|=4,n.instance=d,et(d),d;o=e_(a),(u=vi.get(u))&&Ed(o,u),d=(e.ownerDocument||e).createElement("link"),et(d);var b=d;return b._p=new Promise(function(N,X){b.onload=N,b.onerror=X}),Rn(d,"link",o),n.state.loading|=4,yc(d,a.precedence,e),n.instance=d;case"script":return d=Ar(a.src),(u=e.querySelector(ko(d)))?(n.instance=u,et(u),u):(o=a,(u=vi.get(d))&&(o=v({},a),Td(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),et(u),Rn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,yc(o,a.precedence,e));return n.instance}function yc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,b=0;b<o.length;b++){var N=o[b];if(N.dataset.precedence===n)d=N;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Ed(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Td(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Mc=null;function i_(e,n,a){if(Mc===null){var o=new Map,u=Mc=new Map;u.set(a,o)}else u=Mc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[hs]||d[cn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var b=d.getAttribute(n)||"";b=e+b;var N=o.get(b);N?N.push(d):o.set(b,[d])}}return o}function a_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Ty(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function s_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Ay(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Tr(o.href),d=n.querySelector(Vo(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=bc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=d,et(d);return}d=n.ownerDocument||n,o=e_(o),(u=vi.get(u))&&Ed(o,u),d=d.createElement("link"),et(d);var b=d;b._p=new Promise(function(N,X){b.onload=N,b.onerror=X}),Rn(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=bc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ad=0;function Ry(e,n){return e.stylesheets&&e.count===0&&Tc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Tc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&Ad===0&&(Ad=62500*oy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Tc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Ad?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function bc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Tc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ec=null;function Tc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ec=new Map,n.forEach(wy,e),Ec=null,bc.call(e))}function wy(e,n){if(!(n.state.loading&4)){var a=Ec.get(e);if(a)var o=a.get(null);else{a=new Map,Ec.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var b=u[d];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),o=b)}o&&a.set(null,o)}u=n.instance,b=u.getAttribute("data-precedence"),d=a.get(b)||o,d===o&&a.set(null,u),a.set(b,u),this.count++,o=bc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var jo={$$typeof:D,Provider:null,Consumer:null,_currentValue:nt,_currentValue2:nt,_threadCount:0};function Cy(e,n,a,o,u,d,b,N,X){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ne(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ne(0),this.hiddenUpdates=Ne(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.incompleteTransitions=new Map}function r_(e,n,a,o,u,d,b,N,X,dt,bt,Rt){return e=new Cy(e,n,a,b,X,dt,bt,Rt,N),n=1,d===!0&&(n|=24),d=ti(3,null,null,n),e.current=d,d.stateNode=e,n=sf(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},cf(d),e}function o_(e){return e?(e=ir,e):ir}function l_(e,n,a,o,u,d){u=o_(u),o.context===null?o.context=u:o.pendingContext=u,o=Ia(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=za(e,o,n),a!==null&&(Zn(a,e,n),Mo(a,e,n))}function c_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Rd(e,n){c_(e,n),(e=e.alternate)&&c_(e,n)}function u_(e){if(e.tag===13||e.tag===31){var n=vs(e,67108864);n!==null&&Zn(n,e,67108864),Rd(e,67108864)}}function f_(e){if(e.tag===13||e.tag===31){var n=si();n=qs(n);var a=vs(e,n);a!==null&&Zn(a,e,n),Rd(e,n)}}var Ac=!0;function Dy(e,n,a,o){var u=U.T;U.T=null;var d=B.p;try{B.p=2,wd(e,n,a,o)}finally{B.p=d,U.T=u}}function Ny(e,n,a,o){var u=U.T;U.T=null;var d=B.p;try{B.p=8,wd(e,n,a,o)}finally{B.p=d,U.T=u}}function wd(e,n,a,o){if(Ac){var u=Cd(o);if(u===null)pd(e,n,o,Rc,a),h_(e,o);else if(Ly(u,e,n,a,o))o.stopPropagation();else if(h_(e,o),n&4&&-1<Uy.indexOf(e)){for(;u!==null;){var d=Na(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var b=Nt(d.pendingLanes);if(b!==0){var N=d;for(N.pendingLanes|=2,N.entangledLanes|=2;b;){var X=1<<31-zt(b);N.entanglements[1]|=X,b&=~X}Hi(d),(Be&6)===0&&(cc=A()+500,Io(0))}}break;case 31:case 13:N=vs(d,2),N!==null&&Zn(N,d,2),fc(),Rd(d,2)}if(d=Cd(o),d===null&&pd(e,n,o,Rc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else pd(e,n,o,null,a)}}function Cd(e){return e=Du(e),Dd(e)}var Rc=null;function Dd(e){if(Rc=null,e=Da(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Rc=e,null}function d_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tt()){case yt:return 2;case Tt:return 8;case vt:case Zt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var Nd=!1,Ka=null,Qa=null,Ja=null,Xo=new Map,Wo=new Map,$a=[],Uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function h_(e,n){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":Xo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wo.delete(n.pointerId)}}function qo(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Na(n),n!==null&&u_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Ly(e,n,a,o,u){switch(n){case"focusin":return Ka=qo(Ka,e,n,a,o,u),!0;case"dragenter":return Qa=qo(Qa,e,n,a,o,u),!0;case"mouseover":return Ja=qo(Ja,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Xo.set(d,qo(Xo.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Wo.set(d,qo(Wo.get(d)||null,e,n,a,o,u)),!0}return!1}function p_(e){var n=Da(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Zs(e.priority,function(){f_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Zs(e.priority,function(){f_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Cd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Cu=o,a.target.dispatchEvent(o),Cu=null}else return n=Na(a),n!==null&&u_(n),e.blockedOn=a,!1;n.shift()}return!0}function m_(e,n,a){wc(e)&&a.delete(n)}function Oy(){Nd=!1,Ka!==null&&wc(Ka)&&(Ka=null),Qa!==null&&wc(Qa)&&(Qa=null),Ja!==null&&wc(Ja)&&(Ja=null),Xo.forEach(m_),Wo.forEach(m_)}function Cc(e,n){e.blockedOn===n&&(e.blockedOn=null,Nd||(Nd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Oy)))}var Dc=null;function g_(e){Dc!==e&&(Dc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Dc===e&&(Dc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Dd(o||a)===null)continue;break}var d=Na(a);d!==null&&(e.splice(n,3),n-=3,Cf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Rr(e){function n(X){return Cc(X,e)}Ka!==null&&Cc(Ka,e),Qa!==null&&Cc(Qa,e),Ja!==null&&Cc(Ja,e),Xo.forEach(n),Wo.forEach(n);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)p_(a),a.blockedOn===null&&$a.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],b=u[_n]||null;if(typeof d=="function")b||g_(a);else if(b){var N=null;if(d&&d.hasAttribute("formAction")){if(u=d,b=d[_n]||null)N=b.formAction;else if(Dd(u)!==null)continue}else N=b.action;typeof N=="function"?a[o+1]=N:(a.splice(o,3),o-=3),g_(a)}}}function __(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(b){return u=b})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ud(e){this._internalRoot=e}Nc.prototype.render=Ud.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();l_(a,o,e,n,null,null)},Nc.prototype.unmount=Ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;l_(e.current,2,null,e,null,null),fc(),n[$i]=null}};function Nc(e){this._internalRoot=e}Nc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Fi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,e),a===0&&p_(e)}};var v_=t.version;if(v_!=="19.2.4")throw Error(s(527,v_,"19.2.4"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Py={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uc.isDisabled&&Uc.supportsFiber)try{Dt=Uc.inject(Py),wt=Uc}catch{}}return Zo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=T0,d=A0,b=R0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError)),n=r_(e,1,!1,null,null,a,o,null,u,d,b,__),e[$i]=n.current,hd(e),new Ud(n)},Zo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",d=T0,b=A0,N=R0,X=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(N=a.onRecoverableError),a.formState!==void 0&&(X=a.formState)),n=r_(e,1,!0,n,a??null,o,u,X,d,b,N,__),n.context=o_(null),a=n.current,o=si(),o=qs(o),u=Ia(o),u.callback=null,za(a,u,o),a=o,n.current.lanes=a,Bn(n,a),Hi(n),e[$i]=n.current,hd(e),new Nc(n)},Zo.version="19.2.4",Zo}var w_;function Yy(){if(w_)return Pd.exports;w_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Pd.exports=qy(),Pd.exports}var Zy=Yy();const Ky=Kv(Zy),Ie=16,Qe=250,Tu=["#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2","#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2"],Qy=500,C_=1e3,Jy=3e4,$y=2;function tM(r=4){const[t,i]=Z.useState(!1),[s,l]=Z.useState(0),[c,f]=Z.useState(0),[p,m]=Z.useState(null),[h,S]=Z.useState(!1),[v,g]=Z.useState(0),[y,M]=Z.useState(null),w=Z.useRef(null),_=Z.useRef(null),x=Z.useRef(null),T=Z.useRef(null),D=Z.useRef(0),R=Z.useRef(0),H=Z.useRef([]),P=Z.useRef(!1),F=Z.useRef(0),E=Z.useRef(0),O=Z.useRef(0),J=Qe*r;O.current=J,(!T.current||T.current[0].length!==J)&&(T.current=Array.from({length:Ie},()=>new Float32Array(J)),D.current=0,R.current=0),Z.useEffect(()=>(h?(w.current=Date.now(),g(0),_.current&&clearInterval(_.current),_.current=setInterval(()=>{g(Math.floor((Date.now()-w.current)/1e3))},500)):(_.current&&clearInterval(_.current),w.current=null),()=>{_.current&&clearInterval(_.current)}),[h]);const V=Z.useCallback($=>{P.current=$,$||(D.current=0,R.current=0)},[]),k=Z.useCallback($=>{const U=x.current;U&&U.readyState===WebSocket.OPEN&&U.send(JSON.stringify($))},[]);Z.useEffect(()=>{const $=location.hostname||"localhost",U=parseInt(location.port||"1617")-1,nt=`${location.protocol==="https:"?"wss":"ws"}://${$}:${U}`,ot="/auth/ws-token";async function St(){try{const W=await fetch(ot,{credentials:"include"});return W.ok&&(await W.json()).token||null}catch{return null}}let z=C_;async function I(){const W=await St(),lt=W?`${nt}?token=${encodeURIComponent(W)}`:nt,_t=new WebSocket(lt);x.current=_t,_t.onopen=()=>{i(!0),z=C_},_t.onclose=()=>{i(!1),m(null);const K=Math.random()*z*.3;setTimeout(I,z+K),z=Math.min(z*$y,Jy)},_t.onerror=()=>_t.close(),_t.onmessage=K=>{const st=JSON.parse(K.data);if("record_status"in st){const Ut=st.record_status;if(S(Ut.recording),Ut.stopped){const kt=location.port||"1617";M({filename:Ut.stopped.filename,frames:Ut.stopped.frames,duration:Ut.stopped.duration,path:Ut.stopped.path,downloadUrl:`${location.protocol}//${location.hostname}:${kt}/recordings/${Ut.stopped.filename}`})}}if("status"in st||P.current)return;const mt=st.channels;if(!mt||mt.length!==Ie)return;const Y=T.current,At=O.current,Ct=D.current;for(let Ut=0;Ut<Ie;Ut++)Y[Ut][Ct]=mt[Ut];D.current=(Ct+1)%At,R.current<At&&R.current++,F.current++;const It=st.t;H.current.push(It);const Pt=performance.now();if(Pt-E.current>Qy){E.current=Pt,l(F.current);const Ut=H.current,kt=It-2;let Wt=0;for(;Wt<Ut.length&&Ut[Wt]<kt;)Wt++;if(Wt>0&&Ut.splice(0,Wt),Ut.length>1){const j=Ut[Ut.length-1]-Ut[0];j>0&&f(Math.round((Ut.length-1)/j))}const se=Math.round((Date.now()/1e3-It)*1e3);se>=0&&se<1e4&&m(se)}}}return I(),()=>{const W=x.current;W&&W.close()}},[]);const q=Z.useCallback(()=>M(null),[]),at=Z.useMemo(()=>({buffers:T,writeIndex:D,samplesInBuffer:R,bufferSize:J,gridSuspended:!1}),[]);return at.bufferSize=J,{connected:t,sampleCount:s,hz:c,latencyMs:p,recording:h,recordElapsed:v,recordResult:y,data:at,dismissRecordResult:q,setPaused:V,sendCommand:k}}function zd({children:r}){const[t,i]=Z.useState("checking"),[s,l]=Z.useState(""),[c,f]=Z.useState("");Z.useEffect(()=>{(async()=>{try{const h=await fetch("/auth/status",{credentials:"include"});if(!h.ok){i("login");return}const S=await h.json();i(S.authenticated?"ok":"login")}catch(h){console.error("Auth check error:",h),i("login")}})()},[]);async function p(m){m.preventDefault(),f("");try{const S=await(await fetch("/auth",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({code:s})})).json();S.ok?i("ok"):(f(S.error||"Invalid code"),l(""))}catch{f("Server unreachable")}}return t==="checking"?null:t==="ok"?C.jsx(C.Fragment,{children:r}):C.jsx("div",{className:"auth-overlay",children:C.jsxs("div",{className:"auth-card",children:[C.jsxs("h1",{children:["Pi",C.jsx("span",{children:"EEG"}),"-16"]}),C.jsx("p",{className:"auth-sub",children:"Enter the access code displayed in the server console"}),C.jsxs("form",{onSubmit:p,children:[C.jsx("input",{className:"auth-input",type:"text",maxLength:6,pattern:"[0-9]{6}",autoComplete:"off",autoFocus:!0,required:!0,placeholder:"------",value:s,onChange:m=>l(m.target.value.replace(/\D/g,""))}),C.jsx("br",{}),C.jsx("button",{className:"auth-btn",type:"submit",children:"Connect"}),c&&C.jsx("p",{className:"auth-error",children:c})]})]})})}const eM="rgba(48,54,61,0.4)",nM="rgba(88,166,255,0.15)",iM={high:1500,medium:800,low:400},D_=14,N_=20,U_=2;function aM(r,t,i,s,l,c,f,p,m,h){r.clearRect(0,0,t,i);const S=i/2,v=i/4;r.beginPath();for(let D=v;D<i;D+=v)r.moveTo(0,D),r.lineTo(t,D);if(r.strokeStyle=eM,r.lineWidth=.5,r.stroke(),r.beginPath(),r.moveTo(0,S),r.lineTo(t,S),r.strokeStyle=nM,r.lineWidth=1,r.stroke(),l<2)return;const g=iM[h]||1500,y=l>g?Math.floor(l/g):1,M=i/2,w=t/(f-1),_=M/p;if(h!=="low"){r.beginPath();let D=0;for(let R=0;R<l;R+=y){const H=(c-l+R+f)%f,P=R*w,F=S-s[H]*_;R===0?(r.moveTo(P,F),D=P):r.lineTo(P,F)}r.lineTo((l-1)*w,i),r.lineTo(D,i),r.closePath(),r.fillStyle=m+"10",r.fill()}r.strokeStyle=m,r.lineWidth=h==="low"?1:1.3,r.lineJoin="round",r.lineCap="round",r.beginPath();for(let D=0;D<l;D+=y){const R=(c-l+D+f)%f,H=D*w,P=S-s[R]*_;D===0?r.moveTo(H,P):r.lineTo(H,P)}r.stroke();let x=0;const T=Math.min(l,250);for(let D=l-T;D<l;D++){const R=(c-l+D+f)%f;x+=s[R]*s[R]}return Math.sqrt(x/T)}const sM=Z.memo(function({chIdx:t,eegData:i,yRange:s,expanded:l,onToggleExpand:c,active:f=!0}){const p=Z.useRef(null),m=Z.useRef(0),h=Z.useRef(0),S=Z.useRef(null),v=Z.useRef(null),g=Z.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),y=Z.useRef(!0),M=Z.useRef("high"),w=Z.useRef([]),_=Z.useRef(-1),x=Z.useRef(0),T=Z.useRef(0);return Z.useEffect(()=>{if(!f)return;const D=p.current;if(!D)return;const R=new ResizeObserver(H=>{const P=H[0];if(!P)return;const F=window.devicePixelRatio||1,{width:E,height:O}=P.contentRect,J=l?Math.min(F,2):1;g.current={w:E,h:O,pw:Math.round(E*J),ph:Math.round(O*J),dpr:J},y.current=!0});return R.observe(D),()=>R.disconnect()},[f,l]),Z.useEffect(()=>{if(!f)return;const D=p.current;if(!D)return;const R=D.getContext("2d",{alpha:!1});_.current=-1,T.current=0;const H=t%U_,P=()=>{T.current++;const{w:F,h:E,pw:O,ph:J,dpr:V}=g.current;if(F===0||E===0){m.current=requestAnimationFrame(P);return}if(!l&&i.gridSuspended){m.current=requestAnimationFrame(P);return}if(!l&&T.current%U_!==H){m.current=requestAnimationFrame(P);return}const k=i.writeIndex.current;if(k===_.current){m.current=requestAnimationFrame(P);return}_.current=k;const q=performance.now();y.current&&(y.current=!1,D.width=O,D.height=J,R.setTransform(V,0,0,V,0,0)),R.fillStyle="#0d1117",R.fillRect(0,0,F,E);const at=aM(R,F,E,i.buffers.current[t],i.samplesInBuffer.current,k,i.bufferSize,s,Tu[t],M.current);if(x.current++,at!==void 0&&(x.current&1)===0){h.current=at;const B=at/s;if(S.current&&(S.current.style.borderLeftColor=B>.8?"#f85149":B>.4?"#d29922":"#3fb950"),v.current){const nt=B>.8?"#f85149":B>.4?"#d29922":"#3fb950",ot=B>.8?"HIGH":B>.4?"MED":"OK",St=at<.5;v.current.style.color=St?"#8b949e":nt,v.current.textContent=St?"FLAT":ot}}const $=performance.now()-q,U=w.current;if(U.push($),U.length>N_&&U.shift(),U.length===N_){let B=0;for(let ot=0;ot<U.length;ot++)B+=U[ot];const nt=B/U.length;nt>D_&&M.current!=="low"?M.current=M.current==="high"?"medium":"low":nt<D_*.4&&M.current!=="high"&&(M.current=M.current==="low"?"medium":"high")}m.current=requestAnimationFrame(P)};return m.current=requestAnimationFrame(P),()=>cancelAnimationFrame(m.current)},[t,i,s,f]),f?C.jsxs("div",{className:`channel-cell${l?" expanded":""}`,onClick:c,children:[C.jsxs("div",{className:"channel-label",ref:S,children:["Ch ",t+1,C.jsx("span",{className:"signal-quality",ref:v,children:"OK"})]}),C.jsx("canvas",{ref:p,style:{display:"block",width:"100%",height:"100%"}})]}):C.jsxs("div",{className:`channel-cell inactive${l?" expanded":""}`,onClick:c,children:[C.jsxs("div",{className:"channel-label",children:["Ch ",t+1]}),C.jsx("div",{className:"channel-off",children:"OFF"})]})}),{PI:rM,cos:L_,sin:oM}=Math,O_=2*rM,ln=[{name:"Delta",label:"δ Delta",low:.5,high:4,color:"#8b5cf6"},{name:"Theta",label:"θ Theta",low:4,high:8,color:"#06b6d4"},{name:"Alpha",label:"α Alpha",low:8,high:13,color:"#22c55e"},{name:"Beta",label:"β Beta",low:13,high:30,color:"#f59e0b"},{name:"Gamma",label:"γ Gamma",low:30,high:100,color:"#ef4444"}];class ks{constructor(t,i){Ci(this,"n");Ci(this,"sampleRateHz");Ci(this,"_window");Ci(this,"_frequencies");Ci(this,"_df");Ci(this,"_bitReversed");Ci(this,"_twRe");Ci(this,"_twIm");Ci(this,"_norm");if(t<=0||(t&t-1)!==0)throw new Error("n must be a power of 2");this.n=t,this.sampleRateHz=i,this._precompute()}_precompute(){const{n:t,sampleRateHz:i}=this;this._window=new Float64Array(t);for(let p=0;p<t;p++)this._window[p]=.5*(1-L_(O_*p/(t-1)));const s=(t>>1)+1;this._frequencies=new Float64Array(s),this._df=i/t;for(let p=0;p<s;p++)this._frequencies[p]=p*this._df;const l=ks._log2(t);this._bitReversed=new Int32Array(t);for(let p=0;p<t;p++)this._bitReversed[p]=ks._reverseBits(p,l);const c=t>>1;this._twRe=new Float64Array(c),this._twIm=new Float64Array(c);for(let p=0;p<c;p++){const m=-O_*p/t;this._twRe[p]=L_(m),this._twIm[p]=oM(m)}let f=0;for(let p=0;p<t;p++)f+=this._window[p]*this._window[p];this._norm=2/(i*f)}analyse(t,i){const{n:s,_window:l,_frequencies:c,_df:f,_norm:p}=this;if(i===void 0&&(i=t.length-s),i<0||t.length-i<s)return null;const m=new Float64Array(s),h=new Float64Array(s);for(let _=0;_<s;_++)m[_]=t[i+_]*l[_];this._fft(m,h);const S=(s>>1)+1,v=new Float64Array(S);let g=0,y=0,M=0;for(let _=0;_<S;_++){const x=m[_]*m[_]+h[_]*h[_],T=_===0||_===S-1?.5:1;v[_]=x*p*T,y+=v[_]*f,v[_]>g&&(g=v[_],M=_)}const w={};for(const _ of ln){let x=0;for(let T=0;T<S;T++)c[T]>=_.low&&c[T]<_.high&&(x+=v[T]*f);w[_.name]=x}return{frequencies:c,psd:v,bandPowers:w,dominantFrequency:c[M],totalPower:y}}analyseRing(t,i,s){const{n:l}=this;if(s<l)return null;const c=t.length,f=new Float64Array(l),p=(i-l+c)%c;for(let m=0;m<l;m++)f[m]=t[(p+m)%c];return this.analyse(f,0)}_fft(t,i){const{n:s,_bitReversed:l,_twRe:c,_twIm:f}=this;for(let p=0;p<s;p++){const m=l[p];if(m>p){let h=t[p];t[p]=t[m],t[m]=h,h=i[p],i[p]=i[m],i[m]=h}}for(let p=2;p<=s;p*=2){const m=p>>1,h=s/p;for(let S=0;S<s;S+=p)for(let v=0;v<m;v++){const g=v*h,y=c[g],M=f[g],w=S+v,_=w+m,x=y*t[_]-M*i[_],T=y*i[_]+M*t[_];t[_]=t[w]-x,i[_]=i[w]-T,t[w]+=x,i[w]+=T}}}static _log2(t){let i=0,s=t;for(;s>1;)s>>=1,i++;return i}static _reverseBits(t,i){let s=0,l=t;for(let c=0;c<i;c++)s=s<<1|l&1,l>>=1;return s}}const Ko=256,P_=8,F_=.25,Hd=15,lM=60,Di=40;function cM(r,t,i,s,l,c,f,p,m){r.clearRect(0,0,t,i);const h={l:52,r:12,t:8,b:28},S=t-h.l-h.r,v=i-h.t-h.b,g=h.t+v/2;r.fillStyle="#0d1117",r.fillRect(0,0,t,i),r.strokeStyle="rgba(48,54,61,0.5)",r.lineWidth=.5;const y=[-p,-p/2,0,p/2,p];r.font="9px monospace",r.fillStyle="#8b949e",r.textAlign="right";for(const U of y){const B=g-U/p*(v/2);r.beginPath(),r.moveTo(h.l,B),r.lineTo(t-h.r,B),r.stroke(),r.fillText(`${U>0?"+":""}${U}`,h.l-6,B+3)}r.textAlign="center",r.fillStyle="#8b949e";const M=f/Qe;for(let U=0;U<=M;U+=1){const B=h.l+U/M*S;r.beginPath(),r.moveTo(B,h.t),r.lineTo(B,h.t+v),r.strokeStyle="rgba(48,54,61,0.3)",r.stroke(),r.fillText(`${U}s`,B,i-6)}if(r.beginPath(),r.moveTo(h.l,g),r.lineTo(t-h.r,g),r.strokeStyle="rgba(88,166,255,0.2)",r.lineWidth=1,r.stroke(),l<2)return{};const w=v/2,_=S/(f-1),x=w/p;r.beginPath();let T=h.l;for(let U=0;U<l;U++){const B=(c-l+U+f)%f,nt=h.l+U*_,ot=g-s[B]*x;U===0?(r.moveTo(nt,ot),T=nt):r.lineTo(nt,ot)}r.lineTo(h.l+(l-1)*_,g+w),r.lineTo(T,g+w),r.closePath(),r.fillStyle=m+"0a",r.fill(),r.strokeStyle=m,r.lineWidth=1.5,r.lineJoin="round",r.lineCap="round",r.beginPath();for(let U=0;U<l;U++){const B=(c-l+U+f)%f,nt=h.l+U*_,ot=g-s[B]*x;U===0?r.moveTo(nt,ot):r.lineTo(nt,ot)}r.stroke();const D=h.l+(l-1)*_;r.beginPath(),r.moveTo(D,h.t),r.lineTo(D,h.t+v),r.strokeStyle=m+"40",r.lineWidth=1,r.setLineDash([3,3]),r.stroke(),r.setLineDash([]);const R=(c-1+f)%f,H=s[R];r.fillStyle=m,r.font="bold 11px monospace",r.textAlign="left",r.fillText(`${H.toFixed(1)} µV`,D+6,h.t+14),r.save(),r.translate(12,g),r.rotate(-Math.PI/2),r.textAlign="center",r.fillStyle="#8b949e",r.font="9px monospace",r.fillText("µV",0,0),r.restore();let P=0,F=0,E=1/0,O=-1/0,J=0,V=null;const k=Math.min(l,Qe*2);for(let U=l-k;U<l;U++){const B=(c-l+U+f)%f,nt=s[B];P+=nt,F+=nt*nt,nt<E&&(E=nt),nt>O&&(O=nt),V!==null&&(V>=0&&nt<0||V<0&&nt>=0)&&J++,V=nt}const q=P/k,at=Math.sqrt(F/k),$=O-E;return{mean:q,rms:at,pp:$,min:E,max:O,zeroCross:J,latestVal:H,statCount:k}}function uM(r,t,i,s,l,c,f,p){r.fillStyle="#0d1117",r.fillRect(0,0,t,i);const m={l:44,r:10,t:20,b:24},h=t-m.l-m.r,S=i-m.t-m.b,v=l[1],g=Math.min(Math.ceil(c/v),s.length-1);let y=1e-30;for(let M=1;M<=g;M++)s[M]>y&&(y=s[M]);for(const M of ln){if(M.low>=c)continue;const w=m.l+Math.max(M.low,0)/c*h,_=m.l+Math.min(M.high,c)/c*h,x=p===M.name;r.fillStyle=M.color+(x?"20":"0a"),r.fillRect(w,m.t,_-w,S),r.fillStyle=M.color+(x?"bb":"55"),r.font="8px monospace",r.textAlign="center",r.fillText(M.label.split(" ")[0],(w+_)/2,m.t+10)}r.strokeStyle="rgba(48,54,61,0.45)",r.lineWidth=.5;for(let M=1;M<4;M++){const w=m.t+M/4*S;r.beginPath(),r.moveTo(m.l,w),r.lineTo(m.l+h,w),r.stroke()}r.beginPath();for(let M=1;M<=g;M++){const w=m.l+l[M]/c*h,_=10*Math.log10((s[M]||1e-30)/y),x=Math.max(0,(_+60)/60),T=m.t+S-Math.min(1,x)*S;M===1?r.moveTo(w,T):r.lineTo(w,T)}r.strokeStyle="#58a6ff",r.lineWidth=1.5,r.stroke(),r.lineTo(m.l+l[g]/c*h,m.t+S),r.lineTo(m.l+l[1]/c*h,m.t+S),r.closePath(),r.fillStyle="rgba(88,166,255,0.08)",r.fill(),r.fillStyle="#8b949e",r.font="9px monospace",r.textAlign="center";for(let M=0;M<=c;M+=10)r.fillText(`${M}`,m.l+M/c*h,i-6);r.fillText("Hz",m.l+h+2,i-6),r.save(),r.translate(10,m.t+S/2),r.rotate(-Math.PI/2),r.textAlign="center",r.fillStyle="#8b949e",r.font="8px monospace",r.fillText("dB",0,0),r.restore(),r.textAlign="right",r.font="8px monospace",r.fillStyle="#6e7681";for(const M of[0,-20,-40,-60]){const w=m.t+S-(M+60)/60*S;r.fillText(`${M}`,m.l-4,w+3)}}function fM(r,t,i,s){r.fillStyle="#0d1117",r.fillRect(0,0,t,i);const l={l:10,r:10,t:6,b:4},c=Math.min(16,(i-l.t-l.b-(ln.length-1)*4)/ln.length),f=Math.max(...ln.map(m=>s[m.name]||0),1e-6),p=ln.reduce((m,h)=>m+(s[h.name]||0),0)||1e-6;ln.forEach((m,h)=>{const S=s[m.name]||0,v=S/f,g=(S/p*100).toFixed(1),y=l.t+h*(c+4),M=t-l.l-l.r-82;r.fillStyle=m.color,r.font="bold 9px monospace",r.textAlign="left",r.fillText(m.label.charAt(0),l.l,y+c-3);const w=l.l+14;r.fillStyle="rgba(48,54,61,0.5)",r.beginPath(),r.roundRect(w,y,M,c,3),r.fill(),v>0&&(r.fillStyle=m.color+"cc",r.beginPath(),r.roundRect(w,y,Math.max(4,M*v),c,3),r.fill()),r.fillStyle="#e6edf3",r.font="9px monospace",r.textAlign="right",r.fillText(`${g}%`,t-l.r,y+c-3)})}function dM(r,t,i,s,l,c,f,p){if(r.fillStyle="#0d1117",r.fillRect(0,0,t,i),l<10)return;const m={l:8,r:8,t:6,b:20},h=t-m.l-m.r,S=i-m.t-m.b,v=new Float32Array(Di),g=2*p/Di,y=Math.min(l,Qe*2);for(let _=l-y;_<l;_++){const x=(c-l+_+f)%f,T=s[x],D=Math.floor((T+p)/g);D>=0&&D<Di&&v[D]++}let M=0;for(let _=0;_<Di;_++)v[_]>M&&(M=v[_]);if(M===0)return;const w=h/Di;for(let _=0;_<Di;_++){const x=v[_]/M*S,T=m.l+_*w,D=m.t+S-x,R=Math.abs(_-Di/2)/(Di/2),H=Math.floor(88+R*160),P=Math.floor(166-R*120),F=Math.floor(255-R*200);r.fillStyle=`rgba(${H},${P},${F},0.6)`,r.fillRect(T+.5,D,w-1,x)}r.fillStyle="#6e7681",r.font="8px monospace",r.textAlign="center",r.fillText(`-${p}`,m.l+w,i-4),r.fillText("0",m.l+h/2,i-4),r.fillText(`+${p}`,t-m.r-w,i-4),r.strokeStyle="rgba(88,166,255,0.3)",r.lineWidth=1,r.beginPath();for(let _=0;_<Di;_++){const x=m.l+(_+.5)*w,T=(_-Di/2)/(Di/4),D=Math.exp(-.5*T*T),R=m.t+S-D*S*.85;_===0?r.moveTo(x,R):r.lineTo(x,R)}r.stroke()}const hM=Z.memo(function({chIdx:t,eegData:i,yRange:s,onClose:l}){var V;const c=Z.useRef(null),f=Z.useRef(null),p=Z.useRef(null),m=Z.useRef(null),h=Z.useRef(0),S=Z.useRef(0),v=Z.useRef(null),[g,y]=Z.useState(null),[M,w]=Z.useState({}),[_,x]=Z.useState({band:"",freq:0}),[T,D]=Z.useState(null),R=Z.useMemo(()=>new ks(Ko,Qe),[]),H=Tu[t],P=Z.useRef({trace:{w:0,h:0,pw:0,ph:0,dpr:1},spectrum:{w:0,h:0,pw:0,ph:0,dpr:1},band:{w:0,h:0,pw:0,ph:0,dpr:1},hist:{w:0,h:0,pw:0,ph:0,dpr:1}}),F=Z.useRef({trace:!0,spectrum:!0,band:!0,hist:!0});Z.useEffect(()=>{const k={trace:c.current,spectrum:f.current,band:p.current,hist:m.current},q={},at=[];for(const[ot,St]of Object.entries(k)){if(!St)continue;q[ot]=St.getContext("2d",{alpha:!1});const z=new ResizeObserver(I=>{const W=I[0];if(!W)return;const lt=Math.min(window.devicePixelRatio||1,2),{width:_t,height:K}=W.contentRect,st=Math.round(_t*lt),mt=Math.round(K*lt);P.current[ot]={w:_t,h:K,pw:st,ph:mt,dpr:lt},F.current[ot]=!0});z.observe(St),at.push(z)}let $=null,U={},B={band:"",freq:0};const nt=()=>{S.current++;for(const[W,lt]of Object.entries(k)){if(!lt||!F.current[W])continue;const{pw:_t,ph:K,dpr:st}=P.current[W];_t===0||K===0||(lt.width=_t,lt.height=K,q[W].setTransform(st,0,0,st,0,0),F.current[W]=!1)}const ot=i.buffers.current,St=i.writeIndex.current,z=i.samplesInBuffer.current,I=i.bufferSize;if(q.trace){const{w:W,h:lt}=P.current.trace;if(W>0&&lt>0){const _t=cM(q.trace,W,lt,ot[t],z,St,I,s,H);_t.rms!==void 0&&S.current%Hd===0&&($=_t)}}if(S.current%P_===0&&z>=Ko){const W=R.analyseRing(ot[t],St,z);if(W){if(!v.current||v.current.length!==W.psd.length)v.current=new Float64Array(W.psd);else{const K=v.current,st=W.psd;for(let mt=0;mt<K.length;mt++)K[mt]=K[mt]*(1-F_)+st[mt]*F_}U=W.bandPowers;let lt="",_t=0;for(const K of ln)(W.bandPowers[K.name]||0)>_t&&(_t=W.bandPowers[K.name],lt=K.name);B={band:lt,freq:W.dominantFrequency}}}if(q.spectrum&&v.current){const{w:W,h:lt}=P.current.spectrum;W>0&&lt>0&&uM(q.spectrum,W,lt,v.current,R._frequencies,lM,U,T)}if(q.band&&S.current%P_===0){const{w:W,h:lt}=P.current.band;W>0&&lt>0&&fM(q.band,W,lt,U)}if(q.hist&&S.current%Hd===0){const{w:W,h:lt}=P.current.hist;W>0&&lt>0&&dM(q.hist,W,lt,ot[t],z,St,I,s)}S.current%Hd===0&&($&&y($),U&&w(U),x(W=>W.band===B.band&&W.freq===B.freq?W:B)),h.current=requestAnimationFrame(nt)};return h.current=requestAnimationFrame(nt),()=>{cancelAnimationFrame(h.current),at.forEach(ot=>ot.disconnect())}},[t,i,s,H,R,T]);const E=ln.find(k=>k.name===_.band),O=(E==null?void 0:E.color)||"#8b949e",J=ln.reduce((k,q)=>k+(M[q.name]||0),0);return C.jsx("div",{className:"detail-overlay",onClick:l,children:C.jsxs("div",{className:"detail-panel",onClick:k=>k.stopPropagation(),children:[C.jsxs("div",{className:"detail-header",children:[C.jsxs("div",{className:"detail-title-group",children:[C.jsxs("span",{className:"detail-ch-badge",style:{borderColor:H,color:H},children:["Ch ",t+1]}),C.jsx("span",{className:"detail-title",children:"Channel Analysis"}),C.jsx("span",{className:"detail-subtitle",children:"Real-time single-channel deep inspection"})]}),C.jsxs("div",{className:"detail-header-stats",children:[_.band&&C.jsxs("span",{className:"detail-dominant",style:{color:O},children:[C.jsx("span",{className:"detail-dominant-label",children:"Dominant"}),C.jsx("span",{className:"detail-dominant-band",children:(E==null?void 0:E.label)||_.band}),C.jsxs("span",{className:"detail-dominant-freq",children:[_.freq.toFixed(1)," Hz"]})]}),g&&C.jsxs("span",{className:"detail-rms-badge",children:["RMS ",(V=g.rms)==null?void 0:V.toFixed(1)," µV"]})]}),C.jsx("button",{className:"detail-close",onClick:l,children:C.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:C.jsx("path",{d:"M4 4L14 14M14 4L4 14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})})})]}),C.jsxs("div",{className:"detail-body",children:[C.jsxs("div",{className:"detail-trace-section",children:[C.jsxs("div",{className:"detail-section-head",children:[C.jsx("span",{className:"detail-section-title",children:"Time Domain"}),C.jsxs("span",{className:"detail-section-meta",children:[Qe," Hz · ±",s," µV"]})]}),C.jsx("div",{className:"detail-trace-canvas-wrap",children:C.jsx("canvas",{ref:c,style:{display:"block",width:"100%",height:"100%"}})})]}),C.jsxs("div",{className:"detail-analysis",children:[C.jsxs("div",{className:"detail-card",children:[C.jsxs("div",{className:"detail-card-head",children:[C.jsx("span",{className:"detail-card-title",children:"Power Spectrum"}),C.jsxs("span",{className:"detail-card-meta",children:[Ko,"pt FFT · ",(Qe/Ko).toFixed(1)," Hz/bin"]})]}),C.jsx("div",{className:"detail-card-canvas",children:C.jsx("canvas",{ref:f,style:{display:"block",width:"100%",height:"100%"}})})]}),C.jsxs("div",{className:"detail-card",children:[C.jsxs("div",{className:"detail-card-head",children:[C.jsx("span",{className:"detail-card-title",children:"Band Power Distribution"}),C.jsx("span",{className:"detail-card-meta",children:J>0?`${J.toFixed(2)} µV²/Hz total`:"—"})]}),C.jsx("div",{className:"detail-card-canvas detail-card-canvas-sm",children:C.jsx("canvas",{ref:p,style:{display:"block",width:"100%",height:"100%"}})}),C.jsx("div",{className:"detail-band-legend",children:ln.map(k=>C.jsxs("button",{className:`detail-band-btn${T===k.name?" active":""}`,style:{"--band-color":k.color},onClick:()=>D(q=>q===k.name?null:k.name),children:[C.jsx("span",{className:"detail-band-dot"}),k.label.split(" ")[0]]},k.name))})]}),C.jsxs("div",{className:"detail-bottom-row",children:[C.jsxs("div",{className:"detail-card detail-card-half",children:[C.jsx("div",{className:"detail-card-head",children:C.jsx("span",{className:"detail-card-title",children:"Amplitude Distribution"})}),C.jsx("div",{className:"detail-card-canvas detail-card-canvas-sm",children:C.jsx("canvas",{ref:m,style:{display:"block",width:"100%",height:"100%"}})})]}),C.jsxs("div",{className:"detail-card detail-card-half detail-stats-card",children:[C.jsx("div",{className:"detail-card-head",children:C.jsx("span",{className:"detail-card-title",children:"Signal Metrics"})}),C.jsxs("div",{className:"detail-stats-grid",children:[C.jsx(Ns,{label:"RMS",value:g==null?void 0:g.rms,unit:"µV",precision:2}),C.jsx(Ns,{label:"Peak-Peak",value:g==null?void 0:g.pp,unit:"µV",precision:1}),C.jsx(Ns,{label:"Mean",value:g==null?void 0:g.mean,unit:"µV",precision:2}),C.jsx(Ns,{label:"Min",value:g==null?void 0:g.min,unit:"µV",precision:1}),C.jsx(Ns,{label:"Max",value:g==null?void 0:g.max,unit:"µV",precision:1}),C.jsx(Ns,{label:"Zero-X",value:g==null?void 0:g.zeroCross,unit:"/2s",precision:0}),C.jsx(Ns,{label:"Live",value:g==null?void 0:g.latestVal,unit:"µV",precision:1,highlight:!0})]})]})]})]})]}),C.jsxs("div",{className:"detail-footer",children:[C.jsxs("span",{children:[Ko,"-pt Hanning · Cooley-Tukey radix-2"]}),C.jsxs("span",{className:"detail-footer-keys",children:[C.jsx("kbd",{children:"Esc"})," Close"]}),C.jsx("span",{children:"Not a medical device"})]})]})})});function Ns({label:r,value:t,unit:i,precision:s=2,highlight:l}){const c=t!=null?s===0?String(Math.round(t)):t.toFixed(s):"—";return C.jsxs("div",{className:`detail-stat-row${l?" highlight":""}`,children:[C.jsx("span",{className:"detail-stat-label",children:r}),C.jsx("span",{className:"detail-stat-value",children:c}),C.jsx("span",{className:"detail-stat-unit",children:i})]})}const Qo=256,pM=60,mM=12,B_=.3,gM=350;function _M(r,t,i,s,l,c,f,p){const h=t-16,S=24,v=i-24,g=h-48,y=v-S,M=l[1],w=Math.min(Math.ceil(c/M),s.length-1);let _=1e-30;for(let x=1;x<=w;x++)s[x]>_&&(_=s[x]);for(const x of ln){if(x.low>=c)continue;const T=48+Math.max(x.low,0)/c*g,D=48+Math.min(x.high,c)/c*g,R=p===x.name;r.fillStyle=x.color+(R?"28":"12"),r.fillRect(T,S,D-T,y),r.fillStyle=x.color+(R?"cc":"66"),r.font="9px monospace",r.textAlign="center",r.fillText(x.name,(T+D)/2,S+10)}r.strokeStyle="rgba(48,54,61,0.45)",r.lineWidth=.5;for(let x=1;x<5;x++){const T=S+x/5*y;r.beginPath(),r.moveTo(48,T),r.lineTo(h,T),r.stroke()}for(const x of[4,8,13,30,50]){if(x>c)continue;const T=48+x/c*g;r.beginPath(),r.moveTo(T,S),r.lineTo(T,v),r.stroke()}r.beginPath();for(let x=1;x<=w;x++){const T=48+l[x]/c*g;let D;if(f){const H=10*Math.log10((s[x]||1e-30)/_);D=Math.max(0,(H+60)/60)}else D=s[x]/_;const R=v-Math.min(1,D)*y;x===1?r.moveTo(T,R):r.lineTo(T,R)}r.strokeStyle="#58a6ff",r.lineWidth=1.5,r.stroke(),r.lineTo(48+l[w]/c*g,v),r.lineTo(48+l[1]/c*g,v),r.closePath(),r.fillStyle="rgba(88,166,255,0.07)",r.fill(),r.fillStyle="#8b949e",r.font="10px monospace",r.textAlign="center";for(let x=0;x<=c;x+=10)r.fillText(`${x}`,48+x/c*g,v+14);if(r.fillText("Hz",h+2,v+14),r.save(),r.translate(11,S+y/2),r.rotate(-Math.PI/2),r.textAlign="center",r.fillText(f?"dB":"µV²/Hz",0,0),r.restore(),r.textAlign="right",r.font="9px monospace",f)for(const x of[0,-20,-40,-60]){const T=v-(x+60)/60*y;r.fillText(`${x}`,44,T+3)}}const vM=Z.memo(function({eegData:t}){var k;const i=Z.useRef(null),s=Z.useRef(0),l=Z.useRef(0),c=Z.useRef(null),f=Z.useRef(0),p=Z.useRef(null),m=Z.useRef({}),h=Z.useRef(window.devicePixelRatio||1),S=Z.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),v=Z.useRef(!0),[g,y]=Z.useState(-1),[M,w]=Z.useState(!0),[_,x]=Z.useState(!1),[T,D]=Z.useState(null),[R,H]=Z.useState({}),[P,F]=Z.useState({band:"",freq:0}),E=Z.useMemo(()=>new ks(Qo,Qe),[]);p.current||(p.current=new Float64Array(Qo)),Z.useEffect(()=>{const q=i.current;if(!q)return;const at=q.getContext("2d",{alpha:!1}),$=new ResizeObserver(B=>{const nt=B[0];if(!nt)return;const ot=window.devicePixelRatio||1;h.current=ot;const{width:St,height:z}=nt.contentRect;S.current={w:St,h:z,pw:Math.round(St*ot),ph:Math.round(z*ot),dpr:ot},v.current=!0});$.observe(q);const U=()=>{const{w:B,h:nt,pw:ot,ph:St}=S.current;if(B===0||nt===0){s.current=requestAnimationFrame(U);return}if(v.current&&(v.current=!1,q.width=ot,q.height=St),at.setTransform(h.current,0,0,h.current,0,0),at.fillStyle="#0d1117",at.fillRect(0,0,B,nt),l.current++,!_&&l.current%mM===0){const I=t.buffers.current,W=t.writeIndex.current,lt=t.samplesInBuffer.current;if(I&&lt>=Qo){let _t;if(g===-1){const K=p.current,st=t.bufferSize,mt=(W-Qo+st)%st;for(let Y=0;Y<Qo;Y++){let At=0;const Ct=(mt+Y)%st;for(let It=0;It<Ie;It++)At+=I[It][Ct];K[Y]=At/Ie}_t=E.analyse(K,0)}else _t=E.analyseRing(I[g],W,lt);if(_t){if(!c.current||c.current.length!==_t.psd.length)c.current=new Float64Array(_t.psd);else{const st=c.current,mt=_t.psd;for(let Y=0;Y<st.length;Y++)st[Y]=st[Y]*(1-B_)+mt[Y]*B_}const K=performance.now();if(K-f.current>gM){f.current=K,m.current=_t.bandPowers,H(_t.bandPowers);let st="",mt=0;for(const Y of ln)(_t.bandPowers[Y.name]||0)>mt&&(mt=_t.bandPowers[Y.name],st=Y.name);F(Y=>Y.band===st&&Y.freq===_t.dominantFrequency?Y:{band:st,freq:_t.dominantFrequency})}}}}const z=c.current;!z||z.length===0?(at.fillStyle="#4b5563",at.font="13px monospace",at.textAlign="center",at.fillText("Collecting samples…",B/2,nt/2)):_M(at,B,nt,z,E._frequencies,pM,M,T),s.current=requestAnimationFrame(U)};return s.current=requestAnimationFrame(U),()=>{cancelAnimationFrame(s.current),$.disconnect()}},[t,g,M,_,T,E]);const O=Math.max(...ln.map(q=>R[q.name]||0),1e-6),J=g===-1?"Avg":`Ch ${g+1}`,V=((k=ln.find(q=>q.name===P.band))==null?void 0:k.color)||"#8b949e";return C.jsxs("div",{className:"spectral-panel",children:[C.jsxs("div",{className:"spectral-toolbar",children:[C.jsxs("span",{className:"spectral-title",children:["Spectral"," ",C.jsx("small",{style:{color:"var(--text-dim)",fontWeight:400},children:J})]}),C.jsxs("div",{className:"spectral-channels",children:[C.jsx("button",{className:`sp-ch${g===-1?" active":""}`,onClick:()=>y(-1),children:"Avg"}),Array.from({length:Ie},(q,at)=>C.jsx("button",{className:`sp-ch${g===at?" active":""}`,onClick:()=>y(at),children:at+1},at))]}),C.jsxs("span",{className:"sp-dominant",children:[C.jsx("strong",{style:{color:V},children:P.band||"—"})," ",P.freq>0&&C.jsxs("small",{children:[P.freq.toFixed(1)," Hz"]})]}),C.jsxs("div",{className:"spectral-ctrls",children:[C.jsx("button",{className:`btn${M?" active":""}`,onClick:()=>w(q=>!q),children:M?"Log":"Lin"}),C.jsx("button",{className:`btn${_?" active":""}`,onClick:()=>x(q=>!q),children:_?"▶":"⏸"})]})]}),C.jsxs("div",{className:"spectral-canvas-wrap",children:[C.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}}),_&&C.jsx("div",{className:"spectral-paused",children:"PAUSED"})]}),C.jsx("div",{className:"spectral-bands",children:ln.map(q=>{const at=R[q.name]||0,$=O>0?at/O*100:0,U=T===q.name;return C.jsxs("div",{className:`sp-band${U?" selected":""}`,onClick:()=>D(U?null:q.name),children:[C.jsx("span",{className:"sp-band-dot",style:{background:q.color}}),C.jsx("span",{className:"sp-band-name",style:{color:q.color},children:q.label}),C.jsx("div",{className:"sp-band-track",children:C.jsx("div",{className:"sp-band-fill",style:{width:`${$}%`,background:q.color}})}),C.jsx("span",{className:"sp-band-val",children:at<.01?at.toExponential(1):at.toFixed(2)})]},q.name)})})]})}),xM=Z.memo(function(){const[t,i]=Z.useState(!1),[s,l]=Z.useState(0),[c,f]=Z.useState(0),[p,m]=Z.useState(0),h=Z.useRef(0),S=Z.useRef(performance.now()),v=Z.useRef(0);return Z.useEffect(()=>{const g=y=>{(y.key==="p"||y.key==="P")&&i(M=>!M)};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[]),Z.useEffect(()=>{if(!t)return;const g=()=>{h.current++;const y=performance.now(),M=y-S.current;if(M>=1e3){l(Math.round(h.current*(1e3/M))),f(Math.round(M/h.current*100)/100);const w=performance.memory;w&&m(Math.round(w.usedJSHeapSize/1048576)),h.current=0,S.current=y}v.current=requestAnimationFrame(g)};return v.current=requestAnimationFrame(g),()=>cancelAnimationFrame(v.current)},[t]),t?C.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.8)",color:"#0f0",fontFamily:"monospace",fontSize:"12px",padding:"8px 12px",borderRadius:"4px",zIndex:1e4,border:"1px solid #0f0",userSelect:"none"},children:[C.jsxs("div",{children:["FPS: ",s]}),C.jsxs("div",{children:["Frame: ",c,"ms"]}),C.jsxs("div",{children:["Memory: ",p,"MB"]}),C.jsx("div",{style:{marginTop:"4px",fontSize:"10px",opacity:.7},children:"Press P to toggle"})]}):null});function SM({onSelect:r,onBack:t}){const[i,s]=Z.useState([]),[l,c]=Z.useState(!0);Z.useEffect(()=>{f()},[]);async function f(){try{const S=await(await fetch("/api/recordings")).json();s(S.recordings||[])}catch(h){console.error("Failed to load recordings:",h)}finally{c(!1)}}function p(h){return new Date(h*1e3).toLocaleString()}function m(h){return h<1024?`${h} B`:h<1024*1024?`${(h/1024).toFixed(1)} KB`:`${(h/1024/1024).toFixed(1)} MB`}return C.jsxs("div",{className:"session-list",children:[C.jsxs("header",{className:"session-header",children:[C.jsx("h2",{children:"Saved Sessions"}),C.jsx("button",{className:"btn btn-back",onClick:t,children:"← Back to Live"})]}),l&&C.jsx("div",{className:"list-loading",children:C.jsx("p",{children:"Loading recordings..."})}),!l&&i.length===0&&C.jsx("div",{className:"list-empty",children:C.jsx("p",{children:"No recordings yet. Record a session on the Live tab."})}),!l&&i.length>0&&C.jsx("div",{className:"list-container",children:C.jsxs("table",{className:"recordings-table",children:[C.jsx("thead",{children:C.jsxs("tr",{children:[C.jsx("th",{children:"Filename"}),C.jsx("th",{children:"Size"}),C.jsx("th",{children:"Date & Time"}),C.jsx("th",{children:"Action"})]})}),C.jsx("tbody",{children:i.map(h=>C.jsxs("tr",{children:[C.jsx("td",{className:"filename",children:h.filename}),C.jsx("td",{className:"size",children:m(h.size)}),C.jsx("td",{className:"mtime",children:p(h.mtime)}),C.jsx("td",{className:"action",children:C.jsx("button",{className:"btn btn-open",onClick:()=>r(h.filename),children:"Open"})})]},h.filename))})]})}),C.jsx("style",{children:`
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
      `})]})}const yM="rgba(48,54,61,0.4)",MM="rgba(88,166,255,0.12)",bM="rgba(88,166,255,0.6)",EM="#0d1117",TM=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],AM=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"}];function RM({filename:r,onBack:t}){const[i,s]=Z.useState(!0),[l,c]=Z.useState(null),[f,p]=Z.useState(!1),[m,h]=Z.useState(0),[S,v]=Z.useState(1),[g,y]=Z.useState(100),[M,w]=Z.useState(4),[_,x]=Z.useState([]),[T,D]=Z.useState(""),[R,H]=Z.useState(!1),P=Z.useRef(null),F=Z.useRef(0),E=Z.useRef(0),O=Z.useRef(null),J=Z.useRef(0),V=Z.useRef(0),k=Z.useRef(!1),q=Z.useRef(1),at=Z.useRef(100),$=Z.useRef(4),U=Z.useRef(window.devicePixelRatio||1),B=Z.useRef({w:0,h:0});k.current=f,q.current=S,at.current=g,$.current=M,E.current=m;const nt=F.current,ot=nt/Qe,St=m/Qe;Z.useEffect(()=>{let Y=!1;async function At(){s(!0),c(null);try{const Ct=await fetch(`/api/recordings/data/${encodeURIComponent(r)}`);if(!Ct.ok)throw new Error(`HTTP ${Ct.status}`);const It=await Ct.json();if(It.error)throw new Error(It.error);const Ut=(It.data||[]).slice(1),kt=Ut.length;if(kt===0)throw new Error("Empty recording");const Wt=Array.from({length:Ie},()=>new Float32Array(kt));for(let se=0;se<kt;se++){const j=Ut[se].split(",");for(let he=0;he<Ie;he++)Wt[he][se]=parseFloat(j[he+1])||0}Y||(P.current=Wt,F.current=kt,h(0),s(!1))}catch(Ct){Y||(c(Ct instanceof Error?Ct.message:String(Ct)),s(!1))}}return At(),()=>{Y=!0}},[r]),Z.useEffect(()=>{fetch(`/api/recordings/annotations/${encodeURIComponent(r)}`).then(Y=>Y.json()).then(Y=>x(Y.annotations||[])).catch(()=>{})},[r]),Z.useEffect(()=>{const Y=O.current;if(!Y||i||l)return;const At=Y.getContext("2d",{alpha:!1}),Ct=It=>{if(k.current&&V.current>0){const le=(It-V.current)/1e3*Qe*q.current;let pe=E.current+le;pe>=F.current&&(pe=F.current-1,p(!1)),E.current=pe,h(pe)}V.current=It;const Pt=U.current,Ut=Y.getBoundingClientRect(),kt=Ut.width,Wt=Ut.height,se=Math.round(kt*Pt),j=Math.round(Wt*Pt);(B.current.w!==se||B.current.h!==j)&&(B.current={w:se,h:j},Y.width=se,Y.height=j,At.setTransform(Pt,0,0,Pt,0,0)),z(At,kt,Wt),J.current=requestAnimationFrame(Ct)};return V.current=0,J.current=requestAnimationFrame(Ct),()=>cancelAnimationFrame(J.current)},[i,l]);function z(Y,At,Ct){const It=P.current;if(!It)return;Y.fillStyle=EM,Y.fillRect(0,0,At,Ct);const Pt=F.current,Ut=E.current,kt=$.current*Qe,Wt=at.current,se=Math.floor(kt/2);let j=Math.floor(Ut)-se,he=j+kt;j<0&&(j=0,he=kt),he>Pt&&(he=Pt,j=Math.max(0,Pt-kt));const le=Ct/Ie;for(let tt=0;tt<Ie;tt++){const yt=tt*le,Tt=yt+le/2,vt=le/2;tt>0&&(Y.strokeStyle=yM,Y.lineWidth=.5,Y.beginPath(),Y.moveTo(0,yt),Y.lineTo(At,yt),Y.stroke()),Y.strokeStyle=MM,Y.lineWidth=.5,Y.beginPath(),Y.moveTo(0,Tt),Y.lineTo(At,Tt),Y.stroke(),Y.fillStyle="rgba(230,237,243,0.4)",Y.font="10px monospace",Y.fillText(`Ch ${tt+1}`,4,yt+12);const Zt=It[tt],Lt=he-j;if(Lt<2)continue;const ee=Lt>2e3?Math.floor(Lt/2e3):1,ae=At/(Lt-1),Dt=vt*.85/Wt;Y.strokeStyle=Tu[tt],Y.lineWidth=1.2,Y.lineJoin="round",Y.beginPath();for(let wt=0;wt<Lt;wt+=ee){const Gt=wt*ae,zt=Tt-Zt[j+wt]*Dt;wt===0?Y.moveTo(Gt,zt):Y.lineTo(Gt,zt)}Y.stroke()}const pe=Math.floor(Ut)>=j&&Math.floor(Ut)<=he?(Math.floor(Ut)-j)/(he-j)*At:At/2;Y.strokeStyle=bM,Y.lineWidth=1.5,Y.setLineDash([4,3]),Y.beginPath(),Y.moveTo(pe,0),Y.lineTo(pe,Ct),Y.stroke(),Y.setLineDash([]),Y.fillStyle="rgba(230,237,243,0.3)",Y.font="10px monospace";const qt=j/Qe,G=he/Qe,A=Math.min(10,Math.floor(At/80));for(let tt=0;tt<=A;tt++){const yt=qt+(G-qt)*(tt/A),Tt=tt/A*At;Y.fillText(mt(yt),Tt+2,Ct-4)}}const I=Z.useCallback(async Y=>{try{await fetch(`/api/recordings/annotations/${encodeURIComponent(r)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({annotations:Y})})}catch{}},[r]);function W(){if(!T.trim())return;const Y=Math.floor(m)/Qe,At={id:Date.now(),frame:Math.floor(m),time:Y,text:T,timestamp:new Date().toISOString()},Ct=[..._,At];x(Ct),I(Ct),D(""),H(!1)}function lt(Y){const At=_.filter(Ct=>Ct.id!==Y);x(At),I(At)}function _t(Y){h(Y.frame),E.current=Y.frame,p(!1)}function K(){const Y=P.current;if(!Y)return;const At=F.current,Ct=new Map;for(const se of _)Ct.set(se.frame,se.text);const Pt=[["frame","time_s",...Array.from({length:Ie},(se,j)=>`ch${j+1}`),"annotation"].join(",")];for(let se=0;se<At;se++){const j=(se/Qe).toFixed(6),he=Array.from({length:Ie},(qt,G)=>Y[G][se].toFixed(4)),le=Ct.get(se)||"",pe=le?`"${le.replace(/"/g,'""')}"`:"";Pt.push([se,j,...he,pe].join(","))}const Ut=new Blob([Pt.join(`
`)],{type:"text/csv"}),kt=URL.createObjectURL(Ut),Wt=document.createElement("a");Wt.href=kt,Wt.download=r.replace(".csv","_annotated.csv"),Wt.click(),URL.revokeObjectURL(kt)}function st(){if(!P.current)return;const At=F.current,Ct={filename:r,sampleRate:Qe,channels:Ie,totalFrames:At,duration:At/Qe,annotations:_.map(kt=>({frame:kt.frame,time:kt.time,text:kt.text,timestamp:kt.timestamp}))},It=new Blob([JSON.stringify(Ct,null,2)],{type:"application/json"}),Pt=URL.createObjectURL(It),Ut=document.createElement("a");Ut.href=Pt,Ut.download=r.replace(".csv","_session.json"),Ut.click(),URL.revokeObjectURL(Pt)}function mt(Y){const At=Math.floor(Y/60),Ct=Math.floor(Y%60),It=Math.floor(Y%1*100);return`${String(At).padStart(2,"0")}:${String(Ct).padStart(2,"0")}.${String(It).padStart(2,"0")}`}return i?C.jsxs("div",{className:"sv-root sv-center",children:[C.jsx("p",{children:"Loading recording..."}),C.jsx("style",{children:Gd})]}):l?C.jsxs("div",{className:"sv-root sv-center",children:[C.jsxs("p",{children:["Error: ",l]}),C.jsx("button",{className:"sv-btn",onClick:t,children:"Back"}),C.jsx("style",{children:Gd})]}):C.jsxs("div",{className:"sv-root",children:[C.jsxs("header",{className:"sv-header",children:[C.jsxs("div",{className:"sv-title",children:[C.jsx("button",{className:"sv-btn",onClick:t,children:"← Back"}),C.jsx("h2",{children:r}),C.jsxs("span",{className:"sv-meta",children:[nt.toLocaleString()," frames · ",mt(ot)]})]}),C.jsxs("div",{className:"sv-controls",children:[C.jsx("button",{className:`sv-btn${f?" active":""}`,onClick:()=>{f||(V.current=0),p(!f)},children:f?"⏸ Pause":"▶ Play"}),C.jsx("button",{className:"sv-btn",onClick:()=>{h(0),E.current=0,p(!1)},children:"⏮ Rewind"}),C.jsxs("select",{value:S,onChange:Y=>v(parseFloat(Y.target.value)),className:"sv-select",children:[C.jsx("option",{value:.25,children:"0.25x"}),C.jsx("option",{value:.5,children:"0.5x"}),C.jsx("option",{value:1,children:"1x"}),C.jsx("option",{value:1.5,children:"1.5x"}),C.jsx("option",{value:2,children:"2x"}),C.jsx("option",{value:4,children:"4x"})]}),C.jsx("div",{className:"sv-sep"}),C.jsx("label",{className:"sv-label",children:"Window"}),C.jsx("select",{value:M,onChange:Y=>w(parseInt(Y.target.value)),className:"sv-select",children:AM.map(Y=>C.jsx("option",{value:Y.value,children:Y.label},Y.value))}),C.jsx("label",{className:"sv-label",children:"Scale"}),C.jsx("select",{value:g,onChange:Y=>y(parseInt(Y.target.value)),className:"sv-select",children:TM.map(Y=>C.jsx("option",{value:Y.value,children:Y.label},Y.value))}),C.jsx("div",{className:"sv-sep"}),C.jsx("button",{className:"sv-btn sv-btn-export",onClick:K,title:"Export CSV with annotations column",children:"⬇ CSV"}),C.jsx("button",{className:"sv-btn sv-btn-export",onClick:st,title:"Export session metadata + annotations as JSON",children:"⬇ JSON"})]})]}),C.jsxs("div",{className:"sv-timeline",children:[C.jsx("span",{className:"sv-time",children:mt(St)}),C.jsx("input",{type:"range",min:"0",max:nt-1,value:Math.floor(m),onChange:Y=>{const At=parseInt(Y.target.value);h(At),E.current=At,p(!1),V.current=0},className:"sv-slider"}),C.jsx("span",{className:"sv-time",children:mt(ot)})]}),C.jsxs("div",{className:"sv-content",children:[C.jsx("div",{className:"sv-canvas-wrap",children:C.jsx("canvas",{ref:O,style:{display:"block",width:"100%",height:"100%"}})}),C.jsxs("div",{className:"sv-annotations",children:[C.jsxs("div",{className:"sv-anno-header",children:[C.jsx("h3",{children:"Annotations"}),C.jsx("button",{className:"sv-btn sv-btn-sm",onClick:()=>H(!R),children:R?"Cancel":"+ Add"})]}),R&&C.jsxs("div",{className:"sv-anno-form",children:[C.jsx("textarea",{value:T,onChange:Y=>D(Y.target.value),placeholder:"Annotation at current position...",onKeyDown:Y=>{Y.key==="Enter"&&Y.ctrlKey&&W()}}),C.jsx("button",{className:"sv-btn sv-btn-primary",onClick:W,children:"Add"})]}),C.jsx("div",{className:"sv-anno-list",children:_.length===0?C.jsx("p",{className:"sv-anno-empty",children:"No annotations"}):_.map(Y=>C.jsxs("div",{className:"sv-anno-item",onClick:()=>_t(Y),children:[C.jsx("span",{className:"sv-anno-time",children:mt(Y.time)}),C.jsx("span",{className:"sv-anno-text",children:Y.text}),C.jsx("button",{className:"sv-anno-del",onClick:At=>{At.stopPropagation(),lt(Y.id)},children:"✕"})]},Y.id))})]})]}),C.jsx("style",{children:Gd})]})}const Gd=`
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
 */const Tp="183",wM=0,I_=1,CM=2,cu=1,DM=2,ul=3,ds=0,Kn=1,ji=2,Ea=0,Yr=1,z_=2,H_=3,G_=4,NM=5,zs=100,UM=101,LM=102,OM=103,PM=104,FM=200,BM=201,IM=202,zM=203,wh=204,Ch=205,HM=206,GM=207,VM=208,kM=209,jM=210,XM=211,WM=212,qM=213,YM=214,Dh=0,Nh=1,Uh=2,Kr=3,Lh=4,Oh=5,Ph=6,Fh=7,Qv=0,ZM=1,KM=2,Yi=0,Jv=1,$v=2,tx=3,Ap=4,ex=5,nx=6,ix=7,ax=300,js=301,Qr=302,Vd=303,kd=304,Au=306,Bh=1e3,ba=1001,Ih=1002,wn=1003,QM=1004,Lc=1005,On=1006,jd=1007,Gs=1008,ci=1009,sx=1010,rx=1011,dl=1012,Rp=1013,Ki=1014,Wi=1015,Aa=1016,wp=1017,Cp=1018,hl=1020,ox=35902,lx=35899,cx=1021,ux=1022,Oi=1023,Ra=1026,Vs=1027,fx=1028,Dp=1029,Jr=1030,Np=1031,Up=1033,uu=33776,fu=33777,du=33778,hu=33779,zh=35840,Hh=35841,Gh=35842,Vh=35843,kh=36196,jh=37492,Xh=37496,Wh=37488,qh=37489,Yh=37490,Zh=37491,Kh=37808,Qh=37809,Jh=37810,$h=37811,tp=37812,ep=37813,np=37814,ip=37815,ap=37816,sp=37817,rp=37818,op=37819,lp=37820,cp=37821,up=36492,fp=36494,dp=36495,hp=36283,pp=36284,mp=36285,gp=36286,JM=3200,$M=0,tb=1,cs="",Si="srgb",$r="srgb-linear",mu="linear",ke="srgb",wr=7680,V_=519,eb=512,nb=513,ib=514,Lp=515,ab=516,sb=517,Op=518,rb=519,_p=35044,k_="300 es",qi=2e3,pl=2001;function ob(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function gu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function lb(){const r=gu("canvas");return r.style.display="block",r}const j_={};function _u(...r){const t="THREE."+r.shift();console.log(t,...r)}function dx(r){const t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ue(...r){r=dx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...r)}}function Ue(...r){r=dx(r);const t="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...r)}}function vu(...r){const t=r.join(" ");t in j_||(j_[t]=!0,ue(...r))}function cb(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const ub={[Dh]:Nh,[Uh]:Ph,[Lh]:Fh,[Kr]:Oh,[Nh]:Dh,[Ph]:Uh,[Fh]:Lh,[Oh]:Kr};class eo{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xd=Math.PI/180,vp=180/Math.PI;function fs(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function De(r,t,i){return Math.max(t,Math.min(i,r))}function fb(r,t){return(r%t+t)%t}function Wd(r,t,i){return(1-i)*r+i*t}function Xi(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function qe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(t=0,i=0){Ae.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class no{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,p){let m=s[l+0],h=s[l+1],S=s[l+2],v=s[l+3],g=c[f+0],y=c[f+1],M=c[f+2],w=c[f+3];if(v!==w||m!==g||h!==y||S!==M){let _=m*g+h*y+S*M+v*w;_<0&&(g=-g,y=-y,M=-M,w=-w,_=-_);let x=1-p;if(_<.9995){const T=Math.acos(_),D=Math.sin(T);x=Math.sin(x*T)/D,p=Math.sin(p*T)/D,m=m*x+g*p,h=h*x+y*p,S=S*x+M*p,v=v*x+w*p}else{m=m*x+g*p,h=h*x+y*p,S=S*x+M*p,v=v*x+w*p;const T=1/Math.sqrt(m*m+h*h+S*S+v*v);m*=T,h*=T,S*=T,v*=T}}t[i]=m,t[i+1]=h,t[i+2]=S,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const p=s[l],m=s[l+1],h=s[l+2],S=s[l+3],v=c[f],g=c[f+1],y=c[f+2],M=c[f+3];return t[i]=p*M+S*v+m*y-h*g,t[i+1]=m*M+S*g+h*v-p*y,t[i+2]=h*M+S*y+p*g-m*v,t[i+3]=S*M-p*v-m*g-h*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,p=Math.cos,m=Math.sin,h=p(s/2),S=p(l/2),v=p(c/2),g=m(s/2),y=m(l/2),M=m(c/2);switch(f){case"XYZ":this._x=g*S*v+h*y*M,this._y=h*y*v-g*S*M,this._z=h*S*M+g*y*v,this._w=h*S*v-g*y*M;break;case"YXZ":this._x=g*S*v+h*y*M,this._y=h*y*v-g*S*M,this._z=h*S*M-g*y*v,this._w=h*S*v+g*y*M;break;case"ZXY":this._x=g*S*v-h*y*M,this._y=h*y*v+g*S*M,this._z=h*S*M+g*y*v,this._w=h*S*v-g*y*M;break;case"ZYX":this._x=g*S*v-h*y*M,this._y=h*y*v+g*S*M,this._z=h*S*M-g*y*v,this._w=h*S*v+g*y*M;break;case"YZX":this._x=g*S*v+h*y*M,this._y=h*y*v+g*S*M,this._z=h*S*M-g*y*v,this._w=h*S*v-g*y*M;break;case"XZY":this._x=g*S*v-h*y*M,this._y=h*y*v-g*S*M,this._z=h*S*M+g*y*v,this._w=h*S*v+g*y*M;break;default:ue("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],h=i[2],S=i[6],v=i[10],g=s+p+v;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(S-m)*y,this._y=(c-h)*y,this._z=(f-l)*y}else if(s>p&&s>v){const y=2*Math.sqrt(1+s-p-v);this._w=(S-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(c+h)/y}else if(p>v){const y=2*Math.sqrt(1+p-s-v);this._w=(c-h)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+S)/y}else{const y=2*Math.sqrt(1+v-s-p);this._w=(f-l)/y,this._x=(c+h)/y,this._y=(m+S)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,p=i._x,m=i._y,h=i._z,S=i._w;return this._x=s*S+f*p+l*h-c*m,this._y=l*S+f*m+c*p-s*h,this._z=c*S+f*h+s*m-l*p,this._w=f*S-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),S=Math.sin(h);m=Math.sin(m*h)/S,i=Math.sin(i*h)/S,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ut{constructor(t=0,i=0,s=0){ut.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(X_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(X_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,p=t.z,m=t.w,h=2*(f*l-p*s),S=2*(p*i-c*l),v=2*(c*s-f*i);return this.x=i+m*h+f*v-p*S,this.y=s+m*S+p*h-c*v,this.z=l+m*v+c*S-f*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return qd.copy(this).projectOnVector(t),this.sub(qd)}reflect(t){return this.sub(qd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(De(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qd=new ut,X_=new no;class ye{constructor(t,i,s,l,c,f,p,m,h){ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,p,m,h)}set(t,i,s,l,c,f,p,m,h){const S=this.elements;return S[0]=t,S[1]=l,S[2]=p,S[3]=i,S[4]=c,S[5]=m,S[6]=s,S[7]=f,S[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],h=s[1],S=s[4],v=s[7],g=s[2],y=s[5],M=s[8],w=l[0],_=l[3],x=l[6],T=l[1],D=l[4],R=l[7],H=l[2],P=l[5],F=l[8];return c[0]=f*w+p*T+m*H,c[3]=f*_+p*D+m*P,c[6]=f*x+p*R+m*F,c[1]=h*w+S*T+v*H,c[4]=h*_+S*D+v*P,c[7]=h*x+S*R+v*F,c[2]=g*w+y*T+M*H,c[5]=g*_+y*D+M*P,c[8]=g*x+y*R+M*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],h=t[7],S=t[8];return i*f*S-i*p*h-s*c*S+s*p*m+l*c*h-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],h=t[7],S=t[8],v=S*f-p*h,g=p*m-S*c,y=h*c-f*m,M=i*v+s*g+l*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return t[0]=v*w,t[1]=(l*h-S*s)*w,t[2]=(p*s-l*f)*w,t[3]=g*w,t[4]=(S*i-l*m)*w,t[5]=(l*c-p*i)*w,t[6]=y*w,t[7]=(s*m-h*i)*w,t[8]=(f*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*f+h*p)+f+t,-l*h,l*m,-l*(-h*f+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Yd.makeScale(t,i)),this}rotate(t){return this.premultiply(Yd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Yd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yd=new ye,W_=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),q_=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function db(){const r={enabled:!0,workingColorSpace:$r,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===ke&&(l.r=Ta(l.r),l.g=Ta(l.g),l.b=Ta(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===ke&&(l.r=Zr(l.r),l.g=Zr(l.g),l.b=Zr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===cs?mu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return vu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return vu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[$r]:{primaries:t,whitePoint:s,transfer:mu,toXYZ:W_,fromXYZ:q_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:t,whitePoint:s,transfer:ke,toXYZ:W_,fromXYZ:q_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),r}const Le=db();function Ta(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Cr;class hb{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Cr===void 0&&(Cr=gu("canvas")),Cr.width=t.width,Cr.height=t.height;const l=Cr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Cr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=gu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ta(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ta(i[s]/255)*255):i[s]=Ta(i[s]);return{data:i,width:t.width,height:t.height}}else return ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pb=0;class Pp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=fs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Zd(l[f].image)):c.push(Zd(l[f]))}else c=Zd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Zd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hb.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ue("Texture: Unable to serialize Texture."),{})}let mb=0;const Kd=new ut;class Pn extends eo{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=ba,l=ba,c=On,f=Gs,p=Oi,m=ci,h=Pn.DEFAULT_ANISOTROPY,S=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=fs(),this.name="",this.source=new Pp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kd).x}get height(){return this.source.getSize(Kd).y}get depth(){return this.source.getSize(Kd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ue(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ue(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ax)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bh:t.x=t.x-Math.floor(t.x);break;case ba:t.x=t.x<0?0:1;break;case Ih:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bh:t.y=t.y-Math.floor(t.y);break;case ba:t.y=t.y<0?0:1;break;case Ih:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=ax;Pn.DEFAULT_ANISOTROPY=1;class sn{constructor(t=0,i=0,s=0,l=1){sn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,h=m[0],S=m[4],v=m[8],g=m[1],y=m[5],M=m[9],w=m[2],_=m[6],x=m[10];if(Math.abs(S-g)<.01&&Math.abs(v-w)<.01&&Math.abs(M-_)<.01){if(Math.abs(S+g)<.1&&Math.abs(v+w)<.1&&Math.abs(M+_)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(h+1)/2,R=(y+1)/2,H=(x+1)/2,P=(S+g)/4,F=(v+w)/4,E=(M+_)/4;return D>R&&D>H?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=P/s,c=F/s):R>H?R<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(R),s=P/l,c=E/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=F/c,l=E/c),this.set(s,l,c,i),this}let T=Math.sqrt((_-M)*(_-M)+(v-w)*(v-w)+(g-S)*(g-S));return Math.abs(T)<.001&&(T=1),this.x=(_-M)/T,this.y=(v-w)/T,this.z=(g-S)/T,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=De(this.x,t.x,i.x),this.y=De(this.y,t.y,i.y),this.z=De(this.z,t.z,i.z),this.w=De(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=De(this.x,t,i),this.y=De(this.y,t,i),this.z=De(this.z,t,i),this.w=De(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gb extends eo{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,t,i),this.scissorTest=!1,this.viewport=new sn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Pn(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Pp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends gb{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class hx extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _b extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ba,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Je{constructor(t,i,s,l,c,f,p,m,h,S,v,g,y,M,w,_){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,p,m,h,S,v,g,y,M,w,_)}set(t,i,s,l,c,f,p,m,h,S,v,g,y,M,w,_){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=f,x[9]=p,x[13]=m,x[2]=h,x[6]=S,x[10]=v,x[14]=g,x[3]=y,x[7]=M,x[11]=w,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Dr.setFromMatrixColumn(t,0).length(),c=1/Dr.setFromMatrixColumn(t,1).length(),f=1/Dr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),S=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const g=f*S,y=f*v,M=p*S,w=p*v;i[0]=m*S,i[4]=-m*v,i[8]=h,i[1]=y+M*h,i[5]=g-w*h,i[9]=-p*m,i[2]=w-g*h,i[6]=M+y*h,i[10]=f*m}else if(t.order==="YXZ"){const g=m*S,y=m*v,M=h*S,w=h*v;i[0]=g+w*p,i[4]=M*p-y,i[8]=f*h,i[1]=f*v,i[5]=f*S,i[9]=-p,i[2]=y*p-M,i[6]=w+g*p,i[10]=f*m}else if(t.order==="ZXY"){const g=m*S,y=m*v,M=h*S,w=h*v;i[0]=g-w*p,i[4]=-f*v,i[8]=M+y*p,i[1]=y+M*p,i[5]=f*S,i[9]=w-g*p,i[2]=-f*h,i[6]=p,i[10]=f*m}else if(t.order==="ZYX"){const g=f*S,y=f*v,M=p*S,w=p*v;i[0]=m*S,i[4]=M*h-y,i[8]=g*h+w,i[1]=m*v,i[5]=w*h+g,i[9]=y*h-M,i[2]=-h,i[6]=p*m,i[10]=f*m}else if(t.order==="YZX"){const g=f*m,y=f*h,M=p*m,w=p*h;i[0]=m*S,i[4]=w-g*v,i[8]=M*v+y,i[1]=v,i[5]=f*S,i[9]=-p*S,i[2]=-h*S,i[6]=y*v+M,i[10]=g-w*v}else if(t.order==="XZY"){const g=f*m,y=f*h,M=p*m,w=p*h;i[0]=m*S,i[4]=-v,i[8]=h*S,i[1]=g*v+w,i[5]=f*S,i[9]=y*v-M,i[2]=M*v-y,i[6]=p*S,i[10]=w*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vb,t,xb)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),es.crossVectors(s,ri),es.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),es.crossVectors(s,ri)),es.normalize(),Oc.crossVectors(ri,es),l[0]=es.x,l[4]=Oc.x,l[8]=ri.x,l[1]=es.y,l[5]=Oc.y,l[9]=ri.y,l[2]=es.z,l[6]=Oc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],h=s[12],S=s[1],v=s[5],g=s[9],y=s[13],M=s[2],w=s[6],_=s[10],x=s[14],T=s[3],D=s[7],R=s[11],H=s[15],P=l[0],F=l[4],E=l[8],O=l[12],J=l[1],V=l[5],k=l[9],q=l[13],at=l[2],$=l[6],U=l[10],B=l[14],nt=l[3],ot=l[7],St=l[11],z=l[15];return c[0]=f*P+p*J+m*at+h*nt,c[4]=f*F+p*V+m*$+h*ot,c[8]=f*E+p*k+m*U+h*St,c[12]=f*O+p*q+m*B+h*z,c[1]=S*P+v*J+g*at+y*nt,c[5]=S*F+v*V+g*$+y*ot,c[9]=S*E+v*k+g*U+y*St,c[13]=S*O+v*q+g*B+y*z,c[2]=M*P+w*J+_*at+x*nt,c[6]=M*F+w*V+_*$+x*ot,c[10]=M*E+w*k+_*U+x*St,c[14]=M*O+w*q+_*B+x*z,c[3]=T*P+D*J+R*at+H*nt,c[7]=T*F+D*V+R*$+H*ot,c[11]=T*E+D*k+R*U+H*St,c[15]=T*O+D*q+R*B+H*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],p=t[5],m=t[9],h=t[13],S=t[2],v=t[6],g=t[10],y=t[14],M=t[3],w=t[7],_=t[11],x=t[15],T=m*y-h*g,D=p*y-h*v,R=p*g-m*v,H=f*y-h*S,P=f*g-m*S,F=f*v-p*S;return i*(w*T-_*D+x*R)-s*(M*T-_*H+x*P)+l*(M*D-w*H+x*F)-c*(M*R-w*P+_*F)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],h=t[7],S=t[8],v=t[9],g=t[10],y=t[11],M=t[12],w=t[13],_=t[14],x=t[15],T=i*p-s*f,D=i*m-l*f,R=i*h-c*f,H=s*m-l*p,P=s*h-c*p,F=l*h-c*m,E=S*w-v*M,O=S*_-g*M,J=S*x-y*M,V=v*_-g*w,k=v*x-y*w,q=g*x-y*_,at=T*q-D*k+R*V+H*J-P*O+F*E;if(at===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/at;return t[0]=(p*q-m*k+h*V)*$,t[1]=(l*k-s*q-c*V)*$,t[2]=(w*F-_*P+x*H)*$,t[3]=(g*P-v*F-y*H)*$,t[4]=(m*J-f*q-h*O)*$,t[5]=(i*q-l*J+c*O)*$,t[6]=(_*R-M*F-x*D)*$,t[7]=(S*F-g*R+y*D)*$,t[8]=(f*k-p*J+h*E)*$,t[9]=(s*J-i*k-c*E)*$,t[10]=(M*P-w*R+x*T)*$,t[11]=(v*R-S*P-y*T)*$,t[12]=(p*O-f*V-m*E)*$,t[13]=(i*V-s*O+l*E)*$,t[14]=(w*D-M*H-_*T)*$,t[15]=(S*H-v*D+g*T)*$,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,p=t.y,m=t.z,h=c*f,S=c*p;return this.set(h*f+s,h*p-l*m,h*m+l*p,0,h*p+l*m,S*p+s,S*m-l*f,0,h*m-l*p,S*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,h=c+c,S=f+f,v=p+p,g=c*h,y=c*S,M=c*v,w=f*S,_=f*v,x=p*v,T=m*h,D=m*S,R=m*v,H=s.x,P=s.y,F=s.z;return l[0]=(1-(w+x))*H,l[1]=(y+R)*H,l[2]=(M-D)*H,l[3]=0,l[4]=(y-R)*P,l[5]=(1-(g+x))*P,l[6]=(_+T)*P,l[7]=0,l[8]=(M+D)*F,l[9]=(_-T)*F,l[10]=(1-(g+w))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Dr.set(l[0],l[1],l[2]).length();const p=Dr.set(l[4],l[5],l[6]).length(),m=Dr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ni.copy(this);const h=1/f,S=1/p,v=1/m;return Ni.elements[0]*=h,Ni.elements[1]*=h,Ni.elements[2]*=h,Ni.elements[4]*=S,Ni.elements[5]*=S,Ni.elements[6]*=S,Ni.elements[8]*=v,Ni.elements[9]*=v,Ni.elements[10]*=v,i.setFromRotationMatrix(Ni),s.x=f,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,f,p=qi,m=!1){const h=this.elements,S=2*c/(i-t),v=2*c/(s-l),g=(i+t)/(i-t),y=(s+l)/(s-l);let M,w;if(m)M=c/(f-c),w=f*c/(f-c);else if(p===qi)M=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(p===pl)M=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,s,l,c,f,p=qi,m=!1){const h=this.elements,S=2/(i-t),v=2/(s-l),g=-(i+t)/(i-t),y=-(s+l)/(s-l);let M,w;if(m)M=1/(f-c),w=f/(f-c);else if(p===qi)M=-2/(f-c),w=-(f+c)/(f-c);else if(p===pl)M=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=S,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Dr=new ut,Ni=new Je,vb=new ut(0,0,0),xb=new ut(1,1,1),es=new ut,Oc=new ut,ri=new ut,Y_=new Je,Z_=new no;class wa{constructor(t=0,i=0,s=0,l=wa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],p=l[8],m=l[1],h=l[5],S=l[9],v=l[2],g=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(De(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,y),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-De(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(p,y),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(De(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-De(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(De(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,y));break;case"XZY":this._z=Math.asin(-De(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-S,y),this._y=0);break;default:ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Y_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Y_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Z_.setFromEuler(this),this.setFromQuaternion(Z_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wa.DEFAULT_ORDER="XYZ";class px{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sb=0;const K_=new ut,Nr=new no,va=new Je,Pc=new ut,Jo=new ut,yb=new ut,Mb=new no,Q_=new ut(1,0,0),J_=new ut(0,1,0),$_=new ut(0,0,1),tv={type:"added"},bb={type:"removed"},Ur={type:"childadded",child:null},Qd={type:"childremoved",child:null};class Cn extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const t=new ut,i=new wa,s=new no,l=new ut(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new ye}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new px,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Nr.setFromAxisAngle(t,i),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(t,i){return Nr.setFromAxisAngle(t,i),this.quaternion.premultiply(Nr),this}rotateX(t){return this.rotateOnAxis(Q_,t)}rotateY(t){return this.rotateOnAxis(J_,t)}rotateZ(t){return this.rotateOnAxis($_,t)}translateOnAxis(t,i){return K_.copy(t).applyQuaternion(this.quaternion),this.position.add(K_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Q_,t)}translateY(t){return this.translateOnAxis(J_,t)}translateZ(t){return this.translateOnAxis($_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(va.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Pc.copy(t):Pc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?va.lookAt(Jo,Pc,this.up):va.lookAt(Pc,Jo,this.up),this.quaternion.setFromRotationMatrix(va),l&&(va.extractRotation(l.matrixWorld),Nr.setFromRotationMatrix(va),this.quaternion.premultiply(Nr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tv),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(bb),Qd.child=t,this.dispatchEvent(Qd),Qd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),va.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),va.multiply(t.parent.matrixWorld)),t.applyMatrix4(va),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tv),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,t,yb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,Mb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,S=m.length;h<S;h++){const v=m[h];c(t.shapes,v)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=f(t.geometries),m=f(t.materials),h=f(t.textures),S=f(t.images),v=f(t.shapes),g=f(t.skeletons),y=f(t.animations),M=f(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),S.length>0&&(s.images=S),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),y.length>0&&(s.animations=y),M.length>0&&(s.nodes=M)}return s.object=l,s;function f(p){const m=[];for(const h in p){const S=p[h];delete S.metadata,m.push(S)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Cn.DEFAULT_UP=new ut(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fc extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Eb={type:"move"};class Jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ut,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ut),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ut,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ut),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){f=!0;for(const w of t.hand.values()){const _=i.getJointPose(w,s),x=this._getHandJoint(h,w);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}const S=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=S.position.distanceTo(v.position),y=.02,M=.005;h.inputState.pinching&&g>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Eb)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Fc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Bc={h:0,s:0,l:0};function $d(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class be{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=fb(t,1),i=De(i,0,1),s=De(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=$d(f,c,t+1/3),this.g=$d(f,c,t),this.b=$d(f,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=Si){function s(c){c!==void 0&&parseFloat(c)<1&&ue("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ue("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Si){const s=mx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ta(t.r),this.g=Ta(t.g),this.b=Ta(t.b),this}copyLinearToSRGB(t){return this.r=Zr(t.r),this.g=Zr(t.g),this.b=Zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Si){return Le.workingToColorSpace(Un.copy(this),t),Math.round(De(Un.r*255,0,255))*65536+Math.round(De(Un.g*255,0,255))*256+Math.round(De(Un.b*255,0,255))}getHexString(t=Si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(Un.copy(this),i);const s=Un.r,l=Un.g,c=Un.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const S=(p+f)/2;if(p===f)m=0,h=0;else{const v=f-p;switch(h=S<=.5?v/(f+p):v/(2-f-p),f){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return t.h=m,t.s=h,t.l=S,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=Si){Le.workingToColorSpace(Un.copy(this),t);const i=Un.r,s=Un.g,l=Un.b;return t!==Si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+i,ns.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ns),t.getHSL(Bc);const s=Wd(ns.h,Bc.h,i),l=Wd(ns.s,Bc.s,i),c=Wd(ns.l,Bc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new be;be.NAMES=mx;class Fp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(t),this.density=i}clone(){return new Fp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Tb extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wa,this.environmentIntensity=1,this.environmentRotation=new wa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ui=new ut,xa=new ut,th=new ut,Sa=new ut,Lr=new ut,Or=new ut,ev=new ut,eh=new ut,nh=new ut,ih=new ut,ah=new sn,sh=new sn,rh=new sn;class yi{constructor(t=new ut,i=new ut,s=new ut){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ui.subVectors(t,i),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ui.subVectors(l,i),xa.subVectors(s,i),th.subVectors(t,i);const f=Ui.dot(Ui),p=Ui.dot(xa),m=Ui.dot(th),h=xa.dot(xa),S=xa.dot(th),v=f*h-p*p;if(v===0)return c.set(0,0,0),null;const g=1/v,y=(h*m-p*S)*g,M=(f*S-p*m)*g;return c.set(1-y-M,M,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(t,i,s,l,c,f,p,m){return this.getBarycoord(t,i,s,l,Sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Sa.x),m.addScaledVector(f,Sa.y),m.addScaledVector(p,Sa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return ah.setScalar(0),sh.setScalar(0),rh.setScalar(0),ah.fromBufferAttribute(t,i),sh.fromBufferAttribute(t,s),rh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(ah,c.x),f.addScaledVector(sh,c.y),f.addScaledVector(rh,c.z),f}static isFrontFacing(t,i,s,l){return Ui.subVectors(s,i),xa.subVectors(t,i),Ui.cross(xa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Ui.cross(xa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return yi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,p;Lr.subVectors(l,s),Or.subVectors(c,s),eh.subVectors(t,s);const m=Lr.dot(eh),h=Or.dot(eh);if(m<=0&&h<=0)return i.copy(s);nh.subVectors(t,l);const S=Lr.dot(nh),v=Or.dot(nh);if(S>=0&&v<=S)return i.copy(l);const g=m*v-S*h;if(g<=0&&m>=0&&S<=0)return f=m/(m-S),i.copy(s).addScaledVector(Lr,f);ih.subVectors(t,c);const y=Lr.dot(ih),M=Or.dot(ih);if(M>=0&&y<=M)return i.copy(c);const w=y*h-m*M;if(w<=0&&h>=0&&M<=0)return p=h/(h-M),i.copy(s).addScaledVector(Or,p);const _=S*M-y*v;if(_<=0&&v-S>=0&&y-M>=0)return ev.subVectors(c,l),p=(v-S)/(v-S+(y-M)),i.copy(l).addScaledVector(ev,p);const x=1/(_+w+g);return f=w*x,p=g*x,i.copy(s).addScaledVector(Lr,f).addScaledVector(Or,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class gl{constructor(t=new ut(1/0,1/0,1/0),i=new ut(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Li.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Li.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Li.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)t.isMesh===!0?t.getVertexPosition(f,Li):Li.fromBufferAttribute(c,f),Li.applyMatrix4(t.matrixWorld),this.expandByPoint(Li);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ic.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ic.copy(s.boundingBox)),Ic.applyMatrix4(t.matrixWorld),this.union(Ic)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Li),Li.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($o),zc.subVectors(this.max,$o),Pr.subVectors(t.a,$o),Fr.subVectors(t.b,$o),Br.subVectors(t.c,$o),is.subVectors(Fr,Pr),as.subVectors(Br,Fr),Us.subVectors(Pr,Br);let i=[0,-is.z,is.y,0,-as.z,as.y,0,-Us.z,Us.y,is.z,0,-is.x,as.z,0,-as.x,Us.z,0,-Us.x,-is.y,is.x,0,-as.y,as.x,0,-Us.y,Us.x,0];return!oh(i,Pr,Fr,Br,zc)||(i=[1,0,0,0,1,0,0,0,1],!oh(i,Pr,Fr,Br,zc))?!1:(Hc.crossVectors(is,as),i=[Hc.x,Hc.y,Hc.z],oh(i,Pr,Fr,Br,zc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Li).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Li).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ya),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ya=[new ut,new ut,new ut,new ut,new ut,new ut,new ut,new ut],Li=new ut,Ic=new gl,Pr=new ut,Fr=new ut,Br=new ut,is=new ut,as=new ut,Us=new ut,$o=new ut,zc=new ut,Hc=new ut,Ls=new ut;function oh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ls.fromArray(r,c);const p=l.x*Math.abs(Ls.x)+l.y*Math.abs(Ls.y)+l.z*Math.abs(Ls.z),m=t.dot(Ls),h=i.dot(Ls),S=s.dot(Ls);if(Math.max(-Math.max(m,h,S),Math.min(m,h,S))>p)return!1}return!0}const gn=new ut,Gc=new Ae;let Ab=0;class Ln{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ab++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=_p,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Gc.fromBufferAttribute(this,i),Gc.applyMatrix3(t),this.setXY(i,Gc.x,Gc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(t),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Xi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qe(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Xi(i,this.array)),i}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Xi(i,this.array)),i}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Xi(i,this.array)),i}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Xi(i,this.array)),i}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_p&&(t.usage=this.usage),t}}class gx extends Ln{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class _x extends Ln{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ui extends Ln{constructor(t,i,s){super(new Float32Array(t),i,s)}}const Rb=new gl,tl=new ut,lh=new ut;class _l{constructor(t=new ut,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Rb.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tl.subVectors(t,this.center);const i=tl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(tl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tl.copy(t.center).add(lh)),this.expandByPoint(tl.copy(t.center).sub(lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let wb=0;const xi=new Je,ch=new Cn,Ir=new ut,oi=new gl,el=new gl,bn=new ut;class Fn extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ob(t)?_x:gx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ye().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,i,s){return xi.makeTranslation(t,i,s),this.applyMatrix4(xi),this}scale(t,i,s){return xi.makeScale(t,i,s),this.applyMatrix4(xi),this}lookAt(t){return ch.lookAt(t),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ui(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ut(-1/0,-1/0,-1/0),new ut(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _l);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ut,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];el.setFromBufferAttribute(p),this.morphTargetsRelative?(bn.addVectors(oi.min,el.min),oi.expandByPoint(bn),bn.addVectors(oi.max,el.max),oi.expandByPoint(bn)):(oi.expandByPoint(el.min),oi.expandByPoint(el.max))}oi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,S=p.count;h<S;h++)bn.fromBufferAttribute(p,h),m&&(Ir.fromBufferAttribute(t,h),bn.add(Ir)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let E=0;E<s.count;E++)p[E]=new ut,m[E]=new ut;const h=new ut,S=new ut,v=new ut,g=new Ae,y=new Ae,M=new Ae,w=new ut,_=new ut;function x(E,O,J){h.fromBufferAttribute(s,E),S.fromBufferAttribute(s,O),v.fromBufferAttribute(s,J),g.fromBufferAttribute(c,E),y.fromBufferAttribute(c,O),M.fromBufferAttribute(c,J),S.sub(h),v.sub(h),y.sub(g),M.sub(g);const V=1/(y.x*M.y-M.x*y.y);isFinite(V)&&(w.copy(S).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(V),_.copy(v).multiplyScalar(y.x).addScaledVector(S,-M.x).multiplyScalar(V),p[E].add(w),p[O].add(w),p[J].add(w),m[E].add(_),m[O].add(_),m[J].add(_))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let E=0,O=T.length;E<O;++E){const J=T[E],V=J.start,k=J.count;for(let q=V,at=V+k;q<at;q+=3)x(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const D=new ut,R=new ut,H=new ut,P=new ut;function F(E){H.fromBufferAttribute(l,E),P.copy(H);const O=p[E];D.copy(O),D.sub(H.multiplyScalar(H.dot(O))).normalize(),R.crossVectors(P,O);const V=R.dot(m[E])<0?-1:1;f.setXYZW(E,D.x,D.y,D.z,V)}for(let E=0,O=T.length;E<O;++E){const J=T[E],V=J.start,k=J.count;for(let q=V,at=V+k;q<at;q+=3)F(t.getX(q+0)),F(t.getX(q+1)),F(t.getX(q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ln(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,y=s.count;g<y;g++)s.setXYZ(g,0,0,0);const l=new ut,c=new ut,f=new ut,p=new ut,m=new ut,h=new ut,S=new ut,v=new ut;if(t)for(let g=0,y=t.count;g<y;g+=3){const M=t.getX(g+0),w=t.getX(g+1),_=t.getX(g+2);l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,_),S.subVectors(f,c),v.subVectors(l,c),S.cross(v),p.fromBufferAttribute(s,M),m.fromBufferAttribute(s,w),h.fromBufferAttribute(s,_),p.add(S),m.add(S),h.add(S),s.setXYZ(M,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(_,h.x,h.y,h.z)}else for(let g=0,y=i.count;g<y;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),S.subVectors(f,c),v.subVectors(l,c),S.cross(v),s.setXYZ(g+0,S.x,S.y,S.z),s.setXYZ(g+1,S.x,S.y,S.z),s.setXYZ(g+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(p,m){const h=p.array,S=p.itemSize,v=p.normalized,g=new h.constructor(m.length*S);let y=0,M=0;for(let w=0,_=m.length;w<_;w++){p.isInterleavedBufferAttribute?y=m[w]*p.data.stride+p.offset:y=m[w]*S;for(let x=0;x<S;x++)g[M++]=h[y++]}return new Ln(g,S,v)}if(this.index===null)return ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Fn,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let S=0,v=h.length;S<v;S++){const g=h[S],y=t(g,s);m.push(y)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],S=[];for(let v=0,g=h.length;v<g;v++){const y=h[v];S.push(y.toJSON(t.data))}S.length>0&&(l[m]=S,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const h in l){const S=l[h];this.setAttribute(h,S.clone(i))}const c=t.morphAttributes;for(const h in c){const S=[],v=c[h];for(let g=0,y=v.length;g<y;g++)S.push(v[g].clone(i));this.morphAttributes[h]=S}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let h=0,S=f.length;h<S;h++){const v=f[h];this.addGroup(v.start,v.count,v.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cb{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=_p,this.updateRanges=[],this.version=0,this.uuid=fs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Vn=new ut;class xu{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyMatrix4(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.applyNormalMatrix(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)Vn.fromBufferAttribute(this,i),Vn.transformDirection(t),this.setXYZ(i,Vn.x,Vn.y,Vn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Xi(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qe(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Xi(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Xi(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Xi(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Xi(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){_u("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Ln(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new xu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){_u("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Db=0;class Xs extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Db++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=Yr,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wh,this.blendDst=Ch,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=V_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ue(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ue(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(s.blending=this.blending),this.side!==ds&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==wh&&(s.blendSrc=this.blendSrc),this.blendDst!==Ch&&(s.blendDst=this.blendDst),this.blendEquation!==zs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==V_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vx extends Xs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zr;const nl=new ut,Hr=new ut,Gr=new ut,Vr=new Ae,il=new Ae,xx=new Je,Vc=new ut,al=new ut,kc=new ut,nv=new Ae,uh=new Ae,iv=new Ae;class Nb extends Cn{constructor(t=new vx){if(super(),this.isSprite=!0,this.type="Sprite",zr===void 0){zr=new Fn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new Cb(i,5);zr.setIndex([0,1,2,0,2,3]),zr.setAttribute("position",new xu(s,3,0,!1)),zr.setAttribute("uv",new xu(s,2,3,!1))}this.geometry=zr,this.material=t,this.center=new Ae(.5,.5),this.count=1}raycast(t,i){t.camera===null&&Ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hr.setFromMatrixScale(this.matrixWorld),xx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Gr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const f=this.center;jc(Vc.set(-.5,-.5,0),Gr,f,Hr,l,c),jc(al.set(.5,-.5,0),Gr,f,Hr,l,c),jc(kc.set(.5,.5,0),Gr,f,Hr,l,c),nv.set(0,0),uh.set(1,0),iv.set(1,1);let p=t.ray.intersectTriangle(Vc,al,kc,!1,nl);if(p===null&&(jc(al.set(-.5,.5,0),Gr,f,Hr,l,c),uh.set(0,1),p=t.ray.intersectTriangle(Vc,kc,al,!1,nl),p===null))return;const m=t.ray.origin.distanceTo(nl);m<t.near||m>t.far||i.push({distance:m,point:nl.clone(),uv:yi.getInterpolation(nl,Vc,al,kc,nv,uh,iv,new Ae),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function jc(r,t,i,s,l,c){Vr.subVectors(r,i).addScalar(.5).multiply(s),l!==void 0?(il.x=c*Vr.x-l*Vr.y,il.y=l*Vr.x+c*Vr.y):il.copy(Vr),r.copy(t),r.x+=il.x,r.y+=il.y,r.applyMatrix4(xx)}const Ma=new ut,fh=new ut,Xc=new ut,ss=new ut,dh=new ut,Wc=new ut,hh=new ut;class Bp{constructor(t=new ut,i=new ut(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ma)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ma.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ma.copy(this.origin).addScaledVector(this.direction,i),Ma.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){fh.copy(t).add(i).multiplyScalar(.5),Xc.copy(i).sub(t).normalize(),ss.copy(this.origin).sub(fh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Xc),p=ss.dot(this.direction),m=-ss.dot(Xc),h=ss.lengthSq(),S=Math.abs(1-f*f);let v,g,y,M;if(S>0)if(v=f*m-p,g=f*p-m,M=c*S,v>=0)if(g>=-M)if(g<=M){const w=1/S;v*=w,g*=w,y=v*(v+f*g+2*p)+g*(f*v+g+2*m)+h}else g=c,v=Math.max(0,-(f*g+p)),y=-v*v+g*(g+2*m)+h;else g=-c,v=Math.max(0,-(f*g+p)),y=-v*v+g*(g+2*m)+h;else g<=-M?(v=Math.max(0,-(-f*c+p)),g=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+h):g<=M?(v=0,g=Math.min(Math.max(-c,-m),c),y=g*(g+2*m)+h):(v=Math.max(0,-(f*c+p)),g=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+g*(g+2*m)+h);else g=f>0?-c:c,v=Math.max(0,-(f*g+p)),y=-v*v+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(fh).addScaledVector(Xc,g),y}intersectSphere(t,i){Ma.subVectors(t.center,this.origin);const s=Ma.dot(this.direction),l=Ma.dot(Ma)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,p,m;const h=1/this.direction.x,S=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(s=(t.min.x-g.x)*h,l=(t.max.x-g.x)*h):(s=(t.max.x-g.x)*h,l=(t.min.x-g.x)*h),S>=0?(c=(t.min.y-g.y)*S,f=(t.max.y-g.y)*S):(c=(t.max.y-g.y)*S,f=(t.min.y-g.y)*S),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(p=(t.min.z-g.z)*v,m=(t.max.z-g.z)*v):(p=(t.max.z-g.z)*v,m=(t.min.z-g.z)*v),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ma)!==null}intersectTriangle(t,i,s,l,c){dh.subVectors(i,t),Wc.subVectors(s,t),hh.crossVectors(dh,Wc);let f=this.direction.dot(hh),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;ss.subVectors(this.origin,t);const m=p*this.direction.dot(Wc.crossVectors(ss,Wc));if(m<0)return null;const h=p*this.direction.dot(dh.cross(ss));if(h<0||m+h>f)return null;const S=-p*ss.dot(hh);return S<0?null:this.at(S/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ip extends Xs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wa,this.combine=Qv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const av=new Je,Os=new Bp,qc=new _l,sv=new ut,Yc=new ut,Zc=new ut,Kc=new ut,ph=new ut,Qc=new ut,rv=new ut,Jc=new ut;class Qi extends Cn{constructor(t=new Fn,i=new Ip){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Qc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const S=p[m],v=c[m];S!==0&&(ph.fromBufferAttribute(v,t),f?Qc.addScaledVector(ph,S):Qc.addScaledVector(ph.sub(i),S))}i.add(Qc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),qc.copy(s.boundingSphere),qc.applyMatrix4(c),Os.copy(t.ray).recast(t.near),!(qc.containsPoint(Os.origin)===!1&&(Os.intersectSphere(qc,sv)===null||Os.origin.distanceToSquared(sv)>(t.far-t.near)**2))&&(av.copy(c).invert(),Os.copy(t.ray).applyMatrix4(av),!(s.boundingBox!==null&&Os.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Os)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,S=c.attributes.uv1,v=c.attributes.normal,g=c.groups,y=c.drawRange;if(p!==null)if(Array.isArray(f))for(let M=0,w=g.length;M<w;M++){const _=g[M],x=f[_.materialIndex],T=Math.max(_.start,y.start),D=Math.min(p.count,Math.min(_.start+_.count,y.start+y.count));for(let R=T,H=D;R<H;R+=3){const P=p.getX(R),F=p.getX(R+1),E=p.getX(R+2);l=$c(this,x,t,s,h,S,v,P,F,E),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=_.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),w=Math.min(p.count,y.start+y.count);for(let _=M,x=w;_<x;_+=3){const T=p.getX(_),D=p.getX(_+1),R=p.getX(_+2);l=$c(this,f,t,s,h,S,v,T,D,R),l&&(l.faceIndex=Math.floor(_/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let M=0,w=g.length;M<w;M++){const _=g[M],x=f[_.materialIndex],T=Math.max(_.start,y.start),D=Math.min(m.count,Math.min(_.start+_.count,y.start+y.count));for(let R=T,H=D;R<H;R+=3){const P=R,F=R+1,E=R+2;l=$c(this,x,t,s,h,S,v,P,F,E),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=_.materialIndex,i.push(l))}}else{const M=Math.max(0,y.start),w=Math.min(m.count,y.start+y.count);for(let _=M,x=w;_<x;_+=3){const T=_,D=_+1,R=_+2;l=$c(this,f,t,s,h,S,v,T,D,R),l&&(l.faceIndex=Math.floor(_/3),i.push(l))}}}}function Ub(r,t,i,s,l,c,f,p){let m;if(t.side===Kn?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,t.side===ds,p),m===null)return null;Jc.copy(p),Jc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Jc);return h<i.near||h>i.far?null:{distance:h,point:Jc.clone(),object:r}}function $c(r,t,i,s,l,c,f,p,m,h){r.getVertexPosition(p,Yc),r.getVertexPosition(m,Zc),r.getVertexPosition(h,Kc);const S=Ub(r,t,i,s,Yc,Zc,Kc,rv);if(S){const v=new ut;yi.getBarycoord(rv,Yc,Zc,Kc,v),l&&(S.uv=yi.getInterpolatedAttribute(l,p,m,h,v,new Ae)),c&&(S.uv1=yi.getInterpolatedAttribute(c,p,m,h,v,new Ae)),f&&(S.normal=yi.getInterpolatedAttribute(f,p,m,h,v,new ut),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new ut,materialIndex:0};yi.getNormal(Yc,Zc,Kc,g.normal),S.face=g,S.barycoord=v}return S}class Lb extends Pn{constructor(t=null,i=1,s=1,l,c,f,p,m,h=wn,S=wn,v,g){super(null,f,p,m,h,S,l,c,v,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mh=new ut,Ob=new ut,Pb=new ye;class Is{constructor(t=new ut(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=mh.subVectors(s,i).cross(Ob.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(mh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Pb.getNormalMatrix(t),l=this.coplanarPoint(mh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new _l,Fb=new Ae(.5,.5),tu=new ut;class zp{constructor(t=new Is,i=new Is,s=new Is,l=new Is,c=new Is,f=new Is){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=qi,s=!1){const l=this.planes,c=t.elements,f=c[0],p=c[1],m=c[2],h=c[3],S=c[4],v=c[5],g=c[6],y=c[7],M=c[8],w=c[9],_=c[10],x=c[11],T=c[12],D=c[13],R=c[14],H=c[15];if(l[0].setComponents(h-f,y-S,x-M,H-T).normalize(),l[1].setComponents(h+f,y+S,x+M,H+T).normalize(),l[2].setComponents(h+p,y+v,x+w,H+D).normalize(),l[3].setComponents(h-p,y-v,x-w,H-D).normalize(),s)l[4].setComponents(m,g,_,R).normalize(),l[5].setComponents(h-m,y-g,x-_,H-R).normalize();else if(l[4].setComponents(h-m,y-g,x-_,H-R).normalize(),i===qi)l[5].setComponents(h+m,y+g,x+_,H+R).normalize();else if(i===pl)l[5].setComponents(m,g,_,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(t){Ps.center.set(0,0,0);const i=Fb.distanceTo(t.center);return Ps.radius=.7071067811865476+i,Ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(tu.x=l.normal.x>0?t.max.x:t.min.x,tu.y=l.normal.y>0?t.max.y:t.min.y,tu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(tu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hp extends Xs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Su=new ut,yu=new ut,ov=new Je,sl=new Bp,eu=new _l,gh=new ut,lv=new ut;class Sx extends Cn{constructor(t=new Fn,i=new Hp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Su.fromBufferAttribute(i,l-1),yu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Su.distanceTo(yu);t.setAttribute("lineDistance",new ui(s,1))}else ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),eu.copy(s.boundingSphere),eu.applyMatrix4(l),eu.radius+=c,t.ray.intersectsSphere(eu)===!1)return;ov.copy(l).invert(),sl.copy(t.ray).applyMatrix4(ov);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,S=s.index,g=s.attributes.position;if(S!==null){const y=Math.max(0,f.start),M=Math.min(S.count,f.start+f.count);for(let w=y,_=M-1;w<_;w+=h){const x=S.getX(w),T=S.getX(w+1),D=nu(this,t,sl,m,x,T,w);D&&i.push(D)}if(this.isLineLoop){const w=S.getX(M-1),_=S.getX(y),x=nu(this,t,sl,m,w,_,M-1);x&&i.push(x)}}else{const y=Math.max(0,f.start),M=Math.min(g.count,f.start+f.count);for(let w=y,_=M-1;w<_;w+=h){const x=nu(this,t,sl,m,w,w+1,w);x&&i.push(x)}if(this.isLineLoop){const w=nu(this,t,sl,m,M-1,y,M-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function nu(r,t,i,s,l,c,f){const p=r.geometry.attributes.position;if(Su.fromBufferAttribute(p,l),yu.fromBufferAttribute(p,c),i.distanceSqToSegment(Su,yu,gh,lv)>s)return;gh.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(gh);if(!(h<t.near||h>t.far))return{distance:h,point:lv.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const cv=new ut,uv=new ut;class Bb extends Sx{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)cv.fromBufferAttribute(i,l),uv.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+cv.distanceTo(uv);t.setAttribute("lineDistance",new ui(s,1))}else ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xp extends Xs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const fv=new Je,Sp=new Bp,iu=new _l,au=new ut;class dv extends Cn{constructor(t=new Fn,i=new xp){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),iu.copy(s.boundingSphere),iu.applyMatrix4(l),iu.radius+=c,t.ray.intersectsSphere(iu)===!1)return;fv.copy(l).invert(),Sp.copy(t.ray).applyMatrix4(fv);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=s.index,v=s.attributes.position;if(h!==null){const g=Math.max(0,f.start),y=Math.min(h.count,f.start+f.count);for(let M=g,w=y;M<w;M++){const _=h.getX(M);au.fromBufferAttribute(v,_),hv(au,_,m,l,t,i,this)}}else{const g=Math.max(0,f.start),y=Math.min(v.count,f.start+f.count);for(let M=g,w=y;M<w;M++)au.fromBufferAttribute(v,M),hv(au,M,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function hv(r,t,i,s,l,c,f){const p=Sp.distanceSqToPoint(r);if(p<i){const m=new ut;Sp.closestPointToPoint(r,m),m.applyMatrix4(s);const h=l.ray.origin.distanceTo(m);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class yx extends Pn{constructor(t=[],i=js,s,l,c,f,p,m,h,S){super(t,i,s,l,c,f,p,m,h,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ib extends Pn{constructor(t,i,s,l,c,f,p,m,h){super(t,i,s,l,c,f,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ml extends Pn{constructor(t,i,s=Ki,l,c,f,p=wn,m=wn,h,S=Ra,v=1){if(S!==Ra&&S!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:v};super(g,l,c,f,p,m,S,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Pp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class zb extends ml{constructor(t,i=Ki,s=js,l,c,f=wn,p=wn,m,h=Ra){const S={width:t,height:t,depth:1},v=[S,S,S,S,S,S];super(t,t,i,s,l,c,f,p,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Mx extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class vl extends Fn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],h=[],S=[],v=[];let g=0,y=0;M("z","y","x",-1,-1,s,i,t,f,c,0),M("z","y","x",1,-1,s,i,-t,f,c,1),M("x","z","y",1,1,t,s,i,l,f,2),M("x","z","y",1,-1,t,s,-i,l,f,3),M("x","y","z",1,-1,t,i,s,l,c,4),M("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ui(h,3)),this.setAttribute("normal",new ui(S,3)),this.setAttribute("uv",new ui(v,2));function M(w,_,x,T,D,R,H,P,F,E,O){const J=R/F,V=H/E,k=R/2,q=H/2,at=P/2,$=F+1,U=E+1;let B=0,nt=0;const ot=new ut;for(let St=0;St<U;St++){const z=St*V-q;for(let I=0;I<$;I++){const W=I*J-k;ot[w]=W*T,ot[_]=z*D,ot[x]=at,h.push(ot.x,ot.y,ot.z),ot[w]=0,ot[_]=0,ot[x]=P>0?1:-1,S.push(ot.x,ot.y,ot.z),v.push(I/F),v.push(1-St/E),B+=1}}for(let St=0;St<E;St++)for(let z=0;z<F;z++){const I=g+z+$*St,W=g+z+$*(St+1),lt=g+(z+1)+$*(St+1),_t=g+(z+1)+$*St;m.push(I,W,_t),m.push(W,lt,_t),nt+=6}p.addGroup(y,nt,O),y+=nt,g+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class xl extends Fn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,S=m+1,v=t/p,g=i/m,y=[],M=[],w=[],_=[];for(let x=0;x<S;x++){const T=x*g-f;for(let D=0;D<h;D++){const R=D*v-c;M.push(R,-T,0),w.push(0,0,1),_.push(D/p),_.push(1-x/m)}}for(let x=0;x<m;x++)for(let T=0;T<p;T++){const D=T+h*x,R=T+h*(x+1),H=T+1+h*(x+1),P=T+1+h*x;y.push(D,R,P),y.push(R,H,P)}this.setIndex(y),this.setAttribute("position",new ui(M,3)),this.setAttribute("normal",new ui(w,3)),this.setAttribute("uv",new ui(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xl(t.width,t.height,t.widthSegments,t.heightSegments)}}function to(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function kn(r){const t={};for(let i=0;i<r.length;i++){const s=to(r[i]);for(const l in s)t[l]=s[l]}return t}function Hb(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function bx(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const Gb={clone:to,merge:kn};var Vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Xs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vb,this.fragmentShader=kb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=to(t.uniforms),this.uniformsGroups=Hb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class jb extends Ji{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xb extends Xs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=JM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wb extends Xs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ex extends Cn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const _h=new Je,pv=new ut,mv=new ut;class qb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zp,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;pv.setFromMatrixPosition(t.matrixWorld),i.position.copy(pv),mv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(mv),i.updateMatrixWorld(),_h.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===pl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(_h)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const su=new ut,ru=new no,Gi=new ut;class Tx extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(su,ru,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(su,ru,Gi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(su,ru,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(su,ru,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rs=new ut,gv=new Ae,_v=new Ae;class li extends Tx{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=vp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vp*2*Math.atan(Math.tan(Xd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,i){return this.getViewBounds(t,gv,_v),i.subVectors(_v,gv)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Xd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/h,l*=f.width/m,s*=f.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Yb extends qb{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0}}class Zb extends Ex{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new Yb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Ax extends Tx{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=S*this.view.offsetY,m=p-S*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Kb extends Ex{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const kr=-90,jr=1;class Qb extends Cn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(kr,jr,t,i);l.layers=this.layers,this.add(l);const c=new li(kr,jr,t,i);c.layers=this.layers,this.add(c);const f=new li(kr,jr,t,i);f.layers=this.layers,this.add(f);const p=new li(kr,jr,t,i);p.layers=this.layers,this.add(p);const m=new li(kr,jr,t,i);m.layers=this.layers,this.add(m);const h=new li(kr,jr,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const h of i)this.remove(h);if(t===qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===pl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,h,S]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),_&&t.autoClear===!1&&t.clearDepth(),t.render(i,S),t.setRenderTarget(v,g,y),t.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class Jb extends li{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class $b{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ue("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class tE extends Bb{constructor(t=10,i=10,s=4473924,l=8947848){s=new be(s),l=new be(l);const c=i/2,f=t/i,p=t/2,m=[],h=[];for(let g=0,y=0,M=-p;g<=i;g++,M+=f){m.push(-p,0,M,p,0,M),m.push(M,0,-p,M,0,p);const w=g===c?s:l;w.toArray(h,y),y+=3,w.toArray(h,y),y+=3,w.toArray(h,y),y+=3,w.toArray(h,y),y+=3}const S=new Fn;S.setAttribute("position",new ui(m,3)),S.setAttribute("color",new ui(h,3));const v=new Hp({vertexColors:!0,toneMapped:!1});super(S,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function vv(r,t,i,s){const l=eE(s);switch(i){case cx:return r*t;case fx:return r*t/l.components*l.byteLength;case Dp:return r*t/l.components*l.byteLength;case Jr:return r*t*2/l.components*l.byteLength;case Np:return r*t*2/l.components*l.byteLength;case ux:return r*t*3/l.components*l.byteLength;case Oi:return r*t*4/l.components*l.byteLength;case Up:return r*t*4/l.components*l.byteLength;case uu:case fu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case du:case hu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hh:case Vh:return Math.max(r,16)*Math.max(t,8)/4;case zh:case Gh:return Math.max(r,8)*Math.max(t,8)/2;case kh:case jh:case Wh:case qh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Xh:case Yh:case Zh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Kh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Qh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Jh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case $h:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case tp:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ep:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case np:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ip:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case ap:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case sp:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case rp:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case op:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case lp:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case cp:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case up:case fp:case dp:return Math.ceil(r/4)*Math.ceil(t/4)*16;case hp:case pp:return Math.ceil(r/4)*Math.ceil(t/4)*8;case mp:case gp:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function eE(r){switch(r){case ci:case sx:return{byteLength:1,components:1};case dl:case rx:case Aa:return{byteLength:2,components:1};case wp:case Cp:return{byteLength:2,components:4};case Ki:case Rp:case Wi:return{byteLength:4,components:1};case ox:case lx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tp}}));typeof window<"u"&&(window.__THREE__?ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rx(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function nE(r){const t=new WeakMap;function i(p,m){const h=p.array,S=p.usage,v=h.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,h,S),p.onUploadCallback();let y;if(h instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=r.SHORT;else if(h instanceof Uint32Array)y=r.UNSIGNED_INT;else if(h instanceof Int32Array)y=r.INT;else if(h instanceof Int8Array)y=r.BYTE;else if(h instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:v}}function s(p,m,h){const S=m.array,v=m.updateRanges;if(r.bindBuffer(h,p),v.length===0)r.bufferSubData(h,0,S);else{v.sort((y,M)=>y.start-M.start);let g=0;for(let y=1;y<v.length;y++){const M=v[g],w=v[y];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++g,v[g]=w)}v.length=g+1;for(let y=0,M=v.length;y<M;y++){const w=v[y];r.bufferSubData(h,w.start*S.BYTES_PER_ELEMENT,S,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(r.deleteBuffer(m.buffer),t.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const S=t.get(p);(!S||S.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:f}}var iE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aE=`#ifdef USE_ALPHAHASH
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
#endif`,sE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cE=`#ifdef USE_AOMAP
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
#endif`,uE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fE=`#ifdef USE_BATCHING
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
#endif`,dE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gE=`#ifdef USE_IRIDESCENCE
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
#endif`,_E=`#ifdef USE_BUMPMAP
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
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ME=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,EE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,TE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,AE=`#define PI 3.141592653589793
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
} // validated`,RE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wE=`vec3 transformedNormal = objectNormal;
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
#endif`,CE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LE="gl_FragColor = linearToOutputTexel( gl_FragColor );",OE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PE=`#ifdef USE_ENVMAP
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
#endif`,FE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
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
#endif`,IE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zE=`#ifdef USE_ENVMAP
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
#endif`,HE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jE=`#ifdef USE_GRADIENTMAP
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
}`,XE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YE=`uniform bool receiveShadow;
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
#endif`,ZE=`#ifdef USE_ENVMAP
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
#endif`,KE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,JE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t1=`PhysicalMaterial material;
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
#endif`,e1=`uniform sampler2D dfgLUT;
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
}`,n1=`
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
#endif`,i1=`#if defined( RE_IndirectDiffuse )
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
#endif`,a1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d1=`#if defined( USE_POINTS_UV )
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
#endif`,h1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v1=`#ifdef USE_MORPHTARGETS
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
#endif`,x1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,y1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T1=`#ifdef USE_NORMALMAP
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
#endif`,A1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,N1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,U1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,G1=`float getShadowMask() {
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
}`,V1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k1=`#ifdef USE_SKINNING
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
#endif`,j1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X1=`#ifdef USE_SKINNING
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
#endif`,W1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K1=`#ifdef USE_TRANSMISSION
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
#endif`,Q1=`#ifdef USE_TRANSMISSION
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
#endif`,J1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iT=`uniform sampler2D t2D;
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lT=`#include <common>
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
}`,cT=`#if DEPTH_PACKING == 3200
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
}`,uT=`#define DISTANCE
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
}`,fT=`#define DISTANCE
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
}`,dT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`uniform float scale;
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
}`,mT=`uniform vec3 diffuse;
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
}`,gT=`#include <common>
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
}`,_T=`uniform vec3 diffuse;
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
}`,vT=`#define LAMBERT
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
}`,xT=`#define LAMBERT
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
}`,ST=`#define MATCAP
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
}`,yT=`#define MATCAP
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
}`,MT=`#define NORMAL
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
}`,bT=`#define NORMAL
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
}`,ET=`#define PHONG
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
}`,TT=`#define PHONG
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
}`,AT=`#define STANDARD
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
}`,RT=`#define STANDARD
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
}`,wT=`#define TOON
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
}`,CT=`#define TOON
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
}`,DT=`uniform float size;
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
}`,NT=`uniform vec3 diffuse;
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
}`,UT=`#include <common>
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
}`,LT=`uniform vec3 color;
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
}`,OT=`uniform float rotation;
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
}`,PT=`uniform vec3 diffuse;
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
}`,Me={alphahash_fragment:iE,alphahash_pars_fragment:aE,alphamap_fragment:sE,alphamap_pars_fragment:rE,alphatest_fragment:oE,alphatest_pars_fragment:lE,aomap_fragment:cE,aomap_pars_fragment:uE,batching_pars_vertex:fE,batching_vertex:dE,begin_vertex:hE,beginnormal_vertex:pE,bsdfs:mE,iridescence_fragment:gE,bumpmap_pars_fragment:_E,clipping_planes_fragment:vE,clipping_planes_pars_fragment:xE,clipping_planes_pars_vertex:SE,clipping_planes_vertex:yE,color_fragment:ME,color_pars_fragment:bE,color_pars_vertex:EE,color_vertex:TE,common:AE,cube_uv_reflection_fragment:RE,defaultnormal_vertex:wE,displacementmap_pars_vertex:CE,displacementmap_vertex:DE,emissivemap_fragment:NE,emissivemap_pars_fragment:UE,colorspace_fragment:LE,colorspace_pars_fragment:OE,envmap_fragment:PE,envmap_common_pars_fragment:FE,envmap_pars_fragment:BE,envmap_pars_vertex:IE,envmap_physical_pars_fragment:ZE,envmap_vertex:zE,fog_vertex:HE,fog_pars_vertex:GE,fog_fragment:VE,fog_pars_fragment:kE,gradientmap_pars_fragment:jE,lightmap_pars_fragment:XE,lights_lambert_fragment:WE,lights_lambert_pars_fragment:qE,lights_pars_begin:YE,lights_toon_fragment:KE,lights_toon_pars_fragment:QE,lights_phong_fragment:JE,lights_phong_pars_fragment:$E,lights_physical_fragment:t1,lights_physical_pars_fragment:e1,lights_fragment_begin:n1,lights_fragment_maps:i1,lights_fragment_end:a1,logdepthbuf_fragment:s1,logdepthbuf_pars_fragment:r1,logdepthbuf_pars_vertex:o1,logdepthbuf_vertex:l1,map_fragment:c1,map_pars_fragment:u1,map_particle_fragment:f1,map_particle_pars_fragment:d1,metalnessmap_fragment:h1,metalnessmap_pars_fragment:p1,morphinstance_vertex:m1,morphcolor_vertex:g1,morphnormal_vertex:_1,morphtarget_pars_vertex:v1,morphtarget_vertex:x1,normal_fragment_begin:S1,normal_fragment_maps:y1,normal_pars_fragment:M1,normal_pars_vertex:b1,normal_vertex:E1,normalmap_pars_fragment:T1,clearcoat_normal_fragment_begin:A1,clearcoat_normal_fragment_maps:R1,clearcoat_pars_fragment:w1,iridescence_pars_fragment:C1,opaque_fragment:D1,packing:N1,premultiplied_alpha_fragment:U1,project_vertex:L1,dithering_fragment:O1,dithering_pars_fragment:P1,roughnessmap_fragment:F1,roughnessmap_pars_fragment:B1,shadowmap_pars_fragment:I1,shadowmap_pars_vertex:z1,shadowmap_vertex:H1,shadowmask_pars_fragment:G1,skinbase_vertex:V1,skinning_pars_vertex:k1,skinning_vertex:j1,skinnormal_vertex:X1,specularmap_fragment:W1,specularmap_pars_fragment:q1,tonemapping_fragment:Y1,tonemapping_pars_fragment:Z1,transmission_fragment:K1,transmission_pars_fragment:Q1,uv_pars_fragment:J1,uv_pars_vertex:$1,uv_vertex:tT,worldpos_vertex:eT,background_vert:nT,background_frag:iT,backgroundCube_vert:aT,backgroundCube_frag:sT,cube_vert:rT,cube_frag:oT,depth_vert:lT,depth_frag:cT,distance_vert:uT,distance_frag:fT,equirect_vert:dT,equirect_frag:hT,linedashed_vert:pT,linedashed_frag:mT,meshbasic_vert:gT,meshbasic_frag:_T,meshlambert_vert:vT,meshlambert_frag:xT,meshmatcap_vert:ST,meshmatcap_frag:yT,meshnormal_vert:MT,meshnormal_frag:bT,meshphong_vert:ET,meshphong_frag:TT,meshphysical_vert:AT,meshphysical_frag:RT,meshtoon_vert:wT,meshtoon_frag:CT,points_vert:DT,points_frag:NT,shadow_vert:UT,shadow_frag:LT,sprite_vert:OT,sprite_frag:PT},Vt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},ki={basic:{uniforms:kn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:kn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:kn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:kn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:kn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new be(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:kn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:kn([Vt.points,Vt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:kn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:kn([Vt.common,Vt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:kn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:kn([Vt.sprite,Vt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distance:{uniforms:kn([Vt.common,Vt.displacementmap,{referencePosition:{value:new ut},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distance_vert,fragmentShader:Me.distance_frag},shadow:{uniforms:kn([Vt.lights,Vt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};ki.physical={uniforms:kn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const ou={r:0,b:0,g:0},Fs=new wa,FT=new Je;function BT(r,t,i,s,l,c){const f=new be(0);let p=l===!0?0:1,m,h,S=null,v=0,g=null;function y(T){let D=T.isScene===!0?T.background:null;if(D&&D.isTexture){const R=T.backgroundBlurriness>0;D=t.get(D,R)}return D}function M(T){let D=!1;const R=y(T);R===null?_(f,p):R&&R.isColor&&(_(R,1),D=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(T,D){const R=y(D);R&&(R.isCubeTexture||R.mapping===Au)?(h===void 0&&(h=new Qi(new vl(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:to(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(H,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Fs.copy(D.backgroundRotation),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(FT.makeRotationFromEuler(Fs)),h.material.toneMapped=Le.getTransfer(R.colorSpace)!==ke,(S!==R||v!==R.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,S=R,v=R.version,g=r.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Qi(new xl(2,2),new Ji({name:"BackgroundMaterial",uniforms:to(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Le.getTransfer(R.colorSpace)!==ke,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(S!==R||v!==R.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,S=R,v=R.version,g=r.toneMapping),m.layers.enableAll(),T.unshift(m,m.geometry,m.material,0,0,null))}function _(T,D){T.getRGB(ou,bx(r)),i.buffers.color.setClear(ou.r,ou.g,ou.b,D,c)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(T,D=1){f.set(T),p=D,_(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(T){p=T,_(f,p)},render:M,addToRenderList:w,dispose:x}}function IT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function p(V,k,q,at,$){let U=!1;const B=v(V,at,q,k);c!==B&&(c=B,h(c.object)),U=y(V,at,q,$),U&&M(V,at,q,$),$!==null&&t.update($,r.ELEMENT_ARRAY_BUFFER),(U||f)&&(f=!1,R(V,k,q,at),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function m(){return r.createVertexArray()}function h(V){return r.bindVertexArray(V)}function S(V){return r.deleteVertexArray(V)}function v(V,k,q,at){const $=at.wireframe===!0;let U=s[k.id];U===void 0&&(U={},s[k.id]=U);const B=V.isInstancedMesh===!0?V.id:0;let nt=U[B];nt===void 0&&(nt={},U[B]=nt);let ot=nt[q.id];ot===void 0&&(ot={},nt[q.id]=ot);let St=ot[$];return St===void 0&&(St=g(m()),ot[$]=St),St}function g(V){const k=[],q=[],at=[];for(let $=0;$<i;$++)k[$]=0,q[$]=0,at[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:at,object:V,attributes:{},index:null}}function y(V,k,q,at){const $=c.attributes,U=k.attributes;let B=0;const nt=q.getAttributes();for(const ot in nt)if(nt[ot].location>=0){const z=$[ot];let I=U[ot];if(I===void 0&&(ot==="instanceMatrix"&&V.instanceMatrix&&(I=V.instanceMatrix),ot==="instanceColor"&&V.instanceColor&&(I=V.instanceColor)),z===void 0||z.attribute!==I||I&&z.data!==I.data)return!0;B++}return c.attributesNum!==B||c.index!==at}function M(V,k,q,at){const $={},U=k.attributes;let B=0;const nt=q.getAttributes();for(const ot in nt)if(nt[ot].location>=0){let z=U[ot];z===void 0&&(ot==="instanceMatrix"&&V.instanceMatrix&&(z=V.instanceMatrix),ot==="instanceColor"&&V.instanceColor&&(z=V.instanceColor));const I={};I.attribute=z,z&&z.data&&(I.data=z.data),$[ot]=I,B++}c.attributes=$,c.attributesNum=B,c.index=at}function w(){const V=c.newAttributes;for(let k=0,q=V.length;k<q;k++)V[k]=0}function _(V){x(V,0)}function x(V,k){const q=c.newAttributes,at=c.enabledAttributes,$=c.attributeDivisors;q[V]=1,at[V]===0&&(r.enableVertexAttribArray(V),at[V]=1),$[V]!==k&&(r.vertexAttribDivisor(V,k),$[V]=k)}function T(){const V=c.newAttributes,k=c.enabledAttributes;for(let q=0,at=k.length;q<at;q++)k[q]!==V[q]&&(r.disableVertexAttribArray(q),k[q]=0)}function D(V,k,q,at,$,U,B){B===!0?r.vertexAttribIPointer(V,k,q,$,U):r.vertexAttribPointer(V,k,q,at,$,U)}function R(V,k,q,at){w();const $=at.attributes,U=q.getAttributes(),B=k.defaultAttributeValues;for(const nt in U){const ot=U[nt];if(ot.location>=0){let St=$[nt];if(St===void 0&&(nt==="instanceMatrix"&&V.instanceMatrix&&(St=V.instanceMatrix),nt==="instanceColor"&&V.instanceColor&&(St=V.instanceColor)),St!==void 0){const z=St.normalized,I=St.itemSize,W=t.get(St);if(W===void 0)continue;const lt=W.buffer,_t=W.type,K=W.bytesPerElement,st=_t===r.INT||_t===r.UNSIGNED_INT||St.gpuType===Rp;if(St.isInterleavedBufferAttribute){const mt=St.data,Y=mt.stride,At=St.offset;if(mt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<ot.locationSize;Ct++)x(ot.location+Ct,mt.meshPerAttribute);V.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let Ct=0;Ct<ot.locationSize;Ct++)_(ot.location+Ct);r.bindBuffer(r.ARRAY_BUFFER,lt);for(let Ct=0;Ct<ot.locationSize;Ct++)D(ot.location+Ct,I/ot.locationSize,_t,z,Y*K,(At+I/ot.locationSize*Ct)*K,st)}else{if(St.isInstancedBufferAttribute){for(let mt=0;mt<ot.locationSize;mt++)x(ot.location+mt,St.meshPerAttribute);V.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let mt=0;mt<ot.locationSize;mt++)_(ot.location+mt);r.bindBuffer(r.ARRAY_BUFFER,lt);for(let mt=0;mt<ot.locationSize;mt++)D(ot.location+mt,I/ot.locationSize,_t,z,I*K,I/ot.locationSize*mt*K,st)}}else if(B!==void 0){const z=B[nt];if(z!==void 0)switch(z.length){case 2:r.vertexAttrib2fv(ot.location,z);break;case 3:r.vertexAttrib3fv(ot.location,z);break;case 4:r.vertexAttrib4fv(ot.location,z);break;default:r.vertexAttrib1fv(ot.location,z)}}}}T()}function H(){O();for(const V in s){const k=s[V];for(const q in k){const at=k[q];for(const $ in at){const U=at[$];for(const B in U)S(U[B].object),delete U[B];delete at[$]}}delete s[V]}}function P(V){if(s[V.id]===void 0)return;const k=s[V.id];for(const q in k){const at=k[q];for(const $ in at){const U=at[$];for(const B in U)S(U[B].object),delete U[B];delete at[$]}}delete s[V.id]}function F(V){for(const k in s){const q=s[k];for(const at in q){const $=q[at];if($[V.id]===void 0)continue;const U=$[V.id];for(const B in U)S(U[B].object),delete U[B];delete $[V.id]}}}function E(V){for(const k in s){const q=s[k],at=V.isInstancedMesh===!0?V.id:0,$=q[at];if($!==void 0){for(const U in $){const B=$[U];for(const nt in B)S(B[nt].object),delete B[nt];delete $[U]}delete q[at],Object.keys(q).length===0&&delete s[k]}}}function O(){J(),f=!0,c!==l&&(c=l,h(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:O,resetDefaultState:J,dispose:H,releaseStatesOfGeometry:P,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:_,disableUnusedAttributes:T}}function zT(r,t,i){let s;function l(h){s=h}function c(h,S){r.drawArrays(s,h,S),i.update(S,s,1)}function f(h,S,v){v!==0&&(r.drawArraysInstanced(s,h,S,v),i.update(S,s,v))}function p(h,S,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,S,0,v);let y=0;for(let M=0;M<v;M++)y+=S[M];i.update(y,s,1)}function m(h,S,v,g){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<h.length;M++)f(h[M],S[M],g[M]);else{y.multiDrawArraysInstancedWEBGL(s,h,0,S,0,g,0,v);let M=0;for(let w=0;w<v;w++)M+=S[w]*g[w];i.update(M,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function HT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Oi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(F){const E=F===Aa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==ci&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Wi&&!E)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const S=m(h);S!==h&&(ue("WebGLRenderer:",h,"not supported, using",S,"instead."),h=S);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=r.getParameter(r.MAX_SAMPLES),P=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:T,maxVaryings:D,maxFragmentUniforms:R,maxSamples:H,samples:P}}function GT(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Is,p=new ye,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const y=v.length!==0||g||s!==0||l;return l=g,s=v.length,y},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=S(v,g,0)},this.setState=function(v,g,y){const M=v.clippingPlanes,w=v.clipIntersection,_=v.clipShadows,x=r.get(v);if(!l||M===null||M.length===0||c&&!_)c?S(null):h();else{const T=c?0:s,D=T*4;let R=x.clippingState||null;m.value=R,R=S(M,g,D,y);for(let H=0;H!==D;++H)R[H]=i[H];x.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=T}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function S(v,g,y,M){const w=v!==null?v.length:0;let _=null;if(w!==0){if(_=m.value,M!==!0||_===null){const x=y+w*4,T=g.matrixWorldInverse;p.getNormalMatrix(T),(_===null||_.length<x)&&(_=new Float32Array(x));for(let D=0,R=y;D!==w;++D,R+=4)f.copy(v[D]).applyMatrix4(T,p),f.normal.toArray(_,R),_[R+3]=f.constant}m.value=_,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,_}}const us=4,xv=[.125,.215,.35,.446,.526,.582],Hs=20,VT=256,rl=new Ax,Sv=new be;let vh=null,xh=0,Sh=0,yh=!1;const kT=new ut;class yv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=kT}=c;vh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ev(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vh,xh,Sh),this._renderer.xr.enabled=yh,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===js||t.mapping===Qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vh=this._renderer.getRenderTarget(),xh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:Aa,format:Oi,colorSpace:$r,depthBuffer:!1},l=Mv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jT(c)),this._blurMaterial=WT(c,t,i),this._ggxMaterial=XT(c,t,i)}return l}_compileMaterial(t){const i=new Qi(new Fn,t);this._renderer.compile(i,rl)}_sceneToCubeUV(t,i,s,l,c){const m=new li(90,1,i,s),h=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,y=v.toneMapping;v.getClearColor(Sv),v.toneMapping=Yi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qi(new vl,new Ip({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,_=w.material;let x=!1;const T=t.background;T?T.isColor&&(_.color.copy(T),t.background=null,x=!0):(_.color.copy(Sv),x=!0);for(let D=0;D<6;D++){const R=D%3;R===0?(m.up.set(0,h[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+S[D],c.y,c.z)):R===1?(m.up.set(0,0,h[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+S[D],c.z)):(m.up.set(0,h[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+S[D]));const H=this._cubeSize;Xr(l,R*H,D>2?H:0,H,H),v.setRenderTarget(l),x&&v.render(w,m),v.render(t,m)}v.toneMapping=y,v.autoClear=g,t.background=T}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===js||t.mapping===Qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ev()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Xr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,rl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,h=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-S*S),g=0+h*1.25,y=v*g,{_lodMax:M}=this,w=this._sizeLods[s],_=3*w*(s>M-us?s-M+us:0),x=4*(this._cubeSize-w);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=M-i,Xr(c,_,x,3*w,2*w),l.setRenderTarget(c),l.render(p,rl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-s,Xr(t,_,x,3*w,2*w),l.setRenderTarget(t),l.render(p,rl)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,p){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const S=3,v=this._lodMeshes[l];v.material=h;const g=h.uniforms,y=this._sizeLods[s]-1,M=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Hs-1),w=c/M,_=isFinite(c)?1+Math.floor(S*w):Hs;_>Hs&&ue(`sigmaRadians, ${c}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Hs}`);const x=[];let T=0;for(let F=0;F<Hs;++F){const E=F/w,O=Math.exp(-E*E/2);x.push(O),F===0?T+=O:F<_&&(T+=2*O)}for(let F=0;F<x.length;F++)x[F]=x[F]/T;g.envMap.value=t.texture,g.samples.value=_,g.weights.value=x,g.latitudinal.value=f==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:D}=this;g.dTheta.value=M,g.mipInt.value=D-s;const R=this._sizeLods[l],H=3*R*(l>D-us?l-D+us:0),P=4*(this._cubeSize-R);Xr(i,H,P,3*R,2*R),m.setRenderTarget(i),m.render(v,rl)}}function jT(r){const t=[],i=[],s=[];let l=r;const c=r-us+1+xv.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);t.push(p);let m=1/p;f>r-us?m=xv[f-r+us-1]:f===0&&(m=0),i.push(m);const h=1/(p-2),S=-h,v=1+h,g=[S,S,v,S,v,v,S,S,v,v,S,v],y=6,M=6,w=3,_=2,x=1,T=new Float32Array(w*M*y),D=new Float32Array(_*M*y),R=new Float32Array(x*M*y);for(let P=0;P<y;P++){const F=P%3*2/3-1,E=P>2?0:-1,O=[F,E,0,F+2/3,E,0,F+2/3,E+1,0,F,E,0,F+2/3,E+1,0,F,E+1,0];T.set(O,w*M*P),D.set(g,_*M*P);const J=[P,P,P,P,P,P];R.set(J,x*M*P)}const H=new Fn;H.setAttribute("position",new Ln(T,w)),H.setAttribute("uv",new Ln(D,_)),H.setAttribute("faceIndex",new Ln(R,x)),s.push(new Qi(H,null)),l>us&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Mv(r,t,i){const s=new Zi(r,t,i);return s.texture.mapping=Au,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Xr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function XT(r,t,i){return new Ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:VT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function WT(r,t,i){const s=new Float32Array(Hs),l=new ut(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function bv(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Ev(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ea,depthTest:!1,depthWrite:!1})}function Ru(){return`

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
	`}class wx extends Zi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new yx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new vl(5,5,5),c=new Ji({name:"CubemapFromEquirect",uniforms:to(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Kn,blending:Ea});c.uniforms.tEquirect.value=i;const f=new Qi(l,c),p=i.minFilter;return i.minFilter===Gs&&(i.minFilter=On),new Qb(1,10,this).update(t,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function qT(r){let t=new WeakMap,i=new WeakMap,s=null;function l(g,y=!1){return g==null?null:y?f(g):c(g)}function c(g){if(g&&g.isTexture){const y=g.mapping;if(y===Vd||y===kd)if(t.has(g)){const M=t.get(g).texture;return p(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const w=new wx(M.height);return w.fromEquirectangularTexture(r,g),t.set(g,w),g.addEventListener("dispose",h),p(w.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const y=g.mapping,M=y===Vd||y===kd,w=y===js||y===Qr;if(M||w){let _=i.get(g);const x=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new yv(r)),_=M?s.fromEquirectangular(g,_):s.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,i.set(g,_),_.texture;if(_!==void 0)return _.texture;{const T=g.image;return M&&T&&T.height>0||w&&T&&m(T)?(s===null&&(s=new yv(r)),_=M?s.fromEquirectangular(g):s.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,i.set(g,_),g.addEventListener("dispose",S),_.texture):null}}}return g}function p(g,y){return y===Vd?g.mapping=js:y===kd&&(g.mapping=Qr),g}function m(g){let y=0;const M=6;for(let w=0;w<M;w++)g[w]!==void 0&&y++;return y===M}function h(g){const y=g.target;y.removeEventListener("dispose",h);const M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function S(g){const y=g.target;y.removeEventListener("dispose",S);const M=i.get(y);M!==void 0&&(i.delete(y),M.dispose())}function v(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function YT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&vu("WebGLRenderer: "+s+" extension not supported."),l}}}function ZT(r,t,i,s){const l={},c=new WeakMap;function f(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const M in g.attributes)t.remove(g.attributes[M]);g.removeEventListener("dispose",f),delete l[g.id];const y=c.get(g);y&&(t.remove(y),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(v,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const y in g)t.update(g[y],r.ARRAY_BUFFER)}function h(v){const g=[],y=v.index,M=v.attributes.position;let w=0;if(M===void 0)return;if(y!==null){const T=y.array;w=y.version;for(let D=0,R=T.length;D<R;D+=3){const H=T[D+0],P=T[D+1],F=T[D+2];g.push(H,P,P,F,F,H)}}else{const T=M.array;w=M.version;for(let D=0,R=T.length/3-1;D<R;D+=3){const H=D+0,P=D+1,F=D+2;g.push(H,P,P,F,F,H)}}const _=new(M.count>=65535?_x:gx)(g,1);_.version=w;const x=c.get(v);x&&t.remove(x),c.set(v,_)}function S(v){const g=c.get(v);if(g){const y=v.index;y!==null&&g.version<y.version&&h(v)}else h(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:S}}function KT(r,t,i){let s;function l(g){s=g}let c,f;function p(g){c=g.type,f=g.bytesPerElement}function m(g,y){r.drawElements(s,y,c,g*f),i.update(y,s,1)}function h(g,y,M){M!==0&&(r.drawElementsInstanced(s,y,c,g*f,M),i.update(y,s,M))}function S(g,y,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,g,0,M);let _=0;for(let x=0;x<M;x++)_+=y[x];i.update(_,s,1)}function v(g,y,M,w){if(M===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<g.length;x++)h(g[x]/f,y[x],w[x]);else{_.multiDrawElementsInstancedWEBGL(s,y,0,c,g,0,w,0,M);let x=0;for(let T=0;T<M;T++)x+=y[T]*w[T];i.update(x,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=S,this.renderMultiDrawInstances=v}function QT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Ue("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function JT(r,t,i){const s=new WeakMap,l=new sn;function c(f,p,m){const h=f.morphTargetInfluences,S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=S!==void 0?S.length:0;let g=s.get(p);if(g===void 0||g.count!==v){let J=function(){E.dispose(),s.delete(p),p.removeEventListener("dispose",J)};var y=J;g!==void 0&&g.texture.dispose();const M=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,_=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],T=p.morphAttributes.normal||[],D=p.morphAttributes.color||[];let R=0;M===!0&&(R=1),w===!0&&(R=2),_===!0&&(R=3);let H=p.attributes.position.count*R,P=1;H>t.maxTextureSize&&(P=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const F=new Float32Array(H*P*4*v),E=new hx(F,H,P,v);E.type=Wi,E.needsUpdate=!0;const O=R*4;for(let V=0;V<v;V++){const k=x[V],q=T[V],at=D[V],$=H*P*4*V;for(let U=0;U<k.count;U++){const B=U*O;M===!0&&(l.fromBufferAttribute(k,U),F[$+B+0]=l.x,F[$+B+1]=l.y,F[$+B+2]=l.z,F[$+B+3]=0),w===!0&&(l.fromBufferAttribute(q,U),F[$+B+4]=l.x,F[$+B+5]=l.y,F[$+B+6]=l.z,F[$+B+7]=0),_===!0&&(l.fromBufferAttribute(at,U),F[$+B+8]=l.x,F[$+B+9]=l.y,F[$+B+10]=l.z,F[$+B+11]=at.itemSize===4?l.w:1)}}g={count:v,texture:E,size:new Ae(H,P)},s.set(p,g),p.addEventListener("dispose",J)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let M=0;for(let _=0;_<h.length;_++)M+=h[_];const w=p.morphTargetsRelative?1:1-M;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",h)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function $T(r,t,i,s,l){let c=new WeakMap;function f(h){const S=l.render.frame,v=h.geometry,g=t.get(h,v);if(c.get(g)!==S&&(t.update(g),c.set(g,S)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==S&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,S))),h.isSkinnedMesh){const y=h.skeleton;c.get(y)!==S&&(y.update(),c.set(y,S))}return g}function p(){c=new WeakMap}function m(h){const S=h.target;S.removeEventListener("dispose",m),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:f,dispose:p}}const tA={[Jv]:"LINEAR_TONE_MAPPING",[$v]:"REINHARD_TONE_MAPPING",[tx]:"CINEON_TONE_MAPPING",[Ap]:"ACES_FILMIC_TONE_MAPPING",[nx]:"AGX_TONE_MAPPING",[ix]:"NEUTRAL_TONE_MAPPING",[ex]:"CUSTOM_TONE_MAPPING"};function eA(r,t,i,s,l){const c=new Zi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Zi(t,i,{type:Aa,depthBuffer:!1,stencilBuffer:!1}),p=new Fn;p.setAttribute("position",new ui([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new ui([0,2,0,0,2,0],2));const m=new jb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Qi(p,m),S=new Ax(-1,1,1,-1,0,1);let v=null,g=null,y=!1,M,w=null,_=[],x=!1;this.setSize=function(T,D){c.setSize(T,D),f.setSize(T,D);for(let R=0;R<_.length;R++){const H=_[R];H.setSize&&H.setSize(T,D)}},this.setEffects=function(T){_=T,x=_.length>0&&_[0].isRenderPass===!0;const D=c.width,R=c.height;for(let H=0;H<_.length;H++){const P=_[H];P.setSize&&P.setSize(D,R)}},this.begin=function(T,D){if(y||T.toneMapping===Yi&&_.length===0)return!1;if(w=D,D!==null){const R=D.width,H=D.height;(c.width!==R||c.height!==H)&&this.setSize(R,H)}return x===!1&&T.setRenderTarget(c),M=T.toneMapping,T.toneMapping=Yi,!0},this.hasRenderPass=function(){return x},this.end=function(T,D){T.toneMapping=M,y=!0;let R=c,H=f;for(let P=0;P<_.length;P++){const F=_[P];if(F.enabled!==!1&&(F.render(T,H,R,D),F.needsSwap!==!1)){const E=R;R=H,H=E}}if(v!==T.outputColorSpace||g!==T.toneMapping){v=T.outputColorSpace,g=T.toneMapping,m.defines={},Le.getTransfer(v)===ke&&(m.defines.SRGB_TRANSFER="");const P=tA[g];P&&(m.defines[P]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=R.texture,T.setRenderTarget(w),T.render(h,S),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const Cx=new Pn,yp=new ml(1,1),Dx=new hx,Nx=new _b,Ux=new yx,Tv=[],Av=[],Rv=new Float32Array(16),wv=new Float32Array(9),Cv=new Float32Array(4);function io(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Tv[l];if(c===void 0&&(c=new Float32Array(l),Tv[l]=c),t!==0){s.toArray(c,0);for(let f=1,p=0;f!==t;++f)p+=i,r[f].toArray(c,p)}return c}function Sn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function yn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function wu(r,t){let i=Av[t];i===void 0&&(i=new Int32Array(t),Av[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function nA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function iA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2fv(this.addr,t),yn(i,t)}}function aA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Sn(i,t))return;r.uniform3fv(this.addr,t),yn(i,t)}}function sA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4fv(this.addr,t),yn(i,t)}}function rA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;Cv.set(s),r.uniformMatrix2fv(this.addr,!1,Cv),yn(i,s)}}function oA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;wv.set(s),r.uniformMatrix3fv(this.addr,!1,wv),yn(i,s)}}function lA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(Sn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(Sn(i,s))return;Rv.set(s),r.uniformMatrix4fv(this.addr,!1,Rv),yn(i,s)}}function cA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function uA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2iv(this.addr,t),yn(i,t)}}function fA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;r.uniform3iv(this.addr,t),yn(i,t)}}function dA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4iv(this.addr,t),yn(i,t)}}function hA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function pA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Sn(i,t))return;r.uniform2uiv(this.addr,t),yn(i,t)}}function mA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Sn(i,t))return;r.uniform3uiv(this.addr,t),yn(i,t)}}function gA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Sn(i,t))return;r.uniform4uiv(this.addr,t),yn(i,t)}}function _A(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(yp.compareFunction=i.isReversedDepthBuffer()?Op:Lp,c=yp):c=Cx,i.setTexture2D(t||c,l)}function vA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Nx,l)}function xA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Ux,l)}function SA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Dx,l)}function yA(r){switch(r){case 5126:return nA;case 35664:return iA;case 35665:return aA;case 35666:return sA;case 35674:return rA;case 35675:return oA;case 35676:return lA;case 5124:case 35670:return cA;case 35667:case 35671:return uA;case 35668:case 35672:return fA;case 35669:case 35673:return dA;case 5125:return hA;case 36294:return pA;case 36295:return mA;case 36296:return gA;case 35678:case 36198:case 36298:case 36306:case 35682:return _A;case 35679:case 36299:case 36307:return vA;case 35680:case 36300:case 36308:case 36293:return xA;case 36289:case 36303:case 36311:case 36292:return SA}}function MA(r,t){r.uniform1fv(this.addr,t)}function bA(r,t){const i=io(t,this.size,2);r.uniform2fv(this.addr,i)}function EA(r,t){const i=io(t,this.size,3);r.uniform3fv(this.addr,i)}function TA(r,t){const i=io(t,this.size,4);r.uniform4fv(this.addr,i)}function AA(r,t){const i=io(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function RA(r,t){const i=io(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function wA(r,t){const i=io(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function CA(r,t){r.uniform1iv(this.addr,t)}function DA(r,t){r.uniform2iv(this.addr,t)}function NA(r,t){r.uniform3iv(this.addr,t)}function UA(r,t){r.uniform4iv(this.addr,t)}function LA(r,t){r.uniform1uiv(this.addr,t)}function OA(r,t){r.uniform2uiv(this.addr,t)}function PA(r,t){r.uniform3uiv(this.addr,t)}function FA(r,t){r.uniform4uiv(this.addr,t)}function BA(r,t,i){const s=this.cache,l=t.length,c=wu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=yp:f=Cx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||f,c[p])}function IA(r,t,i){const s=this.cache,l=t.length,c=wu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Nx,c[f])}function zA(r,t,i){const s=this.cache,l=t.length,c=wu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Ux,c[f])}function HA(r,t,i){const s=this.cache,l=t.length,c=wu(i,l);Sn(s,c)||(r.uniform1iv(this.addr,c),yn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Dx,c[f])}function GA(r){switch(r){case 5126:return MA;case 35664:return bA;case 35665:return EA;case 35666:return TA;case 35674:return AA;case 35675:return RA;case 35676:return wA;case 5124:case 35670:return CA;case 35667:case 35671:return DA;case 35668:case 35672:return NA;case 35669:case 35673:return UA;case 5125:return LA;case 36294:return OA;case 36295:return PA;case 36296:return FA;case 35678:case 36198:case 36298:case 36306:case 35682:return BA;case 35679:case 36299:case 36307:return IA;case 35680:case 36300:case 36308:case 36293:return zA;case 36289:case 36303:case 36311:case 36292:return HA}}class VA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=yA(i.type)}}class kA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=GA(i.type)}}class jA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const Mh=/(\w+)(\])?(\[|\.)?/g;function Dv(r,t){r.seq.push(t),r.map[t.id]=t}function XA(r,t,i){const s=r.name,l=s.length;for(Mh.lastIndex=0;;){const c=Mh.exec(s),f=Mh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&f+2===l){Dv(i,h===void 0?new VA(p,r,t):new kA(p,r,t));break}else{let v=i.map[p];v===void 0&&(v=new jA(p),Dv(i,v)),i=v}}}class pu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=t.getActiveUniform(i,f),m=t.getUniformLocation(i,p.name);XA(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function Nv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const WA=37297;let qA=0;function YA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===t?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const Uv=new ye;function ZA(r){Le._getMatrix(Uv,Le.workingColorSpace,r);const t=`mat3( ${Uv.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(r)){case mu:return[t,"LinearTransferOETF"];case ke:return[t,"sRGBTransferOETF"];default:return ue("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Lv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+YA(r.getShaderSource(t),p)}else return c}function KA(r,t){const i=ZA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const QA={[Jv]:"Linear",[$v]:"Reinhard",[tx]:"Cineon",[Ap]:"ACESFilmic",[nx]:"AgX",[ix]:"Neutral",[ex]:"Custom"};function JA(r,t){const i=QA[t];return i===void 0?(ue("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const lu=new ut;function $A(){Le.getLuminanceCoefficients(lu);const r=lu.x.toFixed(4),t=lu.y.toFixed(4),i=lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fl).join(`
`)}function eR(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function nR(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:p}}return i}function fl(r){return r!==""}function Ov(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mp(r){return r.replace(iR,sR)}const aR=new Map;function sR(r,t){let i=Me[t];if(i===void 0){const s=aR.get(t);if(s!==void 0)i=Me[s],ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Mp(i)}const rR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fv(r){return r.replace(rR,oR)}function oR(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Bv(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}const lR={[cu]:"SHADOWMAP_TYPE_PCF",[ul]:"SHADOWMAP_TYPE_VSM"};function cR(r){return lR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uR={[js]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE",[Au]:"ENVMAP_TYPE_CUBE_UV"};function fR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":uR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const dR={[Qr]:"ENVMAP_MODE_REFRACTION"};function hR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":dR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pR={[Qv]:"ENVMAP_BLENDING_MULTIPLY",[ZM]:"ENVMAP_BLENDING_MIX",[KM]:"ENVMAP_BLENDING_ADD"};function mR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":pR[r.combine]||"ENVMAP_BLENDING_NONE"}function gR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function _R(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=cR(i),h=fR(i),S=hR(i),v=mR(i),g=gR(i),y=tR(i),M=eR(c),w=l.createProgram();let _,x,T=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(fl).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(fl).join(`
`),x.length>0&&(x+=`
`)):(_=[Bv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fl).join(`
`),x=[Bv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+S:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?Me.tonemapping_pars_fragment:"",i.toneMapping!==Yi?JA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,KA("linearToOutputTexel",i.outputColorSpace),$A(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(fl).join(`
`)),f=Mp(f),f=Ov(f,i),f=Pv(f,i),p=Mp(p),p=Ov(p,i),p=Pv(p,i),f=Fv(f),p=Fv(p),i.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",i.glslVersion===k_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===k_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=T+_+f,R=T+x+p,H=Nv(l,l.VERTEX_SHADER,D),P=Nv(l,l.FRAGMENT_SHADER,R);l.attachShader(w,H),l.attachShader(w,P),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function F(V){if(r.debug.checkShaderErrors){const k=l.getProgramInfoLog(w)||"",q=l.getShaderInfoLog(H)||"",at=l.getShaderInfoLog(P)||"",$=k.trim(),U=q.trim(),B=at.trim();let nt=!0,ot=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(nt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,H,P);else{const St=Lv(l,H,"vertex"),z=Lv(l,P,"fragment");Ue("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+$+`
`+St+`
`+z)}else $!==""?ue("WebGLProgram: Program Info Log:",$):(U===""||B==="")&&(ot=!1);ot&&(V.diagnostics={runnable:nt,programLog:$,vertexShader:{log:U,prefix:_},fragmentShader:{log:B,prefix:x}})}l.deleteShader(H),l.deleteShader(P),E=new pu(l,w),O=nR(l,w)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let O;this.getAttributes=function(){return O===void 0&&F(this),O};let J=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=l.getProgramParameter(w,WA)),J},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=qA++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=P,this}let vR=0;class xR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new SR(t),i.set(t,s)),s}}class SR{constructor(t){this.id=vR++,this.code=t,this.usedTimes=0}}function yR(r,t,i,s,l,c){const f=new px,p=new xR,m=new Set,h=[],S=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return m.add(E),E===0?"uv":`uv${E}`}function w(E,O,J,V,k){const q=V.fog,at=k.geometry,$=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?V.environment:null,U=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,B=t.get(E.envMap||$,U),nt=B&&B.mapping===Au?B.image.height:null,ot=y[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&ue("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const St=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,z=St!==void 0?St.length:0;let I=0;at.morphAttributes.position!==void 0&&(I=1),at.morphAttributes.normal!==void 0&&(I=2),at.morphAttributes.color!==void 0&&(I=3);let W,lt,_t,K;if(ot){const Ne=ki[ot];W=Ne.vertexShader,lt=Ne.fragmentShader}else W=E.vertexShader,lt=E.fragmentShader,p.update(E),_t=p.getVertexShaderID(E),K=p.getFragmentShaderID(E);const st=r.getRenderTarget(),mt=r.state.buffers.depth.getReversed(),Y=k.isInstancedMesh===!0,At=k.isBatchedMesh===!0,Ct=!!E.map,It=!!E.matcap,Pt=!!B,Ut=!!E.aoMap,kt=!!E.lightMap,Wt=!!E.bumpMap,se=!!E.normalMap,j=!!E.displacementMap,he=!!E.emissiveMap,le=!!E.metalnessMap,pe=!!E.roughnessMap,qt=E.anisotropy>0,G=E.clearcoat>0,A=E.dispersion>0,tt=E.iridescence>0,yt=E.sheen>0,Tt=E.transmission>0,vt=qt&&!!E.anisotropyMap,Zt=G&&!!E.clearcoatMap,Lt=G&&!!E.clearcoatNormalMap,ee=G&&!!E.clearcoatRoughnessMap,ae=tt&&!!E.iridescenceMap,Dt=tt&&!!E.iridescenceThicknessMap,wt=yt&&!!E.sheenColorMap,Gt=yt&&!!E.sheenRoughnessMap,zt=!!E.specularMap,jt=!!E.specularColorMap,ve=!!E.specularIntensityMap,it=Tt&&!!E.transmissionMap,Ft=Tt&&!!E.thicknessMap,Ot=!!E.gradientMap,Xt=!!E.alphaMap,Nt=E.alphaTest>0,Mt=!!E.alphaHash,Kt=!!E.extensions;let fe=Yi;E.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(fe=r.toneMapping);const He={shaderID:ot,shaderType:E.type,shaderName:E.name,vertexShader:W,fragmentShader:lt,defines:E.defines,customVertexShaderID:_t,customFragmentShaderID:K,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:At,batchingColor:At&&k._colorsTexture!==null,instancing:Y,instancingColor:Y&&k.instanceColor!==null,instancingMorph:Y&&k.morphTexture!==null,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:$r,alphaToCoverage:!!E.alphaToCoverage,map:Ct,matcap:It,envMap:Pt,envMapMode:Pt&&B.mapping,envMapCubeUVHeight:nt,aoMap:Ut,lightMap:kt,bumpMap:Wt,normalMap:se,displacementMap:j,emissiveMap:he,normalMapObjectSpace:se&&E.normalMapType===tb,normalMapTangentSpace:se&&E.normalMapType===$M,metalnessMap:le,roughnessMap:pe,anisotropy:qt,anisotropyMap:vt,clearcoat:G,clearcoatMap:Zt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:ee,dispersion:A,iridescence:tt,iridescenceMap:ae,iridescenceThicknessMap:Dt,sheen:yt,sheenColorMap:wt,sheenRoughnessMap:Gt,specularMap:zt,specularColorMap:jt,specularIntensityMap:ve,transmission:Tt,transmissionMap:it,thicknessMap:Ft,gradientMap:Ot,opaque:E.transparent===!1&&E.blending===Yr&&E.alphaToCoverage===!1,alphaMap:Xt,alphaTest:Nt,alphaHash:Mt,combine:E.combine,mapUv:Ct&&M(E.map.channel),aoMapUv:Ut&&M(E.aoMap.channel),lightMapUv:kt&&M(E.lightMap.channel),bumpMapUv:Wt&&M(E.bumpMap.channel),normalMapUv:se&&M(E.normalMap.channel),displacementMapUv:j&&M(E.displacementMap.channel),emissiveMapUv:he&&M(E.emissiveMap.channel),metalnessMapUv:le&&M(E.metalnessMap.channel),roughnessMapUv:pe&&M(E.roughnessMap.channel),anisotropyMapUv:vt&&M(E.anisotropyMap.channel),clearcoatMapUv:Zt&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&M(E.sheenRoughnessMap.channel),specularMapUv:zt&&M(E.specularMap.channel),specularColorMapUv:jt&&M(E.specularColorMap.channel),specularIntensityMapUv:ve&&M(E.specularIntensityMap.channel),transmissionMapUv:it&&M(E.transmissionMap.channel),thicknessMapUv:Ft&&M(E.thicknessMap.channel),alphaMapUv:Xt&&M(E.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(se||qt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!at.attributes.uv&&(Ct||Xt),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||at.attributes.normal===void 0&&se===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:mt,skinning:k.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:I,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&J.length>0,shadowMapType:r.shadowMap.type,toneMapping:fe,decodeVideoTexture:Ct&&E.map.isVideoTexture===!0&&Le.getTransfer(E.map.colorSpace)===ke,decodeVideoTextureEmissive:he&&E.emissiveMap.isVideoTexture===!0&&Le.getTransfer(E.emissiveMap.colorSpace)===ke,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ji,flipSided:E.side===Kn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Kt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&E.extensions.multiDraw===!0||At)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return He.vertexUv1s=m.has(1),He.vertexUv2s=m.has(2),He.vertexUv3s=m.has(3),m.clear(),He}function _(E){const O=[];if(E.shaderID?O.push(E.shaderID):(O.push(E.customVertexShaderID),O.push(E.customFragmentShaderID)),E.defines!==void 0)for(const J in E.defines)O.push(J),O.push(E.defines[J]);return E.isRawShaderMaterial===!1&&(x(O,E),T(O,E),O.push(r.outputColorSpace)),O.push(E.customProgramCacheKey),O.join()}function x(E,O){E.push(O.precision),E.push(O.outputColorSpace),E.push(O.envMapMode),E.push(O.envMapCubeUVHeight),E.push(O.mapUv),E.push(O.alphaMapUv),E.push(O.lightMapUv),E.push(O.aoMapUv),E.push(O.bumpMapUv),E.push(O.normalMapUv),E.push(O.displacementMapUv),E.push(O.emissiveMapUv),E.push(O.metalnessMapUv),E.push(O.roughnessMapUv),E.push(O.anisotropyMapUv),E.push(O.clearcoatMapUv),E.push(O.clearcoatNormalMapUv),E.push(O.clearcoatRoughnessMapUv),E.push(O.iridescenceMapUv),E.push(O.iridescenceThicknessMapUv),E.push(O.sheenColorMapUv),E.push(O.sheenRoughnessMapUv),E.push(O.specularMapUv),E.push(O.specularColorMapUv),E.push(O.specularIntensityMapUv),E.push(O.transmissionMapUv),E.push(O.thicknessMapUv),E.push(O.combine),E.push(O.fogExp2),E.push(O.sizeAttenuation),E.push(O.morphTargetsCount),E.push(O.morphAttributeCount),E.push(O.numDirLights),E.push(O.numPointLights),E.push(O.numSpotLights),E.push(O.numSpotLightMaps),E.push(O.numHemiLights),E.push(O.numRectAreaLights),E.push(O.numDirLightShadows),E.push(O.numPointLightShadows),E.push(O.numSpotLightShadows),E.push(O.numSpotLightShadowsWithMaps),E.push(O.numLightProbes),E.push(O.shadowMapType),E.push(O.toneMapping),E.push(O.numClippingPlanes),E.push(O.numClipIntersection),E.push(O.depthPacking)}function T(E,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),E.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),E.push(f.mask)}function D(E){const O=y[E.type];let J;if(O){const V=ki[O];J=Gb.clone(V.uniforms)}else J=E.uniforms;return J}function R(E,O){let J=S.get(O);return J!==void 0?++J.usedTimes:(J=new _R(r,O,E,l),h.push(J),S.set(O,J)),J}function H(E){if(--E.usedTimes===0){const O=h.indexOf(E);h[O]=h[h.length-1],h.pop(),S.delete(E.cacheKey),E.destroy()}}function P(E){p.remove(E)}function F(){p.dispose()}return{getParameters:w,getProgramCacheKey:_,getUniforms:D,acquireProgram:R,releaseProgram:H,releaseShaderCache:P,programs:h,dispose:F}}function MR(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,m){r.get(f)[p]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function bR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function Iv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function zv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function p(g,y,M,w,_,x){let T=r[t];return T===void 0?(T={id:g.id,object:g,geometry:y,material:M,materialVariant:f(g),groupOrder:w,renderOrder:g.renderOrder,z:_,group:x},r[t]=T):(T.id=g.id,T.object=g,T.geometry=y,T.material=M,T.materialVariant=f(g),T.groupOrder=w,T.renderOrder=g.renderOrder,T.z=_,T.group=x),t++,T}function m(g,y,M,w,_,x){const T=p(g,y,M,w,_,x);M.transmission>0?s.push(T):M.transparent===!0?l.push(T):i.push(T)}function h(g,y,M,w,_,x){const T=p(g,y,M,w,_,x);M.transmission>0?s.unshift(T):M.transparent===!0?l.unshift(T):i.unshift(T)}function S(g,y){i.length>1&&i.sort(g||bR),s.length>1&&s.sort(y||Iv),l.length>1&&l.sort(y||Iv)}function v(){for(let g=t,y=r.length;g<y;g++){const M=r[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:v,sort:S}}function ER(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new zv,r.set(s,[f])):l>=c.length?(f=new zv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function TR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ut,color:new be};break;case"SpotLight":i={position:new ut,direction:new ut,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ut,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ut,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new ut,halfWidth:new ut,halfHeight:new ut};break}return r[t.id]=i,i}}}function AR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let RR=0;function wR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function CR(r){const t=new TR,i=AR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new ut);const l=new ut,c=new Je,f=new Je;function p(h){let S=0,v=0,g=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let y=0,M=0,w=0,_=0,x=0,T=0,D=0,R=0,H=0,P=0,F=0;h.sort(wR);for(let O=0,J=h.length;O<J;O++){const V=h[O],k=V.color,q=V.intensity,at=V.distance;let $=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Jr?$=V.shadow.map.texture:$=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)S+=k.r*q,v+=k.g*q,g+=k.b*q;else if(V.isLightProbe){for(let U=0;U<9;U++)s.probe[U].addScaledVector(V.sh.coefficients[U],q);F++}else if(V.isDirectionalLight){const U=t.get(V);if(U.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const B=V.shadow,nt=i.get(V);nt.shadowIntensity=B.intensity,nt.shadowBias=B.bias,nt.shadowNormalBias=B.normalBias,nt.shadowRadius=B.radius,nt.shadowMapSize=B.mapSize,s.directionalShadow[y]=nt,s.directionalShadowMap[y]=$,s.directionalShadowMatrix[y]=V.shadow.matrix,T++}s.directional[y]=U,y++}else if(V.isSpotLight){const U=t.get(V);U.position.setFromMatrixPosition(V.matrixWorld),U.color.copy(k).multiplyScalar(q),U.distance=at,U.coneCos=Math.cos(V.angle),U.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),U.decay=V.decay,s.spot[w]=U;const B=V.shadow;if(V.map&&(s.spotLightMap[H]=V.map,H++,B.updateMatrices(V),V.castShadow&&P++),s.spotLightMatrix[w]=B.matrix,V.castShadow){const nt=i.get(V);nt.shadowIntensity=B.intensity,nt.shadowBias=B.bias,nt.shadowNormalBias=B.normalBias,nt.shadowRadius=B.radius,nt.shadowMapSize=B.mapSize,s.spotShadow[w]=nt,s.spotShadowMap[w]=$,R++}w++}else if(V.isRectAreaLight){const U=t.get(V);U.color.copy(k).multiplyScalar(q),U.halfWidth.set(V.width*.5,0,0),U.halfHeight.set(0,V.height*.5,0),s.rectArea[_]=U,_++}else if(V.isPointLight){const U=t.get(V);if(U.color.copy(V.color).multiplyScalar(V.intensity),U.distance=V.distance,U.decay=V.decay,V.castShadow){const B=V.shadow,nt=i.get(V);nt.shadowIntensity=B.intensity,nt.shadowBias=B.bias,nt.shadowNormalBias=B.normalBias,nt.shadowRadius=B.radius,nt.shadowMapSize=B.mapSize,nt.shadowCameraNear=B.camera.near,nt.shadowCameraFar=B.camera.far,s.pointShadow[M]=nt,s.pointShadowMap[M]=$,s.pointShadowMatrix[M]=V.shadow.matrix,D++}s.point[M]=U,M++}else if(V.isHemisphereLight){const U=t.get(V);U.skyColor.copy(V.color).multiplyScalar(q),U.groundColor.copy(V.groundColor).multiplyScalar(q),s.hemi[x]=U,x++}}_>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Vt.LTC_FLOAT_1,s.rectAreaLTC2=Vt.LTC_FLOAT_2):(s.rectAreaLTC1=Vt.LTC_HALF_1,s.rectAreaLTC2=Vt.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=v,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==y||E.pointLength!==M||E.spotLength!==w||E.rectAreaLength!==_||E.hemiLength!==x||E.numDirectionalShadows!==T||E.numPointShadows!==D||E.numSpotShadows!==R||E.numSpotMaps!==H||E.numLightProbes!==F)&&(s.directional.length=y,s.spot.length=w,s.rectArea.length=_,s.point.length=M,s.hemi.length=x,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=R+H-P,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=F,E.directionalLength=y,E.pointLength=M,E.spotLength=w,E.rectAreaLength=_,E.hemiLength=x,E.numDirectionalShadows=T,E.numPointShadows=D,E.numSpotShadows=R,E.numSpotMaps=H,E.numLightProbes=F,s.version=RR++)}function m(h,S){let v=0,g=0,y=0,M=0,w=0;const _=S.matrixWorldInverse;for(let x=0,T=h.length;x<T;x++){const D=h[x];if(D.isDirectionalLight){const R=s.directional[v];R.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(_),v++}else if(D.isSpotLight){const R=s.spot[y];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(_),R.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(_),y++}else if(D.isRectAreaLight){const R=s.rectArea[M];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(_),f.identity(),c.copy(D.matrixWorld),c.premultiply(_),f.extractRotation(c),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),M++}else if(D.isPointLight){const R=s.point[g];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(_),g++}else if(D.isHemisphereLight){const R=s.hemi[w];R.direction.setFromMatrixPosition(D.matrixWorld),R.direction.transformDirection(_),w++}}}return{setup:p,setupView:m,state:s}}function Hv(r){const t=new CR(r),i=[],s=[];function l(S){h.camera=S,i.length=0,s.length=0}function c(S){i.push(S)}function f(S){s.push(S)}function p(){t.setup(i)}function m(S){t.setupView(i,S)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:f}}function DR(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let p;return f===void 0?(p=new Hv(r),t.set(l,[p])):c>=f.length?(p=new Hv(r),f.push(p)):p=f[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const NR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UR=`uniform sampler2D shadow_pass;
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
}`,LR=[new ut(1,0,0),new ut(-1,0,0),new ut(0,1,0),new ut(0,-1,0),new ut(0,0,1),new ut(0,0,-1)],OR=[new ut(0,-1,0),new ut(0,-1,0),new ut(0,0,1),new ut(0,0,-1),new ut(0,-1,0),new ut(0,-1,0)],Gv=new Je,ol=new ut,bh=new ut;function PR(r,t,i){let s=new zp;const l=new Ae,c=new Ae,f=new sn,p=new Xb,m=new Wb,h={},S=i.maxTextureSize,v={[ds]:Kn,[Kn]:ds,[ji]:ji},g=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:NR,fragmentShader:UR}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const M=new Fn;M.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Qi(M,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let x=this.type;this.render=function(P,F,E){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;this.type===DM&&(ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=cu);const O=r.getRenderTarget(),J=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),k=r.state;k.setBlending(Ea),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const q=x!==this.type;q&&F.traverse(function(at){at.material&&(Array.isArray(at.material)?at.material.forEach($=>$.needsUpdate=!0):at.material.needsUpdate=!0)});for(let at=0,$=P.length;at<$;at++){const U=P[at],B=U.shadow;if(B===void 0){ue("WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const nt=B.getFrameExtents();l.multiply(nt),c.copy(B.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/nt.x),l.x=c.x*nt.x,B.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/nt.y),l.y=c.y*nt.y,B.mapSize.y=c.y));const ot=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=ot,B.map===null||q===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ul){if(U.isPointLight){ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Zi(l.x,l.y,{format:Jr,type:Aa,minFilter:On,magFilter:On,generateMipmaps:!1}),B.map.texture.name=U.name+".shadowMap",B.map.depthTexture=new ml(l.x,l.y,Wi),B.map.depthTexture.name=U.name+".shadowMapDepth",B.map.depthTexture.format=Ra,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=wn,B.map.depthTexture.magFilter=wn}else U.isPointLight?(B.map=new wx(l.x),B.map.depthTexture=new zb(l.x,Ki)):(B.map=new Zi(l.x,l.y),B.map.depthTexture=new ml(l.x,l.y,Ki)),B.map.depthTexture.name=U.name+".shadowMap",B.map.depthTexture.format=Ra,this.type===cu?(B.map.depthTexture.compareFunction=ot?Op:Lp,B.map.depthTexture.minFilter=On,B.map.depthTexture.magFilter=On):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=wn,B.map.depthTexture.magFilter=wn);B.camera.updateProjectionMatrix()}const St=B.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<St;z++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,z),r.clear();else{z===0&&(r.setRenderTarget(B.map),r.clear());const I=B.getViewport(z);f.set(c.x*I.x,c.y*I.y,c.x*I.z,c.y*I.w),k.viewport(f)}if(U.isPointLight){const I=B.camera,W=B.matrix,lt=U.distance||I.far;lt!==I.far&&(I.far=lt,I.updateProjectionMatrix()),ol.setFromMatrixPosition(U.matrixWorld),I.position.copy(ol),bh.copy(I.position),bh.add(LR[z]),I.up.copy(OR[z]),I.lookAt(bh),I.updateMatrixWorld(),W.makeTranslation(-ol.x,-ol.y,-ol.z),Gv.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Gv,I.coordinateSystem,I.reversedDepth)}else B.updateMatrices(U);s=B.getFrustum(),R(F,E,B.camera,U,this.type)}B.isPointLightShadow!==!0&&this.type===ul&&T(B,E),B.needsUpdate=!1}x=this.type,_.needsUpdate=!1,r.setRenderTarget(O,J,V)};function T(P,F){const E=t.update(w);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Zi(l.x,l.y,{format:Jr,type:Aa})),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(F,null,E,g,w,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(F,null,E,y,w,null)}function D(P,F,E,O){let J=null;const V=E.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(V!==void 0)J=V;else if(J=E.isPointLight===!0?m:p,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const k=J.uuid,q=F.uuid;let at=h[k];at===void 0&&(at={},h[k]=at);let $=at[q];$===void 0&&($=J.clone(),at[q]=$,F.addEventListener("dispose",H)),J=$}if(J.visible=F.visible,J.wireframe=F.wireframe,O===ul?J.side=F.shadowSide!==null?F.shadowSide:F.side:J.side=F.shadowSide!==null?F.shadowSide:v[F.side],J.alphaMap=F.alphaMap,J.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,J.map=F.map,J.clipShadows=F.clipShadows,J.clippingPlanes=F.clippingPlanes,J.clipIntersection=F.clipIntersection,J.displacementMap=F.displacementMap,J.displacementScale=F.displacementScale,J.displacementBias=F.displacementBias,J.wireframeLinewidth=F.wireframeLinewidth,J.linewidth=F.linewidth,E.isPointLight===!0&&J.isMeshDistanceMaterial===!0){const k=r.properties.get(J);k.light=E}return J}function R(P,F,E,O,J){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&J===ul)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,P.matrixWorld);const q=t.update(P),at=P.material;if(Array.isArray(at)){const $=q.groups;for(let U=0,B=$.length;U<B;U++){const nt=$[U],ot=at[nt.materialIndex];if(ot&&ot.visible){const St=D(P,ot,O,J);P.onBeforeShadow(r,P,F,E,q,St,nt),r.renderBufferDirect(E,null,q,St,P,nt),P.onAfterShadow(r,P,F,E,q,St,nt)}}}else if(at.visible){const $=D(P,at,O,J);P.onBeforeShadow(r,P,F,E,q,$,null),r.renderBufferDirect(E,null,q,$,P,null),P.onAfterShadow(r,P,F,E,q,$,null)}}const k=P.children;for(let q=0,at=k.length;q<at;q++)R(k[q],F,E,O,J)}function H(P){P.target.removeEventListener("dispose",H);for(const E in h){const O=h[E],J=P.target.uuid;J in O&&(O[J].dispose(),delete O[J])}}}function FR(r,t){function i(){let it=!1;const Ft=new sn;let Ot=null;const Xt=new sn(0,0,0,0);return{setMask:function(Nt){Ot!==Nt&&!it&&(r.colorMask(Nt,Nt,Nt,Nt),Ot=Nt)},setLocked:function(Nt){it=Nt},setClear:function(Nt,Mt,Kt,fe,He){He===!0&&(Nt*=fe,Mt*=fe,Kt*=fe),Ft.set(Nt,Mt,Kt,fe),Xt.equals(Ft)===!1&&(r.clearColor(Nt,Mt,Kt,fe),Xt.copy(Ft))},reset:function(){it=!1,Ot=null,Xt.set(-1,0,0,0)}}}function s(){let it=!1,Ft=!1,Ot=null,Xt=null,Nt=null;return{setReversed:function(Mt){if(Ft!==Mt){const Kt=t.get("EXT_clip_control");Mt?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT),Ft=Mt;const fe=Nt;Nt=null,this.setClear(fe)}},getReversed:function(){return Ft},setTest:function(Mt){Mt?st(r.DEPTH_TEST):mt(r.DEPTH_TEST)},setMask:function(Mt){Ot!==Mt&&!it&&(r.depthMask(Mt),Ot=Mt)},setFunc:function(Mt){if(Ft&&(Mt=ub[Mt]),Xt!==Mt){switch(Mt){case Dh:r.depthFunc(r.NEVER);break;case Nh:r.depthFunc(r.ALWAYS);break;case Uh:r.depthFunc(r.LESS);break;case Kr:r.depthFunc(r.LEQUAL);break;case Lh:r.depthFunc(r.EQUAL);break;case Oh:r.depthFunc(r.GEQUAL);break;case Ph:r.depthFunc(r.GREATER);break;case Fh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Xt=Mt}},setLocked:function(Mt){it=Mt},setClear:function(Mt){Nt!==Mt&&(Nt=Mt,Ft&&(Mt=1-Mt),r.clearDepth(Mt))},reset:function(){it=!1,Ot=null,Xt=null,Nt=null,Ft=!1}}}function l(){let it=!1,Ft=null,Ot=null,Xt=null,Nt=null,Mt=null,Kt=null,fe=null,He=null;return{setTest:function(Ne){it||(Ne?st(r.STENCIL_TEST):mt(r.STENCIL_TEST))},setMask:function(Ne){Ft!==Ne&&!it&&(r.stencilMask(Ne),Ft=Ne)},setFunc:function(Ne,Bn,Mi){(Ot!==Ne||Xt!==Bn||Nt!==Mi)&&(r.stencilFunc(Ne,Bn,Mi),Ot=Ne,Xt=Bn,Nt=Mi)},setOp:function(Ne,Bn,Mi){(Mt!==Ne||Kt!==Bn||fe!==Mi)&&(r.stencilOp(Ne,Bn,Mi),Mt=Ne,Kt=Bn,fe=Mi)},setLocked:function(Ne){it=Ne},setClear:function(Ne){He!==Ne&&(r.clearStencil(Ne),He=Ne)},reset:function(){it=!1,Ft=null,Ot=null,Xt=null,Nt=null,Mt=null,Kt=null,fe=null,He=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,h=new WeakMap;let S={},v={},g=new WeakMap,y=[],M=null,w=!1,_=null,x=null,T=null,D=null,R=null,H=null,P=null,F=new be(0,0,0),E=0,O=!1,J=null,V=null,k=null,q=null,at=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,B=0;const nt=r.getParameter(r.VERSION);nt.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(nt)[1]),U=B>=1):nt.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),U=B>=2);let ot=null,St={};const z=r.getParameter(r.SCISSOR_BOX),I=r.getParameter(r.VIEWPORT),W=new sn().fromArray(z),lt=new sn().fromArray(I);function _t(it,Ft,Ot,Xt){const Nt=new Uint8Array(4),Mt=r.createTexture();r.bindTexture(it,Mt),r.texParameteri(it,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(it,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Kt=0;Kt<Ot;Kt++)it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?r.texImage3D(Ft,0,r.RGBA,1,1,Xt,0,r.RGBA,r.UNSIGNED_BYTE,Nt):r.texImage2D(Ft+Kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Nt);return Mt}const K={};K[r.TEXTURE_2D]=_t(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=_t(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=_t(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=_t(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),st(r.DEPTH_TEST),f.setFunc(Kr),Wt(!1),se(I_),st(r.CULL_FACE),Ut(Ea);function st(it){S[it]!==!0&&(r.enable(it),S[it]=!0)}function mt(it){S[it]!==!1&&(r.disable(it),S[it]=!1)}function Y(it,Ft){return v[it]!==Ft?(r.bindFramebuffer(it,Ft),v[it]=Ft,it===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ft),it===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ft),!0):!1}function At(it,Ft){let Ot=y,Xt=!1;if(it){Ot=g.get(Ft),Ot===void 0&&(Ot=[],g.set(Ft,Ot));const Nt=it.textures;if(Ot.length!==Nt.length||Ot[0]!==r.COLOR_ATTACHMENT0){for(let Mt=0,Kt=Nt.length;Mt<Kt;Mt++)Ot[Mt]=r.COLOR_ATTACHMENT0+Mt;Ot.length=Nt.length,Xt=!0}}else Ot[0]!==r.BACK&&(Ot[0]=r.BACK,Xt=!0);Xt&&r.drawBuffers(Ot)}function Ct(it){return M!==it?(r.useProgram(it),M=it,!0):!1}const It={[zs]:r.FUNC_ADD,[UM]:r.FUNC_SUBTRACT,[LM]:r.FUNC_REVERSE_SUBTRACT};It[OM]=r.MIN,It[PM]=r.MAX;const Pt={[FM]:r.ZERO,[BM]:r.ONE,[IM]:r.SRC_COLOR,[wh]:r.SRC_ALPHA,[jM]:r.SRC_ALPHA_SATURATE,[VM]:r.DST_COLOR,[HM]:r.DST_ALPHA,[zM]:r.ONE_MINUS_SRC_COLOR,[Ch]:r.ONE_MINUS_SRC_ALPHA,[kM]:r.ONE_MINUS_DST_COLOR,[GM]:r.ONE_MINUS_DST_ALPHA,[XM]:r.CONSTANT_COLOR,[WM]:r.ONE_MINUS_CONSTANT_COLOR,[qM]:r.CONSTANT_ALPHA,[YM]:r.ONE_MINUS_CONSTANT_ALPHA};function Ut(it,Ft,Ot,Xt,Nt,Mt,Kt,fe,He,Ne){if(it===Ea){w===!0&&(mt(r.BLEND),w=!1);return}if(w===!1&&(st(r.BLEND),w=!0),it!==NM){if(it!==_||Ne!==O){if((x!==zs||R!==zs)&&(r.blendEquation(r.FUNC_ADD),x=zs,R=zs),Ne)switch(it){case Yr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case z_:r.blendFunc(r.ONE,r.ONE);break;case H_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case G_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ue("WebGLState: Invalid blending: ",it);break}else switch(it){case Yr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case z_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case H_:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case G_:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",it);break}T=null,D=null,H=null,P=null,F.set(0,0,0),E=0,_=it,O=Ne}return}Nt=Nt||Ft,Mt=Mt||Ot,Kt=Kt||Xt,(Ft!==x||Nt!==R)&&(r.blendEquationSeparate(It[Ft],It[Nt]),x=Ft,R=Nt),(Ot!==T||Xt!==D||Mt!==H||Kt!==P)&&(r.blendFuncSeparate(Pt[Ot],Pt[Xt],Pt[Mt],Pt[Kt]),T=Ot,D=Xt,H=Mt,P=Kt),(fe.equals(F)===!1||He!==E)&&(r.blendColor(fe.r,fe.g,fe.b,He),F.copy(fe),E=He),_=it,O=!1}function kt(it,Ft){it.side===ji?mt(r.CULL_FACE):st(r.CULL_FACE);let Ot=it.side===Kn;Ft&&(Ot=!Ot),Wt(Ot),it.blending===Yr&&it.transparent===!1?Ut(Ea):Ut(it.blending,it.blendEquation,it.blendSrc,it.blendDst,it.blendEquationAlpha,it.blendSrcAlpha,it.blendDstAlpha,it.blendColor,it.blendAlpha,it.premultipliedAlpha),f.setFunc(it.depthFunc),f.setTest(it.depthTest),f.setMask(it.depthWrite),c.setMask(it.colorWrite);const Xt=it.stencilWrite;p.setTest(Xt),Xt&&(p.setMask(it.stencilWriteMask),p.setFunc(it.stencilFunc,it.stencilRef,it.stencilFuncMask),p.setOp(it.stencilFail,it.stencilZFail,it.stencilZPass)),he(it.polygonOffset,it.polygonOffsetFactor,it.polygonOffsetUnits),it.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(it){J!==it&&(it?r.frontFace(r.CW):r.frontFace(r.CCW),J=it)}function se(it){it!==wM?(st(r.CULL_FACE),it!==V&&(it===I_?r.cullFace(r.BACK):it===CM?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):mt(r.CULL_FACE),V=it}function j(it){it!==k&&(U&&r.lineWidth(it),k=it)}function he(it,Ft,Ot){it?(st(r.POLYGON_OFFSET_FILL),(q!==Ft||at!==Ot)&&(q=Ft,at=Ot,f.getReversed()&&(Ft=-Ft),r.polygonOffset(Ft,Ot))):mt(r.POLYGON_OFFSET_FILL)}function le(it){it?st(r.SCISSOR_TEST):mt(r.SCISSOR_TEST)}function pe(it){it===void 0&&(it=r.TEXTURE0+$-1),ot!==it&&(r.activeTexture(it),ot=it)}function qt(it,Ft,Ot){Ot===void 0&&(ot===null?Ot=r.TEXTURE0+$-1:Ot=ot);let Xt=St[Ot];Xt===void 0&&(Xt={type:void 0,texture:void 0},St[Ot]=Xt),(Xt.type!==it||Xt.texture!==Ft)&&(ot!==Ot&&(r.activeTexture(Ot),ot=Ot),r.bindTexture(it,Ft||K[it]),Xt.type=it,Xt.texture=Ft)}function G(){const it=St[ot];it!==void 0&&it.type!==void 0&&(r.bindTexture(it.type,null),it.type=void 0,it.texture=void 0)}function A(){try{r.compressedTexImage2D(...arguments)}catch(it){Ue("WebGLState:",it)}}function tt(){try{r.compressedTexImage3D(...arguments)}catch(it){Ue("WebGLState:",it)}}function yt(){try{r.texSubImage2D(...arguments)}catch(it){Ue("WebGLState:",it)}}function Tt(){try{r.texSubImage3D(...arguments)}catch(it){Ue("WebGLState:",it)}}function vt(){try{r.compressedTexSubImage2D(...arguments)}catch(it){Ue("WebGLState:",it)}}function Zt(){try{r.compressedTexSubImage3D(...arguments)}catch(it){Ue("WebGLState:",it)}}function Lt(){try{r.texStorage2D(...arguments)}catch(it){Ue("WebGLState:",it)}}function ee(){try{r.texStorage3D(...arguments)}catch(it){Ue("WebGLState:",it)}}function ae(){try{r.texImage2D(...arguments)}catch(it){Ue("WebGLState:",it)}}function Dt(){try{r.texImage3D(...arguments)}catch(it){Ue("WebGLState:",it)}}function wt(it){W.equals(it)===!1&&(r.scissor(it.x,it.y,it.z,it.w),W.copy(it))}function Gt(it){lt.equals(it)===!1&&(r.viewport(it.x,it.y,it.z,it.w),lt.copy(it))}function zt(it,Ft){let Ot=h.get(Ft);Ot===void 0&&(Ot=new WeakMap,h.set(Ft,Ot));let Xt=Ot.get(it);Xt===void 0&&(Xt=r.getUniformBlockIndex(Ft,it.name),Ot.set(it,Xt))}function jt(it,Ft){const Xt=h.get(Ft).get(it);m.get(Ft)!==Xt&&(r.uniformBlockBinding(Ft,Xt,it.__bindingPointIndex),m.set(Ft,Xt))}function ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),S={},ot=null,St={},v={},g=new WeakMap,y=[],M=null,w=!1,_=null,x=null,T=null,D=null,R=null,H=null,P=null,F=new be(0,0,0),E=0,O=!1,J=null,V=null,k=null,q=null,at=null,W.set(0,0,r.canvas.width,r.canvas.height),lt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:st,disable:mt,bindFramebuffer:Y,drawBuffers:At,useProgram:Ct,setBlending:Ut,setMaterial:kt,setFlipSided:Wt,setCullFace:se,setLineWidth:j,setPolygonOffset:he,setScissorTest:le,activeTexture:pe,bindTexture:qt,unbindTexture:G,compressedTexImage2D:A,compressedTexImage3D:tt,texImage2D:ae,texImage3D:Dt,updateUBOMapping:zt,uniformBlockBinding:jt,texStorage2D:Lt,texStorage3D:ee,texSubImage2D:yt,texSubImage3D:Tt,compressedTexSubImage2D:vt,compressedTexSubImage3D:Zt,scissor:wt,viewport:Gt,reset:ve}}function BR(r,t,i,s,l,c,f){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ae,S=new WeakMap;let v;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(G,A){return y?new OffscreenCanvas(G,A):gu("canvas")}function w(G,A,tt){let yt=1;const Tt=qt(G);if((Tt.width>tt||Tt.height>tt)&&(yt=tt/Math.max(Tt.width,Tt.height)),yt<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const vt=Math.floor(yt*Tt.width),Zt=Math.floor(yt*Tt.height);v===void 0&&(v=M(vt,Zt));const Lt=A?M(vt,Zt):v;return Lt.width=vt,Lt.height=Zt,Lt.getContext("2d").drawImage(G,0,0,vt,Zt),ue("WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+vt+"x"+Zt+")."),Lt}else return"data"in G&&ue("WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),G;return G}function _(G){return G.generateMipmaps}function x(G){r.generateMipmap(G)}function T(G){return G.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?r.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(G,A,tt,yt,Tt=!1){if(G!==null){if(r[G]!==void 0)return r[G];ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let vt=A;if(A===r.RED&&(tt===r.FLOAT&&(vt=r.R32F),tt===r.HALF_FLOAT&&(vt=r.R16F),tt===r.UNSIGNED_BYTE&&(vt=r.R8)),A===r.RED_INTEGER&&(tt===r.UNSIGNED_BYTE&&(vt=r.R8UI),tt===r.UNSIGNED_SHORT&&(vt=r.R16UI),tt===r.UNSIGNED_INT&&(vt=r.R32UI),tt===r.BYTE&&(vt=r.R8I),tt===r.SHORT&&(vt=r.R16I),tt===r.INT&&(vt=r.R32I)),A===r.RG&&(tt===r.FLOAT&&(vt=r.RG32F),tt===r.HALF_FLOAT&&(vt=r.RG16F),tt===r.UNSIGNED_BYTE&&(vt=r.RG8)),A===r.RG_INTEGER&&(tt===r.UNSIGNED_BYTE&&(vt=r.RG8UI),tt===r.UNSIGNED_SHORT&&(vt=r.RG16UI),tt===r.UNSIGNED_INT&&(vt=r.RG32UI),tt===r.BYTE&&(vt=r.RG8I),tt===r.SHORT&&(vt=r.RG16I),tt===r.INT&&(vt=r.RG32I)),A===r.RGB_INTEGER&&(tt===r.UNSIGNED_BYTE&&(vt=r.RGB8UI),tt===r.UNSIGNED_SHORT&&(vt=r.RGB16UI),tt===r.UNSIGNED_INT&&(vt=r.RGB32UI),tt===r.BYTE&&(vt=r.RGB8I),tt===r.SHORT&&(vt=r.RGB16I),tt===r.INT&&(vt=r.RGB32I)),A===r.RGBA_INTEGER&&(tt===r.UNSIGNED_BYTE&&(vt=r.RGBA8UI),tt===r.UNSIGNED_SHORT&&(vt=r.RGBA16UI),tt===r.UNSIGNED_INT&&(vt=r.RGBA32UI),tt===r.BYTE&&(vt=r.RGBA8I),tt===r.SHORT&&(vt=r.RGBA16I),tt===r.INT&&(vt=r.RGBA32I)),A===r.RGB&&(tt===r.UNSIGNED_INT_5_9_9_9_REV&&(vt=r.RGB9_E5),tt===r.UNSIGNED_INT_10F_11F_11F_REV&&(vt=r.R11F_G11F_B10F)),A===r.RGBA){const Zt=Tt?mu:Le.getTransfer(yt);tt===r.FLOAT&&(vt=r.RGBA32F),tt===r.HALF_FLOAT&&(vt=r.RGBA16F),tt===r.UNSIGNED_BYTE&&(vt=Zt===ke?r.SRGB8_ALPHA8:r.RGBA8),tt===r.UNSIGNED_SHORT_4_4_4_4&&(vt=r.RGBA4),tt===r.UNSIGNED_SHORT_5_5_5_1&&(vt=r.RGB5_A1)}return(vt===r.R16F||vt===r.R32F||vt===r.RG16F||vt===r.RG32F||vt===r.RGBA16F||vt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),vt}function R(G,A){let tt;return G?A===null||A===Ki||A===hl?tt=r.DEPTH24_STENCIL8:A===Wi?tt=r.DEPTH32F_STENCIL8:A===dl&&(tt=r.DEPTH24_STENCIL8,ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ki||A===hl?tt=r.DEPTH_COMPONENT24:A===Wi?tt=r.DEPTH_COMPONENT32F:A===dl&&(tt=r.DEPTH_COMPONENT16),tt}function H(G,A){return _(G)===!0||G.isFramebufferTexture&&G.minFilter!==wn&&G.minFilter!==On?Math.log2(Math.max(A.width,A.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?A.mipmaps.length:1}function P(G){const A=G.target;A.removeEventListener("dispose",P),E(A),A.isVideoTexture&&S.delete(A)}function F(G){const A=G.target;A.removeEventListener("dispose",F),J(A)}function E(G){const A=s.get(G);if(A.__webglInit===void 0)return;const tt=G.source,yt=g.get(tt);if(yt){const Tt=yt[A.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&O(G),Object.keys(yt).length===0&&g.delete(tt)}s.remove(G)}function O(G){const A=s.get(G);r.deleteTexture(A.__webglTexture);const tt=G.source,yt=g.get(tt);delete yt[A.__cacheKey],f.memory.textures--}function J(G){const A=s.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),s.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let yt=0;yt<6;yt++){if(Array.isArray(A.__webglFramebuffer[yt]))for(let Tt=0;Tt<A.__webglFramebuffer[yt].length;Tt++)r.deleteFramebuffer(A.__webglFramebuffer[yt][Tt]);else r.deleteFramebuffer(A.__webglFramebuffer[yt]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[yt])}else{if(Array.isArray(A.__webglFramebuffer))for(let yt=0;yt<A.__webglFramebuffer.length;yt++)r.deleteFramebuffer(A.__webglFramebuffer[yt]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let yt=0;yt<A.__webglColorRenderbuffer.length;yt++)A.__webglColorRenderbuffer[yt]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[yt]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const tt=G.textures;for(let yt=0,Tt=tt.length;yt<Tt;yt++){const vt=s.get(tt[yt]);vt.__webglTexture&&(r.deleteTexture(vt.__webglTexture),f.memory.textures--),s.remove(tt[yt])}s.remove(G)}let V=0;function k(){V=0}function q(){const G=V;return G>=l.maxTextures&&ue("WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+l.maxTextures),V+=1,G}function at(G){const A=[];return A.push(G.wrapS),A.push(G.wrapT),A.push(G.wrapR||0),A.push(G.magFilter),A.push(G.minFilter),A.push(G.anisotropy),A.push(G.internalFormat),A.push(G.format),A.push(G.type),A.push(G.generateMipmaps),A.push(G.premultiplyAlpha),A.push(G.flipY),A.push(G.unpackAlignment),A.push(G.colorSpace),A.join()}function $(G,A){const tt=s.get(G);if(G.isVideoTexture&&le(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&tt.__version!==G.version){const yt=G.image;if(yt===null)ue("WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)ue("WebGLRenderer: Texture marked for update but image is incomplete");else{K(tt,G,A);return}}else G.isExternalTexture&&(tt.__webglTexture=G.sourceTexture?G.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,tt.__webglTexture,r.TEXTURE0+A)}function U(G,A){const tt=s.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&tt.__version!==G.version){K(tt,G,A);return}else G.isExternalTexture&&(tt.__webglTexture=G.sourceTexture?G.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,tt.__webglTexture,r.TEXTURE0+A)}function B(G,A){const tt=s.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&tt.__version!==G.version){K(tt,G,A);return}i.bindTexture(r.TEXTURE_3D,tt.__webglTexture,r.TEXTURE0+A)}function nt(G,A){const tt=s.get(G);if(G.isCubeDepthTexture!==!0&&G.version>0&&tt.__version!==G.version){st(tt,G,A);return}i.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture,r.TEXTURE0+A)}const ot={[Bh]:r.REPEAT,[ba]:r.CLAMP_TO_EDGE,[Ih]:r.MIRRORED_REPEAT},St={[wn]:r.NEAREST,[QM]:r.NEAREST_MIPMAP_NEAREST,[Lc]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[jd]:r.LINEAR_MIPMAP_NEAREST,[Gs]:r.LINEAR_MIPMAP_LINEAR},z={[eb]:r.NEVER,[rb]:r.ALWAYS,[nb]:r.LESS,[Lp]:r.LEQUAL,[ib]:r.EQUAL,[Op]:r.GEQUAL,[ab]:r.GREATER,[sb]:r.NOTEQUAL};function I(G,A){if(A.type===Wi&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===On||A.magFilter===jd||A.magFilter===Lc||A.magFilter===Gs||A.minFilter===On||A.minFilter===jd||A.minFilter===Lc||A.minFilter===Gs)&&ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(G,r.TEXTURE_WRAP_S,ot[A.wrapS]),r.texParameteri(G,r.TEXTURE_WRAP_T,ot[A.wrapT]),(G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY)&&r.texParameteri(G,r.TEXTURE_WRAP_R,ot[A.wrapR]),r.texParameteri(G,r.TEXTURE_MAG_FILTER,St[A.magFilter]),r.texParameteri(G,r.TEXTURE_MIN_FILTER,St[A.minFilter]),A.compareFunction&&(r.texParameteri(G,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(G,r.TEXTURE_COMPARE_FUNC,z[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===wn||A.minFilter!==Lc&&A.minFilter!==Gs||A.type===Wi&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");r.texParameterf(G,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function W(G,A){let tt=!1;G.__webglInit===void 0&&(G.__webglInit=!0,A.addEventListener("dispose",P));const yt=A.source;let Tt=g.get(yt);Tt===void 0&&(Tt={},g.set(yt,Tt));const vt=at(A);if(vt!==G.__cacheKey){Tt[vt]===void 0&&(Tt[vt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,tt=!0),Tt[vt].usedTimes++;const Zt=Tt[G.__cacheKey];Zt!==void 0&&(Tt[G.__cacheKey].usedTimes--,Zt.usedTimes===0&&O(A)),G.__cacheKey=vt,G.__webglTexture=Tt[vt].texture}return tt}function lt(G,A,tt){return Math.floor(Math.floor(G/tt)/A)}function _t(G,A,tt,yt){const vt=G.updateRanges;if(vt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,tt,yt,A.data);else{vt.sort((Dt,wt)=>Dt.start-wt.start);let Zt=0;for(let Dt=1;Dt<vt.length;Dt++){const wt=vt[Zt],Gt=vt[Dt],zt=wt.start+wt.count,jt=lt(Gt.start,A.width,4),ve=lt(wt.start,A.width,4);Gt.start<=zt+1&&jt===ve&&lt(Gt.start+Gt.count-1,A.width,4)===jt?wt.count=Math.max(wt.count,Gt.start+Gt.count-wt.start):(++Zt,vt[Zt]=Gt)}vt.length=Zt+1;const Lt=r.getParameter(r.UNPACK_ROW_LENGTH),ee=r.getParameter(r.UNPACK_SKIP_PIXELS),ae=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let Dt=0,wt=vt.length;Dt<wt;Dt++){const Gt=vt[Dt],zt=Math.floor(Gt.start/4),jt=Math.ceil(Gt.count/4),ve=zt%A.width,it=Math.floor(zt/A.width),Ft=jt,Ot=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,it),i.texSubImage2D(r.TEXTURE_2D,0,ve,it,Ft,Ot,tt,yt,A.data)}G.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Lt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),r.pixelStorei(r.UNPACK_SKIP_ROWS,ae)}}function K(G,A,tt){let yt=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(yt=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(yt=r.TEXTURE_3D);const Tt=W(G,A),vt=A.source;i.bindTexture(yt,G.__webglTexture,r.TEXTURE0+tt);const Zt=s.get(vt);if(vt.version!==Zt.__version||Tt===!0){i.activeTexture(r.TEXTURE0+tt);const Lt=Le.getPrimaries(Le.workingColorSpace),ee=A.colorSpace===cs?null:Le.getPrimaries(A.colorSpace),ae=A.colorSpace===cs||Lt===ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Dt=w(A.image,!1,l.maxTextureSize);Dt=pe(A,Dt);const wt=c.convert(A.format,A.colorSpace),Gt=c.convert(A.type);let zt=D(A.internalFormat,wt,Gt,A.colorSpace,A.isVideoTexture);I(yt,A);let jt;const ve=A.mipmaps,it=A.isVideoTexture!==!0,Ft=Zt.__version===void 0||Tt===!0,Ot=vt.dataReady,Xt=H(A,Dt);if(A.isDepthTexture)zt=R(A.format===Vs,A.type),Ft&&(it?i.texStorage2D(r.TEXTURE_2D,1,zt,Dt.width,Dt.height):i.texImage2D(r.TEXTURE_2D,0,zt,Dt.width,Dt.height,0,wt,Gt,null));else if(A.isDataTexture)if(ve.length>0){it&&Ft&&i.texStorage2D(r.TEXTURE_2D,Xt,zt,ve[0].width,ve[0].height);for(let Nt=0,Mt=ve.length;Nt<Mt;Nt++)jt=ve[Nt],it?Ot&&i.texSubImage2D(r.TEXTURE_2D,Nt,0,0,jt.width,jt.height,wt,Gt,jt.data):i.texImage2D(r.TEXTURE_2D,Nt,zt,jt.width,jt.height,0,wt,Gt,jt.data);A.generateMipmaps=!1}else it?(Ft&&i.texStorage2D(r.TEXTURE_2D,Xt,zt,Dt.width,Dt.height),Ot&&_t(A,Dt,wt,Gt)):i.texImage2D(r.TEXTURE_2D,0,zt,Dt.width,Dt.height,0,wt,Gt,Dt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){it&&Ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Xt,zt,ve[0].width,ve[0].height,Dt.depth);for(let Nt=0,Mt=ve.length;Nt<Mt;Nt++)if(jt=ve[Nt],A.format!==Oi)if(wt!==null)if(it){if(Ot)if(A.layerUpdates.size>0){const Kt=vv(jt.width,jt.height,A.format,A.type);for(const fe of A.layerUpdates){const He=jt.data.subarray(fe*Kt/jt.data.BYTES_PER_ELEMENT,(fe+1)*Kt/jt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Nt,0,0,fe,jt.width,jt.height,1,wt,He)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Nt,0,0,0,jt.width,jt.height,Dt.depth,wt,jt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Nt,zt,jt.width,jt.height,Dt.depth,0,jt.data,0,0);else ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?Ot&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Nt,0,0,0,jt.width,jt.height,Dt.depth,wt,Gt,jt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Nt,zt,jt.width,jt.height,Dt.depth,0,wt,Gt,jt.data)}else{it&&Ft&&i.texStorage2D(r.TEXTURE_2D,Xt,zt,ve[0].width,ve[0].height);for(let Nt=0,Mt=ve.length;Nt<Mt;Nt++)jt=ve[Nt],A.format!==Oi?wt!==null?it?Ot&&i.compressedTexSubImage2D(r.TEXTURE_2D,Nt,0,0,jt.width,jt.height,wt,jt.data):i.compressedTexImage2D(r.TEXTURE_2D,Nt,zt,jt.width,jt.height,0,jt.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?Ot&&i.texSubImage2D(r.TEXTURE_2D,Nt,0,0,jt.width,jt.height,wt,Gt,jt.data):i.texImage2D(r.TEXTURE_2D,Nt,zt,jt.width,jt.height,0,wt,Gt,jt.data)}else if(A.isDataArrayTexture)if(it){if(Ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Xt,zt,Dt.width,Dt.height,Dt.depth),Ot)if(A.layerUpdates.size>0){const Nt=vv(Dt.width,Dt.height,A.format,A.type);for(const Mt of A.layerUpdates){const Kt=Dt.data.subarray(Mt*Nt/Dt.data.BYTES_PER_ELEMENT,(Mt+1)*Nt/Dt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Mt,Dt.width,Dt.height,1,wt,Gt,Kt)}A.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Dt.width,Dt.height,Dt.depth,wt,Gt,Dt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,Dt.width,Dt.height,Dt.depth,0,wt,Gt,Dt.data);else if(A.isData3DTexture)it?(Ft&&i.texStorage3D(r.TEXTURE_3D,Xt,zt,Dt.width,Dt.height,Dt.depth),Ot&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Dt.width,Dt.height,Dt.depth,wt,Gt,Dt.data)):i.texImage3D(r.TEXTURE_3D,0,zt,Dt.width,Dt.height,Dt.depth,0,wt,Gt,Dt.data);else if(A.isFramebufferTexture){if(Ft)if(it)i.texStorage2D(r.TEXTURE_2D,Xt,zt,Dt.width,Dt.height);else{let Nt=Dt.width,Mt=Dt.height;for(let Kt=0;Kt<Xt;Kt++)i.texImage2D(r.TEXTURE_2D,Kt,zt,Nt,Mt,0,wt,Gt,null),Nt>>=1,Mt>>=1}}else if(ve.length>0){if(it&&Ft){const Nt=qt(ve[0]);i.texStorage2D(r.TEXTURE_2D,Xt,zt,Nt.width,Nt.height)}for(let Nt=0,Mt=ve.length;Nt<Mt;Nt++)jt=ve[Nt],it?Ot&&i.texSubImage2D(r.TEXTURE_2D,Nt,0,0,wt,Gt,jt):i.texImage2D(r.TEXTURE_2D,Nt,zt,wt,Gt,jt);A.generateMipmaps=!1}else if(it){if(Ft){const Nt=qt(Dt);i.texStorage2D(r.TEXTURE_2D,Xt,zt,Nt.width,Nt.height)}Ot&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,wt,Gt,Dt)}else i.texImage2D(r.TEXTURE_2D,0,zt,wt,Gt,Dt);_(A)&&x(yt),Zt.__version=vt.version,A.onUpdate&&A.onUpdate(A)}G.__version=A.version}function st(G,A,tt){if(A.image.length!==6)return;const yt=W(G,A),Tt=A.source;i.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+tt);const vt=s.get(Tt);if(Tt.version!==vt.__version||yt===!0){i.activeTexture(r.TEXTURE0+tt);const Zt=Le.getPrimaries(Le.workingColorSpace),Lt=A.colorSpace===cs?null:Le.getPrimaries(A.colorSpace),ee=A.colorSpace===cs||Zt===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ae=A.isCompressedTexture||A.image[0].isCompressedTexture,Dt=A.image[0]&&A.image[0].isDataTexture,wt=[];for(let Mt=0;Mt<6;Mt++)!ae&&!Dt?wt[Mt]=w(A.image[Mt],!0,l.maxCubemapSize):wt[Mt]=Dt?A.image[Mt].image:A.image[Mt],wt[Mt]=pe(A,wt[Mt]);const Gt=wt[0],zt=c.convert(A.format,A.colorSpace),jt=c.convert(A.type),ve=D(A.internalFormat,zt,jt,A.colorSpace),it=A.isVideoTexture!==!0,Ft=vt.__version===void 0||yt===!0,Ot=Tt.dataReady;let Xt=H(A,Gt);I(r.TEXTURE_CUBE_MAP,A);let Nt;if(ae){it&&Ft&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Xt,ve,Gt.width,Gt.height);for(let Mt=0;Mt<6;Mt++){Nt=wt[Mt].mipmaps;for(let Kt=0;Kt<Nt.length;Kt++){const fe=Nt[Kt];A.format!==Oi?zt!==null?it?Ot&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Kt,0,0,fe.width,fe.height,zt,fe.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Kt,ve,fe.width,fe.height,0,fe.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?Ot&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Kt,0,0,fe.width,fe.height,zt,jt,fe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Kt,ve,fe.width,fe.height,0,zt,jt,fe.data)}}}else{if(Nt=A.mipmaps,it&&Ft){Nt.length>0&&Xt++;const Mt=qt(wt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Xt,ve,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(Dt){it?Ot&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,wt[Mt].width,wt[Mt].height,zt,jt,wt[Mt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ve,wt[Mt].width,wt[Mt].height,0,zt,jt,wt[Mt].data);for(let Kt=0;Kt<Nt.length;Kt++){const He=Nt[Kt].image[Mt].image;it?Ot&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Kt+1,0,0,He.width,He.height,zt,jt,He.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Kt+1,ve,He.width,He.height,0,zt,jt,He.data)}}else{it?Ot&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,zt,jt,wt[Mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ve,zt,jt,wt[Mt]);for(let Kt=0;Kt<Nt.length;Kt++){const fe=Nt[Kt];it?Ot&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Kt+1,0,0,zt,jt,fe.image[Mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Kt+1,ve,zt,jt,fe.image[Mt])}}}_(A)&&x(r.TEXTURE_CUBE_MAP),vt.__version=Tt.version,A.onUpdate&&A.onUpdate(A)}G.__version=A.version}function mt(G,A,tt,yt,Tt,vt){const Zt=c.convert(tt.format,tt.colorSpace),Lt=c.convert(tt.type),ee=D(tt.internalFormat,Zt,Lt,tt.colorSpace),ae=s.get(A),Dt=s.get(tt);if(Dt.__renderTarget=A,!ae.__hasExternalTextures){const wt=Math.max(1,A.width>>vt),Gt=Math.max(1,A.height>>vt);Tt===r.TEXTURE_3D||Tt===r.TEXTURE_2D_ARRAY?i.texImage3D(Tt,vt,ee,wt,Gt,A.depth,0,Zt,Lt,null):i.texImage2D(Tt,vt,ee,wt,Gt,0,Zt,Lt,null)}i.bindFramebuffer(r.FRAMEBUFFER,G),he(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,yt,Tt,Dt.__webglTexture,0,j(A)):(Tt===r.TEXTURE_2D||Tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,yt,Tt,Dt.__webglTexture,vt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Y(G,A,tt){if(r.bindRenderbuffer(r.RENDERBUFFER,G),A.depthBuffer){const yt=A.depthTexture,Tt=yt&&yt.isDepthTexture?yt.type:null,vt=R(A.stencilBuffer,Tt),Zt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;he(A)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(A),vt,A.width,A.height):tt?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(A),vt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,vt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Zt,r.RENDERBUFFER,G)}else{const yt=A.textures;for(let Tt=0;Tt<yt.length;Tt++){const vt=yt[Tt],Zt=c.convert(vt.format,vt.colorSpace),Lt=c.convert(vt.type),ee=D(vt.internalFormat,Zt,Lt,vt.colorSpace);he(A)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(A),ee,A.width,A.height):tt?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(A),ee,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,ee,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function At(G,A,tt){const yt=A.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,G),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Tt=s.get(A.depthTexture);if(Tt.__renderTarget=A,(!Tt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),yt){if(Tt.__webglInit===void 0&&(Tt.__webglInit=!0,A.depthTexture.addEventListener("dispose",P)),Tt.__webglTexture===void 0){Tt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Tt.__webglTexture),I(r.TEXTURE_CUBE_MAP,A.depthTexture);const ae=c.convert(A.depthTexture.format),Dt=c.convert(A.depthTexture.type);let wt;A.depthTexture.format===Ra?wt=r.DEPTH_COMPONENT24:A.depthTexture.format===Vs&&(wt=r.DEPTH24_STENCIL8);for(let Gt=0;Gt<6;Gt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0,wt,A.width,A.height,0,ae,Dt,null)}}else $(A.depthTexture,0);const vt=Tt.__webglTexture,Zt=j(A),Lt=yt?r.TEXTURE_CUBE_MAP_POSITIVE_X+tt:r.TEXTURE_2D,ee=A.depthTexture.format===Vs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ra)he(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,Lt,vt,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,ee,Lt,vt,0);else if(A.depthTexture.format===Vs)he(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,Lt,vt,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,ee,Lt,vt,0);else throw new Error("Unknown depthTexture format")}function Ct(G){const A=s.get(G),tt=G.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==G.depthTexture){const yt=G.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),yt){const Tt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,yt.removeEventListener("dispose",Tt)};yt.addEventListener("dispose",Tt),A.__depthDisposeCallback=Tt}A.__boundDepthTexture=yt}if(G.depthTexture&&!A.__autoAllocateDepthBuffer)if(tt)for(let yt=0;yt<6;yt++)At(A.__webglFramebuffer[yt],G,yt);else{const yt=G.texture.mipmaps;yt&&yt.length>0?At(A.__webglFramebuffer[0],G,0):At(A.__webglFramebuffer,G,0)}else if(tt){A.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)if(i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[yt]),A.__webglDepthbuffer[yt]===void 0)A.__webglDepthbuffer[yt]=r.createRenderbuffer(),Y(A.__webglDepthbuffer[yt],G,!1);else{const Tt=G.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=A.__webglDepthbuffer[yt];r.bindRenderbuffer(r.RENDERBUFFER,vt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,vt)}}else{const yt=G.texture.mipmaps;if(yt&&yt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Y(A.__webglDepthbuffer,G,!1);else{const Tt=G.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,vt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,vt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function It(G,A,tt){const yt=s.get(G);A!==void 0&&mt(yt.__webglFramebuffer,G,G.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),tt!==void 0&&Ct(G)}function Pt(G){const A=G.texture,tt=s.get(G),yt=s.get(A);G.addEventListener("dispose",F);const Tt=G.textures,vt=G.isWebGLCubeRenderTarget===!0,Zt=Tt.length>1;if(Zt||(yt.__webglTexture===void 0&&(yt.__webglTexture=r.createTexture()),yt.__version=A.version,f.memory.textures++),vt){tt.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(A.mipmaps&&A.mipmaps.length>0){tt.__webglFramebuffer[Lt]=[];for(let ee=0;ee<A.mipmaps.length;ee++)tt.__webglFramebuffer[Lt][ee]=r.createFramebuffer()}else tt.__webglFramebuffer[Lt]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Lt=0;Lt<A.mipmaps.length;Lt++)tt.__webglFramebuffer[Lt]=r.createFramebuffer()}else tt.__webglFramebuffer=r.createFramebuffer();if(Zt)for(let Lt=0,ee=Tt.length;Lt<ee;Lt++){const ae=s.get(Tt[Lt]);ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture(),f.memory.textures++)}if(G.samples>0&&he(G)===!1){tt.__webglMultisampledFramebuffer=r.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Lt=0;Lt<Tt.length;Lt++){const ee=Tt[Lt];tt.__webglColorRenderbuffer[Lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,tt.__webglColorRenderbuffer[Lt]);const ae=c.convert(ee.format,ee.colorSpace),Dt=c.convert(ee.type),wt=D(ee.internalFormat,ae,Dt,ee.colorSpace,G.isXRRenderTarget===!0),Gt=j(G);r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,wt,G.width,G.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,tt.__webglColorRenderbuffer[Lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),G.depthBuffer&&(tt.__webglDepthRenderbuffer=r.createRenderbuffer(),Y(tt.__webglDepthRenderbuffer,G,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(vt){i.bindTexture(r.TEXTURE_CUBE_MAP,yt.__webglTexture),I(r.TEXTURE_CUBE_MAP,A);for(let Lt=0;Lt<6;Lt++)if(A.mipmaps&&A.mipmaps.length>0)for(let ee=0;ee<A.mipmaps.length;ee++)mt(tt.__webglFramebuffer[Lt][ee],G,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,ee);else mt(tt.__webglFramebuffer[Lt],G,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);_(A)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Lt=0,ee=Tt.length;Lt<ee;Lt++){const ae=Tt[Lt],Dt=s.get(ae);let wt=r.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(wt=G.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(wt,Dt.__webglTexture),I(wt,ae),mt(tt.__webglFramebuffer,G,ae,r.COLOR_ATTACHMENT0+Lt,wt,0),_(ae)&&x(wt)}i.unbindTexture()}else{let Lt=r.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Lt=G.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Lt,yt.__webglTexture),I(Lt,A),A.mipmaps&&A.mipmaps.length>0)for(let ee=0;ee<A.mipmaps.length;ee++)mt(tt.__webglFramebuffer[ee],G,A,r.COLOR_ATTACHMENT0,Lt,ee);else mt(tt.__webglFramebuffer,G,A,r.COLOR_ATTACHMENT0,Lt,0);_(A)&&x(Lt),i.unbindTexture()}G.depthBuffer&&Ct(G)}function Ut(G){const A=G.textures;for(let tt=0,yt=A.length;tt<yt;tt++){const Tt=A[tt];if(_(Tt)){const vt=T(G),Zt=s.get(Tt).__webglTexture;i.bindTexture(vt,Zt),x(vt),i.unbindTexture()}}}const kt=[],Wt=[];function se(G){if(G.samples>0){if(he(G)===!1){const A=G.textures,tt=G.width,yt=G.height;let Tt=r.COLOR_BUFFER_BIT;const vt=G.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Zt=s.get(G),Lt=A.length>1;if(Lt)for(let ae=0;ae<A.length;ae++)i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const ee=G.texture.mipmaps;ee&&ee.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ae=0;ae<A.length;ae++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(Tt|=r.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(Tt|=r.STENCIL_BUFFER_BIT)),Lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[ae]);const Dt=s.get(A[ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Dt,0)}r.blitFramebuffer(0,0,tt,yt,0,0,tt,yt,Tt,r.NEAREST),m===!0&&(kt.length=0,Wt.length=0,kt.push(r.COLOR_ATTACHMENT0+ae),G.depthBuffer&&G.resolveDepthBuffer===!1&&(kt.push(vt),Wt.push(vt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Wt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,kt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Lt)for(let ae=0;ae<A.length;ae++){i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[ae]);const Dt=s.get(A[ae]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ae,r.TEXTURE_2D,Dt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&m){const A=G.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function j(G){return Math.min(l.maxSamples,G.samples)}function he(G){const A=s.get(G);return G.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function le(G){const A=f.render.frame;S.get(G)!==A&&(S.set(G,A),G.update())}function pe(G,A){const tt=G.colorSpace,yt=G.format,Tt=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||tt!==$r&&tt!==cs&&(Le.getTransfer(tt)===ke?(yt!==Oi||Tt!==ci)&&ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",tt)),A}function qt(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(h.width=G.naturalWidth||G.width,h.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(h.width=G.displayWidth,h.height=G.displayHeight):(h.width=G.width,h.height=G.height),h}this.allocateTextureUnit=q,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=U,this.setTexture3D=B,this.setTextureCube=nt,this.rebindTextures=It,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function IR(r,t){function i(s,l=cs){let c;const f=Le.getTransfer(l);if(s===ci)return r.UNSIGNED_BYTE;if(s===wp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Cp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===ox)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===lx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===sx)return r.BYTE;if(s===rx)return r.SHORT;if(s===dl)return r.UNSIGNED_SHORT;if(s===Rp)return r.INT;if(s===Ki)return r.UNSIGNED_INT;if(s===Wi)return r.FLOAT;if(s===Aa)return r.HALF_FLOAT;if(s===cx)return r.ALPHA;if(s===ux)return r.RGB;if(s===Oi)return r.RGBA;if(s===Ra)return r.DEPTH_COMPONENT;if(s===Vs)return r.DEPTH_STENCIL;if(s===fx)return r.RED;if(s===Dp)return r.RED_INTEGER;if(s===Jr)return r.RG;if(s===Np)return r.RG_INTEGER;if(s===Up)return r.RGBA_INTEGER;if(s===uu||s===fu||s===du||s===hu)if(f===ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===uu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===uu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===du)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===zh||s===Hh||s===Gh||s===Vh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===zh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kh||s===jh||s===Xh||s===Wh||s===qh||s===Yh||s===Zh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===kh||s===jh)return f===ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Xh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Wh)return c.COMPRESSED_R11_EAC;if(s===qh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Yh)return c.COMPRESSED_RG11_EAC;if(s===Zh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Kh||s===Qh||s===Jh||s===$h||s===tp||s===ep||s===np||s===ip||s===ap||s===sp||s===rp||s===op||s===lp||s===cp)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Kh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jh)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$h)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===tp)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ep)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===np)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ip)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ap)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sp)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rp)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===op)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lp)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cp)return f===ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===up||s===fp||s===dp)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===up)return f===ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===fp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===dp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===hp||s===pp||s===mp||s===gp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===hp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===pp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const zR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HR=`
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

}`;class GR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Mx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ji({vertexShader:zR,fragmentShader:HR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Qi(new xl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VR extends eo{constructor(t,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,h=null,S=null,v=null,g=null,y=null,M=null;const w=typeof XRWebGLBinding<"u",_=new GR,x={},T=i.getContextAttributes();let D=null,R=null;const H=[],P=[],F=new Ae;let E=null;const O=new li;O.viewport=new sn;const J=new li;J.viewport=new sn;const V=[O,J],k=new Jb;let q=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let st=H[K];return st===void 0&&(st=new Jd,H[K]=st),st.getTargetRaySpace()},this.getControllerGrip=function(K){let st=H[K];return st===void 0&&(st=new Jd,H[K]=st),st.getGripSpace()},this.getHand=function(K){let st=H[K];return st===void 0&&(st=new Jd,H[K]=st),st.getHandSpace()};function $(K){const st=P.indexOf(K.inputSource);if(st===-1)return;const mt=H[st];mt!==void 0&&(mt.update(K.inputSource,K.frame,h||f),mt.dispatchEvent({type:K.type,data:K.inputSource}))}function U(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",U),l.removeEventListener("inputsourceschange",B);for(let K=0;K<H.length;K++){const st=P[K];st!==null&&(P[K]=null,H[K].disconnect(st))}q=null,at=null,_.reset();for(const K in x)delete x[K];t.setRenderTarget(D),y=null,g=null,v=null,l=null,R=null,_t.stop(),s.isPresenting=!1,t.setPixelRatio(E),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,s.isPresenting===!0&&ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){p=K,s.isPresenting===!0&&ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",U),l.addEventListener("inputsourceschange",B),T.xrCompatible!==!0&&await i.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(F),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Y=null,At=null;T.depth&&(At=T.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,mt=T.stencil?Vs:Ra,Y=T.stencil?hl:Ki);const Ct={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Ct),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),R=new Zi(g.textureWidth,g.textureHeight,{format:Oi,type:ci,depthTexture:new ml(g.textureWidth,g.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const mt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,mt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),R=new Zi(y.framebufferWidth,y.framebufferHeight,{format:Oi,type:ci,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await l.requestReferenceSpace(p),_t.setContext(l),_t.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(K){for(let st=0;st<K.removed.length;st++){const mt=K.removed[st],Y=P.indexOf(mt);Y>=0&&(P[Y]=null,H[Y].disconnect(mt))}for(let st=0;st<K.added.length;st++){const mt=K.added[st];let Y=P.indexOf(mt);if(Y===-1){for(let Ct=0;Ct<H.length;Ct++)if(Ct>=P.length){P.push(mt),Y=Ct;break}else if(P[Ct]===null){P[Ct]=mt,Y=Ct;break}if(Y===-1)break}const At=H[Y];At&&At.connect(mt)}}const nt=new ut,ot=new ut;function St(K,st,mt){nt.setFromMatrixPosition(st.matrixWorld),ot.setFromMatrixPosition(mt.matrixWorld);const Y=nt.distanceTo(ot),At=st.projectionMatrix.elements,Ct=mt.projectionMatrix.elements,It=At[14]/(At[10]-1),Pt=At[14]/(At[10]+1),Ut=(At[9]+1)/At[5],kt=(At[9]-1)/At[5],Wt=(At[8]-1)/At[0],se=(Ct[8]+1)/Ct[0],j=It*Wt,he=It*se,le=Y/(-Wt+se),pe=le*-Wt;if(st.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(pe),K.translateZ(le),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),At[10]===-1)K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const qt=It+le,G=Pt+le,A=j-pe,tt=he+(Y-pe),yt=Ut*Pt/G*qt,Tt=kt*Pt/G*qt;K.projectionMatrix.makePerspective(A,tt,yt,Tt,qt,G),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function z(K,st){st===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(st.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let st=K.near,mt=K.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(mt=_.depthFar)),k.near=J.near=O.near=st,k.far=J.far=O.far=mt,(q!==k.near||at!==k.far)&&(l.updateRenderState({depthNear:k.near,depthFar:k.far}),q=k.near,at=k.far),k.layers.mask=K.layers.mask|6,O.layers.mask=k.layers.mask&-5,J.layers.mask=k.layers.mask&-3;const Y=K.parent,At=k.cameras;z(k,Y);for(let Ct=0;Ct<At.length;Ct++)z(At[Ct],Y);At.length===2?St(k,O,J):k.projectionMatrix.copy(O.projectionMatrix),I(K,k,Y)};function I(K,st,mt){mt===null?K.matrix.copy(st.matrixWorld):(K.matrix.copy(mt.matrixWorld),K.matrix.invert(),K.matrix.multiply(st.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=vp*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(g===null&&y===null))return m},this.setFoveation=function(K){m=K,g!==null&&(g.fixedFoveation=K),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(k)},this.getCameraTexture=function(K){return x[K]};let W=null;function lt(K,st){if(S=st.getViewerPose(h||f),M=st,S!==null){const mt=S.views;y!==null&&(t.setRenderTargetFramebuffer(R,y.framebuffer),t.setRenderTarget(R));let Y=!1;mt.length!==k.cameras.length&&(k.cameras.length=0,Y=!0);for(let Pt=0;Pt<mt.length;Pt++){const Ut=mt[Pt];let kt=null;if(y!==null)kt=y.getViewport(Ut);else{const se=v.getViewSubImage(g,Ut);kt=se.viewport,Pt===0&&(t.setRenderTargetTextures(R,se.colorTexture,se.depthStencilTexture),t.setRenderTarget(R))}let Wt=V[Pt];Wt===void 0&&(Wt=new li,Wt.layers.enable(Pt),Wt.viewport=new sn,V[Pt]=Wt),Wt.matrix.fromArray(Ut.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Ut.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(kt.x,kt.y,kt.width,kt.height),Pt===0&&(k.matrix.copy(Wt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Y===!0&&k.cameras.push(Wt)}const At=l.enabledFeatures;if(At&&At.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=s.getBinding();const Pt=v.getDepthInformation(mt[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(Pt,l.renderState)}if(At&&At.includes("camera-access")&&w){t.state.unbindTexture(),v=s.getBinding();for(let Pt=0;Pt<mt.length;Pt++){const Ut=mt[Pt].camera;if(Ut){let kt=x[Ut];kt||(kt=new Mx,x[Ut]=kt);const Wt=v.getCameraImage(Ut);kt.sourceTexture=Wt}}}}for(let mt=0;mt<H.length;mt++){const Y=P[mt],At=H[mt];Y!==null&&At!==void 0&&At.update(Y,st,h||f)}W&&W(K,st),st.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:st}),M=null}const _t=new Rx;_t.setAnimationLoop(lt),this.setAnimationLoop=function(K){W=K},this.dispose=function(){}}}const Bs=new wa,kR=new Je;function jR(r,t){function i(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function s(_,x){x.color.getRGB(_.fogColor.value,bx(r)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function l(_,x,T,D,R){x.isMeshBasicMaterial?c(_,x):x.isMeshLambertMaterial?(c(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(_,x),v(_,x)):x.isMeshPhongMaterial?(c(_,x),S(_,x),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(_,x),g(_,x),x.isMeshPhysicalMaterial&&y(_,x,R)):x.isMeshMatcapMaterial?(c(_,x),M(_,x)):x.isMeshDepthMaterial?c(_,x):x.isMeshDistanceMaterial?(c(_,x),w(_,x)):x.isMeshNormalMaterial?c(_,x):x.isLineBasicMaterial?(f(_,x),x.isLineDashedMaterial&&p(_,x)):x.isPointsMaterial?m(_,x,T,D):x.isSpriteMaterial?h(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,i(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,i(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,i(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===Kn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,i(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===Kn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,i(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,i(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);const T=t.get(x),D=T.envMap,R=T.envMapRotation;D&&(_.envMap.value=D,Bs.copy(R),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),_.envMapRotation.value.setFromMatrix4(kR.makeRotationFromEuler(Bs)),_.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap&&(_.lightMap.value=x.lightMap,_.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,_.lightMapTransform)),x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,_.aoMapTransform))}function f(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,i(x.map,_.mapTransform))}function p(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function m(_,x,T,D){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*T,_.scale.value=D*.5,x.map&&(_.map.value=x.map,i(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,i(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function h(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,i(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,i(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function S(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function v(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function g(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function y(_,x,T){_.ior.value=x.ior,x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Kn&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=T.texture,_.transmissionSamplerSize.value.set(T.width,T.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,x){x.matcap&&(_.matcap.value=x.matcap)}function w(_,x){const T=t.get(x).light;_.referencePosition.value.setFromMatrixPosition(T.matrixWorld),_.nearDistance.value=T.shadow.camera.near,_.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function XR(r,t,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(T,D){const R=D.program;s.uniformBlockBinding(T,R)}function h(T,D){let R=l[T.id];R===void 0&&(M(T),R=S(T),l[T.id]=R,T.addEventListener("dispose",_));const H=D.program;s.updateUBOMapping(T,H);const P=t.render.frame;c[T.id]!==P&&(g(T),c[T.id]=P)}function S(T){const D=v();T.__bindingPointIndex=D;const R=r.createBuffer(),H=T.__size,P=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,H,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,R),R}function v(){for(let T=0;T<p;T++)if(f.indexOf(T)===-1)return f.push(T),T;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(T){const D=l[T.id],R=T.uniforms,H=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let P=0,F=R.length;P<F;P++){const E=Array.isArray(R[P])?R[P]:[R[P]];for(let O=0,J=E.length;O<J;O++){const V=E[O];if(y(V,P,O,H)===!0){const k=V.__offset,q=Array.isArray(V.value)?V.value:[V.value];let at=0;for(let $=0;$<q.length;$++){const U=q[$],B=w(U);typeof U=="number"||typeof U=="boolean"?(V.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,k+at,V.__data)):U.isMatrix3?(V.__data[0]=U.elements[0],V.__data[1]=U.elements[1],V.__data[2]=U.elements[2],V.__data[3]=0,V.__data[4]=U.elements[3],V.__data[5]=U.elements[4],V.__data[6]=U.elements[5],V.__data[7]=0,V.__data[8]=U.elements[6],V.__data[9]=U.elements[7],V.__data[10]=U.elements[8],V.__data[11]=0):(U.toArray(V.__data,at),at+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,k,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(T,D,R,H){const P=T.value,F=D+"_"+R;if(H[F]===void 0)return typeof P=="number"||typeof P=="boolean"?H[F]=P:H[F]=P.clone(),!0;{const E=H[F];if(typeof P=="number"||typeof P=="boolean"){if(E!==P)return H[F]=P,!0}else if(E.equals(P)===!1)return E.copy(P),!0}return!1}function M(T){const D=T.uniforms;let R=0;const H=16;for(let F=0,E=D.length;F<E;F++){const O=Array.isArray(D[F])?D[F]:[D[F]];for(let J=0,V=O.length;J<V;J++){const k=O[J],q=Array.isArray(k.value)?k.value:[k.value];for(let at=0,$=q.length;at<$;at++){const U=q[at],B=w(U),nt=R%H,ot=nt%B.boundary,St=nt+ot;R+=ot,St!==0&&H-St<B.storage&&(R+=H-St),k.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=R,R+=B.storage}}}const P=R%H;return P>0&&(R+=H-P),T.__size=R,T.__cache={},this}function w(T){const D={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(D.boundary=4,D.storage=4):T.isVector2?(D.boundary=8,D.storage=8):T.isVector3||T.isColor?(D.boundary=16,D.storage=12):T.isVector4?(D.boundary=16,D.storage=16):T.isMatrix3?(D.boundary=48,D.storage=48):T.isMatrix4?(D.boundary=64,D.storage=64):T.isTexture?ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ue("WebGLRenderer: Unsupported uniform value type.",T),D}function _(T){const D=T.target;D.removeEventListener("dispose",_);const R=f.indexOf(D.__bindingPointIndex);f.splice(R,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function x(){for(const T in l)r.deleteBuffer(l[T]);f=[],l={},c={}}return{bind:m,update:h,dispose:x}}const WR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function qR(){return Vi===null&&(Vi=new Lb(WR,16,16,Jr,Aa),Vi.name="DFG_LUT",Vi.minFilter=On,Vi.magFilter=On,Vi.wrapS=ba,Vi.wrapT=ba,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class YR{constructor(t={}){const{canvas:i=lb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:y=ci}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=f;const w=y,_=new Set([Up,Np,Dp]),x=new Set([ci,Ki,dl,hl,wp,Cp]),T=new Uint32Array(4),D=new Int32Array(4);let R=null,H=null;const P=[],F=[];let E=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let J=!1;this._outputColorSpace=Si;let V=0,k=0,q=null,at=-1,$=null;const U=new sn,B=new sn;let nt=null;const ot=new be(0);let St=0,z=i.width,I=i.height,W=1,lt=null,_t=null;const K=new sn(0,0,z,I),st=new sn(0,0,z,I);let mt=!1;const Y=new zp;let At=!1,Ct=!1;const It=new Je,Pt=new ut,Ut=new sn,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function se(){return q===null?W:1}let j=s;function he(L,et){return i.getContext(L,et)}try{const L={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:S,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Tp}`),i.addEventListener("webglcontextlost",Kt,!1),i.addEventListener("webglcontextrestored",fe,!1),i.addEventListener("webglcontextcreationerror",He,!1),j===null){const et="webgl2";if(j=he(et,L),j===null)throw he(et)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw Ue("WebGLRenderer: "+L.message),L}let le,pe,qt,G,A,tt,yt,Tt,vt,Zt,Lt,ee,ae,Dt,wt,Gt,zt,jt,ve,it,Ft,Ot,Xt;function Nt(){le=new YT(j),le.init(),Ft=new IR(j,le),pe=new HT(j,le,t,Ft),qt=new FR(j,le),pe.reversedDepthBuffer&&g&&qt.buffers.depth.setReversed(!0),G=new QT(j),A=new MR,tt=new BR(j,le,qt,A,pe,Ft,G),yt=new qT(O),Tt=new nE(j),Ot=new IT(j,Tt),vt=new ZT(j,Tt,G,Ot),Zt=new $T(j,vt,Tt,Ot,G),jt=new JT(j,pe,tt),wt=new GT(A),Lt=new yR(O,yt,le,pe,Ot,wt),ee=new jR(O,A),ae=new ER,Dt=new DR(le),zt=new BT(O,yt,qt,Zt,M,m),Gt=new PR(O,Zt,pe),Xt=new XR(j,G,pe,qt),ve=new zT(j,le,G),it=new KT(j,le,G),G.programs=Lt.programs,O.capabilities=pe,O.extensions=le,O.properties=A,O.renderLists=ae,O.shadowMap=Gt,O.state=qt,O.info=G}Nt(),w!==ci&&(E=new eA(w,i.width,i.height,l,c));const Mt=new VR(O,j);this.xr=Mt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const L=le.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=le.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(L){L!==void 0&&(W=L,this.setSize(z,I,!1))},this.getSize=function(L){return L.set(z,I)},this.setSize=function(L,et,gt=!0){if(Mt.isPresenting){ue("WebGLRenderer: Can't change size while VR device is presenting.");return}z=L,I=et,i.width=Math.floor(L*W),i.height=Math.floor(et*W),gt===!0&&(i.style.width=L+"px",i.style.height=et+"px"),E!==null&&E.setSize(i.width,i.height),this.setViewport(0,0,L,et)},this.getDrawingBufferSize=function(L){return L.set(z*W,I*W).floor()},this.setDrawingBufferSize=function(L,et,gt){z=L,I=et,W=gt,i.width=Math.floor(L*gt),i.height=Math.floor(et*gt),this.setViewport(0,0,L,et)},this.setEffects=function(L){if(w===ci){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let et=0;et<L.length;et++)if(L[et].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(U)},this.getViewport=function(L){return L.copy(K)},this.setViewport=function(L,et,gt,ht){L.isVector4?K.set(L.x,L.y,L.z,L.w):K.set(L,et,gt,ht),qt.viewport(U.copy(K).multiplyScalar(W).round())},this.getScissor=function(L){return L.copy(st)},this.setScissor=function(L,et,gt,ht){L.isVector4?st.set(L.x,L.y,L.z,L.w):st.set(L,et,gt,ht),qt.scissor(B.copy(st).multiplyScalar(W).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(L){qt.setScissorTest(mt=L)},this.setOpaqueSort=function(L){lt=L},this.setTransparentSort=function(L){_t=L},this.getClearColor=function(L){return L.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(L=!0,et=!0,gt=!0){let ht=0;if(L){let ct=!1;if(q!==null){const Bt=q.texture.format;ct=_.has(Bt)}if(ct){const Bt=q.texture.type,Yt=x.has(Bt),Ht=zt.getClearColor(),te=zt.getClearAlpha(),ie=Ht.r,ce=Ht.g,me=Ht.b;Yt?(T[0]=ie,T[1]=ce,T[2]=me,T[3]=te,j.clearBufferuiv(j.COLOR,0,T)):(D[0]=ie,D[1]=ce,D[2]=me,D[3]=te,j.clearBufferiv(j.COLOR,0,D))}else ht|=j.COLOR_BUFFER_BIT}et&&(ht|=j.DEPTH_BUFFER_BIT),gt&&(ht|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ht!==0&&j.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Kt,!1),i.removeEventListener("webglcontextrestored",fe,!1),i.removeEventListener("webglcontextcreationerror",He,!1),zt.dispose(),ae.dispose(),Dt.dispose(),A.dispose(),yt.dispose(),Zt.dispose(),Ot.dispose(),Xt.dispose(),Lt.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",qs),Mt.removeEventListener("sessionend",Ys),Fi.stop()};function Kt(L){L.preventDefault(),_u("WebGLRenderer: Context Lost."),J=!0}function fe(){_u("WebGLRenderer: Context Restored."),J=!1;const L=G.autoReset,et=Gt.enabled,gt=Gt.autoUpdate,ht=Gt.needsUpdate,ct=Gt.type;Nt(),G.autoReset=L,Gt.enabled=et,Gt.autoUpdate=gt,Gt.needsUpdate=ht,Gt.type=ct}function He(L){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ne(L){const et=L.target;et.removeEventListener("dispose",Ne),Bn(et)}function Bn(L){Mi(L),A.remove(L)}function Mi(L){const et=A.get(L).programs;et!==void 0&&(et.forEach(function(gt){Lt.releaseProgram(gt)}),L.isShaderMaterial&&Lt.releaseShaderCache(L))}this.renderBufferDirect=function(L,et,gt,ht,ct,Bt){et===null&&(et=kt);const Yt=ct.isMesh&&ct.matrixWorld.determinant()<0,Ht=bl(L,et,gt,ht,ct);qt.setMaterial(ht,Yt);let te=gt.index,ie=1;if(ht.wireframe===!0){if(te=vt.getWireframeAttribute(gt),te===void 0)return;ie=2}const ce=gt.drawRange,me=gt.attributes.position;let Qt=ce.start*ie,xe=(ce.start+ce.count)*ie;Bt!==null&&(Qt=Math.max(Qt,Bt.start*ie),xe=Math.min(xe,(Bt.start+Bt.count)*ie)),te!==null?(Qt=Math.max(Qt,0),xe=Math.min(xe,te.count)):me!=null&&(Qt=Math.max(Qt,0),xe=Math.min(xe,me.count));const $e=xe-Qt;if($e<0||$e===1/0)return;Ot.setup(ct,ht,Ht,gt,te);let tn,Oe=ve;if(te!==null&&(tn=Tt.get(te),Oe=it,Oe.setIndex(tn)),ct.isMesh)ht.wireframe===!0?(qt.setLineWidth(ht.wireframeLinewidth*se()),Oe.setMode(j.LINES)):Oe.setMode(j.TRIANGLES);else if(ct.isLine){let vn=ht.linewidth;vn===void 0&&(vn=1),qt.setLineWidth(vn*se()),ct.isLineSegments?Oe.setMode(j.LINES):ct.isLineLoop?Oe.setMode(j.LINE_LOOP):Oe.setMode(j.LINE_STRIP)}else ct.isPoints?Oe.setMode(j.POINTS):ct.isSprite&&Oe.setMode(j.TRIANGLES);if(ct.isBatchedMesh)if(ct._multiDrawInstances!==null)vu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount,ct._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))Oe.renderMultiDraw(ct._multiDrawStarts,ct._multiDrawCounts,ct._multiDrawCount);else{const vn=ct._multiDrawStarts,$t=ct._multiDrawCounts,In=ct._multiDrawCount,de=te?Tt.get(te).bytesPerElement:1,zn=A.get(ht).currentProgram.getUniforms();for(let Qn=0;Qn<In;Qn++)zn.setValue(j,"_gl_DrawID",Qn),Oe.render(vn[Qn]/de,$t[Qn])}else if(ct.isInstancedMesh)Oe.renderInstances(Qt,$e,ct.count);else if(gt.isInstancedBufferGeometry){const vn=gt._maxInstanceCount!==void 0?gt._maxInstanceCount:1/0,$t=Math.min(gt.instanceCount,vn);Oe.renderInstances(Qt,$e,$t)}else Oe.render(Qt,$e)};function ao(L,et,gt){L.transparent===!0&&L.side===ji&&L.forceSinglePass===!1?(L.side=Kn,L.needsUpdate=!0,Ca(L,et,gt),L.side=ds,L.needsUpdate=!0,Ca(L,et,gt),L.side=ji):Ca(L,et,gt)}this.compile=function(L,et,gt=null){gt===null&&(gt=L),H=Dt.get(gt),H.init(et),F.push(H),gt.traverseVisible(function(ct){ct.isLight&&ct.layers.test(et.layers)&&(H.pushLight(ct),ct.castShadow&&H.pushShadow(ct))}),L!==gt&&L.traverseVisible(function(ct){ct.isLight&&ct.layers.test(et.layers)&&(H.pushLight(ct),ct.castShadow&&H.pushShadow(ct))}),H.setupLights();const ht=new Set;return L.traverse(function(ct){if(!(ct.isMesh||ct.isPoints||ct.isLine||ct.isSprite))return;const Bt=ct.material;if(Bt)if(Array.isArray(Bt))for(let Yt=0;Yt<Bt.length;Yt++){const Ht=Bt[Yt];ao(Ht,gt,ct),ht.add(Ht)}else ao(Bt,gt,ct),ht.add(Bt)}),H=F.pop(),ht},this.compileAsync=function(L,et,gt=null){const ht=this.compile(L,et,gt);return new Promise(ct=>{function Bt(){if(ht.forEach(function(Yt){A.get(Yt).currentProgram.isReady()&&ht.delete(Yt)}),ht.size===0){ct(L);return}setTimeout(Bt,10)}le.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Ws=null;function Sl(L){Ws&&Ws(L)}function qs(){Fi.stop()}function Ys(){Fi.start()}const Fi=new Rx;Fi.setAnimationLoop(Sl),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(L){Ws=L,Mt.setAnimationLoop(L),L===null?Fi.stop():Fi.start()},Mt.addEventListener("sessionstart",qs),Mt.addEventListener("sessionend",Ys),this.render=function(L,et){if(et!==void 0&&et.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(J===!0)return;const gt=Mt.enabled===!0&&Mt.isPresenting===!0,ht=E!==null&&(q===null||gt)&&E.begin(O,q);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),et.parent===null&&et.matrixWorldAutoUpdate===!0&&et.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(et),et=Mt.getCamera()),L.isScene===!0&&L.onBeforeRender(O,L,et,q),H=Dt.get(L,F.length),H.init(et),F.push(H),It.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),Y.setFromProjectionMatrix(It,qi,et.reversedDepth),Ct=this.localClippingEnabled,At=wt.init(this.clippingPlanes,Ct),R=ae.get(L,P.length),R.init(),P.push(R),Mt.enabled===!0&&Mt.isPresenting===!0){const Yt=O.xr.getDepthSensingMesh();Yt!==null&&Zs(Yt,et,-1/0,O.sortObjects)}Zs(L,et,0,O.sortObjects),R.finish(),O.sortObjects===!0&&R.sort(lt,_t),Wt=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,Wt&&zt.addToRenderList(R,L),this.info.render.frame++,At===!0&&wt.beginShadows();const ct=H.state.shadowsArray;if(Gt.render(ct,L,et),At===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ht&&E.hasRenderPass())===!1){const Yt=R.opaque,Ht=R.transmissive;if(H.setupLights(),et.isArrayCamera){const te=et.cameras;if(Ht.length>0)for(let ie=0,ce=te.length;ie<ce;ie++){const me=te[ie];cn(Yt,Ht,L,me)}Wt&&zt.render(L);for(let ie=0,ce=te.length;ie<ce;ie++){const me=te[ie];bi(R,L,me,me.viewport)}}else Ht.length>0&&cn(Yt,Ht,L,et),Wt&&zt.render(L),bi(R,L,et)}q!==null&&k===0&&(tt.updateMultisampleRenderTarget(q),tt.updateRenderTargetMipmap(q)),ht&&E.end(O),L.isScene===!0&&L.onAfterRender(O,L,et),Ot.resetDefaultState(),at=-1,$=null,F.pop(),F.length>0?(H=F[F.length-1],At===!0&&wt.setGlobalState(O.clippingPlanes,H.state.camera)):H=null,P.pop(),P.length>0?R=P[P.length-1]:R=null};function Zs(L,et,gt,ht){if(L.visible===!1)return;if(L.layers.test(et.layers)){if(L.isGroup)gt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(et);else if(L.isLight)H.pushLight(L),L.castShadow&&H.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Y.intersectsSprite(L)){ht&&Ut.setFromMatrixPosition(L.matrixWorld).applyMatrix4(It);const Yt=Zt.update(L),Ht=L.material;Ht.visible&&R.push(L,Yt,Ht,gt,Ut.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Y.intersectsObject(L))){const Yt=Zt.update(L),Ht=L.material;if(ht&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ut.copy(L.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),Ut.copy(Yt.boundingSphere.center)),Ut.applyMatrix4(L.matrixWorld).applyMatrix4(It)),Array.isArray(Ht)){const te=Yt.groups;for(let ie=0,ce=te.length;ie<ce;ie++){const me=te[ie],Qt=Ht[me.materialIndex];Qt&&Qt.visible&&R.push(L,Yt,Qt,gt,Ut.z,me)}}else Ht.visible&&R.push(L,Yt,Ht,gt,Ut.z,null)}}const Bt=L.children;for(let Yt=0,Ht=Bt.length;Yt<Ht;Yt++)Zs(Bt[Yt],et,gt,ht)}function bi(L,et,gt,ht){const{opaque:ct,transmissive:Bt,transparent:Yt}=L;H.setupLightsView(gt),At===!0&&wt.setGlobalState(O.clippingPlanes,gt),ht&&qt.viewport(U.copy(ht)),ct.length>0&&_n(ct,et,gt),Bt.length>0&&_n(Bt,et,gt),Yt.length>0&&_n(Yt,et,gt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function cn(L,et,gt,ht){if((gt.isScene===!0?gt.overrideMaterial:null)!==null)return;if(H.state.transmissionRenderTarget[ht.id]===void 0){const Qt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");H.state.transmissionRenderTarget[ht.id]=new Zi(1,1,{generateMipmaps:!0,type:Qt?Aa:ci,minFilter:Gs,samples:Math.max(4,pe.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace})}const Bt=H.state.transmissionRenderTarget[ht.id],Yt=ht.viewport||U;Bt.setSize(Yt.z*O.transmissionResolutionScale,Yt.w*O.transmissionResolutionScale);const Ht=O.getRenderTarget(),te=O.getActiveCubeFace(),ie=O.getActiveMipmapLevel();O.setRenderTarget(Bt),O.getClearColor(ot),St=O.getClearAlpha(),St<1&&O.setClearColor(16777215,.5),O.clear(),Wt&&zt.render(gt);const ce=O.toneMapping;O.toneMapping=Yi;const me=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),H.setupLightsView(ht),At===!0&&wt.setGlobalState(O.clippingPlanes,ht),_n(L,gt,ht),tt.updateMultisampleRenderTarget(Bt),tt.updateRenderTargetMipmap(Bt),le.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let xe=0,$e=et.length;xe<$e;xe++){const tn=et[xe],{object:Oe,geometry:vn,material:$t,group:In}=tn;if($t.side===ji&&Oe.layers.test(ht.layers)){const de=$t.side;$t.side=Kn,$t.needsUpdate=!0,$i(Oe,gt,ht,vn,$t,In),$t.side=de,$t.needsUpdate=!0,Qt=!0}}Qt===!0&&(tt.updateMultisampleRenderTarget(Bt),tt.updateRenderTargetMipmap(Bt))}O.setRenderTarget(Ht,te,ie),O.setClearColor(ot,St),me!==void 0&&(ht.viewport=me),O.toneMapping=ce}function _n(L,et,gt){const ht=et.isScene===!0?et.overrideMaterial:null;for(let ct=0,Bt=L.length;ct<Bt;ct++){const Yt=L[ct],{object:Ht,geometry:te,group:ie}=Yt;let ce=Yt.material;ce.allowOverride===!0&&ht!==null&&(ce=ht),Ht.layers.test(gt.layers)&&$i(Ht,et,gt,te,ce,ie)}}function $i(L,et,gt,ht,ct,Bt){L.onBeforeRender(O,et,gt,ht,ct,Bt),L.modelViewMatrix.multiplyMatrices(gt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ct.onBeforeRender(O,et,gt,ht,L,Bt),ct.transparent===!0&&ct.side===ji&&ct.forceSinglePass===!1?(ct.side=Kn,ct.needsUpdate=!0,O.renderBufferDirect(gt,et,ht,ct,L,Bt),ct.side=ds,ct.needsUpdate=!0,O.renderBufferDirect(gt,et,ht,ct,L,Bt),ct.side=ji):O.renderBufferDirect(gt,et,ht,ct,L,Bt),L.onAfterRender(O,et,gt,ht,ct,Bt)}function Ca(L,et,gt){et.isScene!==!0&&(et=kt);const ht=A.get(L),ct=H.state.lights,Bt=H.state.shadowsArray,Yt=ct.state.version,Ht=Lt.getParameters(L,ct.state,Bt,et,gt),te=Lt.getProgramCacheKey(Ht);let ie=ht.programs;ht.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?et.environment:null,ht.fog=et.fog;const ce=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;ht.envMap=yt.get(L.envMap||ht.environment,ce),ht.envMapRotation=ht.environment!==null&&L.envMap===null?et.environmentRotation:L.envMapRotation,ie===void 0&&(L.addEventListener("dispose",Ne),ie=new Map,ht.programs=ie);let me=ie.get(te);if(me!==void 0){if(ht.currentProgram===me&&ht.lightsStateVersion===Yt)return Ml(L,Ht),me}else Ht.uniforms=Lt.getUniforms(L),L.onBeforeCompile(Ht,O),me=Lt.acquireProgram(Ht,te),ie.set(te,me),ht.uniforms=Ht.uniforms;const Qt=ht.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Qt.clippingPlanes=wt.uniform),Ml(L,Ht),ht.needsLights=so(L),ht.lightsStateVersion=Yt,ht.needsLights&&(Qt.ambientLightColor.value=ct.state.ambient,Qt.lightProbe.value=ct.state.probe,Qt.directionalLights.value=ct.state.directional,Qt.directionalLightShadows.value=ct.state.directionalShadow,Qt.spotLights.value=ct.state.spot,Qt.spotLightShadows.value=ct.state.spotShadow,Qt.rectAreaLights.value=ct.state.rectArea,Qt.ltc_1.value=ct.state.rectAreaLTC1,Qt.ltc_2.value=ct.state.rectAreaLTC2,Qt.pointLights.value=ct.state.point,Qt.pointLightShadows.value=ct.state.pointShadow,Qt.hemisphereLights.value=ct.state.hemi,Qt.directionalShadowMatrix.value=ct.state.directionalShadowMatrix,Qt.spotLightMatrix.value=ct.state.spotLightMatrix,Qt.spotLightMap.value=ct.state.spotLightMap,Qt.pointShadowMatrix.value=ct.state.pointShadowMatrix),ht.currentProgram=me,ht.uniformsList=null,me}function yl(L){if(L.uniformsList===null){const et=L.currentProgram.getUniforms();L.uniformsList=pu.seqWithValue(et.seq,L.uniforms)}return L.uniformsList}function Ml(L,et){const gt=A.get(L);gt.outputColorSpace=et.outputColorSpace,gt.batching=et.batching,gt.batchingColor=et.batchingColor,gt.instancing=et.instancing,gt.instancingColor=et.instancingColor,gt.instancingMorph=et.instancingMorph,gt.skinning=et.skinning,gt.morphTargets=et.morphTargets,gt.morphNormals=et.morphNormals,gt.morphColors=et.morphColors,gt.morphTargetsCount=et.morphTargetsCount,gt.numClippingPlanes=et.numClippingPlanes,gt.numIntersection=et.numClipIntersection,gt.vertexAlphas=et.vertexAlphas,gt.vertexTangents=et.vertexTangents,gt.toneMapping=et.toneMapping}function bl(L,et,gt,ht,ct){et.isScene!==!0&&(et=kt),tt.resetTextureUnits();const Bt=et.fog,Yt=ht.isMeshStandardMaterial||ht.isMeshLambertMaterial||ht.isMeshPhongMaterial?et.environment:null,Ht=q===null?O.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:$r,te=ht.isMeshStandardMaterial||ht.isMeshLambertMaterial&&!ht.envMap||ht.isMeshPhongMaterial&&!ht.envMap,ie=yt.get(ht.envMap||Yt,te),ce=ht.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,me=!!gt.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),Qt=!!gt.morphAttributes.position,xe=!!gt.morphAttributes.normal,$e=!!gt.morphAttributes.color;let tn=Yi;ht.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(tn=O.toneMapping);const Oe=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,vn=Oe!==void 0?Oe.length:0,$t=A.get(ht),In=H.state.lights;if(At===!0&&(Ct===!0||L!==$)){const fn=L===$&&ht.id===at;wt.setState(ht,L,fn)}let de=!1;ht.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==In.state.version||$t.outputColorSpace!==Ht||ct.isBatchedMesh&&$t.batching===!1||!ct.isBatchedMesh&&$t.batching===!0||ct.isBatchedMesh&&$t.batchingColor===!0&&ct.colorTexture===null||ct.isBatchedMesh&&$t.batchingColor===!1&&ct.colorTexture!==null||ct.isInstancedMesh&&$t.instancing===!1||!ct.isInstancedMesh&&$t.instancing===!0||ct.isSkinnedMesh&&$t.skinning===!1||!ct.isSkinnedMesh&&$t.skinning===!0||ct.isInstancedMesh&&$t.instancingColor===!0&&ct.instanceColor===null||ct.isInstancedMesh&&$t.instancingColor===!1&&ct.instanceColor!==null||ct.isInstancedMesh&&$t.instancingMorph===!0&&ct.morphTexture===null||ct.isInstancedMesh&&$t.instancingMorph===!1&&ct.morphTexture!==null||$t.envMap!==ie||ht.fog===!0&&$t.fog!==Bt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==wt.numPlanes||$t.numIntersection!==wt.numIntersection)||$t.vertexAlphas!==ce||$t.vertexTangents!==me||$t.morphTargets!==Qt||$t.morphNormals!==xe||$t.morphColors!==$e||$t.toneMapping!==tn||$t.morphTargetsCount!==vn)&&(de=!0):(de=!0,$t.__version=ht.version);let zn=$t.currentProgram;de===!0&&(zn=Ca(ht,et,ct));let Qn=!1,Ei=!1,Jn=!1;const ze=zn.getUniforms(),un=$t.uniforms;if(qt.useProgram(zn.program)&&(Qn=!0,Ei=!0,Jn=!0),ht.id!==at&&(at=ht.id,Ei=!0),Qn||$!==L){qt.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),ze.setValue(j,"projectionMatrix",L.projectionMatrix),ze.setValue(j,"viewMatrix",L.matrixWorldInverse);const Ti=ze.map.cameraPosition;Ti!==void 0&&Ti.setValue(j,Pt.setFromMatrixPosition(L.matrixWorld)),pe.logarithmicDepthBuffer&&ze.setValue(j,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&ze.setValue(j,"isOrthographic",L.isOrthographicCamera===!0),$!==L&&($=L,Ei=!0,Jn=!0)}if($t.needsLights&&(In.state.directionalShadowMap.length>0&&ze.setValue(j,"directionalShadowMap",In.state.directionalShadowMap,tt),In.state.spotShadowMap.length>0&&ze.setValue(j,"spotShadowMap",In.state.spotShadowMap,tt),In.state.pointShadowMap.length>0&&ze.setValue(j,"pointShadowMap",In.state.pointShadowMap,tt)),ct.isSkinnedMesh){ze.setOptional(j,ct,"bindMatrix"),ze.setOptional(j,ct,"bindMatrixInverse");const fn=ct.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),ze.setValue(j,"boneTexture",fn.boneTexture,tt))}ct.isBatchedMesh&&(ze.setOptional(j,ct,"batchingTexture"),ze.setValue(j,"batchingTexture",ct._matricesTexture,tt),ze.setOptional(j,ct,"batchingIdTexture"),ze.setValue(j,"batchingIdTexture",ct._indirectTexture,tt),ze.setOptional(j,ct,"batchingColorTexture"),ct._colorsTexture!==null&&ze.setValue(j,"batchingColorTexture",ct._colorsTexture,tt));const Hn=gt.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&jt.update(ct,gt,zn),(Ei||$t.receiveShadow!==ct.receiveShadow)&&($t.receiveShadow=ct.receiveShadow,ze.setValue(j,"receiveShadow",ct.receiveShadow)),(ht.isMeshStandardMaterial||ht.isMeshLambertMaterial||ht.isMeshPhongMaterial)&&ht.envMap===null&&et.environment!==null&&(un.envMapIntensity.value=et.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=qR()),Ei&&(ze.setValue(j,"toneMappingExposure",O.toneMappingExposure),$t.needsLights&&hs(un,Jn),Bt&&ht.fog===!0&&ee.refreshFogUniforms(un,Bt),ee.refreshMaterialUniforms(un,ht,W,I,H.state.transmissionRenderTarget[L.id]),pu.upload(j,yl($t),un,tt)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(pu.upload(j,yl($t),un,tt),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&ze.setValue(j,"center",ct.center),ze.setValue(j,"modelViewMatrix",ct.modelViewMatrix),ze.setValue(j,"normalMatrix",ct.normalMatrix),ze.setValue(j,"modelMatrix",ct.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const fn=ht.uniformsGroups;for(let Ti=0,ta=fn.length;Ti<ta;Ti++){const Ks=fn[Ti];Xt.update(Ks,zn),Xt.bind(Ks,zn)}}return zn}function hs(L,et){L.ambientLightColor.needsUpdate=et,L.lightProbe.needsUpdate=et,L.directionalLights.needsUpdate=et,L.directionalLightShadows.needsUpdate=et,L.pointLights.needsUpdate=et,L.pointLightShadows.needsUpdate=et,L.spotLights.needsUpdate=et,L.spotLightShadows.needsUpdate=et,L.rectAreaLights.needsUpdate=et,L.hemisphereLights.needsUpdate=et}function so(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(L,et,gt){const ht=A.get(L);ht.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),A.get(L.texture).__webglTexture=et,A.get(L.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:gt,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,et){const gt=A.get(L);gt.__webglFramebuffer=et,gt.__useDefaultFramebuffer=et===void 0};const Da=j.createFramebuffer();this.setRenderTarget=function(L,et=0,gt=0){q=L,V=et,k=gt;let ht=null,ct=!1,Bt=!1;if(L){const Ht=A.get(L);if(Ht.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(j.FRAMEBUFFER,Ht.__webglFramebuffer),U.copy(L.viewport),B.copy(L.scissor),nt=L.scissorTest,qt.viewport(U),qt.scissor(B),qt.setScissorTest(nt),at=-1;return}else if(Ht.__webglFramebuffer===void 0)tt.setupRenderTarget(L);else if(Ht.__hasExternalTextures)tt.rebindTextures(L,A.get(L.texture).__webglTexture,A.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const ce=L.depthTexture;if(Ht.__boundDepthTexture!==ce){if(ce!==null&&A.has(ce)&&(L.width!==ce.image.width||L.height!==ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(L)}}const te=L.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Bt=!0);const ie=A.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ie[et])?ht=ie[et][gt]:ht=ie[et],ct=!0):L.samples>0&&tt.useMultisampledRTT(L)===!1?ht=A.get(L).__webglMultisampledFramebuffer:Array.isArray(ie)?ht=ie[gt]:ht=ie,U.copy(L.viewport),B.copy(L.scissor),nt=L.scissorTest}else U.copy(K).multiplyScalar(W).floor(),B.copy(st).multiplyScalar(W).floor(),nt=mt;if(gt!==0&&(ht=Da),qt.bindFramebuffer(j.FRAMEBUFFER,ht)&&qt.drawBuffers(L,ht),qt.viewport(U),qt.scissor(B),qt.setScissorTest(nt),ct){const Ht=A.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+et,Ht.__webglTexture,gt)}else if(Bt){const Ht=et;for(let te=0;te<L.textures.length;te++){const ie=A.get(L.textures[te]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+te,ie.__webglTexture,gt,Ht)}}else if(L!==null&&gt!==0){const Ht=A.get(L.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ht.__webglTexture,gt)}at=-1},this.readRenderTargetPixels=function(L,et,gt,ht,ct,Bt,Yt,Ht=0){if(!(L&&L.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let te=A.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Yt!==void 0&&(te=te[Yt]),te){qt.bindFramebuffer(j.FRAMEBUFFER,te);try{const ie=L.textures[Ht],ce=ie.format,me=ie.type;if(L.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ht),!pe.textureFormatReadable(ce)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(me)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}et>=0&&et<=L.width-ht&&gt>=0&&gt<=L.height-ct&&j.readPixels(et,gt,ht,ct,Ft.convert(ce),Ft.convert(me),Bt)}finally{const ie=q!==null?A.get(q).__webglFramebuffer:null;qt.bindFramebuffer(j.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(L,et,gt,ht,ct,Bt,Yt,Ht=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let te=A.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Yt!==void 0&&(te=te[Yt]),te)if(et>=0&&et<=L.width-ht&&gt>=0&&gt<=L.height-ct){qt.bindFramebuffer(j.FRAMEBUFFER,te);const ie=L.textures[Ht],ce=ie.format,me=ie.type;if(L.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ht),!pe.textureFormatReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Qt),j.bufferData(j.PIXEL_PACK_BUFFER,Bt.byteLength,j.STREAM_READ),j.readPixels(et,gt,ht,ct,Ft.convert(ce),Ft.convert(me),0);const xe=q!==null?A.get(q).__webglFramebuffer:null;qt.bindFramebuffer(j.FRAMEBUFFER,xe);const $e=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await cb(j,$e,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Qt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Bt),j.deleteBuffer(Qt),j.deleteSync($e),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,et=null,gt=0){const ht=Math.pow(2,-gt),ct=Math.floor(L.image.width*ht),Bt=Math.floor(L.image.height*ht),Yt=et!==null?et.x:0,Ht=et!==null?et.y:0;tt.setTexture2D(L,0),j.copyTexSubImage2D(j.TEXTURE_2D,gt,0,0,Yt,Ht,ct,Bt),qt.unbindTexture()};const Na=j.createFramebuffer(),ps=j.createFramebuffer();this.copyTextureToTexture=function(L,et,gt=null,ht=null,ct=0,Bt=0){let Yt,Ht,te,ie,ce,me,Qt,xe,$e;const tn=L.isCompressedTexture?L.mipmaps[Bt]:L.image;if(gt!==null)Yt=gt.max.x-gt.min.x,Ht=gt.max.y-gt.min.y,te=gt.isBox3?gt.max.z-gt.min.z:1,ie=gt.min.x,ce=gt.min.y,me=gt.isBox3?gt.min.z:0;else{const un=Math.pow(2,-ct);Yt=Math.floor(tn.width*un),Ht=Math.floor(tn.height*un),L.isDataArrayTexture?te=tn.depth:L.isData3DTexture?te=Math.floor(tn.depth*un):te=1,ie=0,ce=0,me=0}ht!==null?(Qt=ht.x,xe=ht.y,$e=ht.z):(Qt=0,xe=0,$e=0);const Oe=Ft.convert(et.format),vn=Ft.convert(et.type);let $t;et.isData3DTexture?(tt.setTexture3D(et,0),$t=j.TEXTURE_3D):et.isDataArrayTexture||et.isCompressedArrayTexture?(tt.setTexture2DArray(et,0),$t=j.TEXTURE_2D_ARRAY):(tt.setTexture2D(et,0),$t=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,et.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,et.unpackAlignment);const In=j.getParameter(j.UNPACK_ROW_LENGTH),de=j.getParameter(j.UNPACK_IMAGE_HEIGHT),zn=j.getParameter(j.UNPACK_SKIP_PIXELS),Qn=j.getParameter(j.UNPACK_SKIP_ROWS),Ei=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,tn.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,tn.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,ie),j.pixelStorei(j.UNPACK_SKIP_ROWS,ce),j.pixelStorei(j.UNPACK_SKIP_IMAGES,me);const Jn=L.isDataArrayTexture||L.isData3DTexture,ze=et.isDataArrayTexture||et.isData3DTexture;if(L.isDepthTexture){const un=A.get(L),Hn=A.get(et),fn=A.get(un.__renderTarget),Ti=A.get(Hn.__renderTarget);qt.bindFramebuffer(j.READ_FRAMEBUFFER,fn.__webglFramebuffer),qt.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let ta=0;ta<te;ta++)Jn&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,A.get(L).__webglTexture,ct,me+ta),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,A.get(et).__webglTexture,Bt,$e+ta)),j.blitFramebuffer(ie,ce,Yt,Ht,Qt,xe,Yt,Ht,j.DEPTH_BUFFER_BIT,j.NEAREST);qt.bindFramebuffer(j.READ_FRAMEBUFFER,null),qt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(ct!==0||L.isRenderTargetTexture||A.has(L)){const un=A.get(L),Hn=A.get(et);qt.bindFramebuffer(j.READ_FRAMEBUFFER,Na),qt.bindFramebuffer(j.DRAW_FRAMEBUFFER,ps);for(let fn=0;fn<te;fn++)Jn?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,un.__webglTexture,ct,me+fn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,un.__webglTexture,ct),ze?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Hn.__webglTexture,Bt,$e+fn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Hn.__webglTexture,Bt),ct!==0?j.blitFramebuffer(ie,ce,Yt,Ht,Qt,xe,Yt,Ht,j.COLOR_BUFFER_BIT,j.NEAREST):ze?j.copyTexSubImage3D($t,Bt,Qt,xe,$e+fn,ie,ce,Yt,Ht):j.copyTexSubImage2D($t,Bt,Qt,xe,ie,ce,Yt,Ht);qt.bindFramebuffer(j.READ_FRAMEBUFFER,null),qt.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else ze?L.isDataTexture||L.isData3DTexture?j.texSubImage3D($t,Bt,Qt,xe,$e,Yt,Ht,te,Oe,vn,tn.data):et.isCompressedArrayTexture?j.compressedTexSubImage3D($t,Bt,Qt,xe,$e,Yt,Ht,te,Oe,tn.data):j.texSubImage3D($t,Bt,Qt,xe,$e,Yt,Ht,te,Oe,vn,tn):L.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Bt,Qt,xe,Yt,Ht,Oe,vn,tn.data):L.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Bt,Qt,xe,tn.width,tn.height,Oe,tn.data):j.texSubImage2D(j.TEXTURE_2D,Bt,Qt,xe,Yt,Ht,Oe,vn,tn);j.pixelStorei(j.UNPACK_ROW_LENGTH,In),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,de),j.pixelStorei(j.UNPACK_SKIP_PIXELS,zn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Qn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Ei),Bt===0&&et.generateMipmaps&&j.generateMipmap($t),qt.unbindTexture()},this.initRenderTarget=function(L){A.get(L).__webglFramebuffer===void 0&&tt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?tt.setTextureCube(L,0):L.isData3DTexture?tt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?tt.setTexture2DArray(L,0):tt.setTexture2D(L,0),qt.unbindTexture()},this.resetState=function(){V=0,k=0,q=null,qt.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const ll=400,ZR=[.5,.8,.95,.6,.38,.14,.05,.55,.5,.8,.95,.6,.38,.14,.05,.55],Wr=3,Vv=Math.PI*.75,kv=2.6,Eh=1.4,cl=1.8;function KR({eegData:r,yScale:t,onExit:i}){const s=Z.useRef(null),l=Z.useRef(null),c=Z.useRef(null),f=Z.useRef(null),p=Z.useRef([]),m=Z.useRef(null),h=Z.useRef(null),S=Z.useRef(!1),v=Z.useRef(new $b),g=Z.useRef(r),y=Z.useRef(t),M=Z.useRef(i);g.current=r,y.current=t,M.current=i;const w=Z.useCallback(()=>{if(S.current)return;S.current=!0,m.current&&(m.current.end().catch(()=>{}),m.current=null),h.current!=null&&(cancelAnimationFrame(h.current),h.current=null);const _=l.current;_&&(_.xr.enabled=!1,_.setAnimationLoop(null),_.dispose(),l.current=null),p.current=[]},[]);return Z.useEffect(()=>{const _=s.current;if(!_)return;S.current=!1;const x=v.current;x.start();const T=new Tb;T.background=new be(198159),T.fog=new Fp(198159,.07),c.current=T;const D=new li(80,window.innerWidth/window.innerHeight,.05,60);D.position.set(0,Eh,0),f.current=D;const R=new YR({antialias:!0,alpha:!1});R.setPixelRatio(Math.min(window.devicePixelRatio,2)),R.setSize(window.innerWidth,window.innerHeight),R.xr.enabled=!0,R.toneMapping=Ap,R.toneMappingExposure=1.2,_.appendChild(R.domElement),l.current=R;const H=new Kb(1122884,.8);T.add(H);const P=new Zb(4491519,1.5,25);P.position.set(0,Eh+1,0),T.add(P);const F=1500,E=new Float32Array(F*3),O=new Float32Array(F*3);for(let I=0;I<F;I++){const W=10+Math.random()*15,lt=Math.random()*Math.PI*2,_t=Math.acos(2*Math.random()-1);E[I*3]=W*Math.sin(_t)*Math.cos(lt),E[I*3+1]=W*Math.sin(_t)*Math.sin(lt),E[I*3+2]=W*Math.cos(_t),O[I*3]=.7+Math.random()*.3,O[I*3+1]=.75+Math.random()*.25,O[I*3+2]=.85+Math.random()*.15}const J=new Fn;J.setAttribute("position",new Ln(E,3)),J.setAttribute("color",new Ln(O,3));const V=new xp({size:.05,vertexColors:!0,transparent:!0,opacity:.85,sizeAttenuation:!0}),k=new dv(J,V);T.add(k);const at=[{color:4853888,center:[5,2,-10],count:400,spread:5},{color:666208,center:[-6,1,-9],count:350,spread:4},{color:14928,center:[1,4,-12],count:300,spread:4}].map(({color:I,center:W,count:lt,spread:_t})=>{const K=new Float32Array(lt*3);for(let At=0;At<lt;At++)K[At*3]=W[0]+(Math.random()-.5)*_t,K[At*3+1]=W[1]+(Math.random()-.5)*_t,K[At*3+2]=W[2]+(Math.random()-.5)*_t;const st=new Fn;st.setAttribute("position",new Ln(K,3));const mt=new xp({color:I,size:.12,transparent:!0,opacity:.16,sizeAttenuation:!0,depthWrite:!1}),Y=new dv(st,mt);return T.add(Y),Y}),$=[],U=new be;for(let I=0;I<Ie;I++){const W=I/(Ie-1),lt=-Vv/2+W*Vv,_t=Eh+kv/2-W*kv,K=ZR[I],st=new Float32Array(ll*3),mt=new Float32Array(ll*3),Y=new Fn;Y.setAttribute("position",new Ln(st,3)),Y.setAttribute("color",new Ln(mt,3)),Y.setDrawRange(0,0);const At=new Hp({vertexColors:!0,transparent:!0,opacity:.92,linewidth:2}),Ct=new Sx(Y,At);T.add(Ct);const It=document.createElement("canvas");It.width=128,It.height=48;const Pt=It.getContext("2d");Pt.clearRect(0,0,128,48),U.setHSL(K,.9,.7),Pt.font="bold 28px monospace",Pt.fillStyle=`#${U.getHexString()}`,Pt.textAlign="center",Pt.textBaseline="middle",Pt.fillText(`Ch ${I+1}`,64,24);const Ut=new Ib(It),kt=new vx({map:Ut,transparent:!0,opacity:.65}),Wt=new Nb(kt);Wt.scale.set(.4,.15,1);const se=Math.sin(lt)*(Wr+.05),j=-Math.cos(lt)*(Wr+.05),he=se-Math.cos(lt)*(cl/2),le=j+Math.sin(lt)*(cl/2);Wt.position.set(he-Math.cos(lt)*.3,_t,le+Math.sin(lt)*.3),T.add(Wt);const pe=new xl(cl+.3,.14),qt=new Ip({color:new be().setHSL(K,1,.55),transparent:!0,opacity:.05,side:ji,depthWrite:!1}),G=new Qi(pe,qt);G.position.set(Math.sin(lt)*Wr,_t,-Math.cos(lt)*Wr),G.rotation.y=lt,T.add(G),$.push({line:Ct,geometry:Y,positions:st,colors:mt,angle:lt,yPos:_t,glowPlane:G,baseHue:K})}p.current=$;const B=new tE(12,24,660784,396830);T.add(B);function nt(I){const W=g.current,lt=W.buffers.current;if(!lt)return;const _t=W.samplesInBuffer.current,K=W.writeIndex.current,st=W.bufferSize;if(_t<2)return;const mt=_t>ll?Math.floor(_t/ll):1,Y=Math.min(ll,Math.ceil(_t/mt)),At=y.current||100;for(let Ct=0;Ct<Ie;Ct++){const{positions:It,colors:Pt,geometry:Ut,angle:kt,yPos:Wt,glowPlane:se,baseHue:j}=$[Ct],he=lt[Ct],le=Math.sin(kt)*Wr,pe=-Math.cos(kt)*Wr,qt=-Math.cos(kt),G=-Math.sin(kt),A=(j+Math.sin(I*.08+Ct*.4)*.08+1)%1,tt=.85+Math.sin(I*.15+Ct)*.1;let yt=0;for(let vt=0;vt<Y;vt++){const Zt=vt*mt,Lt=(K-_t+Zt+st)%st,ee=vt/Math.max(1,Y-1),ae=he[Lt]/At;yt+=ae*ae,It[vt*3]=le+qt*(ee-.5)*cl,It[vt*3+1]=Wt+ae*.14,It[vt*3+2]=pe+G*(ee-.5)*cl;const Dt=Math.sin(ee*Math.PI),wt=.35+Math.min(Math.abs(ae)*3,1)*.65,Gt=Math.min(.95,.5*Dt+wt*.5);U.setHSL(A,tt,Gt),Pt[vt*3]=U.r,Pt[vt*3+1]=U.g,Pt[vt*3+2]=U.b}Ut.attributes.position.needsUpdate=!0,Ut.attributes.color.needsUpdate=!0,Ut.setDrawRange(0,Y);const Tt=Math.sqrt(yt/Math.max(1,Y));se.material.opacity=Math.min(.2,.03+Tt*.9)}H.intensity=.6+Math.sin(I*.5)*.15,P.intensity=1.2+Math.sin(I*.3)*.4,k.rotation.y=I*.005,k.rotation.x=Math.sin(I*.003)*.02,at.forEach((Ct,It)=>{Ct.material.opacity=.1+Math.sin(I*.2+It*2.1)*.06,Ct.rotation.y=I*.003*(It%2===0?1:-1)})}async function ot(){let I=null;if(navigator.xr)for(const W of["immersive-vr","immersive-ar","inline"])try{if(await navigator.xr.isSessionSupported(W)){I=W;break}}catch{}if(I&&I!=="inline")try{const W=await navigator.xr.requestSession(I,{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});m.current=W,R.xr.setSession(W),W.addEventListener("end",()=>{m.current=null,M.current()}),R.setAnimationLoop(()=>{nt(x.getElapsedTime()),R.render(T,D)});return}catch{}St()}function St(){let I=!1,W=0,lt=0,_t=0,K=0,st=!0;const mt=R.domElement,Y=Pt=>{I=!0,st=!1,W=Pt.clientX,lt=Pt.clientY},At=()=>{I=!1},Ct=Pt=>{I&&(_t-=(Pt.clientX-W)*.003,K-=(Pt.clientY-lt)*.003,K=Math.max(-Math.PI/3,Math.min(Math.PI/3,K)),W=Pt.clientX,lt=Pt.clientY)};mt.addEventListener("pointerdown",Y),mt.addEventListener("pointerup",At),mt.addEventListener("pointermove",Ct);function It(){const Pt=x.getElapsedTime();st&&(_t=Pt*.04),D.rotation.order="YXZ",D.rotation.y=_t,D.rotation.x=K,nt(Pt),R.render(T,D),h.current=requestAnimationFrame(It)}h.current=requestAnimationFrame(It)}ot();function z(){l.current&&(D.aspect=window.innerWidth/window.innerHeight,D.updateProjectionMatrix(),R.setSize(window.innerWidth,window.innerHeight))}return window.addEventListener("resize",z),()=>{window.removeEventListener("resize",z),w(),_.contains(R.domElement)&&_.removeChild(R.domElement)}},[]),C.jsxs("div",{className:"xr-overlay",children:[C.jsx("div",{className:"xr-container",ref:s}),C.jsxs("div",{className:"xr-hud",children:[C.jsx("button",{className:"btn xr-exit-btn",onClick:()=>{w(),M.current()},children:"✕ Exit XR"}),C.jsxs("div",{className:"xr-info",children:[C.jsx("span",{className:"xr-badge",children:"WebXR"}),C.jsxs("span",{children:[Ie," channels · ±",t," µV"]})]})]})]})}const jv=256,Th=4,QR=2.5,bp=64,Xv=.25,JR=[{key:"Alpha",label:"α Alpha"},{key:"Beta",label:"β Beta"},{key:"Theta",label:"θ Theta"},{key:"Delta",label:"δ Delta"},{key:"Gamma",label:"γ Gamma"},{key:"Total",label:"Σ Total"}],Wv=[{label:"Fp1",x:-.3,y:-.85},{label:"Fp2",x:.3,y:-.85},{label:"F7",x:-.7,y:-.45},{label:"F3",x:-.35,y:-.45},{label:"Fz",x:0,y:-.4},{label:"F4",x:.35,y:-.45},{label:"F8",x:.7,y:-.45},{label:"C3",x:-.55,y:0},{label:"Cz",x:0,y:0},{label:"C4",x:.55,y:0},{label:"P3",x:-.45,y:.45},{label:"Pz",x:0,y:.42},{label:"P4",x:.45,y:.45},{label:"O1",x:-.25,y:.85},{label:"Oz",x:0,y:.8},{label:"O2",x:.25,y:.85}],Ah=[[6,10,20],[11,37,58],[18,92,109],[0,230,118],[255,215,64],[255,82,82],[255,255,255]],Pi=256,Mu=new Uint8Array(Pi),bu=new Uint8Array(Pi),Eu=new Uint8Array(Pi);(function(){const t=Ah.length-1;for(let i=0;i<Pi;i++){const l=i/(Pi-1)*t,c=Math.min(Math.floor(l),t-1),f=l-c,p=Ah[c],m=Ah[c+1];Mu[i]=p[0]+(m[0]-p[0])*f|0,bu[i]=p[1]+(m[1]-p[1])*f|0,Eu[i]=p[2]+(m[2]-p[2])*f|0}})();function $R(r,t){const i=r.length,s=[],l=[],c=[],f=[],p=[],m=[];for(let _=0;_<t;_++)for(let x=0;x<t;x++){const T=-1+2*(x+.5)/t,D=-1+2*(_+.5)/t,R=Math.sqrt(T*T+D*D);if(R>1.05)continue;s.push(_*t+x),l.push(T),c.push(D),f.push(R>.92?(1.05-R)/.13:1);const H=new Array(i);let P=-1,F=0;for(let E=0;E<i;E++){const O=T-r[E].x,J=D-r[E].y,V=Math.sqrt(O*O+J*J);if(V<.001){P=E;break}H[E]=1/V**QR,F+=H[E]}if(P>=0)p.push(P),m.push(new Array(i).fill(0));else{p.push(-1);for(let E=0;E<i;E++)H[E]/=F;m.push(H)}}const h=s.length,S=new Int32Array(s),v=new Float64Array(f),g=new Float64Array(l),y=new Float64Array(c),M=new Int16Array(p),w=new Float64Array(h*i);for(let _=0;_<h;_++){const x=_*i,T=m[_];for(let D=0;D<i;D++)w[x+D]=T[D]}return{cellCount:h,cellIndex:S,edgeFade:v,nx:g,ny:y,weights:w,exactElectrode:M}}function t2(r,t,i,s,l,c){const f=r.data;f.fill(0);let p=1/0,m=-1/0;for(let g=0;g<i.length;g++)i[g]<p&&(p=i[g]),i[g]>m&&(m=i[g]);m<=p&&(m=p+1);const h=m-p,S=(Pi-1)/h,v=t/l;for(let g=0;g<s.cellCount;g++){const y=s.cellIndex[g],M=y/l|0,w=y-M*l;let _;const x=s.exactElectrode[g];if(x>=0)_=i[x];else{_=0;const V=g*c;for(let k=0;k<c;k++)_+=s.weights[V+k]*i[k]}const T=Math.max(0,Math.min(Pi-1,(_-p)*S|0)),D=s.edgeFade[g]*255|0,R=Mu[T],H=bu[T],P=Eu[T],F=w*v|0,E=M*v|0,O=Math.min((w+1)*v|0,t),J=Math.min((M+1)*v|0,t);for(let V=E;V<J;V++){let k=(V*t+F)*4;for(let q=F;q<O;q++)f[k]=R,f[k+1]=H,f[k+2]=P,f[k+3]=D,k+=4}}}function e2(r,t,i,s,l){const c=Math.min(t,i),f=t/2,p=i/2,m=c*.4;let h=1/0,S=-1/0;for(let _=0;_<s.length;_++)s[_]<h&&(h=s[_]),s[_]>S&&(S=s[_]);S<=h&&(S=h+1);const v=S-h;r.strokeStyle="rgba(255,255,255,0.25)",r.lineWidth=1.5,r.beginPath(),r.arc(f,p,m,0,Math.PI*2),r.stroke(),r.beginPath(),r.moveTo(f-m*.08,p-m),r.lineTo(f,p-m-m*.12),r.lineTo(f+m*.08,p-m),r.strokeStyle="rgba(255,255,255,0.3)",r.lineWidth=1.5,r.lineJoin="round",r.stroke();for(const _ of[!0,!1]){const x=_?f-m:f+m,T=_?-1:1;r.beginPath(),r.moveTo(x,p-m*.12),r.quadraticCurveTo(x+T*m*.08,p,x,p+m*.12),r.strokeStyle="rgba(255,255,255,0.2)",r.lineWidth=1.2,r.stroke()}for(let _=0;_<l.length&&_<s.length;_++){const x=f+l[_].x*m,T=p+l[_].y*m,D=Math.max(0,Math.min(Pi-1,(s[_]-h)/v*(Pi-1)|0)),R=Mu[D],H=bu[D],P=Eu[D];r.beginPath(),r.arc(x,T,5,0,Math.PI*2),r.fillStyle=`rgba(${R},${H},${P},0.4)`,r.shadowColor=`rgba(${R},${H},${P},0.6)`,r.shadowBlur=6,r.fill(),r.shadowBlur=0,r.beginPath(),r.arc(x,T,3,0,Math.PI*2),r.fillStyle="rgba(255,255,255,0.9)",r.fill(),r.beginPath(),r.arc(x,T,2,0,Math.PI*2),r.fillStyle=`rgb(${R},${H},${P})`,r.fill(),r.fillStyle="rgba(255,255,255,0.65)",r.font="7px monospace",r.textAlign="center",r.fillText(l[_].label,x,T+10)}const g=10,y=i*.5,M=t-g-8,w=(i-y)/2;for(let _=0;_<y;_++){const x=Math.max(0,Math.min(Pi-1,(1-_/y)*(Pi-1)|0));r.fillStyle=`rgb(${Mu[x]},${bu[x]},${Eu[x]})`,r.fillRect(M,w+_,g,1)}r.strokeStyle="rgba(255,255,255,0.15)",r.lineWidth=.5,r.strokeRect(M,w,g,y),r.fillStyle="rgba(255,255,255,0.4)",r.font="7px monospace",r.textAlign="right",r.fillText(S.toFixed(1),M-3,w+4),r.fillText(h.toFixed(1),M-3,w+y)}const os=bp*4,n2=Z.memo(function({eegData:t}){var O;const i=Z.useRef(null),s=Z.useRef(0),l=Z.useRef(0),c=Z.useRef(window.devicePixelRatio||1),f=Z.useRef(!0),p=Z.useRef({w:0,h:0,pw:0,ph:0}),m=Z.useRef(new Array(Ie).fill(0)),h=Z.useRef(new Array(Ie).fill(0)),S=Z.useRef(0),v=Z.useRef(null),g=Z.useRef({}),y=Z.useRef(0),[M,w]=Z.useState("Alpha"),[_,x]=Z.useState(!1),[T,D]=Z.useState({}),[R,H]=Z.useState({band:"",freq:0}),P=Z.useMemo(()=>new ks(jv,Qe),[]),F=Z.useMemo(()=>$R(Wv,bp),[]);Z.useEffect(()=>{const J=i.current;if(!J)return;const V=J.getContext("2d",{alpha:!1}),k=document.createElement("canvas");k.width=os,k.height=os;const q=k.getContext("2d");(!v.current||v.current.width!==os)&&(v.current=new ImageData(os,os));const at=new ResizeObserver(U=>{const B=U[0];if(!B)return;const nt=window.devicePixelRatio||1;c.current=nt;const{width:ot,height:St}=B.contentRect;p.current={w:ot,h:St,pw:Math.round(ot*nt),ph:Math.round(St*nt)},f.current=!0});at.observe(J);const $=()=>{const{w:U,h:B,pw:nt,ph:ot}=p.current;if(U===0||B===0){s.current=requestAnimationFrame($);return}if(f.current&&(f.current=!1,J.width=nt,J.height=ot),V.setTransform(c.current,0,0,c.current,0,0),V.fillStyle="#0d1117",V.fillRect(0,0,U,B),l.current++,!_){const I=t.buffers.current,W=t.writeIndex.current,lt=t.samplesInBuffer.current;if(I&&lt>=jv){const _t=S.current,K=_t*Th,st=Math.min(K+Th,Ie),mt=h.current,Y=m.current,At=g.current;for(let It=K;It<st;It++){const Pt=P.analyseRing(I[It],W,lt);if(Pt){mt[It]=M==="Total"?Pt.totalPower:Pt.bandPowers[M]||0,Y[It]=Y[It]*(1-Xv)+mt[It]*Xv;for(const Ut of ln)At[Ut.name]=(At[Ut.name]||0)-(At[`_ch${It}_${Ut.name}`]||0)+(Pt.bandPowers[Ut.name]||0),At[`_ch${It}_${Ut.name}`]=Pt.bandPowers[Ut.name]||0}}S.current=(_t+1)%Math.ceil(Ie/Th);const Ct=performance.now();if(Ct-y.current>400){y.current=Ct;const It={};let Pt="",Ut=0;for(const kt of ln)It[kt.name]=(At[kt.name]||0)/Ie,It[kt.name]>Ut&&(Ut=It[kt.name],Pt=kt.name);D(It),H(kt=>kt.band===Pt?kt:{band:Pt,freq:0})}}}const St=m.current;if(St.some(I=>I!==0)){const I=v.current;t2(I,os,St,F,bp,Ie),q.putImageData(I,0,0);const lt=Math.min(U,B)*.4,_t=U/2,K=B/2,st=lt*2.1;V.imageSmoothingEnabled=!0,V.imageSmoothingQuality="high",V.drawImage(k,0,0,os,os,_t-st/2,K-st/2,st,st),e2(V,U,B,St,Wv)}else V.fillStyle="#4b5563",V.font="13px monospace",V.textAlign="center",V.fillText("Collecting samples…",U/2,B/2);s.current=requestAnimationFrame($)};return s.current=requestAnimationFrame($),()=>{cancelAnimationFrame(s.current),at.disconnect()}},[t,M,_,P,F]);const E=((O=ln.find(J=>J.name===R.band))==null?void 0:O.color)||"#8b949e";return C.jsxs("div",{className:"topomap-panel",children:[C.jsxs("div",{className:"topomap-toolbar",children:[C.jsx("span",{className:"topomap-title",children:"Topomap"}),C.jsx("div",{className:"topomap-metrics",children:JR.map(J=>C.jsx("button",{className:`topo-metric${M===J.key?" active":""}`,onClick:()=>w(J.key),children:J.label},J.key))}),C.jsx("span",{className:"topo-dominant",children:C.jsx("strong",{style:{color:E},children:R.band||"—"})}),C.jsx("button",{className:`btn topo-pause${_?" active":""}`,onClick:()=>x(J=>!J),children:_?"▶":"⏸"})]}),C.jsx("div",{className:"topomap-canvas-wrap",children:C.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}})}),C.jsx("div",{className:"topomap-bands",children:ln.map(J=>{const V=T[J.name]||0,k=Math.max(...ln.map(at=>T[at.name]||0),1e-6),q=k>0?V/k*100:0;return C.jsxs("div",{className:"topo-band",children:[C.jsx("span",{className:"topo-band-dot",style:{background:J.color}}),C.jsx("span",{className:"topo-band-name",style:{color:J.color},children:J.label}),C.jsx("div",{className:"topo-band-track",children:C.jsx("div",{className:"topo-band-fill",style:{width:`${q}%`,background:J.color}})}),C.jsx("span",{className:"topo-band-val",children:V<.01?V.toExponential(1):V.toFixed(2)})]},J.name)})})]})}),ls=256,qv=60,Yv=6;function i2(){const r=new Uint8ClampedArray(1024);for(let t=0;t<256;t++){const i=t/255;let s,l,c;if(i<.25){const p=i/.25;s=48+p*20,l=18+p*100,c=120+p*135}else if(i<.5){const p=(i-.25)/.25;s=68-p*40,l=118+p*120,c=255-p*80}else if(i<.75){const p=(i-.5)/.25;s=28+p*200,l=238-p*40,c=175-p*130}else{const p=(i-.75)/.25;s=228+p*27,l=198-p*160,c=45-p*40}const f=t*4;r[f]=Math.max(0,Math.min(255,Math.round(s))),r[f+1]=Math.max(0,Math.min(255,Math.round(l))),r[f+2]=Math.max(0,Math.min(255,Math.round(c))),r[f+3]=255}return r}const qr=i2(),a2=Z.memo(function({eegData:t}){const i=Z.useRef(null),s=Z.useRef(0),l=Z.useRef(0),c=Z.useRef(window.devicePixelRatio||1),f=Z.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),p=Z.useRef(!0),m=Z.useRef(new Float64Array(ls)),h=Z.useRef([]),S=Z.useRef(400),v=Z.useRef(-60),[g,y]=Z.useState(-1),[M,w]=Z.useState(!1),_=Z.useMemo(()=>new ks(ls,Qe),[]),x=Z.useMemo(()=>{const R=Qe/ls;return Math.min(Math.ceil(qv/R)+1,(ls>>1)+1)},[]);Z.useEffect(()=>{const R=i.current;if(!R)return;const H=R.getContext("2d",{alpha:!1}),P=new ResizeObserver(E=>{const O=E[0];if(!O)return;const J=window.devicePixelRatio||1;c.current=J;const{width:V,height:k}=O.contentRect;f.current={w:V,h:k,pw:Math.round(V*J),ph:Math.round(k*J),dpr:J},p.current=!0,S.current=Math.max(200,Math.round(V))});P.observe(R);const F=()=>{const{w:E,h:O,pw:J,ph:V}=f.current;if(E===0||O===0){s.current=requestAnimationFrame(F);return}if(p.current&&(p.current=!1,R.width=J,R.height=V),H.setTransform(c.current,0,0,c.current,0,0),l.current++,!M&&l.current%Yv===0){const k=t.buffers.current,q=t.writeIndex.current,at=t.samplesInBuffer.current;if(k&&at>=ls){let $;if(g===-1){const U=m.current,B=t.bufferSize,nt=(q-ls+B)%B;for(let ot=0;ot<ls;ot++){let St=0;const z=(nt+ot)%B;for(let I=0;I<Ie;I++)St+=k[I][z];U[ot]=St/Ie}$=_.analyse(U,0)}else $=_.analyseRing(k[g],q,at);if($){const U=new Float64Array(x);for(let B=0;B<x;B++)U[B]=$.psd[B];h.current.push(U),h.current.length>S.current&&h.current.shift()}}}T(H,E,O),s.current=requestAnimationFrame(F)};return s.current=requestAnimationFrame(F),()=>{cancelAnimationFrame(s.current),P.disconnect()}},[t,g,M,_,x]);function T(R,H,P){R.fillStyle="#0d1117",R.fillRect(0,0,H,P);const F=h.current;if(F.length<2){R.fillStyle="#4b5563",R.font="13px monospace",R.textAlign="center",R.fillText("Collecting spectrogram data…",H/2,P/2);return}const E=44,O=12,J=8,V=22,k=H-E-O,q=P-J-V,at=v.current;let $=1e-30;for(let st=0;st<F.length;st++){const mt=F[st];for(let Y=1;Y<mt.length;Y++)mt[Y]>$&&($=mt[Y])}const U=F.length,B=x-1,nt=k/U,ot=q/B;for(let st=0;st<U;st++){const mt=F[st],Y=E+st*nt;for(let At=0;At<B;At++){const Ct=mt[At+1],It=10*Math.log10((Ct||1e-30)/$),Pt=Math.max(0,Math.min(1,(It-at)/-at)),Ut=Math.round(Pt*255)*4,kt=qr[Ut],Wt=qr[Ut+1],se=qr[Ut+2],j=J+(B-1-At)*ot;R.fillStyle=`rgb(${kt},${Wt},${se})`,R.fillRect(Y,j,Math.ceil(nt)+1,Math.ceil(ot)+1)}}const St=Qe/ls;R.fillStyle="#8b949e",R.font="9px monospace",R.textAlign="right";for(const st of[5,10,20,30,40,50]){if(st>qv)continue;const mt=Math.round(st/St)-1;if(mt<0||mt>=B)continue;const Y=J+(B-1-mt)*ot;R.fillText(`${st}`,E-4,Y+3)}R.save(),R.translate(10,J+q/2),R.rotate(-Math.PI/2),R.textAlign="center",R.fillStyle="#8b949e",R.font="9px monospace",R.fillText("Hz",0,0),R.restore();const z=U*Yv/60;R.textAlign="center",R.fillStyle="#8b949e",R.font="9px monospace";const I=z>30?10:z>10?5:2;for(let st=0;st<=z;st+=I){const mt=E+st/z*k;R.fillText(`-${(z-st).toFixed(0)}s`,mt,P-4)}R.fillText("now",E+k,P-4);const W=8,lt=H-O+2,_t=J,K=q;for(let st=0;st<K;st++){const mt=1-st/K,Y=Math.round(mt*255)*4;R.fillStyle=`rgb(${qr[Y]},${qr[Y+1]},${qr[Y+2]})`,R.fillRect(lt,_t+st,W,1)}R.fillStyle="#8b949e",R.font="8px monospace",R.textAlign="left",R.fillText("0",lt+W+2,_t+6),R.fillText(`${at}`,lt+W+2,_t+K),R.fillText("dB",lt+W+2,_t+K/2+3)}const D=g===-1?"Avg":`Ch ${g+1}`;return C.jsxs("div",{className:"spectrogram-panel",children:[C.jsxs("div",{className:"spectrogram-toolbar",children:[C.jsxs("span",{className:"spectrogram-title",children:["Spectrogram"," ",C.jsx("small",{style:{color:"var(--text-dim)",fontWeight:400},children:D})]}),C.jsxs("div",{className:"spectrogram-channels",children:[C.jsx("button",{className:`sp-ch${g===-1?" active":""}`,onClick:()=>y(-1),children:"Avg"}),Array.from({length:Ie},(R,H)=>C.jsx("button",{className:`sp-ch${g===H?" active":""}`,onClick:()=>y(H),children:H+1},H))]}),C.jsx("div",{className:"spectrogram-ctrls",children:C.jsx("button",{className:`btn${M?" active":""}`,onClick:()=>w(R=>!R),children:M?"▶":"⏸"})})]}),C.jsxs("div",{className:"spectrogram-canvas-wrap",children:[C.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}}),M&&C.jsx("div",{className:"spectral-paused",children:"PAUSED"})]})]})});function s2(r,t,i,s){if(r<=0)return 0;const l=r/i,c=1/(1+Math.pow(l,2*s)),f=t/r,p=1/(1+Math.pow(f,2*s));return Math.sqrt(c*p)}const r2=Z.memo(function({enabled:t,lowcut:i,highcut:s,order:l=5}){const c=Z.useRef(null),f=Z.useRef(window.devicePixelRatio||1),p=Z.useRef({w:0,h:0,pw:0,ph:0,dpr:1}),m=Z.useRef(!0),h=Z.useCallback(()=>{const S=c.current;if(!S)return;const v=S.getContext("2d",{alpha:!1});if(!v)return;const{w:g,h:y}=p.current;if(g===0||y===0)return;v.setTransform(f.current,0,0,f.current,0,0),v.fillStyle="#0d1117",v.fillRect(0,0,g,y);const M=42,w=12,_=16,x=22,T=g-M-w,D=y-_-x,R=Qe/2,H=Math.min(R,125);if(t){const F=M+Math.max(i,0)/H*T,E=M+Math.min(s,H)/H*T;v.fillStyle="rgba(63, 185, 80, 0.08)",v.fillRect(F,_,E-F,D),v.strokeStyle="rgba(63, 185, 80, 0.5)",v.lineWidth=1,v.setLineDash([4,3]);for(const V of[i,s]){const k=M+V/H*T;v.beginPath(),v.moveTo(k,_),v.lineTo(k,_+D),v.stroke()}v.setLineDash([]),v.fillStyle="rgba(63, 185, 80, 0.8)",v.font="9px monospace",v.textAlign="center";const O=M+i/H*T,J=M+s/H*T;v.fillText(`${i} Hz`,O,_-4),v.fillText(`${s} Hz`,J,_-4)}v.strokeStyle="rgba(48,54,61,0.45)",v.lineWidth=.5;for(const F of[0,-10,-20,-30,-40,-50,-60]){const E=_+-F/60*D;v.beginPath(),v.moveTo(M,E),v.lineTo(M+T,E),v.stroke()}for(const F of[1,5,10,20,30,50,100]){if(F>H)continue;const E=M+F/H*T;v.beginPath(),v.moveTo(E,_),v.lineTo(E,_+D),v.stroke()}if(t){v.beginPath();const F=Math.max(200,Math.round(T));for(let E=0;E<=F;E++){const O=E/F*H,J=s2(O,i,s,l),V=20*Math.log10(Math.max(J,1e-6)),k=Math.max(-60,V),q=_+-k/60*D,at=M+O/H*T;E===0?v.moveTo(at,q):v.lineTo(at,q)}v.strokeStyle="#3fb950",v.lineWidth=2,v.lineJoin="round",v.stroke(),v.lineTo(M+T,_+D),v.lineTo(M,_+D),v.closePath(),v.fillStyle="rgba(63, 185, 80, 0.06)",v.fill()}else v.strokeStyle="rgba(139, 148, 158, 0.6)",v.lineWidth=1.5,v.setLineDash([6,4]),v.beginPath(),v.moveTo(M,_),v.lineTo(M+T,_),v.stroke(),v.setLineDash([]),v.fillStyle="#6e7681",v.font="12px monospace",v.textAlign="center",v.fillText("Filter OFF — unfiltered passthrough",M+T/2,_+D/2);const P=_+3/60*D;v.strokeStyle="rgba(210, 153, 34, 0.5)",v.lineWidth=.8,v.setLineDash([3,3]),v.beginPath(),v.moveTo(M,P),v.lineTo(M+T,P),v.stroke(),v.setLineDash([]),v.fillStyle="rgba(210, 153, 34, 0.7)",v.font="8px monospace",v.textAlign="right",v.fillText("-3 dB",M-4,P+3),v.fillStyle="#8b949e",v.font="9px monospace",v.textAlign="right";for(const F of[0,-20,-40,-60]){const E=_+-F/60*D;v.fillText(`${F}`,M-4,E+3)}v.save(),v.translate(10,_+D/2),v.rotate(-Math.PI/2),v.textAlign="center",v.fillStyle="#8b949e",v.font="9px monospace",v.fillText("dB",0,0),v.restore(),v.fillStyle="#8b949e",v.font="9px monospace",v.textAlign="center";for(const F of[1,10,20,30,50,100])F>H||v.fillText(`${F}`,M+F/H*T,y-4);v.fillText("Hz",M+T+2,y-4),t&&(v.fillStyle="#3fb950",v.font="bold 10px monospace",v.textAlign="right",v.fillText(`Butterworth order ${l} · ${i}–${s} Hz`,M+T,_+D+14))},[t,i,s,l]);return Z.useEffect(()=>{const S=c.current;if(!S)return;const v=new ResizeObserver(g=>{const y=g[0];if(!y)return;const M=window.devicePixelRatio||1;f.current=M;const{width:w,height:_}=y.contentRect;p.current={w,h:_,pw:Math.round(w*M),ph:Math.round(_*M),dpr:M},S.width=Math.round(w*M),S.height=Math.round(_*M),m.current=!0,h()});return v.observe(S),m.current=!0,h(),()=>v.disconnect()},[h]),C.jsxs("div",{className:"filter-preview-panel",children:[C.jsxs("div",{className:"filter-preview-toolbar",children:[C.jsx("span",{className:"filter-preview-title",children:"Filter Response"}),C.jsx("span",{className:"filter-preview-meta",children:t?`Bandpass ${i}–${s} Hz · Order ${l}`:"Disabled"})]}),C.jsx("div",{className:"filter-preview-canvas-wrap",children:C.jsx("canvas",{ref:c,style:{display:"block",width:"100%",height:"100%"}})})]})}),o2=500;function l2(r,t,i,s){const l=Math.min(t,Qe*2);let c=0,f=0,p=1/0,m=-1/0,h=0,S=null;for(let R=t-l;R<t;R++){const H=(i-t+R+s)%s,P=r[H];c+=P,f+=P*P,P<p&&(p=P),P>m&&(m=P),S!==null&&(S>=0&&P<0||S<0&&P>=0)&&h++,S=P}const v=l>0?c/l:0,g=l>1?f/l-v*v:0,y=Math.sqrt(Math.max(0,g)),M=Math.sqrt(f/Math.max(1,l)),w=m-p;let _=0,x=0;for(let R=t-l;R<t;R++){const H=(i-t+R+s)%s,P=r[H]-v,F=P*P;_+=F*P,x+=F*F}const T=y>1e-10?_/l/(y*y*y):0,D=y>1e-10?x/l/(y*y*y*y)-3:0;return{ch:0,mean:v,rms:M,pp:w,min:p===1/0?0:p,max:m===-1/0?0:m,std:y,variance:g,skewness:T,kurtosis:D,zeroCross:h}}const c2=Z.memo(function({eegData:t}){const[i,s]=Z.useState([]),[l,c]=Z.useState("ch"),[f,p]=Z.useState(!0),m=Z.useRef(void 0);Z.useEffect(()=>{function y(){const M=t.buffers.current,w=t.writeIndex.current,_=t.samplesInBuffer.current,x=t.bufferSize;if(!M||_<10)return;const T=[];for(let D=0;D<Ie;D++){const R=l2(M[D],_,w,x);R.ch=D,T.push(R)}s(T)}return y(),m.current=setInterval(y,o2),()=>clearInterval(m.current)},[t]);const h=Z.useCallback(y=>{c(M=>M===y?(p(w=>!w),y):(p(!0),y))},[]),S=[...i].sort((y,M)=>{const w=y[l],_=M[l];return f?w-_:_-w}),v=Z.useCallback(()=>{const M=[["Channel","Mean","RMS","Std","Variance","Peak-Peak","Min","Max","Skewness","Kurtosis","Zero-Crossings"].join(",")];for(const T of S)M.push([`Ch ${T.ch+1}`,T.mean.toFixed(4),T.rms.toFixed(4),T.std.toFixed(4),T.variance.toFixed(4),T.pp.toFixed(4),T.min.toFixed(4),T.max.toFixed(4),T.skewness.toFixed(4),T.kurtosis.toFixed(4),T.zeroCross.toString()].join(","));const w=new Blob([M.join(`
`)],{type:"text/csv"}),_=URL.createObjectURL(w),x=document.createElement("a");x.href=_,x.download=`pieeg_stats_${new Date().toISOString().replace(/[:.]/g,"-")}.csv`,x.click(),URL.revokeObjectURL(_)},[S]),g=[{key:"ch",label:"Ch",unit:"",precision:0},{key:"mean",label:"Mean",unit:"µV",precision:2},{key:"rms",label:"RMS",unit:"µV",precision:2},{key:"std",label:"Std",unit:"µV",precision:2},{key:"pp",label:"P-P",unit:"µV",precision:1},{key:"min",label:"Min",unit:"µV",precision:1},{key:"max",label:"Max",unit:"µV",precision:1},{key:"skewness",label:"Skew",unit:"",precision:2},{key:"kurtosis",label:"Kurt",unit:"",precision:2},{key:"zeroCross",label:"ZX",unit:"/2s",precision:0}];return C.jsxs("div",{className:"stats-panel",children:[C.jsxs("div",{className:"stats-toolbar",children:[C.jsx("span",{className:"stats-title",children:"Signal Statistics"}),C.jsxs("span",{className:"stats-meta",children:["16 channels · ",Qe," Hz · 2s window"]}),C.jsx("button",{className:"btn stats-btn-export",onClick:v,title:"Download stats as CSV",children:"⬇ CSV"})]}),C.jsx("div",{className:"stats-table-wrap",children:C.jsxs("table",{className:"stats-table",children:[C.jsx("thead",{children:C.jsx("tr",{children:g.map(y=>C.jsxs("th",{onClick:()=>h(y.key),className:l===y.key?"sorted":"",title:y.unit?`${y.label} (${y.unit})`:y.label,children:[y.label,l===y.key&&C.jsx("span",{className:"sort-arrow",children:f?" ▲":" ▼"})]},y.key))})}),C.jsx("tbody",{children:S.map(y=>C.jsxs("tr",{children:[C.jsxs("td",{className:"stats-ch-cell",children:[C.jsx("span",{className:"stats-ch-dot",style:{background:Tu[y.ch]}}),y.ch+1]}),C.jsx("td",{children:y.mean.toFixed(2)}),C.jsx("td",{children:y.rms.toFixed(2)}),C.jsx("td",{children:y.std.toFixed(2)}),C.jsx("td",{children:y.pp.toFixed(1)}),C.jsx("td",{children:y.min.toFixed(1)}),C.jsx("td",{children:y.max.toFixed(1)}),C.jsx("td",{children:y.skewness.toFixed(2)}),C.jsx("td",{children:y.kurtosis.toFixed(2)}),C.jsx("td",{children:y.zeroCross})]},y.ch))})]})})]})});function u2(){const[r,t]=Z.useState(null),[i,s]=Z.useState(!1),[l,c]=Z.useState(!1),[f,p]=Z.useState(!1);if(Z.useEffect(()=>{fetch("/api/update/check").then(g=>g.json()).then(g=>{g.error||t(g),s(!0)}).catch(()=>s(!0))},[]),l||!i||!(r!=null&&r.update_available))return null;const m=r.install_method==="git",h=/win/i.test(navigator.platform),S=m?`git pull origin main
pip install -e .`:"pip install --upgrade pieeg-server",v=h?".\\pieeg-server.cmd":"pieeg-server";return C.jsxs("div",{className:"update-banner",children:[C.jsxs("div",{className:"update-banner-content",children:[C.jsxs("span",{className:"update-banner-text",children:["Update available: ",C.jsx("strong",{children:r.current_version})," →"," ",C.jsx("strong",{children:r.latest_version})]}),C.jsx("button",{className:"btn update-btn",onClick:()=>p(g=>!g),children:f?"Hide instructions":"How to update"}),C.jsx("button",{className:"update-dismiss",onClick:()=>c(!0),title:"Dismiss",children:"✕"})]}),f&&C.jsxs("div",{className:"update-howto",children:[C.jsx("p",{children:m?"Run these commands in your project folder:":"Run this command:"}),C.jsx("pre",{children:C.jsx("code",{children:S})}),C.jsx("p",{children:"Then restart the server:"}),C.jsx("pre",{children:C.jsx("code",{children:v})})]})]})}const f2=[{key:"Space",desc:"Pause / Resume"},{key:"R",desc:"Start / Stop recording"},{key:"F",desc:"Toggle FFT panel"},{key:"G",desc:"Toggle Spectrogram"},{key:"S",desc:"Toggle Statistics panel"},{key:"V",desc:"Toggle XR / VR view"},{key:"P",desc:"Toggle performance monitor"},{key:"?",desc:"Show this help"},{key:"Esc",desc:"Close overlay / panel"}];function d2(){const[r,t]=Z.useState(!1);return Z.useEffect(()=>{function i(s){const l=s.target.tagName;l==="INPUT"||l==="SELECT"||l==="TEXTAREA"||((s.key==="?"||s.shiftKey&&s.code==="Slash")&&(s.preventDefault(),t(c=>!c)),s.code==="Escape"&&r&&t(!1))}return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[r]),r?C.jsx("div",{className:"modal-overlay",onClick:()=>t(!1),children:C.jsxs("div",{className:"shortcut-card",onClick:i=>i.stopPropagation(),children:[C.jsx("h2",{children:"Keyboard Shortcuts"}),C.jsx("div",{className:"shortcut-grid",children:f2.map(i=>C.jsxs("div",{className:"shortcut-row",children:[C.jsx("kbd",{children:i.key}),C.jsx("span",{children:i.desc})]},i.key))}),C.jsx("button",{className:"btn shortcut-close",onClick:()=>t(!1),children:"Close"})]})}):null}class Rh extends Z.Component{constructor(){super(...arguments);Ci(this,"state",{hasError:!1,error:null})}static getDerivedStateFromError(i){return{hasError:!0,error:i}}componentDidCatch(i,s){console.error("[ErrorBoundary]",i,s.componentStack)}render(){var i;return this.state.hasError?C.jsx("div",{className:"error-boundary",children:C.jsxs("div",{className:"error-card",children:[C.jsx("h2",{children:"Something went wrong"}),C.jsx("p",{className:"error-msg",children:(i=this.state.error)==null?void 0:i.message}),C.jsx("button",{className:"btn",onClick:()=>this.setState({hasError:!1,error:null}),children:"Retry"})]})}):this.props.children}}const Zv=new Set(Array.from({length:Ie},(r,t)=>t)),h2=new Set([0,1,2,3]),p2=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],m2=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"},{value:16,label:"16s"}];function g2(){const[r,t]=Z.useState("live"),[i,s]=Z.useState(null),[l,c]=Z.useState(!1),[f,p]=Z.useState(!0),[m,h]=Z.useState(!1),[S,v]=Z.useState(1),[g,y]=Z.useState(40),[M,w]=Z.useState(4),[_,x]=Z.useState(100),[T,D]=Z.useState(null),[R,H]=Z.useState(!1),[P,F]=Z.useState(!1),[E,O]=Z.useState(!1),[J,V]=Z.useState(()=>window.innerWidth<768?new Set(h2):new Set(Zv)),k=tM(M),q=Z.useRef(J);q.current=J;const at=Z.useCallback(I=>{V(W=>{const lt=new Set(W);return lt.has(I)?lt.delete(I):lt.add(I),lt})},[]),$=Z.useCallback(I=>{V(I?new Set(Zv):new Set)},[]);function U(){const I=!l;c(I),k.setPaused(I)}function B(){const I=!m;h(I),k.sendCommand({cmd:"set_filter",enabled:I,lowcut:parseFloat(String(S))||1,highcut:parseFloat(String(g))||40})}function nt(){k.sendCommand({cmd:k.recording?"stop_record":"start_record"})}function ot(I){const W=Math.floor(I/60),lt=Math.floor(I%60);return`${String(W).padStart(2,"0")}:${String(lt).padStart(2,"0")}`}function St(I,W){m&&k.sendCommand({cmd:"set_filter",enabled:!0,lowcut:parseFloat(String(I))||1,highcut:parseFloat(String(W))||40})}const z=Z.useCallback(I=>{if(!q.current.has(I)){V(W=>{const lt=new Set(W);return lt.add(I),lt});return}D(W=>W===I?null:I)},[]);return Z.useEffect(()=>{function I(W){const lt=W.target.tagName;if(!(lt==="INPUT"||lt==="SELECT"||lt==="TEXTAREA")){if(r!=="live"){W.code==="Escape"&&(r==="playback"?(t("sessions"),s(null)):r==="sessions"&&t("live"));return}switch(W.code){case"Space":W.preventDefault(),U();break;case"KeyR":nt();break;case"KeyF":p(_t=>!_t);break;case"KeyV":H(_t=>!_t);break;case"KeyS":O(_t=>!_t);break;case"KeyG":F(_t=>!_t);break;case"Escape":R?H(!1):T!==null?D(null):k.recordResult&&k.dismissRecordResult();break}}}return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[T,k.recordResult,r]),r==="playback"&&i?C.jsx(zd,{children:C.jsx(Rh,{children:C.jsx(RM,{filename:i,onBack:()=>{t("sessions"),s(null)}})})}):r==="sessions"?C.jsx(zd,{children:C.jsx(Rh,{children:C.jsx(SM,{onSelect:I=>{s(I),t("playback")},onBack:()=>t("live")})})}):(k.data.gridSuspended=T!==null&&J.has(T),C.jsxs(zd,{children:[C.jsx(u2,{}),C.jsxs("header",{className:"header",children:[C.jsxs("h1",{children:["Pi",C.jsx("span",{children:"EEG"}),"-16"," ",C.jsx("small",{style:{fontWeight:400,color:"var(--text-dim)"},children:"Dashboard"})]}),C.jsxs("div",{className:"status-bar",children:[C.jsxs("span",{children:[C.jsx("span",{className:`status-dot${k.connected?" connected":""}`}),k.connected?" Connected":" Disconnected"]}),k.latencyMs!==null&&C.jsxs("span",{className:`latency-badge${k.latencyMs>100?" warn":""}${k.latencyMs>500?" critical":""}`,children:[k.latencyMs," ms"]}),C.jsx("span",{className:`live-badge${l?" paused":""}`,children:l?"⏸ PAUSED":"● LIVE"}),C.jsx("span",{children:k.hz?`${k.hz} Hz`:"— Hz"}),C.jsxs("span",{children:[k.sampleCount.toLocaleString()," samples"]})]})]}),C.jsxs("div",{className:"controls",children:[C.jsx("button",{className:`btn${l?" active":""}`,onClick:U,children:l?"▶ Resume":"⏸ Pause"}),C.jsxs("button",{className:`btn btn-record${k.recording?" recording":""}`,onClick:nt,children:[C.jsx("span",{className:"rec-dot"}),k.recording?`⏹ Stop ${ot(k.recordElapsed)}`:"⏺ Record"]}),C.jsxs("button",{className:`btn${m?" active":""}`,onClick:B,children:["Filter: ",m?"ON":"OFF"]}),C.jsxs("button",{className:`btn${f?" active":""}`,onClick:()=>p(I=>!I),children:["FFT ",f?"ON":"OFF"]}),C.jsxs("button",{className:`btn${P?" active":""}`,onClick:()=>F(I=>!I),children:["Spectrogram ",P?"ON":"OFF"]}),C.jsxs("button",{className:`btn${E?" active":""}`,onClick:()=>O(I=>!I),children:["Stats ",E?"ON":"OFF"]}),C.jsx("button",{className:"btn btn-sessions",onClick:()=>t("sessions"),children:"Sessions"}),C.jsx("button",{className:"btn btn-xr",onClick:()=>H(!0),title:"Open EEG waves in immersive 3D / VR",children:"🥽 XR View"}),C.jsx("div",{className:"sep"}),C.jsxs("div",{className:"control-group",children:[C.jsx("label",{children:"Low"}),C.jsx("input",{type:"number",value:S,min:.1,max:50,step:.5,onChange:I=>{v(I.target.value),St(I.target.value,g)}})," ","Hz"]}),C.jsxs("div",{className:"control-group",children:[C.jsx("label",{children:"High"}),C.jsx("input",{type:"number",value:g,min:1,max:125,step:1,onChange:I=>{y(I.target.value),St(S,I.target.value)}})," ","Hz"]}),C.jsx("div",{className:"sep"}),C.jsxs("div",{className:"control-group",children:[C.jsx("label",{children:"Time window"}),C.jsx("select",{value:M,onChange:I=>w(parseInt(I.target.value)),children:m2.map(I=>C.jsx("option",{value:I.value,children:I.label},I.value))})]}),C.jsxs("div",{className:"control-group",children:[C.jsx("label",{children:"Scale"}),C.jsx("select",{value:_,onChange:I=>x(parseInt(I.target.value)),children:p2.map(I=>C.jsx("option",{value:I.value,children:I.label},I.value))})]})]}),C.jsxs("div",{className:"channel-selector",children:[C.jsx("span",{className:"cs-label",children:"Channels"}),C.jsx("button",{className:"cs-toggle",onClick:()=>$(!0),children:"All"}),C.jsx("button",{className:"cs-toggle",onClick:()=>$(!1),children:"None"}),C.jsx("div",{className:"cs-grid",children:Array.from({length:Ie},(I,W)=>C.jsx("button",{className:`cs-ch${J.has(W)?" on":""}`,onClick:()=>at(W),children:W+1},W))}),C.jsxs("span",{className:"cs-count",children:[J.size,"/",Ie]})]}),C.jsx(Rh,{children:C.jsxs("div",{className:`main-area${f?" with-fft":""}${P||E||m?" with-analysis":""}`,children:[T!==null&&J.has(T)&&C.jsx(hM,{chIdx:T,eegData:k.data,yRange:_,onClose:()=>D(null)}),C.jsx("div",{className:"grid",children:Array.from({length:Ie},(I,W)=>C.jsx(sM,{chIdx:W,eegData:k.data,yRange:_,active:J.has(W),onToggleExpand:()=>z(W)},W))}),f&&C.jsxs("div",{className:"fft-area",children:[C.jsx(vM,{eegData:k.data}),C.jsx(n2,{eegData:k.data})]}),m&&C.jsx(r2,{enabled:m,lowcut:parseFloat(String(S))||1,highcut:parseFloat(String(g))||40}),(P||E)&&C.jsxs("div",{className:"analysis-area",children:[P&&C.jsx(a2,{eegData:k.data}),E&&C.jsx(c2,{eegData:k.data})]})]})}),k.recordResult&&C.jsx("div",{className:"modal-overlay",children:C.jsxs("div",{className:"modal-card",children:[C.jsx("h2",{children:"Recording Complete"}),C.jsxs("div",{className:"modal-details",children:[C.jsxs("div",{className:"modal-row",children:[C.jsx("span",{className:"modal-label",children:"File"}),C.jsx("span",{className:"modal-value",children:k.recordResult.filename})]}),C.jsxs("div",{className:"modal-row",children:[C.jsx("span",{className:"modal-label",children:"Duration"}),C.jsx("span",{className:"modal-value",children:ot(k.recordResult.duration)})]}),C.jsxs("div",{className:"modal-row",children:[C.jsx("span",{className:"modal-label",children:"Frames"}),C.jsx("span",{className:"modal-value",children:k.recordResult.frames.toLocaleString()})]}),C.jsxs("div",{className:"modal-row",children:[C.jsx("span",{className:"modal-label",children:"Saved to"}),C.jsx("span",{className:"modal-value modal-path",children:k.recordResult.path})]})]}),C.jsxs("div",{className:"modal-actions",children:[C.jsx("a",{className:"btn modal-btn-download",href:k.recordResult.downloadUrl,download:!0,children:"Download CSV"}),C.jsx("button",{className:"btn modal-btn-view",onClick:()=>{const I=k.recordResult.filename;k.dismissRecordResult(),s(I),t("playback")},children:"View Session"}),C.jsx("button",{className:"btn modal-btn-dismiss",onClick:k.dismissRecordResult,children:"Dismiss"})]})]})}),R&&C.jsx(KR,{eegData:k.data,yScale:_,onExit:()=>H(!1)}),C.jsx(xM,{}),C.jsx(d2,{}),C.jsxs("footer",{className:"footer",children:[C.jsx("span",{children:"PiEEG-16-server · React Dashboard"}),C.jsxs("span",{className:"kbd-hints",children:[C.jsx("kbd",{children:"Space"})," Pause ",C.jsx("kbd",{children:"R"})," Record ",C.jsx("kbd",{children:"F"})," FFT ",C.jsx("kbd",{children:"G"})," Gram ",C.jsx("kbd",{children:"S"})," Stats ",C.jsx("kbd",{children:"V"})," XR ",C.jsx("kbd",{children:"Esc"})," Close ",C.jsx("kbd",{children:"P"})," Perf"]}),C.jsx("span",{children:"Battery powered only · Not a medical device"})]})]}))}Ky.createRoot(document.getElementById("root")).render(C.jsx(Vy.StrictMode,{children:C.jsx(g2,{})}));
