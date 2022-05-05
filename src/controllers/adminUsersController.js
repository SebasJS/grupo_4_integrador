const { render } = require('ejs');
const db = require('../database/models');
const sequelize = db.sequelize;
const Users = db.User;
const CategoryUser = db.CategoryUser;
const Departamento = db.Departamento;
const bCrypt = require('bcryptjs');
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
            console.log("entre a create");
            let image = req.file ? req.file.filename : "default-image.png";
            console.log('el file es : '+ req.file );
            console.log("La imagen es "+ image);
            const { name, email, password, phone, card, imagen, direccion, categoryId, departamentoId } = req.body;
            
            console.log(password);
            const passEncript = await bCrypt.hash(password,10);
            console.log(passEncript);
            await db.User.create({
                name,
                email,
                password : passEncript,
                phone,
                card,
                imagen : image,
                direccion,
                categoryId,
                departamentoId
            });
            /*let comparar = bCrypt.compareSync('Manuel.991',passEncript);
            if (comparar) {
                console.log("se comparo de buena manera");
            }*/
            return res.redirect('/admin/users/login')
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
            console.log("Entre a update");
            let image = req.file ? req.file.filename : "default-image.png";
            console.log("La imagen es "+ image);
            const id = req.params.id;
            const { name, email, password, phone, card, direccion, categoryId, departamentoId } = req.body;
            const passEncript = await bCrypt.hash(password,10);
            console.log(passEncript);
            await db.User.update({
                name,
                email,
                password : passEncript,
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
	},
    loginUser: (req,res) => {
        console.log("Hola desde userController");
        return res.render("users/login.ejs");
    },    
    loginProcess: async (req, res) => {
        console.log("entre a login process");
        const { email } = req.body;
        let userToLogin = await Users.findOne({
            where: {email: email}
        })
        if(userToLogin){
            const passwordCorrecta = bCrypt.compareSync(req.body.password,userToLogin.password);
            if(passwordCorrecta && userToLogin.categoryId == 1){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                const users = await Users.findAll();
                /*if(req.body.rememberInput){
                    res.cookie('email', req.body.email, {maxAge: 30000});
                }*/
                //return res.send('Esta es la cuenta de '+userToLogin.name +' y es administrador');
                return res.redirect('/');
            }else if(passwordCorrecta && userToLogin.categoryId == 2){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                //return res.send('Esta es la cuenta de '+userToLogin.name +' y es usuario normal');
                return res.redirect('/'); 
            }else if(!passwordCorrecta){
                console.log("La contraseña es incorrecta");
                return res.render('users/login.ejs',{
                    errors: {
                        password: {
                            msg: "Datos invalidos"
                        }
                    }
                })
            }

        }
        
    },    
    logout: (req, res) => {
        //res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}
