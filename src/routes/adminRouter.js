const express = require("express");
const router = express.Router(); 
const multer = require('multer');
const adminController = require("../controllers/adminController");
const adminUsersController = require("../controllers/adminUsersController");
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require("../middlewares/adminMiddleware");
const { validateRegister } = require('../validators/register');
let storage = multer.diskStorage({
    destination: (req,file,cb) => cb(null, "public/img"),
    filename : (req, file , cb) => cb(null,Date.now()+ "-" +file.originalname)
});
let upload = multer ({storage})



router.get('/create',adminMiddleware ,adminController.create);
router.post('/', upload.single("image"),adminController.store);

//router.get('/update/:id', adminController.update); YA ESTABA
//router.get('/edit/:id', adminController.edit); 
//router.patch('/update/:id', upload.single("image"), adminController.update);
router.get('/edit/:id', adminMiddleware ,adminController.edit); 
router.patch('/update/:id', upload.single("image"), adminController.update);

router.get('/products',adminMiddleware, adminController.index);
router.delete('/delete/:id', adminController.delete);

//Rutas para CRUD de Usuarios por parte del ADMIN

router.get('/users',adminMiddleware, adminUsersController.index);
/*router.get('/addUsers', adminUsersController.add);
router.post('/users/create', adminUsersController.create);
router.get('/users/edit/:id', adminUsersController.edit);
router.post('/users/update/:id',upload.single("image"), adminUsersController.update);*/
router.post('/users/delete/:id', adminUsersController.delete);

//Rutas para el login de usuarios

router.get('/users/login', guestMiddleware , adminUsersController.loginUser);
router.post('/users/ingresar', adminUsersController.loginProcess);
router.get('/users/logout', adminUsersController.logout);
module.exports = router;