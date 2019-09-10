class RegistrationController {
    constructor() {

    }

    fetchAll(req, res, next) {
        res.json({ data: 'fetchAll' });
    }

    fetchRegistration(req, res, next) {
        res.json({ data: 'fetchRegistration' });
    }

}

module.exports = RegistrationController;