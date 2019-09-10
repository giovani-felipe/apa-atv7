"use strict";
module.exports = (sequelize, DataTypes) => {
  const Classe = sequelize.define(
    "Classe",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Classe.associate = function(models) {
    Classe.belongsToMany(models["Discipline"], {
      through: "ClasseDiscipline",
      foreignKey: 'class_id'
    });
  };
  return Classe;
};
