/**
 * Created by Yuan on 2016/3/19.
 */
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());
app.get('/write',function(req,res){
    res.cookie('name','wallace',{
        path:'a.wallace.cn'
    });
    res.end('ok');
});

app.get('/read',function(req,res){
    console.log("Cookies: ", req.cookies)
});

app.listen(8181);