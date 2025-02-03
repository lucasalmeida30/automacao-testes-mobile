import LoginPage from '../../pageObjects/login/loginPage';
import { EMAIL } from '../../config/config';



describe('Login inválido', ()=> {

it('Verifica login com a senha inválida', async () => {

        await LoginPage.AcessarLogin();
        await LoginPage.loginApp(EMAIL, '123');

        const msgErroSenha = await $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
        await expect(msgErroSenha).toBeDisplayed();
        await expect(msgErroSenha).toHaveText('Please enter at least 8 characters');

        await browser.saveScreenshot('./screenshots/login/loginSenhaInválida.png');
    
})
})