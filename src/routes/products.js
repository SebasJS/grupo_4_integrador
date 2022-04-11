// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const productsController = require("../controllers/productsController");


/*** GET ALL PRODUCTS ***/
router.get("/", productsController.index);



router.get("/bicicletas", productsController.bicicletas);
router.get("/tenis", productsController.tenis);
router.get("/balones", productsController.balones);
router.get("/ropa", productsController.ropa);
router.get('/product-info/:id',productsController.productInfo);


module.exports = router;
