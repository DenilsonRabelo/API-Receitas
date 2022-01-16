const Schema = require('../Schemas/schema');
const express = require('express');
const router = express.Router()

router.get('/todas', async (req, res) => {
    const todos = await Schema.find();
    return res.json(todos);
});

router.get('/', async (req, res) => {
    return res.json({ message: 'Seja bem vindo à API de receitas adicione /receitas ao final da url para acessar as informações'});
});

router.get('/doce', async (req, res) => {
    const todos = await Schema.find();
    const doces = await todos.filter(elemento => elemento.tipo === "doce")
    res.json(doces)
})

router.get('/salgado', async (req, res) => {
    const todos = await Schema.find();
    const salgado = await todos.filter(elemento => elemento.tipo === "salgado")
    res.json(salgado)
})

router.get('/agridoce', async (req, res) => {
    const todos = await Schema.find();
    const agridoce = await todos.filter(elemento => elemento.tipo === "agridoce")
    res.json(agridoce)
})
module.exports = app => app.use('/receitas', router)