/**
 * Created by Yuan on 2016/3/6.
 */
var fs = require('fs');


function afterRead(err,data){
    console.log(data);
}
try{
    var data = fs.readFileSync('./11.txt','utf8');
}catch(err){
    console.log(err);
}
console.log(data);
console.log('b');
console.log('c');
