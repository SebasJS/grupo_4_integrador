const { render } = require('ejs');
const db = require('../database/models');
const sequelize = db.sequelize;
const Users = db.User;
const CategoryUser = db.CategoryUser;
const Departamento = db.Departamento;

module.exports = {
    index: 
    async (req, res) => {   
        try {
                const users = await Users.findAll();
                return res.render('admin/adminUsers.ejs', { users }); 
            }       
        catch (error) {
            console.log(error);
        }
    },
     
    add: 
        async (req, res) => {
            try {
                const categoryUser = await CategoryUser.findAll();
                const departamento = await Departamento.findAll();
                return res.render('admin/createUsers.ejs', { categoryUser, departamento });         
            } catch (error) {
               console.log(error); 
            }  
    },
    create: async (req,res) => {
        try {
            let image = req.file ? req.file.filename : "default-image.png";
            console.log("La imagen es "+ req.file);
            const { name, email, password, phone, card, direccion, categoryId, departamentoId } = req.body;
            await db.User.create({
                name,
                email,
                password,
                phone,
                card,
                imagen : image,
                direccion,
                categoryId,
                departamentoId
            });
            return res.redirect('/admin/users')
        } catch (error) {
            return res.send(error);
        }
    },
	edit:
    async (req, res) => {
        try {
            console.log("Entre a edit");
            const User = await Users.findByPk(req.params.id);
            const category = await CategoryUser.findAll();
            const departamento = await Departamento.findAll();
            const IdCategory = await category.find(e => e.id == User.categoryId);
            const IdDepartamento = await departamento.find(e => e.id == User.departamentoId);
            return res.render('admin/usersEdit.ejs', {User, category, departamento, IdCategory, IdDepartamento});

        } catch (error) {
            console.log();
        }
	},
	update: async (req, res) => {
        try {
            console.log(req.body.image);
            //let image = req.body.image ? req.body.imagefilename : "default-image.png";
            let image = req.body.image;
            console.log("La imagen es "+ image);
            const id = req.params.id;
            const { name, email, password, phone, card, direccion, categoryId, departamentoId } = req.body;
            await db.User.update({
                name,
                email,
                password,
                phone,
                card,
                imagen: image,
                direccion,
                categoryId,
                departamentoId
            },
            {
              where: { id }  
            });
            return res.redirect('/admin/users')

        } catch (error) {
            return res.send(error);
        }
	},
	delete: async (req, res) => {
        try {
            const id = req.params.id;
		    await Users.destroy({
			where:{ id }
		})
		     return res.redirect("/admin/users");
        } catch (error) {
            return res.send(error);
        }
	}
} 