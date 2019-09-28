const { ClasseDomain, DisciplineDomain } = require('../domain');
const { ClassesMock } = require('./moks');
const DisciplineService = require('./discipline-service'),
  OfferService = require('./offer-service');
class ClasseService {

  fetchAll() {
    return ClassesMock.map(({ id, name }) => new ClasseDomain(id, name));
  }

  fetchClass(idClass) {
    const { id, name } = ClassesMock.find(ele => ele.id == idClass);

    return new ClasseDomain(id, name);
  }

  fetchDisciplines(id = null) {
    const service = new DisciplineService();
    const offerService = new OfferService();
    const ids = offerService.fetchDisciplineByClass(id);

    return service.fetchDisciplines(ids);
  }

  fetchDiscipline(idClass, idDiscipline) {
    const offerService = new OfferService();
    const service = new DisciplineService();

    const { disciplineId } = offerService.fetchByClassAndDiscipline(idClass, idDiscipline);

    return service.fetchDiscipline(disciplineId);
  }
}

module.exports = ClasseService;