const path = require('path');

const express = require('express');

const sendData=require('./send');

const router=express.Router();

const data =sendData.data;

router.get('/login',(req, res, next)=>{
    res.render('login')
});

router.post('/login',(req,res,next)=>{
    
    console.log(req.body.inputkey);
    
    res.redirect('/');
})

module.exports=router;