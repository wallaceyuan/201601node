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
    console.log('得到数据'+data);
});

rs.on('end',function(){
    console.log('end');
});