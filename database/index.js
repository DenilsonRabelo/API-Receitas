const Sequelize = require("sequelize")
const configDB = require("../config/databaseProduction")
const Receita = require("../model/Receita")
const Ingredientes = require("../model/Ingredientes")
const User = require("../model/User")

const connection = new Sequelize(configDB)

Receita.init(connection)
Ingredientes.init(connection)
Receita.associate(connection.models)
Ingredientes.associate(connection.models)
User.init(connection)

module.exports = connection

