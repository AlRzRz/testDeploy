var R={exports:{}},r={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=Symbol.for("react.element"),D=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),B=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),W=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),$=Symbol.iterator;function G(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,j={};function p(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||g}p.prototype.isReactComponent={};p.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};p.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function O(){}O.prototype=p.prototype;function S(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||g}var w=S.prototype=new O;w.constructor=S;x(w,p.prototype);w.isPureReactComponent=!0;var b=Array.isArray,L=Object.prototype.hasOwnProperty,k={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function I(e,t,n){var u,o={},i=null,f=null;if(t!=null)for(u in t.ref!==void 0&&(f=t.ref),t.key!==void 0&&(i=""+t.key),t)L.call(t,u)&&!P.hasOwnProperty(u)&&(o[u]=t[u]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var c=Array(s),a=0;a<s;a++)c[a]=arguments[a+2];o.children=c}if(e&&e.defaultProps)for(u in s=e.defaultProps,s)o[u]===void 0&&(o[u]=s[u]);return{$$typeof:y,type:e,key:i,ref:f,props:o,_owner:k.current}}function J(e,t){return{$$typeof:y,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function E(e){return typeof e=="object"&&e!==null&&e.$$typeof===y}function Q(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var C=/\/+/g;function v(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Q(""+e.key):t.toString(36)}function h(e,t,n,u,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var f=!1;if(e===null)f=!0;else switch(i){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case y:case D:f=!0}}if(f)return f=e,o=o(f),e=u===""?"."+v(f,0):u,b(o)?(n="",e!=null&&(n=e.replace(C,"$&/")+"/"),h(o,t,n,"",function(a){return a})):o!=null&&(E(o)&&(o=J(o,n+(!o.key||f&&f.key===o.key?"":(""+o.key).replace(C,"$&/")+"/")+e)),t.push(o)),1;if(f=0,u=u===""?".":u+":",b(e))for(var s=0;s<e.length;s++){i=e[s];var c=u+v(i,s);f+=h(i,t,n,c,o)}else if(c=G(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=u+v(i,s++),f+=h(i,t,n,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return f}function d(e,t,n){if(e==null)return e;var u=[],o=0;return h(e,u,"","",function(i){return t.call(n,i,o++)}),u}function X(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},m={transition:null},Y={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:m,ReactCurrentOwner:k};function A(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:d,forEach:function(e,t,n){d(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return d(e,function(){t++}),t},toArray:function(e){return d(e,function(t){return t})||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};r.Component=p;r.Fragment=U;r.Profiler=F;r.PureComponent=S;r.StrictMode=q;r.Suspense=H;r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y;r.act=A;r.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=x({},e.props),o=e.key,i=e.ref,f=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,f=k.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)L.call(t,c)&&!P.hasOwnProperty(c)&&(u[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)u.children=n;else if(1<c){s=Array(c);for(var a=0;a<c;a++)s[a]=arguments[a+2];u.children=s}return{$$typeof:y,type:e.type,key:o,ref:i,props:u,_owner:f}};r.createContext=function(e){return e={$$typeof:B,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:M,_context:e},e.Consumer=e};r.createElement=I;r.createFactory=function(e){var t=I.bind(null,e);return t.type=e,t};r.createRef=function(){return{current:null}};r.forwardRef=function(e){return{$$typeof:z,render:e}};r.isValidElement=E;r.lazy=function(e){return{$$typeof:K,_payload:{_status:-1,_result:e},_init:X}};r.memo=function(e,t){return{$$typeof:W,type:e,compare:t===void 0?null:t}};r.startTransition=function(e){var t=m.transition;m.transition={};try{e()}finally{m.transition=t}};r.unstable_act=A;r.useCallback=function(e,t){return l.current.useCallback(e,t)};r.useContext=function(e){return l.current.useContext(e)};r.useDebugValue=function(){};r.useDeferredValue=function(e){return l.current.useDeferredValue(e)};r.useEffect=function(e,t){return l.current.useEffect(e,t)};r.useId=function(){return l.current.useId()};r.useImperativeHandle=function(e,t,n){return l.current.useImperativeHandle(e,t,n)};r.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};r.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};r.useMemo=function(e,t){return l.current.useMemo(e,t)};r.useReducer=function(e,t,n){return l.current.useReducer(e,t,n)};r.useRef=function(e){return l.current.useRef(e)};r.useState=function(e){return l.current.useState(e)};r.useSyncExternalStore=function(e,t,n){return l.current.useSyncExternalStore(e,t,n)};r.useTransition=function(){return l.current.useTransition()};r.version="18.3.1";R.exports=r;var _=R.exports;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Z={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),te=(e,t)=>{const n=_.forwardRef(({color:u="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:f,className:s="",children:c,...a},N)=>_.createElement("svg",{ref:N,...Z,width:o,height:o,stroke:u,strokeWidth:f?Number(i)*24/Number(o):i,className:["lucide",`lucide-${ee(e)}`,s].join(" "),...a},[...t.map(([T,V])=>_.createElement(T,V)),...Array.isArray(c)?c:[c]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=te("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);export{re as L,_ as r};
