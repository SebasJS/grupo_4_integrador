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
			console.log("La imagen es "+ image);
			console.log("El req body es ");
			console.log( req.body);
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
			res.redirect("/admin/create");
		}catch (e){
			return res.send(e);
		}

		
	},
	edit: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id);

		res.render('admin/updateProduct', { productToEdit });
		console.log("Entre a edit");
	},
	update: (req, res) => {
		let id = req.params.id;
		Product.update(
			{
				name: req.body.name
				
			}
		)

		
		/*let productToEdit = products.find(product => product.id == id);
		let image = req.file ? req.file.filename : productToEdit.image;
		productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image
		};
		let newProducts = products.map(product => {
			// product.id == productToEdit.id ? product = {...productToEdit} : product;
			if (product.id == productToEdit.id) {
				 product = {...productToEdit}
			}
			return product;
		});
		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		
		res.render('admin/adminIndex', {products});
		console.log("entre a update");
		*/
	},
	delete: (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(el => el.id != id)

		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('admin/adminIndex', {products});
		
	}
}

module.exports = productController;