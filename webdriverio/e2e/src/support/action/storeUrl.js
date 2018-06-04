import world from '../../support/world'

/**
 * store current url 
 */
module.exports = () => {
  var url = browser.url().value
  world.setInitialUrl(url);
}

