/**
 * Created by Yuan on 2016/3/6.
 */
var fs = require('fs');


function afterRead(err,data){
    console.log(data);
}

fs.readFile('./1.txt','utf8',afterRead);

console.log('b');
console.log('c');
