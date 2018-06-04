import jsonLookup from '../jsonLookup' // note either works

/**
 * Check if the given element is (not) visible
 * @param  {String}   element_name   Element selector
 * @param  {String}   falseCase Check for a visible or a hidden element
 */
module.exports = (message, falseCase) => {
    /**
     * Visible state of the give element
     * @type {String}
     */
  var element = "//*[contains(text(), '" + message + "')]"

  const isVisible = browser.isVisible(element) // note this has implicit timeout of 0 seconds

  if (falseCase) {
    expect(isVisible).to.not
            .equal(true, `Expected element "${element}" not to be visible`)
  } else {
    expect(isVisible).to
            .equal(true, `Expected element "${element}" to be visible`)
  }
}
