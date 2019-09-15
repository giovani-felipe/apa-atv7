const Base = require('./base');

class ClasseDomain extends Base {
    constructor(id, name, discipline = []) {
        super(id);
        this.name = name;
        this.discipline = discipline;
    }
}

module.exports = ClasseDomain;