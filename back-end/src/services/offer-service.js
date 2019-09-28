const { OfferMock } = require('./moks');
class OfferService {
  fetchByClassAndDiscipline(idClass, idDiscipline) {
    return OfferMock.find(ele => ele.classId == idClass && ele.disciplineId == idDiscipline);
  }

  fetchDisciplineByClass(id) {
    return OfferMock.filter(ele => ele.classId == id).map(ele => ele.disciplineId);
  }

  fetch(id) {
    return OfferMock.find(ele => ele.id == id);
  }
}

module.exports = OfferService;