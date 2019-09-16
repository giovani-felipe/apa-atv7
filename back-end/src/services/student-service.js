const { Classe: repository } = require('../repositories/models');
const { StudentDomain } = require('../domain');

class StudentService {

  async findAll() {
    let data = await repository.findAll(
      {
        include: [{ model: Student, attributes: { exclude: ['createdAt', 'updatedAt'] } }],
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      });

    let students = [];

    data.forEach(ele => {

      let Students = [];

      ele.Students.forEach(({ id, name }) => Students.push(new StudentDomain(id, name)));

      students.push(new StudentDomain(ele.id, ele.name, Students))
    });

    return students;
  }

  async findClass(id = null) {
    if (id === null)
      throw new Error('Class id is necessary!');

    let data = await repository.findOne(
      {
        where: { id },
        include: [{ model: Student, attributes: { exclude: ['createdAt', 'updatedAt'] } }],
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      });

    let Students = [];

    data.Students.forEach(({ id, name }) => Students.push(new StudentDomain(id, name)));

    return new StudentDomain(data.id, data.name, Students);
  }
}

module.exports = StudentService;