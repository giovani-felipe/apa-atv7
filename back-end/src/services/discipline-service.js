const { DisciplinesMock } = require('./moks');
const { DisciplineDomain } = require('../domain');
class DisciplineService {

  findAll() {
    return DisciplinesMock.map(({ id, name }) => new DisciplineDomain(id, name));
  }

  findDiscipline(id) {
    return DisciplinesMock.find(ele => ele.id == id);
  }
}

module.exports = DisciplineService;