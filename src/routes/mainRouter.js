const express = require("express");
const router = express.Router();
const multer = require('multer');
const mainController = require("../controllers/mainController");
const adminUsersController = require("../controllers/adminUsersController");
const guestMiddleware = require('../middlewares/guestMiddleware');
const { validateRegister } = require('../validators/register');
let storage = multer.diskStorage({
    destination: (req,file,cb) => cb(null, "public/img/imageProfile"),
    filename : (req, file , cb) => cb(null,Date.now()+ "-" +file.originalname)
});
let upload = multer ({storage});


router.get("/", mainController.home);
router.get("/cart", mainController.cart);
router.get('/create', mainController.create);
router.post('/store', upload.single("image"), validateRegister, mainController.store);
router.get('/users/login', guestMiddleware , adminUsersController.loginUser);
router.post('/users/ingresar', adminUsersController.loginProcess);
router.get('/users/logout', adminUsersController.logout);
module.exports = router;