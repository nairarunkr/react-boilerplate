import jsonLookup from '../jsonLookup' // note either works

/**
 * Check if the given element exists in the current DOM
 * @param  {String}   selector  Element selector
 * @param  {String}   falseCase Whether to check if the element exists or not
 */
module.exports = (selector, falseCase) => {
    /**
     * Elements found in the DOM
     * @type {Object}
     */

    // NOTE - there's no timeout on this check
  selector = jsonLookup.getSelector(selector, 'absolute-css-locator')
  const elements = browser.elements(selector).value

  if (falseCase) {
    expect(elements).to.have
            .lengthOf(0, `Expected element "${selector}" not to exist`)
  } else {
    expect(elements).to.have.length
            .above(0, `Expected element "${selector}" to exist`)
  }
}
