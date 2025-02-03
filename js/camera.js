!(function () {
  'use strict'
  var e = window.phet.chipper.getQueryParameter('gameUpLogging'),
    a = window.phet.chipper.getQueryParameter('gameUp'),
    t = function (a) {
      e && console.log(a)
    }
  if (a) {
    t('Enabled Game Up Camera')
    var n = '.brainpop.com',
      i = !1,
      o = 0,
      r = function () {
        !i &&
          10 > o &&
          (parent.postMessage('captureReady', '*'),
          o++,
          t('Posted captureReady, number of checks: ' + o),
          setTimeout(r, 1e3))
      },
      p = function (e) {
        if (-1 !== e.origin.indexOf(n, e.origin.length - n.length))
          if ('captureImage' === e.data) {
            var a = window.phet.joist.ScreenshotGenerator.generateScreenshot(
              window.phet.joist.sim,
              'image/jpeg'
            )
            s(a, e.origin, e.source), t('Sent image')
          } else
            'GameUpCaptureReady' === e.data &&
              (t('GameUpCaptureReady'), (i = !0))
      },
      s = function (e, a, t) {
        ;(e = e.replace('data:image/jpeg;base64,', '')), t.postMessage(e, a)
      }
    window.addEventListener
      ? window.addEventListener('message', p, !1)
      : window.attachEvent && window.attachEvent('onmessage', p),
      r()
  }
})()
