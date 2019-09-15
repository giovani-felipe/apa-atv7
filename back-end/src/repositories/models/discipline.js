module.exports = (sequelize, DataTypes) => {
  const Discipline = sequelize.define(
    'Discipline',
    {
      name: DataTypes.STRING
    },
    {}
  );
  Discipline.associate = ({ Classe }) => Discipline.belongsToMany(Classe, { through: 'ClassesDisciplines', foreignKey: 'disciplineId' });
  return Discipline;
};
