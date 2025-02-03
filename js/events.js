var saveAs =
  saveAs ||
  ('undefined' != typeof navigator &&
    navigator.msSaveOrOpenBlob &&
    navigator.msSaveOrOpenBlob.bind(navigator)) ||
  (function (e) {
    'use strict'
    if (
      'undefined' == typeof navigator ||
      !/MSIE [1-9]\./.test(navigator.userAgent)
    ) {
      var t = e.document,
        n = function () {
          return e.URL || e.webkitURL || e
        },
        o = t.createElementNS('http://www.w3.org/1999/xhtml', 'a'),
        r = !e.externalHost && 'download' in o,
        i = function (n) {
          var o = t.createEvent('MouseEvents')
          o.initMouseEvent(
            'click',
            !0,
            !1,
            e,
            0,
            0,
            0,
            0,
            0,
            !1,
            !1,
            !1,
            !1,
            0,
            null
          ),
            n.dispatchEvent(o)
        },
        a = e.webkitRequestFileSystem,
        u = e.requestFileSystem || a || e.mozRequestFileSystem,
        d = function (t) {
          ;(e.setImmediate || e.setTimeout)(function () {
            throw t
          }, 0)
        },
        c = 'application/octet-stream',
        f = 0,
        s = [],
        l = function () {
          for (var e = s.length; e--; ) {
            var t = s[e]
            'string' == typeof t ? n().revokeObjectURL(t) : t.remove()
          }
          s.length = 0
        },
        v = function (e, t, n) {
          t = [].concat(t)
          for (var o = t.length; o--; ) {
            var r = e['on' + t[o]]
            if ('function' == typeof r)
              try {
                r.call(e, n || e)
              } catch (i) {
                d(i)
              }
          }
        },
        w = function (t, d) {
          var l,
            w,
            p,
            y = this,
            m = t.type,
            g = !1,
            h = function () {
              var e = n().createObjectURL(t)
              return s.push(e), e
            },
            E = function () {
              v(y, 'writestart progress write writeend'.split(' '))
            },
            O = function () {
              ;(g || !l) && (l = h(t)),
                w ? (w.location.href = l) : window.open(l, '_blank'),
                (y.readyState = y.DONE),
                E()
            },
            S = function (e) {
              return function () {
                return y.readyState !== y.DONE
                  ? e.apply(this, arguments)
                  : void 0
              }
            },
            R = { create: !0, exclusive: !1 }
          return (
            (y.readyState = y.INIT),
            d || (d = 'download'),
            r
              ? ((l = h(t)),
                (o.href = l),
                (o.download = d),
                i(o),
                (y.readyState = y.DONE),
                void E())
              : (e.chrome &&
                  m &&
                  m !== c &&
                  ((p = t.slice || t.webkitSlice),
                  (t = p.call(t, 0, t.size, c)),
                  (g = !0)),
                a && 'download' !== d && (d += '.download'),
                (m === c || a) && (w = e),
                u
                  ? ((f += t.size),
                    void u(
                      e.TEMPORARY,
                      f,
                      S(function (e) {
                        e.root.getDirectory(
                          'saved',
                          R,
                          S(function (e) {
                            var n = function () {
                              e.getFile(
                                d,
                                R,
                                S(function (e) {
                                  e.createWriter(
                                    S(function (n) {
                                      ;(n.onwriteend = function (t) {
                                        ;(w.location.href = e.toURL()),
                                          s.push(e),
                                          (y.readyState = y.DONE),
                                          v(y, 'writeend', t)
                                      }),
                                        (n.onerror = function () {
                                          var e = n.error
                                          e.code !== e.ABORT_ERR && O()
                                        }),
                                        'writestart progress write abort'
                                          .split(' ')
                                          .forEach(function (e) {
                                            n['on' + e] = y['on' + e]
                                          }),
                                        n.write(t),
                                        (y.abort = function () {
                                          n.abort(), (y.readyState = y.DONE)
                                        }),
                                        (y.readyState = y.WRITING)
                                    }),
                                    O
                                  )
                                }),
                                O
                              )
                            }
                            e.getFile(
                              d,
                              { create: !1 },
                              S(function (e) {
                                e.remove(), n()
                              }),
                              S(function (e) {
                                e.code === e.NOT_FOUND_ERR ? n() : O()
                              })
                            )
                          }),
                          O
                        )
                      }),
                      O
                    ))
                  : void O())
          )
        },
        p = w.prototype,
        y = function (e, t) {
          return new w(e, t)
        }
      return (
        (p.abort = function () {
          var e = this
          ;(e.readyState = e.DONE), v(e, 'abort')
        }),
        (p.readyState = p.INIT = 0),
        (p.WRITING = 1),
        (p.DONE = 2),
        (p.error =
          p.onwritestart =
          p.onprogress =
          p.onwrite =
          p.onabort =
          p.onerror =
          p.onwriteend =
            null),
        e.addEventListener('unload', l, !1),
        (y.unload = function () {
          l(), e.removeEventListener('unload', l, !1)
        }),
        y
      )
    }
  })(
    ('undefined' != typeof self && self) ||
      ('undefined' != typeof window && window) ||
      this.content
  )
'undefined' != typeof module && null !== module
  ? (module.exports = saveAs)
  : 'undefined' != typeof define &&
    null !== define &&
    null != define.amd &&
    define([], function () {
      return saveAs
    })
