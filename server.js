// importar el modelo http
const http = require('http');

//definir el puerto en el que se instancia el servidor
const port = 3000;


const servidor = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hola Pagina Principal');
    }
    else if (req.url === '/acerca') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Acerca de');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Pagina no encontrada');
    }
});


servidor.listen(port, () => {
    console.log(`el servidor esta corriendo en el puerto ${port}`);
});
