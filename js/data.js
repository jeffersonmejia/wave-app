!(function (n, r) {
  function t(t, c, s) {
    var d = []
    c = 1 == c ? { entropy: !0 } : c || {}
    var m = u(i(c.entropy ? [t, a(n)] : null == t ? f() : t, 3), d),
      j = new e(d),
      S = function () {
        for (var n = j.g(p), r = y, t = 0; h > n; )
          (n = (n + t) * l), (r *= l), (t = j.g(1))
        for (; n >= v; ) (n /= 2), (r /= 2), (t >>>= 1)
        return (n + t) / r
      }
    return (
      (S.int32 = function () {
        return 0 | j.g(4)
      }),
      (S.quick = function () {
        return j.g(4) / 4294967296
      }),
      (S['double'] = S),
      u(a(j.S), n),
      (
        c.pass ||
        s ||
        function (n, t, e, i) {
          return (
            i &&
              (i.S && o(i, j),
              (n.state = function () {
                return o(j, {})
              })),
            e ? ((r[g] = n), t) : n
          )
        }
      )(S, m, 'global' in c ? c.global : this == r, c.state)
    )
  }
  function e(n) {
    var r,
      t = n.length,
      e = this,
      o = 0,
      i = (e.i = e.j = 0),
      u = (e.S = [])
    for (t || (n = [t++]); l > o; ) u[o] = o++
    for (o = 0; l > o; o++)
      (u[o] = u[(i = m & (i + n[o % t] + (r = u[o])))]), (u[i] = r)
    ;(e.g = function (n) {
      for (var r, t = 0, o = e.i, i = e.j, u = e.S; n--; )
        (r = u[(o = m & (o + 1))]),
          (t = t * l + u[m & ((u[o] = u[(i = m & (i + r))]) + (u[i] = r))])
      return (e.i = o), (e.j = i), t
    })(l)
  }
  function o(n, r) {
    return (r.i = n.i), (r.j = n.j), (r.S = n.S.slice()), r
  }
  function i(n, r) {
    var t,
      e = [],
      o = typeof n
    if (r && 'object' == o)
      for (t in n)
        try {
          e.push(i(n[t], r - 1))
        } catch (u) {}
    return e.length ? e : 'string' == o ? n : n + '\x00'
  }
  function u(n, r) {
    for (var t, e = n + '', o = 0; o < e.length; )
      r[m & o] = m & ((t ^= 19 * r[m & o]) + e.charCodeAt(o++))
    return a(r)
  }
  function f() {
    try {
      if (c) return a(c.randomBytes(l))
      var r = new Uint8Array(l)
      return (s.crypto || s.msCrypto).getRandomValues(r), a(r)
    } catch (t) {
      var e = s.navigator,
        o = e && e.plugins
      return [+new Date(), s, o, s.screen, a(n)]
    }
  }
  function a(n) {
    return String.fromCharCode.apply(0, n)
  }
  var c,
    s = this,
    l = 256,
    p = 6,
    d = 52,
    g = 'random',
    y = r.pow(l, p),
    h = r.pow(2, d),
    v = 2 * h,
    m = l - 1
  if (
    ((r['seed' + g] = t),
    u(r.random(), n),
    'object' == typeof module && module.exports)
  ) {
    module.exports = t
    try {
      c = require('crypto')
    } catch (j) {}
  } else
    'function' == typeof define &&
      define.amd &&
      define(function () {
        return t
      })
})([], Math)
