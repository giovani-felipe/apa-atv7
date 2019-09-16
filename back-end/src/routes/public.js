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
router.route('/hello').get(helloController.hello);

//Class
router.route('/class').get(classController.fetchAll);
router.route('/class/:id').get(classController.fetchClass);

//Discipline
router.route('/discipline').get(disciplineController.fetchAll);
router.route('/discipline/:id').get(disciplineController.fetchDiscipline);

//Registration
router.route('/registration').get(registrationController.fetchAll);
router.route('/registration/:id').get(registrationController.fetchRegistration);

//Student
router.route('/student').get(studentController.fetchAll);
router.route('/student/:id').get(studentController.fetchStudent);
router.route('/student').post(studentController.saveStudent);
router.route('/student').put(studentController.updateStudent);
router.route('/student/:id').delete(studentController.deleteStudent);



module.exports = router;

