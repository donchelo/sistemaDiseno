var cc = Object.defineProperty;
var lc = (e, t, r) => t in e ? cc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ze = (e, t, r) => lc(e, typeof t != "symbol" ? t + "" : t, r);
import { AI4U_PALETTE as T, TEXT_VARIANTS as oe, TYPOGRAPHY_TOKENS as te, SHADOW_TOKENS as wt, SURFACE_PRESETS as fo, CONTRAST_PAIRS as dc, useComponentColors as uc, BREAKPOINT_TOKENS as zn } from "./tokens/index.js";
import { AI4U_DESIGN_TOKENS as T0, BORDER_TOKENS as E0, COMPONENT_SPACING as $0, COMPONENT_VARIANTS as k0, SPACING_TOKENS as I0, TRANSITION_TOKENS as A0, TYPOGRAPHY_UTILITIES as O0, Z_INDEX_TOKENS as _0, createAI4UTokens as R0, useContrastColors as P0 } from "./tokens/index.js";
import { jsxs as v, jsx as c, Fragment as Er } from "react/jsx-runtime";
import { styled as Le, Button as yt, Box as b, Typography as K, useTheme as De, Container as ft, Stack as Ee, Skeleton as ae, useMediaQuery as Gr, Menu as Ha, MenuItem as Wr, Link as Ga, Fab as fc, Dialog as pc, DialogTitle as mc, IconButton as tt, alpha as Ne, DialogContent as hc, Paper as vr, CircularProgress as gc, TextField as Ya, Card as Ro, CardContent as $r, Avatar as hi, Chip as nr, Divider as nn, Alert as yc, AlertTitle as bc, Collapse as xc, Grid as je, Tabs as vc, Tab as Sc, TableContainer as Cc, Table as wc, TableHead as Tc, TableRow as gi, TableCell as ct, TableBody as Ec, AppBar as $c, Toolbar as kc } from "@mui/material";
import * as Z from "react";
import gt, { useState as ee, useRef as on, useEffect as $e, createContext as Po, useCallback as Rt, useMemo as Ue, useContext as an, Component as sn, Suspense as Ic } from "react";
import { Global as Ac, ThemeContext as qa } from "@emotion/react";
import Oc from "@emotion/styled";
import { Link as Qt, useNavigate as Mo, useLocation as _c } from "react-router-dom";
import { Receipt as Rc, MoreVert as yi, AttachMoney as Pc, Favorite as Mc, TrendingUp as Dc, School as Nc, FitnessCenter as zc, ShoppingCart as Fc, AccountBalance as Lc, Add as Bc, RefreshOutlined as Wc, ExpandMore as jc, Bed as Vc, Refresh as Ka, Wifi as Uc, Bluetooth as Hc, LocationOn as Gc, WbSunny as bi, Cloud as Yc, Opacity as qc, ContentCopy as Kc } from "@mui/icons-material";
const Xc = Le(yt, {
  shouldForwardProp: (e) => e !== "customVariant"
})(({ theme: e, customVariant: t }) => {
  const r = e.palette.mode === "light", n = {
    borderRadius: 0,
    // Heavy Industrial Sharp Edges
    fontWeight: 700,
    letterSpacing: "0.15em",
    fontSize: "0.875rem",
    fontFamily: '"Red Hat Display", sans-serif',
    transition: "all 0.2s steps(4, end)",
    // Industrial "Snap" transition
    border: "none",
    padding: "12px 24px",
    boxShadow: "none",
    position: "relative",
    overflow: "hidden"
  };
  switch (t) {
    case "primary":
      return {
        ...n,
        backgroundColor: r ? T.black : T.white,
        color: r ? T.white : T.black,
        "&:hover": {
          backgroundColor: r ? T.gray[800] : T.gray[200],
          transform: "translate(-2px, -2px)",
          boxShadow: `4px 4px 0px 0px ${r ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)"}`
        }
      };
    case "industrial":
      return {
        ...n,
        backgroundColor: T.accentColors.mint,
        // Safety Green
        color: T.black,
        border: `2px solid ${T.black}`,
        "&:hover": {
          backgroundColor: T.accentColors.orange,
          // Warning Orange
          transform: "translate(-4px, -4px)",
          boxShadow: `8px 8px 0px 0px ${T.black}`
        }
      };
    case "outline":
      return {
        ...n,
        backgroundColor: "transparent",
        color: r ? T.black : T.white,
        border: `2px solid ${r ? T.black : T.white}`,
        "&:hover": {
          backgroundColor: r ? T.black : T.white,
          color: r ? T.white : T.black
        }
      };
    case "minimal":
      return {
        ...n,
        backgroundColor: r ? T.gray[100] : T.gray[900],
        color: r ? T.black : T.white,
        "&:hover": {
          backgroundColor: r ? T.gray[200] : T.gray[800]
        }
      };
    default:
      return n;
  }
}), Qc = Le(b)(({ theme: e }) => ({
  position: "absolute",
  top: 2,
  right: 6,
  ...oe.label.secondary,
  fontSize: "0.65rem",
  pointerEvents: "none"
})), Do = ({
  children: e,
  variant: t = "primary",
  size: r = "medium",
  label: n,
  className: o,
  sx: i,
  ...a
}) => /* @__PURE__ */ v(
  Xc,
  {
    customVariant: t,
    size: r,
    className: o,
    sx: i,
    ...a,
    children: [
      n && /* @__PURE__ */ c(Qc, { children: n }),
      e
    ]
  }
), Jc = (e) => /* @__PURE__ */ c(
  K,
  {
    variant: "h1",
    sx: {
      ...oe.display.giant,
      ...e.sx
    },
    ...e
  }
), No = (e) => /* @__PURE__ */ c(
  K,
  {
    variant: "h1",
    sx: {
      ...oe.display.large,
      ...e.sx
    },
    ...e
  }
), Xa = (e) => /* @__PURE__ */ c(
  K,
  {
    variant: "h2",
    sx: {
      ...oe.display.medium,
      ...e.sx
    },
    ...e
  }
), kr = (e) => /* @__PURE__ */ c(
  K,
  {
    variant: "h3",
    sx: {
      ...oe.display.small,
      ...e.sx
    },
    ...e
  }
), Ve = (e) => /* @__PURE__ */ c(
  K,
  {
    variant: "h4",
    sx: {
      fontSize: oe.display.small.fontSize,
      fontWeight: 400,
      lineHeight: 1.2,
      textTransform: "none",
      ...e.sx
    },
    ...e
  }
), hg = (e) => /* @__PURE__ */ c(
  K,
  {
    variant: "h5",
    sx: {
      fontSize: oe.body.large.fontSize,
      fontWeight: 400,
      lineHeight: 1.3,
      ...e.sx
    },
    ...e
  }
), gg = (e) => /* @__PURE__ */ c(
  K,
  {
    variant: "h6",
    sx: {
      fontSize: oe.body.regular.fontSize,
      fontWeight: 400,
      lineHeight: 1.4,
      ...e.sx
    },
    ...e
  }
), Be = (e) => /* @__PURE__ */ c(
  K,
  {
    variant: "body1",
    sx: {
      ...oe.body.regular,
      ...e.sx
    },
    ...e
  }
), ve = (e) => /* @__PURE__ */ c(
  K,
  {
    variant: "body2",
    sx: {
      ...oe.body.small,
      ...e.sx
    },
    ...e
  }
), ut = (e) => {
  const t = De();
  return /* @__PURE__ */ c(
    K,
    {
      component: "code",
      fontFamily: oe.ui.code.fontFamily,
      sx: {
        display: "inline-block",
        backgroundColor: t.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.04)",
        color: t.palette.mode === "dark" ? "primary.light" : "text.primary",
        borderRadius: 1,
        px: 0.5,
        ...oe.ui.code,
        ...e.sx
      },
      ...e
    }
  );
}, yg = ({ variant: e = "body1", ...t }) => /* @__PURE__ */ c(K, { variant: e, ...t }), Zc = "/assets/images/logo-v2-negro.png", el = "/assets/images/logo-v2-crema.png", or = ({
  variant: e = "desktop",
  light: t = !1,
  onClick: r,
  sx: n,
  ...o
}) => /* @__PURE__ */ c(
  b,
  {
    component: "img",
    src: t ? el : Zc,
    alt: "AI4U Logo",
    onClick: () => {
      r ? r() : window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    sx: {
      height: e === "desktop" ? 48 : 42,
      width: "auto",
      cursor: "pointer",
      transition: "transform 0.2s ease-in-out",
      "&:hover": {
        transform: "scale(1.02)"
      },
      ...n
    },
    ...o
  }
), tl = (e, t = {}) => {
  const [r, n] = ee(!1), [o, i] = ee(!1), [a, s] = ee(!1), [l, d] = ee(""), f = on(null), { threshold: p = 0.1, rootMargin: h = "50px", priority: m = !1 } = t;
  return $e(() => {
    if (d(e), m) {
      i(!0);
      return;
    }
    const x = new IntersectionObserver(
      ([u]) => {
        u.isIntersecting && (i(!0), x.disconnect());
      },
      {
        threshold: p,
        rootMargin: h
      }
    );
    return f.current && x.observe(f.current), () => {
      x.disconnect();
    };
  }, [p, h, m, e]), $e(() => {
    if (!o) return;
    const x = new Image();
    x.onload = () => {
      n(!0), s(!1);
    }, x.onerror = () => {
      s(!0), n(!1);
    }, x.src = l;
  }, [l, o]), {
    imgRef: f,
    isLoaded: r,
    isInView: o,
    error: a,
    imageSrc: l
  };
}, po = (e = "smooth") => {
  window.scrollTo({
    top: 0,
    behavior: e
  });
};
function Nt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const Tt = "$$material";
function rl(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var nl = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function ol(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var il = /[A-Z]|^ms/g, al = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Qa = function(t) {
  return t.charCodeAt(1) === 45;
}, xi = function(t) {
  return t != null && typeof t != "boolean";
}, Fn = /* @__PURE__ */ ol(function(e) {
  return Qa(e) ? e : e.replace(il, "-$&").toLowerCase();
}), vi = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(al, function(n, o, i) {
          return St = {
            name: o,
            styles: i,
            next: St
          }, o;
        });
  }
  return nl[t] !== 1 && !Qa(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Yr(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return St = {
          name: o.name,
          styles: o.styles,
          next: St
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            St = {
              name: a.name,
              styles: a.styles,
              next: St
            }, a = a.next;
        var s = i.styles + ";";
        return s;
      }
      return sl(e, t, r);
    }
  }
  var l = r;
  return l;
}
function sl(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Yr(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var s = a;
        xi(s) && (n += Fn(i) + ":" + vi(i, s) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && t == null)
        for (var l = 0; l < a.length; l++)
          xi(a[l]) && (n += Fn(i) + ":" + vi(i, a[l]) + ";");
      else {
        var d = Yr(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Fn(i) + ":" + d + ";";
            break;
          }
          default:
            n += i + "{" + d + "}";
        }
      }
    }
  return n;
}
var Si = /label:\s*([^\s;{]+)\s*(;|$)/g, St;
function cl(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  St = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Yr(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += Yr(r, t, e[s]), n) {
      var l = i;
      o += l[s];
    }
  Si.lastIndex = 0;
  for (var d = "", f; (f = Si.exec(o)) !== null; )
    d += "-" + f[1];
  var p = rl(o) + d;
  return {
    name: p,
    styles: o,
    next: St
  };
}
function Ir(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mo = { exports: {} }, Mr = { exports: {} }, ce = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ci;
function ll() {
  if (Ci) return ce;
  Ci = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function _(S) {
    if (typeof S == "object" && S !== null) {
      var P = S.$$typeof;
      switch (P) {
        case t:
          switch (S = S.type, S) {
            case l:
            case d:
            case n:
            case i:
            case o:
            case p:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case s:
                case f:
                case x:
                case m:
                case a:
                  return S;
                default:
                  return P;
              }
          }
        case r:
          return P;
      }
    }
  }
  function O(S) {
    return _(S) === d;
  }
  return ce.AsyncMode = l, ce.ConcurrentMode = d, ce.ContextConsumer = s, ce.ContextProvider = a, ce.Element = t, ce.ForwardRef = f, ce.Fragment = n, ce.Lazy = x, ce.Memo = m, ce.Portal = r, ce.Profiler = i, ce.StrictMode = o, ce.Suspense = p, ce.isAsyncMode = function(S) {
    return O(S) || _(S) === l;
  }, ce.isConcurrentMode = O, ce.isContextConsumer = function(S) {
    return _(S) === s;
  }, ce.isContextProvider = function(S) {
    return _(S) === a;
  }, ce.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, ce.isForwardRef = function(S) {
    return _(S) === f;
  }, ce.isFragment = function(S) {
    return _(S) === n;
  }, ce.isLazy = function(S) {
    return _(S) === x;
  }, ce.isMemo = function(S) {
    return _(S) === m;
  }, ce.isPortal = function(S) {
    return _(S) === r;
  }, ce.isProfiler = function(S) {
    return _(S) === i;
  }, ce.isStrictMode = function(S) {
    return _(S) === o;
  }, ce.isSuspense = function(S) {
    return _(S) === p;
  }, ce.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === n || S === d || S === i || S === o || S === p || S === h || typeof S == "object" && S !== null && (S.$$typeof === x || S.$$typeof === m || S.$$typeof === a || S.$$typeof === s || S.$$typeof === f || S.$$typeof === w || S.$$typeof === E || S.$$typeof === D || S.$$typeof === u);
  }, ce.typeOf = _, ce;
}
var le = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wi;
function dl() {
  return wi || (wi = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function _($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === n || $ === d || $ === i || $ === o || $ === p || $ === h || typeof $ == "object" && $ !== null && ($.$$typeof === x || $.$$typeof === m || $.$$typeof === a || $.$$typeof === s || $.$$typeof === f || $.$$typeof === w || $.$$typeof === E || $.$$typeof === D || $.$$typeof === u);
    }
    function O($) {
      if (typeof $ == "object" && $ !== null) {
        var Ce = $.$$typeof;
        switch (Ce) {
          case t:
            var Ke = $.type;
            switch (Ke) {
              case l:
              case d:
              case n:
              case i:
              case o:
              case p:
                return Ke;
              default:
                var xt = Ke && Ke.$$typeof;
                switch (xt) {
                  case s:
                  case f:
                  case x:
                  case m:
                  case a:
                    return xt;
                  default:
                    return Ce;
                }
            }
          case r:
            return Ce;
        }
      }
    }
    var S = l, P = d, Q = s, G = a, j = t, y = f, R = n, g = x, N = m, M = r, X = i, J = o, re = p, ke = !1;
    function We($) {
      return ke || (ke = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C($) || O($) === l;
    }
    function C($) {
      return O($) === d;
    }
    function k($) {
      return O($) === s;
    }
    function z($) {
      return O($) === a;
    }
    function L($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function F($) {
      return O($) === f;
    }
    function V($) {
      return O($) === n;
    }
    function W($) {
      return O($) === x;
    }
    function B($) {
      return O($) === m;
    }
    function U($) {
      return O($) === r;
    }
    function q($) {
      return O($) === i;
    }
    function H($) {
      return O($) === o;
    }
    function ie($) {
      return O($) === p;
    }
    le.AsyncMode = S, le.ConcurrentMode = P, le.ContextConsumer = Q, le.ContextProvider = G, le.Element = j, le.ForwardRef = y, le.Fragment = R, le.Lazy = g, le.Memo = N, le.Portal = M, le.Profiler = X, le.StrictMode = J, le.Suspense = re, le.isAsyncMode = We, le.isConcurrentMode = C, le.isContextConsumer = k, le.isContextProvider = z, le.isElement = L, le.isForwardRef = F, le.isFragment = V, le.isLazy = W, le.isMemo = B, le.isPortal = U, le.isProfiler = q, le.isStrictMode = H, le.isSuspense = ie, le.isValidElementType = _, le.typeOf = O;
  }()), le;
}
var Ti;
function Ja() {
  return Ti || (Ti = 1, process.env.NODE_ENV === "production" ? Mr.exports = ll() : Mr.exports = dl()), Mr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ln, Ei;
function ul() {
  if (Ei) return Ln;
  Ei = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(a).map(function(f) {
        return a[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        d[f] = f;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ln = o() ? Object.assign : function(i, a) {
    for (var s, l = n(i), d, f = 1; f < arguments.length; f++) {
      s = Object(arguments[f]);
      for (var p in s)
        t.call(s, p) && (l[p] = s[p]);
      if (e) {
        d = e(s);
        for (var h = 0; h < d.length; h++)
          r.call(s, d[h]) && (l[d[h]] = s[d[h]]);
      }
    }
    return l;
  }, Ln;
}
var Bn, $i;
function zo() {
  if ($i) return Bn;
  $i = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Bn = e, Bn;
}
var Wn, ki;
function Za() {
  return ki || (ki = 1, Wn = Function.call.bind(Object.prototype.hasOwnProperty)), Wn;
}
var jn, Ii;
function fl() {
  if (Ii) return jn;
  Ii = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = zo(), r = {}, n = Za();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, l, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (n(i, f)) {
          var p;
          try {
            if (typeof i[f] != "function") {
              var h = Error(
                (l || "React class") + ": " + s + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            p = i[f](a, f, l, s, null, t);
          } catch (x) {
            p = x;
          }
          if (p && !(p instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var m = d ? d() : "";
            e(
              "Failed " + s + " type: " + p.message + (m ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, jn = o, jn;
}
var Vn, Ai;
function pl() {
  if (Ai) return Vn;
  Ai = 1;
  var e = Ja(), t = ul(), r = zo(), n = Za(), o = fl(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Vn = function(s, l) {
    var d = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function p(C) {
      var k = C && (d && C[d] || C[f]);
      if (typeof k == "function")
        return k;
    }
    var h = "<<anonymous>>", m = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: D(),
      arrayOf: _,
      element: O(),
      elementType: S(),
      instanceOf: P,
      node: y(),
      objectOf: G,
      oneOf: Q,
      oneOfType: j,
      shape: g,
      exact: N
    };
    function x(C, k) {
      return C === k ? C !== 0 || 1 / C === 1 / k : C !== C && k !== k;
    }
    function u(C, k) {
      this.message = C, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    u.prototype = Error.prototype;
    function w(C) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, z = 0;
      function L(V, W, B, U, q, H, ie) {
        if (U = U || h, H = H || B, ie !== r) {
          if (l) {
            var $ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw $.name = "Invariant Violation", $;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ce = U + ":" + B;
            !k[Ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + H + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[Ce] = !0, z++);
          }
        }
        return W[B] == null ? V ? W[B] === null ? new u("The " + q + " `" + H + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new u("The " + q + " `" + H + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : C(W, B, U, q, H);
      }
      var F = L.bind(null, !1);
      return F.isRequired = L.bind(null, !0), F;
    }
    function E(C) {
      function k(z, L, F, V, W, B) {
        var U = z[L], q = J(U);
        if (q !== C) {
          var H = re(U);
          return new u(
            "Invalid " + V + " `" + W + "` of type " + ("`" + H + "` supplied to `" + F + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return w(k);
    }
    function D() {
      return w(a);
    }
    function _(C) {
      function k(z, L, F, V, W) {
        if (typeof C != "function")
          return new u("Property `" + W + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var B = z[L];
        if (!Array.isArray(B)) {
          var U = J(B);
          return new u("Invalid " + V + " `" + W + "` of type " + ("`" + U + "` supplied to `" + F + "`, expected an array."));
        }
        for (var q = 0; q < B.length; q++) {
          var H = C(B, q, F, V, W + "[" + q + "]", r);
          if (H instanceof Error)
            return H;
        }
        return null;
      }
      return w(k);
    }
    function O() {
      function C(k, z, L, F, V) {
        var W = k[z];
        if (!s(W)) {
          var B = J(W);
          return new u("Invalid " + F + " `" + V + "` of type " + ("`" + B + "` supplied to `" + L + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(C);
    }
    function S() {
      function C(k, z, L, F, V) {
        var W = k[z];
        if (!e.isValidElementType(W)) {
          var B = J(W);
          return new u("Invalid " + F + " `" + V + "` of type " + ("`" + B + "` supplied to `" + L + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(C);
    }
    function P(C) {
      function k(z, L, F, V, W) {
        if (!(z[L] instanceof C)) {
          var B = C.name || h, U = We(z[L]);
          return new u("Invalid " + V + " `" + W + "` of type " + ("`" + U + "` supplied to `" + F + "`, expected ") + ("instance of `" + B + "`."));
        }
        return null;
      }
      return w(k);
    }
    function Q(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function k(z, L, F, V, W) {
        for (var B = z[L], U = 0; U < C.length; U++)
          if (x(B, C[U]))
            return null;
        var q = JSON.stringify(C, function(ie, $) {
          var Ce = re($);
          return Ce === "symbol" ? String($) : $;
        });
        return new u("Invalid " + V + " `" + W + "` of value `" + String(B) + "` " + ("supplied to `" + F + "`, expected one of " + q + "."));
      }
      return w(k);
    }
    function G(C) {
      function k(z, L, F, V, W) {
        if (typeof C != "function")
          return new u("Property `" + W + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var B = z[L], U = J(B);
        if (U !== "object")
          return new u("Invalid " + V + " `" + W + "` of type " + ("`" + U + "` supplied to `" + F + "`, expected an object."));
        for (var q in B)
          if (n(B, q)) {
            var H = C(B, q, F, V, W + "." + q, r);
            if (H instanceof Error)
              return H;
          }
        return null;
      }
      return w(k);
    }
    function j(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var k = 0; k < C.length; k++) {
        var z = C[k];
        if (typeof z != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ke(z) + " at index " + k + "."
          ), a;
      }
      function L(F, V, W, B, U) {
        for (var q = [], H = 0; H < C.length; H++) {
          var ie = C[H], $ = ie(F, V, W, B, U, r);
          if ($ == null)
            return null;
          $.data && n($.data, "expectedType") && q.push($.data.expectedType);
        }
        var Ce = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new u("Invalid " + B + " `" + U + "` supplied to " + ("`" + W + "`" + Ce + "."));
      }
      return w(L);
    }
    function y() {
      function C(k, z, L, F, V) {
        return M(k[z]) ? null : new u("Invalid " + F + " `" + V + "` supplied to " + ("`" + L + "`, expected a ReactNode."));
      }
      return w(C);
    }
    function R(C, k, z, L, F) {
      return new u(
        (C || "React class") + ": " + k + " type `" + z + "." + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function g(C) {
      function k(z, L, F, V, W) {
        var B = z[L], U = J(B);
        if (U !== "object")
          return new u("Invalid " + V + " `" + W + "` of type `" + U + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var q in C) {
          var H = C[q];
          if (typeof H != "function")
            return R(F, V, W, q, re(H));
          var ie = H(B, q, F, V, W + "." + q, r);
          if (ie)
            return ie;
        }
        return null;
      }
      return w(k);
    }
    function N(C) {
      function k(z, L, F, V, W) {
        var B = z[L], U = J(B);
        if (U !== "object")
          return new u("Invalid " + V + " `" + W + "` of type `" + U + "` " + ("supplied to `" + F + "`, expected `object`."));
        var q = t({}, z[L], C);
        for (var H in q) {
          var ie = C[H];
          if (n(C, H) && typeof ie != "function")
            return R(F, V, W, H, re(ie));
          if (!ie)
            return new u(
              "Invalid " + V + " `" + W + "` key `" + H + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(z[L], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var $ = ie(B, H, F, V, W + "." + H, r);
          if ($)
            return $;
        }
        return null;
      }
      return w(k);
    }
    function M(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every(M);
          if (C === null || s(C))
            return !0;
          var k = p(C);
          if (k) {
            var z = k.call(C), L;
            if (k !== C.entries) {
              for (; !(L = z.next()).done; )
                if (!M(L.value))
                  return !1;
            } else
              for (; !(L = z.next()).done; ) {
                var F = L.value;
                if (F && !M(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function X(C, k) {
      return C === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function J(C) {
      var k = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : X(k, C) ? "symbol" : k;
    }
    function re(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var k = J(C);
      if (k === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function ke(C) {
      var k = re(C);
      switch (k) {
        case "array":
        case "object":
          return "an " + k;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + k;
        default:
          return k;
      }
    }
    function We(C) {
      return !C.constructor || !C.constructor.name ? h : C.constructor.name;
    }
    return m.checkPropTypes = o, m.resetWarningCache = o.resetWarningCache, m.PropTypes = m, m;
  }, Vn;
}
var Un, Oi;
function ml() {
  if (Oi) return Un;
  Oi = 1;
  var e = zo();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Un = function() {
    function n(a, s, l, d, f, p) {
      if (p !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Un;
}
if (process.env.NODE_ENV !== "production") {
  var hl = Ja(), gl = !0;
  mo.exports = pl()(hl.isElement, gl);
} else
  mo.exports = ml()();
var yl = mo.exports;
const Y = /* @__PURE__ */ Ir(yl);
function bl(e) {
  return e == null || Object.keys(e).length === 0;
}
function Fo(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e;
  return /* @__PURE__ */ c(Ac, {
    styles: typeof t == "function" ? (o) => t(bl(o) ? r : o) : t
  });
}
process.env.NODE_ENV !== "production" && (Fo.propTypes = {
  defaultTheme: Y.object,
  styles: Y.oneOfType([Y.array, Y.string, Y.object, Y.func])
});
/**
 * @mui/styled-engine v9.0.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const _i = [];
function xl(e) {
  return _i[0] = e, cl(_i);
}
var ho = { exports: {} }, me = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ri;
function vl() {
  if (Ri) return me;
  Ri = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), m = Symbol.for("react.client.reference");
  function x(u) {
    if (typeof u == "object" && u !== null) {
      var w = u.$$typeof;
      switch (w) {
        case e:
          switch (u = u.type, u) {
            case r:
            case o:
            case n:
            case l:
            case d:
            case h:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case a:
                case s:
                case p:
                case f:
                  return u;
                case i:
                  return u;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return me.ContextConsumer = i, me.ContextProvider = a, me.Element = e, me.ForwardRef = s, me.Fragment = r, me.Lazy = p, me.Memo = f, me.Portal = t, me.Profiler = o, me.StrictMode = n, me.Suspense = l, me.SuspenseList = d, me.isContextConsumer = function(u) {
    return x(u) === i;
  }, me.isContextProvider = function(u) {
    return x(u) === a;
  }, me.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, me.isForwardRef = function(u) {
    return x(u) === s;
  }, me.isFragment = function(u) {
    return x(u) === r;
  }, me.isLazy = function(u) {
    return x(u) === p;
  }, me.isMemo = function(u) {
    return x(u) === f;
  }, me.isPortal = function(u) {
    return x(u) === t;
  }, me.isProfiler = function(u) {
    return x(u) === o;
  }, me.isStrictMode = function(u) {
    return x(u) === n;
  }, me.isSuspense = function(u) {
    return x(u) === l;
  }, me.isSuspenseList = function(u) {
    return x(u) === d;
  }, me.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === o || u === n || u === l || u === d || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === f || u.$$typeof === a || u.$$typeof === i || u.$$typeof === s || u.$$typeof === m || u.getModuleId !== void 0);
  }, me.typeOf = x, me;
}
var he = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pi;
function Sl() {
  return Pi || (Pi = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (typeof u == "object" && u !== null) {
        var w = u.$$typeof;
        switch (w) {
          case t:
            switch (u = u.type, u) {
              case n:
              case i:
              case o:
              case d:
              case f:
              case m:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case s:
                  case l:
                  case h:
                  case p:
                    return u;
                  case a:
                    return u;
                  default:
                    return w;
                }
            }
          case r:
            return w;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.view_transition"), x = Symbol.for("react.client.reference");
    he.ContextConsumer = a, he.ContextProvider = s, he.Element = t, he.ForwardRef = l, he.Fragment = n, he.Lazy = h, he.Memo = p, he.Portal = r, he.Profiler = i, he.StrictMode = o, he.Suspense = d, he.SuspenseList = f, he.isContextConsumer = function(u) {
      return e(u) === a;
    }, he.isContextProvider = function(u) {
      return e(u) === s;
    }, he.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }, he.isForwardRef = function(u) {
      return e(u) === l;
    }, he.isFragment = function(u) {
      return e(u) === n;
    }, he.isLazy = function(u) {
      return e(u) === h;
    }, he.isMemo = function(u) {
      return e(u) === p;
    }, he.isPortal = function(u) {
      return e(u) === r;
    }, he.isProfiler = function(u) {
      return e(u) === i;
    }, he.isStrictMode = function(u) {
      return e(u) === o;
    }, he.isSuspense = function(u) {
      return e(u) === d;
    }, he.isSuspenseList = function(u) {
      return e(u) === f;
    }, he.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === n || u === i || u === o || u === d || u === f || typeof u == "object" && u !== null && (u.$$typeof === h || u.$$typeof === p || u.$$typeof === s || u.$$typeof === a || u.$$typeof === l || u.$$typeof === x || u.getModuleId !== void 0);
    }, he.typeOf = e;
  }()), he;
}
process.env.NODE_ENV === "production" ? ho.exports = vl() : ho.exports = Sl();
var es = ho.exports;
function vt(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ts(e) {
  if (/* @__PURE__ */ Z.isValidElement(e) || es.isValidElementType(e) || !vt(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = ts(e[r]);
  }), t;
}
function et(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return vt(e) && vt(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ Z.isValidElement(t[o]) || es.isValidElementType(t[o]) ? n[o] = t[o] : vt(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && vt(e[o]) ? n[o] = et(e[o], t[o], r) : r.clone ? n[o] = vt(t[o]) ? ts(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const Cl = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function rs(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = Cl(t), a = Object.keys(i);
  function s(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r})`;
  }
  function l(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - n / 100}${r})`;
  }
  function d(m, x) {
    const u = a.indexOf(x);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r}) and (max-width:${(u !== -1 && typeof t[a[u]] == "number" ? t[a[u]] : x) - n / 100}${r})`;
  }
  function f(m) {
    return a.indexOf(m) + 1 < a.length ? d(m, a[a.indexOf(m) + 1]) : s(m);
  }
  function p(m) {
    const x = a.indexOf(m);
    return x === 0 ? s(a[1]) : x === a.length - 1 ? l(a[x]) : d(m, a[a.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  const h = [];
  for (let m = 0; m < a.length; m += 1)
    h.push(s(a[m]));
  return {
    keys: a,
    values: i,
    up: s,
    down: l,
    between: d,
    only: f,
    not: p,
    unit: r,
    internal_mediaKeys: h,
    ...o
  };
}
const Mi = /min-width:\s*([0-9.]+)/;
function Di(e, t) {
  if (!e.containerQueries || !wl(t))
    return t;
  const r = [];
  for (const o in t)
    o.startsWith("@container") && r.push(o);
  r.sort((o, i) => {
    var a, s;
    return +(((a = o.match(Mi)) == null ? void 0 : a[1]) || 0) - +(((s = i.match(Mi)) == null ? void 0 : s[1]) || 0);
  });
  const n = t;
  for (let o = 0; o < r.length; o += 1) {
    const i = r[o], a = n[i];
    delete n[i], n[i] = a;
  }
  return n;
}
function wl(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function ns(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Tl(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw (
        /* minify-error */
        new Error(`MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.`)
      );
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function El(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...s) => t(e.breakpoints.up(...s), a), i.down = (...s) => t(e.breakpoints.down(...s), a), i.between = (...s) => t(e.breakpoints.between(...s), a), i.only = (...s) => t(e.breakpoints.only(...s), a), i.not = (...s) => {
      const l = t(e.breakpoints.not(...s), a);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const $l = {
  borderRadius: 4
}, It = process.env.NODE_ENV !== "production" ? Y.oneOfType([Y.number, Y.string, Y.object, Y.array]) : {};
function kl(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function Jt(e, t) {
  const r = Array.isArray(t), n = Array.isArray(e);
  return Rl(t) ? t : Pl(e) ? ir(t) : r && n ? Ol(e, t) : r !== n ? ir(t) : Ml(e, t);
}
function Il(e) {
  let t = 0;
  const r = e.length, n = new Array(r);
  for (t = 0; t < r; t += 1)
    n[t] = ir(e[t]);
  return n;
}
function Al(e) {
  const t = {};
  for (const r in e)
    t[r] = ir(e[r]);
  return t;
}
function Ol(e, t) {
  const r = e.length;
  for (let n = 0; n < t.length; n += 1)
    e[r + n] = ir(t[n]);
  return e;
}
function _l(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function Rl(e) {
  return typeof e != "object" || e === null;
}
function Pl(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function ir(e) {
  return _l(e) ? Array.isArray(e) ? Il(e) : Al(e) : e;
}
function Ml(e, t) {
  for (const r in t)
    r in e ? e[r] = Jt(e[r], t[r]) : e[r] = ir(t[r]);
  return e;
}
const Dl = {}, cn = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, qr = rs({
  values: cn
}), Nl = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : cn[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function sr(e, t, r) {
  const n = {};
  return ln(n, e.theme, t, (o, i, a) => {
    const s = r(i, a);
    o ? n[o] = s : Jt(n, s);
  });
}
function ln(e, t, r, n) {
  if (t ?? (t = Dl), Array.isArray(r)) {
    const o = t.breakpoints ?? qr;
    for (let i = 0; i < r.length; i += 1)
      Hn(e, o.up(o.keys[i]), r[i], void 0, n);
    return e;
  }
  if (typeof r == "object") {
    const o = t.breakpoints ?? qr, i = o.values ?? cn;
    for (const a in r)
      if (ns(o.keys, a)) {
        const s = Tl(t.containerQueries ? t : Nl, a);
        s && Hn(e, s, r[a], a, n);
      } else if (a in i) {
        const s = o.up(a);
        Hn(e, s, r[a], a, n);
      } else {
        const s = a;
        e[s] = r[s];
      }
    return e;
  }
  return n(void 0, r), e;
}
function Hn(e, t, r, n, o) {
  e[t] ?? (e[t] = {}), o(t, r, n);
}
function zl(e = qr) {
  const {
    internal_mediaKeys: t
  } = e, r = {};
  for (let n = 0; n < t.length; n += 1)
    r[t[n]] = {};
  return r;
}
function Ni(e, t) {
  const r = e.internal_mediaKeys;
  for (let n = 0; n < r.length; n += 1) {
    const o = r[n];
    kl(t[o]) && delete t[o];
  }
  return t;
}
function Fl(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let n = 0; n < e.keys.length; n += 1)
      if (e.keys[n] in t)
        return !0;
    const r = Object.keys(t);
    for (let n = 0; n < r.length; n += 1)
      if (ns(e.keys, r[n]))
        return !0;
  }
  return !1;
}
function Ll(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Nt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function os(e, t, r, n) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || r : typeof r == "string" ? o = dn(e, r, !0, n) || r : o = r, t && (o = t(o, r, e)), o;
}
function dn(e, t, r = !0, n = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && r) {
    const i = zi(e.vars, o, n);
    if (i != null)
      return i;
  }
  return zi(e, o, n);
}
function zi(e, t, r = void 0) {
  let n, o = e, i = 0;
  for (; i < t.length; ) {
    if (o == null)
      return o;
    n = o, o = o[t[i]], i += 1;
  }
  if (r && o === void 0) {
    const a = t[t.length - 1], s = `${r}${a === "default" ? "" : Ll(a)}`;
    return n == null ? void 0 : n[s];
  }
  return o;
}
function Pe(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], l = a.theme, d = dn(l, n) || {};
    return sr(a, s, (p) => {
      const h = os(d, o, p, t);
      return r === !1 ? h : {
        [r]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: It
  } : {}, i.filterProps = [t], i;
}
const Bl = {
  internal_cache: {}
}, Kr = {
  m: "margin",
  p: "padding"
}, Fi = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Li = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Sr = {};
for (const e in Kr)
  Sr[e] = [Kr[e]];
for (const e in Kr)
  for (const t in Fi) {
    const r = Kr[e], n = Fi[t], o = Array.isArray(n) ? n.map((i) => r + i) : [r + n];
    Sr[e + t] = o;
  }
for (const e in Li)
  Sr[e] = Sr[Li[e]];
const un = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), fn = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]), Wl = /* @__PURE__ */ new Set([...un, ...fn]);
function Ar(e, t, r, n) {
  const o = dn(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const s = o[a];
    return i >= 0 ? s : typeof s == "number" ? -s : typeof s == "string" && s.startsWith("var(") ? `calc(-1 * ${s})` : `-${s}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Lo(e) {
  return Ar(e, "spacing", 8, "spacing");
}
function Or(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const Bi = [""];
function is(e, t) {
  var i;
  const r = e.theme ?? Bl, n = ((i = r == null ? void 0 : r.internal_cache) == null ? void 0 : i.unarySpacing) ?? Lo(r), o = {};
  for (const a in e) {
    if (!t.has(a))
      continue;
    const s = Sr[a] ?? (Bi[0] = a, Bi), l = e[a];
    ln(o, e.theme, l, (d, f) => {
      const p = d ? o[d] : o;
      for (let h = 0; h < s.length; h += 1)
        p[s[h]] = Or(n, f);
    });
  }
  return o;
}
function Ie(e) {
  return is(e, un);
}
Ie.propTypes = process.env.NODE_ENV !== "production" ? Array.from(un).reduce((e, t) => (e[t] = It, e), {}) : {};
Ie.filterProps = un;
function Ae(e) {
  return is(e, fn);
}
Ae.propTypes = process.env.NODE_ENV !== "production" ? Array.from(fn).reduce((e, t) => (e[t] = It, e), {}) : {};
Ae.filterProps = fn;
process.env.NODE_ENV !== "production" && Array.from(Wl).reduce((e, t) => (e[t] = It, e), {});
function as(e = 8, t = Lo({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function pn(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => {
    const o = {};
    for (const i in n)
      t[i] && Jt(o, t[i](n));
    return o;
  };
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Je(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function rt(e, t) {
  return Pe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const jl = rt("border", Je), Vl = rt("borderTop", Je), Ul = rt("borderRight", Je), Hl = rt("borderBottom", Je), Gl = rt("borderLeft", Je), Yl = rt("borderColor"), ql = rt("borderTopColor"), Kl = rt("borderRightColor"), Xl = rt("borderBottomColor"), Ql = rt("borderLeftColor"), Jl = rt("outline", Je), Zl = rt("outlineColor"), mn = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ar(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Or(t, n)
    });
    return sr(e, e.borderRadius, r);
  }
  return null;
};
mn.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: It
} : {};
mn.filterProps = ["borderRadius"];
pn(jl, Vl, Ul, Hl, Gl, Yl, ql, Kl, Xl, Ql, mn, Jl, Zl);
const hn = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ar(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Or(t, n)
    });
    return sr(e, e.gap, r);
  }
  return null;
};
hn.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: It
} : {};
hn.filterProps = ["gap"];
const gn = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ar(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Or(t, n)
    });
    return sr(e, e.columnGap, r);
  }
  return null;
};
gn.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: It
} : {};
gn.filterProps = ["columnGap"];
const yn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ar(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Or(t, n)
    });
    return sr(e, e.rowGap, r);
  }
  return null;
};
yn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: It
} : {};
yn.filterProps = ["rowGap"];
const ed = Pe({
  prop: "gridColumn"
}), td = Pe({
  prop: "gridRow"
}), rd = Pe({
  prop: "gridAutoFlow"
}), nd = Pe({
  prop: "gridAutoColumns"
}), od = Pe({
  prop: "gridAutoRows"
}), id = Pe({
  prop: "gridTemplateColumns"
}), ad = Pe({
  prop: "gridTemplateRows"
}), sd = Pe({
  prop: "gridTemplateAreas"
}), cd = Pe({
  prop: "gridArea"
});
pn(hn, gn, yn, ed, td, rd, nd, od, id, ad, sd, cd);
function Zt(e, t) {
  return t === "grey" ? t : e;
}
const ld = Pe({
  prop: "color",
  themeKey: "palette",
  transform: Zt
}), dd = Pe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Zt
}), ud = Pe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Zt
});
pn(ld, dd, ud);
function Ge(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const fd = Pe({
  prop: "width",
  transform: Ge
}), Bo = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, s, l;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || cn[r];
      return n ? ((l = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Ge(r)
      };
    };
    return sr(e, e.maxWidth, t);
  }
  return null;
};
Bo.filterProps = ["maxWidth"];
const pd = Pe({
  prop: "minWidth",
  transform: Ge
}), md = Pe({
  prop: "height",
  transform: Ge
}), hd = Pe({
  prop: "maxHeight",
  transform: Ge
}), gd = Pe({
  prop: "minHeight",
  transform: Ge
});
Pe({
  prop: "size",
  cssProperty: "width",
  transform: Ge
});
Pe({
  prop: "size",
  cssProperty: "height",
  transform: Ge
});
const yd = Pe({
  prop: "boxSizing"
});
pn(fd, Bo, pd, md, hd, gd, yd);
const bn = {
  // borders
  border: {
    themeKey: "borders",
    transform: Je
  },
  borderTop: {
    themeKey: "borders",
    transform: Je
  },
  borderRight: {
    themeKey: "borders",
    transform: Je
  },
  borderBottom: {
    themeKey: "borders",
    transform: Je
  },
  borderLeft: {
    themeKey: "borders",
    transform: Je
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Je
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: mn
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Zt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Zt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Zt
  },
  // spacing
  p: {
    style: Ae
  },
  pt: {
    style: Ae
  },
  pr: {
    style: Ae
  },
  pb: {
    style: Ae
  },
  pl: {
    style: Ae
  },
  px: {
    style: Ae
  },
  py: {
    style: Ae
  },
  padding: {
    style: Ae
  },
  paddingTop: {
    style: Ae
  },
  paddingRight: {
    style: Ae
  },
  paddingBottom: {
    style: Ae
  },
  paddingLeft: {
    style: Ae
  },
  paddingX: {
    style: Ae
  },
  paddingY: {
    style: Ae
  },
  paddingInline: {
    style: Ae
  },
  paddingInlineStart: {
    style: Ae
  },
  paddingInlineEnd: {
    style: Ae
  },
  paddingBlock: {
    style: Ae
  },
  paddingBlockStart: {
    style: Ae
  },
  paddingBlockEnd: {
    style: Ae
  },
  m: {
    style: Ie
  },
  mt: {
    style: Ie
  },
  mr: {
    style: Ie
  },
  mb: {
    style: Ie
  },
  ml: {
    style: Ie
  },
  mx: {
    style: Ie
  },
  my: {
    style: Ie
  },
  margin: {
    style: Ie
  },
  marginTop: {
    style: Ie
  },
  marginRight: {
    style: Ie
  },
  marginBottom: {
    style: Ie
  },
  marginLeft: {
    style: Ie
  },
  marginX: {
    style: Ie
  },
  marginY: {
    style: Ie
  },
  marginInline: {
    style: Ie
  },
  marginInlineStart: {
    style: Ie
  },
  marginInlineEnd: {
    style: Ie
  },
  marginBlock: {
    style: Ie
  },
  marginBlockStart: {
    style: Ie
  },
  marginBlockEnd: {
    style: Ie
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: hn
  },
  rowGap: {
    style: yn
  },
  columnGap: {
    style: gn
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Ge
  },
  maxWidth: {
    style: Bo
  },
  minWidth: {
    transform: Ge
  },
  height: {
    transform: Ge
  },
  maxHeight: {
    transform: Ge
  },
  minHeight: {
    transform: Ge
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, bd = {};
function xd() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: r,
      theme: n = bd,
      nested: o
    } = t, i = n.unstable_sxConfig ?? bn, a = {
      sx: null,
      theme: n,
      nested: !0
    };
    function s(l) {
      let d = l;
      if (typeof l == "function")
        d = l(n);
      else if (typeof l != "object")
        return l;
      if (!d)
        return null;
      const f = n.breakpoints ?? qr, p = zl(f);
      for (const h in d) {
        const m = vd(d[h], n);
        if (m != null) {
          if (typeof m != "object") {
            Wi(p, h, m, n, i);
            continue;
          }
          if (i[h]) {
            Wi(p, h, m, n, i);
            continue;
          }
          Fl(f, m) ? ln(p, t.theme, m, (x, u) => {
            p[x][h] = u;
          }) : (a.sx = m, p[h] = e(a));
        }
      }
      return !o && n.modularCssLayers ? {
        "@layer sx": Di(n, Ni(f, p))
      } : Di(n, Ni(f, p));
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return e.filterProps = ["sx"], e;
}
const xn = xd();
function Wi(e, t, r, n, o) {
  const i = o[t];
  if (!i) {
    e[t] = r;
    return;
  }
  if (r == null)
    return;
  const {
    themeKey: a
  } = i;
  if (a === "typography" && r === "inherit") {
    e[t] = r;
    return;
  }
  const {
    style: s
  } = i;
  if (s) {
    Jt(e, s({
      [t]: r,
      theme: n
    }));
    return;
  }
  const {
    cssProperty: l = t,
    transform: d
  } = i, f = dn(n, a);
  ln(e, n, r, (p, h) => {
    const m = os(f, d, h, t);
    l === !1 ? Jt(p ? e[p] : e, m) : p ? e[p][l] = m : e[l] = m;
  });
}
function vd(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Sd(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function ss(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, s = rs(r), l = as(o);
  let d = et({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: l,
    shape: {
      ...$l,
      ...i
    }
  }, a);
  return d = El(d), d.applyStyles = Sd, d = t.reduce((f, p) => et(f, p), d), d.unstable_sxConfig = {
    ...bn,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, d.unstable_sx = function(p) {
    return xn({
      sx: p,
      theme: this
    });
  }, d.internal_cache = {}, d;
}
function Cd(e) {
  return Object.keys(e).length === 0;
}
function Wo(e = null) {
  const t = Z.useContext(qa);
  return !t || Cd(t) ? e : t;
}
const wd = ss();
function cs(e = wd) {
  return Wo(e);
}
function Gn(e) {
  const t = xl(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function jo({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = cs(r), o = t && n[t] || n;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((a) => Gn(typeof a == "function" ? a(o) : a)) : i = Gn(i)), /* @__PURE__ */ c(Fo, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (jo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: Y.object,
  /**
   * @ignore
   */
  styles: Y.oneOfType([Y.array, Y.func, Y.number, Y.object, Y.string, Y.bool]),
  /**
   * @ignore
   */
  themeId: Y.string
});
const ji = (e) => e, Td = () => {
  let e = ji;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = ji;
    }
  };
}, Ed = Td();
function ls(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = ls(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function $d() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = ls(e)) && (n && (n += " "), n += t);
  return n;
}
const kd = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Id(e, t, r = "Mui") {
  const n = kd[t];
  return n ? `${r}-${n}` : `${Ed.generate(e)}-${t}`;
}
function go(e, t, r = !1) {
  const n = {
    ...t
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const i = o;
      if (i === "components" || i === "slots")
        n[i] = {
          ...e[i],
          ...n[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const a = e[i], s = t[i];
        if (!s)
          n[i] = a || {};
        else if (!a)
          n[i] = s;
        else {
          n[i] = {
            ...s
          };
          for (const l in a)
            if (Object.prototype.hasOwnProperty.call(a, l)) {
              const d = l;
              n[i][d] = go(a[d], s[d], r);
            }
        }
      } else i === "className" && r && t.className !== void 0 ? n.className = $d(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && r && t.style ? n.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
const ds = typeof window < "u" ? Z.useLayoutEffect : Z.useEffect;
function Ad(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Vo(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Ad(e, t, r);
}
function Od(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Et(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Et(Od(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Nt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Nt(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const _d = (e) => {
  const t = Et(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, pr = (e, t) => {
  try {
    return _d(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function vn(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function us(e) {
  e = Et(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (d, f = (d + r / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let s = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", l.push(t[3])), vn({
    type: s,
    values: l
  });
}
function yo(e) {
  e = Et(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Et(us(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Vi(e, t) {
  const r = yo(e), n = yo(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function fs(e, t) {
  return e = Et(e), t = Vo(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, vn(e);
}
function _t(e, t, r) {
  try {
    return fs(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Sn(e, t) {
  if (e = Et(e), t = Vo(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return vn(e);
}
function fe(e, t, r) {
  try {
    return Sn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Cn(e, t) {
  if (e = Et(e), t = Vo(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return vn(e);
}
function pe(e, t, r) {
  try {
    return Cn(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Rd(e, t = 0.15) {
  return yo(e) > 0.5 ? Sn(e, t) : Cn(e, t);
}
function Dr(e, t, r) {
  try {
    return Rd(e, t);
  } catch {
    return e;
  }
}
const Pd = "exact-prop: ​";
function ps(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Pd]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const Uo = /* @__PURE__ */ Z.createContext(null);
process.env.NODE_ENV !== "production" && (Uo.displayName = "ThemeContext");
function Ho() {
  const e = Z.useContext(Uo);
  return process.env.NODE_ENV !== "production" && Z.useDebugValue(e), e;
}
const Md = typeof Symbol == "function" && Symbol.for, Dd = Md ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Nd(e, t) {
  if (typeof t == "function") {
    const r = t(e);
    return process.env.NODE_ENV !== "production" && (r || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), r;
  }
  return {
    ...e,
    ...t
  };
}
function Xr(e) {
  const {
    children: t,
    theme: r
  } = e, n = Ho();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = Z.useMemo(() => {
    const i = n === null ? {
      ...r
    } : Nd(n, r);
    return i != null && (i[Dd] = n !== null), i;
  }, [r, n]);
  return /* @__PURE__ */ c(Uo.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Xr.propTypes = {
  /**
   * Your component tree.
   */
  children: Y.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: Y.oneOfType([Y.object, Y.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Xr.propTypes = ps(Xr.propTypes));
const zd = /* @__PURE__ */ Z.createContext();
function ms({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ c(zd.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (ms.propTypes = {
  children: Y.node,
  value: Y.bool
});
const hs = /* @__PURE__ */ Z.createContext(void 0);
function gs({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ c(hs.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (gs.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: Y.node,
  /**
   * @ignore
   */
  value: Y.object
});
function Fd(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? go(o.defaultProps, n, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? go(o, n, t.components.mergeClassNameAndStyle) : n;
}
function Ld({
  props: e,
  name: t
}) {
  const r = Z.useContext(hs);
  return Fd({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
let Ui = 0;
function Bd(e) {
  const [t, r] = Z.useState(e), n = e || t;
  return Z.useEffect(() => {
    t == null && (Ui += 1, r(`mui-${Ui}`));
  }, [t]), n;
}
const Wd = {
  ...Z
}, Hi = Wd.useId;
function jd(e) {
  return Hi !== void 0 ? Hi() : Bd(e);
}
function Vd(e) {
  const t = Wo(), r = jd() || "", {
    modularCssLayers: n
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !n || t !== null ? o = "" : typeof n == "string" ? o = n.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, ds(() => {
    var s, l;
    const i = document.querySelector("head");
    if (!i)
      return;
    const a = i.firstChild;
    if (o) {
      if (a && ((s = a.hasAttribute) != null && s.call(a, "data-mui-layer-order")) && a.getAttribute("data-mui-layer-order") === r)
        return;
      const d = document.createElement("style");
      d.setAttribute("data-mui-layer-order", r), d.textContent = o, i.prepend(d);
    } else
      (l = i.querySelector(`style[data-mui-layer-order="${r}"]`)) == null || l.remove();
  }, [o, r]), o ? /* @__PURE__ */ c(jo, {
    styles: o
  }) : null;
}
const Gi = {};
function Yi(e, t, r, n = !1) {
  return Z.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof r == "function") {
      const i = r(o), a = e ? {
        ...t,
        [e]: i
      } : i;
      return n ? () => a : a;
    }
    return e ? {
      ...t,
      [e]: r
    } : {
      ...t,
      ...r
    };
  }, [e, t, r, n]);
}
function Cr(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = Wo(Gi), i = Ho() || Gi;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const a = Yi(n, o, r), s = Yi(n, i, r, !0), l = (n ? a[n] : a).direction === "rtl", d = Vd(a);
  return /* @__PURE__ */ c(Xr, {
    theme: s,
    children: /* @__PURE__ */ c(qa.Provider, {
      value: a,
      children: /* @__PURE__ */ c(ms, {
        value: l,
        children: /* @__PURE__ */ v(gs, {
          value: n ? a[n].components : a.components,
          children: [d, t]
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Cr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: Y.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: Y.oneOfType([Y.func, Y.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: Y.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Cr.propTypes = ps(Cr.propTypes));
const Go = "mode", Yo = "color-scheme", Ud = "data-color-scheme";
function Hd(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: o = Go,
    colorSchemeStorageKey: i = Yo,
    attribute: a = Ud,
    colorSchemeNode: s = "document.documentElement",
    nonce: l
  } = e || {};
  let d = "", f = a;
  if (a === "class" && (f = ".%s"), a === "data" && (f = "[data-%s]"), f.startsWith(".")) {
    const h = f.substring(1);
    d += `${s}.classList.remove('${h}'.replace('%s', light), '${h}'.replace('%s', dark));
      ${s}.classList.add('${h}'.replace('%s', colorScheme));`;
  }
  const p = f.match(/\[([^[\]]+)\]/);
  if (p) {
    const [h, m] = p[1].split("=");
    m || (d += `${s}.removeAttribute('${h}'.replace('%s', light));
      ${s}.removeAttribute('${h}'.replace('%s', dark));`), d += `
      ${s}.setAttribute('${h}'.replace('%s', colorScheme), ${m ? `${m}.replace('%s', colorScheme)` : '""'});`;
  } else f !== ".%s" && (d += `${s}.setAttribute('${f}', colorScheme);`);
  return /* @__PURE__ */ c("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? l : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${i}-dark') || '${n}';
  const light = localStorage.getItem('${i}-light') || '${r}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${d}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function Gd() {
}
const Yd = ({
  key: e,
  storageWindow: t
}) => (!t && typeof window < "u" && (t = window), {
  get(r) {
    if (typeof window > "u")
      return;
    if (!t)
      return r;
    let n;
    try {
      n = t.localStorage.getItem(e);
    } catch {
    }
    return n || r;
  },
  set: (r) => {
    if (t)
      try {
        t.localStorage.setItem(e, r);
      } catch {
      }
  },
  subscribe: (r) => {
    if (!t)
      return Gd;
    const n = (o) => {
      const i = o.newValue;
      o.key === e && r(i);
    };
    return t.addEventListener("storage", n), () => {
      t.removeEventListener("storage", n);
    };
  }
});
function Yn() {
}
function qi(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ys(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function qd(e) {
  return ys(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function Kd(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: n,
    supportedColorSchemes: o = [],
    modeStorageKey: i = Go,
    colorSchemeStorageKey: a = Yo,
    storageWindow: s = typeof window > "u" ? void 0 : window,
    storageManager: l = Yd,
    noSsr: d = !1
  } = e, f = o.join(","), p = o.length > 1, h = Z.useMemo(() => l == null ? void 0 : l({
    key: i,
    storageWindow: s
  }), [l, i, s]), m = Z.useMemo(() => l == null ? void 0 : l({
    key: `${a}-light`,
    storageWindow: s
  }), [l, a, s]), x = Z.useMemo(() => l == null ? void 0 : l({
    key: `${a}-dark`,
    storageWindow: s
  }), [l, a, s]), [u, w] = Z.useState(() => {
    const G = (h == null ? void 0 : h.get(t)) || t, j = (m == null ? void 0 : m.get(r)) || r, y = (x == null ? void 0 : x.get(n)) || n;
    return {
      mode: G,
      systemMode: qi(G),
      lightColorScheme: j,
      darkColorScheme: y
    };
  }), [E, D] = Z.useState(d || !p);
  Z.useEffect(() => {
    D(!0);
  }, []);
  const _ = qd(u), O = Z.useCallback((G) => {
    w((j) => {
      if (G === j.mode)
        return j;
      const y = G ?? t;
      return h == null || h.set(y), {
        ...j,
        mode: y,
        systemMode: qi(y)
      };
    });
  }, [h, t]), S = Z.useCallback((G) => {
    G ? typeof G == "string" ? G && !f.includes(G) ? console.error(`\`${G}\` does not exist in \`theme.colorSchemes\`.`) : w((j) => {
      const y = {
        ...j
      };
      return ys(j, (R) => {
        R === "light" && (m == null || m.set(G), y.lightColorScheme = G), R === "dark" && (x == null || x.set(G), y.darkColorScheme = G);
      }), y;
    }) : w((j) => {
      const y = {
        ...j
      }, R = G.light === null ? r : G.light, g = G.dark === null ? n : G.dark;
      return R && (f.includes(R) ? (y.lightColorScheme = R, m == null || m.set(R)) : console.error(`\`${R}\` does not exist in \`theme.colorSchemes\`.`)), g && (f.includes(g) ? (y.darkColorScheme = g, x == null || x.set(g)) : console.error(`\`${g}\` does not exist in \`theme.colorSchemes\`.`)), y;
    }) : w((j) => (m == null || m.set(r), x == null || x.set(n), {
      ...j,
      lightColorScheme: r,
      darkColorScheme: n
    }));
  }, [f, m, x, r, n]), P = Z.useCallback((G) => {
    u.mode === "system" && w((j) => {
      const y = G != null && G.matches ? "dark" : "light";
      return j.systemMode === y ? j : {
        ...j,
        systemMode: y
      };
    });
  }, [u.mode]), Q = Z.useRef(P);
  return Q.current = P, Z.useEffect(() => {
    if (typeof window.matchMedia != "function" || !p)
      return;
    const G = (...y) => Q.current(...y), j = window.matchMedia("(prefers-color-scheme: dark)");
    return j.addListener(G), G(j), () => {
      j.removeListener(G);
    };
  }, [p]), Z.useEffect(() => {
    if (p) {
      const G = (h == null ? void 0 : h.subscribe((R) => {
        (!R || ["light", "dark", "system"].includes(R)) && O(R || t);
      })) || Yn, j = (m == null ? void 0 : m.subscribe((R) => {
        (!R || f.match(R)) && S({
          light: R
        });
      })) || Yn, y = (x == null ? void 0 : x.subscribe((R) => {
        (!R || f.match(R)) && S({
          dark: R
        });
      })) || Yn;
      return () => {
        G(), j(), y();
      };
    }
  }, [S, O, f, t, s, p, h, m, x]), {
    ...u,
    mode: E ? u.mode : void 0,
    systemMode: E ? u.systemMode : void 0,
    colorScheme: E ? _ : void 0,
    setMode: O,
    setColorScheme: S
  };
}
const Xd = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Qd(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: n = Go,
    colorSchemeStorageKey: o = Yo,
    disableTransitionOnChange: i = !1,
    defaultColorScheme: a,
    resolveTheme: s
  } = e, l = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, d = /* @__PURE__ */ Z.createContext(void 0);
  process.env.NODE_ENV !== "production" && (d.displayName = "ColorSchemeContext");
  const f = () => Z.useContext(d) || l, p = {}, h = {};
  function m(E) {
    var ui, fi, pi, mi;
    const {
      children: D,
      theme: _,
      modeStorageKey: O = n,
      colorSchemeStorageKey: S = o,
      disableTransitionOnChange: P = i,
      storageManager: Q,
      storageWindow: G = typeof window > "u" ? void 0 : window,
      documentNode: j = typeof document > "u" ? void 0 : document,
      colorSchemeNode: y = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: R = !1,
      disableStyleSheetGeneration: g = !1,
      defaultMode: N = "system",
      forceThemeRerender: M = !1,
      noSsr: X
    } = E, J = Z.useRef(!1), re = Ho(), ke = Z.useContext(d), We = !!ke && !R, C = Z.useMemo(() => _ || (typeof r == "function" ? r() : r), [_]), k = C[t], z = k || C, {
      colorSchemes: L = p,
      components: F = h,
      cssVarPrefix: V
    } = z, W = Object.keys(L).filter((Fe) => !!L[Fe]).join(","), B = Z.useMemo(() => W.split(","), [W]), U = typeof a == "string" ? a : a.light, q = typeof a == "string" ? a : a.dark, H = L[U] && L[q] ? N : ((fi = (ui = L[z.defaultColorScheme]) == null ? void 0 : ui.palette) == null ? void 0 : fi.mode) || ((pi = z.palette) == null ? void 0 : pi.mode), {
      mode: ie,
      setMode: $,
      systemMode: Ce,
      lightColorScheme: Ke,
      darkColorScheme: xt,
      colorScheme: ic,
      setColorScheme: ci
    } = Kd({
      supportedColorSchemes: B,
      defaultLightColorScheme: U,
      defaultDarkColorScheme: q,
      modeStorageKey: O,
      colorSchemeStorageKey: S,
      defaultMode: H,
      storageManager: Q,
      storageWindow: G,
      noSsr: X
    });
    let Nn = ie, ot = ic;
    We && (Nn = ke.mode, ot = ke.colorScheme), process.env.NODE_ENV !== "production" && M && !z.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let Pr = ot || z.defaultColorScheme;
    z.vars && !M && (Pr = z.defaultColorScheme);
    const Ft = Z.useMemo(() => {
      var Ot;
      const Fe = ((Ot = z.generateThemeVars) == null ? void 0 : Ot.call(z)) || z.vars, Re = {
        ...z,
        components: F,
        colorSchemes: L,
        cssVarPrefix: V,
        vars: Fe
      };
      if (typeof Re.generateSpacing == "function" && (Re.spacing = Re.generateSpacing()), Pr) {
        const st = L[Pr];
        st && typeof st == "object" && Object.keys(st).forEach((it) => {
          st[it] && typeof st[it] == "object" ? Re[it] = {
            ...Re[it],
            ...st[it]
          } : Re[it] = st[it];
        });
      }
      return s ? s(Re) : Re;
    }, [z, Pr, F, L, V]), cr = z.colorSchemeSelector;
    ds(() => {
      if (ot && y && cr && cr !== "media") {
        const Fe = cr;
        let Re = cr;
        if (Fe === "class" && (Re = ".%s"), Fe === "data" && (Re = "[data-%s]"), Fe != null && Fe.startsWith("data-") && !Fe.includes("%s") && (Re = `[${Fe}="%s"]`), Re.startsWith("."))
          y.classList.remove(...B.map((Ot) => Re.substring(1).replace("%s", Ot))), y.classList.add(Re.substring(1).replace("%s", ot));
        else {
          const Ot = Re.replace("%s", ot).match(/\[([^\]]+)\]/);
          if (Ot) {
            const [st, it] = Ot[1].split("=");
            it || B.forEach((sc) => {
              y.removeAttribute(st.replace(ot, sc));
            }), y.setAttribute(st, it ? it.replace(/"|'/g, "") : "");
          } else
            y.setAttribute(Re, ot);
        }
      }
    }, [ot, cr, y, B]), Z.useEffect(() => {
      let Fe;
      if (P && J.current && j) {
        const Re = j.createElement("style");
        Re.appendChild(j.createTextNode(Xd)), j.head.appendChild(Re), window.getComputedStyle(j.body), Fe = setTimeout(() => {
          j.head.removeChild(Re);
        }, 1);
      }
      return () => {
        clearTimeout(Fe);
      };
    }, [ot, P, j]), Z.useEffect(() => (J.current = !0, () => {
      J.current = !1;
    }), []);
    const ac = Z.useMemo(() => ({
      allColorSchemes: B,
      colorScheme: ot,
      darkColorScheme: xt,
      lightColorScheme: Ke,
      mode: Nn,
      setColorScheme: ci,
      setMode: process.env.NODE_ENV === "production" ? $ : (Fe) => {
        Ft.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), $(Fe);
      },
      systemMode: Ce
    }), [B, ot, xt, Ke, Nn, ci, $, Ce, Ft.colorSchemeSelector]);
    let li = !0;
    (g || z.cssVariables === !1 || We && (re == null ? void 0 : re.cssVarPrefix) === V) && (li = !1);
    const di = /* @__PURE__ */ v(Z.Fragment, {
      children: [/* @__PURE__ */ c(Cr, {
        themeId: k ? t : void 0,
        theme: Ft,
        children: D
      }), li && /* @__PURE__ */ c(Fo, {
        styles: ((mi = Ft.generateStyleSheets) == null ? void 0 : mi.call(Ft)) || []
      })]
    });
    return We ? di : /* @__PURE__ */ c(d.Provider, {
      value: ac,
      children: di
    });
  }
  process.env.NODE_ENV !== "production" && (m.propTypes = {
    /**
     * The component tree.
     */
    children: Y.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: Y.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: Y.string,
    /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */
    defaultMode: Y.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: Y.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: Y.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: Y.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: Y.any,
    /**
     * If `true`, theme values are recalculated when the mode changes.
     */
    forceThemeRerender: Y.bool,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: Y.string,
    /**
     * If `true`, the mode will be the same value as the storage without an extra rerendering after the hydration.
     * You should use this option in conjunction with `InitColorSchemeScript` component.
     */
    noSsr: Y.bool,
    /**
     * The storage manager to be used for storing the mode and color scheme
     * @default using `window.localStorage`
     */
    storageManager: Y.func,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: Y.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: Y.object
  });
  const x = typeof a == "string" ? a : a.light, u = typeof a == "string" ? a : a.dark;
  return {
    CssVarsProvider: m,
    useColorScheme: f,
    getInitColorSchemeScript: (E) => Hd({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: x,
      defaultDarkColorScheme: u,
      modeStorageKey: n,
      ...E
    })
  };
}
function Jd(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Ki = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Zd = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([s, l]) => {
      (!r || r && !r([...i, s])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...i, s], Array.isArray(l) ? [...a, s] : a) : t([...i, s], l, a));
    });
  }
  n(e);
}, eu = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function qn(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return Zd(
    e,
    (s, l, d) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(s, l))) {
        const f = `--${r ? `${r}-` : ""}${s.join("-")}`, p = eu(s, l);
        Object.assign(o, {
          [f]: p
        }), Ki(i, s, `var(${f})`, d), Ki(a, s, `var(${f}, ${p})`, d);
      }
    },
    (s) => s[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function tu(e, t = {}) {
  const {
    getSelector: r = E,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: i
  } = t, {
    colorSchemes: a = {},
    components: s,
    defaultColorScheme: l = "light",
    ...d
  } = e, {
    vars: f,
    css: p,
    varsWithDefaults: h
  } = qn(d, t);
  let m = h;
  const x = {}, {
    [l]: u,
    ...w
  } = a;
  if (Object.entries(w || {}).forEach(([O, S]) => {
    const {
      vars: P,
      css: Q,
      varsWithDefaults: G
    } = qn(S, t);
    m = et(m, G), x[O] = {
      css: Q,
      vars: P
    };
  }), u) {
    const {
      css: O,
      vars: S,
      varsWithDefaults: P
    } = qn(u, t);
    m = et(m, P), x[l] = {
      css: O,
      vars: S
    };
  }
  function E(O, S) {
    var Q, G;
    let P = o;
    if (o === "class" && (P = ".%s"), o === "data" && (P = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (P = `[${o}="%s"]`), O) {
      if (P === "media")
        return e.defaultColorScheme === O ? ":root" : {
          [`@media (prefers-color-scheme: ${((G = (Q = a[O]) == null ? void 0 : Q.palette) == null ? void 0 : G.mode) || O})`]: {
            ":root": S
          }
        };
      if (P)
        return e.defaultColorScheme === O ? `:root, ${P.replace("%s", String(O))}` : P.replace("%s", String(O));
    }
    return ":root";
  }
  return {
    vars: m,
    generateThemeVars: () => {
      let O = {
        ...f
      };
      return Object.entries(x).forEach(([, {
        vars: S
      }]) => {
        O = et(O, S);
      }), O;
    },
    generateStyleSheets: () => {
      var j, y;
      const O = [], S = e.defaultColorScheme || "light";
      function P(R, g) {
        Object.keys(g).length && O.push(typeof R == "string" ? {
          [R]: {
            ...g
          }
        } : R);
      }
      P(r(void 0, {
        ...p
      }), p);
      const {
        [S]: Q,
        ...G
      } = x;
      if (Q) {
        const {
          css: R
        } = Q, g = (y = (j = a[S]) == null ? void 0 : j.palette) == null ? void 0 : y.mode, N = !n && g ? {
          colorScheme: g,
          ...R
        } : {
          ...R
        };
        P(r(S, {
          ...N
        }), N);
      }
      return Object.entries(G).forEach(([R, {
        css: g
      }]) => {
        var X, J;
        const N = (J = (X = a[R]) == null ? void 0 : X.palette) == null ? void 0 : J.mode, M = !n && N ? {
          colorScheme: N,
          ...g
        } : {
          ...g
        };
        P(r(R, {
          ...M
        }), M);
      }), i && O.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), O;
    }
  };
}
function ru(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const wr = {
  black: "#000",
  white: "#fff"
}, nu = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Lt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Bt = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, lr = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Wt = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, jt = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Vt = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function bs() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: wr.white,
      default: wr.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const xs = bs();
function vs() {
  return {
    text: {
      primary: wr.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: wr.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const bo = vs();
function Xi(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Cn(e.main, o) : t === "dark" && (e.dark = Sn(e.main, i)));
}
function Qi(e, t, r, n, o) {
  const i = o.light || o, a = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(a * 100).toFixed(0)}%)`));
}
function ou(e = "light") {
  return e === "dark" ? {
    main: Wt[200],
    light: Wt[50],
    dark: Wt[400]
  } : {
    main: Wt[700],
    light: Wt[400],
    dark: Wt[800]
  };
}
function iu(e = "light") {
  return e === "dark" ? {
    main: Lt[200],
    light: Lt[50],
    dark: Lt[400]
  } : {
    main: Lt[500],
    light: Lt[300],
    dark: Lt[700]
  };
}
function au(e = "light") {
  return e === "dark" ? {
    main: Bt[500],
    light: Bt[300],
    dark: Bt[700]
  } : {
    main: Bt[700],
    light: Bt[400],
    dark: Bt[800]
  };
}
function su(e = "light") {
  return e === "dark" ? {
    main: jt[400],
    light: jt[300],
    dark: jt[700]
  } : {
    main: jt[700],
    light: jt[500],
    dark: jt[900]
  };
}
function cu(e = "light") {
  return e === "dark" ? {
    main: Vt[400],
    light: Vt[300],
    dark: Vt[700]
  } : {
    main: Vt[800],
    light: Vt[500],
    dark: Vt[900]
  };
}
function lu(e = "light") {
  return e === "dark" ? {
    main: lr[400],
    light: lr[300],
    dark: lr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: lr[500],
    dark: lr[900]
  };
}
function du(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function qo(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...i
  } = e, a = e.primary || ou(t), s = e.secondary || iu(t), l = e.error || au(t), d = e.info || su(t), f = e.success || cu(t), p = e.warning || lu(t);
  function h(w) {
    if (o)
      return du(w);
    const E = Vi(w, bo.text.primary) >= r ? bo.text.primary : xs.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const D = Vi(w, E);
      D < 3 && console.error([`MUI: The contrast ratio of ${D}:1 for ${E} on ${w}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return E;
  }
  const m = ({
    color: w,
    name: E,
    mainShade: D = 500,
    lightShade: _ = 300,
    darkShade: O = 700
  }) => {
    if (w = {
      ...w
    }, !w.main && w[D] && (w.main = w[D]), !w.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${D}\` property.` : Nt(11, E ? ` (${E})` : "", D));
    if (typeof w.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(w.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Nt(12, E ? ` (${E})` : "", JSON.stringify(w.main)));
    return o ? (Qi(o, w, "light", _, n), Qi(o, w, "dark", O, n)) : (Xi(w, "light", _, n), Xi(w, "dark", O, n)), w.contrastText || (w.contrastText = h(w.main)), w;
  };
  let x;
  return t === "light" ? x = bs() : t === "dark" && (x = vs()), process.env.NODE_ENV !== "production" && (x || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), et({
    // A collection of common colors.
    common: {
      ...wr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: a,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: p,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: d,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: nu,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...x
  }, i);
}
function uu(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function fu(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function pu(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ji = {
  textTransform: "uppercase"
}, Zi = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ss(e, t) {
  const {
    fontFamily: r = Zi,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: s = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: f,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = n / 14, m = f || ((w) => `${w / l * h}rem`), x = (w, E, D, _, O) => ({
    fontFamily: r,
    fontWeight: w,
    fontSize: m(E),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: D,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Zi ? {
      letterSpacing: `${pu(_ / E)}em`
    } : {},
    ...O,
    ...d
  }), u = {
    h1: x(o, 96, 1.167, -1.5),
    h2: x(o, 60, 1.2, -0.5),
    h3: x(i, 48, 1.167, 0),
    h4: x(i, 34, 1.235, 0.25),
    h5: x(i, 24, 1.334, 0),
    h6: x(a, 20, 1.6, 0.15),
    subtitle1: x(i, 16, 1.75, 0.15),
    subtitle2: x(a, 14, 1.57, 0.1),
    body1: x(i, 16, 1.5, 0.15),
    body2: x(i, 14, 1.43, 0.15),
    button: x(a, 14, 1.75, 0.4, Ji),
    caption: x(i, 12, 1.66, 0.4),
    overline: x(i, 12, 2.66, 1, Ji),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return et({
    htmlFontSize: l,
    pxToRem: m,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: s,
    ...u
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const mu = 0.2, hu = 0.14, gu = 0.12;
function we(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${mu})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${hu})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${gu})`].join(",");
}
const yu = ["none", we(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), we(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), we(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), we(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), we(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), we(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), we(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), we(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), we(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), we(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), we(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), we(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), we(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), we(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), we(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), we(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), we(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), we(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), we(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), we(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), we(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), we(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), we(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), we(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], bu = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, xu = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function ea(e) {
  return `${Math.round(e)}ms`;
}
function vu(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Su(e) {
  const t = {
    ...bu,
    ...e.easing
  }, r = {
    ...xu,
    ...e.duration
  };
  return {
    getAutoHeightDuration: vu,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: s = t.easeInOut,
        delay: l = 0,
        ...d
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const f = (h) => typeof h == "string", p = (h) => !Number.isNaN(parseFloat(h));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !f(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), f(s) || console.error('MUI: Argument "easing" must be a string.'), !p(l) && !f(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof a == "string" ? a : ea(a)} ${s} ${typeof l == "string" ? l : ea(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Cu = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function wu(e) {
  return vt(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Cs(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, s] = o[i];
      !wu(s) || a.startsWith("unstable_") || a.startsWith("internal_") ? delete n[a] : vt(s) && (n[a] = {
        ...s
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function ta(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Tu = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let r = 0;
  for (let n = 0; n < t.length; n += 1)
    r += +t[n];
  return r;
};
function Eu(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : fs(t, Tu(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${ta(r)})` : Cn(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${ta(r)})` : Sn(t, r);
    }
  });
}
function xo(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: s = {},
    shape: l,
    colorSpace: d,
    ...f
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : Nt(22));
  const p = qo({
    ...i,
    colorSpace: d
  }), h = ss(e);
  let m = et(h, {
    mixins: fu(h.breakpoints, n),
    palette: p,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: yu.slice(),
    typography: Ss(p, s),
    transitions: Su(a),
    zIndex: {
      ...Cu
    }
  });
  if (m = et(m, f), m = t.reduce((x, u) => et(x, u), m), process.env.NODE_ENV !== "production") {
    const x = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], u = (w, E) => {
      let D;
      for (D in w) {
        const _ = w[D];
        if (x.includes(D) && Object.keys(_).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const O = Id("", D);
            console.error([`MUI: The \`${E}\` component increases the CSS specificity of the \`${D}\` internal state.`, "You can not override it like this: ", JSON.stringify(w, null, 2), "", `Instead, you need to use the '&.${O}' syntax:`, JSON.stringify({
              root: {
                [`&.${O}`]: _
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          w[D] = {};
        }
      }
    };
    Object.keys(m.components).forEach((w) => {
      const E = m.components[w].styleOverrides;
      E && w.startsWith("Mui") && u(E, w);
    });
  }
  return m.unstable_sxConfig = {
    ...bn,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, m.unstable_sx = function(u) {
    return xn({
      sx: u,
      theme: this
    });
  }, m.toRuntimeSource = Cs, Eu(m), m;
}
function $u(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const ku = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = $u(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function ws(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Ts(e) {
  return e === "dark" ? ku : [];
}
function Iu(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: o,
    ...i
  } = e, a = qo({
    ...t,
    colorSpace: o
  });
  return {
    palette: a,
    opacity: {
      ...ws(a.mode),
      ...r
    },
    overlays: n || Ts(a.mode),
    ...i
  };
}
function Au(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Ou = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], _u = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Ou(e.cssVarPrefix).forEach((s) => {
        a[s] = r[s], delete r[s];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function Ru(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function I(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function mr(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : us(e);
}
function pt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = pr(mr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Pu(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const lt = (e) => {
  try {
    return e();
  } catch {
  }
}, Mu = (e = "mui") => Jd(e);
function Kn(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const i = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = Iu({
      ...r,
      palette: {
        mode: i,
        ...r == null ? void 0 : r.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: a,
    ...s
  } = xo({
    ...n,
    palette: {
      mode: i,
      ...r == null ? void 0 : r.palette
    },
    colorSpace: e
  });
  return t[o] = {
    ...r,
    palette: a,
    opacity: {
      ...ws(i),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || Ts(i)
  }, s;
}
function Du(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: a = !1,
    shouldSkipGeneratingVar: s = Au,
    colorSchemeSelector: l = r.light && r.dark ? "media" : void 0,
    rootSelector: d = ":root",
    ...f
  } = e, p = Object.keys(r)[0], h = n || (r.light && p !== "light" ? "light" : p), m = Mu(i), {
    [h]: x,
    light: u,
    dark: w,
    ...E
  } = r, D = {
    ...E
  };
  let _ = x;
  if ((h === "dark" && !("dark" in r) || h === "light" && !("light" in r)) && (_ = !0), !_)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${h}\` option is either missing or invalid.` : Nt(21, h));
  let O;
  a && (O = "oklch");
  const S = Kn(O, D, _, f, h);
  u && !D.light && Kn(O, D, u, void 0, "light"), w && !D.dark && Kn(O, D, w, void 0, "dark");
  let P = {
    defaultColorScheme: h,
    ...S,
    cssVarPrefix: i,
    colorSchemeSelector: l,
    rootSelector: d,
    getCssVar: m,
    colorSchemes: D,
    font: {
      ...uu(S.typography),
      ...S.font
    },
    spacing: Pu(f.spacing)
  };
  Object.keys(P.colorSchemes).forEach((R) => {
    const g = P.colorSchemes[R].palette, N = (X) => {
      const J = X.split("-"), re = J[1], ke = J[2];
      return m(X, g[re][ke]);
    };
    g.mode === "light" && (I(g.common, "background", "#fff"), I(g.common, "onBackground", "#000")), g.mode === "dark" && (I(g.common, "background", "#000"), I(g.common, "onBackground", "#fff"));
    function M(X, J, re) {
      if (O) {
        let ke;
        return X === _t && (ke = `transparent ${((1 - re) * 100).toFixed(0)}%`), X === fe && (ke = `#000 ${(re * 100).toFixed(0)}%`), X === pe && (ke = `#fff ${(re * 100).toFixed(0)}%`), `color-mix(in ${O}, ${J}, ${ke})`;
      }
      return X(J, re);
    }
    if (Ru(g, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), g.mode === "light") {
      I(g.Alert, "errorColor", M(fe, a ? m("palette-error-light") : g.error.light, 0.6)), I(g.Alert, "infoColor", M(fe, a ? m("palette-info-light") : g.info.light, 0.6)), I(g.Alert, "successColor", M(fe, a ? m("palette-success-light") : g.success.light, 0.6)), I(g.Alert, "warningColor", M(fe, a ? m("palette-warning-light") : g.warning.light, 0.6)), I(g.Alert, "errorFilledBg", N("palette-error-main")), I(g.Alert, "infoFilledBg", N("palette-info-main")), I(g.Alert, "successFilledBg", N("palette-success-main")), I(g.Alert, "warningFilledBg", N("palette-warning-main")), I(g.Alert, "errorFilledColor", lt(() => g.getContrastText(g.error.main))), I(g.Alert, "infoFilledColor", lt(() => g.getContrastText(g.info.main))), I(g.Alert, "successFilledColor", lt(() => g.getContrastText(g.success.main))), I(g.Alert, "warningFilledColor", lt(() => g.getContrastText(g.warning.main))), I(g.Alert, "errorStandardBg", M(pe, a ? m("palette-error-light") : g.error.light, 0.9)), I(g.Alert, "infoStandardBg", M(pe, a ? m("palette-info-light") : g.info.light, 0.9)), I(g.Alert, "successStandardBg", M(pe, a ? m("palette-success-light") : g.success.light, 0.9)), I(g.Alert, "warningStandardBg", M(pe, a ? m("palette-warning-light") : g.warning.light, 0.9)), I(g.Alert, "errorIconColor", N("palette-error-main")), I(g.Alert, "infoIconColor", N("palette-info-main")), I(g.Alert, "successIconColor", N("palette-success-main")), I(g.Alert, "warningIconColor", N("palette-warning-main")), I(g.AppBar, "defaultBg", N("palette-grey-100")), I(g.Avatar, "defaultBg", N("palette-grey-400")), I(g.Button, "inheritContainedBg", N("palette-grey-300")), I(g.Button, "inheritContainedHoverBg", N("palette-grey-A100")), I(g.Chip, "defaultBorder", N("palette-grey-400")), I(g.Chip, "defaultAvatarColor", N("palette-grey-700")), I(g.Chip, "defaultIconColor", N("palette-grey-700")), I(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), I(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), I(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), I(g.LinearProgress, "primaryBg", M(pe, a ? m("palette-primary-main") : g.primary.main, 0.62)), I(g.LinearProgress, "secondaryBg", M(pe, a ? m("palette-secondary-main") : g.secondary.main, 0.62)), I(g.LinearProgress, "errorBg", M(pe, a ? m("palette-error-main") : g.error.main, 0.62)), I(g.LinearProgress, "infoBg", M(pe, a ? m("palette-info-main") : g.info.main, 0.62)), I(g.LinearProgress, "successBg", M(pe, a ? m("palette-success-main") : g.success.main, 0.62)), I(g.LinearProgress, "warningBg", M(pe, a ? m("palette-warning-light") : g.warning.main, 0.62)), I(g.Skeleton, "bg", O ? M(_t, a ? m("palette-text-primary") : g.text.primary, 0.11) : `rgba(${N("palette-text-primaryChannel")} / 0.11)`), I(g.Slider, "primaryTrack", M(pe, a ? m("palette-primary-main") : g.primary.main, 0.62)), I(g.Slider, "secondaryTrack", M(pe, a ? m("palette-secondary-main") : g.secondary.main, 0.62)), I(g.Slider, "errorTrack", M(pe, a ? m("palette-error-main") : g.error.main, 0.62)), I(g.Slider, "infoTrack", M(pe, a ? m("palette-info-main") : g.info.main, 0.62)), I(g.Slider, "successTrack", M(pe, a ? m("palette-success-main") : g.success.main, 0.62)), I(g.Slider, "warningTrack", M(pe, a ? m("palette-warning-main") : g.warning.main, 0.62));
      const X = O ? M(fe, a ? m("palette-background-default") : g.background.default, 0.6825) : Dr(g.background.default, 0.8);
      I(g.SnackbarContent, "bg", X), I(g.SnackbarContent, "color", lt(() => O ? bo.text.primary : g.getContrastText(X))), I(g.SpeedDialAction, "fabHoverBg", Dr(g.background.paper, 0.15)), I(g.StepConnector, "border", N("palette-grey-400")), I(g.StepContent, "border", N("palette-grey-400")), I(g.Switch, "defaultColor", N("palette-common-white")), I(g.Switch, "defaultDisabledColor", N("palette-grey-100")), I(g.Switch, "primaryDisabledColor", M(pe, a ? m("palette-primary-main") : g.primary.main, 0.62)), I(g.Switch, "secondaryDisabledColor", M(pe, a ? m("palette-secondary-main") : g.secondary.main, 0.62)), I(g.Switch, "errorDisabledColor", M(pe, a ? m("palette-error-main") : g.error.main, 0.62)), I(g.Switch, "infoDisabledColor", M(pe, a ? m("palette-info-main") : g.info.main, 0.62)), I(g.Switch, "successDisabledColor", M(pe, a ? m("palette-success-main") : g.success.main, 0.62)), I(g.Switch, "warningDisabledColor", M(pe, a ? m("palette-warning-main") : g.warning.main, 0.62)), I(g.TableCell, "border", M(pe, _t(a ? m("palette-divider") : g.divider, 1), 0.88)), I(g.Tooltip, "bg", M(_t, a ? m("palette-grey-700") : g.grey[700], 0.92));
    }
    if (g.mode === "dark") {
      I(g.Alert, "errorColor", M(pe, a ? m("palette-error-light") : g.error.light, 0.6)), I(g.Alert, "infoColor", M(pe, a ? m("palette-info-light") : g.info.light, 0.6)), I(g.Alert, "successColor", M(pe, a ? m("palette-success-light") : g.success.light, 0.6)), I(g.Alert, "warningColor", M(pe, a ? m("palette-warning-light") : g.warning.light, 0.6)), I(g.Alert, "errorFilledBg", N("palette-error-dark")), I(g.Alert, "infoFilledBg", N("palette-info-dark")), I(g.Alert, "successFilledBg", N("palette-success-dark")), I(g.Alert, "warningFilledBg", N("palette-warning-dark")), I(g.Alert, "errorFilledColor", lt(() => g.getContrastText(g.error.dark))), I(g.Alert, "infoFilledColor", lt(() => g.getContrastText(g.info.dark))), I(g.Alert, "successFilledColor", lt(() => g.getContrastText(g.success.dark))), I(g.Alert, "warningFilledColor", lt(() => g.getContrastText(g.warning.dark))), I(g.Alert, "errorStandardBg", M(fe, a ? m("palette-error-light") : g.error.light, 0.9)), I(g.Alert, "infoStandardBg", M(fe, a ? m("palette-info-light") : g.info.light, 0.9)), I(g.Alert, "successStandardBg", M(fe, a ? m("palette-success-light") : g.success.light, 0.9)), I(g.Alert, "warningStandardBg", M(fe, a ? m("palette-warning-light") : g.warning.light, 0.9)), I(g.Alert, "errorIconColor", N("palette-error-main")), I(g.Alert, "infoIconColor", N("palette-info-main")), I(g.Alert, "successIconColor", N("palette-success-main")), I(g.Alert, "warningIconColor", N("palette-warning-main")), I(g.AppBar, "defaultBg", N("palette-grey-900")), I(g.AppBar, "darkBg", N("palette-background-paper")), I(g.AppBar, "darkColor", N("palette-text-primary")), I(g.Avatar, "defaultBg", N("palette-grey-600")), I(g.Button, "inheritContainedBg", N("palette-grey-800")), I(g.Button, "inheritContainedHoverBg", N("palette-grey-700")), I(g.Chip, "defaultBorder", N("palette-grey-700")), I(g.Chip, "defaultAvatarColor", N("palette-grey-300")), I(g.Chip, "defaultIconColor", N("palette-grey-300")), I(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), I(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), I(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), I(g.LinearProgress, "primaryBg", M(fe, a ? m("palette-primary-main") : g.primary.main, 0.5)), I(g.LinearProgress, "secondaryBg", M(fe, a ? m("palette-secondary-main") : g.secondary.main, 0.5)), I(g.LinearProgress, "errorBg", M(fe, a ? m("palette-error-main") : g.error.main, 0.5)), I(g.LinearProgress, "infoBg", M(fe, a ? m("palette-info-main") : g.info.main, 0.5)), I(g.LinearProgress, "successBg", M(fe, a ? m("palette-success-main") : g.success.main, 0.5)), I(g.LinearProgress, "warningBg", M(fe, a ? m("palette-warning-main") : g.warning.main, 0.5)), I(g.Skeleton, "bg", O ? M(_t, a ? m("palette-text-primary") : g.text.primary, 0.13) : `rgba(${N("palette-text-primaryChannel")} / 0.13)`), I(g.Slider, "primaryTrack", M(fe, a ? m("palette-primary-main") : g.primary.main, 0.5)), I(g.Slider, "secondaryTrack", M(fe, a ? m("palette-secondary-main") : g.secondary.main, 0.5)), I(g.Slider, "errorTrack", M(fe, a ? m("palette-error-main") : g.error.main, 0.5)), I(g.Slider, "infoTrack", M(fe, a ? m("palette-info-main") : g.info.main, 0.5)), I(g.Slider, "successTrack", M(fe, a ? m("palette-success-main") : g.success.main, 0.5)), I(g.Slider, "warningTrack", M(fe, a ? m("palette-warning-light") : g.warning.main, 0.5));
      const X = O ? M(pe, a ? m("palette-background-default") : g.background.default, 0.985) : Dr(g.background.default, 0.98);
      I(g.SnackbarContent, "bg", X), I(g.SnackbarContent, "color", lt(() => O ? xs.text.primary : g.getContrastText(X))), I(g.SpeedDialAction, "fabHoverBg", Dr(g.background.paper, 0.15)), I(g.StepConnector, "border", N("palette-grey-600")), I(g.StepContent, "border", N("palette-grey-600")), I(g.Switch, "defaultColor", N("palette-grey-300")), I(g.Switch, "defaultDisabledColor", N("palette-grey-600")), I(g.Switch, "primaryDisabledColor", M(fe, a ? m("palette-primary-main") : g.primary.main, 0.55)), I(g.Switch, "secondaryDisabledColor", M(fe, a ? m("palette-secondary-main") : g.secondary.main, 0.55)), I(g.Switch, "errorDisabledColor", M(fe, a ? m("palette-error-main") : g.error.main, 0.55)), I(g.Switch, "infoDisabledColor", M(fe, a ? m("palette-info-main") : g.info.main, 0.55)), I(g.Switch, "successDisabledColor", M(fe, a ? m("palette-success-main") : g.success.main, 0.55)), I(g.Switch, "warningDisabledColor", M(fe, a ? m("palette-warning-light") : g.warning.main, 0.55)), I(g.TableCell, "border", M(fe, _t(a ? m("palette-divider") : g.divider, 1), 0.68)), I(g.Tooltip, "bg", M(_t, a ? m("palette-grey-700") : g.grey[700], 0.92));
    }
    a || (pt(g.background, "default"), pt(g.background, "paper"), pt(g.common, "background"), pt(g.common, "onBackground"), pt(g, "divider")), Object.keys(g).forEach((X) => {
      const J = g[X];
      X !== "tonalOffset" && !a && J && typeof J == "object" && (J.main && I(g[X], "mainChannel", pr(mr(J.main))), J.light && I(g[X], "lightChannel", pr(mr(J.light))), J.dark && I(g[X], "darkChannel", pr(mr(J.dark))), J.contrastText && I(g[X], "contrastTextChannel", pr(mr(J.contrastText))), X === "text" && (pt(g[X], "primary"), pt(g[X], "secondary")), X === "action" && (J.active && pt(g[X], "active"), J.selected && pt(g[X], "selected")));
    });
  }), P = t.reduce((R, g) => et(R, g), P);
  const Q = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: s,
    getSelector: _u(P),
    enableContrastVars: a
  }, {
    vars: G,
    generateThemeVars: j,
    generateStyleSheets: y
  } = tu(P, Q);
  return P.vars = G, Object.entries(P.colorSchemes[P.defaultColorScheme]).forEach(([R, g]) => {
    P[R] = g;
  }), P.generateThemeVars = j, P.generateStyleSheets = y, P.generateSpacing = function() {
    return as(f.spacing, Lo(this));
  }, P.getColorSchemeSelector = ru(l), P.spacing = P.generateSpacing(), P.shouldSkipGeneratingVar = s, P.unstable_sxConfig = {
    ...bn,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, P.unstable_sx = function(g) {
    return xn({
      sx: g,
      theme: this
    });
  }, P.internal_cache = {}, P.toRuntimeSource = Cs, P;
}
function ra(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: qo({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function wn(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, s = i || "light", l = o == null ? void 0 : o[s], d = {
    ...o,
    ...r ? {
      [s]: {
        ...typeof l != "boolean" && l,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return xo(e, ...t);
    let f = r;
    "palette" in e || d[s] && (d[s] !== !0 ? f = d[s].palette : s === "dark" && (f = {
      mode: "dark"
    }));
    const p = xo({
      ...e,
      palette: f
    }, ...t);
    return p.defaultColorScheme = s, p.colorSchemes = d, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: p.palette
    }, ra(p, "dark", d.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: p.palette
    }, ra(p, "light", d.light)), p;
  }
  return !r && !("light" in d) && s === "light" && (d.light = !0), Du({
    ...a,
    colorSchemes: d,
    defaultColorScheme: s,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Es = wn();
function Nu() {
  const e = cs(Es);
  return process.env.NODE_ENV !== "production" && Z.useDebugValue(e), e[Tt] || e;
}
function zu({
  theme: e,
  ...t
}) {
  const r = Tt in e ? e[Tt] : void 0;
  return /* @__PURE__ */ c(Cr, {
    ...t,
    themeId: r ? Tt : void 0,
    theme: r || e
  });
}
const Nr = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
};
process.env.NODE_ENV !== "production" && (Y.string, Y.string, Y.string, Y.string, Y.string, Y.oneOf(["dark", "light", "system"]), Y.string, Y.string);
const {
  CssVarsProvider: Fu
} = Qd({
  themeId: Tt,
  // @ts-ignore ignore module augmentation tests
  theme: () => wn({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Nr.colorSchemeStorageKey,
  modeStorageKey: Nr.modeStorageKey,
  defaultColorScheme: {
    light: Nr.defaultLightColorScheme,
    dark: Nr.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: Ss(e.palette, e.typography)
    };
    return t.unstable_sx = function(n) {
      return xn({
        sx: n,
        theme: this
      });
    }, t;
  }
}), Lu = Fu;
function $s({
  theme: e,
  ...t
}) {
  const r = Z.useMemo(() => {
    if (typeof e == "function")
      return e;
    const n = Tt in e ? e[Tt] : e;
    return "colorSchemes" in n ? null : "vars" in n ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return r ? /* @__PURE__ */ c(zu, {
    theme: r,
    ...t
  }) : /* @__PURE__ */ c(Lu, {
    theme: e,
    ...t
  });
}
function ks(e) {
  return /* @__PURE__ */ c(jo, {
    ...e,
    defaultTheme: Es,
    themeId: Tt
  });
}
process.env.NODE_ENV !== "production" && (ks.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: Y.oneOfType([Y.array, Y.func, Y.number, Y.object, Y.string, Y.bool])
});
function Is(e) {
  return function(r) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ c(ks, {
        styles: typeof e == "function" ? (n) => e({
          theme: n,
          ...r
        }) : e
      })
    );
  };
}
process.env.NODE_ENV !== "production" && (Y.node, Y.object.isRequired);
function Bu(e) {
  return Ld(e);
}
const vo = typeof Is({}) == "function", Wu = (e, t) => ({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%",
  // When used under CssVarsProvider, colorScheme should not be applied dynamically because it will generate the stylesheet twice for server-rendered applications.
  ...t && !e.vars && {
    colorScheme: e.palette.mode
  }
}), ju = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), As = (e, t = !1) => {
  var i, a;
  const r = {};
  t && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([s, l]) => {
    var f, p;
    const d = e.getColorSchemeSelector(s);
    d.startsWith("@") ? r[d] = {
      ":root": {
        colorScheme: (f = l.palette) == null ? void 0 : f.mode
      }
    } : r[d.replace(/\s*&/, "")] = {
      colorScheme: (p = l.palette) == null ? void 0 : p.mode
    };
  });
  let n = {
    html: Wu(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...ju(e),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    },
    ...r
  };
  const o = (a = (i = e.components) == null ? void 0 : i.MuiCssBaseline) == null ? void 0 : a.styleOverrides;
  return o && (n = [n, o]), n;
}, jr = "mui-ecs", Vu = (e) => {
  const t = As(e, !1), r = Array.isArray(t) ? t[0] : t;
  return !e.vars && r && (r.html[`:root:has(${jr})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([n, o]) => {
    var a, s;
    const i = e.getColorSchemeSelector(n);
    i.startsWith("@") ? r[i] = {
      [`:root:not(:has(.${jr}))`]: {
        colorScheme: (a = o.palette) == null ? void 0 : a.mode
      }
    } : r[i.replace(/\s*&/, "")] = {
      [`&:not(:has(.${jr}))`]: {
        colorScheme: (s = o.palette) == null ? void 0 : s.mode
      }
    };
  }), t;
}, Uu = Is(vo ? ({
  theme: e,
  enableColorScheme: t
}) => As(e, t) : ({
  theme: e
}) => Vu(e));
function Os(e) {
  const t = Bu({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: r,
    enableColorScheme: n = !1
  } = t;
  return /* @__PURE__ */ v(Z.Fragment, {
    children: [vo && /* @__PURE__ */ c(Uu, {
      enableColorScheme: n
    }), !vo && !n && /* @__PURE__ */ c("span", {
      className: jr,
      style: {
        display: "none"
      }
    }), r]
  });
}
process.env.NODE_ENV !== "production" && (Os.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: Y.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: Y.bool
});
const Hu = te.fontFamily.code, Gu = {
  fontFamily: te.fontFamily.primary,
  h1: {
    fontFamily: te.fontFamily.primary,
    fontWeight: te.fontWeight.medium,
    fontSize: te.fontSize["2xl"]
  },
  h2: {
    fontFamily: te.fontFamily.primary,
    fontWeight: te.fontWeight.medium,
    fontSize: te.fontSize.xl
  },
  h3: {
    fontFamily: te.fontFamily.primary,
    fontWeight: te.fontWeight.medium,
    fontSize: te.fontSize.lg
  },
  h4: {
    fontFamily: te.fontFamily.primary,
    fontWeight: te.fontWeight.medium,
    fontSize: te.fontSize.base
  },
  h5: {
    fontFamily: te.fontFamily.primary,
    fontWeight: te.fontWeight.regular,
    fontSize: te.fontSize.sm
  },
  h6: {
    fontFamily: te.fontFamily.primary,
    fontWeight: te.fontWeight.regular,
    fontSize: te.fontSize.xs
  },
  body1: {
    fontFamily: te.fontFamily.primary,
    fontWeight: te.fontWeight.regular,
    fontSize: te.fontSize.sm
  },
  body2: {
    fontFamily: te.fontFamily.primary,
    fontWeight: te.fontWeight.regular,
    fontSize: te.fontSize.xs
  },
  button: {
    fontFamily: te.fontFamily.primary,
    fontWeight: te.fontWeight.regular,
    textTransform: "none"
  },
  caption: {
    fontFamily: te.fontFamily.primary,
    fontWeight: te.fontWeight.regular,
    fontSize: te.fontSize.xs
  },
  overline: {
    fontFamily: te.fontFamily.primary,
    fontWeight: te.fontWeight.regular,
    fontSize: te.fontSize.xs,
    textTransform: "none",
    letterSpacing: "0.08em"
  }
}, Yu = (e) => {
  const t = e === "light";
  return {
    MuiButton: {
      styleOverrides: {
        root: ({ theme: r }) => ({
          borderRadius: "9999px",
          fontWeight: 400,
          textTransform: "none",
          boxShadow: "none",
          padding: r.spacing(1.25, 2.5),
          transition: "all 0.2s ease-in-out",
          border: "none"
        }),
        outlined: {
          borderWidth: "1px",
          borderColor: t ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.12)",
          color: t ? T.black : T.white,
          "&:hover": {
            backgroundColor: t ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.04)",
            borderColor: t ? T.black : T.white,
            borderWidth: "1px"
          }
        },
        text: {
          color: t ? T.black : T.white,
          fontWeight: 400,
          textDecoration: "none",
          "&:hover": {
            backgroundColor: t ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.08)"
          }
        }
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: t ? T.erieBlack : T.white,
            color: t ? T.white : T.erieBlack,
            "&:hover": {
              backgroundColor: t ? "#2A2A2A" : T.gray[200],
              boxShadow: wt.sm
            }
          }
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: t ? T.erieBlack : T.white,
            color: t ? T.erieBlack : T.white,
            "&:hover": {
              backgroundColor: t ? T.erieBlack : T.white,
              color: t ? T.white : T.erieBlack
            }
          }
        }
      ]
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          // 1rem — Brand Book §radii (the workhorse)
          backgroundColor: t ? T.white : T.gray[800],
          border: `1px solid ${t ? T.tints.erieBlack10 : "rgba(255,255,255,0.08)"}`,
          boxShadow: wt.sm,
          "&:hover": {
            boxShadow: wt.md
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "all 200ms",
          color: t ? T.erieBlack : T.white,
          "&:hover": {
            backgroundColor: t ? T.tints.erieBlack8 : "rgba(255,255,255,0.08)"
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: t ? T.tints.erieBlack10 : "rgba(255,255,255,0.08)",
          borderBottomWidth: "1px"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // Usa background.paper de la paleta (white light / gray[800] dark)
          backgroundImage: "none"
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          // Header sticky: mint-cream/80 + backdrop-blur — Brand Book §layout
          backgroundColor: t ? T.tints.mintCream60 : "rgba(23,23,23,0.85)",
          backdropFilter: "blur(8px)",
          boxShadow: "none",
          borderBottom: `1px solid ${t ? T.tints.erieBlack10 : "rgba(255,255,255,0.08)"}`,
          color: t ? T.erieBlack : T.white
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "9999px",
          // pill — Brand Book §badges
          backgroundColor: t ? T.tints.erieBlack8 : "rgba(255,255,255,0.08)",
          border: "none",
          color: t ? T.erieBlack : T.white,
          fontWeight: 600,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          fontSize: "0.75rem"
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: t ? T.erieBlack : T.white,
          "& code": {
            fontFamily: Hu,
            backgroundColor: t ? T.tints.erieBlack8 : "rgba(255,255,255,0.10)",
            padding: "2px 6px",
            borderRadius: 4
          }
        }
      }
    }
  };
}, qu = (e) => {
  const t = e === "light";
  return {
    mode: e,
    primary: {
      main: t ? T.erieBlack : T.white,
      light: T.gray[700],
      dark: T.gray[900],
      contrastText: t ? T.white : T.erieBlack
    },
    secondary: {
      main: T.cadetGray,
      light: T.gray[400],
      dark: T.gray[700],
      contrastText: t ? T.erieBlack : T.white
    },
    background: {
      // bg-1: Mint Cream como fondo de página (claro) / Erie Black (oscuro)
      default: t ? T.mintCream : T.erieBlack,
      // bg-2: White como superficie elevada (cards, dialogs)
      paper: t ? T.white : T.gray[800]
    },
    text: {
      primary: t ? T.erieBlack : T.white,
      secondary: t ? T.cadetGray : T.cadetGray,
      disabled: T.gray[400]
    },
    action: {
      active: t ? T.erieBlack : T.white,
      hover: t ? T.tints.erieBlack8 : "rgba(255,255,255,0.08)",
      selected: t ? T.tints.erieBlack10 : "rgba(255,255,255,0.12)",
      disabled: T.cadetGray,
      disabledBackground: t ? "rgba(23,23,23,0.06)" : "rgba(255,255,255,0.06)"
    },
    // Inversión semántica crítica: orange = error, blue = success
    error: { main: T.hotOrange, light: T.tints.hotOrange30, contrastText: T.white },
    success: { main: T.moderateBlue, light: T.tints.moderateBlue15, contrastText: T.white },
    warning: { main: T.hotOrange, contrastText: T.white },
    info: { main: T.moderateBlue, contrastText: T.white },
    divider: t ? T.tints.erieBlack10 : "rgba(255,255,255,0.08)"
  };
}, Ku = () => [
  "none",
  "0px 2px 4px rgba(0,0,0,0.05)",
  "0px 4px 8px rgba(0,0,0,0.05)",
  "0px 6px 12px rgba(0,0,0,0.08)",
  "0px 8px 16px rgba(0,0,0,0.08)",
  "0px 10px 20px rgba(0,0,0,0.1)",
  "0px 12px 24px rgba(0,0,0,0.1)",
  "0px 14px 28px rgba(0,0,0,0.12)",
  "0px 16px 32px rgba(0,0,0,0.12)",
  "0px 18px 36px rgba(0,0,0,0.14)",
  "0px 20px 40px rgba(0,0,0,0.14)",
  "0px 22px 44px rgba(0,0,0,0.16)",
  "0px 24px 48px rgba(0,0,0,0.16)",
  "0px 26px 52px rgba(0,0,0,0.18)",
  "0px 28px 56px rgba(0,0,0,0.18)",
  "0px 30px 60px rgba(0,0,0,0.2)",
  "0px 32px 64px rgba(0,0,0,0.2)",
  "0px 34px 68px rgba(0,0,0,0.22)",
  "0px 36px 72px rgba(0,0,0,0.22)",
  "0px 38px 76px rgba(0,0,0,0.24)",
  "0px 40px 80px rgba(0,0,0,0.24)",
  "0px 42px 84px rgba(0,0,0,0.25)",
  "0px 44px 88px rgba(0,0,0,0.25)",
  "0px 46px 92px rgba(0,0,0,0.26)",
  "0px 48px 96px rgba(0,0,0,0.26)"
], Xu = (e) => wn({
  palette: qu(e),
  typography: Gu,
  components: Yu(e),
  shape: {
    borderRadius: 16
    // 1rem — Brand Book §radii
  },
  shadows: Ku()
}), _s = Po({
  mode: "light",
  toggleColorMode: () => {
  }
}), Ko = () => an(_s), bg = ({ children: e }) => {
  const [t, r] = ee(() => {
    const a = localStorage.getItem("ai4u-theme-mode");
    return a === "dark" || a === "light" ? a : "light";
  }), n = Rt(() => {
    r((a) => {
      const s = a === "light" ? "dark" : "light";
      return localStorage.setItem("ai4u-theme-mode", s), document.documentElement.setAttribute("data-theme", s), s;
    });
  }, []);
  $e(() => {
    document.documentElement.setAttribute("data-theme", t);
  }, []);
  const o = Ue(() => ({ mode: t, toggleColorMode: n }), [t, n]), i = Ue(() => Xu(t), [t]);
  return /* @__PURE__ */ c(_s.Provider, { value: o, children: /* @__PURE__ */ v($s, { theme: i, children: [
    /* @__PURE__ */ c(Os, {}),
    e
  ] }) });
}, So = Po({
  surface: "theme"
}), xg = ({ children: e, surface: t }) => {
  const r = an(So), { mode: n } = Ko(), o = t || r.surface, i = Ue(() => o === "theme" ? n : fo[o].effectiveMode, [o, n]), a = Ue(() => {
    const s = i === "light";
    return wn({
      palette: {
        mode: i,
        primary: {
          main: s ? T.black : T.white,
          contrastText: s ? T.white : T.black
        },
        background: {
          default: s ? T.accentColors.mint : T.black,
          paper: s ? T.accentColors.mint : T.gray[900]
        },
        text: {
          primary: s ? T.black : T.white,
          secondary: s ? T.gray[600] : T.gray[300]
        }
      },
      // Heredar tipografía y otros ajustes si es necesario, 
      // pero lo más importante es la paleta para el contraste.
      typography: {
        fontFamily: te.fontFamily.primary
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: "9999px",
              textTransform: "none"
            },
            outlined: {
              borderColor: s ? "rgba(0,0,0,0.23)" : "rgba(255,255,255,0.23)",
              color: s ? T.black : T.white
            }
          },
          variants: [
            {
              props: { variant: "contained", color: "primary" },
              style: {
                backgroundColor: s ? T.black : T.white,
                color: s ? T.white : T.black
              }
            }
          ]
        },
        MuiTypography: {
          styleOverrides: {
            root: {
              color: s ? T.black : T.white
            }
          }
        }
      }
    });
  }, [i]);
  return /* @__PURE__ */ c(So.Provider, { value: { surface: o }, children: /* @__PURE__ */ c($s, { theme: a, children: e }) });
}, Qu = () => an(So), se = () => {
  const e = Nu(), { mode: t } = Ko(), { surface: r } = Qu(), n = Ue(() => r === "theme" ? dc[t] : fo[r], [t, r]), o = Ue(() => r === "theme" ? t : fo[r].effectiveMode, [t, r]), i = uc(o);
  return Ue(() => ({
    // Modo actual (global)
    mode: t,
    // Modo efectivo para la superficie actual
    effectiveMode: o,
    // Superficie actual
    surface: r,
    // Colores base - use static reference
    palette: T,
    // Colores con contraste automático según superficie
    contrast: n,
    // Variantes de componentes adaptadas a la superficie
    components: i.components,
    // Helpers para uso común - memoized
    helpers: {
      // Para fondos
      background: {
        primary: n.background,
        secondary: n.surface,
        accent: o === "light" ? "#FFF5F0" : "#2A1A0F"
      },
      // Para textos - Minimalista (sin naranja como primario)
      text: {
        primary: n.text.primary,
        secondary: n.text.secondary,
        disabled: n.text.disabled,
        // Acentos mínimos (solo para casos excepcionales)
        accent: o === "light" ? T.black : T.white,
        // Garantizar contraste mínimo
        highContrast: o === "light" ? "#171717" : "#FFFFFF",
        mediumContrast: o === "light" ? "#333333" : "#F0F0F0",
        // Contraste máximo para modo dark
        darkHighContrast: o === "dark" ? "#FFFFFF" : "#171717",
        darkMediumContrast: o === "dark" ? "#E8E8E8" : "#333333"
      },
      // Para bordes - Minimalista (sin naranja)
      border: {
        primary: n.border,
        secondary: n.divider,
        accent: o === "light" ? T.gray[400] : T.gray[600]
      },
      // Para estados
      state: {
        hover: o === "light" ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.25)",
        selected: o === "light" ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.35)",
        disabled: o === "light" ? "rgba(0, 0, 0, 0.26)" : "rgba(255, 255, 255, 0.3)"
      }
    },
    // Acceso directo al tema MUI
    theme: e
  }), [t, o, r, n, i.components, e]);
}, vg = (e, t) => {
  const { components: r } = se();
  return Ue(() => {
    switch (e) {
      case "button":
        return r.button[t];
      case "card":
        return r.card[t];
      default:
        return null;
    }
  }, [r, e, t]);
}, Sg = () => {
  const { mode: e, contrast: t } = se();
  return Ue(() => ({
    mode: e,
    // Fondo claro → Texto oscuro
    light: {
      background: t.background,
      text: t.text.primary
    },
    // Fondo oscuro → Texto claro
    dark: {
      background: e === "dark" ? t.background : "#171717",
      text: e === "dark" ? t.text.primary : "#FFFFFF"
    }
  }), [e, t]);
}, Ju = () => {
  const [e, t] = ee(!1), [r, n] = ee(!1);
  return $e(() => {
    const o = () => {
      const a = window.matchMedia("(display-mode: standalone)").matches, s = window.navigator.standalone;
      n(a || s), t(a || s);
    };
    o();
    const i = window.matchMedia("(display-mode: standalone)");
    return i.addListener(o), () => {
      i.removeListener(o);
    };
  }, []), { isPWA: e, isStandalone: r };
};
class Zu {
  constructor() {
    ze(this, "isDev", !1);
    ze(this, "log", (...t) => {
      this.isDev && console.log(...t);
    });
    ze(this, "error", (...t) => {
      this.isDev && console.error(...t);
    });
    ze(this, "warn", (...t) => {
      this.isDev && console.warn(...t);
    });
    ze(this, "info", (...t) => {
      this.isDev && console.info(...t);
    });
    ze(this, "debug", (...t) => {
      this.isDev && console.debug(...t);
    });
  }
}
const Se = new Zu(), Ut = {
  // Eventos de negocio
  SERVICE_INTEREST: "service_interest",
  CONSULTATION_REQUEST: "consultation_request",
  DIAGNOSTIC_START: "diagnostic_start",
  // Eventos de engagement
  PHILOSOPHY_ENGAGEMENT: "philosophy_engagement",
  // Eventos técnicos
  PERFORMANCE_ISSUE: "performance_issue",
  ERROR_BOUNDARY_HIT: "error_boundary_hit"
};
class ef {
  constructor() {
    ze(this, "isGALoaded", !1);
    this.checkGAAvailability();
  }
  checkGAAvailability() {
    typeof window < "u" && window.gtag ? (this.isGALoaded = !0, Se.log("📊 Google Analytics disponible")) : Se.warn("⚠️ Google Analytics no disponible");
  }
  // Tracking de eventos específicos AI4U
  trackServiceInterest(t, r = "unknown") {
    this.trackEvent({
      action: Ut.SERVICE_INTEREST,
      category: "business",
      label: t,
      custom_parameters: {
        source: r,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        user_journey_point: "service_exploration"
      }
    });
  }
  trackConsultationRequest(t = "chat", r) {
    this.trackEvent({
      action: Ut.CONSULTATION_REQUEST,
      category: "conversion",
      label: t,
      value: 1,
      // Alto valor para conversiones
      custom_parameters: {
        service_type: r,
        contact_method: t,
        conversion_funnel: "consultation_request"
      }
    });
  }
  trackDiagnosticStart(t = "homepage") {
    this.trackEvent({
      action: Ut.DIAGNOSTIC_START,
      category: "engagement",
      label: t,
      custom_parameters: {
        diagnostic_type: "ai_readiness",
        entry_point: t
      }
    });
  }
  trackPhilosophyEngagement(t, r) {
    this.trackEvent({
      action: Ut.PHILOSOPHY_ENGAGEMENT,
      category: "content",
      label: t,
      value: r,
      custom_parameters: {
        philosophy_section: t,
        engagement_type: "humanistic_ai",
        time_spent_seconds: r
      }
    });
  }
  trackPerformanceIssue(t, r, n) {
    this.trackEvent({
      action: Ut.PERFORMANCE_ISSUE,
      category: "technical",
      label: t,
      value: Math.round(r),
      custom_parameters: {
        metric_name: t,
        actual_value: r,
        threshold_exceeded: n,
        user_agent: navigator.userAgent.substring(0, 100)
      }
    });
  }
  trackErrorBoundary(t, r) {
    var n;
    this.trackEvent({
      action: Ut.ERROR_BOUNDARY_HIT,
      category: "error",
      label: t.message || "unknown_error",
      custom_parameters: {
        error_message: t.message,
        error_stack: (n = t.stack) == null ? void 0 : n.substring(0, 500),
        component_stack: r == null ? void 0 : r.substring(0, 300),
        page_url: window.location.href
      }
    });
  }
  // Método genérico para eventos customizados
  trackEvent(t) {
    var r;
    if (!this.isGALoaded) {
      Se.warn("Analytics event skipped - GA not loaded:", t.action);
      return;
    }
    try {
      const n = {
        event_category: t.category || "general",
        event_label: t.label || ""
      };
      t.value !== void 0 && (n.value = t.value), t.custom_parameters && Object.assign(n, t.custom_parameters), (r = window.gtag) == null || r.call(window, "event", t.action, n), Se.log(`📊 Event tracked: ${t.action}`, t.category);
    } catch (n) {
      Se.error("Error tracking analytics event:", n);
    }
  }
  // Tracking de pageviews mejorado
  trackPageView(t, r) {
    var n;
    if (this.isGALoaded)
      try {
        (n = window.gtag) == null || n.call(window, "config", "G-44D5SE9KCR", {
          page_title: `${t} | AI4U`,
          page_location: window.location.href,
          ...r
        }), Se.log(`📊 Page view tracked: ${t}`);
      } catch (o) {
        Se.error("Error tracking page view:", o);
      }
  }
  // Métricas de tiempo de permanencia
  trackTimeOnPage(t, r) {
    this.trackEvent({
      action: "time_on_page",
      category: "engagement",
      label: t,
      value: Math.round(r / 1e3),
      // Convertir a segundos
      custom_parameters: {
        time_spent_ms: r,
        page_name: t,
        engagement_quality: r > 3e4 ? "high" : r > 1e4 ? "medium" : "low"
      }
    });
  }
}
const Xo = new ef();
class tf {
  constructor() {
    ze(this, "sessionId");
    this.sessionId = this.generateSessionId(), this.setupGlobalErrorHandlers();
  }
  generateSessionId() {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  setupGlobalErrorHandlers() {
    window.addEventListener("error", (t) => {
      var r;
      this.captureError({
        message: t.message,
        stack: (r = t.error) == null ? void 0 : r.stack,
        url: t.filename,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        errorBoundary: !1
      });
    }), window.addEventListener("unhandledrejection", (t) => {
      var r;
      this.captureError({
        message: `Unhandled Promise Rejection: ${t.reason}`,
        stack: (r = t.reason) == null ? void 0 : r.stack,
        url: window.location.href,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        errorBoundary: !1
      });
    }), Se.log("🛡️ Error tracking initialized");
  }
  captureError(t) {
    const r = {
      message: t.message || "Unknown error",
      stack: t.stack,
      componentStack: t.componentStack,
      errorBoundary: t.errorBoundary || !1,
      url: t.url || window.location.href,
      userAgent: navigator.userAgent.substring(0, 200),
      timestamp: t.timestamp || (/* @__PURE__ */ new Date()).toISOString(),
      sessionId: this.sessionId,
      ...t
    };
    Se.error("🚨 Error captured:", r), Xo.trackErrorBoundary(r, r.componentStack), this.sendToRemoteService(r);
  }
  captureException(t, r) {
    this.captureError({
      message: t.message,
      stack: t.stack,
      url: window.location.href,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      errorBoundary: !1,
      // Agregar contexto adicional
      ...r && { context: r }
    });
  }
  captureMessage(t, r = "info") {
    const n = {
      message: t,
      url: window.location.href,
      userAgent: navigator.userAgent.substring(0, 200),
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      sessionId: this.sessionId
    };
    r === "error" ? this.captureError(n) : Se.log(`📢 Message captured (${r}):`, t);
  }
  async sendToRemoteService(t) {
    try {
      if (this.shouldSendError(t)) {
        const r = {
          error: t,
          meta: {
            project: "ai4u-website",
            environment: "production",
            version: "1.0.0",
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          }
        };
        Se.log("📤 Error would be sent to remote service:", r);
      }
    } catch (r) {
      Se.error("Failed to send error to remote service:", r);
    }
  }
  shouldSendError(t) {
    return ![
      "Script error",
      "Network request failed",
      "Loading chunk",
      "ChunkLoadError"
    ].some(
      (n) => t.message.toLowerCase().includes(n.toLowerCase())
    );
  }
  // Método para agregar contexto a los errores
  addContext(t, r) {
    Se.log(`🏷️ Error context added: ${t}=`, r);
  }
  // Método para identificar al usuario (GDPR compliant)
  setUser(t) {
    Se.log(`👤 User identified: ${t.substring(0, 8)}...`);
  }
}
const rf = new tf(), nf = (e, t = {}) => {
  const {
    priority: r = !1,
    size: n = "original",
    format: o = "webp",
    fallback: i,
    preload: a = !1
  } = t, [s, l] = ee({
    src: "",
    isLoaded: !1,
    error: !1,
    format: "original",
    size: "original"
  }), [d, f] = ee(null);
  $e(() => {
    (async () => {
      try {
        const u = await fetch("/assets/images/optimized/image-mapping.json");
        if (u.ok) {
          const w = await u.json();
          f(w);
        }
      } catch {
      }
    })();
  }, []);
  const p = Ue(() => {
    var D, _;
    if (!d || !d[e])
      return {
        src: `/assets/images/${e}.jpg`,
        format: "original",
        size: "original"
      };
    const x = d[e];
    let u = "", w = "original", E = "original";
    return o === "webp" && ((D = x.formats) != null && D.webp) ? (u = `/assets/images/optimized/${x.formats.webp.file}`, w = "webp") : (u = `/assets/images/${x.original}`, w = "original"), n !== "original" && ((_ = x.sizes) != null && _[n]) && (u = `/assets/images/optimized/${x.sizes[n].file}`, E = n), {
      src: u,
      format: w,
      size: E
    };
  }, [e, d, o, n]);
  $e(() => {
    if (!p.src) return;
    l((u) => ({
      ...u,
      src: p.src,
      format: p.format,
      size: p.size,
      isLoaded: !1,
      error: !1
    }));
    const x = new Image();
    return x.onload = () => {
      l((u) => ({
        ...u,
        isLoaded: !0,
        error: !1
      }));
    }, x.onerror = () => {
      p.format === "webp" && !s.error ? l((u) => {
        var w;
        return {
          ...u,
          src: `/assets/images/${((w = d == null ? void 0 : d[e]) == null ? void 0 : w.original) || `${e}.jpg`}`,
          format: "original",
          error: !0
        };
      }) : l(i ? (u) => ({
        ...u,
        src: i,
        format: "fallback",
        error: !0
      }) : (u) => ({
        ...u,
        error: !0
      }));
    }, (r || a) && (x.loading = "eager"), x.src = p.src, () => {
      x.onload = null, x.onerror = null;
    };
  }, [p.src, p.format, i, r, a, s.error, d, e]);
  const h = Ue(() => {
    if (typeof window > "u") return !1;
    const x = document.createElement("canvas");
    return x.width = 1, x.height = 1, x.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }, []);
  return {
    src: Ue(() => {
      var x;
      return s.format === "webp" && !h ? `/assets/images/${((x = d == null ? void 0 : d[e]) == null ? void 0 : x.original) || `${e}.jpg`}` : s.src;
    }, [s.src, s.format, h, d, e]),
    isLoaded: s.isLoaded,
    error: s.error,
    format: s.format,
    size: s.size,
    supportsWebP: h,
    isLoading: !s.isLoaded && !s.error
  };
}, Xn = (e) => {
  const [t, r] = ee(/* @__PURE__ */ new Set()), [n, o] = ee(0);
  return $e(() => {
    o(e.length);
    const i = (s) => new Promise((l) => {
      const d = new Image();
      d.onload = () => {
        r((f) => new Set(Array.from(f).concat(s))), l();
      }, d.onerror = () => {
        r((f) => new Set(Array.from(f).concat(s))), l();
      }, d.src = `/assets/images/${s}.jpg`;
    });
    (async () => {
      await Promise.all(e.map(i));
    })();
  }, [e]), {
    loadedImages: Array.from(t),
    totalImages: n,
    progress: n > 0 ? t.size / n * 100 : 0,
    isComplete: t.size === n
  };
}, of = Le(b, {
  shouldForwardProp: (e) => e !== "iconSize" && e !== "isClickable"
})(({ theme: e, iconSize: t, isClickable: r }) => ({
  ...{
    small: {
      width: 24,
      height: 24,
      borderRadius: 4
    },
    medium: {
      width: 32,
      height: 32,
      borderRadius: 6
    },
    large: {
      width: 48,
      height: 48,
      borderRadius: 8
    }
  }[t],
  cursor: r ? "pointer" : "default",
  transition: "all 0.2s ease",
  userSelect: "none",
  "&:hover": r ? {
    transform: "scale(1.1)",
    boxShadow: "0 4px 8px rgba(0,0,0,0.15)"
  } : {},
  "&:active": {
    transform: "scale(0.95)"
  }
})), Qr = (e) => {
  const {
    type: t,
    size: r = "medium",
    color: n,
    variant: o = "filled",
    onClick: i,
    sx: a
  } = e, s = se(), l = n || s.contrast.text.primary, d = () => {
    const p = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: r === "small" ? "14px" : r === "large" ? "24px" : "18px",
      fontWeight: 400,
      fontFamily: '"Red Hat Display", sans-serif'
    };
    switch (o) {
      case "outline":
        return {
          ...p,
          backgroundColor: "transparent",
          border: `2px solid ${l}`,
          color: l
        };
      case "minimal":
        return {
          ...p,
          backgroundColor: "transparent",
          color: l
        };
      default:
        return {
          ...p,
          backgroundColor: l,
          color: l === s.palette.white ? s.palette.black : s.palette.white,
          border: "none"
        };
    }
  }, f = () => {
    const p = {
      style: {
        fontSize: "inherit"
      }
    };
    switch (t) {
      case "arrow-up":
        return /* @__PURE__ */ c("span", { ...p, children: "↑" });
      case "arrow-down":
        return /* @__PURE__ */ c("span", { ...p, children: "↓" });
      case "arrow-right":
        return /* @__PURE__ */ c("span", { ...p, children: "→" });
      case "arrow-left":
        return /* @__PURE__ */ c("span", { ...p, children: "←" });
      case "plus":
        return /* @__PURE__ */ c("span", { ...p, children: "+" });
      case "minus":
        return /* @__PURE__ */ c("span", { ...p, children: "−" });
      case "circle":
        return /* @__PURE__ */ c("span", { ...p, children: "●" });
      case "square":
        return /* @__PURE__ */ c("span", { ...p, children: "■" });
      case "triangle":
        return /* @__PURE__ */ c("span", { ...p, children: "▲" });
      case "cross":
        return /* @__PURE__ */ c("span", { ...p, children: "✕" });
      case "line":
        return /* @__PURE__ */ c("span", { ...p, children: "—" });
      case "dot":
        return /* @__PURE__ */ c("span", { ...p, children: "•" });
      case "search":
        return /* @__PURE__ */ c("span", { ...p, children: "[?]" });
      case "clear":
        return /* @__PURE__ */ c("span", { ...p, children: "✕" });
      case "check":
        return /* @__PURE__ */ c("span", { ...p, children: "✓" });
      default:
        return /* @__PURE__ */ c("span", { ...p, children: "○" });
    }
  };
  return /* @__PURE__ */ c(
    of,
    {
      iconSize: r,
      isClickable: !!i,
      onClick: i,
      sx: { ...d(), ...a },
      children: f()
    }
  );
}, af = Po(void 0), Rs = () => {
  const e = an(af);
  if (e === void 0)
    throw new Error("useLoading must be used within a LoadingProvider");
  return e;
}, Cg = ({ images: e, onAllLoaded: t }) => {
  const { setCriticalImagesLoaded: r } = Rs();
  return $e(() => {
    let n = 0;
    const o = e.length, i = () => {
      n++, n === o && (r(!0), t == null || t());
    }, a = () => {
      n++, n === o && (r(!0), t == null || t());
    };
    e.forEach((s) => {
      const l = new Image();
      l.onload = i, l.onerror = a, l.src = s;
    }), o === 0 && (r(!0), t == null || t());
  }, [e, r, t]), null;
}, wg = () => {
  const e = De();
  return /* @__PURE__ */ c(
    b,
    {
      sx: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s ease-in-out"
      },
      children: /* @__PURE__ */ c(ft, { maxWidth: "lg", children: /* @__PURE__ */ v(Ee, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ c(b, { sx: { mb: 4 }, children: /* @__PURE__ */ c(or, {}) }),
        /* @__PURE__ */ c(b, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ c(
          ae,
          {
            variant: "rectangular",
            height: 400,
            sx: {
              borderRadius: 2,
              bgcolor: e.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ) }),
        /* @__PURE__ */ v(Ee, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
          /* @__PURE__ */ c(
            ae,
            {
              variant: "text",
              height: 40,
              width: "80%",
              sx: {
                bgcolor: e.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ c(
            ae,
            {
              variant: "text",
              height: 24,
              width: "60%",
              sx: {
                bgcolor: e.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ c(
            ae,
            {
              variant: "text",
              height: 24,
              width: "70%",
              sx: {
                bgcolor: e.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ v(Ee, { direction: "row", spacing: 2, children: [
          /* @__PURE__ */ c(
            ae,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: e.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ c(
            ae,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: e.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] })
      ] }) })
    }
  );
}, Qo = ({
  src: e,
  alt: t,
  width: r = "100%",
  height: n = "auto",
  sx: o = {},
  skeletonHeight: i,
  skeletonWidth: a,
  priority: s = !1
}) => {
  const l = De(), { isPWA: d } = Ju(), { imgRef: f, isLoaded: p, isInView: h, error: m } = tl(e, { priority: s }), x = {
    bgcolor: l.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    borderRadius: 1
  };
  return /* @__PURE__ */ v(
    b,
    {
      ref: f,
      sx: {
        position: "relative",
        width: r,
        height: n,
        overflow: "hidden",
        ...o
      },
      children: [
        !p && /* @__PURE__ */ c(
          ae,
          {
            variant: "rectangular",
            width: a || r,
            height: i || n,
            sx: x
          }
        ),
        h && /* @__PURE__ */ c(
          b,
          {
            component: "img",
            src: e,
            alt: t,
            loading: s ? "eager" : "lazy",
            sx: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: p ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
              display: p ? "block" : "none",
              // Optimizaciones específicas para PWA
              ...d && {
                imageRendering: "auto",
                touchAction: "manipulation"
              }
            },
            onLoad: () => {
            }
          }
        ),
        m && /* @__PURE__ */ c(
          b,
          {
            sx: {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: l.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
              color: l.palette.text.secondary,
              fontSize: "0.875rem"
            },
            children: "Error al cargar imagen"
          }
        )
      ]
    }
  );
}, Tg = ({
  src: e,
  pixelArtSrc: t,
  alt: r,
  width: n = "100%",
  height: o = "auto",
  transitionDuration: i = 0.3,
  sx: a,
  ...s
}) => {
  const [l, d] = ee(!1);
  return /* @__PURE__ */ c(
    b,
    {
      onMouseEnter: () => d(!0),
      onMouseLeave: () => d(!1),
      sx: {
        position: "relative",
        width: n,
        height: o,
        overflow: "hidden",
        borderRadius: "8px",
        cursor: "pointer",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${e})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: `opacity ${i}s ease-in-out`,
          opacity: l ? 0 : 1,
          zIndex: 1
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${t})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: `opacity ${i}s ease-in-out`,
          opacity: l ? 1 : 0,
          zIndex: 2
        },
        ...a
      },
      ...s,
      children: /* @__PURE__ */ c(
        b,
        {
          component: "img",
          src: e,
          alt: r,
          sx: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0,
            pointerEvents: "none"
          }
        }
      )
    }
  );
}, Eg = ({
  src: e,
  alt: t,
  width: r = "100%",
  height: n = "auto",
  transitionDuration: o = 0.3,
  pixelSize: i = 8,
  sx: a,
  ...s
}) => {
  const [l, d] = ee(!1);
  return /* @__PURE__ */ v(
    b,
    {
      onMouseEnter: () => d(!0),
      onMouseLeave: () => d(!1),
      sx: {
        position: "relative",
        width: r,
        height: n,
        overflow: "hidden",
        borderRadius: "8px",
        cursor: "pointer",
        ...a
      },
      ...s,
      children: [
        /* @__PURE__ */ c(
          b,
          {
            component: "img",
            src: e,
            alt: t,
            sx: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: `all ${o}s ease-in-out`,
              filter: l ? "contrast(1.4) brightness(1.2) saturate(1.5) blur(0.3px)" : "none",
              imageRendering: l ? "pixelated" : "auto",
              transform: l ? "scale(1.05)" : "scale(1)",
              "&::before": l ? {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `repeating-conic-gradient(
                from 0deg,
                transparent 0deg,
                rgba(0,0,0,0.1) 1deg,
                transparent 2deg
              )`,
                backgroundSize: `${i}px ${i}px`,
                pointerEvents: "none",
                zIndex: 2
              } : {}
            }
          }
        ),
        l && /* @__PURE__ */ c(
          b,
          {
            sx: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `repeating-conic-gradient(
              from 0deg,
              transparent 0deg,
              rgba(0,0,0,0.03) 1deg,
              transparent 2deg
            )`,
              backgroundSize: `${i}px ${i}px`,
              pointerEvents: "none",
              zIndex: 3,
              transition: `opacity ${o}s ease-in-out`
            }
          }
        ),
        l && /* @__PURE__ */ c(
          b,
          {
            sx: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 4,
              transition: `opacity ${o}s ease-in-out`
            }
          }
        ),
        l && /* @__PURE__ */ c(
          b,
          {
            sx: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(
              90deg,
              transparent 0%,
              rgba(255,255,255,0.02) 50%,
              transparent 100%
            )`,
              animation: "glitch 2s infinite",
              pointerEvents: "none",
              zIndex: 5,
              "@keyframes glitch": {
                "0%, 100%": {
                  transform: "translateX(0)"
                },
                "10%": {
                  transform: "translateX(-2px)"
                },
                "20%": {
                  transform: "translateX(2px)"
                },
                "30%": {
                  transform: "translateX(0)"
                },
                "40%": {
                  transform: "translateX(-1px)"
                },
                "50%": {
                  transform: "translateX(1px)"
                },
                "60%": {
                  transform: "translateX(0)"
                }
              }
            }
          }
        )
      ]
    }
  );
}, sf = "es,en,zh-CN,hi,ar,pt,ru,ja,de,fr", cf = `
  .goog-te-banner-frame {
    display: none !important;
  }
  body {
    top: 0 !important;
  }
  #google_translate_element {
    display: none !important;
  }
  .goog-te-gadget {
    display: none !important;
  }
  .skiptranslate {
    display: none !important;
  }
  .goog-te-menu-frame {
    display: none !important;
  }
`, lf = () => ($e(() => {
  if (document.getElementById("google-translate-script")) return;
  window.googleTranslateElementInit = () => {
    var t;
    try {
      (t = window.google) != null && t.translate && document.getElementById("google_translate_element") && (new window.google.translate.TranslateElement(
        {
          pageLanguage: "es",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: !1,
          includedLanguages: sf,
          multilanguagePage: !1
        },
        "google_translate_element"
      ), setTimeout(() => {
        const r = document.getElementById("google_translate_element");
        r && (r.style.display = "none");
      }, 100));
    } catch (r) {
      console.error("Error inicializando Google Translate:", r);
    }
  };
  const e = document.createElement("script");
  e.id = "google-translate-script", e.type = "text/javascript", e.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit", e.async = !0, document.body.appendChild(e);
}, []), /* @__PURE__ */ v(Er, { children: [
  /* @__PURE__ */ c(
    b,
    {
      id: "google_translate_element",
      sx: {
        position: "absolute",
        opacity: 0,
        pointerEvents: "none",
        width: 0,
        height: 0,
        overflow: "hidden",
        zIndex: -1
      }
    }
  ),
  /* @__PURE__ */ c("style", { children: cf })
] })), Co = [
  { code: "es", label: "Español", short: "ES" },
  { code: "en", label: "English", short: "EN" },
  { code: "zh-CN", label: "中文", short: "ZH" },
  { code: "hi", label: "हिन्दी", short: "HI" },
  { code: "ar", label: "العربية", short: "AR" },
  { code: "pt", label: "Português", short: "PT" },
  { code: "ru", label: "Русский", short: "RU" },
  { code: "ja", label: "日本語", short: "JA" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "fr", label: "Français", short: "FR" }
], Jr = "es";
function df() {
  const e = document.cookie.match(/googtrans=([^;]+)/);
  if (e && e[1]) {
    const o = e[1].trim();
    if (o) {
      const i = o.split("/").filter(Boolean), a = i[i.length - 1];
      if (a && a !== Jr) {
        const s = Co.find((l) => l.code === a || l.code.startsWith(a));
        if (s) return s.short;
      }
    }
  }
  const r = (document.documentElement.lang || Jr).split("-")[0].toLowerCase(), n = Co.find((o) => o.code.toLowerCase().startsWith(r));
  return (n == null ? void 0 : n.short) ?? "ES";
}
const na = ({ light: e = !1 }) => {
  const t = se(), r = De(), n = Gr(r.breakpoints.down("sm")), o = Gr(r.breakpoints.between("sm", "md")), [i, a] = ee(df), [s, l] = ee(null), [d, f] = ee(() => !!document.getElementById("google-translate-script")), p = on(null), h = !!s;
  $e(() => {
    if (document.getElementById("google-translate-script")) {
      f(!0);
      return;
    }
    const E = setInterval(() => {
      document.getElementById("google-translate-script") && (f(!0), clearInterval(E));
    }, 200), D = setTimeout(() => {
      clearInterval(E), f(!0);
    }, 5e3);
    return () => {
      clearInterval(E), clearTimeout(D);
    };
  }, []);
  const m = (E) => {
    l(E.currentTarget);
  }, x = () => {
    l(null);
  }, u = (E, D) => {
    if (x(), E === Jr) {
      document.cookie = "googtrans=; path=/; max-age=0", document.cookie = "googtrans=; path=/; domain=" + window.location.hostname + "; max-age=0", window.location.reload();
      return;
    }
    const _ = `/${Jr}/${E}`;
    document.cookie = `googtrans=${_}; path=/`, window.location.reload();
  }, w = (E) => n ? {
    width: E.spacing(4),
    height: E.spacing(3.5),
    fontSize: E.typography.caption.fontSize
  } : o ? {
    width: E.spacing(4.5),
    height: E.spacing(3.75),
    fontSize: E.typography.body2.fontSize
  } : {
    width: E.spacing(5),
    height: E.spacing(4),
    fontSize: E.typography.body2.fontSize
  };
  return /* @__PURE__ */ v(
    b,
    {
      sx: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ c(
          b,
          {
            ref: p,
            component: "button",
            onClick: m,
            "aria-label": `Cambiar idioma (actual: ${i})`,
            "aria-controls": h ? "language-menu" : void 0,
            "aria-haspopup": "true",
            "aria-expanded": h ? "true" : void 0,
            disabled: !d,
            sx: (E) => {
              const D = w(E);
              return {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: D.width,
                height: D.height,
                minWidth: D.width,
                padding: 0,
                color: e ? "#FFFFFF" : t.contrast.text.primary,
                border: "none",
                borderRadius: E.spacing(0.75),
                transition: "all 0.3s ease-in-out",
                backgroundColor: e ? "transparent" : t.contrast.surface,
                fontFamily: E.typography.fontFamily,
                fontSize: D.fontSize,
                fontWeight: 400,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: e ? "rgba(255, 255, 255, 0.1)" : t.helpers.state.hover,
                  transform: "scale(1.05)"
                },
                "&:focus": {
                  outline: `${E.spacing(0.25)} solid ${t.palette.black}`,
                  outlineOffset: E.spacing(0.25)
                },
                "&:active": {
                  transform: "scale(0.95)"
                }
              };
            },
            children: d ? i : "…"
          }
        ),
        /* @__PURE__ */ c(
          Ha,
          {
            id: "language-menu",
            anchorEl: s,
            open: h,
            onClose: x,
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "right"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "right"
            },
            slotProps: {
              paper: {
                sx: (E) => ({
                  mt: 0.5,
                  minWidth: E.spacing(20),
                  maxWidth: E.spacing(25),
                  backgroundColor: t.contrast.surface,
                  border: `1px solid ${t.contrast.border}`,
                  borderRadius: E.spacing(1),
                  boxShadow: wt.md
                })
              }
            },
            children: Co.map((E) => /* @__PURE__ */ c(
              Wr,
              {
                onClick: () => u(E.code, E.short),
                selected: i === E.short,
                sx: (D) => ({
                  fontFamily: D.typography.fontFamily,
                  fontSize: D.typography.body2.fontSize,
                  fontWeight: i === E.short ? 600 : 400,
                  color: i === E.short ? t.palette.black : t.contrast.text.primary,
                  py: 1,
                  px: 2,
                  "&:hover": {
                    backgroundColor: t.helpers.state.hover
                  },
                  "&.Mui-selected": {
                    backgroundColor: t.helpers.state.selected,
                    "&:hover": {
                      backgroundColor: t.helpers.state.hover
                    }
                  }
                }),
                children: /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 1.5 }, children: [
                  /* @__PURE__ */ c(
                    b,
                    {
                      component: "span",
                      sx: (D) => ({
                        fontWeight: 400,
                        minWidth: D.spacing(3),
                        color: i === E.short ? t.palette.black : t.contrast.text.secondary
                      }),
                      children: E.short
                    }
                  ),
                  /* @__PURE__ */ c(b, { component: "span", children: E.label })
                ] })
              },
              E.code
            ))
          }
        )
      ]
    }
  );
};
var uf = typeof Element < "u", ff = typeof Map == "function", pf = typeof Set == "function", mf = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Vr(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, n, o;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!Vr(e[n], t[n])) return !1;
      return !0;
    }
    var i;
    if (ff && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0])) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!Vr(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (pf && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (mf && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length) return !1;
      for (n = r; n-- !== 0; )
        if (e[n] !== t[n]) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1;
    if (uf && e instanceof Element) return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !Vr(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var hf = function(t, r) {
  try {
    return Vr(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const gf = /* @__PURE__ */ Ir(hf);
var yf = function(e, t, r, n, o, i, a, s) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error("invariant requires an error message argument");
  if (!e) {
    var l;
    if (t === void 0)
      l = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var d = [r, n, o, i, a, s], f = 0;
      l = new Error(
        t.replace(/%s/g, function() {
          return d[f++];
        })
      ), l.name = "Invariant Violation";
    }
    throw l.framesToPop = 1, l;
  }
}, bf = yf;
const oa = /* @__PURE__ */ Ir(bf);
var xf = function(t, r, n, o) {
  var i = n ? n.call(o, t, r) : void 0;
  if (i !== void 0)
    return !!i;
  if (t === r)
    return !0;
  if (typeof t != "object" || !t || typeof r != "object" || !r)
    return !1;
  var a = Object.keys(t), s = Object.keys(r);
  if (a.length !== s.length)
    return !1;
  for (var l = Object.prototype.hasOwnProperty.bind(r), d = 0; d < a.length; d++) {
    var f = a[d];
    if (!l(f))
      return !1;
    var p = t[f], h = r[f];
    if (i = n ? n.call(o, p, h, f) : void 0, i === !1 || i === void 0 && p !== h)
      return !1;
  }
  return !0;
};
const vf = /* @__PURE__ */ Ir(xf);
var Ps = /* @__PURE__ */ ((e) => (e.BASE = "base", e.BODY = "body", e.HEAD = "head", e.HTML = "html", e.LINK = "link", e.META = "meta", e.NOSCRIPT = "noscript", e.SCRIPT = "script", e.STYLE = "style", e.TITLE = "title", e.FRAGMENT = "Symbol(react.fragment)", e))(Ps || {}), Qn = {
  link: { rel: ["amphtml", "canonical", "alternate"] },
  script: { type: ["application/ld+json"] },
  meta: {
    charset: "",
    name: ["generator", "robots", "description"],
    property: [
      "og:type",
      "og:title",
      "og:url",
      "og:image",
      "og:image:alt",
      "og:description",
      "twitter:url",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "twitter:image:alt",
      "twitter:card",
      "twitter:site"
    ]
  }
}, ia = Object.values(Ps), Jo = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
}, Sf = Object.entries(Jo).reduce(
  (e, [t, r]) => (e[r] = t, e),
  {}
), at = "data-rh", er = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate",
  PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
}, tr = (e, t) => {
  for (let r = e.length - 1; r >= 0; r -= 1) {
    const n = e[r];
    if (Object.prototype.hasOwnProperty.call(n, t))
      return n[t];
  }
  return null;
}, Cf = (e) => {
  let t = tr(
    e,
    "title"
    /* TITLE */
  );
  const r = tr(e, er.TITLE_TEMPLATE);
  if (Array.isArray(t) && (t = t.join("")), r && t)
    return r.replace(/%s/g, () => t);
  const n = tr(e, er.DEFAULT_TITLE);
  return t || n || void 0;
}, wf = (e) => tr(e, er.ON_CHANGE_CLIENT_STATE) || (() => {
}), Jn = (e, t) => t.filter((r) => typeof r[e] < "u").map((r) => r[e]).reduce((r, n) => ({ ...r, ...n }), {}), Tf = (e, t) => t.filter((r) => typeof r.base < "u").map((r) => r.base).reverse().reduce((r, n) => {
  if (!r.length) {
    const o = Object.keys(n);
    for (let i = 0; i < o.length; i += 1) {
      const s = o[i].toLowerCase();
      if (e.indexOf(s) !== -1 && n[s])
        return r.concat(n);
    }
  }
  return r;
}, []), Ef = (e) => console && typeof console.warn == "function" && console.warn(e), dr = (e, t, r) => {
  const n = {};
  return r.filter((o) => Array.isArray(o[e]) ? !0 : (typeof o[e] < "u" && Ef(
    `Helmet: ${e} should be of type "Array". Instead found type "${typeof o[e]}"`
  ), !1)).map((o) => o[e]).reverse().reduce((o, i) => {
    const a = {};
    i.filter((l) => {
      let d;
      const f = Object.keys(l);
      for (let h = 0; h < f.length; h += 1) {
        const m = f[h], x = m.toLowerCase();
        t.indexOf(x) !== -1 && !(d === "rel" && l[d].toLowerCase() === "canonical") && !(x === "rel" && l[x].toLowerCase() === "stylesheet") && (d = x), t.indexOf(m) !== -1 && (m === "innerHTML" || m === "cssText" || m === "itemprop") && (d = m);
      }
      if (!d || !l[d])
        return !1;
      const p = l[d].toLowerCase();
      return n[d] || (n[d] = {}), a[d] || (a[d] = {}), n[d][p] ? !1 : (a[d][p] = !0, !0);
    }).reverse().forEach((l) => o.push(l));
    const s = Object.keys(a);
    for (let l = 0; l < s.length; l += 1) {
      const d = s[l], f = {
        ...n[d],
        ...a[d]
      };
      n[d] = f;
    }
    return o;
  }, []).reverse();
}, $f = (e, t) => {
  if (Array.isArray(e) && e.length) {
    for (let r = 0; r < e.length; r += 1)
      if (e[r][t])
        return !0;
  }
  return !1;
}, kf = (e) => ({
  baseTag: Tf([
    "href"
    /* HREF */
  ], e),
  bodyAttributes: Jn("bodyAttributes", e),
  defer: tr(e, er.DEFER),
  encode: tr(e, er.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: Jn("htmlAttributes", e),
  linkTags: dr(
    "link",
    [
      "rel",
      "href"
      /* HREF */
    ],
    e
  ),
  metaTags: dr(
    "meta",
    [
      "name",
      "charset",
      "http-equiv",
      "property",
      "itemprop"
      /* ITEM_PROP */
    ],
    e
  ),
  noscriptTags: dr("noscript", [
    "innerHTML"
    /* INNER_HTML */
  ], e),
  onChangeClientState: wf(e),
  scriptTags: dr(
    "script",
    [
      "src",
      "innerHTML"
      /* INNER_HTML */
    ],
    e
  ),
  styleTags: dr("style", [
    "cssText"
    /* CSS_TEXT */
  ], e),
  title: Cf(e),
  titleAttributes: Jn("titleAttributes", e),
  prioritizeSeoTags: $f(e, er.PRIORITIZE_SEO_TAGS)
}), Ms = (e) => Array.isArray(e) ? e.join("") : e, If = (e, t) => {
  const r = Object.keys(e);
  for (let n = 0; n < r.length; n += 1)
    if (t[r[n]] && t[r[n]].includes(e[r[n]]))
      return !0;
  return !1;
}, Zn = (e, t) => Array.isArray(e) ? e.reduce(
  (r, n) => (If(n, t) ? r.priority.push(n) : r.default.push(n), r),
  { priority: [], default: [] }
) : { default: e, priority: [] }, aa = (e, t) => ({
  ...e,
  [t]: void 0
}), Af = [
  "noscript",
  "script",
  "style"
  /* STYLE */
], wo = (e, t = !0) => t === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;"), Ds = (e) => Object.keys(e).reduce((t, r) => {
  const n = typeof e[r] < "u" ? `${r}="${e[r]}"` : `${r}`;
  return t ? `${t} ${n}` : n;
}, ""), Of = (e, t, r, n) => {
  const o = Ds(r), i = Ms(t);
  return o ? `<${e} ${at}="true" ${o}>${wo(
    i,
    n
  )}</${e}>` : `<${e} ${at}="true">${wo(
    i,
    n
  )}</${e}>`;
}, _f = (e, t, r = !0) => t.reduce((n, o) => {
  const i = o, a = Object.keys(i).filter(
    (d) => !(d === "innerHTML" || d === "cssText")
  ).reduce((d, f) => {
    const p = typeof i[f] > "u" ? f : `${f}="${wo(i[f], r)}"`;
    return d ? `${d} ${p}` : p;
  }, ""), s = i.innerHTML || i.cssText || "", l = Af.indexOf(e) === -1;
  return `${n}<${e} ${at}="true" ${a}${l ? "/>" : `>${s}</${e}>`}`;
}, ""), Ns = (e, t = {}) => Object.keys(e).reduce((r, n) => {
  const o = Jo[n];
  return r[o || n] = e[n], r;
}, t), Rf = (e, t, r) => {
  const n = {
    key: t,
    [at]: !0
  }, o = Ns(r, n);
  return [gt.createElement("title", o, t)];
}, Ur = (e, t) => t.map((r, n) => {
  const o = {
    key: n,
    [at]: !0
  };
  return Object.keys(r).forEach((i) => {
    const s = Jo[i] || i;
    if (s === "innerHTML" || s === "cssText") {
      const l = r.innerHTML || r.cssText;
      o.dangerouslySetInnerHTML = { __html: l };
    } else
      o[s] = r[i];
  }), gt.createElement(e, o);
}), Xe = (e, t, r = !0) => {
  switch (e) {
    case "title":
      return {
        toComponent: () => Rf(e, t.title, t.titleAttributes),
        toString: () => Of(e, t.title, t.titleAttributes, r)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => Ns(t),
        toString: () => Ds(t)
      };
    default:
      return {
        toComponent: () => Ur(e, t),
        toString: () => _f(e, t, r)
      };
  }
}, Pf = ({ metaTags: e, linkTags: t, scriptTags: r, encode: n }) => {
  const o = Zn(e, Qn.meta), i = Zn(t, Qn.link), a = Zn(r, Qn.script);
  return {
    priorityMethods: {
      toComponent: () => [
        ...Ur("meta", o.priority),
        ...Ur("link", i.priority),
        ...Ur("script", a.priority)
      ],
      toString: () => (
        // generate all the tags as strings and concatenate them
        `${Xe("meta", o.priority, n)} ${Xe(
          "link",
          i.priority,
          n
        )} ${Xe("script", a.priority, n)}`
      )
    },
    metaTags: o.default,
    linkTags: i.default,
    scriptTags: a.default
  };
}, Mf = (e) => {
  const {
    baseTag: t,
    bodyAttributes: r,
    encode: n = !0,
    htmlAttributes: o,
    noscriptTags: i,
    styleTags: a,
    title: s = "",
    titleAttributes: l,
    prioritizeSeoTags: d
  } = e;
  let { linkTags: f, metaTags: p, scriptTags: h } = e, m = {
    toComponent: () => {
    },
    toString: () => ""
  };
  return d && ({ priorityMethods: m, linkTags: f, metaTags: p, scriptTags: h } = Pf(e)), {
    priority: m,
    base: Xe("base", t, n),
    bodyAttributes: Xe("bodyAttributes", r, n),
    htmlAttributes: Xe("htmlAttributes", o, n),
    link: Xe("link", f, n),
    meta: Xe("meta", p, n),
    noscript: Xe("noscript", i, n),
    script: Xe("script", h, n),
    style: Xe("style", a, n),
    title: Xe("title", { title: s, titleAttributes: l }, n)
  };
}, To = Mf, zr = [], zs = !!(typeof window < "u" && window.document && window.document.createElement), Eo = class {
  constructor(e, t) {
    ze(this, "instances", []);
    ze(this, "canUseDOM", zs);
    ze(this, "context");
    ze(this, "value", {
      setHelmet: (e) => {
        this.context.helmet = e;
      },
      helmetInstances: {
        get: () => this.canUseDOM ? zr : this.instances,
        add: (e) => {
          (this.canUseDOM ? zr : this.instances).push(e);
        },
        remove: (e) => {
          const t = (this.canUseDOM ? zr : this.instances).indexOf(e);
          (this.canUseDOM ? zr : this.instances).splice(t, 1);
        }
      }
    });
    this.context = e, this.canUseDOM = t || !1, t || (e.helmet = To({
      baseTag: [],
      bodyAttributes: {},
      htmlAttributes: {},
      linkTags: [],
      metaTags: [],
      noscriptTags: [],
      scriptTags: [],
      styleTags: [],
      title: "",
      titleAttributes: {}
    }));
  }
}, Df = {}, Fs = gt.createContext(Df), Mt, Nf = (Mt = class extends sn {
  constructor(r) {
    super(r);
    ze(this, "helmetData");
    this.helmetData = new Eo(this.props.context || {}, Mt.canUseDOM);
  }
  render() {
    return /* @__PURE__ */ gt.createElement(Fs.Provider, { value: this.helmetData.value }, this.props.children);
  }
}, ze(Mt, "canUseDOM", zs), Mt), Ht = (e, t) => {
  const r = document.head || document.querySelector(
    "head"
    /* HEAD */
  ), n = r.querySelectorAll(`${e}[${at}]`), o = [].slice.call(n), i = [];
  let a;
  return t && t.length && t.forEach((s) => {
    const l = document.createElement(e);
    for (const d in s)
      if (Object.prototype.hasOwnProperty.call(s, d))
        if (d === "innerHTML")
          l.innerHTML = s.innerHTML;
        else if (d === "cssText")
          l.styleSheet ? l.styleSheet.cssText = s.cssText : l.appendChild(document.createTextNode(s.cssText));
        else {
          const f = d, p = typeof s[f] > "u" ? "" : s[f];
          l.setAttribute(d, p);
        }
    l.setAttribute(at, "true"), o.some((d, f) => (a = f, l.isEqualNode(d))) ? o.splice(a, 1) : i.push(l);
  }), o.forEach((s) => {
    var l;
    return (l = s.parentNode) == null ? void 0 : l.removeChild(s);
  }), i.forEach((s) => r.appendChild(s)), {
    oldTags: o,
    newTags: i
  };
}, $o = (e, t) => {
  const r = document.getElementsByTagName(e)[0];
  if (!r)
    return;
  const n = r.getAttribute(at), o = n ? n.split(",") : [], i = [...o], a = Object.keys(t);
  for (const s of a) {
    const l = t[s] || "";
    r.getAttribute(s) !== l && r.setAttribute(s, l), o.indexOf(s) === -1 && o.push(s);
    const d = i.indexOf(s);
    d !== -1 && i.splice(d, 1);
  }
  for (let s = i.length - 1; s >= 0; s -= 1)
    r.removeAttribute(i[s]);
  o.length === i.length ? r.removeAttribute(at) : r.getAttribute(at) !== a.join(",") && r.setAttribute(at, a.join(","));
}, zf = (e, t) => {
  typeof e < "u" && document.title !== e && (document.title = Ms(e)), $o("title", t);
}, sa = (e, t) => {
  const {
    baseTag: r,
    bodyAttributes: n,
    htmlAttributes: o,
    linkTags: i,
    metaTags: a,
    noscriptTags: s,
    onChangeClientState: l,
    scriptTags: d,
    styleTags: f,
    title: p,
    titleAttributes: h
  } = e;
  $o("body", n), $o("html", o), zf(p, h);
  const m = {
    baseTag: Ht("base", r),
    linkTags: Ht("link", i),
    metaTags: Ht("meta", a),
    noscriptTags: Ht("noscript", s),
    scriptTags: Ht("script", d),
    styleTags: Ht("style", f)
  }, x = {}, u = {};
  Object.keys(m).forEach((w) => {
    const { newTags: E, oldTags: D } = m[w];
    E.length && (x[w] = E), D.length && (u[w] = m[w].oldTags);
  }), t && t(), l(e, x, u);
}, ur = null, Ff = (e) => {
  ur && cancelAnimationFrame(ur), e.defer ? ur = requestAnimationFrame(() => {
    sa(e, () => {
      ur = null;
    });
  }) : (sa(e), ur = null);
}, Lf = Ff, ca = class extends sn {
  constructor() {
    super(...arguments);
    ze(this, "rendered", !1);
  }
  shouldComponentUpdate(t) {
    return !vf(t, this.props);
  }
  componentDidUpdate() {
    this.emitChange();
  }
  componentWillUnmount() {
    const { helmetInstances: t } = this.props.context;
    t.remove(this), this.emitChange();
  }
  emitChange() {
    const { helmetInstances: t, setHelmet: r } = this.props.context;
    let n = null;
    const o = kf(
      t.get().map((i) => {
        const a = { ...i.props };
        return delete a.context, a;
      })
    );
    Nf.canUseDOM ? Lf(o) : To && (n = To(o)), r(n);
  }
  // componentWillMount will be deprecated
  // for SSR, initialize on first render
  // constructor is also unsafe in StrictMode
  init() {
    if (this.rendered)
      return;
    this.rendered = !0;
    const { helmetInstances: t } = this.props.context;
    t.add(this), this.emitChange();
  }
  render() {
    return this.init(), null;
  }
}, uo, Bf = (uo = class extends sn {
  shouldComponentUpdate(e) {
    return !gf(aa(this.props, "helmetData"), aa(e, "helmetData"));
  }
  mapNestedChildrenToProps(e, t) {
    if (!t)
      return null;
    switch (e.type) {
      case "script":
      case "noscript":
        return {
          innerHTML: t
        };
      case "style":
        return {
          cssText: t
        };
      default:
        throw new Error(
          `<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
        );
    }
  }
  flattenArrayTypeChildren(e, t, r, n) {
    return {
      ...t,
      [e.type]: [
        ...t[e.type] || [],
        {
          ...r,
          ...this.mapNestedChildrenToProps(e, n)
        }
      ]
    };
  }
  mapObjectTypeChildren(e, t, r, n) {
    switch (e.type) {
      case "title":
        return {
          ...t,
          [e.type]: n,
          titleAttributes: { ...r }
        };
      case "body":
        return {
          ...t,
          bodyAttributes: { ...r }
        };
      case "html":
        return {
          ...t,
          htmlAttributes: { ...r }
        };
      default:
        return {
          ...t,
          [e.type]: { ...r }
        };
    }
  }
  mapArrayTypeChildrenToProps(e, t) {
    let r = { ...t };
    return Object.keys(e).forEach((n) => {
      r = {
        ...r,
        [n]: e[n]
      };
    }), r;
  }
  warnOnInvalidChildren(e, t) {
    return oa(
      ia.some((r) => e.type === r),
      typeof e.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : `Only elements types ${ia.join(
        ", "
      )} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`
    ), oa(
      !t || typeof t == "string" || Array.isArray(t) && !t.some((r) => typeof r != "string"),
      `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`
    ), !0;
  }
  mapChildrenToProps(e, t) {
    let r = {};
    return gt.Children.forEach(e, (n) => {
      if (!n || !n.props)
        return;
      const { children: o, ...i } = n.props, a = Object.keys(i).reduce((l, d) => (l[Sf[d] || d] = i[d], l), {});
      let { type: s } = n;
      switch (typeof s == "symbol" ? s = s.toString() : this.warnOnInvalidChildren(n, o), s) {
        case "Symbol(react.fragment)":
          t = this.mapChildrenToProps(o, t);
          break;
        case "link":
        case "meta":
        case "noscript":
        case "script":
        case "style":
          r = this.flattenArrayTypeChildren(
            n,
            r,
            a,
            o
          );
          break;
        default:
          t = this.mapObjectTypeChildren(n, t, a, o);
          break;
      }
    }), this.mapArrayTypeChildrenToProps(r, t);
  }
  render() {
    const { children: e, ...t } = this.props;
    let r = { ...t }, { helmetData: n } = t;
    if (e && (r = this.mapChildrenToProps(e, r)), n && !(n instanceof Eo)) {
      const o = n;
      n = new Eo(o.context, !0), delete r.helmetData;
    }
    return n ? /* @__PURE__ */ gt.createElement(ca, { ...r, context: n.value }) : /* @__PURE__ */ gt.createElement(Fs.Consumer, null, (o) => /* @__PURE__ */ gt.createElement(ca, { ...r, context: o }));
  }
}, ze(uo, "defaultProps", {
  defer: !0,
  encodeSpecialCharacters: !0,
  prioritizeSeoTags: !1
}), uo);
const Ls = ({
  title: e = "AI4U - Inteligencia Artificial para tu Negocio",
  description: t = "Soluciones de Inteligencia Artificial personalizadas para tu negocio. Automatización inteligente, GPT personalizado, SuperAI empresarial.",
  keywords: r = "inteligencia artificial, IA, automatización, GPT personalizado, SuperAI, AI empresarial, Colombia",
  canonical: n,
  ogImage: o = "/assets/images/ai4u-logo.png",
  ogType: i = "website",
  structuredData: a,
  noIndex: s = !1,
  noFollow: l = !1
}) => {
  const d = e.includes("AI4U") ? e : `${e} | AI4U`, f = n || window.location.href;
  return /* @__PURE__ */ v(Bf, { children: [
    /* @__PURE__ */ c("title", { children: d }),
    /* @__PURE__ */ c("meta", { name: "description", content: t }),
    /* @__PURE__ */ c("meta", { name: "keywords", content: r }),
    /* @__PURE__ */ c("meta", { name: "robots", content: s || l ? `${s ? "noindex" : "index"},${l ? "nofollow" : "follow"}` : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" }),
    /* @__PURE__ */ c("link", { rel: "canonical", href: f }),
    /* @__PURE__ */ c("meta", { property: "og:title", content: d }),
    /* @__PURE__ */ c("meta", { property: "og:description", content: t }),
    /* @__PURE__ */ c("meta", { property: "og:type", content: i }),
    /* @__PURE__ */ c("meta", { property: "og:url", content: f }),
    /* @__PURE__ */ c("meta", { property: "og:image", content: o }),
    /* @__PURE__ */ c("meta", { property: "og:site_name", content: "AI4U" }),
    /* @__PURE__ */ c("meta", { property: "og:locale", content: "es_CO" }),
    /* @__PURE__ */ c("meta", { property: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ c("meta", { property: "twitter:title", content: d }),
    /* @__PURE__ */ c("meta", { property: "twitter:description", content: t }),
    /* @__PURE__ */ c("meta", { property: "twitter:image", content: o }),
    /* @__PURE__ */ c("meta", { property: "twitter:site", content: "@ai4u_co" }),
    /* @__PURE__ */ c("meta", { property: "twitter:creator", content: "@ai4u_co" }),
    a && /* @__PURE__ */ c("script", { type: "application/ld+json", children: JSON.stringify(a) })
  ] });
}, $g = ({
  src: e,
  alt: t,
  width: r,
  height: n,
  sx: o,
  priority: i = !1,
  fallback: a
}) => {
  const [s, l] = ee(!1), [d, f] = ee(!1), [p, h] = ee(e), m = se(), x = () => {
    const D = document.createElement("canvas");
    return D.width = 1, D.height = 1, D.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }, u = (D) => D.includes("/assets/images/") ? D.replace(/\.(jpg|jpeg|png)$/i, ".webp") : D;
  $e(() => {
    x() && e.includes("/assets/images/") ? h(u(e)) : h(e);
  }, [e]);
  const w = () => {
    l(!0), f(!1);
  }, E = () => {
    p !== e && !d ? (h(e), f(!0)) : a && (h(a), f(!0));
  };
  return /* @__PURE__ */ v(b, { sx: { position: "relative", width: r, height: n }, children: [
    !s && /* @__PURE__ */ c(
      ae,
      {
        variant: "rectangular",
        width: r,
        height: n,
        sx: {
          borderRadius: 1,
          bgcolor: m.contrast.surface,
          ...o
        }
      }
    ),
    /* @__PURE__ */ c(
      "img",
      {
        src: p,
        alt: t,
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: s ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
          ...o
        },
        onLoad: w,
        onError: E,
        loading: i ? "eager" : "lazy"
      }
    )
  ] });
}, kg = ({
  imageName: e,
  alt: t,
  width: r = "100%",
  height: n = "auto",
  sx: o = {},
  skeletonHeight: i,
  skeletonWidth: a,
  priority: s = !1,
  size: l = "original",
  format: d = "webp",
  fallback: f,
  preload: p = !1,
  showOptimizationInfo: h = !1,
  className: m
}) => {
  const x = De(), {
    src: u,
    isLoaded: w,
    error: E,
    isLoading: D
  } = nf(e, {
    priority: s,
    size: l,
    format: d,
    fallback: f,
    preload: p
  }), _ = {
    bgcolor: x.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    borderRadius: 1
  };
  return /* @__PURE__ */ v(
    b,
    {
      className: m,
      sx: {
        position: "relative",
        width: r,
        height: n,
        overflow: "hidden",
        ...o
      },
      children: [
        D && /* @__PURE__ */ c(
          ae,
          {
            variant: "rectangular",
            width: a || r,
            height: i || n,
            sx: _
          }
        ),
        !E && /* @__PURE__ */ c(
          b,
          {
            component: "img",
            src: u,
            alt: t,
            loading: s ? "eager" : "lazy",
            sx: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: w ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
              display: w ? "block" : "none",
              // Optimizaciones específicas para PWA
              imageRendering: "auto",
              touchAction: "manipulation"
            }
          }
        ),
        E && /* @__PURE__ */ v(
          b,
          {
            sx: {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: x.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
              color: x.palette.text.secondary,
              fontSize: "0.875rem",
              flexDirection: "column",
              gap: 1
            },
            children: [
              /* @__PURE__ */ c(b, { component: "span", sx: { fontSize: "2rem" }, children: "IMG" }),
              /* @__PURE__ */ c(b, { component: "span", children: "Error al cargar imagen" }),
              h && /* @__PURE__ */ c(b, { component: "span", sx: { fontSize: "0.75rem", opacity: 0.7 }, children: e })
            ]
          }
        ),
        h && !1
      ]
    }
  );
}, Ig = ({
  criticalImages: e,
  importantImages: t,
  backgroundImages: r,
  onCriticalLoaded: n,
  onImportantLoaded: o,
  onAllLoaded: i,
  showProgress: a = !1
}) => {
  const { setCriticalImagesLoaded: s } = Rs(), [l, d] = ee("critical"), f = Xn(e), p = Xn(t), h = Xn(r);
  $e(() => {
    f.isComplete && (s(!0), n == null || n(), d("important"));
  }, [f.isComplete, s, n]), $e(() => {
    l === "important" && p.isComplete && (o == null || o(), d("background"));
  }, [l, p.isComplete, o]), $e(() => {
    l === "background" && h.isComplete && (i == null || i(), d("complete"));
  }, [l, h.isComplete, i]);
  const m = e.length + t.length + r.length, x = f.loadedImages.length + p.loadedImages.length + h.loadedImages.length, u = m > 0 ? x / m * 100 : 0;
  return a ? /* @__PURE__ */ v("div", { style: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    color: "white",
    fontFamily: "monospace"
  }, children: [
    /* @__PURE__ */ c("div", { style: { fontSize: "1.5rem", marginBottom: "2rem" }, children: "Cargando imágenes..." }),
    /* @__PURE__ */ c("div", { style: { width: "300px", marginBottom: "1rem" }, children: /* @__PURE__ */ c("div", { style: {
      width: "100%",
      height: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: "10px",
      overflow: "hidden"
    }, children: /* @__PURE__ */ c("div", { style: {
      width: `${u}%`,
      height: "100%",
      backgroundColor: "#4CAF50",
      transition: "width 0.3s ease"
    } }) }) }),
    /* @__PURE__ */ v("div", { style: { fontSize: "1rem", marginBottom: "0.5rem" }, children: [
      "Fase: ",
      l === "critical" ? "Críticas" : l === "important" ? "Importantes" : l === "background" ? "Fondo" : "Completado"
    ] }),
    /* @__PURE__ */ v("div", { style: { fontSize: "0.875rem", opacity: 0.8 }, children: [
      x,
      " / ",
      m,
      " imágenes cargadas"
    ] }),
    /* @__PURE__ */ v("div", { style: { fontSize: "0.75rem", opacity: 0.6, marginTop: "1rem" }, children: [
      /* @__PURE__ */ v("div", { children: [
        "Críticas: ",
        f.loadedImages.length,
        "/",
        e.length
      ] }),
      /* @__PURE__ */ v("div", { children: [
        "Importantes: ",
        p.loadedImages.length,
        "/",
        t.length
      ] }),
      /* @__PURE__ */ v("div", { children: [
        "Fondo: ",
        h.loadedImages.length,
        "/",
        r.length
      ] })
    ] })
  ] }) : null;
}, br = (e) => {
  const {
    to: t,
    variant: r = "subtle",
    trackingLabel: n,
    children: o,
    className: i,
    ariaLabel: a
  } = e, s = se();
  return /* @__PURE__ */ c(
    Ga,
    {
      component: Qt,
      to: t,
      onClick: () => {
        n && Xo.trackEvent({
          action: "internal_link_click",
          category: "navigation",
          label: n,
          custom_parameters: {
            from_page: window.location.pathname,
            to_page: t,
            link_variant: r
          }
        });
      },
      className: i,
      "aria-label": a,
      sx: (() => {
        switch (r) {
          case "accent":
            return {
              color: s.palette.accent,
              fontWeight: 400,
              textDecoration: "none",
              borderBottom: `1px solid ${s.palette.accent}`,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                color: s.palette.success,
                borderBottomColor: s.palette.success,
                transform: "translateY(-1px)"
              }
            };
          case "inline":
            return {
              color: "inherit",
              textDecoration: "underline",
              textDecorationColor: s.contrast.text.secondary,
              transition: "all 0.3s ease",
              "&:hover": {
                color: s.palette.accent,
                textDecorationColor: s.palette.accent
              }
            };
          case "subtle":
          default:
            return {
              color: s.contrast.text.secondary,
              textDecoration: "none",
              borderBottom: "1px solid transparent",
              transition: "all 0.3s ease",
              "&:hover": {
                color: s.palette.accent,
                borderBottomColor: s.palette.accent
              }
            };
        }
      })(),
      children: o
    }
  );
}, Wf = (e) => {
  const {
    variant: t = "separator",
    size: r = "small",
    className: n
  } = e, o = se(), i = () => {
    switch (r) {
      case "medium":
        return { width: 8, height: 8 };
      case "small":
      default:
        return { width: 4, height: 4 };
    }
  }, a = () => {
    switch (t) {
      case "active":
        return {
          backgroundColor: o.palette.success,
          opacity: 1
        };
      case "inactive":
        return {
          backgroundColor: o.contrast.text.secondary,
          opacity: 0.4
        };
      case "separator":
      default:
        return {
          backgroundColor: o.contrast.text.secondary,
          opacity: 0.3
        };
    }
  };
  return /* @__PURE__ */ c(
    b,
    {
      className: n,
      sx: {
        ...i(),
        borderRadius: "50%",
        ...a(),
        flexShrink: 0,
        transition: "all 0.3s ease"
      }
    }
  );
}, Ag = ({
  serviceId: e,
  serviceColor: t,
  size: r = "medium",
  className: n,
  customThumbnail: o
}) => {
  const i = se(), s = {
    small: { width: 80, height: 80 },
    medium: { width: 120, height: 120 },
    large: { width: 160, height: 160 },
    "full-width": { width: "100%", height: "auto", aspectRatio: "1/1" }
  }[r], l = t || i.palette.accent, f = ((p) => {
    const h = p.split("").reduce((x, u) => x + u.charCodeAt(0), 0), m = [
      // Patrón de círculos
      `<circle cx="30%" cy="30%" r="8" fill="${l}40"/>
       <circle cx="70%" cy="70%" r="12" fill="${l}60"/>
       <circle cx="20%" cy="80%" r="6" fill="${l}80"/>`,
      // Patrón de cuadrados
      `<rect x="20%" y="20%" width="25%" height="25%" fill="${l}40" rx="2"/>
       <rect x="60%" y="60%" width="30%" height="30%" fill="${l}60" rx="2"/>
       <rect x="10%" y="70%" width="20%" height="20%" fill="${l}80" rx="2"/>`,
      // Patrón de triángulos
      `<polygon points="30,20 50,40 10,40" fill="${l}40"/>
       <polygon points="70,60 90,80 50,80" fill="${l}60"/>
       <polygon points="20,70 30,90 10,90" fill="${l}80"/>`,
      // Patrón de líneas
      `<line x1="20%" y1="30%" x2="80%" y2="30%" stroke="${l}60" stroke-width="3"/>
       <line x1="30%" y1="60%" x2="90%" y2="60%" stroke="${l}40" stroke-width="2"/>
       <line x1="10%" y1="80%" x2="70%" y2="80%" stroke="${l}80" stroke-width="4"/>`
    ];
    return m[h % m.length];
  })(e);
  return o ? /* @__PURE__ */ v(
    b,
    {
      className: n,
      sx: {
        width: s.width,
        height: s.height,
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
        border: `1px solid ${l}20`,
        transition: "all 0.3s ease",
        ...r !== "full-width" && {
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: `0 8px 25px ${l}30`,
            borderColor: `${l}40`
          }
        }
      },
      children: [
        /* @__PURE__ */ c(
          "img",
          {
            src: o,
            alt: `Thumbnail para ${e}`,
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px"
            }
          }
        ),
        /* @__PURE__ */ c(
          b,
          {
            sx: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(135deg, ${l}10 0%, transparent 100%)`,
              pointerEvents: "none"
            }
          }
        )
      ]
    }
  ) : /* @__PURE__ */ v(
    b,
    {
      className: n,
      sx: {
        width: s.width,
        height: s.height,
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
        background: `linear-gradient(135deg, ${l}10 0%, ${l}05 100%)`,
        border: `1px solid ${l}20`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        ...r !== "full-width" && {
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: `0 8px 25px ${l}30`,
            borderColor: `${l}40`
          }
        }
      },
      children: [
        /* @__PURE__ */ v(
          "svg",
          {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            xmlns: "http://www.w3.org/2000/svg",
            style: {
              position: "absolute",
              top: 0,
              left: 0
            },
            children: [
              /* @__PURE__ */ c("defs", { children: /* @__PURE__ */ v("linearGradient", { id: `gradient-${e}`, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
                /* @__PURE__ */ c("stop", { offset: "0%", stopColor: `${l}20` }),
                /* @__PURE__ */ c("stop", { offset: "100%", stopColor: `${l}10` })
              ] }) }),
              /* @__PURE__ */ c("rect", { width: "100%", height: "100%", fill: `url(#gradient-${e})` }),
              /* @__PURE__ */ c("g", { dangerouslySetInnerHTML: { __html: f } }),
              /* @__PURE__ */ c(
                "rect",
                {
                  width: "100%",
                  height: "100%",
                  fill: "none",
                  stroke: `${l}30`,
                  strokeWidth: "0.5",
                  strokeDasharray: "2,2"
                }
              )
            ]
          }
        ),
        r === "large" && /* @__PURE__ */ c(
          b,
          {
            sx: {
              position: "absolute",
              bottom: 8,
              left: 8,
              right: 8,
              textAlign: "center",
              zIndex: 2
            },
            children: /* @__PURE__ */ c(
              b,
              {
                sx: {
                  fontSize: "0.6rem",
                  fontWeight: 400,
                  color: l,
                  textTransform: "none",
                  letterSpacing: "0.5px",
                  background: "rgba(255,255,255,0.9)",
                  padding: "2px 6px",
                  borderRadius: 1,
                  backdropFilter: "blur(4px)"
                },
                children: e.split("-").slice(0, 2).join(" ")
              }
            )
          }
        )
      ]
    }
  );
}, Og = ({
  children: e,
  numberVariant: t = "primary",
  sx: r,
  ...n
}) => /* @__PURE__ */ c(
  b,
  {
    ...n,
    sx: {
      ...oe.display.number,
      display: "inline-block",
      ...t === "outline" && {
        color: "transparent",
        WebkitTextStroke: (o) => `2px ${o.palette.mode === "light" ? "#000" : "#fff"}`
      },
      ...r
    },
    children: e
  }
);
var ko = { exports: {} }, ge = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var la;
function jf() {
  if (la) return ge;
  la = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), m = Symbol.for("react.client.reference");
  function x(u) {
    if (typeof u == "object" && u !== null) {
      var w = u.$$typeof;
      switch (w) {
        case e:
          switch (u = u.type, u) {
            case r:
            case o:
            case n:
            case l:
            case d:
            case h:
              return u;
            default:
              switch (u = u && u.$$typeof, u) {
                case a:
                case s:
                case p:
                case f:
                  return u;
                case i:
                  return u;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return ge.ContextConsumer = i, ge.ContextProvider = a, ge.Element = e, ge.ForwardRef = s, ge.Fragment = r, ge.Lazy = p, ge.Memo = f, ge.Portal = t, ge.Profiler = o, ge.StrictMode = n, ge.Suspense = l, ge.SuspenseList = d, ge.isContextConsumer = function(u) {
    return x(u) === i;
  }, ge.isContextProvider = function(u) {
    return x(u) === a;
  }, ge.isElement = function(u) {
    return typeof u == "object" && u !== null && u.$$typeof === e;
  }, ge.isForwardRef = function(u) {
    return x(u) === s;
  }, ge.isFragment = function(u) {
    return x(u) === r;
  }, ge.isLazy = function(u) {
    return x(u) === p;
  }, ge.isMemo = function(u) {
    return x(u) === f;
  }, ge.isPortal = function(u) {
    return x(u) === t;
  }, ge.isProfiler = function(u) {
    return x(u) === o;
  }, ge.isStrictMode = function(u) {
    return x(u) === n;
  }, ge.isSuspense = function(u) {
    return x(u) === l;
  }, ge.isSuspenseList = function(u) {
    return x(u) === d;
  }, ge.isValidElementType = function(u) {
    return typeof u == "string" || typeof u == "function" || u === r || u === o || u === n || u === l || u === d || typeof u == "object" && u !== null && (u.$$typeof === p || u.$$typeof === f || u.$$typeof === a || u.$$typeof === i || u.$$typeof === s || u.$$typeof === m || u.getModuleId !== void 0);
  }, ge.typeOf = x, ge;
}
var ye = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var da;
function Vf() {
  return da || (da = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (typeof u == "object" && u !== null) {
        var w = u.$$typeof;
        switch (w) {
          case t:
            switch (u = u.type, u) {
              case n:
              case i:
              case o:
              case d:
              case f:
              case m:
                return u;
              default:
                switch (u = u && u.$$typeof, u) {
                  case s:
                  case l:
                  case h:
                  case p:
                    return u;
                  case a:
                    return u;
                  default:
                    return w;
                }
            }
          case r:
            return w;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.view_transition"), x = Symbol.for("react.client.reference");
    ye.ContextConsumer = a, ye.ContextProvider = s, ye.Element = t, ye.ForwardRef = l, ye.Fragment = n, ye.Lazy = h, ye.Memo = p, ye.Portal = r, ye.Profiler = i, ye.StrictMode = o, ye.Suspense = d, ye.SuspenseList = f, ye.isContextConsumer = function(u) {
      return e(u) === a;
    }, ye.isContextProvider = function(u) {
      return e(u) === s;
    }, ye.isElement = function(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }, ye.isForwardRef = function(u) {
      return e(u) === l;
    }, ye.isFragment = function(u) {
      return e(u) === n;
    }, ye.isLazy = function(u) {
      return e(u) === h;
    }, ye.isMemo = function(u) {
      return e(u) === p;
    }, ye.isPortal = function(u) {
      return e(u) === r;
    }, ye.isProfiler = function(u) {
      return e(u) === i;
    }, ye.isStrictMode = function(u) {
      return e(u) === o;
    }, ye.isSuspense = function(u) {
      return e(u) === d;
    }, ye.isSuspenseList = function(u) {
      return e(u) === f;
    }, ye.isValidElementType = function(u) {
      return typeof u == "string" || typeof u == "function" || u === n || u === i || u === o || u === d || u === f || typeof u == "object" && u !== null && (u.$$typeof === h || u.$$typeof === p || u.$$typeof === s || u.$$typeof === a || u.$$typeof === l || u.$$typeof === x || u.getModuleId !== void 0);
    }, ye.typeOf = e;
  }()), ye;
}
process.env.NODE_ENV === "production" ? ko.exports = jf() : ko.exports = Vf();
var Zr = ko.exports;
function ht(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Bs(e) {
  if (/* @__PURE__ */ Z.isValidElement(e) || Zr.isValidElementType(e) || !ht(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Bs(e[r]);
  }), t;
}
function qe(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return ht(e) && ht(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ Z.isValidElement(t[o]) || Zr.isValidElementType(t[o]) ? n[o] = t[o] : ht(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && ht(e[o]) ? n[o] = qe(e[o], t[o], r) : r.clone ? n[o] = ht(t[o]) ? Bs(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
var Io = { exports: {} }, Fr = { exports: {} }, de = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ua;
function Uf() {
  if (ua) return de;
  ua = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function _(S) {
    if (typeof S == "object" && S !== null) {
      var P = S.$$typeof;
      switch (P) {
        case t:
          switch (S = S.type, S) {
            case l:
            case d:
            case n:
            case i:
            case o:
            case p:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case s:
                case f:
                case x:
                case m:
                case a:
                  return S;
                default:
                  return P;
              }
          }
        case r:
          return P;
      }
    }
  }
  function O(S) {
    return _(S) === d;
  }
  return de.AsyncMode = l, de.ConcurrentMode = d, de.ContextConsumer = s, de.ContextProvider = a, de.Element = t, de.ForwardRef = f, de.Fragment = n, de.Lazy = x, de.Memo = m, de.Portal = r, de.Profiler = i, de.StrictMode = o, de.Suspense = p, de.isAsyncMode = function(S) {
    return O(S) || _(S) === l;
  }, de.isConcurrentMode = O, de.isContextConsumer = function(S) {
    return _(S) === s;
  }, de.isContextProvider = function(S) {
    return _(S) === a;
  }, de.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === t;
  }, de.isForwardRef = function(S) {
    return _(S) === f;
  }, de.isFragment = function(S) {
    return _(S) === n;
  }, de.isLazy = function(S) {
    return _(S) === x;
  }, de.isMemo = function(S) {
    return _(S) === m;
  }, de.isPortal = function(S) {
    return _(S) === r;
  }, de.isProfiler = function(S) {
    return _(S) === i;
  }, de.isStrictMode = function(S) {
    return _(S) === o;
  }, de.isSuspense = function(S) {
    return _(S) === p;
  }, de.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === n || S === d || S === i || S === o || S === p || S === h || typeof S == "object" && S !== null && (S.$$typeof === x || S.$$typeof === m || S.$$typeof === a || S.$$typeof === s || S.$$typeof === f || S.$$typeof === w || S.$$typeof === E || S.$$typeof === D || S.$$typeof === u);
  }, de.typeOf = _, de;
}
var ue = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fa;
function Hf() {
  return fa || (fa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, u = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, E = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function _($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === n || $ === d || $ === i || $ === o || $ === p || $ === h || typeof $ == "object" && $ !== null && ($.$$typeof === x || $.$$typeof === m || $.$$typeof === a || $.$$typeof === s || $.$$typeof === f || $.$$typeof === w || $.$$typeof === E || $.$$typeof === D || $.$$typeof === u);
    }
    function O($) {
      if (typeof $ == "object" && $ !== null) {
        var Ce = $.$$typeof;
        switch (Ce) {
          case t:
            var Ke = $.type;
            switch (Ke) {
              case l:
              case d:
              case n:
              case i:
              case o:
              case p:
                return Ke;
              default:
                var xt = Ke && Ke.$$typeof;
                switch (xt) {
                  case s:
                  case f:
                  case x:
                  case m:
                  case a:
                    return xt;
                  default:
                    return Ce;
                }
            }
          case r:
            return Ce;
        }
      }
    }
    var S = l, P = d, Q = s, G = a, j = t, y = f, R = n, g = x, N = m, M = r, X = i, J = o, re = p, ke = !1;
    function We($) {
      return ke || (ke = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), C($) || O($) === l;
    }
    function C($) {
      return O($) === d;
    }
    function k($) {
      return O($) === s;
    }
    function z($) {
      return O($) === a;
    }
    function L($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function F($) {
      return O($) === f;
    }
    function V($) {
      return O($) === n;
    }
    function W($) {
      return O($) === x;
    }
    function B($) {
      return O($) === m;
    }
    function U($) {
      return O($) === r;
    }
    function q($) {
      return O($) === i;
    }
    function H($) {
      return O($) === o;
    }
    function ie($) {
      return O($) === p;
    }
    ue.AsyncMode = S, ue.ConcurrentMode = P, ue.ContextConsumer = Q, ue.ContextProvider = G, ue.Element = j, ue.ForwardRef = y, ue.Fragment = R, ue.Lazy = g, ue.Memo = N, ue.Portal = M, ue.Profiler = X, ue.StrictMode = J, ue.Suspense = re, ue.isAsyncMode = We, ue.isConcurrentMode = C, ue.isContextConsumer = k, ue.isContextProvider = z, ue.isElement = L, ue.isForwardRef = F, ue.isFragment = V, ue.isLazy = W, ue.isMemo = B, ue.isPortal = U, ue.isProfiler = q, ue.isStrictMode = H, ue.isSuspense = ie, ue.isValidElementType = _, ue.typeOf = O;
  }()), ue;
}
var pa;
function Ws() {
  return pa || (pa = 1, process.env.NODE_ENV === "production" ? Fr.exports = Uf() : Fr.exports = Hf()), Fr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var eo, ma;
function Gf() {
  if (ma) return eo;
  ma = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(a).map(function(f) {
        return a[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        d[f] = f;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return eo = o() ? Object.assign : function(i, a) {
    for (var s, l = n(i), d, f = 1; f < arguments.length; f++) {
      s = Object(arguments[f]);
      for (var p in s)
        t.call(s, p) && (l[p] = s[p]);
      if (e) {
        d = e(s);
        for (var h = 0; h < d.length; h++)
          r.call(s, d[h]) && (l[d[h]] = s[d[h]]);
      }
    }
    return l;
  }, eo;
}
var to, ha;
function Zo() {
  if (ha) return to;
  ha = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return to = e, to;
}
var ro, ga;
function js() {
  return ga || (ga = 1, ro = Function.call.bind(Object.prototype.hasOwnProperty)), ro;
}
var no, ya;
function Yf() {
  if (ya) return no;
  ya = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Zo(), r = {}, n = js();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, l, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (n(i, f)) {
          var p;
          try {
            if (typeof i[f] != "function") {
              var h = Error(
                (l || "React class") + ": " + s + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            p = i[f](a, f, l, s, null, t);
          } catch (x) {
            p = x;
          }
          if (p && !(p instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var m = d ? d() : "";
            e(
              "Failed " + s + " type: " + p.message + (m ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, no = o, no;
}
var oo, ba;
function qf() {
  if (ba) return oo;
  ba = 1;
  var e = Ws(), t = Gf(), r = Zo(), n = js(), o = Yf(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return oo = function(s, l) {
    var d = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function p(C) {
      var k = C && (d && C[d] || C[f]);
      if (typeof k == "function")
        return k;
    }
    var h = "<<anonymous>>", m = {
      array: E("array"),
      bigint: E("bigint"),
      bool: E("boolean"),
      func: E("function"),
      number: E("number"),
      object: E("object"),
      string: E("string"),
      symbol: E("symbol"),
      any: D(),
      arrayOf: _,
      element: O(),
      elementType: S(),
      instanceOf: P,
      node: y(),
      objectOf: G,
      oneOf: Q,
      oneOfType: j,
      shape: g,
      exact: N
    };
    function x(C, k) {
      return C === k ? C !== 0 || 1 / C === 1 / k : C !== C && k !== k;
    }
    function u(C, k) {
      this.message = C, this.data = k && typeof k == "object" ? k : {}, this.stack = "";
    }
    u.prototype = Error.prototype;
    function w(C) {
      if (process.env.NODE_ENV !== "production")
        var k = {}, z = 0;
      function L(V, W, B, U, q, H, ie) {
        if (U = U || h, H = H || B, ie !== r) {
          if (l) {
            var $ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw $.name = "Invariant Violation", $;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ce = U + ":" + B;
            !k[Ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + H + "` prop on `" + U + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), k[Ce] = !0, z++);
          }
        }
        return W[B] == null ? V ? W[B] === null ? new u("The " + q + " `" + H + "` is marked as required " + ("in `" + U + "`, but its value is `null`.")) : new u("The " + q + " `" + H + "` is marked as required in " + ("`" + U + "`, but its value is `undefined`.")) : null : C(W, B, U, q, H);
      }
      var F = L.bind(null, !1);
      return F.isRequired = L.bind(null, !0), F;
    }
    function E(C) {
      function k(z, L, F, V, W, B) {
        var U = z[L], q = J(U);
        if (q !== C) {
          var H = re(U);
          return new u(
            "Invalid " + V + " `" + W + "` of type " + ("`" + H + "` supplied to `" + F + "`, expected ") + ("`" + C + "`."),
            { expectedType: C }
          );
        }
        return null;
      }
      return w(k);
    }
    function D() {
      return w(a);
    }
    function _(C) {
      function k(z, L, F, V, W) {
        if (typeof C != "function")
          return new u("Property `" + W + "` of component `" + F + "` has invalid PropType notation inside arrayOf.");
        var B = z[L];
        if (!Array.isArray(B)) {
          var U = J(B);
          return new u("Invalid " + V + " `" + W + "` of type " + ("`" + U + "` supplied to `" + F + "`, expected an array."));
        }
        for (var q = 0; q < B.length; q++) {
          var H = C(B, q, F, V, W + "[" + q + "]", r);
          if (H instanceof Error)
            return H;
        }
        return null;
      }
      return w(k);
    }
    function O() {
      function C(k, z, L, F, V) {
        var W = k[z];
        if (!s(W)) {
          var B = J(W);
          return new u("Invalid " + F + " `" + V + "` of type " + ("`" + B + "` supplied to `" + L + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(C);
    }
    function S() {
      function C(k, z, L, F, V) {
        var W = k[z];
        if (!e.isValidElementType(W)) {
          var B = J(W);
          return new u("Invalid " + F + " `" + V + "` of type " + ("`" + B + "` supplied to `" + L + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(C);
    }
    function P(C) {
      function k(z, L, F, V, W) {
        if (!(z[L] instanceof C)) {
          var B = C.name || h, U = We(z[L]);
          return new u("Invalid " + V + " `" + W + "` of type " + ("`" + U + "` supplied to `" + F + "`, expected ") + ("instance of `" + B + "`."));
        }
        return null;
      }
      return w(k);
    }
    function Q(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function k(z, L, F, V, W) {
        for (var B = z[L], U = 0; U < C.length; U++)
          if (x(B, C[U]))
            return null;
        var q = JSON.stringify(C, function(ie, $) {
          var Ce = re($);
          return Ce === "symbol" ? String($) : $;
        });
        return new u("Invalid " + V + " `" + W + "` of value `" + String(B) + "` " + ("supplied to `" + F + "`, expected one of " + q + "."));
      }
      return w(k);
    }
    function G(C) {
      function k(z, L, F, V, W) {
        if (typeof C != "function")
          return new u("Property `" + W + "` of component `" + F + "` has invalid PropType notation inside objectOf.");
        var B = z[L], U = J(B);
        if (U !== "object")
          return new u("Invalid " + V + " `" + W + "` of type " + ("`" + U + "` supplied to `" + F + "`, expected an object."));
        for (var q in B)
          if (n(B, q)) {
            var H = C(B, q, F, V, W + "." + q, r);
            if (H instanceof Error)
              return H;
          }
        return null;
      }
      return w(k);
    }
    function j(C) {
      if (!Array.isArray(C))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var k = 0; k < C.length; k++) {
        var z = C[k];
        if (typeof z != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ke(z) + " at index " + k + "."
          ), a;
      }
      function L(F, V, W, B, U) {
        for (var q = [], H = 0; H < C.length; H++) {
          var ie = C[H], $ = ie(F, V, W, B, U, r);
          if ($ == null)
            return null;
          $.data && n($.data, "expectedType") && q.push($.data.expectedType);
        }
        var Ce = q.length > 0 ? ", expected one of type [" + q.join(", ") + "]" : "";
        return new u("Invalid " + B + " `" + U + "` supplied to " + ("`" + W + "`" + Ce + "."));
      }
      return w(L);
    }
    function y() {
      function C(k, z, L, F, V) {
        return M(k[z]) ? null : new u("Invalid " + F + " `" + V + "` supplied to " + ("`" + L + "`, expected a ReactNode."));
      }
      return w(C);
    }
    function R(C, k, z, L, F) {
      return new u(
        (C || "React class") + ": " + k + " type `" + z + "." + L + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + F + "`."
      );
    }
    function g(C) {
      function k(z, L, F, V, W) {
        var B = z[L], U = J(B);
        if (U !== "object")
          return new u("Invalid " + V + " `" + W + "` of type `" + U + "` " + ("supplied to `" + F + "`, expected `object`."));
        for (var q in C) {
          var H = C[q];
          if (typeof H != "function")
            return R(F, V, W, q, re(H));
          var ie = H(B, q, F, V, W + "." + q, r);
          if (ie)
            return ie;
        }
        return null;
      }
      return w(k);
    }
    function N(C) {
      function k(z, L, F, V, W) {
        var B = z[L], U = J(B);
        if (U !== "object")
          return new u("Invalid " + V + " `" + W + "` of type `" + U + "` " + ("supplied to `" + F + "`, expected `object`."));
        var q = t({}, z[L], C);
        for (var H in q) {
          var ie = C[H];
          if (n(C, H) && typeof ie != "function")
            return R(F, V, W, H, re(ie));
          if (!ie)
            return new u(
              "Invalid " + V + " `" + W + "` key `" + H + "` supplied to `" + F + "`.\nBad object: " + JSON.stringify(z[L], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(C), null, "  ")
            );
          var $ = ie(B, H, F, V, W + "." + H, r);
          if ($)
            return $;
        }
        return null;
      }
      return w(k);
    }
    function M(C) {
      switch (typeof C) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !C;
        case "object":
          if (Array.isArray(C))
            return C.every(M);
          if (C === null || s(C))
            return !0;
          var k = p(C);
          if (k) {
            var z = k.call(C), L;
            if (k !== C.entries) {
              for (; !(L = z.next()).done; )
                if (!M(L.value))
                  return !1;
            } else
              for (; !(L = z.next()).done; ) {
                var F = L.value;
                if (F && !M(F[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function X(C, k) {
      return C === "symbol" ? !0 : k ? k["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && k instanceof Symbol : !1;
    }
    function J(C) {
      var k = typeof C;
      return Array.isArray(C) ? "array" : C instanceof RegExp ? "object" : X(k, C) ? "symbol" : k;
    }
    function re(C) {
      if (typeof C > "u" || C === null)
        return "" + C;
      var k = J(C);
      if (k === "object") {
        if (C instanceof Date)
          return "date";
        if (C instanceof RegExp)
          return "regexp";
      }
      return k;
    }
    function ke(C) {
      var k = re(C);
      switch (k) {
        case "array":
        case "object":
          return "an " + k;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + k;
        default:
          return k;
      }
    }
    function We(C) {
      return !C.constructor || !C.constructor.name ? h : C.constructor.name;
    }
    return m.checkPropTypes = o, m.resetWarningCache = o.resetWarningCache, m.PropTypes = m, m;
  }, oo;
}
var io, xa;
function Kf() {
  if (xa) return io;
  xa = 1;
  var e = Zo();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, io = function() {
    function n(a, s, l, d, f, p) {
      if (p !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, io;
}
if (process.env.NODE_ENV !== "production") {
  var Xf = Ws(), Qf = !0;
  Io.exports = qf()(Xf.isElement, Qf);
} else
  Io.exports = Kf()();
var Jf = Io.exports;
const ne = /* @__PURE__ */ Ir(Jf);
function $t(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function Vs(e, t = "") {
  return e.displayName || e.name || t;
}
function va(e, t, r) {
  const n = Vs(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Zf(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Vs(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Zr.ForwardRef:
          return va(e, e.render, "ForwardRef");
        case Zr.Memo:
          return va(e, e.type, "memo");
        default:
          return;
      }
  }
}
function zt(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : $t(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ao(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], a = t[o];
        if (!a)
          r[o] = i || {};
        else if (!i)
          r[o] = a;
        else {
          r[o] = {
            ...a
          };
          for (const s in i)
            if (Object.prototype.hasOwnProperty.call(i, s)) {
              const l = s;
              r[o][l] = Ao(i[l], a[l]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function ep(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", s = !0;
    for (let l = 0; l < i.length; l += 1) {
      const d = i[l];
      d && (a += (s === !0 ? "" : " ") + t(d), s = !1, r && r[d] && (a += " " + r[d]));
    }
    n[o] = a;
  }
  return n;
}
const Sa = (e) => e, tp = () => {
  let e = Sa;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Sa;
    }
  };
}, rp = tp(), np = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function ei(e, t, r = "Mui") {
  const n = np[t];
  return n ? `${r}-${n}` : `${rp.generate(e)}-${t}`;
}
function op(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = ei(e, o, r);
  }), n;
}
function ip(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Us(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Us(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ap() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Us(e)) && (n && (n += " "), n += t);
  return n;
}
function xr(e, t) {
  return t ? qe(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const At = process.env.NODE_ENV !== "production" ? ne.oneOfType([ne.number, ne.string, ne.object, ne.array]) : {};
function Ca(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, s;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((s = o.match(i)) == null ? void 0 : s[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function sp(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function cp(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : $t(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function lp(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...s) => t(e.breakpoints.up(...s), a), i.down = (...s) => t(e.breakpoints.down(...s), a), i.between = (...s) => t(e.breakpoints.between(...s), a), i.only = (...s) => t(e.breakpoints.only(...s), a), i.not = (...s) => {
      const l = t(e.breakpoints.not(...s), a);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Tn = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, wa = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Tn[e]}px)`
}, dp = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Tn[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function bt(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || wa;
    return t.reduce((a, s, l) => (a[i.up(i.keys[l])] = r(t[l]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || wa;
    return Object.keys(t).reduce((a, s) => {
      if (sp(i.keys, s)) {
        const l = cp(n.containerQueries ? n : dp, s);
        l && (a[l] = r(t[s], s));
      } else if (Object.keys(i.values || Tn).includes(s)) {
        const l = i.up(s);
        a[l] = r(t[s], s);
      } else {
        const l = s;
        a[l] = t[l];
      }
      return a;
    }, {});
  }
  return r(t);
}
function up(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Ta(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function En(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function en(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = En(e, r) || n, t && (o = t(o, n, e)), o;
}
function Me(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], l = a.theme, d = En(l, n) || {};
    return bt(a, s, (p) => {
      let h = en(d, o, p);
      return p === h && typeof p == "string" && (h = en(d, o, `${t}${p === "default" ? "" : zt(p)}`, p)), r === !1 ? h : {
        [r]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: At
  } : {}, i.filterProps = [t], i;
}
function fp(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const pp = {
  m: "margin",
  p: "padding"
}, mp = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Ea = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, hp = fp((e) => {
  if (e.length > 2)
    if (Ea[e])
      e = Ea[e];
    else
      return [e];
  const [t, r] = e.split(""), n = pp[t], o = mp[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), $n = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], kn = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], gp = [...$n, ...kn];
function _r(e, t, r, n) {
  const o = En(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const s = o[a];
    return i >= 0 ? s : typeof s == "number" ? -s : `-${s}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function ti(e) {
  return _r(e, "spacing", 8, "spacing");
}
function Rr(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function yp(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Rr(t, r), n), {});
}
function bp(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = hp(r), i = yp(o, n), a = e[r];
  return bt(e, a, i);
}
function Hs(e, t) {
  const r = ti(e.theme);
  return Object.keys(e).map((n) => bp(e, t, n, r)).reduce(xr, {});
}
function Oe(e) {
  return Hs(e, $n);
}
Oe.propTypes = process.env.NODE_ENV !== "production" ? $n.reduce((e, t) => (e[t] = At, e), {}) : {};
Oe.filterProps = $n;
function _e(e) {
  return Hs(e, kn);
}
_e.propTypes = process.env.NODE_ENV !== "production" ? kn.reduce((e, t) => (e[t] = At, e), {}) : {};
_e.filterProps = kn;
process.env.NODE_ENV !== "production" && gp.reduce((e, t) => (e[t] = At, e), {});
function In(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? xr(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Ze(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function nt(e, t) {
  return Me({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const xp = nt("border", Ze), vp = nt("borderTop", Ze), Sp = nt("borderRight", Ze), Cp = nt("borderBottom", Ze), wp = nt("borderLeft", Ze), Tp = nt("borderColor"), Ep = nt("borderTopColor"), $p = nt("borderRightColor"), kp = nt("borderBottomColor"), Ip = nt("borderLeftColor"), Ap = nt("outline", Ze), Op = nt("outlineColor"), An = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = _r(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Rr(t, n)
    });
    return bt(e, e.borderRadius, r);
  }
  return null;
};
An.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: At
} : {};
An.filterProps = ["borderRadius"];
In(xp, vp, Sp, Cp, wp, Tp, Ep, $p, kp, Ip, An, Ap, Op);
const On = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = _r(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Rr(t, n)
    });
    return bt(e, e.gap, r);
  }
  return null;
};
On.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: At
} : {};
On.filterProps = ["gap"];
const _n = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = _r(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Rr(t, n)
    });
    return bt(e, e.columnGap, r);
  }
  return null;
};
_n.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: At
} : {};
_n.filterProps = ["columnGap"];
const Rn = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = _r(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Rr(t, n)
    });
    return bt(e, e.rowGap, r);
  }
  return null;
};
Rn.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: At
} : {};
Rn.filterProps = ["rowGap"];
const _p = Me({
  prop: "gridColumn"
}), Rp = Me({
  prop: "gridRow"
}), Pp = Me({
  prop: "gridAutoFlow"
}), Mp = Me({
  prop: "gridAutoColumns"
}), Dp = Me({
  prop: "gridAutoRows"
}), Np = Me({
  prop: "gridTemplateColumns"
}), zp = Me({
  prop: "gridTemplateRows"
}), Fp = Me({
  prop: "gridTemplateAreas"
}), Lp = Me({
  prop: "gridArea"
});
In(On, _n, Rn, _p, Rp, Pp, Mp, Dp, Np, zp, Fp, Lp);
function rr(e, t) {
  return t === "grey" ? t : e;
}
const Bp = Me({
  prop: "color",
  themeKey: "palette",
  transform: rr
}), Wp = Me({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: rr
}), jp = Me({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: rr
});
In(Bp, Wp, jp);
function Ye(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Vp = Me({
  prop: "width",
  transform: Ye
}), ri = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, s, l;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || Tn[r];
      return n ? ((l = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Ye(r)
      };
    };
    return bt(e, e.maxWidth, t);
  }
  return null;
};
ri.filterProps = ["maxWidth"];
const Up = Me({
  prop: "minWidth",
  transform: Ye
}), Hp = Me({
  prop: "height",
  transform: Ye
}), Gp = Me({
  prop: "maxHeight",
  transform: Ye
}), Yp = Me({
  prop: "minHeight",
  transform: Ye
});
Me({
  prop: "size",
  cssProperty: "width",
  transform: Ye
});
Me({
  prop: "size",
  cssProperty: "height",
  transform: Ye
});
const qp = Me({
  prop: "boxSizing"
});
In(Vp, ri, Up, Hp, Gp, Yp, qp);
const Pn = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ze
  },
  borderTop: {
    themeKey: "borders",
    transform: Ze
  },
  borderRight: {
    themeKey: "borders",
    transform: Ze
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ze
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ze
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Ze
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: An
  },
  // palette
  color: {
    themeKey: "palette",
    transform: rr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: rr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: rr
  },
  // spacing
  p: {
    style: _e
  },
  pt: {
    style: _e
  },
  pr: {
    style: _e
  },
  pb: {
    style: _e
  },
  pl: {
    style: _e
  },
  px: {
    style: _e
  },
  py: {
    style: _e
  },
  padding: {
    style: _e
  },
  paddingTop: {
    style: _e
  },
  paddingRight: {
    style: _e
  },
  paddingBottom: {
    style: _e
  },
  paddingLeft: {
    style: _e
  },
  paddingX: {
    style: _e
  },
  paddingY: {
    style: _e
  },
  paddingInline: {
    style: _e
  },
  paddingInlineStart: {
    style: _e
  },
  paddingInlineEnd: {
    style: _e
  },
  paddingBlock: {
    style: _e
  },
  paddingBlockStart: {
    style: _e
  },
  paddingBlockEnd: {
    style: _e
  },
  m: {
    style: Oe
  },
  mt: {
    style: Oe
  },
  mr: {
    style: Oe
  },
  mb: {
    style: Oe
  },
  ml: {
    style: Oe
  },
  mx: {
    style: Oe
  },
  my: {
    style: Oe
  },
  margin: {
    style: Oe
  },
  marginTop: {
    style: Oe
  },
  marginRight: {
    style: Oe
  },
  marginBottom: {
    style: Oe
  },
  marginLeft: {
    style: Oe
  },
  marginX: {
    style: Oe
  },
  marginY: {
    style: Oe
  },
  marginInline: {
    style: Oe
  },
  marginInlineStart: {
    style: Oe
  },
  marginInlineEnd: {
    style: Oe
  },
  marginBlock: {
    style: Oe
  },
  marginBlockStart: {
    style: Oe
  },
  marginBlockEnd: {
    style: Oe
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: On
  },
  rowGap: {
    style: Rn
  },
  columnGap: {
    style: _n
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Ye
  },
  maxWidth: {
    style: ri
  },
  minWidth: {
    transform: Ye
  },
  height: {
    transform: Ye
  },
  maxHeight: {
    transform: Ye
  },
  minHeight: {
    transform: Ye
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Kp(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Xp(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Qp() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, s = i[r];
    if (!s)
      return {
        [r]: n
      };
    const {
      cssProperty: l = r,
      themeKey: d,
      transform: f,
      style: p
    } = s;
    if (n == null)
      return null;
    if (d === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const h = En(o, d) || {};
    return p ? p(a) : bt(a, n, (x) => {
      let u = en(h, f, x);
      return x === u && typeof x == "string" && (u = en(h, f, `${r}${x === "default" ? "" : zt(x)}`, x)), l === !1 ? u : {
        [l]: u
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {},
      nested: i
    } = r || {};
    if (!n)
      return null;
    const a = o.unstable_sxConfig ?? Pn;
    function s(l) {
      let d = l;
      if (typeof l == "function")
        d = l(o);
      else if (typeof l != "object")
        return l;
      if (!d)
        return null;
      const f = up(o.breakpoints), p = Object.keys(f);
      let h = f;
      return Object.keys(d).forEach((m) => {
        const x = Xp(d[m], o);
        if (x != null)
          if (typeof x == "object")
            if (a[m])
              h = xr(h, e(m, x, o, a));
            else {
              const u = bt({
                theme: o
              }, x, (w) => ({
                [m]: w
              }));
              Kp(u, x) ? h[m] = t({
                sx: x,
                theme: o,
                nested: !0
              }) : h = xr(h, u);
            }
          else
            h = xr(h, e(m, x, o, a));
      }), !i && o.modularCssLayers ? {
        "@layer sx": Ca(o, Ta(p, h))
      } : Ca(o, Ta(p, h));
    }
    return Array.isArray(n) ? n.map(s) : s(n);
  }
  return t;
}
const ar = Qp();
ar.filterProps = ["sx"];
function Jp(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Zp = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function em(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var tm = /[A-Z]|^ms/g, rm = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Gs = function(t) {
  return t.charCodeAt(1) === 45;
}, $a = function(t) {
  return t != null && typeof t != "boolean";
}, ao = /* @__PURE__ */ em(function(e) {
  return Gs(e) ? e : e.replace(tm, "-$&").toLowerCase();
}), ka = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(rm, function(n, o, i) {
          return Ct = {
            name: o,
            styles: i,
            next: Ct
          }, o;
        });
  }
  return Zp[t] !== 1 && !Gs(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function tn(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Ct = {
          name: o.name,
          styles: o.styles,
          next: Ct
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ct = {
              name: a.name,
              styles: a.styles,
              next: Ct
            }, a = a.next;
        var s = i.styles + ";";
        return s;
      }
      return nm(e, t, r);
    }
  }
  var l = r;
  return l;
}
function nm(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += tn(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var s = a;
        $a(s) && (n += ao(i) + ":" + ka(i, s) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && t == null)
        for (var l = 0; l < a.length; l++)
          $a(a[l]) && (n += ao(i) + ":" + ka(i, a[l]) + ";");
      else {
        var d = tn(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += ao(i) + ":" + d + ";";
            break;
          }
          default:
            n += i + "{" + d + "}";
        }
      }
    }
  return n;
}
var Ia = /label:\s*([^\s;{]+)\s*(;|$)/g, Ct;
function om(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ct = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += tn(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += tn(r, t, e[s]), n) {
      var l = i;
      o += l[s];
    }
  Ia.lastIndex = 0;
  for (var d = "", f; (f = Ia.exec(o)) !== null; )
    d += "-" + f[1];
  var p = Jp(o) + d;
  return {
    name: p,
    styles: o,
    next: Ct
  };
}
/**
 * @mui/styled-engine v6.5.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function im(e, t) {
  const r = Oc(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function am(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Aa = [];
function Dt(e) {
  return Aa[0] = e, om(Aa);
}
const sm = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function cm(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = sm(t), a = Object.keys(i);
  function s(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function l(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - n / 100}${r})`;
  }
  function d(h, m) {
    const x = a.indexOf(m);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r}) and (max-width:${(x !== -1 && typeof t[a[x]] == "number" ? t[a[x]] : m) - n / 100}${r})`;
  }
  function f(h) {
    return a.indexOf(h) + 1 < a.length ? d(h, a[a.indexOf(h) + 1]) : s(h);
  }
  function p(h) {
    const m = a.indexOf(h);
    return m === 0 ? s(a[1]) : m === a.length - 1 ? l(a[m]) : d(h, a[a.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: s,
    down: l,
    between: d,
    only: f,
    not: p,
    unit: r,
    ...o
  };
}
const lm = {
  borderRadius: 4
};
function Ys(e = 8, t = ti({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function dm(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function qs(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, s = cm(r), l = Ys(o);
  let d = qe({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: l,
    shape: {
      ...lm,
      ...i
    }
  }, a);
  return d = lp(d), d.applyStyles = dm, d = t.reduce((f, p) => qe(f, p), d), d.unstable_sxConfig = {
    ...Pn,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, d.unstable_sx = function(p) {
    return ar({
      sx: p,
      theme: this
    });
  }, d;
}
function Ks(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Dt(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Dt(o.style));
  }), n;
}
const um = qs();
function so(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Pt(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function fm(e) {
  return e ? (t, r) => r[e] : null;
}
function pm(e, t, r) {
  e.theme = ym(e.theme) ? r : e.theme[t] || e.theme;
}
function Hr(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((o) => Hr(e, o, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let o;
    if (n.isProcessed)
      o = r ? Pt(n.style, r) : n.style;
    else {
      const {
        variants: i,
        ...a
      } = n;
      o = r ? Pt(Dt(a), r) : a;
    }
    return Xs(e, n.variants, [o], r);
  }
  return n != null && n.isProcessed ? r ? Pt(Dt(n.style), r) : n.style : r ? Pt(Dt(n), r) : n;
}
function Xs(e, t, r = [], n = void 0) {
  var i;
  let o;
  e: for (let a = 0; a < t.length; a += 1) {
    const s = t[a];
    if (typeof s.props == "function") {
      if (o ?? (o = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !s.props(o))
        continue;
    } else
      for (const l in s.props)
        if (e[l] !== s.props[l] && ((i = e.ownerState) == null ? void 0 : i[l]) !== s.props[l])
          continue e;
    typeof s.style == "function" ? (o ?? (o = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(n ? Pt(Dt(s.style(o)), n) : s.style(o))) : r.push(n ? Pt(Dt(s.style), n) : s.style);
  }
  return r;
}
function mm(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = um,
    rootShouldForwardProp: n = so,
    slotShouldForwardProp: o = so
  } = e;
  function i(s) {
    pm(s, t, r);
  }
  return (s, l = {}) => {
    am(s, (P) => P.filter((Q) => Q !== ar));
    const {
      name: d,
      slot: f,
      skipVariantsResolver: p,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: m = fm(Qs(f)),
      ...x
    } = l, u = d && d.startsWith("Mui") || f ? "components" : "custom", w = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), E = h || !1;
    let D = so;
    f === "Root" || f === "root" ? D = n : f ? D = o : bm(s) && (D = void 0);
    const _ = im(s, {
      shouldForwardProp: D,
      label: gm(d, f),
      ...x
    }), O = (P) => {
      if (P.__emotion_real === P)
        return P;
      if (typeof P == "function")
        return function(G) {
          return Hr(G, P, G.theme.modularCssLayers ? u : void 0);
        };
      if (ht(P)) {
        const Q = Ks(P);
        return function(j) {
          return Q.variants ? Hr(j, Q, j.theme.modularCssLayers ? u : void 0) : j.theme.modularCssLayers ? Pt(Q.style, u) : Q.style;
        };
      }
      return P;
    }, S = (...P) => {
      const Q = [], G = P.map(O), j = [];
      if (Q.push(i), d && m && j.push(function(N) {
        var re, ke;
        const X = (ke = (re = N.theme.components) == null ? void 0 : re[d]) == null ? void 0 : ke.styleOverrides;
        if (!X)
          return null;
        const J = {};
        for (const We in X)
          J[We] = Hr(N, X[We], N.theme.modularCssLayers ? "theme" : void 0);
        return m(N, J);
      }), d && !w && j.push(function(N) {
        var J, re;
        const M = N.theme, X = (re = (J = M == null ? void 0 : M.components) == null ? void 0 : J[d]) == null ? void 0 : re.variants;
        return X ? Xs(N, X, [], N.theme.modularCssLayers ? "theme" : void 0) : null;
      }), E || j.push(ar), Array.isArray(G[0])) {
        const g = G.shift(), N = new Array(Q.length).fill(""), M = new Array(j.length).fill("");
        let X;
        X = [...N, ...g, ...M], X.raw = [...N, ...g.raw, ...M], Q.unshift(X);
      }
      const y = [...Q, ...G, ...j], R = _(...y);
      return s.muiName && (R.muiName = s.muiName), process.env.NODE_ENV !== "production" && (R.displayName = hm(d, f, s)), R;
    };
    return _.withConfig && (S.withConfig = _.withConfig), S;
  };
}
function hm(e, t, r) {
  return e ? `${e}${zt(t || "")}` : `Styled(${Zf(r)})`;
}
function gm(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Qs(t || "Root")}`), r;
}
function ym(e) {
  for (const t in e)
    return !1;
  return !0;
}
function bm(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Qs(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function ni(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), ip(e, t, r);
}
function xm(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function kt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return kt(xm(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : $t(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : $t(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const vm = (e) => {
  const t = kt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, hr = (e, t) => {
  try {
    return vm(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Mn(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Js(e) {
  e = kt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (d, f = (d + r / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let s = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", l.push(t[3])), Mn({
    type: s,
    values: l
  });
}
function Oo(e) {
  e = kt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? kt(Js(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Oa(e, t) {
  const r = Oo(e), n = Oo(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Sm(e, t) {
  return e = kt(e), t = ni(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Mn(e);
}
function Lr(e, t, r) {
  try {
    return Sm(e, t);
  } catch {
    return e;
  }
}
function oi(e, t) {
  if (e = kt(e), t = ni(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Mn(e);
}
function be(e, t, r) {
  try {
    return oi(e, t);
  } catch {
    return e;
  }
}
function ii(e, t) {
  if (e = kt(e), t = ni(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Mn(e);
}
function xe(e, t, r) {
  try {
    return ii(e, t);
  } catch {
    return e;
  }
}
function Cm(e, t = 0.15) {
  return Oo(e) > 0.5 ? oi(e, t) : ii(e, t);
}
function Br(e, t, r) {
  try {
    return Cm(e, t);
  } catch {
    return e;
  }
}
const wm = /* @__PURE__ */ Z.createContext(void 0);
process.env.NODE_ENV !== "production" && (ne.node, ne.object);
function Tm(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Ao(o.defaultProps, n) : !o.styleOverrides && !o.variants ? Ao(o, n) : n;
}
function Em({
  props: e,
  name: t
}) {
  const r = Z.useContext(wm);
  return Tm({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const _a = {
  theme: void 0
};
function $m(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (_a.theme = o.theme, i = Ks(e(_a)), t = i, r = o.theme), i;
  };
}
function km(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Ra = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Im = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([s, l]) => {
      (!r || r && !r([...i, s])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...i, s], Array.isArray(l) ? [...a, s] : a) : t([...i, s], l, a));
    });
  }
  n(e);
}, Am = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function co(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return Im(
    e,
    (s, l, d) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(s, l))) {
        const f = `--${r ? `${r}-` : ""}${s.join("-")}`, p = Am(s, l);
        Object.assign(o, {
          [f]: p
        }), Ra(i, s, `var(${f})`, d), Ra(a, s, `var(${f}, ${p})`, d);
      }
    },
    (s) => s[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function Om(e, t = {}) {
  const {
    getSelector: r = w,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: s = "light",
    ...l
  } = e, {
    vars: d,
    css: f,
    varsWithDefaults: p
  } = co(l, t);
  let h = p;
  const m = {}, {
    [s]: x,
    ...u
  } = i;
  if (Object.entries(u || {}).forEach(([_, O]) => {
    const {
      vars: S,
      css: P,
      varsWithDefaults: Q
    } = co(O, t);
    h = qe(h, Q), m[_] = {
      css: P,
      vars: S
    };
  }), x) {
    const {
      css: _,
      vars: O,
      varsWithDefaults: S
    } = co(x, t);
    h = qe(h, S), m[s] = {
      css: _,
      vars: O
    };
  }
  function w(_, O) {
    var P, Q;
    let S = o;
    if (o === "class" && (S = ".%s"), o === "data" && (S = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (S = `[${o}="%s"]`), _) {
      if (S === "media")
        return e.defaultColorScheme === _ ? ":root" : {
          [`@media (prefers-color-scheme: ${((Q = (P = i[_]) == null ? void 0 : P.palette) == null ? void 0 : Q.mode) || _})`]: {
            ":root": O
          }
        };
      if (S)
        return e.defaultColorScheme === _ ? `:root, ${S.replace("%s", String(_))}` : S.replace("%s", String(_));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let _ = {
        ...d
      };
      return Object.entries(m).forEach(([, {
        vars: O
      }]) => {
        _ = qe(_, O);
      }), _;
    },
    generateStyleSheets: () => {
      var G, j;
      const _ = [], O = e.defaultColorScheme || "light";
      function S(y, R) {
        Object.keys(R).length && _.push(typeof y == "string" ? {
          [y]: {
            ...R
          }
        } : y);
      }
      S(r(void 0, {
        ...f
      }), f);
      const {
        [O]: P,
        ...Q
      } = m;
      if (P) {
        const {
          css: y
        } = P, R = (j = (G = i[O]) == null ? void 0 : G.palette) == null ? void 0 : j.mode, g = !n && R ? {
          colorScheme: R,
          ...y
        } : {
          ...y
        };
        S(r(O, {
          ...g
        }), g);
      }
      return Object.entries(Q).forEach(([y, {
        css: R
      }]) => {
        var M, X;
        const g = (X = (M = i[y]) == null ? void 0 : M.palette) == null ? void 0 : X.mode, N = !n && g ? {
          colorScheme: g,
          ...R
        } : {
          ...R
        };
        S(r(y, {
          ...N
        }), N);
      }), _;
    }
  };
}
function _m(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Tr = {
  black: "#000",
  white: "#fff"
}, Rm = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, Gt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Yt = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, fr = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, qt = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Kt = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Xt = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Zs() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Tr.white,
      default: Tr.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const Pm = Zs();
function ec() {
  return {
    text: {
      primary: Tr.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Tr.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Pa = ec();
function Ma(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = ii(e.main, o) : t === "dark" && (e.dark = oi(e.main, i)));
}
function Mm(e = "light") {
  return e === "dark" ? {
    main: qt[200],
    light: qt[50],
    dark: qt[400]
  } : {
    main: qt[700],
    light: qt[400],
    dark: qt[800]
  };
}
function Dm(e = "light") {
  return e === "dark" ? {
    main: Gt[200],
    light: Gt[50],
    dark: Gt[400]
  } : {
    main: Gt[500],
    light: Gt[300],
    dark: Gt[700]
  };
}
function Nm(e = "light") {
  return e === "dark" ? {
    main: Yt[500],
    light: Yt[300],
    dark: Yt[700]
  } : {
    main: Yt[700],
    light: Yt[400],
    dark: Yt[800]
  };
}
function zm(e = "light") {
  return e === "dark" ? {
    main: Kt[400],
    light: Kt[300],
    dark: Kt[700]
  } : {
    main: Kt[700],
    light: Kt[500],
    dark: Kt[900]
  };
}
function Fm(e = "light") {
  return e === "dark" ? {
    main: Xt[400],
    light: Xt[300],
    dark: Xt[700]
  } : {
    main: Xt[800],
    light: Xt[500],
    dark: Xt[900]
  };
}
function Lm(e = "light") {
  return e === "dark" ? {
    main: fr[400],
    light: fr[300],
    dark: fr[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: fr[500],
    dark: fr[900]
  };
}
function ai(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || Mm(t), a = e.secondary || Dm(t), s = e.error || Nm(t), l = e.info || zm(t), d = e.success || Fm(t), f = e.warning || Lm(t);
  function p(u) {
    const w = Oa(u, Pa.text.primary) >= r ? Pa.text.primary : Pm.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const E = Oa(u, w);
      E < 3 && console.error([`MUI: The contrast ratio of ${E}:1 for ${w} on ${u}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return w;
  }
  const h = ({
    color: u,
    name: w,
    mainShade: E = 500,
    lightShade: D = 300,
    darkShade: _ = 700
  }) => {
    if (u = {
      ...u
    }, !u.main && u[E] && (u.main = u[E]), !u.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${w ? ` (${w})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${E}\` property.` : $t(11, w ? ` (${w})` : "", E));
    if (typeof u.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${w ? ` (${w})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(u.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : $t(12, w ? ` (${w})` : "", JSON.stringify(u.main)));
    return Ma(u, "light", D, n), Ma(u, "dark", _, n), u.contrastText || (u.contrastText = p(u.main)), u;
  };
  let m;
  return t === "light" ? m = Zs() : t === "dark" && (m = ec()), process.env.NODE_ENV !== "production" && (m || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), qe({
    // A collection of common colors.
    common: {
      ...Tr
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: f,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Rm,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...m
  }, o);
}
function Bm(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Wm(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function jm(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Da = {
  textTransform: "uppercase"
}, Na = '"Roboto", "Helvetica", "Arial", sans-serif';
function Vm(e, t) {
  const {
    fontFamily: r = Na,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: s = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: f,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = n / 14, m = f || ((w) => `${w / l * h}rem`), x = (w, E, D, _, O) => ({
    fontFamily: r,
    fontWeight: w,
    fontSize: m(E),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: D,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Na ? {
      letterSpacing: `${jm(_ / E)}em`
    } : {},
    ...O,
    ...d
  }), u = {
    h1: x(o, 96, 1.167, -1.5),
    h2: x(o, 60, 1.2, -0.5),
    h3: x(i, 48, 1.167, 0),
    h4: x(i, 34, 1.235, 0.25),
    h5: x(i, 24, 1.334, 0),
    h6: x(a, 20, 1.6, 0.15),
    subtitle1: x(i, 16, 1.75, 0.15),
    subtitle2: x(a, 14, 1.57, 0.1),
    body1: x(i, 16, 1.5, 0.15),
    body2: x(i, 14, 1.43, 0.15),
    button: x(a, 14, 1.75, 0.4, Da),
    caption: x(i, 12, 1.66, 0.4),
    overline: x(i, 12, 2.66, 1, Da),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return qe({
    htmlFontSize: l,
    pxToRem: m,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: s,
    ...u
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const Um = 0.2, Hm = 0.14, Gm = 0.12;
function Te(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Um})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Hm})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Gm})`].join(",");
}
const Ym = ["none", Te(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Te(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Te(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Te(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Te(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Te(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Te(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Te(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Te(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Te(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Te(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Te(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Te(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Te(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Te(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Te(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Te(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Te(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Te(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Te(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Te(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Te(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Te(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Te(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], qm = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Km = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function za(e) {
  return `${Math.round(e)}ms`;
}
function Xm(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Qm(e) {
  const t = {
    ...qm,
    ...e.easing
  }, r = {
    ...Km,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Xm,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: s = t.easeInOut,
        delay: l = 0,
        ...d
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const f = (h) => typeof h == "string", p = (h) => !Number.isNaN(parseFloat(h));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !f(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), f(s) || console.error('MUI: Argument "easing" must be a string.'), !p(l) && !f(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof a == "string" ? a : za(a)} ${s} ${typeof l == "string" ? l : za(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Jm = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Zm(e) {
  return ht(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function tc(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, s] = o[i];
      !Zm(s) || a.startsWith("unstable_") ? delete n[a] : ht(s) && (n[a] = {
        ...s
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function _o(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: s = {},
    shape: l,
    ...d
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : $t(20));
  const f = ai(i), p = qs(e);
  let h = qe(p, {
    mixins: Wm(p.breakpoints, n),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Ym.slice(),
    typography: Vm(f, s),
    transitions: Qm(a),
    zIndex: {
      ...Jm
    }
  });
  if (h = qe(h, d), h = t.reduce((m, x) => qe(m, x), h), process.env.NODE_ENV !== "production") {
    const m = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], x = (u, w) => {
      let E;
      for (E in u) {
        const D = u[E];
        if (m.includes(E) && Object.keys(D).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const _ = ei("", E);
            console.error([`MUI: The \`${w}\` component increases the CSS specificity of the \`${E}\` internal state.`, "You can not override it like this: ", JSON.stringify(u, null, 2), "", `Instead, you need to use the '&.${_}' syntax:`, JSON.stringify({
              root: {
                [`&.${_}`]: D
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          u[E] = {};
        }
      }
    };
    Object.keys(h.components).forEach((u) => {
      const w = h.components[u].styleOverrides;
      w && u.startsWith("Mui") && x(w, u);
    });
  }
  return h.unstable_sxConfig = {
    ...Pn,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, h.unstable_sx = function(x) {
    return ar({
      sx: x,
      theme: this
    });
  }, h.toRuntimeSource = tc, h;
}
function eh(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const th = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = eh(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function rc(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function nc(e) {
  return e === "dark" ? th : [];
}
function rh(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = ai(t);
  return {
    palette: i,
    opacity: {
      ...rc(i.mode),
      ...r
    },
    overlays: n || nc(i.mode),
    ...o
  };
}
function nh(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const oh = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], ih = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return oh(e.cssVarPrefix).forEach((s) => {
        a[s] = r[s], delete r[s];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function ah(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function A(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function gr(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Js(e);
}
function mt(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = hr(gr(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function sh(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const dt = (e) => {
  try {
    return e();
  } catch {
  }
}, ch = (e = "mui") => km(e);
function lo(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = rh({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...a
  } = _o({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...rc(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || nc(o)
  }, a;
}
function lh(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = nh,
    colorSchemeSelector: s = r.light && r.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...d
  } = e, f = Object.keys(r)[0], p = n || (r.light && f !== "light" ? "light" : f), h = ch(i), {
    [p]: m,
    light: x,
    dark: u,
    ...w
  } = r, E = {
    ...w
  };
  let D = m;
  if ((p === "dark" && !("dark" in r) || p === "light" && !("light" in r)) && (D = !0), !D)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : $t(21, p));
  const _ = lo(E, D, d, p);
  x && !E.light && lo(E, x, void 0, "light"), u && !E.dark && lo(E, u, void 0, "dark");
  let O = {
    defaultColorScheme: p,
    ..._,
    cssVarPrefix: i,
    colorSchemeSelector: s,
    rootSelector: l,
    getCssVar: h,
    colorSchemes: E,
    font: {
      ...Bm(_.typography),
      ..._.font
    },
    spacing: sh(d.spacing)
  };
  Object.keys(O.colorSchemes).forEach((j) => {
    const y = O.colorSchemes[j].palette, R = (g) => {
      const N = g.split("-"), M = N[1], X = N[2];
      return h(g, y[M][X]);
    };
    if (y.mode === "light" && (A(y.common, "background", "#fff"), A(y.common, "onBackground", "#000")), y.mode === "dark" && (A(y.common, "background", "#000"), A(y.common, "onBackground", "#fff")), ah(y, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), y.mode === "light") {
      A(y.Alert, "errorColor", be(y.error.light, 0.6)), A(y.Alert, "infoColor", be(y.info.light, 0.6)), A(y.Alert, "successColor", be(y.success.light, 0.6)), A(y.Alert, "warningColor", be(y.warning.light, 0.6)), A(y.Alert, "errorFilledBg", R("palette-error-main")), A(y.Alert, "infoFilledBg", R("palette-info-main")), A(y.Alert, "successFilledBg", R("palette-success-main")), A(y.Alert, "warningFilledBg", R("palette-warning-main")), A(y.Alert, "errorFilledColor", dt(() => y.getContrastText(y.error.main))), A(y.Alert, "infoFilledColor", dt(() => y.getContrastText(y.info.main))), A(y.Alert, "successFilledColor", dt(() => y.getContrastText(y.success.main))), A(y.Alert, "warningFilledColor", dt(() => y.getContrastText(y.warning.main))), A(y.Alert, "errorStandardBg", xe(y.error.light, 0.9)), A(y.Alert, "infoStandardBg", xe(y.info.light, 0.9)), A(y.Alert, "successStandardBg", xe(y.success.light, 0.9)), A(y.Alert, "warningStandardBg", xe(y.warning.light, 0.9)), A(y.Alert, "errorIconColor", R("palette-error-main")), A(y.Alert, "infoIconColor", R("palette-info-main")), A(y.Alert, "successIconColor", R("palette-success-main")), A(y.Alert, "warningIconColor", R("palette-warning-main")), A(y.AppBar, "defaultBg", R("palette-grey-100")), A(y.Avatar, "defaultBg", R("palette-grey-400")), A(y.Button, "inheritContainedBg", R("palette-grey-300")), A(y.Button, "inheritContainedHoverBg", R("palette-grey-A100")), A(y.Chip, "defaultBorder", R("palette-grey-400")), A(y.Chip, "defaultAvatarColor", R("palette-grey-700")), A(y.Chip, "defaultIconColor", R("palette-grey-700")), A(y.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), A(y.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), A(y.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), A(y.LinearProgress, "primaryBg", xe(y.primary.main, 0.62)), A(y.LinearProgress, "secondaryBg", xe(y.secondary.main, 0.62)), A(y.LinearProgress, "errorBg", xe(y.error.main, 0.62)), A(y.LinearProgress, "infoBg", xe(y.info.main, 0.62)), A(y.LinearProgress, "successBg", xe(y.success.main, 0.62)), A(y.LinearProgress, "warningBg", xe(y.warning.main, 0.62)), A(y.Skeleton, "bg", `rgba(${R("palette-text-primaryChannel")} / 0.11)`), A(y.Slider, "primaryTrack", xe(y.primary.main, 0.62)), A(y.Slider, "secondaryTrack", xe(y.secondary.main, 0.62)), A(y.Slider, "errorTrack", xe(y.error.main, 0.62)), A(y.Slider, "infoTrack", xe(y.info.main, 0.62)), A(y.Slider, "successTrack", xe(y.success.main, 0.62)), A(y.Slider, "warningTrack", xe(y.warning.main, 0.62));
      const g = Br(y.background.default, 0.8);
      A(y.SnackbarContent, "bg", g), A(y.SnackbarContent, "color", dt(() => y.getContrastText(g))), A(y.SpeedDialAction, "fabHoverBg", Br(y.background.paper, 0.15)), A(y.StepConnector, "border", R("palette-grey-400")), A(y.StepContent, "border", R("palette-grey-400")), A(y.Switch, "defaultColor", R("palette-common-white")), A(y.Switch, "defaultDisabledColor", R("palette-grey-100")), A(y.Switch, "primaryDisabledColor", xe(y.primary.main, 0.62)), A(y.Switch, "secondaryDisabledColor", xe(y.secondary.main, 0.62)), A(y.Switch, "errorDisabledColor", xe(y.error.main, 0.62)), A(y.Switch, "infoDisabledColor", xe(y.info.main, 0.62)), A(y.Switch, "successDisabledColor", xe(y.success.main, 0.62)), A(y.Switch, "warningDisabledColor", xe(y.warning.main, 0.62)), A(y.TableCell, "border", xe(Lr(y.divider, 1), 0.88)), A(y.Tooltip, "bg", Lr(y.grey[700], 0.92));
    }
    if (y.mode === "dark") {
      A(y.Alert, "errorColor", xe(y.error.light, 0.6)), A(y.Alert, "infoColor", xe(y.info.light, 0.6)), A(y.Alert, "successColor", xe(y.success.light, 0.6)), A(y.Alert, "warningColor", xe(y.warning.light, 0.6)), A(y.Alert, "errorFilledBg", R("palette-error-dark")), A(y.Alert, "infoFilledBg", R("palette-info-dark")), A(y.Alert, "successFilledBg", R("palette-success-dark")), A(y.Alert, "warningFilledBg", R("palette-warning-dark")), A(y.Alert, "errorFilledColor", dt(() => y.getContrastText(y.error.dark))), A(y.Alert, "infoFilledColor", dt(() => y.getContrastText(y.info.dark))), A(y.Alert, "successFilledColor", dt(() => y.getContrastText(y.success.dark))), A(y.Alert, "warningFilledColor", dt(() => y.getContrastText(y.warning.dark))), A(y.Alert, "errorStandardBg", be(y.error.light, 0.9)), A(y.Alert, "infoStandardBg", be(y.info.light, 0.9)), A(y.Alert, "successStandardBg", be(y.success.light, 0.9)), A(y.Alert, "warningStandardBg", be(y.warning.light, 0.9)), A(y.Alert, "errorIconColor", R("palette-error-main")), A(y.Alert, "infoIconColor", R("palette-info-main")), A(y.Alert, "successIconColor", R("palette-success-main")), A(y.Alert, "warningIconColor", R("palette-warning-main")), A(y.AppBar, "defaultBg", R("palette-grey-900")), A(y.AppBar, "darkBg", R("palette-background-paper")), A(y.AppBar, "darkColor", R("palette-text-primary")), A(y.Avatar, "defaultBg", R("palette-grey-600")), A(y.Button, "inheritContainedBg", R("palette-grey-800")), A(y.Button, "inheritContainedHoverBg", R("palette-grey-700")), A(y.Chip, "defaultBorder", R("palette-grey-700")), A(y.Chip, "defaultAvatarColor", R("palette-grey-300")), A(y.Chip, "defaultIconColor", R("palette-grey-300")), A(y.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), A(y.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), A(y.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), A(y.LinearProgress, "primaryBg", be(y.primary.main, 0.5)), A(y.LinearProgress, "secondaryBg", be(y.secondary.main, 0.5)), A(y.LinearProgress, "errorBg", be(y.error.main, 0.5)), A(y.LinearProgress, "infoBg", be(y.info.main, 0.5)), A(y.LinearProgress, "successBg", be(y.success.main, 0.5)), A(y.LinearProgress, "warningBg", be(y.warning.main, 0.5)), A(y.Skeleton, "bg", `rgba(${R("palette-text-primaryChannel")} / 0.13)`), A(y.Slider, "primaryTrack", be(y.primary.main, 0.5)), A(y.Slider, "secondaryTrack", be(y.secondary.main, 0.5)), A(y.Slider, "errorTrack", be(y.error.main, 0.5)), A(y.Slider, "infoTrack", be(y.info.main, 0.5)), A(y.Slider, "successTrack", be(y.success.main, 0.5)), A(y.Slider, "warningTrack", be(y.warning.main, 0.5));
      const g = Br(y.background.default, 0.98);
      A(y.SnackbarContent, "bg", g), A(y.SnackbarContent, "color", dt(() => y.getContrastText(g))), A(y.SpeedDialAction, "fabHoverBg", Br(y.background.paper, 0.15)), A(y.StepConnector, "border", R("palette-grey-600")), A(y.StepContent, "border", R("palette-grey-600")), A(y.Switch, "defaultColor", R("palette-grey-300")), A(y.Switch, "defaultDisabledColor", R("palette-grey-600")), A(y.Switch, "primaryDisabledColor", be(y.primary.main, 0.55)), A(y.Switch, "secondaryDisabledColor", be(y.secondary.main, 0.55)), A(y.Switch, "errorDisabledColor", be(y.error.main, 0.55)), A(y.Switch, "infoDisabledColor", be(y.info.main, 0.55)), A(y.Switch, "successDisabledColor", be(y.success.main, 0.55)), A(y.Switch, "warningDisabledColor", be(y.warning.main, 0.55)), A(y.TableCell, "border", be(Lr(y.divider, 1), 0.68)), A(y.Tooltip, "bg", Lr(y.grey[700], 0.92));
    }
    mt(y.background, "default"), mt(y.background, "paper"), mt(y.common, "background"), mt(y.common, "onBackground"), mt(y, "divider"), Object.keys(y).forEach((g) => {
      const N = y[g];
      g !== "tonalOffset" && N && typeof N == "object" && (N.main && A(y[g], "mainChannel", hr(gr(N.main))), N.light && A(y[g], "lightChannel", hr(gr(N.light))), N.dark && A(y[g], "darkChannel", hr(gr(N.dark))), N.contrastText && A(y[g], "contrastTextChannel", hr(gr(N.contrastText))), g === "text" && (mt(y[g], "primary"), mt(y[g], "secondary")), g === "action" && (N.active && mt(y[g], "active"), N.selected && mt(y[g], "selected")));
    });
  }), O = t.reduce((j, y) => qe(j, y), O);
  const S = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: ih(O)
  }, {
    vars: P,
    generateThemeVars: Q,
    generateStyleSheets: G
  } = Om(O, S);
  return O.vars = P, Object.entries(O.colorSchemes[O.defaultColorScheme]).forEach(([j, y]) => {
    O[j] = y;
  }), O.generateThemeVars = Q, O.generateStyleSheets = G, O.generateSpacing = function() {
    return Ys(d.spacing, ti(this));
  }, O.getColorSchemeSelector = _m(s), O.spacing = O.generateSpacing(), O.shouldSkipGeneratingVar = a, O.unstable_sxConfig = {
    ...Pn,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, O.unstable_sx = function(y) {
    return ar({
      sx: y,
      theme: this
    });
  }, O.toRuntimeSource = tc, O;
}
function Fa(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: ai({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function dh(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, s = i || "light", l = o == null ? void 0 : o[s], d = {
    ...o,
    ...r ? {
      [s]: {
        ...typeof l != "boolean" && l,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return _o(e, ...t);
    let f = r;
    "palette" in e || d[s] && (d[s] !== !0 ? f = d[s].palette : s === "dark" && (f = {
      mode: "dark"
    }));
    const p = _o({
      ...e,
      palette: f
    }, ...t);
    return p.defaultColorScheme = s, p.colorSchemes = d, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: p.palette
    }, Fa(p, "dark", d.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: p.palette
    }, Fa(p, "light", d.light)), p;
  }
  return !r && !("light" in d) && s === "light" && (d.light = !0), lh({
    ...a,
    colorSchemes: d,
    defaultColorScheme: s,
    ...typeof n != "boolean" && n
  }, ...t);
}
const uh = dh(), fh = "$$material";
function ph(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const mh = (e) => ph(e) && e !== "classes", hh = mm({
  themeId: fh,
  defaultTheme: uh,
  rootShouldForwardProp: mh
}), gh = $m;
process.env.NODE_ENV !== "production" && (ne.node, ne.object.isRequired);
function yh(e) {
  return Em(e);
}
function bh(e) {
  return ei("MuiSvgIcon", e);
}
op("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const xh = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${zt(t)}`, `fontSize${zt(r)}`]
  };
  return ep(o, bh, n);
}, vh = hh("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${zt(r.color)}`], t[`fontSize${zt(r.fontSize)}`]];
  }
})(gh(({
  theme: e
}) => {
  var t, r, n, o, i, a, s, l, d, f, p, h, m, x;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : o.call(t, "fill", {
      duration: (n = (r = (e.vars ?? e).transitions) == null ? void 0 : r.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (u) => !u.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((a = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((l = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : l.call(s, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((f = (d = e.typography) == null ? void 0 : d.pxToRem) == null ? void 0 : f.call(d, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, u]) => u && u.main).map(([u]) => {
        var w, E;
        return {
          props: {
            color: u
          },
          style: {
            color: (E = (w = (e.vars ?? e).palette) == null ? void 0 : w[u]) == null ? void 0 : E.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (h = (p = (e.vars ?? e).palette) == null ? void 0 : p.action) == null ? void 0 : h.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (x = (m = (e.vars ?? e).palette) == null ? void 0 : m.action) == null ? void 0 : x.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), rn = /* @__PURE__ */ Z.forwardRef(function(t, r) {
  const n = yh({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: s = "svg",
    fontSize: l = "medium",
    htmlColor: d,
    inheritViewBox: f = !1,
    titleAccess: p,
    viewBox: h = "0 0 24 24",
    ...m
  } = n, x = /* @__PURE__ */ Z.isValidElement(o) && o.type === "svg", u = {
    ...n,
    color: a,
    component: s,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: h,
    hasSvgAsChild: x
  }, w = {};
  f || (w.viewBox = h);
  const E = xh(u);
  return /* @__PURE__ */ v(vh, {
    as: s,
    className: ap(E.root, i),
    focusable: "false",
    color: d,
    "aria-hidden": p ? void 0 : !0,
    role: p ? "img" : void 0,
    ref: r,
    ...w,
    ...m,
    ...x && o.props,
    ownerState: u,
    children: [x ? o.props.children : o, p ? /* @__PURE__ */ c("title", {
      children: p
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (rn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: ne.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: ne.object,
  /**
   * @ignore
   */
  className: ne.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: ne.oneOfType([ne.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), ne.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: ne.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: ne.oneOfType([ne.oneOf(["inherit", "large", "medium", "small"]), ne.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: ne.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: ne.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: ne.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: ne.oneOfType([ne.arrayOf(ne.oneOfType([ne.func, ne.object, ne.bool])), ne.func, ne.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: ne.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: ne.string
});
rn.muiName = "SvgIcon";
function He(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ c(rn, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = rn.muiName, /* @__PURE__ */ Z.memo(/* @__PURE__ */ Z.forwardRef(r));
}
const oc = He(/* @__PURE__ */ c("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), Sh = He(/* @__PURE__ */ c("path", {
  d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
}), "Send"), yr = {
  // URL del webhook de Make.com
  webhookUrl: "",
  // Token de autenticación (si es necesario)
  apiToken: ""
};
Se.log("VITE_MAKE_WEBHOOK_URL:", void 0);
Se.log("MAKE_API_CONFIG.webhookUrl:", yr.webhookUrl);
const Ch = async (e, t) => {
  const r = t || `session_${Date.now()}`;
  Se.log("Enviando request a Make.com:", {
    message: e,
    sessionId: r,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    url: yr.webhookUrl
  });
  try {
    const n = await fetch(yr.webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...yr.apiToken && {
          Authorization: `Bearer ${yr.apiToken}`
        }
      },
      body: JSON.stringify({
        message: e,
        sessionId: r,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      })
    });
    if (Se.log("📥 Respuesta de Make.com:", {
      status: n.status,
      statusText: n.statusText,
      headers: Object.fromEntries(n.headers.entries())
    }), n.status === 429)
      return Se.error("Rate limit detectado, usando respuesta fallback"), {
        success: !1,
        error: "rate_limit"
      };
    if (!n.ok)
      throw new Error(`Error: ${n.status}`);
    let o;
    try {
      const i = await n.text();
      Se.log("Respuesta como texto:", i);
      try {
        o = JSON.parse(i), Se.log("Datos parseados:", o);
      } catch (a) {
        Se.error("Error parsing JSON, intentando limpiar:", a);
        const s = i.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
        try {
          o = JSON.parse(s), Se.log("Respuesta limpiada y parseada:", o);
        } catch (l) {
          Se.error("Error final parseando JSON:", l), o = { message: i };
        }
      }
    } catch (i) {
      throw Se.error("Error obteniendo texto de respuesta:", i), new Error("Error al procesar la respuesta del servidor");
    }
    return {
      success: !0,
      message: (o == null ? void 0 : o.message) || o,
      data: o
    };
  } catch (n) {
    return Se.error("Error completo:", n), {
      success: !1,
      error: n instanceof Error ? n.message : "Error desconocido"
    };
  }
}, wh = () => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, La = (e) => {
  const t = e.toLowerCase();
  return t.includes("hola") || t.includes("buenos días") || t.includes("buenas") ? "¡Hola! Soy el asistente virtual de AI4U. ¿En qué puedo ayudarte hoy?" : t.includes("servicios") || t.includes("qué hacen") || t.includes("qué ofrecen") ? "En AI4U ofrecemos servicios de inteligencia artificial personalizada, automatización de procesos, análisis de datos y consultoría en IA. ¿Te gustaría conocer más sobre alguno de nuestros servicios?" : t.includes("precio") || t.includes("costo") || t.includes("tarifa") ? "Nuestros precios varían según el proyecto y las necesidades específicas. Te recomiendo solicitar un diagnóstico gratuito para que podamos evaluar tu caso y darte una propuesta personalizada." : t.includes("contacto") || t.includes("teléfono") || t.includes("email") ? "Puedes contactarnos a través de nuestro formulario de diagnóstico gratuito o escribirnos directamente. Nuestro equipo te responderá en menos de 24 horas." : t.includes("diagnóstico") || t.includes("gratuito") ? "¡Excelente! Nuestro diagnóstico gratuito te ayudará a identificar oportunidades de mejora en tu empresa usando IA. Solo toma 30 minutos y no hay compromiso. ¿Te gustaría agendar una cita?" : "Gracias por tu mensaje. Nuestro equipo de AI4U se pondrá en contacto contigo pronto para ayudarte con tu consulta. Mientras tanto, puedes explorar nuestros servicios o solicitar un diagnóstico gratuito.";
}, _g = () => {
  const e = De(), t = Gr(e.breakpoints.down("sm")), [r, n] = ee(!1), [o] = ee(() => wh()), [i, a] = ee([
    {
      id: "1",
      text: "¡Hola! Soy el asistente virtual de AI4U. ¿En qué puedo ayudarte hoy?",
      isUser: !1,
      timestamp: /* @__PURE__ */ new Date(),
      sessionId: o
    }
  ]), [s, l] = ee(""), [d, f] = ee(!1), [p, h] = ee(""), m = on(null), x = Rt(() => n(!0), []), u = Rt(() => n(!1), []), w = Rt(() => {
    var _;
    (_ = m.current) == null || _.scrollIntoView({ behavior: "smooth" });
  }, []);
  $e(() => {
    w();
  }, [i, w]);
  const E = Rt(async () => {
    var S;
    const _ = s.trim();
    if (!_ || d || _ === p) return;
    if (_.length > 500) {
      const P = {
        id: Date.now().toString(),
        text: "El mensaje es demasiado largo. Por favor, mantén tu mensaje bajo 500 caracteres.",
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: o
      };
      a((Q) => [...Q, P]);
      return;
    }
    const O = {
      id: Date.now().toString(),
      text: s.trim(),
      isUser: !0,
      timestamp: /* @__PURE__ */ new Date(),
      sessionId: o
    };
    a((P) => [...P, O]), h(_), l(""), f(!0);
    try {
      const P = await Ch(_, o);
      let Q;
      P.success && ((S = P.data) != null && S.message) ? Q = P.data.message : P.success && P.data && typeof P.data == "string" ? Q = P.data : (P.error, Q = La(_));
      const G = {
        id: (Date.now() + 1).toString(),
        text: Q,
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: o
      };
      a((j) => [...j, G]);
    } catch (P) {
      console.error("Error sending message:", P);
      const G = {
        id: (Date.now() + 1).toString(),
        text: "Lo siento, estoy teniendo problemas técnicos. Por favor, intenta de nuevo en unos momentos.",
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: o
      };
      a((j) => [...j, G]);
    } finally {
      f(!1);
    }
  }, [s, d, o, p]), D = Rt((_) => {
    _.key === "Enter" && !_.shiftKey && !d && (_.preventDefault(), E());
  }, [E, d]);
  return /* @__PURE__ */ v(Er, { children: [
    /* @__PURE__ */ c(
      fc,
      {
        color: "primary",
        "aria-label": "chat",
        onClick: x,
        sx: {
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1e3,
          width: 60,
          height: 60,
          backgroundColor: e.palette.primary.main,
          color: e.palette.primary.contrastText,
          boxShadow: "0 4px 20px rgba(255, 69, 0, 0.3)",
          "&:hover": {
            backgroundColor: "rgba(255, 69, 0, 0.9)",
            boxShadow: "0 6px 25px rgba(255, 69, 0, 0.4)",
            transform: "scale(1.05)"
          },
          transition: "all 0.3s ease",
          p: 0,
          overflow: "hidden"
        },
        children: /* @__PURE__ */ c(
          b,
          {
            component: "img",
            src: "/assets/images/robot-assistant.png",
            alt: "AI4U Assistant",
            sx: {
              width: "100%",
              height: "100%",
              objectFit: "contain",
              filter: "brightness(0) invert(1)"
              // Hace el logo blanco
            }
          }
        )
      }
    ),
    /* @__PURE__ */ v(
      pc,
      {
        open: r,
        onClose: u,
        maxWidth: "sm",
        fullWidth: !0,
        fullScreen: t,
        slotProps: {
          paper: {
            sx: {
              borderRadius: { xs: 0, sm: 2 },
              height: { xs: "100%", sm: "70vh" },
              maxHeight: { xs: "100%", sm: "600px" }
            }
          }
        },
        children: [
          /* @__PURE__ */ v(
            mc,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: `1px solid ${Ne(e.palette.divider, 0.1)}`,
                pb: 2,
                mb: 0
              },
              children: [
                /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                  /* @__PURE__ */ c(
                    b,
                    {
                      component: "img",
                      src: "/assets/images/robot-assistant.png",
                      alt: "AI4U Assistant",
                      sx: {
                        width: 40,
                        height: 40,
                        objectFit: "contain"
                      }
                    }
                  ),
                  /* @__PURE__ */ v(b, { children: [
                    /* @__PURE__ */ c(K, { variant: "h6", sx: { fontWeight: 400 }, children: "Asistente AI4U" }),
                    /* @__PURE__ */ c(K, { variant: "caption", color: "text.secondary", children: "En línea" })
                  ] })
                ] }),
                /* @__PURE__ */ c(tt, { onClick: u, size: "small", children: /* @__PURE__ */ c(oc, {}) })
              ]
            }
          ),
          /* @__PURE__ */ v(
            hc,
            {
              sx: {
                p: 0,
                display: "flex",
                flexDirection: "column",
                height: "100%"
              },
              children: [
                /* @__PURE__ */ v(
                  b,
                  {
                    sx: {
                      flex: 1,
                      overflowY: "auto",
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2
                    },
                    children: [
                      i.map((_) => /* @__PURE__ */ c(
                        b,
                        {
                          sx: {
                            display: "flex",
                            justifyContent: _.isUser ? "flex-end" : "flex-start"
                          },
                          children: /* @__PURE__ */ v(
                            vr,
                            {
                              sx: {
                                p: 2,
                                maxWidth: "80%",
                                backgroundColor: _.isUser ? e.palette.primary.main : Ne(e.palette.background.paper, 0.8),
                                color: _.isUser ? e.palette.primary.contrastText : e.palette.text.primary,
                                borderRadius: 2,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                              },
                              children: [
                                /* @__PURE__ */ c(K, { variant: "body2", children: _.text }),
                                /* @__PURE__ */ c(
                                  K,
                                  {
                                    variant: "caption",
                                    sx: {
                                      opacity: 0.7,
                                      display: "block",
                                      mt: 0.5
                                    },
                                    children: _.timestamp.toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit"
                                    })
                                  }
                                )
                              ]
                            }
                          )
                        },
                        _.id
                      )),
                      d && /* @__PURE__ */ c(b, { sx: { display: "flex", justifyContent: "flex-start" }, children: /* @__PURE__ */ c(
                        vr,
                        {
                          sx: {
                            p: 2,
                            backgroundColor: Ne(e.palette.background.paper, 0.8),
                            borderRadius: 2,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                          },
                          children: /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                            /* @__PURE__ */ c(gc, { size: 16 }),
                            /* @__PURE__ */ c(K, { variant: "body2", color: "text.secondary", children: "Escribiendo..." })
                          ] })
                        }
                      ) }),
                      /* @__PURE__ */ c("div", { ref: m })
                    ]
                  }
                ),
                /* @__PURE__ */ v(
                  b,
                  {
                    sx: {
                      p: 2,
                      borderTop: `1px solid ${Ne(e.palette.divider, 0.1)}`
                    },
                    children: [
                      s.length > 400 && /* @__PURE__ */ v(
                        K,
                        {
                          variant: "caption",
                          color: s.length > 500 ? "error" : "warning.main",
                          sx: { mb: 1, display: "block", textAlign: "right" },
                          children: [
                            s.length,
                            "/500"
                          ]
                        }
                      ),
                      /* @__PURE__ */ v(
                        b,
                        {
                          sx: {
                            display: "flex",
                            gap: 1,
                            alignItems: "flex-end"
                          },
                          children: [
                            /* @__PURE__ */ c(
                              Ya,
                              {
                                fullWidth: !0,
                                multiline: !0,
                                maxRows: 4,
                                placeholder: d ? "Esperando respuesta..." : "Escribe tu mensaje...",
                                value: s,
                                onChange: (_) => l(_.target.value),
                                onKeyPress: D,
                                disabled: d,
                                variant: "outlined",
                                size: "small",
                                sx: {
                                  "& .MuiOutlinedInput-root": {
                                    borderRadius: 2
                                  }
                                }
                              }
                            ),
                            /* @__PURE__ */ c(
                              tt,
                              {
                                onClick: E,
                                disabled: !s.trim() || d,
                                color: "primary",
                                sx: {
                                  backgroundColor: e.palette.primary.main,
                                  color: e.palette.primary.contrastText,
                                  "&:hover": {
                                    backgroundColor: "rgba(255, 69, 0, 0.9)"
                                  },
                                  "&:disabled": {
                                    backgroundColor: Ne(e.palette.action.disabled, 0.12),
                                    color: e.palette.action.disabled
                                  }
                                },
                                children: /* @__PURE__ */ c(Sh, {})
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}, Th = He(/* @__PURE__ */ c("path", {
  d: "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"
}), "Work"), Rg = ({
  variant: e = "primary",
  size: t = "medium",
  showIcon: r = !1,
  text: n = "Nuestros Servicios",
  className: o,
  sx: i
}) => {
  const a = Mo();
  return /* @__PURE__ */ c(
    Do,
    {
      variant: e,
      size: t,
      onClick: () => {
        a("/servicios"), window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
      startIcon: r ? /* @__PURE__ */ c(Th, {}) : void 0,
      className: o,
      sx: i,
      children: n
    }
  );
}, Eh = Le(Ro, {
  shouldForwardProp: (e) => e !== "cardVariant" && e !== "forceMode"
})(({ theme: e, cardVariant: t, forceMode: r }) => {
  const n = r ? r === "light" : e.palette.mode === "light", o = {
    borderRadius: 0,
    // Brutalist zero radius
    transition: "all 0.2s steps(4, end)",
    position: "relative",
    overflow: "hidden",
    backgroundColor: n ? T.white : T.black,
    color: n ? T.black : T.white,
    border: `1px solid ${n ? T.black : T.white}`,
    boxShadow: "none"
  };
  switch (t) {
    case "elevated":
      return {
        ...o,
        border: `2px solid ${n ? T.black : T.white}`,
        "&:hover": {
          transform: "translate(-4px, -4px)",
          boxShadow: n ? `8px 8px 0px ${T.black}` : `8px 8px 0px ${T.white}`
        }
      };
    case "outlined":
      return {
        ...o,
        backgroundColor: "transparent",
        border: `1px solid ${n ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)"}`,
        "&:hover": {
          borderColor: n ? T.black : T.white,
          bgcolor: n ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.02)"
        }
      };
    case "industrial":
      return {
        ...o,
        border: `4px solid ${n ? T.black : T.white}`,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "40px",
          borderBottom: `1px solid ${n ? T.black : T.white}`,
          zIndex: 0
        }
      };
    default:
      return o;
  }
}), $h = Le(b)(({ theme: e }) => ({
  position: "absolute",
  top: 4,
  left: 8,
  ...oe.label.secondary,
  fontSize: "0.65rem",
  zIndex: 1,
  pointerEvents: "none"
})), Dn = ({
  children: e,
  variant: t = "default",
  elevation: r = 0,
  showContent: n = !0,
  label: o,
  sx: i,
  ...a
}) => {
  const s = se();
  return /* @__PURE__ */ v(
    Eh,
    {
      cardVariant: t,
      elevation: r,
      forceMode: s.effectiveMode,
      sx: i,
      ...a,
      children: [
        o && /* @__PURE__ */ v($h, { children: [
          '"',
          o,
          '"'
        ] }),
        n && /* @__PURE__ */ c($r, { sx: {
          padding: { xs: 3, md: 4 },
          pt: o ? 6 : { xs: 3, md: 4 },
          // Add padding if label exists
          "&:last-child": { paddingBottom: { xs: 3, md: 4 } },
          position: "relative",
          zIndex: 1
        }, children: e })
      ]
    }
  );
}, Pg = ({
  title: e,
  subtitle: t = "",
  transactions: r,
  onShowMore: n = () => {
  },
  variant: o = "elevated"
}) => {
  const i = se(), a = () => {
    switch (o) {
      case "outlined":
        return {
          card: {
            background: "transparent",
            border: `1px solid ${i.contrast.divider}`,
            color: i.contrast.text.primary
          },
          surface: {
            background: i.contrast.surface,
            border: "none"
          }
        };
      case "elevated":
        return {
          card: {
            background: i.contrast.surface,
            border: "none",
            color: i.contrast.text.primary,
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
          },
          surface: {
            background: i.contrast.background,
            border: "none"
          }
        };
      default:
        return {
          card: {
            background: i.contrast.surface,
            border: "none",
            color: i.contrast.text.primary
          },
          surface: {
            background: i.contrast.background,
            border: "none"
          }
        };
    }
  }, s = (f) => ({
    Shopping: {
      bg: i.palette.accent + "20",
      text: i.palette.accent,
      icon: /* @__PURE__ */ c(Fc, {})
    },
    Fitness: {
      bg: i.palette.success + "20",
      text: i.palette.success,
      icon: /* @__PURE__ */ c(zc, {})
    },
    Education: {
      bg: i.palette.accent + "20",
      text: i.palette.accent,
      icon: /* @__PURE__ */ c(Nc, {})
    },
    Investments: {
      bg: i.palette.success + "20",
      text: i.palette.success,
      icon: /* @__PURE__ */ c(Dc, {})
    },
    Health: {
      bg: i.palette.accent + "20",
      text: i.palette.accent,
      icon: /* @__PURE__ */ c(Mc, {})
    }
  })[f] || {
    bg: i.helpers.background.secondary,
    text: i.helpers.text.secondary,
    icon: /* @__PURE__ */ c(Pc, {})
  }, l = (f) => {
    switch (f) {
      case "completed":
        return i.palette.success;
      case "pending":
        return i.palette.accent;
      case "failed":
        return "#DC2626";
      default:
        return i.palette.success;
    }
  }, d = a();
  return /* @__PURE__ */ c(
    Dn,
    {
      variant: o,
      sx: {
        borderRadius: 4,
        maxWidth: 400,
        margin: "0 auto",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)"
        },
        ...d.card
      },
      children: /* @__PURE__ */ v($r, { sx: { p: 3 }, children: [
        /* @__PURE__ */ v(b, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }, children: [
          /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ c(hi, { sx: {
              width: 48,
              height: 48,
              background: d.surface.background,
              border: d.surface.border,
              backdropFilter: "blur(10px)"
            }, children: /* @__PURE__ */ c(Rc, { sx: {
              color: i.helpers.text.primary,
              fontSize: 24
            } }) }),
            /* @__PURE__ */ v(b, { children: [
              /* @__PURE__ */ c(Ve, { sx: {
                color: i.helpers.text.primary,
                mb: 0.5
              }, children: e }),
              t && /* @__PURE__ */ c(ve, { sx: {
                color: i.helpers.text.secondary
              }, children: t })
            ] })
          ] }),
          /* @__PURE__ */ c(
            tt,
            {
              size: "small",
              sx: {
                color: i.helpers.text.secondary,
                "&:hover": {
                  background: i.helpers.state.hover
                }
              },
              children: /* @__PURE__ */ c(yi, {})
            }
          )
        ] }),
        /* @__PURE__ */ c(b, { sx: { mb: 3 }, children: r.map((f) => {
          const p = s(f.category);
          return /* @__PURE__ */ v(
            b,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 3,
                p: 2.5,
                mb: 2,
                borderRadius: 3,
                background: d.surface.background,
                border: d.surface.border,
                backdropFilter: "blur(10px)",
                transition: "all 0.2s ease",
                "&:hover": {
                  background: i.helpers.state.hover,
                  transform: "translateX(4px)"
                }
              },
              children: [
                /* @__PURE__ */ c(hi, { sx: {
                  width: 48,
                  height: 48,
                  background: p.bg,
                  color: p.text,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                }, children: f.icon || p.icon }),
                /* @__PURE__ */ v(b, { sx: { flex: 1 }, children: [
                  /* @__PURE__ */ v(b, { sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1
                  }, children: [
                    /* @__PURE__ */ c(Ve, { sx: {
                      fontWeight: 400,
                      color: i.helpers.text.primary
                    }, children: f.merchant }),
                    /* @__PURE__ */ v(kr, { sx: {
                      fontWeight: 400,
                      color: i.helpers.text.primary
                    }, children: [
                      "$",
                      f.amount.toFixed(2)
                    ] })
                  ] }),
                  /* @__PURE__ */ v(b, { sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }, children: [
                    /* @__PURE__ */ c(
                      nr,
                      {
                        label: f.category,
                        size: "small",
                        sx: {
                          backgroundColor: p.bg,
                          color: p.text,
                          fontSize: "0.75rem",
                          height: 24,
                          fontWeight: 400,
                          "& .MuiChip-label": {
                            px: 1.5
                          }
                        }
                      }
                    ),
                    /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                      /* @__PURE__ */ c(ve, { sx: {
                        color: i.helpers.text.secondary
                      }, children: f.time }),
                      f.status && /* @__PURE__ */ c(b, { sx: {
                        width: 8,
                        height: 8,
                        backgroundColor: l(f.status),
                        borderRadius: "50%"
                      } })
                    ] })
                  ] })
                ] })
              ]
            },
            f.id
          );
        }) }),
        n && /* @__PURE__ */ v(Er, { children: [
          /* @__PURE__ */ c(nn, { sx: {
            mb: 3,
            borderColor: i.helpers.border.secondary + "40"
          } }),
          /* @__PURE__ */ v(b, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ c(
              tt,
              {
                onClick: n,
                sx: {
                  width: 48,
                  height: 48,
                  background: i.palette.accent,
                  color: i.palette.white,
                  "&:hover": {
                    background: "#E54A00",
                    transform: "scale(1.05)"
                  },
                  transition: "all 0.2s ease"
                },
                children: /* @__PURE__ */ c(yi, {})
              }
            ),
            /* @__PURE__ */ c(ve, { sx: {
              mt: 1,
              color: i.helpers.text.secondary,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Explorar más" })
          ] })
        ] })
      ] })
    }
  );
}, kh = Le(K)(({ stepSize: e, theme: t }) => ({
  fontSize: e === "small" ? "2rem" : e === "large" ? "4rem" : "3rem",
  fontWeight: 400,
  lineHeight: 0.9,
  fontFamily: '"Red Hat Display", sans-serif',
  letterSpacing: "-0.02em",
  color: t.palette.text.primary,
  [t.breakpoints.down("md")]: {
    fontSize: e === "small" ? "1.8rem" : e === "large" ? "3.5rem" : "2.5rem"
  },
  [t.breakpoints.down("sm")]: {
    fontSize: e === "small" ? "1.5rem" : e === "large" ? "3rem" : "2.2rem"
  },
  [t.breakpoints.down("xs")]: {
    fontSize: e === "small" ? "1.3rem" : e === "large" ? "2.5rem" : "2rem"
  }
})), Mg = ({
  number: e,
  title: t,
  description: r,
  color: n = "primary.main",
  size: o = "medium",
  sx: i,
  ...a
}) => {
  const s = se(), l = () => {
    switch (o) {
      case "small":
        return {
          numberSize: 60,
          fontSize: "2rem",
          titleSize: "1rem",
          descriptionSize: "0.85rem"
        };
      case "large":
        return {
          numberSize: 100,
          fontSize: "4rem",
          titleSize: "1.3rem",
          descriptionSize: "1rem"
        };
      default:
        return {
          numberSize: 80,
          fontSize: "3rem",
          titleSize: "1.1rem",
          descriptionSize: "0.9rem"
        };
    }
  }, { numberSize: d, titleSize: f, descriptionSize: p } = l();
  return /* @__PURE__ */ v(
    b,
    {
      sx: {
        display: "flex",
        mb: 2,
        alignItems: "flex-start",
        p: 2,
        borderRadius: 2,
        background: s.contrast.surface,
        border: `1px solid ${s.contrast.border}`,
        transition: "all 0.2s ease",
        "&:hover": {
          borderColor: s.contrast.text.secondary,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
        },
        ...i
      },
      ...a,
      children: [
        /* @__PURE__ */ c(
          b,
          {
            sx: {
              width: d,
              height: d,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              mr: 3,
              position: "relative",
              borderRadius: "50%",
              background: s.contrast.background,
              border: `2px solid ${s.contrast.text.secondary}`
            },
            children: /* @__PURE__ */ c(
              kh,
              {
                stepSize: o,
                sx: {
                  textAlign: "center",
                  fontWeight: 400,
                  color: s.contrast.text.secondary
                },
                children: e
              }
            )
          }
        ),
        /* @__PURE__ */ v(b, { sx: { flex: 1, pt: o === "large" ? 1.5 : o === "medium" ? 1 : 0.5 }, children: [
          /* @__PURE__ */ c(
            Be,
            {
              sx: {
                fontWeight: 400,
                fontSize: f,
                mb: 1,
                color: s.contrast.text.primary,
                lineHeight: 1.3,
                letterSpacing: "-0.01em"
              },
              children: t
            }
          ),
          /* @__PURE__ */ c(
            Be,
            {
              sx: {
                fontSize: p,
                lineHeight: 1.5,
                color: s.contrast.text.secondary,
                fontWeight: 400
              },
              children: r
            }
          )
        ] })
      ]
    }
  );
}, Ih = Le(b)(({ theme: e }) => {
  const t = e.palette.mode === "light";
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px",
    marginBottom: "8px",
    border: `1px solid ${t ? "#000" : "#fff"}`,
    transition: "all 0.1s steps(2)",
    "&:hover": {
      backgroundColor: t ? "#000" : "#fff",
      color: t ? "#fff" : "#000",
      transform: "translateX(4px)"
    }
  };
}), Dg = ({
  title: e,
  subtitle: t = "",
  categories: r,
  totalAmount: n = 0,
  onAddCategory: o = () => {
  },
  variant: i = "industrial"
}) => {
  const a = se(), s = a.effectiveMode === "light";
  return /* @__PURE__ */ v(
    Dn,
    {
      variant: i,
      label: "FINANCE_CORE_V1",
      sx: {
        maxWidth: 450,
        margin: "0 auto"
      },
      children: [
        /* @__PURE__ */ c(b, { sx: { mb: 4 }, children: /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 2, mb: 1 }, children: [
          /* @__PURE__ */ c(b, { sx: {
            width: 48,
            height: 48,
            border: `2px solid ${s ? "#000" : "#fff"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: s ? "#000" : "#fff",
            color: s ? "#fff" : "#000"
          }, children: /* @__PURE__ */ c(Lc, {}) }),
          /* @__PURE__ */ v(b, { children: [
            /* @__PURE__ */ c(K, { sx: { ...oe.display.medium, fontSize: "1.5rem", mb: 0 }, children: e }),
            t && /* @__PURE__ */ v(K, { sx: { ...oe.label.secondary }, children: [
              "// ",
              t
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ v(b, { sx: {
          p: 3,
          border: `4px solid ${s ? "#000" : "#fff"}`,
          mb: 4,
          position: "relative"
        }, children: [
          /* @__PURE__ */ c(K, { sx: { ...oe.label.main, mb: 1 }, children: '"TOTAL_BUDGET"' }),
          /* @__PURE__ */ v(b, { sx: { display: "flex", justifyContent: "space-between", alignItems: "flex-end" }, children: [
            /* @__PURE__ */ v(kr, { sx: { fontSize: "3rem", fontWeight: 900, mb: 0 }, children: [
              "$",
              n == null ? void 0 : n.toLocaleString()
            ] }),
            /* @__PURE__ */ c(
              tt,
              {
                onClick: o,
                sx: {
                  borderRadius: 0,
                  border: `2px solid ${s ? "#000" : "#fff"}`,
                  bgcolor: a.palette.accentColors.mint,
                  color: "#000",
                  "&:hover": {
                    bgcolor: a.palette.accentColors.orange
                  }
                },
                children: /* @__PURE__ */ c(Bc, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ c(K, { sx: { ...oe.label.main, mb: 2 }, children: '"DISTRIBUTION_LOG"' }),
        /* @__PURE__ */ c(b, { sx: { mb: 4 }, children: r.map((l, d) => /* @__PURE__ */ v(Ih, { children: [
          /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ c(K, { sx: { ...oe.label.secondary, opacity: 0.5 }, children: String(d + 1).padStart(2, "0") }),
            /* @__PURE__ */ c(K, { sx: { fontWeight: 700, textTransform: "uppercase" }, children: l.name })
          ] }),
          /* @__PURE__ */ v(K, { sx: { fontWeight: 900, fontFamily: "monospace" }, children: [
            "$",
            l.amount.toLocaleString()
          ] })
        ] }, d)) }),
        /* @__PURE__ */ v(b, { sx: {
          pt: 2,
          borderTop: `1px dashed ${s ? "#000" : "#fff"}`,
          opacity: 0.5,
          display: "flex",
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ c(K, { sx: { ...oe.label.secondary }, children: "SYSTEM_VERSION_2.0.4" }),
          /* @__PURE__ */ c(K, { sx: { ...oe.label.secondary }, children: (/* @__PURE__ */ new Date()).toLocaleDateString() })
        ] })
      ]
    }
  );
}, Ah = Le(K, {
  shouldForwardProp: (e) => e !== "metricSize"
})(({ metricSize: e, theme: t }) => ({
  fontSize: e === "compact" ? "3rem" : e === "large" ? "7rem" : "5rem",
  fontWeight: 900,
  // Brutalist impact
  lineHeight: 0.85,
  fontFamily: '"Red Hat Display", sans-serif',
  letterSpacing: "-0.05em",
  margin: 0,
  padding: 0,
  color: "inherit",
  textTransform: "uppercase",
  [t.breakpoints.down("sm")]: {
    fontSize: e === "compact" ? "2.5rem" : e === "large" ? "4rem" : "3.5rem"
  }
})), Oh = Le(b)(({ theme: e }) => ({
  ...oe.label.secondary,
  fontSize: "0.65rem",
  position: "absolute",
  top: 10,
  left: 10,
  opacity: 0.5
})), Ng = (e) => {
  const {
    title: t,
    value: r,
    subtitle: n,
    iconType: o = "dot",
    trend: i = "neutral",
    size: a = "normal",
    onClick: s,
    label: l = "METRIC_SYSTEM"
  } = e, d = se();
  d.effectiveMode;
  const f = () => {
    switch (i) {
      case "up":
        return d.palette.accentColors.mint;
      case "down":
        return d.palette.accentColors.orange;
      default:
        return "inherit";
    }
  };
  return /* @__PURE__ */ v(
    Ro,
    {
      onClick: s,
      sx: {
        cursor: s ? "pointer" : "default",
        minHeight: (p) => a === "compact" ? p.spacing(20) : a === "large" ? p.spacing(40) : p.spacing(25),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        // Functional left alignment
        p: 4,
        position: "relative",
        overflow: "hidden",
        bgcolor: d.helpers.background.primary,
        color: d.helpers.text.primary,
        borderRadius: 0,
        border: `2px solid ${d.helpers.text.primary}`,
        // Radical Industrial Border
        transition: "all 0.15s steps(4, end)",
        "&:hover": {
          transform: s ? "translate(-4px, -4px)" : "none",
          boxShadow: s ? `8px 8px 0px 0px ${d.helpers.text.primary}` : "none",
          "& .metric-bg": { opacity: 0.1 }
        }
      },
      children: [
        /* @__PURE__ */ v(Oh, { children: [
          '"',
          l,
          '"'
        ] }),
        /* @__PURE__ */ c(
          b,
          {
            className: "metric-bg",
            sx: {
              position: "absolute",
              bottom: -20,
              right: -10,
              opacity: 0.05,
              fontSize: "10rem",
              fontWeight: 900,
              pointerEvents: "none",
              transition: "all 0.3s"
            },
            children: o === "dot" ? "•" : "#"
          }
        ),
        /* @__PURE__ */ c(b, { sx: { mt: 2, mb: 1, width: "100%", position: "relative", zIndex: 1 }, children: /* @__PURE__ */ c(Ah, { metricSize: a, children: typeof r == "number" ? r.toLocaleString() : r }) }),
        /* @__PURE__ */ v(b, { sx: {
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          mb: 1,
          width: "100%",
          position: "relative",
          zIndex: 1
        }, children: [
          /* @__PURE__ */ c(
            K,
            {
              sx: {
                ...oe.label.main,
                color: "inherit"
              },
              children: t
            }
          ),
          i !== "neutral" && /* @__PURE__ */ c(b, { sx: { color: f(), display: "flex" }, children: /* @__PURE__ */ c(
            Qr,
            {
              type: "triangle",
              size: "small",
              color: "inherit",
              variant: "filled",
              sx: { transform: i === "down" ? "rotate(180deg)" : "none" }
            }
          ) })
        ] }),
        n && /* @__PURE__ */ c(
          K,
          {
            sx: {
              ...oe.body.small,
              color: "inherit",
              opacity: 0.6,
              maxWidth: "90%",
              position: "relative",
              zIndex: 1
            },
            children: n
          }
        ),
        /* @__PURE__ */ c(
          b,
          {
            sx: {
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: 4,
              bgcolor: i !== "neutral" ? f() : "transparent",
              opacity: 0.8
            }
          }
        )
      ]
    }
  );
}, _h = He(/* @__PURE__ */ c("path", {
  d: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"
}), "CalendarMonth"), Qe = {
  HOME: "/",
  SERVICES: "/servicios",
  WHY_AI4U: "/por-que-ai4u",
  PORTFOLIO: "/portafolio",
  SUPER_AI: "/super-ai",
  DESIGN_SYSTEM: "/design-system"
}, Rh = {
  CONTACT: {
    CALENDLY: "calendly.com/mgarciap333/ai4u"
  }
};
T.accent, T.gray[600], T.success, T.warning, T.error, T.info;
zn.sm, zn.md, zn.lg;
const Ph = `https://${Rh.CONTACT.CALENDLY}`, si = ({
  variant: e = "primary",
  size: t = "medium",
  showIcon: r = !1,
  text: n,
  className: o,
  sx: i
}) => /* @__PURE__ */ c(
  Do,
  {
    variant: e,
    size: t,
    onClick: () => {
      Xo.trackConsultationRequest("calendly", "diagnostic"), window.open(Ph, "_blank", "noopener,noreferrer");
    },
    startIcon: r ? /* @__PURE__ */ c(_h, {}) : void 0,
    className: o,
    sx: i,
    children: n || "Diagnóstico gratis"
  }
), zg = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AI4U",
  url: "https://www.ai4u.com.co",
  description: "Soluciones de Inteligencia Artificial personalizadas para tu negocio",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.ai4u.com.co/servicios?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}), Fg = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Servicios de Inteligencia Artificial",
  description: "Catálogo completo de servicios de IA personalizados",
  url: "https://www.ai4u.com.co/servicios",
  numberOfItems: 4,
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Operación",
      description: "Eficiencia continua. Optimiza tiempo y recursos.",
      url: "https://www.ai4u.com.co/servicios#OPERATION"
    },
    {
      "@type": "Service",
      position: 2,
      name: "Estrategia",
      description: "Data real. Decisiones con ventaja competitiva.",
      url: "https://www.ai4u.com.co/servicios#STRATEGY"
    },
    {
      "@type": "Service",
      position: 3,
      name: "Educación",
      description: "Evolución humana. Tu equipo dominando la IA.",
      url: "https://www.ai4u.com.co/servicios#EDUCATION"
    },
    {
      "@type": "Service",
      position: 4,
      name: "Transformación",
      description: "Infraestructura IA. Diseñada para escalar.",
      url: "https://www.ai4u.com.co/servicios#TRANSFORMATION"
    }
  ]
}), Mh = (e) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: e.title,
  description: e.description,
  provider: {
    "@type": "Organization",
    name: "AI4U",
    url: "https://www.ai4u.com.co"
  },
  areaServed: {
    "@type": "Country",
    name: "Colombia"
  },
  serviceType: e.category,
  offers: {
    "@type": "Offer",
    price: e.price || "Consultar",
    priceCurrency: "COP",
    availability: "https://schema.org/InStock"
  }
}), Lg = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Casos de Uso de IA",
  description: "Casos de éxito y aplicaciones de inteligencia artificial",
  url: "https://www.ai4u.com.co/casos-de-uso",
  itemListElement: [
    {
      "@type": "CreativeWork",
      position: 1,
      name: "Automatización de Atención al Cliente",
      description: "Chatbots inteligentes para atención 24/7"
    },
    {
      "@type": "CreativeWork",
      position: 2,
      name: "Análisis de Datos Empresariales",
      description: "Machine Learning para insights de negocio"
    },
    {
      "@type": "CreativeWork",
      position: 3,
      name: "Optimización de Procesos",
      description: "IA para mejorar eficiencia operacional"
    }
  ]
}), Bg = (e) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: e.map((t) => ({
    "@type": "Question",
    name: t.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: t.answer
    }
  }))
}), Dh = (e) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: e.map((t, r) => ({
    "@type": "ListItem",
    position: r + 1,
    name: t.name,
    item: t.url
  }))
}), Wg = (e) => {
  const t = {
    home: {
      title: "AI4U - Recupera tu Tiempo con Equipos de Agentes de IA",
      description: "El tiempo es oro. Te ayudamos a crear y administrar tu equipo de agentes de IA para orquestar tu libertad operativa. Infraestructura privada y segura.",
      keywords: "infraestructura IA, agentes de IA, orquestación IA, digital workforce, AI4U, SuperAI, automatización empresarial, Colombia"
    },
    services: {
      title: "Servicios de Inteligencia Artificial | AI4U",
      description: "Soluciones de IA organizadas en 4 ejes: Operación, Estrategia, Educación y Transformación. IA diseñada para resolver problemas reales.",
      keywords: "servicios IA, operación IA, estrategia IA, educación IA, transformación digital IA, SuperAI"
    },
    why: {
      title: "¿Por qué AI4U? | Casos de Éxito e Infraestructura de IA",
      description: "Descubre por qué somos tu mejor aliado en IA. Explora nuestros casos de éxito y la metodología que genera resultados reales.",
      keywords: "por qué AI4U, casos de éxito IA, ventajas IA, experiencia inteligencia artificial, resultados IA, Colombia"
    },
    portfolio: {
      title: "Portafolio de Innovación | Proyectos de IA | AI4U",
      description: "Explora nuestro portafolio de innovación. Proyectos reales de IA aplicados a diferentes industrias: desde Fashion Tech hasta E-Mobility.",
      keywords: "portafolio innovación, proyectos IA, casos éxito IA, IA aplicada, Fashion Tech IA, E-Mobility IA"
    }
  };
  return t[e] || t.home;
}, jg = (e = "") => `https://www.ai4u.com.co${e}`, Vg = (e, t = 160) => e.length <= t ? e : e.substring(0, t - 3) + "...", Ug = (e, t = []) => [...e, ...t].join(", "), Hg = ({
  service: e,
  showPrice: t = !0,
  compact: r = !1,
  onClick: n
}) => {
  const o = se(), i = Mh(e), s = ((l) => {
    const d = {
      "eje:operation": "Operación",
      "eje:strategy": "Estrategia",
      "eje:education": "Educación",
      "eje:transformation": "Transformación"
    };
    return l.filter((f) => f.startsWith("eje:")).map((f) => d[f] || f.replace("eje:", ""));
  })(e.tags);
  return /* @__PURE__ */ v(Er, { children: [
    /* @__PURE__ */ c(
      Ls,
      {
        structuredData: i,
        noIndex: !0
      }
    ),
    /* @__PURE__ */ c(b, { sx: {
      height: "100%",
      position: "relative",
      transition: "all 0.2s ease",
      "&:hover": {
        "& .service-card-content": {
          borderColor: e.color || o.contrast.text.primary
        }
      }
    }, children: /* @__PURE__ */ v(
      b,
      {
        className: "service-card-content",
        onClick: n,
        sx: {
          p: r ? 2.5 : 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background: T.white,
          // Siempre blanco para máximo contraste "sticker"
          border: `3px solid ${T.black}`,
          // Siempre borde negro
          borderRadius: 0,
          transition: "all 0.1s ease",
          overflow: "hidden",
          boxShadow: `4px 4px 0px ${e.color || T.black}`,
          cursor: n ? "pointer" : "default",
          "&:hover": {
            transform: n ? "translate(-2px, -2px)" : "none",
            boxShadow: n ? `8px 8px 0px ${e.color || T.black}` : `4px 4px 0px ${e.color || T.black}`
          }
        },
        children: [
          /* @__PURE__ */ c(b, { sx: {
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 0.5
          }, children: s.map((l, d) => /* @__PURE__ */ c(
            nr,
            {
              label: l,
              size: "small",
              sx: {
                background: T.black,
                color: T.white,
                fontWeight: 400,
                fontSize: "0.6rem",
                height: 20,
                borderRadius: 0,
                textTransform: "none",
                letterSpacing: "0.1em",
                "& .MuiChip-label": {
                  px: 1
                }
              }
            },
            d
          )) }),
          /* @__PURE__ */ v(b, { sx: {
            mb: 2,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column"
          }, children: [
            /* @__PURE__ */ c(
              K,
              {
                sx: {
                  color: T.black,
                  // Forzar negro para el título
                  fontSize: { xs: "1.4rem", md: "1.8rem" },
                  fontWeight: 400,
                  lineHeight: 1.1,
                  textAlign: "left",
                  textTransform: "none",
                  mb: 2,
                  display: "flex",
                  alignItems: "flex-start",
                  "&::before": {
                    content: '"■"',
                    color: e.color || T.black,
                    mr: 1.5,
                    fontSize: "1.2rem"
                  }
                },
                children: e.title
              }
            ),
            /* @__PURE__ */ c(Be, { sx: {
              lineHeight: 1.4,
              color: T.black,
              // Forzar negro para el cuerpo
              fontSize: "1rem",
              textAlign: "left",
              mb: 0,
              fontWeight: 400,
              opacity: 0.9,
              pl: 4
            }, children: e.description })
          ] }),
          /* @__PURE__ */ c(b, { sx: {
            mt: "auto",
            pt: 2,
            borderTop: `1px solid ${o.contrast.divider}`
          }, children: t && /* @__PURE__ */ v(b, { sx: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1
          }, children: [
            /* @__PURE__ */ c(Be, { sx: {
              fontWeight: 400,
              color: o.contrast.text.secondary,
              fontSize: "0.85rem"
            }, children: "Precio:" }),
            /* @__PURE__ */ c(K, { sx: {
              fontWeight: 400,
              color: o.contrast.text.primary,
              fontSize: "1.1rem"
            }, children: e.price })
          ] }) })
        ]
      }
    ) })
  ] });
}, Gg = ({
  items: e,
  showHome: t = !0
}) => {
  const r = Mo(), n = t ? [{ name: "Inicio", path: "/" }, ...e] : e, o = Dh(
    n.map((a) => ({
      name: a.name,
      url: `https://ai4u.com.co${a.path}`
    }))
  ), i = (a) => {
    r(a);
  };
  return /* @__PURE__ */ v(b, { children: [
    /* @__PURE__ */ c(Ls, { structuredData: o }),
    /* @__PURE__ */ c(
      b,
      {
        component: "nav",
        "aria-label": "Breadcrumb",
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1,
          py: 2,
          px: { xs: 2, md: 0 },
          fontSize: "0.875rem",
          color: "text.secondary"
        },
        children: n.map((a, s) => [
          s > 0 && /* @__PURE__ */ c(
            K,
            {
              component: "span",
              sx: {
                mx: 1,
                color: "text.disabled",
                fontSize: "0.75rem"
              },
              children: "/"
            },
            `separator-${s}`
          ),
          a.current ? /* @__PURE__ */ c(
            K,
            {
              component: "span",
              sx: {
                color: "text.primary",
                fontWeight: 400,
                fontSize: "inherit"
              },
              children: a.name
            },
            a.path
          ) : /* @__PURE__ */ c(
            Ga,
            {
              component: "button",
              onClick: () => i(a.path),
              sx: {
                color: "text.secondary",
                textDecoration: "none",
                fontSize: "inherit",
                "&:hover": {
                  color: "primary.main",
                  textDecoration: "underline"
                }
              },
              children: a.name
            },
            a.path
          )
        ].filter(Boolean))
      }
    )
  ] });
};
class Yg extends sn {
  constructor(r) {
    super(r);
    ze(this, "handleRetry", () => {
      this.setState({ hasError: !1, error: void 0, errorInfo: void 0 });
    });
    this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(r) {
    return {
      hasError: !0,
      error: r
    };
  }
  componentDidCatch(r, n) {
    this.setState({ errorInfo: n }), rf.captureError({
      message: r.message,
      stack: r.stack,
      componentStack: n.componentStack ?? void 0,
      errorBoundary: !0,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }), this.props.onError && this.props.onError(r, n);
  }
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ c(ft, { maxWidth: "md", sx: { py: 8 }, children: /* @__PURE__ */ v(
      b,
      {
        sx: {
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3
        },
        children: [
          /* @__PURE__ */ v(
            yc,
            {
              severity: "error",
              sx: {
                width: "100%",
                borderRadius: 2,
                "& .MuiAlert-message": {
                  width: "100%"
                }
              },
              children: [
                /* @__PURE__ */ c(bc, { children: /* @__PURE__ */ c(Xa, { component: "span", children: "Oops! Algo salió mal" }) }),
                /* @__PURE__ */ c(Be, { sx: { mt: 1, mb: 2 }, children: "Ha ocurrido un error inesperado. Nuestro equipo ha sido notificado y estamos trabajando para solucionarlo." }),
                !1
              ]
            }
          ),
          /* @__PURE__ */ v(b, { sx: { display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }, children: [
            /* @__PURE__ */ c(
              yt,
              {
                variant: "contained",
                startIcon: /* @__PURE__ */ c(Wc, {}),
                onClick: this.handleRetry,
                sx: { minWidth: 120 },
                children: "Reintentar"
              }
            ),
            /* @__PURE__ */ c(
              yt,
              {
                variant: "outlined",
                onClick: () => window.location.reload(),
                sx: { minWidth: 120 },
                children: "Recargar Página"
              }
            ),
            /* @__PURE__ */ c(
              yt,
              {
                variant: "text",
                onClick: () => window.location.href = "/",
                sx: { minWidth: 120 },
                children: "Ir al Inicio"
              }
            )
          ] }),
          /* @__PURE__ */ c(Be, { sx: { color: "text.secondary", fontSize: "0.875rem" }, children: "Si el problema persiste, por favor contacta nuestro soporte técnico." })
        ]
      }
    ) }) : this.props.children;
  }
}
const qg = (e) => {
  const {
    pages: t,
    title: r,
    variant: n = "vertical",
    className: o
  } = e, i = se(), a = "También podrías estar interesado en:", s = t.slice(0, 3);
  if (s.length === 0) return null;
  const l = () => n === "horizontal" ? /* @__PURE__ */ c(
    Ee,
    {
      direction: "row",
      spacing: 3,
      sx: { gap: 2, alignItems: "center", flexWrap: "wrap" },
      children: s.map((d, f) => /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
        /* @__PURE__ */ v(b, { children: [
          /* @__PURE__ */ c(
            br,
            {
              to: d.to,
              variant: "subtle",
              trackingLabel: d.trackingLabel || `related_${d.to.replace("/", "")}`,
              ariaLabel: d.context || d.label,
              children: /* @__PURE__ */ c(ve, { sx: { fontWeight: 400, fontSize: "0.875rem" }, children: d.label })
            }
          ),
          d.context && /* @__PURE__ */ c(
            ve,
            {
              sx: {
                color: i.contrast.text.secondary,
                fontSize: "0.75rem",
                mt: 0.5,
                display: "block"
              },
              children: d.context
            }
          )
        ] }),
        f < s.length - 1 && /* @__PURE__ */ c(Wf, { variant: "separator", size: "small" })
      ] }, d.to))
    }
  ) : /* @__PURE__ */ c(Ee, { spacing: 3, children: s.map((d) => /* @__PURE__ */ v(b, { children: [
    /* @__PURE__ */ c(
      br,
      {
        to: d.to,
        variant: "subtle",
        trackingLabel: d.trackingLabel || `related_${d.to.replace("/", "")}`,
        ariaLabel: d.context || d.label,
        children: /* @__PURE__ */ c(ve, { sx: { fontWeight: 400, fontSize: "0.875rem" }, children: d.label })
      }
    ),
    d.context && /* @__PURE__ */ c(
      ve,
      {
        sx: {
          color: i.contrast.text.secondary,
          fontSize: "0.75rem",
          mt: 0.5,
          display: "block"
        },
        children: d.context
      }
    )
  ] }, d.to)) });
  return /* @__PURE__ */ v(
    b,
    {
      className: o,
      sx: {
        py: 4,
        borderTop: `1px solid ${i.contrast.divider}`,
        borderBottom: `1px solid ${i.contrast.divider}`,
        backgroundColor: i.contrast.surface
      },
      children: [
        /* @__PURE__ */ c(
          ve,
          {
            sx: {
              color: i.contrast.text.secondary,
              fontWeight: 400,
              mb: 3,
              fontSize: "0.8rem",
              textTransform: "none",
              letterSpacing: "0.5px"
            },
            children: r || a
          }
        ),
        l()
      ]
    }
  );
}, Kg = (e) => {
  const {
    serviceName: t,
    serviceSlug: r,
    description: n,
    caseStudy: o,
    variant: i = "minimal",
    className: a
  } = e, s = se();
  return i === "minimal" ? /* @__PURE__ */ v(b, { className: a, sx: { display: "inline-flex", alignItems: "center", gap: 1 }, children: [
    /* @__PURE__ */ c(
      br,
      {
        to: `/servicios#${r}`,
        variant: "inline",
        trackingLabel: `service_cross_link_${r}`,
        ariaLabel: `Conoce más sobre ${t}`,
        children: /* @__PURE__ */ c(ve, { sx: { fontWeight: 400 }, children: t })
      }
    ),
    /* @__PURE__ */ c(
      Qr,
      {
        type: "circle",
        size: "small",
        color: s.contrast.text.disabled,
        variant: "minimal"
      }
    )
  ] }) : /* @__PURE__ */ c(
    b,
    {
      className: a,
      sx: {
        p: 3,
        borderRadius: 2,
        backgroundColor: s.contrast.surface,
        border: `1px solid ${s.contrast.divider}`,
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: s.palette.accent,
          backgroundColor: s.palette.white
        }
      },
      children: /* @__PURE__ */ v(Ee, { spacing: 2, children: [
        /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
          /* @__PURE__ */ c(
            Qr,
            {
              type: "square",
              size: "small",
              color: s.palette.accent,
              variant: "filled"
            }
          ),
          /* @__PURE__ */ c(
            br,
            {
              to: `/servicios#${r}`,
              variant: "accent",
              trackingLabel: `service_detailed_${r}`,
              ariaLabel: `Conoce el servicio ${t}`,
              children: /* @__PURE__ */ c(ve, { sx: { fontWeight: 400, fontSize: "0.9rem" }, children: t })
            }
          )
        ] }),
        n && /* @__PURE__ */ c(
          ve,
          {
            sx: {
              color: s.contrast.text.secondary,
              fontSize: "0.8rem",
              lineHeight: 1.5
            },
            children: n
          }
        ),
        o && /* @__PURE__ */ v(b, { sx: { pt: 1, borderTop: `1px solid ${s.contrast.divider}` }, children: [
          /* @__PURE__ */ c(
            ve,
            {
              sx: {
                color: s.contrast.text.secondary,
                fontSize: "0.75rem",
                mb: 1
              },
              children: "Caso real:"
            }
          ),
          /* @__PURE__ */ c(
            br,
            {
              to: `/casos-de-uso#${o.slug}`,
              variant: "subtle",
              trackingLabel: `case_from_service_${r}_to_${o.slug}`,
              ariaLabel: `Ver caso de uso en ${o.sector} con ${o.client}`,
              children: /* @__PURE__ */ v(ve, { sx: { fontWeight: 400, fontSize: "0.8rem" }, children: [
                o.client,
                " - ",
                o.sector
              ] })
            }
          )
        ] })
      ] })
    }
  );
}, Xg = ({
  selectedValue: e,
  onValueChange: t,
  options: r
}) => {
  const n = se();
  return /* @__PURE__ */ v(b, { sx: { mb: 4 }, children: [
    /* @__PURE__ */ c(b, { sx: {
      mb: 2,
      fontSize: "1rem",
      fontWeight: 400,
      textTransform: "none",
      letterSpacing: "0.1em",
      color: n.contrast.text.primary
    }, children: "// Tipo de servicio" }),
    /* @__PURE__ */ c(Ee, { direction: "row", spacing: 2, useFlexGap: !0, sx: { flexWrap: "wrap" }, children: r.map((o, i) => /* @__PURE__ */ c(
      nr,
      {
        label: o.label,
        size: "medium",
        onClick: () => t(o.value),
        sx: {
          borderRadius: "9999px",
          background: e === o.value ? n.contrast.text.primary : "transparent",
          color: e === o.value ? n.contrast.background : n.contrast.text.primary,
          border: `3px solid ${n.contrast.text.primary}`,
          fontSize: "0.9rem",
          fontWeight: 400,
          textTransform: "none",
          px: 2,
          height: "40px",
          cursor: "pointer",
          transition: "all 0.1s ease",
          "&:hover": {
            background: e === o.value ? n.contrast.text.primary : "rgba(0,0,0,0.05)",
            transform: "translate(-2px, -2px)",
            boxShadow: `4px 4px 0px ${n.contrast.text.primary}`
          }
        }
      },
      i
    )) })
  ] });
}, Qg = ({
  totalCount: e,
  filteredCount: t,
  activeFilters: r
}) => {
  const n = se(), o = r.length > 0, i = t !== e;
  return /* @__PURE__ */ c(b, { sx: {
    py: 1,
    mb: 2
  }, children: /* @__PURE__ */ v(Ee, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
    /* @__PURE__ */ c(
      Qr,
      {
        type: "dot",
        size: "small",
        color: n.contrast.text.secondary,
        variant: "minimal"
      }
    ),
    /* @__PURE__ */ v(K, { variant: "body2", sx: {
      color: n.contrast.text.secondary,
      fontSize: "0.875rem"
    }, children: [
      i ? `${t} de ${e}` : `${e}`,
      " servicios",
      o && /* @__PURE__ */ v("span", { style: { color: n.contrast.text.primary }, children: [
        " • ",
        r.join(", ")
      ] })
    ] })
  ] }) });
}, Jg = ({
  title: e,
  subtitle: t,
  children: r,
  defaultExpanded: n = !1,
  variant: o = "minimal",
  showIcon: i = !0,
  sx: a = {}
}) => {
  const [s, l] = ee(n), d = se(), f = d.effectiveMode === "dark", p = () => {
    l(!s);
  }, m = (() => {
    switch (o) {
      case "card":
        return {
          container: {
            background: f ? d.palette.black : d.palette.white,
            border: `3px solid ${f ? d.palette.white : d.palette.black}`,
            color: f ? d.palette.white : d.palette.black,
            borderRadius: 0,
            p: 4,
            transition: "all 0.1s ease",
            "&:hover": {
              transform: "translate(-4px, -4px)",
              boxShadow: f ? "6px 6px 0px #FFFFFF" : "6px 6px 0px #171717"
            }
          }
        };
      case "bordered":
        return {
          container: {
            borderBottom: `3px solid ${f ? d.palette.white : d.palette.black}`,
            color: f ? d.palette.white : d.palette.black,
            pb: 3,
            mb: 3
          }
        };
      default:
        return {
          container: {
            color: "inherit",
            mb: 4
          }
        };
    }
  })();
  return /* @__PURE__ */ v(b, { sx: { ...m.container, ...a }, children: [
    /* @__PURE__ */ v(
      b,
      {
        sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          userSelect: "none",
          py: 2
        },
        onClick: p,
        children: [
          /* @__PURE__ */ v(b, { sx: { flex: 1 }, children: [
            /* @__PURE__ */ c(Ve, { sx: {
              color: "inherit",
              fontWeight: 400,
              fontSize: "1.2rem",
              textTransform: "none",
              letterSpacing: "0em"
            }, children: e }),
            t && /* @__PURE__ */ c(Be, { sx: {
              color: "inherit",
              opacity: 0.8,
              fontSize: "1rem",
              mt: 1
            }, children: t })
          ] }),
          i && /* @__PURE__ */ c(
            tt,
            {
              size: "medium",
              sx: {
                color: "inherit",
                transform: s ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
                opacity: 0.5,
                "&:hover": {
                  opacity: 1,
                  background: "transparent"
                }
              },
              children: /* @__PURE__ */ c(jc, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ c(xc, { in: s, timeout: 100, children: /* @__PURE__ */ c(b, { sx: {
      pt: 3,
      borderTop: s ? `1px solid ${f ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}` : "none"
    }, children: r }) })
  ] });
}, Zg = ({
  summary: e,
  details: t,
  showDetails: r = !1,
  onToggle: n,
  variant: o = "inline",
  maxHeight: i = 200
}) => {
  const [a, s] = ee(r), l = se(), d = () => {
    const h = !a;
    s(h), n == null || n(h);
  }, p = (() => {
    switch (o) {
      case "separated":
        return {
          container: {
            borderTop: `1px solid ${l.contrast.divider}`,
            pt: 2,
            mt: 2
          }
        };
      case "card":
        return {
          container: {
            background: l.contrast.surface,
            border: `1px solid ${l.contrast.divider}`,
            borderRadius: 2,
            p: 2,
            mt: 2
          }
        };
      default:
        return {
          container: {
            mt: 1
          }
        };
    }
  })();
  return /* @__PURE__ */ v(b, { children: [
    /* @__PURE__ */ c(
      b,
      {
        sx: {
          mb: a ? 2 : 0,
          cursor: "pointer",
          "&:hover": {
            opacity: 0.8,
            transition: "opacity 0.2s ease"
          }
        },
        onClick: d,
        children: e
      }
    ),
    a && /* @__PURE__ */ c(b, { sx: p.container, children: /* @__PURE__ */ c(
      b,
      {
        sx: {
          maxHeight: i,
          overflow: "auto",
          transition: "all 0.3s ease",
          "&::-webkit-scrollbar": {
            width: "6px"
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent"
          },
          "&::-webkit-scrollbar-thumb": {
            background: l.contrast.divider,
            borderRadius: "3px"
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: l.contrast.text.secondary
          }
        },
        children: t
      }
    ) })
  ] });
}, e0 = ({
  items: e,
  activeItem: t,
  onItemClick: r,
  variant: n = "horizontal",
  className: o = ""
}) => {
  const i = se();
  De();
  const [a, s] = ee(null), l = (p) => {
    r && r(p), p.onClick && p.onClick();
  }, d = (p) => {
    const h = t === p.id, m = {
      fontWeight: 400,
      textTransform: "none",
      transition: "all 0.3s ease"
    };
    switch (n) {
      case "tabs":
        return {
          ...m,
          py: 1,
          px: 2,
          borderRadius: 2,
          fontSize: "0.875rem",
          whiteSpace: "nowrap",
          ...h ? {
            background: i.palette.black,
            color: i.palette.white,
            boxShadow: wt.ai4u.button
          } : {
            color: i.contrast.text.secondary,
            "&:hover": {
              color: i.contrast.text.primary,
              background: Ne(i.palette.white, 0.1)
            }
          }
        };
      case "vertical":
        return {
          ...m,
          width: "100%",
          justifyContent: "flex-start",
          py: 1.5,
          px: 2,
          borderRadius: 1,
          fontSize: "0.875rem",
          ...h ? {
            background: i.palette.black,
            color: i.palette.white,
            borderLeftWidth: 2,
            borderLeftStyle: "solid",
            borderLeftColor: i.palette.black,
            boxShadow: wt.ai4u.button
          } : {
            color: i.contrast.text.secondary,
            borderLeftWidth: 2,
            borderLeftStyle: "solid",
            borderLeftColor: "transparent",
            "&:hover": {
              color: i.contrast.text.primary,
              background: i.helpers.state.hover,
              borderLeftColor: i.palette.black
            }
          }
        };
      default:
        return {
          ...m,
          py: 1,
          px: 2,
          borderRadius: 2,
          fontSize: "0.875rem",
          whiteSpace: "nowrap",
          ...h ? {
            background: i.palette.black,
            color: i.palette.white,
            boxShadow: wt.ai4u.button
          } : {
            color: i.contrast.text.secondary,
            "&:hover": {
              color: i.contrast.text.primary,
              background: i.helpers.state.hover
            }
          }
        };
    }
  }, f = () => {
    switch (n) {
      case "tabs":
        return {
          display: "flex",
          gap: 1,
          p: 1,
          borderRadius: 3,
          background: Ne(i.palette.white, 0.05),
          backdropFilter: "blur(20px)",
          border: `1px solid ${i.contrast.border}`
        };
      case "vertical":
        return {
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          width: "100%"
        };
      default:
        return {
          display: "flex",
          gap: 1,
          alignItems: "center",
          flexWrap: "wrap"
        };
    }
  };
  return n === "tabs" ? /* @__PURE__ */ c(b, { sx: f(), className: o, children: e.map((p) => /* @__PURE__ */ c(
    yt,
    {
      onClick: () => l(p),
      sx: d(p),
      onMouseEnter: () => s(p.id),
      onMouseLeave: () => s(null),
      children: p.label
    },
    p.id
  )) }) : /* @__PURE__ */ c(b, { sx: f(), className: o, children: e.map((p) => /* @__PURE__ */ c(
    yt,
    {
      onClick: () => l(p),
      sx: d(p),
      onMouseEnter: () => s(p.id),
      onMouseLeave: () => s(null),
      children: p.label
    },
    p.id
  )) });
}, Nh = He(/* @__PURE__ */ c("path", {
  d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
}), "Instagram"), zh = He(/* @__PURE__ */ c("path", {
  d: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
}), "Facebook"), Fh = He(/* @__PURE__ */ c("path", {
  d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
}), "LinkedIn"), Lh = He(/* @__PURE__ */ c("path", {
  d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"
}), "Email"), Bh = He(/* @__PURE__ */ c("path", {
  d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"
}), "LocationOn"), Wh = He(/* @__PURE__ */ c("path", {
  d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
}), "X"), jh = He(/* @__PURE__ */ c("path", {
  d: "M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"
}), "WhatsApp"), Vh = () => {
  const e = (/* @__PURE__ */ new Date()).getFullYear();
  De();
  const t = se(), r = [
    { icon: /* @__PURE__ */ c(Nh, {}), url: "https://www.instagram.com/ai.4.u_/" },
    { icon: /* @__PURE__ */ c(zh, {}), url: "https://www.facebook.com/artificial.intelligence.4.you/" },
    { icon: /* @__PURE__ */ c(Fh, {}), url: "https://www.linkedin.com/company/ai4u-com-co" },
    { icon: /* @__PURE__ */ c(Wh, {}), url: "https://x.com/_ai4u_" }
  ], n = [
    { name: "inicio", path: Qe.HOME },
    { name: "servicios", path: Qe.SERVICES },
    { name: "portafolio", path: Qe.PORTFOLIO },
    { name: "porqueAi4u", path: Qe.WHY_AI4U },
    { name: "designSystem", path: Qe.DESIGN_SYSTEM }
  ];
  return /* @__PURE__ */ c(
    b,
    {
      sx: {
        bgcolor: t.contrast.background,
        color: t.contrast.text.primary,
        borderTop: 1,
        borderColor: t.contrast.divider,
        py: 8
      },
      children: /* @__PURE__ */ v(ft, { maxWidth: "lg", children: [
        /* @__PURE__ */ v(je, { container: !0, spacing: 8, children: [
          /* @__PURE__ */ v(je, { size: { xs: 12, md: 4 }, children: [
            /* @__PURE__ */ c(
              b,
              {
                component: "img",
                src: t.mode === "light" ? "/assets/images/isotipo-negro.png" : "/assets/images/isotipo-crema.png",
                alt: "AI4U Logo",
                sx: {
                  height: 50,
                  width: "auto",
                  mb: 4
                }
              }
            ),
            /* @__PURE__ */ c(K, { variant: "body2", sx: { color: "inherit", opacity: 0.8 }, children: "Inteligencia para tu negocio." })
          ] }),
          /* @__PURE__ */ v(je, { size: { xs: 12, md: 4 }, children: [
            /* @__PURE__ */ c(K, { sx: { ...oe.label.main, mb: 3 }, children: "enlacesRapidos" }),
            /* @__PURE__ */ c(b, { component: "nav", "aria-label": "Enlaces rápidos", children: /* @__PURE__ */ c(b, { component: "ul", sx: { p: 0, m: 0, listStyle: "none" }, children: n.map((o) => /* @__PURE__ */ c(b, { component: "li", sx: { mb: 2 }, children: /* @__PURE__ */ c(
              b,
              {
                component: Qt,
                to: o.path,
                onClick: () => po(),
                sx: {
                  color: "inherit",
                  opacity: 0.7,
                  textDecoration: "none",
                  cursor: "pointer",
                  display: "block",
                  transition: "opacity 0.2s",
                  "&:hover": { opacity: 1 }
                },
                children: o.name
              }
            ) }, o.name)) }) })
          ] }),
          /* @__PURE__ */ v(je, { size: { xs: 12, md: 4 }, children: [
            /* @__PURE__ */ c(K, { sx: { ...oe.label.main, mb: 3 }, children: "contactoDirecto" }),
            /* @__PURE__ */ v(Ee, { spacing: 2.5, children: [
              /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ c(Lh, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ c(K, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "hola@ai4u.com.co" })
              ] }),
              /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ c(jh, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ c(K, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "+57 321 817 5744" })
              ] }),
              /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ c(Bh, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ c(K, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "Medellín, Colombia" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ c(nn, { sx: { my: 6, borderColor: t.contrast.divider, opacity: 0.1 } }),
        /* @__PURE__ */ v(b, { sx: {
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", md: "center" },
          gap: 4
        }, children: [
          /* @__PURE__ */ v(Ee, { spacing: 1, sx: { alignItems: { xs: "center", md: "flex-start" } }, children: [
            /* @__PURE__ */ c(ve, { sx: { color: "inherit", opacity: 0.6 }, children: `© ${e} AI4U. todosLosDerechosReservados.` }),
            /* @__PURE__ */ v(b, { sx: { display: "flex", gap: 2, alignItems: "center" }, children: [
              /* @__PURE__ */ v(
                K,
                {
                  sx: {
                    ...oe.ui.code,
                    color: "inherit",
                    opacity: 0.5,
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em"
                  },
                  children: [
                    "REV_2.1 // ",
                    (/* @__PURE__ */ new Date()).getTime().toString(2).slice(-16)
                  ]
                }
              ),
              /* @__PURE__ */ v(
                K,
                {
                  sx: {
                    ...oe.ui.code,
                    color: "inherit",
                    opacity: 0.5,
                    fontSize: "0.75rem",
                    letterSpacing: "0.05em",
                    fontWeight: 400
                  },
                  children: [
                    "architectureBy ",
                    /* @__PURE__ */ c(b, { component: "span", sx: { fontWeight: 400 }, children: "mariano | 마리아노" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ c(Ee, { direction: "row", spacing: 2, children: r.map((o, i) => /* @__PURE__ */ c(
            tt,
            {
              component: "a",
              href: o.url,
              target: "_blank",
              rel: "noopener noreferrer",
              sx: {
                color: "inherit",
                opacity: 0.6,
                "&:hover": {
                  opacity: 1,
                  transform: "translateY(-2px)"
                },
                transition: "all 0.2s ease-in-out"
              },
              children: o.icon
            },
            i
          )) })
        ] })
      ] })
    }
  );
}, t0 = ({
  customTitle: e = "Tu tiempo es oro",
  customSubtitle: t = "IA que potencia tu productividad.",
  primaryButtonText: r = "Recupera tu tiempo",
  secondaryButtonText: n = "Calcula tu ROI",
  sx: o
}) => {
  const i = De(), a = se();
  Gr(i.breakpoints.down("md"));
  const [s, l] = ee(0), d = [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png"
  ], f = "IA con enfoque humano";
  return $e(() => {
    const p = setInterval(() => {
      l((h) => h === 2 ? 0 : h + 1);
    }, 5e3);
    return () => clearInterval(p);
  }, []), /* @__PURE__ */ v(
    b,
    {
      sx: {
        position: "relative",
        minHeight: { xs: "auto", md: "100vh" },
        maxHeight: { xs: "100vh", md: "none" },
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        bgcolor: a.contrast.background,
        py: { xs: 4, sm: 6, md: 12 },
        ...o
      },
      children: [
        /* @__PURE__ */ c(
          b,
          {
            sx: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                backgroundColor: Ne(a.contrast.background, 0.6),
                zIndex: 1
              }
            },
            children: d.map((p, h) => /* @__PURE__ */ c(b, { sx: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }, children: /* @__PURE__ */ c(
              Qo,
              {
                src: p,
                alt: `Background ${h + 1}`,
                priority: h === 0,
                sx: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: h === s ? 0.5 : 0,
                  transition: "opacity 1.5s ease-in-out, transform 10s ease-out",
                  filter: "grayscale(100%) contrast(1.2)",
                  transform: h === s ? "scale(1.1)" : "scale(1)"
                }
              }
            ) }, h))
          }
        ),
        /* @__PURE__ */ c(b, { sx: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          overflow: "hidden",
          pointerEvents: "none",
          fontFamily: "monospace",
          fontSize: "10px",
          lineHeight: 1,
          wordBreak: "break-all",
          userSelect: "none",
          zIndex: 1
        }, children: Array.from({ length: 40 }).map((p, h) => /* @__PURE__ */ c(b, { children: Math.random().toString(2).slice(2) }, h)) }),
        /* @__PURE__ */ v(b, { sx: { position: "absolute", bottom: 20, right: 40, textAlign: "right", opacity: 0.3, zIndex: 6 }, children: [
          /* @__PURE__ */ c(ut, { sx: { fontSize: "0.6rem" }, children: "COORD: 6.2442° N, 75.5812° W" }),
          /* @__PURE__ */ v(ut, { sx: { fontSize: "0.6rem" }, children: [
            "SYS_LOAD: ",
            (Math.random() * 100).toFixed(2),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ c(
          ft,
          {
            maxWidth: "xl",
            sx: {
              position: "relative",
              zIndex: 5,
              px: { xs: 2, sm: 3, md: 10, lg: 15 },
              display: "flex",
              justifyContent: "flex-start"
            },
            children: /* @__PURE__ */ v(
              Ee,
              {
                direction: "column",
                spacing: { xs: 2, sm: 3, md: 4 },
                sx: { width: "100%", maxWidth: "900px", textAlign: "left", alignItems: "flex-start" },
                children: [
                  /* @__PURE__ */ v(b, { sx: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, children: [
                    /* @__PURE__ */ c(
                      b,
                      {
                        sx: {
                          border: `1px solid ${a.contrast.text.primary}`,
                          color: a.contrast.text.primary,
                          px: 2,
                          py: 0.5,
                          mb: 4,
                          ...oe.ui.code,
                          fontSize: "0.9rem",
                          letterSpacing: "0.1em"
                        },
                        children: "strategySystemV2.0"
                      }
                    ),
                    /* @__PURE__ */ c(
                      Jc,
                      {
                        sx: {
                          color: a.contrast.text.primary,
                          mb: { xs: 1, sm: 1.5, md: 2 },
                          maxWidth: "850px",
                          fontSize: { xs: "2.5rem", sm: "3.5rem", md: "6rem", lg: "8rem" },
                          lineHeight: 0.9,
                          letterSpacing: "-0.04em",
                          textAlign: "left",
                          fontWeight: 400
                        },
                        children: e
                      }
                    ),
                    /* @__PURE__ */ c(
                      No,
                      {
                        sx: {
                          color: a.contrast.text.primary,
                          maxWidth: "600px",
                          mb: { xs: 4, sm: 5, md: 6 },
                          opacity: 0.9,
                          fontWeight: 300,
                          fontSize: { xs: "1rem", sm: "1.2rem", md: "2rem" },
                          lineHeight: 1.1,
                          textAlign: "left",
                          borderLeft: `4px solid ${a.contrast.text.primary}`,
                          pl: 3
                        },
                        children: t
                      }
                    )
                  ] }),
                  /* @__PURE__ */ v(
                    Ee,
                    {
                      direction: { xs: "column", md: "row" },
                      spacing: { xs: 3, md: 4 },
                      sx: { alignItems: "flex-start" },
                      children: [
                        /* @__PURE__ */ c(
                          si,
                          {
                            variant: "primary",
                            text: "Recuperar tiempo",
                            size: "large",
                            showIcon: !1,
                            sx: {
                              height: { xs: "55px", md: "90px" },
                              px: { xs: 4, md: 8 },
                              fontSize: { xs: "0.9rem", md: "1.5rem" },
                              fontWeight: 400,
                              borderRadius: 0,
                              bgcolor: a.contrast.text.primary,
                              color: a.contrast.background,
                              border: "none",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                bgcolor: a.contrast.text.primary,
                                opacity: 0.9,
                                transform: "scale(1.02)"
                              }
                            }
                          }
                        ),
                        /* @__PURE__ */ c(b, { sx: {
                          pt: { xs: 1, md: 2 },
                          position: "relative"
                        }, children: /* @__PURE__ */ v(
                          Be,
                          {
                            sx: {
                              color: a.contrast.text.primary,
                              fontWeight: 400,
                              fontSize: { xs: "0.8rem", md: "1.2rem" },
                              letterSpacing: "0.1em",
                              textTransform: "none",
                              lineHeight: 1.2,
                              textAlign: "left",
                              opacity: 0.6
                            },
                            children: [
                              "// ",
                              f.toLowerCase().replace(/\s+/g, "")
                            ]
                          }
                        ) })
                      ]
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  );
}, r0 = ({
  data: e,
  date: t,
  time: r,
  variant: n = "elevated",
  onRefresh: o = void 0
}) => {
  const i = se(), a = () => {
    switch (n) {
      case "outlined":
        return {
          card: {
            background: "transparent",
            border: `1px solid ${i.contrast.divider}`,
            color: i.contrast.text.primary
          },
          surface: {
            background: i.contrast.surface,
            border: `1px solid ${i.contrast.divider}`
          }
        };
      case "elevated":
        return {
          card: {
            background: i.contrast.surface,
            border: "none",
            color: i.contrast.text.primary
          },
          surface: {
            background: i.contrast.background,
            border: `1px solid ${i.contrast.divider}`
          }
        };
      default:
        return {
          card: {
            background: i.contrast.surface,
            border: `1px solid ${i.contrast.divider}`,
            color: i.contrast.text.primary
          },
          surface: {
            background: i.contrast.background,
            border: `1px solid ${i.contrast.divider}`
          }
        };
    }
  }, s = (d) => {
    switch (d) {
      case "excellent":
        return i.palette.success;
      case "good":
        return i.palette.accent;
      case "fair":
        return "#D97706";
      case "poor":
        return "#DC2626";
      default:
        return i.palette.accent;
    }
  }, l = a();
  return /* @__PURE__ */ c(
    Dn,
    {
      variant: n,
      sx: {
        borderRadius: 4,
        maxWidth: 400,
        margin: "0 auto",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)"
        },
        ...l.card
      },
      children: /* @__PURE__ */ v($r, { sx: { p: 3 }, children: [
        /* @__PURE__ */ v(b, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }, children: [
          /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ c(b, { sx: {
              width: 48,
              height: 48,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: l.surface.background,
              border: l.surface.border,
              backdropFilter: "blur(10px)"
            }, children: /* @__PURE__ */ c(Vc, { sx: {
              color: i.helpers.text.primary,
              fontSize: 24
            } }) }),
            /* @__PURE__ */ v(b, { children: [
              /* @__PURE__ */ c(ve, { sx: {
                color: i.helpers.text.secondary,
                mb: 0.5
              }, children: t }),
              /* @__PURE__ */ c(kr, { sx: {
                color: i.helpers.text.primary,
                fontWeight: 400
              }, children: r })
            ] })
          ] }),
          o && /* @__PURE__ */ c(
            tt,
            {
              size: "small",
              onClick: o,
              sx: {
                color: i.helpers.text.secondary,
                "&:hover": {
                  background: i.helpers.state.hover,
                  color: i.palette.accent
                }
              },
              children: /* @__PURE__ */ c(Ka, {})
            }
          )
        ] }),
        e.quality && /* @__PURE__ */ c(b, { sx: {
          mb: 3,
          p: 2,
          borderRadius: 2,
          background: l.surface.background,
          border: l.surface.border,
          backdropFilter: "blur(10px)"
        }, children: /* @__PURE__ */ v(b, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ c(ve, { sx: {
            color: i.helpers.text.secondary,
            textTransform: "none",
            letterSpacing: 0.5
          }, children: "Calidad del Sueño" }),
          /* @__PURE__ */ c(
            nr,
            {
              label: e.quality.toUpperCase(),
              size: "small",
              sx: {
                backgroundColor: s(e.quality) + "20",
                color: s(e.quality),
                fontWeight: 400,
                fontSize: "0.75rem",
                height: 24,
                "& .MuiChip-label": {
                  px: 1.5
                }
              }
            }
          )
        ] }) }),
        /* @__PURE__ */ v(b, { sx: {
          mb: 3,
          p: 3,
          borderRadius: 3,
          background: l.surface.background,
          border: l.surface.border,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ v(b, { sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2
          }, children: [
            /* @__PURE__ */ c(Ve, { sx: {
              color: i.helpers.text.primary,
              fontWeight: 400
            }, children: "Duración del Sueño" }),
            /* @__PURE__ */ c(
              nr,
              {
                label: `${e.totalHours}H ${e.totalMinutes}M`,
                sx: {
                  backgroundColor: i.palette.accent,
                  color: i.palette.white,
                  fontWeight: 400,
                  fontSize: "0.875rem",
                  height: 32,
                  "& .MuiChip-label": {
                    px: 2
                  }
                }
              }
            )
          ] }),
          /* @__PURE__ */ v(b, { sx: {
            height: 40,
            borderRadius: 2,
            background: i.palette.accent,
            position: "relative",
            overflow: "hidden",
            mb: 2
          }, children: [
            /* @__PURE__ */ c(b, { sx: {
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2
            }, children: Array.from({ length: 20 }, (d, f) => /* @__PURE__ */ c(b, { sx: {
              width: 2,
              height: 8,
              backgroundColor: "rgba(255, 255, 255, 0.3)"
            } }, f)) }),
            /* @__PURE__ */ c(b, { sx: {
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 2,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              transform: "translateY(-50%)"
            } }),
            /* @__PURE__ */ c(ve, { sx: {
              position: "absolute",
              top: 4,
              left: 8,
              fontWeight: 400,
              color: i.palette.white
            }, children: e.remStart }),
            /* @__PURE__ */ c(ve, { sx: {
              position: "absolute",
              top: 4,
              right: 8,
              fontWeight: 400,
              color: i.palette.white
            }, children: e.remEnd }),
            /* @__PURE__ */ c(ve, { sx: {
              position: "absolute",
              bottom: 4,
              left: 8,
              color: i.palette.white
            }, children: "REM" }),
            /* @__PURE__ */ c(ve, { sx: {
              position: "absolute",
              bottom: 4,
              right: 8,
              color: i.palette.white
            }, children: "REM" })
          ] })
        ] }),
        /* @__PURE__ */ v(b, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderRadius: 2,
          background: l.surface.background,
          border: l.surface.border,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            /* @__PURE__ */ c(ve, { sx: {
              color: i.helpers.text.secondary,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Temperatura:" }),
            /* @__PURE__ */ v(Ve, { sx: {
              color: i.helpers.text.primary,
              fontWeight: 400
            }, children: [
              e.temperature,
              "°C"
            ] })
          ] }),
          /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            e.hasWifi && /* @__PURE__ */ c(b, { sx: {
              width: 32,
              height: 32,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: i.palette.accent + "20",
              color: i.palette.accent
            }, children: /* @__PURE__ */ c(Uc, { sx: { fontSize: 16 } }) }),
            e.hasBluetooth && /* @__PURE__ */ c(b, { sx: {
              width: 32,
              height: 32,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: i.palette.success + "20",
              color: i.palette.success
            }, children: /* @__PURE__ */ c(Hc, { sx: { fontSize: 16 } }) })
          ] })
        ] })
      ] })
    }
  );
}, n0 = ({
  data: e,
  variant: t = "elevated",
  showLocationIcon: r = !1,
  onRefresh: n = void 0
}) => {
  const o = se(), i = () => {
    switch (t) {
      case "outlined":
        return {
          card: {
            background: "transparent",
            border: `1px solid ${o.contrast.divider}`,
            color: o.contrast.text.primary
          },
          surface: {
            background: o.contrast.surface,
            border: `1px solid ${o.contrast.divider}`
          }
        };
      case "elevated":
        return {
          card: {
            background: o.contrast.surface,
            border: "none",
            color: o.contrast.text.primary
          },
          surface: {
            background: o.contrast.background,
            border: `1px solid ${o.contrast.divider}`
          }
        };
      default:
        return {
          card: {
            background: o.contrast.surface,
            border: `1px solid ${o.contrast.divider}`,
            color: o.contrast.text.primary
          },
          surface: {
            background: o.contrast.background,
            border: `1px solid ${o.contrast.divider}`
          }
        };
    }
  }, a = (l) => {
    const d = l.toLowerCase();
    return d.includes("clear") || d.includes("sunny") ? /* @__PURE__ */ c(bi, {}) : d.includes("cloud") || d.includes("overcast") ? /* @__PURE__ */ c(Yc, {}) : d.includes("rain") || d.includes("precipitation") ? /* @__PURE__ */ c(qc, {}) : /* @__PURE__ */ c(bi, {});
  }, s = i();
  return /* @__PURE__ */ c(
    Dn,
    {
      variant: t,
      sx: {
        borderRadius: 4,
        maxWidth: 400,
        margin: "0 auto",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)"
        },
        ...s.card
      },
      children: /* @__PURE__ */ v($r, { sx: { p: 3 }, children: [
        /* @__PURE__ */ v(b, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }, children: [
          /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            r && /* @__PURE__ */ c(Gc, { sx: {
              fontSize: 20,
              color: o.helpers.text.primary
            } }),
            /* @__PURE__ */ c(Ve, { sx: {
              color: o.helpers.text.primary,
              fontWeight: 400
            }, children: e.location })
          ] }),
          /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ c(ve, { sx: {
              color: o.helpers.text.secondary
            }, children: "Actualizado ahora" }),
            n && /* @__PURE__ */ c(
              tt,
              {
                size: "small",
                onClick: n,
                sx: {
                  color: o.helpers.text.secondary,
                  "&:hover": {
                    background: o.helpers.state.hover,
                    color: o.palette.accent
                  }
                },
                children: /* @__PURE__ */ c(Ka, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ v(b, { sx: {
          textAlign: "center",
          mb: 4,
          p: 3,
          borderRadius: 3,
          ...s.surface,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ c(b, { sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2
          }, children: a(e.condition) }),
          /* @__PURE__ */ v(No, { sx: {
            fontSize: "3.5rem",
            fontWeight: 400,
            color: o.helpers.text.primary,
            mb: 1,
            lineHeight: 1
          }, children: [
            e.temperature,
            "°"
          ] }),
          /* @__PURE__ */ c(Ve, { sx: {
            color: o.helpers.text.primary,
            mb: 1,
            fontWeight: 400
          }, children: e.condition }),
          /* @__PURE__ */ v(Be, { sx: {
            color: o.helpers.text.secondary,
            fontWeight: 400
          }, children: [
            "Máx ",
            e.high,
            "° — Mín ",
            e.low,
            "°"
          ] })
        ] }),
        /* @__PURE__ */ v(b, { sx: {
          display: "flex",
          justifyContent: "space-between",
          mb: 4,
          p: 2.5,
          borderRadius: 3,
          ...s.surface,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ v(b, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ c(ve, { sx: {
              color: o.helpers.text.secondary,
              mb: 0.5,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Viento" }),
            /* @__PURE__ */ v(Ve, { sx: {
              color: o.helpers.text.primary,
              fontWeight: 400
            }, children: [
              e.wind,
              " km/h"
            ] })
          ] }),
          /* @__PURE__ */ v(b, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ c(ve, { sx: {
              color: o.helpers.text.secondary,
              mb: 0.5,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Lluvia" }),
            /* @__PURE__ */ v(Ve, { sx: {
              color: o.helpers.text.primary,
              fontWeight: 400
            }, children: [
              e.precipitation,
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ v(b, { sx: { pt: 2 }, children: [
          /* @__PURE__ */ c(nn, { sx: {
            mb: 3,
            borderColor: o.helpers.border.secondary + "40"
          } }),
          /* @__PURE__ */ c(Ve, { sx: {
            fontWeight: 400,
            mb: 3,
            color: o.helpers.text.primary
          }, children: "Pronóstico por Hora" }),
          /* @__PURE__ */ c(b, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: e.hourlyForecast.map((l, d) => /* @__PURE__ */ v(b, { sx: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            borderRadius: 2,
            background: s.surface.background,
            border: s.surface.border,
            backdropFilter: "blur(10px)",
            transition: "all 0.2s ease",
            "&:hover": {
              background: o.helpers.state.hover,
              transform: "translateX(4px)"
            }
          }, children: [
            /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
              a(l.condition),
              /* @__PURE__ */ c(ve, { sx: {
                color: o.helpers.text.secondary,
                minWidth: "60px",
                fontWeight: 400
              }, children: l.time })
            ] }),
            /* @__PURE__ */ c(Be, { sx: {
              color: o.helpers.text.secondary,
              flex: 1,
              textAlign: "center",
              fontWeight: 400
            }, children: l.condition }),
            /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
              /* @__PURE__ */ v(ve, { sx: {
                color: o.helpers.text.secondary,
                minWidth: "40px",
                textAlign: "center"
              }, children: [
                l.precipitation,
                "%"
              ] }),
              /* @__PURE__ */ v(Ve, { sx: {
                fontWeight: 400,
                color: o.helpers.text.primary,
                minWidth: "50px",
                textAlign: "right"
              }, children: [
                l.temperature,
                "°"
              ] })
            ] })
          ] }, d)) })
        ] })
      ] })
    }
  );
}, o0 = ({
  searchValue: e,
  onSearchChange: t,
  selectedTab: r,
  onTabChange: n,
  onClearFilters: o,
  filteredCount: i,
  categoryTabs: a
}) => {
  const s = se();
  return /* @__PURE__ */ v(b, { sx: {
    mb: 4,
    p: 4,
    background: s.contrast.background,
    border: `4px solid ${s.contrast.text.primary}`,
    borderRadius: 0,
    transition: "all 0.2s ease",
    "&:hover": {
      boxShadow: `8px 8px 0px ${s.contrast.text.primary}`,
      transform: "translate(-4px, -4px)"
    }
  }, children: [
    /* @__PURE__ */ v(
      Ee,
      {
        direction: "row",
        sx: { justifyContent: "space-between", alignItems: "center", mb: 3 },
        children: [
          /* @__PURE__ */ v(b, { sx: {
            fontSize: "1.25rem",
            fontWeight: 400,
            textTransform: "none",
            letterSpacing: "0.05em",
            color: s.contrast.text.primary
          }, children: [
            i,
            " Servicios"
          ] }),
          e && /* @__PURE__ */ c(
            Do,
            {
              variant: "text",
              size: "small",
              onClick: o,
              sx: {
                color: s.contrast.text.primary,
                fontWeight: 400,
                textTransform: "none",
                textDecoration: "underline",
                "&:hover": {
                  background: "transparent",
                  opacity: 0.7
                }
              },
              children: "Limpiar"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ c(b, { sx: { mb: 3 }, children: /* @__PURE__ */ c(
      Ya,
      {
        fullWidth: !0,
        placeholder: "Buscar servicios...",
        value: e,
        onChange: t,
        sx: {
          "& .MuiOutlinedInput-root": {
            background: s.contrast.background,
            borderRadius: 0,
            border: `3px solid ${s.contrast.text.primary}`,
            transition: "all 0.1s ease",
            "&:hover": {
              borderColor: s.contrast.text.primary
            },
            "&.Mui-focused": {
              borderColor: s.contrast.text.primary,
              boxShadow: `4px 4px 0px ${s.contrast.text.primary}`
            }
          },
          "& .MuiOutlinedInput-input": {
            fontSize: "1rem",
            fontWeight: 400,
            padding: "12px 16px",
            color: s.contrast.text.primary,
            textTransform: "none",
            "&::placeholder": {
              color: s.contrast.text.primary,
              opacity: 0.5
            }
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none"
          }
        }
      }
    ) }),
    /* @__PURE__ */ c(nn, { sx: { mb: 3, borderColor: s.contrast.text.primary, borderWidth: "2px" } }),
    /* @__PURE__ */ c(b, { children: /* @__PURE__ */ c(
      vc,
      {
        value: r,
        onChange: n,
        variant: "scrollable",
        scrollButtons: "auto",
        sx: {
          minHeight: 48,
          "& .MuiTab-root": {
            minHeight: 48,
            fontSize: "0.9rem",
            fontWeight: 400,
            textTransform: "none",
            borderRadius: "9999px",
            mx: 0.5,
            transition: "all 0.1s ease",
            color: s.contrast.text.primary,
            background: "transparent",
            border: "2px solid transparent",
            "&:hover": {
              background: "rgba(0,0,0,0.05)",
              borderColor: s.contrast.text.primary
            },
            "&.Mui-selected": {
              background: s.contrast.text.primary,
              color: s.contrast.background,
              borderColor: s.contrast.text.primary
            }
          },
          "& .MuiTabs-indicator": {
            display: "none"
          }
        },
        children: a.map((l, d) => /* @__PURE__ */ c(
          Sc,
          {
            label: l.label
          },
          d
        ))
      }
    ) })
  ] });
}, i0 = ({ stats: e, getCategories: t }) => {
  const r = De(), n = [
    {
      value: e.total,
      label: "Servicios",
      color: r.palette.primary.main,
      description: "Total disponibles"
    },
    {
      value: e.active,
      label: "Activos",
      color: r.palette.secondary.main,
      description: "Listos para implementar"
    },
    {
      value: t().length,
      label: "Categorías",
      color: r.palette.text.primary,
      description: "Especialidades técnicas"
    }
  ];
  return /* @__PURE__ */ c(b, { sx: { mb: 8 }, children: /* @__PURE__ */ c(je, { container: !0, spacing: 3, sx: { justifyContent: "center" }, children: n.map((o, i) => /* @__PURE__ */ c(je, { size: { xs: 12, sm: 4 }, children: /* @__PURE__ */ v(b, { sx: {
    p: 4,
    textAlign: "center",
    background: r.palette.background.paper,
    border: `1px solid ${r.palette.divider}`,
    borderRadius: 2,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: r.shadows[4],
      borderColor: r.palette.primary.main
    }
  }, children: [
    /* @__PURE__ */ c(kr, { sx: {
      color: o.color,
      mb: 1,
      fontSize: "2.5rem",
      fontWeight: 400,
      lineHeight: 1
    }, children: o.value }),
    /* @__PURE__ */ c(Be, { sx: {
      color: "text.primary",
      fontSize: "0.95rem",
      fontWeight: 400,
      mb: 0.5,
      textTransform: "none",
      letterSpacing: "0.05em"
    }, children: o.label }),
    /* @__PURE__ */ c(Be, { sx: {
      color: "text.secondary",
      fontSize: "0.8rem",
      lineHeight: 1.4
    }, children: o.description })
  ] }) }, i)) }) });
}, Uh = Le(vr)(({ theme: e }) => ({
  backgroundColor: "#1a1a1a",
  color: "#f5f5f5",
  borderRadius: e.spacing(2),
  padding: e.spacing(2),
  overflow: "auto",
  "&:hover": {
    backgroundColor: "#3a3a3a",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)"
  }
})), Hh = ({ code: e, language: t = "tsx", className: r = "" }) => {
  De();
  const n = se();
  return /* @__PURE__ */ v(Uh, { className: r, children: [
    /* @__PURE__ */ v(b, { sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mb: 2
    }, children: [
      /* @__PURE__ */ c(ve, { sx: {
        color: n.helpers.text.mediumContrast,
        textTransform: "none",
        letterSpacing: "0.05em"
      }, children: t }),
      /* @__PURE__ */ c(
        tt,
        {
          size: "small",
          onClick: () => navigator.clipboard.writeText(e),
          sx: { color: n.helpers.text.mediumContrast },
          children: /* @__PURE__ */ c(Kc, { fontSize: "small" })
        }
      )
    ] }),
    /* @__PURE__ */ c(b, { component: "pre", sx: {
      fontSize: "0.875rem",
      color: n.helpers.text.highContrast,
      fontFamily: "monospace",
      margin: 0,
      whiteSpace: "pre-wrap"
    }, children: /* @__PURE__ */ c(b, { component: "code", children: e }) })
  ] });
}, Gh = ({ props: e }) => {
  const t = De();
  return !e || e.length === 0 ? null : /* @__PURE__ */ c(Cc, { component: vr, sx: { borderRadius: 2 }, children: /* @__PURE__ */ v(wc, { children: [
    /* @__PURE__ */ c(Tc, { children: /* @__PURE__ */ v(gi, { sx: { backgroundColor: t.palette.grey[50] }, children: [
      /* @__PURE__ */ c(ct, { sx: { fontWeight: 400 }, children: "Propiedad" }),
      /* @__PURE__ */ c(ct, { sx: { fontWeight: 400 }, children: "Tipo" }),
      /* @__PURE__ */ c(ct, { sx: { fontWeight: 400 }, children: "Requerido" }),
      /* @__PURE__ */ c(ct, { sx: { fontWeight: 400 }, children: "Descripción" }),
      /* @__PURE__ */ c(ct, { sx: { fontWeight: 400 }, children: "Default" })
    ] }) }),
    /* @__PURE__ */ c(Ec, { children: e.map((r, n) => /* @__PURE__ */ v(gi, { sx: {
      "&:hover": { backgroundColor: t.palette.action.hover }
    }, children: [
      /* @__PURE__ */ c(ct, { children: /* @__PURE__ */ c(ut, { children: r.name }) }),
      /* @__PURE__ */ c(ct, { children: /* @__PURE__ */ c(ut, { children: r.type }) }),
      /* @__PURE__ */ c(ct, { children: /* @__PURE__ */ c(
        nr,
        {
          label: r.required ? "Sí" : "No",
          size: "small",
          color: r.required ? "error" : "success",
          variant: "outlined"
        }
      ) }),
      /* @__PURE__ */ c(ct, { sx: {
        fontSize: "0.875rem",
        color: t.palette.text.secondary
      }, children: r.description }),
      /* @__PURE__ */ c(ct, { children: r.defaultValue ? /* @__PURE__ */ c(ut, { children: r.defaultValue }) : /* @__PURE__ */ c(b, { sx: { color: t.palette.text.disabled }, children: "-" }) })
    ] }, n)) })
  ] }) });
}, a0 = ({
  title: e,
  description: t,
  children: r,
  codeExample: n,
  props: o,
  className: i = ""
}) => {
  const a = De();
  return /* @__PURE__ */ v(b, { sx: { display: "flex", flexDirection: "column", gap: 4 }, className: i, children: [
    /* @__PURE__ */ v(b, { sx: {
      borderBottom: `1px solid ${a.palette.divider}`,
      pb: 3
    }, children: [
      /* @__PURE__ */ c(kr, { sx: { mb: 1 }, children: e }),
      /* @__PURE__ */ c(Be, { sx: { color: a.palette.text.secondary }, children: t })
    ] }),
    /* @__PURE__ */ v(vr, { sx: {
      position: "relative",
      p: 4,
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: 4,
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ c(b, { sx: { mb: 2 }, children: /* @__PURE__ */ c(Ve, { sx: { color: a.palette.text.primary }, children: "Preview" }) }),
      /* @__PURE__ */ c(b, { sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 200,
        position: "relative",
        zIndex: 1
      }, children: r })
    ] }),
    n && /* @__PURE__ */ v(b, { children: [
      /* @__PURE__ */ c(Ve, { sx: { mb: 2 }, children: "Código de Ejemplo" }),
      /* @__PURE__ */ c(Hh, { code: n })
    ] }),
    o && o.length > 0 && /* @__PURE__ */ v(b, { children: [
      /* @__PURE__ */ c(Ve, { sx: { mb: 2 }, children: "Propiedades" }),
      /* @__PURE__ */ c(Gh, { props: o })
    ] })
  ] });
}, Yh = Le(Ro)(({ theme: e }) => ({
  backgroundColor: e.palette.grey[100],
  borderRadius: e.spacing(2),
  maxWidth: 1024,
  margin: "0 auto",
  boxShadow: e.shadows[3]
})), Ba = Le(yt)(({ theme: e, isSelected: t }) => ({
  minWidth: 32,
  width: 32,
  height: 32,
  padding: 0,
  borderRadius: e.spacing(1),
  backgroundColor: t ? e.palette.text.primary : e.palette.background.paper,
  color: t ? e.palette.background.paper : e.palette.text.secondary,
  border: `1px solid ${e.palette.divider}`,
  "&:hover": {
    backgroundColor: t ? e.palette.text.primary : e.palette.action.hover
  }
})), qh = Le(yt)(({ theme: e, isSelected: t }) => ({
  width: "100%",
  justifyContent: "flex-start",
  padding: e.spacing(1, 1.5),
  borderRadius: e.spacing(1),
  backgroundColor: t ? e.palette.text.primary : e.palette.background.paper,
  color: t ? e.palette.background.paper : e.palette.text.secondary,
  textTransform: "none",
  fontSize: "0.875rem",
  "&:hover": {
    backgroundColor: t ? e.palette.text.primary : e.palette.action.hover
  }
})), Kh = Le(b)(({ theme: e }) => ({
  backgroundColor: e.palette.background.paper,
  borderRadius: e.spacing(2),
  padding: e.spacing(3),
  position: "relative",
  minHeight: 320
})), s0 = ({
  rotationAngle: e = 35,
  brightness: t = 30,
  shadowDensity: r = 25
}) => {
  const n = De(), [o, i] = ee("rotation"), [a, s] = ee("cube"), [l, d] = ee("spot"), f = [
    { id: "cube", name: "Cube", icon: "□", isSelected: !0 },
    { id: "sphere", name: "Sphere", icon: "○" },
    { id: "cone", name: "Cone", icon: "△" },
    { id: "cylinder", name: "Cylinder", icon: "●" },
    { id: "more", name: "More", icon: "⋯" }
  ], p = [
    { id: "render", name: "Render", icon: "◉" },
    { id: "rotation", name: "Rotation", icon: "⟲", isSelected: !0 },
    { id: "texture", name: "Texture", icon: "◐" },
    { id: "polygons", name: "Polygons", icon: "◢" },
    { id: "points", name: "Points", icon: "●" },
    { id: "intrude", name: "Intrude", icon: "↓" }
  ], h = [
    { id: "spot", name: "Spot", icon: "⊙", isSelected: !0 },
    { id: "area", name: "Area", icon: "◼" },
    { id: "target", name: "Target", icon: "◎" },
    { id: "sun", name: "Sun", icon: "◉" }
  ];
  return /* @__PURE__ */ c(Yh, { children: /* @__PURE__ */ v($r, { sx: { p: 3 }, children: [
    /* @__PURE__ */ v(b, { sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mb: 3
    }, children: [
      /* @__PURE__ */ c(K, { variant: "body2", sx: {
        color: n.palette.text.secondary
      }, children: "Sat—19 January" }),
      /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ c(b, { sx: {
          width: 12,
          height: 12,
          backgroundColor: n.palette.grey[400],
          borderRadius: "50%"
        } }),
        /* @__PURE__ */ c(b, { sx: {
          width: 12,
          height: 12,
          backgroundColor: n.palette.grey[400],
          borderRadius: "50%"
        } }),
        /* @__PURE__ */ c(b, { sx: {
          width: 12,
          height: 12,
          backgroundColor: n.palette.error.main,
          borderRadius: "50%"
        } })
      ] }),
      /* @__PURE__ */ c(K, { variant: "body2", sx: {
        color: n.palette.text.secondary
      }, children: "2019" })
    ] }),
    /* @__PURE__ */ v(je, { container: !0, spacing: 3, children: [
      /* @__PURE__ */ c(je, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ v(b, { sx: { display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ v(b, { children: [
          /* @__PURE__ */ c(K, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: n.palette.text.primary,
            mb: 1.5
          }, children: "Forms" }),
          /* @__PURE__ */ c(b, { sx: { display: "flex", gap: 1, flexWrap: "wrap" }, children: f.map((m) => /* @__PURE__ */ c(
            Ba,
            {
              isSelected: a === m.id,
              onClick: () => s(m.id),
              children: m.icon
            },
            m.id
          )) })
        ] }),
        /* @__PURE__ */ v(b, { children: [
          /* @__PURE__ */ c(K, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: n.palette.text.primary,
            mb: 1.5
          }, children: "Tools" }),
          /* @__PURE__ */ c(b, { sx: { display: "flex", flexDirection: "column", gap: 1 }, children: p.map((m) => /* @__PURE__ */ c(
            qh,
            {
              isSelected: o === m.id,
              onClick: () => i(m.id),
              startIcon: /* @__PURE__ */ c("span", { children: m.icon }),
              children: m.name
            },
            m.id
          )) })
        ] })
      ] }) }),
      /* @__PURE__ */ c(je, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ v(Kh, { children: [
        /* @__PURE__ */ c(b, { sx: {
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)",
          borderRadius: 2,
          overflow: "hidden"
        }, children: /* @__PURE__ */ c(b, { sx: {
          position: "absolute",
          inset: 0,
          opacity: 0.2,
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(8, 1fr)",
          height: "100%"
        }, children: Array.from({ length: 96 }, (m, x) => /* @__PURE__ */ c(b, { sx: {
          border: `1px solid ${n.palette.grey[300]}`
        } }, x)) }) }),
        /* @__PURE__ */ v(b, { sx: {
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 256
        }, children: [
          /* @__PURE__ */ c(b, { sx: {
            width: 96,
            height: 96,
            border: `2px solid ${n.palette.text.primary}`,
            position: "relative",
            transform: "rotate(45deg)",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderLeft: `1px solid ${n.palette.grey[600]}`
            },
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderTop: `1px solid ${n.palette.grey[600]}`
            }
          } }),
          /* @__PURE__ */ v(b, { sx: {
            mt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ c(b, { sx: {
              width: 128,
              height: 32,
              border: `2px solid ${n.palette.grey[400]}`,
              borderRadius: "16px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }, children: /* @__PURE__ */ c(b, { sx: {
              width: 8,
              height: 8,
              backgroundColor: n.palette.grey[600],
              borderRadius: "50%"
            } }) }),
            /* @__PURE__ */ v(b, { sx: { mt: 1, textAlign: "center" }, children: [
              /* @__PURE__ */ c(K, { variant: "body2", sx: {
                color: n.palette.text.secondary
              }, children: "Rotation" }),
              /* @__PURE__ */ v(K, { variant: "h4", sx: {
                fontWeight: 400,
                color: n.palette.text.primary
              }, children: [
                e,
                "°"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ v(b, { sx: {
            position: "absolute",
            top: 16,
            left: 16,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            fontSize: "0.75rem"
          }, children: [
            /* @__PURE__ */ c(K, { variant: "caption", sx: { color: n.palette.error.main }, children: "X" }),
            /* @__PURE__ */ c(K, { variant: "caption", sx: { color: n.palette.success.main }, children: "Y" }),
            /* @__PURE__ */ c(K, { variant: "caption", sx: { color: n.palette.info.main }, children: "Z" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ c(je, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ v(b, { sx: { display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ v(b, { children: [
          /* @__PURE__ */ c(K, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: n.palette.text.primary,
            mb: 1.5
          }, children: "Lightning" }),
          /* @__PURE__ */ c(je, { container: !0, spacing: 1, children: h.map((m) => /* @__PURE__ */ c(je, { size: 6, children: /* @__PURE__ */ c(
            Ba,
            {
              isSelected: l === m.id,
              onClick: () => d(m.id),
              sx: { width: 48, height: 48 },
              children: m.icon
            }
          ) }, m.id)) })
        ] }),
        /* @__PURE__ */ v(b, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
          /* @__PURE__ */ v(b, { children: [
            /* @__PURE__ */ v(b, { sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1
            }, children: [
              /* @__PURE__ */ c(K, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: "Brightness" }),
              /* @__PURE__ */ v(K, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: [
                t,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ c(b, { sx: {
              width: "100%",
              height: 8,
              backgroundColor: n.palette.grey[300],
              borderRadius: 1,
              position: "relative",
              overflow: "hidden"
            }, children: /* @__PURE__ */ c(b, { sx: {
              height: "100%",
              width: `${t}%`,
              backgroundColor: n.palette.text.primary,
              borderRadius: 1,
              transition: "width 0.3s ease"
            } }) })
          ] }),
          /* @__PURE__ */ v(b, { children: [
            /* @__PURE__ */ v(b, { sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1
            }, children: [
              /* @__PURE__ */ c(K, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: "Shadow Density" }),
              /* @__PURE__ */ v(K, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: [
                r,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ c(b, { sx: {
              width: "100%",
              height: 8,
              backgroundColor: n.palette.grey[300],
              borderRadius: 1,
              position: "relative",
              overflow: "hidden"
            }, children: /* @__PURE__ */ c(b, { sx: {
              height: "100%",
              width: `${r}%`,
              backgroundColor: n.palette.text.primary,
              borderRadius: 1,
              transition: "width 0.3s ease"
            } }) })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ v(b, { sx: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mt: 3,
      pt: 2,
      borderTop: `1px solid ${n.palette.divider}`
    }, children: [
      /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ c(b, { sx: {
          width: 16,
          height: 16,
          border: `1px solid ${n.palette.grey[400]}`,
          borderRadius: 1
        } }),
        /* @__PURE__ */ v(b, { sx: { display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ c(K, { variant: "caption", sx: {
            color: n.palette.text.secondary,
            fontSize: "0.75rem"
          }, children: "END IS UI" }),
          /* @__PURE__ */ v(b, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: [
            /* @__PURE__ */ c(K, { variant: "caption", sx: {
              color: n.palette.text.secondary,
              fontSize: "0.75rem"
            }, children: "UI" }),
            /* @__PURE__ */ c(b, { sx: {
              width: 4,
              height: 4,
              backgroundColor: n.palette.text.primary,
              borderRadius: "50%"
            } })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ c(K, { variant: "caption", sx: {
        color: n.palette.text.secondary,
        fontSize: "0.75rem"
      }, children: "013" })
    ] })
  ] }) });
}, Xh = He(/* @__PURE__ */ c("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu"), Wa = He(/* @__PURE__ */ c("path", {
  d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z"
}), "LightMode"), ja = He(/* @__PURE__ */ c("path", {
  d: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1"
}), "DarkMode"), Qh = Le(yt, {
  shouldForwardProp: (e) => e !== "colors" && e !== "isScrolled"
})(({ theme: e, colors: t, isScrolled: r }) => ({
  marginX: e.spacing(0.5),
  color: t.contrast.text.primary,
  fontWeight: 400,
  textTransform: "none",
  fontSize: oe.ui.caption.fontSize,
  transition: "all 0.3s ease-in-out",
  position: "relative",
  border: "none",
  padding: e.spacing(1, 1.5),
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 8,
    left: "50%",
    width: 0,
    height: "2px",
    backgroundColor: t.contrast.text.primary,
    transition: "all 0.3s ease-in-out",
    transform: "translateX(-50%)"
  },
  "&:hover": {
    backgroundColor: "transparent",
    color: t.contrast.text.primary,
    opacity: 0.8,
    border: "none",
    "&::after": {
      width: "60%"
    }
  }
})), Jh = Le(b)(({ theme: e }) => ({
  flexGrow: 1,
  justifyContent: "flex-end",
  alignItems: "center",
  display: "none",
  [e.breakpoints.up("md")]: {
    display: "flex"
  }
})), Zh = () => {
  const [e, t] = ee(null), [r, n] = ee(!1), o = se(), i = Mo(), { mode: a, toggleColorMode: s } = Ko();
  $e(() => {
    const h = () => {
      n(window.scrollY > 20);
    };
    return window.addEventListener("scroll", h), () => window.removeEventListener("scroll", h);
  }, []);
  const l = [
    { name: "inicio", path: Qe.HOME },
    { name: "servicios", path: Qe.SERVICES },
    { name: "superAI", path: Qe.SUPER_AI },
    { name: "porqueAi4u", path: Qe.WHY_AI4U },
    { name: "portafolio", path: Qe.PORTFOLIO }
  ], d = (h) => {
    t(h.currentTarget);
  }, f = () => {
    t(null);
  }, p = (h) => {
    f(), i(h), po();
  };
  return /* @__PURE__ */ c(
    $c,
    {
      position: "fixed",
      color: "transparent",
      elevation: 0,
      sx: {
        backgroundColor: r ? Ne(o.contrast.surface, 0.85) : "transparent",
        backdropFilter: r ? "blur(10px)" : "none",
        borderBottom: r ? `1px solid ${Ne(o.contrast.border, 0.1)}` : "none",
        transition: "all 0.3s ease-in-out",
        zIndex: (h) => h.zIndex.drawer + 1
      },
      children: /* @__PURE__ */ c(ft, { maxWidth: "lg", children: /* @__PURE__ */ v(kc, { disableGutters: !0, children: [
        /* @__PURE__ */ c(
          b,
          {
            component: Qt,
            to: Qe.HOME,
            "aria-label": "Ir a página principal - AI4U Logo",
            sx: {
              mr: 3,
              display: { xs: "none", md: "flex" },
              textDecoration: "none",
              alignItems: "center"
            },
            children: /* @__PURE__ */ c(or, { variant: "desktop", light: o.mode === "dark" })
          }
        ),
        /* @__PURE__ */ v(b, { sx: { flexGrow: 1, display: { xs: "flex", md: "none" } }, children: [
          /* @__PURE__ */ c(
            tt,
            {
              size: "large",
              "aria-label": "Menu de navegación",
              "aria-controls": "menu-appbar",
              "aria-haspopup": "true",
              onClick: d,
              sx: {
                color: o.contrast.text.primary,
                transition: "color 0.3s ease-in-out",
                border: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                  opacity: 0.7
                }
              },
              children: e ? /* @__PURE__ */ c(oc, {}) : /* @__PURE__ */ c(Xh, {})
            }
          ),
          /* @__PURE__ */ v(
            Ha,
            {
              id: "menu-appbar",
              anchorEl: e,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left"
              },
              keepMounted: !0,
              transformOrigin: {
                vertical: "top",
                horizontal: "left"
              },
              open: !!e,
              onClose: f,
              sx: {
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  backgroundColor: o.contrast.surface,
                  border: `1px solid ${o.contrast.border}`,
                  boxShadow: wt.lg
                }
              },
              children: [
                l.map((h) => /* @__PURE__ */ c(
                  Wr,
                  {
                    onClick: () => p(h.path),
                    component: Qt,
                    to: h.path,
                    sx: {
                      color: o.contrast.text.primary,
                      "&:hover": {
                        backgroundColor: o.helpers.state.hover,
                        color: o.palette.black
                      }
                    },
                    children: /* @__PURE__ */ c(K, { sx: { ...oe.label.main }, children: h.name })
                  },
                  h.name
                )),
                /* @__PURE__ */ c(
                  Wr,
                  {
                    sx: {
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      py: 2,
                      "&:hover": {
                        backgroundColor: "transparent"
                      }
                    },
                    children: /* @__PURE__ */ c(b, { sx: { width: "100%", maxWidth: (h) => h.spacing(25) }, children: /* @__PURE__ */ c(na, { light: o.mode === "dark" }) })
                  }
                ),
                /* @__PURE__ */ v(
                  Wr,
                  {
                    onClick: s,
                    sx: {
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      color: o.contrast.text.primary,
                      "&:hover": { backgroundColor: o.helpers.state.hover }
                    },
                    children: [
                      a === "light" ? /* @__PURE__ */ c(ja, { fontSize: "small" }) : /* @__PURE__ */ c(Wa, { fontSize: "small" }),
                      /* @__PURE__ */ c(K, { children: a === "light" ? "Modo oscuro" : "Modo claro" })
                    ]
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ c(
          b,
          {
            component: Qt,
            to: Qe.HOME,
            "aria-label": "Ir a página principal - AI4U Logo",
            sx: {
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              textDecoration: "none",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ c(or, { variant: "mobile", light: o.mode === "dark" })
          }
        ),
        /* @__PURE__ */ v(Jh, { children: [
          l.map((h) => /* @__PURE__ */ c(
            Qh,
            {
              colors: o,
              isScrolled: r,
              onClick: () => po(),
              component: Qt,
              to: h.path,
              sx: { ...oe.label.secondary, letterSpacing: "0.1em" },
              children: h.name
            },
            h.name
          )),
          /* @__PURE__ */ c(
            b,
            {
              sx: {
                ml: { xs: 0.5, md: 1 },
                display: "flex",
                alignItems: "center",
                flexShrink: 0
              },
              children: /* @__PURE__ */ c(na, { light: o.mode === "dark" })
            }
          ),
          /* @__PURE__ */ c(
            tt,
            {
              onClick: s,
              size: "small",
              sx: {
                ml: 1,
                color: o.contrast.text.primary,
                border: "none",
                "&:hover": { backgroundColor: "transparent", opacity: 0.7 }
              },
              children: a === "light" ? /* @__PURE__ */ c(ja, { fontSize: "small" }) : /* @__PURE__ */ c(Wa, { fontSize: "small" })
            }
          )
        ] })
      ] }) })
    }
  );
}, Va = [
  "/assets/images/hero-image.png",
  "/assets/images/hero-image2.png",
  "/assets/images/hero-image3.png"
], eg = [
  "agentes.",
  "orquestación",
  "de agentes.",
  "empleados ia.",
  "automatizaciones.",
  "conexión con",
  "tus sistemas."
], c0 = ({
  badge: e = "ai4u // siempre activo",
  lines: t = eg,
  primaryButtonText: r = "hablar con el equipo"
}) => {
  const n = se(), [o, i] = ee(/* @__PURE__ */ new Set()), [a, s] = ee(0), l = on([]);
  $e(() => {
    const h = setInterval(() => s((m) => (m + 1) % Va.length), 5e3);
    return () => clearInterval(h);
  }, []), $e(() => {
    const h = [];
    return l.current.forEach((m, x) => {
      if (!m) return;
      const u = new IntersectionObserver(
        ([w]) => {
          w.isIntersecting && i((E) => new Set(E).add(x));
        },
        { threshold: 0.3 }
      );
      u.observe(m), h.push(u);
    }), () => h.forEach((m) => m.disconnect());
  }, [t.length]);
  const d = Rt((h, m) => {
    l.current[m] = h;
  }, []), f = o.size > 0 ? Math.max(...o) : -1, p = o.size / t.length * 100;
  return /* @__PURE__ */ v(b, { sx: { position: "relative", overflow: "hidden" }, children: [
    /* @__PURE__ */ v(b, { sx: { position: "absolute", inset: 0, height: "100%", zIndex: 0 }, children: [
      Va.map((h, m) => /* @__PURE__ */ c(b, { sx: { position: "absolute", inset: 0, height: "100%" }, children: /* @__PURE__ */ c(
        Qo,
        {
          src: h,
          alt: "",
          priority: m === 0,
          sx: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: m === a ? 0.35 : 0,
            transition: "opacity 2s ease-in-out, transform 12s ease-out",
            filter: "grayscale(100%) contrast(1.1)",
            transform: m === a ? "scale(1.06)" : "scale(1)"
          }
        }
      ) }, m)),
      /* @__PURE__ */ c(b, { sx: {
        position: "absolute",
        inset: 0,
        height: "100%",
        backgroundColor: Ne(n.contrast.background, 0.55)
      } })
    ] }),
    /* @__PURE__ */ v(b, { sx: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      px: { xs: 3, md: 8, lg: 12 },
      pt: { xs: 10, md: 12 },
      pb: 0
    }, children: [
      /* @__PURE__ */ v(b, { sx: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: { xs: 10, md: 16 } }, children: [
        /* @__PURE__ */ c(b, { sx: {
          border: `1px solid ${n.contrast.text.primary}`,
          color: n.contrast.text.primary,
          px: 1.5,
          py: 0.4,
          fontFamily: "monospace",
          fontSize: "0.72rem",
          letterSpacing: "0.08em",
          opacity: 0.65
        }, children: e }),
        /* @__PURE__ */ c(b, { sx: { textAlign: "right", opacity: 0.35 }, children: /* @__PURE__ */ c(ut, { sx: { fontSize: "0.65rem", display: "block" }, children: "6.2442° N, 75.5812° W" }) })
      ] }),
      /* @__PURE__ */ c(b, { sx: {
        fontFamily: "monospace",
        fontSize: "0.65rem",
        letterSpacing: "0.1em",
        opacity: 0.4,
        mb: { xs: 3, md: 4 }
      }, children: "// lo que hacemos" }),
      /* @__PURE__ */ c(b, { sx: { display: "flex", flexDirection: "column", gap: { xs: 0, md: 0 } }, children: t.map((h, m) => {
        const x = o.has(m), u = m === f, w = x ? u ? 1 : 0.55 : 0.12, E = u ? T.accentColors.orange : n.contrast.text.primary;
        return /* @__PURE__ */ c(
          b,
          {
            ref: (D) => d(D, m),
            component: "h1",
            sx: {
              m: 0,
              fontSize: "clamp(3.5rem, 13vw, 16rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.05em",
              fontWeight: 300,
              fontFamily: '"Red Hat Display", sans-serif',
              color: E,
              opacity: w,
              transition: "opacity 0.5s ease, color 0.5s ease"
            },
            children: h
          },
          m
        );
      }) }),
      /* @__PURE__ */ v(b, { sx: { mt: { xs: 10, md: 14 } }, children: [
        /* @__PURE__ */ c(b, { sx: { borderTop: `1px solid ${Ne(n.contrast.text.primary, 0.2)}`, mb: { xs: 4, md: 5 } } }),
        /* @__PURE__ */ c(b, { sx: { display: "flex", justifyContent: "flex-end", pb: { xs: 6, md: 8 } }, children: /* @__PURE__ */ c(
          si,
          {
            variant: "primary",
            text: r,
            size: "large",
            showIcon: !1,
            sx: {
              height: { xs: "48px", md: "52px" },
              px: { xs: 4, md: 6 },
              fontSize: { xs: "0.8rem", md: "0.85rem" },
              fontWeight: 400,
              fontFamily: "monospace",
              letterSpacing: "0.05em",
              borderRadius: 0,
              bgcolor: "transparent",
              color: n.contrast.text.primary,
              border: `1px solid ${n.contrast.text.primary}`,
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: T.accentColors.orange,
                borderColor: T.accentColors.orange,
                color: "#fff"
              }
            }
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ c(b, { sx: { position: "sticky", bottom: 0, zIndex: 6 }, children: /* @__PURE__ */ c(b, { sx: { height: "1px", bgcolor: Ne(n.contrast.text.primary, 0.1) }, children: /* @__PURE__ */ c(b, { sx: {
      height: "100%",
      bgcolor: T.accentColors.orange,
      width: `${p}%`,
      transition: "width 0.4s ease"
    } }) }) })
  ] });
}, Ua = [
  "/assets/images/hero-image.png",
  "/assets/images/hero-image2.png",
  "/assets/images/hero-image3.png"
], tg = ["agentes", "entrenamiento", "automatizaciones"], l0 = ({
  badge: e = "ai4u.equipo // siempre activo",
  primaryButtonText: t = "hablar con el equipo"
}) => {
  const r = se(), [n, o] = ee(0);
  return $e(() => {
    const i = setInterval(
      () => o((a) => (a + 1) % Ua.length),
      5e3
    );
    return () => clearInterval(i);
  }, []), /* @__PURE__ */ v(b, { sx: {
    position: "relative",
    height: "100vh",
    minHeight: "600px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  }, children: [
    /* @__PURE__ */ v(b, { sx: { position: "absolute", inset: 0 }, children: [
      Ua.map((i, a) => /* @__PURE__ */ c(b, { sx: { position: "absolute", inset: 0 }, children: /* @__PURE__ */ c(
        Qo,
        {
          src: i,
          alt: "",
          priority: a === 0,
          sx: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            filter: "grayscale(100%) contrast(1.1)",
            opacity: a === n ? 0.38 : 0,
            transform: a === n ? "scale(1.06)" : "scale(1)",
            transition: "opacity 2s ease-in-out, transform 12s ease-out"
          }
        }
      ) }, a)),
      /* @__PURE__ */ c(b, { sx: {
        position: "absolute",
        inset: 0,
        background: `linear-gradient(
            to bottom,
            ${Ne(r.contrast.background, 0.05)} 0%,
            ${Ne(r.contrast.background, 0.2)}  35%,
            ${Ne(r.contrast.background, 0.72)} 72%,
            ${Ne(r.contrast.background, 0.93)} 100%
          )`
      } })
    ] }),
    /* @__PURE__ */ c(ut, { sx: {
      position: "absolute",
      top: { xs: 72, md: 24 },
      right: { xs: 24, md: 40 },
      fontSize: "0.65rem",
      opacity: 0.3,
      zIndex: 2,
      color: r.contrast.text.primary
    }, children: "6.2442° N, 75.5812° W" }),
    /* @__PURE__ */ v(b, { sx: {
      position: "absolute",
      bottom: 28,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "6px",
      "@keyframes breathe": {
        "0%, 100%": { opacity: 0.2 },
        "50%": { opacity: 0.55 }
      },
      animation: "breathe 2.5s ease-in-out infinite"
    }, children: [
      /* @__PURE__ */ c(ut, { sx: {
        fontSize: "0.6rem",
        letterSpacing: "0.2em",
        color: r.contrast.text.primary,
        opacity: 0.5
      }, children: "scroll" }),
      /* @__PURE__ */ c(b, { sx: {
        width: "1px",
        height: "36px",
        background: `linear-gradient(to bottom, ${Ne(r.contrast.text.primary, 0.25)}, transparent)`
      } })
    ] }),
    /* @__PURE__ */ v(b, { sx: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 4,
      px: { xs: 3, md: 5 },
      pb: { xs: 10, md: 6 }
    }, children: [
      /* @__PURE__ */ v(b, { children: [
        /* @__PURE__ */ c(ut, { sx: {
          fontSize: "0.72rem",
          letterSpacing: "0.15em",
          color: T.accentColors.orange,
          mb: 2,
          display: "block"
        }, children: e }),
        /* @__PURE__ */ v(
          b,
          {
            component: "h1",
            sx: {
              m: 0,
              fontSize: { xs: "clamp(3rem, 12vw, 5rem)", md: "clamp(4rem, 8vw, 7rem)" },
              fontWeight: 300,
              fontFamily: '"Red Hat Display", sans-serif',
              lineHeight: 0.87,
              letterSpacing: "-0.045em",
              color: r.contrast.text.primary
            },
            children: [
              "más tiempo",
              /* @__PURE__ */ c("br", {}),
              "para lo que",
              /* @__PURE__ */ c("br", {}),
              "importa."
            ]
          }
        )
      ] }),
      /* @__PURE__ */ v(b, { sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 2.5,
        flexShrink: 0,
        pb: "4px"
      }, children: [
        /* @__PURE__ */ c(b, { sx: { display: "flex", flexDirection: "column", gap: 0.75, alignItems: "flex-end" }, children: tg.map((i) => /* @__PURE__ */ c(ut, { sx: {
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          color: r.contrast.text.primary,
          opacity: 0.35,
          textTransform: "uppercase"
        }, children: i }, i)) }),
        /* @__PURE__ */ c(
          si,
          {
            variant: "primary",
            text: t,
            size: "large",
            showIcon: !1,
            sx: {
              height: { xs: "44px", md: "50px" },
              px: { xs: 3, md: 5 },
              fontSize: { xs: "0.75rem", md: "0.82rem" },
              fontWeight: 400,
              fontFamily: "monospace",
              letterSpacing: "0.05em",
              borderRadius: 0,
              bgcolor: r.contrast.text.primary,
              color: r.contrast.background,
              border: "none",
              transition: "all 0.25s ease",
              "&:hover": {
                bgcolor: T.accentColors.orange,
                color: "#fff"
              }
            }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ c(b, { sx: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "1px",
      bgcolor: Ne(r.contrast.text.primary, 0.1),
      zIndex: 3
    } })
  ] });
}, d0 = ({ children: e }) => /* @__PURE__ */ v(b, { sx: { display: "flex", flexDirection: "column", minHeight: "100vh" }, children: [
  /* @__PURE__ */ c(lf, {}),
  /* @__PURE__ */ c(Zh, {}),
  /* @__PURE__ */ c(
    b,
    {
      component: "main",
      sx: {
        flexGrow: 1,
        width: "100%",
        maxWidth: "100%"
      },
      children: e
    }
  ),
  /* @__PURE__ */ c(Vh, {})
] }), rg = () => {
  const e = De(), t = se();
  return /* @__PURE__ */ c(
    b,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        gap: 3,
        padding: 4,
        background: `linear-gradient(135deg, ${t.contrast.surface} 0%, ${t.contrast.background} 100%)`
      },
      children: /* @__PURE__ */ v(b, { sx: { width: "100%", maxWidth: 600 }, children: [
        /* @__PURE__ */ c(
          ae,
          {
            variant: "rectangular",
            height: 300,
            sx: {
              borderRadius: 2,
              mb: 2,
              bgcolor: e.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ),
        /* @__PURE__ */ c(
          ae,
          {
            variant: "text",
            height: 40,
            width: "80%",
            sx: {
              mb: 1,
              bgcolor: e.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ),
        /* @__PURE__ */ c(
          ae,
          {
            variant: "text",
            height: 24,
            width: "60%",
            sx: {
              mb: 1,
              bgcolor: e.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ),
        /* @__PURE__ */ c(
          ae,
          {
            variant: "text",
            height: 24,
            width: "70%",
            sx: {
              bgcolor: e.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        )
      ] })
    }
  );
}, u0 = ({
  children: e,
  fallback: t = /* @__PURE__ */ c(rg, {})
}) => /* @__PURE__ */ c(Ic, { fallback: t, children: e }), f0 = () => {
  const { pathname: e, hash: t } = _c();
  return $e(() => {
    if (t) {
      const r = t.replace("#", ""), n = document.getElementById(r);
      if (n)
        n.scrollIntoView({ behavior: "smooth" });
      else {
        const o = setTimeout(() => {
          const i = document.getElementById(r);
          i && i.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(o);
      }
    } else
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }, [e, t]), null;
}, p0 = ({ children: e }) => {
  const [t, r] = ee(!0), n = De(), o = Ue(() => [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png",
    "/assets/images/ai4u-logo.png",
    "/assets/images/ai4u-logo-dark.png"
  ], []);
  return $e(() => {
    let i = 0;
    const a = o.length, s = () => {
      i++, i === a && setTimeout(() => {
        r(!1);
      }, 500);
    }, l = () => {
      i++, i === a && setTimeout(() => {
        r(!1);
      }, 500);
    };
    o.forEach((d) => {
      const f = new Image();
      f.onload = s, f.onerror = l, f.src = d;
    }), a === 0 && setTimeout(() => {
      r(!1);
    }, 500);
  }, [o]), t ? /* @__PURE__ */ c(
    b,
    {
      sx: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s ease-in-out"
      },
      children: /* @__PURE__ */ c(ft, { maxWidth: "lg", children: /* @__PURE__ */ v(Ee, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ c(b, { sx: { mb: 4 }, children: /* @__PURE__ */ c(or, {}) }),
        /* @__PURE__ */ c(b, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ c(
          ae,
          {
            variant: "rectangular",
            height: 400,
            sx: {
              borderRadius: 2,
              bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ) }),
        /* @__PURE__ */ v(Ee, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
          /* @__PURE__ */ c(
            ae,
            {
              variant: "text",
              height: 40,
              width: "80%",
              sx: {
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ c(
            ae,
            {
              variant: "text",
              height: 24,
              width: "60%",
              sx: {
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ c(
            ae,
            {
              variant: "text",
              height: 24,
              width: "70%",
              sx: {
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ v(Ee, { direction: "row", spacing: 2, children: [
          /* @__PURE__ */ c(
            ae,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ c(
            ae,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] })
      ] }) })
    }
  ) : /* @__PURE__ */ c("div", { style: { opacity: t ? 0 : 1, transition: "opacity 0.5s ease-in-out" }, children: e });
}, m0 = ({ children: e }) => {
  const [t, r] = ee(!0), n = De(), o = Ue(() => [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png",
    "/assets/images/ai4u-logo.png",
    "/assets/images/ai4u-logo-dark.png"
  ], []);
  return $e(() => {
    let i = 0;
    const a = o.length, s = () => {
      i++, i === a && setTimeout(() => {
        r(!1);
      }, 500);
    }, l = () => {
      i++, i === a && setTimeout(() => {
        r(!1);
      }, 500);
    };
    o.forEach((d) => {
      const f = new Image();
      f.onload = s, f.onerror = l, f.src = d;
    }), a === 0 && setTimeout(() => {
      r(!1);
    }, 500);
  }, [o]), t ? /* @__PURE__ */ c(
    b,
    {
      sx: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s ease-in-out"
      },
      children: /* @__PURE__ */ c(ft, { maxWidth: "lg", children: /* @__PURE__ */ v(Ee, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ c(b, { sx: { mb: 4 }, children: /* @__PURE__ */ c(or, {}) }),
        /* @__PURE__ */ c(b, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ c(
          ae,
          {
            variant: "rectangular",
            height: 400,
            sx: {
              borderRadius: 2,
              bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ) }),
        /* @__PURE__ */ v(Ee, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
          /* @__PURE__ */ c(
            ae,
            {
              variant: "text",
              height: 40,
              width: "80%",
              sx: {
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ c(
            ae,
            {
              variant: "text",
              height: 24,
              width: "60%",
              sx: {
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ c(
            ae,
            {
              variant: "text",
              height: 24,
              width: "70%",
              sx: {
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ v(Ee, { direction: "row", spacing: 2, children: [
          /* @__PURE__ */ c(
            ae,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ c(
            ae,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] })
      ] }) })
    }
  ) : /* @__PURE__ */ c("div", { style: { opacity: t ? 0 : 1, transition: "opacity 0.5s ease-in-out" }, children: e });
}, h0 = ({ children: e }) => {
  const [t, r] = ee(!0), n = De();
  return $e(() => {
    const o = [
      "/assets/images/hero-image.png",
      "/assets/images/hero-image2.png",
      "/assets/images/hero-image3.png",
      "/assets/images/ai4u-logo.png",
      "/assets/images/ai4u-logo-dark.png"
    ];
    let i = 0;
    const a = o.length, s = () => {
      i++, i === a && setTimeout(() => {
        r(!1);
      }, 500);
    }, l = () => {
      i++, i === a && setTimeout(() => {
        r(!1);
      }, 500);
    };
    o.forEach((d) => {
      const f = new Image();
      f.onload = s, f.onerror = l, f.src = d;
    }), a === 0 && setTimeout(() => {
      r(!1);
    }, 500);
  }, []), t ? /* @__PURE__ */ c(
    b,
    {
      sx: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s ease-in-out"
      },
      children: /* @__PURE__ */ c(ft, { maxWidth: "lg", children: /* @__PURE__ */ v(Ee, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ c(b, { sx: { mb: 4 }, children: /* @__PURE__ */ c(or, {}) }),
        /* @__PURE__ */ c(b, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ c(
          ae,
          {
            variant: "rectangular",
            height: 400,
            sx: {
              borderRadius: 2,
              bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ) }),
        /* @__PURE__ */ v(Ee, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
          /* @__PURE__ */ c(
            ae,
            {
              variant: "text",
              height: 40,
              width: "80%",
              sx: {
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ c(
            ae,
            {
              variant: "text",
              height: 24,
              width: "60%",
              sx: {
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ c(
            ae,
            {
              variant: "text",
              height: 24,
              width: "70%",
              sx: {
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ v(Ee, { direction: "row", spacing: 2, children: [
          /* @__PURE__ */ c(
            ae,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ c(
            ae,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] })
      ] }) })
    }
  ) : /* @__PURE__ */ c("div", { style: { opacity: t ? 0 : 1, transition: "opacity 0.5s ease-in-out" }, children: e });
}, g0 = ({ children: e }) => /* @__PURE__ */ c(Er, { children: e }), y0 = ({
  children: e,
  title: t,
  subtitle: r,
  className: n = "",
  variant: o = "default"
}) => {
  const i = De(), a = () => {
    switch (o) {
      case "glassmorphism":
        return {
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)"
        };
      case "futuristic":
        return {
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0A0A0A 0%, #1f2937 100%)",
          color: "#FFFFFF"
        };
      default:
        return {
          minHeight: "100vh",
          background: "#FFFFFF"
        };
    }
  }, s = () => {
    switch (o) {
      case "glassmorphism":
        return {
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)"
        };
      case "futuristic":
        return {
          background: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
        };
      default:
        return {
          background: "#FFFFFF",
          borderBottom: `1px solid ${i.palette.divider}`
        };
    }
  };
  return /* @__PURE__ */ v(b, { sx: a(), className: n, children: [
    (t || r) && /* @__PURE__ */ c(b, { component: "header", sx: s(), children: /* @__PURE__ */ c(ft, { maxWidth: "xl", sx: { py: { xs: 8, md: 12 } }, children: /* @__PURE__ */ v(b, { sx: { textAlign: "center" }, children: [
      t && /* @__PURE__ */ c(No, { sx: {
        mb: { xs: 4, md: 6 },
        color: o === "futuristic" ? "#FFFFFF" : "#171717"
      }, children: t }),
      r && /* @__PURE__ */ c(Be, { sx: {
        fontSize: { xs: "1.125rem", md: "1.25rem" },
        color: o === "futuristic" ? "rgba(255, 255, 255, 0.8)" : "text.secondary",
        maxWidth: "md",
        mx: "auto",
        lineHeight: 1.6
      }, children: r })
    ] }) }) }),
    /* @__PURE__ */ c(b, { component: "main", sx: { display: "flex", flexDirection: "column" }, children: e })
  ] });
}, b0 = ({
  children: e,
  title: t,
  description: r,
  className: n = "",
  variant: o = "default"
}) => {
  const i = De();
  return /* @__PURE__ */ v(b, { sx: (() => {
    switch (o) {
      case "glassmorphism":
        return {
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: i.spacing(4),
          padding: i.spacing(4)
        };
      case "futuristic":
        return {
          background: "rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: i.spacing(4),
          padding: i.spacing(4)
        };
      default:
        return {
          background: i.palette.background.paper,
          borderRadius: i.spacing(2),
          border: `1px solid ${i.palette.divider}`,
          padding: i.spacing(3)
        };
    }
  })(), className: n, children: [
    (t || r) && /* @__PURE__ */ v(b, { sx: { mb: 4 }, children: [
      t && /* @__PURE__ */ c(Xa, { sx: {
        mb: 2,
        // Estilo minimalista: usar color del tema en lugar de gradiente naranja
        color: o === "futuristic" ? "#FFFFFF" : i.palette.text.primary
      }, children: t }),
      r && /* @__PURE__ */ c(Be, { sx: {
        fontSize: "1.125rem",
        color: o === "futuristic" ? "rgba(255, 255, 255, 0.8)" : "text.secondary",
        mb: 4
      }, children: r })
    ] }),
    e
  ] });
}, x0 = ({
  children: e,
  className: t = "",
  maxWidth: r = "xl",
  padding: n = "lg"
}) => /* @__PURE__ */ c(
  ft,
  {
    maxWidth: r,
    sx: (() => {
      switch (n) {
        case "none":
          return {};
        case "sm":
          return { px: 2, py: 2 };
        case "md":
          return { px: 3, py: 3 };
        case "lg":
          return { px: { xs: 2, sm: 3, lg: 4 }, py: 4 };
        case "xl":
          return { px: { xs: 2, sm: 3, lg: 4 }, py: 6 };
        default:
          return { px: { xs: 2, sm: 3, lg: 4 }, py: 4 };
      }
    })(),
    className: t,
    children: e
  }
), v0 = ({
  children: e,
  cols: t = 1,
  gap: r = "lg",
  className: n = ""
}) => /* @__PURE__ */ c(
  je,
  {
    container: !0,
    spacing: (() => {
      switch (r) {
        case "sm":
          return 2;
        case "md":
          return 3;
        case "lg":
          return 4;
        case "xl":
          return 6;
        default:
          return 4;
      }
    })(),
    className: n,
    children: gt.Children.map(e, (i, a) => /* @__PURE__ */ c(
      je,
      {
        size: {
          xs: 12,
          sm: t >= 2 ? 6 : 12,
          md: t >= 3 ? 4 : t >= 2 ? 6 : 12,
          lg: t >= 4 ? 3 : t >= 3 ? 4 : t >= 2 ? 6 : 12,
          xl: t >= 6 ? 2 : t >= 4 ? 3 : t >= 3 ? 4 : t >= 2 ? 6 : 12
        },
        children: i
      },
      a
    ))
  }
), S0 = ({
  children: e,
  spacing: t = "md",
  className: r = ""
}) => /* @__PURE__ */ c(
  Ee,
  {
    spacing: (() => {
      switch (t) {
        case "sm":
          return 2;
        case "md":
          return 3;
        case "lg":
          return 4;
        case "xl":
          return 6;
        default:
          return 3;
      }
    })(),
    className: r,
    children: e
  }
);
var ng = /* @__PURE__ */ ((e) => (e.OPERATION = "operation", e.STRATEGY = "strategy", e.EDUCATION = "education", e.TRANSFORMATION = "transformation", e))(ng || {}), og = /* @__PURE__ */ ((e) => (e.AUTOMATION = "automation", e.AI_ASSISTANT = "ai_assistant", e.ANALYTICS = "analytics", e.ECOMMERCE = "ecommerce", e.TRAINING = "training", e.CONSULTING = "consulting", e))(og || {}), ig = /* @__PURE__ */ ((e) => (e.ACTIVE = "active", e.INACTIVE = "inactive", e.COMING_SOON = "coming_soon", e.DEPRECATED = "deprecated", e))(ig || {});
export {
  T0 as AI4U_DESIGN_TOKENS,
  T as AI4U_PALETTE,
  E0 as BORDER_TOKENS,
  zn as BREAKPOINT_TOKENS,
  g0 as BasicLoadingWrapper,
  Be as BodyText,
  Gg as Breadcrumb,
  Dg as BudgetCard,
  Do as Button,
  $0 as COMPONENT_SPACING,
  k0 as COMPONENT_VARIANTS,
  dc as CONTRAST_PAIRS,
  Dn as Card,
  _g as ChatButton,
  ut as CodeText,
  _s as ColorModeContext,
  x0 as Container,
  br as ContextualLink,
  si as DiagnosticCTA,
  a0 as Documentation,
  Yg as ErrorBoundary,
  Jg as ExpandableSection,
  Qg as FilterStats,
  Vh as Footer,
  Qr as GeometricIcon,
  Jc as Giant,
  Og as GiantNumber,
  lf as GoogleTranslateProvider,
  na as GoogleTranslateWidget,
  v0 as Grid,
  No as H1,
  Xa as H2,
  kr as H3,
  Ve as H4,
  hg as H5,
  gg as H6,
  l0 as HeroFullscreen,
  t0 as HeroSection,
  Cg as ImagePreloader,
  Ig as IntelligentImagePreloader,
  d0 as Layout,
  Qo as LazyImage,
  u0 as LazyPage,
  wg as LoadingScreen,
  m0 as LoadingWrapper,
  or as Logo,
  Ng as MetricCard,
  s0 as ModelingInterface,
  Zh as Navbar,
  e0 as Navigation,
  Wf as NavigationDot,
  $g as OptimizedImage,
  kg as OptimizedImageAdvanced,
  y0 as PageLayout,
  Eg as PixelArtFilter,
  Tg as PixelArtImage,
  Mg as ProcessStep,
  Zg as ProgressiveContent,
  qg as RelatedPages,
  Ls as SEOHead,
  wt as SHADOW_TOKENS,
  I0 as SPACING_TOKENS,
  fo as SURFACE_PRESETS,
  c0 as ScrollRevealHero,
  f0 as ScrollToTop,
  b0 as Section,
  Hg as ServiceCard,
  og as ServiceCategory,
  Kg as ServiceCrossLink,
  ig as ServiceStatus,
  ng as ServiceSuperCategory,
  Ag as ServiceThumbnail,
  Rg as ServicesButton,
  o0 as ServicesFilter,
  i0 as ServicesStats,
  p0 as SimpleAppWrapper,
  h0 as SimpleLoadingWrapper,
  r0 as SleepWidget,
  ve as SmallText,
  S0 as Stack,
  Xg as SuperCategoryFilter,
  xg as SurfaceProvider,
  oe as TEXT_VARIANTS,
  A0 as TRANSITION_TOKENS,
  te as TYPOGRAPHY_TOKENS,
  O0 as TYPOGRAPHY_UTILITIES,
  bg as ThemeProvider,
  Pg as TransactionCard,
  yg as Typography,
  yg as TypographyWrapper,
  n0 as WeatherWidget,
  _0 as Z_INDEX_TOKENS,
  Vg as cleanMetaDescription,
  R0 as createAI4UTokens,
  Ug as generateKeywords,
  Dh as getBreadcrumbStructuredData,
  jg as getCanonicalUrl,
  Bg as getFAQStructuredData,
  zg as getHomeStructuredData,
  Wg as getPageMetaTags,
  Mh as getServiceStructuredData,
  Fg as getServicesStructuredData,
  Lg as getUseCasesStructuredData,
  Ko as useColorMode,
  se as useColors,
  uc as useComponentColors,
  vg as useComponentVariant,
  P0 as useContrastColors,
  Sg as useContrastPair,
  Qu as useSurface
};
//# sourceMappingURL=index.js.map
