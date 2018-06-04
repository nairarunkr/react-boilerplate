import jsonLookup from '../jsonLookup'

/**
 * Check the select list ele has an option as expected
 * @param  {String}   element_name  Element selector for the first element
 * @param  {String}   option  text of the option expected in the select list
 */
module.exports = (element_name, option) => {
  var selector = jsonLookup.getSelector(element_name, 'absolute-css-locator')

  var text = browser.getText(selector)
  winston.debug('browser.getText(selector) [' + text + ']')
  expect(text).to.include(option)
}
