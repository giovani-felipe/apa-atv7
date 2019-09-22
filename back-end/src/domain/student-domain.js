const Base = require('./base');

class StudentDomain extends Base {

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
}

module.exports = StudentDomain;