import FormPage from "../../pageObjects/forms/formPage";


describe('forms', () => {


    it('Valida se todas opções do campo de dropdown estão presentes, e se é possivel selecionar uma.', async () => {
        await FormPage.clickLinkForms();
        
        await expect(FormPage.lblOpcoes).toHaveText('Select an item...')

        
        await FormPage.clickOpcoes();

        await expect(FormPage.opcaoWebdriver).toExist();
        await expect(FormPage.opcaoWebdriver).toBeDisplayed();

        await expect(FormPage.opcaoAppium).toExist();
        await expect(FormPage.opcaoAppium).toBeDisplayed();

        await expect(FormPage.opcaoApp).toExist();
        await expect(FormPage.opcaoApp).toBeDisplayed();

        await browser.saveScreenshot('./screenshots/forms/opcoes.png');


        await FormPage.opcaoAppium.click();
        
        await expect(FormPage.lblOpcoes).toHaveText('Appium is awesome');

        await browser.saveScreenshot('./screenshots/forms/opcaoSelecionada.png');


    });

    
});