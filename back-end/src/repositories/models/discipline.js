'use strict';
module.exports = (sequelize, DataTypes) => {
  const Discipline = sequelize.define('Discipline', {
    name: DataTypes.STRING
  }, {});
  Discipline.associate = function(models) {
    // associations can be defined here
  };
  return Discipline;
};