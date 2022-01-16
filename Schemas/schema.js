const { Schema, model } = require('mongoose');


const mongoose = require("mongoose")


const schemaReceita = new mongoose.Schema({
	receita: String,
	ingredientes: String,
	ingredientesBase: [mongoose.Schema.Types.Mixed],
	modoPreparo: String,
	link_imagem: String,
	tipo: String,
}, { strict: false })


module.exports = mongoose.model('receitas', schemaReceita)
