import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPageObject from '../pageobjects/LoginPageObject';

const loginPageObject = new LoginPageObject();

Given(/^que o usuário acessa a tela de login da aplicação$/, () => {
  loginPageObject.acessarSite();
});

When(/^preenche nos campos de login$/, (valores) => {
  loginPageObject.preencherLogin(valores);
});

When(/^solicita para efetuar o login$/, () => {
  loginPageObject.efetuarLogin();
});

When(/^desmarca a opção de manter logado$/, () => {
  loginPageObject.marcarManterLogado();
});

When(/^solicita a opção Esqueci minha senha$/, () => {
  loginPageObject.clicarEsqueciMinhaSenha();
});

Then(/^visualiza a tela de Esqueci minha senha$/, () => {
  cy.get('legend').should('contain', 'Esqueceu sua senha?');
});

Then(/^visualiza a opção manter-me logado "([^"]*)"$/, (opcao) => {
  loginPageObject.validarManterLogado(opcao);
});

Then(/^visualiza a tela inicial da aplicação$/, () => {
  loginPageObject.visualizarPaginaInicial();
});
