const express = require("express");
const router = express.Router();
const multer = require('multer');
const adminUsersController = require("../controllers/adminUsersController");
let storage = multer.diskStorage({
    destination: (req,file,cb) => cb(null, "public/img/imageProfile"),
    filename : (req, file , cb) => cb(null,Date.now()+ "-" + file.originalname)
});
let upload = multer ({storage})



router.get('/users/add',adminUsersController.add);
router.post('/users/create',upload.single("image"),adminUsersController.create);
router.get('/users/edit/:id', adminUsersController.edit);
router.post('/users/update/:id',upload.single("image"), adminUsersController.update);



module.exports = router;