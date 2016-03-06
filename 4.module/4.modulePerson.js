/**
 * Created by Yuan on 2016/3/5.
 */
function Person(name){
    this.name = name;
}

var age = 19;
//var exports = module.exports;
exports.age = age;

module.exports = Person;