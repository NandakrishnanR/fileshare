const path = require('path');

const express = require('express');

// const rootDir=require('../util/path');

const router = express.Router();

data=[]

router.get('/send',(req,res,next)=>{
    res.render('send')
});

router.post('/send',(req,res,next)=>{
    data.push({
        message:req.body.message,
        key:req.body.key
    });
    // console.log(data);
    res.redirect('/success');
});

exports.routes = router;
exports.data=data;