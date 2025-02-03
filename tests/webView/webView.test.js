import WebViewPage from "../../pageObjects/webView/webViewPage";


describe('WebView', () => {


    it('Verifica navegação para WebView, e se os elementos estão presentes.', async () => {
        await WebViewPage.clickLinkWeb();
        await expect(WebViewPage.menuWeb).toExist();
        await expect(WebViewPage.menuWeb).toBeDisplayed();

        await expect(WebViewPage.btnPesquisar).toExist();
        await expect(WebViewPage.btnPesquisar).toBeDisplayed();
        
        await expect(WebViewPage.txtTitulo).toExist();
        await expect(WebViewPage.txtTitulo).toHaveText('Next-gen browser and mobile automation test framework for Node.js');

        await browser.saveScreenshot('./screenshots/webView/paginaWebView.png');
    });

    
});
