import FormPage from "../../pageObjects/forms/formPage";


describe('forms', () => {


    it('Verifica o comportamento do input para digitar algo e valida o resultado  ', async () => {
        await FormPage.clickLinkForms();
        await FormPage.preencherCampo('webdriverio');
        
        
        await expect(FormPage.lblTxtDigitado).toBeDisplayed();
        await expect(FormPage.lblTxtDigitado).toHaveText('webdriverio');
        await browser.saveScreenshot('./screenshots/forms/campoPreenchido.png');

    });

    
});