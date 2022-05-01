const {Product} = require('../database/models')
const userCtrl = {}



userCtrl.getAllUsers = async (req,res)=>{

    const products = await Product.findAll();
    const userJson = JSON.stringify(products);
    res.json(products);

}



module.exports = userCtrl;