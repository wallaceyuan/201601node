/**
 * Created by Yuan on 2016/4/2.
 */
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'admin',
    database:'stu'
});
connection.connect();
var username = 'zhangsan';
var password = 'zs';
//var sql = 'select * from student';
var insertsql = 'insert into user(username,password) value(?,?)';

connection.query(insertsql,[username,password],function(err,rows,fields){
    if(err){

    }else{
        console.log(rows);
        console.log(fields);
    }
});