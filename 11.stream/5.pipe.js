/**
 * Created by Yuan on 2016/3/13.
 */

var fs = require('fs');


function copy(src,target){
    var rs = fs.createReadStream(src);
    var ws = fs.createWriteStream(target);
    rs.pipe(ws);
}

copy('./index.txt','./write.txt');