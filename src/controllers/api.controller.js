const {Product,User} = require('../database/models');

const userCtrl = {}



userCtrl.getAllUsers = async (req,res)=>{

    const products = await Product.findAll();
    const userJson = JSON.stringify(products);
    res.json(products);

}

userCtrl.getAllUsuarios = async (req,res)=>{
    const usuarios = await User.findAll();
    const usuariosJson= JSON.stringify(usuarios);
    res.json(usuarios);
}



module.exports = userCtrl;