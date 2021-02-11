const express = require('express')
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDoc = YAML.load('./swagger.yaml')

require('./database/index')
const routes = require('./routes')

const server = express()

server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
server.use(express.json())
server.use(routes)
server.listen(3333)