const { DisciplineService } = require('../services');
class DisciplineController {
    constructor() {

    }

    fetchAll(req, res, next) {
        const response = await fetch('http://localhost:8000/api/disciplines')
        const data = await response.json();
        res.json({ status: 'success', data: data.data});
    }

    fetchDiscipline(req, res, next) {
        let { id } = req.params;
        const response = await fetch('http://localhost:8000/api/disciplines/'+id)
        const data = await response.json();
        res.json({ status: 'success', data: data.data});
    }

}

module.exports = DisciplineController;