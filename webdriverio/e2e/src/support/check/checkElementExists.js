import checkIfElementExists from '../lib/checkIfElementExists'
import jsonLookup from '../jsonLookup' // note either works

/**
 * Check if the given element exists
 * @param  {String}   isExisting Whether the element should be existing or not
 *                               (an or no)
 * @param  {String}   elem       Element selector
 */
module.exports = (isExisting, elem) => {
    /**
     * Falsecase assertion
     * @type {Boolean}
     */
  let falseCase = true

  if (isExisting === 'an') {
    falseCase = false
  }

    // what is the default timeout on this ?
  checkIfElementExists(elem, falseCase)
}
