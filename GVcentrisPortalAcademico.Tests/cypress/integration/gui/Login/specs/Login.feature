# language: pt

Funcionalidade: Login

Sendo um usuário da aplicação
Posso acessar a tela de login
Para autenticar usuário e senha e acessar a aplicação

Contexto:
    Dado que o usuário acessa a tela de login da aplicação

Cenário: Efetuar login com sucesso
    Quando preenche nos campos de login
      | Campo   | Valor   |
      | Usuário | usuario |
      | Senha   | senha   |
    E solicita para efetuar o login
    Então visualiza a tela inicial da aplicação

Cenário: Validar tela de esqueci minha senha
    Quando solicita a opção Esqueci minha senha
    Então visualiza a tela de Esqueci minha senha