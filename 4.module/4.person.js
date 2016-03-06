/**
 * Created by Yuan on 2016/3/5.
 */
function Person(age){
    this.age = age;
    console.log(age);
}

var name = 'yyy';
exports.name = name;
exports.person = Person;

//module.exports = Person;