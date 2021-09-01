module.exports = (app) => {
    app.get('/produtos', (req, res) => {
        let connection = app.infra.connectionFactory;
        let produtoBanco = app.infra.produtoBanco;

        produtoBanco.lista(connection, (error, data) => {
            res.render('produtos/lista', {produtos:data})
        });

        connection.end();
    });
}