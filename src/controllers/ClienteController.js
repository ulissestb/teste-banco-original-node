const axios = require('axios')
const Cliente = require('../models/Cliente')

module.exports = {
    cadastrarCliente(req, res){
        const {cpf, email, nome, cep } = req.body
        axios.get(`http://localhost:8080/api/cep/${cep}`)
            .then((resposta)=>{
                console.log(resposta.data)
            })
        Cliente.create({cpf, email, nome, cep})
            .then((response)=> { 
                return res.json(response)
            })
            .catch((err)=> {
                console.log(err)
                return res.json({"Error": "o cliente cadastrado já existe"})
            })
    },
    buscarClientePorEmail(req, res){
        const { email } = req.body
        Cliente.findAll({where: { "email": email}})
            .then((response)=> {
                //TODO: criar método pra montar endereço
                return res.json(response)
            })
    }
}