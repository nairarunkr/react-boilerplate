import world from '../../support/world'

/**
 * stores an Indexed OTP related to the status and otp type
 *
 * @param  {String}   index       
 * @param  {String}   element_name_status
 * @param  {String}   element_name_otptype       
 */


module.exports = (index, obsolete, element_name_status, element_name_otptype) => {
  winston.debug('(.//div[contains(@data-test-id,"otp-type-") and contains(text(),"' + element_name_otptype + '")]/following-sibling::div[contains(@data-test-id,"otp-status-") and contains(text(),"' + element_name_status + '")])');
  var otplist = browser.elements('(.//div[contains(@data-test-id,"otp-type-") and contains(text(),"' + element_name_otptype + '")]/following-sibling::div[contains(@data-test-id,"otp-status-") and contains(text(),"' + element_name_status + '")])').value;
  var count_of_otps_on_page = otplist.length
  winston.debug("count_of_otps_on_pagecount_of_otps_on_page  " + count_of_otps_on_page);
  expect(count_of_otps_on_page > 0, 'no otps in otp list').to.be.true;
  var otpindex = otplist[index].getAttribute('data-test-id')
  world.setOTPIndex(otpindex.charAt(otpindex.length - 1))
  winston.debug('INDEX Set was :' + world.getOTPIndex());
}