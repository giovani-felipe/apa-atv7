const { DisciplinesMock } = require('./moks');
const { DisciplineDomain } = require('../domain');
class DisciplineService {

  findAll() {
    return DisciplinesMock.map(({ id, name }) => new DisciplineDomain(id, name));
  }

<<<<<<< HEAD
  findDiscipline(id) {
    return DisciplinesMock.find(ele => ele.id == id);
  }
=======
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

>>>>>>> fdf8e5224f2c5913f87abd3de5b57d67db4a8c4c
}

module.exports = DisciplineService;