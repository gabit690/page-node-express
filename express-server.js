const express = require('express');
const morgan = require('morgan'); // Middleware de un logger

const app = express();

// Settings del servidor

app.set('appName', 'Practice Express');
app.set('port', 3000);
app.set('view engine', 'ejs');

// Middleware --> Manejador de peticion antes que llegue a su ruta final

app.use(express.json()); // Para que express entienda JSON

app.use(morgan('dev'));

// Rutas

// app.all('/user', (req, res, next) => {
//   console.log("Se ejecuto app.all");
//   next();
// });

app.get('/', (req, res) => {
  const data = [{name: 'Curly'}, {name: 'Larry'}, {name: 'Moe'}];
  res.render('index.ejs', {people: data});
});

app.get('/user', (req, res) => {
  res.json(
      {
          username: 'gabit',
          age: 300
      }
  );
});

app.post('/user/:id', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Peticion POST recibida');
});

app.put('/contact', (req, res) => {
    res.send('Peticion PUT recibida');
});

app.delete('/user/:userID', (req, res) => {
    res.send(`User ${req.params.userID} deleted`);
});

app.use(express.static('public'));  // Middleware usando para archivos estaticos e.j: front-end

app.listen(app.get('port'), () => {
  console.log(app.get('appName'));
  console.log('Server Express on Port ', app.get('port'));
});

//npx nodemon nombreDeArchivo.js