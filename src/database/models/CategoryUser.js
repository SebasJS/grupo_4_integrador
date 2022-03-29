module.exports = (sequelize,dataTypes) => {
    let alias = "CategoryUser";
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

    const CategoryUser = sequelize.define(alias,cols,config);
    CategoryUser.associate = function(models){
        CategoryUser.hasMany(models.User, {
            as: "User",
            foreignKey: "categoryId"
        })
    }
    return CategoryUser


}