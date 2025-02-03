!(function () {
  'use strict'
  function e() {
    function e(e) {
      var t = document.createElement('img')
      t.src = e
    }
    function t() {
      ga4DataLayer.push(arguments)
    }
    function a() {
      window.dataLayer.push(arguments)
    }
    var o = !1
    window.addEventListener(
      'error',
      function (e) {
        e &&
          e.target &&
          e.target.src &&
          e.target.src.indexOf &&
          e.target.src.indexOf('google-analytics') >= 0 &&
          (o = !0)
      },
      !0
    )
    var r =
      'pingver=3&project=' +
      encodeURIComponent(phet.chipper.project) +
      '&brand=' +
      encodeURIComponent(phet.chipper.brand) +
      '&version=' +
      encodeURIComponent(phet.chipper.version) +
      '&locale=' +
      encodeURIComponent(phet.chipper.locale) +
      '&buildTimestamp=' +
      encodeURIComponent(phet.chipper.buildTimestamp) +
      '&domain=' +
      encodeURIComponent(document.domain) +
      '&href=' +
      encodeURIComponent(window.location.href) +
      '&type=html&timestamp=' +
      encodeURIComponent(Date.now()) +
      '&loadType=' +
      encodeURIComponent(n) +
      '&ref=' +
      encodeURIComponent(document.referrer)
    if (
      (new URLSearchParams(window.location.search).forEach(function (e, t) {
        t.startsWith('yotta') &&
          (r += '&' + encodeURIComponent(t) + '=' + encodeURIComponent(e))
      }),
      e('https://phet.colorado.edu/yotta/immediate.gif?' + r),
      window.addEventListener(
        'load',
        function (t) {
          e(
            'https://phet.colorado.edu/yotta/sanity.gif?' +
              r +
              '&gaError=' +
              encodeURIComponent(o) +
              '&gaLoaded=' +
              encodeURIComponent(!1)
          )
        },
        !1
      ),
      phet.chipper.getQueryParameter('ga4'))
    ) {
      ;(window.ga4DataLayer = window.ga4DataLayer || []),
        t('js', new Date()),
        t('consent', 'default', {
          ad_storage: 'denied',
          analytics_storage: 'granted',
        }),
        t('consent', 'default', {
          ad_storage: 'denied',
          analytics_storage: 'denied',
          region: [
            'BE',
            'BG',
            'CZ',
            'DK',
            'CY',
            'LV',
            'LT',
            'LU',
            'ES',
            'FR',
            'HR',
            'IT',
            'PL',
            'PT',
            'RO',
            'SI',
            'HU',
            'MT',
            'NL',
            'AT',
            'IS',
            'LI',
            'NO',
            'SK',
            'FI',
            'SE',
            'DE',
            'EE',
            'IE',
            'EL',
            'GB',
            'CH',
          ],
        }),
        t('config', phet.chipper.getQueryParameter('ga4'))
      var p = document.getElementsByTagName('script')[0],
        i = document.createElement('script')
      ;(i.async = !0),
        (i.src =
          'https://www.googletagmanager.com/gtag/js?id=' +
          phet.chipper.getQueryParameter('ga4') +
          '&l=ga4DataLayer'),
        p.parentNode.insertBefore(i, p)
    }
    ;(window.dataLayer = window.dataLayer || []),
      a('consent', 'default', {
        ad_storage: 'denied',
        analytics_storage: 'granted',
      }),
      a('consent', 'default', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
        region: [
          'BE',
          'BG',
          'CZ',
          'DK',
          'CY',
          'LV',
          'LT',
          'LU',
          'ES',
          'FR',
          'HR',
          'IT',
          'PL',
          'PT',
          'RO',
          'SI',
          'HU',
          'MT',
          'NL',
          'AT',
          'IS',
          'LI',
          'NO',
          'SK',
          'FI',
          'SE',
          'DE',
          'EE',
          'IE',
          'EL',
          'GB',
          'CH',
        ],
      }),
      window.dataLayer.push({
        simBrand: phet.chipper.brand,
        simName: phet.chipper.project,
        simVersion: phet.chipper.version,
        simLocale: phet.chipper.locale,
        simBuildTimestamp: phet.chipper.buildTimestamp,
        simLoadType: n,
        documentReferrer: document.referrer,
      }),
      (function (e, t, a, n, o) {
        ;(e[n] = e[n] || []),
          e[n].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js',
          })
        var r = t.getElementsByTagName(a)[0],
          p = t.createElement(a),
          i = 'dataLayer' != n ? '&l=' + n : ''
        ;(p.async = !0),
          (p.src = 'https://www.googletagmanager.com/gtm.js?id=' + o + i),
          r.parentNode.insertBefore(p, r)
      })(window, document, 'script', 'dataLayer', 'GTM-WLNGBXD')
  }
  if ('false' !== phet.chipper.getQueryParameter('yotta')) {
    var t = navigator.userAgent,
      a = !!(t.match(/MSIE/) || t.match(/Trident\//) || t.match(/Edge\//))
    if (
      !(
        ('file:' === window.location.protocol && a) ||
        ('phet' !== phet.chipper.brand && 'phet-io' !== phet.chipper.brand)
      )
    ) {
      var n
      ;(n = phet.chipper.getQueryParameter('phet-app')
        ? 'phet-app'
        : phet.chipper.getQueryParameter('phet-android-app')
        ? 'phet-android-app'
        : top !== self
        ? 'embedded'
        : 'default'),
        'phet-app' === n
          ? window.addEventListener(
              'load',
              function () {
                setTimeout(e, 0)
              },
              !1
            )
          : e()
    }
  }
})()
