/**
 * Created by Yuan on 2016/3/12.
 */
var http = require('http');

var url = require('url');

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pahtname = urlObj.pathname;
    var query = urlObj.query;
    if(pahtname =='/books'){
        res.end(query.callback+'(["'+query.name+'"])');
    }
}).listen(8080);