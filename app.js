const app = require('./config/express')();

app.get('/produtos', (req, res) => { 
   res.render("produtos/lista"); 
});

app.listen(3000, function(){
    console.log('Server is running');
});


