/**
 * Created by yuan on 2016/4/6.
 */
var http = require('http');
http.createServer(function(req,res){
    res.end('hello');


}).listen(8080);