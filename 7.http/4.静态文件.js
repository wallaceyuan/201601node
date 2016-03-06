/**
 * Created by Yuan on 2016/3/6.
 */
var http = require('http');
var mime = require('mime');
var url = require('url');//对URL进行处理，把字符串转成对象
var fs = require('fs');


function server(request,response){
    var urlObject = url.parse(request.url,true);
    var pathname = urlObject.pathname;
    if(pathname == '/'){
        response.setHeader('Content-Type','text/html;charset=utf-8');
        fs.readFile('./index.html',function(err,data){
            response.write(data);
            response.end();
        });
    }else if(pathname == '/favicon.ico'){
        response.end();
    }else{
        static(pathname,response);
    }
}

function static(pathname,response){
    console.log(pathname);
    response.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');
    fs.readFile(pathname.slice(1),function(err,data){
        response.write(data);
        response.end();
    });
}

var server = http.createServer(server);

server.listen(8080,'localhost');
