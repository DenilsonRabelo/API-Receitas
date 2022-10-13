const Receita = require("../model/Receita")


async function getReceitas(req, res) {
    try {
        const receitas = await Receita.findAll({include : {association : "ingredientesbase"}})
        return res.status(200).json(receitas)
    } catch (error) {
        return res.status(400).json({ msg: "Algo de errado aconteceu" })
    }
}


async function getReceitasPorTipo(req, res) {
    try { 
        const {tipo} = req.params
        if(tipo != "doce" && tipo != "salgada" && tipo != "agridoce"){
            return res.status(400).json({msg : "tipo não existe"})
        }
        const receitas = await Receita.findAll({
            include : { association : 'ingredientesbase'},
            where : {
                tipo : tipo
            }
        }) 
        return res.status(200).json(receitas)
    } catch (error) {
        return res.status(400).json({msg : "algo de errado aconteceu"})
    }
}



async function createReceita(req, res) {
    try {
        const { receita, ingredientes, modoPreparo, link_imagem, tipo } = req.body
        if(tipo != "doce" && tipo != "salgada" && tipo != "agridoce"){
            return res.status(400).json({msg : "tipo de receitas não permitido"})
        }
        const cache = await Receita.create({ receita, ingredientes, modoPreparo, link_imagem, tipo })
        return res.status(201).json({msg : "receita criada"})
    } catch (error) {
        return res.status(400).json("receita não foi criada")
    }
    
}


async function getReceitasIngredientesPorID(req, res) {
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

module.exports = { getReceitas, createReceita, getReceitasIngredientesPorID, getReceitasPorTipo }