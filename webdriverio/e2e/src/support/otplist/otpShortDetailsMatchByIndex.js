import jsonLookup from '../jsonLookup'
import world from '../../support/world'

module.exports = (element_name, text) => {
  var otpscount = browser.elements(jsonLookup.getValueForAttribute('OTP short details')).value.length;
  var identified_element = otpscount[world.getOTPIndex()];
  var otpshortdetails_text = identified_element.getText(jsonLookup.getValueForAttribute(element_name))
  console.log('TEXTTEXT:' + text);
  expect(text).to.be.equal(otpshortdetails_text);
}