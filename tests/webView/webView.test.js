import WebViewPage from "../../pageObjects/webView/webViewPage";


describe('WebView', () => {


    it('Verifica navegação para WebView, e se os elementos estão presentes.', async () => {
        await WebViewPage.clickLinkWeb();

        WebViewPage.btnPesquisar.waitForExist({ timeout: 10000 });

        await expect(WebViewPage.menuWeb).toExist();
        await expect(WebViewPage.menuWeb).toBeDisplayed();
        await browser.saveScreenshot('./screenshots/webView/paginaWebView1.png');

        // await browser.saveScreenshot('./screenshots/webView/paginaWebView2.png');
        // await WebViewPage.txtTitulo.click();
        // await expect(WebViewPage.txtTitulo).waitForDisplayed({timeout: 5000});
        // await expect(WebViewPage.txtTitulo).toExist();
        // await expect(WebViewPage.txtTitulo).toHaveText('Next-gen browser and mobile automation test framework for Node.js');

    });

    
});
