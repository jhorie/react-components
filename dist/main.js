import Ye, { useSyncExternalStore as Me, useRef as xr, useEffect as oe, useCallback as J } from "react";
import { Box as U, CircularProgress as Cr } from "@mui/material";
import { v4 as Or } from "uuid";
import { debounce as Ie } from "lodash";
let x = { uuids: {} }, B = [];
const w = {
  blockingStarted: (n) => {
    x.uuids[n] = !0, x = { ...x }, Fe();
  },
  blockingStopped: (n) => {
    delete x.uuids[n], x = { ...x }, Fe();
  },
  subscribe(n) {
    return B = [...B, n], () => {
      B = B.filter((c) => c !== n);
    };
  },
  getSnapshot() {
    return x;
  }
};
function Fe() {
  for (let n of B)
    n();
}
function Ue() {
  const n = Me(w.subscribe, w.getSnapshot);
  return Object.keys(n.uuids).length > 0;
}
var ae = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function jr() {
  if (We) return Y;
  We = 1;
  var n = Ye, c = Symbol.for("react.element"), g = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(S, b, I) {
    var R, T = {}, O = null, H = null;
    I !== void 0 && (O = "" + I), b.key !== void 0 && (O = "" + b.key), b.ref !== void 0 && (H = b.ref);
    for (R in b) v.call(b, R) && !f.hasOwnProperty(R) && (T[R] = b[R]);
    if (S && S.defaultProps) for (R in b = S.defaultProps, b) T[R] === void 0 && (T[R] = b[R]);
    return { $$typeof: c, type: S, key: O, ref: H, props: T, _owner: a.current };
  }
  return Y.Fragment = g, Y.jsx = E, Y.jsxs = E, Y;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Pr() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Ye, c = Symbol.for("react.element"), g = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), S = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), se = Symbol.iterator, Ve = "@@iterator";
    function Ne(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = se && e[se] || e[Ve];
      return typeof r == "function" ? r : null;
    }
    var F = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        qe("error", e, t);
      }
    }
    function qe(e, r, t) {
      {
        var o = F.ReactDebugCurrentFrame, u = o.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var l = t.map(function(s) {
          return String(s);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var ze = !1, Je = !1, Ge = !1, Ke = !1, Xe = !1, ue;
    ue = Symbol.for("react.module.reference");
    function Ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === f || Xe || e === a || e === I || e === R || Ke || e === H || ze || Je || Ge || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === T || e.$$typeof === E || e.$$typeof === S || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function Qe(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case g:
          return "Portal";
        case f:
          return "Profiler";
        case a:
          return "StrictMode";
        case I:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var r = e;
            return le(r) + ".Consumer";
          case E:
            var t = e;
            return le(t._context) + ".Provider";
          case b:
            return Qe(e, e.render, "ForwardRef");
          case T:
            var o = e.displayName || null;
            return o !== null ? o : k(e.type) || "Memo";
          case O: {
            var u = e, l = u._payload, s = u._init;
            try {
              return k(s(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, A = 0, ce, fe, de, ve, pe, ge, he;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function er() {
      {
        if (A === 0) {
          ce = console.log, fe = console.info, de = console.warn, ve = console.error, pe = console.group, ge = console.groupCollapsed, he = console.groupEnd;
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
        A++;
      }
    }
    function rr() {
      {
        if (A--, A === 0) {
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
              value: ve
            }),
            group: j({}, e, {
              value: pe
            }),
            groupCollapsed: j({}, e, {
              value: ge
            }),
            groupEnd: j({}, e, {
              value: he
            })
          });
        }
        A < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = F.ReactCurrentDispatcher, K;
    function V(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (u) {
            var o = u.stack.trim().match(/\n( *(at )?)/);
            K = o && o[1] || "";
          }
        return `
` + K + e;
      }
    }
    var X = !1, N;
    {
      var tr = typeof WeakMap == "function" ? WeakMap : Map;
      N = new tr();
    }
    function ye(e, r) {
      if (!e || X)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      X = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = G.current, G.current = null, er();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (m) {
              o = m;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (m) {
              o = m;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            o = m;
          }
          e();
        }
      } catch (m) {
        if (m && o && typeof m.stack == "string") {
          for (var i = m.stack.split(`
`), y = o.stack.split(`
`), d = i.length - 1, p = y.length - 1; d >= 1 && p >= 0 && i[d] !== y[p]; )
            p--;
          for (; d >= 1 && p >= 0; d--, p--)
            if (i[d] !== y[p]) {
              if (d !== 1 || p !== 1)
                do
                  if (d--, p--, p < 0 || i[d] !== y[p]) {
                    var _ = `
` + i[d].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, _), _;
                  }
                while (d >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        X = !1, G.current = l, rr(), Error.prepareStackTrace = u;
      }
      var D = e ? e.displayName || e.name : "", P = D ? V(D) : "";
      return typeof e == "function" && N.set(e, P), P;
    }
    function nr(e, r, t) {
      return ye(e, !1);
    }
    function or(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function q(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ye(e, or(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case I:
          return V("Suspense");
        case R:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return nr(e.render);
          case T:
            return q(e.type, r, t);
          case O: {
            var o = e, u = o._payload, l = o._init;
            try {
              return q(l(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, me = {}, Ee = F.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    function ar(e, r, t, o, u) {
      {
        var l = Function.call.bind(L);
        for (var s in e)
          if (l(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var y = Error((o || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              i = e[s](r, s, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              i = d;
            }
            i && !(i instanceof Error) && (z(u), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, s, typeof i), z(null)), i instanceof Error && !(i.message in me) && (me[i.message] = !0, z(u), h("Failed %s type: %s", t, i.message), z(null));
          }
      }
    }
    var ir = Array.isArray;
    function Z(e) {
      return ir(e);
    }
    function sr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ur(e) {
      try {
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function Re(e) {
      if (ur(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(e)), Se(e);
    }
    var $ = F.ReactCurrentOwner, lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, we, Q;
    Q = {};
    function cr(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function fr(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function dr(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = k($.current.type);
        Q[t] || (h('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k($.current.type), e.ref), Q[t] = !0);
      }
    }
    function vr(e, r) {
      {
        var t = function() {
          _e || (_e = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function pr(e, r) {
      {
        var t = function() {
          we || (we = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var gr = function(e, r, t, o, u, l, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function hr(e, r, t, o, u) {
      {
        var l, s = {}, i = null, y = null;
        t !== void 0 && (Re(t), i = "" + t), fr(r) && (Re(r.key), i = "" + r.key), cr(r) && (y = r.ref, dr(r, u));
        for (l in r)
          L.call(r, l) && !lr.hasOwnProperty(l) && (s[l] = r[l]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (l in d)
            s[l] === void 0 && (s[l] = d[l]);
        }
        if (i || y) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && vr(s, p), y && pr(s, p);
        }
        return gr(e, i, y, u, o, $.current, s);
      }
    }
    var ee = F.ReactCurrentOwner, ke = F.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, t = q(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(t);
      } else
        ke.setExtraStackFrame(null);
    }
    var re;
    re = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function Te() {
      {
        if (ee.current) {
          var e = k(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function br(e) {
      return "";
    }
    var xe = {};
    function yr(e) {
      {
        var r = Te();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ce(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = yr(r);
        if (xe[t])
          return;
        xe[t] = !0;
        var o = "";
        e && e._owner && e._owner !== ee.current && (o = " It was passed a child from " + k(e._owner.type) + "."), W(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), W(null);
      }
    }
    function Oe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            te(o) && Ce(o, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = Ne(e);
          if (typeof u == "function" && u !== e.entries)
            for (var l = u.call(e), s; !(s = l.next()).done; )
              te(s.value) && Ce(s.value, r);
        }
      }
    }
    function mr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = k(r);
          ar(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !re) {
          re = !0;
          var u = k(r);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Er(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            W(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    var je = {};
    function Pe(e, r, t, o, u, l) {
      {
        var s = Ze(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = br();
          y ? i += y : i += Te();
          var d;
          e === null ? d = "null" : Z(e) ? d = "array" : e !== void 0 && e.$$typeof === c ? (d = "<" + (k(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, i);
        }
        var p = hr(e, r, t, u, l);
        if (p == null)
          return p;
        if (s) {
          var _ = r.children;
          if (_ !== void 0)
            if (o)
              if (Z(_)) {
                for (var D = 0; D < _.length; D++)
                  Oe(_[D], e);
                Object.freeze && Object.freeze(_);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(_, e);
        }
        if (L.call(r, "key")) {
          var P = k(e), m = Object.keys(r).filter(function(Tr) {
            return Tr !== "key";
          }), ne = m.length > 0 ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[P + ne]) {
            var kr = m.length > 0 ? "{" + m.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ne, P, kr, P), je[P + ne] = !0;
          }
        }
        return e === v ? Er(p) : mr(p), p;
      }
    }
    function Sr(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function Rr(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var _r = Rr, wr = Sr;
    M.Fragment = v, M.jsx = _r, M.jsxs = wr;
  }()), M;
}
process.env.NODE_ENV === "production" ? ae.exports = jr() : ae.exports = Pr();
var C = ae.exports;
function Ir() {
  return Ue() ? C.jsx(U, { sx: {
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
  }, children: C.jsx(Cr, { color: "primary", thickness: 6, size: 50 }) }) : null;
}
function Fr() {
  const n = x.uuids;
  return Object.keys(n).length > 0;
}
function Wr(n) {
  w.blockingStarted(n);
}
function Dr(n) {
  w.blockingStopped(n);
}
function Be(n) {
  const c = xr(""), v = Me(w.subscribe, w.getSnapshot).uuids[c.current];
  return oe(() => (c.current = Or(), () => {
    w.blockingStopped(c.current);
  }), []), oe(() => {
    !v && n ? w.blockingStarted(c.current) : v && n === !1 && w.blockingStopped(c.current);
  }, [n, v]), {
    blockingStarted: J(() => {
      w.blockingStarted(c.current);
    }, []),
    blockingStopped: J(() => {
      w.blockingStopped(c.current);
    }, [])
  };
}
function Ar(n) {
  const { blockingStarted: c, blockingStopped: g } = Be();
  return async (...v) => {
    c();
    const a = await n(...v);
    return g(), a;
  };
}
const He = {
  zIndex: 100,
  position: "sticky",
  pointerEvents: "none"
}, Ae = {
  ...He,
  left: 0,
  width: "100%",
  height: "40px",
  minHeight: "40px",
  marginTop: "-40px"
}, Le = {
  ...He,
  top: 0,
  height: "100%",
  width: "20px",
  minWidth: "20px",
  marginLeft: "-20px"
}, Lr = {
  top: 0,
  backgroundImage: "radial-gradient(farthest-side at 50% 0%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  opacity: 0
}, $r = {
  bottom: 0,
  backgroundImage: "radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)"
}, Yr = {
  left: 0,
  backgroundImage: "radial-gradient(farthest-side at 0% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  opacity: 0
}, Mr = {
  right: 0,
  backgroundImage: "radial-gradient(farthest-side at 100% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)"
};
function qr({ children: n, containerRef: c, direction: g = "column", styleTopShadow: v = {}, styleBottomShadow: a = {} }) {
  return Ur({ direction: g, container: c }), C.jsxs(C.Fragment, { children: [g == "column" ? C.jsx(U, { className: "shadow--top", sx: { ...Ae, ...Lr, ...v } }) : null, g == "row" ? C.jsx(U, { className: "shadow--left", sx: { ...Le, ...Yr, ...v } }) : null, n, g == "column" ? C.jsx(U, { className: "shadow--bottom", sx: { ...Ae, ...$r, ...a } }) : null, g == "row" ? C.jsx(U, { className: "shadow--right", sx: { ...Le, ...Mr, ...a } }) : null] });
}
const ie = 150, $e = ie;
function Ur({ container: n, direction: c }) {
  const g = J(Ie(() => {
    if (n.current) {
      if (c == "column") {
        const a = n.current.querySelector(".shadow--top"), f = n.current.querySelector(".shadow--bottom");
        if (a && f) {
          const E = n.current.scrollHeight - n.current.offsetHeight;
          E == 0 ? (a.style.opacity = String(0), f.style.opacity = String(0)) : (a.style.opacity = String(Math.min(n.current.scrollTop / ie, 1)), f.style.opacity = String(Math.min((E - n.current.scrollTop) / ie, 1)));
        }
      } else if (c == "row") {
        const a = n.current.querySelector(".shadow--left"), f = n.current.querySelector(".shadow--right");
        if (a && f) {
          const E = n.current.scrollWidth - n.current.offsetWidth;
          E == 0 ? (a.style.opacity = String(0), f.style.opacity = String(0)) : (a.style.opacity = String(Math.min(n.current.scrollLeft / $e, 1)), f.style.opacity = String(Math.min((E - n.current.scrollLeft) / $e, 1)));
        }
      }
    }
  }), [n.current]), v = J(Ie(() => {
    if (n.current) {
      if (c == "column") {
        if (n.current.scrollHeight - n.current.offsetHeight === 0) {
          const f = n.current.querySelector(".shadow--bottom");
          f && (f.style.opacity = "0");
        }
      } else if (c == "row" && n.current.scrollWidth - n.current.offsetWidth === 0) {
        const f = n.current.querySelector(".shadow--right");
        f && (f.style.opacity = "0");
      }
    }
  }), [n.current]);
  return oe(() => {
    const a = n.current;
    let f = null;
    if (a) {
      if (c == "column") {
        if (a.scrollHeight - a.offsetHeight === 0) {
          const S = a.querySelector(".shadow--bottom");
          S && (S.style.opacity = "0");
        }
      } else if (c == "row" && a.scrollWidth - a.offsetWidth === 0) {
        const S = a.querySelector(".shadow--right");
        S && (S.style.opacity = "0");
      }
      a.addEventListener("scroll", g), a.addEventListener("resize", v), f = new MutationObserver(v), f.observe(a, { subtree: !0, childList: !0 });
    }
    return () => {
      a == null || a.removeEventListener("resize", v), a == null || a.removeEventListener("scroll", g), f == null || f.disconnect();
    };
  }, [n, v, g]), n;
}
const zr = {
  useIsUserInputBlocked: Ue,
  isUserInputBlocked: Fr,
  useBlockUserInput: Be,
  useWrapPromise: Ar,
  blockingStarted: Wr,
  blockingStopped: Dr,
  View: Ir
};
export {
  zr as BlockUserInput,
  qr as ScrollShadows
};
