## Twitter Mobile

Mobile with dinamic interface using React Native and consuming the features of the Twitter Backend API.

Mobile com interface dinâmica utilizando React Native e consumindo os recursos da API do Twitter Backend.


## Resumo

Este projeto foi desenvolvido em React Native consumindo os recursos da API do Twitter Backend, são eles:
  - Busca todos os tweets
  - Adiciona novos tweets
  - Like nos tweets


## Instalação e execução

Depois de instalado o Node.js, abra o prompt de comando e dentro da pasta do projeto execute os comandos abaixo.

Para instalar as dependências do projeto:
```
npm install | yarn install
```

Executar o projeto no Android:
```
react-native run-android
```

Executar o projeto no iOS:
```
react-native run-ios
```


## Erros comuns

No desenvolvimento, depois de instalar uma biblioteca que use recursos nativos (ex: a biblioteca de ícones) será necessário executar o comando abaixo e reiniciar a emulação do projeto:

```
react-native link nome-da-biblioteca
```

No desenvolvimento, se ocorrer um erro de módulo não encontrado, será necessário fechar a janela de execução do Metro Bundler, executar o comando abaixo e reiniciar a emulação do projeto:

```
react-native start --reset-cache
```


## Índice

- [Telas](#telas)
  - [Login](#login)
  - [Timeline](#timeline)
  - [Novo Tweet](#novo-tweet)

- [Componentes](#componentes)
  - [Listagem](#listagem)

- [Tecnologias](#tecnologias)
  - [Visual Studio Code](#visual-studio-code)
  - [Node.js](#nodejs)
  - [Yarn](#yarn)  

- [Bibliotecas](#bibliotecas)
  - [React Native](#react-native)
  - [React Navigation](#react-navigation)
  - [Axios](#axios)
  - [socket.io-client](#socketio-client)
  - [React Native Vector Icons](#react-native-vector-icons)
  
- [APIs](#apis)
  - [Twitter Backend](#twitter-backend)


## Telas

### Login
Esta é a primeira tela, para entrar o usuário terá que digitar seu nome e clicar em 'Entrar'.

### Timeline
É a tela onde estão todos os tweets vindos da API, podendo adicionar novos tweets e dar like nos tweets existentes.
Composto por: Listagem

### Novo Tweet
É a tela onde escreve o novo tweet que será enviado.


## Componentes

### Listagem
É a lista onde encontram-se os tweets vindos da API.


## Tecnologias

### [Visual Studio Code](https://code.visualstudio.com)
Editor de código-fonte que inclui suporte para depuração, realce de sintaxe, complementação inteligente de código, snippets, entre outros.

### [Node.js](https://nodejs.org/)
Interpretador de código JavaScript com o código aberto, focado em migrar o Javascript do lado do cliente para servidores.

### [Yarn](https://yarnpkg.com)
Gerenciamento de dependências rápido, confiável e seguro.


## Bibliotecas

### [React Native](https://github.com/facebook/react-native)
São dois pacotes para criar aplicativos com React Native.

### [React Navigation](https://github.com/react-navigation/react-navigation)
Realiza o roteamento e navegação nos apps de React Native.

### [Axios](https://github.com/axios/axios)
Cliente HTTP baseado em promessas.

### [socket.io-client](https://github.com/socketio/socket.io-client)
Permite comunicação baseada em eventos bidirecional em tempo real (cliente).

### [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
Pacote de fontes personalizáveis incluindo as famosas FontAwesome, MaterialIcons e Ionicons.


## APIs

### [Twitter Backend](https://github.com/osvaldokalvaitir/twitter-backend)
Contém informações da API Twitter Backend.
