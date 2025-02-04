class LoginPage {
   
    get btnAcessarLogin() {
        return $('//android.widget.TextView[@text="Login"]');
    }

    get lblEmail() {
        return $('//android.widget.EditText[@content-desc="input-email"]'); 
    }

    get lblPassword() {
        return $('//android.widget.EditText[@content-desc="input-password"]'); 
    }

    get bntLogin() {
        return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup'); 
    }

    async AcessarLogin() {
        await this.btnAcessarLogin.click();
    }

    async loginApp(email, password) {
        await this.lblEmail.setValue(email);
        await this.lblPassword.setValue(password);
        await this.bntLogin.click();
    }

}

export default new LoginPage();
