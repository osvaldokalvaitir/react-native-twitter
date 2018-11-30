# Twitter Mobile

Mobile com interface dinâmica utilizando React Native e consumindo os recursos da API do Twitter Backend.

## Resumo

Este projeto foi desenvolvido em React Native consumindo os recursos da API do Twitter Backend, são eles:

- Busca todos os tweets
- Adiciona novos tweets
- Like nos tweets

## Índice

- [Telas](#telas)

  - [Login](#login)
  - [Timeline](#timeline)
  - [Novo Tweet](#novo-tweet)

- [Componentes](#componentes)

  - [Listagem](#listagem)

- [Desenvolvimento](#desenvolvimento)

  - [Configurações Iniciais](#configurações-iniciais)

  - [Instalação do Projeto](#instalação-do-projeto)
  
  - [Execução do Projeto](#execução-do-projeto)

  - [Bibliotecas do Node.js](#bibliotecas-do-nodejs)

  - [Erros Comuns](#erros-comuns)

  - [APIs](#apis)

## Telas

### Login

![Screenshoot Login](https://github.com/osvaldokalvaitir/twitter-mobile/blob/master/screenshots/Login.png)
Esta é a primeira tela, para entrar o usuário terá que digitar seu nome e clicar em 'Entrar'.

### Timeline

![Screenshoot Timeline](https://github.com/osvaldokalvaitir/twitter-mobile/blob/master/screenshots/Timeline.png)
É a tela onde estão todos os tweets vindos da API, podendo adicionar novos tweets e dar like nos tweets existentes.
Composto por: Listagem

### Novo Tweet

![Screenshoot New](https://github.com/osvaldokalvaitir/twitter-mobile/blob/master/screenshots/New.png)
É a tela onde escreve o novo tweet que será enviado.

## Componentes

### Listagem

É a lista onde encontram-se os tweets vindos da API.

## Desenvolvimento

### Configurações Iniciais

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/README.md) e siga as Configurações Iniciais.

### Instalação do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/nodejs.md) e siga a Instalação de Projeto.

### Execução do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native.md) e siga a Execução de Projeto.

### Bibliotecas do Node.js

- [Axios](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/axios.md)

- [ESLint](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint.md)

- [React Native](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native.md)

- [React Native Vector Icons](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-vector-icons.md)

- [React Navigation](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-navigation.md)

- [socket.io-client](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/socketio-client.md)

### Erros Comuns

No desenvolvimento, depois de instalar uma biblioteca que use recursos nativos (ex: a biblioteca de ícones) será necessário executar o comando abaixo e reiniciar a emulação do projeto:

```
react-native link nome-da-biblioteca
```

No desenvolvimento, se ocorrer um erro de módulo não encontrado, será necessário fechar a janela de execução do Metro Bundler, executar o comando abaixo e reiniciar a emulação do projeto:

```
react-native start --reset-cache
```

### APIs

- [Twitter Backend](https://github.com/osvaldokalvaitir/twitter-backend)
