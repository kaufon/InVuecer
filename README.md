# 📋 Requisitos

## Funcionais
1. **Cadastro de Produtos e Fornecedores**
   - Permitir o cadastro de produtos e fornecedores com campos essenciais (ex.: nome, descrição, preço, dados do fornecedor).
   
2. **Registro de Compras**
   - Permitir o registro de compras, associando produtos e fornecedores ao histórico.
   
3. **Histórico de Compras**
   - Exibir o histórico de compras com detalhes como produto, fornecedor, quantidade e data da compra.

4. **CRUD de Produtos, Fornecedores e Histórico**
   - Implementar operações de criação, leitura, atualização e exclusão para produtos, fornecedores e histórico de compras.

5. **Integração com o Banco de Dados**
   - Utilizar um ORM para mapear classes JavaScript/TypeScript para tabelas do banco de dados e manipular dados. **De preferência Prisma**.

## Não Funcionais
1. **Uso de TypeScript**
   - A aplicação deve ser implementada em TypeScript para garantir maior segurança e tipagem estática.


## Como Executar Localmente no Windows 🖥️

### Pré-requisitos

Antes de começar, certifique-se de que você tem o seguinte instalado em sua máquina Windows:

1. **Node.js**: Baixe e instale o Node.js a partir de [nodejs.org](https://nodejs.org/). Isso também instalará o npm (Node Package Manager).
2. **Git**: Baixe e instale o Git a partir de [git-scm.com](https://git-scm.com/).

### Passo 1: Clonar o Repositório

Abra o seu prompt de comando (cmd) ou PowerShell e execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/kaufon/Invoicer.git
```

### Passo 2: Navegar até o Diretório do Projeto

Mude para o diretório do projeto:

```bash
cd Todo-App/
```

### Passo 2: Instalar Dependências

Execute o seguinte comando para instalar as dependências necessárias:

```bash
npm install
```


### Passo 3: Executar o Projeto

Após configurar as variáveis de ambiente, você pode executar o projeto usando o seguinte comando na pasta `Todo-App`:

```bash
npm run dev
```

Este comando iniciará a aplicação, e você deverá ver uma saída indicando que a aplicação cliente e servidor está em execução.

### Passo 4: Acessar a Aplicação

Abra seu navegador e navegue até `http://localhost:3000` para acessar a aplicação web.
Ou abra o navegador e navegue até `http://localhost:3333` para acessar o servidor.

**🚧Caso haja algum erro ao executar as dependências do projeto, rode o comando `npm install` na pasta `apps/server` e `apps/web` separadamente e tente executar o projeto novamente.🚧**

<p align="center">
  Feito com ❤️ por Kauan Fonseca 
</p>
# Invoicer
