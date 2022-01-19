const express = require("express");
const router = express.Router();

const adminController = require("../controllers/adminController");
router.get('/create',adminController.create);
module.exports = router;