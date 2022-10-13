const receitaController = require("../controller/receitaController")

const express = require("express")
const router = express.Router()

//ok
router.get('/', (req, res) => {
    return receitaController.getReceitas(req,res)
})

router.get('/ingredientes/:receita_id', (req, res) => {
    return receitaController.getReceitasIngredientesPorID(req, res)
})

router.get('/tipo/:tipo', (req, res) => {
    return receitaController.getReceitasPorTipo(req, res)
})


router.post('/', (req, res) => {
    return receitaController.createReceita(req, res)
})




module.exports = app => app.use('/receitas', router)