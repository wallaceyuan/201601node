/**
 * Created by Yuan on 2016/3/5.
 */
var buffer = new Buffer('珠峰','utf8');
console.log(buffer);

console.log(buffer.toString('utf8',3,6));//包前不包后