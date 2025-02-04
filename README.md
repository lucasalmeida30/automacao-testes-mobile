# Testes Automatizados Mobile com WebdriverIO

Este projeto realiza testes automatizados em um aplicativo mobile utilizando WebdriverIO, Appium e BrowserStack. Os testes foram desenvolvidos em JavaScript com o framework Mocha e geram relatórios usando Allure Reports.

## Aplicação Testada

Os testes foram realizados no aplicativo **native-demo-app**, um app de demonstração do WebdriverIO.

## Cenários de Teste

Os testes cobrem os seguintes cenários:

- **Login/Cadastro**
- **Navegação entre telas**
- **Preenchimento de formulários**
- **Verificação de mensagens de erro**

## Tecnologias Utilizadas

- WebdriverIO
- Mocha
- Appium
- JavaScript
- Node.js
- Allure Reports
- BrowserStack
- Git
- GitHub Actions

## Configuração do Ambiente

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/lucasalmeida30/automacao-testes-mobile.git
   cd automacao-testes-mobile
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Configuração do BrowserStack:**
   - Crie uma conta no [BrowserStack](https://www.browserstack.com/).
   - Gere suas credenciais (USERNAME e ACCESS_KEY).
   - Adicione essas credenciais ao seu ambiente:
     ```sh
     export BROWSERSTACK_USERNAME="seu-usuario"
     export BROWSERSTACK_ACCESS_KEY="sua-chave"
     ```

## Executando os Testes

Os testes são configurados no arquivo `wdio.conf.js`.

- **Executar testes localmente:**
  ```sh
  npx wdio config/wdio.conf.js
  ```

- **Gerar relatório Allure:**
  ```sh
  allure generate allure-results --clean -o allure-report
  allure open allure-report
  ```

## Integração com GitHub Actions

O projeto está configurado para executar os testes automaticamente via GitHub Actions. O workflow dispara os testes em cada push ou pull request na branch principal.

Além disso, os relatórios do **Allure Reports** são configurados para serem publicados automaticamente no **GitHub Pages** após a execução dos testes.

🔗 **Os relatórios podem ser acessados em:** [https://lucasalmeida30.github.io/automacao-testes-mobile/](https://lucasalmeida30.github.io/automacao-testes-mobile/)

---

📌 Dúvidas ou sugestões? Entre em contato!

