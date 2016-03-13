/**
 * Created by Yuan on 2016/3/13.
 */
var fs = require('fs');

var rs = fs.createReadStream('./index.txt',{
    start:1,
    end:4,
    hightWaterMark:1
});

rs.setEncoding('utf8');

rs.on('data',function(data){
    rs.pause();
    setTimeout(function(){
        console.log('开始'+data);
        rs.resume();
    },1000);
});

rs.on('end',function(){
    console.log('end');
});