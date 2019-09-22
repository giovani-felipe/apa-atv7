const { DisciplineService } = require('../services');
class DisciplineController {
    constructor() {

    }

    fetchAll(req, res, next) {
        let service = new DisciplineService();
        let data = service.findAll();
        res.json({ status: 'success', data });
    }

<<<<<<< HEAD
    fetchDiscipline(req, res, next) {
        let service = new DisciplineService();
        let { id } = req.params;

        let data = service.findDiscipline(id);
=======
    async fetchDiscipline(req, res, next) {
        const service = new DisciplineService();
        let { id } = req.params;
        const data = await service.findDiscipline(id);

>>>>>>> fdf8e5224f2c5913f87abd3de5b57d67db4a8c4c
        res.json({ status: 'success', data });
    }

}

module.exports = DisciplineController;