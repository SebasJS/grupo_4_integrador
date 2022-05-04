const express = require("express");
const multer = require('multer');
const router = express.Router();
const usersController = require("../controllers/usersController");
const validation = require('../middlewares/validateMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

//const uploadFile = require('../middlewares/multerMiddleware');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img/imageProfile');
    },
    filename: (req, file, cb) => {
        let fileName = Date.now()+ "-" + file.originalname; 
        cb(null, fileName);
    }
})

var upload = multer({storage});

/*
router.get('/register', guestMiddleware,usersController.registerUser);
router.post('/', upload.single('imagen_perfil') ,validation, usersController.createUser);

router.get('/login', guestMiddleware , usersController.loginUser);
router.post('/login', usersController.loginProcess);

router.get('/profile', authMiddleware, usersController.profile);

router.get('/logout', usersController.logout);*/

module.exports = router;