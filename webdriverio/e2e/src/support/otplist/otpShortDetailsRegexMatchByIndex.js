import jsonLookup from '../jsonLookup'
import world from '../../support/world'

module.exports = (element_name, regexpr_name) => {

  winston.debug(' ')
  winston.debug('element_name ' + element_name)
  winston.debug('regexpr_name ' + regexpr_name)

  var selector = jsonLookup.getSelector(element_name, 'absolute-css-locator')
  var regexpr = jsonLookup.getValueForAttribute(regexpr_name)
  winston.debug('regexpr [' + regexpr + ']')

  var text = ''
  if (typeof (text) == 'object') {
    winston.debug('text [' + text[world.getOTPIndex()] + ']')
    winston.debug('Regular Expression : ' + new RegExp(regexpr))
    expect(text[world.getOTPIndex()]).to.match(new RegExp(regexpr))
  }
  else {
    winston.debug('text [' + text + ']')
    winston.debug('Regular Expression : ' + new RegExp(regexpr))
    expect(text).to.match(new RegExp(regexpr))
  }
}