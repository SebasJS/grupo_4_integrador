const { validationResult } = require('express-validator');

const path = require("path");


const User = require('../models/User')

const controller = {

    loginUser: (req,res)=> {
        res.render(("users/login"));
    },
    registerUser: (req,res) => {
        res.render(("users/registro"));
    }, 
    createUser: (req, res) => {
		const resultValidation =  validationResult(req);
        
        if(resultValidation.errors.length > 0){
           return res.render('users/registro', {
              errors: resultValidation.mapped(),
               oldData: req.body
           });
        }

        User.create(req.body);

		res.send(resultValidation);
	},
    profile: (req, res) => {
        return res.render('');
    }
}

module.exports = controller;

