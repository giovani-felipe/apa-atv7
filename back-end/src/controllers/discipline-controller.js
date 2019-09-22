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
        const service = new DisciplineService();
        let { id } = req.params;
        const data = await service.findDiscipline(id);

        res.json({ status: 'success', data });
    }

}

module.exports = DisciplineController;