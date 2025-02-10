import Ze, { useSyncExternalStore as Qe, useRef as qr, useEffect as de, useCallback as G } from "react";
import { Box as z, CircularProgress as zr } from "@mui/material";
import { v4 as Jr } from "uuid";
import { debounce as He } from "lodash";
import { format as j, addDays as pe, subDays as me, isBefore as Gr, isEqual as Kr, isAfter as Xr } from "date-fns";
import { TZDate as L } from "@date-fns/tz";
let D = { uuids: {} }, J = [];
const x = {
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
  const r = Qe(x.subscribe, x.getSnapshot);
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
var qe;
function Zr() {
  if (qe) return V;
  qe = 1;
  var r = Ze, t = Symbol.for("react.element"), i = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(p, c, R) {
    var E, O = {}, F = null, X = null;
    R !== void 0 && (F = "" + R), c.key !== void 0 && (F = "" + c.key), c.ref !== void 0 && (X = c.ref);
    for (E in c) a.call(c, E) && !v.hasOwnProperty(E) && (O[E] = c[E]);
    if (p && p.defaultProps) for (E in c = p.defaultProps, c) O[E] === void 0 && (O[E] = c[E]);
    return { $$typeof: t, type: p, key: F, ref: X, props: O, _owner: s.current };
  }
  return V.Fragment = i, V.jsx = u, V.jsxs = u, V;
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
    var r = Ze, t = Symbol.for("react.element"), i = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), p = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), X = Symbol.for("react.offscreen"), ye = Symbol.iterator, lr = "@@iterator";
    function cr(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = ye && e[ye] || e[lr];
      return typeof n == "function" ? n : null;
    }
    var M = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(e) {
      {
        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
          o[l - 1] = arguments[l];
        fr("error", e, o);
      }
    }
    function fr(e, n, o) {
      {
        var l = M.ReactDebugCurrentFrame, g = l.getStackAddendum();
        g !== "" && (n += "%s", o = o.concat([g]));
        var m = o.map(function(d) {
          return String(d);
        });
        m.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var dr = !1, pr = !1, gr = !1, mr = !1, vr = !1, be;
    be = Symbol.for("react.module.reference");
    function hr(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === v || vr || e === s || e === R || e === E || mr || e === X || dr || pr || gr || typeof e == "object" && e !== null && (e.$$typeof === F || e.$$typeof === O || e.$$typeof === u || e.$$typeof === p || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === be || e.getModuleId !== void 0));
    }
    function yr(e, n, o) {
      var l = e.displayName;
      if (l)
        return l;
      var g = n.displayName || n.name || "";
      return g !== "" ? o + "(" + g + ")" : o;
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
        case a:
          return "Fragment";
        case i:
          return "Portal";
        case v:
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
          case u:
            var o = e;
            return Ee(o._context) + ".Provider";
          case c:
            return yr(e, e.render, "ForwardRef");
          case O:
            var l = e.displayName || null;
            return l !== null ? l : k(e.type) || "Memo";
          case F: {
            var g = e, m = g._payload, d = g._init;
            try {
              return k(d(m));
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
          } catch (g) {
            var l = g.stack.trim().match(/\n( *(at )?)/);
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
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = ne.current, ne.current = null, br();
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
`), T = l.stack.split(`
`), h = f.length - 1, y = T.length - 1; h >= 1 && y >= 0 && f[h] !== T[y]; )
            y--;
          for (; h >= 1 && y >= 0; h--, y--)
            if (f[h] !== T[y]) {
              if (h !== 1 || y !== 1)
                do
                  if (h--, y--, y < 0 || f[h] !== T[y]) {
                    var _ = `
` + f[h].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && Q.set(e, _), _;
                  }
                while (h >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        ie = !1, ne.current = m, Er(), Error.prepareStackTrace = g;
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
        case R:
          return Z("Suspense");
        case E:
          return Z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Tr(e.render);
          case O:
            return ee(e.type, n, o);
          case F: {
            var l = e, g = l._payload, m = l._init;
            try {
              return ee(m(g), n, o);
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
    function Rr(e, n, o, l, g) {
      {
        var m = Function.call.bind(H);
        for (var d in e)
          if (m(e, d)) {
            var f = void 0;
            try {
              if (typeof e[d] != "function") {
                var T = Error((l || "React class") + ": " + o + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              f = e[d](n, d, l, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              f = h;
            }
            f && !(f instanceof Error) && (re(g), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", o, d, typeof f), re(null)), f instanceof Error && !(f.message in De) && (De[f.message] = !0, re(g), S("Failed %s type: %s", o, f.message), re(null));
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
    var Ar = function(e, n, o, l, g, m, d) {
      var f = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: o,
        props: d,
        // Record the component responsible for creating this element.
        _owner: m
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
        value: g
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function Ir(e, n, o, l, g) {
      {
        var m, d = {}, f = null, T = null;
        o !== void 0 && (Fe(o), f = "" + o), Dr(n) && (Fe(n.key), f = "" + n.key), kr(n) && (T = n.ref, Pr(n, g));
        for (m in n)
          H.call(n, m) && !Cr.hasOwnProperty(m) && (d[m] = n[m]);
        if (e && e.defaultProps) {
          var h = e.defaultProps;
          for (m in h)
            d[m] === void 0 && (d[m] = h[m]);
        }
        if (f || T) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          f && jr(d, y), T && Fr(d, y);
        }
        return Ar(e, f, T, g, l, Ae.current, d);
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
        var l = "";
        e && e._owner && e._owner !== ue.current && (l = " It was passed a child from " + k(e._owner.type) + "."), W(e), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, l), W(null);
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
          var g = cr(e);
          if (typeof g == "function" && g !== e.entries)
            for (var m = g.call(e), d; !(d = m.next()).done; )
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
        else if (typeof n == "object" && (n.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === O))
          o = n.propTypes;
        else
          return;
        if (o) {
          var l = k(n);
          Rr(o, e.props, "prop", l, e);
        } else if (n.PropTypes !== void 0 && !ae) {
          ae = !0;
          var g = k(n);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $r(e) {
      {
        for (var n = Object.keys(e.props), o = 0; o < n.length; o++) {
          var l = n[o];
          if (l !== "children" && l !== "key") {
            W(e), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), S("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    var Be = {};
    function Ue(e, n, o, l, g, m) {
      {
        var d = hr(e);
        if (!d) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = Nr();
          T ? f += T : f += We();
          var h;
          e === null ? h = "null" : se(e) ? h = "array" : e !== void 0 && e.$$typeof === t ? (h = "<" + (k(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, f);
        }
        var y = Ir(e, n, o, g, m);
        if (y == null)
          return y;
        if (d) {
          var _ = n.children;
          if (_ !== void 0)
            if (l)
              if (se(_)) {
                for (var $ = 0; $ < _.length; $++)
                  Ye(_[$], e);
                Object.freeze && Object.freeze(_);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye(_, e);
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
        return e === a ? $r(y) : Wr(y), y;
      }
    }
    function Lr(e, n, o) {
      return Ue(e, n, o, !0);
    }
    function Yr(e, n, o) {
      return Ue(e, n, o, !1);
    }
    var Br = Yr, Ur = Lr;
    q.Fragment = a, q.jsx = Br, q.jsxs = Ur;
  }()), q;
}
process.env.NODE_ENV === "production" ? ge.exports = Zr() : ge.exports = Qr();
var P = ge.exports;
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
  x.blockingStarted(r);
}
function nt(r) {
  x.blockingStopped(r);
}
function rr(r) {
  const t = qr(""), a = Qe(x.subscribe, x.getSnapshot).uuids[t.current];
  return de(() => (t.current = Jr(), () => {
    x.blockingStopped(t.current);
  }), []), de(() => {
    !a && r ? x.blockingStarted(t.current) : a && r === !1 && x.blockingStopped(t.current);
  }, [r, a]), {
    blockingStarted: G(() => {
      x.blockingStarted(t.current);
    }, []),
    blockingStopped: G(() => {
      x.blockingStopped(t.current);
    }, [])
  };
}
function ot(r) {
  const { blockingStarted: t, blockingStopped: i } = rr();
  return async (...a) => {
    t();
    const s = await r(...a);
    return i(), s;
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
function Wt({ children: r, containerRef: t, direction: i = "column", styleTopShadow: a = {}, styleBottomShadow: s = {}, threshold: v = 40 }) {
  return lt({ direction: i, container: t, threshold: v }), P.jsxs(P.Fragment, { children: [i == "column" ? P.jsx(z, { className: "shadow--top", sx: { ...Je, ...it, ...a } }) : null, i == "row" ? P.jsx(z, { className: "shadow--left", sx: { ...Ge, ...ut, ...a } }) : null, r, i == "column" ? P.jsx(z, { className: "shadow--bottom", sx: { ...Je, ...st, ...s } }) : null, i == "row" ? P.jsx(z, { className: "shadow--right", sx: { ...Ge, ...at, ...s } }) : null] });
}
const te = 150, fe = te;
function lt({ container: r, direction: t, threshold: i }) {
  const a = G(He(() => {
    if (r.current) {
      if (t == "column") {
        const u = r.current.querySelector(".shadow--top"), p = r.current.querySelector(".shadow--bottom");
        if (u && p) {
          const c = r.current.scrollHeight - r.current.offsetHeight;
          c < i ? (u.style.opacity = String(0), p.style.opacity = String(0)) : (u.style.opacity = String(Math.min(r.current.scrollTop / te, 1)), p.style.opacity = String(Math.min((c - r.current.scrollTop) / te, 1)));
        }
      } else if (t == "row") {
        const u = r.current.querySelector(".shadow--left"), p = r.current.querySelector(".shadow--right");
        if (u && p) {
          const c = r.current.scrollWidth - r.current.offsetWidth;
          c < i ? (u.style.opacity = String(0), p.style.opacity = String(0)) : (u.style.opacity = String(Math.min(r.current.scrollLeft / fe, 1)), p.style.opacity = String(Math.min((c - r.current.scrollLeft) / fe, 1)));
        }
      }
    }
  }), [r.current]), s = G((u) => {
    if (u) {
      if (t == "column") {
        const p = u.scrollHeight - u.offsetHeight, c = u.querySelector(".shadow--bottom");
        c && (p < i ? c.style.opacity = "0" : c.style.opacity = String(Math.min((p - u.scrollTop) / te, 1)));
      } else if (t == "row") {
        const p = u.scrollWidth - u.offsetWidth, c = u.querySelector(".shadow--right");
        c && (p < i ? c.style.opacity = "0" : c.style.opacity = String(Math.min((p - u.scrollLeft) / fe, 1)));
      }
    }
  }, []), v = G(He(() => {
    const u = r.current;
    u && s(u);
  }), [r.current]);
  return de(() => {
    const u = r.current;
    let p = null;
    return u && (s(u), u.addEventListener("scroll", a), u.addEventListener("resize", v), p = new MutationObserver(v), p.observe(u, { subtree: !0, childList: !0 })), () => {
      u == null || u.removeEventListener("resize", v), u == null || u.removeEventListener("scroll", a), p == null || p.disconnect();
    };
  }, [r, v, a]), r;
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
function gt(r) {
  return {
    hours: Number(j(r, "H")),
    minutes: Number(j(r, "m"))
  };
}
const b = { isSame: nr, isBefore: ft, isAfter: or, isSameOrAfter: dt, timeToNumber: K, fromDate: gt, timeToString: pt };
function mt(r) {
  return b.isAfter(r.start, r.end);
}
function ir(r) {
  return mt(r);
}
function sr(r, t) {
  return b.isSameOrAfter(t, r.start) && (ir(r) || b.isBefore(t, r.end));
}
function vt(r, t) {
  return ir(r) && sr({ ...r, start: { hours: 0, minutes: 0 } }, t);
}
function ht(r) {
  return `${b.timeToString(r.start)}-${b.timeToString(r.end)}`;
}
function yt(r, t) {
  return b.isSame(r.start, t.start) && b.isSame(r.end, t.end);
}
const ve = { containsTime: sr, containsNightTime: vt, timeRangeToString: ht, timeRangesAreEqual: yt };
function ur(r, t) {
  return b.isBefore(r, t.start) ? t : null;
}
function bt(r, t) {
  var i;
  return ((i = ur(r, t)) == null ? void 0 : i.start) ?? null;
}
function Et(r, t) {
  var i;
  return ((i = ur(r, t)) == null ? void 0 : i.end) ?? null;
}
function St(r, t) {
  return ve.containsTime(t, r) ? t.end : null;
}
function Tt(r, t) {
  for (const i of r)
    if (ve.containsNightTime(Y(i), t))
      return !0;
  return !1;
}
function ar(r, t) {
  for (const i of r)
    if (ve.containsTime(Y(i), t))
      return !0;
  return !1;
}
function wt(r) {
  return ar(r, { hours: 23, minutes: 59 });
}
function Rt(r, t) {
  for (const i of r) {
    const a = Y(i), s = bt(b.fromDate(t), a);
    if (s)
      return s;
  }
  return null;
}
function _t(r, t) {
  for (const i of r) {
    const a = Y(i), s = St(b.fromDate(t), a);
    if (s)
      return s;
  }
  for (const i of r) {
    const a = Y(i), s = Et(b.fromDate(t), a);
    if (s)
      return s;
  }
  return null;
}
const C = {
  isOpenAtNight: Tt,
  nextClose: _t,
  nextOpen: Rt,
  isOpenAtTheEndOfTheDay: wt,
  isOpenAt: ar
}, Ot = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], $t = (r) => Ot.includes(r);
function xt(r, t) {
  const [i, a] = t.split("-"), [s, v] = i.split(":"), [u, p] = a.split(":");
  let c = new Date(r.getTime());
  c.setHours(Number(s), Number(v), 0, 0);
  let R = new Date(r.getTime());
  R.setHours(Number(u), Number(p), 0, 0);
  const E = 60 * Number(u) + Number(p), O = 60 * Number(s) + Number(v);
  return E < O && (c = me(c, 1)), (Gr(c, r) || Kr(c, r)) && Xr(R, r);
}
function N(r, t) {
  var i, a;
  return ((i = r.exceptions) == null ? void 0 : i[j(t, "yyyy-MM-dd")]) ?? ((a = r.exceptions) == null ? void 0 : a[j(t, "MM-dd")]) ?? r[j(t, "EEEE").toLowerCase()] ?? [];
}
function Ct(r, t) {
  var a, s, v;
  return ((v = (((a = r.exceptions) == null ? void 0 : a[j(t, "yyyy-MM-dd")]) ?? ((s = r.exceptions) == null ? void 0 : s[j(t, "MM-dd")]) ?? r[j(t, "EEEE").toLowerCase()] ?? null).reverse()) == null ? void 0 : v.find((u) => xt(t, typeof u == "string" ? u : u[0]))) ?? null;
}
function B(r) {
  return r.timezone ?? Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function kt(r, t) {
  const i = Ct(r, t);
  return i ? Y(i) : null;
}
function Dt(r, t = null, i = null) {
  t = t ?? new L(/* @__PURE__ */ new Date(), B(r)), t = new L(t.getTime(), B(r));
  let a = N(r, t), s = C.nextOpen(a, t), v = 366;
  for (; !s || s.hours >= 24; ) {
    if (--v < 0)
      return null;
    if (t = pe(t, 1), t == null || t.setHours(0, 0, 0, 0), he(r, t) && !C.isOpenAtTheEndOfTheDay(a))
      return t;
    if (i && (t == null ? void 0 : t.getTime()) > i.getTime())
      return i;
    a = N(r, t), s = C.nextOpen(a, t);
  }
  return s ? (t == null || t.setHours(s.hours, s.minutes, 0, 0), t) : null;
}
function Lt(r, t = null, i = null) {
  var p;
  t = t ?? new L(/* @__PURE__ */ new Date(), B(r)), t = new L(t.getTime(), B(r));
  const a = (p = kt(r, t)) == null ? void 0 : p.end;
  if (a && a.hours < 24)
    return t.setHours(a.hours, a.minutes, 0, 0), t;
  let s = null;
  {
    const c = me(t, 1), R = N(r, c);
    C.isOpenAtNight(R, b.fromDate(c)) && (s = C.nextClose(R, t));
  }
  let v = N(r, t);
  s || (s = C.nextClose(v, t), s && s.hours < 24 && (b.timeToNumber(s) < b.timeToNumber(b.fromDate(t)) || Xe(r, t) && b.timeToNumber(b.fromDate(Dt(r, t) ?? /* @__PURE__ */ new Date("2100-00-00 00:00:00"))) > b.timeToNumber(s)) && (t = pe(t, 1)));
  let u = 366;
  for (; !s || s.hours >= 24; ) {
    if (--u < 0)
      return null;
    if (t = pe(t, 1), t == null || t.setHours(0, 0, 0, 0), Xe(r, t) && C.isOpenAtTheEndOfTheDay(v))
      return t;
    if (i && (t == null ? void 0 : t.getTime()) > i.getTime())
      return i;
    v = N(r, t), s = C.nextClose(v, t);
  }
  return s ? (t == null || t.setHours(s.hours, s.minutes, 0, 0), t) : null;
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
    const a = me(t, 1), s = N(r, a);
    if (C.isOpenAtNight(s, b.fromDate(a)))
      return !0;
  }
  const i = N(r, t);
  return C.isOpenAt(i, b.fromDate(t));
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
  b as TimeMethods,
  ve as TimeRangeMethods,
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
