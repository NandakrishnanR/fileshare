const path = require('path');

const express = require('express');

const sendData=require('./send');

const router=express.Router();

const data =sendData.data;

router.get('/login',(req, res, next)=>{
    res.render('login')
});

router.post('/login',(req,res,next)=>{
    const k=req.body.inputkey;
    // console.log(k)
    for(i in data) {
        if(data[i].key==k){
            console.log(data[i]);
            exports.data=data[i];
            res.redirect('/')
        }
        else{
            res.redirect('/notfound');
        }
    }
})


exports.routes=router;