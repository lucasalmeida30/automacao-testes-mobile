const path = require('path');

exports.config = {
    runner: 'local',
    specs: ['../tests/**/*.js'],
    capabilities: [{
        maxInstances: 1,
        'appium:platformName': 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:automationName': 'UIAutomator2',
        'appium:app':  path.resolve(__dirname, '../app/app-demo.apk'),
        'appium:autoGrantPermissions': true
    }],
    services: [
        ['appium', {
            command: 'appium',
            args: {
                relaxedSecurity: true,
                address: 'localhost',
                port: 4723
            }
        }]
    ],
    framework: 'mocha',
    reporters: ['allure'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error }) {
        if (error) {
            await browser.takeScreenshot();
        }
    },
    allure: {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false
    }
};