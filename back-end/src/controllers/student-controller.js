const { StudentService } = require('../services');
const validator = require('validator');

class StudentController {

    constructor() {}

    async fetchAll(req, res, next) {

        let service = new StudentService();
        let data = await service.findAll();
        res.json({ status: 'success', data });
    }

    async fetchStudent(req, res, next) {

        const service = new StudentService();
        let { id } = req.body;
        const data = await service.findStudent(id);

        res.json({status: 'success', data});
    }

    async saveStudent(req, res, next) {

        const service = new StudentService();

        let name = validator.trim(validator.escape(req.body('name')));
        let registration = validator.trim(validator.escape(req.body('registration')));
        let cpf = validator.trim(validator.escape(req.body('cpf')));
        let fone = validator.trim(validator.escape(req.body('fone')));
        let email = validator.trim(validator.escape(req.body('email')));
        let address = validator.trim(validator.escape(req.body('address')));
        let birt = validator.trim(validator.escape(req.body('birt')));

        let object = {name: name,registration: registration,cpf: cpf,fone: fone,email: email,address: address,birth: birth};

        const data = await service.createStudent(object);

        res.json({status: 'sucess', data});
    }

    async updateStudent(req, res, next) {

        const service = new StudentService();
        let { id } = req.body;

        let name = validator.trim(validator.escape(req.body('name')));
        let registration = validator.trim(validator.escape(req.body('registration')));
        let cpf = validator.trim(validator.escape(req.body('cpf')));
        let fone = validator.trim(validator.escape(req.body('fone')));
        let email = validator.trim(validator.escape(req.body('email')));
        let address = validator.trim(validator.escape(req.body('address')));
        let birt = validator.trim(validator.escape(req.body('birt')));

        let object = {name: name,registration: registration,cpf: cpf,fone: fone,email: email,address: address,birth: birth};

        const data = await service.putStudent(id, object);

        res.json({status: 'sucess', data});
    }

    async deleteStudent(req, res, next) {

        const service = new StudentService();
        let { id } = req.body;
        const data = await service.destroyStudent(id);

        res.json({status: 'success', data});
    }
}

module.exports = StudentController;