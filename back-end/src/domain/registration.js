const Base = require('./base');

class Registration extends Base {
    constructor() {
        this._classe;
        this._code;
        this._state;
    }

    get classe() { return this._classe; }
    get code() { return this._code; }
    get state() { return this._state; }
}

module.exports = Registration;