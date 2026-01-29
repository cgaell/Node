// importar el modelo http
const http = require('http');

//definir el puerto en el que se instancia el servidor
const port = 3000;


const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola Mundo');
});


servidor.listen(port, () => {
    console.log(`el servidor esta corriendo en el puerto ${port}`);
});
