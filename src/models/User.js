//1. Guardar al usuario en la DB
//2. Buscar al usuario a logear por su email
//3. Buscar a un usuario por su id
//4. Editar la informacion de un usuario
//5. Eliminar a un usuario de la DB
const fs = require('fs');


const User = {

    fileName:'./src/database/users.json',

    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    generateId: function() {
        let allUser = this.findAll();
        let lastUser = allUser.pop();
        const id = lastUser ? lastUser.id + 1 : 1;
        return id; 
    },

    findAll:  function () {
        return this.getData();
    },

    findByPk: function (id) {
        let allUser = this.findAll();
        let userFound = allUser.find(el =>  el = el.id === id);
        return userFound;
    },

    findbyField: function(field, text) {
        let allUser = this.findAll();
        let userFound = allUser.find(el =>  el = el[field] === text);
        return userFound;
    },

    create: function(userData){
        let allUser = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUser.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUser, null, ' '));
        return newUser;
    },

    delete: function (id){
        let allUser = this.findAll();
        let finalUser = allUser.filter(el =>  el.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUser, null, ' '));
        return true;
    }
}


module.exports = User;