const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const sendData = require('./send');
const loginData=require('./login');

const router = express.Router();

// const data=sendData.data;
const data = loginData.data
console.log(loginData.data);

router.get('/', (req, res, next) => {
  // res.render('read',{data:data,docTitle:'read'});
  console.log(data);
});



module.exports = router;
