// Dependencias
// Model de usuario
const User = require("../model/modelUsuario");
// Funcion que verifica el token del usuario
const TokenCheck = require("../middlewares/jwt");
// Funciones de encriptación de clave
const hashing = require("../middlewares/hashPasword");

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
    // Compara token de usuario
    const tokenValido = TokenCheck.verificacion(req,res);
    if (tokenValido == true) {
        // Si el token fue validado, realiza la petición a la base
        try {
            // Utiliza el método finAll para buscar otods los usuarios
            const users = await User.findAll()
            // Envia al cliente  la lista de usuarios con el codigo 200
            res.status(200).json({
                estado:'Ok',
                users
            })
        } catch (error) {
            // Si hubo un error en la peticion, lo muestra en la terminal
            console.error(error);
            // Devuelve al cliente una respuesta con un codigo 500
            res.status(500).json({
                estado:'Error',
                mensaje: 'Error del servidor'
            })
        }
    }
}

// Busqueda de usuario por username
exports.getUniqueUser = async (req,res) => {
    // Primero, compruba que el token sea valido, si no lo es, se envia un mensaje de token invalido
    const tokenValido = TokenCheck.verificacion(req,res);
    // Si el token es correcto, realiza la opearación solicitada
    if (tokenValido == true) {
        // Obtiene el nombre de usuario que solicita el cliente
        const usuarioSolicitado = req.params.usuario
        try { // Busca en la BD un usuario por el nombre de usuario, el cual es un valor único
            const usuarioBuscado = await User.findAll({
                where: {
                    username: usuarioSolicitado
                }
            });
            // Si la respuesta de la base esta en blanco, entonces no existe el usuario buscado
            if (usuarioBuscado == null || usuarioBuscado == [] || usuarioBuscado == ""){
                // Si no existe el usuario solicitado, envia al cliente un error 404
                res.status(404).json({
                    estado:"error",
                    mensaje:"No se ha encontrado el usuario solicitado"
                })
            } else {
                // Si el usuario buscado existe, envia los datos al cliente con un código 200
                res.status(200).json({ // Si tuvo exito, devuelve el usuario solicitado
                    estado: "Ok",
                    usuarioBuscado
                })
            }
        } catch (error) { // sino, envia el mensaje de error con el código 500
            console.error(error);
            res.status(500).json({
                estado:"Error",
                mensaje: "No se ha podido obtener los datos"
            })
        }
    }
}

// Método para crear usuarios
exports.createUser = async(req,res )=> {
    try {
        // guarda los datos del usuario nuevo en una variable
        const commingUser = req.body;
        // Busca el nombre de usuario que el cliente quiere añadir
        const searchUsername = await User.findAll({
            where: {
                username:commingUser.username
            }
        });
        // Si el resultado de la busqueda anterior esta en blanco, entonces el nombre no esta repetido
        if (searchUsername.length == 0) {
            // Busca al usuario por email, otro valor que no de debe repetirse
            const searchEmail = await User.findAll({
                where:{
                    email: commingUser.email
                }
            })
            // Si el email tambien esta vacio, entonces creará el usuario con los datos enviados por el usuario
            if (searchEmail == 0) {
                // Antes de crear el usuario, encripta la clave que guardará
                const closedPassword = hashing.hashPassword(commingUser.password);
                // Luego reemplaza la clave no encriptada por la clave generada
                commingUser.password = closedPassword
                // Si el usuario no existe, lo crea
                await User.create(req.body);
                // Finalizado el proceso, le responde al cliente con un código 201
                res.status(201).json({
                    estado:'Ok',
                    mensaje:`Usuario ${commingUser.username} creado exitosamente`
                })
            } else {
                // si el mail ya se utilizó en otra cuenta, este es rechazado
                // Y envia un error 400, informando del rechazo
                res.status(400).json({
                    estado:'Error',
                    mensaje:`El email ${commingUser.email} ya se encuentra asociado a otro usuario, ingresar otro`
                })
            }
        } else {
            // Si el nombre de usuario ya se encuentra asociado a un usuario existente, no creará el nuevo
            res.status(400).json({
                estado:'Error',
                mensaje:`El nombre de usuario ${commingUser.username} ya se encuentra ocupado, ingresar otro`
            })
        }
    } catch (error) {
        console.error(error);
        // Si no pudo realizar la comprobación de los datos en la base, envia un error 500
        res.status(500).json({
            estado:"Error",
            mensaje:'No se han comprobar los datos'
        })
    }
}

// Borrar usuario
exports.deleteUser = async (req,res) => {
    // Verificación del token
    const validado = TokenCheck.verificacion(req,res);
    // Toma el nombre de usuari enviado por el cliente
    const usuario = req.params.usuario
    // Si el token es valido, continua las operaciones
    if (validado == true) {
        try {
            // Busca el username que se desea eliminar
            const usuarioBuscado = await User.findAll({
                where: {
                    username: usuario
                }
            });
            // Si la variable no tiene valor, significa que el usuario no existe
            if (usuarioBuscado == null || usuarioBuscado == [] || usuarioBuscado == ""){
                // Si el usuario no existe, envia un error
                res.status(404).json({
                    estado:"error",
                    mensaje:"No se ha encontrado el usuario a eliminar"
                })
            } else {
                // Borra un usuario con el metodo destroy, buscando el usuario que coincida con el username enviado
                await User.destroy({
                    where: {
                        username: usuario
                    }
                })
                res.status(200).json({ // Si lo pudo eliminar, devuleve un ok y el mensaje de operación exitosa
                    estado:"Ok",
                    message:`Usuario ${req.params.usuario} eliminado`
                })
            }
        } catch(error) { // Si falló devuelve error en "estado" y los detalles del mismo por consola
            console.error(error);
            res.status(500).json({
                estado:"Error",
                mensaje:"Ocurrió un error al eliminar el usuario"
            })
        }
    }
}

//Actualizar usuario
exports.updateUser = async (req,res) => {
    // Verificación del token
    const validado = TokenCheck.verificacion(req,res);
    // Si es true, el token es válido. Si es así, continua con el resto de la función
    if (validado == true) {
        // Crea las contantes con el nombre y los datos actualizados...
        const dataUsuario = req.body;
        const nombreUsuario = req.params.usuario;
        try { // Y luego utiliza el metodo update con la informacion actualizada donde el username coincida con el del usuario que se quiere corregir
            await User.update({ ...dataUsuario }, {
                where: { 
                    username:nombreUsuario
                }
            })
            // Si la actualización fue exitosa responde al cliente con un código 200
            res.status(200).json({
                estado:"OK",
                mensaje:"Usuario actualizado"
            })
        } catch (error) { // Igual que las consultas anteriores, si falla retorna el error 500 y el mensaje por terminal
            console.error(error);
            res.status(500).json({
                estado:"Error",
                mensaje:"Error al actualizar el usuario"
            })
        }   
    }
}