# React Native - Twitter

[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/osvaldokalvaitir/react-native-twitter/blob/master/LICENSE)
![](https://img.shields.io/github/package-json/v/osvaldokalvaitir/react-native-twitter.svg)
![](https://img.shields.io/github/last-commit/osvaldokalvaitir/react-native-twitter.svg?color=red)
![](https://img.shields.io/github/languages/top/osvaldokalvaitir/react-native-twitter.svg?color=yellow)
![](https://img.shields.io/github/languages/count/osvaldokalvaitir/react-native-twitter.svg?color=lightgrey)
![](https://img.shields.io/github/languages/code-size/osvaldokalvaitir/react-native-twitter.svg)
![](https://img.shields.io/github/repo-size/osvaldokalvaitir/react-native-twitter.svg?color=blueviolet)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)

Aplicação Twitter usando React Native, Axios, React Router, React Navigation, Socket.io e React Native Vector Icons consumindo os recursos da API do [Node - Twitter](https://github.com/osvaldokalvaitir/node-twitter).

## Índice

- [Capturas de Tela](#capturas-de-tela)

  - [Login](#login)

  - [Timeline](#timeline)

  - [Novo Tweet](#novo-tweet)

- [Desenvolvimento](#desenvolvimento)

  - [Configuração do Ambiente](#configuração-do-ambiente)

  - [Instalação do Projeto](#instalação-do-projeto)
  
  - [Execução do Projeto](#execução-do-projeto)

- [Utilizados no Projeto](#utilizados-no-projeto)

  - [Bibliotecas](#bibliotecas)

  - [APIs](#apis)

## Capturas de Tela

### Login

![Login](/.github/assets/login.png)
Esta é a primeira tela, para entrar é necessário o usuário digitar seu nome.

### Timeline

![Timeline](/.github/assets/timeline.png)
É a tela onde estão todos os tweets vindos da API, podendo adicionar novos tweets e dar like nos tweets existentes.

### Novo Tweet

![New](/.github/assets/new.png)
É a tela onde escreve o novo tweet que será enviado.

## Desenvolvimento

### Configuração do Ambiente

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/README.md) e siga `Configuração de Ambiente`.

### Instalação do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/nodejs.md) e siga `Instalação de Projeto`.

### Execução do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-cli.md) e siga `Execução de Projeto para Desenvolvimento`.

## Utilizados no Projeto

### Bibliotecas

- [Axios](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/axios.md)

- [babel-eslint](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/babel-eslint.md)

- [ESLint](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint.md)

- [React Native Gesture Handler](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-gesture-handler.md)

- [React Native Vector Icons](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-vector-icons.md)

- [React Navigation](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-navigation.md)

- [react-native-cli](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-cli.md)

- [socket.io-client](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/socketio-client.md)

### APIs

- **[Node - Twitter](https://github.com/osvaldokalvaitir/node-twitter)**

  - **Rotas**

    - Tweets

      - Adiciona novos tweets
      - Busca todos os tweets
      - Like nos tweets
