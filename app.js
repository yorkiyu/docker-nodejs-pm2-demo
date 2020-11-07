const http = require('http');

http.createServer((request, response) => {
    return 'Docker-Nodejs-PM2-Demo, Hello World!';
}).listen(8080);