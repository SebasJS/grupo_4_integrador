module.exports = (Sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type : dataTypes.STRING(255),
        },
        email:{
            type : dataTypes.STRING(255),
        },
        password:{
            type : dataTypes.STRING(255),
        },
        phone:{
            type : dataTypes.INTEGER,
        },
        card:{
            type : dataTypes.INTEGER,
        },
        imagen:{
            type : dataTypes.STRING(255),
        },
        direccion: {
            type : dataTypes.STRING(255),
        }
    }
    let config = {
        FOREIGN_KEY_CHECKS: 0,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        
    }

    const User = Sequelize.define(alias,cols,config);
    return User;
}