<<<<<<< HEAD
const { StudentsMock } = require('./moks');
const { StudentDomain } = require('../domain');
class StudentService {

  findAll() {
    return StudentsMock
      .map(({ id, name, cpf, fone, email, address, birth }) => new StudentDomain(id, name, cpf, fone, email, address, birth));
  }

  findStudent(idStudent) {
    const { id, name, cpf, fone, email, address, birth } = StudentsMock.find(ele => ele.id == idStudent);
    return new StudentDomain(id, name, cpf, fone, email, address, birth)
  }

=======
const { Student: repository } = require('../repositories/models');
const { StudentDomain } = require('../domain');

class StudentService {
    
    async findAll() {
        let data = await repository.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt']}
        });

        let student = [];
        
        data.forEach(ele => student.push(new StudentDomain(ele.id, ele.name, ele.registration, ele.cpf, ele.fone, ele.email, ele.address, ele.birth)));

        return student;
    }

    async findStudent(id = null) {
        if (id == null) {
            throw new Error('Student id is necessary!')
        }

        let data = await repository.findOne(
            {
                where: { id },
                include: [{ model: Student, attributes: { exclude: ['createdAt', 'updatedAt']}}],
                attributes: { exclude: ['createdAt', 'updatedAt']}
            }
        );
        
        let student = [];

        data.forEach(({ id, name, registration, cpf, fone, email, address, birth}) => student.push(new StudentDomain(id, name, registration, cpf, fone, email, address, birth)));

        return new StudentDomain(data.id, data.name, data.registration, data.cpf, data.fone, data.email, data.address, data.birth);
    }
    
    async createStudent(object) {

        let data = await repository.create(object);
        return data;
    }

    async putStudent(id, object) {

        let data = await repository.update(id, object);
        return data;
    }

    async destroyStudent(id) {

        let data = await repository.destroy(id);
        return data;
    }
>>>>>>> fdf8e5224f2c5913f87abd3de5b57d67db4a8c4c
}

module.exports = StudentService;