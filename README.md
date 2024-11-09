## Requisitos

### Funcionais

#### 1. Ver todas as tarefas
- **Rota:** `GET /tarefas`
- **Descrição:** Retorna todas as tarefas no formato JSON.

#### 2. Adicionar uma nova tarefa
- **Rota:** `POST /tarefas`
- **Descrição:** Adiciona uma nova tarefa à lista. Cada tarefa deve conter:
  - `id`: um identificador único (número ou string).
  - `nome`: o nome da tarefa (string).
  - `status`: um booleano que indica se a tarefa está concluída (false por padrão).
- **Validação:** Verificar se já existe uma tarefa com o mesmo nome. Em caso afirmativo, retornar um erro.

#### 3. Atualizar uma tarefa existente
- **Rota:** `PUT /tarefas/:id`
- **Descrição:** Atualiza uma tarefa existente com base no `id`, permitindo modificar o `nome` e o `status`.
- **Validação:** Não permite a atualização de uma tarefa com um nome que já exista em outra tarefa.

#### 4. Excluir uma tarefa
- **Rota:** `DELETE /tarefas/:id`
- **Descrição:** Remove uma tarefa da lista com base no `id`.

#### 5. Filtrar tarefas por status
- **Rota:** `GET /tarefas?status=true` ou `GET /tarefas?status=false`
- **Descrição:** Filtra as tarefas de acordo com o status (Verdadeiro ou Falso).

#### 6. Criar uma interface Frontend
- **Descrição:** Deve ser criado uma interface simples no Frontend para integrar a API de gerenciamento de tarefas. A interface deve permitir ao usuário adicionar, visualizar, atualizar e excluir tarefas.

### Não Funcional
- **Uso Obrigatório do Express.js:** A API deve ser desenvolvida utilizando obrigatoriamente o framework Express.js.



## Como Executar Localmente no Windows 🖥️

### Pré-requisitos

Antes de começar, certifique-se de que você tem o seguinte instalado em sua máquina Windows:

1. **Node.js**: Baixe e instale o Node.js a partir de [nodejs.org](https://nodejs.org/). Isso também instalará o npm (Node Package Manager).
2. **Git**: Baixe e instale o Git a partir de [git-scm.com](https://git-scm.com/).

### Passo 1: Clonar o Repositório

Abra o seu prompt de comando (cmd) ou PowerShell e execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/kaufon/Todo-App.git
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
