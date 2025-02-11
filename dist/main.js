import Qe, { useSyncExternalStore as er, useRef as Hr, useEffect as me, useCallback as J } from "react";
import { Box as z, CircularProgress as Jr } from "@mui/material";
import { v4 as Gr } from "uuid";
import { debounce as Ve, clone as qe } from "lodash";
import { format as j, addDays as ne, subDays as ve, isBefore as Kr, isEqual as Xr, isAfter as Zr } from "date-fns";
import { TZDate as A } from "@date-fns/tz";
let D = { uuids: {} }, H = [];
const x = {
  blockingStarted: (r) => {
    D.uuids[r] = !0, D = { ...D }, ze();
  },
  blockingStopped: (r) => {
    delete D.uuids[r], D = { ...D }, ze();
  },
  subscribe(r) {
    return H = [...H, r], () => {
      H = H.filter((t) => t !== r);
    };
  },
  getSnapshot() {
    return D;
  }
};
function ze() {
  for (let r of H)
    r();
}
function rr() {
  const r = er(x.subscribe, x.getSnapshot);
  return Object.keys(r.uuids).length > 0;
}
var ge = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Qr() {
  if (He) return V;
  He = 1;
  var r = Qe, t = Symbol.for("react.element"), u = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(p, c, R) {
    var E, O = {}, I = null, X = null;
    R !== void 0 && (I = "" + R), c.key !== void 0 && (I = "" + c.key), c.ref !== void 0 && (X = c.ref);
    for (E in c) i.call(c, E) && !g.hasOwnProperty(E) && (O[E] = c[E]);
    if (p && p.defaultProps) for (E in c = p.defaultProps, c) O[E] === void 0 && (O[E] = c[E]);
    return { $$typeof: t, type: p, key: I, ref: X, props: O, _owner: s.current };
  }
  return V.Fragment = u, V.jsx = a, V.jsxs = a, V;
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
    var r = Qe, t = Symbol.for("react.element"), u = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), p = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), X = Symbol.for("react.offscreen"), ye = Symbol.iterator, cr = "@@iterator";
    function fr(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = ye && e[ye] || e[cr];
      return typeof n == "function" ? n : null;
    }
    var $ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
          o[l - 1] = arguments[l];
        dr("error", e, o);
      }
    }
    function dr(e, n, o) {
      {
        var l = $.ReactDebugCurrentFrame, m = l.getStackAddendum();
        m !== "" && (n += "%s", o = o.concat([m]));
        var v = o.map(function(d) {
          return String(d);
        });
        v.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var pr = !1, mr = !1, gr = !1, vr = !1, hr = !1, be;
    be = Symbol.for("react.module.reference");
    function yr(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === g || hr || e === s || e === R || e === E || vr || e === X || pr || mr || gr || typeof e == "object" && e !== null && (e.$$typeof === I || e.$$typeof === O || e.$$typeof === a || e.$$typeof === p || e.$$typeof === c || // This needs to include all possible module reference object
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
        case u:
          return "Portal";
        case g:
          return "Profiler";
        case s:
          return "StrictMode";
        case R:
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
          case I: {
            var m = e, v = m._payload, d = m._init;
            try {
              return k(d(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, B = 0, Te, Se, we, Re, _e, Oe, xe;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function Er() {
      {
        if (B === 0) {
          Te = console.log, Se = console.info, we = console.warn, Re = console.error, _e = console.group, Oe = console.groupCollapsed, xe = console.groupEnd;
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
            log: N({}, e, {
              value: Te
            }),
            info: N({}, e, {
              value: Se
            }),
            warn: N({}, e, {
              value: we
            }),
            error: N({}, e, {
              value: Re
            }),
            group: N({}, e, {
              value: _e
            }),
            groupCollapsed: N({}, e, {
              value: Oe
            }),
            groupEnd: N({}, e, {
              value: xe
            })
          });
        }
        B < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = $.ReactCurrentDispatcher, se;
    function Z(e, n, o) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (m) {
            var l = m.stack.trim().match(/\n( *(at )?)/);
            se = l && l[1] || "";
          }
        return `
` + se + e;
      }
    }
    var ue = !1, Q;
    {
      var Sr = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new Sr();
    }
    function ke(e, n) {
      if (!e || ue)
        return "";
      {
        var o = Q.get(e);
        if (o !== void 0)
          return o;
      }
      var l;
      ue = !0;
      var m = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = ie.current, ie.current = null, Er();
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
            } catch (w) {
              l = w;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (w) {
              l = w;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            l = w;
          }
          e();
        }
      } catch (w) {
        if (w && l && typeof w.stack == "string") {
          for (var f = w.stack.split(`
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
        ue = !1, ie.current = v, Tr(), Error.prepareStackTrace = m;
      }
      var Y = e ? e.displayName || e.name : "", M = Y ? Z(Y) : "";
      return typeof e == "function" && Q.set(e, M), M;
    }
    function wr(e, n, o) {
      return ke(e, !1);
    }
    function Rr(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function ee(e, n, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ke(e, Rr(e));
      if (typeof e == "string")
        return Z(e);
      switch (e) {
        case R:
          return Z("Suspense");
        case E:
          return Z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return wr(e.render);
          case O:
            return ee(e.type, n, o);
          case I: {
            var l = e, m = l._payload, v = l._init;
            try {
              return ee(v(m), n, o);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, De = {}, Pe = $.ReactDebugCurrentFrame;
    function re(e) {
      if (e) {
        var n = e._owner, o = ee(e.type, e._source, n ? n.type : null);
        Pe.setExtraStackFrame(o);
      } else
        Pe.setExtraStackFrame(null);
    }
    function _r(e, n, o, l, m) {
      {
        var v = Function.call.bind(U);
        for (var d in e)
          if (v(e, d)) {
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
    function ae(e) {
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
    var Fe = $.ReactCurrentOwner, kr = {
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
    var Ir = function(e, n, o, l, m, v, d) {
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
        var v, d = {}, f = null, S = null;
        o !== void 0 && (Ae(o), f = "" + o), Pr(n) && (Ae(n.key), f = "" + n.key), Dr(n) && (S = n.ref, jr(n, m));
        for (v in n)
          U.call(n, v) && !kr.hasOwnProperty(v) && (d[v] = n[v]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (v in y)
            d[v] === void 0 && (d[v] = y[v]);
        }
        if (f || S) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          f && Ar(d, b), S && Fr(d, b);
        }
        return Ir(e, f, S, m, l, Fe.current, d);
      }
    }
    var le = $.ReactCurrentOwner, Me = $.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var n = e._owner, o = ee(e.type, e._source, n ? n.type : null);
        Me.setExtraStackFrame(o);
      } else
        Me.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function We() {
      {
        if (le.current) {
          var e = k(le.current.type);
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
        e && e._owner && e._owner !== le.current && (l = " It was passed a child from " + k(e._owner.type) + "."), L(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, l), L(null);
      }
    }
    function Ye(e, n) {
      {
        if (typeof e != "object")
          return;
        if (ae(e))
          for (var o = 0; o < e.length; o++) {
            var l = e[o];
            fe(l) && Le(l, n);
          }
        else if (fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var m = fr(e);
          if (typeof m == "function" && m !== e.entries)
            for (var v = m.call(e), d; !(d = v.next()).done; )
              fe(d.value) && Le(d.value, n);
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
        } else if (n.PropTypes !== void 0 && !ce) {
          ce = !0;
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
            L(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    var Be = {};
    function Ue(e, n, o, l, m, v) {
      {
        var d = yr(e);
        if (!d) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = Mr();
          S ? f += S : f += We();
          var y;
          e === null ? y = "null" : ae(e) ? y = "array" : e !== void 0 && e.$$typeof === t ? (y = "<" + (k(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, f);
        }
        var b = Nr(e, n, o, m, v);
        if (b == null)
          return b;
        if (d) {
          var _ = n.children;
          if (_ !== void 0)
            if (l)
              if (ae(_)) {
                for (var Y = 0; Y < _.length; Y++)
                  Ye(_[Y], e);
                Object.freeze && Object.freeze(_);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye(_, e);
        }
        if (U.call(n, "key")) {
          var M = k(e), w = Object.keys(n).filter(function(zr) {
            return zr !== "key";
          }), de = w.length > 0 ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Be[M + de]) {
            var qr = w.length > 0 ? "{" + w.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, de, M, qr, M), Be[M + de] = !0;
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
process.env.NODE_ENV === "production" ? ge.exports = Qr() : ge.exports = et();
var P = ge.exports;
function rt() {
  return rr() ? P.jsx(z, { sx: {
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
  const t = Hr(""), i = er(x.subscribe, x.getSnapshot).uuids[t.current];
  return me(() => (t.current = Gr(), () => {
    x.blockingStopped(t.current);
  }), []), me(() => {
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
  const { blockingStarted: t, blockingStopped: u } = tr();
  return async (...i) => {
    t();
    const s = await r(...i);
    return u(), s;
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
function Lt({ children: r, containerRef: t, direction: u = "column", styleTopShadow: i = {}, styleBottomShadow: s = {}, threshold: g = 40 }) {
  return ct({ direction: u, container: t, threshold: g }), P.jsxs(P.Fragment, { children: [u == "column" ? P.jsx(z, { className: "shadow--top", sx: { ...Ge, ...st, ...i } }) : null, u == "row" ? P.jsx(z, { className: "shadow--left", sx: { ...Ke, ...at, ...i } }) : null, r, u == "column" ? P.jsx(z, { className: "shadow--bottom", sx: { ...Ge, ...ut, ...s } }) : null, u == "row" ? P.jsx(z, { className: "shadow--right", sx: { ...Ke, ...lt, ...s } }) : null] });
}
const te = 150, pe = te;
function ct({ container: r, direction: t, threshold: u }) {
  const i = J(Ve(() => {
    if (r.current) {
      if (t == "column") {
        const a = r.current.querySelector(".shadow--top"), p = r.current.querySelector(".shadow--bottom");
        if (a && p) {
          const c = r.current.scrollHeight - r.current.offsetHeight;
          c < u ? (a.style.opacity = String(0), p.style.opacity = String(0)) : (a.style.opacity = String(Math.min(r.current.scrollTop / te, 1)), p.style.opacity = String(Math.min((c - r.current.scrollTop) / te, 1)));
        }
      } else if (t == "row") {
        const a = r.current.querySelector(".shadow--left"), p = r.current.querySelector(".shadow--right");
        if (a && p) {
          const c = r.current.scrollWidth - r.current.offsetWidth;
          c < u ? (a.style.opacity = String(0), p.style.opacity = String(0)) : (a.style.opacity = String(Math.min(r.current.scrollLeft / pe, 1)), p.style.opacity = String(Math.min((c - r.current.scrollLeft) / pe, 1)));
        }
      }
    }
  }), [r.current]), s = J((a) => {
    if (a) {
      if (t == "column") {
        const p = a.scrollHeight - a.offsetHeight, c = a.querySelector(".shadow--bottom");
        c && (p < u ? c.style.opacity = "0" : c.style.opacity = String(Math.min((p - a.scrollTop) / te, 1)));
      } else if (t == "row") {
        const p = a.scrollWidth - a.offsetWidth, c = a.querySelector(".shadow--right");
        c && (p < u ? c.style.opacity = "0" : c.style.opacity = String(Math.min((p - a.scrollLeft) / pe, 1)));
      }
    }
  }, []), g = J(Ve(() => {
    const a = r.current;
    a && s(a);
  }), [r.current]);
  return me(() => {
    const a = r.current;
    let p = null;
    return a && (s(a), a.addEventListener("scroll", i), a.addEventListener("resize", g), p = new MutationObserver(g), p.observe(a, { subtree: !0, childList: !0 })), () => {
      a == null || a.removeEventListener("resize", g), a == null || a.removeEventListener("scroll", i), p == null || p.disconnect();
    };
  }, [r, g, i]), r;
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
const he = { containsTime: ur, containsNightTime: ht, timeRangeToString: yt, timeRangesAreEqual: bt };
function ar(r, t) {
  return h.isBefore(r, t.start) ? t : null;
}
function Et(r, t) {
  var u;
  return ((u = ar(r, t)) == null ? void 0 : u.start) ?? null;
}
function Tt(r, t) {
  var u;
  return ((u = ar(r, t)) == null ? void 0 : u.end) ?? null;
}
function St(r, t) {
  return he.containsTime(t, r) ? t.end : null;
}
function wt(r, t) {
  for (const u of r)
    if (he.containsNightTime(K(u), t))
      return !0;
  return !1;
}
function lr(r, t) {
  for (const u of r)
    if (he.containsTime(K(u), t))
      return !0;
  return !1;
}
function Rt(r) {
  return lr(r, { hours: 23, minutes: 59 });
}
function _t(r, t) {
  for (const u of r.map((i) => K(i)).sort((i, s) => h.timeToNumber(i.start) - h.timeToNumber(s.start))) {
    const i = Et(h.fromDate(t), u);
    if (i)
      return i;
  }
  return null;
}
function Ot(r, t) {
  const u = r.map((i) => K(i)).sort((i, s) => h.timeToNumber(i.end) - h.timeToNumber(s.end));
  for (const i of u) {
    const s = St(h.fromDate(t), i);
    if (s)
      return s;
  }
  for (const i of u) {
    const s = Tt(h.fromDate(t), i);
    if (s)
      return s;
  }
  return null;
}
const C = {
  isOpenAtNight: wt,
  nextClose: Ot,
  nextOpen: _t,
  isOpenAtTheEndOfTheDay: Rt,
  isOpenAt: lr
}, xt = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], Yt = (r) => xt.includes(r);
function Ct(r, t) {
  const [u, i] = t.split("-"), [s, g] = u.split(":"), [a, p] = i.split(":");
  let c = qe(r);
  c.setHours(Number(s), Number(g), 0, 0);
  let R = qe(r);
  R.setHours(Number(a), Number(p), 0, 0);
  const E = 60 * Number(a) + Number(p), O = 60 * Number(s) + Number(g);
  return E < O && (c = ve(c, 1)), (Kr(c, r) || Xr(c, r)) && Zr(R, r);
}
function W(r, t) {
  var u, i;
  return ((u = r.exceptions) == null ? void 0 : u[j(t, "yyyy-MM-dd")]) ?? ((i = r.exceptions) == null ? void 0 : i[j(t, "MM-dd")]) ?? r[j(t, "EEEE").toLowerCase()] ?? [];
}
function kt(r, t) {
  var i, s, g;
  return ((g = [...((i = r.exceptions) == null ? void 0 : i[j(t, "yyyy-MM-dd")]) ?? ((s = r.exceptions) == null ? void 0 : s[j(t, "MM-dd")]) ?? r[j(t, "EEEE").toLowerCase()] ?? null ?? []].reverse()) == null ? void 0 : g.find((a) => Ct(t, typeof a == "string" ? a : a.hours))) ?? null;
}
function F(r) {
  return r.timezone ?? Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function Dt(r, t) {
  const u = kt(r, t);
  return u ? K(u) : null;
}
function Pt(r, t = null, u = null) {
  t = t ?? new A(/* @__PURE__ */ new Date(), F(r)), t = new A(t.getTime(), F(r));
  let i = W(r, t), s = C.nextOpen(i, t), g = 366;
  for (; !s || s.hours >= 24; ) {
    if (--g < 0)
      return null;
    if (t = ne(t, 1), t == null || t.setHours(0, 0, 0, 0), oe(r, t) && !C.isOpenAtTheEndOfTheDay(i))
      return t;
    if (u && (t == null ? void 0 : t.getTime()) > u.getTime())
      return u;
    i = W(r, t), s = C.nextOpen(i, t);
  }
  return s ? (t == null || t.setHours(s.hours, s.minutes, 0, 0), t) : null;
}
function jt(r, t = null, u = null) {
  var p;
  t = t ?? new A(/* @__PURE__ */ new Date(), F(r)), t = new A(t.getTime(), F(r));
  const i = (p = Dt(r, t)) == null ? void 0 : p.end;
  if (i && i.hours < 24)
    return t.setHours(i.hours, i.minutes, 0, 0), t;
  let s = null;
  {
    const c = ve(t, 1), R = W(r, c);
    C.isOpenAtNight(R, h.fromDate(c)) && (s = C.nextClose(R, t));
  }
  let g = W(r, t);
  s || (s = C.nextClose(g, t), s && s.hours < 24 && (h.timeToNumber(s) < h.timeToNumber(h.fromDate(t)) || Ze(r, t) && h.timeToNumber(h.fromDate(Pt(r, t) ?? /* @__PURE__ */ new Date("2100-00-00 00:00:00"))) > h.timeToNumber(s)) && (t = ne(t, 1)));
  let a = 366;
  for (; !s || s.hours >= 24; ) {
    if (--a < 0)
      return null;
    if (t = ne(t, 1), t == null || t.setHours(0, 0, 0, 0), Ze(r, t) && C.isOpenAtTheEndOfTheDay(g))
      return t;
    if (u && (t == null ? void 0 : t.getTime()) > u.getTime())
      return u;
    g = W(r, t), s = C.nextClose(g, t);
  }
  return s ? (t == null || t.setHours(s.hours, s.minutes, 0, 0), t) : null;
}
function At(r) {
  return oe(r, /* @__PURE__ */ new Date());
}
function Bt(r) {
  return !At(r);
}
function Ze(r, t) {
  return !oe(r, t);
}
function oe(r, t) {
  t = t ?? new A(/* @__PURE__ */ new Date(), F(r)), t = new A(t.getTime(), F(r));
  {
    const i = ve(t, 1), s = W(r, i);
    if (C.isOpenAtNight(s, h.fromDate(i)))
      return !0;
  }
  const u = W(r, t);
  return C.isOpenAt(u, h.fromDate(t));
}
function Ut(r, t, u = 7) {
  t = t ?? new A(/* @__PURE__ */ new Date(), F(r)), t = new A(t.getTime(), F(r)), t.setMilliseconds(30);
  const i = oe(r, t), s = ne(t, u), g = jt(r, t, s);
  return i && s.getTime() == (g == null ? void 0 : g.getTime());
}
const Vt = {
  useIsUserInputBlocked: rr,
  isUserInputBlocked: tt,
  useBlockUserInput: tr,
  useWrapPromise: it,
  blockingStarted: nt,
  blockingStopped: ot,
  View: rt
};
export {
  Vt as BlockUserInput,
  Lt as ScrollShadows,
  h as TimeMethods,
  he as TimeRangeMethods,
  xt as days,
  K as getTimeRangeOfOpeningHoursForDay,
  Bt as isClosed,
  Ze as isClosedAt,
  Yt as isOfTypeDay,
  At as isOpen,
  oe as isOpenAt,
  Ut as isOpenComingDays,
  jt as nextClose,
  Pt as nextOpen
};
