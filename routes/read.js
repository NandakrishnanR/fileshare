const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const sendData = require('./send');
const loginData=require('./login');

const router = express.Router();

// const data=sendData.data;

router.get('/', (req, res, next) => {
  const msg = loginData.msg
  console.log(msg)
  res.render('read',{msg:msg,docTitle:'read'});
});


module.exports = router;
