//Importa as dependencias  a serem usadas ----------
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();




//Model aluno-------------------------
var Aluno =  mongoose.model('Alunos',{
	nome:String,
	idade:Number,
	profissao:String,
	curso:String,
	notas:[Number]

},'aluno');


//vamos criar uma api---------------------
router.get("/alunos",function(req, res) {
	//{}, "nome idade profissao curso notas" ,
	Aluno.find(function (err, doc) {
		
		if(err){ res.send(err); }

		res.json(doc);
	});

});

//Get one by post ---------------------------
router.get("/alunos/:id",function(req, res) {


	Aluno.find({'_id':req.params.id},"nome profissao curso notas",function (err, doc) {
		
		if(err){ res.send(err); }

		res.json(doc);
	});


	console.log(req.params.id);

});


//Adiciona via metodo post ---------------
router.post("/alunos",function(req, res) {

	var aluno = new Aluno({

		nome: req.body.nome,
		idade: req.body.idade,
		profissao: req.body.profissao,
		curso: req.body.curso,
		notas:req.body.notas

	})

	aluno.save(function(err){
		
		if(err){res.send(err);}
		res.json(aluno);

	});

});


//Edita o objeto ----------------------------
router.put("/alunos",function(req, res) {

	Aluno.findOne({_id:req.body._id}, function(err, doc){

		if(err){res.send(err);}

		doc.nome = req.body.nome,
		doc.idade = req.body.idade,
		doc.profissao = req.body.profissao,
		doc.curso = req.body.curso,
		doc.notas = req.body.notas


		doc.save();
		res.json(doc);
	});

});




//metodo de exclusao--------------------------------
router.delete("/alunos/del/:id",function(req, res) {



	Aluno.remove({_id:req.params.id}, function(err){
    
		if(err){
			console.log(err);
			res.send(err);
		}

		res.json('{no more user...}');
	})


});


module.exports = router;



