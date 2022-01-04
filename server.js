const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')
const Schema = require('./Schemas/schema');
const app = express();
var port = process.env.PORT || 3000
app.use(cors())
app.use(express.json());


mongoose.connect('mongodb+srv://global-User:global123@cluster0.uzflb.mongodb.net/receitas?retryWrites=true&w=majority',
{
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

app.get('/receitas', async (req, res) => {
    const todos = await Schema.find();
    return res.json(todos);
  });

app.get('/', async (req, res) => {
  return res.json({ message: 'Seja bem vindo à API de receitas adicione "/receitas" ao final da url para acessar as informações' });
});


app.listen(port)
