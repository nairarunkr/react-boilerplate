/**
 * Check if the given string is in the URL path
 * @param  {String}   falseCase       Whether to check if the given string is in
 *                                    the URL path or not
 * @param  {String}   expectedUrlPart The string to check for
 */
module.exports = (falseCase, expectedUrlPart) => {
    /**
     * The URL of the current browser window
     * @type {String}
     */
  const currentUrl = browser.url().value

  // short term hack if bds is in the expectedUrlPart replace with bdsr
  // hack so we don't have to replace all hardcoded instances of bds in feature files with bdsr
  // e.g. /bds/#/launch replace bds with bdsrreplace
  winston.debug(browser.options.JsonFile)
  if(browser.options.JsonFile === 'allpagesr') {
    expectedUrlPart = expectedUrlPart.replace('bds','bdsr')
  }

  
  if (falseCase) {
    expect(currentUrl).to.not
            .contain(
                expectedUrlPart,
                `Expected URL "${currentUrl}" not to contain ` +
                `"${expectedUrlPart}"`
            )
  } else {
    expect(currentUrl).to
            .contain(
                expectedUrlPart,
                `Expected URL "${currentUrl}" to contain "${expectedUrlPart}"`
            )
  }
}
