import LoginPage from '../../pageObjects/login/loginPage';
import { EMAIL, SENHA } from '../../config/config';


describe('Login válido', () => {


    it('Verifica login com sucesso', async () => {
        await LoginPage.AcessarLogin();
        await LoginPage.loginApp(EMAIL, SENHA);
        
        const msgSucesso = await $('//android.widget.TextView[@resource-id="android:id/alertTitle"]');
        await msgSucesso.waitForExist();
        await browser.saveScreenshot('./screenshots/login/loginSucesso.png');

        await expect(msgSucesso).toBeDisplayed();
        await expect(msgSucesso).toHaveText('Success')
    });

});
