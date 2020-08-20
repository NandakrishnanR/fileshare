const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sendData = require('./routes/send');
const readRoutes = require('./routes/read');

const app = express();

app.set('view engine','pug');
app.set('views','views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(sendData.routes);
app.use(readRoutes);

const port=process.env.PORT||3000;

app.listen(port);
