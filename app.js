const app = require('./config/express')();
const routes = require('./routes/produtos')(app);

app.listen(3000, function(){
    console.log('Server is running');
});


