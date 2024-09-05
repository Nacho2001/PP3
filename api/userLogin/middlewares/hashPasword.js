// Dependecia
// Bycrpt es la libreria que encripta las claves y la compara con un string, en este caso, el valor ingresado por el usuario
const bcrypt = require('bcrypt');

// Función para encriptar las claves de usuarios nuevo
exports.hashPassword = (normalPassword) => {
    const salt = bcrypt.genSaltSync();
    // Genera la clave encriptada
    const encryptedPassword = bcrypt.hashSync(normalPassword, salt);
    // y la envia a la función principal
    return encryptedPassword;
}

// Función para verificar las claves
exports.checkPassword = (entryPassword, realPassword) => {
    // Recibe la clave almacenada y la clave ingresada por el cliente
    const correct = bcrypt.compareSync(entryPassword, realPassword);
    // Retorna true si las claves coinciden, sino, el valor es false
    return correct;
}