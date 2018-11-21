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

    - [Fonte](#fonte)

      - [Fira Code](#fira-code)

    - [Extensões](#extensões)

      - [Color Highlight](#color-highlight)
      - [DotEnv](#dotenv)
      - [Dracula Official](#dracula-official)
      - [EditorConfig for VS Code](#editorconfig-for-vs-code)
      - [ESLint](#eslint-for-vs-code)
      - [Markdown All in One](#markdown-all-in-one)
      - [Material Icon Theme](#material-icon-theme)
      - [Nunjucks](#nunjucks-for-vs-code)
      - [Prettier - Code formatter](#prettier---code-formatter)

    - [Configurações](#configurações)

  - [Node.js](#nodejs)
  - [Yarn](#yarn)

- [Bibliotecas](#bibliotecas)

  - [React Native](#react-native)
  - [ESLint](#eslint)
  - [React Navigation](#react-navigation)
  - [Axios](#axios)
  - [socket.io-client](#socketio-client)
  - [React Native Vector Icons](#react-native-vector-icons)

- [APIs](#apis)
  - [Twitter Backend](#twitter-backend)

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

## Tecnologias

### [Visual Studio Code](https://code.visualstudio.com)

Editor de código-fonte que inclui suporte para depuração, realce de sintaxe, complementação inteligente de código, snippets, entre outros.

#### Fonte

##### [Fira Code](https://github.com/tonsky/FiraCode)

Fonte monoespaçada com ligaduras de programação. É necessário adicionar a fonte no sistema operacional.

#### Extensões

##### [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

Exibe a cor exata de todos RGB’s ou HEX em seu código, muito útil para trabalhar com CSS ou SASS.

##### [DotEnv](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)

Utilizado para ter suporte à sintaxe .env, muito útil para quem trabalha com NodeJS, ReactJS ou qualquer outro tipo de projeto web.

##### [Dracula Official](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)

Tema para o VSCode.

##### [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

Utilizado para padronizar quebra de linha, indentação, espaços e tabs entre desenvolvedores de um mesmo projeto.

##### [ESLint for VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Utilizado para padronizar código entre desenvolvedores como utilização de pontos e vírgulas, tamanho máximo de caracteres em linhas e todo outro tipo de padronização.

##### [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)

Utilizado para escrever e ler Markdown dentro do VSCode, muito útil para documentações o README’s do Github.

##### [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

Utilizado para exibir os ícones de acordo com a linguagem utilizada na barra lateral.

##### [Nunjucks for VS Code](https://marketplace.visualstudio.com/items?itemName=ronnidc.nunjucks)

Utilizado para ter suporte à sintaxe .njk.

##### [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Utilizado para formatar JavaScript / TypeScript / CSS.

#### Configurações

Depois de adicionar a fonte e as extensões, setar as configurações (Settings > Open settings.json):

```
{
  // Define o tema do VSCode
  "workbench.colorTheme":"Dracula",

  // Configura tamanho e família da fonte
  "editor.fontSize":16,
  "editor.lineHeight":24,
  "editor.fontFamily":"Fira Code",
  "editor.fontLigatures":true,

  // Aplica linhas verticais para lembrar de quebrar linha em códigos muito grandes
  "editor.rulers": [
    80,
    120
  ],

  // Aplica um sinal visual na esquerda da linha selecionada
  "editor.renderLineHighlight":"gutter",

  // Aumenta a fonte do terminal
  "terminal.integrated.fontSize":14,

  // Define o tema dos ícones na sidebar
  "workbench.iconTheme":"material-icon-theme",

  // Configura o Prettier e o ESLint
  "prettier.eslintIntegration": true,
  "editor.formatOnSave": true
}
```

### [Node.js](https://nodejs.org/)

Interpretador de código JavaScript com o código aberto, focado em migrar o Javascript do lado do cliente para servidores.

### [Yarn](https://yarnpkg.com)

Gerenciamento de dependências rápido, confiável e seguro.

## Bibliotecas

### [React Native](https://github.com/facebook/react-native)

São dois pacotes para criar aplicativos com React Native.

### [ESLint](https://github.com/eslint/eslint)

Ferramenta para identificar e relatar padrões em JavaScript. Se o projeto for em Node é recomendado a utilização do guia de estilo 'Standard' e se for em React o guia de estilo do [AirBnB](https://www.npmjs.com/package/eslint-config-airbnb-base).

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
