const express = require('express')();
const htmlHome = `<html><body><h1>Home</h1></body></html>`;
const htmlProdutos = `<html><body><h1>Lista de Produtos</h1></body></html>`;

express.get('/', (req, res) => { res.send(htmlHome); });

express.get('/produtos', (req, res) => { res.send(htmlProdutos); });

express.listen(3000, function(){
    console.log('Server is running');
});


