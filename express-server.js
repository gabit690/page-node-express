const express = require('express');

const app = express();

app.use(express.json()); // Para que express entienda JSON

// Creación de multiples rutas

app.all('/user', (req, res, next) => {
  console.log("Se ejecuto app.all");
  next();
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

app.listen(3000, () => {
  console.log('Server Express on Port 3000');
});

//npx nodemon nombreDeArchivo.js