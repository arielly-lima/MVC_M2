# Funcionamento da estrutura MVC
## Models
O model é responsável por interagir com o banco de dados utilizado. Ele que será responsável por executar as operações de CRUD (Create, Read, Update, Delete), além de consultas SQL, como joins e filtros. Os models fazem parte do backend e não tem contato com o usuário ou interface. 

## Controller
O controller é responsável por se comunicar com o model e a view, através de funções que se comunicam com o model para executar a ação no view. Ele recebe as requisições das rotas (endpoints), processa os dados (com ajuda dos models) e define o que será exibido ou feito em seguida. 

## Endpoints
Os endpoints estão presentes nas rotas (routes) e indicam quais URLs a aplicação responde e qual função do controller será chamada para cada tipo de requisição.
Eles são usados para enviar as ações do usuário ao controller, que então executa a lógica necessária e retorna a resposta para a View.

## 🧠 Perguntas para medir aprendizado (responder neste README) - Aula_6

**Explique com suas palavras o papel de cada camada da arquitetura MVC usada neste projeto.
Como o Model, o Controller e a View interagem entre si?**
Resumidamente, o o view é a parte que se comunica com o usuário e, quando o usuário realiza alguma ação, uma requisição é acionada, chamando o controller (existe controller para aluno, curso e professores). Dessa forma, o controller envia as requisições CRUD do HTML, ao banco de dados, através do model.

**Como ocorre o envio e o recebimento de dados no formato JSON neste projeto?
Cite uma rota que responde em JSON e explique seu funcionamento.**
O JSON está presente no ejs (html) e é responsável por conectar a requisição ao view. Ele está presente no index.ejs, executando metodos como o de deletar alunos, com o metodo "POST".

**Qual a importância de usar HTML básico com formulários e tabelas para organizar e manipular dados no navegador?**
Os formulários e tabelas são importantes para criar interfaces organizadas, permitindo a coleta, exibição e manipulação de dados de forma clara e funcional, essencial em sistemas como cadastros e pesquisas.

**Por que esse tipo de estrutura ainda é útil em projetos back-end com Node.js?**
Pois apartir do MVC é possível organizar os arquivos e pastas em uma estrutura organizada que relaciona os elementos de forma que eles interagem entre si através de requisições, podendo ser executadas através do node.
Separando responsabilidades entre dados (Model), interface (View) e lógica de controle (Controller), o que facilita a manutenção e integração do sistema.

### Estrutura boilerplate MVC em Node.js com PostgreSQL

Este projeto é um boilerplate básico para uma aplicação Node.js seguindo o padrão MVC (Model-View-Controller), utilizando PostgreSQL como banco de dados.

## Requisitos

- Node.js (versão X.X.X)
- PostgreSQL (versão X.X.X)

## Instalação

1. **Clonar o repositório:**

```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   cd seu-projeto
```

2. **Instalar as dependências:**
    
```bash
npm install
```
    
3. **Configurar o arquivo `.env`:**
    
Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente necessárias, como as configurações do banco de dados PostgreSQL.
    

Configuração do Banco de Dados
------------------------------

1. **Criar banco de dados:**
    
    Crie um banco de dados PostgreSQL com o nome especificado no seu arquivo `.env`.
    
2. **Executar o script SQL de inicialização:**
    
```bash
npm run init-db
```
    
Isso criará a tabela `users` no seu banco de dados PostgreSQL com UUID como chave primária e inserirá alguns registros de exemplo.
    

Funcionalidades
---------------

* **Padrão MVC:** Estrutura organizada em Model, View e Controller.
* **PostgreSQL:** Banco de dados relacional utilizado para persistência dos dados.
* **UUID:** Utilização de UUID como chave primária na tabela `users`.
* **Scripts com `nodemon`:** Utilização do `nodemon` para reiniciar automaticamente o servidor após alterações no código.
* **Testes:** Inclui estrutura básica para testes automatizados.

Scripts Disponíveis
-------------------

* `npm start`: Inicia o servidor Node.js.
* `npm run dev`: Inicia o servidor com `nodemon`, reiniciando automaticamente após alterações no código.
* `npm run test`: Executa os testes automatizados.
* `npm run test:coverage`: Executa os testes e gera um relatório de cobertura de código.

Estrutura de Diretórios
-----------------------

* **`config/`**: Configurações do banco de dados e outras configurações do projeto.
* **`controllers/`**: Controladores da aplicação (lógica de negócio).
* **`models/`**: Modelos da aplicação (definições de dados e interações com o banco de dados).
* **`routes/`**: Rotas da aplicação.
* **`tests/`**: Testes automatizados.
* **`views/`**: Views da aplicação (se aplicável).

Contribuição
------------

Contribuições são bem-vindas! Sinta-se à vontade para abrir um issue ou enviar um pull request.

Licença
-------

Este projeto está licenciado sob a Licença MIT.

Este README.md fornece uma visão geral clara do boilerplate, incluindo instruções de instalação, configuração do banco de dados, funcionalidades principais, scripts disponíveis, estrutura de diretórios, como contribuir e informações de licença. Certifique-se de personalizar as seções com detalhes específicos do seu projeto conforme necessário.#
