const url = Cypress.config('baseUrl');

const usuario = () => '#UserName';

const senha = () => '#Password';

const botaoEntrar = () => 'button[value=Signin]';

const esqueciMinhaSenha = () => 'a[class="btn"]';

class LoginPageObject {
  acessarSite() {
    cy.visit(url);
  }

  preencherLogin(valores) {
    valores.hashes().forEach((element) => {
      const campo = element.Campo;
      const valor = element.Valor;
      switch (campo) {
        case 'Usuário': {
          cy.get(usuario()).clear().type(valor);
          break;
        }
        case 'Senha': {
          cy.get(senha()).clear().type(valor);
          break;
        }
        default: {
          throw new Error('Campo não encontrado.');
        }
      }
    });
  }

  clicarEsqueciMinhaSenha() {
    cy.get(esqueciMinhaSenha()).click();
  }

  efetuarLogin() {
    cy.get(botaoEntrar()).click();
  }

  visualizarPaginaInicial() {
    cy.get('.greettings').should('exist');
  }
}

export default LoginPageObject;
