const { ClasseService } = require('../services');
const fetch = require('node-fetch');

class ClassController {
    constructor() {

    }

    fetchAll(req, res, next) {
        const response = await fetch('http://localhost:8000/api/classes')
        const data = await response.json();
        res.json({ status: 'success', data: data.data});
    }

    fetchClass(req, res, next) {
        let { id } = req.params;
        const response = await fetch('http://localhost:8000/api/classes/'+id)
        const data = await response.json();
        res.json({ status: 'success', data: data.data});
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