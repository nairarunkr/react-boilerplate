

var getPageJson = function (page) {
  return require('../definitions/pages/' + page + '.json')
}

var jsonLookup = {

  getValueForAttribute: function (attribute) {
    var json_file_name = browser.options.JsonFile // angular or react selectors json 
    return getPageJson(json_file_name)[attribute]
  },

  // NOTE if all selectors are to be explicit in json file as either css or xpath we can
  // refactor this to only these 2 lines 
  //var json_file_name = browser.options.JsonFile // angular or react selectors json 
  //return getPageJson(json_file_name)[attribute]
  getSelector: function (element_name, selector) {
    var locator = this.getValueForAttribute(element_name) // rename locator to json value
    var css // rename this to locator
    switch (selector.toLowerCase()) {
      case 'binding':
        var binding = locator
        winston.debug('getElement using ' + binding)
        // return element(by.binding(binding));
        break
      case 'data-test-id':
        css = '[data-test-id="' + locator + '"]'
        winston.debug('getElement using ' + css)
        // return element(by.css(css));
        break
      case 'css':
        css = locator
        winston.debug('getElement using ' + css)
        // return element(by.css(css));
        break
      case 'xpath':
        var xpath = locator
        winston.debug('getElement using ' + xpath)
        // return element(by.xpath(xpath));
        css = xpath
        break
      case 'id':
        css = '[id="' + locator + '"]'
        winston.debug('getElement using ' + css)
        // return element(by.css(css));
        break
      case 'class':
        css = '[class="' + locator + '"]'
        winston.debug('getElement using ' + css)
        // return element(by.css(css));
        break
      case 'linktext':
        // TODO
        // return element(by.linkText(locator));
        break
      case 'name':
        // TODO
        // return browser.findElement(by.name(locator)); // why is this diff ?
        break
      case 'type':
        css = '[type="' + locator + '"]'
        winston.debug('getElement using ' + css)
        break
      case 'absolute-css-locator':
        css = locator
        winston.debug('getElement using absolute-css-locator' + css)
        break
      default:
        throw ('Unknown selector specified.')
        break
    }
    return css
  }
}

module.exports = jsonLookup
