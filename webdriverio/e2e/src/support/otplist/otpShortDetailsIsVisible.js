import jsonLookup from '../jsonLookup'
import world from '../../support/world'

module.exports = (element_name, falseCase) => {
  var identified_element = browser.elements(jsonLookup.getValueForAttribute('OTP short details')).value[world.getOTPIndex()]
  // var identified_element = otpscount[world.getOTPIndex()]

  const isVisible = browser.isVisible(identified_element)

  if (falseCase) {
    expect(isVisible).to.not
      .equal(true, `Expected element "${identified_element}" not to be visible`)
  } else {
    expect(isVisible).to
      .equal(true, `Expected element "${identified_element}" to be visible`)
  }
}