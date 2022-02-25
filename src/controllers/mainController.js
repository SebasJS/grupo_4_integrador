const fs = require('fs');
const path = require('path');

let productsFilePath = path.join(__dirname, '../database/productos.JSON');
let productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const visited = productos.filter((producto) => producto.tag === "visited");
const inSale = productos.filter((producto) => producto.tag === "in-sale");


module.exports = {
    home: (req,res)=>{
        productsFilePath = path.join(__dirname, '../database/productos.JSON');
        productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        console.log(productos);
        res.render(("main/home"),{
            productos,
            visited,
            inSale,
            toThousand
        });
    },
    cart: (req,res)=>{
        res.render("main/cart")
    }
}