import LoginPage from '../../pageObjects/login/loginPage';
import { EMAIL } from '../../config/config';



describe('Login inválido', ()=> {

it('Verifica login com a password inválida', async () => {

        await LoginPage.goToLogin();
        await LoginPage.loginApp(EMAIL, '123');

        const messagepassword = await $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
        await expect(messagepassword).toBeDisplayed();
        await expect(messagepassword).toHaveText('Please enter at least 8 characters')
    
})
})