const mysql = require('mysql');

function createConnection(){
    return mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'livro'
    });        
}

module.exports = () => { return createConnection } 