// Importa clase sequelize para crear un objeto con las credenciales de la base de datos
const {Sequelize} = require('sequelize');
// Importa dotenv para obtener las variables declaradas en .env
require('dotenv').config()

const sequelize = new Sequelize(
    // Base de datos
    process.env.dbDatabase,
    // Username
    process.env.dbUser,
    // Password
    process.env.dbPassword,
    {
        // Ubicacion de la base de datos
        //host: `${process.env.dbIP}:${process.env.dbPort}`,
        host: process.env.dbIP,
        // Motor de DB
        dialect: process.env.dialect
    }
)

module.exports = sequelize