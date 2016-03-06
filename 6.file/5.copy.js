/**
 * Created by Yuan on 2016/3/6.
 */
var fs  =  require('fs');

function copy(src,target){
    fs.readFile(src,function(err,data){
        fs.writeFile(target,data,function(err){
            console.log('success');
        });
    });
}

copy('./name.txt','./copy.txt');