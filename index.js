require('dotenv').config();
//var csurf = require('csurf');
const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

var cartRoute = require('./routes/cart.route');
var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route');
var db = require('./db');
var sessionMiddleware = require('./middlewares/session.middlewares');
var authMiddleware = require('./middlewares/auth.middlewares');
var productRoute = require('./routes/product.route');
var transferRoute = require('./routes/transfer.route');
var apiProductRoute = require('./api/routes/product.route');

const port = 8081;

const app = express();
app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.json()) ;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);
//app.use(csurf({cookie: true}));//security = token


app.get('/',(req,res) => {
      res.render('index',{
      	name:'Thuong'
      });
});
app.use('/users',authMiddleware.requireAuth,userRoute);
app.use('/auth',authRoute);
app.use('/products',productRoute);
app.use('/cart',cartRoute);
app.use('/transfer',transferRoute);
app.use('/api/products',apiProductRoute);

app.listen(port,()=> console.log(`server listen in port:${port}`));
