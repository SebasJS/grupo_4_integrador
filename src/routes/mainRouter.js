const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/", mainController.home);
router.get('/product-info',mainController.productInfo);
router.get('/login',mainController.loginUser);
router.get('/register',mainController.registerUser);
router.get('/create',mainController.create);
module.exports = router;