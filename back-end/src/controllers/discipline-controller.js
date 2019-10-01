const { DisciplineService } = require('../services');
const fetch = require('node-fetch');
class DisciplineController {
    constructor() {

    }

    async fetchAll(req, res, next) {
        const response = await fetch('http://localhost:8000/api/disciplines')
        const data = await response.json();
        res.json({ status: 'success', data: data.data});
    }

    async fetchDiscipline(req, res, next) {
        let { id } = req.params;
        const response = await fetch('http://localhost:8000/api/disciplines/'+id)
        const data = await response.json();
        res.json({ status: 'success', data: data.data});
    }

}

module.exports = DisciplineController;