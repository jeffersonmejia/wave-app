!(function () {
  'use strict'
  ;(window.assertions = window.assertions || {}),
    (window.assertions.assertFunction =
      window.assertions.assertFunction ||
      function (o, n) {
        var s = 'function' == typeof o ? o() : o
        if (!s) {
          if (
            window.navigator &&
            'Microsoft Internet Explorer' === window.navigator.appName
          )
            try {
              throw new Error()
            } catch (w) {
              n = n + ', stack=\n' + w.stack
            }
          throw (
            (console && console.log && console.log('Assertion failed: ' + n),
            new Error('Assertion failed: ' + n))
          )
        }
      }),
    (window.assert = window.assert || null),
    (window.assertSlow = window.assertSlow || null),
    (window.assertions.enableAssert = function () {
      ;(window.assert = window.assertions.assertFunction),
        window.console &&
          window.console.log &&
          window.console.log('enabling assert')
    }),
    (window.assertions.disableAssert = function () {
      ;(window.assert = null),
        window.console &&
          window.console.log &&
          window.console.log('disabling assert')
    }),
    (window.assertions.enableAssertSlow = function () {
      ;(window.assertSlow = window.assertions.assertFunction),
        window.console &&
          window.console.log &&
          window.console.log('enabling assertSlow')
    }),
    (window.assertions.disableAssertSlow = function () {
      ;(window.assertSlow = null),
        window.console &&
          window.console.log &&
          window.console.log('disabling assertSlow')
    })
})()
