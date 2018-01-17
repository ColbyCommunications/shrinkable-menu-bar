!(function(e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var i = (n[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
  }
  var n = {};
  (t.m = e),
    (t.c = n),
    (t.d = function(e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r });
    }),
    (t.n = function(e) {
      var n =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return t.d(n, "a", n), n;
    }),
    (t.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (t.p = ""),
    t((t.s = 0));
})([
  function(e, t, n) {
    n(1), (e.exports = n(4));
  },
  function(e, t, n) {
    "use strict";
    var r = n(2),
      i = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(r);
    window.addEventListener("load", function() {
      var e = new i.default();
      e.shouldStart() && e.start();
    });
  },
  function(e, t, n) {
    "use strict";
    function r(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (function() {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function(t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      s = n(3),
      o = (function() {
        function e() {
          var t = this,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { selector: ".shrinkable", classNamespace: "shrinkable" };
          i(this, e),
            (this.onResize = this.onResize.bind(this)),
            (this.onHamburgerClick = this.onHamburgerClick.bind(this)),
            (this.shouldStart = function() {
              return t.container && t.list && t.classNamespace;
            }),
            (this.getButtonsWidth = function() {
              return (
                (t.hamburger ? t.hamburger.clientWidth : 0) +
                [].concat(r(t.list.children)).reduce(function(e, t) {
                  return e + t.clientWidth;
                }, 0)
              );
            }),
            (this.getListLastLink = function() {
              return []
                .concat(r(t.list.children))
                .filter(function(e) {
                  return "LI" === e.tagName;
                })
                .pop();
            }),
            (this.container = document.querySelector(n.selector)),
            (this.list = document.querySelector(n.selector + " > ul")),
            (this.windowSize = 0),
            (this.classNamespace = n.classNamespace),
            (this.hamburger = null),
            (this.extraMenu = null);
        }
        return (
          a(e, [
            {
              key: "start",
              value: function() {
                this.onShrink(), window.addEventListener("resize", this.onResize);
              }
            },
            {
              key: "addHamburger",
              value: function() {
                (this.hamburger = document.createElement("BUTTON")),
                  (this.hamburger.innerHTML = s.hamburger),
                  this.hamburger.classList.add(this.classNamespace + "__btn"),
                  this.hamburger.classList.add(this.classNamespace + "__theme"),
                  this.hamburger.classList.add(this.classNamespace + "__hamburger"),
                  this.container.appendChild(this.hamburger),
                  this.hamburger.addEventListener("click", this.onHamburgerClick);
              }
            },
            {
              key: "addExtraMenu",
              value: function() {
                (this.extraMenu = document.createElement("UL")),
                  this.extraMenu.classList.add(this.classNamespace + "__submenu"),
                  this.container.appendChild(this.extraMenu);
              }
            },
            {
              key: "initExtraMenu",
              value: function() {
                this.addHamburger(), this.addExtraMenu(), this.onShrink();
              }
            },
            {
              key: "killExtraMenu",
              value: function() {
                this.hamburger.removeEventListener("click", this.onHamburgerClick),
                  this.container.removeChild(this.hamburger),
                  this.container.removeChild(this.extraMenu),
                  (this.hamburger = null),
                  (this.extraMenu = null);
              }
            },
            {
              key: "onHamburgerClick",
              value: function() {
                this.hamburger.classList.contains(this.classNamespace + "__active")
                  ? (this.hamburger.classList.remove(this.classNamespace + "__active"),
                    this.extraMenu.classList.remove(this.classNamespace + "__active"))
                  : (this.hamburger.classList.add(this.classNamespace + "__active"),
                    this.extraMenu.classList.add(this.classNamespace + "__active"));
              }
            },
            {
              key: "onResize",
              value: function() {
                window.innerWidth > this.windowSize
                  ? this.onGrowth()
                  : window.innerWidth < this.windowSize && this.onShrink();
              }
            },
            {
              key: "onShrink",
              value: function() {
                for (this.windowSize = window.innerWidth; this.getButtonsWidth() > this.windowSize; ) {
                  if (!this.hamburger) return void this.initExtraMenu();
                  var e = this.list.removeChild(this.getListLastLink());
                  this.extraMenu.prepend(e);
                }
              }
            },
            {
              key: "onGrowth",
              value: function() {
                for (
                  this.windowSize = window.innerWidth;
                  this.extraMenu &&
                  this.extraMenu.children.length &&
                  this.getButtonsWidth() + this.extraMenu.children[0].clientWidth < this.windowSize;

                ) {
                  var e = this.extraMenu.removeChild(this.extraMenu.children[0]);
                  if ((this.list.append(e), !this.extraMenu.children.length)) return void this.killExtraMenu();
                }
              }
            }
          ]),
          e
        );
      })();
    t.default = o;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.hamburger =
      '<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 418.26 291.34" class="menu-icon-svg">\n<title>Menu</title>\n<rect fill="currentColor" width="418.26" height="26.75"/>\n<rect fill="currentColor" y="132.29" width="418.26" height="26.75"/>\n<rect fill="currentColor" y="264.59" width="418.26" height="26.75"/>\n</svg>';
  },
  function(e, t, n) {
    var r = n(5);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var i = { hmr: !0 };
    i.transform = void 0;
    n(7)(r, i);
    r.locals && (e.exports = r.locals);
  },
  function(e, t, n) {
    (t = e.exports = n(6)(!1)),
      t.push([
        e.i,
        ".shrinkable__theme{background-color:#214280}.btn.shrinkable__theme,.btn.shrinkable__theme:visited,a.shrinkable__theme,a.shrinkable__theme:visited,button.shrinkable__theme,button.shrinkable__theme:visited{color:#fff;transition:all .2s;padding:.25rem .75rem;text-decoration:none;border-width:0}.btn.shrinkable__theme:focus,a.shrinkable__theme:focus,button.shrinkable__theme:focus{position:relative;z-index:1}.btn.shrinkable__theme:hover,.btn.shrinkable__theme:visited:hover,a.shrinkable__theme:hover,a.shrinkable__theme:visited:hover,button.shrinkable__theme:hover,button.shrinkable__theme:visited:hover{color:hsla(0,0%,100%,.9);background-color:#1e3b73}.shrinkable{position:relative;display:flex;justify-content:center;border-top-style:solid;border-top-width:1px;border-color:#37558d}@media print{.shrinkable{display:none}}.shrinkable__btn{padding:.25rem .75rem;text-decoration:none;color:#fff}.shrinkable>.shrinkable__btn svg{width:1.25rem;height:1.25rem}.shrinkable__menu{position:relative;z-index:1;display:flex;margin-top:0;margin-bottom:0;padding-left:0;justify-content:center;background-color:#214280}.shrinkable__menu>.shrinkable__item{display:flex;flex:0 1 150px;align-items:stretch;justify-content:center;line-height:1.3}.shrinkable__item>.shrinkable__btn{display:block;width:100%;padding:.666rem 1.125rem;text-align:center;text-transform:uppercase;white-space:nowrap}.shrinkable__menu>.shrinkable__item:last-of-type>.shrinkable__btn{border-right-width:1px}.shrinkable__menu .shrinkable__item.shrinkable__item-has-children>a.shrinkable__btn{border-right-width:0}.shrinkable__hamburger{border-left-width:0}.shrinkable__submenu-toggler{display:block;padding:.625rem .25rem;border-width:0}.shrinkable__submenu-toggler svg{width:1.125rem;height:1.125rem;color:#fff;transition:transform .2s}.active.submenu-toggler svg{transform:rotate(180deg)}.shrinkable__submenu{position:absolute;top:2.875rem;right:.375rem;pointer-events:none;visibility:hidden;list-style:none;padding-left:0;margin:0;display:flex;flex-direction:column;align-items:stretch;font-size:79.4%}.shrinkable__submenu.shrinkable__active{z-index:2;pointer-events:all;visibility:visible}.shrinkable__submenu .shrinkable__btn{display:block}.shrinkable__submenu .submenu-toggler{display:none}",
        ""
      ]);
  },
  function(e, t, n) {
    "use strict";
    function r(e, t) {
      var n = e[1] || "",
        r = e[3];
      if (!r) return n;
      if (t && "function" == typeof btoa) {
        var a = i(r);
        return [n]
          .concat(
            r.sources.map(function(e) {
              return "/*# sourceURL=" + r.sourceRoot + e + " */";
            })
          )
          .concat([a])
          .join("\n");
      }
      return [n].join("\n");
    }
    function i(e) {
      return (
        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
        btoa(unescape(encodeURIComponent(JSON.stringify(e)))) +
        " */"
      );
    }
    e.exports = function(e) {
      var t = [];
      return (
        (t.toString = function() {
          return this.map(function(t) {
            var n = r(t, e);
            return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
          }).join("");
        }),
        (t.i = function(e, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var r = {}, i = 0; i < this.length; i++) {
            var a = this[i][0];
            "number" == typeof a && (r[a] = !0);
          }
          for (i = 0; i < e.length; i++) {
            var s = e[i];
            ("number" == typeof s[0] && r[s[0]]) ||
              (n && !s[2] ? (s[2] = n) : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s));
          }
        }),
        t
      );
    };
  },
  function(e, t, n) {
    function r(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = b[r.id];
        if (i) {
          i.refs++;
          for (var a = 0; a < i.parts.length; a++) i.parts[a](r.parts[a]);
          for (; a < r.parts.length; a++) i.parts.push(c(r.parts[a], t));
        } else {
          for (var s = [], a = 0; a < r.parts.length; a++) s.push(c(r.parts[a], t));
          b[r.id] = { id: r.id, refs: 1, parts: s };
        }
      }
    }
    function i(e, t) {
      for (var n = [], r = {}, i = 0; i < e.length; i++) {
        var a = e[i],
          s = t.base ? a[0] + t.base : a[0],
          o = a[1],
          u = a[2],
          l = a[3],
          c = { css: o, media: u, sourceMap: l };
        r[s] ? r[s].parts.push(c) : n.push((r[s] = { id: s, parts: [c] }));
      }
      return n;
    }
    function a(e, t) {
      var n = p(e.insertInto);
      if (!n)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var r = _[_.length - 1];
      if ("top" === e.insertAt)
        r ? (r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t)) : n.insertBefore(t, n.firstChild),
          _.push(t);
      else if ("bottom" === e.insertAt) n.appendChild(t);
      else {
        if ("object" != typeof e.insertAt || !e.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        var i = p(e.insertInto + " " + e.insertAt.before);
        n.insertBefore(t, i);
      }
    }
    function s(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
      var t = _.indexOf(e);
      t >= 0 && _.splice(t, 1);
    }
    function o(e) {
      var t = document.createElement("style");
      return (e.attrs.type = "text/css"), l(t, e.attrs), a(e, t), t;
    }
    function u(e) {
      var t = document.createElement("link");
      return (e.attrs.type = "text/css"), (e.attrs.rel = "stylesheet"), l(t, e.attrs), a(e, t), t;
    }
    function l(e, t) {
      Object.keys(t).forEach(function(n) {
        e.setAttribute(n, t[n]);
      });
    }
    function c(e, t) {
      var n, r, i, a;
      if (t.transform && e.css) {
        if (!(a = t.transform(e.css))) return function() {};
        e.css = a;
      }
      if (t.singleton) {
        var l = g++;
        (n = v || (v = o(t))), (r = h.bind(null, n, l, !1)), (i = h.bind(null, n, l, !0));
      } else
        e.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((n = u(t)),
            (r = f.bind(null, n, t)),
            (i = function() {
              s(n), n.href && URL.revokeObjectURL(n.href);
            }))
          : ((n = o(t)),
            (r = d.bind(null, n)),
            (i = function() {
              s(n);
            }));
      return (
        r(e),
        function(t) {
          if (t) {
            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
            r((e = t));
          } else i();
        }
      );
    }
    function h(e, t, n, r) {
      var i = n ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = y(t, i);
      else {
        var a = document.createTextNode(i),
          s = e.childNodes;
        s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(a, s[t]) : e.appendChild(a);
      }
    }
    function d(e, t) {
      var n = t.css,
        r = t.media;
      if ((r && e.setAttribute("media", r), e.styleSheet)) e.styleSheet.cssText = n;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(n));
      }
    }
    function f(e, t, n) {
      var r = n.css,
        i = n.sourceMap,
        a = void 0 === t.convertToAbsoluteUrls && i;
      (t.convertToAbsoluteUrls || a) && (r = k(r)),
        i &&
          (r +=
            "\n/*# sourceMappingURL=data:application/json;base64," +
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))) +
            " */");
      var s = new Blob([r], { type: "text/css" }),
        o = e.href;
      (e.href = URL.createObjectURL(s)), o && URL.revokeObjectURL(o);
    }
    var b = {},
      m = (function(e) {
        var t;
        return function() {
          return void 0 === t && (t = e.apply(this, arguments)), t;
        };
      })(function() {
        return window && document && document.all && !window.atob;
      }),
      p = (function(e) {
        var t = {};
        return function(n) {
          if (void 0 === t[n]) {
            var r = e.call(this, n);
            if (r instanceof window.HTMLIFrameElement)
              try {
                r = r.contentDocument.head;
              } catch (e) {
                r = null;
              }
            t[n] = r;
          }
          return t[n];
        };
      })(function(e) {
        return document.querySelector(e);
      }),
      v = null,
      g = 0,
      _ = [],
      k = n(8);
    e.exports = function(e, t) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
        throw new Error("The style-loader cannot be used in a non-browser environment");
      (t = t || {}),
        (t.attrs = "object" == typeof t.attrs ? t.attrs : {}),
        t.singleton || "boolean" == typeof t.singleton || (t.singleton = m()),
        t.insertInto || (t.insertInto = "head"),
        t.insertAt || (t.insertAt = "bottom");
      var n = i(e, t);
      return (
        r(n, t),
        function(e) {
          for (var a = [], s = 0; s < n.length; s++) {
            var o = n[s],
              u = b[o.id];
            u.refs--, a.push(u);
          }
          if (e) {
            r(i(e, t), t);
          }
          for (var s = 0; s < a.length; s++) {
            var u = a[s];
            if (0 === u.refs) {
              for (var l = 0; l < u.parts.length; l++) u.parts[l]();
              delete b[u.id];
            }
          }
        }
      );
    };
    var y = (function() {
      var e = [];
      return function(t, n) {
        return (e[t] = n), e.filter(Boolean).join("\n");
      };
    })();
  },
  function(e, t, n) {
    "use strict";
    e.exports = function(e) {
      var t = "undefined" != typeof window && window.location;
      if (!t) throw new Error("fixUrls requires window.location");
      if (!e || "string" != typeof e) return e;
      var n = t.protocol + "//" + t.host,
        r = n + t.pathname.replace(/\/[^\/]*$/, "/");
      return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
        var i = t
          .trim()
          .replace(/^"(.*)"$/, function(e, t) {
            return t;
          })
          .replace(/^'(.*)'$/, function(e, t) {
            return t;
          });
        if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)) return e;
        var a;
        return (
          (a = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, "")),
          "url(" + JSON.stringify(a) + ")"
        );
      });
    };
  }
]);
