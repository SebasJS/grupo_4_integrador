const express = require("express");
const router = express.Router();
const multer = require('multer');
const usersController = require("../controllers/usersController");
const validation = require('../middlewares/validateMiddleware')
//const storage = multer.diskStorage({
//    destination: (req,file,cb) => cb(null, "public/img"),
//    filename : (req, file , cb) => {cb(null,Date.now()+ "-" +file.originalname)}
//});
//let upload = multer ({storage})


router.get('/register',usersController.registerUser);
router.post('/', validation, usersController.createUser);

router.get('/login', usersController.loginUser);

module.exports = router;