const { Discipline: repository } = require('../repositories/models');
const { DisciplineDomain } = require('../domain');
class DisciplineService {

  async findAll() {
    let data = await repository.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } });

    let disciplines = [];

    data.forEach(ele => disciplines.push(new DisciplineDomain(ele.id, ele.name)));

    return disciplines;
  }

}

module.exports = DisciplineService;