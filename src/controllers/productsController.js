const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../database/productos.json");
const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const bicicletas = productos.filter((producto) => producto.category === "bicicletas");
const tenis = productos.filter((producto) => producto.category === "tenis");
const balones = productos.filter((producto) => producto.category === "balones");
const ropa = productos.filter((producto) => producto.category === "ropa");


const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
    // Root - Show all products
    index: (req, res) => {
      // Do the magic
      res.render("products/products", {
        productos,
        
        toThousand,
      });
    },
    bicicletas: (req, res) => {
      // Do the magic
      res.render("products/bicicletas", {
        productos,
        bicicletas,
        toThousand,
      });
    },
    tenis: (req, res) => {
      // Do the magic
      res.render("products/tenis", {
        productos,
        tenis,
        toThousand,
      });
    },
    balones: (req, res) => {
      // Do the magic
      res.render("products/balones", {
        productos,
        balones,
        toThousand,
      });
    },
    ropa: (req, res) => {
      // Do the magic
      res.render("products/ropa", {
        productos,
        ropa,
        toThousand,
      });
    },
  
    // Detail - Detail from one product
    detail: (req, res) => {
      // Do the magic
      let id = req.params.id;
      let product = products.find((product) => product.id == id);
      res.render("detail", {
        product,
        toThousand,
      });
    },
  
    // Create - Form to create
    create: (req, res) => {
      // Do the magic
      res.render("product-create-form");
    },
  
    // Create -  Method to store
    store: (req, res) => {
      // Do the magic
      let newProduct = {
          id: products[products.length - 1].id + 1,
      ...req.body,
      image: 'default-image.png'
      };
    products.push(newProduct);
    fs.writeFileSync(productsFilePath,JSON.stringify(products,null,' '));
  
    res.redirect('/products');
    },
  
    // Update - Form to edit
    edit: (req, res) => {
      // Do the magic
  
      let id = req.params.id;
      let productToEdit = products.find(product => product.id == id);
  
      res.render('product-edit-form',{ productToEdit});
    },
    // Update - Method to update
    update: (req, res) => {
     let id = req.params.id;
     let productToEdit = products.find(product => product.id == id);
  
     productToEdit = {
       id: productToEdit.id,
       ...req.body,
       image: productToEdit.image
     };
     let newProducts=products.map(product =>{
      /*  product.id == productToEdit.id ? product = {...productToEdit} : product; */
      if (product.id == productToEdit.id){
         return product = {...productToEdit}
       }
       return product;
     });
     fs.writeFileSync(productsFilePath,JSON.stringify(newProducts,null,' '));
     res.redirect('/');
  
    },
  
    // Delete - Delete one product from DB
    destroy: (req, res) => {
      // Do the magic
  
      let id = req.params.id;
      let finalProducts = products.filter(product => product.id != id);
      fs.writeFileSync(productsFilePath,JSON.stringify(finalProducts,null,' '));
     res.redirect('/');
    },
  };
  
  module.exports = controller;
  