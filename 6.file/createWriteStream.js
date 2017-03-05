/**
 * Created by Yuan on 2017/3/5.
 */

var fs = require('fs')
var str = 'test'
var out = fs.createWriteStream('./writestream.txt',{encoding:'utf8'})
out.write(str);
out.end();