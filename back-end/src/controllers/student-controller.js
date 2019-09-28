const { StudentService } = require('../services');
class StudentController {

    fetchAll(req, res, next) {
        const service = new StudentService();
        const data = service.fetchAll();
        res.json({ status: 'success', data });
    }

    fetchStudent(req, res, next) {
        const service = new StudentService();
        const { id } = req.params;

        const data = service.fetchStudent(id);
        res.json({ status: 'success', data });
    }
}

module.exports = StudentController;