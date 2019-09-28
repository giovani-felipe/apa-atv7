const { DisciplinesMock } = require('./moks');
const { DisciplineDomain } = require('../domain');
class DisciplineService {

  fetchAll() {
    return DisciplinesMock.map(({ id, name, description }) => new DisciplineDomain(id, name, description));
  }

  fetchDiscipline(id) {
    return DisciplinesMock.find(ele => ele.id == id);
  }

  fetchDisciplines(ids = []) {
    return DisciplinesMock.filter(ele => ids.includes(ele.id))
      .map(({ id, name, description }) => new DisciplineDomain(id, name, description));
  }
}

module.exports = DisciplineService;