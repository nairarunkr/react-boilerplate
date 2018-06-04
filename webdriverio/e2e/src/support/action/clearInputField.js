import jsonLookup from '../jsonLookup' // note either works

/**
 * Clear a given input field (placeholder for WDIO's clearElement)
 * @param  {String}   element Element selector
 */
module.exports = (element) => {
  element = jsonLookup.getValueForAttribute(element)
  browser.clearElement(element)
}
