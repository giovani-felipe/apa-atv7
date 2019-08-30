const Base = require('./base');

class Disciplina extends Base {
    constructor() {
        this._nome;
    }

    get nome() { return this._nome; }
}

module.exports = Disciplina;