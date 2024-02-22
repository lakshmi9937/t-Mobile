// cucumber.conf.js
const { test, expect } = require('@playwright/test');
const { CucumberJSConfig } = require('@playwright/test/lib/cucumber');
const reporter = require('cucumber-html-reporter');

const cucumberReporterOptions = {
  theme: 'bootstrap',
  jsonFile: 'cucumber_report.json',
  output: 'cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    'App Version': '0.3.2',
    'Test Environment': 'STAGING',
    'Browser': 'Chrome  79.0.3945.88',
    'Platform': 'Windows 10',
    'Parallel': 'Scenarios',
    'Executed': 'Local'
  }
};

test.runWith(new CucumberJSConfig().defaultOpts());

reporter.generate(cucumberReporterOptions);
