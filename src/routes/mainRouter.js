const express = require("express");
const router = express.Router();
const multer = require('multer');
const mainController = require("../controllers/mainController");
let storage = multer.diskStorage({
    destination: (req,file,cb) => cb(null, "public/img"),
    filename : (req, file , cb) => cb(null,Date.now()+ "-" +file.originalname)
});
let upload = multer ({storage});


router.get("/", mainController.home);
router.get("/cart", mainController.cart);
router.get('/create',mainController.create);
router.post('/', upload.single("image"),mainController.store);

module.exports = router;