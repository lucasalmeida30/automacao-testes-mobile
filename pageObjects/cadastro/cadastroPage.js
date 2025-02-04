class CadastroPage {

    get linkRegistrar() {
        return $('//android.widget.TextView[@text="Sign up"]')
    }
    get lblEmail() {
        return $('//android.widget.EditText[@content-desc="input-email"]')
    }

    get lblSenha() {
        return $('//android.widget.EditText[@content-desc="input-password"]')
    }

    get lblConfirmaSenha() {
        return $('//android.widget.EditText[@content-desc="input-repeat-password"]')
    }

    get btnRegistrar() {
        return $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup')
    }

    async registrar() {
        await this.linkRegistrar.click();
    }

    async setEmail(email) {
        await this.lblEmail.setValue(email)
    }

    async setSenha(senha) {
        await this.lblSenha.setValue(senha)
    }

    async setConfirmaSenha(senha) {
        await this.lblConfirmaSenha.setValue(senha);
    }

    async registrarConta() {
        await this.btnRegistrar.click();
    }
}

export default new CadastroPage();