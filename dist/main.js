import Ye, { useSyncExternalStore as Be, useRef as Ir, useEffect as ae, useCallback as Y } from "react";
import { Box as $, CircularProgress as Dr } from "@mui/material";
import { v4 as Ar } from "uuid";
import { debounce as De } from "lodash";
import { subDays as Ve, isBefore as Fr, isEqual as Wr, isAfter as Mr, format as ne } from "date-fns";
let x = { uuids: {} }, U = [];
const k = {
  blockingStarted: (t) => {
    x.uuids[t] = !0, x = { ...x }, Ae();
  },
  blockingStopped: (t) => {
    delete x.uuids[t], x = { ...x }, Ae();
  },
  subscribe(t) {
    return U = [...U, t], () => {
      U = U.filter((a) => a !== t);
    };
  },
  getSnapshot() {
    return x;
  }
};
function Ae() {
  for (let t of U)
    t();
}
function qe() {
  const t = Be(k.subscribe, k.getSnapshot);
  return Object.keys(t.uuids).length > 0;
}
var ie = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function Lr() {
  if (Fe) return L;
  Fe = 1;
  var t = Ye, a = Symbol.for("react.element"), d = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, b = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(c, u, T) {
    var y, w = {}, P = null, B = null;
    T !== void 0 && (P = "" + T), u.key !== void 0 && (P = "" + u.key), u.ref !== void 0 && (B = u.ref);
    for (y in u) v.call(u, y) && !R.hasOwnProperty(y) && (w[y] = u[y]);
    if (c && c.defaultProps) for (y in u = c.defaultProps, u) w[y] === void 0 && (w[y] = u[y]);
    return { $$typeof: a, type: c, key: P, ref: B, props: w, _owner: b.current };
  }
  return L.Fragment = d, L.jsx = i, L.jsxs = i, L;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function Nr() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Ye, a = Symbol.for("react.element"), d = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), se = Symbol.iterator, Ge = "@@iterator";
    function Ke(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = se && e[se] || e[Ge];
      return typeof r == "function" ? r : null;
    }
    var D = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          n[o - 1] = arguments[o];
        Xe("error", e, n);
      }
    }
    function Xe(e, r, n) {
      {
        var o = D.ReactDebugCurrentFrame, f = o.getStackAddendum();
        f !== "" && (r += "%s", n = n.concat([f]));
        var p = n.map(function(l) {
          return String(l);
        });
        p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
      }
    }
    var Ze = !1, Qe = !1, er = !1, rr = !1, tr = !1, ue;
    ue = Symbol.for("react.module.reference");
    function nr(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === R || tr || e === b || e === T || e === y || rr || e === B || Ze || Qe || er || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === w || e.$$typeof === i || e.$$typeof === c || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function or(e, r, n) {
      var o = e.displayName;
      if (o)
        return o;
      var f = r.displayName || r.name || "";
      return f !== "" ? n + "(" + f + ")" : n;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case d:
          return "Portal";
        case R:
          return "Profiler";
        case b:
          return "StrictMode";
        case T:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var r = e;
            return le(r) + ".Consumer";
          case i:
            var n = e;
            return le(n._context) + ".Provider";
          case u:
            return or(e, e.render, "ForwardRef");
          case w:
            var o = e.displayName || null;
            return o !== null ? o : C(e.type) || "Memo";
          case P: {
            var f = e, p = f._payload, l = f._init;
            try {
              return C(l(p));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, W = 0, ce, fe, de, pe, ve, ge, he;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function ar() {
      {
        if (W === 0) {
          ce = console.log, fe = console.info, de = console.warn, pe = console.error, ve = console.group, ge = console.groupCollapsed, he = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
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
        W++;
      }
    }
    function ir() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: ce
            }),
            info: j({}, e, {
              value: fe
            }),
            warn: j({}, e, {
              value: de
            }),
            error: j({}, e, {
              value: pe
            }),
            group: j({}, e, {
              value: ve
            }),
            groupCollapsed: j({}, e, {
              value: ge
            }),
            groupEnd: j({}, e, {
              value: he
            })
          });
        }
        W < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = D.ReactCurrentDispatcher, K;
    function V(e, r, n) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (f) {
            var o = f.stack.trim().match(/\n( *(at )?)/);
            K = o && o[1] || "";
          }
        return `
` + K + e;
      }
    }
    var X = !1, q;
    {
      var sr = typeof WeakMap == "function" ? WeakMap : Map;
      q = new sr();
    }
    function ye(e, r) {
      if (!e || X)
        return "";
      {
        var n = q.get(e);
        if (n !== void 0)
          return n;
      }
      var o;
      X = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = G.current, G.current = null, ar();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (S) {
              o = S;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (S) {
              o = S;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            o = S;
          }
          e();
        }
      } catch (S) {
        if (S && o && typeof S.stack == "string") {
          for (var s = S.stack.split(`
`), E = o.stack.split(`
`), g = s.length - 1, h = E.length - 1; g >= 1 && h >= 0 && s[g] !== E[h]; )
            h--;
          for (; g >= 1 && h >= 0; g--, h--)
            if (s[g] !== E[h]) {
              if (g !== 1 || h !== 1)
                do
                  if (g--, h--, h < 0 || s[g] !== E[h]) {
                    var _ = `
` + s[g].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, _), _;
                  }
                while (g >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        X = !1, G.current = p, ir(), Error.prepareStackTrace = f;
      }
      var F = e ? e.displayName || e.name : "", I = F ? V(F) : "";
      return typeof e == "function" && q.set(e, I), I;
    }
    function ur(e, r, n) {
      return ye(e, !1);
    }
    function lr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function H(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ye(e, lr(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case T:
          return V("Suspense");
        case y:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return ur(e.render);
          case w:
            return H(e.type, r, n);
          case P: {
            var o = e, f = o._payload, p = o._init;
            try {
              return H(p(f), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, me = {}, Ee = D.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, n = H(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(n);
      } else
        Ee.setExtraStackFrame(null);
    }
    function cr(e, r, n, o, f) {
      {
        var p = Function.call.bind(M);
        for (var l in e)
          if (p(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var E = Error((o || "React class") + ": " + n + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              s = e[l](r, l, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              s = g;
            }
            s && !(s instanceof Error) && (z(f), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, l, typeof s), z(null)), s instanceof Error && !(s.message in me) && (me[s.message] = !0, z(f), m("Failed %s type: %s", n, s.message), z(null));
          }
      }
    }
    var fr = Array.isArray;
    function Z(e) {
      return fr(e);
    }
    function dr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function pr(e) {
      try {
        return Re(e), !1;
      } catch {
        return !0;
      }
    }
    function Re(e) {
      return "" + e;
    }
    function Se(e) {
      if (pr(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dr(e)), Re(e);
    }
    var _e = D.ReactCurrentOwner, vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, ke;
    function gr(e) {
      if (M.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function hr(e) {
      if (M.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function br(e, r) {
      typeof e.ref == "string" && _e.current;
    }
    function yr(e, r) {
      {
        var n = function() {
          we || (we = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function mr(e, r) {
      {
        var n = function() {
          ke || (ke = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var Er = function(e, r, n, o, f, p, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: l,
        // Record the component responsible for creating this element.
        _owner: p
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function Rr(e, r, n, o, f) {
      {
        var p, l = {}, s = null, E = null;
        n !== void 0 && (Se(n), s = "" + n), hr(r) && (Se(r.key), s = "" + r.key), gr(r) && (E = r.ref, br(r, f));
        for (p in r)
          M.call(r, p) && !vr.hasOwnProperty(p) && (l[p] = r[p]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (p in g)
            l[p] === void 0 && (l[p] = g[p]);
        }
        if (s || E) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && yr(l, h), E && mr(l, h);
        }
        return Er(e, s, E, f, o, _e.current, l);
      }
    }
    var Q = D.ReactCurrentOwner, Te = D.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, n = H(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(n);
      } else
        Te.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function Ce() {
      {
        if (Q.current) {
          var e = C(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Sr(e) {
      return "";
    }
    var xe = {};
    function _r(e) {
      {
        var r = Ce();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = _r(r);
        if (xe[n])
          return;
        xe[n] = !0;
        var o = "";
        e && e._owner && e._owner !== Q.current && (o = " It was passed a child from " + C(e._owner.type) + "."), A(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, o), A(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            re(o) && Oe(o, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = Ke(e);
          if (typeof f == "function" && f !== e.entries)
            for (var p = f.call(e), l; !(l = p.next()).done; )
              re(l.value) && Oe(l.value, r);
        }
      }
    }
    function wr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          n = r.propTypes;
        else
          return;
        if (n) {
          var o = C(r);
          cr(n, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var f = C(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var o = r[n];
          if (o !== "children" && o !== "key") {
            A(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var je = {};
    function Ie(e, r, n, o, f, p) {
      {
        var l = nr(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = Sr();
          E ? s += E : s += Ce();
          var g;
          e === null ? g = "null" : Z(e) ? g = "array" : e !== void 0 && e.$$typeof === a ? (g = "<" + (C(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, s);
        }
        var h = Rr(e, r, n, f, p);
        if (h == null)
          return h;
        if (l) {
          var _ = r.children;
          if (_ !== void 0)
            if (o)
              if (Z(_)) {
                for (var F = 0; F < _.length; F++)
                  Pe(_[F], e);
                Object.freeze && Object.freeze(_);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(_, e);
        }
        if (M.call(r, "key")) {
          var I = C(e), S = Object.keys(r).filter(function(jr) {
            return jr !== "key";
          }), te = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[I + te]) {
            var Pr = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, te, I, Pr, I), je[I + te] = !0;
          }
        }
        return e === v ? kr(h) : wr(h), h;
      }
    }
    function Tr(e, r, n) {
      return Ie(e, r, n, !0);
    }
    function Cr(e, r, n) {
      return Ie(e, r, n, !1);
    }
    var xr = Cr, Or = Tr;
    N.Fragment = v, N.jsx = xr, N.jsxs = Or;
  }()), N;
}
process.env.NODE_ENV === "production" ? ie.exports = Lr() : ie.exports = Nr();
var O = ie.exports;
function $r() {
  return qe() ? O.jsx($, { sx: {
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
  }, children: O.jsx(Dr, { color: "primary", thickness: 6, size: 50 }) }) : null;
}
function Ur() {
  const t = x.uuids;
  return Object.keys(t).length > 0;
}
function Yr(t) {
  k.blockingStarted(t);
}
function Br(t) {
  k.blockingStopped(t);
}
function He(t) {
  const a = Ir(""), v = Be(k.subscribe, k.getSnapshot).uuids[a.current];
  return ae(() => (a.current = Ar(), () => {
    k.blockingStopped(a.current);
  }), []), ae(() => {
    !v && t ? k.blockingStarted(a.current) : v && t === !1 && k.blockingStopped(a.current);
  }, [t, v]), {
    blockingStarted: Y(() => {
      k.blockingStarted(a.current);
    }, []),
    blockingStopped: Y(() => {
      k.blockingStopped(a.current);
    }, [])
  };
}
function Vr(t) {
  const { blockingStarted: a, blockingStopped: d } = He();
  return async (...v) => {
    a();
    const b = await t(...v);
    return d(), b;
  };
}
const ze = {
  zIndex: 100,
  position: "sticky",
  pointerEvents: "none"
}, Me = {
  ...ze,
  left: 0,
  minWidth: "100%",
  height: "40px",
  minHeight: "40px",
  marginTop: "-40px"
}, Le = {
  ...ze,
  top: 0,
  minHeight: "100%",
  width: "20px",
  minWidth: "20px",
  marginLeft: "-20px"
}, qr = {
  top: 0,
  backgroundImage: "radial-gradient(farthest-side at 50% 0%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  opacity: 0
}, Hr = {
  bottom: 0,
  backgroundImage: "radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)"
}, zr = {
  left: 0,
  backgroundImage: "radial-gradient(farthest-side at 0% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  opacity: 0
}, Jr = {
  right: 0,
  backgroundImage: "radial-gradient(farthest-side at 100% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)"
};
function tt({ children: t, containerRef: a, direction: d = "column", styleTopShadow: v = {}, styleBottomShadow: b = {}, threshold: R = 40 }) {
  return Gr({ direction: d, container: a, threshold: R }), O.jsxs(O.Fragment, { children: [d == "column" ? O.jsx($, { className: "shadow--top", sx: { ...Me, ...qr, ...v } }) : null, d == "row" ? O.jsx($, { className: "shadow--left", sx: { ...Le, ...zr, ...v } }) : null, t, d == "column" ? O.jsx($, { className: "shadow--bottom", sx: { ...Me, ...Hr, ...b } }) : null, d == "row" ? O.jsx($, { className: "shadow--right", sx: { ...Le, ...Jr, ...b } }) : null] });
}
const J = 150, oe = J;
function Gr({ container: t, direction: a, threshold: d }) {
  const v = Y(De(() => {
    if (t.current) {
      if (a == "column") {
        const i = t.current.querySelector(".shadow--top"), c = t.current.querySelector(".shadow--bottom");
        if (i && c) {
          const u = t.current.scrollHeight - t.current.offsetHeight;
          u < d ? (i.style.opacity = String(0), c.style.opacity = String(0)) : (i.style.opacity = String(Math.min(t.current.scrollTop / J, 1)), c.style.opacity = String(Math.min((u - t.current.scrollTop) / J, 1)));
        }
      } else if (a == "row") {
        const i = t.current.querySelector(".shadow--left"), c = t.current.querySelector(".shadow--right");
        if (i && c) {
          const u = t.current.scrollWidth - t.current.offsetWidth;
          u < d ? (i.style.opacity = String(0), c.style.opacity = String(0)) : (i.style.opacity = String(Math.min(t.current.scrollLeft / oe, 1)), c.style.opacity = String(Math.min((u - t.current.scrollLeft) / oe, 1)));
        }
      }
    }
  }), [t.current]), b = Y((i) => {
    if (i) {
      if (a == "column") {
        const c = i.scrollHeight - i.offsetHeight, u = i.querySelector(".shadow--bottom");
        u && (c < d ? u.style.opacity = "0" : u.style.opacity = String(Math.min((c - i.scrollTop) / J, 1)));
      } else if (a == "row") {
        const c = i.scrollWidth - i.offsetWidth, u = i.querySelector(".shadow--right");
        u && (c < d ? u.style.opacity = "0" : u.style.opacity = String(Math.min((c - i.scrollLeft) / oe, 1)));
      }
    }
  }, []), R = Y(De(() => {
    const i = t.current;
    i && b(i);
  }), [t.current]);
  return ae(() => {
    const i = t.current;
    let c = null;
    return i && (b(i), i.addEventListener("scroll", v), i.addEventListener("resize", R), c = new MutationObserver(R), c.observe(i, { subtree: !0, childList: !0 })), () => {
      i == null || i.removeEventListener("resize", R), i == null || i.removeEventListener("scroll", v), c == null || c.disconnect();
    };
  }, [t, R, v]), t;
}
function Kr(t) {
  return Je(t, /* @__PURE__ */ new Date());
}
function nt(t) {
  return !Kr(t);
}
function ot(t, a) {
  return !Je(t, a);
}
function Je(t, a) {
  const d = Ve(a, 1), v = Ue(t, d);
  if (Ne(v, a))
    return !0;
  const b = Ue(t, a);
  return Ne(b, a);
}
function Ne(t, a) {
  return (t == null ? void 0 : t.some((d) => typeof d == "string" ? $e(a, d) : $e(a, d[0]))) ?? !1;
}
function $e(t, a) {
  const [d, v] = a.split("-"), [b, R] = d.split(":"), [i, c] = v.split(":");
  let u = new Date(t.getTime());
  u.setUTCHours(Number(b), Number(R), 0, 0);
  let T = new Date(t.getTime());
  T.setUTCHours(Number(i), Number(c), 0, 0);
  const y = 60 * Number(i) + Number(c), w = 60 * Number(b) + Number(R);
  return y < w && (u = Ve(u, 1)), (Fr(u, t) || Wr(u, t)) && Mr(T, t);
}
function Ue(t, a) {
  var d, v;
  return ((d = t.exceptions) == null ? void 0 : d[ne(a, "yyyy-MM-dd")]) ?? ((v = t.exceptions) == null ? void 0 : v[ne(a, "MM-dd")]) ?? t[ne(a, "EEEE").toLowerCase()] ?? null;
}
const at = {
  useIsUserInputBlocked: qe,
  isUserInputBlocked: Ur,
  useBlockUserInput: He,
  useWrapPromise: Vr,
  blockingStarted: Yr,
  blockingStopped: Br,
  View: $r
};
export {
  at as BlockUserInput,
  tt as ScrollShadows,
  nt as isClosed,
  ot as isClosedAt,
  Kr as isOpen,
  Je as isOpenAt
};
