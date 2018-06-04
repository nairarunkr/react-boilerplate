/**
 * Open the given URL
 * @param  {String}   type Type of navigation (url or site)
 * @param  {String}   page The URL to navigate to
 */
module.exports = (type, page) => {
    /**
     * The URL to navigate to
     * @type {String}
     */

    // note page is passed in as suffix to the baseUrl ( e.g. "/#/launch",)
    // type - only 2 options url|site
    // e.g. Given I open the url ( page : is absolute url )
    // e.g. Given I open the site
  console.log('type' + type)
  console.log('browser.options.baseUrl' + browser.options.baseUrl)
  console.log('page' + page)

  // hack so we don't have to replace all hardcoded instances of bds in feature files with bdsr
  // e.g. /bds/#/launch replace bds with bdsrreplace
  winston.debug(browser.options.JsonFile)
  if(browser.options.JsonFile === 'allpagesr') {
    page = page.replace('bds','bdsr');
  }
  
  const url = (type === 'url') ? page : browser.options.baseUrl + page
  browser.url(url)
}
