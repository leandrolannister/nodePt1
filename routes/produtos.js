module.exports = (app) => {
    app.get('/produtos', (req, res) => {
        let connection = app.infra.connectionFactory;
        var produtosBanco = new app.infra.ProdutosDAO(connection);

        produtosBanco.lista((error, data) => {
           res.render('produtos/lista', {produtos:data});           
        }).end();
    });

    app.get('/produtos/form', (req, res) => {
        res.render('produtos/form');
    });

}