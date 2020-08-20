const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const data = [];

router.get('/send', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'send.html'));
  res.render('send',{docTitle:'send'});
});

router.post('/send', (req, res, next) => {
  data.push({ 
    message: req.body.message,
    key:req.body.key 
    });
    // console.log(req.body)
  res.redirect('/');
});

exports.routes = router;
exports.data = data;
