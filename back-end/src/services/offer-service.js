const { OfferMock } = require('./moks');
class OfferService {
  findByClassAndDiscipline(idClass, idDiscipline) {
    return OfferMock.find(ele => ele.classId == idClass && ele.disciplineId == idDiscipline);
  }
}

module.exports = OfferService;