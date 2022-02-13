const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../database/users.json");

const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));


const controller = {

    loginUser: (req,res)=> {
        res.render(("users/login"));
    },
    registerUser: (req,res) => {
        res.render(("users/registro"));
    },
    createUser: (req, res) => {
		
		let newUser = {
			id: users[users.length - 1].id + 1,
            first_name: req.body.nombre,
            last_name: req.body.nombre,
            email: req.body.email,
            password: req.body.password,
            category: 'user',
            image: req.body.telefono,
			...req.body
		};

		users.push(newUser);
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));

		res.redirect('/');
	}
}

module.exports = controller;

