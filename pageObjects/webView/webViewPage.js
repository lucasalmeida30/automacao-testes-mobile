class WebViewPage {
    get linkWebView() {
        return $('//android.widget.TextView[@text="Webview"]');
    }

    get menuWeb() {
        return $('//android.widget.Button[@text="Toggle navigation bar"]');
    }

    get btnPesquisar() {
        return $('//android.widget.Button[@text="Search (Command+K)"]');
    }

    get txtTitulo() {
        return $('//android.view.View[@text="Next-gen browser and mobile automation test framework for Node.js"]');
    }


    async clickLinkWeb() {
        await this.linkWebView.click();
    }

  
}

export default new WebViewPage();