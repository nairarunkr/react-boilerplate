import jsonLookup from '../jsonLookup' // note either works

/**
 * Check if the given elements text is the same as the given text
 * @param  {String}   element       Element selector
 * @param  {String}   falseCase     Whether to check if the content equals the
 *                                  given text or not
 * @param  {String}   expectedText  The text to validate against
 */
module.exports = (element_name, falseCase, textorplaceholder, expectedText) => {
  winston.debug(' ')
  winston.debug('element_name ' + element_name)
  winston.debug('falseCase ' + falseCase)
  winston.debug('textorplaceholder ' + textorplaceholder) 
  winston.debug('expectedText ' + expectedText) 

  var selector = jsonLookup.getSelector(element_name, 'absolute-css-locator')

  /**
   * The command to execute on the browser object
   * @type {String}
   */
  let command = 'getValue'

  if (browser.getAttribute(selector, 'value') === null) {
    command = 'getText'
  }

  /**
   * The expected text to validate against
   * @type {String}
   */
  let parsedExpectedText = expectedText

  /**
   * Whether to check if the content equals the given text or not
   * @type {Boolean}
   */
  let boolFalseCase = !!falseCase

  // Check for empty element
  if (typeof parsedExpectedText === 'function') {
    parsedExpectedText = ''

    boolFalseCase = !boolFalseCase
  }

  if (parsedExpectedText === undefined && falseCase === undefined) {
    parsedExpectedText = ''
    boolFalseCase = true
  }
  var text
  if (textorplaceholder != 'placeholder') {
    text = browser[command](selector)
  } else {
    text = browser.getAttribute(selector, 'placeholder')
  }

  if (boolFalseCase) {
    parsedExpectedText.should.not.equal(text)
  } else {
    parsedExpectedText.should.equal(text)
  }
}
