const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shopController");

router.get('/product-info',shopController.productInfo);
module.exports = router;