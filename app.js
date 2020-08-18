const express = require('express');
const bodyParser = require('body-parser');

const app=express();

const homeRoutes=require('./routes/home');
const readRoutes=require('./routes/read');
const sendData=require('./routes/send');
const successRoutes=require('./routes/success');

app.set('view engine','pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(homeRoutes);
app.use(sendData.routes);
app.use(successRoutes);
app.use(readRoutes);

app.listen(3000);