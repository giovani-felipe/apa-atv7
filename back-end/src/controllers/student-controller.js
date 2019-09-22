const { StudentService } = require('../services');
class StudentController {

    fetchAll(req, res, next) {
        const service = new StudentService();
        const data = service.findAll();
        res.json({ status: 'success', data });
    }

    fetchStudent(req, res, next) {
        const service = new StudentService();
        const { id } = req.params;

        const data = service.findStudent(id);
        res.json({ status: 'success', data });
    }
}

module.exports = StudentController;