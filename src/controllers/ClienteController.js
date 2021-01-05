const Cliente = require('../models/Cliente')

module.exports = {
    cadastrarCliente(req, res){
        const {cpf, email, nome, cep }= req.body
        Cliente.create({cpf, email, nome, cep})
            .then((response)=> { 
                return res.json(response)
            })
            .catch(()=> {
                return res.json({"Error": "o cliente cadastrado já existe"})
            })
    }
}