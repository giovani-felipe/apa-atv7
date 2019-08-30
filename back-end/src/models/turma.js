const Base = require('./base');

class Turma extends Base {
    constructor() {
        this._nome;
        this._disciplinas = [];
    }

    get nome() { return this._nome; }
    get disciplinas() { return this._disciplinas; }
}

module.exports = Turma;