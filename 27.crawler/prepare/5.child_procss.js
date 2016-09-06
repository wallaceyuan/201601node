/**
 * Created by Yuan on 2016/4/3.
 */
var child_process = require('child_process');
var spawn = child_process.spawn;

//执行一个命令 开启一个子进程
var subprocess = spawn('curl', ['http://localhost:8080']);
subprocess.stdout.on('data',function(data){
    console.log(data.toString())
})
console.log('continue')


