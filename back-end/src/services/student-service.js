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
}

module.exports = StudentService;