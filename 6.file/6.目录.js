/**
 * Created by Yuan on 2016/3/6.
 */
var fs = require('fs');
fs.mkdir('test/t1/t2',function(err){
    if(err){
        console.log('创建目录失败');
    }else{
        console.log('创建目录成功');
    }
});

function makup(path,callback){

}

fs.readdir('./test',function(err,files){
    files.forEach(function(file){
        fs.stat('./test/'+file,function(err,state){
            console.log(state.isDirectory());
            console.log(state.isFile());
            console.log(state.size);
        });
    });
});

fs.exists('./test',function(data){
    console.log(data);
})
