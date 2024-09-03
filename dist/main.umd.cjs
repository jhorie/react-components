(function(w,h){typeof exports=="object"&&typeof module<"u"?h(exports,require("react"),require("@mui/material"),require("uuid"),require("lodash")):typeof define=="function"&&define.amd?define(["exports","react","@mui/material","uuid","lodash"],h):(w=typeof globalThis<"u"?globalThis:w||self,h(w.main={},w.require$$0,w.material,w.uuid,w.lodash))})(this,function(w,h,D,Ve,ue){"use strict";let O={uuids:{}},Y=[];const k={blockingStarted:n=>{O.uuids[n]=!0,O={...O},le()},blockingStopped:n=>{delete O.uuids[n],O={...O},le()},subscribe(n){return Y=[...Y,n],()=>{Y=Y.filter(d=>d!==n)}},getSnapshot(){return O}};function le(){for(let n of Y)n()}function ce(){const n=h.useSyncExternalStore(k.subscribe,k.getSnapshot);return Object.keys(n.uuids).length>0}var $={exports:{}},B={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe;function Ne(){if(fe)return B;fe=1;var n=h,d=Symbol.for("react.element"),b=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function a(c,l,A){var S,C={},P=null,J=null;A!==void 0&&(P=""+A),l.key!==void 0&&(P=""+l.key),l.ref!==void 0&&(J=l.ref);for(S in l)g.call(l,S)&&!T.hasOwnProperty(S)&&(C[S]=l[S]);if(c&&c.defaultProps)for(S in l=c.defaultProps,l)C[S]===void 0&&(C[S]=l[S]);return{$$typeof:d,type:c,key:P,ref:J,props:C,_owner:R.current}}return B.Fragment=b,B.jsx=a,B.jsxs=a,B}var U={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var de;function He(){return de||(de=1,process.env.NODE_ENV!=="production"&&function(){var n=h,d=Symbol.for("react.element"),b=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),be=Symbol.iterator,nr="@@iterator";function or(e){if(e===null||typeof e!="object")return null;var r=be&&e[be]||e[nr];return typeof r=="function"?r:null}var W=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function y(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];ar("error",e,t)}}function ar(e,r,t){{var o=W.ReactDebugCurrentFrame,u=o.getStackAddendum();u!==""&&(r+="%s",t=t.concat([u]));var f=t.map(function(s){return String(s)});f.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,f)}}var ir=!1,sr=!1,ur=!1,lr=!1,cr=!1,ye;ye=Symbol.for("react.module.reference");function fr(e){return!!(typeof e=="string"||typeof e=="function"||e===g||e===T||cr||e===R||e===A||e===S||lr||e===J||ir||sr||ur||typeof e=="object"&&e!==null&&(e.$$typeof===P||e.$$typeof===C||e.$$typeof===a||e.$$typeof===c||e.$$typeof===l||e.$$typeof===ye||e.getModuleId!==void 0))}function dr(e,r,t){var o=e.displayName;if(o)return o;var u=r.displayName||r.name||"";return u!==""?t+"("+u+")":t}function me(e){return e.displayName||"Context"}function x(e){if(e==null)return null;if(typeof e.tag=="number"&&y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case g:return"Fragment";case b:return"Portal";case T:return"Profiler";case R:return"StrictMode";case A:return"Suspense";case S:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case c:var r=e;return me(r)+".Consumer";case a:var t=e;return me(t._context)+".Provider";case l:return dr(e,e.render,"ForwardRef");case C:var o=e.displayName||null;return o!==null?o:x(e.type)||"Memo";case P:{var u=e,f=u._payload,s=u._init;try{return x(s(f))}catch{return null}}}return null}var I=Object.assign,V=0,Ee,Se,Re,_e,we,ke,Te;function xe(){}xe.__reactDisabledLog=!0;function pr(){{if(V===0){Ee=console.log,Se=console.info,Re=console.warn,_e=console.error,we=console.group,ke=console.groupCollapsed,Te=console.groupEnd;var e={configurable:!0,enumerable:!0,value:xe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}V++}}function vr(){{if(V--,V===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:I({},e,{value:Ee}),info:I({},e,{value:Se}),warn:I({},e,{value:Re}),error:I({},e,{value:_e}),group:I({},e,{value:we}),groupCollapsed:I({},e,{value:ke}),groupEnd:I({},e,{value:Te})})}V<0&&y("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Q=W.ReactCurrentDispatcher,ee;function G(e,r,t){{if(ee===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);ee=o&&o[1]||""}return`
`+ee+e}}var re=!1,K;{var gr=typeof WeakMap=="function"?WeakMap:Map;K=new gr}function Ce(e,r){if(!e||re)return"";{var t=K.get(e);if(t!==void 0)return t}var o;re=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var f;f=Q.current,Q.current=null,pr();try{if(r){var s=function(){throw Error()};if(Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(E){o=E}Reflect.construct(e,[],s)}else{try{s.call()}catch(E){o=E}e.call(s.prototype)}}else{try{throw Error()}catch(E){o=E}e()}}catch(E){if(E&&o&&typeof E.stack=="string"){for(var i=E.stack.split(`
`),m=o.stack.split(`
`),p=i.length-1,v=m.length-1;p>=1&&v>=0&&i[p]!==m[v];)v--;for(;p>=1&&v>=0;p--,v--)if(i[p]!==m[v]){if(p!==1||v!==1)do if(p--,v--,v<0||i[p]!==m[v]){var _=`
`+i[p].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),typeof e=="function"&&K.set(e,_),_}while(p>=1&&v>=0);break}}}finally{re=!1,Q.current=f,vr(),Error.prepareStackTrace=u}var M=e?e.displayName||e.name:"",F=M?G(M):"";return typeof e=="function"&&K.set(e,F),F}function hr(e,r,t){return Ce(e,!1)}function br(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function q(e,r,t){if(e==null)return"";if(typeof e=="function")return Ce(e,br(e));if(typeof e=="string")return G(e);switch(e){case A:return G("Suspense");case S:return G("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return hr(e.render);case C:return q(e.type,r,t);case P:{var o=e,u=o._payload,f=o._init;try{return q(f(u),r,t)}catch{}}}return""}var N=Object.prototype.hasOwnProperty,Oe={},je=W.ReactDebugCurrentFrame;function X(e){if(e){var r=e._owner,t=q(e.type,e._source,r?r.type:null);je.setExtraStackFrame(t)}else je.setExtraStackFrame(null)}function yr(e,r,t,o,u){{var f=Function.call.bind(N);for(var s in e)if(f(e,s)){var i=void 0;try{if(typeof e[s]!="function"){var m=Error((o||"React class")+": "+t+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw m.name="Invariant Violation",m}i=e[s](r,s,o,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(p){i=p}i&&!(i instanceof Error)&&(X(u),y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",o||"React class",t,s,typeof i),X(null)),i instanceof Error&&!(i.message in Oe)&&(Oe[i.message]=!0,X(u),y("Failed %s type: %s",t,i.message),X(null))}}}var mr=Array.isArray;function te(e){return mr(e)}function Er(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Sr(e){try{return Pe(e),!1}catch{return!0}}function Pe(e){return""+e}function Ie(e){if(Sr(e))return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Er(e)),Pe(e)}var H=W.ReactCurrentOwner,Rr={key:!0,ref:!0,__self:!0,__source:!0},Fe,De,ne;ne={};function _r(e){if(N.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function wr(e){if(N.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function kr(e,r){if(typeof e.ref=="string"&&H.current&&r&&H.current.stateNode!==r){var t=x(H.current.type);ne[t]||(y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',x(H.current.type),e.ref),ne[t]=!0)}}function Tr(e,r){{var t=function(){Fe||(Fe=!0,y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function xr(e,r){{var t=function(){De||(De=!0,y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var Cr=function(e,r,t,o,u,f,s){var i={$$typeof:d,type:e,key:r,ref:t,props:s,_owner:f};return i._store={},Object.defineProperty(i._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(i,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(i,"_source",{configurable:!1,enumerable:!1,writable:!1,value:u}),Object.freeze&&(Object.freeze(i.props),Object.freeze(i)),i};function Or(e,r,t,o,u){{var f,s={},i=null,m=null;t!==void 0&&(Ie(t),i=""+t),wr(r)&&(Ie(r.key),i=""+r.key),_r(r)&&(m=r.ref,kr(r,u));for(f in r)N.call(r,f)&&!Rr.hasOwnProperty(f)&&(s[f]=r[f]);if(e&&e.defaultProps){var p=e.defaultProps;for(f in p)s[f]===void 0&&(s[f]=p[f])}if(i||m){var v=typeof e=="function"?e.displayName||e.name||"Unknown":e;i&&Tr(s,v),m&&xr(s,v)}return Cr(e,i,m,u,o,H.current,s)}}var oe=W.ReactCurrentOwner,Ae=W.ReactDebugCurrentFrame;function L(e){if(e){var r=e._owner,t=q(e.type,e._source,r?r.type:null);Ae.setExtraStackFrame(t)}else Ae.setExtraStackFrame(null)}var ae;ae=!1;function ie(e){return typeof e=="object"&&e!==null&&e.$$typeof===d}function We(){{if(oe.current){var e=x(oe.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function jr(e){return""}var Le={};function Pr(e){{var r=We();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Me(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=Pr(r);if(Le[t])return;Le[t]=!0;var o="";e&&e._owner&&e._owner!==oe.current&&(o=" It was passed a child from "+x(e._owner.type)+"."),L(e),y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,o),L(null)}}function Ye(e,r){{if(typeof e!="object")return;if(te(e))for(var t=0;t<e.length;t++){var o=e[t];ie(o)&&Me(o,r)}else if(ie(e))e._store&&(e._store.validated=!0);else if(e){var u=or(e);if(typeof u=="function"&&u!==e.entries)for(var f=u.call(e),s;!(s=f.next()).done;)ie(s.value)&&Me(s.value,r)}}}function Ir(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===l||r.$$typeof===C))t=r.propTypes;else return;if(t){var o=x(r);yr(t,e.props,"prop",o,e)}else if(r.PropTypes!==void 0&&!ae){ae=!0;var u=x(r);y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",u||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Fr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var o=r[t];if(o!=="children"&&o!=="key"){L(e),y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",o),L(null);break}}e.ref!==null&&(L(e),y("Invalid attribute `ref` supplied to `React.Fragment`."),L(null))}}var Be={};function Ue(e,r,t,o,u,f){{var s=fr(e);if(!s){var i="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(i+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var m=jr();m?i+=m:i+=We();var p;e===null?p="null":te(e)?p="array":e!==void 0&&e.$$typeof===d?(p="<"+(x(e.type)||"Unknown")+" />",i=" Did you accidentally export a JSX literal instead of a component?"):p=typeof e,y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",p,i)}var v=Or(e,r,t,u,f);if(v==null)return v;if(s){var _=r.children;if(_!==void 0)if(o)if(te(_)){for(var M=0;M<_.length;M++)Ye(_[M],e);Object.freeze&&Object.freeze(_)}else y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ye(_,e)}if(N.call(r,"key")){var F=x(e),E=Object.keys(r).filter(function(Yr){return Yr!=="key"}),se=E.length>0?"{key: someKey, "+E.join(": ..., ")+": ...}":"{key: someKey}";if(!Be[F+se]){var Mr=E.length>0?"{"+E.join(": ..., ")+": ...}":"{}";y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,se,F,Mr,F),Be[F+se]=!0}}return e===g?Fr(v):Ir(v),v}}function Dr(e,r,t){return Ue(e,r,t,!0)}function Ar(e,r,t){return Ue(e,r,t,!1)}var Wr=Ar,Lr=Dr;U.Fragment=g,U.jsx=Wr,U.jsxs=Lr}()),U}process.env.NODE_ENV==="production"?$.exports=Ne():$.exports=He();var j=$.exports;function ze(){return ce()?j.jsx(D.Box,{sx:{display:"flex",backgroundColor:"rgba(0,0,0,0.4)",alignItems:"center",alignContent:"center",justifyItems:"center",justifyContent:"center",position:"fixed",height:"100vh",width:"100vw",zIndex:15e3,left:0,top:0},children:j.jsx(D.CircularProgress,{color:"primary",thickness:6,size:50})}):null}function Je(){const n=O.uuids;return Object.keys(n).length>0}function Ge(n){k.blockingStarted(n)}function Ke(n){k.blockingStopped(n)}function pe(n){const d=h.useRef(""),g=h.useSyncExternalStore(k.subscribe,k.getSnapshot).uuids[d.current];return h.useEffect(()=>(d.current=Ve.v4(),()=>{k.blockingStopped(d.current)}),[]),h.useEffect(()=>{!g&&n?k.blockingStarted(d.current):g&&n===!1&&k.blockingStopped(d.current)},[n,g]),{blockingStarted:h.useCallback(()=>{k.blockingStarted(d.current)},[]),blockingStopped:h.useCallback(()=>{k.blockingStopped(d.current)},[])}}function qe(n){const{blockingStarted:d,blockingStopped:b}=pe();return async(...g)=>{d();const R=await n(...g);return b(),R}}const ve={zIndex:100,position:"sticky",pointerEvents:"none"},ge={...ve,left:0,minWidth:"100%",height:"40px",minHeight:"40px",marginTop:"-40px"},he={...ve,top:0,minHeight:"100%",width:"20px",minWidth:"20px",marginLeft:"-20px"},Xe={top:0,backgroundImage:"radial-gradient(farthest-side at 50% 0%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",opacity:0},$e={bottom:0,backgroundImage:"radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)"},Ze={left:0,backgroundImage:"radial-gradient(farthest-side at 0% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",opacity:0},Qe={right:0,backgroundImage:"radial-gradient(farthest-side at 100% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)"};function er({children:n,containerRef:d,direction:b="column",styleTopShadow:g={},styleBottomShadow:R={},threshold:T=40}){return rr({direction:b,container:d,threshold:T}),j.jsxs(j.Fragment,{children:[b=="column"?j.jsx(D.Box,{className:"shadow--top",sx:{...ge,...Xe,...g}}):null,b=="row"?j.jsx(D.Box,{className:"shadow--left",sx:{...he,...Ze,...g}}):null,n,b=="column"?j.jsx(D.Box,{className:"shadow--bottom",sx:{...ge,...$e,...R}}):null,b=="row"?j.jsx(D.Box,{className:"shadow--right",sx:{...he,...Qe,...R}}):null]})}const z=150,Z=z;function rr({container:n,direction:d,threshold:b}){const g=h.useCallback(ue.debounce(()=>{if(n.current){if(d=="column"){const a=n.current.querySelector(".shadow--top"),c=n.current.querySelector(".shadow--bottom");if(a&&c){const l=n.current.scrollHeight-n.current.offsetHeight;l<b?(a.style.opacity=String(0),c.style.opacity=String(0)):(a.style.opacity=String(Math.min(n.current.scrollTop/z,1)),c.style.opacity=String(Math.min((l-n.current.scrollTop)/z,1)))}}else if(d=="row"){const a=n.current.querySelector(".shadow--left"),c=n.current.querySelector(".shadow--right");if(a&&c){const l=n.current.scrollWidth-n.current.offsetWidth;l<b?(a.style.opacity=String(0),c.style.opacity=String(0)):(a.style.opacity=String(Math.min(n.current.scrollLeft/Z,1)),c.style.opacity=String(Math.min((l-n.current.scrollLeft)/Z,1)))}}}}),[n.current]),R=h.useCallback(a=>{if(a){if(d=="column"){const c=a.scrollHeight-a.offsetHeight,l=a.querySelector(".shadow--bottom");l&&(c<b?l.style.opacity="0":l.style.opacity=String(Math.min((c-a.scrollTop)/z,1)))}else if(d=="row"){const c=a.scrollWidth-a.offsetWidth,l=a.querySelector(".shadow--right");l&&(c<b?l.style.opacity="0":l.style.opacity=String(Math.min((c-a.scrollLeft)/Z,1)))}}},[]),T=h.useCallback(ue.debounce(()=>{const a=n.current;a&&R(a)}),[n.current]);return h.useEffect(()=>{const a=n.current;let c=null;return a&&(R(a),a.addEventListener("scroll",g),a.addEventListener("resize",T),c=new MutationObserver(T),c.observe(a,{subtree:!0,childList:!0})),()=>{a==null||a.removeEventListener("resize",T),a==null||a.removeEventListener("scroll",g),c==null||c.disconnect()}},[n,T,g]),n}const tr={useIsUserInputBlocked:ce,isUserInputBlocked:Je,useBlockUserInput:pe,useWrapPromise:qe,blockingStarted:Ge,blockingStopped:Ke,View:ze};w.BlockUserInput=tr,w.ScrollShadows=er,Object.defineProperty(w,Symbol.toStringTag,{value:"Module"})});
