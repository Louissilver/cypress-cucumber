import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPageObject from '../pageobjects/LoginPageObject';

const loginPageObject = new LoginPageObject();

Given(/^que o usuário acessa a tela de login da aplicação$/, () => {
  loginPageObject.acessarSite();
  cy.get('#UserName').should('be.enabled');
});

When(/^preenche nos campos de login$/, (valores) => {
  loginPageObject.preencherLogin(valores);
});

When(/^solicita para efetuar o login$/, () => {
  loginPageObject.efetuarLogin();
});

When(/^solicita a opção Esqueci minha senha$/, () => {
  loginPageObject.clicarEsqueciMinhaSenha();
});

Then(/^visualiza a tela de Esqueci minha senha$/, () => {
  cy.get('legend').should('contain', 'Esqueceu sua senha?');
});

Then(/^visualiza a tela inicial da aplicação$/, () => {
  loginPageObject.visualizarPaginaInicial();
});
