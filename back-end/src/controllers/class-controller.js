const { ClasseService } = require('../services');
class ClassController {
    constructor() {

    }

    async fetchAll(req, res, next) {
        const service = new ClasseService();

        const data = await service.findAll();

        res.json({ status: 'success', data });
    }

    async fetchClass(req, res, next) {
        const service = new ClasseService();
        let { id } = req.params;
        const data = await service.findClass(id);

        res.json({ status: 'success', data });
    }

}

module.exports = ClassController;