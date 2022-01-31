const express = require("express");
const router = express.Router();
const multer = require('multer');
const usersController = require("../controllers/usersController");
let storage = multer.diskStorage({
    destination: (req,file,cb) => cb(null, "public/img"),
    filename : (req, file , cb) => cb(null,Date.now()+ "-" +file.originalname)
});
let upload = multer ({storage})


router.get('/login',usersController.loginUser);
router.get('/register',usersController.registerUser);

router.post('/',usersController.createUser);
module.exports = router;