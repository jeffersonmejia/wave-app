!(function () {
  'use strict'
  ;(window.phetio = window.phetio || null),
    (function () {
      ;(window.phet = window.phet || {}),
        (window.phet.chipper = window.phet.chipper || {}),
        (window.phet.chipper.randomSeed = Math.random())
      var e = {}
      if ('undefined' != typeof window && window.location.search)
        for (
          var r = window.location.search.slice(1).split('&'), t = 0;
          t < r.length;
          t++
        ) {
          var p = r[t].split('=')
          e[p[0]] = decodeURIComponent(p[1])
        }
      ;(window.phet.chipper.getQueryParameter = function (r) {
        return e[r]
      }),
        (window.phet.chipper.getQueryParameters = function () {
          return e
        }),
        (window.phet.chipper.getCacheBusterArgs = function () {
          return 'false' !== phet.chipper.getQueryParameter('cacheBuster')
            ? 'bust=' + Date.now()
            : ''
        }),
        (window.phet.chipper.brand =
          window.phet.chipper.brand ||
          phet.chipper.getQueryParameter('brand') ||
          'adapted-from-phet'),
        (window.phet.chipper.mapString = function (e, r) {
          return null === r
            ? e
            : 'double' === r
            ? e + ':' + e
            : 'long' === r
            ? '12345678901234567890123456789012345678901234567890'
            : 'rtl' === r
            ? '‫تست (زبان)‬'
            : 'xss' === r
            ? '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQIW2NkYGD4DwABCQEBtxmN7wAAAABJRU5ErkJggg==" onload="window.location.href=atob(\'aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ==\')" />'
            : 'none' === r
            ? e
            : r
        }),
        (phet.chipper.checkAndRemapLocale = function () {
          if (phet.chipper.localeData && phet.chipper.locale) {
            var e = phet.chipper.locale
            if (e) {
              if (e.length < 5) e = e.toLowerCase()
              else {
                e = e.replace(/-/, '_')
                var r = e.split('_')
                2 === r.length &&
                  (e = r[0].toLowerCase() + '_' + r[1].toUpperCase())
              }
              if (3 === e.length)
                for (
                  var t = Object.keys(phet.chipper.localeData), p = 0;
                  p < t.length;
                  p++
                ) {
                  var a = t[p]
                  if (phet.chipper.localeData[a].locale3 === e) {
                    e = a
                    break
                  }
                }
            }
            phet.chipper.localeData[e] || (e = 'en'), (phet.chipper.locale = e)
          }
        }),
        phet.chipper.getQueryParameter('locale') &&
          ((window.phet.chipper.locale =
            phet.chipper.getQueryParameter('locale')),
          phet.chipper.checkAndRemapLocale()),
        (window.phet.chipper.queryParameters =
          window.phet.chipper.queryParameter || {}),
        (window.phet.chipper.queryParameters.homeScreen =
          'false' !== phet.chipper.getQueryParameter('homeScreen')),
        (window.phet.chipper.queryParameters.initialScreen =
          phet.chipper.getQueryParameter('initialScreen')
            ? parseInt(phet.chipper.getQueryParameter('initialScreen'), 10)
            : 0)
    })(),
    (function () {
      var e = 'production' === $('meta[name=phet-sim-level]').attr('content'),
        r = !e && !!phet.chipper.getQueryParameter('eall'),
        t = r || (!e && !!phet.chipper.getQueryParameter('ea'))
      t && window.assertions.enableAssert(),
        r && window.assertions.enableAssertSlow(),
        phet.chipper.getQueryParameter('postMessageOnError') &&
          window.addEventListener('error', function (e, r, t, p, a) {
            var i = '',
              n = ''
            e && e.message && (i = e.message),
              e && e.error && e.error.stack && (n = e.error.stack),
              window.parent &&
                window.parent.postMessage(
                  JSON.stringify({
                    type: 'error',
                    url: window.location.href,
                    message: i,
                    stack: n,
                  }),
                  '*'
                )
          })
    })()
})()
