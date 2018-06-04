/**
 * 
 * @param  {String}   ms
 */
module.exports = (ms) => {
  winston.debug(' ')
  //winston.debug('browser.options.cucumberOpts.timeout ' + browser.options.cucumberOpts.timeout )
  browser.options.cucumberOpts.timeout = (ms * 1000)
  winston.debug('browser.options.cucumberOpts.timeout ' + browser.options.cucumberOpts.timeout )
}