const Base = require('./base');

class StudentDomain extends Base {
    constructor(id, name, cpf, fone, email, address, birth) {
        super(id);
        this.name = name;
        this.cpf = cpf;
        this.fone = fone;
        this.email = email;
        this.address = address;
        this.birth = birth;
    }
}

module.exports = StudentDomain;