import world from '../../support/world'

/**
 * Check the URL of the browser window against url stored on world
 */
module.exports = () => {
  var url = browser.url().value
  expect(world.getInitialUrl()).to.equal(url)
}
