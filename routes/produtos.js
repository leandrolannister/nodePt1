module.exports = (app) => {
    app.get('/livros', (req, res) => { 
        let livros = app.infra.show;

        livros.show(app.infra.connectionFactory(), (error, data) => {
            res.render('produtos/lista', {lista: data});
        }); 
        
        connection.end();
     });
}