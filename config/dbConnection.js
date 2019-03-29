var mysql = require('mysql');

const connMysql = function(){

    console.log('Conexao com bd foi estabelecida.');

    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'portal_noticias'
    });

}

module.exports = function() {
    console.log('O autoload carregou o modo com o bd.')
    return connMysql;

}