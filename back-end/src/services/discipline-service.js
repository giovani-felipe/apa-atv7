const { DisciplinesMock } = require('./moks');
const { DisciplineDomain } = require('../domain');
class DisciplineService {

  fetchAll() {
    return DisciplinesMock.map(({ id, name }) => new DisciplineDomain(id, name));
  }

  fetchDiscipline(id) {
    return DisciplinesMock.find(ele => ele.id == id);
  }

  fetchDisciplines(ids = []) {
    return DisciplinesMock.filter(ele => ids.includes(ele.id))
      .map(({ id, name }) => new DisciplineDomain(id, name));
  }
}

module.exports = DisciplineService;