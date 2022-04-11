const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const {op} = require("sequelize");
const productsFilePath = path.join(__dirname, '../database/productos.JSON');
let productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const Product = db.Product;

let productosRefresh;

module.exports = {
    home: async (req,res)=>{
		//productosRefresh = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        //fs.writeFileSync(productsFilePath, JSON.stringify(productosRefresh, null, ' '));
        //productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        //console.log(productosRefresh);
        const products = await Product.findAll();
        console.log(products)
        const visited = products.filter((producto) => producto.tag === "visited");
        const inSale = products.filter((producto) => producto.tag === "in-sale");
        res.render(("main/home"),{
            products,
            visited,
            inSale,
            toThousand
        });
    },
    cart: (req,res)=>{
        res.render("main/cart")
    }
}