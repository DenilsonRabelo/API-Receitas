require('dotenv').config()

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123',
    database: 'receita',
    define: {
      timestamps: true,
      underscored: true,
    },
  };

