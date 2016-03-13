/**
 * Created by Yuan on 2016/3/13.
 */
var express = require('express');

var app = express();

app.use(function(req,res,next){
    res.mmy = 100;
    next();
});
app.use(function(req,res,next){
    res.mmy = res.mmy -10;
    next();
});
app.use(function(req,res,next){
    res.mmy = res.mmy -20;
    next();
});

app.get('/money',function(req,res){
    console.log(''+res.mny);
});
app.listen(3002);
