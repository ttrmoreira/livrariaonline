var mysql  = require('mysql');

function createDBConnection(){

    if (!process.env.NODE_ENV || process.env.NODE_ENV == 'development') {
        return mysql.createConnection({
            host: 'localhost',
            user: '<Entre aqui com seu usuário do banco de desenvolvimento>',
            password: '<Entre aqui com sua senha do banco de desenvolvimento>',
            database: 'casadocodigo_nodejs'
        });
    }

    if (process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
        	
            host: 'localhost',
            user: '<Entre aqui com seu usuário do banco de testes>',
            password: '<Entre aqui com sua senha do banco de produção>',
            database: 'casadocodigo_nodejs_test'
        });
    }

    var urlDeConexao = process.env.CLEARDB_DATABASE_URL;
    var grupos = urlDeConexao.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/);
    if (process.env.NODE_ENV == 'production') {
        return mysql.createConnection({
            
            host: grupos[3],
            user: grupos[1],
            password: grupos[2],
            database: grupos[4]
        });
    }



module.exports = function() {
    return createDBConnection;
}