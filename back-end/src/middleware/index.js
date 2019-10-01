const express = require('express');
const cors = require('cors');
const { public } = require('../routes');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', public);

app.use((req, res, next) => {
    res.sendStatus(404);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ status: 'error', error: err.message });
});

module.exports = app;