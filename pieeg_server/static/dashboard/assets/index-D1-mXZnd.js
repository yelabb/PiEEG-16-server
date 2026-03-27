(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function vv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Sd={exports:{}},Ho={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_;function oy(){if(t_)return Ho;t_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=t,Ho.jsx=i,Ho.jsxs=i,Ho}var e_;function ly(){return e_||(e_=1,Sd.exports=oy()),Sd.exports}var W=ly(),yd={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function cy(){if(n_)return de;n_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),g=Symbol.iterator;function M(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,S={};function _(U,Y,gt){this.props=U,this.context=Y,this.refs=S,this.updater=gt||b}_.prototype.isReactComponent={},_.prototype.setState=function(U,Y){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Y,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function R(){}R.prototype=_.prototype;function O(U,Y,gt){this.props=U,this.context=Y,this.refs=S,this.updater=gt||b}var D=O.prototype=new R;D.constructor=O,C(D,_.prototype),D.isPureReactComponent=!0;var H=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function N(U,Y,gt){var Rt=gt.ref;return{$$typeof:o,type:U,key:Y,ref:Rt!==void 0?Rt:null,props:gt}}function pt(U,Y){return N(U.type,Y,U.props)}function I(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function q(U){var Y={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(gt){return Y[gt]})}var G=/\/+/g;function tt(U,Y){return typeof U=="object"&&U!==null&&U.key!=null?q(""+U.key):Y.toString(36)}function J(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(F,F):(U.status="pending",U.then(function(Y){U.status==="pending"&&(U.status="fulfilled",U.value=Y)},function(Y){U.status==="pending"&&(U.status="rejected",U.reason=Y)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function P(U,Y,gt,Rt,wt){var et=typeof U;(et==="undefined"||et==="boolean")&&(U=null);var k=!1;if(U===null)k=!0;else switch(et){case"bigint":case"string":case"number":k=!0;break;case"object":switch(U.$$typeof){case o:case t:k=!0;break;case v:return k=U._init,P(k(U._payload),Y,gt,Rt,wt)}}if(k)return wt=wt(U),k=Rt===""?"."+tt(U,0):Rt,H(wt)?(gt="",k!=null&&(gt=k.replace(G,"$&/")+"/"),P(wt,Y,gt,"",function(Lt){return Lt})):wt!=null&&(I(wt)&&(wt=pt(wt,gt+(wt.key==null||U&&U.key===wt.key?"":(""+wt.key).replace(G,"$&/")+"/")+k)),Y.push(wt)),1;k=0;var ut=Rt===""?".":Rt+":";if(H(U))for(var Mt=0;Mt<U.length;Mt++)Rt=U[Mt],et=ut+tt(Rt,Mt),k+=P(Rt,Y,gt,et,wt);else if(Mt=M(U),typeof Mt=="function")for(U=Mt.call(U),Mt=0;!(Rt=U.next()).done;)Rt=Rt.value,et=ut+tt(Rt,Mt++),k+=P(Rt,Y,gt,et,wt);else if(et==="object"){if(typeof U.then=="function")return P(J(U),Y,gt,Rt,wt);throw Y=String(U),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return k}function B(U,Y,gt){if(U==null)return U;var Rt=[],wt=0;return P(U,Rt,"","",function(et){return Y.call(gt,et,wt++)}),Rt}function it(U){if(U._status===-1){var Y=U._result;Y=Y(),Y.then(function(gt){(U._status===0||U._status===-1)&&(U._status=1,U._result=gt)},function(gt){(U._status===0||U._status===-1)&&(U._status=2,U._result=gt)}),U._status===-1&&(U._status=0,U._result=Y)}if(U._status===1)return U._result.default;throw U._result}var ct=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},xt={map:B,forEach:function(U,Y,gt){B(U,function(){Y.apply(this,arguments)},gt)},count:function(U){var Y=0;return B(U,function(){Y++}),Y},toArray:function(U){return B(U,function(Y){return Y})||[]},only:function(U){if(!I(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return de.Activity=y,de.Children=xt,de.Component=_,de.Fragment=i,de.Profiler=l,de.PureComponent=O,de.StrictMode=s,de.Suspense=m,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,de.__COMPILER_RUNTIME={__proto__:null,c:function(U){return z.H.useMemoCache(U)}},de.cache=function(U){return function(){return U.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(U,Y,gt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Rt=C({},U.props),wt=U.key;if(Y!=null)for(et in Y.key!==void 0&&(wt=""+Y.key),Y)!T.call(Y,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&Y.ref===void 0||(Rt[et]=Y[et]);var et=arguments.length-2;if(et===1)Rt.children=gt;else if(1<et){for(var k=Array(et),ut=0;ut<et;ut++)k[ut]=arguments[ut+2];Rt.children=k}return N(U.type,wt,Rt)},de.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},de.createElement=function(U,Y,gt){var Rt,wt={},et=null;if(Y!=null)for(Rt in Y.key!==void 0&&(et=""+Y.key),Y)T.call(Y,Rt)&&Rt!=="key"&&Rt!=="__self"&&Rt!=="__source"&&(wt[Rt]=Y[Rt]);var k=arguments.length-2;if(k===1)wt.children=gt;else if(1<k){for(var ut=Array(k),Mt=0;Mt<k;Mt++)ut[Mt]=arguments[Mt+2];wt.children=ut}if(U&&U.defaultProps)for(Rt in k=U.defaultProps,k)wt[Rt]===void 0&&(wt[Rt]=k[Rt]);return N(U,et,wt)},de.createRef=function(){return{current:null}},de.forwardRef=function(U){return{$$typeof:p,render:U}},de.isValidElement=I,de.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:it}},de.memo=function(U,Y){return{$$typeof:h,type:U,compare:Y===void 0?null:Y}},de.startTransition=function(U){var Y=z.T,gt={};z.T=gt;try{var Rt=U(),wt=z.S;wt!==null&&wt(gt,Rt),typeof Rt=="object"&&Rt!==null&&typeof Rt.then=="function"&&Rt.then(F,ct)}catch(et){ct(et)}finally{Y!==null&&gt.types!==null&&(Y.types=gt.types),z.T=Y}},de.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},de.use=function(U){return z.H.use(U)},de.useActionState=function(U,Y,gt){return z.H.useActionState(U,Y,gt)},de.useCallback=function(U,Y){return z.H.useCallback(U,Y)},de.useContext=function(U){return z.H.useContext(U)},de.useDebugValue=function(){},de.useDeferredValue=function(U,Y){return z.H.useDeferredValue(U,Y)},de.useEffect=function(U,Y){return z.H.useEffect(U,Y)},de.useEffectEvent=function(U){return z.H.useEffectEvent(U)},de.useId=function(){return z.H.useId()},de.useImperativeHandle=function(U,Y,gt){return z.H.useImperativeHandle(U,Y,gt)},de.useInsertionEffect=function(U,Y){return z.H.useInsertionEffect(U,Y)},de.useLayoutEffect=function(U,Y){return z.H.useLayoutEffect(U,Y)},de.useMemo=function(U,Y){return z.H.useMemo(U,Y)},de.useOptimistic=function(U,Y){return z.H.useOptimistic(U,Y)},de.useReducer=function(U,Y,gt){return z.H.useReducer(U,Y,gt)},de.useRef=function(U){return z.H.useRef(U)},de.useState=function(U){return z.H.useState(U)},de.useSyncExternalStore=function(U,Y,gt){return z.H.useSyncExternalStore(U,Y,gt)},de.useTransition=function(){return z.H.useTransition()},de.version="19.2.4",de}var i_;function op(){return i_||(i_=1,yd.exports=cy()),yd.exports}var yt=op();const uy=vv(yt);var Md={exports:{}},Go={},Ed={exports:{}},bd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_;function fy(){return a_||(a_=1,(function(o){function t(P,B){var it=P.length;P.push(B);t:for(;0<it;){var ct=it-1>>>1,xt=P[ct];if(0<l(xt,B))P[ct]=B,P[it]=xt,it=ct;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var B=P[0],it=P.pop();if(it!==B){P[0]=it;t:for(var ct=0,xt=P.length,U=xt>>>1;ct<U;){var Y=2*(ct+1)-1,gt=P[Y],Rt=Y+1,wt=P[Rt];if(0>l(gt,it))Rt<xt&&0>l(wt,gt)?(P[ct]=wt,P[Rt]=it,ct=Rt):(P[ct]=gt,P[Y]=it,ct=Y);else if(Rt<xt&&0>l(wt,it))P[ct]=wt,P[Rt]=it,ct=Rt;else break t}}return B}function l(P,B){var it=P.sortIndex-B.sortIndex;return it!==0?it:P.id-B.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var m=[],h=[],v=1,y=null,g=3,M=!1,b=!1,C=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var B=i(h);B!==null;){if(B.callback===null)s(h);else if(B.startTime<=P)s(h),B.sortIndex=B.expirationTime,t(m,B);else break;B=i(h)}}function H(P){if(C=!1,D(P),!b)if(i(m)!==null)b=!0,F||(F=!0,q());else{var B=i(h);B!==null&&J(H,B.startTime-P)}}var F=!1,z=-1,T=5,N=-1;function pt(){return S?!0:!(o.unstable_now()-N<T)}function I(){if(S=!1,F){var P=o.unstable_now();N=P;var B=!0;try{t:{b=!1,C&&(C=!1,R(z),z=-1),M=!0;var it=g;try{e:{for(D(P),y=i(m);y!==null&&!(y.expirationTime>P&&pt());){var ct=y.callback;if(typeof ct=="function"){y.callback=null,g=y.priorityLevel;var xt=ct(y.expirationTime<=P);if(P=o.unstable_now(),typeof xt=="function"){y.callback=xt,D(P),B=!0;break e}y===i(m)&&s(m),D(P)}else s(m);y=i(m)}if(y!==null)B=!0;else{var U=i(h);U!==null&&J(H,U.startTime-P),B=!1}}break t}finally{y=null,g=it,M=!1}B=void 0}}finally{B?q():F=!1}}}var q;if(typeof O=="function")q=function(){O(I)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,tt=G.port2;G.port1.onmessage=I,q=function(){tt.postMessage(null)}}else q=function(){_(I,0)};function J(P,B){z=_(function(){P(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(P){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var it=g;g=B;try{return P()}finally{g=it}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var it=g;g=P;try{return B()}finally{g=it}},o.unstable_scheduleCallback=function(P,B,it){var ct=o.unstable_now();switch(typeof it=="object"&&it!==null?(it=it.delay,it=typeof it=="number"&&0<it?ct+it:ct):it=ct,P){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=it+xt,P={id:v++,callback:B,priorityLevel:P,startTime:it,expirationTime:xt,sortIndex:-1},it>ct?(P.sortIndex=it,t(h,P),i(m)===null&&P===i(h)&&(C?(R(z),z=-1):C=!0,J(H,it-ct))):(P.sortIndex=xt,t(m,P),b||M||(b=!0,F||(F=!0,q()))),P},o.unstable_shouldYield=pt,o.unstable_wrapCallback=function(P){var B=g;return function(){var it=g;g=B;try{return P.apply(this,arguments)}finally{g=it}}}})(bd)),bd}var s_;function dy(){return s_||(s_=1,Ed.exports=fy()),Ed.exports}var Td={exports:{}},An={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function hy(){if(r_)return An;r_=1;var o=op();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,v){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:m,containerInfo:h,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return An.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,An.createPortal=function(m,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,v)},An.flushSync=function(m){var h=d.T,v=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=v,s.d.f()}},An.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},An.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},An.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var v=h.as,y=p(v,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:y,integrity:g,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:y,integrity:g,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},An.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},An.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,y=p(v,h.crossOrigin);s.d.L(m,v,{crossOrigin:y,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},An.preloadModule=function(m,h){if(typeof m=="string")if(h){var v=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},An.requestFormReset=function(m){s.d.r(m)},An.unstable_batchedUpdates=function(m,h){return m(h)},An.useFormState=function(m,h,v){return d.H.useFormState(m,h,v)},An.useFormStatus=function(){return d.H.useHostTransitionStatus()},An.version="19.2.4",An}var o_;function py(){if(o_)return Td.exports;o_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Td.exports=hy(),Td.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function my(){if(l_)return Go;l_=1;var o=dy(),t=op(),i=py();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,r=f;break}if(A===r){x=!0,r=u,a=f;break}A=A.sibling}if(!x){for(A=f.child;A;){if(A===a){x=!0,a=f,r=u;break}if(A===r){x=!0,r=f,a=u;break}A=A.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var y=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),pt=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function q(e){return e===null||typeof e!="object"?null:(e=I&&e[I]||e["@@iterator"],typeof e=="function"?e:null)}var G=Symbol.for("react.client.reference");function tt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===G?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case H:return"Suspense";case F:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case O:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:tt(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return tt(e(n))}catch{}}return null}var J=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,it={pending:!1,data:null,method:null,action:null},ct=[],xt=-1;function U(e){return{current:e}}function Y(e){0>xt||(e.current=ct[xt],ct[xt]=null,xt--)}function gt(e,n){xt++,ct[xt]=e.current,e.current=n}var Rt=U(null),wt=U(null),et=U(null),k=U(null);function ut(e,n){switch(gt(et,n),gt(wt,e),gt(Rt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Eg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Eg(n),e=bg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(Rt),gt(Rt,e)}function Mt(){Y(Rt),Y(wt),Y(et)}function Lt(e){e.memoizedState!==null&&gt(k,e);var n=Rt.current,a=bg(n,e.type);n!==a&&(gt(wt,e),gt(Rt,a))}function Bt(e){wt.current===e&&(Y(Rt),Y(wt)),k.current===e&&(Y(k),Fo._currentValue=it)}var te,ie;function se(e){if(te===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);te=n&&n[1]||"",ie=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+te+e+ie}var ue=!1;function Qt(e,n){if(!e||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Et=function(){throw Error()};if(Object.defineProperty(Et.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Et,[])}catch(dt){var lt=dt}Reflect.construct(e,[],Et)}else{try{Et.call()}catch(dt){lt=dt}e.call(Et.prototype)}}else{try{throw Error()}catch(dt){lt=dt}(Et=e())&&typeof Et.catch=="function"&&Et.catch(function(){})}}catch(dt){if(dt&&lt&&typeof dt.stack=="string")return[dt.stack,lt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],A=f[1];if(x&&A){var V=x.split(`
`),rt=A.split(`
`);for(u=r=0;r<V.length&&!V[r].includes("DetermineComponentFrameRoot");)r++;for(;u<rt.length&&!rt[u].includes("DetermineComponentFrameRoot");)u++;if(r===V.length||u===rt.length)for(r=V.length-1,u=rt.length-1;1<=r&&0<=u&&V[r]!==rt[u];)u--;for(;1<=r&&0<=u;r--,u--)if(V[r]!==rt[u]){if(r!==1||u!==1)do if(r--,u--,0>u||V[r]!==rt[u]){var _t=`
`+V[r].replace(" at new "," at ");return e.displayName&&_t.includes("<anonymous>")&&(_t=_t.replace("<anonymous>",e.displayName)),_t}while(1<=r&&0<=u);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?se(a):""}function xe(e,n){switch(e.tag){case 26:case 27:case 5:return se(e.type);case 16:return se("Lazy");case 13:return e.child!==n&&n!==null?se("Suspense Fallback"):se("Suspense");case 19:return se("SuspenseList");case 0:case 15:return Qt(e.type,!1);case 11:return Qt(e.type.render,!1);case 1:return Qt(e.type,!0);case 31:return se("Activity");default:return""}}function X(e){try{var n="",a=null;do n+=xe(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ne=Object.prototype.hasOwnProperty,Se=o.unstable_scheduleCallback,Le=o.unstable_cancelCallback,Wt=o.unstable_shouldYield,L=o.unstable_requestPaint,E=o.unstable_now,Q=o.unstable_getCurrentPriorityLevel,vt=o.unstable_ImmediatePriority,bt=o.unstable_UserBlockingPriority,ht=o.unstable_NormalPriority,qt=o.unstable_LowPriority,Ut=o.unstable_IdlePriority,$t=o.log,ee=o.unstable_setDisableYieldValue,At=null,Tt=null;function It(e){if(typeof $t=="function"&&ee(e),Tt&&typeof Tt.setStrictMode=="function")try{Tt.setStrictMode(At,e)}catch{}}var zt=Math.clz32?Math.clz32:K,Ht=Math.log,pe=Math.LN2;function K(e){return e>>>=0,e===0?32:31-(Ht(e)/pe|0)|0}var Nt=256,Dt=262144,Gt=4194304;function Ct(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?u=Ct(r):(x&=A,x!==0?u=Ct(x):a||(a=A&~e,a!==0&&(u=Ct(a))))):(A=r&~f,A!==0?u=Ct(A):x!==0?u=Ct(x):a||(a=r&~e,a!==0&&(u=Ct(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function kt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function oe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Gt;return Gt<<=1,(Gt&62914560)===0&&(Gt=4194304),e}function we(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xi(e,n,a,r,u,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,V=e.expirationTimes,rt=e.hiddenUpdates;for(a=x&~a;0<a;){var _t=31-zt(a),Et=1<<_t;A[_t]=0,V[_t]=-1;var lt=rt[_t];if(lt!==null)for(rt[_t]=null,_t=0;_t<lt.length;_t++){var dt=lt[_t];dt!==null&&(dt.lane&=-536870913)}a&=~Et}r!==0&&Kr(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function Kr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-zt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function zs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-zt(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function ll(e,n){var a=n&-n;return a=(a&42)!==0?1:Bs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Bs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Is(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Di(){var e=B.p;return e!==0?e:(e=window.event,e===void 0?32:jg(e.type))}function Hs(e,n){var a=B.p;try{return B.p=e,n()}finally{B.p=a}}var Si=Math.random().toString(36).slice(2),rn="__reactFiber$"+Si,pn="__reactProps$"+Si,ji="__reactContainer$"+Si,Ea="__reactEvents$"+Si,cl="__reactListeners$"+Si,ul="__reactHandles$"+Si,fl="__reactResources$"+Si,ss="__reactMarker$"+Si;function Qr(e){delete e[rn],delete e[pn],delete e[Ea],delete e[cl],delete e[ul]}function ba(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ji]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Ug(e);e!==null;){if(a=e[rn])return a;e=Ug(e)}return n}e=a,a=e.parentNode}return null}function Ta(e){if(e=e[rn]||e[ji]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function w(e){var n=e[fl];return n||(n=e[fl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Z(e){e[ss]=!0}var ft=new Set,ot={};function nt(e,n){Ot(e,n),Ot(e+"Capture",n)}function Ot(e,n){for(ot[e]=n,e=0;e<n.length;e++)ft.add(n[e])}var Vt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pt={},Zt={};function Jt(e){return Ne.call(Zt,e)?!0:Ne.call(Pt,e)?!1:Vt.test(e)?Zt[e]=!0:(Pt[e]=!0,!1)}function re(e,n,a){if(Jt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function fe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Xt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function me(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ke(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Oe(e){if(!e._valueTracker){var n=Ke(e)?"checked":"value";e._valueTracker=Qe(e,n,""+e[n])}}function mn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Ke(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Yt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ln=/[\n"\\]/g;function ce(e){return e.replace(Ln,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function On(e,n,a,r,u,f,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+me(n)):e.value!==""+me(n)&&(e.value=""+me(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?yi(e,x,me(n)):a!=null?yi(e,x,me(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+me(A):e.removeAttribute("name")}function qn(e,n,a,r,u,f,x,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Oe(e);return}a=a!=null?""+me(a):"",n=n!=null?""+me(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Oe(e)}function yi(e,n,a){n==="number"&&Yt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function jn(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+me(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Be(e,n,a){if(n!=null&&(n=""+me(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+me(a):""}function on(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(J(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=me(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Oe(e)}function Pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ln=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mi(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||ln.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Yi(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Mi(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Mi(e,f,n[f])}function Gs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ix=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ax=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(e){return ax.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var gu=null;function _u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vs=null,ks=null;function Mp(e){var n=Ta(e);if(n&&(e=n.stateNode)){var a=e[pn]||null;t:switch(e=n.stateNode,n.type){case"input":if(On(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ce(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[pn]||null;if(!u)throw Error(s(90));On(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&mn(r)}break t;case"textarea":Be(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&jn(e,!!a.multiple,n,!1)}}}var vu=!1;function Ep(e,n,a){if(vu)return e(n,a);vu=!0;try{var r=e(n);return r}finally{if(vu=!1,(Vs!==null||ks!==null)&&($l(),Vs&&(n=Vs,e=ks,ks=Vs=null,Mp(n),e)))for(n=0;n<e.length;n++)Mp(e[n])}}function Jr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[pn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if(Ki)try{var $r={};Object.defineProperty($r,"passive",{get:function(){xu=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{xu=!1}var Aa=null,Su=null,hl=null;function bp(){if(hl)return hl;var e,n=Su,a=n.length,r,u="value"in Aa?Aa.value:Aa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(r=1;r<=x&&n[a-r]===u[f-r];r++);return hl=u.slice(e,1<r?1-r:void 0)}function pl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ml(){return!0}function Tp(){return!1}function In(e){function n(a,r,u,f,x){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ml:Tp,this.isPropagationStopped=Tp,this}return y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),n}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=In(os),to=y({},os,{view:0,detail:0}),sx=In(to),yu,Mu,eo,_l=y({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(yu=e.screenX-eo.screenX,Mu=e.screenY-eo.screenY):Mu=yu=0,eo=e),yu)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),Ap=In(_l),rx=y({},_l,{dataTransfer:0}),ox=In(rx),lx=y({},to,{relatedTarget:0}),Eu=In(lx),cx=y({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),ux=In(cx),fx=y({},os,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dx=In(fx),hx=y({},os,{data:0}),Rp=In(hx),px={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _x(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=gx[e])?!!n[e]:!1}function bu(){return _x}var vx=y({},to,{key:function(e){if(e.key){var n=px[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=pl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(e){return e.type==="keypress"?pl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xx=In(vx),Sx=y({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=In(Sx),yx=y({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),Mx=In(yx),Ex=y({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),bx=In(Ex),Tx=y({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ax=In(Tx),Rx=y({},os,{newState:0,oldState:0}),Cx=In(Rx),wx=[9,13,27,32],Tu=Ki&&"CompositionEvent"in window,no=null;Ki&&"documentMode"in document&&(no=document.documentMode);var Dx=Ki&&"TextEvent"in window&&!no,wp=Ki&&(!Tu||no&&8<no&&11>=no),Dp=" ",Up=!1;function Np(e,n){switch(e){case"keyup":return wx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xs=!1;function Ux(e,n){switch(e){case"compositionend":return Lp(n);case"keypress":return n.which!==32?null:(Up=!0,Dp);case"textInput":return e=n.data,e===Dp&&Up?null:e;default:return null}}function Nx(e,n){if(Xs)return e==="compositionend"||!Tu&&Np(e,n)?(e=bp(),hl=Su=Aa=null,Xs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wp&&n.locale!=="ko"?null:n.data;default:return null}}var Lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Lx[e.type]:n==="textarea"}function Pp(e,n,a,r){Vs?ks?ks.push(r):ks=[r]:Vs=r,n=rc(n,"onChange"),0<n.length&&(a=new gl("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var io=null,ao=null;function Ox(e){_g(e,0)}function vl(e){var n=rs(e);if(mn(n))return e}function Fp(e,n){if(e==="change")return n}var zp=!1;if(Ki){var Au;if(Ki){var Ru="oninput"in document;if(!Ru){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),Ru=typeof Bp.oninput=="function"}Au=Ru}else Au=!1;zp=Au&&(!document.documentMode||9<document.documentMode)}function Ip(){io&&(io.detachEvent("onpropertychange",Hp),ao=io=null)}function Hp(e){if(e.propertyName==="value"&&vl(ao)){var n=[];Pp(n,ao,e,_u(e)),Ep(Ox,n)}}function Px(e,n,a){e==="focusin"?(Ip(),io=n,ao=a,io.attachEvent("onpropertychange",Hp)):e==="focusout"&&Ip()}function Fx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(ao)}function zx(e,n){if(e==="click")return vl(n)}function Bx(e,n){if(e==="input"||e==="change")return vl(n)}function Ix(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:Ix;function so(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Ne.call(n,u)||!Yn(e[u],n[u]))return!1}return!0}function Gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vp(e,n){var a=Gp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Gp(a)}}function kp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?kp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Yt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Yt(e.document)}return n}function Cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Hx=Ki&&"documentMode"in document&&11>=document.documentMode,Ws=null,wu=null,ro=null,Du=!1;function Wp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Du||Ws==null||Ws!==Yt(r)||(r=Ws,"selectionStart"in r&&Cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ro&&so(ro,r)||(ro=r,r=rc(wu,"onSelect"),0<r.length&&(n=new gl("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Ws)))}function ls(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var qs={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionrun:ls("Transition","TransitionRun"),transitionstart:ls("Transition","TransitionStart"),transitioncancel:ls("Transition","TransitionCancel"),transitionend:ls("Transition","TransitionEnd")},Uu={},qp={};Ki&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function cs(e){if(Uu[e])return Uu[e];if(!qs[e])return e;var n=qs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in qp)return Uu[e]=n[a];return e}var jp=cs("animationend"),Yp=cs("animationiteration"),Zp=cs("animationstart"),Gx=cs("transitionrun"),Vx=cs("transitionstart"),kx=cs("transitioncancel"),Kp=cs("transitionend"),Qp=new Map,Nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Nu.push("scrollEnd");function Ei(e,n){Qp.set(e,n),nt(n,[e])}var xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},oi=[],js=0,Lu=0;function Sl(){for(var e=js,n=Lu=js=0;n<e;){var a=oi[n];oi[n++]=null;var r=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,r!==null&&u!==null){var x=r.pending;x===null?u.next=u:(u.next=x.next,x.next=u),r.pending=u}f!==0&&Jp(a,u,f)}}function yl(e,n,a,r){oi[js++]=e,oi[js++]=n,oi[js++]=a,oi[js++]=r,Lu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ou(e,n,a,r){return yl(e,n,a,r),Ml(e)}function us(e,n){return yl(e,null,null,n),Ml(e)}function Jp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-zt(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function Ml(e){if(50<wo)throw wo=0,Xf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ys={};function Xx(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,a,r){return new Xx(e,n,a,r)}function Pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qi(e,n){var a=e.alternate;return a===null?(a=Zn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $p(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function El(e,n,a,r,u,f){var x=0;if(r=e,typeof e=="function")Pu(e)&&(x=1);else if(typeof e=="string")x=ZS(e,a,Rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=Zn(31,a,n,u),e.elementType=N,e.lanes=f,e;case C:return fs(a.children,u,f,n);case S:x=8,u|=24;break;case _:return e=Zn(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case H:return e=Zn(13,a,n,u),e.elementType=H,e.lanes=f,e;case F:return e=Zn(19,a,n,u),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:x=10;break t;case R:x=9;break t;case D:x=11;break t;case z:x=14;break t;case T:x=16,r=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Zn(x,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function fs(e,n,a,r){return e=Zn(7,e,r,n),e.lanes=a,e}function Fu(e,n,a){return e=Zn(6,e,null,n),e.lanes=a,e}function tm(e){var n=Zn(18,null,null,0);return n.stateNode=e,n}function zu(e,n,a){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var em=new WeakMap;function li(e,n){if(typeof e=="object"&&e!==null){var a=em.get(e);return a!==void 0?a:(n={value:e,source:n,stack:X(n)},em.set(e,n),n)}return{value:e,source:n,stack:X(n)}}var Zs=[],Ks=0,bl=null,oo=0,ci=[],ui=0,Ra=null,Ui=1,Ni="";function Ji(e,n){Zs[Ks++]=oo,Zs[Ks++]=bl,bl=e,oo=n}function nm(e,n,a){ci[ui++]=Ui,ci[ui++]=Ni,ci[ui++]=Ra,Ra=e;var r=Ui;e=Ni;var u=32-zt(r)-1;r&=~(1<<u),a+=1;var f=32-zt(n)+u;if(30<f){var x=u-u%5;f=(r&(1<<x)-1).toString(32),r>>=x,u-=x,Ui=1<<32-zt(n)+u|a<<u|r,Ni=f+e}else Ui=1<<f|a<<u|r,Ni=e}function Bu(e){e.return!==null&&(Ji(e,1),nm(e,1,0))}function Iu(e){for(;e===bl;)bl=Zs[--Ks],Zs[Ks]=null,oo=Zs[--Ks],Zs[Ks]=null;for(;e===Ra;)Ra=ci[--ui],ci[ui]=null,Ni=ci[--ui],ci[ui]=null,Ui=ci[--ui],ci[ui]=null}function im(e,n){ci[ui++]=Ui,ci[ui++]=Ni,ci[ui++]=Ra,Ui=n.id,Ni=n.overflow,Ra=e}var yn=null,Ye=null,Re=!1,Ca=null,fi=!1,Hu=Error(s(519));function wa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lo(li(n,e)),Hu}function am(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[rn]=e,n[pn]=r,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<Uo.length;a++)Me(Uo[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),qn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),on(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||yg(n.textContent,a)?(r.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),r.onScroll!=null&&Me("scroll",n),r.onScrollEnd!=null&&Me("scrollend",n),r.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||wa(e,!0)}function sm(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:yn=yn.return}}function Qs(e){if(e!==yn)return!1;if(!Re)return sm(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||sd(e.type,e.memoizedProps)),a=!a),a&&Ye&&wa(e),sm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=Dg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=Dg(e)}else n===27?(n=Ye,ka(e.type)?(e=ud,ud=null,Ye=e):Ye=n):Ye=yn?hi(e.stateNode.nextSibling):null;return!0}function ds(){Ye=yn=null,Re=!1}function Gu(){var e=Ca;return e!==null&&(kn===null?kn=e:kn.push.apply(kn,e),Ca=null),e}function lo(e){Ca===null?Ca=[e]:Ca.push(e)}var Vu=U(null),hs=null,$i=null;function Da(e,n,a){gt(Vu,n._currentValue),n._currentValue=a}function ta(e){e._currentValue=Vu.current,Y(Vu)}function ku(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Xu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var V=0;V<n.length;V++)if(A.context===n[V]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),ku(f.return,a,e),r||(x=null);break t}f=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),ku(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Js(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var A=u.type;Yn(u.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(u===k.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Fo):e=[Fo])}u=u.return}e!==null&&Xu(n,e,a,r),n.flags|=262144}function Tl(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ps(e){hs=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return rm(hs,e)}function Al(e,n){return hs===null&&ps(e),rm(e,n)}function rm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(e===null)throw Error(s(308));$i=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else $i=$i.next=n;return a}var Wx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},qx=o.unstable_scheduleCallback,jx=o.unstable_NormalPriority,cn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new Wx,data:new Map,refCount:0}}function co(e){e.refCount--,e.refCount===0&&qx(jx,function(){e.controller.abort()})}var uo=null,qu=0,$s=0,tr=null;function Yx(e,n){if(uo===null){var a=uo=[];qu=0,$s=Kf(),tr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return qu++,n.then(om,om),n}function om(){if(--qu===0&&uo!==null){tr!==null&&(tr.status="fulfilled");var e=uo;uo=null,$s=0,tr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Zx(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var lm=P.S;P.S=function(e,n){W0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Yx(e,n),lm!==null&&lm(e,n)};var ms=U(null);function ju(){var e=ms.current;return e!==null?e:je.pooledCache}function Rl(e,n){n===null?gt(ms,ms.current):gt(ms,n.pool)}function cm(){var e=ju();return e===null?null:{parent:cn._currentValue,pool:e}}var er=Error(s(460)),Yu=Error(s(474)),Cl=Error(s(542)),wl={then:function(){}};function um(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hm(e),e;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hm(e),e}throw _s=n,er}}function gs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_s=a,er):a}}var _s=null;function dm(){if(_s===null)throw Error(s(459));var e=_s;return _s=null,e}function hm(e){if(e===er||e===Cl)throw Error(s(483))}var nr=null,fo=0;function Dl(e){var n=fo;return fo+=1,nr===null&&(nr=[]),fm(nr,e,n)}function ho(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ul(e,n){throw n.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function pm(e){function n($,j){if(e){var st=$.deletions;st===null?($.deletions=[j],$.flags|=16):st.push(j)}}function a($,j){if(!e)return null;for(;j!==null;)n($,j),j=j.sibling;return null}function r($){for(var j=new Map;$!==null;)$.key!==null?j.set($.key,$):j.set($.index,$),$=$.sibling;return j}function u($,j){return $=Qi($,j),$.index=0,$.sibling=null,$}function f($,j,st){return $.index=st,e?(st=$.alternate,st!==null?(st=st.index,st<j?($.flags|=67108866,j):st):($.flags|=67108866,j)):($.flags|=1048576,j)}function x($){return e&&$.alternate===null&&($.flags|=67108866),$}function A($,j,st,St){return j===null||j.tag!==6?(j=Fu(st,$.mode,St),j.return=$,j):(j=u(j,st),j.return=$,j)}function V($,j,st,St){var ne=st.type;return ne===C?_t($,j,st.props.children,St,st.key):j!==null&&(j.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===T&&gs(ne)===j.type)?(j=u(j,st.props),ho(j,st),j.return=$,j):(j=El(st.type,st.key,st.props,null,$.mode,St),ho(j,st),j.return=$,j)}function rt($,j,st,St){return j===null||j.tag!==4||j.stateNode.containerInfo!==st.containerInfo||j.stateNode.implementation!==st.implementation?(j=zu(st,$.mode,St),j.return=$,j):(j=u(j,st.children||[]),j.return=$,j)}function _t($,j,st,St,ne){return j===null||j.tag!==7?(j=fs(st,$.mode,St,ne),j.return=$,j):(j=u(j,st),j.return=$,j)}function Et($,j,st){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Fu(""+j,$.mode,st),j.return=$,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return st=El(j.type,j.key,j.props,null,$.mode,st),ho(st,j),st.return=$,st;case b:return j=zu(j,$.mode,st),j.return=$,j;case T:return j=gs(j),Et($,j,st)}if(J(j)||q(j))return j=fs(j,$.mode,st,null),j.return=$,j;if(typeof j.then=="function")return Et($,Dl(j),st);if(j.$$typeof===O)return Et($,Al($,j),st);Ul($,j)}return null}function lt($,j,st,St){var ne=j!==null?j.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return ne!==null?null:A($,j,""+st,St);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case M:return st.key===ne?V($,j,st,St):null;case b:return st.key===ne?rt($,j,st,St):null;case T:return st=gs(st),lt($,j,st,St)}if(J(st)||q(st))return ne!==null?null:_t($,j,st,St,null);if(typeof st.then=="function")return lt($,j,Dl(st),St);if(st.$$typeof===O)return lt($,j,Al($,st),St);Ul($,st)}return null}function dt($,j,st,St,ne){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return $=$.get(st)||null,A(j,$,""+St,ne);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case M:return $=$.get(St.key===null?st:St.key)||null,V(j,$,St,ne);case b:return $=$.get(St.key===null?st:St.key)||null,rt(j,$,St,ne);case T:return St=gs(St),dt($,j,st,St,ne)}if(J(St)||q(St))return $=$.get(st)||null,_t(j,$,St,ne,null);if(typeof St.then=="function")return dt($,j,st,Dl(St),ne);if(St.$$typeof===O)return dt($,j,st,Al(j,St),ne);Ul(j,St)}return null}function jt($,j,st,St){for(var ne=null,Pe=null,Kt=j,ge=j=0,Te=null;Kt!==null&&ge<st.length;ge++){Kt.index>ge?(Te=Kt,Kt=null):Te=Kt.sibling;var Fe=lt($,Kt,st[ge],St);if(Fe===null){Kt===null&&(Kt=Te);break}e&&Kt&&Fe.alternate===null&&n($,Kt),j=f(Fe,j,ge),Pe===null?ne=Fe:Pe.sibling=Fe,Pe=Fe,Kt=Te}if(ge===st.length)return a($,Kt),Re&&Ji($,ge),ne;if(Kt===null){for(;ge<st.length;ge++)Kt=Et($,st[ge],St),Kt!==null&&(j=f(Kt,j,ge),Pe===null?ne=Kt:Pe.sibling=Kt,Pe=Kt);return Re&&Ji($,ge),ne}for(Kt=r(Kt);ge<st.length;ge++)Te=dt(Kt,$,ge,st[ge],St),Te!==null&&(e&&Te.alternate!==null&&Kt.delete(Te.key===null?ge:Te.key),j=f(Te,j,ge),Pe===null?ne=Te:Pe.sibling=Te,Pe=Te);return e&&Kt.forEach(function(Ya){return n($,Ya)}),Re&&Ji($,ge),ne}function ae($,j,st,St){if(st==null)throw Error(s(151));for(var ne=null,Pe=null,Kt=j,ge=j=0,Te=null,Fe=st.next();Kt!==null&&!Fe.done;ge++,Fe=st.next()){Kt.index>ge?(Te=Kt,Kt=null):Te=Kt.sibling;var Ya=lt($,Kt,Fe.value,St);if(Ya===null){Kt===null&&(Kt=Te);break}e&&Kt&&Ya.alternate===null&&n($,Kt),j=f(Ya,j,ge),Pe===null?ne=Ya:Pe.sibling=Ya,Pe=Ya,Kt=Te}if(Fe.done)return a($,Kt),Re&&Ji($,ge),ne;if(Kt===null){for(;!Fe.done;ge++,Fe=st.next())Fe=Et($,Fe.value,St),Fe!==null&&(j=f(Fe,j,ge),Pe===null?ne=Fe:Pe.sibling=Fe,Pe=Fe);return Re&&Ji($,ge),ne}for(Kt=r(Kt);!Fe.done;ge++,Fe=st.next())Fe=dt(Kt,$,ge,Fe.value,St),Fe!==null&&(e&&Fe.alternate!==null&&Kt.delete(Fe.key===null?ge:Fe.key),j=f(Fe,j,ge),Pe===null?ne=Fe:Pe.sibling=Fe,Pe=Fe);return e&&Kt.forEach(function(ry){return n($,ry)}),Re&&Ji($,ge),ne}function We($,j,st,St){if(typeof st=="object"&&st!==null&&st.type===C&&st.key===null&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case M:t:{for(var ne=st.key;j!==null;){if(j.key===ne){if(ne=st.type,ne===C){if(j.tag===7){a($,j.sibling),St=u(j,st.props.children),St.return=$,$=St;break t}}else if(j.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===T&&gs(ne)===j.type){a($,j.sibling),St=u(j,st.props),ho(St,st),St.return=$,$=St;break t}a($,j);break}else n($,j);j=j.sibling}st.type===C?(St=fs(st.props.children,$.mode,St,st.key),St.return=$,$=St):(St=El(st.type,st.key,st.props,null,$.mode,St),ho(St,st),St.return=$,$=St)}return x($);case b:t:{for(ne=st.key;j!==null;){if(j.key===ne)if(j.tag===4&&j.stateNode.containerInfo===st.containerInfo&&j.stateNode.implementation===st.implementation){a($,j.sibling),St=u(j,st.children||[]),St.return=$,$=St;break t}else{a($,j);break}else n($,j);j=j.sibling}St=zu(st,$.mode,St),St.return=$,$=St}return x($);case T:return st=gs(st),We($,j,st,St)}if(J(st))return jt($,j,st,St);if(q(st)){if(ne=q(st),typeof ne!="function")throw Error(s(150));return st=ne.call(st),ae($,j,st,St)}if(typeof st.then=="function")return We($,j,Dl(st),St);if(st.$$typeof===O)return We($,j,Al($,st),St);Ul($,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,j!==null&&j.tag===6?(a($,j.sibling),St=u(j,st),St.return=$,$=St):(a($,j),St=Fu(st,$.mode,St),St.return=$,$=St),x($)):a($,j)}return function($,j,st,St){try{fo=0;var ne=We($,j,st,St);return nr=null,ne}catch(Kt){if(Kt===er||Kt===Cl)throw Kt;var Pe=Zn(29,Kt,null,$.mode);return Pe.lanes=St,Pe.return=$,Pe}finally{}}}var vs=pm(!0),mm=pm(!1),Ua=!1;function Zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(ze&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=Ml(e),Jp(e,null,a),n}return yl(e,r,n,a),Ml(e)}function po(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,zs(e,a)}}function Qu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ju=!1;function mo(){if(Ju){var e=tr;if(e!==null)throw e}}function go(e,n,a,r){Ju=!1;var u=e.updateQueue;Ua=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var V=A,rt=V.next;V.next=null,x===null?f=rt:x.next=rt,x=V;var _t=e.alternate;_t!==null&&(_t=_t.updateQueue,A=_t.lastBaseUpdate,A!==x&&(A===null?_t.firstBaseUpdate=rt:A.next=rt,_t.lastBaseUpdate=V))}if(f!==null){var Et=u.baseState;x=0,_t=rt=V=null,A=f;do{var lt=A.lane&-536870913,dt=lt!==A.lane;if(dt?(be&lt)===lt:(r&lt)===lt){lt!==0&&lt===$s&&(Ju=!0),_t!==null&&(_t=_t.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var jt=e,ae=A;lt=n;var We=a;switch(ae.tag){case 1:if(jt=ae.payload,typeof jt=="function"){Et=jt.call(We,Et,lt);break t}Et=jt;break t;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=ae.payload,lt=typeof jt=="function"?jt.call(We,Et,lt):jt,lt==null)break t;Et=y({},Et,lt);break t;case 2:Ua=!0}}lt=A.callback,lt!==null&&(e.flags|=64,dt&&(e.flags|=8192),dt=u.callbacks,dt===null?u.callbacks=[lt]:dt.push(lt))}else dt={lane:lt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},_t===null?(rt=_t=dt,V=Et):_t=_t.next=dt,x|=lt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;dt=A,A=dt.next,dt.next=null,u.lastBaseUpdate=dt,u.shared.pending=null}}while(!0);_t===null&&(V=Et),u.baseState=V,u.firstBaseUpdate=rt,u.lastBaseUpdate=_t,f===null&&(u.shared.lanes=0),Ba|=x,e.lanes=x,e.memoizedState=Et}}function gm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function _m(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)gm(a[e],n)}var ir=U(null),Nl=U(0);function vm(e,n){e=ca,gt(Nl,e),gt(ir,n),ca=e|n.baseLanes}function $u(){gt(Nl,ca),gt(ir,ir.current)}function tf(){ca=Nl.current,Y(ir),Y(Nl)}var Kn=U(null),di=null;function Oa(e){var n=e.alternate;gt(an,an.current&1),gt(Kn,e),di===null&&(n===null||ir.current!==null||n.memoizedState!==null)&&(di=e)}function ef(e){gt(an,an.current),gt(Kn,e),di===null&&(di=e)}function xm(e){e.tag===22?(gt(an,an.current),gt(Kn,e),di===null&&(di=e)):Pa()}function Pa(){gt(an,an.current),gt(Kn,Kn.current)}function Qn(e){Y(Kn),di===e&&(di=null),Y(an)}var an=U(0);function Ll(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ld(a)||cd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ea=0,he=null,ke=null,un=null,Ol=!1,ar=!1,xs=!1,Pl=0,_o=0,sr=null,Kx=0;function tn(){throw Error(s(321))}function nf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function af(e,n,a,r,u,f){return ea=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?n0:xf,xs=!1,f=a(r,u),xs=!1,ar&&(f=ym(n,a,r,u)),Sm(e),f}function Sm(e){P.H=So;var n=ke!==null&&ke.next!==null;if(ea=0,un=ke=he=null,Ol=!1,_o=0,sr=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&Tl(e)&&(fn=!0))}function ym(e,n,a,r){he=e;var u=0;do{if(ar&&(sr=null),_o=0,ar=!1,25<=u)throw Error(s(301));if(u+=1,un=ke=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=i0,f=n(a,r)}while(ar);return f}function Qx(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?vo(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(he.flags|=1024),n}function sf(){var e=Pl!==0;return Pl=0,e}function rf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function of(e){if(Ol){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ol=!1}ea=0,un=ke=he=null,ar=!1,_o=Pl=0,sr=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?he.memoizedState=un=e:un=un.next=e,un}function sn(){if(ke===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=un===null?he.memoizedState:un.next;if(n!==null)un=n,ke=e;else{if(e===null)throw he.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},un===null?he.memoizedState=un=e:un=un.next=e}return un}function Fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(e){var n=_o;return _o+=1,sr===null&&(sr=[]),e=fm(sr,e,n),n=he,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?n0:xf),e}function zl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vo(e);if(e.$$typeof===O)return Mn(e)}throw Error(s(438,String(e)))}function lf(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=he.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fl(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=pt;return n.index++,a}function na(e,n){return typeof n=="function"?n(e):n}function Bl(e){var n=sn();return cf(n,ke,e)}function cf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=x=null,V=null,rt=n,_t=!1;do{var Et=rt.lane&-536870913;if(Et!==rt.lane?(be&Et)===Et:(ea&Et)===Et){var lt=rt.revertLane;if(lt===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null}),Et===$s&&(_t=!0);else if((ea&lt)===lt){rt=rt.next,lt===$s&&(_t=!0);continue}else Et={lane:0,revertLane:rt.revertLane,gesture:null,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},V===null?(A=V=Et,x=f):V=V.next=Et,he.lanes|=lt,Ba|=lt;Et=rt.action,xs&&a(f,Et),f=rt.hasEagerState?rt.eagerState:a(f,Et)}else lt={lane:Et,revertLane:rt.revertLane,gesture:rt.gesture,action:rt.action,hasEagerState:rt.hasEagerState,eagerState:rt.eagerState,next:null},V===null?(A=V=lt,x=f):V=V.next=lt,he.lanes|=Et,Ba|=Et;rt=rt.next}while(rt!==null&&rt!==n);if(V===null?x=f:V.next=A,!Yn(f,e.memoizedState)&&(fn=!0,_t&&(a=tr,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=V,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function uf(e){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=e(f,x.action),x=x.next;while(x!==u);Yn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Mm(e,n,a){var r=he,u=sn(),f=Re;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Yn((ke||u).memoizedState,a);if(x&&(u.memoizedState=a,fn=!0),u=u.queue,hf(Tm.bind(null,r,u,e),[e]),u.getSnapshot!==n||x||un!==null&&un.memoizedState.tag&1){if(r.flags|=2048,rr(9,{destroy:void 0},bm.bind(null,r,u,a,n),null),je===null)throw Error(s(349));f||(ea&127)!==0||Em(r,n,a)}return a}function Em(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=Fl(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function bm(e,n,a,r){n.value=a,n.getSnapshot=r,Am(n)&&Rm(e)}function Tm(e,n,a){return a(function(){Am(n)&&Rm(e)})}function Am(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function Rm(e){var n=us(e,2);n!==null&&Xn(n,e,2)}function ff(e){var n=Fn();if(typeof e=="function"){var a=e;if(e=a(),xs){It(!0);try{a()}finally{It(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},n}function Cm(e,n,a,r){return e.baseState=a,cf(e,ke,typeof r=="function"?r:na)}function Jx(e,n,a,r,u){if(Gl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};P.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,wm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function wm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=P.T,x={};P.T=x;try{var A=a(u,r),V=P.S;V!==null&&V(x,A),Dm(e,n,A)}catch(rt){df(e,n,rt)}finally{f!==null&&x.types!==null&&(f.types=x.types),P.T=f}}else try{f=a(u,r),Dm(e,n,f)}catch(rt){df(e,n,rt)}}function Dm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Um(e,n,r)},function(r){return df(e,n,r)}):Um(e,n,a)}function Um(e,n,a){n.status="fulfilled",n.value=a,Nm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,wm(e,a)))}function df(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Nm(n),n=n.next;while(n!==r)}e.action=null}function Nm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Lm(e,n){return n}function Om(e,n){if(Re){var a=je.formState;if(a!==null){t:{var r=he;if(Re){if(Ye){e:{for(var u=Ye,f=fi;u.nodeType!==8;){if(!f){u=null;break e}if(u=hi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ye=hi(u.nextSibling),r=u.data==="F!";break t}}wa(r)}r=!1}r&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lm,lastRenderedState:n},a.queue=r,a=$m.bind(null,he,r),r.dispatch=a,r=ff(!1),f=vf.bind(null,he,!1,r.queue),r=Fn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=Jx.bind(null,he,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function Pm(e){var n=sn();return Fm(n,ke,e)}function Fm(e,n,a){if(n=cf(e,n,Lm)[0],e=Bl(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=vo(n)}catch(x){throw x===er?Cl:x}else r=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,rr(9,{destroy:void 0},$x.bind(null,u,a),null)),[r,f,e]}function $x(e,n){e.action=n}function zm(e){var n=sn(),a=ke;if(a!==null)return Fm(n,a,e);sn(),n=n.memoizedState,a=sn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function rr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=he.updateQueue,n===null&&(n=Fl(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Bm(){return sn().memoizedState}function Il(e,n,a,r){var u=Fn();he.flags|=e,u.memoizedState=rr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Hl(e,n,a,r){var u=sn();r=r===void 0?null:r;var f=u.memoizedState.inst;ke!==null&&r!==null&&nf(r,ke.memoizedState.deps)?u.memoizedState=rr(n,f,a,r):(he.flags|=e,u.memoizedState=rr(1|n,f,a,r))}function Im(e,n){Il(8390656,8,e,n)}function hf(e,n){Hl(2048,8,e,n)}function tS(e){he.flags|=4;var n=he.updateQueue;if(n===null)n=Fl(),he.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Hm(e){var n=sn().memoizedState;return tS({ref:n,nextImpl:e}),function(){if((ze&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Gm(e,n){return Hl(4,2,e,n)}function Vm(e,n){return Hl(4,4,e,n)}function km(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xm(e,n,a){a=a!=null?a.concat([e]):null,Hl(4,4,km.bind(null,n,e),a)}function pf(){}function Wm(e,n){var a=sn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&nf(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function qm(e,n){var a=sn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&nf(n,r[1]))return r[0];if(r=e(),xs){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[r,n],r}function mf(e,n,a){return a===void 0||(ea&1073741824)!==0&&(be&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=j0(),he.lanes|=e,Ba|=e,a)}function jm(e,n,a,r){return Yn(a,n)?a:ir.current!==null?(e=mf(e,a,r),Yn(e,n)||(fn=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(be&261930)===0?(fn=!0,e.memoizedState=a):(e=j0(),he.lanes|=e,Ba|=e,n)}function Ym(e,n,a,r,u){var f=B.p;B.p=f!==0&&8>f?f:8;var x=P.T,A={};P.T=A,vf(e,!1,n,a);try{var V=u(),rt=P.S;if(rt!==null&&rt(A,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var _t=Zx(V,r);xo(e,n,_t,ti(e))}else xo(e,n,r,ti(e))}catch(Et){xo(e,n,{then:function(){},status:"rejected",reason:Et},ti())}finally{B.p=f,x!==null&&A.types!==null&&(x.types=A.types),P.T=x}}function eS(){}function gf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Zm(e).queue;Ym(e,u,n,it,a===null?eS:function(){return Km(e),a(r)})}function Zm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:it,baseState:it,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:it},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Km(e){var n=Zm(e);n.next===null&&(n=e.alternate.memoizedState),xo(e,n.next.queue,{},ti())}function _f(){return Mn(Fo)}function Qm(){return sn().memoizedState}function Jm(){return sn().memoizedState}function nS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();e=Na(a);var r=La(n,e,a);r!==null&&(Xn(r,n,a),po(r,n,a)),n={cache:Wu()},e.payload=n;return}n=n.return}}function iS(e,n,a){var r=ti();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Gl(e)?t0(n,a):(a=Ou(e,n,a,r),a!==null&&(Xn(a,e,r),e0(a,n,r)))}function $m(e,n,a){var r=ti();xo(e,n,a,r)}function xo(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Gl(e))t0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,A=f(x,a);if(u.hasEagerState=!0,u.eagerState=A,Yn(A,x))return yl(e,n,u,0),je===null&&Sl(),!1}catch{}finally{}if(a=Ou(e,n,u,r),a!==null)return Xn(a,e,r),e0(a,n,r),!0}return!1}function vf(e,n,a,r){if(r={lane:2,revertLane:Kf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Gl(e)){if(n)throw Error(s(479))}else n=Ou(e,a,r,2),n!==null&&Xn(n,e,2)}function Gl(e){var n=e.alternate;return e===he||n!==null&&n===he}function t0(e,n){ar=Ol=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function e0(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,zs(e,a)}}var So={readContext:Mn,use:zl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};So.useEffectEvent=tn;var n0={readContext:Mn,use:zl,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:Im,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Il(4194308,4,km.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Il(4194308,4,e,n)},useInsertionEffect:function(e,n){Il(4,2,e,n)},useMemo:function(e,n){var a=Fn();n=n===void 0?null:n;var r=e();if(xs){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Fn();if(a!==void 0){var u=a(n);if(xs){It(!0);try{a(n)}finally{It(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=iS.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=ff(e);var n=e.queue,a=$m.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:pf,useDeferredValue:function(e,n){var a=Fn();return mf(a,e,n)},useTransition:function(){var e=ff(!1);return e=Ym.bind(null,he,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=he,u=Fn();if(Re){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),je===null)throw Error(s(349));(be&127)!==0||Em(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Im(Tm.bind(null,r,f,e),[e]),r.flags|=2048,rr(9,{destroy:void 0},bm.bind(null,r,f,a,n),null),a},useId:function(){var e=Fn(),n=je.identifierPrefix;if(Re){var a=Ni,r=Ui;a=(r&~(1<<32-zt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Kx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:_f,useFormState:Om,useActionState:Om,useOptimistic:function(e){var n=Fn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=vf.bind(null,he,!0,a),a.dispatch=n,[e,n]},useMemoCache:lf,useCacheRefresh:function(){return Fn().memoizedState=nS.bind(null,he)},useEffectEvent:function(e){var n=Fn(),a={impl:e};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},xf={readContext:Mn,use:zl,useCallback:Wm,useContext:Mn,useEffect:hf,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:Bl,useRef:Bm,useState:function(){return Bl(na)},useDebugValue:pf,useDeferredValue:function(e,n){var a=sn();return jm(a,ke.memoizedState,e,n)},useTransition:function(){var e=Bl(na)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:Mm,useId:Qm,useHostTransitionStatus:_f,useFormState:Pm,useActionState:Pm,useOptimistic:function(e,n){var a=sn();return Cm(a,ke,e,n)},useMemoCache:lf,useCacheRefresh:Jm};xf.useEffectEvent=Hm;var i0={readContext:Mn,use:zl,useCallback:Wm,useContext:Mn,useEffect:hf,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:uf,useRef:Bm,useState:function(){return uf(na)},useDebugValue:pf,useDeferredValue:function(e,n){var a=sn();return ke===null?mf(a,e,n):jm(a,ke.memoizedState,e,n)},useTransition:function(){var e=uf(na)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:vo(e),n]},useSyncExternalStore:Mm,useId:Qm,useHostTransitionStatus:_f,useFormState:zm,useActionState:zm,useOptimistic:function(e,n){var a=sn();return ke!==null?Cm(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:lf,useCacheRefresh:Jm};i0.useEffectEvent=Hm;function Sf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:y({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var yf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ti(),u=Na(r);u.payload=n,a!=null&&(u.callback=a),n=La(e,u,r),n!==null&&(Xn(n,e,r),po(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ti(),u=Na(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=La(e,u,r),n!==null&&(Xn(n,e,r),po(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ti(),r=Na(a);r.tag=2,n!=null&&(r.callback=n),n=La(e,r,a),n!==null&&(Xn(n,e,a),po(n,e,a))}};function a0(e,n,a,r,u,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!so(a,r)||!so(u,f):!0}function s0(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&yf.enqueueReplaceState(n,n.state,null)}function Ss(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=y({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function r0(e){xl(e)}function o0(e){console.error(e)}function l0(e){xl(e)}function Vl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function c0(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Mf(e,n,a){return a=Na(a),a.tag=3,a.payload={element:null},a.callback=function(){Vl(e,n)},a}function u0(e){return e=Na(e),e.tag=3,e}function f0(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){c0(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){c0(n,a,r),typeof u!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function aS(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Js(n,a,u,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return di===null?tc():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===wl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),jf(e,r,u)),!1;case 22:return a.flags|=65536,r===wl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),jf(e,r,u)),!1}throw Error(s(435,a.tag))}return jf(e,r,u),tc(),!1}if(Re)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Hu&&(e=Error(s(422),{cause:r}),lo(li(e,a)))):(r!==Hu&&(n=Error(s(423),{cause:r}),lo(li(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=li(r,a),u=Mf(e.stateNode,r,u),Qu(e,u),en!==4&&(en=2)),!1;var f=Error(s(520),{cause:r});if(f=li(f,a),Co===null?Co=[f]:Co.push(f),en!==4&&(en=2),n===null)return!0;r=li(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Mf(a.stateNode,r,e),Qu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ia===null||!Ia.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=u0(u),f0(u,e,a,r),Qu(a,u),!1}a=a.return}while(a!==null);return!1}var Ef=Error(s(461)),fn=!1;function En(e,n,a,r){n.child=e===null?mm(n,null,a,r):vs(n,e.child,a,r)}function d0(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var A in r)A!=="ref"&&(x[A]=r[A])}else x=r;return ps(n),r=af(e,n,a,x,f,u),A=sf(),e!==null&&!fn?(rf(e,n,u),ia(e,n,u)):(Re&&A&&Bu(n),n.flags|=1,En(e,n,r,u),n.child)}function h0(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!Pu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,p0(e,n,f,r,u)):(e=El(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Uf(e,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:so,a(x,r)&&e.ref===n.ref)return ia(e,n,u)}return n.flags|=1,e=Qi(f,r),e.ref=n.ref,e.return=n,n.child=e}function p0(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(so(f,r)&&e.ref===n.ref)if(fn=!1,n.pendingProps=r=f,Uf(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,ia(e,n,u)}return bf(e,n,a,r,u)}function m0(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return g0(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rl(n,f!==null?f.cachePool:null),f!==null?vm(n,f):$u(),xm(n);else return r=n.lanes=536870912,g0(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(Rl(n,f.cachePool),vm(n,f),Pa(),n.memoizedState=null):(e!==null&&Rl(n,null),$u(),Pa());return En(e,n,u,a),n.child}function yo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function g0(e,n,a,r,u){var f=ju();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Rl(n,null),$u(),xm(n),e!==null&&Js(e,n,r,!0),n.childLanes=u,null}function kl(e,n){return n=Wl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function _0(e,n,a){return vs(n,e.child,null,a),e=kl(n,n.pendingProps),e.flags|=2,Qn(n),n.memoizedState=null,e}function sS(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Re){if(r.mode==="hidden")return e=kl(n,r),n.lanes=536870912,yo(null,e);if(ef(n),(e=Ye)?(e=wg(e,fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=tm(e),a.return=n,n.child=a,yn=n,Ye=null)):e=null,e===null)throw wa(n);return n.lanes=536870912,null}return kl(n,r)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(ef(n),u)if(n.flags&256)n.flags&=-257,n=_0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||Js(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(r=je,r!==null&&(x=ll(r,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,us(e,x),Xn(r,e,x),Ef;tc(),n=_0(e,n,a)}else e=f.treeContext,Ye=hi(x.nextSibling),yn=n,Re=!0,Ca=null,fi=!1,e!==null&&im(n,e),n=kl(n,r),n.flags|=4096;return n}return e=Qi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Xl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function bf(e,n,a,r,u){return ps(n),a=af(e,n,a,r,void 0,u),r=sf(),e!==null&&!fn?(rf(e,n,u),ia(e,n,u)):(Re&&r&&Bu(n),n.flags|=1,En(e,n,a,u),n.child)}function v0(e,n,a,r,u,f){return ps(n),n.updateQueue=null,a=ym(n,r,a,u),Sm(e),r=sf(),e!==null&&!fn?(rf(e,n,f),ia(e,n,f)):(Re&&r&&Bu(n),n.flags|=1,En(e,n,a,f),n.child)}function x0(e,n,a,r,u){if(ps(n),n.stateNode===null){var f=Ys,x=a.contextType;typeof x=="object"&&x!==null&&(f=Mn(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=yf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Zu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Mn(x):Ys,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Sf(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&yf.enqueueReplaceState(f,f.state,null),go(n,r,f,u),mo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,V=Ss(a,A);f.props=V;var rt=f.context,_t=a.contextType;x=Ys,typeof _t=="object"&&_t!==null&&(x=Mn(_t));var Et=a.getDerivedStateFromProps;_t=typeof Et=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,_t||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||rt!==x)&&s0(n,f,r,x),Ua=!1;var lt=n.memoizedState;f.state=lt,go(n,r,f,u),mo(),rt=n.memoizedState,A||lt!==rt||Ua?(typeof Et=="function"&&(Sf(n,a,Et,r),rt=n.memoizedState),(V=Ua||a0(n,a,V,r,lt,rt,x))?(_t||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=rt),f.props=r,f.state=rt,f.context=x,r=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Ku(e,n),x=n.memoizedProps,_t=Ss(a,x),f.props=_t,Et=n.pendingProps,lt=f.context,rt=a.contextType,V=Ys,typeof rt=="object"&&rt!==null&&(V=Mn(rt)),A=a.getDerivedStateFromProps,(rt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==Et||lt!==V)&&s0(n,f,r,V),Ua=!1,lt=n.memoizedState,f.state=lt,go(n,r,f,u),mo();var dt=n.memoizedState;x!==Et||lt!==dt||Ua||e!==null&&e.dependencies!==null&&Tl(e.dependencies)?(typeof A=="function"&&(Sf(n,a,A,r),dt=n.memoizedState),(_t=Ua||a0(n,a,_t,r,lt,dt,V)||e!==null&&e.dependencies!==null&&Tl(e.dependencies))?(rt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,dt,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,dt,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=dt),f.props=r,f.state=dt,f.context=V,r=_t):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&lt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&lt===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Xl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=vs(n,e.child,null,u),n.child=vs(n,null,a,u)):En(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ia(e,n,u),e}function S0(e,n,a,r){return ds(),n.flags|=256,En(e,n,a,r),n.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Af(e){return{baseLanes:e,cachePool:cm()}}function Rf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=$n),e}function y0(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(u?Oa(n):Pa(),(e=Ye)?(e=wg(e,fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},a=tm(e),a.return=n,n.child=a,yn=n,Ye=null)):e=null,e===null)throw wa(n);return cd(e)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,u?(Pa(),u=n.mode,A=Wl({mode:"hidden",children:A},u),r=fs(r,u,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=Af(a),r.childLanes=Rf(e,x,a),n.memoizedState=Tf,yo(null,r)):(Oa(n),Cf(n,A))}var V=e.memoizedState;if(V!==null&&(A=V.dehydrated,A!==null)){if(f)n.flags&256?(Oa(n),n.flags&=-257,n=wf(e,n,a)):n.memoizedState!==null?(Pa(),n.child=e.child,n.flags|=128,n=null):(Pa(),A=r.fallback,u=n.mode,r=Wl({mode:"visible",children:r.children},u),A=fs(A,u,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,vs(n,e.child,null,a),r=n.child,r.memoizedState=Af(a),r.childLanes=Rf(e,x,a),n.memoizedState=Tf,n=yo(null,r));else if(Oa(n),cd(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var rt=x.dgst;x=rt,r=Error(s(419)),r.stack="",r.digest=x,lo({value:r,source:null,stack:null}),n=wf(e,n,a)}else if(fn||Js(e,n,a,!1),x=(a&e.childLanes)!==0,fn||x){if(x=je,x!==null&&(r=ll(x,a),r!==0&&r!==V.retryLane))throw V.retryLane=r,us(e,r),Xn(x,e,r),Ef;ld(A)||tc(),n=wf(e,n,a)}else ld(A)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,Ye=hi(A.nextSibling),yn=n,Re=!0,Ca=null,fi=!1,e!==null&&im(n,e),n=Cf(n,r.children),n.flags|=4096);return n}return u?(Pa(),A=r.fallback,u=n.mode,V=e.child,rt=V.sibling,r=Qi(V,{mode:"hidden",children:r.children}),r.subtreeFlags=V.subtreeFlags&65011712,rt!==null?A=Qi(rt,A):(A=fs(A,u,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,yo(null,r),r=n.child,A=e.child.memoizedState,A===null?A=Af(a):(u=A.cachePool,u!==null?(V=cn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=cm(),A={baseLanes:A.baseLanes|a,cachePool:u}),r.memoizedState=A,r.childLanes=Rf(e,x,a),n.memoizedState=Tf,yo(e.child,r)):(Oa(n),a=e.child,e=a.sibling,a=Qi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Cf(e,n){return n=Wl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Wl(e,n){return e=Zn(22,e,null,n),e.lanes=0,e}function wf(e,n,a){return vs(n,e.child,null,a),e=Cf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function M0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ku(e.return,n,a)}function Df(e,n,a,r,u,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function E0(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var x=an.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,gt(an,x),En(e,n,r,a),r=Re?oo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&M0(e,a,n);else if(e.tag===19)M0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Ll(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Df(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Ll(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Df(n,!0,a,null,f,r);break;case"together":Df(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ia(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Js(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Qi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Qi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Uf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Tl(e)))}function rS(e,n,a){switch(n.tag){case 3:ut(n,n.stateNode.containerInfo),Da(n,cn,e.memoizedState.cache),ds();break;case 27:case 5:Lt(n);break;case 4:ut(n,n.stateNode.containerInfo);break;case 10:Da(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ef(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Oa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?y0(e,n,a):(Oa(n),e=ia(e,n,a),e!==null?e.sibling:null);Oa(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Js(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return E0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(an,an.current),r)break;return null;case 22:return n.lanes=0,m0(e,n,a,n.pendingProps);case 24:Da(n,cn,e.memoizedState.cache)}return ia(e,n,a)}function b0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Uf(e,a)&&(n.flags&128)===0)return fn=!1,rS(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Re&&(n.flags&1048576)!==0&&nm(n,oo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=gs(n.elementType),n.type=e,typeof e=="function")Pu(e)?(r=Ss(e,r),n.tag=1,n=x0(null,n,e,r,a)):(n.tag=0,n=bf(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=d0(null,n,e,r,a);break t}else if(u===z){n.tag=14,n=h0(null,n,e,r,a);break t}}throw n=tt(e)||e,Error(s(306,n,""))}}return n;case 0:return bf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Ss(r,n.pendingProps),x0(e,n,r,u,a);case 3:t:{if(ut(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Ku(e,n),go(n,r,null,a);var x=n.memoizedState;if(r=x.cache,Da(n,cn,r),r!==f.cache&&Xu(n,[cn],a,!0),mo(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=S0(e,n,r,a);break t}else if(r!==u){u=li(Error(s(424)),n),lo(u),n=S0(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=hi(e.firstChild),yn=n,Re=!0,Ca=null,fi=!0,a=mm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ds(),r===u){n=ia(e,n,a);break t}En(e,n,r,a)}n=n.child}return n;case 26:return Xl(e,n),e===null?(a=Pg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,r=oc(et.current).createElement(a),r[rn]=n,r[pn]=e,bn(r,a,e),Z(r),n.stateNode=r):n.memoizedState=Pg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Lt(n),e===null&&Re&&(r=n.stateNode=Ng(n.type,n.pendingProps,et.current),yn=n,fi=!0,u=Ye,ka(n.type)?(ud=u,Ye=hi(r.firstChild)):Ye=u),En(e,n,n.pendingProps.children,a),Xl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((u=r=Ye)&&(r=FS(r,n.type,n.pendingProps,fi),r!==null?(n.stateNode=r,yn=n,Ye=hi(r.firstChild),fi=!1,u=!0):u=!1),u||wa(n)),Lt(n),u=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,r=f.children,sd(u,f)?r=null:x!==null&&sd(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=af(e,n,Qx,null,null,a),Fo._currentValue=u),Xl(e,n),En(e,n,r,a),n.child;case 6:return e===null&&Re&&((e=a=Ye)&&(a=zS(a,n.pendingProps,fi),a!==null?(n.stateNode=a,yn=n,Ye=null,e=!0):e=!1),e||wa(n)),null;case 13:return y0(e,n,a);case 4:return ut(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=vs(n,null,r,a):En(e,n,r,a),n.child;case 11:return d0(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Da(n,n.type,r.value),En(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,ps(n),u=Mn(u),r=r(u),n.flags|=1,En(e,n,r,a),n.child;case 14:return h0(e,n,n.type,n.pendingProps,a);case 15:return p0(e,n,n.type,n.pendingProps,a);case 19:return E0(e,n,a);case 31:return sS(e,n,a);case 22:return m0(e,n,a,n.pendingProps);case 24:return ps(n),r=Mn(cn),e===null?(u=ju(),u===null&&(u=je,f=Wu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Zu(n),Da(n,cn,u)):((e.lanes&a)!==0&&(Ku(e,n),go(n,null,null,a),mo()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Da(n,cn,r)):(r=f.cache,Da(n,cn,r),r!==u.cache&&Xu(n,[cn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function aa(e){e.flags|=4}function Nf(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Q0())e.flags|=8192;else throw _s=wl,Yu}else e.flags&=-16777217}function T0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hg(n))if(Q0())e.flags|=8192;else throw _s=wl,Yu}function ql(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ie():536870912,e.lanes|=n,ur|=n)}function Mo(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function oS(e,n,a){var r=n.pendingProps;switch(Iu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ta(cn),Mt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Qs(n)?aa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Gu())),Ze(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(aa(n),f!==null?(Ze(n),T0(n,f)):(Ze(n),Nf(n,u,null,r,a))):f?f!==e.memoizedState?(aa(n),Ze(n),T0(n,f)):(Ze(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&aa(n),Ze(n),Nf(n,u,e,r,a)),null;case 27:if(Bt(n),a=et.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&aa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}e=Rt.current,Qs(n)?am(n):(e=Ng(u,r,a),n.stateNode=e,aa(n))}return Ze(n),null;case 5:if(Bt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&aa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(f=Rt.current,Qs(n))am(n);else{var x=oc(et.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?x.createElement(u,{is:r.is}):x.createElement(u)}}f[rn]=n,f[pn]=r;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(bn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&aa(n)}}return Ze(n),Nf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&aa(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=et.current,Qs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=yn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||yg(e.nodeValue,a)),e||wa(n,!0)}else e=oc(e).createTextNode(r),e[rn]=n,n.stateNode=e}return Ze(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Qs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[rn]=n}else ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),e=!1}else a=Gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Qs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[rn]=n}else ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=Gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ql(n,n.updateQueue),Ze(n),null);case 4:return Mt(),e===null&&td(n.stateNode.containerInfo),Ze(n),null;case 10:return ta(n.type),Ze(n),null;case 19:if(Y(an),r=n.memoizedState,r===null)return Ze(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)Mo(r,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ll(e),f!==null){for(n.flags|=128,Mo(r,!1),e=f.updateQueue,n.updateQueue=e,ql(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)$p(a,e),a=a.sibling;return gt(an,an.current&1|2),Re&&Ji(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&E()>Ql&&(n.flags|=128,u=!0,Mo(r,!1),n.lanes=4194304)}else{if(!u)if(e=Ll(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,ql(n,e),Mo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Re)return Ze(n),null}else 2*E()-r.renderingStartTime>Ql&&a!==536870912&&(n.flags|=128,u=!0,Mo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=E(),e.sibling=null,a=an.current,gt(an,u?a&1|2:a&1),Re&&Ji(n,r.treeForkCount),e):(Ze(n),null);case 22:case 23:return Qn(n),tf(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&ql(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Y(ms),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ta(cn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function lS(e,n){switch(Iu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ta(cn),Mt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Bt(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(s(340));ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Qn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ds()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Y(an),null;case 4:return Mt(),null;case 10:return ta(n.type),null;case 22:case 23:return Qn(n),tf(),e!==null&&Y(ms),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ta(cn),null;case 25:return null;default:return null}}function A0(e,n){switch(Iu(n),n.tag){case 3:ta(cn),Mt();break;case 26:case 27:case 5:Bt(n);break;case 4:Mt();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:Y(an);break;case 10:ta(n.type);break;case 22:case 23:Qn(n),tf(),e!==null&&Y(ms);break;case 24:ta(cn)}}function Eo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==u)}}catch(A){Ge(n,n.return,A)}}function Fa(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var x=r.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var V=a,rt=A;try{rt()}catch(_t){Ge(u,V,_t)}}}r=r.next}while(r!==f)}}catch(_t){Ge(n,n.return,_t)}}function R0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{_m(n,a)}catch(r){Ge(e,e.return,r)}}}function C0(e,n,a){a.props=Ss(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ge(e,n,r)}}function bo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Ge(e,n,u)}}function Li(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function w0(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Lf(e,n,a){try{var r=e.stateNode;DS(r,e.type,a,n),r[pn]=n}catch(u){Ge(e,e.return,u)}}function D0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ka(e.type)||e.tag===4}function Of(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||D0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ka(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi));else if(r!==4&&(r===27&&ka(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Pf(e,n,a),e=e.sibling;e!==null;)Pf(e,n,a),e=e.sibling}function jl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&ka(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(jl(e,n,a),e=e.sibling;e!==null;)jl(e,n,a),e=e.sibling}function U0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);bn(n,r,a),n[rn]=e,n[pn]=a}catch(f){Ge(e,e.return,f)}}var sa=!1,dn=!1,Ff=!1,N0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function cS(e,n){if(e=e.containerInfo,id=pc,e=Xp(e),Cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,A=-1,V=-1,rt=0,_t=0,Et=e,lt=null;e:for(;;){for(var dt;Et!==a||u!==0&&Et.nodeType!==3||(A=x+u),Et!==f||r!==0&&Et.nodeType!==3||(V=x+r),Et.nodeType===3&&(x+=Et.nodeValue.length),(dt=Et.firstChild)!==null;)lt=Et,Et=dt;for(;;){if(Et===e)break e;if(lt===a&&++rt===u&&(A=x),lt===f&&++_t===r&&(V=x),(dt=Et.nextSibling)!==null)break;Et=lt,lt=Et.parentNode}Et=dt}a=A===-1||V===-1?null:{start:A,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(ad={focusedElem:e,selectionRange:a},pc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var jt=Ss(a.type,u);e=r.getSnapshotBeforeUpdate(jt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ge(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)od(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":od(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function L0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:oa(e,a),r&4&&Eo(5,a);break;case 1:if(oa(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Ge(a,a.return,x)}else{var u=Ss(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ge(a,a.return,x)}}r&64&&R0(a),r&512&&bo(a,a.return);break;case 3:if(oa(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{_m(e,n)}catch(x){Ge(a,a.return,x)}}break;case 27:n===null&&r&4&&U0(a);case 26:case 5:oa(e,a),n===null&&r&4&&w0(a),r&512&&bo(a,a.return);break;case 12:oa(e,a);break;case 31:oa(e,a),r&4&&F0(e,a);break;case 13:oa(e,a),r&4&&z0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=vS.bind(null,a),BS(e,a))));break;case 22:if(r=a.memoizedState!==null||sa,!r){n=n!==null&&n.memoizedState!==null||dn,u=sa;var f=dn;sa=r,(dn=n)&&!f?la(e,a,(a.subtreeFlags&8772)!==0):oa(e,a),sa=u,dn=f}break;case 30:break;default:oa(e,a)}}function O0(e){var n=e.alternate;n!==null&&(e.alternate=null,O0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Qr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Hn=!1;function ra(e,n,a){for(a=a.child;a!==null;)P0(e,n,a),a=a.sibling}function P0(e,n,a){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 26:dn||Li(a,n),ra(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Li(a,n);var r=Je,u=Hn;ka(a.type)&&(Je=a.stateNode,Hn=!1),ra(e,n,a),Lo(a.stateNode),Je=r,Hn=u;break;case 5:dn||Li(a,n);case 6:if(r=Je,u=Hn,Je=null,ra(e,n,a),Je=r,Hn=u,Je!==null)if(Hn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{Je.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:Je!==null&&(Hn?(e=Je,Rg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),vr(e)):Rg(Je,a.stateNode));break;case 4:r=Je,u=Hn,Je=a.stateNode.containerInfo,Hn=!0,ra(e,n,a),Je=r,Hn=u;break;case 0:case 11:case 14:case 15:Fa(2,a,n),dn||Fa(4,a,n),ra(e,n,a);break;case 1:dn||(Li(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&C0(a,n,r)),ra(e,n,a);break;case 21:ra(e,n,a);break;case 22:dn=(r=dn)||a.memoizedState!==null,ra(e,n,a),dn=r;break;default:ra(e,n,a)}}function F0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{vr(e)}catch(a){Ge(n,n.return,a)}}}function z0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vr(e)}catch(a){Ge(n,n.return,a)}}function uS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new N0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new N0),n;default:throw Error(s(435,e.tag))}}function Yl(e,n){var a=uS(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=xS.bind(null,e,r);r.then(u,u)}})}function Gn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,x=n,A=x;t:for(;A!==null;){switch(A.tag){case 27:if(ka(A.type)){Je=A.stateNode,Hn=!1;break t}break;case 5:Je=A.stateNode,Hn=!1;break t;case 3:case 4:Je=A.stateNode.containerInfo,Hn=!0;break t}A=A.return}if(Je===null)throw Error(s(160));P0(f,x,u),Je=null,Hn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)B0(n,e),n=n.sibling}var bi=null;function B0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gn(n,e),Vn(e),r&4&&(Fa(3,e,e.return),Eo(3,e),Fa(5,e,e.return));break;case 1:Gn(n,e),Vn(e),r&512&&(dn||a===null||Li(a,a.return)),r&64&&sa&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=bi;if(Gn(n,e),Vn(e),r&512&&(dn||a===null||Li(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ss]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),bn(f,r,a),f[rn]=e,Z(f),r=f;break t;case"link":var x=Bg("link","href",u).get(r+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(f=x[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break e}}f=u.createElement(r),bn(f,r,a),u.head.appendChild(f);break;case"meta":if(x=Bg("meta","content",u).get(r+(a.content||""))){for(A=0;A<x.length;A++)if(f=x[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break e}}f=u.createElement(r),bn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[rn]=e,Z(f),r=f}e.stateNode=r}else Ig(u,e.type,e.stateNode);else e.stateNode=zg(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Ig(u,e.type,e.stateNode):zg(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Lf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,e),Vn(e),r&512&&(dn||a===null||Li(a,a.return)),a!==null&&r&4&&Lf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,e),Vn(e),r&512&&(dn||a===null||Li(a,a.return)),e.flags&32){u=e.stateNode;try{Pn(u,"")}catch(jt){Ge(e,e.return,jt)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,Lf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(Ff=!0);break;case 6:if(Gn(n,e),Vn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(jt){Ge(e,e.return,jt)}}break;case 3:if(uc=null,u=bi,bi=lc(n.containerInfo),Gn(n,e),bi=u,Vn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{vr(n.containerInfo)}catch(jt){Ge(e,e.return,jt)}Ff&&(Ff=!1,I0(e));break;case 4:r=bi,bi=lc(e.stateNode.containerInfo),Gn(n,e),Vn(e),bi=r;break;case 12:Gn(n,e),Vn(e);break;case 31:Gn(n,e),Vn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Yl(e,r)));break;case 13:Gn(n,e),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Kl=E()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Yl(e,r)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,rt=sa,_t=dn;if(sa=rt||u,dn=_t||V,Gn(n,e),dn=_t,sa=rt,Vn(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||sa||dn||ys(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=V.stateNode;var Et=V.memoizedProps.style,lt=Et!=null&&Et.hasOwnProperty("display")?Et.display:null;A.style.display=lt==null||typeof lt=="boolean"?"":(""+lt).trim()}}catch(jt){Ge(V,V.return,jt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(jt){Ge(V,V.return,jt)}}}else if(n.tag===18){if(a===null){V=n;try{var dt=V.stateNode;u?Cg(dt,!0):Cg(V.stateNode,!1)}catch(jt){Ge(V,V.return,jt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Yl(e,a))));break;case 19:Gn(n,e),Vn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Yl(e,r)));break;case 30:break;case 21:break;default:Gn(n,e),Vn(e)}}function Vn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(D0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Of(e);jl(e,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(Pn(x,""),a.flags&=-33);var A=Of(e);jl(e,A,x);break;case 3:case 4:var V=a.stateNode.containerInfo,rt=Of(e);Pf(e,rt,V);break;default:throw Error(s(161))}}catch(_t){Ge(e,e.return,_t)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function I0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;I0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function oa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)L0(e,n.alternate,n),n=n.sibling}function ys(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Fa(4,n,n.return),ys(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&C0(n,n.return,a),ys(n);break;case 27:Lo(n.stateNode);case 26:case 5:Li(n,n.return),ys(n);break;case 22:n.memoizedState===null&&ys(n);break;case 30:ys(n);break;default:ys(n)}e=e.sibling}}function la(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:la(u,f,a),Eo(4,f);break;case 1:if(la(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(rt){Ge(r,r.return,rt)}if(r=f,u=r.updateQueue,u!==null){var A=r.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)gm(V[u],A)}catch(rt){Ge(r,r.return,rt)}}a&&x&64&&R0(f),bo(f,f.return);break;case 27:U0(f);case 26:case 5:la(u,f,a),a&&r===null&&x&4&&w0(f),bo(f,f.return);break;case 12:la(u,f,a);break;case 31:la(u,f,a),a&&x&4&&F0(u,f);break;case 13:la(u,f,a),a&&x&4&&z0(u,f);break;case 22:f.memoizedState===null&&la(u,f,a),bo(f,f.return);break;case 30:break;default:la(u,f,a)}n=n.sibling}}function zf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&co(a))}function Bf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e))}function Ti(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)H0(e,n,a,r),n=n.sibling}function H0(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(e,n,a,r),u&2048&&Eo(9,n);break;case 1:Ti(e,n,a,r);break;case 3:Ti(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&co(e)));break;case 12:if(u&2048){Ti(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,A=f.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Ge(n,n.return,V)}}else Ti(e,n,a,r);break;case 31:Ti(e,n,a,r);break;case 13:Ti(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(e,n,a,r):To(e,n):f._visibility&2?Ti(e,n,a,r):(f._visibility|=2,or(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&zf(x,n);break;case 24:Ti(e,n,a,r),u&2048&&Bf(n.alternate,n);break;default:Ti(e,n,a,r)}}function or(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,A=a,V=r,rt=x.flags;switch(x.tag){case 0:case 11:case 15:or(f,x,A,V,u),Eo(8,x);break;case 23:break;case 22:var _t=x.stateNode;x.memoizedState!==null?_t._visibility&2?or(f,x,A,V,u):To(f,x):(_t._visibility|=2,or(f,x,A,V,u)),u&&rt&2048&&zf(x.alternate,x);break;case 24:or(f,x,A,V,u),u&&rt&2048&&Bf(x.alternate,x);break;default:or(f,x,A,V,u)}n=n.sibling}}function To(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:To(a,r),u&2048&&zf(r.alternate,r);break;case 24:To(a,r),u&2048&&Bf(r.alternate,r);break;default:To(a,r)}n=n.sibling}}var Ao=8192;function lr(e,n,a){if(e.subtreeFlags&Ao)for(e=e.child;e!==null;)G0(e,n,a),e=e.sibling}function G0(e,n,a){switch(e.tag){case 26:lr(e,n,a),e.flags&Ao&&e.memoizedState!==null&&KS(a,bi,e.memoizedState,e.memoizedProps);break;case 5:lr(e,n,a);break;case 3:case 4:var r=bi;bi=lc(e.stateNode.containerInfo),lr(e,n,a),bi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ao,Ao=16777216,lr(e,n,a),Ao=r):lr(e,n,a));break;default:lr(e,n,a)}}function V0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Ro(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,X0(r,e)}V0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)k0(e),e=e.sibling}function k0(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Zl(e)):Ro(e);break;default:Ro(e)}}function Zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,X0(r,e)}V0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Fa(8,n,n.return),Zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zl(n));break;default:Zl(n)}e=e.sibling}}function X0(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Fa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:co(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,xn=r;else t:for(a=e;xn!==null;){r=xn;var u=r.sibling,f=r.return;if(O0(r),r===a){xn=null;break t}if(u!==null){u.return=f,xn=u;break t}xn=f}}}var fS={getCacheForType:function(e){var n=Mn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(cn).controller.signal}},dS=typeof WeakMap=="function"?WeakMap:Map,ze=0,je=null,ye=null,be=0,He=0,Jn=null,za=!1,cr=!1,If=!1,ca=0,en=0,Ba=0,Ms=0,Hf=0,$n=0,ur=0,Co=null,kn=null,Gf=!1,Kl=0,W0=0,Ql=1/0,Jl=null,Ia=null,gn=0,Ha=null,fr=null,ua=0,Vf=0,kf=null,q0=null,wo=0,Xf=null;function ti(){return(ze&2)!==0&&be!==0?be&-be:P.T!==null?Kf():Di()}function j0(){if($n===0)if((be&536870912)===0||Re){var e=Dt;Dt<<=1,(Dt&3932160)===0&&(Dt=262144),$n=e}else $n=536870912;return e=Kn.current,e!==null&&(e.flags|=32),$n}function Xn(e,n,a){(e===je&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(dr(e,0),Ga(e,be,$n,!1)),Nn(e,a),((ze&2)===0||e!==je)&&(e===je&&((ze&2)===0&&(Ms|=a),en===4&&Ga(e,be,$n,!1)),Oi(e))}function Y0(e,n,a){if((ze&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||kt(e,n),u=r?mS(e,n):qf(e,n,!0),f=r;do{if(u===0){cr&&!r&&Ga(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!hS(a)){u=qf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=e;u=Co;var V=A.current.memoizedState.isDehydrated;if(V&&(dr(A,x).flags|=256),x=qf(A,x,!1),x!==2){if(If&&!V){A.errorRecoveryDisabledLanes|=f,Ms|=f,u=4;break t}f=kn,kn=u,f!==null&&(kn===null?kn=f:kn.push.apply(kn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){dr(e,0),Ga(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ga(r,n,$n,!za);break t;case 2:kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Kl+300-E(),10<u)){if(Ga(r,n,$n,!za),mt(r,0,!0)!==0)break t;ua=n,r.timeoutHandle=Tg(Z0.bind(null,r,a,kn,Jl,Gf,n,$n,Ms,ur,za,f,"Throttled",-0,0),u);break t}Z0(r,a,kn,Jl,Gf,n,$n,Ms,ur,za,f,null,-0,0)}}break}while(!0);Oi(e)}function Z0(e,n,a,r,u,f,x,A,V,rt,_t,Et,lt,dt){if(e.timeoutHandle=-1,Et=n.subtreeFlags,Et&8192||(Et&16785408)===16785408){Et={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},G0(n,f,Et);var jt=(f&62914560)===f?Kl-E():(f&4194048)===f?W0-E():0;if(jt=QS(Et,jt),jt!==null){ua=f,e.cancelPendingCommit=jt(ig.bind(null,e,n,f,a,r,u,x,A,V,_t,Et,null,lt,dt)),Ga(e,f,x,!rt);return}}ig(e,n,f,a,r,u,x,A,V)}function hS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Yn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ga(e,n,a,r){n&=~Hf,n&=~Ms,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-zt(u),x=1<<f;r[f]=-1,u&=~x}a!==0&&Kr(e,a,n)}function $l(){return(ze&6)===0?(Do(0),!1):!0}function Wf(){if(ye!==null){if(He===0)var e=ye.return;else e=ye,$i=hs=null,of(e),nr=null,fo=0,e=ye;for(;e!==null;)A0(e.alternate,e),e=e.return;ye=null}}function dr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,LS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ua=0,Wf(),je=e,ye=a=Qi(e.current,null),be=n,He=0,Jn=null,za=!1,cr=kt(e,n),If=!1,ur=$n=Hf=Ms=Ba=en=0,kn=Co=null,Gf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-zt(r),f=1<<u;n|=e[u],r&=~f}return ca=n,Sl(),a}function K0(e,n){he=null,P.H=So,n===er||n===Cl?(n=dm(),He=3):n===Yu?(n=dm(),He=4):He=n===Ef?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,ye===null&&(en=1,Vl(e,li(n,e.current)))}function Q0(){var e=Kn.current;return e===null?!0:(be&4194048)===be?di===null:(be&62914560)===be||(be&536870912)!==0?e===di:!1}function J0(){var e=P.H;return P.H=So,e===null?So:e}function $0(){var e=P.A;return P.A=fS,e}function tc(){en=4,za||(be&4194048)!==be&&Kn.current!==null||(cr=!0),(Ba&134217727)===0&&(Ms&134217727)===0||je===null||Ga(je,be,$n,!1)}function qf(e,n,a){var r=ze;ze|=2;var u=J0(),f=$0();(je!==e||be!==n)&&(Jl=null,dr(e,n)),n=!1;var x=en;t:do try{if(He!==0&&ye!==null){var A=ye,V=Jn;switch(He){case 8:Wf(),x=6;break t;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var rt=He;if(He=0,Jn=null,hr(e,A,V,rt),a&&cr){x=0;break t}break;default:rt=He,He=0,Jn=null,hr(e,A,V,rt)}}pS(),x=en;break}catch(_t){K0(e,_t)}while(!0);return n&&e.shellSuspendCounter++,$i=hs=null,ze=r,P.H=u,P.A=f,ye===null&&(je=null,be=0,Sl()),x}function pS(){for(;ye!==null;)tg(ye)}function mS(e,n){var a=ze;ze|=2;var r=J0(),u=$0();je!==e||be!==n?(Jl=null,Ql=E()+500,dr(e,n)):cr=kt(e,n);t:do try{if(He!==0&&ye!==null){n=ye;var f=Jn;e:switch(He){case 1:He=0,Jn=null,hr(e,n,f,1);break;case 2:case 9:if(um(f)){He=0,Jn=null,eg(n);break}n=function(){He!==2&&He!==9||je!==e||(He=7),Oi(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:um(f)?(He=0,Jn=null,eg(n)):(He=0,Jn=null,hr(e,n,f,7));break;case 5:var x=null;switch(ye.tag){case 26:x=ye.memoizedState;case 5:case 27:var A=ye;if(x?Hg(x):A.stateNode.complete){He=0,Jn=null;var V=A.sibling;if(V!==null)ye=V;else{var rt=A.return;rt!==null?(ye=rt,ec(rt)):ye=null}break e}}He=0,Jn=null,hr(e,n,f,5);break;case 6:He=0,Jn=null,hr(e,n,f,6);break;case 8:Wf(),en=6;break t;default:throw Error(s(462))}}gS();break}catch(_t){K0(e,_t)}while(!0);return $i=hs=null,P.H=r,P.A=u,ze=a,ye!==null?0:(je=null,be=0,Sl(),en)}function gS(){for(;ye!==null&&!Wt();)tg(ye)}function tg(e){var n=b0(e.alternate,e,ca);e.memoizedProps=e.pendingProps,n===null?ec(e):ye=n}function eg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=v0(a,n,n.pendingProps,n.type,void 0,be);break;case 11:n=v0(a,n,n.pendingProps,n.type.render,n.ref,be);break;case 5:of(n);default:A0(a,n),n=ye=$p(n,ca),n=b0(a,n,ca)}e.memoizedProps=e.pendingProps,n===null?ec(e):ye=n}function hr(e,n,a,r){$i=hs=null,of(n),nr=null,fo=0;var u=n.return;try{if(aS(e,u,n,a,be)){en=1,Vl(e,li(a,e.current)),ye=null;return}}catch(f){if(u!==null)throw ye=u,f;en=1,Vl(e,li(a,e.current)),ye=null;return}n.flags&32768?(Re||r===1?e=!0:cr||(be&536870912)!==0?e=!1:(za=e=!0,(r===2||r===9||r===3||r===6)&&(r=Kn.current,r!==null&&r.tag===13&&(r.flags|=16384))),ng(n,e)):ec(n)}function ec(e){var n=e;do{if((n.flags&32768)!==0){ng(n,za);return}e=n.return;var a=oS(n.alternate,n,ca);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);en===0&&(en=5)}function ng(e,n){do{var a=lS(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);en=6,ye=null}function ig(e,n,a,r,u,f,x,A,V){e.cancelPendingCommit=null;do nc();while(gn!==0);if((ze&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Lu,xi(e,a,f,x,A,V),e===je&&(ye=je=null,be=0),fr=n,Ha=e,ua=a,Vf=f,kf=u,q0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,SS(ht,function(){return lg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,u=B.p,B.p=2,x=ze,ze|=4;try{cS(e,n,a)}finally{ze=x,B.p=u,P.T=r}}gn=1,ag(),sg(),rg()}}function ag(){if(gn===1){gn=0;var e=Ha,n=fr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var r=B.p;B.p=2;var u=ze;ze|=4;try{B0(n,e);var f=ad,x=Xp(e.containerInfo),A=f.focusedElem,V=f.selectionRange;if(x!==A&&A&&A.ownerDocument&&kp(A.ownerDocument.documentElement,A)){if(V!==null&&Cu(A)){var rt=V.start,_t=V.end;if(_t===void 0&&(_t=rt),"selectionStart"in A)A.selectionStart=rt,A.selectionEnd=Math.min(_t,A.value.length);else{var Et=A.ownerDocument||document,lt=Et&&Et.defaultView||window;if(lt.getSelection){var dt=lt.getSelection(),jt=A.textContent.length,ae=Math.min(V.start,jt),We=V.end===void 0?ae:Math.min(V.end,jt);!dt.extend&&ae>We&&(x=We,We=ae,ae=x);var $=Vp(A,ae),j=Vp(A,We);if($&&j&&(dt.rangeCount!==1||dt.anchorNode!==$.node||dt.anchorOffset!==$.offset||dt.focusNode!==j.node||dt.focusOffset!==j.offset)){var st=Et.createRange();st.setStart($.node,$.offset),dt.removeAllRanges(),ae>We?(dt.addRange(st),dt.extend(j.node,j.offset)):(st.setEnd(j.node,j.offset),dt.addRange(st))}}}}for(Et=[],dt=A;dt=dt.parentNode;)dt.nodeType===1&&Et.push({element:dt,left:dt.scrollLeft,top:dt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Et.length;A++){var St=Et[A];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}pc=!!id,ad=id=null}finally{ze=u,B.p=r,P.T=a}}e.current=n,gn=2}}function sg(){if(gn===2){gn=0;var e=Ha,n=fr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var r=B.p;B.p=2;var u=ze;ze|=4;try{L0(e,n.alternate,n)}finally{ze=u,B.p=r,P.T=a}}gn=3}}function rg(){if(gn===4||gn===3){gn=0,L();var e=Ha,n=fr,a=ua,r=q0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,fr=Ha=null,og(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ia=null),Is(a),n=n.stateNode,Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=P.T,u=B.p,B.p=2,P.T=null;try{for(var f=e.onRecoverableError,x=0;x<r.length;x++){var A=r[x];f(A.value,{componentStack:A.stack})}}finally{P.T=n,B.p=u}}(ua&3)!==0&&nc(),Oi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Xf?wo++:(wo=0,Xf=e):wo=0,Do(0)}}function og(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,co(n)))}function nc(){return ag(),sg(),rg(),lg()}function lg(){if(gn!==5)return!1;var e=Ha,n=Vf;Vf=0;var a=Is(ua),r=P.T,u=B.p;try{B.p=32>a?32:a,P.T=null,a=kf,kf=null;var f=Ha,x=ua;if(gn=0,fr=Ha=null,ua=0,(ze&6)!==0)throw Error(s(331));var A=ze;if(ze|=4,k0(f.current),H0(f,f.current,x,a),ze=A,Do(0,!1),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(At,f)}catch{}return!0}finally{B.p=u,P.T=r,og(e,n)}}function cg(e,n,a){n=li(a,n),n=Mf(e.stateNode,n,2),e=La(e,n,2),e!==null&&(Nn(e,2),Oi(e))}function Ge(e,n,a){if(e.tag===3)cg(e,e,a);else for(;n!==null;){if(n.tag===3){cg(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ia===null||!Ia.has(r))){e=li(a,e),a=u0(2),r=La(n,a,2),r!==null&&(f0(a,r,n,e),Nn(r,2),Oi(r));break}}n=n.return}}function jf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new dS;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(If=!0,u.add(a),e=_S.bind(null,e,n,a),n.then(e,e))}function _S(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(be&a)===a&&(en===4||en===3&&(be&62914560)===be&&300>E()-Kl?(ze&2)===0&&dr(e,0):Hf|=a,ur===be&&(ur=0)),Oi(e)}function ug(e,n){n===0&&(n=Ie()),e=us(e,n),e!==null&&(Nn(e,n),Oi(e))}function vS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),ug(e,a)}function xS(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),ug(e,a)}function SS(e,n){return Se(e,n)}var ic=null,pr=null,Yf=!1,ac=!1,Zf=!1,Va=0;function Oi(e){e!==pr&&e.next===null&&(pr===null?ic=pr=e:pr=pr.next=e),ac=!0,Yf||(Yf=!0,MS())}function Do(e,n){if(!Zf&&ac){Zf=!0;do for(var a=!1,r=ic;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var x=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-zt(42|e)+1)-1,f&=u&~(x&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,pg(r,f))}else f=be,f=mt(r,r===je?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||kt(r,f)||(a=!0,pg(r,f));r=r.next}while(a);Zf=!1}}function yS(){fg()}function fg(){ac=Yf=!1;var e=0;Va!==0&&NS()&&(e=Va);for(var n=E(),a=null,r=ic;r!==null;){var u=r.next,f=dg(r,n);f===0?(r.next=null,a===null?ic=u:a.next=u,u===null&&(pr=a)):(a=r,(e!==0||(f&3)!==0)&&(ac=!0)),r=u}gn!==0&&gn!==5||Do(e),Va!==0&&(Va=0)}function dg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-zt(f),A=1<<x,V=u[x];V===-1?((A&a)===0||(A&r)!==0)&&(u[x]=oe(A,n)):V<=n&&(e.expiredLanes|=A),f&=~A}if(n=je,a=be,a=mt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Le(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||kt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Le(r),Is(a)){case 2:case 8:a=bt;break;case 32:a=ht;break;case 268435456:a=Ut;break;default:a=ht}return r=hg.bind(null,e),a=Se(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Le(r),e.callbackPriority=2,e.callbackNode=null,2}function hg(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nc()&&e.callbackNode!==a)return null;var r=be;return r=mt(e,e===je?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Y0(e,r,n),dg(e,E()),e.callbackNode!=null&&e.callbackNode===a?hg.bind(null,e):null)}function pg(e,n){if(nc())return null;Y0(e,n,!0)}function MS(){OS(function(){(ze&6)!==0?Se(vt,yS):fg()})}function Kf(){if(Va===0){var e=$s;e===0&&(e=Nt,Nt<<=1,(Nt&261888)===0&&(Nt=256)),Va=e}return Va}function mg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:dl(""+e)}function gg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ES(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=mg((u[pn]||null).action),x=r.submitter;x&&(n=(n=x[pn]||null)?mg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var A=new gl("action","action",null,r,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Va!==0){var V=x?gg(u,x):new FormData(u);gf(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(A.preventDefault(),V=x?gg(u,x):new FormData(u),gf(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var Qf=0;Qf<Nu.length;Qf++){var Jf=Nu[Qf],bS=Jf.toLowerCase(),TS=Jf[0].toUpperCase()+Jf.slice(1);Ei(bS,"on"+TS)}Ei(jp,"onAnimationEnd"),Ei(Yp,"onAnimationIteration"),Ei(Zp,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Gx,"onTransitionRun"),Ei(Vx,"onTransitionStart"),Ei(kx,"onTransitionCancel"),Ei(Kp,"onTransitionEnd"),Ot("onMouseEnter",["mouseout","mouseover"]),Ot("onMouseLeave",["mouseout","mouseover"]),Ot("onPointerEnter",["pointerout","pointerover"]),Ot("onPointerLeave",["pointerout","pointerover"]),nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function _g(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var A=r[x],V=A.instance,rt=A.currentTarget;if(A=A.listener,V!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=rt;try{f(u)}catch(_t){xl(_t)}u.currentTarget=null,f=V}else for(x=0;x<r.length;x++){if(A=r[x],V=A.instance,rt=A.currentTarget,A=A.listener,V!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=rt;try{f(u)}catch(_t){xl(_t)}u.currentTarget=null,f=V}}}}function Me(e,n){var a=n[Ea];a===void 0&&(a=n[Ea]=new Set);var r=e+"__bubble";a.has(r)||(vg(n,e,2,!1),a.add(r))}function $f(e,n,a){var r=0;n&&(r|=4),vg(a,e,r,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function td(e){if(!e[sc]){e[sc]=!0,ft.forEach(function(a){a!=="selectionchange"&&(AS.has(a)||$f(a,!1,e),$f(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[sc]||(n[sc]=!0,$f("selectionchange",!1,n))}}function vg(e,n,a,r){switch(jg(n)){case 2:var u=ty;break;case 8:u=ey;break;default:u=md}a=u.bind(null,n,a,e),u=void 0,!xu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function ed(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var A=r.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=r.return;x!==null;){var V=x.tag;if((V===3||V===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=ba(A),x===null)return;if(V=x.tag,V===5||V===6||V===26||V===27){r=f=x;continue t}A=A.parentNode}}r=r.return}Ep(function(){var rt=f,_t=_u(a),Et=[];t:{var lt=Qp.get(e);if(lt!==void 0){var dt=gl,jt=e;switch(e){case"keypress":if(pl(a)===0)break t;case"keydown":case"keyup":dt=xx;break;case"focusin":jt="focus",dt=Eu;break;case"focusout":jt="blur",dt=Eu;break;case"beforeblur":case"afterblur":dt=Eu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":dt=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":dt=ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":dt=Mx;break;case jp:case Yp:case Zp:dt=ux;break;case Kp:dt=bx;break;case"scroll":case"scrollend":dt=sx;break;case"wheel":dt=Ax;break;case"copy":case"cut":case"paste":dt=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":dt=Cp;break;case"toggle":case"beforetoggle":dt=Cx}var ae=(n&4)!==0,We=!ae&&(e==="scroll"||e==="scrollend"),$=ae?lt!==null?lt+"Capture":null:lt;ae=[];for(var j=rt,st;j!==null;){var St=j;if(st=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||st===null||$===null||(St=Jr(j,$),St!=null&&ae.push(No(j,St,st))),We)break;j=j.return}0<ae.length&&(lt=new dt(lt,jt,null,a,_t),Et.push({event:lt,listeners:ae}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",dt=e==="mouseout"||e==="pointerout",lt&&a!==gu&&(jt=a.relatedTarget||a.fromElement)&&(ba(jt)||jt[ji]))break t;if((dt||lt)&&(lt=_t.window===_t?_t:(lt=_t.ownerDocument)?lt.defaultView||lt.parentWindow:window,dt?(jt=a.relatedTarget||a.toElement,dt=rt,jt=jt?ba(jt):null,jt!==null&&(We=c(jt),ae=jt.tag,jt!==We||ae!==5&&ae!==27&&ae!==6)&&(jt=null)):(dt=null,jt=rt),dt!==jt)){if(ae=Ap,St="onMouseLeave",$="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Cp,St="onPointerLeave",$="onPointerEnter",j="pointer"),We=dt==null?lt:rs(dt),st=jt==null?lt:rs(jt),lt=new ae(St,j+"leave",dt,a,_t),lt.target=We,lt.relatedTarget=st,St=null,ba(_t)===rt&&(ae=new ae($,j+"enter",jt,a,_t),ae.target=st,ae.relatedTarget=We,St=ae),We=St,dt&&jt)e:{for(ae=RS,$=dt,j=jt,st=0,St=$;St;St=ae(St))st++;St=0;for(var ne=j;ne;ne=ae(ne))St++;for(;0<st-St;)$=ae($),st--;for(;0<St-st;)j=ae(j),St--;for(;st--;){if($===j||j!==null&&$===j.alternate){ae=$;break e}$=ae($),j=ae(j)}ae=null}else ae=null;dt!==null&&xg(Et,lt,dt,ae,!1),jt!==null&&We!==null&&xg(Et,We,jt,ae,!0)}}t:{if(lt=rt?rs(rt):window,dt=lt.nodeName&&lt.nodeName.toLowerCase(),dt==="select"||dt==="input"&&lt.type==="file")var Pe=Fp;else if(Op(lt))if(zp)Pe=Bx;else{Pe=Fx;var Kt=Px}else dt=lt.nodeName,!dt||dt.toLowerCase()!=="input"||lt.type!=="checkbox"&&lt.type!=="radio"?rt&&Gs(rt.elementType)&&(Pe=Fp):Pe=zx;if(Pe&&(Pe=Pe(e,rt))){Pp(Et,Pe,a,_t);break t}Kt&&Kt(e,lt,rt),e==="focusout"&&rt&&lt.type==="number"&&rt.memoizedProps.value!=null&&yi(lt,"number",lt.value)}switch(Kt=rt?rs(rt):window,e){case"focusin":(Op(Kt)||Kt.contentEditable==="true")&&(Ws=Kt,wu=rt,ro=null);break;case"focusout":ro=wu=Ws=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Wp(Et,a,_t);break;case"selectionchange":if(Hx)break;case"keydown":case"keyup":Wp(Et,a,_t)}var ge;if(Tu)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else Xs?Np(e,a)&&(Te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(wp&&a.locale!=="ko"&&(Xs||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Xs&&(ge=bp()):(Aa=_t,Su="value"in Aa?Aa.value:Aa.textContent,Xs=!0)),Kt=rc(rt,Te),0<Kt.length&&(Te=new Rp(Te,e,null,a,_t),Et.push({event:Te,listeners:Kt}),ge?Te.data=ge:(ge=Lp(a),ge!==null&&(Te.data=ge)))),(ge=Dx?Ux(e,a):Nx(e,a))&&(Te=rc(rt,"onBeforeInput"),0<Te.length&&(Kt=new Rp("onBeforeInput","beforeinput",null,a,_t),Et.push({event:Kt,listeners:Te}),Kt.data=ge)),ES(Et,e,rt,a,_t)}_g(Et,n)})}function No(e,n,a){return{instance:e,listener:n,currentTarget:a}}function rc(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Jr(e,a),u!=null&&r.unshift(No(e,u,f)),u=Jr(e,n),u!=null&&r.push(No(e,u,f))),e.tag===3)return r;e=e.return}return[]}function RS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xg(e,n,a,r,u){for(var f=n._reactName,x=[];a!==null&&a!==r;){var A=a,V=A.alternate,rt=A.stateNode;if(A=A.tag,V!==null&&V===r)break;A!==5&&A!==26&&A!==27||rt===null||(V=rt,u?(rt=Jr(a,f),rt!=null&&x.unshift(No(a,rt,V))):u||(rt=Jr(a,f),rt!=null&&x.push(No(a,rt,V)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var CS=/\r\n?/g,wS=/\u0000|\uFFFD/g;function Sg(e){return(typeof e=="string"?e:""+e).replace(CS,`
`).replace(wS,"")}function yg(e,n){return n=Sg(n),Sg(e)===n}function Xe(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Pn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Pn(e,""+r);break;case"className":fe(e,"class",r);break;case"tabIndex":fe(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":fe(e,a,r);break;case"style":Yi(e,r,f);break;case"data":if(n!=="object"){fe(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=dl(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=dl(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Zi);break;case"onScroll":r!=null&&Me("scroll",e);break;case"onScrollEnd":r!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=dl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Me("beforetoggle",e),Me("toggle",e),re(e,"popover",r);break;case"xlinkActuate":Xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Xt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Xt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Xt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Xt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":re(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ix.get(a)||a,re(e,a,r))}}function nd(e,n,a,r,u,f){switch(a){case"style":Yi(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Pn(e,r):(typeof r=="number"||typeof r=="bigint")&&Pn(e,""+r);break;case"onScroll":r!=null&&Me("scroll",e);break;case"onScrollEnd":r!=null&&Me("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):re(e,a,r)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,f,x,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),r&&Xe(e,n,"src",a.src,a,null);return;case"input":Me("invalid",e);var A=f=x=u=null,V=null,rt=null;for(r in a)if(a.hasOwnProperty(r)){var _t=a[r];if(_t!=null)switch(r){case"name":u=_t;break;case"type":x=_t;break;case"checked":V=_t;break;case"defaultChecked":rt=_t;break;case"value":f=_t;break;case"defaultValue":A=_t;break;case"children":case"dangerouslySetInnerHTML":if(_t!=null)throw Error(s(137,n));break;default:Xe(e,n,r,_t,a,null)}}qn(e,f,A,V,rt,x,u,!1);return;case"select":Me("invalid",e),r=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":x=A;break;case"multiple":r=A;default:Xe(e,n,u,A,a,null)}n=f,a=x,e.multiple=!!r,n!=null?jn(e,!!r,n,!1):a!=null&&jn(e,!!r,a,!0);return;case"textarea":Me("invalid",e),f=u=r=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":r=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Xe(e,n,x,A,a,null)}on(e,r,u,f);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(r=a[V],r!=null))switch(V){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Xe(e,n,V,r,a,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(r=0;r<Uo.length;r++)Me(Uo[r],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(rt in a)if(a.hasOwnProperty(rt)&&(r=a[rt],r!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,rt,r,a,null)}return;default:if(Gs(n)){for(_t in a)a.hasOwnProperty(_t)&&(r=a[_t],r!==void 0&&nd(e,n,_t,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Xe(e,n,A,r,a,null))}function DS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,A=null,V=null,rt=null,_t=null;for(dt in a){var Et=a[dt];if(a.hasOwnProperty(dt)&&Et!=null)switch(dt){case"checked":break;case"value":break;case"defaultValue":V=Et;default:r.hasOwnProperty(dt)||Xe(e,n,dt,null,r,Et)}}for(var lt in r){var dt=r[lt];if(Et=a[lt],r.hasOwnProperty(lt)&&(dt!=null||Et!=null))switch(lt){case"type":f=dt;break;case"name":u=dt;break;case"checked":rt=dt;break;case"defaultChecked":_t=dt;break;case"value":x=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,n));break;default:dt!==Et&&Xe(e,n,lt,dt,r,Et)}}On(e,x,A,V,rt,_t,f,u);return;case"select":dt=x=A=lt=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":dt=V;default:r.hasOwnProperty(f)||Xe(e,n,f,null,r,V)}for(u in r)if(f=r[u],V=a[u],r.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":lt=f;break;case"defaultValue":A=f;break;case"multiple":x=f;default:f!==V&&Xe(e,n,u,f,r,V)}n=A,a=x,r=dt,lt!=null?jn(e,!!a,lt,!1):!!r!=!!a&&(n!=null?jn(e,!!a,n,!0):jn(e,!!a,a?[]:"",!1));return;case"textarea":dt=lt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xe(e,n,A,null,r,u)}for(x in r)if(u=r[x],f=a[x],r.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":lt=u;break;case"defaultValue":dt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xe(e,n,x,u,r,f)}Be(e,lt,dt);return;case"option":for(var jt in a)if(lt=a[jt],a.hasOwnProperty(jt)&&lt!=null&&!r.hasOwnProperty(jt))switch(jt){case"selected":e.selected=!1;break;default:Xe(e,n,jt,null,r,lt)}for(V in r)if(lt=r[V],dt=a[V],r.hasOwnProperty(V)&&lt!==dt&&(lt!=null||dt!=null))switch(V){case"selected":e.selected=lt&&typeof lt!="function"&&typeof lt!="symbol";break;default:Xe(e,n,V,lt,r,dt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)lt=a[ae],a.hasOwnProperty(ae)&&lt!=null&&!r.hasOwnProperty(ae)&&Xe(e,n,ae,null,r,lt);for(rt in r)if(lt=r[rt],dt=a[rt],r.hasOwnProperty(rt)&&lt!==dt&&(lt!=null||dt!=null))switch(rt){case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:Xe(e,n,rt,lt,r,dt)}return;default:if(Gs(n)){for(var We in a)lt=a[We],a.hasOwnProperty(We)&&lt!==void 0&&!r.hasOwnProperty(We)&&nd(e,n,We,void 0,r,lt);for(_t in r)lt=r[_t],dt=a[_t],!r.hasOwnProperty(_t)||lt===dt||lt===void 0&&dt===void 0||nd(e,n,_t,lt,r,dt);return}}for(var $ in a)lt=a[$],a.hasOwnProperty($)&&lt!=null&&!r.hasOwnProperty($)&&Xe(e,n,$,null,r,lt);for(Et in r)lt=r[Et],dt=a[Et],!r.hasOwnProperty(Et)||lt===dt||lt==null&&dt==null||Xe(e,n,Et,lt,r,dt)}function Mg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function US(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,x=u.initiatorType,A=u.duration;if(f&&A&&Mg(x)){for(x=0,A=u.responseEnd,r+=1;r<a.length;r++){var V=a[r],rt=V.startTime;if(rt>A)break;var _t=V.transferSize,Et=V.initiatorType;_t&&Mg(Et)&&(V=V.responseEnd,x+=_t*(V<A?1:(A-rt)/(V-rt)))}if(--r,n+=8*(f+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var id=null,ad=null;function oc(e){return e.nodeType===9?e:e.ownerDocument}function Eg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function sd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rd=null;function NS(){var e=window.event;return e&&e.type==="popstate"?e===rd?!1:(rd=e,!0):(rd=null,!1)}var Tg=typeof setTimeout=="function"?setTimeout:void 0,LS=typeof clearTimeout=="function"?clearTimeout:void 0,Ag=typeof Promise=="function"?Promise:void 0,OS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ag<"u"?function(e){return Ag.resolve(null).then(e).catch(PS)}:Tg;function PS(e){setTimeout(function(){throw e})}function ka(e){return e==="head"}function Rg(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),vr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Lo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Lo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,A=f.nodeName;f[ss]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&Lo(e.ownerDocument.body);a=u}while(a);vr(n)}function Cg(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function od(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":od(a),Qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function FS(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ss])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function zS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function wg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=hi(e.nextSibling),e===null))return null;return e}function ld(e){return e.data==="$?"||e.data==="$~"}function cd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function BS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ud=null;function Dg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return hi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Ug(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Ng(e,n,a){switch(n=oc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Lo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Qr(e)}var pi=new Map,Lg=new Set;function lc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=B.d;B.d={f:IS,r:HS,D:GS,C:VS,L:kS,m:XS,X:qS,S:WS,M:jS};function IS(){var e=fa.f(),n=$l();return e||n}function HS(e){var n=Ta(e);n!==null&&n.tag===5&&n.type==="form"?Km(n):fa.r(e)}var mr=typeof document>"u"?null:document;function Og(e,n,a){var r=mr;if(r&&typeof n=="string"&&n){var u=ce(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Lg.has(u)||(Lg.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),bn(n,"link",e),Z(n),r.head.appendChild(n)))}}function GS(e){fa.D(e),Og("dns-prefetch",e,null)}function VS(e,n){fa.C(e,n),Og("preconnect",e,n)}function kS(e,n,a){fa.L(e,n,a);var r=mr;if(r&&e&&n){var u='link[rel="preload"][as="'+ce(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ce(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ce(a.imageSizes)+'"]')):u+='[href="'+ce(e)+'"]';var f=u;switch(n){case"style":f=gr(e);break;case"script":f=_r(e)}pi.has(f)||(e=y({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),pi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Oo(f))||n==="script"&&r.querySelector(Po(f))||(n=r.createElement("link"),bn(n,"link",e),Z(n),r.head.appendChild(n)))}}function XS(e,n){fa.m(e,n);var a=mr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ce(r)+'"][href="'+ce(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=_r(e)}if(!pi.has(f)&&(e=y({rel:"modulepreload",href:e},n),pi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Po(f)))return}r=a.createElement("link"),bn(r,"link",e),Z(r),a.head.appendChild(r)}}}function WS(e,n,a){fa.S(e,n,a);var r=mr;if(r&&e){var u=w(r).hoistableStyles,f=gr(e);n=n||"default";var x=u.get(f);if(!x){var A={loading:0,preload:null};if(x=r.querySelector(Oo(f)))A.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":n},a),(a=pi.get(f))&&fd(e,a);var V=x=r.createElement("link");Z(V),bn(V,"link",e),V._p=new Promise(function(rt,_t){V.onload=rt,V.onerror=_t}),V.addEventListener("load",function(){A.loading|=1}),V.addEventListener("error",function(){A.loading|=2}),A.loading|=4,cc(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(f,x)}}}function qS(e,n){fa.X(e,n);var a=mr;if(a&&e){var r=w(a).hoistableScripts,u=_r(e),f=r.get(u);f||(f=a.querySelector(Po(u)),f||(e=y({src:e,async:!0},n),(n=pi.get(u))&&dd(e,n),f=a.createElement("script"),Z(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function jS(e,n){fa.M(e,n);var a=mr;if(a&&e){var r=w(a).hoistableScripts,u=_r(e),f=r.get(u);f||(f=a.querySelector(Po(u)),f||(e=y({src:e,async:!0,type:"module"},n),(n=pi.get(u))&&dd(e,n),f=a.createElement("script"),Z(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Pg(e,n,a,r){var u=(u=et.current)?lc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=gr(a.href),a=w(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=gr(a.href);var f=w(u).hoistableStyles,x=f.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=u.querySelector(Oo(e)))&&!f._p&&(x.instance=f,x.state.loading=5),pi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(e,a),f||YS(u,e,a,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=_r(a),a=w(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function gr(e){return'href="'+ce(e)+'"'}function Oo(e){return'link[rel="stylesheet"]['+e+"]"}function Fg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function YS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),bn(n,"link",a),Z(n),e.head.appendChild(n))}function _r(e){return'[src="'+ce(e)+'"]'}function Po(e){return"script[async]"+e}function zg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+ce(a.href)+'"]');if(r)return n.instance=r,Z(r),r;var u=y({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Z(r),bn(r,"style",u),cc(r,a.precedence,e),n.instance=r;case"stylesheet":u=gr(a.href);var f=e.querySelector(Oo(u));if(f)return n.state.loading|=4,n.instance=f,Z(f),f;r=Fg(a),(u=pi.get(u))&&fd(r,u),f=(e.ownerDocument||e).createElement("link"),Z(f);var x=f;return x._p=new Promise(function(A,V){x.onload=A,x.onerror=V}),bn(f,"link",r),n.state.loading|=4,cc(f,a.precedence,e),n.instance=f;case"script":return f=_r(a.src),(u=e.querySelector(Po(f)))?(n.instance=u,Z(u),u):(r=a,(u=pi.get(f))&&(r=y({},a),dd(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),Z(u),bn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,cc(r,a.precedence,e));return n.instance}function cc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,x=0;x<r.length;x++){var A=r[x];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function fd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function dd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var uc=null;function Bg(e,n,a){if(uc===null){var r=new Map,u=uc=new Map;u.set(a,r)}else u=uc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ss]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var A=r.get(x);A?A.push(f):r.set(x,[f])}}return r}function Ig(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ZS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Hg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function KS(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=gr(r.href),f=n.querySelector(Oo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=fc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Z(f);return}f=n.ownerDocument||n,r=Fg(r),(u=pi.get(u))&&fd(r,u),f=f.createElement("link"),Z(f);var x=f;x._p=new Promise(function(A,V){x.onload=A,x.onerror=V}),bn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=fc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var hd=0;function QS(e,n){return e.stylesheets&&e.count===0&&hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&hd===0&&(hd=62500*US());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>hd?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function fc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dc=null;function hc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dc=new Map,n.forEach(JS,e),dc=null,fc.call(e))}function JS(e,n){if(!(n.state.loading&4)){var a=dc.get(e);if(a)var r=a.get(null);else{a=new Map,dc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,u),a.set(x,u),this.count++,r=fc.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Fo={$$typeof:O,Provider:null,Consumer:null,_currentValue:it,_currentValue2:it,_threadCount:0};function $S(e,n,a,r,u,f,x,A,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Gg(e,n,a,r,u,f,x,A,V,rt,_t,Et){return e=new $S(e,n,a,x,V,rt,_t,Et,A),n=1,f===!0&&(n|=24),f=Zn(3,null,null,n),e.current=f,f.stateNode=e,n=Wu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Zu(f),e}function Vg(e){return e?(e=Ys,e):Ys}function kg(e,n,a,r,u,f){u=Vg(u),r.context===null?r.context=u:r.pendingContext=u,r=Na(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=La(e,r,n),a!==null&&(Xn(a,e,n),po(a,e,n))}function Xg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function pd(e,n){Xg(e,n),(e=e.alternate)&&Xg(e,n)}function Wg(e){if(e.tag===13||e.tag===31){var n=us(e,67108864);n!==null&&Xn(n,e,67108864),pd(e,67108864)}}function qg(e){if(e.tag===13||e.tag===31){var n=ti();n=Bs(n);var a=us(e,n);a!==null&&Xn(a,e,n),pd(e,n)}}var pc=!0;function ty(e,n,a,r){var u=P.T;P.T=null;var f=B.p;try{B.p=2,md(e,n,a,r)}finally{B.p=f,P.T=u}}function ey(e,n,a,r){var u=P.T;P.T=null;var f=B.p;try{B.p=8,md(e,n,a,r)}finally{B.p=f,P.T=u}}function md(e,n,a,r){if(pc){var u=gd(r);if(u===null)ed(e,n,r,mc,a),Yg(e,r);else if(iy(u,e,n,a,r))r.stopPropagation();else if(Yg(e,r),n&4&&-1<ny.indexOf(e)){for(;u!==null;){var f=Ta(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Ct(f.pendingLanes);if(x!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var V=1<<31-zt(x);A.entanglements[1]|=V,x&=~V}Oi(f),(ze&6)===0&&(Ql=E()+500,Do(0))}}break;case 31:case 13:A=us(f,2),A!==null&&Xn(A,f,2),$l(),pd(f,2)}if(f=gd(r),f===null&&ed(e,n,r,mc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else ed(e,n,r,null,a)}}function gd(e){return e=_u(e),_d(e)}var mc=null;function _d(e){if(mc=null,e=ba(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mc=e,null}function jg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case vt:return 2;case bt:return 8;case ht:case qt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var vd=!1,Xa=null,Wa=null,qa=null,zo=new Map,Bo=new Map,ja=[],ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Yg(e,n){switch(e){case"focusin":case"focusout":Xa=null;break;case"dragenter":case"dragleave":Wa=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bo.delete(n.pointerId)}}function Io(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ta(n),n!==null&&Wg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function iy(e,n,a,r,u){switch(n){case"focusin":return Xa=Io(Xa,e,n,a,r,u),!0;case"dragenter":return Wa=Io(Wa,e,n,a,r,u),!0;case"mouseover":return qa=Io(qa,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return zo.set(f,Io(zo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Bo.set(f,Io(Bo.get(f)||null,e,n,a,r,u)),!0}return!1}function Zg(e){var n=ba(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Hs(e.priority,function(){qg(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Hs(e.priority,function(){qg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=gd(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);gu=r,a.target.dispatchEvent(r),gu=null}else return n=Ta(a),n!==null&&Wg(n),e.blockedOn=a,!1;n.shift()}return!0}function Kg(e,n,a){gc(e)&&a.delete(n)}function ay(){vd=!1,Xa!==null&&gc(Xa)&&(Xa=null),Wa!==null&&gc(Wa)&&(Wa=null),qa!==null&&gc(qa)&&(qa=null),zo.forEach(Kg),Bo.forEach(Kg)}function _c(e,n){e.blockedOn===n&&(e.blockedOn=null,vd||(vd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,ay)))}var vc=null;function Qg(e){vc!==e&&(vc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){vc===e&&(vc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(_d(r||a)===null)continue;break}var f=Ta(a);f!==null&&(e.splice(n,3),n-=3,gf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function vr(e){function n(V){return _c(V,e)}Xa!==null&&_c(Xa,e),Wa!==null&&_c(Wa,e),qa!==null&&_c(qa,e),zo.forEach(n),Bo.forEach(n);for(var a=0;a<ja.length;a++){var r=ja[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)Zg(a),a.blockedOn===null&&ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],x=u[pn]||null;if(typeof f=="function")x||Qg(a);else if(x){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[pn]||null)A=x.formAction;else if(_d(u)!==null)continue}else A=x.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),Qg(a)}}}function Jg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function xd(e){this._internalRoot=e}xc.prototype.render=xd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ti();kg(a,r,e,n,null,null)},xc.prototype.unmount=xd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;kg(e.current,2,null,e,null,null),$l(),n[ji]=null}};function xc(e){this._internalRoot=e}xc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Di();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ja.length&&n!==0&&n<ja[a].priority;a++);ja.splice(a,0,e),a===0&&Zg(e)}};var $g=t.version;if($g!=="19.2.4")throw Error(s(527,$g,"19.2.4"));B.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var sy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{At=Sc.inject(sy),Tt=Sc}catch{}}return Go.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=r0,f=o0,x=l0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Gg(e,1,!1,null,null,a,r,null,u,f,x,Jg),e[ji]=n.current,td(e),new xd(n)},Go.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=r0,x=o0,A=l0,V=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=Gg(e,1,!0,n,a??null,r,u,V,f,x,A,Jg),n.context=Vg(null),a=n.current,r=ti(),r=Bs(r),u=Na(r),u.callback=null,La(a,u,r),a=r,n.current.lanes=a,Nn(n,a),Oi(n),e[ji]=n.current,td(e),new xc(n)},Go.version="19.2.4",Go}var c_;function gy(){if(c_)return Md.exports;c_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Md.exports=my(),Md.exports}var _y=gy();const vy=vv(_y),Ad=16,xy=250,Sy=500;function yy(o=4){const[t,i]=yt.useState(!1),[s,l]=yt.useState(0),[c,d]=yt.useState(0),[p,m]=yt.useState(!1),[h,v]=yt.useState(0),[y,g]=yt.useState(null),M=yt.useRef(null),b=yt.useRef(null),C=yt.useRef(null),S=yt.useRef(null),_=yt.useRef(0),R=yt.useRef(0),O=yt.useRef([]),D=yt.useRef(!1),H=yt.useRef(0),F=yt.useRef(0),z=yt.useRef(0),T=xy*o;z.current=T,(!S.current||S.current[0].length!==T)&&(S.current=Array.from({length:Ad},()=>new Float32Array(T)),_.current=0,R.current=0),yt.useEffect(()=>(p?(M.current=Date.now(),v(0),clearInterval(b.current),b.current=setInterval(()=>{v(Math.floor((Date.now()-M.current)/1e3))},500)):(clearInterval(b.current),M.current=null),()=>clearInterval(b.current)),[p]);const N=yt.useCallback(I=>{D.current=I},[]),pt=yt.useCallback(I=>{const q=C.current;q&&q.readyState===WebSocket.OPEN&&q.send(JSON.stringify(I))},[]);return yt.useEffect(()=>{const I=location.hostname||"localhost",q=parseInt(location.port||"1617")-1,tt=`${location.protocol==="https:"?"wss":"ws"}://${I}:${q}`,J="/auth/ws-token";async function P(){try{const it=await fetch(J,{credentials:"include"});return it.ok&&(await it.json()).token||null}catch{return null}}async function B(){const it=await P(),ct=it?`${tt}?token=${encodeURIComponent(it)}`:tt,xt=new WebSocket(ct);C.current=xt,xt.onopen=()=>i(!0),xt.onclose=()=>{i(!1),setTimeout(B,2e3)},xt.onerror=()=>xt.close(),xt.onmessage=U=>{const Y=JSON.parse(U.data);if(Y.record_status){const te=Y.record_status;if(m(te.recording),te.stopped){const ie=location.port||"1617";g({filename:te.stopped.filename,frames:te.stopped.frames,duration:te.stopped.duration,path:te.stopped.path,downloadUrl:`${location.protocol}//${location.hostname}:${ie}/recordings/${te.stopped.filename}`})}}if(Y.status||D.current)return;const gt=Y.channels;if(!gt||gt.length!==Ad)return;const Rt=S.current,wt=z.current,et=_.current;for(let te=0;te<Ad;te++)Rt[te][et]=gt[te];_.current=(et+1)%wt,R.current<wt&&R.current++,H.current++;const k=Y.t,ut=O.current;ut.push(k);const Mt=k-2;let Lt=0;for(;Lt<ut.length&&ut[Lt]<Mt;)Lt++;Lt>0&&ut.splice(0,Lt);const Bt=performance.now();if(Bt-F.current>Sy&&(F.current=Bt,l(H.current),ut.length>1)){const te=ut[ut.length-1]-ut[0];te>0&&d(Math.round((ut.length-1)/te))}}}return B(),()=>{const it=C.current;it&&it.close()}},[]),{connected:t,sampleCount:s,hz:c,recording:p,recordElapsed:h,recordResult:y,dismissRecordResult:()=>g(null),buffers:S,writeIndex:_,samplesInBuffer:R,bufferSize:T,setPaused:N,sendCommand:pt}}function Rd({children:o}){const[t,i]=yt.useState("checking"),[s,l]=yt.useState(""),[c,d]=yt.useState("");yt.useEffect(()=>{(async()=>{try{const h=await fetch("/auth/status",{credentials:"include"});if(!h.ok){i("login");return}const v=await h.json();i(v.authenticated?"ok":"login")}catch(h){console.error("Auth check error:",h),i("login")}})()},[]);async function p(m){m.preventDefault(),d("");try{const v=await(await fetch("/auth",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({code:s})})).json();v.ok?i("ok"):(d(v.error||"Invalid code"),l(""))}catch{d("Server unreachable")}}return t==="checking"?null:t==="ok"?o:W.jsx("div",{className:"auth-overlay",children:W.jsxs("div",{className:"auth-card",children:[W.jsxs("h1",{children:["Pi",W.jsx("span",{children:"EEG"}),"-16"]}),W.jsx("p",{className:"auth-sub",children:"Enter the access code displayed in the server console"}),W.jsxs("form",{onSubmit:p,children:[W.jsx("input",{className:"auth-input",type:"text",maxLength:6,pattern:"[0-9]{6}",autoComplete:"off",autoFocus:!0,required:!0,placeholder:"------",value:s,onChange:m=>l(m.target.value.replace(/\D/g,""))}),W.jsx("br",{}),W.jsx("button",{className:"auth-btn",type:"submit",children:"Connect"}),c&&W.jsx("p",{className:"auth-error",children:c})]})]})})}const My="rgba(48,54,61,0.4)",Ey="rgba(88,166,255,0.15)",by=["#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2","#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2"];function Ty(o,t,i,s,l,c,d,p,m){o.clearRect(0,0,t,i),o.strokeStyle=My,o.lineWidth=.5;const h=i/4;for(let H=h;H<i;H+=h)o.beginPath(),o.moveTo(0,H),o.lineTo(t,H),o.stroke();o.strokeStyle=Ey,o.lineWidth=1;const v=i/2;if(o.beginPath(),o.moveTo(0,v),o.lineTo(t,v),o.stroke(),l<2)return;const y=l>2e3?Math.floor(l/2e3):1,g=i/2,M=t/(d-1),b=g/p;o.beginPath();let C=0;for(let H=0;H<l;H+=y){const F=(c-l+H+d)%d,z=H*M,T=v-s[F]*b;H===0?(o.moveTo(z,T),C=z):o.lineTo(z,T)}const _=(l-1)*M;o.lineTo(_,i),o.lineTo(C,i),o.closePath();const R=o.createLinearGradient(0,v-g*.5,0,i);R.addColorStop(0,m+"18"),R.addColorStop(1,m+"00"),o.fillStyle=R,o.fill(),o.strokeStyle=m,o.lineWidth=1.3,o.lineJoin="round",o.lineCap="round",o.beginPath();for(let H=0;H<l;H+=y){const F=(c-l+H+d)%d,z=H*M,T=v-s[F]*b;H===0?o.moveTo(z,T):o.lineTo(z,T)}o.stroke();let O=0;const D=Math.min(l,250);for(let H=l-D;H<l;H++){const F=(c-l+H+d)%d;O+=s[F]*s[F]}return Math.sqrt(O/D)}const u_=yt.memo(function({chIdx:t,eeg:i,yRange:s,expanded:l,onToggleExpand:c}){const d=yt.useRef(null),p=yt.useRef(0),m=yt.useRef(0),h=yt.useRef(null),v=yt.useRef(window.devicePixelRatio||1),y=yt.useRef({w:0,h:0,pw:0,ph:0});return yt.useEffect(()=>{const g=d.current;if(!g)return;const M=g.getContext("2d",{alpha:!1}),b=()=>{const C=v.current,S=g.getBoundingClientRect(),_=S.width,R=S.height,O=Math.round(_*C),D=Math.round(R*C);(y.current.pw!==O||y.current.ph!==D)&&(y.current={w:_,h:R,pw:O,ph:D},g.width=O,g.height=D,M.setTransform(C,0,0,C,0,0)),M.fillStyle="#0d1117",M.fillRect(0,0,_,R);const H=Ty(M,_,R,i.buffers.current[t],i.samplesInBuffer.current,i.writeIndex.current,i.bufferSize,s,by[t]);if(H!==void 0&&(m.current=H,h.current)){const F=H/s;let z;F>.8?z="#f85149":F>.4?z="#d29922":z="#3fb950",h.current.style.borderLeftColor=z}p.current=requestAnimationFrame(b)};return p.current=requestAnimationFrame(b),()=>cancelAnimationFrame(p.current)},[t,i,s]),W.jsxs("div",{className:`channel-cell${l?" expanded":""}`,onClick:c,children:[W.jsxs("div",{className:"channel-label",ref:h,children:["Ch ",t+1]}),W.jsx("canvas",{ref:d,style:{display:"block",width:"100%",height:"100%"}})]})}),{PI:Ay,cos:f_,sin:Ry}=Math,d_=2*Ay,Br=[{name:"Delta",label:"δ Delta",low:.5,high:4,color:"#8b5cf6"},{name:"Theta",label:"θ Theta",low:4,high:8,color:"#06b6d4"},{name:"Alpha",label:"α Alpha",low:8,high:13,color:"#22c55e"},{name:"Beta",label:"β Beta",low:13,high:30,color:"#f59e0b"},{name:"Gamma",label:"γ Gamma",low:30,high:100,color:"#ef4444"}];class au{constructor(t,i){if(t<=0||(t&t-1)!==0)throw new Error("n must be a power of 2");this.n=t,this.sampleRateHz=i,this._precompute()}_precompute(){const{n:t,sampleRateHz:i}=this;this._window=new Float64Array(t);for(let p=0;p<t;p++)this._window[p]=.5*(1-f_(d_*p/(t-1)));const s=(t>>1)+1;this._frequencies=new Float64Array(s),this._df=i/t;for(let p=0;p<s;p++)this._frequencies[p]=p*this._df;const l=au._log2(t);this._bitReversed=new Int32Array(t);for(let p=0;p<t;p++)this._bitReversed[p]=au._reverseBits(p,l);const c=t>>1;this._twRe=new Float64Array(c),this._twIm=new Float64Array(c);for(let p=0;p<c;p++){const m=-d_*p/t;this._twRe[p]=f_(m),this._twIm[p]=Ry(m)}let d=0;for(let p=0;p<t;p++)d+=this._window[p]*this._window[p];this._norm=2/(i*d)}analyse(t,i){const{n:s,_window:l,_frequencies:c,_df:d,_norm:p}=this;if(i===void 0&&(i=t.length-s),i<0||t.length-i<s)return null;const m=new Float64Array(s),h=new Float64Array(s);for(let S=0;S<s;S++)m[S]=t[i+S]*l[S];this._fft(m,h);const v=(s>>1)+1,y=new Float64Array(v);let g=0,M=0,b=0;for(let S=0;S<v;S++){const _=m[S]*m[S]+h[S]*h[S],R=S===0||S===v-1?.5:1;y[S]=_*p*R,M+=y[S]*d,y[S]>g&&(g=y[S],b=S)}const C={};for(const S of Br){let _=0;for(let R=0;R<v;R++)c[R]>=S.low&&c[R]<S.high&&(_+=y[R]*d);C[S.name]=_}return{frequencies:c,psd:y,bandPowers:C,dominantFrequency:c[b],totalPower:M}}analyseRing(t,i,s){const{n:l}=this;if(s<l)return null;const c=t.length,d=new Float64Array(l),p=(i-l+c)%c;for(let m=0;m<l;m++)d[m]=t[(p+m)%c];return this.analyse(d,0)}_fft(t,i){const{n:s,_bitReversed:l,_twRe:c,_twIm:d}=this;for(let p=0;p<s;p++){const m=l[p];if(m>p){let h=t[p];t[p]=t[m],t[m]=h,h=i[p],i[p]=i[m],i[m]=h}}for(let p=2;p<=s;p*=2){const m=p>>1,h=s/p;for(let v=0;v<s;v+=p)for(let y=0;y<m;y++){const g=y*h,M=c[g],b=d[g],C=v+y,S=C+m,_=M*t[S]-b*i[S],R=M*i[S]+b*t[S];t[S]=t[C]-_,i[S]=i[C]-R,t[C]+=_,i[C]+=R}}}static _log2(t){let i=0,s=t;for(;s>1;)s>>=1,i++;return i}static _reverseBits(t,i){let s=0,l=t;for(let c=0;c<i;c++)s=s<<1|l&1,l>>=1;return s}}const Cd=16,Es=256,wd=250,Cy=60,wy=8,h_=.3,Dy=300;function Uy(o,t,i,s,l,c,d,p){const h=t-16,v=24,y=i-24,g=h-48,M=y-v,b=l[1],C=Math.min(Math.ceil(c/b),s.length-1);let S=1e-30;for(let _=1;_<=C;_++)s[_]>S&&(S=s[_]);for(const _ of Br){if(_.low>=c)continue;const R=48+Math.max(_.low,0)/c*g,O=48+Math.min(_.high,c)/c*g,D=p===_.name;o.fillStyle=_.color+(D?"28":"12"),o.fillRect(R,v,O-R,M),o.fillStyle=_.color+(D?"cc":"66"),o.font="9px monospace",o.textAlign="center",o.fillText(_.name,(R+O)/2,v+10)}o.strokeStyle="rgba(48,54,61,0.45)",o.lineWidth=.5;for(let _=1;_<5;_++){const R=v+_/5*M;o.beginPath(),o.moveTo(48,R),o.lineTo(h,R),o.stroke()}for(const _ of[4,8,13,30,50]){if(_>c)continue;const R=48+_/c*g;o.beginPath(),o.moveTo(R,v),o.lineTo(R,y),o.stroke()}o.beginPath();for(let _=1;_<=C;_++){const R=48+l[_]/c*g;let O;if(d){const H=10*Math.log10((s[_]||1e-30)/S);O=Math.max(0,(H+60)/60)}else O=s[_]/S;const D=y-Math.min(1,O)*M;_===1?o.moveTo(R,D):o.lineTo(R,D)}o.strokeStyle="#58a6ff",o.lineWidth=1.5,o.stroke(),o.lineTo(48+l[C]/c*g,y),o.lineTo(48+l[1]/c*g,y),o.closePath(),o.fillStyle="rgba(88,166,255,0.07)",o.fill(),o.fillStyle="#8b949e",o.font="10px monospace",o.textAlign="center";for(let _=0;_<=c;_+=10)o.fillText(`${_}`,48+_/c*g,y+14);if(o.fillText("Hz",h+2,y+14),o.save(),o.translate(11,v+M/2),o.rotate(-Math.PI/2),o.textAlign="center",o.fillText(d?"dB":"µV²/Hz",0,0),o.restore(),o.textAlign="right",o.font="9px monospace",d)for(const _ of[0,-20,-40,-60]){const R=y-(_+60)/60*M;o.fillText(`${_}`,44,R+3)}}const Ny=yt.memo(function({eeg:t}){var I;const i=yt.useRef(null),s=yt.useRef(0),l=yt.useRef(0),c=yt.useRef(null),d=yt.useRef(0),p=yt.useRef(null),m=yt.useRef({}),h=yt.useRef(window.devicePixelRatio||1),v=yt.useRef({w:0,h:0,pw:0,ph:0}),[y,g]=yt.useState(0),[M,b]=yt.useState(!0),[C,S]=yt.useState(!1),[_,R]=yt.useState(null),[O,D]=yt.useState({}),[H,F]=yt.useState({band:"",freq:0}),z=yt.useMemo(()=>new au(Es,wd),[]);p.current||(p.current=new Float64Array(Es)),yt.useEffect(()=>{const q=i.current;if(!q)return;const G=q.getContext("2d",{alpha:!1}),tt=()=>{const J=h.current,P=q.getBoundingClientRect(),B=P.width,it=P.height,ct=Math.round(B*J),xt=Math.round(it*J);if((v.current.pw!==ct||v.current.ph!==xt)&&(v.current={w:B,h:it,pw:ct,ph:xt},q.width=ct,q.height=xt),G.setTransform(J,0,0,J,0,0),G.fillStyle="#0d1117",G.fillRect(0,0,B,it),l.current++,!C&&l.current%wy===0){const Y=t.buffers.current,gt=t.writeIndex.current,Rt=t.samplesInBuffer.current;if(Y&&Rt>=Es){let wt;if(y===-1){const et=p.current,k=t.bufferSize,ut=(gt-Es+k)%k;for(let Mt=0;Mt<Es;Mt++){let Lt=0;const Bt=(ut+Mt)%k;for(let te=0;te<Cd;te++)Lt+=Y[te][Bt];et[Mt]=Lt/Cd}wt=z.analyse(et,0)}else wt=z.analyseRing(Y[y],gt,Rt);if(wt){if(!c.current||c.current.length!==wt.psd.length)c.current=new Float64Array(wt.psd);else{const k=c.current,ut=wt.psd;for(let Mt=0;Mt<k.length;Mt++)k[Mt]=k[Mt]*(1-h_)+ut[Mt]*h_}const et=performance.now();if(et-d.current>Dy){d.current=et,m.current=wt.bandPowers,D(wt.bandPowers);let k="",ut=0;for(const Mt of Br)(wt.bandPowers[Mt.name]||0)>ut&&(ut=wt.bandPowers[Mt.name],k=Mt.name);F(Mt=>Mt.band===k&&Mt.freq===wt.dominantFrequency?Mt:{band:k,freq:wt.dominantFrequency})}}}}const U=c.current;!U||U.length===0?(G.fillStyle="#4b5563",G.font="13px monospace",G.textAlign="center",G.fillText("Collecting samples…",B/2,it/2)):Uy(G,B,it,U,z._frequencies,Cy,M,_),s.current=requestAnimationFrame(tt)};return s.current=requestAnimationFrame(tt),()=>cancelAnimationFrame(s.current)},[t,y,M,C,_,z]);const T=Math.max(...Br.map(q=>O[q.name]||0),1e-6),N=y===-1?"Avg":`Ch ${y+1}`,pt=((I=Br.find(q=>q.name===H.band))==null?void 0:I.color)||"#8b949e";return W.jsxs("div",{className:"spectral-panel",children:[W.jsxs("div",{className:"spectral-toolbar",children:[W.jsxs("span",{className:"spectral-title",children:["Spectral Analysis"," ",W.jsxs("small",{style:{color:"var(--text-dim)",fontWeight:400},children:["— ",N]})]}),W.jsxs("div",{className:"spectral-channels",children:[W.jsx("button",{className:`sp-ch${y===-1?" active":""}`,onClick:()=>g(-1),children:"Avg"}),Array.from({length:Cd},(q,G)=>W.jsx("button",{className:`sp-ch${y===G?" active":""}`,onClick:()=>g(G),children:G+1},G))]}),W.jsxs("div",{className:"spectral-ctrls",children:[W.jsx("button",{className:`btn${M?" active":""}`,onClick:()=>b(q=>!q),children:M?"Log":"Lin"}),W.jsx("button",{className:`btn${C?" active":""}`,onClick:()=>S(q=>!q),children:C?"▶":"⏸"})]})]}),W.jsxs("div",{className:"spectral-canvas-wrap",children:[W.jsx("canvas",{ref:i,style:{display:"block",width:"100%",height:"100%"}}),C&&W.jsx("div",{className:"spectral-paused",children:"PAUSED"})]}),W.jsx("div",{className:"spectral-bands",children:Br.map(q=>{const G=O[q.name]||0,tt=T>0?G/T*100:0,J=_===q.name;return W.jsxs("div",{className:`sp-band${J?" selected":""}`,onClick:()=>R(J?null:q.name),children:[W.jsxs("div",{className:"sp-band-head",children:[W.jsx("span",{className:"sp-band-dot",style:{background:q.color}}),W.jsx("span",{className:"sp-band-name",style:{color:q.color},children:q.label}),W.jsxs("span",{className:"sp-band-hz",children:[q.low,"–",q.high," Hz"]})]}),W.jsx("div",{className:"sp-band-track",children:W.jsx("div",{className:"sp-band-fill",style:{width:`${tt}%`,background:q.color}})}),W.jsx("span",{className:"sp-band-val",children:G<.01?G.toExponential(1):G.toFixed(2)})]},q.name)})}),W.jsxs("div",{className:"spectral-footer",children:[W.jsxs("span",{children:["Dominant:"," ",W.jsx("strong",{style:{color:pt},children:H.band})," ","(",H.freq.toFixed(1)," Hz)"]}),W.jsxs("span",{children:[Es," pt · ",wd," Hz ·"," ",(wd/Es).toFixed(1)," Hz/bin"]})]})]})}),Ly=yt.memo(function(){const[t,i]=yt.useState(!1),[s,l]=yt.useState(0),[c,d]=yt.useState(0),[p,m]=yt.useState(0),h=yt.useRef(0),v=yt.useRef(performance.now()),y=yt.useRef(0);return yt.useEffect(()=>{const g=M=>{(M.key==="p"||M.key==="P")&&i(b=>!b)};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[]),yt.useEffect(()=>{if(!t)return;const g=()=>{h.current++;const M=performance.now(),b=M-v.current;b>=1e3&&(l(Math.round(h.current*(1e3/b))),d(Math.round(b/h.current*100)/100),performance.memory&&m(Math.round(performance.memory.usedJSHeapSize/1048576)),h.current=0,v.current=M),y.current=requestAnimationFrame(g)};return y.current=requestAnimationFrame(g),()=>cancelAnimationFrame(y.current)},[t]),t?W.jsxs("div",{style:{position:"fixed",top:10,right:10,background:"rgba(0, 0, 0, 0.8)",color:"#0f0",fontFamily:"monospace",fontSize:"12px",padding:"8px 12px",borderRadius:"4px",zIndex:1e4,border:"1px solid #0f0",userSelect:"none"},children:[W.jsxs("div",{children:["FPS: ",s]}),W.jsxs("div",{children:["Frame: ",c,"ms"]}),W.jsxs("div",{children:["Memory: ",p,"MB"]}),W.jsx("div",{style:{marginTop:"4px",fontSize:"10px",opacity:.7},children:"Press P to toggle"})]}):null});function Oy({onSelect:o,onBack:t}){const[i,s]=yt.useState([]),[l,c]=yt.useState(!0);yt.useEffect(()=>{d()},[]);async function d(){try{const v=await(await fetch("/api/recordings")).json();s(v.recordings||[])}catch(h){console.error("Failed to load recordings:",h)}finally{c(!1)}}function p(h){return new Date(h*1e3).toLocaleString()}function m(h){return h<1024?`${h} B`:h<1024*1024?`${(h/1024).toFixed(1)} KB`:`${(h/1024/1024).toFixed(1)} MB`}return W.jsxs("div",{className:"session-list",children:[W.jsxs("header",{className:"session-header",children:[W.jsx("h2",{children:"Saved Sessions"}),W.jsx("button",{className:"btn btn-back",onClick:t,children:"← Back to Live"})]}),l&&W.jsx("div",{className:"list-loading",children:W.jsx("p",{children:"Loading recordings..."})}),!l&&i.length===0&&W.jsx("div",{className:"list-empty",children:W.jsx("p",{children:"No recordings yet. Record a session on the Live tab."})}),!l&&i.length>0&&W.jsx("div",{className:"list-container",children:W.jsxs("table",{className:"recordings-table",children:[W.jsx("thead",{children:W.jsxs("tr",{children:[W.jsx("th",{children:"Filename"}),W.jsx("th",{children:"Size"}),W.jsx("th",{children:"Date & Time"}),W.jsx("th",{children:"Action"})]})}),W.jsx("tbody",{children:i.map(h=>W.jsxs("tr",{children:[W.jsx("td",{className:"filename",children:h.filename}),W.jsx("td",{className:"size",children:m(h.size)}),W.jsx("td",{className:"mtime",children:p(h.mtime)}),W.jsx("td",{className:"action",children:W.jsx("button",{className:"btn btn-open",onClick:()=>o(h.filename),children:"Open"})})]},h.filename))})]})}),W.jsx("style",{children:`
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
      `})]})}const yc=16,bs=250,Py=["#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2","#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2"],Fy="rgba(48,54,61,0.4)",zy="rgba(88,166,255,0.12)",By="rgba(88,166,255,0.6)",Iy="#0d1117",Hy=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],Gy=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"}];function Vy({filename:o,onBack:t}){const[i,s]=yt.useState(!0),[l,c]=yt.useState(null),[d,p]=yt.useState(!1),[m,h]=yt.useState(0),[v,y]=yt.useState(1),[g,M]=yt.useState(100),[b,C]=yt.useState(4),[S,_]=yt.useState([]),[R,O]=yt.useState(""),[D,H]=yt.useState(!1),F=yt.useRef(null),z=yt.useRef(0),T=yt.useRef(0),N=yt.useRef(null),pt=yt.useRef(0),I=yt.useRef(0),q=yt.useRef(!1),G=yt.useRef(1),tt=yt.useRef(100),J=yt.useRef(4),P=yt.useRef(window.devicePixelRatio||1),B=yt.useRef({w:0,h:0});q.current=d,G.current=v,tt.current=g,J.current=b,T.current=m;const it=z.current,ct=it/bs,xt=m/bs;yt.useEffect(()=>{let k=!1;async function ut(){s(!0),c(null);try{const Mt=await fetch(`/api/recordings/data/${encodeURIComponent(o)}`);if(!Mt.ok)throw new Error(`HTTP ${Mt.status}`);const Lt=await Mt.json();if(Lt.error)throw new Error(Lt.error);const te=(Lt.data||[]).slice(1),ie=te.length;if(ie===0)throw new Error("Empty recording");const se=Array.from({length:yc},()=>new Float32Array(ie));for(let ue=0;ue<ie;ue++){const Qt=te[ue].split(",");for(let xe=0;xe<yc;xe++)se[xe][ue]=parseFloat(Qt[xe+1])||0}k||(F.current=se,z.current=ie,h(0),s(!1))}catch(Mt){k||(c(Mt.message),s(!1))}}return ut(),()=>{k=!0}},[o]),yt.useEffect(()=>{fetch(`/api/recordings/annotations/${encodeURIComponent(o)}`).then(k=>k.json()).then(k=>_(k.annotations||[])).catch(()=>{})},[o]),yt.useEffect(()=>{const k=N.current;if(!k||i||l)return;const ut=k.getContext("2d",{alpha:!1}),Mt=Lt=>{if(q.current&&I.current>0){const X=(Lt-I.current)/1e3*bs*G.current;let Ne=T.current+X;Ne>=z.current&&(Ne=z.current-1,p(!1)),T.current=Ne,h(Ne)}I.current=Lt;const Bt=P.current,te=k.getBoundingClientRect(),ie=te.width,se=te.height,ue=Math.round(ie*Bt),Qt=Math.round(se*Bt);(B.current.w!==ue||B.current.h!==Qt)&&(B.current={w:ue,h:Qt},k.width=ue,k.height=Qt,ut.setTransform(Bt,0,0,Bt,0,0)),U(ut,ie,se),pt.current=requestAnimationFrame(Mt)};return I.current=0,pt.current=requestAnimationFrame(Mt),()=>cancelAnimationFrame(pt.current)},[i,l]);function U(k,ut,Mt){const Lt=F.current;if(!Lt)return;k.fillStyle=Iy,k.fillRect(0,0,ut,Mt);const Bt=z.current,te=T.current,ie=J.current*bs,se=tt.current,ue=Math.floor(ie/2);let Qt=Math.floor(te)-ue,xe=Qt+ie;Qt<0&&(Qt=0,xe=ie),xe>Bt&&(xe=Bt,Qt=Math.max(0,Bt-ie));const X=Mt/yc;for(let L=0;L<yc;L++){const E=L*X,Q=E+X/2,vt=X/2;L>0&&(k.strokeStyle=Fy,k.lineWidth=.5,k.beginPath(),k.moveTo(0,E),k.lineTo(ut,E),k.stroke()),k.strokeStyle=zy,k.lineWidth=.5,k.beginPath(),k.moveTo(0,Q),k.lineTo(ut,Q),k.stroke(),k.fillStyle="rgba(230,237,243,0.4)",k.font="10px monospace",k.fillText(`Ch ${L+1}`,4,E+12);const bt=Lt[L],ht=xe-Qt;if(ht<2)continue;const qt=ht>2e3?Math.floor(ht/2e3):1,Ut=ut/(ht-1),$t=vt*.85/se;k.strokeStyle=Py[L],k.lineWidth=1.2,k.lineJoin="round",k.beginPath();for(let ee=0;ee<ht;ee+=qt){const At=ee*Ut,Tt=Q-bt[Qt+ee]*$t;ee===0?k.moveTo(At,Tt):k.lineTo(At,Tt)}k.stroke()}const Ne=Math.floor(te)>=Qt&&Math.floor(te)<=xe?(Math.floor(te)-Qt)/(xe-Qt)*ut:ut/2;k.strokeStyle=By,k.lineWidth=1.5,k.setLineDash([4,3]),k.beginPath(),k.moveTo(Ne,0),k.lineTo(Ne,Mt),k.stroke(),k.setLineDash([]),k.fillStyle="rgba(230,237,243,0.3)",k.font="10px monospace";const Se=Qt/bs,Le=xe/bs,Wt=Math.min(10,Math.floor(ut/80));for(let L=0;L<=Wt;L++){const E=Se+(Le-Se)*(L/Wt),Q=L/Wt*ut;k.fillText(et(E),Q+2,Mt-4)}}const Y=yt.useCallback(async k=>{try{await fetch(`/api/recordings/annotations/${encodeURIComponent(o)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({annotations:k})})}catch{}},[o]);function gt(){if(!R.trim())return;const k=Math.floor(m)/bs,ut={id:Date.now(),frame:Math.floor(m),time:k,text:R,timestamp:new Date().toISOString()},Mt=[...S,ut];_(Mt),Y(Mt),O(""),H(!1)}function Rt(k){const ut=S.filter(Mt=>Mt.id!==k);_(ut),Y(ut)}function wt(k){h(k.frame),T.current=k.frame,p(!1)}function et(k){const ut=Math.floor(k/60),Mt=Math.floor(k%60),Lt=Math.floor(k%1*100);return`${String(ut).padStart(2,"0")}:${String(Mt).padStart(2,"0")}.${String(Lt).padStart(2,"0")}`}return i?W.jsxs("div",{className:"sv-root sv-center",children:[W.jsx("p",{children:"Loading recording..."}),W.jsx("style",{children:Dd})]}):l?W.jsxs("div",{className:"sv-root sv-center",children:[W.jsxs("p",{children:["Error: ",l]}),W.jsx("button",{className:"sv-btn",onClick:t,children:"Back"}),W.jsx("style",{children:Dd})]}):W.jsxs("div",{className:"sv-root",children:[W.jsxs("header",{className:"sv-header",children:[W.jsxs("div",{className:"sv-title",children:[W.jsx("button",{className:"sv-btn",onClick:t,children:"← Back"}),W.jsx("h2",{children:o}),W.jsxs("span",{className:"sv-meta",children:[it.toLocaleString()," frames · ",et(ct)]})]}),W.jsxs("div",{className:"sv-controls",children:[W.jsx("button",{className:`sv-btn${d?" active":""}`,onClick:()=>{d||(I.current=0),p(!d)},children:d?"⏸ Pause":"▶ Play"}),W.jsx("button",{className:"sv-btn",onClick:()=>{h(0),T.current=0,p(!1)},children:"⏮ Rewind"}),W.jsxs("select",{value:v,onChange:k=>y(parseFloat(k.target.value)),className:"sv-select",children:[W.jsx("option",{value:.25,children:"0.25x"}),W.jsx("option",{value:.5,children:"0.5x"}),W.jsx("option",{value:1,children:"1x"}),W.jsx("option",{value:1.5,children:"1.5x"}),W.jsx("option",{value:2,children:"2x"}),W.jsx("option",{value:4,children:"4x"})]}),W.jsx("div",{className:"sv-sep"}),W.jsx("label",{className:"sv-label",children:"Window"}),W.jsx("select",{value:b,onChange:k=>C(parseInt(k.target.value)),className:"sv-select",children:Gy.map(k=>W.jsx("option",{value:k.value,children:k.label},k.value))}),W.jsx("label",{className:"sv-label",children:"Scale"}),W.jsx("select",{value:g,onChange:k=>M(parseInt(k.target.value)),className:"sv-select",children:Hy.map(k=>W.jsx("option",{value:k.value,children:k.label},k.value))})]})]}),W.jsxs("div",{className:"sv-timeline",children:[W.jsx("span",{className:"sv-time",children:et(xt)}),W.jsx("input",{type:"range",min:"0",max:it-1,value:Math.floor(m),onChange:k=>{const ut=parseInt(k.target.value);h(ut),T.current=ut,p(!1),I.current=0},className:"sv-slider"}),W.jsx("span",{className:"sv-time",children:et(ct)})]}),W.jsxs("div",{className:"sv-content",children:[W.jsx("div",{className:"sv-canvas-wrap",children:W.jsx("canvas",{ref:N,style:{display:"block",width:"100%",height:"100%"}})}),W.jsxs("div",{className:"sv-annotations",children:[W.jsxs("div",{className:"sv-anno-header",children:[W.jsx("h3",{children:"Annotations"}),W.jsx("button",{className:"sv-btn sv-btn-sm",onClick:()=>H(!D),children:D?"Cancel":"+ Add"})]}),D&&W.jsxs("div",{className:"sv-anno-form",children:[W.jsx("textarea",{value:R,onChange:k=>O(k.target.value),placeholder:"Annotation at current position...",onKeyDown:k=>{k.key==="Enter"&&k.ctrlKey&&gt()}}),W.jsx("button",{className:"sv-btn sv-btn-primary",onClick:gt,children:"Add"})]}),W.jsx("div",{className:"sv-anno-list",children:S.length===0?W.jsx("p",{className:"sv-anno-empty",children:"No annotations"}):S.map(k=>W.jsxs("div",{className:"sv-anno-item",onClick:()=>wt(k),children:[W.jsx("span",{className:"sv-anno-time",children:et(k.time)}),W.jsx("span",{className:"sv-anno-text",children:k.text}),W.jsx("button",{className:"sv-anno-del",onClick:ut=>{ut.stopPropagation(),Rt(k.id)},children:"✕"})]},k.id))})]})]}),W.jsx("style",{children:Dd})]})}const Dd=`
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
 */const lp="183",ky=0,p_=1,Xy=2,Jc=1,Wy=2,$o=3,as=0,Wn=1,Bi=2,va=0,Ir=1,m_=2,g_=3,__=4,qy=5,Ns=100,jy=101,Yy=102,Zy=103,Ky=104,Qy=200,Jy=201,$y=202,tM=203,ph=204,mh=205,eM=206,nM=207,iM=208,aM=209,sM=210,rM=211,oM=212,lM=213,cM=214,gh=0,_h=1,vh=2,Gr=3,xh=4,Sh=5,yh=6,Mh=7,xv=0,uM=1,fM=2,Vi=0,Sv=1,yv=2,Mv=3,Ev=4,bv=5,Tv=6,Av=7,Rv=300,Fs=301,Vr=302,Ud=303,Nd=304,du=306,Eh=1e3,_a=1001,bh=1002,Tn=1003,dM=1004,Mc=1005,wn=1006,Ld=1007,Os=1008,ai=1009,Cv=1010,wv=1011,el=1012,cp=1013,Xi=1014,Hi=1015,Sa=1016,up=1017,fp=1018,nl=1020,Dv=35902,Uv=35899,Nv=1021,Lv=1022,wi=1023,ya=1026,Ps=1027,Ov=1028,dp=1029,kr=1030,hp=1031,pp=1033,$c=33776,tu=33777,eu=33778,nu=33779,Th=35840,Ah=35841,Rh=35842,Ch=35843,wh=36196,Dh=37492,Uh=37496,Nh=37488,Lh=37489,Oh=37490,Ph=37491,Fh=37808,zh=37809,Bh=37810,Ih=37811,Hh=37812,Gh=37813,Vh=37814,kh=37815,Xh=37816,Wh=37817,qh=37818,jh=37819,Yh=37820,Zh=37821,Kh=36492,Qh=36494,Jh=36495,$h=36283,tp=36284,ep=36285,np=36286,hM=3200,pM=0,mM=1,es="",gi="srgb",Xr="srgb-linear",su="linear",Ve="srgb",xr=7680,v_=519,gM=512,_M=513,vM=514,mp=515,xM=516,SM=517,gp=518,yM=519,ip=35044,x_="300 es",Gi=2e3,il=2001;function MM(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function ru(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function EM(){const o=ru("canvas");return o.style.display="block",o}const S_={};function ou(...o){const t="THREE."+o.shift();console.log(t,...o)}function Pv(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function le(...o){o=Pv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function De(...o){o=Pv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function lu(...o){const t=o.join(" ");t in S_||(S_[t]=!0,le(...o))}function bM(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const TM={[gh]:_h,[vh]:yh,[xh]:Mh,[Gr]:Sh,[_h]:gh,[yh]:vh,[Mh]:xh,[Sh]:Gr};class qr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Od=Math.PI/180,ap=180/Math.PI;function is(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Rn[o&255]+Rn[o>>8&255]+Rn[o>>16&255]+Rn[o>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[i&63|128]+Rn[i>>8&255]+"-"+Rn[i>>16&255]+Rn[i>>24&255]+Rn[s&255]+Rn[s>>8&255]+Rn[s>>16&255]+Rn[s>>24&255]).toLowerCase()}function Ce(o,t,i){return Math.max(t,Math.min(i,o))}function AM(o,t){return(o%t+t)%t}function Pd(o,t,i){return(1-i)*o+i*t}function Ii(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function qe(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ee{constructor(t=0,i=0){Ee.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ce(this.x,t.x,i.x),this.y=Ce(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ce(this.x,t,i),this.y=Ce(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ce(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],v=s[l+2],y=s[l+3],g=c[d+0],M=c[d+1],b=c[d+2],C=c[d+3];if(y!==C||m!==g||h!==M||v!==b){let S=m*g+h*M+v*b+y*C;S<0&&(g=-g,M=-M,b=-b,C=-C,S=-S);let _=1-p;if(S<.9995){const R=Math.acos(S),O=Math.sin(R);_=Math.sin(_*R)/O,p=Math.sin(p*R)/O,m=m*_+g*p,h=h*_+M*p,v=v*_+b*p,y=y*_+C*p}else{m=m*_+g*p,h=h*_+M*p,v=v*_+b*p,y=y*_+C*p;const R=1/Math.sqrt(m*m+h*h+v*v+y*y);m*=R,h*=R,v*=R,y*=R}}t[i]=m,t[i+1]=h,t[i+2]=v,t[i+3]=y}static multiplyQuaternionsFlat(t,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],v=s[l+3],y=c[d],g=c[d+1],M=c[d+2],b=c[d+3];return t[i]=p*b+v*y+m*M-h*g,t[i+1]=m*b+v*g+h*y-p*M,t[i+2]=h*b+v*M+p*g-m*y,t[i+3]=v*b-p*y-m*g-h*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,p=Math.cos,m=Math.sin,h=p(s/2),v=p(l/2),y=p(c/2),g=m(s/2),M=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=g*v*y+h*M*b,this._y=h*M*y-g*v*b,this._z=h*v*b+g*M*y,this._w=h*v*y-g*M*b;break;case"YXZ":this._x=g*v*y+h*M*b,this._y=h*M*y-g*v*b,this._z=h*v*b-g*M*y,this._w=h*v*y+g*M*b;break;case"ZXY":this._x=g*v*y-h*M*b,this._y=h*M*y+g*v*b,this._z=h*v*b+g*M*y,this._w=h*v*y-g*M*b;break;case"ZYX":this._x=g*v*y-h*M*b,this._y=h*M*y+g*v*b,this._z=h*v*b-g*M*y,this._w=h*v*y+g*M*b;break;case"YZX":this._x=g*v*y+h*M*b,this._y=h*M*y+g*v*b,this._z=h*v*b-g*M*y,this._w=h*v*y-g*M*b;break;case"XZY":this._x=g*v*y-h*M*b,this._y=h*M*y-g*v*b,this._z=h*v*b+g*M*y,this._w=h*v*y+g*M*b;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],v=i[6],y=i[10],g=s+p+y;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-h)*M,this._z=(d-l)*M}else if(s>p&&s>y){const M=2*Math.sqrt(1+s-p-y);this._w=(v-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+h)/M}else if(p>y){const M=2*Math.sqrt(1+p-s-y);this._w=(c-h)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+y-s-p);this._w=(d-l)/M,this._x=(c+h)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,p=i._x,m=i._y,h=i._z,v=i._w;return this._x=s*v+d*p+l*h-c*m,this._y=l*v+d*m+c*p-s*h,this._z=c*v+d*h+s*m-l*p,this._w=d*v-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,d=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),v=Math.sin(h);m=Math.sin(m*h)/v,i=Math.sin(i*h)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class at{constructor(t=0,i=0,s=0){at.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(y_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(y_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,p=t.z,m=t.w,h=2*(d*l-p*s),v=2*(p*i-c*l),y=2*(c*s-d*i);return this.x=i+m*h+d*y-p*v,this.y=s+m*v+p*h-c*y,this.z=l+m*y+c*v-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ce(this.x,t.x,i.x),this.y=Ce(this.y,t.y,i.y),this.z=Ce(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ce(this.x,t,i),this.y=Ce(this.y,t,i),this.z=Ce(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Fd.copy(this).projectOnVector(t),this.sub(Fd)}reflect(t){return this.sub(Fd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ce(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fd=new at,y_=new jr;class _e{constructor(t,i,s,l,c,d,p,m,h){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,m,h)}set(t,i,s,l,c,d,p,m,h){const v=this.elements;return v[0]=t,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=d,v[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],v=s[4],y=s[7],g=s[2],M=s[5],b=s[8],C=l[0],S=l[3],_=l[6],R=l[1],O=l[4],D=l[7],H=l[2],F=l[5],z=l[8];return c[0]=d*C+p*R+m*H,c[3]=d*S+p*O+m*F,c[6]=d*_+p*D+m*z,c[1]=h*C+v*R+y*H,c[4]=h*S+v*O+y*F,c[7]=h*_+v*D+y*z,c[2]=g*C+M*R+b*H,c[5]=g*S+M*O+b*F,c[8]=g*_+M*D+b*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],v=t[8];return i*d*v-i*p*h-s*c*v+s*p*m+l*c*h-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],v=t[8],y=v*d-p*h,g=p*m-v*c,M=h*c-d*m,b=i*y+s*g+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=y*C,t[1]=(l*h-v*s)*C,t[2]=(p*s-l*d)*C,t[3]=g*C,t[4]=(v*i-l*m)*C,t[5]=(l*c-p*i)*C,t[6]=M*C,t[7]=(s*m-h*i)*C,t[8]=(d*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+t,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(zd.makeScale(t,i)),this}rotate(t){return this.premultiply(zd.makeRotation(-t)),this}translate(t,i){return this.premultiply(zd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zd=new _e,M_=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),E_=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RM(){const o={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Ve&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ve&&(l.r=Hr(l.r),l.g=Hr(l.g),l.b=Hr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===es?su:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return lu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return lu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Xr]:{primaries:t,whitePoint:s,transfer:su,toXYZ:M_,fromXYZ:E_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:M_,fromXYZ:E_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),o}const Ue=RM();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Hr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Sr;class CM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Sr===void 0&&(Sr=ru("canvas")),Sr.width=t.width,Sr.height=t.height;const l=Sr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Sr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ru("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=xa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:t.width,height:t.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wM=0;class _p{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=is(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Bd(l[d].image)):c.push(Bd(l[d]))}else c=Bd(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Bd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?CM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}let DM=0;const Id=new at;class Dn extends qr{constructor(t=Dn.DEFAULT_IMAGE,i=Dn.DEFAULT_MAPPING,s=_a,l=_a,c=wn,d=Os,p=wi,m=ai,h=Dn.DEFAULT_ANISOTROPY,v=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=is(),this.name="",this.source=new _p(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Id).x}get height(){return this.source.getSize(Id).y}get depth(){return this.source.getSize(Id).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){le(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Eh:t.x=t.x-Math.floor(t.x);break;case _a:t.x=t.x<0?0:1;break;case bh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Eh:t.y=t.y-Math.floor(t.y);break;case _a:t.y=t.y<0?0:1;break;case bh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=Rv;Dn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,s=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,h=m[0],v=m[4],y=m[8],g=m[1],M=m[5],b=m[9],C=m[2],S=m[6],_=m[10];if(Math.abs(v-g)<.01&&Math.abs(y-C)<.01&&Math.abs(b-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(y+C)<.1&&Math.abs(b+S)<.1&&Math.abs(h+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(h+1)/2,D=(M+1)/2,H=(_+1)/2,F=(v+g)/4,z=(y+C)/4,T=(b+S)/4;return O>D&&O>H?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=F/s,c=z/s):D>H?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=F/l,c=T/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=z/c,l=T/c),this.set(s,l,c,i),this}let R=Math.sqrt((S-b)*(S-b)+(y-C)*(y-C)+(g-v)*(g-v));return Math.abs(R)<.001&&(R=1),this.x=(S-b)/R,this.y=(y-C)/R,this.z=(g-v)/R,this.w=Math.acos((h+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ce(this.x,t.x,i.x),this.y=Ce(this.y,t.y,i.y),this.z=Ce(this.z,t.z,i.z),this.w=Ce(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ce(this.x,t,i),this.y=Ce(this.y,t,i),this.z=Ce(this.z,t,i),this.w=Ce(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ce(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UM extends qr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new Dn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new _p(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends UM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Fv extends Dn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class NM extends Dn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $e{constructor(t,i,s,l,c,d,p,m,h,v,y,g,M,b,C,S){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,p,m,h,v,y,g,M,b,C,S)}set(t,i,s,l,c,d,p,m,h,v,y,g,M,b,C,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=d,_[9]=p,_[13]=m,_[2]=h,_[6]=v,_[10]=y,_[14]=g,_[3]=M,_[7]=b,_[11]=C,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/yr.setFromMatrixColumn(t,0).length(),c=1/yr.setFromMatrixColumn(t,1).length(),d=1/yr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),v=Math.cos(c),y=Math.sin(c);if(t.order==="XYZ"){const g=d*v,M=d*y,b=p*v,C=p*y;i[0]=m*v,i[4]=-m*y,i[8]=h,i[1]=M+b*h,i[5]=g-C*h,i[9]=-p*m,i[2]=C-g*h,i[6]=b+M*h,i[10]=d*m}else if(t.order==="YXZ"){const g=m*v,M=m*y,b=h*v,C=h*y;i[0]=g+C*p,i[4]=b*p-M,i[8]=d*h,i[1]=d*y,i[5]=d*v,i[9]=-p,i[2]=M*p-b,i[6]=C+g*p,i[10]=d*m}else if(t.order==="ZXY"){const g=m*v,M=m*y,b=h*v,C=h*y;i[0]=g-C*p,i[4]=-d*y,i[8]=b+M*p,i[1]=M+b*p,i[5]=d*v,i[9]=C-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(t.order==="ZYX"){const g=d*v,M=d*y,b=p*v,C=p*y;i[0]=m*v,i[4]=b*h-M,i[8]=g*h+C,i[1]=m*y,i[5]=C*h+g,i[9]=M*h-b,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(t.order==="YZX"){const g=d*m,M=d*h,b=p*m,C=p*h;i[0]=m*v,i[4]=C-g*y,i[8]=b*y+M,i[1]=y,i[5]=d*v,i[9]=-p*v,i[2]=-h*v,i[6]=M*y+b,i[10]=g-C*y}else if(t.order==="XZY"){const g=d*m,M=d*h,b=p*m,C=p*h;i[0]=m*v,i[4]=-y,i[8]=h*v,i[1]=g*y+C,i[5]=d*v,i[9]=M*y-b,i[2]=b*y-M,i[6]=p*v,i[10]=C*y+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(LM,t,OM)}lookAt(t,i,s){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Za.crossVectors(s,ei),Za.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Za.crossVectors(s,ei)),Za.normalize(),Ec.crossVectors(ei,Za),l[0]=Za.x,l[4]=Ec.x,l[8]=ei.x,l[1]=Za.y,l[5]=Ec.y,l[9]=ei.y,l[2]=Za.z,l[6]=Ec.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],v=s[1],y=s[5],g=s[9],M=s[13],b=s[2],C=s[6],S=s[10],_=s[14],R=s[3],O=s[7],D=s[11],H=s[15],F=l[0],z=l[4],T=l[8],N=l[12],pt=l[1],I=l[5],q=l[9],G=l[13],tt=l[2],J=l[6],P=l[10],B=l[14],it=l[3],ct=l[7],xt=l[11],U=l[15];return c[0]=d*F+p*pt+m*tt+h*it,c[4]=d*z+p*I+m*J+h*ct,c[8]=d*T+p*q+m*P+h*xt,c[12]=d*N+p*G+m*B+h*U,c[1]=v*F+y*pt+g*tt+M*it,c[5]=v*z+y*I+g*J+M*ct,c[9]=v*T+y*q+g*P+M*xt,c[13]=v*N+y*G+g*B+M*U,c[2]=b*F+C*pt+S*tt+_*it,c[6]=b*z+C*I+S*J+_*ct,c[10]=b*T+C*q+S*P+_*xt,c[14]=b*N+C*G+S*B+_*U,c[3]=R*F+O*pt+D*tt+H*it,c[7]=R*z+O*I+D*J+H*ct,c[11]=R*T+O*q+D*P+H*xt,c[15]=R*N+O*G+D*B+H*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],p=t[5],m=t[9],h=t[13],v=t[2],y=t[6],g=t[10],M=t[14],b=t[3],C=t[7],S=t[11],_=t[15],R=m*M-h*g,O=p*M-h*y,D=p*g-m*y,H=d*M-h*v,F=d*g-m*v,z=d*y-p*v;return i*(C*R-S*O+_*D)-s*(b*R-S*H+_*F)+l*(b*O-C*H+_*z)-c*(b*D-C*F+S*z)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],v=t[8],y=t[9],g=t[10],M=t[11],b=t[12],C=t[13],S=t[14],_=t[15],R=i*p-s*d,O=i*m-l*d,D=i*h-c*d,H=s*m-l*p,F=s*h-c*p,z=l*h-c*m,T=v*C-y*b,N=v*S-g*b,pt=v*_-M*b,I=y*S-g*C,q=y*_-M*C,G=g*_-M*S,tt=R*G-O*q+D*I+H*pt-F*N+z*T;if(tt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/tt;return t[0]=(p*G-m*q+h*I)*J,t[1]=(l*q-s*G-c*I)*J,t[2]=(C*z-S*F+_*H)*J,t[3]=(g*F-y*z-M*H)*J,t[4]=(m*pt-d*G-h*N)*J,t[5]=(i*G-l*pt+c*N)*J,t[6]=(S*D-b*z-_*O)*J,t[7]=(v*z-g*D+M*O)*J,t[8]=(d*q-p*pt+h*T)*J,t[9]=(s*pt-i*q-c*T)*J,t[10]=(b*F-C*D+_*R)*J,t[11]=(y*D-v*F-M*R)*J,t[12]=(p*N-d*I-m*T)*J,t[13]=(i*I-s*N+l*T)*J,t[14]=(C*O-b*H-S*R)*J,t[15]=(v*H-y*O+g*R)*J,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,p=t.y,m=t.z,h=c*d,v=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,v*p+s,v*m-l*d,0,h*m-l*p,v*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,v=d+d,y=p+p,g=c*h,M=c*v,b=c*y,C=d*v,S=d*y,_=p*y,R=m*h,O=m*v,D=m*y,H=s.x,F=s.y,z=s.z;return l[0]=(1-(C+_))*H,l[1]=(M+D)*H,l[2]=(b-O)*H,l[3]=0,l[4]=(M-D)*F,l[5]=(1-(g+_))*F,l[6]=(S+R)*F,l[7]=0,l[8]=(b+O)*z,l[9]=(S-R)*z,l[10]=(1-(g+C))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=yr.set(l[0],l[1],l[2]).length();const p=yr.set(l[4],l[5],l[6]).length(),m=yr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ai.copy(this);const h=1/d,v=1/p,y=1/m;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=v,Ai.elements[5]*=v,Ai.elements[6]*=v,Ai.elements[8]*=y,Ai.elements[9]*=y,Ai.elements[10]*=y,i.setFromRotationMatrix(Ai),s.x=d,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,d,p=Gi,m=!1){const h=this.elements,v=2*c/(i-t),y=2*c/(s-l),g=(i+t)/(i-t),M=(s+l)/(s-l);let b,C;if(m)b=c/(d-c),C=d*c/(d-c);else if(p===Gi)b=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(p===il)b=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=y,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,s,l,c,d,p=Gi,m=!1){const h=this.elements,v=2/(i-t),y=2/(s-l),g=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,C;if(m)b=1/(d-c),C=d/(d-c);else if(p===Gi)b=-2/(d-c),C=-(d+c)/(d-c);else if(p===il)b=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=v,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=y,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const yr=new at,Ai=new $e,LM=new at(0,0,0),OM=new at(1,1,1),Za=new at,Ec=new at,ei=new at,b_=new $e,T_=new jr;class Ma{constructor(t=0,i=0,s=0,l=Ma.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],v=l[9],y=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ce(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ce(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Ce(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,h),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return b_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(b_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return T_.setFromEuler(this),this.setFromQuaternion(T_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ma.DEFAULT_ORDER="XYZ";class zv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let PM=0;const A_=new at,Mr=new jr,da=new $e,bc=new at,Vo=new at,FM=new at,zM=new jr,R_=new at(1,0,0),C_=new at(0,1,0),w_=new at(0,0,1),D_={type:"added"},BM={type:"removed"},Er={type:"childadded",child:null},Hd={type:"childremoved",child:null};class Un extends qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const t=new at,i=new Ma,s=new jr,l=new at(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new _e}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Mr.setFromAxisAngle(t,i),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(t,i){return Mr.setFromAxisAngle(t,i),this.quaternion.premultiply(Mr),this}rotateX(t){return this.rotateOnAxis(R_,t)}rotateY(t){return this.rotateOnAxis(C_,t)}rotateZ(t){return this.rotateOnAxis(w_,t)}translateOnAxis(t,i){return A_.copy(t).applyQuaternion(this.quaternion),this.position.add(A_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(R_,t)}translateY(t){return this.translateOnAxis(C_,t)}translateZ(t){return this.translateOnAxis(w_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?bc.copy(t):bc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(Vo,bc,this.up):da.lookAt(bc,Vo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),Mr.setFromRotationMatrix(da),this.quaternion.premultiply(Mr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(De("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(D_),Er.child=t,this.dispatchEvent(Er),Er.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(BM),Hd.child=t,this.dispatchEvent(Hd),Hd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),da.multiply(t.parent.matrixWorld)),t.applyMatrix4(da),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(D_),Er.child=t,this.dispatchEvent(Er),Er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,t,FM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,zM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,v=m.length;h<v;h++){const y=m[h];c(t.shapes,y)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=d(t.geometries),m=d(t.materials),h=d(t.textures),v=d(t.images),y=d(t.shapes),g=d(t.skeletons),M=d(t.animations),b=d(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),v.length>0&&(s.images=v),y.length>0&&(s.shapes=y),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(p){const m=[];for(const h in p){const v=p[h];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Un.DEFAULT_UP=new at(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tc extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IM={type:"move"};class Gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new at,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new at),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new at,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new at),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const C of t.hand.values()){const S=i.getJointPose(C,s),_=this._getHandJoint(h,C);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=h.joints["index-finger-tip"],y=h.joints["thumb-tip"],g=v.position.distanceTo(y.position),M=.02,b=.005;h.inputState.pinching&&g>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(IM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Tc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const Bv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},Ac={h:0,s:0,l:0};function Vd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ae{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ue.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ue.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ue.workingColorSpace){if(t=AM(t,1),i=Ce(i,0,1),s=Ce(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Vd(d,c,t+1/3),this.g=Vd(d,c,t),this.b=Vd(d,c,t-1/3)}return Ue.colorSpaceToWorking(this,l),this}setStyle(t,i=gi){function s(c){c!==void 0&&parseFloat(c)<1&&le("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:le("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);le("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=gi){const s=Bv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):le("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return Ue.workingToColorSpace(Cn.copy(this),t),Math.round(Ce(Cn.r*255,0,255))*65536+Math.round(Ce(Cn.g*255,0,255))*256+Math.round(Ce(Cn.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ue.workingColorSpace){Ue.workingToColorSpace(Cn.copy(this),i);const s=Cn.r,l=Cn.g,c=Cn.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const v=(p+d)/2;if(p===d)m=0,h=0;else{const y=d-p;switch(h=v<=.5?y/(d+p):y/(2-d-p),d){case s:m=(l-c)/y+(l<c?6:0);break;case l:m=(c-s)/y+2;break;case c:m=(s-l)/y+4;break}m/=6}return t.h=m,t.s=h,t.l=v,t}getRGB(t,i=Ue.workingColorSpace){return Ue.workingToColorSpace(Cn.copy(this),i),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=gi){Ue.workingToColorSpace(Cn.copy(this),t);const i=Cn.r,s=Cn.g,l=Cn.b;return t!==gi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ka),this.setHSL(Ka.h+t,Ka.s+i,Ka.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ka),t.getHSL(Ac);const s=Pd(Ka.h,Ac.h,i),l=Pd(Ka.s,Ac.s,i),c=Pd(Ka.l,Ac.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ae;Ae.NAMES=Bv;class vp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ae(t),this.density=i}clone(){return new vp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class HM extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ma,this.environmentIntensity=1,this.environmentRotation=new Ma,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ri=new at,ha=new at,kd=new at,pa=new at,br=new at,Tr=new at,U_=new at,Xd=new at,Wd=new at,qd=new at,jd=new nn,Yd=new nn,Zd=new nn;class _i{constructor(t=new at,i=new at,s=new at){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ri.subVectors(t,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ri.subVectors(l,i),ha.subVectors(s,i),kd.subVectors(t,i);const d=Ri.dot(Ri),p=Ri.dot(ha),m=Ri.dot(kd),h=ha.dot(ha),v=ha.dot(kd),y=d*h-p*p;if(y===0)return c.set(0,0,0),null;const g=1/y,M=(h*m-p*v)*g,b=(d*v-p*m)*g;return c.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(t,i,s,l,c,d,p,m){return this.getBarycoord(t,i,s,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(d,pa.y),m.addScaledVector(p,pa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return jd.setScalar(0),Yd.setScalar(0),Zd.setScalar(0),jd.fromBufferAttribute(t,i),Yd.fromBufferAttribute(t,s),Zd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(jd,c.x),d.addScaledVector(Yd,c.y),d.addScaledVector(Zd,c.z),d}static isFrontFacing(t,i,s,l){return Ri.subVectors(s,i),ha.subVectors(t,i),Ri.cross(ha).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ri.cross(ha).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return _i.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,p;br.subVectors(l,s),Tr.subVectors(c,s),Xd.subVectors(t,s);const m=br.dot(Xd),h=Tr.dot(Xd);if(m<=0&&h<=0)return i.copy(s);Wd.subVectors(t,l);const v=br.dot(Wd),y=Tr.dot(Wd);if(v>=0&&y<=v)return i.copy(l);const g=m*y-v*h;if(g<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(s).addScaledVector(br,d);qd.subVectors(t,c);const M=br.dot(qd),b=Tr.dot(qd);if(b>=0&&M<=b)return i.copy(c);const C=M*h-m*b;if(C<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(s).addScaledVector(Tr,p);const S=v*b-M*y;if(S<=0&&y-v>=0&&M-b>=0)return U_.subVectors(c,l),p=(y-v)/(y-v+(M-b)),i.copy(l).addScaledVector(U_,p);const _=1/(S+C+g);return d=C*_,p=g*_,i.copy(s).addScaledVector(br,d).addScaledVector(Tr,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class sl{constructor(t=new at(1/0,1/0,1/0),i=new at(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ci.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ci.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ci.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,Ci):Ci.fromBufferAttribute(c,d),Ci.applyMatrix4(t.matrixWorld),this.expandByPoint(Ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Rc.copy(s.boundingBox)),Rc.applyMatrix4(t.matrixWorld),this.union(Rc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ci),Ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ko),Cc.subVectors(this.max,ko),Ar.subVectors(t.a,ko),Rr.subVectors(t.b,ko),Cr.subVectors(t.c,ko),Qa.subVectors(Rr,Ar),Ja.subVectors(Cr,Rr),Ts.subVectors(Ar,Cr);let i=[0,-Qa.z,Qa.y,0,-Ja.z,Ja.y,0,-Ts.z,Ts.y,Qa.z,0,-Qa.x,Ja.z,0,-Ja.x,Ts.z,0,-Ts.x,-Qa.y,Qa.x,0,-Ja.y,Ja.x,0,-Ts.y,Ts.x,0];return!Kd(i,Ar,Rr,Cr,Cc)||(i=[1,0,0,0,1,0,0,0,1],!Kd(i,Ar,Rr,Cr,Cc))?!1:(wc.crossVectors(Qa,Ja),i=[wc.x,wc.y,wc.z],Kd(i,Ar,Rr,Cr,Cc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ma),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ma=[new at,new at,new at,new at,new at,new at,new at,new at],Ci=new at,Rc=new sl,Ar=new at,Rr=new at,Cr=new at,Qa=new at,Ja=new at,Ts=new at,ko=new at,Cc=new at,wc=new at,As=new at;function Kd(o,t,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){As.fromArray(o,c);const p=l.x*Math.abs(As.x)+l.y*Math.abs(As.y)+l.z*Math.abs(As.z),m=t.dot(As),h=i.dot(As),v=s.dot(As);if(Math.max(-Math.max(m,h,v),Math.min(m,h,v))>p)return!1}return!0}const hn=new at,Dc=new Ee;let GM=0;class vi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=ip,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(t),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ii(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qe(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ii(i,this.array)),i}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ii(i,this.array)),i}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ii(i,this.array)),i}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ii(i,this.array)),i}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ip&&(t.usage=this.usage),t}}class Iv extends vi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Hv extends vi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class si extends vi{constructor(t,i,s){super(new Float32Array(t),i,s)}}const VM=new sl,Xo=new at,Qd=new at;class hu{constructor(t=new at,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):VM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xo.subVectors(t,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Xo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xo.copy(t.center).add(Qd)),this.expandByPoint(Xo.copy(t.center).sub(Qd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let kM=0;const mi=new $e,Jd=new Un,wr=new at,ni=new sl,Wo=new sl,Sn=new at;class ri extends qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(MM(t)?Hv:Iv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new _e().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,i,s){return mi.makeTranslation(t,i,s),this.applyMatrix4(mi),this}scale(t,i,s){return mi.makeScale(t,i,s),this.applyMatrix4(mi),this}lookAt(t){return Jd.lookAt(t),Jd.updateMatrix(),this.applyMatrix4(Jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new si(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new at(-1/0,-1/0,-1/0),new at(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new at,1/0);return}if(t){const s=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Wo.setFromBufferAttribute(p),this.morphTargetsRelative?(Sn.addVectors(ni.min,Wo.min),ni.expandByPoint(Sn),Sn.addVectors(ni.max,Wo.max),ni.expandByPoint(Sn)):(ni.expandByPoint(Wo.min),ni.expandByPoint(Wo.max))}ni.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,v=p.count;h<v;h++)Sn.fromBufferAttribute(p,h),m&&(wr.fromBufferAttribute(t,h),Sn.add(wr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new at,m[T]=new at;const h=new at,v=new at,y=new at,g=new Ee,M=new Ee,b=new Ee,C=new at,S=new at;function _(T,N,pt){h.fromBufferAttribute(s,T),v.fromBufferAttribute(s,N),y.fromBufferAttribute(s,pt),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,N),b.fromBufferAttribute(c,pt),v.sub(h),y.sub(h),M.sub(g),b.sub(g);const I=1/(M.x*b.y-b.x*M.y);isFinite(I)&&(C.copy(v).multiplyScalar(b.y).addScaledVector(y,-M.y).multiplyScalar(I),S.copy(y).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(I),p[T].add(C),p[N].add(C),p[pt].add(C),m[T].add(S),m[N].add(S),m[pt].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let T=0,N=R.length;T<N;++T){const pt=R[T],I=pt.start,q=pt.count;for(let G=I,tt=I+q;G<tt;G+=3)_(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const O=new at,D=new at,H=new at,F=new at;function z(T){H.fromBufferAttribute(l,T),F.copy(H);const N=p[T];O.copy(N),O.sub(H.multiplyScalar(H.dot(N))).normalize(),D.crossVectors(F,N);const I=D.dot(m[T])<0?-1:1;d.setXYZW(T,O.x,O.y,O.z,I)}for(let T=0,N=R.length;T<N;++T){const pt=R[T],I=pt.start,q=pt.count;for(let G=I,tt=I+q;G<tt;G+=3)z(t.getX(G+0)),z(t.getX(G+1)),z(t.getX(G+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new vi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new at,c=new at,d=new at,p=new at,m=new at,h=new at,v=new at,y=new at;if(t)for(let g=0,M=t.count;g<M;g+=3){const b=t.getX(g+0),C=t.getX(g+1),S=t.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,S),v.subVectors(d,c),y.subVectors(l,c),v.cross(y),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),h.fromBufferAttribute(s,S),p.add(v),m.add(v),h.add(v),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),v.subVectors(d,c),y.subVectors(l,c),v.cross(y),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(p,m){const h=p.array,v=p.itemSize,y=p.normalized,g=new h.constructor(m.length*v);let M=0,b=0;for(let C=0,S=m.length;C<S;C++){p.isInterleavedBufferAttribute?M=m[C]*p.data.stride+p.offset:M=m[C]*v;for(let _=0;_<v;_++)g[b++]=h[M++]}return new vi(g,v,y)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ri,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let v=0,y=h.length;v<y;v++){const g=h[v],M=t(g,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],v=[];for(let y=0,g=h.length;y<g;y++){const M=h[y];v.push(M.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const h in l){const v=l[h];this.setAttribute(h,v.clone(i))}const c=t.morphAttributes;for(const h in c){const v=[],y=c[h];for(let g=0,M=y.length;g<M;g++)v.push(y[g].clone(i));this.morphAttributes[h]=v}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,v=d.length;h<v;h++){const y=d[h];this.addGroup(y.start,y.count,y.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class XM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=ip,this.updateRanges=[],this.version=0,this.uuid=is()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,s){t*=this.stride,s*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[s+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=is()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=is()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new at;class cu{constructor(t,i,s,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=s,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,s=this.data.count;i<s;i++)zn.fromBufferAttribute(this,i),zn.applyMatrix4(t),this.setXYZ(i,zn.x,zn.y,zn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)zn.fromBufferAttribute(this,i),zn.applyNormalMatrix(t),this.setXYZ(i,zn.x,zn.y,zn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)zn.fromBufferAttribute(this,i),zn.transformDirection(t),this.setXYZ(i,zn.x,zn.y,zn.z);return this}getComponent(t,i){let s=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(s=Ii(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=qe(s,this.array)),this.data.array[t*this.data.stride+this.offset+i]=s,this}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ii(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ii(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ii(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ii(i,this.array)),i}setXY(t,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this}setXYZ(t,i,s,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),s=qe(s,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=s,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){ou("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new vi(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new cu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ou("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let s=0;s<this.count;s++){const l=s*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let WM=0;class Yr extends qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=is(),this.name="",this.type="Material",this.blending=Ir,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=v_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xr,this.stencilZFail=xr,this.stencilZPass=xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){le(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(s.blending=this.blending),this.side!==as&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ph&&(s.blendSrc=this.blendSrc),this.blendDst!==mh&&(s.blendDst=this.blendDst),this.blendEquation!==Ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Gr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==v_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==xr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==xr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Gv extends Yr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Dr;const qo=new at,Ur=new at,Nr=new at,Lr=new Ee,jo=new Ee,Vv=new $e,Uc=new at,Yo=new at,Nc=new at,N_=new Ee,$d=new Ee,L_=new Ee;class qM extends Un{constructor(t=new Gv){if(super(),this.isSprite=!0,this.type="Sprite",Dr===void 0){Dr=new ri;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),s=new XM(i,5);Dr.setIndex([0,1,2,0,2,3]),Dr.setAttribute("position",new cu(s,3,0,!1)),Dr.setAttribute("uv",new cu(s,2,3,!1))}this.geometry=Dr,this.material=t,this.center=new Ee(.5,.5),this.count=1}raycast(t,i){t.camera===null&&De('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ur.setFromMatrixScale(this.matrixWorld),Vv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Nr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ur.multiplyScalar(-Nr.z);const s=this.material.rotation;let l,c;s!==0&&(c=Math.cos(s),l=Math.sin(s));const d=this.center;Lc(Uc.set(-.5,-.5,0),Nr,d,Ur,l,c),Lc(Yo.set(.5,-.5,0),Nr,d,Ur,l,c),Lc(Nc.set(.5,.5,0),Nr,d,Ur,l,c),N_.set(0,0),$d.set(1,0),L_.set(1,1);let p=t.ray.intersectTriangle(Uc,Yo,Nc,!1,qo);if(p===null&&(Lc(Yo.set(-.5,.5,0),Nr,d,Ur,l,c),$d.set(0,1),p=t.ray.intersectTriangle(Uc,Nc,Yo,!1,qo),p===null))return;const m=t.ray.origin.distanceTo(qo);m<t.near||m>t.far||i.push({distance:m,point:qo.clone(),uv:_i.getInterpolation(qo,Uc,Yo,Nc,N_,$d,L_,new Ee),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Lc(o,t,i,s,l,c){Lr.subVectors(o,i).addScalar(.5).multiply(s),l!==void 0?(jo.x=c*Lr.x-l*Lr.y,jo.y=l*Lr.x+c*Lr.y):jo.copy(Lr),o.copy(t),o.x+=jo.x,o.y+=jo.y,o.applyMatrix4(Vv)}const ga=new at,th=new at,Oc=new at,$a=new at,eh=new at,Pc=new at,nh=new at;class kv{constructor(t=new at,i=new at(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ga)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ga.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){th.copy(t).add(i).multiplyScalar(.5),Oc.copy(i).sub(t).normalize(),$a.copy(this.origin).sub(th);const c=t.distanceTo(i)*.5,d=-this.direction.dot(Oc),p=$a.dot(this.direction),m=-$a.dot(Oc),h=$a.lengthSq(),v=Math.abs(1-d*d);let y,g,M,b;if(v>0)if(y=d*m-p,g=d*p-m,b=c*v,y>=0)if(g>=-b)if(g<=b){const C=1/v;y*=C,g*=C,M=y*(y+d*g+2*p)+g*(d*y+g+2*m)+h}else g=c,y=Math.max(0,-(d*g+p)),M=-y*y+g*(g+2*m)+h;else g=-c,y=Math.max(0,-(d*g+p)),M=-y*y+g*(g+2*m)+h;else g<=-b?(y=Math.max(0,-(-d*c+p)),g=y>0?-c:Math.min(Math.max(-c,-m),c),M=-y*y+g*(g+2*m)+h):g<=b?(y=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+h):(y=Math.max(0,-(d*c+p)),g=y>0?c:Math.min(Math.max(-c,-m),c),M=-y*y+g*(g+2*m)+h);else g=d>0?-c:c,y=Math.max(0,-(d*g+p)),M=-y*y+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(th).addScaledVector(Oc,g),M}intersectSphere(t,i){ga.subVectors(t.center,this.origin);const s=ga.dot(this.direction),l=ga.dot(ga)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,p,m;const h=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,g=this.origin;return h>=0?(s=(t.min.x-g.x)*h,l=(t.max.x-g.x)*h):(s=(t.max.x-g.x)*h,l=(t.min.x-g.x)*h),v>=0?(c=(t.min.y-g.y)*v,d=(t.max.y-g.y)*v):(c=(t.max.y-g.y)*v,d=(t.min.y-g.y)*v),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),y>=0?(p=(t.min.z-g.z)*y,m=(t.max.z-g.z)*y):(p=(t.max.z-g.z)*y,m=(t.min.z-g.z)*y),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ga)!==null}intersectTriangle(t,i,s,l,c){eh.subVectors(i,t),Pc.subVectors(s,t),nh.crossVectors(eh,Pc);let d=this.direction.dot(nh),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;$a.subVectors(this.origin,t);const m=p*this.direction.dot(Pc.crossVectors($a,Pc));if(m<0)return null;const h=p*this.direction.dot(eh.cross($a));if(h<0||m+h>d)return null;const v=-p*$a.dot(nh);return v<0?null:this.at(v/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xp extends Yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ma,this.combine=xv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const O_=new $e,Rs=new kv,Fc=new hu,P_=new at,zc=new at,Bc=new at,Ic=new at,ih=new at,Hc=new at,F_=new at,Gc=new at;class Wi extends Un{constructor(t=new ri,i=new xp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Hc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const v=p[m],y=c[m];v!==0&&(ih.fromBufferAttribute(y,t),d?Hc.addScaledVector(ih,v):Hc.addScaledVector(ih.sub(i),v))}i.add(Hc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Fc.copy(s.boundingSphere),Fc.applyMatrix4(c),Rs.copy(t.ray).recast(t.near),!(Fc.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Fc,P_)===null||Rs.origin.distanceToSquared(P_)>(t.far-t.near)**2))&&(O_.copy(c).invert(),Rs.copy(t.ray).applyMatrix4(O_),!(s.boundingBox!==null&&Rs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Rs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,v=c.attributes.uv1,y=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(d))for(let b=0,C=g.length;b<C;b++){const S=g[b],_=d[S.materialIndex],R=Math.max(S.start,M.start),O=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let D=R,H=O;D<H;D+=3){const F=p.getX(D),z=p.getX(D+1),T=p.getX(D+2);l=Vc(this,_,t,s,h,v,y,F,z,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let S=b,_=C;S<_;S+=3){const R=p.getX(S),O=p.getX(S+1),D=p.getX(S+2);l=Vc(this,d,t,s,h,v,y,R,O,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,C=g.length;b<C;b++){const S=g[b],_=d[S.materialIndex],R=Math.max(S.start,M.start),O=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let D=R,H=O;D<H;D+=3){const F=D,z=D+1,T=D+2;l=Vc(this,_,t,s,h,v,y,F,z,T),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let S=b,_=C;S<_;S+=3){const R=S,O=S+1,D=S+2;l=Vc(this,d,t,s,h,v,y,R,O,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function jM(o,t,i,s,l,c,d,p){let m;if(t.side===Wn?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,t.side===as,p),m===null)return null;Gc.copy(p),Gc.applyMatrix4(o.matrixWorld);const h=i.ray.origin.distanceTo(Gc);return h<i.near||h>i.far?null:{distance:h,point:Gc.clone(),object:o}}function Vc(o,t,i,s,l,c,d,p,m,h){o.getVertexPosition(p,zc),o.getVertexPosition(m,Bc),o.getVertexPosition(h,Ic);const v=jM(o,t,i,s,zc,Bc,Ic,F_);if(v){const y=new at;_i.getBarycoord(F_,zc,Bc,Ic,y),l&&(v.uv=_i.getInterpolatedAttribute(l,p,m,h,y,new Ee)),c&&(v.uv1=_i.getInterpolatedAttribute(c,p,m,h,y,new Ee)),d&&(v.normal=_i.getInterpolatedAttribute(d,p,m,h,y,new at),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new at,materialIndex:0};_i.getNormal(zc,Bc,Ic,g.normal),v.face=g,v.barycoord=y}return v}class YM extends Dn{constructor(t=null,i=1,s=1,l,c,d,p,m,h=Tn,v=Tn,y,g){super(null,d,p,m,h,v,l,c,y,g),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ah=new at,ZM=new at,KM=new _e;class Us{constructor(t=new at(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=ah.subVectors(s,i).cross(ZM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(ah),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||KM.getNormalMatrix(t),l=this.coplanarPoint(ah).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new hu,QM=new Ee(.5,.5),kc=new at;class Sp{constructor(t=new Us,i=new Us,s=new Us,l=new Us,c=new Us,d=new Us){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Gi,s=!1){const l=this.planes,c=t.elements,d=c[0],p=c[1],m=c[2],h=c[3],v=c[4],y=c[5],g=c[6],M=c[7],b=c[8],C=c[9],S=c[10],_=c[11],R=c[12],O=c[13],D=c[14],H=c[15];if(l[0].setComponents(h-d,M-v,_-b,H-R).normalize(),l[1].setComponents(h+d,M+v,_+b,H+R).normalize(),l[2].setComponents(h+p,M+y,_+C,H+O).normalize(),l[3].setComponents(h-p,M-y,_-C,H-O).normalize(),s)l[4].setComponents(m,g,S,D).normalize(),l[5].setComponents(h-m,M-g,_-S,H-D).normalize();else if(l[4].setComponents(h-m,M-g,_-S,H-D).normalize(),i===Gi)l[5].setComponents(h+m,M+g,_+S,H+D).normalize();else if(i===il)l[5].setComponents(m,g,S,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){Cs.center.set(0,0,0);const i=QM.distanceTo(t.center);return Cs.radius=.7071067811865476+i,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(kc.x=l.normal.x>0?t.max.x:t.min.x,kc.y=l.normal.y>0?t.max.y:t.min.y,kc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(kc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yp extends Yr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const uu=new at,fu=new at,z_=new $e,Zo=new kv,Xc=new hu,sh=new at,B_=new at;class Xv extends Un{constructor(t=new ri,i=new yp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)uu.fromBufferAttribute(i,l-1),fu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=uu.distanceTo(fu);t.setAttribute("lineDistance",new si(s,1))}else le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Xc.copy(s.boundingSphere),Xc.applyMatrix4(l),Xc.radius+=c,t.ray.intersectsSphere(Xc)===!1)return;z_.copy(l).invert(),Zo.copy(t.ray).applyMatrix4(z_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const M=Math.max(0,d.start),b=Math.min(v.count,d.start+d.count);for(let C=M,S=b-1;C<S;C+=h){const _=v.getX(C),R=v.getX(C+1),O=Wc(this,t,Zo,m,_,R,C);O&&i.push(O)}if(this.isLineLoop){const C=v.getX(b-1),S=v.getX(M),_=Wc(this,t,Zo,m,C,S,b-1);_&&i.push(_)}}else{const M=Math.max(0,d.start),b=Math.min(g.count,d.start+d.count);for(let C=M,S=b-1;C<S;C+=h){const _=Wc(this,t,Zo,m,C,C+1,C);_&&i.push(_)}if(this.isLineLoop){const C=Wc(this,t,Zo,m,b-1,M,b-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Wc(o,t,i,s,l,c,d){const p=o.geometry.attributes.position;if(uu.fromBufferAttribute(p,l),fu.fromBufferAttribute(p,c),i.distanceSqToSegment(uu,fu,sh,B_)>s)return;sh.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(sh);if(!(h<t.near||h>t.far))return{distance:h,point:B_.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const I_=new at,H_=new at;class JM extends Xv{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)I_.fromBufferAttribute(i,l),H_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+I_.distanceTo(H_);t.setAttribute("lineDistance",new si(s,1))}else le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wv extends Dn{constructor(t=[],i=Fs,s,l,c,d,p,m,h,v){super(t,i,s,l,c,d,p,m,h,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $M extends Dn{constructor(t,i,s,l,c,d,p,m,h){super(t,i,s,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class al extends Dn{constructor(t,i,s=Xi,l,c,d,p=Tn,m=Tn,h,v=ya,y=1){if(v!==ya&&v!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:i,depth:y};super(g,l,c,d,p,m,v,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _p(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class tE extends al{constructor(t,i=Xi,s=Fs,l,c,d=Tn,p=Tn,m,h=ya){const v={width:t,height:t,depth:1},y=[v,v,v,v,v,v];super(t,t,i,s,l,c,d,p,m,h),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class qv extends Dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class rl extends ri{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],v=[],y=[];let g=0,M=0;b("z","y","x",-1,-1,s,i,t,d,c,0),b("z","y","x",1,-1,s,i,-t,d,c,1),b("x","z","y",1,1,t,s,i,l,d,2),b("x","z","y",1,-1,t,s,-i,l,d,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new si(h,3)),this.setAttribute("normal",new si(v,3)),this.setAttribute("uv",new si(y,2));function b(C,S,_,R,O,D,H,F,z,T,N){const pt=D/z,I=H/T,q=D/2,G=H/2,tt=F/2,J=z+1,P=T+1;let B=0,it=0;const ct=new at;for(let xt=0;xt<P;xt++){const U=xt*I-G;for(let Y=0;Y<J;Y++){const gt=Y*pt-q;ct[C]=gt*R,ct[S]=U*O,ct[_]=tt,h.push(ct.x,ct.y,ct.z),ct[C]=0,ct[S]=0,ct[_]=F>0?1:-1,v.push(ct.x,ct.y,ct.z),y.push(Y/z),y.push(1-xt/T),B+=1}}for(let xt=0;xt<T;xt++)for(let U=0;U<z;U++){const Y=g+U+J*xt,gt=g+U+J*(xt+1),Rt=g+(U+1)+J*(xt+1),wt=g+(U+1)+J*xt;m.push(Y,gt,wt),m.push(gt,Rt,wt),it+=6}p.addGroup(M,it,N),M+=it,g+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ol extends ri{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,v=m+1,y=t/p,g=i/m,M=[],b=[],C=[],S=[];for(let _=0;_<v;_++){const R=_*g-d;for(let O=0;O<h;O++){const D=O*y-c;b.push(D,-R,0),C.push(0,0,1),S.push(O/p),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let R=0;R<p;R++){const O=R+h*_,D=R+h*(_+1),H=R+1+h*(_+1),F=R+1+h*_;M.push(O,D,F),M.push(D,H,F)}this.setIndex(M),this.setAttribute("position",new si(b,3)),this.setAttribute("normal",new si(C,3)),this.setAttribute("uv",new si(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ol(t.width,t.height,t.widthSegments,t.heightSegments)}}function Wr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Bn(o){const t={};for(let i=0;i<o.length;i++){const s=Wr(o[i]);for(const l in s)t[l]=s[l]}return t}function eE(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function jv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const nE={clone:Wr,merge:Bn};var iE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iE,this.fragmentShader=aE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wr(t.uniforms),this.uniformsGroups=eE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class sE extends qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rE extends Yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class oE extends Yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Yv extends Un{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const rh=new $e,G_=new at,V_=new at;class lE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sp,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;G_.setFromMatrixPosition(t.matrixWorld),i.position.copy(G_),V_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(V_),i.updateMatrixWorld(),rh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rh,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===il||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(rh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const qc=new at,jc=new jr,Pi=new at;class Zv extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qc,jc,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qc,jc,Pi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(qc,jc,Pi),Pi.x===1&&Pi.y===1&&Pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qc,jc,Pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ts=new at,k_=new Ee,X_=new Ee;class ii extends Zv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ap*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Od*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ap*2*Math.atan(Math.tan(Od*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ts.x,ts.y).multiplyScalar(-t/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ts.x,ts.y).multiplyScalar(-t/ts.z)}getViewSize(t,i){return this.getViewBounds(t,k_,X_),i.subVectors(X_,k_)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Od*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class cE extends lE{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class uE extends Yv{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new cE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Kv extends Zv{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class fE extends Yv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Or=-90,Pr=1;class dE extends Un{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(Or,Pr,t,i);l.layers=this.layers,this.add(l);const c=new ii(Or,Pr,t,i);c.layers=this.layers,this.add(c);const d=new ii(Or,Pr,t,i);d.layers=this.layers,this.add(d);const p=new ii(Or,Pr,t,i);p.layers=this.layers,this.add(p);const m=new ii(Or,Pr,t,i);m.layers=this.layers,this.add(m);const h=new ii(Or,Pr,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(t===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===il)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,v]=this.children,y=t.getRenderTarget(),g=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let S=!1;t.isWebGLRenderer===!0?S=t.state.buffers.depth.getReversed():S=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(s,2,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),S&&t.autoClear===!1&&t.clearDepth(),t.render(i,v),t.setRenderTarget(y,g,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class hE extends ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class pE extends JM{constructor(t=10,i=10,s=4473924,l=8947848){s=new Ae(s),l=new Ae(l);const c=i/2,d=t/i,p=t/2,m=[],h=[];for(let g=0,M=0,b=-p;g<=i;g++,b+=d){m.push(-p,0,b,p,0,b),m.push(b,0,-p,b,0,p);const C=g===c?s:l;C.toArray(h,M),M+=3,C.toArray(h,M),M+=3,C.toArray(h,M),M+=3,C.toArray(h,M),M+=3}const v=new ri;v.setAttribute("position",new si(m,3)),v.setAttribute("color",new si(h,3));const y=new yp({vertexColors:!0,toneMapped:!1});super(v,y),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function W_(o,t,i,s){const l=mE(s);switch(i){case Nv:return o*t;case Ov:return o*t/l.components*l.byteLength;case dp:return o*t/l.components*l.byteLength;case kr:return o*t*2/l.components*l.byteLength;case hp:return o*t*2/l.components*l.byteLength;case Lv:return o*t*3/l.components*l.byteLength;case wi:return o*t*4/l.components*l.byteLength;case pp:return o*t*4/l.components*l.byteLength;case $c:case tu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case eu:case nu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ah:case Ch:return Math.max(o,16)*Math.max(t,8)/4;case Th:case Rh:return Math.max(o,8)*Math.max(t,8)/2;case wh:case Dh:case Nh:case Lh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Uh:case Oh:case Ph:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Fh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case zh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Bh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Ih:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Hh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Gh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Vh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case kh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Xh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case qh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case jh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Yh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Zh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Kh:case Qh:case Jh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case $h:case tp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case ep:case np:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function mE(o){switch(o){case ai:case Cv:return{byteLength:1,components:1};case el:case wv:case Sa:return{byteLength:2,components:1};case up:case fp:return{byteLength:2,components:4};case Xi:case cp:case Hi:return{byteLength:4,components:1};case Dv:case Uv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lp}}));typeof window<"u"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qv(){let o=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function gE(o){const t=new WeakMap;function i(p,m){const h=p.array,v=p.usage,y=h.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,h,v),p.onUploadCallback();let M;if(h instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=o.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=o.SHORT;else if(h instanceof Uint32Array)M=o.UNSIGNED_INT;else if(h instanceof Int32Array)M=o.INT;else if(h instanceof Int8Array)M=o.BYTE;else if(h instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:y}}function s(p,m,h){const v=m.array,y=m.updateRanges;if(o.bindBuffer(h,p),y.length===0)o.bufferSubData(h,0,v);else{y.sort((M,b)=>M.start-b.start);let g=0;for(let M=1;M<y.length;M++){const b=y[g],C=y[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++g,y[g]=C)}y.length=g+1;for(let M=0,b=y.length;M<b;M++){const C=y[M];o.bufferSubData(h,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(o.deleteBuffer(m.buffer),t.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=t.get(p);(!v||v.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var _E=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vE=`#ifdef USE_ALPHAHASH
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
#endif`,xE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ME=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,EE=`#ifdef USE_AOMAP
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
#endif`,bE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TE=`#ifdef USE_BATCHING
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
#endif`,AE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DE=`#ifdef USE_IRIDESCENCE
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
#endif`,UE=`#ifdef USE_BUMPMAP
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
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,BE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,IE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,HE=`#define PI 3.141592653589793
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
} // validated`,GE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VE=`vec3 transformedNormal = objectNormal;
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
#endif`,kE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jE="gl_FragColor = linearToOutputTexel( gl_FragColor );",YE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZE=`#ifdef USE_ENVMAP
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
#endif`,KE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,QE=`#ifdef USE_ENVMAP
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
#endif`,JE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$E=`#ifdef USE_ENVMAP
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
#endif`,tb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ab=`#ifdef USE_GRADIENTMAP
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
}`,sb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lb=`uniform bool receiveShadow;
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
#endif`,cb=`#ifdef USE_ENVMAP
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
#endif`,ub=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,db=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pb=`PhysicalMaterial material;
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
#endif`,mb=`uniform sampler2D dfgLUT;
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
}`,gb=`
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
#endif`,_b=`#if defined( RE_IndirectDiffuse )
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
#endif`,vb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Eb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ab=`#if defined( USE_POINTS_UV )
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
#endif`,Rb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Db=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ub=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nb=`#ifdef USE_MORPHTARGETS
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
#endif`,Lb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ob=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ib=`#ifdef USE_NORMALMAP
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
#endif`,Hb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$b=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eT=`float getShadowMask() {
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
}`,nT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iT=`#ifdef USE_SKINNING
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
#endif`,aT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sT=`#ifdef USE_SKINNING
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
#endif`,rT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uT=`#ifdef USE_TRANSMISSION
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
#endif`,fT=`#ifdef USE_TRANSMISSION
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
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_T=`uniform sampler2D t2D;
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
}`,vT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`#include <common>
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
}`,ET=`#if DEPTH_PACKING == 3200
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
}`,bT=`#define DISTANCE
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
}`,TT=`#define DISTANCE
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
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`uniform float scale;
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
}`,wT=`uniform vec3 diffuse;
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
}`,DT=`#include <common>
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
}`,UT=`uniform vec3 diffuse;
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
}`,NT=`#define LAMBERT
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
}`,LT=`#define LAMBERT
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
}`,OT=`#define MATCAP
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
}`,PT=`#define MATCAP
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
}`,FT=`#define NORMAL
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
}`,zT=`#define NORMAL
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
}`,BT=`#define PHONG
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
}`,IT=`#define PHONG
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
}`,HT=`#define STANDARD
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
}`,GT=`#define STANDARD
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
}`,VT=`#define TOON
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
}`,kT=`#define TOON
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
}`,XT=`uniform float size;
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
}`,WT=`uniform vec3 diffuse;
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
}`,qT=`#include <common>
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
}`,YT=`uniform float rotation;
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
}`,ZT=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:_E,alphahash_pars_fragment:vE,alphamap_fragment:xE,alphamap_pars_fragment:SE,alphatest_fragment:yE,alphatest_pars_fragment:ME,aomap_fragment:EE,aomap_pars_fragment:bE,batching_pars_vertex:TE,batching_vertex:AE,begin_vertex:RE,beginnormal_vertex:CE,bsdfs:wE,iridescence_fragment:DE,bumpmap_pars_fragment:UE,clipping_planes_fragment:NE,clipping_planes_pars_fragment:LE,clipping_planes_pars_vertex:OE,clipping_planes_vertex:PE,color_fragment:FE,color_pars_fragment:zE,color_pars_vertex:BE,color_vertex:IE,common:HE,cube_uv_reflection_fragment:GE,defaultnormal_vertex:VE,displacementmap_pars_vertex:kE,displacementmap_vertex:XE,emissivemap_fragment:WE,emissivemap_pars_fragment:qE,colorspace_fragment:jE,colorspace_pars_fragment:YE,envmap_fragment:ZE,envmap_common_pars_fragment:KE,envmap_pars_fragment:QE,envmap_pars_vertex:JE,envmap_physical_pars_fragment:cb,envmap_vertex:$E,fog_vertex:tb,fog_pars_vertex:eb,fog_fragment:nb,fog_pars_fragment:ib,gradientmap_pars_fragment:ab,lightmap_pars_fragment:sb,lights_lambert_fragment:rb,lights_lambert_pars_fragment:ob,lights_pars_begin:lb,lights_toon_fragment:ub,lights_toon_pars_fragment:fb,lights_phong_fragment:db,lights_phong_pars_fragment:hb,lights_physical_fragment:pb,lights_physical_pars_fragment:mb,lights_fragment_begin:gb,lights_fragment_maps:_b,lights_fragment_end:vb,logdepthbuf_fragment:xb,logdepthbuf_pars_fragment:Sb,logdepthbuf_pars_vertex:yb,logdepthbuf_vertex:Mb,map_fragment:Eb,map_pars_fragment:bb,map_particle_fragment:Tb,map_particle_pars_fragment:Ab,metalnessmap_fragment:Rb,metalnessmap_pars_fragment:Cb,morphinstance_vertex:wb,morphcolor_vertex:Db,morphnormal_vertex:Ub,morphtarget_pars_vertex:Nb,morphtarget_vertex:Lb,normal_fragment_begin:Ob,normal_fragment_maps:Pb,normal_pars_fragment:Fb,normal_pars_vertex:zb,normal_vertex:Bb,normalmap_pars_fragment:Ib,clearcoat_normal_fragment_begin:Hb,clearcoat_normal_fragment_maps:Gb,clearcoat_pars_fragment:Vb,iridescence_pars_fragment:kb,opaque_fragment:Xb,packing:Wb,premultiplied_alpha_fragment:qb,project_vertex:jb,dithering_fragment:Yb,dithering_pars_fragment:Zb,roughnessmap_fragment:Kb,roughnessmap_pars_fragment:Qb,shadowmap_pars_fragment:Jb,shadowmap_pars_vertex:$b,shadowmap_vertex:tT,shadowmask_pars_fragment:eT,skinbase_vertex:nT,skinning_pars_vertex:iT,skinning_vertex:aT,skinnormal_vertex:sT,specularmap_fragment:rT,specularmap_pars_fragment:oT,tonemapping_fragment:lT,tonemapping_pars_fragment:cT,transmission_fragment:uT,transmission_pars_fragment:fT,uv_pars_fragment:dT,uv_pars_vertex:hT,uv_vertex:pT,worldpos_vertex:mT,background_vert:gT,background_frag:_T,backgroundCube_vert:vT,backgroundCube_frag:xT,cube_vert:ST,cube_frag:yT,depth_vert:MT,depth_frag:ET,distance_vert:bT,distance_frag:TT,equirect_vert:AT,equirect_frag:RT,linedashed_vert:CT,linedashed_frag:wT,meshbasic_vert:DT,meshbasic_frag:UT,meshlambert_vert:NT,meshlambert_frag:LT,meshmatcap_vert:OT,meshmatcap_frag:PT,meshnormal_vert:FT,meshnormal_frag:zT,meshphong_vert:BT,meshphong_frag:IT,meshphysical_vert:HT,meshphysical_frag:GT,meshtoon_vert:VT,meshtoon_frag:kT,points_vert:XT,points_frag:WT,shadow_vert:qT,shadow_frag:jT,sprite_vert:YT,sprite_frag:ZT},Ft={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},zi={basic:{uniforms:Bn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:Bn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Ae(0)},envMapIntensity:{value:1}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:Bn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:Bn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:Bn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new Ae(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:Bn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:Bn([Ft.points,Ft.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:Bn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:Bn([Ft.common,Ft.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:Bn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:Bn([Ft.sprite,Ft.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:Bn([Ft.common,Ft.displacementmap,{referencePosition:{value:new at},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:Bn([Ft.lights,Ft.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};zi.physical={uniforms:Bn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};const Yc={r:0,b:0,g:0},ws=new Ma,KT=new $e;function QT(o,t,i,s,l,c){const d=new Ae(0);let p=l===!0?0:1,m,h,v=null,y=0,g=null;function M(R){let O=R.isScene===!0?R.background:null;if(O&&O.isTexture){const D=R.backgroundBlurriness>0;O=t.get(O,D)}return O}function b(R){let O=!1;const D=M(R);D===null?S(d,p):D&&D.isColor&&(S(D,1),O=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||O)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function C(R,O){const D=M(O);D&&(D.isCubeTexture||D.mapping===du)?(h===void 0&&(h=new Wi(new rl(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Wr(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(H,F,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ws.copy(O.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(KT.makeRotationFromEuler(ws)),h.material.toneMapped=Ue.getTransfer(D.colorSpace)!==Ve,(v!==D||y!==D.version||g!==o.toneMapping)&&(h.material.needsUpdate=!0,v=D,y=D.version,g=o.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Wi(new ol(2,2),new qi({name:"BackgroundMaterial",uniforms:Wr(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.toneMapped=Ue.getTransfer(D.colorSpace)!==Ve,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(v!==D||y!==D.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,v=D,y=D.version,g=o.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function S(R,O){R.getRGB(Yc,jv(o)),i.buffers.color.setClear(Yc.r,Yc.g,Yc.b,O,c)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(R,O=1){d.set(R),p=O,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,S(d,p)},render:b,addToRenderList:C,dispose:_}}function JT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(I,q,G,tt,J){let P=!1;const B=y(I,tt,G,q);c!==B&&(c=B,h(c.object)),P=M(I,tt,G,J),P&&b(I,tt,G,J),J!==null&&t.update(J,o.ELEMENT_ARRAY_BUFFER),(P||d)&&(d=!1,D(I,q,G,tt),J!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function m(){return o.createVertexArray()}function h(I){return o.bindVertexArray(I)}function v(I){return o.deleteVertexArray(I)}function y(I,q,G,tt){const J=tt.wireframe===!0;let P=s[q.id];P===void 0&&(P={},s[q.id]=P);const B=I.isInstancedMesh===!0?I.id:0;let it=P[B];it===void 0&&(it={},P[B]=it);let ct=it[G.id];ct===void 0&&(ct={},it[G.id]=ct);let xt=ct[J];return xt===void 0&&(xt=g(m()),ct[J]=xt),xt}function g(I){const q=[],G=[],tt=[];for(let J=0;J<i;J++)q[J]=0,G[J]=0,tt[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:G,attributeDivisors:tt,object:I,attributes:{},index:null}}function M(I,q,G,tt){const J=c.attributes,P=q.attributes;let B=0;const it=G.getAttributes();for(const ct in it)if(it[ct].location>=0){const U=J[ct];let Y=P[ct];if(Y===void 0&&(ct==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),ct==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor)),U===void 0||U.attribute!==Y||Y&&U.data!==Y.data)return!0;B++}return c.attributesNum!==B||c.index!==tt}function b(I,q,G,tt){const J={},P=q.attributes;let B=0;const it=G.getAttributes();for(const ct in it)if(it[ct].location>=0){let U=P[ct];U===void 0&&(ct==="instanceMatrix"&&I.instanceMatrix&&(U=I.instanceMatrix),ct==="instanceColor"&&I.instanceColor&&(U=I.instanceColor));const Y={};Y.attribute=U,U&&U.data&&(Y.data=U.data),J[ct]=Y,B++}c.attributes=J,c.attributesNum=B,c.index=tt}function C(){const I=c.newAttributes;for(let q=0,G=I.length;q<G;q++)I[q]=0}function S(I){_(I,0)}function _(I,q){const G=c.newAttributes,tt=c.enabledAttributes,J=c.attributeDivisors;G[I]=1,tt[I]===0&&(o.enableVertexAttribArray(I),tt[I]=1),J[I]!==q&&(o.vertexAttribDivisor(I,q),J[I]=q)}function R(){const I=c.newAttributes,q=c.enabledAttributes;for(let G=0,tt=q.length;G<tt;G++)q[G]!==I[G]&&(o.disableVertexAttribArray(G),q[G]=0)}function O(I,q,G,tt,J,P,B){B===!0?o.vertexAttribIPointer(I,q,G,J,P):o.vertexAttribPointer(I,q,G,tt,J,P)}function D(I,q,G,tt){C();const J=tt.attributes,P=G.getAttributes(),B=q.defaultAttributeValues;for(const it in P){const ct=P[it];if(ct.location>=0){let xt=J[it];if(xt===void 0&&(it==="instanceMatrix"&&I.instanceMatrix&&(xt=I.instanceMatrix),it==="instanceColor"&&I.instanceColor&&(xt=I.instanceColor)),xt!==void 0){const U=xt.normalized,Y=xt.itemSize,gt=t.get(xt);if(gt===void 0)continue;const Rt=gt.buffer,wt=gt.type,et=gt.bytesPerElement,k=wt===o.INT||wt===o.UNSIGNED_INT||xt.gpuType===cp;if(xt.isInterleavedBufferAttribute){const ut=xt.data,Mt=ut.stride,Lt=xt.offset;if(ut.isInstancedInterleavedBuffer){for(let Bt=0;Bt<ct.locationSize;Bt++)_(ct.location+Bt,ut.meshPerAttribute);I.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Bt=0;Bt<ct.locationSize;Bt++)S(ct.location+Bt);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let Bt=0;Bt<ct.locationSize;Bt++)O(ct.location+Bt,Y/ct.locationSize,wt,U,Mt*et,(Lt+Y/ct.locationSize*Bt)*et,k)}else{if(xt.isInstancedBufferAttribute){for(let ut=0;ut<ct.locationSize;ut++)_(ct.location+ut,xt.meshPerAttribute);I.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ut=0;ut<ct.locationSize;ut++)S(ct.location+ut);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let ut=0;ut<ct.locationSize;ut++)O(ct.location+ut,Y/ct.locationSize,wt,U,Y*et,Y/ct.locationSize*ut*et,k)}}else if(B!==void 0){const U=B[it];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(ct.location,U);break;case 3:o.vertexAttrib3fv(ct.location,U);break;case 4:o.vertexAttrib4fv(ct.location,U);break;default:o.vertexAttrib1fv(ct.location,U)}}}}R()}function H(){N();for(const I in s){const q=s[I];for(const G in q){const tt=q[G];for(const J in tt){const P=tt[J];for(const B in P)v(P[B].object),delete P[B];delete tt[J]}}delete s[I]}}function F(I){if(s[I.id]===void 0)return;const q=s[I.id];for(const G in q){const tt=q[G];for(const J in tt){const P=tt[J];for(const B in P)v(P[B].object),delete P[B];delete tt[J]}}delete s[I.id]}function z(I){for(const q in s){const G=s[q];for(const tt in G){const J=G[tt];if(J[I.id]===void 0)continue;const P=J[I.id];for(const B in P)v(P[B].object),delete P[B];delete J[I.id]}}}function T(I){for(const q in s){const G=s[q],tt=I.isInstancedMesh===!0?I.id:0,J=G[tt];if(J!==void 0){for(const P in J){const B=J[P];for(const it in B)v(B[it].object),delete B[it];delete J[P]}delete G[tt],Object.keys(G).length===0&&delete s[q]}}}function N(){pt(),d=!0,c!==l&&(c=l,h(c.object))}function pt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:N,resetDefaultState:pt,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:S,disableUnusedAttributes:R}}function $T(o,t,i){let s;function l(h){s=h}function c(h,v){o.drawArrays(s,h,v),i.update(v,s,1)}function d(h,v,y){y!==0&&(o.drawArraysInstanced(s,h,v,y),i.update(v,s,y))}function p(h,v,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,v,0,y);let M=0;for(let b=0;b<y;b++)M+=v[b];i.update(M,s,1)}function m(h,v,y,g){if(y===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<h.length;b++)d(h[b],v[b],g[b]);else{M.multiDrawArraysInstancedWEBGL(s,h,0,v,0,g,0,y);let b=0;for(let C=0;C<y;C++)b+=v[C]*g[C];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function t1(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(z){return!(z!==wi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(z){const T=z===Sa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==ai&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Hi&&!T)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const v=m(h);v!==h&&(le("WebGLRenderer:",h,"not supported, using",v,"instead."),h=v);const y=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),R=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=o.getParameter(o.MAX_SAMPLES),F=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:R,maxVaryings:O,maxFragmentUniforms:D,maxSamples:H,samples:F}}function e1(o){const t=this;let i=null,s=0,l=!1,c=!1;const d=new Us,p=new _e,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const M=y.length!==0||g||s!==0||l;return l=g,s=y.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,g){i=v(y,g,0)},this.setState=function(y,g,M){const b=y.clippingPlanes,C=y.clipIntersection,S=y.clipShadows,_=o.get(y);if(!l||b===null||b.length===0||c&&!S)c?v(null):h();else{const R=c?0:s,O=R*4;let D=_.clippingState||null;m.value=D,D=v(b,g,O,M);for(let H=0;H!==O;++H)D[H]=i[H];_.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(y,g,M,b){const C=y!==null?y.length:0;let S=null;if(C!==0){if(S=m.value,b!==!0||S===null){const _=M+C*4,R=g.matrixWorldInverse;p.getNormalMatrix(R),(S===null||S.length<_)&&(S=new Float32Array(_));for(let O=0,D=M;O!==C;++O,D+=4)d.copy(y[O]).applyMatrix4(R,p),d.normal.toArray(S,D),S[D+3]=d.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,S}}const ns=4,q_=[.125,.215,.35,.446,.526,.582],Ls=20,n1=256,Ko=new Kv,j_=new Ae;let oh=null,lh=0,ch=0,uh=!1;const i1=new at;class Y_{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=i1}=c;oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Q_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=K_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(oh,lh,ch),this._renderer.xr.enabled=uh,t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Fs||t.mapping===Vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),oh=this._renderer.getRenderTarget(),lh=this._renderer.getActiveCubeFace(),ch=this._renderer.getActiveMipmapLevel(),uh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:Sa,format:wi,colorSpace:Xr,depthBuffer:!1},l=Z_(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Z_(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=a1(c)),this._blurMaterial=r1(c,t,i),this._ggxMaterial=s1(c,t,i)}return l}_compileMaterial(t){const i=new Wi(new ri,t);this._renderer.compile(i,Ko)}_sceneToCubeUV(t,i,s,l,c){const m=new ii(90,1,i,s),h=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,M=y.toneMapping;y.getClearColor(j_),y.toneMapping=Vi,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(l),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Wi(new rl,new xp({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let _=!1;const R=t.background;R?R.isColor&&(S.color.copy(R),t.background=null,_=!0):(S.color.copy(j_),_=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(m.up.set(0,h[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[O],c.y,c.z)):D===1?(m.up.set(0,0,h[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[O],c.z)):(m.up.set(0,h[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[O]));const H=this._cubeSize;Fr(l,D*H,O>2?H:0,H,H),y.setRenderTarget(l),_&&y.render(C,m),y.render(t,m)}y.toneMapping=M,y.autoClear=g,t.background=R}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Fs||t.mapping===Vr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Q_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=K_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Fr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Ko)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),y=Math.sqrt(h*h-v*v),g=0+h*1.25,M=y*g,{_lodMax:b}=this,C=this._sizeLods[s],S=3*C*(s>b-ns?s-b+ns:0),_=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,Fr(c,S,_,3*C,2*C),l.setRenderTarget(c),l.render(p,Ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Fr(t,S,_,3*C,2*C),l.setRenderTarget(t),l.render(p,Ko)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const v=3,y=this._lodMeshes[l];y.material=h;const g=h.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ls-1),C=c/b,S=isFinite(c)?1+Math.floor(v*C):Ls;S>Ls&&le(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ls}`);const _=[];let R=0;for(let z=0;z<Ls;++z){const T=z/C,N=Math.exp(-T*T/2);_.push(N),z===0?R+=N:z<S&&(R+=2*N)}for(let z=0;z<_.length;z++)_[z]=_[z]/R;g.envMap.value=t.texture,g.samples.value=S,g.weights.value=_,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:O}=this;g.dTheta.value=b,g.mipInt.value=O-s;const D=this._sizeLods[l],H=3*D*(l>O-ns?l-O+ns:0),F=4*(this._cubeSize-D);Fr(i,H,F,3*D,2*D),m.setRenderTarget(i),m.render(y,Ko)}}function a1(o){const t=[],i=[],s=[];let l=o;const c=o-ns+1+q_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);t.push(p);let m=1/p;d>o-ns?m=q_[d-o+ns-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),v=-h,y=1+h,g=[v,v,y,v,y,y,v,v,y,y,v,y],M=6,b=6,C=3,S=2,_=1,R=new Float32Array(C*b*M),O=new Float32Array(S*b*M),D=new Float32Array(_*b*M);for(let F=0;F<M;F++){const z=F%3*2/3-1,T=F>2?0:-1,N=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];R.set(N,C*b*F),O.set(g,S*b*F);const pt=[F,F,F,F,F,F];D.set(pt,_*b*F)}const H=new ri;H.setAttribute("position",new vi(R,C)),H.setAttribute("uv",new vi(O,S)),H.setAttribute("faceIndex",new vi(D,_)),s.push(new Wi(H,null)),l>ns&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Z_(o,t,i){const s=new ki(o,t,i);return s.texture.mapping=du,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Fr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function s1(o,t,i){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pu(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function r1(o,t,i){const s=new Float32Array(Ls),l=new at(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:pu(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function K_(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

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
		`,blending:va,depthTest:!1,depthWrite:!1})}function Q_(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function pu(){return`

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
	`}class Jv extends ki{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Wv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new rl(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:Wr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:va});c.uniforms.tEquirect.value=i;const d=new Wi(l,c),p=i.minFilter;return i.minFilter===Os&&(i.minFilter=wn),new dE(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}function o1(o){let t=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?d(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===Ud||M===Nd)if(t.has(g)){const b=t.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const C=new Jv(b.height);return C.fromEquirectangularTexture(o,g),t.set(g,C),g.addEventListener("dispose",h),p(C.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const M=g.mapping,b=M===Ud||M===Nd,C=M===Fs||M===Vr;if(b||C){let S=i.get(g);const _=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return s===null&&(s=new Y_(o)),S=b?s.fromEquirectangular(g,S):s.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),S.texture;if(S!==void 0)return S.texture;{const R=g.image;return b&&R&&R.height>0||C&&R&&m(R)?(s===null&&(s=new Y_(o)),S=b?s.fromEquirectangular(g):s.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,i.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function p(g,M){return M===Ud?g.mapping=Fs:M===Nd&&(g.mapping=Vr),g}function m(g){let M=0;const b=6;for(let C=0;C<b;C++)g[C]!==void 0&&M++;return M===b}function h(g){const M=g.target;M.removeEventListener("dispose",h);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function y(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:y}}function l1(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&lu("WebGLRenderer: "+s+" extension not supported."),l}}}function c1(o,t,i,s){const l={},c=new WeakMap;function d(y){const g=y.target;g.index!==null&&t.remove(g.index);for(const b in g.attributes)t.remove(g.attributes[b]);g.removeEventListener("dispose",d),delete l[g.id];const M=c.get(g);M&&(t.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(y,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(y){const g=y.attributes;for(const M in g)t.update(g[M],o.ARRAY_BUFFER)}function h(y){const g=[],M=y.index,b=y.attributes.position;let C=0;if(b===void 0)return;if(M!==null){const R=M.array;C=M.version;for(let O=0,D=R.length;O<D;O+=3){const H=R[O+0],F=R[O+1],z=R[O+2];g.push(H,F,F,z,z,H)}}else{const R=b.array;C=b.version;for(let O=0,D=R.length/3-1;O<D;O+=3){const H=O+0,F=O+1,z=O+2;g.push(H,F,F,z,z,H)}}const S=new(b.count>=65535?Hv:Iv)(g,1);S.version=C;const _=c.get(y);_&&t.remove(_),c.set(y,S)}function v(y){const g=c.get(y);if(g){const M=y.index;M!==null&&g.version<M.version&&h(y)}else h(y);return c.get(y)}return{get:p,update:m,getWireframeAttribute:v}}function u1(o,t,i){let s;function l(g){s=g}let c,d;function p(g){c=g.type,d=g.bytesPerElement}function m(g,M){o.drawElements(s,M,c,g*d),i.update(M,s,1)}function h(g,M,b){b!==0&&(o.drawElementsInstanced(s,M,c,g*d,b),i.update(M,s,b))}function v(g,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,g,0,b);let S=0;for(let _=0;_<b;_++)S+=M[_];i.update(S,s,1)}function y(g,M,b,C){if(b===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<g.length;_++)h(g[_]/d,M[_],C[_]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,g,0,C,0,b);let _=0;for(let R=0;R<b;R++)_+=M[R]*C[R];i.update(_,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function f1(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:De("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function d1(o,t,i){const s=new WeakMap,l=new nn;function c(d,p,m){const h=d.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,y=v!==void 0?v.length:0;let g=s.get(p);if(g===void 0||g.count!==y){let pt=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",pt)};var M=pt;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,S=p.morphAttributes.color!==void 0,_=p.morphAttributes.position||[],R=p.morphAttributes.normal||[],O=p.morphAttributes.color||[];let D=0;b===!0&&(D=1),C===!0&&(D=2),S===!0&&(D=3);let H=p.attributes.position.count*D,F=1;H>t.maxTextureSize&&(F=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const z=new Float32Array(H*F*4*y),T=new Fv(z,H,F,y);T.type=Hi,T.needsUpdate=!0;const N=D*4;for(let I=0;I<y;I++){const q=_[I],G=R[I],tt=O[I],J=H*F*4*I;for(let P=0;P<q.count;P++){const B=P*N;b===!0&&(l.fromBufferAttribute(q,P),z[J+B+0]=l.x,z[J+B+1]=l.y,z[J+B+2]=l.z,z[J+B+3]=0),C===!0&&(l.fromBufferAttribute(G,P),z[J+B+4]=l.x,z[J+B+5]=l.y,z[J+B+6]=l.z,z[J+B+7]=0),S===!0&&(l.fromBufferAttribute(tt,P),z[J+B+8]=l.x,z[J+B+9]=l.y,z[J+B+10]=l.z,z[J+B+11]=tt.itemSize===4?l.w:1)}}g={count:y,texture:T,size:new Ee(H,F)},s.set(p,g),p.addEventListener("dispose",pt)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let b=0;for(let S=0;S<h.length;S++)b+=h[S];const C=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",h)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function h1(o,t,i,s,l){let c=new WeakMap;function d(h){const v=l.render.frame,y=h.geometry,g=t.get(h,y);if(c.get(g)!==v&&(t.update(g),c.set(g,v)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==v&&(i.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,o.ARRAY_BUFFER),c.set(h,v))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==v&&(M.update(),c.set(M,v))}return g}function p(){c=new WeakMap}function m(h){const v=h.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:d,dispose:p}}const p1={[Sv]:"LINEAR_TONE_MAPPING",[yv]:"REINHARD_TONE_MAPPING",[Mv]:"CINEON_TONE_MAPPING",[Ev]:"ACES_FILMIC_TONE_MAPPING",[Tv]:"AGX_TONE_MAPPING",[Av]:"NEUTRAL_TONE_MAPPING",[bv]:"CUSTOM_TONE_MAPPING"};function m1(o,t,i,s,l){const c=new ki(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),d=new ki(t,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),p=new ri;p.setAttribute("position",new si([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new si([0,2,0,0,2,0],2));const m=new sE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Wi(p,m),v=new Kv(-1,1,1,-1,0,1);let y=null,g=null,M=!1,b,C=null,S=[],_=!1;this.setSize=function(R,O){c.setSize(R,O),d.setSize(R,O);for(let D=0;D<S.length;D++){const H=S[D];H.setSize&&H.setSize(R,O)}},this.setEffects=function(R){S=R,_=S.length>0&&S[0].isRenderPass===!0;const O=c.width,D=c.height;for(let H=0;H<S.length;H++){const F=S[H];F.setSize&&F.setSize(O,D)}},this.begin=function(R,O){if(M||R.toneMapping===Vi&&S.length===0)return!1;if(C=O,O!==null){const D=O.width,H=O.height;(c.width!==D||c.height!==H)&&this.setSize(D,H)}return _===!1&&R.setRenderTarget(c),b=R.toneMapping,R.toneMapping=Vi,!0},this.hasRenderPass=function(){return _},this.end=function(R,O){R.toneMapping=b,M=!0;let D=c,H=d;for(let F=0;F<S.length;F++){const z=S[F];if(z.enabled!==!1&&(z.render(R,H,D,O),z.needsSwap!==!1)){const T=D;D=H,H=T}}if(y!==R.outputColorSpace||g!==R.toneMapping){y=R.outputColorSpace,g=R.toneMapping,m.defines={},Ue.getTransfer(y)===Ve&&(m.defines.SRGB_TRANSFER="");const F=p1[g];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,R.setRenderTarget(C),R.render(h,v),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const $v=new Dn,sp=new al(1,1),tx=new Fv,ex=new NM,nx=new Wv,J_=[],$_=[],tv=new Float32Array(16),ev=new Float32Array(9),nv=new Float32Array(4);function Zr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=J_[l];if(c===void 0&&(c=new Float32Array(l),J_[l]=c),t!==0){s.toArray(c,0);for(let d=1,p=0;d!==t;++d)p+=i,o[d].toArray(c,p)}return c}function _n(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function vn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function mu(o,t){let i=$_[t];i===void 0&&(i=new Int32Array(t),$_[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function g1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function _1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2fv(this.addr,t),vn(i,t)}}function v1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;o.uniform3fv(this.addr,t),vn(i,t)}}function x1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4fv(this.addr,t),vn(i,t)}}function S1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;nv.set(s),o.uniformMatrix2fv(this.addr,!1,nv),vn(i,s)}}function y1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;ev.set(s),o.uniformMatrix3fv(this.addr,!1,ev),vn(i,s)}}function M1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;tv.set(s),o.uniformMatrix4fv(this.addr,!1,tv),vn(i,s)}}function E1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function b1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2iv(this.addr,t),vn(i,t)}}function T1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;o.uniform3iv(this.addr,t),vn(i,t)}}function A1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4iv(this.addr,t),vn(i,t)}}function R1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function C1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2uiv(this.addr,t),vn(i,t)}}function w1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;o.uniform3uiv(this.addr,t),vn(i,t)}}function D1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4uiv(this.addr,t),vn(i,t)}}function U1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(sp.compareFunction=i.isReversedDepthBuffer()?gp:mp,c=sp):c=$v,i.setTexture2D(t||c,l)}function N1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||ex,l)}function L1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||nx,l)}function O1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||tx,l)}function P1(o){switch(o){case 5126:return g1;case 35664:return _1;case 35665:return v1;case 35666:return x1;case 35674:return S1;case 35675:return y1;case 35676:return M1;case 5124:case 35670:return E1;case 35667:case 35671:return b1;case 35668:case 35672:return T1;case 35669:case 35673:return A1;case 5125:return R1;case 36294:return C1;case 36295:return w1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return N1;case 35680:case 36300:case 36308:case 36293:return L1;case 36289:case 36303:case 36311:case 36292:return O1}}function F1(o,t){o.uniform1fv(this.addr,t)}function z1(o,t){const i=Zr(t,this.size,2);o.uniform2fv(this.addr,i)}function B1(o,t){const i=Zr(t,this.size,3);o.uniform3fv(this.addr,i)}function I1(o,t){const i=Zr(t,this.size,4);o.uniform4fv(this.addr,i)}function H1(o,t){const i=Zr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function G1(o,t){const i=Zr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function V1(o,t){const i=Zr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function k1(o,t){o.uniform1iv(this.addr,t)}function X1(o,t){o.uniform2iv(this.addr,t)}function W1(o,t){o.uniform3iv(this.addr,t)}function q1(o,t){o.uniform4iv(this.addr,t)}function j1(o,t){o.uniform1uiv(this.addr,t)}function Y1(o,t){o.uniform2uiv(this.addr,t)}function Z1(o,t){o.uniform3uiv(this.addr,t)}function K1(o,t){o.uniform4uiv(this.addr,t)}function Q1(o,t,i){const s=this.cache,l=t.length,c=mu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=sp:d=$v;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||d,c[p])}function J1(o,t,i){const s=this.cache,l=t.length,c=mu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||ex,c[d])}function $1(o,t,i){const s=this.cache,l=t.length,c=mu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||nx,c[d])}function tA(o,t,i){const s=this.cache,l=t.length,c=mu(i,l);_n(s,c)||(o.uniform1iv(this.addr,c),vn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||tx,c[d])}function eA(o){switch(o){case 5126:return F1;case 35664:return z1;case 35665:return B1;case 35666:return I1;case 35674:return H1;case 35675:return G1;case 35676:return V1;case 5124:case 35670:return k1;case 35667:case 35671:return X1;case 35668:case 35672:return W1;case 35669:case 35673:return q1;case 5125:return j1;case 36294:return Y1;case 36295:return Z1;case 36296:return K1;case 35678:case 36198:case 36298:case 36306:case 35682:return Q1;case 35679:case 36299:case 36307:return J1;case 35680:case 36300:case 36308:case 36293:return $1;case 36289:case 36303:case 36311:case 36292:return tA}}class nA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=P1(i.type)}}class iA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=eA(i.type)}}class aA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const fh=/(\w+)(\])?(\[|\.)?/g;function iv(o,t){o.seq.push(t),o.map[t.id]=t}function sA(o,t,i){const s=o.name,l=s.length;for(fh.lastIndex=0;;){const c=fh.exec(s),d=fh.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){iv(i,h===void 0?new nA(p,o,t):new iA(p,o,t));break}else{let y=i.map[p];y===void 0&&(y=new aA(p),iv(i,y)),i=y}}}class iu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=t.getActiveUniform(i,d),m=t.getUniformLocation(i,p.name);sA(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===t.SAMPLER_2D_SHADOW||d.type===t.SAMPLER_CUBE_SHADOW||d.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function av(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const rA=37297;let oA=0;function lA(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const sv=new _e;function cA(o){Ue._getMatrix(sv,Ue.workingColorSpace,o);const t=`mat3( ${sv.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(o)){case su:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function rv(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+lA(o.getShaderSource(t),p)}else return c}function uA(o,t){const i=cA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const fA={[Sv]:"Linear",[yv]:"Reinhard",[Mv]:"Cineon",[Ev]:"ACESFilmic",[Tv]:"AgX",[Av]:"Neutral",[bv]:"Custom"};function dA(o,t){const i=fA[t];return i===void 0?(le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Zc=new at;function hA(){Ue.getLuminanceCoefficients(Zc);const o=Zc.x.toFixed(4),t=Zc.y.toFixed(4),i=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tl).join(`
`)}function mA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function gA(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),d=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:p}}return i}function tl(o){return o!==""}function ov(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _A=/^[ \t]*#include +<([\w\d./]+)>/gm;function rp(o){return o.replace(_A,xA)}const vA=new Map;function xA(o,t){let i=ve[t];if(i===void 0){const s=vA.get(t);if(s!==void 0)i=ve[s],le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return rp(i)}const SA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cv(o){return o.replace(SA,yA)}function yA(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function uv(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}const MA={[Jc]:"SHADOWMAP_TYPE_PCF",[$o]:"SHADOWMAP_TYPE_VSM"};function EA(o){return MA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const bA={[Fs]:"ENVMAP_TYPE_CUBE",[Vr]:"ENVMAP_TYPE_CUBE",[du]:"ENVMAP_TYPE_CUBE_UV"};function TA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":bA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const AA={[Vr]:"ENVMAP_MODE_REFRACTION"};function RA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":AA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const CA={[xv]:"ENVMAP_BLENDING_MULTIPLY",[uM]:"ENVMAP_BLENDING_MIX",[fM]:"ENVMAP_BLENDING_ADD"};function wA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":CA[o.combine]||"ENVMAP_BLENDING_NONE"}function DA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function UA(o,t,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=EA(i),h=TA(i),v=RA(i),y=wA(i),g=DA(i),M=pA(i),b=mA(c),C=l.createProgram();let S,_,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(tl).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(tl).join(`
`),_.length>0&&(_+=`
`)):(S=[uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tl).join(`
`),_=[uv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+v:"",i.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Vi?"#define TONE_MAPPING":"",i.toneMapping!==Vi?ve.tonemapping_pars_fragment:"",i.toneMapping!==Vi?dA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,uA("linearToOutputTexel",i.outputColorSpace),hA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(tl).join(`
`)),d=rp(d),d=ov(d,i),d=lv(d,i),p=rp(p),p=ov(p,i),p=lv(p,i),d=cv(d),p=cv(p),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===x_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===x_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=R+S+d,D=R+_+p,H=av(l,l.VERTEX_SHADER,O),F=av(l,l.FRAGMENT_SHADER,D);l.attachShader(C,H),l.attachShader(C,F),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(I){if(o.debug.checkShaderErrors){const q=l.getProgramInfoLog(C)||"",G=l.getShaderInfoLog(H)||"",tt=l.getShaderInfoLog(F)||"",J=q.trim(),P=G.trim(),B=tt.trim();let it=!0,ct=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(it=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,H,F);else{const xt=rv(l,H,"vertex"),U=rv(l,F,"fragment");De("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+J+`
`+xt+`
`+U)}else J!==""?le("WebGLProgram: Program Info Log:",J):(P===""||B==="")&&(ct=!1);ct&&(I.diagnostics={runnable:it,programLog:J,vertexShader:{log:P,prefix:S},fragmentShader:{log:B,prefix:_}})}l.deleteShader(H),l.deleteShader(F),T=new iu(l,C),N=gA(l,C)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let N;this.getAttributes=function(){return N===void 0&&z(this),N};let pt=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return pt===!1&&(pt=l.getProgramParameter(C,rA)),pt},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=oA++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=H,this.fragmentShader=F,this}let NA=0;class LA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new OA(t),i.set(t,s)),s}}class OA{constructor(t){this.id=NA++,this.code=t,this.usedTimes=0}}function PA(o,t,i,s,l,c){const d=new zv,p=new LA,m=new Set,h=[],v=new Map,y=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function C(T,N,pt,I,q){const G=I.fog,tt=q.geometry,J=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?I.environment:null,P=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,B=t.get(T.envMap||J,P),it=B&&B.mapping===du?B.image.height:null,ct=M[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&le("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const xt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,U=xt!==void 0?xt.length:0;let Y=0;tt.morphAttributes.position!==void 0&&(Y=1),tt.morphAttributes.normal!==void 0&&(Y=2),tt.morphAttributes.color!==void 0&&(Y=3);let gt,Rt,wt,et;if(ct){const we=zi[ct];gt=we.vertexShader,Rt=we.fragmentShader}else gt=T.vertexShader,Rt=T.fragmentShader,p.update(T),wt=p.getVertexShaderID(T),et=p.getFragmentShaderID(T);const k=o.getRenderTarget(),ut=o.state.buffers.depth.getReversed(),Mt=q.isInstancedMesh===!0,Lt=q.isBatchedMesh===!0,Bt=!!T.map,te=!!T.matcap,ie=!!B,se=!!T.aoMap,ue=!!T.lightMap,Qt=!!T.bumpMap,xe=!!T.normalMap,X=!!T.displacementMap,Ne=!!T.emissiveMap,Se=!!T.metalnessMap,Le=!!T.roughnessMap,Wt=T.anisotropy>0,L=T.clearcoat>0,E=T.dispersion>0,Q=T.iridescence>0,vt=T.sheen>0,bt=T.transmission>0,ht=Wt&&!!T.anisotropyMap,qt=L&&!!T.clearcoatMap,Ut=L&&!!T.clearcoatNormalMap,$t=L&&!!T.clearcoatRoughnessMap,ee=Q&&!!T.iridescenceMap,At=Q&&!!T.iridescenceThicknessMap,Tt=vt&&!!T.sheenColorMap,It=vt&&!!T.sheenRoughnessMap,zt=!!T.specularMap,Ht=!!T.specularColorMap,pe=!!T.specularIntensityMap,K=bt&&!!T.transmissionMap,Nt=bt&&!!T.thicknessMap,Dt=!!T.gradientMap,Gt=!!T.alphaMap,Ct=T.alphaTest>0,mt=!!T.alphaHash,kt=!!T.extensions;let oe=Vi;T.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(oe=o.toneMapping);const Ie={shaderID:ct,shaderType:T.type,shaderName:T.name,vertexShader:gt,fragmentShader:Rt,defines:T.defines,customVertexShaderID:wt,customFragmentShaderID:et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Lt,batchingColor:Lt&&q._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&q.instanceColor!==null,instancingMorph:Mt&&q.morphTexture!==null,outputColorSpace:k===null?o.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Xr,alphaToCoverage:!!T.alphaToCoverage,map:Bt,matcap:te,envMap:ie,envMapMode:ie&&B.mapping,envMapCubeUVHeight:it,aoMap:se,lightMap:ue,bumpMap:Qt,normalMap:xe,displacementMap:X,emissiveMap:Ne,normalMapObjectSpace:xe&&T.normalMapType===mM,normalMapTangentSpace:xe&&T.normalMapType===pM,metalnessMap:Se,roughnessMap:Le,anisotropy:Wt,anisotropyMap:ht,clearcoat:L,clearcoatMap:qt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:$t,dispersion:E,iridescence:Q,iridescenceMap:ee,iridescenceThicknessMap:At,sheen:vt,sheenColorMap:Tt,sheenRoughnessMap:It,specularMap:zt,specularColorMap:Ht,specularIntensityMap:pe,transmission:bt,transmissionMap:K,thicknessMap:Nt,gradientMap:Dt,opaque:T.transparent===!1&&T.blending===Ir&&T.alphaToCoverage===!1,alphaMap:Gt,alphaTest:Ct,alphaHash:mt,combine:T.combine,mapUv:Bt&&b(T.map.channel),aoMapUv:se&&b(T.aoMap.channel),lightMapUv:ue&&b(T.lightMap.channel),bumpMapUv:Qt&&b(T.bumpMap.channel),normalMapUv:xe&&b(T.normalMap.channel),displacementMapUv:X&&b(T.displacementMap.channel),emissiveMapUv:Ne&&b(T.emissiveMap.channel),metalnessMapUv:Se&&b(T.metalnessMap.channel),roughnessMapUv:Le&&b(T.roughnessMap.channel),anisotropyMapUv:ht&&b(T.anisotropyMap.channel),clearcoatMapUv:qt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$t&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:At&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:It&&b(T.sheenRoughnessMap.channel),specularMapUv:zt&&b(T.specularMap.channel),specularColorMapUv:Ht&&b(T.specularColorMap.channel),specularIntensityMapUv:pe&&b(T.specularIntensityMap.channel),transmissionMapUv:K&&b(T.transmissionMap.channel),thicknessMapUv:Nt&&b(T.thicknessMap.channel),alphaMapUv:Gt&&b(T.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(xe||Wt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!tt.attributes.uv&&(Bt||Gt),fog:!!G,useFog:T.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||tt.attributes.normal===void 0&&xe===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:ut,skinning:q.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:Y,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&pt.length>0,shadowMapType:o.shadowMap.type,toneMapping:oe,decodeVideoTexture:Bt&&T.map.isVideoTexture===!0&&Ue.getTransfer(T.map.colorSpace)===Ve,decodeVideoTextureEmissive:Ne&&T.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(T.emissiveMap.colorSpace)===Ve,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Bi,flipSided:T.side===Wn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:kt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&T.extensions.multiDraw===!0||Lt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ie.vertexUv1s=m.has(1),Ie.vertexUv2s=m.has(2),Ie.vertexUv3s=m.has(3),m.clear(),Ie}function S(T){const N=[];if(T.shaderID?N.push(T.shaderID):(N.push(T.customVertexShaderID),N.push(T.customFragmentShaderID)),T.defines!==void 0)for(const pt in T.defines)N.push(pt),N.push(T.defines[pt]);return T.isRawShaderMaterial===!1&&(_(N,T),R(N,T),N.push(o.outputColorSpace)),N.push(T.customProgramCacheKey),N.join()}function _(T,N){T.push(N.precision),T.push(N.outputColorSpace),T.push(N.envMapMode),T.push(N.envMapCubeUVHeight),T.push(N.mapUv),T.push(N.alphaMapUv),T.push(N.lightMapUv),T.push(N.aoMapUv),T.push(N.bumpMapUv),T.push(N.normalMapUv),T.push(N.displacementMapUv),T.push(N.emissiveMapUv),T.push(N.metalnessMapUv),T.push(N.roughnessMapUv),T.push(N.anisotropyMapUv),T.push(N.clearcoatMapUv),T.push(N.clearcoatNormalMapUv),T.push(N.clearcoatRoughnessMapUv),T.push(N.iridescenceMapUv),T.push(N.iridescenceThicknessMapUv),T.push(N.sheenColorMapUv),T.push(N.sheenRoughnessMapUv),T.push(N.specularMapUv),T.push(N.specularColorMapUv),T.push(N.specularIntensityMapUv),T.push(N.transmissionMapUv),T.push(N.thicknessMapUv),T.push(N.combine),T.push(N.fogExp2),T.push(N.sizeAttenuation),T.push(N.morphTargetsCount),T.push(N.morphAttributeCount),T.push(N.numDirLights),T.push(N.numPointLights),T.push(N.numSpotLights),T.push(N.numSpotLightMaps),T.push(N.numHemiLights),T.push(N.numRectAreaLights),T.push(N.numDirLightShadows),T.push(N.numPointLightShadows),T.push(N.numSpotLightShadows),T.push(N.numSpotLightShadowsWithMaps),T.push(N.numLightProbes),T.push(N.shadowMapType),T.push(N.toneMapping),T.push(N.numClippingPlanes),T.push(N.numClipIntersection),T.push(N.depthPacking)}function R(T,N){d.disableAll(),N.instancing&&d.enable(0),N.instancingColor&&d.enable(1),N.instancingMorph&&d.enable(2),N.matcap&&d.enable(3),N.envMap&&d.enable(4),N.normalMapObjectSpace&&d.enable(5),N.normalMapTangentSpace&&d.enable(6),N.clearcoat&&d.enable(7),N.iridescence&&d.enable(8),N.alphaTest&&d.enable(9),N.vertexColors&&d.enable(10),N.vertexAlphas&&d.enable(11),N.vertexUv1s&&d.enable(12),N.vertexUv2s&&d.enable(13),N.vertexUv3s&&d.enable(14),N.vertexTangents&&d.enable(15),N.anisotropy&&d.enable(16),N.alphaHash&&d.enable(17),N.batching&&d.enable(18),N.dispersion&&d.enable(19),N.batchingColor&&d.enable(20),N.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reversedDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),T.push(d.mask)}function O(T){const N=M[T.type];let pt;if(N){const I=zi[N];pt=nE.clone(I.uniforms)}else pt=T.uniforms;return pt}function D(T,N){let pt=v.get(N);return pt!==void 0?++pt.usedTimes:(pt=new UA(o,N,T,l),h.push(pt),v.set(N,pt)),pt}function H(T){if(--T.usedTimes===0){const N=h.indexOf(T);h[N]=h[h.length-1],h.pop(),v.delete(T.cacheKey),T.destroy()}}function F(T){p.remove(T)}function z(){p.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:O,acquireProgram:D,releaseProgram:H,releaseShaderCache:F,programs:h,dispose:z}}function FA(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function s(d){o.delete(d)}function l(d,p,m){o.get(d)[p]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function zA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function fv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function dv(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,b,C,S,_){let R=o[t];return R===void 0?(R={id:g.id,object:g,geometry:M,material:b,materialVariant:d(g),groupOrder:C,renderOrder:g.renderOrder,z:S,group:_},o[t]=R):(R.id=g.id,R.object=g,R.geometry=M,R.material=b,R.materialVariant=d(g),R.groupOrder=C,R.renderOrder=g.renderOrder,R.z=S,R.group=_),t++,R}function m(g,M,b,C,S,_){const R=p(g,M,b,C,S,_);b.transmission>0?s.push(R):b.transparent===!0?l.push(R):i.push(R)}function h(g,M,b,C,S,_){const R=p(g,M,b,C,S,_);b.transmission>0?s.unshift(R):b.transparent===!0?l.unshift(R):i.unshift(R)}function v(g,M){i.length>1&&i.sort(g||zA),s.length>1&&s.sort(M||fv),l.length>1&&l.sort(M||fv)}function y(){for(let g=t,M=o.length;g<M;g++){const b=o[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:y,sort:v}}function BA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let d;return c===void 0?(d=new dv,o.set(s,[d])):l>=c.length?(d=new dv,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function IA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new at,color:new Ae};break;case"SpotLight":i={position:new at,direction:new at,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new at,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":i={direction:new at,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":i={color:new Ae,position:new at,halfWidth:new at,halfHeight:new at};break}return o[t.id]=i,i}}}function HA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let GA=0;function VA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function kA(o){const t=new IA,i=HA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new at);const l=new at,c=new $e,d=new $e;function p(h){let v=0,y=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let M=0,b=0,C=0,S=0,_=0,R=0,O=0,D=0,H=0,F=0,z=0;h.sort(VA);for(let N=0,pt=h.length;N<pt;N++){const I=h[N],q=I.color,G=I.intensity,tt=I.distance;let J=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===kr?J=I.shadow.map.texture:J=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)v+=q.r*G,y+=q.g*G,g+=q.b*G;else if(I.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(I.sh.coefficients[P],G);z++}else if(I.isDirectionalLight){const P=t.get(I);if(P.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const B=I.shadow,it=i.get(I);it.shadowIntensity=B.intensity,it.shadowBias=B.bias,it.shadowNormalBias=B.normalBias,it.shadowRadius=B.radius,it.shadowMapSize=B.mapSize,s.directionalShadow[M]=it,s.directionalShadowMap[M]=J,s.directionalShadowMatrix[M]=I.shadow.matrix,R++}s.directional[M]=P,M++}else if(I.isSpotLight){const P=t.get(I);P.position.setFromMatrixPosition(I.matrixWorld),P.color.copy(q).multiplyScalar(G),P.distance=tt,P.coneCos=Math.cos(I.angle),P.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),P.decay=I.decay,s.spot[C]=P;const B=I.shadow;if(I.map&&(s.spotLightMap[H]=I.map,H++,B.updateMatrices(I),I.castShadow&&F++),s.spotLightMatrix[C]=B.matrix,I.castShadow){const it=i.get(I);it.shadowIntensity=B.intensity,it.shadowBias=B.bias,it.shadowNormalBias=B.normalBias,it.shadowRadius=B.radius,it.shadowMapSize=B.mapSize,s.spotShadow[C]=it,s.spotShadowMap[C]=J,D++}C++}else if(I.isRectAreaLight){const P=t.get(I);P.color.copy(q).multiplyScalar(G),P.halfWidth.set(I.width*.5,0,0),P.halfHeight.set(0,I.height*.5,0),s.rectArea[S]=P,S++}else if(I.isPointLight){const P=t.get(I);if(P.color.copy(I.color).multiplyScalar(I.intensity),P.distance=I.distance,P.decay=I.decay,I.castShadow){const B=I.shadow,it=i.get(I);it.shadowIntensity=B.intensity,it.shadowBias=B.bias,it.shadowNormalBias=B.normalBias,it.shadowRadius=B.radius,it.shadowMapSize=B.mapSize,it.shadowCameraNear=B.camera.near,it.shadowCameraFar=B.camera.far,s.pointShadow[b]=it,s.pointShadowMap[b]=J,s.pointShadowMatrix[b]=I.shadow.matrix,O++}s.point[b]=P,b++}else if(I.isHemisphereLight){const P=t.get(I);P.skyColor.copy(I.color).multiplyScalar(G),P.groundColor.copy(I.groundColor).multiplyScalar(G),s.hemi[_]=P,_++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ft.LTC_FLOAT_1,s.rectAreaLTC2=Ft.LTC_FLOAT_2):(s.rectAreaLTC1=Ft.LTC_HALF_1,s.rectAreaLTC2=Ft.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=y,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==C||T.rectAreaLength!==S||T.hemiLength!==_||T.numDirectionalShadows!==R||T.numPointShadows!==O||T.numSpotShadows!==D||T.numSpotMaps!==H||T.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=S,s.point.length=b,s.hemi.length=_,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+H-F,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=z,T.directionalLength=M,T.pointLength=b,T.spotLength=C,T.rectAreaLength=S,T.hemiLength=_,T.numDirectionalShadows=R,T.numPointShadows=O,T.numSpotShadows=D,T.numSpotMaps=H,T.numLightProbes=z,s.version=GA++)}function m(h,v){let y=0,g=0,M=0,b=0,C=0;const S=v.matrixWorldInverse;for(let _=0,R=h.length;_<R;_++){const O=h[_];if(O.isDirectionalLight){const D=s.directional[y];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),y++}else if(O.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),M++}else if(O.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(S),d.identity(),c.copy(O.matrixWorld),c.premultiply(S),d.extractRotation(c),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),b++}else if(O.isPointLight){const D=s.point[g];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(S),g++}else if(O.isHemisphereLight){const D=s.hemi[C];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(S),C++}}}return{setup:p,setupView:m,state:s}}function hv(o){const t=new kA(o),i=[],s=[];function l(v){h.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function d(v){s.push(v)}function p(){t.setup(i)}function m(v){t.setupView(i,v)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function XA(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let p;return d===void 0?(p=new hv(o),t.set(l,[p])):c>=d.length?(p=new hv(o),d.push(p)):p=d[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const WA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qA=`uniform sampler2D shadow_pass;
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
}`,jA=[new at(1,0,0),new at(-1,0,0),new at(0,1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1)],YA=[new at(0,-1,0),new at(0,-1,0),new at(0,0,1),new at(0,0,-1),new at(0,-1,0),new at(0,-1,0)],pv=new $e,Qo=new at,dh=new at;function ZA(o,t,i){let s=new Sp;const l=new Ee,c=new Ee,d=new nn,p=new rE,m=new oE,h={},v=i.maxTextureSize,y={[as]:Wn,[Wn]:as,[Bi]:Bi},g=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:WA,fragmentShader:qA}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new ri;b.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Wi(b,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jc;let _=this.type;this.render=function(F,z,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;this.type===Wy&&(le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Jc);const N=o.getRenderTarget(),pt=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),q=o.state;q.setBlending(va),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const G=_!==this.type;G&&z.traverse(function(tt){tt.material&&(Array.isArray(tt.material)?tt.material.forEach(J=>J.needsUpdate=!0):tt.material.needsUpdate=!0)});for(let tt=0,J=F.length;tt<J;tt++){const P=F[tt],B=P.shadow;if(B===void 0){le("WebGLShadowMap:",P,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const it=B.getFrameExtents();l.multiply(it),c.copy(B.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/it.x),l.x=c.x*it.x,B.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/it.y),l.y=c.y*it.y,B.mapSize.y=c.y));const ct=o.state.buffers.depth.getReversed();if(B.camera._reversedDepth=ct,B.map===null||G===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===$o){if(P.isPointLight){le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ki(l.x,l.y,{format:kr,type:Sa,minFilter:wn,magFilter:wn,generateMipmaps:!1}),B.map.texture.name=P.name+".shadowMap",B.map.depthTexture=new al(l.x,l.y,Hi),B.map.depthTexture.name=P.name+".shadowMapDepth",B.map.depthTexture.format=ya,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Tn,B.map.depthTexture.magFilter=Tn}else P.isPointLight?(B.map=new Jv(l.x),B.map.depthTexture=new tE(l.x,Xi)):(B.map=new ki(l.x,l.y),B.map.depthTexture=new al(l.x,l.y,Xi)),B.map.depthTexture.name=P.name+".shadowMap",B.map.depthTexture.format=ya,this.type===Jc?(B.map.depthTexture.compareFunction=ct?gp:mp,B.map.depthTexture.minFilter=wn,B.map.depthTexture.magFilter=wn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Tn,B.map.depthTexture.magFilter=Tn);B.camera.updateProjectionMatrix()}const xt=B.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<xt;U++){if(B.map.isWebGLCubeRenderTarget)o.setRenderTarget(B.map,U),o.clear();else{U===0&&(o.setRenderTarget(B.map),o.clear());const Y=B.getViewport(U);d.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),q.viewport(d)}if(P.isPointLight){const Y=B.camera,gt=B.matrix,Rt=P.distance||Y.far;Rt!==Y.far&&(Y.far=Rt,Y.updateProjectionMatrix()),Qo.setFromMatrixPosition(P.matrixWorld),Y.position.copy(Qo),dh.copy(Y.position),dh.add(jA[U]),Y.up.copy(YA[U]),Y.lookAt(dh),Y.updateMatrixWorld(),gt.makeTranslation(-Qo.x,-Qo.y,-Qo.z),pv.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),B._frustum.setFromProjectionMatrix(pv,Y.coordinateSystem,Y.reversedDepth)}else B.updateMatrices(P);s=B.getFrustum(),D(z,T,B.camera,P,this.type)}B.isPointLightShadow!==!0&&this.type===$o&&R(B,T),B.needsUpdate=!1}_=this.type,S.needsUpdate=!1,o.setRenderTarget(N,pt,I)};function R(F,z){const T=t.update(C);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ki(l.x,l.y,{format:kr,type:Sa})),g.uniforms.shadow_pass.value=F.map.depthTexture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(z,null,T,g,C,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(z,null,T,M,C,null)}function O(F,z,T,N){let pt=null;const I=T.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(I!==void 0)pt=I;else if(pt=T.isPointLight===!0?m:p,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const q=pt.uuid,G=z.uuid;let tt=h[q];tt===void 0&&(tt={},h[q]=tt);let J=tt[G];J===void 0&&(J=pt.clone(),tt[G]=J,z.addEventListener("dispose",H)),pt=J}if(pt.visible=z.visible,pt.wireframe=z.wireframe,N===$o?pt.side=z.shadowSide!==null?z.shadowSide:z.side:pt.side=z.shadowSide!==null?z.shadowSide:y[z.side],pt.alphaMap=z.alphaMap,pt.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,pt.map=z.map,pt.clipShadows=z.clipShadows,pt.clippingPlanes=z.clippingPlanes,pt.clipIntersection=z.clipIntersection,pt.displacementMap=z.displacementMap,pt.displacementScale=z.displacementScale,pt.displacementBias=z.displacementBias,pt.wireframeLinewidth=z.wireframeLinewidth,pt.linewidth=z.linewidth,T.isPointLight===!0&&pt.isMeshDistanceMaterial===!0){const q=o.properties.get(pt);q.light=T}return pt}function D(F,z,T,N,pt){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&pt===$o)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,F.matrixWorld);const G=t.update(F),tt=F.material;if(Array.isArray(tt)){const J=G.groups;for(let P=0,B=J.length;P<B;P++){const it=J[P],ct=tt[it.materialIndex];if(ct&&ct.visible){const xt=O(F,ct,N,pt);F.onBeforeShadow(o,F,z,T,G,xt,it),o.renderBufferDirect(T,null,G,xt,F,it),F.onAfterShadow(o,F,z,T,G,xt,it)}}}else if(tt.visible){const J=O(F,tt,N,pt);F.onBeforeShadow(o,F,z,T,G,J,null),o.renderBufferDirect(T,null,G,J,F,null),F.onAfterShadow(o,F,z,T,G,J,null)}}const q=F.children;for(let G=0,tt=q.length;G<tt;G++)D(q[G],z,T,N,pt)}function H(F){F.target.removeEventListener("dispose",H);for(const T in h){const N=h[T],pt=F.target.uuid;pt in N&&(N[pt].dispose(),delete N[pt])}}}function KA(o,t){function i(){let K=!1;const Nt=new nn;let Dt=null;const Gt=new nn(0,0,0,0);return{setMask:function(Ct){Dt!==Ct&&!K&&(o.colorMask(Ct,Ct,Ct,Ct),Dt=Ct)},setLocked:function(Ct){K=Ct},setClear:function(Ct,mt,kt,oe,Ie){Ie===!0&&(Ct*=oe,mt*=oe,kt*=oe),Nt.set(Ct,mt,kt,oe),Gt.equals(Nt)===!1&&(o.clearColor(Ct,mt,kt,oe),Gt.copy(Nt))},reset:function(){K=!1,Dt=null,Gt.set(-1,0,0,0)}}}function s(){let K=!1,Nt=!1,Dt=null,Gt=null,Ct=null;return{setReversed:function(mt){if(Nt!==mt){const kt=t.get("EXT_clip_control");mt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),Nt=mt;const oe=Ct;Ct=null,this.setClear(oe)}},getReversed:function(){return Nt},setTest:function(mt){mt?k(o.DEPTH_TEST):ut(o.DEPTH_TEST)},setMask:function(mt){Dt!==mt&&!K&&(o.depthMask(mt),Dt=mt)},setFunc:function(mt){if(Nt&&(mt=TM[mt]),Gt!==mt){switch(mt){case gh:o.depthFunc(o.NEVER);break;case _h:o.depthFunc(o.ALWAYS);break;case vh:o.depthFunc(o.LESS);break;case Gr:o.depthFunc(o.LEQUAL);break;case xh:o.depthFunc(o.EQUAL);break;case Sh:o.depthFunc(o.GEQUAL);break;case yh:o.depthFunc(o.GREATER);break;case Mh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Gt=mt}},setLocked:function(mt){K=mt},setClear:function(mt){Ct!==mt&&(Ct=mt,Nt&&(mt=1-mt),o.clearDepth(mt))},reset:function(){K=!1,Dt=null,Gt=null,Ct=null,Nt=!1}}}function l(){let K=!1,Nt=null,Dt=null,Gt=null,Ct=null,mt=null,kt=null,oe=null,Ie=null;return{setTest:function(we){K||(we?k(o.STENCIL_TEST):ut(o.STENCIL_TEST))},setMask:function(we){Nt!==we&&!K&&(o.stencilMask(we),Nt=we)},setFunc:function(we,Nn,xi){(Dt!==we||Gt!==Nn||Ct!==xi)&&(o.stencilFunc(we,Nn,xi),Dt=we,Gt=Nn,Ct=xi)},setOp:function(we,Nn,xi){(mt!==we||kt!==Nn||oe!==xi)&&(o.stencilOp(we,Nn,xi),mt=we,kt=Nn,oe=xi)},setLocked:function(we){K=we},setClear:function(we){Ie!==we&&(o.clearStencil(we),Ie=we)},reset:function(){K=!1,Nt=null,Dt=null,Gt=null,Ct=null,mt=null,kt=null,oe=null,Ie=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let v={},y={},g=new WeakMap,M=[],b=null,C=!1,S=null,_=null,R=null,O=null,D=null,H=null,F=null,z=new Ae(0,0,0),T=0,N=!1,pt=null,I=null,q=null,G=null,tt=null;const J=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,B=0;const it=o.getParameter(o.VERSION);it.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(it)[1]),P=B>=1):it.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),P=B>=2);let ct=null,xt={};const U=o.getParameter(o.SCISSOR_BOX),Y=o.getParameter(o.VIEWPORT),gt=new nn().fromArray(U),Rt=new nn().fromArray(Y);function wt(K,Nt,Dt,Gt){const Ct=new Uint8Array(4),mt=o.createTexture();o.bindTexture(K,mt),o.texParameteri(K,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(K,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let kt=0;kt<Dt;kt++)K===o.TEXTURE_3D||K===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,Gt,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Nt+kt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return mt}const et={};et[o.TEXTURE_2D]=wt(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=wt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=wt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=wt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),k(o.DEPTH_TEST),d.setFunc(Gr),Qt(!1),xe(p_),k(o.CULL_FACE),se(va);function k(K){v[K]!==!0&&(o.enable(K),v[K]=!0)}function ut(K){v[K]!==!1&&(o.disable(K),v[K]=!1)}function Mt(K,Nt){return y[K]!==Nt?(o.bindFramebuffer(K,Nt),y[K]=Nt,K===o.DRAW_FRAMEBUFFER&&(y[o.FRAMEBUFFER]=Nt),K===o.FRAMEBUFFER&&(y[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function Lt(K,Nt){let Dt=M,Gt=!1;if(K){Dt=g.get(Nt),Dt===void 0&&(Dt=[],g.set(Nt,Dt));const Ct=K.textures;if(Dt.length!==Ct.length||Dt[0]!==o.COLOR_ATTACHMENT0){for(let mt=0,kt=Ct.length;mt<kt;mt++)Dt[mt]=o.COLOR_ATTACHMENT0+mt;Dt.length=Ct.length,Gt=!0}}else Dt[0]!==o.BACK&&(Dt[0]=o.BACK,Gt=!0);Gt&&o.drawBuffers(Dt)}function Bt(K){return b!==K?(o.useProgram(K),b=K,!0):!1}const te={[Ns]:o.FUNC_ADD,[jy]:o.FUNC_SUBTRACT,[Yy]:o.FUNC_REVERSE_SUBTRACT};te[Zy]=o.MIN,te[Ky]=o.MAX;const ie={[Qy]:o.ZERO,[Jy]:o.ONE,[$y]:o.SRC_COLOR,[ph]:o.SRC_ALPHA,[sM]:o.SRC_ALPHA_SATURATE,[iM]:o.DST_COLOR,[eM]:o.DST_ALPHA,[tM]:o.ONE_MINUS_SRC_COLOR,[mh]:o.ONE_MINUS_SRC_ALPHA,[aM]:o.ONE_MINUS_DST_COLOR,[nM]:o.ONE_MINUS_DST_ALPHA,[rM]:o.CONSTANT_COLOR,[oM]:o.ONE_MINUS_CONSTANT_COLOR,[lM]:o.CONSTANT_ALPHA,[cM]:o.ONE_MINUS_CONSTANT_ALPHA};function se(K,Nt,Dt,Gt,Ct,mt,kt,oe,Ie,we){if(K===va){C===!0&&(ut(o.BLEND),C=!1);return}if(C===!1&&(k(o.BLEND),C=!0),K!==qy){if(K!==S||we!==N){if((_!==Ns||D!==Ns)&&(o.blendEquation(o.FUNC_ADD),_=Ns,D=Ns),we)switch(K){case Ir:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case m_:o.blendFunc(o.ONE,o.ONE);break;case g_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case __:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:De("WebGLState: Invalid blending: ",K);break}else switch(K){case Ir:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case m_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case g_:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case __:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",K);break}R=null,O=null,H=null,F=null,z.set(0,0,0),T=0,S=K,N=we}return}Ct=Ct||Nt,mt=mt||Dt,kt=kt||Gt,(Nt!==_||Ct!==D)&&(o.blendEquationSeparate(te[Nt],te[Ct]),_=Nt,D=Ct),(Dt!==R||Gt!==O||mt!==H||kt!==F)&&(o.blendFuncSeparate(ie[Dt],ie[Gt],ie[mt],ie[kt]),R=Dt,O=Gt,H=mt,F=kt),(oe.equals(z)===!1||Ie!==T)&&(o.blendColor(oe.r,oe.g,oe.b,Ie),z.copy(oe),T=Ie),S=K,N=!1}function ue(K,Nt){K.side===Bi?ut(o.CULL_FACE):k(o.CULL_FACE);let Dt=K.side===Wn;Nt&&(Dt=!Dt),Qt(Dt),K.blending===Ir&&K.transparent===!1?se(va):se(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),d.setFunc(K.depthFunc),d.setTest(K.depthTest),d.setMask(K.depthWrite),c.setMask(K.colorWrite);const Gt=K.stencilWrite;p.setTest(Gt),Gt&&(p.setMask(K.stencilWriteMask),p.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),p.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Ne(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?k(o.SAMPLE_ALPHA_TO_COVERAGE):ut(o.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(K){pt!==K&&(K?o.frontFace(o.CW):o.frontFace(o.CCW),pt=K)}function xe(K){K!==ky?(k(o.CULL_FACE),K!==I&&(K===p_?o.cullFace(o.BACK):K===Xy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ut(o.CULL_FACE),I=K}function X(K){K!==q&&(P&&o.lineWidth(K),q=K)}function Ne(K,Nt,Dt){K?(k(o.POLYGON_OFFSET_FILL),(G!==Nt||tt!==Dt)&&(G=Nt,tt=Dt,d.getReversed()&&(Nt=-Nt),o.polygonOffset(Nt,Dt))):ut(o.POLYGON_OFFSET_FILL)}function Se(K){K?k(o.SCISSOR_TEST):ut(o.SCISSOR_TEST)}function Le(K){K===void 0&&(K=o.TEXTURE0+J-1),ct!==K&&(o.activeTexture(K),ct=K)}function Wt(K,Nt,Dt){Dt===void 0&&(ct===null?Dt=o.TEXTURE0+J-1:Dt=ct);let Gt=xt[Dt];Gt===void 0&&(Gt={type:void 0,texture:void 0},xt[Dt]=Gt),(Gt.type!==K||Gt.texture!==Nt)&&(ct!==Dt&&(o.activeTexture(Dt),ct=Dt),o.bindTexture(K,Nt||et[K]),Gt.type=K,Gt.texture=Nt)}function L(){const K=xt[ct];K!==void 0&&K.type!==void 0&&(o.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(K){De("WebGLState:",K)}}function Q(){try{o.compressedTexImage3D(...arguments)}catch(K){De("WebGLState:",K)}}function vt(){try{o.texSubImage2D(...arguments)}catch(K){De("WebGLState:",K)}}function bt(){try{o.texSubImage3D(...arguments)}catch(K){De("WebGLState:",K)}}function ht(){try{o.compressedTexSubImage2D(...arguments)}catch(K){De("WebGLState:",K)}}function qt(){try{o.compressedTexSubImage3D(...arguments)}catch(K){De("WebGLState:",K)}}function Ut(){try{o.texStorage2D(...arguments)}catch(K){De("WebGLState:",K)}}function $t(){try{o.texStorage3D(...arguments)}catch(K){De("WebGLState:",K)}}function ee(){try{o.texImage2D(...arguments)}catch(K){De("WebGLState:",K)}}function At(){try{o.texImage3D(...arguments)}catch(K){De("WebGLState:",K)}}function Tt(K){gt.equals(K)===!1&&(o.scissor(K.x,K.y,K.z,K.w),gt.copy(K))}function It(K){Rt.equals(K)===!1&&(o.viewport(K.x,K.y,K.z,K.w),Rt.copy(K))}function zt(K,Nt){let Dt=h.get(Nt);Dt===void 0&&(Dt=new WeakMap,h.set(Nt,Dt));let Gt=Dt.get(K);Gt===void 0&&(Gt=o.getUniformBlockIndex(Nt,K.name),Dt.set(K,Gt))}function Ht(K,Nt){const Gt=h.get(Nt).get(K);m.get(Nt)!==Gt&&(o.uniformBlockBinding(Nt,Gt,K.__bindingPointIndex),m.set(Nt,Gt))}function pe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},ct=null,xt={},y={},g=new WeakMap,M=[],b=null,C=!1,S=null,_=null,R=null,O=null,D=null,H=null,F=null,z=new Ae(0,0,0),T=0,N=!1,pt=null,I=null,q=null,G=null,tt=null,gt.set(0,0,o.canvas.width,o.canvas.height),Rt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:k,disable:ut,bindFramebuffer:Mt,drawBuffers:Lt,useProgram:Bt,setBlending:se,setMaterial:ue,setFlipSided:Qt,setCullFace:xe,setLineWidth:X,setPolygonOffset:Ne,setScissorTest:Se,activeTexture:Le,bindTexture:Wt,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:Q,texImage2D:ee,texImage3D:At,updateUBOMapping:zt,uniformBlockBinding:Ht,texStorage2D:Ut,texStorage3D:$t,texSubImage2D:vt,texSubImage3D:bt,compressedTexSubImage2D:ht,compressedTexSubImage3D:qt,scissor:Tt,viewport:It,reset:pe}}function QA(o,t,i,s,l,c,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ee,v=new WeakMap;let y;const g=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return M?new OffscreenCanvas(L,E):ru("canvas")}function C(L,E,Q){let vt=1;const bt=Wt(L);if((bt.width>Q||bt.height>Q)&&(vt=Q/Math.max(bt.width,bt.height)),vt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ht=Math.floor(vt*bt.width),qt=Math.floor(vt*bt.height);y===void 0&&(y=b(ht,qt));const Ut=E?b(ht,qt):y;return Ut.width=ht,Ut.height=qt,Ut.getContext("2d").drawImage(L,0,0,ht,qt),le("WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+ht+"x"+qt+")."),Ut}else return"data"in L&&le("WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),L;return L}function S(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function R(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(L,E,Q,vt,bt=!1){if(L!==null){if(o[L]!==void 0)return o[L];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ht=E;if(E===o.RED&&(Q===o.FLOAT&&(ht=o.R32F),Q===o.HALF_FLOAT&&(ht=o.R16F),Q===o.UNSIGNED_BYTE&&(ht=o.R8)),E===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ht=o.R8UI),Q===o.UNSIGNED_SHORT&&(ht=o.R16UI),Q===o.UNSIGNED_INT&&(ht=o.R32UI),Q===o.BYTE&&(ht=o.R8I),Q===o.SHORT&&(ht=o.R16I),Q===o.INT&&(ht=o.R32I)),E===o.RG&&(Q===o.FLOAT&&(ht=o.RG32F),Q===o.HALF_FLOAT&&(ht=o.RG16F),Q===o.UNSIGNED_BYTE&&(ht=o.RG8)),E===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ht=o.RG8UI),Q===o.UNSIGNED_SHORT&&(ht=o.RG16UI),Q===o.UNSIGNED_INT&&(ht=o.RG32UI),Q===o.BYTE&&(ht=o.RG8I),Q===o.SHORT&&(ht=o.RG16I),Q===o.INT&&(ht=o.RG32I)),E===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),Q===o.UNSIGNED_INT&&(ht=o.RGB32UI),Q===o.BYTE&&(ht=o.RGB8I),Q===o.SHORT&&(ht=o.RGB16I),Q===o.INT&&(ht=o.RGB32I)),E===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),Q===o.UNSIGNED_INT&&(ht=o.RGBA32UI),Q===o.BYTE&&(ht=o.RGBA8I),Q===o.SHORT&&(ht=o.RGBA16I),Q===o.INT&&(ht=o.RGBA32I)),E===o.RGB&&(Q===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),Q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ht=o.R11F_G11F_B10F)),E===o.RGBA){const qt=bt?su:Ue.getTransfer(vt);Q===o.FLOAT&&(ht=o.RGBA32F),Q===o.HALF_FLOAT&&(ht=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(ht=qt===Ve?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function D(L,E){let Q;return L?E===null||E===Xi||E===nl?Q=o.DEPTH24_STENCIL8:E===Hi?Q=o.DEPTH32F_STENCIL8:E===el&&(Q=o.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===nl?Q=o.DEPTH_COMPONENT24:E===Hi?Q=o.DEPTH_COMPONENT32F:E===el&&(Q=o.DEPTH_COMPONENT16),Q}function H(L,E){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==Tn&&L.minFilter!==wn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function F(L){const E=L.target;E.removeEventListener("dispose",F),T(E),E.isVideoTexture&&v.delete(E)}function z(L){const E=L.target;E.removeEventListener("dispose",z),pt(E)}function T(L){const E=s.get(L);if(E.__webglInit===void 0)return;const Q=L.source,vt=g.get(Q);if(vt){const bt=vt[E.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&N(L),Object.keys(vt).length===0&&g.delete(Q)}s.remove(L)}function N(L){const E=s.get(L);o.deleteTexture(E.__webglTexture);const Q=L.source,vt=g.get(Q);delete vt[E.__cacheKey],d.memory.textures--}function pt(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(E.__webglFramebuffer[vt]))for(let bt=0;bt<E.__webglFramebuffer[vt].length;bt++)o.deleteFramebuffer(E.__webglFramebuffer[vt][bt]);else o.deleteFramebuffer(E.__webglFramebuffer[vt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[vt])}else{if(Array.isArray(E.__webglFramebuffer))for(let vt=0;vt<E.__webglFramebuffer.length;vt++)o.deleteFramebuffer(E.__webglFramebuffer[vt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let vt=0;vt<E.__webglColorRenderbuffer.length;vt++)E.__webglColorRenderbuffer[vt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[vt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=L.textures;for(let vt=0,bt=Q.length;vt<bt;vt++){const ht=s.get(Q[vt]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),d.memory.textures--),s.remove(Q[vt])}s.remove(L)}let I=0;function q(){I=0}function G(){const L=I;return L>=l.maxTextures&&le("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),I+=1,L}function tt(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function J(L,E){const Q=s.get(L);if(L.isVideoTexture&&Se(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Q.__version!==L.version){const vt=L.image;if(vt===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{et(Q,L,E);return}}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+E)}function P(L,E){const Q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){et(Q,L,E);return}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+E)}function B(L,E){const Q=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){et(Q,L,E);return}i.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+E)}function it(L,E){const Q=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&Q.__version!==L.version){k(Q,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+E)}const ct={[Eh]:o.REPEAT,[_a]:o.CLAMP_TO_EDGE,[bh]:o.MIRRORED_REPEAT},xt={[Tn]:o.NEAREST,[dM]:o.NEAREST_MIPMAP_NEAREST,[Mc]:o.NEAREST_MIPMAP_LINEAR,[wn]:o.LINEAR,[Ld]:o.LINEAR_MIPMAP_NEAREST,[Os]:o.LINEAR_MIPMAP_LINEAR},U={[gM]:o.NEVER,[yM]:o.ALWAYS,[_M]:o.LESS,[mp]:o.LEQUAL,[vM]:o.EQUAL,[gp]:o.GEQUAL,[xM]:o.GREATER,[SM]:o.NOTEQUAL};function Y(L,E){if(E.type===Hi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===wn||E.magFilter===Ld||E.magFilter===Mc||E.magFilter===Os||E.minFilter===wn||E.minFilter===Ld||E.minFilter===Mc||E.minFilter===Os)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,ct[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,ct[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,ct[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,xt[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==Mc&&E.minFilter!==Os||E.type===Hi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function gt(L,E){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",F));const vt=E.source;let bt=g.get(vt);bt===void 0&&(bt={},g.set(vt,bt));const ht=tt(E);if(ht!==L.__cacheKey){bt[ht]===void 0&&(bt[ht]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),bt[ht].usedTimes++;const qt=bt[L.__cacheKey];qt!==void 0&&(bt[L.__cacheKey].usedTimes--,qt.usedTimes===0&&N(E)),L.__cacheKey=ht,L.__webglTexture=bt[ht].texture}return Q}function Rt(L,E,Q){return Math.floor(Math.floor(L/Q)/E)}function wt(L,E,Q,vt){const ht=L.updateRanges;if(ht.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,Q,vt,E.data);else{ht.sort((At,Tt)=>At.start-Tt.start);let qt=0;for(let At=1;At<ht.length;At++){const Tt=ht[qt],It=ht[At],zt=Tt.start+Tt.count,Ht=Rt(It.start,E.width,4),pe=Rt(Tt.start,E.width,4);It.start<=zt+1&&Ht===pe&&Rt(It.start+It.count-1,E.width,4)===Ht?Tt.count=Math.max(Tt.count,It.start+It.count-Tt.start):(++qt,ht[qt]=It)}ht.length=qt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),$t=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let At=0,Tt=ht.length;At<Tt;At++){const It=ht[At],zt=Math.floor(It.start/4),Ht=Math.ceil(It.count/4),pe=zt%E.width,K=Math.floor(zt/E.width),Nt=Ht,Dt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,pe),o.pixelStorei(o.UNPACK_SKIP_ROWS,K),i.texSubImage2D(o.TEXTURE_2D,0,pe,K,Nt,Dt,Q,vt,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,$t),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function et(L,E,Q){let vt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(vt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(vt=o.TEXTURE_3D);const bt=gt(L,E),ht=E.source;i.bindTexture(vt,L.__webglTexture,o.TEXTURE0+Q);const qt=s.get(ht);if(ht.version!==qt.__version||bt===!0){i.activeTexture(o.TEXTURE0+Q);const Ut=Ue.getPrimaries(Ue.workingColorSpace),$t=E.colorSpace===es?null:Ue.getPrimaries(E.colorSpace),ee=E.colorSpace===es||Ut===$t?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let At=C(E.image,!1,l.maxTextureSize);At=Le(E,At);const Tt=c.convert(E.format,E.colorSpace),It=c.convert(E.type);let zt=O(E.internalFormat,Tt,It,E.colorSpace,E.isVideoTexture);Y(vt,E);let Ht;const pe=E.mipmaps,K=E.isVideoTexture!==!0,Nt=qt.__version===void 0||bt===!0,Dt=ht.dataReady,Gt=H(E,At);if(E.isDepthTexture)zt=D(E.format===Ps,E.type),Nt&&(K?i.texStorage2D(o.TEXTURE_2D,1,zt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,zt,At.width,At.height,0,Tt,It,null));else if(E.isDataTexture)if(pe.length>0){K&&Nt&&i.texStorage2D(o.TEXTURE_2D,Gt,zt,pe[0].width,pe[0].height);for(let Ct=0,mt=pe.length;Ct<mt;Ct++)Ht=pe[Ct],K?Dt&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,Ht.width,Ht.height,Tt,It,Ht.data):i.texImage2D(o.TEXTURE_2D,Ct,zt,Ht.width,Ht.height,0,Tt,It,Ht.data);E.generateMipmaps=!1}else K?(Nt&&i.texStorage2D(o.TEXTURE_2D,Gt,zt,At.width,At.height),Dt&&wt(E,At,Tt,It)):i.texImage2D(o.TEXTURE_2D,0,zt,At.width,At.height,0,Tt,It,At.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){K&&Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Gt,zt,pe[0].width,pe[0].height,At.depth);for(let Ct=0,mt=pe.length;Ct<mt;Ct++)if(Ht=pe[Ct],E.format!==wi)if(Tt!==null)if(K){if(Dt)if(E.layerUpdates.size>0){const kt=W_(Ht.width,Ht.height,E.format,E.type);for(const oe of E.layerUpdates){const Ie=Ht.data.subarray(oe*kt/Ht.data.BYTES_PER_ELEMENT,(oe+1)*kt/Ht.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,oe,Ht.width,Ht.height,1,Tt,Ie)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,0,Ht.width,Ht.height,At.depth,Tt,Ht.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ct,zt,Ht.width,Ht.height,At.depth,0,Ht.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?Dt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,0,Ht.width,Ht.height,At.depth,Tt,It,Ht.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ct,zt,Ht.width,Ht.height,At.depth,0,Tt,It,Ht.data)}else{K&&Nt&&i.texStorage2D(o.TEXTURE_2D,Gt,zt,pe[0].width,pe[0].height);for(let Ct=0,mt=pe.length;Ct<mt;Ct++)Ht=pe[Ct],E.format!==wi?Tt!==null?K?Dt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ct,0,0,Ht.width,Ht.height,Tt,Ht.data):i.compressedTexImage2D(o.TEXTURE_2D,Ct,zt,Ht.width,Ht.height,0,Ht.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?Dt&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,Ht.width,Ht.height,Tt,It,Ht.data):i.texImage2D(o.TEXTURE_2D,Ct,zt,Ht.width,Ht.height,0,Tt,It,Ht.data)}else if(E.isDataArrayTexture)if(K){if(Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Gt,zt,At.width,At.height,At.depth),Dt)if(E.layerUpdates.size>0){const Ct=W_(At.width,At.height,E.format,E.type);for(const mt of E.layerUpdates){const kt=At.data.subarray(mt*Ct/At.data.BYTES_PER_ELEMENT,(mt+1)*Ct/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,mt,At.width,At.height,1,Tt,It,kt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Tt,It,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,At.width,At.height,At.depth,0,Tt,It,At.data);else if(E.isData3DTexture)K?(Nt&&i.texStorage3D(o.TEXTURE_3D,Gt,zt,At.width,At.height,At.depth),Dt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Tt,It,At.data)):i.texImage3D(o.TEXTURE_3D,0,zt,At.width,At.height,At.depth,0,Tt,It,At.data);else if(E.isFramebufferTexture){if(Nt)if(K)i.texStorage2D(o.TEXTURE_2D,Gt,zt,At.width,At.height);else{let Ct=At.width,mt=At.height;for(let kt=0;kt<Gt;kt++)i.texImage2D(o.TEXTURE_2D,kt,zt,Ct,mt,0,Tt,It,null),Ct>>=1,mt>>=1}}else if(pe.length>0){if(K&&Nt){const Ct=Wt(pe[0]);i.texStorage2D(o.TEXTURE_2D,Gt,zt,Ct.width,Ct.height)}for(let Ct=0,mt=pe.length;Ct<mt;Ct++)Ht=pe[Ct],K?Dt&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,Tt,It,Ht):i.texImage2D(o.TEXTURE_2D,Ct,zt,Tt,It,Ht);E.generateMipmaps=!1}else if(K){if(Nt){const Ct=Wt(At);i.texStorage2D(o.TEXTURE_2D,Gt,zt,Ct.width,Ct.height)}Dt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt,It,At)}else i.texImage2D(o.TEXTURE_2D,0,zt,Tt,It,At);S(E)&&_(vt),qt.__version=ht.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function k(L,E,Q){if(E.image.length!==6)return;const vt=gt(L,E),bt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+Q);const ht=s.get(bt);if(bt.version!==ht.__version||vt===!0){i.activeTexture(o.TEXTURE0+Q);const qt=Ue.getPrimaries(Ue.workingColorSpace),Ut=E.colorSpace===es?null:Ue.getPrimaries(E.colorSpace),$t=E.colorSpace===es||qt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);const ee=E.isCompressedTexture||E.image[0].isCompressedTexture,At=E.image[0]&&E.image[0].isDataTexture,Tt=[];for(let mt=0;mt<6;mt++)!ee&&!At?Tt[mt]=C(E.image[mt],!0,l.maxCubemapSize):Tt[mt]=At?E.image[mt].image:E.image[mt],Tt[mt]=Le(E,Tt[mt]);const It=Tt[0],zt=c.convert(E.format,E.colorSpace),Ht=c.convert(E.type),pe=O(E.internalFormat,zt,Ht,E.colorSpace),K=E.isVideoTexture!==!0,Nt=ht.__version===void 0||vt===!0,Dt=bt.dataReady;let Gt=H(E,It);Y(o.TEXTURE_CUBE_MAP,E);let Ct;if(ee){K&&Nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,pe,It.width,It.height);for(let mt=0;mt<6;mt++){Ct=Tt[mt].mipmaps;for(let kt=0;kt<Ct.length;kt++){const oe=Ct[kt];E.format!==wi?zt!==null?K?Dt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,kt,0,0,oe.width,oe.height,zt,oe.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,kt,pe,oe.width,oe.height,0,oe.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,kt,0,0,oe.width,oe.height,zt,Ht,oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,kt,pe,oe.width,oe.height,0,zt,Ht,oe.data)}}}else{if(Ct=E.mipmaps,K&&Nt){Ct.length>0&&Gt++;const mt=Wt(Tt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Gt,pe,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(At){K?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Tt[mt].width,Tt[mt].height,zt,Ht,Tt[mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,pe,Tt[mt].width,Tt[mt].height,0,zt,Ht,Tt[mt].data);for(let kt=0;kt<Ct.length;kt++){const Ie=Ct[kt].image[mt].image;K?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,kt+1,0,0,Ie.width,Ie.height,zt,Ht,Ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,kt+1,pe,Ie.width,Ie.height,0,zt,Ht,Ie.data)}}else{K?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,zt,Ht,Tt[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,pe,zt,Ht,Tt[mt]);for(let kt=0;kt<Ct.length;kt++){const oe=Ct[kt];K?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,kt+1,0,0,zt,Ht,oe.image[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,kt+1,pe,zt,Ht,oe.image[mt])}}}S(E)&&_(o.TEXTURE_CUBE_MAP),ht.__version=bt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ut(L,E,Q,vt,bt,ht){const qt=c.convert(Q.format,Q.colorSpace),Ut=c.convert(Q.type),$t=O(Q.internalFormat,qt,Ut,Q.colorSpace),ee=s.get(E),At=s.get(Q);if(At.__renderTarget=E,!ee.__hasExternalTextures){const Tt=Math.max(1,E.width>>ht),It=Math.max(1,E.height>>ht);bt===o.TEXTURE_3D||bt===o.TEXTURE_2D_ARRAY?i.texImage3D(bt,ht,$t,Tt,It,E.depth,0,qt,Ut,null):i.texImage2D(bt,ht,$t,Tt,It,0,qt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Ne(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,vt,bt,At.__webglTexture,0,X(E)):(bt===o.TEXTURE_2D||bt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,vt,bt,At.__webglTexture,ht),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Mt(L,E,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const vt=E.depthTexture,bt=vt&&vt.isDepthTexture?vt.type:null,ht=D(E.stencilBuffer,bt),qt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ne(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,X(E),ht,E.width,E.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,X(E),ht,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ht,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,L)}else{const vt=E.textures;for(let bt=0;bt<vt.length;bt++){const ht=vt[bt],qt=c.convert(ht.format,ht.colorSpace),Ut=c.convert(ht.type),$t=O(ht.internalFormat,qt,Ut,ht.colorSpace);Ne(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,X(E),$t,E.width,E.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,X(E),$t,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,$t,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Lt(L,E,Q){const vt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const bt=s.get(E.depthTexture);if(bt.__renderTarget=E,(!bt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),vt){if(bt.__webglInit===void 0&&(bt.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),bt.__webglTexture===void 0){bt.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,bt.__webglTexture),Y(o.TEXTURE_CUBE_MAP,E.depthTexture);const ee=c.convert(E.depthTexture.format),At=c.convert(E.depthTexture.type);let Tt;E.depthTexture.format===ya?Tt=o.DEPTH_COMPONENT24:E.depthTexture.format===Ps&&(Tt=o.DEPTH24_STENCIL8);for(let It=0;It<6;It++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+It,0,Tt,E.width,E.height,0,ee,At,null)}}else J(E.depthTexture,0);const ht=bt.__webglTexture,qt=X(E),Ut=vt?o.TEXTURE_CUBE_MAP_POSITIVE_X+Q:o.TEXTURE_2D,$t=E.depthTexture.format===Ps?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===ya)Ne(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,$t,Ut,ht,0,qt):o.framebufferTexture2D(o.FRAMEBUFFER,$t,Ut,ht,0);else if(E.depthTexture.format===Ps)Ne(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,$t,Ut,ht,0,qt):o.framebufferTexture2D(o.FRAMEBUFFER,$t,Ut,ht,0);else throw new Error("Unknown depthTexture format")}function Bt(L){const E=s.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const vt=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),vt){const bt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,vt.removeEventListener("dispose",bt)};vt.addEventListener("dispose",bt),E.__depthDisposeCallback=bt}E.__boundDepthTexture=vt}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let vt=0;vt<6;vt++)Lt(E.__webglFramebuffer[vt],L,vt);else{const vt=L.texture.mipmaps;vt&&vt.length>0?Lt(E.__webglFramebuffer[0],L,0):Lt(E.__webglFramebuffer,L,0)}else if(Q){E.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[vt]),E.__webglDepthbuffer[vt]===void 0)E.__webglDepthbuffer[vt]=o.createRenderbuffer(),Mt(E.__webglDepthbuffer[vt],L,!1);else{const bt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer[vt];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,bt,o.RENDERBUFFER,ht)}}else{const vt=L.texture.mipmaps;if(vt&&vt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Mt(E.__webglDepthbuffer,L,!1);else{const bt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,bt,o.RENDERBUFFER,ht)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function te(L,E,Q){const vt=s.get(L);E!==void 0&&ut(vt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&Bt(L)}function ie(L){const E=L.texture,Q=s.get(L),vt=s.get(E);L.addEventListener("dispose",z);const bt=L.textures,ht=L.isWebGLCubeRenderTarget===!0,qt=bt.length>1;if(qt||(vt.__webglTexture===void 0&&(vt.__webglTexture=o.createTexture()),vt.__version=E.version,d.memory.textures++),ht){Q.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[Ut]=[];for(let $t=0;$t<E.mipmaps.length;$t++)Q.__webglFramebuffer[Ut][$t]=o.createFramebuffer()}else Q.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)Q.__webglFramebuffer[Ut]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Ut=0,$t=bt.length;Ut<$t;Ut++){const ee=s.get(bt[Ut]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),d.memory.textures++)}if(L.samples>0&&Ne(L)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ut=0;Ut<bt.length;Ut++){const $t=bt[Ut];Q.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[Ut]);const ee=c.convert($t.format,$t.colorSpace),At=c.convert($t.type),Tt=O($t.internalFormat,ee,At,$t.colorSpace,L.isXRRenderTarget===!0),It=X(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,It,Tt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,Q.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),Mt(Q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),Y(o.TEXTURE_CUBE_MAP,E);for(let Ut=0;Ut<6;Ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let $t=0;$t<E.mipmaps.length;$t++)ut(Q.__webglFramebuffer[Ut][$t],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,$t);else ut(Q.__webglFramebuffer[Ut],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);S(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Ut=0,$t=bt.length;Ut<$t;Ut++){const ee=bt[Ut],At=s.get(ee);let Tt=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Tt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Tt,At.__webglTexture),Y(Tt,ee),ut(Q.__webglFramebuffer,L,ee,o.COLOR_ATTACHMENT0+Ut,Tt,0),S(ee)&&_(Tt)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ut=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,vt.__webglTexture),Y(Ut,E),E.mipmaps&&E.mipmaps.length>0)for(let $t=0;$t<E.mipmaps.length;$t++)ut(Q.__webglFramebuffer[$t],L,E,o.COLOR_ATTACHMENT0,Ut,$t);else ut(Q.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,Ut,0);S(E)&&_(Ut),i.unbindTexture()}L.depthBuffer&&Bt(L)}function se(L){const E=L.textures;for(let Q=0,vt=E.length;Q<vt;Q++){const bt=E[Q];if(S(bt)){const ht=R(L),qt=s.get(bt).__webglTexture;i.bindTexture(ht,qt),_(ht),i.unbindTexture()}}}const ue=[],Qt=[];function xe(L){if(L.samples>0){if(Ne(L)===!1){const E=L.textures,Q=L.width,vt=L.height;let bt=o.COLOR_BUFFER_BIT;const ht=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=s.get(L),Ut=E.length>1;if(Ut)for(let ee=0;ee<E.length;ee++)i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const $t=L.texture.mipmaps;$t&&$t.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let ee=0;ee<E.length;ee++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(bt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(bt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[ee]);const At=s.get(E[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,At,0)}o.blitFramebuffer(0,0,Q,vt,0,0,Q,vt,bt,o.NEAREST),m===!0&&(ue.length=0,Qt.length=0,ue.push(o.COLOR_ATTACHMENT0+ee),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ue.push(ht),Qt.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Qt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ue))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let ee=0;ee<E.length;ee++){i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,qt.__webglColorRenderbuffer[ee]);const At=s.get(E[ee]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,At,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function X(L){return Math.min(l.maxSamples,L.samples)}function Ne(L){const E=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Se(L){const E=d.render.frame;v.get(L)!==E&&(v.set(L,E),L.update())}function Le(L,E){const Q=L.colorSpace,vt=L.format,bt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==Xr&&Q!==es&&(Ue.getTransfer(Q)===Ve?(vt!==wi||bt!==ai)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",Q)),E}function Wt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=G,this.resetTextureUnits=q,this.setTexture2D=J,this.setTexture2DArray=P,this.setTexture3D=B,this.setTextureCube=it,this.rebindTextures=te,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function JA(o,t){function i(s,l=es){let c;const d=Ue.getTransfer(l);if(s===ai)return o.UNSIGNED_BYTE;if(s===up)return o.UNSIGNED_SHORT_4_4_4_4;if(s===fp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Dv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Uv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Cv)return o.BYTE;if(s===wv)return o.SHORT;if(s===el)return o.UNSIGNED_SHORT;if(s===cp)return o.INT;if(s===Xi)return o.UNSIGNED_INT;if(s===Hi)return o.FLOAT;if(s===Sa)return o.HALF_FLOAT;if(s===Nv)return o.ALPHA;if(s===Lv)return o.RGB;if(s===wi)return o.RGBA;if(s===ya)return o.DEPTH_COMPONENT;if(s===Ps)return o.DEPTH_STENCIL;if(s===Ov)return o.RED;if(s===dp)return o.RED_INTEGER;if(s===kr)return o.RG;if(s===hp)return o.RG_INTEGER;if(s===pp)return o.RGBA_INTEGER;if(s===$c||s===tu||s===eu||s===nu)if(d===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===$c)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===$c)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Th||s===Ah||s===Rh||s===Ch)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Th)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ah)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ch)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===wh||s===Dh||s===Uh||s===Nh||s===Lh||s===Oh||s===Ph)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===wh||s===Dh)return d===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Uh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Nh)return c.COMPRESSED_R11_EAC;if(s===Lh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Oh)return c.COMPRESSED_RG11_EAC;if(s===Ph)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Fh||s===zh||s===Bh||s===Ih||s===Hh||s===Gh||s===Vh||s===kh||s===Xh||s===Wh||s===qh||s===jh||s===Yh||s===Zh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Fh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===zh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Bh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ih)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Hh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Gh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Vh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===kh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Xh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===qh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===jh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Yh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Zh)return d===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Kh||s===Qh||s===Jh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Kh)return d===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Qh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Jh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===$h||s===tp||s===ep||s===np)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===$h)return c.COMPRESSED_RED_RGTC1_EXT;if(s===tp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ep)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===np)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===nl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const $A=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tR=`
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

}`;class eR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new qv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new qi({vertexShader:$A,fragmentShader:tR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Wi(new ol(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nR extends qr{constructor(t,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,v=null,y=null,g=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",S=new eR,_={},R=i.getContextAttributes();let O=null,D=null;const H=[],F=[],z=new Ee;let T=null;const N=new ii;N.viewport=new nn;const pt=new ii;pt.viewport=new nn;const I=[N,pt],q=new hE;let G=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let k=H[et];return k===void 0&&(k=new Gd,H[et]=k),k.getTargetRaySpace()},this.getControllerGrip=function(et){let k=H[et];return k===void 0&&(k=new Gd,H[et]=k),k.getGripSpace()},this.getHand=function(et){let k=H[et];return k===void 0&&(k=new Gd,H[et]=k),k.getHandSpace()};function J(et){const k=F.indexOf(et.inputSource);if(k===-1)return;const ut=H[k];ut!==void 0&&(ut.update(et.inputSource,et.frame,h||d),ut.dispatchEvent({type:et.type,data:et.inputSource}))}function P(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",B);for(let et=0;et<H.length;et++){const k=F[et];k!==null&&(F[et]=null,H[et].disconnect(k))}G=null,tt=null,S.reset();for(const et in _)delete _[et];t.setRenderTarget(O),M=null,g=null,y=null,l=null,D=null,wt.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){c=et,s.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){p=et,s.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(et){h=et},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return y===null&&C&&(y=new XRWebGLBinding(l,i)),y},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",P),l.addEventListener("inputsourceschange",B),R.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Mt=null,Lt=null;R.depth&&(Lt=R.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ut=R.stencil?Ps:ya,Mt=R.stencil?nl:Xi);const Bt={colorFormat:i.RGBA8,depthFormat:Lt,scaleFactor:c};y=this.getBinding(),g=y.createProjectionLayer(Bt),l.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new ki(g.textureWidth,g.textureHeight,{format:wi,type:ai,depthTexture:new al(g.textureWidth,g.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ut={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ut),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new ki(M.framebufferWidth,M.framebufferHeight,{format:wi,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),wt.setContext(l),wt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function B(et){for(let k=0;k<et.removed.length;k++){const ut=et.removed[k],Mt=F.indexOf(ut);Mt>=0&&(F[Mt]=null,H[Mt].disconnect(ut))}for(let k=0;k<et.added.length;k++){const ut=et.added[k];let Mt=F.indexOf(ut);if(Mt===-1){for(let Bt=0;Bt<H.length;Bt++)if(Bt>=F.length){F.push(ut),Mt=Bt;break}else if(F[Bt]===null){F[Bt]=ut,Mt=Bt;break}if(Mt===-1)break}const Lt=H[Mt];Lt&&Lt.connect(ut)}}const it=new at,ct=new at;function xt(et,k,ut){it.setFromMatrixPosition(k.matrixWorld),ct.setFromMatrixPosition(ut.matrixWorld);const Mt=it.distanceTo(ct),Lt=k.projectionMatrix.elements,Bt=ut.projectionMatrix.elements,te=Lt[14]/(Lt[10]-1),ie=Lt[14]/(Lt[10]+1),se=(Lt[9]+1)/Lt[5],ue=(Lt[9]-1)/Lt[5],Qt=(Lt[8]-1)/Lt[0],xe=(Bt[8]+1)/Bt[0],X=te*Qt,Ne=te*xe,Se=Mt/(-Qt+xe),Le=Se*-Qt;if(k.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Le),et.translateZ(Se),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Lt[10]===-1)et.projectionMatrix.copy(k.projectionMatrix),et.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const Wt=te+Se,L=ie+Se,E=X-Le,Q=Ne+(Mt-Le),vt=se*ie/L*Wt,bt=ue*ie/L*Wt;et.projectionMatrix.makePerspective(E,Q,vt,bt,Wt,L),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function U(et,k){k===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(k.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let k=et.near,ut=et.far;S.texture!==null&&(S.depthNear>0&&(k=S.depthNear),S.depthFar>0&&(ut=S.depthFar)),q.near=pt.near=N.near=k,q.far=pt.far=N.far=ut,(G!==q.near||tt!==q.far)&&(l.updateRenderState({depthNear:q.near,depthFar:q.far}),G=q.near,tt=q.far),q.layers.mask=et.layers.mask|6,N.layers.mask=q.layers.mask&-5,pt.layers.mask=q.layers.mask&-3;const Mt=et.parent,Lt=q.cameras;U(q,Mt);for(let Bt=0;Bt<Lt.length;Bt++)U(Lt[Bt],Mt);Lt.length===2?xt(q,N,pt):q.projectionMatrix.copy(N.projectionMatrix),Y(et,q,Mt)};function Y(et,k,ut){ut===null?et.matrix.copy(k.matrixWorld):(et.matrix.copy(ut.matrixWorld),et.matrix.invert(),et.matrix.multiply(k.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(k.projectionMatrix),et.projectionMatrixInverse.copy(k.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=ap*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(et){m=et,g!==null&&(g.fixedFoveation=et),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=et)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(q)},this.getCameraTexture=function(et){return _[et]};let gt=null;function Rt(et,k){if(v=k.getViewerPose(h||d),b=k,v!==null){const ut=v.views;M!==null&&(t.setRenderTargetFramebuffer(D,M.framebuffer),t.setRenderTarget(D));let Mt=!1;ut.length!==q.cameras.length&&(q.cameras.length=0,Mt=!0);for(let ie=0;ie<ut.length;ie++){const se=ut[ie];let ue=null;if(M!==null)ue=M.getViewport(se);else{const xe=y.getViewSubImage(g,se);ue=xe.viewport,ie===0&&(t.setRenderTargetTextures(D,xe.colorTexture,xe.depthStencilTexture),t.setRenderTarget(D))}let Qt=I[ie];Qt===void 0&&(Qt=new ii,Qt.layers.enable(ie),Qt.viewport=new nn,I[ie]=Qt),Qt.matrix.fromArray(se.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(se.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(ue.x,ue.y,ue.width,ue.height),ie===0&&(q.matrix.copy(Qt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Mt===!0&&q.cameras.push(Qt)}const Lt=l.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){y=s.getBinding();const ie=y.getDepthInformation(ut[0]);ie&&ie.isValid&&ie.texture&&S.init(ie,l.renderState)}if(Lt&&Lt.includes("camera-access")&&C){t.state.unbindTexture(),y=s.getBinding();for(let ie=0;ie<ut.length;ie++){const se=ut[ie].camera;if(se){let ue=_[se];ue||(ue=new qv,_[se]=ue);const Qt=y.getCameraImage(se);ue.sourceTexture=Qt}}}}for(let ut=0;ut<H.length;ut++){const Mt=F[ut],Lt=H[ut];Mt!==null&&Lt!==void 0&&Lt.update(Mt,k,h||d)}gt&&gt(et,k),k.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:k}),b=null}const wt=new Qv;wt.setAnimationLoop(Rt),this.setAnimationLoop=function(et){gt=et},this.dispose=function(){}}}const Ds=new Ma,iR=new $e;function aR(o,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,jv(o)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,R,O,D){_.isMeshBasicMaterial?c(S,_):_.isMeshLambertMaterial?(c(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(c(S,_),y(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(c(S,_),g(S,_),_.isMeshPhysicalMaterial&&M(S,_,D)):_.isMeshMatcapMaterial?(c(S,_),b(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),C(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(d(S,_),_.isLineDashedMaterial&&p(S,_)):_.isPointsMaterial?m(S,_,R,O):_.isSpriteMaterial?h(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Wn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Wn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const R=t.get(_),O=R.envMap,D=R.envMapRotation;O&&(S.envMap.value=O,Ds.copy(D),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),S.envMapRotation.value.setFromMatrix4(iR.makeRotationFromEuler(Ds)),S.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function p(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,R,O){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*R,S.scale.value=O*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function y(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function g(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,R){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Wn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,_){_.matcap&&(S.matcap.value=_.matcap)}function C(S,_){const R=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function sR(o,t,i,s){let l={},c={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,O){const D=O.program;s.uniformBlockBinding(R,D)}function h(R,O){let D=l[R.id];D===void 0&&(b(R),D=v(R),l[R.id]=D,R.addEventListener("dispose",S));const H=O.program;s.updateUBOMapping(R,H);const F=t.render.frame;c[R.id]!==F&&(g(R),c[R.id]=F)}function v(R){const O=y();R.__bindingPointIndex=O;const D=o.createBuffer(),H=R.__size,F=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,H,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,D),D}function y(){for(let R=0;R<p;R++)if(d.indexOf(R)===-1)return d.push(R),R;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const O=l[R.id],D=R.uniforms,H=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let F=0,z=D.length;F<z;F++){const T=Array.isArray(D[F])?D[F]:[D[F]];for(let N=0,pt=T.length;N<pt;N++){const I=T[N];if(M(I,F,N,H)===!0){const q=I.__offset,G=Array.isArray(I.value)?I.value:[I.value];let tt=0;for(let J=0;J<G.length;J++){const P=G[J],B=C(P);typeof P=="number"||typeof P=="boolean"?(I.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,q+tt,I.__data)):P.isMatrix3?(I.__data[0]=P.elements[0],I.__data[1]=P.elements[1],I.__data[2]=P.elements[2],I.__data[3]=0,I.__data[4]=P.elements[3],I.__data[5]=P.elements[4],I.__data[6]=P.elements[5],I.__data[7]=0,I.__data[8]=P.elements[6],I.__data[9]=P.elements[7],I.__data[10]=P.elements[8],I.__data[11]=0):(P.toArray(I.__data,tt),tt+=B.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,q,I.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(R,O,D,H){const F=R.value,z=O+"_"+D;if(H[z]===void 0)return typeof F=="number"||typeof F=="boolean"?H[z]=F:H[z]=F.clone(),!0;{const T=H[z];if(typeof F=="number"||typeof F=="boolean"){if(T!==F)return H[z]=F,!0}else if(T.equals(F)===!1)return T.copy(F),!0}return!1}function b(R){const O=R.uniforms;let D=0;const H=16;for(let z=0,T=O.length;z<T;z++){const N=Array.isArray(O[z])?O[z]:[O[z]];for(let pt=0,I=N.length;pt<I;pt++){const q=N[pt],G=Array.isArray(q.value)?q.value:[q.value];for(let tt=0,J=G.length;tt<J;tt++){const P=G[tt],B=C(P),it=D%H,ct=it%B.boundary,xt=it+ct;D+=ct,xt!==0&&H-xt<B.storage&&(D+=H-xt),q.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=D,D+=B.storage}}}const F=D%H;return F>0&&(D+=H-F),R.__size=D,R.__cache={},this}function C(R){const O={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(O.boundary=4,O.storage=4):R.isVector2?(O.boundary=8,O.storage=8):R.isVector3||R.isColor?(O.boundary=16,O.storage=12):R.isVector4?(O.boundary=16,O.storage=16):R.isMatrix3?(O.boundary=48,O.storage=48):R.isMatrix4?(O.boundary=64,O.storage=64):R.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):le("WebGLRenderer: Unsupported uniform value type.",R),O}function S(R){const O=R.target;O.removeEventListener("dispose",S);const D=d.indexOf(O.__bindingPointIndex);d.splice(D,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function _(){for(const R in l)o.deleteBuffer(l[R]);d=[],l={},c={}}return{bind:m,update:h,dispose:_}}const rR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function oR(){return Fi===null&&(Fi=new YM(rR,16,16,kr,Sa),Fi.name="DFG_LUT",Fi.minFilter=wn,Fi.magFilter=wn,Fi.wrapS=_a,Fi.wrapT=_a,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class lR{constructor(t={}){const{canvas:i=EM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:M=ai}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=d;const C=M,S=new Set([pp,hp,dp]),_=new Set([ai,Xi,el,nl,up,fp]),R=new Uint32Array(4),O=new Int32Array(4);let D=null,H=null;const F=[],z=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let pt=!1;this._outputColorSpace=gi;let I=0,q=0,G=null,tt=-1,J=null;const P=new nn,B=new nn;let it=null;const ct=new Ae(0);let xt=0,U=i.width,Y=i.height,gt=1,Rt=null,wt=null;const et=new nn(0,0,U,Y),k=new nn(0,0,U,Y);let ut=!1;const Mt=new Sp;let Lt=!1,Bt=!1;const te=new $e,ie=new at,se=new nn,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function xe(){return G===null?gt:1}let X=s;function Ne(w,Z){return i.getContext(w,Z)}try{const w={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${lp}`),i.addEventListener("webglcontextlost",kt,!1),i.addEventListener("webglcontextrestored",oe,!1),i.addEventListener("webglcontextcreationerror",Ie,!1),X===null){const Z="webgl2";if(X=Ne(Z,w),X===null)throw Ne(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw De("WebGLRenderer: "+w.message),w}let Se,Le,Wt,L,E,Q,vt,bt,ht,qt,Ut,$t,ee,At,Tt,It,zt,Ht,pe,K,Nt,Dt,Gt;function Ct(){Se=new l1(X),Se.init(),Nt=new JA(X,Se),Le=new t1(X,Se,t,Nt),Wt=new KA(X,Se),Le.reversedDepthBuffer&&g&&Wt.buffers.depth.setReversed(!0),L=new f1(X),E=new FA,Q=new QA(X,Se,Wt,E,Le,Nt,L),vt=new o1(N),bt=new gE(X),Dt=new JT(X,bt),ht=new c1(X,bt,L,Dt),qt=new h1(X,ht,bt,Dt,L),Ht=new d1(X,Le,Q),Tt=new e1(E),Ut=new PA(N,vt,Se,Le,Dt,Tt),$t=new aR(N,E),ee=new BA,At=new XA(Se),zt=new QT(N,vt,Wt,qt,b,m),It=new ZA(N,qt,Le),Gt=new sR(X,L,Le,Wt),pe=new $T(X,Se,L),K=new u1(X,Se,L),L.programs=Ut.programs,N.capabilities=Le,N.extensions=Se,N.properties=E,N.renderLists=ee,N.shadowMap=It,N.state=Wt,N.info=L}Ct(),C!==ai&&(T=new m1(C,i.width,i.height,l,c));const mt=new nR(N,X);this.xr=mt,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const w=Se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(w){w!==void 0&&(gt=w,this.setSize(U,Y,!1))},this.getSize=function(w){return w.set(U,Y)},this.setSize=function(w,Z,ft=!0){if(mt.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,Y=Z,i.width=Math.floor(w*gt),i.height=Math.floor(Z*gt),ft===!0&&(i.style.width=w+"px",i.style.height=Z+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set(U*gt,Y*gt).floor()},this.setDrawingBufferSize=function(w,Z,ft){U=w,Y=Z,gt=ft,i.width=Math.floor(w*ft),i.height=Math.floor(Z*ft),this.setViewport(0,0,w,Z)},this.setEffects=function(w){if(C===ai){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Z=0;Z<w.length;Z++)if(w[Z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(et)},this.setViewport=function(w,Z,ft,ot){w.isVector4?et.set(w.x,w.y,w.z,w.w):et.set(w,Z,ft,ot),Wt.viewport(P.copy(et).multiplyScalar(gt).round())},this.getScissor=function(w){return w.copy(k)},this.setScissor=function(w,Z,ft,ot){w.isVector4?k.set(w.x,w.y,w.z,w.w):k.set(w,Z,ft,ot),Wt.scissor(B.copy(k).multiplyScalar(gt).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(w){Wt.setScissorTest(ut=w)},this.setOpaqueSort=function(w){Rt=w},this.setTransparentSort=function(w){wt=w},this.getClearColor=function(w){return w.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(w=!0,Z=!0,ft=!0){let ot=0;if(w){let nt=!1;if(G!==null){const Ot=G.texture.format;nt=S.has(Ot)}if(nt){const Ot=G.texture.type,Vt=_.has(Ot),Pt=zt.getClearColor(),Zt=zt.getClearAlpha(),Jt=Pt.r,re=Pt.g,fe=Pt.b;Vt?(R[0]=Jt,R[1]=re,R[2]=fe,R[3]=Zt,X.clearBufferuiv(X.COLOR,0,R)):(O[0]=Jt,O[1]=re,O[2]=fe,O[3]=Zt,X.clearBufferiv(X.COLOR,0,O))}else ot|=X.COLOR_BUFFER_BIT}Z&&(ot|=X.DEPTH_BUFFER_BIT),ft&&(ot|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&X.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",kt,!1),i.removeEventListener("webglcontextrestored",oe,!1),i.removeEventListener("webglcontextcreationerror",Ie,!1),zt.dispose(),ee.dispose(),At.dispose(),E.dispose(),vt.dispose(),qt.dispose(),Dt.dispose(),Gt.dispose(),Ut.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",Bs),mt.removeEventListener("sessionend",Is),Di.stop()};function kt(w){w.preventDefault(),ou("WebGLRenderer: Context Lost."),pt=!0}function oe(){ou("WebGLRenderer: Context Restored."),pt=!1;const w=L.autoReset,Z=It.enabled,ft=It.autoUpdate,ot=It.needsUpdate,nt=It.type;Ct(),L.autoReset=w,It.enabled=Z,It.autoUpdate=ft,It.needsUpdate=ot,It.type=nt}function Ie(w){De("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function we(w){const Z=w.target;Z.removeEventListener("dispose",we),Nn(Z)}function Nn(w){xi(w),E.remove(w)}function xi(w){const Z=E.get(w).programs;Z!==void 0&&(Z.forEach(function(ft){Ut.releaseProgram(ft)}),w.isShaderMaterial&&Ut.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,ft,ot,nt,Ot){Z===null&&(Z=ue);const Vt=nt.isMesh&&nt.matrixWorld.determinant()<0,Pt=fl(w,Z,ft,ot,nt);Wt.setMaterial(ot,Vt);let Zt=ft.index,Jt=1;if(ot.wireframe===!0){if(Zt=ht.getWireframeAttribute(ft),Zt===void 0)return;Jt=2}const re=ft.drawRange,fe=ft.attributes.position;let Xt=re.start*Jt,me=(re.start+re.count)*Jt;Ot!==null&&(Xt=Math.max(Xt,Ot.start*Jt),me=Math.min(me,(Ot.start+Ot.count)*Jt)),Zt!==null?(Xt=Math.max(Xt,0),me=Math.min(me,Zt.count)):fe!=null&&(Xt=Math.max(Xt,0),me=Math.min(me,fe.count));const Ke=me-Xt;if(Ke<0||Ke===1/0)return;Dt.setup(nt,ot,Pt,ft,Zt);let Qe,Oe=pe;if(Zt!==null&&(Qe=bt.get(Zt),Oe=K,Oe.setIndex(Qe)),nt.isMesh)ot.wireframe===!0?(Wt.setLineWidth(ot.wireframeLinewidth*xe()),Oe.setMode(X.LINES)):Oe.setMode(X.TRIANGLES);else if(nt.isLine){let mn=ot.linewidth;mn===void 0&&(mn=1),Wt.setLineWidth(mn*xe()),nt.isLineSegments?Oe.setMode(X.LINES):nt.isLineLoop?Oe.setMode(X.LINE_LOOP):Oe.setMode(X.LINE_STRIP)}else nt.isPoints?Oe.setMode(X.POINTS):nt.isSprite&&Oe.setMode(X.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)lu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))Oe.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const mn=nt._multiDrawStarts,Yt=nt._multiDrawCounts,Ln=nt._multiDrawCount,ce=Zt?bt.get(Zt).bytesPerElement:1,On=E.get(ot).currentProgram.getUniforms();for(let qn=0;qn<Ln;qn++)On.setValue(X,"_gl_DrawID",qn),Oe.render(mn[qn]/ce,Yt[qn])}else if(nt.isInstancedMesh)Oe.renderInstances(Xt,Ke,nt.count);else if(ft.isInstancedBufferGeometry){const mn=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,Yt=Math.min(ft.instanceCount,mn);Oe.renderInstances(Xt,Ke,Yt)}else Oe.render(Xt,Ke)};function Kr(w,Z,ft){w.transparent===!0&&w.side===Bi&&w.forceSinglePass===!1?(w.side=Wn,w.needsUpdate=!0,Ea(w,Z,ft),w.side=as,w.needsUpdate=!0,Ea(w,Z,ft),w.side=Bi):Ea(w,Z,ft)}this.compile=function(w,Z,ft=null){ft===null&&(ft=w),H=At.get(ft),H.init(Z),z.push(H),ft.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Z.layers)&&(H.pushLight(nt),nt.castShadow&&H.pushShadow(nt))}),w!==ft&&w.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Z.layers)&&(H.pushLight(nt),nt.castShadow&&H.pushShadow(nt))}),H.setupLights();const ot=new Set;return w.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Ot=nt.material;if(Ot)if(Array.isArray(Ot))for(let Vt=0;Vt<Ot.length;Vt++){const Pt=Ot[Vt];Kr(Pt,ft,nt),ot.add(Pt)}else Kr(Ot,ft,nt),ot.add(Ot)}),H=z.pop(),ot},this.compileAsync=function(w,Z,ft=null){const ot=this.compile(w,Z,ft);return new Promise(nt=>{function Ot(){if(ot.forEach(function(Vt){E.get(Vt).currentProgram.isReady()&&ot.delete(Vt)}),ot.size===0){nt(w);return}setTimeout(Ot,10)}Se.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let zs=null;function ll(w){zs&&zs(w)}function Bs(){Di.stop()}function Is(){Di.start()}const Di=new Qv;Di.setAnimationLoop(ll),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(w){zs=w,mt.setAnimationLoop(w),w===null?Di.stop():Di.start()},mt.addEventListener("sessionstart",Bs),mt.addEventListener("sessionend",Is),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(pt===!0)return;const ft=mt.enabled===!0&&mt.isPresenting===!0,ot=T!==null&&(G===null||ft)&&T.begin(N,G);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(Z),Z=mt.getCamera()),w.isScene===!0&&w.onBeforeRender(N,w,Z,G),H=At.get(w,z.length),H.init(Z),z.push(H),te.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Mt.setFromProjectionMatrix(te,Gi,Z.reversedDepth),Bt=this.localClippingEnabled,Lt=Tt.init(this.clippingPlanes,Bt),D=ee.get(w,F.length),D.init(),F.push(D),mt.enabled===!0&&mt.isPresenting===!0){const Vt=N.xr.getDepthSensingMesh();Vt!==null&&Hs(Vt,Z,-1/0,N.sortObjects)}Hs(w,Z,0,N.sortObjects),D.finish(),N.sortObjects===!0&&D.sort(Rt,wt),Qt=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,Qt&&zt.addToRenderList(D,w),this.info.render.frame++,Lt===!0&&Tt.beginShadows();const nt=H.state.shadowsArray;if(It.render(nt,w,Z),Lt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ot&&T.hasRenderPass())===!1){const Vt=D.opaque,Pt=D.transmissive;if(H.setupLights(),Z.isArrayCamera){const Zt=Z.cameras;if(Pt.length>0)for(let Jt=0,re=Zt.length;Jt<re;Jt++){const fe=Zt[Jt];rn(Vt,Pt,w,fe)}Qt&&zt.render(w);for(let Jt=0,re=Zt.length;Jt<re;Jt++){const fe=Zt[Jt];Si(D,w,fe,fe.viewport)}}else Pt.length>0&&rn(Vt,Pt,w,Z),Qt&&zt.render(w),Si(D,w,Z)}G!==null&&q===0&&(Q.updateMultisampleRenderTarget(G),Q.updateRenderTargetMipmap(G)),ot&&T.end(N),w.isScene===!0&&w.onAfterRender(N,w,Z),Dt.resetDefaultState(),tt=-1,J=null,z.pop(),z.length>0?(H=z[z.length-1],Lt===!0&&Tt.setGlobalState(N.clippingPlanes,H.state.camera)):H=null,F.pop(),F.length>0?D=F[F.length-1]:D=null};function Hs(w,Z,ft,ot){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)ft=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLight)H.pushLight(w),w.castShadow&&H.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Mt.intersectsSprite(w)){ot&&se.setFromMatrixPosition(w.matrixWorld).applyMatrix4(te);const Vt=qt.update(w),Pt=w.material;Pt.visible&&D.push(w,Vt,Pt,ft,se.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Mt.intersectsObject(w))){const Vt=qt.update(w),Pt=w.material;if(ot&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),se.copy(w.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),se.copy(Vt.boundingSphere.center)),se.applyMatrix4(w.matrixWorld).applyMatrix4(te)),Array.isArray(Pt)){const Zt=Vt.groups;for(let Jt=0,re=Zt.length;Jt<re;Jt++){const fe=Zt[Jt],Xt=Pt[fe.materialIndex];Xt&&Xt.visible&&D.push(w,Vt,Xt,ft,se.z,fe)}}else Pt.visible&&D.push(w,Vt,Pt,ft,se.z,null)}}const Ot=w.children;for(let Vt=0,Pt=Ot.length;Vt<Pt;Vt++)Hs(Ot[Vt],Z,ft,ot)}function Si(w,Z,ft,ot){const{opaque:nt,transmissive:Ot,transparent:Vt}=w;H.setupLightsView(ft),Lt===!0&&Tt.setGlobalState(N.clippingPlanes,ft),ot&&Wt.viewport(P.copy(ot)),nt.length>0&&pn(nt,Z,ft),Ot.length>0&&pn(Ot,Z,ft),Vt.length>0&&pn(Vt,Z,ft),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function rn(w,Z,ft,ot){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;if(H.state.transmissionRenderTarget[ot.id]===void 0){const Xt=Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float");H.state.transmissionRenderTarget[ot.id]=new ki(1,1,{generateMipmaps:!0,type:Xt?Sa:ai,minFilter:Os,samples:Math.max(4,Le.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace})}const Ot=H.state.transmissionRenderTarget[ot.id],Vt=ot.viewport||P;Ot.setSize(Vt.z*N.transmissionResolutionScale,Vt.w*N.transmissionResolutionScale);const Pt=N.getRenderTarget(),Zt=N.getActiveCubeFace(),Jt=N.getActiveMipmapLevel();N.setRenderTarget(Ot),N.getClearColor(ct),xt=N.getClearAlpha(),xt<1&&N.setClearColor(16777215,.5),N.clear(),Qt&&zt.render(ft);const re=N.toneMapping;N.toneMapping=Vi;const fe=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),H.setupLightsView(ot),Lt===!0&&Tt.setGlobalState(N.clippingPlanes,ot),pn(w,ft,ot),Q.updateMultisampleRenderTarget(Ot),Q.updateRenderTargetMipmap(Ot),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let me=0,Ke=Z.length;me<Ke;me++){const Qe=Z[me],{object:Oe,geometry:mn,material:Yt,group:Ln}=Qe;if(Yt.side===Bi&&Oe.layers.test(ot.layers)){const ce=Yt.side;Yt.side=Wn,Yt.needsUpdate=!0,ji(Oe,ft,ot,mn,Yt,Ln),Yt.side=ce,Yt.needsUpdate=!0,Xt=!0}}Xt===!0&&(Q.updateMultisampleRenderTarget(Ot),Q.updateRenderTargetMipmap(Ot))}N.setRenderTarget(Pt,Zt,Jt),N.setClearColor(ct,xt),fe!==void 0&&(ot.viewport=fe),N.toneMapping=re}function pn(w,Z,ft){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let nt=0,Ot=w.length;nt<Ot;nt++){const Vt=w[nt],{object:Pt,geometry:Zt,group:Jt}=Vt;let re=Vt.material;re.allowOverride===!0&&ot!==null&&(re=ot),Pt.layers.test(ft.layers)&&ji(Pt,Z,ft,Zt,re,Jt)}}function ji(w,Z,ft,ot,nt,Ot){w.onBeforeRender(N,Z,ft,ot,nt,Ot),w.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),nt.onBeforeRender(N,Z,ft,ot,w,Ot),nt.transparent===!0&&nt.side===Bi&&nt.forceSinglePass===!1?(nt.side=Wn,nt.needsUpdate=!0,N.renderBufferDirect(ft,Z,ot,nt,w,Ot),nt.side=as,nt.needsUpdate=!0,N.renderBufferDirect(ft,Z,ot,nt,w,Ot),nt.side=Bi):N.renderBufferDirect(ft,Z,ot,nt,w,Ot),w.onAfterRender(N,Z,ft,ot,nt,Ot)}function Ea(w,Z,ft){Z.isScene!==!0&&(Z=ue);const ot=E.get(w),nt=H.state.lights,Ot=H.state.shadowsArray,Vt=nt.state.version,Pt=Ut.getParameters(w,nt.state,Ot,Z,ft),Zt=Ut.getProgramCacheKey(Pt);let Jt=ot.programs;ot.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Z.environment:null,ot.fog=Z.fog;const re=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;ot.envMap=vt.get(w.envMap||ot.environment,re),ot.envMapRotation=ot.environment!==null&&w.envMap===null?Z.environmentRotation:w.envMapRotation,Jt===void 0&&(w.addEventListener("dispose",we),Jt=new Map,ot.programs=Jt);let fe=Jt.get(Zt);if(fe!==void 0){if(ot.currentProgram===fe&&ot.lightsStateVersion===Vt)return ul(w,Pt),fe}else Pt.uniforms=Ut.getUniforms(w),w.onBeforeCompile(Pt,N),fe=Ut.acquireProgram(Pt,Zt),Jt.set(Zt,fe),ot.uniforms=Pt.uniforms;const Xt=ot.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Xt.clippingPlanes=Tt.uniform),ul(w,Pt),ot.needsLights=Qr(w),ot.lightsStateVersion=Vt,ot.needsLights&&(Xt.ambientLightColor.value=nt.state.ambient,Xt.lightProbe.value=nt.state.probe,Xt.directionalLights.value=nt.state.directional,Xt.directionalLightShadows.value=nt.state.directionalShadow,Xt.spotLights.value=nt.state.spot,Xt.spotLightShadows.value=nt.state.spotShadow,Xt.rectAreaLights.value=nt.state.rectArea,Xt.ltc_1.value=nt.state.rectAreaLTC1,Xt.ltc_2.value=nt.state.rectAreaLTC2,Xt.pointLights.value=nt.state.point,Xt.pointLightShadows.value=nt.state.pointShadow,Xt.hemisphereLights.value=nt.state.hemi,Xt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Xt.spotLightMatrix.value=nt.state.spotLightMatrix,Xt.spotLightMap.value=nt.state.spotLightMap,Xt.pointShadowMatrix.value=nt.state.pointShadowMatrix),ot.currentProgram=fe,ot.uniformsList=null,fe}function cl(w){if(w.uniformsList===null){const Z=w.currentProgram.getUniforms();w.uniformsList=iu.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function ul(w,Z){const ft=E.get(w);ft.outputColorSpace=Z.outputColorSpace,ft.batching=Z.batching,ft.batchingColor=Z.batchingColor,ft.instancing=Z.instancing,ft.instancingColor=Z.instancingColor,ft.instancingMorph=Z.instancingMorph,ft.skinning=Z.skinning,ft.morphTargets=Z.morphTargets,ft.morphNormals=Z.morphNormals,ft.morphColors=Z.morphColors,ft.morphTargetsCount=Z.morphTargetsCount,ft.numClippingPlanes=Z.numClippingPlanes,ft.numIntersection=Z.numClipIntersection,ft.vertexAlphas=Z.vertexAlphas,ft.vertexTangents=Z.vertexTangents,ft.toneMapping=Z.toneMapping}function fl(w,Z,ft,ot,nt){Z.isScene!==!0&&(Z=ue),Q.resetTextureUnits();const Ot=Z.fog,Vt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?Z.environment:null,Pt=G===null?N.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Xr,Zt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,Jt=vt.get(ot.envMap||Vt,Zt),re=ot.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,fe=!!ft.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Xt=!!ft.morphAttributes.position,me=!!ft.morphAttributes.normal,Ke=!!ft.morphAttributes.color;let Qe=Vi;ot.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Qe=N.toneMapping);const Oe=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,mn=Oe!==void 0?Oe.length:0,Yt=E.get(ot),Ln=H.state.lights;if(Lt===!0&&(Bt===!0||w!==J)){const ln=w===J&&ot.id===tt;Tt.setState(ot,w,ln)}let ce=!1;ot.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Ln.state.version||Yt.outputColorSpace!==Pt||nt.isBatchedMesh&&Yt.batching===!1||!nt.isBatchedMesh&&Yt.batching===!0||nt.isBatchedMesh&&Yt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Yt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Yt.instancing===!1||!nt.isInstancedMesh&&Yt.instancing===!0||nt.isSkinnedMesh&&Yt.skinning===!1||!nt.isSkinnedMesh&&Yt.skinning===!0||nt.isInstancedMesh&&Yt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Yt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Yt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Yt.instancingMorph===!1&&nt.morphTexture!==null||Yt.envMap!==Jt||ot.fog===!0&&Yt.fog!==Ot||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Tt.numPlanes||Yt.numIntersection!==Tt.numIntersection)||Yt.vertexAlphas!==re||Yt.vertexTangents!==fe||Yt.morphTargets!==Xt||Yt.morphNormals!==me||Yt.morphColors!==Ke||Yt.toneMapping!==Qe||Yt.morphTargetsCount!==mn)&&(ce=!0):(ce=!0,Yt.__version=ot.version);let On=Yt.currentProgram;ce===!0&&(On=Ea(ot,Z,nt));let qn=!1,yi=!1,jn=!1;const Be=On.getUniforms(),on=Yt.uniforms;if(Wt.useProgram(On.program)&&(qn=!0,yi=!0,jn=!0),ot.id!==tt&&(tt=ot.id,yi=!0),qn||J!==w){Wt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Be.setValue(X,"projectionMatrix",w.projectionMatrix),Be.setValue(X,"viewMatrix",w.matrixWorldInverse);const Mi=Be.map.cameraPosition;Mi!==void 0&&Mi.setValue(X,ie.setFromMatrixPosition(w.matrixWorld)),Le.logarithmicDepthBuffer&&Be.setValue(X,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Be.setValue(X,"isOrthographic",w.isOrthographicCamera===!0),J!==w&&(J=w,yi=!0,jn=!0)}if(Yt.needsLights&&(Ln.state.directionalShadowMap.length>0&&Be.setValue(X,"directionalShadowMap",Ln.state.directionalShadowMap,Q),Ln.state.spotShadowMap.length>0&&Be.setValue(X,"spotShadowMap",Ln.state.spotShadowMap,Q),Ln.state.pointShadowMap.length>0&&Be.setValue(X,"pointShadowMap",Ln.state.pointShadowMap,Q)),nt.isSkinnedMesh){Be.setOptional(X,nt,"bindMatrix"),Be.setOptional(X,nt,"bindMatrixInverse");const ln=nt.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Be.setValue(X,"boneTexture",ln.boneTexture,Q))}nt.isBatchedMesh&&(Be.setOptional(X,nt,"batchingTexture"),Be.setValue(X,"batchingTexture",nt._matricesTexture,Q),Be.setOptional(X,nt,"batchingIdTexture"),Be.setValue(X,"batchingIdTexture",nt._indirectTexture,Q),Be.setOptional(X,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Be.setValue(X,"batchingColorTexture",nt._colorsTexture,Q));const Pn=ft.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Ht.update(nt,ft,On),(yi||Yt.receiveShadow!==nt.receiveShadow)&&(Yt.receiveShadow=nt.receiveShadow,Be.setValue(X,"receiveShadow",nt.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&Z.environment!==null&&(on.envMapIntensity.value=Z.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=oR()),yi&&(Be.setValue(X,"toneMappingExposure",N.toneMappingExposure),Yt.needsLights&&ss(on,jn),Ot&&ot.fog===!0&&$t.refreshFogUniforms(on,Ot),$t.refreshMaterialUniforms(on,ot,gt,Y,H.state.transmissionRenderTarget[w.id]),iu.upload(X,cl(Yt),on,Q)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(iu.upload(X,cl(Yt),on,Q),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Be.setValue(X,"center",nt.center),Be.setValue(X,"modelViewMatrix",nt.modelViewMatrix),Be.setValue(X,"normalMatrix",nt.normalMatrix),Be.setValue(X,"modelMatrix",nt.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const ln=ot.uniformsGroups;for(let Mi=0,Yi=ln.length;Mi<Yi;Mi++){const Gs=ln[Mi];Gt.update(Gs,On),Gt.bind(Gs,On)}}return On}function ss(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function Qr(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(w,Z,ft){const ot=E.get(w);ot.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),E.get(w.texture).__webglTexture=Z,E.get(w.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ft,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Z){const ft=E.get(w);ft.__webglFramebuffer=Z,ft.__useDefaultFramebuffer=Z===void 0};const ba=X.createFramebuffer();this.setRenderTarget=function(w,Z=0,ft=0){G=w,I=Z,q=ft;let ot=null,nt=!1,Ot=!1;if(w){const Pt=E.get(w);if(Pt.__useDefaultFramebuffer!==void 0){Wt.bindFramebuffer(X.FRAMEBUFFER,Pt.__webglFramebuffer),P.copy(w.viewport),B.copy(w.scissor),it=w.scissorTest,Wt.viewport(P),Wt.scissor(B),Wt.setScissorTest(it),tt=-1;return}else if(Pt.__webglFramebuffer===void 0)Q.setupRenderTarget(w);else if(Pt.__hasExternalTextures)Q.rebindTextures(w,E.get(w.texture).__webglTexture,E.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const re=w.depthTexture;if(Pt.__boundDepthTexture!==re){if(re!==null&&E.has(re)&&(w.width!==re.image.width||w.height!==re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(w)}}const Zt=w.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Ot=!0);const Jt=E.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Jt[Z])?ot=Jt[Z][ft]:ot=Jt[Z],nt=!0):w.samples>0&&Q.useMultisampledRTT(w)===!1?ot=E.get(w).__webglMultisampledFramebuffer:Array.isArray(Jt)?ot=Jt[ft]:ot=Jt,P.copy(w.viewport),B.copy(w.scissor),it=w.scissorTest}else P.copy(et).multiplyScalar(gt).floor(),B.copy(k).multiplyScalar(gt).floor(),it=ut;if(ft!==0&&(ot=ba),Wt.bindFramebuffer(X.FRAMEBUFFER,ot)&&Wt.drawBuffers(w,ot),Wt.viewport(P),Wt.scissor(B),Wt.setScissorTest(it),nt){const Pt=E.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Pt.__webglTexture,ft)}else if(Ot){const Pt=Z;for(let Zt=0;Zt<w.textures.length;Zt++){const Jt=E.get(w.textures[Zt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Zt,Jt.__webglTexture,ft,Pt)}}else if(w!==null&&ft!==0){const Pt=E.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Pt.__webglTexture,ft)}tt=-1},this.readRenderTargetPixels=function(w,Z,ft,ot,nt,Ot,Vt,Pt=0){if(!(w&&w.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Vt!==void 0&&(Zt=Zt[Vt]),Zt){Wt.bindFramebuffer(X.FRAMEBUFFER,Zt);try{const Jt=w.textures[Pt],re=Jt.format,fe=Jt.type;if(w.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Pt),!Le.textureFormatReadable(re)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(fe)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-ot&&ft>=0&&ft<=w.height-nt&&X.readPixels(Z,ft,ot,nt,Nt.convert(re),Nt.convert(fe),Ot)}finally{const Jt=G!==null?E.get(G).__webglFramebuffer:null;Wt.bindFramebuffer(X.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(w,Z,ft,ot,nt,Ot,Vt,Pt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=E.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Vt!==void 0&&(Zt=Zt[Vt]),Zt)if(Z>=0&&Z<=w.width-ot&&ft>=0&&ft<=w.height-nt){Wt.bindFramebuffer(X.FRAMEBUFFER,Zt);const Jt=w.textures[Pt],re=Jt.format,fe=Jt.type;if(w.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Pt),!Le.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Xt),X.bufferData(X.PIXEL_PACK_BUFFER,Ot.byteLength,X.STREAM_READ),X.readPixels(Z,ft,ot,nt,Nt.convert(re),Nt.convert(fe),0);const me=G!==null?E.get(G).__webglFramebuffer:null;Wt.bindFramebuffer(X.FRAMEBUFFER,me);const Ke=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await bM(X,Ke,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Xt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ot),X.deleteBuffer(Xt),X.deleteSync(Ke),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Z=null,ft=0){const ot=Math.pow(2,-ft),nt=Math.floor(w.image.width*ot),Ot=Math.floor(w.image.height*ot),Vt=Z!==null?Z.x:0,Pt=Z!==null?Z.y:0;Q.setTexture2D(w,0),X.copyTexSubImage2D(X.TEXTURE_2D,ft,0,0,Vt,Pt,nt,Ot),Wt.unbindTexture()};const Ta=X.createFramebuffer(),rs=X.createFramebuffer();this.copyTextureToTexture=function(w,Z,ft=null,ot=null,nt=0,Ot=0){let Vt,Pt,Zt,Jt,re,fe,Xt,me,Ke;const Qe=w.isCompressedTexture?w.mipmaps[Ot]:w.image;if(ft!==null)Vt=ft.max.x-ft.min.x,Pt=ft.max.y-ft.min.y,Zt=ft.isBox3?ft.max.z-ft.min.z:1,Jt=ft.min.x,re=ft.min.y,fe=ft.isBox3?ft.min.z:0;else{const on=Math.pow(2,-nt);Vt=Math.floor(Qe.width*on),Pt=Math.floor(Qe.height*on),w.isDataArrayTexture?Zt=Qe.depth:w.isData3DTexture?Zt=Math.floor(Qe.depth*on):Zt=1,Jt=0,re=0,fe=0}ot!==null?(Xt=ot.x,me=ot.y,Ke=ot.z):(Xt=0,me=0,Ke=0);const Oe=Nt.convert(Z.format),mn=Nt.convert(Z.type);let Yt;Z.isData3DTexture?(Q.setTexture3D(Z,0),Yt=X.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(Q.setTexture2DArray(Z,0),Yt=X.TEXTURE_2D_ARRAY):(Q.setTexture2D(Z,0),Yt=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Z.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Z.unpackAlignment);const Ln=X.getParameter(X.UNPACK_ROW_LENGTH),ce=X.getParameter(X.UNPACK_IMAGE_HEIGHT),On=X.getParameter(X.UNPACK_SKIP_PIXELS),qn=X.getParameter(X.UNPACK_SKIP_ROWS),yi=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Qe.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Qe.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Jt),X.pixelStorei(X.UNPACK_SKIP_ROWS,re),X.pixelStorei(X.UNPACK_SKIP_IMAGES,fe);const jn=w.isDataArrayTexture||w.isData3DTexture,Be=Z.isDataArrayTexture||Z.isData3DTexture;if(w.isDepthTexture){const on=E.get(w),Pn=E.get(Z),ln=E.get(on.__renderTarget),Mi=E.get(Pn.__renderTarget);Wt.bindFramebuffer(X.READ_FRAMEBUFFER,ln.__webglFramebuffer),Wt.bindFramebuffer(X.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Yi=0;Yi<Zt;Yi++)jn&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,E.get(w).__webglTexture,nt,fe+Yi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,E.get(Z).__webglTexture,Ot,Ke+Yi)),X.blitFramebuffer(Jt,re,Vt,Pt,Xt,me,Vt,Pt,X.DEPTH_BUFFER_BIT,X.NEAREST);Wt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(nt!==0||w.isRenderTargetTexture||E.has(w)){const on=E.get(w),Pn=E.get(Z);Wt.bindFramebuffer(X.READ_FRAMEBUFFER,Ta),Wt.bindFramebuffer(X.DRAW_FRAMEBUFFER,rs);for(let ln=0;ln<Zt;ln++)jn?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,on.__webglTexture,nt,fe+ln):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,on.__webglTexture,nt),Be?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Pn.__webglTexture,Ot,Ke+ln):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Pn.__webglTexture,Ot),nt!==0?X.blitFramebuffer(Jt,re,Vt,Pt,Xt,me,Vt,Pt,X.COLOR_BUFFER_BIT,X.NEAREST):Be?X.copyTexSubImage3D(Yt,Ot,Xt,me,Ke+ln,Jt,re,Vt,Pt):X.copyTexSubImage2D(Yt,Ot,Xt,me,Jt,re,Vt,Pt);Wt.bindFramebuffer(X.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Be?w.isDataTexture||w.isData3DTexture?X.texSubImage3D(Yt,Ot,Xt,me,Ke,Vt,Pt,Zt,Oe,mn,Qe.data):Z.isCompressedArrayTexture?X.compressedTexSubImage3D(Yt,Ot,Xt,me,Ke,Vt,Pt,Zt,Oe,Qe.data):X.texSubImage3D(Yt,Ot,Xt,me,Ke,Vt,Pt,Zt,Oe,mn,Qe):w.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ot,Xt,me,Vt,Pt,Oe,mn,Qe.data):w.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ot,Xt,me,Qe.width,Qe.height,Oe,Qe.data):X.texSubImage2D(X.TEXTURE_2D,Ot,Xt,me,Vt,Pt,Oe,mn,Qe);X.pixelStorei(X.UNPACK_ROW_LENGTH,Ln),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,ce),X.pixelStorei(X.UNPACK_SKIP_PIXELS,On),X.pixelStorei(X.UNPACK_SKIP_ROWS,qn),X.pixelStorei(X.UNPACK_SKIP_IMAGES,yi),Ot===0&&Z.generateMipmaps&&X.generateMipmap(Yt),Wt.unbindTexture()},this.initRenderTarget=function(w){E.get(w).__webglFramebuffer===void 0&&Q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Q.setTextureCube(w,0):w.isData3DTexture?Q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Q.setTexture2DArray(w,0):Q.setTexture2D(w,0),Wt.unbindTexture()},this.resetState=function(){I=0,q=0,G=null,Wt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const Kc=16,Qc=500,mv=["#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2","#58a6ff","#3fb950","#d29922","#f85149","#bc8cff","#39d2c0","#f0883e","#db61a2"],zr=3,gv=Math.PI*.8,_v=2.4,hh=1.4,Jo=2;function cR({eeg:o,yScale:t,onExit:i}){const s=yt.useRef(null),l=yt.useRef(null),c=yt.useRef(null),d=yt.useRef(null),p=yt.useRef([]),m=yt.useRef(null),h=yt.useRef(null),v=yt.useRef(!1),y=yt.useRef(o),g=yt.useRef(t),M=yt.useRef(i);y.current=o,g.current=t,M.current=i;const b=yt.useCallback(()=>{if(v.current)return;v.current=!0,m.current&&(m.current.end().catch(()=>{}),m.current=null),h.current!=null&&(cancelAnimationFrame(h.current),h.current=null);const C=l.current;C&&(C.xr.enabled=!1,C.setAnimationLoop(null),C.dispose(),l.current=null),p.current=[]},[]);return yt.useEffect(()=>{const C=s.current;if(!C)return;v.current=!1;const S=new HM;S.background=new Ae(395792),S.fog=new vp(395792,.12),c.current=S;const _=new ii(75,window.innerWidth/window.innerHeight,.1,50);_.position.set(0,hh,0),d.current=_;const R=new lR({antialias:!0,alpha:!1});R.setPixelRatio(Math.min(window.devicePixelRatio,2)),R.setSize(window.innerWidth,window.innerHeight),R.xr.enabled=!0,C.appendChild(R.domElement),l.current=R,S.add(new fE(2241348,.5));const O=new uE(5809919,1.2,20);O.position.set(0,hh+1,0),S.add(O);const D=new pE(10,20,1712691,988448);S.add(D);const H=[];for(let I=0;I<Kc;I++){const q=new Ae(mv[I]),G=I/(Kc-1),tt=-gv/2+G*gv,J=hh+_v/2-G*_v,P=new Float32Array(Qc*3),B=new ri;B.setAttribute("position",new vi(P,3)),B.setDrawRange(0,0);const it=new yp({color:q,linewidth:2,transparent:!0,opacity:.9}),ct=new Xv(B,it);S.add(ct);const xt=document.createElement("canvas");xt.width=128,xt.height=48;const U=xt.getContext("2d");U.fillStyle="transparent",U.clearRect(0,0,128,48),U.font="bold 28px monospace",U.fillStyle=mv[I],U.textAlign="center",U.textBaseline="middle",U.fillText(`Ch ${I+1}`,64,24);const Y=new $M(xt),gt=new Gv({map:Y,transparent:!0,opacity:.7}),Rt=new qM(gt);Rt.scale.set(.4,.15,1);const wt=Math.sin(tt)*(zr+.05),et=-Math.cos(tt)*(zr+.05),k=wt-Math.cos(tt)*(Jo/2),ut=et+Math.sin(tt)*(Jo/2);Rt.position.set(k-Math.cos(tt)*.3,J,ut+Math.sin(tt)*.3),S.add(Rt);const Mt=new ol(Jo+.2,.12),Lt=new xp({color:q,transparent:!0,opacity:.04,side:Bi}),Bt=new Wi(Mt,Lt);Bt.position.set(Math.sin(tt)*zr,J,-Math.cos(tt)*zr),Bt.rotation.y=tt,S.add(Bt),H.push({line:ct,geometry:B,positions:P,angle:tt,yPos:J,glowPlane:Bt})}p.current=H;function F(){const I=y.current,q=I.buffers.current;if(!q)return;const G=I.samplesInBuffer.current,tt=I.writeIndex.current,J=I.bufferSize;if(G<2)return;const P=G>Qc?Math.floor(G/Qc):1,B=Math.min(Qc,Math.ceil(G/P)),it=g.current||100;for(let ct=0;ct<Kc;ct++){const{positions:xt,geometry:U,angle:Y,yPos:gt}=H[ct],Rt=q[ct],wt=Math.sin(Y)*zr,et=-Math.cos(Y)*zr,k=-Math.cos(Y),ut=-Math.sin(Y);for(let Mt=0;Mt<B;Mt++){const Lt=Mt*P,Bt=(tt-G+Lt+J)%J,te=Mt/(B-1),ie=wt+k*(te-.5)*Jo,se=gt+Rt[Bt]/it*.08,ue=et+ut*(te-.5)*Jo;xt[Mt*3]=ie,xt[Mt*3+1]=se,xt[Mt*3+2]=ue}U.attributes.position.needsUpdate=!0,U.setDrawRange(0,B)}}let z=null;async function T(){if(navigator.xr)for(const I of["immersive-vr","immersive-ar","inline"])try{if(await navigator.xr.isSessionSupported(I)){z=I;break}}catch{}if(z&&z!=="inline")try{const I=await navigator.xr.requestSession(z,{optionalFeatures:["local-floor","bounded-floor"]});m.current=I,R.xr.setSession(I),I.addEventListener("end",()=>{m.current=null,M.current()}),R.setAnimationLoop(()=>{F(),R.render(S,_)});return}catch{}N()}function N(){let I=!1,q=0,G=0,tt=0,J=0;const P=U=>{I=!0,q=U.clientX,G=U.clientY},B=()=>{I=!1},it=U=>{I&&(tt-=(U.clientX-q)*.003,J-=(U.clientY-G)*.003,J=Math.max(-Math.PI/3,Math.min(Math.PI/3,J)),q=U.clientX,G=U.clientY)},ct=R.domElement;ct.addEventListener("pointerdown",P),ct.addEventListener("pointerup",B),ct.addEventListener("pointermove",it);function xt(){_.rotation.order="YXZ",_.rotation.y=tt,_.rotation.x=J,F(),R.render(S,_),h.current=requestAnimationFrame(xt)}h.current=requestAnimationFrame(xt)}T();function pt(){l.current&&(_.aspect=window.innerWidth/window.innerHeight,_.updateProjectionMatrix(),R.setSize(window.innerWidth,window.innerHeight))}return window.addEventListener("resize",pt),()=>{window.removeEventListener("resize",pt),b(),C.contains(R.domElement)&&C.removeChild(R.domElement)}},[]),W.jsxs("div",{className:"xr-overlay",children:[W.jsx("div",{className:"xr-container",ref:s}),W.jsxs("div",{className:"xr-hud",children:[W.jsx("button",{className:"btn xr-exit-btn",onClick:()=>{b(),M.current()},children:"✕ Exit XR"}),W.jsxs("div",{className:"xr-info",children:[W.jsx("span",{className:"xr-badge",children:"WebXR"}),W.jsxs("span",{children:[Kc," channels · ±",t," µV"]})]})]})]})}const uR=16,fR=[{value:50,label:"±50 µV"},{value:100,label:"±100 µV"},{value:200,label:"±200 µV"},{value:500,label:"±500 µV"}],dR=[{value:2,label:"2s"},{value:4,label:"4s"},{value:8,label:"8s"},{value:16,label:"16s"}];function hR(){const[o,t]=yt.useState("live"),[i,s]=yt.useState(null),[l,c]=yt.useState(!1),[d,p]=yt.useState(!0),[m,h]=yt.useState(!1),[v,y]=yt.useState(1),[g,M]=yt.useState(40),[b,C]=yt.useState(4),[S,_]=yt.useState(100),[R,O]=yt.useState(null),[D,H]=yt.useState(!1),F=yy(b);function z(){const G=!l;c(G),F.setPaused(G)}function T(){const G=!m;h(G),F.sendCommand({cmd:"set_filter",enabled:G,lowcut:parseFloat(v)||1,highcut:parseFloat(g)||40})}function N(){F.sendCommand({cmd:F.recording?"stop_record":"start_record"})}function pt(G){const tt=Math.floor(G/60),J=Math.floor(G%60);return`${String(tt).padStart(2,"0")}:${String(J).padStart(2,"0")}`}function I(G,tt){m&&F.sendCommand({cmd:"set_filter",enabled:!0,lowcut:parseFloat(G)||1,highcut:parseFloat(tt)||40})}const q=yt.useCallback(G=>{O(tt=>tt===G?null:G)},[]);return yt.useEffect(()=>{function G(tt){if(!(tt.target.tagName==="INPUT"||tt.target.tagName==="SELECT"||tt.target.tagName==="TEXTAREA")){if(o!=="live"){tt.code==="Escape"&&(o==="playback"?(t("sessions"),s(null)):o==="sessions"&&t("live"));return}switch(tt.code){case"Space":tt.preventDefault(),z();break;case"KeyR":N();break;case"KeyF":p(J=>!J);break;case"KeyV":H(J=>!J);break;case"Escape":D?H(!1):R!==null?O(null):F.recordResult&&F.dismissRecordResult();break}}}return window.addEventListener("keydown",G),()=>window.removeEventListener("keydown",G)},[R,F.recordResult,o]),o==="playback"&&i?W.jsx(Rd,{children:W.jsx(Vy,{filename:i,onBack:()=>{t("sessions"),s(null)}})}):o==="sessions"?W.jsx(Rd,{children:W.jsx(Oy,{onSelect:G=>{s(G),t("playback")},onBack:()=>t("live")})}):W.jsxs(Rd,{children:[W.jsxs("header",{className:"header",children:[W.jsxs("h1",{children:["Pi",W.jsx("span",{children:"EEG"}),"-16"," ",W.jsx("small",{style:{fontWeight:400,color:"var(--text-dim)"},children:"Dashboard"})]}),W.jsxs("div",{className:"status-bar",children:[W.jsxs("span",{children:[W.jsx("span",{className:`status-dot${F.connected?" connected":""}`}),F.connected?" Connected":" Disconnected"]}),W.jsx("span",{children:F.hz?`${F.hz} Hz`:"— Hz"}),W.jsxs("span",{children:[F.sampleCount.toLocaleString()," samples"]})]})]}),W.jsxs("div",{className:"controls",children:[W.jsx("button",{className:`btn${l?" active":""}`,onClick:z,children:l?"▶ Resume":"⏸ Pause"}),W.jsxs("button",{className:`btn btn-record${F.recording?" recording":""}`,onClick:N,children:[W.jsx("span",{className:"rec-dot"}),F.recording?`⏹ Stop ${pt(F.recordElapsed)}`:"⏺ Record"]}),W.jsxs("button",{className:`btn${m?" active":""}`,onClick:T,children:["Filter: ",m?"ON":"OFF"]}),W.jsxs("button",{className:`btn${d?" active":""}`,onClick:()=>p(G=>!G),children:["FFT ",d?"ON":"OFF"]}),W.jsx("button",{className:"btn btn-sessions",onClick:()=>t("sessions"),children:"Sessions"}),W.jsx("button",{className:"btn btn-xr",onClick:()=>H(!0),title:"Open EEG waves in immersive 3D / VR",children:"🥽 XR View"}),W.jsx("div",{className:"sep"}),W.jsxs("div",{className:"control-group",children:[W.jsx("label",{children:"Low"}),W.jsx("input",{type:"number",value:v,min:.1,max:50,step:.5,onChange:G=>{y(G.target.value),I(G.target.value,g)}})," ","Hz"]}),W.jsxs("div",{className:"control-group",children:[W.jsx("label",{children:"High"}),W.jsx("input",{type:"number",value:g,min:1,max:125,step:1,onChange:G=>{M(G.target.value),I(v,G.target.value)}})," ","Hz"]}),W.jsx("div",{className:"sep"}),W.jsxs("div",{className:"control-group",children:[W.jsx("label",{children:"Time window"}),W.jsx("select",{value:b,onChange:G=>C(parseInt(G.target.value)),children:dR.map(G=>W.jsx("option",{value:G.value,children:G.label},G.value))})]}),W.jsxs("div",{className:"control-group",children:[W.jsx("label",{children:"Scale"}),W.jsx("select",{value:S,onChange:G=>_(parseInt(G.target.value)),children:fR.map(G=>W.jsx("option",{value:G.value,children:G.label},G.value))})]})]}),W.jsxs("div",{className:`main-area${d?" with-fft":""}`,children:[R!==null&&W.jsx("div",{className:"expanded-overlay",onClick:()=>O(null),children:W.jsx("div",{className:"expanded-channel",onClick:G=>G.stopPropagation(),children:W.jsx(u_,{chIdx:R,eeg:F,yRange:S,expanded:!0,onToggleExpand:()=>O(null)})})}),W.jsx("div",{className:"grid",children:Array.from({length:uR},(G,tt)=>W.jsx(u_,{chIdx:tt,eeg:F,yRange:S,onToggleExpand:()=>q(tt)},tt))}),d&&W.jsx(Ny,{eeg:F})]}),F.recordResult&&W.jsx("div",{className:"modal-overlay",children:W.jsxs("div",{className:"modal-card",children:[W.jsx("h2",{children:"Recording Complete"}),W.jsxs("div",{className:"modal-details",children:[W.jsxs("div",{className:"modal-row",children:[W.jsx("span",{className:"modal-label",children:"File"}),W.jsx("span",{className:"modal-value",children:F.recordResult.filename})]}),W.jsxs("div",{className:"modal-row",children:[W.jsx("span",{className:"modal-label",children:"Duration"}),W.jsx("span",{className:"modal-value",children:pt(F.recordResult.duration)})]}),W.jsxs("div",{className:"modal-row",children:[W.jsx("span",{className:"modal-label",children:"Frames"}),W.jsx("span",{className:"modal-value",children:F.recordResult.frames.toLocaleString()})]}),W.jsxs("div",{className:"modal-row",children:[W.jsx("span",{className:"modal-label",children:"Saved to"}),W.jsx("span",{className:"modal-value modal-path",children:F.recordResult.path})]})]}),W.jsxs("div",{className:"modal-actions",children:[W.jsx("a",{className:"btn modal-btn-download",href:F.recordResult.downloadUrl,download:!0,children:"Download CSV"}),W.jsx("button",{className:"btn modal-btn-view",onClick:()=>{const G=F.recordResult.filename;F.dismissRecordResult(),s(G),t("playback")},children:"View Session"}),W.jsx("button",{className:"btn modal-btn-dismiss",onClick:F.dismissRecordResult,children:"Dismiss"})]})]})}),D&&W.jsx(cR,{eeg:F,yScale:S,onExit:()=>H(!1)}),W.jsx(Ly,{}),W.jsxs("footer",{className:"footer",children:[W.jsx("span",{children:"PiEEG-16-server · React Dashboard"}),W.jsxs("span",{className:"kbd-hints",children:[W.jsx("kbd",{children:"Space"})," Pause ",W.jsx("kbd",{children:"R"})," Record ",W.jsx("kbd",{children:"F"})," FFT ",W.jsx("kbd",{children:"V"})," XR ",W.jsx("kbd",{children:"Esc"})," Close ",W.jsx("kbd",{children:"P"})," Perf"]}),W.jsx("span",{children:"Battery powered only · Not a medical device"})]})]})}vy.createRoot(document.getElementById("root")).render(W.jsx(uy.StrictMode,{children:W.jsx(hR,{})}));
