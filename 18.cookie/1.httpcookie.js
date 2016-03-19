/**
 * Created by Yuan on 2016/3/19.
 */
var http = require('http');


http.createServer(function(req,res){
    if(req.url =='/write'){
        res.writeHeader({'Set-Cookie':'name:zfpx;path:/;'});
        res.end('OK');
    }else if(req.url =='/read'){
        console.log(req.body.cookie);
    }
});