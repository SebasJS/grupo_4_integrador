const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const {op} = require("sequelize");
//const productsFilePath = path.join(__dirname, '../database/productos.JSON');
//let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const Product = db.Product;

const productController = {
	index: async (req, res) =>{ 
		const products = await Product.findAll();
		return res.render('admin/adminIndex.ejs',{products});
	},
    create: async (req,res)=>{
		const products = await Product.findAll();
        res.render("admin/createProduct",products);
    },
    store: async (req, res) => {
		let image = req.file ? req.file.filename : "default-image.png";
		try {
			console.log("La imagen en admin controller es "+ image);
			console.log("El req file name ");
			console.log( req.file);
			let categoryId = 0;
			const vectCagetory = ["ropa","balones","zapatos","montaña","raquetas","bicicletas","artesMarciales","equitacion","tenis"];
			for (let index = 0; index < vectCagetory.length; index++) {
				if(vectCagetory[index] == req.body.category){
					categoryId = index+1;
				}
				
			}
				await Product.create({
				name: req.body.name,
				price: req.body.price,
				discount: req.body.discount,
				stock: req.body.discount,
				sku: req.body.sku,
				tag: req.body.tag,
				description: req.body.description,
				categoryProductsId: categoryId,
				imagen: image
			});
			console.log(req.body.sku);
			//res.redirect('/admin/create');
			res.redirect("/admin/products");
		}catch (e){
			return res.send(e);
		}

		
	},
	edit: async (req, res) => {
		let id = req.params.id;

		let productToEdit = await Product.findByPk(id);

		res.render('admin/updateProduct', { productToEdit });
		//console.log("Entre a edit");
	},
	update: async (req, res) => {
		let image = req.file ? req.file.filename : "default-image.png";
		let id = req.params.id;
		let categoryId = 0;
		const vectCagetory = ["ropa","balones","zapatos","montaña","raquetas","bicicletas","artesMarciales","equitacion","tenis"];
		for (let index = 0; index < vectCagetory.length; index++) {
			if(vectCagetory[index] == req.body.category){
				categoryId = index+1;
			}
			
		}
		await Product.update(
			{
				name: req.body.name,
				price: req.body.price,
				discount: req.body.discount,
				stock: req.body.discount,
				sku: req.body.sku,
				tag: req.body.tag,
				description: req.body.description,
				categoryProductsId: categoryId,
				imagen: image
			},
			{
				where:{
					id: id
				}
			}	
			)
			res.redirect("/admin/products");
			

	},
	delete: async (req, res) => {
		let id = req.params.id;
		await Product.destroy({
			where:{
				id: id
			}
		})
		res.redirect("/admin/products");
		
	}
}

module.exports = productController; 