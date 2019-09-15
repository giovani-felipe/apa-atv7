'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define('Registration', {
    code: DataTypes.STRING,
    state: DataTypes.BOOLEAN
  }, {});
  Registration.associate = function(models) {
    // associations can be defined here
  };
  return Registration;
};