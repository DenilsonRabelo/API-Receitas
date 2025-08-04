<h1 align="center"> API-Receitas </h1>
<p align="center">
<img src="https://img.shields.io/github/issues/DenilsonRabelo/API-Receitas"/>
<img src="https://img.shields.io/github/forks/DenilsonRabelo/API-Receitas"/>
<img src="https://img.shields.io/github/stars/DenilsonRabelo/API-Receitas"/>
<img src="https://img.shields.io/github/license/DenilsonRabelo/API-Receitas"/>
<img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FDeni_dev1"/>
</p>

<p align="center">Uma API moderna de receitas culinárias que combina um banco de dados robusto com inteligência artificial para criar experiências gastronômicas únicas. Utilizando tecnologia Ollama IA, a API não apenas fornece receitas tradicionais, mas também gera receitas personalizadas com base em categorias e tipos de cozinha específicos.</p>

<h1 align="center">
  <img height="500" alt="comida" title="comida" src="https://media.tenor.com/images/3e4d211cd661a2d7125a6fa12d6cecc6/tenor.gif"/>
</h1>

## � Funcionalidades

### 🤖 Geração de Receitas com IA
- **Receitas Aleatórias**: Gere receitas completamente novas usando inteligência artificial
- **Receitas por Categoria**: Crie receitas específicas (doce, salgado, agridoce)
- **Receitas por Tipo de Cozinha**: Gere receitas de diferentes culinárias mundiais
- **Ingredientes Inteligentes**: IA sugere ingredientes complementares

### 📊 Sistema de Paginação
- Navegação otimizada através de grandes volumes de receitas
- Controle de limite de resultados por página
- Performance melhorada para consultas extensas

### 🔍 Busca Avançada
- Pesquisa por descrição/nome da receita
- Filtros por tipo de receita
- Busca por ingredientes específicos

## �📦 URL BASE
```bash
https://api-receitas-pi.vercel.app
```

## 🔐 Autenticação

A API utiliza autenticação JWT para rotas protegidas. Para acessar as funcionalidades de IA e criação de receitas, você precisa:

1. Fazer login para obter o token JWT
2. Incluir o token no header `Authorization: Bearer <token>`

## 📋 Rotas da API

### 🏠 Rota Principal
```http
GET /
```
Retorna mensagem de boas-vindas da API.

### 👤 Autenticação

#### Login
```http
POST /login
Content-Type: application/json

{
  "email": "usuario@email.com",
  "password": "senha123"
}
```

#### Criar Usuário (Requer Autenticação)
```http
POST /usuario
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Nome do Usuário",
  "email": "usuario@email.com",
  "password": "senha123"
}
```

### 🍽️ Receitas

#### Listar Todas as Receitas (Paginado)
```http
GET /receitas/todas?page=1&limit=10
```
**Parâmetros de Query:**
- `page` (opcional): Número da página (padrão: 1)
- `limit` (opcional): Quantidade de receitas por página (máximo: 100)

**Exemplo de Uso:**
```javascript
fetch("https://api-receitas-pi.vercel.app/receitas/todas?page=1&limit=20")
    .then(response => response.json())
    .then(data => console.log(data))
```

#### Buscar Receita por ID
```http
GET /receitas/:id
```

**Exemplo:**
```http
GET /receitas/1
```

#### Buscar Receitas por Tipo
```http
GET /receitas/tipo/:tipo
```

**Tipos disponíveis:** `doce`, `salgado`, `agridoce`

**Exemplo:**
```http
GET /receitas/tipo/doce
```

#### Buscar Receitas por Descrição (Paginado)
```http
GET /receitas/descricao?descricao=bolo&page=1&limit=10
```

**Parâmetros de Query:**
- `descricao` (obrigatório): Termo de busca na descrição/nome da receita
- `page` (opcional): Número da página
- `limit` (opcional): Quantidade de receitas por página

**Exemplo de Uso:**
```javascript
fetch("https://api-receitas-pi.vercel.app/receitas/descricao?descricao=chocolate&page=1&limit=5")
    .then(response => response.json())
    .then(data => console.log(data))
```

#### Buscar Ingredientes por ID da Receita
```http
GET /receitas/ingredientes/:id
```

**Exemplo:**
```http
GET /receitas/ingredientes/1
```

#### Criar Nova Receita com IA (Requer Autenticação)
```http
POST /receitas
Authorization: Bearer <token>
```
Gera automaticamente uma nova receita usando IA.

#### Deletar Receita (Requer Autenticação)
```http
DELETE /receitas/:id
Authorization: Bearer <token>
```

### 🤖 Inteligência Artificial - Ollama IA

#### Gerar Receita Aleatória com IA (Requer Autenticação)
```http
POST /ollama-ia/chat
Authorization: Bearer <token>
```

Gera uma receita completamente nova e única usando inteligência artificial.

#### Gerar Receita por Categoria com IA (Requer Autenticação)
```http
POST /ollama-ia/chat/categoria?categoria=doce&cozinha=italiana
Authorization: Bearer <token>
```

**Parâmetros de Query:**
- `categoria` (obrigatório): Tipo da receita (`doce`, `salgado`, `agridoce`)
- `cozinha` (opcional): Tipo de cozinha (ex: `italiana`, `japonesa`, `brasileira`, `francesa`, etc.)

**Exemplos de Uso:**
```javascript
// Receita doce genérica
fetch("https://api-receitas-pi.vercel.app/ollama-ia/chat/categoria?categoria=doce", {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer seu-token-jwt'
    }
})

// Receita salgada da cozinha japonesa
fetch("https://api-receitas-pi.vercel.app/ollama-ia/chat/categoria?categoria=salgado&cozinha=japonesa", {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer seu-token-jwt'
    }
})
```

## 📄 Formato de Resposta das Receitas

```json
{
  "id": 1,
  "receita": "Bolo de Chocolate",
  "ingredientes": "2 xícaras de farinha, 1 xícara de cacau...",
  "modo_preparo": "Misture os ingredientes secos...",
  "link_imagem": "https://exemplo.com/imagem.jpg",
  "tipo": "doce",
  "created_at": "2023-11-22T15:52:56.000Z",
  "IngredientesBase": [
    {
      "id": 1,
      "nomesIngrediente": ["farinha", "cacau", "açúcar"],
      "receita_id": 1,
      "created_at": "2023-11-22T15:52:56.000Z"
    }
  ]
}
```

## 📊 Formato de Resposta Paginada

```json
{
  "data": [...], // Array de receitas
  "meta": {
    "page": 1,
    "limit": 10,
    "itemCount": 10,
    "pageCount": 5,
    "hasPreviousPage": false,
    "hasNextPage": true
  },
  "links": {
    "first": "?limit=10",
    "previous": "",
    "next": "?page=2&limit=10",
    "last": "?page=5&limit=10"
  }
}
```

## 🛡️ Rate Limiting

A API possui limitação de taxa para prevenir abuso:
- **Limite:** 100 requisições por minuto por IP
- **Janela de tempo:** 60 segundos
## 🌟 Exemplos de Uso Completos

### Obter receitas com paginação
```javascript
async function obterReceitas(pagina = 1, limite = 10) {
    try {
        const response = await fetch(`https://api-receitas-pi.vercel.app/receitas/todas?page=${pagina}&limit=${limite}`);
        const data = await response.json();
        
        console.log('Receitas:', data.data);
        console.log('Informações de paginação:', data.meta);
        
        return data;
    } catch (error) {
        console.error('Erro ao buscar receitas:', error);
    }
}
```

### Buscar receitas por descrição
```javascript
async function buscarReceitasPorDescricao(termo, pagina = 1) {
    try {
        const response = await fetch(
            `https://api-receitas-pi.vercel.app/receitas/descricao?descricao=${encodeURIComponent(termo)}&page=${pagina}&limit=15`
        );
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error('Erro na busca:', error);
    }
}
```

### Gerar receita com IA
```javascript
async function gerarReceitaIA(categoria, cozinha, token) {
    try {
        const url = `https://api-receitas-pi.vercel.app/ollama-ia/chat/categoria?categoria=${categoria}` + 
                   (cozinha ? `&cozinha=${cozinha}` : '');
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        
        const receita = await response.json();
        return receita;
    } catch (error) {
        console.error('Erro ao gerar receita:', error);
    }
}

// Uso
gerarReceitaIA('doce', 'francesa', 'seu-jwt-token')
    .then(receita => console.log('Nova receita gerada:', receita));
```

### Fazer login e obter token
```javascript
async function fazerLogin(email, senha) {
    try {
        const response = await fetch('https://api-receitas-pi.vercel.app/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: senha
            })
        });
        
        const data = await response.json();
        
        if (data.access_token) {
            // Salvar token para uso futuro
            localStorage.setItem('authToken', data.access_token);
            return data.access_token;
        }
    } catch (error) {
        console.error('Erro no login:', error);
    }
}
```

## :dart: Exemplo de resposta de receita
```json
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

## 🔧 Tecnologias Utilizadas

- **Backend:** [NestJS](https://nestjs.com) + [TypeScript](https://www.typescriptlang.org/)
- **Banco de Dados:** [PostgreSQL](https://www.postgresql.org) + [Prisma ORM](https://www.prisma.io)
- **Autenticação:** JWT + [Passport](https://www.passportjs.org/)
- **IA:** [Ollama](https://ollama.ai/) (Geração de receitas)
- **Deploy:** [Vercel](https://vercel.com/)
- **Containerização:** Docker (PostgreSQL)
- **Rate Limiting:** @nestjs/throttler
- **Validação:** class-validator

## 📚 Como Executar Localmente

1. **Clone o repositório**
```bash
git clone https://github.com/DenilsonRabelo/API-Receitas.git
cd API-Receitas
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
# Crie um arquivo .env na raiz do projeto
POSTGRES_PRISMA_URL="sua-url-do-postgres"
POSTGRES_URL_NON_POOLING="sua-url-sem-pooling"
JWT_SECRET="seu-jwt-secret"
```

4. **Execute o banco de dados com Docker**
```bash
docker-compose up -d
```

5. **Execute as migrações do Prisma**
```bash
npx prisma migrate dev
```

6. **Inicie o servidor**
```bash
npm run start:dev
```

A API estará disponível em `http://localhost:3000`

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/DenilsonRabelo/API-Receitas/blob/main/LICENSE) para mais detalhes.

## 🚀 Autor

| [<img height="100" src="https://avatars.githubusercontent.com/u/80592413?v=4"><br><sub>@denilson.dev</sub>](https://github.com/DenilsonRabelo) |
|--|

---

<p align="center">
  Feito com ❤️ por <a href="https://github.com/DenilsonRabelo">Denilson Rabelo</a>
</p>
