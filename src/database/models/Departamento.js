module.exports = (sequelize,dataTypes) => {
    let alias = "Departamento";
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
        timestamps: false,
        deletedAt: false,      
    }
    const Departamento = sequelize.define(alias,cols,config);
    Departamento.associate = function(models){
        Departamento.hasMany(models.User,{
            as:"User",
            foreignKey: "departamentoId"
        })
        Departamento.hasMany(models.City,{
            as:"City",
            foreignKey: "departamentoId"
        })
    }
    return Departamento;
}