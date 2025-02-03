import FormPage from "../../pageObjects/forms/formPage";


describe('forms', () => {


    it('Verifica o click no botão e a mensagem exposta  ', async () => {
        await FormPage.clickLinkForms();
        await FormPage.clickBtnActive();

        expect(FormPage.msgBtnActive).toExist();
        expect(FormPage.msgBtnActive).toBeDisplayed();
        expect(FormPage.msgBtnActive).toHaveText('This button is active');

        await browser.saveScreenshot('./screenshots/forms/alertaBotaoActive.png');
    });
    
});