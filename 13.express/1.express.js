/**
 * Created by Yuan on 2016/3/13.
 */
var express = require('express');

var app = express();

app.get('/user/:id',function(req,res){
    res.send('Hello World');
});

app.listen(3000);