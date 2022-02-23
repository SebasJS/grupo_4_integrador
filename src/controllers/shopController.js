const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, '../database/productos.JSON');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

    productInfo: (req,res) => {
        let id= req.params.id;
        let product = products.find((product)=> product.id == id);
        res.render("products/product-info",{
        product,
        toThousand,
        });
    }
};

module.exports = controller;