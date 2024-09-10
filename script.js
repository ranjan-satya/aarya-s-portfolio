/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
    var DE = Object.create;
    var wr = Object.defineProperty;
    var ME = Object.getOwnPropertyDescriptor;
    var FE = Object.getOwnPropertyNames;
    var qE = Object.getPrototypeOf,
        XE = Object.prototype.hasOwnProperty;
    var se = (e, t) => () => (e && (t = e((e = 0))), t);
    var f = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
        Ae = (e, t) => {
            for (var r in t) wr(e, r, { get: t[r], enumerable: !0 });
        },
        sa = (e, t, r, n) => {
            if ((t && typeof t == "object") || typeof t == "function")
                for (let i of FE(t))
                    !XE.call(e, i) &&
                        i !== r &&
                        wr(e, i, {
                            get: () => t[i],
                            enumerable: !(n = ME(t, i)) || n.enumerable,
                        });
            return e;
        };
    var ee = (e, t, r) => (
        (r = e != null ? DE(qE(e)) : {}),
        sa(
            t || !e || !e.__esModule
                ? wr(r, "default", { value: e, enumerable: !0 })
                : r,
            e
        )
    ),
        Ue = (e) => sa(wr({}, "__esModule", { value: !0 }), e);
    var Bn = f(() => {
        "use strict";
        window.tram = (function (e) {
            function t(c, E) {
                var v = new F.Bare();
                return v.init(c, E);
            }
            function r(c) {
                return c.replace(/[A-Z]/g, function (E) {
                    return "-" + E.toLowerCase();
                });
            }
            function n(c) {
                var E = parseInt(c.slice(1), 16),
                    v = (E >> 16) & 255,
                    b = (E >> 8) & 255,
                    P = 255 & E;
                return [v, b, P];
            }
            function i(c, E, v) {
                return (
                    "#" + ((1 << 24) | (c << 16) | (E << 8) | v).toString(16).slice(1)
                );
            }
            function o() { }
            function a(c, E) {
                l("Type warning: Expected: [" + c + "] Got: [" + typeof E + "] " + E);
            }
            function s(c, E, v) {
                l("Units do not match [" + c + "]: " + E + ", " + v);
            }
            function u(c, E, v) {
                if ((E !== void 0 && (v = E), c === void 0)) return v;
                var b = v;
                return (
                    pt.test(c) || !Or.test(c)
                        ? (b = parseInt(c, 10))
                        : Or.test(c) && (b = 1e3 * parseFloat(c)),
                    0 > b && (b = 0),
                    b === b ? b : v
                );
            }
            function l(c) {
                ue.debug && window && window.console.warn(c);
            }
            function g(c) {
                for (var E = -1, v = c ? c.length : 0, b = []; ++E < v;) {
                    var P = c[E];
                    P && b.push(P);
                }
                return b;
            }
            var p = (function (c, E, v) {
                function b(Y) {
                    return typeof Y == "object";
                }
                function P(Y) {
                    return typeof Y == "function";
                }
                function R() { }
                function B(Y, ae) {
                    function q() {
                        var ve = new $();
                        return P(ve.init) && ve.init.apply(ve, arguments), ve;
                    }
                    function $() { }
                    ae === v && ((ae = Y), (Y = Object)), (q.Bare = $);
                    var Z,
                        de = (R[c] = Y[c]),
                        ke = ($[c] = q[c] = new R());
                    return (
                        (ke.constructor = q),
                        (q.mixin = function (ve) {
                            return ($[c] = q[c] = B(q, ve)[c]), q;
                        }),
                        (q.open = function (ve) {
                            if (
                                ((Z = {}),
                                    P(ve) ? (Z = ve.call(q, ke, de, q, Y)) : b(ve) && (Z = ve),
                                    b(Z))
                            )
                                for (var Qt in Z) E.call(Z, Qt) && (ke[Qt] = Z[Qt]);
                            return P(ke.init) || (ke.init = Y), q;
                        }),
                        q.open(ae)
                    );
                }
                return B;
            })("prototype", {}.hasOwnProperty),
                d = {
                    ease: [
                        "ease",
                        function (c, E, v, b) {
                            var P = (c /= b) * c,
                                R = P * c;
                            return (
                                E +
                                v * (-2.75 * R * P + 11 * P * P + -15.5 * R + 8 * P + 0.25 * c)
                            );
                        },
                    ],
                    "ease-in": [
                        "ease-in",
                        function (c, E, v, b) {
                            var P = (c /= b) * c,
                                R = P * c;
                            return E + v * (-1 * R * P + 3 * P * P + -3 * R + 2 * P);
                        },
                    ],
                    "ease-out": [
                        "ease-out",
                        function (c, E, v, b) {
                            var P = (c /= b) * c,
                                R = P * c;
                            return (
                                E +
                                v * (0.3 * R * P + -1.6 * P * P + 2.2 * R + -1.8 * P + 1.9 * c)
                            );
                        },
                    ],
                    "ease-in-out": [
                        "ease-in-out",
                        function (c, E, v, b) {
                            var P = (c /= b) * c,
                                R = P * c;
                            return E + v * (2 * R * P + -5 * P * P + 2 * R + 2 * P);
                        },
                    ],
                    linear: [
                        "linear",
                        function (c, E, v, b) {
                            return (v * c) / b + E;
                        },
                    ],
                    "ease-in-quad": [
                        "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                        function (c, E, v, b) {
                            return v * (c /= b) * c + E;
                        },
                    ],
                    "ease-out-quad": [
                        "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                        function (c, E, v, b) {
                            return -v * (c /= b) * (c - 2) + E;
                        },
                    ],
                    "ease-in-out-quad": [
                        "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                        function (c, E, v, b) {
                            return (c /= b / 2) < 1
                                ? (v / 2) * c * c + E
                                : (-v / 2) * (--c * (c - 2) - 1) + E;
                        },
                    ],
                    "ease-in-cubic": [
                        "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                        function (c, E, v, b) {
                            return v * (c /= b) * c * c + E;
                        },
                    ],
                    "ease-out-cubic": [
                        "cubic-bezier(0.215, 0.610, 0.355, 1)",
                        function (c, E, v, b) {
                            return v * ((c = c / b - 1) * c * c + 1) + E;
                        },
                    ],
                    "ease-in-out-cubic": [
                        "cubic-bezier(0.645, 0.045, 0.355, 1)",
                        function (c, E, v, b) {
                            return (c /= b / 2) < 1
                                ? (v / 2) * c * c * c + E
                                : (v / 2) * ((c -= 2) * c * c + 2) + E;
                        },
                    ],
                    "ease-in-quart": [
                        "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                        function (c, E, v, b) {
                            return v * (c /= b) * c * c * c + E;
                        },
                    ],
                    "ease-out-quart": [
                        "cubic-bezier(0.165, 0.840, 0.440, 1)",
                        function (c, E, v, b) {
                            return -v * ((c = c / b - 1) * c * c * c - 1) + E;
                        },
                    ],
                    "ease-in-out-quart": [
                        "cubic-bezier(0.770, 0, 0.175, 1)",
                        function (c, E, v, b) {
                            return (c /= b / 2) < 1
                                ? (v / 2) * c * c * c * c + E
                                : (-v / 2) * ((c -= 2) * c * c * c - 2) + E;
                        },
                    ],
                    "ease-in-quint": [
                        "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                        function (c, E, v, b) {
                            return v * (c /= b) * c * c * c * c + E;
                        },
                    ],
                    "ease-out-quint": [
                        "cubic-bezier(0.230, 1, 0.320, 1)",
                        function (c, E, v, b) {
                            return v * ((c = c / b - 1) * c * c * c * c + 1) + E;
                        },
                    ],
                    "ease-in-out-quint": [
                        "cubic-bezier(0.860, 0, 0.070, 1)",
                        function (c, E, v, b) {
                            return (c /= b / 2) < 1
                                ? (v / 2) * c * c * c * c * c + E
                                : (v / 2) * ((c -= 2) * c * c * c * c + 2) + E;
                        },
                    ],
                    "ease-in-sine": [
                        "cubic-bezier(0.470, 0, 0.745, 0.715)",
                        function (c, E, v, b) {
                            return -v * Math.cos((c / b) * (Math.PI / 2)) + v + E;
                        },
                    ],
                    "ease-out-sine": [
                        "cubic-bezier(0.390, 0.575, 0.565, 1)",
                        function (c, E, v, b) {
                            return v * Math.sin((c / b) * (Math.PI / 2)) + E;
                        },
                    ],
                    "ease-in-out-sine": [
                        "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                        function (c, E, v, b) {
                            return (-v / 2) * (Math.cos((Math.PI * c) / b) - 1) + E;
                        },
                    ],
                    "ease-in-expo": [
                        "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                        function (c, E, v, b) {
                            return c === 0 ? E : v * Math.pow(2, 10 * (c / b - 1)) + E;
                        },
                    ],
                    "ease-out-expo": [
                        "cubic-bezier(0.190, 1, 0.220, 1)",
                        function (c, E, v, b) {
                            return c === b
                                ? E + v
                                : v * (-Math.pow(2, (-10 * c) / b) + 1) + E;
                        },
                    ],
                    "ease-in-out-expo": [
                        "cubic-bezier(1, 0, 0, 1)",
                        function (c, E, v, b) {
                            return c === 0
                                ? E
                                : c === b
                                    ? E + v
                                    : (c /= b / 2) < 1
                                        ? (v / 2) * Math.pow(2, 10 * (c - 1)) + E
                                        : (v / 2) * (-Math.pow(2, -10 * --c) + 2) + E;
                        },
                    ],
                    "ease-in-circ": [
                        "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                        function (c, E, v, b) {
                            return -v * (Math.sqrt(1 - (c /= b) * c) - 1) + E;
                        },
                    ],
                    "ease-out-circ": [
                        "cubic-bezier(0.075, 0.820, 0.165, 1)",
                        function (c, E, v, b) {
                            return v * Math.sqrt(1 - (c = c / b - 1) * c) + E;
                        },
                    ],
                    "ease-in-out-circ": [
                        "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                        function (c, E, v, b) {
                            return (c /= b / 2) < 1
                                ? (-v / 2) * (Math.sqrt(1 - c * c) - 1) + E
                                : (v / 2) * (Math.sqrt(1 - (c -= 2) * c) + 1) + E;
                        },
                    ],
                    "ease-in-back": [
                        "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                        function (c, E, v, b, P) {
                            return (
                                P === void 0 && (P = 1.70158),
                                v * (c /= b) * c * ((P + 1) * c - P) + E
                            );
                        },
                    ],
                    "ease-out-back": [
                        "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                        function (c, E, v, b, P) {
                            return (
                                P === void 0 && (P = 1.70158),
                                v * ((c = c / b - 1) * c * ((P + 1) * c + P) + 1) + E
                            );
                        },
                    ],
                    "ease-in-out-back": [
                        "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
                        function (c, E, v, b, P) {
                            return (
                                P === void 0 && (P = 1.70158),
                                (c /= b / 2) < 1
                                    ? (v / 2) * c * c * (((P *= 1.525) + 1) * c - P) + E
                                    : (v / 2) *
                                    ((c -= 2) * c * (((P *= 1.525) + 1) * c + P) + 2) +
                                    E
                            );
                        },
                    ],
                },
                y = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
                },
                I = document,
                _ = window,
                O = "bkwld-tram",
                m = /[\-\.0-9]/g,
                x = /[A-Z]/,
                A = "number",
                L = /^(rgb|#)/,
                N = /(em|cm|mm|in|pt|pc|px)$/,
                w = /(em|cm|mm|in|pt|pc|px|%)$/,
                G = /(deg|rad|turn)$/,
                k = "unitless",
                U = /(all|none) 0s ease 0s/,
                W = /^(width|height)$/,
                z = " ",
                M = I.createElement("a"),
                T = ["Webkit", "Moz", "O", "ms"],
                D = ["-webkit-", "-moz-", "-o-", "-ms-"],
                V = function (c) {
                    if (c in M.style) return { dom: c, css: c };
                    var E,
                        v,
                        b = "",
                        P = c.split("-");
                    for (E = 0; E < P.length; E++)
                        b += P[E].charAt(0).toUpperCase() + P[E].slice(1);
                    for (E = 0; E < T.length; E++)
                        if (((v = T[E] + b), v in M.style))
                            return { dom: v, css: D[E] + c };
                },
                X = (t.support = {
                    bind: Function.prototype.bind,
                    transform: V("transform"),
                    transition: V("transition"),
                    backface: V("backface-visibility"),
                    timing: V("transition-timing-function"),
                });
            if (X.transition) {
                var K = X.timing.dom;
                if (((M.style[K] = d["ease-in-back"][0]), !M.style[K]))
                    for (var j in y) d[j][0] = y[j];
            }
            var te = (t.frame = (function () {
                var c =
                    _.requestAnimationFrame ||
                    _.webkitRequestAnimationFrame ||
                    _.mozRequestAnimationFrame ||
                    _.oRequestAnimationFrame ||
                    _.msRequestAnimationFrame;
                return c && X.bind
                    ? c.bind(_)
                    : function (E) {
                        _.setTimeout(E, 16);
                    };
            })()),
                me = (t.now = (function () {
                    var c = _.performance,
                        E = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
                    return E && X.bind
                        ? E.bind(c)
                        : Date.now ||
                        function () {
                            return +new Date();
                        };
                })()),
                h = p(function (c) {
                    function E(H, J) {
                        var ce = g(("" + H).split(z)),
                            ne = ce[0];
                        J = J || {};
                        var _e = ot[ne];
                        if (!_e) return l("Unsupported property: " + ne);
                        if (!J.weak || !this.props[ne]) {
                            var Ne = _e[0],
                                be = this.props[ne];
                            return (
                                be || (be = this.props[ne] = new Ne.Bare()),
                                be.init(this.$el, ce, _e, J),
                                be
                            );
                        }
                    }
                    function v(H, J, ce) {
                        if (H) {
                            var ne = typeof H;
                            if (
                                (J ||
                                    (this.timer && this.timer.destroy(),
                                        (this.queue = []),
                                        (this.active = !1)),
                                    ne == "number" && J)
                            )
                                return (
                                    (this.timer = new Ve({
                                        duration: H,
                                        context: this,
                                        complete: R,
                                    })),
                                    void (this.active = !0)
                                );
                            if (ne == "string" && J) {
                                switch (H) {
                                    case "hide":
                                        q.call(this);
                                        break;
                                    case "stop":
                                        B.call(this);
                                        break;
                                    case "redraw":
                                        $.call(this);
                                        break;
                                    default:
                                        E.call(this, H, ce && ce[1]);
                                }
                                return R.call(this);
                            }
                            if (ne == "function") return void H.call(this, this);
                            if (ne == "object") {
                                var _e = 0;
                                ke.call(
                                    this,
                                    H,
                                    function (pe, NE) {
                                        pe.span > _e && (_e = pe.span), pe.stop(), pe.animate(NE);
                                    },
                                    function (pe) {
                                        "wait" in pe && (_e = u(pe.wait, 0));
                                    }
                                ),
                                    de.call(this),
                                    _e > 0 &&
                                    ((this.timer = new Ve({ duration: _e, context: this })),
                                        (this.active = !0),
                                        J && (this.timer.complete = R));
                                var Ne = this,
                                    be = !1,
                                    xr = {};
                                te(function () {
                                    ke.call(Ne, H, function (pe) {
                                        pe.active && ((be = !0), (xr[pe.name] = pe.nextStyle));
                                    }),
                                        be && Ne.$el.css(xr);
                                });
                            }
                        }
                    }
                    function b(H) {
                        (H = u(H, 0)),
                            this.active
                                ? this.queue.push({ options: H })
                                : ((this.timer = new Ve({
                                    duration: H,
                                    context: this,
                                    complete: R,
                                })),
                                    (this.active = !0));
                    }
                    function P(H) {
                        return this.active
                            ? (this.queue.push({ options: H, args: arguments }),
                                void (this.timer.complete = R))
                            : l(
                                "No active transition timer. Use start() or wait() before then()."
                            );
                    }
                    function R() {
                        if (
                            (this.timer && this.timer.destroy(),
                                (this.active = !1),
                                this.queue.length)
                        ) {
                            var H = this.queue.shift();
                            v.call(this, H.options, !0, H.args);
                        }
                    }
                    function B(H) {
                        this.timer && this.timer.destroy(),
                            (this.queue = []),
                            (this.active = !1);
                        var J;
                        typeof H == "string"
                            ? ((J = {}), (J[H] = 1))
                            : (J = typeof H == "object" && H != null ? H : this.props),
                            ke.call(this, J, ve),
                            de.call(this);
                    }
                    function Y(H) {
                        B.call(this, H), ke.call(this, H, Qt, LE);
                    }
                    function ae(H) {
                        typeof H != "string" && (H = "block"), (this.el.style.display = H);
                    }
                    function q() {
                        B.call(this), (this.el.style.display = "none");
                    }
                    function $() {
                        this.el.offsetHeight;
                    }
                    function Z() {
                        B.call(this), e.removeData(this.el, O), (this.$el = this.el = null);
                    }
                    function de() {
                        var H,
                            J,
                            ce = [];
                        this.upstream && ce.push(this.upstream);
                        for (H in this.props)
                            (J = this.props[H]), J.active && ce.push(J.string);
                        (ce = ce.join(",")),
                            this.style !== ce &&
                            ((this.style = ce), (this.el.style[X.transition.dom] = ce));
                    }
                    function ke(H, J, ce) {
                        var ne,
                            _e,
                            Ne,
                            be,
                            xr = J !== ve,
                            pe = {};
                        for (ne in H)
                            (Ne = H[ne]),
                                ne in Ce
                                    ? (pe.transform || (pe.transform = {}),
                                        (pe.transform[ne] = Ne))
                                    : (x.test(ne) && (ne = r(ne)),
                                        ne in ot
                                            ? (pe[ne] = Ne)
                                            : (be || (be = {}), (be[ne] = Ne)));
                        for (ne in pe) {
                            if (((Ne = pe[ne]), (_e = this.props[ne]), !_e)) {
                                if (!xr) continue;
                                _e = E.call(this, ne);
                            }
                            J.call(this, _e, Ne);
                        }
                        ce && be && ce.call(this, be);
                    }
                    function ve(H) {
                        H.stop();
                    }
                    function Qt(H, J) {
                        H.set(J);
                    }
                    function LE(H) {
                        this.$el.css(H);
                    }
                    function Pe(H, J) {
                        c[H] = function () {
                            return this.children
                                ? PE.call(this, J, arguments)
                                : (this.el && J.apply(this, arguments), this);
                        };
                    }
                    function PE(H, J) {
                        var ce,
                            ne = this.children.length;
                        for (ce = 0; ne > ce; ce++) H.apply(this.children[ce], J);
                        return this;
                    }
                    (c.init = function (H) {
                        if (
                            ((this.$el = e(H)),
                                (this.el = this.$el[0]),
                                (this.props = {}),
                                (this.queue = []),
                                (this.style = ""),
                                (this.active = !1),
                                ue.keepInherited && !ue.fallback)
                        ) {
                            var J = Ze(this.el, "transition");
                            J && !U.test(J) && (this.upstream = J);
                        }
                        X.backface &&
                            ue.hideBackface &&
                            fe(this.el, X.backface.css, "hidden");
                    }),
                        Pe("add", E),
                        Pe("start", v),
                        Pe("wait", b),
                        Pe("then", P),
                        Pe("next", R),
                        Pe("stop", B),
                        Pe("set", Y),
                        Pe("show", ae),
                        Pe("hide", q),
                        Pe("redraw", $),
                        Pe("destroy", Z);
                }),
                F = p(h, function (c) {
                    function E(v, b) {
                        var P = e.data(v, O) || e.data(v, O, new h.Bare());
                        return P.el || P.init(v), b ? P.start(b) : P;
                    }
                    c.init = function (v, b) {
                        var P = e(v);
                        if (!P.length) return this;
                        if (P.length === 1) return E(P[0], b);
                        var R = [];
                        return (
                            P.each(function (B, Y) {
                                R.push(E(Y, b));
                            }),
                            (this.children = R),
                            this
                        );
                    };
                }),
                C = p(function (c) {
                    function E() {
                        var R = this.get();
                        this.update("auto");
                        var B = this.get();
                        return this.update(R), B;
                    }
                    function v(R, B, Y) {
                        return B !== void 0 && (Y = B), R in d ? R : Y;
                    }
                    function b(R) {
                        var B = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(R);
                        return (B ? i(B[1], B[2], B[3]) : R).replace(
                            /#(\w)(\w)(\w)$/,
                            "#$1$1$2$2$3$3"
                        );
                    }
                    var P = { duration: 500, ease: "ease", delay: 0 };
                    (c.init = function (R, B, Y, ae) {
                        (this.$el = R), (this.el = R[0]);
                        var q = B[0];
                        Y[2] && (q = Y[2]),
                            Je[q] && (q = Je[q]),
                            (this.name = q),
                            (this.type = Y[1]),
                            (this.duration = u(B[1], this.duration, P.duration)),
                            (this.ease = v(B[2], this.ease, P.ease)),
                            (this.delay = u(B[3], this.delay, P.delay)),
                            (this.span = this.duration + this.delay),
                            (this.active = !1),
                            (this.nextStyle = null),
                            (this.auto = W.test(this.name)),
                            (this.unit = ae.unit || this.unit || ue.defaultUnit),
                            (this.angle = ae.angle || this.angle || ue.defaultAngle),
                            ue.fallback || ae.fallback
                                ? (this.animate = this.fallback)
                                : ((this.animate = this.transition),
                                    (this.string =
                                        this.name +
                                        z +
                                        this.duration +
                                        "ms" +
                                        (this.ease != "ease" ? z + d[this.ease][0] : "") +
                                        (this.delay ? z + this.delay + "ms" : "")));
                    }),
                        (c.set = function (R) {
                            (R = this.convert(R, this.type)), this.update(R), this.redraw();
                        }),
                        (c.transition = function (R) {
                            (this.active = !0),
                                (R = this.convert(R, this.type)),
                                this.auto &&
                                (this.el.style[this.name] == "auto" &&
                                    (this.update(this.get()), this.redraw()),
                                    R == "auto" && (R = E.call(this))),
                                (this.nextStyle = R);
                        }),
                        (c.fallback = function (R) {
                            var B =
                                this.el.style[this.name] || this.convert(this.get(), this.type);
                            (R = this.convert(R, this.type)),
                                this.auto &&
                                (B == "auto" && (B = this.convert(this.get(), this.type)),
                                    R == "auto" && (R = E.call(this))),
                                (this.tween = new ge({
                                    from: B,
                                    to: R,
                                    duration: this.duration,
                                    delay: this.delay,
                                    ease: this.ease,
                                    update: this.update,
                                    context: this,
                                }));
                        }),
                        (c.get = function () {
                            return Ze(this.el, this.name);
                        }),
                        (c.update = function (R) {
                            fe(this.el, this.name, R);
                        }),
                        (c.stop = function () {
                            (this.active || this.nextStyle) &&
                                ((this.active = !1),
                                    (this.nextStyle = null),
                                    fe(this.el, this.name, this.get()));
                            var R = this.tween;
                            R && R.context && R.destroy();
                        }),
                        (c.convert = function (R, B) {
                            if (R == "auto" && this.auto) return R;
                            var Y,
                                ae = typeof R == "number",
                                q = typeof R == "string";
                            switch (B) {
                                case A:
                                    if (ae) return R;
                                    if (q && R.replace(m, "") === "") return +R;
                                    Y = "number(unitless)";
                                    break;
                                case L:
                                    if (q) {
                                        if (R === "" && this.original) return this.original;
                                        if (B.test(R))
                                            return R.charAt(0) == "#" && R.length == 7 ? R : b(R);
                                    }
                                    Y = "hex or rgb string";
                                    break;
                                case N:
                                    if (ae) return R + this.unit;
                                    if (q && B.test(R)) return R;
                                    Y = "number(px) or string(unit)";
                                    break;
                                case w:
                                    if (ae) return R + this.unit;
                                    if (q && B.test(R)) return R;
                                    Y = "number(px) or string(unit or %)";
                                    break;
                                case G:
                                    if (ae) return R + this.angle;
                                    if (q && B.test(R)) return R;
                                    Y = "number(deg) or string(angle)";
                                    break;
                                case k:
                                    if (ae || (q && w.test(R))) return R;
                                    Y = "number(unitless) or string(unit or %)";
                            }
                            return a(Y, R), R;
                        }),
                        (c.redraw = function () {
                            this.el.offsetHeight;
                        });
                }),
                S = p(C, function (c, E) {
                    c.init = function () {
                        E.init.apply(this, arguments),
                            this.original || (this.original = this.convert(this.get(), L));
                    };
                }),
                Q = p(C, function (c, E) {
                    (c.init = function () {
                        E.init.apply(this, arguments), (this.animate = this.fallback);
                    }),
                        (c.get = function () {
                            return this.$el[this.name]();
                        }),
                        (c.update = function (v) {
                            this.$el[this.name](v);
                        });
                }),
                re = p(C, function (c, E) {
                    function v(b, P) {
                        var R, B, Y, ae, q;
                        for (R in b)
                            (ae = Ce[R]),
                                (Y = ae[0]),
                                (B = ae[1] || R),
                                (q = this.convert(b[R], Y)),
                                P.call(this, B, q, Y);
                    }
                    (c.init = function () {
                        E.init.apply(this, arguments),
                            this.current ||
                            ((this.current = {}),
                                Ce.perspective &&
                                ue.perspective &&
                                ((this.current.perspective = ue.perspective),
                                    fe(this.el, this.name, this.style(this.current)),
                                    this.redraw()));
                    }),
                        (c.set = function (b) {
                            v.call(this, b, function (P, R) {
                                this.current[P] = R;
                            }),
                                fe(this.el, this.name, this.style(this.current)),
                                this.redraw();
                        }),
                        (c.transition = function (b) {
                            var P = this.values(b);
                            this.tween = new Re({
                                current: this.current,
                                values: P,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                            });
                            var R,
                                B = {};
                            for (R in this.current) B[R] = R in P ? P[R] : this.current[R];
                            (this.active = !0), (this.nextStyle = this.style(B));
                        }),
                        (c.fallback = function (b) {
                            var P = this.values(b);
                            this.tween = new Re({
                                current: this.current,
                                values: P,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this,
                            });
                        }),
                        (c.update = function () {
                            fe(this.el, this.name, this.style(this.current));
                        }),
                        (c.style = function (b) {
                            var P,
                                R = "";
                            for (P in b) R += P + "(" + b[P] + ") ";
                            return R;
                        }),
                        (c.values = function (b) {
                            var P,
                                R = {};
                            return (
                                v.call(this, b, function (B, Y, ae) {
                                    (R[B] = Y),
                                        this.current[B] === void 0 &&
                                        ((P = 0),
                                            ~B.indexOf("scale") && (P = 1),
                                            (this.current[B] = this.convert(P, ae)));
                                }),
                                R
                            );
                        });
                }),
                ge = p(function (c) {
                    function E(q) {
                        Y.push(q) === 1 && te(v);
                    }
                    function v() {
                        var q,
                            $,
                            Z,
                            de = Y.length;
                        if (de)
                            for (te(v), $ = me(), q = de; q--;) (Z = Y[q]), Z && Z.render($);
                    }
                    function b(q) {
                        var $,
                            Z = e.inArray(q, Y);
                        Z >= 0 &&
                            (($ = Y.slice(Z + 1)),
                                (Y.length = Z),
                                $.length && (Y = Y.concat($)));
                    }
                    function P(q) {
                        return Math.round(q * ae) / ae;
                    }
                    function R(q, $, Z) {
                        return i(
                            q[0] + Z * ($[0] - q[0]),
                            q[1] + Z * ($[1] - q[1]),
                            q[2] + Z * ($[2] - q[2])
                        );
                    }
                    var B = { ease: d.ease[1], from: 0, to: 1 };
                    (c.init = function (q) {
                        (this.duration = q.duration || 0), (this.delay = q.delay || 0);
                        var $ = q.ease || B.ease;
                        d[$] && ($ = d[$][1]),
                            typeof $ != "function" && ($ = B.ease),
                            (this.ease = $),
                            (this.update = q.update || o),
                            (this.complete = q.complete || o),
                            (this.context = q.context || this),
                            (this.name = q.name);
                        var Z = q.from,
                            de = q.to;
                        Z === void 0 && (Z = B.from),
                            de === void 0 && (de = B.to),
                            (this.unit = q.unit || ""),
                            typeof Z == "number" && typeof de == "number"
                                ? ((this.begin = Z), (this.change = de - Z))
                                : this.format(de, Z),
                            (this.value = this.begin + this.unit),
                            (this.start = me()),
                            q.autoplay !== !1 && this.play();
                    }),
                        (c.play = function () {
                            this.active ||
                                (this.start || (this.start = me()),
                                    (this.active = !0),
                                    E(this));
                        }),
                        (c.stop = function () {
                            this.active && ((this.active = !1), b(this));
                        }),
                        (c.render = function (q) {
                            var $,
                                Z = q - this.start;
                            if (this.delay) {
                                if (Z <= this.delay) return;
                                Z -= this.delay;
                            }
                            if (Z < this.duration) {
                                var de = this.ease(Z, 0, 1, this.duration);
                                return (
                                    ($ = this.startRGB
                                        ? R(this.startRGB, this.endRGB, de)
                                        : P(this.begin + de * this.change)),
                                    (this.value = $ + this.unit),
                                    void this.update.call(this.context, this.value)
                                );
                            }
                            ($ = this.endHex || this.begin + this.change),
                                (this.value = $ + this.unit),
                                this.update.call(this.context, this.value),
                                this.complete.call(this.context),
                                this.destroy();
                        }),
                        (c.format = function (q, $) {
                            if ((($ += ""), (q += ""), q.charAt(0) == "#"))
                                return (
                                    (this.startRGB = n($)),
                                    (this.endRGB = n(q)),
                                    (this.endHex = q),
                                    (this.begin = 0),
                                    void (this.change = 1)
                                );
                            if (!this.unit) {
                                var Z = $.replace(m, ""),
                                    de = q.replace(m, "");
                                Z !== de && s("tween", $, q), (this.unit = Z);
                            }
                            ($ = parseFloat($)),
                                (q = parseFloat(q)),
                                (this.begin = this.value = $),
                                (this.change = q - $);
                        }),
                        (c.destroy = function () {
                            this.stop(),
                                (this.context = null),
                                (this.ease = this.update = this.complete = o);
                        });
                    var Y = [],
                        ae = 1e3;
                }),
                Ve = p(ge, function (c) {
                    (c.init = function (E) {
                        (this.duration = E.duration || 0),
                            (this.complete = E.complete || o),
                            (this.context = E.context),
                            this.play();
                    }),
                        (c.render = function (E) {
                            var v = E - this.start;
                            v < this.duration ||
                                (this.complete.call(this.context), this.destroy());
                        });
                }),
                Re = p(ge, function (c, E) {
                    (c.init = function (v) {
                        (this.context = v.context),
                            (this.update = v.update),
                            (this.tweens = []),
                            (this.current = v.current);
                        var b, P;
                        for (b in v.values)
                            (P = v.values[b]),
                                this.current[b] !== P &&
                                this.tweens.push(
                                    new ge({
                                        name: b,
                                        from: this.current[b],
                                        to: P,
                                        duration: v.duration,
                                        delay: v.delay,
                                        ease: v.ease,
                                        autoplay: !1,
                                    })
                                );
                        this.play();
                    }),
                        (c.render = function (v) {
                            var b,
                                P,
                                R = this.tweens.length,
                                B = !1;
                            for (b = R; b--;)
                                (P = this.tweens[b]),
                                    P.context &&
                                    (P.render(v), (this.current[P.name] = P.value), (B = !0));
                            return B
                                ? void (this.update && this.update.call(this.context))
                                : this.destroy();
                        }),
                        (c.destroy = function () {
                            if ((E.destroy.call(this), this.tweens)) {
                                var v,
                                    b = this.tweens.length;
                                for (v = b; v--;) this.tweens[v].destroy();
                                (this.tweens = null), (this.current = null);
                            }
                        });
                }),
                ue = (t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !X.transition,
                    agentTests: [],
                });
            (t.fallback = function (c) {
                if (!X.transition) return (ue.fallback = !0);
                ue.agentTests.push("(" + c + ")");
                var E = new RegExp(ue.agentTests.join("|"), "i");
                ue.fallback = E.test(navigator.userAgent);
            }),
                t.fallback("6.0.[2-5] Safari"),
                (t.tween = function (c) {
                    return new ge(c);
                }),
                (t.delay = function (c, E, v) {
                    return new Ve({ complete: E, duration: c, context: v });
                }),
                (e.fn.tram = function (c) {
                    return t.call(null, this, c);
                });
            var fe = e.style,
                Ze = e.css,
                Je = { transform: X.transform && X.transform.css },
                ot = {
                    color: [S, L],
                    background: [S, L, "background-color"],
                    "outline-color": [S, L],
                    "border-color": [S, L],
                    "border-top-color": [S, L],
                    "border-right-color": [S, L],
                    "border-bottom-color": [S, L],
                    "border-left-color": [S, L],
                    "border-width": [C, N],
                    "border-top-width": [C, N],
                    "border-right-width": [C, N],
                    "border-bottom-width": [C, N],
                    "border-left-width": [C, N],
                    "border-spacing": [C, N],
                    "letter-spacing": [C, N],
                    margin: [C, N],
                    "margin-top": [C, N],
                    "margin-right": [C, N],
                    "margin-bottom": [C, N],
                    "margin-left": [C, N],
                    padding: [C, N],
                    "padding-top": [C, N],
                    "padding-right": [C, N],
                    "padding-bottom": [C, N],
                    "padding-left": [C, N],
                    "outline-width": [C, N],
                    opacity: [C, A],
                    top: [C, w],
                    right: [C, w],
                    bottom: [C, w],
                    left: [C, w],
                    "font-size": [C, w],
                    "text-indent": [C, w],
                    "word-spacing": [C, w],
                    width: [C, w],
                    "min-width": [C, w],
                    "max-width": [C, w],
                    height: [C, w],
                    "min-height": [C, w],
                    "max-height": [C, w],
                    "line-height": [C, k],
                    "scroll-top": [Q, A, "scrollTop"],
                    "scroll-left": [Q, A, "scrollLeft"],
                },
                Ce = {};
            X.transform &&
                ((ot.transform = [re]),
                    (Ce = {
                        x: [w, "translateX"],
                        y: [w, "translateY"],
                        rotate: [G],
                        rotateX: [G],
                        rotateY: [G],
                        scale: [A],
                        scaleX: [A],
                        scaleY: [A],
                        skew: [G],
                        skewX: [G],
                        skewY: [G],
                    })),
                X.transform &&
                X.backface &&
                ((Ce.z = [w, "translateZ"]),
                    (Ce.rotateZ = [G]),
                    (Ce.scaleZ = [A]),
                    (Ce.perspective = [N]));
            var pt = /ms/,
                Or = /s|\./;
            return (e.tram = t);
        })(window.jQuery);
    });
    var ca = f((EF, ua) => {
        "use strict";
        var GE = window.$,
            VE = Bn() && GE.tram;
        ua.exports = (function () {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                o = r.push,
                a = r.slice,
                s = r.concat,
                u = n.toString,
                l = n.hasOwnProperty,
                g = r.forEach,
                p = r.map,
                d = r.reduce,
                y = r.reduceRight,
                I = r.filter,
                _ = r.every,
                O = r.some,
                m = r.indexOf,
                x = r.lastIndexOf,
                A = Array.isArray,
                L = Object.keys,
                N = i.bind,
                w =
                    (e.each =
                        e.forEach =
                        function (T, D, V) {
                            if (T == null) return T;
                            if (g && T.forEach === g) T.forEach(D, V);
                            else if (T.length === +T.length) {
                                for (var X = 0, K = T.length; X < K; X++)
                                    if (D.call(V, T[X], X, T) === t) return;
                            } else
                                for (var j = e.keys(T), X = 0, K = j.length; X < K; X++)
                                    if (D.call(V, T[j[X]], j[X], T) === t) return;
                            return T;
                        });
            (e.map = e.collect =
                function (T, D, V) {
                    var X = [];
                    return T == null
                        ? X
                        : p && T.map === p
                            ? T.map(D, V)
                            : (w(T, function (K, j, te) {
                                X.push(D.call(V, K, j, te));
                            }),
                                X);
                }),
                (e.find = e.detect =
                    function (T, D, V) {
                        var X;
                        return (
                            G(T, function (K, j, te) {
                                if (D.call(V, K, j, te)) return (X = K), !0;
                            }),
                            X
                        );
                    }),
                (e.filter = e.select =
                    function (T, D, V) {
                        var X = [];
                        return T == null
                            ? X
                            : I && T.filter === I
                                ? T.filter(D, V)
                                : (w(T, function (K, j, te) {
                                    D.call(V, K, j, te) && X.push(K);
                                }),
                                    X);
                    });
            var G =
                (e.some =
                    e.any =
                    function (T, D, V) {
                        D || (D = e.identity);
                        var X = !1;
                        return T == null
                            ? X
                            : O && T.some === O
                                ? T.some(D, V)
                                : (w(T, function (K, j, te) {
                                    if (X || (X = D.call(V, K, j, te))) return t;
                                }),
                                    !!X);
                    });
            (e.contains = e.include =
                function (T, D) {
                    return T == null
                        ? !1
                        : m && T.indexOf === m
                            ? T.indexOf(D) != -1
                            : G(T, function (V) {
                                return V === D;
                            });
                }),
                (e.delay = function (T, D) {
                    var V = a.call(arguments, 2);
                    return setTimeout(function () {
                        return T.apply(null, V);
                    }, D);
                }),
                (e.defer = function (T) {
                    return e.delay.apply(e, [T, 1].concat(a.call(arguments, 1)));
                }),
                (e.throttle = function (T) {
                    var D, V, X;
                    return function () {
                        D ||
                            ((D = !0),
                                (V = arguments),
                                (X = this),
                                VE.frame(function () {
                                    (D = !1), T.apply(X, V);
                                }));
                    };
                }),
                (e.debounce = function (T, D, V) {
                    var X,
                        K,
                        j,
                        te,
                        me,
                        h = function () {
                            var F = e.now() - te;
                            F < D
                                ? (X = setTimeout(h, D - F))
                                : ((X = null), V || ((me = T.apply(j, K)), (j = K = null)));
                        };
                    return function () {
                        (j = this), (K = arguments), (te = e.now());
                        var F = V && !X;
                        return (
                            X || (X = setTimeout(h, D)),
                            F && ((me = T.apply(j, K)), (j = K = null)),
                            me
                        );
                    };
                }),
                (e.defaults = function (T) {
                    if (!e.isObject(T)) return T;
                    for (var D = 1, V = arguments.length; D < V; D++) {
                        var X = arguments[D];
                        for (var K in X) T[K] === void 0 && (T[K] = X[K]);
                    }
                    return T;
                }),
                (e.keys = function (T) {
                    if (!e.isObject(T)) return [];
                    if (L) return L(T);
                    var D = [];
                    for (var V in T) e.has(T, V) && D.push(V);
                    return D;
                }),
                (e.has = function (T, D) {
                    return l.call(T, D);
                }),
                (e.isObject = function (T) {
                    return T === Object(T);
                }),
                (e.now =
                    Date.now ||
                    function () {
                        return new Date().getTime();
                    }),
                (e.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g,
                });
            var k = /(.)^/,
                U = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029",
                },
                W = /\\|'|\r|\n|\u2028|\u2029/g,
                z = function (T) {
                    return "\\" + U[T];
                },
                M = /^\s*(\w|\$)+\s*$/;
            return (
                (e.template = function (T, D, V) {
                    !D && V && (D = V), (D = e.defaults({}, D, e.templateSettings));
                    var X = RegExp(
                        [
                            (D.escape || k).source,
                            (D.interpolate || k).source,
                            (D.evaluate || k).source,
                        ].join("|") + "|$",
                        "g"
                    ),
                        K = 0,
                        j = "__p+='";
                    T.replace(X, function (F, C, S, Q, re) {
                        return (
                            (j += T.slice(K, re).replace(W, z)),
                            (K = re + F.length),
                            C
                                ? (j +=
                                    `'+
    ((__t=(` +
                                    C +
                                    `))==null?'':_.escape(__t))+
    '`)
                                : S
                                    ? (j +=
                                        `'+
    ((__t=(` +
                                        S +
                                        `))==null?'':__t)+
    '`)
                                    : Q &&
                                    (j +=
                                        `';
    ` +
                                        Q +
                                        `
    __p+='`),
                            F
                        );
                    }),
                        (j += `';
    `);
                    var te = D.variable;
                    if (te) {
                        if (!M.test(te))
                            throw new Error("variable is not a bare identifier: " + te);
                    } else
                        (j =
                            `with(obj||{}){
    ` +
                            j +
                            `}
    `),
                            (te = "obj");
                    j =
                        `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    ` +
                        j +
                        `return __p;
    `;
                    var me;
                    try {
                        me = new Function(D.variable || "obj", "_", j);
                    } catch (F) {
                        throw ((F.source = j), F);
                    }
                    var h = function (F) {
                        return me.call(this, F, e);
                    };
                    return (
                        (h.source =
                            "function(" +
                            te +
                            `){
    ` +
                            j +
                            "}"),
                        h
                    );
                }),
                e
            );
        })();
    });
    var We = f((yF, ya) => {
        "use strict";
        var ie = {},
            Tt = {},
            bt = [],
            Hn = window.Webflow || [],
            at = window.jQuery,
            Me = at(window),
            kE = at(document),
            Be = at.isFunction,
            De = (ie._ = ca()),
            fa = (ie.tram = Bn() && at.tram),
            Cr = !1,
            zn = !1;
        fa.config.hideBackface = !1;
        fa.config.keepInherited = !0;
        ie.define = function (e, t, r) {
            Tt[e] && pa(Tt[e]);
            var n = (Tt[e] = t(at, De, r) || {});
            return da(n), n;
        };
        ie.require = function (e) {
            return Tt[e];
        };
        function da(e) {
            ie.env() &&
                (Be(e.design) && Me.on("__wf_design", e.design),
                    Be(e.preview) && Me.on("__wf_preview", e.preview)),
                Be(e.destroy) && Me.on("__wf_destroy", e.destroy),
                e.ready && Be(e.ready) && UE(e);
        }
        function UE(e) {
            if (Cr) {
                e.ready();
                return;
            }
            De.contains(bt, e.ready) || bt.push(e.ready);
        }
        function pa(e) {
            Be(e.design) && Me.off("__wf_design", e.design),
                Be(e.preview) && Me.off("__wf_preview", e.preview),
                Be(e.destroy) && Me.off("__wf_destroy", e.destroy),
                e.ready && Be(e.ready) && BE(e);
        }
        function BE(e) {
            bt = De.filter(bt, function (t) {
                return t !== e.ready;
            });
        }
        ie.push = function (e) {
            if (Cr) {
                Be(e) && e();
                return;
            }
            Hn.push(e);
        };
        ie.env = function (e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top;
        };
        var Rr = navigator.userAgent.toLowerCase(),
            ha = (ie.env.touch =
                "ontouchstart" in window ||
                (window.DocumentTouch && document instanceof window.DocumentTouch)),
            WE = (ie.env.chrome =
                /chrome/.test(Rr) &&
                /Google/.test(navigator.vendor) &&
                parseInt(Rr.match(/chrome\/(\d+)\./)[1], 10)),
            HE = (ie.env.ios = /(ipod|iphone|ipad)/.test(Rr));
        ie.env.safari = /safari/.test(Rr) && !WE && !HE;
        var Wn;
        ha &&
            kE.on("touchstart mousedown", function (e) {
                Wn = e.target;
            });
        ie.validClick = ha
            ? function (e) {
                return e === Wn || at.contains(e, Wn);
            }
            : function () {
                return !0;
            };
        var ga = "resize.webflow orientationchange.webflow load.webflow",
            zE = "scroll.webflow " + ga;
        ie.resize = Kn(Me, ga);
        ie.scroll = Kn(Me, zE);
        ie.redraw = Kn();
        function Kn(e, t) {
            var r = [],
                n = {};
            return (
                (n.up = De.throttle(function (i) {
                    De.each(r, function (o) {
                        o(i);
                    });
                })),
                e && t && e.on(t, n.up),
                (n.on = function (i) {
                    typeof i == "function" && (De.contains(r, i) || r.push(i));
                }),
                (n.off = function (i) {
                    if (!arguments.length) {
                        r = [];
                        return;
                    }
                    r = De.filter(r, function (o) {
                        return o !== i;
                    });
                }),
                n
            );
        }
        ie.location = function (e) {
            window.location = e;
        };
        ie.env() && (ie.location = function () { });
        ie.ready = function () {
            (Cr = !0), zn ? KE() : De.each(bt, la), De.each(Hn, la), ie.resize.up();
        };
        function la(e) {
            Be(e) && e();
        }
        function KE() {
            (zn = !1), De.each(Tt, da);
        }
        var ht;
        ie.load = function (e) {
            ht.then(e);
        };
        function Ea() {
            ht && (ht.reject(), Me.off("load", ht.resolve)),
                (ht = new at.Deferred()),
                Me.on("load", ht.resolve);
        }
        ie.destroy = function (e) {
            (e = e || {}),
                (zn = !0),
                Me.triggerHandler("__wf_destroy"),
                e.domready != null && (Cr = e.domready),
                De.each(Tt, pa),
                ie.resize.off(),
                ie.scroll.off(),
                ie.redraw.off(),
                (bt = []),
                (Hn = []),
                ht.state() === "pending" && Ea();
        };
        at(ie.ready);
        Ea();
        ya.exports = window.Webflow = ie;
    });
    var _a = f((mF, va) => {
        "use strict";
        var ma = We();
        ma.define(
            "brand",
            (va.exports = function (e) {
                var t = {},
                    r = document,
                    n = e("html"),
                    i = e("body"),
                    o = ".w-webflow-badge",
                    a = window.location,
                    s = /PhantomJS/i.test(navigator.userAgent),
                    u =
                        "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                    l;
                t.ready = function () {
                    var y = n.attr("data-wf-status"),
                        I = n.attr("data-wf-domain") || "";
                    /\.webflow\.io$/i.test(I) && a.hostname !== I && (y = !0),
                        y &&
                        !s &&
                        ((l = l || p()),
                            d(),
                            setTimeout(d, 500),
                            e(r).off(u, g).on(u, g));
                };
                function g() {
                    var y =
                        r.fullScreen ||
                        r.mozFullScreen ||
                        r.webkitIsFullScreen ||
                        r.msFullscreenElement ||
                        !!r.webkitFullscreenElement;
                    e(l).attr("style", y ? "display: none !important;" : "");
                }
                function p() {
                    return;
                }
                function d() {
                    var y = i.children(o),
                        I = y.length && y.get(0) === l,
                        _ = ma.env("editor");
                    if (I) {
                        _ && y.remove();
                        return;
                    }
                    y.length && y.remove(), _ || i.append(l);
                }
                return t;
            })
        );
    });
    var Ta = f((vF, Ia) => {
        "use strict";
        var jn = We();
        jn.define(
            "edit",
            (Ia.exports = function (e, t, r) {
                if (
                    ((r = r || {}),
                        (jn.env("test") || jn.env("frame")) && !r.fixture && !jE())
                )
                    return { exit: 1 };
                var n = {},
                    i = e(window),
                    o = e(document.documentElement),
                    a = document.location,
                    s = "hashchange",
                    u,
                    l = r.load || d,
                    g = !1;
                try {
                    g =
                        localStorage &&
                        localStorage.getItem &&
                        localStorage.getItem("WebflowEditor");
                } catch { }
                g
                    ? l()
                    : a.search
                        ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
                            /\?edit$/.test(a.href)) &&
                        l()
                        : i.on(s, p).triggerHandler(s);
                function p() {
                    u || (/\?edit/.test(a.hash) && l());
                }
                function d() {
                    (u = !0),
                        (window.WebflowEditor = !0),
                        i.off(s, p),
                        x(function (L) {
                            e.ajax({
                                url: m("https://editor-api.webflow.com/api/editor/view"),
                                data: { siteId: o.attr("data-wf-site") },
                                xhrFields: { withCredentials: !0 },
                                dataType: "json",
                                crossDomain: !0,
                                success: y(L),
                            });
                        });
                }
                function y(L) {
                    return function (N) {
                        if (!N) {
                            console.error("Could not load editor data");
                            return;
                        }
                        (N.thirdPartyCookiesSupported = L),
                            I(O(N.scriptPath), function () {
                                window.WebflowEditor(N);
                            });
                    };
                }
                function I(L, N) {
                    e.ajax({ type: "GET", url: L, dataType: "script", cache: !0 }).then(
                        N,
                        _
                    );
                }
                function _(L, N, w) {
                    throw (console.error("Could not load editor script: " + N), w);
                }
                function O(L) {
                    return L.indexOf("//") >= 0
                        ? L
                        : m("https://editor-api.webflow.com" + L);
                }
                function m(L) {
                    return L.replace(/([^:])\/\//g, "$1/");
                }
                function x(L) {
                    var N = window.document.createElement("iframe");
                    (N.src = "https://webflow.com/site/third-party-cookie-check.html"),
                        (N.style.display = "none"),
                        (N.sandbox = "allow-scripts allow-same-origin");
                    var w = function (G) {
                        G.data === "WF_third_party_cookies_unsupported"
                            ? (A(N, w), L(!1))
                            : G.data === "WF_third_party_cookies_supported" &&
                            (A(N, w), L(!0));
                    };
                    (N.onerror = function () {
                        A(N, w), L(!1);
                    }),
                        window.addEventListener("message", w, !1),
                        window.document.body.appendChild(N);
                }
                function A(L, N) {
                    window.removeEventListener("message", N, !1), L.remove();
                }
                return n;
            })
        );
        function jE() {
            try {
                return window.top.__Cypress__;
            } catch {
                return !1;
            }
        }
    });
    var Aa = f((_F, ba) => {
        "use strict";
        var YE = We();
        YE.define(
            "focus-visible",
            (ba.exports = function () {
                function e(r) {
                    var n = !0,
                        i = !1,
                        o = null,
                        a = {
                            text: !0,
                            search: !0,
                            url: !0,
                            tel: !0,
                            email: !0,
                            password: !0,
                            number: !0,
                            date: !0,
                            month: !0,
                            week: !0,
                            time: !0,
                            datetime: !0,
                            "datetime-local": !0,
                        };
                    function s(A) {
                        return !!(
                            A &&
                            A !== document &&
                            A.nodeName !== "HTML" &&
                            A.nodeName !== "BODY" &&
                            "classList" in A &&
                            "contains" in A.classList
                        );
                    }
                    function u(A) {
                        var L = A.type,
                            N = A.tagName;
                        return !!(
                            (N === "INPUT" && a[L] && !A.readOnly) ||
                            (N === "TEXTAREA" && !A.readOnly) ||
                            A.isContentEditable
                        );
                    }
                    function l(A) {
                        A.getAttribute("data-wf-focus-visible") ||
                            A.setAttribute("data-wf-focus-visible", "true");
                    }
                    function g(A) {
                        A.getAttribute("data-wf-focus-visible") &&
                            A.removeAttribute("data-wf-focus-visible");
                    }
                    function p(A) {
                        A.metaKey ||
                            A.altKey ||
                            A.ctrlKey ||
                            (s(r.activeElement) && l(r.activeElement), (n = !0));
                    }
                    function d() {
                        n = !1;
                    }
                    function y(A) {
                        s(A.target) && (n || u(A.target)) && l(A.target);
                    }
                    function I(A) {
                        s(A.target) &&
                            A.target.hasAttribute("data-wf-focus-visible") &&
                            ((i = !0),
                                window.clearTimeout(o),
                                (o = window.setTimeout(function () {
                                    i = !1;
                                }, 100)),
                                g(A.target));
                    }
                    function _() {
                        document.visibilityState === "hidden" && (i && (n = !0), O());
                    }
                    function O() {
                        document.addEventListener("mousemove", x),
                            document.addEventListener("mousedown", x),
                            document.addEventListener("mouseup", x),
                            document.addEventListener("pointermove", x),
                            document.addEventListener("pointerdown", x),
                            document.addEventListener("pointerup", x),
                            document.addEventListener("touchmove", x),
                            document.addEventListener("touchstart", x),
                            document.addEventListener("touchend", x);
                    }
                    function m() {
                        document.removeEventListener("mousemove", x),
                            document.removeEventListener("mousedown", x),
                            document.removeEventListener("mouseup", x),
                            document.removeEventListener("pointermove", x),
                            document.removeEventListener("pointerdown", x),
                            document.removeEventListener("pointerup", x),
                            document.removeEventListener("touchmove", x),
                            document.removeEventListener("touchstart", x),
                            document.removeEventListener("touchend", x);
                    }
                    function x(A) {
                        (A.target.nodeName && A.target.nodeName.toLowerCase() === "html") ||
                            ((n = !1), m());
                    }
                    document.addEventListener("keydown", p, !0),
                        document.addEventListener("mousedown", d, !0),
                        document.addEventListener("pointerdown", d, !0),
                        document.addEventListener("touchstart", d, !0),
                        document.addEventListener("visibilitychange", _, !0),
                        O(),
                        r.addEventListener("focus", y, !0),
                        r.addEventListener("blur", I, !0);
                }
                function t() {
                    if (typeof document < "u")
                        try {
                            document.querySelector(":focus-visible");
                        } catch {
                            e(document);
                        }
                }
                return { ready: t };
            })
        );
    });
    var xa = f((IF, Oa) => {
        "use strict";
        var Sa = We();
        Sa.define(
            "focus",
            (Oa.exports = function () {
                var e = [],
                    t = !1;
                function r(a) {
                    t &&
                        (a.preventDefault(),
                            a.stopPropagation(),
                            a.stopImmediatePropagation(),
                            e.unshift(a));
                }
                function n(a) {
                    var s = a.target,
                        u = s.tagName;
                    return (
                        (/^a$/i.test(u) && s.href != null) ||
                        (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
                        (/^input$/i.test(u) &&
                            /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
                            !s.disabled) ||
                        (!/^(button|input|textarea|select|a)$/i.test(u) &&
                            !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
                        /^audio$/i.test(u) ||
                        (/^video$/i.test(u) && s.controls === !0)
                    );
                }
                function i(a) {
                    n(a) &&
                        ((t = !0),
                            setTimeout(() => {
                                for (t = !1, a.target.focus(); e.length > 0;) {
                                    var s = e.pop();
                                    s.target.dispatchEvent(new MouseEvent(s.type, s));
                                }
                            }, 0));
                }
                function o() {
                    typeof document < "u" &&
                        document.body.hasAttribute("data-wf-focus-within") &&
                        Sa.env.safari &&
                        (document.addEventListener("mousedown", i, !0),
                            document.addEventListener("mouseup", r, !0),
                            document.addEventListener("click", r, !0));
                }
                return { ready: o };
            })
        );
    });
    var Ca = f((TF, Ra) => {
        "use strict";
        var Yn = window.jQuery,
            He = {},
            Lr = [],
            wa = ".w-ix",
            Pr = {
                reset: function (e, t) {
                    t.__wf_intro = null;
                },
                intro: function (e, t) {
                    t.__wf_intro ||
                        ((t.__wf_intro = !0), Yn(t).triggerHandler(He.types.INTRO));
                },
                outro: function (e, t) {
                    t.__wf_intro &&
                        ((t.__wf_intro = null), Yn(t).triggerHandler(He.types.OUTRO));
                },
            };
        He.triggers = {};
        He.types = { INTRO: "w-ix-intro" + wa, OUTRO: "w-ix-outro" + wa };
        He.init = function () {
            for (var e = Lr.length, t = 0; t < e; t++) {
                var r = Lr[t];
                r[0](0, r[1]);
            }
            (Lr = []), Yn.extend(He.triggers, Pr);
        };
        He.async = function () {
            for (var e in Pr) {
                var t = Pr[e];
                Pr.hasOwnProperty(e) &&
                    (He.triggers[e] = function (r, n) {
                        Lr.push([t, n]);
                    });
            }
        };
        He.async();
        Ra.exports = He;
    });
    var Qn = f((bF, Na) => {
        "use strict";
        var $n = Ca();
        function La(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
        }
        var $E = window.jQuery,
            Nr = {},
            Pa = ".w-ix",
            QE = {
                reset: function (e, t) {
                    $n.triggers.reset(e, t);
                },
                intro: function (e, t) {
                    $n.triggers.intro(e, t), La(t, "COMPONENT_ACTIVE");
                },
                outro: function (e, t) {
                    $n.triggers.outro(e, t), La(t, "COMPONENT_INACTIVE");
                },
            };
        Nr.triggers = {};
        Nr.types = { INTRO: "w-ix-intro" + Pa, OUTRO: "w-ix-outro" + Pa };
        $E.extend(Nr.triggers, QE);
        Na.exports = Nr;
    });
    var Zn = f((AF, Da) => {
        var ZE =
            typeof global == "object" && global && global.Object === Object && global;
        Da.exports = ZE;
    });
    var Fe = f((SF, Ma) => {
        var JE = Zn(),
            ey = typeof self == "object" && self && self.Object === Object && self,
            ty = JE || ey || Function("return this")();
        Ma.exports = ty;
    });
    var At = f((OF, Fa) => {
        var ry = Fe(),
            ny = ry.Symbol;
        Fa.exports = ny;
    });
    var Va = f((xF, Ga) => {
        var qa = At(),
            Xa = Object.prototype,
            iy = Xa.hasOwnProperty,
            oy = Xa.toString,
            Zt = qa ? qa.toStringTag : void 0;
        function ay(e) {
            var t = iy.call(e, Zt),
                r = e[Zt];
            try {
                e[Zt] = void 0;
                var n = !0;
            } catch { }
            var i = oy.call(e);
            return n && (t ? (e[Zt] = r) : delete e[Zt]), i;
        }
        Ga.exports = ay;
    });
    var Ua = f((wF, ka) => {
        var sy = Object.prototype,
            uy = sy.toString;
        function cy(e) {
            return uy.call(e);
        }
        ka.exports = cy;
    });
    var st = f((RF, Ha) => {
        var Ba = At(),
            ly = Va(),
            fy = Ua(),
            dy = "[object Null]",
            py = "[object Undefined]",
            Wa = Ba ? Ba.toStringTag : void 0;
        function hy(e) {
            return e == null
                ? e === void 0
                    ? py
                    : dy
                : Wa && Wa in Object(e)
                    ? ly(e)
                    : fy(e);
        }
        Ha.exports = hy;
    });
    var Jn = f((CF, za) => {
        function gy(e, t) {
            return function (r) {
                return e(t(r));
            };
        }
        za.exports = gy;
    });
    var ei = f((LF, Ka) => {
        var Ey = Jn(),
            yy = Ey(Object.getPrototypeOf, Object);
        Ka.exports = yy;
    });
    var et = f((PF, ja) => {
        function my(e) {
            return e != null && typeof e == "object";
        }
        ja.exports = my;
    });
    var ti = f((NF, $a) => {
        var vy = st(),
            _y = ei(),
            Iy = et(),
            Ty = "[object Object]",
            by = Function.prototype,
            Ay = Object.prototype,
            Ya = by.toString,
            Sy = Ay.hasOwnProperty,
            Oy = Ya.call(Object);
        function xy(e) {
            if (!Iy(e) || vy(e) != Ty) return !1;
            var t = _y(e);
            if (t === null) return !0;
            var r = Sy.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && Ya.call(r) == Oy;
        }
        $a.exports = xy;
    });
    var Qa = f((ri) => {
        "use strict";
        Object.defineProperty(ri, "__esModule", { value: !0 });
        ri.default = wy;
        function wy(e) {
            var t,
                r = e.Symbol;
            return (
                typeof r == "function"
                    ? r.observable
                        ? (t = r.observable)
                        : ((t = r("observable")), (r.observable = t))
                    : (t = "@@observable"),
                t
            );
        }
    });
    var Za = f((ii, ni) => {
        "use strict";
        Object.defineProperty(ii, "__esModule", { value: !0 });
        var Ry = Qa(),
            Cy = Ly(Ry);
        function Ly(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var St;
        typeof self < "u"
            ? (St = self)
            : typeof window < "u"
                ? (St = window)
                : typeof global < "u"
                    ? (St = global)
                    : typeof ni < "u"
                        ? (St = ni)
                        : (St = Function("return this")());
        var Py = (0, Cy.default)(St);
        ii.default = Py;
    });
    var oi = f((Jt) => {
        "use strict";
        Jt.__esModule = !0;
        Jt.ActionTypes = void 0;
        Jt.default = rs;
        var Ny = ti(),
            Dy = ts(Ny),
            My = Za(),
            Ja = ts(My);
        function ts(e) {
            return e && e.__esModule ? e : { default: e };
        }
        var es = (Jt.ActionTypes = { INIT: "@@redux/INIT" });
        function rs(e, t, r) {
            var n;
            if (
                (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
                    typeof r < "u")
            ) {
                if (typeof r != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return r(rs)(e, t);
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                a = [],
                s = a,
                u = !1;
            function l() {
                s === a && (s = a.slice());
            }
            function g() {
                return o;
            }
            function p(_) {
                if (typeof _ != "function")
                    throw new Error("Expected listener to be a function.");
                var O = !0;
                return (
                    l(),
                    s.push(_),
                    function () {
                        if (O) {
                            (O = !1), l();
                            var x = s.indexOf(_);
                            s.splice(x, 1);
                        }
                    }
                );
            }
            function d(_) {
                if (!(0, Dy.default)(_))
                    throw new Error(
                        "Actions must be plain objects. Use custom middleware for async actions."
                    );
                if (typeof _.type > "u")
                    throw new Error(
                        'Actions may not have an undefined "type" property. Have you misspelled a constant?'
                    );
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    (u = !0), (o = i(o, _));
                } finally {
                    u = !1;
                }
                for (var O = (a = s), m = 0; m < O.length; m++) O[m]();
                return _;
            }
            function y(_) {
                if (typeof _ != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                (i = _), d({ type: es.INIT });
            }
            function I() {
                var _,
                    O = p;
                return (
                    (_ = {
                        subscribe: function (x) {
                            if (typeof x != "object")
                                throw new TypeError("Expected the observer to be an object.");
                            function A() {
                                x.next && x.next(g());
                            }
                            A();
                            var L = O(A);
                            return { unsubscribe: L };
                        },
                    }),
                    (_[Ja.default] = function () {
                        return this;
                    }),
                    _
                );
            }
            return (
                d({ type: es.INIT }),
                (n = { dispatch: d, subscribe: p, getState: g, replaceReducer: y }),
                (n[Ja.default] = I),
                n
            );
        }
    });
    var si = f((ai) => {
        "use strict";
        ai.__esModule = !0;
        ai.default = Fy;
        function Fy(e) {
            typeof console < "u" &&
                typeof console.error == "function" &&
                console.error(e);
            try {
                throw new Error(e);
            } catch { }
        }
    });
    var os = f((ui) => {
        "use strict";
        ui.__esModule = !0;
        ui.default = ky;
        var ns = oi(),
            qy = ti(),
            qF = is(qy),
            Xy = si(),
            XF = is(Xy);
        function is(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function Gy(e, t) {
            var r = t && t.type,
                n = (r && '"' + r.toString() + '"') || "an action";
            return (
                "Given action " +
                n +
                ', reducer "' +
                e +
                '" returned undefined. To ignore an action, you must explicitly return the previous state.'
            );
        }
        function Vy(e) {
            Object.keys(e).forEach(function (t) {
                var r = e[t],
                    n = r(void 0, { type: ns.ActionTypes.INIT });
                if (typeof n > "u")
                    throw new Error(
                        'Reducer "' +
                        t +
                        '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
                    );
                var i =
                    "@@redux/PROBE_UNKNOWN_ACTION_" +
                    Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, { type: i }) > "u")
                    throw new Error(
                        'Reducer "' +
                        t +
                        '" returned undefined when probed with a random type. ' +
                        ("Don't try to handle " +
                            ns.ActionTypes.INIT +
                            ' or other actions in "redux/*" ') +
                        "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
                    );
            });
        }
        function ky(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i]);
            }
            var o = Object.keys(r);
            if (!1) var a;
            var s;
            try {
                Vy(r);
            } catch (u) {
                s = u;
            }
            return function () {
                var l =
                    arguments.length <= 0 || arguments[0] === void 0
                        ? {}
                        : arguments[0],
                    g = arguments[1];
                if (s) throw s;
                if (!1) var p;
                for (var d = !1, y = {}, I = 0; I < o.length; I++) {
                    var _ = o[I],
                        O = r[_],
                        m = l[_],
                        x = O(m, g);
                    if (typeof x > "u") {
                        var A = Gy(_, g);
                        throw new Error(A);
                    }
                    (y[_] = x), (d = d || x !== m);
                }
                return d ? y : l;
            };
        }
    });
    var ss = f((ci) => {
        "use strict";
        ci.__esModule = !0;
        ci.default = Uy;
        function as(e, t) {
            return function () {
                return t(e.apply(void 0, arguments));
            };
        }
        function Uy(e, t) {
            if (typeof e == "function") return as(e, t);
            if (typeof e != "object" || e === null)
                throw new Error(
                    "bindActionCreators expected an object or a function, instead received " +
                    (e === null ? "null" : typeof e) +
                    '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
                );
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i],
                    a = e[o];
                typeof a == "function" && (n[o] = as(a, t));
            }
            return n;
        }
    });
    var fi = f((li) => {
        "use strict";
        li.__esModule = !0;
        li.default = By;
        function By() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            if (t.length === 0)
                return function (o) {
                    return o;
                };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                i = t.slice(0, -1);
            return function () {
                return i.reduceRight(function (o, a) {
                    return a(o);
                }, n.apply(void 0, arguments));
            };
        }
    });
    var us = f((di) => {
        "use strict";
        di.__esModule = !0;
        var Wy =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
            };
        di.default = jy;
        var Hy = fi(),
            zy = Ky(Hy);
        function Ky(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function jy() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function (n) {
                return function (i, o, a) {
                    var s = n(i, o, a),
                        u = s.dispatch,
                        l = [],
                        g = {
                            getState: s.getState,
                            dispatch: function (d) {
                                return u(d);
                            },
                        };
                    return (
                        (l = t.map(function (p) {
                            return p(g);
                        })),
                        (u = zy.default.apply(void 0, l)(s.dispatch)),
                        Wy({}, s, { dispatch: u })
                    );
                };
            };
        }
    });
    var pi = f((Le) => {
        "use strict";
        Le.__esModule = !0;
        Le.compose =
            Le.applyMiddleware =
            Le.bindActionCreators =
            Le.combineReducers =
            Le.createStore =
            void 0;
        var Yy = oi(),
            $y = Ot(Yy),
            Qy = os(),
            Zy = Ot(Qy),
            Jy = ss(),
            em = Ot(Jy),
            tm = us(),
            rm = Ot(tm),
            nm = fi(),
            im = Ot(nm),
            om = si(),
            BF = Ot(om);
        function Ot(e) {
            return e && e.__esModule ? e : { default: e };
        }
        Le.createStore = $y.default;
        Le.combineReducers = Zy.default;
        Le.bindActionCreators = em.default;
        Le.applyMiddleware = rm.default;
        Le.compose = im.default;
    });
    var qe,
        hi,
        ze,
        am,
        sm,
        Dr,
        um,
        gi = se(() => {
            "use strict";
            (qe = {
                NAVBAR_OPEN: "NAVBAR_OPEN",
                NAVBAR_CLOSE: "NAVBAR_CLOSE",
                TAB_ACTIVE: "TAB_ACTIVE",
                TAB_INACTIVE: "TAB_INACTIVE",
                SLIDER_ACTIVE: "SLIDER_ACTIVE",
                SLIDER_INACTIVE: "SLIDER_INACTIVE",
                DROPDOWN_OPEN: "DROPDOWN_OPEN",
                DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
                MOUSE_CLICK: "MOUSE_CLICK",
                MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
                MOUSE_DOWN: "MOUSE_DOWN",
                MOUSE_UP: "MOUSE_UP",
                MOUSE_OVER: "MOUSE_OVER",
                MOUSE_OUT: "MOUSE_OUT",
                MOUSE_MOVE: "MOUSE_MOVE",
                MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
                SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
                SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
                SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
                ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
                ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
                PAGE_START: "PAGE_START",
                PAGE_FINISH: "PAGE_FINISH",
                PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
                PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
                PAGE_SCROLL: "PAGE_SCROLL",
            }),
                (hi = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
                (ze = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
                (am = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
                (sm = {
                    CHILDREN: "CHILDREN",
                    SIBLINGS: "SIBLINGS",
                    IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
                }),
                (Dr = {
                    FADE_EFFECT: "FADE_EFFECT",
                    SLIDE_EFFECT: "SLIDE_EFFECT",
                    GROW_EFFECT: "GROW_EFFECT",
                    SHRINK_EFFECT: "SHRINK_EFFECT",
                    SPIN_EFFECT: "SPIN_EFFECT",
                    FLY_EFFECT: "FLY_EFFECT",
                    POP_EFFECT: "POP_EFFECT",
                    FLIP_EFFECT: "FLIP_EFFECT",
                    JIGGLE_EFFECT: "JIGGLE_EFFECT",
                    PULSE_EFFECT: "PULSE_EFFECT",
                    DROP_EFFECT: "DROP_EFFECT",
                    BLINK_EFFECT: "BLINK_EFFECT",
                    BOUNCE_EFFECT: "BOUNCE_EFFECT",
                    FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
                    FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
                    RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
                    JELLO_EFFECT: "JELLO_EFFECT",
                    GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
                    SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
                    PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
                }),
                (um = {
                    LEFT: "LEFT",
                    RIGHT: "RIGHT",
                    BOTTOM: "BOTTOM",
                    TOP: "TOP",
                    BOTTOM_LEFT: "BOTTOM_LEFT",
                    BOTTOM_RIGHT: "BOTTOM_RIGHT",
                    TOP_RIGHT: "TOP_RIGHT",
                    TOP_LEFT: "TOP_LEFT",
                    CLOCKWISE: "CLOCKWISE",
                    COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
                });
        });
    var Se,
        cm,
        Mr = se(() => {
            "use strict";
            (Se = {
                TRANSFORM_MOVE: "TRANSFORM_MOVE",
                TRANSFORM_SCALE: "TRANSFORM_SCALE",
                TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
                TRANSFORM_SKEW: "TRANSFORM_SKEW",
                STYLE_OPACITY: "STYLE_OPACITY",
                STYLE_SIZE: "STYLE_SIZE",
                STYLE_FILTER: "STYLE_FILTER",
                STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
                STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
                STYLE_BORDER: "STYLE_BORDER",
                STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
                OBJECT_VALUE: "OBJECT_VALUE",
                PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
                PLUGIN_SPLINE: "PLUGIN_SPLINE",
                PLUGIN_RIVE: "PLUGIN_RIVE",
                PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
                GENERAL_DISPLAY: "GENERAL_DISPLAY",
                GENERAL_START_ACTION: "GENERAL_START_ACTION",
                GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
                GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
                GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
                GENERAL_LOOP: "GENERAL_LOOP",
                STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
            }),
                (cm = {
                    ELEMENT: "ELEMENT",
                    ELEMENT_CLASS: "ELEMENT_CLASS",
                    TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
                });
        });
    var lm,
        cs = se(() => {
            "use strict";
            lm = {
                MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
                MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
                MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
                SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
                SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
                MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
                    "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
                PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
                PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
                PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
                NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
                DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
                ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
                TAB_INTERACTION: "TAB_INTERACTION",
                SLIDER_INTERACTION: "SLIDER_INTERACTION",
            };
        });
    var fm,
        dm,
        pm,
        hm,
        gm,
        Em,
        ym,
        Ei,
        ls = se(() => {
            "use strict";
            Mr();
            ({
                TRANSFORM_MOVE: fm,
                TRANSFORM_SCALE: dm,
                TRANSFORM_ROTATE: pm,
                TRANSFORM_SKEW: hm,
                STYLE_SIZE: gm,
                STYLE_FILTER: Em,
                STYLE_FONT_VARIATION: ym,
            } = Se),
                (Ei = {
                    [fm]: !0,
                    [dm]: !0,
                    [pm]: !0,
                    [hm]: !0,
                    [gm]: !0,
                    [Em]: !0,
                    [ym]: !0,
                });
        });
    var he = {};
    Ae(he, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Dm,
        IX2_ANIMATION_FRAME_CHANGED: () => wm,
        IX2_CLEAR_REQUESTED: () => Sm,
        IX2_ELEMENT_STATE_CHANGED: () => Nm,
        IX2_EVENT_LISTENER_ADDED: () => Om,
        IX2_EVENT_STATE_CHANGED: () => xm,
        IX2_INSTANCE_ADDED: () => Cm,
        IX2_INSTANCE_REMOVED: () => Pm,
        IX2_INSTANCE_STARTED: () => Lm,
        IX2_MEDIA_QUERIES_DEFINED: () => Fm,
        IX2_PARAMETER_CHANGED: () => Rm,
        IX2_PLAYBACK_REQUESTED: () => bm,
        IX2_PREVIEW_REQUESTED: () => Tm,
        IX2_RAW_DATA_IMPORTED: () => mm,
        IX2_SESSION_INITIALIZED: () => vm,
        IX2_SESSION_STARTED: () => _m,
        IX2_SESSION_STOPPED: () => Im,
        IX2_STOP_REQUESTED: () => Am,
        IX2_TEST_FRAME_RENDERED: () => qm,
        IX2_VIEWPORT_WIDTH_CHANGED: () => Mm,
    });
    var mm,
        vm,
        _m,
        Im,
        Tm,
        bm,
        Am,
        Sm,
        Om,
        xm,
        wm,
        Rm,
        Cm,
        Lm,
        Pm,
        Nm,
        Dm,
        Mm,
        Fm,
        qm,
        fs = se(() => {
            "use strict";
            (mm = "IX2_RAW_DATA_IMPORTED"),
                (vm = "IX2_SESSION_INITIALIZED"),
                (_m = "IX2_SESSION_STARTED"),
                (Im = "IX2_SESSION_STOPPED"),
                (Tm = "IX2_PREVIEW_REQUESTED"),
                (bm = "IX2_PLAYBACK_REQUESTED"),
                (Am = "IX2_STOP_REQUESTED"),
                (Sm = "IX2_CLEAR_REQUESTED"),
                (Om = "IX2_EVENT_LISTENER_ADDED"),
                (xm = "IX2_EVENT_STATE_CHANGED"),
                (wm = "IX2_ANIMATION_FRAME_CHANGED"),
                (Rm = "IX2_PARAMETER_CHANGED"),
                (Cm = "IX2_INSTANCE_ADDED"),
                (Lm = "IX2_INSTANCE_STARTED"),
                (Pm = "IX2_INSTANCE_REMOVED"),
                (Nm = "IX2_ELEMENT_STATE_CHANGED"),
                (Dm = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
                (Mm = "IX2_VIEWPORT_WIDTH_CHANGED"),
                (Fm = "IX2_MEDIA_QUERIES_DEFINED"),
                (qm = "IX2_TEST_FRAME_RENDERED");
        });
    var ye = {};
    Ae(ye, {
        ABSTRACT_NODE: () => Mv,
        AUTO: () => Av,
        BACKGROUND: () => mv,
        BACKGROUND_COLOR: () => yv,
        BAR_DELIMITER: () => xv,
        BORDER_COLOR: () => vv,
        BOUNDARY_SELECTOR: () => Um,
        CHILDREN: () => wv,
        COLON_DELIMITER: () => Ov,
        COLOR: () => _v,
        COMMA_DELIMITER: () => Sv,
        CONFIG_UNIT: () => $m,
        CONFIG_VALUE: () => zm,
        CONFIG_X_UNIT: () => Km,
        CONFIG_X_VALUE: () => Bm,
        CONFIG_Y_UNIT: () => jm,
        CONFIG_Y_VALUE: () => Wm,
        CONFIG_Z_UNIT: () => Ym,
        CONFIG_Z_VALUE: () => Hm,
        DISPLAY: () => Iv,
        FILTER: () => pv,
        FLEX: () => Tv,
        FONT_VARIATION_SETTINGS: () => hv,
        HEIGHT: () => Ev,
        HTML_ELEMENT: () => Nv,
        IMMEDIATE_CHILDREN: () => Rv,
        IX2_ID_DELIMITER: () => Xm,
        OPACITY: () => dv,
        PARENT: () => Lv,
        PLAIN_OBJECT: () => Dv,
        PRESERVE_3D: () => Pv,
        RENDER_GENERAL: () => qv,
        RENDER_PLUGIN: () => Gv,
        RENDER_STYLE: () => Xv,
        RENDER_TRANSFORM: () => Fv,
        ROTATE_X: () => av,
        ROTATE_Y: () => sv,
        ROTATE_Z: () => uv,
        SCALE_3D: () => ov,
        SCALE_X: () => rv,
        SCALE_Y: () => nv,
        SCALE_Z: () => iv,
        SIBLINGS: () => Cv,
        SKEW: () => cv,
        SKEW_X: () => lv,
        SKEW_Y: () => fv,
        TRANSFORM: () => Qm,
        TRANSLATE_3D: () => tv,
        TRANSLATE_X: () => Zm,
        TRANSLATE_Y: () => Jm,
        TRANSLATE_Z: () => ev,
        WF_PAGE: () => Gm,
        WIDTH: () => gv,
        WILL_CHANGE: () => bv,
        W_MOD_IX: () => km,
        W_MOD_JS: () => Vm,
    });
    var Xm,
        Gm,
        Vm,
        km,
        Um,
        Bm,
        Wm,
        Hm,
        zm,
        Km,
        jm,
        Ym,
        $m,
        Qm,
        Zm,
        Jm,
        ev,
        tv,
        rv,
        nv,
        iv,
        ov,
        av,
        sv,
        uv,
        cv,
        lv,
        fv,
        dv,
        pv,
        hv,
        gv,
        Ev,
        yv,
        mv,
        vv,
        _v,
        Iv,
        Tv,
        bv,
        Av,
        Sv,
        Ov,
        xv,
        wv,
        Rv,
        Cv,
        Lv,
        Pv,
        Nv,
        Dv,
        Mv,
        Fv,
        qv,
        Xv,
        Gv,
        ds = se(() => {
            "use strict";
            (Xm = "|"),
                (Gm = "data-wf-page"),
                (Vm = "w-mod-js"),
                (km = "w-mod-ix"),
                (Um = ".w-dyn-item"),
                (Bm = "xValue"),
                (Wm = "yValue"),
                (Hm = "zValue"),
                (zm = "value"),
                (Km = "xUnit"),
                (jm = "yUnit"),
                (Ym = "zUnit"),
                ($m = "unit"),
                (Qm = "transform"),
                (Zm = "translateX"),
                (Jm = "translateY"),
                (ev = "translateZ"),
                (tv = "translate3d"),
                (rv = "scaleX"),
                (nv = "scaleY"),
                (iv = "scaleZ"),
                (ov = "scale3d"),
                (av = "rotateX"),
                (sv = "rotateY"),
                (uv = "rotateZ"),
                (cv = "skew"),
                (lv = "skewX"),
                (fv = "skewY"),
                (dv = "opacity"),
                (pv = "filter"),
                (hv = "font-variation-settings"),
                (gv = "width"),
                (Ev = "height"),
                (yv = "backgroundColor"),
                (mv = "background"),
                (vv = "borderColor"),
                (_v = "color"),
                (Iv = "display"),
                (Tv = "flex"),
                (bv = "willChange"),
                (Av = "AUTO"),
                (Sv = ","),
                (Ov = ":"),
                (xv = "|"),
                (wv = "CHILDREN"),
                (Rv = "IMMEDIATE_CHILDREN"),
                (Cv = "SIBLINGS"),
                (Lv = "PARENT"),
                (Pv = "preserve-3d"),
                (Nv = "HTML_ELEMENT"),
                (Dv = "PLAIN_OBJECT"),
                (Mv = "ABSTRACT_NODE"),
                (Fv = "RENDER_TRANSFORM"),
                (qv = "RENDER_GENERAL"),
                (Xv = "RENDER_STYLE"),
                (Gv = "RENDER_PLUGIN");
        });
    var ps = {};
    Ae(ps, {
        ActionAppliesTo: () => cm,
        ActionTypeConsts: () => Se,
        EventAppliesTo: () => hi,
        EventBasedOn: () => ze,
        EventContinuousMouseAxes: () => am,
        EventLimitAffectedElements: () => sm,
        EventTypeConsts: () => qe,
        IX2EngineActionTypes: () => he,
        IX2EngineConstants: () => ye,
        InteractionTypeConsts: () => lm,
        QuickEffectDirectionConsts: () => um,
        QuickEffectIds: () => Dr,
        ReducedMotionTypes: () => Ei,
    });
    var Oe = se(() => {
        "use strict";
        gi();
        Mr();
        cs();
        ls();
        fs();
        ds();
        Mr();
        gi();
    });
    var Vv,
        hs,
        gs = se(() => {
            "use strict";
            Oe();
            ({ IX2_RAW_DATA_IMPORTED: Vv } = he),
                (hs = (e = Object.freeze({}), t) => {
                    switch (t.type) {
                        case Vv:
                            return t.payload.ixData || Object.freeze({});
                        default:
                            return e;
                    }
                });
        });
    var xt = f((le) => {
        "use strict";
        Object.defineProperty(le, "__esModule", { value: !0 });
        var kv =
            typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (e) {
                    return typeof e;
                }
                : function (e) {
                    return e &&
                        typeof Symbol == "function" &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                };
        le.clone = qr;
        le.addLast = ms;
        le.addFirst = vs;
        le.removeLast = _s;
        le.removeFirst = Is;
        le.insert = Ts;
        le.removeAt = bs;
        le.replaceAt = As;
        le.getIn = Xr;
        le.set = Gr;
        le.setIn = Vr;
        le.update = Os;
        le.updateIn = xs;
        le.merge = ws;
        le.mergeDeep = Rs;
        le.mergeIn = Cs;
        le.omit = Ls;
        le.addDefaults = Ps;
        var Es = "INVALID_ARGS";
        function ys(e) {
            throw new Error(e);
        }
        function yi(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols
                ? t.concat(Object.getOwnPropertySymbols(e))
                : t;
        }
        var Uv = {}.hasOwnProperty;
        function qr(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = yi(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i];
            }
            return r;
        }
        function xe(e, t, r) {
            var n = r;
            n == null && ys(Es);
            for (
                var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
                s < o;
                s++
            )
                a[s - 3] = arguments[s];
            for (var u = 0; u < a.length; u++) {
                var l = a[u];
                if (l != null) {
                    var g = yi(l);
                    if (g.length)
                        for (var p = 0; p <= g.length; p++) {
                            var d = g[p];
                            if (!(e && n[d] !== void 0)) {
                                var y = l[d];
                                t && Fr(n[d]) && Fr(y) && (y = xe(e, t, n[d], y)),
                                    !(y === void 0 || y === n[d]) &&
                                    (i || ((i = !0), (n = qr(n))), (n[d] = y));
                            }
                        }
                }
            }
            return n;
        }
        function Fr(e) {
            var t = typeof e > "u" ? "undefined" : kv(e);
            return e != null && (t === "object" || t === "function");
        }
        function ms(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t]);
        }
        function vs(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e);
        }
        function _s(e) {
            return e.length ? e.slice(0, e.length - 1) : e;
        }
        function Is(e) {
            return e.length ? e.slice(1) : e;
        }
        function Ts(e, t, r) {
            return e
                .slice(0, t)
                .concat(Array.isArray(r) ? r : [r])
                .concat(e.slice(t));
        }
        function bs(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
        }
        function As(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return (i[t] = r), i;
        }
        function Xr(e, t) {
            if ((!Array.isArray(t) && ys(Es), e != null)) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (((r = r?.[i]), r === void 0)) return r;
                }
                return r;
            }
        }
        function Gr(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                i = e ?? n;
            if (i[t] === r) return i;
            var o = qr(i);
            return (o[t] = r), o;
        }
        function Ss(e, t, r, n) {
            var i = void 0,
                o = t[n];
            if (n === t.length - 1) i = r;
            else {
                var a =
                    Fr(e) && Fr(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Ss(a, t, r, n + 1);
            }
            return Gr(e, o, i);
        }
        function Vr(e, t, r) {
            return t.length ? Ss(e, t, r, 0) : r;
        }
        function Os(e, t, r) {
            var n = e?.[t],
                i = r(n);
            return Gr(e, t, i);
        }
        function xs(e, t, r) {
            var n = Xr(e, t),
                i = r(n);
            return Vr(e, t, i);
        }
        function ws(e, t, r, n, i, o) {
            for (
                var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
                u < a;
                u++
            )
                s[u - 6] = arguments[u];
            return s.length
                ? xe.call.apply(xe, [null, !1, !1, e, t, r, n, i, o].concat(s))
                : xe(!1, !1, e, t, r, n, i, o);
        }
        function Rs(e, t, r, n, i, o) {
            for (
                var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
                u < a;
                u++
            )
                s[u - 6] = arguments[u];
            return s.length
                ? xe.call.apply(xe, [null, !1, !0, e, t, r, n, i, o].concat(s))
                : xe(!1, !0, e, t, r, n, i, o);
        }
        function Cs(e, t, r, n, i, o, a) {
            var s = Xr(e, t);
            s == null && (s = {});
            for (
                var u = void 0,
                l = arguments.length,
                g = Array(l > 7 ? l - 7 : 0),
                p = 7;
                p < l;
                p++
            )
                g[p - 7] = arguments[p];
            return (
                g.length
                    ? (u = xe.call.apply(xe, [null, !1, !1, s, r, n, i, o, a].concat(g)))
                    : (u = xe(!1, !1, s, r, n, i, o, a)),
                Vr(e, t, u)
            );
        }
        function Ls(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (Uv.call(e, r[i])) {
                    n = !0;
                    break;
                }
            if (!n) return e;
            for (var o = {}, a = yi(e), s = 0; s < a.length; s++) {
                var u = a[s];
                r.indexOf(u) >= 0 || (o[u] = e[u]);
            }
            return o;
        }
        function Ps(e, t, r, n, i, o) {
            for (
                var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
                u < a;
                u++
            )
                s[u - 6] = arguments[u];
            return s.length
                ? xe.call.apply(xe, [null, !0, !1, e, t, r, n, i, o].concat(s))
                : xe(!0, !1, e, t, r, n, i, o);
        }
        var Bv = {
            clone: qr,
            addLast: ms,
            addFirst: vs,
            removeLast: _s,
            removeFirst: Is,
            insert: Ts,
            removeAt: bs,
            replaceAt: As,
            getIn: Xr,
            set: Gr,
            setIn: Vr,
            update: Os,
            updateIn: xs,
            merge: ws,
            mergeDeep: Rs,
            mergeIn: Cs,
            omit: Ls,
            addDefaults: Ps,
        };
        le.default = Bv;
    });
    var Ds,
        Wv,
        Hv,
        zv,
        Kv,
        jv,
        Ns,
        Ms,
        Fs = se(() => {
            "use strict";
            Oe();
            (Ds = ee(xt())),
                ({
                    IX2_PREVIEW_REQUESTED: Wv,
                    IX2_PLAYBACK_REQUESTED: Hv,
                    IX2_STOP_REQUESTED: zv,
                    IX2_CLEAR_REQUESTED: Kv,
                } = he),
                (jv = { preview: {}, playback: {}, stop: {}, clear: {} }),
                (Ns = Object.create(null, {
                    [Wv]: { value: "preview" },
                    [Hv]: { value: "playback" },
                    [zv]: { value: "stop" },
                    [Kv]: { value: "clear" },
                })),
                (Ms = (e = jv, t) => {
                    if (t.type in Ns) {
                        let r = [Ns[t.type]];
                        return (0, Ds.setIn)(e, [r], { ...t.payload });
                    }
                    return e;
                });
        });
    var Ie,
        Yv,
        $v,
        Qv,
        Zv,
        Jv,
        e_,
        t_,
        r_,
        n_,
        i_,
        qs,
        o_,
        Xs,
        Gs = se(() => {
            "use strict";
            Oe();
            (Ie = ee(xt())),
                ({
                    IX2_SESSION_INITIALIZED: Yv,
                    IX2_SESSION_STARTED: $v,
                    IX2_TEST_FRAME_RENDERED: Qv,
                    IX2_SESSION_STOPPED: Zv,
                    IX2_EVENT_LISTENER_ADDED: Jv,
                    IX2_EVENT_STATE_CHANGED: e_,
                    IX2_ANIMATION_FRAME_CHANGED: t_,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: r_,
                    IX2_VIEWPORT_WIDTH_CHANGED: n_,
                    IX2_MEDIA_QUERIES_DEFINED: i_,
                } = he),
                (qs = {
                    active: !1,
                    tick: 0,
                    eventListeners: [],
                    eventState: {},
                    playbackState: {},
                    viewportWidth: 0,
                    mediaQueryKey: null,
                    hasBoundaryNodes: !1,
                    hasDefinedMediaQueries: !1,
                    reducedMotion: !1,
                }),
                (o_ = 20),
                (Xs = (e = qs, t) => {
                    switch (t.type) {
                        case Yv: {
                            let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
                            return (0, Ie.merge)(e, {
                                hasBoundaryNodes: r,
                                reducedMotion: n,
                            });
                        }
                        case $v:
                            return (0, Ie.set)(e, "active", !0);
                        case Qv: {
                            let {
                                payload: { step: r = o_ },
                            } = t;
                            return (0, Ie.set)(e, "tick", e.tick + r);
                        }
                        case Zv:
                            return qs;
                        case t_: {
                            let {
                                payload: { now: r },
                            } = t;
                            return (0, Ie.set)(e, "tick", r);
                        }
                        case Jv: {
                            let r = (0, Ie.addLast)(e.eventListeners, t.payload);
                            return (0, Ie.set)(e, "eventListeners", r);
                        }
                        case e_: {
                            let { stateKey: r, newState: n } = t.payload;
                            return (0, Ie.setIn)(e, ["eventState", r], n);
                        }
                        case r_: {
                            let { actionListId: r, isPlaying: n } = t.payload;
                            return (0, Ie.setIn)(e, ["playbackState", r], n);
                        }
                        case n_: {
                            let { width: r, mediaQueries: n } = t.payload,
                                i = n.length,
                                o = null;
                            for (let a = 0; a < i; a++) {
                                let { key: s, min: u, max: l } = n[a];
                                if (r >= u && r <= l) {
                                    o = s;
                                    break;
                                }
                            }
                            return (0, Ie.merge)(e, { viewportWidth: r, mediaQueryKey: o });
                        }
                        case i_:
                            return (0, Ie.set)(e, "hasDefinedMediaQueries", !0);
                        default:
                            return e;
                    }
                });
        });
    var ks = f((c2, Vs) => {
        function a_() {
            (this.__data__ = []), (this.size = 0);
        }
        Vs.exports = a_;
    });
    var kr = f((l2, Us) => {
        function s_(e, t) {
            return e === t || (e !== e && t !== t);
        }
        Us.exports = s_;
    });
    var er = f((f2, Bs) => {
        var u_ = kr();
        function c_(e, t) {
            for (var r = e.length; r--;) if (u_(e[r][0], t)) return r;
            return -1;
        }
        Bs.exports = c_;
    });
    var Hs = f((d2, Ws) => {
        var l_ = er(),
            f_ = Array.prototype,
            d_ = f_.splice;
        function p_(e) {
            var t = this.__data__,
                r = l_(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : d_.call(t, r, 1), --this.size, !0;
        }
        Ws.exports = p_;
    });
    var Ks = f((p2, zs) => {
        var h_ = er();
        function g_(e) {
            var t = this.__data__,
                r = h_(t, e);
            return r < 0 ? void 0 : t[r][1];
        }
        zs.exports = g_;
    });
    var Ys = f((h2, js) => {
        var E_ = er();
        function y_(e) {
            return E_(this.__data__, e) > -1;
        }
        js.exports = y_;
    });
    var Qs = f((g2, $s) => {
        var m_ = er();
        function v_(e, t) {
            var r = this.__data__,
                n = m_(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
        }
        $s.exports = v_;
    });
    var tr = f((E2, Zs) => {
        var __ = ks(),
            I_ = Hs(),
            T_ = Ks(),
            b_ = Ys(),
            A_ = Qs();
        function wt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1]);
            }
        }
        wt.prototype.clear = __;
        wt.prototype.delete = I_;
        wt.prototype.get = T_;
        wt.prototype.has = b_;
        wt.prototype.set = A_;
        Zs.exports = wt;
    });
    var eu = f((y2, Js) => {
        var S_ = tr();
        function O_() {
            (this.__data__ = new S_()), (this.size = 0);
        }
        Js.exports = O_;
    });
    var ru = f((m2, tu) => {
        function x_(e) {
            var t = this.__data__,
                r = t.delete(e);
            return (this.size = t.size), r;
        }
        tu.exports = x_;
    });
    var iu = f((v2, nu) => {
        function w_(e) {
            return this.__data__.get(e);
        }
        nu.exports = w_;
    });
    var au = f((_2, ou) => {
        function R_(e) {
            return this.__data__.has(e);
        }
        ou.exports = R_;
    });
    var Ke = f((I2, su) => {
        function C_(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function");
        }
        su.exports = C_;
    });
    var mi = f((T2, uu) => {
        var L_ = st(),
            P_ = Ke(),
            N_ = "[object AsyncFunction]",
            D_ = "[object Function]",
            M_ = "[object GeneratorFunction]",
            F_ = "[object Proxy]";
        function q_(e) {
            if (!P_(e)) return !1;
            var t = L_(e);
            return t == D_ || t == M_ || t == N_ || t == F_;
        }
        uu.exports = q_;
    });
    var lu = f((b2, cu) => {
        var X_ = Fe(),
            G_ = X_["__core-js_shared__"];
        cu.exports = G_;
    });
    var pu = f((A2, du) => {
        var vi = lu(),
            fu = (function () {
                var e = /[^.]+$/.exec((vi && vi.keys && vi.keys.IE_PROTO) || "");
                return e ? "Symbol(src)_1." + e : "";
            })();
        function V_(e) {
            return !!fu && fu in e;
        }
        du.exports = V_;
    });
    var _i = f((S2, hu) => {
        var k_ = Function.prototype,
            U_ = k_.toString;
        function B_(e) {
            if (e != null) {
                try {
                    return U_.call(e);
                } catch { }
                try {
                    return e + "";
                } catch { }
            }
            return "";
        }
        hu.exports = B_;
    });
    var Eu = f((O2, gu) => {
        var W_ = mi(),
            H_ = pu(),
            z_ = Ke(),
            K_ = _i(),
            j_ = /[\\^$.*+?()[\]{}|]/g,
            Y_ = /^\[object .+?Constructor\]$/,
            $_ = Function.prototype,
            Q_ = Object.prototype,
            Z_ = $_.toString,
            J_ = Q_.hasOwnProperty,
            eI = RegExp(
                "^" +
                Z_.call(J_)
                    .replace(j_, "\\$&")
                    .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                    ) +
                "$"
            );
        function tI(e) {
            if (!z_(e) || H_(e)) return !1;
            var t = W_(e) ? eI : Y_;
            return t.test(K_(e));
        }
        gu.exports = tI;
    });
    var mu = f((x2, yu) => {
        function rI(e, t) {
            return e?.[t];
        }
        yu.exports = rI;
    });
    var ut = f((w2, vu) => {
        var nI = Eu(),
            iI = mu();
        function oI(e, t) {
            var r = iI(e, t);
            return nI(r) ? r : void 0;
        }
        vu.exports = oI;
    });
    var Ur = f((R2, _u) => {
        var aI = ut(),
            sI = Fe(),
            uI = aI(sI, "Map");
        _u.exports = uI;
    });
    var rr = f((C2, Iu) => {
        var cI = ut(),
            lI = cI(Object, "create");
        Iu.exports = lI;
    });
    var Au = f((L2, bu) => {
        var Tu = rr();
        function fI() {
            (this.__data__ = Tu ? Tu(null) : {}), (this.size = 0);
        }
        bu.exports = fI;
    });
    var Ou = f((P2, Su) => {
        function dI(e) {
            var t = this.has(e) && delete this.__data__[e];
            return (this.size -= t ? 1 : 0), t;
        }
        Su.exports = dI;
    });
    var wu = f((N2, xu) => {
        var pI = rr(),
            hI = "__lodash_hash_undefined__",
            gI = Object.prototype,
            EI = gI.hasOwnProperty;
        function yI(e) {
            var t = this.__data__;
            if (pI) {
                var r = t[e];
                return r === hI ? void 0 : r;
            }
            return EI.call(t, e) ? t[e] : void 0;
        }
        xu.exports = yI;
    });
    var Cu = f((D2, Ru) => {
        var mI = rr(),
            vI = Object.prototype,
            _I = vI.hasOwnProperty;
        function II(e) {
            var t = this.__data__;
            return mI ? t[e] !== void 0 : _I.call(t, e);
        }
        Ru.exports = II;
    });
    var Pu = f((M2, Lu) => {
        var TI = rr(),
            bI = "__lodash_hash_undefined__";
        function AI(e, t) {
            var r = this.__data__;
            return (
                (this.size += this.has(e) ? 0 : 1),
                (r[e] = TI && t === void 0 ? bI : t),
                this
            );
        }
        Lu.exports = AI;
    });
    var Du = f((F2, Nu) => {
        var SI = Au(),
            OI = Ou(),
            xI = wu(),
            wI = Cu(),
            RI = Pu();
        function Rt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1]);
            }
        }
        Rt.prototype.clear = SI;
        Rt.prototype.delete = OI;
        Rt.prototype.get = xI;
        Rt.prototype.has = wI;
        Rt.prototype.set = RI;
        Nu.exports = Rt;
    });
    var qu = f((q2, Fu) => {
        var Mu = Du(),
            CI = tr(),
            LI = Ur();
        function PI() {
            (this.size = 0),
                (this.__data__ = {
                    hash: new Mu(),
                    map: new (LI || CI)(),
                    string: new Mu(),
                });
        }
        Fu.exports = PI;
    });
    var Gu = f((X2, Xu) => {
        function NI(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean"
                ? e !== "__proto__"
                : e === null;
        }
        Xu.exports = NI;
    });
    var nr = f((G2, Vu) => {
        var DI = Gu();
        function MI(e, t) {
            var r = e.__data__;
            return DI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
        }
        Vu.exports = MI;
    });
    var Uu = f((V2, ku) => {
        var FI = nr();
        function qI(e) {
            var t = FI(this, e).delete(e);
            return (this.size -= t ? 1 : 0), t;
        }
        ku.exports = qI;
    });
    var Wu = f((k2, Bu) => {
        var XI = nr();
        function GI(e) {
            return XI(this, e).get(e);
        }
        Bu.exports = GI;
    });
    var zu = f((U2, Hu) => {
        var VI = nr();
        function kI(e) {
            return VI(this, e).has(e);
        }
        Hu.exports = kI;
    });
    var ju = f((B2, Ku) => {
        var UI = nr();
        function BI(e, t) {
            var r = UI(this, e),
                n = r.size;
            return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
        }
        Ku.exports = BI;
    });
    var Br = f((W2, Yu) => {
        var WI = qu(),
            HI = Uu(),
            zI = Wu(),
            KI = zu(),
            jI = ju();
        function Ct(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1]);
            }
        }
        Ct.prototype.clear = WI;
        Ct.prototype.delete = HI;
        Ct.prototype.get = zI;
        Ct.prototype.has = KI;
        Ct.prototype.set = jI;
        Yu.exports = Ct;
    });
    var Qu = f((H2, $u) => {
        var YI = tr(),
            $I = Ur(),
            QI = Br(),
            ZI = 200;
        function JI(e, t) {
            var r = this.__data__;
            if (r instanceof YI) {
                var n = r.__data__;
                if (!$I || n.length < ZI - 1)
                    return n.push([e, t]), (this.size = ++r.size), this;
                r = this.__data__ = new QI(n);
            }
            return r.set(e, t), (this.size = r.size), this;
        }
        $u.exports = JI;
    });
    var Ii = f((z2, Zu) => {
        var eT = tr(),
            tT = eu(),
            rT = ru(),
            nT = iu(),
            iT = au(),
            oT = Qu();
        function Lt(e) {
            var t = (this.__data__ = new eT(e));
            this.size = t.size;
        }
        Lt.prototype.clear = tT;
        Lt.prototype.delete = rT;
        Lt.prototype.get = nT;
        Lt.prototype.has = iT;
        Lt.prototype.set = oT;
        Zu.exports = Lt;
    });
    var ec = f((K2, Ju) => {
        var aT = "__lodash_hash_undefined__";
        function sT(e) {
            return this.__data__.set(e, aT), this;
        }
        Ju.exports = sT;
    });
    var rc = f((j2, tc) => {
        function uT(e) {
            return this.__data__.has(e);
        }
        tc.exports = uT;
    });
    var ic = f((Y2, nc) => {
        var cT = Br(),
            lT = ec(),
            fT = rc();
        function Wr(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new cT(); ++t < r;) this.add(e[t]);
        }
        Wr.prototype.add = Wr.prototype.push = lT;
        Wr.prototype.has = fT;
        nc.exports = Wr;
    });
    var ac = f(($2, oc) => {
        function dT(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1;
        }
        oc.exports = dT;
    });
    var uc = f((Q2, sc) => {
        function pT(e, t) {
            return e.has(t);
        }
        sc.exports = pT;
    });
    var Ti = f((Z2, cc) => {
        var hT = ic(),
            gT = ac(),
            ET = uc(),
            yT = 1,
            mT = 2;
        function vT(e, t, r, n, i, o) {
            var a = r & yT,
                s = e.length,
                u = t.length;
            if (s != u && !(a && u > s)) return !1;
            var l = o.get(e),
                g = o.get(t);
            if (l && g) return l == t && g == e;
            var p = -1,
                d = !0,
                y = r & mT ? new hT() : void 0;
            for (o.set(e, t), o.set(t, e); ++p < s;) {
                var I = e[p],
                    _ = t[p];
                if (n) var O = a ? n(_, I, p, t, e, o) : n(I, _, p, e, t, o);
                if (O !== void 0) {
                    if (O) continue;
                    d = !1;
                    break;
                }
                if (y) {
                    if (
                        !gT(t, function (m, x) {
                            if (!ET(y, x) && (I === m || i(I, m, r, n, o))) return y.push(x);
                        })
                    ) {
                        d = !1;
                        break;
                    }
                } else if (!(I === _ || i(I, _, r, n, o))) {
                    d = !1;
                    break;
                }
            }
            return o.delete(e), o.delete(t), d;
        }
        cc.exports = vT;
    });
    var fc = f((J2, lc) => {
        var _T = Fe(),
            IT = _T.Uint8Array;
        lc.exports = IT;
    });
    var pc = f((e1, dc) => {
        function TT(e) {
            var t = -1,
                r = Array(e.size);
            return (
                e.forEach(function (n, i) {
                    r[++t] = [i, n];
                }),
                r
            );
        }
        dc.exports = TT;
    });
    var gc = f((t1, hc) => {
        function bT(e) {
            var t = -1,
                r = Array(e.size);
            return (
                e.forEach(function (n) {
                    r[++t] = n;
                }),
                r
            );
        }
        hc.exports = bT;
    });
    var _c = f((r1, vc) => {
        var Ec = At(),
            yc = fc(),
            AT = kr(),
            ST = Ti(),
            OT = pc(),
            xT = gc(),
            wT = 1,
            RT = 2,
            CT = "[object Boolean]",
            LT = "[object Date]",
            PT = "[object Error]",
            NT = "[object Map]",
            DT = "[object Number]",
            MT = "[object RegExp]",
            FT = "[object Set]",
            qT = "[object String]",
            XT = "[object Symbol]",
            GT = "[object ArrayBuffer]",
            VT = "[object DataView]",
            mc = Ec ? Ec.prototype : void 0,
            bi = mc ? mc.valueOf : void 0;
        function kT(e, t, r, n, i, o, a) {
            switch (r) {
                case VT:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                        return !1;
                    (e = e.buffer), (t = t.buffer);
                case GT:
                    return !(e.byteLength != t.byteLength || !o(new yc(e), new yc(t)));
                case CT:
                case LT:
                case DT:
                    return AT(+e, +t);
                case PT:
                    return e.name == t.name && e.message == t.message;
                case MT:
                case qT:
                    return e == t + "";
                case NT:
                    var s = OT;
                case FT:
                    var u = n & wT;
                    if ((s || (s = xT), e.size != t.size && !u)) return !1;
                    var l = a.get(e);
                    if (l) return l == t;
                    (n |= RT), a.set(e, t);
                    var g = ST(s(e), s(t), n, i, o, a);
                    return a.delete(e), g;
                case XT:
                    if (bi) return bi.call(e) == bi.call(t);
            }
            return !1;
        }
        vc.exports = kT;
    });
    var Hr = f((n1, Ic) => {
        function UT(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e;
        }
        Ic.exports = UT;
    });
    var Ee = f((i1, Tc) => {
        var BT = Array.isArray;
        Tc.exports = BT;
    });
    var Ai = f((o1, bc) => {
        var WT = Hr(),
            HT = Ee();
        function zT(e, t, r) {
            var n = t(e);
            return HT(e) ? n : WT(n, r(e));
        }
        bc.exports = zT;
    });
    var Sc = f((a1, Ac) => {
        function KT(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var a = e[r];
                t(a, r, e) && (o[i++] = a);
            }
            return o;
        }
        Ac.exports = KT;
    });
    var Si = f((s1, Oc) => {
        function jT() {
            return [];
        }
        Oc.exports = jT;
    });
    var Oi = f((u1, wc) => {
        var YT = Sc(),
            $T = Si(),
            QT = Object.prototype,
            ZT = QT.propertyIsEnumerable,
            xc = Object.getOwnPropertySymbols,
            JT = xc
                ? function (e) {
                    return e == null
                        ? []
                        : ((e = Object(e)),
                            YT(xc(e), function (t) {
                                return ZT.call(e, t);
                            }));
                }
                : $T;
        wc.exports = JT;
    });
    var Cc = f((c1, Rc) => {
        function eb(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n;
        }
        Rc.exports = eb;
    });
    var Pc = f((l1, Lc) => {
        var tb = st(),
            rb = et(),
            nb = "[object Arguments]";
        function ib(e) {
            return rb(e) && tb(e) == nb;
        }
        Lc.exports = ib;
    });
    var ir = f((f1, Mc) => {
        var Nc = Pc(),
            ob = et(),
            Dc = Object.prototype,
            ab = Dc.hasOwnProperty,
            sb = Dc.propertyIsEnumerable,
            ub = Nc(
                (function () {
                    return arguments;
                })()
            )
                ? Nc
                : function (e) {
                    return ob(e) && ab.call(e, "callee") && !sb.call(e, "callee");
                };
        Mc.exports = ub;
    });
    var qc = f((d1, Fc) => {
        function cb() {
            return !1;
        }
        Fc.exports = cb;
    });
    var zr = f((or, Pt) => {
        var lb = Fe(),
            fb = qc(),
            Vc = typeof or == "object" && or && !or.nodeType && or,
            Xc = Vc && typeof Pt == "object" && Pt && !Pt.nodeType && Pt,
            db = Xc && Xc.exports === Vc,
            Gc = db ? lb.Buffer : void 0,
            pb = Gc ? Gc.isBuffer : void 0,
            hb = pb || fb;
        Pt.exports = hb;
    });
    var Kr = f((p1, kc) => {
        var gb = 9007199254740991,
            Eb = /^(?:0|[1-9]\d*)$/;
        function yb(e, t) {
            var r = typeof e;
            return (
                (t = t ?? gb),
                !!t &&
                (r == "number" || (r != "symbol" && Eb.test(e))) &&
                e > -1 &&
                e % 1 == 0 &&
                e < t
            );
        }
        kc.exports = yb;
    });
    var jr = f((h1, Uc) => {
        var mb = 9007199254740991;
        function vb(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= mb;
        }
        Uc.exports = vb;
    });
    var Wc = f((g1, Bc) => {
        var _b = st(),
            Ib = jr(),
            Tb = et(),
            bb = "[object Arguments]",
            Ab = "[object Array]",
            Sb = "[object Boolean]",
            Ob = "[object Date]",
            xb = "[object Error]",
            wb = "[object Function]",
            Rb = "[object Map]",
            Cb = "[object Number]",
            Lb = "[object Object]",
            Pb = "[object RegExp]",
            Nb = "[object Set]",
            Db = "[object String]",
            Mb = "[object WeakMap]",
            Fb = "[object ArrayBuffer]",
            qb = "[object DataView]",
            Xb = "[object Float32Array]",
            Gb = "[object Float64Array]",
            Vb = "[object Int8Array]",
            kb = "[object Int16Array]",
            Ub = "[object Int32Array]",
            Bb = "[object Uint8Array]",
            Wb = "[object Uint8ClampedArray]",
            Hb = "[object Uint16Array]",
            zb = "[object Uint32Array]",
            oe = {};
        oe[Xb] =
            oe[Gb] =
            oe[Vb] =
            oe[kb] =
            oe[Ub] =
            oe[Bb] =
            oe[Wb] =
            oe[Hb] =
            oe[zb] =
            !0;
        oe[bb] =
            oe[Ab] =
            oe[Fb] =
            oe[Sb] =
            oe[qb] =
            oe[Ob] =
            oe[xb] =
            oe[wb] =
            oe[Rb] =
            oe[Cb] =
            oe[Lb] =
            oe[Pb] =
            oe[Nb] =
            oe[Db] =
            oe[Mb] =
            !1;
        function Kb(e) {
            return Tb(e) && Ib(e.length) && !!oe[_b(e)];
        }
        Bc.exports = Kb;
    });
    var zc = f((E1, Hc) => {
        function jb(e) {
            return function (t) {
                return e(t);
            };
        }
        Hc.exports = jb;
    });
    var jc = f((ar, Nt) => {
        var Yb = Zn(),
            Kc = typeof ar == "object" && ar && !ar.nodeType && ar,
            sr = Kc && typeof Nt == "object" && Nt && !Nt.nodeType && Nt,
            $b = sr && sr.exports === Kc,
            xi = $b && Yb.process,
            Qb = (function () {
                try {
                    var e = sr && sr.require && sr.require("util").types;
                    return e || (xi && xi.binding && xi.binding("util"));
                } catch { }
            })();
        Nt.exports = Qb;
    });
    var Yr = f((y1, Qc) => {
        var Zb = Wc(),
            Jb = zc(),
            Yc = jc(),
            $c = Yc && Yc.isTypedArray,
            e0 = $c ? Jb($c) : Zb;
        Qc.exports = e0;
    });
    var wi = f((m1, Zc) => {
        var t0 = Cc(),
            r0 = ir(),
            n0 = Ee(),
            i0 = zr(),
            o0 = Kr(),
            a0 = Yr(),
            s0 = Object.prototype,
            u0 = s0.hasOwnProperty;
        function c0(e, t) {
            var r = n0(e),
                n = !r && r0(e),
                i = !r && !n && i0(e),
                o = !r && !n && !i && a0(e),
                a = r || n || i || o,
                s = a ? t0(e.length, String) : [],
                u = s.length;
            for (var l in e)
                (t || u0.call(e, l)) &&
                    !(
                        a &&
                        (l == "length" ||
                            (i && (l == "offset" || l == "parent")) ||
                            (o &&
                                (l == "buffer" || l == "byteLength" || l == "byteOffset")) ||
                            o0(l, u))
                    ) &&
                    s.push(l);
            return s;
        }
        Zc.exports = c0;
    });
    var $r = f((v1, Jc) => {
        var l0 = Object.prototype;
        function f0(e) {
            var t = e && e.constructor,
                r = (typeof t == "function" && t.prototype) || l0;
            return e === r;
        }
        Jc.exports = f0;
    });
    var tl = f((_1, el) => {
        var d0 = Jn(),
            p0 = d0(Object.keys, Object);
        el.exports = p0;
    });
    var Qr = f((I1, rl) => {
        var h0 = $r(),
            g0 = tl(),
            E0 = Object.prototype,
            y0 = E0.hasOwnProperty;
        function m0(e) {
            if (!h0(e)) return g0(e);
            var t = [];
            for (var r in Object(e)) y0.call(e, r) && r != "constructor" && t.push(r);
            return t;
        }
        rl.exports = m0;
    });
    var gt = f((T1, nl) => {
        var v0 = mi(),
            _0 = jr();
        function I0(e) {
            return e != null && _0(e.length) && !v0(e);
        }
        nl.exports = I0;
    });
    var ur = f((b1, il) => {
        var T0 = wi(),
            b0 = Qr(),
            A0 = gt();
        function S0(e) {
            return A0(e) ? T0(e) : b0(e);
        }
        il.exports = S0;
    });
    var al = f((A1, ol) => {
        var O0 = Ai(),
            x0 = Oi(),
            w0 = ur();
        function R0(e) {
            return O0(e, w0, x0);
        }
        ol.exports = R0;
    });
    var cl = f((S1, ul) => {
        var sl = al(),
            C0 = 1,
            L0 = Object.prototype,
            P0 = L0.hasOwnProperty;
        function N0(e, t, r, n, i, o) {
            var a = r & C0,
                s = sl(e),
                u = s.length,
                l = sl(t),
                g = l.length;
            if (u != g && !a) return !1;
            for (var p = u; p--;) {
                var d = s[p];
                if (!(a ? d in t : P0.call(t, d))) return !1;
            }
            var y = o.get(e),
                I = o.get(t);
            if (y && I) return y == t && I == e;
            var _ = !0;
            o.set(e, t), o.set(t, e);
            for (var O = a; ++p < u;) {
                d = s[p];
                var m = e[d],
                    x = t[d];
                if (n) var A = a ? n(x, m, d, t, e, o) : n(m, x, d, e, t, o);
                if (!(A === void 0 ? m === x || i(m, x, r, n, o) : A)) {
                    _ = !1;
                    break;
                }
                O || (O = d == "constructor");
            }
            if (_ && !O) {
                var L = e.constructor,
                    N = t.constructor;
                L != N &&
                    "constructor" in e &&
                    "constructor" in t &&
                    !(
                        typeof L == "function" &&
                        L instanceof L &&
                        typeof N == "function" &&
                        N instanceof N
                    ) &&
                    (_ = !1);
            }
            return o.delete(e), o.delete(t), _;
        }
        ul.exports = N0;
    });
    var fl = f((O1, ll) => {
        var D0 = ut(),
            M0 = Fe(),
            F0 = D0(M0, "DataView");
        ll.exports = F0;
    });
    var pl = f((x1, dl) => {
        var q0 = ut(),
            X0 = Fe(),
            G0 = q0(X0, "Promise");
        dl.exports = G0;
    });
    var gl = f((w1, hl) => {
        var V0 = ut(),
            k0 = Fe(),
            U0 = V0(k0, "Set");
        hl.exports = U0;
    });
    var Ri = f((R1, El) => {
        var B0 = ut(),
            W0 = Fe(),
            H0 = B0(W0, "WeakMap");
        El.exports = H0;
    });
    var Zr = f((C1, bl) => {
        var Ci = fl(),
            Li = Ur(),
            Pi = pl(),
            Ni = gl(),
            Di = Ri(),
            Tl = st(),
            Dt = _i(),
            yl = "[object Map]",
            z0 = "[object Object]",
            ml = "[object Promise]",
            vl = "[object Set]",
            _l = "[object WeakMap]",
            Il = "[object DataView]",
            K0 = Dt(Ci),
            j0 = Dt(Li),
            Y0 = Dt(Pi),
            $0 = Dt(Ni),
            Q0 = Dt(Di),
            Et = Tl;
        ((Ci && Et(new Ci(new ArrayBuffer(1))) != Il) ||
            (Li && Et(new Li()) != yl) ||
            (Pi && Et(Pi.resolve()) != ml) ||
            (Ni && Et(new Ni()) != vl) ||
            (Di && Et(new Di()) != _l)) &&
            (Et = function (e) {
                var t = Tl(e),
                    r = t == z0 ? e.constructor : void 0,
                    n = r ? Dt(r) : "";
                if (n)
                    switch (n) {
                        case K0:
                            return Il;
                        case j0:
                            return yl;
                        case Y0:
                            return ml;
                        case $0:
                            return vl;
                        case Q0:
                            return _l;
                    }
                return t;
            });
        bl.exports = Et;
    });
    var Ll = f((L1, Cl) => {
        var Mi = Ii(),
            Z0 = Ti(),
            J0 = _c(),
            eA = cl(),
            Al = Zr(),
            Sl = Ee(),
            Ol = zr(),
            tA = Yr(),
            rA = 1,
            xl = "[object Arguments]",
            wl = "[object Array]",
            Jr = "[object Object]",
            nA = Object.prototype,
            Rl = nA.hasOwnProperty;
        function iA(e, t, r, n, i, o) {
            var a = Sl(e),
                s = Sl(t),
                u = a ? wl : Al(e),
                l = s ? wl : Al(t);
            (u = u == xl ? Jr : u), (l = l == xl ? Jr : l);
            var g = u == Jr,
                p = l == Jr,
                d = u == l;
            if (d && Ol(e)) {
                if (!Ol(t)) return !1;
                (a = !0), (g = !1);
            }
            if (d && !g)
                return (
                    o || (o = new Mi()),
                    a || tA(e) ? Z0(e, t, r, n, i, o) : J0(e, t, u, r, n, i, o)
                );
            if (!(r & rA)) {
                var y = g && Rl.call(e, "__wrapped__"),
                    I = p && Rl.call(t, "__wrapped__");
                if (y || I) {
                    var _ = y ? e.value() : e,
                        O = I ? t.value() : t;
                    return o || (o = new Mi()), i(_, O, r, n, o);
                }
            }
            return d ? (o || (o = new Mi()), eA(e, t, r, n, i, o)) : !1;
        }
        Cl.exports = iA;
    });
    var Fi = f((P1, Dl) => {
        var oA = Ll(),
            Pl = et();
        function Nl(e, t, r, n, i) {
            return e === t
                ? !0
                : e == null || t == null || (!Pl(e) && !Pl(t))
                    ? e !== e && t !== t
                    : oA(e, t, r, n, Nl, i);
        }
        Dl.exports = Nl;
    });
    var Fl = f((N1, Ml) => {
        var aA = Ii(),
            sA = Fi(),
            uA = 1,
            cA = 2;
        function lA(e, t, r, n) {
            var i = r.length,
                o = i,
                a = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var s = r[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
            }
            for (; ++i < o;) {
                s = r[i];
                var u = s[0],
                    l = e[u],
                    g = s[1];
                if (a && s[2]) {
                    if (l === void 0 && !(u in e)) return !1;
                } else {
                    var p = new aA();
                    if (n) var d = n(l, g, u, e, t, p);
                    if (!(d === void 0 ? sA(g, l, uA | cA, n, p) : d)) return !1;
                }
            }
            return !0;
        }
        Ml.exports = lA;
    });
    var qi = f((D1, ql) => {
        var fA = Ke();
        function dA(e) {
            return e === e && !fA(e);
        }
        ql.exports = dA;
    });
    var Gl = f((M1, Xl) => {
        var pA = qi(),
            hA = ur();
        function gA(e) {
            for (var t = hA(e), r = t.length; r--;) {
                var n = t[r],
                    i = e[n];
                t[r] = [n, i, pA(i)];
            }
            return t;
        }
        Xl.exports = gA;
    });
    var Xi = f((F1, Vl) => {
        function EA(e, t) {
            return function (r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
            };
        }
        Vl.exports = EA;
    });
    var Ul = f((q1, kl) => {
        var yA = Fl(),
            mA = Gl(),
            vA = Xi();
        function _A(e) {
            var t = mA(e);
            return t.length == 1 && t[0][2]
                ? vA(t[0][0], t[0][1])
                : function (r) {
                    return r === e || yA(r, e, t);
                };
        }
        kl.exports = _A;
    });
    var cr = f((X1, Bl) => {
        var IA = st(),
            TA = et(),
            bA = "[object Symbol]";
        function AA(e) {
            return typeof e == "symbol" || (TA(e) && IA(e) == bA);
        }
        Bl.exports = AA;
    });
    var en = f((G1, Wl) => {
        var SA = Ee(),
            OA = cr(),
            xA = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            wA = /^\w*$/;
        function RA(e, t) {
            if (SA(e)) return !1;
            var r = typeof e;
            return r == "number" ||
                r == "symbol" ||
                r == "boolean" ||
                e == null ||
                OA(e)
                ? !0
                : wA.test(e) || !xA.test(e) || (t != null && e in Object(t));
        }
        Wl.exports = RA;
    });
    var Kl = f((V1, zl) => {
        var Hl = Br(),
            CA = "Expected a function";
        function Gi(e, t) {
            if (typeof e != "function" || (t != null && typeof t != "function"))
                throw new TypeError(CA);
            var r = function () {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = r.cache;
                if (o.has(i)) return o.get(i);
                var a = e.apply(this, n);
                return (r.cache = o.set(i, a) || o), a;
            };
            return (r.cache = new (Gi.Cache || Hl)()), r;
        }
        Gi.Cache = Hl;
        zl.exports = Gi;
    });
    var Yl = f((k1, jl) => {
        var LA = Kl(),
            PA = 500;
        function NA(e) {
            var t = LA(e, function (n) {
                return r.size === PA && r.clear(), n;
            }),
                r = t.cache;
            return t;
        }
        jl.exports = NA;
    });
    var Ql = f((U1, $l) => {
        var DA = Yl(),
            MA =
                /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            FA = /\\(\\)?/g,
            qA = DA(function (e) {
                var t = [];
                return (
                    e.charCodeAt(0) === 46 && t.push(""),
                    e.replace(MA, function (r, n, i, o) {
                        t.push(i ? o.replace(FA, "$1") : n || r);
                    }),
                    t
                );
            });
        $l.exports = qA;
    });
    var Vi = f((B1, Zl) => {
        function XA(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;)
                i[r] = t(e[r], r, e);
            return i;
        }
        Zl.exports = XA;
    });
    var of = f((W1, nf) => {
        var Jl = At(),
            GA = Vi(),
            VA = Ee(),
            kA = cr(),
            UA = 1 / 0,
            ef = Jl ? Jl.prototype : void 0,
            tf = ef ? ef.toString : void 0;
        function rf(e) {
            if (typeof e == "string") return e;
            if (VA(e)) return GA(e, rf) + "";
            if (kA(e)) return tf ? tf.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -UA ? "-0" : t;
        }
        nf.exports = rf;
    });
    var sf = f((H1, af) => {
        var BA = of();
        function WA(e) {
            return e == null ? "" : BA(e);
        }
        af.exports = WA;
    });
    var lr = f((z1, uf) => {
        var HA = Ee(),
            zA = en(),
            KA = Ql(),
            jA = sf();
        function YA(e, t) {
            return HA(e) ? e : zA(e, t) ? [e] : KA(jA(e));
        }
        uf.exports = YA;
    });
    var Mt = f((K1, cf) => {
        var $A = cr(),
            QA = 1 / 0;
        function ZA(e) {
            if (typeof e == "string" || $A(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -QA ? "-0" : t;
        }
        cf.exports = ZA;
    });
    var tn = f((j1, lf) => {
        var JA = lr(),
            eS = Mt();
        function tS(e, t) {
            t = JA(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[eS(t[r++])];
            return r && r == n ? e : void 0;
        }
        lf.exports = tS;
    });
    var rn = f((Y1, ff) => {
        var rS = tn();
        function nS(e, t, r) {
            var n = e == null ? void 0 : rS(e, t);
            return n === void 0 ? r : n;
        }
        ff.exports = nS;
    });
    var pf = f(($1, df) => {
        function iS(e, t) {
            return e != null && t in Object(e);
        }
        df.exports = iS;
    });
    var gf = f((Q1, hf) => {
        var oS = lr(),
            aS = ir(),
            sS = Ee(),
            uS = Kr(),
            cS = jr(),
            lS = Mt();
        function fS(e, t, r) {
            t = oS(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var a = lS(t[n]);
                if (!(o = e != null && r(e, a))) break;
                e = e[a];
            }
            return o || ++n != i
                ? o
                : ((i = e == null ? 0 : e.length),
                    !!i && cS(i) && uS(a, i) && (sS(e) || aS(e)));
        }
        hf.exports = fS;
    });
    var yf = f((Z1, Ef) => {
        var dS = pf(),
            pS = gf();
        function hS(e, t) {
            return e != null && pS(e, t, dS);
        }
        Ef.exports = hS;
    });
    var vf = f((J1, mf) => {
        var gS = Fi(),
            ES = rn(),
            yS = yf(),
            mS = en(),
            vS = qi(),
            _S = Xi(),
            IS = Mt(),
            TS = 1,
            bS = 2;
        function AS(e, t) {
            return mS(e) && vS(t)
                ? _S(IS(e), t)
                : function (r) {
                    var n = ES(r, e);
                    return n === void 0 && n === t ? yS(r, e) : gS(t, n, TS | bS);
                };
        }
        mf.exports = AS;
    });
    var nn = f((eq, _f) => {
        function SS(e) {
            return e;
        }
        _f.exports = SS;
    });
    var ki = f((tq, If) => {
        function OS(e) {
            return function (t) {
                return t?.[e];
            };
        }
        If.exports = OS;
    });
    var bf = f((rq, Tf) => {
        var xS = tn();
        function wS(e) {
            return function (t) {
                return xS(t, e);
            };
        }
        Tf.exports = wS;
    });
    var Sf = f((nq, Af) => {
        var RS = ki(),
            CS = bf(),
            LS = en(),
            PS = Mt();
        function NS(e) {
            return LS(e) ? RS(PS(e)) : CS(e);
        }
        Af.exports = NS;
    });
    var ct = f((iq, Of) => {
        var DS = Ul(),
            MS = vf(),
            FS = nn(),
            qS = Ee(),
            XS = Sf();
        function GS(e) {
            return typeof e == "function"
                ? e
                : e == null
                    ? FS
                    : typeof e == "object"
                        ? qS(e)
                            ? MS(e[0], e[1])
                            : DS(e)
                        : XS(e);
        }
        Of.exports = GS;
    });
    var Ui = f((oq, xf) => {
        var VS = ct(),
            kS = gt(),
            US = ur();
        function BS(e) {
            return function (t, r, n) {
                var i = Object(t);
                if (!kS(t)) {
                    var o = VS(r, 3);
                    (t = US(t)),
                        (r = function (s) {
                            return o(i[s], s, i);
                        });
                }
                var a = e(t, r, n);
                return a > -1 ? i[o ? t[a] : a] : void 0;
            };
        }
        xf.exports = BS;
    });
    var Bi = f((aq, wf) => {
        function WS(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1;
        }
        wf.exports = WS;
    });
    var Cf = f((sq, Rf) => {
        var HS = /\s/;
        function zS(e) {
            for (var t = e.length; t-- && HS.test(e.charAt(t)););
            return t;
        }
        Rf.exports = zS;
    });
    var Pf = f((uq, Lf) => {
        var KS = Cf(),
            jS = /^\s+/;
        function YS(e) {
            return e && e.slice(0, KS(e) + 1).replace(jS, "");
        }
        Lf.exports = YS;
    });
    var on = f((cq, Mf) => {
        var $S = Pf(),
            Nf = Ke(),
            QS = cr(),
            Df = 0 / 0,
            ZS = /^[-+]0x[0-9a-f]+$/i,
            JS = /^0b[01]+$/i,
            eO = /^0o[0-7]+$/i,
            tO = parseInt;
        function rO(e) {
            if (typeof e == "number") return e;
            if (QS(e)) return Df;
            if (Nf(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Nf(t) ? t + "" : t;
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = $S(e);
            var r = JS.test(e);
            return r || eO.test(e) ? tO(e.slice(2), r ? 2 : 8) : ZS.test(e) ? Df : +e;
        }
        Mf.exports = rO;
    });
    var Xf = f((lq, qf) => {
        var nO = on(),
            Ff = 1 / 0,
            iO = 17976931348623157e292;
        function oO(e) {
            if (!e) return e === 0 ? e : 0;
            if (((e = nO(e)), e === Ff || e === -Ff)) {
                var t = e < 0 ? -1 : 1;
                return t * iO;
            }
            return e === e ? e : 0;
        }
        qf.exports = oO;
    });
    var Wi = f((fq, Gf) => {
        var aO = Xf();
        function sO(e) {
            var t = aO(e),
                r = t % 1;
            return t === t ? (r ? t - r : t) : 0;
        }
        Gf.exports = sO;
    });
    var kf = f((dq, Vf) => {
        var uO = Bi(),
            cO = ct(),
            lO = Wi(),
            fO = Math.max;
        function dO(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : lO(r);
            return i < 0 && (i = fO(n + i, 0)), uO(e, cO(t, 3), i);
        }
        Vf.exports = dO;
    });
    var Hi = f((pq, Uf) => {
        var pO = Ui(),
            hO = kf(),
            gO = pO(hO);
        Uf.exports = gO;
    });
    var Hf = {};
    Ae(Hf, {
        ELEMENT_MATCHES: () => EO,
        FLEX_PREFIXED: () => zi,
        IS_BROWSER_ENV: () => Xe,
        TRANSFORM_PREFIXED: () => lt,
        TRANSFORM_STYLE_PREFIXED: () => sn,
        withBrowser: () => an,
    });
    var Wf,
        Xe,
        an,
        EO,
        zi,
        lt,
        Bf,
        sn,
        un = se(() => {
            "use strict";
            (Wf = ee(Hi())),
                (Xe = typeof window < "u"),
                (an = (e, t) => (Xe ? e() : t)),
                (EO = an(() =>
                    (0, Wf.default)(
                        [
                            "matches",
                            "matchesSelector",
                            "mozMatchesSelector",
                            "msMatchesSelector",
                            "oMatchesSelector",
                            "webkitMatchesSelector",
                        ],
                        (e) => e in Element.prototype
                    )
                )),
                (zi = an(() => {
                    let e = document.createElement("i"),
                        t = [
                            "flex",
                            "-webkit-flex",
                            "-ms-flexbox",
                            "-moz-box",
                            "-webkit-box",
                        ],
                        r = "";
                    try {
                        let { length: n } = t;
                        for (let i = 0; i < n; i++) {
                            let o = t[i];
                            if (((e.style.display = o), e.style.display === o)) return o;
                        }
                        return r;
                    } catch {
                        return r;
                    }
                }, "flex")),
                (lt = an(() => {
                    let e = document.createElement("i");
                    if (e.style.transform == null) {
                        let t = ["Webkit", "Moz", "ms"],
                            r = "Transform",
                            { length: n } = t;
                        for (let i = 0; i < n; i++) {
                            let o = t[i] + r;
                            if (e.style[o] !== void 0) return o;
                        }
                    }
                    return "transform";
                }, "transform")),
                (Bf = lt.split("transform")[0]),
                (sn = Bf ? Bf + "TransformStyle" : "transformStyle");
        });
    var Ki = f((hq, $f) => {
        var yO = 4,
            mO = 0.001,
            vO = 1e-7,
            _O = 10,
            fr = 11,
            cn = 1 / (fr - 1),
            IO = typeof Float32Array == "function";
        function zf(e, t) {
            return 1 - 3 * t + 3 * e;
        }
        function Kf(e, t) {
            return 3 * t - 6 * e;
        }
        function jf(e) {
            return 3 * e;
        }
        function ln(e, t, r) {
            return ((zf(t, r) * e + Kf(t, r)) * e + jf(t)) * e;
        }
        function Yf(e, t, r) {
            return 3 * zf(t, r) * e * e + 2 * Kf(t, r) * e + jf(t);
        }
        function TO(e, t, r, n, i) {
            var o,
                a,
                s = 0;
            do
                (a = t + (r - t) / 2), (o = ln(a, n, i) - e), o > 0 ? (r = a) : (t = a);
            while (Math.abs(o) > vO && ++s < _O);
            return a;
        }
        function bO(e, t, r, n) {
            for (var i = 0; i < yO; ++i) {
                var o = Yf(t, r, n);
                if (o === 0) return t;
                var a = ln(t, r, n) - e;
                t -= a / o;
            }
            return t;
        }
        $f.exports = function (t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var o = IO ? new Float32Array(fr) : new Array(fr);
            if (t !== r || n !== i)
                for (var a = 0; a < fr; ++a) o[a] = ln(a * cn, t, n);
            function s(u) {
                for (var l = 0, g = 1, p = fr - 1; g !== p && o[g] <= u; ++g) l += cn;
                --g;
                var d = (u - o[g]) / (o[g + 1] - o[g]),
                    y = l + d * cn,
                    I = Yf(y, t, n);
                return I >= mO ? bO(u, y, t, n) : I === 0 ? y : TO(u, l, l + cn, t, n);
            }
            return function (l) {
                return t === r && n === i
                    ? l
                    : l === 0
                        ? 0
                        : l === 1
                            ? 1
                            : ln(s(l), r, i);
            };
        };
    });
    var pr = {};
    Ae(pr, {
        bounce: () => ox,
        bouncePast: () => ax,
        ease: () => AO,
        easeIn: () => SO,
        easeInOut: () => xO,
        easeOut: () => OO,
        inBack: () => $O,
        inCirc: () => zO,
        inCubic: () => LO,
        inElastic: () => JO,
        inExpo: () => BO,
        inOutBack: () => ZO,
        inOutCirc: () => jO,
        inOutCubic: () => NO,
        inOutElastic: () => tx,
        inOutExpo: () => HO,
        inOutQuad: () => CO,
        inOutQuart: () => FO,
        inOutQuint: () => GO,
        inOutSine: () => UO,
        inQuad: () => wO,
        inQuart: () => DO,
        inQuint: () => qO,
        inSine: () => VO,
        outBack: () => QO,
        outBounce: () => YO,
        outCirc: () => KO,
        outCubic: () => PO,
        outElastic: () => ex,
        outExpo: () => WO,
        outQuad: () => RO,
        outQuart: () => MO,
        outQuint: () => XO,
        outSine: () => kO,
        swingFrom: () => nx,
        swingFromTo: () => rx,
        swingTo: () => ix,
    });
    function wO(e) {
        return Math.pow(e, 2);
    }
    function RO(e) {
        return -(Math.pow(e - 1, 2) - 1);
    }
    function CO(e) {
        return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
    }
    function LO(e) {
        return Math.pow(e, 3);
    }
    function PO(e) {
        return Math.pow(e - 1, 3) + 1;
    }
    function NO(e) {
        return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 3)
            : 0.5 * (Math.pow(e - 2, 3) + 2);
    }
    function DO(e) {
        return Math.pow(e, 4);
    }
    function MO(e) {
        return -(Math.pow(e - 1, 4) - 1);
    }
    function FO(e) {
        return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 4)
            : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
    }
    function qO(e) {
        return Math.pow(e, 5);
    }
    function XO(e) {
        return Math.pow(e - 1, 5) + 1;
    }
    function GO(e) {
        return (e /= 0.5) < 1
            ? 0.5 * Math.pow(e, 5)
            : 0.5 * (Math.pow(e - 2, 5) + 2);
    }
    function VO(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1;
    }
    function kO(e) {
        return Math.sin(e * (Math.PI / 2));
    }
    function UO(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
    }
    function BO(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
    }
    function WO(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
    }
    function HO(e) {
        return e === 0
            ? 0
            : e === 1
                ? 1
                : (e /= 0.5) < 1
                    ? 0.5 * Math.pow(2, 10 * (e - 1))
                    : 0.5 * (-Math.pow(2, -10 * --e) + 2);
    }
    function zO(e) {
        return -(Math.sqrt(1 - e * e) - 1);
    }
    function KO(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
    }
    function jO(e) {
        return (e /= 0.5) < 1
            ? -0.5 * (Math.sqrt(1 - e * e) - 1)
            : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
    }
    function YO(e) {
        return e < 1 / 2.75
            ? 7.5625 * e * e
            : e < 2 / 2.75
                ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                : e < 2.5 / 2.75
                    ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                    : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function $O(e) {
        let t = tt;
        return e * e * ((t + 1) * e - t);
    }
    function QO(e) {
        let t = tt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function ZO(e) {
        let t = tt;
        return (e /= 0.5) < 1
            ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
            : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function JO(e) {
        let t = tt,
            r = 0,
            n = 1;
        return e === 0
            ? 0
            : e === 1
                ? 1
                : (r || (r = 0.3),
                    n < 1
                        ? ((n = 1), (t = r / 4))
                        : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
                    -(
                        n *
                        Math.pow(2, 10 * (e -= 1)) *
                        Math.sin(((e - t) * (2 * Math.PI)) / r)
                    ));
    }
    function ex(e) {
        let t = tt,
            r = 0,
            n = 1;
        return e === 0
            ? 0
            : e === 1
                ? 1
                : (r || (r = 0.3),
                    n < 1
                        ? ((n = 1), (t = r / 4))
                        : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
                    n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
    }
    function tx(e) {
        let t = tt,
            r = 0,
            n = 1;
        return e === 0
            ? 0
            : (e /= 1 / 2) === 2
                ? 1
                : (r || (r = 0.3 * 1.5),
                    n < 1
                        ? ((n = 1), (t = r / 4))
                        : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
                    e < 1
                        ? -0.5 *
                        (n *
                            Math.pow(2, 10 * (e -= 1)) *
                            Math.sin(((e - t) * (2 * Math.PI)) / r))
                        : n *
                        Math.pow(2, -10 * (e -= 1)) *
                        Math.sin(((e - t) * (2 * Math.PI)) / r) *
                        0.5 +
                        1);
    }
    function rx(e) {
        let t = tt;
        return (e /= 0.5) < 1
            ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
            : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    }
    function nx(e) {
        let t = tt;
        return e * e * ((t + 1) * e - t);
    }
    function ix(e) {
        let t = tt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1;
    }
    function ox(e) {
        return e < 1 / 2.75
            ? 7.5625 * e * e
            : e < 2 / 2.75
                ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                : e < 2.5 / 2.75
                    ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                    : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    }
    function ax(e) {
        return e < 1 / 2.75
            ? 7.5625 * e * e
            : e < 2 / 2.75
                ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
                : e < 2.5 / 2.75
                    ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
                    : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
    }
    var dr,
        tt,
        AO,
        SO,
        OO,
        xO,
        ji = se(() => {
            "use strict";
            (dr = ee(Ki())),
                (tt = 1.70158),
                (AO = (0, dr.default)(0.25, 0.1, 0.25, 1)),
                (SO = (0, dr.default)(0.42, 0, 1, 1)),
                (OO = (0, dr.default)(0, 0, 0.58, 1)),
                (xO = (0, dr.default)(0.42, 0, 0.58, 1));
        });
    var Zf = {};
    Ae(Zf, {
        applyEasing: () => ux,
        createBezierEasing: () => sx,
        optimizeFloat: () => hr,
    });
    function hr(e, t = 5, r = 10) {
        let n = Math.pow(r, t),
            i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0;
    }
    function sx(e) {
        return (0, Qf.default)(...e);
    }
    function ux(e, t, r) {
        return t === 0
            ? 0
            : t === 1
                ? 1
                : hr(r ? (t > 0 ? r(t) : t) : t > 0 && e && pr[e] ? pr[e](t) : t);
    }
    var Qf,
        Yi = se(() => {
            "use strict";
            ji();
            Qf = ee(Ki());
        });
    var td = {};
    Ae(td, {
        createElementState: () => ed,
        ixElements: () => Tx,
        mergeActionState: () => $i,
    });
    function ed(e, t, r, n, i) {
        let o =
            r === cx ? (0, Ft.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, Ft.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
    }
    function $i(e, t, r, n, i) {
        let o = Ax(i);
        return (0, Ft.mergeIn)(e, [t, Ix, r], n, o);
    }
    function Ax(e) {
        let { config: t } = e;
        return bx.reduce((r, n) => {
            let i = n[0],
                o = n[1],
                a = t[i],
                s = t[o];
            return a != null && s != null && (r[o] = s), r;
        }, {});
    }
    var Ft,
        Eq,
        cx,
        yq,
        lx,
        fx,
        dx,
        px,
        hx,
        gx,
        Ex,
        yx,
        mx,
        vx,
        _x,
        Jf,
        Ix,
        Tx,
        bx,
        rd = se(() => {
            "use strict";
            Ft = ee(xt());
            Oe();
            ({
                HTML_ELEMENT: Eq,
                PLAIN_OBJECT: cx,
                ABSTRACT_NODE: yq,
                CONFIG_X_VALUE: lx,
                CONFIG_Y_VALUE: fx,
                CONFIG_Z_VALUE: dx,
                CONFIG_VALUE: px,
                CONFIG_X_UNIT: hx,
                CONFIG_Y_UNIT: gx,
                CONFIG_Z_UNIT: Ex,
                CONFIG_UNIT: yx,
            } = ye),
                ({
                    IX2_SESSION_STOPPED: mx,
                    IX2_INSTANCE_ADDED: vx,
                    IX2_ELEMENT_STATE_CHANGED: _x,
                } = he),
                (Jf = {}),
                (Ix = "refState"),
                (Tx = (e = Jf, t = {}) => {
                    switch (t.type) {
                        case mx:
                            return Jf;
                        case vx: {
                            let {
                                elementId: r,
                                element: n,
                                origin: i,
                                actionItem: o,
                                refType: a,
                            } = t.payload,
                                { actionTypeId: s } = o,
                                u = e;
                            return (
                                (0, Ft.getIn)(u, [r, n]) !== n && (u = ed(u, n, a, r, o)),
                                $i(u, r, s, i, o)
                            );
                        }
                        case _x: {
                            let {
                                elementId: r,
                                actionTypeId: n,
                                current: i,
                                actionItem: o,
                            } = t.payload;
                            return $i(e, r, n, i, o);
                        }
                        default:
                            return e;
                    }
                });
            bx = [
                [lx, hx],
                [fx, gx],
                [dx, Ex],
                [px, yx],
            ];
        });
    var nd = f((Qi) => {
        "use strict";
        Object.defineProperty(Qi, "__esModule", { value: !0 });
        function Sx(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }
        Sx(Qi, {
            clearPlugin: function () {
                return Px;
            },
            createPluginInstance: function () {
                return Cx;
            },
            getPluginConfig: function () {
                return Ox;
            },
            getPluginDestination: function () {
                return Rx;
            },
            getPluginDuration: function () {
                return xx;
            },
            getPluginOrigin: function () {
                return wx;
            },
            renderPlugin: function () {
                return Lx;
            },
        });
        var Ox = (e) => e.value,
            xx = (e, t) => {
                if (t.config.duration !== "auto") return null;
                let r = parseFloat(e.getAttribute("data-duration"));
                return r > 0
                    ? r * 1e3
                    : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
            },
            wx = (e) => e || { value: 0 },
            Rx = (e) => ({ value: e.value }),
            Cx = (e) => {
                let t = window.Webflow.require("lottie").createInstance(e);
                return t.stop(), t.setSubframe(!0), t;
            },
            Lx = (e, t, r) => {
                if (!e) return;
                let n = t[r.actionTypeId].value / 100;
                e.goToFrame(e.frames * n);
            },
            Px = (e) => {
                window.Webflow.require("lottie").createInstance(e).stop();
            };
    });
    var od = f((Zi) => {
        "use strict";
        Object.defineProperty(Zi, "__esModule", { value: !0 });
        function Nx(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }
        Nx(Zi, {
            clearPlugin: function () {
                return Bx;
            },
            createPluginInstance: function () {
                return kx;
            },
            getPluginConfig: function () {
                return qx;
            },
            getPluginDestination: function () {
                return Vx;
            },
            getPluginDuration: function () {
                return Xx;
            },
            getPluginOrigin: function () {
                return Gx;
            },
            renderPlugin: function () {
                return Ux;
            },
        });
        var Dx = (e) => document.querySelector(`[data-w-id="${e}"]`),
            Mx = () => window.Webflow.require("spline"),
            Fx = (e, t) => e.filter((r) => !t.includes(r)),
            qx = (e, t) => e.value[t],
            Xx = () => null,
            id = Object.freeze({
                positionX: 0,
                positionY: 0,
                positionZ: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1,
            }),
            Gx = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let o = Object.keys(e),
                        a = Fx(n, o);
                    return a.length ? a.reduce((u, l) => ((u[l] = id[l]), u), e) : e;
                }
                return n.reduce((o, a) => ((o[a] = id[a]), o), {});
            },
            Vx = (e) => e.value,
            kx = (e, t) => {
                let r = t?.config?.target?.pluginElement;
                return r ? Dx(r) : null;
            },
            Ux = (e, t, r) => {
                let n = Mx(),
                    i = n.getInstance(e),
                    o = r.config.target.objectId,
                    a = (s) => {
                        if (!s)
                            throw new Error("Invalid spline app passed to renderSpline");
                        let u = o && s.findObjectById(o);
                        if (!u) return;
                        let { PLUGIN_SPLINE: l } = t;
                        l.positionX != null && (u.position.x = l.positionX),
                            l.positionY != null && (u.position.y = l.positionY),
                            l.positionZ != null && (u.position.z = l.positionZ),
                            l.rotationX != null && (u.rotation.x = l.rotationX),
                            l.rotationY != null && (u.rotation.y = l.rotationY),
                            l.rotationZ != null && (u.rotation.z = l.rotationZ),
                            l.scaleX != null && (u.scale.x = l.scaleX),
                            l.scaleY != null && (u.scale.y = l.scaleY),
                            l.scaleZ != null && (u.scale.z = l.scaleZ);
                    };
                i ? a(i.spline) : n.setLoadHandler(e, a);
            },
            Bx = () => null;
    });
    var ad = f((to) => {
        "use strict";
        Object.defineProperty(to, "__esModule", { value: !0 });
        function Wx(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }
        Wx(to, {
            clearPlugin: function () {
                return Jx;
            },
            createPluginInstance: function () {
                return Qx;
            },
            getPluginConfig: function () {
                return Kx;
            },
            getPluginDestination: function () {
                return $x;
            },
            getPluginDuration: function () {
                return jx;
            },
            getPluginOrigin: function () {
                return Yx;
            },
            renderPlugin: function () {
                return Zx;
            },
        });
        var Ji = "--wf-rive-fit",
            eo = "--wf-rive-alignment",
            Hx = (e) => document.querySelector(`[data-w-id="${e}"]`),
            zx = () => window.Webflow.require("rive"),
            Kx = (e, t) => e.value.inputs[t],
            jx = () => null,
            Yx = (e, t) => {
                if (e) return e;
                let r = {},
                    { inputs: n = {} } = t.config.value;
                for (let i in n) n[i] == null && (r[i] = 0);
                return r;
            },
            $x = (e) => e.value.inputs ?? {},
            Qx = (e, t) => {
                let r = t?.config?.target?.pluginElement;
                return r ? Hx(r) : null;
            },
            Zx = (e, { PLUGIN_RIVE: t }, r) => {
                let n = zx(),
                    i = n.getInstance(e),
                    o = n.rive.StateMachineInputType,
                    { name: a, inputs: s = {} } = r.config.value || {};
                function u(l) {
                    if (l.loaded) g();
                    else {
                        let p = () => {
                            g(), l?.off("load", p);
                        };
                        l?.on("load", p);
                    }
                    function g() {
                        let p = l.stateMachineInputs(a);
                        if (p != null) {
                            if ((l.isPlaying || l.play(a, !1), Ji in s || eo in s)) {
                                let d = l.layout,
                                    y = s[Ji] ?? d.fit,
                                    I = s[eo] ?? d.alignment;
                                (y !== d.fit || I !== d.alignment) &&
                                    (l.layout = d.copyWith({ fit: y, alignment: I }));
                            }
                            for (let d in s) {
                                if (d === Ji || d === eo) continue;
                                let y = p.find((I) => I.name === d);
                                if (y != null)
                                    switch (y.type) {
                                        case o.Boolean: {
                                            if (s[d] != null) {
                                                let I = !!s[d];
                                                y.value = I;
                                            }
                                            break;
                                        }
                                        case o.Number: {
                                            let I = t[d];
                                            I != null && (y.value = I);
                                            break;
                                        }
                                        case o.Trigger: {
                                            s[d] && y.fire();
                                            break;
                                        }
                                    }
                            }
                        }
                    }
                }
                i?.rive ? u(i.rive) : n.setLoadHandler(e, u);
            },
            Jx = (e, t) => null;
    });
    var no = f((ro) => {
        "use strict";
        Object.defineProperty(ro, "__esModule", { value: !0 });
        Object.defineProperty(ro, "normalizeColor", {
            enumerable: !0,
            get: function () {
                return ew;
            },
        });
        var sd = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32",
        };
        function ew(e) {
            let t,
                r,
                n,
                i = 1,
                o = e.replace(/\s/g, "").toLowerCase(),
                s = (typeof sd[o] == "string" ? sd[o].toLowerCase() : null) || o;
            if (s.startsWith("#")) {
                let u = s.substring(1);
                u.length === 3 || u.length === 4
                    ? ((t = parseInt(u[0] + u[0], 16)),
                        (r = parseInt(u[1] + u[1], 16)),
                        (n = parseInt(u[2] + u[2], 16)),
                        u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255))
                    : (u.length === 6 || u.length === 8) &&
                    ((t = parseInt(u.substring(0, 2), 16)),
                        (r = parseInt(u.substring(2, 4), 16)),
                        (n = parseInt(u.substring(4, 6), 16)),
                        u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255));
            } else if (s.startsWith("rgba")) {
                let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
                (t = parseInt(u[0], 10)),
                    (r = parseInt(u[1], 10)),
                    (n = parseInt(u[2], 10)),
                    (i = parseFloat(u[3]));
            } else if (s.startsWith("rgb")) {
                let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
                (t = parseInt(u[0], 10)),
                    (r = parseInt(u[1], 10)),
                    (n = parseInt(u[2], 10));
            } else if (s.startsWith("hsla")) {
                let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(u[0]),
                    g = parseFloat(u[1].replace("%", "")) / 100,
                    p = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let d = (1 - Math.abs(2 * p - 1)) * g,
                    y = d * (1 - Math.abs(((l / 60) % 2) - 1)),
                    I = p - d / 2,
                    _,
                    O,
                    m;
                l >= 0 && l < 60
                    ? ((_ = d), (O = y), (m = 0))
                    : l >= 60 && l < 120
                        ? ((_ = y), (O = d), (m = 0))
                        : l >= 120 && l < 180
                            ? ((_ = 0), (O = d), (m = y))
                            : l >= 180 && l < 240
                                ? ((_ = 0), (O = y), (m = d))
                                : l >= 240 && l < 300
                                    ? ((_ = y), (O = 0), (m = d))
                                    : ((_ = d), (O = 0), (m = y)),
                    (t = Math.round((_ + I) * 255)),
                    (r = Math.round((O + I) * 255)),
                    (n = Math.round((m + I) * 255));
            } else if (s.startsWith("hsl")) {
                let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(u[0]),
                    g = parseFloat(u[1].replace("%", "")) / 100,
                    p = parseFloat(u[2].replace("%", "")) / 100,
                    d = (1 - Math.abs(2 * p - 1)) * g,
                    y = d * (1 - Math.abs(((l / 60) % 2) - 1)),
                    I = p - d / 2,
                    _,
                    O,
                    m;
                l >= 0 && l < 60
                    ? ((_ = d), (O = y), (m = 0))
                    : l >= 60 && l < 120
                        ? ((_ = y), (O = d), (m = 0))
                        : l >= 120 && l < 180
                            ? ((_ = 0), (O = d), (m = y))
                            : l >= 180 && l < 240
                                ? ((_ = 0), (O = y), (m = d))
                                : l >= 240 && l < 300
                                    ? ((_ = y), (O = 0), (m = d))
                                    : ((_ = d), (O = 0), (m = y)),
                    (t = Math.round((_ + I) * 255)),
                    (r = Math.round((O + I) * 255)),
                    (n = Math.round((m + I) * 255));
            }
            if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
                throw new Error(
                    `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
                );
            return { red: t, green: r, blue: n, alpha: i };
        }
    });
    var ud = f((io) => {
        "use strict";
        Object.defineProperty(io, "__esModule", { value: !0 });
        function tw(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }
        tw(io, {
            clearPlugin: function () {
                return cw;
            },
            createPluginInstance: function () {
                return sw;
            },
            getPluginConfig: function () {
                return nw;
            },
            getPluginDestination: function () {
                return aw;
            },
            getPluginDuration: function () {
                return iw;
            },
            getPluginOrigin: function () {
                return ow;
            },
            renderPlugin: function () {
                return uw;
            },
        });
        var rw = no(),
            nw = (e, t) => e.value[t],
            iw = () => null,
            ow = (e, t) => {
                if (e) return e;
                let r = t.config.value,
                    n = t.config.target.objectId,
                    i = getComputedStyle(document.documentElement).getPropertyValue(n);
                if (r.size != null) return { size: parseInt(i, 10) };
                if (r.red != null && r.green != null && r.blue != null)
                    return (0, rw.normalizeColor)(i);
            },
            aw = (e) => e.value,
            sw = () => null,
            uw = (e, t, r) => {
                let n = r.config.target.objectId,
                    i = r.config.value.unit,
                    { PLUGIN_VARIABLE: o } = t,
                    { size: a, red: s, green: u, blue: l, alpha: g } = o,
                    p;
                a != null && (p = a + i),
                    s != null &&
                    l != null &&
                    u != null &&
                    g != null &&
                    (p = `rgba(${s}, ${u}, ${l}, ${g})`),
                    p != null && document.documentElement.style.setProperty(n, p);
            },
            cw = (e, t) => {
                let r = t.config.target.objectId;
                document.documentElement.style.removeProperty(r);
            };
    });
    var ld = f((oo) => {
        "use strict";
        Object.defineProperty(oo, "__esModule", { value: !0 });
        Object.defineProperty(oo, "pluginMethodMap", {
            enumerable: !0,
            get: function () {
                return hw;
            },
        });
        var fn = (Oe(), Ue(ps)),
            lw = dn(nd()),
            fw = dn(od()),
            dw = dn(ad()),
            pw = dn(ud());
        function cd(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap(),
                r = new WeakMap();
            return (cd = function (n) {
                return n ? r : t;
            })(e);
        }
        function dn(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || (typeof e != "object" && typeof e != "function"))
                return { default: e };
            var r = cd(t);
            if (r && r.has(e)) return r.get(e);
            var n = { __proto__: null },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set)
                        ? Object.defineProperty(n, o, a)
                        : (n[o] = e[o]);
                }
            return (n.default = e), r && r.set(e, n), n;
        }
        var hw = new Map([
            [fn.ActionTypeConsts.PLUGIN_LOTTIE, { ...lw }],
            [fn.ActionTypeConsts.PLUGIN_SPLINE, { ...fw }],
            [fn.ActionTypeConsts.PLUGIN_RIVE, { ...dw }],
            [fn.ActionTypeConsts.PLUGIN_VARIABLE, { ...pw }],
        ]);
    });
    var fd = {};
    Ae(fd, {
        clearPlugin: () => fo,
        createPluginInstance: () => Ew,
        getPluginConfig: () => so,
        getPluginDestination: () => co,
        getPluginDuration: () => gw,
        getPluginOrigin: () => uo,
        isPluginType: () => yt,
        renderPlugin: () => lo,
    });
    function yt(e) {
        return ao.pluginMethodMap.has(e);
    }
    var ao,
        mt,
        so,
        uo,
        gw,
        co,
        Ew,
        lo,
        fo,
        po = se(() => {
            "use strict";
            un();
            ao = ee(ld());
            (mt = (e) => (t) => {
                if (!Xe) return () => null;
                let r = ao.pluginMethodMap.get(t);
                if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
                let n = r[e];
                if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
                return n;
            }),
                (so = mt("getPluginConfig")),
                (uo = mt("getPluginOrigin")),
                (gw = mt("getPluginDuration")),
                (co = mt("getPluginDestination")),
                (Ew = mt("createPluginInstance")),
                (lo = mt("renderPlugin")),
                (fo = mt("clearPlugin"));
        });
    var pd = f((Sq, dd) => {
        function yw(e, t) {
            return e == null || e !== e ? t : e;
        }
        dd.exports = yw;
    });
    var gd = f((Oq, hd) => {
        function mw(e, t, r, n) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r;
        }
        hd.exports = mw;
    });
    var yd = f((xq, Ed) => {
        function vw(e) {
            return function (t, r, n) {
                for (var i = -1, o = Object(t), a = n(t), s = a.length; s--;) {
                    var u = a[e ? s : ++i];
                    if (r(o[u], u, o) === !1) break;
                }
                return t;
            };
        }
        Ed.exports = vw;
    });
    var vd = f((wq, md) => {
        var _w = yd(),
            Iw = _w();
        md.exports = Iw;
    });
    var ho = f((Rq, _d) => {
        var Tw = vd(),
            bw = ur();
        function Aw(e, t) {
            return e && Tw(e, t, bw);
        }
        _d.exports = Aw;
    });
    var Td = f((Cq, Id) => {
        var Sw = gt();
        function Ow(e, t) {
            return function (r, n) {
                if (r == null) return r;
                if (!Sw(r)) return e(r, n);
                for (
                    var i = r.length, o = t ? i : -1, a = Object(r);
                    (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

                );
                return r;
            };
        }
        Id.exports = Ow;
    });
    var go = f((Lq, bd) => {
        var xw = ho(),
            ww = Td(),
            Rw = ww(xw);
        bd.exports = Rw;
    });
    var Sd = f((Pq, Ad) => {
        function Cw(e, t, r, n, i) {
            return (
                i(e, function (o, a, s) {
                    r = n ? ((n = !1), o) : t(r, o, a, s);
                }),
                r
            );
        }
        Ad.exports = Cw;
    });
    var xd = f((Nq, Od) => {
        var Lw = gd(),
            Pw = go(),
            Nw = ct(),
            Dw = Sd(),
            Mw = Ee();
        function Fw(e, t, r) {
            var n = Mw(e) ? Lw : Dw,
                i = arguments.length < 3;
            return n(e, Nw(t, 4), r, i, Pw);
        }
        Od.exports = Fw;
    });
    var Rd = f((Dq, wd) => {
        var qw = Bi(),
            Xw = ct(),
            Gw = Wi(),
            Vw = Math.max,
            kw = Math.min;
        function Uw(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return (
                r !== void 0 &&
                ((i = Gw(r)), (i = r < 0 ? Vw(n + i, 0) : kw(i, n - 1))),
                qw(e, Xw(t, 3), i, !0)
            );
        }
        wd.exports = Uw;
    });
    var Ld = f((Mq, Cd) => {
        var Bw = Ui(),
            Ww = Rd(),
            Hw = Bw(Ww);
        Cd.exports = Hw;
    });
    function Pd(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
    }
    function zw(e, t) {
        if (Pd(e, t)) return !0;
        if (
            typeof e != "object" ||
            e === null ||
            typeof t != "object" ||
            t === null
        )
            return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++)
            if (!Object.hasOwn(t, r[i]) || !Pd(e[r[i]], t[r[i]])) return !1;
        return !0;
    }
    var Eo,
        Nd = se(() => {
            "use strict";
            Eo = zw;
        });
    var Qd = {};
    Ae(Qd, {
        cleanupHTMLElement: () => BR,
        clearAllStyles: () => UR,
        clearObjectCache: () => cR,
        getActionListProgress: () => HR,
        getAffectedElements: () => Io,
        getComputedStyle: () => yR,
        getDestinationValues: () => AR,
        getElementId: () => pR,
        getInstanceId: () => fR,
        getInstanceOrigin: () => _R,
        getItemConfigByKey: () => bR,
        getMaxDurationItemIndex: () => $d,
        getNamespacedParameterId: () => jR,
        getRenderType: () => Kd,
        getStyleProp: () => SR,
        mediaQueriesEqual: () => $R,
        observeStore: () => ER,
        reduceListToGroup: () => zR,
        reifyState: () => hR,
        renderHTMLElement: () => OR,
        shallowEqual: () => Eo,
        shouldAllowMediaQuery: () => YR,
        shouldNamespaceEventParameter: () => KR,
        stringifyTarget: () => QR,
    });
    function cR() {
        pn.clear();
    }
    function fR() {
        return "i" + lR++;
    }
    function pR(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id;
        }
        return "e" + dR++;
    }
    function hR({ events: e, actionLists: t, site: r } = {}) {
        let n = (0, yn.default)(
            e,
            (a, s) => {
                let { eventTypeId: u } = s;
                return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
            },
            {}
        ),
            i = r && r.mediaQueries,
            o = [];
        return (
            i
                ? (o = i.map((a) => a.key))
                : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
            {
                ixData: {
                    events: e,
                    actionLists: t,
                    eventTypeMap: n,
                    mediaQueries: i,
                    mediaQueryKeys: o,
                },
            }
        );
    }
    function ER({ store: e, select: t, onChange: r, comparator: n = gR }) {
        let { getState: i, subscribe: o } = e,
            a = o(u),
            s = t(i());
        function u() {
            let l = t(i());
            if (l == null) {
                a();
                return;
            }
            n(l, s) || ((s = l), r(s, e));
        }
        return a;
    }
    function Fd(e) {
        let t = typeof e;
        if (t === "string") return { id: e };
        if (e != null && t === "object") {
            let {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s,
            } = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s,
            };
        }
        return {};
    }
    function Io({
        config: e,
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i,
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let { targets: o } = e;
        if (Array.isArray(o) && o.length > 0)
            return o.reduce(
                (M, T) =>
                    M.concat(
                        Io({
                            config: { target: T },
                            event: t,
                            eventTarget: r,
                            elementRoot: n,
                            elementApi: i,
                        })
                    ),
                []
            );
        let {
            getValidDocument: a,
            getQuerySelector: s,
            queryDocument: u,
            getChildElements: l,
            getSiblingElements: g,
            matchSelector: p,
            elementContains: d,
            isSiblingNode: y,
        } = i,
            { target: I } = e;
        if (!I) return [];
        let {
            id: _,
            objectId: O,
            selector: m,
            selectorGuids: x,
            appliesTo: A,
            useEventTarget: L,
        } = Fd(I);
        if (O) return [pn.has(O) ? pn.get(O) : pn.set(O, {}).get(O)];
        if (A === hi.PAGE) {
            let M = a(_);
            return M ? [M] : [];
        }
        let w = (t?.action?.config?.affectedElements ?? {})[_ || m] || {},
            G = !!(w.id || w.selector),
            k,
            U,
            W,
            z = t && s(Fd(t.target));
        if (
            (G
                ? ((k = w.limitAffectedElements), (U = z), (W = s(w)))
                : (U = W = s({ id: _, selector: m, selectorGuids: x })),
                t && L)
        ) {
            let M = r && (W || L === !0) ? [r] : u(z);
            if (W) {
                if (L === aR) return u(W).filter((T) => M.some((D) => d(T, D)));
                if (L === Dd) return u(W).filter((T) => M.some((D) => d(D, T)));
                if (L === Md) return u(W).filter((T) => M.some((D) => y(D, T)));
            }
            return M;
        }
        return U == null || W == null
            ? []
            : Xe && n
                ? u(W).filter((M) => n.contains(M))
                : k === Dd
                    ? u(U, W)
                    : k === oR
                        ? l(u(U)).filter(p(W))
                        : k === Md
                            ? g(u(U)).filter(p(W))
                            : u(W);
    }
    function yR({ element: e, actionItem: t }) {
        if (!Xe) return {};
        let { actionTypeId: r } = t;
        switch (r) {
            case kt:
            case Ut:
            case Bt:
            case Wt:
            case vn:
                return window.getComputedStyle(e);
            default:
                return {};
        }
    }
    function _R(e, t = {}, r = {}, n, i) {
        let { getStyle: o } = i,
            { actionTypeId: a } = n;
        if (yt(a)) return uo(a)(t[a], n);
        switch (n.actionTypeId) {
            case Xt:
            case Gt:
            case Vt:
            case mr:
                return t[n.actionTypeId] || To[n.actionTypeId];
            case vr:
                return mR(t[n.actionTypeId], n.config.filters);
            case _r:
                return vR(t[n.actionTypeId], n.config.fontVariations);
            case Wd:
                return { value: (0, rt.default)(parseFloat(o(e, gn)), 1) };
            case kt: {
                let s = o(e, je),
                    u = o(e, Ye),
                    l,
                    g;
                return (
                    n.config.widthUnit === ft
                        ? (l = qd.test(s) ? parseFloat(s) : parseFloat(r.width))
                        : (l = (0, rt.default)(parseFloat(s), parseFloat(r.width))),
                    n.config.heightUnit === ft
                        ? (g = qd.test(u) ? parseFloat(u) : parseFloat(r.height))
                        : (g = (0, rt.default)(parseFloat(u), parseFloat(r.height))),
                    { widthValue: l, heightValue: g }
                );
            }
            case Ut:
            case Bt:
            case Wt:
                return GR({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: o,
                });
            case vn:
                return { value: (0, rt.default)(o(e, En), r.display) };
            case uR:
                return t[n.actionTypeId] || { value: 0 };
            default:
                return;
        }
    }
    function AR({ element: e, actionItem: t, elementApi: r }) {
        if (yt(t.actionTypeId)) return co(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case Xt:
            case Gt:
            case Vt:
            case mr: {
                let { xValue: n, yValue: i, zValue: o } = t.config;
                return { xValue: n, yValue: i, zValue: o };
            }
            case kt: {
                let { getStyle: n, setStyle: i, getProperty: o } = r,
                    { widthUnit: a, heightUnit: s } = t.config,
                    { widthValue: u, heightValue: l } = t.config;
                if (!Xe) return { widthValue: u, heightValue: l };
                if (a === ft) {
                    let g = n(e, je);
                    i(e, je, ""), (u = o(e, "offsetWidth")), i(e, je, g);
                }
                if (s === ft) {
                    let g = n(e, Ye);
                    i(e, Ye, ""), (l = o(e, "offsetHeight")), i(e, Ye, g);
                }
                return { widthValue: u, heightValue: l };
            }
            case Ut:
            case Bt:
            case Wt: {
                let {
                    rValue: n,
                    gValue: i,
                    bValue: o,
                    aValue: a,
                    globalSwatchId: s,
                } = t.config;
                if (s && s.startsWith("--")) {
                    let { getStyle: u } = r,
                        l = u(e, s),
                        g = (0, Vd.normalizeColor)(l);
                    return {
                        rValue: g.red,
                        gValue: g.green,
                        bValue: g.blue,
                        aValue: g.alpha,
                    };
                }
                return { rValue: n, gValue: i, bValue: o, aValue: a };
            }
            case vr:
                return t.config.filters.reduce(IR, {});
            case _r:
                return t.config.fontVariations.reduce(TR, {});
            default: {
                let { value: n } = t.config;
                return { value: n };
            }
        }
    }
    function Kd(e) {
        if (/^TRANSFORM_/.test(e)) return Ud;
        if (/^STYLE_/.test(e)) return vo;
        if (/^GENERAL_/.test(e)) return mo;
        if (/^PLUGIN_/.test(e)) return Bd;
    }
    function SR(e, t) {
        return e === vo ? t.replace("STYLE_", "").toLowerCase() : null;
    }
    function OR(e, t, r, n, i, o, a, s, u) {
        switch (s) {
            case Ud:
                return LR(e, t, r, i, a);
            case vo:
                return VR(e, t, r, i, o, a);
            case mo:
                return kR(e, i, a);
            case Bd: {
                let { actionTypeId: l } = i;
                if (yt(l)) return lo(l)(u, t, i);
            }
        }
    }
    function LR(e, t, r, n, i) {
        let o = CR.map((s) => {
            let u = To[s],
                {
                    xValue: l = u.xValue,
                    yValue: g = u.yValue,
                    zValue: p = u.zValue,
                    xUnit: d = "",
                    yUnit: y = "",
                    zUnit: I = "",
                } = t[s] || {};
            switch (s) {
                case Xt:
                    return `${Yw}(${l}${d}, ${g}${y}, ${p}${I})`;
                case Gt:
                    return `${$w}(${l}${d}, ${g}${y}, ${p}${I})`;
                case Vt:
                    return `${Qw}(${l}${d}) ${Zw}(${g}${y}) ${Jw}(${p}${I})`;
                case mr:
                    return `${eR}(${l}${d}, ${g}${y})`;
                default:
                    return "";
            }
        }).join(" "),
            { setStyle: a } = i;
        vt(e, lt, i), a(e, lt, o), DR(n, r) && a(e, sn, tR);
    }
    function PR(e, t, r, n) {
        let i = (0, yn.default)(t, (a, s, u) => `${a} ${u}(${s}${RR(u, r)})`, ""),
            { setStyle: o } = n;
        vt(e, gr, n), o(e, gr, i);
    }
    function NR(e, t, r, n) {
        let i = (0, yn.default)(
            t,
            (a, s, u) => (a.push(`"${u}" ${s}`), a),
            []
        ).join(", "),
            { setStyle: o } = n;
        vt(e, Er, n), o(e, Er, i);
    }
    function DR({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
        return (
            (e === Xt && n !== void 0) ||
            (e === Gt && n !== void 0) ||
            (e === Vt && (t !== void 0 || r !== void 0))
        );
    }
    function XR(e, t) {
        let r = e.exec(t);
        return r ? r[1] : "";
    }
    function GR({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
        let i = _o[t],
            o = n(e, i),
            a = FR.test(o) ? o : r[i],
            s = XR(qR, a).split(yr);
        return {
            rValue: (0, rt.default)(parseInt(s[0], 10), 255),
            gValue: (0, rt.default)(parseInt(s[1], 10), 255),
            bValue: (0, rt.default)(parseInt(s[2], 10), 255),
            aValue: (0, rt.default)(parseFloat(s[3]), 1),
        };
    }
    function VR(e, t, r, n, i, o) {
        let { setStyle: a } = o;
        switch (n.actionTypeId) {
            case kt: {
                let { widthUnit: s = "", heightUnit: u = "" } = n.config,
                    { widthValue: l, heightValue: g } = r;
                l !== void 0 && (s === ft && (s = "px"), vt(e, je, o), a(e, je, l + s)),
                    g !== void 0 &&
                    (u === ft && (u = "px"), vt(e, Ye, o), a(e, Ye, g + u));
                break;
            }
            case vr: {
                PR(e, r, n.config, o);
                break;
            }
            case _r: {
                NR(e, r, n.config, o);
                break;
            }
            case Ut:
            case Bt:
            case Wt: {
                let s = _o[n.actionTypeId],
                    u = Math.round(r.rValue),
                    l = Math.round(r.gValue),
                    g = Math.round(r.bValue),
                    p = r.aValue;
                vt(e, s, o),
                    a(e, s, p >= 1 ? `rgb(${u},${l},${g})` : `rgba(${u},${l},${g},${p})`);
                break;
            }
            default: {
                let { unit: s = "" } = n.config;
                vt(e, i, o), a(e, i, r.value + s);
                break;
            }
        }
    }
    function kR(e, t, r) {
        let { setStyle: n } = r;
        switch (t.actionTypeId) {
            case vn: {
                let { value: i } = t.config;
                i === rR && Xe ? n(e, En, zi) : n(e, En, i);
                return;
            }
        }
    }
    function vt(e, t, r) {
        if (!Xe) return;
        let n = zd[t];
        if (!n) return;
        let { getStyle: i, setStyle: o } = r,
            a = i(e, qt);
        if (!a) {
            o(e, qt, n);
            return;
        }
        let s = a.split(yr).map(Hd);
        s.indexOf(n) === -1 && o(e, qt, s.concat(n).join(yr));
    }
    function jd(e, t, r) {
        if (!Xe) return;
        let n = zd[t];
        if (!n) return;
        let { getStyle: i, setStyle: o } = r,
            a = i(e, qt);
        !a ||
            a.indexOf(n) === -1 ||
            o(
                e,
                qt,
                a
                    .split(yr)
                    .map(Hd)
                    .filter((s) => s !== n)
                    .join(yr)
            );
    }
    function UR({ store: e, elementApi: t }) {
        let { ixData: r } = e.getState(),
            { events: n = {}, actionLists: i = {} } = r;
        Object.keys(n).forEach((o) => {
            let a = n[o],
                { config: s } = a.action,
                { actionListId: u } = s,
                l = i[u];
            l && Xd({ actionList: l, event: a, elementApi: t });
        }),
            Object.keys(i).forEach((o) => {
                Xd({ actionList: i[o], elementApi: t });
            });
    }
    function Xd({ actionList: e = {}, event: t, elementApi: r }) {
        let { actionItemGroups: n, continuousParameterGroups: i } = e;
        n &&
            n.forEach((o) => {
                Gd({ actionGroup: o, event: t, elementApi: r });
            }),
            i &&
            i.forEach((o) => {
                let { continuousActionGroups: a } = o;
                a.forEach((s) => {
                    Gd({ actionGroup: s, event: t, elementApi: r });
                });
            });
    }
    function Gd({ actionGroup: e, event: t, elementApi: r }) {
        let { actionItems: n } = e;
        n.forEach((i) => {
            let { actionTypeId: o, config: a } = i,
                s;
            yt(o)
                ? (s = (u) => fo(o)(u, i))
                : (s = Yd({ effect: WR, actionTypeId: o, elementApi: r })),
                Io({ config: a, event: t, elementApi: r }).forEach(s);
        });
    }
    function BR(e, t, r) {
        let { setStyle: n, getStyle: i } = r,
            { actionTypeId: o } = t;
        if (o === kt) {
            let { config: a } = t;
            a.widthUnit === ft && n(e, je, ""), a.heightUnit === ft && n(e, Ye, "");
        }
        i(e, qt) && Yd({ effect: jd, actionTypeId: o, elementApi: r })(e);
    }
    function WR(e, t, r) {
        let { setStyle: n } = r;
        jd(e, t, r), n(e, t, ""), t === lt && n(e, sn, "");
    }
    function $d(e) {
        let t = 0,
            r = 0;
        return (
            e.forEach((n, i) => {
                let { config: o } = n,
                    a = o.delay + o.duration;
                a >= t && ((t = a), (r = i));
            }),
            r
        );
    }
    function HR(e, t) {
        let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
            { actionItem: i, verboseTimeElapsed: o = 0 } = t,
            a = 0,
            s = 0;
        return (
            r.forEach((u, l) => {
                if (n && l === 0) return;
                let { actionItems: g } = u,
                    p = g[$d(g)],
                    { config: d, actionTypeId: y } = p;
                i.id === p.id && (s = a + o);
                let I = Kd(y) === mo ? 0 : d.duration;
                a += d.delay + I;
            }),
            a > 0 ? hr(s / a) : 0
        );
    }
    function zR({ actionList: e, actionItemId: t, rawData: r }) {
        let { actionItemGroups: n, continuousParameterGroups: i } = e,
            o = [],
            a = (s) => (
                o.push((0, mn.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
                s.id === t
            );
        return (
            n && n.some(({ actionItems: s }) => s.some(a)),
            i &&
            i.some((s) => {
                let { continuousActionGroups: u } = s;
                return u.some(({ actionItems: l }) => l.some(a));
            }),
            (0, mn.setIn)(r, ["actionLists"], {
                [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
            })
        );
    }
    function KR(e, { basedOn: t }) {
        return (
            (e === qe.SCROLLING_IN_VIEW && (t === ze.ELEMENT || t == null)) ||
            (e === qe.MOUSE_MOVE && t === ze.ELEMENT)
        );
    }
    function jR(e, t) {
        return e + sR + t;
    }
    function YR(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1;
    }
    function $R(e, t) {
        return Eo(e && e.sort(), t && t.sort());
    }
    function QR(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + yo + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
        return t + yo + r + yo + n;
    }
    var rt,
        yn,
        hn,
        mn,
        Vd,
        Kw,
        jw,
        Yw,
        $w,
        Qw,
        Zw,
        Jw,
        eR,
        tR,
        rR,
        gn,
        gr,
        Er,
        je,
        Ye,
        kd,
        nR,
        iR,
        Dd,
        oR,
        Md,
        aR,
        En,
        qt,
        ft,
        yr,
        sR,
        yo,
        Ud,
        mo,
        vo,
        Bd,
        Xt,
        Gt,
        Vt,
        mr,
        Wd,
        vr,
        _r,
        kt,
        Ut,
        Bt,
        Wt,
        vn,
        uR,
        Hd,
        _o,
        zd,
        pn,
        lR,
        dR,
        gR,
        qd,
        mR,
        vR,
        IR,
        TR,
        bR,
        To,
        xR,
        wR,
        RR,
        CR,
        MR,
        FR,
        qR,
        Yd,
        Zd = se(() => {
            "use strict";
            (rt = ee(pd())), (yn = ee(xd())), (hn = ee(Ld())), (mn = ee(xt()));
            Oe();
            Nd();
            Yi();
            Vd = ee(no());
            po();
            un();
            ({
                BACKGROUND: Kw,
                TRANSFORM: jw,
                TRANSLATE_3D: Yw,
                SCALE_3D: $w,
                ROTATE_X: Qw,
                ROTATE_Y: Zw,
                ROTATE_Z: Jw,
                SKEW: eR,
                PRESERVE_3D: tR,
                FLEX: rR,
                OPACITY: gn,
                FILTER: gr,
                FONT_VARIATION_SETTINGS: Er,
                WIDTH: je,
                HEIGHT: Ye,
                BACKGROUND_COLOR: kd,
                BORDER_COLOR: nR,
                COLOR: iR,
                CHILDREN: Dd,
                IMMEDIATE_CHILDREN: oR,
                SIBLINGS: Md,
                PARENT: aR,
                DISPLAY: En,
                WILL_CHANGE: qt,
                AUTO: ft,
                COMMA_DELIMITER: yr,
                COLON_DELIMITER: sR,
                BAR_DELIMITER: yo,
                RENDER_TRANSFORM: Ud,
                RENDER_GENERAL: mo,
                RENDER_STYLE: vo,
                RENDER_PLUGIN: Bd,
            } = ye),
                ({
                    TRANSFORM_MOVE: Xt,
                    TRANSFORM_SCALE: Gt,
                    TRANSFORM_ROTATE: Vt,
                    TRANSFORM_SKEW: mr,
                    STYLE_OPACITY: Wd,
                    STYLE_FILTER: vr,
                    STYLE_FONT_VARIATION: _r,
                    STYLE_SIZE: kt,
                    STYLE_BACKGROUND_COLOR: Ut,
                    STYLE_BORDER: Bt,
                    STYLE_TEXT_COLOR: Wt,
                    GENERAL_DISPLAY: vn,
                    OBJECT_VALUE: uR,
                } = Se),
                (Hd = (e) => e.trim()),
                (_o = Object.freeze({ [Ut]: kd, [Bt]: nR, [Wt]: iR })),
                (zd = Object.freeze({
                    [lt]: jw,
                    [kd]: Kw,
                    [gn]: gn,
                    [gr]: gr,
                    [je]: je,
                    [Ye]: Ye,
                    [Er]: Er,
                })),
                (pn = new Map());
            lR = 1;
            dR = 1;
            gR = (e, t) => e === t;
            (qd = /px/),
                (mR = (e, t) =>
                    t.reduce(
                        (r, n) => (r[n.type] == null && (r[n.type] = xR[n.type]), r),
                        e || {}
                    )),
                (vR = (e, t) =>
                    t.reduce(
                        (r, n) => (
                            r[n.type] == null &&
                            (r[n.type] = wR[n.type] || n.defaultValue || 0),
                            r
                        ),
                        e || {}
                    ));
            (IR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
                (TR = (e, t) => (t && (e[t.type] = t.value || 0), e)),
                (bR = (e, t, r) => {
                    if (yt(e)) return so(e)(r, t);
                    switch (e) {
                        case vr: {
                            let n = (0, hn.default)(r.filters, ({ type: i }) => i === t);
                            return n ? n.value : 0;
                        }
                        case _r: {
                            let n = (0, hn.default)(
                                r.fontVariations,
                                ({ type: i }) => i === t
                            );
                            return n ? n.value : 0;
                        }
                        default:
                            return r[t];
                    }
                });
            (To = {
                [Xt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
                [Gt]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
                [Vt]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
                [mr]: Object.freeze({ xValue: 0, yValue: 0 }),
            }),
                (xR = Object.freeze({
                    blur: 0,
                    "hue-rotate": 0,
                    invert: 0,
                    grayscale: 0,
                    saturate: 100,
                    sepia: 0,
                    contrast: 100,
                    brightness: 100,
                })),
                (wR = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
                (RR = (e, t) => {
                    let r = (0, hn.default)(t.filters, ({ type: n }) => n === e);
                    if (r && r.unit) return r.unit;
                    switch (e) {
                        case "blur":
                            return "px";
                        case "hue-rotate":
                            return "deg";
                        default:
                            return "%";
                    }
                }),
                (CR = Object.keys(To));
            (MR = "\\(([^)]+)\\)"), (FR = /^rgb/), (qR = RegExp(`rgba?${MR}`));
            Yd =
                ({ effect: e, actionTypeId: t, elementApi: r }) =>
                    (n) => {
                        switch (t) {
                            case Xt:
                            case Gt:
                            case Vt:
                            case mr:
                                e(n, lt, r);
                                break;
                            case vr:
                                e(n, gr, r);
                                break;
                            case _r:
                                e(n, Er, r);
                                break;
                            case Wd:
                                e(n, gn, r);
                                break;
                            case kt:
                                e(n, je, r), e(n, Ye, r);
                                break;
                            case Ut:
                            case Bt:
                            case Wt:
                                e(n, _o[t], r);
                                break;
                            case vn:
                                e(n, En, r);
                                break;
                        }
                    };
        });
    var _t = f((bo) => {
        "use strict";
        Object.defineProperty(bo, "__esModule", { value: !0 });
        function ZR(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }
        ZR(bo, {
            IX2BrowserSupport: function () {
                return JR;
            },
            IX2EasingUtils: function () {
                return tC;
            },
            IX2Easings: function () {
                return eC;
            },
            IX2ElementsReducer: function () {
                return rC;
            },
            IX2VanillaPlugins: function () {
                return nC;
            },
            IX2VanillaUtils: function () {
                return iC;
            },
        });
        var JR = Ht((un(), Ue(Hf))),
            eC = Ht((ji(), Ue(pr))),
            tC = Ht((Yi(), Ue(Zf))),
            rC = Ht((rd(), Ue(td))),
            nC = Ht((po(), Ue(fd))),
            iC = Ht((Zd(), Ue(Qd)));
        function Jd(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap(),
                r = new WeakMap();
            return (Jd = function (n) {
                return n ? r : t;
            })(e);
        }
        function Ht(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || (typeof e != "object" && typeof e != "function"))
                return { default: e };
            var r = Jd(t);
            if (r && r.has(e)) return r.get(e);
            var n = { __proto__: null },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set)
                        ? Object.defineProperty(n, o, a)
                        : (n[o] = e[o]);
                }
            return (n.default = e), r && r.set(e, n), n;
        }
    });
    var In,
        nt,
        oC,
        aC,
        sC,
        uC,
        cC,
        lC,
        _n,
        ep,
        fC,
        dC,
        Ao,
        pC,
        hC,
        gC,
        EC,
        tp,
        rp = se(() => {
            "use strict";
            Oe();
            (In = ee(_t())),
                (nt = ee(xt())),
                ({
                    IX2_RAW_DATA_IMPORTED: oC,
                    IX2_SESSION_STOPPED: aC,
                    IX2_INSTANCE_ADDED: sC,
                    IX2_INSTANCE_STARTED: uC,
                    IX2_INSTANCE_REMOVED: cC,
                    IX2_ANIMATION_FRAME_CHANGED: lC,
                } = he),
                ({
                    optimizeFloat: _n,
                    applyEasing: ep,
                    createBezierEasing: fC,
                } = In.IX2EasingUtils),
                ({ RENDER_GENERAL: dC } = ye),
                ({
                    getItemConfigByKey: Ao,
                    getRenderType: pC,
                    getStyleProp: hC,
                } = In.IX2VanillaUtils),
                (gC = (e, t) => {
                    let {
                        position: r,
                        parameterId: n,
                        actionGroups: i,
                        destinationKeys: o,
                        smoothing: a,
                        restingValue: s,
                        actionTypeId: u,
                        customEasingFn: l,
                        skipMotion: g,
                        skipToValue: p,
                    } = e,
                        { parameters: d } = t.payload,
                        y = Math.max(1 - a, 0.01),
                        I = d[n];
                    I == null && ((y = 1), (I = s));
                    let _ = Math.max(I, 0) || 0,
                        O = _n(_ - r),
                        m = g ? p : _n(r + O * y),
                        x = m * 100;
                    if (m === r && e.current) return e;
                    let A, L, N, w;
                    for (let k = 0, { length: U } = i; k < U; k++) {
                        let { keyframe: W, actionItems: z } = i[k];
                        if ((k === 0 && (A = z[0]), x >= W)) {
                            A = z[0];
                            let M = i[k + 1],
                                T = M && x !== W;
                            (L = T ? M.actionItems[0] : null),
                                T && ((N = W / 100), (w = (M.keyframe - W) / 100));
                        }
                    }
                    let G = {};
                    if (A && !L)
                        for (let k = 0, { length: U } = o; k < U; k++) {
                            let W = o[k];
                            G[W] = Ao(u, W, A.config);
                        }
                    else if (A && L && N !== void 0 && w !== void 0) {
                        let k = (m - N) / w,
                            U = A.config.easing,
                            W = ep(U, k, l);
                        for (let z = 0, { length: M } = o; z < M; z++) {
                            let T = o[z],
                                D = Ao(u, T, A.config),
                                K = (Ao(u, T, L.config) - D) * W + D;
                            G[T] = K;
                        }
                    }
                    return (0, nt.merge)(e, { position: m, current: G });
                }),
                (EC = (e, t) => {
                    let {
                        active: r,
                        origin: n,
                        start: i,
                        immediate: o,
                        renderType: a,
                        verbose: s,
                        actionItem: u,
                        destination: l,
                        destinationKeys: g,
                        pluginDuration: p,
                        instanceDelay: d,
                        customEasingFn: y,
                        skipMotion: I,
                    } = e,
                        _ = u.config.easing,
                        { duration: O, delay: m } = u.config;
                    p != null && (O = p),
                        (m = d ?? m),
                        a === dC ? (O = 0) : (o || I) && (O = m = 0);
                    let { now: x } = t.payload;
                    if (r && n) {
                        let A = x - (i + m);
                        if (s) {
                            let k = x - i,
                                U = O + m,
                                W = _n(Math.min(Math.max(0, k / U), 1));
                            e = (0, nt.set)(e, "verboseTimeElapsed", U * W);
                        }
                        if (A < 0) return e;
                        let L = _n(Math.min(Math.max(0, A / O), 1)),
                            N = ep(_, L, y),
                            w = {},
                            G = null;
                        return (
                            g.length &&
                            (G = g.reduce((k, U) => {
                                let W = l[U],
                                    z = parseFloat(n[U]) || 0,
                                    T = (parseFloat(W) - z) * N + z;
                                return (k[U] = T), k;
                            }, {})),
                            (w.current = G),
                            (w.position = L),
                            L === 1 && ((w.active = !1), (w.complete = !0)),
                            (0, nt.merge)(e, w)
                        );
                    }
                    return e;
                }),
                (tp = (e = Object.freeze({}), t) => {
                    switch (t.type) {
                        case oC:
                            return t.payload.ixInstances || Object.freeze({});
                        case aC:
                            return Object.freeze({});
                        case sC: {
                            let {
                                instanceId: r,
                                elementId: n,
                                actionItem: i,
                                eventId: o,
                                eventTarget: a,
                                eventStateKey: s,
                                actionListId: u,
                                groupIndex: l,
                                isCarrier: g,
                                origin: p,
                                destination: d,
                                immediate: y,
                                verbose: I,
                                continuous: _,
                                parameterId: O,
                                actionGroups: m,
                                smoothing: x,
                                restingValue: A,
                                pluginInstance: L,
                                pluginDuration: N,
                                instanceDelay: w,
                                skipMotion: G,
                                skipToValue: k,
                            } = t.payload,
                                { actionTypeId: U } = i,
                                W = pC(U),
                                z = hC(W, U),
                                M = Object.keys(d).filter(
                                    (D) => d[D] != null && typeof d[D] != "string"
                                ),
                                { easing: T } = i.config;
                            return (0, nt.set)(e, r, {
                                id: r,
                                elementId: n,
                                active: !1,
                                position: 0,
                                start: 0,
                                origin: p,
                                destination: d,
                                destinationKeys: M,
                                immediate: y,
                                verbose: I,
                                current: null,
                                actionItem: i,
                                actionTypeId: U,
                                eventId: o,
                                eventTarget: a,
                                eventStateKey: s,
                                actionListId: u,
                                groupIndex: l,
                                renderType: W,
                                isCarrier: g,
                                styleProp: z,
                                continuous: _,
                                parameterId: O,
                                actionGroups: m,
                                smoothing: x,
                                restingValue: A,
                                pluginInstance: L,
                                pluginDuration: N,
                                instanceDelay: w,
                                skipMotion: G,
                                skipToValue: k,
                                customEasingFn:
                                    Array.isArray(T) && T.length === 4 ? fC(T) : void 0,
                            });
                        }
                        case uC: {
                            let { instanceId: r, time: n } = t.payload;
                            return (0, nt.mergeIn)(e, [r], {
                                active: !0,
                                complete: !1,
                                start: n,
                            });
                        }
                        case cC: {
                            let { instanceId: r } = t.payload;
                            if (!e[r]) return e;
                            let n = {},
                                i = Object.keys(e),
                                { length: o } = i;
                            for (let a = 0; a < o; a++) {
                                let s = i[a];
                                s !== r && (n[s] = e[s]);
                            }
                            return n;
                        }
                        case lC: {
                            let r = e,
                                n = Object.keys(e),
                                { length: i } = n;
                            for (let o = 0; o < i; o++) {
                                let a = n[o],
                                    s = e[a],
                                    u = s.continuous ? gC : EC;
                                r = (0, nt.set)(r, a, u(s, t));
                            }
                            return r;
                        }
                        default:
                            return e;
                    }
                });
        });
    var yC,
        mC,
        vC,
        np,
        ip = se(() => {
            "use strict";
            Oe();
            ({
                IX2_RAW_DATA_IMPORTED: yC,
                IX2_SESSION_STOPPED: mC,
                IX2_PARAMETER_CHANGED: vC,
            } = he),
                (np = (e = {}, t) => {
                    switch (t.type) {
                        case yC:
                            return t.payload.ixParameters || {};
                        case mC:
                            return {};
                        case vC: {
                            let { key: r, value: n } = t.payload;
                            return (e[r] = n), e;
                        }
                        default:
                            return e;
                    }
                });
        });
    var sp = {};
    Ae(sp, { default: () => IC });
    var op,
        ap,
        _C,
        IC,
        up = se(() => {
            "use strict";
            op = ee(pi());
            gs();
            Fs();
            Gs();
            ap = ee(_t());
            rp();
            ip();
            ({ ixElements: _C } = ap.IX2ElementsReducer),
                (IC = (0, op.combineReducers)({
                    ixData: hs,
                    ixRequest: Ms,
                    ixSession: Xs,
                    ixElements: _C,
                    ixInstances: tp,
                    ixParameters: np,
                }));
        });
    var lp = f((Jq, cp) => {
        var TC = st(),
            bC = Ee(),
            AC = et(),
            SC = "[object String]";
        function OC(e) {
            return typeof e == "string" || (!bC(e) && AC(e) && TC(e) == SC);
        }
        cp.exports = OC;
    });
    var dp = f((eX, fp) => {
        var xC = ki(),
            wC = xC("length");
        fp.exports = wC;
    });
    var hp = f((tX, pp) => {
        var RC = "\\ud800-\\udfff",
            CC = "\\u0300-\\u036f",
            LC = "\\ufe20-\\ufe2f",
            PC = "\\u20d0-\\u20ff",
            NC = CC + LC + PC,
            DC = "\\ufe0e\\ufe0f",
            MC = "\\u200d",
            FC = RegExp("[" + MC + RC + NC + DC + "]");
        function qC(e) {
            return FC.test(e);
        }
        pp.exports = qC;
    });
    var bp = f((rX, Tp) => {
        var Ep = "\\ud800-\\udfff",
            XC = "\\u0300-\\u036f",
            GC = "\\ufe20-\\ufe2f",
            VC = "\\u20d0-\\u20ff",
            kC = XC + GC + VC,
            UC = "\\ufe0e\\ufe0f",
            BC = "[" + Ep + "]",
            So = "[" + kC + "]",
            Oo = "\\ud83c[\\udffb-\\udfff]",
            WC = "(?:" + So + "|" + Oo + ")",
            yp = "[^" + Ep + "]",
            mp = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            vp = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            HC = "\\u200d",
            _p = WC + "?",
            Ip = "[" + UC + "]?",
            zC = "(?:" + HC + "(?:" + [yp, mp, vp].join("|") + ")" + Ip + _p + ")*",
            KC = Ip + _p + zC,
            jC = "(?:" + [yp + So + "?", So, mp, vp, BC].join("|") + ")",
            gp = RegExp(Oo + "(?=" + Oo + ")|" + jC + KC, "g");
        function YC(e) {
            for (var t = (gp.lastIndex = 0); gp.test(e);) ++t;
            return t;
        }
        Tp.exports = YC;
    });
    var Sp = f((nX, Ap) => {
        var $C = dp(),
            QC = hp(),
            ZC = bp();
        function JC(e) {
            return QC(e) ? ZC(e) : $C(e);
        }
        Ap.exports = JC;
    });
    var xp = f((iX, Op) => {
        var eL = Qr(),
            tL = Zr(),
            rL = gt(),
            nL = lp(),
            iL = Sp(),
            oL = "[object Map]",
            aL = "[object Set]";
        function sL(e) {
            if (e == null) return 0;
            if (rL(e)) return nL(e) ? iL(e) : e.length;
            var t = tL(e);
            return t == oL || t == aL ? e.size : eL(e).length;
        }
        Op.exports = sL;
    });
    var Rp = f((oX, wp) => {
        var uL = "Expected a function";
        function cL(e) {
            if (typeof e != "function") throw new TypeError(uL);
            return function () {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2]);
                }
                return !e.apply(this, t);
            };
        }
        wp.exports = cL;
    });
    var xo = f((aX, Cp) => {
        var lL = ut(),
            fL = (function () {
                try {
                    var e = lL(Object, "defineProperty");
                    return e({}, "", {}), e;
                } catch { }
            })();
        Cp.exports = fL;
    });
    var wo = f((sX, Pp) => {
        var Lp = xo();
        function dL(e, t, r) {
            t == "__proto__" && Lp
                ? Lp(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
                : (e[t] = r);
        }
        Pp.exports = dL;
    });
    var Dp = f((uX, Np) => {
        var pL = wo(),
            hL = kr(),
            gL = Object.prototype,
            EL = gL.hasOwnProperty;
        function yL(e, t, r) {
            var n = e[t];
            (!(EL.call(e, t) && hL(n, r)) || (r === void 0 && !(t in e))) &&
                pL(e, t, r);
        }
        Np.exports = yL;
    });
    var qp = f((cX, Fp) => {
        var mL = Dp(),
            vL = lr(),
            _L = Kr(),
            Mp = Ke(),
            IL = Mt();
        function TL(e, t, r, n) {
            if (!Mp(e)) return e;
            t = vL(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
                var u = IL(t[i]),
                    l = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype")
                    return e;
                if (i != a) {
                    var g = s[u];
                    (l = n ? n(g, u, s) : void 0),
                        l === void 0 && (l = Mp(g) ? g : _L(t[i + 1]) ? [] : {});
                }
                mL(s, u, l), (s = s[u]);
            }
            return e;
        }
        Fp.exports = TL;
    });
    var Gp = f((lX, Xp) => {
        var bL = tn(),
            AL = qp(),
            SL = lr();
        function OL(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var a = t[n],
                    s = bL(e, a);
                r(s, a) && AL(o, SL(a, e), s);
            }
            return o;
        }
        Xp.exports = OL;
    });
    var kp = f((fX, Vp) => {
        var xL = Hr(),
            wL = ei(),
            RL = Oi(),
            CL = Si(),
            LL = Object.getOwnPropertySymbols,
            PL = LL
                ? function (e) {
                    for (var t = []; e;) xL(t, RL(e)), (e = wL(e));
                    return t;
                }
                : CL;
        Vp.exports = PL;
    });
    var Bp = f((dX, Up) => {
        function NL(e) {
            var t = [];
            if (e != null) for (var r in Object(e)) t.push(r);
            return t;
        }
        Up.exports = NL;
    });
    var Hp = f((pX, Wp) => {
        var DL = Ke(),
            ML = $r(),
            FL = Bp(),
            qL = Object.prototype,
            XL = qL.hasOwnProperty;
        function GL(e) {
            if (!DL(e)) return FL(e);
            var t = ML(e),
                r = [];
            for (var n in e)
                (n == "constructor" && (t || !XL.call(e, n))) || r.push(n);
            return r;
        }
        Wp.exports = GL;
    });
    var Kp = f((hX, zp) => {
        var VL = wi(),
            kL = Hp(),
            UL = gt();
        function BL(e) {
            return UL(e) ? VL(e, !0) : kL(e);
        }
        zp.exports = BL;
    });
    var Yp = f((gX, jp) => {
        var WL = Ai(),
            HL = kp(),
            zL = Kp();
        function KL(e) {
            return WL(e, zL, HL);
        }
        jp.exports = KL;
    });
    var Qp = f((EX, $p) => {
        var jL = Vi(),
            YL = ct(),
            $L = Gp(),
            QL = Yp();
        function ZL(e, t) {
            if (e == null) return {};
            var r = jL(QL(e), function (n) {
                return [n];
            });
            return (
                (t = YL(t)),
                $L(e, r, function (n, i) {
                    return t(n, i[0]);
                })
            );
        }
        $p.exports = ZL;
    });
    var Jp = f((yX, Zp) => {
        var JL = ct(),
            eP = Rp(),
            tP = Qp();
        function rP(e, t) {
            return tP(e, eP(JL(t)));
        }
        Zp.exports = rP;
    });
    var th = f((mX, eh) => {
        var nP = Qr(),
            iP = Zr(),
            oP = ir(),
            aP = Ee(),
            sP = gt(),
            uP = zr(),
            cP = $r(),
            lP = Yr(),
            fP = "[object Map]",
            dP = "[object Set]",
            pP = Object.prototype,
            hP = pP.hasOwnProperty;
        function gP(e) {
            if (e == null) return !0;
            if (
                sP(e) &&
                (aP(e) ||
                    typeof e == "string" ||
                    typeof e.splice == "function" ||
                    uP(e) ||
                    lP(e) ||
                    oP(e))
            )
                return !e.length;
            var t = iP(e);
            if (t == fP || t == dP) return !e.size;
            if (cP(e)) return !nP(e).length;
            for (var r in e) if (hP.call(e, r)) return !1;
            return !0;
        }
        eh.exports = gP;
    });
    var nh = f((vX, rh) => {
        var EP = wo(),
            yP = ho(),
            mP = ct();
        function vP(e, t) {
            var r = {};
            return (
                (t = mP(t, 3)),
                yP(e, function (n, i, o) {
                    EP(r, i, t(n, i, o));
                }),
                r
            );
        }
        rh.exports = vP;
    });
    var oh = f((_X, ih) => {
        function _P(e, t) {
            for (
                var r = -1, n = e == null ? 0 : e.length;
                ++r < n && t(e[r], r, e) !== !1;

            );
            return e;
        }
        ih.exports = _P;
    });
    var sh = f((IX, ah) => {
        var IP = nn();
        function TP(e) {
            return typeof e == "function" ? e : IP;
        }
        ah.exports = TP;
    });
    var ch = f((TX, uh) => {
        var bP = oh(),
            AP = go(),
            SP = sh(),
            OP = Ee();
        function xP(e, t) {
            var r = OP(e) ? bP : AP;
            return r(e, SP(t));
        }
        uh.exports = xP;
    });
    var fh = f((bX, lh) => {
        var wP = Fe(),
            RP = function () {
                return wP.Date.now();
            };
        lh.exports = RP;
    });
    var hh = f((AX, ph) => {
        var CP = Ke(),
            Ro = fh(),
            dh = on(),
            LP = "Expected a function",
            PP = Math.max,
            NP = Math.min;
        function DP(e, t, r) {
            var n,
                i,
                o,
                a,
                s,
                u,
                l = 0,
                g = !1,
                p = !1,
                d = !0;
            if (typeof e != "function") throw new TypeError(LP);
            (t = dh(t) || 0),
                CP(r) &&
                ((g = !!r.leading),
                    (p = "maxWait" in r),
                    (o = p ? PP(dh(r.maxWait) || 0, t) : o),
                    (d = "trailing" in r ? !!r.trailing : d));
            function y(w) {
                var G = n,
                    k = i;
                return (n = i = void 0), (l = w), (a = e.apply(k, G)), a;
            }
            function I(w) {
                return (l = w), (s = setTimeout(m, t)), g ? y(w) : a;
            }
            function _(w) {
                var G = w - u,
                    k = w - l,
                    U = t - G;
                return p ? NP(U, o - k) : U;
            }
            function O(w) {
                var G = w - u,
                    k = w - l;
                return u === void 0 || G >= t || G < 0 || (p && k >= o);
            }
            function m() {
                var w = Ro();
                if (O(w)) return x(w);
                s = setTimeout(m, _(w));
            }
            function x(w) {
                return (s = void 0), d && n ? y(w) : ((n = i = void 0), a);
            }
            function A() {
                s !== void 0 && clearTimeout(s), (l = 0), (n = u = i = s = void 0);
            }
            function L() {
                return s === void 0 ? a : x(Ro());
            }
            function N() {
                var w = Ro(),
                    G = O(w);
                if (((n = arguments), (i = this), (u = w), G)) {
                    if (s === void 0) return I(u);
                    if (p) return clearTimeout(s), (s = setTimeout(m, t)), y(u);
                }
                return s === void 0 && (s = setTimeout(m, t)), a;
            }
            return (N.cancel = A), (N.flush = L), N;
        }
        ph.exports = DP;
    });
    var Eh = f((SX, gh) => {
        var MP = hh(),
            FP = Ke(),
            qP = "Expected a function";
        function XP(e, t, r) {
            var n = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(qP);
            return (
                FP(r) &&
                ((n = "leading" in r ? !!r.leading : n),
                    (i = "trailing" in r ? !!r.trailing : i)),
                MP(e, t, { leading: n, maxWait: t, trailing: i })
            );
        }
        gh.exports = XP;
    });
    var mh = {};
    Ae(mh, {
        actionListPlaybackChanged: () => Kt,
        animationFrameChanged: () => bn,
        clearRequested: () => cN,
        elementStateChanged: () => qo,
        eventListenerAdded: () => Tn,
        eventStateChanged: () => Do,
        instanceAdded: () => Mo,
        instanceRemoved: () => Fo,
        instanceStarted: () => An,
        mediaQueriesDefined: () => Go,
        parameterChanged: () => zt,
        playbackRequested: () => sN,
        previewRequested: () => aN,
        rawDataImported: () => Co,
        sessionInitialized: () => Lo,
        sessionStarted: () => Po,
        sessionStopped: () => No,
        stopRequested: () => uN,
        testFrameRendered: () => lN,
        viewportWidthChanged: () => Xo,
    });
    var yh,
        GP,
        VP,
        kP,
        UP,
        BP,
        WP,
        HP,
        zP,
        KP,
        jP,
        YP,
        $P,
        QP,
        ZP,
        JP,
        eN,
        tN,
        rN,
        nN,
        iN,
        oN,
        Co,
        Lo,
        Po,
        No,
        aN,
        sN,
        uN,
        cN,
        Tn,
        lN,
        Do,
        bn,
        zt,
        Mo,
        An,
        Fo,
        qo,
        Kt,
        Xo,
        Go,
        Sn = se(() => {
            "use strict";
            Oe();
            (yh = ee(_t())),
                ({
                    IX2_RAW_DATA_IMPORTED: GP,
                    IX2_SESSION_INITIALIZED: VP,
                    IX2_SESSION_STARTED: kP,
                    IX2_SESSION_STOPPED: UP,
                    IX2_PREVIEW_REQUESTED: BP,
                    IX2_PLAYBACK_REQUESTED: WP,
                    IX2_STOP_REQUESTED: HP,
                    IX2_CLEAR_REQUESTED: zP,
                    IX2_EVENT_LISTENER_ADDED: KP,
                    IX2_TEST_FRAME_RENDERED: jP,
                    IX2_EVENT_STATE_CHANGED: YP,
                    IX2_ANIMATION_FRAME_CHANGED: $P,
                    IX2_PARAMETER_CHANGED: QP,
                    IX2_INSTANCE_ADDED: ZP,
                    IX2_INSTANCE_STARTED: JP,
                    IX2_INSTANCE_REMOVED: eN,
                    IX2_ELEMENT_STATE_CHANGED: tN,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: rN,
                    IX2_VIEWPORT_WIDTH_CHANGED: nN,
                    IX2_MEDIA_QUERIES_DEFINED: iN,
                } = he),
                ({ reifyState: oN } = yh.IX2VanillaUtils),
                (Co = (e) => ({ type: GP, payload: { ...oN(e) } })),
                (Lo = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
                    type: VP,
                    payload: { hasBoundaryNodes: e, reducedMotion: t },
                })),
                (Po = () => ({ type: kP })),
                (No = () => ({ type: UP })),
                (aN = ({ rawData: e, defer: t }) => ({
                    type: BP,
                    payload: { defer: t, rawData: e },
                })),
                (sN = ({
                    actionTypeId: e = Se.GENERAL_START_ACTION,
                    actionListId: t,
                    actionItemId: r,
                    eventId: n,
                    allowEvents: i,
                    immediate: o,
                    testManual: a,
                    verbose: s,
                    rawData: u,
                }) => ({
                    type: WP,
                    payload: {
                        actionTypeId: e,
                        actionListId: t,
                        actionItemId: r,
                        testManual: a,
                        eventId: n,
                        allowEvents: i,
                        immediate: o,
                        verbose: s,
                        rawData: u,
                    },
                })),
                (uN = (e) => ({ type: HP, payload: { actionListId: e } })),
                (cN = () => ({ type: zP })),
                (Tn = (e, t) => ({
                    type: KP,
                    payload: { target: e, listenerParams: t },
                })),
                (lN = (e = 1) => ({ type: jP, payload: { step: e } })),
                (Do = (e, t) => ({ type: YP, payload: { stateKey: e, newState: t } })),
                (bn = (e, t) => ({ type: $P, payload: { now: e, parameters: t } })),
                (zt = (e, t) => ({ type: QP, payload: { key: e, value: t } })),
                (Mo = (e) => ({ type: ZP, payload: { ...e } })),
                (An = (e, t) => ({ type: JP, payload: { instanceId: e, time: t } })),
                (Fo = (e) => ({ type: eN, payload: { instanceId: e } })),
                (qo = (e, t, r, n) => ({
                    type: tN,
                    payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
                })),
                (Kt = ({ actionListId: e, isPlaying: t }) => ({
                    type: rN,
                    payload: { actionListId: e, isPlaying: t },
                })),
                (Xo = ({ width: e, mediaQueries: t }) => ({
                    type: nN,
                    payload: { width: e, mediaQueries: t },
                })),
                (Go = () => ({ type: iN }));
        });
    var Te = {};
    Ae(Te, {
        elementContains: () => Uo,
        getChildElements: () => _N,
        getClosestElement: () => Ir,
        getProperty: () => gN,
        getQuerySelector: () => ko,
        getRefType: () => Bo,
        getSiblingElements: () => IN,
        getStyle: () => hN,
        getValidDocument: () => yN,
        isSiblingNode: () => vN,
        matchSelector: () => EN,
        queryDocument: () => mN,
        setStyle: () => pN,
    });
    function pN(e, t, r) {
        e.style[t] = r;
    }
    function hN(e, t) {
        return t.startsWith("--")
            ? window.getComputedStyle(document.documentElement).getPropertyValue(t)
            : e.style[t];
    }
    function gN(e, t) {
        return e[t];
    }
    function EN(e) {
        return (t) => t[Vo](e);
    }
    function ko({ id: e, selector: t }) {
        if (e) {
            let r = e;
            if (e.indexOf(vh) !== -1) {
                let n = e.split(vh),
                    i = n[0];
                if (((r = n[1]), i !== document.documentElement.getAttribute(Ih)))
                    return null;
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
        }
        return t;
    }
    function yN(e) {
        return e == null || e === document.documentElement.getAttribute(Ih)
            ? document
            : null;
    }
    function mN(e, t) {
        return Array.prototype.slice.call(
            document.querySelectorAll(t ? e + " " + t : e)
        );
    }
    function Uo(e, t) {
        return e.contains(t);
    }
    function vN(e, t) {
        return e !== t && e.parentNode === t.parentNode;
    }
    function _N(e) {
        let t = [];
        for (let r = 0, { length: n } = e || []; r < n; r++) {
            let { children: i } = e[r],
                { length: o } = i;
            if (o) for (let a = 0; a < o; a++) t.push(i[a]);
        }
        return t;
    }
    function IN(e = []) {
        let t = [],
            r = [];
        for (let n = 0, { length: i } = e; n < i; n++) {
            let { parentNode: o } = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
                continue;
            r.push(o);
            let a = o.firstElementChild;
            for (; a != null;)
                e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
        }
        return t;
    }
    function Bo(e) {
        return e != null && typeof e == "object"
            ? e instanceof Element
                ? fN
                : dN
            : null;
    }
    var _h,
        Vo,
        vh,
        fN,
        dN,
        Ih,
        Ir,
        Th = se(() => {
            "use strict";
            _h = ee(_t());
            Oe();
            ({ ELEMENT_MATCHES: Vo } = _h.IX2BrowserSupport),
                ({
                    IX2_ID_DELIMITER: vh,
                    HTML_ELEMENT: fN,
                    PLAIN_OBJECT: dN,
                    WF_PAGE: Ih,
                } = ye);
            Ir = Element.prototype.closest
                ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
                : (e, t) => {
                    if (!document.documentElement.contains(e)) return null;
                    let r = e;
                    do {
                        if (r[Vo] && r[Vo](t)) return r;
                        r = r.parentNode;
                    } while (r != null);
                    return null;
                };
        });
    var Wo = f((wX, Ah) => {
        var TN = Ke(),
            bh = Object.create,
            bN = (function () {
                function e() { }
                return function (t) {
                    if (!TN(t)) return {};
                    if (bh) return bh(t);
                    e.prototype = t;
                    var r = new e();
                    return (e.prototype = void 0), r;
                };
            })();
        Ah.exports = bN;
    });
    var On = f((RX, Sh) => {
        function AN() { }
        Sh.exports = AN;
    });
    var wn = f((CX, Oh) => {
        var SN = Wo(),
            ON = On();
        function xn(e, t) {
            (this.__wrapped__ = e),
                (this.__actions__ = []),
                (this.__chain__ = !!t),
                (this.__index__ = 0),
                (this.__values__ = void 0);
        }
        xn.prototype = SN(ON.prototype);
        xn.prototype.constructor = xn;
        Oh.exports = xn;
    });
    var Ch = f((LX, Rh) => {
        var xh = At(),
            xN = ir(),
            wN = Ee(),
            wh = xh ? xh.isConcatSpreadable : void 0;
        function RN(e) {
            return wN(e) || xN(e) || !!(wh && e && e[wh]);
        }
        Rh.exports = RN;
    });
    var Nh = f((PX, Ph) => {
        var CN = Hr(),
            LN = Ch();
        function Lh(e, t, r, n, i) {
            var o = -1,
                a = e.length;
            for (r || (r = LN), i || (i = []); ++o < a;) {
                var s = e[o];
                t > 0 && r(s)
                    ? t > 1
                        ? Lh(s, t - 1, r, n, i)
                        : CN(i, s)
                    : n || (i[i.length] = s);
            }
            return i;
        }
        Ph.exports = Lh;
    });
    var Mh = f((NX, Dh) => {
        var PN = Nh();
        function NN(e) {
            var t = e == null ? 0 : e.length;
            return t ? PN(e, 1) : [];
        }
        Dh.exports = NN;
    });
    var qh = f((DX, Fh) => {
        function DN(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2]);
            }
            return e.apply(t, r);
        }
        Fh.exports = DN;
    });
    var Vh = f((MX, Gh) => {
        var MN = qh(),
            Xh = Math.max;
        function FN(e, t, r) {
            return (
                (t = Xh(t === void 0 ? e.length - 1 : t, 0)),
                function () {
                    for (
                        var n = arguments, i = -1, o = Xh(n.length - t, 0), a = Array(o);
                        ++i < o;

                    )
                        a[i] = n[t + i];
                    i = -1;
                    for (var s = Array(t + 1); ++i < t;) s[i] = n[i];
                    return (s[t] = r(a)), MN(e, this, s);
                }
            );
        }
        Gh.exports = FN;
    });
    var Uh = f((FX, kh) => {
        function qN(e) {
            return function () {
                return e;
            };
        }
        kh.exports = qN;
    });
    var Hh = f((qX, Wh) => {
        var XN = Uh(),
            Bh = xo(),
            GN = nn(),
            VN = Bh
                ? function (e, t) {
                    return Bh(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: XN(t),
                        writable: !0,
                    });
                }
                : GN;
        Wh.exports = VN;
    });
    var Kh = f((XX, zh) => {
        var kN = 800,
            UN = 16,
            BN = Date.now;
        function WN(e) {
            var t = 0,
                r = 0;
            return function () {
                var n = BN(),
                    i = UN - (n - r);
                if (((r = n), i > 0)) {
                    if (++t >= kN) return arguments[0];
                } else t = 0;
                return e.apply(void 0, arguments);
            };
        }
        zh.exports = WN;
    });
    var Yh = f((GX, jh) => {
        var HN = Hh(),
            zN = Kh(),
            KN = zN(HN);
        jh.exports = KN;
    });
    var Qh = f((VX, $h) => {
        var jN = Mh(),
            YN = Vh(),
            $N = Yh();
        function QN(e) {
            return $N(YN(e, void 0, jN), e + "");
        }
        $h.exports = QN;
    });
    var eg = f((kX, Jh) => {
        var Zh = Ri(),
            ZN = Zh && new Zh();
        Jh.exports = ZN;
    });
    var rg = f((UX, tg) => {
        function JN() { }
        tg.exports = JN;
    });
    var Ho = f((BX, ig) => {
        var ng = eg(),
            eD = rg(),
            tD = ng
                ? function (e) {
                    return ng.get(e);
                }
                : eD;
        ig.exports = tD;
    });
    var ag = f((WX, og) => {
        var rD = {};
        og.exports = rD;
    });
    var zo = f((HX, ug) => {
        var sg = ag(),
            nD = Object.prototype,
            iD = nD.hasOwnProperty;
        function oD(e) {
            for (
                var t = e.name + "", r = sg[t], n = iD.call(sg, t) ? r.length : 0;
                n--;

            ) {
                var i = r[n],
                    o = i.func;
                if (o == null || o == e) return i.name;
            }
            return t;
        }
        ug.exports = oD;
    });
    var Cn = f((zX, cg) => {
        var aD = Wo(),
            sD = On(),
            uD = 4294967295;
        function Rn(e) {
            (this.__wrapped__ = e),
                (this.__actions__ = []),
                (this.__dir__ = 1),
                (this.__filtered__ = !1),
                (this.__iteratees__ = []),
                (this.__takeCount__ = uD),
                (this.__views__ = []);
        }
        Rn.prototype = aD(sD.prototype);
        Rn.prototype.constructor = Rn;
        cg.exports = Rn;
    });
    var fg = f((KX, lg) => {
        function cD(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t;
        }
        lg.exports = cD;
    });
    var pg = f((jX, dg) => {
        var lD = Cn(),
            fD = wn(),
            dD = fg();
        function pD(e) {
            if (e instanceof lD) return e.clone();
            var t = new fD(e.__wrapped__, e.__chain__);
            return (
                (t.__actions__ = dD(e.__actions__)),
                (t.__index__ = e.__index__),
                (t.__values__ = e.__values__),
                t
            );
        }
        dg.exports = pD;
    });
    var Eg = f((YX, gg) => {
        var hD = Cn(),
            hg = wn(),
            gD = On(),
            ED = Ee(),
            yD = et(),
            mD = pg(),
            vD = Object.prototype,
            _D = vD.hasOwnProperty;
        function Ln(e) {
            if (yD(e) && !ED(e) && !(e instanceof hD)) {
                if (e instanceof hg) return e;
                if (_D.call(e, "__wrapped__")) return mD(e);
            }
            return new hg(e);
        }
        Ln.prototype = gD.prototype;
        Ln.prototype.constructor = Ln;
        gg.exports = Ln;
    });
    var mg = f(($X, yg) => {
        var ID = Cn(),
            TD = Ho(),
            bD = zo(),
            AD = Eg();
        function SD(e) {
            var t = bD(e),
                r = AD[t];
            if (typeof r != "function" || !(t in ID.prototype)) return !1;
            if (e === r) return !0;
            var n = TD(r);
            return !!n && e === n[0];
        }
        yg.exports = SD;
    });
    var Tg = f((QX, Ig) => {
        var vg = wn(),
            OD = Qh(),
            xD = Ho(),
            Ko = zo(),
            wD = Ee(),
            _g = mg(),
            RD = "Expected a function",
            CD = 8,
            LD = 32,
            PD = 128,
            ND = 256;
        function DD(e) {
            return OD(function (t) {
                var r = t.length,
                    n = r,
                    i = vg.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError(RD);
                    if (i && !a && Ko(o) == "wrapper") var a = new vg([], !0);
                }
                for (n = a ? n : r; ++n < r;) {
                    o = t[n];
                    var s = Ko(o),
                        u = s == "wrapper" ? xD(o) : void 0;
                    u &&
                        _g(u[0]) &&
                        u[1] == (PD | CD | LD | ND) &&
                        !u[4].length &&
                        u[9] == 1
                        ? (a = a[Ko(u[0])].apply(a, u[3]))
                        : (a = o.length == 1 && _g(o) ? a[s]() : a.thru(o));
                }
                return function () {
                    var l = arguments,
                        g = l[0];
                    if (a && l.length == 1 && wD(g)) return a.plant(g).value();
                    for (var p = 0, d = r ? t[p].apply(this, l) : g; ++p < r;)
                        d = t[p].call(this, d);
                    return d;
                };
            });
        }
        Ig.exports = DD;
    });
    var Ag = f((ZX, bg) => {
        var MD = Tg(),
            FD = MD();
        bg.exports = FD;
    });
    var Og = f((JX, Sg) => {
        function qD(e, t, r) {
            return (
                e === e &&
                (r !== void 0 && (e = e <= r ? e : r),
                    t !== void 0 && (e = e >= t ? e : t)),
                e
            );
        }
        Sg.exports = qD;
    });
    var wg = f((eG, xg) => {
        var XD = Og(),
            jo = on();
        function GD(e, t, r) {
            return (
                r === void 0 && ((r = t), (t = void 0)),
                r !== void 0 && ((r = jo(r)), (r = r === r ? r : 0)),
                t !== void 0 && ((t = jo(t)), (t = t === t ? t : 0)),
                XD(jo(e), t, r)
            );
        }
        xg.exports = GD;
    });
    var qg,
        Xg,
        Gg,
        Vg,
        VD,
        kD,
        UD,
        BD,
        WD,
        HD,
        zD,
        KD,
        jD,
        YD,
        $D,
        QD,
        ZD,
        JD,
        eM,
        kg,
        Ug,
        tM,
        rM,
        nM,
        Bg,
        iM,
        oM,
        Wg,
        aM,
        Yo,
        Hg,
        Rg,
        Cg,
        zg,
        br,
        sM,
        $e,
        Kg,
        uM,
        we,
        Ge,
        Ar,
        jg,
        $o,
        Lg,
        Qo,
        cM,
        Tr,
        lM,
        fM,
        dM,
        Yg,
        Pg,
        pM,
        Ng,
        hM,
        gM,
        EM,
        Dg,
        Pn,
        Nn,
        Mg,
        Fg,
        $g,
        Qg = se(() => {
            "use strict";
            (qg = ee(Ag())), (Xg = ee(rn())), (Gg = ee(wg()));
            Oe();
            Zo();
            Sn();
            (Vg = ee(_t())),
                ({
                    MOUSE_CLICK: VD,
                    MOUSE_SECOND_CLICK: kD,
                    MOUSE_DOWN: UD,
                    MOUSE_UP: BD,
                    MOUSE_OVER: WD,
                    MOUSE_OUT: HD,
                    DROPDOWN_CLOSE: zD,
                    DROPDOWN_OPEN: KD,
                    SLIDER_ACTIVE: jD,
                    SLIDER_INACTIVE: YD,
                    TAB_ACTIVE: $D,
                    TAB_INACTIVE: QD,
                    NAVBAR_CLOSE: ZD,
                    NAVBAR_OPEN: JD,
                    MOUSE_MOVE: eM,
                    PAGE_SCROLL_DOWN: kg,
                    SCROLL_INTO_VIEW: Ug,
                    SCROLL_OUT_OF_VIEW: tM,
                    PAGE_SCROLL_UP: rM,
                    SCROLLING_IN_VIEW: nM,
                    PAGE_FINISH: Bg,
                    ECOMMERCE_CART_CLOSE: iM,
                    ECOMMERCE_CART_OPEN: oM,
                    PAGE_START: Wg,
                    PAGE_SCROLL: aM,
                } = qe),
                (Yo = "COMPONENT_ACTIVE"),
                (Hg = "COMPONENT_INACTIVE"),
                ({ COLON_DELIMITER: Rg } = ye),
                ({ getNamespacedParameterId: Cg } = Vg.IX2VanillaUtils),
                (zg = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
                (br = zg(({ element: e, nativeEvent: t }) => e === t.target)),
                (sM = zg(({ element: e, nativeEvent: t }) => e.contains(t.target))),
                ($e = (0, qg.default)([br, sM])),
                (Kg = (e, t) => {
                    if (t) {
                        let { ixData: r } = e.getState(),
                            { events: n } = r,
                            i = n[t];
                        if (i && !cM[i.eventTypeId]) return i;
                    }
                    return null;
                }),
                (uM = ({ store: e, event: t }) => {
                    let { action: r } = t,
                        { autoStopEventId: n } = r.config;
                    return !!Kg(e, n);
                }),
                (we = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
                    let { action: o, id: a } = t,
                        { actionListId: s, autoStopEventId: u } = o.config,
                        l = Kg(e, u);
                    return (
                        l &&
                        jt({
                            store: e,
                            eventId: u,
                            eventTarget: r,
                            eventStateKey: u + Rg + n.split(Rg)[1],
                            actionListId: (0, Xg.default)(l, "action.config.actionListId"),
                        }),
                        jt({
                            store: e,
                            eventId: a,
                            eventTarget: r,
                            eventStateKey: n,
                            actionListId: s,
                        }),
                        Sr({
                            store: e,
                            eventId: a,
                            eventTarget: r,
                            eventStateKey: n,
                            actionListId: s,
                        }),
                        i
                    );
                }),
                (Ge = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
                (Ar = { handler: Ge($e, we) }),
                (jg = { ...Ar, types: [Yo, Hg].join(" ") }),
                ($o = [
                    { target: window, types: "resize orientationchange", throttle: !0 },
                    {
                        target: document,
                        types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                        throttle: !0,
                    },
                ]),
                (Lg = "mouseover mouseout"),
                (Qo = { types: $o }),
                (cM = { PAGE_START: Wg, PAGE_FINISH: Bg }),
                (Tr = (() => {
                    let e = window.pageXOffset !== void 0,
                        r =
                            document.compatMode === "CSS1Compat"
                                ? document.documentElement
                                : document.body;
                    return () => ({
                        scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                        scrollTop: e ? window.pageYOffset : r.scrollTop,
                        stiffScrollTop: (0, Gg.default)(
                            e ? window.pageYOffset : r.scrollTop,
                            0,
                            r.scrollHeight - window.innerHeight
                        ),
                        scrollWidth: r.scrollWidth,
                        scrollHeight: r.scrollHeight,
                        clientWidth: r.clientWidth,
                        clientHeight: r.clientHeight,
                        innerWidth: window.innerWidth,
                        innerHeight: window.innerHeight,
                    });
                })()),
                (lM = (e, t) =>
                    !(
                        e.left > t.right ||
                        e.right < t.left ||
                        e.top > t.bottom ||
                        e.bottom < t.top
                    )),
                (fM = ({ element: e, nativeEvent: t }) => {
                    let { type: r, target: n, relatedTarget: i } = t,
                        o = e.contains(n);
                    if (r === "mouseover" && o) return !0;
                    let a = e.contains(i);
                    return !!(r === "mouseout" && o && a);
                }),
                (dM = (e) => {
                    let {
                        element: t,
                        event: { config: r },
                    } = e,
                        { clientWidth: n, clientHeight: i } = Tr(),
                        o = r.scrollOffsetValue,
                        u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
                    return lM(t.getBoundingClientRect(), {
                        left: 0,
                        top: u,
                        right: n,
                        bottom: i - u,
                    });
                }),
                (Yg = (e) => (t, r) => {
                    let { type: n } = t.nativeEvent,
                        i = [Yo, Hg].indexOf(n) !== -1 ? n === Yo : r.isActive,
                        o = { ...r, isActive: i };
                    return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
                }),
                (Pg = (e) => (t, r) => {
                    let n = { elementHovered: fM(t) };
                    return (
                        ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
                            e(t, n)) ||
                        n
                    );
                }),
                (pM = (e) => (t, r) => {
                    let n = { ...r, elementVisible: dM(t) };
                    return (
                        ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
                            e(t, n)) ||
                        n
                    );
                }),
                (Ng =
                    (e) =>
                        (t, r = {}) => {
                            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = Tr(),
                                {
                                    event: { config: a, eventTypeId: s },
                                } = t,
                                { scrollOffsetValue: u, scrollOffsetUnit: l } = a,
                                g = l === "PX",
                                p = i - o,
                                d = Number((n / p).toFixed(2));
                            if (r && r.percentTop === d) return r;
                            let y = (g ? u : (o * (u || 0)) / 100) / p,
                                I,
                                _,
                                O = 0;
                            r &&
                                ((I = d > r.percentTop),
                                    (_ = r.scrollingDown !== I),
                                    (O = _ ? d : r.anchorTop));
                            let m = s === kg ? d >= O + y : d <= O - y,
                                x = {
                                    ...r,
                                    percentTop: d,
                                    inBounds: m,
                                    anchorTop: O,
                                    scrollingDown: I,
                                };
                            return (r && m && (_ || x.inBounds !== r.inBounds) && e(t, x)) || x;
                        }),
                (hM = (e, t) =>
                    e.left > t.left &&
                    e.left < t.right &&
                    e.top > t.top &&
                    e.top < t.bottom),
                (gM = (e) => (t, r) => {
                    let n = { finished: document.readyState === "complete" };
                    return n.finished && !(r && r.finshed) && e(t), n;
                }),
                (EM = (e) => (t, r) => {
                    let n = { started: !0 };
                    return r || e(t), n;
                }),
                (Dg =
                    (e) =>
                        (t, r = { clickCount: 0 }) => {
                            let n = { clickCount: (r.clickCount % 2) + 1 };
                            return (n.clickCount !== r.clickCount && e(t, n)) || n;
                        }),
                (Pn = (e = !0) => ({
                    ...jg,
                    handler: Ge(
                        e ? $e : br,
                        Yg((t, r) => (r.isActive ? Ar.handler(t, r) : r))
                    ),
                })),
                (Nn = (e = !0) => ({
                    ...jg,
                    handler: Ge(
                        e ? $e : br,
                        Yg((t, r) => (r.isActive ? r : Ar.handler(t, r)))
                    ),
                })),
                (Mg = {
                    ...Qo,
                    handler: pM((e, t) => {
                        let { elementVisible: r } = t,
                            { event: n, store: i } = e,
                            { ixData: o } = i.getState(),
                            { events: a } = o;
                        return !a[n.action.config.autoStopEventId] && t.triggered
                            ? t
                            : (n.eventTypeId === Ug) === r
                                ? (we(e), { ...t, triggered: !0 })
                                : t;
                    }),
                }),
                (Fg = 0.05),
                ($g = {
                    [jD]: Pn(),
                    [YD]: Nn(),
                    [KD]: Pn(),
                    [zD]: Nn(),
                    [JD]: Pn(!1),
                    [ZD]: Nn(!1),
                    [$D]: Pn(),
                    [QD]: Nn(),
                    [oM]: { types: "ecommerce-cart-open", handler: Ge($e, we) },
                    [iM]: { types: "ecommerce-cart-close", handler: Ge($e, we) },
                    [VD]: {
                        types: "click",
                        handler: Ge(
                            $e,
                            Dg((e, { clickCount: t }) => {
                                uM(e) ? t === 1 && we(e) : we(e);
                            })
                        ),
                    },
                    [kD]: {
                        types: "click",
                        handler: Ge(
                            $e,
                            Dg((e, { clickCount: t }) => {
                                t === 2 && we(e);
                            })
                        ),
                    },
                    [UD]: { ...Ar, types: "mousedown" },
                    [BD]: { ...Ar, types: "mouseup" },
                    [WD]: {
                        types: Lg,
                        handler: Ge(
                            $e,
                            Pg((e, t) => {
                                t.elementHovered && we(e);
                            })
                        ),
                    },
                    [HD]: {
                        types: Lg,
                        handler: Ge(
                            $e,
                            Pg((e, t) => {
                                t.elementHovered || we(e);
                            })
                        ),
                    },
                    [eM]: {
                        types: "mousemove mouseout scroll",
                        handler: (
                            {
                                store: e,
                                element: t,
                                eventConfig: r,
                                nativeEvent: n,
                                eventStateKey: i,
                            },
                            o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
                        ) => {
                            let {
                                basedOn: a,
                                selectedAxis: s,
                                continuousParameterGroupId: u,
                                reverse: l,
                                restingState: g = 0,
                            } = r,
                                {
                                    clientX: p = o.clientX,
                                    clientY: d = o.clientY,
                                    pageX: y = o.pageX,
                                    pageY: I = o.pageY,
                                } = n,
                                _ = s === "X_AXIS",
                                O = n.type === "mouseout",
                                m = g / 100,
                                x = u,
                                A = !1;
                            switch (a) {
                                case ze.VIEWPORT: {
                                    m = _
                                        ? Math.min(p, window.innerWidth) / window.innerWidth
                                        : Math.min(d, window.innerHeight) / window.innerHeight;
                                    break;
                                }
                                case ze.PAGE: {
                                    let {
                                        scrollLeft: L,
                                        scrollTop: N,
                                        scrollWidth: w,
                                        scrollHeight: G,
                                    } = Tr();
                                    m = _ ? Math.min(L + y, w) / w : Math.min(N + I, G) / G;
                                    break;
                                }
                                case ze.ELEMENT:
                                default: {
                                    x = Cg(i, u);
                                    let L = n.type.indexOf("mouse") === 0;
                                    if (L && $e({ element: t, nativeEvent: n }) !== !0) break;
                                    let N = t.getBoundingClientRect(),
                                        { left: w, top: G, width: k, height: U } = N;
                                    if (!L && !hM({ left: p, top: d }, N)) break;
                                    (A = !0), (m = _ ? (p - w) / k : (d - G) / U);
                                    break;
                                }
                            }
                            return (
                                O && (m > 1 - Fg || m < Fg) && (m = Math.round(m)),
                                (a !== ze.ELEMENT || A || A !== o.elementHovered) &&
                                ((m = l ? 1 - m : m), e.dispatch(zt(x, m))),
                                {
                                    elementHovered: A,
                                    clientX: p,
                                    clientY: d,
                                    pageX: y,
                                    pageY: I,
                                }
                            );
                        },
                    },
                    [aM]: {
                        types: $o,
                        handler: ({ store: e, eventConfig: t }) => {
                            let { continuousParameterGroupId: r, reverse: n } = t,
                                { scrollTop: i, scrollHeight: o, clientHeight: a } = Tr(),
                                s = i / (o - a);
                            (s = n ? 1 - s : s), e.dispatch(zt(r, s));
                        },
                    },
                    [nM]: {
                        types: $o,
                        handler: (
                            { element: e, store: t, eventConfig: r, eventStateKey: n },
                            i = { scrollPercent: 0 }
                        ) => {
                            let {
                                scrollLeft: o,
                                scrollTop: a,
                                scrollWidth: s,
                                scrollHeight: u,
                                clientHeight: l,
                            } = Tr(),
                                {
                                    basedOn: g,
                                    selectedAxis: p,
                                    continuousParameterGroupId: d,
                                    startsEntering: y,
                                    startsExiting: I,
                                    addEndOffset: _,
                                    addStartOffset: O,
                                    addOffsetValue: m = 0,
                                    endOffsetValue: x = 0,
                                } = r,
                                A = p === "X_AXIS";
                            if (g === ze.VIEWPORT) {
                                let L = A ? o / s : a / u;
                                return (
                                    L !== i.scrollPercent && t.dispatch(zt(d, L)),
                                    { scrollPercent: L }
                                );
                            } else {
                                let L = Cg(n, d),
                                    N = e.getBoundingClientRect(),
                                    w = (O ? m : 0) / 100,
                                    G = (_ ? x : 0) / 100;
                                (w = y ? w : 1 - w), (G = I ? G : 1 - G);
                                let k = N.top + Math.min(N.height * w, l),
                                    W = N.top + N.height * G - k,
                                    z = Math.min(l + W, u),
                                    T = Math.min(Math.max(0, l - k), z) / z;
                                return (
                                    T !== i.scrollPercent && t.dispatch(zt(L, T)),
                                    { scrollPercent: T }
                                );
                            }
                        },
                    },
                    [Ug]: Mg,
                    [tM]: Mg,
                    [kg]: {
                        ...Qo,
                        handler: Ng((e, t) => {
                            t.scrollingDown && we(e);
                        }),
                    },
                    [rM]: {
                        ...Qo,
                        handler: Ng((e, t) => {
                            t.scrollingDown || we(e);
                        }),
                    },
                    [Bg]: {
                        types: "readystatechange IX2_PAGE_UPDATE",
                        handler: Ge(br, gM(we)),
                    },
                    [Wg]: {
                        types: "readystatechange IX2_PAGE_UPDATE",
                        handler: Ge(br, EM(we)),
                    },
                });
        });
    var hE = {};
    Ae(hE, {
        observeRequests: () => FM,
        startActionGroup: () => Sr,
        startEngine: () => Gn,
        stopActionGroup: () => jt,
        stopAllActionGroups: () => fE,
        stopEngine: () => Vn,
    });
    function FM(e) {
        It({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: GM }),
            It({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: VM }),
            It({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: kM }),
            It({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: UM });
    }
    function qM(e) {
        It({
            store: e,
            select: ({ ixSession: t }) => t.mediaQueryKey,
            onChange: () => {
                Vn(e),
                    sE({ store: e, elementApi: Te }),
                    Gn({ store: e, allowEvents: !0 }),
                    uE();
            },
        });
    }
    function XM(e, t) {
        let r = It({
            store: e,
            select: ({ ixSession: n }) => n.tick,
            onChange: (n) => {
                t(n), r();
            },
        });
    }
    function GM({ rawData: e, defer: t }, r) {
        let n = () => {
            Gn({ store: r, rawData: e, allowEvents: !0 }), uE();
        };
        t ? setTimeout(n, 0) : n();
    }
    function uE() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
    }
    function VM(e, t) {
        let {
            actionTypeId: r,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: a,
            immediate: s,
            testManual: u,
            verbose: l = !0,
        } = e,
            { rawData: g } = e;
        if (n && i && g && s) {
            let p = g.actionLists[n];
            p && (g = SM({ actionList: p, actionItemId: i, rawData: g }));
        }
        if (
            (Gn({ store: t, rawData: g, allowEvents: a, testManual: u }),
                (n && r === Se.GENERAL_START_ACTION) || Jo(r))
        ) {
            jt({ store: t, actionListId: n }),
                lE({ store: t, actionListId: n, eventId: o });
            let p = Sr({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: s,
                verbose: l,
            });
            l && p && t.dispatch(Kt({ actionListId: n, isPlaying: !s }));
        }
    }
    function kM({ actionListId: e }, t) {
        e ? jt({ store: t, actionListId: e }) : fE({ store: t }), Vn(t);
    }
    function UM(e, t) {
        Vn(t), sE({ store: t, elementApi: Te });
    }
    function Gn({ store: e, rawData: t, allowEvents: r, testManual: n }) {
        let { ixSession: i } = e.getState();
        t && e.dispatch(Co(t)),
            i.active ||
            (e.dispatch(
                Lo({
                    hasBoundaryNodes: !!document.querySelector(Mn),
                    reducedMotion:
                        document.body.hasAttribute("data-wf-ix-vacation") &&
                        window.matchMedia("(prefers-reduced-motion)").matches,
                })
            ),
                r &&
                (jM(e), BM(), e.getState().ixSession.hasDefinedMediaQueries && qM(e)),
                e.dispatch(Po()),
                WM(e, n));
    }
    function BM() {
        let { documentElement: e } = document;
        e.className.indexOf(Zg) === -1 && (e.className += ` ${Zg}`);
    }
    function WM(e, t) {
        let r = (n) => {
            let { ixSession: i, ixParameters: o } = e.getState();
            i.active &&
                (e.dispatch(bn(n, o)), t ? XM(e, r) : requestAnimationFrame(r));
        };
        r(window.performance.now());
    }
    function Vn(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
            let { eventListeners: r } = t;
            r.forEach(HM), RM(), e.dispatch(No());
        }
    }
    function HM({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
    }
    function zM({
        store: e,
        eventStateKey: t,
        eventTarget: r,
        eventId: n,
        eventConfig: i,
        actionListId: o,
        parameterGroup: a,
        smoothing: s,
        restingValue: u,
    }) {
        let { ixData: l, ixSession: g } = e.getState(),
            { events: p } = l,
            d = p[n],
            { eventTypeId: y } = d,
            I = {},
            _ = {},
            O = [],
            { continuousActionGroups: m } = a,
            { id: x } = a;
        OM(y, i) && (x = xM(t, x));
        let A = g.hasBoundaryNodes && r ? Ir(r, Mn) : null;
        m.forEach((L) => {
            let { keyframe: N, actionItems: w } = L;
            w.forEach((G) => {
                let { actionTypeId: k } = G,
                    { target: U } = G.config;
                if (!U) return;
                let W = U.boundaryMode ? A : null,
                    z = CM(U) + ea + k;
                if (((_[z] = KM(_[z], N, G)), !I[z])) {
                    I[z] = !0;
                    let { config: M } = G;
                    Fn({
                        config: M,
                        event: d,
                        eventTarget: r,
                        elementRoot: W,
                        elementApi: Te,
                    }).forEach((T) => {
                        O.push({ element: T, key: z });
                    });
                }
            });
        }),
            O.forEach(({ element: L, key: N }) => {
                let w = _[N],
                    G = (0, it.default)(w, "[0].actionItems[0]", {}),
                    { actionTypeId: k } = G,
                    U = Xn(k) ? ra(k)(L, G) : null,
                    W = ta({ element: L, actionItem: G, elementApi: Te }, U);
                na({
                    store: e,
                    element: L,
                    eventId: n,
                    actionListId: o,
                    actionItem: G,
                    destination: W,
                    continuous: !0,
                    parameterId: x,
                    actionGroups: w,
                    smoothing: s,
                    restingValue: u,
                    pluginInstance: U,
                });
            });
    }
    function KM(e = [], t, r) {
        let n = [...e],
            i;
        return (
            n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
            i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
            n[i].actionItems.push(r),
            n
        );
    }
    function jM(e) {
        let { ixData: t } = e.getState(),
            { eventTypeMap: r } = t;
        cE(e),
            (0, Yt.default)(r, (i, o) => {
                let a = $g[o];
                if (!a) {
                    console.warn(`IX2 event type not configured: ${o}`);
                    return;
                }
                eF({ logic: a, store: e, events: i });
            });
        let { ixSession: n } = e.getState();
        n.eventListeners.length && $M(e);
    }
    function $M(e) {
        let t = () => {
            cE(e);
        };
        YM.forEach((r) => {
            window.addEventListener(r, t), e.dispatch(Tn(window, [r, t]));
        }),
            t();
    }
    function cE(e) {
        let { ixSession: t, ixData: r } = e.getState(),
            n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let { mediaQueries: i } = r;
            e.dispatch(Xo({ width: n, mediaQueries: i }));
        }
    }
    function eF({ logic: e, store: t, events: r }) {
        tF(r);
        let { types: n, handler: i } = e,
            { ixData: o } = t.getState(),
            { actionLists: a } = o,
            s = QM(r, JM);
        if (!(0, tE.default)(s)) return;
        (0, Yt.default)(s, (p, d) => {
            let y = r[d],
                { action: I, id: _, mediaQueries: O = o.mediaQueryKeys } = y,
                { actionListId: m } = I.config;
            LM(O, o.mediaQueryKeys) || t.dispatch(Go()),
                I.actionTypeId === Se.GENERAL_CONTINUOUS_ACTION &&
                (Array.isArray(y.config) ? y.config : [y.config]).forEach((A) => {
                    let { continuousParameterGroupId: L } = A,
                        N = (0, it.default)(a, `${m}.continuousParameterGroups`, []),
                        w = (0, eE.default)(N, ({ id: U }) => U === L),
                        G = (A.smoothing || 0) / 100,
                        k = (A.restingState || 0) / 100;
                    w &&
                        p.forEach((U, W) => {
                            let z = _ + ea + W;
                            zM({
                                store: t,
                                eventStateKey: z,
                                eventTarget: U,
                                eventId: _,
                                eventConfig: A,
                                actionListId: m,
                                parameterGroup: w,
                                smoothing: G,
                                restingValue: k,
                            });
                        });
                }),
                (I.actionTypeId === Se.GENERAL_START_ACTION || Jo(I.actionTypeId)) &&
                lE({ store: t, actionListId: m, eventId: _ });
        });
        let u = (p) => {
            let { ixSession: d } = t.getState();
            ZM(s, (y, I, _) => {
                let O = r[I],
                    m = d.eventState[_],
                    { action: x, mediaQueries: A = o.mediaQueryKeys } = O;
                if (!qn(A, d.mediaQueryKey)) return;
                let L = (N = {}) => {
                    let w = i(
                        {
                            store: t,
                            element: y,
                            event: O,
                            eventConfig: N,
                            nativeEvent: p,
                            eventStateKey: _,
                        },
                        m
                    );
                    PM(w, m) || t.dispatch(Do(_, w));
                };
                x.actionTypeId === Se.GENERAL_CONTINUOUS_ACTION
                    ? (Array.isArray(O.config) ? O.config : [O.config]).forEach(L)
                    : L();
            });
        },
            l = (0, oE.default)(u, MM),
            g = ({ target: p = document, types: d, throttle: y }) => {
                d.split(" ")
                    .filter(Boolean)
                    .forEach((I) => {
                        let _ = y ? l : u;
                        p.addEventListener(I, _), t.dispatch(Tn(p, [I, _]));
                    });
            };
        Array.isArray(n) ? n.forEach(g) : typeof n == "string" && g(e);
    }
    function tF(e) {
        if (!DM) return;
        let t = {},
            r = "";
        for (let n in e) {
            let { eventTypeId: i, target: o } = e[n],
                a = ko(o);
            t[a] ||
                ((i === qe.MOUSE_CLICK || i === qe.MOUSE_SECOND_CLICK) &&
                    ((t[a] = !0),
                        (r += a + "{cursor: pointer;touch-action: manipulation;}")));
        }
        if (r) {
            let n = document.createElement("style");
            (n.textContent = r), document.body.appendChild(n);
        }
    }
    function lE({ store: e, actionListId: t, eventId: r }) {
        let { ixData: n, ixSession: i } = e.getState(),
            { actionLists: o, events: a } = n,
            s = a[r],
            u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let l = (0, it.default)(u, "actionItemGroups[0].actionItems", []),
                g = (0, it.default)(s, "mediaQueries", n.mediaQueryKeys);
            if (!qn(g, i.mediaQueryKey)) return;
            l.forEach((p) => {
                let { config: d, actionTypeId: y } = p,
                    I =
                        d?.target?.useEventTarget === !0 && d?.target?.objectId == null
                            ? { target: s.target, targets: s.targets }
                            : d,
                    _ = Fn({ config: I, event: s, elementApi: Te }),
                    O = Xn(y);
                _.forEach((m) => {
                    let x = O ? ra(y)(m, p) : null;
                    na({
                        destination: ta({ element: m, actionItem: p, elementApi: Te }, x),
                        immediate: !0,
                        store: e,
                        element: m,
                        eventId: r,
                        actionItem: p,
                        actionListId: t,
                        pluginInstance: x,
                    });
                });
            });
        }
    }
    function fE({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, Yt.default)(t, (r) => {
            if (!r.continuous) {
                let { actionListId: n, verbose: i } = r;
                ia(r, e), i && e.dispatch(Kt({ actionListId: n, isPlaying: !1 }));
            }
        });
    }
    function jt({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i,
    }) {
        let { ixInstances: o, ixSession: a } = e.getState(),
            s = a.hasBoundaryNodes && r ? Ir(r, Mn) : null;
        (0, Yt.default)(o, (u) => {
            let l = (0, it.default)(u, "actionItem.config.target.boundaryMode"),
                g = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && g) {
                if (s && l && !Uo(s, u.element)) return;
                ia(u, e),
                    u.verbose && e.dispatch(Kt({ actionListId: i, isPlaying: !1 }));
            }
        });
    }
    function Sr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i,
        groupIndex: o = 0,
        immediate: a,
        verbose: s,
    }) {
        let { ixData: u, ixSession: l } = e.getState(),
            { events: g } = u,
            p = g[t] || {},
            { mediaQueries: d = u.mediaQueryKeys } = p,
            y = (0, it.default)(u, `actionLists.${i}`, {}),
            { actionItemGroups: I, useFirstGroupAsInitialState: _ } = y;
        if (!I || !I.length) return !1;
        o >= I.length && (0, it.default)(p, "config.loop") && (o = 0),
            o === 0 && _ && o++;
        let m =
            (o === 0 || (o === 1 && _)) && Jo(p.action?.actionTypeId)
                ? p.config.delay
                : void 0,
            x = (0, it.default)(I, [o, "actionItems"], []);
        if (!x.length || !qn(d, l.mediaQueryKey)) return !1;
        let A = l.hasBoundaryNodes && r ? Ir(r, Mn) : null,
            L = TM(x),
            N = !1;
        return (
            x.forEach((w, G) => {
                let { config: k, actionTypeId: U } = w,
                    W = Xn(U),
                    { target: z } = k;
                if (!z) return;
                let M = z.boundaryMode ? A : null;
                Fn({
                    config: k,
                    event: p,
                    eventTarget: r,
                    elementRoot: M,
                    elementApi: Te,
                }).forEach((D, V) => {
                    let X = W ? ra(U)(D, w) : null,
                        K = W ? NM(U)(D, w) : null;
                    N = !0;
                    let j = L === G && V === 0,
                        te = bM({ element: D, actionItem: w }),
                        me = ta({ element: D, actionItem: w, elementApi: Te }, X);
                    na({
                        store: e,
                        element: D,
                        actionItem: w,
                        eventId: t,
                        eventTarget: r,
                        eventStateKey: n,
                        actionListId: i,
                        groupIndex: o,
                        isCarrier: j,
                        computedStyle: te,
                        destination: me,
                        immediate: a,
                        verbose: s,
                        pluginInstance: X,
                        pluginDuration: K,
                        instanceDelay: m,
                    });
                });
            }),
            N
        );
    }
    function na(e) {
        let { store: t, computedStyle: r, ...n } = e,
            {
                element: i,
                actionItem: o,
                immediate: a,
                pluginInstance: s,
                continuous: u,
                restingValue: l,
                eventId: g,
            } = n,
            p = !u,
            d = _M(),
            { ixElements: y, ixSession: I, ixData: _ } = t.getState(),
            O = vM(y, i),
            { refState: m } = y[O] || {},
            x = Bo(i),
            A = I.reducedMotion && Ei[o.actionTypeId],
            L;
        if (A && u)
            switch (_.events[g]?.eventTypeId) {
                case qe.MOUSE_MOVE:
                case qe.MOUSE_MOVE_IN_VIEWPORT:
                    L = l;
                    break;
                default:
                    L = 0.5;
                    break;
            }
        let N = AM(i, m, r, o, Te, s);
        if (
            (t.dispatch(
                Mo({
                    instanceId: d,
                    elementId: O,
                    origin: N,
                    refType: x,
                    skipMotion: A,
                    skipToValue: L,
                    ...n,
                })
            ),
                dE(document.body, "ix2-animation-started", d),
                a)
        ) {
            rF(t, d);
            return;
        }
        It({ store: t, select: ({ ixInstances: w }) => w[d], onChange: pE }),
            p && t.dispatch(An(d, I.tick));
    }
    function ia(e, t) {
        dE(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState(),
        });
        let { elementId: r, actionItem: n } = e,
            { ixElements: i } = t.getState(),
            { ref: o, refType: a } = i[r] || {};
        a === aE && wM(o, n, Te), t.dispatch(Fo(e.id));
    }
    function dE(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
    }
    function rF(e, t) {
        let { ixParameters: r } = e.getState();
        e.dispatch(An(t, 0)), e.dispatch(bn(performance.now(), r));
        let { ixInstances: n } = e.getState();
        pE(n[t], e);
    }
    function pE(e, t) {
        let {
            active: r,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: a,
            actionTypeId: s,
            renderType: u,
            current: l,
            groupIndex: g,
            eventId: p,
            eventTarget: d,
            eventStateKey: y,
            actionListId: I,
            isCarrier: _,
            styleProp: O,
            verbose: m,
            pluginInstance: x,
        } = e,
            { ixData: A, ixSession: L } = t.getState(),
            { events: N } = A,
            w = N && N[p] ? N[p] : {},
            { mediaQueries: G = A.mediaQueryKeys } = w;
        if (qn(G, L.mediaQueryKey) && (n || r || i)) {
            if (l || (u === mM && i)) {
                t.dispatch(qo(o, s, l, a));
                let { ixElements: k } = t.getState(),
                    { ref: U, refType: W, refState: z } = k[o] || {},
                    M = z && z[s];
                (W === aE || Xn(s)) && IM(U, z, M, p, a, O, Te, u, x);
            }
            if (i) {
                if (_) {
                    let k = Sr({
                        store: t,
                        eventId: p,
                        eventTarget: d,
                        eventStateKey: y,
                        actionListId: I,
                        groupIndex: g + 1,
                        verbose: m,
                    });
                    m && !k && t.dispatch(Kt({ actionListId: I, isPlaying: !1 }));
                }
                ia(e, t);
            }
        }
    }
    var eE,
        it,
        tE,
        rE,
        nE,
        iE,
        Yt,
        oE,
        Dn,
        yM,
        Jo,
        ea,
        Mn,
        aE,
        mM,
        Zg,
        Fn,
        vM,
        ta,
        It,
        _M,
        IM,
        sE,
        TM,
        bM,
        AM,
        SM,
        OM,
        xM,
        qn,
        wM,
        RM,
        CM,
        LM,
        PM,
        Xn,
        ra,
        NM,
        Jg,
        DM,
        MM,
        YM,
        QM,
        ZM,
        JM,
        Zo = se(() => {
            "use strict";
            (eE = ee(Hi())),
                (it = ee(rn())),
                (tE = ee(xp())),
                (rE = ee(Jp())),
                (nE = ee(th())),
                (iE = ee(nh())),
                (Yt = ee(ch())),
                (oE = ee(Eh()));
            Oe();
            Dn = ee(_t());
            Sn();
            Th();
            Qg();
            (yM = Object.keys(Dr)),
                (Jo = (e) => yM.includes(e)),
                ({
                    COLON_DELIMITER: ea,
                    BOUNDARY_SELECTOR: Mn,
                    HTML_ELEMENT: aE,
                    RENDER_GENERAL: mM,
                    W_MOD_IX: Zg,
                } = ye),
                ({
                    getAffectedElements: Fn,
                    getElementId: vM,
                    getDestinationValues: ta,
                    observeStore: It,
                    getInstanceId: _M,
                    renderHTMLElement: IM,
                    clearAllStyles: sE,
                    getMaxDurationItemIndex: TM,
                    getComputedStyle: bM,
                    getInstanceOrigin: AM,
                    reduceListToGroup: SM,
                    shouldNamespaceEventParameter: OM,
                    getNamespacedParameterId: xM,
                    shouldAllowMediaQuery: qn,
                    cleanupHTMLElement: wM,
                    clearObjectCache: RM,
                    stringifyTarget: CM,
                    mediaQueriesEqual: LM,
                    shallowEqual: PM,
                } = Dn.IX2VanillaUtils),
                ({
                    isPluginType: Xn,
                    createPluginInstance: ra,
                    getPluginDuration: NM,
                } = Dn.IX2VanillaPlugins),
                (Jg = navigator.userAgent),
                (DM = Jg.match(/iPad/i) || Jg.match(/iPhone/)),
                (MM = 12);
            YM = ["resize", "orientationchange"];
            (QM = (e, t) => (0, rE.default)((0, iE.default)(e, t), nE.default)),
                (ZM = (e, t) => {
                    (0, Yt.default)(e, (r, n) => {
                        r.forEach((i, o) => {
                            let a = n + ea + o;
                            t(i, n, a);
                        });
                    });
                }),
                (JM = (e) => {
                    let t = { target: e.target, targets: e.targets };
                    return Fn({ config: t, elementApi: Te });
                });
        });
    var yE = f((aa) => {
        "use strict";
        Object.defineProperty(aa, "__esModule", { value: !0 });
        function nF(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }
        nF(aa, {
            actions: function () {
                return aF;
            },
            destroy: function () {
                return EE;
            },
            init: function () {
                return lF;
            },
            setEnv: function () {
                return cF;
            },
            store: function () {
                return kn;
            },
        });
        var iF = pi(),
            oF = sF((up(), Ue(sp))),
            oa = (Zo(), Ue(hE)),
            aF = uF((Sn(), Ue(mh)));
        function sF(e) {
            return e && e.__esModule ? e : { default: e };
        }
        function gE(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap(),
                r = new WeakMap();
            return (gE = function (n) {
                return n ? r : t;
            })(e);
        }
        function uF(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || (typeof e != "object" && typeof e != "function"))
                return { default: e };
            var r = gE(t);
            if (r && r.has(e)) return r.get(e);
            var n = { __proto__: null },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set)
                        ? Object.defineProperty(n, o, a)
                        : (n[o] = e[o]);
                }
            return (n.default = e), r && r.set(e, n), n;
        }
        var kn = (0, iF.createStore)(oF.default);
        function cF(e) {
            e() && (0, oa.observeRequests)(kn);
        }
        function lF(e) {
            EE(), (0, oa.startEngine)({ store: kn, rawData: e, allowEvents: !0 });
        }
        function EE() {
            (0, oa.stopEngine)(kn);
        }
    });
    var IE = f((lG, _E) => {
        "use strict";
        var mE = We(),
            vE = yE();
        vE.setEnv(mE.env);
        mE.define(
            "ix2",
            (_E.exports = function () {
                return vE;
            })
        );
    });
    var bE = f((fG, TE) => {
        "use strict";
        var $t = We();
        $t.define(
            "links",
            (TE.exports = function (e, t) {
                var r = {},
                    n = e(window),
                    i,
                    o = $t.env(),
                    a = window.location,
                    s = document.createElement("a"),
                    u = "w--current",
                    l = /index\.(html|php)$/,
                    g = /\/$/,
                    p,
                    d;
                r.ready = r.design = r.preview = y;
                function y() {
                    (i = o && $t.env("design")),
                        (d = $t.env("slug") || a.pathname || ""),
                        $t.scroll.off(_),
                        (p = []);
                    for (var m = document.links, x = 0; x < m.length; ++x) I(m[x]);
                    p.length && ($t.scroll.on(_), _());
                }
                function I(m) {
                    if (!m.getAttribute("hreflang")) {
                        var x =
                            (i && m.getAttribute("href-disabled")) || m.getAttribute("href");
                        if (((s.href = x), !(x.indexOf(":") >= 0))) {
                            var A = e(m);
                            if (
                                s.hash.length > 1 &&
                                s.host + s.pathname === a.host + a.pathname
                            ) {
                                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                                var L = e(s.hash);
                                L.length && p.push({ link: A, sec: L, active: !1 });
                                return;
                            }
                            if (!(x === "#" || x === "")) {
                                var N =
                                    s.href === a.href || x === d || (l.test(x) && g.test(d));
                                O(A, u, N);
                            }
                        }
                    }
                }
                function _() {
                    var m = n.scrollTop(),
                        x = n.height();
                    t.each(p, function (A) {
                        if (!A.link.attr("hreflang")) {
                            var L = A.link,
                                N = A.sec,
                                w = N.offset().top,
                                G = N.outerHeight(),
                                k = x * 0.5,
                                U = N.is(":visible") && w + G - k >= m && w + k <= m + x;
                            A.active !== U && ((A.active = U), O(L, u, U));
                        }
                    });
                }
                function O(m, x, A) {
                    var L = m.hasClass(x);
                    (A && L) || (!A && !L) || (A ? m.addClass(x) : m.removeClass(x));
                }
                return r;
            })
        );
    });
    var SE = f((dG, AE) => {
        "use strict";
        var Un = We();
        Un.define(
            "scroll",
            (AE.exports = function (e) {
                var t = {
                    WF_CLICK_EMPTY: "click.wf-empty-link",
                    WF_CLICK_SCROLL: "click.wf-scroll",
                },
                    r = window.location,
                    n = I() ? null : window.history,
                    i = e(window),
                    o = e(document),
                    a = e(document.body),
                    s =
                        window.requestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        function (M) {
                            window.setTimeout(M, 15);
                        },
                    u = Un.env("editor") ? ".w-editor-body" : "body",
                    l =
                        "header, " +
                        u +
                        " > .header, " +
                        u +
                        " > .w-nav:not([data-no-scroll])",
                    g = 'a[href="#"]',
                    p = 'a[href*="#"]:not(.w-tab-link):not(' + g + ")",
                    d = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                    y = document.createElement("style");
                y.appendChild(document.createTextNode(d));
                function I() {
                    try {
                        return !!window.frameElement;
                    } catch {
                        return !0;
                    }
                }
                var _ = /^#[a-zA-Z0-9][\w:.-]*$/;
                function O(M) {
                    return _.test(M.hash) && M.host + M.pathname === r.host + r.pathname;
                }
                let m =
                    typeof window.matchMedia == "function" &&
                    window.matchMedia("(prefers-reduced-motion: reduce)");
                function x() {
                    return (
                        document.body.getAttribute("data-wf-scroll-motion") === "none" ||
                        m.matches
                    );
                }
                function A(M, T) {
                    var D;
                    switch (T) {
                        case "add":
                            (D = M.attr("tabindex")),
                                D
                                    ? M.attr("data-wf-tabindex-swap", D)
                                    : M.attr("tabindex", "-1");
                            break;
                        case "remove":
                            (D = M.attr("data-wf-tabindex-swap")),
                                D
                                    ? (M.attr("tabindex", D),
                                        M.removeAttr("data-wf-tabindex-swap"))
                                    : M.removeAttr("tabindex");
                            break;
                    }
                    M.toggleClass("wf-force-outline-none", T === "add");
                }
                function L(M) {
                    var T = M.currentTarget;
                    if (
                        !(
                            Un.env("design") ||
                            (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(T.className))
                        )
                    ) {
                        var D = O(T) ? T.hash : "";
                        if (D !== "") {
                            var V = e(D);
                            V.length &&
                                (M && (M.preventDefault(), M.stopPropagation()),
                                    N(D, M),
                                    window.setTimeout(
                                        function () {
                                            w(V, function () {
                                                A(V, "add"),
                                                    V.get(0).focus({ preventScroll: !0 }),
                                                    A(V, "remove");
                                            });
                                        },
                                        M ? 0 : 300
                                    ));
                        }
                    }
                }
                function N(M) {
                    if (
                        r.hash !== M &&
                        n &&
                        n.pushState &&
                        !(Un.env.chrome && r.protocol === "file:")
                    ) {
                        var T = n.state && n.state.hash;
                        T !== M && n.pushState({ hash: M }, "", M);
                    }
                }
                function w(M, T) {
                    var D = i.scrollTop(),
                        V = G(M);
                    if (D !== V) {
                        var X = k(M, D, V),
                            K = Date.now(),
                            j = function () {
                                var te = Date.now() - K;
                                window.scroll(0, U(D, V, te, X)),
                                    te <= X ? s(j) : typeof T == "function" && T();
                            };
                        s(j);
                    }
                }
                function G(M) {
                    var T = e(l),
                        D = T.css("position") === "fixed" ? T.outerHeight() : 0,
                        V = M.offset().top - D;
                    if (M.data("scroll") === "mid") {
                        var X = i.height() - D,
                            K = M.outerHeight();
                        K < X && (V -= Math.round((X - K) / 2));
                    }
                    return V;
                }
                function k(M, T, D) {
                    if (x()) return 0;
                    var V = 1;
                    return (
                        a.add(M).each(function (X, K) {
                            var j = parseFloat(K.getAttribute("data-scroll-time"));
                            !isNaN(j) && j >= 0 && (V = j);
                        }),
                        (472.143 * Math.log(Math.abs(T - D) + 125) - 2e3) * V
                    );
                }
                function U(M, T, D, V) {
                    return D > V ? T : M + (T - M) * W(D / V);
                }
                function W(M) {
                    return M < 0.5
                        ? 4 * M * M * M
                        : (M - 1) * (2 * M - 2) * (2 * M - 2) + 1;
                }
                function z() {
                    var { WF_CLICK_EMPTY: M, WF_CLICK_SCROLL: T } = t;
                    o.on(T, p, L),
                        o.on(M, g, function (D) {
                            D.preventDefault();
                        }),
                        document.head.insertBefore(y, document.head.firstChild);
                }
                return { ready: z };
            })
        );
    });
    var xE = f((pG, OE) => {
        "use strict";
        var fF = We();
        fF.define(
            "touch",
            (OE.exports = function (e) {
                var t = {},
                    r = window.getSelection;
                (e.event.special.tap = { bindType: "click", delegateType: "click" }),
                    (t.init = function (o) {
                        return (
                            (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
                        );
                    });
                function n(o) {
                    var a = !1,
                        s = !1,
                        u = Math.min(Math.round(window.innerWidth * 0.04), 40),
                        l,
                        g;
                    o.addEventListener("touchstart", p, !1),
                        o.addEventListener("touchmove", d, !1),
                        o.addEventListener("touchend", y, !1),
                        o.addEventListener("touchcancel", I, !1),
                        o.addEventListener("mousedown", p, !1),
                        o.addEventListener("mousemove", d, !1),
                        o.addEventListener("mouseup", y, !1),
                        o.addEventListener("mouseout", I, !1);
                    function p(O) {
                        var m = O.touches;
                        (m && m.length > 1) ||
                            ((a = !0),
                                m ? ((s = !0), (l = m[0].clientX)) : (l = O.clientX),
                                (g = l));
                    }
                    function d(O) {
                        if (a) {
                            if (s && O.type === "mousemove") {
                                O.preventDefault(), O.stopPropagation();
                                return;
                            }
                            var m = O.touches,
                                x = m ? m[0].clientX : O.clientX,
                                A = x - g;
                            (g = x),
                                Math.abs(A) > u &&
                                r &&
                                String(r()) === "" &&
                                (i("swipe", O, { direction: A > 0 ? "right" : "left" }), I());
                        }
                    }
                    function y(O) {
                        if (a && ((a = !1), s && O.type === "mouseup")) {
                            O.preventDefault(), O.stopPropagation(), (s = !1);
                            return;
                        }
                    }
                    function I() {
                        a = !1;
                    }
                    function _() {
                        o.removeEventListener("touchstart", p, !1),
                            o.removeEventListener("touchmove", d, !1),
                            o.removeEventListener("touchend", y, !1),
                            o.removeEventListener("touchcancel", I, !1),
                            o.removeEventListener("mousedown", p, !1),
                            o.removeEventListener("mousemove", d, !1),
                            o.removeEventListener("mouseup", y, !1),
                            o.removeEventListener("mouseout", I, !1),
                            (o = null);
                    }
                    this.destroy = _;
                }
                function i(o, a, s) {
                    var u = e.Event(o, { originalEvent: a });
                    e(a.target).trigger(u, s);
                }
                return (t.instance = t.init(document)), t;
            })
        );
    });
    var CE = f((hG, RE) => {
        "use strict";
        var dt = We(),
            dF = Qn(),
            Qe = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35,
            },
            wE =
                'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        dt.define(
            "slider",
            (RE.exports = function (e, t) {
                var r = {},
                    n = e.tram,
                    i = e(document),
                    o,
                    a,
                    s = dt.env(),
                    u = ".w-slider",
                    l = '<div class="w-slider-dot" data-wf-ignore />',
                    g =
                        '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
                    p = "w-slider-force-show",
                    d = dF.triggers,
                    y,
                    I = !1;
                (r.ready = function () {
                    (a = dt.env("design")), _();
                }),
                    (r.design = function () {
                        (a = !0), setTimeout(_, 1e3);
                    }),
                    (r.preview = function () {
                        (a = !1), _();
                    }),
                    (r.redraw = function () {
                        (I = !0), _(), (I = !1);
                    }),
                    (r.destroy = O);
                function _() {
                    (o = i.find(u)), o.length && (o.each(A), !y && (O(), m()));
                }
                function O() {
                    dt.resize.off(x), dt.redraw.off(r.redraw);
                }
                function m() {
                    dt.resize.on(x), dt.redraw.on(r.redraw);
                }
                function x() {
                    o.filter(":visible").each(X);
                }
                function A(h, F) {
                    var C = e(F),
                        S = e.data(F, u);
                    S ||
                        (S = e.data(F, u, {
                            index: 0,
                            depth: 1,
                            hasFocus: { keyboard: !1, mouse: !1 },
                            el: C,
                            config: {},
                        })),
                        (S.mask = C.children(".w-slider-mask")),
                        (S.left = C.children(".w-slider-arrow-left")),
                        (S.right = C.children(".w-slider-arrow-right")),
                        (S.nav = C.children(".w-slider-nav")),
                        (S.slides = S.mask.children(".w-slide")),
                        S.slides.each(d.reset),
                        I && (S.maskWidth = 0),
                        C.attr("role") === void 0 && C.attr("role", "region"),
                        C.attr("aria-label") === void 0 && C.attr("aria-label", "carousel");
                    var Q = S.mask.attr("id");
                    if (
                        (Q || ((Q = "w-slider-mask-" + h), S.mask.attr("id", Q)),
                            !a && !S.ariaLiveLabel && (S.ariaLiveLabel = e(g).appendTo(S.mask)),
                            S.left.attr("role", "button"),
                            S.left.attr("tabindex", "0"),
                            S.left.attr("aria-controls", Q),
                            S.left.attr("aria-label") === void 0 &&
                            S.left.attr("aria-label", "previous slide"),
                            S.right.attr("role", "button"),
                            S.right.attr("tabindex", "0"),
                            S.right.attr("aria-controls", Q),
                            S.right.attr("aria-label") === void 0 &&
                            S.right.attr("aria-label", "next slide"),
                            !n.support.transform)
                    ) {
                        S.left.hide(), S.right.hide(), S.nav.hide(), (y = !0);
                        return;
                    }
                    S.el.off(u),
                        S.left.off(u),
                        S.right.off(u),
                        S.nav.off(u),
                        L(S),
                        a
                            ? (S.el.on("setting" + u, T(S)), M(S), (S.hasTimer = !1))
                            : (S.el.on("swipe" + u, T(S)),
                                S.left.on("click" + u, k(S)),
                                S.right.on("click" + u, U(S)),
                                S.left.on("keydown" + u, G(S, k)),
                                S.right.on("keydown" + u, G(S, U)),
                                S.nav.on("keydown" + u, "> div", T(S)),
                                S.config.autoplay &&
                                !S.hasTimer &&
                                ((S.hasTimer = !0), (S.timerCount = 1), z(S)),
                                S.el.on("mouseenter" + u, w(S, !0, "mouse")),
                                S.el.on("focusin" + u, w(S, !0, "keyboard")),
                                S.el.on("mouseleave" + u, w(S, !1, "mouse")),
                                S.el.on("focusout" + u, w(S, !1, "keyboard"))),
                        S.nav.on("click" + u, "> div", T(S)),
                        s ||
                        S.mask
                            .contents()
                            .filter(function () {
                                return this.nodeType === 3;
                            })
                            .remove();
                    var re = C.filter(":hidden");
                    re.addClass(p);
                    var ge = C.parents(":hidden");
                    ge.addClass(p), I || X(h, F), re.removeClass(p), ge.removeClass(p);
                }
                function L(h) {
                    var F = {};
                    (F.crossOver = 0),
                        (F.animation = h.el.attr("data-animation") || "slide"),
                        F.animation === "outin" &&
                        ((F.animation = "cross"), (F.crossOver = 0.5)),
                        (F.easing = h.el.attr("data-easing") || "ease");
                    var C = h.el.attr("data-duration");
                    if (
                        ((F.duration = C != null ? parseInt(C, 10) : 500),
                            N(h.el.attr("data-infinite")) && (F.infinite = !0),
                            N(h.el.attr("data-disable-swipe")) && (F.disableSwipe = !0),
                            N(h.el.attr("data-hide-arrows"))
                                ? (F.hideArrows = !0)
                                : h.config.hideArrows && (h.left.show(), h.right.show()),
                            N(h.el.attr("data-autoplay")))
                    ) {
                        (F.autoplay = !0),
                            (F.delay = parseInt(h.el.attr("data-delay"), 10) || 2e3),
                            (F.timerMax = parseInt(h.el.attr("data-autoplay-limit"), 10));
                        var S = "mousedown" + u + " touchstart" + u;
                        a ||
                            h.el.off(S).one(S, function () {
                                M(h);
                            });
                    }
                    var Q = h.right.width();
                    (F.edge = Q ? Q + 40 : 100), (h.config = F);
                }
                function N(h) {
                    return h === "1" || h === "true";
                }
                function w(h, F, C) {
                    return function (S) {
                        if (F) h.hasFocus[C] = F;
                        else if (
                            e.contains(h.el.get(0), S.relatedTarget) ||
                            ((h.hasFocus[C] = F),
                                (h.hasFocus.mouse && C === "keyboard") ||
                                (h.hasFocus.keyboard && C === "mouse"))
                        )
                            return;
                        F
                            ? (h.ariaLiveLabel.attr("aria-live", "polite"),
                                h.hasTimer && M(h))
                            : (h.ariaLiveLabel.attr("aria-live", "off"), h.hasTimer && z(h));
                    };
                }
                function G(h, F) {
                    return function (C) {
                        switch (C.keyCode) {
                            case Qe.SPACE:
                            case Qe.ENTER:
                                return F(h)(), C.preventDefault(), C.stopPropagation();
                        }
                    };
                }
                function k(h) {
                    return function () {
                        V(h, { index: h.index - 1, vector: -1 });
                    };
                }
                function U(h) {
                    return function () {
                        V(h, { index: h.index + 1, vector: 1 });
                    };
                }
                function W(h, F) {
                    var C = null;
                    F === h.slides.length && (_(), K(h)),
                        t.each(h.anchors, function (S, Q) {
                            e(S.els).each(function (re, ge) {
                                e(ge).index() === F && (C = Q);
                            });
                        }),
                        C != null && V(h, { index: C, immediate: !0 });
                }
                function z(h) {
                    M(h);
                    var F = h.config,
                        C = F.timerMax;
                    (C && h.timerCount++ > C) ||
                        (h.timerId = window.setTimeout(function () {
                            h.timerId == null || a || (U(h)(), z(h));
                        }, F.delay));
                }
                function M(h) {
                    window.clearTimeout(h.timerId), (h.timerId = null);
                }
                function T(h) {
                    return function (F, C) {
                        C = C || {};
                        var S = h.config;
                        if (a && F.type === "setting") {
                            if (C.select === "prev") return k(h)();
                            if (C.select === "next") return U(h)();
                            if ((L(h), K(h), C.select == null)) return;
                            W(h, C.select);
                            return;
                        }
                        if (F.type === "swipe")
                            return S.disableSwipe || dt.env("editor")
                                ? void 0
                                : C.direction === "left"
                                    ? U(h)()
                                    : C.direction === "right"
                                        ? k(h)()
                                        : void 0;
                        if (h.nav.has(F.target).length) {
                            var Q = e(F.target).index();
                            if (
                                (F.type === "click" && V(h, { index: Q }), F.type === "keydown")
                            )
                                switch (F.keyCode) {
                                    case Qe.ENTER:
                                    case Qe.SPACE: {
                                        V(h, { index: Q }), F.preventDefault();
                                        break;
                                    }
                                    case Qe.ARROW_LEFT:
                                    case Qe.ARROW_UP: {
                                        D(h.nav, Math.max(Q - 1, 0)), F.preventDefault();
                                        break;
                                    }
                                    case Qe.ARROW_RIGHT:
                                    case Qe.ARROW_DOWN: {
                                        D(h.nav, Math.min(Q + 1, h.pages)), F.preventDefault();
                                        break;
                                    }
                                    case Qe.HOME: {
                                        D(h.nav, 0), F.preventDefault();
                                        break;
                                    }
                                    case Qe.END: {
                                        D(h.nav, h.pages), F.preventDefault();
                                        break;
                                    }
                                    default:
                                        return;
                                }
                        }
                    };
                }
                function D(h, F) {
                    var C = h.children().eq(F).focus();
                    h.children().not(C);
                }
                function V(h, F) {
                    F = F || {};
                    var C = h.config,
                        S = h.anchors;
                    h.previous = h.index;
                    var Q = F.index,
                        re = {};
                    Q < 0
                        ? ((Q = S.length - 1),
                            C.infinite &&
                            ((re.x = -h.endX), (re.from = 0), (re.to = S[0].width)))
                        : Q >= S.length &&
                        ((Q = 0),
                            C.infinite &&
                            ((re.x = S[S.length - 1].width),
                                (re.from = -S[S.length - 1].x),
                                (re.to = re.from - re.x))),
                        (h.index = Q);
                    var ge = h.nav
                        .children()
                        .eq(Q)
                        .addClass("w-active")
                        .attr("aria-pressed", "true")
                        .attr("tabindex", "0");
                    h.nav
                        .children()
                        .not(ge)
                        .removeClass("w-active")
                        .attr("aria-pressed", "false")
                        .attr("tabindex", "-1"),
                        C.hideArrows &&
                        (h.index === S.length - 1 ? h.right.hide() : h.right.show(),
                            h.index === 0 ? h.left.hide() : h.left.show());
                    var Ve = h.offsetX || 0,
                        Re = (h.offsetX = -S[h.index].x),
                        ue = { x: Re, opacity: 1, visibility: "" },
                        fe = e(S[h.index].els),
                        Ze = e(S[h.previous] && S[h.previous].els),
                        Je = h.slides.not(fe),
                        ot = C.animation,
                        Ce = C.easing,
                        pt = Math.round(C.duration),
                        Or = F.vector || (h.index > h.previous ? 1 : -1),
                        c = "opacity " + pt + "ms " + Ce,
                        E = "transform " + pt + "ms " + Ce;
                    if (
                        (fe.find(wE).removeAttr("tabindex"),
                            fe.removeAttr("aria-hidden"),
                            fe.find("*").removeAttr("aria-hidden"),
                            Je.find(wE).attr("tabindex", "-1"),
                            Je.attr("aria-hidden", "true"),
                            Je.find("*").attr("aria-hidden", "true"),
                            a || (fe.each(d.intro), Je.each(d.outro)),
                            F.immediate && !I)
                    ) {
                        n(fe).set(ue), P();
                        return;
                    }
                    if (h.index === h.previous) return;
                    if (
                        (a || h.ariaLiveLabel.text(`Slide ${Q + 1} of ${S.length}.`),
                            ot === "cross")
                    ) {
                        var v = Math.round(pt - pt * C.crossOver),
                            b = Math.round(pt - v);
                        (c = "opacity " + v + "ms " + Ce),
                            n(Ze).set({ visibility: "" }).add(c).start({ opacity: 0 }),
                            n(fe)
                                .set({ visibility: "", x: Re, opacity: 0, zIndex: h.depth++ })
                                .add(c)
                                .wait(b)
                                .then({ opacity: 1 })
                                .then(P);
                        return;
                    }
                    if (ot === "fade") {
                        n(Ze).set({ visibility: "" }).stop(),
                            n(fe)
                                .set({ visibility: "", x: Re, opacity: 0, zIndex: h.depth++ })
                                .add(c)
                                .start({ opacity: 1 })
                                .then(P);
                        return;
                    }
                    if (ot === "over") {
                        (ue = { x: h.endX }),
                            n(Ze).set({ visibility: "" }).stop(),
                            n(fe)
                                .set({
                                    visibility: "",
                                    zIndex: h.depth++,
                                    x: Re + S[h.index].width * Or,
                                })
                                .add(E)
                                .start({ x: Re })
                                .then(P);
                        return;
                    }
                    C.infinite && re.x
                        ? (n(h.slides.not(Ze))
                            .set({ visibility: "", x: re.x })
                            .add(E)
                            .start({ x: Re }),
                            n(Ze)
                                .set({ visibility: "", x: re.from })
                                .add(E)
                                .start({ x: re.to }),
                            (h.shifted = Ze))
                        : (C.infinite &&
                            h.shifted &&
                            (n(h.shifted).set({ visibility: "", x: Ve }),
                                (h.shifted = null)),
                            n(h.slides).set({ visibility: "" }).add(E).start({ x: Re }));
                    function P() {
                        (fe = e(S[h.index].els)),
                            (Je = h.slides.not(fe)),
                            ot !== "slide" && (ue.visibility = "hidden"),
                            n(Je).set(ue);
                    }
                }
                function X(h, F) {
                    var C = e.data(F, u);
                    if (C) {
                        if (te(C)) return K(C);
                        a && me(C) && K(C);
                    }
                }
                function K(h) {
                    var F = 1,
                        C = 0,
                        S = 0,
                        Q = 0,
                        re = h.maskWidth,
                        ge = re - h.config.edge;
                    ge < 0 && (ge = 0),
                        (h.anchors = [{ els: [], x: 0, width: 0 }]),
                        h.slides.each(function (Re, ue) {
                            S - C > ge &&
                                (F++,
                                    (C += re),
                                    (h.anchors[F - 1] = { els: [], x: S, width: 0 })),
                                (Q = e(ue).outerWidth(!0)),
                                (S += Q),
                                (h.anchors[F - 1].width += Q),
                                h.anchors[F - 1].els.push(ue);
                            var fe = Re + 1 + " of " + h.slides.length;
                            e(ue).attr("aria-label", fe), e(ue).attr("role", "group");
                        }),
                        (h.endX = S),
                        a && (h.pages = null),
                        h.nav.length && h.pages !== F && ((h.pages = F), j(h));
                    var Ve = h.index;
                    Ve >= F && (Ve = F - 1), V(h, { immediate: !0, index: Ve });
                }
                function j(h) {
                    var F = [],
                        C,
                        S = h.el.attr("data-nav-spacing");
                    S && (S = parseFloat(S) + "px");
                    for (var Q = 0, re = h.pages; Q < re; Q++)
                        (C = e(l)),
                            C.attr("aria-label", "Show slide " + (Q + 1) + " of " + re)
                                .attr("aria-pressed", "false")
                                .attr("role", "button")
                                .attr("tabindex", "-1"),
                            h.nav.hasClass("w-num") && C.text(Q + 1),
                            S != null && C.css({ "margin-left": S, "margin-right": S }),
                            F.push(C);
                    h.nav.empty().append(F);
                }
                function te(h) {
                    var F = h.mask.width();
                    return h.maskWidth !== F ? ((h.maskWidth = F), !0) : !1;
                }
                function me(h) {
                    var F = 0;
                    return (
                        h.slides.each(function (C, S) {
                            F += e(S).outerWidth(!0);
                        }),
                        h.slidesWidth !== F ? ((h.slidesWidth = F), !0) : !1
                    );
                }
                return r;
            })
        );
    });
    _a();
    Ta();
    Aa();
    xa();
    Qn();
    IE();
    bE();
    SE();
    xE();
    CE();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:
 
timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
    events: {
        e: {
            id: "e",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-2",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-7",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "66c9f1c9fe3a56fff074e112",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "66c9f1c9fe3a56fff074e112",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1724779047035,
        },
        "e-2": {
            id: "e-2",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-6",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "66c9f1c9fe3a56fff074e112",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "66c9f1c9fe3a56fff074e112",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1724779047090,
        },
        "e-3": {
            id: "e-3",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-5",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-4",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "66c9f1c9fe3a56fff074e112",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "66c9f1c9fe3a56fff074e112",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: true,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1725514416988,
        },
        "e-5": {
            id: "e-5",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-6", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".c-card",
                originalId:
                    "66c9f1c9fe3a56fff074e112|5b29c3a2-9b16-1a58-5713-cab3f7a39ebd",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".c-card",
                    originalId:
                        "66c9f1c9fe3a56fff074e112|5b29c3a2-9b16-1a58-5713-cab3f7a39ebd",
                    appliesTo: "CLASS",
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-6-p",
                    smoothing: 90,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1603881512796,
        },
        "e-6": {
            id: "e-6",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_ACTIVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-7",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-7",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".slide",
                originalId:
                    "66c9f1c9fe3a56fff074e112|355a2049-b5fa-de2f-b96e-f452f016089d",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".slide",
                    originalId:
                        "66c9f1c9fe3a56fff074e112|355a2049-b5fa-de2f-b96e-f452f016089d",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1576068579069,
        },
        "e-7": {
            id: "e-7",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_INACTIVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-8",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-6",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".slide",
                originalId:
                    "66c9f1c9fe3a56fff074e112|355a2049-b5fa-de2f-b96e-f452f016089d",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".slide",
                    originalId:
                        "66c9f1c9fe3a56fff074e112|355a2049-b5fa-de2f-b96e-f452f016089d",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1576068579081,
        },
        "e-10": {
            id: "e-10",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-10",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-11",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "66c9f1c9fe3a56fff074e112|97052069-9a9e-2de0-0f6d-33941abb90e7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "66c9f1c9fe3a56fff074e112|97052069-9a9e-2de0-0f6d-33941abb90e7",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1725882939505,
        },
        "e-12": {
            id: "e-12",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-11",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-13",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "66c9f1c9fe3a56fff074e112|ab735469-fee7-0c78-35dc-b4be0670aff3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "66c9f1c9fe3a56fff074e112|ab735469-fee7-0c78-35dc-b4be0670aff3",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1725884890376,
        },
        "e-13": {
            id: "e-13",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-12",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-12",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "66c9f1c9fe3a56fff074e112|ab735469-fee7-0c78-35dc-b4be0670aff3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "66c9f1c9fe3a56fff074e112|ab735469-fee7-0c78-35dc-b4be0670aff3",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1725884890376,
        },
        "e-14": {
            id: "e-14",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-9",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-15",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "66c9f1c9fe3a56fff074e112|dadd8f1f-35c3-70c8-644b-97d28d55cc0a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "66c9f1c9fe3a56fff074e112|dadd8f1f-35c3-70c8-644b-97d28d55cc0a",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1725886366537,
        },
        "e-16": {
            id: "e-16",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-10",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-17",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "66c9f1c9fe3a56fff074e112|7c27df6d-a091-7b89-0ce8-8ba86a74a534",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "66c9f1c9fe3a56fff074e112|7c27df6d-a091-7b89-0ce8-8ba86a74a534",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1725890209114,
        },
        "e-18": {
            id: "e-18",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-10",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-19",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "66c9f1c9fe3a56fff074e112|6caad90f-44d9-ca65-f59a-4edf66ff85b7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "66c9f1c9fe3a56fff074e112|6caad90f-44d9-ca65-f59a-4edf66ff85b7",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1725890242652,
        },
        "e-20": {
            id: "e-20",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-10",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-21",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "66c9f1c9fe3a56fff074e112|1b95de06-4abe-b0eb-23cb-840c570540ab",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "66c9f1c9fe3a56fff074e112|1b95de06-4abe-b0eb-23cb-840c570540ab",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1725890260436,
        },
        "e-22": {
            id: "e-22",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-10",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-23",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "66c9f1c9fe3a56fff074e112|3b6b0a55-888b-5bf3-ab91-ab9bde801fca",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "66c9f1c9fe3a56fff074e112|3b6b0a55-888b-5bf3-ab91-ab9bde801fca",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1725890278438,
        },
        "e-24": {
            id: "e-24",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-10",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-25",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "66c9f1c9fe3a56fff074e112|cd08f6b7-40ad-93b7-a046-61559d66f225",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "66c9f1c9fe3a56fff074e112|cd08f6b7-40ad-93b7-a046-61559d66f225",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1725890297831,
        },
        "e-26": {
            id: "e-26",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-10",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-27",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "66c9f1c9fe3a56fff074e112|3e310598-5951-208d-2c6b-1340709a12ce",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "66c9f1c9fe3a56fff074e112|3e310598-5951-208d-2c6b-1340709a12ce",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1725890322938,
        },
        "e-30": {
            id: "e-30",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-10",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-31",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "66c9f1c9fe3a56fff074e112|19a06b1f-5a82-d794-89b8-fdb125c0d9d0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "66c9f1c9fe3a56fff074e112|19a06b1f-5a82-d794-89b8-fdb125c0d9d0",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1725890402450,
        },
        "e-32": {
            id: "e-32",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-10",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-33",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "66c9f1c9fe3a56fff074e112|6dbc25e6-5fa7-959a-784b-bf6d76125288",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "66c9f1c9fe3a56fff074e112|6dbc25e6-5fa7-959a-784b-bf6d76125288",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1725890417530,
        },
        "e-34": {
            id: "e-34",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-10",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-35",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "66c9f1c9fe3a56fff074e112|de43d09e-880a-17bc-2cbf-07774b911117",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "66c9f1c9fe3a56fff074e112|de43d09e-880a-17bc-2cbf-07774b911117",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1725890434387,
        },
    },
    actionLists: {
        "a-2": {
            id: "a-2",
            title: "top-bar-fade-in",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-2-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    id: "66c9f1c9fe3a56fff074e112|0188510d-5e87-195e-1d4e-62672953a030",
                                },
                                yValue: -10,
                                xUnit: "PX",
                                yUnit: "vh",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-2-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1000,
                                target: {
                                    id: "66c9f1c9fe3a56fff074e112|0188510d-5e87-195e-1d4e-62672953a030",
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "vh",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1724779255686,
        },
        a: {
            id: "a",
            title: "top-bar-fade-out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "inOutQuart",
                                duration: 1000,
                                target: {
                                    id: "66c9f1c9fe3a56fff074e112|0188510d-5e87-195e-1d4e-62672953a030",
                                },
                                yValue: -10,
                                xUnit: "PX",
                                yUnit: "vh",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1724779161103,
        },
        "a-5": {
            id: "a-5",
            title: "logo-infinite-scroll",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-5-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    selector: ".logo-container",
                                    selectorGuids: ["b0767c75-b32d-fdbc-67a5-c3893e667d42"],
                                },
                                xValue: 0,
                                xUnit: "px",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-5-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 10000,
                                target: {
                                    selector: ".logo-container",
                                    selectorGuids: ["b0767c75-b32d-fdbc-67a5-c3893e667d42"],
                                },
                                xValue: -110,
                                xUnit: "%",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1725514423684,
        },
        "a-6": {
            id: "a-6",
            title: "Cards",
            continuousParameterGroups: [
                {
                    id: "a-6-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 40,
                            actionItems: [
                                {
                                    id: "a-6-n",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: true,
                                            id: "66c9f1c9fe3a56fff074e112|5b29c3a2-9b16-1a58-5713-cab3f7a39ebd",
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: true,
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-6-n-2",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: true,
                                            id: "66c9f1c9fe3a56fff074e112|5b29c3a2-9b16-1a58-5713-cab3f7a39ebd",
                                        },
                                        xValue: 0.8,
                                        yValue: 0.8,
                                        locked: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1603881517811,
        },
        "a-7": {
            id: "a-7",
            title: "Slide In",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-7-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slide-content-wrapper",
                                    selectorGuids: ["a3efb919-3a42-bc06-bc45-d39af3abf636"],
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true,
                            },
                        },
                        {
                            id: "a-7-n-2",
                            actionTypeId: "STYLE_FILTER",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slide-content-wrapper",
                                    selectorGuids: ["a3efb919-3a42-bc06-bc45-d39af3abf636"],
                                },
                                filters: [
                                    { type: "blur", filterId: "04e2", value: 0, unit: "px" },
                                ],
                            },
                        },
                        {
                            id: "a-7-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slide-content-wrapper",
                                    selectorGuids: ["a3efb919-3a42-bc06-bc45-d39af3abf636"],
                                },
                                value: 1,
                                unit: "",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1576068387250,
        },
        "a-8": {
            id: "a-8",
            title: "Slide Out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-8-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slide-content-wrapper",
                                    selectorGuids: ["a3efb919-3a42-bc06-bc45-d39af3abf636"],
                                },
                                xValue: 0.8,
                                yValue: 0.8,
                                locked: true,
                            },
                        },
                        {
                            id: "a-8-n-2",
                            actionTypeId: "STYLE_FILTER",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slide-content-wrapper",
                                    selectorGuids: ["a3efb919-3a42-bc06-bc45-d39af3abf636"],
                                },
                                filters: [
                                    { type: "blur", filterId: "2192", value: 5, unit: "px" },
                                ],
                            },
                        },
                        {
                            id: "a-8-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slide-content-wrapper",
                                    selectorGuids: ["a3efb919-3a42-bc06-bc45-d39af3abf636"],
                                },
                                value: 0.5,
                                unit: "",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1576068501683,
        },
        "a-10": {
            id: "a-10",
            title: "side-menu-disappear",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-10-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "PARENT",
                                    selector: ".side-menu-section",
                                    selectorGuids: ["703a9bd8-4e3a-c3cf-0fc5-7851c8937d49"],
                                },
                                xValue: 0,
                                xUnit: "px",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-10-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "PARENT",
                                    selector: ".side-menu-section",
                                    selectorGuids: ["703a9bd8-4e3a-c3cf-0fc5-7851c8937d49"],
                                },
                                value: 1,
                                unit: "",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-10-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "easeInOut",
                                duration: 500,
                                target: {
                                    useEventTarget: "PARENT",
                                    selector: ".side-menu-section",
                                    selectorGuids: ["703a9bd8-4e3a-c3cf-0fc5-7851c8937d49"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                        {
                            id: "a-10-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "easeInOut",
                                duration: 500,
                                target: {
                                    useEventTarget: "PARENT",
                                    selector: ".side-menu-section",
                                    selectorGuids: ["703a9bd8-4e3a-c3cf-0fc5-7851c8937d49"],
                                },
                                xValue: 20,
                                xUnit: "px",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-10-n-2",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 500,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "PARENT",
                                    selector: ".side-menu-section",
                                    selectorGuids: ["703a9bd8-4e3a-c3cf-0fc5-7851c8937d49"],
                                },
                                value: "none",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1725882947269,
        },
        "a-11": {
            id: "a-11",
            title: "gallery-subitem-appear",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-11-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "easeInOut",
                                duration: 100,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".gallery-expand-icon",
                                    selectorGuids: ["84b3abad-0fc9-fe40-1946-039c571da6bf"],
                                },
                                xValue: 0,
                                yValue: 0,
                                zValue: 0,
                                xUnit: "deg",
                                yUnit: "deg",
                                zUnit: "deg",
                            },
                        },
                        {
                            id: "a-11-n-4",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".side-menu-gallery-subitem-wrapper",
                                    selectorGuids: ["2aceaa48-8253-c4ea-484d-8acd5061d347"],
                                },
                                value: "none",
                            },
                        },
                        {
                            id: "a-11-n-6",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 100,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".side-menu-gallery-subitem-wrapper",
                                    selectorGuids: ["2aceaa48-8253-c4ea-484d-8acd5061d347"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                        {
                            id: "a-11-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 100,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".side-menu-gallery-subitem-wrapper",
                                    selectorGuids: ["2aceaa48-8253-c4ea-484d-8acd5061d347"],
                                },
                                xValue: 20,
                                xUnit: "px",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-11-n-3",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 100,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".gallery-expand-icon",
                                    selectorGuids: ["84b3abad-0fc9-fe40-1946-039c571da6bf"],
                                },
                                xValue: 0,
                                yValue: 0,
                                zValue: 90,
                                xUnit: "deg",
                                yUnit: "deg",
                                zUnit: "deg",
                            },
                        },
                        {
                            id: "a-11-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".side-menu-gallery-subitem-wrapper",
                                    selectorGuids: ["2aceaa48-8253-c4ea-484d-8acd5061d347"],
                                },
                                value: "block",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-11-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".side-menu-gallery-subitem-wrapper",
                                    selectorGuids: ["2aceaa48-8253-c4ea-484d-8acd5061d347"],
                                },
                                xValue: 0,
                                xUnit: "px",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-11-n-8",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".side-menu-gallery-subitem-wrapper",
                                    selectorGuids: ["2aceaa48-8253-c4ea-484d-8acd5061d347"],
                                },
                                value: 1,
                                unit: "",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1725884896411,
        },
        "a-12": {
            id: "a-12",
            title: "gallery-subitem-disappear",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-12-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "easeInOut",
                                duration: 100,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".gallery-expand-icon",
                                    selectorGuids: ["84b3abad-0fc9-fe40-1946-039c571da6bf"],
                                },
                                xValue: 0,
                                yValue: 0,
                                zValue: 90,
                                xUnit: "deg",
                                yUnit: "deg",
                                zUnit: "deg",
                            },
                        },
                        {
                            id: "a-12-n-6",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "easeInOut",
                                duration: 100,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".side-menu-gallery-subitem-wrapper",
                                    selectorGuids: ["2aceaa48-8253-c4ea-484d-8acd5061d347"],
                                },
                                value: 1,
                                unit: "",
                            },
                        },
                        {
                            id: "a-12-n-4",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".side-menu-gallery-subitem-wrapper",
                                    selectorGuids: ["2aceaa48-8253-c4ea-484d-8acd5061d347"],
                                },
                                value: "block",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-12-n-3",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "easeInOut",
                                duration: 100,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".gallery-expand-icon",
                                    selectorGuids: ["84b3abad-0fc9-fe40-1946-039c571da6bf"],
                                },
                                xValue: 0,
                                yValue: 0,
                                zValue: 0,
                                xUnit: "deg",
                                yUnit: "deg",
                                zUnit: "deg",
                            },
                        },
                        {
                            id: "a-12-n-7",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".side-menu-gallery-subitem-wrapper",
                                    selectorGuids: ["2aceaa48-8253-c4ea-484d-8acd5061d347"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                        {
                            id: "a-12-n-5",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".side-menu-gallery-subitem-wrapper",
                                    selectorGuids: ["2aceaa48-8253-c4ea-484d-8acd5061d347"],
                                },
                                value: "none",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1725885210244,
        },
        "a-9": {
            id: "a-9",
            title: "side-menu-appear",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-9-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    selector: ".side-menu-section",
                                    selectorGuids: ["703a9bd8-4e3a-c3cf-0fc5-7851c8937d49"],
                                },
                                value: "none",
                            },
                        },
                        {
                            id: "a-9-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".side-menu-section",
                                    selectorGuids: ["703a9bd8-4e3a-c3cf-0fc5-7851c8937d49"],
                                },
                                xValue: 20,
                                xUnit: "px",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-9-n-6",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".side-menu-section",
                                    selectorGuids: ["703a9bd8-4e3a-c3cf-0fc5-7851c8937d49"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-9-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "easeInOut",
                                duration: 500,
                                target: {
                                    selector: ".side-menu-section",
                                    selectorGuids: ["703a9bd8-4e3a-c3cf-0fc5-7851c8937d49"],
                                },
                                xValue: 0,
                                xUnit: "px",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-9-n-7",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "easeInOut",
                                duration: 500,
                                target: {
                                    selector: ".side-menu-section",
                                    selectorGuids: ["703a9bd8-4e3a-c3cf-0fc5-7851c8937d49"],
                                },
                                value: 1,
                                unit: "",
                            },
                        },
                        {
                            id: "a-9-n-2",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    selector: ".side-menu-section",
                                    selectorGuids: ["703a9bd8-4e3a-c3cf-0fc5-7851c8937d49"],
                                },
                                value: "flex",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1725882748558,
        },
    },
    site: {
        mediaQueries: [
            { key: "main", min: 992, max: 10000 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
        ],
    },
});

// Get all video elements with the class 'stop-video'
const videos = document.querySelectorAll('.stop-video');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Check if the video is out of view by at least 60%
        if (entry.intersectionRatio < 0.4) {
            // Pause the video
            entry.target.pause();
        }
    });
}, {
    threshold: [0, 0.4, 1]
});


// Start observing each video element
videos.forEach((video) => {
    observer.observe(video);

    // Add an event listener for fullscreen change
    video.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            // If exiting fullscreen, pause the video
            video.pause();
        }
    });

    // For browsers that use the webkit prefix
    video.addEventListener('webkitfullscreenchange', () => {
        if (!document.webkitFullscreenElement) {
            // If exiting fullscreen, pause the video
            video.pause();
        }
    });

    // For browsers that use the moz prefix
    video.addEventListener('mozfullscreenchange', () => {
        if (!document.mozFullScreenElement) {
            // If exiting fullscreen, pause the video
            video.pause();
        }
    });

    // For browsers that use the ms prefix
    video.addEventListener('msfullscreenchange', () => {
        if (!document.msFullscreenElement) {
            // If exiting fullscreen, pause the video
            video.pause();
        }
    });
});