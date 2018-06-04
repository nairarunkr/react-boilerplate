import checkContainsAnyText from './checkContainsAnyText'
import jsonLookup from '../jsonLookup' // note either works

module.exports = (element, falseCase) => {
  let newFalseCase = true

  if (typeof falseCase === 'function') {
    newFalseCase = false
  } else if (falseCase === ' not') {
    newFalseCase = false
  }

  checkContainsAnyText(element, newFalseCase)
}
