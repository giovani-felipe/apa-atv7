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
router.route('/classes').get(classController.fetchAll);
router.route('/classes/:id').get(classController.fetchClass);
router.route('/classes/:id/disciplines').get(classController.fetchDisciplines);
router.route('/classes/:id/disciplines/:idDiscipline').get(classController.fetchDiscipline);

//Discipline
router.route('/disciplines').get(disciplineController.fetchAll);
router.route('/disciplines/:id').get(disciplineController.fetchDiscipline);

//Enroll
router.route('/enrolls')
  .get(enrollController.fetchAll)
  .post(enrollController.enroll);
router.route('/enrolls/:id').get(enrollController.fetchEnroll);

//Student
router.route('/students').get(studentController.fetchAll);
router.route('/students/:id').get(studentController.fetchStudent);



module.exports = router;

