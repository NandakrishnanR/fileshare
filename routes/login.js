const path = require('path');

const express = require('express');

const sendData=require('./send');

const router=express.Router();

const data =sendData.data;

var d1;

router.get('/login',(req, res, next)=>{
    res.render('login')
});

router.post('/login',(req,res,next)=>{
    const k=req.body.inputkey;
    for(i in data) {
        if(data[i].key==k){
            console.log(data[i]);
            d1=data[i];
            res.redirect('/')
        }
        else{
            d1=[]
        }
    }
})

exports.routes=router;
exports.data=d1;