import Ke, { useSyncExternalStore as Xe, useRef as Br, useEffect as ce, useCallback as z } from "react";
import { Box as V, CircularProgress as Vr } from "@mui/material";
import { v4 as qr } from "uuid";
import { debounce as He } from "lodash";
import { addDays as fe, subDays as pe, format as $, isBefore as zr, isEqual as Jr, isAfter as Gr } from "date-fns";
let D = { uuids: {} }, q = [];
const O = {
  blockingStarted: (r) => {
    D.uuids[r] = !0, D = { ...D }, Ye();
  },
  blockingStopped: (r) => {
    delete D.uuids[r], D = { ...D }, Ye();
  },
  subscribe(r) {
    return q = [...q, r], () => {
      q = q.filter((t) => t !== r);
    };
  },
  getSnapshot() {
    return D;
  }
};
function Ye() {
  for (let r of q)
    r();
}
function Ze() {
  const r = Xe(O.subscribe, O.getSnapshot);
  return Object.keys(r.uuids).length > 0;
}
var de = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function Kr() {
  if (Be) return Y;
  Be = 1;
  var r = Ke, t = Symbol.for("react.element"), s = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(p, l, x) {
    var E, _ = {}, j = null, G = null;
    x !== void 0 && (j = "" + x), l.key !== void 0 && (j = "" + l.key), l.ref !== void 0 && (G = l.ref);
    for (E in l) i.call(l, E) && !b.hasOwnProperty(E) && (_[E] = l[E]);
    if (p && p.defaultProps) for (E in l = p.defaultProps, l) _[E] === void 0 && (_[E] = l[E]);
    return { $$typeof: t, type: p, key: j, ref: G, props: _, _owner: c.current };
  }
  return Y.Fragment = s, Y.jsx = a, Y.jsxs = a, Y;
}
var B = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function Xr() {
  return Ve || (Ve = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ke, t = Symbol.for("react.element"), s = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), p = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), he = Symbol.iterator, ar = "@@iterator";
    function ur(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = he && e[he] || e[ar];
      return typeof n == "function" ? n : null;
    }
    var M = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), u = 1; u < n; u++)
          o[u - 1] = arguments[u];
        lr("error", e, o);
      }
    }
    function lr(e, n, o) {
      {
        var u = M.ReactDebugCurrentFrame, g = u.getStackAddendum();
        g !== "" && (n += "%s", o = o.concat([g]));
        var v = o.map(function(d) {
          return String(d);
        });
        v.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var cr = !1, fr = !1, dr = !1, pr = !1, gr = !1, me;
    me = Symbol.for("react.module.reference");
    function vr(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === b || gr || e === c || e === x || e === E || pr || e === G || cr || fr || dr || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === _ || e.$$typeof === a || e.$$typeof === p || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === me || e.getModuleId !== void 0));
    }
    function hr(e, n, o) {
      var u = e.displayName;
      if (u)
        return u;
      var g = n.displayName || n.name || "";
      return g !== "" ? o + "(" + g + ")" : o;
    }
    function ye(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case s:
          return "Portal";
        case b:
          return "Profiler";
        case c:
          return "StrictMode";
        case x:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var n = e;
            return ye(n) + ".Consumer";
          case a:
            var o = e;
            return ye(o._context) + ".Provider";
          case l:
            return hr(e, e.render, "ForwardRef");
          case _:
            var u = e.displayName || null;
            return u !== null ? u : k(e.type) || "Memo";
          case j: {
            var g = e, v = g._payload, d = g._init;
            try {
              return k(d(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, U = 0, be, Ee, Te, Se, Re, we, _e;
    function Oe() {
    }
    Oe.__reactDisabledLog = !0;
    function mr() {
      {
        if (U === 0) {
          be = console.log, Ee = console.info, Te = console.warn, Se = console.error, Re = console.group, we = console.groupCollapsed, _e = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        U++;
      }
    }
    function yr() {
      {
        if (U--, U === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: be
            }),
            info: A({}, e, {
              value: Ee
            }),
            warn: A({}, e, {
              value: Te
            }),
            error: A({}, e, {
              value: Se
            }),
            group: A({}, e, {
              value: Re
            }),
            groupCollapsed: A({}, e, {
              value: we
            }),
            groupEnd: A({}, e, {
              value: _e
            })
          });
        }
        U < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = M.ReactCurrentDispatcher, te;
    function K(e, n, o) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (g) {
            var u = g.stack.trim().match(/\n( *(at )?)/);
            te = u && u[1] || "";
          }
        return `
` + te + e;
      }
    }
    var ne = !1, X;
    {
      var br = typeof WeakMap == "function" ? WeakMap : Map;
      X = new br();
    }
    function Ce(e, n) {
      if (!e || ne)
        return "";
      {
        var o = X.get(e);
        if (o !== void 0)
          return o;
      }
      var u;
      ne = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = re.current, re.current = null, mr();
      try {
        if (n) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (R) {
              u = R;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (R) {
              u = R;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            u = R;
          }
          e();
        }
      } catch (R) {
        if (R && u && typeof R.stack == "string") {
          for (var f = R.stack.split(`
`), S = u.stack.split(`
`), h = f.length - 1, m = S.length - 1; h >= 1 && m >= 0 && f[h] !== S[m]; )
            m--;
          for (; h >= 1 && m >= 0; h--, m--)
            if (f[h] !== S[m]) {
              if (h !== 1 || m !== 1)
                do
                  if (h--, m--, m < 0 || f[h] !== S[m]) {
                    var w = `
` + f[h].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && X.set(e, w), w;
                  }
                while (h >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        ne = !1, re.current = v, yr(), Error.prepareStackTrace = g;
      }
      var W = e ? e.displayName || e.name : "", F = W ? K(W) : "";
      return typeof e == "function" && X.set(e, F), F;
    }
    function Er(e, n, o) {
      return Ce(e, !1);
    }
    function Tr(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function Z(e, n, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ce(e, Tr(e));
      if (typeof e == "string")
        return K(e);
      switch (e) {
        case x:
          return K("Suspense");
        case E:
          return K("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Er(e.render);
          case _:
            return Z(e.type, n, o);
          case j: {
            var u = e, g = u._payload, v = u._init;
            try {
              return Z(v(g), n, o);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, xe = {}, ke = M.ReactDebugCurrentFrame;
    function Q(e) {
      if (e) {
        var n = e._owner, o = Z(e.type, e._source, n ? n.type : null);
        ke.setExtraStackFrame(o);
      } else
        ke.setExtraStackFrame(null);
    }
    function Sr(e, n, o, u, g) {
      {
        var v = Function.call.bind(H);
        for (var d in e)
          if (v(e, d)) {
            var f = void 0;
            try {
              if (typeof e[d] != "function") {
                var S = Error((u || "React class") + ": " + o + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              f = e[d](n, d, u, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              f = h;
            }
            f && !(f instanceof Error) && (Q(g), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", o, d, typeof f), Q(null)), f instanceof Error && !(f.message in xe) && (xe[f.message] = !0, Q(g), T("Failed %s type: %s", o, f.message), Q(null));
          }
      }
    }
    var Rr = Array.isArray;
    function oe(e) {
      return Rr(e);
    }
    function wr(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, o = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function _r(e) {
      try {
        return De(e), !1;
      } catch {
        return !0;
      }
    }
    function De(e) {
      return "" + e;
    }
    function Pe(e) {
      if (_r(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", wr(e)), De(e);
    }
    var je = M.ReactCurrentOwner, Or = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ae, Fe;
    function Cr(e) {
      if (H.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function xr(e) {
      if (H.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function kr(e, n) {
      typeof e.ref == "string" && je.current;
    }
    function Dr(e, n) {
      {
        var o = function() {
          Ae || (Ae = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function Pr(e, n) {
      {
        var o = function() {
          Fe || (Fe = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var jr = function(e, n, o, u, g, v, d) {
      var f = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: o,
        props: d,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(f, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function Ar(e, n, o, u, g) {
      {
        var v, d = {}, f = null, S = null;
        o !== void 0 && (Pe(o), f = "" + o), xr(n) && (Pe(n.key), f = "" + n.key), Cr(n) && (S = n.ref, kr(n, g));
        for (v in n)
          H.call(n, v) && !Or.hasOwnProperty(v) && (d[v] = n[v]);
        if (e && e.defaultProps) {
          var h = e.defaultProps;
          for (v in h)
            d[v] === void 0 && (d[v] = h[v]);
        }
        if (f || S) {
          var m = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          f && Dr(d, m), S && Pr(d, m);
        }
        return jr(e, f, S, g, u, je.current, d);
      }
    }
    var ie = M.ReactCurrentOwner, Ie = M.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var n = e._owner, o = Z(e.type, e._source, n ? n.type : null);
        Ie.setExtraStackFrame(o);
      } else
        Ie.setExtraStackFrame(null);
    }
    var se;
    se = !1;
    function ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Me() {
      {
        if (ie.current) {
          var e = k(ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Fr(e) {
      return "";
    }
    var Ne = {};
    function Ir(e) {
      {
        var n = Me();
        if (!n) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (n = `

Check the top-level render call using <` + o + ">.");
        }
        return n;
      }
    }
    function We(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = Ir(n);
        if (Ne[o])
          return;
        Ne[o] = !0;
        var u = "";
        e && e._owner && e._owner !== ie.current && (u = " It was passed a child from " + k(e._owner.type) + "."), N(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, u), N(null);
      }
    }
    function $e(e, n) {
      {
        if (typeof e != "object")
          return;
        if (oe(e))
          for (var o = 0; o < e.length; o++) {
            var u = e[o];
            ae(u) && We(u, n);
          }
        else if (ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var g = ur(e);
          if (typeof g == "function" && g !== e.entries)
            for (var v = g.call(e), d; !(d = v.next()).done; )
              ae(d.value) && We(d.value, n);
        }
      }
    }
    function Mr(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var o;
        if (typeof n == "function")
          o = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === _))
          o = n.propTypes;
        else
          return;
        if (o) {
          var u = k(n);
          Sr(o, e.props, "prop", u, e);
        } else if (n.PropTypes !== void 0 && !se) {
          se = !0;
          var g = k(n);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Nr(e) {
      {
        for (var n = Object.keys(e.props), o = 0; o < n.length; o++) {
          var u = n[o];
          if (u !== "children" && u !== "key") {
            N(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    var Le = {};
    function Ue(e, n, o, u, g, v) {
      {
        var d = vr(e);
        if (!d) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = Fr();
          S ? f += S : f += Me();
          var h;
          e === null ? h = "null" : oe(e) ? h = "array" : e !== void 0 && e.$$typeof === t ? (h = "<" + (k(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, f);
        }
        var m = Ar(e, n, o, g, v);
        if (m == null)
          return m;
        if (d) {
          var w = n.children;
          if (w !== void 0)
            if (u)
              if (oe(w)) {
                for (var W = 0; W < w.length; W++)
                  $e(w[W], e);
                Object.freeze && Object.freeze(w);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $e(w, e);
        }
        if (H.call(n, "key")) {
          var F = k(e), R = Object.keys(n).filter(function(Yr) {
            return Yr !== "key";
          }), ue = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Le[F + ue]) {
            var Hr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ue, F, Hr, F), Le[F + ue] = !0;
          }
        }
        return e === i ? Nr(m) : Mr(m), m;
      }
    }
    function Wr(e, n, o) {
      return Ue(e, n, o, !0);
    }
    function $r(e, n, o) {
      return Ue(e, n, o, !1);
    }
    var Lr = $r, Ur = Wr;
    B.Fragment = i, B.jsx = Lr, B.jsxs = Ur;
  }()), B;
}
process.env.NODE_ENV === "production" ? de.exports = Kr() : de.exports = Xr();
var P = de.exports;
function Zr() {
  return Ze() ? P.jsx(V, { sx: {
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
  }, children: P.jsx(Vr, { color: "primary", thickness: 6, size: 50 }) }) : null;
}
function Qr() {
  const r = D.uuids;
  return Object.keys(r).length > 0;
}
function et(r) {
  O.blockingStarted(r);
}
function rt(r) {
  O.blockingStopped(r);
}
function Qe(r) {
  const t = Br(""), i = Xe(O.subscribe, O.getSnapshot).uuids[t.current];
  return ce(() => (t.current = qr(), () => {
    O.blockingStopped(t.current);
  }), []), ce(() => {
    !i && r ? O.blockingStarted(t.current) : i && r === !1 && O.blockingStopped(t.current);
  }, [r, i]), {
    blockingStarted: z(() => {
      O.blockingStarted(t.current);
    }, []),
    blockingStopped: z(() => {
      O.blockingStopped(t.current);
    }, [])
  };
}
function tt(r) {
  const { blockingStarted: t, blockingStopped: s } = Qe();
  return async (...i) => {
    t();
    const c = await r(...i);
    return s(), c;
  };
}
const er = {
  zIndex: 100,
  position: "sticky",
  pointerEvents: "none"
}, qe = {
  ...er,
  left: 0,
  minWidth: "100%",
  height: "40px",
  minHeight: "40px",
  marginTop: "-40px"
}, ze = {
  ...er,
  top: 0,
  minHeight: "100%",
  width: "20px",
  minWidth: "20px",
  marginLeft: "-20px"
}, nt = {
  top: 0,
  backgroundImage: "radial-gradient(farthest-side at 50% 0%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  opacity: 0
}, ot = {
  bottom: 0,
  backgroundImage: "radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)"
}, it = {
  left: 0,
  backgroundImage: "radial-gradient(farthest-side at 0% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  opacity: 0
}, st = {
  right: 0,
  backgroundImage: "radial-gradient(farthest-side at 100% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)"
};
function It({ children: r, containerRef: t, direction: s = "column", styleTopShadow: i = {}, styleBottomShadow: c = {}, threshold: b = 40 }) {
  return at({ direction: s, container: t, threshold: b }), P.jsxs(P.Fragment, { children: [s == "column" ? P.jsx(V, { className: "shadow--top", sx: { ...qe, ...nt, ...i } }) : null, s == "row" ? P.jsx(V, { className: "shadow--left", sx: { ...ze, ...it, ...i } }) : null, r, s == "column" ? P.jsx(V, { className: "shadow--bottom", sx: { ...qe, ...ot, ...c } }) : null, s == "row" ? P.jsx(V, { className: "shadow--right", sx: { ...ze, ...st, ...c } }) : null] });
}
const ee = 150, le = ee;
function at({ container: r, direction: t, threshold: s }) {
  const i = z(He(() => {
    if (r.current) {
      if (t == "column") {
        const a = r.current.querySelector(".shadow--top"), p = r.current.querySelector(".shadow--bottom");
        if (a && p) {
          const l = r.current.scrollHeight - r.current.offsetHeight;
          l < s ? (a.style.opacity = String(0), p.style.opacity = String(0)) : (a.style.opacity = String(Math.min(r.current.scrollTop / ee, 1)), p.style.opacity = String(Math.min((l - r.current.scrollTop) / ee, 1)));
        }
      } else if (t == "row") {
        const a = r.current.querySelector(".shadow--left"), p = r.current.querySelector(".shadow--right");
        if (a && p) {
          const l = r.current.scrollWidth - r.current.offsetWidth;
          l < s ? (a.style.opacity = String(0), p.style.opacity = String(0)) : (a.style.opacity = String(Math.min(r.current.scrollLeft / le, 1)), p.style.opacity = String(Math.min((l - r.current.scrollLeft) / le, 1)));
        }
      }
    }
  }), [r.current]), c = z((a) => {
    if (a) {
      if (t == "column") {
        const p = a.scrollHeight - a.offsetHeight, l = a.querySelector(".shadow--bottom");
        l && (p < s ? l.style.opacity = "0" : l.style.opacity = String(Math.min((p - a.scrollTop) / ee, 1)));
      } else if (t == "row") {
        const p = a.scrollWidth - a.offsetWidth, l = a.querySelector(".shadow--right");
        l && (p < s ? l.style.opacity = "0" : l.style.opacity = String(Math.min((p - a.scrollLeft) / le, 1)));
      }
    }
  }, []), b = z(He(() => {
    const a = r.current;
    a && c(a);
  }), [r.current]);
  return ce(() => {
    const a = r.current;
    let p = null;
    return a && (c(a), a.addEventListener("scroll", i), a.addEventListener("resize", b), p = new MutationObserver(b), p.observe(a, { subtree: !0, childList: !0 })), () => {
      a == null || a.removeEventListener("resize", b), a == null || a.removeEventListener("scroll", i), p == null || p.disconnect();
    };
  }, [r, b, i]), r;
}
function L(r) {
  return ut(typeof r == "string" ? r : r[0]);
}
function ut(r) {
  const t = r.split("-");
  return { start: Je(t[0]), end: Je(t[1]) };
}
function Je(r) {
  const t = r.split(":");
  return { hours: Number(t[0]), minutes: Number(t[1]) };
}
function rr(r, t) {
  return r.hours == t.hours && r.minutes == t.minutes;
}
function tr(r, t) {
  return J(r) > J(t);
}
function lt(r, t) {
  return J(r) < J(t);
}
function ct(r, t) {
  return rr(r, t) || tr(r, t);
}
function J(r) {
  return r.hours * 60 + r.minutes;
}
function ft(r) {
  return String(r.hours).padStart(2, "0") + ":" + String(r.minutes).padStart(2, "0");
}
function dt(r) {
  return { hours: r.getUTCHours(), minutes: r.getUTCMinutes() };
}
const y = { isSame: rr, isBefore: lt, isAfter: tr, isSameOrAfter: ct, timeToNumber: J, fromDate: dt, timeToString: ft };
function pt(r) {
  return y.isAfter(r.start, r.end);
}
function nr(r) {
  return pt(r);
}
function or(r, t) {
  return y.isSameOrAfter(t, r.start) && (nr(r) || y.isBefore(t, r.end));
}
function gt(r, t) {
  return nr(r) && or({ ...r, start: { hours: 0, minutes: 0 } }, t);
}
function vt(r) {
  return `${y.timeToString(r.start)}-${y.timeToString(r.end)}`;
}
function ht(r, t) {
  return y.isSame(r.start, t.start) && y.isSame(r.end, t.end);
}
const ge = { containsTime: or, containsNightTime: gt, timeRangeToString: vt, timeRangesAreEqual: ht };
function ir(r, t) {
  return y.isBefore(r, t.start) ? t : null;
}
function mt(r, t) {
  var s;
  return ((s = ir(r, t)) == null ? void 0 : s.start) ?? null;
}
function yt(r, t) {
  var s;
  return ((s = ir(r, t)) == null ? void 0 : s.end) ?? null;
}
function bt(r, t) {
  return ge.containsTime(t, r) ? t.end : null;
}
function Et(r, t) {
  for (const s of r)
    if (ge.containsNightTime(L(s), t))
      return !0;
  return !1;
}
function sr(r, t) {
  for (const s of r)
    if (ge.containsTime(L(s), t))
      return !0;
  return !1;
}
function Tt(r) {
  return sr(r, { hours: 23, minutes: 59 });
}
function St(r, t) {
  for (const s of r) {
    const i = L(s), c = mt(y.fromDate(t), i);
    if (c)
      return c;
  }
  return null;
}
function Rt(r, t) {
  for (const s of r) {
    const i = L(s), c = bt(y.fromDate(t), i);
    if (c)
      return c;
  }
  for (const s of r) {
    const i = L(s), c = yt(y.fromDate(t), i);
    if (c)
      return c;
  }
  return null;
}
const C = { isOpenAtNight: Et, nextClose: Rt, nextOpen: St, isOpenAtTheEndOfTheDay: Tt, isOpenAt: sr }, wt = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], Mt = (r) => wt.includes(r);
function _t(r, t) {
  const [s, i] = t.split("-"), [c, b] = s.split(":"), [a, p] = i.split(":");
  let l = new Date(r.getTime());
  l.setUTCHours(Number(c), Number(b), 0, 0);
  let x = new Date(r.getTime());
  x.setUTCHours(Number(a), Number(p), 0, 0);
  const E = 60 * Number(a) + Number(p), _ = 60 * Number(c) + Number(b);
  return E < _ && (l = pe(l, 1)), (zr(l, r) || Jr(l, r)) && Gr(x, r);
}
function I(r, t) {
  var s, i;
  return ((s = r.exceptions) == null ? void 0 : s[$(t, "yyyy-MM-dd")]) ?? ((i = r.exceptions) == null ? void 0 : i[$(t, "MM-dd")]) ?? r[$(t, "EEEE").toLowerCase()] ?? [];
}
function Ot(r, t) {
  var i, c, b;
  return ((b = (((i = r.exceptions) == null ? void 0 : i[$(t, "yyyy-MM-dd")]) ?? ((c = r.exceptions) == null ? void 0 : c[$(t, "MM-dd")]) ?? r[$(t, "EEEE").toLowerCase()] ?? null).reverse()) == null ? void 0 : b.find((a) => _t(t, typeof a == "string" ? a : a[0]))) ?? null;
}
function Ct(r, t) {
  const s = Ot(r, t);
  return s ? L(s) : null;
}
function xt(r, t = null) {
  t = t ?? /* @__PURE__ */ new Date(), t = new Date(t.getTime());
  let s = I(r, t), i = C.nextOpen(s, t), c = 366;
  for (; !i || i.hours >= 24; ) {
    if (--c < 0)
      return null;
    if (t = fe(t, 1), t == null || t.setUTCHours(0, 0, 0, 0), ve(r, t) && !C.isOpenAtTheEndOfTheDay(s))
      return t;
    s = I(r, t), i = C.nextOpen(s, t);
  }
  return i ? (t == null || t.setUTCHours(i.hours, i.minutes), t) : null;
}
function Nt(r, t = null) {
  var a;
  t = t ?? /* @__PURE__ */ new Date(), t = new Date(t.getTime());
  const s = (a = Ct(r, t)) == null ? void 0 : a.end;
  if (s && s.hours < 24)
    return t.setUTCHours(s.hours), t.setUTCMinutes(s.minutes), t;
  let i = null;
  {
    const p = pe(t, 1), l = I(r, p);
    C.isOpenAtNight(l, y.fromDate(p)) && (i = C.nextClose(l, t));
  }
  let c = I(r, t);
  i || (i = C.nextClose(c, t), i && i.hours < 24 && (y.timeToNumber(i) < y.timeToNumber(y.fromDate(t)) || Ge(r, t) && y.timeToNumber(y.fromDate(xt(r, t) ?? /* @__PURE__ */ new Date("2100-00-00 00:00:00"))) > y.timeToNumber(i)) && (t = fe(t, 1)));
  let b = 366;
  for (; !i || i.hours >= 24; ) {
    if (--b < 0)
      return null;
    if (t = fe(t, 1), t.setUTCHours(0, 0, 0, 0), Ge(r, t) && C.isOpenAtTheEndOfTheDay(c))
      return t;
    c = I(r, t), i = C.nextClose(c, t);
  }
  return i ? (t.setUTCHours(i.hours, i.minutes), t) : null;
}
function kt(r) {
  return ve(r, /* @__PURE__ */ new Date());
}
function Wt(r) {
  return !kt(r);
}
function Ge(r, t) {
  return !ve(r, t);
}
function ve(r, t) {
  {
    const i = pe(t, 1), c = I(r, i);
    if (C.isOpenAtNight(c, y.fromDate(i)))
      return !0;
  }
  const s = I(r, t);
  return C.isOpenAt(s, y.fromDate(t));
}
const $t = {
  useIsUserInputBlocked: Ze,
  isUserInputBlocked: Qr,
  useBlockUserInput: Qe,
  useWrapPromise: tt,
  blockingStarted: et,
  blockingStopped: rt,
  View: Zr
};
export {
  $t as BlockUserInput,
  It as ScrollShadows,
  y as TimeMethods,
  ge as TimeRangeMethods,
  wt as days,
  L as getTimeRangeOfOpeningHoursForDay,
  Wt as isClosed,
  Ge as isClosedAt,
  Mt as isOfTypeDay,
  kt as isOpen,
  ve as isOpenAt,
  Nt as nextClose,
  xt as nextOpen
};
