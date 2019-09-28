const { ClasseService } = require('../services');
class ClassController {
    constructor() {

    }

    fetchAll(req, res, next) {
        const service = new ClasseService();

        const data = service.fetchAll();

        res.json({ status: 'success', data });
    }

    fetchClass(req, res, next) {
        const service = new ClasseService();
        let { id } = req.params;
        const data = service.fetchClass(id);

        res.json({ status: 'success', data });
    }

    fetchDisciplines(req, res, next) {
        const service = new ClasseService();
        const { id } = req.params;
        const data = service.fetchDisciplines(id);

        res.json({ status: 'success', data });
    }

    fetchDiscipline(req, res, next) {
        const service = new ClasseService();

        const { id, idDiscipline } = req.params;
        const data = service.fetchDiscipline(id, idDiscipline);

        res.json({ status: 'success', data });
    }

}

module.exports = ClassController;