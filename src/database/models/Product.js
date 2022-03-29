module.exports = (sequelize,dataTypes) => {
    let alias = "Product";
    let cols = {
        id : {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255)
        },
        price: {
            type: dataTypes.INTEGER
        },
        discount: {
            type: dataTypes.INTEGER
        },
        stock: {
            type: dataTypes.INTEGER
        },
        tag:{
            type: dataTypes.STRING(255)
        },
        description:{
            type: dataTypes.STRING(255)
        },
        imagen: {
            type: dataTypes.STRING(255)
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