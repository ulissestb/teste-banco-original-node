'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enderecos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'clientes', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      logradouro: { 
        type: Sequelize.STRING,
      },
      bairro: {
          type: Sequelize.STRING
      },
      localidade: {
          type: Sequelize.STRING
      },
      uf: {
          type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('enderecos')
  }
};
