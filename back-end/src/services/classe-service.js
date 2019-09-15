const { Classe: repository, Discipline } = require('../repositories/models');
const { ClasseDomain, DisciplineDomain } = require('../domain');
class ClasseService {

  async findAll() {
    let data = await repository.findAll(
      {
        include: [{ model: Discipline, attributes: { exclude: ['createdAt', 'updatedAt'] } }],
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      });

    let classes = [];

    data.forEach(ele => {

      let disciplines = [];

      ele.Disciplines.forEach(({ id, name }) => disciplines.push(new DisciplineDomain(id, name)));

      classes.push(new ClasseDomain(ele.id, ele.name, disciplines))
    });

    return classes;
  }

  async findClass(id = null) {
    if (id === null)
      throw new Error('Class id is necessary!');

    let data = await repository.findOne(
      {
        where: { id },
        include: [{ model: Discipline, attributes: { exclude: ['createdAt', 'updatedAt'] } }],
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      });

    let disciplines = [];

    data.Disciplines.forEach(({ id, name }) => disciplines.push(new DisciplineDomain(id, name)));

    return new ClasseDomain(data.id, data.name, disciplines);
  }
}

module.exports = ClasseService;