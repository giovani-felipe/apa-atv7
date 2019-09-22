const { Registration: repository } = require('../repositories/models');
const { RegistrationDomain } = require('../domain');

class RegistrationService {

  async findAll() {
    let data = await repository.findAll(
      {
        include: [{ model: Registration, attributes: { exclude: ['createdAt', 'updatedAt'] } }],
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      });

    let registration = [];

    data.forEach(ele => {

      let registration = [];

      ele.forEach(({ id, name }) => registration.push(new RegistrationDomain(id, name)));

      students.push(new RegistrationDomain(ele.id, ele.name, Students))
    });

    return registration;
  }

  async findRegistration(id = null) {
    if (id === null)
      throw new Error('Student id is necessary!');

    let data = await repository.findOne(
      {
        where: { id },
        include: [{ model: Student, attributes: { exclude: ['createdAt', 'updatedAt'] } }],
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      });

    let registration = [];

    data.Registration.forEach(({ id, classe, code, state }) => registration.push(new RegistrationDomain(id, classe, code, state)));

    return new RegistrationDomain(data.id, data.classe, data.code, data.state);
  }
}

module.exports = RegistrationService;