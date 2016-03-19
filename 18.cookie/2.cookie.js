/**
 * Created by Yuan on 2016/3/19.
 */

var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());
app.get('/',function(req,res){
    if(req.cookies.visited){
        res.send('欢迎老朋友');
    }else{
        res.cookie('visited',1,{maxAge:10*1000});
        res.send("欢迎新朋友");
    }
});


app.listen(80);