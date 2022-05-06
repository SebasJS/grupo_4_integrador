const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const {op} = require("sequelize");
const productsFilePath = path.join(__dirname, '../database/productos.JSON');
let productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const Product = db.Product;
const Users = db.User;
const CategoryUser = db.CategoryUser;
const Departamento = db.Departamento;
const bCrypt = require('bcryptjs');
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
    },
    create: async (req,res) =>{
        try {
            const categoryUser = await CategoryUser.findAll();
            const departamento = await Departamento.findAll();
            return res.render('main/createUsers.ejs', { categoryUser,departamento });         
        } catch (error) {
        console.log(error); 
        }
    },
    store: async (req,res) => {
        try {
            let image = req.file ? req.file.filename : "default-image.png";
            console.log('el file es : '+ req.file );
            console.log("La imagen en main contorller es "+ image);
            const { name, email, password, phone, card, imagen, direccion,  departamentoId } = req.body;
            console.log(password);
            console.log("EL celular es",phone);
            const passEncript = await bCrypt.hash(password,10);
            const categoryId = 2;
            console.log(passEncript);
            await db.User.create({
                name,
                email,
                password : passEncript,
                phone,
                card,
                imagen : image,
                direccion,
                categoryId : categoryId,
                departamentoId
            });
            return res.redirect('/users/login')
        } catch (error) {
            return res.send(error);
        }

    }
}