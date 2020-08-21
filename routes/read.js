const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const sendData = require('./send');
const loginData=require('./login');

const router = express.Router();

// const data=sendData.data;

router.get('/', (req, res, next) => {
  const data = loginData.data
  console.log(data)
  res.render('read',{data:data,docTitle:'read'});
});



module.exports = router;
