class ClassController {
    constructor() {

    }

    fetchAll(req, res, next) {
        res.json({ data: 'fetchAll' });
    }

    fetchClass(req, res, next) {
        res.json({ data: 'fetchClass' });
    }

}

module.exports = ClassController;