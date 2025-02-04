
exports.config = {
    runner: 'local',
    maxInstances: 1,
    specs: ['../tests/**/*.test.js'],

    services: ['browserstack'],

    capabilities: [
        {
            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'Samsung Galaxy S23',
            'appium:platformVersion': '13.0',
            platformName: 'Android',
            'appium:app': 'bs://f9070221e4c9bbb0fbcf7b1461155550e24afb0d',
            'appium:appPackage': 'com.wdiodemoapp',
            'appium:autoGrantPermissions': true,
            'appium:browserstack.debug': true
        }
    ],

    user: process.env.BROWSERSTACK_USERNAME || 'lucasalmeida_lzYdMi',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'dWNNywuDVR17SWyzvmE8',
        
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