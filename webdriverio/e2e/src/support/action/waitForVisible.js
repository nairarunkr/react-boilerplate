import jsonLookup from '../jsonLookup' // note either works

/**
 * Wait for the given element to become visible
 * @param  {String}   element_name      Element selector
 * @param  {String}   falseCase Whether or not to expect a visible or hidden
 *                              state
 *
 * @todo  merge with waitfor
 */

module.exports = (element_name, falseCase) => {
  winston.debug(' ')
  winston.debug('element ' + element_name)
  winston.debug('falsCase ' + falseCase) // falsCase false = ele should exist

  var element = jsonLookup.getSelector(element_name, 'absolute-css-locator')

  const ms = 5000 // why is this hardcoded here ? shouldn't this be the default set in the conf ?

    // does this shortcut ? i.e. if it becomes visible before max ms
  browser.waitForVisible(element, ms, !!falseCase)
}
