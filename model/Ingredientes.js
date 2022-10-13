const {Model, DataTypes} = require("sequelize")



class Ingredientesbase extends Model {
    static init(sequelize){
        super.init({
            nomeingrediente : DataTypes.STRING,
        },{
            sequelize,
            tableName : "ingredientesbase"
        })
    }
        static associate(models){
            this.belongsTo(models.Receita, {foreignKey: 'receita_id', as:'receita'})
        }

}



module.exports = Ingredientesbase
