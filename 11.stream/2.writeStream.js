/**
 * Created by Yuan on 2016/3/13.
 */
var fs = require('fs');

var ws = fs.createWriteStream('./write.txt',{

});

ws.write('珠','utf8',function(){
    console.log(1,arguments);
});
ws.write('峰','utf8',function(){
    console.log(2,arguments);
});
ws.end('培训','utf8');