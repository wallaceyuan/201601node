/**
 * Created by Yuan on 2016/3/13.
 */
var fs = require('fs');

var rs = fs.createReadStream('./index.txt',{

});

var ws = fs.createWriteStream('./write.txt',{

});

rs.setEncoding('utf8');

rs.on('data',function(data){
    rs.pause();
    setTimeout(function(){
        ws.write(data,'utf8',function(){
            console.log('开始'+data);
            rs.resume();
        });
    },1000);
});

rs.on('end',function(){
    console.log('end');
});