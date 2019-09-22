const Base = require('./base');

class RegistrationDomain extends Base {
    constructor(id, discipline, code, state) {
        super(id);
        this.discipline = discipline;
        this.state = state;
    }
}

module.exports = RegistrationDomain;