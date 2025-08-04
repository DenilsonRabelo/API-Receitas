<div align="center">

# 🍽️ A## ✨ Funcionalidades

### 🤖 **Intelig---

## 🌐 URL Base da API

```bash
🔗 https://api-receitas-pi.vercel.app
```

---

## 🔐 Autenticação e Segurança

A API utiliza **JWT (JSON Web Tokens)** para autenticação segura. Para acessar funcionalidades protegidas:

### 📋 **Pré-requisitos para Rotas Protegidas:**
1. **Login** - Obtenha seu token JWT
2. **Header Authorization** - Inclua `Authorization: Bearer <seu-token>`
3. **Acesso** - Utilize funcionalidades de IA e criação de receitas

### ⚡ **Benefícios da Autenticação:**
- 🎯 Acesso às funcionalidades de IA premium
- 📊 Criação e gerenciamento de receitas personalizadas
- 🔒 Segurança aprimorada para suas operações

---icial Gastronômica**
> *Revolucionando a criação de receitas com IA de última geração*

- 🎲 **Receitas Aleatórias**: Gere receitas completamente únicas usando inteligência artificial avançada
- 📂 **Receitas por Categoria**: Crie receitas específicas (doce, salgado, agridoce) adaptadas ao seu gosto
- 🌍 **Culinária Mundial**: Explore sabores de diferentes culturas (italiana, japonesa, brasileira, francesa, etc.)
- 🧪 **Ingredientes Inteligentes**: IA analisa combinações e sugere ingredientes complementares perfeitos
- 🎯 **Personalização Total**: Receitas adaptadas às suas preferências e restrições alimentares

### 📊 **Sistema de Navegação Avançado**
- 📄 **Paginação Inteligente**: Navegue facilmente através de milhares de receitas
- ⚡ **Performance Otimizada**: Carregamento rápido mesmo com grandes volumes de dados
- 🔢 **Controle Flexível**: Defina quantos resultados deseja ver por página (até 100)

### 🔍 **Busca Inteligente e Filtros**
- 🔎 **Busca Semântica**: Encontre receitas por descrição, nome ou ingredientes
- 🏷️ **Filtros Avançados**: Filtre por tipo de receita, categoria e muito mais
- 📝 **Busca por Ingredientes**: Descubra receitas baseadas nos ingredientes que você tem em casa

### 🛡️ **Segurança e Autenticação**
- 🔐 **JWT Authentication**: Sistema seguro de autenticação baseado em tokens
- 👤 **Gerenciamento de Usuários**: Criação e gerenciamento de contas de usuário
- 🔒 **Rotas Protegidas**: Acesso controlado às funcionalidades premium de IA# *Inteligência Artificial aplicada à Gastronomia*

<p>
<img src="https://img.shields.io/github/issues/DenilsonRabelo/API-Receitas?style=for-the-badge&logo=github&color=FF6B6B"/>
<img src="https://img.shields.io/github/forks/DenilsonRabelo/API-Receitas?style=for-the-badge&logo=github&color=4ECDC4"/>
<img src="https://img.shields.io/github/stars/DenilsonRabelo/API-Receitas?style=for-the-badge&logo=github&color=45B7D1"/>
<img src="https://img.shields.io/github/license/DenilsonRabelo/API-Receitas?style=for-the-badge&logo=mit&color=96CEB4"/>
</p>

<p>
<img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white"/>
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/>
<img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/>
<img src="https://img.shields.io/badge/Ollama-000000?style=for-the-badge&logo=ollama&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
</p>

> **Uma API revolucionária de receitas culinárias que combina banco de dados robusto com inteligência artificial avançada para criar experiências gastronômicas únicas e personalizadas.**

*Utilizando tecnologia Ollama IA, nossa API não apenas fornece receitas tradicionais, mas também gera receitas inovadoras com base em categorias específicas, tipos de cozinha mundial e preferências personalizadas.*

</div>

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

## �️ Endpoints da API

### 🏠 **Rota Principal**

<details>
<summary><code>GET /</code> - Mensagem de Boas-vindas</summary>

```http
GET /
```
**Resposta:** Mensagem de boas-vindas da API
</details>

---

### 👤 **Autenticação**

<details>
<summary><code>POST /login</code> - Fazer Login</summary>

```http
POST /login
Content-Type: application/json

{
  "email": "usuario@email.com",
  "password": "senha123"
}
```

**Resposta:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "name": "Nome do Usuário",
    "email": "usuario@email.com"
  }
}
```
</details>

<details>
<summary><code>POST /usuario</code> - Criar Usuário 🔒</summary>

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
</details>

---

### 🍽️ **Receitas**

<details>
<summary><code>GET /receitas/todas</code> - Listar Receitas (Paginado) 📄</summary>

```http
GET /receitas/todas?page=1&limit=10
```

**Parâmetros de Query:**
- `page` (opcional): Número da página (padrão: 1)
- `limit` (opcional): Receitas por página (máximo: 100, padrão: 10)

**Exemplo:**
```javascript
// Buscar 20 receitas da primeira página
fetch("https://api-receitas-pi.vercel.app/receitas/todas?page=1&limit=20")
    .then(response => response.json())
    .then(data => {
        console.log('Receitas:', data.data);
        console.log('Paginação:', data.meta);
    });
```

**Formato de Resposta:**
```json
{
  "data": [...],
  "meta": {
    "page": 1,
    "limit": 10,
    "itemCount": 10,
    "pageCount": 5,
    "hasPreviousPage": false,
    "hasNextPage": true
  }
}
```
</details>

<details>
<summary><code>GET /receitas/descricao</code> - Buscar por Descrição (Paginado) 🔍</summary>

```http
GET /receitas/descricao?descricao=chocolate&page=1&limit=15
```

**Parâmetros de Query:**
- `descricao` (obrigatório): Termo de busca na descrição/nome
- `page` (opcional): Número da página
- `limit` (opcional): Receitas por página

**Exemplo:**
```javascript
// Buscar receitas com "chocolate" no nome
const termo = encodeURIComponent("chocolate");
fetch(`https://api-receitas-pi.vercel.app/receitas/descricao?descricao=${termo}&page=1&limit=5`)
    .then(response => response.json())
    .then(data => console.log(data));
```
</details>

<details>
<summary><code>GET /receitas/:id</code> - Buscar Receita por ID</summary>

```http
GET /receitas/1
```

**Exemplo de Resposta:**
```json
{
  "id": 1,
  "receita": "Bolo de Chocolate",
  "ingredientes": "2 xícaras de farinha, 1 xícara de cacau...",
  "modo_preparo": "Misture os ingredientes secos...",
  "link_imagem": "https://exemplo.com/imagem.jpg",
  "tipo": "doce",
  "created_at": "2023-11-22T15:52:56.000Z"
}
```
</details>

<details>
<summary><code>GET /receitas/tipo/:tipo</code> - Buscar por Tipo</summary>

```http
GET /receitas/tipo/doce
```

**Tipos disponíveis:**
- `doce` 🍰
- `salgado` 🥘  
- `agridoce` 🍯
</details>

<details>
<summary><code>GET /receitas/ingredientes/:id</code> - Ingredientes da Receita</summary>

```http
GET /receitas/ingredientes/1
```
</details>

<details>
<summary><code>POST /receitas</code> - Criar Receita com IA 🔒🤖</summary>

```http
POST /receitas
Authorization: Bearer <token>
```
**Descrição:** Gera automaticamente uma nova receita usando IA
</details>

<details>
<summary><code>DELETE /receitas/:id</code> - Deletar Receita 🔒</summary>

```http
DELETE /receitas/1
Authorization: Bearer <token>
```
</details>

---

### 🤖 **Inteligência Artificial - Ollama IA**

<details>
<summary><code>POST /ollama-ia/chat</code> - Receita Aleatória com IA 🔒🎲</summary>

```http
POST /ollama-ia/chat
Authorization: Bearer <token>
```

**Descrição:** Gera uma receita completamente nova e única usando inteligência artificial avançada.

**Exemplo:**
```javascript
fetch("https://api-receitas-pi.vercel.app/ollama-ia/chat", {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer seu-token-jwt'
    }
})
.then(response => response.json())
.then(receita => console.log('Receita aleatória gerada:', receita));
```
</details>

<details>
<summary><code>POST /ollama-ia/chat/categoria</code> - Receita por Categoria 🔒🌍</summary>

```http
POST /ollama-ia/chat/categoria?categoria=doce&cozinha=italiana
Authorization: Bearer <token>
```

**Parâmetros de Query:**
- `categoria` (obrigatório): Tipo da receita
  - `doce` 🍰 - Sobremesas, bolos, tortas
  - `salgado` 🥘 - Pratos principais, aperitivos
  - `agridoce` 🍯 - Combinações únicas de sabores
- `cozinha` (opcional): Tipo de culinária mundial
  - `italiana` 🇮🇹, `japonesa` 🇯🇵, `brasileira` 🇧🇷, `francesa` 🇫🇷
  - `chinesa` 🇨🇳, `mexicana` 🇲🇽, `indiana` 🇮🇳, `tailandesa` 🇹🇭

**Exemplos:**
```javascript
// Receita doce italiana
fetch("https://api-receitas-pi.vercel.app/ollama-ia/chat/categoria?categoria=doce&cozinha=italiana", {
    method: 'POST',
    headers: { 'Authorization': 'Bearer seu-token-jwt' }
});

// Receita salgada japonesa
fetch("https://api-receitas-pi.vercel.app/ollama-ia/chat/categoria?categoria=salgado&cozinha=japonesa", {
    method: 'POST',
    headers: { 'Authorization': 'Bearer seu-token-jwt' }
});
```
</details>

---

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

---
## 🌟 Exemplos de Uso Completos

### 📊 Obter receitas com paginação
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

### 🔍 Buscar receitas por descrição
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

### 🤖 Gerar receita com IA
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

### 🔐 Fazer login e obter token
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

---

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