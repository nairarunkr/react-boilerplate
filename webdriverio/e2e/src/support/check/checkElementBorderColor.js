import jsonLookup from '../jsonLookup' 
import colors from '../../support/colors.json'

/**
 * Check the element border-color or background-color 
 * 
 * @param  {String}   element_name   Element selector
 * @param  {String}   tag // e.g. border-color or background-color 
 * @param  {String}   color
 */

module.exports = (element_name, tag, color) => {
  winston.debug(' ')
  winston.debug('element_name ' + element_name)
  winston.debug('tag ' + tag)
  winston.debug('color ' + color)

  var colorAsHex = colors[color.toUpperCase()]
  var selector = jsonLookup.getSelector(element_name, 'absolute-css-locator')
  var element = browser.elements(selector)

  winston.debug(element.getCssProperty(tag))
  var property = element.getCssProperty(tag)
  winston.debug('property ' + property)
  expect(property.parsed.hex.toUpperCase()).equals(colorAsHex)
}

/*
this.When(/^I should see the "([^"]*)" has the css tag "([^"]*)" with value "([^"]*)"$/, function (element_name, tag, color, next) {
    var colorAsHex = colors[color.toUpperCase()];
    expect(web_element.getElementUsing(element_name, 'absolute-css-locator').getCssValue(tag).then(function (colorAsRgba) {
      var hex = utils.convertRgbaToHex(colorAsRgba); // color is rgba
      return hex.toUpperCase();
    })).to.eventually.equal(colorAsHex).should.notify(next);
  });
*/
