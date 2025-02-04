class FormPage {
    get linkForms() {
        return $('//android.widget.TextView[@text="Forms"]')
    }

    get txtTitulo() {
        return $('//android.widget.TextView[@text="Form components"]')
    }

    get lblDigite() {
        return $('//android.widget.EditText[@content-desc="text-input"]')
    }

    get lblTxtDigitado() {
        return $('//android.widget.TextView[@content-desc="input-text-result"]')
    }

    get btnOnEOff() {
        return $('//android.widget.Switch[@content-desc="switch"]')
    }

    get msgOnEOff() {
        return $('//android.widget.TextView[@content-desc="switch-text"]')
    }

    get lblOpcoes() {
        return $('//android.widget.EditText[@resource-id="text_input"]')
    }

    get opcaoWebdriver() {
        return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="webdriver.io is awesome"]')
    }

    get opcaoAppium() {
        return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Appium is awesome"]')
    }

    get opcaoApp() {
        return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="This app is awesome"]')
    }

    get btnActive() {
        return $('//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup')
    }

    get btnInactive() {
        return $('//android.view.ViewGroup[@content-desc="button-Inactive"]/android.view.ViewGroup')
    }

    get msgBtnActive() {
        return $('//android.widget.TextView[@resource-id="android:id/message"]')
    }

    async clickLinkForms() {
        await this.linkForms.click();
    }

    async preencherCampo(texto) {
        await this.lblDigite.setValue(texto);
    }

    async clickBtnOnEOff() {
        await this.btnOnEOff.click();
    }

    async clickOpcoes() {
        await this.lblOpcoes.click();
    }

    async clickBtnActive() {
        await this.btnActive.scrollIntoView();
        await this.btnActive.click();
    }


}

export default new FormPage();