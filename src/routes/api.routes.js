const express = require('express');
const router = express.Router();

const {getAllUsers} = require('../controllers/api.controller');

const usuario = {
    nombre:'Juan',
    apellido:'salazar'
}

router.get('/',getAllUsers);
  



module.exports = router;