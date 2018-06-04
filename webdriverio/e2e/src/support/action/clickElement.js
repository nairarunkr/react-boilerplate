import checkIfElementExists from '../lib/checkIfElementExists'
// import jsonLookup from '../jsonLookup';
var jsonLookup = require('../jsonLookup')

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   element Element selector
 */
module.exports = (action, type, element_name) => {
    /**
     * Element to perform the action on
     * @type {String}
     */
  winston.debug('action ' + action)
  winston.debug('type ' + type)
  winston.debug('element ' + element_name)

  var element = jsonLookup.getSelector(element_name, 'absolute-css-locator')
  const elem = (type === 'link') ? `=${element}` : element

    /**
     * The method to call on the browser object
     * @type {String}
     */
  const method = (action === 'click') ? 'click' : 'doubleClick'

  checkIfElementExists(elem)

  browser[method](elem)
}
