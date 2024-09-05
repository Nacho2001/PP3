// Importación de dependencias: librerias y credenciales para la base de datos
// Modulos de sequelize
const {Model, DataTypes} = require('sequelize');
// Credenciales e información de la base de datos
const sequelize = require("../db");
// Crea clase User que extiende la clase Model de Sequelize
class User extends Model{};

// Crea el model "User" con los valores que se quiere almacenar
User.init({
    // ID unico
    id:{
        // Tipo de dato: entero
        type: DataTypes.INTEGER,
        // Clave rimaria
        primaryKey: true,
        // Valor autoincremental
        autoIncrement: true
    },
    // Nombre de usuario
    username:{
        // Tipo de dato: string
        type: DataTypes.STRING,
        // No estan permitidos los valores nulos
        allowNull: false,
        // El valor no puede repetirse
        unique: true
    },
    // Clave de acceso
    password:{
        // Tipo de dato: string
        type:DataTypes.STRING,
        // Valores nulos no permitidos
        allowNull:false
    },
    // El email solo debe estar asociado a un solo usuario, por eso también debe ser único
    email:{
        // Tipo de dato: string
        type:DataTypes.STRING,
        // Valor unico
        unique:true
    },
    // Rol del usuario
    rol:{
        // Tipo de dato: string
        type:DataTypes.STRING,
        // Valores nulos bloqueados
        allowNull:false,
        // Valor por defecto
        defaultValue:'usuario'
    }},
    {
        // Acceso a la base de datos
        sequelize,
        // Nombre del model
        modelName:"User"
    }
);

// Sincronización de la base de datos, si la tabla no existe, se crea automaticamente
User.sync()
// Si la sincronización fue correcta muestra mensaje por terminal
.then(() => {
    console.log("Base de datos sincronizada");
})
.catch((error) => {
    // Si ocurrió algún fallo, también lo muestra por consola
    console.log(`Error al crear la tabla:
    ${error}`)
})

// Exporta el model
module.exports = User