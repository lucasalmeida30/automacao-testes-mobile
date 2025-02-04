
exports.config = {
    runner: 'local',
    maxInstances: 1,
    specs: ['../tests/**/*.test.js'],

    services: ['browserstack'],

    capabilities: [
        {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'Samsung Galaxy S23',
            'appium:platformVersion': '13.0',
            'appium:app': process.env.APPID,
            'appium:appPackage': 'com.wdiodemoapp',
            'appium:autoGrantPermissions': true,
            'appium:browserstack.debug': true
        }
    ],

    user: process.env.BROWSERSTACK_USERNAME || 'lucasalmeidagome_pxcEhB',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'NVxE8qJTDAYU5RmDeh16',


        
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