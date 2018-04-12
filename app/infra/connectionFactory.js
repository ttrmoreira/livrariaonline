var mysql  = require('mysql');

function createDBConnection(){

    if (!process.env.NODE_ENV || process.env.NODE_ENV == 'development') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'zx4d98pio',
            database: 'casadocodigo_nodejs'
        });
    }

    if (process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
        	
            host: 'localhost',
            user: 'root',
            password: 'zx4d98pio',
            database: 'casadocodigo_nodejs_test'
        });
    }

    // var urlDeConexao = process.env.CLEARDB_DATABASE_URL;
    // var grupos = urlDeConexao.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/);
    // if (process.env.NODE_ENV == 'production') {
    //     return mysql.createConnection({
            
    //         host: grupos[3],
    //         user: grupos[1],
    //         password: grupos[2],
    //         database: grupos[4]
    //     });
    // }

     if (process.env.NODE_ENV == 'production') {
        return mysql.createConnection({
            
            host: 'us-cdbr-iron-east-05.cleardb.net',
            user: 'beb74d51d39b1a',
            password: '35e9092f',
            database: 'heroku_5a872c52c806227'
        });
    }
}

module.exports = function() {
    return createDBConnection;
}