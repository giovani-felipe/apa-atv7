const Base = require('./base');

class Matricula extends Base {
    constructor() {
        this._turma;
        this._codigo;
    }

    get turma() { return this._turma; }
    get codigo() { return this._codigo; }
}

module.exports = Matricula;