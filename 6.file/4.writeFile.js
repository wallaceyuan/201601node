/**
 * Created by Yuan on 2016/3/6.
 */
var fs = require('fs');


fs.writeFile('./write.txt','node',function(err){
    console.log('success');
});

fs.appendFile('./write.txt','test','utf8');