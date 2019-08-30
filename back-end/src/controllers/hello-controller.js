class HelloController {
    constructor() {

    }

    hello(req, res, next) {
        res.json({ hello: 'Hello Marco!' });
    }

}

module.exports = HelloController;