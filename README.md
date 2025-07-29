# Fiap Tech Challenge Shell - HOST

**Projeto shell para controle e host dos Microfrontends do desafio Fiap Tech Challenge. Reúne front-ends React (Charts), Angular (Transações), Angular2 (Categorias) e API.**

---
## 🚀 Primeiros passos
### Pré-requisitos

- Node.js (versão 18 ou superior)
- NPM (versão 9 ou superior)
- Angular CLI v19

## 🧱 Estrutura do Projeto

```
src/
├── app/
│   ├── core/                    # -- Funcionalidades essenciais da aplicação
│   │   ├── interceptors/        # Interceptor de requisiçoes HTTP
│   │   └── layout/              # Modelos e regras de negócio
│   │   └── react_wrapper/       # Wrapper responsável por receber e renderizar o MF REACT
│   ├── guards/                  # Contém o AuthGuard para bloquear acesso não autenticado as rotas
│   └── pages/                   # Componentes de página 
|   └── shared/                  # -- Arquivos compartilhados por toda aplicação
|         └── models             # Principais Modelos
|         └── services           # Services de todo repositório
|         └── store              # Estrutura responsável pelo token (Armazenamento, Limpeza do token, Decode, etc)
├── environments/                # Configurações de ambiente
└── assets/                      # Recursos estáticos
```

### Instalação
1. Clone o repositório:

```bash
git clone [url-do-repositorio]
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm start
```

Pronto! O shell estará pronto para fazer o seu papel de orquestrador. Preparamos alguns scripts que irão facilitar para manter os demais repositorios atualizados e funcionando. Basta rodar os comandos a partir da pasta fiap-tc-shell

### Instala todas as dependências de uma só vez:

```bash
npm run install:all
```

### Instale individualmente:

```bash
npm run install:fiap-tc-react
npm run install:fiap-tc-angular
npm run install:fiap-tc-angular2
npm run install:fiap-tc-api
npm i
```

### Inicia apenas o shell Angular:

```bash
npm run start
```

### Inicia todos os serviços (React, Angular, Angular2, API e shell):

```bash
npm run start:all
```

### Realiza o git pull em todos os repositórios (React, Angular, Angular2, API e shell):

```bash
npm run sync:all
```

### Conceitos Utilizados

1. **Module Federation**
- Permite o carregamento dinâmico de microfrontends, facilitando o compartilhamento de funcionalidades entre múltiplas aplicações.
- Neste projeto, foi utilizada a integração entre múltiplas stacks (Angular e React).

2. **Auth Guard**
- Protege rotas da aplicação, permitindo acesso apenas a usuários autenticados.
- Redireciona para login quando necessário.

3. **Interceptor**
- Intercepta requisições HTTP para anexar o token de autenticação e tratar erros globais como 401 ou 403.

## Observações

- Verifique versões de Node e Angular CLI se algo quebrar.
- Estrutura de pastas e caminhos são cruciais.
- Lembre-se de adicionar o token do GitHub no .npmrc para instalar a dependência da organização.
