const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../database/productos.JSON');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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
	update: (req, res) => {
		let id = req.params.id;
		let updateProduct = products.find(el => el.id == id);
		
		res.render('admin/updateProduct', {
			updateProduct, 
			toThousand
		});
	},
	delete: (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(el => el.id != id)

		fs.writeFileSync(finalProducts, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	}
}