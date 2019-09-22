'use strict';
module.exports = (sequelize, DataTypes) => {
  const enroll = sequelize.define('enroll', {
    idStudent: DataTypes.INTEGER,
    idOffer: DataTypes.INTEGER,
    state: DataTypes.BOOLEAN
  }, {});
  enroll.associate = function(models) {
    // associations can be defined here
  };
  return enroll;
};