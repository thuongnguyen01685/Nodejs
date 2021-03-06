
const express = require('express');
const bodyParser = require('body-parser');

var userRoute = require('./routes/user.route');
var db = require('./db');
const port = 8081;

const app = express();
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({ extended: true })) ;
app.use(express.static('public'))

app.set('view engine','pug');
app.set('views','./views');

app.get('/',(req,res) => {
      res.render('index',{
      	name:'Thuong'
      });
});
app.use('/users',userRoute);

app.listen(port,()=> console.log(`server listen in port:${port}`));