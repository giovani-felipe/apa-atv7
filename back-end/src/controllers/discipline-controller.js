const { DisciplineService } = require('../services');
class DisciplineController {
    constructor() {

    }

    fetchAll(req, res, next) {
        let service = new DisciplineService();
        let data = service.findAll();
        res.json({ status: 'success', data });
    }

    fetchDiscipline(req, res, next) {
        let service = new DisciplineService();
        let { id } = req.params;

        let data = service.findDiscipline(id);
        res.json({ status: 'success', data });
    }

}

module.exports = DisciplineController;