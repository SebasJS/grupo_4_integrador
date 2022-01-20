const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../database/productos.JSON');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
module.exports = {
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
	}
}