var colors = require('./colors.json')
var fp = require('path')

var index = 0
var countOfCasesInCaseList = 0
var txnAmount = ''
var caseID = ''
var accno = ''
var txnsOnPageList = ''
var cisid = ''
var customer_name = ''
var otpindex = ''
var count = 0
var countOfTxns = 0
var countOfCasesInCircle = ''
var initialUrl = ''
var notificationValue = ''
var contactValue = ''
var emailID = ''

var world = {

  setIndex(index) {
    this.index = index
    winston.debug(index)
    winston.debug(this.index)
  },

  getIndex() {
    return this.index
  },

  setCountOfCasesInCaseList(count) {
    this.countOfCasesInCaseList = count
  },

  getCountOfCasesInCaseList() {
    return this.countOfCasesInCaseList
  },

  getTxnAmount() {
    return this.txnAmount
  },

  setTxnAmount(txnAmount) {
    this.txnAmount = txnAmount
  },

  setCaseID(caseID) {
    this.caseID = caseID
  },

  getCaseID() {
    return this.caseID
  },

  setNotifAccno(accno) {
    this.accno = accno
  },

  getNotifAccno() {
    return this.accno
  },

  // CODE REVIEW - rename this to something more specific txns on page list is vague
  getTxnsOnPageList() {
    expect(this.txnsOnPageList).to.not.be.undefined
    return this.txnsOnPageList
  },

  setTxnsOnPageList(txnList) {
    expect(txnList).to.not.be.undefined
    this.txnsOnPageList = txnList
  },

  setCisID(cisid) {
    this.cisid = cisid
  },

  getCisID() {
    return this.cisid
  },

  setCustomerName(customer_name) {
    this.customer_name = customer_name
  },

  getCustomerName() {
    return this.customer_name
  },

  getOTPIndex() {
    return this.otpindex
  },

  setOTPIndex(otpindex) {
    this.otpindex = otpindex
  },

  getCountOfTransUnderExpectedAmount() {
    return this.countOfTxnsUnderExpectedAmount
  },

  setCountOfTransUnderExpectedAmount(count) {
    this.countOfTxnsUnderExpectedAmount = count
  },

  getCountOfTrans() {
    return this.countOfTxns
  },

  setCountOfTrans(count) {
    this.countOfTxns = count
  },

  setCountOfCasesInCircle(countOfCasesInCircle) {
    this.countOfCasesInCircle = countOfCasesInCircle
  },

  getCountOfCasesInCircle() {
    return this.countOfCasesInCircle
  },

  setInitialUrl(url) {
    this.initialUrl = url
  },

  getInitialUrl() {
    return this.initialUrl
  },

  setNotificationValue(notificationValue) {
    this.notificationValue = notificationValue
  },

  getNotificationValue() {
    return this.notificationValue
  },

  setContactValue(contactValue) {
    this.contactValue = contactValue
  },

  getContactValue() {
    return this.contactValue
  },

  setEmailId(emailID) {
    this.emailID = emailID
  },

  getEmailID() {
    return this.emailID
  },

}

module.exports = world
