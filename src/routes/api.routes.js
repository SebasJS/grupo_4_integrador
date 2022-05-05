const express = require('express');
const router = express.Router();

const {getAllUsers,getAllUsuarios} = require('../controllers/api.controller');

const usuario = {
    nombre:'Juan',
    apellido:'salazar'
}

router.get('/',getAllUsers);

/*
router.get('/bicicletas',getAllbicicle);
*/

router.get('/users',getAllUsuarios);
  



module.exports = router;