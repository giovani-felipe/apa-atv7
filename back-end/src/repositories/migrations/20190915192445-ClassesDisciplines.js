'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('ClassesDisciplines', {
    classId: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    disciplineId: {
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('ClassesDisciplines')
};
