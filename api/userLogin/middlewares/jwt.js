// Importa libreria
const jwt = require("jsonwebtoken");

// validacion del cliente
exports.verificacion = (req, res) => {
    // declara state; es la variable con el resultado de la validación, por defecto es false
    let state = false;
    // Si no hay ningun token en el encabezado, envia un error
    if (!req.headers.token){
        res.status(401).json({
            estado:"Error",
            mensaje:"No se ha proporcionado ningún token"
        })
    } else {
        // Si hay un token, se verifica que sea valido, si no lo es, retorna un error con codigo 401
       jwt.verify(req.headers.token, 'securePassword', (err, decoded) => {
        if (err){
            res.status(401).json({
                estado: "error",
                mensaje: "El token no es válido"
            })
        } else {
            // Si la verificación fue correcta, la variable state es true
            req.userId = decoded.userId;
            state = true
        }
       })
       // Al finalizar el proceso, si el token es valido retorna un true, sino, un false
       return state
    }
}