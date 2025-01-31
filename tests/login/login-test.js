import LoginPage from '../../pages/loginPage';

describe('Tests de Login', () => {
    it('Verifica login com sucesso', async () => {
        await LoginPage.goToLogin();
        await LoginPage.enterUsername('teste@usuario.com');
        await LoginPage.enterPassword('senha123');
        await LoginPage.tapLoginButton();

        // Exemplo de validação pós-login
        const alertSuccess = await $('//android.widget.TextView[@resource-id="android:id/alertTitle"]');
        await expect(alertSuccess).toBeDisplayed();
    });

    it('Verifica login sem informar o email', async () => {
        await LoginPage.goToLogin();
        await LoginPage.enterUsername('');
        await LoginPage.enterPassword('senha123');
        await LoginPage.tapLoginButton();

        // Exemplo de validação pós-login
        const alertSuccess = await $('//android.widget.TextView[@resource-id="android:id/alertTitle"]');
        await expect(alertSuccess).toBeDisplayed();
    });
    
});
