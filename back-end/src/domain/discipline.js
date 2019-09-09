const Base = require('./base');

class Discipline extends Base {
    constructor() {
        this._nome;
    }

    get nome() { return this._nome; }
}

module.exports = Discipline;