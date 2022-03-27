module.exports = (Sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type : dataTypes.VARCHAR(255),
            allowNull: false
        },
        email:{
            type : dataTypes.VARCHAR(255),
            allowNull: false
        },
        password:{
            type : dataTypes.VARCHAR(255),
            allowNull: false
        },
        phone:{
            type : dataTypes.INT,
            allowNull: false
        },
        card:{
            type : dataTypes.INT,
            allowNull: false
        },
        imagen:{
            type : dataTypes.VARCHAR(255),
            allowNull: false
        },
        direccion: {
            type : dataTypes.VARCHAR(255),
            allowNull: false
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
