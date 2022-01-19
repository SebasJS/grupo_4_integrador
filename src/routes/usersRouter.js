const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");


router.get('/login',usersController.loginUser);
router.get('/register',usersController.registerUser);
module.exports = router;