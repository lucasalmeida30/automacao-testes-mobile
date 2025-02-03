const path = require('path');
// const appPath = path.resolve(__dirname, '../app/app-demo.apk');

// console.log('Caminho do APK:', appPath);
exports.config = {
    runner: 'local',
    maxInstances: 1,
    specs: ['../tests/**/*.test.js'],
    capabilities: [{
        'bstack:options': {
          osVersion: "11.0",
          deviceName: "Samsung Galaxy S21",
          realMobile: true,
          projectName: "automacao-testes-mobile",
          buildName: "Testes Mobile",
          sessionName: "Teste Home",
          automationName: 'UIAutomator2',
        },
        platformName: 'Android',
        'appium:app': 'bs://e06572b51d7fdcdb83e0c96cef61d1688017fd11',  // <-- Vai pegar o APP_ID depois
        'appium:autoGrantPermissions': true
      }],

    services: ['browserstack'],
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