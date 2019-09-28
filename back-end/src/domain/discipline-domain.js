const Base = require('./base');

class DisciplineDomain extends Base {
    constructor(id, name, description) {
        super(id);
        this.name = name;
        this.description = description;
    }
}

module.exports = DisciplineDomain;