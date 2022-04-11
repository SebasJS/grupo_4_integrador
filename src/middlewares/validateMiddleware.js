const { body } = require('express-validator');
const path = require('path');

module.exports = [
    body('nombre').notEmpty().withMessage('*Tienes que ingresar un nombre'),
    body('email')
        .notEmpty().withMessage('*Tienes que ingresar un correo electrónico').bail()
        .isEmail().withMessage('*El formato de correo no es valido'),
    body('password').isLength({ min: 5 }).withMessage('*Tienes que ingresar una contraseña con minimo 5 valores y maximo 20'),
    body('telefono').isLength({min: 6, max: 10}).withMessage('*Tienes que ingresar un numero de telefono telefono valido'),
    body('direccion').notEmpty().withMessage('*Tienes que ingresar una dirección'),
    body('tarjeta').notEmpty().withMessage('*Tienes que ingresar un numero de tarjeta'),
    body('imagePerfil').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];

        if (!file){
            throw new Error('tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones permitidas son ${acceptedExtensions.join(', ')}`);
            }
        }
        return true;
    })
]