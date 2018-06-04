exports.config = {
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the
  // directory from which `wdio` was called. Notice that, if you are calling
  // `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script)
  // then the current working directory is where your package.json resides, so
  // `wdio` will be called from there.
  //
  specs: [
    './src/features/**/*Book*.feature'
  ],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities
  // at the same time. Depending on the number of capabilities, WebdriverIO
  // launches several test sessions. Within your capabilities you can
  // overwrite the spec and exclude options in order to group specific specs
  // to a specific capability.
  //
  // First, you can define how many instances should be started at the same
  // time. Let's say you have 3 different capabilities (Chrome, Firefox, and
  // Safari) and you have set maxInstances to 1; wdio will spawn 3 processes.
  // Therefore, if you have 10 spec files and you set maxInstances to 10, all
  // spec files will get tested at the same time and 30 processes will get
  // spawned. The property handles how many capabilities from the same test
  // should run tests.
  //
  maxInstances: 1,
  //
  // If you have trouble getting all important capabilities together, check
  // out the Sauce Labs platform configurator - a great tool to configure your
  // capabilities: https://docs.saucelabs.com/reference/platforms-configurator
  //
  capabilities: [{
    // maxInstances can get overwritten per capability. So if you have an
    // in-house Selenium grid with only 5 firefox instance available you can
    // make sure that not more than 5 instance gets started at a time.
    maxInstances: 1,
    //
    browserName: 'chrome'
  }],
  JsonFile: 'allpages',
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // By default WebdriverIO commands are executed in a synchronous way using
  // the wdio-sync package. If you still want to run your tests in an async
  // way e.g. using promises you can set the sync option to false.
  sync: true,
  //
  // Level of logging verbosity: silent | verbose | command | data | result |
  // error
  logLevel: 'error',
  //
  // Enables colors for log output.
  coloredLogs: true,
  //
  // Saves a screenshot to a given path if a command fails.
  screenshotPath: './errorShots/',
  //
  // Set a base URL in order to shorten url command calls. If your url
  // parameter starts with "/", then the base url gets prepended.
  baseUrl: 'http://localhost:3000',
  // baseUrl: 'http://google.com',
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 20000,
  //
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  //
  // Initialize the browser instance with a WebdriverIO plugin. The object
  // should have the plugin name as key and the desired plugin options as
  // properties. Make sure you have the plugin installed before running any
  // tests. The following plugins are currently available:
  // WebdriverCSS: https://github.com/webdriverio/webdrivercss
  // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
  // Browserevent: https://github.com/webdriverio/browserevent
  // plugins: {
  //     webdrivercss: {
  //         screenshotRoot: 'my-shots',
  //         failedComparisonsRoot: 'diffs',
  //         misMatchTolerance: 0.05,
  //         screenWidth: [320,480,640,1024]
  //     },
  //     webdriverrtc: {},
  //     browserevent: {}
  // },
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They
  // enhance your test setup with almost no effort. Unlike plugins, they don't
  // add new commands. Instead, they hook themselves up into the test process.

  // NOT USING SERVICE
  // services: ['selenium-standalone'],
  // USE SELENIUM YOU MANUALLY CONTROL
  port: 4444,
  host: 'localhost',
  seleniumServerAddress: 'http://localhost:4444/wd/hub',
  //seleniumAddress: 'http://dcspa02l.unix.anz:4444/wd/hub',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  // java -jar selenium-server-standalone-3.6.0.jar -Dwebdriver.chrome.driver=$BDS_WDIO_PATH/test/e2e/chromedriver/chromedriver

  // see https://github.com/webdriverio/webdriverio/issues/2262
  // still experience socket errors with these 2 settings with selenium jar file 3.7.1
  //seleniumInstallArgs: { version: '3.4.0' },
  //seleniumArgs: { version: '3.4.0' },

  // note for selelnium 3 reverse order
  // java -Dwebdriver.chrome.driver=$BDS_WDIO_PATH/test/e2e/chromedriver/chromedriver -jar selenium-server-standalone-3.6.0.jar

  // other option is to use a custom service
  // https://www.npmjs.com/package/wdio-webdriver-service

  ci: false,

  //
  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: http://webdriver.io/guide/testrunner/frameworks.html
  //
  // Make sure you have the wdio adapter package for the specific framework
  // installed before running any tests.
  framework: 'cucumber',
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: http://webdriver.io/guide/testrunner/reporters.html
  // reporters: ['spec'],

  // see https://www.npmjs.com/package/wdio-allure-reporter
  // https://www.npmjs.com/package/allure-commandline
  // manually run
  // NOTE report only opens in FF not on my version of chrome
  // ./node_modules/allure-commandline/bin/allure -v generate -c ./allure-results
  reporters: ['spec', 'allure', 'junit'],
  reporterOptions: {
    captureStandardOutput: false,
    flowId: false,
    message: '[title]',
    allure: {
      outputDir: 'allure-results'
    },
    junit: {
      outputDir: './junit'
  }
  },

  //
  // If you are using Cucumber you need to specify the location of your step
  // definitions.
  cucumberOpts: {
    // <boolean> show full backtrace for errors
    backtrace: true,
    // <string[]> filetype:compiler used for processing required features
    compiler: [
      'js:babel-register'
    ],
    // <boolean< Treat ambiguous definitions as errors
    failAmbiguousDefinitions: true,
    // <boolean> invoke formatters without executing steps
    // dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <boolean> Enable this config to treat undefined definitions as
    // warnings
    ignoreUndefinedDefinitions: false,
    // <string[]> ("extension:module") require files with the given
    // EXTENSION after requiring MODULE (repeatable)
    name: [],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <string[]> (file/dir) require files before executing features
    // cannot use a wildcard notation ? so need to list every single step def file ..
    require: [
      './src/steps/given.js',
      './src/steps/then.js',
      './src/steps/when.js'
      // './src/steps/pending.js',
    ],
    // <string> specify a custom snippet syntax
    snippetSyntax: undefined,
    // <boolean> fail if there are any undefined or pending steps
    strict: true,
    // <string> (expression) only execute the features or scenarios with
    // tags matching the expression, see
    // https://docs.cucumber.io/tag-expressions/
    // tagExpression: 'not @Pending and @SITJ',
    // <boolean> add cucumber tags to feature or scenario name
    tagsInTitle: false,
    // <number> timeout for step definitions
    timeout: 60000
  },

  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test
  // process in order to enhance it and to build services around it. You can
  // either apply a single function or an array of methods to it. If one of
  // them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  //
  // Gets executed once before all workers get launched.
   onPrepare: function onPrepare(config, capabilities) {
    global.winston = require('winston')
    winston.level = 'debug'
    winston.debug('config.seleniumServerAddress' + config.seleniumServerAddress)

    var utils = require('./src/support/utils')
    utils.mkDir('./allure-report') // only creates the dir if it does not exist e.g. on fresh clone in ci ( else the delete recusive fails )
    utils.deleteDirRecursive('./allure-report')
    utils.mkDir('./allure-results')
    utils.deleteDirRecursive('./allure-results')
    utils.mkDir('./junit')
    utils.deleteDirRecursive('./junit')

    const chai = require('chai')
    global.expect = chai.expect


    var node_cmd = require('node-cmd')
    var cmd = "mb --configfile mb/imposters.ejs --allowInjection";
      node_cmd.get(cmd, function (err, data, stderr) {
        winston.debug('start Mountebank');
        winston.debug('Mountebank err' + err);
        winston.debug('Mountebank started :\n', data);
        winston.debug('Stderr' + stderr);
      })

   },
  //
  // Gets executed before test execution begins. At this point you can access
  // all global variables, such as `browser`. It is the perfect place to
  // define custom commands.
  before: function before() {
    global.winston = require('winston')
    winston.level = 'debug'
    browser.timeouts('implicit', 5000)
    browser.windowHandleSize({ width: 1400, height: 800 })

    /**
     * redefine this here as as define in onPrepare isn't recognised by test steps
     */
    const chai = require('chai')
    global.expect = chai.expect
    global.assert = chai.assert
    global.should = chai.should()
  },

  // HOOKS - this is a mess
  // WELL DONE BORE-MAN
  // https://github.com/webdriverio/webdriverio/issues/1894
  // so the only hooks supported are..
  // https://github.com/webdriverio/webdriverio/blob/master/examples/wdio.conf.js#L311-L322
  // and
  // Also not framework related hooks work with Cucumber like onPrepare, beforeSession, afterSession and onComplete
  // great really need a before suite / after suite

  //
  // Hook that gets executed before the suite starts
  beforeSuite: function beforeSuite(suite) {
    winston.debug('beforeSuite')
  },
  //
  // Hook that gets executed _before_ a hook within the suite starts (e.g.
  // runs before calling beforeEach in Mocha)
  beforeHook: function beforeHook() {
    winston.debug('beforeHook')
  },
  //
  // Hook that gets executed _after_ a hook within the suite starts (e.g. runs
  // after calling afterEach in Mocha)
  // afterHook: function afterHook() {
  // },
  //
  // Function to be executed before a test (in Mocha/Jasmine) or a step (in
  // Cucumber) starts.
  // beforeTest: function beforeTest(test) {
  // },
  //
  // Runs before a WebdriverIO command gets executed.
  // beforeCommand: function beforeCommand(commandName, args) {
  //  winston.debug('beforeCommand')
  //  // cannot use this as it runs per step
  // },
  //
  // Runs after a WebdriverIO command gets executed
  // afterCommand: function afterCommand(commandName, args, result, error) {
  // },
  //
  // Function to be executed after a test (in Mocha/Jasmine) or a step (in
  // Cucumber) starts.
  // afterTest: function afterTest(test) {
  // },
  //
  // Hook that gets executed after the suite has ended
   afterSuite: function afterSuite(suite) {
    winston.debug('afterSuite')
   },
  //
  // Gets executed after all tests are done. You still have access to all
  // global variables from the test.
   after: function after(result, capabilities, specs) {
    winston.debug('after')
    /*
    var node_cmd = require('node-cmd')
    node_cmd.get('ls -al ./allure-results', function (err, data, stderr) {
      winston.debug(err)
      winston.debug(data)
      winston.debug(stderr)


    })
    // NOTE put allure on path
    var cmd = 'allure -v generate -c'
    node_cmd.get(cmd, function (err, data, stderr) {
      winston.debug(err)
      winston.debug(data)
      winston.debug(stderr)
    })*/
   },
  //
  // Gets executed after all workers got shut down and the process is about to
  // exit. It is not possible to defer the end of the process using a promise.
   onComplete: function onComplete(exitCode) {
    global.winston = require('winston')
    winston.debug('onComplete')
    var node_cmd = require('node-cmd')
    node_cmd.get('ls -al ./allure-results', function (err, data, stderr) {
      winston.debug(err)
      winston.debug(data)
      winston.debug(stderr)


    })
    // NOTE put allure on path in bash profile
    var cmd = 'allure -v generate -c'
    node_cmd.get(cmd, function (err, data, stderr) {
      winston.debug(err)
      winston.debug(data)
      winston.debug(stderr)
    })
    var cmd = 'mb stop'
    node_cmd.get(cmd, function (err, data, stderr) {
      winston.debug(err)
      winston.debug(data)
      winston.debug(stderr)
    })
   },

  // Cucumber specific hooks - note we're using 2.3.1 of cucumber
  // upgrading to 4.8 hasn't cured the problem
  // reports these are not defined
  // https://github.com/webdriverio/wdio-sauce-service/pull/36
  // https://github.com/webdriverio/wdio-sauce-service/issues/35
  // https://github.com/webdriverio/wdio-sauce-service/pull/37 note 25 days ago but this is for v3 cucumber
  // 4.8 was released on May 1
  // how to get master using yarn ? yarn add webdriverio/master/head ?
  // the changelog https://github.com/webdriverio/webdriverio/blob/master/CHANGELOG.md

  // https://github.com/cucumber/cucumber-js/blob/master/CHANGELOG.md

  beforeFeature: function (feature) {
    // winston.debug('beforeFeature');
    // TODO set the ticket 21 again

    // which could be a problem in CI
  },
  beforeScenario: function (scenario) {
    // winston.debug('beforeScenario')
  },
  beforeStep: function (step) {
    winston.debug('********************************* beforeStep')
  },
  afterStep: function (stepResult) {
    //browser.pause(3000) // does not resolve socket errors
    winston.debug('********************************* afterStep')
  },
  afterScenario: function (scenario) {
    // winston.debug('afterScenario')
  },
  afterFeature: function (feature) {
    // winston.debug('afterFeature')
  }
}

// note changelog 4.7.1 https://github.com/webdriverio/webdriverio/compare/v4.7.1...master
// note changelog 4.8.0 https://github.com/webdriverio/webdriverio/compare/v4.8.0...master
// may 5th cli: fix handling of cucumber tags when given through CLI

// WTF is babel for ?
// pre-processor to cross-compile your JavaScript back to ES5 compatible code
// so can code with es6 features ?

// this seems to work ( why i thought it was babel-register )

require('babel-register')({ // this works
  // require("babel-core/register")({ // so does this
  presets: ['es2015'] // this works
  // to use preset 2016 - Only compiles what's in ES2016 to ES2015
  // https://babeljs.io/docs/plugins/preset-es2016/
  // but note the webdriverio boilerplate code doesn't bundle this
  // so shouldn't use this
  // presets: ['es2016'] // Couldn't find preset "es2016" relative to directory "/Users/nerim/Digital/csp/repo/webdriverio/test/e2e/src/steps"
})
