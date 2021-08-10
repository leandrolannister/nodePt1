module.exports = (app) => {
    app.get('/livros', (req, res) => {
        const connection = new app.infra.connectionFactory();
        let livros = app.infra.show;            

        livros.show(connection, (error, data) => {
            res.render('produtos/lista', {lista: data});
        }); 
        
        connection.end();
     });
}