"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var o=require("react"),m=require("@mui/material");function v(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}var g=v(o),n=[];for(var s=0;s<256;++s)n.push((s+256).toString(16).slice(1));function b(e,t=0){return(n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]).toLowerCase()}var l,h=new Uint8Array(16);function L(){if(!l&&(l=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!l))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(h)}var E=typeof crypto!="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),p={randomUUID:E};function x(e,t,d){if(p.randomUUID&&!t&&!e)return p.randomUUID();e=e||{};var r=e.random||(e.rng||L)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){d=d||0;for(var c=0;c<16;++c)t[d+c]=r[c];return t}return b(r)}let u={uuids:{}},a=[];const i={loadingStarted:e=>{u.uuids[e]=!0,u={...u},S()},loadingStopped:e=>{delete u.uuids[e],u={...u},S()},subscribe(e){return a=[...a,e],()=>{a=a.filter(t=>t!==e)}},getSnapshot(){return u}};function S(){for(let e of a)e()}function y(){const e=o.useSyncExternalStore(i.subscribe,i.getSnapshot);return Object.keys(e.uuids).length>0}function I(){const e=u.uuids;return Object.keys(e).length>0}function U(e){const t=o.useRef(""),r=o.useSyncExternalStore(i.subscribe,i.getSnapshot).uuids[t.current];return o.useEffect(()=>(t.current=x(),()=>{i.loadingStopped(t.current)}),[]),o.useEffect(()=>{!r&&e?i.loadingStarted(t.current):r&&e===!1&&i.loadingStopped(t.current)},[e,r]),{startLoading:o.useCallback(()=>{i.loadingStarted(t.current)},[]),stopLoading:o.useCallback(()=>{i.loadingStopped(t.current)},[])}}function f(){return y()?g.default.createElement("div",{style:{zIndex:15e3,display:"flex",left:0,top:0,height:"100vh",width:"100vw",position:"fixed",backgroundColor:"rgba(0,0,0,0.4)",alignItems:"center",alignContent:"center",justifyItems:"center",justifyContent:"center"}},g.default.createElement(m.CircularProgress,{color:"primary",thickness:6,size:50})):null}exports.LoadingScreenFullScreen=f;exports.isLoading=I;exports.useIsLoading=y;exports.useLoadingScreen=U;
