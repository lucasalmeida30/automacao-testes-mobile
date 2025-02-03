const path = require('path');

exports.config = {
    runner: 'local',
    maxInstances: 1,
    specs: ['../tests/**/*.test.js'],
    capabilities: [{
        maxInstances: 1,
        'appium:platformName': 'Android',
        'appium:deviceName': 'emulator-5554',
        'appium:platformVersion': '11.0',
        'appium:appPackage': 'com.wdiodemoapp',
        'appium:appActivity': 'com.wdiodemoapp/.MainActivity',
        'appium:automationName': 'UIAutomator2',
        'appium:app':  path.resolve(__dirname, '../app/app-demo.apk'),
        'appium:autoGrantPermissions': true,
    }],
    services: [
        ['appium', {
            command: 'appium',
            args: {
                relaxedSecurity: true,
                address: 'localhost',
                port: 4723,
                log: './appium.log',
                logLevel: 'debug'
            }
        }]
    ],
    framework: 'mocha',
    reporters: ['allure'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    waitforTimeout: 60000, 
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    afterTest: async function(test, context, { error }) {
        if (error) {
            const screenshotPath = `./allure-results/screenshots/${test.title.replace(/ /g, '_')}.png`;
            await browser.saveScreenshot(screenshotPath);
        }
    },
    allure: {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false
    }
};