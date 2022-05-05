function adminMiddleware(req, res, next){
    if(!(req.session.userLogged) || req.session.userLogged.categoryId == 2){
        return res.redirect('/');
    }
    next();
}
module.exports = adminMiddleware;