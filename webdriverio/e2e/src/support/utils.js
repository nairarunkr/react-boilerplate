import jsonLookup from './jsonLookup' // note either works

var moment_timezone = require('moment-timezone');
var colors = require('./colors.json')
var fp = require('path')

var utils = {

  deleteDirRecursive (path) {
    console.log('path' + path)
    var fs = require('fs')
    fs.readdirSync(path).forEach(function (file) {
      console.log(file)
      var curPath = fp.join(path, file)
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        utils.deleteDirRecursive(curPath)
      } else { // delete file
        fs.unlinkSync(curPath)
      }
    })
    fs.rmdirSync(path)
  },

  mkDir (dirName) {
    try {
      var fs = require('fs')
      fs.mkdirSync(dirName)
      console.log('mkdir' + dirName)
    } catch (e) {
      if (e.code != 'EEXIST') {
        throw e
      } else {
        console.log('Directory already exists: ' + dirName)
      }
    }
  },

  getScenarioTags (scenario) {
    var tags = ''
    scenario.getTags().forEach(function (tag) {
      tags = tags + ' ' + tag.getName()
    })
    return tags
  },

  saveToFile (fileName, content) {
    var fs = require('fs')
    var wstream = fs.createWriteStream('./e2e/reports/' + fileName)
    wstream.write(content)
    wstream.end()
    console.log('wrote html to ' + fileName)
  },

  addKerebosTickets: function () {
    // HACK - if a new usr is used in a test the ticket has to be added here
    var cmd = 'kinit --password-file=$BDS_APP_PATH/e2e/kinit/kinitpword.txt CSPUsr26@GLOBALTEST.ANZ.COM'
    // utils.runCommandOnTerminal(cmd);
    var cmd = 'kinit --password-file="$BDS_APP_PATH/e2e/kinit/kinitpword.txt" CSPUsr21@GLOBALTEST.ANZ.COM'
    // utils.runCommandOnTerminal(cmd);
  },

  getColorNameFromRgba: function (rgba) {
    var hex = this.convertRgbaToHex(rgba)
    return colors[hex]
  },

  convertRgbaToHex: function (rgb) {
    rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)
    return (rgb && rgb.length === 4) ? '#' +
      ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
      ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
      ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : ''
  },

  convertToTitleCase: function (str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  },

  /**
   * dateString param e.g. 16/04/2017
   * returns e.g 16 Apr 2017
   */
  customDateDdMmmYyyy: function (dateString) {
    var arr = dateString.split('/')
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var i = 0
    console.log('Month' + ' ' + arr[1]) // 0
    console.log('Day' + ' ' + arr[0]) // 1
    console.log('Year' + ' ' + arr[2]) // 2
    for (i; i < months.length; i++) {
      console.log(i + ' ' + months[i])
      console.log('array value :' + arr[0])
      if (i + 1 == arr[1]) {
        console.log(i + 1 + ' ' + months[i])
        break
      }
    }
    var formatddate = arr[0] + ' ' + months[i] + ' ' + arr[2]
    console.log('formatddate' + formatddate)
    return formatddate
  },

  leadingZero: function (value) {
    if (value < 10) {
      return '0' + value.toString()
    }
    return value.toString()
  },

  convertTextIndexToNumber: function (text) {
    var textToIndexNumber =
      {
        'first': 0,
        'second': 1,
        'third': 2,
        'fourth': 3,
        'fifth': 4,
        'sixth': 5,
        'seventh': 6,
        'eighth': 7,
        'ninth': 8,
        'tenth': 9
      }
    return textToIndexNumber[text]
  },

  convertNumberToMonth: function (text) {
    var numberToMonth =
      {
        '01': 'Jan',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'May',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Aug',
        '09': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec'
      }
    return numberToMonth[text]
  },

  getProductCode: function (accountType) {
    // note pass in accountType in actual fact is product code + sub product codes DDA/CB, COO so split
    var arr = accountType.split('/')
    var productCode = arr[0]
    return productCode
  },

  getAccountIdFromTray: function () {
    var element_name = 'account details tray - account no'
    var selector = jsonLookup.getSelector(element_name, 'absolute-css-locator')

    var accountId = browser.getText(selector)
    winston.debug('getAccountIdFromTray() ' + accountId)
    accountId = accountId.replace(/\s/g, '')  // credit card number is also an account id - remove blanks
    return accountId
  },


  getDDMMYYYDateRelativeToToday: function (dateRelativeToday) {
    
    var dateTimeString;
    var date;
    switch(dateRelativeToday) {
      case "today":
        dateTimeString = new Date()
      break;
      case "today -1":
        date = new Date()
        dateTimeString = date.setDate( date.getDate() - 1); 
      break;
      case "today -6":
        date = new Date()
        dateTimeString = date.setDate( date.getDate() - 6); 
      break;
      default:
     
      break;
    }
    winston.debug('dateTimeString' + dateTimeString)
    var dt = moment_timezone(dateTimeString);
    dt.tz('Australia/Melbourne')
    var dd = utils.leadingZero(dt.date());
    var mm = utils.leadingZero(dt.month() + 1);
    var yyyy = dt.year();
    winston.debug(dd + '/' + mm + '/' + yyyy);
    return dd + '/' + mm + '/' + yyyy
  },
 

}

module.exports = utils
