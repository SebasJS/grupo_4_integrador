const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productos.JSON');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
module.exports = {
    home: (req,res)=>{
        res.render(("main/home"),{
            productos
        });
    }
}