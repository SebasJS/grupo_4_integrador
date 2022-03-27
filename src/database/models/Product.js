const sequelize = require("sequelize");

module.exports = (sequelize,dataTypes) => {
    let alias = "Product";
    let cols = {
        id : {
            type: dataTypes.INT.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.VARCHAR(255),
            allowNull: false
        },
        price: {
            type: dataTypes.INT,
            allowNull: false
        },
        discount: {
            type: dataTypes.INT,
            allowNull: false
        },
        stock: {
            type: dataTypes.INT,
            allowNull: false
        },
        tag:{
            type: dataTypes.VARCHAR(255),
            allowNull: false
        },
        description:{
            type: dataTypes.VARCHAR(255),
            allowNull: false
        },
        imagen: {
            type: dataTypes.VARCHAR(255),
        }
    };
    let config = {
        FOREIGN_KEY_CHECKS: 0,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
    }
    const Product = sequelize.define(alias,cols,config);


    return Product;
}