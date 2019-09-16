const Base = require('./base');

class RegistrationDomain extends Base {
    
    constructor() {
        super();
        this._classe;
        this._code;
        this._state;
    }

    get classe() { return this._classe; }
    get code() { return this._code; }
    get state() { return this._state; }
}

module.exports = RegistrationDomain;