module.exports = (sequelize, dataTypes)=>{
    let alias = "CategoryProduct";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255)
        }
    }
    let config = {
        FOREIGN_KEY_CHECKS: 0,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
    }
    const CategoryProduct = sequelize.define(alias,cols,config);
    CategoryProduct.associate = function(models){
        CategoryProduct.hasMany(models.Product,{
            as: "Product",
            foreignKey: "categoryProductsId"
        })
    }
    return CategoryProduct;
}