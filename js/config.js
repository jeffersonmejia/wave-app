;(function () {
  function n(n, r, t) {
    for (var e = (t || 0) - 1, u = n ? n.length : 0; ++e < u; )
      if (n[e] === r) return e
    return -1
  }
  function r(r, t) {
    var e = typeof t
    if (((r = r.cache), 'boolean' == e || null == t)) return r[t] ? 0 : -1
    'number' != e && 'string' != e && (e = 'object')
    var u = 'number' == e ? t : m + t
    return (
      (r = (r = r[e]) && r[u]),
      'object' == e ? (r && n(r, t) > -1 ? 0 : -1) : r ? 0 : -1
    )
  }
  function t(n) {
    var r = this.cache,
      t = typeof n
    if ('boolean' == t || null == n) r[n] = !0
    else {
      'number' != t && 'string' != t && (t = 'object')
      var e = 'number' == t ? n : m + n,
        u = r[t] || (r[t] = {})
      'object' == t ? (u[e] || (u[e] = [])).push(n) : (u[e] = !0)
    }
  }
  function e(n) {
    return n.charCodeAt(0)
  }
  function u(n, r) {
    for (var t = n.criteria, e = r.criteria, u = -1, o = t.length; ++u < o; ) {
      var a = t[u],
        i = e[u]
      if (a !== i) {
        if (a > i || 'undefined' == typeof a) return 1
        if (i > a || 'undefined' == typeof i) return -1
      }
    }
    return n.index - r.index
  }
  function o(n) {
    var r = -1,
      e = n.length,
      u = n[0],
      o = n[(e / 2) | 0],
      a = n[e - 1]
    if (
      u &&
      'object' == typeof u &&
      o &&
      'object' == typeof o &&
      a &&
      'object' == typeof a
    )
      return !1
    var i = f()
    i['false'] = i['null'] = i['true'] = i.undefined = !1
    var l = f()
    for (l.array = n, l.cache = i, l.push = t; ++r < e; ) l.push(n[r])
    return l
  }
  function a(n) {
    return '\\' + G[n]
  }
  function i() {
    return h.pop() || []
  }
  function f() {
    return (
      g.pop() || {
        array: null,
        cache: null,
        criteria: null,
        false: !1,
        index: 0,
        null: !1,
        number: null,
        object: null,
        push: null,
        string: null,
        true: !1,
        undefined: !1,
        value: null,
      }
    )
  }
  function l(n) {
    ;(n.length = 0), h.length < d && h.push(n)
  }
  function c(n) {
    var r = n.cache
    r && c(r),
      (n.array =
        n.cache =
        n.criteria =
        n.object =
        n.number =
        n.string =
        n.value =
          null),
      g.length < d && g.push(n)
  }
  function p(n, r, t) {
    r || (r = 0), 'undefined' == typeof t && (t = n ? n.length : 0)
    for (var e = -1, u = t - r || 0, o = Array(0 > u ? 0 : u); ++e < u; )
      o[e] = n[r + e]
    return o
  }
  function s(t) {
    function h(n) {
      return n && 'object' == typeof n && !Yt(n) && Tt.call(n, '__wrapped__')
        ? n
        : new g(n)
    }
    function g(n, r) {
      ;(this.__chain__ = !!r), (this.__wrapped__ = n)
    }
    function d(n) {
      function r() {
        if (e) {
          var n = p(e)
          $t.apply(n, arguments)
        }
        if (this instanceof r) {
          var o = J(t.prototype),
            a = t.apply(o, n || arguments)
          return Sn(a) ? a : o
        }
        return t.apply(u, n || arguments)
      }
      var t = n[0],
        e = n[2],
        u = n[4]
      return Xt(r, n), r
    }
    function G(n, r, t, e, u) {
      if (t) {
        var o = t(n)
        if ('undefined' != typeof o) return o
      }
      var a = Sn(n)
      if (!a) return n
      var f = Nt.call(n)
      if (!K[f]) return n
      var c = Jt[f]
      switch (f) {
        case F:
        case B:
          return new c(+n)
        case q:
        case P:
          return new c(n)
        case L:
          return (o = c(n.source, C.exec(n))), (o.lastIndex = n.lastIndex), o
      }
      var s = Yt(n)
      if (r) {
        var v = !e
        e || (e = i()), u || (u = i())
        for (var h = e.length; h--; ) if (e[h] == n) return u[h]
        o = s ? c(n.length) : {}
      } else o = s ? p(n) : oe({}, n)
      return (
        s &&
          (Tt.call(n, 'index') && (o.index = n.index),
          Tt.call(n, 'input') && (o.input = n.input)),
        r
          ? (e.push(n),
            u.push(o),
            (s ? Xn : fe)(n, function (n, a) {
              o[a] = G(n, r, t, e, u)
            }),
            v && (l(e), l(u)),
            o)
          : o
      )
    }
    function J(n, r) {
      return Sn(n) ? zt(n) : {}
    }
    function Q(n, r, t) {
      if ('function' != typeof n) return Yr
      if ('undefined' == typeof r || !('prototype' in n)) return n
      var e = n.__bindData__
      if (
        'undefined' == typeof e &&
        (Qt.funcNames && (e = !n.name), (e = e || !Qt.funcDecomp), !e)
      ) {
        var u = At.call(n)
        Qt.funcNames || (e = !O.test(u)), e || ((e = I.test(u)), Xt(n, e))
      }
      if (e === !1 || (e !== !0 && 1 & e[1])) return n
      switch (t) {
        case 1:
          return function (t) {
            return n.call(r, t)
          }
        case 2:
          return function (t, e) {
            return n.call(r, t, e)
          }
        case 3:
          return function (t, e, u) {
            return n.call(r, t, e, u)
          }
        case 4:
          return function (t, e, u, o) {
            return n.call(r, t, e, u, o)
          }
      }
      return $r(n, r)
    }
    function X(n) {
      function r() {
        var n = f ? a : this
        if (u) {
          var h = p(u)
          $t.apply(h, arguments)
        }
        if (
          (o || c) &&
          (h || (h = p(arguments)), o && $t.apply(h, o), c && h.length < i)
        )
          return (e |= 16), X([t, s ? e : -4 & e, h, null, a, i])
        if ((h || (h = arguments), l && (t = n[v]), this instanceof r)) {
          n = J(t.prototype)
          var g = t.apply(n, h)
          return Sn(g) ? g : n
        }
        return t.apply(n, h)
      }
      var t = n[0],
        e = n[1],
        u = n[2],
        o = n[3],
        a = n[4],
        i = n[5],
        f = 1 & e,
        l = 2 & e,
        c = 4 & e,
        s = 8 & e,
        v = t
      return Xt(r, n), r
    }
    function Y(t, e) {
      var u = -1,
        a = ln(),
        i = t ? t.length : 0,
        f = i >= b && a === n,
        l = []
      if (f) {
        var p = o(e)
        p ? ((a = r), (e = p)) : (f = !1)
      }
      for (; ++u < i; ) {
        var s = t[u]
        a(e, s) < 0 && l.push(s)
      }
      return f && c(e), l
    }
    function nn(n, r, t, e) {
      for (var u = (e || 0) - 1, o = n ? n.length : 0, a = []; ++u < o; ) {
        var i = n[u]
        if (
          i &&
          'object' == typeof i &&
          'number' == typeof i.length &&
          (Yt(i) || vn(i))
        ) {
          r || (i = nn(i, r, t))
          var f = -1,
            l = i.length,
            c = a.length
          for (a.length += l; ++f < l; ) a[c++] = i[f]
        } else t || a.push(i)
      }
      return a
    }
    function rn(n, r, t, e, u, o) {
      if (t) {
        var a = t(n, r)
        if ('undefined' != typeof a) return !!a
      }
      if (n === r) return 0 !== n || 1 / n == 1 / r
      var f = typeof n,
        c = typeof r
      if (!(n !== n || (n && V[f]) || (r && V[c]))) return !1
      if (null == n || null == r) return n === r
      var p = Nt.call(n),
        s = Nt.call(r)
      if ((p == T && (p = z), s == T && (s = z), p != s)) return !1
      switch (p) {
        case F:
        case B:
          return +n == +r
        case q:
          return n != +n ? r != +r : 0 == n ? 1 / n == 1 / r : n == +r
        case L:
        case P:
          return n == jt(r)
      }
      var v = p == $
      if (!v) {
        var h = Tt.call(n, '__wrapped__'),
          g = Tt.call(r, '__wrapped__')
        if (h || g)
          return rn(h ? n.__wrapped__ : n, g ? r.__wrapped__ : r, t, e, u, o)
        if (p != z) return !1
        var y = n.constructor,
          m = r.constructor
        if (
          y != m &&
          !(In(y) && y instanceof y && In(m) && m instanceof m) &&
          'constructor' in n &&
          'constructor' in r
        )
          return !1
      }
      var b = !u
      u || (u = i()), o || (o = i())
      for (var d = u.length; d--; ) if (u[d] == n) return o[d] == r
      var _ = 0
      if (((a = !0), u.push(n), o.push(r), v)) {
        if (((d = n.length), (_ = r.length), (a = _ == d), a || e))
          for (; _--; ) {
            var w = d,
              j = r[_]
            if (e) for (; w-- && !(a = rn(n[w], j, t, e, u, o)); );
            else if (!(a = rn(n[_], j, t, e, u, o))) break
          }
      } else
        ie(r, function (r, i, f) {
          return Tt.call(f, i)
            ? (_++, (a = Tt.call(n, i) && rn(n[i], r, t, e, u, o)))
            : void 0
        }),
          a &&
            !e &&
            ie(n, function (n, r, t) {
              return Tt.call(t, r) ? (a = --_ > -1) : void 0
            })
      return u.pop(), o.pop(), b && (l(u), l(o)), a
    }
    function tn(n, r, t, e, u) {
      ;(Yt(r) ? Xn : fe)(r, function (r, o) {
        var a,
          i,
          f = r,
          l = n[o]
        if (r && ((i = Yt(r)) || le(r))) {
          for (var c = e.length; c--; )
            if ((a = e[c] == r)) {
              l = u[c]
              break
            }
          if (!a) {
            var p
            t && ((f = t(l, r)), (p = 'undefined' != typeof f) && (l = f)),
              p || (l = i ? (Yt(l) ? l : []) : le(l) ? l : {}),
              e.push(r),
              u.push(l),
              p || tn(l, r, t, e, u)
          }
        } else t && ((f = t(l, r)), 'undefined' == typeof f && (f = r)), 'undefined' != typeof f && (l = f)
        n[o] = l
      })
    }
    function en(n, r) {
      return n + St(Ht() * (r - n + 1))
    }
    function un(t, e, u) {
      var a = -1,
        f = ln(),
        p = t ? t.length : 0,
        s = [],
        v = !e && p >= b && f === n,
        h = u || v ? i() : s
      if (v) {
        var g = o(h)
        ;(f = r), (h = g)
      }
      for (; ++a < p; ) {
        var y = t[a],
          m = u ? u(y, a, t) : y
        ;(e ? !a || h[h.length - 1] !== m : f(h, m) < 0) &&
          ((u || v) && h.push(m), s.push(y))
      }
      return v ? (l(h.array), c(h)) : u && l(h), s
    }
    function on(n) {
      return function (r, t, e) {
        var u = {}
        t = h.createCallback(t, e, 3)
        var o = -1,
          a = r ? r.length : 0
        if ('number' == typeof a)
          for (; ++o < a; ) {
            var i = r[o]
            n(u, i, t(i, o, r), r)
          }
        else
          fe(r, function (r, e, o) {
            n(u, r, t(r, e, o), o)
          })
        return u
      }
    }
    function an(n, r, t, e, u, o) {
      var a = 1 & r,
        i = 2 & r,
        f = 4 & r,
        l = 16 & r,
        c = 32 & r
      if (!i && !In(n)) throw new kt()
      l && !t.length && ((r &= -17), (l = t = !1)),
        c && !e.length && ((r &= -33), (c = e = !1))
      var s = n && n.__bindData__
      if (s && s !== !0)
        return (
          (s = p(s)),
          s[2] && (s[2] = p(s[2])),
          s[3] && (s[3] = p(s[3])),
          !a || 1 & s[1] || (s[4] = u),
          !a && 1 & s[1] && (r |= 8),
          !f || 4 & s[1] || (s[5] = o),
          l && $t.apply(s[2] || (s[2] = []), t),
          c && Wt.apply(s[3] || (s[3] = []), e),
          (s[1] |= r),
          an.apply(null, s)
        )
      var v = 1 == r || 17 === r ? d : X
      return v([n, r, t, e, u, o])
    }
    function fn(n) {
      return re[n]
    }
    function ln() {
      var r = (r = h.indexOf) === br ? n : r
      return r
    }
    function cn(n) {
      return 'function' == typeof n && Rt.test(n)
    }
    function pn(n) {
      var r, t
      return n &&
        Nt.call(n) == z &&
        ((r = n.constructor), !In(r) || r instanceof r)
        ? (ie(n, function (n, r) {
            t = r
          }),
          'undefined' == typeof t || Tt.call(n, t))
        : !1
    }
    function sn(n) {
      return te[n]
    }
    function vn(n) {
      return (
        (n &&
          'object' == typeof n &&
          'number' == typeof n.length &&
          Nt.call(n) == T) ||
        !1
      )
    }
    function hn(n, r, t, e) {
      return (
        'boolean' != typeof r && null != r && ((e = t), (t = r), (r = !1)),
        G(n, r, 'function' == typeof t && Q(t, e, 1))
      )
    }
    function gn(n, r, t) {
      return G(n, !0, 'function' == typeof r && Q(r, t, 1))
    }
    function yn(n, r) {
      var t = J(n)
      return r ? oe(t, r) : t
    }
    function mn(n, r, t) {
      var e
      return (
        (r = h.createCallback(r, t, 3)),
        fe(n, function (n, t, u) {
          return r(n, t, u) ? ((e = t), !1) : void 0
        }),
        e
      )
    }
    function bn(n, r, t) {
      var e
      return (
        (r = h.createCallback(r, t, 3)),
        _n(n, function (n, t, u) {
          return r(n, t, u) ? ((e = t), !1) : void 0
        }),
        e
      )
    }
    function dn(n, r, t) {
      var e = []
      ie(n, function (n, r) {
        e.push(r, n)
      })
      var u = e.length
      for (r = Q(r, t, 3); u-- && r(e[u--], e[u], n) !== !1; );
      return n
    }
    function _n(n, r, t) {
      var e = ne(n),
        u = e.length
      for (r = Q(r, t, 3); u--; ) {
        var o = e[u]
        if (r(n[o], o, n) === !1) break
      }
      return n
    }
    function wn(n) {
      var r = []
      return (
        ie(n, function (n, t) {
          In(n) && r.push(t)
        }),
        r.sort()
      )
    }
    function jn(n, r) {
      return n ? Tt.call(n, r) : !1
    }
    function kn(n) {
      for (var r = -1, t = ne(n), e = t.length, u = {}; ++r < e; ) {
        var o = t[r]
        u[n[o]] = o
      }
      return u
    }
    function xn(n) {
      return (
        n === !0 ||
        n === !1 ||
        (n && 'object' == typeof n && Nt.call(n) == F) ||
        !1
      )
    }
    function Cn(n) {
      return (n && 'object' == typeof n && Nt.call(n) == B) || !1
    }
    function On(n) {
      return (n && 1 === n.nodeType) || !1
    }
    function Nn(n) {
      var r = !0
      if (!n) return r
      var t = Nt.call(n),
        e = n.length
      return t == $ ||
        t == P ||
        t == T ||
        (t == z && 'number' == typeof e && In(n.splice))
        ? !e
        : (fe(n, function () {
            return (r = !1)
          }),
          r)
    }
    function Rn(n, r, t, e) {
      return rn(n, r, 'function' == typeof t && Q(t, e, 2))
    }
    function En(n) {
      return Pt(n) && !Kt(parseFloat(n))
    }
    function In(n) {
      return 'function' == typeof n
    }
    function Sn(n) {
      return !(!n || !V[typeof n])
    }
    function An(n) {
      return Tn(n) && n != +n
    }
    function Dn(n) {
      return null === n
    }
    function Tn(n) {
      return (
        'number' == typeof n ||
        (n && 'object' == typeof n && Nt.call(n) == q) ||
        !1
      )
    }
    function $n(n) {
      return (n && 'object' == typeof n && Nt.call(n) == L) || !1
    }
    function Fn(n) {
      return (
        'string' == typeof n ||
        (n && 'object' == typeof n && Nt.call(n) == P) ||
        !1
      )
    }
    function Bn(n) {
      return 'undefined' == typeof n
    }
    function Wn(n, r, t) {
      var e = {}
      return (
        (r = h.createCallback(r, t, 3)),
        fe(n, function (n, t, u) {
          e[t] = r(n, t, u)
        }),
        e
      )
    }
    function qn(n) {
      var r = arguments,
        t = 2
      if (!Sn(n)) return n
      if (
        ('number' != typeof r[2] && (t = r.length),
        t > 3 && 'function' == typeof r[t - 2])
      )
        var e = Q(r[--t - 1], r[t--], 2)
      else t > 2 && 'function' == typeof r[t - 1] && (e = r[--t])
      for (var u = p(arguments, 1, t), o = -1, a = i(), f = i(); ++o < t; )
        tn(n, u[o], e, a, f)
      return l(a), l(f), n
    }
    function zn(n, r, t) {
      var e = {}
      if ('function' != typeof r) {
        var u = []
        ie(n, function (n, r) {
          u.push(r)
        }),
          (u = Y(u, nn(arguments, !0, !1, 1)))
        for (var o = -1, a = u.length; ++o < a; ) {
          var i = u[o]
          e[i] = n[i]
        }
      } else
        (r = h.createCallback(r, t, 3)),
          ie(n, function (n, t, u) {
            r(n, t, u) || (e[t] = n)
          })
      return e
    }
    function Ln(n) {
      for (var r = -1, t = ne(n), e = t.length, u = ht(e); ++r < e; ) {
        var o = t[r]
        u[r] = [o, n[o]]
      }
      return u
    }
    function Pn(n, r, t) {
      var e = {}
      if ('function' != typeof r)
        for (
          var u = -1, o = nn(arguments, !0, !1, 1), a = Sn(n) ? o.length : 0;
          ++u < a;

        ) {
          var i = o[u]
          i in n && (e[i] = n[i])
        }
      else
        (r = h.createCallback(r, t, 3)),
          ie(n, function (n, t, u) {
            r(n, t, u) && (e[t] = n)
          })
      return e
    }
    function Kn(n, r, t, e) {
      var u = Yt(n)
      if (null == t)
        if (u) t = []
        else {
          var o = n && n.constructor,
            a = o && o.prototype
          t = J(a)
        }
      return (
        r &&
          ((r = h.createCallback(r, e, 4)),
          (u ? Xn : fe)(n, function (n, e, u) {
            return r(t, n, e, u)
          })),
        t
      )
    }
    function Un(n) {
      for (var r = -1, t = ne(n), e = t.length, u = ht(e); ++r < e; )
        u[r] = n[t[r]]
      return u
    }
    function Mn(n) {
      for (
        var r = arguments,
          t = -1,
          e = nn(r, !0, !1, 1),
          u = r[2] && r[2][r[1]] === n ? 1 : e.length,
          o = ht(u);
        ++t < u;

      )
        o[t] = n[e[t]]
      return o
    }
    function Vn(n, r, t) {
      var e = -1,
        u = ln(),
        o = n ? n.length : 0,
        a = !1
      return (
        (t = (0 > t ? Mt(0, o + t) : t) || 0),
        Yt(n)
          ? (a = u(n, r, t) > -1)
          : 'number' == typeof o
          ? (a = (Fn(n) ? n.indexOf(r, t) : u(n, r, t)) > -1)
          : fe(n, function (n) {
              return ++e >= t ? !(a = n === r) : void 0
            }),
        a
      )
    }
    function Gn(n, r, t) {
      var e = !0
      r = h.createCallback(r, t, 3)
      var u = -1,
        o = n ? n.length : 0
      if ('number' == typeof o) for (; ++u < o && (e = !!r(n[u], u, n)); );
      else
        fe(n, function (n, t, u) {
          return (e = !!r(n, t, u))
        })
      return e
    }
    function Hn(n, r, t) {
      var e = []
      r = h.createCallback(r, t, 3)
      var u = -1,
        o = n ? n.length : 0
      if ('number' == typeof o)
        for (; ++u < o; ) {
          var a = n[u]
          r(a, u, n) && e.push(a)
        }
      else
        fe(n, function (n, t, u) {
          r(n, t, u) && e.push(n)
        })
      return e
    }
    function Jn(n, r, t) {
      r = h.createCallback(r, t, 3)
      var e = -1,
        u = n ? n.length : 0
      if ('number' != typeof u) {
        var o
        return (
          fe(n, function (n, t, e) {
            return r(n, t, e) ? ((o = n), !1) : void 0
          }),
          o
        )
      }
      for (; ++e < u; ) {
        var a = n[e]
        if (r(a, e, n)) return a
      }
    }
    function Qn(n, r, t) {
      var e
      return (
        (r = h.createCallback(r, t, 3)),
        Yn(n, function (n, t, u) {
          return r(n, t, u) ? ((e = n), !1) : void 0
        }),
        e
      )
    }
    function Xn(n, r, t) {
      var e = -1,
        u = n ? n.length : 0
      if (
        ((r = r && 'undefined' == typeof t ? r : Q(r, t, 3)),
        'number' == typeof u)
      )
        for (; ++e < u && r(n[e], e, n) !== !1; );
      else fe(n, r)
      return n
    }
    function Yn(n, r, t) {
      var e = n ? n.length : 0
      if (
        ((r = r && 'undefined' == typeof t ? r : Q(r, t, 3)),
        'number' == typeof e)
      )
        for (; e-- && r(n[e], e, n) !== !1; );
      else {
        var u = ne(n)
        ;(e = u.length),
          fe(n, function (n, t, o) {
            return (t = u ? u[--e] : --e), r(o[t], t, o)
          })
      }
      return n
    }
    function Zn(n, r) {
      var t = p(arguments, 2),
        e = -1,
        u = 'function' == typeof r,
        o = n ? n.length : 0,
        a = ht('number' == typeof o ? o : 0)
      return (
        Xn(n, function (n) {
          a[++e] = (u ? r : n[r]).apply(n, t)
        }),
        a
      )
    }
    function nr(n, r, t) {
      var e = -1,
        u = n ? n.length : 0
      if (((r = h.createCallback(r, t, 3)), 'number' == typeof u))
        for (var o = ht(u); ++e < u; ) o[e] = r(n[e], e, n)
      else
        (o = []),
          fe(n, function (n, t, u) {
            o[++e] = r(n, t, u)
          })
      return o
    }
    function rr(n, r, t) {
      var u = -(1 / 0),
        o = u
      if (
        ('function' != typeof r && t && t[r] === n && (r = null),
        null == r && Yt(n))
      )
        for (var a = -1, i = n.length; ++a < i; ) {
          var f = n[a]
          f > o && (o = f)
        }
      else
        (r = null == r && Fn(n) ? e : h.createCallback(r, t, 3)),
          Xn(n, function (n, t, e) {
            var a = r(n, t, e)
            a > u && ((u = a), (o = n))
          })
      return o
    }
    function tr(n, r, t) {
      var u = 1 / 0,
        o = u
      if (
        ('function' != typeof r && t && t[r] === n && (r = null),
        null == r && Yt(n))
      )
        for (var a = -1, i = n.length; ++a < i; ) {
          var f = n[a]
          o > f && (o = f)
        }
      else
        (r = null == r && Fn(n) ? e : h.createCallback(r, t, 3)),
          Xn(n, function (n, t, e) {
            var a = r(n, t, e)
            u > a && ((u = a), (o = n))
          })
      return o
    }
    function er(n, r, t, e) {
      if (!n) return t
      var u = arguments.length < 3
      r = h.createCallback(r, e, 4)
      var o = -1,
        a = n.length
      if ('number' == typeof a)
        for (u && (t = n[++o]); ++o < a; ) t = r(t, n[o], o, n)
      else
        fe(n, function (n, e, o) {
          t = u ? ((u = !1), n) : r(t, n, e, o)
        })
      return t
    }
    function ur(n, r, t, e) {
      var u = arguments.length < 3
      return (
        (r = h.createCallback(r, e, 4)),
        Yn(n, function (n, e, o) {
          t = u ? ((u = !1), n) : r(t, n, e, o)
        }),
        t
      )
    }
    function or(n, r, t) {
      return (
        (r = h.createCallback(r, t, 3)),
        Hn(n, function (n, t, e) {
          return !r(n, t, e)
        })
      )
    }
    function ar(n, r, t) {
      if ((n && 'number' != typeof n.length && (n = Un(n)), null == r || t))
        return n ? n[en(0, n.length - 1)] : v
      var e = ir(n)
      return (e.length = Vt(Mt(0, r), e.length)), e
    }
    function ir(n) {
      var r = -1,
        t = n ? n.length : 0,
        e = ht('number' == typeof t ? t : 0)
      return (
        Xn(n, function (n) {
          var t = en(0, ++r)
          ;(e[r] = e[t]), (e[t] = n)
        }),
        e
      )
    }
    function fr(n) {
      var r = n ? n.length : 0
      return 'number' == typeof r ? r : ne(n).length
    }
    function lr(n, r, t) {
      var e
      r = h.createCallback(r, t, 3)
      var u = -1,
        o = n ? n.length : 0
      if ('number' == typeof o) for (; ++u < o && !(e = r(n[u], u, n)); );
      else
        fe(n, function (n, t, u) {
          return !(e = r(n, t, u))
        })
      return !!e
    }
    function cr(n, r, t) {
      var e = -1,
        o = Yt(r),
        a = n ? n.length : 0,
        p = ht('number' == typeof a ? a : 0)
      for (
        o || (r = h.createCallback(r, t, 3)),
          Xn(n, function (n, t, u) {
            var a = (p[++e] = f())
            o
              ? (a.criteria = nr(r, function (r) {
                  return n[r]
                }))
              : ((a.criteria = i())[0] = r(n, t, u)),
              (a.index = e),
              (a.value = n)
          }),
          a = p.length,
          p.sort(u);
        a--;

      ) {
        var s = p[a]
        ;(p[a] = s.value), o || l(s.criteria), c(s)
      }
      return p
    }
    function pr(n) {
      return n && 'number' == typeof n.length ? p(n) : Un(n)
    }
    function sr(n) {
      for (var r = -1, t = n ? n.length : 0, e = []; ++r < t; ) {
        var u = n[r]
        u && e.push(u)
      }
      return e
    }
    function vr(n) {
      return Y(n, nn(arguments, !0, !0, 1))
    }
    function hr(n, r, t) {
      var e = -1,
        u = n ? n.length : 0
      for (r = h.createCallback(r, t, 3); ++e < u; ) if (r(n[e], e, n)) return e
      return -1
    }
    function gr(n, r, t) {
      var e = n ? n.length : 0
      for (r = h.createCallback(r, t, 3); e--; ) if (r(n[e], e, n)) return e
      return -1
    }
    function yr(n, r, t) {
      var e = 0,
        u = n ? n.length : 0
      if ('number' != typeof r && null != r) {
        var o = -1
        for (r = h.createCallback(r, t, 3); ++o < u && r(n[o], o, n); ) e++
      } else if (((e = r), null == e || t)) return n ? n[0] : v
      return p(n, 0, Vt(Mt(0, e), u))
    }
    function mr(n, r, t, e) {
      return (
        'boolean' != typeof r &&
          null != r &&
          ((e = t),
          (t = 'function' != typeof r && e && e[r] === n ? null : r),
          (r = !1)),
        null != t && (n = nr(n, t, e)),
        nn(n, r)
      )
    }
    function br(r, t, e) {
      if ('number' == typeof e) {
        var u = r ? r.length : 0
        e = 0 > e ? Mt(0, u + e) : e || 0
      } else if (e) {
        var o = Nr(r, t)
        return r[o] === t ? o : -1
      }
      return n(r, t, e)
    }
    function dr(n, r, t) {
      var e = 0,
        u = n ? n.length : 0
      if ('number' != typeof r && null != r) {
        var o = u
        for (r = h.createCallback(r, t, 3); o-- && r(n[o], o, n); ) e++
      } else e = null == r || t ? 1 : r || e
      return p(n, 0, Vt(Mt(0, u - e), u))
    }
    function _r() {
      for (
        var t = [],
          e = -1,
          u = arguments.length,
          a = i(),
          f = ln(),
          p = f === n,
          s = i();
        ++e < u;

      ) {
        var v = arguments[e]
        ;(Yt(v) || vn(v)) &&
          (t.push(v), a.push(p && v.length >= b && o(e ? t[e] : s)))
      }
      var h = t[0],
        g = -1,
        y = h ? h.length : 0,
        m = []
      n: for (; ++g < y; ) {
        var d = a[0]
        if (((v = h[g]), (d ? r(d, v) : f(s, v)) < 0)) {
          for (e = u, (d || s).push(v); --e; )
            if (((d = a[e]), (d ? r(d, v) : f(t[e], v)) < 0)) continue n
          m.push(v)
        }
      }
      for (; u--; ) (d = a[u]), d && c(d)
      return l(a), l(s), m
    }
    function wr(n, r, t) {
      var e = 0,
        u = n ? n.length : 0
      if ('number' != typeof r && null != r) {
        var o = u
        for (r = h.createCallback(r, t, 3); o-- && r(n[o], o, n); ) e++
      } else if (((e = r), null == e || t)) return n ? n[u - 1] : v
      return p(n, Mt(0, u - e))
    }
    function jr(n, r, t) {
      var e = n ? n.length : 0
      for (
        'number' == typeof t && (e = (0 > t ? Mt(0, e + t) : Vt(t, e - 1)) + 1);
        e--;

      )
        if (n[e] === r) return e
      return -1
    }
    function kr(n) {
      for (
        var r = arguments, t = 0, e = r.length, u = n ? n.length : 0;
        ++t < e;

      )
        for (var o = -1, a = r[t]; ++o < u; )
          n[o] === a && (Bt.call(n, o--, 1), u--)
      return n
    }
    function xr(n, r, t) {
      ;(n = +n || 0),
        (t = 'number' == typeof t ? t : +t || 1),
        null == r && ((r = n), (n = 0))
      for (var e = -1, u = Mt(0, Et((r - n) / (t || 1))), o = ht(u); ++e < u; )
        (o[e] = n), (n += t)
      return o
    }
    function Cr(n, r, t) {
      var e = -1,
        u = n ? n.length : 0,
        o = []
      for (r = h.createCallback(r, t, 3); ++e < u; ) {
        var a = n[e]
        r(a, e, n) && (o.push(a), Bt.call(n, e--, 1), u--)
      }
      return o
    }
    function Or(n, r, t) {
      if ('number' != typeof r && null != r) {
        var e = 0,
          u = -1,
          o = n ? n.length : 0
        for (r = h.createCallback(r, t, 3); ++u < o && r(n[u], u, n); ) e++
      } else e = null == r || t ? 1 : Mt(0, r)
      return p(n, e)
    }
    function Nr(n, r, t, e) {
      var u = 0,
        o = n ? n.length : u
      for (t = t ? h.createCallback(t, e, 1) : Yr, r = t(r); o > u; ) {
        var a = (u + o) >>> 1
        t(n[a]) < r ? (u = a + 1) : (o = a)
      }
      return u
    }
    function Rr() {
      return un(nn(arguments, !0, !0))
    }
    function Er(n, r, t, e) {
      return (
        'boolean' != typeof r &&
          null != r &&
          ((e = t),
          (t = 'function' != typeof r && e && e[r] === n ? null : r),
          (r = !1)),
        null != t && (t = h.createCallback(t, e, 3)),
        un(n, r, t)
      )
    }
    function Ir(n) {
      return Y(n, p(arguments, 1))
    }
    function Sr() {
      for (var n = -1, r = arguments.length; ++n < r; ) {
        var t = arguments[n]
        if (Yt(t) || vn(t)) var e = e ? un(Y(e, t).concat(Y(t, e))) : t
      }
      return e || []
    }
    function Ar() {
      for (
        var n = arguments.length > 1 ? arguments : arguments[0],
          r = -1,
          t = n ? rr(ve(n, 'length')) : 0,
          e = ht(0 > t ? 0 : t);
        ++r < t;

      )
        e[r] = ve(n, r)
      return e
    }
    function Dr(n, r) {
      var t = -1,
        e = n ? n.length : 0,
        u = {}
      for (r || !e || Yt(n[0]) || (r = []); ++t < e; ) {
        var o = n[t]
        r ? (u[o] = r[t]) : o && (u[o[0]] = o[1])
      }
      return u
    }
    function Tr(n, r) {
      if (!In(r)) throw new kt()
      return function () {
        return --n < 1 ? r.apply(this, arguments) : void 0
      }
    }
    function $r(n, r) {
      return arguments.length > 2
        ? an(n, 17, p(arguments, 2), null, r)
        : an(n, 1, null, null, r)
    }
    function Fr(n) {
      for (
        var r = arguments.length > 1 ? nn(arguments, !0, !1, 1) : wn(n),
          t = -1,
          e = r.length;
        ++t < e;

      ) {
        var u = r[t]
        n[u] = an(n[u], 1, null, null, n)
      }
      return n
    }
    function Br(n, r) {
      return arguments.length > 2
        ? an(r, 19, p(arguments, 2), null, n)
        : an(r, 3, null, null, n)
    }
    function Wr() {
      for (var n = arguments, r = n.length; r--; ) if (!In(n[r])) throw new kt()
      return function () {
        for (var r = arguments, t = n.length; t--; ) r = [n[t].apply(this, r)]
        return r[0]
      }
    }
    function qr(n, r) {
      return (
        (r = 'number' == typeof r ? r : +r || n.length),
        an(n, 4, null, null, null, r)
      )
    }
    function zr(n, r, t) {
      var e,
        u,
        o,
        a,
        i,
        f,
        l,
        c = 0,
        p = !1,
        s = !0
      if (!In(n)) throw new kt()
      if (((r = Mt(0, r) || 0), t === !0)) {
        var h = !0
        s = !1
      } else
        Sn(t) &&
          ((h = t.leading),
          (p = 'maxWait' in t && (Mt(r, t.maxWait) || 0)),
          (s = 'trailing' in t ? t.trailing : s))
      var g = function () {
          var t = r - (ge() - a)
          if (0 >= t) {
            u && It(u)
            var p = l
            ;(u = f = l = v),
              p && ((c = ge()), (o = n.apply(i, e)), f || u || (e = i = null))
          } else f = Ft(g, t)
        },
        y = function () {
          f && It(f),
            (u = f = l = v),
            (s || p !== r) &&
              ((c = ge()), (o = n.apply(i, e)), f || u || (e = i = null))
        }
      return function () {
        if (
          ((e = arguments),
          (a = ge()),
          (i = this),
          (l = s && (f || !h)),
          p === !1)
        )
          var t = h && !f
        else {
          u || h || (c = a)
          var v = p - (a - c),
            m = 0 >= v
          m
            ? (u && (u = It(u)), (c = a), (o = n.apply(i, e)))
            : u || (u = Ft(y, v))
        }
        return (
          m && f ? (f = It(f)) : f || r === p || (f = Ft(g, r)),
          t && ((m = !0), (o = n.apply(i, e))),
          !m || f || u || (e = i = null),
          o
        )
      }
    }
    function Lr(n) {
      if (!In(n)) throw new kt()
      var r = p(arguments, 1)
      return Ft(function () {
        n.apply(v, r)
      }, 1)
    }
    function Pr(n, r) {
      if (!In(n)) throw new kt()
      var t = p(arguments, 2)
      return Ft(function () {
        n.apply(v, t)
      }, r)
    }
    function Kr(n, r) {
      if (!In(n)) throw new kt()
      var t = function () {
        var e = t.cache,
          u = r ? r.apply(this, arguments) : m + arguments[0]
        return Tt.call(e, u) ? e[u] : (e[u] = n.apply(this, arguments))
      }
      return (t.cache = {}), t
    }
    function Ur(n) {
      var r, t
      if (!In(n)) throw new kt()
      return function () {
        return r ? t : ((r = !0), (t = n.apply(this, arguments)), (n = null), t)
      }
    }
    function Mr(n) {
      return an(n, 16, p(arguments, 1))
    }
    function Vr(n) {
      return an(n, 32, null, p(arguments, 1))
    }
    function Gr(n, r, t) {
      var e = !0,
        u = !0
      if (!In(n)) throw new kt()
      return (
        t === !1
          ? (e = !1)
          : Sn(t) &&
            ((e = 'leading' in t ? t.leading : e),
            (u = 'trailing' in t ? t.trailing : u)),
        (U.leading = e),
        (U.maxWait = r),
        (U.trailing = u),
        zr(n, r, U)
      )
    }
    function Hr(n, r) {
      return an(r, 16, [n])
    }
    function Jr(n) {
      return function () {
        return n
      }
    }
    function Qr(n, r, t) {
      var e = typeof n
      if (null == n || 'function' == e) return Q(n, r, t)
      if ('object' != e) return tt(n)
      var u = ne(n),
        o = u[0],
        a = n[o]
      return 1 != u.length || a !== a || Sn(a)
        ? function (r) {
            for (
              var t = u.length, e = !1;
              t-- && (e = rn(r[u[t]], n[u[t]], null, !0));

            );
            return e
          }
        : function (n) {
            var r = n[o]
            return a === r && (0 !== a || 1 / a == 1 / r)
          }
    }
    function Xr(n) {
      return null == n ? '' : jt(n).replace(ue, fn)
    }
    function Yr(n) {
      return n
    }
    function Zr(n, r, t) {
      var e = !0,
        u = r && wn(r)
      ;(r && (t || u.length)) ||
        (null == t && (t = r), (o = g), (r = n), (n = h), (u = wn(r))),
        t === !1 ? (e = !1) : Sn(t) && 'chain' in t && (e = t.chain)
      var o = n,
        a = In(o)
      Xn(u, function (t) {
        var u = (n[t] = r[t])
        a &&
          (o.prototype[t] = function () {
            var r = this.__chain__,
              t = this.__wrapped__,
              a = [t]
            $t.apply(a, arguments)
            var i = u.apply(n, a)
            if (e || r) {
              if (t === i && Sn(i)) return this
              ;(i = new o(i)), (i.__chain__ = r)
            }
            return i
          })
      })
    }
    function nt() {
      return (t._ = Ot), this
    }
    function rt() {}
    function tt(n) {
      return function (r) {
        return r[n]
      }
    }
    function et(n, r, t) {
      var e = null == n,
        u = null == r
      if (
        (null == t &&
          ('boolean' == typeof n && u
            ? ((t = n), (n = 1))
            : u || 'boolean' != typeof r || ((t = r), (u = !0))),
        e && u && (r = 1),
        (n = +n || 0),
        u ? ((r = n), (n = 0)) : (r = +r || 0),
        t || n % 1 || r % 1)
      ) {
        var o = Ht()
        return Vt(
          n + o * (r - n + parseFloat('1e-' + ((o + '').length - 1))),
          r
        )
      }
      return en(n, r)
    }
    function ut(n, r) {
      if (n) {
        var t = n[r]
        return In(t) ? n[r]() : t
      }
    }
    function ot(n, r, t) {
      var e = h.templateSettings
      ;(n = jt(n || '')), (t = ae({}, t, e))
      var u,
        o = ae({}, t.imports, e.imports),
        i = ne(o),
        f = Un(o),
        l = 0,
        c = t.interpolate || E,
        p = "__p += '",
        s = wt(
          (t.escape || E).source +
            '|' +
            c.source +
            '|' +
            (c === N ? x : E).source +
            '|' +
            (t.evaluate || E).source +
            '|$',
          'g'
        )
      n.replace(s, function (r, t, e, o, i, f) {
        return (
          e || (e = o),
          (p += n.slice(l, f).replace(S, a)),
          t && (p += "' +\n__e(" + t + ") +\n'"),
          i && ((u = !0), (p += "';\n" + i + ";\n__p += '")),
          e && (p += "' +\n((__t = (" + e + ")) == null ? '' : __t) +\n'"),
          (l = f + r.length),
          r
        )
      }),
        (p += "';\n")
      var g = t.variable,
        y = g
      y || ((g = 'obj'), (p = 'with (' + g + ') {\n' + p + '\n}\n')),
        (p = (u ? p.replace(w, '') : p).replace(j, '$1').replace(k, '$1;')),
        (p =
          'function(' +
          g +
          ') {\n' +
          (y ? '' : g + ' || (' + g + ' = {});\n') +
          "var __t, __p = '', __e = _.escape" +
          (u
            ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
            : ';\n') +
          p +
          'return __p\n}')
      var m =
        '\n/*\n//# sourceURL=' +
        (t.sourceURL || '/lodash/template/source[' + D++ + ']') +
        '\n*/'
      try {
        var b = mt(i, 'return ' + p + m).apply(v, f)
      } catch (d) {
        throw ((d.source = p), d)
      }
      return r ? b(r) : ((b.source = p), b)
    }
    function at(n, r, t) {
      n = (n = +n) > -1 ? n : 0
      var e = -1,
        u = ht(n)
      for (r = Q(r, t, 1); ++e < n; ) u[e] = r(e)
      return u
    }
    function it(n) {
      return null == n ? '' : jt(n).replace(ee, sn)
    }
    function ft(n) {
      var r = ++y
      return jt(null == n ? '' : n) + r
    }
    function lt(n) {
      return (n = new g(n)), (n.__chain__ = !0), n
    }
    function ct(n, r) {
      return r(n), n
    }
    function pt() {
      return (this.__chain__ = !0), this
    }
    function st() {
      return jt(this.__wrapped__)
    }
    function vt() {
      return this.__wrapped__
    }
    t = t ? Z.defaults(H.Object(), t, Z.pick(H, A)) : H
    var ht = t.Array,
      gt = t.Boolean,
      yt = t.Date,
      mt = t.Function,
      bt = t.Math,
      dt = t.Number,
      _t = t.Object,
      wt = t.RegExp,
      jt = t.String,
      kt = t.TypeError,
      xt = [],
      Ct = _t.prototype,
      Ot = t._,
      Nt = Ct.toString,
      Rt = wt(
        '^' +
          jt(Nt)
            .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            .replace(/toString| for [^\]]+/g, '.*?') +
          '$'
      ),
      Et = bt.ceil,
      It = t.clearTimeout,
      St = bt.floor,
      At = mt.prototype.toString,
      Dt = cn((Dt = _t.getPrototypeOf)) && Dt,
      Tt = Ct.hasOwnProperty,
      $t = xt.push,
      Ft = t.setTimeout,
      Bt = xt.splice,
      Wt = xt.unshift,
      qt = (function () {
        try {
          var n = {},
            r = cn((r = _t.defineProperty)) && r,
            t = r(n, n, n) && r
        } catch (e) {}
        return t
      })(),
      zt = cn((zt = _t.create)) && zt,
      Lt = cn((Lt = ht.isArray)) && Lt,
      Pt = t.isFinite,
      Kt = t.isNaN,
      Ut = cn((Ut = _t.keys)) && Ut,
      Mt = bt.max,
      Vt = bt.min,
      Gt = t.parseInt,
      Ht = bt.random,
      Jt = {}
    ;(Jt[$] = ht),
      (Jt[F] = gt),
      (Jt[B] = yt),
      (Jt[W] = mt),
      (Jt[z] = _t),
      (Jt[q] = dt),
      (Jt[L] = wt),
      (Jt[P] = jt),
      (g.prototype = h.prototype)
    var Qt = (h.support = {})
    ;(Qt.funcDecomp = !cn(t.WinRTError) && I.test(s)),
      (Qt.funcNames = 'string' == typeof mt.name),
      (h.templateSettings = {
        escape: /<%-([\s\S]+?)%>/g,
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: N,
        variable: '',
        imports: { _: h },
      }),
      zt ||
        (J = (function () {
          function n() {}
          return function (r) {
            if (Sn(r)) {
              n.prototype = r
              var e = new n()
              n.prototype = null
            }
            return e || t.Object()
          }
        })())
    var Xt = qt
        ? function (n, r) {
            ;(M.value = r), qt(n, '__bindData__', M)
          }
        : rt,
      Yt =
        Lt ||
        function (n) {
          return (
            (n &&
              'object' == typeof n &&
              'number' == typeof n.length &&
              Nt.call(n) == $) ||
            !1
          )
        },
      Zt = function (n) {
        var r,
          t = n,
          e = []
        if (!t) return e
        if (!V[typeof n]) return e
        for (r in t) Tt.call(t, r) && e.push(r)
        return e
      },
      ne = Ut
        ? function (n) {
            return Sn(n) ? Ut(n) : []
          }
        : Zt,
      re = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      },
      te = kn(re),
      ee = wt('(' + ne(te).join('|') + ')', 'g'),
      ue = wt('[' + ne(re).join('') + ']', 'g'),
      oe = function (n, r, t) {
        var e,
          u = n,
          o = u
        if (!u) return o
        var a = arguments,
          i = 0,
          f = 'number' == typeof t ? 2 : a.length
        if (f > 3 && 'function' == typeof a[f - 2])
          var l = Q(a[--f - 1], a[f--], 2)
        else f > 2 && 'function' == typeof a[f - 1] && (l = a[--f])
        for (; ++i < f; )
          if (((u = a[i]), u && V[typeof u]))
            for (
              var c = -1, p = V[typeof u] && ne(u), s = p ? p.length : 0;
              ++c < s;

            )
              (e = p[c]), (o[e] = l ? l(o[e], u[e]) : u[e])
        return o
      },
      ae = function (n, r, t) {
        var e,
          u = n,
          o = u
        if (!u) return o
        for (
          var a = arguments, i = 0, f = 'number' == typeof t ? 2 : a.length;
          ++i < f;

        )
          if (((u = a[i]), u && V[typeof u]))
            for (
              var l = -1, c = V[typeof u] && ne(u), p = c ? c.length : 0;
              ++l < p;

            )
              (e = c[l]), 'undefined' == typeof o[e] && (o[e] = u[e])
        return o
      },
      ie = function (n, r, t) {
        var e,
          u = n,
          o = u
        if (!u) return o
        if (!V[typeof u]) return o
        r = r && 'undefined' == typeof t ? r : Q(r, t, 3)
        for (e in u) if (r(u[e], e, n) === !1) return o
        return o
      },
      fe = function (n, r, t) {
        var e,
          u = n,
          o = u
        if (!u) return o
        if (!V[typeof u]) return o
        r = r && 'undefined' == typeof t ? r : Q(r, t, 3)
        for (
          var a = -1, i = V[typeof u] && ne(u), f = i ? i.length : 0;
          ++a < f;

        )
          if (((e = i[a]), r(u[e], e, n) === !1)) return o
        return o
      },
      le = Dt
        ? function (n) {
            if (!n || Nt.call(n) != z) return !1
            var r = n.valueOf,
              t = cn(r) && (t = Dt(r)) && Dt(t)
            return t ? n == t || Dt(n) == t : pn(n)
          }
        : pn,
      ce = on(function (n, r, t) {
        Tt.call(n, t) ? n[t]++ : (n[t] = 1)
      }),
      pe = on(function (n, r, t) {
        ;(Tt.call(n, t) ? n[t] : (n[t] = [])).push(r)
      }),
      se = on(function (n, r, t) {
        n[t] = r
      }),
      ve = nr,
      he = Hn,
      ge =
        (cn((ge = yt.now)) && ge) ||
        function () {
          return new yt().getTime()
        },
      ye =
        8 == Gt(_ + '08')
          ? Gt
          : function (n, r) {
              return Gt(Fn(n) ? n.replace(R, '') : n, r || 0)
            }
    return (
      (h.after = Tr),
      (h.assign = oe),
      (h.at = Mn),
      (h.bind = $r),
      (h.bindAll = Fr),
      (h.bindKey = Br),
      (h.chain = lt),
      (h.compact = sr),
      (h.compose = Wr),
      (h.constant = Jr),
      (h.countBy = ce),
      (h.create = yn),
      (h.createCallback = Qr),
      (h.curry = qr),
      (h.debounce = zr),
      (h.defaults = ae),
      (h.defer = Lr),
      (h.delay = Pr),
      (h.difference = vr),
      (h.filter = Hn),
      (h.flatten = mr),
      (h.forEach = Xn),
      (h.forEachRight = Yn),
      (h.forIn = ie),
      (h.forInRight = dn),
      (h.forOwn = fe),
      (h.forOwnRight = _n),
      (h.functions = wn),
      (h.groupBy = pe),
      (h.indexBy = se),
      (h.initial = dr),
      (h.intersection = _r),
      (h.invert = kn),
      (h.invoke = Zn),
      (h.keys = ne),
      (h.map = nr),
      (h.mapValues = Wn),
      (h.max = rr),
      (h.memoize = Kr),
      (h.merge = qn),
      (h.min = tr),
      (h.omit = zn),
      (h.once = Ur),
      (h.pairs = Ln),
      (h.partial = Mr),
      (h.partialRight = Vr),
      (h.pick = Pn),
      (h.pluck = ve),
      (h.property = tt),
      (h.pull = kr),
      (h.range = xr),
      (h.reject = or),
      (h.remove = Cr),
      (h.rest = Or),
      (h.shuffle = ir),
      (h.sortBy = cr),
      (h.tap = ct),
      (h.throttle = Gr),
      (h.times = at),
      (h.toArray = pr),
      (h.transform = Kn),
      (h.union = Rr),
      (h.uniq = Er),
      (h.values = Un),
      (h.where = he),
      (h.without = Ir),
      (h.wrap = Hr),
      (h.xor = Sr),
      (h.zip = Ar),
      (h.zipObject = Dr),
      (h.collect = nr),
      (h.drop = Or),
      (h.each = Xn),
      (h.eachRight = Yn),
      (h.extend = oe),
      (h.methods = wn),
      (h.object = Dr),
      (h.select = Hn),
      (h.tail = Or),
      (h.unique = Er),
      (h.unzip = Ar),
      Zr(h),
      (h.clone = hn),
      (h.cloneDeep = gn),
      (h.contains = Vn),
      (h.escape = Xr),
      (h.every = Gn),
      (h.find = Jn),
      (h.findIndex = hr),
      (h.findKey = mn),
      (h.findLast = Qn),
      (h.findLastIndex = gr),
      (h.findLastKey = bn),
      (h.has = jn),
      (h.identity = Yr),
      (h.indexOf = br),
      (h.isArguments = vn),
      (h.isArray = Yt),
      (h.isBoolean = xn),
      (h.isDate = Cn),
      (h.isElement = On),
      (h.isEmpty = Nn),
      (h.isEqual = Rn),
      (h.isFinite = En),
      (h.isFunction = In),
      (h.isNaN = An),
      (h.isNull = Dn),
      (h.isNumber = Tn),
      (h.isObject = Sn),
      (h.isPlainObject = le),
      (h.isRegExp = $n),
      (h.isString = Fn),
      (h.isUndefined = Bn),
      (h.lastIndexOf = jr),
      (h.mixin = Zr),
      (h.noConflict = nt),
      (h.noop = rt),
      (h.now = ge),
      (h.parseInt = ye),
      (h.random = et),
      (h.reduce = er),
      (h.reduceRight = ur),
      (h.result = ut),
      (h.runInContext = s),
      (h.size = fr),
      (h.some = lr),
      (h.sortedIndex = Nr),
      (h.template = ot),
      (h.unescape = it),
      (h.uniqueId = ft),
      (h.all = Gn),
      (h.any = lr),
      (h.detect = Jn),
      (h.findWhere = Jn),
      (h.foldl = er),
      (h.foldr = ur),
      (h.include = Vn),
      (h.inject = er),
      Zr(
        (function () {
          var n = {}
          return (
            fe(h, function (r, t) {
              h.prototype[t] || (n[t] = r)
            }),
            n
          )
        })(),
        !1
      ),
      (h.first = yr),
      (h.last = wr),
      (h.sample = ar),
      (h.take = yr),
      (h.head = yr),
      fe(h, function (n, r) {
        var t = 'sample' !== r
        h.prototype[r] ||
          (h.prototype[r] = function (r, e) {
            var u = this.__chain__,
              o = n(this.__wrapped__, r, e)
            return u || (null != r && (!e || (t && 'function' == typeof r)))
              ? new g(o, u)
              : o
          })
      }),
      (h.VERSION = '2.4.1'),
      (h.prototype.chain = pt),
      (h.prototype.toString = st),
      (h.prototype.value = vt),
      (h.prototype.valueOf = vt),
      Xn(['join', 'pop', 'shift'], function (n) {
        var r = xt[n]
        h.prototype[n] = function () {
          var n = this.__chain__,
            t = r.apply(this.__wrapped__, arguments)
          return n ? new g(t, n) : t
        }
      }),
      Xn(['push', 'reverse', 'sort', 'unshift'], function (n) {
        var r = xt[n]
        h.prototype[n] = function () {
          return r.apply(this.__wrapped__, arguments), this
        }
      }),
      Xn(['concat', 'slice', 'splice'], function (n) {
        var r = xt[n]
        h.prototype[n] = function () {
          return new g(r.apply(this.__wrapped__, arguments), this.__chain__)
        }
      }),
      h
    )
  }
  var v,
    h = [],
    g = [],
    y = 0,
    m = +new Date() + '',
    b = 75,
    d = 40,
    _ = ' 	\x0B\f \ufeff\n\r\u2028\u2029 ᠎             　',
    w = /\b__p \+= '';/g,
    j = /\b(__p \+=) '' \+/g,
    k = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
    x = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
    C = /\w*$/,
    O = /^\s*function[ \n\r\t]+\w/,
    N = /<%=([\s\S]+?)%>/g,
    R = RegExp('^[' + _ + ']*0+(?=.$)'),
    E = /($^)/,
    I = /\bthis\b/,
    S = /['\n\r\t\u2028\u2029\\]/g,
    A = [
      'Array',
      'Boolean',
      'Date',
      'Function',
      'Math',
      'Number',
      'Object',
      'RegExp',
      'String',
      '_',
      'attachEvent',
      'clearTimeout',
      'isFinite',
      'isNaN',
      'parseInt',
      'setTimeout',
    ],
    D = 0,
    T = '[object Arguments]',
    $ = '[object Array]',
    F = '[object Boolean]',
    B = '[object Date]',
    W = '[object Function]',
    q = '[object Number]',
    z = '[object Object]',
    L = '[object RegExp]',
    P = '[object String]',
    K = {}
  ;(K[W] = !1), (K[T] = K[$] = K[F] = K[B] = K[q] = K[z] = K[L] = K[P] = !0)
  var U = { leading: !1, maxWait: 0, trailing: !1 },
    M = { configurable: !1, enumerable: !1, value: null, writable: !1 },
    V = {
      boolean: !1,
      function: !0,
      object: !0,
      number: !1,
      string: !1,
      undefined: !1,
    },
    G = {
      '\\': '\\',
      "'": "'",
      '\n': 'n',
      '\r': 'r',
      '	': 't',
      '\u2028': 'u2028',
      '\u2029': 'u2029',
    },
    H = (V[typeof window] && window) || this,
    J = V[typeof exports] && exports && !exports.nodeType && exports,
    Q = V[typeof module] && module && !module.nodeType && module,
    X = Q && Q.exports === J && J,
    Y = V[typeof global] && global
  !Y || (Y.global !== Y && Y.window !== Y) || (H = Y)
  var Z = s()
  'function' == typeof define && 'object' == typeof define.amd && define.amd
    ? ((H._ = Z),
      define(function () {
        return Z
      }))
    : J && Q
    ? X
      ? ((Q.exports = Z)._ = Z)
      : (J._ = Z)
    : (H._ = Z)
}).call(this)
