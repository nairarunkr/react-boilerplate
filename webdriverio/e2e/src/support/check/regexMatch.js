import jsonLookup from '../jsonLookup' // note either works

/**
 * Compare the contents of two elements with each other
 * @param  {String}   element_name  Element selector for the first element
 */
module.exports = (element_name, regexpr_name) => {
  winston.debug(' ')
  winston.debug('element_name ' + element_name)

  var selector = jsonLookup.getSelector(element_name, 'absolute-css-locator')
  var regexpr = jsonLookup.getValueForAttribute(regexpr_name)
  winston.debug('regexpr [' + regexpr + ']')

  /**
   * The text of the first element
   * @type {String}
   */

  var text = ''
  if (browser.getAttribute(selector, 'value') === null) {
    text = browser.getText(selector)
  } else {
    text = browser.getAttribute(selector, 'value')
  }


  if (typeof (text) == 'object') {
    winston.debug('text [' + text[0] + ']')
    winston.debug('Regular Expression : ' + new RegExp(regexpr))
    expect(text[0]).to.match(new RegExp(regexpr))
  }
  else {
    winston.debug('text [' + text + ']')
    winston.debug('Regular Expression : ' + new RegExp(regexpr))
    expect(text).to.match(new RegExp(regexpr))
  }
}
