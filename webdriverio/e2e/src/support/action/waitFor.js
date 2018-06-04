import jsonLookup from '../jsonLookup' // note either works

/**
 * Wait for the given element to be checked, enabled, selected, visible, contain
 * a text, contain a value or to exist
 * @param  {String}   element_name                     Element selector
 * @param  {String}   ms                       Wait duration (optional)
 * @param  {String}   falseState               Check for opposite state
 * @param  {String}   state                    State to check for (default
 *                                             existence)
 */
module.exports =
(element_name, ms, falseState, state) => {
    /**
     * Maximum number of milliseconds to wait, default 3000
     * @type {Int}
     */
  winston.debug(' ')
  winston.debug(' element ' + element_name)
  winston.debug('falseState ' + falseState + ' !!falseState ' + !!falseState)
  winston.debug('state ' + state)

  var element = jsonLookup.getSelector(element_name, 'absolute-css-locator')

  const intMs = parseInt(ms, 10) || 3000 // 30 seconds exceeds the cucumber step def timeout see conf

    /**
     * Command to perform on the browser object
     * @type {String}
     */
  let command = 'waitForExist'

    /**
     * Boolean interpretation of the false state
     * @type {Boolean}
     */
  let boolFalseState = !!falseState

    /**
     * Parsed interpretation of the state
     * @type {String}
     */
  let parsedState = ''

  if (falseState || state) {
    parsedState = state.indexOf(' ') > -1
            ? state.split(/\s/)[state.split(/\s/).length - 1]
            : state

        // Check box checked state translates to selected state
    if (parsedState === 'checked') {
      parsedState = 'selected'
    }

    if (parsedState) {
      command = `waitFor${parsedState[0].toUpperCase()}` +
                `${parsedState.slice(1)}`
    }
  }

  if (typeof falseState === 'undefined') {
    boolFalseState = false
  }

  browser[command](element, intMs, boolFalseState)
}
