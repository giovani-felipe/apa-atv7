const Base = require('./base');

class StudentDomain extends Base {
<<<<<<< HEAD
    constructor(id, name, cpf, fone, email, address, birth) {
        super(id);
        this.name = name;
        this.cpf = cpf;
        this.fone = fone;
        this.email = email;
        this.address = address;
        this.birth = birth;
    }
=======

    constructor(id, name, registration, cpf, fone, email, address, birth) {
        super(id);
        this._name = name;
        this._registration = registration;
        this._cpf = cpf;
        this._fone = fone;
        this._email = email;
        this._address = address;
        this._birth = birth;
    }

    get name() { return this._name; }
    get registration() { return this._registration; }
    get cpf() { return this._cpf; }
    get fone() { return this._fone; }
    get email() { return this._email; }
    get address() { return this._address; }
    get birth() { return this._birth; }
>>>>>>> fdf8e5224f2c5913f87abd3de5b57d67db4a8c4c
}

module.exports = StudentDomain;