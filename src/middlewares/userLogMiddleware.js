function userLogMiddleware(req, res, next){
    //res.locals variables locales quiere decir que se puede utilizar en cualquier vista indenpendientemente si la pasamos en el controlador
    res.locals.userLogged = req.session.userLogged;
    res.locals.isLogged = false;
    if(req.session && req.session.userLogged){
        res.locals.isLogged = true;
    }

    next();
}
module.exports = userLogMiddleware;