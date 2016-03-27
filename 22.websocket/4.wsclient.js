/**
 * Created by Yuan on 2016/3/27.
 */
var WebScoket = require('ws');

var ws = new WebScoket('ws://localhost:8080');

ws.on('open',function(){
    ws.send('你好服务器');
});



//监听服务器发回来的消息
ws.on('message',function(data,flags){
    console.log(data);
});
