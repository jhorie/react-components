import Ze, { useSyncExternalStore as Qe, useRef as qr, useEffect as de, useCallback as G } from "react";
import { Box as z, CircularProgress as zr } from "@mui/material";
import { v4 as Jr } from "uuid";
import { debounce as He } from "lodash";
import { format as j, addDays as pe, subDays as ge, isBefore as Gr, isEqual as Kr, isAfter as Xr } from "date-fns";
import { TZDate as L } from "@date-fns/tz";
let D = { uuids: {} }, J = [];
const O = {
  blockingStarted: (r) => {
    D.uuids[r] = !0, D = { ...D }, Ve();
  },
  blockingStopped: (r) => {
    delete D.uuids[r], D = { ...D }, Ve();
  },
  subscribe(r) {
    return J = [...J, r], () => {
      J = J.filter((t) => t !== r);
    };
  },
  getSnapshot() {
    return D;
  }
};
function Ve() {
  for (let r of J)
    r();
}
function er() {
  const r = Qe(O.subscribe, O.getSnapshot);
  return Object.keys(r.uuids).length > 0;
}
var ve = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Zr() {
  if (qe) return V;
  qe = 1;
  var r = Ze, t = Symbol.for("react.element"), s = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(p, l, C) {
    var E, _ = {}, F = null, X = null;
    C !== void 0 && (F = "" + C), l.key !== void 0 && (F = "" + l.key), l.ref !== void 0 && (X = l.ref);
    for (E in l) i.call(l, E) && !b.hasOwnProperty(E) && (_[E] = l[E]);
    if (p && p.defaultProps) for (E in l = p.defaultProps, l) _[E] === void 0 && (_[E] = l[E]);
    return { $$typeof: t, type: p, key: F, ref: X, props: _, _owner: c.current };
  }
  return V.Fragment = s, V.jsx = u, V.jsxs = u, V;
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
var ze;
function Qr() {
  return ze || (ze = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ze, t = Symbol.for("react.element"), s = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), p = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), X = Symbol.for("react.offscreen"), ye = Symbol.iterator, lr = "@@iterator";
    function cr(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = ye && e[ye] || e[lr];
      return typeof n == "function" ? n : null;
    }
    var M = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(e) {
      {
        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
          o[a - 1] = arguments[a];
        fr("error", e, o);
      }
    }
    function fr(e, n, o) {
      {
        var a = M.ReactDebugCurrentFrame, v = a.getStackAddendum();
        v !== "" && (n += "%s", o = o.concat([v]));
        var g = o.map(function(d) {
          return String(d);
        });
        g.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var dr = !1, pr = !1, vr = !1, gr = !1, mr = !1, be;
    be = Symbol.for("react.module.reference");
    function hr(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === b || mr || e === c || e === C || e === E || gr || e === X || dr || pr || vr || typeof e == "object" && e !== null && (e.$$typeof === F || e.$$typeof === _ || e.$$typeof === u || e.$$typeof === p || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === be || e.getModuleId !== void 0));
    }
    function yr(e, n, o) {
      var a = e.displayName;
      if (a)
        return a;
      var v = n.displayName || n.name || "";
      return v !== "" ? o + "(" + v + ")" : o;
    }
    function Ee(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case C:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var n = e;
            return Ee(n) + ".Consumer";
          case u:
            var o = e;
            return Ee(o._context) + ".Provider";
          case l:
            return yr(e, e.render, "ForwardRef");
          case _:
            var a = e.displayName || null;
            return a !== null ? a : k(e.type) || "Memo";
          case F: {
            var v = e, g = v._payload, d = v._init;
            try {
              return k(d(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, U = 0, Se, Te, we, Re, _e, Oe, xe;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function br() {
      {
        if (U === 0) {
          Se = console.log, Te = console.info, we = console.warn, Re = console.error, _e = console.group, Oe = console.groupCollapsed, xe = console.groupEnd;
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
        U++;
      }
    }
    function Er() {
      {
        if (U--, U === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: Se
            }),
            info: A({}, e, {
              value: Te
            }),
            warn: A({}, e, {
              value: we
            }),
            error: A({}, e, {
              value: Re
            }),
            group: A({}, e, {
              value: _e
            }),
            groupCollapsed: A({}, e, {
              value: Oe
            }),
            groupEnd: A({}, e, {
              value: xe
            })
          });
        }
        U < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = M.ReactCurrentDispatcher, oe;
    function Z(e, n, o) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (v) {
            var a = v.stack.trim().match(/\n( *(at )?)/);
            oe = a && a[1] || "";
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
      var a;
      ie = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = ne.current, ne.current = null, br();
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
              a = w;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (w) {
              a = w;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            a = w;
          }
          e();
        }
      } catch (w) {
        if (w && a && typeof w.stack == "string") {
          for (var f = w.stack.split(`
`), T = a.stack.split(`
`), m = f.length - 1, h = T.length - 1; m >= 1 && h >= 0 && f[m] !== T[h]; )
            h--;
          for (; m >= 1 && h >= 0; m--, h--)
            if (f[m] !== T[h]) {
              if (m !== 1 || h !== 1)
                do
                  if (m--, h--, h < 0 || f[m] !== T[h]) {
                    var R = `
` + f[m].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && Q.set(e, R), R;
                  }
                while (m >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        ie = !1, ne.current = g, Er(), Error.prepareStackTrace = v;
      }
      var $ = e ? e.displayName || e.name : "", I = $ ? Z($) : "";
      return typeof e == "function" && Q.set(e, I), I;
    }
    function Tr(e, n, o) {
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
        case C:
          return Z("Suspense");
        case E:
          return Z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Tr(e.render);
          case _:
            return ee(e.type, n, o);
          case F: {
            var a = e, v = a._payload, g = a._init;
            try {
              return ee(g(v), n, o);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, De = {}, Pe = M.ReactDebugCurrentFrame;
    function re(e) {
      if (e) {
        var n = e._owner, o = ee(e.type, e._source, n ? n.type : null);
        Pe.setExtraStackFrame(o);
      } else
        Pe.setExtraStackFrame(null);
    }
    function Rr(e, n, o, a, v) {
      {
        var g = Function.call.bind(H);
        for (var d in e)
          if (g(e, d)) {
            var f = void 0;
            try {
              if (typeof e[d] != "function") {
                var T = Error((a || "React class") + ": " + o + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              f = e[d](n, d, a, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (m) {
              f = m;
            }
            f && !(f instanceof Error) && (re(v), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", o, d, typeof f), re(null)), f instanceof Error && !(f.message in De) && (De[f.message] = !0, re(v), S("Failed %s type: %s", o, f.message), re(null));
          }
      }
    }
    var _r = Array.isArray;
    function se(e) {
      return _r(e);
    }
    function Or(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, o = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function xr(e) {
      try {
        return je(e), !1;
      } catch {
        return !0;
      }
    }
    function je(e) {
      return "" + e;
    }
    function Fe(e) {
      if (xr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Or(e)), je(e);
    }
    var Ae = M.ReactCurrentOwner, Cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, Ne;
    function kr(e) {
      if (H.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Dr(e) {
      if (H.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Pr(e, n) {
      typeof e.ref == "string" && Ae.current;
    }
    function jr(e, n) {
      {
        var o = function() {
          Ie || (Ie = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
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
          Ne || (Ne = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var Ar = function(e, n, o, a, v, g, d) {
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
        value: a
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function Ir(e, n, o, a, v) {
      {
        var g, d = {}, f = null, T = null;
        o !== void 0 && (Fe(o), f = "" + o), Dr(n) && (Fe(n.key), f = "" + n.key), kr(n) && (T = n.ref, Pr(n, v));
        for (g in n)
          H.call(n, g) && !Cr.hasOwnProperty(g) && (d[g] = n[g]);
        if (e && e.defaultProps) {
          var m = e.defaultProps;
          for (g in m)
            d[g] === void 0 && (d[g] = m[g]);
        }
        if (f || T) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          f && jr(d, h), T && Fr(d, h);
        }
        return Ar(e, f, T, v, a, Ae.current, d);
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
    function Nr(e) {
      return "";
    }
    var $e = {};
    function Mr(e) {
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
        var o = Mr(n);
        if ($e[o])
          return;
        $e[o] = !0;
        var a = "";
        e && e._owner && e._owner !== ue.current && (a = " It was passed a child from " + k(e._owner.type) + "."), W(e), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, a), W(null);
      }
    }
    function Ye(e, n) {
      {
        if (typeof e != "object")
          return;
        if (se(e))
          for (var o = 0; o < e.length; o++) {
            var a = e[o];
            le(a) && Le(a, n);
          }
        else if (le(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = cr(e);
          if (typeof v == "function" && v !== e.entries)
            for (var g = v.call(e), d; !(d = g.next()).done; )
              le(d.value) && Le(d.value, n);
        }
      }
    }
    function Wr(e) {
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
          var a = k(n);
          Rr(o, e.props, "prop", a, e);
        } else if (n.PropTypes !== void 0 && !ae) {
          ae = !0;
          var v = k(n);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $r(e) {
      {
        for (var n = Object.keys(e.props), o = 0; o < n.length; o++) {
          var a = n[o];
          if (a !== "children" && a !== "key") {
            W(e), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), S("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    var Be = {};
    function Ue(e, n, o, a, v, g) {
      {
        var d = hr(e);
        if (!d) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = Nr();
          T ? f += T : f += We();
          var m;
          e === null ? m = "null" : se(e) ? m = "array" : e !== void 0 && e.$$typeof === t ? (m = "<" + (k(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : m = typeof e, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", m, f);
        }
        var h = Ir(e, n, o, v, g);
        if (h == null)
          return h;
        if (d) {
          var R = n.children;
          if (R !== void 0)
            if (a)
              if (se(R)) {
                for (var $ = 0; $ < R.length; $++)
                  Ye(R[$], e);
                Object.freeze && Object.freeze(R);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye(R, e);
        }
        if (H.call(n, "key")) {
          var I = k(e), w = Object.keys(n).filter(function(Vr) {
            return Vr !== "key";
          }), ce = w.length > 0 ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Be[I + ce]) {
            var Hr = w.length > 0 ? "{" + w.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ce, I, Hr, I), Be[I + ce] = !0;
          }
        }
        return e === i ? $r(h) : Wr(h), h;
      }
    }
    function Lr(e, n, o) {
      return Ue(e, n, o, !0);
    }
    function Yr(e, n, o) {
      return Ue(e, n, o, !1);
    }
    var Br = Yr, Ur = Lr;
    q.Fragment = i, q.jsx = Br, q.jsxs = Ur;
  }()), q;
}
process.env.NODE_ENV === "production" ? ve.exports = Zr() : ve.exports = Qr();
var P = ve.exports;
function et() {
  return er() ? P.jsx(z, { sx: {
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
  }, children: P.jsx(zr, { color: "primary", thickness: 6, size: 50 }) }) : null;
}
function rt() {
  const r = D.uuids;
  return Object.keys(r).length > 0;
}
function tt(r) {
  O.blockingStarted(r);
}
function nt(r) {
  O.blockingStopped(r);
}
function rr(r) {
  const t = qr(""), i = Qe(O.subscribe, O.getSnapshot).uuids[t.current];
  return de(() => (t.current = Jr(), () => {
    O.blockingStopped(t.current);
  }), []), de(() => {
    !i && r ? O.blockingStarted(t.current) : i && r === !1 && O.blockingStopped(t.current);
  }, [r, i]), {
    blockingStarted: G(() => {
      O.blockingStarted(t.current);
    }, []),
    blockingStopped: G(() => {
      O.blockingStopped(t.current);
    }, [])
  };
}
function ot(r) {
  const { blockingStarted: t, blockingStopped: s } = rr();
  return async (...i) => {
    t();
    const c = await r(...i);
    return s(), c;
  };
}
const tr = {
  zIndex: 100,
  position: "sticky",
  pointerEvents: "none"
}, Je = {
  ...tr,
  left: 0,
  minWidth: "100%",
  height: "40px",
  minHeight: "40px",
  marginTop: "-40px"
}, Ge = {
  ...tr,
  top: 0,
  minHeight: "100%",
  width: "20px",
  minWidth: "20px",
  marginLeft: "-20px"
}, it = {
  top: 0,
  backgroundImage: "radial-gradient(farthest-side at 50% 0%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  opacity: 0
}, st = {
  bottom: 0,
  backgroundImage: "radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)"
}, ut = {
  left: 0,
  backgroundImage: "radial-gradient(farthest-side at 0% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  opacity: 0
}, at = {
  right: 0,
  backgroundImage: "radial-gradient(farthest-side at 100% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)"
};
function Wt({ children: r, containerRef: t, direction: s = "column", styleTopShadow: i = {}, styleBottomShadow: c = {}, threshold: b = 40 }) {
  return lt({ direction: s, container: t, threshold: b }), P.jsxs(P.Fragment, { children: [s == "column" ? P.jsx(z, { className: "shadow--top", sx: { ...Je, ...it, ...i } }) : null, s == "row" ? P.jsx(z, { className: "shadow--left", sx: { ...Ge, ...ut, ...i } }) : null, r, s == "column" ? P.jsx(z, { className: "shadow--bottom", sx: { ...Je, ...st, ...c } }) : null, s == "row" ? P.jsx(z, { className: "shadow--right", sx: { ...Ge, ...at, ...c } }) : null] });
}
const te = 150, fe = te;
function lt({ container: r, direction: t, threshold: s }) {
  const i = G(He(() => {
    if (r.current) {
      if (t == "column") {
        const u = r.current.querySelector(".shadow--top"), p = r.current.querySelector(".shadow--bottom");
        if (u && p) {
          const l = r.current.scrollHeight - r.current.offsetHeight;
          l < s ? (u.style.opacity = String(0), p.style.opacity = String(0)) : (u.style.opacity = String(Math.min(r.current.scrollTop / te, 1)), p.style.opacity = String(Math.min((l - r.current.scrollTop) / te, 1)));
        }
      } else if (t == "row") {
        const u = r.current.querySelector(".shadow--left"), p = r.current.querySelector(".shadow--right");
        if (u && p) {
          const l = r.current.scrollWidth - r.current.offsetWidth;
          l < s ? (u.style.opacity = String(0), p.style.opacity = String(0)) : (u.style.opacity = String(Math.min(r.current.scrollLeft / fe, 1)), p.style.opacity = String(Math.min((l - r.current.scrollLeft) / fe, 1)));
        }
      }
    }
  }), [r.current]), c = G((u) => {
    if (u) {
      if (t == "column") {
        const p = u.scrollHeight - u.offsetHeight, l = u.querySelector(".shadow--bottom");
        l && (p < s ? l.style.opacity = "0" : l.style.opacity = String(Math.min((p - u.scrollTop) / te, 1)));
      } else if (t == "row") {
        const p = u.scrollWidth - u.offsetWidth, l = u.querySelector(".shadow--right");
        l && (p < s ? l.style.opacity = "0" : l.style.opacity = String(Math.min((p - u.scrollLeft) / fe, 1)));
      }
    }
  }, []), b = G(He(() => {
    const u = r.current;
    u && c(u);
  }), [r.current]);
  return de(() => {
    const u = r.current;
    let p = null;
    return u && (c(u), u.addEventListener("scroll", i), u.addEventListener("resize", b), p = new MutationObserver(b), p.observe(u, { subtree: !0, childList: !0 })), () => {
      u == null || u.removeEventListener("resize", b), u == null || u.removeEventListener("scroll", i), p == null || p.disconnect();
    };
  }, [r, b, i]), r;
}
function Y(r) {
  return ct(typeof r == "string" ? r : r[0]);
}
function ct(r) {
  const t = r.split("-");
  return { start: Ke(t[0]), end: Ke(t[1]) };
}
function Ke(r) {
  const t = r.split(":");
  return { hours: Number(t[0]), minutes: Number(t[1]) };
}
function nr(r, t) {
  return r.hours == t.hours && r.minutes == t.minutes;
}
function or(r, t) {
  return K(r) > K(t);
}
function ft(r, t) {
  return K(r) < K(t);
}
function dt(r, t) {
  return nr(r, t) || or(r, t);
}
function K(r) {
  return r.hours * 60 + r.minutes;
}
function pt(r) {
  return String(r.hours).padStart(2, "0") + ":" + String(r.minutes).padStart(2, "0");
}
function vt(r) {
  return {
    hours: Number(j(r, "H")),
    minutes: Number(j(r, "m"))
  };
}
const y = { isSame: nr, isBefore: ft, isAfter: or, isSameOrAfter: dt, timeToNumber: K, fromDate: vt, timeToString: pt };
function gt(r) {
  return y.isAfter(r.start, r.end);
}
function ir(r) {
  return gt(r);
}
function sr(r, t) {
  return y.isSameOrAfter(t, r.start) && (ir(r) || y.isBefore(t, r.end));
}
function mt(r, t) {
  return ir(r) && sr({ ...r, start: { hours: 0, minutes: 0 } }, t);
}
function ht(r) {
  return `${y.timeToString(r.start)}-${y.timeToString(r.end)}`;
}
function yt(r, t) {
  return y.isSame(r.start, t.start) && y.isSame(r.end, t.end);
}
const me = { containsTime: sr, containsNightTime: mt, timeRangeToString: ht, timeRangesAreEqual: yt };
function ur(r, t) {
  return y.isBefore(r, t.start) ? t : null;
}
function bt(r, t) {
  var s;
  return ((s = ur(r, t)) == null ? void 0 : s.start) ?? null;
}
function Et(r, t) {
  var s;
  return ((s = ur(r, t)) == null ? void 0 : s.end) ?? null;
}
function St(r, t) {
  return me.containsTime(t, r) ? t.end : null;
}
function Tt(r, t) {
  for (const s of r)
    if (me.containsNightTime(Y(s), t))
      return !0;
  return !1;
}
function ar(r, t) {
  for (const s of r)
    if (me.containsTime(Y(s), t))
      return !0;
  return !1;
}
function wt(r) {
  return ar(r, { hours: 23, minutes: 59 });
}
function Rt(r, t) {
  for (const s of r) {
    const i = Y(s), c = bt(y.fromDate(t), i);
    if (c)
      return c;
  }
  return null;
}
function _t(r, t) {
  for (const s of r) {
    const i = Y(s), c = St(y.fromDate(t), i);
    if (c)
      return c;
  }
  for (const s of r) {
    const i = Y(s), c = Et(y.fromDate(t), i);
    if (c)
      return c;
  }
  return null;
}
const x = {
  isOpenAtNight: Tt,
  nextClose: _t,
  nextOpen: Rt,
  isOpenAtTheEndOfTheDay: wt,
  isOpenAt: ar
}, Ot = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], $t = (r) => Ot.includes(r);
function xt(r, t) {
  const [s, i] = t.split("-"), [c, b] = s.split(":"), [u, p] = i.split(":");
  let l = new Date(r.getTime());
  l.setHours(Number(c), Number(b), 0, 0);
  let C = new Date(r.getTime());
  C.setHours(Number(u), Number(p), 0, 0);
  const E = 60 * Number(u) + Number(p), _ = 60 * Number(c) + Number(b);
  return E < _ && (l = ge(l, 1)), (Gr(l, r) || Kr(l, r)) && Xr(C, r);
}
function N(r, t) {
  var s, i;
  return ((s = r.exceptions) == null ? void 0 : s[j(t, "yyyy-MM-dd")]) ?? ((i = r.exceptions) == null ? void 0 : i[j(t, "MM-dd")]) ?? r[j(t, "EEEE").toLowerCase()] ?? [];
}
function Ct(r, t) {
  var i, c, b;
  return ((b = (((i = r.exceptions) == null ? void 0 : i[j(t, "yyyy-MM-dd")]) ?? ((c = r.exceptions) == null ? void 0 : c[j(t, "MM-dd")]) ?? r[j(t, "EEEE").toLowerCase()] ?? null).reverse()) == null ? void 0 : b.find((u) => xt(t, typeof u == "string" ? u : u[0]))) ?? null;
}
function B(r) {
  return r.timezone ?? Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function kt(r, t) {
  const s = Ct(r, t);
  return s ? Y(s) : null;
}
function Dt(r, t = null) {
  t = t ?? new L(/* @__PURE__ */ new Date(), B(r)), t = new L(t.getTime(), B(r));
  let s = N(r, t), i = x.nextOpen(s, t), c = 366;
  for (; !i || i.hours >= 24; ) {
    if (--c < 0)
      return null;
    if (t = pe(t, 1), t == null || t.setHours(0, 0, 0, 0), he(r, t) && !x.isOpenAtTheEndOfTheDay(s))
      return t;
    s = N(r, t), i = x.nextOpen(s, t);
  }
  return i ? (t == null || t.setHours(i.hours, i.minutes, 0, 0), t) : null;
}
function Lt(r, t = null) {
  var u;
  t = t ?? new L(/* @__PURE__ */ new Date(), B(r)), t = new L(t.getTime(), B(r));
  const s = (u = kt(r, t)) == null ? void 0 : u.end;
  if (s && s.hours < 24)
    return t.setHours(s.hours, s.minutes, 0, 0), t;
  let i = null;
  {
    const p = ge(t, 1), l = N(r, p);
    x.isOpenAtNight(l, y.fromDate(p)) && (i = x.nextClose(l, t));
  }
  let c = N(r, t);
  i || (i = x.nextClose(c, t), i && i.hours < 24 && (y.timeToNumber(i) < y.timeToNumber(y.fromDate(t)) || Xe(r, t) && y.timeToNumber(y.fromDate(Dt(r, t) ?? /* @__PURE__ */ new Date("2100-00-00 00:00:00"))) > y.timeToNumber(i)) && (t = pe(t, 1)));
  let b = 366;
  for (; !i || i.hours >= 24; ) {
    if (--b < 0)
      return null;
    if (t = pe(t, 1), t == null || t.setHours(0, 0, 0, 0), Xe(r, t) && x.isOpenAtTheEndOfTheDay(c))
      return t;
    c = N(r, t), i = x.nextClose(c, t);
  }
  return i ? (t == null || t.setHours(i.hours, i.minutes, 0, 0), t) : null;
}
function Pt(r) {
  return he(r, /* @__PURE__ */ new Date());
}
function Yt(r) {
  return !Pt(r);
}
function Xe(r, t) {
  return !he(r, t);
}
function he(r, t) {
  t = t ?? new L(/* @__PURE__ */ new Date(), B(r)), t = new L(t.getTime(), B(r));
  {
    const i = ge(t, 1), c = N(r, i);
    if (x.isOpenAtNight(c, y.fromDate(i)))
      return !0;
  }
  const s = N(r, t);
  return x.isOpenAt(s, y.fromDate(t));
}
const Bt = {
  useIsUserInputBlocked: er,
  isUserInputBlocked: rt,
  useBlockUserInput: rr,
  useWrapPromise: ot,
  blockingStarted: tt,
  blockingStopped: nt,
  View: et
};
export {
  Bt as BlockUserInput,
  Wt as ScrollShadows,
  y as TimeMethods,
  me as TimeRangeMethods,
  Ot as days,
  Y as getTimeRangeOfOpeningHoursForDay,
  Yt as isClosed,
  Xe as isClosedAt,
  $t as isOfTypeDay,
  Pt as isOpen,
  he as isOpenAt,
  Lt as nextClose,
  Dt as nextOpen
};
