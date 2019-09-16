const { StudentService } = require('../services')
class StudentController {
    constructor() {

    }

    async fetchAll(req, res, next) {
        const service = new StudentService()

        const data = await service.findAll()
        
        res.json({ status: 'success', data });
    }

    fetchStudent(req, res, next) {
        res.json({ data: 'fetchStudent' });
    }

}

module.exports = StudentController;