const path = require('path');
// const appPath = path.resolve(__dirname, '../app/app-demo.apk');

// console.log('Caminho do APK:', appPath);
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
        'appium:app': path.resolve(process.cwd(), 'app/app-demo.apk'),
        'appium:autoGrantPermissions': true,
        'appium:ignoreHiddenApiPolicyError': true
    }],
    services: [
        ['appium', {
            command: 'appium',
            args: {
                relaxedSecurity: true,
                address: '127.0.0.1',
                port: 4723,
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