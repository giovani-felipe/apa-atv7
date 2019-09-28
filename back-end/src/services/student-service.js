const { StudentsMock } = require('./moks');
const { StudentDomain } = require('../domain');
class StudentService {

    fetchAll() {
        return StudentsMock
            .map(({ id, name, cpf, fone, email, address, birth }) => new StudentDomain(id, name, cpf, fone, email, address, birth));
    }

    fetchStudent(idStudent) {
        const { id, name, cpf, fone, email, address, birth } = StudentsMock.find(ele => ele.id == idStudent);
        return new StudentDomain(id, name, cpf, fone, email, address, birth)
    }

}

module.exports = StudentService;