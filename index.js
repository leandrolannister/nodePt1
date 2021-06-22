const http = require('http');

const server = http.createServer( (req, res) => {
   if(req.url == '/produtos'){
      res.end(`<html>
                 <body>
                     <h1>Listando Produtos</h1>
                  </body>
               </html>`);
   }else{
      res.end(`<html>
      <body>
          <h1>Home</h1>
       </body>
    </html>`);   
   }
}).listen(3000);


console.log('Server is running at 3000');