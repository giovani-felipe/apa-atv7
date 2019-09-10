const { Router } = require('express');
const router = Router();

const { HelloController } = require('../controllers');
const helloController = new HelloController();

const { ClassController } = require('../controllers');
const classController = new ClassController();

const { DisciplineController } = require('../controllers');
const disciplineController = new DisciplineController();

const { RegistrationController } = require('../controllers');
const registrationController = new RegistrationController();

const { StudentController } = require('../controllers');
const studentController = new StudentController();

//Hello
router.route('/v1/hello').get(helloController.hello);

//Class
router.route('/v1/class').get(classController.fetchAll);
router.route('/v1/class/:id').get(classController.fetchClass);

//Discipline
router.route('/v1/discipline').get(disciplineController.fetchAll);
router.route('/v1/discipline/:id').get(disciplineController.fetchDiscipline);

//Registration
router.route('/v1/registration').get(registrationController.fetchAll);
router.route('/v1/registration/:id').get(registrationController.fetchRegistration);

//Student
router.route('/v1/student').get(studentController.fetchAll);
router.route('/v1/student/:id').get(studentController.fetchStudent);



module.exports = router;

