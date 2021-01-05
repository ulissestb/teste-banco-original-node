const Sequelize = require('sequelize')
const config = require('../config/database')

const Cliente = require('../models/Cliente')
const connection = new Sequelize(config)

Cliente.init(connection)
module.exports = connection