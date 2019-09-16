'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Students', [{
        name: 'Student 1',
        cpf: '12345678909',
        fone: '31988888888',
        email: 'student1@gmailinator.com',
        address: 'Address',
        birth: '01/01/1984',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
