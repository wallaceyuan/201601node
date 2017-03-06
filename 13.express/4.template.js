
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine','ejs');
app.set('views',path.resolve('views'));

app.use(bodyParser.urlencoded({extended:true}));//此中间件会把请求体提取出来放到req.body上

app.use(function(request,response,next){
    console.log("In comes a "+request.method+ " to " + request.url)
    next();
})

app.use(function(request,response,next){
    //response.writeHead(200, { "Content-Type": "text/plain" });
    next();
})

var routes = require('./routes')(app);

app.listen(3000);



/*
function render(tmpl,data){
    return tmpl.replace(/\{\{(\w+)\}\}/,function(input,group1){
        console.log(arguments);
        return data[group1];
    });
}

var result =  render('<h1>{{title}}</h1>',{title:'欢迎'});
console.log(result);*/
