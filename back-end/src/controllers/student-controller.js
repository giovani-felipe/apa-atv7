class StudentController {
    constructor() {

    }

    fetchAll(req, res, next) {
        res.json({ data: 'fetchAll' });
    }

    fetchStudent(req, res, next) {
        res.json({ data: 'fetchStudent' });
    }

}

module.exports = StudentController;