class LoginPage {
   
    get goToLoginButton() {
        return $('//android.widget.TextView[@text="Login"]');
    }

    get emailField() {
        return $('//android.widget.EditText[@content-desc="input-email"]'); 
    }

    get passwordField() {
        return $('//android.widget.EditText[@content-desc="input-password"]'); 
    }

    get loginButton() {
        return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup'); 
    }

    async goToLogin() {
        await this.goToLoginButton.click()
    }

    async enterUsername(username) {
        await this.emailField.setValue(username);
    }

    async enterPassword(password) {
        await this.passwordField.setValue(password);
    }

    async tapLoginButton() {
        await this.loginButton.click();
    }
}

export default new LoginPage();
