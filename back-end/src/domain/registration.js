const Base = require('./base');

class Registration extends Base {
    constructor() {
        this._classe;
        this._code;
    }

    get classe() { return this._classe; }
    get code() { return this._code; }
}

module.exports = Registration;