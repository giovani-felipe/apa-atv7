module.exports = (sequelize, DataTypes) => {
  const Classe = sequelize.define(
    'Classe',
    {
      name: DataTypes.STRING
    },
    {}
  );
  Classe.associate = ({ Discipline }) => Classe.belongsToMany(Discipline, { through: 'ClassesDisciplines', foreignKey: 'classId' });
  return Classe;
};
