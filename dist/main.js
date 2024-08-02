import c, { useSyncExternalStore as g, useRef as b, useEffect as u, useCallback as l } from "react";
import { Box as f, CircularProgress as S } from "@mui/material";
import { v4 as m } from "uuid";
let o = { uuids: {} }, i = [];
const n = {
  blockingStarted: (t) => {
    o.uuids[t] = !0, o = { ...o }, a();
  },
  blockingStopped: (t) => {
    delete o.uuids[t], o = { ...o }, a();
  },
  subscribe(t) {
    return i = [...i, t], () => {
      i = i.filter((e) => e !== t);
    };
  },
  getSnapshot() {
    return o;
  }
};
function a() {
  for (let t of i)
    t();
}
function d() {
  const t = g(n.subscribe, n.getSnapshot);
  return Object.keys(t.uuids).length > 0;
}
function h() {
  return d() ? c.createElement(
    f,
    { sx: {
      display: "flex",
      backgroundColor: "rgba(0,0,0,0.4)",
      alignItems: "center",
      alignContent: "center",
      justifyItems: "center",
      justifyContent: "center",
      position: "fixed",
      height: "100vh",
      width: "100vw",
      zIndex: 15e3,
      left: 0,
      top: 0
    } },
    c.createElement(S, { color: "primary", thickness: 6, size: 50 })
  ) : null;
}
function I() {
  const t = o.uuids;
  return Object.keys(t).length > 0;
}
function E(t) {
  n.blockingStarted(t);
}
function y(t) {
  n.blockingStopped(t);
}
function p(t) {
  const e = b(""), r = g(n.subscribe, n.getSnapshot).uuids[e.current];
  return u(() => (e.current = m(), () => {
    n.blockingStopped(e.current);
  }), []), u(() => {
    !r && t ? n.blockingStarted(e.current) : r && t === !1 && n.blockingStopped(e.current);
  }, [t, r]), {
    startLoading: l(() => {
      n.blockingStarted(e.current);
    }, []),
    stopLoading: l(() => {
      n.blockingStopped(e.current);
    }, [])
  };
}
function x(t) {
  const { startLoading: e, stopLoading: s } = p();
  return async (...r) => {
    e();
    const k = await t(...r);
    return s(), k;
  };
}
const U = {
  useIsUserInputBlocked: d,
  isUserInputBlocked: I,
  useBlockUserInput: p,
  useWrapPromise: x,
  blockingStarted: E,
  blockingStopped: y,
  View: h
};
export {
  U as BlockUserInput
};
