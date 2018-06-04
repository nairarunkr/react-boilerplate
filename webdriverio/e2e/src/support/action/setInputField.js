import checkIfElementExists from '../lib/checkIfElementExists'

// import jsonLookup from '../jsonLookup'; // note either works
var jsonLookup = require('../jsonLookup')

/**
 * Set the value of the given input field to a new value or add a value to the
 * current element value
 * @param  {String}   method  The method to use (add or set)
 * @param  {String}   value   The value to set the element to
 * @param  {String}   element Element selector <- ? so why not name it selector ?
 */
module.exports = (method, value, element_name) => {
    /**
     * The command to perform on the browser object (addValue or setValue)
     * @type {String}
     */

  var element = jsonLookup.getSelector(element_name, 'absolute-css-locator')

  const command = (method === 'add') ? 'addValue' : 'setValue'

  let checkValue = value

  checkIfElementExists(element, false, 1)

  if (!value) {
    checkValue = ''
  }

  browser[command](element, checkValue)
}
