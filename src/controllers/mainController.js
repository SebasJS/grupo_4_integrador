const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productos.JSON');
let productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const visited = productos.filter((producto) => producto.tag === "visited");
const inSale = productos.filter((producto) => producto.tag === "in-sale");
let productosRefresh;

module.exports = {
    home: (req,res)=>{
		productosRefresh = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        fs.writeFileSync(productsFilePath, JSON.stringify(productosRefresh, null, ' '));
        productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        console.log(productosRefresh);
        res.render(("main/home"),{
            productosRefresh,
            visited,
            inSale,
            toThousand
        });
    },
    cart: (req,res)=>{
        res.render("main/cart")
    }
}