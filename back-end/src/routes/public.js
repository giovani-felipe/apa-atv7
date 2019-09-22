const { Router } = require('express');
const router = Router();

const { HelloController, ClassController, DisciplineController, EnrollController, StudentController } = require('../controllers');

const helloController = new HelloController();
const classController = new ClassController();
const disciplineController = new DisciplineController();
const enrollController = new EnrollController();
const studentController = new StudentController();

//Hello
router.route('/hello').get(helloController.hello);

//Class
router.route('/class').get(classController.fetchAll);
router.route('/class/:id').get(classController.fetchClass);
router.route('/class/disciplines/:id').get(classController.fetchDisciplines);

//Discipline
router.route('/discipline').get(disciplineController.fetchAll);
router.route('/discipline/:id').get(disciplineController.fetchDiscipline);

//Enroll
router.route('/enroll')
  .get(enrollController.fetchAll)
  .post(enrollController.enroll);
router.route('/enroll/:id').get(enrollController.fetchEnroll);

//Student
router.route('/students').get(studentController.fetchAll);
router.route('/students/:id').get(studentController.fetchStudent);



module.exports = router;

