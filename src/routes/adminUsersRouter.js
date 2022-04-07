const express = require("express");
const router = express.Router();
const multer = require('multer');
const adminUsersController = require("../controllers/adminUsersController");
let storage = multer.diskStorage({
    destination: (req,file,cb) => cb(null, "public/img"),
    filename : (req, file , cb) => cb(null,Date.now()+ "-" +file.originalname)
});
let upload = multer ({storage})



router.get('/users/add',adminUsersController.add);
router.post('/users/create',adminUsersController.create);



module.exports = router;