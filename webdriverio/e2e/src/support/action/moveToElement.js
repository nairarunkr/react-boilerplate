import jsonLookup from '../jsonLookup' // note either works

/**
 * Move to the given element with an optional offset on a X and Y position
 * @param  {String}   element  Element selector
 * @param  {String}   x        X coordinate to move to
 * @param  {String}   y        Y coordinate to move to
 */
module.exports = (element_name, x, y) => {

  winston.debug('element_name ' + element_name)
  var selector = jsonLookup.getValueForAttribute(element_name)

    /**
     * X coordinate
     * @type {Int}
     */
  const intX = parseInt(x, 10) || undefined

    /**
     * Y coordinate
     * @type {Int}
     */
  const intY = parseInt(y, 10) || undefined

  winston.debug('intX' + intX)
  winston.debug('intY' + intY)

  browser.moveToObject(selector, intX, intY)
}
