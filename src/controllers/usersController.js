const bcryptjs = require('bcryptjs');
const bcrypt = require('bcryptjs/dist/bcrypt');
const { validationResult } = require('express-validator');
const { userInfo } = require('os');

const path = require("path");


const User = require('../models/User')

const controller = {

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
        
        let userInDB = User.findbyField('email', req.body.email)
        
        if (userInDB) {
            return res.render('users/registro', {
                errors: {
                    email: {
                        msg: 'Este correo ya esta registrado'
                    }
                },
                 oldData: req.body
             });
        }

        let UserToCreate = {
            ...req.body,
            password: bcryptjs.hashSync((req.body.password)),
            image_perfil: req.file.filename
        }
        
        User.create(UserToCreate)
        
		res.redirect('/');
	},

    loginUser: (req,res) => {
        res.render("uses/login");
    },

    loginProcess: (req, res) => {
        let userToLogin = User.findbyField('email', req.body.email);

        if(userToLogin) {
            let passwordTrue = bcryptjs.compareSync(req.body.password, userToLogin.password);

            if(passwordTrue){
                //deberia redirigir a una vista de perfil
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if(req.body.rememberInput){
                    res.cookie('userEmail', req.body.email, {maxAge: 30000});
                }
                return res.redirect('/users/profile');
            }
            return res.render("users/login", {
                errors: {
                    email:{
                        msg: 'Las credenciales son invalidas'
                    }
                },
            });
        }
        return res.render("users/login", {
            errors: {
                email:{
                    msg: 'Correo no registrado'
                }
            },
        });
        
    },

    profile: (req, res) => {
        return res.render('users/profile',{
        user: req.session.userLogged});
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = controller;

