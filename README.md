<h1 align="center"> API-Receitas </h1>
<p align="center">
<img src="https://img.shields.io/github/issues/DenilsonRabelo/API-Receitas"/>
<img src="https://img.shields.io/github/forks/DenilsonRabelo/API-Receitas"/>
<img src="https://img.shields.io/github/stars/DenilsonRabelo/API-Receitas"/>
<img src="https://img.shields.io/github/license/DenilsonRabelo/API-Receitas"/>
<img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FDeni_dev1"/>
</p>

<p align="center">Esta é uma API que fornece receitas aos usuários, com os dados armazenados no Vercel, onde a aplicação está implantada.</p>
<h1 align="center">
  <img height="500" alt="comida" title="comida" src="https://media.tenor.com/images/3e4d211cd661a2d7125a6fa12d6cecc6/tenor.gif"/>
</h1>

## 📦 URL BASE
```bash
https://api-receitas-pi.vercel.app
```
## :rocket: Como Usar
```bash
fetch("https://api-receitas-pi.vercel.app/receitas/todas")
    .then((response) => response.json())
    .then((data) => console.log(data))
```
## :paw_prints: Diferentes rotas
```bash
"/todas" - retorna todos as receitas.
"/:id" - retorna a receita por id.
"/tipo/:tipo"  - retorna as receitas por tipo.
"/ingredientes" - retorna todos os ingredientes.
"/ingredientes/:id" - retorna um ingrediente por id.
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
    "id": 1,
    "receita": "Bolo de Cenoura",
    "ingredientes": "3 cenouras médias, 3 ovos, 1 xícara de óleo, 2 xícaras de farinha de trigo, 2 xícaras de açúcar, 1 colher de sopa de fermento em pó",
    "modo_preparo": "1. Descasque e corte as cenouras em pedaços. 2. No liquidificador, bata as cenouras, os ovos e o óleo até obter uma mistura homogênea. 3. Em uma tigela, adicione a farinha de trigo, o açúcar e o fermento. Misture bem. 4. Acrescente a mistura líquida do liquidificador à tigela e mexa até incorporar todos os ingredientes. 5. Despeje a massa em uma forma untada e leve ao forno preaquecido a 180°C por aproximadamente 40 minutos ou até dourar. 6. Retire do forno, deixe esfriar e desenforme.",
    "link_imagem": "https://imagens-revista.vivadecora.com.br/uploads/2020/06/Bolo-de-cenoura-com-cobertura-Foto-Noticias-ao-Minuto.jpg",
    "tipo": "doce",
    "created_at": "2023-11-22T16:19:48.033Z",
    "IngredientesBase": [
      {
        "id": 1,
        "nomesIngrediente": [
          "cenoura",
          "ovos"
        ],
        "receita_id": 1,
        "created_at": "2023-11-22T16:19:48.033Z"
      }
    ]
  }
```
#
## :computer: Tecnologias usadas no projeto
- [PostegresSQL](https://www.postgresql.org)
- [Prisma](https://www.prisma.io)
- [Nest](https://nestjs.com)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)

#

### :memo: Licença
MIT license

[See more about the license][license]

[license]: https://github.com/DenilsonRabelo/API-Receitas/blob/main/LICENSE
#

## 🚀 Autor
| [<img height="100" src="https://avatars.githubusercontent.com/u/80592413?v=4"><br><sub>@denilson.dev</sub>](https://github.com/DenilsonRabelo) |
|--|
