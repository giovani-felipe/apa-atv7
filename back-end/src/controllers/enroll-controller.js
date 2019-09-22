const { EnrollService } = require('../services');
class EnrollController {
    constructor() {

    }

    async fetchAll(req, res, next) {
        const service = new EnrollService();

        const data = await service.fetchAll();

        res.json({ status: 'success', data });
    }

    fetchEnroll(req, res, next) {
        res.json({ data: 'fetchRegistration' });
    }

    async enroll(req, res, next) {
        const service = new EnrollService();
        const { idStudent, idClass, idDiscipline } = req.body;

        const data = await service.enroll(idStudent, idClass, idDiscipline);

        res.json({ status: 'success', data });
    }

}

module.exports = EnrollController;