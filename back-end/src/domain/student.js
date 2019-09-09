const Base = require('./base');

class Student extends Base {
    constructor() {
        this._name;
        this._registration;
        this._cpf;
        this._fone;
        this._email;
        this._address;
        this._birth;
    }

    get name() { return this._name; }
    get registration() { return this._registration; }
    get cpf() { return this._cpf; }
    get fone() { return this._fone; }
    get email() { return this._email; }
    get address() { return this._address; }
    get birth() { return this._birth; }
}

module.exports = Student;