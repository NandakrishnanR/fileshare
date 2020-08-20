const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const sendData = require('./send');

const router = express.Router();

const data=sendData.data;

router.get('/', (req, res, next) => {
  res.render('read',{data:data,docTitle:'read'});
});

router.post('/',(req,res,next)=>{       //ongoing
  if (data.key==req.body.inputkey){
    console.log(data.message)
  }
})

module.exports = router;
