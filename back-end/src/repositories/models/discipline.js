"use strict";
module.exports = (sequelize, DataTypes) => {
  const Discipline = sequelize.define(
    "Discipline",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Discipline.associate = function(models) {
    Classe.belongsToMany(models["Classe"], {
      through: "ClasseDiscipline",
      foreignKey: 'discipline_id'
    });
  };
  return Discipline;
};
