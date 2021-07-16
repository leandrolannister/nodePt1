module.exports = (app) => {
    app.get('/livros', (req, res) => { 
        let query = 'SELECT id, nome FROM  livros;';
        let connection = app.infra.connectionFactory();

        connection.query(query, (error, data) => {
            res.render('produtos/lista', {lista: data});
        }); 
        
        connection.end();
     });
}