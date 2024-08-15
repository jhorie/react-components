import $e, { useSyncExternalStore as Ye, useRef as wr, useEffect as ne, useCallback as z } from "react";
import { Box as oe, CircularProgress as Tr } from "@mui/material";
import { v4 as Cr } from "uuid";
import { debounce as Ie } from "lodash";
let C = { uuids: {} }, V = [];
const S = {
  blockingStarted: (n) => {
    C.uuids[n] = !0, C = { ...C }, Ae();
  },
  blockingStopped: (n) => {
    delete C.uuids[n], C = { ...C }, Ae();
  },
  subscribe(n) {
    return V = [...V, n], () => {
      V = V.filter((f) => f !== n);
    };
  },
  getSnapshot() {
    return C;
  }
};
function Ae() {
  for (let n of V)
    n();
}
function Ue() {
  const n = Ye(S.subscribe, S.getSnapshot);
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
var Fe;
function Or() {
  if (Fe) return Y;
  Fe = 1;
  var n = $e, f = Symbol.for("react.element"), E = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(_, h, P) {
    var m, T = {}, O = null, H = null;
    P !== void 0 && (O = "" + P), h.key !== void 0 && (O = "" + h.key), h.ref !== void 0 && (H = h.ref);
    for (m in h) v.call(h, m) && !p.hasOwnProperty(m) && (T[m] = h[m]);
    if (_ && _.defaultProps) for (m in h = _.defaultProps, h) T[m] === void 0 && (T[m] = h[m]);
    return { $$typeof: f, type: _, key: O, ref: H, props: T, _owner: l.current };
  }
  return Y.Fragment = E, Y.jsx = w, Y.jsxs = w, Y;
}
var U = {};
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
function xr() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var n = $e, f = Symbol.for("react.element"), E = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), _ = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), se = Symbol.iterator, He = "@@iterator";
    function Be(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = se && e[se] || e[He];
      return typeof r == "function" ? r : null;
    }
    var I = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        Me("error", e, t);
      }
    }
    function Me(e, r, t) {
      {
        var o = I.ReactDebugCurrentFrame, s = o.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ne = !1, qe = !1, ze = !1, Je = !1, Ke = !1, ue;
    ue = Symbol.for("react.module.reference");
    function Ge(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === p || Ke || e === l || e === P || e === m || Je || e === H || Ne || qe || ze || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === T || e.$$typeof === w || e.$$typeof === _ || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function Xe(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case E:
          return "Portal";
        case p:
          return "Profiler";
        case l:
          return "StrictMode";
        case P:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return le(r) + ".Consumer";
          case w:
            var t = e;
            return le(t._context) + ".Provider";
          case h:
            return Xe(e, e.render, "ForwardRef");
          case T:
            var o = e.displayName || null;
            return o !== null ? o : k(e.type) || "Memo";
          case O: {
            var s = e, u = s._payload, i = s._init;
            try {
              return k(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, L = 0, ce, fe, de, ve, pe, ge, he;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Ze() {
      {
        if (L === 0) {
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
        L++;
      }
    }
    function Qe() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: ce
            }),
            info: x({}, e, {
              value: fe
            }),
            warn: x({}, e, {
              value: de
            }),
            error: x({}, e, {
              value: ve
            }),
            group: x({}, e, {
              value: pe
            }),
            groupCollapsed: x({}, e, {
              value: ge
            }),
            groupEnd: x({}, e, {
              value: he
            })
          });
        }
        L < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = I.ReactCurrentDispatcher, K;
    function B(e, r, t) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (s) {
            var o = s.stack.trim().match(/\n( *(at )?)/);
            K = o && o[1] || "";
          }
        return `
` + K + e;
      }
    }
    var G = !1, M;
    {
      var er = typeof WeakMap == "function" ? WeakMap : Map;
      M = new er();
    }
    function ye(e, r) {
      if (!e || G)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      G = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = J.current, J.current = null, Ze();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (y) {
              o = y;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (y) {
              o = y;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (y) {
            o = y;
          }
          e();
        }
      } catch (y) {
        if (y && o && typeof y.stack == "string") {
          for (var a = y.stack.split(`
`), b = o.stack.split(`
`), c = a.length - 1, d = b.length - 1; c >= 1 && d >= 0 && a[c] !== b[d]; )
            d--;
          for (; c >= 1 && d >= 0; c--, d--)
            if (a[c] !== b[d]) {
              if (c !== 1 || d !== 1)
                do
                  if (c--, d--, d < 0 || a[c] !== b[d]) {
                    var R = `
` + a[c].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, R), R;
                  }
                while (c >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        G = !1, J.current = u, Qe(), Error.prepareStackTrace = s;
      }
      var F = e ? e.displayName || e.name : "", j = F ? B(F) : "";
      return typeof e == "function" && M.set(e, j), j;
    }
    function rr(e, r, t) {
      return ye(e, !1);
    }
    function tr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function N(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ye(e, tr(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case P:
          return B("Suspense");
        case m:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return rr(e.render);
          case T:
            return N(e.type, r, t);
          case O: {
            var o = e, s = o._payload, u = o._init;
            try {
              return N(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, me = {}, Ee = I.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    function nr(e, r, t, o, s) {
      {
        var u = Function.call.bind(W);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var b = Error((o || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              a = e[i](r, i, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              a = c;
            }
            a && !(a instanceof Error) && (q(s), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, i, typeof a), q(null)), a instanceof Error && !(a.message in me) && (me[a.message] = !0, q(s), g("Failed %s type: %s", t, a.message), q(null));
          }
      }
    }
    var or = Array.isArray;
    function X(e) {
      return or(e);
    }
    function ar(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ir(e) {
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
      if (ir(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(e)), Re(e);
    }
    var $ = I.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, ke, Z;
    Z = {};
    function ur(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function lr(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function cr(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = k($.current.type);
        Z[t] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k($.current.type), e.ref), Z[t] = !0);
      }
    }
    function fr(e, r) {
      {
        var t = function() {
          _e || (_e = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function dr(e, r) {
      {
        var t = function() {
          ke || (ke = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var vr = function(e, r, t, o, s, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function pr(e, r, t, o, s) {
      {
        var u, i = {}, a = null, b = null;
        t !== void 0 && (Se(t), a = "" + t), lr(r) && (Se(r.key), a = "" + r.key), ur(r) && (b = r.ref, cr(r, s));
        for (u in r)
          W.call(r, u) && !sr.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (u in c)
            i[u] === void 0 && (i[u] = c[u]);
        }
        if (a || b) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && fr(i, d), b && dr(i, d);
        }
        return vr(e, a, b, s, o, $.current, i);
      }
    }
    var Q = I.ReactCurrentOwner, we = I.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function Te() {
      {
        if (Q.current) {
          var e = k(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function gr(e) {
      return "";
    }
    var Ce = {};
    function hr(e) {
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
    function Oe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = hr(r);
        if (Ce[t])
          return;
        Ce[t] = !0;
        var o = "";
        e && e._owner && e._owner !== Q.current && (o = " It was passed a child from " + k(e._owner.type) + "."), A(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), A(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            re(o) && Oe(o, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = Be(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), i; !(i = u.next()).done; )
              re(i.value) && Oe(i.value, r);
        }
      }
    }
    function br(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = k(r);
          nr(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var s = k(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            A(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var je = {};
    function Pe(e, r, t, o, s, u) {
      {
        var i = Ge(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = gr();
          b ? a += b : a += Te();
          var c;
          e === null ? c = "null" : X(e) ? c = "array" : e !== void 0 && e.$$typeof === f ? (c = "<" + (k(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, a);
        }
        var d = pr(e, r, t, s, u);
        if (d == null)
          return d;
        if (i) {
          var R = r.children;
          if (R !== void 0)
            if (o)
              if (X(R)) {
                for (var F = 0; F < R.length; F++)
                  xe(R[F], e);
                Object.freeze && Object.freeze(R);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(R, e);
        }
        if (W.call(r, "key")) {
          var j = k(e), y = Object.keys(r).filter(function(kr) {
            return kr !== "key";
          }), te = y.length > 0 ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[j + te]) {
            var _r = y.length > 0 ? "{" + y.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, te, j, _r, j), je[j + te] = !0;
          }
        }
        return e === v ? yr(d) : br(d), d;
      }
    }
    function mr(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function Er(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var Rr = Er, Sr = mr;
    U.Fragment = v, U.jsx = Rr, U.jsxs = Sr;
  }()), U;
}
process.env.NODE_ENV === "production" ? ae.exports = Or() : ae.exports = xr();
var D = ae.exports;
function jr() {
  return Ue() ? D.jsx(oe, { sx: {
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
  }, children: D.jsx(Tr, { color: "primary", thickness: 6, size: 50 }) }) : null;
}
function Pr() {
  const n = C.uuids;
  return Object.keys(n).length > 0;
}
function Ir(n) {
  S.blockingStarted(n);
}
function Ar(n) {
  S.blockingStopped(n);
}
function Ve(n) {
  const f = wr(""), v = Ye(S.subscribe, S.getSnapshot).uuids[f.current];
  return ne(() => (f.current = Cr(), () => {
    S.blockingStopped(f.current);
  }), []), ne(() => {
    !v && n ? S.blockingStarted(f.current) : v && n === !1 && S.blockingStopped(f.current);
  }, [n, v]), {
    blockingStarted: z(() => {
      S.blockingStarted(f.current);
    }, []),
    blockingStopped: z(() => {
      S.blockingStopped(f.current);
    }, [])
  };
}
function Fr(n) {
  const { blockingStarted: f, blockingStopped: E } = Ve();
  return async (...v) => {
    f();
    const l = await n(...v);
    return E(), l;
  };
}
const Le = {
  left: 0,
  zIndex: 100,
  width: "100%",
  height: "40px",
  minHeight: "40px"
}, Dr = {
  position: "sticky",
  pointerEvents: "none",
  top: 0,
  backgroundImage: "radial-gradient(farthest-side at 50% 0%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  opacity: 0
}, Lr = {
  bottom: 0,
  pointerEvents: "none",
  backgroundImage: "radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  position: "sticky"
};
function Hr({ children: n, containerRef: f, styleTopShadow: E = {}, styleBottomShadow: v = {} }) {
  return Wr({ orientation: ie.VERTICAL, container: f }), D.jsxs(D.Fragment, { children: [D.jsx(oe, { className: "shadow--top", sx: { ...Le, ...Dr, ...E } }), n, D.jsx(oe, { className: "shadow--bottom", sx: { ...Le, ...Lr, ...v } })] });
}
var ie;
(function(n) {
  n[n.VERTICAL = 0] = "VERTICAL", n[n.HORIZONTAL = 1] = "HORIZONTAL";
})(ie || (ie = {}));
const We = 150;
function Wr({ container: n, orientation: f }) {
  const E = z(Ie(() => {
    if (n.current) {
      const l = n.current.querySelector(".shadow--top"), p = n.current.querySelector(".shadow--bottom");
      if (l && p) {
        const w = n.current.scrollHeight - n.current.offsetHeight;
        w == 0 ? (l.style.opacity = String(0), p.style.opacity = String(0)) : (l.style.opacity = String(Math.min(n.current.scrollTop / We, 1)), p.style.opacity = String(Math.min((w - n.current.scrollTop) / We, 1)));
      }
    }
  }), [n.current]), v = z(Ie(() => {
    if (n.current && n.current.scrollHeight - n.current.offsetHeight === 0) {
      const p = n.current.querySelector(".shadow--bottom");
      p && (p.style.opacity = "0");
    }
  }), [n.current]);
  return ne(() => {
    const l = n.current;
    let p = null;
    if (l) {
      if (l.scrollHeight - l.offsetHeight === 0) {
        const _ = l.querySelector(".shadow--bottom");
        _ && (_.style.opacity = "0");
      }
      l.addEventListener("scroll", E), l.addEventListener("resize", v), p = new MutationObserver(v), p.observe(l, { subtree: !0, childList: !0 });
    }
    return () => {
      l == null || l.removeEventListener("resize", v), l == null || l.removeEventListener("scroll", E), p == null || p.disconnect();
    };
  }, [n, v, E]), n;
}
const Br = {
  useIsUserInputBlocked: Ue,
  isUserInputBlocked: Pr,
  useBlockUserInput: Ve,
  useWrapPromise: Fr,
  blockingStarted: Ir,
  blockingStopped: Ar,
  View: jr
};
export {
  Br as BlockUserInput,
  Hr as ScrollShadows
};
