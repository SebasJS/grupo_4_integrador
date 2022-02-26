const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../database/productos.JSON");
const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
    productInfo: (req,res) => {
      let id= req.params.id;
      var product = products.find((product)=> product.id == id);
      var similar;
      console.log(product.category);
     /*  if (product.category == "bicicletas"){
        return similar = bicicletas;
      }if (product.category == "balones"){
        return similar = balones;
      }if (product.category =="ropa"){
        return similar = ropa;
      }else{
        return similar=tenis;
      } */
      switch (product.category) {
        case 'bicicletas':
          similar = bicicletas;
          break;
        case 'balones':
          similar = balones;
          break;
        case 'ropa':
          similar = ropa;
          break;
        case 'tenis':
          similar=tenis;
          break;
        
      }
     

      res.render("products/product-info",{
      product,
      similar,
      toThousand,
      });
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
  