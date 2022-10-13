require('dotenv').config()

module.exports = {
    dialect: 'postgres',
    host: process.env.host,
    username: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port : 5432,
    dialectOptions: {
      ssl: {
       require: true,
       rejectUnauthorized: false,
      },
    },
    define: {
      timestamps: true,
      underscored: true,
    },
  };

