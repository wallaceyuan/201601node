/**
 * Created by yuan on 2016/3/15.
 */
var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({extended:true}));//此中间件会把请求体提取出来放到req.body上
//app.use(bodyParser.json());//此中间件会把请求体提取出来放到req.body上

app.post('/reg',function(req,res){
/*    req.on('data',function(data){
        console.log(data);
    });
    req.on('end',function(data){
        res.end();
    });*/
    console.log(req.body);
    res.end('reg');
});
app.listen(8080);