'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Disciplines', [
    {
      name: 'Inglês',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Português',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Disciplines', null, {})
};
