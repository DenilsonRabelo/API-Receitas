<h1 align="center"> API-Receitas </h1>
<p align="center">
<img src="https://img.shields.io/github/issues/DenilsonRabelo/API-Receitas"/>
<img src="https://img.shields.io/github/forks/DenilsonRabelo/API-Receitas"/>
<img src="https://img.shields.io/github/stars/DenilsonRabelo/API-Receitas"/>
<img src="https://img.shields.io/github/license/DenilsonRabelo/API-Receitas"/>
<img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FDeni_dev1"/>
</p>

<p align="center">Essa é uma API que retorna receitas para o usuário onde os dados estão hospedados no no Heroku onde está o deploy da aplicação.</p>
<h1 align="center">
  <img height="500" alt="comida" title="comida" src="https://media.tenor.com/images/3e4d211cd661a2d7125a6fa12d6cecc6/tenor.gif"/>
</h1>

## 📦 URL BASE
```bash
https://api-receitas9.herokuapp.com/receitas
```
## :rocket: Como Usar
```bash
fetch("https://api-receitas9.herokuapp.com/receitas/")
    .then((response) => response.json())
    .then((data) => console.log(data))
```
## :paw_prints: Diferentes rotas
```bash
"/ingredientes/:receita_id" - retorna a receita por id.
"/ingredientesbase" - retorna todos os ingredientes base.
"https://api-receitas9.herokuapp.com/receitas/"  - retorna todas as receitas e ingredientes base.
"/tipo/:tipo"  - retorna as receitas por tipo.
```

## :paw_prints: Tipos de receitas
```bash
"doce" - retorna apenas as receitas doces
"salgado"  - retorna apenas as receitas salgadas
"agridoce"  - retorna apenas as receitas agridoces
```
## :dart: Exemplo de resposta
```bash
  {
    id: 1,
    receita: 'Smoothie',
    ingredientes: 'abacate, amora, leite de coco',
    ingredientesBase: {
        id : "2",
        nomeingrediente : "leite"
        receita_id : 1,
        created_at: "18-09-2022",
        updated_at: "18-09-2022",
    },
    modoPreparo: 'Coloque suas frutas congeladas de preferência no liquidificador. Adiciona um pouco de liquido e bate. Começa com pouco a adicione mais se for necessário. Para       não precisar adicionar muito liquido e perder a textura de sorvete, para de bater frequentemente e mistura com uma colher de pao para ajudar antes de voltar bater de novo.Experimenta e adicione adoçante se achar necessário. Serve já já! Se sobrar você pode colocar a mistura em moldes para picolé e guardar para um outro dia com calor',
    link_imagem: 'http://www.dicasdemulher.com.br/wp-content/uploads/2014/05/10-smoothies-mais-saudaveis-de-todos-os-tempos.jpg'
    tipo : "doce"
    created_at: "18-09-2022",
    updated_at: "18-09-2022",
  }
```
#
## :computer: Tecnologias usadas no projeto
- [PostegresSQL](https://www.postgresql.org)
- [Sequelize](https://sequelize.org)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/pt-br/)
- [Javascript](https://www.typescriptlang.org/)

#

### :memo: Licença
MIT license

[See more about the license][license]

[license]: https://github.com/DenilsonRabelo/API-Receitas/blob/main/LICENSE
#

## 🚀 Autor
| [<img height="100" src="https://avatars.githubusercontent.com/u/80592413?v=4"><br><sub>@denilson.dev</sub>](https://github.com/DenilsonRabelo) |
|--|