const { ClasseDomain, DisciplineDomain } = require('../domain');
const { ClassesMock, OfferMock, DisciplinesMock } = require('./moks');
class ClasseService {

  findAll() {
    return ClassesMock.map(({ id, name }) => new ClasseDomain(id, name));
  }

  findClass(id = null) {
    return ClassesMock.find(ele => ele.id == id);
  }
}

module.exports = ClasseService;