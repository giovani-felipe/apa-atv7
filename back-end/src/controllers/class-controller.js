const { ClasseService } = require('../services');
class ClassController {
    constructor() {

    }

    fetchAll(req, res, next) {
        const service = new ClasseService();

        const data = service.findAll();

        res.json({ status: 'success', data });
    }

    fetchClass(req, res, next) {
        const service = new ClasseService();
        let { id } = req.params;
        const data = service.findClass(id);

        res.json({ status: 'success', data });
    }

    fetchDisciplines(req, res, next) {
        const service = new ClasseService();

        const { id } = req.params;
        const data = service.findDisciplines(id);

        res.json({ status: 'success', data });
    }

}

module.exports = ClassController;