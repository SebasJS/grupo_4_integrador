/*module.exports = (Sequelize, dataTypes) => {
    let alias = "CategoryProduct";
    let cols = {
        id: {
            type: dataTypes.INT,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type : dataTypes.VARCHAR(255),
            allowNull: false
        }
    };
    let config = {
        FOREIGN_KEY_CHECKS: 0,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        
    }
    const CategoryProduct = Sequelize.define(alias,cols,config);
    return CategoryProduct;
}*/