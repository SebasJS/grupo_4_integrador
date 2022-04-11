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
        sku:{
            type: dataTypes.STRING(255)
        },
        tag:{
            type: dataTypes.STRING(255)
        },
        description:{
            type: dataTypes.STRING(255)
        },
        categoryProductsId:{
            type: dataTypes.STRING(255)
        },
        imagen: {
            type: dataTypes.STRING(255)
        }
    };
    let config = {
        FOREIGN_KEY_CHECKS: 0,
        timestamps: false,
        deletedAt: false,
    }
    const Product = sequelize.define(alias,cols,config);
    Product.associate = function(models){
        Product.belongsTo(models.CategoryProduct, {
            as: "categoryProducts",
            forenignKey:"categoryProductsId"
        })
    }

    return Product;
}