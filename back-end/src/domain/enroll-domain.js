const Base = require('./base');

class EnrollDomain extends Base {
    constructor(id, idStudent, idOffer, state, createdAt) {
        super(id);
        this.idStudent = idStudent;
        this.idOffer = idOffer;
        this.state = state;
        this.createdAt = createdAt;
    }
}

module.exports = EnrollDomain;