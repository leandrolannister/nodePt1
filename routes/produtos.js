const connection = require('../app/infra/connectionFactory')();

module.exports = (app) => {
    app.get('/livros', (req, res) => { 
        let query = 'SELECT id, nome FROM  livros;';

        connection.query(query, (error, data) => {
            res.render('produtos/lista', {lista: data});
        }); 
        
        connection.end();
     });
}