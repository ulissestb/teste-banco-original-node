const express = require('express')
const ClienteController = require('./controllers/ClienteController')

const routes = express.Router()

routes.post('/clientes', ClienteController.cadastrarCliente)

module.exports = routes