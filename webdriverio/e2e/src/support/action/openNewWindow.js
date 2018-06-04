module.exports = (page) => {
  var url = browser.options.baseUrl + '/' + page
  browser.newWindow(url)
}
