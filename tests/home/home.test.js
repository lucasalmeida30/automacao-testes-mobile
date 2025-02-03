import HomePage from "../../pageObjects/home/homePage";


describe('Home', () => {


    it('Verifica se os elementos estão visíveis na tela', async () => {
        await expect(HomePage.logoWebdriverIO).toExist();
        await expect(HomePage.logoWebdriverIO).toBeDisplayed();

        await expect(HomePage.txtTitulo).toExist();
        await expect(HomePage.txtTitulo).toBeDisplayed();
        await expect(HomePage.txtTitulo).toHaveText('WEBDRIVER');

        await expect(HomePage.descTexto).toExist();
        await expect(HomePage.descTexto).toBeDisplayed();
        await expect(HomePage.descTexto).toHaveText('Demo app for the appium-boilerplate');

        await browser.saveScreenshot('./screenshots/home/paginaHome.png');


    });

    
});