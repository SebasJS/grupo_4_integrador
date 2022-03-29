module.exports = (sequelize,dataTypes) => {
    let alias = "City";
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
    const City = sequelize.define(alias,cols,config);
    City.associate = function(models){
        City.belongsTo(models.Departamento,{
            as:"Departamento",
            foreignKey: "DepartamentoId"
        })
    }
    return City;
}