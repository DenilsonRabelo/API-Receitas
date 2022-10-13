'use strict';





module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('receita', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      receita: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ingredientes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      modo_preparo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      link_imagem: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
    
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('receita');
  }
};


