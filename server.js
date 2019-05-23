const http = require ('http');
const app = require('./app');

http.createServer(app).listen(4000);

 console.log('Servidor corriendo en puerto 4000');
