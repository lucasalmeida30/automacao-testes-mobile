import WebViewPage from "../../pageObjects/webView/webViewPage";


describe('WebView', () => {


    it('Verifica navegação para WebView, e se os elementos estão presentes.', async () => {
        await WebViewPage.clickLinkWeb();

        WebViewPage.btnPesquisar.waitForExist({ timeout: 10000 });

        await expect(WebViewPage.menuWeb).toExist();
        await expect(WebViewPage.menuWeb).toBeDisplayed();
        await browser.saveScreenshot('./screenshots/webView/paginaWebView1.png');

      

    });

    
});
