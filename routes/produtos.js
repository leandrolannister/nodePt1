module.exports = (app) => {
    app.get('/livros', (req, res) => { 
        let mysql = require('mysql');
        let connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            password: '',
            database: 'livro'
        });      
        let query = 'SELECT id, nome FROM  livros;';

        connection.query(query, (error, data) => {
            res.render('produtos/lista', {lista: data});
        });         
     });
}