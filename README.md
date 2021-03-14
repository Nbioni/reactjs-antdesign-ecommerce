<!-- PROJECT -->
<br />
<p align="center">
  <h3 align="center">ReactJS AntDesign eCommerce</h3>
</p>

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este é um protótipo de ecommerce feito em ReactJs com dados mockados de apis públicas. Foram utilizados componentes do framework [AntDesign](https://ant.design/components/overview/) para a estilização do sistema, para a persistência de dados foi utilizado a api [CrudCrud](https://crudcrud.com/) e para a consulta de produtos foi utilizado a api pública [FakeStore](https://fakestoreapi.com/).

### Feito Com

Abaixo segue o que foi utilizado na criação deste projeto:

- [ReactJS](https://pt-br.reactjs.org/) - O ReactJS é um framework que permite o desenvolvimento de aplicações web usando JavaScript;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [HookReference](https://pt-br.reactjs.org/docs/hooks-reference.html) - Hooks permitem que você use o state e outros recursos do React sem escrever uma classe;
- [AntDesign](https://ant.design/components/overview/) - O Ant Design é um framework que contém inúmeros componentes para enriquecer suas aplicações web;
- [CrudCrud](https://crudcrud.com/) - Api pública para criar aplicativos web ou móveis executando operações CRUD sem código back-end;
- [FakeStore](https://fakestoreapi.com/) - O Fake Store é uma api pública de loja virtual para o seu e-commerce ou protótipo de site de compras;
<!-- GETTING STARTED -->

## Começando

Para conseguir utilizar este protótipo de ecommerce, siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso do template, é ideal que você tenha o ambiente configurado para criar e testar sistemas em ReactJS, para isso você pode seguir o guia do link abaixo:

[Getting Started ReactJS](https://pt-br.reactjs.org/docs/getting-started.html)

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
reactjs-antdesign-ecommerce
├── public/
│   └── image/
│       ├── logo-fakestoreapi.png
│       └── logo-growth-hackers.png
├── src/
│   ├── api/
│   │   ├── crudcrud.js
│   │   └── fakestore.js
│   ├── components/
│   │   ├── Footer/
│   │   │   └── index.js
│   │   ├── Header/
│   │   │   └── index.js
│   │   ├── LoginForm/
│   │   │   └── index.js
│   │   ├── Product/
│   │   │   └── index.js
│   │   ├── ProductList/
│   │   │   └── index.js
│   │   ├── RegisterForm/
│   │   │   └── index.js
│   │   └── SiderMenu/
│   │       └── index.js
│   ├── pages/
│   │   ├── favorites/
│   │   │   └── index.js
│   │   ├── home/
│   │   │   └── index.js
│   │   ├── login/
│   │   │    └── index.js
│   │   └── App.js
│   └── services/
│       ├── fakestoreService.js
│       ├── favoritesService.js
│       ├── loginService.js
│       └── productsService.js
├── .gitignore
├── package.json
└── README.md
```

#### Configurando seu Ambiente

Para configurar a api CrudCrud abra o [site](https://crudcrud.com/) e obtenha gratuitamente sua chave para acesso a um backend com endpoint simples, copie a sua chave, abra o arquivo `/src/api/crudcrud.js` e cole no lugar da chave 'BaseURL'. Ex:

```crudcrud.js
import axios from 'axios';
export default axios.create({
  baseURL:"COLE-AQUI-SUA-CHAVE",
});
```

Feito a configuração rode o comando `yarn install` ou `npm install`, para instalar as dependências do projeto.

Execute o Projeto com o comando`npm start` ou `yarn start`

O sitema irá abrir em `localhost` e você poderá criar uma conta, logar, favoritar um produto, pesquisar produtos, pesquisar por categorias e acompanhar sua lista de favoritos.

##### LoginPage
- Ao rodar o projeto você irá ver a seguinte tela:
![image](https://user-images.githubusercontent.com/43020119/111056058-c1e70d00-845a-11eb-98d4-2d4243165742.png)

- Clique em `register now` para abrir o formulário de registro, preencha e clique em `Register` para realizar o seu cadastro e então realizar o login
![image](https://user-images.githubusercontent.com/43020119/111056105-476abd00-845b-11eb-8279-a245acba0f9a.png)

- Ao logar você irá visualizar a tela do seu ecommerce com um cabeçalho contendo as páginas Home e Favoritos, uma mensagem de boas vindas e um botão para fazer o logout. 
- Você irá visualizar à esquerda os campos de consulta, um input de busca, botões para escolher a loja(neste caso só tem uma mesmo) e uma lista de categorias. 
- Você irá visualizar os produtos podendo clicar no icone de coração para favoritar um item;
![image](https://user-images.githubusercontent.com/43020119/111056323-e9d77000-845c-11eb-9ccc-ccf7e593c62d.png)

- Ao clicar na aba de Favoritos você irá encontrar a página contendo todos os seus favoritos, ao clicar no store você verifica todos os favoritos daquele store(só estamos utilizando um).
![image](https://user-images.githubusercontent.com/43020119/111056393-73873d80-845d-11eb-8061-a8746054d3ec.png)




