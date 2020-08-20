const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const sendData = require('./send');

const router = express.Router();

router.get('/', (req, res, next) => {
  // console.log(sendData.data);
  const data=sendData.data;
  // res.sendFile(path.join(rootDir, 'views', 'read.html'));
  res.render('read',{data:data,docTitle:'read'});
});

module.exports = router;
