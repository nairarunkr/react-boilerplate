import jsonLookup from '../jsonLookup' // note either works

/**
 * Scroll the page to the given element
 * @param  {String}   selector Element selector
 */
module.exports = (selector) => {
  selector = jsonLookup.getSelector(selector, 'absolute-css-locator')
  browser.scroll(selector)
}
