
//Carrega framewoerl do express
const express = require('express');

//criando app com base do express
const app = express();


// quando for uma rota vazia, retorna um hello word...
app.get('/', function (req, res) {
  res.send('Hello World!!!!');
});

//inicia o server.......
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
}) ;