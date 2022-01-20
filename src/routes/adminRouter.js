const express = require("express");
const router = express.Router();
const multer = require('multer');
const adminController = require("../controllers/adminController");
let storage = multer.diskStorage({
    destination: (req,file,cb) => cb(null, "public/img"),
    filename : (req, file , cb) => cb(null,Date.now()+ "-" +file.originalname)
});
let upload = multer ({storage})



router.get('/create',adminController.create);
router.post('/', upload.single("image"),adminController.store);

module.exports = router;