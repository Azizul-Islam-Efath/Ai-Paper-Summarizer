const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Login-3pAhQGQL.js",
      "assets/index.esm-CtHTzye8.js",
      "assets/Input-CApCRiSe.js",
      "assets/Button-aWfo-XhU.js",
      "assets/Register-BlVimuW6.js",
      "assets/ForgotPassword-zRE89enD.js",
      "assets/ResetPassword-Cy2p-7Ye.js",
      "assets/Dashboard-PefI84hp.js",
      "assets/usePapers-B01LKt1j.js",
      "assets/paperService-BZQaPgim.js",
      "assets/EmptyState-Bdr6fCFb.js",
      "assets/Projects-Djngh-dS.js",
      "assets/projectService-DGqb61Ez.js",
      "assets/TextArea-BKR1Xe1W.js",
      "assets/Modal-BXTU8Nh-.js",
      "assets/SearchBar-BAo6HqGB.js",
      "assets/ProjectDetail-D44Dfyv-.js",
      "assets/Upload-B2KRoYFp.js",
      "assets/Papers-DV--tsjj.js",
      "assets/Profile-Czfczi03.js",
      "assets/Settings-DJQ6bz9B.js",
      "assets/SharedSummary-VlJt9WM1.js",
    ]),
) => i.map((i) => d[i]);
function X0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function Q0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var hp = { exports: {} },
  Lo = {},
  pp = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $i = Symbol.for("react.element"),
  Y0 = Symbol.for("react.portal"),
  J0 = Symbol.for("react.fragment"),
  Z0 = Symbol.for("react.strict_mode"),
  ev = Symbol.for("react.profiler"),
  tv = Symbol.for("react.provider"),
  nv = Symbol.for("react.context"),
  rv = Symbol.for("react.forward_ref"),
  iv = Symbol.for("react.suspense"),
  sv = Symbol.for("react.memo"),
  ov = Symbol.for("react.lazy"),
  pf = Symbol.iterator;
function av(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (pf && e[pf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var mp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  gp = Object.assign,
  yp = {};
function Lr(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = yp),
    (this.updater = n || mp));
}
Lr.prototype.isReactComponent = {};
Lr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Lr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vp() {}
vp.prototype = Lr.prototype;
function xu(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = yp),
    (this.updater = n || mp));
}
var Su = (xu.prototype = new vp());
Su.constructor = xu;
gp(Su, Lr.prototype);
Su.isPureReactComponent = !0;
var mf = Array.isArray,
  wp = Object.prototype.hasOwnProperty,
  Eu = { current: null },
  xp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sp(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      wp.call(t, r) && !xp.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: $i,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: Eu.current,
  };
}
function lv(e, t) {
  return {
    $$typeof: $i,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Pu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === $i;
}
function uv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var gf = /\/+/g;
function la(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? uv("" + e.key)
    : t.toString(36);
}
function _s(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case $i:
          case Y0:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + la(o, 0) : r),
      mf(i)
        ? ((n = ""),
          e != null && (n = e.replace(gf, "$&/") + "/"),
          _s(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Pu(i) &&
            (i = lv(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(gf, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), mf(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + la(s, a);
      o += _s(s, t, n, l, i);
    }
  else if (((l = av(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      ((s = s.value), (l = r + la(s, a++)), (o += _s(s, t, n, l, i)));
  else if (s === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return o;
}
function is(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    _s(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function cv(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Le = { current: null },
  As = { transition: null },
  fv = {
    ReactCurrentDispatcher: Le,
    ReactCurrentBatchConfig: As,
    ReactCurrentOwner: Eu,
  };
function Ep() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = {
  map: is,
  forEach: function (e, t, n) {
    is(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      is(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      is(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Pu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
B.Component = Lr;
B.Fragment = J0;
B.Profiler = ev;
B.PureComponent = xu;
B.StrictMode = Z0;
B.Suspense = iv;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fv;
B.act = Ep;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = gp({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = Eu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      wp.call(t, l) &&
        !xp.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: $i, type: e.type, key: i, ref: s, props: r, _owner: o };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: nv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: tv, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = Sp;
B.createFactory = function (e) {
  var t = Sp.bind(null, e);
  return ((t.type = e), t);
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: rv, render: e };
};
B.isValidElement = Pu;
B.lazy = function (e) {
  return { $$typeof: ov, _payload: { _status: -1, _result: e }, _init: cv };
};
B.memo = function (e, t) {
  return { $$typeof: sv, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = As.transition;
  As.transition = {};
  try {
    e();
  } finally {
    As.transition = t;
  }
};
B.unstable_act = Ep;
B.useCallback = function (e, t) {
  return Le.current.useCallback(e, t);
};
B.useContext = function (e) {
  return Le.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return Le.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return Le.current.useEffect(e, t);
};
B.useId = function () {
  return Le.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return Le.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return Le.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return Le.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return Le.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return Le.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return Le.current.useRef(e);
};
B.useState = function (e) {
  return Le.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return Le.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return Le.current.useTransition();
};
B.version = "18.3.1";
pp.exports = B;
var x = pp.exports;
const Pp = Q0(x),
  dv = X0({ __proto__: null, default: Pp }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hv = x,
  pv = Symbol.for("react.element"),
  mv = Symbol.for("react.fragment"),
  gv = Object.prototype.hasOwnProperty,
  yv = hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  vv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cp(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  (n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref));
  for (r in t) gv.call(t, r) && !vv.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: pv,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: yv.current,
  };
}
Lo.Fragment = mv;
Lo.jsx = Cp;
Lo.jsxs = Cp;
hp.exports = Lo;
var C = hp.exports,
  el = {},
  Tp = { exports: {} },
  Xe = {},
  kp = { exports: {} },
  Rp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(A, j) {
    var N = A.length;
    A.push(j);
    e: for (; 0 < N; ) {
      var I = (N - 1) >>> 1,
        H = A[I];
      if (0 < i(H, j)) ((A[I] = j), (A[N] = H), (N = I));
      else break e;
    }
  }
  function n(A) {
    return A.length === 0 ? null : A[0];
  }
  function r(A) {
    if (A.length === 0) return null;
    var j = A[0],
      N = A.pop();
    if (N !== j) {
      A[0] = N;
      e: for (var I = 0, H = A.length, ot = H >>> 1; I < ot; ) {
        var Ue = 2 * (I + 1) - 1,
          qn = A[Ue],
          b = Ue + 1,
          me = A[b];
        if (0 > i(qn, N))
          b < H && 0 > i(me, qn)
            ? ((A[I] = me), (A[b] = N), (I = b))
            : ((A[I] = qn), (A[Ue] = N), (I = Ue));
        else if (b < H && 0 > i(me, N)) ((A[I] = me), (A[b] = N), (I = b));
        else break e;
      }
    }
    return j;
  }
  function i(A, j) {
    var N = A.sortIndex - j.sortIndex;
    return N !== 0 ? N : A.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    y = !1,
    v = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(A) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= A)
        (r(u), (j.sortIndex = j.expirationTime), t(l, j));
      else break;
      j = n(u);
    }
  }
  function E(A) {
    if (((v = !1), m(A), !y))
      if (n(l) !== null) ((y = !0), yt(P));
      else {
        var j = n(u);
        j !== null && Q(E, j.startTime - A);
      }
  }
  function P(A, j) {
    ((y = !1), v && ((v = !1), h(k), (k = -1)), (g = !0));
    var N = d;
    try {
      for (
        m(j), f = n(l);
        f !== null && (!(f.expirationTime > j) || (A && !$()));
      ) {
        var I = f.callback;
        if (typeof I == "function") {
          ((f.callback = null), (d = f.priorityLevel));
          var H = I(f.expirationTime <= j);
          ((j = e.unstable_now()),
            typeof H == "function" ? (f.callback = H) : f === n(l) && r(l),
            m(j));
        } else r(l);
        f = n(l);
      }
      if (f !== null) var ot = !0;
      else {
        var Ue = n(u);
        (Ue !== null && Q(E, Ue.startTime - j), (ot = !1));
      }
      return ot;
    } finally {
      ((f = null), (d = N), (g = !1));
    }
  }
  var T = !1,
    _ = null,
    k = -1,
    V = 5,
    L = -1;
  function $() {
    return !(e.unstable_now() - L < V);
  }
  function be() {
    if (_ !== null) {
      var A = e.unstable_now();
      L = A;
      var j = !0;
      try {
        j = _(!0, A);
      } finally {
        j ? gt() : ((T = !1), (_ = null));
      }
    } else T = !1;
  }
  var gt;
  if (typeof p == "function")
    gt = function () {
      p(be);
    };
  else if (typeof MessageChannel < "u") {
    var Se = new MessageChannel(),
      En = Se.port2;
    ((Se.port1.onmessage = be),
      (gt = function () {
        En.postMessage(null);
      }));
  } else
    gt = function () {
      w(be, 0);
    };
  function yt(A) {
    ((_ = A), T || ((T = !0), gt()));
  }
  function Q(A, j) {
    k = w(function () {
      A(e.unstable_now());
    }, j);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (A) {
      A.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), yt(P));
    }),
    (e.unstable_forceFrameRate = function (A) {
      0 > A || 125 < A
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (V = 0 < A ? Math.floor(1e3 / A) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (A) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = d;
      }
      var N = d;
      d = j;
      try {
        return A();
      } finally {
        d = N;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (A, j) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var N = d;
      d = A;
      try {
        return j();
      } finally {
        d = N;
      }
    }),
    (e.unstable_scheduleCallback = function (A, j, N) {
      var I = e.unstable_now();
      switch (
        (typeof N == "object" && N !== null
          ? ((N = N.delay), (N = typeof N == "number" && 0 < N ? I + N : I))
          : (N = I),
        A)
      ) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return (
        (H = N + H),
        (A = {
          id: c++,
          callback: j,
          priorityLevel: A,
          startTime: N,
          expirationTime: H,
          sortIndex: -1,
        }),
        N > I
          ? ((A.sortIndex = N),
            t(u, A),
            n(l) === null &&
              A === n(u) &&
              (v ? (h(k), (k = -1)) : (v = !0), Q(E, N - I)))
          : ((A.sortIndex = H), t(l, A), y || g || ((y = !0), yt(P))),
        A
      );
    }),
    (e.unstable_shouldYield = $),
    (e.unstable_wrapCallback = function (A) {
      var j = d;
      return function () {
        var N = d;
        d = j;
        try {
          return A.apply(this, arguments);
        } finally {
          d = N;
        }
      };
    }));
})(Rp);
kp.exports = Rp;
var wv = kp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xv = x,
  Ge = wv;
function R(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var _p = new Set(),
  vi = {};
function Wn(e, t) {
  (xr(e, t), xr(e + "Capture", t));
}
function xr(e, t) {
  for (vi[e] = t, e = 0; e < t.length; e++) _p.add(t[e]);
}
var Vt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  tl = Object.prototype.hasOwnProperty,
  Sv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  yf = {},
  vf = {};
function Ev(e) {
  return tl.call(vf, e)
    ? !0
    : tl.call(yf, e)
      ? !1
      : Sv.test(e)
        ? (vf[e] = !0)
        : ((yf[e] = !0), !1);
}
function Pv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Cv(e, t, n, r) {
  if (t === null || typeof t > "u" || Pv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ne(e, t, n, r, i, s, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o));
}
var xe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new Ne(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  xe[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  xe[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  xe[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    xe[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  xe[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  xe[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  xe[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  xe[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cu = /[\-:]([a-z])/g;
function Tu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cu, Tu);
    xe[t] = new Ne(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Cu, Tu);
    xe[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Cu, Tu);
  xe[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  xe[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new Ne(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  xe[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ku(e, t, n, r) {
  var i = xe.hasOwnProperty(t) ? xe[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Cv(t, n, i, r) && (n = null),
    r || i === null
      ? Ev(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var zt = xv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ss = Symbol.for("react.element"),
  Yn = Symbol.for("react.portal"),
  Jn = Symbol.for("react.fragment"),
  Ru = Symbol.for("react.strict_mode"),
  nl = Symbol.for("react.profiler"),
  Ap = Symbol.for("react.provider"),
  Op = Symbol.for("react.context"),
  _u = Symbol.for("react.forward_ref"),
  rl = Symbol.for("react.suspense"),
  il = Symbol.for("react.suspense_list"),
  Au = Symbol.for("react.memo"),
  qt = Symbol.for("react.lazy"),
  Dp = Symbol.for("react.offscreen"),
  wf = Symbol.iterator;
function zr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (wf && e[wf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var te = Object.assign,
  ua;
function Jr(e) {
  if (ua === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ua = (t && t[1]) || "";
    }
  return (
    `
` +
    ua +
    e
  );
}
var ca = !1;
function fa(e, t) {
  if (!e || ca) return "";
  ca = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];
      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    ((ca = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? Jr(e) : "";
}
function Tv(e) {
  switch (e.tag) {
    case 5:
      return Jr(e.type);
    case 16:
      return Jr("Lazy");
    case 13:
      return Jr("Suspense");
    case 19:
      return Jr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = fa(e.type, !1)), e);
    case 11:
      return ((e = fa(e.type.render, !1)), e);
    case 1:
      return ((e = fa(e.type, !0)), e);
    default:
      return "";
  }
}
function sl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Jn:
      return "Fragment";
    case Yn:
      return "Portal";
    case nl:
      return "Profiler";
    case Ru:
      return "StrictMode";
    case rl:
      return "Suspense";
    case il:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Op:
        return (e.displayName || "Context") + ".Consumer";
      case Ap:
        return (e._context.displayName || "Context") + ".Provider";
      case _u:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Au:
        return (
          (t = e.displayName || null),
          t !== null ? t : sl(e.type) || "Memo"
        );
      case qt:
        ((t = e._payload), (e = e._init));
        try {
          return sl(e(t));
        } catch {}
    }
  return null;
}
function kv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return sl(t);
    case 8:
      return t === Ru ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function dn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Lp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Rv(e) {
  var t = Lp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          ((r = "" + o), s.call(this, o));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function os(e) {
  e._valueTracker || (e._valueTracker = Rv(e));
}
function Np(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Lp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Gs(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ol(e, t) {
  var n = t.checked;
  return te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function xf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = dn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function Mp(e, t) {
  ((t = t.checked), t != null && ku(e, "checked", t, !1));
}
function al(e, t) {
  Mp(e, t);
  var n = dn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? ll(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ll(e, t.type, dn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Sf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function ll(e, t, n) {
  (t !== "number" || Gs(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Zr = Array.isArray;
function pr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + dn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ul(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(R(91));
  return te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Ef(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(R(92));
      if (Zr(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: dn(n) };
}
function jp(e, t) {
  var n = dn(t.value),
    r = dn(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Pf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function cl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Vp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var as,
  Fp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        as = as || document.createElement("div"),
          as.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = as.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function wi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var si = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  _v = ["Webkit", "ms", "Moz", "O"];
Object.keys(si).forEach(function (e) {
  _v.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (si[t] = si[e]));
  });
});
function Ip(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (si.hasOwnProperty(e) && si[e])
      ? ("" + t).trim()
      : t + "px";
}
function Bp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Ip(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var Av = te(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function fl(e, t) {
  if (t) {
    if (Av[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(R(62));
  }
}
function dl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var hl = null;
function Ou(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var pl = null,
  mr = null,
  gr = null;
function Cf(e) {
  if ((e = Ki(e))) {
    if (typeof pl != "function") throw Error(R(280));
    var t = e.stateNode;
    t && ((t = Fo(t)), pl(e.stateNode, e.type, t));
  }
}
function bp(e) {
  mr ? (gr ? gr.push(e) : (gr = [e])) : (mr = e);
}
function Up() {
  if (mr) {
    var e = mr,
      t = gr;
    if (((gr = mr = null), Cf(e), t)) for (e = 0; e < t.length; e++) Cf(t[e]);
  }
}
function zp(e, t) {
  return e(t);
}
function $p() {}
var da = !1;
function Hp(e, t, n) {
  if (da) return e(t, n);
  da = !0;
  try {
    return zp(e, t, n);
  } finally {
    ((da = !1), (mr !== null || gr !== null) && ($p(), Up()));
  }
}
function xi(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(R(231, t, typeof n));
  return n;
}
var ml = !1;
if (Vt)
  try {
    var $r = {};
    (Object.defineProperty($r, "passive", {
      get: function () {
        ml = !0;
      },
    }),
      window.addEventListener("test", $r, $r),
      window.removeEventListener("test", $r, $r));
  } catch {
    ml = !1;
  }
function Ov(e, t, n, r, i, s, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var oi = !1,
  qs = null,
  Xs = !1,
  gl = null,
  Dv = {
    onError: function (e) {
      ((oi = !0), (qs = e));
    },
  };
function Lv(e, t, n, r, i, s, o, a, l) {
  ((oi = !1), (qs = null), Ov.apply(Dv, arguments));
}
function Nv(e, t, n, r, i, s, o, a, l) {
  if ((Lv.apply(this, arguments), oi)) {
    if (oi) {
      var u = qs;
      ((oi = !1), (qs = null));
    } else throw Error(R(198));
    Xs || ((Xs = !0), (gl = u));
  }
}
function Kn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Wp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Tf(e) {
  if (Kn(e) !== e) throw Error(R(188));
}
function Mv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Kn(e)), t === null)) throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return (Tf(i), e);
        if (s === r) return (Tf(i), t);
        s = s.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) ((n = i), (r = s));
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          ((o = !0), (n = i), (r = s));
          break;
        }
        if (a === r) {
          ((o = !0), (r = i), (n = s));
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            ((o = !0), (n = s), (r = i));
            break;
          }
          if (a === r) {
            ((o = !0), (r = s), (n = i));
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function Kp(e) {
  return ((e = Mv(e)), e !== null ? Gp(e) : null);
}
function Gp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Gp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var qp = Ge.unstable_scheduleCallback,
  kf = Ge.unstable_cancelCallback,
  jv = Ge.unstable_shouldYield,
  Vv = Ge.unstable_requestPaint,
  oe = Ge.unstable_now,
  Fv = Ge.unstable_getCurrentPriorityLevel,
  Du = Ge.unstable_ImmediatePriority,
  Xp = Ge.unstable_UserBlockingPriority,
  Qs = Ge.unstable_NormalPriority,
  Iv = Ge.unstable_LowPriority,
  Qp = Ge.unstable_IdlePriority,
  No = null,
  Et = null;
function Bv(e) {
  if (Et && typeof Et.onCommitFiberRoot == "function")
    try {
      Et.onCommitFiberRoot(No, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var dt = Math.clz32 ? Math.clz32 : zv,
  bv = Math.log,
  Uv = Math.LN2;
function zv(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((bv(e) / Uv) | 0)) | 0);
}
var ls = 64,
  us = 4194304;
function ei(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ys(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = ei(a)) : ((s &= o), s !== 0 && (r = ei(s)));
  } else ((o = n & ~i), o !== 0 ? (r = ei(o)) : s !== 0 && (r = ei(s)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - dt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function $v(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Hv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;
  ) {
    var o = 31 - dt(s),
      a = 1 << o,
      l = i[o];
    (l === -1
      ? (!(a & n) || a & r) && (i[o] = $v(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a));
  }
}
function yl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Yp() {
  var e = ls;
  return ((ls <<= 1), !(ls & 4194240) && (ls = 64), e);
}
function ha(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Hi(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - dt(t)),
    (e[t] = n));
}
function Wv(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - dt(n),
      s = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s));
  }
}
function Lu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - dt(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var z = 0;
function Jp(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var Zp,
  Nu,
  em,
  tm,
  nm,
  vl = !1,
  cs = [],
  nn = null,
  rn = null,
  sn = null,
  Si = new Map(),
  Ei = new Map(),
  Qt = [],
  Kv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Rf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      nn = null;
      break;
    case "dragenter":
    case "dragleave":
      rn = null;
      break;
    case "mouseover":
    case "mouseout":
      sn = null;
      break;
    case "pointerover":
    case "pointerout":
      Si.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ei.delete(t.pointerId);
  }
}
function Hr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Ki(t)), t !== null && Nu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Gv(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ((nn = Hr(nn, e, t, n, r, i)), !0);
    case "dragenter":
      return ((rn = Hr(rn, e, t, n, r, i)), !0);
    case "mouseover":
      return ((sn = Hr(sn, e, t, n, r, i)), !0);
    case "pointerover":
      var s = i.pointerId;
      return (Si.set(s, Hr(Si.get(s) || null, e, t, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (s = i.pointerId),
        Ei.set(s, Hr(Ei.get(s) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function rm(e) {
  var t = An(e.target);
  if (t !== null) {
    var n = Kn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Wp(n)), t !== null)) {
          ((e.blockedOn = t),
            nm(e.priority, function () {
              em(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Os(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = wl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((hl = r), n.target.dispatchEvent(r), (hl = null));
    } else return ((t = Ki(n)), t !== null && Nu(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function _f(e, t, n) {
  Os(e) && n.delete(t);
}
function qv() {
  ((vl = !1),
    nn !== null && Os(nn) && (nn = null),
    rn !== null && Os(rn) && (rn = null),
    sn !== null && Os(sn) && (sn = null),
    Si.forEach(_f),
    Ei.forEach(_f));
}
function Wr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    vl ||
      ((vl = !0),
      Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, qv)));
}
function Pi(e) {
  function t(i) {
    return Wr(i, e);
  }
  if (0 < cs.length) {
    Wr(cs[0], e);
    for (var n = 1; n < cs.length; n++) {
      var r = cs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    nn !== null && Wr(nn, e),
      rn !== null && Wr(rn, e),
      sn !== null && Wr(sn, e),
      Si.forEach(t),
      Ei.forEach(t),
      n = 0;
    n < Qt.length;
    n++
  )
    ((r = Qt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < Qt.length && ((n = Qt[0]), n.blockedOn === null); )
    (rm(n), n.blockedOn === null && Qt.shift());
}
var yr = zt.ReactCurrentBatchConfig,
  Js = !0;
function Xv(e, t, n, r) {
  var i = z,
    s = yr.transition;
  yr.transition = null;
  try {
    ((z = 1), Mu(e, t, n, r));
  } finally {
    ((z = i), (yr.transition = s));
  }
}
function Qv(e, t, n, r) {
  var i = z,
    s = yr.transition;
  yr.transition = null;
  try {
    ((z = 4), Mu(e, t, n, r));
  } finally {
    ((z = i), (yr.transition = s));
  }
}
function Mu(e, t, n, r) {
  if (Js) {
    var i = wl(e, t, n, r);
    if (i === null) (Pa(e, t, r, Zs, n), Rf(e, r));
    else if (Gv(i, e, t, n, r)) r.stopPropagation();
    else if ((Rf(e, r), t & 4 && -1 < Kv.indexOf(e))) {
      for (; i !== null; ) {
        var s = Ki(i);
        if (
          (s !== null && Zp(s),
          (s = wl(e, t, n, r)),
          s === null && Pa(e, t, r, Zs, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Pa(e, t, r, null, n);
  }
}
var Zs = null;
function wl(e, t, n, r) {
  if (((Zs = null), (e = Ou(r)), (e = An(e)), e !== null))
    if (((t = Kn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Wp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((Zs = e), null);
}
function im(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Fv()) {
        case Du:
          return 1;
        case Xp:
          return 4;
        case Qs:
        case Iv:
          return 16;
        case Qp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Zt = null,
  ju = null,
  Ds = null;
function sm() {
  if (Ds) return Ds;
  var e,
    t = ju,
    n = t.length,
    r,
    i = "value" in Zt ? Zt.value : Zt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Ds = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ls(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function fs() {
  return !0;
}
function Af() {
  return !1;
}
function Qe(e) {
  function t(n, r, i, s, o) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? fs
        : Af),
      (this.isPropagationStopped = Af),
      this
    );
  }
  return (
    te(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = fs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = fs));
      },
      persist: function () {},
      isPersistent: fs,
    }),
    t
  );
}
var Nr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Vu = Qe(Nr),
  Wi = te({}, Nr, { view: 0, detail: 0 }),
  Yv = Qe(Wi),
  pa,
  ma,
  Kr,
  Mo = te({}, Wi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Fu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Kr &&
            (Kr && e.type === "mousemove"
              ? ((pa = e.screenX - Kr.screenX), (ma = e.screenY - Kr.screenY))
              : (ma = pa = 0),
            (Kr = e)),
          pa);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ma;
    },
  }),
  Of = Qe(Mo),
  Jv = te({}, Mo, { dataTransfer: 0 }),
  Zv = Qe(Jv),
  e1 = te({}, Wi, { relatedTarget: 0 }),
  ga = Qe(e1),
  t1 = te({}, Nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  n1 = Qe(t1),
  r1 = te({}, Nr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  i1 = Qe(r1),
  s1 = te({}, Nr, { data: 0 }),
  Df = Qe(s1),
  o1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  a1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  l1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function u1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = l1[e]) ? !!t[e] : !1;
}
function Fu() {
  return u1;
}
var c1 = te({}, Wi, {
    key: function (e) {
      if (e.key) {
        var t = o1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ls(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? a1[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fu,
    charCode: function (e) {
      return e.type === "keypress" ? Ls(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ls(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  f1 = Qe(c1),
  d1 = te({}, Mo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Lf = Qe(d1),
  h1 = te({}, Wi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fu,
  }),
  p1 = Qe(h1),
  m1 = te({}, Nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  g1 = Qe(m1),
  y1 = te({}, Mo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  v1 = Qe(y1),
  w1 = [9, 13, 27, 32],
  Iu = Vt && "CompositionEvent" in window,
  ai = null;
Vt && "documentMode" in document && (ai = document.documentMode);
var x1 = Vt && "TextEvent" in window && !ai,
  om = Vt && (!Iu || (ai && 8 < ai && 11 >= ai)),
  Nf = " ",
  Mf = !1;
function am(e, t) {
  switch (e) {
    case "keyup":
      return w1.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function lm(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Zn = !1;
function S1(e, t) {
  switch (e) {
    case "compositionend":
      return lm(t);
    case "keypress":
      return t.which !== 32 ? null : ((Mf = !0), Nf);
    case "textInput":
      return ((e = t.data), e === Nf && Mf ? null : e);
    default:
      return null;
  }
}
function E1(e, t) {
  if (Zn)
    return e === "compositionend" || (!Iu && am(e, t))
      ? ((e = sm()), (Ds = ju = Zt = null), (Zn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return om && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var P1 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function jf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!P1[e.type] : t === "textarea";
}
function um(e, t, n, r) {
  (bp(r),
    (t = eo(t, "onChange")),
    0 < t.length &&
      ((n = new Vu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var li = null,
  Ci = null;
function C1(e) {
  xm(e, 0);
}
function jo(e) {
  var t = nr(e);
  if (Np(t)) return e;
}
function T1(e, t) {
  if (e === "change") return t;
}
var cm = !1;
if (Vt) {
  var ya;
  if (Vt) {
    var va = "oninput" in document;
    if (!va) {
      var Vf = document.createElement("div");
      (Vf.setAttribute("oninput", "return;"),
        (va = typeof Vf.oninput == "function"));
    }
    ya = va;
  } else ya = !1;
  cm = ya && (!document.documentMode || 9 < document.documentMode);
}
function Ff() {
  li && (li.detachEvent("onpropertychange", fm), (Ci = li = null));
}
function fm(e) {
  if (e.propertyName === "value" && jo(Ci)) {
    var t = [];
    (um(t, Ci, e, Ou(e)), Hp(C1, t));
  }
}
function k1(e, t, n) {
  e === "focusin"
    ? (Ff(), (li = t), (Ci = n), li.attachEvent("onpropertychange", fm))
    : e === "focusout" && Ff();
}
function R1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return jo(Ci);
}
function _1(e, t) {
  if (e === "click") return jo(t);
}
function A1(e, t) {
  if (e === "input" || e === "change") return jo(t);
}
function O1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var pt = typeof Object.is == "function" ? Object.is : O1;
function Ti(e, t) {
  if (pt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!tl.call(t, i) || !pt(e[i], t[i])) return !1;
  }
  return !0;
}
function If(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Bf(e, t) {
  var n = If(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = If(n);
  }
}
function dm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? dm(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function hm() {
  for (var e = window, t = Gs(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Gs(e.document);
  }
  return t;
}
function Bu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function D1(e) {
  var t = hm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    dm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Bu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        ((r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Bf(n, s)));
        var o = Bf(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var L1 = Vt && "documentMode" in document && 11 >= document.documentMode,
  er = null,
  xl = null,
  ui = null,
  Sl = !1;
function bf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Sl ||
    er == null ||
    er !== Gs(r) ||
    ((r = er),
    "selectionStart" in r && Bu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ui && Ti(ui, r)) ||
      ((ui = r),
      (r = eo(xl, "onSelect")),
      0 < r.length &&
        ((t = new Vu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = er))));
}
function ds(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var tr = {
    animationend: ds("Animation", "AnimationEnd"),
    animationiteration: ds("Animation", "AnimationIteration"),
    animationstart: ds("Animation", "AnimationStart"),
    transitionend: ds("Transition", "TransitionEnd"),
  },
  wa = {},
  pm = {};
Vt &&
  ((pm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete tr.animationend.animation,
    delete tr.animationiteration.animation,
    delete tr.animationstart.animation),
  "TransitionEvent" in window || delete tr.transitionend.transition);
function Vo(e) {
  if (wa[e]) return wa[e];
  if (!tr[e]) return e;
  var t = tr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in pm) return (wa[e] = t[n]);
  return e;
}
var mm = Vo("animationend"),
  gm = Vo("animationiteration"),
  ym = Vo("animationstart"),
  vm = Vo("transitionend"),
  wm = new Map(),
  Uf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function gn(e, t) {
  (wm.set(e, t), Wn(t, [e]));
}
for (var xa = 0; xa < Uf.length; xa++) {
  var Sa = Uf[xa],
    N1 = Sa.toLowerCase(),
    M1 = Sa[0].toUpperCase() + Sa.slice(1);
  gn(N1, "on" + M1);
}
gn(mm, "onAnimationEnd");
gn(gm, "onAnimationIteration");
gn(ym, "onAnimationStart");
gn("dblclick", "onDoubleClick");
gn("focusin", "onFocus");
gn("focusout", "onBlur");
gn(vm, "onTransitionEnd");
xr("onMouseEnter", ["mouseout", "mouseover"]);
xr("onMouseLeave", ["mouseout", "mouseover"]);
xr("onPointerEnter", ["pointerout", "pointerover"]);
xr("onPointerLeave", ["pointerout", "pointerover"]);
Wn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Wn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Wn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Wn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Wn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var ti =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  j1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(ti));
function zf(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Nv(r, t, void 0, e), (e.currentTarget = null));
}
function xm(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          (zf(i, a, u), (s = l));
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          (zf(i, a, u), (s = l));
        }
    }
  }
  if (Xs) throw ((e = gl), (Xs = !1), (gl = null), e);
}
function K(e, t) {
  var n = t[kl];
  n === void 0 && (n = t[kl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Sm(t, e, 2, !1), n.add(r));
}
function Ea(e, t, n) {
  var r = 0;
  (t && (r |= 4), Sm(n, e, r, t));
}
var hs = "_reactListening" + Math.random().toString(36).slice(2);
function ki(e) {
  if (!e[hs]) {
    ((e[hs] = !0),
      _p.forEach(function (n) {
        n !== "selectionchange" && (j1.has(n) || Ea(n, !1, e), Ea(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[hs] || ((t[hs] = !0), Ea("selectionchange", !1, t));
  }
}
function Sm(e, t, n, r) {
  switch (im(t)) {
    case 1:
      var i = Xv;
      break;
    case 4:
      i = Qv;
      break;
    default:
      i = Mu;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !ml ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function Pa(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = An(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Hp(function () {
    var u = s,
      c = Ou(n),
      f = [];
    e: {
      var d = wm.get(e);
      if (d !== void 0) {
        var g = Vu,
          y = e;
        switch (e) {
          case "keypress":
            if (Ls(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = f1;
            break;
          case "focusin":
            ((y = "focus"), (g = ga));
            break;
          case "focusout":
            ((y = "blur"), (g = ga));
            break;
          case "beforeblur":
          case "afterblur":
            g = ga;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Of;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Zv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = p1;
            break;
          case mm:
          case gm:
          case ym:
            g = n1;
            break;
          case vm:
            g = g1;
            break;
          case "scroll":
            g = Yv;
            break;
          case "wheel":
            g = v1;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = i1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Lf;
        }
        var v = (t & 4) !== 0,
          w = !v && e === "scroll",
          h = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var p = u, m; p !== null; ) {
          m = p;
          var E = m.stateNode;
          if (
            (m.tag === 5 &&
              E !== null &&
              ((m = E),
              h !== null && ((E = xi(p, h)), E != null && v.push(Ri(p, E, m)))),
            w)
          )
            break;
          p = p.return;
        }
        0 < v.length &&
          ((d = new g(d, y, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== hl &&
            (y = n.relatedTarget || n.fromElement) &&
            (An(y) || y[Ft]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? An(y) : null),
              y !== null &&
                ((w = Kn(y)), y !== w || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((v = Of),
            (E = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Lf),
              (E = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (w = g == null ? d : nr(g)),
            (m = y == null ? d : nr(y)),
            (d = new v(E, p + "leave", g, n, c)),
            (d.target = w),
            (d.relatedTarget = m),
            (E = null),
            An(c) === u &&
              ((v = new v(h, p + "enter", y, n, c)),
              (v.target = m),
              (v.relatedTarget = w),
              (E = v)),
            (w = E),
            g && y)
          )
            t: {
              for (v = g, h = y, p = 0, m = v; m; m = Xn(m)) p++;
              for (m = 0, E = h; E; E = Xn(E)) m++;
              for (; 0 < p - m; ) ((v = Xn(v)), p--);
              for (; 0 < m - p; ) ((h = Xn(h)), m--);
              for (; p--; ) {
                if (v === h || (h !== null && v === h.alternate)) break t;
                ((v = Xn(v)), (h = Xn(h)));
              }
              v = null;
            }
          else v = null;
          (g !== null && $f(f, d, g, v, !1),
            y !== null && w !== null && $f(f, w, y, v, !0));
        }
      }
      e: {
        if (
          ((d = u ? nr(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var P = T1;
        else if (jf(d))
          if (cm) P = A1;
          else {
            P = R1;
            var T = k1;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (P = _1);
        if (P && (P = P(e, u))) {
          um(f, P, n, c);
          break e;
        }
        (T && T(e, d, u),
          e === "focusout" &&
            (T = d._wrapperState) &&
            T.controlled &&
            d.type === "number" &&
            ll(d, "number", d.value));
      }
      switch (((T = u ? nr(u) : window), e)) {
        case "focusin":
          (jf(T) || T.contentEditable === "true") &&
            ((er = T), (xl = u), (ui = null));
          break;
        case "focusout":
          ui = xl = er = null;
          break;
        case "mousedown":
          Sl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Sl = !1), bf(f, n, c));
          break;
        case "selectionchange":
          if (L1) break;
        case "keydown":
        case "keyup":
          bf(f, n, c);
      }
      var _;
      if (Iu)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Zn
          ? am(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      (k &&
        (om &&
          n.locale !== "ko" &&
          (Zn || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Zn && (_ = sm())
            : ((Zt = c),
              (ju = "value" in Zt ? Zt.value : Zt.textContent),
              (Zn = !0))),
        (T = eo(u, k)),
        0 < T.length &&
          ((k = new Df(k, e, null, n, c)),
          f.push({ event: k, listeners: T }),
          _ ? (k.data = _) : ((_ = lm(n)), _ !== null && (k.data = _)))),
        (_ = x1 ? S1(e, n) : E1(e, n)) &&
          ((u = eo(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Df("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = _))));
    }
    xm(f, t);
  });
}
function Ri(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function eo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    (i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = xi(e, n)),
      s != null && r.unshift(Ri(e, s, i)),
      (s = xi(e, t)),
      s != null && r.push(Ri(e, s, i))),
      (e = e.return));
  }
  return r;
}
function Xn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function $f(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = xi(n, s)), l != null && o.unshift(Ri(n, l, a)))
        : i || ((l = xi(n, s)), l != null && o.push(Ri(n, l, a)))),
      (n = n.return));
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var V1 = /\r\n?/g,
  F1 = /\u0000|\uFFFD/g;
function Hf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      V1,
      `
`,
    )
    .replace(F1, "");
}
function ps(e, t, n) {
  if (((t = Hf(t)), Hf(e) !== t && n)) throw Error(R(425));
}
function to() {}
var El = null,
  Pl = null;
function Cl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Tl = typeof setTimeout == "function" ? setTimeout : void 0,
  I1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Wf = typeof Promise == "function" ? Promise : void 0,
  B1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Wf < "u"
        ? function (e) {
            return Wf.resolve(null).then(e).catch(b1);
          }
        : Tl;
function b1(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ca(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(i), Pi(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Pi(t);
}
function on(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Kf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Mr = Math.random().toString(36).slice(2),
  xt = "__reactFiber$" + Mr,
  _i = "__reactProps$" + Mr,
  Ft = "__reactContainer$" + Mr,
  kl = "__reactEvents$" + Mr,
  U1 = "__reactListeners$" + Mr,
  z1 = "__reactHandles$" + Mr;
function An(e) {
  var t = e[xt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ft] || n[xt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Kf(e); e !== null; ) {
          if ((n = e[xt])) return n;
          e = Kf(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Ki(e) {
  return (
    (e = e[xt] || e[Ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function nr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(R(33));
}
function Fo(e) {
  return e[_i] || null;
}
var Rl = [],
  rr = -1;
function yn(e) {
  return { current: e };
}
function G(e) {
  0 > rr || ((e.current = Rl[rr]), (Rl[rr] = null), rr--);
}
function W(e, t) {
  (rr++, (Rl[rr] = e.current), (e.current = t));
}
var hn = {},
  Ae = yn(hn),
  Ve = yn(!1),
  In = hn;
function Sr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return hn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Fe(e) {
  return ((e = e.childContextTypes), e != null);
}
function no() {
  (G(Ve), G(Ae));
}
function Gf(e, t, n) {
  if (Ae.current !== hn) throw Error(R(168));
  (W(Ae, t), W(Ve, n));
}
function Em(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(R(108, kv(e) || "Unknown", i));
  return te({}, n, r);
}
function ro(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || hn),
    (In = Ae.current),
    W(Ae, e),
    W(Ve, Ve.current),
    !0
  );
}
function qf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  (n
    ? ((e = Em(e, t, In)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      G(Ve),
      G(Ae),
      W(Ae, e))
    : G(Ve),
    W(Ve, n));
}
var Ot = null,
  Io = !1,
  Ta = !1;
function Pm(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
function $1(e) {
  ((Io = !0), Pm(e));
}
function vn() {
  if (!Ta && Ot !== null) {
    Ta = !0;
    var e = 0,
      t = z;
    try {
      var n = Ot;
      for (z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Ot = null), (Io = !1));
    } catch (i) {
      throw (Ot !== null && (Ot = Ot.slice(e + 1)), qp(Du, vn), i);
    } finally {
      ((z = t), (Ta = !1));
    }
  }
  return null;
}
var ir = [],
  sr = 0,
  io = null,
  so = 0,
  et = [],
  tt = 0,
  Bn = null,
  Dt = 1,
  Lt = "";
function Tn(e, t) {
  ((ir[sr++] = so), (ir[sr++] = io), (io = e), (so = t));
}
function Cm(e, t, n) {
  ((et[tt++] = Dt), (et[tt++] = Lt), (et[tt++] = Bn), (Bn = e));
  var r = Dt;
  e = Lt;
  var i = 32 - dt(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var s = 32 - dt(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    ((s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Dt = (1 << (32 - dt(t) + i)) | (n << i) | r),
      (Lt = s + e));
  } else ((Dt = (1 << s) | (n << i) | r), (Lt = e));
}
function bu(e) {
  e.return !== null && (Tn(e, 1), Cm(e, 1, 0));
}
function Uu(e) {
  for (; e === io; )
    ((io = ir[--sr]), (ir[sr] = null), (so = ir[--sr]), (ir[sr] = null));
  for (; e === Bn; )
    ((Bn = et[--tt]),
      (et[tt] = null),
      (Lt = et[--tt]),
      (et[tt] = null),
      (Dt = et[--tt]),
      (et[tt] = null));
}
var We = null,
  He = null,
  X = !1,
  ft = null;
function Tm(e, t) {
  var n = nt(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Xf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (We = e), (He = on(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (We = e), (He = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Bn !== null ? { id: Dt, overflow: Lt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = nt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (We = e),
            (He = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function _l(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Al(e) {
  if (X) {
    var t = He;
    if (t) {
      var n = t;
      if (!Xf(e, t)) {
        if (_l(e)) throw Error(R(418));
        t = on(n.nextSibling);
        var r = We;
        t && Xf(e, t)
          ? Tm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (X = !1), (We = e));
      }
    } else {
      if (_l(e)) throw Error(R(418));
      ((e.flags = (e.flags & -4097) | 2), (X = !1), (We = e));
    }
  }
}
function Qf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  We = e;
}
function ms(e) {
  if (e !== We) return !1;
  if (!X) return (Qf(e), (X = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Cl(e.type, e.memoizedProps))),
    t && (t = He))
  ) {
    if (_l(e)) throw (km(), Error(R(418)));
    for (; t; ) (Tm(e, t), (t = on(t.nextSibling)));
  }
  if ((Qf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              He = on(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      He = null;
    }
  } else He = We ? on(e.stateNode.nextSibling) : null;
  return !0;
}
function km() {
  for (var e = He; e; ) e = on(e.nextSibling);
}
function Er() {
  ((He = We = null), (X = !1));
}
function zu(e) {
  ft === null ? (ft = [e]) : ft.push(e);
}
var H1 = zt.ReactCurrentBatchConfig;
function Gr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function gs(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function Yf(e) {
  var t = e._init;
  return t(e._payload);
}
function Rm(e) {
  function t(h, p) {
    if (e) {
      var m = h.deletions;
      m === null ? ((h.deletions = [p]), (h.flags |= 16)) : m.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) (t(h, p), (p = p.sibling));
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; )
      (p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling));
    return h;
  }
  function i(h, p) {
    return ((h = cn(h, p)), (h.index = 0), (h.sibling = null), h);
  }
  function s(h, p, m) {
    return (
      (h.index = m),
      e
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((h.flags |= 2), p) : m)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function o(h) {
    return (e && h.alternate === null && (h.flags |= 2), h);
  }
  function a(h, p, m, E) {
    return p === null || p.tag !== 6
      ? ((p = La(m, h.mode, E)), (p.return = h), p)
      : ((p = i(p, m)), (p.return = h), p);
  }
  function l(h, p, m, E) {
    var P = m.type;
    return P === Jn
      ? c(h, p, m.props.children, E, m.key)
      : p !== null &&
          (p.elementType === P ||
            (typeof P == "object" &&
              P !== null &&
              P.$$typeof === qt &&
              Yf(P) === p.type))
        ? ((E = i(p, m.props)), (E.ref = Gr(h, p, m)), (E.return = h), E)
        : ((E = Bs(m.type, m.key, m.props, null, h.mode, E)),
          (E.ref = Gr(h, p, m)),
          (E.return = h),
          E);
  }
  function u(h, p, m, E) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = Na(m, h.mode, E)), (p.return = h), p)
      : ((p = i(p, m.children || [])), (p.return = h), p);
  }
  function c(h, p, m, E, P) {
    return p === null || p.tag !== 7
      ? ((p = jn(m, h.mode, E, P)), (p.return = h), p)
      : ((p = i(p, m)), (p.return = h), p);
  }
  function f(h, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return ((p = La("" + p, h.mode, m)), (p.return = h), p);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ss:
          return (
            (m = Bs(p.type, p.key, p.props, null, h.mode, m)),
            (m.ref = Gr(h, null, p)),
            (m.return = h),
            m
          );
        case Yn:
          return ((p = Na(p, h.mode, m)), (p.return = h), p);
        case qt:
          var E = p._init;
          return f(h, E(p._payload), m);
      }
      if (Zr(p) || zr(p))
        return ((p = jn(p, h.mode, m, null)), (p.return = h), p);
      gs(h, p);
    }
    return null;
  }
  function d(h, p, m, E) {
    var P = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return P !== null ? null : a(h, p, "" + m, E);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ss:
          return m.key === P ? l(h, p, m, E) : null;
        case Yn:
          return m.key === P ? u(h, p, m, E) : null;
        case qt:
          return ((P = m._init), d(h, p, P(m._payload), E));
      }
      if (Zr(m) || zr(m)) return P !== null ? null : c(h, p, m, E, null);
      gs(h, m);
    }
    return null;
  }
  function g(h, p, m, E, P) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return ((h = h.get(m) || null), a(p, h, "" + E, P));
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case ss:
          return (
            (h = h.get(E.key === null ? m : E.key) || null),
            l(p, h, E, P)
          );
        case Yn:
          return (
            (h = h.get(E.key === null ? m : E.key) || null),
            u(p, h, E, P)
          );
        case qt:
          var T = E._init;
          return g(h, p, m, T(E._payload), P);
      }
      if (Zr(E) || zr(E)) return ((h = h.get(m) || null), c(p, h, E, P, null));
      gs(p, E);
    }
    return null;
  }
  function y(h, p, m, E) {
    for (
      var P = null, T = null, _ = p, k = (p = 0), V = null;
      _ !== null && k < m.length;
      k++
    ) {
      _.index > k ? ((V = _), (_ = null)) : (V = _.sibling);
      var L = d(h, _, m[k], E);
      if (L === null) {
        _ === null && (_ = V);
        break;
      }
      (e && _ && L.alternate === null && t(h, _),
        (p = s(L, p, k)),
        T === null ? (P = L) : (T.sibling = L),
        (T = L),
        (_ = V));
    }
    if (k === m.length) return (n(h, _), X && Tn(h, k), P);
    if (_ === null) {
      for (; k < m.length; k++)
        ((_ = f(h, m[k], E)),
          _ !== null &&
            ((p = s(_, p, k)),
            T === null ? (P = _) : (T.sibling = _),
            (T = _)));
      return (X && Tn(h, k), P);
    }
    for (_ = r(h, _); k < m.length; k++)
      ((V = g(_, h, k, m[k], E)),
        V !== null &&
          (e && V.alternate !== null && _.delete(V.key === null ? k : V.key),
          (p = s(V, p, k)),
          T === null ? (P = V) : (T.sibling = V),
          (T = V)));
    return (
      e &&
        _.forEach(function ($) {
          return t(h, $);
        }),
      X && Tn(h, k),
      P
    );
  }
  function v(h, p, m, E) {
    var P = zr(m);
    if (typeof P != "function") throw Error(R(150));
    if (((m = P.call(m)), m == null)) throw Error(R(151));
    for (
      var T = (P = null), _ = p, k = (p = 0), V = null, L = m.next();
      _ !== null && !L.done;
      k++, L = m.next()
    ) {
      _.index > k ? ((V = _), (_ = null)) : (V = _.sibling);
      var $ = d(h, _, L.value, E);
      if ($ === null) {
        _ === null && (_ = V);
        break;
      }
      (e && _ && $.alternate === null && t(h, _),
        (p = s($, p, k)),
        T === null ? (P = $) : (T.sibling = $),
        (T = $),
        (_ = V));
    }
    if (L.done) return (n(h, _), X && Tn(h, k), P);
    if (_ === null) {
      for (; !L.done; k++, L = m.next())
        ((L = f(h, L.value, E)),
          L !== null &&
            ((p = s(L, p, k)),
            T === null ? (P = L) : (T.sibling = L),
            (T = L)));
      return (X && Tn(h, k), P);
    }
    for (_ = r(h, _); !L.done; k++, L = m.next())
      ((L = g(_, h, k, L.value, E)),
        L !== null &&
          (e && L.alternate !== null && _.delete(L.key === null ? k : L.key),
          (p = s(L, p, k)),
          T === null ? (P = L) : (T.sibling = L),
          (T = L)));
    return (
      e &&
        _.forEach(function (be) {
          return t(h, be);
        }),
      X && Tn(h, k),
      P
    );
  }
  function w(h, p, m, E) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Jn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case ss:
          e: {
            for (var P = m.key, T = p; T !== null; ) {
              if (T.key === P) {
                if (((P = m.type), P === Jn)) {
                  if (T.tag === 7) {
                    (n(h, T.sibling),
                      (p = i(T, m.props.children)),
                      (p.return = h),
                      (h = p));
                    break e;
                  }
                } else if (
                  T.elementType === P ||
                  (typeof P == "object" &&
                    P !== null &&
                    P.$$typeof === qt &&
                    Yf(P) === T.type)
                ) {
                  (n(h, T.sibling),
                    (p = i(T, m.props)),
                    (p.ref = Gr(h, T, m)),
                    (p.return = h),
                    (h = p));
                  break e;
                }
                n(h, T);
                break;
              } else t(h, T);
              T = T.sibling;
            }
            m.type === Jn
              ? ((p = jn(m.props.children, h.mode, E, m.key)),
                (p.return = h),
                (h = p))
              : ((E = Bs(m.type, m.key, m.props, null, h.mode, E)),
                (E.ref = Gr(h, p, m)),
                (E.return = h),
                (h = E));
          }
          return o(h);
        case Yn:
          e: {
            for (T = m.key; p !== null; ) {
              if (p.key === T)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  (n(h, p.sibling),
                    (p = i(p, m.children || [])),
                    (p.return = h),
                    (h = p));
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            ((p = Na(m, h.mode, E)), (p.return = h), (h = p));
          }
          return o(h);
        case qt:
          return ((T = m._init), w(h, p, T(m._payload), E));
      }
      if (Zr(m)) return y(h, p, m, E);
      if (zr(m)) return v(h, p, m, E);
      gs(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = i(p, m)), (p.return = h), (h = p))
          : (n(h, p), (p = La(m, h.mode, E)), (p.return = h), (h = p)),
        o(h))
      : n(h, p);
  }
  return w;
}
var Pr = Rm(!0),
  _m = Rm(!1),
  oo = yn(null),
  ao = null,
  or = null,
  $u = null;
function Hu() {
  $u = or = ao = null;
}
function Wu(e) {
  var t = oo.current;
  (G(oo), (e._currentValue = t));
}
function Ol(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function vr(e, t) {
  ((ao = e),
    ($u = or = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (je = !0), (e.firstContext = null)));
}
function it(e) {
  var t = e._currentValue;
  if ($u !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), or === null)) {
      if (ao === null) throw Error(R(308));
      ((or = e), (ao.dependencies = { lanes: 0, firstContext: e }));
    } else or = or.next = e;
  return t;
}
var On = null;
function Ku(e) {
  On === null ? (On = [e]) : On.push(e);
}
function Am(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ku(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    It(e, r)
  );
}
function It(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var Xt = !1;
function Gu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Om(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Nt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function an(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), U & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      It(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ku(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    It(e, n)
  );
}
function Ns(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Lu(e, n));
  }
}
function Jf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (s === null ? (i = s = o) : (s = s.next = o), (n = n.next));
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function lo(e, t, n, r) {
  var i = e.updateQueue;
  Xt = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    ((l.next = null), o === null ? (s = u) : (o.next = u), (o = l));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var f = i.baseState;
    ((o = 0), (c = u = l = null), (a = s));
    do {
      var d = a.lane,
        g = a.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            v = a;
          switch (((d = t), (g = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(g, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(g, f, d) : y),
                d == null)
              )
                break e;
              f = te({}, f, d);
              break e;
            case 2:
              Xt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        ((g = {
          eventTime: g,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (l = f)) : (c = c.next = g),
          (o |= d));
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        ((d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null));
      }
    } while (!0);
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((o |= i.lane), (i = i.next));
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    ((Un |= o), (e.lanes = o), (e.memoizedState = f));
  }
}
function Zf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(R(191, i));
        i.call(r);
      }
    }
}
var Gi = {},
  Pt = yn(Gi),
  Ai = yn(Gi),
  Oi = yn(Gi);
function Dn(e) {
  if (e === Gi) throw Error(R(174));
  return e;
}
function qu(e, t) {
  switch ((W(Oi, t), W(Ai, e), W(Pt, Gi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cl(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = cl(t, e)));
  }
  (G(Pt), W(Pt, t));
}
function Cr() {
  (G(Pt), G(Ai), G(Oi));
}
function Dm(e) {
  Dn(Oi.current);
  var t = Dn(Pt.current),
    n = cl(t, e.type);
  t !== n && (W(Ai, e), W(Pt, n));
}
function Xu(e) {
  Ai.current === e && (G(Pt), G(Ai));
}
var J = yn(0);
function uo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var ka = [];
function Qu() {
  for (var e = 0; e < ka.length; e++)
    ka[e]._workInProgressVersionPrimary = null;
  ka.length = 0;
}
var Ms = zt.ReactCurrentDispatcher,
  Ra = zt.ReactCurrentBatchConfig,
  bn = 0,
  ee = null,
  ue = null,
  he = null,
  co = !1,
  ci = !1,
  Di = 0,
  W1 = 0;
function Ee() {
  throw Error(R(321));
}
function Yu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!pt(e[n], t[n])) return !1;
  return !0;
}
function Ju(e, t, n, r, i, s) {
  if (
    ((bn = s),
    (ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ms.current = e === null || e.memoizedState === null ? X1 : Q1),
    (e = n(r, i)),
    ci)
  ) {
    s = 0;
    do {
      if (((ci = !1), (Di = 0), 25 <= s)) throw Error(R(301));
      ((s += 1),
        (he = ue = null),
        (t.updateQueue = null),
        (Ms.current = Y1),
        (e = n(r, i)));
    } while (ci);
  }
  if (
    ((Ms.current = fo),
    (t = ue !== null && ue.next !== null),
    (bn = 0),
    (he = ue = ee = null),
    (co = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function Zu() {
  var e = Di !== 0;
  return ((Di = 0), e);
}
function wt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (he === null ? (ee.memoizedState = he = e) : (he = he.next = e), he);
}
function st() {
  if (ue === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ue.next;
  var t = he === null ? ee.memoizedState : he.next;
  if (t !== null) ((he = t), (ue = e));
  else {
    if (e === null) throw Error(R(310));
    ((ue = e),
      (e = {
        memoizedState: ue.memoizedState,
        baseState: ue.baseState,
        baseQueue: ue.baseQueue,
        queue: ue.queue,
        next: null,
      }),
      he === null ? (ee.memoizedState = he = e) : (he = he.next = e));
  }
  return he;
}
function Li(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function _a(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = ue,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      ((i.next = s.next), (s.next = o));
    }
    ((r.baseQueue = i = s), (n.pending = null));
  }
  if (i !== null) {
    ((s = i.next), (r = r.baseState));
    var a = (o = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((bn & c) === c)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((a = l = f), (o = r)) : (l = l.next = f),
          (ee.lanes |= c),
          (Un |= c));
      }
      u = u.next;
    } while (u !== null && u !== s);
    (l === null ? (o = r) : (l.next = a),
      pt(r, t.memoizedState) || (je = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((s = i.lane), (ee.lanes |= s), (Un |= s), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Aa(e) {
  var t = st(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do ((s = e(s, o.action)), (o = o.next));
    while (o !== i);
    (pt(s, t.memoizedState) || (je = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s));
  }
  return [s, r];
}
function Lm() {}
function Nm(e, t) {
  var n = ee,
    r = st(),
    i = t(),
    s = !pt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (je = !0)),
    (r = r.queue),
    ec(Vm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (he !== null && he.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ni(9, jm.bind(null, n, r, i, t), void 0, null),
      pe === null)
    )
      throw Error(R(349));
    bn & 30 || Mm(n, t, i);
  }
  return i;
}
function Mm(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function jm(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Fm(t) && Im(e));
}
function Vm(e, t, n) {
  return n(function () {
    Fm(t) && Im(e);
  });
}
function Fm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pt(e, n);
  } catch {
    return !0;
  }
}
function Im(e) {
  var t = It(e, 1);
  t !== null && ht(t, e, 1, -1);
}
function ed(e) {
  var t = wt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Li,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = q1.bind(null, ee, e)),
    [t.memoizedState, e]
  );
}
function Ni(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Bm() {
  return st().memoizedState;
}
function js(e, t, n, r) {
  var i = wt();
  ((ee.flags |= e),
    (i.memoizedState = Ni(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Bo(e, t, n, r) {
  var i = st();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ue !== null) {
    var o = ue.memoizedState;
    if (((s = o.destroy), r !== null && Yu(r, o.deps))) {
      i.memoizedState = Ni(t, n, s, r);
      return;
    }
  }
  ((ee.flags |= e), (i.memoizedState = Ni(1 | t, n, s, r)));
}
function td(e, t) {
  return js(8390656, 8, e, t);
}
function ec(e, t) {
  return Bo(2048, 8, e, t);
}
function bm(e, t) {
  return Bo(4, 2, e, t);
}
function Um(e, t) {
  return Bo(4, 4, e, t);
}
function zm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function $m(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Bo(4, 4, zm.bind(null, t, e), n)
  );
}
function tc() {}
function Hm(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Wm(e, t) {
  var n = st();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Km(e, t, n) {
  return bn & 21
    ? (pt(n, t) || ((n = Yp()), (ee.lanes |= n), (Un |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (je = !0)), (e.memoizedState = n));
}
function K1(e, t) {
  var n = z;
  ((z = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Ra.transition;
  Ra.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((z = n), (Ra.transition = r));
  }
}
function Gm() {
  return st().memoizedState;
}
function G1(e, t, n) {
  var r = un(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    qm(e))
  )
    Xm(t, n);
  else if (((n = Am(e, t, n, r)), n !== null)) {
    var i = De();
    (ht(n, e, r, i), Qm(n, t, r));
  }
}
function q1(e, t, n) {
  var r = un(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (qm(e)) Xm(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), pt(a, o))) {
          var l = t.interleaved;
          (l === null
            ? ((i.next = i), Ku(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Am(e, t, i, r)),
      n !== null && ((i = De()), ht(n, e, r, i), Qm(n, t, r)));
  }
}
function qm(e) {
  var t = e.alternate;
  return e === ee || (t !== null && t === ee);
}
function Xm(e, t) {
  ci = co = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function Qm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Lu(e, n));
  }
}
var fo = {
    readContext: it,
    useCallback: Ee,
    useContext: Ee,
    useEffect: Ee,
    useImperativeHandle: Ee,
    useInsertionEffect: Ee,
    useLayoutEffect: Ee,
    useMemo: Ee,
    useReducer: Ee,
    useRef: Ee,
    useState: Ee,
    useDebugValue: Ee,
    useDeferredValue: Ee,
    useTransition: Ee,
    useMutableSource: Ee,
    useSyncExternalStore: Ee,
    useId: Ee,
    unstable_isNewReconciler: !1,
  },
  X1 = {
    readContext: it,
    useCallback: function (e, t) {
      return ((wt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: it,
    useEffect: td,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        js(4194308, 4, zm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return js(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return js(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = wt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = wt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = G1.bind(null, ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = wt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: ed,
    useDebugValue: tc,
    useDeferredValue: function (e) {
      return (wt().memoizedState = e);
    },
    useTransition: function () {
      var e = ed(!1),
        t = e[0];
      return ((e = K1.bind(null, e[1])), (wt().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ee,
        i = wt();
      if (X) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), pe === null)) throw Error(R(349));
        bn & 30 || Mm(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        td(Vm.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Ni(9, jm.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = wt(),
        t = pe.identifierPrefix;
      if (X) {
        var n = Lt,
          r = Dt;
        ((n = (r & ~(1 << (32 - dt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Di++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = W1++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Q1 = {
    readContext: it,
    useCallback: Hm,
    useContext: it,
    useEffect: ec,
    useImperativeHandle: $m,
    useInsertionEffect: bm,
    useLayoutEffect: Um,
    useMemo: Wm,
    useReducer: _a,
    useRef: Bm,
    useState: function () {
      return _a(Li);
    },
    useDebugValue: tc,
    useDeferredValue: function (e) {
      var t = st();
      return Km(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = _a(Li)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: Lm,
    useSyncExternalStore: Nm,
    useId: Gm,
    unstable_isNewReconciler: !1,
  },
  Y1 = {
    readContext: it,
    useCallback: Hm,
    useContext: it,
    useEffect: ec,
    useImperativeHandle: $m,
    useInsertionEffect: bm,
    useLayoutEffect: Um,
    useMemo: Wm,
    useReducer: Aa,
    useRef: Bm,
    useState: function () {
      return Aa(Li);
    },
    useDebugValue: tc,
    useDeferredValue: function (e) {
      var t = st();
      return ue === null ? (t.memoizedState = e) : Km(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Aa(Li)[0],
        t = st().memoizedState;
      return [e, t];
    },
    useMutableSource: Lm,
    useSyncExternalStore: Nm,
    useId: Gm,
    unstable_isNewReconciler: !1,
  };
function ut(e, t) {
  if (e && e.defaultProps) {
    ((t = te({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Dl(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : te({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var bo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Kn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      i = un(e),
      s = Nt(r, i);
    ((s.payload = t),
      n != null && (s.callback = n),
      (t = an(e, s, i)),
      t !== null && (ht(t, e, i, r), Ns(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = De(),
      i = un(e),
      s = Nt(r, i);
    ((s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = an(e, s, i)),
      t !== null && (ht(t, e, i, r), Ns(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = De(),
      r = un(e),
      i = Nt(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = an(e, i, r)),
      t !== null && (ht(t, e, r, n), Ns(t, e, r)));
  },
};
function nd(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Ti(n, r) || !Ti(i, s)
        : !0
  );
}
function Ym(e, t, n) {
  var r = !1,
    i = hn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = it(s))
      : ((i = Fe(t) ? In : Ae.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Sr(e, i) : hn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = bo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function rd(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && bo.enqueueReplaceState(t, t.state, null));
}
function Ll(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), Gu(e));
  var s = t.contextType;
  (typeof s == "object" && s !== null
    ? (i.context = it(s))
    : ((s = Fe(t) ? In : Ae.current), (i.context = Sr(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Dl(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && bo.enqueueReplaceState(i, i.state, null),
      lo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function Tr(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += Tv(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Oa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Nl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var J1 = typeof WeakMap == "function" ? WeakMap : Map;
function Jm(e, t, n) {
  ((n = Nt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (po || ((po = !0), ($l = r)), Nl(e, t));
    }),
    n
  );
}
function Zm(e, t, n) {
  ((n = Nt(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Nl(e, t);
      }));
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        (Nl(e, t),
          typeof r != "function" &&
            (ln === null ? (ln = new Set([this])) : ln.add(this)));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function id(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new J1();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = dw.bind(null, e, t, n)), t.then(e, e));
}
function sd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function od(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Nt(-1, 1)), (t.tag = 2), an(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Z1 = zt.ReactCurrentOwner,
  je = !1;
function Oe(e, t, n, r) {
  t.child = e === null ? _m(t, null, n, r) : Pr(t, e.child, n, r);
}
function ad(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    vr(t, i),
    (r = Ju(e, t, n, r, s, i)),
    (n = Zu()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Bt(e, t, i))
      : (X && n && bu(t), (t.flags |= 1), Oe(e, t, r, i), t.child)
  );
}
function ld(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !uc(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), eg(e, t, s, r, i))
      : ((e = Bs(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ti), n(o, r) && e.ref === t.ref)
    )
      return Bt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = cn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function eg(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Ti(s, r) && e.ref === t.ref)
      if (((je = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (je = !0);
      else return ((t.lanes = e.lanes), Bt(e, t, i));
  }
  return Ml(e, t, n, r, i);
}
function tg(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        W(lr, $e),
        ($e |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          W(lr, $e),
          ($e |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        W(lr, $e),
        ($e |= r));
    }
  else
    (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      W(lr, $e),
      ($e |= r));
  return (Oe(e, t, i, n), t.child);
}
function ng(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ml(e, t, n, r, i) {
  var s = Fe(n) ? In : Ae.current;
  return (
    (s = Sr(t, s)),
    vr(t, i),
    (n = Ju(e, t, n, r, s, i)),
    (r = Zu()),
    e !== null && !je
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Bt(e, t, i))
      : (X && r && bu(t), (t.flags |= 1), Oe(e, t, n, i), t.child)
  );
}
function ud(e, t, n, r, i) {
  if (Fe(n)) {
    var s = !0;
    ro(t);
  } else s = !1;
  if ((vr(t, i), t.stateNode === null))
    (Vs(e, t), Ym(t, n, r), Ll(t, n, r, i), (r = !0));
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = it(u))
      : ((u = Fe(n) ? In : Ae.current), (u = Sr(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    (f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && rd(t, o, r, u)),
      (Xt = !1));
    var d = t.memoizedState;
    ((o.state = d),
      lo(t, r, o, i),
      (l = t.memoizedState),
      a !== r || d !== l || Ve.current || Xt
        ? (typeof c == "function" && (Dl(t, n, c, r), (l = t.memoizedState)),
          (a = Xt || nd(t, n, a, r, d, l, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = u),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((o = t.stateNode),
      Om(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : ut(t.type, a)),
      (o.props = u),
      (f = t.pendingProps),
      (d = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = it(l))
        : ((l = Fe(n) ? In : Ae.current), (l = Sr(t, l))));
    var g = n.getDerivedStateFromProps;
    ((c =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && rd(t, o, r, l)),
      (Xt = !1),
      (d = t.memoizedState),
      (o.state = d),
      lo(t, r, o, i));
    var y = t.memoizedState;
    a !== f || d !== y || Ve.current || Xt
      ? (typeof g == "function" && (Dl(t, n, g, r), (y = t.memoizedState)),
        (u = Xt || nd(t, n, u, r, d, y, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = l),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return jl(e, t, n, r, s, i);
}
function jl(e, t, n, r, i, s) {
  ng(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return (i && qf(t, n, !1), Bt(e, t, s));
  ((r = t.stateNode), (Z1.current = t));
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Pr(t, e.child, null, s)), (t.child = Pr(t, null, a, s)))
      : Oe(e, t, a, s),
    (t.memoizedState = r.state),
    i && qf(t, n, !0),
    t.child
  );
}
function rg(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Gf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Gf(e, t.context, !1),
    qu(e, t.containerInfo));
}
function cd(e, t, n, r, i) {
  return (Er(), zu(i), (t.flags |= 256), Oe(e, t, n, r), t.child);
}
var Vl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Fl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ig(e, t, n) {
  var r = t.pendingProps,
    i = J.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    W(J, i & 1),
    e === null)
  )
    return (
      Al(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = $o(o, r, 0, null)),
              (e = jn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Fl(n)),
              (t.memoizedState = Vl),
              e)
            : nc(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return ew(e, t, o, r, a, i, n);
  if (s) {
    ((s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = cn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = cn(a, s)) : ((s = jn(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Fl(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Vl),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = cn(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function nc(e, t) {
  return (
    (t = $o({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ys(e, t, n, r) {
  return (
    r !== null && zu(r),
    Pr(t, e.child, null, n),
    (e = nc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ew(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Oa(Error(R(422)))), ys(e, t, o, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (i = t.mode),
          (r = $o({ mode: "visible", children: r.children }, i, 0, null)),
          (s = jn(s, i, o, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && Pr(t, e.child, null, o),
          (t.child.memoizedState = Fl(o)),
          (t.memoizedState = Vl),
          s);
  if (!(t.mode & 1)) return ys(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (s = Error(R(419))),
      (r = Oa(s, r, void 0)),
      ys(e, t, o, r)
    );
  }
  if (((a = (o & e.childLanes) !== 0), je || a)) {
    if (((r = pe), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), It(e, i), ht(r, e, i, -1)));
    }
    return (lc(), (r = Oa(Error(R(421)))), ys(e, t, o, r));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = hw.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (He = on(i.nextSibling)),
      (We = t),
      (X = !0),
      (ft = null),
      e !== null &&
        ((et[tt++] = Dt),
        (et[tt++] = Lt),
        (et[tt++] = Bn),
        (Dt = e.id),
        (Lt = e.overflow),
        (Bn = t)),
      (t = nc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function fd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Ol(e.return, t, n));
}
function Da(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function sg(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((Oe(e, t, r.children, n), (r = J.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && fd(e, n, t);
        else if (e.tag === 19) fd(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((W(J, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && uo(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Da(t, !1, i, n, s));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && uo(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        Da(t, !0, n, null, s);
        break;
      case "together":
        Da(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Vs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Bt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Un |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child, n = cn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = cn(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function tw(e, t, n) {
  switch (t.tag) {
    case 3:
      (rg(t), Er());
      break;
    case 5:
      Dm(t);
      break;
    case 1:
      Fe(t.type) && ro(t);
      break;
    case 4:
      qu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (W(oo, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (W(J, J.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? ig(e, t, n)
            : (W(J, J.current & 1),
              (e = Bt(e, t, n)),
              e !== null ? e.sibling : null);
      W(J, J.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return sg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        W(J, J.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), tg(e, t, n));
  }
  return Bt(e, t, n);
}
var og, Il, ag, lg;
og = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Il = function () {};
ag = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), Dn(Pt.current));
    var s = null;
    switch (n) {
      case "input":
        ((i = ol(e, i)), (r = ol(e, r)), (s = []));
        break;
      case "select":
        ((i = te({}, i, { value: void 0 })),
          (r = te({}, r, { value: void 0 })),
          (s = []));
        break;
      case "textarea":
        ((i = ul(e, i)), (r = ul(e, r)), (s = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = to);
    }
    fl(n, r);
    var o;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (vi.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else (n || (s || (s = []), s.push(u, n)), (n = l));
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (s = s || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (vi.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && K("scroll", e),
                    s || a === l || (s = []))
                  : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
lg = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function qr(e, t) {
  if (!X)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function nw(e, t, n) {
  var r = t.pendingProps;
  switch ((Uu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Pe(t), null);
    case 1:
      return (Fe(t.type) && no(), Pe(t), null);
    case 3:
      return (
        (r = t.stateNode),
        Cr(),
        G(Ve),
        G(Ae),
        Qu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ms(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ft !== null && (Kl(ft), (ft = null)))),
        Il(e, t),
        Pe(t),
        null
      );
    case 5:
      Xu(t);
      var i = Dn(Oi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (ag(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(R(166));
          return (Pe(t), null);
        }
        if (((e = Dn(Pt.current)), ms(t))) {
          ((r = t.stateNode), (n = t.type));
          var s = t.memoizedProps;
          switch (((r[xt] = t), (r[_i] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (K("cancel", r), K("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              K("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ti.length; i++) K(ti[i], r);
              break;
            case "source":
              K("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (K("error", r), K("load", r));
              break;
            case "details":
              K("toggle", r);
              break;
            case "input":
              (xf(r, s), K("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!s.multiple }),
                K("invalid", r));
              break;
            case "textarea":
              (Ef(r, s), K("invalid", r));
          }
          (fl(n, s), (i = null));
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      ps(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      ps(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : vi.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  K("scroll", r);
            }
          switch (n) {
            case "input":
              (os(r), Sf(r, s, !0));
              break;
            case "textarea":
              (os(r), Pf(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = to);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Vp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[xt] = t),
            (e[_i] = r),
            og(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((o = dl(n, r)), n)) {
              case "dialog":
                (K("cancel", e), K("close", e), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (K("load", e), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < ti.length; i++) K(ti[i], e);
                i = r;
                break;
              case "source":
                (K("error", e), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (K("error", e), K("load", e), (i = r));
                break;
              case "details":
                (K("toggle", e), (i = r));
                break;
              case "input":
                (xf(e, r), (i = ol(e, r)), K("invalid", e));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = te({}, r, { value: void 0 })),
                  K("invalid", e));
                break;
              case "textarea":
                (Ef(e, r), (i = ul(e, r)), K("invalid", e));
                break;
              default:
                i = r;
            }
            (fl(n, i), (a = i));
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? Bp(e, l)
                  : s === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Fp(e, l))
                    : s === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && wi(e, l)
                        : typeof l == "number" && wi(e, "" + l)
                      : s !== "suppressContentEditableWarning" &&
                        s !== "suppressHydrationWarning" &&
                        s !== "autoFocus" &&
                        (vi.hasOwnProperty(s)
                          ? l != null && s === "onScroll" && K("scroll", e)
                          : l != null && ku(e, s, l, o));
              }
            switch (n) {
              case "input":
                (os(e), Sf(e, r, !1));
                break;
              case "textarea":
                (os(e), Pf(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dn(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? pr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      pr(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = to);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (Pe(t), null);
    case 6:
      if (e && t.stateNode != null) lg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(R(166));
        if (((n = Dn(Oi.current)), Dn(Pt.current), ms(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[xt] = t),
            (s = r.nodeValue !== n) && ((e = We), e !== null))
          )
            switch (e.tag) {
              case 3:
                ps(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ps(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[xt] = t),
            (t.stateNode = r));
      }
      return (Pe(t), null);
    case 13:
      if (
        (G(J),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (X && He !== null && t.mode & 1 && !(t.flags & 128))
          (km(), Er(), (t.flags |= 98560), (s = !1));
        else if (((s = ms(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(R(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(R(317));
            s[xt] = t;
          } else
            (Er(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (Pe(t), (s = !1));
        } else (ft !== null && (Kl(ft), (ft = null)), (s = !0));
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || J.current & 1 ? fe === 0 && (fe = 3) : lc())),
          t.updateQueue !== null && (t.flags |= 4),
          Pe(t),
          null);
    case 4:
      return (
        Cr(),
        Il(e, t),
        e === null && ki(t.stateNode.containerInfo),
        Pe(t),
        null
      );
    case 10:
      return (Wu(t.type._context), Pe(t), null);
    case 17:
      return (Fe(t.type) && no(), Pe(t), null);
    case 19:
      if ((G(J), (s = t.memoizedState), s === null)) return (Pe(t), null);
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) qr(s, !1);
        else {
          if (fe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = uo(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    qr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (W(J, (J.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          s.tail !== null &&
            oe() > kr &&
            ((t.flags |= 128), (r = !0), qr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = uo(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              qr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !X)
            )
              return (Pe(t), null);
          } else
            2 * oe() - s.renderingStartTime > kr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), qr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = oe()),
          (t.sibling = null),
          (n = J.current),
          W(J, r ? (n & 1) | 2 : n & 1),
          t)
        : (Pe(t), null);
    case 22:
    case 23:
      return (
        ac(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? $e & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function rw(e, t) {
  switch ((Uu(t), t.tag)) {
    case 1:
      return (
        Fe(t.type) && no(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Cr(),
        G(Ve),
        G(Ae),
        Qu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Xu(t), null);
    case 13:
      if ((G(J), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(R(340));
        Er();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (G(J), null);
    case 4:
      return (Cr(), null);
    case 10:
      return (Wu(t.type._context), null);
    case 22:
    case 23:
      return (ac(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var vs = !1,
  ke = !1,
  iw = typeof WeakSet == "function" ? WeakSet : Set,
  D = null;
function ar(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        re(e, t, r);
      }
    else n.current = null;
}
function Bl(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var dd = !1;
function sw(e, t) {
  if (((El = Js), (e = hm()), Bu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, s.nodeType);
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (g = f.firstChild) !== null;
            )
              ((d = f), (f = g));
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (a = o),
                d === s && ++c === r && (l = o),
                (g = f.nextSibling) !== null)
              )
                break;
              ((f = d), (d = f.parentNode));
            }
            f = g;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Pl = { focusedElem: e, selectionRange: n }, Js = !1, D = t; D !== null; )
    if (((t = D), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (D = e));
    else
      for (; D !== null; ) {
        t = D;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    w = y.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : ut(t.type, v),
                      w,
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (E) {
          re(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (D = e));
          break;
        }
        D = t.return;
      }
  return ((y = dd), (dd = !1), y);
}
function fi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        ((i.destroy = void 0), s !== void 0 && Bl(t, n, s));
      }
      i = i.next;
    } while (i !== r);
  }
}
function Uo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ug(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), ug(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[xt], delete t[_i], delete t[kl], delete t[U1], delete t[z1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function cg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function hd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || cg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ul(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = to)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ul(e, t, n), e = e.sibling; e !== null; )
      (Ul(e, t, n), (e = e.sibling));
}
function zl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (zl(e, t, n), e = e.sibling; e !== null; )
      (zl(e, t, n), (e = e.sibling));
}
var ge = null,
  ct = !1;
function Wt(e, t, n) {
  for (n = n.child; n !== null; ) (fg(e, t, n), (n = n.sibling));
}
function fg(e, t, n) {
  if (Et && typeof Et.onCommitFiberUnmount == "function")
    try {
      Et.onCommitFiberUnmount(No, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ke || ar(n, t);
    case 6:
      var r = ge,
        i = ct;
      ((ge = null),
        Wt(e, t, n),
        (ge = r),
        (ct = i),
        ge !== null &&
          (ct
            ? ((e = ge),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ge.removeChild(n.stateNode)));
      break;
    case 18:
      ge !== null &&
        (ct
          ? ((e = ge),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ca(e.parentNode, n)
              : e.nodeType === 1 && Ca(e, n),
            Pi(e))
          : Ca(ge, n.stateNode));
      break;
    case 4:
      ((r = ge),
        (i = ct),
        (ge = n.stateNode.containerInfo),
        (ct = !0),
        Wt(e, t, n),
        (ge = r),
        (ct = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ke &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          ((s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Bl(n, t, o),
            (i = i.next));
        } while (i !== r);
      }
      Wt(e, t, n);
      break;
    case 1:
      if (
        !ke &&
        (ar(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          re(n, t, a);
        }
      Wt(e, t, n);
      break;
    case 21:
      Wt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ke = (r = ke) || n.memoizedState !== null), Wt(e, t, n), (ke = r))
        : Wt(e, t, n);
      break;
    default:
      Wt(e, t, n);
  }
}
function pd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new iw()),
      t.forEach(function (r) {
        var i = pw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function at(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((ge = a.stateNode), (ct = !1));
              break e;
            case 3:
              ((ge = a.stateNode.containerInfo), (ct = !0));
              break e;
            case 4:
              ((ge = a.stateNode.containerInfo), (ct = !0));
              break e;
          }
          a = a.return;
        }
        if (ge === null) throw Error(R(160));
        (fg(s, o, i), (ge = null), (ct = !1));
        var l = i.alternate;
        (l !== null && (l.return = null), (i.return = null));
      } catch (u) {
        re(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (dg(t, e), (t = t.sibling));
}
function dg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((at(t, e), vt(e), r & 4)) {
        try {
          (fi(3, e, e.return), Uo(3, e));
        } catch (v) {
          re(e, e.return, v);
        }
        try {
          fi(5, e, e.return);
        } catch (v) {
          re(e, e.return, v);
        }
      }
      break;
    case 1:
      (at(t, e), vt(e), r & 512 && n !== null && ar(n, n.return));
      break;
    case 5:
      if (
        (at(t, e),
        vt(e),
        r & 512 && n !== null && ar(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          wi(i, "");
        } catch (v) {
          re(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && s.type === "radio" && s.name != null && Mp(i, s),
              dl(a, o));
            var u = dl(a, s);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                f = l[o + 1];
              c === "style"
                ? Bp(i, f)
                : c === "dangerouslySetInnerHTML"
                  ? Fp(i, f)
                  : c === "children"
                    ? wi(i, f)
                    : ku(i, c, f, u);
            }
            switch (a) {
              case "input":
                al(i, s);
                break;
              case "textarea":
                jp(i, s);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? pr(i, !!s.multiple, g, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? pr(i, !!s.multiple, s.defaultValue, !0)
                      : pr(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[_i] = s;
          } catch (v) {
            re(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((at(t, e), vt(e), r & 4)) {
        if (e.stateNode === null) throw Error(R(162));
        ((i = e.stateNode), (s = e.memoizedProps));
        try {
          i.nodeValue = s;
        } catch (v) {
          re(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (at(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Pi(t.containerInfo);
        } catch (v) {
          re(e, e.return, v);
        }
      break;
    case 4:
      (at(t, e), vt(e));
      break;
    case 13:
      (at(t, e),
        vt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (sc = oe())),
        r & 4 && pd(e));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ke = (u = ke) || c), at(t, e), (ke = u)) : at(t, e),
        vt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (D = e, c = e.child; c !== null; ) {
            for (f = D = c; D !== null; ) {
              switch (((d = D), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  fi(4, d, d.return);
                  break;
                case 1:
                  ar(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    ((r = d), (n = d.return));
                    try {
                      ((t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount());
                    } catch (v) {
                      re(r, n, v);
                    }
                  }
                  break;
                case 5:
                  ar(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    gd(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (D = g)) : gd(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                ((i = f.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Ip("display", o))));
              } catch (v) {
                re(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                re(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ((f.child.return = f), (f = f.child));
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            (c === f && (c = null), (f = f.return));
          }
          (c === f && (c = null),
            (f.sibling.return = f.return),
            (f = f.sibling));
        }
      }
      break;
    case 19:
      (at(t, e), vt(e), r & 4 && pd(e));
      break;
    case 21:
      break;
    default:
      (at(t, e), vt(e));
  }
}
function vt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (cg(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (wi(i, ""), (r.flags &= -33));
          var s = hd(e);
          zl(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = hd(e);
          Ul(e, a, o);
          break;
        default:
          throw Error(R(161));
      }
    } catch (l) {
      re(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ow(e, t, n) {
  ((D = e), hg(e));
}
function hg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; D !== null; ) {
    var i = D,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || vs;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || ke;
        a = vs;
        var u = ke;
        if (((vs = o), (ke = l) && !u))
          for (D = i; D !== null; )
            ((o = D),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? yd(i)
                : l !== null
                  ? ((l.return = o), (D = l))
                  : yd(i));
        for (; s !== null; ) ((D = s), hg(s), (s = s.sibling));
        ((D = i), (vs = a), (ke = u));
      }
      md(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (D = s)) : md(e);
  }
}
function md(e) {
  for (; D !== null; ) {
    var t = D;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ke || Uo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ke)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ut(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var s = t.updateQueue;
              s !== null && Zf(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Zf(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Pi(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        ke || (t.flags & 512 && bl(t));
      } catch (d) {
        re(t, t.return, d);
      }
    }
    if (t === e) {
      D = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (D = n));
      break;
    }
    D = t.return;
  }
}
function gd(e) {
  for (; D !== null; ) {
    var t = D;
    if (t === e) {
      D = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (D = n));
      break;
    }
    D = t.return;
  }
}
function yd(e) {
  for (; D !== null; ) {
    var t = D;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Uo(4, t);
          } catch (l) {
            re(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              re(t, i, l);
            }
          }
          var s = t.return;
          try {
            bl(t);
          } catch (l) {
            re(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            bl(t);
          } catch (l) {
            re(t, o, l);
          }
      }
    } catch (l) {
      re(t, t.return, l);
    }
    if (t === e) {
      D = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (D = a));
      break;
    }
    D = t.return;
  }
}
var aw = Math.ceil,
  ho = zt.ReactCurrentDispatcher,
  rc = zt.ReactCurrentOwner,
  rt = zt.ReactCurrentBatchConfig,
  U = 0,
  pe = null,
  le = null,
  we = 0,
  $e = 0,
  lr = yn(0),
  fe = 0,
  Mi = null,
  Un = 0,
  zo = 0,
  ic = 0,
  di = null,
  Me = null,
  sc = 0,
  kr = 1 / 0,
  At = null,
  po = !1,
  $l = null,
  ln = null,
  ws = !1,
  en = null,
  mo = 0,
  hi = 0,
  Hl = null,
  Fs = -1,
  Is = 0;
function De() {
  return U & 6 ? oe() : Fs !== -1 ? Fs : (Fs = oe());
}
function un(e) {
  return e.mode & 1
    ? U & 2 && we !== 0
      ? we & -we
      : H1.transition !== null
        ? (Is === 0 && (Is = Yp()), Is)
        : ((e = z),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : im(e.type))),
          e)
    : 1;
}
function ht(e, t, n, r) {
  if (50 < hi) throw ((hi = 0), (Hl = null), Error(R(185)));
  (Hi(e, n, r),
    (!(U & 2) || e !== pe) &&
      (e === pe && (!(U & 2) && (zo |= n), fe === 4 && Yt(e, we)),
      Ie(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((kr = oe() + 500), Io && vn())));
}
function Ie(e, t) {
  var n = e.callbackNode;
  Hv(e, t);
  var r = Ys(e, e === pe ? we : 0);
  if (r === 0)
    (n !== null && kf(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && kf(n), t === 1))
      (e.tag === 0 ? $1(vd.bind(null, e)) : Pm(vd.bind(null, e)),
        B1(function () {
          !(U & 6) && vn();
        }),
        (n = null));
    else {
      switch (Jp(r)) {
        case 1:
          n = Du;
          break;
        case 4:
          n = Xp;
          break;
        case 16:
          n = Qs;
          break;
        case 536870912:
          n = Qp;
          break;
        default:
          n = Qs;
      }
      n = Sg(n, pg.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function pg(e, t) {
  if (((Fs = -1), (Is = 0), U & 6)) throw Error(R(327));
  var n = e.callbackNode;
  if (wr() && e.callbackNode !== n) return null;
  var r = Ys(e, e === pe ? we : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = go(e, r);
  else {
    t = r;
    var i = U;
    U |= 2;
    var s = gg();
    (pe !== e || we !== t) && ((At = null), (kr = oe() + 500), Mn(e, t));
    do
      try {
        cw();
        break;
      } catch (a) {
        mg(e, a);
      }
    while (!0);
    (Hu(),
      (ho.current = s),
      (U = i),
      le !== null ? (t = 0) : ((pe = null), (we = 0), (t = fe)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = yl(e)), i !== 0 && ((r = i), (t = Wl(e, i)))), t === 1)
    )
      throw ((n = Mi), Mn(e, 0), Yt(e, r), Ie(e, oe()), n);
    if (t === 6) Yt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !lw(i) &&
          ((t = go(e, r)),
          t === 2 && ((s = yl(e)), s !== 0 && ((r = s), (t = Wl(e, s)))),
          t === 1))
      )
        throw ((n = Mi), Mn(e, 0), Yt(e, r), Ie(e, oe()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          kn(e, Me, At);
          break;
        case 3:
          if (
            (Yt(e, r), (r & 130023424) === r && ((t = sc + 500 - oe()), 10 < t))
          ) {
            if (Ys(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (De(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = Tl(kn.bind(null, e, Me, At), t);
            break;
          }
          kn(e, Me, At);
          break;
        case 4:
          if ((Yt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - dt(r);
            ((s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s));
          }
          if (
            ((r = i),
            (r = oe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * aw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Tl(kn.bind(null, e, Me, At), r);
            break;
          }
          kn(e, Me, At);
          break;
        case 5:
          kn(e, Me, At);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return (Ie(e, oe()), e.callbackNode === n ? pg.bind(null, e) : null);
}
function Wl(e, t) {
  var n = di;
  return (
    e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256),
    (e = go(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && Kl(t)),
    e
  );
}
function Kl(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function lw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!pt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Yt(e, t) {
  for (
    t &= ~ic,
      t &= ~zo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - dt(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function vd(e) {
  if (U & 6) throw Error(R(327));
  wr();
  var t = Ys(e, 0);
  if (!(t & 1)) return (Ie(e, oe()), null);
  var n = go(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = yl(e);
    r !== 0 && ((t = r), (n = Wl(e, r)));
  }
  if (n === 1) throw ((n = Mi), Mn(e, 0), Yt(e, t), Ie(e, oe()), n);
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    kn(e, Me, At),
    Ie(e, oe()),
    null
  );
}
function oc(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    ((U = n), U === 0 && ((kr = oe() + 500), Io && vn()));
  }
}
function zn(e) {
  en !== null && en.tag === 0 && !(U & 6) && wr();
  var t = U;
  U |= 1;
  var n = rt.transition,
    r = z;
  try {
    if (((rt.transition = null), (z = 1), e)) return e();
  } finally {
    ((z = r), (rt.transition = n), (U = t), !(U & 6) && vn());
  }
}
function ac() {
  (($e = lr.current), G(lr));
}
function Mn(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), I1(n)), le !== null))
    for (n = le.return; n !== null; ) {
      var r = n;
      switch ((Uu(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && no());
          break;
        case 3:
          (Cr(), G(Ve), G(Ae), Qu());
          break;
        case 5:
          Xu(r);
          break;
        case 4:
          Cr();
          break;
        case 13:
          G(J);
          break;
        case 19:
          G(J);
          break;
        case 10:
          Wu(r.type._context);
          break;
        case 22:
        case 23:
          ac();
      }
      n = n.return;
    }
  if (
    ((pe = e),
    (le = e = cn(e.current, null)),
    (we = $e = t),
    (fe = 0),
    (Mi = null),
    (ic = zo = Un = 0),
    (Me = di = null),
    On !== null)
  ) {
    for (t = 0; t < On.length; t++)
      if (((n = On[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          ((s.next = i), (r.next = o));
        }
        n.pending = r;
      }
    On = null;
  }
  return e;
}
function mg(e, t) {
  do {
    var n = le;
    try {
      if ((Hu(), (Ms.current = fo), co)) {
        for (var r = ee.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        co = !1;
      }
      if (
        ((bn = 0),
        (he = ue = ee = null),
        (ci = !1),
        (Di = 0),
        (rc.current = null),
        n === null || n.return === null)
      ) {
        ((fe = 1), (Mi = t), (le = null));
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = we),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = sd(o);
          if (g !== null) {
            ((g.flags &= -257),
              od(g, o, a, s, t),
              g.mode & 1 && id(s, u, t),
              (t = g),
              (l = u));
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              (v.add(l), (t.updateQueue = v));
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (id(s, u, t), lc());
              break e;
            }
            l = Error(R(426));
          }
        } else if (X && a.mode & 1) {
          var w = sd(o);
          if (w !== null) {
            (!(w.flags & 65536) && (w.flags |= 256),
              od(w, o, a, s, t),
              zu(Tr(l, a)));
            break e;
          }
        }
        ((s = l = Tr(l, a)),
          fe !== 4 && (fe = 2),
          di === null ? (di = [s]) : di.push(s),
          (s = o));
        do {
          switch (s.tag) {
            case 3:
              ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
              var h = Jm(s, l, t);
              Jf(s, h);
              break e;
            case 1:
              a = l;
              var p = s.type,
                m = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (ln === null || !ln.has(m))))
              ) {
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var E = Zm(s, a, t);
                Jf(s, E);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      vg(n);
    } catch (P) {
      ((t = P), le === n && n !== null && (le = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function gg() {
  var e = ho.current;
  return ((ho.current = fo), e === null ? fo : e);
}
function lc() {
  ((fe === 0 || fe === 3 || fe === 2) && (fe = 4),
    pe === null || (!(Un & 268435455) && !(zo & 268435455)) || Yt(pe, we));
}
function go(e, t) {
  var n = U;
  U |= 2;
  var r = gg();
  (pe !== e || we !== t) && ((At = null), Mn(e, t));
  do
    try {
      uw();
      break;
    } catch (i) {
      mg(e, i);
    }
  while (!0);
  if ((Hu(), (U = n), (ho.current = r), le !== null)) throw Error(R(261));
  return ((pe = null), (we = 0), fe);
}
function uw() {
  for (; le !== null; ) yg(le);
}
function cw() {
  for (; le !== null && !jv(); ) yg(le);
}
function yg(e) {
  var t = xg(e.alternate, e, $e);
  ((e.memoizedProps = e.pendingProps),
    t === null ? vg(e) : (le = t),
    (rc.current = null));
}
function vg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = rw(n, t)), n !== null)) {
        ((n.flags &= 32767), (le = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((fe = 6), (le = null));
        return;
      }
    } else if (((n = nw(n, t, $e)), n !== null)) {
      le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  fe === 0 && (fe = 5);
}
function kn(e, t, n) {
  var r = z,
    i = rt.transition;
  try {
    ((rt.transition = null), (z = 1), fw(e, t, n, r));
  } finally {
    ((rt.transition = i), (z = r));
  }
  return null;
}
function fw(e, t, n, r) {
  do wr();
  while (en !== null);
  if (U & 6) throw Error(R(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(R(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var s = n.lanes | n.childLanes;
  if (
    (Wv(e, s),
    e === pe && ((le = pe = null), (we = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ws ||
      ((ws = !0),
      Sg(Qs, function () {
        return (wr(), null);
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    ((s = rt.transition), (rt.transition = null));
    var o = z;
    z = 1;
    var a = U;
    ((U |= 4),
      (rc.current = null),
      sw(e, n),
      dg(n, e),
      D1(Pl),
      (Js = !!El),
      (Pl = El = null),
      (e.current = n),
      ow(n),
      Vv(),
      (U = a),
      (z = o),
      (rt.transition = s));
  } else e.current = n;
  if (
    (ws && ((ws = !1), (en = e), (mo = i)),
    (s = e.pendingLanes),
    s === 0 && (ln = null),
    Bv(n.stateNode),
    Ie(e, oe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (po) throw ((po = !1), (e = $l), ($l = null), e);
  return (
    mo & 1 && e.tag !== 0 && wr(),
    (s = e.pendingLanes),
    s & 1 ? (e === Hl ? hi++ : ((hi = 0), (Hl = e))) : (hi = 0),
    vn(),
    null
  );
}
function wr() {
  if (en !== null) {
    var e = Jp(mo),
      t = rt.transition,
      n = z;
    try {
      if (((rt.transition = null), (z = 16 > e ? 16 : e), en === null))
        var r = !1;
      else {
        if (((e = en), (en = null), (mo = 0), U & 6)) throw Error(R(331));
        var i = U;
        for (U |= 4, D = e.current; D !== null; ) {
          var s = D,
            o = s.child;
          if (D.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (D = u; D !== null; ) {
                  var c = D;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      fi(8, c, s);
                  }
                  var f = c.child;
                  if (f !== null) ((f.return = c), (D = f));
                  else
                    for (; D !== null; ) {
                      c = D;
                      var d = c.sibling,
                        g = c.return;
                      if ((ug(c), c === u)) {
                        D = null;
                        break;
                      }
                      if (d !== null) {
                        ((d.return = g), (D = d));
                        break;
                      }
                      D = g;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var w = v.sibling;
                    ((v.sibling = null), (v = w));
                  } while (v !== null);
                }
              }
              D = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) ((o.return = s), (D = o));
          else
            e: for (; D !== null; ) {
              if (((s = D), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    fi(9, s, s.return);
                }
              var h = s.sibling;
              if (h !== null) {
                ((h.return = s.return), (D = h));
                break e;
              }
              D = s.return;
            }
        }
        var p = e.current;
        for (D = p; D !== null; ) {
          o = D;
          var m = o.child;
          if (o.subtreeFlags & 2064 && m !== null) ((m.return = o), (D = m));
          else
            e: for (o = p; D !== null; ) {
              if (((a = D), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Uo(9, a);
                  }
                } catch (P) {
                  re(a, a.return, P);
                }
              if (a === o) {
                D = null;
                break e;
              }
              var E = a.sibling;
              if (E !== null) {
                ((E.return = a.return), (D = E));
                break e;
              }
              D = a.return;
            }
        }
        if (
          ((U = i), vn(), Et && typeof Et.onPostCommitFiberRoot == "function")
        )
          try {
            Et.onPostCommitFiberRoot(No, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((z = n), (rt.transition = t));
    }
  }
  return !1;
}
function wd(e, t, n) {
  ((t = Tr(n, t)),
    (t = Jm(e, t, 1)),
    (e = an(e, t, 1)),
    (t = De()),
    e !== null && (Hi(e, 1, t), Ie(e, t)));
}
function re(e, t, n) {
  if (e.tag === 3) wd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        wd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ln === null || !ln.has(r)))
        ) {
          ((e = Tr(n, e)),
            (e = Zm(t, e, 1)),
            (t = an(t, e, 1)),
            (e = De()),
            t !== null && (Hi(t, 1, e), Ie(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function dw(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = De()),
    (e.pingedLanes |= e.suspendedLanes & n),
    pe === e &&
      (we & n) === n &&
      (fe === 4 || (fe === 3 && (we & 130023424) === we && 500 > oe() - sc)
        ? Mn(e, 0)
        : (ic |= n)),
    Ie(e, t));
}
function wg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = us), (us <<= 1), !(us & 130023424) && (us = 4194304))
      : (t = 1));
  var n = De();
  ((e = It(e, t)), e !== null && (Hi(e, t, n), Ie(e, n)));
}
function hw(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), wg(e, n));
}
function pw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  (r !== null && r.delete(t), wg(e, n));
}
var xg;
xg = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ve.current) je = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((je = !1), tw(e, t, n));
      je = !!(e.flags & 131072);
    }
  else ((je = !1), X && t.flags & 1048576 && Cm(t, so, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Vs(e, t), (e = t.pendingProps));
      var i = Sr(t, Ae.current);
      (vr(t, n), (i = Ju(null, t, r, e, i, n)));
      var s = Zu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Fe(r) ? ((s = !0), ro(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Gu(t),
            (i.updater = bo),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ll(t, r, e, n),
            (t = jl(null, t, r, !0, s, n)))
          : ((t.tag = 0), X && s && bu(t), Oe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Vs(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = gw(r)),
          (e = ut(r, e)),
          i)
        ) {
          case 0:
            t = Ml(null, t, r, e, n);
            break e;
          case 1:
            t = ud(null, t, r, e, n);
            break e;
          case 11:
            t = ad(null, t, r, e, n);
            break e;
          case 14:
            t = ld(null, t, r, ut(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ut(r, i)),
        Ml(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ut(r, i)),
        ud(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((rg(t), e === null)) throw Error(R(387));
        ((r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Om(e, t),
          lo(t, r, null, n));
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            ((i = Tr(Error(R(423)), t)), (t = cd(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = Tr(Error(R(424)), t)), (t = cd(e, t, r, n, i)));
            break e;
          } else
            for (
              He = on(t.stateNode.containerInfo.firstChild),
                We = t,
                X = !0,
                ft = null,
                n = _m(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((Er(), r === i)) {
            t = Bt(e, t, n);
            break e;
          }
          Oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Dm(t),
        e === null && Al(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Cl(r, i) ? (o = null) : s !== null && Cl(r, s) && (t.flags |= 32),
        ng(e, t),
        Oe(e, t, o, n),
        t.child
      );
    case 6:
      return (e === null && Al(t), null);
    case 13:
      return ig(e, t, n);
    case 4:
      return (
        qu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Pr(t, null, r, n)) : Oe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ut(r, i)),
        ad(e, t, r, i, n)
      );
    case 7:
      return (Oe(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Oe(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Oe(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          W(oo, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (pt(s.value, o)) {
            if (s.children === i.children && !Ve.current) {
              t = Bt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      ((l = Nt(-1, n & -n)), (l.tag = 2));
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Ol(s.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(R(341));
                ((o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Ol(o, n, t),
                  (o = s.sibling));
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    ((s.return = o.return), (o = s));
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        (Oe(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        vr(t, n),
        (i = it(i)),
        (r = r(i)),
        (t.flags |= 1),
        Oe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = ut(r, t.pendingProps)),
        (i = ut(r.type, i)),
        ld(e, t, r, i, n)
      );
    case 15:
      return eg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : ut(r, i)),
        Vs(e, t),
        (t.tag = 1),
        Fe(r) ? ((e = !0), ro(t)) : (e = !1),
        vr(t, n),
        Ym(t, r, i),
        Ll(t, r, i, n),
        jl(null, t, r, !0, e, n)
      );
    case 19:
      return sg(e, t, n);
    case 22:
      return tg(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Sg(e, t) {
  return qp(e, t);
}
function mw(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function nt(e, t, n, r) {
  return new mw(e, t, n, r);
}
function uc(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function gw(e) {
  if (typeof e == "function") return uc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === _u)) return 11;
    if (e === Au) return 14;
  }
  return 2;
}
function cn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = nt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Bs(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) uc(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Jn:
        return jn(n.children, i, s, t);
      case Ru:
        ((o = 8), (i |= 8));
        break;
      case nl:
        return (
          (e = nt(12, n, t, i | 2)),
          (e.elementType = nl),
          (e.lanes = s),
          e
        );
      case rl:
        return ((e = nt(13, n, t, i)), (e.elementType = rl), (e.lanes = s), e);
      case il:
        return ((e = nt(19, n, t, i)), (e.elementType = il), (e.lanes = s), e);
      case Dp:
        return $o(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ap:
              o = 10;
              break e;
            case Op:
              o = 9;
              break e;
            case _u:
              o = 11;
              break e;
            case Au:
              o = 14;
              break e;
            case qt:
              ((o = 16), (r = null));
              break e;
          }
        throw Error(R(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = nt(o, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function jn(e, t, n, r) {
  return ((e = nt(7, e, r, t)), (e.lanes = n), e);
}
function $o(e, t, n, r) {
  return (
    (e = nt(22, e, r, t)),
    (e.elementType = Dp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function La(e, t, n) {
  return ((e = nt(6, e, null, t)), (e.lanes = n), e);
}
function Na(e, t, n) {
  return (
    (t = nt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function yw(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ha(0)),
    (this.expirationTimes = ha(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ha(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function cc(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new yw(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = nt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gu(s),
    e
  );
}
function vw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Yn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Eg(e) {
  if (!e) return hn;
  e = e._reactInternals;
  e: {
    if (Kn(e) !== e || e.tag !== 1) throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Fe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Fe(n)) return Em(e, n, t);
  }
  return t;
}
function Pg(e, t, n, r, i, s, o, a, l) {
  return (
    (e = cc(n, r, !0, e, i, s, o, a, l)),
    (e.context = Eg(null)),
    (n = e.current),
    (r = De()),
    (i = un(n)),
    (s = Nt(r, i)),
    (s.callback = t ?? null),
    an(n, s, i),
    (e.current.lanes = i),
    Hi(e, i, r),
    Ie(e, r),
    e
  );
}
function Ho(e, t, n, r) {
  var i = t.current,
    s = De(),
    o = un(i);
  return (
    (n = Eg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Nt(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = an(i, t, o)),
    e !== null && (ht(e, i, o, s), Ns(e, i, o)),
    o
  );
}
function yo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fc(e, t) {
  (xd(e, t), (e = e.alternate) && xd(e, t));
}
function ww() {
  return null;
}
var Cg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function dc(e) {
  this._internalRoot = e;
}
Wo.prototype.render = dc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(R(409));
  Ho(e, t, null, null);
};
Wo.prototype.unmount = dc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (zn(function () {
      Ho(null, e, null, null);
    }),
      (t[Ft] = null));
  }
};
function Wo(e) {
  this._internalRoot = e;
}
Wo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = tm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Qt.length && t !== 0 && t < Qt[n].priority; n++);
    (Qt.splice(n, 0, e), n === 0 && rm(e));
  }
};
function hc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ko(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Sd() {}
function xw(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = yo(o);
        s.call(u);
      };
    }
    var o = Pg(t, r, e, 0, null, !1, !1, "", Sd);
    return (
      (e._reactRootContainer = o),
      (e[Ft] = o.current),
      ki(e.nodeType === 8 ? e.parentNode : e),
      zn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = yo(l);
      a.call(u);
    };
  }
  var l = cc(e, 0, !1, null, null, !1, !1, "", Sd);
  return (
    (e._reactRootContainer = l),
    (e[Ft] = l.current),
    ki(e.nodeType === 8 ? e.parentNode : e),
    zn(function () {
      Ho(t, l, n, r);
    }),
    l
  );
}
function Go(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = yo(o);
        a.call(l);
      };
    }
    Ho(t, o, e, i);
  } else o = xw(n, t, e, i, r);
  return yo(o);
}
Zp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ei(t.pendingLanes);
        n !== 0 &&
          (Lu(t, n | 1), Ie(t, oe()), !(U & 6) && ((kr = oe() + 500), vn()));
      }
      break;
    case 13:
      (zn(function () {
        var r = It(e, 1);
        if (r !== null) {
          var i = De();
          ht(r, e, 1, i);
        }
      }),
        fc(e, 1));
  }
};
Nu = function (e) {
  if (e.tag === 13) {
    var t = It(e, 134217728);
    if (t !== null) {
      var n = De();
      ht(t, e, 134217728, n);
    }
    fc(e, 134217728);
  }
};
em = function (e) {
  if (e.tag === 13) {
    var t = un(e),
      n = It(e, t);
    if (n !== null) {
      var r = De();
      ht(n, e, t, r);
    }
    fc(e, t);
  }
};
tm = function () {
  return z;
};
nm = function (e, t) {
  var n = z;
  try {
    return ((z = e), t());
  } finally {
    z = n;
  }
};
pl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((al(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Fo(r);
            if (!i) throw Error(R(90));
            (Np(r), al(r, i));
          }
        }
      }
      break;
    case "textarea":
      jp(e, n);
      break;
    case "select":
      ((t = n.value), t != null && pr(e, !!n.multiple, t, !1));
  }
};
zp = oc;
$p = zn;
var Sw = { usingClientEntryPoint: !1, Events: [Ki, nr, Fo, bp, Up, oc] },
  Xr = {
    findFiberByHostInstance: An,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Ew = {
    bundleType: Xr.bundleType,
    version: Xr.version,
    rendererPackageName: Xr.rendererPackageName,
    rendererConfig: Xr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = Kp(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Xr.findFiberByHostInstance || ww,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xs.isDisabled && xs.supportsFiber)
    try {
      ((No = xs.inject(Ew)), (Et = xs));
    } catch {}
}
Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sw;
Xe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hc(t)) throw Error(R(200));
  return vw(e, t, null, n);
};
Xe.createRoot = function (e, t) {
  if (!hc(e)) throw Error(R(299));
  var n = !1,
    r = "",
    i = Cg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = cc(e, 1, !1, null, null, n, !1, r, i)),
    (e[Ft] = t.current),
    ki(e.nodeType === 8 ? e.parentNode : e),
    new dc(t)
  );
};
Xe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")), Error(R(268, e)));
  return ((e = Kp(t)), (e = e === null ? null : e.stateNode), e);
};
Xe.flushSync = function (e) {
  return zn(e);
};
Xe.hydrate = function (e, t, n) {
  if (!Ko(t)) throw Error(R(200));
  return Go(null, e, t, !0, n);
};
Xe.hydrateRoot = function (e, t, n) {
  if (!hc(e)) throw Error(R(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Cg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Pg(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[Ft] = t.current),
    ki(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new Wo(t);
};
Xe.render = function (e, t, n) {
  if (!Ko(t)) throw Error(R(200));
  return Go(null, e, t, !1, n);
};
Xe.unmountComponentAtNode = function (e) {
  if (!Ko(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (zn(function () {
        Go(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Ft] = null));
        });
      }),
      !0)
    : !1;
};
Xe.unstable_batchedUpdates = oc;
Xe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ko(n)) throw Error(R(200));
  if (e == null || e._reactInternals === void 0) throw Error(R(38));
  return Go(e, t, n, !1, r);
};
Xe.version = "18.3.1-next-f1338f8080-20240426";
function Tg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tg);
    } catch (e) {
      console.error(e);
    }
}
(Tg(), (Tp.exports = Xe));
var Pw = Tp.exports,
  Ed = Pw;
((el.createRoot = Ed.createRoot), (el.hydrateRoot = Ed.hydrateRoot));
/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ji() {
  return (
    (ji = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ji.apply(null, arguments)
  );
}
var tn;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(tn || (tn = {}));
const Pd = "popstate";
function Cw(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return Gl(
      "",
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default",
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : vo(i);
  }
  return kw(t, n, null, e);
}
function ae(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function pc(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Tw() {
  return Math.random().toString(36).substr(2, 8);
}
function Cd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Gl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ji(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? jr(t) : t,
      { state: n, key: (t && t.key) || r || Tw() },
    )
  );
}
function vo(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function jr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function kw(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = tn.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(ji({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    a = tn.Pop;
    let w = c(),
      h = w == null ? null : w - u;
    ((u = w), l && l({ action: a, location: v.location, delta: h }));
  }
  function d(w, h) {
    a = tn.Push;
    let p = Gl(v.location, w, h);
    u = c() + 1;
    let m = Cd(p, u),
      E = v.createHref(p);
    try {
      o.pushState(m, "", E);
    } catch (P) {
      if (P instanceof DOMException && P.name === "DataCloneError") throw P;
      i.location.assign(E);
    }
    s && l && l({ action: a, location: v.location, delta: 1 });
  }
  function g(w, h) {
    a = tn.Replace;
    let p = Gl(v.location, w, h);
    u = c();
    let m = Cd(p, u),
      E = v.createHref(p);
    (o.replaceState(m, "", E),
      s && l && l({ action: a, location: v.location, delta: 0 }));
  }
  function y(w) {
    let h = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof w == "string" ? w : vo(w);
    return (
      (p = p.replace(/ $/, "%20")),
      ae(
        h,
        "No window.location.(origin|href) available to create URL for href: " +
          p,
      ),
      new URL(p, h)
    );
  }
  let v = {
    get action() {
      return a;
    },
    get location() {
      return e(i, o);
    },
    listen(w) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Pd, f),
        (l = w),
        () => {
          (i.removeEventListener(Pd, f), (l = null));
        }
      );
    },
    createHref(w) {
      return t(i, w);
    },
    createURL: y,
    encodeLocation(w) {
      let h = y(w);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: d,
    replace: g,
    go(w) {
      return o.go(w);
    },
  };
  return v;
}
var Td;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(Td || (Td = {}));
function Rw(e, t, n) {
  return (n === void 0 && (n = "/"), _w(e, t, n));
}
function _w(e, t, n, r) {
  let i = typeof t == "string" ? jr(t) : t,
    s = mc(i.pathname || "/", n);
  if (s == null) return null;
  let o = kg(e);
  Aw(o);
  let a = null,
    l = Uw(s);
  for (let u = 0; a == null && u < o.length; ++u) a = Iw(o[u], l);
  return a;
}
function kg(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (ae(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = fn([r, l.relativePath]),
      c = n.concat(l);
    (s.children &&
      s.children.length > 0 &&
      (ae(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      kg(s.children, t, c, u)),
      !(s.path == null && !s.index) &&
        t.push({ path: u, score: Vw(u, s.index), routesMeta: c }));
  };
  return (
    e.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let l of Rg(s.path)) i(s, o, l);
    }),
    t
  );
}
function Rg(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = Rg(r.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    i && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function Aw(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Fw(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Ow = /^:[\w-]+$/,
  Dw = 3,
  Lw = 2,
  Nw = 1,
  Mw = 10,
  jw = -2,
  kd = (e) => e === "*";
function Vw(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(kd) && (r += jw),
    t && (r += Lw),
    n
      .filter((i) => !kd(i))
      .reduce((i, s) => i + (Ow.test(s) ? Dw : s === "" ? Nw : Mw), r)
  );
}
function Fw(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Iw(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    s = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = s === "/" ? t : t.slice(s.length) || "/",
      f = Bw(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c,
      ),
      d = l.route;
    if (!f) return null;
    (Object.assign(i, f.params),
      o.push({
        params: i,
        pathname: fn([s, f.pathname]),
        pathnameBase: Kw(fn([s, f.pathnameBase])),
        route: d,
      }),
      f.pathnameBase !== "/" && (s = fn([s, f.pathnameBase])));
  }
  return o;
}
function Bw(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = bw(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: g } = c;
      if (d === "*") {
        let v = a[f] || "";
        o = s.slice(0, s.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const y = a[f];
      return (
        g && !y ? (u[d] = void 0) : (u[d] = (y || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function bw(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    pc(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (i += "\\/*$")
        : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Uw(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      pc(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function mc(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const zw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  $w = (e) => zw.test(e);
function Hw(e, t) {
  t === void 0 && (t = "/");
  let {
      pathname: n,
      search: r = "",
      hash: i = "",
    } = typeof e == "string" ? jr(e) : e,
    s;
  if (n)
    if ($w(n)) s = n;
    else {
      if (n.includes("//")) {
        let o = n;
        ((n = _g(n)),
          pc(
            !1,
            "Pathnames cannot have embedded double slashes - normalizing " +
              (o + " -> " + n),
          ));
      }
      n.startsWith("/") ? (s = Rd(n.substring(1), "/")) : (s = Rd(n, t));
    }
  else s = t;
  return { pathname: s, search: Gw(r), hash: qw(i) };
}
function Rd(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Ma(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Ww(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function gc(e, t) {
  let n = Ww(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function yc(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = jr(e))
    : ((i = ji({}, e)),
      ae(
        !i.pathname || !i.pathname.includes("?"),
        Ma("?", "pathname", "search", i),
      ),
      ae(
        !i.pathname || !i.pathname.includes("#"),
        Ma("#", "pathname", "hash", i),
      ),
      ae(!i.search || !i.search.includes("#"), Ma("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    a;
  if (o == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && o.startsWith("..")) {
      let d = o.split("/");
      for (; d[0] === ".."; ) (d.shift(), (f -= 1));
      i.pathname = d.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = Hw(i, a),
    u = o && o !== "/" && o.endsWith("/"),
    c = (s || o === ".") && n.endsWith("/");
  return (!l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l);
}
const _g = (e) => e.replace(/\/\/+/g, "/"),
  fn = (e) => _g(e.join("/")),
  Kw = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Gw = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  qw = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Xw(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Ag = ["post", "put", "patch", "delete"];
new Set(Ag);
const Qw = ["get", ...Ag];
new Set(Qw);
/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Vi() {
  return (
    (Vi = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Vi.apply(null, arguments)
  );
}
const vc = x.createContext(null),
  Yw = x.createContext(null),
  wn = x.createContext(null),
  qo = x.createContext(null),
  kt = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Og = x.createContext(null);
function Jw(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Vr() || ae(!1);
  let { basename: r, navigator: i } = x.useContext(wn),
    { hash: s, pathname: o, search: a } = Lg(e, { relative: n }),
    l = o;
  return (
    r !== "/" && (l = o === "/" ? r : fn([r, o])),
    i.createHref({ pathname: l, search: a, hash: s })
  );
}
function Vr() {
  return x.useContext(qo) != null;
}
function $t() {
  return (Vr() || ae(!1), x.useContext(qo).location);
}
function Dg(e) {
  x.useContext(wn).static || x.useLayoutEffect(e);
}
function wc() {
  let { isDataRoute: e } = x.useContext(kt);
  return e ? hx() : Zw();
}
function Zw() {
  Vr() || ae(!1);
  let e = x.useContext(vc),
    { basename: t, future: n, navigator: r } = x.useContext(wn),
    { matches: i } = x.useContext(kt),
    { pathname: s } = $t(),
    o = JSON.stringify(gc(i, n.v7_relativeSplatPath)),
    a = x.useRef(!1);
  return (
    Dg(() => {
      a.current = !0;
    }),
    x.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let f = yc(u, JSON.parse(o), s, c.relative === "path");
        (e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : fn([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c));
      },
      [t, r, o, s, e],
    )
  );
}
const ex = x.createContext(null);
function tx(e) {
  let t = x.useContext(kt).outlet;
  return t && x.createElement(ex.Provider, { value: e }, t);
}
function w2() {
  let { matches: e } = x.useContext(kt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Lg(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = x.useContext(wn),
    { matches: i } = x.useContext(kt),
    { pathname: s } = $t(),
    o = JSON.stringify(gc(i, r.v7_relativeSplatPath));
  return x.useMemo(() => yc(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
}
function nx(e, t) {
  return rx(e, t);
}
function rx(e, t, n, r) {
  Vr() || ae(!1);
  let { navigator: i } = x.useContext(wn),
    { matches: s } = x.useContext(kt),
    o = s[s.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let u = $t(),
    c;
  if (t) {
    var f;
    let w = typeof t == "string" ? jr(t) : t;
    (l === "/" || ((f = w.pathname) != null && f.startsWith(l)) || ae(!1),
      (c = w));
  } else c = u;
  let d = c.pathname || "/",
    g = d;
  if (l !== "/") {
    let w = l.replace(/^\//, "").split("/");
    g = "/" + d.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let y = Rw(e, { pathname: g }),
    v = lx(
      y &&
        y.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, a, w.params),
            pathname: fn([
              l,
              i.encodeLocation
                ? i.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? l
                : fn([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          }),
        ),
      s,
      n,
      r,
    );
  return t && v
    ? x.createElement(
        qo.Provider,
        {
          value: {
            location: Vi(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: tn.Pop,
          },
        },
        v,
      )
    : v;
}
function ix() {
  let e = dx(),
    t = Xw(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: i }, n) : null,
    null,
  );
}
const sx = x.createElement(ix, null);
class ox extends x.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          kt.Provider,
          { value: this.props.routeContext },
          x.createElement(Og.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function ax(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = x.useContext(vc);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(kt.Provider, { value: t }, r)
  );
}
function lx(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = o.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0,
    );
    (c >= 0 || ae(!1), (o = o.slice(0, Math.min(o.length, c + 1))));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let f = o[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: d, errors: g } = n,
          y =
            f.route.loader &&
            d[f.route.id] === void 0 &&
            (!g || g[f.route.id] === void 0);
        if (f.route.lazy || y) {
          ((l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  return o.reduceRight((c, f, d) => {
    let g,
      y = !1,
      v = null,
      w = null;
    n &&
      ((g = a && f.route.id ? a[f.route.id] : void 0),
      (v = f.route.errorElement || sx),
      l &&
        (u < 0 && d === 0
          ? (px("route-fallback"), (y = !0), (w = null))
          : u === d &&
            ((y = !0), (w = f.route.hydrateFallbackElement || null))));
    let h = t.concat(o.slice(0, d + 1)),
      p = () => {
        let m;
        return (
          g
            ? (m = v)
            : y
              ? (m = w)
              : f.route.Component
                ? (m = x.createElement(f.route.Component, null))
                : f.route.element
                  ? (m = f.route.element)
                  : (m = c),
          x.createElement(ax, {
            match: f,
            routeContext: { outlet: c, matches: h, isDataRoute: n != null },
            children: m,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? x.createElement(ox, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: g,
          children: p(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var Ng = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Ng || {}),
  Mg = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Mg || {});
function ux(e) {
  let t = x.useContext(vc);
  return (t || ae(!1), t);
}
function cx(e) {
  let t = x.useContext(Yw);
  return (t || ae(!1), t);
}
function fx(e) {
  let t = x.useContext(kt);
  return (t || ae(!1), t);
}
function jg(e) {
  let t = fx(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || ae(!1), n.route.id);
}
function dx() {
  var e;
  let t = x.useContext(Og),
    n = cx(),
    r = jg();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function hx() {
  let { router: e } = ux(Ng.UseNavigateStable),
    t = jg(Mg.UseNavigateStable),
    n = x.useRef(!1);
  return (
    Dg(() => {
      n.current = !0;
    }),
    x.useCallback(
      function (i, s) {
        (s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Vi({ fromRouteId: t }, s))));
      },
      [e, t],
    )
  );
}
const _d = {};
function px(e, t, n) {
  _d[e] || (_d[e] = !0);
}
function mx(e, t) {
  (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
}
function Vg(e) {
  let { to: t, replace: n, state: r, relative: i } = e;
  Vr() || ae(!1);
  let { future: s, static: o } = x.useContext(wn),
    { matches: a } = x.useContext(kt),
    { pathname: l } = $t(),
    u = wc(),
    c = yc(t, gc(a, s.v7_relativeSplatPath), l, i === "path"),
    f = JSON.stringify(c);
  return (
    x.useEffect(
      () => u(JSON.parse(f), { replace: n, state: r, relative: i }),
      [u, f, i, n, r],
    ),
    null
  );
}
function wo(e) {
  return tx(e.context);
}
function Y(e) {
  ae(!1);
}
function gx(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = tn.Pop,
    navigator: s,
    static: o = !1,
    future: a,
  } = e;
  Vr() && ae(!1);
  let l = t.replace(/^\/*/, "/"),
    u = x.useMemo(
      () => ({
        basename: l,
        navigator: s,
        static: o,
        future: Vi({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, s, o],
    );
  typeof r == "string" && (r = jr(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: d = "",
      state: g = null,
      key: y = "default",
    } = r,
    v = x.useMemo(() => {
      let w = mc(c, l);
      return w == null
        ? null
        : {
            location: { pathname: w, search: f, hash: d, state: g, key: y },
            navigationType: i,
          };
    }, [l, c, f, d, g, y, i]);
  return v == null
    ? null
    : x.createElement(
        wn.Provider,
        { value: u },
        x.createElement(qo.Provider, { children: n, value: v }),
      );
}
function yx(e) {
  let { children: t, location: n } = e;
  return nx(ql(t), n);
}
new Promise(() => {});
function ql(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, i) => {
      if (!x.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === x.Fragment) {
        n.push.apply(n, ql(r.props.children, s));
        return;
      }
      (r.type !== Y && ae(!1), !r.props.index || !r.props.children || ae(!1));
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (o.children = ql(r.props.children, s)), n.push(o));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xl() {
  return (
    (Xl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Xl.apply(null, arguments)
  );
}
function vx(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function wx(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function xx(e, t) {
  return e.button === 0 && (!t || t === "_self") && !wx(e);
}
function Ql(e) {
  return (
    e === void 0 && (e = ""),
    new URLSearchParams(
      typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((i) => [n, i]) : [[n, r]]);
          }, []),
    )
  );
}
function Sx(e, t) {
  let n = Ql(e);
  return (
    t &&
      t.forEach((r, i) => {
        n.has(i) ||
          t.getAll(i).forEach((s) => {
            n.append(i, s);
          });
      }),
    n
  );
}
const Ex = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  Px = "6";
try {
  window.__reactRouterVersion = Px;
} catch {}
const Cx = "startTransition",
  Ad = dv[Cx];
function Tx(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = x.useRef();
  s.current == null && (s.current = Cw({ window: i, v5Compat: !0 }));
  let o = s.current,
    [a, l] = x.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = r || {},
    c = x.useCallback(
      (f) => {
        u && Ad ? Ad(() => l(f)) : l(f);
      },
      [l, u],
    );
  return (
    x.useLayoutEffect(() => o.listen(c), [o, c]),
    x.useEffect(() => mx(r), [r]),
    x.createElement(gx, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: r,
    })
  );
}
const kx =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Rx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  xo = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        viewTransition: f,
      } = t,
      d = vx(t, Ex),
      { basename: g } = x.useContext(wn),
      y,
      v = !1;
    if (typeof u == "string" && Rx.test(u) && ((y = u), kx))
      try {
        let m = new URL(window.location.href),
          E = u.startsWith("//") ? new URL(m.protocol + u) : new URL(u),
          P = mc(E.pathname, g);
        E.origin === m.origin && P != null
          ? (u = P + E.search + E.hash)
          : (v = !0);
      } catch {}
    let w = Jw(u, { relative: i }),
      h = _x(u, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: i,
        viewTransition: f,
      });
    function p(m) {
      (r && r(m), m.defaultPrevented || h(m));
    }
    return x.createElement(
      "a",
      Xl({}, d, { href: y || w, onClick: v || s ? r : p, ref: n, target: l }),
    );
  });
var Od;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(Od || (Od = {}));
var Dd;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(Dd || (Dd = {}));
function _x(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    l = wc(),
    u = $t(),
    c = Lg(e, { relative: o });
  return x.useCallback(
    (f) => {
      if (xx(f, n)) {
        f.preventDefault();
        let d = r !== void 0 ? r : vo(u) === vo(c);
        l(e, {
          replace: d,
          state: i,
          preventScrollReset: s,
          relative: o,
          viewTransition: a,
        });
      }
    },
    [u, l, c, r, i, n, e, s, o, a],
  );
}
function x2(e) {
  let t = x.useRef(Ql(e)),
    n = x.useRef(!1),
    r = $t(),
    i = x.useMemo(() => Sx(r.search, n.current ? null : t.current), [r.search]),
    s = wc(),
    o = x.useCallback(
      (a, l) => {
        const u = Ql(typeof a == "function" ? a(i) : a);
        ((n.current = !0), s("?" + u, l));
      },
      [s, i],
    );
  return [i, o];
}
let Ax = { data: "" },
  Ox = (e) => {
    if (typeof window == "object") {
      let t =
        (e ? e.querySelector("#_goober") : window._goober) ||
        Object.assign(document.createElement("style"), {
          innerHTML: " ",
          id: "_goober",
        });
      return (
        (t.nonce = window.__nonce__),
        t.parentNode || (e || document.head).appendChild(t),
        t.firstChild
      );
    }
    return e || Ax;
  },
  Dx = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
  Lx = /\/\*[^]*?\*\/|  +/g,
  Ld = /\n+/g,
  Jt = (e, t) => {
    let n = "",
      r = "",
      i = "";
    for (let s in e) {
      let o = e[s];
      s[0] == "@"
        ? s[1] == "i"
          ? (n = s + " " + o + ";")
          : (r +=
              s[1] == "f"
                ? Jt(o, s)
                : s + "{" + Jt(o, s[1] == "k" ? "" : t) + "}")
        : typeof o == "object"
          ? (r += Jt(
              o,
              t
                ? t.replace(/([^,])+/g, (a) =>
                    s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (l) =>
                      /&/.test(l) ? l.replace(/&/g, a) : a ? a + " " + l : l,
                    ),
                  )
                : s,
            ))
          : o != null &&
            ((s = s[1] == "-" ? s : s.replace(/[A-Z]/g, "-$&").toLowerCase()),
            (i += Jt.p ? Jt.p(s, o) : s + ":" + o + ";"));
    }
    return n + (t && i ? t + "{" + i + "}" : i) + r;
  },
  Kt = {},
  Fg = (e) => {
    if (typeof e == "object") {
      let t = "";
      for (let n in e) t += n + Fg(e[n]);
      return t;
    }
    return e;
  },
  Nx = (e, t, n, r, i) => {
    let s = Fg(e),
      o =
        Kt[s] ||
        (Kt[s] = ((l) => {
          let u = 0,
            c = 11;
          for (; u < l.length; ) c = (101 * c + l.charCodeAt(u++)) >>> 0;
          return "go" + c;
        })(s));
    if (!Kt[o]) {
      let l =
        s !== e
          ? e
          : ((u) => {
              let c,
                f,
                d = [{}];
              for (; (c = Dx.exec(u.replace(Lx, ""))); )
                c[4]
                  ? d.shift()
                  : c[3]
                    ? ((f = c[3].replace(Ld, " ").trim()),
                      d.unshift((d[0][f] = d[0][f] || {})))
                    : (d[0][c[1]] = c[2].replace(Ld, " ").trim());
              return d[0];
            })(e);
      Kt[o] = Jt(i ? { ["@keyframes " + o]: l } : l, n ? "" : "." + o);
    }
    let a = n && Kt.g;
    return (
      n && (Kt.g = Kt[o]),
      ((l, u, c, f) => {
        f
          ? (u.data = u.data.replace(f, l))
          : u.data.indexOf(l) === -1 && (u.data = c ? l + u.data : u.data + l);
      })(Kt[o], t, r, a),
      o
    );
  },
  Mx = (e, t, n) =>
    e.reduce((r, i, s) => {
      let o = t[s];
      if (o && o.call) {
        let a = o(n),
          l = (a && a.props && a.props.className) || (/^go/.test(a) && a);
        o = l
          ? "." + l
          : a && typeof a == "object"
            ? a.props
              ? ""
              : Jt(a, "")
            : a === !1
              ? ""
              : a;
      }
      return r + i + (o ?? "");
    }, "");
function Xo(e) {
  let t = this || {},
    n = e.call ? e(t.p) : e;
  return Nx(
    n.unshift
      ? n.raw
        ? Mx(n, [].slice.call(arguments, 1), t.p)
        : n.reduce((r, i) => Object.assign(r, i && i.call ? i(t.p) : i), {})
      : n,
    Ox(t.target),
    t.g,
    t.o,
    t.k,
  );
}
let Ig, Yl, Jl;
Xo.bind({ g: 1 });
let bt = Xo.bind({ k: 1 });
function jx(e, t, n, r) {
  ((Jt.p = t), (Ig = e), (Yl = n), (Jl = r));
}
function xn(e, t) {
  let n = this || {};
  return function () {
    let r = arguments;
    function i(s, o) {
      let a = Object.assign({}, s),
        l = a.className || i.className;
      ((n.p = Object.assign({ theme: Yl && Yl() }, a)),
        (n.o = /go\d/.test(l)),
        (a.className = Xo.apply(n, r) + (l ? " " + l : "")));
      let u = e;
      return (
        e[0] && ((u = a.as || e), delete a.as),
        Jl && u[0] && Jl(a),
        Ig(u, a)
      );
    }
    return i;
  };
}
var Vx = (e) => typeof e == "function",
  So = (e, t) => (Vx(e) ? e(t) : e),
  Fx = (() => {
    let e = 0;
    return () => (++e).toString();
  })(),
  Bg = (() => {
    let e;
    return () => {
      if (e === void 0 && typeof window < "u") {
        let t = matchMedia("(prefers-reduced-motion: reduce)");
        e = !t || t.matches;
      }
      return e;
    };
  })(),
  Ix = 20,
  xc = "default",
  bg = (e, t) => {
    let { toastLimit: n } = e.settings;
    switch (t.type) {
      case 0:
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, n) };
      case 1:
        return {
          ...e,
          toasts: e.toasts.map((o) =>
            o.id === t.toast.id ? { ...o, ...t.toast } : o,
          ),
        };
      case 2:
        let { toast: r } = t;
        return bg(e, {
          type: e.toasts.find((o) => o.id === r.id) ? 1 : 0,
          toast: r,
        });
      case 3:
        let { toastId: i } = t;
        return {
          ...e,
          toasts: e.toasts.map((o) =>
            o.id === i || i === void 0
              ? { ...o, dismissed: !0, visible: !1 }
              : o,
          ),
        };
      case 4:
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((o) => o.id !== t.toastId) };
      case 5:
        return { ...e, pausedAt: t.time };
      case 6:
        let s = t.time - (e.pausedAt || 0);
        return {
          ...e,
          pausedAt: void 0,
          toasts: e.toasts.map((o) => ({
            ...o,
            pauseDuration: o.pauseDuration + s,
          })),
        };
    }
  },
  bs = [],
  Ug = { toasts: [], pausedAt: void 0, settings: { toastLimit: Ix } },
  St = {},
  zg = (e, t = xc) => {
    ((St[t] = bg(St[t] || Ug, e)),
      bs.forEach(([n, r]) => {
        n === t && r(St[t]);
      }));
  },
  $g = (e) => Object.keys(St).forEach((t) => zg(e, t)),
  Bx = (e) => Object.keys(St).find((t) => St[t].toasts.some((n) => n.id === e)),
  Qo =
    (e = xc) =>
    (t) => {
      zg(t, e);
    },
  bx = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
  Ux = (e = {}, t = xc) => {
    let [n, r] = x.useState(St[t] || Ug),
      i = x.useRef(St[t]);
    x.useEffect(
      () => (
        i.current !== St[t] && r(St[t]),
        bs.push([t, r]),
        () => {
          let o = bs.findIndex(([a]) => a === t);
          o > -1 && bs.splice(o, 1);
        }
      ),
      [t],
    );
    let s = n.toasts.map((o) => {
      var a, l, u;
      return {
        ...e,
        ...e[o.type],
        ...o,
        removeDelay:
          o.removeDelay ||
          ((a = e[o.type]) == null ? void 0 : a.removeDelay) ||
          (e == null ? void 0 : e.removeDelay),
        duration:
          o.duration ||
          ((l = e[o.type]) == null ? void 0 : l.duration) ||
          (e == null ? void 0 : e.duration) ||
          bx[o.type],
        style: {
          ...e.style,
          ...((u = e[o.type]) == null ? void 0 : u.style),
          ...o.style,
        },
      };
    });
    return { ...n, toasts: s };
  },
  zx = (e, t = "blank", n) => ({
    createdAt: Date.now(),
    visible: !0,
    dismissed: !1,
    type: t,
    ariaProps: { role: "status", "aria-live": "polite" },
    message: e,
    pauseDuration: 0,
    ...n,
    id: (n == null ? void 0 : n.id) || Fx(),
  }),
  qi = (e) => (t, n) => {
    let r = zx(t, e, n);
    return (Qo(r.toasterId || Bx(r.id))({ type: 2, toast: r }), r.id);
  },
  ce = (e, t) => qi("blank")(e, t);
ce.error = qi("error");
ce.success = qi("success");
ce.loading = qi("loading");
ce.custom = qi("custom");
ce.dismiss = (e, t) => {
  let n = { type: 3, toastId: e };
  t ? Qo(t)(n) : $g(n);
};
ce.dismissAll = (e) => ce.dismiss(void 0, e);
ce.remove = (e, t) => {
  let n = { type: 4, toastId: e };
  t ? Qo(t)(n) : $g(n);
};
ce.removeAll = (e) => ce.remove(void 0, e);
ce.promise = (e, t, n) => {
  let r = ce.loading(t.loading, { ...n, ...(n == null ? void 0 : n.loading) });
  return (
    typeof e == "function" && (e = e()),
    e
      .then((i) => {
        let s = t.success ? So(t.success, i) : void 0;
        return (
          s
            ? ce.success(s, {
                id: r,
                ...n,
                ...(n == null ? void 0 : n.success),
              })
            : ce.dismiss(r),
          i
        );
      })
      .catch((i) => {
        let s = t.error ? So(t.error, i) : void 0;
        s
          ? ce.error(s, { id: r, ...n, ...(n == null ? void 0 : n.error) })
          : ce.dismiss(r);
      }),
    e
  );
};
var $x = 1e3,
  Hx = (e, t = "default") => {
    let { toasts: n, pausedAt: r } = Ux(e, t),
      i = x.useRef(new Map()).current,
      s = x.useCallback((f, d = $x) => {
        if (i.has(f)) return;
        let g = setTimeout(() => {
          (i.delete(f), o({ type: 4, toastId: f }));
        }, d);
        i.set(f, g);
      }, []);
    x.useEffect(() => {
      if (r) return;
      let f = Date.now(),
        d = n.map((g) => {
          if (g.duration === 1 / 0) return;
          let y = (g.duration || 0) + g.pauseDuration - (f - g.createdAt);
          if (y < 0) {
            g.visible && ce.dismiss(g.id);
            return;
          }
          return setTimeout(() => ce.dismiss(g.id, t), y);
        });
      return () => {
        d.forEach((g) => g && clearTimeout(g));
      };
    }, [n, r, t]);
    let o = x.useCallback(Qo(t), [t]),
      a = x.useCallback(() => {
        o({ type: 5, time: Date.now() });
      }, [o]),
      l = x.useCallback(
        (f, d) => {
          o({ type: 1, toast: { id: f, height: d } });
        },
        [o],
      ),
      u = x.useCallback(() => {
        r && o({ type: 6, time: Date.now() });
      }, [r, o]),
      c = x.useCallback(
        (f, d) => {
          let {
              reverseOrder: g = !1,
              gutter: y = 8,
              defaultPosition: v,
            } = d || {},
            w = n.filter(
              (m) => (m.position || v) === (f.position || v) && m.height,
            ),
            h = w.findIndex((m) => m.id === f.id),
            p = w.filter((m, E) => E < h && m.visible).length;
          return w
            .filter((m) => m.visible)
            .slice(...(g ? [p + 1] : [0, p]))
            .reduce((m, E) => m + (E.height || 0) + y, 0);
        },
        [n],
      );
    return (
      x.useEffect(() => {
        n.forEach((f) => {
          if (f.dismissed) s(f.id, f.removeDelay);
          else {
            let d = i.get(f.id);
            d && (clearTimeout(d), i.delete(f.id));
          }
        });
      }, [n, s]),
      {
        toasts: n,
        handlers: {
          updateHeight: l,
          startPause: a,
          endPause: u,
          calculateOffset: c,
        },
      }
    );
  },
  Wx = bt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
  Kx = bt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  Gx = bt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
  qx = xn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Wx} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Kx} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Gx} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
  Xx = bt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
  Qx = xn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${Xx} 1s linear infinite;
`,
  Yx = bt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
  Jx = bt`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
  Zx = xn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Yx} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Jx} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
  eS = xn("div")`
  position: absolute;
`,
  tS = xn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
  nS = bt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
  rS = xn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${nS} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
  iS = ({ toast: e }) => {
    let { icon: t, type: n, iconTheme: r } = e;
    return t !== void 0
      ? typeof t == "string"
        ? x.createElement(rS, null, t)
        : t
      : n === "blank"
        ? null
        : x.createElement(
            tS,
            null,
            x.createElement(Qx, { ...r }),
            n !== "loading" &&
              x.createElement(
                eS,
                null,
                n === "error"
                  ? x.createElement(qx, { ...r })
                  : x.createElement(Zx, { ...r }),
              ),
          );
  },
  sS = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
  oS = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
  aS = "0%{opacity:0;} 100%{opacity:1;}",
  lS = "0%{opacity:1;} 100%{opacity:0;}",
  uS = xn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
  cS = xn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
  fS = (e, t) => {
    let n = e.includes("top") ? 1 : -1,
      [r, i] = Bg() ? [aS, lS] : [sS(n), oS(n)];
    return {
      animation: t
        ? `${bt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
        : `${bt(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
    };
  },
  dS = x.memo(({ toast: e, position: t, style: n, children: r }) => {
    let i = e.height
        ? fS(e.position || t || "top-center", e.visible)
        : { opacity: 0 },
      s = x.createElement(iS, { toast: e }),
      o = x.createElement(cS, { ...e.ariaProps }, So(e.message, e));
    return x.createElement(
      uS,
      { className: e.className, style: { ...i, ...n, ...e.style } },
      typeof r == "function"
        ? r({ icon: s, message: o })
        : x.createElement(x.Fragment, null, s, o),
    );
  });
jx(x.createElement);
var hS = ({
    id: e,
    className: t,
    style: n,
    onHeightUpdate: r,
    children: i,
  }) => {
    let s = x.useCallback(
      (o) => {
        if (o) {
          let a = () => {
            let l = o.getBoundingClientRect().height;
            r(e, l);
          };
          (a(),
            new MutationObserver(a).observe(o, {
              subtree: !0,
              childList: !0,
              characterData: !0,
            }));
        }
      },
      [e, r],
    );
    return x.createElement("div", { ref: s, className: t, style: n }, i);
  },
  pS = (e, t) => {
    let n = e.includes("top"),
      r = n ? { top: 0 } : { bottom: 0 },
      i = e.includes("center")
        ? { justifyContent: "center" }
        : e.includes("right")
          ? { justifyContent: "flex-end" }
          : {};
    return {
      left: 0,
      right: 0,
      display: "flex",
      position: "absolute",
      transition: Bg() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
      transform: `translateY(${t * (n ? 1 : -1)}px)`,
      ...r,
      ...i,
    };
  },
  mS = Xo`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
  Ss = 16,
  gS = ({
    reverseOrder: e,
    position: t = "top-center",
    toastOptions: n,
    gutter: r,
    children: i,
    toasterId: s,
    containerStyle: o,
    containerClassName: a,
  }) => {
    let { toasts: l, handlers: u } = Hx(n, s);
    return x.createElement(
      "div",
      {
        "data-rht-toaster": s || "",
        style: {
          position: "fixed",
          zIndex: 9999,
          top: Ss,
          left: Ss,
          right: Ss,
          bottom: Ss,
          pointerEvents: "none",
          ...o,
        },
        className: a,
        onMouseEnter: u.startPause,
        onMouseLeave: u.endPause,
      },
      l.map((c) => {
        let f = c.position || t,
          d = u.calculateOffset(c, {
            reverseOrder: e,
            gutter: r,
            defaultPosition: t,
          }),
          g = pS(f, d);
        return x.createElement(
          hS,
          {
            id: c.id,
            key: c.id,
            onHeightUpdate: u.updateHeight,
            className: c.visible ? mS : "",
            style: g,
          },
          c.type === "custom"
            ? So(c.message, c)
            : i
              ? i(c)
              : x.createElement(dS, { toast: c, position: f }),
        );
      }),
    );
  },
  ja = ce;
const yS = "modulepreload",
  vS = function (e) {
    return "/" + e;
  },
  Nd = {},
  de = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      document.getElementsByTagName("link");
      const o = document.querySelector("meta[property=csp-nonce]"),
        a =
          (o == null ? void 0 : o.nonce) ||
          (o == null ? void 0 : o.getAttribute("nonce"));
      i = Promise.allSettled(
        n.map((l) => {
          if (((l = vS(l)), l in Nd)) return;
          Nd[l] = !0;
          const u = l.endsWith(".css"),
            c = u ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const f = document.createElement("link");
          if (
            ((f.rel = u ? "stylesheet" : yS),
            u || (f.as = "script"),
            (f.crossOrigin = ""),
            (f.href = l),
            a && f.setAttribute("nonce", a),
            document.head.appendChild(f),
            u)
          )
            return new Promise((d, g) => {
              (f.addEventListener("load", d),
                f.addEventListener("error", () =>
                  g(new Error(`Unable to preload CSS for ${l}`)),
                ));
            });
        }),
      );
    }
    function s(o) {
      const a = new Event("vite:preloadError", { cancelable: !0 });
      if (((a.payload = o), window.dispatchEvent(a), !a.defaultPrevented))
        throw o;
    }
    return i.then((o) => {
      for (const a of o || []) a.status === "rejected" && s(a.reason);
      return t().catch(s);
    });
  },
  Sc = x.createContext({});
function Ec(e) {
  const t = x.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const Yo = x.createContext(null),
  Pc = x.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class wS extends x.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      ((r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function xS({ children: e, isPresent: t }) {
  const n = x.useId(),
    r = x.useRef(null),
    i = x.useRef({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: s } = x.useContext(Pc);
  return (
    x.useInsertionEffect(() => {
      const { width: o, height: a, top: l, left: u } = i.current;
      if (t || !r.current || !o || !a) return;
      r.current.dataset.motionPopId = n;
      const c = document.createElement("style");
      return (
        s && (c.nonce = s),
        document.head.appendChild(c),
        c.sheet &&
          c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
          document.head.removeChild(c);
        }
      );
    }, [t]),
    C.jsx(wS, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: x.cloneElement(e, { ref: r }),
    })
  );
}
const SS = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
}) => {
  const a = Ec(ES),
    l = x.useId(),
    u = x.useCallback(
      (f) => {
        a.set(f, !0);
        for (const d of a.values()) if (!d) return;
        r && r();
      },
      [a, r],
    ),
    c = x.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: u,
        register: (f) => (a.set(f, !1), () => a.delete(f)),
      }),
      s ? [Math.random(), u] : [n, u],
    );
  return (
    x.useMemo(() => {
      a.forEach((f, d) => a.set(d, !1));
    }, [n]),
    x.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    o === "popLayout" && (e = C.jsx(xS, { isPresent: n, children: e })),
    C.jsx(Yo.Provider, { value: c, children: e })
  );
};
function ES() {
  return new Map();
}
function Hg(e = !0) {
  const t = x.useContext(Yo);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    s = x.useId();
  x.useEffect(() => {
    e && i(s);
  }, [e]);
  const o = x.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Es = (e) => e.key || "";
function Md(e) {
  const t = [];
  return (
    x.Children.forEach(e, (n) => {
      x.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Cc = typeof window < "u",
  Wg = Cc ? x.useLayoutEffect : x.useEffect,
  PS = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: s = "sync",
    propagate: o = !1,
  }) => {
    const [a, l] = Hg(o),
      u = x.useMemo(() => Md(e), [e]),
      c = o && !a ? [] : u.map(Es),
      f = x.useRef(!0),
      d = x.useRef(u),
      g = Ec(() => new Map()),
      [y, v] = x.useState(u),
      [w, h] = x.useState(u);
    Wg(() => {
      ((f.current = !1), (d.current = u));
      for (let E = 0; E < w.length; E++) {
        const P = Es(w[E]);
        c.includes(P) ? g.delete(P) : g.get(P) !== !0 && g.set(P, !1);
      }
    }, [w, c.length, c.join("-")]);
    const p = [];
    if (u !== y) {
      let E = [...u];
      for (let P = 0; P < w.length; P++) {
        const T = w[P],
          _ = Es(T);
        c.includes(_) || (E.splice(P, 0, T), p.push(T));
      }
      (s === "wait" && p.length && (E = p), h(Md(E)), v(u));
      return;
    }
    const { forceRender: m } = x.useContext(Sc);
    return C.jsx(C.Fragment, {
      children: w.map((E) => {
        const P = Es(E),
          T = o && !a ? !1 : u === w || c.includes(P),
          _ = () => {
            if (g.has(P)) g.set(P, !0);
            else return;
            let k = !0;
            (g.forEach((V) => {
              V || (k = !1);
            }),
              k &&
                (m == null || m(),
                h(d.current),
                o && (l == null || l()),
                r && r()));
          };
        return C.jsx(
          SS,
          {
            isPresent: T,
            initial: !f.current || n ? void 0 : !1,
            custom: T ? void 0 : t,
            presenceAffectsLayout: i,
            mode: s,
            onExitComplete: T ? void 0 : _,
            children: E,
          },
          P,
        );
      }),
    });
  },
  Ke = (e) => e;
let Kg = Ke;
function Tc(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Rr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Mt = (e) => e * 1e3,
  jt = (e) => e / 1e3,
  CS = { useManualTiming: !1 };
function TS(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    i = !1;
  const s = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(u) {
    (s.has(u) && (l.schedule(u), e()), u(o));
  }
  const l = {
    schedule: (u, c = !1, f = !1) => {
      const g = f && r ? t : n;
      return (c && s.add(u), g.has(u) || g.add(u), u);
    },
    cancel: (u) => {
      (n.delete(u), s.delete(u));
    },
    process: (u) => {
      if (((o = u), r)) {
        i = !0;
        return;
      }
      ((r = !0),
        ([t, n] = [n, t]),
        t.forEach(a),
        t.clear(),
        (r = !1),
        i && ((i = !1), l.process(u)));
    },
  };
  return l;
}
const Ps = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  kS = 40;
function Gg(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = Ps.reduce((h, p) => ((h[p] = TS(s)), h), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: u,
      preRender: c,
      render: f,
      postRender: d,
    } = o,
    g = () => {
      const h = performance.now();
      ((n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(h - i.timestamp, kS), 1)),
        (i.timestamp = h),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(g)));
    },
    y = () => {
      ((n = !0), (r = !0), i.isProcessing || e(g));
    };
  return {
    schedule: Ps.reduce((h, p) => {
      const m = o[p];
      return (
        (h[p] = (E, P = !1, T = !1) => (n || y(), m.schedule(E, P, T))),
        h
      );
    }, {}),
    cancel: (h) => {
      for (let p = 0; p < Ps.length; p++) o[Ps[p]].cancel(h);
    },
    state: i,
    steps: o,
  };
}
const {
    schedule: q,
    cancel: pn,
    state: ye,
    steps: Va,
  } = Gg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ke, !0),
  qg = x.createContext({ strict: !1 }),
  jd = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  _r = {};
for (const e in jd) _r[e] = { isEnabled: (t) => jd[e].some((n) => !!t[n]) };
function RS(e) {
  for (const t in e) _r[t] = { ..._r[t], ...e[t] };
}
const _S = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Eo(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    _S.has(e)
  );
}
let Xg = (e) => !Eo(e);
function AS(e) {
  e && (Xg = (t) => (t.startsWith("on") ? !Eo(t) : e(t)));
}
try {
  AS(require("@emotion/is-prop-valid").default);
} catch {}
function OS(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Xg(i) ||
        (n === !0 && Eo(i)) ||
        (!t && !Eo(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function DS(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, i) =>
      i === "create" ? e : (t.has(i) || t.set(i, e(i)), t.get(i)),
  });
}
const Jo = x.createContext({});
function Fi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Zo(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const kc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Rc = ["initial", ...kc];
function ea(e) {
  return Zo(e.animate) || Rc.some((t) => Fi(e[t]));
}
function Qg(e) {
  return !!(ea(e) || e.variants);
}
function LS(e, t) {
  if (ea(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Fi(n) ? n : void 0,
      animate: Fi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function NS(e) {
  const { initial: t, animate: n } = LS(e, x.useContext(Jo));
  return x.useMemo(() => ({ initial: t, animate: n }), [Vd(t), Vd(n)]);
}
function Vd(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const MS = Symbol.for("motionComponentSymbol");
function ur(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function jS(e, t, n) {
  return x.useCallback(
    (r) => {
      (r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : ur(n) && (n.current = r)));
    },
    [t],
  );
}
const _c = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  VS = "framerAppearId",
  Yg = "data-" + _c(VS),
  { schedule: Ac } = Gg(queueMicrotask, !1),
  Jg = x.createContext({});
function FS(e, t, n, r, i) {
  var s, o;
  const { visualElement: a } = x.useContext(Jo),
    l = x.useContext(qg),
    u = x.useContext(Yo),
    c = x.useContext(Pc).reducedMotion,
    f = x.useRef(null);
  ((r = r || l.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c,
      })));
  const d = f.current,
    g = x.useContext(Jg);
  d &&
    !d.projection &&
    i &&
    (d.type === "html" || d.type === "svg") &&
    IS(f.current, n, i, g);
  const y = x.useRef(!1);
  x.useInsertionEffect(() => {
    d && y.current && d.update(n, u);
  });
  const v = n[Yg],
    w = x.useRef(
      !!v &&
        !(
          !((s = window.MotionHandoffIsComplete) === null || s === void 0) &&
          s.call(window, v)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, v)),
    );
  return (
    Wg(() => {
      d &&
        ((y.current = !0),
        (window.MotionIsMounted = !0),
        d.updateFeatures(),
        Ac.render(d.render),
        w.current && d.animationState && d.animationState.animateChanges());
    }),
    x.useEffect(() => {
      d &&
        (!w.current && d.animationState && d.animationState.animateChanges(),
        w.current &&
          (queueMicrotask(() => {
            var h;
            (h = window.MotionHandoffMarkAsComplete) === null ||
              h === void 0 ||
              h.call(window, v);
          }),
          (w.current = !1)));
    }),
    d
  );
}
function IS(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: u,
  } = t;
  ((e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : Zg(e.parent),
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && ur(a)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: u,
    }));
}
function Zg(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : Zg(e.parent);
}
function BS({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  var s, o;
  e && RS(e);
  function a(u, c) {
    let f;
    const d = { ...x.useContext(Pc), ...u, layoutId: bS(u) },
      { isStatic: g } = d,
      y = NS(u),
      v = r(u, g);
    if (!g && Cc) {
      US();
      const w = zS(d);
      ((f = w.MeasureLayout),
        (y.visualElement = FS(i, v, d, t, w.ProjectionNode)));
    }
    return C.jsxs(Jo.Provider, {
      value: y,
      children: [
        f && y.visualElement
          ? C.jsx(f, { visualElement: y.visualElement, ...d })
          : null,
        n(i, u, jS(v, y.visualElement, c), v, g, y.visualElement),
      ],
    });
  }
  a.displayName = `motion.${typeof i == "string" ? i : `create(${(o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !== null && o !== void 0 ? o : ""})`}`;
  const l = x.forwardRef(a);
  return ((l[MS] = i), l);
}
function bS({ layoutId: e }) {
  const t = x.useContext(Sc).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function US(e, t) {
  x.useContext(qg).strict;
}
function zS(e) {
  const { drag: t, layout: n } = _r;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const $S = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Oc(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!($S.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Fd(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
      }),
    t
  );
}
function Dc(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Fd(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = Fd(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
const Zl = (e) => Array.isArray(e),
  HS = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  WS = (e) => (Zl(e) ? e[e.length - 1] || 0 : e),
  Re = (e) => !!(e && e.getVelocity);
function Us(e) {
  const t = Re(e) ? e.get() : e;
  return HS(t) ? t.toValue() : t;
}
function KS(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  i,
  s,
) {
  const o = { latestValues: GS(r, i, s, e), renderState: t() };
  return (
    n &&
      ((o.onMount = (a) => n({ props: r, current: a, ...o })),
      (o.onUpdate = (a) => n(a))),
    o
  );
}
const ey = (e) => (t, n) => {
  const r = x.useContext(Jo),
    i = x.useContext(Yo),
    s = () => KS(e, t, r, i);
  return n ? s() : Ec(s);
};
function GS(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const d in s) i[d] = Us(s[d]);
  let { initial: o, animate: a } = e;
  const l = ea(e),
    u = Qg(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const f = c ? a : o;
  if (f && typeof f != "boolean" && !Zo(f)) {
    const d = Array.isArray(f) ? f : [f];
    for (let g = 0; g < d.length; g++) {
      const y = Dc(e, d[g]);
      if (y) {
        const { transitionEnd: v, transition: w, ...h } = y;
        for (const p in h) {
          let m = h[p];
          if (Array.isArray(m)) {
            const E = c ? m.length - 1 : 0;
            m = m[E];
          }
          m !== null && (i[p] = m);
        }
        for (const p in v) i[p] = v[p];
      }
    }
  }
  return i;
}
const Fr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Gn = new Set(Fr),
  ty = (e) => (t) => typeof t == "string" && t.startsWith(e),
  ny = ty("--"),
  qS = ty("var(--"),
  Lc = (e) => (qS(e) ? XS.test(e.split("/*")[0].trim()) : !1),
  XS =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  ry = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Ut = (e, t, n) => (n > t ? t : n < e ? e : n),
  Ir = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Ii = { ...Ir, transform: (e) => Ut(0, 1, e) },
  Cs = { ...Ir, default: 1 },
  Xi = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Gt = Xi("deg"),
  Ct = Xi("%"),
  M = Xi("px"),
  QS = Xi("vh"),
  YS = Xi("vw"),
  Id = {
    ...Ct,
    parse: (e) => Ct.parse(e) / 100,
    transform: (e) => Ct.transform(e * 100),
  },
  JS = {
    borderWidth: M,
    borderTopWidth: M,
    borderRightWidth: M,
    borderBottomWidth: M,
    borderLeftWidth: M,
    borderRadius: M,
    radius: M,
    borderTopLeftRadius: M,
    borderTopRightRadius: M,
    borderBottomRightRadius: M,
    borderBottomLeftRadius: M,
    width: M,
    maxWidth: M,
    height: M,
    maxHeight: M,
    top: M,
    right: M,
    bottom: M,
    left: M,
    padding: M,
    paddingTop: M,
    paddingRight: M,
    paddingBottom: M,
    paddingLeft: M,
    margin: M,
    marginTop: M,
    marginRight: M,
    marginBottom: M,
    marginLeft: M,
    backgroundPositionX: M,
    backgroundPositionY: M,
  },
  ZS = {
    rotate: Gt,
    rotateX: Gt,
    rotateY: Gt,
    rotateZ: Gt,
    scale: Cs,
    scaleX: Cs,
    scaleY: Cs,
    scaleZ: Cs,
    skew: Gt,
    skewX: Gt,
    skewY: Gt,
    distance: M,
    translateX: M,
    translateY: M,
    translateZ: M,
    x: M,
    y: M,
    z: M,
    perspective: M,
    transformPerspective: M,
    opacity: Ii,
    originX: Id,
    originY: Id,
    originZ: M,
  },
  Bd = { ...Ir, transform: Math.round },
  Nc = {
    ...JS,
    ...ZS,
    zIndex: Bd,
    size: M,
    fillOpacity: Ii,
    strokeOpacity: Ii,
    numOctaves: Bd,
  },
  eE = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  tE = Fr.length;
function nE(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < tE; s++) {
    const o = Fr[s],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const u = ry(a, Nc[o]);
      if (!l) {
        i = !1;
        const c = eE[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return ((r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r);
}
function Mc(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const u = t[l];
    if (Gn.has(l)) {
      o = !0;
      continue;
    } else if (ny(l)) {
      i[l] = u;
      continue;
    } else {
      const c = ry(u, Nc[l]);
      l.startsWith("origin") ? ((a = !0), (s[l] = c)) : (r[l] = c);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = nE(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = s;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const rE = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  iE = { offset: "strokeDashoffset", array: "strokeDasharray" };
function sE(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? rE : iE;
  e[s.offset] = M.transform(-r);
  const o = M.transform(t),
    a = M.transform(n);
  e[s.array] = `${o} ${a}`;
}
function bd(e, t, n) {
  return typeof e == "string" ? e : M.transform(t + n * e);
}
function oE(e, t, n) {
  const r = bd(t, e.x, e.width),
    i = bd(n, e.y, e.height);
  return `${r} ${i}`;
}
function jc(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  f,
) {
  if ((Mc(e, u, f), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: d, style: g, dimensions: y } = e;
  (d.transform && (y && (g.transform = d.transform), delete d.transform),
    y &&
      (i !== void 0 || s !== void 0 || g.transform) &&
      (g.transformOrigin = oE(
        y,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5,
      )),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    o !== void 0 && sE(d, o, a, l, !1));
}
const Vc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  iy = () => ({ ...Vc(), attrs: {} }),
  Fc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function sy(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const oy = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function ay(e, t, n, r) {
  sy(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(oy.has(i) ? i : _c(i), t.attrs[i]);
}
const Po = {};
function aE(e) {
  Object.assign(Po, e);
}
function ly(e, { layout: t, layoutId: n }) {
  return (
    Gn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Po[e] || e === "opacity"))
  );
}
function Ic(e, t, n) {
  var r;
  const { style: i } = e,
    s = {};
  for (const o in i)
    (Re(i[o]) ||
      (t.style && Re(t.style[o])) ||
      ly(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (s[o] = i[o]);
  return s;
}
function uy(e, t, n) {
  const r = Ic(e, t, n);
  for (const i in e)
    if (Re(e[i]) || Re(t[i])) {
      const s =
        Fr.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
function lE(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const Ud = ["x", "y", "width", "height", "cx", "cy", "r"],
  uE = {
    useVisualState: ey({
      scrapeMotionValuesFromProps: uy,
      createRenderState: iy,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: i,
      }) => {
        if (!n) return;
        let s = !!e.drag;
        if (!s) {
          for (const a in i)
            if (Gn.has(a)) {
              s = !0;
              break;
            }
        }
        if (!s) return;
        let o = !t;
        if (t)
          for (let a = 0; a < Ud.length; a++) {
            const l = Ud[a];
            e[l] !== t[l] && (o = !0);
          }
        o &&
          q.read(() => {
            (lE(n, r),
              q.render(() => {
                (jc(r, i, Fc(n.tagName), e.transformTemplate), ay(n, r));
              }));
          });
      },
    }),
  },
  cE = {
    useVisualState: ey({
      scrapeMotionValuesFromProps: Ic,
      createRenderState: Vc,
    }),
  };
function cy(e, t, n) {
  for (const r in t) !Re(t[r]) && !ly(r, n) && (e[r] = t[r]);
}
function fE({ transformTemplate: e }, t) {
  return x.useMemo(() => {
    const n = Vc();
    return (Mc(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function dE(e, t) {
  const n = e.style || {},
    r = {};
  return (cy(r, n, e), Object.assign(r, fE(e, t)), r);
}
function hE(e, t) {
  const n = {},
    r = dE(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function pE(e, t, n, r) {
  const i = x.useMemo(() => {
    const s = iy();
    return (
      jc(s, t, Fc(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    (cy(s, e.style, e), (i.style = { ...s, ...i.style }));
  }
  return i;
}
function mE(e = !1) {
  return (n, r, i, { latestValues: s }, o) => {
    const l = (Oc(n) ? pE : hE)(r, s, o, n),
      u = OS(r, typeof n == "string", e),
      c = n !== x.Fragment ? { ...u, ...l, ref: i } : {},
      { children: f } = r,
      d = x.useMemo(() => (Re(f) ? f.get() : f), [f]);
    return x.createElement(n, { ...c, children: d });
  };
}
function gE(e, t) {
  return function (r, { forwardMotionProps: i } = { forwardMotionProps: !1 }) {
    const o = {
      ...(Oc(r) ? uE : cE),
      preloadedFeatures: e,
      useRender: mE(i),
      createVisualElement: t,
      Component: r,
    };
    return BS(o);
  };
}
function fy(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function ta(e, t, n) {
  const r = e.getProps();
  return Dc(r, t, n !== void 0 ? n : r.custom, e);
}
const yE = Tc(() => window.ScrollTimeline !== void 0);
class vE {
  constructor(t) {
    ((this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean)));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t)),
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((i) => {
      if (yE() && i.attachTimeline) return i.attachTimeline(t);
      if (typeof n == "function") return n(i);
    });
    return () => {
      r.forEach((i, s) => {
        (i && i(), this.animations[s].stop());
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class wE extends vE {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
function Bc(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const eu = 2e4;
function dy(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < eu; ) ((t += n), (r = e.next(t)));
  return t >= eu ? 1 / 0 : t;
}
function bc(e) {
  return typeof e == "function";
}
function zd(e, t) {
  ((e.timeline = t), (e.onfinish = null));
}
const Uc = (e) => Array.isArray(e) && typeof e[0] == "number",
  xE = { linearEasing: void 0 };
function SE(e, t) {
  const n = Tc(e);
  return () => {
    var r;
    return (r = xE[t]) !== null && r !== void 0 ? r : n();
  };
}
const Co = SE(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  hy = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++) r += e(Rr(0, i - 1, s)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function py(e) {
  return !!(
    (typeof e == "function" && Co()) ||
    !e ||
    (typeof e == "string" && (e in tu || Co())) ||
    Uc(e) ||
    (Array.isArray(e) && e.every(py))
  );
}
const ni = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  tu = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: ni([0, 0.65, 0.55, 1]),
    circOut: ni([0.55, 0, 1, 0.45]),
    backIn: ni([0.31, 0.01, 0.66, -0.59]),
    backOut: ni([0.33, 1.53, 0.69, 0.99]),
  };
function my(e, t) {
  if (e)
    return typeof e == "function" && Co()
      ? hy(e, t)
      : Uc(e)
        ? ni(e)
        : Array.isArray(e)
          ? e.map((n) => my(n, t) || tu.easeOut)
          : tu[e];
}
const lt = { x: !1, y: !1 };
function gy() {
  return lt.x || lt.y;
}
function EE(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let i = document;
    const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
    return s ? Array.from(s) : [];
  }
  return Array.from(e);
}
function yy(e, t) {
  const n = EE(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function $d(e) {
  return (t) => {
    t.pointerType === "touch" || gy() || e(t);
  };
}
function PE(e, t, n = {}) {
  const [r, i, s] = yy(e, n),
    o = $d((a) => {
      const { target: l } = a,
        u = t(a);
      if (typeof u != "function" || !l) return;
      const c = $d((f) => {
        (u(f), l.removeEventListener("pointerleave", c));
      });
      l.addEventListener("pointerleave", c, i);
    });
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", o, i);
    }),
    s
  );
}
const vy = (e, t) => (t ? (e === t ? !0 : vy(e, t.parentElement)) : !1),
  zc = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  CE = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function TE(e) {
  return CE.has(e.tagName) || e.tabIndex !== -1;
}
const ri = new WeakSet();
function Hd(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Fa(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
  );
}
const kE = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Hd(() => {
    if (ri.has(n)) return;
    Fa(n, "down");
    const i = Hd(() => {
        Fa(n, "up");
      }),
      s = () => Fa(n, "cancel");
    (n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t));
  });
  (n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t));
};
function Wd(e) {
  return zc(e) && !gy();
}
function RE(e, t, n = {}) {
  const [r, i, s] = yy(e, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!Wd(a) || ri.has(l)) return;
      ri.add(l);
      const u = t(a),
        c = (g, y) => {
          (window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", d),
            !(!Wd(g) || !ri.has(l)) &&
              (ri.delete(l), typeof u == "function" && u(g, { success: y })));
        },
        f = (g) => {
          c(g, n.useGlobalTarget || vy(l, g.target));
        },
        d = (g) => {
          c(g, !1);
        };
      (window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", d, i));
    };
  return (
    r.forEach((a) => {
      (!TE(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        a.addEventListener("focus", (u) => kE(u, i), i));
    }),
    s
  );
}
function _E(e) {
  return e === "x" || e === "y"
    ? lt[e]
      ? null
      : ((lt[e] = !0),
        () => {
          lt[e] = !1;
        })
    : lt.x || lt.y
      ? null
      : ((lt.x = lt.y = !0),
        () => {
          lt.x = lt.y = !1;
        });
}
const wy = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Fr,
]);
let zs;
function AE() {
  zs = void 0;
}
const Tt = {
  now: () => (
    zs === void 0 &&
      Tt.set(
        ye.isProcessing || CS.useManualTiming
          ? ye.timestamp
          : performance.now(),
      ),
    zs
  ),
  set: (e) => {
    ((zs = e), queueMicrotask(AE));
  },
};
function $c(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Hc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Wc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ($c(this.subscriptions, t), () => Hc(this.subscriptions, t));
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function xy(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Kd = 30,
  OE = (e) => !isNaN(parseFloat(e));
class DE {
  constructor(t, n = {}) {
    ((this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        const s = Tt.now();
        (this.updatedAt !== s && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current));
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner));
  }
  setCurrent(t) {
    ((this.current = t),
      (this.updatedAt = Tt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = OE(this.current)));
  }
  setPrevFrameValue(t = this.current) {
    ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Wc());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            q.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    (this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r));
  }
  jump(t, n = !0) {
    (this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Tt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Kd
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Kd);
    return xy(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function Bi(e, t) {
  return new DE(e, t);
}
function LE(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Bi(n));
}
function NE(e, t) {
  const n = ta(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = WS(s[o]);
    LE(e, o, a);
  }
}
function ME(e) {
  return !!(Re(e) && e.add);
}
function nu(e, t) {
  const n = e.getValue("willChange");
  if (ME(n)) return n.add(t);
}
function Sy(e) {
  return e.props[Yg];
}
const Ey = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  jE = 1e-7,
  VE = 12;
function FE(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do ((o = t + (n - t) / 2), (s = Ey(o, r, i) - e), s > 0 ? (n = o) : (t = o));
  while (Math.abs(s) > jE && ++a < VE);
  return o;
}
function Qi(e, t, n, r) {
  if (e === t && n === r) return Ke;
  const i = (s) => FE(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : Ey(i(s), t, r));
}
const Py = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  Cy = (e) => (t) => 1 - e(1 - t),
  Ty = Qi(0.33, 1.53, 0.69, 0.99),
  Kc = Cy(Ty),
  ky = Py(Kc),
  Ry = (e) =>
    (e *= 2) < 1 ? 0.5 * Kc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Gc = (e) => 1 - Math.sin(Math.acos(e)),
  _y = Cy(Gc),
  Ay = Py(Gc),
  Oy = (e) => /^0[^.\s]+$/u.test(e);
function IE(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
      ? e === "none" || e === "0" || Oy(e)
      : !0;
}
const pi = (e) => Math.round(e * 1e5) / 1e5,
  qc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function BE(e) {
  return e == null;
}
const bE =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Xc = (e, t) => (n) =>
    !!(
      (typeof n == "string" && bE.test(n) && n.startsWith(e)) ||
      (t && !BE(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Dy = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, a] = r.match(qc);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  UE = (e) => Ut(0, 255, e),
  Ia = { ...Ir, transform: (e) => Math.round(UE(e)) },
  Ln = {
    test: Xc("rgb", "red"),
    parse: Dy("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Ia.transform(e) +
      ", " +
      Ia.transform(t) +
      ", " +
      Ia.transform(n) +
      ", " +
      pi(Ii.transform(r)) +
      ")",
  };
function zE(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const ru = { test: Xc("#"), parse: zE, transform: Ln.transform },
  cr = {
    test: Xc("hsl", "hue"),
    parse: Dy("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Ct.transform(pi(t)) +
      ", " +
      Ct.transform(pi(n)) +
      ", " +
      pi(Ii.transform(r)) +
      ")",
  },
  Te = {
    test: (e) => Ln.test(e) || ru.test(e) || cr.test(e),
    parse: (e) =>
      Ln.test(e) ? Ln.parse(e) : cr.test(e) ? cr.parse(e) : ru.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
          ? Ln.transform(e)
          : cr.transform(e),
  },
  $E =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function HE(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(qc)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match($E)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Ly = "number",
  Ny = "color",
  WE = "var",
  KE = "var(",
  Gd = "${}",
  GE =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function bi(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      GE,
      (l) => (
        Te.test(l)
          ? (r.color.push(s), i.push(Ny), n.push(Te.parse(l)))
          : l.startsWith(KE)
            ? (r.var.push(s), i.push(WE), n.push(l))
            : (r.number.push(s), i.push(Ly), n.push(parseFloat(l))),
        ++s,
        Gd
      ),
    )
    .split(Gd);
  return { values: n, split: a, indexes: r, types: i };
}
function My(e) {
  return bi(e).values;
}
function jy(e) {
  const { split: t, types: n } = bi(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = n[o];
        a === Ly
          ? (s += pi(i[o]))
          : a === Ny
            ? (s += Te.transform(i[o]))
            : (s += i[o]);
      }
    return s;
  };
}
const qE = (e) => (typeof e == "number" ? 0 : e);
function XE(e) {
  const t = My(e);
  return jy(e)(t.map(qE));
}
const mn = {
    test: HE,
    parse: My,
    createTransformer: jy,
    getAnimatableNone: XE,
  },
  QE = new Set(["brightness", "contrast", "saturate", "opacity"]);
function YE(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(qc) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = QE.has(t) ? 1 : 0;
  return (r !== n && (s *= 100), t + "(" + s + i + ")");
}
const JE = /\b([a-z-]*)\(.*?\)/gu,
  iu = {
    ...mn,
    getAnimatableNone: (e) => {
      const t = e.match(JE);
      return t ? t.map(YE).join(" ") : e;
    },
  },
  ZE = {
    ...Nc,
    color: Te,
    backgroundColor: Te,
    outlineColor: Te,
    fill: Te,
    stroke: Te,
    borderColor: Te,
    borderTopColor: Te,
    borderRightColor: Te,
    borderBottomColor: Te,
    borderLeftColor: Te,
    filter: iu,
    WebkitFilter: iu,
  },
  Qc = (e) => ZE[e];
function Vy(e, t) {
  let n = Qc(e);
  return (
    n !== iu && (n = mn),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const eP = new Set(["auto", "none", "0"]);
function tP(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    (typeof s == "string" && !eP.has(s) && bi(s).values.length && (i = e[r]),
      r++);
  }
  if (i && n) for (const s of t) e[s] = Vy(n, i);
}
const qd = (e) => e === Ir || e === M,
  Xd = (e, t) => parseFloat(e.split(", ")[t]),
  Qd =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return Xd(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? Xd(s[1], e) : 0;
      }
    },
  nP = new Set(["x", "y", "z"]),
  rP = Fr.filter((e) => !nP.has(e));
function iP(e) {
  const t = [];
  return (
    rP.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Ar = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Qd(4, 13),
  y: Qd(5, 14),
};
Ar.translateX = Ar.x;
Ar.translateY = Ar.y;
const Vn = new Set();
let su = !1,
  ou = !1;
function Fy() {
  if (ou) {
    const e = Array.from(Vn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    (t.forEach((r) => {
      const i = iP(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      }));
  }
  ((ou = !1), (su = !1), Vn.forEach((e) => e.complete()), Vn.clear());
}
function Iy() {
  Vn.forEach((e) => {
    (e.readKeyframes(), e.needsMeasurement && (ou = !0));
  });
}
function sP() {
  (Iy(), Fy());
}
class Yc {
  constructor(t, n, r, i, s, o = !1) {
    ((this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o));
  }
  scheduleResolve() {
    ((this.isScheduled = !0),
      this.isAsync
        ? (Vn.add(this), su || ((su = !0), q.read(Iy), q.resolveKeyframes(Fy)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const o = i == null ? void 0 : i.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          (t[0] === void 0 && (t[0] = a), i && o === void 0 && i.set(t[0]));
        } else t[s] = t[s - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    ((this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Vn.delete(this));
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Vn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const By = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  oP = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function aP(e) {
  const t = oP.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function by(e, t, n = 1) {
  const [r, i] = aP(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return By(o) ? parseFloat(o) : o;
  }
  return Lc(i) ? by(i, t, n + 1) : i;
}
const Uy = (e) => (t) => t.test(e),
  lP = { test: (e) => e === "auto", parse: (e) => e },
  zy = [Ir, M, Ct, Gt, YS, QS, lP],
  Yd = (e) => zy.find(Uy(e));
class $y extends Yc {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && ((u = u.trim()), Lc(u))) {
        const c = by(u, n.current);
        (c !== void 0 && (t[l] = c),
          l === t.length - 1 && (this.finalKeyframe = u));
      }
    }
    if ((this.resolveNoneKeyframes(), !wy.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = Yd(i),
      a = Yd(s);
    if (o !== a)
      if (qd(o) && qd(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) IE(t[i]) && r.push(i);
    r.length && tP(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    (r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Ar[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current),
      )),
      (n[0] = this.measuredOrigin));
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: i } = this;
    if (!n || !n.current) return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const o = i.length - 1,
      a = i[o];
    ((i[o] = Ar[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, u]) => {
          n.getValue(l).set(u);
        }),
      this.resolveNoneKeyframes());
  }
}
const Jd = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (mn.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function uP(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function cP(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = Jd(i, t),
    a = Jd(s, t);
  return !o || !a ? !1 : uP(e) || ((n === "spring" || bc(n)) && r);
}
const fP = (e) => e !== null;
function na(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(fP),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !s || r === void 0 ? i[s] : r;
}
const dP = 40;
class Hy {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    ...a
  }) {
    ((this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Tt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise());
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > dP
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return (
      !this._resolved && !this.hasAttemptedResolve && sP(),
      this._resolved
    );
  }
  onKeyframesResolved(t, n) {
    ((this.resolvedAt = Tt.now()), (this.hasAttemptedResolve = !0));
    const {
      name: r,
      type: i,
      velocity: s,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: u,
    } = this.options;
    if (!u && !cP(t, r, i, s))
      if (o) this.options.duration = 0;
      else {
        (l && l(na(t, this.options, n)),
          a && a(),
          this.resolveFinishedPromise());
        return;
      }
    const c = this.initPlayback(t, n);
    c !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...c }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    ((this.options.type = "keyframes"), (this.options.ease = "linear"));
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const Z = (e, t, n) => e + (t - e) * n;
function Ba(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function hP({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((i = Ba(l, a, e + 1 / 3)), (s = Ba(l, a, e)), (o = Ba(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function To(e, t) {
  return (n) => (n > 0 ? t : e);
}
const ba = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  pP = [ru, Ln, cr],
  mP = (e) => pP.find((t) => t.test(e));
function Zd(e) {
  const t = mP(e);
  if (!t) return !1;
  let n = t.parse(e);
  return (t === cr && (n = hP(n)), n);
}
const eh = (e, t) => {
    const n = Zd(e),
      r = Zd(t);
    if (!n || !r) return To(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = ba(n.red, r.red, s)),
      (i.green = ba(n.green, r.green, s)),
      (i.blue = ba(n.blue, r.blue, s)),
      (i.alpha = Z(n.alpha, r.alpha, s)),
      Ln.transform(i)
    );
  },
  gP = (e, t) => (n) => t(e(n)),
  Yi = (...e) => e.reduce(gP),
  au = new Set(["none", "hidden"]);
function yP(e, t) {
  return au.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function vP(e, t) {
  return (n) => Z(e, t, n);
}
function Jc(e) {
  return typeof e == "number"
    ? vP
    : typeof e == "string"
      ? Lc(e)
        ? To
        : Te.test(e)
          ? eh
          : SP
      : Array.isArray(e)
        ? Wy
        : typeof e == "object"
          ? Te.test(e)
            ? eh
            : wP
          : To;
}
function Wy(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => Jc(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function wP(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Jc(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function xP(e, t) {
  var n;
  const r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const o = t.types[s],
      a = e.indexes[o][i[o]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    ((r[s] = l), i[o]++);
  }
  return r;
}
const SP = (e, t) => {
  const n = mn.createTransformer(t),
    r = bi(e),
    i = bi(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (au.has(e) && !i.values.length) || (au.has(t) && !r.values.length)
      ? yP(e, t)
      : Yi(Wy(xP(r, i), i.values), n)
    : To(e, t);
};
function Ky(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? Z(e, t, n)
    : Jc(e)(e, t);
}
const EP = 5;
function Gy(e, t, n) {
  const r = Math.max(t - EP, 0);
  return xy(n - e(r), t - r);
}
const ne = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Ua = 0.001;
function PP({
  duration: e = ne.duration,
  bounce: t = ne.bounce,
  velocity: n = ne.velocity,
  mass: r = ne.mass,
}) {
  let i,
    s,
    o = 1 - t;
  ((o = Ut(ne.minDamping, ne.maxDamping, o)),
    (e = Ut(ne.minDuration, ne.maxDuration, jt(e))),
    o < 1
      ? ((i = (u) => {
          const c = u * o,
            f = c * e,
            d = c - n,
            g = lu(u, o),
            y = Math.exp(-f);
          return Ua - (d / g) * y;
        }),
        (s = (u) => {
          const f = u * o * e,
            d = f * n + n,
            g = Math.pow(o, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            v = lu(Math.pow(u, 2), o);
          return ((-i(u) + Ua > 0 ? -1 : 1) * ((d - g) * y)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Ua + c * f;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        })));
  const a = 5 / e,
    l = TP(i, s, a);
  if (((e = Mt(e)), isNaN(l)))
    return { stiffness: ne.stiffness, damping: ne.damping, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
  }
}
const CP = 12;
function TP(e, t, n) {
  let r = n;
  for (let i = 1; i < CP; i++) r = r - e(r) / t(r);
  return r;
}
function lu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const kP = ["duration", "bounce"],
  RP = ["stiffness", "damping", "mass"];
function th(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function _P(e) {
  let t = {
    velocity: ne.velocity,
    stiffness: ne.stiffness,
    damping: ne.damping,
    mass: ne.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!th(e, RP) && th(e, kP))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * Ut(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: ne.mass, stiffness: i, damping: s };
    } else {
      const n = PP(e);
      ((t = { ...t, ...n, mass: ne.mass }), (t.isResolvedFromDuration = !0));
    }
  return t;
}
function qy(e = ne.visualDuration, t = ne.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: s },
    {
      stiffness: l,
      damping: u,
      mass: c,
      duration: f,
      velocity: d,
      isResolvedFromDuration: g,
    } = _P({ ...n, velocity: -jt(n.velocity || 0) }),
    y = d || 0,
    v = u / (2 * Math.sqrt(l * c)),
    w = o - s,
    h = jt(Math.sqrt(l / c)),
    p = Math.abs(w) < 5;
  (r || (r = p ? ne.restSpeed.granular : ne.restSpeed.default),
    i || (i = p ? ne.restDelta.granular : ne.restDelta.default));
  let m;
  if (v < 1) {
    const P = lu(h, v);
    m = (T) => {
      const _ = Math.exp(-v * h * T);
      return (
        o - _ * (((y + v * h * w) / P) * Math.sin(P * T) + w * Math.cos(P * T))
      );
    };
  } else if (v === 1) m = (P) => o - Math.exp(-h * P) * (w + (y + h * w) * P);
  else {
    const P = h * Math.sqrt(v * v - 1);
    m = (T) => {
      const _ = Math.exp(-v * h * T),
        k = Math.min(P * T, 300);
      return (
        o - (_ * ((y + v * h * w) * Math.sinh(k) + P * w * Math.cosh(k))) / P
      );
    };
  }
  const E = {
    calculatedDuration: (g && f) || null,
    next: (P) => {
      const T = m(P);
      if (g) a.done = P >= f;
      else {
        let _ = 0;
        v < 1 && (_ = P === 0 ? Mt(y) : Gy(m, P, T));
        const k = Math.abs(_) <= r,
          V = Math.abs(o - T) <= i;
        a.done = k && V;
      }
      return ((a.value = a.done ? o : T), a);
    },
    toString: () => {
      const P = Math.min(dy(E), eu),
        T = hy((_) => E.next(P * _).value, P, 30);
      return P + "ms " + T;
    },
  };
  return E;
}
function nh({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    g = (k) => (a !== void 0 && k < a) || (l !== void 0 && k > l),
    y = (k) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - k) < Math.abs(l - k)
          ? a
          : l;
  let v = n * t;
  const w = f + v,
    h = o === void 0 ? w : o(w);
  h !== w && (v = h - f);
  const p = (k) => -v * Math.exp(-k / r),
    m = (k) => h + p(k),
    E = (k) => {
      const V = p(k),
        L = m(k);
      ((d.done = Math.abs(V) <= u), (d.value = d.done ? h : L));
    };
  let P, T;
  const _ = (k) => {
    g(d.value) &&
      ((P = k),
      (T = qy({
        keyframes: [d.value, y(d.value)],
        velocity: Gy(m, k, d.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    _(0),
    {
      calculatedDuration: null,
      next: (k) => {
        let V = !1;
        return (
          !T && P === void 0 && ((V = !0), E(k), _(k)),
          P !== void 0 && k >= P ? T.next(k - P) : (!V && E(k), d)
        );
      },
    }
  );
}
const AP = Qi(0.42, 0, 1, 1),
  OP = Qi(0, 0, 0.58, 1),
  Xy = Qi(0.42, 0, 0.58, 1),
  DP = (e) => Array.isArray(e) && typeof e[0] != "number",
  LP = {
    linear: Ke,
    easeIn: AP,
    easeInOut: Xy,
    easeOut: OP,
    circIn: Gc,
    circInOut: Ay,
    circOut: _y,
    backIn: Kc,
    backInOut: ky,
    backOut: Ty,
    anticipate: Ry,
  },
  rh = (e) => {
    if (Uc(e)) {
      Kg(e.length === 4);
      const [t, n, r, i] = e;
      return Qi(t, n, r, i);
    } else if (typeof e == "string") return LP[e];
    return e;
  };
function NP(e, t, n) {
  const r = [],
    i = n || Ky,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || Ke : t;
      a = Yi(l, a);
    }
    r.push(a);
  }
  return r;
}
function MP(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((Kg(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = NP(t, r, i),
    l = a.length,
    u = (c) => {
      if (o && c < e[0]) return t[0];
      let f = 0;
      if (l > 1) for (; f < e.length - 2 && !(c < e[f + 1]); f++);
      const d = Rr(e[f], e[f + 1], c);
      return a[f](d);
    };
  return n ? (c) => u(Ut(e[0], e[s - 1], c)) : u;
}
function jP(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Rr(0, t, r);
    e.push(Z(n, 1, i));
  }
}
function VP(e) {
  const t = [0];
  return (jP(t, e.length - 1), t);
}
function FP(e, t) {
  return e.map((n) => n * t);
}
function IP(e, t) {
  return e.map(() => t || Xy).splice(0, e.length - 1);
}
function ko({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = DP(r) ? r.map(rh) : rh(r),
    s = { done: !1, value: t[0] },
    o = FP(n && n.length === t.length ? n : VP(t), e),
    a = MP(o, t, { ease: Array.isArray(i) ? i : IP(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
  };
}
const BP = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => q.update(t, !0),
      stop: () => pn(t),
      now: () => (ye.isProcessing ? ye.timestamp : Tt.now()),
    };
  },
  bP = { decay: nh, inertia: nh, tween: ko, keyframes: ko, spring: qy },
  UP = (e) => e / 100;
class Zc extends Hy {
  constructor(t) {
    (super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      }));
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options,
      o = (i == null ? void 0 : i.KeyframeResolver) || Yc,
      a = (l, u) => this.onKeyframesResolved(l, u);
    ((this.resolver = new o(s, a, n, r, i)), this.resolver.scheduleResolve());
  }
  flatten() {
    (super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes),
        ));
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: i = 0,
        repeatType: s,
        velocity: o = 0,
      } = this.options,
      a = bc(n) ? n : bP[n] || ko;
    let l, u;
    a !== ko &&
      typeof t[0] != "number" &&
      ((l = Yi(UP, Ky(t[0], t[1]))), (t = [0, 100]));
    const c = a({ ...this.options, keyframes: t });
    (s === "mirror" &&
      (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      c.calculatedDuration === null && (c.calculatedDuration = dy(c)));
    const { calculatedDuration: f } = c,
      d = f + i,
      g = d * (r + 1) - i;
    return {
      generator: c,
      mirroredGenerator: u,
      mapPercentToKeyframes: l,
      calculatedDuration: f,
      resolvedDuration: d,
      totalDuration: g,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    (this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState));
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: k } = this.options;
      return { done: !0, value: k[k.length - 1] };
    }
    const {
      finalKeyframe: i,
      generator: s,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: u,
      totalDuration: c,
      resolvedDuration: f,
    } = r;
    if (this.startTime === null) return s.next(0);
    const {
      delay: d,
      repeat: g,
      repeatType: y,
      repeatDelay: v,
      onUpdate: w,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - c / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(t - this.startTime) * this.speed));
    const h = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
      p = this.speed >= 0 ? h < 0 : h > c;
    ((this.currentTime = Math.max(h, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = c));
    let m = this.currentTime,
      E = s;
    if (g) {
      const k = Math.min(this.currentTime, c) / f;
      let V = Math.floor(k),
        L = k % 1;
      (!L && k >= 1 && (L = 1),
        L === 1 && V--,
        (V = Math.min(V, g + 1)),
        !!(V % 2) &&
          (y === "reverse"
            ? ((L = 1 - L), v && (L -= v / f))
            : y === "mirror" && (E = o)),
        (m = Ut(0, 1, L) * f));
    }
    const P = p ? { done: !1, value: l[0] } : E.next(m);
    a && (P.value = a(P.value));
    let { done: T } = P;
    !p &&
      u !== null &&
      (T = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const _ =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && T));
    return (
      _ && i !== void 0 && (P.value = na(l, this.options, i)),
      w && w(P.value),
      _ && this.finish(),
      P
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? jt(t.calculatedDuration) : 0;
  }
  get time() {
    return jt(this.currentTime);
  }
  set time(t) {
    ((t = Mt(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    ((this.playbackSpeed = t), n && (this.time = jt(this.currentTime)));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = BP, onPlay: n, startTime: r } = this.options;
    (this.driver || (this.driver = t((s) => this.tick(s))), n && n());
    const i = this.driver.now();
    (this.holdTime !== null
      ? (this.startTime = i - this.holdTime)
      : this.startTime
        ? this.state === "finished" && (this.startTime = i)
        : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    ((this.state = "paused"),
      (this.holdTime =
        (t = this.currentTime) !== null && t !== void 0 ? t : 0));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.teardown(), (this.state = "finished"));
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    (this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel());
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return ((this.startTime = 0), this.tick(t, !0));
  }
}
const zP = new Set(["opacity", "clipPath", "filter", "transform"]);
function $P(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {},
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = my(a, i);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: s + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const HP = Tc(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Ro = 10,
  WP = 2e4;
function KP(e) {
  return bc(e.type) || e.type === "spring" || !py(e.ease);
}
function GP(e, t) {
  const n = new Zc({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const i = [];
  let s = 0;
  for (; !r.done && s < WP; ) ((r = n.sample(s)), i.push(r.value), (s += Ro));
  return { times: void 0, keyframes: i, duration: s - Ro, ease: "linear" };
}
const Qy = { anticipate: Ry, backInOut: ky, circInOut: Ay };
function qP(e) {
  return e in Qy;
}
class ih extends Hy {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: i, keyframes: s } = this.options;
    ((this.resolver = new $y(
      s,
      (o, a) => this.onKeyframesResolved(o, a),
      n,
      r,
      i,
    )),
      this.resolver.scheduleResolve());
  }
  initPlayback(t, n) {
    let {
      duration: r = 300,
      times: i,
      ease: s,
      type: o,
      motionValue: a,
      name: l,
      startTime: u,
    } = this.options;
    if (!a.owner || !a.owner.current) return !1;
    if (
      (typeof s == "string" && Co() && qP(s) && (s = Qy[s]), KP(this.options))
    ) {
      const {
          onComplete: f,
          onUpdate: d,
          motionValue: g,
          element: y,
          ...v
        } = this.options,
        w = GP(t, v);
      ((t = w.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = w.duration),
        (i = w.times),
        (s = w.ease),
        (o = "keyframes"));
    }
    const c = $P(a.owner.current, l, t, {
      ...this.options,
      duration: r,
      times: i,
      ease: s,
    });
    return (
      (c.startTime = u ?? this.calcStartTime()),
      this.pendingTimeline
        ? (zd(c, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            const { onComplete: f } = this.options;
            (a.set(na(t, this.options, n)),
              f && f(),
              this.cancel(),
              this.resolveFinishedPromise());
          }),
      { animation: c, duration: r, times: i, type: o, ease: s, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return jt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return jt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Mt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return Ke;
      const { animation: r } = n;
      zd(r, t);
    }
    return Ke;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    (n.playState === "finished" && this.updateFinishedPromise(), n.play());
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    (this.resolveFinishedPromise(), this.updateFinishedPromise());
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: i,
      type: s,
      ease: o,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: u,
          onUpdate: c,
          onComplete: f,
          element: d,
          ...g
        } = this.options,
        y = new Zc({
          ...g,
          keyframes: r,
          duration: i,
          type: s,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        v = Mt(this.time);
      u.setWithVelocity(y.sample(v - Ro).value, y.sample(v).value, Ro);
    }
    const { onStop: l } = this.options;
    (l && l(), this.cancel());
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: i,
      repeatType: s,
      damping: o,
      type: a,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: l, transformTemplate: u } = n.owner.getProps();
    return (
      HP() &&
      r &&
      zP.has(r) &&
      !l &&
      !u &&
      !i &&
      s !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
const XP = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  QP = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  YP = { type: "keyframes", duration: 0.8 },
  JP = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  ZP = (e, { keyframes: t }) =>
    t.length > 2
      ? YP
      : Gn.has(e)
        ? e.startsWith("scale")
          ? QP(t[1])
          : XP
        : JP;
function eC({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
const ef =
  (e, t, n, r = {}, i, s) =>
  (o) => {
    const a = Bc(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: u = 0 } = r;
    u = u - Mt(l);
    let c = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -u,
      onUpdate: (d) => {
        (t.set(d), a.onUpdate && a.onUpdate(d));
      },
      onComplete: () => {
        (o(), a.onComplete && a.onComplete());
      },
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    (eC(a) || (c = { ...c, ...ZP(e, c) }),
      c.duration && (c.duration = Mt(c.duration)),
      c.repeatDelay && (c.repeatDelay = Mt(c.repeatDelay)),
      c.from !== void 0 && (c.keyframes[0] = c.from));
    let f = !1;
    if (
      ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
        ((c.duration = 0), c.delay === 0 && (f = !0)),
      f && !s && t.get() !== void 0)
    ) {
      const d = na(c.keyframes, a);
      if (d !== void 0)
        return (
          q.update(() => {
            (c.onUpdate(d), c.onComplete());
          }),
          new wE([])
        );
    }
    return !s && ih.supports(c) ? new ih(c) : new Zc(c);
  };
function tC({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function Yy(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var s;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(
        f,
        (s = e.latestValues[f]) !== null && s !== void 0 ? s : null,
      ),
      g = l[f];
    if (g === void 0 || (c && tC(c, f))) continue;
    const y = { delay: n, ...Bc(o || {}, f) };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const h = Sy(e);
      if (h) {
        const p = window.MotionHandoffAnimation(h, f, q);
        p !== null && ((y.startTime = p), (v = !0));
      }
    }
    (nu(e, f),
      d.start(
        ef(f, d, g, e.shouldReduceMotion && wy.has(f) ? { type: !1 } : y, e, v),
      ));
    const w = d.animation;
    w && u.push(w);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        q.update(() => {
          a && NE(e, a);
        });
      }),
    u
  );
}
function uu(e, t, n = {}) {
  var r;
  const i = ta(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0,
  );
  let { transition: s = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (s = n.transitionOverride);
  const o = i ? () => Promise.all(Yy(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (u = 0) => {
            const {
              delayChildren: c = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = s;
            return nC(e, t, c + u, f, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = s;
  if (l) {
    const [u, c] = l === "beforeChildren" ? [o, a] : [a, o];
    return u().then(() => c());
  } else return Promise.all([o(), a(n.delay)]);
}
function nC(e, t, n = 0, r = 0, i = 1, s) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(rC)
      .forEach((u, c) => {
        (u.notify("AnimationStart", t),
          o.push(
            uu(u, t, { ...s, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t),
            ),
          ));
      }),
    Promise.all(o)
  );
}
function rC(e, t) {
  return e.sortNodePosition(t);
}
function iC(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => uu(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = uu(e, t, n);
  else {
    const i = typeof t == "function" ? ta(e, t, n.custom) : t;
    r = Promise.all(Yy(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const sC = Rc.length;
function Jy(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Jy(e.parent) || {} : {};
    return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
  }
  const t = {};
  for (let n = 0; n < sC; n++) {
    const r = Rc[n],
      i = e.props[r];
    (Fi(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const oC = [...kc].reverse(),
  aC = kc.length;
function lC(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => iC(e, n, r)));
}
function uC(e) {
  let t = lC(e),
    n = sh(),
    r = !0;
  const i = (l) => (u, c) => {
    var f;
    const d = ta(
      e,
      c,
      l === "exit"
        ? (f = e.presenceContext) === null || f === void 0
          ? void 0
          : f.custom
        : void 0,
    );
    if (d) {
      const { transition: g, transitionEnd: y, ...v } = d;
      u = { ...u, ...v, ...y };
    }
    return u;
  };
  function s(l) {
    t = l(e);
  }
  function o(l) {
    const { props: u } = e,
      c = Jy(e.parent) || {},
      f = [],
      d = new Set();
    let g = {},
      y = 1 / 0;
    for (let w = 0; w < aC; w++) {
      const h = oC[w],
        p = n[h],
        m = u[h] !== void 0 ? u[h] : c[h],
        E = Fi(m),
        P = h === l ? p.isActive : null;
      P === !1 && (y = w);
      let T = m === c[h] && m !== u[h] && E;
      if (
        (T && r && e.manuallyAnimateOnMount && (T = !1),
        (p.protectedKeys = { ...g }),
        (!p.isActive && P === null) ||
          (!m && !p.prevProp) ||
          Zo(m) ||
          typeof m == "boolean")
      )
        continue;
      const _ = cC(p.prevProp, m);
      let k = _ || (h === l && p.isActive && !T && E) || (w > y && E),
        V = !1;
      const L = Array.isArray(m) ? m : [m];
      let $ = L.reduce(i(h), {});
      P === !1 && ($ = {});
      const { prevResolvedValues: be = {} } = p,
        gt = { ...be, ...$ },
        Se = (Q) => {
          ((k = !0),
            d.has(Q) && ((V = !0), d.delete(Q)),
            (p.needsAnimating[Q] = !0));
          const A = e.getValue(Q);
          A && (A.liveStyle = !1);
        };
      for (const Q in gt) {
        const A = $[Q],
          j = be[Q];
        if (g.hasOwnProperty(Q)) continue;
        let N = !1;
        (Zl(A) && Zl(j) ? (N = !fy(A, j)) : (N = A !== j),
          N
            ? A != null
              ? Se(Q)
              : d.add(Q)
            : A !== void 0 && d.has(Q)
              ? Se(Q)
              : (p.protectedKeys[Q] = !0));
      }
      ((p.prevProp = m),
        (p.prevResolvedValues = $),
        p.isActive && (g = { ...g, ...$ }),
        r && e.blockInitialAnimation && (k = !1),
        k &&
          (!(T && _) || V) &&
          f.push(...L.map((Q) => ({ animation: Q, options: { type: h } }))));
    }
    if (d.size) {
      const w = {};
      (d.forEach((h) => {
        const p = e.getBaseTarget(h),
          m = e.getValue(h);
        (m && (m.liveStyle = !0), (w[h] = p ?? null));
      }),
        f.push({ animation: w }));
    }
    let v = !!f.length;
    return (
      r &&
        (u.initial === !1 || u.initial === u.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(f) : Promise.resolve()
    );
  }
  function a(l, u) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    ((c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((d) => {
        var g;
        return (g = d.animationState) === null || g === void 0
          ? void 0
          : g.setActive(l, u);
      }),
      (n[l].isActive = u));
    const f = o(l);
    for (const d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      ((n = sh()), (r = !0));
    },
  };
}
function cC(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !fy(t, e) : !1;
}
function Cn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function sh() {
  return {
    animate: Cn(!0),
    whileInView: Cn(),
    whileHover: Cn(),
    whileTap: Cn(),
    whileDrag: Cn(),
    whileFocus: Cn(),
    exit: Cn(),
  };
}
class Sn {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
class fC extends Sn {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = uC(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Zo(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    (this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this));
  }
}
let dC = 0;
class hC extends Sn {
  constructor() {
    (super(...arguments), (this.id = dC++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n && !t && i.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const pC = { animation: { Feature: fC }, exit: { Feature: hC } };
function Ui(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
function Ji(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const mC = (e) => (t) => zc(t) && e(t, Ji(t));
function mi(e, t, n, r) {
  return Ui(e, t, mC(n), r);
}
const oh = (e, t) => Math.abs(e - t);
function gC(e, t) {
  const n = oh(e.x, t.x),
    r = oh(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Zy {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const f = $a(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          g = gC(f.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !g) return;
        const { point: y } = f,
          { timestamp: v } = ye;
        this.history.push({ ...y, timestamp: v });
        const { onStart: w, onMove: h } = this.handlers;
        (d ||
          (w && w(this.lastMoveEvent, f),
          (this.startEvent = this.lastMoveEvent)),
          h && h(this.lastMoveEvent, f));
      }),
      (this.handlePointerMove = (f, d) => {
        ((this.lastMoveEvent = f),
          (this.lastMoveEventInfo = za(d, this.transformPagePoint)),
          q.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (f, d) => {
        this.end();
        const { onEnd: g, onSessionEnd: y, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const w = $a(
          f.type === "pointercancel"
            ? this.lastMoveEventInfo
            : za(d, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && g && g(f, w), y && y(f, w));
      }),
      !zc(t))
    )
      return;
    ((this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window));
    const o = Ji(t),
      a = za(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = ye;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    (c && c(t, $a(a, this.history)),
      (this.removeListeners = Yi(
        mi(this.contextWindow, "pointermove", this.handlePointerMove),
        mi(this.contextWindow, "pointerup", this.handlePointerUp),
        mi(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), pn(this.updatePoint));
  }
}
function za(e, t) {
  return t ? { point: t(e.point) } : e;
}
function ah(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function $a({ point: e }, t) {
  return {
    point: e,
    delta: ah(e, e0(t)),
    offset: ah(e, yC(t)),
    velocity: vC(t, 0.1),
  };
}
function yC(e) {
  return e[0];
}
function e0(e) {
  return e[e.length - 1];
}
function vC(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = e0(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Mt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = jt(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
const t0 = 1e-4,
  wC = 1 - t0,
  xC = 1 + t0,
  n0 = 0.01,
  SC = 0 - n0,
  EC = 0 + n0;
function qe(e) {
  return e.max - e.min;
}
function PC(e, t, n) {
  return Math.abs(e - t) <= n;
}
function lh(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = Z(t.min, t.max, e.origin)),
    (e.scale = qe(n) / qe(t)),
    (e.translate = Z(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= wC && e.scale <= xC) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= SC && e.translate <= EC) || isNaN(e.translate)) &&
      (e.translate = 0));
}
function gi(e, t, n, r) {
  (lh(e.x, t.x, n.x, r ? r.originX : void 0),
    lh(e.y, t.y, n.y, r ? r.originY : void 0));
}
function uh(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + qe(t)));
}
function CC(e, t, n) {
  (uh(e.x, t.x, n.x), uh(e.y, t.y, n.y));
}
function ch(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + qe(t)));
}
function yi(e, t, n) {
  (ch(e.x, t.x, n.x), ch(e.y, t.y, n.y));
}
function TC(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Z(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Z(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function fh(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function kC(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: fh(e.x, n, i), y: fh(e.y, t, r) };
}
function dh(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function RC(e, t) {
  return { x: dh(e.x, t.x), y: dh(e.y, t.y) };
}
function _C(e, t) {
  let n = 0.5;
  const r = qe(e),
    i = qe(t);
  return (
    i > r
      ? (n = Rr(t.min, t.max - r, e.min))
      : r > i && (n = Rr(e.min, e.max - i, t.min)),
    Ut(0, 1, n)
  );
}
function AC(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const cu = 0.35;
function OC(e = cu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = cu),
    { x: hh(e, "left", "right"), y: hh(e, "top", "bottom") }
  );
}
function hh(e, t, n) {
  return { min: ph(e, t), max: ph(e, n) };
}
function ph(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const mh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  fr = () => ({ x: mh(), y: mh() }),
  gh = () => ({ min: 0, max: 0 }),
  se = () => ({ x: gh(), y: gh() });
function Je(e) {
  return [e("x"), e("y")];
}
function r0({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function DC({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function LC(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ha(e) {
  return e === void 0 || e === 1;
}
function fu({ scale: e, scaleX: t, scaleY: n }) {
  return !Ha(e) || !Ha(t) || !Ha(n);
}
function Rn(e) {
  return (
    fu(e) ||
    i0(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function i0(e) {
  return yh(e.x) || yh(e.y);
}
function yh(e) {
  return e && e !== "0%";
}
function _o(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function vh(e, t, n, r, i) {
  return (i !== void 0 && (e = _o(e, i, r)), _o(e, n, r) + t);
}
function du(e, t = 0, n = 1, r, i) {
  ((e.min = vh(e.min, t, n, r, i)), (e.max = vh(e.max, t, n, r, i)));
}
function s0(e, { x: t, y: n }) {
  (du(e.x, t.translate, t.scale, t.originPoint),
    du(e.y, n.translate, n.scale, n.originPoint));
}
const wh = 0.999999999999,
  xh = 1.0000000000001;
function NC(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    ((s = n[a]), (o = s.projectionDelta));
    const { visualElement: l } = s.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        hr(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), s0(e, o)),
      r && Rn(s.latestValues) && hr(e, s.latestValues));
  }
  (t.x < xh && t.x > wh && (t.x = 1), t.y < xh && t.y > wh && (t.y = 1));
}
function dr(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function Sh(e, t, n, r, i = 0.5) {
  const s = Z(e.min, e.max, i);
  du(e, t, n, s, r);
}
function hr(e, t) {
  (Sh(e.x, t.x, t.scaleX, t.scale, t.originX),
    Sh(e.y, t.y, t.scaleY, t.scale, t.originY));
}
function o0(e, t) {
  return r0(LC(e.getBoundingClientRect(), t));
}
function MC(e, t, n) {
  const r = o0(e, n),
    { scroll: i } = t;
  return (i && (dr(r.x, i.offset.x), dr(r.y, i.offset.y)), r);
}
const a0 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  jC = new WeakMap();
class VC {
  constructor(t) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = se()),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: f } = this.getProps();
        (f ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Ji(c).point));
      },
      s = (c, f) => {
        const { drag: d, dragPropagation: g, onDragStart: y } = this.getProps();
        if (
          d &&
          !g &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = _E(d)),
          !this.openDragLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Je((w) => {
            let h = this.getAxisMotionValue(w).get() || 0;
            if (Ct.test(h)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const m = p.layout.layoutBox[w];
                m && (h = qe(m) * (parseFloat(h) / 100));
              }
            }
            this.originPoint[w] = h;
          }),
          y && q.postRender(() => y(c, f)),
          nu(this.visualElement, "transform"));
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      o = (c, f) => {
        const {
          dragPropagation: d,
          dragDirectionLock: g,
          onDirectionLock: y,
          onDrag: v,
        } = this.getProps();
        if (!d && !this.openDragLock) return;
        const { offset: w } = f;
        if (g && this.currentDirection === null) {
          ((this.currentDirection = FC(w)),
            this.currentDirection !== null && y && y(this.currentDirection));
          return;
        }
        (this.updateAxis("x", f.point, w),
          this.updateAxis("y", f.point, w),
          this.visualElement.render(),
          v && v(c, f));
      },
      a = (c, f) => this.stop(c, f),
      l = () =>
        Je((c) => {
          var f;
          return (
            this.getAnimationState(c) === "paused" &&
            ((f = this.getAxisMotionValue(c).animation) === null || f === void 0
              ? void 0
              : f.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new Zy(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: a0(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && q.postRender(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ts(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (o = TC(o, this.constraints[t], this.elastic[t])),
      s.set(o));
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      s = this.constraints;
    (n && ur(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
        ? (this.constraints = kC(i.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = OC(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Je((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = AC(i.layoutBox[o], this.constraints[o]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !ur(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = MC(r, i.root, this.visualElement.getTransformPagePoint());
    let o = RC(i.layout.layoutBox, s);
    if (n) {
      const a = n(DC(o));
      ((this.hasMutatedConstraints = !!a), a && (o = r0(a)));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Je((c) => {
        if (!Ts(c, n, this.currentDirection)) return;
        let f = (l && l[c]) || {};
        o && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      nu(this.visualElement, t),
      r.start(ef(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Je((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Je((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Je((n) => {
      const { drag: r } = this.getProps();
      if (!Ts(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - Z(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!ur(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Je((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = _C({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Je((o) => {
        if (!Ts(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: u } = this.constraints[o];
        a.set(Z(l, u, i[o]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    jC.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = mi(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        ur(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      q.read(r));
    const o = Ui(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Je((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += l[c].translate),
                f.set(f.get() + l[c].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (o(), n(), s(), a && a());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = cu,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function Ts(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function FC(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class IC extends Sn {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = Ke),
      (this.removeListeners = Ke),
      (this.controls = new VC(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ke));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const Eh = (e) => (t, n) => {
  e && q.postRender(() => e(t, n));
};
class BC extends Sn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Ke));
  }
  onPointerDown(t) {
    this.session = new Zy(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: a0(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Eh(t),
      onStart: Eh(n),
      onMove: r,
      onEnd: (s, o) => {
        (delete this.session, i && q.postRender(() => i(s, o)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = mi(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const $s = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Ph(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Qr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (M.test(e)) e = parseFloat(e);
        else return e;
      const n = Ph(e, t.target.x),
        r = Ph(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  bC = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = mn.parse(e);
      if (i.length > 5) return r;
      const s = mn.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((i[0 + o] /= a), (i[1 + o] /= l));
      const u = Z(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
      );
    },
  };
class UC extends x.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    (aE(zC),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      ($s.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              q.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Ac.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function l0(e) {
  const [t, n] = Hg(),
    r = x.useContext(Sc);
  return C.jsx(UC, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: x.useContext(Jg),
    isPresent: t,
    safeToRemove: n,
  });
}
const zC = {
  borderRadius: {
    ...Qr,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: Qr,
  borderTopRightRadius: Qr,
  borderBottomLeftRadius: Qr,
  borderBottomRightRadius: Qr,
  boxShadow: bC,
};
function $C(e, t, n) {
  const r = Re(e) ? e : Bi(e);
  return (r.start(ef("", r, t, n)), r.animation);
}
function HC(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const WC = (e, t) => e.depth - t.depth;
class KC {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    ($c(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (Hc(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(WC),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function GC(e, t) {
  const n = Tt.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (pn(r), e(s - t));
    };
  return (q.read(r, !0), () => pn(r));
}
const u0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  qC = u0.length,
  Ch = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Th = (e) => typeof e == "number" || M.test(e);
function XC(e, t, n, r, i, s) {
  i
    ? ((e.opacity = Z(0, n.opacity !== void 0 ? n.opacity : 1, QC(r))),
      (e.opacityExit = Z(t.opacity !== void 0 ? t.opacity : 1, 0, YC(r))))
    : s &&
      (e.opacity = Z(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let o = 0; o < qC; o++) {
    const a = `border${u0[o]}Radius`;
    let l = kh(t, a),
      u = kh(n, a);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Th(l) === Th(u)
        ? ((e[a] = Math.max(Z(Ch(l), Ch(u), r), 0)),
          (Ct.test(u) || Ct.test(l)) && (e[a] += "%"))
        : (e[a] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = Z(t.rotate || 0, n.rotate || 0, r));
}
function kh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const QC = c0(0, 0.5, _y),
  YC = c0(0.5, 0.95, Ke);
function c0(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Rr(e, t, r)));
}
function Rh(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function Ye(e, t) {
  (Rh(e.x, t.x), Rh(e.y, t.y));
}
function _h(e, t) {
  ((e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin));
}
function Ah(e, t, n, r, i) {
  return (
    (e -= t),
    (e = _o(e, 1 / n, r)),
    i !== void 0 && (e = _o(e, 1 / i, r)),
    e
  );
}
function JC(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (Ct.test(t) &&
      ((t = parseFloat(t)), (t = Z(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = Z(s.min, s.max, r);
  (e === s && (a -= t),
    (e.min = Ah(e.min, t, n, a, i)),
    (e.max = Ah(e.max, t, n, a, i)));
}
function Oh(e, t, [n, r, i], s, o) {
  JC(e, t[n], t[r], t[i], t.scale, s, o);
}
const ZC = ["x", "scaleX", "originX"],
  eT = ["y", "scaleY", "originY"];
function Dh(e, t, n, r) {
  (Oh(e.x, t, ZC, n ? n.x : void 0, r ? r.x : void 0),
    Oh(e.y, t, eT, n ? n.y : void 0, r ? r.y : void 0));
}
function Lh(e) {
  return e.translate === 0 && e.scale === 1;
}
function f0(e) {
  return Lh(e.x) && Lh(e.y);
}
function Nh(e, t) {
  return e.min === t.min && e.max === t.max;
}
function tT(e, t) {
  return Nh(e.x, t.x) && Nh(e.y, t.y);
}
function Mh(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function d0(e, t) {
  return Mh(e.x, t.x) && Mh(e.y, t.y);
}
function jh(e) {
  return qe(e.x) / qe(e.y);
}
function Vh(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class nT {
  constructor() {
    this.members = [];
  }
  add(t) {
    ($c(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (Hc(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function rT(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: u,
      rotate: c,
      rotateX: f,
      rotateY: d,
      skewX: g,
      skewY: y,
    } = n;
    (u && (r = `perspective(${u}px) ${r}`),
      c && (r += `rotate(${c}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      g && (r += `skewX(${g}deg) `),
      y && (r += `skewY(${y}deg) `));
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
}
const _n = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  ii = typeof window < "u" && window.MotionDebug !== void 0,
  Wa = ["", "X", "Y", "Z"],
  iT = { visibility: "hidden" },
  Fh = 1e3;
let sT = 0;
function Ka(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function h0(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Sy(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", q, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && h0(r);
}
function p0({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      ((this.id = sT++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            ii &&
              (_n.totalNodes =
                _n.resolvedTargetDeltas =
                _n.recalculatedProjection =
                  0),
            this.nodes.forEach(lT),
            this.nodes.forEach(hT),
            this.nodes.forEach(pT),
            this.nodes.forEach(uT),
            ii && window.MotionDebug.record(_n));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new KC());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Wc()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = HC(o)), (this.instance = o));
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          ((this.root.updateBlockedByResize = !0),
            f && f(),
            (f = GC(d, 250)),
            $s.hasAnimatedSinceResize &&
              (($s.hasAnimatedSinceResize = !1), this.nodes.forEach(Bh)));
        });
      }
      (l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: g,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || wT,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: h } =
                  c.getProps(),
                p = !this.targetLayout || !d0(this.targetLayout, y) || g,
                m = !d && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                m ||
                (d && (p || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, m));
                const E = { ...Bc(v, "layout"), onPlay: w, onComplete: h };
                ((c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((E.delay = 0), (E.type = !1)),
                  this.startAnimation(E));
              } else
                (d || Bh(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = y;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const o = this.getStack();
      (o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        pn(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(mT),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          h0(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        ((f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Ih));
        return;
      }
      (this.isUpdating || this.nodes.forEach(fT),
        (this.isUpdating = !1),
        this.nodes.forEach(dT),
        this.nodes.forEach(oT),
        this.nodes.forEach(aT),
        this.clearAllSnapshots());
      const a = Tt.now();
      ((ye.delta = Ut(0, 1e3 / 60, a - ye.timestamp)),
        (ye.timestamp = a),
        (ye.isProcessing = !0),
        Va.update.process(ye),
        Va.preRender.process(ye),
        Va.render.process(ye),
        (ye.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Ac.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(cT), this.sharedNodes.forEach(gT));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        q.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      q.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = se()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0,
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !f0(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      o &&
        (a || Rn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        xT(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return se();
      const l = a.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(ST)
        )
      ) {
        const { scroll: c } = this.root;
        c && (dr(l.x, c.offset.x), dr(l.y, c.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var a;
      const l = se();
      if (
        (Ye(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u],
          { scroll: f, options: d } = c;
        c !== this.root &&
          f &&
          d.layoutScroll &&
          (f.wasRoot && Ye(l, o), dr(l.x, f.offset.x), dr(l.y, f.offset.y));
      }
      return l;
    }
    applyTransform(o, a = !1) {
      const l = se();
      Ye(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        (!a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          hr(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Rn(c.latestValues) && hr(l, c.latestValues));
      }
      return (Rn(this.latestValues) && hr(l, this.latestValues), l);
    }
    removeTransform(o) {
      const a = se();
      Ye(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Rn(u.latestValues)) continue;
        fu(u.latestValues) && u.updateSnapshot();
        const c = se(),
          f = u.measurePageBox();
        (Ye(c, f),
          Dh(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c));
      }
      return (Rn(this.latestValues) && Dh(a, this.latestValues), a);
    }
    setTargetDelta(o) {
      ((this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== ye.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty));
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = ye.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = se()),
              (this.relativeTargetOrigin = se()),
              yi(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox,
              ),
              Ye(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = se()), (this.targetWithTransforms = se())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                CC(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : Ye(this.target, this.layout.layoutBox),
                  s0(this.target, this.targetDelta))
                : Ye(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = se()),
                (this.relativeTargetOrigin = se()),
                yi(this.relativeTargetOrigin, this.target, g.target),
                Ye(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ii && _n.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          fu(this.parent.latestValues) ||
          i0(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === ye.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || f))
      )
        return;
      Ye(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        g = this.treeScale.y;
      (NC(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = se())));
      const { target: y } = a;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (_h(this.prevProjectionDelta.x, this.projectionDelta.x),
          _h(this.prevProjectionDelta.y, this.projectionDelta.y)),
        gi(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== d ||
          this.treeScale.y !== g ||
          !Vh(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Vh(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        ii && _n.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        o)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = fr()),
        (this.projectionDelta = fr()),
        (this.projectionDeltaWithTransform = fr()));
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        f = fr();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const d = se(),
        g = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = g !== y,
        w = this.getStack(),
        h = !w || w.members.length <= 1,
        p = !!(v && !h && this.options.crossfade === !0 && !this.path.some(vT));
      this.animationProgress = 0;
      let m;
      ((this.mixTargetDelta = (E) => {
        const P = E / 1e3;
        (bh(f.x, o.x, P),
          bh(f.y, o.y, P),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (yi(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            yT(this.relativeTarget, this.relativeTargetOrigin, d, P),
            m && tT(this.relativeTarget, m) && (this.isProjectionDirty = !1),
            m || (m = se()),
            Ye(m, this.relativeTarget)),
          v &&
            ((this.animationValues = c), XC(c, u, this.latestValues, P, p, h)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = P));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(o) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (pn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = q.update(() => {
          (($s.hasAnimatedSinceResize = !0),
            (this.currentAnimation = $C(0, Fh, {
              ...o,
              onUpdate: (a) => {
                (this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a));
              },
              onComplete: () => {
                (o.onComplete && o.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      (o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Fh),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = o;
      if (!(!a || !l || !u)) {
        if (
          this !== o &&
          this.layout &&
          u &&
          m0(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || se();
          const f = qe(this.layout.layoutBox.x);
          ((l.x.min = o.target.x.min), (l.x.max = l.x.min + f));
          const d = qe(this.layout.layoutBox.y);
          ((l.y.min = o.target.y.min), (l.y.max = l.y.min + d));
        }
        (Ye(a, l),
          hr(a, c),
          gi(this.projectionDeltaWithTransform, this.layoutCorrected, a, c));
      }
    }
    registerSharedNode(o, a) {
      (this.sharedNodes.has(o) || this.sharedNodes.set(o, new nT()),
        this.sharedNodes.get(o).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const u = {};
      l.z && Ka("z", o, u, this.animationValues);
      for (let c = 0; c < Wa.length; c++)
        (Ka(`rotate${Wa[c]}`, o, u, this.animationValues),
          Ka(`skew${Wa[c]}`, o, u, this.animationValues));
      o.render();
      for (const c in u)
        (o.setStaticValue(c, u[c]),
          this.animationValues && (this.animationValues[c] = u[c]));
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return iT;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Us(o == null ? void 0 : o.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = Us(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !Rn(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const d = f.animationValues || f.latestValues;
      (this.applyTransformsToTarget(),
        (u.transform = rT(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d,
        )),
        c && (u.transform = c(d, u.transform)));
      const { x: g, y } = this.projectionDelta;
      ((u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : d.opacityExit)
          : (u.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                  ? d.opacityExit
                  : 0));
      for (const v in Po) {
        if (d[v] === void 0) continue;
        const { correct: w, applyTo: h } = Po[v],
          p = u.transform === "none" ? d[v] : w(d[v], f);
        if (h) {
          const m = h.length;
          for (let E = 0; E < m; E++) u[h[E]] = p;
        } else u[v] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            f === this
              ? Us(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Ih),
        this.root.sharedNodes.clear());
    }
  };
}
function oT(e) {
  e.updateLayout();
}
function aT(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = n.source !== e.layout.source;
    s === "size"
      ? Je((f) => {
          const d = o ? n.measuredBox[f] : n.layoutBox[f],
            g = qe(d);
          ((d.min = r[f].min), (d.max = d.min + g));
        })
      : m0(s, n.layoutBox, r) &&
        Je((f) => {
          const d = o ? n.measuredBox[f] : n.layoutBox[f],
            g = qe(r[f]);
          ((d.max = d.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + g)));
        });
    const a = fr();
    gi(a, r, n.layoutBox);
    const l = fr();
    o ? gi(l, e.applyTransform(i, !0), n.measuredBox) : gi(l, r, n.layoutBox);
    const u = !f0(a);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: g } = f;
        if (d && g) {
          const y = se();
          yi(y, n.layoutBox, d.layoutBox);
          const v = se();
          (yi(v, r, g.layoutBox),
            d0(y, v) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function lT(e) {
  (ii && _n.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
}
function uT(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function cT(e) {
  e.clearSnapshot();
}
function Ih(e) {
  e.clearMeasurements();
}
function fT(e) {
  e.isLayoutDirty = !1;
}
function dT(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function Bh(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function hT(e) {
  e.resolveTargetDelta();
}
function pT(e) {
  e.calcProjection();
}
function mT(e) {
  e.resetSkewAndRotation();
}
function gT(e) {
  e.removeLeadSnapshot();
}
function bh(e, t, n) {
  ((e.translate = Z(t.translate, 0, n)),
    (e.scale = Z(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function Uh(e, t, n, r) {
  ((e.min = Z(t.min, n.min, r)), (e.max = Z(t.max, n.max, r)));
}
function yT(e, t, n, r) {
  (Uh(e.x, t.x, n.x, r), Uh(e.y, t.y, n.y, r));
}
function vT(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const wT = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  zh = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  $h = zh("applewebkit/") && !zh("chrome/") ? Math.round : Ke;
function Hh(e) {
  ((e.min = $h(e.min)), (e.max = $h(e.max)));
}
function xT(e) {
  (Hh(e.x), Hh(e.y));
}
function m0(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !PC(jh(t), jh(n), 0.2))
  );
}
function ST(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const ET = p0({
    attachResizeListener: (e, t) => Ui(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ga = { current: void 0 },
  g0 = p0({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ga.current) {
        const e = new ET({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ga.current = e));
      }
      return Ga.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  PT = {
    pan: { Feature: BC },
    drag: { Feature: IC, ProjectionNode: g0, MeasureLayout: l0 },
  };
function Wh(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && q.postRender(() => s(t, Ji(t)));
}
class CT extends Sn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = PE(
        t,
        (n) => (Wh(this.node, n, "Start"), (r) => Wh(this.node, r, "End")),
      ));
  }
  unmount() {}
}
class TT extends Sn {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Yi(
      Ui(this.node.current, "focus", () => this.onFocus()),
      Ui(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function Kh(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && q.postRender(() => s(t, Ji(t)));
}
class kT extends Sn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = RE(
        t,
        (n) => (
          Kh(this.node, n, "Start"),
          (r, { success: i }) => Kh(this.node, r, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const hu = new WeakMap(),
  qa = new WeakMap(),
  RT = (e) => {
    const t = hu.get(e.target);
    t && t(e);
  },
  _T = (e) => {
    e.forEach(RT);
  };
function AT({ root: e, ...t }) {
  const n = e || document;
  qa.has(n) || qa.set(n, {});
  const r = qa.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(_T, { root: e, ...t })),
    r[i]
  );
}
function OT(e, t, n) {
  const r = AT(t);
  return (
    hu.set(e, n),
    r.observe(e),
    () => {
      (hu.delete(e), r.unobserve(e));
    }
  );
}
const DT = { some: 0, all: 1 };
class LT extends Sn {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : DT[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u));
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(l);
      };
    return OT(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(NT(t, n)) && this.startObserver();
  }
  unmount() {}
}
function NT({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const MT = {
    inView: { Feature: LT },
    tap: { Feature: kT },
    focus: { Feature: TT },
    hover: { Feature: CT },
  },
  jT = { layout: { ProjectionNode: g0, MeasureLayout: l0 } },
  pu = { current: null },
  y0 = { current: !1 };
function VT() {
  if (((y0.current = !0), !!Cc))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (pu.current = e.matches);
      (e.addListener(t), t());
    } else pu.current = !1;
}
const FT = [...zy, Te, mn],
  IT = (e) => FT.find(Uy(e)),
  Gh = new WeakMap();
function BT(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (Re(i)) e.addValue(r, i);
    else if (Re(s)) e.addValue(r, Bi(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, Bi(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const qh = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class bT {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    a = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Yc),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const g = Tt.now();
        this.renderScheduledAt < g &&
          ((this.renderScheduledAt = g), q.render(this.render, !1, !0));
      }));
    const { latestValues: l, renderState: u, onUpdate: c } = o;
    ((this.onUpdate = c),
      (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = u),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = ea(n)),
      (this.isVariantNode = Qg(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this,
    );
    for (const g in d) {
      const y = d[g];
      l[g] !== void 0 && Re(y) && y.set(l[g], !1);
    }
  }
  mount(t) {
    ((this.current = t),
      Gh.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      y0.current || VT(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : pu.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (Gh.delete(this.current),
      this.projection && this.projection.unmount(),
      pn(this.notifyUpdate),
      pn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Gn.has(t),
      i = n.on("change", (a) => {
        ((this.latestValues[t] = a),
          this.props.onUpdate && q.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0));
      }),
      s = n.on("renderRequest", this.scheduleRender);
    let o;
    (window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        (i(), s(), o && o(), n.owner && n.stop());
      }));
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in _r) {
      const n = _r[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : se();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < qh.length; r++) {
      const i = qh[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    ((this.prevMotionValues = BT(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this));
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Bi(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let i =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
            r !== void 0
          ? r
          : this.readValueFromInstance(this.current, t, this.options);
    return (
      i != null &&
        (typeof i == "string" && (By(i) || Oy(i))
          ? (i = parseFloat(i))
          : !IT(i) && mn.test(n) && (i = Vy(t, n)),
        this.setBaseTarget(t, Re(i) ? i.get() : i)),
      Re(i) ? i.get() : i
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let i;
    if (typeof r == "string" || typeof r == "object") {
      const o = Dc(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom,
      );
      o && (i = o[t]);
    }
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !Re(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new Wc()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class v0 extends bT {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = $y));
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Re(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function UT(e) {
  return window.getComputedStyle(e);
}
class zT extends v0 {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = sy));
  }
  readValueFromInstance(t, n) {
    if (Gn.has(n)) {
      const r = Qc(n);
      return (r && r.default) || 0;
    } else {
      const r = UT(t),
        i = (ny(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return o0(t, n);
  }
  build(t, n, r) {
    Mc(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Ic(t, n, r);
  }
}
class $T extends v0 {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = se));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Gn.has(n)) {
      const r = Qc(n);
      return (r && r.default) || 0;
    }
    return ((n = oy.has(n) ? n : _c(n)), t.getAttribute(n));
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return uy(t, n, r);
  }
  build(t, n, r) {
    jc(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    ay(t, n, r, i);
  }
  mount(t) {
    ((this.isSVGTag = Fc(t.tagName)), super.mount(t));
  }
}
const HT = (e, t) =>
    Oc(e) ? new $T(t) : new zT(t, { allowProjection: e !== x.Fragment }),
  WT = gE({ ...pC, ...MT, ...PT, ...jT }, HT),
  KT = DS(WT),
  tf = ({ fullScreen: e = !1, size: t = "md" }) => {
    const n = {
        sm: "w-5 h-5",
        md: "w-8 h-8",
        lg: "w-12 h-12",
        xl: "w-16 h-16",
      },
      r = C.jsx(KT.div, {
        animate: { rotate: 360 },
        transition: { duration: 1, repeat: 1 / 0, ease: "linear" },
        className: `${n[t]} border-4 border-primary-200 dark:border-primary-800 border-t-primary-600 rounded-full`,
      });
    return e
      ? C.jsx("div", {
          className:
            "fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50",
          children: C.jsxs("div", {
            className: "flex flex-col items-center gap-4",
            children: [
              r,
              C.jsx("p", {
                className:
                  "text-gray-500 dark:text-gray-400 text-sm font-medium",
                children: "Loading...",
              }),
            ],
          }),
        })
      : r;
  };
function w0(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: GT } = Object.prototype,
  { getPrototypeOf: Or } = Object,
  { iterator: Zi, toStringTag: x0 } = Symbol,
  Ao = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  zi = (e, t) => {
    let n = e;
    const r = [];
    for (; n != null && n !== Object.prototype; ) {
      if (r.indexOf(n) !== -1) return !1;
      if ((r.push(n), Ao(n, t))) return !0;
      n = Or(n);
    }
    return !1;
  },
  qT = (e, t) => (e != null && zi(e, t) ? e[t] : void 0),
  nf = ((e) => (t) => {
    const n = GT.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  mt = (e) => ((e = e.toLowerCase()), (t) => nf(t) === e),
  ra = (e) => (t) => typeof t === e,
  { isArray: $n } = Array,
  Dr = ra("undefined");
function Br(e) {
  return (
    e !== null &&
    !Dr(e) &&
    e.constructor !== null &&
    !Dr(e.constructor) &&
    Be(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const S0 = mt("ArrayBuffer");
function XT(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && S0(e.buffer)),
    t
  );
}
const QT = ra("string"),
  Be = ra("function"),
  E0 = ra("number"),
  br = (e) => e !== null && typeof e == "object",
  YT = (e) => e === !0 || e === !1,
  Hs = (e) => {
    if (!br(e)) return !1;
    const t = Or(e);
    return (
      (t === null || t === Object.prototype || Or(t) === null) &&
      !zi(e, x0) &&
      !zi(e, Zi)
    );
  },
  JT = (e) => {
    if (!br(e) || Br(e)) return !1;
    try {
      return (
        Object.keys(e).length === 0 &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    } catch {
      return !1;
    }
  },
  ZT = mt("Date"),
  ek = mt("File"),
  tk = (e) => !!(e && typeof e.uri < "u"),
  nk = (e) => e && typeof e.getParts < "u",
  rk = mt("Blob"),
  ik = mt("FileList"),
  sk = (e) => br(e) && Be(e.pipe);
function ok() {
  return typeof globalThis < "u"
    ? globalThis
    : typeof self < "u"
      ? self
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : {};
}
const Xh = ok(),
  Qh = typeof Xh.FormData < "u" ? Xh.FormData : void 0,
  ak = (e) => {
    if (!e) return !1;
    if (Qh && e instanceof Qh) return !0;
    const t = Or(e);
    if (!t || t === Object.prototype || !Be(e.append)) return !1;
    const n = nf(e);
    return (
      n === "formdata" ||
      (n === "object" && Be(e.toString) && e.toString() === "[object FormData]")
    );
  },
  lk = mt("URLSearchParams"),
  [uk, ck, fk, dk] = ["ReadableStream", "Request", "Response", "Headers"].map(
    mt,
  ),
  hk = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function es(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), $n(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    if (Br(e)) return;
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = s.length;
    let a;
    for (r = 0; r < o; r++) ((a = s[r]), t.call(null, e[a], a, e));
  }
}
function P0(e, t) {
  if (Br(e)) return null;
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const Nn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : global,
  C0 = (e) => !Dr(e) && e !== Nn;
function mu(...e) {
  const { caseless: t, skipUndefined: n } = (C0(this) && this) || {},
    r = {},
    i = (s, o) => {
      if (o === "__proto__" || o === "constructor" || o === "prototype") return;
      const a = (t && typeof o == "string" && P0(r, o)) || o,
        l = Ao(r, a) ? r[a] : void 0;
      Hs(l) && Hs(s)
        ? (r[a] = mu(l, s))
        : Hs(s)
          ? (r[a] = mu({}, s))
          : $n(s)
            ? (r[a] = s.slice())
            : (!n || !Dr(s)) && (r[a] = s);
    };
  for (let s = 0, o = e.length; s < o; s++) {
    const a = e[s];
    if (!a || Br(a) || (es(a, i), typeof a != "object" || $n(a))) continue;
    const l = Object.getOwnPropertySymbols(a);
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      Tk.call(a, c) && i(a[c], c);
    }
  }
  return r;
}
const pk = (e, t, n, { allOwnKeys: r } = {}) => (
    es(
      t,
      (i, s) => {
        n && Be(i)
          ? Object.defineProperty(e, s, {
              __proto__: null,
              value: w0(i, n),
              writable: !0,
              enumerable: !0,
              configurable: !0,
            })
          : Object.defineProperty(e, s, {
              __proto__: null,
              value: i,
              writable: !0,
              enumerable: !0,
              configurable: !0,
            });
      },
      { allOwnKeys: r },
    ),
    e
  ),
  mk = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  gk = (e, t, n, r) => {
    ((e.prototype = Object.create(t.prototype, r)),
      Object.defineProperty(e.prototype, "constructor", {
        __proto__: null,
        value: e,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "super", {
        __proto__: null,
        value: t.prototype,
      }),
      n && Object.assign(e.prototype, n));
  },
  yk = (e, t, n, r) => {
    let i, s, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), s = i.length; s-- > 0; )
        ((o = i[s]),
          (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0)));
      e = n !== !1 && Or(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  vk = (e, t, n) => {
    ((e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length));
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  wk = (e) => {
    if (!e) return null;
    if ($n(e)) return e;
    let t = e.length;
    if (!E0(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  xk = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Or(Uint8Array)),
  Sk = (e, t) => {
    const r = (e && e[Zi]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const s = i.value;
      t.call(e, s[0], s[1]);
    }
  },
  Ek = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Pk = mt("HTMLFormElement"),
  Ck = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  { propertyIsEnumerable: Tk } = Object.prototype,
  kk = mt("RegExp"),
  T0 = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    (es(n, (i, s) => {
      let o;
      (o = t(i, s, e)) !== !1 && (r[s] = o || i);
    }),
      Object.defineProperties(e, r));
  },
  Rk = (e) => {
    T0(e, (t, n) => {
      if (Be(e) && ["arguments", "caller", "callee"].includes(n)) return !1;
      const r = e[n];
      if (Be(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  _k = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((s) => {
          n[s] = !0;
        });
      };
    return ($n(e) ? r(e) : r(String(e).split(t)), n);
  },
  Ak = () => {},
  Ok = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t);
function Dk(e) {
  return !!(e && Be(e.append) && e[x0] === "FormData" && e[Zi]);
}
const Lk = (e) => {
    const t = new WeakSet(),
      n = (r) => {
        if (br(r)) {
          if (t.has(r)) return;
          if (Br(r)) return r;
          if (!("toJSON" in r)) {
            t.add(r);
            const i = $n(r) ? [] : {};
            return (
              es(r, (s, o) => {
                const a = n(s);
                !Dr(a) && (i[o] = a);
              }),
              t.delete(r),
              i
            );
          }
        }
        return r;
      };
    return n(e);
  },
  Nk = mt("AsyncFunction"),
  Mk = (e) => e && (br(e) || Be(e)) && Be(e.then) && Be(e.catch),
  k0 = ((e, t) =>
    e
      ? setImmediate
      : t
        ? ((n, r) => (
            Nn.addEventListener(
              "message",
              ({ source: i, data: s }) => {
                i === Nn && s === n && r.length && r.shift()();
              },
              !1,
            ),
            (i) => {
              (r.push(i), Nn.postMessage(n, "*"));
            }
          ))(`axios@${Math.random()}`, [])
        : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Be(Nn.postMessage),
  ),
  jk =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Nn)
      : (typeof process < "u" && process.nextTick) || k0,
  R0 = (e) => e != null && Be(e[Zi]),
  Vk = (e) => e != null && zi(e, Zi) && R0(e),
  S = {
    isArray: $n,
    isArrayBuffer: S0,
    isBuffer: Br,
    isFormData: ak,
    isArrayBufferView: XT,
    isString: QT,
    isNumber: E0,
    isBoolean: YT,
    isObject: br,
    isPlainObject: Hs,
    isEmptyObject: JT,
    isReadableStream: uk,
    isRequest: ck,
    isResponse: fk,
    isHeaders: dk,
    isUndefined: Dr,
    isDate: ZT,
    isFile: ek,
    isReactNativeBlob: tk,
    isReactNative: nk,
    isBlob: rk,
    isRegExp: kk,
    isFunction: Be,
    isStream: sk,
    isURLSearchParams: lk,
    isTypedArray: xk,
    isFileList: ik,
    forEach: es,
    merge: mu,
    extend: pk,
    trim: hk,
    stripBOM: mk,
    inherits: gk,
    toFlatObject: yk,
    kindOf: nf,
    kindOfTest: mt,
    endsWith: vk,
    toArray: wk,
    forEachEntry: Sk,
    matchAll: Ek,
    isHTMLForm: Pk,
    hasOwnProperty: Ao,
    hasOwnProp: Ao,
    hasOwnInPrototypeChain: zi,
    getSafeProp: qT,
    reduceDescriptors: T0,
    freezeMethods: Rk,
    toObjectSet: _k,
    toCamelCase: Ck,
    noop: Ak,
    toFiniteNumber: Ok,
    findKey: P0,
    global: Nn,
    isContextDefined: C0,
    isSpecCompliantForm: Dk,
    toJSONObject: Lk,
    isAsyncFn: Nk,
    isThenable: Mk,
    setImmediate: k0,
    asap: jk,
    isIterable: R0,
    isSafeIterable: Vk,
  },
  Fk = S.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  Ik = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`,
          )
          .forEach(function (o) {
            ((i = o.indexOf(":")),
              (n = o.substring(0, i).trim().toLowerCase()),
              (r = o.substring(i + 1).trim()),
              !(!n || (t[n] && Fk[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r)));
          }),
      t
    );
  };
function Bk(e) {
  let t = 0,
    n = e.length;
  for (; t < n; ) {
    const r = e.charCodeAt(t);
    if (r !== 9 && r !== 32) break;
    t += 1;
  }
  for (; n > t; ) {
    const r = e.charCodeAt(n - 1);
    if (r !== 9 && r !== 32) break;
    n -= 1;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
const bk = new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g"),
  Uk = new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
function rf(e, t) {
  return S.isArray(e) ? e.map((n) => rf(n, t)) : Bk(String(e).replace(t, ""));
}
const zk = (e) => rf(e, bk),
  $k = (e) => rf(e, Uk);
function _0(e) {
  const t = Object.create(null);
  return (
    S.forEach(e.toJSON(), (n, r) => {
      t[r] = $k(n);
    }),
    t
  );
}
const Yh = Symbol("internals");
function Yr(e) {
  return e && String(e).trim().toLowerCase();
}
function Ws(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(Ws) : zk(String(e));
}
function Hk(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const Wk = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Xa(e, t, n, r, i) {
  if (S.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!S.isString(t))) {
    if (S.isString(r)) return t.indexOf(r) !== -1;
    if (S.isRegExp(r)) return r.test(t);
  }
}
function Kk(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Gk(e, t) {
  const n = S.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      __proto__: null,
      value: function (i, s, o) {
        return this[r].call(this, t, i, s, o);
      },
      configurable: !0,
    });
  });
}
let _e = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function s(a, l, u) {
      const c = Yr(l);
      if (!c) return;
      const f = S.findKey(i, c);
      (!f || i[f] === void 0 || u === !0 || (u === void 0 && i[f] !== !1)) &&
        (i[f || l] = Ws(a));
    }
    const o = (a, l) => S.forEach(a, (u, c) => s(u, c, l));
    if (S.isPlainObject(t) || t instanceof this.constructor) o(t, n);
    else if (S.isString(t) && (t = t.trim()) && !Wk(t)) o(Ik(t), n);
    else if (S.isObject(t) && S.isSafeIterable(t)) {
      let a = Object.create(null),
        l,
        u;
      for (const c of t) {
        if (!S.isArray(c))
          throw new TypeError("Object iterator must return a key-value pair");
        ((u = c[0]),
          S.hasOwnProp(a, u)
            ? ((l = a[u]), (a[u] = S.isArray(l) ? [...l, c[1]] : [l, c[1]]))
            : (a[u] = c[1]));
      }
      o(a, n);
    } else t != null && s(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = Yr(t)), t)) {
      const r = S.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return Hk(i);
        if (S.isFunction(n)) return n.call(this, i, r);
        if (S.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Yr(t)), t)) {
      const r = S.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Xa(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function s(o) {
      if (((o = Yr(o)), o)) {
        const a = S.findKey(r, o);
        a && (!n || Xa(r, r[a], a, n)) && (delete r[a], (i = !0));
      }
    }
    return (S.isArray(t) ? t.forEach(s) : s(t), i);
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || Xa(this, this[s], s, t, !0)) && (delete this[s], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      S.forEach(this, (i, s) => {
        const o = S.findKey(r, s);
        if (o) {
          ((n[o] = Ws(i)), delete n[s]);
          return;
        }
        const a = t ? Kk(s) : String(s).trim();
        (a !== s && delete n[s], (n[a] = Ws(i)), (r[a] = !0));
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      S.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && S.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return (n.forEach((i) => r.set(i)), r);
  }
  static accessor(t) {
    const r = (this[Yh] = this[Yh] = { accessors: {} }).accessors,
      i = this.prototype;
    function s(o) {
      const a = Yr(o);
      r[a] || (Gk(i, o), (r[a] = !0));
    }
    return (S.isArray(t) ? t.forEach(s) : s(t), this);
  }
};
_e.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
S.reduceDescriptors(_e.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
S.freezeMethods(_e);
const qk = "[REDACTED ****]";
function Xk(e) {
  if (S.hasOwnProp(e, "toJSON")) return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype; ) {
    if (S.hasOwnProp(t, "toJSON")) return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function Qk(e, t) {
  const n = new Set(t.map((s) => String(s).toLowerCase())),
    r = [],
    i = (s) => {
      if (s === null || typeof s != "object" || S.isBuffer(s)) return s;
      if (r.indexOf(s) !== -1) return;
      (s instanceof _e && (s = s.toJSON()), r.push(s));
      let o;
      if (S.isArray(s))
        ((o = []),
          s.forEach((a, l) => {
            const u = i(a);
            S.isUndefined(u) || (o[l] = u);
          }));
      else {
        if (!S.isPlainObject(s) && Xk(s)) return (r.pop(), s);
        o = Object.create(null);
        for (const [a, l] of Object.entries(s)) {
          const u = n.has(a.toLowerCase()) ? qk : i(l);
          S.isUndefined(u) || (o[a] = u);
        }
      }
      return (r.pop(), o);
    };
  return i(e);
}
let O = class A0 extends Error {
  static from(t, n, r, i, s, o) {
    const a = new A0(t.message, n || t.code, r, i, s);
    return (
      Object.defineProperty(a, "cause", {
        __proto__: null,
        value: t,
        writable: !0,
        enumerable: !1,
        configurable: !0,
      }),
      (a.name = t.name),
      t.status != null && a.status == null && (a.status = t.status),
      o && Object.assign(a, o),
      a
    );
  }
  constructor(t, n, r, i, s) {
    (super(t),
      Object.defineProperty(this, "message", {
        __proto__: null,
        value: t,
        enumerable: !0,
        writable: !0,
        configurable: !0,
      }),
      (this.name = "AxiosError"),
      (this.isAxiosError = !0),
      n && (this.code = n),
      r && (this.config = r),
      i && (this.request = i),
      s && ((this.response = s), (this.status = s.status)));
  }
  toJSON() {
    const t = this.config,
      n = t && S.hasOwnProp(t, "redact") ? t.redact : void 0,
      r = S.isArray(n) && n.length > 0 ? Qk(t, n) : S.toJSONObject(t);
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: r,
      code: this.code,
      status: this.status,
    };
  }
};
O.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
O.ERR_BAD_OPTION = "ERR_BAD_OPTION";
O.ECONNABORTED = "ECONNABORTED";
O.ETIMEDOUT = "ETIMEDOUT";
O.ECONNREFUSED = "ECONNREFUSED";
O.ERR_NETWORK = "ERR_NETWORK";
O.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
O.ERR_DEPRECATED = "ERR_DEPRECATED";
O.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
O.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
O.ERR_CANCELED = "ERR_CANCELED";
O.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
O.ERR_INVALID_URL = "ERR_INVALID_URL";
O.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
const Yk = null,
  O0 = 100;
function gu(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function D0(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Qa(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, s) {
          return ((i = D0(i)), !n && s ? "[" + i + "]" : i);
        })
        .join(n ? "." : "")
    : t;
}
function Jk(e) {
  return S.isArray(e) && !e.some(gu);
}
const Zk = S.toFlatObject(S, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function ia(e, t, n) {
  if (!S.isObject(e)) throw new TypeError("target must be an object");
  ((t = t || new FormData()),
    (n = S.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (p, m) {
        return !S.isUndefined(m[p]);
      },
    )));
  const r = n.metaTokens,
    i = n.visitor || y,
    s = n.dots,
    o = n.indexes,
    a = n.Blob || (typeof Blob < "u" && Blob),
    l = n.maxDepth === void 0 ? O0 : n.maxDepth,
    u = a && S.isSpecCompliantForm(t),
    c = [];
  if (!S.isFunction(i)) throw new TypeError("visitor must be a function");
  function f(h) {
    if (h === null) return "";
    if (S.isDate(h)) return h.toISOString();
    if (S.isBoolean(h)) return h.toString();
    if (!u && S.isBlob(h))
      throw new O("Blob is not supported. Use a Buffer instead.");
    if (S.isArrayBuffer(h) || S.isTypedArray(h)) {
      if (u && typeof a == "function") return new a([h]);
      if (typeof Buffer < "u") return Buffer.from(h);
      throw new O(
        "Blob is not supported. Use a Buffer instead.",
        O.ERR_NOT_SUPPORT,
      );
    }
    return h;
  }
  function d(h) {
    if (h > l)
      throw new O(
        "Object is too deeply nested (" + h + " levels). Max depth: " + l,
        O.ERR_FORM_DATA_DEPTH_EXCEEDED,
      );
  }
  function g(h, p) {
    if (l === 1 / 0) return JSON.stringify(h);
    const m = [];
    return JSON.stringify(h, function (P, T) {
      if (!S.isObject(T)) return T;
      for (; m.length && m[m.length - 1] !== this; ) m.pop();
      return (m.push(T), d(p + m.length - 1), T);
    });
  }
  function y(h, p, m) {
    let E = h;
    if (S.isReactNative(t) && S.isReactNativeBlob(h))
      return (t.append(Qa(m, p, s), f(h)), !1);
    if (h && !m && typeof h == "object") {
      if (S.endsWith(p, "{}")) ((p = r ? p : p.slice(0, -2)), (h = g(h, 1)));
      else if (
        (S.isArray(h) && Jk(h)) ||
        ((S.isFileList(h) || S.endsWith(p, "[]")) && (E = S.toArray(h)))
      )
        return (
          (p = D0(p)),
          E.forEach(function (T, _) {
            !(S.isUndefined(T) || T === null) &&
              t.append(
                o === !0 ? Qa([p], _, s) : o === null ? p : p + "[]",
                f(T),
              );
          }),
          !1
        );
    }
    return gu(h) ? !0 : (t.append(Qa(m, p, s), f(h)), !1);
  }
  const v = Object.assign(Zk, {
    defaultVisitor: y,
    convertValue: f,
    isVisitable: gu,
  });
  function w(h, p, m = 0) {
    if (!S.isUndefined(h)) {
      if ((d(m), c.indexOf(h) !== -1))
        throw new Error("Circular reference detected in " + p.join("."));
      (c.push(h),
        S.forEach(h, function (P, T) {
          (!(S.isUndefined(P) || P === null) &&
            i.call(t, P, S.isString(T) ? T.trim() : T, p, v)) === !0 &&
            w(P, p ? p.concat(T) : [T], m + 1);
        }),
        c.pop());
    }
  }
  if (!S.isObject(e)) throw new TypeError("data must be an object");
  return (w(e), t);
}
function Jh(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function (r) {
    return t[r];
  });
}
function sf(e, t) {
  ((this._pairs = []), e && ia(e, this, t));
}
const L0 = sf.prototype;
L0.append = function (t, n) {
  this._pairs.push([t, n]);
};
L0.toString = function (t) {
  const n = t ? (r) => t.call(this, r, Jh) : Jh;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function eR(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+");
}
function N0(e, t, n) {
  if (!t) return e;
  e = e || "";
  const r = S.isFunction(n) ? { serialize: n } : n,
    i = S.getSafeProp(r, "encode") || eR,
    s = S.getSafeProp(r, "serialize");
  let o;
  if (
    (s
      ? (o = s(t, r))
      : (o = S.isURLSearchParams(t) ? t.toString() : new sf(t, r).toString(i)),
    o)
  ) {
    const a = e.indexOf("#");
    (a !== -1 && (e = e.slice(0, a)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o));
  }
  return e;
}
class Zh {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    S.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const of = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
    legacyInterceptorReqResOrdering: !0,
    advertiseZstdAcceptEncoding: !1,
    validateStatusUndefinedResolves: !0,
  },
  tR = typeof URLSearchParams < "u" ? URLSearchParams : sf,
  nR = typeof FormData < "u" ? FormData : null,
  rR = typeof Blob < "u" ? Blob : null,
  iR = {
    isBrowser: !0,
    classes: { URLSearchParams: tR, FormData: nR, Blob: rR },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  af = typeof window < "u" && typeof document < "u",
  yu = (typeof navigator == "object" && navigator) || void 0,
  sR =
    af &&
    (!yu || ["ReactNative", "NativeScript", "NS"].indexOf(yu.product) < 0),
  oR =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  aR = (af && window.location.href) || "http://localhost",
  lR = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: af,
        hasStandardBrowserEnv: sR,
        hasStandardBrowserWebWorkerEnv: oR,
        navigator: yu,
        origin: aR,
      },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  ),
  ve = { ...lR, ...iR };
function uR(e, t) {
  return ia(e, new ve.classes.URLSearchParams(), {
    visitor: function (n, r, i, s) {
      return ve.isNode && S.isBuffer(n)
        ? (this.append(r, n.toString("base64")), !1)
        : s.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
const ep = O0;
function M0(e) {
  if (e > ep)
    throw new O(
      "FormData field is too deeply nested (" +
        e +
        " levels). Max depth: " +
        ep,
      O.ERR_FORM_DATA_DEPTH_EXCEEDED,
    );
}
function cR(e) {
  const t = [],
    n = /\w+|\[(\w*)]/g;
  let r;
  for (; (r = n.exec(e)) !== null; )
    (M0(t.length), t.push(r[0] === "[]" ? "" : r[1] || r[0]));
  return t;
}
function fR(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let s;
  for (r = 0; r < i; r++) ((s = n[r]), (t[s] = e[s]));
  return t;
}
function j0(e) {
  function t(n, r, i, s) {
    M0(s);
    let o = n[s++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o),
      l = s >= n.length;
    return (
      (o = !o && S.isArray(i) ? i.length : o),
      l
        ? (S.hasOwnProp(i, o)
            ? (i[o] = S.isArray(i[o]) ? i[o].concat(r) : [i[o], r])
            : (i[o] = r),
          !a)
        : ((!S.hasOwnProp(i, o) || !S.isObject(i[o])) && (i[o] = []),
          t(n, r, i[o], s) && S.isArray(i[o]) && (i[o] = fR(i[o])),
          !a)
    );
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const n = {};
    return (
      S.forEachEntry(e, (r, i) => {
        t(cR(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
const Qn = (e, t) => (e != null && S.hasOwnProp(e, t) ? e[t] : void 0);
function dR(e, t, n) {
  if (S.isString(e))
    try {
      return ((t || JSON.parse)(e), S.trim(e));
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const ts = {
  transitional: of,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        s = S.isObject(t);
      if ((s && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t)))
        return i ? JSON.stringify(j0(t)) : t;
      if (
        S.isArrayBuffer(t) ||
        S.isBuffer(t) ||
        S.isStream(t) ||
        S.isFile(t) ||
        S.isBlob(t) ||
        S.isReadableStream(t)
      )
        return t;
      if (S.isArrayBufferView(t)) return t.buffer;
      if (S.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1,
          ),
          t.toString()
        );
      let a;
      if (s) {
        const l = Qn(this, "formSerializer");
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return uR(t, l).toString();
        if ((a = S.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const u = Qn(this, "env"),
            c = u && u.FormData;
          return ia(a ? { "files[]": t } : t, c && new c(), l);
        }
      }
      return s || i ? (n.setContentType("application/json", !1), dR(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = Qn(this, "transitional") || ts.transitional,
        r = n && n.forcedJSONParsing,
        i = Qn(this, "responseType"),
        s = i === "json";
      if (S.isResponse(t) || S.isReadableStream(t)) return t;
      if (t && S.isString(t) && ((r && !i) || s)) {
        const a = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t, Qn(this, "parseReviver"));
        } catch (l) {
          if (a)
            throw l.name === "SyntaxError"
              ? O.from(l, O.ERR_BAD_RESPONSE, this, null, Qn(this, "response"))
              : l;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: ve.classes.FormData, Blob: ve.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
S.forEach(["delete", "get", "head", "post", "put", "patch", "query"], (e) => {
  ts.headers[e] = {};
});
function Ya(e, t) {
  const n = this || ts,
    r = t || n,
    i = _e.from(r.headers);
  let s = r.data;
  return (
    S.forEach(e, function (a) {
      s = a.call(n, s, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    s
  );
}
function V0(e) {
  return !!(e && e.__CANCEL__);
}
let ns = class extends O {
  constructor(t, n, r) {
    (super(t ?? "canceled", O.ERR_CANCELED, n, r),
      (this.name = "CanceledError"),
      (this.__CANCEL__ = !0));
  }
};
function F0(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new O(
          "Request failed with status code " + n.status,
          n.status >= 400 && n.status < 500
            ? O.ERR_BAD_REQUEST
            : O.ERR_BAD_RESPONSE,
          n.config,
          n.request,
          n,
        ),
      );
}
function hR(e) {
  const t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return (t && t[1]) || "";
}
function pR(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    s = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        c = r[s];
      (o || (o = u), (n[i] = l), (r[i] = u));
      let f = s,
        d = 0;
      for (; f !== i; ) ((d += n[f++]), (f = f % e));
      if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), u - o < t)) return;
      const g = c && u - c;
      return g ? Math.round((d * 1e3) / g) : void 0;
    }
  );
}
function mR(e, t) {
  let n = 0,
    r = 1e3 / t,
    i,
    s;
  const o = (u, c = Date.now()) => {
    ((n = c), (i = null), s && (clearTimeout(s), (s = null)), e(...u));
  };
  return [
    (...u) => {
      const c = Date.now(),
        f = c - n;
      f >= r
        ? o(u, c)
        : ((i = u),
          s ||
            (s = setTimeout(() => {
              ((s = null), o(i));
            }, r - f)));
    },
    () => i && o(i),
  ];
}
const Oo = (e, t, n = 3) => {
    let r = 0;
    const i = pR(50, 250);
    return mR((s) => {
      if (!s || typeof s.loaded != "number") return;
      const o = s.loaded,
        a = s.lengthComputable ? s.total : void 0,
        l = a != null ? Math.min(o, a) : o,
        u = Math.max(0, l - r),
        c = i(u);
      r = Math.max(r, l);
      const f = {
        loaded: l,
        total: a,
        progress: a ? l / a : void 0,
        bytes: u,
        rate: c || void 0,
        estimated: c && a ? (a - l) / c : void 0,
        event: s,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(f);
    }, n);
  },
  tp = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  np =
    (e) =>
    (...t) =>
      S.asap(() => e(...t)),
  gR = ve.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, ve.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(ve.origin),
        ve.navigator && /(msie|trident)/i.test(ve.navigator.userAgent),
      )
    : () => !0,
  yR = ve.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, i, s, o) {
          if (typeof document > "u") return;
          const a = [`${e}=${encodeURIComponent(t)}`];
          (S.isNumber(n) && a.push(`expires=${new Date(n).toUTCString()}`),
            S.isString(r) && a.push(`path=${r}`),
            S.isString(i) && a.push(`domain=${i}`),
            s === !0 && a.push("secure"),
            S.isString(o) && a.push(`SameSite=${o}`),
            (document.cookie = a.join("; ")));
        },
        read(e) {
          if (typeof document > "u") return null;
          const t = document.cookie.split(";");
          for (let n = 0; n < t.length; n++) {
            const r = t[n].replace(/^\s+/, ""),
              i = r.indexOf("=");
            if (i !== -1 && r.slice(0, i) === e)
              try {
                return decodeURIComponent(r.slice(i + 1));
              } catch {
                return r.slice(i + 1);
              }
          }
          return null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5, "/");
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function vR(e) {
  return typeof e != "string" ? !1 : /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function wR(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
const xR = /^https?:(?!\/\/)/i,
  SR = /[\t\n\r]/g;
function ER(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32; ) t++;
  return e.slice(t);
}
function PR(e) {
  return ER(e).replace(SR, "");
}
function rp(e, t) {
  if (typeof e == "string" && xR.test(PR(e)))
    throw new O(
      'Invalid URL: missing "//" after protocol',
      O.ERR_INVALID_URL,
      t,
    );
}
function I0(e, t, n, r) {
  rp(t, r);
  let i = !vR(t);
  return e && (i || n === !1) ? (rp(e, r), wR(e, t)) : t;
}
const ip = (e) => (e instanceof _e ? { ...e } : e);
function Hn(e, t) {
  ((e = e || {}), (t = t || {}));
  const n = Object.create(null);
  Object.defineProperty(n, "hasOwnProperty", {
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0,
  });
  function r(c, f, d, g) {
    return S.isPlainObject(c) && S.isPlainObject(f)
      ? S.merge.call({ caseless: g }, c, f)
      : S.isPlainObject(f)
        ? S.merge({}, f)
        : S.isArray(f)
          ? f.slice()
          : f;
  }
  function i(c, f, d, g) {
    if (S.isUndefined(f)) {
      if (!S.isUndefined(c)) return r(void 0, c, d, g);
    } else return r(c, f, d, g);
  }
  function s(c, f) {
    if (!S.isUndefined(f)) return r(void 0, f);
  }
  function o(c, f) {
    if (S.isUndefined(f)) {
      if (!S.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, f);
  }
  function a(c) {
    const f = S.hasOwnProp(t, "transitional") ? t.transitional : void 0;
    if (!S.isUndefined(f))
      if (S.isPlainObject(f)) {
        if (S.hasOwnProp(f, c)) return f[c];
      } else return;
    const d = S.hasOwnProp(e, "transitional") ? e.transitional : void 0;
    if (S.isPlainObject(d) && S.hasOwnProp(d, c)) return d[c];
  }
  function l(c, f, d) {
    if (S.hasOwnProp(t, d)) return r(c, f);
    if (S.hasOwnProp(e, d)) return r(void 0, c);
  }
  const u = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    allowedSocketPaths: o,
    responseEncoding: o,
    validateStatus: l,
    headers: (c, f, d) => i(ip(c), ip(f), d, !0),
  };
  return (
    S.forEach(Object.keys({ ...e, ...t }), function (f) {
      if (f === "__proto__" || f === "constructor" || f === "prototype") return;
      const d = S.hasOwnProp(u, f) ? u[f] : i,
        g = S.hasOwnProp(e, f) ? e[f] : void 0,
        y = S.hasOwnProp(t, f) ? t[f] : void 0,
        v = d(g, y, f);
      (S.isUndefined(v) && d !== l) || (n[f] = v);
    }),
    S.hasOwnProp(t, "validateStatus") &&
      S.isUndefined(t.validateStatus) &&
      a("validateStatusUndefinedResolves") === !1 &&
      (S.hasOwnProp(e, "validateStatus")
        ? (n.validateStatus = r(void 0, e.validateStatus))
        : delete n.validateStatus),
    n
  );
}
const CR = ["content-type", "content-length"];
function TR(e, t, n) {
  if (n !== "content-only") {
    e.set(t);
    return;
  }
  Object.entries(t || {}).forEach(([r, i]) => {
    CR.includes(r.toLowerCase()) && e.set(r, i);
  });
}
const kR = (e) =>
  encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (t, n) =>
    String.fromCharCode(parseInt(n, 16)),
  );
function B0(e) {
  const t = Hn({}, e),
    n = (d) => (S.hasOwnProp(t, d) ? t[d] : void 0),
    r = n("data");
  let i = n("withXSRFToken");
  const s = n("xsrfHeaderName"),
    o = n("xsrfCookieName");
  let a = n("headers");
  const l = n("auth"),
    u = n("baseURL"),
    c = n("allowAbsoluteUrls"),
    f = n("url");
  if (
    ((t.headers = a = _e.from(a)),
    (t.url = N0(I0(u, f, c, t), n("params"), n("paramsSerializer"))),
    l)
  ) {
    const d = S.getSafeProp(l, "username") || "",
      g = S.getSafeProp(l, "password") || "";
    try {
      a.set("Authorization", "Basic " + btoa(d + ":" + (g ? kR(g) : "")));
    } catch (y) {
      throw O.from(y, O.ERR_BAD_OPTION_VALUE, e);
    }
  }
  if (
    (S.isFormData(r) &&
      (ve.hasStandardBrowserEnv ||
      ve.hasStandardBrowserWebWorkerEnv ||
      S.isReactNative(r)
        ? a.setContentType(void 0)
        : S.isFunction(r.getHeaders) &&
          TR(a, r.getHeaders(), n("formDataHeaderPolicy"))),
    ve.hasStandardBrowserEnv &&
      (S.isFunction(i) && (i = i(t)), i === !0 || (i == null && gR(t.url))))
  ) {
    const g = s && o && yR.read(o);
    g && a.set(s, g);
  }
  return t;
}
const RR = typeof XMLHttpRequest < "u",
  _R =
    RR &&
    function (e) {
      return new Promise(function (n, r) {
        const i = B0(e);
        let s = i.data;
        const o = _e.from(i.headers).normalize();
        let { responseType: a, onUploadProgress: l, onDownloadProgress: u } = i,
          c,
          f,
          d,
          g,
          y;
        function v() {
          (g && g(),
            y && y(),
            i.cancelToken && i.cancelToken.unsubscribe(c),
            i.signal && i.signal.removeEventListener("abort", c));
        }
        let w = new XMLHttpRequest();
        (w.open(i.method.toUpperCase(), i.url, !0), (w.timeout = i.timeout));
        function h() {
          if (!w) return;
          const m = _e.from(
              "getAllResponseHeaders" in w && w.getAllResponseHeaders(),
            ),
            P = {
              data:
                !a || a === "text" || a === "json"
                  ? w.responseText
                  : w.response,
              status: w.status,
              statusText: w.statusText,
              headers: m,
              config: e,
              request: w,
            };
          (F0(
            function (_) {
              (n(_), v());
            },
            function (_) {
              (r(_), v());
            },
            P,
          ),
            (w = null));
        }
        ("onloadend" in w
          ? (w.onloadend = h)
          : (w.onreadystatechange = function () {
              !w ||
                w.readyState !== 4 ||
                (w.status === 0 &&
                  !(w.responseURL && w.responseURL.startsWith("file:"))) ||
                setTimeout(h);
            }),
          (w.onabort = function () {
            w &&
              (r(new O("Request aborted", O.ECONNABORTED, e, w)),
              v(),
              (w = null));
          }),
          (w.onerror = function (E) {
            const P = E && E.message ? E.message : "Network Error",
              T = new O(P, O.ERR_NETWORK, e, w);
            ((T.event = E || null), r(T), v(), (w = null));
          }),
          (w.ontimeout = function () {
            let E = i.timeout
              ? "timeout of " + i.timeout + "ms exceeded"
              : "timeout exceeded";
            const P = i.transitional || of;
            (i.timeoutErrorMessage && (E = i.timeoutErrorMessage),
              r(
                new O(
                  E,
                  P.clarifyTimeoutError ? O.ETIMEDOUT : O.ECONNABORTED,
                  e,
                  w,
                ),
              ),
              v(),
              (w = null));
          }),
          s === void 0 && o.setContentType(null),
          "setRequestHeader" in w &&
            S.forEach(_0(o), function (E, P) {
              w.setRequestHeader(P, E);
            }),
          S.isUndefined(i.withCredentials) ||
            (w.withCredentials = !!i.withCredentials),
          a && a !== "json" && (w.responseType = i.responseType),
          u && (([d, y] = Oo(u, !0)), w.addEventListener("progress", d)),
          l &&
            w.upload &&
            (([f, g] = Oo(l)),
            w.upload.addEventListener("progress", f),
            w.upload.addEventListener("loadend", g)),
          (i.cancelToken || i.signal) &&
            ((c = (m) => {
              w &&
                (r(!m || m.type ? new ns(null, e, w) : m),
                w.abort(),
                v(),
                (w = null));
            }),
            i.cancelToken && i.cancelToken.subscribe(c),
            i.signal &&
              (i.signal.aborted
                ? c()
                : i.signal.addEventListener("abort", c))));
        const p = hR(i.url);
        if (p && !ve.protocols.includes(p)) {
          (r(new O("Unsupported protocol " + p + ":", O.ERR_BAD_REQUEST, e)),
            v());
          return;
        }
        w.send(s || null);
      });
    },
  AR = (e, t) => {
    if (((e = e ? e.filter(Boolean) : []), !t && !e.length)) return;
    const n = new AbortController();
    let r = !1;
    const i = function (l) {
      if (!r) {
        ((r = !0), o());
        const u = l instanceof Error ? l : this.reason;
        n.abort(
          u instanceof O ? u : new ns(u instanceof Error ? u.message : u),
        );
      }
    };
    let s =
      t &&
      setTimeout(() => {
        ((s = null), i(new O(`timeout of ${t}ms exceeded`, O.ETIMEDOUT)));
      }, t);
    const o = () => {
      e &&
        (s && clearTimeout(s),
        (s = null),
        e.forEach((l) => {
          l.unsubscribe ? l.unsubscribe(i) : l.removeEventListener("abort", i);
        }),
        (e = null));
    };
    e.forEach((l) => l.addEventListener("abort", i, { once: !0 }));
    const { signal: a } = n;
    return ((a.unsubscribe = () => S.asap(o)), a);
  },
  OR = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      i;
    for (; r < n; ) ((i = r + t), yield e.slice(r, i), (r = i));
  },
  DR = async function* (e, t) {
    for await (const n of LR(e)) yield* OR(n, t);
  },
  LR = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  sp = (e, t, n, r) => {
    const i = DR(e, t);
    let s = 0,
      o,
      a = (l) => {
        o || ((o = !0), r && r(l));
      };
    return new ReadableStream(
      {
        async pull(l) {
          try {
            const { done: u, value: c } = await i.next();
            if (u) {
              (a(), l.close());
              return;
            }
            let f = c.byteLength;
            if (n) {
              let d = (s += f);
              n(d);
            }
            l.enqueue(new Uint8Array(c));
          } catch (u) {
            throw (a(u), u);
          }
        },
        cancel(l) {
          return (a(l), i.return());
        },
      },
      { highWaterMark: 2 },
    );
  },
  Do = (e) =>
    (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102),
  NR = (e, t, n) =>
    t + 2 < n && Do(e.charCodeAt(t + 1)) && Do(e.charCodeAt(t + 2));
function MR(e) {
  if (!e || typeof e != "string" || !e.startsWith("data:")) return 0;
  const t = e.indexOf(",");
  if (t < 0) return 0;
  const n = e.slice(5, t),
    r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let o = r.length;
    const a = r.length;
    for (let g = 0; g < a; g++)
      if (r.charCodeAt(g) === 37 && g + 2 < a) {
        const y = r.charCodeAt(g + 1),
          v = r.charCodeAt(g + 2);
        Do(y) && Do(v) && ((o -= 2), (g += 2));
      }
    let l = 0,
      u = a - 1;
    const c = (g) =>
      g >= 2 &&
      r.charCodeAt(g - 2) === 37 &&
      r.charCodeAt(g - 1) === 51 &&
      (r.charCodeAt(g) === 68 || r.charCodeAt(g) === 100);
    (u >= 0 && (r.charCodeAt(u) === 61 ? (l++, u--) : c(u) && (l++, (u -= 3))),
      l === 1 && u >= 0 && (r.charCodeAt(u) === 61 || c(u)) && l++);
    const d = Math.floor(o / 4) * 3 - (l || 0);
    return d > 0 ? d : 0;
  }
  let s = 0;
  for (let o = 0, a = r.length; o < a; o++) {
    const l = r.charCodeAt(o);
    if (l === 37 && NR(r, o, a)) ((s += 1), (o += 2));
    else if (l < 128) s += 1;
    else if (l < 2048) s += 2;
    else if (l >= 55296 && l <= 56319 && o + 1 < a) {
      const u = r.charCodeAt(o + 1);
      u >= 56320 && u <= 57343 ? ((s += 4), o++) : (s += 3);
    } else s += 3;
  }
  return s;
}
const lf = "1.18.1",
  op = 64 * 1024,
  { isFunction: ks } = S,
  jR = (e) =>
    encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (t, n) =>
      String.fromCharCode(parseInt(n, 16)),
    ),
  ap = (e) => {
    if (!S.isString(e)) return e;
    try {
      return decodeURIComponent(e);
    } catch {
      return e;
    }
  },
  lp = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  VR = (e) => {
    const t = e.indexOf("://");
    let n = e;
    return (
      t !== -1 && (n = n.slice(t + 3)),
      n.includes("@") || n.includes(":")
    );
  },
  FR = (e) => {
    const t = S.global !== void 0 && S.global !== null ? S.global : globalThis,
      { ReadableStream: n, TextEncoder: r } = t;
    e = S.merge.call(
      { skipUndefined: !0 },
      { Request: t.Request, Response: t.Response },
      e,
    );
    const { fetch: i, Request: s, Response: o } = e,
      a = i ? ks(i) : typeof fetch == "function",
      l = ks(s),
      u = ks(o);
    if (!a) return !1;
    const c = a && ks(n),
      f =
        a &&
        (typeof r == "function"
          ? (
              (h) => (p) =>
                h.encode(p)
            )(new r())
          : async (h) => new Uint8Array(await new s(h).arrayBuffer())),
      d =
        l &&
        c &&
        lp(() => {
          let h = !1;
          const p = new s(ve.origin, {
              body: new n(),
              method: "POST",
              get duplex() {
                return ((h = !0), "half");
              },
            }),
            m = p.headers.has("Content-Type");
          return (p.body != null && p.body.cancel(), h && !m);
        }),
      g = u && c && lp(() => S.isReadableStream(new o("").body)),
      y = { stream: g && ((h) => h.body) };
    a &&
      ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((h) => {
        !y[h] &&
          (y[h] = (p, m) => {
            let E = p && p[h];
            if (E) return E.call(p);
            throw new O(
              `Response type '${h}' is not supported`,
              O.ERR_NOT_SUPPORT,
              m,
            );
          });
      });
    const v = async (h) => {
        if (h == null) return 0;
        if (S.isBlob(h)) return h.size;
        if (S.isSpecCompliantForm(h))
          return (
            await new s(ve.origin, { method: "POST", body: h }).arrayBuffer()
          ).byteLength;
        if (S.isArrayBufferView(h) || S.isArrayBuffer(h)) return h.byteLength;
        if ((S.isURLSearchParams(h) && (h = h + ""), S.isString(h)))
          return (await f(h)).byteLength;
      },
      w = async (h, p) => {
        const m = S.toFiniteNumber(h.getContentLength());
        return m ?? v(p);
      };
    return async (h) => {
      let {
        url: p,
        method: m,
        data: E,
        signal: P,
        cancelToken: T,
        timeout: _,
        onDownloadProgress: k,
        onUploadProgress: V,
        responseType: L,
        headers: $,
        withCredentials: be = "same-origin",
        fetchOptions: gt,
        maxContentLength: Se,
        maxBodyLength: En,
      } = B0(h);
      const yt = S.isNumber(Se) && Se > -1,
        Q = S.isNumber(En) && En > -1,
        A = (b) => (S.hasOwnProp(h, b) ? h[b] : void 0);
      let j = i || fetch;
      L = L ? (L + "").toLowerCase() : "text";
      let N = AR([P, T && T.toAbortSignal()], _),
        I = null;
      const H =
        N &&
        N.unsubscribe &&
        (() => {
          N.unsubscribe();
        });
      let ot,
        Ue = null;
      const qn = () =>
        new O(
          "Request body larger than maxBodyLength limit",
          O.ERR_BAD_REQUEST,
          h,
          I,
        );
      try {
        let b;
        const me = A("auth");
        if (me) {
          const F = S.getSafeProp(me, "username") || "",
            ze = S.getSafeProp(me, "password") || "";
          b = { username: F, password: ze };
        }
        if (VR(p)) {
          const F = new URL(p, ve.origin);
          if (!b && (F.username || F.password)) {
            const ze = ap(F.username),
              Ht = ap(F.password);
            b = { username: ze, password: Ht };
          }
          (F.username || F.password) &&
            ((F.username = ""), (F.password = ""), (p = F.href));
        }
        if (
          (b &&
            ($.delete("authorization"),
            $.set(
              "Authorization",
              "Basic " +
                btoa(jR((b.username || "") + ":" + (b.password || ""))),
            )),
          yt && typeof p == "string" && p.startsWith("data:") && MR(p) > Se)
        )
          throw new O(
            "maxContentLength size of " + Se + " exceeded",
            O.ERR_BAD_RESPONSE,
            h,
            I,
          );
        if (Q && m !== "get" && m !== "head") {
          const F = await v(E);
          if (typeof F == "number" && isFinite(F) && ((ot = F), F > En))
            throw qn();
        }
        const rs = Q && (S.isReadableStream(E) || S.isStream(E)),
          cf = (F, ze, Ht) =>
            sp(
              F,
              op,
              (Pn) => {
                if (Q && Pn > En) throw (Ue = qn());
                ze && ze(Pn);
              },
              Ht,
            );
        if (d && m !== "get" && m !== "head" && (V || rs)) {
          if (((ot = ot ?? (await w($, E))), ot !== 0 || rs)) {
            let F = new s(p, { method: "POST", body: E, duplex: "half" }),
              ze;
            if (
              (S.isFormData(E) &&
                (ze = F.headers.get("content-type")) &&
                $.setContentType(ze),
              F.body)
            ) {
              const [Ht, Pn] = (V && tp(ot, Oo(np(V)))) || [];
              E = cf(F.body, Ht, Pn);
            }
          }
        } else if (rs && !l && c && m !== "get" && m !== "head") E = cf(E);
        else if (rs && l && !d && m !== "get" && m !== "head")
          throw new O(
            "Stream request bodies are not supported by the current fetch implementation",
            O.ERR_NOT_SUPPORT,
            h,
            I,
          );
        S.isString(be) || (be = be ? "include" : "omit");
        const G0 = l && "credentials" in s.prototype;
        if (S.isFormData(E)) {
          const F = $.getContentType();
          F &&
            /^multipart\/form-data/i.test(F) &&
            !/boundary=/i.test(F) &&
            $.delete("content-type");
        }
        $.set("User-Agent", "axios/" + lf, !1);
        const ff = {
          ...gt,
          signal: N,
          method: m.toUpperCase(),
          headers: _0($.normalize()),
          body: E,
          duplex: "half",
          credentials: G0 ? be : void 0,
        };
        I = l && new s(p, ff);
        let Rt = await (l ? j(I, gt) : j(p, ff));
        const df = _e.from(Rt.headers);
        if (yt) {
          const F = S.toFiniteNumber(df.getContentLength());
          if (F != null && F > Se)
            throw new O(
              "maxContentLength size of " + Se + " exceeded",
              O.ERR_BAD_RESPONSE,
              h,
              I,
            );
        }
        const aa = g && (L === "stream" || L === "response");
        if (g && Rt.body && (k || yt || (aa && H))) {
          const F = {};
          ["status", "statusText", "headers"].forEach((Ur) => {
            F[Ur] = Rt[Ur];
          });
          const ze = S.toFiniteNumber(df.getContentLength()),
            [Ht, Pn] = (k && tp(ze, Oo(np(k), !0))) || [];
          let hf = 0;
          const q0 = (Ur) => {
            if (yt && ((hf = Ur), hf > Se))
              throw new O(
                "maxContentLength size of " + Se + " exceeded",
                O.ERR_BAD_RESPONSE,
                h,
                I,
              );
            Ht && Ht(Ur);
          };
          Rt = new o(
            sp(Rt.body, op, q0, () => {
              (Pn && Pn(), H && H());
            }),
            F,
          );
        }
        L = L || "text";
        let _t = await y[S.findKey(y, L) || "text"](Rt, h);
        if (yt && !g && !aa) {
          let F;
          if (
            (_t != null &&
              (typeof _t.byteLength == "number"
                ? (F = _t.byteLength)
                : typeof _t.size == "number"
                  ? (F = _t.size)
                  : typeof _t == "string" &&
                    (F =
                      typeof r == "function"
                        ? new r().encode(_t).byteLength
                        : _t.length)),
            typeof F == "number" && F > Se)
          )
            throw new O(
              "maxContentLength size of " + Se + " exceeded",
              O.ERR_BAD_RESPONSE,
              h,
              I,
            );
        }
        return (
          !aa && H && H(),
          await new Promise((F, ze) => {
            F0(F, ze, {
              data: _t,
              headers: _e.from(Rt.headers),
              status: Rt.status,
              statusText: Rt.statusText,
              config: h,
              request: I,
            });
          })
        );
      } catch (b) {
        if ((H && H(), N && N.aborted && N.reason instanceof O)) {
          const me = N.reason;
          throw (
            (me.config = h),
            I && (me.request = I),
            b !== me &&
              Object.defineProperty(me, "cause", {
                __proto__: null,
                value: b,
                writable: !0,
                enumerable: !1,
                configurable: !0,
              }),
            me
          );
        }
        if (Ue) throw (I && !Ue.request && (Ue.request = I), Ue);
        if (b instanceof O) throw (I && !b.request && (b.request = I), b);
        if (
          b &&
          b.name === "TypeError" &&
          /Load failed|fetch/i.test(b.message)
        ) {
          const me = new O(
            "Network Error",
            O.ERR_NETWORK,
            h,
            I,
            b && b.response,
          );
          throw (
            Object.defineProperty(me, "cause", {
              __proto__: null,
              value: b.cause || b,
              writable: !0,
              enumerable: !1,
              configurable: !0,
            }),
            me
          );
        }
        throw O.from(b, b && b.code, h, I, b && b.response);
      }
    };
  },
  IR = new Map(),
  b0 = (e) => {
    let t = (e && e.env) || {};
    const { fetch: n, Request: r, Response: i } = t,
      s = [r, i, n];
    let o = s.length,
      a = o,
      l,
      u,
      c = IR;
    for (; a--; )
      ((l = s[a]),
        (u = c.get(l)),
        u === void 0 && c.set(l, (u = a ? new Map() : FR(t))),
        (c = u));
    return u;
  };
b0();
const uf = { http: Yk, xhr: _R, fetch: { get: b0 } };
S.forEach(uf, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { __proto__: null, value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { __proto__: null, value: t });
  }
});
const up = (e) => `- ${e}`,
  BR = (e) => S.isFunction(e) || e === null || e === !1;
function bR(e, t) {
  e = S.isArray(e) ? e : [e];
  const { length: n } = e;
  let r, i;
  const s = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let a;
    if (
      ((i = r),
      !BR(r) && ((i = uf[(a = String(r)).toLowerCase()]), i === void 0))
    )
      throw new O(`Unknown adapter '${a}'`);
    if (i && (S.isFunction(i) || (i = i.get(t)))) break;
    s[a || "#" + o] = i;
  }
  if (!i) {
    const o = Object.entries(s).map(
      ([l, u]) =>
        `adapter ${l} ` +
        (u === !1
          ? "is not supported by the environment"
          : "is not available in the build"),
    );
    let a = n
      ? o.length > 1
        ? `since :
` +
          o.map(up).join(`
`)
        : " " + up(o[0])
      : "as no adapter specified";
    throw new O(
      "There is no suitable adapter to dispatch the request " + a,
      O.ERR_NOT_SUPPORT,
    );
  }
  return i;
}
const U0 = { getAdapter: bR, adapters: uf };
function Ja(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new ns(null, e);
}
function cp(e) {
  return (
    Ja(e),
    (e.headers = _e.from(e.headers)),
    (e.data = Ya.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    U0.getAdapter(
      e.adapter || ts.adapter,
      e,
    )(e).then(
      function (r) {
        (Ja(e), (e.response = r));
        try {
          r.data = Ya.call(e, e.transformResponse, r);
        } finally {
          delete e.response;
        }
        return ((r.headers = _e.from(r.headers)), r);
      },
      function (r) {
        if (!V0(r) && (Ja(e), r && r.response)) {
          e.response = r.response;
          try {
            r.response.data = Ya.call(e, e.transformResponse, r.response);
          } finally {
            delete e.response;
          }
          r.response.headers = _e.from(r.response.headers);
        }
        return Promise.reject(r);
      },
    )
  );
}
const sa = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    sa[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  },
);
const fp = {};
sa.transitional = function (t, n, r) {
  function i(s, o) {
    return (
      "[Axios v" +
      lf +
      "] Transitional option '" +
      s +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (s, o, a) => {
    if (t === !1)
      throw new O(
        i(o, " has been removed" + (n ? " in " + n : "")),
        O.ERR_DEPRECATED,
      );
    return (
      n &&
        !fp[o] &&
        ((fp[o] = !0),
        console.warn(
          i(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future",
          ),
        )),
      t ? t(s, o, a) : !0
    );
  };
};
sa.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function UR(e, t, n) {
  if (typeof e != "object" || e === null)
    throw new O("options must be an object", O.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const s = r[i],
      o = Object.prototype.hasOwnProperty.call(t, s) ? t[s] : void 0;
    if (o) {
      const a = e[s],
        l = a === void 0 || o(a, s, e);
      if (l !== !0)
        throw new O("option " + s + " must be " + l, O.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new O("Unknown option " + s, O.ERR_BAD_OPTION);
  }
}
const Ks = { assertOptions: UR, validators: sa },
  Ce = Ks.validators;
let Fn = class {
  constructor(t) {
    ((this.defaults = t || {}),
      (this.interceptors = { request: new Zh(), response: new Zh() }));
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(i)
          : (i = new Error());
        const s = (() => {
          if (!i.stack) return "";
          const o = i.stack.indexOf(`
`);
          return o === -1 ? "" : i.stack.slice(o + 1);
        })();
        try {
          if (!r.stack) r.stack = s;
          else if (s) {
            const o = s.indexOf(`
`),
              a =
                o === -1
                  ? -1
                  : s.indexOf(
                      `
`,
                      o + 1,
                    ),
              l = a === -1 ? "" : s.slice(a + 1);
            String(r.stack).endsWith(l) ||
              (r.stack +=
                `
` + s);
          }
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    (typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = Hn(this.defaults, n)));
    const { transitional: r, paramsSerializer: i, headers: s } = n;
    (r !== void 0 &&
      Ks.assertOptions(
        r,
        {
          silentJSONParsing: Ce.transitional(Ce.boolean),
          forcedJSONParsing: Ce.transitional(Ce.boolean),
          clarifyTimeoutError: Ce.transitional(Ce.boolean),
          legacyInterceptorReqResOrdering: Ce.transitional(Ce.boolean),
          advertiseZstdAcceptEncoding: Ce.transitional(Ce.boolean),
          validateStatusUndefinedResolves: Ce.transitional(Ce.boolean),
        },
        !1,
      ),
      i != null &&
        (S.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : Ks.assertOptions(
              i,
              { encode: Ce.function, serialize: Ce.function },
              !0,
            )),
      n.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (n.allowAbsoluteUrls = !0)),
      Ks.assertOptions(
        n,
        {
          baseUrl: Ce.spelling("baseURL"),
          withXsrfToken: Ce.spelling("withXSRFToken"),
        },
        !0,
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase()));
    let o = s && S.merge(s.common, s[n.method]);
    (s &&
      S.forEach(
        ["delete", "get", "head", "post", "put", "patch", "query", "common"],
        (y) => {
          delete s[y];
        },
      ),
      (n.headers = _e.concat(o, s)));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (v) {
      if (typeof v.runWhen == "function" && v.runWhen(n) === !1) return;
      l = l && v.synchronous;
      const w = n.transitional || of;
      w && w.legacyInterceptorReqResOrdering
        ? a.unshift(v.fulfilled, v.rejected)
        : a.push(v.fulfilled, v.rejected);
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let c,
      f = 0,
      d;
    if (!l) {
      const y = [cp.bind(this), void 0];
      for (
        y.unshift(...a), y.push(...u), d = y.length, c = Promise.resolve(n);
        f < d;
      )
        c = c.then(y[f++], y[f++]);
      return c;
    }
    d = a.length;
    let g = n;
    for (; f < d; ) {
      const y = a[f++],
        v = a[f++];
      try {
        g = y(g);
      } catch (w) {
        v.call(this, w);
        break;
      }
    }
    try {
      c = cp.call(this, g);
    } catch (y) {
      return Promise.reject(y);
    }
    for (f = 0, d = u.length; f < d; ) c = c.then(u[f++], u[f++]);
    return c;
  }
  getUri(t) {
    t = Hn(this.defaults, t);
    const n = I0(t.baseURL, t.url, t.allowAbsoluteUrls, t);
    return N0(n, t.params, t.paramsSerializer);
  }
};
S.forEach(["delete", "get", "head", "options"], function (t) {
  Fn.prototype[t] = function (n, r) {
    return this.request(
      Hn(r || {}, {
        method: t,
        url: n,
        data: r && S.hasOwnProp(r, "data") ? r.data : void 0,
      }),
    );
  };
});
S.forEach(["post", "put", "patch", "query"], function (t) {
  function n(r) {
    return function (s, o, a) {
      return this.request(
        Hn(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: s,
          data: o,
        }),
      );
    };
  }
  ((Fn.prototype[t] = n()),
    t !== "query" && (Fn.prototype[t + "Form"] = n(!0)));
});
let zR = class z0 {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (s) {
      n = s;
    });
    const r = this;
    (this.promise.then((i) => {
      if (!r._listeners) return;
      let s = r._listeners.length;
      for (; s-- > 0; ) r._listeners[s](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let s;
        const o = new Promise((a) => {
          (r.subscribe(a), (s = a));
        }).then(i);
        return (
          (o.cancel = function () {
            r.unsubscribe(s);
          }),
          o
        );
      }),
      t(function (s, o, a) {
        r.reason || ((r.reason = new ns(s, o, a)), n(r.reason));
      }));
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new z0(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
};
function $R(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function HR(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const vu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526,
};
Object.entries(vu).forEach(([e, t]) => {
  vu[t] = e;
});
function $0(e) {
  const t = new Fn(e),
    n = w0(Fn.prototype.request, t);
  return (
    S.extend(n, Fn.prototype, t, { allOwnKeys: !0 }),
    S.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return $0(Hn(e, i));
    }),
    n
  );
}
const ie = $0(ts);
ie.Axios = Fn;
ie.CanceledError = ns;
ie.CancelToken = zR;
ie.isCancel = V0;
ie.VERSION = lf;
ie.toFormData = ia;
ie.AxiosError = O;
ie.Cancel = ie.CanceledError;
ie.all = function (t) {
  return Promise.all(t);
};
ie.spread = $R;
ie.isAxiosError = HR;
ie.mergeConfig = Hn;
ie.AxiosHeaders = _e;
ie.formToJSON = (e) => j0(S.isHTMLForm(e) ? new FormData(e) : e);
ie.getAdapter = U0.getAdapter;
ie.HttpStatusCode = vu;
ie.default = ie;
const {
    Axios: T2,
    AxiosError: k2,
    CanceledError: R2,
    isCancel: _2,
    CancelToken: A2,
    VERSION: O2,
    all: D2,
    Cancel: L2,
    isAxiosError: N2,
    spread: M2,
    toFormData: j2,
    AxiosHeaders: V2,
    HttpStatusCode: F2,
    formToJSON: I2,
    getAdapter: B2,
    mergeConfig: b2,
    create: U2,
  } = ie,
  H0 = "http://localhost:5000/api",
  Ze = ie.create({
    baseURL: H0,
    withCredentials: !0,
    headers: { "Content-Type": "application/json" },
  });
Ze.interceptors.request.use(
  (e) => {
    const t = localStorage.getItem("accessToken");
    return (t && (e.headers.Authorization = `Bearer ${t}`), e);
  },
  (e) => Promise.reject(e),
);
let Za = !1,
  wu = [];
const dp = (e, t = null) => {
  (wu.forEach((n) => {
    e ? n.reject(e) : n.resolve(t);
  }),
    (wu = []));
};
Ze.interceptors.response.use(
  (e) => e,
  async (e) => {
    var n;
    const t = e.config;
    if (((n = e.response) == null ? void 0 : n.status) === 401 && !t._retry) {
      if (Za)
        return new Promise((r, i) => {
          wu.push({ resolve: r, reject: i });
        })
          .then((r) => ((t.headers.Authorization = `Bearer ${r}`), Ze(t)))
          .catch((r) => Promise.reject(r));
      ((t._retry = !0), (Za = !0));
      try {
        const r = await ie.post(
            `${H0}/auth/refresh`,
            {},
            { withCredentials: !0 },
          ),
          { accessToken: i } = r.data.data;
        return (
          localStorage.setItem("accessToken", i),
          (Ze.defaults.headers.common.Authorization = `Bearer ${i}`),
          dp(null, i),
          (t.headers.Authorization = `Bearer ${i}`),
          Ze(t)
        );
      } catch (r) {
        return (
          dp(r, null),
          localStorage.removeItem("accessToken"),
          (window.location.href = "/login"),
          Promise.reject(r)
        );
      } finally {
        Za = !1;
      }
    }
    return Promise.reject(e);
  },
);
const Rs = {
    register: (e) => Ze.post("/auth/register", e),
    login: (e) => Ze.post("/auth/login", e),
    logout: () => Ze.post("/auth/logout"),
    refresh: () => Ze.post("/auth/refresh"),
    me: () => Ze.get("/auth/me"),
    forgotPassword: (e) => Ze.post("/auth/forgot-password", { email: e }),
    resetPassword: (e, t) =>
      Ze.post("/auth/reset-password", { token: e, password: t }),
  },
  W0 = x.createContext(null),
  oa = () => {
    const e = x.useContext(W0);
    if (!e) throw new Error("useAuth must be used within AuthProvider");
    return e;
  },
  WR = ({ children: e }) => {
    const [t, n] = x.useState(null),
      [r, i] = x.useState(!0),
      [s, o] = x.useState(!1),
      a = x.useCallback(async () => {
        if (!localStorage.getItem("accessToken")) {
          i(!1);
          return;
        }
        try {
          const y = await Rs.me();
          (n(y.data.data), o(!0));
        } catch {
          (localStorage.removeItem("accessToken"), n(null), o(!1));
        } finally {
          i(!1);
        }
      }, []);
    x.useEffect(() => {
      a();
    }, [a]);
    const d = {
      user: t,
      isAuthenticated: s,
      loading: r,
      login: async (g, y) => {
        const v = await Rs.login({ email: g, password: y }),
          { accessToken: w, user: h } = v.data.data;
        return (
          localStorage.setItem("accessToken", w),
          n(h),
          o(!0),
          ja.success("Welcome back!"),
          h
        );
      },
      register: async (g, y, v) => {
        const w = await Rs.register({ name: g, email: y, password: v }),
          { accessToken: h, user: p } = w.data.data;
        return (
          localStorage.setItem("accessToken", h),
          n(p),
          o(!0),
          ja.success("Account created successfully!"),
          p
        );
      },
      logout: async () => {
        try {
          await Rs.logout();
        } finally {
          (localStorage.removeItem("accessToken"),
            n(null),
            o(!1),
            ja.success("Logged out successfully"));
        }
      },
      updateUser: (g) => {
        n((y) => ({ ...y, ...g }));
      },
      checkAuth: a,
    };
    return C.jsx(W0.Provider, { value: d, children: e });
  },
  K0 = x.createContext(null),
  KR = () => {
    const e = x.useContext(K0);
    if (!e) throw new Error("useTheme must be used within ThemeProvider");
    return e;
  },
  GR = ({ children: e }) => {
    const [t, n] = x.useState(() => {
      const i = localStorage.getItem("theme");
      return i
        ? i === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
    });
    x.useEffect(() => {
      const i = window.document.documentElement;
      t
        ? (i.classList.add("dark"), localStorage.setItem("theme", "dark"))
        : (i.classList.remove("dark"), localStorage.setItem("theme", "light"));
    }, [t]);
    const r = () => n((i) => !i);
    return C.jsx(K0.Provider, {
      value: { isDark: t, toggleTheme: r },
      children: e,
    });
  },
  qR = () => {
    var s, o;
    const { user: e, logout: t } = oa(),
      n = $t(),
      r = [
        {
          path: "/dashboard",
          label: "Overview",
          icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
        },
        {
          path: "/dashboard/projects",
          label: "Projects",
          icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2zm2 0h14v10H5V7z",
        },
        {
          path: "/dashboard/upload",
          label: "Upload",
          icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
        },
        {
          path: "/dashboard/papers",
          label: "My Papers",
          icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
        },
        {
          path: "/dashboard/profile",
          label: "Profile",
          icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
        },
        {
          path: "/dashboard/settings",
          label: "Settings",
          icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
        },
      ],
      i = (a) => n.pathname === a;
    return C.jsxs("aside", {
      className:
        "fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 hidden lg:flex flex-col z-30",
      children: [
        C.jsx("div", {
          className: "p-6",
          children: C.jsxs(xo, {
            to: "/dashboard",
            className: "flex items-center gap-2",
            children: [
              C.jsx("div", {
                className:
                  "w-8 h-8 rounded-lg gradient-bg flex items-center justify-center",
                children: C.jsx("svg", {
                  className: "w-5 h-5 text-white",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: C.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                  }),
                }),
              }),
              C.jsx("span", {
                className: "text-xl font-bold gradient-text",
                children: "PaperSummarizer",
              }),
            ],
          }),
        }),
        C.jsx("nav", {
          className: "flex-1 px-4 space-y-1",
          children: r.map((a) =>
            C.jsxs(
              xo,
              {
                to: a.path,
                className: `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${i(a.path) ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium" : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"}`,
                children: [
                  C.jsx("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: C.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: a.icon,
                    }),
                  }),
                  a.label,
                ],
              },
              a.path,
            ),
          ),
        }),
        C.jsxs("div", {
          className: "p-4 border-t border-gray-200 dark:border-gray-800",
          children: [
            C.jsxs("div", {
              className: "flex items-center gap-3 px-4 py-3",
              children: [
                C.jsx("div", {
                  className:
                    "w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-medium",
                  children:
                    ((o =
                      (s = e == null ? void 0 : e.name) == null
                        ? void 0
                        : s.charAt(0)) == null
                      ? void 0
                      : o.toUpperCase()) || "U",
                }),
                C.jsxs("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    C.jsx("p", {
                      className:
                        "text-sm font-medium text-gray-900 dark:text-white truncate",
                      children: e == null ? void 0 : e.name,
                    }),
                    C.jsx("p", {
                      className:
                        "text-xs text-gray-500 dark:text-gray-400 truncate",
                      children: e == null ? void 0 : e.email,
                    }),
                  ],
                }),
              ],
            }),
            C.jsxs("button", {
              onClick: t,
              className:
                "w-full mt-2 flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors",
              children: [
                C.jsx("svg", {
                  className: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: C.jsx("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
                  }),
                }),
                "Sign Out",
              ],
            }),
          ],
        }),
      ],
    });
  },
  XR = () => {
    const { user: e } = oa(),
      { isDark: t, toggleTheme: n } = KR(),
      [r, i] = x.useState(!1),
      s = $t(),
      o = [
        { path: "/dashboard", label: "Overview" },
        { path: "/dashboard/projects", label: "Projects" },
        { path: "/dashboard/upload", label: "Upload" },
        { path: "/dashboard/papers", label: "My Papers" },
      ];
    return C.jsxs("header", {
      className:
        "lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-20",
      children: [
        C.jsxs("div", {
          className: "px-4 py-3 flex items-center justify-between",
          children: [
            C.jsxs(xo, {
              to: "/dashboard",
              className: "flex items-center gap-2",
              children: [
                C.jsx("div", {
                  className:
                    "w-8 h-8 rounded-lg gradient-bg flex items-center justify-center",
                  children: C.jsx("svg", {
                    className: "w-5 h-5 text-white",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: C.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                    }),
                  }),
                }),
                C.jsx("span", {
                  className: "text-lg font-bold gradient-text",
                  children: "PaperSummarizer",
                }),
              ],
            }),
            C.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                C.jsx("button", {
                  onClick: n,
                  className:
                    "p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                  children: t
                    ? C.jsx("svg", {
                        className: "w-5 h-5",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: C.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
                        }),
                      })
                    : C.jsx("svg", {
                        className: "w-5 h-5",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: C.jsx("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
                        }),
                      }),
                }),
                C.jsx("button", {
                  onClick: () => i(!r),
                  className:
                    "p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
                  children: C.jsx("svg", {
                    className: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: C.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M4 6h16M4 12h16M4 18h16",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
        r &&
          C.jsx("nav", {
            className:
              "px-4 pb-4 space-y-1 border-t border-gray-200 dark:border-gray-800",
            children: o.map((a) =>
              C.jsx(
                xo,
                {
                  to: a.path,
                  onClick: () => i(!1),
                  className: `block px-4 py-2 rounded-lg ${s.pathname === a.path ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium" : "text-gray-600 dark:text-gray-400"}`,
                  children: a.label,
                },
                a.path,
              ),
            ),
          }),
      ],
    });
  },
  QR = () =>
    C.jsxs("div", {
      className: "min-h-screen bg-gray-50 dark:bg-gray-900 flex",
      children: [
        C.jsx(qR, {}),
        C.jsxs("div", {
          className:
            "flex-1 flex flex-col ml-0 lg:ml-64 transition-all duration-300",
          children: [
            C.jsx(XR, {}),
            C.jsx("main", {
              className: "flex-1 p-6 overflow-y-auto",
              children: C.jsx(wo, {}),
            }),
          ],
        }),
      ],
    }),
  YR = () => {
    const { isAuthenticated: e, loading: t } = oa();
    return t
      ? C.jsx(tf, { fullScreen: !0 })
      : e
        ? C.jsx(wo, {})
        : C.jsx(Vg, { to: "/login", replace: !0 });
  },
  JR = () => {
    const { isAuthenticated: e, loading: t } = oa();
    return $t().pathname.startsWith("/share/")
      ? C.jsx(wo, {})
      : t
        ? C.jsx(tf, { fullScreen: !0 })
        : e
          ? C.jsx(Vg, { to: "/dashboard", replace: !0 })
          : C.jsx(wo, {});
  },
  ZR = x.lazy(() => de(() => import("./LandingPage-q-30ff5b.js"), [])),
  e2 = x.lazy(() =>
    de(() => import("./Login-3pAhQGQL.js"), __vite__mapDeps([0, 1, 2, 3])),
  ),
  t2 = x.lazy(() =>
    de(() => import("./Register-BlVimuW6.js"), __vite__mapDeps([4, 1, 2, 3])),
  ),
  n2 = x.lazy(() =>
    de(
      () => import("./ForgotPassword-zRE89enD.js"),
      __vite__mapDeps([5, 1, 2, 3]),
    ),
  ),
  r2 = x.lazy(() =>
    de(
      () => import("./ResetPassword-Cy2p-7Ye.js"),
      __vite__mapDeps([6, 1, 2, 3]),
    ),
  ),
  i2 = x.lazy(() =>
    de(() => import("./Dashboard-PefI84hp.js"), __vite__mapDeps([7, 8, 9, 10])),
  ),
  s2 = x.lazy(() =>
    de(
      () => import("./Projects-Djngh-dS.js"),
      __vite__mapDeps([11, 12, 3, 2, 13, 14, 10, 15]),
    ),
  ),
  o2 = x.lazy(() =>
    de(
      () => import("./ProjectDetail-D44Dfyv-.js"),
      __vite__mapDeps([16, 12, 10, 3]),
    ),
  ),
  a2 = x.lazy(() =>
    de(
      () => import("./Upload-B2KRoYFp.js"),
      __vite__mapDeps([17, 1, 9, 3, 13, 2]),
    ),
  ),
  l2 = x.lazy(() =>
    de(
      () => import("./Papers-DV--tsjj.js"),
      __vite__mapDeps([18, 8, 9, 15, 3, 10, 14]),
    ),
  ),
  u2 = x.lazy(() => de(() => import("./PaperDetail-m1-6aNKs.js"), [])),
  c2 = x.lazy(() => de(() => import("./SummaryView-DCZfNZ7O.js"), [])),
  f2 = x.lazy(() => de(() => import("./ComparisonView-DYHhVliR.js"), [])),
  d2 = x.lazy(() => de(() => import("./GapAnalysis-Dn3_ePey.js"), [])),
  h2 = x.lazy(() => de(() => import("./GeneratedPaper-CItopoJO.js"), [])),
  p2 = x.lazy(() =>
    de(() => import("./Profile-Czfczi03.js"), __vite__mapDeps([19, 1, 2, 3])),
  ),
  m2 = x.lazy(() =>
    de(() => import("./Settings-DJQ6bz9B.js"), __vite__mapDeps([20, 3, 14])),
  ),
  g2 = x.lazy(() =>
    de(() => import("./SharedSummary-VlJt9WM1.js"), __vite__mapDeps([21, 10])),
  ),
  y2 = x.lazy(() => de(() => import("./NotFound-ky5rHh3Q.js"), []));
function v2() {
  return C.jsx(x.Suspense, {
    fallback: C.jsx(tf, { fullScreen: !0 }),
    children: C.jsx(PS, {
      mode: "wait",
      children: C.jsxs(yx, {
        children: [
          C.jsxs(Y, {
            element: C.jsx(JR, {}),
            children: [
              C.jsx(Y, { path: "/", element: C.jsx(ZR, {}) }),
              C.jsx(Y, { path: "/login", element: C.jsx(e2, {}) }),
              C.jsx(Y, { path: "/register", element: C.jsx(t2, {}) }),
              C.jsx(Y, { path: "/forgot-password", element: C.jsx(n2, {}) }),
              C.jsx(Y, {
                path: "/reset-password/:token",
                element: C.jsx(r2, {}),
              }),
              C.jsx(Y, { path: "/share/:token", element: C.jsx(g2, {}) }),
            ],
          }),
          C.jsx(Y, {
            element: C.jsx(YR, {}),
            children: C.jsxs(Y, {
              element: C.jsx(QR, {}),
              children: [
                C.jsx(Y, { path: "/dashboard", element: C.jsx(i2, {}) }),
                C.jsx(Y, {
                  path: "/dashboard/projects",
                  element: C.jsx(s2, {}),
                }),
                C.jsx(Y, {
                  path: "/dashboard/projects/:id",
                  element: C.jsx(o2, {}),
                }),
                C.jsx(Y, { path: "/dashboard/upload", element: C.jsx(a2, {}) }),
                C.jsx(Y, { path: "/dashboard/papers", element: C.jsx(l2, {}) }),
                C.jsx(Y, {
                  path: "/dashboard/papers/:id",
                  element: C.jsx(u2, {}),
                }),
                C.jsx(Y, {
                  path: "/dashboard/summaries/:id",
                  element: C.jsx(c2, {}),
                }),
                C.jsx(Y, {
                  path: "/dashboard/comparison/:id",
                  element: C.jsx(f2, {}),
                }),
                C.jsx(Y, {
                  path: "/dashboard/gap-analysis/:id",
                  element: C.jsx(d2, {}),
                }),
                C.jsx(Y, {
                  path: "/dashboard/generator",
                  element: C.jsx(h2, {}),
                }),
                C.jsx(Y, {
                  path: "/dashboard/profile",
                  element: C.jsx(p2, {}),
                }),
                C.jsx(Y, {
                  path: "/dashboard/settings",
                  element: C.jsx(m2, {}),
                }),
              ],
            }),
          }),
          C.jsx(Y, { path: "*", element: C.jsx(y2, {}) }),
        ],
      }),
    }),
  });
}
el.createRoot(document.getElementById("root")).render(
  C.jsx(Pp.StrictMode, {
    children: C.jsx(Tx, {
      children: C.jsx(GR, {
        children: C.jsxs(WR, {
          children: [
            C.jsx(v2, {}),
            C.jsx(gS, {
              position: "top-right",
              toastOptions: {
                duration: 4e3,
                style: { borderRadius: "12px", padding: "16px" },
                success: {
                  iconTheme: { primary: "#7c3aed", secondary: "#fff" },
                },
                error: { iconTheme: { primary: "#ef4444", secondary: "#fff" } },
              },
            }),
          ],
        }),
      }),
    }),
  }),
);
export {
  PS as A,
  xo as L,
  Pp as R,
  wc as a,
  Rs as b,
  w2 as c,
  tf as d,
  Ze as e,
  x2 as f,
  Q0 as g,
  KR as h,
  C as j,
  KT as m,
  x as r,
  oa as u,
  ja as z,
};
