const http = require('http');

// Creación del servidor.
const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Usando Express');
});

server.listen(3000, () => {
    console.log('Server Node on port 3000');
});