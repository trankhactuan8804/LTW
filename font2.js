function rgb2hex(t) {
    if (t) {
        function e(t) {
            return ("0" + parseInt(t).toString(16)).slice(-2);
        }
        return (
            "#" +
            e((t = t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))[1]) +
            e(t[2]) +
            e(t[3])
        );
    }
}

if (!window.vendor) {
    window.vendor = function() {
        (function() {
                function t(t, e) {
                    for (var n in e) G.call(e, n) && (t[n] = e[n]);

                    function i() {
                        this.constructor = t;
                    }
                    return (
                        (i.prototype = e.prototype),
                        (t.prototype = new i()),
                        (t.__super__ = e.prototype),
                        t
                    );
                }
                var l,
                    c,
                    e,
                    n,
                    r,
                    i,
                    o,
                    s,
                    a,
                    b,
                    u,
                    h,
                    y,
                    f,
                    p,
                    d,
                    g,
                    _,
                    w,
                    m,
                    v,
                    x,
                    C,
                    E,
                    T,
                    S,
                    k,
                    D,
                    I,
                    P,
                    N,
                    A,
                    O,
                    L,
                    j,
                    H,
                    M,
                    R,
                    q,
                    W,
                    F,
                    B,
                    U,
                    z,
                    Y,
                    V,
                    K,
                    X,
                    Q,
                    $ = [].slice,
                    G = {}.hasOwnProperty,
                    J = [].indexOf ||
                    function(t) {
                        for (var e = 0, n = this.length; e < n; e++)
                            if (e in this && this[e] === t) return e;
                        return -1;
                    };

                function Z() {}
                for (
                    v = {
                        catchupTime: 100,
                        initialRate: 0.03,
                        minTime: 250,
                        ghostTime: 100,
                        maxProgressPerFrame: 20,
                        easeFactor: 1.25,
                        startOnPageLoad: !0,
                        restartOnPushState: !0,
                        restartOnRequestAfter: 500,
                        target: "body",
                        elements: {
                            checkInterval: 100,
                            selectors: ["body"]
                        },
                        eventLag: {
                            minSamples: 10,
                            sampleCount: 3,
                            lagThreshold: 3
                        },
                        ajax: {
                            trackMethods: ["GET"],
                            trackWebSockets: !0,
                            ignoreURLs: []
                        }
                    },
                    I = function() {
                        var t;
                        return null !=
                            (t =
                                "undefined" != typeof performance &&
                                null !== performance &&
                                "function" == typeof performance.now ?
                                performance.now() :
                                void 0) ?
                            t :
                            +new Date();
                    },
                    N =
                    window.requestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.msRequestAnimationFrame,
                    m = window.cancelAnimationFrame || window.mozCancelAnimationFrame,
                    null == N &&
                    ((N = function(t) {
                            return setTimeout(t, 50);
                        }),
                        (m = function(t) {
                            return clearTimeout(t);
                        })),
                    O = function(e) {
                        var n, i;
                        return (
                            (n = I()),
                            (i = function() {
                                var t;
                                return 33 <= (t = I() - n) ?
                                    ((n = I()),
                                        e(t, function() {
                                            return N(i);
                                        })) :
                                    setTimeout(i, 33 - t);
                            })()
                        );
                    },
                    A = function() {
                        var t, e, n;
                        return (
                            (n = arguments[0]),
                            (e = arguments[1]),
                            (t = 3 <= arguments.length ? $.call(arguments, 2) : []),
                            "function" == typeof n[e] ? n[e].apply(n, t) : n[e]
                        );
                    },
                    x = function() {
                        var t, e, n, i, o, r, s;
                        for (
                            e = arguments[0],
                            r = 0,
                            s = (i = 2 <= arguments.length ? $.call(arguments, 1) : [])
                            .length; r < s; r++
                        )
                            if ((n = i[r]))
                                for (t in n)
                                    G.call(n, t) &&
                                    ((o = n[t]),
                                        null != e[t] &&
                                        "object" == typeof e[t] &&
                                        null != o &&
                                        "object" == typeof o ?
                                        x(e[t], o) :
                                        (e[t] = o));
                        return e;
                    },
                    g = function(t) {
                        var e, n, i, o, r;
                        for (n = e = 0, o = 0, r = t.length; o < r; o++)
                            (i = t[o]), (n += Math.abs(i)), e++;
                        return n / e;
                    },
                    E = function(t, e) {
                        var n, i, o;
                        if (
                            (null == t && (t = "options"),
                                null == e && (e = !0),
                                (o = document.querySelector("[data-pace-" + t + "]")))
                        ) {
                            if (((n = o.getAttribute("data-pace-" + t)), !e)) return n;
                            try {
                                return JSON.parse(n);
                            } catch (t) {
                                return (
                                    (i = t),
                                    "undefined" != typeof console && null !== console ?
                                    console.error("Error parsing inline pace options", i) :
                                    void 0
                                );
                            }
                        }
                    },
                    Z.prototype.on = function(t, e, n, i) {
                        var o;
                        return (
                            null == i && (i = !1),
                            null == this.bindings && (this.bindings = {}),
                            null == (o = this.bindings)[t] && (o[t] = []),
                            this.bindings[t].push({
                                handler: e,
                                ctx: n,
                                once: i
                            })
                        );
                    },
                    Z.prototype.once = function(t, e, n) {
                        return this.on(t, e, n, !0);
                    },
                    Z.prototype.off = function(t, e) {
                        var n, i, o;
                        if (null != (null != (i = this.bindings) ? i[t] : void 0)) {
                            if (null == e) return delete this.bindings[t];
                            for (n = 0, o = []; n < this.bindings[t].length;)
                                this.bindings[t][n].handler === e ?
                                o.push(this.bindings[t].splice(n, 1)) :
                                o.push(n++);
                            return o;
                        }
                    },
                    Z.prototype.trigger = function() {
                        var t, e, n, i, o, r, s, a, l;
                        if (
                            ((n = arguments[0]),
                                (t = 2 <= arguments.length ? $.call(arguments, 1) : []),
                                null != (s = this.bindings) ? s[n] : void 0)
                        ) {
                            for (o = 0, l = []; o < this.bindings[n].length;)
                                (i = (a = this.bindings[n][o]).handler),
                                (e = a.ctx),
                                (r = a.once),
                                i.apply(null != e ? e : this, t),
                                r ? l.push(this.bindings[n].splice(o, 1)) : l.push(o++);
                            return l;
                        }
                    },
                    o = Z,
                    b = window.Pace || {},
                    window.Pace = b,
                    x(b, o.prototype),
                    P = b.options = x({}, v, window.paceOptions, E()),
                    U = 0,
                    Y = (K = ["ajax", "document", "eventLag", "elements"]).length; U < Y; U++
                )
                    !0 === P[(M = K[U])] && (P[M] = v[M]);

                function tt() {
                    return tt.__super__.constructor.apply(this, arguments);
                }

                function et() {
                    this.progress = 0;
                }

                function nt() {
                    this.bindings = {};
                }

                function it() {
                    var n,
                        r = this;
                    it.__super__.constructor.apply(this, arguments),
                        (n = function(i) {
                            var o;
                            return (
                                (o = i.open),
                                (i.open = function(t, e, n) {
                                    return (
                                        H(t) &&
                                        r.trigger("request", {
                                            type: t,
                                            url: e,
                                            request: i
                                        }),
                                        o.apply(i, arguments)
                                    );
                                })
                            );
                        }),
                        (window.XMLHttpRequest = function(t) {
                            var e;
                            return (e = new B(t)), n(e), e;
                        });
                    try {
                        C(window.XMLHttpRequest, B);
                    } catch (t) {}
                    if (null != F) {
                        window.XDomainRequest = function() {
                            var t;
                            return (t = new F()), n(t), t;
                        };
                        try {
                            C(window.XDomainRequest, F);
                        } catch (t) {}
                    }
                    if (null != W && P.ajax.trackWebSockets) {
                        window.WebSocket = function(t, e) {
                            var n;
                            return (
                                (n = null != e ? new W(t, e) : new W(t)),
                                H("socket") &&
                                r.trigger("request", {
                                    type: "socket",
                                    url: t,
                                    protocols: e,
                                    request: n
                                }),
                                n
                            );
                        };
                        try {
                            C(window.WebSocket, W);
                        } catch (t) {}
                    }
                }

                function ot() {
                    var t = this;
                    (this.elements = []),
                    T().on("request", function() {
                        return t.watch.apply(t, arguments);
                    });
                }

                function rt(t) {
                    (this.selector = t), (this.progress = 0), this.check();
                }

                function st() {
                    var t,
                        e,
                        n = this;
                    (this.progress =
                        null != (e = this.states[document.readyState]) ? e : 100),
                    (t = document.onreadystatechange),
                    (document.onreadystatechange = function() {
                        return (
                            null != n.states[document.readyState] &&
                            (n.progress = n.states[document.readyState]),
                            "function" == typeof t ? t.apply(null, arguments) : void 0
                        );
                    });
                }

                function at(t) {
                    (this.source = t),
                    (this.last = this.sinceLastUpdate = 0),
                    (this.rate = P.initialRate),
                    (this.catchup = 0),
                    (this.progress = this.lastProgress = 0),
                    null != this.source && (this.progress = A(this.source, "progress"));
                }
                (Q = Error),
                t(tt, Q),
                    (a = tt),
                    (et.prototype.getElement = function() {
                        var t;
                        if (null == this.el) {
                            if (!(t = document.querySelector(P.target))) throw new a();
                            (this.el = document.createElement("div")),
                            (this.el.className = "pace pace-active"),
                            (document.body.className = document.body.className.replace(
                                /pace-done/g,
                                ""
                            )),
                            (document.body.className += " pace-running"),
                            (this.el.innerHTML =
                                '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>'),
                            null != t.firstChild ?
                                t.insertBefore(this.el, t.firstChild) :
                                t.appendChild(this.el);
                        }
                        return this.el;
                    }),
                    (et.prototype.finish = function() {
                        var t;
                        return (
                            ((t = this.getElement()).className = t.className.replace(
                                "pace-active",
                                ""
                            )),
                            (t.className += " pace-inactive"),
                            (document.body.className = document.body.className.replace(
                                "pace-running",
                                ""
                            )),
                            (document.body.className += " pace-done")
                        );
                    }),
                    (et.prototype.update = function(t) {
                        return (this.progress = t), this.render();
                    }),
                    (et.prototype.destroy = function() {
                        try {
                            this.getElement().parentNode.removeChild(this.getElement());
                        } catch (t) {
                            a = t;
                        }
                        return (this.el = void 0);
                    }),
                    (et.prototype.render = function() {
                        var t, e, n, i, o, r, s;
                        if (null == document.querySelector(P.target)) return !1;
                        for (
                            t = this.getElement(),
                            i = "translate3d(" + this.progress + "%, 0, 0)",
                            o = 0,
                            r = (s = ["webkitTransform", "msTransform", "transform"]).length; o < r; o++
                        )
                            (e = s[o]), (t.children[0].style[e] = i);
                        return (
                            (!this.lastRenderedProgress ||
                                this.lastRenderedProgress | (0 !== this.progress) | 0) &&
                            (t.children[0].setAttribute(
                                    "data-progress-text",
                                    (0 | this.progress) + "%"
                                ),
                                100 <= this.progress ?
                                (n = "99") :
                                ((n = this.progress < 10 ? "0" : ""),
                                    (n += 0 | this.progress)),
                                t.children[0].setAttribute("data-progress", "" + n)),
                            (this.lastRenderedProgress = this.progress)
                        );
                    }),
                    (et.prototype.done = function() {
                        return 100 <= this.progress;
                    }),
                    (c = et),
                    (nt.prototype.trigger = function(t, e) {
                        var n, i, o, r, s;
                        if (null != this.bindings[t]) {
                            for (s = [], i = 0, o = (r = this.bindings[t]).length; i < o; i++)
                                (n = r[i]), s.push(n.call(this, e));
                            return s;
                        }
                    }),
                    (nt.prototype.on = function(t, e) {
                        var n;
                        return (
                            null == (n = this.bindings)[t] && (n[t] = []),
                            this.bindings[t].push(e)
                        );
                    }),
                    (s = nt),
                    (B = window.XMLHttpRequest),
                    (F = window.XDomainRequest),
                    (W = window.WebSocket),
                    (C = function(t, e) {
                        var n, i;
                        for (n in ((i = []), e.prototype))
                            try {
                                null == t[n] && "function" != typeof e[n] ?
                                    "function" == typeof Object.defineProperty ?
                                    i.push(
                                        Object.defineProperty(t, n, {
                                            get: function() {
                                                return e.prototype[n];
                                            },
                                            configurable: !0,
                                            enumerable: !0
                                        })
                                    ) :
                                    i.push((t[n] = e.prototype[n])) :
                                    i.push(void 0);
                            } catch (t) {
                                t;
                            }
                        return i;
                    }),
                    (k = []),
                    (b.ignore = function() {
                        var t, e, n;
                        return (
                            (e = arguments[0]),
                            (t = 2 <= arguments.length ? $.call(arguments, 1) : []),
                            k.unshift("ignore"),
                            (n = e.apply(null, t)),
                            k.shift(),
                            n
                        );
                    }),
                    (b.track = function() {
                        var t, e, n;
                        return (
                            (e = arguments[0]),
                            (t = 2 <= arguments.length ? $.call(arguments, 1) : []),
                            k.unshift("track"),
                            (n = e.apply(null, t)),
                            k.shift(),
                            n
                        );
                    }),
                    (H = function(t) {
                        var e;
                        if ((null == t && (t = "GET"), "track" === k[0])) return "force";
                        if (!k.length && P.ajax) {
                            if ("socket" === t && P.ajax.trackWebSockets) return !0;
                            if (((e = t.toUpperCase()), 0 <= J.call(P.ajax.trackMethods, e)))
                                return !0;
                        }
                        return !1;
                    }),
                    t(it, s),
                    (u = it),
                    (z = null),
                    (j = function(t) {
                        var e, n, i, o;
                        for (n = 0, i = (o = P.ajax.ignoreURLs).length; n < i; n++)
                            if ("string" == typeof(e = o[n])) {
                                if (-1 !== t.indexOf(e)) return !0;
                            } else if (e.test(t)) return !0;
                        return !1;
                    }),
                    (T = function() {
                        return null == z && (z = new u()), z;
                    })().on("request", function(t) {
                        var e, r, s, a, n;
                        if (((a = t.type), (s = t.request), (n = t.url), !j(n)))
                            return b.running ||
                                (!1 === P.restartOnRequestAfter && "force" !== H(a)) ?
                                void 0 :
                                ((r = arguments),
                                    "boolean" == typeof(e = P.restartOnRequestAfter || 0) &&
                                    (e = 0),
                                    setTimeout(function() {
                                        var t, e, n, i, o;
                                        if (
                                            "socket" === a ?
                                            s.readyState < 2 :
                                            0 < (n = s.readyState) && n < 4
                                        ) {
                                            for (
                                                b.restart(), o = [], t = 0, e = (i = b.sources).length; t < e; t++
                                            ) {
                                                if ((M = i[t]) instanceof l) {
                                                    M.watch.apply(M, r);
                                                    break;
                                                }
                                                o.push(void 0);
                                            }
                                            return o;
                                        }
                                    }, e));
                    }),
                    (ot.prototype.watch = function(t) {
                        var e, n, i, o;
                        if (((i = t.type), (e = t.request), (o = t.url), !j(o)))
                            return (
                                (n = "socket" === i ? new f(e) : new p(e)), this.elements.push(n)
                            );
                    }),
                    (l = ot),
                    (p = function(e) {
                        var t,
                            n,
                            i,
                            o,
                            r,
                            s = this;
                        if (((this.progress = 0), null != window.ProgressEvent))
                            for (
                                e.addEventListener(
                                    "progress",
                                    function(t) {
                                        return t.lengthComputable ?
                                            (s.progress = (100 * t.loaded) / t.total) :
                                            (s.progress = s.progress + (100 - s.progress) / 2);
                                    }, !1
                                ),
                                n = 0,
                                i = (r = ["load", "abort", "timeout", "error"]).length; n < i; n++
                            )
                                (t = r[n]),
                                e.addEventListener(
                                    t,
                                    function() {
                                        return (s.progress = 100);
                                    }, !1
                                );
                        else
                            (o = e.onreadystatechange),
                            (e.onreadystatechange = function() {
                                var t;
                                return (
                                    0 === (t = e.readyState) || 4 === t ?
                                    (s.progress = 100) :
                                    3 === e.readyState && (s.progress = 50),
                                    "function" == typeof o ? o.apply(null, arguments) : void 0
                                );
                            });
                    }),
                    (f = function(t) {
                        var e,
                            n,
                            i,
                            o,
                            r = this;
                        for (
                            n = this.progress = 0, i = (o = ["error", "open"]).length; n < i; n++
                        )
                            (e = o[n]),
                            t.addEventListener(
                                e,
                                function() {
                                    return (r.progress = 100);
                                }, !1
                            );
                    }),
                    (n = function(t) {
                        var e, n, i, o;
                        for (
                            null == t && (t = {}),
                            this.elements = [],
                            null == t.selectors && (t.selectors = []),
                            n = 0,
                            i = (o = t.selectors).length; n < i; n++
                        )
                            (e = o[n]), this.elements.push(new r(e));
                    }),
                    (rt.prototype.check = function() {
                        var t = this;
                        return document.querySelector(this.selector) ?
                            this.done() :
                            setTimeout(function() {
                                return t.check();
                            }, P.elements.checkInterval);
                    }),
                    (rt.prototype.done = function() {
                        return (this.progress = 100);
                    }),
                    (r = rt),
                    (st.prototype.states = {
                        loading: 0,
                        interactive: 50,
                        complete: 100
                    }),
                    (e = st),
                    (i = function() {
                        var e,
                            n,
                            i,
                            o,
                            r,
                            s = this;
                        (this.progress = 0),
                        (r = []),
                        (o = e = 0),
                        (i = I()),
                        (n = setInterval(function() {
                            var t;
                            return (
                                (t = I() - i - 50),
                                (i = I()),
                                r.push(t),
                                r.length > P.eventLag.sampleCount && r.shift(),
                                (e = g(r)),
                                ++o >= P.eventLag.minSamples && e < P.eventLag.lagThreshold ?
                                ((s.progress = 100), clearInterval(n)) :
                                (s.progress = (3 / (e + 3)) * 100)
                            );
                        }, 50));
                    }),
                    (at.prototype.tick = function(t, e) {
                        var n;
                        return (
                            null == e && (e = A(this.source, "progress")),
                            100 <= e && (this.done = !0),
                            e === this.last ?
                            (this.sinceLastUpdate += t) :
                            (this.sinceLastUpdate &&
                                (this.rate = (e - this.last) / this.sinceLastUpdate),
                                (this.catchup = (e - this.progress) / P.catchupTime),
                                (this.sinceLastUpdate = 0),
                                (this.last = e)),
                            e > this.progress && (this.progress += this.catchup * t),
                            (n = 1 - Math.pow(this.progress / 100, P.easeFactor)),
                            (this.progress += n * this.rate * t),
                            (this.progress = Math.min(
                                this.lastProgress + P.maxProgressPerFrame,
                                this.progress
                            )),
                            (this.progress = Math.max(0, this.progress)),
                            (this.progress = Math.min(100, this.progress)),
                            (this.lastProgress = this.progress),
                            this.progress
                        );
                    }),
                    (y = at),
                    (w = d = q = _ = L = R = null),
                    (b.running = !1),
                    (S = function() {
                        if (P.restartOnPushState) return b.restart();
                    }),
                    null != window.history.pushState &&
                    ((V = window.history.pushState),
                        (window.history.pushState = function() {
                            return S(), V.apply(window.history, arguments);
                        })),
                    null != window.history.replaceState &&
                    ((X = window.history.replaceState),
                        (window.history.replaceState = function() {
                            return S(), X.apply(window.history, arguments);
                        })),
                    (h = {
                        ajax: l,
                        elements: n,
                        document: e,
                        eventLag: i
                    }),
                    (D = function() {
                        var t, e, n, i, o, r, s, a;
                        for (
                            b.sources = R = [],
                            e = 0,
                            i = (r = ["ajax", "elements", "document", "eventLag"]).length; e < i; e++
                        )
                            !1 !== P[(t = r[e])] && R.push(new h[t](P[t]));
                        for (
                            n = 0, o = (a = null != (s = P.extraSources) ? s : []).length; n < o; n++
                        )
                            (M = a[n]), R.push(new M(P));
                        return (b.bar = _ = new c()), (L = []), (q = new y());
                    })(),
                    (b.stop = function() {
                        return (
                            b.trigger("stop"),
                            (b.running = !1),
                            _.destroy(),
                            (w = !0),
                            null != d && ("function" == typeof m && m(d), (d = null)),
                            D()
                        );
                    }),
                    (b.restart = function() {
                        return b.trigger("restart"), b.stop(), b.start();
                    }),
                    (b.go = function() {
                        var v;
                        return (
                            (b.running = !0),
                            _.render(),
                            (v = I()),
                            (w = !1),
                            (d = O(function(t, e) {
                                var n, i, o, r, s, a, l, c, u, h, f, p, d, g, m;
                                for (
                                    100 - _.progress, i = h = 0, o = !0, a = f = 0, d = R.length; f < d; a = ++f
                                )
                                    for (
                                        M = R[a],
                                        u = null != L[a] ? L[a] : (L[a] = []),
                                        l = p = 0,
                                        g = (s = null != (m = M.elements) ? m : [M]).length; p < g; l = ++p
                                    )
                                        (r = s[l]),
                                        (o &= (c = null != u[l] ? u[l] : (u[l] = new y(r))).done),
                                        c.done || (i++, (h += c.tick(t)));
                                return (
                                    (n = h / i),
                                    _.update(q.tick(t, n)),
                                    _.done() || o || w ?
                                    (_.update(100),
                                        b.trigger("done"),
                                        setTimeout(function() {
                                            return _.finish(), (b.running = !1), b.trigger("hide");
                                        }, Math.max(
                                            P.ghostTime,
                                            Math.max(P.minTime - (I() - v), 0)
                                        ))) :
                                    e()
                                );
                            }))
                        );
                    }),
                    (b.start = function(t) {
                        x(P, t), (b.running = !0);
                        try {
                            _.render();
                        } catch (t) {
                            a = t;
                        }
                        return document.querySelector(".pace") ?
                            (b.trigger("start"), b.go()) :
                            setTimeout(b.start, 50);
                    }),
                    "function" == typeof define && define.amd ?
                    define(["pace"], function() {
                        return b;
                    }) :
                    "object" == typeof exports ?
                    (module.exports = b) :
                    P.startOnPageLoad && b.start();
            }.call(this),
            (function(t, e) {
                "use strict";
                "object" == typeof module && "object" == typeof module.exports ?
                    (module.exports = t.document ?
                        e(t, !0) :
                        function(t) {
                            if (!t.document)
                                throw new Error("jQuery requires a window with a document");
                            return e(t);
                        }) :
                    e(t);
            })("undefined" != typeof window ? window : this, function(C, t) {
                "use strict";

                function g(t) {
                    return null != t && t === t.window;
                }
                var e = [],
                    E = C.document,
                    i = Object.getPrototypeOf,
                    a = e.slice,
                    m = e.concat,
                    l = e.push,
                    o = e.indexOf,
                    n = {},
                    r = n.toString,
                    v = n.hasOwnProperty,
                    s = v.toString,
                    c = s.call(Object),
                    b = {},
                    y = function(t) {
                        return "function" == typeof t && "number" != typeof t.nodeType;
                    },
                    u = {
                        type: !0,
                        src: !0,
                        nonce: !0,
                        noModule: !0
                    };

                function _(t, e, n) {
                    var i,
                        o,
                        r = (n = n || E).createElement("script");
                    if (((r.text = t), e))
                        for (i in u)
                            (o = e[i] || (e.getAttribute && e.getAttribute(i))) &&
                            r.setAttribute(i, o);
                    n.head.appendChild(r).parentNode.removeChild(r);
                }

                function w(t) {
                    return null == t ?
                        t + "" :
                        "object" == typeof t || "function" == typeof t ?
                        n[r.call(t)] || "object" :
                        typeof t;
                }
                var T = function(t, e) {
                        return new T.fn.init(t, e);
                    },
                    h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

                function f(t) {
                    var e = !!t && "length" in t && t.length,
                        n = w(t);
                    return (!y(t) &&
                        !g(t) &&
                        ("array" === n ||
                            0 === e ||
                            ("number" == typeof e && 0 < e && e - 1 in t))
                    );
                }
                (T.fn = T.prototype = {
                    jquery: "3.4.1",
                    constructor: T,
                    length: 0,
                    toArray: function() {
                        return a.call(this);
                    },
                    get: function(t) {
                        return null == t ?
                            a.call(this) :
                            t < 0 ?
                            this[t + this.length] :
                            this[t];
                    },
                    pushStack: function(t) {
                        var e = T.merge(this.constructor(), t);
                        return (e.prevObject = this), e;
                    },
                    each: function(t) {
                        return T.each(this, t);
                    },
                    map: function(n) {
                        return this.pushStack(
                            T.map(this, function(t, e) {
                                return n.call(t, e, t);
                            })
                        );
                    },
                    slice: function() {
                        return this.pushStack(a.apply(this, arguments));
                    },
                    first: function() {
                        return this.eq(0);
                    },
                    last: function() {
                        return this.eq(-1);
                    },
                    eq: function(t) {
                        var e = this.length,
                            n = +t + (t < 0 ? e : 0);
                        return this.pushStack(0 <= n && n < e ? [this[n]] : []);
                    },
                    end: function() {
                        return this.prevObject || this.constructor();
                    },
                    push: l,
                    sort: e.sort,
                    splice: e.splice
                }),
                (T.extend = T.fn.extend = function() {
                    var t,
                        e,
                        n,
                        i,
                        o,
                        r,
                        s = arguments[0] || {},
                        a = 1,
                        l = arguments.length,
                        c = !1;
                    for (
                        "boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++),
                        "object" == typeof s || y(s) || (s = {}),
                        a === l && ((s = this), a--); a < l; a++
                    )
                        if (null != (t = arguments[a]))
                            for (e in t)
                                (i = t[e]),
                                "__proto__" !== e &&
                                s !== i &&
                                (c && i && (T.isPlainObject(i) || (o = Array.isArray(i))) ?
                                    ((n = s[e]),
                                        (r =
                                            o && !Array.isArray(n) ?
                                            [] :
                                            o || T.isPlainObject(n) ?
                                            n :
                                            {}),
                                        (o = !1),
                                        (s[e] = T.extend(c, r, i))) :
                                    void 0 !== i && (s[e] = i));
                    return s;
                }),
                T.extend({
                        expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function(t) {
                            throw new Error(t);
                        },
                        noop: function() {},
                        isPlainObject: function(t) {
                            var e, n;
                            return (!(!t || "[object Object]" !== r.call(t)) &&
                                (!(e = i(t)) ||
                                    ("function" ==
                                        typeof(n = v.call(e, "constructor") && e.constructor) &&
                                        s.call(n) === c))
                            );
                        },
                        isEmptyObject: function(t) {
                            var e;
                            for (e in t) return !1;
                            return !0;
                        },
                        globalEval: function(t, e) {
                            _(t, {
                                nonce: e && e.nonce
                            });
                        },
                        each: function(t, e) {
                            var n,
                                i = 0;
                            if (f(t))
                                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
                            else
                                for (i in t)
                                    if (!1 === e.call(t[i], i, t[i])) break;
                            return t;
                        },
                        trim: function(t) {
                            return null == t ? "" : (t + "").replace(h, "");
                        },
                        makeArray: function(t, e) {
                            var n = e || [];
                            return (
                                null != t &&
                                (f(Object(t)) ?
                                    T.merge(n, "string" == typeof t ? [t] : t) :
                                    l.call(n, t)),
                                n
                            );
                        },
                        inArray: function(t, e, n) {
                            return null == e ? -1 : o.call(e, t, n);
                        },
                        merge: function(t, e) {
                            for (var n = +e.length, i = 0, o = t.length; i < n; i++)
                                t[o++] = e[i];
                            return (t.length = o), t;
                        },
                        grep: function(t, e, n) {
                            for (var i = [], o = 0, r = t.length, s = !n; o < r; o++)
                                !e(t[o], o) != s && i.push(t[o]);
                            return i;
                        },
                        map: function(t, e, n) {
                            var i,
                                o,
                                r = 0,
                                s = [];
                            if (f(t))
                                for (i = t.length; r < i; r++)
                                    null != (o = e(t[r], r, n)) && s.push(o);
                            else
                                for (r in t) null != (o = e(t[r], r, n)) && s.push(o);
                            return m.apply([], s);
                        },
                        guid: 1,
                        support: b
                    }),
                    "function" == typeof Symbol &&
                    (T.fn[Symbol.iterator] = e[Symbol.iterator]),
                    T.each(
                        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                            " "
                        ),
                        function(t, e) {
                            n["[object " + e + "]"] = e.toLowerCase();
                        }
                    );
                var p = (function(n) {
                    function h(t, e, n) {
                        var i = "0x" + e - 65536;
                        return i != i || n ?
                            e :
                            i < 0 ?
                            String.fromCharCode(65536 + i) :
                            String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
                    }

                    function o() {
                        x();
                    }
                    var t,
                        p,
                        _,
                        r,
                        s,
                        d,
                        f,
                        g,
                        w,
                        l,
                        c,
                        x,
                        C,
                        a,
                        E,
                        m,
                        u,
                        v,
                        b,
                        T = "sizzle" + 1 * new Date(),
                        y = n.document,
                        S = 0,
                        i = 0,
                        k = lt(),
                        D = lt(),
                        I = lt(),
                        P = lt(),
                        N = function(t, e) {
                            return t === e && (c = !0), 0;
                        },
                        A = {}.hasOwnProperty,
                        e = [],
                        O = e.pop,
                        L = e.push,
                        j = e.push,
                        H = e.slice,
                        M = function(t, e) {
                            for (var n = 0, i = t.length; n < i; n++)
                                if (t[n] === e) return n;
                            return -1;
                        },
                        R =
                        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        q = "[\\x20\\t\\r\\n\\f]",
                        W = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                        F =
                        "\\[" +
                        q +
                        "*(" +
                        W +
                        ")(?:" +
                        q +
                        "*([*^$|!~]?=)" +
                        q +
                        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                        W +
                        "))|)" +
                        q +
                        "*\\]",
                        B =
                        ":(" +
                        W +
                        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                        F +
                        ")*)|.*)\\)|)",
                        U = new RegExp(q + "+", "g"),
                        z = new RegExp(
                            "^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$",
                            "g"
                        ),
                        Y = new RegExp("^" + q + "*," + q + "*"),
                        V = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
                        K = new RegExp(q + "|>"),
                        X = new RegExp(B),
                        Q = new RegExp("^" + W + "$"),
                        $ = {
                            ID: new RegExp("^#(" + W + ")"),
                            CLASS: new RegExp("^\\.(" + W + ")"),
                            TAG: new RegExp("^(" + W + "|[*])"),
                            ATTR: new RegExp("^" + F),
                            PSEUDO: new RegExp("^" + B),
                            CHILD: new RegExp(
                                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                                q +
                                "*(even|odd|(([+-]|)(\\d*)n|)" +
                                q +
                                "*(?:([+-]|)" +
                                q +
                                "*(\\d+)|))" +
                                q +
                                "*\\)|)",
                                "i"
                            ),
                            bool: new RegExp("^(?:" + R + ")$", "i"),
                            needsContext: new RegExp(
                                "^" +
                                q +
                                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                                q +
                                "*((?:-\\d)?\\d*)" +
                                q +
                                "*\\)|)(?=[^-]|$)",
                                "i"
                            )
                        },
                        G = /HTML$/i,
                        J = /^(?:input|select|textarea|button)$/i,
                        Z = /^h\d$/i,
                        tt = /^[^{]+\{\s*\[native \w/,
                        et = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        nt = /[+~]/,
                        it = new RegExp(
                            "\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)",
                            "ig"
                        ),
                        ot = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        rt = function(t, e) {
                            return e ?
                                "\0" === t ?
                                "�" :
                                t.slice(0, -1) +
                                "\\" +
                                t.charCodeAt(t.length - 1).toString(16) +
                                " " :
                                "\\" + t;
                        },
                        st = _t(
                            function(t) {
                                return (!0 === t.disabled && "fieldset" === t.nodeName.toLowerCase());
                            }, {
                                dir: "parentNode",
                                next: "legend"
                            }
                        );
                    try {
                        j.apply((e = H.call(y.childNodes)), y.childNodes),
                            e[y.childNodes.length].nodeType;
                    } catch (t) {
                        j = {
                            apply: e.length ?
                                function(t, e) {
                                    L.apply(t, H.call(e));
                                } :
                                function(t, e) {
                                    for (var n = t.length, i = 0;
                                        (t[n++] = e[i++]););
                                    t.length = n - 1;
                                }
                        };
                    }

                    function at(e, t, n, i) {
                        var o,
                            r,
                            s,
                            a,
                            l,
                            c,
                            u,
                            h = t && t.ownerDocument,
                            f = t ? t.nodeType : 9;
                        if (
                            ((n = n || []),
                                "string" != typeof e || !e || (1 !== f && 9 !== f && 11 !== f))
                        )
                            return n;
                        if (!i &&
                            ((t ? t.ownerDocument || t : y) !== C && x(t), (t = t || C), E)
                        ) {
                            if (11 !== f && (l = et.exec(e)))
                                if ((o = l[1])) {
                                    if (9 === f) {
                                        if (!(s = t.getElementById(o))) return n;
                                        if (s.id === o) return n.push(s), n;
                                    } else if (
                                        h &&
                                        (s = h.getElementById(o)) &&
                                        b(t, s) &&
                                        s.id === o
                                    )
                                        return n.push(s), n;
                                } else {
                                    if (l[2]) return j.apply(n, t.getElementsByTagName(e)), n;
                                    if (
                                        (o = l[3]) &&
                                        p.getElementsByClassName &&
                                        t.getElementsByClassName
                                    )
                                        return j.apply(n, t.getElementsByClassName(o)), n;
                                }
                            if (
                                p.qsa &&
                                !P[e + " "] &&
                                (!m || !m.test(e)) &&
                                (1 !== f || "object" !== t.nodeName.toLowerCase())
                            ) {
                                if (((u = e), (h = t), 1 === f && K.test(e))) {
                                    for (
                                        (a = t.getAttribute("id")) ?
                                        (a = a.replace(ot, rt)) :
                                        t.setAttribute("id", (a = T)),
                                        r = (c = d(e)).length; r--;

                                    )
                                        c[r] = "#" + a + " " + yt(c[r]);
                                    (u = c.join(",")),
                                    (h = (nt.test(e) && vt(t.parentNode)) || t);
                                }
                                try {
                                    return j.apply(n, h.querySelectorAll(u)), n;
                                } catch (t) {
                                    P(e, !0);
                                } finally {
                                    a === T && t.removeAttribute("id");
                                }
                            }
                        }
                        return g(e.replace(z, "$1"), t, n, i);
                    }

                    function lt() {
                        var i = [];
                        return function t(e, n) {
                            return (
                                i.push(e + " ") > _.cacheLength && delete t[i.shift()],
                                (t[e + " "] = n)
                            );
                        };
                    }

                    function ct(t) {
                        return (t[T] = !0), t;
                    }

                    function ut(t) {
                        var e = C.createElement("fieldset");
                        try {
                            return !!t(e);
                        } catch (t) {
                            return !1;
                        } finally {
                            e.parentNode && e.parentNode.removeChild(e), (e = null);
                        }
                    }

                    function ht(t, e) {
                        for (var n = t.split("|"), i = n.length; i--;)
                            _.attrHandle[n[i]] = e;
                    }

                    function ft(t, e) {
                        var n = e && t,
                            i =
                            n &&
                            1 === t.nodeType &&
                            1 === e.nodeType &&
                            t.sourceIndex - e.sourceIndex;
                        if (i) return i;
                        if (n)
                            for (;
                                (n = n.nextSibling);)
                                if (n === e) return -1;
                        return t ? 1 : -1;
                    }

                    function pt(e) {
                        return function(t) {
                            return "input" === t.nodeName.toLowerCase() && t.type === e;
                        };
                    }

                    function dt(n) {
                        return function(t) {
                            var e = t.nodeName.toLowerCase();
                            return ("input" === e || "button" === e) && t.type === n;
                        };
                    }

                    function gt(e) {
                        return function(t) {
                            return "form" in t ?
                                t.parentNode && !1 === t.disabled ?
                                "label" in t ?
                                "label" in t.parentNode ?
                                t.parentNode.disabled === e :
                                t.disabled === e :
                                t.isDisabled === e || (t.isDisabled !== !e && st(t) === e) :
                                t.disabled === e :
                                "label" in t && t.disabled === e;
                        };
                    }

                    function mt(s) {
                        return ct(function(r) {
                            return (
                                (r = +r),
                                ct(function(t, e) {
                                    for (var n, i = s([], t.length, r), o = i.length; o--;)
                                        t[(n = i[o])] && (t[n] = !(e[n] = t[n]));
                                })
                            );
                        });
                    }

                    function vt(t) {
                        return t && void 0 !== t.getElementsByTagName && t;
                    }
                    for (t in ((p = at.support = {}),
                            (s = at.isXML = function(t) {
                                var e = t.namespaceURI,
                                    n = (t.ownerDocument || t).documentElement;
                                return !G.test(e || (n && n.nodeName) || "HTML");
                            }),
                            (x = at.setDocument = function(t) {
                                var e,
                                    n,
                                    i = t ? t.ownerDocument || t : y;
                                return (
                                    i !== C &&
                                    9 === i.nodeType &&
                                    i.documentElement &&
                                    ((a = (C = i).documentElement),
                                        (E = !s(C)),
                                        y !== C &&
                                        (n = C.defaultView) &&
                                        n.top !== n &&
                                        (n.addEventListener ?
                                            n.addEventListener("unload", o, !1) :
                                            n.attachEvent && n.attachEvent("onunload", o)),
                                        (p.attributes = ut(function(t) {
                                            return (t.className = "i"), !t.getAttribute("className");
                                        })),
                                        (p.getElementsByTagName = ut(function(t) {
                                            return (
                                                t.appendChild(C.createComment("")), !t.getElementsByTagName("*").length
                                            );
                                        })),
                                        (p.getElementsByClassName = tt.test(C.getElementsByClassName)),
                                        (p.getById = ut(function(t) {
                                            return (
                                                (a.appendChild(t).id = T), !C.getElementsByName || !C.getElementsByName(T).length
                                            );
                                        })),
                                        p.getById ?
                                        ((_.filter.ID = function(t) {
                                                var e = t.replace(it, h);
                                                return function(t) {
                                                    return t.getAttribute("id") === e;
                                                };
                                            }),
                                            (_.find.ID = function(t, e) {
                                                if (void 0 !== e.getElementById && E) {
                                                    var n = e.getElementById(t);
                                                    return n ? [n] : [];
                                                }
                                            })) :
                                        ((_.filter.ID = function(t) {
                                                var n = t.replace(it, h);
                                                return function(t) {
                                                    var e =
                                                        void 0 !== t.getAttributeNode &&
                                                        t.getAttributeNode("id");
                                                    return e && e.value === n;
                                                };
                                            }),
                                            (_.find.ID = function(t, e) {
                                                if (void 0 !== e.getElementById && E) {
                                                    var n,
                                                        i,
                                                        o,
                                                        r = e.getElementById(t);
                                                    if (r) {
                                                        if ((n = r.getAttributeNode("id")) && n.value === t)
                                                            return [r];
                                                        for (
                                                            o = e.getElementsByName(t), i = 0;
                                                            (r = o[i++]);

                                                        )
                                                            if ((n = r.getAttributeNode("id")) && n.value === t)
                                                                return [r];
                                                    }
                                                    return [];
                                                }
                                            })),
                                        (_.find.TAG = p.getElementsByTagName ?
                                            function(t, e) {
                                                return void 0 !== e.getElementsByTagName ?
                                                    e.getElementsByTagName(t) :
                                                    p.qsa ?
                                                    e.querySelectorAll(t) :
                                                    void 0;
                                            } :
                                            function(t, e) {
                                                var n,
                                                    i = [],
                                                    o = 0,
                                                    r = e.getElementsByTagName(t);
                                                if ("*" !== t) return r;
                                                for (;
                                                    (n = r[o++]);) 1 === n.nodeType && i.push(n);
                                                return i;
                                            }),
                                        (_.find.CLASS =
                                            p.getElementsByClassName &&
                                            function(t, e) {
                                                if (void 0 !== e.getElementsByClassName && E)
                                                    return e.getElementsByClassName(t);
                                            }),
                                        (u = []),
                                        (m = []),
                                        (p.qsa = tt.test(C.querySelectorAll)) &&
                                        (ut(function(t) {
                                                (a.appendChild(t).innerHTML =
                                                    "<a id='" +
                                                    T +
                                                    "'></a><select id='" +
                                                    T +
                                                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                                t.querySelectorAll("[msallowcapture^='']").length &&
                                                    m.push("[*^$]=" + q + "*(?:''|\"\")"),
                                                    t.querySelectorAll("[selected]").length ||
                                                    m.push("\\[" + q + "*(?:value|" + R + ")"),
                                                    t.querySelectorAll("[id~=" + T + "-]").length ||
                                                    m.push("~="),
                                                    t.querySelectorAll(":checked").length ||
                                                    m.push(":checked"),
                                                    t.querySelectorAll("a#" + T + "+*").length ||
                                                    m.push(".#.+[+~]");
                                            }),
                                            ut(function(t) {
                                                t.innerHTML =
                                                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                                var e = C.createElement("input");
                                                e.setAttribute("type", "hidden"),
                                                    t.appendChild(e).setAttribute("name", "D"),
                                                    t.querySelectorAll("[name=d]").length &&
                                                    m.push("name" + q + "*[*^$|!~]?="),
                                                    2 !== t.querySelectorAll(":enabled").length &&
                                                    m.push(":enabled", ":disabled"),
                                                    (a.appendChild(t).disabled = !0),
                                                    2 !== t.querySelectorAll(":disabled").length &&
                                                    m.push(":enabled", ":disabled"),
                                                    t.querySelectorAll("*,:x"),
                                                    m.push(",.*:");
                                            })),
                                        (p.matchesSelector = tt.test(
                                            (v =
                                                a.matches ||
                                                a.webkitMatchesSelector ||
                                                a.mozMatchesSelector ||
                                                a.oMatchesSelector ||
                                                a.msMatchesSelector)
                                        )) &&
                                        ut(function(t) {
                                            (p.disconnectedMatch = v.call(t, "*")),
                                            v.call(t, "[s!='']:x"),
                                                u.push("!=", B);
                                        }),
                                        (m = m.length && new RegExp(m.join("|"))),
                                        (u = u.length && new RegExp(u.join("|"))),
                                        (e = tt.test(a.compareDocumentPosition)),
                                        (b =
                                            e || tt.test(a.contains) ?
                                            function(t, e) {
                                                var n = 9 === t.nodeType ? t.documentElement : t,
                                                    i = e && e.parentNode;
                                                return (
                                                    t === i ||
                                                    !(!i ||
                                                        1 !== i.nodeType ||
                                                        !(n.contains ?
                                                            n.contains(i) :
                                                            t.compareDocumentPosition &&
                                                            16 & t.compareDocumentPosition(i))
                                                    )
                                                );
                                            } :
                                            function(t, e) {
                                                if (e)
                                                    for (;
                                                        (e = e.parentNode);)
                                                        if (e === t) return !0;
                                                return !1;
                                            }),
                                        (N = e ?
                                            function(t, e) {
                                                if (t === e) return (c = !0), 0;
                                                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                                return (
                                                    n ||
                                                    (1 &
                                                        (n =
                                                            (t.ownerDocument || t) === (e.ownerDocument || e) ?
                                                            t.compareDocumentPosition(e) :
                                                            1) ||
                                                        (!p.sortDetached && e.compareDocumentPosition(t) === n) ?
                                                        t === C || (t.ownerDocument === y && b(y, t)) ?
                                                        -1 :
                                                        e === C || (e.ownerDocument === y && b(y, e)) ?
                                                        1 :
                                                        l ?
                                                        M(l, t) - M(l, e) :
                                                        0 :
                                                        4 & n ?
                                                        -1 :
                                                        1)
                                                );
                                            } :
                                            function(t, e) {
                                                if (t === e) return (c = !0), 0;
                                                var n,
                                                    i = 0,
                                                    o = t.parentNode,
                                                    r = e.parentNode,
                                                    s = [t],
                                                    a = [e];
                                                if (!o || !r)
                                                    return t === C ?
                                                        -1 :
                                                        e === C ?
                                                        1 :
                                                        o ?
                                                        -1 :
                                                        r ?
                                                        1 :
                                                        l ?
                                                        M(l, t) - M(l, e) :
                                                        0;
                                                if (o === r) return ft(t, e);
                                                for (n = t;
                                                    (n = n.parentNode);) s.unshift(n);
                                                for (n = e;
                                                    (n = n.parentNode);) a.unshift(n);
                                                for (; s[i] === a[i];) i++;
                                                return i ?
                                                    ft(s[i], a[i]) :
                                                    s[i] === y ?
                                                    -1 :
                                                    a[i] === y ?
                                                    1 :
                                                    0;
                                            })),
                                    C
                                );
                            }),
                            (at.matches = function(t, e) {
                                return at(t, null, null, e);
                            }),
                            (at.matchesSelector = function(t, e) {
                                if (
                                    ((t.ownerDocument || t) !== C && x(t),
                                        p.matchesSelector &&
                                        E &&
                                        !P[e + " "] &&
                                        (!u || !u.test(e)) &&
                                        (!m || !m.test(e)))
                                )
                                    try {
                                        var n = v.call(t, e);
                                        if (
                                            n ||
                                            p.disconnectedMatch ||
                                            (t.document && 11 !== t.document.nodeType)
                                        )
                                            return n;
                                    } catch (t) {
                                        P(e, !0);
                                    }
                                return 0 < at(e, C, null, [t]).length;
                            }),
                            (at.contains = function(t, e) {
                                return (t.ownerDocument || t) !== C && x(t), b(t, e);
                            }),
                            (at.attr = function(t, e) {
                                (t.ownerDocument || t) !== C && x(t);
                                var n = _.attrHandle[e.toLowerCase()],
                                    i =
                                    n && A.call(_.attrHandle, e.toLowerCase()) ?
                                    n(t, e, !E) :
                                    void 0;
                                return void 0 !== i ?
                                    i :
                                    p.attributes || !E ?
                                    t.getAttribute(e) :
                                    (i = t.getAttributeNode(e)) && i.specified ?
                                    i.value :
                                    null;
                            }),
                            (at.escape = function(t) {
                                return (t + "").replace(ot, rt);
                            }),
                            (at.error = function(t) {
                                throw new Error("Syntax error, unrecognized expression: " + t);
                            }),
                            (at.uniqueSort = function(t) {
                                var e,
                                    n = [],
                                    i = 0,
                                    o = 0;
                                if (
                                    ((c = !p.detectDuplicates),
                                        (l = !p.sortStable && t.slice(0)),
                                        t.sort(N),
                                        c)
                                ) {
                                    for (;
                                        (e = t[o++]);) e === t[o] && (i = n.push(o));
                                    for (; i--;) t.splice(n[i], 1);
                                }
                                return (l = null), t;
                            }),
                            (r = at.getText = function(t) {
                                var e,
                                    n = "",
                                    i = 0,
                                    o = t.nodeType;
                                if (o) {
                                    if (1 === o || 9 === o || 11 === o) {
                                        if ("string" == typeof t.textContent) return t.textContent;
                                        for (t = t.firstChild; t; t = t.nextSibling) n += r(t);
                                    } else if (3 === o || 4 === o) return t.nodeValue;
                                } else
                                    for (;
                                        (e = t[i++]);) n += r(e);
                                return n;
                            }),
                            ((_ = at.selectors = {
                                cacheLength: 50,
                                createPseudo: ct,
                                match: $,
                                attrHandle: {},
                                find: {},
                                relative: {
                                    ">": {
                                        dir: "parentNode",
                                        first: !0
                                    },
                                    " ": {
                                        dir: "parentNode"
                                    },
                                    "+": {
                                        dir: "previousSibling",
                                        first: !0
                                    },
                                    "~": {
                                        dir: "previousSibling"
                                    }
                                },
                                preFilter: {
                                    ATTR: function(t) {
                                        return (
                                            (t[1] = t[1].replace(it, h)),
                                            (t[3] = (t[3] || t[4] || t[5] || "").replace(it, h)),
                                            "~=" === t[2] && (t[3] = " " + t[3] + " "),
                                            t.slice(0, 4)
                                        );
                                    },
                                    CHILD: function(t) {
                                        return (
                                            (t[1] = t[1].toLowerCase()),
                                            "nth" === t[1].slice(0, 3) ?
                                            (t[3] || at.error(t[0]),
                                                (t[4] = +(t[4] ?
                                                    t[5] + (t[6] || 1) :
                                                    2 * ("even" === t[3] || "odd" === t[3]))),
                                                (t[5] = +(t[7] + t[8] || "odd" === t[3]))) :
                                            t[3] && at.error(t[0]),
                                            t
                                        );
                                    },
                                    PSEUDO: function(t) {
                                        var e,
                                            n = !t[6] && t[2];
                                        return $.CHILD.test(t[0]) ?
                                            null :
                                            (t[3] ?
                                                (t[2] = t[4] || t[5] || "") :
                                                n &&
                                                X.test(n) &&
                                                (e = d(n, !0)) &&
                                                (e = n.indexOf(")", n.length - e) - n.length) &&
                                                ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                                                t.slice(0, 3));
                                    }
                                },
                                filter: {
                                    TAG: function(t) {
                                        var e = t.replace(it, h).toLowerCase();
                                        return "*" === t ?
                                            function() {
                                                return !0;
                                            } :
                                            function(t) {
                                                return t.nodeName && t.nodeName.toLowerCase() === e;
                                            };
                                    },
                                    CLASS: function(t) {
                                        var e = k[t + " "];
                                        return (
                                            e ||
                                            ((e = new RegExp("(^|" + q + ")" + t + "(" + q + "|$)")) &&
                                                k(t, function(t) {
                                                    return e.test(
                                                        ("string" == typeof t.className && t.className) ||
                                                        (void 0 !== t.getAttribute &&
                                                            t.getAttribute("class")) ||
                                                        ""
                                                    );
                                                }))
                                        );
                                    },
                                    ATTR: function(n, i, o) {
                                        return function(t) {
                                            var e = at.attr(t, n);
                                            return null == e ?
                                                "!=" === i :
                                                !i ||
                                                ((e += ""),
                                                    "=" === i ?
                                                    e === o :
                                                    "!=" === i ?
                                                    e !== o :
                                                    "^=" === i ?
                                                    o && 0 === e.indexOf(o) :
                                                    "*=" === i ?
                                                    o && -1 < e.indexOf(o) :
                                                    "$=" === i ?
                                                    o && e.slice(-o.length) === o :
                                                    "~=" === i ?
                                                    -1 < (" " + e.replace(U, " ") + " ").indexOf(o) :
                                                    "|=" === i &&
                                                    (e === o || e.slice(0, o.length + 1) === o + "-"));
                                        };
                                    },
                                    CHILD: function(d, t, e, g, m) {
                                        var v = "nth" !== d.slice(0, 3),
                                            b = "last" !== d.slice(-4),
                                            y = "of-type" === t;
                                        return 1 === g && 0 === m ?
                                            function(t) {
                                                return !!t.parentNode;
                                            } :
                                            function(t, e, n) {
                                                var i,
                                                    o,
                                                    r,
                                                    s,
                                                    a,
                                                    l,
                                                    c = v != b ? "nextSibling" : "previousSibling",
                                                    u = t.parentNode,
                                                    h = y && t.nodeName.toLowerCase(),
                                                    f = !n && !y,
                                                    p = !1;
                                                if (u) {
                                                    if (v) {
                                                        for (; c;) {
                                                            for (s = t;
                                                                (s = s[c]);)
                                                                if (
                                                                    y ?
                                                                    s.nodeName.toLowerCase() === h :
                                                                    1 === s.nodeType
                                                                )
                                                                    return !1;
                                                            l = c = "only" === d && !l && "nextSibling";
                                                        }
                                                        return !0;
                                                    }
                                                    if (((l = [b ? u.firstChild : u.lastChild]), b && f)) {
                                                        for (
                                                            p =
                                                            (a =
                                                                (i =
                                                                    (o =
                                                                        (r = (s = u)[T] || (s[T] = {}))[
                                                                            s.uniqueID
                                                                        ] || (r[s.uniqueID] = {}))[d] || [])[0] ===
                                                                S && i[1]) && i[2],
                                                            s = a && u.childNodes[a];
                                                            (s = (++a && s && s[c]) || (p = a = 0) || l.pop());

                                                        )
                                                            if (1 === s.nodeType && ++p && s === t) {
                                                                o[d] = [S, a, p];
                                                                break;
                                                            }
                                                    } else if (
                                                        (f &&
                                                            (p = a =
                                                                (i =
                                                                    (o =
                                                                        (r = (s = t)[T] || (s[T] = {}))[s.uniqueID] ||
                                                                        (r[s.uniqueID] = {}))[d] || [])[0] === S &&
                                                                i[1]), !1 === p)
                                                    )
                                                        for (;
                                                            (s =
                                                                (++a && s && s[c]) || (p = a = 0) || l.pop()) &&
                                                            ((y ?
                                                                    s.nodeName.toLowerCase() !== h :
                                                                    1 !== s.nodeType) ||
                                                                !++p ||
                                                                (f &&
                                                                    ((o =
                                                                        (r = s[T] || (s[T] = {}))[s.uniqueID] ||
                                                                        (r[s.uniqueID] = {}))[d] = [S, p]),
                                                                    s !== t));

                                                        );
                                                    return (p -= m) === g || (p % g == 0 && 0 <= p / g);
                                                }
                                            };
                                    },
                                    PSEUDO: function(t, r) {
                                        var e,
                                            s =
                                            _.pseudos[t] ||
                                            _.setFilters[t.toLowerCase()] ||
                                            at.error("unsupported pseudo: " + t);
                                        return s[T] ?
                                            s(r) :
                                            1 < s.length ?
                                            ((e = [t, t, "", r]),
                                                _.setFilters.hasOwnProperty(t.toLowerCase()) ?
                                                ct(function(t, e) {
                                                    for (var n, i = s(t, r), o = i.length; o--;)
                                                        t[(n = M(t, i[o]))] = !(e[n] = i[o]);
                                                }) :
                                                function(t) {
                                                    return s(t, 0, e);
                                                }) :
                                            s;
                                    }
                                },
                                pseudos: {
                                    not: ct(function(t) {
                                        var i = [],
                                            o = [],
                                            a = f(t.replace(z, "$1"));
                                        return a[T] ?
                                            ct(function(t, e, n, i) {
                                                for (var o, r = a(t, null, i, []), s = t.length; s--;)
                                                    (o = r[s]) && (t[s] = !(e[s] = o));
                                            }) :
                                            function(t, e, n) {
                                                return (
                                                    (i[0] = t), a(i, null, n, o), (i[0] = null), !o.pop()
                                                );
                                            };
                                    }),
                                    has: ct(function(e) {
                                        return function(t) {
                                            return 0 < at(e, t).length;
                                        };
                                    }),
                                    contains: ct(function(e) {
                                        return (
                                            (e = e.replace(it, h)),
                                            function(t) {
                                                return -1 < (t.textContent || r(t)).indexOf(e);
                                            }
                                        );
                                    }),
                                    lang: ct(function(n) {
                                        return (
                                            Q.test(n || "") || at.error("unsupported lang: " + n),
                                            (n = n.replace(it, h).toLowerCase()),
                                            function(t) {
                                                var e;
                                                do {
                                                    if (
                                                        (e = E ?
                                                            t.lang :
                                                            t.getAttribute("xml:lang") ||
                                                            t.getAttribute("lang"))
                                                    )
                                                        return (
                                                            (e = e.toLowerCase()) === n ||
                                                            0 === e.indexOf(n + "-")
                                                        );
                                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                                return !1;
                                            }
                                        );
                                    }),
                                    target: function(t) {
                                        var e = n.location && n.location.hash;
                                        return e && e.slice(1) === t.id;
                                    },
                                    root: function(t) {
                                        return t === a;
                                    },
                                    focus: function(t) {
                                        return (
                                            t === C.activeElement &&
                                            (!C.hasFocus || C.hasFocus()) &&
                                            !!(t.type || t.href || ~t.tabIndex)
                                        );
                                    },
                                    enabled: gt(!1),
                                    disabled: gt(!0),
                                    checked: function(t) {
                                        var e = t.nodeName.toLowerCase();
                                        return (
                                            ("input" === e && !!t.checked) ||
                                            ("option" === e && !!t.selected)
                                        );
                                    },
                                    selected: function(t) {
                                        return (
                                            t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                                        );
                                    },
                                    empty: function(t) {
                                        for (t = t.firstChild; t; t = t.nextSibling)
                                            if (t.nodeType < 6) return !1;
                                        return !0;
                                    },
                                    parent: function(t) {
                                        return !_.pseudos.empty(t);
                                    },
                                    header: function(t) {
                                        return Z.test(t.nodeName);
                                    },
                                    input: function(t) {
                                        return J.test(t.nodeName);
                                    },
                                    button: function(t) {
                                        var e = t.nodeName.toLowerCase();
                                        return ("input" === e && "button" === t.type) || "button" === e;
                                    },
                                    text: function(t) {
                                        var e;
                                        return (
                                            "input" === t.nodeName.toLowerCase() &&
                                            "text" === t.type &&
                                            (null == (e = t.getAttribute("type")) ||
                                                "text" === e.toLowerCase())
                                        );
                                    },
                                    first: mt(function() {
                                        return [0];
                                    }),
                                    last: mt(function(t, e) {
                                        return [e - 1];
                                    }),
                                    eq: mt(function(t, e, n) {
                                        return [n < 0 ? n + e : n];
                                    }),
                                    even: mt(function(t, e) {
                                        for (var n = 0; n < e; n += 2) t.push(n);
                                        return t;
                                    }),
                                    odd: mt(function(t, e) {
                                        for (var n = 1; n < e; n += 2) t.push(n);
                                        return t;
                                    }),
                                    lt: mt(function(t, e, n) {
                                        for (var i = n < 0 ? n + e : e < n ? e : n; 0 <= --i;)
                                            t.push(i);
                                        return t;
                                    }),
                                    gt: mt(function(t, e, n) {
                                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                                        return t;
                                    })
                                }
                            }).pseudos.nth = _.pseudos.eq), {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0
                            }))
                        _.pseudos[t] = pt(t);
                    for (t in {
                            submit: !0,
                            reset: !0
                        })
                        _.pseudos[t] = dt(t);

                    function bt() {}

                    function yt(t) {
                        for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                        return i;
                    }

                    function _t(a, t, e) {
                        var l = t.dir,
                            c = t.next,
                            u = c || l,
                            h = e && "parentNode" === u,
                            f = i++;
                        return t.first ?
                            function(t, e, n) {
                                for (;
                                    (t = t[l]);)
                                    if (1 === t.nodeType || h) return a(t, e, n);
                                return !1;
                            } :
                            function(t, e, n) {
                                var i,
                                    o,
                                    r,
                                    s = [S, f];
                                if (n) {
                                    for (;
                                        (t = t[l]);)
                                        if ((1 === t.nodeType || h) && a(t, e, n)) return !0;
                                } else
                                    for (;
                                        (t = t[l]);)
                                        if (1 === t.nodeType || h)
                                            if (
                                                ((o =
                                                        (r = t[T] || (t[T] = {}))[t.uniqueID] ||
                                                        (r[t.uniqueID] = {})),
                                                    c && c === t.nodeName.toLowerCase())
                                            )
                                                t = t[l] || t;
                                            else {
                                                if ((i = o[u]) && i[0] === S && i[1] === f)
                                                    return (s[2] = i[2]);
                                                if (((o[u] = s)[2] = a(t, e, n))) return !0;
                                            }
                                return !1;
                            };
                    }

                    function wt(o) {
                        return 1 < o.length ?
                            function(t, e, n) {
                                for (var i = o.length; i--;)
                                    if (!o[i](t, e, n)) return !1;
                                return !0;
                            } :
                            o[0];
                    }

                    function xt(t, e, n, i, o) {
                        for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++)
                            (r = t[a]) && ((n && !n(r, i, o)) || (s.push(r), c && e.push(a)));
                        return s;
                    }

                    function Ct(p, d, g, m, v, t) {
                        return (
                            m && !m[T] && (m = Ct(m)),
                            v && !v[T] && (v = Ct(v, t)),
                            ct(function(t, e, n, i) {
                                var o,
                                    r,
                                    s,
                                    a = [],
                                    l = [],
                                    c = e.length,
                                    u =
                                    t ||
                                    (function(t, e, n) {
                                        for (var i = 0, o = e.length; i < o; i++) at(t, e[i], n);
                                        return n;
                                    })(d || "*", n.nodeType ? [n] : n, []),
                                    h = !p || (!t && d) ? u : xt(u, a, p, n, i),
                                    f = g ? (v || (t ? p : c || m) ? [] : e) : h;
                                if ((g && g(h, f, n, i), m))
                                    for (o = xt(f, l), m(o, [], n, i), r = o.length; r--;)
                                        (s = o[r]) && (f[l[r]] = !(h[l[r]] = s));
                                if (t) {
                                    if (v || p) {
                                        if (v) {
                                            for (o = [], r = f.length; r--;)
                                                (s = f[r]) && o.push((h[r] = s));
                                            v(null, (f = []), o, i);
                                        }
                                        for (r = f.length; r--;)
                                            (s = f[r]) &&
                                            -1 < (o = v ? M(t, s) : a[r]) &&
                                            (t[o] = !(e[o] = s));
                                    }
                                } else(f = xt(f === e ? f.splice(c, f.length) : f)), v ? v(null, e, f, i) : j.apply(e, f);
                            })
                        );
                    }

                    function Et(t) {
                        for (
                            var o,
                                e,
                                n,
                                i = t.length,
                                r = _.relative[t[0].type],
                                s = r || _.relative[" "],
                                a = r ? 1 : 0,
                                l = _t(
                                    function(t) {
                                        return t === o;
                                    },
                                    s, !0
                                ),
                                c = _t(
                                    function(t) {
                                        return -1 < M(o, t);
                                    },
                                    s, !0
                                ),
                                u = [
                                    function(t, e, n) {
                                        var i =
                                            (!r && (n || e !== w)) ||
                                            ((o = e).nodeType ? l(t, e, n) : c(t, e, n));
                                        return (o = null), i;
                                    }
                                ]; a < i; a++
                        )
                            if ((e = _.relative[t[a].type])) u = [_t(wt(u), e)];
                            else {
                                if ((e = _.filter[t[a].type].apply(null, t[a].matches))[T]) {
                                    for (n = ++a; n < i && !_.relative[t[n].type]; n++);
                                    return Ct(
                                        1 < a && wt(u),
                                        1 < a &&
                                        yt(
                                            t.slice(0, a - 1).concat({
                                                value: " " === t[a - 2].type ? "*" : ""
                                            })
                                        ).replace(z, "$1"),
                                        e,
                                        a < n && Et(t.slice(a, n)),
                                        n < i && Et((t = t.slice(n))),
                                        n < i && yt(t)
                                    );
                                }
                                u.push(e);
                            }
                        return wt(u);
                    }
                    return (
                        (bt.prototype = _.filters = _.pseudos),
                        (_.setFilters = new bt()),
                        (d = at.tokenize = function(t, e) {
                            var n,
                                i,
                                o,
                                r,
                                s,
                                a,
                                l,
                                c = D[t + " "];
                            if (c) return e ? 0 : c.slice(0);
                            for (s = t, a = [], l = _.preFilter; s;) {
                                for (r in ((n && !(i = Y.exec(s))) ||
                                        (i && (s = s.slice(i[0].length) || s), a.push((o = []))),
                                        (n = !1),
                                        (i = V.exec(s)) &&
                                        ((n = i.shift()),
                                            o.push({
                                                value: n,
                                                type: i[0].replace(z, " ")
                                            }),
                                            (s = s.slice(n.length))),
                                        _.filter))
                                    !(i = $[r].exec(s)) ||
                                    (l[r] && !(i = l[r](i))) ||
                                    ((n = i.shift()),
                                        o.push({
                                            value: n,
                                            type: r,
                                            matches: i
                                        }),
                                        (s = s.slice(n.length)));
                                if (!n) break;
                            }
                            return e ? s.length : s ? at.error(t) : D(t, a).slice(0);
                        }),
                        (f = at.compile = function(t, e) {
                            var n,
                                i = [],
                                o = [],
                                r = I[t + " "];
                            if (!r) {
                                for (n = (e = e || d(t)).length; n--;)
                                    (r = Et(e[n]))[T] ? i.push(r) : o.push(r);
                                (r = I(
                                    t,
                                    (function(m, v) {
                                        function t(t, e, n, i, o) {
                                            var r,
                                                s,
                                                a,
                                                l = 0,
                                                c = "0",
                                                u = t && [],
                                                h = [],
                                                f = w,
                                                p = t || (y && _.find.TAG("*", o)),
                                                d = (S += null == f ? 1 : Math.random() || 0.1),
                                                g = p.length;
                                            for (
                                                o && (w = e === C || e || o); c !== g && null != (r = p[c]); c++
                                            ) {
                                                if (y && r) {
                                                    for (
                                                        s = 0,
                                                        e || r.ownerDocument === C || (x(r), (n = !E));
                                                        (a = m[s++]);

                                                    )
                                                        if (a(r, e || C, n)) {
                                                            i.push(r);
                                                            break;
                                                        }
                                                    o && (S = d);
                                                }
                                                b && ((r = !a && r) && l--, t && u.push(r));
                                            }
                                            if (((l += c), b && c !== l)) {
                                                for (s = 0;
                                                    (a = v[s++]);) a(u, h, e, n);
                                                if (t) {
                                                    if (0 < l)
                                                        for (; c--;) u[c] || h[c] || (h[c] = O.call(i));
                                                    h = xt(h);
                                                }
                                                j.apply(i, h),
                                                    o &&
                                                    !t &&
                                                    0 < h.length &&
                                                    1 < l + v.length &&
                                                    at.uniqueSort(i);
                                            }
                                            return o && ((S = d), (w = f)), u;
                                        }
                                        var b = 0 < v.length,
                                            y = 0 < m.length;
                                        return b ? ct(t) : t;
                                    })(o, i)
                                )).selector = t;
                            }
                            return r;
                        }),
                        (g = at.select = function(t, e, n, i) {
                            var o,
                                r,
                                s,
                                a,
                                l,
                                c = "function" == typeof t && t,
                                u = !i && d((t = c.selector || t));
                            if (((n = n || []), 1 === u.length)) {
                                if (
                                    2 < (r = u[0] = u[0].slice(0)).length &&
                                    "ID" === (s = r[0]).type &&
                                    9 === e.nodeType &&
                                    E &&
                                    _.relative[r[1].type]
                                ) {
                                    if (!(e = (_.find.ID(s.matches[0].replace(it, h), e) || [])[0]))
                                        return n;
                                    c && (e = e.parentNode),
                                        (t = t.slice(r.shift().value.length));
                                }
                                for (
                                    o = $.needsContext.test(t) ? 0 : r.length; o-- && ((s = r[o]), !_.relative[(a = s.type)]);

                                )
                                    if (
                                        (l = _.find[a]) &&
                                        (i = l(
                                            s.matches[0].replace(it, h),
                                            (nt.test(r[0].type) && vt(e.parentNode)) || e
                                        ))
                                    ) {
                                        if ((r.splice(o, 1), !(t = i.length && yt(r))))
                                            return j.apply(n, i), n;
                                        break;
                                    }
                            }
                            return (
                                (c || f(t, u))(
                                    i,
                                    e, !E,
                                    n, !e || (nt.test(t) && vt(e.parentNode)) || e
                                ),
                                n
                            );
                        }),
                        (p.sortStable =
                            T.split("")
                            .sort(N)
                            .join("") === T),
                        (p.detectDuplicates = !!c),
                        x(),
                        (p.sortDetached = ut(function(t) {
                            return 1 & t.compareDocumentPosition(C.createElement("fieldset"));
                        })),
                        ut(function(t) {
                            return (
                                (t.innerHTML = "<a href='#'></a>"),
                                "#" === t.firstChild.getAttribute("href")
                            );
                        }) ||
                        ht("type|href|height|width", function(t, e, n) {
                            if (!n)
                                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
                        }),
                        (p.attributes &&
                            ut(function(t) {
                                return (
                                    (t.innerHTML = "<input/>"),
                                    t.firstChild.setAttribute("value", ""),
                                    "" === t.firstChild.getAttribute("value")
                                );
                            })) ||
                        ht("value", function(t, e, n) {
                            if (!n && "input" === t.nodeName.toLowerCase())
                                return t.defaultValue;
                        }),
                        ut(function(t) {
                            return null == t.getAttribute("disabled");
                        }) ||
                        ht(R, function(t, e, n) {
                            var i;
                            if (!n)
                                return !0 === t[e] ?
                                    e.toLowerCase() :
                                    (i = t.getAttributeNode(e)) && i.specified ?
                                    i.value :
                                    null;
                        }),
                        at
                    );
                })(C);
                (T.find = p),
                (T.expr = p.selectors),
                (T.expr[":"] = T.expr.pseudos),
                (T.uniqueSort = T.unique = p.uniqueSort),
                (T.text = p.getText),
                (T.isXMLDoc = p.isXML),
                (T.contains = p.contains),
                (T.escapeSelector = p.escape);

                function d(t, e, n) {
                    for (var i = [], o = void 0 !== n;
                        (t = t[e]) && 9 !== t.nodeType;)
                        if (1 === t.nodeType) {
                            if (o && T(t).is(n)) break;
                            i.push(t);
                        }
                    return i;
                }

                function x(t, e) {
                    for (var n = []; t; t = t.nextSibling)
                        1 === t.nodeType && t !== e && n.push(t);
                    return n;
                }
                var S = T.expr.match.needsContext;

                function k(t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
                }
                var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                function I(t, n, i) {
                    return y(n) ?
                        T.grep(t, function(t, e) {
                            return !!n.call(t, e, t) !== i;
                        }) :
                        n.nodeType ?
                        T.grep(t, function(t) {
                            return (t === n) !== i;
                        }) :
                        "string" != typeof n ?
                        T.grep(t, function(t) {
                            return -1 < o.call(n, t) !== i;
                        }) :
                        T.filter(n, t, i);
                }
                (T.filter = function(t, e, n) {
                    var i = e[0];
                    return (
                        n && (t = ":not(" + t + ")"),
                        1 === e.length && 1 === i.nodeType ?
                        T.find.matchesSelector(i, t) ?
                        [i] :
                        [] :
                        T.find.matches(
                            t,
                            T.grep(e, function(t) {
                                return 1 === t.nodeType;
                            })
                        )
                    );
                }),
                T.fn.extend({
                    find: function(t) {
                        var e,
                            n,
                            i = this.length,
                            o = this;
                        if ("string" != typeof t)
                            return this.pushStack(
                                T(t).filter(function() {
                                    for (e = 0; e < i; e++)
                                        if (T.contains(o[e], this)) return !0;
                                })
                            );
                        for (n = this.pushStack([]), e = 0; e < i; e++)
                            T.find(t, o[e], n);
                        return 1 < i ? T.uniqueSort(n) : n;
                    },
                    filter: function(t) {
                        return this.pushStack(I(this, t || [], !1));
                    },
                    not: function(t) {
                        return this.pushStack(I(this, t || [], !0));
                    },
                    is: function(t) {
                        return !!I(
                            this,
                            "string" == typeof t && S.test(t) ? T(t) : t || [], !1
                        ).length;
                    }
                });
                var P,
                    N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                ((T.fn.init = function(t, e, n) {
                    var i, o;
                    if (!t) return this;
                    if (((n = n || P), "string" != typeof t))
                        return t.nodeType ?
                            ((this[0] = t), (this.length = 1), this) :
                            y(t) ?
                            void 0 !== n.ready ?
                            n.ready(t) :
                            t(T) :
                            T.makeArray(t, this);
                    if (!(i =
                            "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ?
                            [null, t, null] :
                            N.exec(t)) ||
                        (!i[1] && e)
                    )
                        return !e || e.jquery ?
                            (e || n).find(t) :
                            this.constructor(e).find(t);
                    if (i[1]) {
                        if (
                            ((e = e instanceof T ? e[0] : e),
                                T.merge(
                                    this,
                                    T.parseHTML(
                                        i[1],
                                        e && e.nodeType ? e.ownerDocument || e : E, !0
                                    )
                                ),
                                D.test(i[1]) && T.isPlainObject(e))
                        )
                            for (i in e) y(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this;
                    }
                    return (
                        (o = E.getElementById(i[2])) && ((this[0] = o), (this.length = 1)),
                        this
                    );
                }).prototype = T.fn),
                (P = T(E));
                var A = /^(?:parents|prev(?:Until|All))/,
                    O = {
                        children: !0,
                        contents: !0,
                        next: !0,
                        prev: !0
                    };

                function L(t, e) {
                    for (;
                        (t = t[e]) && 1 !== t.nodeType;);
                    return t;
                }
                T.fn.extend({
                        has: function(t) {
                            var e = T(t, this),
                                n = e.length;
                            return this.filter(function() {
                                for (var t = 0; t < n; t++)
                                    if (T.contains(this, e[t])) return !0;
                            });
                        },
                        closest: function(t, e) {
                            var n,
                                i = 0,
                                o = this.length,
                                r = [],
                                s = "string" != typeof t && T(t);
                            if (!S.test(t))
                                for (; i < o; i++)
                                    for (n = this[i]; n && n !== e; n = n.parentNode)
                                        if (
                                            n.nodeType < 11 &&
                                            (s ?
                                                -1 < s.index(n) :
                                                1 === n.nodeType && T.find.matchesSelector(n, t))
                                        ) {
                                            r.push(n);
                                            break;
                                        }
                            return this.pushStack(1 < r.length ? T.uniqueSort(r) : r);
                        },
                        index: function(t) {
                            return t ?
                                "string" == typeof t ?
                                o.call(T(t), this[0]) :
                                o.call(this, t.jquery ? t[0] : t) :
                                this[0] && this[0].parentNode ?
                                this.first().prevAll().length :
                                -1;
                        },
                        add: function(t, e) {
                            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))));
                        },
                        addBack: function(t) {
                            return this.add(
                                null == t ? this.prevObject : this.prevObject.filter(t)
                            );
                        }
                    }),
                    T.each({
                            parent: function(t) {
                                var e = t.parentNode;
                                return e && 11 !== e.nodeType ? e : null;
                            },
                            parents: function(t) {
                                return d(t, "parentNode");
                            },
                            parentsUntil: function(t, e, n) {
                                return d(t, "parentNode", n);
                            },
                            next: function(t) {
                                return L(t, "nextSibling");
                            },
                            prev: function(t) {
                                return L(t, "previousSibling");
                            },
                            nextAll: function(t) {
                                return d(t, "nextSibling");
                            },
                            prevAll: function(t) {
                                return d(t, "previousSibling");
                            },
                            nextUntil: function(t, e, n) {
                                return d(t, "nextSibling", n);
                            },
                            prevUntil: function(t, e, n) {
                                return d(t, "previousSibling", n);
                            },
                            siblings: function(t) {
                                return x((t.parentNode || {}).firstChild, t);
                            },
                            children: function(t) {
                                return x(t.firstChild);
                            },
                            contents: function(t) {
                                return void 0 !== t.contentDocument ?
                                    t.contentDocument :
                                    (k(t, "template") && (t = t.content || t),
                                        T.merge([], t.childNodes));
                            }
                        },
                        function(i, o) {
                            T.fn[i] = function(t, e) {
                                var n = T.map(this, o, t);
                                return (
                                    "Until" !== i.slice(-5) && (e = t),
                                    e && "string" == typeof e && (n = T.filter(e, n)),
                                    1 < this.length &&
                                    (O[i] || T.uniqueSort(n), A.test(i) && n.reverse()),
                                    this.pushStack(n)
                                );
                            };
                        }
                    );
                var j = /[^\x20\t\r\n\f]+/g;

                function H(t) {
                    return t;
                }

                function M(t) {
                    throw t;
                }

                function R(t, e, n, i) {
                    var o;
                    try {
                        t && y((o = t.promise)) ?
                            o
                            .call(t)
                            .done(e)
                            .fail(n) :
                            t && y((o = t.then)) ?
                            o.call(t, e, n) :
                            e.apply(void 0, [t].slice(i));
                    } catch (t) {
                        n.apply(void 0, [t]);
                    }
                }
                (T.Callbacks = function(i) {
                    i =
                        "string" == typeof i ?
                        (function(t) {
                            var n = {};
                            return (
                                T.each(t.match(j) || [], function(t, e) {
                                    n[e] = !0;
                                }),
                                n
                            );
                        })(i) :
                        T.extend({}, i);

                    function n() {
                        for (r = r || i.once, e = o = !0; a.length; l = -1)
                            for (t = a.shift(); ++l < s.length;)
                                !1 === s[l].apply(t[0], t[1]) &&
                                i.stopOnFalse &&
                                ((l = s.length), (t = !1));
                        i.memory || (t = !1), (o = !1), r && (s = t ? [] : "");
                    }
                    var o,
                        t,
                        e,
                        r,
                        s = [],
                        a = [],
                        l = -1,
                        c = {
                            add: function() {
                                return (
                                    s &&
                                    (t && !o && ((l = s.length - 1), a.push(t)),
                                        (function n(t) {
                                            T.each(t, function(t, e) {
                                                y(e) ?
                                                    (i.unique && c.has(e)) || s.push(e) :
                                                    e && e.length && "string" !== w(e) && n(e);
                                            });
                                        })(arguments),
                                        t && !o && n()),
                                    this
                                );
                            },
                            remove: function() {
                                return (
                                    T.each(arguments, function(t, e) {
                                        for (var n; - 1 < (n = T.inArray(e, s, n));)
                                            s.splice(n, 1), n <= l && l--;
                                    }),
                                    this
                                );
                            },
                            has: function(t) {
                                return t ? -1 < T.inArray(t, s) : 0 < s.length;
                            },
                            empty: function() {
                                return (s = s && []), this;
                            },
                            disable: function() {
                                return (r = a = []), (s = t = ""), this;
                            },
                            disabled: function() {
                                return !s;
                            },
                            lock: function() {
                                return (r = a = []), t || o || (s = t = ""), this;
                            },
                            locked: function() {
                                return !!r;
                            },
                            fireWith: function(t, e) {
                                return (
                                    r ||
                                    ((e = [t, (e = e || []).slice ? e.slice() : e]),
                                        a.push(e),
                                        o || n()),
                                    this
                                );
                            },
                            fire: function() {
                                return c.fireWith(this, arguments), this;
                            },
                            fired: function() {
                                return !!e;
                            }
                        };
                    return c;
                }),
                T.extend({
                    Deferred: function(t) {
                        var r = [
                                [
                                    "notify",
                                    "progress",
                                    T.Callbacks("memory"),
                                    T.Callbacks("memory"),
                                    2
                                ],
                                [
                                    "resolve",
                                    "done",
                                    T.Callbacks("once memory"),
                                    T.Callbacks("once memory"),
                                    0,
                                    "resolved"
                                ],
                                [
                                    "reject",
                                    "fail",
                                    T.Callbacks("once memory"),
                                    T.Callbacks("once memory"),
                                    1,
                                    "rejected"
                                ]
                            ],
                            o = "pending",
                            s = {
                                state: function() {
                                    return o;
                                },
                                always: function() {
                                    return a.done(arguments).fail(arguments), this;
                                },
                                catch: function(t) {
                                    return s.then(null, t);
                                },
                                pipe: function() {
                                    var o = arguments;
                                    return T.Deferred(function(i) {
                                        T.each(r, function(t, e) {
                                                var n = y(o[e[4]]) && o[e[4]];
                                                a[e[1]](function() {
                                                    var t = n && n.apply(this, arguments);
                                                    t && y(t.promise) ?
                                                        t
                                                        .promise()
                                                        .progress(i.notify)
                                                        .done(i.resolve)
                                                        .fail(i.reject) :
                                                        i[e[0] + "With"](this, n ? [t] : arguments);
                                                });
                                            }),
                                            (o = null);
                                    }).promise();
                                },
                                then: function(e, n, i) {
                                    var l = 0;

                                    function c(o, r, s, a) {
                                        return function() {
                                            function t() {
                                                var t, e;
                                                if (!(o < l)) {
                                                    if ((t = s.apply(n, i)) === r.promise())
                                                        throw new TypeError("Thenable self-resolution");
                                                    (e =
                                                        t &&
                                                        ("object" == typeof t ||
                                                            "function" == typeof t) &&
                                                        t.then),
                                                    y(e) ?
                                                        a ?
                                                        e.call(t, c(l, r, H, a), c(l, r, M, a)) :
                                                        (l++,
                                                            e.call(
                                                                t,
                                                                c(l, r, H, a),
                                                                c(l, r, M, a),
                                                                c(l, r, H, r.notifyWith)
                                                            )) :
                                                        (s !== H && ((n = void 0), (i = [t])),
                                                            (a || r.resolveWith)(n, i));
                                                }
                                            }
                                            var n = this,
                                                i = arguments,
                                                e = a ?
                                                t :
                                                function() {
                                                    try {
                                                        t();
                                                    } catch (t) {
                                                        T.Deferred.exceptionHook &&
                                                            T.Deferred.exceptionHook(t, e.stackTrace),
                                                            l <= o + 1 &&
                                                            (s !== M && ((n = void 0), (i = [t])),
                                                                r.rejectWith(n, i));
                                                    }
                                                };
                                            o
                                                ?
                                                e() :
                                                (T.Deferred.getStackHook &&
                                                    (e.stackTrace = T.Deferred.getStackHook()),
                                                    C.setTimeout(e));
                                        };
                                    }
                                    return T.Deferred(function(t) {
                                        r[0][3].add(c(0, t, y(i) ? i : H, t.notifyWith)),
                                            r[1][3].add(c(0, t, y(e) ? e : H)),
                                            r[2][3].add(c(0, t, y(n) ? n : M));
                                    }).promise();
                                },
                                promise: function(t) {
                                    return null != t ? T.extend(t, s) : s;
                                }
                            },
                            a = {};
                        return (
                            T.each(r, function(t, e) {
                                var n = e[2],
                                    i = e[5];
                                (s[e[1]] = n.add),
                                i &&
                                    n.add(
                                        function() {
                                            o = i;
                                        },
                                        r[3 - t][2].disable,
                                        r[3 - t][3].disable,
                                        r[0][2].lock,
                                        r[0][3].lock
                                    ),
                                    n.add(e[3].fire),
                                    (a[e[0]] = function() {
                                        return (
                                            a[e[0] + "With"](this === a ? void 0 : this, arguments),
                                            this
                                        );
                                    }),
                                    (a[e[0] + "With"] = n.fireWith);
                            }),
                            s.promise(a),
                            t && t.call(a, a),
                            a
                        );
                    },
                    when: function(t) {
                        function e(e) {
                            return function(t) {
                                (o[e] = this),
                                (r[e] = 1 < arguments.length ? a.call(arguments) : t),
                                --n || s.resolveWith(o, r);
                            };
                        }
                        var n = arguments.length,
                            i = n,
                            o = Array(i),
                            r = a.call(arguments),
                            s = T.Deferred();
                        if (
                            n <= 1 &&
                            (R(t, s.done(e(i)).resolve, s.reject, !n),
                                "pending" === s.state() || y(r[i] && r[i].then))
                        )
                            return s.then();
                        for (; i--;) R(r[i], e(i), s.reject);
                        return s.promise();
                    }
                });
                var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                (T.Deferred.exceptionHook = function(t, e) {
                    C.console &&
                        C.console.warn &&
                        t &&
                        q.test(t.name) &&
                        C.console.warn(
                            "jQuery.Deferred exception: " + t.message,
                            t.stack,
                            e
                        );
                }),
                (T.readyException = function(t) {
                    C.setTimeout(function() {
                        throw t;
                    });
                });
                var W = T.Deferred();

                function F() {
                    E.removeEventListener("DOMContentLoaded", F),
                        C.removeEventListener("load", F),
                        T.ready();
                }
                (T.fn.ready = function(t) {
                    return (
                        W.then(t).catch(function(t) {
                            T.readyException(t);
                        }),
                        this
                    );
                }),
                T.extend({
                        isReady: !1,
                        readyWait: 1,
                        ready: function(t) {
                            (!0 === t ? --T.readyWait : T.isReady) ||
                            ((T.isReady = !0) !== t && 0 < --T.readyWait) ||
                            W.resolveWith(E, [T]);
                        }
                    }),
                    (T.ready.then = W.then),
                    "complete" === E.readyState ||
                    ("loading" !== E.readyState && !E.documentElement.doScroll) ?
                    C.setTimeout(T.ready) :
                    (E.addEventListener("DOMContentLoaded", F),
                        C.addEventListener("load", F));
                var B = function(t, e, n, i, o, r, s) {
                        var a = 0,
                            l = t.length,
                            c = null == n;
                        if ("object" === w(n))
                            for (a in ((o = !0), n)) B(t, e, a, n[a], !0, r, s);
                        else if (
                            void 0 !== i &&
                            ((o = !0),
                                y(i) || (s = !0),
                                c &&
                                (e = s ?
                                    (e.call(t, i), null) :
                                    ((c = e),
                                        function(t, e, n) {
                                            return c.call(T(t), n);
                                        })),
                                e)
                        )
                            for (; a < l; a++)
                                e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                        return o ? t : c ? e.call(t) : l ? e(t[0], n) : r;
                    },
                    U = /^-ms-/,
                    z = /-([a-z])/g;

                function Y(t, e) {
                    return e.toUpperCase();
                }

                function V(t) {
                    return t.replace(U, "ms-").replace(z, Y);
                }

                function K(t) {
                    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
                }

                function X() {
                    this.expando = T.expando + X.uid++;
                }
                (X.uid = 1),
                (X.prototype = {
                    cache: function(t) {
                        var e = t[this.expando];
                        return (
                            e ||
                            ((e = {}),
                                K(t) &&
                                (t.nodeType ?
                                    (t[this.expando] = e) :
                                    Object.defineProperty(t, this.expando, {
                                        value: e,
                                        configurable: !0
                                    }))),
                            e
                        );
                    },
                    set: function(t, e, n) {
                        var i,
                            o = this.cache(t);
                        if ("string" == typeof e) o[V(e)] = n;
                        else
                            for (i in e) o[V(i)] = e[i];
                        return o;
                    },
                    get: function(t, e) {
                        return void 0 === e ?
                            this.cache(t) :
                            t[this.expando] && t[this.expando][V(e)];
                    },
                    access: function(t, e, n) {
                        return void 0 === e || (e && "string" == typeof e && void 0 === n) ?
                            this.get(t, e) :
                            (this.set(t, e, n), void 0 !== n ? n : e);
                    },
                    remove: function(t, e) {
                        var n,
                            i = t[this.expando];
                        if (void 0 !== i) {
                            if (void 0 !== e) {
                                n = (e = Array.isArray(e) ?
                                    e.map(V) :
                                    (e = V(e)) in i ?
                                    [e] :
                                    e.match(j) || []).length;
                                for (; n--;) delete i[e[n]];
                            }
                            (void 0 !== e && !T.isEmptyObject(i)) ||
                            (t.nodeType ?
                                (t[this.expando] = void 0) :
                                delete t[this.expando]);
                        }
                    },
                    hasData: function(t) {
                        var e = t[this.expando];
                        return void 0 !== e && !T.isEmptyObject(e);
                    }
                });
                var Q = new X(),
                    $ = new X(),
                    G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    J = /[A-Z]/g;

                function Z(t, e, n) {
                    var i;
                    if (void 0 === n && 1 === t.nodeType)
                        if (
                            ((i = "data-" + e.replace(J, "-$&").toLowerCase()),
                                "string" == typeof(n = t.getAttribute(i)))
                        ) {
                            try {
                                n = (function(t) {
                                    return (
                                        "true" === t ||
                                        ("false" !== t &&
                                            ("null" === t ?
                                                null :
                                                t === +t + "" ?
                                                +t :
                                                G.test(t) ?
                                                JSON.parse(t) :
                                                t))
                                    );
                                })(n);
                            } catch (t) {}
                            $.set(t, e, n);
                        } else n = void 0;
                    return n;
                }
                T.extend({
                        hasData: function(t) {
                            return $.hasData(t) || Q.hasData(t);
                        },
                        data: function(t, e, n) {
                            return $.access(t, e, n);
                        },
                        removeData: function(t, e) {
                            $.remove(t, e);
                        },
                        _data: function(t, e, n) {
                            return Q.access(t, e, n);
                        },
                        _removeData: function(t, e) {
                            Q.remove(t, e);
                        }
                    }),
                    T.fn.extend({
                        data: function(n, t) {
                            var e,
                                i,
                                o,
                                r = this[0],
                                s = r && r.attributes;
                            if (void 0 !== n)
                                return "object" == typeof n ?
                                    this.each(function() {
                                        $.set(this, n);
                                    }) :
                                    B(
                                        this,
                                        function(t) {
                                            var e;
                                            if (r && void 0 === t)
                                                return void 0 !== (e = $.get(r, n)) ?
                                                    e :
                                                    void 0 !== (e = Z(r, n)) ?
                                                    e :
                                                    void 0;
                                            this.each(function() {
                                                $.set(this, n, t);
                                            });
                                        },
                                        null,
                                        t,
                                        1 < arguments.length,
                                        null, !0
                                    );
                            if (
                                this.length &&
                                ((o = $.get(r)), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))
                            ) {
                                for (e = s.length; e--;)
                                    s[e] &&
                                    0 === (i = s[e].name).indexOf("data-") &&
                                    ((i = V(i.slice(5))), Z(r, i, o[i]));
                                Q.set(r, "hasDataAttrs", !0);
                            }
                            return o;
                        },
                        removeData: function(t) {
                            return this.each(function() {
                                $.remove(this, t);
                            });
                        }
                    }),
                    T.extend({
                        queue: function(t, e, n) {
                            var i;
                            if (t)
                                return (
                                    (e = (e || "fx") + "queue"),
                                    (i = Q.get(t, e)),
                                    n &&
                                    (!i || Array.isArray(n) ?
                                        (i = Q.access(t, e, T.makeArray(n))) :
                                        i.push(n)),
                                    i || []
                                );
                        },
                        dequeue: function(t, e) {
                            e = e || "fx";
                            var n = T.queue(t, e),
                                i = n.length,
                                o = n.shift(),
                                r = T._queueHooks(t, e);
                            "inprogress" === o && ((o = n.shift()), i--),
                                o &&
                                ("fx" === e && n.unshift("inprogress"),
                                    delete r.stop,
                                    o.call(
                                        t,
                                        function() {
                                            T.dequeue(t, e);
                                        },
                                        r
                                    )), !i && r && r.empty.fire();
                        },
                        _queueHooks: function(t, e) {
                            var n = e + "queueHooks";
                            return (
                                Q.get(t, n) ||
                                Q.access(t, n, {
                                    empty: T.Callbacks("once memory").add(function() {
                                        Q.remove(t, [e + "queue", n]);
                                    })
                                })
                            );
                        }
                    }),
                    T.fn.extend({
                        queue: function(e, n) {
                            var t = 2;
                            return (
                                "string" != typeof e && ((n = e), (e = "fx"), t--),
                                arguments.length < t ?
                                T.queue(this[0], e) :
                                void 0 === n ?
                                this :
                                this.each(function() {
                                    var t = T.queue(this, e, n);
                                    T._queueHooks(this, e),
                                        "fx" === e &&
                                        "inprogress" !== t[0] &&
                                        T.dequeue(this, e);
                                })
                            );
                        },
                        dequeue: function(t) {
                            return this.each(function() {
                                T.dequeue(this, t);
                            });
                        },
                        clearQueue: function(t) {
                            return this.queue(t || "fx", []);
                        },
                        promise: function(t, e) {
                            function n() {
                                --o || r.resolveWith(s, [s]);
                            }
                            var i,
                                o = 1,
                                r = T.Deferred(),
                                s = this,
                                a = this.length;
                            for (
                                "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx"; a--;

                            )
                                (i = Q.get(s[a], t + "queueHooks")) &&
                                i.empty &&
                                (o++, i.empty.add(n));
                            return n(), r.promise(e);
                        }
                    });
                var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
                    nt = ["Top", "Right", "Bottom", "Left"],
                    it = E.documentElement,
                    ot = function(t) {
                        return T.contains(t.ownerDocument, t);
                    },
                    rt = {
                        composed: !0
                    };
                it.getRootNode &&
                    (ot = function(t) {
                        return (
                            T.contains(t.ownerDocument, t) ||
                            t.getRootNode(rt) === t.ownerDocument
                        );
                    });

                function st(t, e, n, i) {
                    var o,
                        r,
                        s = {};
                    for (r in e)(s[r] = t.style[r]), (t.style[r] = e[r]);
                    for (r in ((o = n.apply(t, i || [])), e)) t.style[r] = s[r];
                    return o;
                }
                var at = function(t, e) {
                    return (
                        "none" === (t = e || t).style.display ||
                        ("" === t.style.display && ot(t) && "none" === T.css(t, "display"))
                    );
                };

                function lt(t, e, n, i) {
                    var o,
                        r,
                        s = 20,
                        a = i ?
                        function() {
                            return i.cur();
                        } :
                        function() {
                            return T.css(t, e, "");
                        },
                        l = a(),
                        c = (n && n[3]) || (T.cssNumber[e] ? "" : "px"),
                        u =
                        t.nodeType &&
                        (T.cssNumber[e] || ("px" !== c && +l)) &&
                        et.exec(T.css(t, e));
                    if (u && u[3] !== c) {
                        for (l /= 2, c = c || u[3], u = +l || 1; s--;)
                            T.style(t, e, u + c),
                            (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0),
                            (u /= r);
                        (u *= 2), T.style(t, e, u + c), (n = n || []);
                    }
                    return (
                        n &&
                        ((u = +u || +l || 0),
                            (o = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
                            i && ((i.unit = c), (i.start = u), (i.end = o))),
                        o
                    );
                }
                var ct = {};

                function ut(t, e) {
                    for (var n, i, o, r, s, a, l, c = [], u = 0, h = t.length; u < h; u++)
                        (i = t[u]).style &&
                        ((n = i.style.display),
                            e ?
                            ("none" === n &&
                                ((c[u] = Q.get(i, "display") || null),
                                    c[u] || (i.style.display = "")),
                                "" === i.style.display &&
                                at(i) &&
                                (c[u] =
                                    ((l = s = r = void 0),
                                        (s = (o = i).ownerDocument),
                                        (a = o.nodeName),
                                        (l = ct[a]) ||
                                        ((r = s.body.appendChild(s.createElement(a))),
                                            (l = T.css(r, "display")),
                                            r.parentNode.removeChild(r),
                                            "none" === l && (l = "block"),
                                            (ct[a] = l))))) :
                            "none" !== n && ((c[u] = "none"), Q.set(i, "display", n)));
                    for (u = 0; u < h; u++) null != c[u] && (t[u].style.display = c[u]);
                    return t;
                }
                T.fn.extend({
                    show: function() {
                        return ut(this, !0);
                    },
                    hide: function() {
                        return ut(this);
                    },
                    toggle: function(t) {
                        return "boolean" == typeof t ?
                            t ?
                            this.show() :
                            this.hide() :
                            this.each(function() {
                                at(this) ? T(this).show() : T(this).hide();
                            });
                    }
                });
                var ht = /^(?:checkbox|radio)$/i,
                    ft = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                    pt = /^$|^module$|\/(?:java|ecma)script/i,
                    dt = {
                        option: [1, "<select multiple='multiple'>", "</select>"],
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: [0, "", ""]
                    };

                function gt(t, e) {
                    var n;
                    return (
                        (n =
                            void 0 !== t.getElementsByTagName ?
                            t.getElementsByTagName(e || "*") :
                            void 0 !== t.querySelectorAll ?
                            t.querySelectorAll(e || "*") :
                            []),
                        void 0 === e || (e && k(t, e)) ? T.merge([t], n) : n
                    );
                }

                function mt(t, e) {
                    for (var n = 0, i = t.length; n < i; n++)
                        Q.set(t[n], "globalEval", !e || Q.get(e[n], "globalEval"));
                }
                (dt.optgroup = dt.option),
                (dt.tbody = dt.tfoot = dt.colgroup = dt.caption = dt.thead),
                (dt.th = dt.td);
                var vt,
                    bt,
                    yt = /<|&#?\w+;/;

                function _t(t, e, n, i, o) {
                    for (
                        var r,
                            s,
                            a,
                            l,
                            c,
                            u,
                            h = e.createDocumentFragment(),
                            f = [],
                            p = 0,
                            d = t.length; p < d; p++
                    )
                        if ((r = t[p]) || 0 === r)
                            if ("object" === w(r)) T.merge(f, r.nodeType ? [r] : r);
                            else if (yt.test(r)) {
                        for (
                            s = s || h.appendChild(e.createElement("div")),
                            a = (ft.exec(r) || ["", ""])[1].toLowerCase(),
                            l = dt[a] || dt._default,
                            s.innerHTML = l[1] + T.htmlPrefilter(r) + l[2],
                            u = l[0]; u--;

                        )
                            s = s.lastChild;
                        T.merge(f, s.childNodes), ((s = h.firstChild).textContent = "");
                    } else f.push(e.createTextNode(r));
                    for (h.textContent = "", p = 0;
                        (r = f[p++]);)
                        if (i && -1 < T.inArray(r, i)) o && o.push(r);
                        else if (
                        ((c = ot(r)), (s = gt(h.appendChild(r), "script")), c && mt(s), n)
                    )
                        for (u = 0;
                            (r = s[u++]);) pt.test(r.type || "") && n.push(r);
                    return h;
                }
                (vt = E.createDocumentFragment().appendChild(E.createElement("div"))),
                (bt = E.createElement("input")).setAttribute("type", "radio"),
                    bt.setAttribute("checked", "checked"),
                    bt.setAttribute("name", "t"),
                    vt.appendChild(bt),
                    (b.checkClone = vt.cloneNode(!0).cloneNode(!0).lastChild.checked),
                    (vt.innerHTML = "<textarea>x</textarea>"),
                    (b.noCloneChecked = !!vt.cloneNode(!0).lastChild.defaultValue);
                var wt = /^key/,
                    xt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                    Ct = /^([^.]*)(?:\.(.+)|)/;

                function Et() {
                    return !0;
                }

                function Tt() {
                    return !1;
                }

                function St(t, e) {
                    return (
                        (t ===
                            (function() {
                                try {
                                    return E.activeElement;
                                } catch (t) {}
                            })()) ==
                        ("focus" === e)
                    );
                }

                function kt(t, e, n, i, o, r) {
                    var s, a;
                    if ("object" == typeof e) {
                        for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), e))
                            kt(t, a, n, i, e[a], r);
                        return t;
                    }
                    if (
                        (null == i && null == o ?
                            ((o = n), (i = n = void 0)) :
                            null == o &&
                            ("string" == typeof n ?
                                ((o = i), (i = void 0)) :
                                ((o = i), (i = n), (n = void 0))), !1 === o)
                    )
                        o = Tt;
                    else if (!o) return t;
                    return (
                        1 === r &&
                        ((s = o),
                            ((o = function(t) {
                                return T().off(t), s.apply(this, arguments);
                            }).guid = s.guid || (s.guid = T.guid++))),
                        t.each(function() {
                            T.event.add(this, e, o, i, n);
                        })
                    );
                }

                function Dt(t, o, r) {
                    r
                        ?
                        (Q.set(t, o, !1),
                            T.event.add(t, o, {
                                namespace: !1,
                                handler: function(t) {
                                    var e,
                                        n,
                                        i = Q.get(this, o);
                                    if (1 & t.isTrigger && this[o]) {
                                        if (i.length)
                                            (T.event.special[o] || {}).delegateType &&
                                            t.stopPropagation();
                                        else if (
                                            ((i = a.call(arguments)),
                                                Q.set(this, o, i),
                                                (e = r(this, o)),
                                                this[o](),
                                                i !== (n = Q.get(this, o)) || e ?
                                                Q.set(this, o, !1) :
                                                (n = {}),
                                                i !== n)
                                        )
                                            return (
                                                t.stopImmediatePropagation(),
                                                t.preventDefault(),
                                                n.value
                                            );
                                    } else
                                        i.length &&
                                        (Q.set(this, o, {
                                                value: T.event.trigger(
                                                    T.extend(i[0], T.Event.prototype),
                                                    i.slice(1),
                                                    this
                                                )
                                            }),
                                            t.stopImmediatePropagation());
                                }
                            })) :
                        void 0 === Q.get(t, o) && T.event.add(t, o, Et);
                }
                (T.event = {
                    global: {},
                    add: function(e, t, n, i, o) {
                        var r,
                            s,
                            a,
                            l,
                            c,
                            u,
                            h,
                            f,
                            p,
                            d,
                            g,
                            m = Q.get(e);
                        if (m)
                            for (
                                n.handler && ((n = (r = n).handler), (o = r.selector)),
                                o && T.find.matchesSelector(it, o),
                                n.guid || (n.guid = T.guid++),
                                (l = m.events) || (l = m.events = {}),
                                (s = m.handle) ||
                                (s = m.handle = function(t) {
                                    return void 0 !== T && T.event.triggered !== t.type ?
                                        T.event.dispatch.apply(e, arguments) :
                                        void 0;
                                }),
                                c = (t = (t || "").match(j) || [""]).length; c--;

                            )
                                (p = g = (a = Ct.exec(t[c]) || [])[1]),
                                (d = (a[2] || "").split(".").sort()),
                                p &&
                                ((h = T.event.special[p] || {}),
                                    (p = (o ? h.delegateType : h.bindType) || p),
                                    (h = T.event.special[p] || {}),
                                    (u = T.extend({
                                            type: p,
                                            origType: g,
                                            data: i,
                                            handler: n,
                                            guid: n.guid,
                                            selector: o,
                                            needsContext: o && T.expr.match.needsContext.test(o),
                                            namespace: d.join(".")
                                        },
                                        r
                                    )),
                                    (f = l[p]) ||
                                    (((f = l[p] = []).delegateCount = 0),
                                        (h.setup && !1 !== h.setup.call(e, i, d, s)) ||
                                        (e.addEventListener && e.addEventListener(p, s))),
                                    h.add &&
                                    (h.add.call(e, u),
                                        u.handler.guid || (u.handler.guid = n.guid)),
                                    o ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                                    (T.event.global[p] = !0));
                    },
                    remove: function(t, e, n, i, o) {
                        var r,
                            s,
                            a,
                            l,
                            c,
                            u,
                            h,
                            f,
                            p,
                            d,
                            g,
                            m = Q.hasData(t) && Q.get(t);
                        if (m && (l = m.events)) {
                            for (c = (e = (e || "").match(j) || [""]).length; c--;)
                                if (
                                    ((p = g = (a = Ct.exec(e[c]) || [])[1]),
                                        (d = (a[2] || "").split(".").sort()),
                                        p)
                                ) {
                                    for (
                                        h = T.event.special[p] || {},
                                        f = l[(p = (i ? h.delegateType : h.bindType) || p)] || [],
                                        a =
                                        a[2] &&
                                        new RegExp(
                                            "(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"
                                        ),
                                        s = r = f.length; r--;

                                    )
                                        (u = f[r]),
                                        (!o && g !== u.origType) ||
                                        (n && n.guid !== u.guid) ||
                                        (a && !a.test(u.namespace)) ||
                                        (i &&
                                            i !== u.selector &&
                                            ("**" !== i || !u.selector)) ||
                                        (f.splice(r, 1),
                                            u.selector && f.delegateCount--,
                                            h.remove && h.remove.call(t, u));
                                    s &&
                                        !f.length &&
                                        ((h.teardown && !1 !== h.teardown.call(t, d, m.handle)) ||
                                            T.removeEvent(t, p, m.handle),
                                            delete l[p]);
                                } else
                                    for (p in l) T.event.remove(t, p + e[c], n, i, !0);
                            T.isEmptyObject(l) && Q.remove(t, "handle events");
                        }
                    },
                    dispatch: function(t) {
                        var e,
                            n,
                            i,
                            o,
                            r,
                            s,
                            a = T.event.fix(t),
                            l = new Array(arguments.length),
                            c = (Q.get(this, "events") || {})[a.type] || [],
                            u = T.event.special[a.type] || {};
                        for (l[0] = a, e = 1; e < arguments.length; e++)
                            l[e] = arguments[e];
                        if (
                            ((a.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, a))
                        ) {
                            for (
                                s = T.event.handlers.call(this, a, c), e = 0;
                                (o = s[e++]) && !a.isPropagationStopped();

                            )
                                for (
                                    a.currentTarget = o.elem, n = 0;
                                    (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();

                                )
                                    (a.rnamespace &&
                                        !1 !== r.namespace &&
                                        !a.rnamespace.test(r.namespace)) ||
                                    ((a.handleObj = r),
                                        (a.data = r.data),
                                        void 0 !==
                                        (i = (
                                            (T.event.special[r.origType] || {}).handle || r.handler
                                        ).apply(o.elem, l)) &&
                                        !1 === (a.result = i) &&
                                        (a.preventDefault(), a.stopPropagation()));
                            return u.postDispatch && u.postDispatch.call(this, a), a.result;
                        }
                    },
                    handlers: function(t, e) {
                        var n,
                            i,
                            o,
                            r,
                            s,
                            a = [],
                            l = e.delegateCount,
                            c = t.target;
                        if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
                            for (; c !== this; c = c.parentNode || this)
                                if (
                                    1 === c.nodeType &&
                                    ("click" !== t.type || !0 !== c.disabled)
                                ) {
                                    for (r = [], s = {}, n = 0; n < l; n++)
                                        void 0 === s[(o = (i = e[n]).selector + " ")] &&
                                        (s[o] = i.needsContext ?
                                            -1 < T(o, this).index(c) :
                                            T.find(o, this, null, [c]).length),
                                        s[o] && r.push(i);
                                    r.length &&
                                        a.push({
                                            elem: c,
                                            handlers: r
                                        });
                                }
                        return (
                            (c = this),
                            l < e.length &&
                            a.push({
                                elem: c,
                                handlers: e.slice(l)
                            }),
                            a
                        );
                    },
                    addProp: function(e, t) {
                        Object.defineProperty(T.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: y(t) ?
                                function() {
                                    if (this.originalEvent) return t(this.originalEvent);
                                } :
                                function() {
                                    if (this.originalEvent) return this.originalEvent[e];
                                },
                            set: function(t) {
                                Object.defineProperty(this, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                });
                            }
                        });
                    },
                    fix: function(t) {
                        return t[T.expando] ? t : new T.Event(t);
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(t) {
                                var e = this || t;
                                return (
                                    ht.test(e.type) &&
                                    e.click &&
                                    k(e, "input") &&
                                    Dt(e, "click", Et), !1
                                );
                            },
                            trigger: function(t) {
                                var e = this || t;
                                return (
                                    ht.test(e.type) && e.click && k(e, "input") && Dt(e, "click"), !0
                                );
                            },
                            _default: function(t) {
                                var e = t.target;
                                return (
                                    (ht.test(e.type) &&
                                        e.click &&
                                        k(e, "input") &&
                                        Q.get(e, "click")) ||
                                    k(e, "a")
                                );
                            }
                        },
                        beforeunload: {
                            postDispatch: function(t) {
                                void 0 !== t.result &&
                                    t.originalEvent &&
                                    (t.originalEvent.returnValue = t.result);
                            }
                        }
                    }
                }),
                (T.removeEvent = function(t, e, n) {
                    t.removeEventListener && t.removeEventListener(e, n);
                }),
                (T.Event = function(t, e) {
                    if (!(this instanceof T.Event)) return new T.Event(t, e);
                    t && t.type ?
                        ((this.originalEvent = t),
                            (this.type = t.type),
                            (this.isDefaultPrevented =
                                t.defaultPrevented ||
                                (void 0 === t.defaultPrevented && !1 === t.returnValue) ?
                                Et :
                                Tt),
                            (this.target =
                                t.target && 3 === t.target.nodeType ?
                                t.target.parentNode :
                                t.target),
                            (this.currentTarget = t.currentTarget),
                            (this.relatedTarget = t.relatedTarget)) :
                        (this.type = t),
                        e && T.extend(this, e),
                        (this.timeStamp = (t && t.timeStamp) || Date.now()),
                        (this[T.expando] = !0);
                }),
                (T.Event.prototype = {
                    constructor: T.Event,
                    isDefaultPrevented: Tt,
                    isPropagationStopped: Tt,
                    isImmediatePropagationStopped: Tt,
                    isSimulated: !1,
                    preventDefault: function() {
                        var t = this.originalEvent;
                        (this.isDefaultPrevented = Et),
                        t && !this.isSimulated && t.preventDefault();
                    },
                    stopPropagation: function() {
                        var t = this.originalEvent;
                        (this.isPropagationStopped = Et),
                        t && !this.isSimulated && t.stopPropagation();
                    },
                    stopImmediatePropagation: function() {
                        var t = this.originalEvent;
                        (this.isImmediatePropagationStopped = Et),
                        t && !this.isSimulated && t.stopImmediatePropagation(),
                            this.stopPropagation();
                    }
                }),
                T.each({
                            altKey: !0,
                            bubbles: !0,
                            cancelable: !0,
                            changedTouches: !0,
                            ctrlKey: !0,
                            detail: !0,
                            eventPhase: !0,
                            metaKey: !0,
                            pageX: !0,
                            pageY: !0,
                            shiftKey: !0,
                            view: !0,
                            char: !0,
                            code: !0,
                            charCode: !0,
                            key: !0,
                            keyCode: !0,
                            button: !0,
                            buttons: !0,
                            clientX: !0,
                            clientY: !0,
                            offsetX: !0,
                            offsetY: !0,
                            pointerId: !0,
                            pointerType: !0,
                            screenX: !0,
                            screenY: !0,
                            targetTouches: !0,
                            toElement: !0,
                            touches: !0,
                            which: function(t) {
                                var e = t.button;
                                return null == t.which && wt.test(t.type) ?
                                    null != t.charCode ?
                                    t.charCode :
                                    t.keyCode :
                                    !t.which && void 0 !== e && xt.test(t.type) ?
                                    1 & e ?
                                    1 :
                                    2 & e ?
                                    3 :
                                    4 & e ?
                                    2 :
                                    0 :
                                    t.which;
                            }
                        },
                        T.event.addProp
                    ),
                    T.each({
                            focus: "focusin",
                            blur: "focusout"
                        },
                        function(t, e) {
                            T.event.special[t] = {
                                setup: function() {
                                    return Dt(this, t, St), !1;
                                },
                                trigger: function() {
                                    return Dt(this, t), !0;
                                },
                                delegateType: e
                            };
                        }
                    ),
                    T.each({
                            mouseenter: "mouseover",
                            mouseleave: "mouseout",
                            pointerenter: "pointerover",
                            pointerleave: "pointerout"
                        },
                        function(t, o) {
                            T.event.special[t] = {
                                delegateType: o,
                                bindType: o,
                                handle: function(t) {
                                    var e,
                                        n = t.relatedTarget,
                                        i = t.handleObj;
                                    return (
                                        (n && (n === this || T.contains(this, n))) ||
                                        ((t.type = i.origType),
                                            (e = i.handler.apply(this, arguments)),
                                            (t.type = o)),
                                        e
                                    );
                                }
                            };
                        }
                    ),
                    T.fn.extend({
                        on: function(t, e, n, i) {
                            return kt(this, t, e, n, i);
                        },
                        one: function(t, e, n, i) {
                            return kt(this, t, e, n, i, 1);
                        },
                        off: function(t, e, n) {
                            var i, o;
                            if (t && t.preventDefault && t.handleObj)
                                return (
                                    (i = t.handleObj),
                                    T(t.delegateTarget).off(
                                        i.namespace ? i.origType + "." + i.namespace : i.origType,
                                        i.selector,
                                        i.handler
                                    ),
                                    this
                                );
                            if ("object" != typeof t)
                                return (
                                    (!1 !== e && "function" != typeof e) ||
                                    ((n = e), (e = void 0)), !1 === n && (n = Tt),
                                    this.each(function() {
                                        T.event.remove(this, t, n, e);
                                    })
                                );
                            for (o in t) this.off(o, e, t[o]);
                            return this;
                        }
                    });
                var It = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                    Pt = /<script|<style|<link/i,
                    Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    At = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

                function Ot(t, e) {
                    return (
                        (k(t, "table") &&
                            k(11 !== e.nodeType ? e : e.firstChild, "tr") &&
                            T(t).children("tbody")[0]) ||
                        t
                    );
                }

                function Lt(t) {
                    return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
                }

                function jt(t) {
                    return (
                        "true/" === (t.type || "").slice(0, 5) ?
                        (t.type = t.type.slice(5)) :
                        t.removeAttribute("type"),
                        t
                    );
                }

                function Ht(t, e) {
                    var n, i, o, r, s, a, l, c;
                    if (1 === e.nodeType) {
                        if (
                            Q.hasData(t) &&
                            ((r = Q.access(t)), (s = Q.set(e, r)), (c = r.events))
                        )
                            for (o in (delete s.handle, (s.events = {}), c))
                                for (n = 0, i = c[o].length; n < i; n++)
                                    T.event.add(e, o, c[o][n]);
                        $.hasData(t) &&
                            ((a = $.access(t)), (l = T.extend({}, a)), $.set(e, l));
                    }
                }

                function Mt(n, i, o, r) {
                    i = m.apply([], i);
                    var t,
                        e,
                        s,
                        a,
                        l,
                        c,
                        u = 0,
                        h = n.length,
                        f = h - 1,
                        p = i[0],
                        d = y(p);
                    if (
                        d ||
                        (1 < h && "string" == typeof p && !b.checkClone && Nt.test(p))
                    )
                        return n.each(function(t) {
                            var e = n.eq(t);
                            d && (i[0] = p.call(this, t, e.html())), Mt(e, i, o, r);
                        });
                    if (
                        h &&
                        ((e = (t = _t(i, n[0].ownerDocument, !1, n, r)).firstChild),
                            1 === t.childNodes.length && (t = e),
                            e || r)
                    ) {
                        for (a = (s = T.map(gt(t, "script"), Lt)).length; u < h; u++)
                            (l = t),
                            u !== f &&
                            ((l = T.clone(l, !0, !0)), a && T.merge(s, gt(l, "script"))),
                            o.call(n[u], l, u);
                        if (a)
                            for (
                                c = s[s.length - 1].ownerDocument, T.map(s, jt), u = 0; u < a; u++
                            )
                                (l = s[u]),
                                pt.test(l.type || "") &&
                                !Q.access(l, "globalEval") &&
                                T.contains(c, l) &&
                                (l.src && "module" !== (l.type || "").toLowerCase() ?
                                    T._evalUrl &&
                                    !l.noModule &&
                                    T._evalUrl(l.src, {
                                        nonce: l.nonce || l.getAttribute("nonce")
                                    }) :
                                    _(l.textContent.replace(At, ""), l, c));
                    }
                    return n;
                }

                function Rt(t, e, n) {
                    for (
                        var i, o = e ? T.filter(e, t) : t, r = 0; null != (i = o[r]); r++
                    )
                        n || 1 !== i.nodeType || T.cleanData(gt(i)),
                        i.parentNode &&
                        (n && ot(i) && mt(gt(i, "script")),
                            i.parentNode.removeChild(i));
                    return t;
                }
                T.extend({
                        htmlPrefilter: function(t) {
                            return t.replace(It, "<$1></$2>");
                        },
                        clone: function(t, e, n) {
                            var i,
                                o,
                                r,
                                s,
                                a,
                                l,
                                c,
                                u = t.cloneNode(!0),
                                h = ot(t);
                            if (!(
                                    b.noCloneChecked ||
                                    (1 !== t.nodeType && 11 !== t.nodeType) ||
                                    T.isXMLDoc(t)
                                ))
                                for (s = gt(u), i = 0, o = (r = gt(t)).length; i < o; i++)
                                    (a = r[i]),
                                    (l = s[i]),
                                    void 0,
                                    "input" === (c = l.nodeName.toLowerCase()) && ht.test(a.type) ?
                                    (l.checked = a.checked) :
                                    ("input" !== c && "textarea" !== c) ||
                                    (l.defaultValue = a.defaultValue);
                            if (e)
                                if (n)
                                    for (
                                        r = r || gt(t), s = s || gt(u), i = 0, o = r.length; i < o; i++
                                    )
                                        Ht(r[i], s[i]);
                                else Ht(t, u);
                            return (
                                0 < (s = gt(u, "script")).length && mt(s, !h && gt(t, "script")),
                                u
                            );
                        },
                        cleanData: function(t) {
                            for (
                                var e, n, i, o = T.event.special, r = 0; void 0 !== (n = t[r]); r++
                            )
                                if (K(n)) {
                                    if ((e = n[Q.expando])) {
                                        if (e.events)
                                            for (i in e.events)
                                                o[i] ?
                                                T.event.remove(n, i) :
                                                T.removeEvent(n, i, e.handle);
                                        n[Q.expando] = void 0;
                                    }
                                    n[$.expando] && (n[$.expando] = void 0);
                                }
                        }
                    }),
                    T.fn.extend({
                        detach: function(t) {
                            return Rt(this, t, !0);
                        },
                        remove: function(t) {
                            return Rt(this, t);
                        },
                        text: function(t) {
                            return B(
                                this,
                                function(t) {
                                    return void 0 === t ?
                                        T.text(this) :
                                        this.empty().each(function() {
                                            (1 !== this.nodeType &&
                                                11 !== this.nodeType &&
                                                9 !== this.nodeType) ||
                                            (this.textContent = t);
                                        });
                                },
                                null,
                                t,
                                arguments.length
                            );
                        },
                        append: function() {
                            return Mt(this, arguments, function(t) {
                                (1 !== this.nodeType &&
                                    11 !== this.nodeType &&
                                    9 !== this.nodeType) ||
                                Ot(this, t).appendChild(t);
                            });
                        },
                        prepend: function() {
                            return Mt(this, arguments, function(t) {
                                if (
                                    1 === this.nodeType ||
                                    11 === this.nodeType ||
                                    9 === this.nodeType
                                ) {
                                    var e = Ot(this, t);
                                    e.insertBefore(t, e.firstChild);
                                }
                            });
                        },
                        before: function() {
                            return Mt(this, arguments, function(t) {
                                this.parentNode && this.parentNode.insertBefore(t, this);
                            });
                        },
                        after: function() {
                            return Mt(this, arguments, function(t) {
                                this.parentNode &&
                                    this.parentNode.insertBefore(t, this.nextSibling);
                            });
                        },
                        empty: function() {
                            for (var t, e = 0; null != (t = this[e]); e++)
                                1 === t.nodeType &&
                                (T.cleanData(gt(t, !1)), (t.textContent = ""));
                            return this;
                        },
                        clone: function(t, e) {
                            return (
                                (t = null != t && t),
                                (e = null == e ? t : e),
                                this.map(function() {
                                    return T.clone(this, t, e);
                                })
                            );
                        },
                        html: function(t) {
                            return B(
                                this,
                                function(t) {
                                    var e = this[0] || {},
                                        n = 0,
                                        i = this.length;
                                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                                    if (
                                        "string" == typeof t &&
                                        !Pt.test(t) &&
                                        !dt[(ft.exec(t) || ["", ""])[1].toLowerCase()]
                                    ) {
                                        t = T.htmlPrefilter(t);
                                        try {
                                            for (; n < i; n++)
                                                1 === (e = this[n] || {}).nodeType &&
                                                (T.cleanData(gt(e, !1)), (e.innerHTML = t));
                                            e = 0;
                                        } catch (t) {}
                                    }
                                    e && this.empty().append(t);
                                },
                                null,
                                t,
                                arguments.length
                            );
                        },
                        replaceWith: function() {
                            var n = [];
                            return Mt(
                                this,
                                arguments,
                                function(t) {
                                    var e = this.parentNode;
                                    T.inArray(this, n) < 0 &&
                                        (T.cleanData(gt(this)), e && e.replaceChild(t, this));
                                },
                                n
                            );
                        }
                    }),
                    T.each({
                            appendTo: "append",
                            prependTo: "prepend",
                            insertBefore: "before",
                            insertAfter: "after",
                            replaceAll: "replaceWith"
                        },
                        function(t, s) {
                            T.fn[t] = function(t) {
                                for (
                                    var e, n = [], i = T(t), o = i.length - 1, r = 0; r <= o; r++
                                )
                                    (e = r === o ? this : this.clone(!0)),
                                    T(i[r])[s](e),
                                    l.apply(n, e.get());
                                return this.pushStack(n);
                            };
                        }
                    );
                var qt,
                    Wt,
                    Ft,
                    Bt,
                    Ut,
                    zt,
                    Yt,
                    Vt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
                    Kt = function(t) {
                        var e = t.ownerDocument.defaultView;
                        return (e && e.opener) || (e = C), e.getComputedStyle(t);
                    },
                    Xt = new RegExp(nt.join("|"), "i");

                function Qt() {
                    if (Yt) {
                        (zt.style.cssText =
                            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                        (Yt.style.cssText =
                            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                        it.appendChild(zt).appendChild(Yt);
                        var t = C.getComputedStyle(Yt);
                        (qt = "1%" !== t.top),
                        (Ut = 12 === $t(t.marginLeft)),
                        (Yt.style.right = "60%"),
                        (Bt = 36 === $t(t.right)),
                        (Wt = 36 === $t(t.width)),
                        (Yt.style.position = "absolute"),
                        (Ft = 12 === $t(Yt.offsetWidth / 3)),
                        it.removeChild(zt),
                            (Yt = null);
                    }
                }

                function $t(t) {
                    return Math.round(parseFloat(t));
                }

                function Gt(t, e, n) {
                    var i,
                        o,
                        r,
                        s,
                        a = t.style;
                    return (
                        (n = n || Kt(t)) &&
                        ("" !== (s = n.getPropertyValue(e) || n[e]) ||
                            ot(t) ||
                            (s = T.style(t, e)), !b.pixelBoxStyles() &&
                            Vt.test(s) &&
                            Xt.test(e) &&
                            ((i = a.width),
                                (o = a.minWidth),
                                (r = a.maxWidth),
                                (a.minWidth = a.maxWidth = a.width = s),
                                (s = n.width),
                                (a.width = i),
                                (a.minWidth = o),
                                (a.maxWidth = r))),
                        void 0 !== s ? s + "" : s
                    );
                }

                function Jt(t, e) {
                    return {
                        get: function() {
                            if (!t()) return (this.get = e).apply(this, arguments);
                            delete this.get;
                        }
                    };
                }
                (zt = E.createElement("div")),
                (Yt = E.createElement("div")).style &&
                    ((Yt.style.backgroundClip = "content-box"),
                        (Yt.cloneNode(!0).style.backgroundClip = ""),
                        (b.clearCloneStyle = "content-box" === Yt.style.backgroundClip),
                        T.extend(b, {
                            boxSizingReliable: function() {
                                return Qt(), Wt;
                            },
                            pixelBoxStyles: function() {
                                return Qt(), Bt;
                            },
                            pixelPosition: function() {
                                return Qt(), qt;
                            },
                            reliableMarginLeft: function() {
                                return Qt(), Ut;
                            },
                            scrollboxSize: function() {
                                return Qt(), Ft;
                            }
                        }));
                var Zt = ["Webkit", "Moz", "ms"],
                    te = E.createElement("div").style,
                    ee = {};

                function ne(t) {
                    var e = T.cssProps[t] || ee[t];
                    return (
                        e ||
                        (t in te ?
                            t :
                            (ee[t] =
                                (function(t) {
                                    for (
                                        var e = t[0].toUpperCase() + t.slice(1), n = Zt.length; n--;

                                    )
                                        if ((t = Zt[n] + e) in te) return t;
                                })(t) || t))
                    );
                }
                var ie = /^(none|table(?!-c[ea]).+)/,
                    oe = /^--/,
                    re = {
                        position: "absolute",
                        visibility: "hidden",
                        display: "block"
                    },
                    se = {
                        letterSpacing: "0",
                        fontWeight: "400"
                    };

                function ae(t, e, n) {
                    var i = et.exec(e);
                    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
                }

                function le(t, e, n, i, o, r) {
                    var s = "width" === e ? 1 : 0,
                        a = 0,
                        l = 0;
                    if (n === (i ? "border" : "content")) return 0;
                    for (; s < 4; s += 2)
                        "margin" === n && (l += T.css(t, n + nt[s], !0, o)),
                        i ?
                        ("content" === n && (l -= T.css(t, "padding" + nt[s], !0, o)),
                            "margin" !== n &&
                            (l -= T.css(t, "border" + nt[s] + "Width", !0, o))) :
                        ((l += T.css(t, "padding" + nt[s], !0, o)),
                            "padding" !== n ?
                            (l += T.css(t, "border" + nt[s] + "Width", !0, o)) :
                            (a += T.css(t, "border" + nt[s] + "Width", !0, o)));
                    return (!i &&
                        0 <= r &&
                        (l +=
                            Math.max(
                                0,
                                Math.ceil(
                                    t["offset" + e[0].toUpperCase() + e.slice(1)] -
                                    r -
                                    l -
                                    a -
                                    0.5
                                )
                            ) || 0),
                        l
                    );
                }

                function ce(t, e, n) {
                    var i = Kt(t),
                        o =
                        (!b.boxSizingReliable() || n) &&
                        "border-box" === T.css(t, "boxSizing", !1, i),
                        r = o,
                        s = Gt(t, e, i),
                        a = "offset" + e[0].toUpperCase() + e.slice(1);
                    if (Vt.test(s)) {
                        if (!n) return s;
                        s = "auto";
                    }
                    return (
                        ((!b.boxSizingReliable() && o) ||
                            "auto" === s ||
                            (!parseFloat(s) && "inline" === T.css(t, "display", !1, i))) &&
                        t.getClientRects().length &&
                        ((o = "border-box" === T.css(t, "boxSizing", !1, i)),
                            (r = a in t) && (s = t[a])),
                        (s = parseFloat(s) || 0) +
                        le(t, e, n || (o ? "border" : "content"), r, i, s) +
                        "px"
                    );
                }

                function ue(t, e, n, i, o) {
                    return new ue.prototype.init(t, e, n, i, o);
                }
                T.extend({
                        cssHooks: {
                            opacity: {
                                get: function(t, e) {
                                    if (e) {
                                        var n = Gt(t, "opacity");
                                        return "" === n ? "1" : n;
                                    }
                                }
                            }
                        },
                        cssNumber: {
                            animationIterationCount: !0,
                            columnCount: !0,
                            fillOpacity: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            gridArea: !0,
                            gridColumn: !0,
                            gridColumnEnd: !0,
                            gridColumnStart: !0,
                            gridRow: !0,
                            gridRowEnd: !0,
                            gridRowStart: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0
                        },
                        cssProps: {},
                        style: function(t, e, n, i) {
                            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                                var o,
                                    r,
                                    s,
                                    a = V(e),
                                    l = oe.test(e),
                                    c = t.style;
                                if (
                                    (l || (e = ne(a)),
                                        (s = T.cssHooks[e] || T.cssHooks[a]),
                                        void 0 === n)
                                )
                                    return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ?
                                        o :
                                        c[e];
                                "string" === (r = typeof n) &&
                                (o = et.exec(n)) &&
                                o[1] &&
                                    ((n = lt(t, e, o)), (r = "number")),
                                    null != n &&
                                    n == n &&
                                    ("number" !== r ||
                                        l ||
                                        (n += (o && o[3]) || (T.cssNumber[a] ? "" : "px")),
                                        b.clearCloneStyle ||
                                        "" !== n ||
                                        0 !== e.indexOf("background") ||
                                        (c[e] = "inherit"),
                                        (s && "set" in s && void 0 === (n = s.set(t, n, i))) ||
                                        (l ? c.setProperty(e, n) : (c[e] = n)));
                            }
                        },
                        css: function(t, e, n, i) {
                            var o,
                                r,
                                s,
                                a = V(e);
                            return (
                                oe.test(e) || (e = ne(a)),
                                (s = T.cssHooks[e] || T.cssHooks[a]) &&
                                "get" in s &&
                                (o = s.get(t, !0, n)),
                                void 0 === o && (o = Gt(t, e, i)),
                                "normal" === o && e in se && (o = se[e]),
                                "" === n || n ?
                                ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o) :
                                o
                            );
                        }
                    }),
                    T.each(["height", "width"], function(t, l) {
                        T.cssHooks[l] = {
                            get: function(t, e, n) {
                                if (e)
                                    return !ie.test(T.css(t, "display")) ||
                                        (t.getClientRects().length &&
                                            t.getBoundingClientRect().width) ?
                                        ce(t, l, n) :
                                        st(t, re, function() {
                                            return ce(t, l, n);
                                        });
                            },
                            set: function(t, e, n) {
                                var i,
                                    o = Kt(t),
                                    r = !b.scrollboxSize() && "absolute" === o.position,
                                    s = (r || n) && "border-box" === T.css(t, "boxSizing", !1, o),
                                    a = n ? le(t, l, n, s, o) : 0;
                                return (
                                    s &&
                                    r &&
                                    (a -= Math.ceil(
                                        t["offset" + l[0].toUpperCase() + l.slice(1)] -
                                        parseFloat(o[l]) -
                                        le(t, l, "border", !1, o) -
                                        0.5
                                    )),
                                    a &&
                                    (i = et.exec(e)) &&
                                    "px" !== (i[3] || "px") &&
                                    ((t.style[l] = e), (e = T.css(t, l))),
                                    ae(0, e, a)
                                );
                            }
                        };
                    }),
                    (T.cssHooks.marginLeft = Jt(b.reliableMarginLeft, function(t, e) {
                        if (e)
                            return (
                                (parseFloat(Gt(t, "marginLeft")) ||
                                    t.getBoundingClientRect().left -
                                    st(
                                        t, {
                                            marginLeft: 0
                                        },
                                        function() {
                                            return t.getBoundingClientRect().left;
                                        }
                                    )) + "px"
                            );
                    })),
                    T.each({
                            margin: "",
                            padding: "",
                            border: "Width"
                        },
                        function(o, r) {
                            (T.cssHooks[o + r] = {
                                expand: function(t) {
                                    for (
                                        var e = 0,
                                            n = {},
                                            i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++
                                    )
                                        n[o + nt[e] + r] = i[e] || i[e - 2] || i[0];
                                    return n;
                                }
                            }),
                            "margin" !== o && (T.cssHooks[o + r].set = ae);
                        }
                    ),
                    T.fn.extend({
                        css: function(t, e) {
                            return B(
                                this,
                                function(t, e, n) {
                                    var i,
                                        o,
                                        r = {},
                                        s = 0;
                                    if (Array.isArray(e)) {
                                        for (i = Kt(t), o = e.length; s < o; s++)
                                            r[e[s]] = T.css(t, e[s], !1, i);
                                        return r;
                                    }
                                    return void 0 !== n ? T.style(t, e, n) : T.css(t, e);
                                },
                                t,
                                e,
                                1 < arguments.length
                            );
                        }
                    }),
                    (((T.Tween = ue).prototype = {
                        constructor: ue,
                        init: function(t, e, n, i, o, r) {
                            (this.elem = t),
                            (this.prop = n),
                            (this.easing = o || T.easing._default),
                            (this.options = e),
                            (this.start = this.now = this.cur()),
                            (this.end = i),
                            (this.unit = r || (T.cssNumber[n] ? "" : "px"));
                        },
                        cur: function() {
                            var t = ue.propHooks[this.prop];
                            return t && t.get ? t.get(this) : ue.propHooks._default.get(this);
                        },
                        run: function(t) {
                            var e,
                                n = ue.propHooks[this.prop];
                            return (
                                this.options.duration ?
                                (this.pos = e = T.easing[this.easing](
                                    t,
                                    this.options.duration * t,
                                    0,
                                    1,
                                    this.options.duration
                                )) :
                                (this.pos = e = t),
                                (this.now = (this.end - this.start) * e + this.start),
                                this.options.step &&
                                this.options.step.call(this.elem, this.now, this),
                                n && n.set ? n.set(this) : ue.propHooks._default.set(this),
                                this
                            );
                        }
                    }).init.prototype = ue.prototype),
                    ((ue.propHooks = {
                        _default: {
                            get: function(t) {
                                var e;
                                return 1 !== t.elem.nodeType ||
                                    (null != t.elem[t.prop] && null == t.elem.style[t.prop]) ?
                                    t.elem[t.prop] :
                                    (e = T.css(t.elem, t.prop, "")) && "auto" !== e ?
                                    e :
                                    0;
                            },
                            set: function(t) {
                                T.fx.step[t.prop] ?
                                    T.fx.step[t.prop](t) :
                                    1 !== t.elem.nodeType ||
                                    (!T.cssHooks[t.prop] && null == t.elem.style[ne(t.prop)]) ?
                                    (t.elem[t.prop] = t.now) :
                                    T.style(t.elem, t.prop, t.now + t.unit);
                            }
                        }
                    }).scrollTop = ue.propHooks.scrollLeft = {
                        set: function(t) {
                            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
                        }
                    }),
                    (T.easing = {
                        linear: function(t) {
                            return t;
                        },
                        swing: function(t) {
                            return 0.5 - Math.cos(t * Math.PI) / 2;
                        },
                        _default: "swing"
                    }),
                    (T.fx = ue.prototype.init),
                    (T.fx.step = {});
                var he,
                    fe,
                    pe,
                    de,
                    ge = /^(?:toggle|show|hide)$/,
                    me = /queueHooks$/;

                function ve() {
                    fe &&
                        (!1 === E.hidden && C.requestAnimationFrame ?
                            C.requestAnimationFrame(ve) :
                            C.setTimeout(ve, T.fx.interval),
                            T.fx.tick());
                }

                function be() {
                    return (
                        C.setTimeout(function() {
                            he = void 0;
                        }),
                        (he = Date.now())
                    );
                }

                function ye(t, e) {
                    var n,
                        i = 0,
                        o = {
                            height: t
                        };
                    for (e = e ? 1 : 0; i < 4; i += 2 - e)
                        o["margin" + (n = nt[i])] = o["padding" + n] = t;
                    return e && (o.opacity = o.width = t), o;
                }

                function _e(t, e, n) {
                    for (
                        var i,
                            o = (we.tweeners[e] || []).concat(we.tweeners["*"]),
                            r = 0,
                            s = o.length; r < s; r++
                    )
                        if ((i = o[r].call(n, e, t))) return i;
                }

                function we(r, t, e) {
                    var n,
                        s,
                        i = 0,
                        o = we.prefilters.length,
                        a = T.Deferred().always(function() {
                            delete l.elem;
                        }),
                        l = function() {
                            if (s) return !1;
                            for (
                                var t = he || be(),
                                    e = Math.max(0, c.startTime + c.duration - t),
                                    n = 1 - (e / c.duration || 0),
                                    i = 0,
                                    o = c.tweens.length; i < o; i++
                            )
                                c.tweens[i].run(n);
                            return (
                                a.notifyWith(r, [c, n, e]),
                                n < 1 && o ?
                                e :
                                (o || a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c]), !1)
                            );
                        },
                        c = a.promise({
                            elem: r,
                            props: T.extend({}, t),
                            opts: T.extend(!0, {
                                    specialEasing: {},
                                    easing: T.easing._default
                                },
                                e
                            ),
                            originalProperties: t,
                            originalOptions: e,
                            startTime: he || be(),
                            duration: e.duration,
                            tweens: [],
                            createTween: function(t, e) {
                                var n = T.Tween(
                                    r,
                                    c.opts,
                                    t,
                                    e,
                                    c.opts.specialEasing[t] || c.opts.easing
                                );
                                return c.tweens.push(n), n;
                            },
                            stop: function(t) {
                                var e = 0,
                                    n = t ? c.tweens.length : 0;
                                if (s) return this;
                                for (s = !0; e < n; e++) c.tweens[e].run(1);
                                return (
                                    t ?
                                    (a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c, t])) :
                                    a.rejectWith(r, [c, t]),
                                    this
                                );
                            }
                        }),
                        u = c.props;
                    for (!(function(t, e) {
                            var n, i, o, r, s;
                            for (n in t)
                                if (
                                    ((o = e[(i = V(n))]),
                                        (r = t[n]),
                                        Array.isArray(r) && ((o = r[1]), (r = t[n] = r[0])),
                                        n !== i && ((t[i] = r), delete t[n]),
                                        (s = T.cssHooks[i]) && ("expand" in s))
                                )
                                    for (n in ((r = s.expand(r)), delete t[i], r))
                                        (n in t) || ((t[n] = r[n]), (e[n] = o));
                                else e[i] = o;
                        })(u, c.opts.specialEasing); i < o; i++)
                        if ((n = we.prefilters[i].call(c, r, u, c.opts)))
                            return (
                                y(n.stop) &&
                                (T._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
                                n
                            );
                    return (
                        T.map(u, _e, c),
                        y(c.opts.start) && c.opts.start.call(r, c),
                        c
                        .progress(c.opts.progress)
                        .done(c.opts.done, c.opts.complete)
                        .fail(c.opts.fail)
                        .always(c.opts.always),
                        T.fx.timer(
                            T.extend(l, {
                                elem: r,
                                anim: c,
                                queue: c.opts.queue
                            })
                        ),
                        c
                    );
                }
                (T.Animation = T.extend(we, {
                    tweeners: {
                        "*": [
                            function(t, e) {
                                var n = this.createTween(t, e);
                                return lt(n.elem, t, et.exec(e), n), n;
                            }
                        ]
                    },
                    tweener: function(t, e) {
                        for (
                            var n,
                                i = 0,
                                o = (t = y(t) ? ((e = t), ["*"]) : t.match(j)).length; i < o; i++
                        )
                            (n = t[i]),
                            (we.tweeners[n] = we.tweeners[n] || []),
                            we.tweeners[n].unshift(e);
                    },
                    prefilters: [
                        function(t, e, n) {
                            var i,
                                o,
                                r,
                                s,
                                a,
                                l,
                                c,
                                u,
                                h = "width" in e || "height" in e,
                                f = this,
                                p = {},
                                d = t.style,
                                g = t.nodeType && at(t),
                                m = Q.get(t, "fxshow");
                            for (i in (n.queue ||
                                    (null == (s = T._queueHooks(t, "fx")).unqueued &&
                                        ((s.unqueued = 0),
                                            (a = s.empty.fire),
                                            (s.empty.fire = function() {
                                                s.unqueued || a();
                                            })),
                                        s.unqueued++,
                                        f.always(function() {
                                            f.always(function() {
                                                s.unqueued--, T.queue(t, "fx").length || s.empty.fire();
                                            });
                                        })),
                                    e))
                                if (((o = e[i]), ge.test(o))) {
                                    if (
                                        (delete e[i],
                                            (r = r || "toggle" === o),
                                            o === (g ? "hide" : "show"))
                                    ) {
                                        if ("show" !== o || !m || void 0 === m[i]) continue;
                                        g = !0;
                                    }
                                    p[i] = (m && m[i]) || T.style(t, i);
                                }
                            if ((l = !T.isEmptyObject(e)) || !T.isEmptyObject(p))
                                for (i in (h &&
                                        1 === t.nodeType &&
                                        ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
                                            null == (c = m && m.display) && (c = Q.get(t, "display")),
                                            "none" === (u = T.css(t, "display")) &&
                                            (c ?
                                                (u = c) :
                                                (ut([t], !0),
                                                    (c = t.style.display || c),
                                                    (u = T.css(t, "display")),
                                                    ut([t]))),
                                            ("inline" === u || ("inline-block" === u && null != c)) &&
                                            "none" === T.css(t, "float") &&
                                            (l ||
                                                (f.done(function() {
                                                        d.display = c;
                                                    }),
                                                    null == c &&
                                                    ((u = d.display), (c = "none" === u ? "" : u))),
                                                (d.display = "inline-block"))),
                                        n.overflow &&
                                        ((d.overflow = "hidden"),
                                            f.always(function() {
                                                (d.overflow = n.overflow[0]),
                                                (d.overflowX = n.overflow[1]),
                                                (d.overflowY = n.overflow[2]);
                                            })),
                                        (l = !1),
                                        p))
                                    l ||
                                    (m ?
                                        "hidden" in m && (g = m.hidden) :
                                        (m = Q.access(t, "fxshow", {
                                            display: c
                                        })),
                                        r && (m.hidden = !g),
                                        g && ut([t], !0),
                                        f.done(function() {
                                            for (i in (g || ut([t]), Q.remove(t, "fxshow"), p))
                                                T.style(t, i, p[i]);
                                        })),
                                    (l = _e(g ? m[i] : 0, i, f)),
                                    i in m ||
                                    ((m[i] = l.start),
                                        g && ((l.end = l.start), (l.start = 0)));
                        }
                    ],
                    prefilter: function(t, e) {
                        e ? we.prefilters.unshift(t) : we.prefilters.push(t);
                    }
                })),
                (T.speed = function(t, e, n) {
                    var i =
                        t && "object" == typeof t ?
                        T.extend({}, t) :
                        {
                            complete: n || (!n && e) || (y(t) && t),
                            duration: t,
                            easing: (n && e) || (e && !y(e) && e)
                        };
                    return (
                        T.fx.off ?
                        (i.duration = 0) :
                        "number" != typeof i.duration &&
                        (i.duration in T.fx.speeds ?
                            (i.duration = T.fx.speeds[i.duration]) :
                            (i.duration = T.fx.speeds._default)),
                        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                        (i.old = i.complete),
                        (i.complete = function() {
                            y(i.old) && i.old.call(this),
                                i.queue && T.dequeue(this, i.queue);
                        }),
                        i
                    );
                }),
                T.fn.extend({
                        fadeTo: function(t, e, n, i) {
                            return this.filter(at)
                                .css("opacity", 0)
                                .show()
                                .end()
                                .animate({
                                        opacity: e
                                    },
                                    t,
                                    n,
                                    i
                                );
                        },
                        animate: function(e, t, n, i) {
                            function o() {
                                var t = we(this, T.extend({}, e), s);
                                (r || Q.get(this, "finish")) && t.stop(!0);
                            }
                            var r = T.isEmptyObject(e),
                                s = T.speed(t, n, i);
                            return (
                                (o.finish = o),
                                r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
                            );
                        },
                        stop: function(o, t, r) {
                            function s(t) {
                                var e = t.stop;
                                delete t.stop, e(r);
                            }
                            return (
                                "string" != typeof o && ((r = t), (t = o), (o = void 0)),
                                t && !1 !== o && this.queue(o || "fx", []),
                                this.each(function() {
                                    var t = !0,
                                        e = null != o && o + "queueHooks",
                                        n = T.timers,
                                        i = Q.get(this);
                                    if (e) i[e] && i[e].stop && s(i[e]);
                                    else
                                        for (e in i) i[e] && i[e].stop && me.test(e) && s(i[e]);
                                    for (e = n.length; e--;)
                                        n[e].elem !== this ||
                                        (null != o && n[e].queue !== o) ||
                                        (n[e].anim.stop(r), (t = !1), n.splice(e, 1));
                                    (!t && r) || T.dequeue(this, o);
                                })
                            );
                        },
                        finish: function(s) {
                            return (!1 !== s && (s = s || "fx"),
                                this.each(function() {
                                    var t,
                                        e = Q.get(this),
                                        n = e[s + "queue"],
                                        i = e[s + "queueHooks"],
                                        o = T.timers,
                                        r = n ? n.length : 0;
                                    for (
                                        e.finish = !0,
                                        T.queue(this, s, []),
                                        i && i.stop && i.stop.call(this, !0),
                                        t = o.length; t--;

                                    )
                                        o[t].elem === this &&
                                        o[t].queue === s &&
                                        (o[t].anim.stop(!0), o.splice(t, 1));
                                    for (t = 0; t < r; t++)
                                        n[t] && n[t].finish && n[t].finish.call(this);
                                    delete e.finish;
                                })
                            );
                        }
                    }),
                    T.each(["toggle", "show", "hide"], function(t, i) {
                        var o = T.fn[i];
                        T.fn[i] = function(t, e, n) {
                            return null == t || "boolean" == typeof t ?
                                o.apply(this, arguments) :
                                this.animate(ye(i, !0), t, e, n);
                        };
                    }),
                    T.each({
                            slideDown: ye("show"),
                            slideUp: ye("hide"),
                            slideToggle: ye("toggle"),
                            fadeIn: {
                                opacity: "show"
                            },
                            fadeOut: {
                                opacity: "hide"
                            },
                            fadeToggle: {
                                opacity: "toggle"
                            }
                        },
                        function(t, i) {
                            T.fn[t] = function(t, e, n) {
                                return this.animate(i, t, e, n);
                            };
                        }
                    ),
                    (T.timers = []),
                    (T.fx.tick = function() {
                        var t,
                            e = 0,
                            n = T.timers;
                        for (he = Date.now(); e < n.length; e++)
                            (t = n[e])() || n[e] !== t || n.splice(e--, 1);
                        n.length || T.fx.stop(), (he = void 0);
                    }),
                    (T.fx.timer = function(t) {
                        T.timers.push(t), T.fx.start();
                    }),
                    (T.fx.interval = 13),
                    (T.fx.start = function() {
                        fe || ((fe = !0), ve());
                    }),
                    (T.fx.stop = function() {
                        fe = null;
                    }),
                    (T.fx.speeds = {
                        slow: 600,
                        fast: 200,
                        _default: 400
                    }),
                    (T.fn.delay = function(i, t) {
                        return (
                            (i = (T.fx && T.fx.speeds[i]) || i),
                            (t = t || "fx"),
                            this.queue(t, function(t, e) {
                                var n = C.setTimeout(t, i);
                                e.stop = function() {
                                    C.clearTimeout(n);
                                };
                            })
                        );
                    }),
                    (pe = E.createElement("input")),
                    (de = E.createElement("select").appendChild(
                        E.createElement("option")
                    )),
                    (pe.type = "checkbox"),
                    (b.checkOn = "" !== pe.value),
                    (b.optSelected = de.selected),
                    ((pe = E.createElement("input")).value = "t"),
                    (pe.type = "radio"),
                    (b.radioValue = "t" === pe.value);
                var xe,
                    Ce = T.expr.attrHandle;
                T.fn.extend({
                        attr: function(t, e) {
                            return B(this, T.attr, t, e, 1 < arguments.length);
                        },
                        removeAttr: function(t) {
                            return this.each(function() {
                                T.removeAttr(this, t);
                            });
                        }
                    }),
                    T.extend({
                        attr: function(t, e, n) {
                            var i,
                                o,
                                r = t.nodeType;
                            if (3 !== r && 8 !== r && 2 !== r)
                                return void 0 === t.getAttribute ?
                                    T.prop(t, e, n) :
                                    ((1 === r && T.isXMLDoc(t)) ||
                                        (o =
                                            T.attrHooks[e.toLowerCase()] ||
                                            (T.expr.match.bool.test(e) ? xe : void 0)),
                                        void 0 !== n ?
                                        null === n ?
                                        void T.removeAttr(t, e) :
                                        o && "set" in o && void 0 !== (i = o.set(t, n, e)) ?
                                        i :
                                        (t.setAttribute(e, n + ""), n) :
                                        o && "get" in o && null !== (i = o.get(t, e)) ?
                                        i :
                                        null == (i = T.find.attr(t, e)) ?
                                        void 0 :
                                        i);
                        },
                        attrHooks: {
                            type: {
                                set: function(t, e) {
                                    if (!b.radioValue && "radio" === e && k(t, "input")) {
                                        var n = t.value;
                                        return t.setAttribute("type", e), n && (t.value = n), e;
                                    }
                                }
                            }
                        },
                        removeAttr: function(t, e) {
                            var n,
                                i = 0,
                                o = e && e.match(j);
                            if (o && 1 === t.nodeType)
                                for (;
                                    (n = o[i++]);) t.removeAttribute(n);
                        }
                    }),
                    (xe = {
                        set: function(t, e, n) {
                            return !1 === e ? T.removeAttr(t, n) : t.setAttribute(n, n), n;
                        }
                    }),
                    T.each(T.expr.match.bool.source.match(/\w+/g), function(t, e) {
                        var s = Ce[e] || T.find.attr;
                        Ce[e] = function(t, e, n) {
                            var i,
                                o,
                                r = e.toLowerCase();
                            return (
                                n ||
                                ((o = Ce[r]),
                                    (Ce[r] = i),
                                    (i = null != s(t, e, n) ? r : null),
                                    (Ce[r] = o)),
                                i
                            );
                        };
                    });
                var Ee = /^(?:input|select|textarea|button)$/i,
                    Te = /^(?:a|area)$/i;

                function Se(t) {
                    return (t.match(j) || []).join(" ");
                }

                function ke(t) {
                    return (t.getAttribute && t.getAttribute("class")) || "";
                }

                function De(t) {
                    return Array.isArray(t) ?
                        t :
                        ("string" == typeof t && t.match(j)) || [];
                }
                T.fn.extend({
                        prop: function(t, e) {
                            return B(this, T.prop, t, e, 1 < arguments.length);
                        },
                        removeProp: function(t) {
                            return this.each(function() {
                                delete this[T.propFix[t] || t];
                            });
                        }
                    }),
                    T.extend({
                        prop: function(t, e, n) {
                            var i,
                                o,
                                r = t.nodeType;
                            if (3 !== r && 8 !== r && 2 !== r)
                                return (
                                    (1 === r && T.isXMLDoc(t)) ||
                                    ((e = T.propFix[e] || e), (o = T.propHooks[e])),
                                    void 0 !== n ?
                                    o && "set" in o && void 0 !== (i = o.set(t, n, e)) ?
                                    i :
                                    (t[e] = n) :
                                    o && "get" in o && null !== (i = o.get(t, e)) ?
                                    i :
                                    t[e]
                                );
                        },
                        propHooks: {
                            tabIndex: {
                                get: function(t) {
                                    var e = T.find.attr(t, "tabindex");
                                    return e ?
                                        parseInt(e, 10) :
                                        Ee.test(t.nodeName) || (Te.test(t.nodeName) && t.href) ?
                                        0 :
                                        -1;
                                }
                            }
                        },
                        propFix: {
                            for: "htmlFor",
                            class: "className"
                        }
                    }),
                    b.optSelected ||
                    (T.propHooks.selected = {
                        get: function(t) {
                            var e = t.parentNode;
                            return e && e.parentNode && e.parentNode.selectedIndex, null;
                        },
                        set: function(t) {
                            var e = t.parentNode;
                            e &&
                                (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
                        }
                    }),
                    T.each(
                        [
                            "tabIndex",
                            "readOnly",
                            "maxLength",
                            "cellSpacing",
                            "cellPadding",
                            "rowSpan",
                            "colSpan",
                            "useMap",
                            "frameBorder",
                            "contentEditable"
                        ],
                        function() {
                            T.propFix[this.toLowerCase()] = this;
                        }
                    ),
                    T.fn.extend({
                        addClass: function(e) {
                            var t,
                                n,
                                i,
                                o,
                                r,
                                s,
                                a,
                                l = 0;
                            if (y(e))
                                return this.each(function(t) {
                                    T(this).addClass(e.call(this, t, ke(this)));
                                });
                            if ((t = De(e)).length)
                                for (;
                                    (n = this[l++]);)
                                    if (
                                        ((o = ke(n)), (i = 1 === n.nodeType && " " + Se(o) + " "))
                                    ) {
                                        for (s = 0;
                                            (r = t[s++]);)
                                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                                        o !== (a = Se(i)) && n.setAttribute("class", a);
                                    }
                            return this;
                        },
                        removeClass: function(e) {
                            var t,
                                n,
                                i,
                                o,
                                r,
                                s,
                                a,
                                l = 0;
                            if (y(e))
                                return this.each(function(t) {
                                    T(this).removeClass(e.call(this, t, ke(this)));
                                });
                            if (!arguments.length) return this.attr("class", "");
                            if ((t = De(e)).length)
                                for (;
                                    (n = this[l++]);)
                                    if (
                                        ((o = ke(n)), (i = 1 === n.nodeType && " " + Se(o) + " "))
                                    ) {
                                        for (s = 0;
                                            (r = t[s++]);)
                                            for (; - 1 < i.indexOf(" " + r + " ");)
                                                i = i.replace(" " + r + " ", " ");
                                        o !== (a = Se(i)) && n.setAttribute("class", a);
                                    }
                            return this;
                        },
                        toggleClass: function(o, e) {
                            var r = typeof o,
                                s = "string" == r || Array.isArray(o);
                            return "boolean" == typeof e && s ?
                                e ?
                                this.addClass(o) :
                                this.removeClass(o) :
                                y(o) ?
                                this.each(function(t) {
                                    T(this).toggleClass(o.call(this, t, ke(this), e), e);
                                }) :
                                this.each(function() {
                                    var t, e, n, i;
                                    if (s)
                                        for (e = 0, n = T(this), i = De(o);
                                            (t = i[e++]);)
                                            n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                                    else
                                        (void 0 !== o && "boolean" != r) ||
                                        ((t = ke(this)) && Q.set(this, "__className__", t),
                                            this.setAttribute &&
                                            this.setAttribute(
                                                "class",
                                                t || !1 === o ?
                                                "" :
                                                Q.get(this, "__className__") || ""
                                            ));
                                });
                        },
                        hasClass: function(t) {
                            var e,
                                n,
                                i = 0;
                            for (e = " " + t + " ";
                                (n = this[i++]);)
                                if (1 === n.nodeType && -1 < (" " + Se(ke(n)) + " ").indexOf(e))
                                    return !0;
                            return !1;
                        }
                    });
                var Ie = /\r/g;
                T.fn.extend({
                        val: function(n) {
                            var i,
                                t,
                                o,
                                e = this[0];
                            return arguments.length ?
                                ((o = y(n)),
                                    this.each(function(t) {
                                        var e;
                                        1 === this.nodeType &&
                                            (null == (e = o ? n.call(this, t, T(this).val()) : n) ?
                                                (e = "") :
                                                "number" == typeof e ?
                                                (e += "") :
                                                Array.isArray(e) &&
                                                (e = T.map(e, function(t) {
                                                    return null == t ? "" : t + "";
                                                })),
                                                ((i =
                                                        T.valHooks[this.type] ||
                                                        T.valHooks[this.nodeName.toLowerCase()]) &&
                                                    "set" in i &&
                                                    void 0 !== i.set(this, e, "value")) ||
                                                (this.value = e));
                                    })) :
                                e ?
                                (i =
                                    T.valHooks[e.type] || T.valHooks[e.nodeName.toLowerCase()]) &&
                                "get" in i &&
                                void 0 !== (t = i.get(e, "value")) ?
                                t :
                                "string" == typeof(t = e.value) ?
                                t.replace(Ie, "") :
                                null == t ?
                                "" :
                                t :
                                void 0;
                        }
                    }),
                    T.extend({
                        valHooks: {
                            option: {
                                get: function(t) {
                                    var e = T.find.attr(t, "value");
                                    return null != e ? e : Se(T.text(t));
                                }
                            },
                            select: {
                                get: function(t) {
                                    var e,
                                        n,
                                        i,
                                        o = t.options,
                                        r = t.selectedIndex,
                                        s = "select-one" === t.type,
                                        a = s ? null : [],
                                        l = s ? r + 1 : o.length;
                                    for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                                        if (
                                            ((n = o[i]).selected || i === r) &&
                                            !n.disabled &&
                                            (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))
                                        ) {
                                            if (((e = T(n).val()), s)) return e;
                                            a.push(e);
                                        }
                                    return a;
                                },
                                set: function(t, e) {
                                    for (
                                        var n, i, o = t.options, r = T.makeArray(e), s = o.length; s--;

                                    )
                                        ((i = o[s]).selected = -1 < T.inArray(T.valHooks.option.get(i), r)) && (n = !0);
                                    return n || (t.selectedIndex = -1), r;
                                }
                            }
                        }
                    }),
                    T.each(["radio", "checkbox"], function() {
                        (T.valHooks[this] = {
                            set: function(t, e) {
                                if (Array.isArray(e))
                                    return (t.checked = -1 < T.inArray(T(t).val(), e));
                            }
                        }),
                        b.checkOn ||
                            (T.valHooks[this].get = function(t) {
                                return null === t.getAttribute("value") ? "on" : t.value;
                            });
                    }),
                    (b.focusin = "onfocusin" in C);

                function Pe(t) {
                    t.stopPropagation();
                }
                var Ne = /^(?:focusinfocus|focusoutblur)$/;
                T.extend(T.event, {
                        trigger: function(t, e, n, i) {
                            var o,
                                r,
                                s,
                                a,
                                l,
                                c,
                                u,
                                h,
                                f = [n || E],
                                p = v.call(t, "type") ? t.type : t,
                                d = v.call(t, "namespace") ? t.namespace.split(".") : [];
                            if (
                                ((r = h = s = n = n || E),
                                    3 !== n.nodeType &&
                                    8 !== n.nodeType &&
                                    !Ne.test(p + T.event.triggered) &&
                                    (-1 < p.indexOf(".") &&
                                        ((p = (d = p.split(".")).shift()), d.sort()),
                                        (l = p.indexOf(":") < 0 && "on" + p),
                                        ((t = t[T.expando] ?
                                                t :
                                                new T.Event(p, "object" == typeof t && t)).isTrigger = i ?
                                            2 :
                                            3),
                                        (t.namespace = d.join(".")),
                                        (t.rnamespace = t.namespace ?
                                            new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") :
                                            null),
                                        (t.result = void 0),
                                        t.target || (t.target = n),
                                        (e = null == e ? [t] : T.makeArray(e, [t])),
                                        (u = T.event.special[p] || {}),
                                        i || !u.trigger || !1 !== u.trigger.apply(n, e)))
                            ) {
                                if (!i && !u.noBubble && !g(n)) {
                                    for (
                                        a = u.delegateType || p, Ne.test(a + p) || (r = r.parentNode); r; r = r.parentNode
                                    )
                                        f.push(r), (s = r);
                                    s === (n.ownerDocument || E) &&
                                        f.push(s.defaultView || s.parentWindow || C);
                                }
                                for (o = 0;
                                    (r = f[o++]) && !t.isPropagationStopped();)
                                    (h = r),
                                    (t.type = 1 < o ? a : u.bindType || p),
                                    (c =
                                        (Q.get(r, "events") || {})[t.type] && Q.get(r, "handle")) &&
                                    c.apply(r, e),
                                    (c = l && r[l]) &&
                                    c.apply &&
                                    K(r) &&
                                    ((t.result = c.apply(r, e)), !1 === t.result && t.preventDefault());
                                return (
                                    (t.type = p),
                                    i ||
                                    t.isDefaultPrevented() ||
                                    (u._default && !1 !== u._default.apply(f.pop(), e)) ||
                                    !K(n) ||
                                    (l &&
                                        y(n[p]) &&
                                        !g(n) &&
                                        ((s = n[l]) && (n[l] = null),
                                            (T.event.triggered = p),
                                            t.isPropagationStopped() && h.addEventListener(p, Pe),
                                            n[p](),
                                            t.isPropagationStopped() && h.removeEventListener(p, Pe),
                                            (T.event.triggered = void 0),
                                            s && (n[l] = s))),
                                    t.result
                                );
                            }
                        },
                        simulate: function(t, e, n) {
                            var i = T.extend(new T.Event(), n, {
                                type: t,
                                isSimulated: !0
                            });
                            T.event.trigger(i, null, e);
                        }
                    }),
                    T.fn.extend({
                        trigger: function(t, e) {
                            return this.each(function() {
                                T.event.trigger(t, e, this);
                            });
                        },
                        triggerHandler: function(t, e) {
                            var n = this[0];
                            if (n) return T.event.trigger(t, e, n, !0);
                        }
                    }),
                    b.focusin ||
                    T.each({
                            focus: "focusin",
                            blur: "focusout"
                        },
                        function(n, i) {
                            function o(t) {
                                T.event.simulate(i, t.target, T.event.fix(t));
                            }
                            T.event.special[i] = {
                                setup: function() {
                                    var t = this.ownerDocument || this,
                                        e = Q.access(t, i);
                                    e || t.addEventListener(n, o, !0),
                                        Q.access(t, i, (e || 0) + 1);
                                },
                                teardown: function() {
                                    var t = this.ownerDocument || this,
                                        e = Q.access(t, i) - 1;
                                    e
                                        ?
                                        Q.access(t, i, e) :
                                        (t.removeEventListener(n, o, !0), Q.remove(t, i));
                                }
                            };
                        }
                    );
                var Ae = C.location,
                    Oe = Date.now(),
                    Le = /\?/;
                T.parseXML = function(t) {
                    var e;
                    if (!t || "string" != typeof t) return null;
                    try {
                        e = new C.DOMParser().parseFromString(t, "text/xml");
                    } catch (t) {
                        e = void 0;
                    }
                    return (
                        (e && !e.getElementsByTagName("parsererror").length) ||
                        T.error("Invalid XML: " + t),
                        e
                    );
                };
                var je = /\[\]$/,
                    He = /\r?\n/g,
                    Me = /^(?:submit|button|image|reset|file)$/i,
                    Re = /^(?:input|select|textarea|keygen)/i;

                function qe(n, t, i, o) {
                    var e;
                    if (Array.isArray(t))
                        T.each(t, function(t, e) {
                            i || je.test(n) ?
                                o(n, e) :
                                qe(
                                    n +
                                    "[" +
                                    ("object" == typeof e && null != e ? t : "") +
                                    "]",
                                    e,
                                    i,
                                    o
                                );
                        });
                    else if (i || "object" !== w(t)) o(n, t);
                    else
                        for (e in t) qe(n + "[" + e + "]", t[e], i, o);
                }
                (T.param = function(t, e) {
                    function n(t, e) {
                        var n = y(e) ? e() : e;
                        o[o.length] =
                            encodeURIComponent(t) +
                            "=" +
                            encodeURIComponent(null == n ? "" : n);
                    }
                    var i,
                        o = [];
                    if (null == t) return "";
                    if (Array.isArray(t) || (t.jquery && !T.isPlainObject(t)))
                        T.each(t, function() {
                            n(this.name, this.value);
                        });
                    else
                        for (i in t) qe(i, t[i], e, n);
                    return o.join("&");
                }),
                T.fn.extend({
                    serialize: function() {
                        return T.param(this.serializeArray());
                    },
                    serializeArray: function() {
                        return this.map(function() {
                                var t = T.prop(this, "elements");
                                return t ? T.makeArray(t) : this;
                            })
                            .filter(function() {
                                var t = this.type;
                                return (
                                    this.name &&
                                    !T(this).is(":disabled") &&
                                    Re.test(this.nodeName) &&
                                    !Me.test(t) &&
                                    (this.checked || !ht.test(t))
                                );
                            })
                            .map(function(t, e) {
                                var n = T(this).val();
                                return null == n ?
                                    null :
                                    Array.isArray(n) ?
                                    T.map(n, function(t) {
                                        return {
                                            name: e.name,
                                            value: t.replace(He, "\r\n")
                                        };
                                    }) :
                                    {
                                        name: e.name,
                                        value: n.replace(He, "\r\n")
                                    };
                            })
                            .get();
                    }
                });
                var We = /%20/g,
                    Fe = /#.*$/,
                    Be = /([?&])_=[^&]*/,
                    Ue = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    ze = /^(?:GET|HEAD)$/,
                    Ye = /^\/\//,
                    Ve = {},
                    Ke = {},
                    Xe = "*/".concat("*"),
                    Qe = E.createElement("a");

                function $e(r) {
                    return function(t, e) {
                        "string" != typeof t && ((e = t), (t = "*"));
                        var n,
                            i = 0,
                            o = t.toLowerCase().match(j) || [];
                        if (y(e))
                            for (;
                                (n = o[i++]);)
                                "+" === n[0] ?
                                ((n = n.slice(1) || "*"), (r[n] = r[n] || []).unshift(e)) :
                                (r[n] = r[n] || []).push(e);
                    };
                }

                function Ge(e, o, r, s) {
                    var a = {},
                        l = e === Ke;

                    function c(t) {
                        var i;
                        return (
                            (a[t] = !0),
                            T.each(e[t] || [], function(t, e) {
                                var n = e(o, r, s);
                                return "string" != typeof n || l || a[n] ?
                                    l ?
                                    !(i = n) :
                                    void 0 :
                                    (o.dataTypes.unshift(n), c(n), !1);
                            }),
                            i
                        );
                    }
                    return c(o.dataTypes[0]) || (!a["*"] && c("*"));
                }

                function Je(t, e) {
                    var n,
                        i,
                        o = T.ajaxSettings.flatOptions || {};
                    for (n in e)
                        void 0 !== e[n] && ((o[n] ? t : (i = i || {}))[n] = e[n]);
                    return i && T.extend(!0, t, i), t;
                }
                (Qe.href = Ae.href),
                T.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: Ae.href,
                            type: "GET",
                            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                                Ae.protocol
                            ),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: {
                                "*": Xe,
                                text: "text/plain",
                                html: "text/html",
                                xml: "application/xml, text/xml",
                                json: "application/json, text/javascript"
                            },
                            contents: {
                                xml: /\bxml\b/,
                                html: /\bhtml/,
                                json: /\bjson\b/
                            },
                            responseFields: {
                                xml: "responseXML",
                                text: "responseText",
                                json: "responseJSON"
                            },
                            converters: {
                                "* text": String,
                                "text html": !0,
                                "text json": JSON.parse,
                                "text xml": T.parseXML
                            },
                            flatOptions: {
                                url: !0,
                                context: !0
                            }
                        },
                        ajaxSetup: function(t, e) {
                            return e ? Je(Je(t, T.ajaxSettings), e) : Je(T.ajaxSettings, t);
                        },
                        ajaxPrefilter: $e(Ve),
                        ajaxTransport: $e(Ke),
                        ajax: function(t, e) {
                            "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
                            var u,
                                h,
                                f,
                                n,
                                p,
                                i,
                                d,
                                g,
                                o,
                                r,
                                m = T.ajaxSetup({}, e),
                                v = m.context || m,
                                b = m.context && (v.nodeType || v.jquery) ? T(v) : T.event,
                                y = T.Deferred(),
                                _ = T.Callbacks("once memory"),
                                w = m.statusCode || {},
                                s = {},
                                a = {},
                                l = "canceled",
                                x = {
                                    readyState: 0,
                                    getResponseHeader: function(t) {
                                        var e;
                                        if (d) {
                                            if (!n)
                                                for (n = {};
                                                    (e = Ue.exec(f));)
                                                    n[e[1].toLowerCase() + " "] = (
                                                        n[e[1].toLowerCase() + " "] || []
                                                    ).concat(e[2]);
                                            e = n[t.toLowerCase() + " "];
                                        }
                                        return null == e ? null : e.join(", ");
                                    },
                                    getAllResponseHeaders: function() {
                                        return d ? f : null;
                                    },
                                    setRequestHeader: function(t, e) {
                                        return (
                                            null == d &&
                                            ((t = a[t.toLowerCase()] = a[t.toLowerCase()] || t),
                                                (s[t] = e)),
                                            this
                                        );
                                    },
                                    overrideMimeType: function(t) {
                                        return null == d && (m.mimeType = t), this;
                                    },
                                    statusCode: function(t) {
                                        var e;
                                        if (t)
                                            if (d) x.always(t[x.status]);
                                            else
                                                for (e in t) w[e] = [w[e], t[e]];
                                        return this;
                                    },
                                    abort: function(t) {
                                        var e = t || l;
                                        return u && u.abort(e), c(0, e), this;
                                    }
                                };
                            if (
                                (y.promise(x),
                                    (m.url = ((t || m.url || Ae.href) + "").replace(
                                        Ye,
                                        Ae.protocol + "//"
                                    )),
                                    (m.type = e.method || e.type || m.method || m.type),
                                    (m.dataTypes = (m.dataType || "*").toLowerCase().match(j) || [
                                        ""
                                    ]),
                                    null == m.crossDomain)
                            ) {
                                i = E.createElement("a");
                                try {
                                    (i.href = m.url),
                                    (i.href = i.href),
                                    (m.crossDomain =
                                        Qe.protocol + "//" + Qe.host !=
                                        i.protocol + "//" + i.host);
                                } catch (t) {
                                    m.crossDomain = !0;
                                }
                            }
                            if (
                                (m.data &&
                                    m.processData &&
                                    "string" != typeof m.data &&
                                    (m.data = T.param(m.data, m.traditional)),
                                    Ge(Ve, m, e, x),
                                    d)
                            )
                                return x;
                            for (o in ((g = T.event && m.global) &&
                                    0 == T.active++ &&
                                    T.event.trigger("ajaxStart"),
                                    (m.type = m.type.toUpperCase()),
                                    (m.hasContent = !ze.test(m.type)),
                                    (h = m.url.replace(Fe, "")),
                                    m.hasContent ?
                                    m.data &&
                                    m.processData &&
                                    0 ===
                                    (m.contentType || "").indexOf(
                                        "application/x-www-form-urlencoded"
                                    ) &&
                                    (m.data = m.data.replace(We, "+")) :
                                    ((r = m.url.slice(h.length)),
                                        m.data &&
                                        (m.processData || "string" == typeof m.data) &&
                                        ((h += (Le.test(h) ? "&" : "?") + m.data), delete m.data), !1 === m.cache &&
                                        ((h = h.replace(Be, "$1")),
                                            (r = (Le.test(h) ? "&" : "?") + "_=" + Oe++ + r)),
                                        (m.url = h + r)),
                                    m.ifModified &&
                                    (T.lastModified[h] &&
                                        x.setRequestHeader("If-Modified-Since", T.lastModified[h]),
                                        T.etag[h] && x.setRequestHeader("If-None-Match", T.etag[h])),
                                    ((m.data && m.hasContent && !1 !== m.contentType) ||
                                        e.contentType) &&
                                    x.setRequestHeader("Content-Type", m.contentType),
                                    x.setRequestHeader(
                                        "Accept",
                                        m.dataTypes[0] && m.accepts[m.dataTypes[0]] ?
                                        m.accepts[m.dataTypes[0]] +
                                        ("*" !== m.dataTypes[0] ? ", " + Xe + "; q=0.01" : "") :
                                        m.accepts["*"]
                                    ),
                                    m.headers))
                                x.setRequestHeader(o, m.headers[o]);
                            if (m.beforeSend && (!1 === m.beforeSend.call(v, x, m) || d))
                                return x.abort();
                            if (
                                ((l = "abort"),
                                    _.add(m.complete),
                                    x.done(m.success),
                                    x.fail(m.error),
                                    (u = Ge(Ke, m, e, x)))
                            ) {
                                if (((x.readyState = 1), g && b.trigger("ajaxSend", [x, m]), d))
                                    return x;
                                m.async &&
                                    0 < m.timeout &&
                                    (p = C.setTimeout(function() {
                                        x.abort("timeout");
                                    }, m.timeout));
                                try {
                                    (d = !1), u.send(s, c);
                                } catch (t) {
                                    if (d) throw t;
                                    c(-1, t);
                                }
                            } else c(-1, "No Transport");

                            function c(t, e, n, i) {
                                var o,
                                    r,
                                    s,
                                    a,
                                    l,
                                    c = e;
                                d ||
                                    ((d = !0),
                                        p && C.clearTimeout(p),
                                        (u = void 0),
                                        (f = i || ""),
                                        (x.readyState = 0 < t ? 4 : 0),
                                        (o = (200 <= t && t < 300) || 304 === t),
                                        n &&
                                        (a = (function(t, e, n) {
                                            for (
                                                var i, o, r, s, a = t.contents, l = t.dataTypes;
                                                "*" === l[0];

                                            )
                                                l.shift(),
                                                void 0 === i &&
                                                (i =
                                                    t.mimeType ||
                                                    e.getResponseHeader("Content-Type"));
                                            if (i)
                                                for (o in a)
                                                    if (a[o] && a[o].test(i)) {
                                                        l.unshift(o);
                                                        break;
                                                    }
                                            if (l[0] in n) r = l[0];
                                            else {
                                                for (o in n) {
                                                    if (!l[0] || t.converters[o + " " + l[0]]) {
                                                        r = o;
                                                        break;
                                                    }
                                                    s = s || o;
                                                }
                                                r = r || s;
                                            }
                                            if (r) return r !== l[0] && l.unshift(r), n[r];
                                        })(m, x, n)),
                                        (a = (function(t, e, n, i) {
                                            var o,
                                                r,
                                                s,
                                                a,
                                                l,
                                                c = {},
                                                u = t.dataTypes.slice();
                                            if (u[1])
                                                for (s in t.converters)
                                                    c[s.toLowerCase()] = t.converters[s];
                                            for (r = u.shift(); r;)
                                                if (
                                                    (t.responseFields[r] && (n[t.responseFields[r]] = e), !l &&
                                                        i &&
                                                        t.dataFilter &&
                                                        (e = t.dataFilter(e, t.dataType)),
                                                        (l = r),
                                                        (r = u.shift()))
                                                )
                                                    if ("*" === r) r = l;
                                                    else if ("*" !== l && l !== r) {
                                                if (!(s = c[l + " " + r] || c["* " + r]))
                                                    for (o in c)
                                                        if (
                                                            (a = o.split(" "))[1] === r &&
                                                            (s = c[l + " " + a[0]] || c["* " + a[0]])
                                                        ) {
                                                            !0 === s ?
                                                                (s = c[o]) :
                                                                !0 !== c[o] &&
                                                                ((r = a[0]), u.unshift(a[1]));
                                                            break;
                                                        }
                                                if (!0 !== s)
                                                    if (s && t.throws) e = s(e);
                                                    else
                                                        try {
                                                            e = s(e);
                                                        } catch (t) {
                                                            return {
                                                                state: "parsererror",
                                                                error: s ?
                                                                    t :
                                                                    "No conversion from " + l + " to " + r
                                                            };
                                                        }
                                            }
                                            return {
                                                state: "success",
                                                data: e
                                            };
                                        })(m, a, x, o)),
                                        o ?
                                        (m.ifModified &&
                                            ((l = x.getResponseHeader("Last-Modified")) &&
                                                (T.lastModified[h] = l),
                                                (l = x.getResponseHeader("etag")) && (T.etag[h] = l)),
                                            204 === t || "HEAD" === m.type ?
                                            (c = "nocontent") :
                                            304 === t ?
                                            (c = "notmodified") :
                                            ((c = a.state), (r = a.data), (o = !(s = a.error)))) :
                                        ((s = c), (!t && c) || ((c = "error"), t < 0 && (t = 0))),
                                        (x.status = t),
                                        (x.statusText = (e || c) + ""),
                                        o ? y.resolveWith(v, [r, c, x]) : y.rejectWith(v, [x, c, s]),
                                        x.statusCode(w),
                                        (w = void 0),
                                        g &&
                                        b.trigger(o ? "ajaxSuccess" : "ajaxError", [
                                            x,
                                            m,
                                            o ? r : s
                                        ]),
                                        _.fireWith(v, [x, c]),
                                        g &&
                                        (b.trigger("ajaxComplete", [x, m]),
                                            --T.active || T.event.trigger("ajaxStop")));
                            }
                            return x;
                        },
                        getJSON: function(t, e, n) {
                            return T.get(t, e, n, "json");
                        },
                        getScript: function(t, e) {
                            return T.get(t, void 0, e, "script");
                        }
                    }),
                    T.each(["get", "post"], function(t, o) {
                        T[o] = function(t, e, n, i) {
                            return (
                                y(e) && ((i = i || n), (n = e), (e = void 0)),
                                T.ajax(
                                    T.extend({
                                            url: t,
                                            type: o,
                                            dataType: i,
                                            data: e,
                                            success: n
                                        },
                                        T.isPlainObject(t) && t
                                    )
                                )
                            );
                        };
                    }),
                    (T._evalUrl = function(t, e) {
                        return T.ajax({
                            url: t,
                            type: "GET",
                            dataType: "script",
                            cache: !0,
                            async: !1,
                            global: !1,
                            converters: {
                                "text script": function() {}
                            },
                            dataFilter: function(t) {
                                T.globalEval(t, e);
                            }
                        });
                    }),
                    T.fn.extend({
                        wrapAll: function(t) {
                            var e;
                            return (
                                this[0] &&
                                (y(t) && (t = t.call(this[0])),
                                    (e = T(t, this[0].ownerDocument)
                                        .eq(0)
                                        .clone(!0)),
                                    this[0].parentNode && e.insertBefore(this[0]),
                                    e
                                    .map(function() {
                                        for (var t = this; t.firstElementChild;)
                                            t = t.firstElementChild;
                                        return t;
                                    })
                                    .append(this)),
                                this
                            );
                        },
                        wrapInner: function(n) {
                            return y(n) ?
                                this.each(function(t) {
                                    T(this).wrapInner(n.call(this, t));
                                }) :
                                this.each(function() {
                                    var t = T(this),
                                        e = t.contents();
                                    e.length ? e.wrapAll(n) : t.append(n);
                                });
                        },
                        wrap: function(e) {
                            var n = y(e);
                            return this.each(function(t) {
                                T(this).wrapAll(n ? e.call(this, t) : e);
                            });
                        },
                        unwrap: function(t) {
                            return (
                                this.parent(t)
                                .not("body")
                                .each(function() {
                                    T(this).replaceWith(this.childNodes);
                                }),
                                this
                            );
                        }
                    }),
                    (T.expr.pseudos.hidden = function(t) {
                        return !T.expr.pseudos.visible(t);
                    }),
                    (T.expr.pseudos.visible = function(t) {
                        return !!(
                            t.offsetWidth ||
                            t.offsetHeight ||
                            t.getClientRects().length
                        );
                    }),
                    (T.ajaxSettings.xhr = function() {
                        try {
                            return new C.XMLHttpRequest();
                        } catch (t) {}
                    });
                var Ze = {
                        0: 200,
                        1223: 204
                    },
                    tn = T.ajaxSettings.xhr();
                (b.cors = !!tn && "withCredentials" in tn),
                (b.ajax = tn = !!tn),
                T.ajaxTransport(function(o) {
                        var r, s;
                        if (b.cors || (tn && !o.crossDomain))
                            return {
                                send: function(t, e) {
                                    var n,
                                        i = o.xhr();
                                    if (
                                        (i.open(o.type, o.url, o.async, o.username, o.password),
                                            o.xhrFields)
                                    )
                                        for (n in o.xhrFields) i[n] = o.xhrFields[n];
                                    for (n in (o.mimeType &&
                                            i.overrideMimeType &&
                                            i.overrideMimeType(o.mimeType),
                                            o.crossDomain ||
                                            t["X-Requested-With"] ||
                                            (t["X-Requested-With"] = "XMLHttpRequest"),
                                            t))
                                        i.setRequestHeader(n, t[n]);
                                    (r = function(t) {
                                        return function() {
                                            r &&
                                                ((r = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null),
                                                    "abort" === t ?
                                                    i.abort() :
                                                    "error" === t ?
                                                    "number" != typeof i.status ?
                                                    e(0, "error") :
                                                    e(i.status, i.statusText) :
                                                    e(
                                                        Ze[i.status] || i.status,
                                                        i.statusText,
                                                        "text" !== (i.responseType || "text") ||
                                                        "string" != typeof i.responseText ?
                                                        {
                                                            binary: i.response
                                                        } :
                                                        {
                                                            text: i.responseText
                                                        },
                                                        i.getAllResponseHeaders()
                                                    ));
                                        };
                                    }),
                                    (i.onload = r()),
                                    (s = i.onerror = i.ontimeout = r("error")),
                                    void 0 !== i.onabort ?
                                        (i.onabort = s) :
                                        (i.onreadystatechange = function() {
                                            4 === i.readyState &&
                                                C.setTimeout(function() {
                                                    r && s();
                                                });
                                        }),
                                        (r = r("abort"));
                                    try {
                                        i.send((o.hasContent && o.data) || null);
                                    } catch (t) {
                                        if (r) throw t;
                                    }
                                },
                                abort: function() {
                                    r && r();
                                }
                            };
                    }),
                    T.ajaxPrefilter(function(t) {
                        t.crossDomain && (t.contents.script = !1);
                    }),
                    T.ajaxSetup({
                        accepts: {
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        },
                        contents: {
                            script: /\b(?:java|ecma)script\b/
                        },
                        converters: {
                            "text script": function(t) {
                                return T.globalEval(t), t;
                            }
                        }
                    }),
                    T.ajaxPrefilter("script", function(t) {
                        void 0 === t.cache && (t.cache = !1),
                            t.crossDomain && (t.type = "GET");
                    }),
                    T.ajaxTransport("script", function(n) {
                        var i, o;
                        if (n.crossDomain || n.scriptAttrs)
                            return {
                                send: function(t, e) {
                                    (i = T("<script>")
                                        .attr(n.scriptAttrs || {})
                                        .prop({
                                            charset: n.scriptCharset,
                                            src: n.url
                                        })
                                        .on(
                                            "load error",
                                            (o = function(t) {
                                                i.remove(),
                                                    (o = null),
                                                    t && e("error" === t.type ? 404 : 200, t.type);
                                            })
                                        )),
                                    E.head.appendChild(i[0]);
                                },
                                abort: function() {
                                    o && o();
                                }
                            };
                    });
                var en,
                    nn = [],
                    on = /(=)\?(?=&|$)|\?\?/;
                T.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function() {
                            var t = nn.pop() || T.expando + "_" + Oe++;
                            return (this[t] = !0), t;
                        }
                    }),
                    T.ajaxPrefilter("json jsonp", function(t, e, n) {
                        var i,
                            o,
                            r,
                            s = !1 !== t.jsonp &&
                            (on.test(t.url) ?
                                "url" :
                                "string" == typeof t.data &&
                                0 ===
                                (t.contentType || "").indexOf(
                                    "application/x-www-form-urlencoded"
                                ) &&
                                on.test(t.data) &&
                                "data");
                        if (s || "jsonp" === t.dataTypes[0])
                            return (
                                (i = t.jsonpCallback = y(t.jsonpCallback) ?
                                    t.jsonpCallback() :
                                    t.jsonpCallback),
                                s ?
                                (t[s] = t[s].replace(on, "$1" + i)) :
                                !1 !== t.jsonp &&
                                (t.url += (Le.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                                (t.converters["script json"] = function() {
                                    return r || T.error(i + " was not called"), r[0];
                                }),
                                (t.dataTypes[0] = "json"),
                                (o = C[i]),
                                (C[i] = function() {
                                    r = arguments;
                                }),
                                n.always(function() {
                                    void 0 === o ? T(C).removeProp(i) : (C[i] = o),
                                        t[i] && ((t.jsonpCallback = e.jsonpCallback), nn.push(i)),
                                        r && y(o) && o(r[0]),
                                        (r = o = void 0);
                                }),
                                "script"
                            );
                    }),
                    (b.createHTMLDocument =
                        (((en = E.implementation.createHTMLDocument("").body).innerHTML =
                                "<form></form><form></form>"),
                            2 === en.childNodes.length)),
                    (T.parseHTML = function(t, e, n) {
                        return "string" != typeof t ?
                            [] :
                            ("boolean" == typeof e && ((n = e), (e = !1)),
                                e ||
                                (b.createHTMLDocument ?
                                    (((i = (e = E.implementation.createHTMLDocument(
                                            ""
                                        )).createElement("base")).href = E.location.href),
                                        e.head.appendChild(i)) :
                                    (e = E)),
                                (r = !n && []),
                                (o = D.exec(t)) ?
                                [e.createElement(o[1])] :
                                ((o = _t([t], e, r)),
                                    r && r.length && T(r).remove(),
                                    T.merge([], o.childNodes)));
                        var i, o, r;
                    }),
                    (T.fn.load = function(t, e, n) {
                        var i,
                            o,
                            r,
                            s = this,
                            a = t.indexOf(" ");
                        return (-1 < a && ((i = Se(t.slice(a))), (t = t.slice(0, a))),
                            y(e) ?
                            ((n = e), (e = void 0)) :
                            e && "object" == typeof e && (o = "POST"),
                            0 < s.length &&
                            T.ajax({
                                url: t,
                                type: o || "GET",
                                dataType: "html",
                                data: e
                            })
                            .done(function(t) {
                                (r = arguments),
                                s.html(
                                    i ?
                                    T("<div>")
                                    .append(T.parseHTML(t))
                                    .find(i) :
                                    t
                                );
                            })
                            .always(
                                n &&
                                function(t, e) {
                                    s.each(function() {
                                        n.apply(this, r || [t.responseText, e, t]);
                                    });
                                }
                            ),
                            this
                        );
                    }),
                    T.each(
                        [
                            "ajaxStart",
                            "ajaxStop",
                            "ajaxComplete",
                            "ajaxError",
                            "ajaxSuccess",
                            "ajaxSend"
                        ],
                        function(t, e) {
                            T.fn[e] = function(t) {
                                return this.on(e, t);
                            };
                        }
                    ),
                    (T.expr.pseudos.animated = function(e) {
                        return T.grep(T.timers, function(t) {
                            return e === t.elem;
                        }).length;
                    }),
                    (T.offset = {
                        setOffset: function(t, e, n) {
                            var i,
                                o,
                                r,
                                s,
                                a,
                                l,
                                c = T.css(t, "position"),
                                u = T(t),
                                h = {};
                            "static" === c && (t.style.position = "relative"),
                                (a = u.offset()),
                                (r = T.css(t, "top")),
                                (l = T.css(t, "left")),
                                (o =
                                    ("absolute" === c || "fixed" === c) &&
                                    -1 < (r + l).indexOf("auto") ?
                                    ((s = (i = u.position()).top), i.left) :
                                    ((s = parseFloat(r) || 0), parseFloat(l) || 0)),
                                y(e) && (e = e.call(t, n, T.extend({}, a))),
                                null != e.top && (h.top = e.top - a.top + s),
                                null != e.left && (h.left = e.left - a.left + o),
                                "using" in e ? e.using.call(t, h) : u.css(h);
                        }
                    }),
                    T.fn.extend({
                        offset: function(e) {
                            if (arguments.length)
                                return void 0 === e ?
                                    this :
                                    this.each(function(t) {
                                        T.offset.setOffset(this, e, t);
                                    });
                            var t,
                                n,
                                i = this[0];
                            return i ?
                                i.getClientRects().length ?
                                ((t = i.getBoundingClientRect()),
                                    (n = i.ownerDocument.defaultView), {
                                        top: t.top + n.pageYOffset,
                                        left: t.left + n.pageXOffset
                                    }) :
                                {
                                    top: 0,
                                    left: 0
                                } :
                                void 0;
                        },
                        position: function() {
                            if (this[0]) {
                                var t,
                                    e,
                                    n,
                                    i = this[0],
                                    o = {
                                        top: 0,
                                        left: 0
                                    };
                                if ("fixed" === T.css(i, "position"))
                                    e = i.getBoundingClientRect();
                                else {
                                    for (
                                        e = this.offset(),
                                        n = i.ownerDocument,
                                        t = i.offsetParent || n.documentElement; t &&
                                        (t === n.body || t === n.documentElement) &&
                                        "static" === T.css(t, "position");

                                    )
                                        t = t.parentNode;
                                    t &&
                                        t !== i &&
                                        1 === t.nodeType &&
                                        (((o = T(t).offset()).top += T.css(
                                                t,
                                                "borderTopWidth", !0
                                            )),
                                            (o.left += T.css(t, "borderLeftWidth", !0)));
                                }
                                return {
                                    top: e.top - o.top - T.css(i, "marginTop", !0),
                                    left: e.left - o.left - T.css(i, "marginLeft", !0)
                                };
                            }
                        },
                        offsetParent: function() {
                            return this.map(function() {
                                for (
                                    var t = this.offsetParent; t && "static" === T.css(t, "position");

                                )
                                    t = t.offsetParent;
                                return t || it;
                            });
                        }
                    }),
                    T.each({
                            scrollLeft: "pageXOffset",
                            scrollTop: "pageYOffset"
                        },
                        function(e, o) {
                            var r = "pageYOffset" === o;
                            T.fn[e] = function(t) {
                                return B(
                                    this,
                                    function(t, e, n) {
                                        var i;
                                        if (
                                            (g(t) ? (i = t) : 9 === t.nodeType && (i = t.defaultView),
                                                void 0 === n)
                                        )
                                            return i ? i[o] : t[e];
                                        i
                                            ?
                                            i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) :
                                            (t[e] = n);
                                    },
                                    e,
                                    t,
                                    arguments.length
                                );
                            };
                        }
                    ),
                    T.each(["top", "left"], function(t, n) {
                        T.cssHooks[n] = Jt(b.pixelPosition, function(t, e) {
                            if (e)
                                return (
                                    (e = Gt(t, n)), Vt.test(e) ? T(t).position()[n] + "px" : e
                                );
                        });
                    }),
                    T.each({
                            Height: "height",
                            Width: "width"
                        },
                        function(s, a) {
                            T.each({
                                    padding: "inner" + s,
                                    content: a,
                                    "": "outer" + s
                                },
                                function(i, r) {
                                    T.fn[r] = function(t, e) {
                                        var n = arguments.length && (i || "boolean" != typeof t),
                                            o = i || (!0 === t || !0 === e ? "margin" : "border");
                                        return B(
                                            this,
                                            function(t, e, n) {
                                                var i;
                                                return g(t) ?
                                                    0 === r.indexOf("outer") ?
                                                    t["inner" + s] :
                                                    t.document.documentElement["client" + s] :
                                                    9 === t.nodeType ?
                                                    ((i = t.documentElement),
                                                        Math.max(
                                                            t.body["scroll" + s],
                                                            i["scroll" + s],
                                                            t.body["offset" + s],
                                                            i["offset" + s],
                                                            i["client" + s]
                                                        )) :
                                                    void 0 === n ?
                                                    T.css(t, e, o) :
                                                    T.style(t, e, n, o);
                                            },
                                            a,
                                            n ? t : void 0,
                                            n
                                        );
                                    };
                                }
                            );
                        }
                    ),
                    T.each(
                        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                            " "
                        ),
                        function(t, n) {
                            T.fn[n] = function(t, e) {
                                return 0 < arguments.length ?
                                    this.on(n, null, t, e) :
                                    this.trigger(n);
                            };
                        }
                    ),
                    T.fn.extend({
                        hover: function(t, e) {
                            return this.mouseenter(t).mouseleave(e || t);
                        }
                    }),
                    T.fn.extend({
                        bind: function(t, e, n) {
                            return this.on(t, null, e, n);
                        },
                        unbind: function(t, e) {
                            return this.off(t, null, e);
                        },
                        delegate: function(t, e, n, i) {
                            return this.on(e, t, n, i);
                        },
                        undelegate: function(t, e, n) {
                            return 1 === arguments.length ?
                                this.off(t, "**") :
                                this.off(e, t || "**", n);
                        }
                    }),
                    (T.proxy = function(t, e) {
                        var n, i, o;
                        if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), y(t)))
                            return (
                                (i = a.call(arguments, 2)),
                                ((o = function() {
                                    return t.apply(e || this, i.concat(a.call(arguments)));
                                }).guid = t.guid = t.guid || T.guid++),
                                o
                            );
                    }),
                    (T.holdReady = function(t) {
                        t ? T.readyWait++ : T.ready(!0);
                    }),
                    (T.isArray = Array.isArray),
                    (T.parseJSON = JSON.parse),
                    (T.nodeName = k),
                    (T.isFunction = y),
                    (T.isWindow = g),
                    (T.camelCase = V),
                    (T.type = w),
                    (T.now = Date.now),
                    (T.isNumeric = function(t) {
                        var e = T.type(t);
                        return (
                            ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
                        );
                    }),
                    "function" == typeof define &&
                    define.amd &&
                    define("jquery", [], function() {
                        return T;
                    });
                var rn = C.jQuery,
                    sn = C.$;
                return (
                    (T.noConflict = function(t) {
                        return (
                            C.$ === T && (C.$ = sn), t && C.jQuery === T && (C.jQuery = rn), T
                        );
                    }),
                    t || (C.jQuery = C.$ = T),
                    T
                );
            }),
            (function(t) {
                "function" == typeof define && define.amd ?
                    define(["jquery"], t) :
                    t(jQuery);
            })(function(y) {
                var t, e, n, i;

                function o(t, e) {
                    var n,
                        i,
                        o,
                        r = t.nodeName.toLowerCase();
                    return "area" === r ?
                        ((i = (n = t.parentNode).name), !(!t.href || !i || "map" !== n.nodeName.toLowerCase()) &&
                            !!(o = y("img[usemap='#" + i + "']")[0]) &&
                            s(o)) :
                        (/^(input|select|textarea|button|object)$/.test(r) ?
                            !t.disabled :
                            ("a" === r && t.href) || e) && s(t);
                }

                function s(t) {
                    return (
                        y.expr.filters.visible(t) &&
                        !y(t)
                        .parents()
                        .addBack()
                        .filter(function() {
                            return "hidden" === y.css(this, "visibility");
                        }).length
                    );
                }
                (y.ui = y.ui || {}),
                y.extend(y.ui, {
                        version: "1.11.4",
                        keyCode: {
                            BACKSPACE: 8,
                            COMMA: 188,
                            DELETE: 46,
                            DOWN: 40,
                            END: 35,
                            ENTER: 13,
                            ESCAPE: 27,
                            HOME: 36,
                            LEFT: 37,
                            PAGE_DOWN: 34,
                            PAGE_UP: 33,
                            PERIOD: 190,
                            RIGHT: 39,
                            SPACE: 32,
                            TAB: 9,
                            UP: 38
                        }
                    }),
                    y.fn.extend({
                        scrollParent: function(t) {
                            var e = this.css("position"),
                                n = "absolute" === e,
                                i = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                                o = this.parents()
                                .filter(function() {
                                    var t = y(this);
                                    return (
                                        (!n || "static" !== t.css("position")) &&
                                        i.test(
                                            t.css("overflow") +
                                            t.css("overflow-y") +
                                            t.css("overflow-x")
                                        )
                                    );
                                })
                                .eq(0);
                            return "fixed" !== e && o.length ?
                                o :
                                y(this[0].ownerDocument || document);
                        },
                        uniqueId:
                            ((t = 0),
                                function() {
                                    return this.each(function() {
                                        this.id || (this.id = "ui-id-" + ++t);
                                    });
                                }),
                        removeUniqueId: function() {
                            return this.each(function() {
                                /^ui-id-\d+$/.test(this.id) && y(this).removeAttr("id");
                            });
                        }
                    }),
                    y.extend(y.expr[":"], {
                        data: y.expr.createPseudo ?
                            y.expr.createPseudo(function(e) {
                                return function(t) {
                                    return !!y.data(t, e);
                                };
                            }) :
                            function(t, e, n) {
                                return !!y.data(t, n[3]);
                            },
                        focusable: function(t) {
                            return o(t, !isNaN(y.attr(t, "tabindex")));
                        },
                        tabbable: function(t) {
                            var e = y.attr(t, "tabindex"),
                                n = isNaN(e);
                            return (n || 0 <= e) && o(t, !n);
                        }
                    }),
                    y("<a>").outerWidth(1).jquery ||
                    y.each(["Width", "Height"], function(t, n) {
                        var o = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
                            i = n.toLowerCase(),
                            r = {
                                innerWidth: y.fn.innerWidth,
                                innerHeight: y.fn.innerHeight,
                                outerWidth: y.fn.outerWidth,
                                outerHeight: y.fn.outerHeight
                            };

                        function s(t, e, n, i) {
                            return (
                                y.each(o, function() {
                                    (e -= parseFloat(y.css(t, "padding" + this)) || 0),
                                    n &&
                                        (e -=
                                            parseFloat(y.css(t, "border" + this + "Width")) || 0),
                                        i && (e -= parseFloat(y.css(t, "margin" + this)) || 0);
                                }),
                                e
                            );
                        }
                        (y.fn["inner" + n] = function(t) {
                            return void 0 === t ?
                                r["inner" + n].call(this) :
                                this.each(function() {
                                    y(this).css(i, s(this, t) + "px");
                                });
                        }),
                        (y.fn["outer" + n] = function(t, e) {
                            return "number" != typeof t ?
                                r["outer" + n].call(this, t) :
                                this.each(function() {
                                    y(this).css(i, s(this, t, !0, e) + "px");
                                });
                        });
                    }),
                    y.fn.addBack ||
                    (y.fn.addBack = function(t) {
                        return this.add(
                            null == t ? this.prevObject : this.prevObject.filter(t)
                        );
                    }),
                    y("<a>")
                    .data("a-b", "a")
                    .removeData("a-b")
                    .data("a-b") &&
                    (y.fn.removeData =
                        ((e = y.fn.removeData),
                            function(t) {
                                return arguments.length ?
                                    e.call(this, y.camelCase(t)) :
                                    e.call(this);
                            })),
                    (y.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
                    y.fn.extend({
                        focus:
                            ((i = y.fn.focus),
                                function(e, n) {
                                    return "number" == typeof e ?
                                        this.each(function() {
                                            var t = this;
                                            setTimeout(function() {
                                                y(t).focus(), n && n.call(t);
                                            }, e);
                                        }) :
                                        i.apply(this, arguments);
                                }),
                        disableSelection:
                            ((n =
                                    "onselectstart" in document.createElement("div") ?
                                    "selectstart" :
                                    "mousedown"),
                                function() {
                                    return this.bind(n + ".ui-disableSelection", function(t) {
                                        t.preventDefault();
                                    });
                                }),
                        enableSelection: function() {
                            return this.unbind(".ui-disableSelection");
                        },
                        zIndex: function(t) {
                            if (void 0 !== t) return this.css("zIndex", t);
                            if (this.length)
                                for (
                                    var e, n, i = y(this[0]); i.length && i[0] !== document;

                                ) {
                                    if (
                                        ("absolute" === (e = i.css("position")) ||
                                            "relative" === e ||
                                            "fixed" === e) &&
                                        ((n = parseInt(i.css("zIndex"), 10)), !isNaN(n) && 0 !== n)
                                    )
                                        return n;
                                    i = i.parent();
                                }
                            return 0;
                        }
                    }),
                    (y.ui.plugin = {
                        add: function(t, e, n) {
                            var i,
                                o = y.ui[t].prototype;
                            for (i in n)
                                (o.plugins[i] = o.plugins[i] || []),
                                o.plugins[i].push([e, n[i]]);
                        },
                        call: function(t, e, n, i) {
                            var o,
                                r = t.plugins[e];
                            if (
                                r &&
                                (i ||
                                    (t.element[0].parentNode &&
                                        11 !== t.element[0].parentNode.nodeType))
                            )
                                for (o = 0; o < r.length; o++)
                                    t.options[r[o][0]] && r[o][1].apply(t.element, n);
                        }
                    });
                var r,
                    a = 0,
                    l = Array.prototype.slice;
                (y.cleanData =
                    ((r = y.cleanData),
                        function(t) {
                            var e, n, i;
                            for (i = 0; null != (n = t[i]); i++)
                                try {
                                    (e = y._data(n, "events")) &&
                                    e.remove &&
                                        y(n).triggerHandler("remove");
                                } catch (t) {}
                            r(t);
                        })),
                (y.widget = function(t, n, e) {
                    var i,
                        o,
                        r,
                        s,
                        a = {},
                        l = t.split(".")[0];
                    return (
                        (t = t.split(".")[1]),
                        (i = l + "-" + t),
                        e || ((e = n), (n = y.Widget)),
                        (y.expr[":"][i.toLowerCase()] = function(t) {
                            return !!y.data(t, i);
                        }),
                        (y[l] = y[l] || {}),
                        (o = y[l][t]),
                        (r = y[l][t] = function(t, e) {
                            if (!this._createWidget) return new r(t, e);
                            arguments.length && this._createWidget(t, e);
                        }),
                        y.extend(r, o, {
                            version: e.version,
                            _proto: y.extend({}, e),
                            _childConstructors: []
                        }),
                        ((s = new n()).options = y.widget.extend({}, s.options)),
                        y.each(e, function(e, i) {
                            function o() {
                                return n.prototype[e].apply(this, arguments);
                            }

                            function r(t) {
                                return n.prototype[e].apply(this, t);
                            }
                            y.isFunction(i) ?
                                (a[e] = function() {
                                    var t,
                                        e = this._super,
                                        n = this._superApply;
                                    return (
                                        (this._super = o),
                                        (this._superApply = r),
                                        (t = i.apply(this, arguments)),
                                        (this._super = e),
                                        (this._superApply = n),
                                        t
                                    );
                                }) :
                                (a[e] = i);
                        }),
                        (r.prototype = y.widget.extend(
                            s, {
                                widgetEventPrefix: (o && s.widgetEventPrefix) || t
                            },
                            a, {
                                constructor: r,
                                namespace: l,
                                widgetName: t,
                                widgetFullName: i
                            }
                        )),
                        o ?
                        (y.each(o._childConstructors, function(t, e) {
                                var n = e.prototype;
                                y.widget(n.namespace + "." + n.widgetName, r, e._proto);
                            }),
                            delete o._childConstructors) :
                        n._childConstructors.push(r),
                        y.widget.bridge(t, r),
                        r
                    );
                }),
                (y.widget.extend = function(t) {
                    for (
                        var e, n, i = l.call(arguments, 1), o = 0, r = i.length; o < r; o++
                    )
                        for (e in i[o])
                            (n = i[o][e]),
                            i[o].hasOwnProperty(e) &&
                            void 0 !== n &&
                            (y.isPlainObject(n) ?
                                (t[e] = y.isPlainObject(t[e]) ?
                                    y.widget.extend({}, t[e], n) :
                                    y.widget.extend({}, n)) :
                                (t[e] = n));
                    return t;
                }),
                (y.widget.bridge = function(r, e) {
                    var s = e.prototype.widgetFullName || r;
                    y.fn[r] = function(n) {
                        var t = "string" == typeof n,
                            i = l.call(arguments, 1),
                            o = this;
                        return (
                            t ?
                            this.each(function() {
                                var t,
                                    e = y.data(this, s);
                                return "instance" === n ?
                                    ((o = e), !1) :
                                    e ?
                                    y.isFunction(e[n]) && "_" !== n.charAt(0) ?
                                    (t = e[n].apply(e, i)) !== e && void 0 !== t ?
                                    ((o = t && t.jquery ? o.pushStack(t.get()) : t), !1) :
                                    void 0 :
                                    y.error(
                                        "no such method '" +
                                        n +
                                        "' for " +
                                        r +
                                        " widget instance"
                                    ) :
                                    y.error(
                                        "cannot call methods on " +
                                        r +
                                        " prior to initialization; attempted to call method '" +
                                        n +
                                        "'"
                                    );
                            }) :
                            (i.length &&
                                (n = y.widget.extend.apply(null, [n].concat(i))),
                                this.each(function() {
                                    var t = y.data(this, s);
                                    t
                                        ?
                                        (t.option(n || {}), t._init && t._init()) :
                                        y.data(this, s, new e(n, this));
                                })),
                            o
                        );
                    };
                }),
                (y.Widget = function() {}),
                (y.Widget._childConstructors = []),
                (y.Widget.prototype = {
                    widgetName: "widget",
                    widgetEventPrefix: "",
                    defaultElement: "<div>",
                    options: {
                        disabled: !1,
                        create: null
                    },
                    _createWidget: function(t, e) {
                        (e = y(e || this.defaultElement || this)[0]),
                        (this.element = y(e)),
                        (this.uuid = a++),
                        (this.eventNamespace = "." + this.widgetName + this.uuid),
                        (this.bindings = y()),
                        (this.hoverable = y()),
                        (this.focusable = y()),
                        e !== this &&
                            (y.data(e, this.widgetFullName, this),
                                this._on(!0, this.element, {
                                    remove: function(t) {
                                        t.target === e && this.destroy();
                                    }
                                }),
                                (this.document = y(
                                    e.style ? e.ownerDocument : e.document || e
                                )),
                                (this.window = y(
                                    this.document[0].defaultView ||
                                    this.document[0].parentWindow
                                ))),
                            (this.options = y.widget.extend({},
                                this.options,
                                this._getCreateOptions(),
                                t
                            )),
                            this._create(),
                            this._trigger("create", null, this._getCreateEventData()),
                            this._init();
                    },
                    _getCreateOptions: y.noop,
                    _getCreateEventData: y.noop,
                    _create: y.noop,
                    _init: y.noop,
                    destroy: function() {
                        this._destroy(),
                            this.element
                            .unbind(this.eventNamespace)
                            .removeData(this.widgetFullName)
                            .removeData(y.camelCase(this.widgetFullName)),
                            this.widget()
                            .unbind(this.eventNamespace)
                            .removeAttr("aria-disabled")
                            .removeClass(
                                this.widgetFullName + "-disabled ui-state-disabled"
                            ),
                            this.bindings.unbind(this.eventNamespace),
                            this.hoverable.removeClass("ui-state-hover"),
                            this.focusable.removeClass("ui-state-focus");
                    },
                    _destroy: y.noop,
                    widget: function() {
                        return this.element;
                    },
                    option: function(t, e) {
                        var n,
                            i,
                            o,
                            r = t;
                        if (0 === arguments.length)
                            return y.widget.extend({}, this.options);
                        if ("string" == typeof t)
                            if (((r = {}), (t = (n = t.split(".")).shift()), n.length)) {
                                for (
                                    i = r[t] = y.widget.extend({}, this.options[t]), o = 0; o < n.length - 1; o++
                                )
                                    (i[n[o]] = i[n[o]] || {}), (i = i[n[o]]);
                                if (((t = n.pop()), 1 === arguments.length))
                                    return void 0 === i[t] ? null : i[t];
                                i[t] = e;
                            } else {
                                if (1 === arguments.length)
                                    return void 0 === this.options[t] ? null : this.options[t];
                                r[t] = e;
                            }
                        return this._setOptions(r), this;
                    },
                    _setOptions: function(t) {
                        var e;
                        for (e in t) this._setOption(e, t[e]);
                        return this;
                    },
                    _setOption: function(t, e) {
                        return (
                            (this.options[t] = e),
                            "disabled" === t &&
                            (this.widget().toggleClass(
                                    this.widgetFullName + "-disabled", !!e
                                ),
                                e &&
                                (this.hoverable.removeClass("ui-state-hover"),
                                    this.focusable.removeClass("ui-state-focus"))),
                            this
                        );
                    },
                    enable: function() {
                        return this._setOptions({
                            disabled: !1
                        });
                    },
                    disable: function() {
                        return this._setOptions({
                            disabled: !0
                        });
                    },
                    _on: function(s, a, t) {
                        var l,
                            c = this;
                        "boolean" != typeof s && ((t = a), (a = s), (s = !1)),
                            t ?
                            ((a = l = y(a)), (this.bindings = this.bindings.add(a))) :
                            ((t = a), (a = this.element), (l = this.widget())),
                            y.each(t, function(t, e) {
                                function n() {
                                    if (
                                        s ||
                                        (!0 !== c.options.disabled &&
                                            !y(this).hasClass("ui-state-disabled"))
                                    )
                                        return ("string" == typeof e ? c[e] : e).apply(
                                            c,
                                            arguments
                                        );
                                }
                                "string" != typeof e &&
                                    (n.guid = e.guid = e.guid || n.guid || y.guid++);
                                var i = t.match(/^([\w:-]*)\s*(.*)$/),
                                    o = i[1] + c.eventNamespace,
                                    r = i[2];
                                r ? l.delegate(r, o, n) : a.bind(o, n);
                            });
                    },
                    _off: function(t, e) {
                        (e =
                            (e || "").split(" ").join(this.eventNamespace + " ") +
                            this.eventNamespace),
                        t.unbind(e).undelegate(e),
                            (this.bindings = y(this.bindings.not(t).get())),
                            (this.focusable = y(this.focusable.not(t).get())),
                            (this.hoverable = y(this.hoverable.not(t).get()));
                    },
                    _delay: function(t, e) {
                        var n = this;
                        return setTimeout(function() {
                            return ("string" == typeof t ? n[t] : t).apply(n, arguments);
                        }, e || 0);
                    },
                    _hoverable: function(t) {
                        (this.hoverable = this.hoverable.add(t)),
                        this._on(t, {
                            mouseenter: function(t) {
                                y(t.currentTarget).addClass("ui-state-hover");
                            },
                            mouseleave: function(t) {
                                y(t.currentTarget).removeClass("ui-state-hover");
                            }
                        });
                    },
                    _focusable: function(t) {
                        (this.focusable = this.focusable.add(t)),
                        this._on(t, {
                            focusin: function(t) {
                                y(t.currentTarget).addClass("ui-state-focus");
                            },
                            focusout: function(t) {
                                y(t.currentTarget).removeClass("ui-state-focus");
                            }
                        });
                    },
                    _trigger: function(t, e, n) {
                        var i,
                            o,
                            r = this.options[t];
                        if (
                            ((n = n || {}),
                                ((e = y.Event(e)).type = (t === this.widgetEventPrefix ?
                                    t :
                                    this.widgetEventPrefix + t
                                ).toLowerCase()),
                                (e.target = this.element[0]),
                                (o = e.originalEvent))
                        )
                            for (i in o) i in e || (e[i] = o[i]);
                        return (
                            this.element.trigger(e, n), !(
                                (y.isFunction(r) &&
                                    !1 === r.apply(this.element[0], [e].concat(n))) ||
                                e.isDefaultPrevented()
                            )
                        );
                    }
                }),
                y.each({
                        show: "fadeIn",
                        hide: "fadeOut"
                    },
                    function(r, s) {
                        y.Widget.prototype["_" + r] = function(e, t, n) {
                            "string" == typeof t &&
                                (t = {
                                    effect: t
                                });
                            var i,
                                o = t ?
                                !0 === t || "number" == typeof t ?
                                s :
                                t.effect || s :
                                r;
                            "number" == typeof(t = t || {}) &&
                            (t = {
                                duration: t
                            }),
                            (i = !y.isEmptyObject(t)),
                            (t.complete = n),
                            t.delay && e.delay(t.delay),
                                i && y.effects && y.effects.effect[o] ?
                                e[r](t) :
                                o !== r && e[o] ?
                                e[o](t.duration, t.easing, n) :
                                e.queue(function(t) {
                                    y(this)[r](), n && n.call(e[0]), t();
                                });
                        };
                    }
                );
                y.widget;
                var c = !1;
                y(document).mouseup(function() {
                    c = !1;
                });
                y.widget("ui.mouse", {
                    version: "1.11.4",
                    options: {
                        cancel: "input,textarea,button,select,option",
                        distance: 1,
                        delay: 0
                    },
                    _mouseInit: function() {
                        var e = this;
                        this.element
                            .bind("mousedown." + this.widgetName, function(t) {
                                return e._mouseDown(t);
                            })
                            .bind("click." + this.widgetName, function(t) {
                                if (!0 === y.data(t.target, e.widgetName + ".preventClickEvent"))
                                    return (
                                        y.removeData(t.target, e.widgetName + ".preventClickEvent"),
                                        t.stopImmediatePropagation(), !1
                                    );
                            }),
                            (this.started = !1);
                    },
                    _mouseDestroy: function() {
                        this.element.unbind("." + this.widgetName),
                            this._mouseMoveDelegate &&
                            this.document
                            .unbind(
                                "mousemove." + this.widgetName,
                                this._mouseMoveDelegate
                            )
                            .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
                    },
                    _mouseDown: function(t) {
                        if (!c) {
                            (this._mouseMoved = !1),
                            this._mouseStarted && this._mouseUp(t),
                                (this._mouseDownEvent = t);
                            var e = this,
                                n = 1 === t.which,
                                i = !(
                                    "string" != typeof this.options.cancel || !t.target.nodeName
                                ) && y(t.target).closest(this.options.cancel).length;
                            return (!(n && !i && this._mouseCapture(t)) ||
                                ((this.mouseDelayMet = !this.options.delay),
                                    this.mouseDelayMet ||
                                    (this._mouseDelayTimer = setTimeout(function() {
                                        e.mouseDelayMet = !0;
                                    }, this.options.delay)),
                                    this._mouseDistanceMet(t) &&
                                    this._mouseDelayMet(t) &&
                                    ((this._mouseStarted = !1 !== this._mouseStart(t)), !this._mouseStarted) ?
                                    (t.preventDefault(), !0) :
                                    (!0 ===
                                        y.data(
                                            t.target,
                                            this.widgetName + ".preventClickEvent"
                                        ) &&
                                        y.removeData(
                                            t.target,
                                            this.widgetName + ".preventClickEvent"
                                        ),
                                        (this._mouseMoveDelegate = function(t) {
                                            return e._mouseMove(t);
                                        }),
                                        (this._mouseUpDelegate = function(t) {
                                            return e._mouseUp(t);
                                        }),
                                        this.document
                                        .bind(
                                            "mousemove." + this.widgetName,
                                            this._mouseMoveDelegate
                                        )
                                        .bind(
                                            "mouseup." + this.widgetName,
                                            this._mouseUpDelegate
                                        ),
                                        t.preventDefault(),
                                        (c = !0)))
                            );
                        }
                    },
                    _mouseMove: function(t) {
                        if (this._mouseMoved) {
                            if (
                                y.ui.ie &&
                                (!document.documentMode || document.documentMode < 9) &&
                                !t.button
                            )
                                return this._mouseUp(t);
                            if (!t.which) return this._mouseUp(t);
                        }
                        return (
                            (t.which || t.button) && (this._mouseMoved = !0),
                            this._mouseStarted ?
                            (this._mouseDrag(t), t.preventDefault()) :
                            (this._mouseDistanceMet(t) &&
                                this._mouseDelayMet(t) &&
                                ((this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t)),
                                    this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
                        );
                    },
                    _mouseUp: function(t) {
                        return (
                            this.document
                            .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                            .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
                            this._mouseStarted &&
                            ((this._mouseStarted = !1),
                                t.target === this._mouseDownEvent.target &&
                                y.data(t.target, this.widgetName + ".preventClickEvent", !0),
                                this._mouseStop(t)),
                            (c = !1)
                        );
                    },
                    _mouseDistanceMet: function(t) {
                        return (
                            Math.max(
                                Math.abs(this._mouseDownEvent.pageX - t.pageX),
                                Math.abs(this._mouseDownEvent.pageY - t.pageY)
                            ) >= this.options.distance
                        );
                    },
                    _mouseDelayMet: function() {
                        return this.mouseDelayMet;
                    },
                    _mouseStart: function() {},
                    _mouseDrag: function() {},
                    _mouseStop: function() {},
                    _mouseCapture: function() {
                        return !0;
                    }
                });
                y.widget("ui.draggable", y.ui.mouse, {
                        version: "1.11.4",
                        widgetEventPrefix: "drag",
                        options: {
                            addClasses: !0,
                            appendTo: "parent",
                            axis: !1,
                            connectToSortable: !1,
                            containment: !1,
                            cursor: "auto",
                            cursorAt: !1,
                            grid: !1,
                            handle: !1,
                            helper: "original",
                            iframeFix: !1,
                            opacity: !1,
                            refreshPositions: !1,
                            revert: !1,
                            revertDuration: 500,
                            scope: "default",
                            scroll: !0,
                            scrollSensitivity: 20,
                            scrollSpeed: 20,
                            snap: !1,
                            snapMode: "both",
                            snapTolerance: 20,
                            stack: !1,
                            zIndex: !1,
                            drag: null,
                            start: null,
                            stop: null
                        },
                        _create: function() {
                            "original" === this.options.helper && this._setPositionRelative(),
                                this.options.addClasses && this.element.addClass("ui-draggable"),
                                this.options.disabled &&
                                this.element.addClass("ui-draggable-disabled"),
                                this._setHandleClassName(),
                                this._mouseInit();
                        },
                        _setOption: function(t, e) {
                            this._super(t, e),
                                "handle" === t &&
                                (this._removeHandleClassName(), this._setHandleClassName());
                        },
                        _destroy: function() {
                            (this.helper || this.element).is(".ui-draggable-dragging") ?
                                (this.destroyOnClear = !0) :
                                (this.element.removeClass(
                                        "ui-draggable ui-draggable-dragging ui-draggable-disabled"
                                    ),
                                    this._removeHandleClassName(),
                                    this._mouseDestroy());
                        },
                        _mouseCapture: function(t) {
                            var e = this.options;
                            return (
                                this._blurActiveElement(t), !(
                                    this.helper ||
                                    e.disabled ||
                                    0 < y(t.target).closest(".ui-resizable-handle").length
                                ) &&
                                ((this.handle = this._getHandle(t)), !!this.handle &&
                                    (this._blockFrames(!0 === e.iframeFix ? "iframe" : e.iframeFix), !0))
                            );
                        },
                        _blockFrames: function(t) {
                            this.iframeBlocks = this.document.find(t).map(function() {
                                var t = y(this);
                                return y("<div>")
                                    .css("position", "absolute")
                                    .appendTo(t.parent())
                                    .outerWidth(t.outerWidth())
                                    .outerHeight(t.outerHeight())
                                    .offset(t.offset())[0];
                            });
                        },
                        _unblockFrames: function() {
                            this.iframeBlocks &&
                                (this.iframeBlocks.remove(), delete this.iframeBlocks);
                        },
                        _blurActiveElement: function(t) {
                            var e = this.document[0];
                            if (this.handleElement.is(t.target))
                                try {
                                    e.activeElement &&
                                        "body" !== e.activeElement.nodeName.toLowerCase() &&
                                        y(e.activeElement).blur();
                                } catch (t) {}
                        },
                        _mouseStart: function(t) {
                            var e = this.options;
                            return (
                                (this.helper = this._createHelper(t)),
                                this.helper.addClass("ui-draggable-dragging"),
                                this._cacheHelperProportions(),
                                y.ui.ddmanager && (y.ui.ddmanager.current = this),
                                this._cacheMargins(),
                                (this.cssPosition = this.helper.css("position")),
                                (this.scrollParent = this.helper.scrollParent(!0)),
                                (this.offsetParent = this.helper.offsetParent()),
                                (this.hasFixedAncestor =
                                    0 <
                                    this.helper.parents().filter(function() {
                                        return "fixed" === y(this).css("position");
                                    }).length),
                                (this.positionAbs = this.element.offset()),
                                this._refreshOffsets(t),
                                (this.originalPosition = this.position = this._generatePosition(
                                    t, !1
                                )),
                                (this.originalPageX = t.pageX),
                                (this.originalPageY = t.pageY),
                                e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt),
                                this._setContainment(), !1 === this._trigger("start", t) ?
                                (this._clear(), !1) :
                                (this._cacheHelperProportions(),
                                    y.ui.ddmanager &&
                                    !e.dropBehaviour &&
                                    y.ui.ddmanager.prepareOffsets(this, t),
                                    this._normalizeRightBottom(),
                                    this._mouseDrag(t, !0),
                                    y.ui.ddmanager && y.ui.ddmanager.dragStart(this, t), !0)
                            );
                        },
                        _refreshOffsets: function(t) {
                            (this.offset = {
                                top: this.positionAbs.top - this.margins.top,
                                left: this.positionAbs.left - this.margins.left,
                                scroll: !1,
                                parent: this._getParentOffset(),
                                relative: this._getRelativeOffset()
                            }),
                            (this.offset.click = {
                                left: t.pageX - this.offset.left,
                                top: t.pageY - this.offset.top
                            });
                        },
                        _mouseDrag: function(t, e) {
                            if (
                                (this.hasFixedAncestor &&
                                    (this.offset.parent = this._getParentOffset()),
                                    (this.position = this._generatePosition(t, !0)),
                                    (this.positionAbs = this._convertPositionTo("absolute")), !e)
                            ) {
                                var n = this._uiHash();
                                if (!1 === this._trigger("drag", t, n))
                                    return this._mouseUp({}), !1;
                                this.position = n.position;
                            }
                            return (
                                (this.helper[0].style.left = this.position.left + "px"),
                                (this.helper[0].style.top = this.position.top + "px"),
                                y.ui.ddmanager && y.ui.ddmanager.drag(this, t), !1
                            );
                        },
                        _mouseStop: function(t) {
                            var e = this,
                                n = !1;
                            return (
                                y.ui.ddmanager &&
                                !this.options.dropBehaviour &&
                                (n = y.ui.ddmanager.drop(this, t)),
                                this.dropped && ((n = this.dropped), (this.dropped = !1)),
                                ("invalid" === this.options.revert && !n) ||
                                ("valid" === this.options.revert && n) ||
                                !0 === this.options.revert ||
                                (y.isFunction(this.options.revert) &&
                                    this.options.revert.call(this.element, n)) ?
                                y(this.helper).animate(
                                    this.originalPosition,
                                    parseInt(this.options.revertDuration, 10),
                                    function() {
                                        !1 !== e._trigger("stop", t) && e._clear();
                                    }
                                ) :
                                !1 !== this._trigger("stop", t) && this._clear(), !1
                            );
                        },
                        _mouseUp: function(t) {
                            return (
                                this._unblockFrames(),
                                y.ui.ddmanager && y.ui.ddmanager.dragStop(this, t),
                                this.handleElement.is(t.target) && this.element.focus(),
                                y.ui.mouse.prototype._mouseUp.call(this, t)
                            );
                        },
                        cancel: function() {
                            return (
                                this.helper.is(".ui-draggable-dragging") ?
                                this._mouseUp({}) :
                                this._clear(),
                                this
                            );
                        },
                        _getHandle: function(t) {
                            return (!this.options.handle ||
                                !!y(t.target).closest(this.element.find(this.options.handle))
                                .length
                            );
                        },
                        _setHandleClassName: function() {
                            (this.handleElement = this.options.handle ?
                                this.element.find(this.options.handle) :
                                this.element),
                            this.handleElement.addClass("ui-draggable-handle");
                        },
                        _removeHandleClassName: function() {
                            this.handleElement.removeClass("ui-draggable-handle");
                        },
                        _createHelper: function(t) {
                            var e = this.options,
                                n = y.isFunction(e.helper),
                                i = n ?
                                y(e.helper.apply(this.element[0], [t])) :
                                "clone" === e.helper ?
                                this.element.clone().removeAttr("id") :
                                this.element;
                            return (
                                i.parents("body").length ||
                                i.appendTo(
                                    "parent" === e.appendTo ?
                                    this.element[0].parentNode :
                                    e.appendTo
                                ),
                                n && i[0] === this.element[0] && this._setPositionRelative(),
                                i[0] === this.element[0] ||
                                /(fixed|absolute)/.test(i.css("position")) ||
                                i.css("position", "absolute"),
                                i
                            );
                        },
                        _setPositionRelative: function() {
                            /^(?:r|a|f)/.test(this.element.css("position")) ||
                                (this.element[0].style.position = "relative");
                        },
                        _adjustOffsetFromHelper: function(t) {
                            "string" == typeof t && (t = t.split(" ")),
                                y.isArray(t) &&
                                (t = {
                                    left: +t[0],
                                    top: +t[1] || 0
                                }),
                                "left" in t &&
                                (this.offset.click.left = t.left + this.margins.left),
                                "right" in t &&
                                (this.offset.click.left =
                                    this.helperProportions.width - t.right + this.margins.left),
                                "top" in t && (this.offset.click.top = t.top + this.margins.top),
                                "bottom" in t &&
                                (this.offset.click.top =
                                    this.helperProportions.height - t.bottom + this.margins.top);
                        },
                        _isRootNode: function(t) {
                            return /(html|body)/i.test(t.tagName) || t === this.document[0];
                        },
                        _getParentOffset: function() {
                            var t = this.offsetParent.offset(),
                                e = this.document[0];
                            return (
                                "absolute" === this.cssPosition &&
                                this.scrollParent[0] !== e &&
                                y.contains(this.scrollParent[0], this.offsetParent[0]) &&
                                ((t.left += this.scrollParent.scrollLeft()),
                                    (t.top += this.scrollParent.scrollTop())),
                                this._isRootNode(this.offsetParent[0]) &&
                                (t = {
                                    top: 0,
                                    left: 0
                                }), {
                                    top: t.top +
                                        (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                                    left: t.left +
                                        (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                                }
                            );
                        },
                        _getRelativeOffset: function() {
                            if ("relative" !== this.cssPosition)
                                return {
                                    top: 0,
                                    left: 0
                                };
                            var t = this.element.position(),
                                e = this._isRootNode(this.scrollParent[0]);
                            return {
                                top: t.top -
                                    (parseInt(this.helper.css("top"), 10) || 0) +
                                    (e ? 0 : this.scrollParent.scrollTop()),
                                left: t.left -
                                    (parseInt(this.helper.css("left"), 10) || 0) +
                                    (e ? 0 : this.scrollParent.scrollLeft())
                            };
                        },
                        _cacheMargins: function() {
                            this.margins = {
                                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                                top: parseInt(this.element.css("marginTop"), 10) || 0,
                                right: parseInt(this.element.css("marginRight"), 10) || 0,
                                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                            };
                        },
                        _cacheHelperProportions: function() {
                            this.helperProportions = {
                                width: this.helper.outerWidth(),
                                height: this.helper.outerHeight()
                            };
                        },
                        _setContainment: function() {
                            var t,
                                e,
                                n,
                                i = this.options,
                                o = this.document[0];
                            (this.relativeContainer = null),
                            i.containment ?
                                "window" !== i.containment ?
                                "document" !== i.containment ?
                                i.containment.constructor !== Array ?
                                ("parent" === i.containment &&
                                    (i.containment = this.helper[0].parentNode),
                                    (n = (e = y(i.containment))[0]) &&
                                    ((t = /(scroll|auto)/.test(e.css("overflow"))),
                                        (this.containment = [
                                            (parseInt(e.css("borderLeftWidth"), 10) || 0) +
                                            (parseInt(e.css("paddingLeft"), 10) || 0),
                                            (parseInt(e.css("borderTopWidth"), 10) || 0) +
                                            (parseInt(e.css("paddingTop"), 10) || 0),
                                            (t ?
                                                Math.max(n.scrollWidth, n.offsetWidth) :
                                                n.offsetWidth) -
                                            (parseInt(e.css("borderRightWidth"), 10) || 0) -
                                            (parseInt(e.css("paddingRight"), 10) || 0) -
                                            this.helperProportions.width -
                                            this.margins.left -
                                            this.margins.right,
                                            (t ?
                                                Math.max(n.scrollHeight, n.offsetHeight) :
                                                n.offsetHeight) -
                                            (parseInt(e.css("borderBottomWidth"), 10) || 0) -
                                            (parseInt(e.css("paddingBottom"), 10) || 0) -
                                            this.helperProportions.height -
                                            this.margins.top -
                                            this.margins.bottom
                                        ]),
                                        (this.relativeContainer = e))) :
                                (this.containment = i.containment) :
                                (this.containment = [
                                    0,
                                    0,
                                    y(o).width() -
                                    this.helperProportions.width -
                                    this.margins.left,
                                    (y(o).height() || o.body.parentNode.scrollHeight) -
                                    this.helperProportions.height -
                                    this.margins.top
                                ]) :
                                (this.containment = [
                                    y(window).scrollLeft() -
                                    this.offset.relative.left -
                                    this.offset.parent.left,
                                    y(window).scrollTop() -
                                    this.offset.relative.top -
                                    this.offset.parent.top,
                                    y(window).scrollLeft() +
                                    y(window).width() -
                                    this.helperProportions.width -
                                    this.margins.left,
                                    y(window).scrollTop() +
                                    (y(window).height() || o.body.parentNode.scrollHeight) -
                                    this.helperProportions.height -
                                    this.margins.top
                                ]) :
                                (this.containment = null);
                        },
                        _convertPositionTo: function(t, e) {
                            e = e || this.position;
                            var n = "absolute" === t ? 1 : -1,
                                i = this._isRootNode(this.scrollParent[0]);
                            return {
                                top: e.top +
                                    this.offset.relative.top * n +
                                    this.offset.parent.top * n -
                                    ("fixed" === this.cssPosition ?
                                        -this.offset.scroll.top :
                                        i ?
                                        0 :
                                        this.offset.scroll.top) *
                                    n,
                                left: e.left +
                                    this.offset.relative.left * n +
                                    this.offset.parent.left * n -
                                    ("fixed" === this.cssPosition ?
                                        -this.offset.scroll.left :
                                        i ?
                                        0 :
                                        this.offset.scroll.left) *
                                    n
                            };
                        },
                        _generatePosition: function(t, e) {
                            var n,
                                i,
                                o,
                                r,
                                s = this.options,
                                a = this._isRootNode(this.scrollParent[0]),
                                l = t.pageX,
                                c = t.pageY;
                            return (
                                (a && this.offset.scroll) ||
                                (this.offset.scroll = {
                                    top: this.scrollParent.scrollTop(),
                                    left: this.scrollParent.scrollLeft()
                                }),
                                e &&
                                (this.containment &&
                                    ((n = this.relativeContainer ?
                                            ((i = this.relativeContainer.offset()), [
                                                this.containment[0] + i.left,
                                                this.containment[1] + i.top,
                                                this.containment[2] + i.left,
                                                this.containment[3] + i.top
                                            ]) :
                                            this.containment),
                                        t.pageX - this.offset.click.left < n[0] &&
                                        (l = n[0] + this.offset.click.left),
                                        t.pageY - this.offset.click.top < n[1] &&
                                        (c = n[1] + this.offset.click.top),
                                        t.pageX - this.offset.click.left > n[2] &&
                                        (l = n[2] + this.offset.click.left),
                                        t.pageY - this.offset.click.top > n[3] &&
                                        (c = n[3] + this.offset.click.top)),
                                    s.grid &&
                                    ((o = s.grid[1] ?
                                            this.originalPageY +
                                            Math.round((c - this.originalPageY) / s.grid[1]) *
                                            s.grid[1] :
                                            this.originalPageY),
                                        (c = n ?
                                            o - this.offset.click.top >= n[1] ||
                                            o - this.offset.click.top > n[3] ?
                                            o :
                                            o - this.offset.click.top >= n[1] ?
                                            o - s.grid[1] :
                                            o + s.grid[1] :
                                            o),
                                        (r = s.grid[0] ?
                                            this.originalPageX +
                                            Math.round((l - this.originalPageX) / s.grid[0]) *
                                            s.grid[0] :
                                            this.originalPageX),
                                        (l = n ?
                                            r - this.offset.click.left >= n[0] ||
                                            r - this.offset.click.left > n[2] ?
                                            r :
                                            r - this.offset.click.left >= n[0] ?
                                            r - s.grid[0] :
                                            r + s.grid[0] :
                                            r)),
                                    "y" === s.axis && (l = this.originalPageX),
                                    "x" === s.axis && (c = this.originalPageY)), {
                                    top: c -
                                        this.offset.click.top -
                                        this.offset.relative.top -
                                        this.offset.parent.top +
                                        ("fixed" === this.cssPosition ?
                                            -this.offset.scroll.top :
                                            a ?
                                            0 :
                                            this.offset.scroll.top),
                                    left: l -
                                        this.offset.click.left -
                                        this.offset.relative.left -
                                        this.offset.parent.left +
                                        ("fixed" === this.cssPosition ?
                                            -this.offset.scroll.left :
                                            a ?
                                            0 :
                                            this.offset.scroll.left)
                                }
                            );
                        },
                        _clear: function() {
                            this.helper.removeClass("ui-draggable-dragging"),
                                this.helper[0] === this.element[0] ||
                                this.cancelHelperRemoval ||
                                this.helper.remove(),
                                (this.helper = null),
                                (this.cancelHelperRemoval = !1),
                                this.destroyOnClear && this.destroy();
                        },
                        _normalizeRightBottom: function() {
                            "y" !== this.options.axis &&
                                "auto" !== this.helper.css("right") &&
                                (this.helper.width(this.helper.width()),
                                    this.helper.css("right", "auto")),
                                "x" !== this.options.axis &&
                                "auto" !== this.helper.css("bottom") &&
                                (this.helper.height(this.helper.height()),
                                    this.helper.css("bottom", "auto"));
                        },
                        _trigger: function(t, e, n) {
                            return (
                                (n = n || this._uiHash()),
                                y.ui.plugin.call(this, t, [e, n, this], !0),
                                /^(drag|start|stop)/.test(t) &&
                                ((this.positionAbs = this._convertPositionTo("absolute")),
                                    (n.offset = this.positionAbs)),
                                y.Widget.prototype._trigger.call(this, t, e, n)
                            );
                        },
                        plugins: {},
                        _uiHash: function() {
                            return {
                                helper: this.helper,
                                position: this.position,
                                originalPosition: this.originalPosition,
                                offset: this.positionAbs
                            };
                        }
                    }),
                    y.ui.plugin.add("draggable", "connectToSortable", {
                        start: function(e, t, n) {
                            var i = y.extend({}, t, {
                                item: n.element
                            });
                            (n.sortables = []),
                            y(n.options.connectToSortable).each(function() {
                                var t = y(this).sortable("instance");
                                t &&
                                    !t.options.disabled &&
                                    (n.sortables.push(t),
                                        t.refreshPositions(),
                                        t._trigger("activate", e, i));
                            });
                        },
                        stop: function(e, t, n) {
                            var i = y.extend({}, t, {
                                item: n.element
                            });
                            (n.cancelHelperRemoval = !1),
                            y.each(n.sortables, function() {
                                var t = this;
                                t.isOver ?
                                    ((t.isOver = 0),
                                        (n.cancelHelperRemoval = !0),
                                        (t.cancelHelperRemoval = !1),
                                        (t._storedCSS = {
                                            position: t.placeholder.css("position"),
                                            top: t.placeholder.css("top"),
                                            left: t.placeholder.css("left")
                                        }),
                                        t._mouseStop(e),
                                        (t.options.helper = t.options._helper)) :
                                    ((t.cancelHelperRemoval = !0),
                                        t._trigger("deactivate", e, i));
                            });
                        },
                        drag: function(n, i, o) {
                            y.each(o.sortables, function() {
                                var t = !1,
                                    e = this;
                                (e.positionAbs = o.positionAbs),
                                (e.helperProportions = o.helperProportions),
                                (e.offset.click = o.offset.click),
                                e._intersectsWith(e.containerCache) &&
                                    ((t = !0),
                                        y.each(o.sortables, function() {
                                            return (
                                                (this.positionAbs = o.positionAbs),
                                                (this.helperProportions = o.helperProportions),
                                                (this.offset.click = o.offset.click),
                                                this !== e &&
                                                this._intersectsWith(this.containerCache) &&
                                                y.contains(e.element[0], this.element[0]) &&
                                                (t = !1),
                                                t
                                            );
                                        })),
                                    t ?
                                    (e.isOver ||
                                        ((e.isOver = 1),
                                            (o._parent = i.helper.parent()),
                                            (e.currentItem = i.helper
                                                .appendTo(e.element)
                                                .data("ui-sortable-item", !0)),
                                            (e.options._helper = e.options.helper),
                                            (e.options.helper = function() {
                                                return i.helper[0];
                                            }),
                                            (n.target = e.currentItem[0]),
                                            e._mouseCapture(n, !0),
                                            e._mouseStart(n, !0, !0),
                                            (e.offset.click.top = o.offset.click.top),
                                            (e.offset.click.left = o.offset.click.left),
                                            (e.offset.parent.left -=
                                                o.offset.parent.left - e.offset.parent.left),
                                            (e.offset.parent.top -=
                                                o.offset.parent.top - e.offset.parent.top),
                                            o._trigger("toSortable", n),
                                            (o.dropped = e.element),
                                            y.each(o.sortables, function() {
                                                this.refreshPositions();
                                            }),
                                            (o.currentItem = o.element),
                                            (e.fromOutside = o)),
                                        e.currentItem &&
                                        (e._mouseDrag(n), (i.position = e.position))) :
                                    e.isOver &&
                                    ((e.isOver = 0),
                                        (e.cancelHelperRemoval = !0),
                                        (e.options._revert = e.options.revert),
                                        (e.options.revert = !1),
                                        e._trigger("out", n, e._uiHash(e)),
                                        e._mouseStop(n, !0),
                                        (e.options.revert = e.options._revert),
                                        (e.options.helper = e.options._helper),
                                        e.placeholder && e.placeholder.remove(),
                                        i.helper.appendTo(o._parent),
                                        o._refreshOffsets(n),
                                        (i.position = o._generatePosition(n, !0)),
                                        o._trigger("fromSortable", n),
                                        (o.dropped = !1),
                                        y.each(o.sortables, function() {
                                            this.refreshPositions();
                                        }));
                            });
                        }
                    }),
                    y.ui.plugin.add("draggable", "cursor", {
                        start: function(t, e, n) {
                            var i = y("body"),
                                o = n.options;
                            i.css("cursor") && (o._cursor = i.css("cursor")),
                                i.css("cursor", o.cursor);
                        },
                        stop: function(t, e, n) {
                            var i = n.options;
                            i._cursor && y("body").css("cursor", i._cursor);
                        }
                    }),
                    y.ui.plugin.add("draggable", "opacity", {
                        start: function(t, e, n) {
                            var i = y(e.helper),
                                o = n.options;
                            i.css("opacity") && (o._opacity = i.css("opacity")),
                                i.css("opacity", o.opacity);
                        },
                        stop: function(t, e, n) {
                            var i = n.options;
                            i._opacity && y(e.helper).css("opacity", i._opacity);
                        }
                    }),
                    y.ui.plugin.add("draggable", "scroll", {
                        start: function(t, e, n) {
                            n.scrollParentNotHidden ||
                                (n.scrollParentNotHidden = n.helper.scrollParent(!1)),
                                n.scrollParentNotHidden[0] !== n.document[0] &&
                                "HTML" !== n.scrollParentNotHidden[0].tagName &&
                                (n.overflowOffset = n.scrollParentNotHidden.offset());
                        },
                        drag: function(t, e, n) {
                            var i = n.options,
                                o = !1,
                                r = n.scrollParentNotHidden[0],
                                s = n.document[0];
                            r !== s && "HTML" !== r.tagName ?
                                ((i.axis && "x" === i.axis) ||
                                    (n.overflowOffset.top + r.offsetHeight - t.pageY <
                                        i.scrollSensitivity ?
                                        (r.scrollTop = o = r.scrollTop + i.scrollSpeed) :
                                        t.pageY - n.overflowOffset.top < i.scrollSensitivity &&
                                        (r.scrollTop = o = r.scrollTop - i.scrollSpeed)),
                                    (i.axis && "y" === i.axis) ||
                                    (n.overflowOffset.left + r.offsetWidth - t.pageX <
                                        i.scrollSensitivity ?
                                        (r.scrollLeft = o = r.scrollLeft + i.scrollSpeed) :
                                        t.pageX - n.overflowOffset.left < i.scrollSensitivity &&
                                        (r.scrollLeft = o = r.scrollLeft - i.scrollSpeed))) :
                                ((i.axis && "x" === i.axis) ||
                                    (t.pageY - y(s).scrollTop() < i.scrollSensitivity ?
                                        (o = y(s).scrollTop(y(s).scrollTop() - i.scrollSpeed)) :
                                        y(window).height() - (t.pageY - y(s).scrollTop()) <
                                        i.scrollSensitivity &&
                                        (o = y(s).scrollTop(y(s).scrollTop() + i.scrollSpeed))),
                                    (i.axis && "y" === i.axis) ||
                                    (t.pageX - y(s).scrollLeft() < i.scrollSensitivity ?
                                        (o = y(s).scrollLeft(y(s).scrollLeft() - i.scrollSpeed)) :
                                        y(window).width() - (t.pageX - y(s).scrollLeft()) <
                                        i.scrollSensitivity &&
                                        (o = y(s).scrollLeft(
                                            y(s).scrollLeft() + i.scrollSpeed
                                        )))), !1 !== o &&
                                y.ui.ddmanager &&
                                !i.dropBehaviour &&
                                y.ui.ddmanager.prepareOffsets(n, t);
                        }
                    }),
                    y.ui.plugin.add("draggable", "snap", {
                        start: function(t, e, n) {
                            var i = n.options;
                            (n.snapElements = []),
                            y(
                                i.snap.constructor !== String ?
                                i.snap.items || ":data(ui-draggable)" :
                                i.snap
                            ).each(function() {
                                var t = y(this),
                                    e = t.offset();
                                this !== n.element[0] &&
                                    n.snapElements.push({
                                        item: this,
                                        width: t.outerWidth(),
                                        height: t.outerHeight(),
                                        top: e.top,
                                        left: e.left
                                    });
                            });
                        },
                        drag: function(t, e, n) {
                            var i,
                                o,
                                r,
                                s,
                                a,
                                l,
                                c,
                                u,
                                h,
                                f,
                                p = n.options,
                                d = p.snapTolerance,
                                g = e.offset.left,
                                m = g + n.helperProportions.width,
                                v = e.offset.top,
                                b = v + n.helperProportions.height;
                            for (h = n.snapElements.length - 1; 0 <= h; h--)
                                (l =
                                    (a = n.snapElements[h].left - n.margins.left) +
                                    n.snapElements[h].width),
                                (u =
                                    (c = n.snapElements[h].top - n.margins.top) +
                                    n.snapElements[h].height),
                                m < a - d ||
                                l + d < g ||
                                b < c - d ||
                                u + d < v ||
                                !y.contains(
                                    n.snapElements[h].item.ownerDocument,
                                    n.snapElements[h].item
                                ) ?
                                (n.snapElements[h].snapping &&
                                    n.options.snap.release &&
                                    n.options.snap.release.call(
                                        n.element,
                                        t,
                                        y.extend(n._uiHash(), {
                                            snapItem: n.snapElements[h].item
                                        })
                                    ),
                                    (n.snapElements[h].snapping = !1)) :
                                ("inner" !== p.snapMode &&
                                    ((i = Math.abs(c - b) <= d),
                                        (o = Math.abs(u - v) <= d),
                                        (r = Math.abs(a - m) <= d),
                                        (s = Math.abs(l - g) <= d),
                                        i &&
                                        (e.position.top = n._convertPositionTo("relative", {
                                            top: c - n.helperProportions.height,
                                            left: 0
                                        }).top),
                                        o &&
                                        (e.position.top = n._convertPositionTo("relative", {
                                            top: u,
                                            left: 0
                                        }).top),
                                        r &&
                                        (e.position.left = n._convertPositionTo("relative", {
                                            top: 0,
                                            left: a - n.helperProportions.width
                                        }).left),
                                        s &&
                                        (e.position.left = n._convertPositionTo("relative", {
                                            top: 0,
                                            left: l
                                        }).left)),
                                    (f = i || o || r || s),
                                    "outer" !== p.snapMode &&
                                    ((i = Math.abs(c - v) <= d),
                                        (o = Math.abs(u - b) <= d),
                                        (r = Math.abs(a - g) <= d),
                                        (s = Math.abs(l - m) <= d),
                                        i &&
                                        (e.position.top = n._convertPositionTo("relative", {
                                            top: c,
                                            left: 0
                                        }).top),
                                        o &&
                                        (e.position.top = n._convertPositionTo("relative", {
                                            top: u - n.helperProportions.height,
                                            left: 0
                                        }).top),
                                        r &&
                                        (e.position.left = n._convertPositionTo("relative", {
                                            top: 0,
                                            left: a
                                        }).left),
                                        s &&
                                        (e.position.left = n._convertPositionTo("relative", {
                                            top: 0,
                                            left: l - n.helperProportions.width
                                        }).left)), !n.snapElements[h].snapping &&
                                    (i || o || r || s || f) &&
                                    n.options.snap.snap &&
                                    n.options.snap.snap.call(
                                        n.element,
                                        t,
                                        y.extend(n._uiHash(), {
                                            snapItem: n.snapElements[h].item
                                        })
                                    ),
                                    (n.snapElements[h].snapping = i || o || r || s || f));
                        }
                    }),
                    y.ui.plugin.add("draggable", "stack", {
                        start: function(t, e, n) {
                            var i,
                                o = n.options,
                                r = y.makeArray(y(o.stack)).sort(function(t, e) {
                                    return (
                                        (parseInt(y(t).css("zIndex"), 10) || 0) -
                                        (parseInt(y(e).css("zIndex"), 10) || 0)
                                    );
                                });
                            r.length &&
                                ((i = parseInt(y(r[0]).css("zIndex"), 10) || 0),
                                    y(r).each(function(t) {
                                        y(this).css("zIndex", i + t);
                                    }),
                                    this.css("zIndex", i + r.length));
                        }
                    }),
                    y.ui.plugin.add("draggable", "zIndex", {
                        start: function(t, e, n) {
                            var i = y(e.helper),
                                o = n.options;
                            i.css("zIndex") && (o._zIndex = i.css("zIndex")),
                                i.css("zIndex", o.zIndex);
                        },
                        stop: function(t, e, n) {
                            var i = n.options;
                            i._zIndex && y(e.helper).css("zIndex", i._zIndex);
                        }
                    });
                y.ui.draggable;

                function f(t, e, n) {
                    return e <= t && t < e + n;
                }
                y.widget("ui.droppable", {
                        version: "1.11.4",
                        widgetEventPrefix: "drop",
                        options: {
                            accept: "*",
                            activeClass: !1,
                            addClasses: !0,
                            greedy: !1,
                            hoverClass: !1,
                            scope: "default",
                            tolerance: "intersect",
                            activate: null,
                            deactivate: null,
                            drop: null,
                            out: null,
                            over: null
                        },
                        _create: function() {
                            var t,
                                e = this.options,
                                n = e.accept;
                            (this.isover = !1),
                            (this.isout = !0),
                            (this.accept = y.isFunction(n) ?
                                n :
                                function(t) {
                                    return t.is(n);
                                }),
                            (this.proportions = function() {
                                if (!arguments.length)
                                    return (
                                        t ||
                                        (t = {
                                            width: this.element[0].offsetWidth,
                                            height: this.element[0].offsetHeight
                                        })
                                    );
                                t = arguments[0];
                            }),
                            this._addToManager(e.scope),
                                e.addClasses && this.element.addClass("ui-droppable");
                        },
                        _addToManager: function(t) {
                            (y.ui.ddmanager.droppables[t] = y.ui.ddmanager.droppables[t] || []),
                            y.ui.ddmanager.droppables[t].push(this);
                        },
                        _splice: function(t) {
                            for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1);
                        },
                        _destroy: function() {
                            var t = y.ui.ddmanager.droppables[this.options.scope];
                            this._splice(t),
                                this.element.removeClass("ui-droppable ui-droppable-disabled");
                        },
                        _setOption: function(t, e) {
                            if ("accept" === t)
                                this.accept = y.isFunction(e) ?
                                e :
                                function(t) {
                                    return t.is(e);
                                };
                            else if ("scope" === t) {
                                var n = y.ui.ddmanager.droppables[this.options.scope];
                                this._splice(n), this._addToManager(e);
                            }
                            this._super(t, e);
                        },
                        _activate: function(t) {
                            var e = y.ui.ddmanager.current;
                            this.options.activeClass &&
                                this.element.addClass(this.options.activeClass),
                                e && this._trigger("activate", t, this.ui(e));
                        },
                        _deactivate: function(t) {
                            var e = y.ui.ddmanager.current;
                            this.options.activeClass &&
                                this.element.removeClass(this.options.activeClass),
                                e && this._trigger("deactivate", t, this.ui(e));
                        },
                        _over: function(t) {
                            var e = y.ui.ddmanager.current;
                            e &&
                                (e.currentItem || e.element)[0] !== this.element[0] &&
                                this.accept.call(this.element[0], e.currentItem || e.element) &&
                                (this.options.hoverClass &&
                                    this.element.addClass(this.options.hoverClass),
                                    this._trigger("over", t, this.ui(e)));
                        },
                        _out: function(t) {
                            var e = y.ui.ddmanager.current;
                            e &&
                                (e.currentItem || e.element)[0] !== this.element[0] &&
                                this.accept.call(this.element[0], e.currentItem || e.element) &&
                                (this.options.hoverClass &&
                                    this.element.removeClass(this.options.hoverClass),
                                    this._trigger("out", t, this.ui(e)));
                        },
                        _drop: function(e, t) {
                            var n = t || y.ui.ddmanager.current,
                                i = !1;
                            return (!(!n || (n.currentItem || n.element)[0] === this.element[0]) &&
                                (this.element
                                    .find(":data(ui-droppable)")
                                    .not(".ui-draggable-dragging")
                                    .each(function() {
                                        var t = y(this).droppable("instance");
                                        if (
                                            t.options.greedy &&
                                            !t.options.disabled &&
                                            t.options.scope === n.options.scope &&
                                            t.accept.call(t.element[0], n.currentItem || n.element) &&
                                            y.ui.intersect(
                                                n,
                                                y.extend(t, {
                                                    offset: t.element.offset()
                                                }),
                                                t.options.tolerance,
                                                e
                                            )
                                        )
                                            return !(i = !0);
                                    }), !i &&
                                    !!this.accept.call(
                                        this.element[0],
                                        n.currentItem || n.element
                                    ) &&
                                    (this.options.activeClass &&
                                        this.element.removeClass(this.options.activeClass),
                                        this.options.hoverClass &&
                                        this.element.removeClass(this.options.hoverClass),
                                        this._trigger("drop", e, this.ui(n)),
                                        this.element))
                            );
                        },
                        ui: function(t) {
                            return {
                                draggable: t.currentItem || t.element,
                                helper: t.helper,
                                position: t.position,
                                offset: t.positionAbs
                            };
                        }
                    }),
                    (y.ui.intersect = function(t, e, n, i) {
                        if (!e.offset) return !1;
                        var o =
                            (t.positionAbs || t.position.absolute).left + t.margins.left,
                            r = (t.positionAbs || t.position.absolute).top + t.margins.top,
                            s = o + t.helperProportions.width,
                            a = r + t.helperProportions.height,
                            l = e.offset.left,
                            c = e.offset.top,
                            u = l + e.proportions().width,
                            h = c + e.proportions().height;
                        switch (n) {
                            case "fit":
                                return l <= o && s <= u && c <= r && a <= h;
                            case "intersect":
                                return (
                                    l < o + t.helperProportions.width / 2 &&
                                    s - t.helperProportions.width / 2 < u &&
                                    c < r + t.helperProportions.height / 2 &&
                                    a - t.helperProportions.height / 2 < h
                                );
                            case "pointer":
                                return (
                                    f(i.pageY, c, e.proportions().height) &&
                                    f(i.pageX, l, e.proportions().width)
                                );
                            case "touch":
                                return (
                                    ((c <= r && r <= h) ||
                                        (c <= a && a <= h) ||
                                        (r < c && h < a)) &&
                                    ((l <= o && o <= u) || (l <= s && s <= u) || (o < l && u < s))
                                );
                            default:
                                return !1;
                        }
                    }),
                    (y.ui.ddmanager = {
                        current: null,
                        droppables: {
                            default: []
                        },
                        prepareOffsets: function(t, e) {
                            var n,
                                i,
                                o = y.ui.ddmanager.droppables[t.options.scope] || [],
                                r = e ? e.type : null,
                                s = (t.currentItem || t.element)
                                .find(":data(ui-droppable)")
                                .addBack();
                            t: for (n = 0; n < o.length; n++)
                                if (!(
                                        o[n].options.disabled ||
                                        (t &&
                                            !o[n].accept.call(
                                                o[n].element[0],
                                                t.currentItem || t.element
                                            ))
                                    )) {
                                    for (i = 0; i < s.length; i++)
                                        if (s[i] === o[n].element[0]) {
                                            o[n].proportions().height = 0;
                                            continue t;
                                        }
                                        (o[n].visible = "none" !== o[n].element.css("display")),
                                    o[n].visible &&
                                        ("mousedown" === r && o[n]._activate.call(o[n], e),
                                            (o[n].offset = o[n].element.offset()),
                                            o[n].proportions({
                                                width: o[n].element[0].offsetWidth,
                                                height: o[n].element[0].offsetHeight
                                            }));
                                }
                        },
                        drop: function(t, e) {
                            var n = !1;
                            return (
                                y.each(
                                    (y.ui.ddmanager.droppables[t.options.scope] || []).slice(),
                                    function() {
                                        this.options &&
                                            (!this.options.disabled &&
                                                this.visible &&
                                                y.ui.intersect(t, this, this.options.tolerance, e) &&
                                                (n = this._drop.call(this, e) || n), !this.options.disabled &&
                                                this.visible &&
                                                this.accept.call(
                                                    this.element[0],
                                                    t.currentItem || t.element
                                                ) &&
                                                ((this.isout = !0),
                                                    (this.isover = !1),
                                                    this._deactivate.call(this, e)));
                                    }
                                ),
                                n
                            );
                        },
                        dragStart: function(t, e) {
                            t.element
                                .parentsUntil("body")
                                .bind("scroll.droppable", function() {
                                    t.options.refreshPositions ||
                                        y.ui.ddmanager.prepareOffsets(t, e);
                                });
                        },
                        drag: function(r, s) {
                            r.options.refreshPositions && y.ui.ddmanager.prepareOffsets(r, s),
                                y.each(
                                    y.ui.ddmanager.droppables[r.options.scope] || [],
                                    function() {
                                        if (!this.options.disabled &&
                                            !this.greedyChild &&
                                            this.visible
                                        ) {
                                            var t,
                                                e,
                                                n,
                                                i = y.ui.intersect(r, this, this.options.tolerance, s),
                                                o = !i && this.isover ?
                                                "isout" :
                                                i && !this.isover ?
                                                "isover" :
                                                null;
                                            o &&
                                                (this.options.greedy &&
                                                    ((e = this.options.scope),
                                                        (n = this.element
                                                            .parents(":data(ui-droppable)")
                                                            .filter(function() {
                                                                return (
                                                                    y(this).droppable("instance").options.scope ===
                                                                    e
                                                                );
                                                            })).length &&
                                                        ((t = y(n[0]).droppable("instance")).greedyChild =
                                                            "isover" === o)),
                                                    t &&
                                                    "isover" === o &&
                                                    ((t.isover = !1), (t.isout = !0), t._out.call(t, s)),
                                                    (this[o] = !0),
                                                    (this["isout" === o ? "isover" : "isout"] = !1),
                                                    this["isover" === o ? "_over" : "_out"].call(this, s),
                                                    t &&
                                                    "isout" === o &&
                                                    ((t.isout = !1),
                                                        (t.isover = !0),
                                                        t._over.call(t, s)));
                                        }
                                    }
                                );
                        },
                        dragStop: function(t, e) {
                            t.element.parentsUntil("body").unbind("scroll.droppable"),
                                t.options.refreshPositions ||
                                y.ui.ddmanager.prepareOffsets(t, e);
                        }
                    });
                y.ui.droppable,
                    y.widget("ui.sortable", y.ui.mouse, {
                        version: "1.11.4",
                        widgetEventPrefix: "sort",
                        ready: !1,
                        options: {
                            appendTo: "parent",
                            axis: !1,
                            connectWith: !1,
                            containment: !1,
                            cursor: "auto",
                            cursorAt: !1,
                            dropOnEmpty: !0,
                            forcePlaceholderSize: !1,
                            forceHelperSize: !1,
                            grid: !1,
                            handle: !1,
                            helper: "original",
                            items: "> *",
                            opacity: !1,
                            placeholder: !1,
                            revert: !1,
                            scroll: !0,
                            scrollSensitivity: 20,
                            scrollSpeed: 20,
                            scope: "default",
                            tolerance: "intersect",
                            zIndex: 1e3,
                            activate: null,
                            beforeStop: null,
                            change: null,
                            deactivate: null,
                            out: null,
                            over: null,
                            receive: null,
                            remove: null,
                            sort: null,
                            start: null,
                            stop: null,
                            update: null
                        },
                        _isOverAxis: function(t, e, n) {
                            return e <= t && t < e + n;
                        },
                        _isFloating: function(t) {
                            return (
                                /left|right/.test(t.css("float")) ||
                                /inline|table-cell/.test(t.css("display"))
                            );
                        },
                        _create: function() {
                            (this.containerCache = {}),
                            this.element.addClass("ui-sortable"),
                                this.refresh(),
                                (this.offset = this.element.offset()),
                                this._mouseInit(),
                                this._setHandleClassName(),
                                (this.ready = !0);
                        },
                        _setOption: function(t, e) {
                            this._super(t, e), "handle" === t && this._setHandleClassName();
                        },
                        _setHandleClassName: function() {
                            this.element
                                .find(".ui-sortable-handle")
                                .removeClass("ui-sortable-handle"),
                                y.each(this.items, function() {
                                    (this.instance.options.handle ?
                                        this.item.find(this.instance.options.handle) :
                                        this.item
                                    ).addClass("ui-sortable-handle");
                                });
                        },
                        _destroy: function() {
                            this.element
                                .removeClass("ui-sortable ui-sortable-disabled")
                                .find(".ui-sortable-handle")
                                .removeClass("ui-sortable-handle"),
                                this._mouseDestroy();
                            for (var t = this.items.length - 1; 0 <= t; t--)
                                this.items[t].item.removeData(this.widgetName + "-item");
                            return this;
                        },
                        _mouseCapture: function(t, e) {
                            var n = null,
                                i = !1,
                                o = this;
                            return (!this.reverting &&
                                !this.options.disabled &&
                                "static" !== this.options.type &&
                                (this._refreshItems(t),
                                    y(t.target)
                                    .parents()
                                    .each(function() {
                                        if (y.data(this, o.widgetName + "-item") === o)
                                            return (n = y(this)), !1;
                                    }),
                                    y.data(t.target, o.widgetName + "-item") === o &&
                                    (n = y(t.target)), !!n &&
                                    !(
                                        this.options.handle &&
                                        !e &&
                                        (y(this.options.handle, n)
                                            .find("*")
                                            .addBack()
                                            .each(function() {
                                                this === t.target && (i = !0);
                                            }), !i)
                                    ) &&
                                    ((this.currentItem = n), this._removeCurrentsFromItems(), !0))
                            );
                        },
                        _mouseStart: function(t, e, n) {
                            var i,
                                o,
                                r = this.options;
                            if (
                                ((this.currentContainer = this).refreshPositions(),
                                    (this.helper = this._createHelper(t)),
                                    this._cacheHelperProportions(),
                                    this._cacheMargins(),
                                    (this.scrollParent = this.helper.scrollParent()),
                                    (this.offset = this.currentItem.offset()),
                                    (this.offset = {
                                        top: this.offset.top - this.margins.top,
                                        left: this.offset.left - this.margins.left
                                    }),
                                    y.extend(this.offset, {
                                        click: {
                                            left: t.pageX - this.offset.left,
                                            top: t.pageY - this.offset.top
                                        },
                                        parent: this._getParentOffset(),
                                        relative: this._getRelativeOffset()
                                    }),
                                    this.helper.css("position", "absolute"),
                                    (this.cssPosition = this.helper.css("position")),
                                    (this.originalPosition = this._generatePosition(t)),
                                    (this.originalPageX = t.pageX),
                                    (this.originalPageY = t.pageY),
                                    r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt),
                                    (this.domPosition = {
                                        prev: this.currentItem.prev()[0],
                                        parent: this.currentItem.parent()[0]
                                    }),
                                    this.helper[0] !== this.currentItem[0] &&
                                    this.currentItem.hide(),
                                    this._createPlaceholder(),
                                    r.containment && this._setContainment(),
                                    r.cursor &&
                                    "auto" !== r.cursor &&
                                    ((o = this.document.find("body")),
                                        (this.storedCursor = o.css("cursor")),
                                        o.css("cursor", r.cursor),
                                        (this.storedStylesheet = y(
                                            "<style>*{ cursor: " + r.cursor + " !important; }</style>"
                                        ).appendTo(o))),
                                    r.opacity &&
                                    (this.helper.css("opacity") &&
                                        (this._storedOpacity = this.helper.css("opacity")),
                                        this.helper.css("opacity", r.opacity)),
                                    r.zIndex &&
                                    (this.helper.css("zIndex") &&
                                        (this._storedZIndex = this.helper.css("zIndex")),
                                        this.helper.css("zIndex", r.zIndex)),
                                    this.scrollParent[0] !== this.document[0] &&
                                    "HTML" !== this.scrollParent[0].tagName &&
                                    (this.overflowOffset = this.scrollParent.offset()),
                                    this._trigger("start", t, this._uiHash()),
                                    this._preserveHelperProportions ||
                                    this._cacheHelperProportions(), !n)
                            )
                                for (i = this.containers.length - 1; 0 <= i; i--)
                                    this.containers[i]._trigger(
                                        "activate",
                                        t,
                                        this._uiHash(this)
                                    );
                            return (
                                y.ui.ddmanager && (y.ui.ddmanager.current = this),
                                y.ui.ddmanager &&
                                !r.dropBehaviour &&
                                y.ui.ddmanager.prepareOffsets(this, t),
                                (this.dragging = !0),
                                this.helper.addClass("ui-sortable-helper"),
                                this._mouseDrag(t), !0
                            );
                        },
                        _mouseDrag: function(t) {
                            var e,
                                n,
                                i,
                                o,
                                r = this.options,
                                s = !1;
                            for (
                                this.position = this._generatePosition(t),
                                this.positionAbs = this._convertPositionTo("absolute"),
                                this.lastPositionAbs ||
                                (this.lastPositionAbs = this.positionAbs),
                                this.options.scroll &&
                                (this.scrollParent[0] !== this.document[0] &&
                                    "HTML" !== this.scrollParent[0].tagName ?
                                    (this.overflowOffset.top +
                                        this.scrollParent[0].offsetHeight -
                                        t.pageY <
                                        r.scrollSensitivity ?
                                        (this.scrollParent[0].scrollTop = s =
                                            this.scrollParent[0].scrollTop + r.scrollSpeed) :
                                        t.pageY - this.overflowOffset.top <
                                        r.scrollSensitivity &&
                                        (this.scrollParent[0].scrollTop = s =
                                            this.scrollParent[0].scrollTop - r.scrollSpeed),
                                        this.overflowOffset.left +
                                        this.scrollParent[0].offsetWidth -
                                        t.pageX <
                                        r.scrollSensitivity ?
                                        (this.scrollParent[0].scrollLeft = s =
                                            this.scrollParent[0].scrollLeft + r.scrollSpeed) :
                                        t.pageX - this.overflowOffset.left <
                                        r.scrollSensitivity &&
                                        (this.scrollParent[0].scrollLeft = s =
                                            this.scrollParent[0].scrollLeft - r.scrollSpeed)) :
                                    (t.pageY - this.document.scrollTop() <
                                        r.scrollSensitivity ?
                                        (s = this.document.scrollTop(
                                            this.document.scrollTop() - r.scrollSpeed
                                        )) :
                                        this.window.height() -
                                        (t.pageY - this.document.scrollTop()) <
                                        r.scrollSensitivity &&
                                        (s = this.document.scrollTop(
                                            this.document.scrollTop() + r.scrollSpeed
                                        )),
                                        t.pageX - this.document.scrollLeft() <
                                        r.scrollSensitivity ?
                                        (s = this.document.scrollLeft(
                                            this.document.scrollLeft() - r.scrollSpeed
                                        )) :
                                        this.window.width() -
                                        (t.pageX - this.document.scrollLeft()) <
                                        r.scrollSensitivity &&
                                        (s = this.document.scrollLeft(
                                            this.document.scrollLeft() + r.scrollSpeed
                                        ))), !1 !== s &&
                                    y.ui.ddmanager &&
                                    !r.dropBehaviour &&
                                    y.ui.ddmanager.prepareOffsets(this, t)),
                                this.positionAbs = this._convertPositionTo("absolute"),
                                (this.options.axis && "y" === this.options.axis) ||
                                (this.helper[0].style.left = this.position.left + "px"),
                                (this.options.axis && "x" === this.options.axis) ||
                                (this.helper[0].style.top = this.position.top + "px"),
                                e = this.items.length - 1; 0 <= e; e--
                            )
                                if (
                                    ((i = (n = this.items[e]).item[0]),
                                        (o = this._intersectsWithPointer(n)) &&
                                        n.instance === this.currentContainer &&
                                        !(
                                            i === this.currentItem[0] ||
                                            this.placeholder[1 === o ? "next" : "prev"]()[0] === i ||
                                            y.contains(this.placeholder[0], i) ||
                                            ("semi-dynamic" === this.options.type &&
                                                y.contains(this.element[0], i))
                                        ))
                                ) {
                                    if (
                                        ((this.direction = 1 === o ? "down" : "up"),
                                            "pointer" !== this.options.tolerance &&
                                            !this._intersectsWithSides(n))
                                    )
                                        break;
                                    this._rearrange(t, n),
                                        this._trigger("change", t, this._uiHash());
                                    break;
                                }
                            return (
                                this._contactContainers(t),
                                y.ui.ddmanager && y.ui.ddmanager.drag(this, t),
                                this._trigger("sort", t, this._uiHash()),
                                (this.lastPositionAbs = this.positionAbs), !1
                            );
                        },
                        _mouseStop: function(t, e) {
                            if (t) {
                                if (
                                    (y.ui.ddmanager &&
                                        !this.options.dropBehaviour &&
                                        y.ui.ddmanager.drop(this, t),
                                        this.options.revert)
                                ) {
                                    var n = this,
                                        i = this.placeholder.offset(),
                                        o = this.options.axis,
                                        r = {};
                                    (o && "x" !== o) ||
                                    (r.left =
                                        i.left -
                                        this.offset.parent.left -
                                        this.margins.left +
                                        (this.offsetParent[0] === this.document[0].body ?
                                            0 :
                                            this.offsetParent[0].scrollLeft)),
                                    (o && "y" !== o) ||
                                    (r.top =
                                        i.top -
                                        this.offset.parent.top -
                                        this.margins.top +
                                        (this.offsetParent[0] === this.document[0].body ?
                                            0 :
                                            this.offsetParent[0].scrollTop)),
                                    (this.reverting = !0),
                                    y(this.helper).animate(
                                        r,
                                        parseInt(this.options.revert, 10) || 500,
                                        function() {
                                            n._clear(t);
                                        }
                                    );
                                } else this._clear(t, e);
                                return !1;
                            }
                        },
                        cancel: function() {
                            if (this.dragging) {
                                this._mouseUp({
                                        target: null
                                    }),
                                    "original" === this.options.helper ?
                                    this.currentItem
                                    .css(this._storedCSS)
                                    .removeClass("ui-sortable-helper") :
                                    this.currentItem.show();
                                for (var t = this.containers.length - 1; 0 <= t; t--)
                                    this.containers[t]._trigger(
                                        "deactivate",
                                        null,
                                        this._uiHash(this)
                                    ),
                                    this.containers[t].containerCache.over &&
                                    (this.containers[t]._trigger(
                                            "out",
                                            null,
                                            this._uiHash(this)
                                        ),
                                        (this.containers[t].containerCache.over = 0));
                            }
                            return (
                                this.placeholder &&
                                (this.placeholder[0].parentNode &&
                                    this.placeholder[0].parentNode.removeChild(
                                        this.placeholder[0]
                                    ),
                                    "original" !== this.options.helper &&
                                    this.helper &&
                                    this.helper[0].parentNode &&
                                    this.helper.remove(),
                                    y.extend(this, {
                                        helper: null,
                                        dragging: !1,
                                        reverting: !1,
                                        _noFinalSort: null
                                    }),
                                    this.domPosition.prev ?
                                    y(this.domPosition.prev).after(this.currentItem) :
                                    y(this.domPosition.parent).prepend(this.currentItem)),
                                this
                            );
                        },
                        serialize: function(e) {
                            var t = this._getItemsAsjQuery(e && e.connected),
                                n = [];
                            return (
                                (e = e || {}),
                                y(t).each(function() {
                                    var t = (
                                        y(e.item || this).attr(e.attribute || "id") || ""
                                    ).match(e.expression || /(.+)[\-=_](.+)/);
                                    t &&
                                        n.push(
                                            (e.key || t[1] + "[]") +
                                            "=" +
                                            (e.key && e.expression ? t[1] : t[2])
                                        );
                                }), !n.length && e.key && n.push(e.key + "="),
                                n.join("&")
                            );
                        },
                        toArray: function(t) {
                            var e = this._getItemsAsjQuery(t && t.connected),
                                n = [];
                            return (
                                (t = t || {}),
                                e.each(function() {
                                    n.push(y(t.item || this).attr(t.attribute || "id") || "");
                                }),
                                n
                            );
                        },
                        _intersectsWith: function(t) {
                            var e = this.positionAbs.left,
                                n = e + this.helperProportions.width,
                                i = this.positionAbs.top,
                                o = i + this.helperProportions.height,
                                r = t.left,
                                s = r + t.width,
                                a = t.top,
                                l = a + t.height,
                                c = this.offset.click.top,
                                u = this.offset.click.left,
                                h = "x" === this.options.axis || (a < i + c && i + c < l),
                                f = "y" === this.options.axis || (r < e + u && e + u < s),
                                p = h && f;
                            return "pointer" === this.options.tolerance ||
                                this.options.forcePointerForContainers ||
                                ("pointer" !== this.options.tolerance &&
                                    this.helperProportions[this.floating ? "width" : "height"] >
                                    t[this.floating ? "width" : "height"]) ?
                                p :
                                r < e + this.helperProportions.width / 2 &&
                                n - this.helperProportions.width / 2 < s &&
                                a < i + this.helperProportions.height / 2 &&
                                o - this.helperProportions.height / 2 < l;
                        },
                        _intersectsWithPointer: function(t) {
                            var e =
                                "x" === this.options.axis ||
                                this._isOverAxis(
                                    this.positionAbs.top + this.offset.click.top,
                                    t.top,
                                    t.height
                                ),
                                n =
                                "y" === this.options.axis ||
                                this._isOverAxis(
                                    this.positionAbs.left + this.offset.click.left,
                                    t.left,
                                    t.width
                                ),
                                i = e && n,
                                o = this._getDragVerticalDirection(),
                                r = this._getDragHorizontalDirection();
                            return (!!i &&
                                (this.floating ?
                                    (r && "right" === r) || "down" === o ?
                                    2 :
                                    1 :
                                    o && ("down" === o ? 2 : 1))
                            );
                        },
                        _intersectsWithSides: function(t) {
                            var e = this._isOverAxis(
                                    this.positionAbs.top + this.offset.click.top,
                                    t.top + t.height / 2,
                                    t.height
                                ),
                                n = this._isOverAxis(
                                    this.positionAbs.left + this.offset.click.left,
                                    t.left + t.width / 2,
                                    t.width
                                ),
                                i = this._getDragVerticalDirection(),
                                o = this._getDragHorizontalDirection();
                            return this.floating && o ?
                                ("right" === o && n) || ("left" === o && !n) :
                                i && (("down" === i && e) || ("up" === i && !e));
                        },
                        _getDragVerticalDirection: function() {
                            var t = this.positionAbs.top - this.lastPositionAbs.top;
                            return 0 != t && (0 < t ? "down" : "up");
                        },
                        _getDragHorizontalDirection: function() {
                            var t = this.positionAbs.left - this.lastPositionAbs.left;
                            return 0 != t && (0 < t ? "right" : "left");
                        },
                        refresh: function(t) {
                            return (
                                this._refreshItems(t),
                                this._setHandleClassName(),
                                this.refreshPositions(),
                                this
                            );
                        },
                        _connectWith: function() {
                            var t = this.options;
                            return t.connectWith.constructor === String ?
                                [t.connectWith] :
                                t.connectWith;
                        },
                        _getItemsAsjQuery: function(t) {
                            var e,
                                n,
                                i,
                                o,
                                r = [],
                                s = [],
                                a = this._connectWith();
                            if (a && t)
                                for (e = a.length - 1; 0 <= e; e--)
                                    for (
                                        n = (i = y(a[e], this.document[0])).length - 1; 0 <= n; n--
                                    )
                                        (o = y.data(i[n], this.widgetFullName)) &&
                                        o !== this &&
                                        !o.options.disabled &&
                                        s.push([
                                            y.isFunction(o.options.items) ?
                                            o.options.items.call(o.element) :
                                            y(o.options.items, o.element)
                                            .not(".ui-sortable-helper")
                                            .not(".ui-sortable-placeholder"),
                                            o
                                        ]);

                            function l() {
                                r.push(this);
                            }
                            for (
                                s.push([
                                    y.isFunction(this.options.items) ?
                                    this.options.items.call(this.element, null, {
                                        options: this.options,
                                        item: this.currentItem
                                    }) :
                                    y(this.options.items, this.element)
                                    .not(".ui-sortable-helper")
                                    .not(".ui-sortable-placeholder"),
                                    this
                                ]),
                                e = s.length - 1; 0 <= e; e--
                            )
                                s[e][0].each(l);
                            return y(r);
                        },
                        _removeCurrentsFromItems: function() {
                            var n = this.currentItem.find(
                                ":data(" + this.widgetName + "-item)"
                            );
                            this.items = y.grep(this.items, function(t) {
                                for (var e = 0; e < n.length; e++)
                                    if (n[e] === t.item[0]) return !1;
                                return !0;
                            });
                        },
                        _refreshItems: function(t) {
                            (this.items = []), (this.containers = [this]);
                            var e,
                                n,
                                i,
                                o,
                                r,
                                s,
                                a,
                                l,
                                c = this.items,
                                u = [
                                    [
                                        y.isFunction(this.options.items) ?
                                        this.options.items.call(this.element[0], t, {
                                            item: this.currentItem
                                        }) :
                                        y(this.options.items, this.element),
                                        this
                                    ]
                                ],
                                h = this._connectWith();
                            if (h && this.ready)
                                for (e = h.length - 1; 0 <= e; e--)
                                    for (
                                        n = (i = y(h[e], this.document[0])).length - 1; 0 <= n; n--
                                    )
                                        (o = y.data(i[n], this.widgetFullName)) &&
                                        o !== this &&
                                        !o.options.disabled &&
                                        (u.push([
                                                y.isFunction(o.options.items) ?
                                                o.options.items.call(o.element[0], t, {
                                                    item: this.currentItem
                                                }) :
                                                y(o.options.items, o.element),
                                                o
                                            ]),
                                            this.containers.push(o));
                            for (e = u.length - 1; 0 <= e; e--)
                                for (r = u[e][1], n = 0, l = (s = u[e][0]).length; n < l; n++)
                                    (a = y(s[n])).data(this.widgetName + "-item", r),
                                    c.push({
                                        item: a,
                                        instance: r,
                                        width: 0,
                                        height: 0,
                                        left: 0,
                                        top: 0
                                    });
                        },
                        refreshPositions: function(t) {
                            var e, n, i, o;
                            for (
                                this.floating = !!this.items.length &&
                                ("x" === this.options.axis ||
                                    this._isFloating(this.items[0].item)),
                                this.offsetParent &&
                                this.helper &&
                                (this.offset.parent = this._getParentOffset()),
                                e = this.items.length - 1; 0 <= e; e--
                            )
                                ((n = this.items[e]).instance !== this.currentContainer &&
                                    this.currentContainer &&
                                    n.item[0] !== this.currentItem[0]) ||
                                ((i = this.options.toleranceElement ?
                                        y(this.options.toleranceElement, n.item) :
                                        n.item),
                                    t ||
                                    ((n.width = i.outerWidth()), (n.height = i.outerHeight())),
                                    (o = i.offset()),
                                    (n.left = o.left),
                                    (n.top = o.top));
                            if (this.options.custom && this.options.custom.refreshContainers)
                                this.options.custom.refreshContainers.call(this);
                            else
                                for (e = this.containers.length - 1; 0 <= e; e--)
                                    (o = this.containers[e].element.offset()),
                                    (this.containers[e].containerCache.left = o.left),
                                    (this.containers[e].containerCache.top = o.top),
                                    (this.containers[e].containerCache.width = this.containers[
                                        e
                                    ].element.outerWidth()),
                                    (this.containers[e].containerCache.height = this.containers[
                                        e
                                    ].element.outerHeight());
                            return this;
                        },
                        _createPlaceholder: function(n) {
                            var i,
                                o = (n = n || this).options;
                            (o.placeholder && o.placeholder.constructor !== String) ||
                            ((i = o.placeholder),
                                (o.placeholder = {
                                    element: function() {
                                        var t = n.currentItem[0].nodeName.toLowerCase(),
                                            e = y("<" + t + ">", n.document[0])
                                            .addClass(
                                                i ||
                                                n.currentItem[0].className +
                                                " ui-sortable-placeholder"
                                            )
                                            .removeClass("ui-sortable-helper");
                                        return (
                                            "tbody" === t ?
                                            n._createTrPlaceholder(
                                                n.currentItem.find("tr").eq(0),
                                                y("<tr>", n.document[0]).appendTo(e)
                                            ) :
                                            "tr" === t ?
                                            n._createTrPlaceholder(n.currentItem, e) :
                                            "img" === t &&
                                            e.attr("src", n.currentItem.attr("src")),
                                            i || e.css("visibility", "hidden"),
                                            e
                                        );
                                    },
                                    update: function(t, e) {
                                        (i && !o.forcePlaceholderSize) ||
                                        (e.height() ||
                                            e.height(
                                                n.currentItem.innerHeight() -
                                                parseInt(n.currentItem.css("paddingTop") || 0, 10) -
                                                parseInt(
                                                    n.currentItem.css("paddingBottom") || 0,
                                                    10
                                                )
                                            ),
                                            e.width() ||
                                            e.width(
                                                n.currentItem.innerWidth() -
                                                parseInt(
                                                    n.currentItem.css("paddingLeft") || 0,
                                                    10
                                                ) -
                                                parseInt(n.currentItem.css("paddingRight") || 0, 10)
                                            ));
                                    }
                                })),
                            (n.placeholder = y(
                                o.placeholder.element.call(n.element, n.currentItem)
                            )),
                            n.currentItem.after(n.placeholder),
                                o.placeholder.update(n, n.placeholder);
                        },
                        _createTrPlaceholder: function(t, e) {
                            var n = this;
                            t.children().each(function() {
                                y("<td>&#160;</td>", n.document[0])
                                    .attr("colspan", y(this).attr("colspan") || 1)
                                    .appendTo(e);
                            });
                        },
                        _contactContainers: function(t) {
                            var e,
                                n,
                                i,
                                o,
                                r,
                                s,
                                a,
                                l,
                                c,
                                u,
                                h = null,
                                f = null;
                            for (e = this.containers.length - 1; 0 <= e; e--)
                                if (!y.contains(
                                        this.currentItem[0],
                                        this.containers[e].element[0]
                                    ))
                                    if (this._intersectsWith(this.containers[e].containerCache)) {
                                        if (
                                            h &&
                                            y.contains(this.containers[e].element[0], h.element[0])
                                        )
                                            continue;
                                        (h = this.containers[e]), (f = e);
                                    } else
                                        this.containers[e].containerCache.over &&
                                        (this.containers[e]._trigger(
                                                "out",
                                                t,
                                                this._uiHash(this)
                                            ),
                                            (this.containers[e].containerCache.over = 0));
                            if (h)
                                if (1 === this.containers.length)
                                    this.containers[f].containerCache.over ||
                                    (this.containers[f]._trigger("over", t, this._uiHash(this)),
                                        (this.containers[f].containerCache.over = 1));
                                else {
                                    for (
                                        i = 1e4,
                                        o = null,
                                        r = (c = h.floating || this._isFloating(this.currentItem)) ?
                                        "left" :
                                        "top",
                                        s = c ? "width" : "height",
                                        u = c ? "clientX" : "clientY",
                                        n = this.items.length - 1; 0 <= n; n--
                                    )
                                        y.contains(
                                            this.containers[f].element[0],
                                            this.items[n].item[0]
                                        ) &&
                                        this.items[n].item[0] !== this.currentItem[0] &&
                                        ((a = this.items[n].item.offset()[r]),
                                            (l = !1),
                                            t[u] - a > this.items[n][s] / 2 && (l = !0),
                                            Math.abs(t[u] - a) < i &&
                                            ((i = Math.abs(t[u] - a)),
                                                (o = this.items[n]),
                                                (this.direction = l ? "up" : "down")));
                                    if (!o && !this.options.dropOnEmpty) return;
                                    if (this.currentContainer === this.containers[f])
                                        return void(
                                            this.currentContainer.containerCache.over ||
                                            (this.containers[f]._trigger("over", t, this._uiHash()),
                                                (this.currentContainer.containerCache.over = 1))
                                        );
                                    o
                                        ?
                                        this._rearrange(t, o, null, !0) :
                                        this._rearrange(t, null, this.containers[f].element, !0),
                                        this._trigger("change", t, this._uiHash()),
                                        this.containers[f]._trigger(
                                            "change",
                                            t,
                                            this._uiHash(this)
                                        ),
                                        (this.currentContainer = this.containers[f]),
                                        this.options.placeholder.update(
                                            this.currentContainer,
                                            this.placeholder
                                        ),
                                        this.containers[f]._trigger("over", t, this._uiHash(this)),
                                        (this.containers[f].containerCache.over = 1);
                                }
                        },
                        _createHelper: function(t) {
                            var e = this.options,
                                n = y.isFunction(e.helper) ?
                                y(e.helper.apply(this.element[0], [t, this.currentItem])) :
                                "clone" === e.helper ?
                                this.currentItem.clone() :
                                this.currentItem;
                            return (
                                n.parents("body").length ||
                                y(
                                    "parent" !== e.appendTo ?
                                    e.appendTo :
                                    this.currentItem[0].parentNode
                                )[0].appendChild(n[0]),
                                n[0] === this.currentItem[0] &&
                                (this._storedCSS = {
                                    width: this.currentItem[0].style.width,
                                    height: this.currentItem[0].style.height,
                                    position: this.currentItem.css("position"),
                                    top: this.currentItem.css("top"),
                                    left: this.currentItem.css("left")
                                }),
                                (n[0].style.width && !e.forceHelperSize) ||
                                n.width(this.currentItem.width()),
                                (n[0].style.height && !e.forceHelperSize) ||
                                n.height(this.currentItem.height()),
                                n
                            );
                        },
                        _adjustOffsetFromHelper: function(t) {
                            "string" == typeof t && (t = t.split(" ")),
                                y.isArray(t) &&
                                (t = {
                                    left: +t[0],
                                    top: +t[1] || 0
                                }),
                                "left" in t &&
                                (this.offset.click.left = t.left + this.margins.left),
                                "right" in t &&
                                (this.offset.click.left =
                                    this.helperProportions.width - t.right + this.margins.left),
                                "top" in t &&
                                (this.offset.click.top = t.top + this.margins.top),
                                "bottom" in t &&
                                (this.offset.click.top =
                                    this.helperProportions.height -
                                    t.bottom +
                                    this.margins.top);
                        },
                        _getParentOffset: function() {
                            this.offsetParent = this.helper.offsetParent();
                            var t = this.offsetParent.offset();
                            return (
                                "absolute" === this.cssPosition &&
                                this.scrollParent[0] !== this.document[0] &&
                                y.contains(this.scrollParent[0], this.offsetParent[0]) &&
                                ((t.left += this.scrollParent.scrollLeft()),
                                    (t.top += this.scrollParent.scrollTop())),
                                (this.offsetParent[0] === this.document[0].body ||
                                    (this.offsetParent[0].tagName &&
                                        "html" === this.offsetParent[0].tagName.toLowerCase() &&
                                        y.ui.ie)) &&
                                (t = {
                                    top: 0,
                                    left: 0
                                }), {
                                    top: t.top +
                                        (parseInt(this.offsetParent.css("borderTopWidth"), 10) ||
                                            0),
                                    left: t.left +
                                        (parseInt(this.offsetParent.css("borderLeftWidth"), 10) ||
                                            0)
                                }
                            );
                        },
                        _getRelativeOffset: function() {
                            if ("relative" !== this.cssPosition)
                                return {
                                    top: 0,
                                    left: 0
                                };
                            var t = this.currentItem.position();
                            return {
                                top: t.top -
                                    (parseInt(this.helper.css("top"), 10) || 0) +
                                    this.scrollParent.scrollTop(),
                                left: t.left -
                                    (parseInt(this.helper.css("left"), 10) || 0) +
                                    this.scrollParent.scrollLeft()
                            };
                        },
                        _cacheMargins: function() {
                            this.margins = {
                                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                            };
                        },
                        _cacheHelperProportions: function() {
                            this.helperProportions = {
                                width: this.helper.outerWidth(),
                                height: this.helper.outerHeight()
                            };
                        },
                        _setContainment: function() {
                            var t,
                                e,
                                n,
                                i = this.options;
                            "parent" === i.containment &&
                                (i.containment = this.helper[0].parentNode),
                                ("document" !== i.containment && "window" !== i.containment) ||
                                (this.containment = [
                                    0 - this.offset.relative.left - this.offset.parent.left,
                                    0 - this.offset.relative.top - this.offset.parent.top,
                                    "document" === i.containment ?
                                    this.document.width() :
                                    this.window.width() -
                                    this.helperProportions.width -
                                    this.margins.left,
                                    ("document" === i.containment ?
                                        this.document.width() :
                                        this.window.height() ||
                                        this.document[0].body.parentNode.scrollHeight) -
                                    this.helperProportions.height -
                                    this.margins.top
                                ]),
                                /^(document|window|parent)$/.test(i.containment) ||
                                ((t = y(i.containment)[0]),
                                    (e = y(i.containment).offset()),
                                    (n = "hidden" !== y(t).css("overflow")),
                                    (this.containment = [
                                        e.left +
                                        (parseInt(y(t).css("borderLeftWidth"), 10) || 0) +
                                        (parseInt(y(t).css("paddingLeft"), 10) || 0) -
                                        this.margins.left,
                                        e.top +
                                        (parseInt(y(t).css("borderTopWidth"), 10) || 0) +
                                        (parseInt(y(t).css("paddingTop"), 10) || 0) -
                                        this.margins.top,
                                        e.left +
                                        (n ?
                                            Math.max(t.scrollWidth, t.offsetWidth) :
                                            t.offsetWidth) -
                                        (parseInt(y(t).css("borderLeftWidth"), 10) || 0) -
                                        (parseInt(y(t).css("paddingRight"), 10) || 0) -
                                        this.helperProportions.width -
                                        this.margins.left,
                                        e.top +
                                        (n ?
                                            Math.max(t.scrollHeight, t.offsetHeight) :
                                            t.offsetHeight) -
                                        (parseInt(y(t).css("borderTopWidth"), 10) || 0) -
                                        (parseInt(y(t).css("paddingBottom"), 10) || 0) -
                                        this.helperProportions.height -
                                        this.margins.top
                                    ]));
                        },
                        _convertPositionTo: function(t, e) {
                            e = e || this.position;
                            var n = "absolute" === t ? 1 : -1,
                                i =
                                "absolute" !== this.cssPosition ||
                                (this.scrollParent[0] !== this.document[0] &&
                                    y.contains(this.scrollParent[0], this.offsetParent[0])) ?
                                this.scrollParent :
                                this.offsetParent,
                                o = /(html|body)/i.test(i[0].tagName);
                            return {
                                top: e.top +
                                    this.offset.relative.top * n +
                                    this.offset.parent.top * n -
                                    ("fixed" === this.cssPosition ?
                                        -this.scrollParent.scrollTop() :
                                        o ?
                                        0 :
                                        i.scrollTop()) *
                                    n,
                                left: e.left +
                                    this.offset.relative.left * n +
                                    this.offset.parent.left * n -
                                    ("fixed" === this.cssPosition ?
                                        -this.scrollParent.scrollLeft() :
                                        o ?
                                        0 :
                                        i.scrollLeft()) *
                                    n
                            };
                        },
                        _generatePosition: function(t) {
                            var e,
                                n,
                                i = this.options,
                                o = t.pageX,
                                r = t.pageY,
                                s =
                                "absolute" !== this.cssPosition ||
                                (this.scrollParent[0] !== this.document[0] &&
                                    y.contains(this.scrollParent[0], this.offsetParent[0])) ?
                                this.scrollParent :
                                this.offsetParent,
                                a = /(html|body)/i.test(s[0].tagName);
                            return (
                                "relative" !== this.cssPosition ||
                                (this.scrollParent[0] !== this.document[0] &&
                                    this.scrollParent[0] !== this.offsetParent[0]) ||
                                (this.offset.relative = this._getRelativeOffset()),
                                this.originalPosition &&
                                (this.containment &&
                                    (t.pageX - this.offset.click.left < this.containment[0] &&
                                        (o = this.containment[0] + this.offset.click.left),
                                        t.pageY - this.offset.click.top < this.containment[1] &&
                                        (r = this.containment[1] + this.offset.click.top),
                                        t.pageX - this.offset.click.left > this.containment[2] &&
                                        (o = this.containment[2] + this.offset.click.left),
                                        t.pageY - this.offset.click.top > this.containment[3] &&
                                        (r = this.containment[3] + this.offset.click.top)),
                                    i.grid &&
                                    ((e =
                                            this.originalPageY +
                                            Math.round((r - this.originalPageY) / i.grid[1]) *
                                            i.grid[1]),
                                        (r = this.containment ?
                                            e - this.offset.click.top >= this.containment[1] &&
                                            e - this.offset.click.top <= this.containment[3] ?
                                            e :
                                            e - this.offset.click.top >= this.containment[1] ?
                                            e - i.grid[1] :
                                            e + i.grid[1] :
                                            e),
                                        (n =
                                            this.originalPageX +
                                            Math.round((o - this.originalPageX) / i.grid[0]) *
                                            i.grid[0]),
                                        (o = this.containment ?
                                            n - this.offset.click.left >= this.containment[0] &&
                                            n - this.offset.click.left <= this.containment[2] ?
                                            n :
                                            n - this.offset.click.left >= this.containment[0] ?
                                            n - i.grid[0] :
                                            n + i.grid[0] :
                                            n))), {
                                    top: r -
                                        this.offset.click.top -
                                        this.offset.relative.top -
                                        this.offset.parent.top +
                                        ("fixed" === this.cssPosition ?
                                            -this.scrollParent.scrollTop() :
                                            a ?
                                            0 :
                                            s.scrollTop()),
                                    left: o -
                                        this.offset.click.left -
                                        this.offset.relative.left -
                                        this.offset.parent.left +
                                        ("fixed" === this.cssPosition ?
                                            -this.scrollParent.scrollLeft() :
                                            a ?
                                            0 :
                                            s.scrollLeft())
                                }
                            );
                        },
                        _rearrange: function(t, e, n, i) {
                            n
                                ?
                                n[0].appendChild(this.placeholder[0]) :
                                e.item[0].parentNode.insertBefore(
                                    this.placeholder[0],
                                    "down" === this.direction ?
                                    e.item[0] :
                                    e.item[0].nextSibling
                                ),
                                (this.counter = this.counter ? ++this.counter : 1);
                            var o = this.counter;
                            this._delay(function() {
                                o === this.counter && this.refreshPositions(!i);
                            });
                        },
                        _clear: function(t, e) {
                            this.reverting = !1;
                            var n,
                                i = [];
                            if (
                                (!this._noFinalSort &&
                                    this.currentItem.parent().length &&
                                    this.placeholder.before(this.currentItem),
                                    (this._noFinalSort = null),
                                    this.helper[0] === this.currentItem[0])
                            ) {
                                for (n in this._storedCSS)
                                    ("auto" !== this._storedCSS[n] &&
                                        "static" !== this._storedCSS[n]) ||
                                    (this._storedCSS[n] = "");
                                this.currentItem
                                    .css(this._storedCSS)
                                    .removeClass("ui-sortable-helper");
                            } else this.currentItem.show();

                            function o(e, n, i) {
                                return function(t) {
                                    i._trigger(e, t, n._uiHash(n));
                                };
                            }
                            for (
                                this.fromOutside &&
                                !e &&
                                i.push(function(t) {
                                    this._trigger("receive", t, this._uiHash(this.fromOutside));
                                }),
                                (!this.fromOutside &&
                                    this.domPosition.prev ===
                                    this.currentItem.prev().not(".ui-sortable-helper")[0] &&
                                    this.domPosition.parent === this.currentItem.parent()[0]) ||
                                e ||
                                i.push(function(t) {
                                    this._trigger("update", t, this._uiHash());
                                }),
                                this !== this.currentContainer &&
                                (e ||
                                    (i.push(function(t) {
                                            this._trigger("remove", t, this._uiHash());
                                        }),
                                        i.push(
                                            function(e) {
                                                return function(t) {
                                                    e._trigger("receive", t, this._uiHash(this));
                                                };
                                            }.call(this, this.currentContainer)
                                        ),
                                        i.push(
                                            function(e) {
                                                return function(t) {
                                                    e._trigger("update", t, this._uiHash(this));
                                                };
                                            }.call(this, this.currentContainer)
                                        ))),
                                n = this.containers.length - 1; 0 <= n; n--
                            )
                                e || i.push(o("deactivate", this, this.containers[n])),
                                this.containers[n].containerCache.over &&
                                (i.push(o("out", this, this.containers[n])),
                                    (this.containers[n].containerCache.over = 0));
                            if (
                                (this.storedCursor &&
                                    (this.document.find("body").css("cursor", this.storedCursor),
                                        this.storedStylesheet.remove()),
                                    this._storedOpacity &&
                                    this.helper.css("opacity", this._storedOpacity),
                                    this._storedZIndex &&
                                    this.helper.css(
                                        "zIndex",
                                        "auto" === this._storedZIndex ? "" : this._storedZIndex
                                    ),
                                    (this.dragging = !1),
                                    e || this._trigger("beforeStop", t, this._uiHash()),
                                    this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
                                    this.cancelHelperRemoval ||
                                    (this.helper[0] !== this.currentItem[0] &&
                                        this.helper.remove(),
                                        (this.helper = null)), !e)
                            ) {
                                for (n = 0; n < i.length; n++) i[n].call(this, t);
                                this._trigger("stop", t, this._uiHash());
                            }
                            return (this.fromOutside = !1), !this.cancelHelperRemoval;
                        },
                        _trigger: function() {
                            !1 === y.Widget.prototype._trigger.apply(this, arguments) &&
                                this.cancel();
                        },
                        _uiHash: function(t) {
                            var e = t || this;
                            return {
                                helper: e.helper,
                                placeholder: e.placeholder || y([]),
                                position: e.position,
                                originalPosition: e.originalPosition,
                                offset: e.positionAbs,
                                item: e.currentItem,
                                sender: t ? t.element : null
                            };
                        }
                    });
                var u,
                    h,
                    p,
                    d,
                    g,
                    m,
                    v,
                    b,
                    _,
                    w,
                    x,
                    C,
                    E,
                    T,
                    S,
                    k,
                    D,
                    I,
                    P,
                    N,
                    A = "ui-effects-",
                    O = y;

                function L(t, e, n) {
                    var i = b[e.type] || {};
                    return null == t ?
                        n || !e.def ?
                        null :
                        e.def :
                        ((t = i.floor ? ~~t : parseFloat(t)),
                            isNaN(t) ?
                            e.def :
                            i.mod ?
                            (t + i.mod) % i.mod :
                            t < 0 ?
                            0 :
                            i.max < t ?
                            i.max :
                            t);
                }

                function j(s) {
                    var a = m(),
                        l = (a._rgba = []);
                    return (
                        (s = s.toLowerCase()),
                        x(g, function(t, e) {
                            var n,
                                i = e.re.exec(s),
                                o = i && e.parse(i),
                                r = e.space || "rgba";
                            if (o)
                                return (
                                    (n = a[r](o)),
                                    (a[v[r].cache] = n[v[r].cache]),
                                    (l = a._rgba = n._rgba), !1
                                );
                        }),
                        l.length ?
                        ("0,0,0,0" === l.join() && u.extend(l, p.transparent), a) :
                        p[s]
                    );
                }

                function H(t, e, n) {
                    return 6 * (n = (n + 1) % 1) < 1 ?
                        t + (e - t) * n * 6 :
                        2 * n < 1 ?
                        e :
                        3 * n < 2 ?
                        t + (e - t) * (2 / 3 - n) * 6 :
                        t;
                }

                function M(t) {
                    var e,
                        n,
                        i = t.ownerDocument.defaultView ?
                        t.ownerDocument.defaultView.getComputedStyle(t, null) :
                        t.currentStyle,
                        o = {};
                    if (i && i.length && i[0] && i[i[0]])
                        for (n = i.length; n--;)
                            "string" == typeof i[(e = i[n])] && (o[y.camelCase(e)] = i[e]);
                    else
                        for (e in i) "string" == typeof i[e] && (o[e] = i[e]);
                    return o;
                }

                function R(t, e, n, i) {
                    return (
                        y.isPlainObject(t) && (t = (e = t).effect),
                        (t = {
                            effect: t
                        }),
                        null == e && (e = {}),
                        y.isFunction(e) && ((i = e), (n = null), (e = {})),
                        ("number" != typeof e && !y.fx.speeds[e]) ||
                        ((i = n), (n = e), (e = {})),
                        y.isFunction(n) && ((i = n), (n = null)),
                        e && y.extend(t, e),
                        (n = n || e.duration),
                        (t.duration = y.fx.off ?
                            0 :
                            "number" == typeof n ?
                            n :
                            n in y.fx.speeds ?
                            y.fx.speeds[n] :
                            y.fx.speeds._default),
                        (t.complete = i || e.complete),
                        t
                    );
                }

                function q(t) {
                    return (!(t && "number" != typeof t && !y.fx.speeds[t]) ||
                        ("string" == typeof t && !y.effects.effect[t]) ||
                        !!y.isFunction(t) ||
                        ("object" == typeof t && !t.effect)
                    );
                }
                (y.effects = {
                    effect: {}
                }),
                (d = /^([\-+])=\s*(\d+\.?\d*)/),
                (g = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [t[1], t[2], t[3], t[4]];
                        }
                    },
                    {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
                        }
                    },
                    {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(t) {
                            return [
                                parseInt(t[1], 16),
                                parseInt(t[2], 16),
                                parseInt(t[3], 16)
                            ];
                        }
                    },
                    {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(t) {
                            return [
                                parseInt(t[1] + t[1], 16),
                                parseInt(t[2] + t[2], 16),
                                parseInt(t[3] + t[3], 16)
                            ];
                        }
                    },
                    {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(t) {
                            return [t[1], t[2] / 100, t[3] / 100, t[4]];
                        }
                    }
                ]),
                (m = (u = O).Color = function(t, e, n, i) {
                    return new u.Color.fn.parse(t, e, n, i);
                }),
                (v = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                }),
                (b = {
                    byte: {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                }),
                (_ = m.support = {}),
                (w = u("<p>")[0]),
                (x = u.each),
                (w.style.cssText = "background-color:rgba(1,1,1,.5)"),
                (_.rgba = -1 < w.style.backgroundColor.indexOf("rgba")),
                x(v, function(t, e) {
                        (e.cache = "_" + t),
                        (e.props.alpha = {
                            idx: 3,
                            type: "percent",
                            def: 1
                        });
                    }),
                    (m.fn = u.extend(m.prototype, {
                        parse: function(o, t, e, n) {
                            if (o === h) return (this._rgba = [null, null, null, null]), this;
                            (o.jquery || o.nodeType) && ((o = u(o).css(t)), (t = h));
                            var r = this,
                                i = u.type(o),
                                s = (this._rgba = []);
                            return (
                                t !== h && ((o = [o, t, e, n]), (i = "array")),
                                "string" === i ?
                                this.parse(j(o) || p._default) :
                                "array" === i ?
                                (x(v.rgba.props, function(t, e) {
                                        s[e.idx] = L(o[e.idx], e);
                                    }),
                                    this) :
                                "object" === i ?
                                (x(
                                        v,
                                        o instanceof m ?
                                        function(t, e) {
                                            o[e.cache] && (r[e.cache] = o[e.cache].slice());
                                        } :
                                        function(t, n) {
                                            var i = n.cache;
                                            x(n.props, function(t, e) {
                                                    if (!r[i] && n.to) {
                                                        if ("alpha" === t || null == o[t]) return;
                                                        r[i] = n.to(r._rgba);
                                                    }
                                                    r[i][e.idx] = L(o[t], e, !0);
                                                }),
                                                r[i] &&
                                                u.inArray(null, r[i].slice(0, 3)) < 0 &&
                                                ((r[i][3] = 1),
                                                    n.from && (r._rgba = n.from(r[i])));
                                        }
                                    ),
                                    this) :
                                void 0
                            );
                        },
                        is: function(t) {
                            var o = m(t),
                                r = !0,
                                s = this;
                            return (
                                x(v, function(t, e) {
                                    var n,
                                        i = o[e.cache];
                                    return (
                                        i &&
                                        ((n = s[e.cache] || (e.to && e.to(s._rgba)) || []),
                                            x(e.props, function(t, e) {
                                                if (null != i[e.idx])
                                                    return (r = i[e.idx] === n[e.idx]);
                                            })),
                                        r
                                    );
                                }),
                                r
                            );
                        },
                        _space: function() {
                            var n = [],
                                i = this;
                            return (
                                x(v, function(t, e) {
                                    i[e.cache] && n.push(t);
                                }),
                                n.pop()
                            );
                        },
                        transition: function(t, s) {
                            var a = m(t),
                                e = a._space(),
                                n = v[e],
                                i = 0 === this.alpha() ? m("transparent") : this,
                                l = i[n.cache] || n.to(i._rgba),
                                c = l.slice();
                            return (
                                (a = a[n.cache]),
                                x(n.props, function(t, e) {
                                    var n = e.idx,
                                        i = l[n],
                                        o = a[n],
                                        r = b[e.type] || {};
                                    null !== o &&
                                        (null === i ?
                                            (c[n] = o) :
                                            (r.mod &&
                                                (o - i > r.mod / 2 ?
                                                    (i += r.mod) :
                                                    i - o > r.mod / 2 && (i -= r.mod)),
                                                (c[n] = L((o - i) * s + i, e))));
                                }),
                                this[e](c)
                            );
                        },
                        blend: function(t) {
                            if (1 === this._rgba[3]) return this;
                            var e = this._rgba.slice(),
                                n = e.pop(),
                                i = m(t)._rgba;
                            return m(
                                u.map(e, function(t, e) {
                                    return (1 - n) * i[e] + n * t;
                                })
                            );
                        },
                        toRgbaString: function() {
                            var t = "rgba(",
                                e = u.map(this._rgba, function(t, e) {
                                    return null == t ? (2 < e ? 1 : 0) : t;
                                });
                            return 1 === e[3] && (e.pop(), (t = "rgb(")), t + e.join() + ")";
                        },
                        toHslaString: function() {
                            var t = "hsla(",
                                e = u.map(this.hsla(), function(t, e) {
                                    return (
                                        null == t && (t = 2 < e ? 1 : 0),
                                        e && e < 3 && (t = Math.round(100 * t) + "%"),
                                        t
                                    );
                                });
                            return 1 === e[3] && (e.pop(), (t = "hsl(")), t + e.join() + ")";
                        },
                        toHexString: function(t) {
                            var e = this._rgba.slice(),
                                n = e.pop();
                            return (
                                t && e.push(~~(255 * n)),
                                "#" +
                                u
                                .map(e, function(t) {
                                    return 1 === (t = (t || 0).toString(16)).length ?
                                        "0" + t :
                                        t;
                                })
                                .join("")
                            );
                        },
                        toString: function() {
                            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
                        }
                    })),
                    (m.fn.parse.prototype = m.fn),
                    (v.hsla.to = function(t) {
                        if (null == t[0] || null == t[1] || null == t[2])
                            return [null, null, null, t[3]];
                        var e,
                            n,
                            i = t[0] / 255,
                            o = t[1] / 255,
                            r = t[2] / 255,
                            s = t[3],
                            a = Math.max(i, o, r),
                            l = Math.min(i, o, r),
                            c = a - l,
                            u = a + l,
                            h = 0.5 * u;
                        return (
                            (e =
                                l === a ?
                                0 :
                                i === a ?
                                (60 * (o - r)) / c + 360 :
                                o === a ?
                                (60 * (r - i)) / c + 120 :
                                (60 * (i - o)) / c + 240),
                            (n = 0 == c ? 0 : h <= 0.5 ? c / u : c / (2 - u)), [Math.round(e) % 360, n, h, null == s ? 1 : s]
                        );
                    }),
                    (v.hsla.from = function(t) {
                        if (null == t[0] || null == t[1] || null == t[2])
                            return [null, null, null, t[3]];
                        var e = t[0] / 360,
                            n = t[1],
                            i = t[2],
                            o = t[3],
                            r = i <= 0.5 ? i * (1 + n) : i + n - i * n,
                            s = 2 * i - r;
                        return [
                            Math.round(255 * H(s, r, e + 1 / 3)),
                            Math.round(255 * H(s, r, e)),
                            Math.round(255 * H(s, r, e - 1 / 3)),
                            o
                        ];
                    }),
                    x(v, function(l, t) {
                        var n = t.props,
                            s = t.cache,
                            a = t.to,
                            c = t.from;
                        (m.fn[l] = function(t) {
                            if ((a && !this[s] && (this[s] = a(this._rgba)), t === h))
                                return this[s].slice();
                            var e,
                                i = u.type(t),
                                o = "array" === i || "object" === i ? t : arguments,
                                r = this[s].slice();
                            return (
                                x(n, function(t, e) {
                                    var n = o["object" === i ? t : e.idx];
                                    null == n && (n = r[e.idx]), (r[e.idx] = L(n, e));
                                }),
                                c ? (((e = m(c(r)))[s] = r), e) : m(r)
                            );
                        }),
                        x(n, function(s, a) {
                            m.fn[s] ||
                                (m.fn[s] = function(t) {
                                    var e,
                                        n = u.type(t),
                                        i = "alpha" === s ? (this._hsla ? "hsla" : "rgba") : l,
                                        o = this[i](),
                                        r = o[a.idx];
                                    return "undefined" === n ?
                                        r :
                                        ("function" === n &&
                                            ((t = t.call(this, r)), (n = u.type(t))),
                                            null == t && a.empty ?
                                            this :
                                            ("string" === n &&
                                                (e = d.exec(t)) &&
                                                (t =
                                                    r + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1)),
                                                (o[a.idx] = t),
                                                this[i](o)));
                                });
                        });
                    }),
                    (m.hook = function(t) {
                        var e = t.split(" ");
                        x(e, function(t, r) {
                            (u.cssHooks[r] = {
                                set: function(t, e) {
                                    var n,
                                        i,
                                        o = "";
                                    if (
                                        "transparent" !== e &&
                                        ("string" !== u.type(e) || (n = j(e)))
                                    ) {
                                        if (((e = m(n || e)), !_.rgba && 1 !== e._rgba[3])) {
                                            for (
                                                i = "backgroundColor" === r ? t.parentNode : t;
                                                ("" === o || "transparent" === o) && i && i.style;

                                            )
                                                try {
                                                    (o = u.css(i, "backgroundColor")), (i = i.parentNode);
                                                } catch (t) {}
                                            e = e.blend(o && "transparent" !== o ? o : "_default");
                                        }
                                        e = e.toRgbaString();
                                    }
                                    try {
                                        t.style[r] = e;
                                    } catch (t) {}
                                }
                            }),
                            (u.fx.step[r] = function(t) {
                                t.colorInit ||
                                    ((t.start = m(t.elem, r)),
                                        (t.end = m(t.end)),
                                        (t.colorInit = !0)),
                                    u.cssHooks[r].set(t.elem, t.start.transition(t.end, t.pos));
                            });
                        });
                    }),
                    m.hook(
                        "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"
                    ),
                    (u.cssHooks.borderColor = {
                        expand: function(n) {
                            var i = {};
                            return (
                                x(["Top", "Right", "Bottom", "Left"], function(t, e) {
                                    i["border" + e + "Color"] = n;
                                }),
                                i
                            );
                        }
                    }),
                    (p = u.Color.names = {
                        aqua: "#00ffff",
                        black: "#000000",
                        blue: "#0000ff",
                        fuchsia: "#ff00ff",
                        gray: "#808080",
                        green: "#008000",
                        lime: "#00ff00",
                        maroon: "#800000",
                        navy: "#000080",
                        olive: "#808000",
                        purple: "#800080",
                        red: "#ff0000",
                        silver: "#c0c0c0",
                        teal: "#008080",
                        white: "#ffffff",
                        yellow: "#ffff00",
                        transparent: [null, null, null, 0],
                        _default: "#ffffff"
                    }),
                    (S = ["add", "remove", "toggle"]),
                    (k = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    }),
                    y.each(
                        [
                            "borderLeftStyle",
                            "borderRightStyle",
                            "borderBottomStyle",
                            "borderTopStyle"
                        ],
                        function(t, e) {
                            y.fx.step[e] = function(t) {
                                (("none" !== t.end && !t.setAttr) ||
                                    (1 === t.pos && !t.setAttr)) &&
                                (O.style(t.elem, e, t.end), (t.setAttr = !0));
                            };
                        }
                    ),
                    y.fn.addBack ||
                    (y.fn.addBack = function(t) {
                        return this.add(
                            null == t ? this.prevObject : this.prevObject.filter(t)
                        );
                    }),
                    (y.effects.animateClass = function(o, t, e, n) {
                        var r = y.speed(t, e, n);
                        return this.queue(function() {
                            var t,
                                n = y(this),
                                e = n.attr("class") || "",
                                i = r.children ? n.find("*").addBack() : n;
                            (i = i.map(function() {
                                return {
                                    el: y(this),
                                    start: M(this)
                                };
                            })),
                            (t = function() {
                                y.each(S, function(t, e) {
                                    o[e] && n[e + "Class"](o[e]);
                                });
                            })(),
                            (i = i.map(function() {
                                return (
                                    (this.end = M(this.el[0])),
                                    (this.diff = (function(t, e) {
                                        var n,
                                            i,
                                            o = {};
                                        for (n in e)
                                            (i = e[n]),
                                            t[n] !== i &&
                                            (k[n] ||
                                                (!y.fx.step[n] && isNaN(parseFloat(i))) ||
                                                (o[n] = i));
                                        return o;
                                    })(this.start, this.end)),
                                    this
                                );
                            })),
                            n.attr("class", e),
                                (i = i.map(function() {
                                    var t = this,
                                        e = y.Deferred(),
                                        n = y.extend({}, r, {
                                            queue: !1,
                                            complete: function() {
                                                e.resolve(t);
                                            }
                                        });
                                    return this.el.animate(this.diff, n), e.promise();
                                })),
                                y.when.apply(y, i.get()).done(function() {
                                    t(),
                                        y.each(arguments, function() {
                                            var e = this.el;
                                            y.each(this.diff, function(t) {
                                                e.css(t, "");
                                            });
                                        }),
                                        r.complete.call(n[0]);
                                });
                        });
                    }),
                    y.fn.extend({
                        addClass:
                            ((T = y.fn.addClass),
                                function(t, e, n, i) {
                                    return e ?
                                        y.effects.animateClass.call(
                                            this, {
                                                add: t
                                            },
                                            e,
                                            n,
                                            i
                                        ) :
                                        T.apply(this, arguments);
                                }),
                        removeClass:
                            ((E = y.fn.removeClass),
                                function(t, e, n, i) {
                                    return 1 < arguments.length ?
                                        y.effects.animateClass.call(
                                            this, {
                                                remove: t
                                            },
                                            e,
                                            n,
                                            i
                                        ) :
                                        E.apply(this, arguments);
                                }),
                        toggleClass:
                            ((C = y.fn.toggleClass),
                                function(t, e, n, i, o) {
                                    return "boolean" == typeof e || void 0 === e ?
                                        n ?
                                        y.effects.animateClass.call(
                                            this,
                                            e ?
                                            {
                                                add: t
                                            } :
                                            {
                                                remove: t
                                            },
                                            n,
                                            i,
                                            o
                                        ) :
                                        C.apply(this, arguments) :
                                        y.effects.animateClass.call(
                                            this, {
                                                toggle: t
                                            },
                                            e,
                                            n,
                                            i
                                        );
                                }),
                        switchClass: function(t, e, n, i, o) {
                            return y.effects.animateClass.call(
                                this, {
                                    add: e,
                                    remove: t
                                },
                                n,
                                i,
                                o
                            );
                        }
                    }),
                    y.extend(y.effects, {
                        version: "1.11.4",
                        save: function(t, e) {
                            for (var n = 0; n < e.length; n++)
                                null !== e[n] && t.data(A + e[n], t[0].style[e[n]]);
                        },
                        restore: function(t, e) {
                            var n, i;
                            for (i = 0; i < e.length; i++)
                                null !== e[i] &&
                                (void 0 === (n = t.data(A + e[i])) && (n = ""),
                                    t.css(e[i], n));
                        },
                        setMode: function(t, e) {
                            return (
                                "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                            );
                        },
                        getBaseline: function(t, e) {
                            var n, i;
                            switch (t[0]) {
                                case "top":
                                    n = 0;
                                    break;
                                case "middle":
                                    n = 0.5;
                                    break;
                                case "bottom":
                                    n = 1;
                                    break;
                                default:
                                    n = t[0] / e.height;
                            }
                            switch (t[1]) {
                                case "left":
                                    i = 0;
                                    break;
                                case "center":
                                    i = 0.5;
                                    break;
                                case "right":
                                    i = 1;
                                    break;
                                default:
                                    i = t[1] / e.width;
                            }
                            return {
                                x: i,
                                y: n
                            };
                        },
                        createWrapper: function(n) {
                            if (n.parent().is(".ui-effects-wrapper")) return n.parent();
                            var i = {
                                    width: n.outerWidth(!0),
                                    height: n.outerHeight(!0),
                                    float: n.css("float")
                                },
                                t = y("<div></div>")
                                .addClass("ui-effects-wrapper")
                                .css({
                                    fontSize: "100%",
                                    background: "transparent",
                                    border: "none",
                                    margin: 0,
                                    padding: 0
                                }),
                                e = {
                                    width: n.width(),
                                    height: n.height()
                                },
                                o = document.activeElement;
                            try {
                                o.id;
                            } catch (t) {
                                o = document.body;
                            }
                            return (
                                n.wrap(t),
                                (n[0] !== o && !y.contains(n[0], o)) || y(o).focus(),
                                (t = n.parent()),
                                "static" === n.css("position") ?
                                (t.css({
                                        position: "relative"
                                    }),
                                    n.css({
                                        position: "relative"
                                    })) :
                                (y.extend(i, {
                                        position: n.css("position"),
                                        zIndex: n.css("z-index")
                                    }),
                                    y.each(["top", "left", "bottom", "right"], function(t, e) {
                                        (i[e] = n.css(e)),
                                        isNaN(parseInt(i[e], 10)) && (i[e] = "auto");
                                    }),
                                    n.css({
                                        position: "relative",
                                        top: 0,
                                        left: 0,
                                        right: "auto",
                                        bottom: "auto"
                                    })),
                                n.css(e),
                                t.css(i).show()
                            );
                        },
                        removeWrapper: function(t) {
                            var e = document.activeElement;
                            return (
                                t.parent().is(".ui-effects-wrapper") &&
                                (t.parent().replaceWith(t),
                                    (t[0] !== e && !y.contains(t[0], e)) || y(e).focus()),
                                t
                            );
                        },
                        setTransition: function(i, t, o, r) {
                            return (
                                (r = r || {}),
                                y.each(t, function(t, e) {
                                    var n = i.cssUnit(e);
                                    0 < n[0] && (r[e] = n[0] * o + n[1]);
                                }),
                                r
                            );
                        }
                    }),
                    y.fn.extend({
                        effect: function() {
                            var r = R.apply(this, arguments),
                                t = r.mode,
                                e = r.queue,
                                s = y.effects.effect[r.effect];
                            if (y.fx.off || !s)
                                return t ?
                                    this[t](r.duration, r.complete) :
                                    this.each(function() {
                                        r.complete && r.complete.call(this);
                                    });

                            function n(t) {
                                var e = y(this),
                                    n = r.complete,
                                    i = r.mode;

                                function o() {
                                    y.isFunction(n) && n.call(e[0]), y.isFunction(t) && t();
                                }
                                (e.is(":hidden") ?
                                    "hide" === i :
                                    "show" === i) ?
                                (e[i](), o()) :
                                s.call(e[0], r, o);
                            }
                            return !1 === e ? this.each(n) : this.queue(e || "fx", n);
                        },
                        show:
                            ((P = y.fn.show),
                                function(t) {
                                    if (q(t)) return P.apply(this, arguments);
                                    var e = R.apply(this, arguments);
                                    return (e.mode = "show"), this.effect.call(this, e);
                                }),
                        hide:
                            ((I = y.fn.hide),
                                function(t) {
                                    if (q(t)) return I.apply(this, arguments);
                                    var e = R.apply(this, arguments);
                                    return (e.mode = "hide"), this.effect.call(this, e);
                                }),
                        toggle:
                            ((D = y.fn.toggle),
                                function(t) {
                                    if (q(t) || "boolean" == typeof t)
                                        return D.apply(this, arguments);
                                    var e = R.apply(this, arguments);
                                    return (e.mode = "toggle"), this.effect.call(this, e);
                                }),
                        cssUnit: function(t) {
                            var n = this.css(t),
                                i = [];
                            return (
                                y.each(["em", "px", "%", "pt"], function(t, e) {
                                    0 < n.indexOf(e) && (i = [parseFloat(n), e]);
                                }),
                                i
                            );
                        }
                    }),
                    (N = {}),
                    y.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, t) {
                        N[t] = function(t) {
                            return Math.pow(t, e + 2);
                        };
                    }),
                    y.extend(N, {
                        Sine: function(t) {
                            return 1 - Math.cos((t * Math.PI) / 2);
                        },
                        Circ: function(t) {
                            return 1 - Math.sqrt(1 - t * t);
                        },
                        Elastic: function(t) {
                            return 0 === t || 1 === t ?
                                t :
                                -Math.pow(2, 8 * (t - 1)) *
                                Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
                        },
                        Back: function(t) {
                            return t * t * (3 * t - 2);
                        },
                        Bounce: function(t) {
                            for (var e, n = 4; t < ((e = Math.pow(2, --n)) - 1) / 11;);
                            return (
                                1 / Math.pow(4, 3 - n) -
                                7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                            );
                        }
                    }),
                    y.each(N, function(t, e) {
                        (y.easing["easeIn" + t] = e),
                        (y.easing["easeOut" + t] = function(t) {
                            return 1 - e(1 - t);
                        }),
                        (y.easing["easeInOut" + t] = function(t) {
                            return t < 0.5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2;
                        });
                    });
                y.effects;
            }),
            (function(t, e) {
                "object" == typeof exports && "undefined" != typeof module ?
                    (module.exports = e()) :
                    "function" == typeof define && define.amd ?
                    define(e) :
                    (t.Popper = e());
            })(this, function() {
                "use strict";
                for (
                    var t =
                        "undefined" != typeof window && "undefined" != typeof document,
                        e = ["Edge", "Trident", "Firefox"],
                        n = 0,
                        i = 0; i < e.length; i += 1
                )
                    if (t && 0 <= navigator.userAgent.indexOf(e[i])) {
                        n = 1;
                        break;
                    }
                var r =
                    t && window.Promise ?
                    function(t) {
                        var e = !1;
                        return function() {
                            e ||
                                ((e = !0),
                                    window.Promise.resolve().then(function() {
                                        (e = !1), t();
                                    }));
                        };
                    } :
                    function(t) {
                        var e = !1;
                        return function() {
                            e ||
                                ((e = !0),
                                    setTimeout(function() {
                                        (e = !1), t();
                                    }, n));
                        };
                    };

                function s(t) {
                    return t && "[object Function]" === {}.toString.call(t);
                }

                function _(t, e) {
                    if (1 !== t.nodeType) return [];
                    var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
                    return e ? n[e] : n;
                }

                function d(t) {
                    return "HTML" === t.nodeName ? t : t.parentNode || t.host;
                }

                function g(t) {
                    if (!t) return document.body;
                    switch (t.nodeName) {
                        case "HTML":
                        case "BODY":
                            return t.ownerDocument.body;
                        case "#document":
                            return t.body;
                    }
                    var e = _(t),
                        n = e.overflow,
                        i = e.overflowX,
                        o = e.overflowY;
                    return /(auto|scroll|overlay)/.test(n + o + i) ? t : g(d(t));
                }
                var o = t && !(!window.MSInputMethodContext || !document.documentMode),
                    a = t && /MSIE 10/.test(navigator.userAgent);

                function m(t) {
                    return 11 === t ? o : 10 === t ? a : o || a;
                }

                function y(t) {
                    if (!t) return document.documentElement;
                    for (
                        var e = m(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;

                    )
                        n = (t = t.nextElementSibling).offsetParent;
                    var i = n && n.nodeName;
                    return i && "BODY" !== i && "HTML" !== i ?
                        -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) &&
                        "static" === _(n, "position") ?
                        y(n) :
                        n :
                        t ?
                        t.ownerDocument.documentElement :
                        document.documentElement;
                }

                function l(t) {
                    return null !== t.parentNode ? l(t.parentNode) : t;
                }

                function v(t, e) {
                    if (!(t && t.nodeType && e && e.nodeType))
                        return document.documentElement;
                    var n =
                        t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
                        i = n ? t : e,
                        o = n ? e : t,
                        r = document.createRange();
                    r.setStart(i, 0), r.setEnd(o, 0);
                    var s = r.commonAncestorContainer;
                    if ((t !== s && e !== s) || i.contains(o))
                        return (function(t) {
                                var e = t.nodeName;
                                return (
                                    "BODY" !== e && ("HTML" === e || y(t.firstElementChild) === t)
                                );
                            })(s) ?
                            s :
                            y(s);
                    var a = l(t);
                    return a.host ? v(a.host, e) : v(t, l(e).host);
                }

                function b(t, e) {
                    var n =
                        "top" === (1 < arguments.length && void 0 !== e ? e : "top") ?
                        "scrollTop" :
                        "scrollLeft",
                        i = t.nodeName;
                    if ("BODY" !== i && "HTML" !== i) return t[n];
                    var o = t.ownerDocument.documentElement;
                    return (t.ownerDocument.scrollingElement || o)[n];
                }

                function h(t, e) {
                    var n = "x" === e ? "Left" : "Top",
                        i = "Left" == n ? "Right" : "Bottom";
                    return (
                        parseFloat(t["border" + n + "Width"], 10) +
                        parseFloat(t["border" + i + "Width"], 10)
                    );
                }

                function c(t, e, n, i) {
                    return Math.max(
                        e["offset" + t],
                        e["scroll" + t],
                        n["client" + t],
                        n["offset" + t],
                        n["scroll" + t],
                        m(10) ?
                        parseInt(n["offset" + t]) +
                        parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) +
                        parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) :
                        0
                    );
                }

                function w(t) {
                    var e = t.body,
                        n = t.documentElement,
                        i = m(10) && getComputedStyle(n);
                    return {
                        height: c("Height", e, n, i),
                        width: c("Width", e, n, i)
                    };
                }
                var u = function(t, e, n) {
                    return e && f(t.prototype, e), n && f(t, n), t;
                };

                function f(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                            Object.defineProperty(t, i.key, i);
                    }
                }

                function x(t, e, n) {
                    return (
                        e in t ?
                        Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) :
                        (t[e] = n),
                        t
                    );
                }
                var C =
                    Object.assign ||
                    function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var i in n)
                                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                        }
                        return t;
                    };

                function E(t) {
                    return C({}, t, {
                        right: t.left + t.width,
                        bottom: t.top + t.height
                    });
                }

                function T(t) {
                    var e = {};
                    try {
                        if (m(10)) {
                            e = t.getBoundingClientRect();
                            var n = b(t, "top"),
                                i = b(t, "left");
                            (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
                        } else e = t.getBoundingClientRect();
                    } catch (t) {}
                    var o = {
                            left: e.left,
                            top: e.top,
                            width: e.right - e.left,
                            height: e.bottom - e.top
                        },
                        r = "HTML" === t.nodeName ? w(t.ownerDocument) : {},
                        s = r.width || t.clientWidth || o.right - o.left,
                        a = r.height || t.clientHeight || o.bottom - o.top,
                        l = t.offsetWidth - s,
                        c = t.offsetHeight - a;
                    if (l || c) {
                        var u = _(t);
                        (l -= h(u, "x")), (c -= h(u, "y")), (o.width -= l), (o.height -= c);
                    }
                    return E(o);
                }

                function S(t, e, n) {
                    var i = 2 < arguments.length && void 0 !== n && n,
                        o = m(10),
                        r = "HTML" === e.nodeName,
                        s = T(t),
                        a = T(e),
                        l = g(t),
                        c = _(e),
                        u = parseFloat(c.borderTopWidth, 10),
                        h = parseFloat(c.borderLeftWidth, 10);
                    i &&
                        r &&
                        ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
                    var f = E({
                        top: s.top - a.top - u,
                        left: s.left - a.left - h,
                        width: s.width,
                        height: s.height
                    });
                    if (((f.marginTop = 0), (f.marginLeft = 0), !o && r)) {
                        var p = parseFloat(c.marginTop, 10),
                            d = parseFloat(c.marginLeft, 10);
                        (f.top -= u - p),
                        (f.bottom -= u - p),
                        (f.left -= h - d),
                        (f.right -= h - d),
                        (f.marginTop = p),
                        (f.marginLeft = d);
                    }
                    return (
                        (o && !i ? e.contains(l) : e === l && "BODY" !== l.nodeName) &&
                        (f = (function(t, e, n) {
                            var i = 2 < arguments.length && void 0 !== n && n,
                                o = b(e, "top"),
                                r = b(e, "left"),
                                s = i ? -1 : 1;
                            return (
                                (t.top += o * s),
                                (t.bottom += o * s),
                                (t.left += r * s),
                                (t.right += r * s),
                                t
                            );
                        })(f, e)),
                        f
                    );
                }

                function k(t) {
                    if (!t || !t.parentElement || m()) return document.documentElement;
                    for (var e = t.parentElement; e && "none" === _(e, "transform");)
                        e = e.parentElement;
                    return e || document.documentElement;
                }

                function p(t, e, n, i, o) {
                    var r = 4 < arguments.length && void 0 !== o && o,
                        s = {
                            top: 0,
                            left: 0
                        },
                        a = r ? k(t) : v(t, e);
                    if ("viewport" === i)
                        s = (function(t, e) {
                            var n = 1 < arguments.length && void 0 !== e && e,
                                i = t.ownerDocument.documentElement,
                                o = S(t, i),
                                r = Math.max(i.clientWidth, window.innerWidth || 0),
                                s = Math.max(i.clientHeight, window.innerHeight || 0),
                                a = n ? 0 : b(i),
                                l = n ? 0 : b(i, "left");
                            return E({
                                top: a - o.top + o.marginTop,
                                left: l - o.left + o.marginLeft,
                                width: r,
                                height: s
                            });
                        })(a, r);
                    else {
                        var l = void 0;
                        "scrollParent" === i
                            ?
                            "BODY" === (l = g(d(e))).nodeName &&
                            (l = t.ownerDocument.documentElement) :
                            (l = "window" === i ? t.ownerDocument.documentElement : i);
                        var c = S(l, a, r);
                        if (
                            "HTML" !== l.nodeName ||
                            (function t(e) {
                                var n = e.nodeName;
                                if ("BODY" === n || "HTML" === n) return !1;
                                if ("fixed" === _(e, "position")) return !0;
                                var i = d(e);
                                return !!i && t(i);
                            })(a)
                        )
                            s = c;
                        else {
                            var u = w(t.ownerDocument),
                                h = u.height,
                                f = u.width;
                            (s.top += c.top - c.marginTop),
                            (s.bottom = h + c.top),
                            (s.left += c.left - c.marginLeft),
                            (s.right = f + c.left);
                        }
                    }
                    var p = "number" == typeof(n = n || 0);
                    return (
                        (s.left += p ? n : n.left || 0),
                        (s.top += p ? n : n.top || 0),
                        (s.right -= p ? n : n.right || 0),
                        (s.bottom -= p ? n : n.bottom || 0),
                        s
                    );
                }

                function D(t, e, i, n, o, r) {
                    var s = 5 < arguments.length && void 0 !== r ? r : 0;
                    if (-1 === t.indexOf("auto")) return t;
                    var a = p(i, n, s, o),
                        l = {
                            top: {
                                width: a.width,
                                height: e.top - a.top
                            },
                            right: {
                                width: a.right - e.right,
                                height: a.height
                            },
                            bottom: {
                                width: a.width,
                                height: a.bottom - e.bottom
                            },
                            left: {
                                width: e.left - a.left,
                                height: a.height
                            }
                        },
                        c = Object.keys(l)
                        .map(function(t) {
                            return C({
                                    key: t
                                },
                                l[t], {
                                    area: (function(t) {
                                        return t.width * t.height;
                                    })(l[t])
                                }
                            );
                        })
                        .sort(function(t, e) {
                            return e.area - t.area;
                        }),
                        u = c.filter(function(t) {
                            var e = t.width,
                                n = t.height;
                            return e >= i.clientWidth && n >= i.clientHeight;
                        }),
                        h = 0 < u.length ? u[0].key : c[0].key,
                        f = t.split("-")[1];
                    return h + (f ? "-" + f : "");
                }

                function I(t, e, n, i) {
                    var o = 3 < arguments.length && void 0 !== i ? i : null;
                    return S(n, o ? k(e) : v(e, n), o);
                }

                function P(t) {
                    var e = t.ownerDocument.defaultView.getComputedStyle(t),
                        n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
                        i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
                    return {
                        width: t.offsetWidth + i,
                        height: t.offsetHeight + n
                    };
                }

                function N(t) {
                    var e = {
                        left: "right",
                        right: "left",
                        bottom: "top",
                        top: "bottom"
                    };
                    return t.replace(/left|right|bottom|top/g, function(t) {
                        return e[t];
                    });
                }

                function A(t, e, n) {
                    n = n.split("-")[0];
                    var i = P(t),
                        o = {
                            width: i.width,
                            height: i.height
                        },
                        r = -1 !== ["right", "left"].indexOf(n),
                        s = r ? "top" : "left",
                        a = r ? "left" : "top",
                        l = r ? "height" : "width",
                        c = r ? "width" : "height";
                    return (
                        (o[s] = e[s] + e[l] / 2 - i[l] / 2),
                        (o[a] = n === a ? e[a] - i[c] : e[N(a)]),
                        o
                    );
                }

                function O(t, e) {
                    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
                }

                function L(t, n, e) {
                    return (
                        (void 0 === e ?
                            t :
                            t.slice(
                                0,
                                (function(t, e, n) {
                                    if (Array.prototype.findIndex)
                                        return t.findIndex(function(t) {
                                            return t[e] === n;
                                        });
                                    var i = O(t, function(t) {
                                        return t[e] === n;
                                    });
                                    return t.indexOf(i);
                                })(t, "name", e)
                            )
                        ).forEach(function(t) {
                            t.function &&
                                console.warn(
                                    "`modifier.function` is deprecated, use `modifier.fn`!"
                                );
                            var e = t.function || t.fn;
                            t.enabled &&
                                s(e) &&
                                ((n.offsets.popper = E(n.offsets.popper)),
                                    (n.offsets.reference = E(n.offsets.reference)),
                                    (n = e(n, t)));
                        }),
                        n
                    );
                }

                function j(t, n) {
                    return t.some(function(t) {
                        var e = t.name;
                        return t.enabled && e === n;
                    });
                }

                function H(t) {
                    for (
                        var e = [!1, "ms", "Webkit", "Moz", "O"],
                            n = t.charAt(0).toUpperCase() + t.slice(1),
                            i = 0; i < e.length; i++
                    ) {
                        var o = e[i],
                            r = o ? "" + o + n : t;
                        if (void 0 !== document.body.style[r]) return r;
                    }
                    return null;
                }

                function M(t) {
                    var e = t.ownerDocument;
                    return e ? e.defaultView : window;
                }

                function R(t, e, n, i) {
                    (n.updateBound = i),
                    M(t).addEventListener("resize", n.updateBound, {
                        passive: !0
                    });
                    var o = g(t);
                    return (
                        (function t(e, n, i, o) {
                            var r = "BODY" === e.nodeName,
                                s = r ? e.ownerDocument.defaultView : e;
                            s.addEventListener(n, i, {
                                    passive: !0
                                }),
                                r || t(g(s.parentNode), n, i, o),
                                o.push(s);
                        })(o, "scroll", n.updateBound, n.scrollParents),
                        (n.scrollElement = o),
                        (n.eventsEnabled = !0),
                        n
                    );
                }

                function q() {
                    this.state.eventsEnabled &&
                        (cancelAnimationFrame(this.scheduleUpdate),
                            (this.state = (function(t, e) {
                                return (
                                    M(t).removeEventListener("resize", e.updateBound),
                                    e.scrollParents.forEach(function(t) {
                                        t.removeEventListener("scroll", e.updateBound);
                                    }),
                                    (e.updateBound = null),
                                    (e.scrollParents = []),
                                    (e.scrollElement = null),
                                    (e.eventsEnabled = !1),
                                    e
                                );
                            })(this.reference, this.state)));
                }

                function W(t) {
                    return "" !== t && !isNaN(parseFloat(t)) && isFinite(t);
                }

                function F(n, i) {
                    Object.keys(i).forEach(function(t) {
                        var e = ""; -
                        1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(
                                t
                            ) &&
                            W(i[t]) &&
                            (e = "px"),
                            (n.style[t] = i[t] + e);
                    });
                }
                var B = t && /Firefox/i.test(navigator.userAgent);

                function U(t, e, n) {
                    var i = O(t, function(t) {
                            return t.name === e;
                        }),
                        o = !!i &&
                        t.some(function(t) {
                            return t.name === n && t.enabled && t.order < i.order;
                        });
                    if (!o) {
                        var r = "`" + e + "`",
                            s = "`" + n + "`";
                        console.warn(
                            s +
                            " modifier is required by " +
                            r +
                            " modifier in order to work, be sure to include it before " +
                            r +
                            "!"
                        );
                    }
                    return o;
                }
                var z = [
                        "auto-start",
                        "auto",
                        "auto-end",
                        "top-start",
                        "top",
                        "top-end",
                        "right-start",
                        "right",
                        "right-end",
                        "bottom-end",
                        "bottom",
                        "bottom-start",
                        "left-end",
                        "left",
                        "left-start"
                    ],
                    Y = z.slice(3);

                function V(t, e) {
                    var n = 1 < arguments.length && void 0 !== e && e,
                        i = Y.indexOf(t),
                        o = Y.slice(i + 1).concat(Y.slice(0, i));
                    return n ? o.reverse() : o;
                }
                var K = "flip",
                    X = "clockwise",
                    Q = "counterclockwise";

                function $(t, o, r, e) {
                    var s = [0, 0],
                        a = -1 !== ["right", "left"].indexOf(e),
                        n = t.split(/(\+|\-)/).map(function(t) {
                            return t.trim();
                        }),
                        i = n.indexOf(
                            O(n, function(t) {
                                return -1 !== t.search(/,|\s/);
                            })
                        );
                    n[i] &&
                        -1 === n[i].indexOf(",") &&
                        console.warn(
                            "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
                        );
                    var l = /\s*,\s*|\s+/,
                        c = -1 !== i ?
                        [
                            n.slice(0, i).concat([n[i].split(l)[0]]), [n[i].split(l)[1]].concat(n.slice(i + 1))
                        ] :
                        [n];
                    return (
                        (c = c.map(function(t, e) {
                            var n = (1 === e ? !a : a) ? "height" : "width",
                                i = !1;
                            return t
                                .reduce(function(t, e) {
                                    return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ?
                                        ((t[t.length - 1] = e), (i = !0), t) :
                                        i ?
                                        ((t[t.length - 1] += e), (i = !1), t) :
                                        t.concat(e);
                                }, [])
                                .map(function(t) {
                                    return (function(t, e, n, i) {
                                        var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                            r = +o[1],
                                            s = o[2];
                                        if (!r) return t;
                                        if (0 !== s.indexOf("%"))
                                            return "vh" !== s && "vw" !== s ?
                                                r :
                                                (("vh" === s ?
                                                        Math.max(
                                                            document.documentElement.clientHeight,
                                                            window.innerHeight || 0
                                                        ) :
                                                        Math.max(
                                                            document.documentElement.clientWidth,
                                                            window.innerWidth || 0
                                                        )) /
                                                    100) *
                                                r;
                                        var a = void 0;
                                        switch (s) {
                                            case "%p":
                                                a = n;
                                                break;
                                            case "%":
                                            case "%r":
                                            default:
                                                a = i;
                                        }
                                        return (E(a)[e] / 100) * r;
                                    })(t, n, o, r);
                                });
                        })).forEach(function(n, i) {
                            n.forEach(function(t, e) {
                                W(t) && (s[i] += t * ("-" === n[e - 1] ? -1 : 1));
                            });
                        }),
                        s
                    );
                }
                var G = {
                        placement: "bottom",
                        positionFixed: !1,
                        eventsEnabled: !0,
                        removeOnDestroy: !1,
                        onCreate: function() {},
                        onUpdate: function() {},
                        modifiers: {
                            shift: {
                                order: 100,
                                enabled: !0,
                                fn: function(t) {
                                    var e = t.placement,
                                        n = e.split("-")[0],
                                        i = e.split("-")[1];
                                    if (i) {
                                        var o = t.offsets,
                                            r = o.reference,
                                            s = o.popper,
                                            a = -1 !== ["bottom", "top"].indexOf(n),
                                            l = a ? "left" : "top",
                                            c = a ? "width" : "height",
                                            u = {
                                                start: x({}, l, r[l]),
                                                end: x({}, l, r[l] + r[c] - s[c])
                                            };
                                        t.offsets.popper = C({}, s, u[i]);
                                    }
                                    return t;
                                }
                            },
                            offset: {
                                order: 200,
                                enabled: !0,
                                fn: function(t, e) {
                                    var n = e.offset,
                                        i = t.placement,
                                        o = t.offsets,
                                        r = o.popper,
                                        s = o.reference,
                                        a = i.split("-")[0],
                                        l = void 0;
                                    return (
                                        (l = W(+n) ? [+n, 0] : $(n, r, s, a)),
                                        "left" === a ?
                                        ((r.top += l[0]), (r.left -= l[1])) :
                                        "right" === a ?
                                        ((r.top += l[0]), (r.left += l[1])) :
                                        "top" === a ?
                                        ((r.left += l[0]), (r.top -= l[1])) :
                                        "bottom" === a && ((r.left += l[0]), (r.top += l[1])),
                                        (t.popper = r),
                                        t
                                    );
                                },
                                offset: 0
                            },
                            preventOverflow: {
                                order: 300,
                                enabled: !0,
                                fn: function(t, i) {
                                    var e = i.boundariesElement || y(t.instance.popper);
                                    t.instance.reference === e && (e = y(e));
                                    var n = H("transform"),
                                        o = t.instance.popper.style,
                                        r = o.top,
                                        s = o.left,
                                        a = o[n];
                                    (o.top = ""), (o.left = ""), (o[n] = "");
                                    var l = p(
                                        t.instance.popper,
                                        t.instance.reference,
                                        i.padding,
                                        e,
                                        t.positionFixed
                                    );
                                    (o.top = r), (o.left = s), (o[n] = a), (i.boundaries = l);
                                    var c = i.priority,
                                        u = t.offsets.popper,
                                        h = {
                                            primary: function(t) {
                                                var e = u[t];
                                                return (
                                                    u[t] < l[t] &&
                                                    !i.escapeWithReference &&
                                                    (e = Math.max(u[t], l[t])),
                                                    x({}, t, e)
                                                );
                                            },
                                            secondary: function(t) {
                                                var e = "right" === t ? "left" : "top",
                                                    n = u[e];
                                                return (
                                                    u[t] > l[t] &&
                                                    !i.escapeWithReference &&
                                                    (n = Math.min(
                                                        u[e],
                                                        l[t] - ("right" === t ? u.width : u.height)
                                                    )),
                                                    x({}, e, n)
                                                );
                                            }
                                        };
                                    return (
                                        c.forEach(function(t) {
                                            var e = -1 !== ["left", "top"].indexOf(t) ?
                                                "primary" :
                                                "secondary";
                                            u = C({}, u, h[e](t));
                                        }),
                                        (t.offsets.popper = u),
                                        t
                                    );
                                },
                                priority: ["left", "right", "top", "bottom"],
                                padding: 5,
                                boundariesElement: "scrollParent"
                            },
                            keepTogether: {
                                order: 400,
                                enabled: !0,
                                fn: function(t) {
                                    var e = t.offsets,
                                        n = e.popper,
                                        i = e.reference,
                                        o = t.placement.split("-")[0],
                                        r = Math.floor,
                                        s = -1 !== ["top", "bottom"].indexOf(o),
                                        a = s ? "right" : "bottom",
                                        l = s ? "left" : "top",
                                        c = s ? "width" : "height";
                                    return (
                                        n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]),
                                        n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])),
                                        t
                                    );
                                }
                            },
                            arrow: {
                                order: 500,
                                enabled: !0,
                                fn: function(t, e) {
                                    var n;
                                    if (!U(t.instance.modifiers, "arrow", "keepTogether"))
                                        return t;
                                    var i = e.element;
                                    if ("string" == typeof i) {
                                        if (!(i = t.instance.popper.querySelector(i))) return t;
                                    } else if (!t.instance.popper.contains(i))
                                        return (
                                            console.warn(
                                                "WARNING: `arrow.element` must be child of its popper element!"
                                            ),
                                            t
                                        );
                                    var o = t.placement.split("-")[0],
                                        r = t.offsets,
                                        s = r.popper,
                                        a = r.reference,
                                        l = -1 !== ["left", "right"].indexOf(o),
                                        c = l ? "height" : "width",
                                        u = l ? "Top" : "Left",
                                        h = u.toLowerCase(),
                                        f = l ? "left" : "top",
                                        p = l ? "bottom" : "right",
                                        d = P(i)[c];
                                    a[p] - d < s[h] && (t.offsets.popper[h] -= s[h] - (a[p] - d)),
                                        a[h] + d > s[p] && (t.offsets.popper[h] += a[h] + d - s[p]),
                                        (t.offsets.popper = E(t.offsets.popper));
                                    var g = a[h] + a[c] / 2 - d / 2,
                                        m = _(t.instance.popper),
                                        v = parseFloat(m["margin" + u], 10),
                                        b = parseFloat(m["border" + u + "Width"], 10),
                                        y = g - t.offsets.popper[h] - v - b;
                                    return (
                                        (y = Math.max(Math.min(s[c] - d, y), 0)),
                                        (t.arrowElement = i),
                                        (t.offsets.arrow =
                                            (x((n = {}), h, Math.round(y)), x(n, f, ""), n)),
                                        t
                                    );
                                },
                                element: "[x-arrow]"
                            },
                            flip: {
                                order: 600,
                                enabled: !0,
                                fn: function(g, m) {
                                    if (j(g.instance.modifiers, "inner")) return g;
                                    if (g.flipped && g.placement === g.originalPlacement)
                                        return g;
                                    var v = p(
                                            g.instance.popper,
                                            g.instance.reference,
                                            m.padding,
                                            m.boundariesElement,
                                            g.positionFixed
                                        ),
                                        b = g.placement.split("-")[0],
                                        y = N(b),
                                        _ = g.placement.split("-")[1] || "",
                                        w = [];
                                    switch (m.behavior) {
                                        case K:
                                            w = [b, y];
                                            break;
                                        case X:
                                            w = V(b);
                                            break;
                                        case Q:
                                            w = V(b, !0);
                                            break;
                                        default:
                                            w = m.behavior;
                                    }
                                    return (
                                        w.forEach(function(t, e) {
                                            if (b !== t || w.length === e + 1) return g;
                                            (b = g.placement.split("-")[0]), (y = N(b));
                                            var n = g.offsets.popper,
                                                i = g.offsets.reference,
                                                o = Math.floor,
                                                r =
                                                ("left" === b && o(n.right) > o(i.left)) ||
                                                ("right" === b && o(n.left) < o(i.right)) ||
                                                ("top" === b && o(n.bottom) > o(i.top)) ||
                                                ("bottom" === b && o(n.top) < o(i.bottom)),
                                                s = o(n.left) < o(v.left),
                                                a = o(n.right) > o(v.right),
                                                l = o(n.top) < o(v.top),
                                                c = o(n.bottom) > o(v.bottom),
                                                u =
                                                ("left" === b && s) ||
                                                ("right" === b && a) ||
                                                ("top" === b && l) ||
                                                ("bottom" === b && c),
                                                h = -1 !== ["top", "bottom"].indexOf(b),
                                                f = !!m.flipVariations &&
                                                ((h && "start" === _ && s) ||
                                                    (h && "end" === _ && a) ||
                                                    (!h && "start" === _ && l) ||
                                                    (!h && "end" === _ && c)),
                                                p = !!m.flipVariationsByContent &&
                                                ((h && "start" === _ && a) ||
                                                    (h && "end" === _ && s) ||
                                                    (!h && "start" === _ && c) ||
                                                    (!h && "end" === _ && l)),
                                                d = f || p;
                                            (r || u || d) &&
                                            ((g.flipped = !0),
                                                (r || u) && (b = w[e + 1]),
                                                d &&
                                                (_ = (function(t) {
                                                    return "end" === t ?
                                                        "start" :
                                                        "start" === t ?
                                                        "end" :
                                                        t;
                                                })(_)),
                                                (g.placement = b + (_ ? "-" + _ : "")),
                                                (g.offsets.popper = C({},
                                                    g.offsets.popper,
                                                    A(g.instance.popper, g.offsets.reference, g.placement)
                                                )),
                                                (g = L(g.instance.modifiers, g, "flip")));
                                        }),
                                        g
                                    );
                                },
                                behavior: "flip",
                                padding: 5,
                                boundariesElement: "viewport",
                                flipVariations: !1,
                                flipVariationsByContent: !1
                            },
                            inner: {
                                order: 700,
                                enabled: !1,
                                fn: function(t) {
                                    var e = t.placement,
                                        n = e.split("-")[0],
                                        i = t.offsets,
                                        o = i.popper,
                                        r = i.reference,
                                        s = -1 !== ["left", "right"].indexOf(n),
                                        a = -1 === ["top", "left"].indexOf(n);
                                    return (
                                        (o[s ? "left" : "top"] =
                                            r[n] - (a ? o[s ? "width" : "height"] : 0)),
                                        (t.placement = N(e)),
                                        (t.offsets.popper = E(o)),
                                        t
                                    );
                                }
                            },
                            hide: {
                                order: 800,
                                enabled: !0,
                                fn: function(t) {
                                    if (!U(t.instance.modifiers, "hide", "preventOverflow"))
                                        return t;
                                    var e = t.offsets.reference,
                                        n = O(t.instance.modifiers, function(t) {
                                            return "preventOverflow" === t.name;
                                        }).boundaries;
                                    if (
                                        e.bottom < n.top ||
                                        e.left > n.right ||
                                        e.top > n.bottom ||
                                        e.right < n.left
                                    ) {
                                        if (!0 === t.hide) return t;
                                        (t.hide = !0), (t.attributes["x-out-of-boundaries"] = "");
                                    } else {
                                        if (!1 === t.hide) return t;
                                        (t.hide = !1), (t.attributes["x-out-of-boundaries"] = !1);
                                    }
                                    return t;
                                }
                            },
                            computeStyle: {
                                order: 850,
                                enabled: !0,
                                fn: function(t, e) {
                                    var n = e.x,
                                        i = e.y,
                                        o = t.offsets.popper,
                                        r = O(t.instance.modifiers, function(t) {
                                            return "applyStyle" === t.name;
                                        }).gpuAcceleration;
                                    void 0 !== r &&
                                        console.warn(
                                            "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
                                        );
                                    var s = void 0 !== r ? r : e.gpuAcceleration,
                                        a = y(t.instance.popper),
                                        l = T(a),
                                        c = {
                                            position: o.position
                                        },
                                        u = (function(t, e) {
                                            function n(t) {
                                                return t;
                                            }
                                            var i = t.offsets,
                                                o = i.popper,
                                                r = i.reference,
                                                s = Math.round,
                                                a = Math.floor,
                                                l = s(r.width),
                                                c = s(o.width),
                                                u = -1 !== ["left", "right"].indexOf(t.placement),
                                                h = -1 !== t.placement.indexOf("-"),
                                                f = e ? (u || h || l % 2 == c % 2 ? s : a) : n,
                                                p = e ? s : n;
                                            return {
                                                left: f(
                                                    l % 2 == 1 && c % 2 == 1 && !h && e ?
                                                    o.left - 1 :
                                                    o.left
                                                ),
                                                top: p(o.top),
                                                bottom: p(o.bottom),
                                                right: f(o.right)
                                            };
                                        })(t, window.devicePixelRatio < 2 || !B),
                                        h = "bottom" === n ? "top" : "bottom",
                                        f = "right" === i ? "left" : "right",
                                        p = H("transform"),
                                        d = void 0,
                                        g = void 0;
                                    if (
                                        ((g =
                                                "bottom" == h ?
                                                "HTML" === a.nodeName ?
                                                -a.clientHeight + u.bottom :
                                                -l.height + u.bottom :
                                                u.top),
                                            (d =
                                                "right" == f ?
                                                "HTML" === a.nodeName ?
                                                -a.clientWidth + u.right :
                                                -l.width + u.right :
                                                u.left),
                                            s && p)
                                    )
                                        (c[p] = "translate3d(" + d + "px, " + g + "px, 0)"),
                                        (c[h] = 0),
                                        (c[f] = 0),
                                        (c.willChange = "transform");
                                    else {
                                        var m = "bottom" == h ? -1 : 1,
                                            v = "right" == f ? -1 : 1;
                                        (c[h] = g * m),
                                        (c[f] = d * v),
                                        (c.willChange = h + ", " + f);
                                    }
                                    var b = {
                                        "x-placement": t.placement
                                    };
                                    return (
                                        (t.attributes = C({}, b, t.attributes)),
                                        (t.styles = C({}, c, t.styles)),
                                        (t.arrowStyles = C({}, t.offsets.arrow, t.arrowStyles)),
                                        t
                                    );
                                },
                                gpuAcceleration: !0,
                                x: "bottom",
                                y: "right"
                            },
                            applyStyle: {
                                order: 900,
                                enabled: !0,
                                fn: function(t) {
                                    return (
                                        F(t.instance.popper, t.styles),
                                        (function(e, n) {
                                            Object.keys(n).forEach(function(t) {
                                                !1 !== n[t] ?
                                                    e.setAttribute(t, n[t]) :
                                                    e.removeAttribute(t);
                                            });
                                        })(t.instance.popper, t.attributes),
                                        t.arrowElement &&
                                        Object.keys(t.arrowStyles).length &&
                                        F(t.arrowElement, t.arrowStyles),
                                        t
                                    );
                                },
                                onLoad: function(t, e, n, i, o) {
                                    var r = I(o, e, t, n.positionFixed),
                                        s = D(
                                            n.placement,
                                            r,
                                            e,
                                            t,
                                            n.modifiers.flip.boundariesElement,
                                            n.modifiers.flip.padding
                                        );
                                    return (
                                        e.setAttribute("x-placement", s),
                                        F(e, {
                                            position: n.positionFixed ? "fixed" : "absolute"
                                        }),
                                        n
                                    );
                                },
                                gpuAcceleration: void 0
                            }
                        }
                    },
                    J =
                    (u(Z, [{
                                key: "update",
                                value: function() {
                                    return function() {
                                        if (!this.state.isDestroyed) {
                                            var t = {
                                                instance: this,
                                                styles: {},
                                                arrowStyles: {},
                                                attributes: {},
                                                flipped: !1,
                                                offsets: {}
                                            };
                                            (t.offsets.reference = I(
                                                this.state,
                                                this.popper,
                                                this.reference,
                                                this.options.positionFixed
                                            )),
                                            (t.placement = D(
                                                this.options.placement,
                                                t.offsets.reference,
                                                this.popper,
                                                this.reference,
                                                this.options.modifiers.flip.boundariesElement,
                                                this.options.modifiers.flip.padding
                                            )),
                                            (t.originalPlacement = t.placement),
                                            (t.positionFixed = this.options.positionFixed),
                                            (t.offsets.popper = A(
                                                this.popper,
                                                t.offsets.reference,
                                                t.placement
                                            )),
                                            (t.offsets.popper.position = this.options.positionFixed ?
                                                "fixed" :
                                                "absolute"),
                                            (t = L(this.modifiers, t)),
                                            this.state.isCreated ?
                                                this.options.onUpdate(t) :
                                                ((this.state.isCreated = !0),
                                                    this.options.onCreate(t));
                                        }
                                    }.call(this);
                                }
                            },
                            {
                                key: "destroy",
                                value: function() {
                                    return function() {
                                        return (
                                            (this.state.isDestroyed = !0),
                                            j(this.modifiers, "applyStyle") &&
                                            (this.popper.removeAttribute("x-placement"),
                                                (this.popper.style.position = ""),
                                                (this.popper.style.top = ""),
                                                (this.popper.style.left = ""),
                                                (this.popper.style.right = ""),
                                                (this.popper.style.bottom = ""),
                                                (this.popper.style.willChange = ""),
                                                (this.popper.style[H("transform")] = "")),
                                            this.disableEventListeners(),
                                            this.options.removeOnDestroy &&
                                            this.popper.parentNode.removeChild(this.popper),
                                            this
                                        );
                                    }.call(this);
                                }
                            },
                            {
                                key: "enableEventListeners",
                                value: function() {
                                    return function() {
                                        this.state.eventsEnabled ||
                                            (this.state = R(
                                                this.reference,
                                                this.options,
                                                this.state,
                                                this.scheduleUpdate
                                            ));
                                    }.call(this);
                                }
                            },
                            {
                                key: "disableEventListeners",
                                value: function() {
                                    return q.call(this);
                                }
                            }
                        ]),
                        Z);

                function Z(t, e) {
                    var n = this,
                        i =
                        2 < arguments.length && void 0 !== arguments[2] ?
                        arguments[2] :
                        {};
                    !(function(t, e) {
                        if (!(t instanceof e))
                            throw new TypeError("Cannot call a class as a function");
                    })(this, Z),
                    (this.scheduleUpdate = function() {
                        return requestAnimationFrame(n.update);
                    }),
                    (this.update = r(this.update.bind(this))),
                    (this.options = C({}, Z.Defaults, i)),
                    (this.state = {
                        isDestroyed: !1,
                        isCreated: !1,
                        scrollParents: []
                    }),
                    (this.reference = t && t.jquery ? t[0] : t),
                    (this.popper = e && e.jquery ? e[0] : e),
                    (this.options.modifiers = {}),
                    Object.keys(C({}, Z.Defaults.modifiers, i.modifiers)).forEach(
                            function(t) {
                                n.options.modifiers[t] = C({},
                                    Z.Defaults.modifiers[t] || {},
                                    i.modifiers ? i.modifiers[t] : {}
                                );
                            }
                        ),
                        (this.modifiers = Object.keys(this.options.modifiers)
                            .map(function(t) {
                                return C({
                                        name: t
                                    },
                                    n.options.modifiers[t]
                                );
                            })
                            .sort(function(t, e) {
                                return t.order - e.order;
                            })),
                        this.modifiers.forEach(function(t) {
                            t.enabled &&
                                s(t.onLoad) &&
                                t.onLoad(n.reference, n.popper, n.options, t, n.state);
                        }),
                        this.update();
                    var o = this.options.eventsEnabled;
                    o && this.enableEventListeners(), (this.state.eventsEnabled = o);
                }
                return (
                    (J.Utils = ("undefined" != typeof window ?
                        window :
                        global
                    ).PopperUtils),
                    (J.placements = z),
                    (J.Defaults = G),
                    J
                );
            }),
            (function(t, e) {
                "object" == typeof exports && "undefined" != typeof module ?
                    e(exports, require("jquery"), require("popper.js")) :
                    "function" == typeof define && define.amd ?
                    define(["exports", "jquery", "popper.js"], e) :
                    e(((t = t || self).bootstrap = {}), t.jQuery, t.Popper);
            })(this, function(t, d, h) {
                "use strict";

                function i(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                            Object.defineProperty(t, i.key, i);
                    }
                }

                function s(t, e, n) {
                    return e && i(t.prototype, e), n && i(t, n), t;
                }

                function l(o) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            e = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (e = e.concat(
                                Object.getOwnPropertySymbols(r).filter(function(t) {
                                    return Object.getOwnPropertyDescriptor(r, t).enumerable;
                                })
                            )),
                            e.forEach(function(t) {
                                var e, n, i;
                                (e = o),
                                (i = r[(n = t)]),
                                n in e ?
                                    Object.defineProperty(e, n, {
                                        value: i,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) :
                                    (e[n] = i);
                            });
                    }
                    return o;
                }
                (d = d && d.hasOwnProperty("default") ? d.default : d),
                (h = h && h.hasOwnProperty("default") ? h.default : h);
                var e = "transitionend";

                function n(t) {
                    var e = this,
                        n = !1;
                    return (
                        d(this).one(g.TRANSITION_END, function() {
                            n = !0;
                        }),
                        setTimeout(function() {
                            n || g.triggerTransitionEnd(e);
                        }, t),
                        this
                    );
                }
                var g = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(t) {
                        for (;
                            (t += ~~(1e6 * Math.random())), document.getElementById(t);

                        );
                        return t;
                    },
                    getSelectorFromElement: function(t) {
                        var e = t.getAttribute("data-target");
                        if (!e || "#" === e) {
                            var n = t.getAttribute("href");
                            e = n && "#" !== n ? n.trim() : "";
                        }
                        try {
                            return document.querySelector(e) ? e : null;
                        } catch (t) {
                            return null;
                        }
                    },
                    getTransitionDurationFromElement: function(t) {
                        if (!t) return 0;
                        var e = d(t).css("transition-duration"),
                            n = d(t).css("transition-delay"),
                            i = parseFloat(e),
                            o = parseFloat(n);
                        return i || o ?
                            ((e = e.split(",")[0]),
                                (n = n.split(",")[0]),
                                1e3 * (parseFloat(e) + parseFloat(n))) :
                            0;
                    },
                    reflow: function(t) {
                        return t.offsetHeight;
                    },
                    triggerTransitionEnd: function(t) {
                        d(t).trigger(e);
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(e);
                    },
                    isElement: function(t) {
                        return (t[0] || t).nodeType;
                    },
                    typeCheckConfig: function(t, e, n) {
                        for (var i in n)
                            if (Object.prototype.hasOwnProperty.call(n, i)) {
                                var o = n[i],
                                    r = e[i],
                                    s =
                                    r && g.isElement(r) ?
                                    "element" :
                                    ((a = r), {}.toString
                                        .call(a)
                                        .match(/\s([a-z]+)/i)[1]
                                        .toLowerCase());
                                if (!new RegExp(o).test(s))
                                    throw new Error(
                                        t.toUpperCase() +
                                        ': Option "' +
                                        i +
                                        '" provided type "' +
                                        s +
                                        '" but expected type "' +
                                        o +
                                        '".'
                                    );
                            }
                        var a;
                    },
                    findShadowRoot: function(t) {
                        if (!document.documentElement.attachShadow) return null;
                        if ("function" != typeof t.getRootNode)
                            return t instanceof ShadowRoot ?
                                t :
                                t.parentNode ?
                                g.findShadowRoot(t.parentNode) :
                                null;
                        var e = t.getRootNode();
                        return e instanceof ShadowRoot ? e : null;
                    }
                };
                (d.fn.emulateTransitionEnd = n),
                (d.event.special[g.TRANSITION_END] = {
                    bindType: e,
                    delegateType: e,
                    handle: function(t) {
                        if (d(t.target).is(this))
                            return t.handleObj.handler.apply(this, arguments);
                    }
                });
                var o = "alert",
                    r = "bs.alert",
                    a = "." + r,
                    c = d.fn[o],
                    u = {
                        CLOSE: "close" + a,
                        CLOSED: "closed" + a,
                        CLICK_DATA_API: "click" + a + ".data-api"
                    },
                    f = "alert",
                    p = "fade",
                    m = "show",
                    v = (function() {
                        function i(t) {
                            this._element = t;
                        }
                        var t = i.prototype;
                        return (
                            (t.close = function(t) {
                                var e = this._element;
                                t && (e = this._getRootElement(t)),
                                    this._triggerCloseEvent(e).isDefaultPrevented() ||
                                    this._removeElement(e);
                            }),
                            (t.dispose = function() {
                                d.removeData(this._element, r), (this._element = null);
                            }),
                            (t._getRootElement = function(t) {
                                var e = g.getSelectorFromElement(t),
                                    n = !1;
                                return (
                                    e && (n = document.querySelector(e)),
                                    (n = n || d(t).closest("." + f)[0])
                                );
                            }),
                            (t._triggerCloseEvent = function(t) {
                                var e = d.Event(u.CLOSE);
                                return d(t).trigger(e), e;
                            }),
                            (t._removeElement = function(e) {
                                var n = this;
                                if ((d(e).removeClass(m), d(e).hasClass(p))) {
                                    var t = g.getTransitionDurationFromElement(e);
                                    d(e)
                                        .one(g.TRANSITION_END, function(t) {
                                            return n._destroyElement(e, t);
                                        })
                                        .emulateTransitionEnd(t);
                                } else this._destroyElement(e);
                            }),
                            (t._destroyElement = function(t) {
                                d(t)
                                    .detach()
                                    .trigger(u.CLOSED)
                                    .remove();
                            }),
                            (i._jQueryInterface = function(n) {
                                return this.each(function() {
                                    var t = d(this),
                                        e = t.data(r);
                                    e || ((e = new i(this)), t.data(r, e)),
                                        "close" === n && e[n](this);
                                });
                            }),
                            (i._handleDismiss = function(e) {
                                return function(t) {
                                    t && t.preventDefault(), e.close(this);
                                };
                            }),
                            s(i, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.3.1";
                                }
                            }]),
                            i
                        );
                    })();
                d(document).on(
                        u.CLICK_DATA_API,
                        '[data-dismiss="alert"]',
                        v._handleDismiss(new v())
                    ),
                    (d.fn[o] = v._jQueryInterface),
                    (d.fn[o].Constructor = v),
                    (d.fn[o].noConflict = function() {
                        return (d.fn[o] = c), v._jQueryInterface;
                    });
                var b = "button",
                    y = "bs.button",
                    _ = "." + y,
                    w = ".data-api",
                    x = d.fn[b],
                    C = "active",
                    E = "btn",
                    T = "focus",
                    S = '[data-toggle^="button"]',
                    k = '[data-toggle="buttons"]',
                    D = 'input:not([type="hidden"])',
                    I = ".active",
                    P = ".btn",
                    N = {
                        CLICK_DATA_API: "click" + _ + w,
                        FOCUS_BLUR_DATA_API: "focus" + _ + w + " blur" + _ + w
                    },
                    A = (function() {
                        function n(t) {
                            this._element = t;
                        }
                        var t = n.prototype;
                        return (
                            (t.toggle = function() {
                                var t = !0,
                                    e = !0,
                                    n = d(this._element).closest(k)[0];
                                if (n) {
                                    var i = this._element.querySelector(D);
                                    if (i) {
                                        if ("radio" === i.type)
                                            if (i.checked && this._element.classList.contains(C))
                                                t = !1;
                                            else {
                                                var o = n.querySelector(I);
                                                o && d(o).removeClass(C);
                                            }
                                        if (t) {
                                            if (
                                                i.hasAttribute("disabled") ||
                                                n.hasAttribute("disabled") ||
                                                i.classList.contains("disabled") ||
                                                n.classList.contains("disabled")
                                            )
                                                return;
                                            (i.checked = !this._element.classList.contains(C)),
                                            d(i).trigger("change");
                                        }
                                        i.focus(), (e = !1);
                                    }
                                }
                                e &&
                                    this._element.setAttribute(
                                        "aria-pressed", !this._element.classList.contains(C)
                                    ),
                                    t && d(this._element).toggleClass(C);
                            }),
                            (t.dispose = function() {
                                d.removeData(this._element, y), (this._element = null);
                            }),
                            (n._jQueryInterface = function(e) {
                                return this.each(function() {
                                    var t = d(this).data(y);
                                    t || ((t = new n(this)), d(this).data(y, t)),
                                        "toggle" === e && t[e]();
                                });
                            }),
                            s(n, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.3.1";
                                }
                            }]),
                            n
                        );
                    })();
                d(document)
                    .on(N.CLICK_DATA_API, S, function(t) {
                        t.preventDefault();
                        var e = t.target;
                        d(e).hasClass(E) || (e = d(e).closest(P)),
                            A._jQueryInterface.call(d(e), "toggle");
                    })
                    .on(N.FOCUS_BLUR_DATA_API, S, function(t) {
                        var e = d(t.target).closest(P)[0];
                        d(e).toggleClass(T, /^focus(in)?$/.test(t.type));
                    }),
                    (d.fn[b] = A._jQueryInterface),
                    (d.fn[b].Constructor = A),
                    (d.fn[b].noConflict = function() {
                        return (d.fn[b] = x), A._jQueryInterface;
                    });
                var O = "carousel",
                    L = "bs.carousel",
                    j = "." + L,
                    H = d.fn[O],
                    M = {
                        interval: 5e3,
                        keyboard: !0,
                        slide: !1,
                        pause: "hover",
                        wrap: !0,
                        touch: !0
                    },
                    R = {
                        interval: "(number|boolean)",
                        keyboard: "boolean",
                        slide: "(boolean|string)",
                        pause: "(string|boolean)",
                        wrap: "boolean",
                        touch: "boolean"
                    },
                    q = "next",
                    W = "prev",
                    F = "left",
                    B = "right",
                    U = {
                        SLIDE: "slide" + j,
                        SLID: "slid" + j,
                        KEYDOWN: "keydown" + j,
                        MOUSEENTER: "mouseenter" + j,
                        MOUSELEAVE: "mouseleave" + j,
                        TOUCHSTART: "touchstart" + j,
                        TOUCHMOVE: "touchmove" + j,
                        TOUCHEND: "touchend" + j,
                        POINTERDOWN: "pointerdown" + j,
                        POINTERUP: "pointerup" + j,
                        DRAG_START: "dragstart" + j,
                        LOAD_DATA_API: "load" + j + ".data-api",
                        CLICK_DATA_API: "click" + j + ".data-api"
                    },
                    z = "carousel",
                    Y = "active",
                    V = "slide",
                    K = "carousel-item-right",
                    X = "carousel-item-left",
                    Q = "carousel-item-next",
                    $ = "carousel-item-prev",
                    G = "pointer-event",
                    J = ".active",
                    Z = ".active.carousel-item",
                    tt = ".carousel-item",
                    et = ".carousel-item img",
                    nt = ".carousel-item-next, .carousel-item-prev",
                    it = ".carousel-indicators",
                    ot = "[data-slide], [data-slide-to]",
                    rt = '[data-ride="carousel"]',
                    st = {
                        TOUCH: "touch",
                        PEN: "pen"
                    },
                    at = (function() {
                        function r(t, e) {
                            (this._items = null),
                            (this._interval = null),
                            (this._activeElement = null),
                            (this._isPaused = !1),
                            (this._isSliding = !1),
                            (this.touchTimeout = null),
                            (this.touchStartX = 0),
                            (this.touchDeltaX = 0),
                            (this._config = this._getConfig(e)),
                            (this._element = t),
                            (this._indicatorsElement = this._element.querySelector(it)),
                            (this._touchSupported =
                                "ontouchstart" in document.documentElement ||
                                0 < navigator.maxTouchPoints),
                            (this._pointerEvent = Boolean(
                                window.PointerEvent || window.MSPointerEvent
                            )),
                            this._addEventListeners();
                        }
                        var t = r.prototype;
                        return (
                            (t.next = function() {
                                this._isSliding || this._slide(q);
                            }),
                            (t.nextWhenVisible = function() {
                                !document.hidden &&
                                    d(this._element).is(":visible") &&
                                    "hidden" !== d(this._element).css("visibility") &&
                                    this.next();
                            }),
                            (t.prev = function() {
                                this._isSliding || this._slide(W);
                            }),
                            (t.pause = function(t) {
                                t || (this._isPaused = !0),
                                    this._element.querySelector(nt) &&
                                    (g.triggerTransitionEnd(this._element), this.cycle(!0)),
                                    clearInterval(this._interval),
                                    (this._interval = null);
                            }),
                            (t.cycle = function(t) {
                                t || (this._isPaused = !1),
                                    this._interval &&
                                    (clearInterval(this._interval), (this._interval = null)),
                                    this._config.interval &&
                                    !this._isPaused &&
                                    (this._interval = setInterval(
                                        (document.visibilityState ?
                                            this.nextWhenVisible :
                                            this.next
                                        ).bind(this),
                                        this._config.interval
                                    ));
                            }),
                            (t.to = function(t) {
                                var e = this;
                                this._activeElement = this._element.querySelector(Z);
                                var n = this._getItemIndex(this._activeElement);
                                if (!(t > this._items.length - 1 || t < 0))
                                    if (this._isSliding)
                                        d(this._element).one(U.SLID, function() {
                                            return e.to(t);
                                        });
                                    else {
                                        if (n === t) return this.pause(), void this.cycle();
                                        var i = n < t ? q : W;
                                        this._slide(i, this._items[t]);
                                    }
                            }),
                            (t.dispose = function() {
                                d(this._element).off(j),
                                    d.removeData(this._element, L),
                                    (this._items = null),
                                    (this._config = null),
                                    (this._element = null),
                                    (this._interval = null),
                                    (this._isPaused = null),
                                    (this._isSliding = null),
                                    (this._activeElement = null),
                                    (this._indicatorsElement = null);
                            }),
                            (t._getConfig = function(t) {
                                return (t = l({}, M, t)), g.typeCheckConfig(O, t, R), t;
                            }),
                            (t._handleSwipe = function() {
                                var t = Math.abs(this.touchDeltaX);
                                if (!(t <= 40)) {
                                    var e = t / this.touchDeltaX;
                                    0 < e && this.prev(), e < 0 && this.next();
                                }
                            }),
                            (t._addEventListeners = function() {
                                var e = this;
                                this._config.keyboard &&
                                    d(this._element).on(U.KEYDOWN, function(t) {
                                        return e._keydown(t);
                                    }),
                                    "hover" === this._config.pause &&
                                    d(this._element)
                                    .on(U.MOUSEENTER, function(t) {
                                        return e.pause(t);
                                    })
                                    .on(U.MOUSELEAVE, function(t) {
                                        return e.cycle(t);
                                    }),
                                    this._config.touch && this._addTouchEventListeners();
                            }),
                            (t._addTouchEventListeners = function() {
                                var e = this;
                                if (this._touchSupported) {
                                    var n = function(t) {
                                            e._pointerEvent &&
                                                st[t.originalEvent.pointerType.toUpperCase()] ?
                                                (e.touchStartX = t.originalEvent.clientX) :
                                                e._pointerEvent ||
                                                (e.touchStartX = t.originalEvent.touches[0].clientX);
                                        },
                                        i = function(t) {
                                            e._pointerEvent &&
                                                st[t.originalEvent.pointerType.toUpperCase()] &&
                                                (e.touchDeltaX =
                                                    t.originalEvent.clientX - e.touchStartX),
                                                e._handleSwipe(),
                                                "hover" === e._config.pause &&
                                                (e.pause(),
                                                    e.touchTimeout && clearTimeout(e.touchTimeout),
                                                    (e.touchTimeout = setTimeout(function(t) {
                                                        return e.cycle(t);
                                                    }, 500 + e._config.interval)));
                                        };
                                    d(this._element.querySelectorAll(et)).on(
                                            U.DRAG_START,
                                            function(t) {
                                                return t.preventDefault();
                                            }
                                        ),
                                        this._pointerEvent ?
                                        (d(this._element).on(U.POINTERDOWN, function(t) {
                                                return n(t);
                                            }),
                                            d(this._element).on(U.POINTERUP, function(t) {
                                                return i(t);
                                            }),
                                            this._element.classList.add(G)) :
                                        (d(this._element).on(U.TOUCHSTART, function(t) {
                                                return n(t);
                                            }),
                                            d(this._element).on(U.TOUCHMOVE, function(t) {
                                                return (function(t) {
                                                    t.originalEvent.touches &&
                                                        1 < t.originalEvent.touches.length ?
                                                        (e.touchDeltaX = 0) :
                                                        (e.touchDeltaX =
                                                            t.originalEvent.touches[0].clientX -
                                                            e.touchStartX);
                                                })(t);
                                            }),
                                            d(this._element).on(U.TOUCHEND, function(t) {
                                                return i(t);
                                            }));
                                }
                            }),
                            (t._keydown = function(t) {
                                if (!/input|textarea/i.test(t.target.tagName))
                                    switch (t.which) {
                                        case 37:
                                            t.preventDefault(), this.prev();
                                            break;
                                        case 39:
                                            t.preventDefault(), this.next();
                                    }
                            }),
                            (t._getItemIndex = function(t) {
                                return (
                                    (this._items =
                                        t && t.parentNode ?
                                        [].slice.call(t.parentNode.querySelectorAll(tt)) :
                                        []),
                                    this._items.indexOf(t)
                                );
                            }),
                            (t._getItemByDirection = function(t, e) {
                                var n = t === q,
                                    i = t === W,
                                    o = this._getItemIndex(e),
                                    r = this._items.length - 1;
                                if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
                                    return e;
                                var s = (o + (t === W ? -1 : 1)) % this._items.length;
                                return -1 == s ?
                                    this._items[this._items.length - 1] :
                                    this._items[s];
                            }),
                            (t._triggerSlideEvent = function(t, e) {
                                var n = this._getItemIndex(t),
                                    i = this._getItemIndex(this._element.querySelector(Z)),
                                    o = d.Event(U.SLIDE, {
                                        relatedTarget: t,
                                        direction: e,
                                        from: i,
                                        to: n
                                    });
                                return d(this._element).trigger(o), o;
                            }),
                            (t._setActiveIndicatorElement = function(t) {
                                if (this._indicatorsElement) {
                                    var e = [].slice.call(
                                        this._indicatorsElement.querySelectorAll(J)
                                    );
                                    d(e).removeClass(Y);
                                    var n = this._indicatorsElement.children[
                                        this._getItemIndex(t)
                                    ];
                                    n && d(n).addClass(Y);
                                }
                            }),
                            (t._slide = function(t, e) {
                                var n,
                                    i,
                                    o,
                                    r = this,
                                    s = this._element.querySelector(Z),
                                    a = this._getItemIndex(s),
                                    l = e || (s && this._getItemByDirection(t, s)),
                                    c = this._getItemIndex(l),
                                    u = Boolean(this._interval);
                                if (
                                    ((o =
                                            t === q ? ((n = X), (i = Q), F) : ((n = K), (i = $), B)),
                                        l && d(l).hasClass(Y))
                                )
                                    this._isSliding = !1;
                                else if (!this._triggerSlideEvent(l, o).isDefaultPrevented() &&
                                    s &&
                                    l
                                ) {
                                    (this._isSliding = !0),
                                    u && this.pause(),
                                        this._setActiveIndicatorElement(l);
                                    var h = d.Event(U.SLID, {
                                        relatedTarget: l,
                                        direction: o,
                                        from: a,
                                        to: c
                                    });
                                    if (d(this._element).hasClass(V)) {
                                        d(l).addClass(i),
                                            g.reflow(l),
                                            d(s).addClass(n),
                                            d(l).addClass(n);
                                        var f = parseInt(l.getAttribute("data-interval"), 10);
                                        f
                                            ?
                                            ((this._config.defaultInterval =
                                                    this._config.defaultInterval ||
                                                    this._config.interval),
                                                (this._config.interval = f)) :
                                            (this._config.interval =
                                                this._config.defaultInterval ||
                                                this._config.interval);
                                        var p = g.getTransitionDurationFromElement(s);
                                        d(s)
                                            .one(g.TRANSITION_END, function() {
                                                d(l)
                                                    .removeClass(n + " " + i)
                                                    .addClass(Y),
                                                    d(s).removeClass(Y + " " + i + " " + n),
                                                    (r._isSliding = !1),
                                                    setTimeout(function() {
                                                        return d(r._element).trigger(h);
                                                    }, 0);
                                            })
                                            .emulateTransitionEnd(p);
                                    } else
                                        d(s).removeClass(Y),
                                        d(l).addClass(Y),
                                        (this._isSliding = !1),
                                        d(this._element).trigger(h);
                                    u && this.cycle();
                                }
                            }),
                            (r._jQueryInterface = function(i) {
                                return this.each(function() {
                                    var t = d(this).data(L),
                                        e = l({}, M, d(this).data());
                                    "object" == typeof i && (e = l({}, e, i));
                                    var n = "string" == typeof i ? i : e.slide;
                                    if (
                                        (t || ((t = new r(this, e)), d(this).data(L, t)),
                                            "number" == typeof i)
                                    )
                                        t.to(i);
                                    else if ("string" == typeof n) {
                                        if (void 0 === t[n])
                                            throw new TypeError('No method named "' + n + '"');
                                        t[n]();
                                    } else e.interval && e.ride && (t.pause(), t.cycle());
                                });
                            }),
                            (r._dataApiClickHandler = function(t) {
                                var e = g.getSelectorFromElement(this);
                                if (e) {
                                    var n = d(e)[0];
                                    if (n && d(n).hasClass(z)) {
                                        var i = l({}, d(n).data(), d(this).data()),
                                            o = this.getAttribute("data-slide-to");
                                        o && (i.interval = !1),
                                            r._jQueryInterface.call(d(n), i),
                                            o &&
                                            d(n)
                                            .data(L)
                                            .to(o),
                                            t.preventDefault();
                                    }
                                }
                            }),
                            s(r, null, [{
                                    key: "VERSION",
                                    get: function() {
                                        return "4.3.1";
                                    }
                                },
                                {
                                    key: "Default",
                                    get: function() {
                                        return M;
                                    }
                                }
                            ]),
                            r
                        );
                    })();
                d(document).on(U.CLICK_DATA_API, ot, at._dataApiClickHandler),
                    d(window).on(U.LOAD_DATA_API, function() {
                        for (
                            var t = [].slice.call(document.querySelectorAll(rt)),
                                e = 0,
                                n = t.length; e < n; e++
                        ) {
                            var i = d(t[e]);
                            at._jQueryInterface.call(i, i.data());
                        }
                    }),
                    (d.fn[O] = at._jQueryInterface),
                    (d.fn[O].Constructor = at),
                    (d.fn[O].noConflict = function() {
                        return (d.fn[O] = H), at._jQueryInterface;
                    });
                var lt = "collapse",
                    ct = "bs.collapse",
                    ut = "." + ct,
                    ht = d.fn[lt],
                    ft = {
                        toggle: !0,
                        parent: ""
                    },
                    pt = {
                        toggle: "boolean",
                        parent: "(string|element)"
                    },
                    dt = {
                        SHOW: "show" + ut,
                        SHOWN: "shown" + ut,
                        HIDE: "hide" + ut,
                        HIDDEN: "hidden" + ut,
                        CLICK_DATA_API: "click" + ut + ".data-api"
                    },
                    gt = "show",
                    mt = "collapse",
                    vt = "collapsing",
                    bt = "collapsed",
                    yt = "width",
                    _t = "height",
                    wt = ".show, .collapsing",
                    xt = '[data-toggle="collapse"]',
                    Ct = (function() {
                        function a(e, t) {
                            (this._isTransitioning = !1),
                            (this._element = e),
                            (this._config = this._getConfig(t)),
                            (this._triggerArray = [].slice.call(
                                document.querySelectorAll(
                                    '[data-toggle="collapse"][href="#' +
                                    e.id +
                                    '"],[data-toggle="collapse"][data-target="#' +
                                    e.id +
                                    '"]'
                                )
                            ));
                            for (
                                var n = [].slice.call(document.querySelectorAll(xt)),
                                    i = 0,
                                    o = n.length; i < o; i++
                            ) {
                                var r = n[i],
                                    s = g.getSelectorFromElement(r),
                                    a = [].slice
                                    .call(document.querySelectorAll(s))
                                    .filter(function(t) {
                                        return t === e;
                                    });
                                null !== s &&
                                    0 < a.length &&
                                    ((this._selector = s), this._triggerArray.push(r));
                            }
                            (this._parent = this._config.parent ? this._getParent() : null),
                            this._config.parent ||
                                this._addAriaAndCollapsedClass(
                                    this._element,
                                    this._triggerArray
                                ),
                                this._config.toggle && this.toggle();
                        }
                        var t = a.prototype;
                        return (
                            (t.toggle = function() {
                                d(this._element).hasClass(gt) ? this.hide() : this.show();
                            }),
                            (t.show = function() {
                                var t,
                                    e,
                                    n = this;
                                if (!this._isTransitioning &&
                                    !d(this._element).hasClass(gt) &&
                                    (this._parent &&
                                        0 ===
                                        (t = [].slice
                                            .call(this._parent.querySelectorAll(wt))
                                            .filter(function(t) {
                                                return "string" == typeof n._config.parent ?
                                                    t.getAttribute("data-parent") === n._config.parent :
                                                    t.classList.contains(mt);
                                            })).length &&
                                        (t = null), !(
                                            t &&
                                            (e = d(t)
                                                .not(this._selector)
                                                .data(ct)) &&
                                            e._isTransitioning
                                        ))
                                ) {
                                    var i = d.Event(dt.SHOW);
                                    if ((d(this._element).trigger(i), !i.isDefaultPrevented())) {
                                        t &&
                                            (a._jQueryInterface.call(
                                                    d(t).not(this._selector),
                                                    "hide"
                                                ),
                                                e || d(t).data(ct, null));
                                        var o = this._getDimension();
                                        d(this._element)
                                            .removeClass(mt)
                                            .addClass(vt),
                                            (this._element.style[o] = 0),
                                            this._triggerArray.length &&
                                            d(this._triggerArray)
                                            .removeClass(bt)
                                            .attr("aria-expanded", !0),
                                            this.setTransitioning(!0);
                                        var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                                            s = g.getTransitionDurationFromElement(this._element);
                                        d(this._element)
                                            .one(g.TRANSITION_END, function() {
                                                d(n._element)
                                                    .removeClass(vt)
                                                    .addClass(mt)
                                                    .addClass(gt),
                                                    (n._element.style[o] = ""),
                                                    n.setTransitioning(!1),
                                                    d(n._element).trigger(dt.SHOWN);
                                            })
                                            .emulateTransitionEnd(s),
                                            (this._element.style[o] = this._element[r] + "px");
                                    }
                                }
                            }),
                            (t.hide = function() {
                                var t = this;
                                if (!this._isTransitioning && d(this._element).hasClass(gt)) {
                                    var e = d.Event(dt.HIDE);
                                    if ((d(this._element).trigger(e), !e.isDefaultPrevented())) {
                                        var n = this._getDimension();
                                        (this._element.style[n] =
                                            this._element.getBoundingClientRect()[n] + "px"),
                                        g.reflow(this._element),
                                            d(this._element)
                                            .addClass(vt)
                                            .removeClass(mt)
                                            .removeClass(gt);
                                        var i = this._triggerArray.length;
                                        if (0 < i)
                                            for (var o = 0; o < i; o++) {
                                                var r = this._triggerArray[o],
                                                    s = g.getSelectorFromElement(r);
                                                if (null !== s)
                                                    d(
                                                        [].slice.call(document.querySelectorAll(s))
                                                    ).hasClass(gt) ||
                                                    d(r)
                                                    .addClass(bt)
                                                    .attr("aria-expanded", !1);
                                            }
                                        this.setTransitioning(!0);
                                        this._element.style[n] = "";
                                        var a = g.getTransitionDurationFromElement(this._element);
                                        d(this._element)
                                            .one(g.TRANSITION_END, function() {
                                                t.setTransitioning(!1),
                                                    d(t._element)
                                                    .removeClass(vt)
                                                    .addClass(mt)
                                                    .trigger(dt.HIDDEN);
                                            })
                                            .emulateTransitionEnd(a);
                                    }
                                }
                            }),
                            (t.setTransitioning = function(t) {
                                this._isTransitioning = t;
                            }),
                            (t.dispose = function() {
                                d.removeData(this._element, ct),
                                    (this._config = null),
                                    (this._parent = null),
                                    (this._element = null),
                                    (this._triggerArray = null),
                                    (this._isTransitioning = null);
                            }),
                            (t._getConfig = function(t) {
                                return (
                                    ((t = l({}, ft, t)).toggle = Boolean(t.toggle)),
                                    g.typeCheckConfig(lt, t, pt),
                                    t
                                );
                            }),
                            (t._getDimension = function() {
                                return d(this._element).hasClass(yt) ? yt : _t;
                            }),
                            (t._getParent = function() {
                                var t,
                                    n = this;
                                g.isElement(this._config.parent) ?
                                    ((t = this._config.parent),
                                        void 0 !== this._config.parent.jquery &&
                                        (t = this._config.parent[0])) :
                                    (t = document.querySelector(this._config.parent));
                                var e =
                                    '[data-toggle="collapse"][data-parent="' +
                                    this._config.parent +
                                    '"]',
                                    i = [].slice.call(t.querySelectorAll(e));
                                return (
                                    d(i).each(function(t, e) {
                                        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [
                                            e
                                        ]);
                                    }),
                                    t
                                );
                            }),
                            (t._addAriaAndCollapsedClass = function(t, e) {
                                var n = d(t).hasClass(gt);
                                e.length &&
                                    d(e)
                                    .toggleClass(bt, !n)
                                    .attr("aria-expanded", n);
                            }),
                            (a._getTargetFromElement = function(t) {
                                var e = g.getSelectorFromElement(t);
                                return e ? document.querySelector(e) : null;
                            }),
                            (a._jQueryInterface = function(i) {
                                return this.each(function() {
                                    var t = d(this),
                                        e = t.data(ct),
                                        n = l({}, ft, t.data(), "object" == typeof i && i ? i : {});
                                    if (
                                        (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                                            e || ((e = new a(this, n)), t.data(ct, e)),
                                            "string" == typeof i)
                                    ) {
                                        if (void 0 === e[i])
                                            throw new TypeError('No method named "' + i + '"');
                                        e[i]();
                                    }
                                });
                            }),
                            s(a, null, [{
                                    key: "VERSION",
                                    get: function() {
                                        return "4.3.1";
                                    }
                                },
                                {
                                    key: "Default",
                                    get: function() {
                                        return ft;
                                    }
                                }
                            ]),
                            a
                        );
                    })();
                d(document).on(dt.CLICK_DATA_API, xt, function(t) {
                        "A" === t.currentTarget.tagName && t.preventDefault();
                        var n = d(this),
                            e = g.getSelectorFromElement(this),
                            i = [].slice.call(document.querySelectorAll(e));
                        d(i).each(function() {
                            var t = d(this),
                                e = t.data(ct) ? "toggle" : n.data();
                            Ct._jQueryInterface.call(t, e);
                        });
                    }),
                    (d.fn[lt] = Ct._jQueryInterface),
                    (d.fn[lt].Constructor = Ct),
                    (d.fn[lt].noConflict = function() {
                        return (d.fn[lt] = ht), Ct._jQueryInterface;
                    });
                var Et = "dropdown",
                    Tt = "bs.dropdown",
                    St = "." + Tt,
                    kt = ".data-api",
                    Dt = d.fn[Et],
                    It = new RegExp("38|40|27"),
                    Pt = {
                        HIDE: "hide" + St,
                        HIDDEN: "hidden" + St,
                        SHOW: "show" + St,
                        SHOWN: "shown" + St,
                        CLICK: "click" + St,
                        CLICK_DATA_API: "click" + St + kt,
                        KEYDOWN_DATA_API: "keydown" + St + kt,
                        KEYUP_DATA_API: "keyup" + St + kt
                    },
                    Nt = "disabled",
                    At = "show",
                    Ot = "dropup",
                    Lt = "dropright",
                    jt = "dropleft",
                    Ht = "dropdown-menu-right",
                    Mt = "position-static",
                    Rt = '[data-toggle="dropdown"]',
                    qt = ".dropdown form",
                    Wt = ".dropdown-menu",
                    Ft = ".navbar-nav",
                    Bt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                    Ut = "top-start",
                    zt = "top-end",
                    Yt = "bottom-start",
                    Vt = "bottom-end",
                    Kt = "right-start",
                    Xt = "left-start",
                    Qt = {
                        offset: 0,
                        flip: !0,
                        boundary: "scrollParent",
                        reference: "toggle",
                        display: "dynamic"
                    },
                    $t = {
                        offset: "(number|string|function)",
                        flip: "boolean",
                        boundary: "(string|element)",
                        reference: "(string|element)",
                        display: "string"
                    },
                    Gt = (function() {
                        function c(t, e) {
                            (this._element = t),
                            (this._popper = null),
                            (this._config = this._getConfig(e)),
                            (this._menu = this._getMenuElement()),
                            (this._inNavbar = this._detectNavbar()),
                            this._addEventListeners();
                        }
                        var t = c.prototype;
                        return (
                            (t.toggle = function() {
                                if (!this._element.disabled && !d(this._element).hasClass(Nt)) {
                                    var t = c._getParentFromElement(this._element),
                                        e = d(this._menu).hasClass(At);
                                    if ((c._clearMenus(), !e)) {
                                        var n = {
                                                relatedTarget: this._element
                                            },
                                            i = d.Event(Pt.SHOW, n);
                                        if ((d(t).trigger(i), !i.isDefaultPrevented())) {
                                            if (!this._inNavbar) {
                                                if (void 0 === h)
                                                    throw new TypeError(
                                                        "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                                                    );
                                                var o = this._element;
                                                "parent" === this._config.reference ?
                                                    (o = t) :
                                                    g.isElement(this._config.reference) &&
                                                    ((o = this._config.reference),
                                                        void 0 !== this._config.reference.jquery &&
                                                        (o = this._config.reference[0])),
                                                    "scrollParent" !== this._config.boundary &&
                                                    d(t).addClass(Mt),
                                                    (this._popper = new h(
                                                        o,
                                                        this._menu,
                                                        this._getPopperConfig()
                                                    ));
                                            }
                                            "ontouchstart" in document.documentElement &&
                                                0 === d(t).closest(Ft).length &&
                                                d(document.body)
                                                .children()
                                                .on("mouseover", null, d.noop),
                                                this._element.focus(),
                                                this._element.setAttribute("aria-expanded", !0),
                                                d(this._menu).toggleClass(At),
                                                d(t)
                                                .toggleClass(At)
                                                .trigger(d.Event(Pt.SHOWN, n));
                                        }
                                    }
                                }
                            }),
                            (t.show = function() {
                                if (!(
                                        this._element.disabled ||
                                        d(this._element).hasClass(Nt) ||
                                        d(this._menu).hasClass(At)
                                    )) {
                                    var t = {
                                            relatedTarget: this._element
                                        },
                                        e = d.Event(Pt.SHOW, t),
                                        n = c._getParentFromElement(this._element);
                                    d(n).trigger(e),
                                        e.isDefaultPrevented() ||
                                        (d(this._menu).toggleClass(At),
                                            d(n)
                                            .toggleClass(At)
                                            .trigger(d.Event(Pt.SHOWN, t)));
                                }
                            }),
                            (t.hide = function() {
                                if (!this._element.disabled &&
                                    !d(this._element).hasClass(Nt) &&
                                    d(this._menu).hasClass(At)
                                ) {
                                    var t = {
                                            relatedTarget: this._element
                                        },
                                        e = d.Event(Pt.HIDE, t),
                                        n = c._getParentFromElement(this._element);
                                    d(n).trigger(e),
                                        e.isDefaultPrevented() ||
                                        (d(this._menu).toggleClass(At),
                                            d(n)
                                            .toggleClass(At)
                                            .trigger(d.Event(Pt.HIDDEN, t)));
                                }
                            }),
                            (t.dispose = function() {
                                d.removeData(this._element, Tt),
                                    d(this._element).off(St),
                                    (this._element = null),
                                    (this._menu = null) !== this._popper &&
                                    (this._popper.destroy(), (this._popper = null));
                            }),
                            (t.update = function() {
                                (this._inNavbar = this._detectNavbar()),
                                null !== this._popper && this._popper.scheduleUpdate();
                            }),
                            (t._addEventListeners = function() {
                                var e = this;
                                d(this._element).on(Pt.CLICK, function(t) {
                                    t.preventDefault(), t.stopPropagation(), e.toggle();
                                });
                            }),
                            (t._getConfig = function(t) {
                                return (
                                    (t = l({},
                                        this.constructor.Default,
                                        d(this._element).data(),
                                        t
                                    )),
                                    g.typeCheckConfig(Et, t, this.constructor.DefaultType),
                                    t
                                );
                            }),
                            (t._getMenuElement = function() {
                                if (!this._menu) {
                                    var t = c._getParentFromElement(this._element);
                                    t && (this._menu = t.querySelector(Wt));
                                }
                                return this._menu;
                            }),
                            (t._getPlacement = function() {
                                var t = d(this._element.parentNode),
                                    e = Yt;
                                return (
                                    t.hasClass(Ot) ?
                                    ((e = Ut), d(this._menu).hasClass(Ht) && (e = zt)) :
                                    t.hasClass(Lt) ?
                                    (e = Kt) :
                                    t.hasClass(jt) ?
                                    (e = Xt) :
                                    d(this._menu).hasClass(Ht) && (e = Vt),
                                    e
                                );
                            }),
                            (t._detectNavbar = function() {
                                return 0 < d(this._element).closest(".navbar").length;
                            }),
                            (t._getOffset = function() {
                                var e = this,
                                    t = {};
                                return (
                                    "function" == typeof this._config.offset ?
                                    (t.fn = function(t) {
                                        return (
                                            (t.offsets = l({},
                                                t.offsets,
                                                e._config.offset(t.offsets, e._element) || {}
                                            )),
                                            t
                                        );
                                    }) :
                                    (t.offset = this._config.offset),
                                    t
                                );
                            }),
                            (t._getPopperConfig = function() {
                                var t = {
                                    placement: this._getPlacement(),
                                    modifiers: {
                                        offset: this._getOffset(),
                                        flip: {
                                            enabled: this._config.flip
                                        },
                                        preventOverflow: {
                                            boundariesElement: this._config.boundary
                                        }
                                    }
                                };
                                return (
                                    "static" === this._config.display &&
                                    (t.modifiers.applyStyle = {
                                        enabled: !1
                                    }),
                                    t
                                );
                            }),
                            (c._jQueryInterface = function(e) {
                                return this.each(function() {
                                    var t = d(this).data(Tt);
                                    if (
                                        (t ||
                                            ((t = new c(this, "object" == typeof e ? e : null)),
                                                d(this).data(Tt, t)),
                                            "string" == typeof e)
                                    ) {
                                        if (void 0 === t[e])
                                            throw new TypeError('No method named "' + e + '"');
                                        t[e]();
                                    }
                                });
                            }),
                            (c._clearMenus = function(t) {
                                if (!t ||
                                    (3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                                )
                                    for (
                                        var e = [].slice.call(document.querySelectorAll(Rt)),
                                            n = 0,
                                            i = e.length; n < i; n++
                                    ) {
                                        var o = c._getParentFromElement(e[n]),
                                            r = d(e[n]).data(Tt),
                                            s = {
                                                relatedTarget: e[n]
                                            };
                                        if ((t && "click" === t.type && (s.clickEvent = t), r)) {
                                            var a = r._menu;
                                            if (
                                                d(o).hasClass(At) &&
                                                !(
                                                    t &&
                                                    (("click" === t.type &&
                                                            /input|textarea/i.test(t.target.tagName)) ||
                                                        ("keyup" === t.type && 9 === t.which)) &&
                                                    d.contains(o, t.target)
                                                )
                                            ) {
                                                var l = d.Event(Pt.HIDE, s);
                                                d(o).trigger(l),
                                                    l.isDefaultPrevented() ||
                                                    ("ontouchstart" in document.documentElement &&
                                                        d(document.body)
                                                        .children()
                                                        .off("mouseover", null, d.noop),
                                                        e[n].setAttribute("aria-expanded", "false"),
                                                        d(a).removeClass(At),
                                                        d(o)
                                                        .removeClass(At)
                                                        .trigger(d.Event(Pt.HIDDEN, s)));
                                            }
                                        }
                                    }
                            }),
                            (c._getParentFromElement = function(t) {
                                var e,
                                    n = g.getSelectorFromElement(t);
                                return n && (e = document.querySelector(n)), e || t.parentNode;
                            }),
                            (c._dataApiKeydownHandler = function(t) {
                                if (
                                    (/input|textarea/i.test(t.target.tagName) ?
                                        !(
                                            32 === t.which ||
                                            (27 !== t.which &&
                                                ((40 !== t.which && 38 !== t.which) ||
                                                    d(t.target).closest(Wt).length))
                                        ) :
                                        It.test(t.which)) &&
                                    (t.preventDefault(),
                                        t.stopPropagation(), !this.disabled && !d(this).hasClass(Nt))
                                ) {
                                    var e = c._getParentFromElement(this),
                                        n = d(e).hasClass(At);
                                    if (n && (!n || (27 !== t.which && 32 !== t.which))) {
                                        var i = [].slice.call(e.querySelectorAll(Bt));
                                        if (0 !== i.length) {
                                            var o = i.indexOf(t.target);
                                            38 === t.which && 0 < o && o--,
                                                40 === t.which && o < i.length - 1 && o++,
                                                o < 0 && (o = 0),
                                                i[o].focus();
                                        }
                                    } else {
                                        if (27 === t.which) {
                                            var r = e.querySelector(Rt);
                                            d(r).trigger("focus");
                                        }
                                        d(this).trigger("click");
                                    }
                                }
                            }),
                            s(c, null, [{
                                    key: "VERSION",
                                    get: function() {
                                        return "4.3.1";
                                    }
                                },
                                {
                                    key: "Default",
                                    get: function() {
                                        return Qt;
                                    }
                                },
                                {
                                    key: "DefaultType",
                                    get: function() {
                                        return $t;
                                    }
                                }
                            ]),
                            c
                        );
                    })();
                d(document)
                    .on(Pt.KEYDOWN_DATA_API, Rt, Gt._dataApiKeydownHandler)
                    .on(Pt.KEYDOWN_DATA_API, Wt, Gt._dataApiKeydownHandler)
                    .on(Pt.CLICK_DATA_API + " " + Pt.KEYUP_DATA_API, Gt._clearMenus)
                    .on(Pt.CLICK_DATA_API, Rt, function(t) {
                        t.preventDefault(),
                            t.stopPropagation(),
                            Gt._jQueryInterface.call(d(this), "toggle");
                    })
                    .on(Pt.CLICK_DATA_API, qt, function(t) {
                        t.stopPropagation();
                    }),
                    (d.fn[Et] = Gt._jQueryInterface),
                    (d.fn[Et].Constructor = Gt),
                    (d.fn[Et].noConflict = function() {
                        return (d.fn[Et] = Dt), Gt._jQueryInterface;
                    });
                var Jt = "modal",
                    Zt = "bs.modal",
                    te = "." + Zt,
                    ee = d.fn[Jt],
                    ne = {
                        backdrop: !0,
                        keyboard: !0,
                        focus: !0,
                        show: !0
                    },
                    ie = {
                        backdrop: "(boolean|string)",
                        keyboard: "boolean",
                        focus: "boolean",
                        show: "boolean"
                    },
                    oe = {
                        HIDE: "hide" + te,
                        HIDDEN: "hidden" + te,
                        SHOW: "show" + te,
                        SHOWN: "shown" + te,
                        FOCUSIN: "focusin" + te,
                        RESIZE: "resize" + te,
                        CLICK_DISMISS: "click.dismiss" + te,
                        KEYDOWN_DISMISS: "keydown.dismiss" + te,
                        MOUSEUP_DISMISS: "mouseup.dismiss" + te,
                        MOUSEDOWN_DISMISS: "mousedown.dismiss" + te,
                        CLICK_DATA_API: "click" + te + ".data-api"
                    },
                    re = "modal-dialog-scrollable",
                    se = "modal-scrollbar-measure",
                    ae = "modal-backdrop",
                    le = "modal-open",
                    ce = "fade",
                    ue = "show",
                    he = ".modal-dialog",
                    fe = ".modal-body",
                    pe = '[data-toggle="modal"]',
                    de = '[data-dismiss="modal"]',
                    ge = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    me = ".sticky-top",
                    ve = (function() {
                        function o(t, e) {
                            (this._config = this._getConfig(e)),
                            (this._element = t),
                            (this._dialog = t.querySelector(he)),
                            (this._backdrop = null),
                            (this._isShown = !1),
                            (this._isBodyOverflowing = !1),
                            (this._ignoreBackdropClick = !1),
                            (this._isTransitioning = !1),
                            (this._scrollbarWidth = 0);
                        }
                        var t = o.prototype;
                        return (
                            (t.toggle = function(t) {
                                return this._isShown ? this.hide() : this.show(t);
                            }),
                            (t.show = function(t) {
                                var e = this;
                                if (!this._isShown && !this._isTransitioning) {
                                    d(this._element).hasClass(ce) && (this._isTransitioning = !0);
                                    var n = d.Event(oe.SHOW, {
                                        relatedTarget: t
                                    });
                                    d(this._element).trigger(n),
                                        this._isShown ||
                                        n.isDefaultPrevented() ||
                                        ((this._isShown = !0),
                                            this._checkScrollbar(),
                                            this._setScrollbar(),
                                            this._adjustDialog(),
                                            this._setEscapeEvent(),
                                            this._setResizeEvent(),
                                            d(this._element).on(oe.CLICK_DISMISS, de, function(t) {
                                                return e.hide(t);
                                            }),
                                            d(this._dialog).on(oe.MOUSEDOWN_DISMISS, function() {
                                                d(e._element).one(oe.MOUSEUP_DISMISS, function(t) {
                                                    d(t.target).is(e._element) &&
                                                        (e._ignoreBackdropClick = !0);
                                                });
                                            }),
                                            this._showBackdrop(function() {
                                                return e._showElement(t);
                                            }));
                                }
                            }),
                            (t.hide = function(t) {
                                var e = this;
                                if (
                                    (t && t.preventDefault(),
                                        this._isShown && !this._isTransitioning)
                                ) {
                                    var n = d.Event(oe.HIDE);
                                    if (
                                        (d(this._element).trigger(n),
                                            this._isShown && !n.isDefaultPrevented())
                                    ) {
                                        this._isShown = !1;
                                        var i = d(this._element).hasClass(ce);
                                        if (
                                            (i && (this._isTransitioning = !0),
                                                this._setEscapeEvent(),
                                                this._setResizeEvent(),
                                                d(document).off(oe.FOCUSIN),
                                                d(this._element).removeClass(ue),
                                                d(this._element).off(oe.CLICK_DISMISS),
                                                d(this._dialog).off(oe.MOUSEDOWN_DISMISS),
                                                i)
                                        ) {
                                            var o = g.getTransitionDurationFromElement(this._element);
                                            d(this._element)
                                                .one(g.TRANSITION_END, function(t) {
                                                    return e._hideModal(t);
                                                })
                                                .emulateTransitionEnd(o);
                                        } else this._hideModal();
                                    }
                                }
                            }),
                            (t.dispose = function() {
                                [window, this._element, this._dialog].forEach(function(t) {
                                        return d(t).off(te);
                                    }),
                                    d(document).off(oe.FOCUSIN),
                                    d.removeData(this._element, Zt),
                                    (this._config = null),
                                    (this._element = null),
                                    (this._dialog = null),
                                    (this._backdrop = null),
                                    (this._isShown = null),
                                    (this._isBodyOverflowing = null),
                                    (this._ignoreBackdropClick = null),
                                    (this._isTransitioning = null),
                                    (this._scrollbarWidth = null);
                            }),
                            (t.handleUpdate = function() {
                                this._adjustDialog();
                            }),
                            (t._getConfig = function(t) {
                                return (t = l({}, ne, t)), g.typeCheckConfig(Jt, t, ie), t;
                            }),
                            (t._showElement = function(t) {
                                var e = this,
                                    n = d(this._element).hasClass(ce);
                                (this._element.parentNode &&
                                    this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                                document.body.appendChild(this._element),
                                    (this._element.style.display = "block"),
                                    this._element.removeAttribute("aria-hidden"),
                                    this._element.setAttribute("aria-modal", !0),
                                    d(this._dialog).hasClass(re) ?
                                    (this._dialog.querySelector(fe).scrollTop = 0) :
                                    (this._element.scrollTop = 0),
                                    n && g.reflow(this._element),
                                    d(this._element).addClass(ue),
                                    this._config.focus && this._enforceFocus();

                                function i() {
                                    e._config.focus && e._element.focus(),
                                        (e._isTransitioning = !1),
                                        d(e._element).trigger(o);
                                }
                                var o = d.Event(oe.SHOWN, {
                                    relatedTarget: t
                                });
                                if (n) {
                                    var r = g.getTransitionDurationFromElement(this._dialog);
                                    d(this._dialog)
                                        .one(g.TRANSITION_END, i)
                                        .emulateTransitionEnd(r);
                                } else i();
                            }),
                            (t._enforceFocus = function() {
                                var e = this;
                                d(document)
                                    .off(oe.FOCUSIN)
                                    .on(oe.FOCUSIN, function(t) {
                                        document !== t.target &&
                                            e._element !== t.target &&
                                            0 === d(e._element).has(t.target).length &&
                                            e._element.focus();
                                    });
                            }),
                            (t._setEscapeEvent = function() {
                                var e = this;
                                this._isShown && this._config.keyboard ?
                                    d(this._element).on(oe.KEYDOWN_DISMISS, function(t) {
                                        27 === t.which && (t.preventDefault(), e.hide());
                                    }) :
                                    this._isShown || d(this._element).off(oe.KEYDOWN_DISMISS);
                            }),
                            (t._setResizeEvent = function() {
                                var e = this;
                                this._isShown ?
                                    d(window).on(oe.RESIZE, function(t) {
                                        return e.handleUpdate(t);
                                    }) :
                                    d(window).off(oe.RESIZE);
                            }),
                            (t._hideModal = function() {
                                var t = this;
                                (this._element.style.display = "none"),
                                this._element.setAttribute("aria-hidden", !0),
                                    this._element.removeAttribute("aria-modal"),
                                    (this._isTransitioning = !1),
                                    this._showBackdrop(function() {
                                        d(document.body).removeClass(le),
                                            t._resetAdjustments(),
                                            t._resetScrollbar(),
                                            d(t._element).trigger(oe.HIDDEN);
                                    });
                            }),
                            (t._removeBackdrop = function() {
                                this._backdrop &&
                                    (d(this._backdrop).remove(), (this._backdrop = null));
                            }),
                            (t._showBackdrop = function(t) {
                                var e = this,
                                    n = d(this._element).hasClass(ce) ? ce : "";
                                if (this._isShown && this._config.backdrop) {
                                    if (
                                        ((this._backdrop = document.createElement("div")),
                                            (this._backdrop.className = ae),
                                            n && this._backdrop.classList.add(n),
                                            d(this._backdrop).appendTo(document.body),
                                            d(this._element).on(oe.CLICK_DISMISS, function(t) {
                                                e._ignoreBackdropClick ?
                                                    (e._ignoreBackdropClick = !1) :
                                                    t.target === t.currentTarget &&
                                                    ("static" === e._config.backdrop ?
                                                        e._element.focus() :
                                                        e.hide());
                                            }),
                                            n && g.reflow(this._backdrop),
                                            d(this._backdrop).addClass(ue), !t)
                                    )
                                        return;
                                    if (!n) return void t();
                                    var i = g.getTransitionDurationFromElement(this._backdrop);
                                    d(this._backdrop)
                                        .one(g.TRANSITION_END, t)
                                        .emulateTransitionEnd(i);
                                } else if (!this._isShown && this._backdrop) {
                                    d(this._backdrop).removeClass(ue);
                                    var o = function() {
                                        e._removeBackdrop(), t && t();
                                    };
                                    if (d(this._element).hasClass(ce)) {
                                        var r = g.getTransitionDurationFromElement(this._backdrop);
                                        d(this._backdrop)
                                            .one(g.TRANSITION_END, o)
                                            .emulateTransitionEnd(r);
                                    } else o();
                                } else t && t();
                            }),
                            (t._adjustDialog = function() {
                                var t =
                                    this._element.scrollHeight >
                                    document.documentElement.clientHeight;
                                !this._isBodyOverflowing &&
                                    t &&
                                    (this._element.style.paddingLeft =
                                        this._scrollbarWidth + "px"),
                                    this._isBodyOverflowing &&
                                    !t &&
                                    (this._element.style.paddingRight =
                                        this._scrollbarWidth + "px");
                            }),
                            (t._resetAdjustments = function() {
                                (this._element.style.paddingLeft = ""),
                                (this._element.style.paddingRight = "");
                            }),
                            (t._checkScrollbar = function() {
                                var t = document.body.getBoundingClientRect();
                                (this._isBodyOverflowing =
                                    t.left + t.right < window.innerWidth),
                                (this._scrollbarWidth = this._getScrollbarWidth());
                            }),
                            (t._setScrollbar = function() {
                                var o = this;
                                if (this._isBodyOverflowing) {
                                    var t = [].slice.call(document.querySelectorAll(ge)),
                                        e = [].slice.call(document.querySelectorAll(me));
                                    d(t).each(function(t, e) {
                                            var n = e.style.paddingRight,
                                                i = d(e).css("padding-right");
                                            d(e)
                                                .data("padding-right", n)
                                                .css(
                                                    "padding-right",
                                                    parseFloat(i) + o._scrollbarWidth + "px"
                                                );
                                        }),
                                        d(e).each(function(t, e) {
                                            var n = e.style.marginRight,
                                                i = d(e).css("margin-right");
                                            d(e)
                                                .data("margin-right", n)
                                                .css(
                                                    "margin-right",
                                                    parseFloat(i) - o._scrollbarWidth + "px"
                                                );
                                        });
                                    var n = document.body.style.paddingRight,
                                        i = d(document.body).css("padding-right");
                                    d(document.body)
                                        .data("padding-right", n)
                                        .css(
                                            "padding-right",
                                            parseFloat(i) + this._scrollbarWidth + "px"
                                        );
                                }
                                d(document.body).addClass(le);
                            }),
                            (t._resetScrollbar = function() {
                                var t = [].slice.call(document.querySelectorAll(ge));
                                d(t).each(function(t, e) {
                                    var n = d(e).data("padding-right");
                                    d(e).removeData("padding-right"),
                                        (e.style.paddingRight = n || "");
                                });
                                var e = [].slice.call(document.querySelectorAll("" + me));
                                d(e).each(function(t, e) {
                                    var n = d(e).data("margin-right");
                                    void 0 !== n &&
                                        d(e)
                                        .css("margin-right", n)
                                        .removeData("margin-right");
                                });
                                var n = d(document.body).data("padding-right");
                                d(document.body).removeData("padding-right"),
                                    (document.body.style.paddingRight = n || "");
                            }),
                            (t._getScrollbarWidth = function() {
                                var t = document.createElement("div");
                                (t.className = se), document.body.appendChild(t);
                                var e = t.getBoundingClientRect().width - t.clientWidth;
                                return document.body.removeChild(t), e;
                            }),
                            (o._jQueryInterface = function(n, i) {
                                return this.each(function() {
                                    var t = d(this).data(Zt),
                                        e = l({},
                                            ne,
                                            d(this).data(),
                                            "object" == typeof n && n ? n : {}
                                        );
                                    if (
                                        (t || ((t = new o(this, e)), d(this).data(Zt, t)),
                                            "string" == typeof n)
                                    ) {
                                        if (void 0 === t[n])
                                            throw new TypeError('No method named "' + n + '"');
                                        t[n](i);
                                    } else e.show && t.show(i);
                                });
                            }),
                            s(o, null, [{
                                    key: "VERSION",
                                    get: function() {
                                        return "4.3.1";
                                    }
                                },
                                {
                                    key: "Default",
                                    get: function() {
                                        return ne;
                                    }
                                }
                            ]),
                            o
                        );
                    })();
                d(document).on(oe.CLICK_DATA_API, pe, function(t) {
                        var e,
                            n = this,
                            i = g.getSelectorFromElement(this);
                        i && (e = document.querySelector(i));
                        var o = d(e).data(Zt) ? "toggle" : l({}, d(e).data(), d(this).data());
                        ("A" !== this.tagName && "AREA" !== this.tagName) ||
                        t.preventDefault();
                        var r = d(e).one(oe.SHOW, function(t) {
                            t.isDefaultPrevented() ||
                                r.one(oe.HIDDEN, function() {
                                    d(n).is(":visible") && n.focus();
                                });
                        });
                        ve._jQueryInterface.call(d(e), o, this);
                    }),
                    (d.fn[Jt] = ve._jQueryInterface),
                    (d.fn[Jt].Constructor = ve),
                    (d.fn[Jt].noConflict = function() {
                        return (d.fn[Jt] = ee), ve._jQueryInterface;
                    });
                var be = [
                        "background",
                        "cite",
                        "href",
                        "itemtype",
                        "longdesc",
                        "poster",
                        "src",
                        "xlink:href"
                    ],
                    ye = {
                        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                        a: ["target", "href", "title", "rel"],
                        area: [],
                        b: [],
                        br: [],
                        col: [],
                        code: [],
                        div: [],
                        em: [],
                        hr: [],
                        h1: [],
                        h2: [],
                        h3: [],
                        h4: [],
                        h5: [],
                        h6: [],
                        i: [],
                        img: ["src", "alt", "title", "width", "height"],
                        li: [],
                        ol: [],
                        p: [],
                        pre: [],
                        s: [],
                        small: [],
                        span: [],
                        sub: [],
                        sup: [],
                        strong: [],
                        u: [],
                        ul: []
                    },
                    _e = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
                    we = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

                function xe(t, s, e) {
                    if (0 === t.length) return t;
                    if (e && "function" == typeof e) return e(t);
                    for (
                        var n = new window.DOMParser().parseFromString(t, "text/html"),
                            a = Object.keys(s),
                            l = [].slice.call(n.body.querySelectorAll("*")),
                            i = function(t, e) {
                                var n = l[t],
                                    i = n.nodeName.toLowerCase();
                                if (-1 === a.indexOf(n.nodeName.toLowerCase()))
                                    return n.parentNode.removeChild(n), "continue";
                                var o = [].slice.call(n.attributes),
                                    r = [].concat(s["*"] || [], s[i] || []);
                                o.forEach(function(t) {
                                    !(function(t, e) {
                                        var n = t.nodeName.toLowerCase();
                                        if (-1 !== e.indexOf(n))
                                            return (-1 === be.indexOf(n) ||
                                                Boolean(t.nodeValue.match(_e) || t.nodeValue.match(we))
                                            );
                                        for (
                                            var i = e.filter(function(t) {
                                                    return t instanceof RegExp;
                                                }),
                                                o = 0,
                                                r = i.length; o < r; o++
                                        )
                                            if (n.match(i[o])) return !0;
                                        return !1;
                                    })(t, r) && n.removeAttribute(t.nodeName);
                                });
                            },
                            o = 0,
                            r = l.length; o < r; o++
                    )
                        i(o);
                    return n.body.innerHTML;
                }
                var Ce = "tooltip",
                    Ee = "bs.tooltip",
                    Te = "." + Ee,
                    Se = d.fn[Ce],
                    ke = "bs-tooltip",
                    De = new RegExp("(^|\\s)" + ke + "\\S+", "g"),
                    Ie = ["sanitize", "whiteList", "sanitizeFn"],
                    Pe = {
                        animation: "boolean",
                        template: "string",
                        title: "(string|element|function)",
                        trigger: "string",
                        delay: "(number|object)",
                        html: "boolean",
                        selector: "(string|boolean)",
                        placement: "(string|function)",
                        offset: "(number|string|function)",
                        container: "(string|element|boolean)",
                        fallbackPlacement: "(string|array)",
                        boundary: "(string|element)",
                        sanitize: "boolean",
                        sanitizeFn: "(null|function)",
                        whiteList: "object"
                    },
                    Ne = {
                        AUTO: "auto",
                        TOP: "top",
                        RIGHT: "right",
                        BOTTOM: "bottom",
                        LEFT: "left"
                    },
                    Ae = {
                        animation: !0,
                        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                        trigger: "hover focus",
                        title: "",
                        delay: 0,
                        html: !1,
                        selector: !1,
                        placement: "top",
                        offset: 0,
                        container: !1,
                        fallbackPlacement: "flip",
                        boundary: "scrollParent",
                        sanitize: !0,
                        sanitizeFn: null,
                        whiteList: ye
                    },
                    Oe = "show",
                    Le = "out",
                    je = {
                        HIDE: "hide" + Te,
                        HIDDEN: "hidden" + Te,
                        SHOW: "show" + Te,
                        SHOWN: "shown" + Te,
                        INSERTED: "inserted" + Te,
                        CLICK: "click" + Te,
                        FOCUSIN: "focusin" + Te,
                        FOCUSOUT: "focusout" + Te,
                        MOUSEENTER: "mouseenter" + Te,
                        MOUSELEAVE: "mouseleave" + Te
                    },
                    He = "fade",
                    Me = "show",
                    Re = ".tooltip-inner",
                    qe = ".arrow",
                    We = "hover",
                    Fe = "focus",
                    Be = "click",
                    Ue = "manual",
                    ze = (function() {
                        function i(t, e) {
                            if (void 0 === h)
                                throw new TypeError(
                                    "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
                                );
                            (this._isEnabled = !0),
                            (this._timeout = 0),
                            (this._hoverState = ""),
                            (this._activeTrigger = {}),
                            (this._popper = null),
                            (this.element = t),
                            (this.config = this._getConfig(e)),
                            (this.tip = null),
                            this._setListeners();
                        }
                        var t = i.prototype;
                        return (
                            (t.enable = function() {
                                this._isEnabled = !0;
                            }),
                            (t.disable = function() {
                                this._isEnabled = !1;
                            }),
                            (t.toggleEnabled = function() {
                                this._isEnabled = !this._isEnabled;
                            }),
                            (t.toggle = function(t) {
                                if (this._isEnabled)
                                    if (t) {
                                        var e = this.constructor.DATA_KEY,
                                            n = d(t.currentTarget).data(e);
                                        n ||
                                            ((n = new this.constructor(
                                                    t.currentTarget,
                                                    this._getDelegateConfig()
                                                )),
                                                d(t.currentTarget).data(e, n)),
                                            (n._activeTrigger.click = !n._activeTrigger.click),
                                            n._isWithActiveTrigger() ?
                                            n._enter(null, n) :
                                            n._leave(null, n);
                                    } else {
                                        if (d(this.getTipElement()).hasClass(Me))
                                            return void this._leave(null, this);
                                        this._enter(null, this);
                                    }
                            }),
                            (t.dispose = function() {
                                clearTimeout(this._timeout),
                                    d.removeData(this.element, this.constructor.DATA_KEY),
                                    d(this.element).off(this.constructor.EVENT_KEY),
                                    d(this.element)
                                    .closest(".modal")
                                    .off("hide.bs.modal"),
                                    this.tip && d(this.tip).remove(),
                                    (this._isEnabled = null),
                                    (this._timeout = null),
                                    (this._hoverState = null),
                                    (this._activeTrigger = null) !== this._popper &&
                                    this._popper.destroy(),
                                    (this._popper = null),
                                    (this.element = null),
                                    (this.config = null),
                                    (this.tip = null);
                            }),
                            (t.show = function() {
                                var e = this;
                                if ("none" === d(this.element).css("display"))
                                    throw new Error("Please use show on visible elements");
                                var t = d.Event(this.constructor.Event.SHOW);
                                if (this.isWithContent() && this._isEnabled) {
                                    d(this.element).trigger(t);
                                    var n = g.findShadowRoot(this.element),
                                        i = d.contains(
                                            null !== n ?
                                            n :
                                            this.element.ownerDocument.documentElement,
                                            this.element
                                        );
                                    if (t.isDefaultPrevented() || !i) return;
                                    var o = this.getTipElement(),
                                        r = g.getUID(this.constructor.NAME);
                                    o.setAttribute("id", r),
                                        this.element.setAttribute("aria-describedby", r),
                                        this.setContent(),
                                        this.config.animation && d(o).addClass(He);
                                    var s =
                                        "function" == typeof this.config.placement ?
                                        this.config.placement.call(this, o, this.element) :
                                        this.config.placement,
                                        a = this._getAttachment(s);
                                    this.addAttachmentClass(a);
                                    var l = this._getContainer();
                                    d(o).data(this.constructor.DATA_KEY, this),
                                        d.contains(
                                            this.element.ownerDocument.documentElement,
                                            this.tip
                                        ) || d(o).appendTo(l),
                                        d(this.element).trigger(this.constructor.Event.INSERTED),
                                        (this._popper = new h(this.element, o, {
                                            placement: a,
                                            modifiers: {
                                                offset: this._getOffset(),
                                                flip: {
                                                    behavior: this.config.fallbackPlacement
                                                },
                                                arrow: {
                                                    element: qe
                                                },
                                                preventOverflow: {
                                                    boundariesElement: this.config.boundary
                                                }
                                            },
                                            onCreate: function(t) {
                                                t.originalPlacement !== t.placement &&
                                                    e._handlePopperPlacementChange(t);
                                            },
                                            onUpdate: function(t) {
                                                return e._handlePopperPlacementChange(t);
                                            }
                                        })),
                                        d(o).addClass(Me),
                                        "ontouchstart" in document.documentElement &&
                                        d(document.body)
                                        .children()
                                        .on("mouseover", null, d.noop);
                                    var c = function() {
                                        e.config.animation && e._fixTransition();
                                        var t = e._hoverState;
                                        (e._hoverState = null),
                                        d(e.element).trigger(e.constructor.Event.SHOWN),
                                            t === Le && e._leave(null, e);
                                    };
                                    if (d(this.tip).hasClass(He)) {
                                        var u = g.getTransitionDurationFromElement(this.tip);
                                        d(this.tip)
                                            .one(g.TRANSITION_END, c)
                                            .emulateTransitionEnd(u);
                                    } else c();
                                }
                            }),
                            (t.hide = function(t) {
                                function e() {
                                    n._hoverState !== Oe &&
                                        i.parentNode &&
                                        i.parentNode.removeChild(i),
                                        n._cleanTipClass(),
                                        n.element.removeAttribute("aria-describedby"),
                                        d(n.element).trigger(n.constructor.Event.HIDDEN),
                                        null !== n._popper && n._popper.destroy(),
                                        t && t();
                                }
                                var n = this,
                                    i = this.getTipElement(),
                                    o = d.Event(this.constructor.Event.HIDE);
                                if ((d(this.element).trigger(o), !o.isDefaultPrevented())) {
                                    if (
                                        (d(i).removeClass(Me),
                                            "ontouchstart" in document.documentElement &&
                                            d(document.body)
                                            .children()
                                            .off("mouseover", null, d.noop),
                                            (this._activeTrigger[Be] = !1),
                                            (this._activeTrigger[Fe] = !1),
                                            (this._activeTrigger[We] = !1),
                                            d(this.tip).hasClass(He))
                                    ) {
                                        var r = g.getTransitionDurationFromElement(i);
                                        d(i)
                                            .one(g.TRANSITION_END, e)
                                            .emulateTransitionEnd(r);
                                    } else e();
                                    this._hoverState = "";
                                }
                            }),
                            (t.update = function() {
                                null !== this._popper && this._popper.scheduleUpdate();
                            }),
                            (t.isWithContent = function() {
                                return Boolean(this.getTitle());
                            }),
                            (t.addAttachmentClass = function(t) {
                                d(this.getTipElement()).addClass(ke + "-" + t);
                            }),
                            (t.getTipElement = function() {
                                return (
                                    (this.tip = this.tip || d(this.config.template)[0]), this.tip
                                );
                            }),
                            (t.setContent = function() {
                                var t = this.getTipElement();
                                this.setElementContent(
                                        d(t.querySelectorAll(Re)),
                                        this.getTitle()
                                    ),
                                    d(t).removeClass(He + " " + Me);
                            }),
                            (t.setElementContent = function(t, e) {
                                "object" != typeof e || (!e.nodeType && !e.jquery) ?
                                    this.config.html ?
                                    (this.config.sanitize &&
                                        (e = xe(
                                            e,
                                            this.config.whiteList,
                                            this.config.sanitizeFn
                                        )),
                                        t.html(e)) :
                                    t.text(e) :
                                    this.config.html ?
                                    d(e)
                                    .parent()
                                    .is(t) || t.empty().append(e) :
                                    t.text(d(e).text());
                            }),
                            (t.getTitle = function() {
                                var t = this.element.getAttribute("data-original-title");
                                return (t =
                                    t ||
                                    ("function" == typeof this.config.title ?
                                        this.config.title.call(this.element) :
                                        this.config.title));
                            }),
                            (t._getOffset = function() {
                                var e = this,
                                    t = {};
                                return (
                                    "function" == typeof this.config.offset ?
                                    (t.fn = function(t) {
                                        return (
                                            (t.offsets = l({},
                                                t.offsets,
                                                e.config.offset(t.offsets, e.element) || {}
                                            )),
                                            t
                                        );
                                    }) :
                                    (t.offset = this.config.offset),
                                    t
                                );
                            }),
                            (t._getContainer = function() {
                                return !1 === this.config.container ?
                                    document.body :
                                    g.isElement(this.config.container) ?
                                    d(this.config.container) :
                                    d(document).find(this.config.container);
                            }),
                            (t._getAttachment = function(t) {
                                return Ne[t.toUpperCase()];
                            }),
                            (t._setListeners = function() {
                                var i = this;
                                this.config.trigger.split(" ").forEach(function(t) {
                                        if ("click" === t)
                                            d(i.element).on(
                                                i.constructor.Event.CLICK,
                                                i.config.selector,
                                                function(t) {
                                                    return i.toggle(t);
                                                }
                                            );
                                        else if (t !== Ue) {
                                            var e =
                                                t === We ?
                                                i.constructor.Event.MOUSEENTER :
                                                i.constructor.Event.FOCUSIN,
                                                n =
                                                t === We ?
                                                i.constructor.Event.MOUSELEAVE :
                                                i.constructor.Event.FOCUSOUT;
                                            d(i.element)
                                                .on(e, i.config.selector, function(t) {
                                                    return i._enter(t);
                                                })
                                                .on(n, i.config.selector, function(t) {
                                                    return i._leave(t);
                                                });
                                        }
                                    }),
                                    d(this.element)
                                    .closest(".modal")
                                    .on("hide.bs.modal", function() {
                                        i.element && i.hide();
                                    }),
                                    this.config.selector ?
                                    (this.config = l({}, this.config, {
                                        trigger: "manual",
                                        selector: ""
                                    })) :
                                    this._fixTitle();
                            }),
                            (t._fixTitle = function() {
                                var t = typeof this.element.getAttribute("data-original-title");
                                (!this.element.getAttribute("title") && "string" == t) ||
                                (this.element.setAttribute(
                                        "data-original-title",
                                        this.element.getAttribute("title") || ""
                                    ),
                                    this.element.setAttribute("title", ""));
                            }),
                            (t._enter = function(t, e) {
                                var n = this.constructor.DATA_KEY;
                                (e = e || d(t.currentTarget).data(n)) ||
                                ((e = new this.constructor(
                                        t.currentTarget,
                                        this._getDelegateConfig()
                                    )),
                                    d(t.currentTarget).data(n, e)),
                                t && (e._activeTrigger["focusin" === t.type ? Fe : We] = !0),
                                    d(e.getTipElement()).hasClass(Me) || e._hoverState === Oe ?
                                    (e._hoverState = Oe) :
                                    (clearTimeout(e._timeout),
                                        (e._hoverState = Oe),
                                        e.config.delay && e.config.delay.show ?
                                        (e._timeout = setTimeout(function() {
                                            e._hoverState === Oe && e.show();
                                        }, e.config.delay.show)) :
                                        e.show());
                            }),
                            (t._leave = function(t, e) {
                                var n = this.constructor.DATA_KEY;
                                (e = e || d(t.currentTarget).data(n)) ||
                                ((e = new this.constructor(
                                        t.currentTarget,
                                        this._getDelegateConfig()
                                    )),
                                    d(t.currentTarget).data(n, e)),
                                t && (e._activeTrigger["focusout" === t.type ? Fe : We] = !1),
                                    e._isWithActiveTrigger() ||
                                    (clearTimeout(e._timeout),
                                        (e._hoverState = Le),
                                        e.config.delay && e.config.delay.hide ?
                                        (e._timeout = setTimeout(function() {
                                            e._hoverState === Le && e.hide();
                                        }, e.config.delay.hide)) :
                                        e.hide());
                            }),
                            (t._isWithActiveTrigger = function() {
                                for (var t in this._activeTrigger)
                                    if (this._activeTrigger[t]) return !0;
                                return !1;
                            }),
                            (t._getConfig = function(t) {
                                var e = d(this.element).data();
                                return (
                                    Object.keys(e).forEach(function(t) {
                                        -1 !== Ie.indexOf(t) && delete e[t];
                                    }),
                                    "number" ==
                                    typeof(t = l({},
                                        this.constructor.Default,
                                        e,
                                        "object" == typeof t && t ? t : {}
                                    )).delay &&
                                    (t.delay = {
                                        show: t.delay,
                                        hide: t.delay
                                    }),
                                    "number" == typeof t.title && (t.title = t.title.toString()),
                                    "number" == typeof t.content &&
                                    (t.content = t.content.toString()),
                                    g.typeCheckConfig(Ce, t, this.constructor.DefaultType),
                                    t.sanitize &&
                                    (t.template = xe(t.template, t.whiteList, t.sanitizeFn)),
                                    t
                                );
                            }),
                            (t._getDelegateConfig = function() {
                                var t = {};
                                if (this.config)
                                    for (var e in this.config)
                                        this.constructor.Default[e] !== this.config[e] &&
                                        (t[e] = this.config[e]);
                                return t;
                            }),
                            (t._cleanTipClass = function() {
                                var t = d(this.getTipElement()),
                                    e = t.attr("class").match(De);
                                null !== e && e.length && t.removeClass(e.join(""));
                            }),
                            (t._handlePopperPlacementChange = function(t) {
                                var e = t.instance;
                                (this.tip = e.popper),
                                this._cleanTipClass(),
                                    this.addAttachmentClass(this._getAttachment(t.placement));
                            }),
                            (t._fixTransition = function() {
                                var t = this.getTipElement(),
                                    e = this.config.animation;
                                null === t.getAttribute("x-placement") &&
                                    (d(t).removeClass(He),
                                        (this.config.animation = !1),
                                        this.hide(),
                                        this.show(),
                                        (this.config.animation = e));
                            }),
                            (i._jQueryInterface = function(n) {
                                return this.each(function() {
                                    var t = d(this).data(Ee),
                                        e = "object" == typeof n && n;
                                    if (
                                        (t || !/dispose|hide/.test(n)) &&
                                        (t || ((t = new i(this, e)), d(this).data(Ee, t)),
                                            "string" == typeof n)
                                    ) {
                                        if (void 0 === t[n])
                                            throw new TypeError('No method named "' + n + '"');
                                        t[n]();
                                    }
                                });
                            }),
                            s(i, null, [{
                                    key: "VERSION",
                                    get: function() {
                                        return "4.3.1";
                                    }
                                },
                                {
                                    key: "Default",
                                    get: function() {
                                        return Ae;
                                    }
                                },
                                {
                                    key: "NAME",
                                    get: function() {
                                        return Ce;
                                    }
                                },
                                {
                                    key: "DATA_KEY",
                                    get: function() {
                                        return Ee;
                                    }
                                },
                                {
                                    key: "Event",
                                    get: function() {
                                        return je;
                                    }
                                },
                                {
                                    key: "EVENT_KEY",
                                    get: function() {
                                        return Te;
                                    }
                                },
                                {
                                    key: "DefaultType",
                                    get: function() {
                                        return Pe;
                                    }
                                }
                            ]),
                            i
                        );
                    })();
                (d.fn[Ce] = ze._jQueryInterface),
                (d.fn[Ce].Constructor = ze),
                (d.fn[Ce].noConflict = function() {
                    return (d.fn[Ce] = Se), ze._jQueryInterface;
                });
                var Ye = "popover",
                    Ve = "bs.popover",
                    Ke = "." + Ve,
                    Xe = d.fn[Ye],
                    Qe = "bs-popover",
                    $e = new RegExp("(^|\\s)" + Qe + "\\S+", "g"),
                    Ge = l({}, ze.Default, {
                        placement: "right",
                        trigger: "click",
                        content: "",
                        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                    }),
                    Je = l({}, ze.DefaultType, {
                        content: "(string|element|function)"
                    }),
                    Ze = "fade",
                    tn = "show",
                    en = ".popover-header",
                    nn = ".popover-body",
                    on = {
                        HIDE: "hide" + Ke,
                        HIDDEN: "hidden" + Ke,
                        SHOW: "show" + Ke,
                        SHOWN: "shown" + Ke,
                        INSERTED: "inserted" + Ke,
                        CLICK: "click" + Ke,
                        FOCUSIN: "focusin" + Ke,
                        FOCUSOUT: "focusout" + Ke,
                        MOUSEENTER: "mouseenter" + Ke,
                        MOUSELEAVE: "mouseleave" + Ke
                    },
                    rn = (function(t) {
                        function i() {
                            return t.apply(this, arguments) || this;
                        }!(function(t, e) {
                            (t.prototype = Object.create(e.prototype)),
                            ((t.prototype.constructor = t).__proto__ = e);
                        })(i, t);
                        var e = i.prototype;
                        return (
                            (e.isWithContent = function() {
                                return this.getTitle() || this._getContent();
                            }),
                            (e.addAttachmentClass = function(t) {
                                d(this.getTipElement()).addClass(Qe + "-" + t);
                            }),
                            (e.getTipElement = function() {
                                return (
                                    (this.tip = this.tip || d(this.config.template)[0]), this.tip
                                );
                            }),
                            (e.setContent = function() {
                                var t = d(this.getTipElement());
                                this.setElementContent(t.find(en), this.getTitle());
                                var e = this._getContent();
                                "function" == typeof e && (e = e.call(this.element)),
                                    this.setElementContent(t.find(nn), e),
                                    t.removeClass(Ze + " " + tn);
                            }),
                            (e._getContent = function() {
                                return (
                                    this.element.getAttribute("data-content") ||
                                    this.config.content
                                );
                            }),
                            (e._cleanTipClass = function() {
                                var t = d(this.getTipElement()),
                                    e = t.attr("class").match($e);
                                null !== e && 0 < e.length && t.removeClass(e.join(""));
                            }),
                            (i._jQueryInterface = function(n) {
                                return this.each(function() {
                                    var t = d(this).data(Ve),
                                        e = "object" == typeof n ? n : null;
                                    if (
                                        (t || !/dispose|hide/.test(n)) &&
                                        (t || ((t = new i(this, e)), d(this).data(Ve, t)),
                                            "string" == typeof n)
                                    ) {
                                        if (void 0 === t[n])
                                            throw new TypeError('No method named "' + n + '"');
                                        t[n]();
                                    }
                                });
                            }),
                            s(i, null, [{
                                    key: "VERSION",
                                    get: function() {
                                        return "4.3.1";
                                    }
                                },
                                {
                                    key: "Default",
                                    get: function() {
                                        return Ge;
                                    }
                                },
                                {
                                    key: "NAME",
                                    get: function() {
                                        return Ye;
                                    }
                                },
                                {
                                    key: "DATA_KEY",
                                    get: function() {
                                        return Ve;
                                    }
                                },
                                {
                                    key: "Event",
                                    get: function() {
                                        return on;
                                    }
                                },
                                {
                                    key: "EVENT_KEY",
                                    get: function() {
                                        return Ke;
                                    }
                                },
                                {
                                    key: "DefaultType",
                                    get: function() {
                                        return Je;
                                    }
                                }
                            ]),
                            i
                        );
                    })(ze);
                (d.fn[Ye] = rn._jQueryInterface),
                (d.fn[Ye].Constructor = rn),
                (d.fn[Ye].noConflict = function() {
                    return (d.fn[Ye] = Xe), rn._jQueryInterface;
                });
                var sn = "scrollspy",
                    an = "bs.scrollspy",
                    ln = "." + an,
                    cn = d.fn[sn],
                    un = {
                        offset: 10,
                        method: "auto",
                        target: ""
                    },
                    hn = {
                        offset: "number",
                        method: "string",
                        target: "(string|element)"
                    },
                    fn = {
                        ACTIVATE: "activate" + ln,
                        SCROLL: "scroll" + ln,
                        LOAD_DATA_API: "load" + ln + ".data-api"
                    },
                    pn = "dropdown-item",
                    dn = "active",
                    gn = '[data-spy="scroll"]',
                    mn = ".nav, .list-group",
                    vn = ".nav-link",
                    bn = ".nav-item",
                    yn = ".list-group-item",
                    _n = ".dropdown",
                    wn = ".dropdown-item",
                    xn = ".dropdown-toggle",
                    Cn = "offset",
                    En = "position",
                    Tn = (function() {
                        function n(t, e) {
                            var n = this;
                            (this._element = t),
                            (this._scrollElement = "BODY" === t.tagName ? window : t),
                            (this._config = this._getConfig(e)),
                            (this._selector =
                                this._config.target +
                                " " +
                                vn +
                                "," +
                                this._config.target +
                                " " +
                                yn +
                                "," +
                                this._config.target +
                                " " +
                                wn),
                            (this._offsets = []),
                            (this._targets = []),
                            (this._activeTarget = null),
                            (this._scrollHeight = 0),
                            d(this._scrollElement).on(fn.SCROLL, function(t) {
                                    return n._process(t);
                                }),
                                this.refresh(),
                                this._process();
                        }
                        var t = n.prototype;
                        return (
                            (t.refresh = function() {
                                var e = this,
                                    t =
                                    this._scrollElement === this._scrollElement.window ?
                                    Cn :
                                    En,
                                    o = "auto" === this._config.method ? t : this._config.method,
                                    r = o === En ? this._getScrollTop() : 0;
                                (this._offsets = []),
                                (this._targets = []),
                                (this._scrollHeight = this._getScrollHeight()), [].slice
                                    .call(document.querySelectorAll(this._selector))
                                    .map(function(t) {
                                        var e,
                                            n = g.getSelectorFromElement(t);
                                        if ((n && (e = document.querySelector(n)), e)) {
                                            var i = e.getBoundingClientRect();
                                            if (i.width || i.height) return [d(e)[o]().top + r, n];
                                        }
                                        return null;
                                    })
                                    .filter(function(t) {
                                        return t;
                                    })
                                    .sort(function(t, e) {
                                        return t[0] - e[0];
                                    })
                                    .forEach(function(t) {
                                        e._offsets.push(t[0]), e._targets.push(t[1]);
                                    });
                            }),
                            (t.dispose = function() {
                                d.removeData(this._element, an),
                                    d(this._scrollElement).off(ln),
                                    (this._element = null),
                                    (this._scrollElement = null),
                                    (this._config = null),
                                    (this._selector = null),
                                    (this._offsets = null),
                                    (this._targets = null),
                                    (this._activeTarget = null),
                                    (this._scrollHeight = null);
                            }),
                            (t._getConfig = function(t) {
                                if (
                                    "string" !=
                                    typeof(t = l({}, un, "object" == typeof t && t ? t : {}))
                                    .target
                                ) {
                                    var e = d(t.target).attr("id");
                                    e || ((e = g.getUID(sn)), d(t.target).attr("id", e)),
                                        (t.target = "#" + e);
                                }
                                return g.typeCheckConfig(sn, t, hn), t;
                            }),
                            (t._getScrollTop = function() {
                                return this._scrollElement === window ?
                                    this._scrollElement.pageYOffset :
                                    this._scrollElement.scrollTop;
                            }),
                            (t._getScrollHeight = function() {
                                return (
                                    this._scrollElement.scrollHeight ||
                                    Math.max(
                                        document.body.scrollHeight,
                                        document.documentElement.scrollHeight
                                    )
                                );
                            }),
                            (t._getOffsetHeight = function() {
                                return this._scrollElement === window ?
                                    window.innerHeight :
                                    this._scrollElement.getBoundingClientRect().height;
                            }),
                            (t._process = function() {
                                var t = this._getScrollTop() + this._config.offset,
                                    e = this._getScrollHeight(),
                                    n = this._config.offset + e - this._getOffsetHeight();
                                if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
                                    var i = this._targets[this._targets.length - 1];
                                    this._activeTarget !== i && this._activate(i);
                                } else {
                                    if (
                                        this._activeTarget &&
                                        t < this._offsets[0] &&
                                        0 < this._offsets[0]
                                    )
                                        return (this._activeTarget = null), void this._clear();
                                    for (var o = this._offsets.length; o--;) {
                                        this._activeTarget !== this._targets[o] &&
                                            t >= this._offsets[o] &&
                                            (void 0 === this._offsets[o + 1] ||
                                                t < this._offsets[o + 1]) &&
                                            this._activate(this._targets[o]);
                                    }
                                }
                            }),
                            (t._activate = function(e) {
                                (this._activeTarget = e), this._clear();
                                var t = this._selector.split(",").map(function(t) {
                                        return (
                                            t +
                                            '[data-target="' +
                                            e +
                                            '"],' +
                                            t +
                                            '[href="' +
                                            e +
                                            '"]'
                                        );
                                    }),
                                    n = d([].slice.call(document.querySelectorAll(t.join(","))));
                                n.hasClass(pn) ?
                                    (n
                                        .closest(_n)
                                        .find(xn)
                                        .addClass(dn),
                                        n.addClass(dn)) :
                                    (n.addClass(dn),
                                        n
                                        .parents(mn)
                                        .prev(vn + ", " + yn)
                                        .addClass(dn),
                                        n
                                        .parents(mn)
                                        .prev(bn)
                                        .children(vn)
                                        .addClass(dn)),
                                    d(this._scrollElement).trigger(fn.ACTIVATE, {
                                        relatedTarget: e
                                    });
                            }),
                            (t._clear = function() {
                                [].slice
                                    .call(document.querySelectorAll(this._selector))
                                    .filter(function(t) {
                                        return t.classList.contains(dn);
                                    })
                                    .forEach(function(t) {
                                        return t.classList.remove(dn);
                                    });
                            }),
                            (n._jQueryInterface = function(e) {
                                return this.each(function() {
                                    var t = d(this).data(an);
                                    if (
                                        (t ||
                                            ((t = new n(this, "object" == typeof e && e)),
                                                d(this).data(an, t)),
                                            "string" == typeof e)
                                    ) {
                                        if (void 0 === t[e])
                                            throw new TypeError('No method named "' + e + '"');
                                        t[e]();
                                    }
                                });
                            }),
                            s(n, null, [{
                                    key: "VERSION",
                                    get: function() {
                                        return "4.3.1";
                                    }
                                },
                                {
                                    key: "Default",
                                    get: function() {
                                        return un;
                                    }
                                }
                            ]),
                            n
                        );
                    })();
                d(window).on(fn.LOAD_DATA_API, function() {
                        for (
                            var t = [].slice.call(document.querySelectorAll(gn)), e = t.length; e--;

                        ) {
                            var n = d(t[e]);
                            Tn._jQueryInterface.call(n, n.data());
                        }
                    }),
                    (d.fn[sn] = Tn._jQueryInterface),
                    (d.fn[sn].Constructor = Tn),
                    (d.fn[sn].noConflict = function() {
                        return (d.fn[sn] = cn), Tn._jQueryInterface;
                    });
                var Sn = "bs.tab",
                    kn = "." + Sn,
                    Dn = d.fn.tab,
                    In = {
                        HIDE: "hide" + kn,
                        HIDDEN: "hidden" + kn,
                        SHOW: "show" + kn,
                        SHOWN: "shown" + kn,
                        CLICK_DATA_API: "click.bs.tab.data-api"
                    },
                    Pn = "dropdown-menu",
                    Nn = "active",
                    An = "disabled",
                    On = "fade",
                    Ln = "show",
                    jn = ".dropdown",
                    Hn = ".nav, .list-group",
                    Mn = ".active",
                    Rn = "> li > .active",
                    qn =
                    '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                    Wn = ".dropdown-toggle",
                    Fn = "> .dropdown-menu .active",
                    Bn = (function() {
                        function i(t) {
                            this._element = t;
                        }
                        var t = i.prototype;
                        return (
                            (t.show = function() {
                                var n = this;
                                if (!(
                                        (this._element.parentNode &&
                                            this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                                            d(this._element).hasClass(Nn)) ||
                                        d(this._element).hasClass(An)
                                    )) {
                                    var t,
                                        i,
                                        e = d(this._element).closest(Hn)[0],
                                        o = g.getSelectorFromElement(this._element);
                                    if (e) {
                                        var r =
                                            "UL" === e.nodeName || "OL" === e.nodeName ? Rn : Mn;
                                        i = (i = d.makeArray(d(e).find(r)))[i.length - 1];
                                    }
                                    var s = d.Event(In.HIDE, {
                                            relatedTarget: this._element
                                        }),
                                        a = d.Event(In.SHOW, {
                                            relatedTarget: i
                                        });
                                    if (
                                        (i && d(i).trigger(s),
                                            d(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented())
                                    ) {
                                        o && (t = document.querySelector(o)),
                                            this._activate(this._element, e);
                                        var l = function() {
                                            var t = d.Event(In.HIDDEN, {
                                                    relatedTarget: n._element
                                                }),
                                                e = d.Event(In.SHOWN, {
                                                    relatedTarget: i
                                                });
                                            d(i).trigger(t), d(n._element).trigger(e);
                                        };
                                        t ? this._activate(t, t.parentNode, l) : l();
                                    }
                                }
                            }),
                            (t.dispose = function() {
                                d.removeData(this._element, Sn), (this._element = null);
                            }),
                            (t._activate = function(t, e, n) {
                                function i() {
                                    return o._transitionComplete(t, r, n);
                                }
                                var o = this,
                                    r = (!e || ("UL" !== e.nodeName && "OL" !== e.nodeName) ?
                                        d(e).children(Mn) :
                                        d(e).find(Rn))[0],
                                    s = n && r && d(r).hasClass(On);
                                if (r && s) {
                                    var a = g.getTransitionDurationFromElement(r);
                                    d(r)
                                        .removeClass(Ln)
                                        .one(g.TRANSITION_END, i)
                                        .emulateTransitionEnd(a);
                                } else i();
                            }),
                            (t._transitionComplete = function(t, e, n) {
                                if (e) {
                                    d(e).removeClass(Nn);
                                    var i = d(e.parentNode).find(Fn)[0];
                                    i && d(i).removeClass(Nn),
                                        "tab" === e.getAttribute("role") &&
                                        e.setAttribute("aria-selected", !1);
                                }
                                if (
                                    (d(t).addClass(Nn),
                                        "tab" === t.getAttribute("role") &&
                                        t.setAttribute("aria-selected", !0),
                                        g.reflow(t),
                                        t.classList.contains(On) && t.classList.add(Ln),
                                        t.parentNode && d(t.parentNode).hasClass(Pn))
                                ) {
                                    var o = d(t).closest(jn)[0];
                                    if (o) {
                                        var r = [].slice.call(o.querySelectorAll(Wn));
                                        d(r).addClass(Nn);
                                    }
                                    t.setAttribute("aria-expanded", !0);
                                }
                                n && n();
                            }),
                            (i._jQueryInterface = function(n) {
                                return this.each(function() {
                                    var t = d(this),
                                        e = t.data(Sn);
                                    if (
                                        (e || ((e = new i(this)), t.data(Sn, e)),
                                            "string" == typeof n)
                                    ) {
                                        if (void 0 === e[n])
                                            throw new TypeError('No method named "' + n + '"');
                                        e[n]();
                                    }
                                });
                            }),
                            s(i, null, [{
                                key: "VERSION",
                                get: function() {
                                    return "4.3.1";
                                }
                            }]),
                            i
                        );
                    })();
                d(document).on(In.CLICK_DATA_API, qn, function(t) {
                        t.preventDefault(), Bn._jQueryInterface.call(d(this), "show");
                    }),
                    (d.fn.tab = Bn._jQueryInterface),
                    (d.fn.tab.Constructor = Bn),
                    (d.fn.tab.noConflict = function() {
                        return (d.fn.tab = Dn), Bn._jQueryInterface;
                    });
                var Un = "toast",
                    zn = "bs.toast",
                    Yn = "." + zn,
                    Vn = d.fn[Un],
                    Kn = {
                        CLICK_DISMISS: "click.dismiss" + Yn,
                        HIDE: "hide" + Yn,
                        HIDDEN: "hidden" + Yn,
                        SHOW: "show" + Yn,
                        SHOWN: "shown" + Yn
                    },
                    Xn = "fade",
                    Qn = "hide",
                    $n = "show",
                    Gn = "showing",
                    Jn = {
                        animation: "boolean",
                        autohide: "boolean",
                        delay: "number"
                    },
                    Zn = {
                        animation: !0,
                        autohide: !0,
                        delay: 500
                    },
                    ti = '[data-dismiss="toast"]',
                    ei = (function() {
                        function i(t, e) {
                            (this._element = t),
                            (this._config = this._getConfig(e)),
                            (this._timeout = null),
                            this._setListeners();
                        }
                        var t = i.prototype;
                        return (
                            (t.show = function() {
                                var t = this;
                                d(this._element).trigger(Kn.SHOW),
                                    this._config.animation && this._element.classList.add(Xn);

                                function e() {
                                    t._element.classList.remove(Gn),
                                        t._element.classList.add($n),
                                        d(t._element).trigger(Kn.SHOWN),
                                        t._config.autohide && t.hide();
                                }
                                if (
                                    (this._element.classList.remove(Qn),
                                        this._element.classList.add(Gn),
                                        this._config.animation)
                                ) {
                                    var n = g.getTransitionDurationFromElement(this._element);
                                    d(this._element)
                                        .one(g.TRANSITION_END, e)
                                        .emulateTransitionEnd(n);
                                } else e();
                            }),
                            (t.hide = function(t) {
                                var e = this;
                                this._element.classList.contains($n) &&
                                    (d(this._element).trigger(Kn.HIDE),
                                        t ?
                                        this._close() :
                                        (this._timeout = setTimeout(function() {
                                            e._close();
                                        }, this._config.delay)));
                            }),
                            (t.dispose = function() {
                                clearTimeout(this._timeout),
                                    (this._timeout = null),
                                    this._element.classList.contains($n) &&
                                    this._element.classList.remove($n),
                                    d(this._element).off(Kn.CLICK_DISMISS),
                                    d.removeData(this._element, zn),
                                    (this._element = null),
                                    (this._config = null);
                            }),
                            (t._getConfig = function(t) {
                                return (
                                    (t = l({},
                                        Zn,
                                        d(this._element).data(),
                                        "object" == typeof t && t ? t : {}
                                    )),
                                    g.typeCheckConfig(Un, t, this.constructor.DefaultType),
                                    t
                                );
                            }),
                            (t._setListeners = function() {
                                var t = this;
                                d(this._element).on(Kn.CLICK_DISMISS, ti, function() {
                                    return t.hide(!0);
                                });
                            }),
                            (t._close = function() {
                                function t() {
                                    e._element.classList.add(Qn),
                                        d(e._element).trigger(Kn.HIDDEN);
                                }
                                var e = this;
                                if (
                                    (this._element.classList.remove($n), this._config.animation)
                                ) {
                                    var n = g.getTransitionDurationFromElement(this._element);
                                    d(this._element)
                                        .one(g.TRANSITION_END, t)
                                        .emulateTransitionEnd(n);
                                } else t();
                            }),
                            (i._jQueryInterface = function(n) {
                                return this.each(function() {
                                    var t = d(this),
                                        e = t.data(zn);
                                    if (
                                        (e ||
                                            ((e = new i(this, "object" == typeof n && n)),
                                                t.data(zn, e)),
                                            "string" == typeof n)
                                    ) {
                                        if (void 0 === e[n])
                                            throw new TypeError('No method named "' + n + '"');
                                        e[n](this);
                                    }
                                });
                            }),
                            s(i, null, [{
                                    key: "VERSION",
                                    get: function() {
                                        return "4.3.1";
                                    }
                                },
                                {
                                    key: "DefaultType",
                                    get: function() {
                                        return Jn;
                                    }
                                },
                                {
                                    key: "Default",
                                    get: function() {
                                        return Zn;
                                    }
                                }
                            ]),
                            i
                        );
                    })();
                (d.fn[Un] = ei._jQueryInterface),
                (d.fn[Un].Constructor = ei),
                (d.fn[Un].noConflict = function() {
                    return (d.fn[Un] = Vn), ei._jQueryInterface;
                }),
                (function() {
                    if (void 0 === d)
                        throw new TypeError(
                            "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
                        );
                    var t = d.fn.jquery.split(" ")[0].split(".");
                    if (
                        (t[0] < 2 && t[1] < 9) ||
                        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
                        4 <= t[0]
                    )
                        throw new Error(
                            "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
                        );
                })(),
                (t.Util = g),
                (t.Alert = v),
                (t.Button = A),
                (t.Carousel = at),
                (t.Collapse = Ct),
                (t.Dropdown = Gt),
                (t.Modal = ve),
                (t.Popover = rn),
                (t.Scrollspy = Tn),
                (t.Tab = Bn),
                (t.Toast = ei),
                (t.Tooltip = ze),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
            }),
            (function(t, e) {
                "use strict";
                "function" == typeof define && define.amd ?
                    define(["jquery"], e) :
                    "object" == typeof exports ?
                    (module.exports = e(require("jquery"))) :
                    (t.bootbox = e(t.jQuery));
            })(this, function e(u, h) {
                "use strict";
                var o, r, s, a;
                Object.keys ||
                    (Object.keys =
                        ((o = Object.prototype.hasOwnProperty),
                            (r = !{
                                toString: null
                            }.propertyIsEnumerable("toString")),
                            (a = (s = [
                                "toString",
                                "toLocaleString",
                                "valueOf",
                                "hasOwnProperty",
                                "isPrototypeOf",
                                "propertyIsEnumerable",
                                "constructor"
                            ]).length),
                            function(t) {
                                if (
                                    "function" != typeof t &&
                                    ("object" != typeof t || null === t)
                                )
                                    throw new TypeError("Object.keys called on non-object");
                                var e,
                                    n,
                                    i = [];
                                for (e in t) o.call(t, e) && i.push(e);
                                if (r)
                                    for (n = 0; n < a; n++) o.call(t, s[n]) && i.push(s[n]);
                                return i;
                            }));
                var f = {};
                f.VERSION = "5.0.0";
                var p = {},
                    d = {
                        dialog: '<div class="bootbox modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><div class="bootbox-body"></div></div></div></div></div>',
                        header: '<div class="modal-header"><h5 class="modal-title"></h5></div>',
                        footer: '<div class="modal-footer"></div>',
                        closeButton: '<button type="button" class="bootbox-close-button close" aria-hidden="true">&times;</button>',
                        form: '<form class="bootbox-form"></form>',
                        button: '<button type="button" class="btn"></button>',
                        option: "<option></option>",
                        promptMessage: '<div class="bootbox-prompt-message"></div>',
                        inputs: {
                            text: '<input class="bootbox-input bootbox-input-text form-control" autocomplete="off" type="text" />',
                            textarea: '<textarea class="bootbox-input bootbox-input-textarea form-control"></textarea>',
                            email: '<input class="bootbox-input bootbox-input-email form-control" autocomplete="off" type="email" />',
                            select: '<select class="bootbox-input bootbox-input-select form-control"></select>',
                            checkbox: '<div class="form-check checkbox"><label class="form-check-label"><input class="form-check-input bootbox-input bootbox-input-checkbox" type="checkbox" /></label></div>',
                            radio: '<div class="form-check radio"><label class="form-check-label"><input class="form-check-input bootbox-input bootbox-input-radio" type="radio" name="bootbox-radio" /></label></div>',
                            date: '<input class="bootbox-input bootbox-input-date form-control" autocomplete="off" type="date" />',
                            time: '<input class="bootbox-input bootbox-input-time form-control" autocomplete="off" type="time" />',
                            number: '<input class="bootbox-input bootbox-input-number form-control" autocomplete="off" type="number" />',
                            password: '<input class="bootbox-input bootbox-input-password form-control" autocomplete="off" type="password" />',
                            range: '<input class="bootbox-input bootbox-input-range form-control-range" autocomplete="off" type="range" />'
                        }
                    },
                    g = {
                        locale: "en",
                        backdrop: "static",
                        animate: !0,
                        className: null,
                        closeButton: !0,
                        show: !0,
                        container: "body",
                        value: "",
                        inputType: "text",
                        swapButtonOrder: !1,
                        centerVertical: !1,
                        multiple: !1,
                        scrollable: !1
                    };

                function l(t, e, n) {
                    return u.extend(!0, {},
                        t,
                        (function(t, e) {
                            var n = t.length,
                                i = {};
                            if (n < 1 || 2 < n) throw new Error("Invalid argument length");
                            return (
                                2 === n || "string" == typeof t[0] ?
                                ((i[e[0]] = t[0]), (i[e[1]] = t[1])) :
                                (i = t[0]),
                                i
                            );
                        })(e, n)
                    );
                }

                function m(t, e, n, i) {
                    var o;
                    i &&
                        i[0] &&
                        ((o = i[0].locale || g.locale),
                            (i[0].swapButtonOrder || g.swapButtonOrder) && (e = e.reverse()));
                    return (function(t, e) {
                        var n = {};
                        return (
                            b(e, function(t, e) {
                                n[e] = !0;
                            }),
                            b(t.buttons, function(t) {
                                if (n[t] === h)
                                    throw new Error(
                                        'button key "' +
                                        t +
                                        '" is not allowed (options are ' +
                                        e.join(" ") +
                                        ")"
                                    );
                            }),
                            t
                        );
                    })(
                        l({
                                className: "bootbox-" + t,
                                buttons: (function(t, e) {
                                    for (var n = {}, i = 0, o = t.length; i < o; i++) {
                                        var r = t[i],
                                            s = r.toLowerCase(),
                                            a = r.toUpperCase();
                                        n[s] = {
                                            label:
                                                ((l = a),
                                                    (c = e),
                                                    void 0,
                                                    (u = p[c]),
                                                    u ? u[l] : p.en[l])
                                        };
                                    }
                                    var l, c, u;
                                    return n;
                                })(e, o)
                            },
                            i,
                            n
                        ),
                        e
                    );
                }

                function v(t) {
                    return Object.keys(t).length;
                }

                function b(t, n) {
                    var i = 0;
                    u.each(t, function(t, e) {
                        n(t, e, i++);
                    });
                }

                function y(t, e, n) {
                    t.stopPropagation(),
                        t.preventDefault(),
                        (u.isFunction(n) && !1 === n.call(e, t)) || e.modal("hide");
                }

                function _(t) {
                    return /([01][0-9]|2[0-3]):[0-5][0-9]?:[0-5][0-9]/.test(t);
                }

                function w(t) {
                    return /(\d{4})-(\d{2})-(\d{2})/.test(t);
                }
                return (
                    (f.locales = function(t) {
                        return t ? p[t] : p;
                    }),
                    (f.addLocale = function(t, n) {
                        return (
                            u.each(["OK", "CANCEL", "CONFIRM"], function(t, e) {
                                if (!n[e])
                                    throw new Error(
                                        'Please supply a translation for "' + e + '"'
                                    );
                            }),
                            (p[t] = {
                                OK: n.OK,
                                CANCEL: n.CANCEL,
                                CONFIRM: n.CONFIRM
                            }),
                            f
                        );
                    }),
                    (f.removeLocale = function(t) {
                        if ("en" === t)
                            throw new Error(
                                '"en" is used as the default and fallback locale and cannot be removed.'
                            );
                        return delete p[t], f;
                    }),
                    (f.setLocale = function(t) {
                        return f.setDefaults("locale", t);
                    }),
                    (f.setDefaults = function() {
                        var t = {};
                        return (
                            2 === arguments.length ?
                            (t[arguments[0]] = arguments[1]) :
                            (t = arguments[0]),
                            u.extend(g, t),
                            f
                        );
                    }),
                    (f.setTemplates = function() {
                        var t = {};
                        3 === arguments.length ?
                            ((t[arguments[0]] = {}),
                                (t[arguments[0]][arguments[1]] = arguments[2])) :
                            2 === arguments.length ?
                            (t[arguments[0]] = arguments[1]) :
                            (t = arguments[0]),
                            u.extend(d, t);
                    }),
                    (f.hideAll = function() {
                        return u(".bootbox").modal("hide"), f;
                    }),
                    (f.init = function(t) {
                        return e(t || u);
                    }),
                    (f.dialog = function(t) {
                        if (u.fn.modal === h)
                            throw new Error(
                                '"$.fn.modal" is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.'
                            );
                        if (
                            ((t = (function(o) {
                                    var r, s;
                                    if ("object" != typeof o)
                                        throw new Error("Please supply an object of options");
                                    if (!o.message)
                                        throw new Error(
                                            '"message" option must not be null or an empty string.'
                                        );
                                    (o = u.extend({}, g, o)).buttons || (o.buttons = {});
                                    return (
                                        (r = o.buttons),
                                        (s = v(r)),
                                        b(r, function(t, e, n) {
                                            if (
                                                (u.isFunction(e) &&
                                                    (e = r[t] = {
                                                        callback: e
                                                    }),
                                                    "object" !== u.type(e))
                                            )
                                                throw new Error(
                                                    'button with key "' + t + '" must be an object'
                                                );
                                            if ((e.label || (e.label = t), !e.className)) {
                                                var i = !1;
                                                (i = o.swapButtonOrder ? 0 === n : n === s - 1),
                                                (e.className =
                                                    s <= 2 && i ?
                                                    "btn-primary" :
                                                    "btn-secondary btn-default");
                                            }
                                        }),
                                        o
                                    );
                                })(t)),
                                u.fn.modal.Constructor.VERSION)
                        ) {
                            t.fullBootstrapVersion = u.fn.modal.Constructor.VERSION;
                            var e = t.fullBootstrapVersion.indexOf(".");
                            t.bootstrap = t.fullBootstrapVersion.substring(0, e);
                        } else
                            (t.bootstrap = "2"),
                            (t.fullBootstrapVersion = "2.3.2"),
                            console.warn(
                                "Bootbox will *mostly* work with Bootstrap 2, but we do not officially support it. Please upgrade, if possible."
                            );
                        var n = u(d.dialog),
                            i = n.find(".modal-dialog"),
                            o = n.find(".modal-body"),
                            r = u(d.header),
                            s = u(d.footer),
                            a = t.buttons,
                            l = {
                                onEscape: t.onEscape
                            };
                        if (
                            (o.find(".bootbox-body").html(t.message),
                                0 < v(t.buttons) &&
                                (b(a, function(t, e) {
                                        var n = u(d.button);
                                        switch (
                                            (n.data("bb-handler", t), n.addClass(e.className), t)
                                        ) {
                                            case "ok":
                                            case "confirm":
                                                n.addClass("bootbox-accept");
                                                break;
                                            case "cancel":
                                                n.addClass("bootbox-cancel");
                                        }
                                        n.html(e.label), s.append(n), (l[t] = e.callback);
                                    }),
                                    o.after(s)), !0 === t.animate && n.addClass("fade"),
                                t.className && n.addClass(t.className),
                                t.size)
                        )
                            switch (
                                (t.fullBootstrapVersion.substring(0, 3) < "3.1" &&
                                    console.warn(
                                        '"size" requires Bootstrap 3.1.0 or higher. You appear to be using ' +
                                        t.fullBootstrapVersion +
                                        ". Please upgrade to use this option."
                                    ),
                                    t.size)
                            ) {
                                case "small":
                                case "sm":
                                    i.addClass("modal-sm");
                                    break;
                                case "large":
                                case "lg":
                                    i.addClass("modal-lg");
                                    break;
                                case "xl":
                                case "extra-large":
                                    t.fullBootstrapVersion.substring(0, 3) < "4.2" &&
                                        console.warn(
                                            'Using size "xl"/"extra-large" requires Bootstrap 4.2.0 or higher. You appear to be using ' +
                                            t.fullBootstrapVersion +
                                            ". Please upgrade to use this option."
                                        ),
                                        i.addClass("modal-xl");
                            }
                        if (
                            (t.scrollable &&
                                (t.fullBootstrapVersion.substring(0, 3) < "4.3" &&
                                    console.warn(
                                        'Using "scrollable" requires Bootstrap 4.3.0 or higher. You appear to be using ' +
                                        t.fullBootstrapVersion +
                                        ". Please upgrade to use this option."
                                    ),
                                    i.addClass("modal-dialog-scrollable")),
                                t.title && (o.before(r), n.find(".modal-title").html(t.title)),
                                t.closeButton)
                        ) {
                            var c = u(d.closeButton);
                            t.title ?
                                3 < t.bootstrap ?
                                n.find(".modal-header").append(c) :
                                n.find(".modal-header").prepend(c) :
                                c.prependTo(o);
                        }
                        return (
                            t.centerVertical &&
                            (t.fullBootstrapVersion < "4.0.0" &&
                                console.warn(
                                    '"centerVertical" requires Bootstrap 4.0.0-beta.3 or higher. You appear to be using ' +
                                    t.fullBootstrapVersion +
                                    ". Please upgrade to use this option."
                                ),
                                i.addClass("modal-dialog-centered")),
                            n.one("hide.bs.modal", function(t) {
                                t.target === this && (n.off("escape.close.bb"), n.off("click"));
                            }),
                            n.one("hidden.bs.modal", function(t) {
                                t.target === this && n.remove();
                            }),
                            n.one("shown.bs.modal", function() {
                                n.find(".bootbox-accept:first").trigger("focus");
                            }),
                            "static" !== t.backdrop &&
                            n.on("click.dismiss.bs.modal", function(t) {
                                n.children(".modal-backdrop").length &&
                                    (t.currentTarget = n.children(".modal-backdrop").get(0)),
                                    t.target === t.currentTarget &&
                                    n.trigger("escape.close.bb");
                            }),
                            n.on("escape.close.bb", function(t) {
                                l.onEscape && y(t, n, l.onEscape);
                            }),
                            n.on("click", ".modal-footer button:not(.disabled)", function(t) {
                                var e = u(this).data("bb-handler");
                                y(t, n, l[e]);
                            }),
                            n.on("click", ".bootbox-close-button", function(t) {
                                y(t, n, l.onEscape);
                            }),
                            n.on("keyup", function(t) {
                                27 === t.which && n.trigger("escape.close.bb");
                            }),
                            u(t.container).append(n),
                            n.modal({
                                backdrop: !!t.backdrop && "static",
                                keyboard: !1,
                                show: !1
                            }),
                            t.show && n.modal("show"),
                            n
                        );
                    }),
                    (f.alert = function() {
                        var t;
                        if (
                            (t = m("alert", ["ok"], ["message", "callback"], arguments))
                            .callback &&
                            !u.isFunction(t.callback)
                        )
                            throw new Error(
                                'alert requires the "callback" property to be a function when provided'
                            );
                        return (
                            (t.buttons.ok.callback = t.onEscape = function() {
                                return !u.isFunction(t.callback) || t.callback.call(this);
                            }),
                            f.dialog(t)
                        );
                    }),
                    (f.confirm = function() {
                        var t;
                        if (
                            ((t = m(
                                "confirm", ["cancel", "confirm"], ["message", "callback"],
                                arguments
                            )), !u.isFunction(t.callback))
                        )
                            throw new Error("confirm requires a callback");
                        return (
                            (t.buttons.cancel.callback = t.onEscape = function() {
                                return t.callback.call(this, !1);
                            }),
                            (t.buttons.confirm.callback = function() {
                                return t.callback.call(this, !0);
                            }),
                            f.dialog(t)
                        );
                    }),
                    (f.prompt = function() {
                        var o, e, t, r, n, i;
                        if (
                            ((t = u(d.form)),
                                (o = m(
                                    "prompt", ["cancel", "confirm"], ["title", "callback"],
                                    arguments
                                )).value || (o.value = g.value),
                                o.inputType || (o.inputType = g.inputType),
                                (n = o.show === h ? g.show : o.show),
                                (o.show = !1),
                                (o.buttons.cancel.callback = o.onEscape = function() {
                                    return o.callback.call(this, null);
                                }),
                                (o.buttons.confirm.callback = function() {
                                    var t;
                                    if ("checkbox" === o.inputType)
                                        t = r
                                        .find("input:checked")
                                        .map(function() {
                                            return u(this).val();
                                        })
                                        .get();
                                    else if ("radio" === o.inputType)
                                        t = r.find("input:checked").val();
                                    else {
                                        if (r[0].checkValidity && !r[0].checkValidity()) return !1;
                                        t =
                                            "select" === o.inputType && !0 === o.multiple ?
                                            r
                                            .find("option:selected")
                                            .map(function() {
                                                return u(this).val();
                                            })
                                            .get() :
                                            r.val();
                                    }
                                    return o.callback.call(this, t);
                                }), !o.title)
                        )
                            throw new Error("prompt requires a title");
                        if (!u.isFunction(o.callback))
                            throw new Error("prompt requires a callback");
                        if (!d.inputs[o.inputType]) throw new Error("Invalid prompt type");
                        switch (((r = u(d.inputs[o.inputType])), o.inputType)) {
                            case "text":
                            case "textarea":
                            case "email":
                            case "password":
                                r.val(o.value),
                                    o.placeholder && r.attr("placeholder", o.placeholder),
                                    o.pattern && r.attr("pattern", o.pattern),
                                    o.maxlength && r.attr("maxlength", o.maxlength),
                                    o.required &&
                                    r.prop({
                                        required: !0
                                    }),
                                    o.rows &&
                                    !isNaN(parseInt(o.rows)) &&
                                    "textarea" === o.inputType &&
                                    r.attr({
                                        rows: o.rows
                                    });
                                break;
                            case "date":
                            case "time":
                            case "number":
                            case "range":
                                if (
                                    (r.val(o.value),
                                        o.placeholder && r.attr("placeholder", o.placeholder),
                                        o.pattern && r.attr("pattern", o.pattern),
                                        o.required &&
                                        r.prop({
                                            required: !0
                                        }),
                                        "date" !== o.inputType && o.step)
                                ) {
                                    if (!(
                                            "any" === o.step ||
                                            (!isNaN(o.step) && 0 < parseInt(o.step))
                                        ))
                                        throw new Error(
                                            '"step" must be a valid positive number or the value "any". See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-step for more information.'
                                        );
                                    r.attr("step", o.step);
                                }!(function(t, e, n) {
                                    var i = !1,
                                        o = !0,
                                        r = !0;
                                    if ("date" === t)
                                        e === h || (o = w(e)) ?
                                        n === h ||
                                        (r = w(n)) ||
                                        console.warn(
                                            'Browsers which natively support the "date" input type expect date values to be of the form "YYYY-MM-DD" (see ISO-8601 https://www.iso.org/iso-8601-date-and-time-format.html). Bootbox does not enforce this rule, but your max value may not be enforced by this browser.'
                                        ) :
                                        console.warn(
                                            'Browsers which natively support the "date" input type expect date values to be of the form "YYYY-MM-DD" (see ISO-8601 https://www.iso.org/iso-8601-date-and-time-format.html). Bootbox does not enforce this rule, but your min value may not be enforced by this browser.'
                                        );
                                    else if ("time" === t) {
                                        if (e !== h && !(o = _(e)))
                                            throw new Error(
                                                '"min" is not a valid time. See https://www.w3.org/TR/2012/WD-html-markup-20120315/datatypes.html#form.data.time for more information.'
                                            );
                                        if (n !== h && !(r = _(n)))
                                            throw new Error(
                                                '"max" is not a valid time. See https://www.w3.org/TR/2012/WD-html-markup-20120315/datatypes.html#form.data.time for more information.'
                                            );
                                    } else {
                                        if (e !== h && isNaN(e))
                                            throw new Error(
                                                '"min" must be a valid number. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-min for more information.'
                                            );
                                        if (n !== h && isNaN(n))
                                            throw new Error(
                                                '"max" must be a valid number. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max for more information.'
                                            );
                                    }
                                    if (o && r) {
                                        if (n <= e)
                                            throw new Error(
                                                '"max" must be greater than "min". See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-max for more information.'
                                            );
                                        i = !0;
                                    }
                                    return i;
                                })(o.inputType, o.min, o.max) ||
                                (o.min !== h && r.attr("min", o.min),
                                    o.max !== h && r.attr("max", o.max));
                                break;
                            case "select":
                                var s = {};
                                if (((i = o.inputOptions || []), !u.isArray(i)))
                                    throw new Error("Please pass an array of input options");
                                if (!i.length)
                                    throw new Error(
                                        'prompt with "inputType" set to "select" requires at least one option'
                                    );
                                o.placeholder && r.attr("placeholder", o.placeholder),
                                    o.required &&
                                    r.prop({
                                        required: !0
                                    }),
                                    o.multiple &&
                                    r.prop({
                                        multiple: !0
                                    }),
                                    b(i, function(t, e) {
                                        var n = r;
                                        if (e.value === h || e.text === h)
                                            throw new Error(
                                                'each option needs a "value" property and a "text" property'
                                            );
                                        e.group &&
                                            (s[e.group] ||
                                                (s[e.group] = u("<optgroup />").attr("label", e.group)),
                                                (n = s[e.group]));
                                        var i = u(d.option);
                                        i.attr("value", e.value).text(e.text), n.append(i);
                                    }),
                                    b(s, function(t, e) {
                                        r.append(e);
                                    }),
                                    r.val(o.value);
                                break;
                            case "checkbox":
                                var a = u.isArray(o.value) ? o.value : [o.value];
                                if (!(i = o.inputOptions || []).length)
                                    throw new Error(
                                        'prompt with "inputType" set to "checkbox" requires at least one option'
                                    );
                                (r = u('<div class="bootbox-checkbox-list"></div>')),
                                b(i, function(t, n) {
                                    if (n.value === h || n.text === h)
                                        throw new Error(
                                            'each option needs a "value" property and a "text" property'
                                        );
                                    var i = u(d.inputs[o.inputType]);
                                    i.find("input").attr("value", n.value),
                                        i.find("label").append("\n" + n.text),
                                        b(a, function(t, e) {
                                            e === n.value && i.find("input").prop("checked", !0);
                                        }),
                                        r.append(i);
                                });
                                break;
                            case "radio":
                                if (o.value !== h && u.isArray(o.value))
                                    throw new Error(
                                        'prompt with "inputType" set to "radio" requires a single, non-array value for "value"'
                                    );
                                if (!(i = o.inputOptions || []).length)
                                    throw new Error(
                                        'prompt with "inputType" set to "radio" requires at least one option'
                                    );
                                r = u('<div class="bootbox-radiobutton-list"></div>');
                                var l = !0;
                                b(i, function(t, e) {
                                        if (e.value === h || e.text === h)
                                            throw new Error(
                                                'each option needs a "value" property and a "text" property'
                                            );
                                        var n = u(d.inputs[o.inputType]);
                                        n.find("input").attr("value", e.value),
                                            n.find("label").append("\n" + e.text),
                                            o.value !== h &&
                                            e.value === o.value &&
                                            (n.find("input").prop("checked", !0), (l = !1)),
                                            r.append(n);
                                    }),
                                    l &&
                                    r
                                    .find('input[type="radio"]')
                                    .first()
                                    .prop("checked", !0);
                        }
                        if (
                            (t.append(r),
                                t.on("submit", function(t) {
                                    t.preventDefault(),
                                        t.stopPropagation(),
                                        e.find(".bootbox-accept").trigger("click");
                                }),
                                "" !== u.trim(o.message))
                        ) {
                            var c = u(d.promptMessage).html(o.message);
                            t.prepend(c), (o.message = t);
                        } else o.message = t;
                        return (
                            (e = f.dialog(o)).off("shown.bs.modal"),
                            e.on("shown.bs.modal", function() {
                                r.focus();
                            }), !0 === n && e.modal("show"),
                            e
                        );
                    }),
                    f.addLocale("en", {
                        OK: "OK",
                        CANCEL: "Cancel",
                        CONFIRM: "OK"
                    }),
                    f
                );
            }),
            bootbox.setTemplates({
                dialog: '<div class="bootbox modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><div class="bootbox-body"></div></div></div></div></div>',
                header: '<div class="modal-header"><h5 class="modal-title"></h5></div>',
                footer: '<div class="modal-footer"></div>',
                closeButton: '<button type="button" class="bootbox-close-button close" aria-hidden="true"><i class="fal fa-times"></i></button>',
                form: '<form class="bootbox-form"></form>',
                button: '<button type="button" class="btn"></button>',
                option: "<option></option>",
                promptMessage: '<div class="bootbox-prompt-message"></div>',
                inputs: {
                    text: '<input class="bootbox-input bootbox-input-text form-control" autocomplete="off" type="text" />',
                    textarea: '<textarea class="bootbox-input bootbox-input-textarea form-control"></textarea>',
                    email: '<input class="bootbox-input bootbox-input-email form-control" autocomplete="off" type="email" />',
                    select: '<select class="bootbox-input bootbox-input-select form-control"></select>',
                    checkbox: '<div class="form-check checkbox"><label class="form-check-label"><input class="form-check-input bootbox-input bootbox-input-checkbox" type="checkbox" /></label></div>',
                    radio: '<div class="form-check radio"><label class="form-check-label"><input class="form-check-input bootbox-input bootbox-input-radio" type="radio" name="bootbox-radio" /></label></div>',
                    date: '<input class="bootbox-input bootbox-input-date form-control" autocomplete="off" type="date" />',
                    time: '<input class="bootbox-input bootbox-input-time form-control" autocomplete="off" type="time" />',
                    number: '<input class="bootbox-input bootbox-input-number form-control" autocomplete="off" type="number" />',
                    password: '<input class="bootbox-input bootbox-input-password form-control" autocomplete="off" type="password" />',
                    range: '<input class="bootbox-input bootbox-input-range form-control-range" autocomplete="off" type="range" />'
                }
            }),
            ($.fn.removeClassPrefix = function(i) {
                return (
                    this.each(function(t, e) {
                        var n = e.className.split(" ").map(function(t) {
                            return 0 === t.indexOf(i) ? "" : t;
                        });
                        e.className = n.join(" ");
                    }),
                    this
                );
            }));
        var getUrlParameter = function(t) {
            var e,
                n,
                i = decodeURIComponent(window.location.search.substring(1)).split("&");
            for (n = 0; n < i.length; n++)
                if ((e = i[n].split("="))[0] === t) return void 0 === e[1] || e[1];
        };

        function detectIE() {
            var t = window.navigator.userAgent,
                e = t.indexOf("MSIE ");
            if (0 < e) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
            if (0 < t.indexOf("Trident/")) {
                var n = t.indexOf("rv:");
                return parseInt(t.substring(n + 3, t.indexOf(".", n)), 10);
            }
            var i = t.indexOf("Edge/");
            return 0 < i && parseInt(t.substring(i + 5, t.indexOf(".", i)), 10);
        }

        jQuery.fn.extend({
                toggleText: function(t, e) {
                    return (
                        this.text() != t && this.text() != e ?
                        this.text(t) :
                        this.text() == t ?
                        this.text(e) :
                        this.text() == e && this.text(t),
                        this
                    );
                }
            }),
            (function(t, u) {
                var i,
                    e = t.jQuery || t.Cowboy || (t.Cowboy = {});
                (e.throttle = i = function(o, r, s, a) {
                    var l,
                        c = 0;

                    function t() {
                        var t = this,
                            e = +new Date() - c,
                            n = arguments;

                        function i() {
                            (c = +new Date()), s.apply(t, n);
                        }
                        a && !l && i(),
                            l && clearTimeout(l),
                            a === u && o < e ?
                            i() :
                            !0 !== r &&
                            (l = setTimeout(
                                a ?
                                function() {
                                    l = u;
                                } :
                                i,
                                a === u ? o - e : o
                            ));
                    }
                    return (
                        "boolean" != typeof r && ((a = s), (s = r), (r = u)),
                        e.guid && (t.guid = s.guid = s.guid || e.guid++),
                        t
                    );
                }),
                (e.debounce = function(t, e, n) {
                    return n === u ? i(t, e, !1) : i(t, n, !1 !== e);
                });
            })(this),
            (function(D) {
                D.fn.extend({
                        slimScroll: function(S) {
                            var k = D.extend({
                                    width: "auto",
                                    height: "250px",
                                    size: "7px",
                                    color: "#000",
                                    position: "right",
                                    distance: "1px",
                                    start: "top",
                                    opacity: 0.4,
                                    alwaysVisible: !1,
                                    disableFadeOut: !1,
                                    railVisible: !1,
                                    railColor: "#333",
                                    railOpacity: 0.2,
                                    railDraggable: !0,
                                    railClass: "slimScrollRail",
                                    barClass: "slimScrollBar",
                                    wrapperClass: "slimScrollDiv",
                                    allowPageScroll: !1,
                                    wheelStep: 20,
                                    touchScrollStep: 200,
                                    borderRadius: "7px",
                                    railBorderRadius: "7px"
                                },
                                S
                            );
                            return (
                                this.each(function() {
                                    var i,
                                        e,
                                        o,
                                        n,
                                        r,
                                        s,
                                        a,
                                        l,
                                        c = "<div></div>",
                                        u = 30,
                                        h = !1,
                                        f = D(this);
                                    if (f.parent().hasClass(k.wrapperClass)) {
                                        var p = f.scrollTop();
                                        if (
                                            ((y = f.siblings("." + k.barClass)),
                                                (b = f.siblings("." + k.railClass)),
                                                C(),
                                                D.isPlainObject(S))
                                        ) {
                                            if ("height" in S && "auto" == S.height) {
                                                f.parent().css("height", "auto"), f.css("height", "auto");
                                                var d = f
                                                    .parent()
                                                    .parent()
                                                    .height();
                                                f.parent().css("height", d), f.css("height", d);
                                            } else if ("height" in S) {
                                                var g = S.height;
                                                f.parent().css("height", g), f.css("height", g);
                                            }
                                            if ("scrollTo" in S) p = parseInt(k.scrollTo);
                                            else if ("scrollBy" in S) p += parseInt(k.scrollBy);
                                            else if ("destroy" in S)
                                                return y.remove(), b.remove(), void f.unwrap();
                                            x(p, !1, !0);
                                        }
                                    } else if (!(D.isPlainObject(S) && "destroy" in S)) {
                                        k.height =
                                            "auto" == k.height ? f.parent().height() : k.height;
                                        var m = D(c)
                                            .addClass(k.wrapperClass)
                                            .css({
                                                position: "relative",
                                                overflow: "hidden",
                                                width: k.width,
                                                height: k.height
                                            });
                                        f.css({
                                            overflow: "hidden",
                                            width: k.width,
                                            height: k.height
                                        });
                                        var v,
                                            b = D(c)
                                            .addClass(k.railClass)
                                            .css({
                                                width: k.size,
                                                height: "100%",
                                                position: "absolute",
                                                top: 0,
                                                display: k.alwaysVisible && k.railVisible ? "block" : "none",
                                                "border-radius": k.railBorderRadius,
                                                background: k.railColor,
                                                opacity: k.railOpacity,
                                                zIndex: 90
                                            }),
                                            y = D(c)
                                            .addClass(k.barClass)
                                            .css({
                                                background: k.color,
                                                width: k.size,
                                                position: "absolute",
                                                top: 0,
                                                opacity: k.opacity,
                                                display: k.alwaysVisible ? "block" : "none",
                                                "border-radius": k.borderRadius,
                                                BorderRadius: k.borderRadius,
                                                MozBorderRadius: k.borderRadius,
                                                WebkitBorderRadius: k.borderRadius,
                                                zIndex: 99
                                            }),
                                            _ =
                                            "right" == k.position ?
                                            {
                                                right: k.distance
                                            } :
                                            {
                                                left: k.distance
                                            };
                                        b.css(_),
                                            y.css(_),
                                            f.wrap(m),
                                            f.parent().append(y),
                                            f.parent().append(b),
                                            k.railDraggable &&
                                            y
                                            .bind("mousedown", function(e) {
                                                var n = D(document);
                                                return (
                                                    (o = !0),
                                                    (t = parseFloat(y.css("top"))),
                                                    (pageY = e.pageY),
                                                    n.bind("mousemove.slimscroll", function(e) {
                                                        (currTop = t + e.pageY - pageY),
                                                        y.css("top", currTop),
                                                            x(0, y.position().top, !1);
                                                    }),
                                                    n.bind("mouseup.slimscroll", function(t) {
                                                        (o = !1), T(), n.unbind(".slimscroll");
                                                    }), !1
                                                );
                                            })
                                            .bind("selectstart.slimscroll", function(t) {
                                                return t.stopPropagation(), t.preventDefault(), !1;
                                            }),
                                            b.hover(
                                                function() {
                                                    E();
                                                },
                                                function() {
                                                    T();
                                                }
                                            ),
                                            y.hover(
                                                function() {
                                                    e = !0;
                                                },
                                                function() {
                                                    e = !1;
                                                }
                                            ),
                                            f.hover(
                                                function() {
                                                    (i = !0), E(), T();
                                                },
                                                function() {
                                                    (i = !1), T();
                                                }
                                            ),
                                            f.bind("touchstart", function(t, e) {
                                                t.originalEvent.touches.length &&
                                                    (r = t.originalEvent.touches[0].pageY);
                                            }),
                                            f.bind("touchmove", function(t) {
                                                h || t.originalEvent.preventDefault(),
                                                    t.originalEvent.touches.length &&
                                                    (x(
                                                            (r - t.originalEvent.touches[0].pageY) /
                                                            k.touchScrollStep, !0
                                                        ),
                                                        (r = t.originalEvent.touches[0].pageY));
                                            }),
                                            C(),
                                            "bottom" === k.start ?
                                            (y.css({
                                                    top: f.outerHeight() - y.outerHeight()
                                                }),
                                                x(0, !0)) :
                                            "top" !== k.start &&
                                            (x(D(k.start).position().top, null, !0),
                                                k.alwaysVisible || y.hide()),
                                            (v = this),
                                            window.addEventListener ?
                                            (v.addEventListener("DOMMouseScroll", w, !1),
                                                v.addEventListener("mousewheel", w, !1)) :
                                            document.attachEvent("onmousewheel", w);
                                    }

                                    function w(t) {
                                        if (i) {
                                            var e = 0;
                                            (t = t || window.event).wheelDelta &&
                                                (e = -t.wheelDelta / 120),
                                                t.detail && (e = t.detail / 3);
                                            var n = t.target || t.srcTarget || t.srcElement;
                                            D(n)
                                                .closest("." + k.wrapperClass)
                                                .is(f.parent()) && x(e, !0),
                                                t.preventDefault && !h && t.preventDefault(),
                                                h || (t.returnValue = !1);
                                        }
                                    }

                                    function x(t, e, n) {
                                        h = !1;
                                        var i = t,
                                            o = f.outerHeight() - y.outerHeight();
                                        if (
                                            (e &&
                                                ((i =
                                                        parseInt(y.css("top")) +
                                                        ((t * parseInt(k.wheelStep)) / 100) * y.outerHeight()),
                                                    (i = Math.min(Math.max(i, 0), o)),
                                                    (i = 0 < t ? Math.ceil(i) : Math.floor(i)),
                                                    y.css({
                                                        top: i + "px"
                                                    })),
                                                (i =
                                                    (a =
                                                        parseInt(y.css("top")) /
                                                        (f.outerHeight() - y.outerHeight())) *
                                                    (f[0].scrollHeight - f.outerHeight())),
                                                n)
                                        ) {
                                            var r = ((i = t) / f[0].scrollHeight) * f.outerHeight();
                                            (r = Math.min(Math.max(r, 0), o)),
                                            y.css({
                                                top: r + "px"
                                            });
                                        }
                                        f.scrollTop(i), f.trigger("slimscrolling", ~~i), E(), T();
                                    }

                                    function C() {
                                        (s = Math.max(
                                            (f.outerHeight() / f[0].scrollHeight) * f.outerHeight(),
                                            u
                                        )),
                                        y.css({
                                            height: s + "px"
                                        });
                                        var t = s == f.outerHeight() ? "none" : "block";
                                        y.css({
                                            display: t
                                        });
                                    }

                                    function E() {
                                        if ((C(), clearTimeout(n), a == ~~a)) {
                                            if (((h = k.allowPageScroll), l != a)) {
                                                var t = 0 == ~~a ? "top" : "bottom";
                                                f.trigger("slimscroll", t);
                                            }
                                        } else h = !1;
                                        (l = a),
                                        s >= f.outerHeight() ?
                                            (h = !0) :
                                            (y.stop(!0, !0).fadeIn("fast"),
                                                k.railVisible && b.stop(!0, !0).fadeIn("fast"));
                                    }

                                    function T() {
                                        k.alwaysVisible ||
                                            (n = setTimeout(function() {
                                                (k.disableFadeOut && i) ||
                                                e ||
                                                    o ||
                                                    (y.fadeOut("slow"), b.fadeOut("slow"));
                                            }, 1e3));
                                    }
                                }),
                                this
                            );
                        }
                    }),
                    D.fn.extend({
                        slimscroll: D.fn.slimScroll
                    });
            })(jQuery),
            (function(t, e) {
                "use strict";
                "function" == typeof define && define.amd ?
                    define([], function() {
                        return (t.Waves = e.call(t)), t.Waves;
                    }) :
                    "object" == typeof exports ?
                    (module.exports = e.call(t)) :
                    (t.Waves = e.call(t));
            })("object" == typeof global ? global : this, function() {
                "use strict";
                var e = e || {},
                    n = document.querySelectorAll.bind(document),
                    s = Object.prototype.toString,
                    a = "ontouchstart" in window;

                function i(t) {
                    var e = typeof t;
                    return "function" == e || ("object" == e && !!t);
                }

                function u(t) {
                    var e = s.call(t);
                    return "[object String]" === e ?
                        n(t) :
                        i(t) &&
                        /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(e) &&
                        t.hasOwnProperty("length") ?
                        t :
                        (function(t) {
                            return i(t) && 0 < t.nodeType;
                        })(t) ?
                        [t] :
                        [];
                }

                function h(t) {
                    var e,
                        n,
                        i = {
                            top: 0,
                            left: 0
                        },
                        o = t && t.ownerDocument;
                    return (
                        (e = o.documentElement),
                        void 0 !== t.getBoundingClientRect &&
                        (i = t.getBoundingClientRect()),
                        (n = (function(t) {
                            return (function(t) {
                                    return null !== t && t === t.window;
                                })(t) ?
                                t :
                                9 === t.nodeType && t.defaultView;
                        })(o)), {
                            top: i.top + n.pageYOffset - e.clientTop,
                            left: i.left + n.pageXOffset - e.clientLeft
                        }
                    );
                }

                function f(t) {
                    var e = "";
                    for (var n in t) t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
                    return e;
                }
                var p = {
                        duration: 750,
                        delay: 200,
                        show: function(t, e, n) {
                            if (2 === t.button) return !1;
                            e = e || this;
                            var i = document.createElement("div");
                            (i.className = "waves-ripple waves-rippling"), e.appendChild(i);
                            var o = h(e),
                                r = 0,
                                s = 0;
                            (s =
                                0 <=
                                (s =
                                    "touches" in t && t.touches.length ?
                                    ((r = t.touches[0].pageY - o.top),
                                        t.touches[0].pageX - o.left) :
                                    ((r = t.pageY - o.top), t.pageX - o.left)) ?
                                s :
                                0),
                            (r = 0 <= r ? r : 0);
                            var a = "scale(" + (e.clientWidth / 100) * 3 + ")",
                                l = "translate(0,0)";
                            n && (l = "translate(" + n.x + "px, " + n.y + "px)"),
                                i.setAttribute("data-hold", Date.now()),
                                i.setAttribute("data-x", s),
                                i.setAttribute("data-y", r),
                                i.setAttribute("data-scale", a),
                                i.setAttribute("data-translate", l);
                            var c = {
                                top: r + "px",
                                left: s + "px"
                            };
                            i.classList.add("waves-notransition"),
                                i.setAttribute("style", f(c)),
                                i.classList.remove("waves-notransition"),
                                (c["-webkit-transform"] = a + " " + l),
                                (c["-moz-transform"] = a + " " + l),
                                (c["-ms-transform"] = a + " " + l),
                                (c["-o-transform"] = a + " " + l),
                                (c.transform = a + " " + l),
                                (c.opacity = "1");
                            var u = "mousemove" === t.type ? 2500 : p.duration;
                            (c["-webkit-transition-duration"] = u + "ms"),
                            (c["-moz-transition-duration"] = u + "ms"),
                            (c["-o-transition-duration"] = u + "ms"),
                            (c["transition-duration"] = u + "ms"),
                            i.setAttribute("style", f(c));
                        },
                        hide: function(t, e) {
                            for (
                                var n = (e = e || this).getElementsByClassName(
                                        "waves-rippling"
                                    ),
                                    i = 0,
                                    o = n.length; i < o; i++
                            )
                                r(t, e, n[i]);
                            a &&
                                (e.removeEventListener("touchend", p.hide),
                                    e.removeEventListener("touchcancel", p.hide)),
                                e.removeEventListener("mouseup", p.hide),
                                e.removeEventListener("mouseleave", p.hide);
                        }
                    },
                    l = {
                        input: function(t) {
                            var e = t.parentNode;
                            if (
                                "i" !== e.tagName.toLowerCase() ||
                                !e.classList.contains("waves-effect")
                            ) {
                                var n = document.createElement("i");
                                (n.className = t.className + " waves-input-wrapper"),
                                (t.className = "waves-button-input"),
                                e.replaceChild(n, t),
                                    n.appendChild(t);
                                var i = window.getComputedStyle(t, null),
                                    o = i.color,
                                    r = i.backgroundColor;
                                n.setAttribute("style", "color:" + o + ";background:" + r),
                                    t.setAttribute("style", "background-color:rgba(0,0,0,0);");
                            }
                        },
                        img: function(t) {
                            var e = t.parentNode;
                            if (
                                "i" !== e.tagName.toLowerCase() ||
                                !e.classList.contains("waves-effect")
                            ) {
                                var n = document.createElement("i");
                                e.replaceChild(n, t), n.appendChild(t);
                            }
                        }
                    };

                function r(t, e, n) {
                    if (n) {
                        n.classList.remove("waves-rippling");
                        var i = n.getAttribute("data-x"),
                            o = n.getAttribute("data-y"),
                            r = n.getAttribute("data-scale"),
                            s = n.getAttribute("data-translate"),
                            a = 350 - (Date.now() - Number(n.getAttribute("data-hold")));
                        a < 0 && (a = 0), "mousemove" === t.type && (a = 150);
                        var l = "mousemove" === t.type ? 2500 : p.duration;
                        setTimeout(function() {
                            var t = {
                                top: o + "px",
                                left: i + "px",
                                opacity: "0",
                                "-webkit-transition-duration": l + "ms",
                                "-moz-transition-duration": l + "ms",
                                "-o-transition-duration": l + "ms",
                                "transition-duration": l + "ms",
                                "-webkit-transform": r + " " + s,
                                "-moz-transform": r + " " + s,
                                "-ms-transform": r + " " + s,
                                "-o-transform": r + " " + s,
                                transform: r + " " + s
                            };
                            n.setAttribute("style", f(t)),
                                setTimeout(function() {
                                    try {
                                        e.removeChild(n);
                                    } catch (t) {
                                        return !1;
                                    }
                                }, l);
                        }, a);
                    }
                }
                var c = {
                    touches: 0,
                    allowEvent: function(t) {
                        var e = !0;
                        return (
                            /^(mousedown|mousemove)$/.test(t.type) && c.touches && (e = !1), e
                        );
                    },
                    registerEvent: function(t) {
                        var e = t.type;
                        "touchstart" === e
                            ?
                            (c.touches += 1) :
                            /^(touchend|touchcancel)$/.test(e) &&
                            setTimeout(function() {
                                c.touches && (c.touches -= 1);
                            }, 500);
                    }
                };

                function o(e) {
                    var n = (function(t) {
                        if (!1 === c.allowEvent(t)) return null;
                        for (
                            var e = null, n = t.target || t.srcElement; n.parentElement;

                        ) {
                            if (!(n instanceof SVGElement) &&
                                n.classList.contains("waves-effect")
                            ) {
                                e = n;
                                break;
                            }
                            n = n.parentElement;
                        }
                        return e;
                    })(e);
                    if (null !== n) {
                        if (
                            n.disabled ||
                            n.getAttribute("disabled") ||
                            n.classList.contains("disabled")
                        )
                            return;
                        if ((c.registerEvent(e), "touchstart" === e.type && p.delay)) {
                            var i = !1,
                                o = setTimeout(function() {
                                    (o = null), p.show(e, n);
                                }, p.delay),
                                r = function(t) {
                                    o && (clearTimeout(o), (o = null), p.show(e, n)),
                                        i || ((i = !0), p.hide(t, n)),
                                        s();
                                },
                                t = function(t) {
                                    o && (clearTimeout(o), (o = null)), r(t), s();
                                };
                            n.addEventListener("touchmove", t, !1),
                                n.addEventListener("touchend", r, !1),
                                n.addEventListener("touchcancel", r, !1);
                            var s = function() {
                                n.removeEventListener("touchmove", t),
                                    n.removeEventListener("touchend", r),
                                    n.removeEventListener("touchcancel", r);
                            };
                        } else
                            p.show(e, n),
                            a &&
                            (n.addEventListener("touchend", p.hide, !1),
                                n.addEventListener("touchcancel", p.hide, !1)),
                            n.addEventListener("mouseup", p.hide, !1),
                            n.addEventListener("mouseleave", p.hide, !1);
                    }
                }
                return (
                    (e.init = function(t) {
                        var e = document.body;
                        "duration" in (t = t || {}) && (p.duration = t.duration),
                        "delay" in t && (p.delay = t.delay),
                            a &&
                            (e.addEventListener("touchstart", o, !1),
                                e.addEventListener("touchcancel", c.registerEvent, !1),
                                e.addEventListener("touchend", c.registerEvent, !1)),
                            e.addEventListener("mousedown", o, !1);
                    }),
                    (e.attach = function(t, e) {
                        var n, i;
                        (t = u(t)),
                        "[object Array]" === s.call(e) && (e = e.join(" ")),
                            (e = e ? " " + e : "");
                        for (var o = 0, r = t.length; o < r; o++)
                            (i = (n = t[o]).tagName.toLowerCase()), -1 !== ["input", "img"].indexOf(i) &&
                            (l[i](n), (n = n.parentElement)), -1 === n.className.indexOf("waves-effect") &&
                            (n.className += " waves-effect" + e);
                    }),
                    (e.ripple = function(t, e) {
                        var n = (t = u(t)).length;
                        if (
                            (((e = e || {}).wait = e.wait || 0),
                                (e.position = e.position || null),
                                n)
                        )
                            for (
                                var i,
                                    o,
                                    r,
                                    s = {},
                                    a = 0,
                                    l = {
                                        type: "mousedown",
                                        button: 1
                                    },
                                    c = function(t, e) {
                                        return function() {
                                            p.hide(t, e);
                                        };
                                    }; a < n; a++
                            )
                                if (
                                    ((i = t[a]),
                                        (o = e.position || {
                                            x: i.clientWidth / 2,
                                            y: i.clientHeight / 2
                                        }),
                                        (r = h(i)),
                                        (s.x = r.left + o.x),
                                        (s.y = r.top + o.y),
                                        (l.pageX = s.x),
                                        (l.pageY = s.y),
                                        p.show(l, i),
                                        0 <= e.wait && null !== e.wait)
                                ) {
                                    setTimeout(
                                        c({
                                                type: "mouseup",
                                                button: 1
                                            },
                                            i
                                        ),
                                        e.wait
                                    );
                                }
                    }),
                    (e.calm = function(t) {
                        for (
                            var e = {
                                    type: "mouseup",
                                    button: 1
                                },
                                n = 0,
                                i = (t = u(t)).length; n < i; n++
                        )
                            p.hide(e, t[n]);
                    }),
                    (e.displayEffect = function(t) {
                        console.error(
                                "Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"
                            ),
                            e.init(t);
                    }),
                    e
                );
            });
    };
    window.vendor.call(this);
}