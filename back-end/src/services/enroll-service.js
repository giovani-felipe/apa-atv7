const { OfferMock } = require('./moks');
const ClasseService = require('./classe-service'),
  DisciplineService = require('./discipline-service'),
  StudentService = require('./student-service'),
  OfferService = require('./offer-service');

const { enroll } = require('../repositories/models');

class EnrollService {

  async enroll(idStudent, idClass, idDiscipline) {
    const student = this.findStudent(idStudent);

    const classe = this.findClass(idClass);

    const discipline = this.findDiscipline(idDiscipline);

    const offer = this.findOffer(classe.id, discipline.id);

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

  findStudent(id) {
    const studentService = new StudentService();
    const student = studentService.findStudent(id);

    if (typeof student == 'undefined')
      throw new Error('Student not found!');

    return student;
  }

  findClass(id) {
    const classService = new ClasseService();
    const classe = classService.findClass(id);

    if (typeof classe == 'undefined')
      throw new Error('Class not found!');
    return classe;
  }

  findDiscipline(id) {
    const disciplineService = new DisciplineService();
    const discipline = disciplineService.findDiscipline(id);

    if (typeof discipline == 'undefined')
      throw new Error('Discipline not found!');
    return discipline;
  }

  findOffer(idClass, idDiscipline) {
    const offer = new OfferService().findByClassAndDiscipline(idClass, idDiscipline);

    if (typeof offer == 'undefined')
      throw new Error('Class has not disciplines!');
    return offer;
  }
}

module.exports = EnrollService;