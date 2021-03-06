
const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var db = require('./db');
var authMiddleware = require('./middlewares/auth.middlewares');
const port = 8081;

const app = express();
app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(cookieParser());

app.set('view engine','pug');
app.set('views','./views');

app.get('/',(req,res) => {
      res.render('index',{
      	name:'Thuong'
      });
});
app.use('/users',authMiddleware.requireAuth,userRoute);
app.use('/auth',authRoute);

app.listen(port,()=> console.log(`server listen in port:${port}`));