const http = require('http');
const htmlProdutos = `<html><body><h1>Lista de Produtos</h1></body></html>`;
const htmlHome = `<html><body><h1>Home</h1></body></html>`;

const server = http.createServer( (req, res) => {
   if(req.url == '/produtos'){
      res.end(htmlProdutos);
   }else{
      res.end(htmlHome);   
   }
}).listen(3000);


console.log('Server is running at 3000');