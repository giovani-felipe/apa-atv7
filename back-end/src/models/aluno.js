const Base = require('./base');

class Aluno extends Base {
    constructor() {
        this._nome;
        this._matricula;
        this._cpf;
        this._telefone;
        this._email;
        this._endereco;
        this._nascimento;
    }

    get nome() { return this._nome; }
    get matricula() { return this._matricula; }
    get cpf() { return this._cpf; }
    get telefone() { return this._telefone; }
    get email() { return this._email; }
    get endereco() { return this._endereco; }
    get nascimento() { return this._nascimento; }
}

module.exports = Aluno;