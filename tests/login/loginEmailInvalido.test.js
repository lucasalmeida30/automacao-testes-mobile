import LoginPage from '../../pageObjects/login/loginPage'
import { SENHA } from '../../config/config';



describe('Login inválido', ()=> {

it('Verifica login com o email inválido', async () => {

        await LoginPage.AcessarLogin();
        await LoginPage.loginApp('', SENHA);

        const msgErroEmail = await $('//android.widget.TextView[@text="Please enter a valid email address"]');
        await expect(msgErroEmail).toBeDisplayed();
        await expect(msgErroEmail).toHaveText('Please enter a valid email address');

        await browser.saveScreenshot('./screenshots/login/loginEmailInvalido.png');
    
})
})