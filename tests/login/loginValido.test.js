import LoginPage from '../../pageObjects/login/loginPage';
import { EMAIL, SENHA } from '../../config/config';


describe('Login válido', () => {


    it('Verifica login com sucesso', async () => {
        await LoginPage.goToLogin()
        await LoginPage.loginApp(EMAIL, SENHA);
        
        const alertSuccess = await $('//android.widget.TextView[@resource-id="android:id/alertTitle"]');
        await alertSuccess.waitForExist()
        await browser.saveScreenshot('./screenshots/login/loginSucesso.png');

        await expect(alertSuccess).toBeDisplayed();
        await expect(alertSuccess).toHaveText('Success')
    });

    
});
