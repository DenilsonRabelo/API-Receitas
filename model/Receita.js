const {Model, DataTypes} = require("sequelize")


class Receita extends Model {
    static init(sequelize){
        super.init({
            receita : DataTypes.STRING,
            ingredientes : DataTypes.STRING,
            modoPreparo : DataTypes.STRING,
            link_imagem : DataTypes.STRING,
            tipo : DataTypes.STRING,
        },{
            sequelize,
            tableName : 'receita'
        })
    }  
        static associate(models){
            this.hasMany(models.Ingredientesbase, {foreignKey: 'receita_id', as : 'ingredientesbase'})
        
        }
    }



module.exports = Receita