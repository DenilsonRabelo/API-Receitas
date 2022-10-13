const ingredientesController = require("../controller/ingredientesController")

const express = require("express")
const router = express.Router()


router.post('/ingredientesbase/:receita_id',(req, res) => {
    return ingredientesController.createIngredientesBase(req, res)
})

router.get('/ingredientesbase', (req,res) => {
    return ingredientesController.getTodosIngredientes(req, res)
})

module.exports = app => app.use('/receitas', router)
