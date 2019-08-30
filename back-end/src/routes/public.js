const { Router } = require('express');
const { HelloController } = require('../controllers');
const router = Router();
const helloController = new HelloController();


router.route('/hello')
    .get(helloController.hello);

module.exports = router;