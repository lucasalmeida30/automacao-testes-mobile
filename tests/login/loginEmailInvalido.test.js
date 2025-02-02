import LoginPage from '../../pageObjects/login/loginPage'
import { SENHA } from '../../config/config';



describe('Login inválido', ()=> {

it('Verifica login com o email inválido', async () => {

        await LoginPage.goToLogin();
        await LoginPage.loginApp('', SENHA);

        // Exemplo de validação pós-login
        const messageEmail = await $('//android.widget.TextView[@text="Please enter a valid email address"]');
        await expect(messageEmail).toBeDisplayed();
        await expect(messageEmail).toHaveText('Please enter a valid email address')
    
})
})