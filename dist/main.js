import u, { useSyncExternalStore as g, useRef as k, useEffect as c, useCallback as l } from "react";
import { Box as b, CircularProgress as m } from "@mui/material";
import { v4 as S } from "uuid";
let r = { uuids: {} }, i = [];
const n = {
  blockingStarted: (t) => {
    r.uuids[t] = !0, r = { ...r }, a();
  },
  blockingStopped: (t) => {
    delete r.uuids[t], r = { ...r }, a();
  },
  subscribe(t) {
    return i = [...i, t], () => {
      i = i.filter((e) => e !== t);
    };
  },
  getSnapshot() {
    return r;
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
  return d() ? u.createElement(
    b,
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
    u.createElement(m, { color: "primary", thickness: 6, size: 50 })
  ) : null;
}
function I() {
  const t = r.uuids;
  return Object.keys(t).length > 0;
}
function p(t) {
  const e = k(""), o = g(n.subscribe, n.getSnapshot).uuids[e.current];
  return c(() => (e.current = S(), () => {
    n.blockingStopped(e.current);
  }), []), c(() => {
    !o && t ? n.blockingStarted(e.current) : o && t === !1 && n.blockingStopped(e.current);
  }, [t, o]), {
    startLoading: l(() => {
      n.blockingStarted(e.current);
    }, []),
    stopLoading: l(() => {
      n.blockingStopped(e.current);
    }, [])
  };
}
function E(t) {
  const { startLoading: e, stopLoading: s } = p();
  return async (...o) => {
    e();
    const f = await t(...o);
    return s(), f;
  };
}
const C = {
  useIsUserInputBlocked: d,
  isUserInputBlocked: I,
  useBlockUserInput: p,
  useWrapPromise: E,
  View: h
};
export {
  C as BlockUserInput
};
