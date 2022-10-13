const {Model, DataTypes} = require("sequelize")



class User extends Model {
    static init(sequelize){
        super.init({
            nome : DataTypes.STRING,
            email : DataTypes.STRING,
            senha : DataTypes.STRING
        },{
            sequelize,
            tableName : "user"
        })
    }
}


module.exports = User