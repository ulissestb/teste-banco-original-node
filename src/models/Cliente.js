const { Model, DataTypes } = require('sequelize')

class Cliente extends Model {
    static init(sequelize){
        super.init({
            cpf: {
                type: DataTypes.STRING,
            },
            email: { 
                type: DataTypes.STRING,
                
            },
            nome: {
                type: DataTypes.STRING
            },
            cep: {
                type: DataTypes.STRING
            }
        }, {
            sequelize,
            tableName: 'clientes'
        })
    }
}


module.exports = Cliente