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
        
        console.log(req);
		
		let newUser = {
			id: users[users.length - 1].id + 1,
            nombre: req.nombre,
			...req.body,

            
			
		};

		users.push(newUser);
		fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));

		res.redirect('/');
	}
}

module.exports = controller;

