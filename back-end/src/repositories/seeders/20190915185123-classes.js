'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Classes', [
    {
      name: '1 - Primeira',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: '2 - Segunda',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Classes', null, {})


};
