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
        },
        categoryId: {
            type: dataTypes.BIGINT(10).UNSIGNED
        },
        departamentoId: {
            type: dataTypes.BIGINT(10).UNSIGNED
        }
    }
    let config = {
        FOREIGN_KEY_CHECKS: 0,
        timestamps: false,
        deletedAt: false,        
    }

    const User = Sequelize.define(alias,cols,config);

    User.associate = function(models){
        User.belongsTo(models.CategoryProduct,{
            as: "CategoryUser",
            foreignKey: "categoryId"
        })
        User.belongsTo(models.Departamento,{
            as: "Departamento",
            foreignKey: "departamentoId"
        })
    }

    return User;
}