const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validateRegister = [
    check('name').exists().notEmpty().withMessage('*Tienes que ingresar un nombre'),
    check('email').exists().isEmail().withMessage('Debe ser un email valido'),
    check('password').exists().isLength({min:8}).withMessage('la contraseña debe tener minimo 8 digitos'),
    check('phone').isLength({min:10}).withMessage('El numero debe tener mas de 10 digitos'),
    check('card').exists().isLength({min:10}).withMessage('la tarjeta debe tener minimo 10 digitos'),
    check('direccion').exists().not().isEmpty().withMessage('debe ingresar una direccion'),
    check('departamentoId').exists().withMessage('debe elegir un departamento'),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

module.exports = { validateRegister };