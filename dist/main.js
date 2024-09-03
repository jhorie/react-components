import Me, { useSyncExternalStore as Ye, useRef as xr, useEffect as ie, useCallback as B } from "react";
import { Box as U, CircularProgress as Cr } from "@mui/material";
import { v4 as Or } from "uuid";
import { debounce as Fe } from "lodash";
let x = { uuids: {} }, V = [];
const w = {
  blockingStarted: (n) => {
    x.uuids[n] = !0, x = { ...x }, De();
  },
  blockingStopped: (n) => {
    delete x.uuids[n], x = { ...x }, De();
  },
  subscribe(n) {
    return V = [...V, n], () => {
      V = V.filter((d) => d !== n);
    };
  },
  getSnapshot() {
    return x;
  }
};
function De() {
  for (let n of V)
    n();
}
function Ue() {
  const n = Ye(w.subscribe, w.getSnapshot);
  return Object.keys(n.uuids).length > 0;
}
var se = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function jr() {
  if (Ae) return M;
  Ae = 1;
  var n = Me, d = Symbol.for("react.element"), h = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, R = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(c, l, I) {
    var E, T = {}, O = null, N = null;
    I !== void 0 && (O = "" + I), l.key !== void 0 && (O = "" + l.key), l.ref !== void 0 && (N = l.ref);
    for (E in l) g.call(l, E) && !_.hasOwnProperty(E) && (T[E] = l[E]);
    if (c && c.defaultProps) for (E in l = c.defaultProps, l) T[E] === void 0 && (T[E] = l[E]);
    return { $$typeof: d, type: c, key: O, ref: N, props: T, _owner: R.current };
  }
  return M.Fragment = h, M.jsx = o, M.jsxs = o, M;
}
var Y = {};
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
function Pr() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Me, d = Symbol.for("react.element"), h = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), ue = Symbol.iterator, Ne = "@@iterator";
    function qe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ue && e[ue] || e[Ne];
      return typeof r == "function" ? r : null;
    }
    var F = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        He("error", e, t);
      }
    }
    function He(e, r, t) {
      {
        var a = F.ReactDebugCurrentFrame, u = a.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var f = t.map(function(s) {
          return String(s);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var ze = !1, Je = !1, Ge = !1, Ke = !1, Xe = !1, le;
    le = Symbol.for("react.module.reference");
    function Ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === _ || Xe || e === R || e === I || e === E || Ke || e === N || ze || Je || Ge || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === T || e.$$typeof === o || e.$$typeof === c || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function Qe(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function ce(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case h:
          return "Portal";
        case _:
          return "Profiler";
        case R:
          return "StrictMode";
        case I:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var r = e;
            return ce(r) + ".Consumer";
          case o:
            var t = e;
            return ce(t._context) + ".Provider";
          case l:
            return Qe(e, e.render, "ForwardRef");
          case T:
            var a = e.displayName || null;
            return a !== null ? a : k(e.type) || "Memo";
          case O: {
            var u = e, f = u._payload, s = u._init;
            try {
              return k(s(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, W = 0, fe, de, ve, pe, ge, he, be;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function er() {
      {
        if (W === 0) {
          fe = console.log, de = console.info, ve = console.warn, pe = console.error, ge = console.group, he = console.groupCollapsed, be = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ye,
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
    function rr() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: fe
            }),
            info: j({}, e, {
              value: de
            }),
            warn: j({}, e, {
              value: ve
            }),
            error: j({}, e, {
              value: pe
            }),
            group: j({}, e, {
              value: ge
            }),
            groupCollapsed: j({}, e, {
              value: he
            }),
            groupEnd: j({}, e, {
              value: be
            })
          });
        }
        W < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = F.ReactCurrentDispatcher, X;
    function q(e, r, t) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (u) {
            var a = u.stack.trim().match(/\n( *(at )?)/);
            X = a && a[1] || "";
          }
        return `
` + X + e;
      }
    }
    var Z = !1, H;
    {
      var tr = typeof WeakMap == "function" ? WeakMap : Map;
      H = new tr();
    }
    function me(e, r) {
      if (!e || Z)
        return "";
      {
        var t = H.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      Z = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = K.current, K.current = null, er();
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
              a = m;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (m) {
              a = m;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            a = m;
          }
          e();
        }
      } catch (m) {
        if (m && a && typeof m.stack == "string") {
          for (var i = m.stack.split(`
`), y = a.stack.split(`
`), v = i.length - 1, p = y.length - 1; v >= 1 && p >= 0 && i[v] !== y[p]; )
            p--;
          for (; v >= 1 && p >= 0; v--, p--)
            if (i[v] !== y[p]) {
              if (v !== 1 || p !== 1)
                do
                  if (v--, p--, p < 0 || i[v] !== y[p]) {
                    var S = `
` + i[v].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, S), S;
                  }
                while (v >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        Z = !1, K.current = f, rr(), Error.prepareStackTrace = u;
      }
      var A = e ? e.displayName || e.name : "", P = A ? q(A) : "";
      return typeof e == "function" && H.set(e, P), P;
    }
    function nr(e, r, t) {
      return me(e, !1);
    }
    function ar(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, ar(e));
      if (typeof e == "string")
        return q(e);
      switch (e) {
        case I:
          return q("Suspense");
        case E:
          return q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return nr(e.render);
          case T:
            return z(e.type, r, t);
          case O: {
            var a = e, u = a._payload, f = a._init;
            try {
              return z(f(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, Ee = {}, Re = F.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function or(e, r, t, a, u) {
      {
        var f = Function.call.bind(L);
        for (var s in e)
          if (f(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var y = Error((a || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              i = e[s](r, s, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              i = v;
            }
            i && !(i instanceof Error) && (J(u), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, s, typeof i), J(null)), i instanceof Error && !(i.message in Ee) && (Ee[i.message] = !0, J(u), b("Failed %s type: %s", t, i.message), J(null));
          }
      }
    }
    var ir = Array.isArray;
    function Q(e) {
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
    function _e(e) {
      if (ur(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(e)), Se(e);
    }
    var $ = F.ReactCurrentOwner, lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, ke, ee;
    ee = {};
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
        ee[t] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k($.current.type), e.ref), ee[t] = !0);
      }
    }
    function vr(e, r) {
      {
        var t = function() {
          we || (we = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          ke || (ke = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var gr = function(e, r, t, a, u, f, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: f
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
        value: a
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function hr(e, r, t, a, u) {
      {
        var f, s = {}, i = null, y = null;
        t !== void 0 && (_e(t), i = "" + t), fr(r) && (_e(r.key), i = "" + r.key), cr(r) && (y = r.ref, dr(r, u));
        for (f in r)
          L.call(r, f) && !lr.hasOwnProperty(f) && (s[f] = r[f]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (f in v)
            s[f] === void 0 && (s[f] = v[f]);
        }
        if (i || y) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && vr(s, p), y && pr(s, p);
        }
        return gr(e, i, y, u, a, $.current, s);
      }
    }
    var re = F.ReactCurrentOwner, Te = F.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    function xe() {
      {
        if (re.current) {
          var e = k(re.current.type);
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
    var Ce = {};
    function yr(e) {
      {
        var r = xe();
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
        var t = yr(r);
        if (Ce[t])
          return;
        Ce[t] = !0;
        var a = "";
        e && e._owner && e._owner !== re.current && (a = " It was passed a child from " + k(e._owner.type) + "."), D(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), D(null);
      }
    }
    function je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            ne(a) && Oe(a, r);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = qe(e);
          if (typeof u == "function" && u !== e.entries)
            for (var f = u.call(e), s; !(s = f.next()).done; )
              ne(s.value) && Oe(s.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === T))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = k(r);
          or(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !te) {
          te = !0;
          var u = k(r);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Er(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            D(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var Pe = {};
    function Ie(e, r, t, a, u, f) {
      {
        var s = Ze(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = br();
          y ? i += y : i += xe();
          var v;
          e === null ? v = "null" : Q(e) ? v = "array" : e !== void 0 && e.$$typeof === d ? (v = "<" + (k(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, i);
        }
        var p = hr(e, r, t, u, f);
        if (p == null)
          return p;
        if (s) {
          var S = r.children;
          if (S !== void 0)
            if (a)
              if (Q(S)) {
                for (var A = 0; A < S.length; A++)
                  je(S[A], e);
                Object.freeze && Object.freeze(S);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              je(S, e);
        }
        if (L.call(r, "key")) {
          var P = k(e), m = Object.keys(r).filter(function(Tr) {
            return Tr !== "key";
          }), ae = m.length > 0 ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pe[P + ae]) {
            var kr = m.length > 0 ? "{" + m.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ae, P, kr, P), Pe[P + ae] = !0;
          }
        }
        return e === g ? Er(p) : mr(p), p;
      }
    }
    function Rr(e, r, t) {
      return Ie(e, r, t, !0);
    }
    function Sr(e, r, t) {
      return Ie(e, r, t, !1);
    }
    var _r = Sr, wr = Rr;
    Y.Fragment = g, Y.jsx = _r, Y.jsxs = wr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? se.exports = jr() : se.exports = Pr();
var C = se.exports;
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
function Dr(n) {
  w.blockingStarted(n);
}
function Ar(n) {
  w.blockingStopped(n);
}
function Ve(n) {
  const d = xr(""), g = Ye(w.subscribe, w.getSnapshot).uuids[d.current];
  return ie(() => (d.current = Or(), () => {
    w.blockingStopped(d.current);
  }), []), ie(() => {
    !g && n ? w.blockingStarted(d.current) : g && n === !1 && w.blockingStopped(d.current);
  }, [n, g]), {
    blockingStarted: B(() => {
      w.blockingStarted(d.current);
    }, []),
    blockingStopped: B(() => {
      w.blockingStopped(d.current);
    }, [])
  };
}
function Wr(n) {
  const { blockingStarted: d, blockingStopped: h } = Ve();
  return async (...g) => {
    d();
    const R = await n(...g);
    return h(), R;
  };
}
const Be = {
  zIndex: 100,
  position: "sticky",
  pointerEvents: "none"
}, Le = {
  ...Be,
  left: 0,
  minWidth: "100%",
  height: "40px",
  minHeight: "40px",
  marginTop: "-40px"
}, $e = {
  ...Be,
  top: 0,
  minHeight: "100%",
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
}, Mr = {
  left: 0,
  backgroundImage: "radial-gradient(farthest-side at 0% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  opacity: 0
}, Yr = {
  right: 0,
  backgroundImage: "radial-gradient(farthest-side at 100% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)"
};
function Hr({ children: n, containerRef: d, direction: h = "column", styleTopShadow: g = {}, styleBottomShadow: R = {}, threshold: _ = 40 }) {
  return Ur({ direction: h, container: d, threshold: _ }), C.jsxs(C.Fragment, { children: [h == "column" ? C.jsx(U, { className: "shadow--top", sx: { ...Le, ...Lr, ...g } }) : null, h == "row" ? C.jsx(U, { className: "shadow--left", sx: { ...$e, ...Mr, ...g } }) : null, n, h == "column" ? C.jsx(U, { className: "shadow--bottom", sx: { ...Le, ...$r, ...R } }) : null, h == "row" ? C.jsx(U, { className: "shadow--right", sx: { ...$e, ...Yr, ...R } }) : null] });
}
const G = 150, oe = G;
function Ur({ container: n, direction: d, threshold: h }) {
  const g = B(Fe(() => {
    if (n.current) {
      if (d == "column") {
        const o = n.current.querySelector(".shadow--top"), c = n.current.querySelector(".shadow--bottom");
        if (o && c) {
          const l = n.current.scrollHeight - n.current.offsetHeight;
          l < h ? (o.style.opacity = String(0), c.style.opacity = String(0)) : (o.style.opacity = String(Math.min(n.current.scrollTop / G, 1)), c.style.opacity = String(Math.min((l - n.current.scrollTop) / G, 1)));
        }
      } else if (d == "row") {
        const o = n.current.querySelector(".shadow--left"), c = n.current.querySelector(".shadow--right");
        if (o && c) {
          const l = n.current.scrollWidth - n.current.offsetWidth;
          l < h ? (o.style.opacity = String(0), c.style.opacity = String(0)) : (o.style.opacity = String(Math.min(n.current.scrollLeft / oe, 1)), c.style.opacity = String(Math.min((l - n.current.scrollLeft) / oe, 1)));
        }
      }
    }
  }), [n.current]), R = B((o) => {
    if (o) {
      if (d == "column") {
        const c = o.scrollHeight - o.offsetHeight, l = o.querySelector(".shadow--bottom");
        l && (c < h ? l.style.opacity = "0" : l.style.opacity = String(Math.min((c - o.scrollTop) / G, 1)));
      } else if (d == "row") {
        const c = o.scrollWidth - o.offsetWidth, l = o.querySelector(".shadow--right");
        l && (c < h ? l.style.opacity = "0" : l.style.opacity = String(Math.min((c - o.scrollLeft) / oe, 1)));
      }
    }
  }, []), _ = B(Fe(() => {
    const o = n.current;
    o && R(o);
  }), [n.current]);
  return ie(() => {
    const o = n.current;
    let c = null;
    return o && (R(o), o.addEventListener("scroll", g), o.addEventListener("resize", _), c = new MutationObserver(_), c.observe(o, { subtree: !0, childList: !0 })), () => {
      o == null || o.removeEventListener("resize", _), o == null || o.removeEventListener("scroll", g), c == null || c.disconnect();
    };
  }, [n, _, g]), n;
}
const zr = {
  useIsUserInputBlocked: Ue,
  isUserInputBlocked: Fr,
  useBlockUserInput: Ve,
  useWrapPromise: Wr,
  blockingStarted: Dr,
  blockingStopped: Ar,
  View: Ir
};
export {
  zr as BlockUserInput,
  Hr as ScrollShadows
};
