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
            const { name, email, password, phone, card, imagen, direccion, categoryId, departamentoId } = req.body;
            await db.User.create({
                name,
                email,
                password,
                phone,
                card,
                imagen,
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
            const User = await Users.findByPk(req.params.id);
            const category = await CategoryUser.findAll();
            const categoryUser = CategoryUser.findByPk(User.categoryId);
            const departamento = await Departamento.findAll();
            console.log({departamento});
            return res.render('admin/usersEdit.ejs', {User, categoryUser, category, departamento});

        } catch (error) {
            console.log();
        }
	},
	update: (req, res) => {

	},
	delete: (req, res) => {
	
	}
}