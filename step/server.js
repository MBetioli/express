//chama o express
var express = require('express');
var bodyParser = require('body-parser');


var alunos = require('./api/alunos');


//chama a biblioteca mongoose para conexao
var mongoose = require('mongoose');
//conecta com o banco
mongoose.connect('mongodb://localhost:27017/escola');

//cria a alicacao
var app = express();


//seta o diretorio inicial.
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());


app.use('/api',alunos);




//inicia o server.......
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
}) ;