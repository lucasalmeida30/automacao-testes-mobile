import FormPage from "../../pageObjects/forms/formPage";


describe('forms', () => {


    it('Verifica se o botão inactive existe e está visivel.', async () => {
        await FormPage.clickLinkForms();

        await FormPage.btnInactive.scrollIntoView();
        await expect(FormPage.btnInactive).toExist();
       
        await expect(FormPage.btnInactive).toBeDisplayed();
       
        await browser.saveScreenshot('./screenshots/forms/botaoInactive.png');
    });
    
});