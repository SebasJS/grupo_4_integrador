const fs = require("fs");
const path = require("path");
const db = require('../database/models');
const Product = db.Product;
//const productsFilePath = path.join(__dirname, "../database/productos.JSON");
//const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
//const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

//const bicicletas = productos.filter((producto) => producto.category === "bicicletas");
//const tenis = productos.filter((producto) => producto.category === "tenis");
//const balones = productos.filter((producto) => producto.category === "balones");
//const ropa = productos.filter((producto) => producto.category === "ropa");
const productos = Product.findAll();
const bicicletas = Product.findAll();
const tenis = ()=> {
  Product.find({
    where:{
      categoryProductsId : 9
    }
  });
}
const balones = ()=> {
  Product.find({
    where:{
      categoryProductsId : 2
    }
  });
}
const ropa = ()=> {
  Product.find({
    where:{
      categoryProductsId : 1
    }
  })
}



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
    detail: async (req, res) => {
      // Do the magic
      let id = req.params.id;
      let product = await Product.findByPk(id);
      res.render("detail", {
        product,
        toThousand,
      });
    },
    productInfo: async (req,res) => {
      let id= req.params.id;
      let productDetail = await Product.findByPk(id);
      let similar;
      console.log("el nombre es "+ productDetail.categoryProductsId);
      switch (productDetail.categoryProductsId) {
        case  6:
          similar = bicicletas;
          break;
        case 2:
          similar = balones;
          break;
        case 1:
          similar = ropa;
          break;
        case 9:
          similar=tenis;
          break;
        
      }
      console.log("Similar es "+ similar);

      res.render("products/product-info",{
      productDetail,
      //similar,
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
  