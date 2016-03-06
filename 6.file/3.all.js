/**
 * Created by Yuan on 2016/3/6.
 */

var fs = require('fs');

var person = {};

function show(){
    console.log(Object.keys(person));
    if(Object.keys(person).length == 2){
        console.log(person);
    }
}

fs.readFile('./age.txt','utf8',function(err,age){
    person.age = age;
    show();
});
fs.readFile('./name.txt','utf8',function(err,name){
    person.name = name;
    show();
});