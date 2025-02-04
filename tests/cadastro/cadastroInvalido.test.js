import LoginPage from '../../pageObjects/login/loginPage';
import CadastroPage from '../../pageObjects/cadastro/cadastroPage';
import { EMAIL, SENHA } from '../../config/config';


describe('Cadastro', () => {
    it('Verifica cadastro com senhas diferentes', async () => {
       await LoginPage.AcessarLogin();
       await CadastroPage.registrar();

       await CadastroPage.setEmail(EMAIL);
       await CadastroPage.setSenha(SENHA);
       await CadastroPage.setConfirmaSenha('senhadiferente');
       await browser.saveScreenshot('./screenshots/cadastro/senhasDivergentes.png');

       await CadastroPage.registrarConta();

       const msgErro = await $('//android.widget.TextView[@text="Please enter the same password"]');
       await expect(msgErro).toExist();
       await expect(msgErro).toHaveText('Please enter the same password');

       await browser.saveScreenshot('./screenshots/cadastro/mensagemErroSenha.png');
       
    })
})