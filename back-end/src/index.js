const http = require('http');
const app = require('./middleware');

http.createServer(app).listen(3000, () => {
    console.log('Starting...')
});


