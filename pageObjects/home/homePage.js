class HomePage {
    get logoWebdriverIO() {
        return $('//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[1]')
    }

    get txtTitulo() {
        return $('//android.widget.TextView[@text="WEBDRIVER"]')
    }

    get descTexto() {
        return $('//android.widget.TextView[@text="Demo app for the appium-boilerplate"]')
    }
}

export default new HomePage()