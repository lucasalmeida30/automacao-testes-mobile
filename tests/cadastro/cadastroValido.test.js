import LoginPage from '../../pageObjects/login/loginPage';
import CadastroPage from '../../pageObjects/cadastro/cadastroPage';
import { EMAIL, SENHA } from '../../config/config';


describe('Cadastro', () => {
    it('Verifica cadastro com dados válidos', async () => {
       await LoginPage.AcessarLogin();
       await CadastroPage.registrar();

       await CadastroPage.setEmail(EMAIL);
       await CadastroPage.setSenha(SENHA);
       await CadastroPage.setConfirmaSenha(SENHA);

       await browser.saveScreenshot('./screenshots/cadastro/dadosPreenchidos.png');

       await CadastroPage.registrarConta();

       const msgCadastroSucesso = await $('//android.widget.TextView[@resource-id="android:id/message"]');
       await expect(msgCadastroSucesso).toBeDisplayed();
       await expect(msgCadastroSucesso).toHaveText('You successfully signed up!');

       await browser.saveScreenshot('./screenshots/cadastro/alertaCadastroValido.png');
    })
})