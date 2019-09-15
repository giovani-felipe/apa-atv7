const { DisciplineService } = require('../services');
class DisciplineController {
    constructor() {

    }

    async fetchAll(req, res, next) {
        let service = new DisciplineService();
        let data = await service.findAll();
        res.json({ status: 'success', data });
    }

    async fetchDiscipline(req, res, next) {
        res.json({ data: 'fetchClass' });
    }

}

module.exports = DisciplineController;