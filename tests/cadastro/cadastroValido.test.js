import LoginPage from '../../pageObjects/login/loginPage';
import CadastroPage from '../../pageObjects/cadastro/cadastroPage';
import { EMAIL, SENHA } from '../../config/config';


describe('Cadastro', () => {
    it('Verifica cadastro com dados válidos', async () => {
       await LoginPage.goToLogin();
       await CadastroPage.registrar();

       await CadastroPage.setEmail(EMAIL)
       await CadastroPage.setSenha(SENHA);
       await CadastroPage.setConfirmaSenha(SENHA);
       await CadastroPage.registrarConta();

       const msgInscricaoSucesso = await $('//android.widget.TextView[@resource-id="android:id/message"]');
       await expect(msgInscricaoSucesso).toBeDisplayed();
       await expect(msgInscricaoSucesso).toHaveText('You successfully signed up!');
    })
})