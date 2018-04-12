module.exports = function(app){
    app.get("/",function(req,res){


		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		produtosDAO.lista(function(err, resultados){   

			if (err){
				console.log('Erro!');
				console.log(err);
			} else {
				res.render('home/index',{livros:resultados});
				console.log('Abrindo a view...');
			}

		}); 
		connection.end();
    });