Notes
====================

# use as minimum Java v8

e.g. java version "1.8.0_144"

# add the project dir to the path 

edit your bash profile to include .

export BDS_WDIO_PATH=/Users/nerim/Digital/csp/repo/csp-bds-sit/webdriverio
export PATH=$PATH:$BDS_WDIO_PATH

# use npm run script to download selenium standalone jar file 

npm run download-selenium-standalone

# manually start the selenium server  

( note the -D before -jar)
java -Dwebdriver.chrome.driver=$BDS_WDIO_PATH/e2e/chromedriver/chromedriver -jar selenium-server-standalone-3.6.0.jar

# run test using tag and spec 

e.g. 
yarn run wdio wdio.sit2.conf.js --  --cucumberOpts.tagExpression='@SITK' --spec=./src/features/BDSSIT_106.feature

# generate allure report 

see wdio.conf onComplete

NOTE include allure on path 

NOTE if the report does not open in chrome with expected results use another browser 

./node_modules/allure-commandline/bin/allure -v generate -c ./allure-results
