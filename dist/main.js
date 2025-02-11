import Qe, { useSyncExternalStore as er, useRef as zr, useEffect as de, useCallback as J } from "react";
import { Box as H, CircularProgress as Jr } from "@mui/material";
import { v4 as Gr } from "uuid";
import { debounce as Ve, clone as qe } from "lodash";
import { format as j, addDays as pe, subDays as ge, isBefore as Kr, isEqual as Xr, isAfter as Zr } from "date-fns";
import { TZDate as L } from "@date-fns/tz";
let D = { uuids: {} }, z = [];
const x = {
  blockingStarted: (r) => {
    D.uuids[r] = !0, D = { ...D }, He();
  },
  blockingStopped: (r) => {
    delete D.uuids[r], D = { ...D }, He();
  },
  subscribe(r) {
    return z = [...z, r], () => {
      z = z.filter((t) => t !== r);
    };
  },
  getSnapshot() {
    return D;
  }
};
function He() {
  for (let r of z)
    r();
}
function rr() {
  const r = er(x.subscribe, x.getSnapshot);
  return Object.keys(r.uuids).length > 0;
}
var me = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ze;
function Qr() {
  if (ze) return V;
  ze = 1;
  var r = Qe, t = Symbol.for("react.element"), s = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, u = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(p, c, w) {
    var E, O = {}, A = null, X = null;
    w !== void 0 && (A = "" + w), c.key !== void 0 && (A = "" + c.key), c.ref !== void 0 && (X = c.ref);
    for (E in c) i.call(c, E) && !v.hasOwnProperty(E) && (O[E] = c[E]);
    if (p && p.defaultProps) for (E in c = p.defaultProps, c) O[E] === void 0 && (O[E] = c[E]);
    return { $$typeof: t, type: p, key: A, ref: X, props: O, _owner: u.current };
  }
  return V.Fragment = s, V.jsx = a, V.jsxs = a, V;
}
var q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function et() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Qe, t = Symbol.for("react.element"), s = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), p = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), X = Symbol.for("react.offscreen"), ye = Symbol.iterator, cr = "@@iterator";
    function fr(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = ye && e[ye] || e[cr];
      return typeof n == "function" ? n : null;
    }
    var M = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
          o[l - 1] = arguments[l];
        dr("error", e, o);
      }
    }
    function dr(e, n, o) {
      {
        var l = M.ReactDebugCurrentFrame, m = l.getStackAddendum();
        m !== "" && (n += "%s", o = o.concat([m]));
        var g = o.map(function(d) {
          return String(d);
        });
        g.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var pr = !1, mr = !1, gr = !1, vr = !1, hr = !1, be;
    be = Symbol.for("react.module.reference");
    function yr(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === v || hr || e === u || e === w || e === E || vr || e === X || pr || mr || gr || typeof e == "object" && e !== null && (e.$$typeof === A || e.$$typeof === O || e.$$typeof === a || e.$$typeof === p || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === be || e.getModuleId !== void 0));
    }
    function br(e, n, o) {
      var l = e.displayName;
      if (l)
        return l;
      var m = n.displayName || n.name || "";
      return m !== "" ? o + "(" + m + ")" : o;
    }
    function Ee(e) {
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
        case v:
          return "Profiler";
        case u:
          return "StrictMode";
        case w:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var n = e;
            return Ee(n) + ".Consumer";
          case a:
            var o = e;
            return Ee(o._context) + ".Provider";
          case c:
            return br(e, e.render, "ForwardRef");
          case O:
            var l = e.displayName || null;
            return l !== null ? l : k(e.type) || "Memo";
          case A: {
            var m = e, g = m._payload, d = m._init;
            try {
              return k(d(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, B = 0, Te, Se, Re, we, _e, Oe, xe;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function Er() {
      {
        if (B === 0) {
          Te = console.log, Se = console.info, Re = console.warn, we = console.error, _e = console.group, Oe = console.groupCollapsed, xe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
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
        B++;
      }
    }
    function Tr() {
      {
        if (B--, B === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: Te
            }),
            info: F({}, e, {
              value: Se
            }),
            warn: F({}, e, {
              value: Re
            }),
            error: F({}, e, {
              value: we
            }),
            group: F({}, e, {
              value: _e
            }),
            groupCollapsed: F({}, e, {
              value: Oe
            }),
            groupEnd: F({}, e, {
              value: xe
            })
          });
        }
        B < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = M.ReactCurrentDispatcher, oe;
    function Z(e, n, o) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (m) {
            var l = m.stack.trim().match(/\n( *(at )?)/);
            oe = l && l[1] || "";
          }
        return `
` + oe + e;
      }
    }
    var ie = !1, Q;
    {
      var Sr = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new Sr();
    }
    function ke(e, n) {
      if (!e || ie)
        return "";
      {
        var o = Q.get(e);
        if (o !== void 0)
          return o;
      }
      var l;
      ie = !0;
      var m = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = ne.current, ne.current = null, Er();
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
              l = R;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (R) {
              l = R;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            l = R;
          }
          e();
        }
      } catch (R) {
        if (R && l && typeof R.stack == "string") {
          for (var f = R.stack.split(`
`), S = l.stack.split(`
`), y = f.length - 1, b = S.length - 1; y >= 1 && b >= 0 && f[y] !== S[b]; )
            b--;
          for (; y >= 1 && b >= 0; y--, b--)
            if (f[y] !== S[b]) {
              if (y !== 1 || b !== 1)
                do
                  if (y--, b--, b < 0 || f[y] !== S[b]) {
                    var _ = `
` + f[y].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && Q.set(e, _), _;
                  }
                while (y >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        ie = !1, ne.current = g, Tr(), Error.prepareStackTrace = m;
      }
      var $ = e ? e.displayName || e.name : "", I = $ ? Z($) : "";
      return typeof e == "function" && Q.set(e, I), I;
    }
    function Rr(e, n, o) {
      return ke(e, !1);
    }
    function wr(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function ee(e, n, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ke(e, wr(e));
      if (typeof e == "string")
        return Z(e);
      switch (e) {
        case w:
          return Z("Suspense");
        case E:
          return Z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Rr(e.render);
          case O:
            return ee(e.type, n, o);
          case A: {
            var l = e, m = l._payload, g = l._init;
            try {
              return ee(g(m), n, o);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, De = {}, Pe = M.ReactDebugCurrentFrame;
    function re(e) {
      if (e) {
        var n = e._owner, o = ee(e.type, e._source, n ? n.type : null);
        Pe.setExtraStackFrame(o);
      } else
        Pe.setExtraStackFrame(null);
    }
    function _r(e, n, o, l, m) {
      {
        var g = Function.call.bind(U);
        for (var d in e)
          if (g(e, d)) {
            var f = void 0;
            try {
              if (typeof e[d] != "function") {
                var S = Error((l || "React class") + ": " + o + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              f = e[d](n, d, l, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              f = y;
            }
            f && !(f instanceof Error) && (re(m), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", o, d, typeof f), re(null)), f instanceof Error && !(f.message in De) && (De[f.message] = !0, re(m), T("Failed %s type: %s", o, f.message), re(null));
          }
      }
    }
    var Or = Array.isArray;
    function se(e) {
      return Or(e);
    }
    function xr(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, o = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function Cr(e) {
      try {
        return je(e), !1;
      } catch {
        return !0;
      }
    }
    function je(e) {
      return "" + e;
    }
    function Ae(e) {
      if (Cr(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xr(e)), je(e);
    }
    var Fe = M.ReactCurrentOwner, kr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, Ne;
    function Dr(e) {
      if (U.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Pr(e) {
      if (U.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function jr(e, n) {
      typeof e.ref == "string" && Fe.current;
    }
    function Ar(e, n) {
      {
        var o = function() {
          Ie || (Ie = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function Fr(e, n) {
      {
        var o = function() {
          Ne || (Ne = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var Ir = function(e, n, o, l, m, g, d) {
      var f = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: o,
        props: d,
        // Record the component responsible for creating this element.
        _owner: g
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
        value: l
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function Nr(e, n, o, l, m) {
      {
        var g, d = {}, f = null, S = null;
        o !== void 0 && (Ae(o), f = "" + o), Pr(n) && (Ae(n.key), f = "" + n.key), Dr(n) && (S = n.ref, jr(n, m));
        for (g in n)
          U.call(n, g) && !kr.hasOwnProperty(g) && (d[g] = n[g]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (g in y)
            d[g] === void 0 && (d[g] = y[g]);
        }
        if (f || S) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          f && Ar(d, b), S && Fr(d, b);
        }
        return Ir(e, f, S, m, l, Fe.current, d);
      }
    }
    var ue = M.ReactCurrentOwner, Me = M.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var n = e._owner, o = ee(e.type, e._source, n ? n.type : null);
        Me.setExtraStackFrame(o);
      } else
        Me.setExtraStackFrame(null);
    }
    var ae;
    ae = !1;
    function le(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function We() {
      {
        if (ue.current) {
          var e = k(ue.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Mr(e) {
      return "";
    }
    var $e = {};
    function Wr(e) {
      {
        var n = We();
        if (!n) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (n = `

Check the top-level render call using <` + o + ">.");
        }
        return n;
      }
    }
    function Le(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = Wr(n);
        if ($e[o])
          return;
        $e[o] = !0;
        var l = "";
        e && e._owner && e._owner !== ue.current && (l = " It was passed a child from " + k(e._owner.type) + "."), W(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, l), W(null);
      }
    }
    function Ye(e, n) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var o = 0; o < e.length; o++) {
            var l = e[o];
            le(l) && Le(l, n);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var m = fr(e);
          if (typeof m == "function" && m !== e.entries)
            for (var g = m.call(e), d; !(d = g.next()).done; )
              le(d.value) && Le(d.value, n);
        }
      }
    }
    function $r(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var o;
        if (typeof n == "function")
          o = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === O))
          o = n.propTypes;
        else
          return;
        if (o) {
          var l = k(n);
          _r(o, e.props, "prop", l, e);
        } else if (n.PropTypes !== void 0 && !ae) {
          ae = !0;
          var m = k(n);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", m || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lr(e) {
      {
        for (var n = Object.keys(e.props), o = 0; o < n.length; o++) {
          var l = n[o];
          if (l !== "children" && l !== "key") {
            W(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    var Be = {};
    function Ue(e, n, o, l, m, g) {
      {
        var d = yr(e);
        if (!d) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = Mr();
          S ? f += S : f += We();
          var y;
          e === null ? y = "null" : se(e) ? y = "array" : e !== void 0 && e.$$typeof === t ? (y = "<" + (k(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, f);
        }
        var b = Nr(e, n, o, m, g);
        if (b == null)
          return b;
        if (d) {
          var _ = n.children;
          if (_ !== void 0)
            if (l)
              if (se(_)) {
                for (var $ = 0; $ < _.length; $++)
                  Ye(_[$], e);
                Object.freeze && Object.freeze(_);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye(_, e);
        }
        if (U.call(n, "key")) {
          var I = k(e), R = Object.keys(n).filter(function(Hr) {
            return Hr !== "key";
          }), ce = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Be[I + ce]) {
            var qr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ce, I, qr, I), Be[I + ce] = !0;
          }
        }
        return e === i ? Lr(b) : $r(b), b;
      }
    }
    function Yr(e, n, o) {
      return Ue(e, n, o, !0);
    }
    function Br(e, n, o) {
      return Ue(e, n, o, !1);
    }
    var Ur = Br, Vr = Yr;
    q.Fragment = i, q.jsx = Ur, q.jsxs = Vr;
  }()), q;
}
process.env.NODE_ENV === "production" ? me.exports = Qr() : me.exports = et();
var P = me.exports;
function rt() {
  return rr() ? P.jsx(H, { sx: {
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
  }, children: P.jsx(Jr, { color: "primary", thickness: 6, size: 50 }) }) : null;
}
function tt() {
  const r = D.uuids;
  return Object.keys(r).length > 0;
}
function nt(r) {
  x.blockingStarted(r);
}
function ot(r) {
  x.blockingStopped(r);
}
function tr(r) {
  const t = zr(""), i = er(x.subscribe, x.getSnapshot).uuids[t.current];
  return de(() => (t.current = Gr(), () => {
    x.blockingStopped(t.current);
  }), []), de(() => {
    !i && r ? x.blockingStarted(t.current) : i && r === !1 && x.blockingStopped(t.current);
  }, [r, i]), {
    blockingStarted: J(() => {
      x.blockingStarted(t.current);
    }, []),
    blockingStopped: J(() => {
      x.blockingStopped(t.current);
    }, [])
  };
}
function it(r) {
  const { blockingStarted: t, blockingStopped: s } = tr();
  return async (...i) => {
    t();
    const u = await r(...i);
    return s(), u;
  };
}
const nr = {
  zIndex: 100,
  position: "sticky",
  pointerEvents: "none"
}, Ge = {
  ...nr,
  left: 0,
  minWidth: "100%",
  height: "40px",
  minHeight: "40px",
  marginTop: "-40px"
}, Ke = {
  ...nr,
  top: 0,
  minHeight: "100%",
  width: "20px",
  minWidth: "20px",
  marginLeft: "-20px"
}, st = {
  top: 0,
  backgroundImage: "radial-gradient(farthest-side at 50% 0%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  opacity: 0
}, ut = {
  bottom: 0,
  backgroundImage: "radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)"
}, at = {
  left: 0,
  backgroundImage: "radial-gradient(farthest-side at 0% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  opacity: 0
}, lt = {
  right: 0,
  backgroundImage: "radial-gradient(farthest-side at 100% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)"
};
function $t({ children: r, containerRef: t, direction: s = "column", styleTopShadow: i = {}, styleBottomShadow: u = {}, threshold: v = 40 }) {
  return ct({ direction: s, container: t, threshold: v }), P.jsxs(P.Fragment, { children: [s == "column" ? P.jsx(H, { className: "shadow--top", sx: { ...Ge, ...st, ...i } }) : null, s == "row" ? P.jsx(H, { className: "shadow--left", sx: { ...Ke, ...at, ...i } }) : null, r, s == "column" ? P.jsx(H, { className: "shadow--bottom", sx: { ...Ge, ...ut, ...u } }) : null, s == "row" ? P.jsx(H, { className: "shadow--right", sx: { ...Ke, ...lt, ...u } }) : null] });
}
const te = 150, fe = te;
function ct({ container: r, direction: t, threshold: s }) {
  const i = J(Ve(() => {
    if (r.current) {
      if (t == "column") {
        const a = r.current.querySelector(".shadow--top"), p = r.current.querySelector(".shadow--bottom");
        if (a && p) {
          const c = r.current.scrollHeight - r.current.offsetHeight;
          c < s ? (a.style.opacity = String(0), p.style.opacity = String(0)) : (a.style.opacity = String(Math.min(r.current.scrollTop / te, 1)), p.style.opacity = String(Math.min((c - r.current.scrollTop) / te, 1)));
        }
      } else if (t == "row") {
        const a = r.current.querySelector(".shadow--left"), p = r.current.querySelector(".shadow--right");
        if (a && p) {
          const c = r.current.scrollWidth - r.current.offsetWidth;
          c < s ? (a.style.opacity = String(0), p.style.opacity = String(0)) : (a.style.opacity = String(Math.min(r.current.scrollLeft / fe, 1)), p.style.opacity = String(Math.min((c - r.current.scrollLeft) / fe, 1)));
        }
      }
    }
  }), [r.current]), u = J((a) => {
    if (a) {
      if (t == "column") {
        const p = a.scrollHeight - a.offsetHeight, c = a.querySelector(".shadow--bottom");
        c && (p < s ? c.style.opacity = "0" : c.style.opacity = String(Math.min((p - a.scrollTop) / te, 1)));
      } else if (t == "row") {
        const p = a.scrollWidth - a.offsetWidth, c = a.querySelector(".shadow--right");
        c && (p < s ? c.style.opacity = "0" : c.style.opacity = String(Math.min((p - a.scrollLeft) / fe, 1)));
      }
    }
  }, []), v = J(Ve(() => {
    const a = r.current;
    a && u(a);
  }), [r.current]);
  return de(() => {
    const a = r.current;
    let p = null;
    return a && (u(a), a.addEventListener("scroll", i), a.addEventListener("resize", v), p = new MutationObserver(v), p.observe(a, { subtree: !0, childList: !0 })), () => {
      a == null || a.removeEventListener("resize", v), a == null || a.removeEventListener("scroll", i), p == null || p.disconnect();
    };
  }, [r, v, i]), r;
}
function K(r) {
  return ft(typeof r == "string" ? r : r.hours);
}
function ft(r) {
  const t = r.split("-");
  return { start: Xe(t[0]), end: Xe(t[1]) };
}
function Xe(r) {
  const t = r.split(":");
  return { hours: Number(t[0]), minutes: Number(t[1]) };
}
function or(r, t) {
  return r.hours == t.hours && r.minutes == t.minutes;
}
function ir(r, t) {
  return G(r) > G(t);
}
function dt(r, t) {
  return G(r) < G(t);
}
function pt(r, t) {
  return or(r, t) || ir(r, t);
}
function G(r) {
  return r.hours * 60 + r.minutes;
}
function mt(r) {
  return String(r.hours).padStart(2, "0") + ":" + String(r.minutes).padStart(2, "0");
}
function gt(r) {
  return {
    hours: Number(j(r, "H")),
    minutes: Number(j(r, "m"))
  };
}
const h = { isSame: or, isBefore: dt, isAfter: ir, isSameOrAfter: pt, timeToNumber: G, fromDate: gt, timeToString: mt };
function vt(r) {
  return h.isAfter(r.start, r.end);
}
function sr(r) {
  return vt(r);
}
function ur(r, t) {
  return h.isSameOrAfter(t, r.start) && (sr(r) || h.isBefore(t, r.end));
}
function ht(r, t) {
  return sr(r) && ur({ ...r, start: { hours: 0, minutes: 0 } }, t);
}
function yt(r) {
  return `${h.timeToString(r.start)}-${h.timeToString(r.end)}`;
}
function bt(r, t) {
  return h.isSame(r.start, t.start) && h.isSame(r.end, t.end);
}
const ve = { containsTime: ur, containsNightTime: ht, timeRangeToString: yt, timeRangesAreEqual: bt };
function ar(r, t) {
  return h.isBefore(r, t.start) ? t : null;
}
function Et(r, t) {
  var s;
  return ((s = ar(r, t)) == null ? void 0 : s.start) ?? null;
}
function Tt(r, t) {
  var s;
  return ((s = ar(r, t)) == null ? void 0 : s.end) ?? null;
}
function St(r, t) {
  return ve.containsTime(t, r) ? t.end : null;
}
function Rt(r, t) {
  for (const s of r)
    if (ve.containsNightTime(K(s), t))
      return !0;
  return !1;
}
function lr(r, t) {
  for (const s of r)
    if (ve.containsTime(K(s), t))
      return !0;
  return !1;
}
function wt(r) {
  return lr(r, { hours: 23, minutes: 59 });
}
function _t(r, t) {
  for (const s of r.map((i) => K(i)).sort((i, u) => h.timeToNumber(i.start) - h.timeToNumber(u.start))) {
    const i = Et(h.fromDate(t), s);
    if (i)
      return i;
  }
  return null;
}
function Ot(r, t) {
  const s = r.map((i) => K(i)).sort((i, u) => h.timeToNumber(i.end) - h.timeToNumber(u.end));
  for (const i of s) {
    const u = St(h.fromDate(t), i);
    if (u)
      return u;
  }
  for (const i of s) {
    const u = Tt(h.fromDate(t), i);
    if (u)
      return u;
  }
  return null;
}
const C = {
  isOpenAtNight: Rt,
  nextClose: Ot,
  nextOpen: _t,
  isOpenAtTheEndOfTheDay: wt,
  isOpenAt: lr
}, xt = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], Lt = (r) => xt.includes(r);
function Ct(r, t) {
  const [s, i] = t.split("-"), [u, v] = s.split(":"), [a, p] = i.split(":");
  let c = qe(r);
  c.setHours(Number(u), Number(v), 0, 0);
  let w = qe(r);
  w.setHours(Number(a), Number(p), 0, 0);
  const E = 60 * Number(a) + Number(p), O = 60 * Number(u) + Number(v);
  return E < O && (c = ge(c, 1)), (Kr(c, r) || Xr(c, r)) && Zr(w, r);
}
function N(r, t) {
  var s, i;
  return ((s = r.exceptions) == null ? void 0 : s[j(t, "yyyy-MM-dd")]) ?? ((i = r.exceptions) == null ? void 0 : i[j(t, "MM-dd")]) ?? r[j(t, "EEEE").toLowerCase()] ?? [];
}
function kt(r, t) {
  var i, u, v;
  return ((v = [...((i = r.exceptions) == null ? void 0 : i[j(t, "yyyy-MM-dd")]) ?? ((u = r.exceptions) == null ? void 0 : u[j(t, "MM-dd")]) ?? r[j(t, "EEEE").toLowerCase()] ?? null ?? []].reverse()) == null ? void 0 : v.find((a) => Ct(t, typeof a == "string" ? a : a.hours))) ?? null;
}
function Y(r) {
  return r.timezone ?? Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function Dt(r, t) {
  const s = kt(r, t);
  return s ? K(s) : null;
}
function Pt(r, t = null, s = null) {
  t = t ?? new L(/* @__PURE__ */ new Date(), Y(r)), t = new L(t.getTime(), Y(r));
  let i = N(r, t), u = C.nextOpen(i, t), v = 366;
  for (; !u || u.hours >= 24; ) {
    if (--v < 0)
      return null;
    if (t = pe(t, 1), t == null || t.setHours(0, 0, 0, 0), he(r, t) && !C.isOpenAtTheEndOfTheDay(i))
      return t;
    if (s && (t == null ? void 0 : t.getTime()) > s.getTime())
      return s;
    i = N(r, t), u = C.nextOpen(i, t);
  }
  return u ? (t == null || t.setHours(u.hours, u.minutes, 0, 0), t) : null;
}
function Yt(r, t = null, s = null) {
  var p;
  t = t ?? new L(/* @__PURE__ */ new Date(), Y(r)), t = new L(t.getTime(), Y(r));
  const i = (p = Dt(r, t)) == null ? void 0 : p.end;
  if (i && i.hours < 24)
    return t.setHours(i.hours, i.minutes, 0, 0), t;
  let u = null;
  {
    const c = ge(t, 1), w = N(r, c);
    C.isOpenAtNight(w, h.fromDate(c)) && (u = C.nextClose(w, t));
  }
  let v = N(r, t);
  u || (u = C.nextClose(v, t), u && u.hours < 24 && (h.timeToNumber(u) < h.timeToNumber(h.fromDate(t)) || Ze(r, t) && h.timeToNumber(h.fromDate(Pt(r, t) ?? /* @__PURE__ */ new Date("2100-00-00 00:00:00"))) > h.timeToNumber(u)) && (t = pe(t, 1)));
  let a = 366;
  for (; !u || u.hours >= 24; ) {
    if (--a < 0)
      return null;
    if (t = pe(t, 1), t == null || t.setHours(0, 0, 0, 0), Ze(r, t) && C.isOpenAtTheEndOfTheDay(v))
      return t;
    if (s && (t == null ? void 0 : t.getTime()) > s.getTime())
      return s;
    v = N(r, t), u = C.nextClose(v, t);
  }
  return u ? (t == null || t.setHours(u.hours, u.minutes, 0, 0), t) : null;
}
function jt(r) {
  return he(r, /* @__PURE__ */ new Date());
}
function Bt(r) {
  return !jt(r);
}
function Ze(r, t) {
  return !he(r, t);
}
function he(r, t) {
  t = t ?? new L(/* @__PURE__ */ new Date(), Y(r)), t = new L(t.getTime(), Y(r));
  {
    const i = ge(t, 1), u = N(r, i);
    if (C.isOpenAtNight(u, h.fromDate(i)))
      return !0;
  }
  const s = N(r, t);
  return C.isOpenAt(s, h.fromDate(t));
}
const Ut = {
  useIsUserInputBlocked: rr,
  isUserInputBlocked: tt,
  useBlockUserInput: tr,
  useWrapPromise: it,
  blockingStarted: nt,
  blockingStopped: ot,
  View: rt
};
export {
  Ut as BlockUserInput,
  $t as ScrollShadows,
  h as TimeMethods,
  ve as TimeRangeMethods,
  xt as days,
  K as getTimeRangeOfOpeningHoursForDay,
  Bt as isClosed,
  Ze as isClosedAt,
  Lt as isOfTypeDay,
  jt as isOpen,
  he as isOpenAt,
  Yt as nextClose,
  Pt as nextOpen
};
