import jsonLookup from '../jsonLookup' // note either works

/**
 * Check if the given elements contains text
 * @param  {String}   element       Element selector
 * @param  {String}   falseCase     Whether to check if the content contains
 *                                  the given text or not
 * @param  {String}   expectedText  The text to check against
 */
module.exports = (element_name, falseCase, expectedText) => {
  var selector = jsonLookup.getSelector(element_name, 'absolute-css-locator')

    /**
     * The command to perform on the browser object
     * @type {String}
     */
  let command = 'getValue'

  if (browser.getAttribute(selector, 'value') === null) {
    command = 'getText' // ah so if it doesn't have a value default to get text
  }

    /**
     * False case
     * @type {Boolean}
     */
  let boolFalseCase

    /**
     * The expected text
     * @type {String}
     */
  let stringExpectedText = expectedText

    /**
     * The text of the element
     * @type {String}
     */

    // TODO do need to include a waitForVisible ?

  const text = browser[command](selector)

  if (typeof expectedText === 'undefined') {
    stringExpectedText = falseCase
    boolFalseCase = false
  } else {
    boolFalseCase = (falseCase === ' not')
  }

  if (boolFalseCase) {
    expect(text).to.not.contain(stringExpectedText)
  } else {
    expect(text).to.contain(stringExpectedText)
  }
}
