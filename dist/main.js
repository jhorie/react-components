import qe, { useSyncExternalStore as ze, useRef as Ur, useEffect as ue, useCallback as B } from "react";
import { Box as U, CircularProgress as Yr } from "@mui/material";
import { v4 as Br } from "uuid";
import { debounce as Me } from "lodash";
import { format as ae, subDays as Hr } from "date-fns";
let C = { uuids: {} }, Y = [];
const T = {
  blockingStarted: (r) => {
    C.uuids[r] = !0, C = { ...C }, Le();
  },
  blockingStopped: (r) => {
    delete C.uuids[r], C = { ...C }, Le();
  },
  subscribe(r) {
    return Y = [...Y, r], () => {
      Y = Y.filter((n) => n !== r);
    };
  },
  getSnapshot() {
    return C;
  }
};
function Le() {
  for (let r of Y)
    r();
}
function Je() {
  const r = ze(T.subscribe, T.getSnapshot);
  return Object.keys(r.uuids).length > 0;
}
var ce = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Vr() {
  if ($e) return $;
  $e = 1;
  var r = qe, n = Symbol.for("react.element"), a = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, v = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(p, d, F) {
    var S, O = {}, j = null, q = null;
    F !== void 0 && (j = "" + F), d.key !== void 0 && (j = "" + d.key), d.ref !== void 0 && (q = d.ref);
    for (S in d) l.call(d, S) && !_.hasOwnProperty(S) && (O[S] = d[S]);
    if (p && p.defaultProps) for (S in d = p.defaultProps, d) O[S] === void 0 && (O[S] = d[S]);
    return { $$typeof: n, type: p, key: j, ref: q, props: O, _owner: v.current };
  }
  return $.Fragment = a, $.jsx = s, $.jsxs = s, $;
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
var Ne;
function qr() {
  return Ne || (Ne = 1, process.env.NODE_ENV !== "production" && function() {
    var r = qe, n = Symbol.for("react.element"), a = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), p = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), fe = Symbol.iterator, or = "@@iterator";
    function ir(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = fe && e[fe] || e[or];
      return typeof t == "function" ? t : null;
    }
    var A = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          o[i - 1] = arguments[i];
        ar("error", e, o);
      }
    }
    function ar(e, t, o) {
      {
        var i = A.ReactDebugCurrentFrame, f = i.getStackAddendum();
        f !== "" && (t += "%s", o = o.concat([f]));
        var g = o.map(function(c) {
          return String(c);
        });
        g.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, g);
      }
    }
    var sr = !1, ur = !1, cr = !1, lr = !1, fr = !1, de;
    de = Symbol.for("react.module.reference");
    function dr(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === _ || fr || e === v || e === F || e === S || lr || e === q || sr || ur || cr || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === O || e.$$typeof === s || e.$$typeof === p || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === de || e.getModuleId !== void 0));
    }
    function pr(e, t, o) {
      var i = e.displayName;
      if (i)
        return i;
      var f = t.displayName || t.name || "";
      return f !== "" ? o + "(" + f + ")" : o;
    }
    function pe(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case a:
          return "Portal";
        case _:
          return "Profiler";
        case v:
          return "StrictMode";
        case F:
          return "Suspense";
        case S:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var t = e;
            return pe(t) + ".Consumer";
          case s:
            var o = e;
            return pe(o._context) + ".Provider";
          case d:
            return pr(e, e.render, "ForwardRef");
          case O:
            var i = e.displayName || null;
            return i !== null ? i : k(e.type) || "Memo";
          case j: {
            var f = e, g = f._payload, c = f._init;
            try {
              return k(c(g));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, M = 0, ge, ve, he, ye, me, be, Ee;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function gr() {
      {
        if (M === 0) {
          ge = console.log, ve = console.info, he = console.warn, ye = console.error, me = console.group, be = console.groupCollapsed, Ee = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Se,
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
        M++;
      }
    }
    function vr() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ge
            }),
            info: P({}, e, {
              value: ve
            }),
            warn: P({}, e, {
              value: he
            }),
            error: P({}, e, {
              value: ye
            }),
            group: P({}, e, {
              value: me
            }),
            groupCollapsed: P({}, e, {
              value: be
            }),
            groupEnd: P({}, e, {
              value: Ee
            })
          });
        }
        M < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = A.ReactCurrentDispatcher, Q;
    function z(e, t, o) {
      {
        if (Q === void 0)
          try {
            throw Error();
          } catch (f) {
            var i = f.stack.trim().match(/\n( *(at )?)/);
            Q = i && i[1] || "";
          }
        return `
` + Q + e;
      }
    }
    var ee = !1, J;
    {
      var hr = typeof WeakMap == "function" ? WeakMap : Map;
      J = new hr();
    }
    function Re(e, t) {
      if (!e || ee)
        return "";
      {
        var o = J.get(e);
        if (o !== void 0)
          return o;
      }
      var i;
      ee = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var g;
      g = Z.current, Z.current = null, gr();
      try {
        if (t) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (E) {
              i = E;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (E) {
              i = E;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            i = E;
          }
          e();
        }
      } catch (E) {
        if (E && i && typeof E.stack == "string") {
          for (var u = E.stack.split(`
`), b = i.stack.split(`
`), h = u.length - 1, y = b.length - 1; h >= 1 && y >= 0 && u[h] !== b[y]; )
            y--;
          for (; h >= 1 && y >= 0; h--, y--)
            if (u[h] !== b[y]) {
              if (h !== 1 || y !== 1)
                do
                  if (h--, y--, y < 0 || u[h] !== b[y]) {
                    var R = `
` + u[h].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, R), R;
                  }
                while (h >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        ee = !1, Z.current = g, vr(), Error.prepareStackTrace = f;
      }
      var W = e ? e.displayName || e.name : "", D = W ? z(W) : "";
      return typeof e == "function" && J.set(e, D), D;
    }
    function yr(e, t, o) {
      return Re(e, !1);
    }
    function mr(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function G(e, t, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, mr(e));
      if (typeof e == "string")
        return z(e);
      switch (e) {
        case F:
          return z("Suspense");
        case S:
          return z("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return yr(e.render);
          case O:
            return G(e.type, t, o);
          case j: {
            var i = e, f = i._payload, g = i._init;
            try {
              return G(g(f), t, o);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, _e = {}, Te = A.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var t = e._owner, o = G(e.type, e._source, t ? t.type : null);
        Te.setExtraStackFrame(o);
      } else
        Te.setExtraStackFrame(null);
    }
    function br(e, t, o, i, f) {
      {
        var g = Function.call.bind(L);
        for (var c in e)
          if (g(e, c)) {
            var u = void 0;
            try {
              if (typeof e[c] != "function") {
                var b = Error((i || "React class") + ": " + o + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              u = e[c](t, c, i, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              u = h;
            }
            u && !(u instanceof Error) && (K(f), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", o, c, typeof u), K(null)), u instanceof Error && !(u.message in _e) && (_e[u.message] = !0, K(f), m("Failed %s type: %s", o, u.message), K(null));
          }
      }
    }
    var Er = Array.isArray;
    function re(e) {
      return Er(e);
    }
    function Sr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, o = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function Rr(e) {
      try {
        return we(e), !1;
      } catch {
        return !0;
      }
    }
    function we(e) {
      return "" + e;
    }
    function Oe(e) {
      if (Rr(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sr(e)), we(e);
    }
    var ke = A.ReactCurrentOwner, _r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, xe;
    function Tr(e) {
      if (L.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function wr(e) {
      if (L.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Or(e, t) {
      typeof e.ref == "string" && ke.current;
    }
    function kr(e, t) {
      {
        var o = function() {
          Ce || (Ce = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function Cr(e, t) {
      {
        var o = function() {
          xe || (xe = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var xr = function(e, t, o, i, f, g, c) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: o,
        props: c,
        // Record the component responsible for creating this element.
        _owner: g
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function jr(e, t, o, i, f) {
      {
        var g, c = {}, u = null, b = null;
        o !== void 0 && (Oe(o), u = "" + o), wr(t) && (Oe(t.key), u = "" + t.key), Tr(t) && (b = t.ref, Or(t, f));
        for (g in t)
          L.call(t, g) && !_r.hasOwnProperty(g) && (c[g] = t[g]);
        if (e && e.defaultProps) {
          var h = e.defaultProps;
          for (g in h)
            c[g] === void 0 && (c[g] = h[g]);
        }
        if (u || b) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && kr(c, y), b && Cr(c, y);
        }
        return xr(e, u, b, f, i, ke.current, c);
      }
    }
    var te = A.ReactCurrentOwner, je = A.ReactDebugCurrentFrame;
    function I(e) {
      if (e) {
        var t = e._owner, o = G(e.type, e._source, t ? t.type : null);
        je.setExtraStackFrame(o);
      } else
        je.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Pe() {
      {
        if (te.current) {
          var e = k(te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Pr(e) {
      return "";
    }
    var De = {};
    function Dr(e) {
      {
        var t = Pe();
        if (!t) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (t = `

Check the top-level render call using <` + o + ">.");
        }
        return t;
      }
    }
    function Fe(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = Dr(t);
        if (De[o])
          return;
        De[o] = !0;
        var i = "";
        e && e._owner && e._owner !== te.current && (i = " It was passed a child from " + k(e._owner.type) + "."), I(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, i), I(null);
      }
    }
    function Ae(e, t) {
      {
        if (typeof e != "object")
          return;
        if (re(e))
          for (var o = 0; o < e.length; o++) {
            var i = e[o];
            oe(i) && Fe(i, t);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = ir(e);
          if (typeof f == "function" && f !== e.entries)
            for (var g = f.call(e), c; !(c = g.next()).done; )
              oe(c.value) && Fe(c.value, t);
        }
      }
    }
    function Fr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var o;
        if (typeof t == "function")
          o = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === O))
          o = t.propTypes;
        else
          return;
        if (o) {
          var i = k(t);
          br(o, e.props, "prop", i, e);
        } else if (t.PropTypes !== void 0 && !ne) {
          ne = !0;
          var f = k(t);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ar(e) {
      {
        for (var t = Object.keys(e.props), o = 0; o < t.length; o++) {
          var i = t[o];
          if (i !== "children" && i !== "key") {
            I(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), I(null);
            break;
          }
        }
        e.ref !== null && (I(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    var Ie = {};
    function We(e, t, o, i, f, g) {
      {
        var c = dr(e);
        if (!c) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = Pr();
          b ? u += b : u += Pe();
          var h;
          e === null ? h = "null" : re(e) ? h = "array" : e !== void 0 && e.$$typeof === n ? (h = "<" + (k(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, u);
        }
        var y = jr(e, t, o, f, g);
        if (y == null)
          return y;
        if (c) {
          var R = t.children;
          if (R !== void 0)
            if (i)
              if (re(R)) {
                for (var W = 0; W < R.length; W++)
                  Ae(R[W], e);
                Object.freeze && Object.freeze(R);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(R, e);
        }
        if (L.call(t, "key")) {
          var D = k(e), E = Object.keys(t).filter(function(Nr) {
            return Nr !== "key";
          }), ie = E.length > 0 ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ie[D + ie]) {
            var $r = E.length > 0 ? "{" + E.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ie, D, $r, D), Ie[D + ie] = !0;
          }
        }
        return e === l ? Ar(y) : Fr(y), y;
      }
    }
    function Ir(e, t, o) {
      return We(e, t, o, !0);
    }
    function Wr(e, t, o) {
      return We(e, t, o, !1);
    }
    var Mr = Wr, Lr = Ir;
    N.Fragment = l, N.jsx = Mr, N.jsxs = Lr;
  }()), N;
}
process.env.NODE_ENV === "production" ? ce.exports = Vr() : ce.exports = qr();
var x = ce.exports;
function zr() {
  return Je() ? x.jsx(U, { sx: {
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
  }, children: x.jsx(Yr, { color: "primary", thickness: 6, size: 50 }) }) : null;
}
function Jr() {
  const r = C.uuids;
  return Object.keys(r).length > 0;
}
function Gr(r) {
  T.blockingStarted(r);
}
function Kr(r) {
  T.blockingStopped(r);
}
function Ge(r) {
  const n = Ur(""), l = ze(T.subscribe, T.getSnapshot).uuids[n.current];
  return ue(() => (n.current = Br(), () => {
    T.blockingStopped(n.current);
  }), []), ue(() => {
    !l && r ? T.blockingStarted(n.current) : l && r === !1 && T.blockingStopped(n.current);
  }, [r, l]), {
    blockingStarted: B(() => {
      T.blockingStarted(n.current);
    }, []),
    blockingStopped: B(() => {
      T.blockingStopped(n.current);
    }, [])
  };
}
function Xr(r) {
  const { blockingStarted: n, blockingStopped: a } = Ge();
  return async (...l) => {
    n();
    const v = await r(...l);
    return a(), v;
  };
}
const Ke = {
  zIndex: 100,
  position: "sticky",
  pointerEvents: "none"
}, Ue = {
  ...Ke,
  left: 0,
  minWidth: "100%",
  height: "40px",
  minHeight: "40px",
  marginTop: "-40px"
}, Ye = {
  ...Ke,
  top: 0,
  minHeight: "100%",
  width: "20px",
  minWidth: "20px",
  marginLeft: "-20px"
}, Zr = {
  top: 0,
  backgroundImage: "radial-gradient(farthest-side at 50% 0%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  opacity: 0
}, Qr = {
  bottom: 0,
  backgroundImage: "radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)"
}, et = {
  left: 0,
  backgroundImage: "radial-gradient(farthest-side at 0% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)",
  opacity: 0
}, rt = {
  right: 0,
  backgroundImage: "radial-gradient(farthest-side at 100% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%)"
};
function wt({ children: r, containerRef: n, direction: a = "column", styleTopShadow: l = {}, styleBottomShadow: v = {}, threshold: _ = 40 }) {
  return tt({ direction: a, container: n, threshold: _ }), x.jsxs(x.Fragment, { children: [a == "column" ? x.jsx(U, { className: "shadow--top", sx: { ...Ue, ...Zr, ...l } }) : null, a == "row" ? x.jsx(U, { className: "shadow--left", sx: { ...Ye, ...et, ...l } }) : null, r, a == "column" ? x.jsx(U, { className: "shadow--bottom", sx: { ...Ue, ...Qr, ...v } }) : null, a == "row" ? x.jsx(U, { className: "shadow--right", sx: { ...Ye, ...rt, ...v } }) : null] });
}
const X = 150, se = X;
function tt({ container: r, direction: n, threshold: a }) {
  const l = B(Me(() => {
    if (r.current) {
      if (n == "column") {
        const s = r.current.querySelector(".shadow--top"), p = r.current.querySelector(".shadow--bottom");
        if (s && p) {
          const d = r.current.scrollHeight - r.current.offsetHeight;
          d < a ? (s.style.opacity = String(0), p.style.opacity = String(0)) : (s.style.opacity = String(Math.min(r.current.scrollTop / X, 1)), p.style.opacity = String(Math.min((d - r.current.scrollTop) / X, 1)));
        }
      } else if (n == "row") {
        const s = r.current.querySelector(".shadow--left"), p = r.current.querySelector(".shadow--right");
        if (s && p) {
          const d = r.current.scrollWidth - r.current.offsetWidth;
          d < a ? (s.style.opacity = String(0), p.style.opacity = String(0)) : (s.style.opacity = String(Math.min(r.current.scrollLeft / se, 1)), p.style.opacity = String(Math.min((d - r.current.scrollLeft) / se, 1)));
        }
      }
    }
  }), [r.current]), v = B((s) => {
    if (s) {
      if (n == "column") {
        const p = s.scrollHeight - s.offsetHeight, d = s.querySelector(".shadow--bottom");
        d && (p < a ? d.style.opacity = "0" : d.style.opacity = String(Math.min((p - s.scrollTop) / X, 1)));
      } else if (n == "row") {
        const p = s.scrollWidth - s.offsetWidth, d = s.querySelector(".shadow--right");
        d && (p < a ? d.style.opacity = "0" : d.style.opacity = String(Math.min((p - s.scrollLeft) / se, 1)));
      }
    }
  }, []), _ = B(Me(() => {
    const s = r.current;
    s && v(s);
  }), [r.current]);
  return ue(() => {
    const s = r.current;
    let p = null;
    return s && (v(s), s.addEventListener("scroll", l), s.addEventListener("resize", _), p = new MutationObserver(_), p.observe(s, { subtree: !0, childList: !0 })), () => {
      s == null || s.removeEventListener("resize", _), s == null || s.removeEventListener("scroll", l), p == null || p.disconnect();
    };
  }, [r, _, l]), r;
}
function H(r) {
  return nt(typeof r == "string" ? r : r[0]);
}
function nt(r) {
  const n = r.split("-");
  return { start: Be(n[0]), end: Be(n[1]) };
}
function Be(r) {
  const n = r.split(":");
  return { hours: Number(n[0]), minutes: Number(n[1]) };
}
function Xe(r, n) {
  return r.hours == n.hours && r.minutes == n.minutes;
}
function Ze(r, n) {
  return V(r) > V(n);
}
function ot(r, n) {
  return V(r) < V(n);
}
function it(r, n) {
  return Xe(r, n) || Ze(r, n);
}
function V(r) {
  return r.hours * 60 + r.minutes;
}
function at(r) {
  return String(r.hours).padStart(2, "0") + ":" + String(r.minutes).padStart(2, "0");
}
function st(r) {
  return { hours: r.getUTCHours(), minutes: r.getUTCMinutes() };
}
const w = { isSame: Xe, isBefore: ot, isAfter: Ze, isSameOrAfter: it, timeToNumber: V, fromDate: st, timeToString: at };
function ut(r) {
  return w.isAfter(r.start, r.end);
}
function Qe(r) {
  return ut(r);
}
function er(r, n) {
  return w.isSameOrAfter(n, r.start) && (Qe(r) || w.isBefore(n, r.end));
}
function ct(r, n) {
  return Qe(r) && er({ ...r, start: { hours: 0, minutes: 0 } }, n);
}
function lt(r) {
  return `${w.timeToString(r.start)}-${w.timeToString(r.end)}`;
}
const le = { containsTime: er, containsNightTime: ct, timeRangeToString: lt };
function rr(r, n) {
  return w.isBefore(r, n.start) ? n : null;
}
function ft(r, n) {
  var a;
  return ((a = rr(r, n)) == null ? void 0 : a.start) ?? null;
}
function dt(r, n) {
  var a;
  return ((a = rr(r, n)) == null ? void 0 : a.end) ?? null;
}
function pt(r, n) {
  return le.containsTime(n, r) ? n.end : null;
}
function gt(r, n) {
  for (const a of r)
    if (le.containsNightTime(H(a), n))
      return !0;
  return !1;
}
function tr(r, n) {
  for (const a of r)
    if (le.containsTime(H(a), n))
      return !0;
  return !1;
}
function vt(r) {
  return tr(r, { hours: 23, minutes: 59 });
}
function ht(r, n) {
  for (const a of r) {
    const l = H(a), v = ft(w.fromDate(n), l);
    if (v)
      return v;
  }
  return null;
}
function yt(r, n) {
  for (const a of r) {
    const l = H(a), v = pt(w.fromDate(n), l);
    if (v)
      return v;
  }
  for (const a of r) {
    const l = H(a), v = dt(w.fromDate(n), l);
    if (v)
      return v;
  }
  return null;
}
const He = { isOpenAtNight: gt, nextClose: yt, nextOpen: ht, isOpenAtTheEndOfTheDay: vt, isOpenAt: tr }, mt = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], Ot = (r) => mt.includes(r);
function Ve(r, n) {
  var a, l;
  return ((a = r.exceptions) == null ? void 0 : a[ae(n, "yyyy-MM-dd")]) ?? ((l = r.exceptions) == null ? void 0 : l[ae(n, "MM-dd")]) ?? r[ae(n, "EEEE").toLowerCase()] ?? [];
}
function bt(r) {
  return nr(r, /* @__PURE__ */ new Date());
}
function kt(r) {
  return !bt(r);
}
function Ct(r, n) {
  return !nr(r, n);
}
function nr(r, n) {
  {
    const l = Hr(n, 1), v = Ve(r, l);
    if (He.isOpenAtNight(v, w.fromDate(l)))
      return !0;
  }
  const a = Ve(r, n);
  return He.isOpenAt(a, w.fromDate(n));
}
const xt = {
  useIsUserInputBlocked: Je,
  isUserInputBlocked: Jr,
  useBlockUserInput: Ge,
  useWrapPromise: Xr,
  blockingStarted: Gr,
  blockingStopped: Kr,
  View: zr
};
export {
  xt as BlockUserInput,
  wt as ScrollShadows,
  w as TimeMethods,
  le as TimeRangeMethods,
  mt as days,
  H as getTimeRangeOfOpeningHoursForDay,
  kt as isClosed,
  Ct as isClosedAt,
  Ot as isOfTypeDay,
  bt as isOpen,
  nr as isOpenAt
};
