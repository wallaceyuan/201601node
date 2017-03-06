/**
 * Created by yuan on 2016/3/15.
 */
var express = require('express');
var path = require('path');

var app = express();


app.set('view engine','ejs');
app.set('views',path.resolve('views'));

app.get('/',function(req,res){
    res.render('index',{title:'主页',
        book:{
            name:'node.js'
        }
    });
});

app.get('/reg',function(req,res){
    res.render('index',{title:'主页',book:{
        name:'node.js'
    }});
});

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
