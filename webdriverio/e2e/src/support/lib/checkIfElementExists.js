/**
 * Check if the given element exists in the DOM one or more times
 * @param  {String}  element  Element selector
 * @param  {Boolean} falsCase Check if the element (does not) exists
 * @param  {Number}  exactly  Check if the element exists exactly this number
 *                            of times
 */
module.exports = (element, falsCase, exactly) => {
    /**
     * The number of elements found in the DOM
     * @type {Int}
     */
  winston.debug(' ')
  winston.debug('element ' + element)
  winston.debug('falsCase ' + falsCase) // falsCase false = ele should exist
  winston.debug('exactly ' + exactly)

    // ! the timeout only applies to waitFor steps ?
    // is there no implicit timeout on element or elements ?
    // http://webdriver.io/guide/testrunner/timeouts.html

    // if checking ele exists - wait for ele to exist before counting no of ele's

  if (falsCase === false) {
    winston.debug('waitForExist(' + element + ', 10000)')
    browser.waitForExist(element, 10000)
  } else {
      // browser.waitForExist(selector[,ms][,reverse]);
  }

    // http://webdriver.io/api/protocol/elements.html
    /*
    A session has an associated session implicit wait timeout that specifies a time to wait for the
    implicit element location strategy when locating elements using the element or elements commands.
    Unless stated otherwise it is zero milliseconds.
    You can set this timeout via: browser.timeouts('implicit', 5000);
    */
  const nrOfElements = browser.elements(element).value

    // NOTE falsCase is checking the element should NOT exist
  if (falsCase === true) {
    expect(nrOfElements).to.have.lengthOf(
            0,
            `Element with selector "${element}" should not exist on the page`
        )
  } else if (exactly) {
    expect(nrOfElements).to.have.lengthOf(
            exactly,
            `Element with selector "${element}" should exist exactly ` +
            `${exactly} time(s)`
        )
  } else {
    expect(nrOfElements).to.have.length.of.at.least(
            1,
            `Element with selector "${element}" should exist on the page`
        )
  }
}
