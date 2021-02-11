const express = require('express')
const ClienteController = require('./controllers/ClienteController')

const routes = express.Router()

routes.post('/cliente', ClienteController.cadastrarCliente)

routes.post('/email', ClienteController.buscarClientePorEmail)

module.exports = routes