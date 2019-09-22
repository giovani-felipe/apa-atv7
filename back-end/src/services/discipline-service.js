const { Discipline: repository } = require('../repositories/models');
const { DisciplineDomain } = require('../domain');
class DisciplineService {

  async findAll() {
    let data = await repository.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } });

    let disciplines = [];

    data.forEach(ele => disciplines.push(new DisciplineDomain(ele.id, ele.name)));

    return disciplines;
  }

  async findDiscipline(id = null) {
    if (id === null)
      throw new Error('Discipline id is necessary!');

    let data = await repository.findOne(
        {
          where: { id },
          include: [{ model: Discipline, attributes: { exclude: ['createdAt', 'updatedAt'] } }],
          attributes: { exclude: ['createdAt', 'updatedAt'] }
        });

    let disciplines = [];

    data.Disciplines.forEach(({ id, name }) => disciplines.push(new DisciplineDomain(id, name)));

    return new DisciplineDomain(data.id, data.name);
  }

}

module.exports = DisciplineService;