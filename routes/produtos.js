module.exports = (app) => {
    app.get('/produtos', (req, res) => {
        let connection = app.infra.connectionFactory();
        
        connection.query('select * from livros', (error, data) => {
            res.render('produtos/lista', {produtos:data})
        });
        
        connection.end();
    });
}