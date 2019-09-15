'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('ClassesDisciplines', [
    {
      classId: 1,
      disciplineId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      classId: 1,
      disciplineId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]),
  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('ClassesDisciplines', null, {})
};
