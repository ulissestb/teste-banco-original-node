const express = require('express')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
require('./database/index')
const routes = require('./routes')

const server = express()

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Teste Banco Original API',
            version: '1.0.0',
        },
        servers: ['http://localhost:3333']
    },
    apis: ["*.js"]
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)


server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
server.use(express.json())
server.use(routes)
server.listen(3333)