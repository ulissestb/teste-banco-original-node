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
        }, {
            sequelize,
            tableName: 'clientes'
        })
    }
    static associate(models){
        this.hasOne(models.Endereco, {foreignKey: 'cliente_id', as: 'endereco'})
    }
}


module.exports = Cliente