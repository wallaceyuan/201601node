/**
 * Created by Yuan on 2016/3/6.
 */
var http = require('http');

function server(request,response){
    response.write(new Date().toString());
    response.end();
}



var server = http.createServer(server);

server.listen(8080,'localhost');

