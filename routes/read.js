const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const sendData = require('./send');

const router = express.Router();

data=sendData.data;

router.get('/', (req, res, next) => {
  console.log(sendData.data);
  res.sendFile(path.join(rootDir, 'views', 'read.html'));

});

module.exports = router;
