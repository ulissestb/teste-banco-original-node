const { Model, DataTypes } = require('sequelize')

class Endereco extends Model {
    static init(sequelize){
        super.init({
            cliente_id: {
                type: DataTypes.INTEGER
            },
            cep: {
                type: DataTypes.STRING,
            },
            logradouro: { 
                type: DataTypes.STRING,
            },
            bairro: {
                type: DataTypes.STRING
            },
            localidade: {
                type: DataTypes.STRING
            },
            uf: {
                type: DataTypes.STRING
            }
        }, {
            sequelize,
            tableName: 'enderecos'
        })
    }
    static associate(models){
        this.belongsTo(models.Cliente, {foreignKey: 'cliente_id', as: 'owner'})
    }
}


module.exports = Endereco