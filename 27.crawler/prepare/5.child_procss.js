/**
 * Created by Yuan on 2016/4/3.
 */
var child_process = require('child_process');
var spawn = child_process.spawn;

//ִ��һ������ ����һ���ӽ���
var subprocess = spawn('curl', ['http://localhost:8080']);
subprocess.stdout.on('data',function(data){
    console.log(data.toString())
})
console.log('continue')


