const express = require("express");
const router = express.Router();

const shopController = require("../controllers/shopController");

router.get('/product-info/:id',shopController.productInfo);
module.exports = router;