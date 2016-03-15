/**
 * Created by yuan on 2016/3/15.
 */
var express = require('express');

var app = express();

app.get('/hello', function (req,res) {
    console.log('host',req.host);
    console.log('path',req.path);
    console.log('query',req.query);
    res.send('欢迎来到首页');
});


app.get('/user/:id/:age', function (req,res) {
    console.log('id',req.params.id);
    console.log('age',req.params.age);
    res.send('欢迎来到user');
});
app.listen(8080);