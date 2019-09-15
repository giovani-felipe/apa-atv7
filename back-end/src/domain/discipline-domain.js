const Base = require('./base');

class DisciplineDomain extends Base {
    constructor(id, name) {
        super(id);
        this.name = name;
    }
}

module.exports = DisciplineDomain;