const { check } = require('express-validator');
const { validateResult } = require('../helpers/validateHelper');

const validateCreateProducts = [
    check('name').exists().notEmpty().withMessage('*Tienes que ingresar un nombre'),
    check('price').exists().isNumeric().withMessage('*Tiene que ser un valor numerico'),
    check('discount').exists().isNumeric().withMessage('*Tiene que ser un valor numerico'),
    check('stock').exists().isNumeric().withMessage('*Tiene que ser un valor numerico'),
    check('sku').exists().isLength({min:4}).withMessage('*Debe tener un minimo de 4 digitos'),
    check('tag').exists().withMessage('*Tiene que ingresar un tag'),
    check('description').exists().notEmpty().withMessage('*Debe ingresar una descripcion'),
    check('categoryProductsId').exists().withMessage('*El producto debe tener una categoria'),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]
module.exports = { validateCreateProducts };