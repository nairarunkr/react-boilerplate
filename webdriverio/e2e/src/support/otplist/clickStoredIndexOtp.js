import jsonLookup from '../jsonLookup'
import world from '../../support/world'

module.exports = (element_name) => {
  var selector = jsonLookup.getValueForAttribute(element_name)
  var elem = browser.elements(selector).value
  winston.debug('Retriving Stored OTP Index :' + world.getOTPIndex())
  elem[world.getOTPIndex()].click()
}
