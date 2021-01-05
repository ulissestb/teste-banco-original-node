const express = require('express')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

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
server.listen(3333)