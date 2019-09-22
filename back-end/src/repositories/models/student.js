'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    fone: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    birth: DataTypes.DATE
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
