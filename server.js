// importar el modelo http
const { error } = require('console');
const http = require('http');

const fs = require('fs').promises;
//definir el puerto en el que se instancia el servidor
const port = 3000;


const servidor = http.createServer((req, res) => {
    fs.readFile('./index.html', 'utf-8')
    .then (
        data =>
        {console.log('Ejecucion con exito', data)}
    )
    .catch (
        err =>
        {console.log('Hubo un error en la ejecucion', err)}
        
    )
});


servidor.listen(port, () => {
    console.log(`el servidor esta corriendo en el puerto ${port}`);
});
