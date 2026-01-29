// importar el modelo http
const http = require('http');

const fs = require('fs');
//definir el puerto en el que se instancia el servidor
const port = 3000;


const servidor = http.createServer((req, res) => {
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Error al cargar la pagina');
            return;
        }
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    });
});


servidor.listen(port, () => {
    console.log(`el servidor esta corriendo en el puerto ${port}`);
});
