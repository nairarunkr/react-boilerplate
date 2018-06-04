import jsonLookup from '../jsonLookup' // note either works

/**
 * Wait for the given element to become visible
 * @param  {String}   element_name      Element selector
 * @param  {String}   falseCase Whether or not to expect a visible or hidden
 *                              state
 * @param  {String}   ms      Maximum number of milliseconds to wait for
 * @todo  merge with waitfor
 */
module.exports = (element_name, falseCase, ms) => {
  winston.debug(' ')
  winston.debug('element ' + element_name)
  winston.debug('falsCase ' + falseCase) // falsCase false = ele should exist
  winston.debug('ms ' + ms)

  var element = jsonLookup.getSelector(element_name, 'absolute-css-locator')
  ms = parseInt(ms)
  ms = ms * 1000
  winston.debug(ms)

  browser.pause(ms)
  browser.waitForVisible(element, !!falseCase) // note error message becomes misleading
  expect(true).to.be.false
}
