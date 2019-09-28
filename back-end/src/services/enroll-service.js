const { EnrollDomain } = require('../domain');
const ClasseService = require('./classe-service'),
  DisciplineService = require('./discipline-service'),
  StudentService = require('./student-service'),
  OfferService = require('./offer-service');


const { enroll } = require('../repositories/models');

class EnrollService {

  async enroll(idStudent, idClass, idDiscipline) {
    const student = this.fetchStudent(idStudent);

    const classe = this.fetchClass(idClass);

    const discipline = this.fetchDiscipline(idDiscipline);

    const offer = this.fetchOffer(classe.id, discipline.id);

    const total = await enroll.count({ where: { idOffer: offer.id } });

    if (total < offer.subscription)
      return await enroll
        .create({
          idStudent: student.id,
          idOffer: offer.id,
          state: true
        });

    throw new Error("No vacancies");

  }

  async fetchAll() {
    return await enroll.findAll();
  }

  fetchStudent(id) {
    const studentService = new StudentService();
    const student = studentService.fetchStudent(id);

    if (typeof student == 'undefined')
      throw new Error('Student not found!');

    return student;
  }

  fetchClass(id) {
    const classService = new ClasseService();
    const classe = classService.fetchClass(id);

    if (typeof classe == 'undefined')
      throw new Error('Class not found!');
    return classe;
  }

  fetchDiscipline(id) {
    const disciplineService = new DisciplineService();
    const discipline = disciplineService.fetchDiscipline(id);

    if (typeof discipline == 'undefined')
      throw new Error('Discipline not found!');
    return discipline;
  }

  fetchOffer(id) {
    const offer = new OfferService().fetch(id);

    return offer;
  }

  fetchOfferByClassAndDiscipline(idClass, idDiscipline) {
    const offer = new OfferService().fetchByClassAndDiscipline(idClass, idDiscipline);

    if (typeof offer == 'undefined')
      throw new Error('Class has not disciplines!');
    return offer;
  }

  async fetch(idEnroll) {
    const { id, idStudent, idOffer, state, createdAt } = await enroll.findByPk(idEnroll);

    return new EnrollDomain(id, idStudent, idOffer, state, createdAt)
  }
}

module.exports = EnrollService;