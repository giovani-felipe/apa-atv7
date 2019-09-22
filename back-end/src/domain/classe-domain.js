const Base = require('./base');

class ClasseDomain extends Base {
    constructor(id, name) {
        super(id);
        this.name = name;
    }
}

module.exports = ClasseDomain;