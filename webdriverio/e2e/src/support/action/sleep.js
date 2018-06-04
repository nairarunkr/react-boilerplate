
/**
 * Wait for the given element to become visible
 * @param  {String}   ms
 */
module.exports = (ms) => {
  winston.debug(' ')
  browser.pause(ms * 1000)
}
