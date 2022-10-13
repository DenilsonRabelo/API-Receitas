const Sequelize = require("sequelize")
const configDB = require("../config/database")
const Receita = require("../model/Receita")
const Ingredientes = require("../model/Ingredientes")

const connection = new Sequelize(configDB)

Receita.init(connection)
Ingredientes.init(connection)
Receita.associate(connection.models)
Ingredientes.associate(connection.models)

module.exports = connection

