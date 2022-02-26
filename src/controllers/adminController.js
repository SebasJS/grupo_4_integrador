const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productos.JSON');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


module.exports = {
	index: (req, res) =>{
		res.render('admin/adminIndex', {products});
	},
    create: (req,res)=>{
        res.render(("admin/createProduct"));
    },
    store: (req, res) => {
		let image = req.file ? req.file.filename : "default-image.png";
		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			image: image
		};

		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

		res.redirect('/');
	},
	edit: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id);

		res.render('admin/updateProduct', { productToEdit });
		console.log("Entre a edit");
	},
	update: (req, res) => {
		let id = req.params.id;
		let productToEdit = products.find(product => product.id == id);
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
		
	},
	delete: (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(el => el.id != id)

		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		res.render('admin/adminIndex', {products});
		
	}
}