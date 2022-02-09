const url = Cypress.config('baseUrl');

const usuario = () => '#UserName';

const senha = () => '#Password';

const botaoEntrar = () => '.btn';

const manterLogado = () => 'input[name="RememberMe"]';

const esqueciMinhaSenha = () => 'a';

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

  marcarManterLogado() {
    cy.get(manterLogado()).check();
  }

  clicarEsqueciMinhaSenha() {
    cy.get(esqueciMinhaSenha()).click();
  }

  validarManterLogado(opcao) {
    const valor = opcao === 'Marcado' ? 'true' : 'false';
    cy.get(manterLogado()).should('have.value', valor);
  }

  efetuarLogin() {
    cy.get(botaoEntrar()).click();
  }

  visualizarPaginaInicial() {
    cy.get('.nomeusuario').should('exist');
  }
}

export default LoginPageObject;
