class DisciplineController {
    constructor() {

    }

    fetchAll(req, res, next) {
        res.json({ data: 'fetchAll' });
    }

    fetchDiscipline(req, res, next) {
        res.json({ data: 'fetchClass' });
    }

}

module.exports = DisciplineController;