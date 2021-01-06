const Sequelize = require('sequelize')
const config = require('../config/database')

const Cliente = require('../models/Cliente')
const Endereco = require('../models/Endereco')
const connection = new Sequelize(config)

Endereco.init(connection)
Cliente.init(connection)

Cliente.associate(connection.models)
Endereco.associate(connection.models)
module.exports = connection