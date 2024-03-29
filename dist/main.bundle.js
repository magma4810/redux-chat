(() => {
  "use strict";
  var e,
    n,
    r = {
      208: (e, n, r) => {
        r.r(n), r.d(n, { default: () => c });
        var t = r(354),
          o = r.n(t),
          i = r(314),
          a = r.n(i)()(o());
        a.push([
          e.id,
          ".send-messages-container{\n    background-color: grey;\n    border: 2px solid rgb(99, 98, 98) ;\n    border-radius: 8px;\n    height: 30vh;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.input{\n    border: 2px solid rgb(99, 98, 98);\n    margin-left: 15px;\n    border-radius: 8px;\n    text-align: center;\n}\n\n.message{\n    height: 20vh;\n    width: 80vw;\n}\n\n.nickname{\n    height: 5vh;\n    width: 15vw;\n}\n\ninput::placeholder {\n    text-align:center;\n}\n\nbutton{\n    width: 60px;\n    height: 60px;\n    font-size: 100px;\n    padding: 0;\n    border: none;\n    font: inherit;\n    color: inherit;\n    background-color: wheat;\n    cursor: pointer;\n}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;IACI,sBAAsB;IACtB,kCAAkC;IAClC,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,sBAAsB;AAC1B;;AAEA;IACI,iCAAiC;IACjC,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,WAAW;IACX,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,UAAU;IACV,YAAY;IACZ,aAAa;IACb,cAAc;IACd,uBAAuB;IACvB,eAAe;AACnB",
            sourcesContent: [
              ".send-messages-container{\n    background-color: grey;\n    border: 2px solid rgb(99, 98, 98) ;\n    border-radius: 8px;\n    height: 30vh;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n}\n\n.input{\n    border: 2px solid rgb(99, 98, 98);\n    margin-left: 15px;\n    border-radius: 8px;\n    text-align: center;\n}\n\n.message{\n    height: 20vh;\n    width: 80vw;\n}\n\n.nickname{\n    height: 5vh;\n    width: 15vw;\n}\n\ninput::placeholder {\n    text-align:center;\n}\n\nbutton{\n    width: 60px;\n    height: 60px;\n    font-size: 100px;\n    padding: 0;\n    border: none;\n    font: inherit;\n    color: inherit;\n    background-color: wheat;\n    cursor: pointer;\n}",
            ],
            sourceRoot: "",
          },
        ]);
        const c = a;
      },
      314: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var r = "",
                  t = void 0 !== n[5];
                return (
                  n[4] && (r += "@supports (".concat(n[4], ") {")),
                  n[2] && (r += "@media ".concat(n[2], " {")),
                  t &&
                    (r += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {",
                    )),
                  (r += e(n)),
                  t && (r += "}"),
                  n[2] && (r += "}"),
                  n[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (n.i = function (e, r, t, o, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (t)
                for (var c = 0; c < this.length; c++) {
                  var d = this[c][0];
                  null != d && (a[d] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var u = [].concat(e[s]);
                (t && a[u[0]]) ||
                  (void 0 !== i &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = i)),
                  r &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = r))
                      : (u[2] = r)),
                  o &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = o))
                      : (u[4] = "".concat(o))),
                  n.push(u));
              }
            }),
            n
          );
        };
      },
      354: (e) => {
        e.exports = function (e) {
          var n = e[1],
            r = e[3];
          if (!r) return n;
          if ("function" == typeof btoa) {
            var t = btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  t,
                ),
              i = "/*# ".concat(o, " */");
            return [n].concat([i]).join("\n");
          }
          return [n].join("\n");
        };
      },
      511: (e, n, r) => {
        var t = r(72),
          o = r.n(t),
          i = r(825),
          a = r.n(i),
          c = r(659),
          d = r.n(c),
          s = r(56),
          u = r.n(s),
          l = r(540),
          p = r.n(l),
          f = r(113),
          h = r.n(f),
          v = r(208),
          m = {};
        (m.styleTagTransform = h()),
          (m.setAttributes = u()),
          (m.insert = d().bind(null, "head")),
          (m.domAPI = a()),
          (m.insertStyleElement = p());
        var A = o()(v.default, m);
        if (!v.default.locals || e.hot.invalidate) {
          var g = !v.default.locals,
            y = g ? v : v.default.locals;
          e.hot.accept(208, (n) => {
            (v = r(208)),
              (function (e, n, r) {
                if ((!e && n) || (e && !n)) return !1;
                var t;
                for (t in e)
                  if ((!r || "default" !== t) && e[t] !== n[t]) return !1;
                for (t in n) if (!((r && "default" === t) || e[t])) return !1;
                return !0;
              })(y, g ? v : v.default.locals, g)
                ? ((y = g ? v : v.default.locals), A(v.default))
                : e.hot.invalidate();
          });
        }
        e.hot.dispose(function () {
          A();
        }),
          v.default && v.default.locals && v.default.locals;
      },
      72: (e) => {
        var n = [];
        function r(e) {
          for (var r = -1, t = 0; t < n.length; t++)
            if (n[t].identifier === e) {
              r = t;
              break;
            }
          return r;
        }
        function t(e, t) {
          for (var i = {}, a = [], c = 0; c < e.length; c++) {
            var d = e[c],
              s = t.base ? d[0] + t.base : d[0],
              u = i[s] || 0,
              l = "".concat(s, " ").concat(u);
            i[s] = u + 1;
            var p = r(l),
              f = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              };
            if (-1 !== p) n[p].references++, n[p].updater(f);
            else {
              var h = o(f, t);
              (t.byIndex = c),
                n.splice(c, 0, { identifier: l, updater: h, references: 1 });
            }
            a.push(l);
          }
          return a;
        }
        function o(e, n) {
          var r = n.domAPI(n);
          return (
            r.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                r.update((e = n));
              } else r.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var i = t((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var c = r(i[a]);
              n[c].references--;
            }
            for (var d = t(e, o), s = 0; s < i.length; s++) {
              var u = r(i[s]);
              0 === n[u].references && (n[u].updater(), n.splice(u, 1));
            }
            i = d;
          };
        };
      },
      659: (e) => {
        var n = {};
        e.exports = function (e, r) {
          var t = (function (e) {
            if (void 0 === n[e]) {
              var r = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (e) {
                  r = null;
                }
              n[e] = r;
            }
            return n[e];
          })(e);
          if (!t)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          t.appendChild(r);
        };
      },
      540: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      56: (e, n, r) => {
        e.exports = function (e) {
          var n = r.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (r) {
              !(function (e, n, r) {
                var t = "";
                r.supports && (t += "@supports (".concat(r.supports, ") {")),
                  r.media && (t += "@media ".concat(r.media, " {"));
                var o = void 0 !== r.layer;
                o &&
                  (t += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                    " {",
                  )),
                  (t += r.css),
                  o && (t += "}"),
                  r.media && (t += "}"),
                  r.supports && (t += "}");
                var i = r.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (t +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  n.styleTagTransform(t, e, n.options);
              })(n, e, r);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      113: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
      809: (e, n, r) => {
        const t = "https://otus-js-chat-4ed79-default-rtdb.firebaseio.com",
          o = "messages.json";
        (window.sendMessage = async function (e) {
          return fetch(`${t}/${o}`, {
            method: "POST",
            body: JSON.stringify({ ...e, date: new Date() }),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }).then((e) => e.json());
        }),
          (window.getMessagesList = async function () {
            return fetch(`${t}/${o}`, {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
              .then((e) => e.json())
              .then((e) =>
                Object.values(e).map((e) => ({ ...e, date: new Date(e.date) })),
              );
          }),
          (window.observeWithXHR = function (e) {
            const n = new XMLHttpRequest();
            let r = 0;
            n.addEventListener("progress", () => {
              const t = n.response.substr(r);
              r = n.response.length;
              const o = t.match(/event: (.+)/)[1],
                i = JSON.parse(t.match(/data: (.+)/)[1]);
              "put" === o && e(i.data);
            }),
              n.open("POST", `${t}/${o}`, !0),
              n.setRequestHeader("Accept", "text/event-stream"),
              n.send();
          }),
          (window.observeWithEventSource = function (e) {
            new EventSource(`${t}/${o}`).addEventListener("put", (n) =>
              e(JSON.parse(n.data).data),
            );
          }),
          r(511);
        const i = document.querySelector(".send-messages-container");
        !(function (e) {
          const n = document.createElement("input");
          (n.placeholder = "Enter your nickname"),
            (n.className = "input nickname"),
            e.append(n);
        })(i),
          (function (e) {
            const n = document.createElement("div"),
              r = document.createElement("input");
            (r.placeholder = "Enter your message"),
              (r.className = "input message"),
              n.append(r);
            const t = document.createElement("button");
            (t.innerHTML = "&#x1F4E8"), n.append(t), e.append(n);
          })(i),
          window.scrollTo(0, document.body.scrollHeight);
      },
    },
    t = {};
  function o(e) {
    var n = t[e];
    if (void 0 !== n) {
      if (void 0 !== n.error) throw n.error;
      return n.exports;
    }
    var i = (t[e] = { id: e, exports: {} });
    try {
      var a = { id: e, module: i, factory: r[e], require: o };
      o.i.forEach(function (e) {
        e(a);
      }),
        (i = a.module),
        a.factory.call(i.exports, i, i.exports, a.require);
    } catch (e) {
      throw ((i.error = e), e);
    }
    return i.exports;
  }
  (o.m = r),
    (o.c = t),
    (o.i = []),
    (o.n = (e) => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return o.d(n, { a: n }), n;
    }),
    (o.d = (e, n) => {
      for (var r in n)
        o.o(n, r) &&
          !o.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (o.hu = (e) => e + "." + o.h() + ".hot-update.js"),
    (o.hmrF = () => "main." + o.h() + ".hot-update.json"),
    (o.h = () => "de3f99d09abe391bdee7"),
    (o.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (o.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (e = {}),
    (n = "redux-chat:"),
    (o.l = (r, t, i, a) => {
      if (e[r]) e[r].push(t);
      else {
        var c, d;
        if (void 0 !== i)
          for (
            var s = document.getElementsByTagName("script"), u = 0;
            u < s.length;
            u++
          ) {
            var l = s[u];
            if (
              l.getAttribute("src") == r ||
              l.getAttribute("data-webpack") == n + i
            ) {
              c = l;
              break;
            }
          }
        c ||
          ((d = !0),
          ((c = document.createElement("script")).charset = "utf-8"),
          (c.timeout = 120),
          o.nc && c.setAttribute("nonce", o.nc),
          c.setAttribute("data-webpack", n + i),
          (c.src = r)),
          (e[r] = [t]);
        var p = (n, t) => {
            (c.onerror = c.onload = null), clearTimeout(f);
            var o = e[r];
            if (
              (delete e[r],
              c.parentNode && c.parentNode.removeChild(c),
              o && o.forEach((e) => e(t)),
              n)
            )
              return n(t);
          },
          f = setTimeout(
            p.bind(null, void 0, { type: "timeout", target: c }),
            12e4,
          );
        (c.onerror = p.bind(null, c.onerror)),
          (c.onload = p.bind(null, c.onload)),
          d && document.head.appendChild(c);
      }
    }),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e,
        n,
        r,
        t = {},
        i = o.c,
        a = [],
        c = [],
        d = "idle",
        s = 0,
        u = [];
      function l(e) {
        d = e;
        for (var n = [], r = 0; r < c.length; r++) n[r] = c[r].call(null, e);
        return Promise.all(n).then(function () {});
      }
      function p() {
        0 == --s &&
          l("ready").then(function () {
            if (0 === s) {
              var e = u;
              u = [];
              for (var n = 0; n < e.length; n++) e[n]();
            }
          });
      }
      function f(e) {
        if ("idle" !== d)
          throw new Error("check() is only allowed in idle status");
        return l("check")
          .then(o.hmrM)
          .then(function (r) {
            return r
              ? l("prepare").then(function () {
                  var t = [];
                  return (
                    (n = []),
                    Promise.all(
                      Object.keys(o.hmrC).reduce(function (e, i) {
                        return o.hmrC[i](r.c, r.r, r.m, e, n, t), e;
                      }, []),
                    ).then(function () {
                      return (
                        (n = function () {
                          return e
                            ? v(e)
                            : l("ready").then(function () {
                                return t;
                              });
                        }),
                        0 === s
                          ? n()
                          : new Promise(function (e) {
                              u.push(function () {
                                e(n());
                              });
                            })
                      );
                      var n;
                    })
                  );
                })
              : l(m() ? "ready" : "idle").then(function () {
                  return null;
                });
          });
      }
      function h(e) {
        return "ready" !== d
          ? Promise.resolve().then(function () {
              throw new Error(
                "apply() is only allowed in ready status (state: " + d + ")",
              );
            })
          : v(e);
      }
      function v(e) {
        (e = e || {}), m();
        var t = n.map(function (n) {
          return n(e);
        });
        n = void 0;
        var o = t
          .map(function (e) {
            return e.error;
          })
          .filter(Boolean);
        if (o.length > 0)
          return l("abort").then(function () {
            throw o[0];
          });
        var i = l("dispose");
        t.forEach(function (e) {
          e.dispose && e.dispose();
        });
        var a,
          c = l("apply"),
          d = function (e) {
            a || (a = e);
          },
          s = [];
        return (
          t.forEach(function (e) {
            if (e.apply) {
              var n = e.apply(d);
              if (n) for (var r = 0; r < n.length; r++) s.push(n[r]);
            }
          }),
          Promise.all([i, c]).then(function () {
            return a
              ? l("fail").then(function () {
                  throw a;
                })
              : r
                ? v(e).then(function (e) {
                    return (
                      s.forEach(function (n) {
                        e.indexOf(n) < 0 && e.push(n);
                      }),
                      e
                    );
                  })
                : l("idle").then(function () {
                    return s;
                  });
          })
        );
      }
      function m() {
        if (r)
          return (
            n || (n = []),
            Object.keys(o.hmrI).forEach(function (e) {
              r.forEach(function (r) {
                o.hmrI[e](r, n);
              });
            }),
            (r = void 0),
            !0
          );
      }
      (o.hmrD = t),
        o.i.push(function (u) {
          var v,
            m,
            A,
            g,
            y = u.module,
            b = (function (n, r) {
              var t = i[r];
              if (!t) return n;
              var o = function (o) {
                  if (t.hot.active) {
                    if (i[o]) {
                      var c = i[o].parents;
                      -1 === c.indexOf(r) && c.push(r);
                    } else (a = [r]), (e = o);
                    -1 === t.children.indexOf(o) && t.children.push(o);
                  } else
                    console.warn(
                      "[HMR] unexpected require(" +
                        o +
                        ") from disposed module " +
                        r,
                    ),
                      (a = []);
                  return n(o);
                },
                c = function (e) {
                  return {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                      return n[e];
                    },
                    set: function (r) {
                      n[e] = r;
                    },
                  };
                };
              for (var u in n)
                Object.prototype.hasOwnProperty.call(n, u) &&
                  "e" !== u &&
                  Object.defineProperty(o, u, c(u));
              return (
                (o.e = function (e, r) {
                  return (function (e) {
                    switch (d) {
                      case "ready":
                        l("prepare");
                      case "prepare":
                        return s++, e.then(p, p), e;
                      default:
                        return e;
                    }
                  })(n.e(e, r));
                }),
                o
              );
            })(u.require, u.id);
          (y.hot =
            ((v = u.id),
            (m = y),
            (g = {
              _acceptedDependencies: {},
              _acceptedErrorHandlers: {},
              _declinedDependencies: {},
              _selfAccepted: !1,
              _selfDeclined: !1,
              _selfInvalidated: !1,
              _disposeHandlers: [],
              _main: (A = e !== v),
              _requireSelf: function () {
                (a = m.parents.slice()), (e = A ? void 0 : v), o(v);
              },
              active: !0,
              accept: function (e, n, r) {
                if (void 0 === e) g._selfAccepted = !0;
                else if ("function" == typeof e) g._selfAccepted = e;
                else if ("object" == typeof e && null !== e)
                  for (var t = 0; t < e.length; t++)
                    (g._acceptedDependencies[e[t]] = n || function () {}),
                      (g._acceptedErrorHandlers[e[t]] = r);
                else
                  (g._acceptedDependencies[e] = n || function () {}),
                    (g._acceptedErrorHandlers[e] = r);
              },
              decline: function (e) {
                if (void 0 === e) g._selfDeclined = !0;
                else if ("object" == typeof e && null !== e)
                  for (var n = 0; n < e.length; n++)
                    g._declinedDependencies[e[n]] = !0;
                else g._declinedDependencies[e] = !0;
              },
              dispose: function (e) {
                g._disposeHandlers.push(e);
              },
              addDisposeHandler: function (e) {
                g._disposeHandlers.push(e);
              },
              removeDisposeHandler: function (e) {
                var n = g._disposeHandlers.indexOf(e);
                n >= 0 && g._disposeHandlers.splice(n, 1);
              },
              invalidate: function () {
                switch (((this._selfInvalidated = !0), d)) {
                  case "idle":
                    (n = []),
                      Object.keys(o.hmrI).forEach(function (e) {
                        o.hmrI[e](v, n);
                      }),
                      l("ready");
                    break;
                  case "ready":
                    Object.keys(o.hmrI).forEach(function (e) {
                      o.hmrI[e](v, n);
                    });
                    break;
                  case "prepare":
                  case "check":
                  case "dispose":
                  case "apply":
                    (r = r || []).push(v);
                }
              },
              check: f,
              apply: h,
              status: function (e) {
                if (!e) return d;
                c.push(e);
              },
              addStatusHandler: function (e) {
                c.push(e);
              },
              removeStatusHandler: function (e) {
                var n = c.indexOf(e);
                n >= 0 && c.splice(n, 1);
              },
              data: t[v],
            }),
            (e = void 0),
            g)),
            (y.parents = a),
            (y.children = []),
            (a = []),
            (u.require = b);
        }),
        (o.hmrC = {}),
        (o.hmrI = {});
    })(),
    (() => {
      var e;
      o.g.importScripts && (e = o.g.location + "");
      var n = o.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var r = n.getElementsByTagName("script");
        if (r.length)
          for (var t = r.length - 1; t > -1 && (!e || !/^http(s?):/.test(e)); )
            e = r[t--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (o.p = e);
    })(),
    (() => {
      var e,
        n,
        r,
        t,
        i,
        a = (o.hmrS_jsonp = o.hmrS_jsonp || { 792: 0 }),
        c = {};
      function d(n, r) {
        return (
          (e = r),
          new Promise((e, r) => {
            c[n] = e;
            var t = o.p + o.hu(n),
              i = new Error();
            o.l(t, (e) => {
              if (c[n]) {
                c[n] = void 0;
                var t = e && ("load" === e.type ? "missing" : e.type),
                  o = e && e.target && e.target.src;
                (i.message =
                  "Loading hot update chunk " +
                  n +
                  " failed.\n(" +
                  t +
                  ": " +
                  o +
                  ")"),
                  (i.name = "ChunkLoadError"),
                  (i.type = t),
                  (i.request = o),
                  r(i);
              }
            });
          })
        );
      }
      function s(e) {
        function c(e) {
          for (
            var n = [e],
              r = {},
              t = n.map(function (e) {
                return { chain: [e], id: e };
              });
            t.length > 0;

          ) {
            var i = t.pop(),
              a = i.id,
              c = i.chain,
              s = o.c[a];
            if (s && (!s.hot._selfAccepted || s.hot._selfInvalidated)) {
              if (s.hot._selfDeclined)
                return { type: "self-declined", chain: c, moduleId: a };
              if (s.hot._main)
                return { type: "unaccepted", chain: c, moduleId: a };
              for (var u = 0; u < s.parents.length; u++) {
                var l = s.parents[u],
                  p = o.c[l];
                if (p) {
                  if (p.hot._declinedDependencies[a])
                    return {
                      type: "declined",
                      chain: c.concat([l]),
                      moduleId: a,
                      parentId: l,
                    };
                  -1 === n.indexOf(l) &&
                    (p.hot._acceptedDependencies[a]
                      ? (r[l] || (r[l] = []), d(r[l], [a]))
                      : (delete r[l],
                        n.push(l),
                        t.push({ chain: c.concat([l]), id: l })));
                }
              }
            }
          }
          return {
            type: "accepted",
            moduleId: e,
            outdatedModules: n,
            outdatedDependencies: r,
          };
        }
        function d(e, n) {
          for (var r = 0; r < n.length; r++) {
            var t = n[r];
            -1 === e.indexOf(t) && e.push(t);
          }
        }
        o.f && delete o.f.jsonpHmr, (n = void 0);
        var s = {},
          u = [],
          l = {},
          p = function (e) {
            console.warn(
              "[HMR] unexpected require(" + e.id + ") to disposed module",
            );
          };
        for (var f in r)
          if (o.o(r, f)) {
            var h,
              v = r[f],
              m = !1,
              A = !1,
              g = !1,
              y = "";
            switch (
              ((h = v ? c(f) : { type: "disposed", moduleId: f }).chain &&
                (y = "\nUpdate propagation: " + h.chain.join(" -> ")),
              h.type)
            ) {
              case "self-declined":
                e.onDeclined && e.onDeclined(h),
                  e.ignoreDeclined ||
                    (m = new Error(
                      "Aborted because of self decline: " + h.moduleId + y,
                    ));
                break;
              case "declined":
                e.onDeclined && e.onDeclined(h),
                  e.ignoreDeclined ||
                    (m = new Error(
                      "Aborted because of declined dependency: " +
                        h.moduleId +
                        " in " +
                        h.parentId +
                        y,
                    ));
                break;
              case "unaccepted":
                e.onUnaccepted && e.onUnaccepted(h),
                  e.ignoreUnaccepted ||
                    (m = new Error(
                      "Aborted because " + f + " is not accepted" + y,
                    ));
                break;
              case "accepted":
                e.onAccepted && e.onAccepted(h), (A = !0);
                break;
              case "disposed":
                e.onDisposed && e.onDisposed(h), (g = !0);
                break;
              default:
                throw new Error("Unexception type " + h.type);
            }
            if (m) return { error: m };
            if (A)
              for (f in ((l[f] = v),
              d(u, h.outdatedModules),
              h.outdatedDependencies))
                o.o(h.outdatedDependencies, f) &&
                  (s[f] || (s[f] = []), d(s[f], h.outdatedDependencies[f]));
            g && (d(u, [h.moduleId]), (l[f] = p));
          }
        r = void 0;
        for (var b, w = [], I = 0; I < u.length; I++) {
          var E = u[I],
            x = o.c[E];
          x &&
            (x.hot._selfAccepted || x.hot._main) &&
            l[E] !== p &&
            !x.hot._selfInvalidated &&
            w.push({
              module: E,
              require: x.hot._requireSelf,
              errorHandler: x.hot._selfAccepted,
            });
        }
        return {
          dispose: function () {
            var e;
            t.forEach(function (e) {
              delete a[e];
            }),
              (t = void 0);
            for (var n, r = u.slice(); r.length > 0; ) {
              var i = r.pop(),
                c = o.c[i];
              if (c) {
                var d = {},
                  l = c.hot._disposeHandlers;
                for (I = 0; I < l.length; I++) l[I].call(null, d);
                for (
                  o.hmrD[i] = d,
                    c.hot.active = !1,
                    delete o.c[i],
                    delete s[i],
                    I = 0;
                  I < c.children.length;
                  I++
                ) {
                  var p = o.c[c.children[I]];
                  p &&
                    (e = p.parents.indexOf(i)) >= 0 &&
                    p.parents.splice(e, 1);
                }
              }
            }
            for (var f in s)
              if (o.o(s, f) && (c = o.c[f]))
                for (b = s[f], I = 0; I < b.length; I++)
                  (n = b[I]),
                    (e = c.children.indexOf(n)) >= 0 && c.children.splice(e, 1);
          },
          apply: function (n) {
            for (var r in l) o.o(l, r) && (o.m[r] = l[r]);
            for (var t = 0; t < i.length; t++) i[t](o);
            for (var a in s)
              if (o.o(s, a)) {
                var c = o.c[a];
                if (c) {
                  b = s[a];
                  for (var d = [], p = [], f = [], h = 0; h < b.length; h++) {
                    var v = b[h],
                      m = c.hot._acceptedDependencies[v],
                      A = c.hot._acceptedErrorHandlers[v];
                    if (m) {
                      if (-1 !== d.indexOf(m)) continue;
                      d.push(m), p.push(A), f.push(v);
                    }
                  }
                  for (var g = 0; g < d.length; g++)
                    try {
                      d[g].call(null, b);
                    } catch (r) {
                      if ("function" == typeof p[g])
                        try {
                          p[g](r, { moduleId: a, dependencyId: f[g] });
                        } catch (t) {
                          e.onErrored &&
                            e.onErrored({
                              type: "accept-error-handler-errored",
                              moduleId: a,
                              dependencyId: f[g],
                              error: t,
                              originalError: r,
                            }),
                            e.ignoreErrored || (n(t), n(r));
                        }
                      else
                        e.onErrored &&
                          e.onErrored({
                            type: "accept-errored",
                            moduleId: a,
                            dependencyId: f[g],
                            error: r,
                          }),
                          e.ignoreErrored || n(r);
                    }
                }
              }
            for (var y = 0; y < w.length; y++) {
              var I = w[y],
                E = I.module;
              try {
                I.require(E);
              } catch (r) {
                if ("function" == typeof I.errorHandler)
                  try {
                    I.errorHandler(r, { moduleId: E, module: o.c[E] });
                  } catch (t) {
                    e.onErrored &&
                      e.onErrored({
                        type: "self-accept-error-handler-errored",
                        moduleId: E,
                        error: t,
                        originalError: r,
                      }),
                      e.ignoreErrored || (n(t), n(r));
                  }
                else
                  e.onErrored &&
                    e.onErrored({
                      type: "self-accept-errored",
                      moduleId: E,
                      error: r,
                    }),
                    e.ignoreErrored || n(r);
              }
            }
            return u;
          },
        };
      }
      (self.webpackHotUpdateredux_chat = (n, t, a) => {
        for (var d in t) o.o(t, d) && ((r[d] = t[d]), e && e.push(d));
        a && i.push(a), c[n] && (c[n](), (c[n] = void 0));
      }),
        (o.hmrI.jsonp = function (e, n) {
          r || ((r = {}), (i = []), (t = []), n.push(s)),
            o.o(r, e) || (r[e] = o.m[e]);
        }),
        (o.hmrC.jsonp = function (e, c, u, l, p, f) {
          p.push(s),
            (n = {}),
            (t = c),
            (r = u.reduce(function (e, n) {
              return (e[n] = !1), e;
            }, {})),
            (i = []),
            e.forEach(function (e) {
              o.o(a, e) && void 0 !== a[e]
                ? (l.push(d(e, f)), (n[e] = !0))
                : (n[e] = !1);
            }),
            o.f &&
              (o.f.jsonpHmr = function (e, r) {
                n && o.o(n, e) && !n[e] && (r.push(d(e)), (n[e] = !0));
              });
        }),
        (o.hmrM = () => {
          if ("undefined" == typeof fetch)
            throw new Error("No browser support: need fetch API");
          return fetch(o.p + o.hmrF()).then((e) => {
            if (404 !== e.status) {
              if (!e.ok)
                throw new Error(
                  "Failed to fetch update manifest " + e.statusText,
                );
              return e.json();
            }
          });
        });
    })(),
    (o.nc = void 0),
    o(809);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RVosR0FDckIsQyxLQ3pmSGtDLEVBQW9CNEMsUUFBS2hMLEVDR0NvSSxFQUFvQixJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkdXgtY2hhdC93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vcmVkdXgtY2hhdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVkdXgtY2hhdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVkdXgtY2hhdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JlZHV4LWNoYXQvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVkdXgtY2hhdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZWR1eC1jaGF0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZWR1eC1jaGF0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3JlZHV4LWNoYXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVkdXgtY2hhdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3JlZHV4LWNoYXQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZWR1eC1jaGF0Ly4vc3JjL21lc3NhZ2VzQXBpLmpzIiwid2VicGFjazovL3JlZHV4LWNoYXQvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVkdXgtY2hhdC8uL3NyYy9jb21wb25lbnRzL25pY2tuYW1lLmpzIiwid2VicGFjazovL3JlZHV4LWNoYXQvLi9zcmMvY29tcG9uZW50cy9tZXNzYWdlLmpzIiwid2VicGFjazovL3JlZHV4LWNoYXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVkdXgtY2hhdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZWR1eC1jaGF0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZWR1eC1jaGF0L3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCB1cGRhdGUgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vcmVkdXgtY2hhdC93ZWJwYWNrL3J1bnRpbWUvZ2V0IHVwZGF0ZSBtYW5pZmVzdCBmaWxlbmFtZSIsIndlYnBhY2s6Ly9yZWR1eC1jaGF0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9yZWR1eC1jaGF0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVkdXgtY2hhdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlZHV4LWNoYXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZWR1eC1jaGF0L3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL3JlZHV4LWNoYXQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVkdXgtY2hhdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZWR1eC1jaGF0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZWR1eC1jaGF0L3dlYnBhY2svc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJyZWR1eC1jaGF0OlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zZW5kLW1lc3NhZ2VzLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5OSwgOTgsIDk4KSA7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGhlaWdodDogMzB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5pbnB1dHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTksIDk4LCA5OCk7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1lc3NhZ2V7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIHdpZHRoOiA4MHZ3O1xufVxuXG4ubmlja25hbWV7XG4gICAgaGVpZ2h0OiA1dmg7XG4gICAgd2lkdGg6IDE1dnc7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbmJ1dHRvbntcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2VuZC1tZXNzYWdlcy1jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5OSwgOTgsIDk4KSA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgaGVpZ2h0OiAzMHZoO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmlucHV0e1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTksIDk4LCA5OCk7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1lc3NhZ2V7XFxuICAgIGhlaWdodDogMjB2aDtcXG4gICAgd2lkdGg6IDgwdnc7XFxufVxcblxcbi5uaWNrbmFtZXtcXG4gICAgaGVpZ2h0OiA1dmg7XFxuICAgIHdpZHRoOiAxNXZ3O1xcbn1cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBmb250LXNpemU6IDEwMHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbmZpZyA9IHtcbiAgICBmaXJlYmFzZUJhc2VVcmw6IFwiaHR0cHM6Ly9vdHVzLWpzLWNoYXQtNGVkNzktZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXG4gICAgZmlyZWJhc2VDb2xsZWN0aW9uOiBcIm1lc3NhZ2VzLmpzb25cIlxuICB9O1xuICBcbiAgLy8gLyoqXG4gIC8vICAqIEByZXR1cm4ge09iamVjdFtdfSBtZXNzYWdlc0xpc3RcbiAgLy8gICovXG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZXNzYWdlc0xpc3QoKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke2NvbmZpZy5maXJlYmFzZUJhc2VVcmx9LyR7Y29uZmlnLmZpcmViYXNlQ29sbGVjdGlvbn1gLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+XG4gICAgICAgIE9iamVjdC52YWx1ZXMoZGF0YSkubWFwKChlbCkgPT4gKHtcbiAgICAgICAgICAuLi5lbCxcbiAgICAgICAgICBkYXRlOiBuZXcgRGF0ZShlbC5kYXRlKVxuICAgICAgICB9KSlcbiAgICAgICk7XG4gIH1cbiAgXG4gIC8vIC8qKlxuICAvLyAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAvLyAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5uaWNrbmFtZVxuICAvLyAgKiBAcGFyYW0ge3N0cmluZ30gZGF0YS5tZXNzYWdlXG4gIC8vICAqIEByZXR1cm5zIHtib29sZWFufVxuICAvLyAgKi9cbiAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKGRhdGEpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7Y29uZmlnLmZpcmViYXNlQmFzZVVybH0vJHtjb25maWcuZmlyZWJhc2VDb2xsZWN0aW9ufWAsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKClcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgfVxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xuICB9XG4gIFxuICBmdW5jdGlvbiBvYnNlcnZlV2l0aFhIUihjYikge1xuICAgIC8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3JlZmVyZW5jZS9yZXN0L2RhdGFiYXNlI3NlY3Rpb24tc3RyZWFtaW5nXG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgbGV0IGxhc3RSZXNwb25zZUxlbmd0aCA9IDA7XG4gIFxuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJ4aHIgYm9keVwiLCB4aHIucmVzcG9uc2UpO1xuICAgICAgY29uc3QgYm9keSA9IHhoci5yZXNwb25zZS5zdWJzdHIobGFzdFJlc3BvbnNlTGVuZ3RoKTtcbiAgICAgIGxhc3RSZXNwb25zZUxlbmd0aCA9IHhoci5yZXNwb25zZS5sZW5ndGg7XG4gIFxuICAgICAgY29uc3QgZXZlbnRUeXBlID0gYm9keS5tYXRjaCgvZXZlbnQ6ICguKykvKVsxXTtcbiAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGJvZHkubWF0Y2goL2RhdGE6ICguKykvKVsxXSk7XG4gIFxuICAgICAgaWYgKGV2ZW50VHlwZSA9PT0gXCJwdXRcIikge1xuICAgICAgICBjYihkYXRhLmRhdGEpO1xuICAgICAgfVxuICAgIH0pO1xuICBcbiAgICB4aHIub3BlbihcbiAgICAgIFwiUE9TVFwiLFxuICAgICAgYCR7Y29uZmlnLmZpcmViYXNlQmFzZVVybH0vJHtjb25maWcuZmlyZWJhc2VDb2xsZWN0aW9ufWAsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLCBcInRleHQvZXZlbnQtc3RyZWFtXCIpO1xuICBcbiAgICB4aHIuc2VuZCgpO1xuICB9XG4gIFxuICBmdW5jdGlvbiBvYnNlcnZlV2l0aEV2ZW50U291cmNlKGNiKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50U291cmNlL0V2ZW50U291cmNlXG4gICAgY29uc3QgZXZ0U291cmNlID0gbmV3IEV2ZW50U291cmNlKFxuICAgICAgYCR7Y29uZmlnLmZpcmViYXNlQmFzZVVybH0vJHtjb25maWcuZmlyZWJhc2VDb2xsZWN0aW9ufWBcbiAgICApO1xuICBcbiAgICBldnRTb3VyY2UuYWRkRXZlbnRMaXN0ZW5lcihcInB1dFwiLCAoZXYpID0+IGNiKEpTT04ucGFyc2UoZXYuZGF0YSkuZGF0YSkpO1xuICB9XG4gIFxuICB3aW5kb3cuc2VuZE1lc3NhZ2UgPSBzZW5kTWVzc2FnZTtcbiAgd2luZG93LmdldE1lc3NhZ2VzTGlzdCA9IGdldE1lc3NhZ2VzTGlzdDtcbiAgd2luZG93Lm9ic2VydmVXaXRoWEhSID0gb2JzZXJ2ZVdpdGhYSFI7XG4gIHdpbmRvdy5vYnNlcnZlV2l0aEV2ZW50U291cmNlID0gb2JzZXJ2ZVdpdGhFdmVudFNvdXJjZTsiLCJpbXBvcnQgeyBnZXRNZXNzYWdlc0xpc3Qsc2VuZE1lc3NhZ2UgfSBmcm9tIFwiLi9tZXNzYWdlc0FwaS5qc1wiO1xuaW1wb3J0IHsgbWVzc2FnZXNMaXN0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9tZXNzYWdlc0xpc3QuanNcIjtcbmltcG9ydCB7IG1lc3NhZ2VJbnB1dCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbWVzc2FnZS5qc1wiO1xuaW1wb3J0IHsgbmlja25hbWVJbnB1dCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbmlja25hbWUuanNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG4vLyBjb25zdCBtZXNzYWdlc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lc3NhZ2VzXCIpO1xuLy8gY29uc3QgbWVzc2FnZXMgPSBhd2FpdCBnZXRNZXNzYWdlc0xpc3QoKTtcblxuY29uc3QgZGF0YSA9IHtcbiAgICBuaWNrbmFtZTogXCJmcmk1ZGF5MTIzXCIsXG4gICAgbWVzc2FnZTogXCJoZTQzbGxvXCJcbn1cbiAgICBcbi8vIHNlbmRNZXNzYWdlKGRhdGEpO1xuLy8gbWVzc2FnZXNMaXN0LnB1c2goZGF0YSk7XG5cbi8vIG1lc3NhZ2VzTGlzdChtZXNzYWdlcyxtZXNzYWdlc0VsZW1lbnQpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbmQtbWVzc2FnZXMtY29udGFpbmVyJyk7XG5uaWNrbmFtZUlucHV0KGNvbnRhaW5lcik7XG5tZXNzYWdlSW5wdXQoY29udGFpbmVyKTtcbndpbmRvdy5zY3JvbGxUbygwLCBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCk7XG4iLCJleHBvcnQgZnVuY3Rpb24gbmlja25hbWVJbnB1dChjb250YWluZXIpe1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIG5pY2tuYW1lJztcbiAgICBpbnB1dC5jbGFzc05hbWUgPSAnaW5wdXQgbmlja25hbWUnO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoaW5wdXQpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBtZXNzYWdlSW5wdXQoY29udGFpbmVyKXtcbiAgICBjb25zdCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIHlvdXIgbWVzc2FnZSc7XG4gICAgaW5wdXQuY2xhc3NOYW1lID0gJ2lucHV0IG1lc3NhZ2UnO1xuICAgIG1lc3NhZ2VDb250YWluZXIuYXBwZW5kKGlucHV0KTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIiYjeDFGNEU4XCI7XG4gICAgbWVzc2FnZUNvbnRhaW5lci5hcHBlbmQoYnV0dG9uKTtcbiAgICBjb250YWluZXIuYXBwZW5kKG1lc3NhZ2VDb250YWluZXIpO1xuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdGlmIChjYWNoZWRNb2R1bGUuZXJyb3IgIT09IHVuZGVmaW5lZCkgdGhyb3cgY2FjaGVkTW9kdWxlLmVycm9yO1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHR0cnkge1xuXHRcdHZhciBleGVjT3B0aW9ucyA9IHsgaWQ6IG1vZHVsZUlkLCBtb2R1bGU6IG1vZHVsZSwgZmFjdG9yeTogX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0sIHJlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18gfTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7IGhhbmRsZXIoZXhlY09wdGlvbnMpOyB9KTtcblx0XHRtb2R1bGUgPSBleGVjT3B0aW9ucy5tb2R1bGU7XG5cdFx0ZXhlY09wdGlvbnMuZmFjdG9yeS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBleGVjT3B0aW9ucy5yZXF1aXJlKTtcblx0fSBjYXRjaChlKSB7XG5cdFx0bW9kdWxlLmVycm9yID0gZTtcblx0XHR0aHJvdyBlO1xuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgZXhlY3V0aW9uIGludGVyY2VwdG9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBbXTtcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmh1ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uaG1yRiA9ICgpID0+IChcIm1haW4uXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNvblwiKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkZTNmOTlkMDlhYmUzOTFiZGVlN1wiKSIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBjdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xudmFyIGluc3RhbGxlZE1vZHVsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmM7XG5cbi8vIG1vZHVsZSBhbmQgcmVxdWlyZSBjcmVhdGlvblxudmFyIGN1cnJlbnRDaGlsZE1vZHVsZTtcbnZhciBjdXJyZW50UGFyZW50cyA9IFtdO1xuXG4vLyBzdGF0dXNcbnZhciByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMgPSBbXTtcbnZhciBjdXJyZW50U3RhdHVzID0gXCJpZGxlXCI7XG5cbi8vIHdoaWxlIGRvd25sb2FkaW5nXG52YXIgYmxvY2tpbmdQcm9taXNlcyA9IDA7XG52YXIgYmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblxuLy8gVGhlIHVwZGF0ZSBpbmZvXG52YXIgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnM7XG52YXIgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckQgPSBjdXJyZW50TW9kdWxlRGF0YTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5pLnB1c2goZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0dmFyIG1vZHVsZSA9IG9wdGlvbnMubW9kdWxlO1xuXHR2YXIgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUob3B0aW9ucy5yZXF1aXJlLCBvcHRpb25zLmlkKTtcblx0bW9kdWxlLmhvdCA9IGNyZWF0ZU1vZHVsZUhvdE9iamVjdChvcHRpb25zLmlkLCBtb2R1bGUpO1xuXHRtb2R1bGUucGFyZW50cyA9IGN1cnJlbnRQYXJlbnRzO1xuXHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0b3B0aW9ucy5yZXF1aXJlID0gcmVxdWlyZTtcbn0pO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1ySSA9IHt9O1xuXG5mdW5jdGlvbiBjcmVhdGVSZXF1aXJlKHJlcXVpcmUsIG1vZHVsZUlkKSB7XG5cdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXHRpZiAoIW1lKSByZXR1cm4gcmVxdWlyZTtcblx0dmFyIGZuID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcblx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuXHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcblx0XHRcdFx0dmFyIHBhcmVudHMgPSBpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHM7XG5cdFx0XHRcdGlmIChwYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuXHRcdFx0XHRcdHBhcmVudHMucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcblx0XHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcblx0XHRcdH1cblx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuXHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcblx0XHRcdFx0XHRyZXF1ZXN0ICtcblx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuXHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHQpO1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcXVpcmUocmVxdWVzdCk7XG5cdH07XG5cdHZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiByZXF1aXJlW25hbWVdO1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJlcXVpcmVbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXHRmb3IgKHZhciBuYW1lIGluIHJlcXVpcmUpIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlcXVpcmUsIG5hbWUpICYmIG5hbWUgIT09IFwiZVwiKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcihuYW1lKSk7XG5cdFx0fVxuXHR9XG5cdGZuLmUgPSBmdW5jdGlvbiAoY2h1bmtJZCwgZmV0Y2hQcmlvcml0eSkge1xuXHRcdHJldHVybiB0cmFja0Jsb2NraW5nUHJvbWlzZShyZXF1aXJlLmUoY2h1bmtJZCwgZmV0Y2hQcmlvcml0eSkpO1xuXHR9O1xuXHRyZXR1cm4gZm47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZHVsZUhvdE9iamVjdChtb2R1bGVJZCwgbWUpIHtcblx0dmFyIF9tYWluID0gY3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZDtcblx0dmFyIGhvdCA9IHtcblx0XHQvLyBwcml2YXRlIHN0dWZmXG5cdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfYWNjZXB0ZWRFcnJvckhhbmRsZXJzOiB7fSxcblx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuXHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuXHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuXHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuXHRcdF9tYWluOiBfbWFpbixcblx0XHRfcmVxdWlyZVNlbGY6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gbWUucGFyZW50cy5zbGljZSgpO1xuXHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gX21haW4gPyB1bmRlZmluZWQgOiBtb2R1bGVJZDtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuXHRcdH0sXG5cblx0XHQvLyBNb2R1bGUgQVBJXG5cdFx0YWN0aXZlOiB0cnVlLFxuXHRcdGFjY2VwdDogZnVuY3Rpb24gKGRlcCwgY2FsbGJhY2ssIGVycm9ySGFuZGxlcikge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBbaV1dID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRlY2xpbmU6IGZ1bmN0aW9uIChkZXApIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG5cdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG5cdFx0fSxcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcblx0XHRcdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcblx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG5cdFx0XHRcdFx0KHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChcblx0XHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBpZ25vcmUgcmVxdWVzdHMgaW4gZXJyb3Igc3RhdGVzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIE1hbmFnZW1lbnQgQVBJXG5cdFx0Y2hlY2s6IGhvdENoZWNrLFxuXHRcdGFwcGx5OiBob3RBcHBseSxcblx0XHRzdGF0dXM6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRpZiAoIWwpIHJldHVybiBjdXJyZW50U3RhdHVzO1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0dmFyIGlkeCA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblxuXHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuXHRcdGRhdGE6IGN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuXHR9O1xuXHRjdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG5cdHJldHVybiBob3Q7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXR1cyhuZXdTdGF0dXMpIHtcblx0Y3VycmVudFN0YXR1cyA9IG5ld1N0YXR1cztcblx0dmFyIHJlc3VsdHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcblx0XHRyZXN1bHRzW2ldID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cykudGhlbihmdW5jdGlvbiAoKSB7fSk7XG59XG5cbmZ1bmN0aW9uIHVuYmxvY2soKSB7XG5cdGlmICgtLWJsb2NraW5nUHJvbWlzZXMgPT09IDApIHtcblx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChibG9ja2luZ1Byb21pc2VzID09PSAwKSB7XG5cdFx0XHRcdHZhciBsaXN0ID0gYmxvY2tpbmdQcm9taXNlc1dhaXRpbmc7XG5cdFx0XHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nID0gW107XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGxpc3RbaV0oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHRyYWNrQmxvY2tpbmdQcm9taXNlKHByb21pc2UpIHtcblx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRzZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuXHRcdC8qIGZhbGx0aHJvdWdoICovXG5cdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdGJsb2NraW5nUHJvbWlzZXMrKztcblx0XHRcdHByb21pc2UudGhlbih1bmJsb2NrLCB1bmJsb2NrKTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fVxufVxuXG5mdW5jdGlvbiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmbikge1xuXHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkgcmV0dXJuIGZuKCk7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nLnB1c2goZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVzb2x2ZShmbigpKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5T25VcGRhdGUpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG5cdH1cblx0cmV0dXJuIHNldFN0YXR1cyhcImNoZWNrXCIpXG5cdFx0LnRoZW4oX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNKVxuXHRcdC50aGVuKGZ1bmN0aW9uICh1cGRhdGUpIHtcblx0XHRcdGlmICghdXBkYXRlKSB7XG5cdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKS50aGVuKFxuXHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInByZXBhcmVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciB1cGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMpLnJlZHVjZShmdW5jdGlvbiAoXG5cdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdGtleVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJDW2tleV0oXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5jLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUucixcblx0XHRcdFx0XHRcdFx0dXBkYXRlLm0sXG5cdFx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlZE1vZHVsZXNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdFx0XHRcdFx0fSwgW10pXG5cdFx0XHRcdCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChhcHBseU9uVXBkYXRlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KGFwcGx5T25VcGRhdGUpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB1cGRhdGVkTW9kdWxlcztcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwicmVhZHlcIikge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXMgKHN0YXRlOiBcIiArXG5cdFx0XHRcdFx0Y3VycmVudFN0YXR1cyArXG5cdFx0XHRcdFx0XCIpXCJcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiYWJvcnRcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0dmFyIGRpc3Bvc2VQcm9taXNlID0gc2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHR2YXIgYXBwbHlQcm9taXNlID0gc2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cblx0dmFyIGVycm9yO1xuXHR2YXIgcmVwb3J0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG5cdH07XG5cblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuYXBwbHkpIHtcblx0XHRcdHZhciBtb2R1bGVzID0gcmVzdWx0LmFwcGx5KHJlcG9ydEVycm9yKTtcblx0XHRcdGlmIChtb2R1bGVzKSB7XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKG1vZHVsZXNbaV0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoW2Rpc3Bvc2VQcm9taXNlLCBhcHBseVByb21pc2VdKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuXHRcdGlmIChlcnJvcikge1xuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcImZhaWxcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJpZGxlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX2pzb25wID0gX193ZWJwYWNrX3JlcXVpcmVfXy5obXJTX2pzb25wIHx8IHtcblx0NzkyOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxudmFyIGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3Q7XG52YXIgd2FpdGluZ1VwZGF0ZVJlc29sdmVzID0ge307XG5mdW5jdGlvbiBsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSB7XG5cdGN1cnJlbnRVcGRhdGVkTW9kdWxlc0xpc3QgPSB1cGRhdGVkTW9kdWxlc0xpc3Q7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gcmVzb2x2ZTtcblx0XHQvLyBzdGFydCB1cGRhdGUgY2h1bmsgbG9hZGluZ1xuXHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmh1KGNodW5rSWQpO1xuXHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHRcdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkXG5cdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBob3QgdXBkYXRlIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkKTtcblx0fSk7XG59XG5cbnNlbGZbXCJ3ZWJwYWNrSG90VXBkYXRlcmVkdXhfY2hhdFwiXSA9IChjaHVua0lkLCBtb3JlTW9kdWxlcywgcnVudGltZSkgPT4ge1xuXHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0aWYoY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCkgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdC5wdXNoKG1vZHVsZUlkKTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgY3VycmVudFVwZGF0ZVJ1bnRpbWUucHVzaChydW50aW1lKTtcblx0aWYod2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKSB7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdKCk7XG5cdFx0d2FpdGluZ1VwZGF0ZVJlc29sdmVzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHR9XG59O1xuXG52YXIgY3VycmVudFVwZGF0ZUNodW5rcztcbnZhciBjdXJyZW50VXBkYXRlO1xudmFyIGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGVSdW50aW1lO1xuZnVuY3Rpb24gYXBwbHlIYW5kbGVyKG9wdGlvbnMpIHtcblx0aWYgKF9fd2VicGFja19yZXF1aXJlX18uZikgZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uZi5qc29ucEhtcjtcblx0Y3VycmVudFVwZGF0ZUNodW5rcyA9IHVuZGVmaW5lZDtcblx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzKHVwZGF0ZU1vZHVsZUlkKSB7XG5cdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG5cdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cblx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uIChpZCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2hhaW46IFtpZF0sXG5cdFx0XHRcdGlkOiBpZFxuXHRcdFx0fTtcblx0XHR9KTtcblx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuXHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuXHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuXHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCFtb2R1bGUgfHxcblx0XHRcdFx0KG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCAmJiAhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkKVxuXHRcdFx0KVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdGlmIChtb2R1bGUuaG90Ll9zZWxmRGVjbGluZWQpIHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0eXBlOiBcInNlbGYtZGVjbGluZWRcIixcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG5cdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAobW9kdWxlLmhvdC5fbWFpbikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwidW5hY2NlcHRlZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbW9kdWxlLnBhcmVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0dmFyIHBhcmVudElkID0gbW9kdWxlLnBhcmVudHNbaV07XG5cdFx0XHRcdHZhciBwYXJlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbcGFyZW50SWRdO1xuXHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG5cdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG5cdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcblx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG5cdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcblx0XHRcdFx0cXVldWUucHVzaCh7XG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcblx0XHRcdFx0XHRpZDogcGFyZW50SWRcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcblx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcblx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuXHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gYltpXTtcblx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcblx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuXHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG5cdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUobW9kdWxlKSB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyBtb2R1bGUuaWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcblx0XHQpO1xuXHR9O1xuXG5cdGZvciAodmFyIG1vZHVsZUlkIGluIGN1cnJlbnRVcGRhdGUpIHtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGN1cnJlbnRVcGRhdGUsIG1vZHVsZUlkKSkge1xuXHRcdFx0dmFyIG5ld01vZHVsZUZhY3RvcnkgPSBjdXJyZW50VXBkYXRlW21vZHVsZUlkXTtcblx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cblx0XHRcdHZhciByZXN1bHQ7XG5cdFx0XHRpZiAobmV3TW9kdWxlRmFjdG9yeSkge1xuXHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHMobW9kdWxlSWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0ID0ge1xuXHRcdFx0XHRcdHR5cGU6IFwiZGlzcG9zZWRcIixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG5cdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcblx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcblx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuXHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuXHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGVycm9yOiBhYm9ydEVycm9yXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9BcHBseSkge1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IG5ld01vZHVsZUZhY3Rvcnk7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG5cdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcblx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjdXJyZW50VXBkYXRlID0gdW5kZWZpbmVkO1xuXG5cdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cblx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuXHRmb3IgKHZhciBqID0gMDsgaiA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGorKykge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2pdO1xuXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0aWYgKFxuXHRcdFx0bW9kdWxlICYmXG5cdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkIHx8IG1vZHVsZS5ob3QuX21haW4pICYmXG5cdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG5cdFx0XHRhcHBsaWVkVXBkYXRlW291dGRhdGVkTW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcblx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG5cdFx0XHQhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkXG5cdFx0KSB7XG5cdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG5cdFx0XHRcdG1vZHVsZTogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0cmVxdWlyZTogbW9kdWxlLmhvdC5fcmVxdWlyZVNlbGYsXG5cdFx0XHRcdGVycm9ySGFuZGxlcjogbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG5cblx0cmV0dXJuIHtcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHR9KTtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR2YXIgaWR4O1xuXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG5cdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuXHRcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG5cdFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuXHRcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0ZGlzcG9zZUhhbmRsZXJzW2pdLmNhbGwobnVsbCwgZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJEW21vZHVsZUlkXSA9IGRhdGE7XG5cblx0XHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcblx0XHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcblx0XHRcdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcblx0XHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcblx0XHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuXHRcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuXHRcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cblx0XHRcdHZhciBkZXBlbmRlbmN5O1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXBwbHk6IGZ1bmN0aW9uIChyZXBvcnRFcnJvcikge1xuXHRcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG5cdFx0XHRmb3IgKHZhciB1cGRhdGVNb2R1bGVJZCBpbiBhcHBsaWVkVXBkYXRlKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oYXBwbGllZFVwZGF0ZSwgdXBkYXRlTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW3VwZGF0ZU1vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbdXBkYXRlTW9kdWxlSWRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHJ1biBuZXcgcnVudGltZSBtb2R1bGVzXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRVcGRhdGVSdW50aW1lLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lW2ldKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuXHRcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPVxuXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0XHR2YXIgZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzID0gW107XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbal07XG5cdFx0XHRcdFx0XHRcdHZhciBhY2NlcHRDYWxsYmFjayA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwZW5kZW5jeV07XG5cdFx0XHRcdFx0XHRcdHZhciBlcnJvckhhbmRsZXIgPVxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZS5ob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0aWYgKGFjY2VwdENhbGxiYWNrKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGFjY2VwdENhbGxiYWNrKSAhPT0gLTEpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGFjY2VwdENhbGxiYWNrKTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzLnB1c2goZXJyb3JIYW5kbGVyKTtcblx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MucHVzaChkZXBlbmRlbmN5KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBjYWxsYmFja3MubGVuZ3RoOyBrKyspIHtcblx0XHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0XHRjYWxsYmFja3Nba10uY2FsbChudWxsLCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG5cdFx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgZXJyb3JIYW5kbGVyc1trXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvckhhbmRsZXJzW2tdKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcImFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIG8gPSAwOyBvIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgbysrKSB7XG5cdFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW29dO1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpdGVtLnJlcXVpcmUobW9kdWxlSWQpO1xuXHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRpZiAodHlwZW9mIGl0ZW0uZXJyb3JIYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVyciwge1xuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRtb2R1bGU6IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3ItaGFuZGxlci1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcblx0XHRcdFx0XHRcdFx0XHRcdG9yaWdpbmFsRXJyb3I6IGVyclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMik7XG5cdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHR9XG5cdH07XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkuanNvbnAgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGFwcGx5SGFuZGxlcnMpIHtcblx0aWYgKCFjdXJyZW50VXBkYXRlKSB7XG5cdFx0Y3VycmVudFVwZGF0ZSA9IHt9O1xuXHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSBbXTtcblx0XHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0fVxuXHRpZiAoIV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF07XG5cdH1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMuanNvbnAgPSBmdW5jdGlvbiAoXG5cdGNodW5rSWRzLFxuXHRyZW1vdmVkQ2h1bmtzLFxuXHRyZW1vdmVkTW9kdWxlcyxcblx0cHJvbWlzZXMsXG5cdGFwcGx5SGFuZGxlcnMsXG5cdHVwZGF0ZWRNb2R1bGVzTGlzdFxuKSB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0ge307XG5cdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gcmVtb3ZlZENodW5rcztcblx0Y3VycmVudFVwZGF0ZSA9IHJlbW92ZWRNb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcblx0XHRvYmpba2V5XSA9IGZhbHNlO1xuXHRcdHJldHVybiBvYmo7XG5cdH0sIHt9KTtcblx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0Y2h1bmtJZHMuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdGlmIChcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdCkge1xuXHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IGZhbHNlO1xuXHRcdH1cblx0fSk7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXIgPSBmdW5jdGlvbiAoY2h1bmtJZCwgcHJvbWlzZXMpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rcyAmJlxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZUNodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0IWN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF1cblx0XHRcdCkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSk7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yTSA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBmZXRjaCA9PT0gXCJ1bmRlZmluZWRcIikgdGhyb3cgbmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0OiBuZWVkIGZldGNoIEFQSVwiKTtcblx0cmV0dXJuIGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaG1yRigpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSByZXR1cm47IC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcblx0XHRpZighcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1cGRhdGUgbWFuaWZlc3QgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KTtcbn07XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oODA5KTtcbiJdLCJuYW1lcyI6WyJpblByb2dyZXNzIiwiZGF0YVdlYnBhY2tQcmVmaXgiLCJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJfayIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJvcHRpb25zIiwic3R5bGVUYWdUcmFuc2Zvcm0iLCJzZXRBdHRyaWJ1dGVzIiwiaW5zZXJ0IiwiZG9tQVBJIiwiaW5zZXJ0U3R5bGVFbGVtZW50IiwidXBkYXRlIiwibG9jYWxzIiwiaG90IiwiaW52YWxpZGF0ZSIsImlzTmFtZWRFeHBvcnQiLCJvbGRMb2NhbHMiLCJhY2NlcHQiLCJhIiwiYiIsInAiLCJpc0VxdWFsTG9jYWxzIiwiZGlzcG9zZSIsInN0eWxlc0luRE9NIiwiZ2V0SW5kZXhCeUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwicmVzdWx0IiwibW9kdWxlc1RvRG9tIiwiaWRDb3VudE1hcCIsImlkZW50aWZpZXJzIiwiYmFzZSIsImNvdW50IiwiaW5kZXhCeUlkZW50aWZpZXIiLCJvYmoiLCJjc3MiLCJzb3VyY2VNYXAiLCJyZWZlcmVuY2VzIiwidXBkYXRlciIsImFkZEVsZW1lbnRTdHlsZSIsImJ5SW5kZXgiLCJzcGxpY2UiLCJhcGkiLCJuZXdPYmoiLCJyZW1vdmUiLCJsYXN0SWRlbnRpZmllcnMiLCJuZXdMaXN0IiwiaW5kZXgiLCJuZXdMYXN0SWRlbnRpZmllcnMiLCJfaSIsIl9pbmRleCIsIm1lbW8iLCJzdHlsZSIsInRhcmdldCIsInN0eWxlVGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiSFRNTElGcmFtZUVsZW1lbnQiLCJjb250ZW50RG9jdW1lbnQiLCJoZWFkIiwiZSIsImdldFRhcmdldCIsIkVycm9yIiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImF0dHJpYnV0ZXMiLCJzdHlsZUVsZW1lbnQiLCJub25jZSIsInNldEF0dHJpYnV0ZSIsImFwcGx5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlU3R5bGVFbGVtZW50Iiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJmaXJzdENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJjb25maWciLCJzZW5kTWVzc2FnZSIsImFzeW5jIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiZGF0ZSIsIkRhdGUiLCJoZWFkZXJzIiwiQWNjZXB0IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImdldE1lc3NhZ2VzTGlzdCIsIk9iamVjdCIsInZhbHVlcyIsImVsIiwib2JzZXJ2ZVdpdGhYSFIiLCJjYiIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwibGFzdFJlc3BvbnNlTGVuZ3RoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInN1YnN0ciIsImV2ZW50VHlwZSIsIm1hdGNoIiwicGFyc2UiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInNlbmQiLCJvYnNlcnZlV2l0aEV2ZW50U291cmNlIiwiRXZlbnRTb3VyY2UiLCJldiIsImNvbnRhaW5lciIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJhcHBlbmQiLCJuaWNrbmFtZUlucHV0IiwibWVzc2FnZUNvbnRhaW5lciIsImJ1dHRvbiIsImlubmVySFRNTCIsIm1lc3NhZ2VJbnB1dCIsInNjcm9sbFRvIiwic2Nyb2xsSGVpZ2h0IiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiZXJyb3IiLCJleGVjT3B0aW9ucyIsImZhY3RvcnkiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwicmVxdWlyZSIsImZvckVhY2giLCJoYW5kbGVyIiwiY2FsbCIsIm0iLCJjIiwibiIsImdldHRlciIsIl9fZXNNb2R1bGUiLCJkIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJodSIsImNodW5rSWQiLCJoIiwiaG1yRiIsImciLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJsIiwidXJsIiwiZG9uZSIsInNjcmlwdCIsIm5lZWRBdHRhY2giLCJzY3JpcHRzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzIiwiZ2V0QXR0cmlidXRlIiwiY2hhcnNldCIsInRpbWVvdXQiLCJuYyIsInNyYyIsIm9uU2NyaXB0Q29tcGxldGUiLCJwcmV2IiwiZXZlbnQiLCJvbmVycm9yIiwib25sb2FkIiwiY2xlYXJUaW1lb3V0IiwiZG9uZUZucyIsImZuIiwic2V0VGltZW91dCIsImJpbmQiLCJ0eXBlIiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJjdXJyZW50Q2hpbGRNb2R1bGUiLCJjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyIsInF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyIsImN1cnJlbnRNb2R1bGVEYXRhIiwiaW5zdGFsbGVkTW9kdWxlcyIsImN1cnJlbnRQYXJlbnRzIiwicmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzIiwiY3VycmVudFN0YXR1cyIsImJsb2NraW5nUHJvbWlzZXMiLCJibG9ja2luZ1Byb21pc2VzV2FpdGluZyIsInNldFN0YXR1cyIsIm5ld1N0YXR1cyIsInJlc3VsdHMiLCJQcm9taXNlIiwiYWxsIiwidW5ibG9jayIsImhvdENoZWNrIiwiYXBwbHlPblVwZGF0ZSIsImhtck0iLCJ1cGRhdGVkTW9kdWxlcyIsImtleXMiLCJobXJDIiwicmVkdWNlIiwicHJvbWlzZXMiLCJpbnRlcm5hbEFwcGx5IiwicmVzb2x2ZSIsImFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzIiwiaG90QXBwbHkiLCJlcnJvcnMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiZGlzcG9zZVByb21pc2UiLCJhcHBseVByb21pc2UiLCJyZXBvcnRFcnJvciIsImVyciIsIm91dGRhdGVkTW9kdWxlcyIsImluZGV4T2YiLCJobXJJIiwiaG1yRCIsIm1lIiwiX21haW4iLCJyZXF1ZXN0IiwiYWN0aXZlIiwicGFyZW50cyIsImNoaWxkcmVuIiwiY29uc29sZSIsIndhcm4iLCJjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IiLCJuYW1lIiwiY29uZmlndXJhYmxlIiwic2V0IiwiZmV0Y2hQcmlvcml0eSIsInByb21pc2UiLCJ0cmFja0Jsb2NraW5nUHJvbWlzZSIsImNyZWF0ZVJlcXVpcmUiLCJfYWNjZXB0ZWREZXBlbmRlbmNpZXMiLCJfYWNjZXB0ZWRFcnJvckhhbmRsZXJzIiwiX2RlY2xpbmVkRGVwZW5kZW5jaWVzIiwiX3NlbGZBY2NlcHRlZCIsIl9zZWxmRGVjbGluZWQiLCJfc2VsZkludmFsaWRhdGVkIiwiX2Rpc3Bvc2VIYW5kbGVycyIsIl9yZXF1aXJlU2VsZiIsInNsaWNlIiwiZGVwIiwiY2FsbGJhY2siLCJlcnJvckhhbmRsZXIiLCJkZWNsaW5lIiwiYWRkRGlzcG9zZUhhbmRsZXIiLCJyZW1vdmVEaXNwb3NlSGFuZGxlciIsImlkeCIsImNoZWNrIiwic3RhdHVzIiwiYWRkU3RhdHVzSGFuZGxlciIsInJlbW92ZVN0YXR1c0hhbmRsZXIiLCJzY3JpcHRVcmwiLCJpbXBvcnRTY3JpcHRzIiwibG9jYXRpb24iLCJjdXJyZW50U2NyaXB0IiwidGVzdCIsInJlcGxhY2UiLCJjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0IiwiY3VycmVudFVwZGF0ZUNodW5rcyIsImN1cnJlbnRVcGRhdGUiLCJjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcyIsImN1cnJlbnRVcGRhdGVSdW50aW1lIiwiaW5zdGFsbGVkQ2h1bmtzIiwiaG1yU19qc29ucCIsIndhaXRpbmdVcGRhdGVSZXNvbHZlcyIsImxvYWRVcGRhdGVDaHVuayIsInVwZGF0ZWRNb2R1bGVzTGlzdCIsInJlamVjdCIsImVycm9yVHlwZSIsInJlYWxTcmMiLCJtZXNzYWdlIiwiYXBwbHlIYW5kbGVyIiwiZ2V0QWZmZWN0ZWRNb2R1bGVFZmZlY3RzIiwidXBkYXRlTW9kdWxlSWQiLCJvdXRkYXRlZERlcGVuZGVuY2llcyIsInF1ZXVlIiwiY2hhaW4iLCJxdWV1ZUl0ZW0iLCJwb3AiLCJwYXJlbnRJZCIsInBhcmVudCIsImFkZEFsbFRvU2V0IiwiZiIsImpzb25wSG1yIiwiYXBwbGllZFVwZGF0ZSIsIndhcm5VbmV4cGVjdGVkUmVxdWlyZSIsIm5ld01vZHVsZUZhY3RvcnkiLCJhYm9ydEVycm9yIiwiZG9BcHBseSIsImRvRGlzcG9zZSIsImNoYWluSW5mbyIsIm9uRGVjbGluZWQiLCJpZ25vcmVEZWNsaW5lZCIsIm9uVW5hY2NlcHRlZCIsImlnbm9yZVVuYWNjZXB0ZWQiLCJvbkFjY2VwdGVkIiwib25EaXNwb3NlZCIsIm1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzIiwib3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzIiwiaiIsIm91dGRhdGVkTW9kdWxlSWQiLCJkZXBlbmRlbmN5IiwiZGlzcG9zZUhhbmRsZXJzIiwiY2hpbGQiLCJjYWxsYmFja3MiLCJlcnJvckhhbmRsZXJzIiwiZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzIiwiYWNjZXB0Q2FsbGJhY2siLCJkZXBlbmRlbmN5SWQiLCJlcnIyIiwib25FcnJvcmVkIiwib3JpZ2luYWxFcnJvciIsImlnbm9yZUVycm9yZWQiLCJzZWxmIiwibW9yZU1vZHVsZXMiLCJydW50aW1lIiwianNvbnAiLCJhcHBseUhhbmRsZXJzIiwiY2h1bmtJZHMiLCJyZW1vdmVkQ2h1bmtzIiwicmVtb3ZlZE1vZHVsZXMiLCJvayIsInN0YXR1c1RleHQiXSwic291cmNlUm9vdCI6IiJ9
