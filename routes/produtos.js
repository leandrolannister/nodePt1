module.exports = (app) => {
    app.get('/produtos', (req, res) => {
        const connection = app.infra.connectionFactory;
        const produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista((error, data) => {            
           res.render('produtos/lista', {produtos:data});           
        });        
    });

    app.get('/produtos/form', (req, res) => {
        res.render('produtos/form');
    });

    app.post('/produtos', (req, res) => {
       const produto = req.body;
       const connection = app.infra.connectionFactory;
       const produtosDAO = new app.infra.ProdutosDAO(connection);

       produtosDAO.salva(produto, (error, result) => {
          res.redirect('/produtos');
       });
    });
}