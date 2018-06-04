import jsonLookup from '../jsonLookup'
import world from '../../support/world'

/**
 * KANNAN OR KARTHIK TODO - put in a description
 *
 * @param  {String}   index       
 * @param  {String}   element_name       
 */

module.exports = (index, obsolete, element_name) => {
  winston.debug(' ')
  winston.debug('index ' + index)
  winston.debug('element_name' + element_name)

  var selector = jsonLookup.getValueForAttribute(element_name)
  winston.debug('SELECTOR :' + selector)
  var otplist = browser.elements(selector).value
  var count_of_otps_on_page = otplist.length
  winston.debug('count_of_otps_on_page : ' + count_of_otps_on_page)
  expect(count_of_otps_on_page > 0, 'no "' + element_name + '" otp in otps list').to.be.true

  var otpindex = otplist[index - 1].getAttribute('data-test-id')
  winston.debug('otpindex : ' + otpindex)
  world.setOTPIndex(otpindex.charAt(otpindex.length - 1))
  winston.debug('INDEX Set was :' + world.getOTPIndex())

}
