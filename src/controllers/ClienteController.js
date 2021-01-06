const axios = require('axios')
const  validarCPF  = require('../helpers/validarCPF')
const validaEmail = require('../helpers/validaEmail')
const Cliente = require('../models/Cliente')
const Endereco = require('../models/Endereco')

module.exports = {
    cadastrarCliente(request, response){
        const {cpf, email, nome, cep } = request.body
        axios.get(`http://localhost:8080/api/cep/${cep}`)
            .then(async (resp) => {
                const { logradouro, bairro, localidade, uf} = resp.data
                if(logradouro != null){
                    let cliente = {}
                    let endereco = {}
                    try {
                        if(validarCPF(cpf)){
                            if(validaEmail(email)){
                                cliente = await Cliente.create({cpf, email, nome})
                            }else{
                                return response.status(400).json({'message': 'E-mail inválido'})
                            }
                        }else{
                            return response.status(400).json({'message': 'CPF inválido'})
                        }
                    } catch (error) {
                        return response.status(400).json({'message': 'Cliente já cadastrado'})                   
                    }
                    try {
                        let cliente_id = cliente.dataValues.id
                        endereco = await Endereco.create({ cliente_id, cep, logradouro, bairro, localidade, uf})
                    } catch (errr) {
                        Cliente.destroy({where: {'id': cliente.dataValues.id}})
                        return response.status(400).json({'message': 'Ocorreu um erro ao salvar o endereço'})
                    }
                    return response.status(201).json({cliente, endereco})
                }else{
                    return response.status(400).json({'message': 'O cep é invalido'})
                }
            })
    },
    buscarClientePorEmail(req, res){
        const { email } = req.body
        Cliente.findAll({where: { "email": email}, include: {association: 'endereco'}})
            .then((response)=> {
                return res.status(200).json(response)
            })
    }
}