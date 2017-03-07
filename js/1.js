//构造函数
function Person(){
    this.name = 'yuanyuan'
}

Person.prototype.sayName = function () {
    alert(this.name)
}

var person = new Person()
person.sayName()