const Ingredientes = require("../model/Ingredientes")
const Receita = require("../model/Receita")



async function createIngredientesBase(req, res) {
    try {
        const { receita_id } = req.params
        const { nomeingrediente } = req.body
        const receita = await Receita.findByPk(receita_id)
        if (!receita) {
            return res.status(300).json("receita não encontrada")
        }
        const ingredientes = await Ingredientes.create({
            nomeingrediente: nomeingrediente,
            receita_id
        })
        return res.status(201).json({
            msg: "ingrediente criado",
            id: ingredientes.id
        })
    } catch (error) {
        return res.status(400).json({ msg: "algo de errado aconteceu durante a criação do ingrediente" })
    }
}


async function getIngredientesPorID(req, res) {
    try {
        const { receita_id } = req.params

        const receita = await Receita.findByPk(receita_id, {
            include: { association: 'ingredientesbase' }
        })

        return res.status(200).json(receita)

    } catch (error) {
        return res.status(400).json({msg : "algo de errado aconteceu"})
    }
}

async function getTodosIngredientes(req, res) {
    try {
        const receita = await Ingredientes.findAll()
        return res.status(200).json(receita)
    } catch (error) {
        return res.status(400).json("algo de errado aconteceu")
    }
}

module.exports = { createIngredientesBase, getIngredientesPorID, getTodosIngredientes }