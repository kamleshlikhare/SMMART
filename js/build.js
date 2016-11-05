! function(e) {
    "use strict";
    var t;
    return t = e.extend({}, Backbone.Events, {
        cid: "dispatcher"
    }), e.each([Backbone.Collection.prototype, Backbone.Model.prototype, Backbone.View.prototype, Backbone.Router.prototype], function() {
        return e.extend(this, {
            globalDispatcher: t
        })
    })
}(jQuery);
! function() {
    "use strict";
    var e, t = [].slice,
        i = 0;
    e = CanvasRenderingContext2D.prototype.fillText, CanvasRenderingContext2D.prototype.fillText = function() {
        var n, s, o, a, r, l, c = this;
        return o = arguments[0], a = arguments[1], r = arguments[2], n = 4 <= arguments.length ? t.call(arguments, 3) : [], null == this.kerning ? e.apply(this, arguments) : (s = 0, o.split("").forEach(function(t, o) {
            i = c.kerning, 0 === o && ("center" === c.ta ? i /= 2 : "left" === c.ta && (i = 0)), l = r, "@" === t && (l = r - .1 * c.canvas.height), "." === t && (c.shadowOffsetX = 0), e.apply(c, [t, a + s + i, l].concat(n)), s += c.measureText(t).width + i
        }))
    }
}();
! function(e) {
    "use strict";

    function t(t, i) {
        return G.helpers.canvasSupported ? Helpers.mqMobile.matches ? !1 : (this.$el = e(t), this.options = e.extend({}, n, i), void this.init()) : (console.error("Canvas is not supported"), !1)
    }
    var i = "textGlitch",
        n = {
            strength: 0,
            firstDelay: 3e3,
            delay: [5500, 9e3]
        };
    t.prototype = {
        glitchInit: !0,
        repeatAnimation: !1,
        glitchTimer: null,
        stop: function() {
            this.repeatAnimation = !1, clearTimeout(this.glitchTimer), this.frames[1].show(), this.frames[2].hide(), this.frames[3].hide()
        },
        glitch: function(e) {
            var t = this;
            this.glitchTimer = setTimeout(function() {
                t.frames[e[0].h].hide(), t.frames[e[0].s].show(), e.shift(), e.length ? t.glitch(e) : t.play()
            }, e[0].time)
        },
        play: function(e) {
            if (!this.repeatAnimation) return !1;
            e = e || (this.glitchInit ? this.options.firstDelay : Helpers.getRandom(this.options.delay));
            var t = [{
                h: 1,
                s: 2,
                time: e
            }, {
                h: 2,
                s: 3,
                time: 100
            }, {
                h: 3,
                s: 1,
                time: 100
            }, {
                h: 1,
                s: 2,
                time: 80
            }, {
                h: 2,
                s: 3,
                time: 50
            }, {
                h: 3,
                s: 1,
                time: 100
            }, {
                h: 1,
                s: 2,
                time: 100
            }, {
                h: 2,
                s: 1,
                time: 100
            }];
            this.glitch(t), this.glitchInit = !1
        },
        textGlitchFrame3: function(e) {
            var t, i, n, s, o, a, r, l = this,
                c = new Backbone.Collection([{
                    h: 1,
                    m: 0
                }, {
                    h: 4,
                    m: -2
                }, {
                    h: 1,
                    m: 0
                }, {
                    h: 4,
                    m: 2
                }, {
                    h: 26,
                    m: 0
                }, {
                    h: 3,
                    m: 1
                }, {
                    h: 2,
                    m: 4
                }, {
                    h: 4,
                    m: 3
                }, {
                    h: 2,
                    m: 2
                }, {
                    h: 1,
                    m: 7
                }, {
                    h: 6,
                    m: 4
                }, {
                    h: 10,
                    m: 0
                }, {
                    h: 2,
                    m: -2
                }, {
                    h: 1,
                    m: -6
                }, {
                    h: 2,
                    m: -2
                }, {
                    h: 11,
                    m: -4
                }, {
                    m: 0
                }]);
            c.models.forEach(function(s, o) {
                t = 0 === o ? 0 : t + c.at(o - 1).get("h"), i = s.get("h") ? e.cd.cH * (s.get("h") / e.cd.bfz) : e.cd.cH, n = s.get("m"), l.options.strength > 0 && 0 !== n && (n += Helpers.sign(n) * l.options.strength), s.set({
                    y: t,
                    h: i * e.cd.scale,
                    m: n * e.cd.scale
                })
            }), e.ctx.fillStyle = e.cd.baseColor, e.cd.color.forEach(function(t, i) {
                c.pluck("m").forEach(function(n) {
                    e.ctx.save(), e.ctx.beginPath(), c.where({
                        m: n
                    }).forEach(function(t) {
                        s = t.get("y"), o = s + t.get("h"), i > 0 && (r = 2.5, 1 === i ? r = 1.8 : 2 === i && (r = 1.3), o = s + Helpers.getRandom(0, t.get("h") / r)), e.ctx.moveTo(0, s), e.ctx.lineTo(e.cd.cW, s), e.ctx.lineTo(e.cd.cW, o), e.ctx.lineTo(0, o)
                    }), e.ctx.closePath(), e.ctx.clip(), i > 0 && (e.ctx.shadowColor = t, a = -5, 2 === i && (a = 2), e.ctx.shadowOffsetX = a + Helpers.sign(a) * l.options.strength), e.ctx.fillText(e.cd.txt, n, e.cd.y), e.ctx.restore()
                })
            })
        },
        textGlitchFrame2: function(e) {
            var t, i, n, s, o, a = this,
                r = new Backbone.Collection([{
                    h: 46,
                    m: 0
                }, {
                    h: 8,
                    m: -3
                }, {
                    h: 14,
                    m: 3
                }, {
                    h: 3,
                    m: -4
                }, {
                    m: 0
                }]);
            r.models.forEach(function(s, o) {
                t = 0 === o ? -e.cd.mtb : t + r.at(o - 1).get("h"), i = s.get("h") ? e.cd.cH * (s.get("h") / e.cd.bfz) : e.cd.cH, n = s.get("m"), a.options.strength > 0 && 0 !== n && (n += Helpers.sign(n) * a.options.strength), s.set({
                    y: t,
                    h: i * e.cd.scale,
                    m: n * e.cd.scale
                })
            }), e.ctx.fillStyle = e.cd.baseColor, r.pluck("m").forEach(function(t) {
                e.ctx.save(), e.ctx.beginPath(), r.where({
                    m: t
                }).forEach(function(t) {
                    s = t.get("y"), o = s + t.get("h"), e.ctx.moveTo(0, s), e.ctx.lineTo(e.cd.cW, s), e.ctx.lineTo(e.cd.cW, o), e.ctx.lineTo(0, o)
                }), e.ctx.closePath(), e.ctx.clip(), e.ctx.fillText(e.cd.txt, t, e.cd.y), e.ctx.restore()
            })
        },
        textGlitchFrame1: function(e) {
            e.ctx.fillStyle = e.cd.baseColor, e.ctx.fillText(e.cd.txt, 0, e.cd.y)
        },
        init: function() {
            this.$el.addClass("text-glitch");
            var t, i, n, s, o, a = "devicePixelRatio" in window ? window.devicePixelRatio : 1,
                r = this,
                l = "ctx_" + (new Date).getTime() + "_" + parseInt(1e3 * Math.random(), 10),
                c = parseFloat(this.$el.css("font-size"), 10),
                h = parseFloat(this.$el.css("letter-spacing"), 10) * a,
                d = this.$el.css("font-family"),
                u = this.$el.css("text-align"),
                p = this.$el.innerWidth() * a,
                g = c * a,
                m = {
                    color: this.options.color,
                    txt: e.trim(this.$el.text()),
                    cW: p,
                    cH: g,
                    x: p / 2,
                    y: g / 2,
                    scale: a,
                    bfz: c / Helpers.cssX * a,
                    mtb: .12 * g
                },
                f = 1;
            for (g += 2 * m.mtb, "uppercase" === this.$el.css("text-transform") && (m.txt = m.txt.toUpperCase()), this.$el.css({
                    width: p / a,
                    height: g / a,
                    letterSpacing: 0,
                    textIndent: 0
                }).html(""), this.frames = []; 4 > f;) t = l + "_" + f, i = e('<canvas id="' + t + '"/>').appendTo(this.$el), n = document.getElementById(t, {
                alpha: !1
            }), s = n.getContext("2d"), o = {
                canvas: n,
                ctx: s,
                cd: m
            }, n.width = p, n.height = g, n.style.width = p / a + "px", n.style.height = g / a + "px", 2 === m.color[0].length ? (m.baseColor = s.createLinearGradient(0, 0, p, 0), m.baseColor.addColorStop(0, m.color[0][0]), m.baseColor.addColorStop(1, m.color[0][1])) : m.baseColor = m.color[0], s.kerning = h, s.imageSmoothingEnabled = !0, s.font = "900 " + c * a + "px " + d, s.textBaseline = "middle", s.ta = u, s.translate(0, m.mtb), 1 === f ? this.textGlitchFrame1(o) : 2 === f ? this.textGlitchFrame2(o) : this.textGlitchFrame3(o), this.frames[f] = i, f += 1;
            this.frames[1].show(), this.$el.off().on("play", function(e) {
                r.repeatAnimation = !0, e.init && (r.glitchInit = !0), r.play()
            }).on("playOnce", function() {
                r.repeatAnimation = !0, r.play(10), r.repeatAnimation = !1
            }).on("stop", function() {
                r.stop()
            }), e("body").on("MediaStateChange", function() {
                Helpers.mqMobile.matches && r.$el.attr("style", "").text(m.txt)
            })
        }
    }, e.fn[i] = function(n) {
        return this.each(function() {
            e.data(this, "plugin_" + i) || e.data(this, "plugin_" + i, new t(this, n))
        })
    }
}(jQuery);
! function(e) {
    "use strict";

    function t(t, i) {
        return G.helpers.canvasSupported ? Helpers.mqMobile.matches ? !1 : (this.$img = e(t), this.options = e.extend({}, n, i), void this.init()) : (console.error("Canvas is not supported"), !1)
    }
    var i = "imgGlitch2",
        n = {
            firstDelay: 3e3,
            delay: [5500, 9e3]
        };
    t.prototype = {
        glitchInit: !0,
        repeatAnimation: !1,
        glitchTimer: null,
        stop: function() {
            this.repeatAnimation = !1, clearTimeout(this.glitchTimer), this.ctx.putImageData(this.imgData[0], 0, 0)
        },
        glitch: function(e) {
            var t = this;
            this.glitchTimer = setTimeout(function() {
                t.ctx.clearRect(0, 0, t.w, t.h), t.ctx.putImageData(t.imgData[e[0].frame], 0, 0), e.shift(), e.length ? t.glitch(e) : t.play()
            }, e[0].time)
        },
        play: function(e) {
            if (this.imgData.length - 1 !== this.framesCount || !this.repeatAnimation) return !1;
            e = e || (this.glitchInit ? this.options.firstDelay : Helpers.getRandom(this.options.delay));
            var t = [{
                frame: 1,
                time: e
            }, {
                frame: 2,
                time: 100
            }, {
                frame: 3,
                time: 80
            }, {
                frame: 0,
                time: 50
            }, {
                frame: 1,
                time: 50
            }, {
                frame: 0,
                time: 100
            }];
            this.glitch(t), this.glitchInit = !1
        },
        prepareGlitches: function() {
            var e = this,
                t = this.glitchSettings[0];
            glitch(this.imgData[0], {
                amount: t[0],
                seed: t[1],
                iterations: t[2],
                quality: t[3]
            }, function(t) {
                t.error ? e.imgData.push(e.imgData[0]) : e.imgData.push(t), e.glitchSettings.shift(), e.glitchSettings.length ? e.prepareGlitches() : (e.$img.hide(), e.$img.trigger("done"), e.repeatAnimation && e.play())
            })
        },
        init: function() {
            this.id = "ctx_" + (new Date).getTime() + "_" + parseInt(1e3 * Math.random(), 10);
            var t, i = this,
                n = this.$img.parent(),
                s = e('<canvas id="' + this.id + '"/>').prependTo(n),
                o = document.getElementById(this.id, {
                    alpha: !1
                });
            return this.glitchSettings = this.$img.data("glitch") || this.options.settings, this.framesCount = this.glitchSettings.length, this.imgData = [], o ? (this.ctx = o.getContext("2d"), n.imagesLoaded(function() {
                return i.w = i.$img.width(), i.h = i.$img.height(), i.w && i.h ? (t = new Image, o.width = i.w, o.height = i.h, t.onload = function() {
                    i.ctx.drawImage(i.$img[0], 0, 0, i.w, i.h), i.imgData[0] = i.ctx.getImageData(0, 0, i.w, i.h), i.prepareGlitches({
                        imgData: i.imgData,
                        settings: i.glitchSettings
                    })
                }, t.src = i.$img.attr("src"), s.addClass(i.$img.attr("class")), void s.data(i.$img.data())) : !1
            }), void this.$img.off().on("play", function() {
                i.repeatAnimation = !0, i.play()
            }).on("playOnce", function() {
                i.repeatAnimation = !0, i.play(10), i.repeatAnimation = !1
            }).on("stop", function() {
                i.stop()
            })) : !1
        }
    }, e.fn[i] = function(n) {
        return this.each(function() {
            e.data(this, "plugin_" + i) || e.data(this, "plugin_" + i, new t(this, n))
        })
    }
}(jQuery);
! function(e) {
    "use strict";

    function t(t, i) {
        return Helpers.mqMobile.matches ? !1 : (this.$el = e(t), this.options = e.extend({}, n, i), this.options.color.unshift("transparent"), void this.init())
    }
    var i = "svgGlitch",
        n = {
            color: ["#ff5959", "#00ffd8"],
            strength: 0,
            offset: 2
        };
    t.prototype = {
        lines2: new Backbone.Collection([{
            h: 40,
            m: 0
        }, {
            h: 14,
            m: -1
        }, {
            h: 14,
            m: 1
        }, {
            h: 6,
            m: -1
        }, {
            m: 0
        }]),
        lines3: new Backbone.Collection([{
            h: 1,
            m: 0
        }, {
            h: 4,
            m: -1
        }, {
            h: 1,
            m: 0
        }, {
            h: 4,
            m: 1
        }, {
            h: 26,
            m: 0
        }, {
            h: 5,
            m: 1
        }, {
            h: 4,
            m: -1
        }, {
            h: 2,
            m: 1
        }, {
            h: 1,
            m: -1
        }, {
            h: 6,
            m: 1
        }, {
            h: 10,
            m: 0
        }, {
            h: 2,
            m: -1
        }, {
            h: 1,
            m: 0
        }, {
            h: 2,
            m: -1
        }, {
            h: 11,
            m: -1
        }, {
            m: 0
        }]),
        margin: [0, 1, -1],
        setLinesY: function(e) {
            var t, i;
            e.models.forEach(function(n, s) {
                t = 0 === s ? 0 : t + e.at(s - 1).get("h"), i = n.get("h"), n.get("h") || (i = 100 - e.at(s - 1).get("y")), n.set({
                    y: t,
                    h: i
                })
            })
        },
        getCLipHtml: function(e) {
            var t = '<clipPath id="' + e.cId + '_f2">';
            return this.lines2.where({
                m: this.margin[e.i]
            }).forEach(function(e) {
                t += '<rect x="0" y="' + e.get("y") + '%" width="100%" height="' + e.get("h") + '%"/>'
            }), t += "</clipPath>", t += '<clipPath id="' + e.cId + '_f3">', this.lines3.where({
                m: this.margin[e.i]
            }).forEach(function(e) {
                t += '<rect x="0" y="' + e.get("y") + '%" width="100%" height="' + e.get("h") + '%"/>'
            }), t += "</clipPath>"
        },
        getDefsHtml: function(e) {
            return '<filter id="' + e.sId + '"><feGaussianBlur in="SourceAlpha" stdDeviation="0" /><feOffset dx="' + e.margin + '" dy="0" result="offsetblur" /><feFlood flood-color="' + e.color + '"/><feComposite in2="offsetblur" operator="in"/><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter>'
        },
        prepareFrames: function(e, t) {
            var i = {
                    color: this.options.color[t],
                    margin: this.margin[t] * this.options.offset,
                    i: t,
                    cId: this.cId + "_" + t,
                    sId: this.sId + "_" + t
                },
                n = "<defs>" + this.getCLipHtml(i) + this.getDefsHtml(i) + "</defs><g>" + e.html() + "</g>";
            e.html(n)
        },
        hide: function(e) {
            e.css("visibility", "hidden")
        },
        show: function(e) {
            e.css({
                visibility: "visible",
                display: "block"
            })
        },
        svgGlitchFrame3: function() {
            var t = this;
            this.$svg.forEach(function(i, n) {
                e("g", i).attr("clip-path", "url(#" + t.cId + "_" + n + "_f3)"), e("g", i).attr("filter", "url(#" + t.sId + "_" + n + ")"), t.show(i)
            })
        },
        svgGlitchFrame2: function() {
            var t = this;
            this.$svg.forEach(function(i, n) {
                e("g", i).attr("clip-path", "url(#" + t.cId + "_" + n + "_f2)"), e("g", i).attr("filter", ""), t.show(i)
            })
        },
        svgGlitchFrame1: function() {
            var t = this;
            this.$svg.forEach(function(i, n) {
                e("g", i).removeAttr("clip-path"), e("g", i).removeAttr("filter"), n ? t.hide(i) : t.show(i)
            })
        },
        playOnce: function() {
            var e = this;
            this.svgGlitchFrame2(), setTimeout(function() {
                e.svgGlitchFrame3(), setTimeout(function() {
                    e.svgGlitchFrame1(), setTimeout(function() {
                        e.svgGlitchFrame2(), setTimeout(function() {
                            e.svgGlitchFrame3(), setTimeout(function() {
                                e.svgGlitchFrame1(), setTimeout(function() {
                                    e.svgGlitchFrame2(), setTimeout(function() {
                                        e.svgGlitchFrame1()
                                    }, 100)
                                }, 100)
                            }, 100)
                        }, 50)
                    }, 80)
                }, 100)
            }, 100)
        },
        init: function() {
            this.$el.addClass("svg-glitch");
            var t = this;
            this.id = (new Date).getTime() + "_" + parseInt(1e3 * Math.random(), 10), this.cId = "clip_" + this.id, this.sId = "shadow_" + this.id, this.$svg = [], this.$svg.push(e("svg", this.$el)), this.$svg.push(this.$svg[0].clone().appendTo(this.$el).css("left", 1 + this.options.strength + "%")), this.$svg.push(this.$svg[0].clone().appendTo(this.$el).css("left", -1 - this.options.strength + "%")), this.setLinesY(this.lines2), this.setLinesY(this.lines3), e.each(e("svg", this.$el), function(i) {
                t.prepareFrames(e(this), i)
            }), this.svgGlitchFrame1(), this.$el.off().on("playOnce", function() {
                t.playOnce()
            })
        }
    }, e.fn[i] = function(n) {
        return this.each(function() {
            e.data(this, "plugin_" + i) || e.data(this, "plugin_" + i, new t(this, n))
        })
    }
}(jQuery);
$(function() {
    "use strict";
    FastClick.attach(document.body)
});
var userAgent = "navigator" in window && "userAgent" in navigator && navigator.userAgent.toLowerCase() || "";
window.G = Backbone.utils.extend(window.G || {}, {
    classes: {},
    views: {},
    events: {},
    helpers: {
        canvasSupported: !!document.createElement("canvas").getContext,
        isTouch: "ontouchstart" in window || navigator.msMaxTouchPoints,
        isIE: /msie/i.test(userAgent) || "ActiveXObject" in window || /edge/i.test(userAgent)
    },
    page: null
});
var App = function() {
    "use strict";
    var e = function() {
        var e = $("body");
        window.onpageshow = function(e) {
            e.persisted && window.location.reload()
        }, window.onbeforeunload = function() {
            e.addClass("h-hide"), window.scrollTo(0, 0)
        }, "scrollRestoration" in history && (history.scrollRestoration = "manual"), window.Helpers = new G.classes.Helpers, window.Loader = new G.classes.Loader, window.Router = new G.classes.Router, window.HeaderView = new G.views.HeaderView, window.MenuView = new G.views.MenuView, Backbone.history.start({
            pushState: !0,
            hashChange: !1,
            root: basePath
        }), Helpers.calcREM(), Helpers.smoothScroll(), Helpers.metrikaTargets()
    };
    return {
        init: e
    }
}();
$(function() {
    "use strict";
    App.init()
});
! function(e) {
    "use strict";
    e.classes.Helpers = Backbone.View.extend({
        evt: {
            CALCREM_INIT: "Helpers:CALCREM_INIT",
            CALCREM_DONE: "Helpers:CALCREM_DONE",
            ONBLOCK_SCROLL: "Helpers:ONBLOCK_SCROLL"
        },
        ns: ".Helpers",
        $window: $(window),
        $body: $("body"),
        $html: $("html"),
        $header: $("header"),
        $page: $("#page"),
        wW: window.innerWidth,
        wH: window.innerHeight,
        cssX: 1,
        remIsInit: !1,
        blockScroll: !1,
        blockMouseWheel: !1,
        checkMediaState: function() {
            var e = this;
            this.$window.on("resize orientationchange checkMediaState", function() {
                e.mqMobile = window.matchMedia("(max-width: 1024px)"), e.mqTablet = window.matchMedia("(min-width: 768px) and (max-width: 1024px)"), e.mqTabletLandscape = window.matchMedia(" (min-width: 891px) and (max-width: 1024px)"), e.mqTabletPortrait = window.matchMedia(" (min-width: 768px) and (max-width: 890px)"), e.mqPhone = window.matchMedia("(max-width: 767px)"), e.mqPhonePortrait = window.matchMedia("(max-width: 399px)"), e.$body.trigger("MediaStateChange")
            }).trigger("checkMediaState")
        },
        toggleScroll: function(e) {
            function t(e) {
                e = e || window.event, e.preventDefault && e.preventDefault(), e.returnValue = !1, a.globalDispatcher.trigger(a.evt.ONBLOCK_SCROLL)
            }

            function i(e) {
                return r[e.keyCode] ? (t(e), a.globalDispatcher.trigger(a.evt.ONBLOCK_SCROLL), !1) : void 0
            }

            function n() {
                a.blockScroll && (window.scrollTo(0, 0), a.globalDispatcher.trigger(a.evt.ONBLOCK_SCROLL))
            }

            function s() {
                window.addEventListener && window.addEventListener("DOMMouseScroll", t, !1), window.onscroll = n, window.onwheel = t, window.onmousewheel = document.onmousewheel = t, window.ontouchmove = t, document.onkeydown = i
            }

            function o() {
                window.removeEventListener && window.removeEventListener("DOMMouseScroll", t, !1), window.onscroll = document.onscroll = null, window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, document.onkeydown = null
            }
            var a = this,
                r = {
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1
                };
            e ? (this.blockScroll = !1, o()) : (this.blockScroll = !0, s())
        },
        smoothScroll: function() {
            if (Helpers.mqMobile.matches) return !1;
            var e, t, i, n, s = this,
                o = 1.2,
                a = 170;
            this.$window.on("scrollTo mousewheel DOMMouseScroll", function(r) {
                return Helpers.mqMobile.matches ? !1 : s.blockScroll || s.blockMouseWheel ? (r.preventDefault(), !1) : ("scrollTo" === r.type && (s.blockMouseWheel = !0, setTimeout(function() {
                    s.blockMouseWheel = !1
                }, 1e3 * o)), void(s.$body[0].scrollHeight > s.$body[0].clientHeight && (r.preventDefault(), clearTimeout(e), i = s.$window.scrollTop(), 0 === r.y || r.y ? (r.y < 0 && (r.y = 0), n = r.y) : (t = r.originalEvent.wheelDelta / 120 || -r.originalEvent.detail / 3, n = i - parseInt(t * a, 10)), TweenLite.to(s.$window, o, {
                    scrollTo: {
                        y: n,
                        autoKill: !0
                    },
                    ease: Circ.easeOut,
                    autoKill: !0,
                    overwrite: 5
                }), s.$body.hasClass("h-dh") || s.$body.addClass("h-dh"), e = setTimeout(function() {
                    s.$body.removeClass("h-dh")
                }, 1e3 * o / 6), s.$window.trigger("smoothScroll"))))
            })
        },
        bindViewport: function(e, t) {
            var i, n, s, o, a, r, l = this,
                c = "bindViewport.t" + (new Date).getTime() + "-" + parseInt(1e3 * Math.random(), 10) + t,
                h = "resize" + t + " scroll" + t + " orientationchange" + t + " " + c;
            this.$window.on(h, function() {
                n = l.wH || document.documentElement.clientHeight, s = n / 2, e.each(function() {
                    o = $(this), a = o[0].getBoundingClientRect(), i = o.data("treshold") || 0, 0 > i ? o.trigger("forceViewport") : (i = n * i / 100, r = null, a.top - i <= n && a.bottom >= n ? r = "topInViewport" : a.bottom < n && a.bottom >= 0 ? r = "bottomInViewport" : (a.bottom < 0 || a.top - i > n) && (r = "outViewport"), r && o.trigger(r), r = null, a.top <= s && a.bottom >= s ? r = "midInViewport" : (a.bottom < s || a.top > s) && (r = "midOutViewport"), r && o.trigger(r))
                })
            }).trigger(c)
        },
        sign: function(e) {
            return e = +e, 0 === e || isNaN(e) ? e : e > 0 ? 1 : -1
        },
        getEvent: function(t) {
            var i = {
                evt: t,
                click: function() {
                    window.navigator.pointerEnabled ? this.evt = "pointerdown" : window.navigator.msPointerEnabled ? this.evt = "MSPointerDown" : this.evt = "tap"
                }
            };
            return i[t] && i[t](), e.helpers.isTouch && i.evt ? i.evt : t
        },
        getRandom: function(e, t, i) {
            Array.isArray(e) && e.length > 1 && (t = e[1], e = e[0]);
            var n = Math.random() * (t - e) + e;
            return i && (n = Math.round(n)), n
        },
        checkFontsIsReady: function() {
            var t = $.Deferred();
            if (e.helpers.isIE) t.resolve();
            else {
                var i = new FontFaceObserver("MuseoSansCyrl", {
                    weight: 900
                });
                i.check().then(function() {
                    t.resolve()
                }, function() {
                    t.resolve()
                })
            }
            return t.promise()
        },
        checkRemInit: function() {
            var e = $.Deferred();
            return this.remIsInit ? e.resolve() : this.globalDispatcher.once(this.evt.CALCREM_INIT, function() {
                e.resolve()
            }), e.promise()
        },
        calcREM: function() {
            var e, t = this,
                i = 1470,
                n = this.wW;
            n > i && (n = i), this.cssX = 1 / i * n, e = 12 * this.cssX, this.mqMobile.matches ? this.mqTablet.matches ? this.$html.css("font-size", "10.5px") : this.mqPhone.matches && this.$html.css("font-size", "8.6px") : this.$html.css("font-size", e + "px"), this.bottomBorder = 30 * this.cssX, this.topBorder = this.$header.innerHeight(), this.pH = this.$page.outerHeight(), setTimeout(function() {
                t.globalDispatcher.trigger(t.evt.CALCREM_DONE), t.remIsInit || t.checkFontsIsReady().done(function() {
                    t.remIsInit = !0, t.globalDispatcher.trigger(t.evt.CALCREM_INIT)
                })
            }, 10)
        },
        metrikaTargets: function() {
            $("body").on("click", 'a[href^="mailto:"]', function() {
                return yaCounter24332773.reachGoal("MAIL_TO_SERGEY"), fbq("track", "Lead"), ga("send", "event", "link", "mailto", "MAIL_TO_SERGEY"), !0
            })
        },
        initialize: function() {
            $.extend(!0, e.events, this.evt);
            var t = this,
                i = "resize.initialize" + this.ns;
            this.checkMediaState(), this.$window.off(i).on(i, $.debounce(200, function() {
                return t.wW === window.innerWidth && t.wH == window.innerHeight ? !1 : (t.wW = window.innerWidth, t.wH = window.innerHeight, void t.calcREM())
            }))
        }
    })
}(G);
! function(e) {
    "use strict";
    e.classes.Router = Backbone.Router.extend({
        initialFire: document.location.href,
        currentUrl: document.location.href,
        isPopstate: !1,
        popstatePid: null,
        showPage: function(t) {
            return this.isPopstate || !this.initialFire ? (this.isPopstate = !1, this.popstatePid = null, !1) : (e.page = t || "main", void Loader.showPage())
        },
        showProject: function(t) {
            return this.isPopstate || !this.initialFire ? (this.isPopstate = !1, this.popstatePid = null, !1) : (e.page = "project", e.project = t, void Loader.showPage())
        },
        popStateHandler: function() {
            var t = this;
            window.onpopstate = function(i) {
                if (t.initialFire === document.location.href) return i.preventDefault(), t.initialFire = !1, !1;
                if (t.initialFire = !1, t.isPopstate = !0, t.popstatePid = i.state && i.state.pid ? i.state.pid : null, t.popstatePid && $("#" + t.popstatePid).length) $("#" + t.popstatePid).trigger("click");
                else {
                    var n = location.href;
                    Loader.loadPage("/" + Backbone.history.getFragment(), n)
                }
                t.globalDispatcher.trigger(e.events.ON_POPSTATE)
            }
        },
        clickHandler: function() {
            var t = this;
            $(document).on("click", "a[href]:not([data-bypass])", function(i) {
                var n, s, o = $(this),
                    a = {
                        prop: o.prop("href"),
                        attr: o.attr("href")
                    },
                    r = location.protocol + "//" + location.host + "/";
                if (a.prop.slice(0, r.length) === r) {
                    if (i.preventDefault(), "#" === a.attr) return !1;
                    if (s = Loader.parseUrl(a.attr), n = s.page, "project" !== n && e.page === n) return !1;
                    t.initialFire = !1;
                    var l = location.href;
                    window.history.pushState(null, null, a.attr), Loader.loadPage(a.attr, l)
                }
            })
        },
        routesInit: function() {
            this.route(/^()\?*(.*?)$/, "showPage"), this.route(/^([^\/]+)\/\?*(.*?)$/, "showPage"), this.route("projects/:project/(?*querystring)", "showProject")
        },
        initialize: function() {
            this.routesInit(), this.clickHandler(), this.popStateHandler()
        }
    })
}(G);
! function(e) {
    "use strict";
    e.views.BaseView = Backbone.View.extend({
        evt: {
            REM_READY: "BaseView:REM_READY",
            DESTROY_VIEW: "BaseView:DESTROY_VIEW",
            PAGE_IS_PREPARED: "BaseView:PAGE_IS_PREPARED",
            ON_POPSTATE: "BaseView:ON_POPSTATE"
        },
        timers: {},
        destroyView: function() {
            this.trigger(this.evt.DESTROY_VIEW), this.undelegateEvents(), this.$el.removeData().unbind(), this.remove(), Backbone.View.prototype.remove.call(this)
        },
        parallax: function(e, t) {
            return Helpers.mqMobile.matches ? !1 : void Helpers.$window.on("scroll" + t + " parallax" + t, function() {
                if (Helpers.mqMobile.matches) return !1;
                var t, i, n, s, o, a, r, l, c, h, d, u = Helpers.$window.scrollTop(),
                    p = Helpers.$body[0].scrollHeight,
                    g = {};
                e.each(function() {
                    return g = {}, t = $(this), d = t.data("axis") || "y", t.length ? (i = t.closest(".js-parallax-wrapper").length ? t.closest(".js-parallax-wrapper") : t.parent(), n = i[0].getBoundingClientRect(), a = parseInt(t.data("speed"), 10) / 109 || .2, r = parseInt(t.data("direction"), 10) || 1, o = (Helpers.wH - Helpers.topBorder - Helpers.bottomBorder - n.height) / 2, s = i.offset().top, 0 > o && u + n.top <= Helpers.topBorder && (o = 0), l = Math.round((n.top - Helpers.topBorder - o) * a) * r, 0 === u && 0 === o ? l = 0 : (c = p, h = Helpers.wH + u, c - s - i.innerHeight() - Helpers.bottomBorder <= 2 && (c - h) / c === 0 && (l = 0)), g[d] = l, void TweenLite.to(t, 1, g)) : !1
                })
            })
        },
        animateEffects: function(e) {
            if (!e.data("type")) return !1;
            var t = e.data("type"),
                i = {
                    opacity: 0
                },
                n = {
                    opacity: 1
                },
                s = e.data("offset") || 15,
                o = e.data("duration") || 800;
            switch (t) {
                case "fadeInTop":
                case "fadeInBottom":
                    "fadeInTop" === t && (s = -1 * s), i.y = s + "%", n.y = "0%";
                    break;
                case "fadeInLeft":
                case "fadeInRight":
                    "fadeInLeft" === t && (s = -1 * s), i.x = s + "%", n.x = "0%"
            }
            TweenLite.set(e, i), e.one("is-animated", function() {
                TweenLite.to(e, o / 1e3, n)
            })
        },
        animateBlock: function() {
            var t = this,
                i = $(".js-animate", this.el);
            return Helpers.mqPhone.matches ? !1 : (i.each(function() {
                var e = $(this);
                e.addClass("is-init"), t.animateEffects(e), setTimeout(function() {
                    e.addClass("is-animate")
                }, 10)
            }), void this.globalDispatcher.once(e.events.LOADER_IS_HIDDEN, function() {
                i.on("bottomInViewport", function(e) {
                    if (e.currentTarget !== e.target) return !1;
                    var t = $(this),
                        i = parseInt(t.data("delay"), 10) || 10;
                    t.hasClass("is-animated") || (t.addClass("is-animated"), setTimeout(function() {
                        t.removeClass("is-init"), t.trigger("is-animated")
                    }, i))
                }), Helpers.bindViewport(i, t.ns)
            }))
        },
        checkImagesIsReady: function() {
            var t = this,
                i = $.Deferred();
            return this.$el.imagesLoaded({
                background: ".js-has-bg"
            }).always(function() {
                i.resolve()
            }).progress(function(i) {
                t.globalDispatcher.trigger(e.events.IMAGE_LOADED, {
                    loaded: i.progressedCount,
                    total: i.images.length
                })
            }), i.promise()
        },
        checkPageIsPrepared: function() {
            var t = this,
                i = $.Deferred();
            return Helpers.checkRemInit().done(function() {
                t.needLoading ? t.once(e.events.PAGE_IS_PREPARED, function() {
                    i.resolve()
                }) : i.resolve()
            }), i.promise()
        },
        pageIsReady: function() {
            var e = $.Deferred(),
                t = this.checkImagesIsReady(),
                i = this.checkPageIsPrepared();
            return $.when(t, i).done(function() {
                e.resolve()
            }), e.promise()
        },
        baseAnimation: function() {
            var t = this,
                i = $.Deferred();
            return this.$el.addClass("page-is-init"), i.resolve(), this.globalDispatcher.once(e.events.LOADER_IS_HIDDEN, function() {
                t.$el.addClass("page-is-animate"), t.$el.removeClass("page-is-init"), Helpers.pH = Helpers.$page.outerHeight()
            }), i.promise()
        },
        constructor: function(t) {
            this.evt && $.extend(!0, e.events, this.evt), t && t.el && (this.el = t.el), this.el && this.el.length && this.animateBlock(), Backbone.View.apply(this, arguments)
        }
    })
}(G);
! function(e) {
    "use strict";
    e.classes.Loader = Backbone.View.extend({
        evt: {
            SHOW_PAGE: "Loader:SHOW_PAGE"
        },
        ns: ".Loader",
        $title: $("title"),
        $page: $("#page"),
        prevPage: null,
        type: "fade",
        pages: ["main", "about", "projects", "project", "contacts"],
        parseUrl: function(e) {
            var t, i, n, s = ["^/[^/]*$", "^/(project)s/([^/]+)/", "^/(" + this.pages.join("|") + ")+/"];
            return e = e.replace(baseUrl, "/"), e = e.replace("/en/", "/"), s.forEach(function(s, o) {
                t || (t = e.match(new RegExp(s)), t && (0 === o ? i = "main" : (i = t[1], 1 === o && (n = t[2]))))
            }), i || (i = "error"), {
                page: i,
                project: n
            }
        },
        setLoaderType: function() {
            if (this.prevPage) "project" === this.prevPage && "project" === e.page ? this.type = "bottom" : "projects" === this.prevPage && "project" === e.page ? Router.isPopstate ? this.type = "left" : this.type = "fast" : this.type = "left";
            else {
                var t = sessionStorage.getItem("introDone");
                t || Helpers.mqMobile.matches ? this.type = "fade" : (sessionStorage.setItem("introDone", !0), this.type = "intro")
            }
            Router.isPopstate = !1, Router.popstatePid = null, Router.initialFire !== document.location.href && (Router.initialFire = !1)
        },
        loadPage: function(t, i) {
            var n, s, o, a = this,
                r = $.ajax({
                    type: "GET",
                    dataType: "json",
                    url: window.location.href + "?api=getContent&json=Y"
                });
            this.prevPage = e.page, s = this.parseUrl(t), e.page = s.page, e.project = s.project, Router.currentUrl = document.location.href, this.setLoaderType(), o = this.loaderView.show(), $.when(r).done(function() {
                a.globalDispatcher.trigger(e.events.HTML_LOADED)
            }), $.when(r, o).done(function(e) {
                n = e[0], a.pageView && a.pageView.destroyView(), a.$page.append(n.content), a.$title.text(n.title), yaCounter24332773.hit(window.location.href, {
                    title: n.title,
                    referer: i
                }), ga("set", {
                    page: window.location.href,
                    title: n.title
                }), ga("send", "pageview"), a.showPage()
            })
        },
        showPage: function() {
            var t = this,
                i = e.page.substr(0, 1).toUpperCase() + e.page.substr(1),
                n = {
                    el: $("#" + e.page + "Page")
                };

                console.log(e.events.PAGE_IS_READY);
            "project" === e.page && (n.el = $("#" + e.project + e.page + "Page")), -1 !== $.inArray(e.page, this.pages) ? this.pageView = new e.views[i + "PageView"](n) : (n.el = $("#errorPage"), this.pageView = new e.views.ErrorPageView(n)), Helpers.checkRemInit().done(function() {
                t.pageView.trigger(e.events.REM_READY), t.pageView.pageIsReady().done(function() {
                    t.globalDispatcher.trigger(e.events.PAGE_IS_READY), t.pageView.baseAnimation().done(function() {
                        t.trigger(t.evt.SHOW_PAGE), t.loaderView.hide()
                    })
                })
            })
        },
        initialize: function() {
            this.loaderView = new e.views.LoaderView
        }
    })
}(G);
! function(e) {
    "use strict";
    e.views.LoaderView = e.views.BaseView.extend({
        ns: ".LoaderView",
        el: $("#loader"),
        $frame: $("#loaderFrame"),
        $frameShadow: $("#loaderFrameShadow"),
        $numbers: $("#loaderNumbers"),
        $page: $("#page"),
        evt: {
            LOADER_IS_SHOWN: "LoaderView:LOADER_IS_SHOWN",
            LOADER_IS_HIDDEN: "LoaderView:LOADER_IS_HIDDEN",
            HTML_LOADED: "LoaderView:HTML_LOADED",
            IMAGE_LOADED: "LoaderView:IMAGE_LOADED",
            PAGE_IS_READY: "LoaderView:PAGE_IS_READY",
            TEXT_IS_DONE: "LoaderView:TEXT_IS_DONE"
        },
        $text: $("#loaderText"),
        $digitsSvg: $("#loaderDigitsSvg"),
        $digit1: $("#loaderdigit1"),
        $digit2: $("#loaderdigit2"),
        $digitsDuck: $("#loaderDigitsDuck"),
        $circle: $("#loaderCircle"),
        $circleSvg: $("#loaderCircleSvg"),
        $circleDuck: $("#loaderCircleDuck"),
        dT: [],
        xy: 1e4,
        textDuration: 2,
        slideDr: .8,
        ease1: Elastic.easeInOut.config(1, .82),
        pageIsReady: !1,
        textIsDone: !1,
        onCompleteText: function() {
            CSSPlugin.useSVGTransformAttr = !0;
            var t = this,
                i = new TimelineMax({
                    onComplete: function() {
                        t.textIsDone = !0, t.globalDispatcher.trigger(e.events.TEXT_IS_DONE)
                    }
                });
            $.each($("polygon, path", this.$text), function() {
                i.to($(this), .6, {
                    x: "+=" + Helpers.getRandom(-t.xy, t.xy),
                    y: "+=" + Helpers.getRandom(-t.xy, t.xy),
                    rotation: "+=" + Helpers.getRandom(-720, 720),
                    scale: 0,
                    opacity: 0
                }, "boom")
            })
        },
        onUpdateText: function(e) {
            this.textProgress = parseInt(100 * e.progress(), 10), this.textProgress > 63 && this.textProgress < 70 ? this.textTl.timeScale(.15) : this.textTl.timeScale(1), 100 === this.textProgress && this.onCompleteText()
        },
        animateProgress: function() {
            var e = this,
                t = {
                    i: 1
                },
                i = new TimelineMax({
                    delay: .5,
                    onUpdate: function() {
                        e.pageIsReady && t.i > parseInt(e.$numbers.text(), 10) && e.$numbers.text(t.i)
                    }
                });
            this.progressDuration = .93 * this.textDuration + this.textDuration / .15 * .2, i.to(t, this.progressDuration, {
                i: 99,
                roundProps: "i"
            })
        },
        animateText: function() {
            CSSPlugin.useSVGTransformAttr = !0, this.textTl = new TimelineMax({
                onUpdateParams: ["{self}"],
                onUpdate: this.onUpdateText,
                callbackScope: this
            });
            var e = this,
                t = $("polygon, path", this.$text),
                i = .0125,
                n = {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    ease: Power4.easeInOut,
                    delay: .5
                };
            $.each(t, function() {
                e.textTl.set($(this), {
                    x: "+=" + Helpers.getRandom(-e.xy, e.xy),
                    y: "+=" + Helpers.getRandom(-e.xy, e.xy),
                    rotation: "+=" + Helpers.getRandom(-720, 720),
                    scale: 0,
                    opacity: 0
                })
            }), this.$text.css("opacity", 1), this.textTl.staggerTo(t, this.textDuration, n, i)
        },
        progressUpdate: function() {
            var t, i, n = this,
                s = 99;
            this.globalDispatcher.on(e.events.HTML_LOADED, function() {
                n.$numbers.text(Helpers.getRandom(5, 10, !0))
            }).on(e.events.IMAGE_LOADED, function(e) {
                t = parseInt(n.$numbers.text(), 10), i = t + parseInt((s - t) / (e.total - e.loaded + 1), 10), i > 7 && (i -= Helpers.getRandom(1, 5, !0)), "intro" === Loader.type && n.textProgress < i ? n.$numbers.text(n.textProgress) : n.$numbers.text(i)
            }).on(e.events.PAGE_IS_READY, function() {
                "intro" === Loader.type ? (n.pageIsReady = !0, n.textIsDone ? (n.$numbers.text(99), n.hideIntro()) : n.globalDispatcher.on(e.events.TEXT_IS_DONE, function() {
                    n.hideIntro()
                })) : n.$numbers.text(99)
            }).on(e.events.LOADER_IS_HIDDEN, function() {
                n.$numbers.text(1)
            })
        },
        alignCircleDuck: function() {
            var e = this.$circleSvg.width() / Helpers.cssX,
                t = this.$circleDuck[0].getBBox(),
                i = e / 2 - t.width / 2,
                n = (50 - t.height) / 2;
            TweenLite.set(this.$circleDuck, {
                x: i,
                y: n
            })
        },
        eSlideToTop: function() {
            var e = $.Deferred(),
                t = this;
            return this.$frame.removeClass("is-shown"), TweenLite.to(this.$frame, this.slideDr, {
                y: "-100%",
                clearProps: "all",
                delay: .4,
                onComplete: function() {

                    t.$el.hide(), e.resolve()
                }
            }), TweenLite.fromTo(this.$frameShadow, this.slideDr, {
                opacity: 1
            }, {
                opacity: 0,
                delay: .4
            }), e.promise()
        },
        eSlideToRight: function() {
            var e = $.Deferred(),
                t = this;
            return this.$frame.removeClass("is-shown"), TweenLite.to(this.$frame, this.slideDr, {
                x: "100%",
                clearProps: "all",
                delay: .4,
                onComplete: function() {
                    t.$el.hide(), e.resolve()
                }
            }), TweenLite.fromTo(this.$frameShadow, this.slideDr, {
                opacity: 1
            }, {
                opacity: 0,
                delay: .4
            }), e.promise()
        },
        fastHide: function() {
            var e = this;
            setTimeout(function() {
                window.scrollTo(0, 0), e.globalDispatcher.trigger(e.evt.LOADER_IS_HIDDEN)
            }, 600)
        },
        fadeOut: function() {
            var e = $.Deferred(),
                t = this;
            return TweenLite.set(this.$frameShadow, {
                opacity: 0
            }), setTimeout(function() {
                t.$el.removeClass("loader--fs"), setTimeout(function() {
                    t.$frame.removeClass("is-shown")
                }, 400)
            }, 400), TweenLite.to(this.$frame, this.slideDr, {
                opacity: 0,
                clearProps: "all",
                delay: 1.2,
                onComplete: function() {
                    t.$el.hide().removeClass("loader--hidden"), e.resolve()
                }
            }), e.promise()
        },
        hideIntro: function() {
            var e = this;
            this.$el.addClass("loader--hidden"), this.fadeOut().done(function() {
                e.$page.addClass("is-shown"), e.globalDispatcher.trigger(e.evt.LOADER_IS_HIDDEN)
            })
        },
        hide: function() {
            var e = this;
            // console.log(Loader.type);
            "intro" === Loader.type || ("fade" === Loader.type ? this.fadeOut().done(function() {
                e.$page.addClass("is-shown"), e.globalDispatcher.trigger(e.evt.LOADER_IS_HIDDEN)
            }) : "bottom" === Loader.type ? this.eSlideToTop().done(function() {
                e.$page.addClass("is-shown"), e.globalDispatcher.trigger(e.evt.LOADER_IS_HIDDEN)
            }) : "fast" === Loader.type ? this.fastHide() : this.eSlideToRight().done(function() {
                e.$page.addClass("is-shown"), e.globalDispatcher.trigger(e.evt.LOADER_IS_HIDDEN)
            }))
        },
        eSlideFromBottom: function(t) {
            var i = this;
            setTimeout(function() {
                i.$numbers.text(1), TweenLite.set(i.$frame, {
                    y: "100%"
                }), i.$frame.removeClass("is-shown"), i.$el.show(), TweenLite.fromTo(i.$frameShadow, i.slideDr, {
                    opacity: 0,
                    delay: .2
                }, {
                    opacity: .4
                }), TweenLite.to(i.$frame, i.slideDr, {
                    y: "0%",
                    onComplete: function() {
                        window.scrollTo(0, 0), i.$frame.addClass("is-shown"), setTimeout(function() {
                            i.globalDispatcher.trigger(e.events.LOADER_IS_SHOWN), t.resolve()
                        }, 400)
                    }
                })
            }, 400)
        },
        eSlideFromLeft: function(t) {
            var i = this;
            this.$numbers.text(1), TweenLite.set(this.$frame, {
                x: "-100%"
            }), this.$frame.removeClass("is-shown"), this.$el.show(), TweenLite.fromTo(this.$frameShadow, this.slideDr, {
                opacity: 0
            }, {
                opacity: 1
            }), TweenLite.to(this.$frame, this.slideDr, {
                x: "0%",
                onComplete: function() {
                    i.$page.removeClass("is-shown"), i.$frame.addClass("is-shown"), setTimeout(function() {
                        i.globalDispatcher.trigger(e.events.LOADER_IS_SHOWN), t.resolve()
                    }, 400)
                }
            })
        },
        show: function() {
            var t = $.Deferred();
            return "bottom" === Loader.type ? this.eSlideFromBottom(t) : "fast" === Loader.type ? (this.globalDispatcher.trigger(e.events.LOADER_IS_SHOWN), t.resolve()) : this.eSlideFromLeft(t), t.promise()
        },
        initialize: function() {
            var t = this;
            this.progressUpdate(), this.globalDispatcher.once(e.events.CALCREM_INIT, function() {
                Loader.setLoaderType(), t.alignCircleDuck(), t.$el.removeClass("loader--init"), t.$frame.addClass("is-shown"), "intro" === Loader.type && (t.animateText(), t.animateProgress())
            })
        }
    })
}(G);
! function(e) {
    "use strict";
    e.views.MainPageView = e.views.BaseView.extend({
        ns: ".MainPageView",
        duckTimer: null,
        duck: function() {
            if (Helpers.mqTabletPortrait.matches || Helpers.mqPhone.matches) return !1;
            var e = new TimelineMax({
                    repeat: -1
                }),
                t = new TimelineMax({
                    repeat: -1
                }),
                i = new TimelineMax({
                    repeat: -1,
                    yoyo: !0
                }),
                n = new TimelineMax({
                    repeat: -1,
                    yoyo: !0
                }),
                s = $(".js-mp-duck", this.$el),
                o = $(".js-mp-duck-board", this.$el),
                a = $(".js-mp-duck-wheels", this.$el);
            e.to(a[0], 1, {
                rotation: "+=360",
                transformOrigin: "50% 50%",
                ease: Linear.easeNone
            }), t.to(a[1], 1.2, {
                rotation: "+=360",
                transformOrigin: "50% 50%",
                ease: Linear.easeNone
            }), i.to(s, .3, {
                y: "-4%",
                ease: Linear.easeNone
            }), n.to(o, .3, {
                rotation: "-2.5",
                transformOrigin: "50% 50%",
                ease: Linear.easeNone
            }).to(o, .3, {
                rotation: "3.5",
                transformOrigin: "50% 50%",
                ease: Linear.easeNone
            }), this.once(this.evt.DESTROY_VIEW, function() {
                e.kill(), t.kill(), i.kill(), n.kill()
            })
        },
        initialize: function() {
            var t = this,
                i = $("#mpSites", this.$el);
            this.once(this.evt.REM_READY, function() {
                i.textGlitch({
                    color: [
                        ["#00ffd8", "#80ffec"], "#f892a3", "#fffd62", "#2da99f"
                    ]
                }), new e.views.CarouselView({
                    el: $("#mpAwards", t.$el),
                    view: t
                })
            }), this.globalDispatcher.once(e.events.LOADER_IS_HIDDEN, function() {
                i.trigger("play"), t.duckTimer = setTimeout(function() {
                    t.duck()
                }, 1e3)
            }), this.once(this.evt.DESTROY_VIEW, function() {
                i.trigger("stop"), clearTimeout(t.duckTimer)
            })
        }
    })
}(G);
! function(e) {
    "use strict";
    e.views.AboutPageView = e.views.BaseView.extend({
        ns: ".AboutPageView",
        needLoading: !0,
        imgGlitch: function() {
            var e = this,
                t = 0;
            return Helpers.mqMobile.matches ? (this.$imgGlitch.each(function() {
                this.src = this.getAttribute("data-src")
            }), this.needLoading = !1, this.trigger(e.evt.PAGE_IS_PREPARED), !1) : void this.$imgGlitch.each(function() {
                this.src = this.getAttribute("data-src"), $(this).imgGlitch2({
                    firstDelay: Helpers.getRandom(2e3, 6e3, !0),
                    delay: [7e3, 14e3],
                    settings: [
                        [68, 12, 6, 99],
                        [68, 10, 9, 99],
                        [30, 2, 3, 91]
                    ]
                }).one("done", function() {
                    t += 1, t === e.$imgGlitch.length && (e.needLoading = !1, e.trigger(e.evt.PAGE_IS_PREPARED))
                })
            })
        },
        initialize: function() {
            var t, i = this;
            this.$imgGlitch = $(".js-img-glitch", i.$el), new e.views.PageNavView({
                el: this.$el
            }), this.once(this.evt.REM_READY, function() {
                i.imgGlitch(), i.parallax($(".js-parallax", i.$el), i.ns), $(".js-ap-carousel", i.$el).each(function() {
                    new e.views.CarouselView({
                        el: $(this),
                        view: i
                    })
                })
            }), this.globalDispatcher.once(e.events.LOADER_IS_HIDDEN, function() {
                i.$imgGlitch.trigger("play")
            }), Helpers.$window.on("smoothScroll" + this.ns, function() {
                i.$imgGlitch.trigger("stop"), clearTimeout(t), t = setTimeout(function() {
                    i.$imgGlitch.trigger("play")
                }, 200)
            }), this.once(this.evt.DESTROY_VIEW, function() {
                Helpers.$window.off(i.ns), i.$imgGlitch.trigger("stop")
            })
        }
    })
}(G);
! function(e) {
    "use strict";
    e.views.ProjectsPageView = e.views.BaseView.extend({
        events: function() {
            var e = {
                "mouseenter .js-site": "thumbGlitchHover",
                "click .js-case": "caseClick"
            };
            return e
        },
        ns: ".ProjectsPageView",
        needLoading: !0,
        pageInDr: 1800,
        glitchTimer: null,
        caseClick: function(e) {
            e.preventDefault(), Helpers.$page.append(tmpl("projectIntroTmpl"));
            var t, i = $("#projectIntro"),
                n = $("#projectIntroCase"),
                s = $("#projectIntroBg"),
                o = $(e.currentTarget),
                a = $("canvas", o),
                r = o[0].getBoundingClientRect(),
                l = parseFloat(Helpers.$page.css("border-top-width"), 10),
                c = parseFloat(Helpers.$page.css("border-bottom-width"), 10),
                h = parseFloat(Helpers.$page.css("border-left-width"), 10),
                d = {
                    top: r.top - l,
                    bottom: Helpers.wH - r.top - r.height - c,
                    left: r.left - h,
                    right: Helpers.$page.outerWidth() - r.left - r.width - h
                },
                u = {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                },
                p = new TimelineMax;
            Helpers.mqPhonePortrait.matches && (u.height = 182), i.show(), n.css(d), a.length && Helpers.mqMobile.matches || (a = $("img", o)), t = a[0]._gsTransform ? a[0]._gsTransform.y : 0, t = (s.height() - a.height()) / 2 + t, s.css("background-image", "url(" + o.data("intro") + ")"), s.css("background-position", "50% " + t + "px");
            var g = location.href;
            Router.isPopstate || window.history.pushState({
                pid: o.attr("id")
            }, null, o.attr("href")), s.imagesLoaded({
                background: !0
            }).done(function() {
                i.addClass("is-showing"), p.to(s, .2, {
                    opacity: 1
                }).to(n, .6, u, "-=0.2"), TweenLite.to(s, .8, {
                    css: {
                        backgroundPosition: "50% 50%"
                    }
                }), setTimeout(function() {
                    Loader.loadPage(o.attr("href"), g)
                }, 600)
            })
        },
        imgGlitchQueue: function(e) {
            var t = this,
                i = this.$thumbGlitch.eq(e);
            i.length && !Helpers.mqMobile.matches ? i.imgGlitch2().one("done", function() {
                t.thumbGlitchCounter += 1, t.parallax(i.parent().find("canvas"), t.ns), t.imgGlitchQueue(e + 1), t.thumbGlitchCounter === t.$thumbGlitch.length && (t.needLoading = !1, t.trigger(t.evt.PAGE_IS_PREPARED))
            }) : (this.needLoading = !1, this.trigger(t.evt.PAGE_IS_PREPARED))
        },
        loadImages: function() {
            this.$thumbGlitch.each(function() {
                this.src = this.getAttribute("data-src")
            })
        },
        thumbGlitchHover: function(e) {
            $(".js-thumb-glitch", $(e.currentTarget)).trigger("playOnce")
        },
        initialize: function() {
            var t = this,
                i = $(".js-site", this.$el);
            Helpers.toggleScroll(!0), this.$thumbGlitch = $(".js-thumb-glitch", this.$el), this.thumbGlitchCounter = 0, this.once(this.evt.REM_READY, function() {
                t.parallax($(".js-parallax", t.$el), t.ns), t.loadImages(), t.imgGlitchQueue(0)
            }), this.globalDispatcher.once(e.events.LOADER_IS_HIDDEN, function() {
                t.glitchTimer = setTimeout(function() {
                    i.removeClass("h-dh")
                }, t.pageInDr)
            }), this.once(this.evt.DESTROY_VIEW, function() {
                Helpers.$window.off(t.ns), clearTimeout(t.glitchTimer)
            })
        }
    })
}(G);
! function(e) {
    "use strict";
    e.views.ProjectPageView = e.views.BaseView.extend({
        events: function() {
            var e = {
                "topInViewport .js-pi-screen": "screenInViewport",
                "bottomInViewport .js-pi-screen": "screenInViewport",
                "outViewport .js-pi-screen": "screenOutViewport",
                "topInViewport .js-lazy": "lazyLoad",
                "forceViewport .js-lazy": "lazyLoad",
                "click #piIntroMouse": "introPlay",
                "click #piFooterMouse": "nextProjectClick"
            };
            return e[Helpers.getEvent("click") + " .js-video"] = "videoClick", e
        },
        ns: ".ProjectPageView",
        pageInDr: 1500,
        introOutDr: 600,
        introIsReady: !1,
        startLazyLoad: !1,
        introTimer: null,
        videoClick: function(e) {
            var t = $(e.currentTarget);
            Helpers.mqMobile.matches && !t.hasClass("is-active") && (t.addClass("is-active"), $("video", t)[0].play())
        },
        nextProjectClick: function() {
            $("#piFooterMouse").addClass("mouse__circle--fo")
        },
        nextProjectScroll: function() {
            var e, t = this.ns + "-nextProjectScroll",
                i = 0;
            Helpers.$window.off(t).on("mousewheel" + t + " DOMMouseScroll" + t, $.debounce(250, function(t) {
                e = t.originalEvent.wheelDelta || -40 * t.originalEvent.detail || 0, Helpers.pH === Helpers.$window.scrollTop() + Helpers.wH ? 0 >= e && (i += 1) : Helpers.pH - 50 > Helpers.$window.scrollTop() + Helpers.wH && (i = 0)
            })).on(" mousewheel" + t + " DOMMouseScroll" + t + " keydown" + t, function(n) {
                e = n.originalEvent.wheelDelta || -40 * n.originalEvent.detail || 0, Helpers.pH === Helpers.$window.scrollTop() + Helpers.wH && (0 >= e && i > 0 || 40 === n.keyCode) && ($("#piFooterMouse").trigger("click"), Helpers.$window.off(t))
            })
        },
        lazyLoad: function(e) {
            if (e.currentTarget !== e.target || !this.startLazyLoad) return !1;
            var t = $(e.currentTarget),
                i = $("img", t),
                n = $("video", t);
            if (!t.hasClass("lazy--loaded"))
                if (i.length) {
                    var s = i.data("src");
                    Helpers.mqPhone.matches && i.data("phone-src") && (s = i.data("phone-src")), i.attr("src", s), t.imagesLoaded(function() {
                        t.removeClass("lazy--loading"), setTimeout(function() {
                            t.addClass("lazy--loaded")
                        }, 10)
                    })
                } else n.length && (Helpers.mqMobile.matches || n[0].play(), t.removeClass("lazy--loading"), setTimeout(function() {
                    t.addClass("lazy--loaded")
                }, 10))
        },
        lazyInit: function() {
            var t = this,
                i = $(".js-lazy", this.$el);
            i.addClass("lazy lazy--loading"), this.globalDispatcher.once(e.events.LOADER_IS_HIDDEN, function() {
                t.startLazyLoad = !0, Helpers.bindViewport(i, t.ns)
            })
        },
        introPlay: function(t) {
            if (t && t.preventDefault(), !this.$el.hasClass("intro-out") && this.introIsReady) {
                var i = this,
                    n = $("#piAwards"),
                    s = n.innerHeight(),
                    o = 81 * Helpers.cssX,
                    a = -.43 * Helpers.wH;
                s > o && (a += s - o), this.introIsReady = !1, this.$el.addClass("intro-out"), setTimeout(function() {
                    Helpers.toggleScroll(!0), i.globalDispatcher.trigger(e.events.RECALC_NAV)
                }, this.introOutDr), TweenLite.to($("#piMpBrowser"), .8, {
                    y: a
                })
            }
        },
        checkReady: function() {
            var e = $.Deferred(),
                t = $("#projectIntro");
            return t.length ? ($("#projectIntro").removeClass("is-showing"), $("#projectIntroCase").removeClass("is-loading"), TweenLite.to(t, .6, {
                opacity: 0,
                onComplete: function() {
                    t.remove(), e.resolve()
                }
            })) : e.resolve(), e.promise()
        },
        intro: function() {
            var t = this;
            this.checkReady().done(function() {
                t.pageNav.once(e.events.NAV_CLICK, function() {
                    t.introPlay()
                }), t.introTimer = setTimeout(function() {
                    t.introIsReady = !0, t.globalDispatcher.off(e.events.ONBLOCK_SCROLL).on(e.events.ONBLOCK_SCROLL, function() {
                        t.introPlay()
                    })
                }, Helpers.mqPhone.matches ? 10 : t.pageInDr)
            })
        },
        screenInViewport: function(e) {
            return e.currentTarget !== e.target ? !1 : void $(e.currentTarget).removeClass("h-vh")
        },
        screenOutViewport: function(e) {
            return e.currentTarget !== e.target ? !1 : void $(e.currentTarget).addClass("h-vh")
        },
        initialize: function() {
            var t = this,
                i = $("video", this.$el);
            Helpers.mqMobile.matches || i.each(function() {
                this.preload = "auto"
            }), Helpers.mqPhone.matches || Helpers.toggleScroll(!1), this.lazyInit(), this.pageNav = new e.views.PageNavView({
                el: t.$el,
                doubleColor: !0
            }), this.once(this.evt.REM_READY, function() {
                Helpers.mqPhone.matches || setTimeout(function() {
                    var e = $("#piMpScreen", t.$el),
                        i = e.innerHeight(),
                        n = $("#piIntroScreen", t.$el).innerHeight(),
                        s = $(".js-nav-intro", t.$el).innerHeight(),
                        o = i - (n - s);
                    Helpers.mqTabletLandscape.matches ? o = .75 * o : Helpers.mqTabletPortrait.matches && (o = .4 * o), e.height(o)
                }, 100), t.parallax($(".js-parallax", t.$el), t.ns), Helpers.bindViewport($(".js-pi-screen", t.$el), t.ns)
            }), this.globalDispatcher.once(e.events.LOADER_IS_HIDDEN, function() {
                t.intro(), t.nextProjectScroll()
            }), this.once(this.evt.DESTROY_VIEW, function() {
                Helpers.$window.off(t.ns), clearTimeout(t.introTimer)
            }), this.globalDispatcher.off(e.events.ON_POPSTATE).once(e.events.ON_POPSTATE, function() {
                t.introIsReady = !1, 0 === Helpers.$window.scrollTop() && "bottom" !== Loader.type && Helpers.$page.removeClass("is-shown")
            })
        }
    })
}(G);
! function(e) {
    "use strict";
    e.views.ContactsPageView = e.views.BaseView.extend({
        ns: ".ContactsPageView",
        needLoading: !1,
        initialize: function() {
            var e = this;
            this.once(this.evt.REM_READY, function() {
                e.parallax($(".js-parallax", e.$el), e.ns)
            }), this.once(this.evt.DESTROY_VIEW, function() {
                Helpers.$window.off(e.ns)
            })
        }
    })
}(G);
! function(e) {
    "use strict";
    e.views.ErrorPageView = e.views.BaseView.extend({
        ns: ".ErrorPageView",
        initialize: function() {
            var t = $("#epCode", this.$el);
            this.once(this.evt.REM_READY, function() {
                t.textGlitch({
                    color: [
                        ["#00ffd8", "#80ffec"], "#f892a3", "#fffd62", "#2da99f"
                    ]
                })
            }), this.globalDispatcher.once(e.events.LOADER_IS_HIDDEN, function() {
                t.trigger("play")
            }), this.once(this.evt.DESTROY_VIEW, function() {
                t.trigger("stop")
            })
        }
    })
}(G);
! function(e) {
    "use strict";
    e.views.MenuView = e.views.BaseView.extend({
        evt: {
            MENU_IS_OPENED: "МenuView:MENU_IS_OPENED",
            MENU_IS_CLOSED: "МenuView:MENU_IS_CLOSED"
        },
        ns: ".МenuView",
        el: $("#menu"),
        $body: $("body"),
        $menuInner: $("#menuInner"),
        $menuNav: $("#menuNav"),
        $menuLi: $(".js-menu-li"),
        $menuLink: $(".js-menu-link"),
        $menuBenefits: $(".js-menu-benefits"),
        isAnimating: !1,
        isOpen: !1,
        bgD: .6,
        close: function(t) {
            this.isAnimating = !0;
            var i = this,
                n = new TimelineMax,
                s = new TimelineMax,
                o = {
                    y: "-45%",
                    opacity: 0
                };
            t ? (TweenLite.set(this.$menuLi, o), TweenLite.set(this.$menuBenefits, o), TweenLite.set(this.$el, {
                y: "-100%"
            }), this.isAnimating = !1, this.isOpen = !1, this.globalDispatcher.trigger(e.events.MENU_IS_CLOSED)) : (n.staggerTo(this.$menuLi, .4, o, .1), s.staggerTo(this.$menuBenefits, .4, o, .05), TweenLite.to(this.$el, this.bgD, {
                y: "-100%",
                delay: .2,
                ease: Power1.easeIn,
                onComplete: function() {
                    i.isAnimating = !1, i.isOpen = !1, i.globalDispatcher.trigger(e.events.MENU_IS_CLOSED)
                }
            }))
        },
        open: function() {
            this.isAnimating = !0;
            var t = this,
                i = new TimelineMax({
                    delay: this.bgD / 3,
                    onComplete: function() {
                        TweenLite.set(t.$menuLi, {
                            clearProps: "all"
                        }), t.isAnimating = !1, t.isOpen = !0, t.globalDispatcher.trigger(e.events.MENU_IS_OPENED)
                    }
                }),
                n = new TimelineMax({
                    delay: this.bgD / 3,
                    onComplete: function() {
                        TweenLite.set(t.$menuBenefits, {
                            clearProps: "all"
                        })
                    }
                }),
                s = {
                    y: "0%",
                    opacity: 1,
                    ease: Back.easeInOut.config(2)
                };
            TweenLite.to(this.$el, this.bgD, {
                y: "0%",
                ease: Power1.easeIn
            }), i.staggerTo(this.$menuLi, .4, s, .1), n.staggerTo(this.$menuBenefits, .4, s, .05)
        },
        initialize: function() {
            var t = this;
            this.globalDispatcher.once(e.events.CALCREM_INIT, function() {
                t.$menuLink.textGlitch({
                    color: ["#000", "#ff5959", "#00ffd8"],
                    strength: 2,
                    firstDelay: 10,
                    delay: [2e3, 5e3]
                }), TweenLite.set(t.$menuLi, {
                    y: "-45%",
                    opacity: 0
                }), TweenLite.set(t.$menuBenefits, {
                    y: "-45%",
                    opacity: 0
                })
            }).on(this.evt.MENU_IS_OPENED, function() {
                t.$menuLinkActive.trigger({
                    type: "play",
                    init: !0
                })
            }).on(this.evt.MENU_IS_CLOSED, function() {
                t.$menuLink.trigger("stop")
            }).on(e.events.LOADER_IS_SHOWN, function() {
                t.$menuLink.trigger("stop"), HeaderView.menuClose(!0)
            }), Loader.on(Loader.evt.SHOW_PAGE, function() {
                var i = e.page;
                "project" === e.page && (i = "projects"), t.$menuLink.trigger("stop"), t.$menuLink.removeClass("is-active"), t.$menuLinkActive = $("#" + i + "MenuLi"), t.$menuLinkActive.addClass("is-active")
            })
        }
    })
}(G);
! function(e) {
    "use strict";
    e.views.HeaderView = e.views.BaseView.extend({
        events: function() {
            var e = {
                "mouseenter #headerNavicon": "naviconHover",
                "mouseenter #headerLogo": "logoHover"
            };
            return e[Helpers.getEvent("click") + " #headerNavicon"] = "naviconClick", e
        },
        ns: ".HeaderView",
        el: $("header"),
        $navicon: $("#headerNavicon"),
        $logo: $("#headerLogo"),
        tlNavicon: new TimelineMax,
        states: {
            TBS1: "M1,26 L35,26 M1,8.1 L35,8.1",
            TBS2: "M6.3,5.6 L30.5,28.7 M30.2,5.3 L5.7,28.1",
            MS1: "M1,17.1 L35,17.1"
        },
        menuClose: function(e) {
            MenuView.close(e), this.tlNavicon.to(this.$naviconMState1, .2, {
                morphSVG: this.states.MS1
            }).set(this.$naviconTBState1, {
                opacity: 1
            }).to(this.$naviconTBState1, .2, {
                scaleY: 1,
                transformOrigin: "50% 50%",
                morphSVG: this.states.TBS1
            })
        },
        menuOpen: function() {
            MenuView.open(), this.tlNavicon.to(this.$naviconTBState1, .2, {
                scaleY: .2,
                transformOrigin: "50% 50%"
            }).set(this.$naviconTBState1, {
                opacity: 0
            }).to(this.$naviconMState1, .2, {
                morphSVG: this.states.TBS2
            })
        },
        naviconHover: function() {
            return MenuView.isAnimating ? !1 : void this.$navicon.trigger("playOnce")
        },
        naviconClick: function() {
            return MenuView.isAnimating ? !1 : void(MenuView.isOpen ? this.menuClose() : this.menuOpen())
        },
        logoHover: function() {
            this.$logo.trigger("playOnce")
        },
        initialize: function() {
            var t = this;
            this.globalDispatcher.on(e.events.CALCREM_INIT, function() {
                t.$logo.svgGlitch({
                    offset: 3
                }), t.$navicon.svgGlitch({
                    offset: 5,
                    strength: 5
                }), t.$naviconTBState1 = $(".js-headerNaviconTBS1", t.$el), t.$naviconMState1 = $(".js-headerNaviconMS1", t.$el)
            })
        }
    })
}(G);
! function(e) {
    "use strict";
    e.views.PageNavView = e.views.BaseView.extend({
        evt: {
            RECALC_NAV: "PageNavView:RECALC_NAV",
            NAV_CLICK: "PageNavView:NAV_CLICK"
        },
        events: function() {
            var e = {};
            return e[Helpers.getEvent("click") + " #pageNav li"] = "navClick", e
        },
        ns: ".PageNavView",
        currentScreen: null,
        doubleColorNav: function() {
            var e, t, i = $(".js-nav-intro", this.$el),
                n = $(".js-nav-main", this.$pageNav),
                s = $(".js-nav-clone", this.$pageNav),
                o = n.width(),
                a = n.innerHeight(),
                r = a + Helpers.topBorder;
            Helpers.$window.off(".doubleColorNav").on("scroll.doubleColorNav start.doubleColorNav", function() {
                e = i[0].getBoundingClientRect(), r >= e.bottom ? (t = a - (r - e.bottom), t >= 0 ? (TweenLite.set(n, {
                    clip: "rect(0 " + o + "px " + t + "px 0)"
                }), TweenLite.set(s, {
                    clip: "rect(" + t + "px " + o + "px " + a + "px 0)"
                })) : (TweenLite.set(n, {
                    clip: "rect(0 0 0 0)"
                }), TweenLite.set(s, {
                    clip: "rect(0 " + o + "px " + a + "px 0)"
                }))) : (TweenLite.set(n, {
                    clip: "rect(0 " + o + "px " + a + "px 0)"
                }), TweenLite.set(s, {
                    clip: "rect(0 0 0 0)"
                }))
            }).trigger("start.doubleColorNav")
        },
        doubleColorNavInit: function() {
            $("ul", this.$pageNav).clone().appendTo(this.$pageNav).addClass("page-nav__list--clone js-nav-clone"), $("ul", this.$pageNav).eq(0).addClass("page-nav__list--main js-nav-main"), this.doubleColorNav(), this.globalDispatcher.on(e.events.CALCREM_DONE, $.proxy(this.doubleColorNav, this)), this.globalDispatcher.on(e.events.RECALC_NAV, $.proxy(this.doubleColorNav, this))
        },
        navDotIn: function(e, t) {
            var i = this.$pageNavLi.filter('[data-target="' + e + '"]'),
                n = $(".js-nav-circle", i);
            return i.hasClass("is-active") && !t ? !1 : (i.addClass("is-active"), void TweenLite.fromTo(n, .6, {
                drawSVG: 0,
                scale: 1,
                opacity: 1
            }, {
                drawSVG: "100%",
                overwrite: 5
            }))
        },
        navDotOut: function(e) {
            var t = this.$pageNavLi.filter('[data-target="' + e + '"]'),
                i = $(".js-nav-circle", t),
                n = $(".js-nav-line", t),
                s = $(".js-nav-wawe-1", t),
                o = $(".js-nav-wawe-2", t),
                a = $(".js-nav-wawe-3", t),
                r = new TimelineLite,
                l = new TimelineLite,
                c = new TimelineLite,
                h = .8,
                d = .2,
                u = .3;
            return t.hasClass("is-active") ? (t.removeClass("is-active"), r.to(i, h, {
                scale: 1.5,
                transformOrigin: "50% 50%",
                opacity: 0
            }), TweenLite.set(n, {
                drawSVG: "100% 100%",
                strokeWidth: 1
            }), l.to(n, d, {
                drawSVG: "100%",
                delay: .2
            }).to(n, d, {
                drawSVG: "10% 10%"
            }), void c.fromTo(s, u, {
                attr: {
                    r: 0
                },
                strokeWidth: 5,
                opacity: 1
            }, {
                attr: {
                    r: 4
                },
                strokeWidth: 1,
                opacity: 0,
                delay: h / 3
            }).fromTo(a, u, {
                attr: {
                    r: 0
                },
                strokeWidth: 5,
                opacity: 1
            }, {
                attr: {
                    r: 2
                },
                strokeWidth: 1,
                opacity: 0
            }, "-=" + u / 3).fromTo(o, u, {
                attr: {
                    r: 0
                },
                strokeWidth: 5,
                opacity: 1
            }, {
                attr: {
                    r: 2.5
                },
                strokeWidth: 1,
                opacity: 0
            }, "-=" + u / 2)) : !1
        },
        navClick: function(e) {
            var t = $("#" + $(e.currentTarget).data("target")),
                i = t.offset().top - Helpers.$header.innerHeight() + 1;
            Helpers.toggleScroll(!0), Helpers.$window.trigger({
                type: "scrollTo",
                y: i
            }), this.trigger(this.evt.NAV_CLICK)
        },
        onScrollChange: function() {
            var e = this;
            this.$screen.on("midInViewport", function(t) {
                return Helpers.mqMobile.matches ? !1 : t.currentTarget !== t.target ? !1 : (e.currentScreen = this.id, void e.navDotIn(e.currentScreen))
            }).on("midOutViewport", function(t) {
                return Helpers.mqMobile.matches ? !1 : t.currentTarget !== t.target ? !1 : void e.navDotOut(this.id)
            }), Helpers.bindViewport(this.$screen, this.ns)
        },
        init: function() {
            var t = this,
                i = $(".js-nav-circle", this.$pageNav),
                n = $(".js-nav-dot", this.$pageNav),
                s = new TimelineLite,
                o = .4;
            TweenLite.set(i, {
                drawSVG: 0
            }), TweenLite.set(n, {
                opacity: 0
            }), this.$pageNav.addClass("h-dh"), this.globalDispatcher.once(e.events.LOADER_IS_HIDDEN, function() {
                s.staggerTo(n, .6, {
                    opacity: 1,
                    delay: 2 * o
                }, o), setTimeout(function() {
                    t.$pageNavLi.hasClass("is-active") && (t.currentScreen = t.$pageNavLi.filter(".is-active").data("target"), t.navDotIn(t.currentScreen, !0))
                }, 1e3 * (2 * o + .2)), setTimeout(function() {
                    t.$pageNav.removeClass("h-dh")
                }, o * (n.length - 1) * 1e3)
            }), this.onScrollChange()
        },
        generateNav: function() {
            var e = [];
            this.$screen = $(".js-nav-screen", this.$el), this.$screen.each(function() {
                e.push({
                    id: this.id,
                    name: this.dataset.name
                })
            }), this.$pageNav.html(tmpl("pageNavTmpl", {
                d: e
            })), this.doubleColor && this.doubleColorNavInit(), this.$pageNavLi = $("li", this.$pageNav), this.init()
        },
        initialize: function(e) {
            return Helpers.mqMobile.matches ? !1 : (this.setElement(e.el), this.$pageNav = $("#pageNav"), this.$pageNav.length ? (this.doubleColor = e.doubleColor, void this.generateNav(e.el)) : !1)
        }
    })
}(G);
! function(e) {
    "use strict";
    e.views.CarouselView = e.views.BaseView.extend({
        events: function() {
            var e = {};
            return e[Helpers.getEvent("click") + " .js-carousel-nav"] = "carouselNavClick", e[Helpers.getEvent("click") + " .js-carousel-dot"] = "carouselDotClick", e
        },
        ns: ".CarouselView",
        carouselSlide: function(e) {
            if (!Helpers.mqPhone.matches) return !1;
            var t, i, n = this,
                s = this.$slides.filter(".is-active"),
                o = 100;
            return e.index === s.index() ? !1 : (TweenLite.set(n.$list, {
                x: "0%"
            }), this.$slides.css("order", 3), "next" === e.direction ? (t = s.next().length ? s.next() : this.$slides.first(), i = s.prev().length ? s.prev() : this.$slides.last(), i.css("order", 0), s.css("order", 1), t.css("order", 2), o = -100) : "prev" === e.direction ? (t = s.prev().length ? s.prev() : this.$slides.last(), s.css("order", 2), t.css("order", 1)) : (t = this.$slides.eq(e.index), e.index < s.index() ? (s.css("order", 2), t.css("order", 1)) : (i = s.prev().length ? s.prev() : this.$slides.last(), i.css("order", 0), s.css("order", 1), t.css("order", 2), o = -100)), TweenLite.to(this.$list, .6, {
                x: o + "%"
            }), this.$slides.removeClass("is-active"), t.addClass("is-active"), void(this.$dot.length && (this.$dot.removeClass("is-active"), this.$dot.eq(t.index()).addClass("is-active"))))
        },
        carouselNavClick: function(e) {
            this.carouselSlide({
                direction: e.target.dataset.dir
            })
        },
        carouselDotClick: function(e) {
            var t = $(e.currentTarget);
            this.carouselSlide({
                index: t.index()
            })
        },
        generateDots: function() {
            if (this.$dots = $(".js-carousel-dots", this.$el), !this.$dots.length) return !1;
            for (var e = "", t = 0, i = " is-active"; t < this.slidesCount;) e += '<li class="carousel-dot' + i + ' js-carousel-dot"></li>', t += 1, t > 0 && (i = "");
            this.$dots.html(e), this.$dot = $(".js-carousel-dot", this.$dots)
        },
        destroy: function() {
            this.$list.off(".carousel"), this.undelegateEvents(), this.$el.removeData().unbind(), this.remove(), Backbone.View.prototype.remove.call(this)
        },
        initialize: function(t) {
            this.setElement(t.el);
            var i = this;
            this.$list = $(".js-carousel-list", this.$el), this.$slides = $(".js-carousel-slide", this.$list), this.slidesCount = this.$slides.length, this.generateDots(), this.$list.off(".carousel").on("swiperight.carousel swipeleft.carousel", function(e) {
                i.carouselSlide({
                    direction: "swiperight" === e.type ? "prev" : "next"
                })
            }), t.view.once(e.events.DESTROY_VIEW, function() {
                i.destroy()
            })
        }
    })
}(G);