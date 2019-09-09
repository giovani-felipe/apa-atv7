const Base = require('./base');

class Classe extends Base {
    constructor() {
        this._name;
        this._discipline = [];
    }

    get name() { return this._name; }
    get dicipline() { return this._discipline; }
}

module.exports = Classe;