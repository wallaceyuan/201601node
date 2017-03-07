
function Person() {
}

Person.prototype.sayName = function(){
    console.log(this.name);
    console.log('arguments',arguments)
}

var obj = {name:'yuan'}

Person.prototype.sayName.apply(obj,[1,2,4])

Person.prototype.sayName.call(obj,1,2,3)

var sn = Person.prototype.sayName.bind(obj)

sn([1,2])