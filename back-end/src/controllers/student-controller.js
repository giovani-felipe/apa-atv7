const { StudentService } = require('../services');
const fetch = require('node-fetch');

class StudentController {

    async fetchAll(req, res, next) {
        const response = await fetch('http://localhost:8000/api/students')
        const data = await response.json();
        res.json({ status: 'success', data: data.data});
    }

    async fetchStudent(req, res, next) {
        const { id } = req.params;
        const response = await fetch('http://localhost:8000/api/students/'+id)
        const data = await response.json();
        res.json({ status: 'success', data: data.data});
    }
}

module.exports = StudentController;