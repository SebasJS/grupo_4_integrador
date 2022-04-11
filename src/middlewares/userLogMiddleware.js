const User = require('../models/User')

function userLogMiddleware(req, res, next){
    //res.locals variables locales quiere decir que se puede utilizar en cualquier vista indenpendientemente si la pasamos en el controlador
    res.locals.isLogged = false;
    
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = User.findbyField('email', emailInCookie);

    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }

    if(req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }


    next();
}
module.exports = userLogMiddleware;