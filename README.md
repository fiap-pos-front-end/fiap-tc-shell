# Fiap Tech Challenge Shell

Projeto shell para Microfrontends Fiap Tech Challenge. Reúne front-ends React (Charts), Angular (Transações), Angular2 (Categorias) e API.

## Pré-requisitos

- Node.js >= 18
- Angular CLI >= 15

## Estrutura do Repositório

- **/src**: Código do shell Angular

### Repositórios separados

- **../fiap-tc-react**: MFE React
- **../fiap-tc-angular**: MFE Angular
- **../fiap-tc-angular2**: MFE Angular2
- **../fiap-tc-api**: Backend API

## Instalação

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

## Execução

### Inicia apenas o shell Angular:

```bash
npm run start
```

### Inicia todos os serviços (React, Angular, Angular2, API e shell):

```bash
npm run start:all
```

## Scripts Úteis

- `npm run build` — Compila o shell Angular para produção
- `npm run watch` — Compilação em modo observação (dev)
- `npm run test` — Executa testes
- `npm run run:all` — Inicializa o servidor de desenvolvimento de MFEs federados

## Observações

- Verifique versões de Node e Angular CLI se algo quebrar.
- Estrutura de pastas e caminhos são cruciais.
- Lembre-se de adicionar o token do GitHub no .npmrc para instalar a dependência da organização.
