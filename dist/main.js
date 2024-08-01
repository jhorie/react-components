import s, { useSyncExternalStore as m, useRef as S, useEffect as a, useCallback as l } from "react";
import { CircularProgress as b } from "@mui/material";
var t = [];
for (var c = 0; c < 256; ++c)
  t.push((c + 256).toString(16).slice(1));
function h(e, n = 0) {
  return (t[e[n + 0]] + t[e[n + 1]] + t[e[n + 2]] + t[e[n + 3]] + "-" + t[e[n + 4]] + t[e[n + 5]] + "-" + t[e[n + 6]] + t[e[n + 7]] + "-" + t[e[n + 8]] + t[e[n + 9]] + "-" + t[e[n + 10]] + t[e[n + 11]] + t[e[n + 12]] + t[e[n + 13]] + t[e[n + 14]] + t[e[n + 15]]).toLowerCase();
}
var d, v = new Uint8Array(16);
function x() {
  if (!d && (d = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !d))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return d(v);
}
var U = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
const g = {
  randomUUID: U
};
function E(e, n, y) {
  if (g.randomUUID && !n && !e)
    return g.randomUUID();
  e = e || {};
  var r = e.random || (e.rng || x)();
  return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, h(r);
}
let o = { uuids: {} }, u = [];
const i = {
  loadingStarted: (e) => {
    o.uuids[e] = !0, o = { ...o }, p();
  },
  loadingStopped: (e) => {
    delete o.uuids[e], o = { ...o }, p();
  },
  subscribe(e) {
    return u = [...u, e], () => {
      u = u.filter((n) => n !== e);
    };
  },
  getSnapshot() {
    return o;
  }
};
function p() {
  for (let e of u)
    e();
}
function I() {
  const e = m(i.subscribe, i.getSnapshot);
  return Object.keys(e.uuids).length > 0;
}
function C() {
  const e = o.uuids;
  return Object.keys(e).length > 0;
}
function w(e) {
  const n = S(""), r = m(i.subscribe, i.getSnapshot).uuids[n.current];
  return a(() => (n.current = E(), () => {
    i.loadingStopped(n.current);
  }), []), a(() => {
    !r && e ? i.loadingStarted(n.current) : r && e === !1 && i.loadingStopped(n.current);
  }, [e, r]), {
    startLoading: l(() => {
      i.loadingStarted(n.current);
    }, []),
    stopLoading: l(() => {
      i.loadingStopped(n.current);
    }, [])
  };
}
function R() {
  return I() ? s.createElement(
    "div",
    { style: {
      zIndex: 15e3,
      display: "flex",
      left: 0,
      top: 0,
      height: "100vh",
      width: "100vw",
      position: "fixed",
      backgroundColor: "rgba(0,0,0,0.4)",
      alignItems: "center",
      alignContent: "center",
      justifyItems: "center",
      justifyContent: "center"
    } },
    s.createElement(b, { color: "primary", thickness: 6, size: 50 })
  ) : null;
}
export {
  R as LoadingScreenFullScreen,
  C as isLoading,
  I as useIsLoading,
  w as useLoadingScreen
};
