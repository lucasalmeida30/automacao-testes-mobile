import FormPage from "../../pageObjects/forms/formPage";


describe('forms', () => {


    it('Valida o comportamento do botão que altera para ON e OFF  ', async () => {
        await FormPage.clickLinkForms();
        await expect(FormPage.msgOnEOff).toBeDisplayed();
        await expect(FormPage.msgOnEOff).toHaveText('Click to turn the switch ON');
        await browser.saveScreenshot('./screenshots/forms/btnOff.png');


        await FormPage.clickBtnOnEOff();

        
        
        await expect(FormPage.msgOnEOff).toBeDisplayed();
        await expect(FormPage.msgOnEOff).toHaveText('Click to turn the switch OFF');
        
        await browser.saveScreenshot('./screenshots/forms/btnOn.png');
    });
    
});